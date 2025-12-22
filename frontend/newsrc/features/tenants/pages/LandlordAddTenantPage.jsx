// frontend/newsrc/features/residents/pages/tenants/LandlordAddTenantPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";
import styles from "@shared/styles/LandlordPage.module.css";

const LEASE_DRAFT_KEY = "leaseDraft";
const LEASE_DRAFT_RETURN_KEY = "leaseDraftReturnTo";

function trimOrEmpty(v) {
  return typeof v === "string" ? v.trim() : "";
}

function normalizeEmail(v) {
  const s = trimOrEmpty(v);
  return s ? s.toLowerCase() : "";
}

function normalizePhone(v) {
  const raw = trimOrEmpty(v);
  if (!raw) return "";
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
  return digits;
}

// If you already have these elsewhere, keep yours.
// Keeping minimal safe versions here so the page doesn’t crash.
function isValidEmail(v) {
  const s = trimOrEmpty(v);
  if (!s) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
function isValidPhone(v) {
  const s = trimOrEmpty(v);
  if (!s) return true;
  // 10 digits (US) after normalization
  return /^\d{10}$/.test(s);
}

const SEX_OPTIONS = [
  { value: "", label: "— Select —" },
  { value: "MALE", label: "Male" },
  { value: "FEMALE", label: "Female" },
  { value: "OTHER", label: "Other" },
  { value: "UNKNOWN", label: "Unknown" },
];

const HAIRCOLOR_OPTIONS = [
  { value: "", label: "— Select —" },
  { value: "BLACK", label: "Black"},
  { value: "BROWN", label: "Brown"},
  { value: "BLONDE", label: "Blonde"},
  { value: "RED", label: "Red"},
  { value: "GRAY", label: "Gray"},
  { value: "WHITE", label: "White"},
  { value: "DYED", label: "Dyed"},
  { value: "BALD", label: "Bald"},
  { value: "OTHER", label: "Other"},
  { value: "UNKNOWN", label: "Unknown"},
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

export default function LandlordAddTenantPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { token } = useUser() || {};

  const forLease = searchParams.get("forLease") === "1";
  const leaseId = searchParams.get("leaseId") || "";

  const occupantId = searchParams.get("occupantId") || "";
  const petId = searchParams.get("petId") || "";
  const emergencyContactId = searchParams.get("emergencyContactId") || "";
  const vehicleId = searchParams.get("vehicleId") || "";

  const tenantId = searchParams.get("tenantId") || ""; // <-- EDIT MODE
  const isEditMode = !!tenantId;

  const returnTo = searchParams.get("returnTo") || ""; // <-- IMPORTANT for cancel/back

  const inLeaseContext = forLease && !!leaseId;
  const inOccupantContext = !!occupantId && !inLeaseContext;
  const inPetContext = !!petId && !inLeaseContext;
  const inEmergencyContactContext = !!emergencyContactId && !inLeaseContext;
  const inVehicleContext = !!vehicleId && !inLeaseContext;

  const inAnyLinkContext =
    inLeaseContext ||
    inOccupantContext ||
    inPetContext ||
    inEmergencyContactContext ||
    inVehicleContext;

  // ------------------------------------------------------------
  // Form state
  // ------------------------------------------------------------
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [age, setAge] = useState(null);
  const [heightFeet, setHeightFeet] = useState(null);
  const [heightInches, setHeightInches] = useState(null);
  const [weight, setWeight] = useState(null);

  const [sex, setSex] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [bodyBuild, setBodyBuild] = useState("");

  const [markings, setMarkings] = useState("");

  const [occupation, setOccupation] = useState("");
  const [employer, setEmployer] = useState("");
  const [income, setIncome] = useState(null);
  const [creditScore, setCreditScore] = useState(null);

  const [notes, setNotes] = useState("");
  const [violations, setViolations] = useState("");

  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [touched, setTouched] = useState({ name: false, phone: false, email: false });

  // ------------------------------------------------------------
  // Edit mode: load tenant
  // ------------------------------------------------------------
  useEffect(() => {
    if (!isEditMode || !token) return;

    let cancelled = false;

    async function load() {
      try {
        const t = await tenantsApi.detail(tenantId, { token });
        if (cancelled) return;

        setName(t?.name || "");
        setPhone(t?.phone || "");
        setEmail(t?.email || "");

        setAge(t?.age ?? null);
        setHeightFeet(t?.heightFeet ?? null);
        setHeightInches(t?.heightInches ?? null);
        setWeight(t?.weight ?? null);

        setSex(t?.sex || "UNKNOWN");
        setHairColor(t?.hairColor || "UNKNOWN");
        setEyeColor(t?.eyeColor || "UNKNOWN");
        setBodyBuild(t?.bodyBuild || "UNKNOWN");

        setMarkings(t?.markings || "");

        setOccupation(t?.occupation || "");
        setEmployer(t?.employer || "");
        setIncome(t?.income ?? null);
        setCreditScore(t?.creditScore ?? null);

        setNotes(t?.notes || "");
        setViolations(t?.violations || "");
      } catch (err) {
        console.error("Failed to load tenant for edit", err);
        setFormError("Failed to load tenant. Check console for details.");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [isEditMode, tenantId, token]);

  // ------------------------------------------------------------
  // Link existing tenant (context-only)
  // ------------------------------------------------------------
  const [tenants, setTenants] = useState([]);
  const [tenantsLoading, setTenantsLoading] = useState(false);
  const [tenantsError, setTenantsError] = useState(null);
  const [selectedTenantId, setSelectedTenantId] = useState("");
  const [linkSaving, setLinkSaving] = useState(false);

  useEffect(() => {
    if (!inAnyLinkContext || !token) return;

    let cancelled = false;

    async function loadTenants() {
      try {
        setTenantsLoading(true);
        setTenantsError(null);
        const list = await tenantsApi.list({ token });
        if (!cancelled) setTenants(Array.isArray(list) ? list : []);
      } catch (err) {
        console.error("Failed to load tenants for context", err);
        if (!cancelled) setTenantsError(err);
      } finally {
        if (!cancelled) setTenantsLoading(false);
      }
    }

    loadTenants();
    return () => {
      cancelled = true;
    };
  }, [inAnyLinkContext, token]);

  // ------------------------------------------------------------
  // Back/cancel
  // ------------------------------------------------------------
  const goBack = () => {
    // 1) Always honor returnTo if provided (THIS fixes your bug)
    if (returnTo) return navigate(decodeURIComponent(returnTo));

    // 2) Lease context
    if (inLeaseContext) return navigate(`/landlord/leases/${leaseId}`);

    // 3) Draft-for-lease mode (no leaseId)
    if (forLease && !leaseId) {
      const draftReturn =
        sessionStorage.getItem(LEASE_DRAFT_RETURN_KEY) || "/landlord/leases/new";
      return navigate(draftReturn);
    }

    // 4) Other contexts
    if (inOccupantContext) return navigate(`/landlord/occupants/${occupantId}`);
    if (inPetContext) return navigate(`/landlord/pets/${petId}`);
    if (inEmergencyContactContext) return navigate(`/landlord/emergencyContacts/${emergencyContactId}`);
    if (inVehicleContext) return navigate(`/landlord/vehicles/${vehicleId}`);

    return navigate("/landlord/residents?tab=tenants");
  };

  const handleCancel = () => goBack();

  const handleLinkExisting = async () => {
    if (!token || !selectedTenantId) {
      alert("Select a tenant to link.");
      return;
    }

    try {
      setLinkSaving(true);

      if (inLeaseContext) {
        await leasesApi.linkTenant(leaseId, selectedTenantId, { token });
        navigate(`/landlord/leases/${leaseId}`);
        return;
      }

      if (inOccupantContext) {
        await tenantsApi.linkOccupant(selectedTenantId, occupantId, { token });
        goBack();
        return;
      }

      if (inPetContext) {
        await tenantsApi.linkPet(selectedTenantId, petId, { token });
        goBack();
        return;
      }

      if (inEmergencyContactContext) {
        await tenantsApi.linkEmergencyContact(selectedTenantId, emergencyContactId, { token });
        goBack();
        return;
      }

      if (inVehicleContext) {
        await tenantsApi.linkVehicle(selectedTenantId, vehicleId, { token });
        goBack();
        return;
      }

      console.warn("handleLinkExisting called without a valid context");
    } catch (err) {
      console.error("Failed to link tenant", err);
      alert("Failed to link tenant. Check console for details.");
    } finally {
      setLinkSaving(false);
    }
  };

  const buildPayload = () => ({
    name: trimOrEmpty(name),
    phone: normalizePhone(phone) || null,
    email: normalizeEmail(email) || null,

    age: age ? Number(age) : null,
    heightFeet: heightFeet ? Number(heightFeet) : null,
    heightInches: heightInches ? Number(heightInches) : null,
    weight: weight ? Number(weight) : null,

    sex: sex || null,
    hairColor: hairColor || null,
    eyeColor: eyeColor || null,
    bodyBuild: bodyBuild || null,

    markings: trimOrEmpty(markings) || null,

    occupation: trimOrEmpty(occupation) || null,
    employer: trimOrEmpty(employer) || null,
    income: income ? Number(income) : null,
    creditScore: creditScore ? Number(creditScore) : null,

    notes: trimOrEmpty(notes) || null,
    violations: trimOrEmpty(violations) || null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched((t) => ({ ...t, name: true, phone: true, email: true }));

    if (!trimOrEmpty(name)) return setFormError("Name is required.");

    // if you truly want phone/email required, enforce here
    // (keeping consistent w/ your UI showing * required)
    if (!trimOrEmpty(phone)) return setFormError("Phone is required.");
    if (!trimOrEmpty(email)) return setFormError("Email is required.");

    if (!isValidPhone(normalizePhone(phone))) return setFormError("Enter a valid phone number.");
    if (!isValidEmail(normalizeEmail(email))) return setFormError("Enter a valid email.");

    if (!token) {
      alert("Missing auth token.");
      return;
    }

    const payload = buildPayload();

    // EDIT MODE (no linking side effects)
    if (isEditMode) {
      try {
        setSubmitting(true);
        setFormError("");
        await tenantsApi.update(tenantId, payload, { token });
        goBack();
      } catch (err) {
        console.error("Failed to update tenant", err);
        setFormError("Failed to update tenant. Check console for details.");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // 1) Lease context: create tenant and link to lease
    if (inLeaseContext) {
      try {
        setSubmitting(true);
        setFormError("");

        const created = await tenantsApi.create(payload, { token });

        if (created?.id) {
          try {
            await leasesApi.linkTenant(leaseId, created.id, { token });
          } catch (err) {
            console.error("Tenant created but failed to link to lease", err);
            alert("Tenant was created, but linking it to the lease failed. You can link it later.");
          }
        }

        navigate(`/landlord/leases/${leaseId}`);
      } catch (err) {
        console.error("Failed to create tenant in lease context", err);
        setFormError("Failed to create tenant. Check console for details.");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // 2) Draft-for-lease mode (no leaseId)
    if (forLease && !leaseId) {
      try {
        setSubmitting(true);
        setFormError("");

        const raw = sessionStorage.getItem(LEASE_DRAFT_KEY);
        const draft = raw ? JSON.parse(raw) : {};

        const nextDraftTenants = Array.isArray(draft.draftNewTenants)
          ? [...draft.draftNewTenants]
          : [];

        nextDraftTenants.push({
          name: payload.name?.trim() || "New tenant",
          email: payload.email?.trim() || "",
          phone: payload.phone?.trim() || "",
        });

        sessionStorage.setItem(
          LEASE_DRAFT_KEY,
          JSON.stringify({ ...draft, draftNewTenants: nextDraftTenants })
        );

        const draftReturn =
          sessionStorage.getItem(LEASE_DRAFT_RETURN_KEY) || "/landlord/leases/new";

        navigate(draftReturn);
      } catch (err) {
        console.error("Failed to stage tenant for lease draft", err);
        setFormError("Failed to stage tenant for lease. Check console for details.");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // 3) Context modes: create tenant + link
    if (inOccupantContext || inPetContext || inEmergencyContactContext || inVehicleContext) {
      try {
        setSubmitting(true);
        setFormError("");

        const created = await tenantsApi.create(payload, { token });

        if (created?.id) {
          try {
            if (inOccupantContext) {
              await tenantsApi.linkOccupant(created.id, occupantId, { token });
            } else if (inPetContext) {
              await tenantsApi.linkPet(created.id, petId, { token });
            } else if (inEmergencyContactContext) {
              await tenantsApi.linkEmergencyContact(created.id, emergencyContactId, { token });
            } else if (inVehicleContext) {
              await tenantsApi.linkVehicle(created.id, vehicleId, { token });
            }
          } catch (err) {
            console.error("Tenant created but failed to link in context", err);
            alert("Tenant was created, but linking failed. You can link it later.");
          }
        }

        goBack();
      } catch (err) {
        console.error("Failed to create tenant in context", err);
        setFormError("Failed to create tenant. Check console for details.");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // 4) Normal behavior
    try {
      setSubmitting(true);
      setFormError("");
      await tenantsApi.create(payload, { token });
      navigate("/landlord/residents?tab=tenants");
    } catch (err) {
      console.error("Failed to create tenant", err);
      setFormError("Failed to create tenant. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  const heading = isEditMode
    ? "Edit tenant"
    : inLeaseContext
      ? "Add or link tenant for lease"
      : inOccupantContext
        ? "Add or link tenant for occupant"
        : inPetContext
          ? "Add or link tenant for pet"
          : inEmergencyContactContext
            ? "Add or link tenant for emergency contact"
            : inVehicleContext
              ? "Add or link tenant for vehicle"
              : forLease && !leaseId
                ? "Add tenant for lease draft"
                : "Add tenant";

  const subtitle = isEditMode
    ? "Update this tenant’s information."
    : inLeaseContext
      ? "Link an existing tenant to this lease or create a new tenant that will be automatically linked."
      : inOccupantContext
        ? "Link an existing tenant to this occupant or create a new tenant that will be automatically linked."
        : inPetContext
          ? "Link an existing tenant to this pet or create a new tenant that will be automatically linked."
          : inEmergencyContactContext
            ? "Link an existing tenant to this emergency contact or create a new tenant that will be automatically linked."
            : inVehicleContext
              ? "Link an existing tenant to this vehicle or create a new tenant that will be automatically linked."
              : forLease && !leaseId
                ? "Add a tenant to your lease draft."
                : "Create a tenant profile. You can add occupants, pets, emergency contacts and vehicles after this.";

  const showLinkExisting = inAnyLinkContext && !isEditMode;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>{heading}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </header>

      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Section 1: Link existing tenant (context only, not edit mode) */}
        {showLinkExisting && (
          <section
            style={{
              maxWidth: 520,
              padding: 16,
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: 16, marginBottom: 8 }}>Link existing tenant</h2>

            {tenantsLoading ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>Loading tenants…</div>
            ) : tenantsError ? (
              <div style={{ fontSize: 13, color: "#b91c1c" }}>Failed to load tenants.</div>
            ) : tenants.length === 0 ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>
                You don&apos;t have any tenants yet. Create one below.
              </div>
            ) : (
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <select
                  style={{
                    flex: 1,
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  value={selectedTenantId}
                  onChange={(e) => setSelectedTenantId(e.target.value)}
                  disabled={linkSaving}
                >
                  <option value="">Choose a tenant…</option>
                  {tenants.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} {t.email ? `(${t.email})` : ""}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  className={styles.primaryButton}
                  style={{ whiteSpace: "nowrap" }}
                  onClick={handleLinkExisting}
                  disabled={!selectedTenantId || linkSaving}
                >
                  {linkSaving ? "Linking…" : "Link"}
                </button>
              </div>
            )}
          </section>
        )}

        {/* Section 2: Create / Edit tenant */}
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
            {isEditMode ? "Save changes" : "Create new tenant"}
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="name" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Tenant name <span style={{ color: "#b91c1c" }}>*</span>
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
                  Enter tenant name
                </div>
              )}
            </div>

            {/* Phone */}
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="phone" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Phone <span style={{ color: "#b91c1c" }}>*</span>
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
                  Enter a valid phone number (e.g. 303-555-1212)
                </div>
              )}
            </div>

            {/* Email */}
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="email" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Email <span style={{ color: "#b91c1c" }}>*</span>
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

            {/* Age */}
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="age" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Age
              </label>
              <input
                id="age"
                type="number"
                value={age ?? ""}
                onChange={(o) => setAge(o.target.value)}
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
              <label style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Height
              </label>
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  id="heightFeet"
                  type="number"
                  value={heightFeet ?? ""}
                  onChange={(e) => setHeightFeet(e.target.value)}
                  placeholder="Feet"
                  style={{ flex: 1, padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                  disabled={isSubmitting}
                />
                <input
                  id="heightInches"
                  type="number"
                  value={heightInches ?? ""}
                  onChange={(e) => setHeightInches(e.target.value)}
                  placeholder="Inches"
                  style={{ flex: 1, padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
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
                value={weight ?? ""}
                onChange={(o) => setWeight(o.target.value)}
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
              <label
                htmlFor="sex"
                style={{
                  display: "block",
                  fontWeight: 500,
                  marginBottom: 4,
                }}
              >
                Sex
              </label>
              <select
                id="sex"
                value={sex}
                onChange={(o) => setSex(o.target.value)}
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
                onChange={(o) => setHairColor(o.target.value)}
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
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
                onChange={(o) => setEyeColor(o.target.value)}
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
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
                onChange={(o) => setBodyBuild(o.target.value)}
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
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
                placeholder="Identifying markings (tattoos, scars, etc.)"
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                disabled={isSubmitting}
              />
            </div>

            {/* Occupation */}
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="occupation" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Occupation
              </label>
              <input
                id="occupation"
                type="text"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                placeholder="Occupation"
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                disabled={isSubmitting}
              />
            </div>

            {/* Employer */}
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="employer" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Employer
              </label>
              <input
                id="employer"
                type="text"
                value={employer}
                onChange={(e) => setEmployer(e.target.value)}
                placeholder="Employer"
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                disabled={isSubmitting}
              />
            </div>

            {/* Income */}
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="income" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Income
              </label>
              <input
                id="income"
                type="number"
                value={income ?? ""}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="Monthly income"
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                disabled={isSubmitting}
              />
            </div>

            {/* Credit Score */}
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="creditScore" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Credit score
              </label>
              <input
                id="creditScore"
                type="number"
                value={creditScore ?? ""}
                onChange={(e) => setCreditScore(e.target.value)}
                placeholder="Score"
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
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
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                disabled={isSubmitting}
              />
            </div>

            {/* Violations */}
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="violations" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                Violations
              </label>
              <input
                id="violations"
                type="text"
                value={violations}
                onChange={(e) => setViolations(e.target.value)}
                placeholder="Record any violations"
                style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                disabled={isSubmitting}
              />
            </div>

            {formError && (
              <div style={{ color: "#b91c1c", fontSize: 13, marginBottom: 8 }}>
                {formError}
              </div>
            )}

            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <button type="submit" className={styles.primaryButton} disabled={isSubmitting}>
                {isSubmitting ? "Saving…" : (isEditMode ? "Save changes" : "Save tenant")}
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
