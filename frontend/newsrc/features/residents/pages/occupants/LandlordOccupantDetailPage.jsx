//frontend/newsrc/features/residents/pages/occupants/LandlordOccupantDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { occupantsApi } from "@features/residents/api/occupants.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { ROLES } from "@lib/rbac/roles.js";
import OccupantCard from "@features/residents/components/occupants/OccupantCard.jsx"
import LinkageCard from "@shared/ui/cards/LinkageCard.jsx"

import ui from "@shared/styles/CardLayout.module.css";

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

  const [occupant, setOccupant] = useState(null);
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

        const [o, ts] = await Promise.all([
          occupantsApi.get(occupantId, { token }),
          tenantsApi.list({ token }),
        ]);

        if (!cancelled) {
          setOccupant(o || null);
          setTenants(Array.isArray(ts) ? ts : []);
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

  const isArchived = !!occupant?.archivedAt;

  // Match your earlier resident pages: keep it simple (no RBAC gating here)
  const canEditNow = !isArchived || isSysAdmin;
  const canArchiveNow = !isArchived;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveLink = canArchiveNow || canUnarchiveNow;

  const title = occupant?.name || "Occupant";

  const linkedTenants = useMemo(() => {
    if (!occupant) return [];
    return Array.isArray(occupant.tenants) ? occupant.tenants : [];
  }, [occupant]);

  const availableTenants = useMemo(() => {
    const linkedIds = new Set((linkedTenants || []).map((t) => t?.id).filter(Boolean));
    return (tenants || []).filter((t) => t?.id && !linkedIds.has(t.id));
  }, [tenants, linkedTenants]);

  const reload = async () => {
    const [o, ts] = await Promise.all([
      occupantsApi.get(occupantId, { token }),
      tenantsApi.list({ token }),
    ]);
    setOccupant(o || null);
    setTenants(Array.isArray(ts) ? ts : []);
  };

  const handleToggleArchive = async () => {
    if (!occupant) return;

    if (!isArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this occupant?\n\n" +
          "They will be hidden from active occupant lists. Only a system administrator can unarchive them."
      );
      if (!ok) return;
    } else {
      if (!isSysAdmin) {
        alert(
          "Only a system administrator can unarchive an archived occupant.\n\n" +
            "Please contact your system administrator if this needs to be reactivated."
        );
        return;
      }
    }

    try {
      setArchiving(true);
      await occupantsApi.toggleArchive(occupant.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to toggle occupant archived state", err);
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

  const handleUnlinkTenant = async (tenantId) => {
    if (!tenantId || !occupant?.id) return;

    const ok = window.confirm(
      "Unlink this occupant from this tenant?\n\n" +
        "This does NOT delete either record. It only removes the occupant↔tenant association."
    );
    if (!ok) return;

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

  if (loading) return <div className={ui.page}>Loading occupant…</div>;
  if (error)
    return (
      <div className={ui.page} style={{ color: "crimson" }}>
        Error loading occupant: {String(error?.message || error)}
      </div>
    );
  if (!occupant) return <div className={ui.page}>No data.</div>;

  return (
    <div className={ui.page}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/residents?tab=occupants">← Back to residents</Link>
      </div>

      {/* Header */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div>
            <h1 style={{ margin: 0 }}>{title}</h1>

            <div className={ui.headerLinksRow}>
              {canEditNow ? (
                <button type="button" className={ui.linkAction} onClick={goEditOccupant}>
                  Edit occupant
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
                  {isArchived ? "Unarchive occupant" : "Archive occupant"}
                </button>
              ) : (
                <span className={ui.linkActionDisabled}>
                  {isArchived ? "Unarchive occupant" : "Archive occupant"}
                </span>
              )}
            </div>

            {isArchived ? <div className={ui.muted}>(Archived – read-only for landlords)</div> : null}
          </div>
        </div>
      </div>

      {/* Occupant info */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}></div>
        <OccupantCard
          occupant={occupant}
          variant="detail"
        />
      </div>

      {/* Tenants */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Tenants</div>
          <div className={ui.sectionHint}>Direct link: Tenant ↔ Occupant</div>
        </div>

        {linkedTenants.length ? (
          <div className={ui.grid}>
            {linkedTenants.map((t) => {
              if (!t?.id) return null;

              const archived = !!t.archivedAt;
              const tenantame = t.name || t.email || "Unnamed tenant";

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
                      {unlinkingTenantId === t.id ? "Unlinking…" : "Unlink from occupant"}
                    </button>
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No tenants linked to this occupant yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={ui.linkAction}
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

          {isArchived ? (
            <div className={ui.muted} style={{ marginTop: 6 }}>
              Cannot manage links for an archived occupant.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
