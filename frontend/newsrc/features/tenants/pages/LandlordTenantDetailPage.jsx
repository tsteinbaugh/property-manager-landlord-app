// newsrc/features/residents/pages/tenants/LandlordTenantDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";

import ui from "@shared/styles/CardLayout.module.css";

function formatMoney(n) {
  if (n === null || n === undefined || Number.isNaN(Number(n))) return "—";
  try {
    return Number(n).toLocaleString();
  } catch {
    return String(n);
  }
}

function leaseLabel(lease) {
  const base =
    lease?.propertyLabel ||
    lease?.property?.name ||
    lease?.property?.address1 ||
    "";
  return base ? `Lease for ${base}` : "Lease";
}

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

function showIfKnown(v) {
  if (v === null || v === undefined) return null;
  const s = String(v).trim();
  if (!s) return null;
  return s.toUpperCase() === "UNKNOWN" ? null : s;
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
    return tenantsApi.detail(idToLoad, { token });
  }

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const t = await reloadTenant(tenantId);

        if (cancelled) return;

        if (!t) {
          setError(new Error("Tenant not found"));
          setTenant(null);
        } else {
          setTenant(t);
        }
      } catch (err) {
        console.error("Failed to load tenant", err);
        if (!cancelled) {
          setError(err);
          setTenant(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (tenantId && token) load();

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
  const emergencyContactLinks = Array.isArray(tenant?.emergencyContactLinks) ? tenant.emergencyContactLinks : [];
  const vehicleLinks = Array.isArray(tenant?.vehicleLinks) ? tenant.vehicleLinks : [];

  const handleToggleArchive = async () => {
    if (!tenant?.id) return;

    const currentlyArchived = !!tenant.archivedAt;

    if (!currentlyArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this tenant?\n\n" +
          "It will be hidden from active lists. Only a system administrator can unarchive it."
      );
      if (!ok) return;
    } else if (!isSysAdmin) {
      alert(
        "Only a system administrator can unarchive an archived tenant. " +
          "Please contact your system admin if this needs to be reactivated."
      );
      return;
    }

    try {
      setArchiving(true);
      await tenantsApi.toggleArchive(tenant.id, { token });
      const fresh = await reloadTenant(tenant.id);
      setTenant(fresh || tenant);
    } catch (err) {
      console.error("Failed to toggle tenant archived state", err);
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
        <div className={ui.sectionHeader}>
        </div>

        <Card clickable={false} archived={isArchived}>
          <CardHeader
            title="Tenant Info"
            badgeText={isArchived ? "Archived" : "Tenant"}
            badgeTone={isArchived ? "archived" : "idle"}
          />

          <div className={ui.cardBody}>
            <div>Email: {tenant.email || "—"}</div>
            <div>Phone: {tenant.phone || "—"}</div>
            {tenant.age ? <div>Age: {tenant.age}</div> : null}
            {tenant.heightFeet && tenant.heightInches ? <div>Height: {tenant.heightFeet}' {tenant.heightInches}"</div> : null}
            {tenant.weight ? <div>Weight: {tenant.weight} pounds</div> : null}
            {tenant.income ? <div>Income: ${tenant.income}/mo</div> : null}
            {tenant.creditScore ? <div>Credit Score: {tenant.creditScore}</div> : null}
            {showIfKnown(tenant.sex) ? <div>Sex: {showIfKnown(tenant.sex)}</div> : null}
            {showIfKnown(tenant.hairColor) ? <div>Hair color: {showIfKnown(tenant.hairColor)}</div> : null}
            {showIfKnown(tenant.eyeColor) ? <div>Eye Color: {showIfKnown(tenant.eyeColor)}</div> : null}
            {showIfKnown(tenant.bodyBuild) ? <div>Body build: {showIfKnown(tenant.bodyBuild)}</div> : null}
            {tenant.markings ? <div>Markings: {tenant.markings}</div> : null}
            {tenant.occupation ? <div>Occupation: {tenant.occupation}</div> : null}
            {tenant.employer ? <div>Employer: {tenant.employer}</div> : null}
            {tenant.notes ? <div>Notes: {tenant.notes}</div> : null}
            {tenant.violations ? <div>Violations: {tenant.violations}</div> : null}
          </div>
        </Card>
      </div>

      {/* Leases (DIRECT) */}
      <div className={ui.section}>
        <div className={ui.sectionHeader}>
          <div className={ui.sectionTitle}>Leases</div>
          <div className={ui.sectionHint}>Direct link: Lease ↔ Tenant</div>
        </div>

        {leaseItems.length ? (
          <div className={ui.grid}>
            {leaseItems.map(({ lt, lease }) => {
              const archived = !!lease.archivedAt;
              const label = leaseLabel(lease);

              const property = lease?.property || null;
              const propertyLabel =
                property?.name || property?.address1 || property?.address || "";

              return (
                <Card
                  key={lease.id}
                  archived={archived}
                  onClick={() => navigate(`/landlord/leases/${lease.id}`)}
                >
                  <CardHeader
                    title={label}
                    badgeText={archived ? "Archived" : (lease.status || "Lease")}
                    badgeTone={archived ? "archived" : "idle"}
                  />

                  <div className={ui.cardBody}>
                    <LinkageLine parts={[label, title]} />
                  </div>

                  <div className={ui.inlineActions}>
                    <button
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUnlinkLease(lease.id);
                      }}
                      disabled={unlinkingLeaseId === lease.id}
                    >
                      {unlinkingLeaseId === lease.id ? "Unlinking…" : "Unlink from tenant"}
                    </button>
                  </div>
                </Card>
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
          <div className={ui.sectionHint}>Indirect link:  Property → Lease → Tenant</div>
        </div>

        {propertyGroups.length ? (
          <div className={ui.grid}>
            {propertyGroups.map(({ property, leases }) => {
              const archived = !!property.archivedAt;
              const label = property.name || property.address1 || property.address || "Property";
              const line2 =
                property.city || property.state || property.postalCode
                  ? [property.city, property.state, property.postalCode].filter(Boolean).join(", ")
                  : "";

              // pick a lease to “manage link on lease”
              const firstLease = Array.isArray(leases) ? leases[0] : null;
              const firstLeaseLabel = firstLease ? leaseLabel(firstLease) : null;

              return (
                <Card
                  key={property.id}
                  archived={archived}
                  onClick={() => navigate(`/landlord/properties/${property.id}`)}
                >
                  <CardHeader
                    title={label}
                    badgeText={archived ? "Archived" : "Property"}
                    badgeTone={archived ? "archived" : "idle"}
                  />

                  <div className={ui.cardBody}>
                    {property.address1 ? <div>{property.address1}</div> : null}
                    {line2 ? <div className={ui.muted}>{line2}</div> : null}

                    {firstLeaseLabel ? (
                      <LinkageLine parts={[label, firstLeaseLabel, title]} />
                    ) : null}
                  </div>

                  {firstLease?.id ? (
                    <div className={ui.inlineActions}>
                      <button
                        type="button"
                        className={ui.inlineAction}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/landlord/leases/${firstLease.id}`);
                        }}
                      >
                        Manage link on lease
                      </button>
                    </div>
                  ) : null}
                </Card>
              );
            })}
          </div>
        ) : (
          <div className={ui.muted}>No properties associated with this tenant yet.</div>
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
          <div className={ui.sectionHint}>Direct link:  Occupant ↔ Tenant</div>
        </div>

        {occupantLinks.length ? (
          <div className={ui.grid}>
            {occupantLinks.map((link) => {
              const o = link?.occupant;
              if (!o?.id) return null;

              const archived = !!o.archivedAt;
              const name = o.name || "Unnamed occupant";

              return (
                <Card key={o.id} archived={archived} onClick={() => navigate(`/landlord/occupants/${o.id}`)}>
                  <CardHeader title={name} badgeText={archived ? "Archived" : "Occupant"} badgeTone={archived ? "archived" : "idle"} />
                  <div className={ui.cardBody}>
                    <LinkageLine parts={[name, title]} />
                  </div>
                  <div className={ui.inlineActions}>
                    <button
                      type="button"
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUnlinkOccupant(o.id);
                      }}
                      disabled={unlinkingOccupantId === o.id}
                    >
                      {unlinkingOccupantId === o.id ? "Unlinking…" : "Unlink from tenant"}
                    </button>
                  </div>
                </Card>
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
            Add a occupant (new or existing)
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
              const name = p.name || "Unnamed pet";

              return (
                <Card key={p.id} archived={archived} onClick={() => navigate(`/landlord/pets/${p.id}`)}>
                  <CardHeader title={name} badgeText={archived ? "Archived" : "Pet"} badgeTone={archived ? "archived" : "idle"} />
                  <div className={ui.cardBody}>
                    <LinkageLine parts={[name, title]} />
                  </div>
                  <div className={ui.inlineActions}>
                    <button
                      type="button"
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUnlinkPet(p.id);
                      }}
                      disabled={unlinkingPetId === p.id}
                    >
                      {unlinkingPetId === p.id ? "Unlinking…" : "Unlink from tenant"}
                    </button>
                  </div>
                </Card>
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

              const archived = !!e.archivedAt;
              const name = e.name || "Unnamed emergency contact";

              return (
                <Card key={e.id} archived={archived} onClick={() => navigate(`/landlord/emergencyContacts/${e.id}`)}>
                  <CardHeader title={name} badgeText={archived ? "Archived" : "Contact"} badgeTone={archived ? "archived" : "idle"} />
                  <div className={ui.cardBody}>
                    <LinkageLine parts={[name, title]} />
                  </div>
                  <div className={ui.inlineActions}>
                    <button
                      type="button"
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      onClick={(ev) => {
                        ev.stopPropagation();
                        handleUnlinkEmergencyContact(e.id);
                      }}
                      disabled={unlinkingEmergencyContactId === e.id}
                    >
                      {unlinkingEmergencyContactId === e.id ? "Unlinking…" : "Unlink from tenant"}
                    </button>
                  </div>
                </Card>
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
              navigate(`/landlord/emergencyContacts/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
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
          <div className={ui.sectionHint}>Direct link:  Vehicle ↔ Tenant</div>
        </div>

        {vehicleLinks.length ? (
          <div className={ui.grid}>
            {vehicleLinks.map((link) => {
              const v = link?.vehicle;
              if (!v?.id) return null;

              const archived = !!v.archivedAt;
              const label =
                v.permit ||
                v.plate ||
                [v.year ? `${v.year},` : null, v.make, v.model].filter(Boolean).join(" ") ||
                "Unnamed vehicle";

              return (
                <Card key={v.id} archived={archived} onClick={() => navigate(`/landlord/vehicles/${v.id}`)}>
                  <CardHeader title={label} badgeText={archived ? "Archived" : "Vehicle"} badgeTone={archived ? "archived" : "idle"} />
                  <div className={ui.cardBody}>
                    <LinkageLine parts={[label, title]} />
                  </div>
                  <div className={ui.inlineActions}>
                    <button
                      type="button"
                      className={`${ui.inlineAction} ${ui.inlineActionDanger}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUnlinkVehicle(v.id);
                      }}
                      disabled={unlinkingVehicleId === v.id}
                    >
                      {unlinkingVehicleId === v.id ? "Unlinking…" : "Unlink from tenant"}
                    </button>
                  </div>
                </Card>
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
