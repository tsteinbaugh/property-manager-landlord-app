// newsrc/features/leases/pages/LandlordAddLeasePage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { leasesApi } from "@features/leases/api/leases.api.js";
import styles from "@shared/styles/LandlordPage.module.css";

import {
  INVALID,
  parseMoneyOrNullOpt,
  parseEnumOrNullOpt,
  parseDateOrNullOpt,
  LEASE_STATUS,
  optionsFromEnumMap,
  formatEnumLabel,
} from "@shared/utils/validation.js";

const LEASE_DRAFT_KEY = "leaseDraft";

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

const RequiredMark = () => (
  <span style={{ color: "#b91c1c", marginLeft: 4 }} aria-hidden="true">
    *
  </span>
);

export default function LandlordAddLeasePage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const qsPropertyId = searchParams.get("propertyId") || "";
  const qsTenantId = searchParams.get("tenantId") || "";
  const qsLeaseId = searchParams.get("leaseId") || ""; // EDIT MODE

  const isEditMode = !!qsLeaseId;

  const fromPropertyContext = !!qsPropertyId;
  const fromTenantContext = !!qsTenantId;

  const mode =
    fromPropertyContext && fromTenantContext
      ? "BOTH"
      : fromTenantContext
        ? "TENANT"
        : fromPropertyContext
          ? "PROPERTY"
          : "GLOBAL";

  // ------------------------------------------------------------
  // Lease status dropdown options
  // ------------------------------------------------------------
  const leaseStatusOptions = useMemo(
    () =>
      optionsFromEnumMap(LEASE_STATUS, {
        sortBy: "key",
        toOption: (name, code) => ({
          value: code,
          label: `${formatEnumLabel(name, { hideUnknown: false })}`,
        }),
      }),
    []
  );          

  // ------------------------------------------------------------
  // Loaded lists (leases only)
  // ------------------------------------------------------------
  const [leases, setLeases] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(null);

  // ------------------------------------------------------------
  // Form state
  // ------------------------------------------------------------
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
  // Load leases (for link-existing section)
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setLoadingError(null);

        const ls = await leasesApi.listAll({ includeArchived: false, token });
        if (cancelled) return;

        setLeases(Array.isArray(ls) ? ls : []);
      } catch (err) {
        console.error("Failed to load leases for lease page", err);
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

    return () => {
      cancelled = true;
    };
  }, [token]);

  // ------------------------------------------------------------
  // EDIT MODE: load lease + hydrate form
  // ------------------------------------------------------------
  useEffect(() => {
    if (!isEditMode || !token || loading) return;

    let cancelled = false;

    async function loadLease() {
      try {
        const l = await leasesApi.get(qsLeaseId, { token });
        if (cancelled) return;

        setRentAmount(l?.rentAmount == null ? "" : String(l.rentAmount));
        setStatus(l?.status || "DRAFT");
        setStartDate(parseDateOrNullOpt(l?.startDate) || "");
        setEndDate(parseDateOrNullOpt(l?.endDate) || "");
      } catch (err) {
        console.error("Failed to load lease for edit", err);
        setLoadingError(err);
      } finally {
        setHydratedDraft(true);
      }
    }

    loadLease();

    return () => {
      cancelled = true;
    };
  }, [isEditMode, qsLeaseId, token, loading]);

  // ------------------------------------------------------------
  // CREATE MODE ONLY: hydrate from draft + persist draft
  // (ONLY rent/status/dates)
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
      if (draft.rentAmount != null) setRentAmount(String(draft.rentAmount));
      if (draft.status) setStatus(draft.status);
      if (draft.startDate) setStartDate(draft.startDate);
      if (draft.endDate) setEndDate(draft.endDate);
    } catch (e) {
      console.warn("Failed to parse leaseDraft from sessionStorage", e);
    } finally {
      setHydratedDraft(true);
    }
  }, [token, loading, hydratedDraft, isEditMode]);

  useEffect(() => {
    if (!hydratedDraft || isEditMode) return;

    const draft = { rentAmount, status, startDate, endDate };

    try {
      sessionStorage.setItem(LEASE_DRAFT_KEY, JSON.stringify(draft));
    } catch (e) {
      console.warn("Failed to persist leaseDraft", e);
    }
  }, [hydratedDraft, isEditMode, rentAmount, status, startDate, endDate]);

  // ------------------------------------------------------------
  // Candidate leases for "link existing draft lease"
  // ------------------------------------------------------------
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

      navigate(`/landlord/leases/${selectedLeaseId}`);
    } catch (err) {
      console.error("Failed to link existing lease", err);
      alert("Failed to link lease. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  // ------------------------------------------------------------
  // Shared: validate lease fields (edit/create)
  // ------------------------------------------------------------
  const validateLeaseFields = (input) => {
    // status: required and must be in enum
    const statusOut = parseEnumOrNullOpt(input.status, LEASE_STATUS);
    if (!statusOut) return { ok: false, error: "Status is required." };
    if (statusOut === INVALID) {
      return {
        ok: false,
        error: "Status must be DRAFT, ACTIVE, TERMINATED, or ARCHIVED.",
      };
    }

    // rent: REQUIRED, must be >= 0
    const rentOut = parseMoneyOrNullOpt(input.rentAmount, {
      min: 0,
      max: 1_000_000_000,
    });
    if (rentOut === INVALID) {
      return { ok: false, error: "Rent amount must be a non-negative number." };
    }
    if (rentOut === null || rentOut === undefined) {
      return { ok: false, error: "Rent amount is required." };
    }

    // start date: REQUIRED, must be valid YYYY-MM-DD
    const startOut = parseDateOrNullOpt(input.startDate);
    if (startOut === INVALID) return { ok: false, error: "Start date is invalid." };
    if (!startOut) return { ok: false, error: "Start date is required." };

    // end date: optional but must be valid if present
    const endOut = parseDateOrNullOpt(input.endDate);
    if (endOut === INVALID) return { ok: false, error: "End date is invalid." };

    // end >= start if both present
    if (startOut && endOut) {
      const s = new Date(`${startOut}T00:00:00`);
      const e = new Date(`${endOut}T00:00:00`);
      if (Number.isFinite(s.getTime()) && Number.isFinite(e.getTime()) && e < s) {
        return { ok: false, error: "End date must be on or after the start date." };
      }
    }

    return {
      ok: true,
      value: {
        status: statusOut,
        rentAmount: rentOut,
        startDate: startOut,
        endDate: endOut,
      },
    };
  };

  // ------------------------------------------------------------
  // EDIT MODE: save changes (fields only)
  // ------------------------------------------------------------
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const checked = validateLeaseFields({ rentAmount, status, startDate, endDate });
    if (!checked.ok) {
      setFormError(checked.error || "Invalid lease fields.");
      return;
    }

    try {
      setSaving(true);
      setFormError("");

      const patch = {
        rentAmount: checked.value.rentAmount,
        status: checked.value.status,
        startDate: checked.value.startDate,
        endDate: checked.value.endDate,
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
  // CREATE MODE: create lease (minimal + still links from context)
  // ------------------------------------------------------------
  const handleCreateSubmit = async (e) => {
    e.preventDefault();

    const checked = validateLeaseFields({ rentAmount, status, startDate, endDate });
    if (!checked.ok) {
      setFormError(checked.error || "Invalid lease fields.");
      return;
    }

    try {
      setSaving(true);
      setFormError("");

      const payload = {
        propertyId: qsPropertyId || undefined,
        tenantIds: qsTenantId ? [qsTenantId] : [],
        rentAmount: checked.value.rentAmount,
        status: checked.value.status,
        startDate: checked.value.startDate,
        endDate: checked.value.endDate,
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

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>{isEditMode ? "Edit lease" : "Add lease"}</h1>
          <p className={styles.subtitle}>
            {isEditMode
              ? "Update rent, status, and dates. To change tenants or property, use the lease detail page."
              : mode === "GLOBAL"
                ? "Create a new lease."
                : mode === "TENANT"
                  ? "Create a lease linked to this tenant."
                  : mode === "PROPERTY"
                    ? "Create a lease linked to this property."
                    : "Create a lease linked to this property and tenant."}
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
                      {l.id.slice(0, 8)} – {l.status || "DRAFT"}
                      {l.startDate ? ` (starts ${l.startDate})` : ""}
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

            {/* Rent amount (required) */}
            <div style={{ marginBottom: 4 }}>
              <label htmlFor="rentAmount" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Rent amount (per month)<RequiredMark />
              </label>
              <input
                id="rentAmount"
                type="number"
                min="0"
                step="1"
                required
                value={rentAmount}
                onChange={(e) => setRentAmount(e.target.value)}
                placeholder="e.g. 2500"
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                disabled={isSaving}
              />
            </div>

            {/* Status (required dropdown) */}
            <div style={{ marginBottom: 4 }}>
              <label htmlFor="status" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Status<RequiredMark />
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                disabled={isSaving}
              >
                <option value="">— Select —</option>
                {leaseStatusOptions.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Dates */}
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="startDate" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Start date<RequiredMark />
                </label>
                <input
                  id="startDate"
                  type="date"
                  required
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
