import { useArchiveList } from "@shared/hooks/useArchiveList.js";
import { tenantsApi } from "../api/tenants.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/**
 * useTenants({ includeArchived, role })
 * - Respects VIEW/ARCHIVE permissions for TENANTS resource
 * - Uses your DRY useArchiveList under the hood
 */
export function useTenants({ includeArchived = false, role = ROLES.SYSADMIN } = {}) {
  const listFn = async () => {
    // If no VIEW permission, surface an empty list (UI will show "no permission")
    if (!can(role, R.TENANTS, A.VIEW)) return [];
    const res = await tenantsApi.list();
    return includeArchived ? res : res.filter(t => !t.archived);
  };

  const { data, isLoading, error, toggleArchive, refresh } = useArchiveList(
    tenantsApi,            // api must expose toggleArchive(id)
    listFn,
    [includeArchived, role]
  );

  // Guard the toggle by ARCHIVE permission
  const guardedToggleArchive = async (id) => {
    if (!can(role, R.TENANTS, A.ARCHIVE)) return null;
    return toggleArchive(id);
  };

  return {
    data,
    isLoading,
    error,
    toggleArchive: guardedToggleArchive,
    refetch: refresh,
  };
}
