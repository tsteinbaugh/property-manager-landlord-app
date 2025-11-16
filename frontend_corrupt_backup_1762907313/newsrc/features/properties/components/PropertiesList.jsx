import React from "react";
import { useProperties } from "@features/properties/hooks/useProperties.js";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

export default function PropertiesList({ includeArchived = false, role = ROLES.SYSADMIN }) {
  const { data, isLoading, error, toggleArchive } = useProperties({ includeArchived, role });
  if (isLoading) return <div>Loading properties…</div>;

  const canView = can(role, R.PROPERTIES, A.VIEW);
  const canArchive = can(role, R.PROPERTIES, A.ARCHIVE);

  if (!canView) {
    return (
      <div>
        <h3 style={{ margin: "8px 0" }}>Properties</h3>
        <div style={{ color: "#888" }}>Insufficient permissions to view properties.</div>
      </div>
    );
  }

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Properties</h3>
      {error && error.message !== "forbidden" && (
        <div style={{ color: "crimson", marginBottom: 8 }}>Error: {String(error.message || error)}</div>
      )}
      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((p) => (
          <li key={p.id} style={{ opacity: p.archived ? 0.6 : 1 }}>
            <strong>#{p.id}</strong> — {p.name} — {p.address}
            {p.archived && (
              <span style={{ marginLeft: 8, fontSize: 12, color: "#888" }}>(Archived)</span>
            )}

            {canArchive ? (
              <ArchiveButton
                archived={p.archived}
                onToggle={async () => {
                  await toggleArchive(p.id);
                }}
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
        ))}
      </ul>
    </div>
  );
}
