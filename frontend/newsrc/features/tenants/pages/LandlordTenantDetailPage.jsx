// newsrc/features/tenants/pages/LandlordTenantDetailPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiFetch } from "@lib/apiClient.js"; // optional if you want; see note below
import { useUser } from "@app/providers.jsx";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";

export default function LandlordTenantDetailPage() {
  const { tenantId } = useParams();
  const { token, effectiveRole, isSysAdmin } = useUser() || {};

  // Normalize role similar to PropertyDetails.jsx
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

  // edit state
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSaving, setSaving] = useState(false);
  const [isArchiving, setArchiving] = useState(false);

  // Load tenant
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        // For now we reuse tenantsApi.get, which internally lists and finds by id.
        // Later you can swap this for a dedicated GET /api/tenants/:id if you want.
        const t = await tenantsApi.get(tenantId);

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

    if (tenantId) {
      load();
    }

    return () => {
      cancelled = true;
    };
  }, [tenantId]);

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
      const updated = await tenantsApi.update(tenant.id, {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
      });

      // Update local state so UI reflects the change
      setTenant(updated);
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

    // If we're archiving (active -> archived)
    if (!currentlyArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this tenant?\n\n" +
          "They will be hidden from active tenant lists. Only a system administrator can unarchive them."
      );
      if (!ok) return;
    } else {
      // Unarchive request
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
      const updated = await tenantsApi.toggleArchive(tenant.id);

      // Update archive flag on the tenant
      setTenant(updated);
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

  // landlord: can edit *only* if not archived
  // sysadmin: can still edit even if archived
  const canEditNow = canUpdate && (!isArchived || isSysAdmin);

  // archive rules:
  // - archive (active -> archived): anyone with ARCHIVE on TENANTS
  // - unarchive (archived -> active): sysadmin only
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        {/* landlord tenants page */}
        <Link to="/landlord/tenants">← Back to tenants</Link>
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

      <hr style={{ margin: "16px 0" }} />

      {/* Future sections – for now we just lay out placeholders to match the pattern */}
      <h3>Occupants</h3>
      <div style={{ marginBottom: 12 }}>
        {/* later: load real occupants for this tenant */}
        No occupants listed here yet.
      </div>

      <h3>Pets</h3>
      <div style={{ marginBottom: 12 }}>
        {/* later: load real pets for this tenant */}
        No pets listed here yet.
      </div>

      <h3>Emergency Contacts</h3>
      <div style={{ marginBottom: 12 }}>
        {/* later: load real emergency contacts for this tenant */}
        No emergency contacts listed here yet.
      </div>

      <h3>Leases</h3>
      <div style={{ marginBottom: 12 }}>
        {/* later: show leases linked to this tenant */}
        No leases displayed on this screen yet.
      </div>
    </div>
  );
}
