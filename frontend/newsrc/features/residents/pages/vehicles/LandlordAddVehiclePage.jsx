// newsrc/features/tenants/pages/LandlordAddVehiclePage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import styles from "@shared/styles/LandlordPage.module.css";
import { vehiclesApi } from "@features/residents/api/vehicles.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";

import {
  INVALID,
  optionalTrimToNull,
  normalizeState,
  parseIntOrNullOpt,
  US_STATE_NAME_TO_CODE,
  optionsFromEnumMap,
  formatEnumLabel,
  VEHICLE_TYPE,
  parseEnumOrNullOpt,
  validateObject,
  requiredTrimmedString,
} from "@shared/utils/validation.js";

export default function LandlordAddVehiclePage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const tenantId = searchParams.get("tenantId") || "";
  const vehicleId = searchParams.get("vehicleId") || "";
  const returnTo = searchParams.get("returnTo") || "";

  const isEditMode = !!vehicleId;

  // ---------- shared simple form state (make/model/year/color/state/plate/permit) ----------
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [state, setState] = useState("");
  const [plate, setPlate] = useState("");
  const [permit, setPermit] = useState("");
  const [parking, setParking] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleSubType, setVehicleSubType] = useState("");

  const [notes, setNotes] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // ---------- tenant-context-only state ----------
  const [tenant, setTenant] = useState(null);
  const [loadingTenant, setLoadingTenant] = useState(!!tenantId);
  const [tenantError, setTenantError] = useState(null);

  const [allVehicles, setAllVehicles] = useState([]);
  const [loadingVehicles, setLoadingVehicles] = useState(!!tenantId);
  const [vehiclesError, setVehiclesError] = useState(null);

  const [selectedExistingVehicleId, setSelectedExistingVehicleId] = useState("");
  const [isLinkingExisting, setIsLinkingExisting] = useState(false);
  const [touched, setTouched] = useState({ make: false, model: false, year: false, vehicleType: false });

  // ------------------ UI dropdown options ------------------
  const vehicleTypeOptions = useMemo(
    () =>
      optionsFromEnumMap(VEHICLE_TYPE, {
        sortBy: "key",
        toOption: (name, code) => ({
          value: code,
          label: `${formatEnumLabel(name, { hideUnknown: false })}`,
        }),
      }),
    []
  ); 

  // ------------------------------------------------------------
  // State dropdown list
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
  // Load tenant + vehicles list when tenantId is present
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
        console.error("Failed to load tenant for AddVehiclePage", err);
        if (!cancelled) setTenantError(err);
      } finally {
        if (!cancelled) setLoadingTenant(false);
      }
    }

    async function loadVehicles() {
      try {
        setLoadingVehicles(true);
        setVehiclesError(null);
        const list = await vehiclesApi.listAll({
          token,
          includeArchived: false,
        });
        if (!cancelled) setAllVehicles(Array.isArray(list) ? list : []);
      } catch (err) {
        console.error("Failed to load vehicles for AddVehiclePage", err);
        if (!cancelled) setVehiclesError(err);
      } finally {
        if (!cancelled) setLoadingVehicles(false);
      }
    }

    loadTenant();
    loadVehicles();

    return () => {
      cancelled = true;
    };
  }, [tenantId, token]);

  // ------------------------------------------------------------
  // Load vehicle for EDIT mode (global or tenant context)
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    if (!vehicleId || !token) return;

    async function loadVehicleForEdit() {
      try {
        setFormError("");
        const v = await vehiclesApi.get(vehicleId, { token });
        if (cancelled) return;

        if (!v) {
          setFormError("Vehicle not found.");
          return;
        }

        setMake(v.make || "");
        setModel(v.model || "");
        setYear(v.year == null ? "" : String(v.year));
        setColor(v.color || "");
        setState(v.state || "");
        setPlate(v.plate || "");
        setPermit(v.permit || "");
        setParking(v.parking || "");
        setVehicleType(v.vehicleType || "");
        setVehicleSubType(v.vehicleSubType || "");
        setNotes(v.notes || "");
      } catch (err) {
        console.error("Failed to load vehicle for edit", err);
        if (!cancelled) setFormError("Failed to load vehicle for editing.");
      }
    }

    loadVehicleForEdit();
    return () => {
      cancelled = true;
    };
  }, [vehicleId, token]);

  // Vehicles currently linked to this tenant via join table
  const vehicleLinks = Array.isArray(tenant?.vehicleLinks) ? tenant.vehicleLinks : [];

  const tenantVehicles = vehicleLinks.map((link) => link.vehicle).filter(Boolean);

  // existing vehicles that are NOT already linked to this tenant
  const linkedIds = new Set(vehicleLinks.map((l) => l.vehicleId));

  const availableExistingVehicles =
    tenant && allVehicles.length > 0
      ? allVehicles.filter((e) => !linkedIds.has(e.id))
      : allVehicles;

  // ------------------------------------------------------------
  // Navigation helpers
  // ------------------------------------------------------------
  const goBackFromTenantContext = () => {
    if (returnTo) {
      navigate(returnTo);
    } else if (tenantId) {
      navigate(`/landlord/tenants/${tenantId}`);
    } else {
      navigate("/landlord/residents?tab=vehicles");
    }
  };

  const handleCancel = () => {
    if (returnTo) return navigate(returnTo);
    if (tenantId) return goBackFromTenantContext();
    if (isEditMode) return navigate(`/landlord/vehicles/${vehicleId}`);
    return navigate("/landlord/residents?tab=vehicles");
  };

  // ------------------------------------------------------------
  // Shared payload builder (uses validation.js)
  // ------------------------------------------------------------
  const buildPayload = () => {
    const input = {
      make,
      model,
      year,
      color,
      state,
      plate,
      permit,
      parking,
      vehicleType,
      vehicleSubType,
      notes,
    };
    
    const schema = {
      make: requiredTrimmedString,
      model: requiredTrimmedString,
      year: (v) => parseIntOrNullOpt(v, { min: 1886, max: 2100 }),
      color: optionalTrimToNull,
      state: (v) => normalizeState(v),
      plate: optionalTrimToNull,
      permit: optionalTrimToNull,
      parking: optionalTrimToNull,
      vehicleType: (v) => parseEnumOrNullOpt(v, VEHICLE_TYPE),
      vehicleSubType: optionalTrimToNull,
      notes: optionalTrimToNull,
    };
    
    return validateObject(input, schema, {
      errorMessages: {
        make: "Make is required.",
        model: "Model is required.",
        year: "Year must be a whole number.",
        state: "State must be a valid US state or DC.",
        vehicleType: "Vehicle type is invalid.",
      },
    });
  };

  const handleSubmitGlobal = async (e) => {
    e.preventDefault();
    setTouched({ make: true, model: true, year: true, vehicleType: true });
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
        saved = await vehiclesApi.update(vehicleId, payload, { token });
      } else {
        saved = await vehiclesApi.create(payload, { token });
      }

      // After save: prefer returnTo, otherwise go to detail (edit) or list (create)
      if (returnTo) {
        navigate(returnTo);
      } else if (isEditMode) {
        navigate(`/landlord/vehicles/${saved?.id || vehicleId}`);
      } else {
        navigate("/landlord/residents?tab=vehicles");
      }
    } catch (err) {
      console.error("Failed to create vehicle", err);
      setFormError("Failed to create vehicle. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // TENANT-CONTEXT MODE: link existing + create & link new
  // ------------------------------------------------------------
  const handleLinkExisting = async () => {
    if (!tenantId || !selectedExistingVehicleId) return;

    const veh = availableExistingVehicles.find((v) => v.id === selectedExistingVehicleId);
    const vehName = veh?.plate || "this vehicle";

    const ok = window.confirm(
      `Link ${vehName} to tenant "${tenant?.name || ""}"?\n\n` +
        "This will link the vehicle to this tenant in your records."
    );
    if (!ok) return;

    try {
      setIsLinkingExisting(true);

      await tenantsApi.linkVehicle(tenantId, selectedExistingVehicleId, { token });

      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to link existing vehicle", err);
      alert("Failed to link vehicle. Check console for details.");
    } finally {
      setIsLinkingExisting(false);
    }
  };

  const handleSubmitForTenant = async (e) => {
    e.preventDefault();
    setTouched({ make: true, model: true, year: true, vehicleType: true });

    const built = buildPayload();
    if (built.error) return setFormError(built.error);

    try {
      setSubmitting(true);
      setFormError("");

      const created = await vehiclesApi.create(built.payload, { token });

      await tenantsApi.linkVehicle(tenantId, created.id, { token });

      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to create vehicle for tenant", err);
      setFormError("Failed to create vehicle. Check console for details.");
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
            <h1 className={styles.title}>Manage vehicles</h1>
            {loadingTenant ? (
              <p className={styles.subtitle}>Loading tenant…</p>
            ) : tenantError || !tenant ? (
              <p className={styles.subtitle} style={{ color: "#b91c1c" }}>
                Failed to load tenant. You can still add vehicles, but linking may not behave as expected.
              </p>
            ) : (
              <p className={styles.subtitle}>
                Link existing vehicles or create new ones for <strong>{tenant.name}</strong>.
              </p>
            )}
          </div>
        </header>

        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Section 1: Link existing vehicle */}
          <section
            style={{
              maxWidth: 520,
              padding: 16,
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: 16, marginBottom: 8 }}>Link existing vehicle</h2>

            {loadingVehicles ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>Loading vehicles…</div>
            ) : vehiclesError ? (
              <div style={{ fontSize: 13, color: "#b91c1c" }}>Failed to load vehicles list.</div>
            ) : availableExistingVehicles.length === 0 ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>No other vehicles available to link.</div>
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
                    value={selectedExistingVehicleId}
                    onChange={(e) => setSelectedExistingVehicleId(e.target.value)}
                    disabled={isLinkingExisting}
                  >
                    <option value="">Select a vehicle…</option>
                    {availableExistingVehicles.map((v) => (
                      <option key={v.id} value={v.id}>
                        {[v.year, v.make, v.model].filter(Boolean).join(" ") || "Vehicle"}{" "}
                        {v.plate ? `• ${v.plate}` : ""}
                        {v.state ? ` (${v.state})` : ""}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    className={styles.primaryButton}
                    style={{ whiteSpace: "nowrap" }}
                    onClick={handleLinkExisting}
                    disabled={!selectedExistingVehicleId || isLinkingExisting}
                  >
                    {isLinkingExisting ? "Linking…" : "Link"}
                  </button>
                </div>

                {tenantVehicles.length > 0 && (
                  <div style={{ fontSize: 12, color: "#6b7280" }}>
                    Already linked to this tenant:
                    <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                      {tenantVehicles.map((v) => (
                        <li key={v.id}>
                          {[v.year, v.make, v.model].filter(Boolean).join(" ") || "Vehicle"}{" "}
                          {v.plate ? `• ${v.plate}` : ""}
                          {v.state ? ` (${v.state})` : ""}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </section>

          {/* Section 2: Create & link new vehicle */}
          <section
            style={{
              maxWidth: 520,
              padding: 16,
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: 16, marginBottom: 8 }}>Create new vehicle for this tenant</h2>

            <form onSubmit={handleSubmitForTenant}>
              {/* Vehicle Type */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="vehicleType" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Type of vehicle
                </label>
                <select
                  id="vehicleType"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                  disabled={isSubmitting}
                >               
                  <option value="">— Select —</option>
                  {vehicleTypeOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                {touched.vehicleType && !String(vehicleType).trim() && (
                  <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>Enter valid vehicle type</div>
                )}                   
              </div>

              {/* Vehicle Sub-Type */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="vehicleSubType" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Color
                </label>
                <input
                  id="vehicleSubType"
                  type="text"
                  value={vehicleSubType}
                  onChange={(e) => setVehicleSubType(e.target.value)}
                  placeholder="Jet Ski, Utility Trailer, Class A"
                  style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                  disabled={isSubmitting}
                />
              </div>              

              {/* Make */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="make" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Make <span style={{ color: "#b91c1c" }}>*</span>
                </label>
                <input
                  id="make"
                  type="text"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, make: true }))}
                  placeholder="Manufacturer (Honda, Toyota, Nissan, etc.)"
                  style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                  disabled={isSubmitting}
                />
                {touched.make && !String(make).trim() && (
                  <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>Enter vehicle make</div>
                )}
              </div>

              {/* Model */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="model" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Model <span style={{ color: "#b91c1c" }}>*</span>
                </label>
                <input
                  id="model"
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, model: true }))}
                  placeholder="Model (Civic, Tacoma, Rogue, etc.)"
                  style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                  disabled={isSubmitting}
                />
                {touched.model && !String(model).trim() && (
                  <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>Enter vehicle model</div>
                )}
              </div>

              {/* Year */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="year" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Year <span style={{ color: "#b91c1c" }}>*</span>
                </label>
                <input
                  id="year"
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, year: true }))}
                  placeholder="e.g. 2019"
                  style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                  disabled={isSubmitting}
                />
                {touched.year && !String(year).trim() && (
                  <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>Enter vehicle year</div>
                )}
              </div>

              {/* Color */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="color" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Color
                </label>
                <input
                  id="color"
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Color"
                  style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                  disabled={isSubmitting}
                />
              </div>

              {/* State */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="state" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  License plate state
                </label>
                <select
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
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

              {/* Plate */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="plate" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  License plate number
                </label>
                <input
                  id="plate"
                  type="text"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  placeholder="License plate"
                  style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Permit */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="permit" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Permit
                </label>
                <input
                  id="permit"
                  type="text"
                  value={permit}
                  onChange={(e) => setPermit(e.target.value)}
                  placeholder="Permit #"
                  style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Parking */}
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="parking" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
                  Parking space
                </label>
                <input
                  id="parking"
                  type="text"
                  value={parking}
                  onChange={(e) => setParking(e.target.value)}
                  placeholder="Parking #"
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

              {formError && (
                <div style={{ color: "#b91c1c", fontSize: 13, marginBottom: 8 }}>{formError}</div>
              )}

              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button type="submit" className={styles.primaryButton} disabled={saveDisabled}>
                  {isSubmitting ? "Saving…" : "Save vehicle"}
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

  // === Mode B: NO tenantId → original global "add vehicle" behavior ===
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add vehicle</h1>
          <p className={styles.subtitle}>
            Create a vehicle record. You’ll be able to connect vehicles tenants later.
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
          {/* Vehicle Type */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="vehicleType" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Type of vehicle <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <select
              id="vehicleType"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
              disabled={isSubmitting}
            >
              <option value="">— Select —</option>
              {vehicleTypeOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            {touched.vehicleType && !String(vehicleType).trim() && (
              <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>Enter valid vehicle type</div>
            )}            
          </div>

          {/* Vehicle Sub-Type */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="vehicleSubType" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Vehicle Sub-Type
            </label>
            <input
              id="vehicleSubType"
              type="text"
              value={vehicleSubType}
              onChange={(e) => setVehicleSubType(e.target.value)}
              placeholder="Jet Ski, Utility Trailer, Class A"
              style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
              disabled={isSubmitting}
            />
          </div>   

          {/* Make */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="make" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Make <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <input
              id="make"
              type="text"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, make: true }))}
              placeholder="Manufacturer (Honda, Toyota, Nissan, etc.)"
              style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
              disabled={isSubmitting}
            />
            {touched.make && !String(make).trim() && (
              <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>Enter vehicle make</div>
            )}
          </div>

          {/* Model */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="model" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Model <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <input
              id="model"
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, model: true }))}
              placeholder="Model (Civic, Tacoma, Rogue, etc.)"
              style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
              disabled={isSubmitting}
            />
            {touched.model && !String(model).trim() && (
              <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>Enter vehicle model</div>
            )}
          </div>

          {/* Year */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="year" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Year <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, year: true }))}
              placeholder="e.g. 2019"
              style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
              disabled={isSubmitting}
            />
            {touched.year && !String(year).trim() && (
              <div style={{ color: "#b91c1c", fontSize: 12, marginTop: 4 }}>Enter vehicle year</div>
            )}
          </div>

          {/* Color */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="color" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Color
            </label>
            <input
              id="color"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Color"
              style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
              disabled={isSubmitting}
            />
          </div>

          {/* State */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="state" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              License plate state
            </label>
            <select
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
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

          {/* Plate */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="plate" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              License plate number
            </label>
            <input
              id="plate"
              type="text"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              placeholder="License plate"
              style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
              disabled={isSubmitting}
            />
          </div>

          {/* Permit */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="permit" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Permit
            </label>
            <input
              id="permit"
              type="text"
              value={permit}
              onChange={(e) => setPermit(e.target.value)}
              placeholder="Permit #"
              style={{ width: "100%", padding: "6px 8px", borderRadius: 8, border: "1px solid #d1d5db" }}
              disabled={isSubmitting}
            />
          </div>

          {/* Parking */}
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="parking" style={{ display: "block", fontWeight: 500, marginBottom: 4 }}>
              Parking space
            </label>
            <input
              id="parking"
              type="text"
              value={parking}
              onChange={(e) => setParking(e.target.value)}
              placeholder="Parking #"
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

          {formError && (
            <div style={{ color: "#b91c1c", fontSize: 13, marginBottom: 8 }}>{formError}</div>
          )}

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button type="submit" className={styles.primaryButton} disabled={saveDisabled}>
              {isSubmitting ? "Saving…" : "Save vehicle"}
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
