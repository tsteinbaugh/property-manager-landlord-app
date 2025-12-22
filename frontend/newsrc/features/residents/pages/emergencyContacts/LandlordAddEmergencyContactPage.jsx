// newsrc/features/tenants/pages/LandlordAddEmergencyContactPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import styles from "@shared/styles/LandlordPage.module.css";
import { emergencyContactsApi } from "@features/residents/api/emergencyContacts.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";

const US_STATES = new Map([
  ["ALABAMA","AL"],["ALASKA","AK"],["ARIZONA","AZ"],["ARKANSAS","AR"],
  ["CALIFORNIA","CA"],["COLORADO","CO"],["CONNECTICUT","CT"],["DELAWARE","DE"],
  ["FLORIDA","FL"],["GEORGIA","GA"],["HAWAII","HI"],["IDAHO","ID"],
  ["ILLINOIS","IL"],["INDIANA","IN"],["IOWA","IA"],["KANSAS","KS"],
  ["KENTUCKY","KY"],["LOUISIANA","LA"],["MAINE","ME"],["MARYLAND","MD"],
  ["MASSACHUSETTS","MA"],["MICHIGAN","MI"],["MINNESOTA","MN"],["MISSISSIPPI","MS"],
  ["MISSOURI","MO"],["MONTANA","MT"],["NEBRASKA","NE"],["NEVADA","NV"],
  ["NEW HAMPSHIRE","NH"],["NEW JERSEY","NJ"],["NEW MEXICO","NM"],["NEW YORK","NY"],
  ["NORTH CAROLINA","NC"],["NORTH DAKOTA","ND"],["OHIO","OH"],["OKLAHOMA","OK"],
  ["OREGON","OR"],["PENNSYLVANIA","PA"],["RHODE ISLAND","RI"],["SOUTH CAROLINA","SC"],
  ["SOUTH DAKOTA","SD"],["TENNESSEE","TN"],["TEXAS","TX"],["UTAH","UT"],
  ["VERMONT","VT"],["VIRGINIA","VA"],["WASHINGTON","WA"],["WEST VIRGINIA","WV"],
  ["WISCONSIN","WI"],["WYOMING","WY"],
  ["DISTRICT OF COLUMBIA","DC"],
]);
const US_STATE_CODES = new Set(Array.from(US_STATES.values()));

function normalizeState(input) {
  const raw = typeof input === "string" ? input.trim() : "";
  if (!raw) return "";
  const upper = raw.toUpperCase().replace(/\./g, "");
  if (upper.length === 2 && US_STATE_CODES.has(upper)) return upper;
  return US_STATES.get(upper) || "";
}

function normalizeZipUS(input) {
  const raw = typeof input === "string" ? input.trim() : "";
  if (!raw) return "";
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 5) return digits;
  if (digits.length === 9) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  return "";
}

function normalizeEmail(input) {
  return typeof input === "string" ? input.trim().toLowerCase() : "";
}
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizePhone(input) {
  if (typeof input !== "string") return "";
  return input.trim().replace(/(?!^\+)[^\d]/g, ""); // keep digits and leading +
}
function isValidPhone(phoneDigitsOrPlus) {
  const digits = phoneDigitsOrPlus.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

function trimOrEmpty(v) {
  return typeof v === "string" ? v.trim() : "";
}

export default function LandlordAddEmergencyContactPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const tenantId = searchParams.get("tenantId") || "";
  const emergencyContactId = searchParams.get("emergencyContactId") || "";
  const returnTo = searchParams.get("returnTo") || "";

  const isEditMode = !!emergencyContactId;

  // ---------- shared simple form state (name/relation) ----------
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

  const [selectedExistingEmergencyContactId, setSelectedExistingEmergencyContactId] =
    useState("");
  const [isLinkingExisting, setIsLinkingExisting] = useState(false);
  const [touched, setTouched] = useState({ name: false, phone: false, email: false });

  // ------------------------------------------------------------
  // Load tenant + emergencyContacts list when tenantId is present
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
        const list = await emergencyContactsApi.listAll({
          token,
          includeArchived: false,
        });
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
    if (!emergencyContactId || !token) return;

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
  }, [emergencyContactId, token]);

  // Emergency contacts currently linked to this tenant via join table
  const emergencyContactLinks = Array.isArray(tenant?.emergencyContactLinks)
    ? tenant.emergencyContactLinks
    : [];

  const tenantEmergencyContacts = emergencyContactLinks
    .map((link) => link.emergencyContact)
    .filter(Boolean);

  // existing emergency contacts that are NOT already linked to this tenant
  const linkedIds = new Set(emergencyContactLinks.map((l) => l.emergencyContactId));

  const availableExistingEmergencyContacts =
    tenant && allEmergencyContacts.length > 0
      ? allEmergencyContacts.filter((e) => !linkedIds.has(e.id))
      : allEmergencyContacts;

  // ------------------------------------------------------------
  // Navigation helpers
  // ------------------------------------------------------------
  const goBackFromTenantContext = () => {
    if (returnTo) {
      navigate(returnTo);
    } else if (tenantId) {
      navigate(`/landlord/tenants/${tenantId}`);
    } else {
      navigate("/landlord/residents?tab=emergencyContacts");
    }
  };

  const handleCancel = () => {
    if (returnTo) return navigate(returnTo);
    if (tenantId) return goBackFromTenantContext();
    if (isEditMode) return navigate(`/landlord/emergencyContacts/${emergencyContactId}`);
    return navigate("/landlord/residents?tab=emergencyContacts");
  };

  const handleSubmitGlobal = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true });

    const cleanName = trimOrEmpty(name);
    const cleanEmail = normalizeEmail(email);
    const cleanPhone = normalizePhone(phone);

    if (!cleanName) return setFormError("Name is required.");
    if (cleanName.length < 2) return setFormError("Name must be at least 2 characters.");
    if (!/^[a-zA-Z\s.'-]+$/.test(cleanName)) return setFormError("Name contains invalid characters.");

    if (!cleanPhone || !isValidPhone(cleanPhone)) return setFormError("Valid phone number is required.");
    if (!cleanEmail || !isValidEmail(cleanEmail)) return setFormError("Valid email is required.");

    const cleanState = trimOrEmpty(state);
    const stateCode = cleanState ? normalizeState(cleanState) : "";
    if (cleanState && !stateCode) return setFormError("State must be a valid US state or DC.");

    const cleanPostal = trimOrEmpty(postalCode);
    const zipNormalized = cleanPostal ? normalizeZipUS(cleanPostal) : "";
    if (cleanPostal && !zipNormalized) return setFormError("Zip must be 12345 or 12345-6789.");

    const payload = {
      name: cleanName,
      phone: cleanPhone,
      email: cleanEmail,
      address1: trimOrEmpty(address1) || null,
      city: trimOrEmpty(city) || null,
      state: stateCode || null,
      postalCode: zipNormalized || null,
      relation: trimOrEmpty(relation) || null,
      notes: trimOrEmpty(notes) || null,
    };

    try {
      setSubmitting(true);
      setFormError("");

      let saved;
      if (isEditMode) {
        saved = await emergencyContactsApi.update(emergencyContactId, payload, { token });
      } else {
        saved = await emergencyContactsApi.create(payload, { token });
      }

      // After save: prefer returnTo, otherwise go to detail (edit) or list (create)
      if (returnTo) {
        navigate(returnTo);
      } else if (isEditMode) {
        navigate(`/landlord/emergencyContacts/${saved?.id || emergencyContactId}`);
      } else {
        navigate("/landlord/residents?tab=emergencyContacts");
      }
    } catch (err) {
      console.error("Failed to save emergency contact", err);
      setFormError("Failed to save emergency contact. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // TENANT-CONTEXT MODE: link existing + create & link new
  // ------------------------------------------------------------

  const handleLinkExisting = async () => {
    if (!tenantId || !selectedExistingEmergencyContactId) return;

    const emc = availableExistingEmergencyContacts.find(
      (e) => e.id === selectedExistingEmergencyContactId
    );
    const emcName = emc?.name || "this emergency contact";

    const ok = window.confirm(
      `Link ${emcName} to tenant "${tenant?.name || ""}"?\n\n` +
        "This will link the emergency contact to this tenant in your records."
    );
    if (!ok) return;

    try {
      setIsLinkingExisting(true);

      // New many-to-many link
      await tenantsApi.linkEmergencyContact(tenantId, selectedExistingEmergencyContactId, {
        token,
      });

      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to link existing emergency contact", err);
      alert("Failed to link emergency contact. Check console for details.");
    } finally {
      setIsLinkingExisting(false);
    }
  };

  const handleSubmitForTenant = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true });

    const cleanName = trimOrEmpty(name);
    const cleanEmail = normalizeEmail(email);
    const cleanPhone = normalizePhone(phone);

    if (!cleanName) return setFormError("Name is required.");
    if (!cleanPhone || !isValidPhone(cleanPhone)) return setFormError("Valid phone number is required.");
    if (!cleanEmail || !isValidEmail(cleanEmail)) return setFormError("Valid email is required.");

    const cleanState = trimOrEmpty(state);
    const stateCode = cleanState ? normalizeState(cleanState) : "";
    if (cleanState && !stateCode) return setFormError("State must be a valid US state or DC.");

    const cleanPostal = trimOrEmpty(postalCode);
    const zipNormalized = cleanPostal ? normalizeZipUS(cleanPostal) : "";
    if (cleanPostal && !zipNormalized) return setFormError("Zip must be 12345 or 12345-6789.");

    try {
      setSubmitting(true);
      setFormError("");

      const created = await emergencyContactsApi.create(
        {
          name: cleanName,
          phone: cleanPhone,
          email: cleanEmail,
          address1: trimOrEmpty(address1) || null,
          city: trimOrEmpty(city) || null,
          state: stateCode || null,
          postalCode: zipNormalized || null,
          relation: trimOrEmpty(relation) || null,
          notes: trimOrEmpty(notes) || null,
        },
        { token }
      );

      await tenantsApi.linkEmergencyContact(tenantId, created.id, { token });

      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to create emergency contact for tenant", err);
      setFormError("Failed to create emergency contact. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };
  
  const saveDisabled = isSubmitting;

  // ------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------

  // === Mode A: tenantId is present → tenant-context management page ===
  if (tenantId) {
    return (
      <div className={styles.page}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Manage emergency contacts</h1>
            {loadingTenant ? (
              <p className={styles.subtitle}>Loading tenant…</p>
            ) : tenantError || !tenant ? (
              <p className={styles.subtitle} style={{ color: "#b91c1c" }}>
                Failed to load tenant. You can still add emergency contacts, but
                linking may not behave as expected.
              </p>
            ) : (
              <p className={styles.subtitle}>
                Link existing emergency contacts or create new ones for{" "}
                <strong>{tenant.name}</strong>.
              </p>
            )}
          </div>
        </header>

        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Section 1: Link existing emergency contact */}
          <section
            style={{
              maxWidth: 520,
              padding: 16,
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: 16, marginBottom: 8 }}>Link existing emergency contact</h2>

            {loadingEmergencyContacts ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>
                Loading emergency contacts…
              </div>
            ) : emergencyContactsError ? (
              <div style={{ fontSize: 13, color: "#b91c1c" }}>
                Failed to load emergency contacts list.
              </div>
            ) : availableExistingEmergencyContacts.length === 0 ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>
                No other emergency contacts available to link.
              </div>
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
                    value={selectedExistingEmergencyContactId}
                    onChange={(e) =>
                      setSelectedExistingEmergencyContactId(e.target.value)
                    }
                    disabled={isLinkingExisting}
                  >
                    <option value="">Select an emergency contact…</option>
                    {availableExistingEmergencyContacts.map((e) => (
                      <option key={e.id} value={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className={styles.primaryButton}
                    style={{ whiteSpace: "nowrap" }}
                    onClick={handleLinkExisting}
                    disabled={!selectedExistingEmergencyContactId || isLinkingExisting}
                  >
                    {isLinkingExisting ? "Linking…" : "Link"}
                  </button>
                </div>

                {tenantEmergencyContacts.length > 0 && (
                  <div style={{ fontSize: 12, color: "#6b7280" }}>
                    Already linked to this tenant:
                    <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                      {tenantEmergencyContacts.map((e) => (
                        <li key={e.id}>
                          {e.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </section>

          {/* Section 2: Create & link new emergency contact */}
          <section
            style={{
              maxWidth: 520,
              padding: 16,
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: 16, marginBottom: 8 }}>
              Create new emergency contact for this tenant
            </h2>

            <form onSubmit={handleSubmitForTenant}>
              {/* Name */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Emergency contact name{" "}
                  <span style={{ color: "#b91c1c" }}>*</span>
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
                {touched.name && !trimOrEmpty(name) && (
                  <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>
                    Enter a name
                  </div>
                )}
              </div>

              {/* Phone */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Phone
                  <span style={{ color: "#b91c1c" }}>*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                  placeholder="Phone number (required) (123-123-1234)"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
                {touched.phone && trimOrEmpty(phone) && !isValidPhone(normalizePhone(phone)) && (
                  <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>
                    Enter a valid phone number (e.g. 303-555-1212 or +13035551212)
                  </div>
                )}
              </div>

              {/* Email */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Email
                  <span style={{ color: "#b91c1c" }}>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  placeholder="Email (required) (john.doe@example.com)"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
                {touched.email && trimOrEmpty(email) && !isValidEmail(normalizeEmail(email)) && (
                  <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>
                    Enter a valid email (e.g. john.doe@example.com)
                  </div>
                )}
              </div>

              {/* Address1 */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="address1"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Address1
                </label>
                <input
                  id="address1"
                  type="text"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  placeholder="Street address"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>


              {/* City */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="city"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>


              {/* State */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="state"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  State
                </label>
                <select
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                >
                  <option value="">— Select —</option>
                  {Array.from(US_STATES.entries()).map(([name, code]) => (
                    <option key={code} value={code}>
                      {name
                        .toLowerCase()
                        .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
                      ({code})
                    </option>
                  ))}
                </select>                
              </div>

              {/* PostalCode */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="postalCode"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  PostalCode
                </label>
                <input
                  id="postalCode"
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="Zip code"
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
                <label
                  htmlFor="relation"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
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


              {/* Notes */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="notes"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
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
                <div
                  style={{
                    color: "#b91c1c",
                    fontSize: 13,
                    marginBottom: 8,
                  }}
                >
                  {formError}
                </div>
              )}

              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button
                  type="submit"
                  className={styles.primaryButton}
                  disabled={saveDisabled}
                >
                  {isSubmitting ? "Saving…" : "Save emergency contact"}
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

  // === Mode B: NO tenantId → original global "add emergency contact" behavior ===
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>
            {isEditMode ? "Edit emergency contact" : "Add emergency contact"}
          </h1>
          <p className={styles.subtitle}>
            {isEditMode
                ? "Update this emergency contact record."
                : "Create an emergency contact record. You’ll be able to connect emergency contacts to leases (and tenants) later."}
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
            <label
              htmlFor="name"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Emergency contact name{" "}
              <span style={{ color: "#b91c1c" }}>*</span>
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
            {touched.name && !trimOrEmpty(name) && (
              <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>
                Enter a name
              </div>
            )}
          </div>

          {/* Phone */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="phone"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Phone
              <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
              placeholder="Phone number (required) (123-123-1234)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
            {touched.phone && trimOrEmpty(phone) && !isValidPhone(normalizePhone(phone)) && (
              <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>
                Enter a valid phone number (e.g. 303-555-1212 or +13035551212)
              </div>
            )}
          </div>

          {/* Email */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Email
              <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              placeholder="Email (required) (john.doe@example.com)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
            {touched.email && trimOrEmpty(email) && !isValidEmail(normalizeEmail(email)) && (
              <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>
                Enter a valid email (e.g. john.doe@example.com)
              </div>
            )}
          </div>

          {/* Address1 */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="address1"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Address1
            </label>
            <input
              id="address1"
              type="text"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              placeholder="Street address"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* City */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="city"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              City
            </label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* State */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="state"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              State
            </label>
            <select
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            >
              <option value="">— Select —</option>
              {Array.from(US_STATES.entries()).map(([name, code]) => (
                <option key={code} value={code}>
                  {name
                    .toLowerCase()
                    .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
                  ({code})
                </option>
              ))}
            </select>                
          </div>

          {/* PostalCode */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="postalCode"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              PostalCode
            </label>
            <input
              id="postalCode"
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Zip code"
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
            <label
              htmlFor="relation"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
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

          {/* Notes */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="notes"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
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
            <div style={{ color: "#b91c1c", fontSize: 13, marginBottom: 8 }}>
              {formError}
            </div>
          )}

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button
              type="submit"
              className={styles.primaryButton}
              disabled={saveDisabled}
            >
              {isSubmitting ? "Saving…" : isEditMode ? "Save changes" : "Save emergency contact"}
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
