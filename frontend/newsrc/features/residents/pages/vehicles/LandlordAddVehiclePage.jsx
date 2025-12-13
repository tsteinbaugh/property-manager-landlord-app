// newsrc/features/tenants/pages/LandlordAddVehiclePage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import styles from "../tenants/LandlordTenantsPage.module.css";
import { vehiclesApi } from "@features/residents/api/vehicles.api.js";
import { tenantsApi } from "@features/residents/api/tenants.api.js";

export default function LandlordAddVehiclePage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const tenantId = searchParams.get("tenantId") || "";
  const returnTo = searchParams.get("returnTo") || "";

  // ---------- shared simple form state (make/model/year/color/state/plate/permit) ----------
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [state, setState] = useState("");
  const [plate, setPlate] = useState("");
  const [permit, setPermit] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // ---------- tenant-context-only state ----------
  const [tenant, setTenant] = useState(null);
  const [loadingTenant, setLoadingTenant] = useState(!!tenantId);
  const [tenantError, setTenantError] = useState(null);

  const [allVehicles, setAllVehicles] = useState([]);
  const [loadingVehicles, setLoadingVehicles] = useState(!!tenantId);
  const [vehiclesError, setVehiclesError] = useState(null);

  const [selectedExistingVehicleId, setSelectedExistingVehicleId] =
    useState("");
  const [isLinkingExisting, setIsLinkingExisting] = useState(false);

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
  // Vehicles currently linked to this tenant via join table
  const vehicleLinks = Array.isArray(tenant?.vehicleLinks)
    ? tenant.vehicleLinks
    : [];

  const tenantVehicles = vehicleLinks
    .map((link) => link.vehicle)
    .filter(Boolean);

  // existing vehicles that are NOT already linked to this tenant
  const linkedIds = new Set(vehicleLinks.map((l) => l.vehicleId));

  const availableExistingVehicles =
    tenant && allVehicles.length > 0
      ? allVehicles.filter((v) => !linkedIds.has(v.id))
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
    if (tenantId) {
      goBackFromTenantContext();
    } else {
      navigate("/landlord/residents?tab=vehicles");
    }
  };

  // ------------------------------------------------------------
  // GLOBAL MODE (no tenantId): original behavior
  // ------------------------------------------------------------
  const handleSubmitGlobal = async (e) => {
    e.preventDefault();

    const rawYear = year.trim();
    let normalizedYear = null;

    if (rawYear) {
      const parsed = Number(rawYear);
      if (Number.isNaN(parsed) || parsed < 0) {
        setFormError("Year must be a positive number.");
        return;
      }
      normalizedYear = parsed;
    }

    try {
      setSubmitting(true);
      setFormError("");

      await vehiclesApi.create(
        {
          make: make.trim(),
          model: model.trim(),
          year: normalizedYear,
          color: color.trim(),
          state: state.trim(),
          plate: plate.trim(),
          permit: permit.trim(),
          // tenantId intentionally omitted – global vehicle
        },
        { token }
      );

      navigate("/landlord/residents?tab=vehicles");
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

    const veh = availableExistingVehicles.find(
      (v) => v.id === selectedExistingVehicleId
    );
    const vehName = veh?.plate || "this vehicle";

    const ok = window.confirm(
      `Link ${vehName} to tenant "${tenant?.name || ""}"?\n\n` +
        "This will link the vehicle to this tenant in your records."
    );
    if (!ok) return;

    try {
      setIsLinkingExisting(true);

      // New many-to-many link
      await tenantsApi.linkVehicle(tenantId, selectedExistingVehicleId, {
        token,
      });

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

    const rawYear = year.trim();
    let normalizedYear = null;

    if (rawYear) {
      const parsed = Number(rawYear);
      if (Number.isNaN(parsed) || parsed < 0) {
        setFormError("Year must be a positive number.");
        return;
      }
      normalizedYear = parsed;
    }

    try {
      setSubmitting(true);
      setFormError("");

      // 1) create the vehicle globally
      const created = await vehiclesApi.create(
        {
          make: make.trim(),
          model: model.trim(),
          year: normalizedYear,
          color: color.trim(),
          state: state.trim(),
          plate: plate.trim(),
          permit: permit.trim(),
        },
        { token }
      );

      // 2) link to this tenant via join table
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
                Failed to load tenant. You can still add vehicles, but
                linking may not behave as expected.
              </p>
            ) : (
              <p className={styles.subtitle}>
                Link existing vehicles or create new ones for{" "}
                <strong>{tenant.name}</strong>.
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
              <div style={{ fontSize: 13, color: "#6b7280" }}>
                Loading vehicles…
              </div>
            ) : vehiclesError ? (
              <div style={{ fontSize: 13, color: "#b91c1c" }}>
                Failed to load vehicles list.
              </div>
            ) : availableExistingVehicles.length === 0 ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>
                No other vehicles available to link.
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
                    value={selectedExistingVehicleId}
                    onChange={(e) =>
                      setSelectedExistingVehicleId(e.target.value)
                    }
                    disabled={isLinkingExisting}
                  >
                    <option value="">Select an vehicle…</option>
                    {availableExistingVehicles.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.make ? ` (${v.make})` : ""}
                        {v.model ? ` (${v.model})` : ""}
                        {v.year ? ` (${v.year})` : ""}
                        {v.color ? ` (${v.color})` : ""}
                        {v.state ? ` (${v.state})` : ""}
                        {v.plate ? ` (${v.plate})` : ""}
                        {v.permit ? ` (${v.permit})` : ""}
                        {v.tenantId ? " – linked to another tenant" : ""}
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
                          {v.make ? ` (${v.make})` : ""}
                          {v.model ? ` (${v.model})` : ""}
                          {v.year ? ` (${v.year})` : ""}
                          {v.color ? ` (${v.color})` : ""}
                          {v.state ? ` (${v.state})` : ""}
                          {v.plate ? ` (${v.plate})` : ""}
                          {v.permit ? ` (${v.permit})` : ""}
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
            <h2 style={{ fontSize: 16, marginBottom: 8 }}>
              Create new vehicle for this tenant
            </h2>

            <form onSubmit={handleSubmitForTenant}>
              {/* Make */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="make"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Make
                </label>
                <input
                  id="make"
                  type="text"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  placeholder="Make (Honda, Toyota, Nissan, etc.)"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>
              
              {/* Model */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="model"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Model
                </label>
                <input
                  id="model"
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="Model (Civic, Tacoma, Rouge, etc."
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Year */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="year"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Year
                </label>
                <input
                  id="year"
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="Year"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Color */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="color"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Color
                </label>
                <input
                  id="color"
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Color"
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
                <input
                  id="state"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="State"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Plate */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="plate"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Plate
                </label>
                <input
                  id="plate"
                  type="text"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  placeholder="License Plate"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Permit */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="permit"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Permit
                </label>
                <input
                  id="permit"
                  type="text"
                  value={permit}
                  onChange={(e) => setPermit(e.target.value)}
                  placeholder="Permit #"
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
            Create an vehicle record. You’ll be able to connect vehicles to
            leases (and tenants) later.
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
          {/* Make */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="make"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Make
            </label>
            <input
              id="make"
              type="text"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              placeholder="Make (Honda, Toyota, Nissan, etc.)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>
          
          {/* Model */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="model"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Model
            </label>
            <input
              id="model"
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Model (Civic, Tacoma, Rouge, etc."
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>
          {/* Year */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="year"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Year
            </label>
            <input
              id="year"
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>
          {/* Color */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="color"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Color
            </label>
            <input
              id="color"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Color"
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
            <input
              id="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>
          {/* Plate */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="plate"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Plate
            </label>
            <input
              id="plate"
              type="text"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              placeholder="License Plate"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>
          {/* Permit */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="permit"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Permit
            </label>
            <input
              id="permit"
              type="text"
              value={permit}
              onChange={(e) => setPermit(e.target.value)}
              placeholder="Permit #"
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
