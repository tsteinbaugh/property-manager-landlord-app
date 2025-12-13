import React, { useEffect, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { vehiclesApi } from "@features/residents/api/vehicles.api.js";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { ROLES } from "@lib/rbac/roles.js";

export default function LandlordVehicleDetailsPage() {
  const { vehicleId } = useParams();
  const navigate = useNavigate();
  const { effectiveRole, isSysAdmin, token } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
      ? ROLES.SYSADMIN
      : effectiveRole || ROLES.LANDLORD;

  const [vehicle, setVehicle] = useState(null);
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isEditing, setEditing] = useState(false);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [state, setState] = useState("");
  const [plate, setPlate] = useState("");
  const [permit, setPermit] = useState("");
  const [isSaving, setSaving] = useState(false);
  const [isArchiving, setArchiving] = useState(false);

  // many-to-many controls
  const [tenantPickerId, setTenantPickerId] = useState("");
  const [linking, setLinking] = useState(false);
  const [unlinkingId, setUnlinkingId] = useState(null);

  // Load vehicle + tenants
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const [o, ts] = await Promise.all([
          vehiclesApi.get(vehicleId, { token }),
          tenantsApi.list({ token }),
        ]);

        if (!cancelled) {
          if (!o) {
            setError(new Error("Vehicle not found"));
          } else {
            setVehicle(o);
            setTenants(Array.isArray(ts) ? ts : []);
          }
        }
      } catch (err) {
        console.error("Failed to load vehicle", err);
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (vehicleId && token) {
      load();
    } else if (!vehicleId) {
      setLoading(false);
      setError(new Error("Missing vehicle id"));
    }

    return () => {
      cancelled = true;
    };
  }, [vehicleId, token]);

  // Initialize edit fields when vehicle changes
  useEffect(() => {
    if (vehicle) {
      setMake(vehicle.make || "");
      setModel(vehicle.model || "");
      setYear(
        vehicle.year === null || vehicle.year === undefined
          ? ""
          : String(vehicle.year));
      setColor(vehicle.color || "");
      setState(vehicle.state || "");
      setPlate(vehicle.plate || "");
      setPermit(vehicle.permit || "");
    }
  }, [vehicle]);

  const isArchived = !!vehicle?.archived;

  const linkedTenants = useMemo(() => {
    if (!vehicle) return [];
    return Array.isArray(vehicle.tenants) ? vehicle.tenants : [];
  }, [vehicle]);

  // Tenants that can still be added
  const availableTenants = useMemo(() => {
    const linkedIds = new Set(linkedTenants.map((t) => t.id));
    return tenants.filter((t) => !linkedIds.has(t.id));
  }, [tenants, linkedTenants]);

  const handleSave = async () => {
    try {
      setSaving(true);
      const rawYear = year.trim();
      let normalizedYear = null;
      if (rawYear) {
        const parsed = Number(rawYear);
        if (!Number.isNaN(parsed) && parsed >= 0) {
          normalizedYear = parsed;
        } else {
          alert("Year must be a positive number.");
          return;
        }
      }
      const updated = await vehiclesApi.update(
        vehicle.id,
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
      setVehicle(updated);
      setEditing(false);
    } catch (err) {
      console.error("Failed to update vehicle", err);
      alert("Failed to update vehicle. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    if (vehicle) {
      setMake(vehicle.make || "");
      setModel(vehicle.model || "");
      setYear(
        vehicle.year === null || vehicle.year === undefined
          ? ""
          : String(vehicle.year)
      );
      setColor(vehicle.color || "");
      setState(vehicle.state || "");
      setPlate(vehicle.plate || "");
      setPermit(vehicle.permit || "");
    }
    setEditing(false);
  };

  const handleToggleArchive = async () => {
    if (!vehicle) return;

    if (!isArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this vehicle?\n\n" +
          "They will be hidden from active vehicle lists. Only a system administrator can unarchive them."
      );
      if (!ok) return;
    } else {
      if (!isSysAdmin) {
        alert(
          "Only a system administrator can unarchive an archived vehicle.\n\n" +
            "Please contact your system administrator if this needs to be reactivated."
        );
        return;
      }
    }

    try {
      setArchiving(true);
      const updated = await vehiclesApi.toggleArchive(vehicle.id, { token });
      setVehicle(updated);
    } catch (err) {
      console.error("Failed to toggle vehicle archived state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  const handleLinkTenant = async () => {
    if (!tenantPickerId || !vehicle || !vehicle.id) return;

    try {
      setLinking(true);
      await tenantsApi.linkVehicle(tenantPickerId, vehicle.id, { token });

      // Refresh vehicle to pick up new tenants[]
      const fresh = await vehiclesApi.get(vehicle.id, { token });
      setVehicle(fresh || vehicle);
      setTenantPickerId("");
    } catch (err) {
      console.error("Failed to link tenant to vehicle", err);
      alert("Failed to link tenant. Check console for details.");
    } finally {
      setLinking(false);
    }
  };

  const handleUnlinkTenant = async (tenantId) => {
    if (!tenantId || !vehicle || !vehicle.id) return;

    const ok = window.confirm(
      "Remove this tenant from the vehicle's links?\n\n" +
        "This does not change leases or properties. It only removes this vehicle↔tenant link."
    );
    if (!ok) return;

    try {
      setUnlinkingId(tenantId);
      await tenantsApi.unlinkVehicle(tenantId, vehicle.id, { token });

      const fresh = await vehiclesApi.get(vehicle.id, { token });
      setVehicle(fresh || vehicle);
    } catch (err) {
      console.error("Failed to unlink tenant from vehicle", err);
      alert("Failed to unlink tenant. Check console for details.");
    } finally {
      setUnlinkingId(null);
    }
  };

  const handleManageTenant = () => {
    if (!vehicle || !vehicle.id) return;

    const returnTo = encodeURIComponent(
      `${window.location.pathname}${window.location.search || ""}`
    );

    navigate(
      `/landlord/tenants/new?vehicleId=${vehicle.id}&returnTo=${returnTo}`
    );
  };

  if (loading) return <div>Loading vehicle…</div>;

  if (error) {
    return (
      <div style={{ color: "crimson", padding: 16 }}>
        Error loading vehicle: {String(error.message || error)}
      </div>
    );
  }

  if (!vehicle) {
    return <div style={{ padding: 16 }}>No data.</div>;
  }

  const title = vehicle.name || "Unnamed vehicle";

  const canEditNow = !isArchived || isSysAdmin;
  const canArchiveNow = !isArchived;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/residents?tab=vehicles">
          ← Back to residents
        </Link>
      </div>

      {/* header + actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <div>
          {!isEditing ? (
            <>
              <h2 style={{ margin: "8px 0" }}>{title}</h2>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {vehicle.make && (
                  <div>Make: {vehicle.make}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {vehicle.model && (
                  <div>Model: {vehicle.model}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {vehicle.year && (
                  <div>Year: {vehicle.year}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {vehicle.color && (
                  <div>Color: {vehicle.color}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {vehicle.state && (
                  <div>State: {vehicle.state}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {vehicle.plate && (
                  <div>Plate: {vehicle.plate}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {vehicle.permit && (
                  <div>Permit: {vehicle.permit}</div>
                )}
              </div>
              {isArchived && (
                <div style={{ color: "#888", fontSize: 12 }}>
                  (Archived – read-only for landlords)
                </div>
              )}
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                maxWidth: 480,
              }}
            >
              <input
                type="text"
                placeholder="Make (Honda, Toyota, Nissan, etc.)"
                value={make}
                onChange={(e) => setMake(e.target.value)}
              />
              <input
                type="text"
                placeholder="Model (Civic, Tacoma, Rouge, etc.)"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
              <input
                type="text"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <input
                type="text"
                placeholder="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <input
                type="text"
                placeholder="License Plate"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
              />
              <input
                type="text"
                placeholder="Permit #"
                value={permit}
                onChange={(e) => setPermit(e.target.value)}
              />
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  {isSaving ? "Saving…" : "Save"}
                </button>
                <button type="button" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          {canEditNow && !isEditing && (
            <button type="button" onClick={() => setEditing(true)}>
              Edit
            </button>
          )}

          {showArchiveButton ? (
            <ArchiveButton
              archived={isArchived}
              onToggle={handleToggleArchive}
              disabled={isArchiving}
            />
          ) : (
            <button
              type="button"
              disabled
              title={
                isArchived
                  ? "Only a system administrator can unarchive this vehicle."
                  : "Insufficient permissions to archive this vehicle."
              }
              style={{ opacity: 0.5 }}
            >
              {isArchived ? "Unarchive" : "Archive"}
            </button>
          )}
        </div>
      </div>

      {/* Manage tenant button (now just "create new tenant" helper) */}
      <div style={{ marginBottom: 12 }}>
        <button
          type="button"
          onClick={handleManageTenant}
          disabled={isArchived}
          style={{
            borderRadius: 999,
            padding: "6px 12px",
            border: "1px solid #d1d5db",
            background: "#ffffff",
            cursor: isArchived ? "default" : "pointer",
            fontSize: 13,
          }}
        >
          Manage tenants for this vehicle
        </button>
        {isArchived && (
          <span style={{ marginLeft: 8, fontSize: 12, color: "#6b7280" }}>
            Cannot manage tenants for an archived vehicle.
          </span>
        )}
      </div>

      <hr style={{ margin: "16px 0" }} />

      {/* Vehicle info */}
      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
          marginBottom: 16,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
          Vehicle info
        </h3>

        <dl
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            rowGap: 8,
            columnGap: 12,
            fontSize: 14,
          }}
        >
          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Make</dt>
          <dd>{vehicle.make || "—"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Model</dt>
          <dd>{vehicle.model || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Year</dt>
          <dd>{vehicle.year || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Color</dt>
          <dd>{vehicle.color || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>State</dt>
          <dd>{vehicle.state || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Plate</dt>
          <dd>{vehicle.plate || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Permit</dt>
          <dd>{vehicle.permit || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Status</dt>
          <dd>{isArchived ? "Archived" : "Active"}</dd>
        </dl>
      </section>

      {/* Tenants linked to this vehicle (true many-to-many) */}
      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Tenants linked to this vehicle
        </h3>

        {linkedTenants.length > 0 ? (
          <ul style={{ paddingLeft: 18, fontSize: 14 }}>
            {linkedTenants.map((t) => (
              <li
                key={t.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 4,
                }}
              >
                <span>
                  <Link to={`/landlord/tenants/${t.id}`}>
                    {t.name || "(unnamed tenant)"}
                  </Link>
                  {t.email ? ` (${t.email})` : ""}
                </span>
                <button
                  type="button"
                  onClick={() => handleUnlinkTenant(t.id)}
                  disabled={unlinkingId === t.id}
                  style={{ fontSize: 11, padding: "2px 6px" }}
                >
                  {unlinkingId === t.id ? "Unlinking…" : "Unlink"}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            This vehicle is not linked to any tenants yet.
          </div>
        )}
      </section>
    </div>
  );
}
