import React, { useEffect, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { emergencyContactsApi } from "@features/residents/api/emergencyContacts.api.js";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { ROLES } from "@lib/rbac/roles.js";

export default function LandlordEmergencyContactDetailsPage() {
  const { emergencyContactId } = useParams();
  const navigate = useNavigate();
  const { effectiveRole, isSysAdmin, token } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
      ? ROLES.SYSADMIN
      : effectiveRole || ROLES.LANDLORD;

  const [emergencyContact, setEmergencyContact] = useState(null);
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relation, setRelation] = useState("");
  const [email, setEmail] = useState("");
  const [isSaving, setSaving] = useState(false);
  const [isArchiving, setArchiving] = useState(false);

  // many-to-many controls
  const [tenantPickerId, setTenantPickerId] = useState("");
  const [linking, setLinking] = useState(false);
  const [unlinkingId, setUnlinkingId] = useState(null);

  // Load emergency contact + tenants
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const [e, ts] = await Promise.all([
          emergencyContactsApi.get(emergencyContactId, { token }),
          tenantsApi.list({ token }),
        ]);

        if (!cancelled) {
          if (!e) {
            setError(new Error("Emergency contact not found"));
          } else {
            setEmergencyContact(e);
            setTenants(Array.isArray(ts) ? ts : []);
          }
        }
      } catch (err) {
        console.error("Failed to load emergency contact", err);
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (emergencyContactId && token) {
      load();
    } else if (!emergencyContactId) {
      setLoading(false);
      setError(new Error("Missing emergency contact id"));
    }

    return () => {
      cancelled = true;
    };
  }, [emergencyContactId, token]);

  // Initialize edit fields when emergency contact changes
  useEffect(() => {
    if (emergencyContact) {
      setName(emergencyContact.name || "");
      setPhone(emergencyContact.phone || "");
      setRelation(emergencyContact.relation || "");
      setEmail(emergencyContact.email || "");
    }
  }, [emergencyContact]);

  const isArchived = !!emergencyContact?.archived;

  // Combine primaryTenant + tenants[] into one de-duplicated array
  const linkedTenants = useMemo(() => {
    if (!emergencyContact) return [];

    const list = [];

    if (Array.isArray(emergencyContact.tenants)) {
      for (const t of emergencyContact.tenants) {
        if (t && t.id) list.push({ ...t });
      }
    }

    if (emergencyContact.primaryTenant && emergencyContact.primaryTenant.id) {
      const exists = list.some((t) => t.id === emergencyContact.primaryTenant.id);
      if (!exists) {
        list.unshift({ ...emergencyContact.primaryTenant });
      }
    }

    return list;
  }, [emergencyContact]);

  // Tenants that can still be added
  const availableTenants = useMemo(() => {
    const linkedIds = new Set(linkedTenants.map((t) => t.id));
    return tenants.filter((t) => !linkedIds.has(t.id));
  }, [tenants, linkedTenants]);

  const handleSave = async () => {
    if (!name.trim()) {
      alert("Name is required.");
      return;
    }

    try {
      setSaving(true);
      const updated = await emergencyContactsApi.update(
        emergencyContact.id,
        {
          name: name.trim(),
          phone: phone.trim(),
          relation: relation.trim(),
          email: email.trim(),
        },
        { token }
      );
      setEmergencyContact(updated);
      setEditing(false);
    } catch (err) {
      console.error("Failed to update emergency contact", err);
      alert("Failed to update emergency contact. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    if (emergencyContact) {
      setName(emergencyContact.name || "");
      setPhone(emergencyContact.phone || "");
      setRelation(emergencyContact.relation || "");
      setEmail(emergencyContact.email || "");
    }
    setEditing(false);
  };

  const handleToggleArchive = async () => {
    if (!emergencyContact) return;

    if (!isArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this emergency contact?\n\n" +
          "They will be hidden from active emergency contact lists. Only a system administrator can unarchive them."
      );
      if (!ok) return;
    } else {
      if (!isSysAdmin) {
        alert(
          "Only a system administrator can unarchive an archived emergency contact.\n\n" +
            "Please contact your system administrator if this needs to be reactivated."
        );
        return;
      }
    }

    try {
      setArchiving(true);
      const updated = await emergencyContactsApi.toggleArchive(emergencyContact.id, { token });
      setEmergencyContact(updated);
    } catch (err) {
      console.error("Failed to toggle emergency contact archived state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  const handleLinkTenant = async () => {
    if (!tenantPickerId || !emergencyContact || !emergencyContact.id) return;

    try {
      setLinking(true);
      await tenantsApi.linkEmergencyContact(tenantPickerId, emergencyContact.id, { token });

      // Refresh emergency contact to pick up new tenants[]
      const fresh = await emergencyContactsApi.get(emergencyContact.id, { token });
      setEmergencyContact(fresh || emergencyContact);
      setTenantPickerId("");
    } catch (err) {
      console.error("Failed to link tenant to emergency contact", err);
      alert("Failed to link tenant. Check console for details.");
    } finally {
      setLinking(false);
    }
  };

  const handleUnlinkTenant = async (tenantId) => {
    if (!tenantId || !emergencyContact || !emergencyContact.id) return;

    const ok = window.confirm(
      "Remove this tenant from the emergency contact's links?\n\n" +
        "This does not change leases or properties. It only removes this emergency contact↔tenant link."
    );
    if (!ok) return;

    try {
      setUnlinkingId(tenantId);
      await tenantsApi.unlinkEmergencyContact(tenantId, emergencyContact.id, { token });

      const fresh = await emergencyContactsApi.get(emergencyContact.id, { token });
      setEmergencyContact(fresh || emergencyContact);
    } catch (err) {
      console.error("Failed to unlink tenant from emergency contact", err);
      alert("Failed to unlink tenant. Check console for details.");
    } finally {
      setUnlinkingId(null);
    }
  };

  const handleManageTenant = () => {
    if (!emergencyContact || !emergencyContact.id) return;

    const returnTo = encodeURIComponent(
      `${window.location.pathname}${window.location.search || ""}`
    );

    navigate(
      `/landlord/tenants/new?emergencyContactId=${emergencyContact.id}&returnTo=${returnTo}`
    );
  };

  if (loading) return <div>Loading emergency contact…</div>;

  if (error) {
    return (
      <div style={{ color: "crimson", padding: 16 }}>
        Error loading emergency contact: {String(error.message || error)}
      </div>
    );
  }

  if (!emergencyContact) {
    return <div style={{ padding: 16 }}>No data.</div>;
  }

  const title = emergencyContact.name || "Unnamed emergency contact";

  const canEditNow = !isArchived || isSysAdmin;
  const canArchiveNow = !isArchived;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/residents?tab=emergencyContacts">
          ← Back to residents
        </Link>
      </div>

      {/* header + actions */}
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
                {emergencyContact.phone && (
                  <div>Phone: {emergencyContact.phone}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {emergencyContact.relation && (
                  <div>Relation: {emergencyContact.relation}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {emergencyContact.phone && (
                  <div>Email: {emergencyContact.email}</div>
                )}
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
                type="text"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Relation (roommate, child, partner, etc.)"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  ? "Only a system administrator can unarchive this emergency contact."
                  : "Insufficient permissions to archive this emergency contact."
              }
              style={{ opacity: 0.5 }}
            >
              {isArchived ? "Unarchive" : "Archive"}
            </button>
          )}
        </div>
      </div>

      {/* Manage tenant button (now just "create new tenant" helper) */}
      <div style={{ marginBottom: 12 }}>
        <button
          type="button"
          onClick={handleManageTenant}
          disabled={isArchived}
          style={{
            borderRadius: 999,
            padding: "6px 12px",
            border: "1px solid #d1d5db",
            background: "#ffffff",
            cursor: isArchived ? "default" : "pointer",
            fontSize: 13,
          }}
        >
          Manage tenants for this emergency contact
        </button>
        {isArchived && (
          <span style={{ marginLeft: 8, fontSize: 12, color: "#6b7280" }}>
            Cannot manage tenants for an archived emergency contact.
          </span>
        )}
      </div>

      <hr style={{ margin: "16px 0" }} />

      {/* Emergency contact info */}
      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
          marginBottom: 16,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
          Emergency contact info
        </h3>

        <dl
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            rowGap: 8,
            columnGap: 12,
            fontSize: 14,
          }}
        >
          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Name</dt>
          <dd>{emergencyContact.name || "—"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Phone</dt>
          <dd>{emergencyContact.phone || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Relation</dt>
          <dd>{emergencyContact.relation || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Email</dt>
          <dd>{emergencyContact.email || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Status</dt>
          <dd>{isArchived ? "Archived" : "Active"}</dd>
        </dl>
      </section>

      {/* Tenants linked to this emergency contact (true many-to-many) */}
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
          Tenants linked to this emergency contact
        </h3>

        {linkedTenants.length > 0 ? (
          <ul style={{ paddingLeft: 18, fontSize: 14 }}>
            {linkedTenants.map((t) => (
              <li
                key={t.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 4,
                }}
              >
                <span>
                  <Link to={`/landlord/tenants/${t.id}`}>
                    {t.name || "(unnamed tenant)"}
                  </Link>
                  {t.email ? ` (${t.email})` : ""}
                </span>
                <button
                  type="button"
                  onClick={() => handleUnlinkTenant(t.id)}
                  disabled={unlinkingId === t.id}
                  style={{ fontSize: 11, padding: "2px 6px" }}
                >
                  {unlinkingId === t.id ? "Unlinking…" : "Unlink"}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            This emergency contact is not linked to any tenants yet.
          </div>
        )}
      </section>
    </div>
  );
}