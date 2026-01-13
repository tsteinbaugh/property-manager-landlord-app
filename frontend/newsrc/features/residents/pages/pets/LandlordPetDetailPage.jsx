// newsrc/features/residents/pages/pets/LandlordPetDetailsPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { petsApi } from "@features/residents/api/pets.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import PetCard from "@features/residents/components/pets/PetCard.jsx"
import LinkageCard from "@shared/ui/cards/LinkageCard.jsx"
import ArchivedHeaderActions from "@shared/ui/actions/ArchivedHeaderActions.jsx";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

export default function LandlordPetDetailsPage() {
  const { petId } = useParams();
  const navigate = useNavigate();
  const { effectiveRole, isSysAdmin, token } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
      ? ROLES.SYSADMIN
      : typeof effectiveRole === "string"
        ? effectiveRole.toLowerCase()
        : effectiveRole || ROLES.LANDLORD;

  const canUpdate = can(role, R.PETS, A.UPDATE);
  const canArchiveGrant = can(role, R.PETS, A.ARCHIVE);

  const [pet, setPet] = useState(null);
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

        const p = await petsApi.get(petId, { token });

        if (!cancelled) {
          setPet(p || null);
          if (!p) setError(new Error("Pet not found"));
        }
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (petId && token) load();
    else if (!petId) {
      setLoading(false);
      setError(new Error("Missing pet id"));
    }

    return () => {
      cancelled = true;
    };
  }, [petId, token]);

  const isArchived = !!(pet?.archivedAt ||  pet?.archived);

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveLink = canArchiveNow || canUnarchiveNow;

  const title = pet?.name || "Pet";

  const linkedTenants = useMemo(() => {
    if (!pet) return [];
    return Array.isArray(pet.tenants) ? pet.tenants : [];
  }, [pet]);

  const reload = async () => {
    const p = await petsApi.get(petId, { token });
    setPet(p || null);
  };

  const handleToggleArchive = async () => {
    if (!pet) return;

    if (!isArchived) {
      if (!canArchiveGrant) {
        alert("You do not have permission to archive pets.");
        return;
      }

      const archiveReason = window.prompt(
        "Please provide a reason for archiving this pet."
      );

      if (archiveReason === null) return;

      if (!archiveReason.trim()) {
        alert("Archiving requires a reason.");
        return;
      }

      const ok = window.confirm(
        "Are you sure you want to archive this pet?\n\n" +
          "It will be hidden from active lists. Only a system administrator can unarchive it."
      );
      if (!ok) return;

      try {
        setArchiving(true);
        await petsApi.toggleArchive(pet.id, {
          token,
          archiveReason: archiveReason.trim(),
        });
        await reload();
      } catch (err) {
        console.error("Failed to toggle pet archive state", err);
        alert("Failed to change archive status. Check console for details.");
      } finally {
        setArchiving(false);
      }
      return;
    }

    if (!isSysAdmin) {
      alert(
        "Only a system administrator can unarchive an archived pet.\n\n" +
          "Please contact your system administrator if this needs to be reactivated."
      );
      return;
    }

    try {
      setArchiving(true);
      await petsApi.toggleArchive(pet.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to toggle pet archive state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  const goEditPet = () => {
    if (!pet?.id) return;
    const returnTo = encodeURIComponent(`${window.location.pathname}${window.location.search || ""}`);
    navigate(`/landlord/pets/new?petId=${pet.id}&returnTo=${returnTo}`);
  };

  const handleUnlinkPetFromTenant = async (tenantId) => {
    if (!tenantId || !pet?.id) return;

    const ok = window.confirm(
      "Unlink this pet from this tenant?\n\nThis does NOT delete either record. It only removes the pet↔tenant association."
    );
    if (!ok) return;

    try {
      setUnlinkingTenantId(tenantId);
      await tenantsApi.unlinkPet(tenantId, pet.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to unlink tenant from pet", err);
      alert("Failed to unlink tenant. Check console for details.");
    } finally {
      setUnlinkingTenantId(null);
    }
  };

  if (loading) return <div className={page.page}>Loading pet…</div>;
  if (error)
    return (
      <div className={page.page} style={{ color: "crimson" }}>
        Error loading pet: {String(error?.message || error)}
      </div>
    );
  if (!pet) return <div className={page.page}>No data.</div>;

  return (
    <div className={page.page}>
      <div className={page.header}>
        <Link to="/landlord/residents?tab=pets">← Back to residents</Link>
      </div>

      {/* Header */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <h1 className={page.title}>{title}</h1>

            <ArchivedHeaderActions
              isArchived={isArchived}
              isBusy={isArchiving}
              archivedMessage="Cannot edit an archived pet. To edit, contact a system admin to unarchive first."
              canEdit={canEditNow}
              onEdit={goEditPet}
              editLabel="Edit pet"
              canArchive={canArchiveNow}
              onArchive={handleToggleArchive}
              archiveLabel="Archive pet"
              canUnarchive={canUnarchiveNow}
              onUnarchive={handleToggleArchive}
              unarchiveLabel="Unarchive pet"
              card={card}
              shared={shared}
            />
          </div>
        </div>
      </div>

      {/* Pet info */}
      <div className={page.section}>
        <PetCard pet={pet} variant="detail" />
      </div>

      {/* Tenants */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Tenants</div>
          <div className={page.sectionHint}>Direct link: Tenant ↔ Pet</div>
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
                      onClick={(pe) => {
                        pe.stopPropagation();
                        handleUnlinkPetFromTenant(t.id);
                      }}
                      disabled={unlinkingTenantId === t.id}
                    >
                      {unlinkingTenantId === t.id ? "Unlinking…" : "Unlink from pet"}
                    </button>
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>No tenants linked to this pet yet.</div>
        )}

        <div className={card.formActions}>
          <button
            type="button"
            className={card.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/tenants/new?petId=${pet.id}&returnTo=${returnTo}`);
            }}
            disabled={isArchived}
            aria-disabled={isArchived ? "true" : "false"}
          >
            Add a tenant (new or existing)
          </button>
        </div>

        {isArchived ? (
          <div className={shared.muted}>
            Cannot manage links for an archived pet.
          </div>
        ) : null}
      </div>
    </div>
  );
}
