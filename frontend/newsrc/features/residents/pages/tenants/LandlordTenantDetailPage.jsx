// newsrc/features/residents/pages/tenants/LandlordTenantDetailPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";

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

  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSaving, setSaving] = useState(false);
  const [isArchiving, setArchiving] = useState(false);

  const [unlinkingOccupantId, setUnlinkingOccupantId] = useState(null);
  const [unlinkingPetId, setUnlinkingPetId] = useState(null);
  const [unlinkingEmergencyContactId, setUnlinkingEmergencyContactId] =
    useState(null);
  const [unlinkingVehicleId, setUnlinkingVehicleId] = useState(null);

  async function reloadTenant(idToLoad = tenantId) {
    if (!idToLoad || !token) return null;
    const t = await tenantsApi.detail(idToLoad, { token });
    return t;
  }

  // Load tenant (rich detail)
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const t = await reloadTenant(tenantId);

        if (!cancelled) {
          if (!t) {
            setError(new Error("Tenant not found"));
            setTenant(null);
          } else {
            setTenant(t);
          }
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

  // When tenant loads, initialize edit fields
  useEffect(() => {
    if (tenant) {
      setName(tenant.name || "");
      setEmail(tenant.email || "");
      setPhone(tenant.phone || "");
    }
  }, [tenant]);

  // ---------- Derived (MUST be hook-safe on ALL renders) ----------
  const isArchived = !!(tenant?.isArchived ?? tenant?.archived);
  const title = tenant?.name || tenant?.email || "Unnamed tenant";

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  const leaseTenants = Array.isArray(tenant?.leaseTenants) ? tenant.leaseTenants : [];

  const propertyGroups = useMemo(() => {
    const map = new Map();

    for (const lt of leaseTenants) {
      const lease = lt?.lease;
      const property = lease?.property;
      if (!property?.id) continue;

      if (!map.has(property.id)) {
        map.set(property.id, { property, leases: [] });
      }
      map.get(property.id).leases.push({ lt, lease });
    }

    return Array.from(map.values());
  }, [leaseTenants]);

  const leasesMissingPropertyCount = useMemo(() => {
    return leaseTenants.filter((lt) => !lt?.lease?.property?.id).length;
  }, [leaseTenants]);

  // ---------- Handlers ----------
  const handleSave = async () => {
    if (!name.trim()) {
      alert("Name is required.");
      return;
    }
    if (!tenant?.id) return;

    try {
      setSaving(true);

      await tenantsApi.update(
        tenant.id,
        {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
        },
        { token }
      );

      const fresh = await reloadTenant(tenant.id);
      setTenant(fresh || tenant);
      setEditing(false);
    } catch (err) {
      console.error("Failed to update tenant", err);
      alert("Failed to update tenant. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    if (tenant) {
      setName(tenant.name || "");
      setEmail(tenant.email || "");
      setPhone(tenant.phone || "");
    }
    setEditing(false);
  };

  const handleToggleArchive = async () => {
    if (!tenant?.id) return;

    const currentlyArchived = !!(tenant.isArchived ?? tenant.archived);

    if (!currentlyArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this tenant?\n\n" +
          "They will be hidden from active tenant lists. Only a system administrator can unarchive them."
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

  const handleUnlinkOccupant = async (occupantId) => {
    if (!tenant?.id || !occupantId) return;

    const ok = window.confirm(
      "Unlink this occupant from this tenant?\n\nThis does NOT delete either record."
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
      "Unlink this pet from this tenant?\n\nThis does NOT delete either record."
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
      "Unlink this emergency contact from this tenant?\n\nThis does NOT delete either record."
    );
    if (!ok) return;

    try {
      setUnlinkingEmergencyContactId(emergencyContactId);
      await tenantsApi.unlinkEmergencyContact(tenant.id, emergencyContactId, {
        token,
      });
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
      "Unlink this vehicle from this tenant?\n\nThis does NOT delete either record."
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

  const handleUnlinkLease = async (leaseId) => {
    if (!tenant?.id || !leaseId) return;

    const ok = window.confirm(
      "Unlink this lease from this tenant?\n\n" +
        "This does NOT delete the lease or tenant, it just removes the association."
    );
    if (!ok) return;

    try {
      const result = await leasesApi.unlinkTenant(leaseId, tenant.id, { token });

      // If there was no join row but this tenant is the legacy tenantId, clear it
      if (result?.notFound) {
        // NOTE: your leasesApi.update signature probably expects (id, patch, opts).
        // If you still need this legacy cleanup, implement it in the backend or provide a patch here.
        // Leaving as-is to preserve behavior, but this call likely does nothing useful:
        await leasesApi.update(leaseId, {}, { token });
      }

      const fresh = await reloadTenant(tenant.id);
      setTenant(fresh);
    } catch (err) {
      console.error("Failed to unlink lease from tenant", err);
      alert("Failed to unlink lease. Check console for details.");
    }
  };

  // ---------- Early returns AFTER all hooks ----------
  if (loading) return <div>Loading tenant…</div>;

  if (error) {
    return (
      <div style={{ color: "crimson", padding: 16 }}>
        Error loading tenant: {String(error.message || error)}
      </div>
    );
  }

  if (!tenant) return <div style={{ padding: 16 }}>No data.</div>;

  // ---------- UI ----------
  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/residents">← Back to residents</Link>
      </div>

      {/* Header + actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <div>
          {!isEditing ? (
            <>
              <h2 style={{ margin: "8px 0" }}>{title}</h2>
              {isArchived && (
                <div style={{ color: "#888", fontSize: 12 }}>
                  (Archived – read-only for landlords)
                </div>
              )}
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                maxWidth: 480,
              }}
            >
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                <button type="button" onClick={handleSave} disabled={isSaving}>
                  {isSaving ? "Saving…" : "Save"}
                </button>
                <button type="button" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          {canEditNow && !isEditing && (
            <button type="button" onClick={() => setEditing(true)}>
              Edit
            </button>
          )}

          {showArchiveButton ? (
            <ArchiveButton
              archived={isArchived}
              onToggle={handleToggleArchive}
              disabled={isArchiving}
            />
          ) : (
            <button
              type="button"
              disabled
              title={
                isArchived
                  ? "Only a system administrator can unarchive this tenant."
                  : "Insufficient permissions to archive this tenant."
              }
              style={{ opacity: 0.5 }}
            >
              {isArchived ? "Unarchive" : "Archive"}
            </button>
          )}
        </div>
      </div>

      {/* Properties for this tenant (aggregated across leases) */}
      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
          marginTop: 16,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Properties
        </h3>

        {propertyGroups.length > 0 ? (
          <ul style={{ paddingLeft: 18 }}>
            {propertyGroups.map(({ property, leases }) => {
              const label = property.name || property.address1 || "(unnamed property)";

              const line2 =
                property.city || property.state || property.postalCode
                  ? `${property.city || ""}${property.city ? ", " : ""}${property.state || ""} ${
                      property.postalCode || ""
                    }`.trim()
                  : "";

              return (
                <li key={property.id} style={{ marginBottom: 10 }}>
                  <div>
                    <Link to={`/landlord/properties/${property.id}`}>{label}</Link>
                  </div>

                  {(property.address1 || line2) && (
                    <div style={{ fontSize: 12, color: "#4b5563" }}>
                      {property.address1 || ""}
                      {line2 ? (
                        <>
                          {property.address1 ? " · " : ""}
                          {line2}
                        </>
                      ) : null}
                    </div>
                  )}

                  {leases?.length > 0 && (
                    <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
                      Leases here: {leases.map(({ lease }) => lease?.status || "UNKNOWN").join(", ")}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            No properties associated with this tenant yet.
          </div>
        )}

        {leasesMissingPropertyCount > 0 && (
          <div style={{ fontSize: 12, color: "#6b7280", marginTop: 8 }}>
            Note: {leasesMissingPropertyCount} lease
            {leasesMissingPropertyCount === 1 ? "" : "s"} on this tenant{" "}
            {leasesMissingPropertyCount === 1 ? "is" : "are"} not linked to a property yet.
          </div>
        )}
      </section>

      {/* Leases for this tenant */}
      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
          marginTop: 16,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Leases</h3>

        {leaseTenants.length > 0 ? (
          <ul style={{ paddingLeft: 18 }}>
            {leaseTenants.map((lt) => {
              const lease = lt?.lease;
              if (!lease) return null;

              const property = lease.property;

              return (
                <li key={lt.id} style={{ marginBottom: 6 }}>
                  <Link to={`/landlord/leases/${lease.id}`}>Lease</Link>
                  {lease.status && <> — {lease.status}</>}
                  {lease.rentAmount != null && ` · $${lease.rentAmount}/mo`}
                  {lease.startDate && ` · from ${lease.startDate}`}
                  {lease.endDate && ` to ${lease.endDate}`}

                  <button
                    type="button"
                    onClick={() => handleUnlinkLease(lease.id)}
                    style={{ marginLeft: 8, fontSize: 11, padding: "2px 6px" }}
                  >
                    Unlink from this tenant
                  </button>

                  {property && (
                    <div style={{ fontSize: 12, color: "#4b5563" }}>
                      Property: {property.name || property.address1 || "(property details)"}
                    </div>
                  )}

                  {lt.isPrimary && (
                    <div style={{ fontSize: 12, color: "#2563eb" }}>
                      Primary tenant on this lease
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <div>No leases associated with this tenant yet.</div>
        )}

        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Link to={`/landlord/leases/new?tenantId=${tenant.id}`}>+ Add lease for this tenant</Link>
        </div>
      </section>

      {/* Occupants for this tenant (via many-to-many) */}
      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
          marginTop: 16,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Occupants for this tenant
        </h3>

        {Array.isArray(tenant.occupantLinks) && tenant.occupantLinks.length > 0 ? (
          <ul style={{ paddingLeft: 18, fontSize: 14 }}>
            {tenant.occupantLinks.map((link) => {
              const o = link?.occupant;
              if (!o?.id) return null;

              return (
                <li
                  key={o.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <span>
                    <Link to={`/landlord/occupants/${o.id}`}>{o.name || "Unnamed occupant"}</Link>
                  </span>

                  <button
                    type="button"
                    onClick={() => handleUnlinkOccupant(o.id)}
                    disabled={unlinkingOccupantId === o.id}
                    style={{ fontSize: 11, padding: "2px 6px" }}
                  >
                    {unlinkingOccupantId === o.id ? "Unlinking…" : "Unlink"}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>No occupants linked to this tenant yet.</div>
        )}

        <div style={{ marginTop: 12 }}>
          <button
            type="button"
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/occupants/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
            }}
          >
            Manage occupants for this tenant
          </button>
        </div>
      </section>

      {/* Pets for this tenant (via many-to-many) */}
      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
          marginTop: 16,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Pets for this tenant
        </h3>

        {Array.isArray(tenant.petLinks) && tenant.petLinks.length > 0 ? (
          <ul style={{ paddingLeft: 18, fontSize: 14 }}>
            {tenant.petLinks.map((link) => {
              const p = link?.pet;
              if (!p?.id) return null;

              return (
                <li
                  key={p.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <span>
                    <Link to={`/landlord/pets/${p.id}`}>{p.name || "Unnamed pet"}</Link>
                  </span>

                  <button
                    type="button"
                    onClick={() => handleUnlinkPet(p.id)}
                    disabled={unlinkingPetId === p.id}
                    style={{ fontSize: 11, padding: "2px 6px" }}
                  >
                    {unlinkingPetId === p.id ? "Unlinking…" : "Unlink"}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>No pets linked to this tenant yet.</div>
        )}

        <div style={{ marginTop: 12 }}>
          <button
            type="button"
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/pets/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
            }}
          >
            Manage pets for this tenant
          </button>
        </div>
      </section>

      {/* Emergency contacts for this tenant (via many-to-many) */}
      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
          marginTop: 16,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Emergency contacts for this tenant
        </h3>

        {Array.isArray(tenant.emergencyContactLinks) && tenant.emergencyContactLinks.length > 0 ? (
          <ul style={{ paddingLeft: 18, fontSize: 14 }}>
            {tenant.emergencyContactLinks.map((link) => {
              const e = link?.emergencyContact;
              if (!e?.id) return null;

              return (
                <li
                  key={e.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <span>
                    <Link to={`/landlord/emergencyContacts/${e.id}`}>
                      {e.name || "Unnamed emergency contact"}
                    </Link>
                  </span>

                  <button
                    type="button"
                    onClick={() => handleUnlinkEmergencyContact(e.id)}
                    disabled={unlinkingEmergencyContactId === e.id}
                    style={{ fontSize: 11, padding: "2px 6px" }}
                  >
                    {unlinkingEmergencyContactId === e.id ? "Unlinking…" : "Unlink"}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            No emergency contacts linked to this tenant yet.
          </div>
        )}

        <div style={{ marginTop: 12 }}>
          <button
            type="button"
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(
                `/landlord/emergencyContacts/new?tenantId=${tenant.id}&returnTo=${returnTo}`
              );
            }}
          >
            Manage emergency contacts for this tenant
          </button>
        </div>
      </section>

      {/* Vehicles for this tenant (via many-to-many) */}
      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
          marginTop: 16,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Vehicles for this tenant
        </h3>

        {Array.isArray(tenant.vehicleLinks) && tenant.vehicleLinks.length > 0 ? (
          <ul style={{ paddingLeft: 18, fontSize: 14 }}>
            {tenant.vehicleLinks.map((link) => {
              const v = link?.vehicle;
              if (!v?.id) return null;

              return (
                <li
                  key={v.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <span>
                    <Link to={`/landlord/vehicles/${v.id}`}>
                      {v.permit || v.plate || "Unnamed vehicle"}
                    </Link>
                  </span>

                  <button
                    type="button"
                    onClick={() => handleUnlinkVehicle(v.id)}
                    disabled={unlinkingVehicleId === v.id}
                    style={{ fontSize: 11, padding: "2px 6px" }}
                  >
                    {unlinkingVehicleId === v.id ? "Unlinking…" : "Unlink"}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>No vehicles linked to this tenant yet.</div>
        )}

        <div style={{ marginTop: 12 }}>
          <button
            type="button"
            onClick={() => {
              const returnTo = encodeURIComponent(
                `${window.location.pathname}${window.location.search || ""}`
              );
              navigate(`/landlord/vehicles/new?tenantId=${tenant.id}&returnTo=${returnTo}`);
            }}
          >
            Manage vehicles for this tenant
          </button>
        </div>
      </section>
    </div>
  );
}
