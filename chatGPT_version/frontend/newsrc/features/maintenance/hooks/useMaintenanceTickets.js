import { useCallback, useEffect, useState } from "react";
import { maintenanceTicketsApi } from "../api/maintenanceTickets.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/** useMaintenanceTickets({ propertyId, role }) — RBAC-aware */
export function useMaintenanceTickets({ propertyId, role = ROLES.SYSADMIN }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(!!propertyId);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    if (!propertyId) {
      setData([]);
      setLoading(false);
      return;
    }

    if (!can(role, R.MAINTENANCE_TICKETS, A.VIEW)) {
      setData([]);
      setError(new Error("forbidden"));
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await maintenanceTicketsApi.listByProperty(propertyId);
      setData(res);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [propertyId, role]);

  useEffect(() => { refresh(); }, [refresh]);

  const create = useCallback(async (ticket) => {
    if (!can(role, R.MAINTENANCE_TICKETS, A.CREATE)) {
      setError(new Error("forbidden"));
      return null;
    }
    const rec = await maintenanceTicketsApi.create({ propertyId, ...ticket });
    await refresh();
    return rec;
  }, [propertyId, role, refresh]);

  const update = useCallback(async (id, patch) => {
    if (!can(role, R.MAINTENANCE_TICKETS, A.UPDATE)) {
      setError(new Error("forbidden"));
      return;
    }
    await maintenanceTicketsApi.update(id, patch);
    await refresh();
  }, [role, refresh]);

  const remove = useCallback(async (id) => {
    if (!can(role, R.MAINTENANCE_TICKETS, A.DELETE)) {
      setError(new Error("forbidden"));
      return;
    }
    await maintenanceTicketsApi.remove(id);
    await refresh();
  }, [role, refresh]);

  return { data, isLoading, error, create, update, remove, refetch: refresh };
}
