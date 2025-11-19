// newsrc/features/leases/hooks/useLeaseLifecycle.js
import { useEffect, useState } from "react";

// Simple in-memory demo lease; not persisted to backend yet
const INITIAL = {
  id: "demo-lease",
  status: "draft",
  mtmSince: null,
  endedAt: null,
};

export function useLeaseLifecycle(leaseId) {
  const [lease, setLease] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!leaseId) {
      setLease(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    // For now we just create a local demo lease record keyed by leaseId
    // In the future we can wire this to the backend.
    setTimeout(() => {
      setLease((prev) => prev ?? { ...INITIAL, id: leaseId });
      setLoading(false);
    }, 0);
  }, [leaseId]);

  const start = async () => {
    setLease((prev) => (prev ? { ...prev, status: "active" } : prev));
  };

  const setMonthToMonth = async () => {
    setLease((prev) =>
      prev
        ? {
            ...prev,
            status: "active",
            mtmSince: prev.mtmSince ?? new Date().toISOString(),
          }
        : prev
    );
  };

  const end = async () => {
    const now = new Date().toISOString();
    setLease((prev) =>
      prev
        ? {
            ...prev,
            status: "ended",
            endedAt: prev.endedAt ?? now,
          }
        : prev
    );
  };

  return { lease, isLoading, error, start, setMonthToMonth, end };
}
