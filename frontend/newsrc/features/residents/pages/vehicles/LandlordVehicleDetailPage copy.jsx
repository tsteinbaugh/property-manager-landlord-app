// newsrc/features/tenants/pages/LandlordVehicleDetailsPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { vehiclesApi } from "@features/residents/api/vehicles.api.js";
import { ROLES } from "@lib/rbac/roles.js";

export default function LandlordVehicleDetailsPage() {
  const { vehicleId } = useParams();
  const { effectiveRole, isSysAdmin, token } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
      ? ROLES.SYSADMIN
      : effectiveRole || ROLES.LANDLORD;

  const [vehicle, setVehicle] = useState(null);
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

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const p = await vehiclesApi.get(vehicleId, { token });

        if (!cancelled) {
          if (!p) {
            setError(new Error("Vehicle not found"));
          } else {
            setVehicle(p);
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
  const canArchiveNow = !isArchived; // any landlord can archive
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        {/* mirror tenant details back-link to residents */}
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

      <hr style={{ margin: "16px 0" }} />

      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
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
    </div>
  );
}
