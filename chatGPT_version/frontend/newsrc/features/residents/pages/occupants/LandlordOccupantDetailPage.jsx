//frontend/newsrc/features/residents/pages/occupants/LandlordOccupantDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { occupantsApi } from "@features/residents/api/occupants.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import OccupantCard from "@features/residents/components/occupants/OccupantCard.jsx"
import LinkageCard from "@shared/ui/cards/LinkageCard.jsx"
import ArchivedHeaderActions from "@shared/ui/actions/ArchivedHeaderActions.jsx";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

function isArchivedEntity(x) {
  return !!(t?.archivedAt || x?.archived);
}

export default function LandlordOccupantDetailsPage() {
  const { occupantId } = useParams();
  const navigate = useNavigate();
  const { effectiveRole, isSysAdmin, token } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
      ? ROLES.SYSADMIN
      : typeof effectiveRole === "string"
        ? effectiveRole.toLowerCase()
        : effectiveRole || ROLES.LANDLORD;

  const canUpdate = can(role, R.OCCUPANTS, A.UPDATE);
  const canArchiveGrant = can(role, R.OCCUPANTS, A.ARCHIVE);        

  const [occupant, setOccupant] = useState(null);
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

        const o = await occupantsApi.get(occupantId, { token });

        if (!cancelled) {
          setOccupant(o || null);
          if (!o) setError(new Error("Occupant not found"));
        }
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (occupantId && token) load();
    else if (!occupantId) {
      setLoading(false);
      setError(new Error("Missing occupant id"));
    }

    return () => {
      cancelled = true;
    };
  }, [occupantId, token]);

  const isArchived = !!(occupant?.archivedAt || occupant?.archived);
  
  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;

  const title = occupant?.name || "Occupant";

  const linkedTenants = useMemo(() => {
    if (!occupant) return [];
    return Array.isArray(occupant.tenants) ? occupant.tenants : [];
  }, [occupant]);

  const tenantCounts = useMemo(() => {
    const total = linkedTenants.length;
    const archived = linkedTenants.filter(isArchivedEntity).length;
    const active = total - archived;
    return { total, active, archived };
  }, [linkedTenants]);

  const visibleTenants = useMemo(() => {
    if (showArchivedTenants) return linkedTenants;
    return linkedTenants.filter((t) => !isArchivedEntity(t));
  }, [linkedTenants, showArchivedTenants]);

  const reload = async () => {
    const o = await occupantsApi.get(occupantId, { token });
    setOccupant(o || null);
  };

  const handleToggleArchive = async () => {
    if (!occupant) return;

    if (!isArchived) {
      if (!canArchiveGrant) {
        alert("You do not have permission to archive occupants.");
        return;
      }

      const archiveReason = window.prompt(
        "Please provide a reason for archiving this occupant."
      );

      if (archiveReason === null) return;

      if (!archiveReason.trim()) {
        alert("Archiving requires a reason.");
        return;
      }

      const ok = window.confirm(
        "Are you sure you want to archive this occupant?\n\n" +
          "It will be hidden from active lists. Only a system administrator can unarchive it."
      );
      if (!ok) return;

      try {
        setArchiving(true);
        await occupantsApi.toggleArchive(occupant.id, {
          token,
          archiveReason: archiveReason.trim(),
        });
        await reload();
      } catch (err) {
        console.error("Failed to toggle occupant archive state", err);
        alert("Failed to change archive status. Check console for details.");
      } finally {
        setArchiving(false);
      }
      return;
    }

    if (!isSysAdmin) {
      alert(
        "Only a system administrator can unarchive an archived occupant.\n\n" +
          "Please contact your system administrator if this needs to be reactivated."
      );
      return;
    }

    try {
      setArchiving(true);
      await occupantsApi.toggleArchive(occupant.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to toggle occupant archive state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  const goEditOccupant = () => {
    if (!occupant?.id) return;
    const returnTo = encodeURIComponent(`${window.location.pathname}${window.location.search || ""}`);
    navigate(`/landlord/occupants/new?occupantId=${occupant.id}&returnTo=${returnTo}`);
  };

  const handleUnlinkOccupantFromTenant = async (tenantId) => {
    if (!tenantId || !occupant?.id) return;

    const ok = window.confirm(
      "Unlink this occupant from this tenant?\n\nThis does NOT delete either record. It only removes the occupant↔tenant association."
    );
    if (!ok) return;

    if (isArchived) {
      alert("Cannot manage links for an archived occupant.");
      return;
    }

    try {
      setUnlinkingTenantId(tenantId);
      await tenantsApi.unlinkOccupant(tenantId, occupant.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to unlink tenant from occupant", err);
      alert("Failed to unlink tenant. Check console for details.");
    } finally {
      setUnlinkingTenantId(null);
    }
  };

  if (loading) return <div className={page.page}>Loading occupant…</div>;
  if (error)
    return (
      <div className={page.page} style={{ color: "crimson" }}>
        Error loading occupant: {String(error?.message || error)}
      </div>
    );
  if (!occupant) return <div className={page.page}>No data.</div>;

  return (
    <div className={page.page}>
      <div className={page.header}>
        <Link to="/landlord/residents?tab=occupants">← Back to residents</Link>
      </div>

      {/* Header */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <h1 className={page.title}>{title}</h1>

            <ArchivedHeaderActions
              isArchived={isArchived}
              isBusy={isArchiving}
              archivedMessage="Cannot edit an archived occupant. To edit, contact a system admin to unarchive first."
              canEdit={canEditNow}
              onEdit={goEditOccupant}
              editLabel="Edit occupant"
              canArchive={canArchiveNow}
              onArchive={handleToggleArchive}
              archiveLabel="Archive occupant"
              canUnarchive={canUnarchiveNow}
              onUnarchive={handleToggleArchive}
              unarchiveLabel="Unarchive occupant"
              card={card}
              shared={shared}
            />
          </div>
        </div>
      </div>

      {/* Occupant info */}
      <div className={page.section}>
        <OccupantCard occupant={occupant} variant="detail" />
      </div>

      {/* Tenants */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Tenants</div>
            <div className={page.sectionHint}>Direct link: Tenant ↔ Occupant</div>
          </div>
        </div>

        {tenantCounts.archived > 0 ? (
          <div className={shared.muted} style={{ marginBottom: 8 }}>
            {!showArchivedTenants ? (
              <>
                <button
                  type="button"
                  className={card.linkAction}
                  onClick={() => setShowArchivedTenants(false)}
                  style={{ padding: 0 }}
                >
                  Show archived tenants
                </button>
                <div>Archived tenants are hidden</div>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className={card.linkAction}
                  onClick={() => setShowArchivedTenants(false)}
                  style={{ padding: 0 }}
                >
                  Hide archived tenants
                </button>
                <div>Showing all tenants</div>
              </>
            )}
          </div>
        ) : null}

        {visibleTenants.length ? (
          <div className={page.grid}>
            {visibleTenants.map((t) => {
              if (!t?.id) return null;

              const archived = isArchivedEntity(t);
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
                  actions={[
                    {
                      key: "unlink",
                      label: "Unlink from occupant",
                      busyLabel: "Unlinking…",
                      danger: true,

                      // busy implies disabled; don't include busy in disabled
                      busy: unlinkingTenantId === t.id,
                      disabled: isArchived || archived,

                      disabledMessage: isArchived
                        ? "Cannot manage links for an archived occuapnt."
                        : archived
                          ? "Cannot manage links for an archived tenant."
                          : null,

                      onClick: () => handleUnlinkOccupantFromTenant(t.id),
                    },
                  ]}
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
              "No tenants linked to this occupant yet."
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
              navigate(`/landlord/tenants/new?occupantId=${occupant.id}&returnTo=${returnTo}`);
            }}
            disabled={isArchived}
            aria-disabled={isArchived ? "true" : "false"}
          >
            Add a tenant (new or existing)
          </button>
        </div>

        {isArchived ? (
          <div className={shared.muted}>
            Cannot manage links for an archived occupant.
          </div>
        ) : null}
      </div>
    </div>
  );
}
