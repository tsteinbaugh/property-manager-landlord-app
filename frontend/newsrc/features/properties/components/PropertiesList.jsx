import React, { useState } from "react";
import { useProperties } from "@features/properties/hooks/useProperties.js";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import AddPropertyForm from "./AddPropertyForm.jsx";
import { apiFetch } from "@lib/apiClient.js";
import { useUser } from "@app/providers.jsx";

function PropertyRow({ p, canArchive, onArchive, onUpdated }) {
  const { token } = useUser() || {};
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(p.name || "");
  const [address1, setAddress1] = useState(p.address1 || "");
  const [city, setCity] = useState(p.city || "");
  const [state, setStateVal] = useState(p.state || "CO");
  const [postalCode, setPostalCode] = useState(p.postalCode || "");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!address1 || !city || !state || !postalCode) {
      alert("Address, city, state, and ZIP are required.");
      return;
    }

    try {
      setSaving(true);
      await apiFetch(`/api/properties/${p.id}`, {
        method: "PATCH",
        token,
        body: {
          name: name || address1,
          address1,
          city,
          state,
          postalCode,
        },
      });
      setEditing(false);
      if (onUpdated) onUpdated();
    } catch (err) {
      console.error("Failed to update property", err);
      alert("Failed to update property. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  if (isEditing) {
    return (
      <li style={{ opacity: p.archived ? 0.6 : 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div>
            <strong>#{p.id}</strong>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            <input
              type="text"
              placeholder="Name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ minWidth: 160 }}
            />
            <input
              type="text"
              placeholder="Street address"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              style={{ minWidth: 220 }}
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{ minWidth: 140 }}
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setStateVal(e.target.value)}
              style={{ width: 70 }}
            />
            <input
              type="text"
              placeholder="ZIP"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              style={{ width: 90 }}
            />
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <button type="button" onClick={handleSave} disabled={saving}>
              {saving ? "Saving…" : "Save"}
            </button>
            <button
              type="button"
              onClick={() => {
                setEditing(false);
                setName(p.name || "");
                setAddress1(p.address1 || "");
                setCity(p.city || "");
                setStateVal(p.state || "CO");
                setPostalCode(p.postalCode || "");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li key={p.id} style={{ opacity: p.archived ? 0.6 : 1 }}>
      <strong>#{p.id}</strong> — {p.name} — {p.address}
      {p.archived && (
        <span style={{ marginLeft: 8, fontSize: 12, color: "#888" }}>
          (Archived)
        </span>
      )}
      <button
        type="button"
        style={{ marginLeft: 8 }}
        onClick={() => setEditing(true)}
      >
        Edit
      </button>
      {canArchive ? (
        <ArchiveButton
          archived={p.archived}
          onToggle={onArchive}
        />
      ) : (
        <button
          disabled
          title="Insufficient permissions"
          style={{ marginLeft: 8, opacity: 0.5 }}
        >
          {p.archived ? "Unarchive" : "Archive"}
        </button>
      )}
    </li>
  );
}

export default function PropertiesList({
  includeArchived = false,
  role = ROLES.SYSADMIN,
}) {
  const { data, isLoading, error, toggleArchive, refetch } = useProperties({
    includeArchived,
    role,
  });

  const canView = can(role, R.PROPERTIES, A.VIEW);
  const canArchive = can(role, R.PROPERTIES, A.ARCHIVE);

  if (!canView) {
    return (
      <div>
        <h3 style={{ margin: "8px 0" }}>Properties</h3>
        <div style={{ color: "#888" }}>
          Insufficient permissions to view properties.
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Properties</h3>

      {/* Inline "add property" form */}
      <AddPropertyForm onCreated={refetch} />

      {isLoading && <div>Loading properties…</div>}

      {error && error.message !== "forbidden" && (
        <div style={{ color: "crimson", marginBottom: 8 }}>
          Error: {String(error.message || error)}
        </div>
      )}

      {!isLoading && (
        <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
          {data.map((p) => (
            <PropertyRow
              key={p.id}
              p={p}
              canArchive={canArchive}
              onArchive={async () => {
                await toggleArchive(p.id);
              }}
              onUpdated={refetch}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
