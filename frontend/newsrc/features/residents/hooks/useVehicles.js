// newsrc/features/residents/hooks/useAllVehicles.js
import { useCallback, useEffect, useState } from "react";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
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

        const tenantRows = await tenantsApi.list({ token });
        const tenantMap = new Map(
          tenantRows.map((t) => [
            t.id,
            t.name || t.email || "(unnamed tenant)",
          ])
        );

        const vehicles = await vehiclesApi.listAll({
          includeArchived: true,
          token,
        });

        const withTenant = vehicles.map((v) => {
          const tenantName =
            v.tenantId && tenantMap.get(v.tenantId)
              ? tenantMap.get(v.tenantId)
              : null;

          return {
            ...v,
            tenantName,
          };
        });

        const filtered = includeArchived
          ? withTenant
          : withTenant.filter((o) => !o.archived);

        setTenants(tenantRows);
        setData(filtered);
      } catch (err) {
        console.error("[useAllVehicles] refresh error", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [includeArchived, token]
  );

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    data, // vehicles with optional tenantName
    tenants,
    isLoading,
    error,
    refetch: refresh,
  };
}
