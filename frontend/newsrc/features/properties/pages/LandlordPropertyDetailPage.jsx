import React, { useEffect, useState } from "react";
import { apiFetch } from "@lib/apiClient.js";
import { useUser } from "@app/providers.jsx";
import { Link } from "react-router-dom";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

export default function LandlordPropertyDetailPage({ propertyId }) {
  const { token, effectiveRole, isSysAdmin } = useUser() || {};

  // Normalize role to match ROLE_GRANTS keys (lowercase)
  const role = isSysAdmin
    ? ROLES.SYSADMIN
    : typeof effectiveRole === "string"
      ? effectiveRole.toLowerCase()
      : ROLES.LANDLORD;

  const canUpdate = can(role, R.PROPERTIES, A.UPDATE);
  const canArchiveGrant = can(role, R.PROPERTIES, A.ARCHIVE);

  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // edit state
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [city, setCity] = useState("");
  const [stateVal, setStateVal] = useState("CO");
  const [postalCode, setPostalCode] = useState("");
  const [isSaving, setSaving] = useState(false);
  const [isArchiving, setArchiving] = useState(false);

  // Load summary
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await apiFetch(`/api/properties/${propertyId}/summary`, {
          token,
        });
        if (!cancelled) {
          setSummary(data);
        }
      } catch (err) {
        console.error("Failed to load property summary", err);
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (propertyId) {
      load();
    }

    return () => {
      cancelled = true;
    };
  }, [propertyId, token]);

  // When summary loads, initialize edit fields
  useEffect(() => {
    if (summary?.property) {
      const p = summary.property;
      setName(p.name || "");
      setAddress1(p.address1 || "");
      setCity(p.city || "");
      setStateVal(p.state || "CO");
      setPostalCode(p.postalCode || "");
    }
  }, [summary]);

  const handleSave = async () => {
    if (!address1 || !city || !stateVal || !postalCode) {
      alert("Address, city, state, and ZIP are required.");
      return;
    }

    try {
      setSaving(true);
      await apiFetch(`/api/properties/${propertyId}`, {
        method: "PATCH",
        token,
        body: {
          name: name || address1,
          address1,
          city,
          state: stateVal,
          postalCode,
        },
      });

      // Update local summary so UI reflects the change
      setSummary((prev) =>
        prev
          ? {
              ...prev,
              property: {
                ...prev.property,
                name: name || address1,
                address1,
                city,
                state: stateVal,
                postalCode,
              },
            }
          : prev
      );

      setEditing(false);
    } catch (err) {
      console.error("Failed to update property", err);
      alert("Failed to update property. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    if (summary?.property) {
      const p = summary.property;
      setName(p.name || "");
      setAddress1(p.address1 || "");
      setCity(p.city || "");
      setStateVal(p.state || "CO");
      setPostalCode(p.postalCode || "");
    }
    setEditing(false);
  };

  const handleToggleArchive = async () => {
    if (!summary?.property) return;

    const currentlyArchived = !!summary.property.isArchived;

    // If we're archiving (active -> archived)
    if (!currentlyArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this property?\n\n" +
          "This will make it read-only for landlords. Only a system administrator can unarchive it."
      );
      if (!ok) return;
    } else {
      // Unarchive request
      if (!isSysAdmin) {
        alert(
          "Only a system administrator can unarchive an archived property. " +
            "Please contact your system admin if this needs to be reactivated."
        );
        return;
      }
    }

    try {
      setArchiving(true);
      const updated = await apiFetch(
        `/api/properties/${propertyId}/archive`,
        {
          method: "PATCH",
          token,
        }
      );

      // Update archive flag on the property
      setSummary((prev) =>
        prev
          ? {
              ...prev,
              property: {
                ...prev.property,
                isArchived: updated.isArchived,
              },
            }
          : prev
      );
    } catch (err) {
      console.error("Failed to toggle archived state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  if (loading) return <div>Loading property…</div>;
  if (error) {
    return (
      <div style={{ color: "crimson" }}>
        Error loading property: {String(error.message || error)}
      </div>
    );
  }
  if (!summary) return <div>No data.</div>;

  const { property, lease, tenant, occupants, pets, emergencyContacts } =
    summary;

  const title = property.name || property.address1;
  const isArchived = !!property.isArchived;

  // landlord: can edit *only* if not archived
  // sysadmin: can still edit even if archived
  const canEditNow = canUpdate && (!isArchived || isSysAdmin);

  // archive rules:
  // - archive (active -> archived): anyone with ARCHIVE on PROPERTIES
  // - unarchive (archived -> active): sysadmin only
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        {/* landlord landing page */}
        <Link to="/landlord/properties">← Back to properties</Link>
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
                {property.address1}, {property.city}, {property.state}{" "}
                {property.postalCode}
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
                placeholder="Name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Street address"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
              <div style={{ display: "flex", gap: 6 }}>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{ flex: 2 }}
                />
                <input
                  type="text"
                  placeholder="State"
                  value={stateVal}
                  onChange={(e) => setStateVal(e.target.value)}
                  style={{ width: 70 }}
                />
                <input
                  type="text"
                  placeholder="ZIP"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  style={{ width: 100 }}
                />
              </div>
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
                  ? "Only a system administrator can unarchive this property."
                  : "Insufficient permissions to archive this property."
              }
              style={{ opacity: 0.5 }}
            >
              {isArchived ? "Unarchive" : "Archive"}
            </button>
          )}
        </div>
      </div>

      <hr style={{ margin: "16px 0" }} />

      <h3>Current Lease</h3>
      {lease ? (
        <div style={{ marginBottom: 12 }}>
          <div>
            Lease ID: <strong>{lease.id}</strong>
          </div>
          <div>
            Status: <strong>{lease.status}</strong>
          </div>
          <div>
            Rent:{" "}
            {lease.rentAmount != null ? `$${lease.rentAmount}` : "N/A"}
          </div>
          <div>Start: {lease.startDate || "—"}</div>
          <div>End: {lease.endDate || "(open-ended)"}</div>
          {lease.fileUrl && (
            <div style={{ marginTop: 4 }}>
              <a
                href={`http://localhost:4000${lease.fileUrl}`}
                target="_blank"
                rel="noreferrer"
              >
                View lease document
              </a>
              {lease.fileOriginalName && (
                <span style={{ marginLeft: 4 }}>
                  ({lease.fileOriginalName})
                </span>
              )}
            </div>
          )}
        </div>
      ) : (
        <div style={{ marginBottom: 12 }}>No active lease.</div>
      )}

      <hr style={{ margin: "16px 0" }} />

      <h3>Tenant</h3>
      {tenant ? (
        <div style={{ marginBottom: 12 }}>
          <div>
            <strong>{tenant.name}</strong>
          </div>
          <div>Email: {tenant.email || "—"}</div>
          <div>Phone: {tenant.phone || "—"}</div>
        </div>
      ) : (
        <div style={{ marginBottom: 12 }}>No tenant assigned.</div>
      )}

      <hr style={{ margin: "16px 0" }} />

      <h3>Occupants</h3>
      {occupants && occupants.length > 0 ? (
        <ul>
          {occupants.map((o) => (
            <li key={o.id}>
              {o.name}
              {o.relation ? ` (${o.relation})` : ""}
            </li>
          ))}
        </ul>
      ) : (
        <div>No occupants.</div>
      )}

      <h3>Pets</h3>
      {pets && pets.length > 0 ? (
        <ul>
          {pets.map((p) => (
            <li key={p.id}>
              {p.name}
              {p.type ? ` — ${p.type}` : ""}
              {p.weightLb != null ? ` (${p.weightLb} lb)` : ""}
            </li>
          ))}
        </ul>
      ) : (
        <div>No pets.</div>
      )}

      <h3>Emergency Contacts</h3>
      {emergencyContacts && emergencyContacts.length > 0 ? (
        <ul>
          {emergencyContacts.map((c) => (
            <li key={c.id}>
              {c.name}
              {c.relation ? ` (${c.relation})` : ""} —{" "}
              {c.phone || "no phone"}
            </li>
          ))}
        </ul>
      ) : (
        <div>No emergency contacts.</div>
      )}
    </div>
  );
}
