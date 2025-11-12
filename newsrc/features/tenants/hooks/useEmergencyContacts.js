import { useCallback, useEffect, useState } from "react";
import { emergencyContactsApi } from "../api/emergencyContacts.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/**
 * useEmergencyContacts(tenantId, options)
 * options:
 *  - includeArchived: boolean
 *  - role: one of ROLES (defaults to SYSADMIN for tests/demo)
 */
export function useEmergencyContacts(
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

      // Enforce VIEW
      if (!can(role, R.TENANT_ECONTACTS, A.VIEW)) {
        setData([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      const rows = await emergencyContactsApi.listByTenant(tenantId);
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
    if (!can(role, R.TENANT_ECONTACTS, A.CREATE)) return null;
    await emergencyContactsApi.add(tenantId, payload);
    await refresh();
  }, [tenantId, role, refresh]);

  const toggleArchive = useCallback(async (id) => {
    if (!can(role, R.TENANT_ECONTACTS, A.ARCHIVE)) return null;
    await emergencyContactsApi.toggleArchive(id);
    await refresh();
  }, [role, refresh]);

  const remove = useCallback(async (id) => {
    // Prefer ARCHIVE in prod; DELETE allowed here for stub parity
    const allowed = can(role, R.TENANT_ECONTACTS, A.DELETE) || can(role, R.TENANT_ECONTACTS, A.ARCHIVE);
    if (!allowed) return null;
    await emergencyContactsApi.remove(id);
    await refresh();
  }, [role, refresh]);

  return { data, isLoading, error, add, toggleArchive, remove, refetch: refresh };
}
