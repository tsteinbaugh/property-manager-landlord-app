// newsrc/features/residents/pages/tenants/LandlordTenantDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import LinkageCard from "@shared/ui/cards/LinkageCard.jsx";
import TenantCard from "@features/tenants/components/TenantCard.jsx";
import ArchivedHeaderActions from "@shared/ui/actions/ArchivedHeaderActions.jsx";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

function leaseLabel(lease) {
  const base =
    lease?.propertyName ||
    lease?.property?.name ||
    (lease?.property?.address1 && lease?.property?.address2
      ? `${lease.property.address1} ${lease.property.address2}`
      : lease?.property?.address1) ||
    null;
    "";
  return base ? `Lease for ${base}` : "Lease";
}

export default function LandlordTenantDetailPage() {
  const { tenantId } = useParams();
  const { token, effectiveRole, isSysAdmin } = useUser() || {};
  const navigate = useNavigate();

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
    ? ROLES.SYSADMIN
    : typeof effectiveRole === "string"
      ? effectiveRole.toLowerCase()
      : effectiveRole || ROLES.LANDLORD;

  const canUpdate = can(role, R.TENANTS, A.UPDATE);
  const canArchiveGrant = can(role, R.TENANTS, A.ARCHIVE);

  const [showArchivedAttachs, setShowArchivedAttachs] = useState(false);

  const [tenant, setTenant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isArchiving, setArchiving] = useState(false);

  const [unlinkingLeaseId, setUnlinkingLeaseId] = useState(null);
  const [unlinkingOccupantId, setUnlinkingOccupantId] = useState(null);
  const [unlinkingPetId, setUnlinkingPetId] = useState(null);
  const [unlinkingEmergencyContactId, setUnlinkingEmergencyContactId] = useState(null);
  const [unlinkingVehicleId, setUnlinkingVehicleId] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const row = await tenantsApi.get(tenantId, { token, includeArchivedAttachments: true });
        if (!cancelled) setTenant(row || null);
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (tenantId && token) load();
    else if (!tenantId) {
      setLoading(false);
      setError(new Error("Missing tenant id"));
    }
    
    return () => {
      cancelled = true;
    };
  }, [tenantId, token]);

  const isArchived = !!(tenant?.archivedAt || tenant?.archived);

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;

  const title = tenant?.name || tenant?.email || "Tenant";

  // Dedupe leases
  const leaseTenantsRaw = Array.isArray(tenant?.leaseTenants) ? tenant.leaseTenants : [];
  const leaseItems = useMemo(() => {
    const seen = new Set();
    const out = [];
    for (const lt of leaseTenantsRaw) {
      const lease = lt?.lease;
      if (!lease?.id) continue;
      if (seen.has(lease.id)) continue;
      seen.add(lease.id);
      out.push({ lt, lease });
    }
    return out;
  }, [leaseTenantsRaw]);

  // Properties aggregated via leases (indirect)
  const propertyGroups = useMemo(() => {
    const map = new Map();
    for (const { lease } of leaseItems) {
      const property = lease?.property || null;
      if (!property?.id) continue;
      if (!map.has(property.id)) map.set(property.id, { property, leases: [] });
      map.get(property.id).leases.push(lease);
    }
    return Array.from(map.values());
  }, [leaseItems]);

  const leasesMissingPropertyCount = useMemo(() => {
    let n = 0;
    for (const { lease } of leaseItems) {
      if (!lease?.property?.id) n += 1;
    }
    return n;
  }, [leaseItems]);

  const occupantLinks = Array.isArray(tenant?.occupantLinks) ? tenant.occupantLinks : [];
  const petLinks = Array.isArray(tenant?.petLinks) ? tenant.petLinks : [];
  const emergencyContactLinks = Array.isArray(tenant?.emergencyContactLinks)
    ? tenant.emergencyContactLinks
    : [];
  const vehicleLinks = Array.isArray(tenant?.vehicleLinks) ? tenant.vehicleLinks : [];

  const reload = async () => {
    const row = await tenantsApi.get(tenantId, { token, includeArchivedAttachments: true });
    setTenant(row || null);
    return row || null;
  };

  const handleToggleArchive = async () => {
    if (!tenant) return;

    if (!isArchived) {
      if (!canArchiveGrant) {
        alert("You do not have permission to archive tenants.");
        return;
      }

      const archiveReason = window.prompt(
        "Please provide a reason for archiving this tenant."
      );
      if (archiveReason === null) return;

      if (!archiveReason.trim()) {
        alert("Archiving requires a reason.");
        return;
      }

      const ok = window.confirm(
        "Are you sure you want to archive this tenant?\n\n" +
          "It will be hidden from active lists. Only a system administrator can unarchive it."
      );
      if (!ok) return;

      try {
        setArchiving(true);
        await tenantsApi.toggleArchive(tenant.id, {
          token,
          archiveReason: archiveReason.trim(),
        });
        await reload();
      } catch (err) {
        console.error("Failed to toggle tenant archive state", err);
        alert("Failed to change archive status. Check console for details.");
      } finally {
        setArchiving(false);
      }
      return;
    }

    if (!isSysAdmin) {
      alert(
        "Only a system administrator can unarchive an archived tenant.\n\n" +
          "Please contact your system administrator if this needs to be reactivated."
      );
      return;
    }

    try {
      setArchiving(true);
      await tenantsApi.toggleArchive(tenant.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to toggle tenant archive state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  const goEditTenant = () => {
    if (!tenant?.id) return;
    const returnTo = encodeURIComponent(
      `${window.location.pathname}${window.location.search || ""}`
    );
    navigate(`/landlord/tenants/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
  };

  const handleUnlinkOccupantFromTenant = async (occupantId) => {
    if (!tenant?.id || !occupantId) return;

    const ok = window.confirm(
      "Unlink this occupant from this tenant?\n\nThis does NOT delete either record, it only removes the tenant↔occuapnt association."
    );
    if (!ok) return;

    try {
      setUnlinkingOccupantId(occupantId);
      await tenantsApi.unlinkOccupant(tenant.id, occupantId, { token });
      await reload();
    } catch (err) {
      console.error("Failed to unlink occupant from tenant", err);
      alert("Failed to unlink occupant. Check console for details.");
    } finally {
      setUnlinkingOccupantId(null);
    }
  };

  const handleUnlinkPetFromTenant = async (petId) => {
    if (!tenant?.id || !petId) return;

    const ok = window.confirm(
      "Unlink this pet from this tenant?\n\nThis does NOT delete either record, it only removes the tenant↔pet association."
    );
    if (!ok) return;

    try {
      setUnlinkingPetId(petId);
      await tenantsApi.unlinkPet(tenant.id, petId, { token });
      await reload();
    } catch (err) {
      console.error("Failed to unlink pet from tenant", err);
      alert("Failed to unlink pet. Check console for details.");
    } finally {
      setUnlinkingPetId(null);
    }
  };

  const handleUnlinkEmergencyContactFromTenant = async (emergencyContactId) => {
    if (!tenant?.id || !emergencyContactId) return;

    const ok = window.confirm(
      "Unlink this emergency contact from this tenant?\n\nThis does NOT delete either record, it only removes the tenant↔emergency contact association."
    );
    if (!ok) return;

    try {
      setUnlinkingEmergencyContactId(emergencyContactId);
      await tenantsApi.unlinkEmergencyContact(tenant.id, emergencyContactId, { token });
      await reload();
    } catch (err) {
      console.error("Failed to unlink emergency contact from tenant", err);
      alert("Failed to unlink emergency contact. Check console for details.");
    } finally {
      setUnlinkingEmergencyContactId(null);
    }
  };

  const handleUnlinkVehicleFromTenant = async (vehicleIdToUnlink) => {
    if (!tenant?.id || !vehicleIdToUnlink) return;

    const ok = window.confirm(
      "Unlink this tenant from this vehicle?\n\nThis does NOT delete either record, it only removes the tenant↔vehicle association."
    );
    if (!ok) return;

    try {
      setUnlinkingVehicleId(vehicleIdToUnlink);
      await vehiclesApi.unlinkTenant(vehicleIdToUnlink, tenant.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to unlink tenant from vehicle", err);
      alert("Failed to unlink tenant. Check console for details.");
    } finally {
      setUnlinkingVehicleId(null);
    }
  };
  
const handleUnlinkLeaseFromTenant = async (leaseId) => {
  if (!tenant?.id || !leaseId) return;

  const ok = window.confirm(
    "Unlink this lease from this tenant?\n\nThis does NOT delete either record, it only removes the lease↔tenant association."
  );
  if (!ok) return;

  try {
    setUnlinkingLeaseId(leaseId);
    await leasesApi.unlinkTenant(leaseId, tenant.id, { token });
    await reload();
  } catch (err) {
    console.error("Failed to unlink lease from tenant", err);
    alert("Failed to unlink lease. Check console for details.");
  } finally {
    setUnlinkingLeaseId(null);
  }
};

  if (loading) return <div className={page.page}>Loading tenant…</div>;
  if (error)
    return (
      <div className={page.page} style={{ color: "crimson" }}>
        Error loading tenant: {String(error.message || error)}
      </div>
    );
  if (!tenant) return <div className={page.page}>No data.</div>;

  return (
    <div className={page.page}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/residents">← Back to residents</Link>
      </div>

      {/* Header */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <h1 style={{ margin: 0 }}>{title}</h1>

            <ArchivedHeaderActions
              isArchived={isArchived}
              isBusy={isArchiving}
              archivedMessage="Cannot edit an archived tenant. To edit, contact a system admin to unarchive first."
              canEdit={canEditNow}
              onEdit={goEditTenant}
              editLabel="Edit tenant"
              canArchive={canArchiveNow}
              onArchive={handleToggleArchive}
              archiveLabel="Archive tenant"
              canUnarchive={canUnarchiveNow}
              onUnarchive={handleToggleArchive}
              unarchiveLabel="Unarchive tenant"
              card={card}
              shared={shared}
            />
          </div>
        </div>
      </div>

      {/* Tenant info */}
      <div className={page.section}>
        <div className={page.sectionHeader}></div>

        <TenantCard
          tenant={tenant}
          variant="detail"
          onArchiveAttachment={async (attachId, reason) => {
            await tenantsApi.archiveAttachment(tenant.id, attachId, {
              token,
              archiveReason: reason,
            });
            await reload();
          }}
          showArchivedAttachs={showArchivedAttachs}
          onToggleShowArchivedAttachs={() => {
            setShowArchivedAttachs((v) => !v);
          }}
        />
      </div>

      {/* Leases (DIRECT) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Leases</div>
          <div className={page.sectionHint}>Direct link: Lease ↔ Tenant</div>
        </div>

        {leaseItems.length ? (
          <div className={page.grid}>
            {leaseItems.map(({ lease }) => {
              const archived = !!lease.archivedAt;
              const leaseName = leaseLabel(lease);

              return (
                <LinkageCard
                  key={lease.id}
                  title={leaseName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Lease"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/leases/${lease.id}`)}
                  linkageParts={[leaseName, title]}
                  footer={
                    <button
                      type="button"
                      className={`${card.inlineAction} ${card.inlineActionDanger}`}
                      onClick={(le) => {
                        le.stopPropagation();
                        handleUnlinkLeaseFromTenant(lease.id);
                      }}
                      disabled={unlinkingLeaseId === lease.id}
                    >
                      {unlinkingLeaseId === lease.id ? "Unlinking…" : "Unlink from tenant"}
                    </button>
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>No leases linked to this tenant yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={card.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/leases/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
            }}
            disabled={isArchived}
            aria-disabled={isArchived ? "true" : "false"}            
          >
            Add a lease (new or existing)
          </button>
        </div>
        {isArchived ? (
          <div className={shared.muted}>
            Cannot manage links for an archived tenant.
          </div>
        ) : null}        
      </div>

      {/* Properties (INDIRECT via leases) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Properties</div>
          <div className={page.sectionHint}>Indirect link: Property → Lease → Tenant</div>
        </div>

        {propertyGroups.length ? (
          <div className={page.grid}>
            {propertyGroups.map(({ property, leases }) => {
              const archived = !!property.archivedAt;
              const propertyName =
                property.name || property.address1 || property.address || "Property";

              const firstLease = Array.isArray(leases) ? leases[0] : null;
              const firstLeaseLabel = firstLease ? leaseLabel(firstLease) : null;

              return (
                <LinkageCard
                  key={property.id}
                  title={propertyName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Property"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/properties/${property.id}`)}
                  linkageParts={[propertyName, firstLeaseLabel, title]}
                  footer={<div className={`${card.inlineAction}`}>Manage link on Lease</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>No properties associated with this tenant yet. Link via lease first.</div>
        )}

        {leasesMissingPropertyCount > 0 ? (
          <div className={shared.muted} style={{ marginTop: 8 }}>
            Note: {leasesMissingPropertyCount} lease
            {leasesMissingPropertyCount === 1 ? "" : "s"} linked to this tenant{" "}
            {leasesMissingPropertyCount === 1 ? "is" : "are"} not linked to a property yet.
          </div>
        ) : null}
      </div>

      {/* Occupants (DIRECT) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Occupants</div>
          <div className={page.sectionHint}>Direct link: Occupant ↔ Tenant</div>
        </div>

        {occupantLinks.length ? (
          <div className={page.grid}>
            {occupantLinks.map((link) => {
              const o = link?.occupant;
              if (!o?.id) return null;

              const archived = !!o.archivedAt;
              const occupantName = o.name || "Unnamed occupant";

              return (
                <LinkageCard
                  key={o.id}
                  title={occupantName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Occupant"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/occupants/${o.id}`)}
                  linkageParts={[occupantName, title]}
                  footer={
                    <button
                      type="button"
                      className={`${card.inlineAction} ${card.inlineActionDanger}`}
                      onClick={(oc) => {
                        oc.stopPropagation();
                        handleUnlinkOccupantFromTenant(o.id);
                      }}
                      disabled={unlinkingOccupantId === o.id}
                    >
                      {unlinkingOccupantId === o.id ? "Unlinking…" : "Unlink from tenant"}
                    </button>
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>No occupants linked to this tenant yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={card.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/occupants/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
            }}
            disabled={isArchived}
            aria-disabled={isArchived ? "true" : "false"}            
          >
            Add an occupant (new or existing)
          </button>
        </div>
        {isArchived ? (
          <div className={shared.muted}>
            Cannot manage links for an archived tenant.
          </div>
        ) : null}        
      </div>

      {/* Pets (DIRECT) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Pets</div>
          <div className={page.sectionHint}>Direct link: Pet ↔ Tenant</div>
        </div>

        {petLinks.length ? (
          <div className={page.grid}>
            {petLinks.map((link) => {
              const p = link?.pet;
              if (!p?.id) return null;

              const archived = !!p.archivedAt;
              const petName = p.name || "Unnamed pet";

              return (
                <LinkageCard
                  key={p.id}
                  title={petName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Pet"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/pets/${p.id}`)}
                  linkageParts={[petName, title]}
                  footer={
                    <button
                      type="button"
                      className={`${card.inlineAction} ${card.inlineActionDanger}`}
                      onClick={(pe) => {
                        pe.stopPropagation();
                        handleUnlinkPetFromTenant(p.id);
                      }}
                      disabled={unlinkingPetId === p.id}
                    >
                      {unlinkingPetId === p.id ? "Unlinking…" : "Unlink from tenant"}
                    </button>
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>No pets linked to this tenant yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={card.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/pets/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
            }}
            disabled={isArchived}
            aria-disabled={isArchived ? "true" : "false"}            
          >
            Add a pet (new or existing)
          </button>
        </div>
        {isArchived ? (
          <div className={shared.muted}>
            Cannot manage links for an archived tenant.
          </div>
        ) : null}        
      </div>

      {/* Emergency contacts (DIRECT) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Emergency Contacts</div>
          <div className={page.sectionHint}>Direct link: Emergency Contact ↔ Tenant</div>
        </div>

        {emergencyContactLinks.length ? (
          <div className={page.grid}>
            {emergencyContactLinks.map((link) => {
              const e = link?.emergencyContact;
              if (!e?.id) return null;

              const emergencyContactName = e.name || "Unnamed emergency contact";
              const archived = !!e.archivedAt;

              return (
                <LinkageCard
                  key={e.id}
                  title={emergencyContactName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Emergency Contact"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/emergencyContacts/${e.id}`)}
                  linkageParts={[emergencyContactName, title]}
                  footer={
                    <button
                      type="button"
                      className={`${card.inlineAction} ${card.inlineActionDanger}`}
                      onClick={(ev) => {
                        ev.stopPropagation();
                        handleUnlinkEmergencyContactFromTenant(e.id);
                      }}
                      disabled={unlinkingEmergencyContactId === e.id}
                    >
                      {unlinkingEmergencyContactId === e.id
                        ? "Unlinking…"
                        : "Unlink from tenant"}
                    </button>
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>No emergency contacts linked to this tenant yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={card.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(
                `/landlord/emergencyContacts/new?tenantId=${tenant.id}&returnTo=${returnTo}`
              );
            }}
            disabled={isArchived}
            aria-disabled={isArchived ? "true" : "false"}            
          >
            Add an emergency contact (new or existing)
          </button>
        </div>
        {isArchived ? (
          <div className={shared.muted}>
            Cannot manage links for an archived tenant.
          </div>
        ) : null}        
      </div>

      {/* Vehicles (DIRECT) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Vehicles</div>
          <div className={page.sectionHint}>Direct link: Vehicle ↔ Tenant</div>
        </div>

        {vehicleLinks.length ? (
          <div className={page.grid}>
            {vehicleLinks.map((link) => {
              const v = link?.vehicle;
              if (!v?.id) return null;

              const archived = !!v.archivedAt;
              const vehicleName =
                v.permit ||
                v.plate ||
                [v.year ? `${v.year},` : null, v.make, v.model].filter(Boolean).join(" ") ||
                "Unnamed vehicle";

              return (
                <LinkageCard
                  key={v.id}
                  title={vehicleName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Vehicle"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/vehicles/${v.id}`)}
                  linkageParts={[vehicleName, title]}
                  footer={
                    <button
                      type="button"
                      className={`${card.inlineAction} ${card.inlineActionDanger}`}
                      onClick={(vi) => {
                        vi.stopPropagation();
                        handleUnlinkVehicleFromTenant(v.id);
                      }}
                      disabled={unlinkingVehicleId === v.id}
                    >
                      {unlinkingVehicleId === v.id ? "Unlinking…" : "Unlink from tenant"}
                    </button>
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>No vehicles linked to this tenant yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={card.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/vehicles/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
            }}
            disabled={isArchived}
            aria-disabled={isArchived ? "true" : "false"}            
          >
            Add a vehicle (new or existing)
          </button>
        </div>
        {isArchived ? (
          <div className={shared.muted}>
            Cannot manage links for an archived tenant.
          </div>
        ) : null}
      </div>
    </div>
  );
}
