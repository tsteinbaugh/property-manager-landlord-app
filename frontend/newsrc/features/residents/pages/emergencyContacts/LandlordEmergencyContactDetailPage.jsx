// newsrc/features/residents/pages/emergencyContacts/LandlordEmergencyContactDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { emergencyContactsApi } from "@features/residents/api/emergencyContacts.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import EmergencyContactCard from "@features/residents/components/emergencyContacts/EmergencyContactCard";
import LinkageCard from "@shared/ui/cards/LinkageCard.jsx"

import ui from "@shared/styles/CardLayout.module.css";

export default function LandlordEmergencyContactDetailsPage() {
  const { emergencyContactId } = useParams();
  const navigate = useNavigate();
  const { isSysAdmin, effectiveRole, token } = useUser() || {};

  const role = isSysAdmin
    ? ROLES.SYSADMIN
    : typeof effectiveRole === "string"
      ? effectiveRole.toLowerCase()
      : ROLES.LANDLORD;

  const canUpdate = can(role, R.EMERGENCYCONTACTS, A.UPDATE);
  const canArchiveGrant = can(role, R.EMERGENCYCONTACTS, A.ARCHIVE);

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

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
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
    if (!emergencyContact) return;

    if (!isArchived) {
      if (!canArchiveGrant) {
        alert("You do not have permission to archive emergency contacts.");
        return;
      }

      const archiveReason = window.prompt(
        "Please provide a reason for archiving this emergency contact."
      );

      if (archiveReason === null) return;

      if (!archiveReason.trim()) {
        alert("Archiving requires a reason.");
        return;
      }

      const ok = window.confirm(
        "Are you sure you want to archive this emergency contact?\n\n" +
          "It will be hidden from active lists. Only a system administrator can unarchive it."
      );
      if (!ok) return;

      try {
        setArchiving(true);
        await emergencyContactsApi.toggleArchive(emergencyContact.id, {
          token,
          archiveReason: archiveReason.trim(),
        });
        await reload();
      } catch (err) {
        console.error("Failed to toggle emergency contact archive state", err);
        alert("Failed to change archive status. Check console for details.");
      } finally {
        setArchiving(false);
      }
      return;
    }

    if (!isSysAdmin) {
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
      console.error("Failed to toggle emergency contact archive state", err);
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

        <EmergencyContactCard
          emergencyContact={emergencyContact}
          variant="detail"
        />
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
                      {unlinkingTenantId === t.id ? "Unlinking…" : "Unlink from emergency contact"}
                    </button>
                  }
                />
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
