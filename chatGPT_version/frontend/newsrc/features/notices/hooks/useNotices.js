import { useCallback, useEffect, useState } from "react";
import { noticesApi } from "../api/notices.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";

export function useNotices({ propertyId, leaseId, includeArchived = false, role } = {}) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(!!(propertyId || leaseId));
  const [error, setError] = useState(null);

  const canView = role ? can(role, R.NOTICES, A.VIEW) : true;

  const refresh = useCallback(async () => {
    if (!propertyId && !leaseId) { setData([]); setLoading(false); return; }
    if (!canView) { setData([]); setLoading(false); return; }

    setLoading(true); setError(null);
    try {
      const rows = await noticesApi.list({ propertyId, leaseId });
      setData(includeArchived ? rows : rows.filter(r => !r.archived));
    } catch (e) { setError(e); } finally { setLoading(false); }
  }, [propertyId, leaseId, includeArchived, canView]);

  useEffect(() => { refresh(); }, [refresh]);

  const create = useCallback(async (payload) => {
    const allowed = role ? can(role, R.NOTICES, A.CREATE) : true;
    if (!allowed) return null;
    const rec = await noticesApi.create(payload);
    await refresh(); return rec;
  }, [role, refresh]);

  const setStatus = useCallback(async (id, status) => {
    const allowed = role ? can(role, R.NOTICES, A.STATUS) : true;
    if (!allowed) return null;
    await noticesApi.setStatus(id, status);
    await refresh();
  }, [role, refresh]);

  const toggleArchive = useCallback(async (id) => {
    const allowed = role ? can(role, R.NOTICES, A.ARCHIVE) : true;
    if (!allowed) return null;
    await noticesApi.toggleArchive(id);
    await refresh();
  }, [role, refresh]);

  const remove = useCallback(async (id) => {
    const allowed = role ? can(role, R.NOTICES, A.DELETE) : true;
    if (!allowed) return null;
    await noticesApi.remove(id);
    await refresh();
  }, [role, refresh]);

  return { data, isLoading, error, create, setStatus, toggleArchive, remove, refetch: refresh };
}
