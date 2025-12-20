//frontend/newsrc/features/residents/pages/occupants/LandlordOccupantDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { occupantsApi } from "@features/residents/api/occupants.api.js";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { ROLES } from "@lib/rbac/roles.js";

import ui from "@shared/styles/CardLayout.module.css";

function Card({ children, onClick, archived = false, clickable = true }) {
  return (
    <div
      className={`${ui.card} ${archived ? ui.cardArchived : ""}`}
      onClick={clickable ? onClick : undefined}
      style={{ cursor: clickable ? "pointer" : "default" }}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick?.();
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

function CardHeader({ title, badgeText, badgeTone = "idle" }) {
  const badgeClass =
    badgeTone === "active"
      ? ui.badgeActive
      : badgeTone === "archived"
        ? ui.badgeArchived
        : ui.badgeIdle;

  return (
    <div className={ui.cardHeader}>
      <div className={ui.cardTitle}>{title}</div>
      {badgeText ? <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span> : null}
    </div>
  );
}

function LinkageLine({ parts = [], hint }) {
  const cleaned = (parts || []).filter(Boolean);
  if (!cleaned.length) return null;

  return (
    <div className={ui.muted} style={{ marginTop: 6 }}>
      <div>
        <strong>Linkage: </strong>
        {cleaned.map((p, idx) => (
          <span key={`${p}-${idx}`}>
            {idx > 0 ? " → " : ""}
            <label>{p}</label>
          </span>
        ))}
      </div>
      {hint ? <div style={{ marginTop: 2 }}>{hint}</div> : null}
    </div>
  );
}

function showIfKnown(v) {
  if (v === null || v === undefined) return null;
  const s = String(v).trim();
  if (!s) return null;
  return s.toUpperCase() === "UNKNOWN" ? null : s;
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

  const isArchived = !!(occupant?.isArchived ?? occupant?.archived);

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

        <Card clickable={false} archived={isArchived}>
          <CardHeader
            title="Occupant Info"
            badgeText={isArchived ? "Archived" : "Occupant"}
            badgeTone={isArchived ? "archived" : "idle"}
          />
          <div className={ui.cardBody}>
            <div>Email: {occupant.email || "Not provided"}</div>
            <div>Phone: {occupant.phone || "Not provided"}</div>
            {occupant.relation ? <div>Relation: {occupant.relation}</div> : null}
            {occupant.age ? <div>Age: {occupant.age}</div> : null}
            {occupant.heightFeet && occupant.heightInches ? <div>Height: {occupant.heightFeet}' {occupant.heightInches}"</div> : null}
            {occupant.weight ? <div>Weight: {occupant.weight} pounds</div> : null}
            {showIfKnown(occupant.sex) ? <div>Sex: {showIfKnown(occupant.sex)}</div> : null}
            {showIfKnown(occupant.hairColor) ? <div>Hair color: {showIfKnown(occupant.hairColor)}</div> : null}
            {showIfKnown(occupant.eyeColor) ? <div>Eye Color: {showIfKnown(occupant.eyeColor)}</div> : null}
            {showIfKnown(occupant.bodyBuild) ? <div>Body build: {showIfKnown(occupant.bodyBuild)}</div> : null}
            {occupant.markings ? <div>Markings: {occupant.markings}</div> : null}
            {occupant.notes ? <div>Notes: {occupant.notes}</div> : null}
            {occupant.violations ? <div>Violations: {occupant.violations}</div> : null}
          </div>
        </Card>
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

              const archived = !!(t.isArchived ?? t.archived);
              const displayName = t.name || t.email || "Unnamed tenant";

              return (
                <Card
                  key={t.id}
                  archived={archived}
                  onClick={() => navigate(`/landlord/tenants/${t.id}`)}
                >
                  <CardHeader
                    title={displayName}
                    badgeText={archived ? "Archived" : "Tenant"}
                    badgeTone={archived ? "archived" : "idle"}
                  />
                  <div className={ui.cardBody}>
                    <LinkageLine parts={[displayName, title]} />
                  </div>

                  <div className={ui.inlineActions}>
                    <button
                      type="button"
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUnlinkTenant(t.id);
                      }}
                      disabled={unlinkingTenantId === t.id}
                    >
                      {unlinkingTenantId === t.id ? "Unlinking…" : "Unlink from occupant"}
                    </button>
                  </div>
                </Card>
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
