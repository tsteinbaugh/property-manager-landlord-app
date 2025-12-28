// newsrc/features/residents/pages/vehicles/LandlordVehicleDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { vehiclesApi } from "@features/residents/api/vehicles.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import VehicleCard from "@features/residents/components/vehicles/VehicleCard.jsx"
import LinkageCard from "@shared/ui/cards/LinkageCard.jsx"

import ui from "@shared/styles/CardLayout.module.css";

function vehicleLabel(v) {

  const year = v.year ? String(v.year).trim() : "";
  const make = v.make ? String(v.make).trim() : "";
  const model = v.model ? String(v.model).trim() : "";

  const ymm = [`${year},`, make, model].filter(Boolean).join(" ");
  return ymm || "Unnamed vehicle";
}

export default function LandlordVehicleDetailsPage() {
  const { vehicleId } = useParams();
  const navigate = useNavigate();
  const { isSysAdmin, token } = useUser() || {};

  const [vehicle, setVehicle] = useState(null);
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isArchiving, setArchiving] = useState(false);
  const [unlinkingTenantId, setUnlinkingTenantId] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const [v, ts] = await Promise.all([
          vehiclesApi.get(vehicleId, { token }),
          tenantsApi.list({ token }),
        ]);

        if (!cancelled) {
          setVehicle(v || null);
          setTenants(Array.isArray(ts) ? ts : []);
          if (!v) setError(new Error("Vehicle not found"));
        }
      } catch (err) {
        console.error("Failed to load vehicle", err);
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (vehicleId && token) load();
    else if (!vehicleId) {
      setLoading(false);
      setError(new Error("Missing vehicle id"));
    }

    return () => {
      cancelled = true;
    };
  }, [vehicleId, token]);

  const isArchived = !!vehicle?.archivedAt;

  const canEditNow = !isArchived || isSysAdmin;
  const canArchiveNow = !isArchived;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveLink = canArchiveNow || canUnarchiveNow;

  const linkedTenants = useMemo(() => {
    if (!vehicle) return [];
    return Array.isArray(vehicle.tenants) ? vehicle.tenants : [];
  }, [vehicle]);

  const availableTenants = useMemo(() => {
    const linkedIds = new Set((linkedTenants || []).map((t) => t?.id).filter(Boolean));
    return (tenants || []).filter((t) => t?.id && !linkedIds.has(t.id));
  }, [tenants, linkedTenants]);

  const reload = async () => {
    const [v, ts] = await Promise.all([
      vehiclesApi.get(vehicleId, { token }),
      tenantsApi.list({ token }),
    ]);
    setVehicle(v || null);
    setTenants(Array.isArray(ts) ? ts : []);
  };

  const handleToggleArchive = async () => {
    if (!vehicle?.id) return;

    if (!isArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this vehicle?\n\n" +
          "They will be hidden from active vehicle lists. Only a system administrator can unarchive them."
      );
      if (!ok) return;
    } else if (!isSysAdmin) {
      alert(
        "Only a system administrator can unarchive an archived vehicle.\n\n" +
          "Please contact your system administrator if this needs to be reactivated."
      );
      return;
    }

    try {
      setArchiving(true);
      await vehiclesApi.toggleArchive(vehicle.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to toggle vehicle archived state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  const goEditVehicle = () => {
    if (!vehicle?.id) return;
    const returnTo = encodeURIComponent(`${window.location.pathname}${window.location.search || ""}`);
    navigate(`/landlord/vehicles/new?vehicleId=${vehicle.id}&returnTo=${returnTo}`);
  };

  const handleUnlinkTenant = async (tenantId) => {
    if (!tenantId || !vehicle?.id) return;

    const ok = window.confirm(
      "Unlink this vehicle from this tenant?\n\n" +
        "This does NOT delete either record. It only removes the vehicle↔tenant association."
    );
    if (!ok) return;

    try {
      setUnlinkingTenantId(tenantId);
      await tenantsApi.unlinkVehicle(tenantId, vehicle.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to unlink tenant from vehicle", err);
      alert("Failed to unlink tenant. Check console for details.");
    } finally {
      setUnlinkingTenantId(null);
    }
  };

  if (loading) return <div className={ui.page}>Loading vehicle…</div>;
  if (error)
    return (
      <div className={ui.page} style={{ color: "crimson" }}>
        Error loading vehicle: {String(error?.message || error)}
      </div>
    );
  if (!vehicle) return <div className={ui.page}>No data.</div>;

  const title = vehicleLabel(vehicle);

  return (
    <div className={ui.page}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/residents?tab=vehicles">← Back to residents</Link>
      </div>

      {/* Header */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div>
            <h1 style={{ margin: 0 }}>{title}</h1>

            <div className={ui.headerLinksRow}>
              {canEditNow ? (
                <button type="button" className={ui.linkAction} onClick={goEditVehicle}>
                  Edit vehicle
                </button>
              ) : null}

              {showArchiveLink ? (
                <button
                  type="button"
                  className={ui.linkAction}
                  onClick={handleToggleArchive}
                  disabled={isArchiving}
                  aria-disabled={isArchiving ? "true" : "false"}
                >
                  {isArchived ? "Unarchive vehicle" : "Archive vehicle"}
                </button>
              ) : (
                <span className={ui.linkActionDisabled}>
                  {isArchived ? "Unarchive vehicle" : "Archive vehicle"}
                </span>
              )}
            </div>

            {isArchived ? <div className={ui.muted}>(Archived – read-only for landlords)</div> : null}
          </div>
        </div>
      </div>

      {/* Vehicle info */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}></div>
        <VehicleCard
          vehicle={vehicle}
          variant="detail"
        />
      </div>

      {/* Tenants */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Tenants</div>
          <div className={ui.sectionHint}>Direct link: Tenant ↔ Vehicle</div>
        </div>

        {linkedTenants.length ? (
          <div className={ui.grid}>
            {linkedTenants.map((t) => {
              if (!t?.id) return null;

              const archived = !!t.archivedAt;
              const tenantName = t.name || t.email || "Unnamed tenant";

              return (
                <LinkageCard
                  key={t.id}
                  title={tenantName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Tenant"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/tenants/${t.id}`)}
                  linkageParts={[tenantName, title]}
                  footer={
                    <button
                      type="button"
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      onClick={(le) => {
                        le.stopPropagation();
                        handleUnlinkTenant(t.id);
                      }}
                      disabled={unlinkingTenantId === t.id}
                    >
                      {unlinkingTenantId === t.id ? "Unlinking…" : "Unlink from vehicle"}
                    </button>
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No tenants linked to this vehicle yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={ui.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/tenants/new?vehicleId=${vehicle.id}&returnTo=${returnTo}`);
            }}
            disabled={isArchived}
            aria-disabled={isArchived ? "true" : "false"}
          >
            Add a tenant (new or existing)
          </button>

          {isArchived ? (
            <div className={ui.muted} style={{ marginTop: 6 }}>
              Cannot manage links for an archived vehicle.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
