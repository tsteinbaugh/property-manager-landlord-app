// newsrc/features/beings/hooks/useBeing.js
import { useEffect, useState } from "react";
import { beingsApi } from "../api/beings.api.js";
import { getRole } from "@lib/auth/role.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";

export function useBeing(id) {
  const role = getRole();
  const canView = can(role, R.BEINGS, A.VIEW);

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(!!id);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;

    if (!id) { setData(null); setLoading(false); setError(null); return; }
    if (!canView) { setData(null); setLoading(false); setError(new Error("Forbidden")); return; }

    (async () => {
      setLoading(true); setError(null);
      try {
        const res = await beingsApi.get(id);
        if (!alive) return;
        setData(res || null);
      } catch (e) {
        if (!alive) return;
        setError(e);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => { alive = false; };
  }, [id, canView]);

  return { data, isLoading, error };
}
