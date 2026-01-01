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

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

export default function LandlordEmergencyContactDetailsPage() {
  const { emergencyContactId } = useParams();
  const navigate = useNavigate();
  const { isSysAdmin, effectiveRole, token } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
      ? ROLES.SYSADMIN
      : typeof effectiveRole === "string"
        ? effectiveRole.toLowerCase()
        : effectiveRole || ROLES.LANDLORD;

  const canUpdate = can(role, R.EMERGENCYCONTACTS, A.UPDATE);
  const canArchiveGrant = can(role, R.EMERGENCYCONTACTS, A.ARCHIVE);

  const [emergencyContact, setEmergencyContact] = useState(null);
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

        const e = await emergencyContactsApi.get(emergencyContactId, { token });

        if (!cancelled) {
          setEmergencyContact(e || null);
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

  const reload = async () => {
    const e = await emergencyContactsApi.get(emergencyContactId, { token });
    setEmergencyContact(e || null);
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

  if (loading) return <div className={page.page}>Loading emergency contact…</div>;
  if (error)
    return (
      <div className={page.page} style={{ color: "crimson" }}>
        Error loading emergency contact: {String(error?.message || error)}
      </div>
    );
  if (!emergencyContact) return <div className={page.page}>No data.</div>;

  return (
    <div className={page.page}>
      <div className={page.header}>
        <Link to="/landlord/residents?tab=emergencyContacts">← Back to residents</Link>
      </div>

      {/* Header */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <h1 className={page.title}>{title}</h1>

            <div className={card.headerLinksRow}>
              {canEditNow ? (
                <button type="button" className={card.linkAction} onClick={goEditEmergencyContact}>
                  Edit emergency contact
                </button>
              ) : null}

              {showArchiveLink ? (
                <button
                  type="button"
                  className={card.linkAction}
                  onClick={handleToggleArchive}
                  disabled={isArchiving}
                  aria-disabled={isArchiving ? "true" : "false"}
                >
                  {isArchived ? "Unarchive emergency contact" : "Archive emergency contact"}
                </button>
              ) : (
                <span className={card.linkActionDisabled}>
                  {isArchived ? "Unarchive emergency contact" : "Archive emergency contact"}
                </span>
              )}
            </div>

            {isArchived ? <div className={shared.muted}>(Archived – read-only for landlords)</div> : null}
          </div>
        </div>
      </div>

      {/* Emergency contact info */}
      <div className={page.section}>
        <EmergencyContactCard emergencyContact={emergencyContact} variant="detail" />
      </div>

      {/* Tenants */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Tenants</div>
          <div className={page.sectionHint}>Direct link: Tenant ↔ Emergency Contact</div>
        </div>

        {linkedTenants.length ? (
          <div className={page.grid}>
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
                      className={`${card.inlineAction} ${card.inlineActionDanger}`}
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
          <div className={shared.muted}>No tenants linked to this emergency contact yet.</div>
        )}

        <div className={card.formActions}>
          <button
            type="button"
            className={card.linkAction}
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
            <div className={shared.muted}>
              Cannot manage links for an archived emergency contact.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
