import React from "react";
import { useLeases } from "@features/leases/hooks/useLeases.js";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/**
 * Props:
 *  - includeArchived?: boolean
 *  - role?: ROLES (defaults SYSADMIN for tests/demo)
 */
export default function LeasesList({
  includeArchived = false,
  role = ROLES.SYSADMIN,
}) {
  const canView = can(role, R.LEASES, A.VIEW);
  const canArchive = can(role, R.LEASES, A.ARCHIVE);

  const { data, isLoading, error, toggleArchive } = useLeases({
    includeArchived,
    role,
  });

  if (!canView)
    return (
      <div style={{ color: "#888" }}>
        You don’t have permission to view leases.
      </div>
    );
  if (isLoading) return <div>Loading leases…</div>;
  if (error) return <div style={{ color: "crimson" }}>Error loading leases.</div>;

  const fmt = (iso) => iso || ""; // simple ISO display for now

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Leases</h3>
      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((l) => {
          // tolerant to old/new field names
          const start = l.startDateISO || l.startDate || "";
          const end = l.endDateISO || l.endDate || "";
          const archived = !!l.archived;

          return (
            <li key={l.id} style={{ opacity: archived ? 0.6 : 1 }}>
              Lease #{l.id} — {fmt(start)} → {fmt(end)}
              {archived && (
                <span
                  style={{ marginLeft: 8, fontSize: 12, color: "#888" }}
                >
                  (Archived)
                </span>
              )}
              {canArchive && (
                <ArchiveButton
                  archived={archived}
                  data-testid={`archive-btn-${l.id}`}
                  onToggle={async () => {
                    await toggleArchive(l.id);
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
