import React from "react";
import { useLegalCases } from "@features/legal/hooks/useLegalCases.js";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

export default function LegalCaseList({ leaseId, includeArchived = false, role = ROLES.SYSADMIN }) {
  const { data, isLoading, error, toggleArchive } = useLegalCases({ leaseId, includeArchived, role });

  if (!leaseId) return <div>No lease selected</div>;

  if (!can(role, R.LEGAL_CASES, A.VIEW)) {
    return (
      <div>
        <h3 style={{ margin: "8px 0" }}>Legal Cases</h3>
        <div style={{ color: "#888" }}>Insufficient permissions to view legal cases.</div>
      </div>
    );
  }

  if (isLoading) return <div>Loading cases…</div>;
  if (error && error.message !== "forbidden") return <div style={{ color: "crimson" }}>Error loading cases.</div>;

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Legal Cases</h3>
      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((c) => {
          const canArch = can(role, R.LEGAL_CASES, A.ARCHIVE);
          return (
            <li key={c.id} style={{ opacity: c.archived ? 0.6 : 1 }}>
              <strong>{c.title}</strong>
              <span style={{ marginLeft: 6, fontSize: 12, color: "#666" }}>
                — status: <em>{c.status}</em>
              </span>
              {c.archived && (
                <span style={{ marginLeft: 8, fontSize: 12, color: "#888" }}>(Archived)</span>
              )}
              <ArchiveButton
                archived={c.archived}
                onToggle={async () => { if (canArch) await toggleArchive(c.id); }}
                title={canArch ? undefined : "Insufficient permissions"}
                disabled={!canArch}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
