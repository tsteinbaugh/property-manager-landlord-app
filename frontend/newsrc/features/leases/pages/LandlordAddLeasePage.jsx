// newsrc/features/leases/pages/LandlordAddLeasePage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { apiFetch } from "@lib/apiClient.js";
import { propertiesApi } from "@features/properties/api/properties.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";
import styles from "@shared/styles/LandlordPage.module.css";

const LEASE_DRAFT_KEY = "leaseDraft";
const LEASE_DRAFT_RETURN_KEY = "leaseDraftReturnTo";

function trimOrEmpty(v) {
  return typeof v === "string" ? v.trim() : "";
}

function isActiveLease(lease) {
  if (!lease) return false;
  if (lease.status !== "ACTIVE") return false;
  if (!lease.landlordId) return false;
  if (!lease.propertyId) return false;

  const hasAnyTenant =
    !!lease.tenantId ||
    (Array.isArray(lease.leaseTenants) && lease.leaseTenants.length > 0);
  if (!hasAnyTenant) return false;

  if (!lease.startDate) return false;

  const today = new Date();
  const start = new Date(lease.startDate);
  if (Number.isNaN(start.getTime())) return false;
  if (today < start) return false;

  if (!lease.endDate) return true;

  const end = new Date(lease.endDate);
  if (Number.isNaN(end.getTime())) return true;

  return today <= end;
}

async function uploadLeaseFile(leaseId, file, token) {
  if (!leaseId || !file || !token) return;

  const form = new FormData();
  form.append("file", file);

  const res = await fetch(`/api/leases/${leaseId}/file`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(txt || `Upload failed (${res.status})`);
  }

  return res.json().catch(() => null);
}

export default function LandlordAddLeasePage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const qsPropertyId = searchParams.get("propertyId") || "";
  const qsTenantId = searchParams.get("tenantId") || "";
  const qsLeaseId = searchParams.get("leaseId") || ""; // <-- EDIT MODE

  const isEditMode = !!qsLeaseId;

  const fromPropertyContext = !!qsPropertyId;
  const fromTenantContext = !!qsTenantId;

  const propertyLockedFromQuery = fromPropertyContext && !isEditMode;
  const tenantLockedFromQuery = fromTenantContext && !isEditMode;

  const mode = fromPropertyContext && fromTenantContext
    ? "BOTH"
    : fromTenantContext
      ? "TENANT"
      : fromPropertyContext
        ? "PROPERTY"
        : "GLOBAL";

  // ------------------------------------------------------------
  // Loaded lists
  // ------------------------------------------------------------
  const [properties, setProperties] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [leases, setLeases] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(null);

  // ------------------------------------------------------------
  // Form state
  // ------------------------------------------------------------
  const [propertyId, setPropertyId] = useState("");
  const [selectedTenantIds, setSelectedTenantIds] = useState([]);
  const [tenantPickerId, setTenantPickerId] = useState("");

  const [draftNewTenants, setDraftNewTenants] = useState([]);
  const [draftProperty, setDraftProperty] = useState(null);

  const [rentAmount, setRentAmount] = useState("");
  const [status, setStatus] = useState("DRAFT");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [leaseFile, setLeaseFile] = useState(null);

  const [isSaving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  // Link existing draft lease (create-mode only)
  const [selectedLeaseId, setSelectedLeaseId] = useState("");
  const [hydratedDraft, setHydratedDraft] = useState(false);

  // ------------------------------------------------------------
  // Load properties + tenants + leases
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setLoadingError(null);

        const [props, ts, ls] = await Promise.all([
          propertiesApi.list({ token }),
          tenantsApi.list({ token }),
          leasesApi.listAll({ includeArchived: false, token }),
        ]);

        if (cancelled) return;

        setProperties(Array.isArray(props) ? props : []);
        setTenants(Array.isArray(ts) ? ts : []);
        setLeases(Array.isArray(ls) ? ls : []);

        // Context defaults only in create-mode
        if (!isEditMode) {
          const propertyMatch = (Array.isArray(props) ? props : []).some((p) => p.id === qsPropertyId);
          const tenantMatch = (Array.isArray(ts) ? ts : []).some((t) => t.id === qsTenantId);

          if (qsPropertyId && propertyMatch) setPropertyId(qsPropertyId);
          else setPropertyId("");

          if (qsTenantId && tenantMatch) setSelectedTenantIds([qsTenantId]);
          else setSelectedTenantIds([]);
        }
      } catch (err) {
        console.error("Failed to load properties/tenants/leases for lease", err);
        if (!cancelled) setLoadingError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (token) load();
    else {
      setLoading(false);
      setLoadingError(new Error("Missing auth token"));
    }

    return () => { cancelled = true; };
  }, [token, qsPropertyId, qsTenantId, isEditMode]);

  // ------------------------------------------------------------
  // EDIT MODE: load lease + hydrate form
  // (no draft/session stuff in edit mode)
  // ------------------------------------------------------------
  useEffect(() => {
    if (!isEditMode || !token || loading) return;

    let cancelled = false;

    async function loadLease() {
      try {
        const l = await leasesApi.get(qsLeaseId, { token });
        if (cancelled) return;

        setPropertyId(l?.propertyId || "");
        const lt = Array.isArray(l?.leaseTenants) ? l.leaseTenants : [];
        setSelectedTenantIds(Array.from(new Set(lt.map((x) => x.tenantId).filter(Boolean))));

        setRentAmount(l?.rentAmount == null ? "" : String(l.rentAmount));
        setStatus(l?.status || "DRAFT");
        setStartDate(l?.startDate || "");
        setEndDate(l?.endDate || "");
      } catch (err) {
        console.error("Failed to load lease for edit", err);
        setLoadingError(err);
      } finally {
        setHydratedDraft(true);
      }
    }

    loadLease();

    return () => { cancelled = true; };
  }, [isEditMode, qsLeaseId, token, loading]);

  // ------------------------------------------------------------
  // CREATE MODE ONLY: hydrate from draft + persist draft
  // ------------------------------------------------------------
  useEffect(() => {
    if (!token || loading || hydratedDraft || isEditMode) return;

    const raw = sessionStorage.getItem(LEASE_DRAFT_KEY);
    if (!raw) {
      setHydratedDraft(true);
      return;
    }

    try {
      const draft = JSON.parse(raw);

      if (draft.propertyId) setPropertyId(draft.propertyId);

      if (Array.isArray(draft.selectedTenantIds)) {
        const base = new Set(draft.selectedTenantIds);
        if (qsTenantId && !base.has(qsTenantId)) base.add(qsTenantId);
        setSelectedTenantIds(Array.from(base));
      }

      if (Array.isArray(draft.draftNewTenants)) setDraftNewTenants(draft.draftNewTenants);
      if (draft.draftProperty) setDraftProperty(draft.draftProperty);

      if (draft.rentAmount != null) setRentAmount(String(draft.rentAmount));
      if (draft.status) setStatus(draft.status);
      if (draft.startDate) setStartDate(draft.startDate);
      if (draft.endDate) setEndDate(draft.endDate);
    } catch (e) {
      console.warn("Failed to parse leaseDraft from sessionStorage", e);
    } finally {
      setHydratedDraft(true);
    }
  }, [token, loading, hydratedDraft, qsTenantId, isEditMode]);

  useEffect(() => {
    if (!hydratedDraft || isEditMode) return;

    const draft = {
      propertyId,
      selectedTenantIds,
      draftNewTenants,
      draftProperty,
      rentAmount,
      status,
      startDate,
      endDate,
    };

    try {
      sessionStorage.setItem(LEASE_DRAFT_KEY, JSON.stringify(draft));
    } catch (e) {
      console.warn("Failed to persist leaseDraft", e);
    }
  }, [
    hydratedDraft,
    isEditMode,
    propertyId,
    selectedTenantIds,
    draftNewTenants,
    draftProperty,
    rentAmount,
    status,
    startDate,
    endDate,
  ]);

  // ------------------------------------------------------------
  // Compute availability (create mode UX)
  // ------------------------------------------------------------
  const usedPropertyIds = useMemo(() => {
    const s = new Set();
    for (const l of leases) {
      if (!isActiveLease(l)) continue;
      if (l.propertyId) s.add(l.propertyId);
    }
    return s;
  }, [leases]);

  const availableProperties = useMemo(() => {
    return properties.filter((p) => !usedPropertyIds.has(p.id) || p.id === propertyId);
  }, [properties, usedPropertyIds, propertyId]);

  const availableTenantsForPicker = useMemo(() => {
    return tenants.filter((t) => !selectedTenantIds.includes(t.id));
  }, [tenants, selectedTenantIds]);

  const hasDraftProperty =
    draftProperty && draftProperty.address1 && trimOrEmpty(draftProperty.address1);

  const candidateLeases = useMemo(() => {
    return leases.filter((l) => {
      if ((l.status || "DRAFT") !== "DRAFT") return false;
      if (fromPropertyContext && l.propertyId) return false;

      if (fromTenantContext && qsTenantId) {
        const alreadyLinked = Array.isArray(l.leaseTenants)
          ? l.leaseTenants.some((lt) => lt.tenantId === qsTenantId)
          : false;
        if (alreadyLinked) return false;
      }

      if (!fromPropertyContext && !fromTenantContext) return false;
      return true;
    });
  }, [leases, fromPropertyContext, fromTenantContext, qsTenantId]);

  const canLinkExisting =
    !isEditMode && (fromPropertyContext || fromTenantContext) && candidateLeases.length > 0;

  // ------------------------------------------------------------
  // Tenant helpers
  // ------------------------------------------------------------
  const handleAddTenantToLease = () => {
    if (!tenantPickerId) return;
    setSelectedTenantIds((prev) =>
      prev.includes(tenantPickerId) ? prev : [...prev, tenantPickerId]
    );
    setTenantPickerId("");
  };

  const handleRemoveTenantFromLease = (id) => {
    if (tenantLockedFromQuery && id === qsTenantId) return;
    setSelectedTenantIds((prev) => prev.filter((tid) => tid !== id));
  };

  // ------------------------------------------------------------
  // Nav: create new tenant/property (create-mode only)
  // ------------------------------------------------------------
  const handleGoCreateNewTenant = () => {
    const returnTo = `${window.location.pathname}${window.location.search}`;
    sessionStorage.setItem(LEASE_DRAFT_RETURN_KEY, returnTo);
    navigate("/landlord/tenants/new?forLease=1");
  };

  const handleGoCreateNewProperty = () => {
    const returnTo = `${window.location.pathname}${window.location.search}`;
    sessionStorage.setItem(LEASE_DRAFT_RETURN_KEY, returnTo);
    navigate("/landlord/properties/new?forLease=1");
  };

  // ------------------------------------------------------------
  // Link existing draft lease (create-mode only)
  // ------------------------------------------------------------
  const handleLinkSubmit = async (e) => {
    e.preventDefault();

    if (!fromPropertyContext && !fromTenantContext) {
      alert("To link an existing draft lease, start from a property or tenant detail page.");
      return;
    }
    if (!selectedLeaseId) {
      alert("Please select a draft lease to link.");
      return;
    }

    try {
      setSaving(true);
      setFormError("");

      if (fromTenantContext && qsTenantId) {
        await leasesApi.linkTenant(selectedLeaseId, qsTenantId, { token });
      }

      if (fromPropertyContext && qsPropertyId) {
        await leasesApi.update(selectedLeaseId, { propertyId: qsPropertyId }, { token });
      }

      sessionStorage.removeItem(LEASE_DRAFT_KEY);
      sessionStorage.removeItem(LEASE_DRAFT_RETURN_KEY);

      navigate(`/landlord/leases/${selectedLeaseId}`);
    } catch (err) {
      console.error("Failed to link existing lease", err);
      alert("Failed to link lease. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  // ------------------------------------------------------------
  // EDIT MODE: save changes (fields only)
  // ------------------------------------------------------------
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    let numericRent = null;
    if (trimOrEmpty(rentAmount)) {
      const parsed = Number(trimOrEmpty(rentAmount));
      if (!Number.isFinite(parsed) || parsed < 0) {
        setFormError("Rent amount must be a non-negative number.");
        return;
      }
      numericRent = parsed;
    }

    try {
      setSaving(true);
      setFormError("");

      // NOTE: Lease PATCH does not manage tenants; keep edit form focused on lease fields.
      const patch = {
        rentAmount: numericRent,
        status: trimOrEmpty(status) || "DRAFT",
        startDate: trimOrEmpty(startDate) || undefined,
        endDate: trimOrEmpty(endDate) || undefined,
      };

      const updated = await leasesApi.update(qsLeaseId, patch, { token });

      if (updated?.id && leaseFile) {
        try {
          await uploadLeaseFile(updated.id, leaseFile, token);
        } catch (err) {
          console.error("Lease updated but file upload failed", err);
          alert("Changes saved, but uploading the lease document failed. You can upload it later.");
        }
      }

      navigate(`/landlord/leases/${qsLeaseId}`);
    } catch (err) {
      console.error("Failed to update lease", err);
      setFormError("Failed to save changes. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  // ------------------------------------------------------------
  // CREATE MODE: create lease (your existing flow)
  // ------------------------------------------------------------
  const handleCreateSubmit = async (e) => {
    e.preventDefault();

    let numericRent = null;
    if (trimOrEmpty(rentAmount)) {
      const parsed = Number(trimOrEmpty(rentAmount));
      if (!Number.isFinite(parsed) || parsed < 0) {
        setFormError("Rent amount must be a non-negative number.");
        return;
      }
      numericRent = parsed;
    }

    try {
      setSaving(true);
      setFormError("");

      const newTenantIds = [];
      for (const draft of draftNewTenants) {
        try {
          const created = await tenantsApi.create(
            {
              name: trimOrEmpty(draft.name) || "New tenant",
              email: trimOrEmpty(draft.email) || undefined,
              phone: trimOrEmpty(draft.phone) || undefined,
            },
            { token }
          );
          if (created && created.id) newTenantIds.push(created.id);
        } catch (err) {
          console.error("Failed to create staged tenant", err);
          alert(`Failed to create tenant "${draft.name}". Lease was not created.`);
          setSaving(false);
          return;
        }
      }

      let effectivePropertyId = propertyId || undefined;

      if (!effectivePropertyId && hasDraftProperty) {
        try {
          const createdProp = await apiFetch("/api/properties", {
            method: "POST",
            token,
            body: {
              name: trimOrEmpty(draftProperty.name) || trimOrEmpty(draftProperty.address1) || undefined,
              address1: trimOrEmpty(draftProperty.address1) || undefined,
              city: trimOrEmpty(draftProperty.city) || undefined,
              state: trimOrEmpty(draftProperty.state) || "CO",
              postalCode: trimOrEmpty(draftProperty.postalCode) || undefined,
            },
          });

          if (!createdProp || !createdProp.id) {
            alert("Failed to create the new property. The lease was not created.");
            setSaving(false);
            return;
          }

          effectivePropertyId = createdProp.id;
        } catch (err) {
          console.error("Failed to create staged property", err);
          alert("Failed to create the new property. The lease was not created.");
          setSaving(false);
          return;
        }
      }

      const tenantIds = [...selectedTenantIds, ...newTenantIds];

      const payload = {
        propertyId: effectivePropertyId,
        tenantIds,
        rentAmount: numericRent,
        status: trimOrEmpty(status) || "DRAFT",
        startDate: trimOrEmpty(startDate) || undefined,
        endDate: trimOrEmpty(endDate) || undefined,
      };

      const createdLease = await leasesApi.create(payload, { token });

      if (createdLease?.id && leaseFile) {
        try {
          await uploadLeaseFile(createdLease.id, leaseFile, token);
        } catch (err) {
          console.error("Lease created but file upload failed", err);
          alert("Lease was created, but uploading the document failed. You can upload it later.");
        }
      }

      sessionStorage.removeItem(LEASE_DRAFT_KEY);
      sessionStorage.removeItem(LEASE_DRAFT_RETURN_KEY);

      if (createdLease?.id) navigate(`/landlord/leases/${createdLease.id}`);
      else navigate("/landlord/leases");
    } catch (err) {
      console.error("Failed to create lease", err);
      setFormError("Failed to create lease. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  // ------------------------------------------------------------
  // Cancel
  // ------------------------------------------------------------
  const handleCancelLease = () => {
    sessionStorage.removeItem(LEASE_DRAFT_KEY);
    sessionStorage.removeItem(LEASE_DRAFT_RETURN_KEY);

    if (isEditMode) navigate(`/landlord/leases/${qsLeaseId}`);
    else if (fromPropertyContext && qsPropertyId) navigate(`/landlord/properties/${qsPropertyId}`);
    else if (fromTenantContext && qsTenantId) navigate(`/landlord/tenants/${qsTenantId}`);
    else navigate("/landlord/leases");
  };

  // ------------------------------------------------------------
  // Render
  // ------------------------------------------------------------
  if (loading) return <div className={styles.page} style={{ padding: 16 }}>Loading…</div>;

  if (loadingError) {
    return (
      <div className={styles.page} style={{ padding: 16, color: "crimson" }}>
        Failed to load data: {String(loadingError.message || loadingError)}
      </div>
    );
  }

  const lockedProperty = fromPropertyContext
    ? properties.find((p) => p.id === qsPropertyId)
    : null;

  const lockedTenant = fromTenantContext
    ? tenants.find((t) => t.id === qsTenantId)
    : null;

  const showPropertyControls = !propertyLockedFromQuery && !isEditMode; // keep edit focused
  const showTenantControls = !tenantLockedFromQuery && !isEditMode; // keep edit focused

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>{isEditMode ? "Edit lease" : "Add lease"}</h1>
          <p className={styles.subtitle}>
            {isEditMode
              ? "Update rent, status, and dates. To change tenants or property, use the lease detail page."
              : mode === "GLOBAL"
                ? "Create a new lease. You can leave property and tenants blank to keep it as a draft."
                : mode === "TENANT"
                  ? "Manage leases for this tenant. Property is optional."
                  : mode === "PROPERTY"
                    ? "Manage leases for this property. Tenants are optional."
                    : "Manage leases for this property and tenant."}
          </p>
        </div>
      </header>

      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Link existing draft lease (create-mode only) */}
        {!isEditMode && (fromPropertyContext || fromTenantContext) && (
          <section style={{ maxWidth: 520, padding: 16, borderRadius: 12, border: "1px solid #e5e7eb", background: "#ffffff" }}>
            <h2 style={{ fontSize: 16, marginBottom: 8 }}>Link an existing draft lease</h2>

            <form onSubmit={handleLinkSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span>Draft lease</span>
                <select
                  value={selectedLeaseId}
                  onChange={(e) => setSelectedLeaseId(e.target.value)}
                  disabled={!canLinkExisting || isSaving}
                  style={{ padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                >
                  <option value="">Select a draft lease…</option>
                  {candidateLeases.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.id.slice(0, 8)} – {l.status || "DRAFT"}{l.startDate ? ` (starts ${l.startDate})` : ""}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                className={styles.primaryButton}
                disabled={isSaving || !canLinkExisting || !selectedLeaseId}
              >
                {isSaving ? "Linking…" : "Link lease"}
              </button>
            </form>
          </section>
        )}

        {/* Main form (create or edit) */}
        <section style={{ maxWidth: 520, padding: 16, borderRadius: 12, border: "1px solid #e5e7eb", background: "#ffffff" }}>
          <h2 style={{ fontSize: 16, marginBottom: 8 }}>
            {isEditMode ? "Save changes" : "Create a new lease"}
          </h2>

          <form
            onSubmit={isEditMode ? handleEditSubmit : handleCreateSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {/* Property / Tenant controls stay create-only (edit stays clean) */}
            {!isEditMode && (propertyLockedFromQuery || tenantLockedFromQuery) && (
              <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 8 }}>
                {propertyLockedFromQuery && (
                  <div>
                    Property locked: <strong>{lockedProperty?.name || lockedProperty?.address1 || qsPropertyId}</strong>
                  </div>
                )}
                {tenantLockedFromQuery && (
                  <div>
                    Tenant locked: <strong>{lockedTenant?.name || qsTenantId}</strong>
                  </div>
                )}
              </div>
            )}

            {!isEditMode && showPropertyControls && (
              <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span>Property (optional, existing)</span>
                <select
                  value={propertyId}
                  onChange={(e) => setPropertyId(e.target.value)}
                  disabled={isSaving}
                  style={{ padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                >
                  <option value="">No property yet (draft)…</option>
                  {availableProperties.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name || p.address1 || p.address || p.id}
                    </option>
                  ))}
                </select>
              </label>
            )}

            {!isEditMode && showTenantControls && (
              <div style={{ padding: 12, borderRadius: 12, border: "1px solid #e5e7eb", background: "#ffffff" }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                  Tenants (optional, can add multiple)
                </div>

                <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <select
                    style={{ flex: 1, padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                    value={tenantPickerId}
                    onChange={(e) => setTenantPickerId(e.target.value)}
                    disabled={isSaving}
                  >
                    <option value="">Select existing tenant to add…</option>
                    {availableTenantsForPicker.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name} {t.email ? `(${t.email})` : ""}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={handleAddTenantToLease}
                    disabled={!tenantPickerId || isSaving}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    + Add
                  </button>
                </div>

                {selectedTenantIds.length > 0 ? (
                  <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13 }}>
                    {selectedTenantIds.map((tid, index) => {
                      const t = tenants.find((tt) => tt.id === tid);
                      return (
                        <li key={tid} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <span>
                            {t?.name || "(unknown tenant)"} {t?.email ? `(${t.email})` : ""}
                            {index === 0 && (
                              <span style={{ marginLeft: 6, fontSize: 11, color: "#2563eb" }}>
                                primary
                              </span>
                            )}
                          </span>

                          <button
                            type="button"
                            onClick={() => handleRemoveTenantFromLease(tid)}
                            disabled={isSaving}
                            style={{
                              fontSize: 11,
                              padding: "2px 6px",
                              borderRadius: 8,
                              border: "1px solid #d1d5db",
                              background: "#ffffff",
                              cursor: "pointer",
                            }}
                          >
                            Remove
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div style={{ fontSize: 12, color: "#6b7280" }}>No tenants selected yet.</div>
                )}

                <button
                  type="button"
                  className={styles.primaryButton}
                  style={{ marginTop: 10, width: "fit-content" }}
                  onClick={handleGoCreateNewTenant}
                  disabled={isSaving}
                >
                  + Create new tenant
                </button>
              </div>
            )}

            {/* Lease document */}
            <div style={{ marginTop: 4 }}>
              <label htmlFor="leaseFile" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Lease document (optional)
              </label>
              <input
                id="leaseFile"
                type="file"
                onChange={(e) => setLeaseFile(e.target.files?.[0] || null)}
                disabled={isSaving}
              />
              {leaseFile && (
                <div style={{ marginTop: 4, fontSize: 12, color: "#6b7280" }}>
                  Selected: {leaseFile.name}
                </div>
              )}
            </div>

            {/* Rent amount */}
            <div style={{ marginBottom: 4 }}>
              <label htmlFor="rentAmount" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Rent amount (per month)
              </label>
              <input
                id="rentAmount"
                type="number"
                min="0"
                step="1"
                value={rentAmount}
                onChange={(e) => setRentAmount(e.target.value)}
                placeholder="e.g. 2500"
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                disabled={isSaving}
              />
            </div>

            {/* Status */}
            <div style={{ marginBottom: 4 }}>
              <label htmlFor="status" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Status
              </label>
              <input
                id="status"
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="DRAFT / ACTIVE / TERMINATED / ARCHIVED"
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                disabled={isSaving}
              />
            </div>

            {/* Dates */}
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="startDate" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Start date
                </label>
                <input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                  disabled={isSaving}
                />
              </div>

              <div style={{ flex: 1 }}>
                <label htmlFor="endDate" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  End date (optional)
                </label>
                <input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                  disabled={isSaving}
                />
              </div>
            </div>

            {formError && (
              <div style={{ color: "#b91c1c", fontSize: 13, marginTop: 8 }}>
                {formError}
              </div>
            )}

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button type="submit" className={styles.primaryButton} disabled={isSaving}>
                {isSaving ? (isEditMode ? "Saving…" : "Creating…") : (isEditMode ? "Save changes" : "Create lease")}
              </button>

              <button
                type="button"
                onClick={handleCancelLease}
                style={{
                  borderRadius: 999,
                  padding: "8px 16px",
                  border: "1px solid #d1d5db",
                  background: "#ffffff",
                  cursor: "pointer",
                }}
                disabled={isSaving}
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
