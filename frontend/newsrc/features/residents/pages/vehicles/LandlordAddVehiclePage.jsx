// newsrc/features/tenants/pages/LandlordAddVehiclePage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

import { vehiclesApi } from "@features/residents/api/vehicles.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";

import {
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

  // ---------- form state ----------
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

  const [touched, setTouched] = useState({
    make: false,
    model: false,
    year: false,
    vehicleType: false,
  });

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

  const stateOptions = useMemo(
    () =>
      optionsFromEnumMap(US_STATE_NAME_TO_CODE, {
        sortBy: "key",
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
        console.error("Failed to load tenant for Add Vehicle Page", err);
        if (!cancelled) setTenantError(err);
      } finally {
        if (!cancelled) setLoadingTenant(false);
      }
    }

    async function loadVehicles() {
      try {
        setLoadingVehicles(true);
        setVehiclesError(null);
        const list = await vehiclesApi.listAll({ token, includeArchived: false });
        if (!cancelled) setAllVehicles(Array.isArray(list) ? list : []);
      } catch (err) {
        console.error("Failed to load vehicles for Add Vehicle Page", err);
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
  // Load vehicle for EDIT mode
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

  // ------------------------------------------------------------
  // Derived lists (tenant context)
  // ------------------------------------------------------------
  const vehicleLinks = Array.isArray(tenant?.vehicleLinks) ? tenant.vehicleLinks : [];
  const tenantVehicles = vehicleLinks.map((link) => link.vehicle).filter(Boolean);

  const linkedIds = new Set(vehicleLinks.map((l) => l.vehicleId));
  const availableExistingVehicles =
    tenant && allVehicles.length > 0 ? allVehicles.filter((e) => !linkedIds.has(e.id)) : allVehicles;

  // ------------------------------------------------------------
  // Navigation helpers
  // ------------------------------------------------------------
  const goBackFromTenantContext = () => {
    if (returnTo) navigate(returnTo);
    else if (tenantId) navigate(`/landlord/tenants/${tenantId}`);
    else navigate("/landlord/residents?tab=vehicles");
  };

  const handleCancel = () => {
    if (returnTo) return navigate(returnTo);
    if (tenantId) return goBackFromTenantContext();
    if (isEditMode) return navigate(`/landlord/vehicles/${vehicleId}`);
    return navigate("/landlord/residents?tab=vehicles");
  };

  // ------------------------------------------------------------
  // Validation + payload
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
    setTouched({ make: true, model: true, year: true, vehicleType: true });
    setFormError("");

    const { ok, payload } = validateAndSetError();
    if (!ok) return;

    try {
      setSubmitting(true);

      let saved;
      if (isEditMode) {
        saved = await vehiclesApi.update(vehicleId, payload, { token });
      } else {
        saved = await vehiclesApi.create(payload, { token });
      }

      if (returnTo) {
        navigate(returnTo);
      } else if (isEditMode) {
        navigate(`/landlord/vehicles/${saved?.id || vehicleId}`);
      } else {
        navigate("/landlord/residents?tab=vehicles");
      }
    } catch (err) {
      console.error("Failed to save vehicle", err);
      setFormError("Failed to save vehicle. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // Tenant-context: link existing
  // ------------------------------------------------------------
  const handleLinkExisting = async () => {
    if (!tenantId || !selectedExistingVehicleId) return;

    const veh = availableExistingVehicles.find((v) => v.id === selectedExistingVehicleId);
    const vehName = veh?.plate ? `${veh.plate}${veh.state ? ` (${veh.state})` : ""}` : "this vehicle";

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
  
  // ------------------------------------------------------------
  // Tenant-context: create & link new
  // ------------------------------------------------------------
  const handleSubmitForTenant = async (e) => {
    e.preventDefault();
    setTouched({ make: true, model: true, year: true, vehicleType: true });
    setFormError("");

    const { ok, payload } = validateAndSetError();
    if (!ok) return;

    try {
      setSubmitting(true);

      const created = await vehiclesApi.create(payload, { token });
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
          <div className={shared.groupRow}>
            <div className={`${card.field} ${shared.groupField}`}>
              <label className={card.label} htmlFor="vehicleType">
                Type <span className={card.required}>*</span>
              </label>

              <select
                id="vehicleType"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className={ctrl(touched.vehicleType && !String(vehicleType).trim())}
                disabled={isSubmitting}
              >
                <option value="">— Select —</option>
                {vehicleTypeOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              
              {touched.vehicleType && !String(vehicleType).trim() ? (
                <div className={card.errorText}>Select a vehicle type</div>
              ) : null}
            </div>
            
            <div className={`${card.field} ${shared.groupField}`}>
              <label className={card.label} htmlFor="vehicleSubType">
                Sub-type <span className={shared.muted}>(optional)</span>
              </label>
            
              <input
                id="vehicleSubType"
                type="text"
                value={vehicleSubType}
                onChange={(e) => setVehicleSubType(e.target.value)}
                placeholder="Jet Ski, Utility Trailer, Class A"
                className={card.control}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="make">
              Make <span className={card.required}>*</span>
            </label>
            <input
              id="make"
              type="text"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, make: true }))}
              placeholder="Toyota"
              className={ctrl(touched.make && !String(make).trim())}
              disabled={isSubmitting}
            />
            {touched.make && !String(make).trim() ? <div className={card.errorText}>Enter a make</div> : null}
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="model">
              Model <span className={card.required}>*</span>
            </label>
            <input
              id="model"
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, model: true }))}
              placeholder="4Runner"
              className={ctrl(touched.model && !String(model).trim())}
              disabled={isSubmitting}
            />
            {touched.model && !String(model).trim() ? <div className={card.errorText}>Enter a model</div> : null}
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="year">
              Year <span className={card.required}>*</span>
            </label>
            <input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, year: true }))}
              placeholder="2019"
              className={ctrl(touched.year && !String(year).trim())}
              disabled={isSubmitting}
            />
            {touched.year && !String(year).trim() ? <div className={card.errorText}>Enter a year</div> : null}
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="color">
              Color <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="color"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Silver"
              className={card.control}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </section>

      <section className={`${card.card} ${card.cardForm} ${page.narrow}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>License Plate</div>
        </div>

        <div className={card.cardBody}>
          <fieldset className={shared.groupRow}>
            <legend className={shared.srOnly}>License plate</legend>

            <div className={`${card.field} ${shared.groupField}`}>
              <label className={card.label} htmlFor="state">
                State <span className={shared.muted}>(optional)</span>
              </label>

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
              
            <div className={`${card.field} ${shared.groupField}`}>
              <label className={card.label} htmlFor="plate">
                Plate number <span className={shared.muted}>(optional)</span>
              </label>
              
              <input
                id="plate"
                type="text"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
                placeholder="ABC123"
                className={card.control}
                disabled={isSubmitting}
              />
            </div>
          </fieldset>
        </div>
      </section>

      <section className={`${card.card} ${card.cardForm} ${page.narrow}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>Parking</div>
        </div>
                    
        <div className={card.cardBody}>
          <div className={shared.groupRow}>
            <div className={`${card.field} ${shared.groupField}`}>
              <label className={card.label} htmlFor="permit">
                Permit <span className={shared.muted}>(optional)</span>
              </label>
              <input
                id="permit"
                type="text"
                value={permit}
                onChange={(e) => setPermit(e.target.value)}
                placeholder="Permit #"
                className={card.control}
                disabled={isSubmitting}
              />
            </div>
                    
            <div className={`${card.field} ${shared.groupField}`}>
              <label className={card.label} htmlFor="parking">
                Parking space <span className={shared.muted}>(optional)</span>
              </label>
              <input
                id="parking"
                type="text"
                value={parking}
                onChange={(e) => setParking(e.target.value)}
                placeholder="Space 12"
                className={card.control}
                disabled={isSubmitting}
              />
            </div>
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
              {isSubmitting ? "Saving…" : isEditMode ? "Save changes" : "Save vehicle"}
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

  // === Mode A: tenantId present (manage vehicles for tenant) ===
  if (tenantId) {
    return (
      <div className={page.page}>
        <header className={page.header}>
          <div>
            <h1 className={page.title}>Manage vehicle linking</h1>
            {loadingTenant ? (
              <p className={page.subtitle}>Loading tenant…</p>
            ) : tenantError || !tenant ? (
              <p className={page.subtitle} style={{ color: "#b91c1c" }}>
                Failed to load tenant. You can still add vehicles, but linking may not behave as expected.
              </p>
            ) : (
              <p className={page.subtitle}>
                Link an existing vehicle or create a new one for <strong>{tenant.name}</strong>.
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
                  Quickly associate an existing vehicle with this tenant
                </div>
              </div>
            </div>

            <div className={`${card.card} ${card.cardForm} ${page.narrow}`}>
              <div className={card.cardBody}>
                {loadingVehicles ? (
                  <div className={shared.muted}>Loading vehicles…</div>
                ) : vehiclesError ? (
                  <div className={shared.error}>Failed to load vehicles list.</div>
                ) : availableExistingVehicles.length === 0 ? (
                  <div className={shared.muted}>No other vehicles available to link.</div>
                ) : (
                  <>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <select
                        className={card.control}
                        value={selectedExistingVehicleId}
                        onChange={(e) => setSelectedExistingVehicleId(e.target.value)}
                        disabled={isLinkingExisting}
                        style={{ flex: 1 }}
                      >
                        <option value="">Select a vehicle…</option>
                        {availableExistingVehicles.map((v) => (
                          <option key={v.id} value={v.id}>
                            {[v.year, v.make, v.model].filter(Boolean).join(" ") || "Vehicle"}
                            {v.plate ? ` • ${v.plate}` : ""}
                            {v.state ? ` (${v.state})` : ""}
                          </option>
                        ))}
                      </select>

                      <button
                        type="button"
                        className={card.primaryButton}
                        onClick={handleLinkExisting}
                        disabled={!selectedExistingVehicleId || isLinkingExisting}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {isLinkingExisting ? "Linking…" : "Link"}
                      </button>
                    </div>

                    {tenantVehicles.length > 0 ? (
                      <div className={shared.muted} style={{ marginTop: 10 }}>
                        Already linked:
                        <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                          {tenantVehicles.map((v) => (
                            <li key={v.id}>
                              {[v.year, v.make, v.model].filter(Boolean).join(" ") || "Vehicle"}
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
                  Create a new vehicle record and link it to this tenant.
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
          <h1 className={page.title}>{isEditMode ? "Edit vehicle" : "Create vehicle"}</h1>
          <p className={page.subtitle}>
            {isEditMode ? "Update vehicle details." : "Create a vehicle record.  It can be linked to a tenant."}
          </p>
        </div>
      </header>

      {renderForm(handleSubmitGlobal)}
    </div>
  );
}
