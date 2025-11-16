import { useCallback, useEffect, useMemo, useState } from "react";
import { financialsApi } from "../api/financials.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";

export function useFinancials({ propertyId, leaseId, includeArchived = false, role } = {}) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(!!(propertyId || leaseId));
  const [error, setError] = useState(null);

  const canView = role ? can(role, R.FINANCIALS, A.VIEW) : true;

  const refresh = useCallback(async () => {
    if (!propertyId && !leaseId) { setData([]); setLoading(false); return; }
    if (!canView) { setData([]); setLoading(false); return; }

    setLoading(true);
    setError(null);
    try {
      const rows = await financialsApi.list({ propertyId, leaseId });
      setData(includeArchived ? rows : rows.filter(r => !r.archived));
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [propertyId, leaseId, includeArchived, canView]);

  useEffect(() => { refresh(); }, [refresh]);

  const add = useCallback(async (payload) => {
    const allowed = role ? can(role, R.FINANCIALS, A.CREATE) : true;
    if (!allowed) return null;
    await financialsApi.add({ propertyId, leaseId, payload });
    await refresh();
  }, [propertyId, leaseId, role, refresh]);

  const remove = useCallback(async (id) => {
    const allowed = role ? can(role, R.FINANCIALS, A.DELETE) : true;
    if (!allowed) return null;
    await financialsApi.remove(id);
    await refresh();
  }, [role, refresh]);

  const toggleArchive = useCallback(async (id) => {
    const allowed = role ? can(role, R.FINANCIALS, A.ARCHIVE) : true;
    if (!allowed) return null;
    await financialsApi.toggleArchive(id);
    await refresh();
  }, [role, refresh]);

  const balanceCents = useMemo(() => {
    return data.reduce((sum, e) => {
      const sign = e.type === "payment" ? -1 : 1;
      return sum + sign * (e.amountCents || 0);
    }, 0);
  }, [data]);

  return { data, isLoading, error, add, remove, toggleArchive, balanceCents, refetch: refresh };
}
