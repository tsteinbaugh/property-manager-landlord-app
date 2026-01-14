// frontend/newsrc/features/properties/pages/LandlordPropertyDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { propertiesApi } from "@features/properties/api/properties.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import LinkageCard from "@shared/ui/cards/LinkageCard.jsx";
import PropertyCard from "@features/properties/components/PropertyCard.jsx";
import { formatMoney } from "@shared/utils/validation.js";
import ArchivedHeaderActions from "@shared/ui/actions/ArchivedHeaderActions.jsx";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

function propertyTitle(p) {
  return p?.name || (p?.address1 && p?.address2) || p?.address1 || "Property";
}

function leaseTitle(lease, propTitle) {
  const base =
    lease?.propertyName ||
    lease?.property?.name ||
    (lease?.property?.address1 && lease?.property?.address2
      ? `${lease.property.address1} ${lease.property.address2}`
      : lease?.property?.address1) ||
    "";
  return base ? `Lease for ${base}` : "Lease";
}

function leaseLabel(lease) {
  if (!lease) return "Lease";
  const status = lease.status ? String(lease.status).toUpperCase() : "LEASE";
  const dates =
    lease.startDate && lease.endDate
      ? `${lease.startDate} → ${lease.endDate}`
      : lease.startDate
        ? `${lease.startDate} → (no end date)`
        : lease.endDate
          ? `(no start date) → ${lease.endDate}`
          : "(no dates)";

  const rent =
    lease.rentAmountCents !== null && lease.rentAmountCents !== undefined
      ? ` · $${formatMoney(lease.rentAmountCents)}/mo`
      : "";

  return `${status} · ${dates}${rent}`;
}

function isArchivedEntity(x) {
  return !!(x?.archivedAt || x?.archived);
}

function buildLinkageGraph(propertyDetail) {
  // IMPORTANT: This graph ALWAYS includes archived entities.
  // UI decides whether to show/hide them.
  const result = {
    leases: [],
    tenants: new Map(),
    occupants: new Map(),
    pets: new Map(),
    emergencyContacts: new Map(),
    vehicles: new Map(),
  };

  const leases = Array.isArray(propertyDetail?.leases) ? propertyDetail.leases : [];
  const propTitle = propertyTitle(propertyDetail);

  for (const lease of leases) {
    if (!lease?.id) continue;

    const ltRows = Array.isArray(lease?.leaseTenants) ? lease.leaseTenants : [];
    const leaseTenants = [];

    for (const row of ltRows) {
      const tenant = row?.tenant || null;
      if (!tenant?.id) continue;

      leaseTenants.push(tenant);

      if (!result.tenants.has(tenant.id)) {
        result.tenants.set(tenant.id, { tenant, viaLeases: [] });
      }
      result.tenants.get(tenant.id).viaLeases.push({
        leaseId: lease.id,
        leaseLabel: leaseLabel(lease),
        leaseTitle: leaseTitle(lease, propTitle),
        leaseRaw: lease,
      });

      const occLinks = Array.isArray(tenant?.occupantLinks) ? tenant.occupantLinks : [];
      for (const link of occLinks) {
        const o = link?.occupant;
        if (!o?.id) continue;
        if (!result.occupants.has(o.id)) result.occupants.set(o.id, { entity: o, paths: [] });
        result.occupants.get(o.id).paths.push({
          tenantId: tenant.id,
          tenantName: tenant.name || tenant.email || "Unnamed tenant",
          leaseId: lease.id,
          leaseTitle: leaseTitle(lease, propTitle),
        });
      }

      const petLinks = Array.isArray(tenant?.petLinks) ? tenant.petLinks : [];
      for (const link of petLinks) {
        const p = link?.pet;
        if (!p?.id) continue;
        if (!result.pets.has(p.id)) result.pets.set(p.id, { entity: p, paths: [] });
        result.pets.get(p.id).paths.push({
          tenantId: tenant.id,
          tenantName: tenant.name || tenant.email || "Unnamed tenant",
          leaseId: lease.id,
          leaseTitle: leaseTitle(lease, propTitle),
        });
      }

      const ecLinks = Array.isArray(tenant?.emergencyContactLinks) ? tenant.emergencyContactLinks : [];
      for (const link of ecLinks) {
        const e = link?.emergencyContact;
        if (!e?.id) continue;
        if (!result.emergencyContacts.has(e.id)) result.emergencyContacts.set(e.id, { entity: e, paths: [] });
        result.emergencyContacts.get(e.id).paths.push({
          tenantId: tenant.id,
          tenantName: tenant.name || tenant.email || "Unnamed tenant",
          leaseId: lease.id,
          leaseTitle: leaseTitle(lease, propTitle),
        });
      }

      const vLinks = Array.isArray(tenant?.vehicleLinks) ? tenant.vehicleLinks : [];
      for (const link of vLinks) {
        const v = link?.vehicle;
        if (!v?.id) continue;
        if (!result.vehicles.has(v.id)) result.vehicles.set(v.id, { entity: v, paths: [] });
        result.vehicles.get(v.id).paths.push({
          tenantId: tenant.id,
          tenantName: tenant.name || tenant.email || "Unnamed tenant",
          leaseId: lease.id,
          leaseTitle: leaseTitle(lease, propTitle),
        });
      }
    }

    result.leases.push({ lease, tenants: leaseTenants });
  }

  return result;
}

function countsFor(list = [], getEntity = (x) => x) {
  const total = list.length;
  const archived = list.filter((x) => isArchivedEntity(getEntity(x))).length;
  const active = total - archived;
  return { total, active, archived };
}

export default function LandlordPropertyDetailPage() {
  const params = useParams();
  const propertyId = params.propertyId || params.id || "";
  const navigate = useNavigate();
  const { token, effectiveRole, isSysAdmin } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
      ? ROLES.SYSADMIN
      : typeof effectiveRole === "string"
        ? effectiveRole.toLowerCase()
        : effectiveRole || ROLES.LANDLORD;

  const canUpdate = can(role, R.PROPERTIES, A.UPDATE);
  const canArchiveGrant = can(role, R.PROPERTIES, A.ARCHIVE);

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isArchiving, setArchiving] = useState(false);
  const [unlinkingLeaseId, setUnlinkingLeaseId] = useState(null);

  // show/hide archived linked items (per section)
  const [showArchivedLeases, setShowArchivedLeases] = useState(false);
  const [showArchivedTenants, setShowArchivedTenants] = useState(false);
  const [showArchivedOccupants, setShowArchivedOccupants] = useState(false);
  const [showArchivedPets, setShowArchivedPets] = useState(false);
  const [showArchivedEmergencyContacts, setShowArchivedEmergencyContacts] = useState(false);
  const [showArchivedVehicles, setShowArchivedVehicles] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const p = await propertiesApi.get(propertyId, { token });

        if (!cancelled) {
          setProperty(p || null);
          if (!p) setError(new Error("Property not found"));
        }
      } catch (err) {
        console.error("Failed to load property", err);
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (propertyId && token) load();
    else if (!propertyId) {
      setLoading(false);
      setError(new Error("Missing property id"));
    }

    return () => {
      cancelled = true;
    };
  }, [propertyId, token]);

  const graph = useMemo(() => buildLinkageGraph(property), [property]);

  // ---------- derived lists for show/hide archived ----------
  const allLeases = useMemo(
    () => (Array.isArray(graph?.leases) ? graph.leases.map((x) => x.lease).filter(Boolean) : []),
    [graph]
  );
  const leaseCounts = useMemo(() => countsFor(allLeases), [allLeases]);
  const visibleLeases = useMemo(() => {
    if (showArchivedLeases) return allLeases;
    return allLeases.filter((x) => !isArchivedEntity(x));
  }, [allLeases, showArchivedLeases]);

  const allTenantEntries = useMemo(() => Array.from(graph.tenants.values()), [graph]);
  const tenantCounts = useMemo(() => countsFor(allTenantEntries, (x) => x.tenant), [allTenantEntries]);
  const visibleTenantEntries = useMemo(() => {
    if (showArchivedTenants) return allTenantEntries;
    return allTenantEntries.filter((x) => !isArchivedEntity(x.tenant));
  }, [allTenantEntries, showArchivedTenants]);

  const allOccupantEntries = useMemo(() => Array.from(graph.occupants.values()), [graph]);
  const occupantCounts = useMemo(() => countsFor(allOccupantEntries, (x) => x.entity), [allOccupantEntries]);
  const visibleOccupantEntries = useMemo(() => {
    if (showArchivedOccupants) return allOccupantEntries;
    return allOccupantEntries.filter((x) => !isArchivedEntity(x.entity));
  }, [allOccupantEntries, showArchivedOccupants]);

  const allPetEntries = useMemo(() => Array.from(graph.pets.values()), [graph]);
  const petCounts = useMemo(() => countsFor(allPetEntries, (x) => x.entity), [allPetEntries]);
  const visiblePetEntries = useMemo(() => {
    if (showArchivedPets) return allPetEntries;
    return allPetEntries.filter((x) => !isArchivedEntity(x.entity));
  }, [allPetEntries, showArchivedPets]);

  const allEmergencyContactEntries = useMemo(() => Array.from(graph.emergencyContacts.values()), [graph]);
  const emergencyContactCounts = useMemo(
    () => countsFor(allEmergencyContactEntries, (x) => x.entity),
    [allEmergencyContactEntries]
  );
  const visibleEmergencyContactEntries = useMemo(() => {
    if (showArchivedEmergencyContacts) return allEmergencyContactEntries;
    return allEmergencyContactEntries.filter((x) => !isArchivedEntity(x.entity));
  }, [allEmergencyContactEntries, showArchivedEmergencyContacts]);

  const allVehicleEntries = useMemo(() => Array.from(graph.vehicles.values()), [graph]);
  const vehicleCounts = useMemo(() => countsFor(allVehicleEntries, (x) => x.entity), [allVehicleEntries]);
  const visibleVehicleEntries = useMemo(() => {
    if (showArchivedVehicles) return allVehicleEntries;
    return allVehicleEntries.filter((x) => !isArchivedEntity(x.entity));
  }, [allVehicleEntries, showArchivedVehicles]);

  // ---------- page state ----------
  const isArchived = !!(property?.archivedAt || property?.archived);

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;

  const title = propertyTitle(property);

  const reload = async () => {
    const p = await propertiesApi.get(propertyId, { token });
    setProperty(p || null);
  };

  const handleToggleArchive = async () => {
    if (!property) return;

    if (!isArchived) {
      if (!canArchiveGrant) {
        alert("You do not have permission to archive properties.");
        return;
      }

      const archiveReason = window.prompt("Please provide a reason for archiving this property.");
      if (archiveReason === null) return;

      if (!archiveReason.trim()) {
        alert("Archiving requires a reason.");
        return;
      }

      const ok = window.confirm(
        "Are you sure you want to archive this property?\n\n" +
          "It will be hidden from active lists. Only a system administrator can unarchive it."
      );
      if (!ok) return;

      try {
        setArchiving(true);
        await propertiesApi.toggleArchive(property.id, {
          token,
          archiveReason: archiveReason.trim(),
        });
        await reload();
      } catch (err) {
        console.error("Failed to toggle property archive state", err);
        alert("Failed to change archive status. Check console for details.");
      } finally {
        setArchiving(false);
      }
      return;
    }

    if (!isSysAdmin) {
      alert(
        "Only a system administrator can unarchive an archived property.\n\n" +
          "Please contact your system administrator if this needs to be reactivated."
      );
      return;
    }

    try {
      setArchiving(true);
      await propertiesApi.toggleArchive(property.id, { token });
      await reload();
    } catch (err) {
      console.error("Failed to toggle property archive state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  const goEditProperty = () => {
    if (!property?.id) return;
    const returnTo = encodeURIComponent(`${window.location.pathname}${window.location.search || ""}`);
    navigate(`/landlord/properties/new?propertyId=${property.id}&returnTo=${returnTo}`);
  };

  const handleUnlinkLeaseFromProperty = async (leaseId) => {
    if (!leaseId || !property?.id) return;

    if (isArchived) {
      alert("Cannot manage links for an archived property.");
      return;
    }

    const ok = window.confirm(
      "Unlink this property from this lease?\n\nThis does NOT delete either record, it only removes the association."
    );
    if (!ok) return;

    try {
      setUnlinkingLeaseId(leaseId);
      await leasesApi.update(leaseId, { propertyId: null }, { token });
      await reload();
    } catch (err) {
      console.error("Failed to unlink lease from property", err);
      alert("Failed to unlink lease. Check console for details.");
    } finally {
      setUnlinkingLeaseId(null);
    }
  };

  if (loading) return <div className={page.page}>Loading property…</div>;
  if (error)
    return (
      <div className={page.page} style={{ color: "crimson" }}>
        Error loading property: {String(error?.message || error)}
      </div>
    );

  if (!property) return <div className={page.page}>No data.</div>;

  return (
    <div className={page.page}>
      <div className={page.header}>
        <Link to="/landlord/properties">← Back to properties</Link>
      </div>

      {/* Header */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <h1 className={page.title}>{title}</h1>

            <ArchivedHeaderActions
              isArchived={isArchived}
              isBusy={isArchiving}
              archivedMessage="Cannot edit an archived property. To edit, contact a system admin to unarchive first."
              canEdit={canEditNow}
              onEdit={goEditProperty}
              editLabel="Edit property"
              canArchive={canArchiveNow}
              onArchive={handleToggleArchive}
              archiveLabel="Archive property"
              canUnarchive={canUnarchiveNow}
              onUnarchive={handleToggleArchive}
              unarchiveLabel="Unarchive property"
              card={card}
              shared={shared}
            />
          </div>
        </div>
      </div>

      {/* Property info */}
      <div className={page.section}>
        <PropertyCard property={property} variant="detail" />
      </div>

      {/* Leases */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Leases</div>
            <div className={page.sectionHint}>Direct link: Lease ↔ Property</div>

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

        {visibleLeases.length > 0 ? (
          <div className={page.grid}>
            {visibleLeases.map((lease) => {
              if (!lease?.id) return null;

              const archived = isArchivedEntity(lease);
              const leaseName = leaseTitle(lease, title);

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
                        handleUnlinkLeaseFromProperty(lease.id);
                      }}
                      disabled={isArchived || unlinkingLeaseId === lease.id}
                      aria-disabled={isArchived ? "true" : "false"}
                    >
                      {unlinkingLeaseId === lease.id ? "Unlinking…" : "Unlink from property"}
                    </button>
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {leaseCounts.total === 0 
              ? "No leases associated with this property yet."
              : "No active leases associated with this property."}
          </div>
        )}

        <div className={card.formActions}>
          <button
            type="button"
            className={card.linkAction}
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/leases/new?propertyId=${property.id}&returnTo=${returnTo}`);
            }}
            disabled={isArchived}
            aria-disabled={isArchived ? "true" : "false"}
          >
            Add a lease (new or existing)
          </button>
        </div>

        {isArchived ? (
          <div className={shared.muted}>Cannot manage links for an archived property.</div>
        ) : null}
      </div>

      {/* Tenants */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Tenants</div>
            <div className={page.sectionHint}>Indirect link: Tenant → Lease → Property</div>

            {tenantCounts.archived > 0 ? (
              <div className={shared.muted} style={{ marginBottom: 8 }}>
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
          
        {visibleTenantEntries.length > 0 ? (
          <div className={page.grid}>
            {visibleTenantEntries.map(({ tenant, viaLeases }) => {
              if (!tenant?.id) return null;
            
              const archived = isArchivedEntity(tenant);
              const tenantName = tenant.name || tenant.email || "Unnamed tenant";
            
              const uniqueLeases = [];
              const seen = new Set();
              for (const x of viaLeases || []) {
                const key = `${x.leaseId}`;
                if (seen.has(key)) continue;
                seen.add(key);
                uniqueLeases.push(x);
              }
            
              const firstLeaseTitle = uniqueLeases[0]?.leaseTitle || leaseTitle(null, title);
            
              return (
                <LinkageCard
                  key={tenant.id}
                  title={tenantName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Tenant"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/tenants/${tenant.id}`)}
                  linkageParts={[tenantName, firstLeaseTitle, title]}
                  linkageHint="To remove this tenant from this property, unlink it from the relevant lease."
                  footer={<div className={card.inlineAction}>Manage link on Lease</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {tenantCounts.total === 0
              ? "No tenants associated with this property yet. Link via lease first."
              : "No active tenants associated with this property."}
          </div>
        )}
      </div>

      {/* Occupants */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Occupants</div>
            <div className={page.sectionHint}>Indirect link: Occupant → Tenant → Lease → Property</div>

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

        {visibleOccupantEntries.length > 0 ? (
          <div className={page.grid}>
            {visibleOccupantEntries.map(({ entity, paths }) => {
              if (!entity?.id) return null;
              const archived = isArchivedEntity(entity);
              const occupantName = entity.name || "Unnamed occupant";
              const first = paths?.[0];
              const firstLeaseTitle = first?.leaseTitle || leaseTitle(null, title);

              return (
                <LinkageCard
                  key={entity.id}
                  title={occupantName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Occupant"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/occupants/${entity.id}`)}
                  linkageParts={[occupantName, first?.tenantName, firstLeaseTitle, title]}
                  linkageHint="To remove this occupant from this property, unlink it from the relevant tenant."
                  footer={<div className={card.inlineAction}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {occupantCounts.total === 0
              ? "No occupants associated with this property yet. Link via tenant first."
              : "No active occupants associated with this property."}
          </div>
        )}
      </div>

      {/* Pets */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Pets</div>
            <div className={page.sectionHint}>Indirect link: Pet → Tenant → Lease → Property</div>

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

        {visiblePetEntries.length > 0 ? (
          <div className={page.grid}>
            {visiblePetEntries.map(({ entity, paths }) => {
              if (!entity?.id) return null;
              const archived = isArchivedEntity(entity);
              const petName = entity.name || "Unnamed pet";
              const first = paths?.[0];
              const firstLeaseTitle = first?.leaseTitle || leaseTitle(null, title);

              return (
                <LinkageCard
                  key={entity.id}
                  title={petName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Pet"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/pets/${entity.id}`)}
                  linkageParts={[petName, first?.tenantName, firstLeaseTitle, title]}
                  linkageHint="To remove this pet from this property, unlink it from the relevant tenant."
                  footer={<div className={card.inlineAction}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {petCounts.total === 0
              ? "No pets associated with this property yet. Link via tenant first."
              : "No active pets associated with this property."}
          </div>
        )}
      </div>

      {/* Emergency Contacts */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Emergency Contacts</div>
            <div className={page.sectionHint}>Indirect link: Emergency Contact → Tenant → Lease → Property</div>

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

        {visibleEmergencyContactEntries.length > 0 ? (
          <div className={page.grid}>
            {visibleEmergencyContactEntries.map(({ entity, paths }) => {
              if (!entity?.id) return null;
              const archived = isArchivedEntity(entity);
              const emergencyContactName = entity.name || "Unnamed emergency contact";
              const first = paths?.[0];
              const firstLeaseTitle = first?.leaseTitle || leaseTitle(null, title);

              return (
                <LinkageCard
                  key={entity.id}
                  title={emergencyContactName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Emergency Contact"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/emergencyContacts/${entity.id}`)}
                  linkageParts={[emergencyContactName, first?.tenantName, firstLeaseTitle, title]}
                  linkageHint="To remove this emergency contact from this property, unlink it from the relevant tenant."
                  footer={<div className={card.inlineAction}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {emergencyContactCounts.total === 0
              ? "No emergency contacts associated with this property yet. Link via tenant first."
              : "No active emergency contacts associated with this property."}
          </div>
        )}
      </div>

      {/* Vehicles */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div>
            <div className={page.sectionTitle}>Vehicles</div>
            <div className={page.sectionHint}>Indirect link: Vehicle → Tenant → Lease → Property</div>

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

        {visibleVehicleEntries.length > 0 ? (
          <div className={page.grid}>
            {visibleVehicleEntries.map(({ entity, paths }) => {
              if (!entity?.id) return null;
              const archived = isArchivedEntity(entity);

              const vehicleName =
                entity.permit ||
                entity.plate ||
                [entity.year, entity.make, entity.model].filter(Boolean).join(" ") ||
                "Unnamed vehicle";

              const first = paths?.[0];
              const firstLeaseTitle = first?.leaseTitle || leaseTitle(null, title);

              return (
                <LinkageCard
                  key={entity.id}
                  title={vehicleName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Vehicle"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/vehicles/${entity.id}`)}
                  linkageParts={[vehicleName, first?.tenantName, firstLeaseTitle, title]}
                  linkageHint="To remove this vehicle from this property, unlink it from the relevant tenant."
                  footer={<div className={card.inlineAction}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>
            {vehicleCounts.total === 0
              ? "No vehicles associated with this property yet. Link via tenant first."
              : "No active vehicles associated with this property."}
          </div>
        )}
      </div>
    </div>
  );
}
