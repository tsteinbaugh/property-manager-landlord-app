// newsrc/features/residents/pages/tenants/LandlordTenantDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";
import LinkageCard from "@shared/ui/cards/LinkageCard.jsx";
import TenantCard from "@features/tenants/components/TenantCard.jsx";

import ui from "@shared/styles/CardLayout.module.css";

function leaseLabel(lease) {
  const base =
    lease?.propertyName ||
    lease?.property?.name ||
    lease?.property?.address1 ||
    "";
  return base ? `Lease for ${base}` : "Lease";
}

export default function LandlordTenantDetailPage() {
  const { tenantId } = useParams();
  const { token, effectiveRole, isSysAdmin } = useUser() || {};
  const navigate = useNavigate();

  const role = isSysAdmin
    ? ROLES.SYSADMIN
    : typeof effectiveRole === "string"
      ? effectiveRole.toLowerCase()
      : ROLES.LANDLORD;

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

  async function reloadTenant(idToLoad = tenantId) {
    if (!idToLoad || !token) return null;
    return tenantsApi.detail(idToLoad, { token, includeArchivedAttachments: true });
  }

  const reload = async () => {
    const row = await reloadTenant(tenantId);
    setTenant(row || null);
    return row || null;
  };

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const row = await tenantsApi.detail(tenantId, { token, includeArchivedAttachments: true });
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

  const isArchived = !!tenant?.archivedAt;
  const title = tenant?.name || tenant?.email || "Tenant";

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveLink = canArchiveNow || canUnarchiveNow;

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
    const returnTo = encodeURIComponent(
      `${window.location.pathname}${window.location.search || ""}`
    );
    navigate(`/landlord/tenants/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
  };

  const handleUnlinkLease = async (leaseIdToUnlink) => {
    if (!tenant?.id || !leaseIdToUnlink) return;

    const ok = window.confirm(
      "Unlink this tenant from this lease?\n\nThis does NOT delete either record, it only removes the association."
    );
    if (!ok) return;

    try {
      setUnlinkingLeaseId(leaseIdToUnlink);
      await leasesApi.unlinkTenant(leaseIdToUnlink, tenant.id, { token });
      const fresh = await reloadTenant(tenant.id);
      setTenant(fresh);
    } catch (err) {
      console.error("Failed to unlink tenant from lease", err);
      alert("Failed to unlink tenant. Check console for details.");
    } finally {
      setUnlinkingLeaseId(null);
    }
  };

  const handleUnlinkOccupant = async (occupantId) => {
    if (!tenant?.id || !occupantId) return;

    const ok = window.confirm(
      "Unlink this occupant from this tenant?\n\nThis does NOT delete either record, it only removes the association."
    );
    if (!ok) return;

    try {
      setUnlinkingOccupantId(occupantId);
      await tenantsApi.unlinkOccupant(tenant.id, occupantId, { token });
      const fresh = await reloadTenant(tenant.id);
      setTenant(fresh || tenant);
    } catch (err) {
      console.error("Failed to unlink occupant from tenant", err);
      alert("Failed to unlink occupant. Check console for details.");
    } finally {
      setUnlinkingOccupantId(null);
    }
  };

  const handleUnlinkPet = async (petId) => {
    if (!tenant?.id || !petId) return;

    const ok = window.confirm(
      "Unlink this pet from this tenant?\n\nThis does NOT delete either record, it only removes the association."
    );
    if (!ok) return;

    try {
      setUnlinkingPetId(petId);
      await tenantsApi.unlinkPet(tenant.id, petId, { token });
      const fresh = await reloadTenant(tenant.id);
      setTenant(fresh || tenant);
    } catch (err) {
      console.error("Failed to unlink pet from tenant", err);
      alert("Failed to unlink pet. Check console for details.");
    } finally {
      setUnlinkingPetId(null);
    }
  };

  const handleUnlinkEmergencyContact = async (emergencyContactId) => {
    if (!tenant?.id || !emergencyContactId) return;

    const ok = window.confirm(
      "Unlink this emergency contact from this tenant?\n\nThis does NOT delete either record, it only removes the association."
    );
    if (!ok) return;

    try {
      setUnlinkingEmergencyContactId(emergencyContactId);
      await tenantsApi.unlinkEmergencyContact(tenant.id, emergencyContactId, { token });
      const fresh = await reloadTenant(tenant.id);
      setTenant(fresh || tenant);
    } catch (err) {
      console.error("Failed to unlink emergency contact from tenant", err);
      alert("Failed to unlink emergency contact. Check console for details.");
    } finally {
      setUnlinkingEmergencyContactId(null);
    }
  };

  const handleUnlinkVehicle = async (vehicleId) => {
    if (!tenant?.id || !vehicleId) return;

    const ok = window.confirm(
      "Unlink this vehicle from this tenant?\n\nThis does NOT delete either record, it only removes the association."
    );
    if (!ok) return;

    try {
      setUnlinkingVehicleId(vehicleId);
      await tenantsApi.unlinkVehicle(tenant.id, vehicleId, { token });
      const fresh = await reloadTenant(tenant.id);
      setTenant(fresh || tenant);
    } catch (err) {
      console.error("Failed to unlink vehicle from tenant", err);
      alert("Failed to unlink vehicle. Check console for details.");
    } finally {
      setUnlinkingVehicleId(null);
    }
  };

  if (loading) return <div className={ui.page}>Loading tenant…</div>;
  if (error)
    return (
      <div className={ui.page} style={{ color: "crimson" }}>
        Error loading tenant: {String(error.message || error)}
      </div>
    );
  if (!tenant) return <div className={ui.page}>No data.</div>;

  return (
    <div className={ui.page}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/residents">← Back to residents</Link>
      </div>

      {/* Header */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div>
            <h1 style={{ margin: 0 }}>{title}</h1>

            <div className={ui.headerLinksRow}>
              {canEditNow ? (
                <button type="button" className={ui.linkAction} onClick={goEditTenant}>
                  Edit tenant
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
                  {isArchived ? "Unarchive tenant" : "Archive tenant"}
                </button>
              ) : (
                <span className={ui.linkActionDisabled}>
                  {isArchived ? "Unarchive tenant" : "Archive tenant"}
                </span>
              )}
            </div>

            {isArchived ? <div className={ui.muted}>(Archived – read-only for landlords)</div> : null}
          </div>
        </div>
      </div>

      {/* Tenant info */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}></div>

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
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Leases</div>
          <div className={ui.sectionHint}>Direct link: Lease ↔ Tenant</div>
        </div>

        {leaseItems.length ? (
          <div className={ui.grid}>
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
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      onClick={(le) => {
                        le.stopPropagation();
                        handleUnlinkLease(lease.id);
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
          <div className={ui.muted}>No leases linked to this tenant yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={ui.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/leases/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
            }}
          >
            Add a lease (new or existing)
          </button>
        </div>
      </div>

      {/* Properties (INDIRECT via leases) */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Properties</div>
          <div className={ui.sectionHint}>Indirect link: Property → Lease → Tenant</div>
        </div>

        {propertyGroups.length ? (
          <div className={ui.grid}>
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
                  footer={<div className={`${ui.inlineAction}`}>Manage link on Lease</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No properties associated with this tenant yet. Link via lease first.</div>
        )}

        {leasesMissingPropertyCount > 0 ? (
          <div className={ui.muted} style={{ marginTop: 8 }}>
            Note: {leasesMissingPropertyCount} lease
            {leasesMissingPropertyCount === 1 ? "" : "s"} linked to this tenant{" "}
            {leasesMissingPropertyCount === 1 ? "is" : "are"} not linked to a property yet.
          </div>
        ) : null}
      </div>

      {/* Occupants (DIRECT) */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Occupants</div>
          <div className={ui.sectionHint}>Direct link: Occupant ↔ Tenant</div>
        </div>

        {occupantLinks.length ? (
          <div className={ui.grid}>
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
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      onClick={(oc) => {
                        oc.stopPropagation();
                        handleUnlinkOccupant(o.id);
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
          <div className={ui.muted}>No occupants linked to this tenant yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={ui.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/occupants/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
            }}
          >
            Add an occupant (new or existing)
          </button>
        </div>
      </div>

      {/* Pets (DIRECT) */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Pets</div>
          <div className={ui.sectionHint}>Direct link: Pet ↔ Tenant</div>
        </div>

        {petLinks.length ? (
          <div className={ui.grid}>
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
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      onClick={(pe) => {
                        pe.stopPropagation();
                        handleUnlinkPet(p.id);
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
          <div className={ui.muted}>No pets linked to this tenant yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={ui.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/pets/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
            }}
          >
            Add a pet (new or existing)
          </button>
        </div>
      </div>

      {/* Emergency contacts (DIRECT) */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Emergency Contacts</div>
          <div className={ui.sectionHint}>Direct link: Emergency Contact ↔ Tenant</div>
        </div>

        {emergencyContactLinks.length ? (
          <div className={ui.grid}>
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
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      onClick={(ev) => {
                        ev.stopPropagation();
                        handleUnlinkEmergencyContact(e.id);
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
          <div className={ui.muted}>No emergency contacts linked to this tenant yet.</div>
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
                `/landlord/emergencyContacts/new?tenantId=${tenant.id}&returnTo=${returnTo}`
              );
            }}
          >
            Add an emergency contact (new or existing)
          </button>
        </div>
      </div>

      {/* Vehicles (DIRECT) */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Vehicles</div>
          <div className={ui.sectionHint}>Direct link: Vehicle ↔ Tenant</div>
        </div>

        {vehicleLinks.length ? (
          <div className={ui.grid}>
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
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      onClick={(vi) => {
                        vi.stopPropagation();
                        handleUnlinkVehicle(v.id);
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
          <div className={ui.muted}>No vehicles linked to this tenant yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={ui.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/vehicles/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
            }}
          >
            Add a vehicle (new or existing)
          </button>
        </div>
      </div>
    </div>
  );
}
