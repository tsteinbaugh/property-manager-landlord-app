// newsrc/features/residents/pages/vehicles/LandlordVehicleDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { vehiclesApi } from "@features/residents/api/vehicles.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import VehicleCard from "@features/residents/components/vehicles/VehicleCard.jsx";
import LinkageCard from "@shared/ui/cards/LinkageCard.jsx";
import ArchivedHeaderActions from "@shared/ui/actions/ArchivedHeaderActions.jsx";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

function vehicleLabel(v) {
  if (!v) return "Unnamed vehicle";

  const year = v.year ? String(v.year).trim() : "";
  const make = v.make ? String(v.make).trim() : "";
  const model = v.model ? String(v.model).trim() : "";

  const ymm = [`${year},`, make, model].filter(Boolean).join(" ");
  return ymm || "Unnamed vehicle";
}

function isTenantArchived(t) {
  return !!(t?.archivedAt || t?.archived);
}

export default function LandlordVehicleDetailsPage() {
  const { vehicleId } = useParams();
  const navigate = useNavigate();
  const { isSysAdmin, token, effectiveRole } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
    ? ROLES.SYSADMIN
    : typeof effectiveRole === "string"
      ? effectiveRole.toLowerCase()
      : effectiveRole || ROLES.LANDLORD;

  const canUpdate = can(role, R.VEHICLES, A.UPDATE);
  const canArchiveGrant = can(role, R.VEHICLES, A.ARCHIVE);

  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isArchiving, setArchiving] = useState(false);
  const [unlinkingTenantId, setUnlinkingTenantId] = useState(null);
  const [showArchivedTenants, setShowArchivedTenants] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const v = await vehiclesApi.get(vehicleId, { token });

        if (!cancelled) {
          setVehicle(v || null);
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

  const isArchived = !!(vehicle?.archivedAt || vehicle?.archived);

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;

  const title = vehicleLabel(vehicle);

  const linkedTenants = useMemo(() => {
    if (!vehicle) return [];
    return Array.isArray(vehicle.tenants) ? vehicle.tenants : [];
  }, [vehicle]);

  const tenantCounts = useMemo(() => {
    const total = linkedTenants.length;
    const archived = linkedTenants.filter((t) => isTenantArchived(t)).length;
    const active = total - archived;
    return { total, active, archived };
  }, [linkedTenants]);
  
  const visibleTenants = useMemo(() => {
    if (showArchivedTenants) return linkedTenants;
    return linkedTenants.filter((t) => !isTenantArchived(t));
  }, [linkedTenants, showArchivedTenants]);

  const reload = async () => {
    const v = await vehiclesApi.get(vehicleId, { token });
    setVehicle(v || null);
  };

  const handleToggleArchive = async () => {
    if (!vehicle) return;

    if (!isArchived) {
      if (!canArchiveGrant) {
        alert("You do not have permission to archive vehicles.");
        return;
      }

      const archiveReason = window.prompt(
        "Please provide a reason for archiving this vehicle."
      );
      
      if (archiveReason === null) return;

      if (!archiveReason.trim()) {
        alert("Archiving requires a reason.");
        return;
      }

      const ok = window.confirm(
        "Are you sure you want to archive this vehicle?\n\n" +
          "It will be hidden from active lists. Only a system administrator can unarchive it."
      );
      if (!ok) return;

      try {
        setArchiving(true);
        await vehiclesApi.toggleArchive(vehicle.id, {
          token,
          archiveReason: archiveReason.trim(),
        });
        await reload();
      } catch (err) {
        console.error("Failed to toggle vehicle archive state", err);
        alert("Failed to change archive status. Check console for details.");
      } finally {
        setArchiving(false);
      }
      return;
    }

    if (!isSysAdmin) {
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
      console.error("Failed to toggle vehicle archive state", err);
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

  const handleUnlinkVehicleFromTenant = async (tenantId) => {
    if (!tenantId || !vehicle?.id) return;

    const ok = window.confirm(
      "Unlink this vehicle from this tenant?\n\nThis does NOT delete either record. It only removes the vehicle↔tenant association."
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

  if (loading) return <div className={page.page}>Loading vehicle…</div>;
  if (error)
    return (
      <div className={page.page} style={{ color: "crimson" }}>
        Error loading vehicle: {String(error?.message || error)}
      </div>
    );
  if (!vehicle) return <div className={page.page}>No data.</div>;

  return (
    <div className={page.page}>
      <div className={page.header}>
        <Link to="/landlord/residents?tab=vehicles">← Back to residents</Link>
      </div>

      {/* Header */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <h1 className={page.title}>{title}</h1>

            <ArchivedHeaderActions
              isArchived={isArchived}
              isBusy={isArchiving}
              archivedMessage="Cannot edit an archived vehicle. To edit, contact a system admin to unarchive first."
              canEdit={canEditNow}
              onEdit={goEditVehicle}
              editLabel="Edit vehicle"
              canArchive={canArchiveNow}
              onArchive={handleToggleArchive}
              archiveLabel="Archive vehicle"
              canUnarchive={canUnarchiveNow}
              onUnarchive={handleToggleArchive}
              unarchiveLabel="Unarchive vehicle"
              card={card}
              shared={shared}
            />
          </div>
        </div>
      </div>

      {/* Vehicle info */}
      <div className={page.section}>
        <VehicleCard vehicle={vehicle} variant="detail" />
      </div>

      {/* Tenants */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Tenants</div>
            <div className={page.sectionHint}>Direct link: Tenant ↔ Vehicle</div>
          </div>
        </div>

        {tenantCounts.archived && showArchivedTenants ? (
          <div className={shared.muted} style={{ marginBottom: 8 }}>
            <div>Showing archived tenants</div>
            <button
              type="button"
              className={card.linkAction}
              onClick={() => setShowArchivedTenants(false)}
              style={{ padding: 0 }}
            >
              Hide archived tenants
            </button>
          </div>
        ) : null}

        {visibleTenants.length ? (
          <div className={page.grid}>
            {visibleTenants.map((t) => {
              if (!t?.id) return null;

              const archived = isTenantArchived(t);
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
                      className={`${card.inlineAction} ${card.inlineActionDanger}`}
                      onClick={(le) => {
                        le.stopPropagation();
                        handleUnlinkVehicleFromTenant(t.id);
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
          <div className={shared.muted}>
            {tenantCounts.total ? (
              <>
                <div>No active tenants linked</div>
            
                {tenantCounts.archived ? (
                  <button
                    type="button"
                    className={card.linkAction}
                    onClick={() => setShowArchivedTenants(true)}
                    style={{ padding: 0 }}
                  >
                    Show archived tenants
                  </button>
                ) : null}
              </>
            ) : (
              "No tenants linked to this vehicle yet."
            )}
          </div>
        )}

        <div className={card.formActions}>
          <button
            type="button"
            className={card.linkAction}
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
        </div>

        {isArchived ? (
          <div className={shared.muted}>
            Cannot manage links for an archived vehicle.
          </div>
        ) : null}
      </div>
    </div>
  );
}
