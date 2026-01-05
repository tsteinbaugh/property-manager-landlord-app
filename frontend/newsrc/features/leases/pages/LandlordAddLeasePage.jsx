// newsrc/features/leases/pages/LandlordAddLeasePage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

import { leasesApi } from "@features/leases/api/leases.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { propertiesApi } from "@features/properties/api/properties.api.js";

import {
  INVALID,
  parseMoneyOrNullOpt,
  parseEnumOrNullOpt,
  parseDateOrNullOpt,
  optionsFromEnumMap,
  formatEnumLabel,
  LEASE_STATUS,
  LEASE_TYPE,
  optionalTrimToNull,
} from "@shared/utils/validation.js";

function leaseLabel(l) {
  const propName = l?.property?.name || l?.propertyName || l?.property?.address1 || "";
  const base = propName ? `Lease for ${propName}` : "Lease";
  const term = l?.startDate || l?.endDate ? `${l.startDate || "—"} → ${l.endDate || "—"}` : "";
  const rent = l?.rentAmount != null ? ` • $${l.rentAmount}/mo` : "";
  return term ? `${base} • ${term}${rent}` : `${base}${rent}`;
}

export default function LandlordAddLeasePage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const tenantId = searchParams.get("tenantId") || "";
  const propertyId = searchParams.get("propertyId") || "";
  const leaseId = searchParams.get("leaseId") || "";
  const returnTo = searchParams.get("returnTo") || "";

  const isEditMode = !!leaseId;

  const hasBothContexts = !!tenantId && !!propertyId;
  const contextKind = hasBothContexts ? null : tenantId ? "TENANT" : propertyId ? "PROPERTY" : null;
  const isContextMode = !!contextKind;

  // ---------- form state ----------
  const [leaseType, setLeaseType] = useState("");
  const [rentAmount, setRentAmount] = useState("");
  const [status, setStatus] = useState("DRAFT");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");

  const [leaseFiles, setLeaseFiles] = useState([]);

  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const [touched, setTouched] = useState({
    leaseType: false,
    rentAmount: false,
    startDate: false,
    status: false,
  });

  // ---------- context entity state ----------
  const [tenant, setTenant] = useState(null);
  const [property, setProperty] = useState(null);
  const [loadingContext, setLoadingContext] = useState(isContextMode);
  const [contextError, setContextError] = useState(null);

  // ---------- leases list state (for link-existing section) ----------
  const [allLeases, setAllLeases] = useState([]);
  const [loadingLeases, setLoadingLeases] = useState(isContextMode);
  const [leasesError, setLeasesError] = useState(null);

  const [selectedExistingLeaseId, setSelectedExistingLeaseId] = useState("");
  const [isLinkingExisting, setIsLinkingExisting] = useState(false);

  // ------------------ dropdown options ------------------
  const leaseTypeOptions = useMemo(
    () =>
      optionsFromEnumMap(LEASE_TYPE, {
        sortBy: "key",
        toOption: (name, code) => ({
          value: code,
          label: `${formatEnumLabel(name, { hideUnknown: false })}`,
        }),
      }),
    []
  );

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
  // Enforce constraint: not both contexts
  // ------------------------------------------------------------
  useEffect(() => {
    if (hasBothContexts) {
      setFormError(
        "This page can link a lease to either a tenant OR a property (not both). " +
          "Please start linking from a single entity’s detail page."
      );
    }
  }, [hasBothContexts]);

  // ------------------------------------------------------------
  // Load context entity + leases list when in context mode
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    if (!isContextMode || !token) return;

    async function loadContext() {
      try {
        setLoadingContext(true);
        setContextError(null);

        if (contextKind === "TENANT") {
          const t = await tenantsApi.get(tenantId, { token });
          if (!cancelled) setTenant(t || null);
        } else if (contextKind === "PROPERTY") {
          const p = await propertiesApi.get(propertyId, { token });
          if (!cancelled) setProperty(p || null);
        }
      } catch (err) {
        console.error("Failed to load context for Add Lease Page", err);
        if (!cancelled) setContextError(err);
      } finally {
        if (!cancelled) setLoadingContext(false);
      }
    }

    async function loadLeases() {
      try {
        setLoadingLeases(true);
        setLeasesError(null);
        const list = await leasesApi.listAll({ token, includeArchived: false });
        if (!cancelled) setAllLeases(Array.isArray(list) ? list : []);
      } catch (err) {
        console.error("Failed to load leases list for Add Lease Page", err);
        if (!cancelled) setLeasesError(err);
      } finally {
        if (!cancelled) setLoadingLeases(false);
      }
    }

    loadContext();
    loadLeases();

    return () => {
      cancelled = true;
    };
  }, [isContextMode, contextKind, tenantId, propertyId, token]);

  // ------------------------------------------------------------
  // Load lease for EDIT mode
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    if (!isEditMode || !leaseId || !token) return;

    async function loadLeaseForEdit() {
      try {
        setFormError("");
        const l = await leasesApi.get(leaseId, { token });
        if (cancelled) return;

        if (!l) {
          setFormError("Lease not found.");
          return;
        }

        setLeaseType(l.leaseType || "");
        setRentAmount(l.rentAmount == null ? "" : String(l.rentAmount));
        setStatus(l.status || "DRAFT");

        const s = parseDateOrNullOpt(l.startDate);
        const e = parseDateOrNullOpt(l.endDate);
        setStartDate(s || "");
        setEndDate(e || "");

        setNotes(l.notes || "");
      } catch (err) {
        console.error("Failed to load lease for edit", err);
        if (!cancelled) setFormError("Failed to load lease for editing.");
      }
    }

    loadLeaseForEdit();
    return () => {
      cancelled = true;
    };
  }, [isEditMode, leaseId, token]);

  // ------------------------------------------------------------
  // Derived: leases already linked to context, and available leases to link
  // We derive by looking at each lease's relationships, not relying on tenant/property payload shape.
  // ------------------------------------------------------------
  const linkedLeaseIds = useMemo(() => {
    if (!isContextMode) return new Set();

    const s = new Set();
    for (const l of allLeases || []) {
      if (!l?.id) continue;

      if (contextKind === "PROPERTY") {
        if (l.propertyId && l.propertyId === propertyId) s.add(l.id);
      } else if (contextKind === "TENANT") {
        const lts = Array.isArray(l.leaseTenants) ? l.leaseTenants : [];
        if (lts.some((lt) => lt?.tenantId === tenantId)) s.add(l.id);
      }
    }
    return s;
  }, [allLeases, isContextMode, contextKind, tenantId, propertyId]);

  const availableExistingLeases = useMemo(() => {
    const list = Array.isArray(allLeases) ? allLeases : [];

    // exclude anything already linked to this context
    let out = list.filter((l) => l?.id && !linkedLeaseIds.has(l.id));

    // if property context: only offer leases that don't already have a property
    // (consistent with your "one link at a time / avoid implicit reassignment" vibe)
    if (contextKind === "PROPERTY") {
      out = out.filter((l) => !l.propertyId);
    }

    return out;
  }, [allLeases, linkedLeaseIds, contextKind]);

  // ------------------------------------------------------------
  // Navigation helpers
  // ------------------------------------------------------------
  const goBackFromContext = () => {
    if (returnTo) return navigate(returnTo);
    if (contextKind === "TENANT") return navigate(`/landlord/tenants/${tenantId}`);
    if (contextKind === "PROPERTY") return navigate(`/landlord/properties/${propertyId}`);
    return navigate("/landlord/leases");
  };

  const handleCancel = () => {
    if (returnTo) return navigate(returnTo);
    if (isContextMode) return goBackFromContext();
    if (isEditMode) return navigate(`/landlord/leases/${leaseId}`);
    return navigate("/landlord/leases");
  };

  // ------------------------------------------------------------
  // Validation + payload
  // ------------------------------------------------------------
  const buildPayload = () => {
    const input = {
      leaseType,
      status,
      rentAmount,
      startDate,
      endDate,
      notes,
    };

    const schema = {
      leaseType: (v) => {
        const out = parseEnumOrNullOpt(v, LEASE_TYPE);
        if (out === null) return INVALID;
        return out;
      },
      status: (v) =>  {
        const out = parseEnumOrNullOpt(v, LEASE_STATUS);
        if (out === null) return INVALID;
        return out;
      },
      rentAmount: (v) => {
        const out = parseMoneyOrNullOpt(v, { min: 0, max: 1_000_000_000 });
        if (out === null) return INVALID;
        return out;
      },
      startDate: (v) => {
        const out = parseDateOrNullOpt(v);
        if (out === null) return INVALID;
        return out;
      },
      endDate: (v) => parseDateOrNullOpt(v),
      notes: optionalTrimToNull,
    };

    const result = validateObject(input, schema, {
      errorMessages: {
        leaseType: "Lease type is required and must be valid.",
        status: "Status is required and must be valid.",
        rentAmount: "Rent amount is required and must be a non-negative number.",
        startDate: "Start date is required and must be valid.",
        endDate: "End date is invalid.",
      },
    });

    if (!result.ok) return result;

    const { startDate: s, endDate: e } = result.value;
    if (s && e) {
      const sd = new Date(`${s}T00:00:00`);
      const ed = new Date(`${e}T00:00:00`);
      if (Number.isFinite(sd.getTime()) && Number.isFinite(ed.getTime()) && ed < sd) {
        return {
          ok: false,
          value: null,
          errors: { endDate: "End date must be on or after the start date." },
        };
      }
    }

    return result;
  };

  const validateAndSetError = () => {
    const { value: payload, ok, errors } = buildPayload();
    if (!ok) {
      const firstKey = Object.keys(errors || {})[0];
      setFormError(errors?.[firstKey] || "Please fix the highlighted fields.");
      return { ok: false, payload: null };
    }
    return { ok: true, payload };
  };

  // ------------------------------------------------------------
  // Context-mode: link existing lease to tenant OR property
  // ------------------------------------------------------------
  const handleLinkExisting = async () => {
    if (!isContextMode || !selectedExistingLeaseId) return;

    const l = availableExistingLeases.find((x) => x?.id === selectedExistingLeaseId);
    const label = l ? leaseLabel(l) : "this lease";

    const targetName =
      contextKind === "TENANT"
        ? tenant?.name || tenant?.email || "Unnamed tenant"
        : property?.name || property?.address1 || "Unnamed property";

    const ok = window.confirm(
      `Link ${label} to ${contextKind === "TENANT" ? "tenant" : "property"} "${targetName}"?\n\n` +
        `This will link the lease to this ${contextKind === "TENANT" ? "tenant" : "property"} in your records.`
    );
    if (!ok) return;

    try {
      setIsLinkingExisting(true);

      if (contextKind === "TENANT") {
        await leasesApi.linkTenant(selectedExistingLeaseId, tenantId, { token });
      } else {
        await leasesApi.update(selectedExistingLeaseId, { propertyId }, { token });
      }

      goBackFromContext();
    } catch (err) {
      console.error("Failed to link existing lease", err);
      alert("Failed to link lease. Check console for details.");
    } finally {
      setIsLinkingExisting(false);
    }
  };

  // ------------------------------------------------------------
  // Attachments upload helper
  // ------------------------------------------------------------  
  const maybeUploadLeaseAttachments = async (leaseIdToUse) => {
    if (!leaseIdToUse) return;

    const list = Array.isArray(leaseFiles) ? leaseFiles : [];
    if (!list.length) return;

    try {
      await leasesApi.uploadAttachments(leaseIdToUse, list, { token });
    } catch (err) {
      console.error("Lease saved but attachment upload failed", err);
      alert("Lease was saved, but uploading attachments failed. You can upload them later.");
    }
  };

  // ------------------------------------------------------------
  // Context-mode: create lease AND link it to tenant OR property
  // ------------------------------------------------------------
  const handleSubmitForContext = async (e) => {
    e.preventDefault();
    setTouched({ leaseType: true, rentAmount: true, startDate: true, status: true });
    setFormError("");

    if (hasBothContexts) return;

    const { ok, payload } = validateAndSetError();
    if (!ok) return;

    try {
      setSubmitting(true);

      // Create the lease entity ONLY
      const created = await leasesApi.create(payload, { token });

      // Link ONE thing depending on context
      if (contextKind === "TENANT") {
        await leasesApi.linkTenant(created.id, tenantId, { token });
      } else if (contextKind === "PROPERTY") {
        await leasesApi.update(created.id, { propertyId }, { token });
      }

      // Attachments last (optional)
      await maybeUploadLeaseAttachments(created?.id);

      goBackFromContext();
    } catch (err) {
      console.error("Failed to create lease for context", err);
      setFormError("Failed to create lease. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // Global create/edit (no linking here)
  // ------------------------------------------------------------
  const handleSubmitGlobal = async (e) => {
    e.preventDefault();
    setTouched({ leaseType: true, rentAmount: true, startDate: true, status: true });
    setFormError("");

    const { ok, payload } = validateAndSetError();
    if (!ok) return;

    try {
      setSubmitting(true);

      let saved;
      if (isEditMode) saved = await leasesApi.update(leaseId, payload, { token });
      else saved = await leasesApi.create(payload, { token });

      await maybeUploadLeaseAttachments(saved?.id || (isEditMode ? leaseId : null));

      if (returnTo) return navigate(returnTo);
      if (isEditMode) return navigate(`/landlord/leases/${saved?.id || leaseId}`);
      return navigate("/landlord/leases");
    } catch (err) {
      console.error("Failed to save lease", err);
      setFormError("Failed to save lease. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  const saveDisabled = isSubmitting;
  const ctrl = (isError) => `${card.control} ${isError ? card.controlError : ""}`;

  // ------------------------------------------------------------
  // FORM JSX (shared)
  // ------------------------------------------------------------
  const renderForm = (onSubmit) => (
    <form className={card.form} onSubmit={onSubmit}>
      <section className={`${card.card} ${card.cardForm} ${page.narrow}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>Basics</div>
        </div>

        <div className={card.cardBody}>
          <div className={shared.groupRow}>
            <div className={`${card.field} ${shared.groupField}`}>
              <label className={card.label} htmlFor="leaseType">
                Type <span className={card.required}>*</span>
              </label>

              <select
                id="leaseType"
                value={leaseType}
                onChange={(e) => setLeaseType(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, leaseType: true }))}
                className={ctrl(touched.leaseType && !String(leaseType).trim())}
                disabled={isSubmitting}
              >
                <option value="">— Select —</option>
                {leaseTypeOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>

              {touched.leaseType && !String(leaseType).trim() ? (
                <div className={shared.error}>Select lease type</div>
              ) : null}
            </div>

            <div className={`${card.field} ${shared.groupField}`}>
              <label className={card.label} htmlFor="status">
                Status <span className={card.required}>*</span>
              </label>

              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, status: true }))}
                className={ctrl(touched.status && !String(status).trim())}
                disabled={isSubmitting}
              >
                <option value="">— Select —</option>
                {leaseStatusOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>

              {touched.status && !String(status).trim() ? (
                <div className={shared.error}>Select lease status</div>
              ) : null}
            </div>
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="rentAmount">
              Total rent (per month) <span className={card.required}>*</span>
            </label>
            <input
              id="rentAmount"
              type="number"
              value={rentAmount}
              onChange={(e) => setRentAmount(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, rentAmount: true }))}
              placeholder="2500"
              className={ctrl(touched.rentAmount && !String(rentAmount).trim())}
              disabled={isSubmitting}
            />
            {touched.rentAmount && !String(rentAmount).trim() ? (
              <div className={shared.error}>Enter rent amount</div>
            ) : null}
          </div>

          <fieldset className={shared.groupRow}>
            <legend className={`${card.label} ${shared.groupLegend}`}>
              Term <span className={card.required}>*</span>{" "}
              <span className={shared.muted}>(Start Date required)</span>
            </legend>

            <div className={`${card.field} ${shared.groupField}`}>
              <label className={shared.srOnly} htmlFor="startDate">
                Start date
              </label>
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, startDate: true }))}
                className={ctrl(touched.startDate && !String(startDate).trim())}
                disabled={isSubmitting}
              />
              {touched.startDate && !String(startDate).trim() ? (
                <div className={shared.error}>Select a start date</div>
              ) : null}
            </div>

            <div className={`${card.field} ${shared.groupField}`}>
              <label className={shared.srOnly} htmlFor="endDate">
                End date
              </label>
              <input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className={card.control}
                disabled={isSubmitting}
              />
            </div>
          </fieldset>
        </div>
      </section>

      <section className={`${card.card} ${card.cardForm} ${page.narrow}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>
            Attachments <span className={shared.muted}>(optional)</span>
          </div>
        </div>

        <div className={card.cardBody}>
          <div className={card.field}>
            <label className={shared.srOnly} htmlFor="leaseFiles">
              Attachments
            </label>
            <input
              id="leaseFiles"
              type="file"
              multiple
              className={card.fileControl}
              onChange={(e) => setLeaseFiles(Array.from(e.target.files || []))}
              disabled={isSubmitting}
            />
            <div className={shared.muted} style={{ marginTop: 10 }}>Upload multiple attachments by selecting multiple files.</div>

            {leaseFiles.length > 0 ? (
              <div style={{ marginTop: 6 }}>
                <div className={shared.muted}>Selected:</div>
                <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
                  {leaseFiles.map((f) => (
                    <li key={`${f.name}:${f.size}:${f.lastModified}`} style={{ listStyleType: "disc" }}>
                      {f.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className={`${card.card} ${card.cardForm} ${page.narrow}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>Notes</div>
        </div>

        <div className={card.cardBody}>
          <div className={card.field}>
            <label className={card.label} htmlFor="notes">
              Additional notes <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any additional information"
              className={card.control}
              disabled={isSubmitting}
            />
          </div>

          {formError ? <div className={shared.error}>{formError}</div> : null}
        </div>
      </section>

      <div className={card.formActions}>
        <button type="submit" className={card.primaryButton} disabled={saveDisabled}>
          {isSubmitting ? "Saving…" : isEditMode ? "Save changes" : "Save lease"}
        </button>

      <button type="button" className={card.linkAction} onClick={handleCancel} disabled={isSubmitting}>
          Cancel
        </button>
      </div>      
    </form>
  );

  // ------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------

  // Mode A: context linking (tenant OR property)
  if (isContextMode) {
    const targetName =
      contextKind === "TENANT"
        ? tenant?.name || tenant?.email || "Unnamed tenant"
        : property?.name || property?.address1 || "Unnamed property";

    return (
      <div className={page.page}>
        <header className={page.header}>
          <div>
            <h1 className={page.title}>Manage lease linking</h1>

            {loadingContext ? (
              <p className={page.subtitle}>
                Loading {contextKind === "TENANT" ? "tenant" : "property"}…
              </p>
            ) : contextError ? (
              <p className={`${page.subtitle} ${shared.error}`}>
                Failed to load {contextKind === "TENANT" ? "tenant" : "property"}. You can still add leases,
                but linking may not behave as expected.
              </p>
            ) : (
              <p className={page.subtitle}>
                Link an existing lease or create a new one for <strong>{targetName}</strong>.
              </p>
            )}
          </div>
        </header>

        <div className={page.grid}>
          {/* Link existing */}
          <section className={page.section}>
            <div className={page.sectionHeader}>
              <div className={page.sectionHeaderStack}>
                <div className={page.sectionTitle}>Link existing</div>
                <div className={page.sectionHint}>Associate an existing lease with this {contextKind.toLowerCase()}</div>
              </div>
            </div>

            <div className={`${card.card} ${card.cardForm} ${page.narrow}`}>
              <div className={card.cardBody}>
                {loadingLeases ? (
                  <div className={shared.muted}>Loading leases…</div>
                ) : leasesError ? (
                  <div className={shared.error}>Failed to load leases list.</div>
                ) : availableExistingLeases.length === 0 ? (
                  <div className={shared.muted}>No other leases available to link.</div>
                ) : (
                  <>
                    <div className={shared.groupRow} style={{ alignItems: "center" }}>
                      <div className={shared.groupField} style={{ flex: 1 }}>
                        <select
                          className={card.control}
                          value={selectedExistingLeaseId}
                          onChange={(e) => setSelectedExistingLeaseId(e.target.value)}
                          disabled={isLinkingExisting}
                          style={{ flex: 1 }}
                        >
                          <option value="">Select a lease…</option>
                          {availableExistingLeases.map((l) => (
                            <option key={l.id} value={l.id}>
                              {leaseLabel(l)}
                            </option>
                          ))}
                        </select>
                      </div>

                      <button
                        type="button"
                        className={card.primaryButton}
                        onClick={handleLinkExisting}
                        disabled={!selectedExistingLeaseId || isLinkingExisting}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {isLinkingExisting ? "Linking…" : "Link"}
                      </button>
                    </div>

                    {linkedLeaseIds.size > 0 ? (
                      <div className={shared.muted} style={{ marginTop: 10 }}>
                        Already linked:
                        <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                          {(allLeases || [])
                            .filter((l) => l?.id && linkedLeaseIds.has(l.id))
                            .map((l) => (
                              <li key={l.id}>{leaseLabel(l)}</li>
                            ))}
                        </ul>
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            </div>
          </section>

          {/* Create new */}
          <section className={page.section}>
            <div className={page.sectionHeader}>
              <div className={page.sectionHeaderStack}>
                <div className={page.sectionTitle}>Create new</div>
                <div className={page.sectionHint}>
                  Create a new lease record and link it to this {contextKind.toLowerCase()}.
                </div>
              </div>
            </div>

            {renderForm(handleSubmitForContext)}
          </section>
        </div>
      </div>
    );
  }

  // Mode B: global add/edit
  return (
    <div className={page.page}>
      <header className={page.header}>
        <div>
          <h1 className={page.title}>{isEditMode ? "Edit lease" : "Create lease"}</h1>
          <p className={page.subtitle}>
            {isEditMode
              ? "Update lease details."
              : "Create a lease record. It can be linked from a tenant or property detail page."}
          </p>
        </div>
      </header>

      {renderForm(handleSubmitGlobal)}
    </div>
  );
}