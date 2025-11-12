import { useCallback, useEffect, useState } from "react";
import { cleaningTicketsApi } from "../api/cleaningTickets.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";

/**
 * useCleaningTickets({ propertyId, role })
 * - RBAC read guard only if role is provided; otherwise allow (back-compat/tests).
 */
export function useCleaningTickets({ propertyId, role }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(!!propertyId);

  const refresh = useCallback(async () => {
    if (!propertyId) { setData([]); setLoading(false); return; }

    const canView = role ? can(role, R.CLEANING_TICKETS, A.VIEW) : true;
    if (!canView) { setData([]); setLoading(false); return; }

    setLoading(true);
    const res = await cleaningTicketsApi.listByProperty(propertyId);
    setData(res);
    setLoading(false);
  }, [propertyId, role]);

  useEffect(() => { refresh(); }, [refresh]);

  const create = useCallback(async (ticket) => {
    const rec = await cleaningTicketsApi.create({ propertyId, ...ticket });
    await refresh();
    return rec;
  }, [propertyId, refresh]);

  const update = useCallback(async (id, patch) => {
    await cleaningTicketsApi.update(id, patch);
    await refresh();
  }, [refresh]);

  const remove = useCallback(async (id) => {
    await cleaningTicketsApi.remove(id);
    await refresh();
  }, [refresh]);

  return { data, isLoading, create, update, remove, refetch: refresh };
}
