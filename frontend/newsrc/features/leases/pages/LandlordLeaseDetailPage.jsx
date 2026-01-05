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

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

function leaseLabel(lease) {
  const base =
    lease?.propertyName ||
    lease?.property?.name ||
    lease?.property?.address1 ||
    "";
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

  const [showArchivedAttachs, setShowArchivedAttachs] = useState(false);

  const [lease, setLease] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isArchiving, setArchiving] = useState(false);

  const [unlinkingTenantId, setUnlinkingTenantId] = useState(null);
  const [unlinkingPropertyId, setUnlinkingPropertyId] = useState(null);

  const [tenantDetails, setTenantDetails] = useState([]);
  const [tenantDetailsLoading, setTenantDetailsLoading] = useState(false);
  const [tenantDetailsError, setTenantDetailsError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const row = await leasesApi.get(leaseId, { token });
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

  const isArchived = useMemo(() => {return !!lease?.archivedAt;}, [lease]);

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveLink = canArchiveNow || canUnarchiveNow;

  const vm = useMemo(() => {
    const property = lease?.property || null;
    const propertyArchived = !!property?.archivedAt;

    const propertyName =
      property?.name ||
      (property?.address1
        ? [property.address1, property.city, property.state, property.postalCode]
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
    const row = await leasesApi.get(leaseId, { token });
    setLease(row || null);
  };  

  const handleToggleArchive = async () => {
    if (!lease) return;

    if (!isArchived) {
      if (!canArchiveGrant) {
        alert("You do not have permission to archive leases.");
        return;
      }

      const archiveReason = window.prompt(
        "Please provide a reason for archiving this lease."
      );
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
        await leasesApi.toggleArchive(lease.id, {
          token,
          archiveReason: archiveReason.trim(),
        });
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

  // Load tenant details (for residents pooling)
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

  const leaseTenants = Array.isArray(lease?.leaseTenants) ? lease.leaseTenants : [];

  if (loading) return <div className={page.page}>Loading lease…</div>;
  if (error)
    return (
      <div className={page.page}>
        <div className={shared.error}>
          Error loading lease: {String(error?.message || error)}
        </div>
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

            <div className={card.headerLinksRow}>
              {canEditNow ? (
                <button type="button" className={card.linkAction} onClick={goEditLease}>
                  Edit lease/Add attachments
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
                  {isArchived ? "Unarchive lease" : "Archive lease"}
                </button>
              ) : (
                <span className={card.linkActionDisabled}>
                  {isArchived ? "Unarchive lease" : "Archive lease"}
                </span>
              )}
            </div>

            {isArchived ? <div className={shared.muted}>(Archived – read-only for landlords)</div> : null}
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
            footer={
              <button
                type="button"
                className={`${card.inlineAction} ${card.inlineActionDanger}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleUnlinkPropertyFromLease(vm.property.id);
                }}
                disabled={unlinkingPropertyId === vm.property.id}
              >
                {unlinkingPropertyId === vm.property.id ? "Unlinking…" : "Unlink from lease"}
              </button>
            }
          />
        ) : (
          <div className={shared.muted}>No property associated with this lease yet.</div>
        )}

        <div className={card.formActions}>
          <button
            type="button"
            className={card.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
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
          <div className={page.sectionTitle}>Tenants</div>
          <div className={page.sectionHint}>Direct link: Tenant ↔ Lease</div>
        </div>

        {leaseTenants.length ? (
          <div className={page.grid}>
            {leaseTenants.map((lt) => {
              if (!lt?.id || !lt?.tenantId) return null;

              const t = tenantById.get(lt.tenantId) || null;
              const archived = !!t?.archivedAt || !!lt?.archivedAt;
              const tenantName = t?.name || t?.email || lt.tenantName || lt?. email || "(Unnamed tenant)";

              return (
                <LinkageCard
                  key={lt.id}
                  title={tenantName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Tenant"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/tenants/${lt.tenantId}`)}
                  linkageParts={[tenantName, vm.title]}
                  footer={
                    <button
                      type="button"
                      className={`${card.inlineAction} ${card.inlineActionDanger}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUnlinkTenantFromLease(lt.tenantId);
                      }}
                      disabled={unlinkingTenantId === lt.tenantId}
                    >
                      {unlinkingTenantId === lt.tenantId ? "Unlinking…" : "Unlink from lease"}
                    </button>
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>No tenants associated with this lease yet.</div>
        )}

        <div className={card.formActions}>
          <button
            type="button"
            className={card.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/tenants/new?forLease=1&leaseId=${lease.id}&returnTo=${returnTo}`);
            }}
            disabled={isArchived}
            aria-disabled={isArchived ? "true" : "false"}            
          >
            Add a tenant (new or existing)
          </button>
        </div>
      </div>

      {/* Residents via tenants */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Occupants</div>
          <div className={page.sectionHint}>Indirect link: Occupant → Tenant → Lease</div>
        </div>

        {tenantDetailsLoading ? (
          <div className={shared.muted}>Loading occupants…</div>
        ) : tenantDetailsError ? (
          <div className={shared.error}>Failed to load occupants for this lease.</div>
        ) : pooled.occupants.length ? (
          <div className={page.grid}>
            {pooled.occupants.map((o) => {
              if (!o?.id) return null;

              const archived = !!o.archivedAt;
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
          <div className={shared.muted}>No occupants associated with this lease yet. Link via tenant first.</div>
        )}
      </div>

      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Pets</div>
          <div className={page.sectionHint}>Indirect link: Pet → Tenant → Lease</div>
        </div>

        {tenantDetailsLoading ? (
          <div className={shared.muted}>Loading pets…</div>
        ) : tenantDetailsError ? (
          <div className={shared.error}>Failed to load pets for this lease.</div>
        ) : pooled.pets.length ? (
          <div className={page.grid}>
            {pooled.pets.map((p) => {
              if (!p?.id) return null;
              
              const archived = !!p.archivedAt;
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
          <div className={shared.muted}>No pets associated with this lease yet. Link via tenant first..</div>
        )}
      </div>

      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Emergency Contacts</div>
          <div className={page.sectionHint}>Indirect link: Emergency Contact → Tenant → Lease</div>
        </div>

        {tenantDetailsLoading ? (
          <div className={shared.muted}>Loading emergency contacts…</div>
        ) : tenantDetailsError ? (
          <div className={shared.error}>Failed to load emergency contacts for this lease.</div>
        ) : pooled.emergencyContacts.length ? (
          <div className={page.grid}>
            {pooled.emergencyContacts.map((ec) => {
              if (!ec?.id) return null;

              const archived = !!ec.archivedAt;
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
            No emergency contacts associated with this lease yet. Link via tenant first.
          </div>
        )}
      </div>

      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Vehicles</div>
          <div className={page.sectionHint}>Indirect link: Vehicle → Tenant → Lease</div>
        </div>

        {tenantDetailsLoading ? (
          <div className={shared.muted}>Loading vehicles…</div>
        ) : tenantDetailsError ? (
          <div className={shared.error}>Failed to load vehicles for this lease.</div>
        ) : pooled.vehicles.length ? (
          <div className={page.grid}>
            {pooled.vehicles.map((v) => {
              if (!v?.id) return null;

              const archived = !!v.archivedAt;
              const vehicleName =
                v.year && v.make && v.model
                  ? [`${v.year}`, v.make, v.model].filter(Boolean).join(" ")
                  : "Unnamed vehicle";
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
          <div className={shared.muted}>No vehicles associated with this lease yet. Link via tenant first.</div>
        )}
      </div>
    </div>
  );
}
