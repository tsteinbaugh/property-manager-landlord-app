//frontend/newsrc/features/properties/pages/LandlordPropertyDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { apiFetch } from "@lib/apiClient.js";
import { propertiesApi } from "@features/properties/api/properties.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import LinkageCard from "@shared/ui/cards/LinkageCard.jsx"
import PropertyCard from "@features/properties/components/PropertyCard.jsx";

import ui from "@shared/styles/CardLayout.module.css";


function formatMoney(n) {
  if (n === null || n === undefined || Number.isNaN(Number(n))) return "—";
  try {
    return Number(n).toLocaleString();
  } catch {
    return String(n);
  }
}

function leaseTitle(lease, fallbackPropertyTitle) {
  const base =
    (lease?.propertyLabel && String(lease.propertyLabel).trim()) ||
    (lease?.property?.name && String(lease.property.name).trim()) ||
    (lease?.property?.address1 && String(lease.property.address1).trim()) ||
    "";

  if (base) return `Lease for ${base}`;

  const fb = (fallbackPropertyTitle && String(fallbackPropertyTitle).trim()) || "";
  return fb && fb !== "Property" ? `Lease for ${fb}` : "Lease";
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
    lease.rentAmount !== null && lease.rentAmount !== undefined
      ? ` · $${formatMoney(lease.rentAmount)}/mo`
      : "";

  return `${status} · ${dates}${rent}`;
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

  for (const lease of leases) {
    const lt = Array.isArray(lease?.leaseTenants) ? lease.leaseTenants : [];
    const leaseTenants = [];

    for (const row of lt) {
      const tenant = row?.tenant || null;
      if (!tenant?.id) continue;

      leaseTenants.push(tenant);

      if (!result.tenants.has(tenant.id)) {
        result.tenants.set(tenant.id, { tenant, viaLeases: [] });
      }
      result.tenants.get(tenant.id).viaLeases.push({
        leaseId: lease.id,
        leaseLabel: leaseLabel(lease),
        leaseTitle: leaseTitle(lease, propertyDetail?.name || propertyDetail?.address1 || "Property"),
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
          leaseLabel: leaseLabel(lease),
          leaseTitle: leaseTitle(lease, propertyDetail?.name || propertyDetail?.address1 || "Property"),
          leaseRaw: lease,
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
          leaseLabel: leaseLabel(lease),
          leaseTitle: leaseTitle(lease, propertyDetail?.name || propertyDetail?.address1 || "Property"),
          leaseRaw: lease,
        });
      }

      const ecLinks = Array.isArray(tenant?.emergencyContactLinks)
        ? tenant.emergencyContactLinks
        : [];
      for (const link of ecLinks) {
        const e = link?.emergencyContact;
        if (!e?.id) continue;
        if (!result.emergencyContacts.has(e.id))
          result.emergencyContacts.set(e.id, { entity: e, paths: [] });
        result.emergencyContacts.get(e.id).paths.push({
          tenantId: tenant.id,
          tenantName: tenant.name || tenant.email || "Unnamed tenant",
          leaseId: lease.id,
          leaseLabel: leaseLabel(lease),
          leaseTitle: leaseTitle(lease, propertyDetail?.name || propertyDetail?.address1 || "Property"),
          leaseRaw: lease,
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
          leaseLabel: leaseLabel(lease),
          leaseTitle: leaseTitle(lease, propertyDetail?.name || propertyDetail?.address1 || "Property"),
          leaseRaw: lease,
        });
      }
    }

    result.leases.push({ lease, tenants: leaseTenants });
  }

  return result;
}

export default function LandlordPropertyDetailPage({ propertyId }) {
  const navigate = useNavigate();
  const { token, effectiveRole, isSysAdmin } = useUser() || {};

  const role = isSysAdmin
    ? ROLES.SYSADMIN
    : typeof effectiveRole === "string"
      ? effectiveRole.toLowerCase()
      : ROLES.LANDLORD;

  const canUpdate = can(role, R.PROPERTIES, A.UPDATE);
  const canArchiveGrant = can(role, R.PROPERTIES, A.ARCHIVE);

  const [property, setProperty] = useState(null);
  const [summary, setSummary] = useState(null);
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

        const [detail, summaryData] = await Promise.all([
          propertiesApi.detail(propertyId, { token }),
          apiFetch(`/api/properties/${propertyId}/summary`, { token }).catch(() => null),
        ]);

        if (!cancelled) {
          setProperty(detail || null);
          setSummary(summaryData || null);
        }
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (propertyId) load();
    return () => (cancelled = true);
  }, [propertyId, token]);

  const graph = useMemo(() => buildLinkageGraph(property), [property]);

  const isArchived = !!property?.archivedAt;
  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  const title = property?.name || property?.address1 || "Property";

  const reload = async () => {
    const refreshed = await propertiesApi.detail(propertyId, { token });
    setProperty(refreshed);
    const summaryData = await apiFetch(`/api/properties/${propertyId}/summary`, { token }).catch(
      () => null
    );
    setSummary(summaryData || null);
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

  const handleUnlinkLease = async (leaseId) => {
    if (!property?.id || !leaseId) return;

    const ok = window.confirm(
      "Unlink this lease from the property?\n\nThis does NOT delete either record, it only removes the association."
    );
    if (!ok) return;

    try {
      setUnlinkingLeaseId(leaseId)
      await leasesApi.unlinkProperty(leaseId, property.id, { token });
      const fresh = await reloadProperty(property.id);
    } catch (err) {
      console.error("Failed to unlink lease from property", err);
      alert("Failed to unlink lease. Check console for details.");
    } finally {
      setUnlinkingLeaseId(null)
    }
  };

  if (loading) return <div className={ui.page}>Loading property…</div>;
  if (error)
    return (
      <div className={ui.page} style={{ color: "crimson" }}>
        Error loading property: {String(error?.message || error)}
      </div>
    );
  if (!property) return <div className={ui.page}>No data.</div>;

  return (
    <div className={ui.page}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/properties">← Back to properties</Link>
      </div>

      {/* Header */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div>
            <h1 style={{ margin: 0 }}>{title}</h1>

            <div className={ui.headerLinksRow}>
              {canEditNow ? (
                <button
                  type="button"
                  className={ui.linkAction}
                  onClick={() => navigate(`/landlord/properties/new?propertyId=${property.id}`)}
                >
                  Edit property
                </button>
              ) : null}

              {showArchiveButton ? (
                <button
                  type="button"
                  className={ui.linkAction}
                  onClick={handleToggleArchive}
                  disabled={isArchiving}
                  aria-disabled={isArchiving ? "true" : "false"}
                >
                  {isArchived ? "Unarchive property" : "Archive property"}
                </button>
              ) : (
                <span className={ui.linkActionDisabled}>
                  {isArchived ? "Unarchive property" : "Archive property"}
                </span>
              )}
            </div>

            {isArchived ? <div className={ui.muted}>(Archived – read-only for landlords)</div> : null}
          </div>
        </div>
      </div>

      {/* Property info card */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}></div>
        <PropertyCard
          property={property}
          variant="detail"
        />

      </div>

      {/* Leases */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Leases</div>
          <div className={ui.sectionHint}>Direct link: Lease ↔ Property</div>
        </div>

        {graph.leases.length ? (
          <div className={ui.grid}>
            {graph.leases.map(({ lease }) => {
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
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      onClick={(le) => {
                        le.stopPropagation();
                        handleUnlinkLease(lease.id);
                      }}
                      disabled={unlinkingLeaseId === lease.id}
                    >
                      {unlinkingLeaseId === lease.id ? "Unlinking…" : "Unlink from property"}
                    </button>
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No leases linked to this property yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={ui.linkAction}
            onClick={() => navigate(`/landlord/leases/new?propertyId=${property.id}`)}
          >
            Add a lease (new or existing)
          </button>
        </div>
      </div>

      {/* Tenants */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Tenants</div>
          <div className={ui.sectionHint}>Indirect link: Tenant → Lease → Property </div>
        </div>

        {graph.tenants.size ? (
          <div className={ui.grid}>
            {Array.from(graph.tenants.values()).map(({ tenant, viaLeases }) => {
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
                    <div className={`${ui.inlineAction}`}>
                      Manage link on Lease
                    </div>
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No tenants associated with this property yet. Link via lease first.</div>
        )}
      </div>

      {/* Occupants */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Occupants</div>
          <div className={ui.sectionHint}>Indirect link: Occupant → Tenant → Lease → Property</div>
        </div>

        {graph.occupants.size ? (
          <div className={ui.grid}>
            {Array.from(graph.occupants.values()).map(({ entity, paths }) => {
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
                  footer={<div className={`${ui.inlineAction}`}>Manage link on tenant</div>}
                />                
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No occupants associated with this property yet. Link via tenant first.</div>
        )}
      </div>

      {/* Pets */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Pets</div>
          <div className={ui.sectionHint}>Indirect link: Pet → Tenant → Lease → Property</div>
        </div>

        {graph.pets.size ? (
          <div className={ui.grid}>
            {Array.from(graph.pets.values()).map(({ entity, paths }) => {
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
                  footer={<div className={`${ui.inlineAction}`}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No pets associated with this property yet. Link via tenant first.</div>
        )}
      </div>

      {/* Emergency Contacts */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Emergency Contacts</div>
          <div className={ui.sectionHint}>
            Indirect link: Emergency Contact → Tenant → Lease → Property
          </div>
        </div>

        {graph.emergencyContacts.size ? (
          <div className={ui.grid}>
            {Array.from(graph.emergencyContacts.values()).map(({ entity, paths }) => {
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
                  footer={<div className={`${ui.inlineAction}`}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No emergency contacts associated with this property yet. Link via tenant first.</div>
        )}
      </div>

      {/* Vehicles */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Vehicles</div>
          <div className={ui.sectionHint}>Indirect link: Vehicle → Tenant → Lease → Property</div>
        </div>

        {graph.vehicles.size ? (
          <div className={ui.grid}>
            {Array.from(graph.vehicles.values()).map(({ entity, paths }) => {
              const archived = !!entity.archivedAt;
              const vehicleName =
                entity.permit ||
                entity.plate ||
                `${entity.year}, ${entity.make} ${entity.model}` ||
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
                  footer={<div className={`${ui.inlineAction}`}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No vehicles associated with this property yet. Link via tenant first.</div>
        )}
      </div>
    </div>
  );
}
