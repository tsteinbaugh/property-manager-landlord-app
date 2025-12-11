// newsrc/features/residents/hooks/useAllPets.js
import { useCallback, useEffect, useState } from "react";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { petsApi } from "@features/residents/api/pets.api.js";
import { useUser } from "@app/providers.jsx";

export function useAllPets({ includeArchived = false } = {}) {
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

        const pets = await petsApi.listAll({
          includeArchived: true,
          token,
        });

        const withTenant = pets.map((p) => {
          const tenantName =
            p.tenantId && tenantMap.get(p.tenantId)
              ? tenantMap.get(p.tenantId)
              : null;

          return {
            ...p,
            tenantName,
          };
        });

        const filtered = includeArchived
          ? withTenant
          : withTenant.filter((p) => !p.archived);

        setTenants(tenantRows);
        setData(filtered);
      } catch (err) {
        console.error("[useAllPets] refresh error", err);
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
    data, // pets with optional tenantName
    tenants,
    isLoading,
    error,
    refetch: refresh,
  };
}
