// newsrc/features/residents/hooks/useAllVehicles.js
import { useCallback, useEffect, useState } from "react";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { vehiclesApi } from "@features/residents/api/vehicles.api.js";
import { useUser } from "@app/providers.jsx";

export function useAllVehicles({ includeArchived = false } = {}) {
  const [data, setData] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useUser() || {};

  const refresh = useCallback(
    async () => {
      // 🚫 Not authenticated: don't hit the API
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
        const allVehicles = [];

        // 2) for each tenant, load vehicles
        for (const t of tenantRows) {
          const occs = await vehiclesApi.list(t.id, { includeArchived: true });

          for (const o of occs) {
            allVehicles.push({
              ...o,
              tenantId: t.id,
              tenantName: t.name || t.email || "(unnamed tenant)",
            });
          }
        }

        const filtered = includeArchived
          ? allVehicles
          : allVehicles.filter((o) => !o.archived);

        setTenants(tenantRows);
        setData(filtered);
      } catch (err) {
        console.error("[useAllVehicles] refresh error", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [includeArchived, token] // 🔁 re-run when auth or filter changes
  );

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    data,    // vehicles with tenantName attached
    tenants, // raw tenant rows (for dropdowns, etc.)
    isLoading,
    error,
    refetch: refresh,
  };
}
