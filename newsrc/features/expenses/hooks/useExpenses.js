import { useCallback, useEffect, useState } from "react";
import { expensesApi } from "../api/expenses.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/** useExpenses({ propertyId, role }) — RBAC-aware */
export function useExpenses({ propertyId, role = ROLES.SYSADMIN }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(!!propertyId);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    if (!propertyId) {
      setData([]);
      setLoading(false);
      return;
    }

    // Must be able to VIEW expenses
    if (!can(role, R.EXPENSES, A.VIEW)) {
      setData([]);
      setError(new Error("forbidden"));
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await expensesApi.listByProperty(propertyId);
      setData(res);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [propertyId, role]);

  useEffect(() => { refresh(); }, [refresh]);

  const create = useCallback(async (expense) => {
    if (!can(role, R.EXPENSES, A.CREATE)) {
      setError(new Error("forbidden"));
      return null;
    }
    const rec = await expensesApi.create({ propertyId, ...expense });
    await refresh();
    return rec;
  }, [propertyId, role, refresh]);

  const update = useCallback(async (id, patch) => {
    if (!can(role, R.EXPENSES, A.UPDATE)) {
      setError(new Error("forbidden"));
      return;
    }
    await expensesApi.update(id, patch);
    await refresh();
  }, [role, refresh]);

  const remove = useCallback(async (id) => {
    if (!can(role, R.EXPENSES, A.DELETE)) {
      setError(new Error("forbidden"));
      return;
    }
    await expensesApi.remove(id);
    await refresh();
  }, [role, refresh]);

  return { data, isLoading, error, create, update, remove, refetch: refresh };
}
