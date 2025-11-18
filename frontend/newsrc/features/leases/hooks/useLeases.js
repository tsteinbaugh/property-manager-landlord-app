// newsrc/features/leases/hooks/useLeases.js
import { useCallback, useEffect, useState } from "react";
import { leasesApi } from "../api/leases.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

export function useLeases({ includeArchived = false, role = ROLES.SYSADMIN } = {}) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    // must be allowed to VIEW leases
    if (!can(role, R.LEASES, A.VIEW)) {
      setData([]);
      setError(new Error("forbidden"));
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const list = await leasesApi.list();
      const filtered = includeArchived
        ? list
        : list.filter((l) => !l.archived);
      setData(filtered);
    } catch (e) {
      console.error("Failed to load leases", e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [includeArchived, role]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const toggleArchive = useCallback(
    async (id) => {
      if (!can(role, R.LEASES, A.ARCHIVE)) {
        setError(new Error("forbidden"));
        return;
      }

      try {
        await leasesApi.toggleArchive(id);
        await refresh();
      } catch (e) {
        console.error("Failed to toggle lease archive", e);
      }
    },
    [role, refresh]
  );


  return {
    data,
    isLoading,
    error,
    toggleArchive,
    refetch: refresh,
  };
}
