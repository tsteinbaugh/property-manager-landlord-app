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
 * - Uses your DRY useArchiveList under the hood
 * - NOW: also respects auth (won't call API without a token)
 */
export function useTenants({
  includeArchived = false,
  role = ROLES.SYSADMIN,
} = {}) {
  const { token } = useUser() || {};

  const listFn = async () => {
    // 🚫 If not authenticated, don't even try the API
    if (!token) return [];

    // 🚫 If no VIEW permission, surface an empty list (UI will show "no permission")
    if (!can(role, R.TENANTS, A.VIEW)) return [];

    const res = await tenantsApi.list();
    return includeArchived ? res : res.filter((t) => !t.archived);
  };

  const { data, isLoading, error, toggleArchive, refresh } = useArchiveList(
    tenantsApi, // api must expose toggleArchive(id)
    listFn,
    // 🔁 Re-run when auth, archive filter, or role changes
    [includeArchived, role, token]
  );

  // Guard the toggle by ARCHIVE permission
  const guardedToggleArchive = async (id) => {
    // No auth or no permission → no-op
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
