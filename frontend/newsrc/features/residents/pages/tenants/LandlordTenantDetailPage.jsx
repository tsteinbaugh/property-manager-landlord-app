// newsrc/features/residents/pages/tenants/LandlordTenantDetailPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { occupantsApi } from "@features/residents/api/occupants.api.js";

export default function LandlordTenantDetailPage() {
  const { tenantId } = useParams();
  const { token, effectiveRole, isSysAdmin } = useUser() || {};

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

  // Load tenant (rich detail)
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const t = await tenantsApi.detail(tenantId, { token });

        if (!cancelled) {
          if (!t) {
            setError(new Error("Tenant not found"));
          } else {
            setTenant(t);
          }
        }
      } catch (err) {
        console.error("Failed to load tenant", err);
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (tenantId && token) {
      load();
    }

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

  const handleSave = async () => {
    if (!name.trim()) {
      alert("Name is required.");
      return;
    }

    try {
      setSaving(true);
      const updated = await tenantsApi.update(
        tenant.id,
        {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
        },
        { token }
      );

      setTenant((prev) => ({
        ...prev,
        ...updated,
        leaseTenants: prev.leaseTenants,
        occupants: prev.occupants,
        pets: prev.pets,
        emergencyContacts: prev.emergencyContacts,
        vehicles: prev.vehicles,
      }));

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
    if (!tenant) return;

    const currentlyArchived = !!(tenant.isArchived ?? tenant.archived);

    if (!currentlyArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this tenant?\n\n" +
          "They will be hidden from active tenant lists. Only a system administrator can unarchive them."
      );
      if (!ok) return;
    } else {
      if (!isSysAdmin) {
        alert(
          "Only a system administrator can unarchive an archived tenant. " +
            "Please contact your system admin if this needs to be reactivated."
        );
        return;
      }
    }

    try {
      setArchiving(true);
      const updated = await tenantsApi.toggleArchive(tenant.id, { token });
      setTenant((prev) => ({
        ...prev,
        ...updated,
        leaseTenants: prev.leaseTenants,
        occupants: prev.occupants,
        pets: prev.pets,
        emergencyContacts: prev.emergencyContacts,
        vehicles: prev.vehicles,
      }));
    } catch (err) {
      console.error("Failed to toggle tenant archived state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  if (loading) return <div>Loading tenant…</div>;
  if (error) {
    return (
      <div style={{ color: "crimson", padding: 16 }}>
        Error loading tenant: {String(error.message || error)}
      </div>
    );
  }
  if (!tenant) return <div style={{ padding: 16 }}>No data.</div>;

  const isArchived = !!(tenant.isArchived ?? tenant.archived);
  const title = tenant.name || tenant.email || "Unnamed tenant";

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  const leaseTenants = Array.isArray(tenant.leaseTenants)
    ? tenant.leaseTenants
    : [];
  const tenantOccupants = Array.isArray(tenant.occupants)
    ? tenant.occupants
    : [];

  const manageOccupantsUrl = `/landlord/occupants/new?tenantId=${
    tenant.id
  }&returnTo=${encodeURIComponent(`/landlord/tenants/${tenant.id}`)}`;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        {/* residents flow is the new primary list */}
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
              <div style={{ color: "#555", marginBottom: 4 }}>
                {tenant.email && <div>Email: {tenant.email}</div>}
                {tenant.phone && <div>Phone: {tenant.phone}</div>}
              </div>
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
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                >
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

      {/* Leases for this tenant */}
      <hr style={{ margin: "16px 0" }} />
      <h3>Leases</h3>
      {leaseTenants.length > 0 ? (
        <ul style={{ paddingLeft: 18 }}>
          {leaseTenants.map((lt) => {
            const lease = lt.lease;
            if (!lease) return null;
            const property = lease.property;

            return (
              <li key={lt.id} style={{ marginBottom: 6 }}>
                <Link to={`/landlord/leases/${lease.id}`}>
                  Lease {lease.id.slice(0, 8)}
                </Link>{" "}
                – {lease.status || "UNKNOWN"}
                {lease.rentAmount != null && ` · $${lease.rentAmount}/mo`}
                {lease.startDate && ` · from ${lease.startDate}`}
                {lease.endDate && ` to ${lease.endDate}`}

                {property && (
                  <div style={{ fontSize: 12, color: "#4b5563" }}>
                    Property:{" "}
                    {property.name || property.address1 || "(property details)"}
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
        <Link to={`/landlord/leases/new?tenantId=${tenant.id}`}>
          + Add lease for this tenant
        </Link>
      </div>

      {/* Household – occupants (read-only + button to AddOccupantPage) */}
      <hr style={{ margin: "16px 0" }} />
      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Household – occupants
        </h3>

        {tenantOccupants.length > 0 ? (
          <ul style={{ paddingLeft: 18, fontSize: 14 }}>
            {tenantOccupants.map((occ) => (
              <li
                key={occ.id}
                style={{
                  marginBottom: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <strong>{occ.name}</strong>
                  {occ.relation && (
                    <span style={{ marginLeft: 6, color: "#6b7280" }}>
                      ({occ.relation})
                    </span>
                  )}
                </div>
                
                <button
                  type="button"
                  style={{
                    fontSize: 12,
                    color: "#b91c1c",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={async () => {
                    const ok = window.confirm(
                      `Unlink ${occ.name} from this tenant?\n\n` +
                        `This does NOT delete or archive the occupant.`
                    );
                    if (!ok) return;
                  
                    try {
                      await occupantsApi.update(
                        occ.id,
                        { tenantId: "" },
                        { token }
                      );
                    
                      // locally update tenant state
                      setTenant((prev) => ({
                        ...prev,
                        occupants: prev.occupants.filter((o) => o.id !== occ.id),
                      }));
                    } catch (err) {
                      console.error("Failed to unlink occupant", err);
                      alert("Failed to unlink occupant. Check console for details.");
                    }
                  }}
                >
                  unlink
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ color: "#6b7280" }}>No occupants linked to this tenant yet.</div>
        )}

        <div style={{ marginTop: 12 }}>
          <Link to={manageOccupantsUrl}>
            Manage occupants for this tenant
          </Link>
        </div>
      </section>
    </div>
  );
}
