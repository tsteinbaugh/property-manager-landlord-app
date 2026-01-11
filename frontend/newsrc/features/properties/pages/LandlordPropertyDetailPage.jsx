//frontend/newsrc/features/properties/pages/LandlordPropertyDetailPage.jsx
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

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

const SHOW_ARCHIVED_LINKED = false;

function propertyTitle(p) {
  return p?.name || p?.address1 && p?.address2 || p?.address1 || "Property";
}

function leaseTitle(lease, propTitle) {
  const base =
    lease?.propertyName ||
    lease?.property?.name ||
    lease?.property?.address1 && lease?.property?.address2 ||
    lease?.property?.address1 ||
    propTitle ||
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

function shouldInclude(entity) {
  if (!entity) return false;
  if (SHOW_ARCHIVED_LINKED) return true;
  return !entity.archivedAt;
}

function buildLinkageGraph(propertyDetail) {
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
    if (!shouldInclude(lease)) continue;    
    const ltRows = Array.isArray(lease?.leaseTenants) ? lease.leaseTenants : [];
    const leaseTenants = [];

    for (const row of ltRows) {
      const tenant = row?.tenant || null;
      if (!tenant?.id) continue;
      if (!shouldInclude(tenant)) continue;

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
        if (!shouldInclude(o)) continue;
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
        if (!shouldInclude(p)) continue;
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
        if (!shouldInclude(e)) continue;
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
        if (!shouldInclude(v)) continue;
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

  const isArchived = !!property?.archivedAt;

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

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

      const archiveReason = window.prompt(
        "Please provide a reason for archiving this property."
      );

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

            <div className={card.headerLinksRow}>
              {canEditNow ? (
                <button type="button" className={card.linkAction} onClick={goEditProperty}>
                  Edit property
                </button>
              ) : null}

              {showArchiveButton ? (
                <button
                  type="button"
                  className={card.linkAction}
                  onClick={handleToggleArchive}
                  disabled={isArchiving}
                  aria-disabled={isArchiving ? "true" : "false"}
                >
                  {isArchived ? "Unarchive property" : "Archive property"}
                </button>
              ) : (
                <span className={card.linkActionDisabled}>
                  {isArchived ? "Unarchive property" : "Archive property"}
                </span>
              )}
            </div>

            {isArchived ? <div className={shared.muted}>(Archived – read-only for landlords)</div> : null}
          </div>
        </div>
      </div>

      {/* Property info */}
      <div className={page.section}>
        <PropertyCard
          property={property}
          variant="detail"
        />

      </div>

      {/* Leases */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Leases</div>
          <div className={page.sectionHint}>Direct link: Lease ↔ Property</div>
        </div>

        {graph.leases.length ? (
          <div className={page.grid}>
            {graph.leases.map(({ lease }) => {
              if (!lease?.id) return null;

              const archived = !!lease.archivedAt;              
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
          <div className={shared.muted}>No leases linked to this property yet.</div>
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
          {isArchived ? <div className={shared.muted}>Cannot manage links for an archived property.</div> : null}
        </div>
      </div>

      {/* Tenants */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Tenants</div>
          <div className={page.sectionHint}>Indirect link: Tenant → Lease → Property </div>
        </div>

        {graph.tenants.size ? (
          <div className={page.grid}>
            {Array.from(graph.tenants.values()).map(({ tenant, viaLeases }) => {
              if (!tenant?.id) return null;

              const archived = !!tenant.archivedAt;
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
                  footer={
                    <div className={card.inlineAction}>
                      Manage link on Lease
                    </div>
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={shared.muted}>No tenants associated with this property yet. Link via lease first.</div>
        )}
      </div>

      {/* Occupants */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Occupants</div>
          <div className={page.sectionHint}>Indirect link: Occupant → Tenant → Lease → Property</div>
        </div>

        {graph.occupants.size ? (
          <div className={page.grid}>
            {Array.from(graph.occupants.values()).map(({ entity, paths }) => {
              if (!entity?.id) return null;
              const archived = !!entity.archivedAt;
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
          <div className={shared.muted}>No occupants associated with this property yet. Link via tenant first.</div>
        )}
      </div>

      {/* Pets */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Pets</div>
          <div className={page.sectionHint}>Indirect link: Pet → Tenant → Lease → Property</div>
        </div>

        {graph.pets.size ? (
          <div className={page.grid}>
            {Array.from(graph.pets.values()).map(({ entity, paths }) => {
              if (!entity?.id) return null;
              const archived = !!entity.archivedAt;
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
          <div className={shared.muted}>No pets associated with this property yet. Link via tenant first.</div>
        )}
      </div>

      {/* Emergency Contacts */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Emergency Contacts</div>
          <div className={page.sectionHint}>
            Indirect link: Emergency Contact → Tenant → Lease → Property
          </div>
        </div>

        {graph.emergencyContacts.size ? (
          <div className={page.grid}>
            {Array.from(graph.emergencyContacts.values()).map(({ entity, paths }) => {
              if (!entity?.id) return null;
              const archived = !!entity.archivedAt;
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
          <div className={shared.muted}>No emergency contacts associated with this property yet. Link via tenant first.</div>
        )}
      </div>

      {/* Vehicles */}
      <div className={page.section}>
        <div className={page.sectionHeader}>
          <div className={page.sectionTitle}>Vehicles</div>
          <div className={page.sectionHint}>Indirect link: Vehicle → Tenant → Lease → Property</div>
        </div>

        {graph.vehicles.size ? (
          <div className={page.grid}>
            {Array.from(graph.vehicles.values()).map(({ entity, paths }) => {
              if (!entity?.id) return null;
              const archived = !!entity.archivedAt;
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
          <div className={shared.muted}>No vehicles associated with this property yet. Link via tenant first.</div>
        )}
      </div>
    </div>
  );
}
