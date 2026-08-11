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

function isArchivedEntity(x) {
  return !!(x?.archivedAt || x?.archived);
}

function leaseLabel(lease) {
  const base =
    lease?.propertyName ||
    lease?.property?.name ||
    (lease?.property?.address1 && lease?.property?.address2
      ? `${lease.property.address1} ${lease.property.address2}`
      : lease?.property?.address1) ||
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

  const [showArchivedLeases, setShowArchivedLeases] = useState(false);
  const [showArchivedProperties, setShowArchivedProperties] = useState(false);
  const [showArchivedOccupants, setShowArchivedOccupants] = useState(false);
  const [showArchivedPets, setShowArchivedPets] = useState(false);
  const [showArchivedEmergencyContacts, setShowArchivedEmergencyContacts] = useState(false);
  const [showArchivedVehicles, setShowArchivedVehicles] = useState(false);

  const [tenant, setTenant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isArchiving, setArchiving] = useState(false);

  const [unlinkingLeaseId, setUnlinkingLeaseId] = useState(null);
  const [unlinkingOccupantId, setUnlinkingOccupantId] = useState(null);
  const [unlinkingPetId, setUnlinkingPetId] = useState(null);
  const [unlinkingEmergencyContactId, setUnlinkingEmergencyContactId] = useState(null);
  const [unlinkingVehicleId, setUnlinkingVehicleId] = useState(null);

  // Reset show/hide toggles when switching tenants
  useEffect(() => {
    setShowArchivedAttachs(false);
    setShowArchivedLeases(false);
    setShowArchivedProperties(false);
    setShowArchivedOccupants(false);
    setShowArchivedPets(false);
    setShowArchivedEmergencyContacts(false);
    setShowArchivedVehicles(false);
  }, [tenantId]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const row = await tenantsApi.get(tenantId, {
          token,
          includeArchivedAttachments: true,
        });
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

  const isArchived = isArchivedEntity(tenant);

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;

  const title = tenant?.name || tenant?.email || "Tenant";

  // Dedupe leases (DIRECT)
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

  // Properties aggregated via leases (INDIRECT)
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

  // ---------- Leases ----------
  const leaseCounts = useMemo(() => {
    const total = leaseItems.length;
    const archived = leaseItems.filter(({ lease }) => isArchivedEntity(lease)).length;
    return { total, archived, active: total - archived };
  }, [leaseItems]);

  const visibleLeaseItems = useMemo(() => {
    if (showArchivedLeases) return leaseItems;
    return leaseItems.filter(({ lease }) => !isArchivedEntity(lease));
  }, [leaseItems, showArchivedLeases]);

  // ---------- Properties ----------
  const propertyCounts = useMemo(() => {
    const total = propertyGroups.length;
    const archived = propertyGroups.filter(({ property }) => isArchivedEntity(property)).length;
    return { total, archived, active: total - archived };
  }, [propertyGroups]);

  const visiblePropertyGroups = useMemo(() => {
    if (showArchivedProperties) return propertyGroups;
    return propertyGroups.filter(({ property }) => !isArchivedEntity(property));
  }, [propertyGroups, showArchivedProperties]);

  // ---------- Occupants ----------
  const occupantCounts = useMemo(() => {
    const total = occupantLinks.length;
    const archived = occupantLinks.filter((l) => isArchivedEntity(l?.occupant)).length;
    return { total, archived, active: total - archived };
  }, [occupantLinks]);

  const visibleOccupantLinks = useMemo(() => {
    if (showArchivedOccupants) return occupantLinks;
    return occupantLinks.filter((l) => !isArchivedEntity(l?.occupant));
  }, [occupantLinks, showArchivedOccupants]);

  // ---------- Pets ----------
  const petCounts = useMemo(() => {
    const total = petLinks.length;
    const archived = petLinks.filter((l) => isArchivedEntity(l?.pet)).length;
    return { total, archived, active: total - archived };
  }, [petLinks]);

  const visiblePetLinks = useMemo(() => {
    if (showArchivedPets) return petLinks;
    return petLinks.filter((l) => !isArchivedEntity(l?.pet));
  }, [petLinks, showArchivedPets]);

  // ---------- Emergency Contacts ----------
  const emergencyContactCounts = useMemo(() => {
    const total = emergencyContactLinks.length;
    const archived = emergencyContactLinks.filter((l) => isArchivedEntity(l?.emergencyContact)).length;
    return { total, archived, active: total - archived };
  }, [emergencyContactLinks]);

  const visibleEmergencyContactLinks = useMemo(() => {
    if (showArchivedEmergencyContacts) return emergencyContactLinks;
    return emergencyContactLinks.filter((l) => !isArchivedEntity(l?.emergencyContact));
  }, [emergencyContactLinks, showArchivedEmergencyContacts]);

  // ---------- Vehicles ----------
  const vehicleCounts = useMemo(() => {
    const total = vehicleLinks.length;
    const archived = vehicleLinks.filter((l) => isArchivedEntity(l?.vehicle)).length;
    return { total, archived, active: total - archived };
  }, [vehicleLinks]);

  const visibleVehicleLinks = useMemo(() => {
    if (showArchivedVehicles) return vehicleLinks;
    return vehicleLinks.filter((l) => !isArchivedEntity(l?.vehicle));
  }, [vehicleLinks, showArchivedVehicles]);

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

      const archiveReason = window.prompt("Please provide a reason for archiving this tenant.");
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
    const returnTo = encodeURIComponent(`${window.location.pathname}${window.location.search || ""}`);
    navigate(`/landlord/tenants/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
  };

  const handleUnlinkLeaseFromTenant = async (leaseId) => {
    if (!tenant?.id || !leaseId) return;

    if (isArchived) {
      alert("Cannot manage links for an archived tenant.");
      return;
    }

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

  const handleUnlinkOccupantFromTenant = async (occupantId) => {
    if (!tenant?.id || !occupantId) return;

    if (isArchived) {
      alert("Cannot manage links for an archived tenant.");
      return;
    }

    const ok = window.confirm(
      "Unlink this occupant from this tenant?\n\nThis does NOT delete either record, it only removes the tenant↔occupant association."
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

    if (isArchived) {
      alert("Cannot manage links for an archived tenant.");
      return;
    }

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

    if (isArchived) {
      alert("Cannot manage links for an archived tenant.");
      return;
    }

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

    if (isArchived) {
      alert("Cannot manage links for an archived tenant.");
      return;
    }

    const ok = window.confirm(
      "Unlink this vehicle from this tenant?\n\nThis does NOT delete either record, it only removes the tenant↔vehicle association."
    );
    if (!ok) return;

    try {
      setUnlinkingVehicleId(vehicleIdToUnlink);
      await tenantsApi.unlinkVehicle(tenant.id, vehicleIdToUnlink, { token });
      await reload();
    } catch (err) {
      console.error("Failed to unlink vehicle from tenant", err);
      alert("Failed to unlink vehicle. Check console for details.");
    } finally {
      setUnlinkingVehicleId(null);
    }
  };

  if (loading) return <div className={page.page}>Loading tenant…</div>;
  if (error)
    return (
      <div className={page.page} style={{ color: "crimson" }}>
        Error loading tenant: {String(error?.message || error)}
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
          onToggleShowArchivedAttachs={() => setShowArchivedAttachs((v) => !v)}
        />
      </div>

      {/* Leases (DIRECT) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Leases</div>
            <div className={page.sectionHint}>Direct link: Lease ↔ Tenant</div>

            {leaseCounts.archived > 0 ? (
              <div className={shared.muted} style={{ marginBottom: 8 }}>
                {!showArchivedLeases ? (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedLeases(true)}
                      style={{ padding: 0 }}
                    >
                      Show archived leases
                    </button>
                    <div>Archived leases are hidden</div>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedLeases(false)}
                      style={{ padding: 0 }}
                    >
                      Hide archived leases
                    </button>
                    <div>Showing all leases</div>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>

        {visibleLeaseItems.length > 0 ? (
          <div className={page.grid}>
            {visibleLeaseItems.map(({ lease }) => {
              if (!lease?.id) return null;

              const archived = isArchivedEntity(lease);
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
                  actions={[
                    {
                      key: "unlink",
                      label: "Unlink from tenant",
                      busyLabel: "Unlinking…",
                      danger: true,

                      // busy implies disabled; don't include busy in disabled
                      busy: unlinkingLeaseId === lease.id,
                      disabled: isArchived || archived,

                      disabledMessage: isArchived
                        ? "Cannot manage links for an archived tenant."
                        : archived
                          ? "Cannot manage links for an archived lease."
                          : null,

                      onClick: () => handleUnlinkLeaseFromTenant(lease.id),
                    },
                  ]}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {leaseCounts.total === 0
              ? "No leases associated with this tenant yet."
              : "No active leases associated with this tenant."}
          </div>
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
          <div className={shared.muted}>Cannot manage links for an archived tenant.</div>
        ) : null}
      </div>

      {/* Properties (INDIRECT via leases) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Properties</div>
            <div className={page.sectionHint}>Indirect link: Property → Lease → Tenant</div>

            {propertyCounts.archived > 0 ? (
              <div className={shared.muted} style={{ marginBottom: 8 }}>
                {!showArchivedProperties ? (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedProperties(true)}
                      style={{ padding: 0 }}
                    >
                      Show archived properties
                    </button>
                    <div>Archived properties are hidden</div>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedProperties(false)}
                      style={{ padding: 0 }}
                    >
                      Hide archived properties
                    </button>
                    <div>Showing all properties</div>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>

        {visiblePropertyGroups.length > 0 ? (
          <div className={page.grid}>
            {visiblePropertyGroups.map(({ property, leases }) => {
              if (!property?.id) return null;

              const archived = isArchivedEntity(property);
              const propertyName = property.name || property.address1 || property.address || "Property";
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
                  linkageParts={[propertyName, firstLeaseLabel || "Lease", title]}
                  footer={<div className={card.inlineAction}>Manage link on Lease</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {propertyCounts.total === 0
              ? "No properties associated with this tenant yet. Link via lease first."
              : "No active properties associated with this tenant"}
          </div>
        )}
      </div>

      {/* Occupants (DIRECT) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Occupants</div>
            <div className={page.sectionHint}>Direct link: Occupant ↔ Tenant</div>

            {occupantCounts.archived > 0 ? (
              <div className={shared.muted} style={{ marginBottom: 8 }}>
                {!showArchivedOccupants ? (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedOccupants(true)}
                      style={{ padding: 0 }}
                    >
                      Show archived occupants
                    </button>
                    <div>Archived occupants are hidden</div>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedOccupants(false)}
                      style={{ padding: 0 }}
                    >
                      Hide archived occupants
                    </button>
                    <div>Showing all occupants</div>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>

        {visibleOccupantLinks.length > 0 ? (
          <div className={page.grid}>
            {visibleOccupantLinks.map((link) => {
              const o = link?.occupant;
              if (!o?.id) return null;

              const archived = isArchivedEntity(o);
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
                  actions={[
                    {
                      key: "unlink",
                      label: "Unlink from tenant",
                      busyLabel: "Unlinking…",
                      danger: true,

                      // busy implies disabled; don't include busy in disabled
                      busy: unlinkingOccupantId === o.id,
                      disabled: isArchived || archived,

                      disabledMessage: isArchived
                        ? "Cannot manage links for an archived tenant."
                        : archived
                          ? "Cannot manage links for an archived occupant."
                          : null,

                      onClick: () => handleUnlinkOccupantFromTenant(o.id),
                    },
                  ]}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {occupantCounts.total === 0
              ? "No occupants linked to this tenant yet."
              : "No active occupants associated with this tenant."}
          </div>
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
          <div className={shared.muted}>Cannot manage links for an archived tenant.</div>
        ) : null}
      </div>

      {/* Pets (DIRECT) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Pets</div>
            <div className={page.sectionHint}>Direct link: Pet ↔ Tenant</div>

            {petCounts.archived > 0 ? (
              <div className={shared.muted} style={{ marginBottom: 8 }}>
                {!showArchivedPets ? (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedPets(true)}
                      style={{ padding: 0 }}
                    >
                      Show archived pets
                    </button>
                    <div>Archived pets are hidden</div>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedPets(false)}
                      style={{ padding: 0 }}
                    >
                      Hide archived pets
                    </button>
                    <div>Showing all pets</div>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>

        {visiblePetLinks.length > 0 ? (
          <div className={page.grid}>
            {visiblePetLinks.map((link) => {
              const p = link?.pet;
              if (!p?.id) return null;

              const archived = isArchivedEntity(p);
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
                  actions={[
                    {
                      key: "unlink",
                      label: "Unlink from tenant",
                      busyLabel: "Unlinking…",
                      danger: true,

                      // busy implies disabled; don't include busy in disabled
                      busy: unlinkingPetId === p.id,
                      disabled: isArchived || archived,

                      disabledMessage: isArchived
                        ? "Cannot manage links for an archived tenant."
                        : archived
                          ? "Cannot manage links for an archived pet."
                          : null,

                      onClick: () => handleUnlinkPetFromTenant(p.id),
                    },
                  ]}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {petCounts.total === 0
              ? "No pets linked to this tenant yet."
              : "No active pets associated with this tenant."}
          </div>
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
          <div className={shared.muted}>Cannot manage links for an archived tenant.</div>
        ) : null}
      </div>

      {/* Emergency Contacts (DIRECT) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Emergency Contacts</div>
            <div className={page.sectionHint}>Direct link: Emergency Contact ↔ Tenant</div>

            {emergencyContactCounts.archived > 0 ? (
              <div className={shared.muted} style={{ marginBottom: 8 }}>
                {!showArchivedEmergencyContacts ? (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedEmergencyContacts(true)}
                      style={{ padding: 0 }}
                    >
                      Show archived emergency contacts
                    </button>
                    <div>Archived emergency contacts are hidden</div>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedEmergencyContacts(false)}
                      style={{ padding: 0 }}
                    >
                      Hide archived emergency contacts
                    </button>
                    <div>Showing all emergency contacts</div>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>

        {visibleEmergencyContactLinks.length > 0 ? (
          <div className={page.grid}>
            {visibleEmergencyContactLinks.map((link) => {
              const e = link?.emergencyContact;
              if (!e?.id) return null;

              const archived = isArchivedEntity(e);
              const emergencyContactName = e.name || "Unnamed emergency contact";

              return (
                <LinkageCard
                  key={e.id}
                  title={emergencyContactName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Emergency Contact"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/emergencyContacts/${e.id}`)}
                  linkageParts={[emergencyContactName, title]}
                  actions={[
                    {
                      key: "unlink",
                      label: "Unlink from tenant",
                      busyLabel: "Unlinking…",
                      danger: true,

                      // busy implies disabled; don't include busy in disabled
                      busy: unlinkingEmergencyContactId === e.id,
                      disabled: isArchived || archived,

                      disabledMessage: isArchived
                        ? "Cannot manage links for an archived tenant."
                        : archived
                          ? "Cannot manage links for an archived emergency contact."
                          : null,

                      onClick: () => handleUnlinkEmergencyContactFromTenant(e.id),
                    },
                  ]}                  
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {emergencyContactCounts.total === 0
              ? "No emergency contacts linked to this tenant yet."
              : "No active emergency contacts associated with this tenant."}
          </div>
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
          <div className={shared.muted}>Cannot manage links for an archived tenant.</div>
        ) : null}
      </div>

      {/* Vehicles (DIRECT) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Vehicles</div>
            <div className={page.sectionHint}>Direct link: Vehicle ↔ Tenant</div>

            {vehicleCounts.archived > 0 ? (
              <div className={shared.muted} style={{ marginBottom: 8 }}>
                {!showArchivedVehicles ? (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedVehicles(true)}
                      style={{ padding: 0 }}
                    >
                      Show archived vehicles
                    </button>
                    <div>Archived vehicles are hidden</div>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedVehicles(false)}
                      style={{ padding: 0 }}
                    >
                      Hide archived vehicles
                    </button>
                    <div>Showing all vehicles</div>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>

        {visibleVehicleLinks.length > 0 ? (
          <div className={page.grid}>
            {visibleVehicleLinks.map((link) => {
              const v = link?.vehicle;
              if (!v?.id) return null;

              const archived = isArchivedEntity(v);
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
                  actions={[
                    {
                      key: "unlink",
                      label: "Unlink from tenant",
                      busyLabel: "Unlinking…",
                      danger: true,

                      // busy implies disabled; don't include busy in disabled
                      busy: unlinkingVehicleId === v.id,
                      disabled: isArchived || archived,

                      disabledMessage: isArchived
                        ? "Cannot manage links for an archived tenant."
                        : archived
                          ? "Cannot manage links for an archived vehicle."
                          : null,

                      onClick: () => handleUnlinkVehicleFromTenant(v.id),
                    },
                  ]}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {vehicleCounts.total === 0
              ? "No vehicles linked to this tenant yet."
              : "No active vehicles associated with this tenant."}
          </div>
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
          <div className={shared.muted}>Cannot manage links for an archived tenant.</div>
        ) : null}
      </div>
    </div>
  );
}
