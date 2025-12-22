// newsrc/features/residents/pages/emergencyContacts/LandlordEmergencyContactDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { emergencyContactsApi } from "@features/residents/api/emergencyContacts.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";

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

function showIfBlank(v) {
  if (v === null || v === undefined) return "Not provided";
  const s = String(v).trim();
  return s ? s : "Not provided";
}

export default function LandlordEmergencyContactDetailsPage() {
  const { emergencyContactId } = useParams();
  const navigate = useNavigate();
  const { isSysAdmin, token } = useUser() || {};

  const [emergencyContact, setEmergencyContact] = useState(null);
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

        const [e, ts] = await Promise.all([
          emergencyContactsApi.get(emergencyContactId, { token }),
          tenantsApi.list({ token }),
        ]);

        if (!cancelled) {
          setEmergencyContact(e || null);
          setTenants(Array.isArray(ts) ? ts : []);
          if (!e) setError(new Error("Emergency contact not found"));
        }
      } catch (err) {
        console.error("Failed to load emergency contact", err);
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (emergencyContactId && token) load();
    else if (!emergencyContactId) {
      setLoading(false);
      setError(new Error("Missing emergency contact id"));
    }

    return () => {
      cancelled = true;
    };
  }, [emergencyContactId, token]);

  const isArchived = !!emergencyContact?.archivedAt;

  const canEditNow = !isArchived || isSysAdmin;
  const canArchiveNow = !isArchived;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveLink = canArchiveNow || canUnarchiveNow;

  const title = emergencyContact?.name || "Emergency contact";

  const linkedTenants = useMemo(() => {
    if (!emergencyContact) return [];
    return Array.isArray(emergencyContact.tenants) ? emergencyContact.tenants : [];
  }, [emergencyContact]);

  const availableTenants = useMemo(() => {
    const linkedIds = new Set((linkedTenants || []).map((t) => t?.id).filter(Boolean));
    return (tenants || []).filter((t) => t?.id && !linkedIds.has(t.id));
  }, [tenants, linkedTenants]);

  const reload = async () => {
    const [e, ts] = await Promise.all([
      emergencyContactsApi.get(emergencyContactId, { token }),
      tenantsApi.list({ token }),
    ]);
    setEmergencyContact(e || null);
    setTenants(Array.isArray(ts) ? ts : []);
  };

  const handleToggleArchive = async () => {
    if (!emergencyContact?.id) return;

    if (!isArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this emergency contact?\n\n" +
          "They will be hidden from active emergency contact lists. Only a system administrator can unarchive them."
      );
      if (!ok) return;
    } else if (!isSysAdmin) {
      alert(
        "Only a system administrator can unarchive an archived emergency contact.\n\n" +
          "Please contact your system administrator if this needs to be reactivated."
      );
      return;
    }

    try {
      setArchiving(true);
      await emergencyContactsApi.toggleArchive(emergencyContact.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to toggle emergency contact archived state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  const goEditEmergencyContact = () => {
    if (!emergencyContact?.id) return;
    const returnTo = encodeURIComponent(`${window.location.pathname}${window.location.search || ""}`);
    navigate(
      `/landlord/emergencyContacts/new?emergencyContactId=${emergencyContact.id}&returnTo=${returnTo}`
    );
  };

  const handleUnlinkTenant = async (tenantId) => {
    if (!tenantId || !emergencyContact?.id) return;

    const ok = window.confirm(
      "Unlink this emergency contact from this tenant?\n\n" +
        "This does NOT delete either record. It only removes the emergencyContact↔tenant association."
    );
    if (!ok) return;

    try {
      setUnlinkingTenantId(tenantId);
      await tenantsApi.unlinkEmergencyContact(tenantId, emergencyContact.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to unlink tenant from emergency contact", err);
      alert("Failed to unlink tenant. Check console for details.");
    } finally {
      setUnlinkingTenantId(null);
    }
  };

  if (loading) return <div className={ui.page}>Loading emergency contact…</div>;
  if (error)
    return (
      <div className={ui.page} style={{ color: "crimson" }}>
        Error loading emergency contact: {String(error?.message || error)}
      </div>
    );
  if (!emergencyContact) return <div className={ui.page}>No data.</div>;

  return (
    <div className={ui.page}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/residents?tab=emergencyContacts">← Back to residents</Link>
      </div>

      {/* Header */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div>
            <h1 style={{ margin: 0 }}>{title}</h1>

            <div className={ui.headerLinksRow}>
              {canEditNow ? (
                <button type="button" className={ui.linkAction} onClick={goEditEmergencyContact}>
                  Edit emergency contact
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
                  {isArchived ? "Unarchive emergency contact" : "Archive emergency contact"}
                </button>
              ) : (
                <span className={ui.linkActionDisabled}>
                  {isArchived ? "Unarchive emergency contact" : "Archive emergency contact"}
                </span>
              )}
            </div>

            {isArchived ? <div className={ui.muted}>(Archived – read-only for landlords)</div> : null}
          </div>
        </div>
      </div>

      {/* Emergency contact info */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}></div>

        <Card clickable={false} archived={isArchived}>
          <CardHeader
            title="Emergency Contact Info"
            badgeText={isArchived ? "Archived" : "Emergency contact"}
            badgeTone={isArchived ? "archived" : "idle"}
          />
          <div className={ui.cardBody}>
            <div>Phone: {showIfBlank(emergencyContact.phone)}</div>
            <div>Email: {showIfBlank(emergencyContact.email)}</div>
            <div>
              Address: {emergencyContact.address1 || "—"}
              {emergencyContact.city || emergencyContact.state || emergencyContact.postalCode ? (
                <div className={ui.muted}>
                  {[emergencyContact.city || "", emergencyContact.state || "", emergencyContact.postalCode || ""]
                    .filter(Boolean)
                    .join(", ")}
                </div>
              ) : null}
            </div>
            {emergencyContact.relation ? <div>Relation: {emergencyContact.relation}</div> : null}
            {emergencyContact.notes ? <div>Notes: {emergencyContact.notes}</div> : null}
            {emergencyContact.violations ? <div>Violations: {emergencyContact.violations}</div> : null}
          </div>
        </Card>
      </div>

      {/* Tenants */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Tenants</div>
          <div className={ui.sectionHint}>Direct link: Tenant ↔ Emergency Contact</div>
        </div>

        {linkedTenants.length ? (
          <div className={ui.grid}>
            {linkedTenants.map((t) => {
              if (!t?.id) return null;

              const archived = !!t.archivedAt;
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
                      {unlinkingTenantId === t.id ? "Unlinking…" : "Unlink from emergency contact"}
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No tenants linked to this emergency contact yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={ui.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(
                `/landlord/tenants/new?emergencyContactId=${emergencyContact.id}&returnTo=${returnTo}`
              );
            }}
            disabled={isArchived}
            aria-disabled={isArchived ? "true" : "false"}
          >
            Add a tenant (new or existing)
          </button>

          {isArchived ? (
            <div className={ui.muted} style={{ marginTop: 6 }}>
              Cannot manage links for an archived emergency contact.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
