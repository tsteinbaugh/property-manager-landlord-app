import { useArchiveList } from "@shared/hooks/useArchiveList.js";
import { leasesApi } from "../api/leases.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/**
 * useLeases({ includeArchived, role })
 * - Respects VIEW/ARCHIVE on LEASES
 * - Uses your DRY useArchiveList
 */
export function useLeases({ includeArchived = false, role = ROLES.SYSADMIN } = {}) {
  const listFn = async () => {
    if (!can(role, R.LEASES, A.VIEW)) return [];
    const res = await leasesApi.list();
    return includeArchived ? res : res.filter((l) => !l.isArchived);
  };

  const { data, isLoading, error, toggleArchive, refresh } = useArchiveList(
    leasesApi, // must expose toggleArchive(id)
    listFn,
    [includeArchived, role]
  );

  const guardedToggleArchive = async (id) => {
    if (!can(role, R.LEASES, A.ARCHIVE)) return null;
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
