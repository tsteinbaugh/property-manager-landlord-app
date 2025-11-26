import { useCallback, useEffect, useState } from "react";
import { petsApi } from "../api/pets.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

export function usePets(
  tenantId,
  { includeArchived = false, role = ROLES.SYSADMIN } = {}
) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(!!tenantId);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    try {
      if (!tenantId) {
        setData([]);
        setLoading(false);
        return;
      }

      // Enforce VIEW permission
      if (!can(role, R.TENANT_PETS, A.VIEW)) {
        setData([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      const rows = await petsApi.listByTenant(tenantId);
      setData(includeArchived ? rows : rows.filter(r => !r.archived));
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, [tenantId, includeArchived, role]);

  useEffect(() => { refresh(); }, [refresh]);

  const add = useCallback(async (payload) => {
    if (!tenantId) return null;
    if (!can(role, R.TENANT_PETS, A.CREATE)) return null;
    await petsApi.add(tenantId, payload);
    await refresh();
  }, [tenantId, role, refresh]);

  const toggleArchive = useCallback(async (id) => {
    if (!can(role, R.TENANT_PETS, A.ARCHIVE)) return null;
    await petsApi.toggleArchive(id);
    await refresh();
  }, [role, refresh]);

  const remove = useCallback(async (id) => {
    const allowed = can(role, R.TENANT_PETS, A.DELETE) || can(role, R.TENANT_PETS, A.ARCHIVE);
    if (!allowed) return null;
    await petsApi.remove(id);
    await refresh();
  }, [role, refresh]);

  return { data, isLoading, error, add, toggleArchive, remove, refetch: refresh };
}
