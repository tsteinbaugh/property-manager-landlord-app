// newsrc/features/residents/hooks/useTenants.js
import { useUser } from "@app/providers.jsx";
import { useArchiveList } from "@shared/hooks/useArchiveList.js";
import { tenantsApi } from "../api/tenants.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/**
 * useTenants({ includeArchived, role })
 * - Respects VIEW/ARCHIVE permissions for TENANTS resource
 * - Uses useArchiveList under the hood
 * - Ensures auth token is passed to the API
 */
export function useTenants({
  includeArchived = false,
  role = ROLES.SYSADMIN,
} = {}) {
  const { token } = useUser() || {};

  // This function is called by useArchiveList to load data
  const listFn = async () => {
    // Not authenticated → no call
    if (!token) return [];

    // No permission → no data
    if (!can(role, R.TENANTS, A.VIEW)) return [];

    const res = await tenantsApi.list({ token });
    return includeArchived ? res : res.filter((t) => !t.archived);
  };

  // Wrap tenantsApi so that useArchiveList has a toggleArchive
  // that ALWAYS sends the token.
  const archiveApi = {
    async toggleArchive(id) {
      if (!token) return null;
      return tenantsApi.toggleArchive(id, { token });
    },
  };

  const { data, isLoading, error, toggleArchive, refresh } = useArchiveList(
    archiveApi,
    listFn,
    [includeArchived, role, token]
  );

  // Guard the toggle by ARCHIVE permission
  const guardedToggleArchive = async (id) => {
    if (!token) return null;
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
