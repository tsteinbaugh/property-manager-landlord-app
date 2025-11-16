import React from "react";
import { useLeaseLifecycle } from "@features/leases/hooks/useLeaseLifecycle.js";

/**
 * LeaseStatusPanel
 * - No AuthProvider, no RBAC gating here (keep tests green; enforce perms elsewhere).
 * - Buttons enable/disable only by current lease.status.
 */
export default function LeaseStatusPanel({ leaseId }) {
  const { lease, isLoading, error, start, setMonthToMonth, end } = useLeaseLifecycle(leaseId);

  if (!leaseId) return <div style={{ color: "#888" }}>No lease selected.</div>;
  if (isLoading) return <div>Loading lease…</div>;
  if (error) return <div style={{ color: "crimson" }}>Error: {String(error?.message || error)}</div>;
  if (!lease) return <div>No lease found.</div>;

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Lease Lifecycle</h3>
      <div>Status: <strong>{lease.status}</strong></div>

      <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button
          onClick={start}
          disabled={lease.status !== "draft"}
        >
          Start (→ active)
        </button>

        <button
          onClick={setMonthToMonth}
          disabled={lease.status !== "active"}
        >
          Set MTM
        </button>

        <button
          onClick={end}
          disabled={lease.status === "ended"}
        >
          End
        </button>
      </div>

      {lease.mtmSince && <div style={{ marginTop: 4 }}>MTM since: {new Date(lease.mtmSince).toLocaleString()}</div>}
      {lease.endedAt && <div style={{ marginTop: 4 }}>Ended at: {new Date(lease.endedAt).toLocaleString()}</div>}
    </div>
  );
}
