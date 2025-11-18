import React from "react";
import { useLeases } from "@features/leases/hooks/useLeases.js";
import { ROLES } from "@lib/rbac/roles.js";

/**
 * LeaseStatusPanel (backend-driven)
 * - Reads leases via useLeases (which already talks to the backend).
 * - No useLeaseLifecycle, no Map().get, no mtmSince/endedAt.
 * - If leaseId is provided, it tries to find that lease; otherwise falls back to the first.
 */
export default function LeaseStatusPanel({ leaseId, role = ROLES.SYSADMIN }) {
  const { data, isLoading, error } = useLeases({
    includeArchived: true,
    role,
  });

  if (isLoading) return <div>Loading lease status…</div>;
  if (error) {
    return (
      <div style={{ color: "crimson" }}>
        Error loading lease status.
      </div>
    );
  }
  if (!data.length) return <div>No lease found.</div>;

  const lease =
    (leaseId && data.find((l) => l.id === leaseId)) ||
    data[0];

  if (!lease) return <div>No lease found.</div>;

  const fmt = (iso) => (iso ? iso : "");

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Lease status</h3>
      <div>
        Lease <strong>#{lease.id}</strong>
      </div>
      <div>
        Status: <strong>{lease.status}</strong>
      </div>
      <div>
        Start:{" "}
        {fmt(lease.startDate || lease.startDateISO)}
      </div>
      <div>
        End:{" "}
        {fmt(lease.endDate || lease.endDateISO) ||
          "(open-ended)"}
      </div>
    </div>
  );
}
