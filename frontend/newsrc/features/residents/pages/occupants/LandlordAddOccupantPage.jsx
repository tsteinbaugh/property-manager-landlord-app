// newsrc/features/tenants/pages/LandlordAddOccupantPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import styles from "@shared/styles/LandlordPage.module.css";
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
  const [touched, setTouched] = useState({ name: false });

  // ---------- tenant-context-only state ----------
  const [tenant, setTenant] = useState(null);
  const [loadingTenant, setLoadingTenant] = useState(!!tenantId);
  const [tenantError, setTenantError] = useState(null);

  const [allOccupants, setAllOccupants] = useState([]);
  const [loadingOccupants, setLoadingOccupants] = useState(!!tenantId);
  const [occupantsError, setOccupantsError] = useState(null);

  const [selectedExistingOccupantId, setSelectedExistingOccupantId] = useState("");
  const [isLinkingExisting, setIsLinkingExisting] = useState(false);

  // ------------------ UI dropdown options (unchanged) ------------------
  const SEX_OPTIONS = [
    { value: "", label: "— Select —" },
    { value: "MALE", label: "Male" },
    { value: "FEMALE", label: "Female" },
    { value: "OTHER", label: "Other" },
    { value: "UNKNOWN", label: "Unknown" },
  ];

  const HAIRCOLOR_OPTIONS = [
    { value: "", label: "— Select —" },
    { value: "BLACK", label: "Black" },
    { value: "BROWN", label: "Brown" },
    { value: "BLONDE", label: "Blonde" },
    { value: "RED", label: "Red" },
    { value: "GRAY", label: "Gray" },
    { value: "WHITE", label: "White" },
    { value: "DYED", label: "Dyed" },
    { value: "BALD", label: "Bald" },
    { value: "OTHER", label: "Other" },
    { value: "UNKNOWN", label: "Unknown" },
  ];

  const EYECOLOR_OPTIONS = [
    { value: "", label: "— Select —" },
    { value: "BROWN", label: "Brown" },
    { value: "BLUE", label: "Blue" },
    { value: "GREEN", label: "Green" },
    { value: "HAZEL", label: "Hazel" },
    { value: "GRAY", label: "Gray" },
    { value: "AMBER", label: "Amber" },
    { value: "OTHER", label: "Other" },
    { value: "UNKNOWN", label: "Unknown" },
  ];

  const BODYBUILD_OPTIONS = [
    { value: "", label: "— Select —" },
    { value: "SLIM", label: "Slim" },
    { value: "AVERAGE", label: "Average" },
    { value: "ATHLETIC", label: "Athletic" },
    { value: "HEAVYSET", label: "Heavyset" },
    { value: "OTHER", label: "Other" },
    { value: "UNKNOWN", label: "Unknown" },
  ];

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
  // Tenant-context links
  // ------------------------------------------------------------
  const occupantLinks = Array.isArray(tenant?.occupantLinks) ? tenant.occupantLinks : [];

  const tenantOccupants = occupantLinks
    .map((link) => link.occupant)
    .filter(Boolean);

  const linkedIds = useMemo(() => new Set(occupantLinks.map((l) => l.occupantId)), [occupantLinks]);

  const availableExistingOccupants =
    tenant && allOccupants.length > 0
      ? allOccupants.filter((o) => !linkedIds.has(o.id))
      : allOccupants;

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
        const out = normalizePhone(v); // returns null/"" depending on your helper
        if (out == null || out === "") return null; // optional
        return isValidPhone(out) ? out : INVALID;
      },

      email: (v) => {
        const out = normalizeEmail(v);
        if (out == null || out === "") return null; // optional
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

  // ------------------------------------------------------------
  // Save (global create/edit)
  // ------------------------------------------------------------
  const handleSubmitGlobal = async (e) => {
    e.preventDefault();
    setTouched({ name: true });
    setFormError("");

    const { value: payload, ok, errors } = buildPayload();
    if (!ok) {
      const firstKey = Object.keys(errors || {})[0];
      setFormError(errors?.[firstKey] || "Please fix the highlighted fields.");
      return;
    }

    try {
      setSubmitting(true);

      let saved;
      if (isEditMode) {
        saved = await occupantsApi.update(occupantId, payload, { token });
      } else {
        saved = await occupantsApi.create(payload, { token });
      }

      if (returnTo) navigate(returnTo);
      else if (isEditMode) navigate(`/landlord/occupants/${saved?.id || occupantId}`);
      else navigate("/landlord/residents?tab=occupants");
    } catch (err) {
      console.error("Failed to save occupant", err);
      setFormError("Failed to save occupant. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // TENANT-CONTEXT: link existing + create & link new
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

  const handleSubmitForTenant = async (e) => {
    e.preventDefault();
    setTouched({ name: true });
    setFormError("");

    const { value: payload, ok, errors } = buildPayload();
    if (!ok) {
      const firstKey = Object.keys(errors || {})[0];
      setFormError(errors?.[firstKey] || "Please fix the highlighted fields.");
      return;
    }

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

  // ------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------
  if (tenantId) {
    return (
      <div className={styles.page}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Manage occupants</h1>
            {loadingTenant ? (
              <p className={styles.subtitle}>Loading tenant…</p>
            ) : tenantError || !tenant ? (
              <p className={styles.subtitle} style={{ color: "#b91c1c" }}>
                Failed to load tenant. You can still add occupants, but linking may not behave as expected.
              </p>
            ) : (
              <p className={styles.subtitle}>
                Link existing occupants or create new ones for <strong>{tenant.name}</strong>.
              </p>
            )}
          </div>
        </header>

        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Section 1: Link existing occupant */}
          <section
            style={{
              maxWidth: 520,
              padding: 16,
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: 16, marginBottom: 8 }}>Link existing occupant</h2>

            {loadingOccupants ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>Loading occupants…</div>
            ) : occupantsError ? (
              <div style={{ fontSize: 13, color: "#b91c1c" }}>Failed to load occupants list.</div>
            ) : availableExistingOccupants.length === 0 ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>No other occupants available to link.</div>
            ) : (
              <>
                <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <select
                    style={{
                      flex: 1,
                      padding: "6px 8px",
                      borderRadius: 8,
                      border: "1px solid #d1d5db",
                    }}
                    value={selectedExistingOccupantId}
                    onChange={(e) => setSelectedExistingOccupantId(e.target.value)}
                    disabled={isLinkingExisting}
                  >
                    <option value="">Select an occupant…</option>
                    {availableExistingOccupants.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.name}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className={styles.primaryButton}
                    style={{ whiteSpace: "nowrap" }}
                    onClick={handleLinkExisting}
                    disabled={!selectedExistingOccupantId || isLinkingExisting}
                  >
                    {isLinkingExisting ? "Linking…" : "Link"}
                  </button>
                </div>

                {tenantOccupants.length > 0 && (
                  <div style={{ fontSize: 12, color: "#6b7280" }}>
                    Already linked to this tenant:
                    <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                      {tenantOccupants.map((o) => (
                        <li key={o.id}>{o.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </section>

          {/* Section 2: Create & link new occupant */}
          <section
            style={{
              maxWidth: 520,
              padding: 16,
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: 16, marginBottom: 8 }}>Create new occupant for this tenant</h2>

            <form onSubmit={handleSubmitForTenant}>
              {/* Name */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="name" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Occupant name <span style={{ color: "#b91c1c" }}>*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  placeholder="Name (required)"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
                {touched.name && requiredTrimmedString(name) === INVALID && (
                  <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>Enter a name</div>
                )}
              </div>

              {/* Phone */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="phone" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number (123-123-1234)"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="email" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email (john.doe@example.com)"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Relation */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="relation" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Relation
                </label>
                <input
                  id="relation"
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder="Relation to tenant(s) (roommate, child, partner, etc.)"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Age */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="age" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Age
                </label>
                <input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Height */}
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>Height</label>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    id="heightFeet"
                    type="number"
                    value={heightFeet}
                    onChange={(e) => setHeightFeet(e.target.value)}
                    placeholder="Feet"
                    style={{
                      flex: 1,
                      padding: "6px 8px",
                      borderRadius: 8,
                      border: "1px solid #d1d5db",
                    }}
                    disabled={isSubmitting}
                  />
                  <input
                    id="heightInches"
                    type="number"
                    value={heightInches}
                    onChange={(e) => setHeightInches(e.target.value)}
                    placeholder="Inches"
                    style={{
                      flex: 1,
                      padding: "6px 8px",
                      borderRadius: 8,
                      border: "1px solid #d1d5db",
                    }}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Weight */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="weight" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Weight
                </label>
                <input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Weight in pounds"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Sex */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="sex" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Sex
                </label>
                <select
                  id="sex"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                >
                  {SEX_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* HairColor */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="hairColor" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Hair Color
                </label>
                <select
                  id="hairColor"
                  value={hairColor}
                  onChange={(e) => setHairColor(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                >
                  {HAIRCOLOR_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* EyeColor */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="eyeColor" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Eye Color
                </label>
                <select
                  id="eyeColor"
                  value={eyeColor}
                  onChange={(e) => setEyeColor(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                >
                  {EYECOLOR_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* BodyBuild */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="bodyBuild" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Body Type
                </label>
                <select
                  id="bodyBuild"
                  value={bodyBuild}
                  onChange={(e) => setBodyBuild(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                >
                  {BODYBUILD_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Markings */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="markings" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Markings
                </label>
                <input
                  id="markings"
                  type="text"
                  value={markings}
                  onChange={(e) => setMarkings(e.target.value)}
                  placeholder="Identifying markings (tattoos, scars, birth marks, etc.)"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Notes */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="notes" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Notes
                </label>
                <input
                  id="notes"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Additional notes"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>

              {formError && (
                <div style={{ color: "#b91c1c", fontSize: 13, marginBottom: 8 }}>{formError}</div>
              )}

              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button type="submit" className={styles.primaryButton} disabled={saveDisabled}>
                  {isSubmitting ? "Saving…" : "Save occupant"}
                </button>

                <button
                  type="button"
                  onClick={handleCancel}
                  style={{
                    borderRadius: 999,
                    padding: "8px 16px",
                    border: "1px solid #d1d5db",
                    background: "#ffffff",
                    cursor: "pointer",
                  }}
                  disabled={isSubmitting}
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

  // Global add/edit
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>{isEditMode ? "Edit occupant" : "Add occupant"}</h1>
          <p className={styles.subtitle}>
            {isEditMode
              ? "Update this occupant record."
              : "Create an occupant record. You’ll be able to connect occupants to leases (and tenants) later."}
          </p>
        </div>
      </header>

      <div style={{ marginTop: 12 }}>
        <form
          onSubmit={handleSubmitGlobal}
          style={{
            maxWidth: 480,
            padding: 16,
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            background: "#ffffff",
          }}
        >
          {/* Name */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="name" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Occupant name <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              placeholder="Name (required)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
            {touched.name && requiredTrimmedString(name) === INVALID && (
              <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>Enter a name</div>
            )}
          </div>

          {/* Phone */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="phone" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number (123-123-1234)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="email" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email (john.doe@example.com)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Relation */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="relation" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Relation
            </label>
            <input
              id="relation"
              type="text"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              placeholder="Relation to tenant(s) (roommate, child, partner, etc.)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Age */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="age" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Age
            </label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Height */}
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>Height</label>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                id="heightFeet"
                type="number"
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                placeholder="Feet"
                style={{
                  flex: 1,
                  padding: "6px 8px",
                  borderRadius: 8,
                  border: "1px solid #d1d5db",
                }}
                disabled={isSubmitting}
              />
              <input
                id="heightInches"
                type="number"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                placeholder="Inches"
                style={{
                  flex: 1,
                  padding: "6px 8px",
                  borderRadius: 8,
                  border: "1px solid #d1d5db",
                }}
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Weight */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="weight" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Weight
            </label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight in pounds"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Sex */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="sex" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Sex
            </label>
            <select
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            >
              {SEX_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* HairColor */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="hairColor" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Hair Color
            </label>
            <select
              id="hairColor"
              value={hairColor}
              onChange={(e) => setHairColor(e.target.value)}
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            >
              {HAIRCOLOR_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* EyeColor */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="eyeColor" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Eye Color
            </label>
            <select
              id="eyeColor"
              value={eyeColor}
              onChange={(e) => setEyeColor(e.target.value)}
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            >
              {EYECOLOR_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* BodyBuild */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="bodyBuild" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Body Type
            </label>
            <select
              id="bodyBuild"
              value={bodyBuild}
              onChange={(e) => setBodyBuild(e.target.value)}
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            >
              {BODYBUILD_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* Markings */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="markings" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Markings
            </label>
            <input
              id="markings"
              type="text"
              value={markings}
              onChange={(e) => setMarkings(e.target.value)}
              placeholder="Identifying markings (tattoos, scars, birth marks, etc.)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Notes */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="notes" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Notes
            </label>
            <input
              id="notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Additional notes"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {formError && (
            <div style={{ color: "#b91c1c", fontSize: 13, marginBottom: 8 }}>{formError}</div>
          )}

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button type="submit" className={styles.primaryButton} disabled={saveDisabled}>
              {isSubmitting ? "Saving…" : "Save occupant"}
            </button>

            <button
              type="button"
              onClick={handleCancel}
              style={{
                borderRadius: 999,
                padding: "8px 16px",
                border: "1px solid #d1d5db",
                background: "#ffffff",
                cursor: "pointer",
              }}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
