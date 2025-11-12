import React from "react";
import { useTenants } from "@features/tenants/hooks/useTenants.js";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/**
 * Props:
 *  - includeArchived?: boolean
 *  - role?: ROLES       (defaults SYSADMIN for tests/demo)
 */
export default function TenantsList({ includeArchived = false, role = ROLES.SYSADMIN }) {
  const canView    = can(role, R.TENANTS, A.VIEW);
  const canArchive = can(role, R.TENANTS, A.ARCHIVE);

  const { data, isLoading, error, toggleArchive } = useTenants({ includeArchived, role });

  if (!canView)   return <div style={{ color: "#888" }}>You don’t have permission to view tenants.</div>;
  if (isLoading)  return <div>Loading tenants…</div>;
  if (error)      return <div style={{ color: "crimson" }}>Error loading tenants.</div>;

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Tenants</h3>
      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((t) => (
          <li key={t.id} style={{ opacity: t.archived ? 0.6 : 1 }}>
            <strong>#{t.id}</strong> — {t.name}
            {t.archived && (
              <span style={{ marginLeft: 8, fontSize: 12, color: "#888" }}>(Archived)</span>
            )}
            {canArchive && (
              <ArchiveButton
                archived={t.archived}
                onToggle={async () => {
                  await toggleArchive(t.id);
                }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
