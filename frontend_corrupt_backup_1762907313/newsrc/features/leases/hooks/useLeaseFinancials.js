import { useCallback, useEffect, useMemo, useState } from "react";
import { leaseFinancialsApi } from "@features/leases/api/leaseFinancials.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/**
 * useLeaseFinancials(leaseId, { role })
 * - Enforces RBAC:
 *    VIEW  → can see ledger
 *    UPDATE → can add/remove entries
 * - Returns balanceCents (charges - payments)
 */
export function useLeaseFinancials(
  leaseId,
  { role = ROLES.SYSADMIN } = {}
) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(!!leaseId);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    try {
      if (!leaseId) { setData([]); setLoading(false); return; }
      if (!can(role, R.LEASE_FINANCIALS, A.VIEW)) { setData([]); setLoading(false); return; }
      setLoading(true);
      setError(null);
      const rows = await leaseFinancialsApi.listByLease(leaseId);
      setData(rows || []);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [leaseId, role]);

  useEffect(() => { refresh(); }, [refresh]);

  const balanceCents = useMemo(() => {
    return (data || []).reduce((acc, e) => {
      if (e.type === "charge") return acc + (e.amountCents || 0);
      if (e.type === "payment") return acc - (e.amountCents || 0);
      return acc;
    }, 0);
  }, [data]);

  const add = useCallback(async (payload) => {
    if (!leaseId) return null;
    if (!can(role, R.LEASE_FINANCIALS, A.UPDATE)) return null;
    await leaseFinancialsApi.add(leaseId, payload);
    await refresh();
    return true;
  }, [leaseId, role, refresh]);

  const remove = useCallback(async (id) => {
    if (!can(role, R.LEASE_FINANCIALS, A.UPDATE)) return null;
    await leaseFinancialsApi.remove(id);
    await refresh();
    return true;
  }, [role, refresh]);

  return { data, isLoading, error, add, remove, balanceCents, refetch: refresh };
}
