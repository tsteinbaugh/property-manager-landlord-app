// newsrc/features/leases/pages/LandlordAddLeasePage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { apiFetch } from "@lib/apiClient.js";
import { propertiesApi } from "@features/properties/api/properties.api.js";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";

const LEASE_DRAFT_KEY = "leaseDraft";
const LEASE_DRAFT_RETURN_KEY = "leaseDraftReturnTo";

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

  if (!lease.endDate) {
    // month-to-month / open ended
    return true;
  }

  const end = new Date(lease.endDate);
  if (Number.isNaN(end.getTime())) return true;

  // inclusive of end date
  return today <= end;
}

export default function LandlordAddLeasePage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [leases, setLeases] = useState([]);

  const [propertyId, setPropertyId] = useState("");

  // multi-tenant: existing tenants selected on this lease
  const [selectedTenantIds, setSelectedTenantIds] = useState([]);
  const [tenantPickerId, setTenantPickerId] = useState("");

  // staged *new* tenants (from AddTenantPage in forLease mode)
  const [draftNewTenants, setDraftNewTenants] = useState([]);

  // staged *new* property (comes from AddPropertyPage in forLease mode)
  const [draftProperty, setDraftProperty] = useState(null);

  const [rentAmount, setRentAmount] = useState("");
  const [status, setStatus] = useState("DRAFT");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(null);
  const [isSaving, setSaving] = useState(false);

  const [selectedLeaseId, setSelectedLeaseId] = useState("");
  const [hydratedDraft, setHydratedDraft] = useState(false);

  const qsPropertyId = searchParams.get("propertyId") || "";
  const qsTenantId = searchParams.get("tenantId") || "";

  const fromPropertyContext = !!qsPropertyId;
  const fromTenantContext = !!qsTenantId;

  const propertyLockedFromQuery = fromPropertyContext;
  const tenantLockedFromQuery = fromTenantContext;

  // Load properties + tenants + leases
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

        // Context defaults: do NOT auto-select the last created thing.
        const propertyMatch = props.some((p) => p.id === qsPropertyId);
        const tenantMatch = ts.some((t) => t.id === qsTenantId);

        if (qsPropertyId && propertyMatch) {
          setPropertyId(qsPropertyId);
        } else {
          setPropertyId(""); // default to "no property" (draft)
        }

        if (qsTenantId && tenantMatch) {
          setSelectedTenantIds([qsTenantId]); // context tenant auto-added
        } else {
          setSelectedTenantIds([]);
        }
      } catch (err) {
        console.error(
          "Failed to load properties/tenants/leases for lease",
          err
        );
        if (!cancelled) {
          setLoadingError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (token) {
      load();
    } else {
      setLoading(false);
      setLoadingError(new Error("Missing auth token"));
    }

    return () => {
      cancelled = true;
    };
  }, [token, qsPropertyId, qsTenantId]);

  // Hydrate from existing draft in sessionStorage (once)
  useEffect(() => {
    if (!token || loading || hydratedDraft) return;

    const raw = sessionStorage.getItem(LEASE_DRAFT_KEY);
    if (!raw) {
      setHydratedDraft(true);
      return;
    }

    try {
      const draft = JSON.parse(raw);

      if (draft.propertyId) {
        setPropertyId(draft.propertyId);
      }

      if (Array.isArray(draft.selectedTenantIds)) {
        const base = new Set(draft.selectedTenantIds);
        if (qsTenantId && !base.has(qsTenantId)) {
          base.add(qsTenantId);
        }
        setSelectedTenantIds(Array.from(base));
      }

      if (Array.isArray(draft.draftNewTenants)) {
        setDraftNewTenants(draft.draftNewTenants);
      }

      if (draft.draftProperty) {
        setDraftProperty(draft.draftProperty);
      }

      if (draft.rentAmount != null) {
        setRentAmount(String(draft.rentAmount));
      }
      if (draft.status) setStatus(draft.status);
      if (draft.startDate) setStartDate(draft.startDate);
      if (draft.endDate) setEndDate(draft.endDate);
    } catch (e) {
      console.warn("Failed to parse leaseDraft from sessionStorage", e);
    } finally {
      setHydratedDraft(true);
    }
  }, [token, loading, hydratedDraft, qsTenantId]);

  // Persist draft to sessionStorage whenever key pieces change
  useEffect(() => {
    if (!hydratedDraft) return;

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
    propertyId,
    selectedTenantIds,
    draftNewTenants,
    draftProperty,
    rentAmount,
    status,
    startDate,
    endDate,
  ]);

  // Compute which properties/tenants are already on an ACTIVE lease
  const usedPropertyIds = new Set();
  const usedTenantIds = new Set();

  for (const l of leases) {
    if (!isActiveLease(l)) continue;
    if (l.propertyId) usedPropertyIds.add(l.propertyId);

    if (Array.isArray(l.leaseTenants) && l.leaseTenants.length > 0) {
      for (const lt of l.leaseTenants) {
        if (lt.tenantId) usedTenantIds.add(lt.tenantId);
      }
    } else if (l.tenantId) {
      usedTenantIds.add(l.tenantId);
    }
  }

  const availableProperties = properties.filter(
    (p) => !usedPropertyIds.has(p.id) || p.id === propertyId
  );

  const availableTenantsForPicker = tenants.filter(
    (t) => !selectedTenantIds.includes(t.id)
  );

  const candidateLeases = leases.filter((l) => {
    if ((l.status || "DRAFT") !== "DRAFT") return false;

    // If opened from a property, only show drafts that are NOT already attached to a property
    if (fromPropertyContext && l.propertyId) return false;

    // If opened from a tenant, only hide drafts that ALREADY include this tenant.
    // (We DO allow drafts that already have other tenants, because multi-tenant.)
    if (fromTenantContext && qsTenantId) {
      const alreadyLinked = Array.isArray(l.leaseTenants)
        ? l.leaseTenants.some((lt) => lt.tenantId === qsTenantId)
        : false;

      if (alreadyLinked) return false;
    }

    // Only show this section when launched from property or tenant context
    if (!fromPropertyContext && !fromTenantContext) return false;

    return true;
  });

  const canLinkExisting =
    (fromPropertyContext || fromTenantContext) && candidateLeases.length > 0;

  // ----- multi-tenant helpers (existing tenants) -----
  const handleAddTenantToLease = () => {
    if (!tenantPickerId) return;
    setSelectedTenantIds((prev) =>
      prev.includes(tenantPickerId) ? prev : [...prev, tenantPickerId]
    );
    setTenantPickerId("");
  };

  const handleRemoveTenantFromLease = (id) => {
    if (tenantLockedFromQuery && id === qsTenantId) return; // don't remove context tenant
    setSelectedTenantIds((prev) => prev.filter((tid) => tid !== id));
  };

  // ----- "Create new tenant" button -----
  const handleGoCreateNewTenant = () => {
    const returnTo = `${window.location.pathname}${window.location.search}`;
    sessionStorage.setItem(LEASE_DRAFT_RETURN_KEY, returnTo);
    navigate("/landlord/tenants/new?forLease=1");
  };

  // ----- "Create new property" button -----
  const handleGoCreateNewProperty = () => {
    const returnTo = `${window.location.pathname}${window.location.search}`;
    sessionStorage.setItem(LEASE_DRAFT_RETURN_KEY, returnTo);
    navigate("/landlord/properties/new?forLease=1");
  };

  // ----- Link existing draft lease -----
  const handleLinkSubmit = async (e) => {
    e.preventDefault();

    if (!fromPropertyContext && !fromTenantContext) {
      alert(
        "To link an existing draft lease, start from a property or tenant detail page."
      );
      return;
    }
    if (!selectedLeaseId) {
      alert("Please select a draft lease to link.");
      return;
    }

    try {
      setSaving(true);
    
      // 1) If started from tenant context, link tenant to lease via join table
      if (fromTenantContext && qsTenantId) {
        await leasesApi.linkTenant(selectedLeaseId, qsTenantId, { token });
      }
    
      // 2) If started from property context, connect property via PATCH (still correct)
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

  // ----- Create lease (including staged tenants & staged property) -----
  const handleCreateSubmit = async (e) => {
    e.preventDefault();

    let numericRent = null;
    if (rentAmount.trim()) {
      const parsed = Number(rentAmount.trim());
      if (!Number.isFinite(parsed) || parsed < 0) {
        alert("Rent amount must be a non-negative number.");
        return;
      }
      numericRent = parsed;
    }

    try {
      setSaving(true);

      // 1) Create any staged tenants (only now)
      const newTenantIds = [];
      for (const draft of draftNewTenants) {
        try {
          const created = await tenantsApi.create(
            {
              name: draft.name,
              email: draft.email || undefined,
              phone: draft.phone || undefined,
            },
            { token }
          );
          if (created && created.id) {
            newTenantIds.push(created.id);
          }
        } catch (err) {
          console.error("Failed to create staged tenant", err);
          alert(
            `Failed to create tenant "${draft.name}". Lease was not created.`
          );
          setSaving(false);
          return;
        }
      }

      // 2) Decide which property to use:
      //    - existing propertyId takes precedence
      //    - otherwise, if a staged property exists, create it now
      let effectivePropertyId = propertyId || undefined;

      const hasDraftProperty =
        draftProperty &&
        draftProperty.address1 &&
        draftProperty.address1.trim();

      if (!effectivePropertyId && hasDraftProperty) {
        try {
          const createdProp = await apiFetch("/api/properties", {
            method: "POST",
            token,
            body: {
              name:
                draftProperty.name?.trim() ||
                draftProperty.address1?.trim() ||
                undefined,
              address1: draftProperty.address1?.trim() || undefined,
              city: draftProperty.city?.trim() || undefined,
              state: draftProperty.state?.trim() || "CO",
              postalCode: draftProperty.postalCode?.trim() || undefined,
            },
          });

          if (!createdProp || !createdProp.id) {
            alert(
              "Failed to create the new property. The lease was not created."
            );
            setSaving(false);
            return;
          }

          effectivePropertyId = createdProp.id;
        } catch (err) {
          console.error("Failed to create staged property", err);
          alert(
            "Failed to create the new property. The lease was not created."
          );
          setSaving(false);
          return;
        }
      }

      // 3) Combine tenants (existing + newly created)
      const tenantIds = [...selectedTenantIds, ...newTenantIds];

      const payload = {
        propertyId: effectivePropertyId,
        tenantIds,
        rentAmount: numericRent,
        status: status.trim() || "DRAFT",
        startDate: startDate.trim() || undefined,
        endDate: endDate.trim() || undefined,
      };

      const createdLease = await leasesApi.create(payload, { token });

      sessionStorage.removeItem(LEASE_DRAFT_KEY);
      sessionStorage.removeItem(LEASE_DRAFT_RETURN_KEY);

      if (createdLease && createdLease.id) {
        navigate(`/landlord/leases/${createdLease.id}`);
      } else {
        navigate("/landlord/leases");
      }
    } catch (err) {
      console.error("Failed to create lease", err);
      alert("Failed to create lease. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  // ----- Cancel / Back from lease page -----
  const handleCancelLease = () => {
    sessionStorage.removeItem(LEASE_DRAFT_KEY);
    sessionStorage.removeItem(LEASE_DRAFT_RETURN_KEY);

    if (fromPropertyContext && qsPropertyId) {
      navigate(`/landlord/properties/${qsPropertyId}`);
    } else if (fromTenantContext && qsTenantId) {
      navigate(`/landlord/tenants/${qsTenantId}`);
    } else {
      navigate("/landlord/leases");
    }
  };

  // ----- render -----
  if (loading) {
    return <div style={{ padding: 16 }}>Loading…</div>;
  }

  if (loadingError) {
    return (
      <div style={{ padding: 16, color: "crimson" }}>
        Failed to load data for creating a lease:{" "}
        {String(loadingError.message || loadingError)}
      </div>
    );
  }

  const hasDraftProperty =
    draftProperty && draftProperty.address1 && draftProperty.address1.trim();

  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ margin: "8px 0 16px" }}>Add lease</h2>

      {/* SECTION 1: Link an existing draft lease (only from property/tenant) */}
      {(fromPropertyContext || fromTenantContext) && (
        <section
          style={{
            marginBottom: 20,
            padding: 12,
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            maxWidth: 480,
          }}
        >
          <h3 style={{ margin: "0 0 8px", fontSize: 14 }}>
            Link an existing draft lease
          </h3>
          <p style={{ margin: "0 0 8px", fontSize: 12, color: "#6b7280" }}>
            Use this if you already drafted a lease and now want to attach it to{" "}
            {fromPropertyContext && !fromTenantContext && "this property."}
            {fromTenantContext && !fromPropertyContext && "this tenant."}
            {fromPropertyContext &&
              fromTenantContext &&
              "this property and tenant."}
          </p>

          <form
            onSubmit={handleLinkSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <label
              style={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <span>Draft lease</span>
              <select
                value={selectedLeaseId}
                onChange={(e) => setSelectedLeaseId(e.target.value)}
                disabled={!canLinkExisting || isSaving}
              >
                <option value="">Select a draft lease…</option>
                {candidateLeases.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.id.slice(0, 8)} – {l.status || "DRAFT"}
                    {l.startDate ? ` (starts ${l.startDate})` : ""}
                  </option>
                ))}
              </select>
            </label>

            {!canLinkExisting && (
              <span style={{ fontSize: 12, color: "#6b7280" }}>
                There are no draft leases available to link in this context.
                Create a new lease below instead.
              </span>
            )}

            <button
              type="submit"
              disabled={isSaving || !canLinkExisting || !selectedLeaseId}
              style={{ marginTop: 4 }}
            >
              {isSaving ? "Linking…" : "Link lease"}
            </button>
          </form>
        </section>
      )}

      {fromPropertyContext || fromTenantContext ? (
        <hr style={{ maxWidth: 480, margin: "0 0 16px" }} />
      ) : null}

      {/* SECTION 2: Create a new lease */}
      <section
        style={{
          padding: 12,
          borderRadius: 8,
          border: "1px solid #e5e7eb",
          maxWidth: 480,
        }}
      >
        <h3 style={{ margin: "0 0 8px", fontSize: 14 }}>
          Create a new lease
        </h3>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#6b7280" }}>
          Use this to create a brand new lease. You can leave property and
          tenants blank to keep it as a draft.
        </p>

        <form
          onSubmit={handleCreateSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {/* Property selector (existing) */}
          <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span>Property (optional, existing)</span>
            <select
              value={propertyId}
              onChange={(e) => setPropertyId(e.target.value)}
              disabled={propertyLockedFromQuery || isSaving}
            >
              <option value="">No property yet (draft)…</option>
              {availableProperties.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name || p.address || p.address1 || p.id}
                </option>
              ))}
            </select>
            {availableProperties.length === 0 && !propertyId && (
              <span style={{ fontSize: 12, color: "#6b7280" }}>
                All properties currently have an active lease.
              </span>
            )}
            {propertyLockedFromQuery && (
              <span style={{ fontSize: 12, color: "#6b7280" }}>
                Linked from property detail – cannot change here.
              </span>
            )}
          </label>

          {/* Staged new property summary + button */}
          <div
            style={{
              marginTop: 8,
              padding: 8,
              borderRadius: 6,
              border: "1px dashed #d1d5db",
              background: "#f9fafb",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 500 }}>
              New property (optional)
            </span>
            <span style={{ fontSize: 12, color: "#6b7280" }}>
              Use the button below to fill out the full property form. Any new
              property will only be created if you save this lease.
            </span>

            {hasDraftProperty ? (
              <div
                style={{
                  marginTop: 4,
                  fontSize: 13,
                  padding: 6,
                  borderRadius: 4,
                  background: "#eef2ff",
                }}
              >
                <div>
                  <strong>
                    {draftProperty.name || draftProperty.address1}
                  </strong>
                </div>
                <div>
                  {draftProperty.address1}
                  {draftProperty.city ? `, ${draftProperty.city}` : ""}
                  {draftProperty.state ? `, ${draftProperty.state}` : ""}
                  {draftProperty.postalCode
                    ? ` ${draftProperty.postalCode}`
                    : ""}
                </div>
                <div style={{ fontSize: 11, color: "#4b5563", marginTop: 2 }}>
                  Will be created and linked when you create this lease.
                </div>
              </div>
            ) : (
              <span style={{ fontSize: 12, color: "#6b7280" }}>
                No new property staged yet.
              </span>
            )}

            <button
              type="button"
              onClick={handleGoCreateNewProperty}
              style={{ marginTop: 6, alignSelf: "flex-start" }}
            >
              + Create new property
            </button>
          </div>

          {/* Tenants (multi) - existing & staged new */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              marginTop: 8,
            }}
          >
            <span>Tenants (optional, can add multiple)</span>

            {/* Existing tenant picker + add button */}
            <div style={{ display: "flex", gap: 8 }}>
              <select
                style={{ flex: 1 }}
                value={tenantPickerId}
                onChange={(e) => setTenantPickerId(e.target.value)}
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
                onClick={handleAddTenantToLease}
                disabled={!tenantPickerId}
              >
                + Add
              </button>
            </div>

            {/* Selected existing tenants */}
            {selectedTenantIds.length > 0 ? (
              <ul
                style={{
                  paddingLeft: 18,
                  margin: "4px 0 0",
                  fontSize: 13,
                }}
              >
                {selectedTenantIds.map((tid, index) => {
                  const t = tenants.find((tt) => tt.id === tid);
                  const isLockedContextTenant =
                    tenantLockedFromQuery && tid === qsTenantId;

                  return (
                    <li
                      key={tid}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 2,
                      }}
                    >
                      <span>
                        {t?.name || "(unknown tenant)"}{" "}
                        {t?.email ? `(${t.email})` : ""}
                        {index === 0 && (
                          <span
                            style={{
                              marginLeft: 6,
                              fontSize: 11,
                              color: "#2563eb",
                            }}
                          >
                            primary
                          </span>
                        )}
                        {isLockedContextTenant && (
                          <span
                            style={{
                              marginLeft: 6,
                              fontSize: 11,
                              color: "#6b7280",
                            }}
                          >
                            (from tenant detail)
                          </span>
                        )}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveTenantFromLease(tid)}
                        disabled={isLockedContextTenant}
                        style={{
                          fontSize: 11,
                          padding: "2px 6px",
                          opacity: isLockedContextTenant ? 0.5 : 1,
                        }}
                      >
                        Remove
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <span style={{ fontSize: 12, color: "#6b7280" }}>
                No existing tenants on this lease yet.
              </span>
            )}

            {/* Staged new tenants */}
            {draftNewTenants.length > 0 && (
              <>
                <span
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    color: "#6b7280",
                  }}
                >
                  New tenants that will be created with this lease:
                </span>
                <ul
                  style={{
                    paddingLeft: 18,
                    margin: "4px 0 0",
                    fontSize: 13,
                  }}
                >
                  {draftNewTenants.map((t, idx) => (
                    <li key={`${t.name}-${idx}`}>
                      {t.name}
                      {t.email ? ` (${t.email})` : ""}
                      {t.phone ? ` · ${t.phone}` : ""}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Button to go to full Add Tenant form in "lease draft" mode */}
            <button
              type="button"
              onClick={handleGoCreateNewTenant}
              style={{ marginTop: 8, alignSelf: "flex-start" }}
            >
              + Create new tenant
            </button>
          </div>

          {/* Rent amount */}
          <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span>Rent amount (per month)</span>
            <input
              type="number"
              min="0"
              step="1"
              value={rentAmount}
              onChange={(e) => setRentAmount(e.target.value)}
              placeholder="e.g. 2500"
            />
          </label>

          {/* Status */}
          <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span>Status</span>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="DRAFT / ACTIVE / etc."
            />
          </label>

          {/* Dates */}
          <div style={{ display: "flex", gap: 8 }}>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                flex: 1,
              }}
            >
              <span>Start date</span>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </label>

            <label
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                flex: 1,
              }}
            >
              <span>End date (optional)</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </label>
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button type="submit" disabled={isSaving}>
              {isSaving ? "Creating…" : "Create lease"}
            </button>
            <button type="button" onClick={handleCancelLease}>
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
