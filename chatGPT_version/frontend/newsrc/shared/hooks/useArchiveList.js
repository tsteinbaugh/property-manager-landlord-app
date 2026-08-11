import { useCallback, useEffect, useState } from "react";

/**
 * Generic list+archive state manager.
 *
 * @param {object} api - must expose toggleArchive(id)
 * @param {() => Promise<Array>} queryFn - returns the full (or filtered) list to render
 * @param {Array} deps - dependencies for queryFn/refresh memoization
 */
export function useArchiveList(api, queryFn, deps = []) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await queryFn();
      setData(res);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { refresh(); }, [refresh]);

  const toggleArchive = useCallback(async (id) => {
    await api.toggleArchive(id);
    await refresh();
  }, [api, refresh]);

  return { data, isLoading, error, toggleArchive, refresh };
}
