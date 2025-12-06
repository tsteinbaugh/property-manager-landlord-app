// newsrc/features/tenants/pages/LandlordOccupantDetailsPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { occupantsApi } from "@features/residents/api/occupants.api.js";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [isSaving, setSaving] = useState(false);
  const [isArchiving, setArchiving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const o = await occupantsApi.get(occupantId, { token });

        if (!cancelled) {
          if (!o) {
            setError(new Error("Occupant not found"));
          } else {
            setOccupant(o);
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

  useEffect(() => {
    if (occupant) {
      setName(occupant.name || "");
      setRelation(occupant.relation || "");
    }
  }, [occupant]);

  const isArchived = !!occupant?.archived;

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
  const canArchiveNow = !isArchived; // any landlord can archive
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  const handleManageTenant = () => {
    const returnTo = encodeURIComponent(
      `${window.location.pathname}${window.location.search || ""}`
    );
    navigate(
      `/landlord/tenants/new?occupantId=${occupant.id}&returnTo=${returnTo}`
    );
  };

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        {/* mirror tenant details back-link to residents */}
        <Link to="/landlord/residents?tab=occupants">← Back to residents</Link>
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

      {/* Manage tenant button */}
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
          Manage tenant for this occupant
        </button>
        {isArchived && (
          <span style={{ marginLeft: 8, fontSize: 12, color: "#6b7280" }}>
            Cannot manage tenant for an archived occupant.
          </span>
        )}
      </div>

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

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Tenant</dt>
          <dd>
            {occupant.tenantId ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Link to={`/landlord/tenants/${occupant.tenantId}`}>
                  View tenant
                </Link>
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
                      "Unlink this occupant from the tenant?\n\n" +
                        "This does NOT delete or archive either record."
                    );
                    if (!ok) return;
                  
                    try {
                      // send empty string so backend turns it into null
                      await occupantsApi.update(
                        occupant.id,
                        { tenantId: "" },
                        { token }
                      );
                    
                      setOccupant((prev) =>
                        prev ? { ...prev, tenantId: null } : prev
                      );
                    } catch (err) {
                      console.error("Failed to unlink tenant from occupant", err);
                      alert("Failed to unlink tenant. Check console for details.");
                    }
                  }}
                >
                  unlink
                </button>
              </div>
            ) : (
              "Not linked"
            )}
          </dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Status</dt>
          <dd>{isArchived ? "Archived" : "Active"}</dd>
        </dl>
      </section>
    </div>
  );
}
