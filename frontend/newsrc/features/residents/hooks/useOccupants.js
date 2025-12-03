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

        const occupants = await occupantsApi.listAll({
          includeArchived: true,
          token,
        });

        const withTenant = occupants.map((o) => {
          const tenantName =
            o.tenantId && tenantMap.get(o.tenantId)
              ? tenantMap.get(o.tenantId)
              : null;

          return {
            ...o,
            tenantName,
          };
        });

        const filtered = includeArchived
          ? withTenant
          : withTenant.filter((o) => !o.archived);

        setTenants(tenantRows);
        setData(filtered);
      } catch (err) {
        console.error("[useAllOccupants] refresh error", err);
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
    data, // occupants with optional tenantName
    tenants,
    isLoading,
    error,
    refetch: refresh,
  };
}
