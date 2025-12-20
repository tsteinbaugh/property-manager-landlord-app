// newsrc/features/residents/pages/pets/LandlordPetDetailsPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { petsApi } from "@features/residents/api/pets.api.js";
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

  const [pet, setPet] = useState(null);
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

        const [p, ts] = await Promise.all([
          petsApi.get(petId, { token }),
          tenantsApi.list({ token }),
        ]);

        if (!cancelled) {
          setPet(p || null);
          setTenants(Array.isArray(ts) ? ts : []);
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

  const isArchived = !!(pet?.isArchived ?? pet?.archived);

  const canEditNow = !isArchived || isSysAdmin;
  const canArchiveNow = !isArchived;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveLink = canArchiveNow || canUnarchiveNow;

  const title = pet?.name || "Pet";

  const linkedTenants = useMemo(() => {
    if (!pet) return [];
    return Array.isArray(pet.tenants) ? pet.tenants : [];
  }, [pet]);

  const availableTenants = useMemo(() => {
    const linkedIds = new Set((linkedTenants || []).map((t) => t?.id).filter(Boolean));
    return (tenants || []).filter((t) => t?.id && !linkedIds.has(t.id));
  }, [tenants, linkedTenants]);

  const reload = async () => {
    const [p, ts] = await Promise.all([
      petsApi.get(petId, { token }),
      tenantsApi.list({ token }),
    ]);
    setPet(p || null);
    setTenants(Array.isArray(ts) ? ts : []);
  };

  const handleToggleArchive = async () => {
    if (!pet) return;

    if (!isArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this pet?\n\n" +
          "They will be hidden from active pet lists. Only a system administrator can unarchive them."
      );
      if (!ok) return;
    } else {
      if (!isSysAdmin) {
        alert(
          "Only a system administrator can unarchive an archived pet.\n\n" +
            "Please contact your system administrator if this needs to be reactivated."
        );
        return;
      }
    }

    try {
      setArchiving(true);
      await petsApi.toggleArchive(pet.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to toggle pet archived state", err);
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

  const handleUnlinkTenant = async (tenantId) => {
    if (!tenantId || !pet?.id) return;

    const ok = window.confirm(
      "Unlink this pet from this tenant?\n\n" +
        "This does NOT delete either record. It only removes the pet↔tenant association."
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

  if (loading) return <div className={ui.page}>Loading pet…</div>;
  if (error)
    return (
      <div className={ui.page} style={{ color: "crimson" }}>
        Error loading pet: {String(error?.message || error)}
      </div>
    );
  if (!pet) return <div className={ui.page}>No data.</div>;

  const type = pet.type ? String(pet.type).trim() : "";
  const breed = pet.breed ? String(pet.breed).trim() : "";
  const weight =
    pet.weightLb === null || pet.weightLb === undefined || pet.weightLb === ""
      ? ""
      : String(pet.weightLb);

  return (
    <div className={ui.page}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/residents?tab=pets">← Back to residents</Link>
      </div>

      {/* Header */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div>
            <h1 style={{ margin: 0 }}>{title}</h1>

            <div className={ui.headerLinksRow}>
              {canEditNow ? (
                <button type="button" className={ui.linkAction} onClick={goEditPet}>
                  Edit pet
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
                  {isArchived ? "Unarchive pet" : "Archive pet"}
                </button>
              ) : (
                <span className={ui.linkActionDisabled}>
                  {isArchived ? "Unarchive pet" : "Archive pet"}
                </span>
              )}
            </div>

            {isArchived ? <div className={ui.muted}>(Archived – read-only for landlords)</div> : null}
          </div>
        </div>
      </div>

      {/* Pet info */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}></div>

        <Card clickable={false} archived={isArchived}>
          <CardHeader
            title="Pet Info"
            badgeText={isArchived ? "Archived" : "Pet"}
            badgeTone={isArchived ? "archived" : "idle"}
          />
          <div className={ui.cardBody}>
            {pet.type ? <div>Type of pet:{pet.type}</div> : null}
            {pet.breed ? <div>Breed: {pet.breed}</div> : null}
            {pet.weightLbs ? <div> Weight (pounds):{pet.weightLb}</div> : null}
            {pet.age ? <div>Age:{pet.age}</div> : null}
            {pet.license ? <div>License: {pet.license}</div> : null}
            {pet.notes ? <div>Notes: {pet.notes}</div> : null}
            {pet.violations ? <div>Violations: {pet.violations}</div> : null}
          </div>
        </Card>
      </div>

      {/* Tenants */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Tenants</div>
          <div className={ui.sectionHint}>Direct link: Tenant ↔ Pet</div>
        </div>

        {linkedTenants.length ? (
          <div className={ui.grid}>
            {linkedTenants.map((t) => {
              if (!t?.id) return null;

              const archived = !!(t.isArchived ?? t.archived);
              const displayName = t.name || t.email || "Unnamed tenant";

              return (
                <Card key={t.id} archived={archived} onClick={() => navigate(`/landlord/tenants/${t.id}`)}>
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
                      {unlinkingTenantId === t.id ? "Unlinking…" : "Unlink from pet"}
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No tenants linked to this pet yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={ui.linkAction}
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

          {isArchived ? (
            <div className={ui.muted} style={{ marginTop: 6 }}>
              Cannot manage links for an archived pet.
            </div>
          ) : null}
        </div>
      </div>

      {/* If you later want a “Link existing tenant” picker on this page,
          this is where it would go. For now, matching Occupants: tenant form owns linking. */}
    </div>
  );
}
