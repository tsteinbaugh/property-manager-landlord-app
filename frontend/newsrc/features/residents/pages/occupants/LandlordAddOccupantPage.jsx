// newsrc/features/tenants/pages/LandlordAddOccupantPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

import { occupantsApi } from "@features/residents/api/occupants.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";

import {
  INVALID,
  validateObject,
  requiredTrimmedString,
  optionalTrimToNull,
  parseIntOrNullOpt,
  parseEnumOrNullOpt,
  normalizeEmail,
  normalizePhone,
  isValidEmail,
  isValidPhone,
  SEX,
  HAIR_COLOR,
  EYE_COLOR,
  BODY_BUILD,
  optionsFromEnumMap,
  formatEnumLabel,
} from "@shared/utils/validation.js";

export default function LandlordAddOccupantPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const tenantId = searchParams.get("tenantId") || "";
  const occupantId = searchParams.get("occupantId") || "";
  const returnTo = searchParams.get("returnTo") || "";

  const isEditMode = !!occupantId;

  // ---------- form state ----------
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [relation, setRelation] = useState("");

  const [age, setAge] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [bodyBuild, setBodyBuild] = useState("");
  const [markings, setMarkings] = useState("");

  const [notes, setNotes] = useState("");

  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // ---------- tenant-context-only state ----------
  const [tenant, setTenant] = useState(null);
  const [loadingTenant, setLoadingTenant] = useState(!!tenantId);
  const [tenantError, setTenantError] = useState(null);

  const [allOccupants, setAllOccupants] = useState([]);
  const [loadingOccupants, setLoadingOccupants] = useState(!!tenantId);
  const [occupantsError, setOccupantsError] = useState(null);

  const [selectedExistingOccupantId, setSelectedExistingOccupantId] = useState("");
  const [isLinkingExisting, setIsLinkingExisting] = useState(false);

  const [touched, setTouched] = useState({ name: false });

  // ------------------ UI dropdown options ------------------
  const sexOptions = useMemo(
    () =>
      optionsFromEnumMap(SEX, {
        sortBy: "key",
        toOption: (name, code) => ({
          value: code,
          label: `${formatEnumLabel(name, { hideUnknown: false })}`,
        }),
      }),
    []
  );  
  
  const hairColorOptions = useMemo(
    () =>
      optionsFromEnumMap(HAIR_COLOR, {
        sortBy: "key",
        toOption: (name, code) => ({
          value: code,
          label: `${formatEnumLabel(name, { hideUnknown: false })}`,
        }),
      }),
    []
  );  
  
  const eyeColorOptions = useMemo(
    () =>
      optionsFromEnumMap(EYE_COLOR, {
        sortBy: "key",
        toOption: (name, code) => ({
          value: code,
          label: `${formatEnumLabel(name, { hideUnknown: false })}`,
        }),
      }),
    []
  );  
  
  const bodyBuildOptions = useMemo(
    () =>
      optionsFromEnumMap(BODY_BUILD, {
        sortBy: "key",
        toOption: (name, code) => ({
          value: code,
          label: `${formatEnumLabel(name, { hideUnknown: false })}`,
        }),
      }),
    []
  );  
  
  // ------------------------------------------------------------
  // Load tenant + occupants list when tenantId is present
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    if (!tenantId || !token) return;

    async function loadTenant() {
      try {
        setLoadingTenant(true);
        setTenantError(null);
        const t = await tenantsApi.detail(tenantId, { token });
        if (!cancelled) setTenant(t || null);
      } catch (err) {
        console.error("Failed to load tenant for AddOccupantPage", err);
        if (!cancelled) setTenantError(err);
      } finally {
        if (!cancelled) setLoadingTenant(false);
      }
    }

    async function loadOccupants() {
      try {
        setLoadingOccupants(true);
        setOccupantsError(null);
        const list = await occupantsApi.listAll({ token, includeArchived: false });
        if (!cancelled) setAllOccupants(Array.isArray(list) ? list : []);
      } catch (err) {
        console.error("Failed to load occupants for AddOccupantPage", err);
        if (!cancelled) setOccupantsError(err);
      } finally {
        if (!cancelled) setLoadingOccupants(false);
      }
    }

    loadTenant();
    loadOccupants();

    return () => {
      cancelled = true;
    };
  }, [tenantId, token]);

  // ------------------------------------------------------------
  // Load occupant for EDIT mode
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    if (!occupantId || !token) return;

    async function loadOccupantForEdit() {
      try {
        setFormError("");
        const o = await occupantsApi.get(occupantId, { token });
        if (cancelled) return;

        if (!o) {
          setFormError("Occupant not found.");
          return;
        }

        setName(o.name || "");
        setPhone(o.phone || "");
        setEmail(o.email || "");
        setRelation(o.relation || "");
        setAge(o.age != null ? String(o.age) : "");
        setHeightFeet(o.heightFeet != null ? String(o.heightFeet) : "");
        setHeightInches(o.heightInches != null ? String(o.heightInches) : "");
        setWeight(o.weight != null ? String(o.weight) : "");
        setSex(o.sex || "");
        setHairColor(o.hairColor || "");
        setEyeColor(o.eyeColor || "");
        setBodyBuild(o.bodyBuild || "");
        setMarkings(o.markings || "");
        setNotes(o.notes || "");
      } catch (err) {
        console.error("Failed to load occupant for edit", err);
        if (!cancelled) setFormError("Failed to load occupant for editing.");
      }
    }

    loadOccupantForEdit();
    return () => {
      cancelled = true;
    };
  }, [occupantId, token]);

  // ------------------------------------------------------------
  // Derived lists (tenant context)
  // ------------------------------------------------------------
  const occupantLinks = Array.isArray(tenant?.occupantLinks) ? tenant.occupantLinks : [];
  const tenantOccupants = occupantLinks.map((link) => link.occupant).filter(Boolean);

  const linkedIds = new Set(occupantLinks.map((l) => l.occupantId));
  const availableExistingOccupants =
    tenant && allOccupants.length > 0 ? allOccupants.filter((o) => !linkedIds.has(o.id)) : allOccupants;

  // ------------------------------------------------------------
  // Navigation helpers
  // ------------------------------------------------------------
  const goBackFromTenantContext = () => {
    if (returnTo) navigate(returnTo);
    else if (tenantId) navigate(`/landlord/tenants/${tenantId}`);
    else navigate("/landlord/residents?tab=occupants");
  };

  const handleCancel = () => {
    if (returnTo) return navigate(returnTo);
    if (tenantId) return goBackFromTenantContext();
    if (isEditMode) return navigate(`/landlord/occupants/${occupantId}`);
    return navigate("/landlord/residents?tab=occupants");
  };

  // ------------------------------------------------------------
  // Validation + payload builder (shared)
  // name required, phone/email optional but validated if present
  // ------------------------------------------------------------
  const buildPayload = () => {
    const input = {
      name,
      phone,
      email,
      relation,
      age,
      heightFeet,
      heightInches,
      weight,
      sex,
      hairColor,
      eyeColor,
      bodyBuild,
      markings,
      notes,
    };

    const schema = {
      name: requiredTrimmedString,

      phone: (v) => {
        const out = normalizePhone(v);
        if (out == null || out === "") return null;
        return isValidPhone(out) ? out : INVALID;
      },

      email: (v) => {
        const out = normalizeEmail(v);
        if (out == null || out === "") return null;
        return isValidEmail(out) ? out : INVALID;
      },

      relation: optionalTrimToNull,
      age: (v) => parseIntOrNullOpt(v, { min: 0, max: 130 }),
      heightFeet: (v) => parseIntOrNullOpt(v, { min: 0, max: 8 }),
      heightInches: (v) => parseIntOrNullOpt(v, { min: 0, max: 11 }),
      weight: (v) => parseIntOrNullOpt(v, { min: 0, max: 2000 }),

      sex: (v) => parseEnumOrNullOpt(v, SEX),
      hairColor: (v) => parseEnumOrNullOpt(v, HAIR_COLOR),
      eyeColor: (v) => parseEnumOrNullOpt(v, EYE_COLOR),
      bodyBuild: (v) => parseEnumOrNullOpt(v, BODY_BUILD),

      markings: optionalTrimToNull,
      notes: optionalTrimToNull,
    };

    return validateObject(input, schema, {
      errorMessages: {
        name: "Name is required.",
        phone: "Enter a valid phone number.",
        email: "Enter a valid email.",
        sex: "Invalid sex value.",
        hairColor: "Invalid hair color value.",
        eyeColor: "Invalid eye color value.",
        bodyBuild: "Invalid body build value.",
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
    setTouched({ name: true });
    setFormError("");

    const { ok, payload } = validateAndSetError();
    if (!ok) return;

    try {
      setSubmitting(true);

      let saved;
      if (isEditMode) {
        saved = await occupantsApi.update(occupantId, payload, { token });
      } else {
        saved = await occupantsApi.create(payload, { token });
      }

      if (returnTo) {
        navigate(returnTo);
      } else if (isEditMode) {
        navigate(`/landlord/occupants/${saved?.id || occupantId}`);
      } else {
        navigate("/landlord/residents?tab=occupants");
      }
    } catch (err) {
      console.error("Failed to save occupant", err);
      setFormError("Failed to save occupant. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // Tenant-context: link existing
  // ------------------------------------------------------------
  const handleLinkExisting = async () => {
    if (!tenantId || !selectedExistingOccupantId) return;

    const occ = availableExistingOccupants.find((o) => o.id === selectedExistingOccupantId);
    const occName = occ?.name || "this occupant";

    const ok = window.confirm(
      `Link ${occName} to tenant "${tenant?.name || ""}"?\n\n` +
        "This will link the occupant to this tenant in your records."
    );
    if (!ok) return;

    try {
      setIsLinkingExisting(true);
      await tenantsApi.linkOccupant(tenantId, selectedExistingOccupantId, { token });
      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to link existing occupant", err);
      alert("Failed to link occupant. Check console for details.");
    } finally {
      setIsLinkingExisting(false);
    }
  };

  // ------------------------------------------------------------
  // Tenant-context: create & link new
  // ------------------------------------------------------------
  const handleSubmitForTenant = async (e) => {
    e.preventDefault();
    setTouched({ name: true });
    setFormError("");

    const { ok, payload } = validateAndSetError();
    if (!ok) return;

    try {
      setSubmitting(true);

      const created = await occupantsApi.create(payload, { token });
      await tenantsApi.linkOccupant(tenantId, created.id, { token });

      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to create occupant for tenant", err);
      setFormError("Failed to create occupant. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  const saveDisabled = isSubmitting;

  const ctrl = (isError) => `${card.control} ${isError ? card.controlError : ""}`;

  // ------------------------------------------------------------
  // FORM JSX (no inner React components!)
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
            {touched.name && !String(name).trim() ? <div className={card.errorText}>Enter a name</div> : null}
          </div>

          <fieldset className={shared.groupRow}>
            <legend className={`${card.label} ${shared.groupLegend}`}>
              Contact <span className={shared.muted}>(optional)</span>
            </legend>

            <div className={`${card.field} ${shared.groupField}`}>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone (123-123-1234)"
                className={card.control}
                disabled={isSubmitting}
              />
            </div>

            <div className={`${card.field} ${shared.groupField}`}>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email (john.doe@example.com)"
                className={card.control}
                disabled={isSubmitting}
              />
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
          <div className={page.sectionHeaderStack}>
            <div className={card.cardTitle}>Physical characteristics</div>
            <div className={shared.muted}>Used for indentifying purposes</div>
          </div>
        </div>

        <div className={card.cardBody}>
          <div className={card.field}>
            <label className={card.label} htmlFor="age">
              Age <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, age: true }))}
              placeholder="2019"
              className={card.control}
              disabled={isSubmitting}
            />
          </div>

          <fieldset className={shared.groupRow}>
            <legend className={`${card.label} ${shared.groupLegend}`}>
              Height <span className={shared.muted}>(optional)</span>
            </legend>
            
            <div className={`${card.field} ${shared.groupField}`}>
              <input
                id="heightFeet"
                type="number"
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                placeholder="Feet"
                className={card.control}
                disabled={isSubmitting}
              />
            </div>
            
            <div className={`${card.field} ${shared.groupField}`}>
              <input
                id="heightInches"
                type="number"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                placeholder="Inches"
                className={card.control}
                disabled={isSubmitting}
              />
            </div>
          </fieldset>

          <div className={card.field}>
            <label className={card.label} htmlFor="weight">
              Weight <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, weight: true }))}
              placeholder="Weight (pounds)"
              className={card.control}
              disabled={isSubmitting}
            />
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="sex">
              Sex <span className={shared.muted}>(optional)</span>
            </label>
            <select
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className={card.control}
              disabled={isSubmitting}
            >
              <option value="">— Select —</option>
              {sexOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="hairColor">
              Hair color <span className={shared.muted}>(optional)</span>
            </label>
            <select
              id="hairColor"
              value={hairColor}
              onChange={(e) => setHairColor(e.target.value)}
              className={card.control}
              disabled={isSubmitting}
            >
              <option value="">— Select —</option>
              {hairColorOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="eyeColor">
              Eye color <span className={shared.muted}>(optional)</span>
            </label>
            <select
              id="eyeColor"
              value={eyeColor}
              onChange={(e) => setEyeColor(e.target.value)}
              className={card.control}
              disabled={isSubmitting}
            >
              <option value="">— Select —</option>
              {eyeColorOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="bodyBuild">
              Body build <span className={shared.muted}>(optional)</span>
            </label>
            <select
              id="bodyBuild"
              value={bodyBuild}
              onChange={(e) => setBodyBuild(e.target.value)}
              className={card.control}
              disabled={isSubmitting}
            >
              <option value="">— Select —</option>
              {bodyBuildOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="markings">
              Markings <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="markings"
              type="text"
              value={markings}
              onChange={(e) => setMarkings(e.target.value)}
              placeholder="Identifying markings (tattoos, scars, birth marks, etc.)"
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

          <div className={card.formActions}>
            <button type="submit" className={card.primaryButton} disabled={saveDisabled}>
              {isSubmitting ? "Saving…" : isEditMode ? "Save changes" : "Save occupant"}
            </button>

            <button type="button" className={card.linkAction} onClick={handleCancel} disabled={isSubmitting}>
              Cancel
            </button>
          </div>
        </div>
      </section>
    </form>
  );

  // ------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------

  // === Mode A: tenantId present (manage occupants for tenant) ===
  if (tenantId) {
    return (
      <div className={page.page}>
        <header className={page.header}>
          <div>
            <h1 className={page.title}>Manage occupant linking</h1>
            {loadingTenant ? (
              <p className={page.subtitle}>Loading tenant…</p>
            ) : tenantError || !tenant ? (
              <p className={page.subtitle} style={{ color: "#b91c1c" }}>
                Failed to load tenant. You can still add occupants, but linking may not behave as expected.
              </p>
            ) : (
              <p className={page.subtitle}>
                Link an existing occupant or create a new one for <strong>{tenant.name}</strong>.
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
                  Quickly associate an existing occupant with this tenant
                </div>
              </div>
            </div>

            <div className={`${card.card} ${card.cardForm} ${page.narrow}`}>
              <div className={card.cardBody}>
                {loadingOccupants ? (
                  <div className={shared.muted}>Loading occupants…</div>
                ) : occupantsError ? (
                  <div className={shared.error}>Failed to load occupants list.</div>
                ) : availableExistingOccupants.length === 0 ? (
                  <div className={shared.muted}>No other occupants available to link.</div>
                ) : (
                  <>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <select
                        className={card.control}
                        value={selectedExistingOccupantId}
                        onChange={(e) => setSelectedExistingOccupantId(e.target.value)}
                        disabled={isLinkingExisting}
                        style={{ flex: 1 }}
                      >
                        <option value="">Select an occupant…</option>
                        {availableExistingOccupants.map((v) => (
                          <option key={v.id} value={v.id}>
                            {[v.year, v.make, v.model].filter(Boolean).join(" ") || "Occupant"}
                            {v.plate ? ` • ${v.plate}` : ""}
                            {v.state ? ` (${v.state})` : ""}
                          </option>
                        ))}
                      </select>

                      <button
                        type="button"
                        className={card.primaryButton}
                        onClick={handleLinkExisting}
                        disabled={!selectedExistingOccupantId || isLinkingExisting}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {isLinkingExisting ? "Linking…" : "Link"}
                      </button>
                    </div>

                    {tenantOccupants.length > 0 ? (
                      <div className={shared.muted} style={{ marginTop: 10 }}>
                        Already linked:
                        <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                          {tenantOccupants.map((v) => (
                            <li key={v.id}>
                              {[v.year, v.make, v.model].filter(Boolean).join(" ") || "Occupant"}
                              {v.plate ? ` • ${v.plate}` : ""}
                              {v.state ? ` (${v.state})` : ""}
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

          {/* Create new (same form, different submit) */}
          <section className={page.section}>
            <div className={page.sectionHeader}>
              <div className={page.sectionHeaderStack}>
                <div className={page.sectionTitle}>Create new</div>
                <div className={page.sectionHint}>
                  Create a new occupant record and link it to this tenant.
                </div>
              </div>
            </div>
          </section>

          {renderForm(handleSubmitForTenant)}
        </div>
      </div>
    );
  }

  // === Mode B: global add/edit ===
  return (
    <div className={page.page}>
      <header className={page.header}>
        <div>
          <h1 className={page.title}>{isEditMode ? "Edit occupant" : "Create occupant"}</h1>
          <p className={page.subtitle}>
            {isEditMode ? "Update occupant details." : "Create an occupant record.  It can be linked to a tenant."}
          </p>
        </div>
      </header>

      {renderForm(handleSubmitGlobal)}
    </div>
  );
}