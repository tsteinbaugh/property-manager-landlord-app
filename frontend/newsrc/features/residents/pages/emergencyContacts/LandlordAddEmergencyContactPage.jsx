// newsrc/features/tenants/pages/LandlordAddEmergencyContactPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

import { emergencyContactsApi } from "@features/residents/api/emergencyContacts.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";

import {
  INVALID,
  validateObject,
  requiredTrimmedString,
  optionalTrimToNull,
  normalizeEmail,
  normalizePhone,
  normalizeState,
  normalizeZipUS,
  isValidEmail,
  isValidPhone,
  US_STATE_NAME_TO_CODE,
  optionsFromEnumMap,
  formatEnumLabel,
} from "@shared/utils/validation.js";

export default function LandlordAddEmergencyContactPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const tenantId = searchParams.get("tenantId") || "";
  const emergencyContactId = searchParams.get("emergencyContactId") || "";
  const returnTo = searchParams.get("returnTo") || "";

  const isEditMode = !!emergencyContactId;
  const isTenantContext = !!tenantId;

  // ---------- form state ----------
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [relation, setRelation] = useState("");

  const [notes, setNotes] = useState("");

  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // ---------- tenant-context-only state ----------
  const [tenant, setTenant] = useState(null);
  const [loadingTenant, setLoadingTenant] = useState(!!tenantId);
  const [tenantError, setTenantError] = useState(null);

  const [allEmergencyContacts, setAllEmergencyContacts] = useState([]);
  const [loadingEmergencyContacts, setLoadingEmergencyContacts] = useState(!!tenantId);
  const [emergencyContactsError, setEmergencyContactsError] = useState(null);

  const [selectedExistingEmergencyContactId, setSelectedExistingEmergencyContactId] = useState("");
  const [isLinkingExisting, setIsLinkingExisting] = useState(false);

  const [touched, setTouched] = useState({ name: false, phone: false, email: false });

  // ------------------------------------------------------------
  // State dropdown options
  // ------------------------------------------------------------
  const stateOptions = useMemo(
    () =>
      optionsFromEnumMap(US_STATE_NAME_TO_CODE, {
        sortBy: "key", // state name
        toOption: (name, code) => ({
          value: code,
          label: `${formatEnumLabel(name, { hideUnknown: false })} (${code})`,
        }),
      }),
    []
  );

  // ------------------------------------------------------------
  // Load tenant + emergencyContacts list when tenantId is present
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    if (!isTenantContext || !token) return;

    async function loadTenant() {
      try {
        setLoadingTenant(true);
        setTenantError(null);
        const t = await tenantsApi.get(tenantId, { token });
        if (!cancelled) setTenant(t || null);
      } catch (err) {
        console.error("Failed to load tenant for AddEmergencyContactPage", err);
        if (!cancelled) setTenantError(err);
      } finally {
        if (!cancelled) setLoadingTenant(false);
      }
    }

    async function loadEmergencyContacts() {
      try {
        setLoadingEmergencyContacts(true);
        setEmergencyContactsError(null);
        const list = await emergencyContactsApi.listAll({ token, includeArchived: false });
        if (!cancelled) setAllEmergencyContacts(Array.isArray(list) ? list : []);
      } catch (err) {
        console.error("Failed to load emergency contacts for AddEmergencyContactPage", err);
        if (!cancelled) setEmergencyContactsError(err);
      } finally {
        if (!cancelled) setLoadingEmergencyContacts(false);
      }
    }

    loadTenant();
    loadEmergencyContacts();

    return () => {
      cancelled = true;
    };
  }, [tenantId, token]);

  // ------------------------------------------------------------
  // Load emergency contact for EDIT mode (global or tenant context)
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    if (!isEditMode || !emergencyContactId || !token) return;

    async function loadEmergencyContactForEdit() {
      try {
        setFormError("");
        const ec = await emergencyContactsApi.get(emergencyContactId, { token });
        if (cancelled) return;

        if (!ec) {
          setFormError("Emergency contact not found.");
          return;
        }

        setName(ec.name || "");
        setPhone(ec.phone || "");
        setEmail(ec.email || "");
        setAddress1(ec.address1 || "");
        setCity(ec.city || "");
        setState(ec.state || "");
        setPostalCode(ec.postalCode || "");
        setRelation(ec.relation || "");
        setNotes(ec.notes || "");
      } catch (err) {
        console.error("Failed to load emergency contact for edit", err);
        if (!cancelled) setFormError("Failed to load emergency contact for editing.");
      }
    }

    loadEmergencyContactForEdit();
    return () => {
      cancelled = true;
    };
  }, [isEditMode, emergencyContactId, token]);

  // ------------------------------------------------------------
  // Derived lists (tenant context)
  // ------------------------------------------------------------
  const emergencyContactLinks = useMemo(
    () => (Array.isArray(tenant?.emergencyContactLinks) ? tenant.emergencyContactLinks : []),
    [tenant]
  );
  const tenantEmergencyContacts = useMemo(
    () => emergencyContactLinks.map((link) => link?.emergencyContact).filter(Boolean),
    [emergencyContactLinks]
  );

  const availableExistingEmergencyContacts = useMemo(() => {
    const linkedIds = new Set(emergencyContactLinks.map((l) => l?.emergencyContactId).filter(Boolean));
    const list = Array.isArray(allEmergencyContacts) ? allEmergencyContacts : [];
    if (!tenantId) return list;
    return list.filter((v) => v?.id && !linkedIds.has(v.id));
  }, [allEmergencyContacts, emergencyContactLinks, tenantId]);

  // ------------------------------------------------------------
  // Navigation helpers
  // ------------------------------------------------------------
  const goBack = () => {
    if (returnTo) return navigate(returnTo);
    if (isTenantContext) return navigate(`/landlord/tenants/${tenantId}`);
    if (isEditMode) return navigate(`/landlord/emergencyContacts/${emergencyContactId}`);
    return navigate("/landlord/residents?tab=emergencyContacts");
  };

  const handleCancel = () => goBack();

  // ------------------------------------------------------------
  // Validation + payload builder (shared)
  // name, phone, email required
  // ------------------------------------------------------------
  const buildPayload = () => {
    const input = {
      name,
      phone,
      email,
      address1,
      city,
      state,
      postalCode,
      relation,
      notes,
    };

    const schema = {
      name:  requiredTrimmedString,

      phone: (v) => {
        const n = normalizePhone(v);
        if (!n) return INVALID;
        return isValidPhone(n) ? n : INVALID;
      },
        
      email: (v) => {
        const n = normalizeEmail(v);
        if (!n) return INVALID;
        return isValidEmail(n) ? n : INVALID;
      },

      address1: optionalTrimToNull,
      city: optionalTrimToNull,
      state: normalizeState,
      postalCode: normalizeZipUS,
      relation: optionalTrimToNull,

      notes: optionalTrimToNull,
    };

    return validateObject(input, schema, {
      errorMessages: {
        name: "Name is required.",
        phone: "Valid phone number is required.",
        email: "Valid email is required.",
        state: "State must be a valid US state or DC.",
        postalCode: "Zip must be 12345 or 12345-6789.",
      },
    });
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
  // Submit handlers
  // ------------------------------------------------------------
  const handleSubmitGlobal = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true });
    setFormError("");

    const { ok, payload } = buildvalidateAndSetErrorayload();
    if (!ok) return;

    try {
      setSubmitting(true);

      let saved;
      if (isEditMode) saved = await emergencyContactsApi.update(emergencyContactId, payload, { token });
      else saved = await emergencyContactsApi.create(payload, { token });
      if (returnTo) return navigate(returnTo);
      if (isEditMode) return navigate(`/landlord/emergencyContacts/${saved?.id || emergencyContactId}`);
      return navigate("/landlord/residents?tab=emergencyContacts");
    } catch (err) {
      console.error("Failed to save emergency contact", err);
      setFormError("Failed to save emergency contact. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // Tenant-context: link existing
  // ------------------------------------------------------------
  const handleLinkExisting = async () => {
    if (!tenantId || !selectedExistingEmergencyContactId) return;

    const emc = availableExistingEmergencyContacts.find((e) => e?.id === selectedExistingEmergencyContactId);
    const emcName = emc?.name || "this emergency contact";

    const ok = window.confirm(
      `Link ${emcName} to tenant "${tenant?.name || "Unnamed tenant"}"?\n\n` +
        "This will link the emergency contact to this tenant in your records."
    );
    if (!ok) return;

    try {
      setIsLinkingExisting(true);
      await tenantsApi.linkEmergencyContact(tenantId, selectedExistingEmergencyContactId, {
        token,
      });
      goBack();
    } catch (err) {
      console.error("Failed to link existing emergency contact", err);
      alert("Failed to link emergency contact. Check console for details.");
    } finally {
      setIsLinkingExisting(false);
    }
  };

  // ------------------------------------------------------------
  // Tenant-context: create & link new
  // ------------------------------------------------------------
  const handleSubmitForTenant = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true });
    setFormError("");

    const { ok, payload } = validateAndSetError();
    if (!ok) return;

    try {
      setSubmitting(true);

      const created = await emergencyContactsApi.create(payload, { token });
      await tenantsApi.linkEmergencyContact(tenantId, created.id, { token });

      goBack();
    } catch (err) {
      console.error("Failed to create emergency contact for tenant", err);
      setFormError("Failed to create emergency contact. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  const saveDisabled = isSubmitting;

  const ctrl = (isError) => `${card.control} ${isError ? card.controlError : ""}`;

  // ------------------------------------------------------------
  // FORM JSX
  // ------------------------------------------------------------
  const renderForm = (onSubmit) => (
    <form className={card.form} onSubmit={onSubmit}>
      <section className={`${card.card} ${card.cardForm} ${page.narrow}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>Basics</div>
        </div>  
  
        <div className={card.cardBody}>
          <div className={card.field}>
            <label className={card.label} htmlFor="name">
              Name <span className={card.required}>*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              placeholder="Name (required)"
              className={ctrl(touched.name && !String(name).trim())}
              disabled={isSubmitting}
            />
            {touched.name && !String(name).trim() ? <div className={shared.error}>Enter a name</div> : null}
          </div>

          <fieldset className={shared.groupRow}>
            <legend className={`${card.label} ${shared.groupLegend}`}>
              Contact <span className={card.required}>*</span>
            </legend>

            <div className={`${card.field} ${shared.groupField}`}>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                placeholder="Phone (123-123-1234)"
                className={ctrl(touched.name && !String(phone).trim())}
                disabled={isSubmitting}
              />
            </div>

            <div className={`${card.field} ${shared.groupField}`}>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                placeholder="Email (john.doe@example.com)"
                className={ctrl(touched.name && !String(email).trim())}
                disabled={isSubmitting}
              />
            </div>
          </fieldset>

          <fieldset style={{ border: 0, padding: 0, margin: 0, minInlineSize: 0 }}>
            <legend className={`${card.label} ${shared.groupLegend}`}>
              Address <span className={shared.muted}>(optional)</span>
            </legend>

            <div className={shared.rowWrap}>
              <div className={`${card.field} ${shared.full}`}>
                <input
                  id="address1"
                  type="text"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  placeholder="Street address (123 Oak Street)"
                  className={card.control}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className={`${shared.rowNoWrap} ${shared.mt3}`}>
              <div className={`${card.field} ${shared.growEqual}`}>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City (New York)"
                  className={card.control}
                  disabled={isSubmitting}
                />
              </div>
  
              <div className={`${card.field} ${shared.growEqual}`}>
                <select
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className={card.control}
                  disabled={isSubmitting}
                >
                  <option value="">— Select —</option>
                  {stateOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className={`${card.field} ${shared.growEqual}`}>
                <input
                  id="postalCode"
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="Zip (12345-1234)"
                  className={card.control}
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </fieldset>

          <div className={card.field}>
            <label className={card.label} htmlFor="relation">
              Relation <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="relation"
              type="text"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              placeholder="Relation to tenant(s) (roommate, child, partner, etc.)"
              className={card.control}
              disabled={isSubmitting}
            />
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
          {isSubmitting ? "Saving…" : isEditMode ? "Save changes" : "Save emergency contact"}
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

  // === Mode A: isTenantContext present (manage emergency contacts for tenant) ===
  if (isTenantContext) {
    const tenantName = tenant?.name || "Unnamed tenant";

    return (
      <div className={page.page}>
        <header className={page.header}>
          <div>
            <h1 className={page.title}>Manage emergency contact linking</h1>
            {loadingTenant ? (
              <p className={page.subtitle}>Loading tenant…</p>
            ) : tenantError || !tenant ? (
              <p className={`${page.subtitle} ${shared.error}`}>
                Failed to load tenant. You can still add emergency contacts, but linking may not behave as expected.
              </p>
            ) : (
              <p className={page.subtitle}>
                Link an existing emergency contact or create a new one for <strong>{tenantName}</strong>.
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
                <div className={page.sectionHint}>
                  Quickly associate an existing emergency contact with this tenant
                </div>
              </div>
            </div>

            <div className={`${card.card} ${card.cardForm} ${page.narrow}`}>
              <div className={card.cardBody}>
                {loadingEmergencyContacts ? (
                  <div className={shared.muted}>Loading emergency contacts…</div>
                ) : emergencyContactsError ? (
                  <div className={shared.error}>Failed to load emergency contacts list.</div>
                ) : availableExistingEmergencyContacts.length === 0 ? (
                  <div className={shared.muted}>No other emergency contacts available to link.</div>
                ) : (
                  <>
                    <div className={shared.groupRow} style={{ alignItems: "center" }}>
                      <div className={shared.groupField} style={{ flex: 1 }}>                            
                        <select
                          className={card.control}
                          value={selectedExistingEmergencyContactId}
                          onChange={(e) => setSelectedExistingEmergencyContactId(e.target.value)}
                          disabled={isLinkingExisting}
                          style={{ flex: 1 }}
                        >
                          <option value="">Select an emergency contact…</option>
                          {availableExistingEmergencyContacts.map((e) => (
                            <option key={e.id} value={e.id}>
                              {e.name || "Emergency contact"}
                            </option>
                          ))}
                        </select>
                      </div>

                      <button
                        type="button"
                        className={card.primaryButton}
                        onClick={handleLinkExisting}
                        disabled={!selectedExistingEmergencyContactId || isLinkingExisting}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {isLinkingExisting ? "Linking…" : "Link"}
                      </button>
                    </div>

                    {tenantEmergencyContacts.length > 0 ? (
                      <div className={shared.muted} style={{ marginTop: 10 }}>
                        Already linked:
                        <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                          {tenantEmergencyContacts.map((v) => (
                            <li key={v.id}>
                              {v.name || "Emergency contact"}
                            </li>
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
                  Create a new emergency contact record and link it to this tenant.
                </div>
              </div>
            </div>
            {renderForm(handleSubmitForTenant)}
          </section>
        </div>
      </div>
    );
  }

  // === Mode B: global add/edit ===
  return (
    <div className={page.page}>
      <header className={page.header}>
        <div>
          <h1 className={page.title}>{isEditMode ? "Edit emergency contact" : "Create emergency contact"}</h1>
          <p className={page.subtitle}>
            {isEditMode ? "Update emergency contact details." : "Create an emergency contact record. It can be linked to a tenant."}
          </p>
        </div>
      </header>

      {renderForm(handleSubmitGlobal)}
    </div>
  );
}