import React from "react";
import { useMaintenanceTickets } from "@features/maintenance/hooks/useMaintenanceTickets.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

export default function MaintenanceTicketList({ propertyId, role = ROLES.SYSADMIN }) {
  const { data, isLoading, error } = useMaintenanceTickets({ propertyId, role });

  if (!propertyId) return <div style={{ color: "#888" }}>No property selected.</div>;
  if (!can(role, R.MAINTENANCE_TICKETS, A.VIEW)) {
    return (
      <div>
        <h3 style={{ margin: "8px 0" }}>Maintenance Tickets</h3>
        <div style={{ color: "#888" }}>Insufficient permissions to view maintenance tickets.</div>
      </div>
    );
  }
  if (isLoading) return <div>Loading maintenance tickets…</div>;
  if (error && error.message !== "forbidden") {
    return <div style={{ color: "crimson" }}>Error loading maintenance tickets.</div>;
  }
  if (!data.length) return <div style={{ color: "#888" }}>No tickets yet.</div>;

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Maintenance Tickets</h3>
      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((t) => (
          <li key={t.id}>
            <strong>{t.title}</strong>
            {t.priority ? ` — ${t.priority}` : ""} {t.status ? `(${t.status})` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
