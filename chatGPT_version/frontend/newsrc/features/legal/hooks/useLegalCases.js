import { useCallback, useEffect, useState } from "react";
import { legalCasesApi } from "../api/legalCases.api.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/**
 * useLegalCases({ propertyId, leaseId, includeArchived, role })
 * RBAC-aware:
 *  - VIEW gates fetching
 *  - CREATE for create()
 *  - STATUS for setStatus()
 *  - UPDATE for addEvent()
 *  - DELETE for remove()
 *  - ARCHIVE for toggleArchive()
 */
export function useLegalCases({
  propertyId,
  leaseId,
  includeArchived = false,
  role = ROLES.SYSADMIN,
} = {}) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(!!(propertyId || leaseId));
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    if (!propertyId && !leaseId) {
      setData([]);
      setLoading(false);
      return;
    }

    if (!can(role, R.LEGAL_CASES, A.VIEW)) {
      setData([]);
      setError(new Error("forbidden"));
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      let res = [];
      if (leaseId) res = await legalCasesApi.listByLease(leaseId);
      else if (propertyId) res = await legalCasesApi.listByProperty(propertyId);
      setData(includeArchived ? res : res.filter((c) => !c.archived));
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [propertyId, leaseId, includeArchived, role]);

  useEffect(() => { refresh(); }, [refresh]);

  const create = useCallback(async (payload) => {
    if (!can(role, R.LEGAL_CASES, A.CREATE)) {
      setError(new Error("forbidden"));
      return null;
    }
    const rec = await legalCasesApi.create(payload);
    await refresh();
    return rec;
  }, [role, refresh]);

  const setStatus = useCallback(async (id, status) => {
    if (!can(role, R.LEGAL_CASES, A.STATUS)) {
      setError(new Error("forbidden"));
      return;
    }
    await legalCasesApi.setStatus(id, status);
    await refresh();
  }, [role, refresh]);

  const addEvent = useCallback(async (id, event) => {
    if (!can(role, R.LEGAL_CASES, A.UPDATE)) {
      setError(new Error("forbidden"));
      return;
    }
    await legalCasesApi.addEvent(id, event);
    await refresh();
  }, [role, refresh]);

  const remove = useCallback(async (id) => {
    if (!can(role, R.LEGAL_CASES, A.DELETE)) {
      setError(new Error("forbidden"));
      return;
    }
    await legalCasesApi.remove(id);
    await refresh();
  }, [role, refresh]);

  const toggleArchive = useCallback(async (id) => {
    if (!can(role, R.LEGAL_CASES, A.ARCHIVE)) {
      setError(new Error("forbidden"));
      return;
    }
    await legalCasesApi.toggleArchive(id);
    await refresh();
  }, [role, refresh]);

  return {
    data,
    isLoading,
    error,
    refetch: refresh,
    create,
    setStatus,
    addEvent,
    remove,
    toggleArchive,
  };
}
