import React, { useEffect, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { occupantsApi } from "@features/residents/api/occupants.api.js";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { ROLES } from "@lib/rbac/roles.js";

export default function LandlordOccupantDetailsPage() {
  const { occupantId } = useParams();
  const navigate = useNavigate();
  const { effectiveRole, isSysAdmin, token } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
      ? ROLES.SYSADMIN
      : effectiveRole || ROLES.LANDLORD;

  const [occupant, setOccupant] = useState(null);
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [isSaving, setSaving] = useState(false);
  const [isArchiving, setArchiving] = useState(false);

  // many-to-many controls
  const [tenantPickerId, setTenantPickerId] = useState("");
  const [linking, setLinking] = useState(false);
  const [unlinkingId, setUnlinkingId] = useState(null);

  // Load occupant + tenants
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const [o, ts] = await Promise.all([
          occupantsApi.get(occupantId, { token }),
          tenantsApi.list({ token }),
        ]);

        if (!cancelled) {
          if (!o) {
            setError(new Error("Occupant not found"));
          } else {
            setOccupant(o);
            setTenants(Array.isArray(ts) ? ts : []);
          }
        }
      } catch (err) {
        console.error("Failed to load occupant", err);
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (occupantId && token) {
      load();
    } else if (!occupantId) {
      setLoading(false);
      setError(new Error("Missing occupant id"));
    }

    return () => {
      cancelled = true;
    };
  }, [occupantId, token]);

  // Initialize edit fields when occupant changes
  useEffect(() => {
    if (occupant) {
      setName(occupant.name || "");
      setRelation(occupant.relation || "");
    }
  }, [occupant]);

  const isArchived = !!occupant?.archived;

  // Combine primaryTenant + tenants[] into one de-duplicated array
  const linkedTenants = useMemo(() => {
    if (!occupant) return [];

    const list = [];

    if (Array.isArray(occupant.tenants)) {
      for (const t of occupant.tenants) {
        if (t && t.id) list.push({ ...t });
      }
    }

    if (occupant.primaryTenant && occupant.primaryTenant.id) {
      const exists = list.some((t) => t.id === occupant.primaryTenant.id);
      if (!exists) {
        list.unshift({ ...occupant.primaryTenant });
      }
    }

    return list;
  }, [occupant]);

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
      const updated = await occupantsApi.update(
        occupant.id,
        {
          name: name.trim(),
          relation: relation.trim(),
        },
        { token }
      );
      setOccupant(updated);
      setEditing(false);
    } catch (err) {
      console.error("Failed to update occupant", err);
      alert("Failed to update occupant. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    if (occupant) {
      setName(occupant.name || "");
      setRelation(occupant.relation || "");
    }
    setEditing(false);
  };

  const handleToggleArchive = async () => {
    if (!occupant) return;

    if (!isArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this occupant?\n\n" +
          "They will be hidden from active occupant lists. Only a system administrator can unarchive them."
      );
      if (!ok) return;
    } else {
      if (!isSysAdmin) {
        alert(
          "Only a system administrator can unarchive an archived occupant.\n\n" +
            "Please contact your system administrator if this needs to be reactivated."
        );
        return;
      }
    }

    try {
      setArchiving(true);
      const updated = await occupantsApi.toggleArchive(occupant.id, { token });
      setOccupant(updated);
    } catch (err) {
      console.error("Failed to toggle occupant archived state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  const handleLinkTenant = async () => {
    if (!tenantPickerId || !occupant || !occupant.id) return;

    try {
      setLinking(true);
      await tenantsApi.linkOccupant(tenantPickerId, occupant.id, { token });

      // Refresh occupant to pick up new tenants[]
      const fresh = await occupantsApi.get(occupant.id, { token });
      setOccupant(fresh || occupant);
      setTenantPickerId("");
    } catch (err) {
      console.error("Failed to link tenant to occupant", err);
      alert("Failed to link tenant. Check console for details.");
    } finally {
      setLinking(false);
    }
  };

  const handleUnlinkTenant = async (tenantId) => {
    if (!tenantId || !occupant || !occupant.id) return;

    const ok = window.confirm(
      "Remove this tenant from the occupant's links?\n\n" +
        "This does not change leases or properties. It only removes this occupant↔tenant link."
    );
    if (!ok) return;

    try {
      setUnlinkingId(tenantId);
      await tenantsApi.unlinkOccupant(tenantId, occupant.id, { token });

      const fresh = await occupantsApi.get(occupant.id, { token });
      setOccupant(fresh || occupant);
    } catch (err) {
      console.error("Failed to unlink tenant from occupant", err);
      alert("Failed to unlink tenant. Check console for details.");
    } finally {
      setUnlinkingId(null);
    }
  };

  const handleManageTenant = () => {
    if (!occupant || !occupant.id) return;

    const returnTo = encodeURIComponent(
      `${window.location.pathname}${window.location.search || ""}`
    );

    navigate(
      `/landlord/tenants/new?occupantId=${occupant.id}&returnTo=${returnTo}`
    );
  };

  if (loading) return <div>Loading occupant…</div>;

  if (error) {
    return (
      <div style={{ color: "crimson", padding: 16 }}>
        Error loading occupant: {String(error.message || error)}
      </div>
    );
  }

  if (!occupant) {
    return <div style={{ padding: 16 }}>No data.</div>;
  }

  const title = occupant.name || "Unnamed occupant";

  const canEditNow = !isArchived || isSysAdmin;
  const canArchiveNow = !isArchived;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/residents?tab=occupants">
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
                {occupant.relation && (
                  <div>Relation: {occupant.relation}</div>
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
                placeholder="Relation (roommate, child, partner, etc.)"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
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
                  ? "Only a system administrator can unarchive this occupant."
                  : "Insufficient permissions to archive this occupant."
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
          Manage tenants for this occupant
        </button>
        {isArchived && (
          <span style={{ marginLeft: 8, fontSize: 12, color: "#6b7280" }}>
            Cannot manage tenants for an archived occupant.
          </span>
        )}
      </div>

      <hr style={{ margin: "16px 0" }} />

      {/* Occupant info */}
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
          Occupant info
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
          <dd>{occupant.name || "—"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Relation</dt>
          <dd>{occupant.relation || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Status</dt>
          <dd>{isArchived ? "Archived" : "Active"}</dd>
        </dl>
      </section>

      {/* Tenants linked to this occupant (true many-to-many) */}
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
          Tenants linked to this occupant
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
            This occupant is not linked to any tenants yet.
          </div>
        )}
      </section>
    </div>
  );
}
