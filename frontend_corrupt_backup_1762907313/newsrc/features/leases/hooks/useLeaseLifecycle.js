import { useCallback, useEffect, useState } from "react";
import { leaseLifecycleApi } from "../api/leaseLifecycle.api.js";

/** useLeaseLifecycle(leaseId) — read status + call transitions */
export function useLeaseLifecycle(leaseId) {
  const [lease, setLease] = useState(null);
  const [isLoading, setLoading] = useState(!!leaseId);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    if (!leaseId) { setLease(null); setLoading(false); return; }
    setLoading(true);
    setError(null);
    try {
      const data = await leaseLifecycleApi.get(leaseId);
      setLease(data ? { ...data } : null);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [leaseId]);

  useEffect(() => { refresh(); }, [refresh]);

  const start = useCallback(async () => {
    if (!leaseId) return;
    await leaseLifecycleApi.start(leaseId);
    await refresh();
  }, [leaseId, refresh]);

  const end = useCallback(async () => {
    if (!leaseId) return;
    await leaseLifecycleApi.end(leaseId);
    await refresh();
  }, [leaseId, refresh]);

  const setMonthToMonth = useCallback(async () => {
    if (!leaseId) return;
    await leaseLifecycleApi.setMonthToMonth(leaseId);
    await refresh();
  }, [leaseId, refresh]);

  return { lease, isLoading, error, refresh, start, end, setMonthToMonth };
}
