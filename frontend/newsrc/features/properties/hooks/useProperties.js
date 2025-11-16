import { useCallback, useEffect, useState } from "react";
import { propertiesApi } from "../api/properties.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

export function useProperties({ includeArchived = false, role = ROLES.SYSADMIN } = {}) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    // RBAC: must be able to VIEW properties
    if (!can(role, R.PROPERTIES, A.VIEW)) {
      setData([]);
      setError(new Error("forbidden"));
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const list = await propertiesApi.list();
      setData(includeArchived ? list : list.filter((p) => !p.archived));
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [includeArchived, role]);

  useEffect(() => { refresh(); }, [refresh]);

  const toggleArchive = useCallback(async (id) => {
    // RBAC: must be able to ARCHIVE properties
    if (!can(role, R.PROPERTIES, A.ARCHIVE)) {
      setError(new Error("forbidden"));
      return;
    }
    await propertiesApi.toggleArchive(id);
    await refresh();
  }, [role, refresh]);

  return { data, isLoading, error, toggleArchive, refetch: refresh };
}
