// newsrc/features/leases/pages/LandlordLeaseDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { leasesApi } from "@features/leases/api/leases.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import LinkageCard from "@shared/ui/cards/LinkageCard.jsx"
import LeaseCard from "@features/leases/components/LeaseCard.jsx"

import ui from "@shared/styles/CardLayout.module.css";

function leaseTitle(lease) {
  const base =
    lease?.propertyName ||
    lease?.property?.name ||
    lease?.property?.address1 ||
    "";
  return base ? `Lease for ${base}` : "Lease";
}

function normalizeLinkedEntities(tenant) {
  // Supports BOTH shapes:
  // - tenant.occupants/pets/emergencyContacts/vehicles
  // - tenant.occupantLinks/petLinks/emergencyContactLinks/vehicleLinks
  const occupants =
    Array.isArray(tenant?.occupants)
      ? tenant.occupants
      : Array.isArray(tenant?.occupantLinks)
        ? tenant.occupantLinks.map((x) => x?.occupant).filter(Boolean)
        : [];

  const pets =
    Array.isArray(tenant?.pets)
      ? tenant.pets
      : Array.isArray(tenant?.petLinks)
        ? tenant.petLinks.map((x) => x?.pet).filter(Boolean)
        : [];

  const emergencyContacts =
    Array.isArray(tenant?.emergencyContacts)
      ? tenant.emergencyContacts
      : Array.isArray(tenant?.emergencyContactLinks)
        ? tenant.emergencyContactLinks.map((x) => x?.emergencyContact).filter(Boolean)
        : [];

  const vehicles =
    Array.isArray(tenant?.vehicles)
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

  const role = isSysAdmin
    ? ROLES.SYSADMIN
    : typeof effectiveRole === "string"
      ? effectiveRole.toLowerCase()
      : ROLES.LANDLORD;

  const canUpdate = can(role, R.LEASES, A.UPDATE);
  const canArchiveGrant = can(role, R.LEASES, A.ARCHIVE);

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
        if (!cancelled) setLease(row || null);
      } catch (err) {
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

    return () => { cancelled = true; };
  }, [leaseId, token]);

  const isArchived = useMemo(() => {
    return !!lease?.archivedAt;
  }, [lease]);

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveLink = canArchiveNow || canUnarchiveNow;

  const property = lease?.property || null;
  const propertyName =
    property?.name ||
    (property?.address1
      ? [property.address1, property.city, property.state, property.postalCode]
          .filter(Boolean)
          .join(", ")
      : "") ||
    "Unlinked property";

  const title = leaseTitle(lease);

  const archived = !!property?.archivedAt;

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

  const handleUnlinkTenant = async (tenantId) => {
    if (!lease?.id || !tenantId) return;

    const ok = window.confirm(
      "Unlink this tenant from this lease?\n\n" +
        "This does NOT delete either record, it only removes the association."
    );
    if (!ok) return;

    try {
      setUnlinkingTenantId(tenantId);
      await leasesApi.unlinkTenant(lease.id, tenantId, { token });
      const fresh = await reloadLease(lease.id);
      setLease(fresh || lease);
    } catch (err) {
      console.error("Failed to unlink tenant from lease", err);
      alert("Failed to unlink tenant. Check console for details.");
    } finally {
      setUnlinkingTenantId(null)
    }
  };

  const handleUnlinkProperty = async (propertyId) => {
    if (!lease?.id || !propertyId) return;

    const ok = window.confirm(
      "Unlink this property from this lease?\n\n" +
        "This does NOT delete either record, it only removes the association."
    );
    if (!ok) return;

    try {
      setUnlinkingPropertyId(propertyId);
      await leasesApi.unlinkProperty(lease.id, propertyId, { token });
      const fresh = await reloadLease(lease.id);
      setLease(fresh || lease);
    } catch (err) {
      console.error("Failed to unlink property from lease", err);
      alert("Failed to unlink property. Check console for details.");
    } finally {
      setUnlinkingPropertyId(null)
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
    const tenantIds = Array.from(new Set(leaseTenants.map((lt) => lt.tenantId).filter(Boolean)));

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
            const t = await tenantsApi.detail(id, { token });
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

    return () => { cancelled = true; };
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

  if (loading) return <div className={ui.page}>Loading lease…</div>;
  if (error) return <div className={ui.page} style={{ color: "crimson" }}>Error loading lease: {String(error?.message || error)}</div>;
  if (!lease) return <div className={ui.page}>No data.</div>;

  return (
    <div className={ui.page}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/leases">← Back to leases</Link>
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
                  onClick={() => navigate(`/landlord/leases/new?leaseId=${lease.id}`)}
                >
                  Edit lease
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
                  {isArchived ? "Unarchive lease" : "Archive lease"}
                </button>
              ) : (
                <span className={ui.linkActionDisabled}>
                  {isArchived ? "Unarchive lease" : "Archive lease"}
                </span>
              )}
            </div>

            {isArchived ? <div className={ui.muted}>(Archived – read-only for landlords)</div> : null}
          </div>
        </div>
      </div>

      {/* Lease info */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}></div>
          <LeaseCard
            lease={lease}
            variant="detail"
          />
      </div>

      {/* Property */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Property</div>
          <div className={ui.sectionHint}>Direct link: Property ↔ Lease</div>
        </div>

        {property ? (
          <LinkageCard
            key={property.id}
            title={propertyName}
            archived={archived}
            badgeText={archived ? "Archived" : "Property"}
            badgeTone={archived ? "archived" : "idle"}
            onClick={() => navigate(`/landlord/properties/${property.id}`)}
            linkageParts={[propertyName, title]}
            footer={
              <button
                type="button"
                className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                onClick={(pr) => {
                  pr.stopPropagation();
                  handleUnlinkProperty(property.id);
                }}
                disabled={unlinkingPropertyId === property.id}
              >
                {unlinkingTenantId === property.id ? "Unlinking…" : "Unlink from lease"}
              </button>
            }                  
          />          
        ) : (
          <div className={ui.muted}>No property linked yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={ui.linkAction}
            onClick={() => navigate(`/landlord/properties/new?forLease=1&leaseId=${lease.id}`)}
          >
            Add a property (new or existing)
          </button>
        </div>
      </div>

      {/* Tenants */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Tenants</div>
          <div className={ui.sectionHint}>Direct link: Tenant ↔ Lease</div>
        </div>

        {leaseTenants.length ? (
          <div className={ui.grid}>
            {leaseTenants.map((lt) => {
              const t = tenantById.get(lt.tenantId) || null;
              const tenantName = t?.name || lt.tenantName || "(Unnamed tenant)";
              const archived = !!t?.archivedAt;

              return (
                <LinkageCard
                  key={lt.id}
                  title={tenantName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Tenant"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/tenants/${t.id}`)}
                  linkageParts={[tenantName, title]}
                  footer={
                    <button
                      type="button"
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      onClick={(lete) => {
                        lete.stopPropagation();
                        handleUnlinkTenant(lt.id);
                      }}
                      disabled={unlinkingTenantId === lt.id}
                    >
                      {unlinkingTenantId === lt.id ? "Unlinking…" : "Unlink from lease"}
                    </button>
                  }                  
                />
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No tenants linked to this lease yet.</div>
        )}

        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            className={ui.linkAction}
            onClick={() => navigate(`/landlord/tenants/new?forLease=1&leaseId=${lease.id}`)}
          >
            Add a tenant (new or existing)
          </button>
        </div>
      </div>

      {/* Residents via tenants */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Occupants</div>
          <div className={ui.sectionHint}>Indirect link: Occupant → Tenant → Lease</div>
        </div>

        {tenantDetailsLoading ? (
          <div className={ui.muted}>Loading occupants…</div>
        ) : tenantDetailsError ? (
          <div style={{ color: "#b91c1c" }}>Failed to load occupants for this lease.</div>
        ) : pooled.occupants.length ? (
          <div className={ui.grid}>
            {pooled.occupants.map((o) => {
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
                  linkageParts={[occupantName, tenantName, title]}
                  linkageHint="To remove this occupant from this lease, unlink it from the relevant tenant."
                  footer={<div className={`${ui.inlineAction}`}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No occupants linked through tenants on this lease yet.</div>
        )}
      </div>

      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Pets</div>
          <div className={ui.sectionHint}>Indirect link: Pet → Tenant → Lease</div>
        </div>

        {tenantDetailsLoading ? (
          <div className={ui.muted}>Loading pets…</div>
        ) : tenantDetailsError ? (
          <div style={{ color: "#b91c1c" }}>Failed to load pets for this lease.</div>
        ) : pooled.pets.length ? (
          <div className={ui.grid}>
            {pooled.pets.map((p) => {
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
                  linkageParts={[petName, tenantName, title]}
                  linkageHint="To remove this pet from this lease, unlink it from the relevant tenant."
                  footer={<div className={`${ui.inlineAction}`}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No pets linked through tenants on this lease yet.</div>
        )}
      </div>

      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Emergency Contacts</div>
          <div className={ui.sectionHint}>Indirect link: Emergency Contact → Tenant → Lease</div>
        </div>

        {tenantDetailsLoading ? (
          <div className={ui.muted}>Loading emergency contacts…</div>
        ) : tenantDetailsError ? (
          <div style={{ color: "#b91c1c" }}>Failed to load emergency contacts for this lease.</div>
        ) : pooled.emergencyContacts.length ? (
          <div className={ui.grid}>
            {pooled.emergencyContacts.map((e) => {
              const archived = !!e.archivedAt;
              const emergencyContactName = e.name || "Unnamed emergency contact";
              const tenantName = e._tenantName || "Unnamed tenant";
              return (
                <LinkageCard
                  key={e.id}
                  title={emergencyContactName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Emergency Contact"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/emergencyContacts/${e.id}`)}
                  linkageParts={[emergencyContactName, tenantName, title]}
                  linkageHint="To remove this emergency contact from this lease, unlink it from the relevant tenant."
                  footer={<div className={`${ui.inlineAction}`}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No emergency contacts linked through tenants on this lease yet.</div>
        )}
      </div>

      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Vehicles</div>
          <div className={ui.sectionHint}>Indirect link: Vehicle → Tenant → Lease</div>
        </div>

        {tenantDetailsLoading ? (
          <div className={ui.muted}>Loading vehicles…</div>
        ) : tenantDetailsError ? (
          <div style={{ color: "#b91c1c" }}>Failed to load vehicles for this lease.</div>
        ) : pooled.vehicles.length ? (
          <div className={ui.grid}>
            {pooled.vehicles.map((v) => {
              const archived = !!v.archivedAt;
              const vehicleName =
                v.permit ||
                v.plate ||
                [v.year ? `${v.year},` : null, v.make, v.model].filter(Boolean).join(" ") ||
                "Unnamed vehicle";
              const tenantName = v._tenantName || "UInnamed tenant";

              return (
                <LinkageCard
                  key={v.id}
                  title={vehicleName}
                  archived={archived}
                  badgeText={archived ? "Archived" : "Vehicle"}
                  badgeTone={archived ? "archived" : "idle"}
                  onClick={() => navigate(`/landlord/vehicles/${v.id}`)}
                  linkageParts={[vehicleName, tenantName, title]}
                  linkageHint="To remove this vehicle from this lease, unlink it from the relevant tenant."
                  footer={<div className={`${ui.inlineAction}`}>Manage link on tenant</div>}
                />
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No vehicles linked through tenants on this lease yet.</div>
        )}
      </div>
    </div>
  );
}
