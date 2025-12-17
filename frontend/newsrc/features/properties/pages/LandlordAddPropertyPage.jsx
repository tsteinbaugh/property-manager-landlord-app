// newsrc/features/properties/pages/LandlordAddPropertyPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { propertiesApi } from "@features/properties/api/properties.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";
import styles from "./LandlordPropertiesPage.module.css";

const US_STATES = new Map([
  ["ALABAMA", "AL"],
  ["ALASKA", "AK"],
  ["ARIZONA", "AZ"],
  ["ARKANSAS", "AR"],
  ["CALIFORNIA", "CA"],
  ["COLORADO", "CO"],
  ["CONNECTICUT", "CT"],
  ["DELAWARE", "DE"],
  ["FLORIDA", "FL"],
  ["GEORGIA", "GA"],
  ["HAWAII", "HI"],
  ["IDAHO", "ID"],
  ["ILLINOIS", "IL"],
  ["INDIANA", "IN"],
  ["IOWA", "IA"],
  ["KANSAS", "KS"],
  ["KENTUCKY", "KY"],
  ["LOUISIANA", "LA"],
  ["MAINE", "ME"],
  ["MARYLAND", "MD"],
  ["MASSACHUSETTS", "MA"],
  ["MICHIGAN", "MI"],
  ["MINNESOTA", "MN"],
  ["MISSISSIPPI", "MS"],
  ["MISSOURI", "MO"],
  ["MONTANA", "MT"],
  ["NEBRASKA", "NE"],
  ["NEVADA", "NV"],
  ["NEW HAMPSHIRE", "NH"],
  ["NEW JERSEY", "NJ"],
  ["NEW MEXICO", "NM"],
  ["NEW YORK", "NY"],
  ["NORTH CAROLINA", "NC"],
  ["NORTH DAKOTA", "ND"],
  ["OHIO", "OH"],
  ["OKLAHOMA", "OK"],
  ["OREGON", "OR"],
  ["PENNSYLVANIA", "PA"],
  ["RHODE ISLAND", "RI"],
  ["SOUTH CAROLINA", "SC"],
  ["SOUTH DAKOTA", "SD"],
  ["TENNESSEE", "TN"],
  ["TEXAS", "TX"],
  ["UTAH", "UT"],
  ["VERMONT", "VT"],
  ["VIRGINIA", "VA"],
  ["WASHINGTON", "WA"],
  ["WEST VIRGINIA", "WV"],
  ["WISCONSIN", "WI"],
  ["WYOMING", "WY"],
  ["DISTRICT OF COLUMBIA", "DC"],
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

function trimOrEmpty(v) {
  return typeof v === "string" ? v.trim() : "";
}

export default function LandlordAddPropertyPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const leaseId = searchParams.get("leaseId") || "";
  const forLease = searchParams.get("forLease") === "1";
  const inLeaseContext = !!leaseId && forLease;

  const propertyId = searchParams.get("propertyId") || "";
  const returnTo = searchParams.get("returnTo") || "";
  const isEditMode = !!propertyId;

  // ------------------------------------------------------------
  // Lease-context: list properties for linking
  // ------------------------------------------------------------
  const [properties, setProperties] = useState([]);
  const [loadingProps, setLoadingProps] = useState(false);
  const [propsError, setPropsError] = useState(null);
  const [selectedPropertyId, setSelectedPropertyId] = useState("");
  const [linkSaving, setLinkSaving] = useState(false);

  useEffect(() => {
    if (!inLeaseContext || !token) return;

    let cancelled = false;

    async function loadProps() {
      try {
        setLoadingProps(true);
        setPropsError(null);
        const list = await propertiesApi.list({ token });
        if (!cancelled) setProperties(Array.isArray(list) ? list : []);
      } catch (err) {
        console.error("Failed to load properties for lease context", err);
        if (!cancelled) setPropsError(err);
      } finally {
        if (!cancelled) setLoadingProps(false);
      }
    }

    loadProps();
    return () => {
      cancelled = true;
    };
  }, [inLeaseContext, token]);

  const handleLinkExisting = async (e) => {
    e.preventDefault();
    if (!inLeaseContext || !token) return;

    if (!selectedPropertyId) {
      alert("Select a property to link.");
      return;
    }

    try {
      setLinkSaving(true);
      await leasesApi.update(leaseId, { propertyId: selectedPropertyId }, { token });
      navigate(`/landlord/leases/${leaseId}`);
    } catch (err) {
      console.error("Failed to link property to lease", err);
      alert("Failed to link property. Check console for details.");
    } finally {
      setLinkSaving(false);
    }
  };

  // ------------------------------------------------------------
  // shared simple form state (name/address/city/state/zip/etc)
  // ------------------------------------------------------------
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [sqft, setSqft] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");

  const [notes, setNotes] = useState("");

  const [loadingProperty, setLoadingProperty] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const [touched, setTouched] = useState({
    name: false,
    address1: false,
    city: false,
    state: false,
    postalCode: false,
  });

  // ------------------------------------------------------------
  // Load property for EDIT mode
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    if (!isEditMode || !propertyId || !token) return;

    async function loadPropertyForEdit() {
      try {
        setLoadingProperty(true);
        setFormError("");

        const p = await propertiesApi.get(propertyId, { token });
        if (cancelled) return;

        if (!p) {
          setFormError("Property not found.");
          return;
        }

        setName(p.name || "");
        setAddress1(p.address1 || "");
        setCity(p.city || "");
        setState(p.state || "");
        setPostalCode(p.postalCode || "");

        // keep your existing pattern (same as occupants/pets)
        setBedrooms(p.bedrooms ?? null);
        setBathrooms(p.bathrooms ?? null);
        setSqft(p.sqft ?? null);
        setYearBuilt(p.yearBuilt ?? null);

        setNotes(p.notes || "");
      } catch (err) {
        console.error("Failed to load property for edit", err);
        if (!cancelled) setFormError("Failed to load property for editing.");
      } finally {
        if (!cancelled) setLoadingProperty(false);
      }
    }

    loadPropertyForEdit();
    return () => {
      cancelled = true;
    };
  }, [isEditMode, propertyId, token]);

  // ------------------------------------------------------------
  // Navigation helpers
  // ------------------------------------------------------------
  const goBack = () => {
    if (returnTo) return navigate(returnTo);
    if (inLeaseContext && leaseId) return navigate(`/landlord/leases/${leaseId}`);
    if (isEditMode) return navigate(`/landlord/properties/${propertyId}`);
    return navigate("/landlord/properties");
  };

  const handleCancel = () => goBack();

  // ------------------------------------------------------------
  // Submit
  // ------------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched((t) => ({
      ...t,
      name: true,
      address1: true,
      city: true,
      state: true,
      postalCode: true,
    }));

    if (!trimOrEmpty(name)) return setFormError("Name is required.");
    if (!trimOrEmpty(address1)) return setFormError("Address is required.");
    if (!trimOrEmpty(city)) return setFormError("City is required.");

    const stateCode = normalizeState(state);
    if (!stateCode) return setFormError("State must be a valid US state or DC.");

    const zipNormalized = normalizeZipUS(postalCode);
    if (!zipNormalized) return setFormError("Zip must be 12345 or 12345-6789.");

    const payload = {
      name: trimOrEmpty(name),
      address1: trimOrEmpty(address1),
      city: trimOrEmpty(city),
      state: stateCode || null,
      postalCode: zipNormalized || null,

      bedrooms: bedrooms ? Number(bedrooms) : null,
      bathrooms: bathrooms ? Number(bathrooms) : null,
      sqft: sqft ? Number(sqft) : null,
      yearBuilt: yearBuilt ? Number(yearBuilt) : null,

      notes: trimOrEmpty(notes) || null,
    };

    try {
      setSubmitting(true);
      setFormError("");

      let saved;
      if (isEditMode) {
        saved = await propertiesApi.update(propertyId, payload, { token });
      } else {
        // keep your existing naming convention; if your api uses create(), swap it
        saved = await propertiesApi.add(payload, { token });
      }

      if (inLeaseContext && saved?.id) {
        try {
          await leasesApi.update(leaseId, { propertyId: saved.id }, { token });
        } catch (err) {
          console.error("Property saved but failed to link to lease", err);
          alert("Property was saved, but linking it to the lease failed. You can link it later.");
        }
        navigate(`/landlord/leases/${leaseId}`);
        return;
      }

      if (returnTo) {
        navigate(returnTo);
      } else if (saved?.id) {
        navigate(`/landlord/properties/${saved.id}`);
      } else {
        navigate("/landlord/properties");
      }
    } catch (err) {
      console.error("Failed to save property", err);
      setFormError("Failed to save property. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>
            {inLeaseContext
              ? "Add or link property for lease"
              : isEditMode
                ? "Edit property"
                : "Add property"}
          </h1>
          <p className={styles.subtitle}>
            {inLeaseContext
              ? "Link an existing property to this lease or create a new property that will be automatically linked."
              : isEditMode
                ? "Update this property record."
                : "Create a new rental property. You can add tenants, leases, and financials later."}
          </p>
        </div>
      </header>

      {inLeaseContext && (
        <section
          style={{
            marginTop: 12,
            marginBottom: 16,
            padding: 16,
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            background: "#ffffff",
            maxWidth: 520,
          }}
        >
          <h2 style={{ fontSize: 16, marginBottom: 8 }}>
            Link existing property
          </h2>

          {loadingProps ? (
            <div style={{ fontSize: 13, color: "#6b7280" }}>Loading properties…</div>
          ) : propsError ? (
            <div style={{ fontSize: 13, color: "#b91c1c" }}>
              Failed to load properties.
            </div>
          ) : properties.length === 0 ? (
            <div style={{ fontSize: 13, color: "#6b7280" }}>
              You don&apos;t have any properties yet. Create one below and it will be linked.
            </div>
          ) : (
            <form onSubmit={handleLinkExisting}>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <select
                  style={{
                    flex: 1,
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  value={selectedPropertyId}
                  onChange={(e) => setSelectedPropertyId(e.target.value)}
                  disabled={linkSaving}
                >
                  <option value="">Choose a property…</option>
                  {properties.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name || p.address1 || p.address || p.id}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className={styles.primaryButton}
                  style={{ whiteSpace: "nowrap" }}
                  disabled={linkSaving || !selectedPropertyId}
                >
                  {linkSaving ? "Linking…" : "Link"}
                </button>
              </div>
            </form>
          )}
        </section>
      )}

      <section
        style={{
          maxWidth: 520,
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          marginTop: 12,
        }}
      >
        <h2 style={{ fontSize: 16, marginBottom: 8 }}>
          {isEditMode ? "Edit property details" : "Create new property"}
        </h2>

        {loadingProperty && (
          <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 8 }}>
            Loading property…
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="name"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Property name <span style={{ color: "#b91c1c" }}>*</span>
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
                Enter a property name
              </div>
            )}
          </div>

          {/* Address */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="address1"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Address <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <input
              id="address1"
              type="text"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, address1: true }))}
              placeholder="Address (required)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
            {touched.address1 && !trimOrEmpty(address1) && (
              <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>
                Enter an address
              </div>
            )}
          </div>

          {/* City */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="city"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              City <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, city: true }))}
              placeholder="City (required)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
            {touched.city && !trimOrEmpty(city) && (
              <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>
                Enter a city
              </div>
            )}
          </div>

          {/* State */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="state"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              State <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <select
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, state: true }))}
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
                  {name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())} ({code})
                </option>
              ))}
            </select>
            {touched.state && !normalizeState(state) && (
              <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>
                Select a valid state
              </div>
            )}
          </div>

          {/* Zip */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="postalCode"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Zip <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <input
              id="postalCode"
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, postalCode: true }))}
              placeholder="12345 or 12345-6789"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
            {touched.postalCode && !normalizeZipUS(postalCode) && (
              <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>
                Enter a valid zip
              </div>
            )}
          </div>

          {/* Bedrooms */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="bedrooms"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Bedrooms
            </label>
            <input
              id="bedrooms"
              type="number"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              placeholder="Bedrooms"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Bathrooms */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="bathrooms"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Bathrooms
            </label>
            <input
              id="bathrooms"
              type="number"
              step="0.5"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              placeholder="Bathrooms"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Sqft */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="sqft"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              House Size
            </label>
            <input
              id="sqft"
              type="number"
              value={sqft}
              onChange={(e) => setSqft(e.target.value)}
              placeholder="Square feet"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* YearBuilt */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="yearBuilt"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Year built
            </label>
            <input
              id="yearBuilt"
              type="number"
              value={yearBuilt}
              onChange={(e) => setYearBuilt(e.target.value)}
              placeholder="Year built"
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
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Notes
            </label>
            <input
              id="notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Optional notes"
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
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving…" : isEditMode ? "Save changes" : "Save property"}
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
  );
}
