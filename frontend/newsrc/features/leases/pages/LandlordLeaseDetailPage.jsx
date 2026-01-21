// newsrc/features/leases/pages/LandlordLeaseDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { leasesApi } from "@features/leases/api/leases.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import LinkageCard from "@shared/ui/cards/LinkageCard.jsx";
import LeaseCard from "@features/leases/components/LeaseCard.jsx";
import ArchivedHeaderActions from "@shared/ui/actions/ArchivedHeaderActions.jsx";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

function isArchivedEntity(x) {
  return !!(x?.archivedAt || x?.archived);
}

function countsFor(list, getEntity = (x) => x) {
  const total = list.length;
  const archived = list.filter((x) => isArchivedEntity(getEntity(x))).length;
  const active = total - archived;
  return { total, active, archived };
}

function leaseLabel(lease) {
  const base =
    lease?.propertyName ||
    lease?.property?.name ||
    (lease?.property?.address1 && lease?.property?.address2
      ? `${lease.property.address1} ${lease.property.address2}`
      : lease?.property?.address1) ||
    null;

  return base ? `Lease for ${base}` : "Lease";
}

function normalizeLinkedEntities(tenant) {
  const occupants = Array.isArray(tenant?.occupants)
    ? tenant.occupants
    : Array.isArray(tenant?.occupantLinks)
      ? tenant.occupantLinks.map((x) => x?.occupant).filter(Boolean)
      : [];

  const pets = Array.isArray(tenant?.pets)
    ? tenant.pets
    : Array.isArray(tenant?.petLinks)
      ? tenant.petLinks.map((x) => x?.pet).filter(Boolean)
      : [];

  const emergencyContacts = Array.isArray(tenant?.emergencyContacts)
    ? tenant.emergencyContacts
    : Array.isArray(tenant?.emergencyContactLinks)
      ? tenant.emergencyContactLinks.map((x) => x?.emergencyContact).filter(Boolean)
      : [];

  const vehicles = Array.isArray(tenant?.vehicles)
    ? tenant.vehicles
    : Array.isArray(tenant?.vehicleLinks)
      ? tenant.vehicleLinks.map((x) => x?.vehicle).filter(Boolean)
      : [];

  return { occupants, pets, emergencyContacts, vehicles };
}

export default function LandlordLeaseDetailPage() {
  const { leaseId } = useParams();
  const navigate = useNavigate();
  const { token, effectiveRole, isSysAdmin } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
      ? ROLES.SYSADMIN
      : typeof effectiveRole === "string"
        ? effectiveRole.toLowerCase()
        : effectiveRole || ROLES.LANDLORD;

  const canUpdate = can(role, R.LEASES, A.UPDATE);
  const canArchiveGrant = can(role, R.LEASES, A.ARCHIVE);

  // attachments show/hide lives inside LeaseCard
  const [showArchivedAttachs, setShowArchivedAttachs] = useState(false);

  // show/hide archived linked items (per section)
  const [showArchivedTenants, setShowArchivedTenants] = useState(false);
  const [showArchivedOccupants, setShowArchivedOccupants] = useState(false);
  const [showArchivedPets, setShowArchivedPets] = useState(false);
  const [showArchivedEmergencyContacts, setShowArchivedEmergencyContacts] = useState(false);
  const [showArchivedVehicles, setShowArchivedVehicles] = useState(false);

  const [lease, setLease] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isArchiving, setArchiving] = useState(false);

  const [unlinkingTenantId, setUnlinkingTenantId] = useState(null);
  const [unlinkingPropertyId, setUnlinkingPropertyId] = useState(null);

  const [tenantDetails, setTenantDetails] = useState([]);
  const [tenantDetailsLoading, setTenantDetailsLoading] = useState(false);
  const [tenantDetailsError, setTenantDetailsError] = useState(null);

  // Reset show/hide toggles when switching leases
  useEffect(() => {
    setShowArchivedAttachs(false);
    setShowArchivedTenants(false);
    setShowArchivedOccupants(false);
    setShowArchivedPets(false);
    setShowArchivedEmergencyContacts(false);
    setShowArchivedVehicles(false);
  }, [leaseId]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const row = await leasesApi.get(leaseId, { token, includeArchivedAttachments: true });

        if (!cancelled) {
          setLease(row || null);
          if (!row) setError(new Error("Lease not found"));
        }
      } catch (err) {
        console.error("Failed to load lease", err);
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (leaseId && token) load();
    else if (!leaseId) {
      setLoading(false);
      setError(new Error("Missing lease id"));
    }

    return () => {
      cancelled = true;
    };
  }, [leaseId, token]);

  const isArchived = isArchivedEntity(lease);

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;

  const vm = useMemo(() => {
    const property = lease?.property || null;
    const propertyArchived = isArchivedEntity(property);

    const propertyName =
      property?.name ||
      (property?.address1
        ? [property.address1, property.address2, property.city, property.state, property.postalCode]
            .filter(Boolean)
            .join(", ")
        : "") ||
      "Unlinked property";

    const title = leaseLabel(lease);

    return {
      title,
      property,
      propertyName,
      propertyArchived,
    };
  }, [lease]);

  const reload = async () => {
    const row = await leasesApi.get(leaseId, { token, includeArchivedAttachments: true });
    setLease(row || null);
    return row || null;
  };

  const handleToggleArchive = async () => {
    if (!lease) return;

    if (!isArchived) {
      if (!canArchiveGrant) {
        alert("You do not have permission to archive leases.");
        return;
      }

      const archiveReason = window.prompt("Please provide a reason for archiving this lease.");
      if (archiveReason === null) return;

      if (!archiveReason.trim()) {
        alert("Archiving requires a reason.");
        return;
      }

      const ok = window.confirm(
        "Are you sure you want to archive this lease?\n\n" +
          "It will be hidden from active lists. Only a system administrator can unarchive it."
      );
      if (!ok) return;

      try {
        setArchiving(true);
        await leasesApi.toggleArchive(lease.id, { token, archiveReason: archiveReason.trim() });
        await reload();
      } catch (err) {
        console.error("Failed to toggle lease archive state", err);
        alert("Failed to change archive status. Check console for details.");
      } finally {
        setArchiving(false);
      }
      return;
    }

    if (!isSysAdmin) {
      alert(
        "Only a system administrator can unarchive an archived lease.\n\n" +
          "Please contact your system administrator if this needs to be reactivated."
      );
      return;
    }

    try {
      setArchiving(true);
      await leasesApi.toggleArchive(lease.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to toggle lease archive state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  const goEditLease = () => {
    if (!lease?.id) return;
    const returnTo = encodeURIComponent(`${window.location.pathname}${window.location.search || ""}`);
    navigate(`/landlord/leases/new?leaseId=${lease.id}&returnTo=${returnTo}`);
  };

  const handleUnlinkTenantFromLease = async (tenantId) => {
    if (!lease?.id || !tenantId) return;

    if (isArchived) {
      alert("Cannot manage links for an archived lease.");
      return;
    }

    const ok = window.confirm(
      "Unlink this tenant from this lease?\n\nThis does NOT delete either record, it only removes the association."
    );
    if (!ok) return;

    try {
      setUnlinkingTenantId(tenantId);
      await leasesApi.unlinkTenant(lease.id, tenantId, { token });
      await reload();
    } catch (err) {
      console.error("Failed to unlink tenant from lease", err);
      alert("Failed to unlink tenant. Check console for details.");
    } finally {
      setUnlinkingTenantId(null);
    }
  };

  const handleUnlinkPropertyFromLease = async (propertyId) => {
    if (!lease?.id || !propertyId) return;

    if (isArchived) {
      alert("Cannot manage links for an archived lease.");
      return;
    }

    const ok = window.confirm(
      "Unlink this property from this lease?\n\nThis does NOT delete either record, it only removes the association."
    );
    if (!ok) return;

    try {
      setUnlinkingPropertyId(propertyId);
      await leasesApi.unlinkProperty(lease.id, propertyId, { token });
      await reload();
    } catch (err) {
      console.error("Failed to unlink property from lease", err);
      alert("Failed to unlink property. Check console for details.");
    } finally {
      setUnlinkingPropertyId(null);
    }
  };

  // Load tenant details (for pooled residents sections)
  useEffect(() => {
    if (!lease || !token) {
      setTenantDetails([]);
      setTenantDetailsError(null);
      return;
    }

    const leaseTenants = Array.isArray(lease.leaseTenants) ? lease.leaseTenants : [];
    const tenantIds = Array.from(new Set(leaseTenants.map((lt) => lt?.tenantId).filter(Boolean)));

    if (!tenantIds.length) {
      setTenantDetails([]);
      setTenantDetailsError(null);
      return;
    }

    let cancelled = false;

    async function loadTenantDetails() {
      try {
        setTenantDetailsLoading(true);
        setTenantDetailsError(null);

        const results = [];
        for (const id of tenantIds) {
          try {
            const t = await tenantsApi.get(id, { token });
            if (t) results.push(t);
          } catch (err) {
            console.error("Failed to load tenant detail", err);
          }
        }

        if (!cancelled) setTenantDetails(results);
      } catch (err) {
        if (!cancelled) setTenantDetailsError(err);
      } finally {
        if (!cancelled) setTenantDetailsLoading(false);
      }
    }

    loadTenantDetails();
    return () => {
      cancelled = true;
    };
  }, [lease, token]);

  const tenantById = useMemo(() => {
    const m = new Map();
    for (const t of tenantDetails || []) if (t?.id) m.set(t.id, t);
    return m;
  }, [tenantDetails]);

  const pooled = useMemo(() => {
    const out = { occupants: [], pets: [], emergencyContacts: [], vehicles: [] };
    const seen = {
      occupants: new Set(),
      pets: new Set(),
      emergencyContacts: new Set(),
      vehicles: new Set(),
    };

    for (const t of tenantDetails || []) {
      const tName = t?.name || t?.email || "Unnamed tenant";
      const tId = t?.id || null;

      const { occupants, pets, emergencyContacts, vehicles } = normalizeLinkedEntities(t);

      for (const o of occupants) {
        if (!o?.id || seen.occupants.has(o.id)) continue;
        seen.occupants.add(o.id);
        out.occupants.push({ ...o, _tenantName: tName, _tenantId: tId });
      }

      for (const p of pets) {
        if (!p?.id || seen.pets.has(p.id)) continue;
        seen.pets.add(p.id);
        out.pets.push({ ...p, _tenantName: tName, _tenantId: tId });
      }

      for (const e of emergencyContacts) {
        if (!e?.id || seen.emergencyContacts.has(e.id)) continue;
        seen.emergencyContacts.add(e.id);
        out.emergencyContacts.push({ ...e, _tenantName: tName, _tenantId: tId });
      }

      for (const v of vehicles) {
        if (!v?.id || seen.vehicles.has(v.id)) continue;
        seen.vehicles.add(v.id);
        out.vehicles.push({ ...v, _tenantName: tName, _tenantId: tId });
      }
    }

    return out;
  }, [tenantDetails]);

  const leaseTenantsRaw = Array.isArray(lease?.leaseTenants) ? lease.leaseTenants : [];

  // ---------- Tenants (DIRECT) ----------
  const tenantItems = useMemo(() => {
    const out = [];
    const seen = new Set();

    for (const lt of leaseTenantsRaw) {
      const tenantId = lt?.tenantId;
      if (!tenantId) continue;
      if (seen.has(tenantId)) continue;
      seen.add(tenantId);

      const tenant = tenantById.get(tenantId) || lt?.tenant || null;
      out.push({ lt, tenantId, tenant });
    }

    return out;
  }, [leaseTenantsRaw, tenantById]);

  const tenantCounts = useMemo(
    () => countsFor(tenantItems, (x) => x.tenant || x.lt),
    [tenantItems]
  );

  const visibleTenantItems = useMemo(() => {
    if (showArchivedTenants) return tenantItems;
    return tenantItems.filter((x) => !isArchivedEntity(x.tenant || x.lt));
  }, [tenantItems, showArchivedTenants]);

  // ---------- Pooled residents (INDIRECT) ----------
  const occupantCounts = useMemo(() => countsFor(pooled.occupants), [pooled.occupants]);
  const visibleOccupants = useMemo(() => {
    if (showArchivedOccupants) return pooled.occupants;
    return pooled.occupants.filter((x) => !isArchivedEntity(x));
  }, [pooled.occupants, showArchivedOccupants]);

  const petCounts = useMemo(() => countsFor(pooled.pets), [pooled.pets]);
  const visiblePets = useMemo(() => {
    if (showArchivedPets) return pooled.pets;
    return pooled.pets.filter((x) => !isArchivedEntity(x));
  }, [pooled.pets, showArchivedPets]);

  const emergencyContactCounts = useMemo(
    () => countsFor(pooled.emergencyContacts),
    [pooled.emergencyContacts]
  );
  const visibleEmergencyContacts = useMemo(() => {
    if (showArchivedEmergencyContacts) return pooled.emergencyContacts;
    return pooled.emergencyContacts.filter((x) => !isArchivedEntity(x));
  }, [pooled.emergencyContacts, showArchivedEmergencyContacts]);

  const vehicleCounts = useMemo(() => countsFor(pooled.vehicles), [pooled.vehicles]);
  const visibleVehicles = useMemo(() => {
    if (showArchivedVehicles) return pooled.vehicles;
    return pooled.vehicles.filter((x) => !isArchivedEntity(x));
  }, [pooled.vehicles, showArchivedVehicles]);

  if (loading) return <div className={page.page}>Loading lease…</div>;
  if (error)
    return (
      <div className={page.page}>
        <div className={shared.error}>Error loading lease: {String(error?.message || error)}</div>
      </div>
    );
  if (!lease) return <div className={page.page}>No data.</div>;

  return (
    <div className={page.page}>
      <div className={page.header}>
        <Link to="/landlord/leases">← Back to leases</Link>
      </div>

      {/* Header */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <h1 className={page.title}>{vm.title}</h1>

            <ArchivedHeaderActions
              isArchived={isArchived}
              isBusy={isArchiving}
              archivedMessage="Cannot edit an archived lease. To edit, contact a system admin to unarchive first."
              canEdit={canEditNow}
              onEdit={goEditLease}
              editLabel="Edit lease"
              canArchive={canArchiveNow}
              onArchive={handleToggleArchive}
              archiveLabel="Archive lease"
              canUnarchive={canUnarchiveNow}
              onUnarchive={handleToggleArchive}
              unarchiveLabel="Unarchive lease"
              card={card}
              shared={shared}
            />
          </div>
        </div>
      </div>

      {/* Lease info */}
      <div className={page.section}>
        <LeaseCard
          lease={lease}
          variant="detail"
          onArchiveAttachment={async (attachId, reason) => {
            await leasesApi.archiveAttachment(lease.id, attachId, {
              archiveReason: reason,
              token,
            });
            await reload();
          }}
          showArchivedAttachs={showArchivedAttachs}
          onToggleShowArchivedAttachs={() => setShowArchivedAttachs((v) => !v)}
        />
      </div>

      {/* Property */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Property</div>
          <div className={page.sectionHint}>Direct link: Property ↔ Lease</div>
        </div>

        {vm.property ? (
          <LinkageCard
            key={vm.property.id}
            title={vm.propertyName}
            archived={vm.propertyArchived}
            badgeText={vm.propertyArchived ? "Archived" : "Property"}
            badgeTone={vm.propertyArchived ? "archived" : "idle"}
            onClick={() => navigate(`/landlord/properties/${vm.property.id}`)}
            linkageParts={[vm.propertyName, vm.title]}
            actions={[
              {
                key: "unlink",
                label: "Unlink from lease",
                busyLabel: "Unlinking…",
                danger: true,
                busy: unlinkingPropertyId === vm.property.id,
                disabled: isArchived || isArchivedEntity(vm.property),

                disabledMessage: isArchived
                  ? "Cannot manage links for an archived lease."
                  : isArchivedEntity(vm.property)
                    ? "Cannot manage links for an archived property."
                    : null,

                onClick: () => handleUnlinkPropertyFromLease(vm.property.id),
              },
            ]}
          />
        ) : (
          <div className={shared.muted}>No property associated with this lease yet.</div>
        )}

        <div className={card.formActions}>
          <button
            type="button"
            className={card.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(`${window.location.pathname}${window.location.search || ""}`);
              navigate(`/landlord/properties/new?forLease=1&leaseId=${lease.id}&returnTo=${returnTo}`);
            }}
            disabled={isArchived}
            aria-disabled={isArchived ? "true" : "false"}
          >
            Add a property (new or existing)
          </button>
        </div>
      </div>

      {/* Tenants */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Tenants</div>
            <div className={page.sectionHint}>Direct link: Tenant ↔ Lease</div>

            {tenantCounts.archived > 0 ? (
              <div className={shared.muted} style={{ marginTop: 6 }}>
                {!showArchivedTenants ? (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedTenants(true)}
                      style={{ padding: 0 }}
                    >
                      Show archived tenants
                    </button>
                    <div>Archived tenants are hidden</div>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className={card.linkAction}
                      onClick={() => setShowArchivedTenants(false)}
                      style={{ padding: 0 }}
                    >
                      Hide archived tenants
                    </button>
                    <div>Showing all tenants</div>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>

        {visibleTenantItems.length > 0 ? (
          <div className={page.grid}>
            {visibleTenantItems.map(({ lt, tenantId, tenant }) => {
              const archived = isArchivedEntity(tenant) || isArchivedEntity(lt);
              const tenantName =
                tenant?.name ||
                tenant?.email ||
                lt?.tenantName ||
                lt?.email ||
                "(Unnamed tenant)";
            
              return (
                <LinkageCard
                  key={tenantId}
                  title={tenantName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Tenant"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/tenants/${tenantId}`)}
                  linkageParts={[tenantName, vm.title]}
                  actions={[
                    {
                      key: "unlink",
                      label: "Unlink from lease",
                      busyLabel: "Unlinking…",
                      danger: true,

                      // busy implies disabled; don't include busy in disabled
                      busy: unlinkingTenantId === tenantId,
                      disabled: isArchived || archived,

                      disabledMessage: isArchived
                        ? "Cannot manage links for an archived lease."
                        : archived
                          ? "Cannot manage links for an archived tenant."
                          : null,

                      onClick: () => handleUnlinkTenantFromLease(tenantId),
                    },
                  ]}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {tenantCounts.total === 0
              ? "No tenants associated with this lease yet."
              : "No active tenants associated with this lease."}
          </div>
        )}

        <div className={card.formActions}>
          <button
            type="button"
            className={card.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(`${window.location.pathname}${window.location.search || ""}`);
              navigate(`/landlord/tenants/new?forLease=1&leaseId=${lease.id}&returnTo=${returnTo}`);
            }}
            disabled={isArchived}
            aria-disabled={isArchived ? "true" : "false"}
          >
            Add a tenant (new or existing)
          </button>
        </div>

        {isArchived ? <div className={shared.muted}>Cannot manage links for an archived lease.</div> : null}
      </div>

      {/* Occupants (via tenants) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Occupants</div>
            <div className={page.sectionHint}>Indirect link: Occupant → Tenant → Lease</div>

            {occupantCounts.archived > 0 ? (
              <div className={shared.muted} style={{ marginTop: 6 }}>
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

        {tenantDetailsLoading ? (
          <div className={shared.muted}>Loading occupants…</div>
        ) : tenantDetailsError ? (
          <div className={shared.error}>Failed to load occupants for this lease.</div>
        ) : visibleOccupants.length > 0 ? (
          <div className={page.grid}>
            {visibleOccupants.map((o) => {
              if (!o?.id) return null;

              const archived = isArchivedEntity(o);
              const occupantName = o.name || "Unnamed occupant";
              const tenantName = o._tenantName || "Unnamed tenant";

              return (
                <LinkageCard
                  key={o.id}
                  title={occupantName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Occupant"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/occupants/${o.id}`)}
                  linkageParts={[occupantName, tenantName, vm.title]}
                  linkageHint="To remove this occupant from this lease, unlink it from the relevant tenant."
                  footer={<div className={card.inlineAction}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {occupantCounts.total === 0
              ? "No occupants associated with this lease yet. Link via tenant first."
              : "No active occupants associated with this lease."}
          </div>
        )}
      </div>

      {/* Pets (via tenants) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Pets</div>
            <div className={page.sectionHint}>Indirect link: Pet → Tenant → Lease</div>

            {petCounts.archived > 0 ? (
              <div className={shared.muted} style={{ marginTop: 6 }}>
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

        {tenantDetailsLoading ? (
          <div className={shared.muted}>Loading pets…</div>
        ) : tenantDetailsError ? (
          <div className={shared.error}>Failed to load pets for this lease.</div>
        ) : visiblePets.length > 0 ? (
          <div className={page.grid}>
            {visiblePets.map((p) => {
              if (!p?.id) return null;

              const archived = isArchivedEntity(p);
              const petName = p.name || "Unnamed pet";
              const tenantName = p._tenantName || "Unnamed tenant";

              return (
                <LinkageCard
                  key={p.id}
                  title={petName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Pet"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/pets/${p.id}`)}
                  linkageParts={[petName, tenantName, vm.title]}
                  linkageHint="To remove this pet from this lease, unlink it from the relevant tenant."
                  footer={<div className={card.inlineAction}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {petCounts.total === 0
              ? "No pets associated with this lease yet. Link via tenant first."
              : "No active pets associated with this lease."}
          </div>
        )}
      </div>

      {/* Emergency Contacts (via tenants) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Emergency Contacts</div>
            <div className={page.sectionHint}>Indirect link: Emergency Contact → Tenant → Lease</div>

            {emergencyContactCounts.archived > 0 ? (
              <div className={shared.muted} style={{ marginTop: 6 }}>
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

        {tenantDetailsLoading ? (
          <div className={shared.muted}>Loading emergency contacts…</div>
        ) : tenantDetailsError ? (
          <div className={shared.error}>Failed to load emergency contacts for this lease.</div>
        ) : visibleEmergencyContacts.length > 0 ? (
          <div className={page.grid}>
            {visibleEmergencyContacts.map((ec) => {
              if (!ec?.id) return null;

              const archived = isArchivedEntity(ec);
              const emergencyContactName = ec.name || "Unnamed emergency contact";
              const tenantName = ec._tenantName || "Unnamed tenant";

              return (
                <LinkageCard
                  key={ec.id}
                  title={emergencyContactName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Emergency Contact"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/emergencyContacts/${ec.id}`)}
                  linkageParts={[emergencyContactName, tenantName, vm.title]}
                  linkageHint="To remove this emergency contact from this lease, unlink it from the relevant tenant."
                  footer={<div className={card.inlineAction}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {emergencyContactCounts.total === 0
              ? "No emergency contacts associated with this lease yet. Link via tenant first."
              : "No active emergency contacts associated with this lease."}
          </div>
        )}
      </div>

      {/* Vehicles (via tenants) */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Vehicles</div>
            <div className={page.sectionHint}>Indirect link: Vehicle → Tenant → Lease</div>

            {vehicleCounts.archived > 0 ? (
              <div className={shared.muted} style={{ marginTop: 6 }}>
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

        {tenantDetailsLoading ? (
          <div className={shared.muted}>Loading vehicles…</div>
        ) : tenantDetailsError ? (
          <div className={shared.error}>Failed to load vehicles for this lease.</div>
        ) : visibleVehicles.length > 0 ? (
          <div className={page.grid}>
            {visibleVehicles.map((v) => {
              if (!v?.id) return null;

              const archived = isArchivedEntity(v);
              const vehicleName =
                v.permit ||
                v.plate ||
                [v.year, v.make, v.model].filter(Boolean).join(" ") ||
                "Unnamed vehicle";
              const tenantName = v._tenantName || "Unnamed tenant";

              return (
                <LinkageCard
                  key={v.id}
                  title={vehicleName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Vehicle"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/vehicles/${v.id}`)}
                  linkageParts={[vehicleName, tenantName, vm.title]}
                  linkageHint="To remove this vehicle from this lease, unlink it from the relevant tenant."
                  footer={<div className={card.inlineAction}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {vehicleCounts.total === 0
              ? "No vehicles associated with this lease yet. Link via tenant first."
              : "No active vehicles associated with this lease."}
          </div>
        )}
      </div>
    </div>
  );
}
