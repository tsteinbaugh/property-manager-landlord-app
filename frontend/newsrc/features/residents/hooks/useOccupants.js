// newsrc/features/residents/hooks/useAllOccupants.js
import { useCallback, useEffect, useState } from "react";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { occupantsApi } from "@features/residents/api/occupants.api.js";
import { useUser } from "@app/providers.jsx";

export function useAllOccupants({ includeArchived = false } = {}) {
  const [data, setData] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useUser() || {};

  const refresh = useCallback(
    async () => {
      // 🚫 Not authenticated: don't hit the API at all
      if (!token) {
        setData([]);
        setTenants([]);
        setError(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // 1) load all tenants
        const tenantRows = await tenantsApi.list();
        const allOccupants = [];

        // 2) for each tenant, load occupants
        for (const t of tenantRows) {
          const occs = await occupantsApi.list(t.id, { includeArchived: true });

          for (const o of occs) {
            allOccupants.push({
              ...o,
              tenantId: t.id,
              tenantName: t.name || t.email || "(unnamed tenant)",
            });
          }
        }

        const filtered = includeArchived
          ? allOccupants
          : allOccupants.filter((o) => !o.archived);

        setTenants(tenantRows);
        setData(filtered);
      } catch (err) {
        console.error("[useAllOccupants] refresh error", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [includeArchived, token] // 🔁 re-run if auth or filter changes
  );

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    data,    // occupants with tenantName attached
    tenants, // raw tenant rows (for dropdowns, etc.)
    isLoading,
    error,
    refetch: refresh,
  };
}
