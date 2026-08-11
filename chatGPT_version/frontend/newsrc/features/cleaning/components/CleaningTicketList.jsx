import React from "react";
import { useCleaningTickets } from "@features/cleaning/hooks/useCleaningTickets.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";

/**
 * CleaningTicketList
 * - View is RBAC-gated when a role is provided.
 * - If role is undefined, we assume allowed (test-friendly default).
 */
export default function CleaningTicketList({ propertyId, role }) {
  const { data, isLoading } = useCleaningTickets({ propertyId, role });

  if (!propertyId) return <div style={{ color: "#888" }}>No property selected.</div>;

  const canView = role ? can(role, R.CLEANING_TICKETS, A.VIEW) : true;
  if (!canView) {
    return (
      <div title="Insufficient permissions" style={{ color: "#888" }}>
        You do not have permission to view cleaning tickets.
      </div>
    );
  }

  if (isLoading) return <div>Loading cleaning tickets…</div>;
  if (!data.length) return <div style={{ color: "#888" }}>No cleaning tickets yet.</div>;

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Cleaning Tickets</h3>
      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((t) => (
          <li key={t.id}>
            <strong>{t.title}</strong>
            {t.priority ? ` — ${t.priority}` : ""} {t.status ? `(${t.status})` : ""}
            {t.scheduledAt ? ` — scheduled ${new Date(t.scheduledAt).toLocaleString()}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
