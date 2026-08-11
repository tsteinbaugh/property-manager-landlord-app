import React from "react";
import { useRoutines } from "@features/maintenance/hooks/useRoutines.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

export default function RoutineList({ propertyId, role = ROLES.SYSADMIN }) {
  const { data, isLoading, error } = useRoutines({ propertyId, role });

  if (!propertyId) return <div style={{ color: "#888" }}>No property selected.</div>;

  if (!can(role, R.ROUTINE_MAINTENANCE, A.VIEW)) {
    return (
      <div>
        <h3 style={{ margin: "8px 0" }}>Routine Maintenance</h3>
        <div style={{ color: "#888" }}>Insufficient permissions to view routine maintenance.</div>
      </div>
    );
  }

  if (isLoading) return <div>Loading routine maintenance…</div>;
  if (error && error.message !== "forbidden") {
    return <div style={{ color: "crimson" }}>Error loading routine maintenance.</div>;
  }
  if (!data.length) return <div style={{ color: "#888" }}>No routines defined.</div>;

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Routine Maintenance</h3>
      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((r) => (
          <li key={r.id}>
            <strong>{r.title}</strong>
            {r.frequency ? ` — every ${r.frequency.every} ${r.frequency.unit}` : ""}
            {r.nextDueAt ? ` (next due ${new Date(r.nextDueAt).toLocaleDateString()})` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
