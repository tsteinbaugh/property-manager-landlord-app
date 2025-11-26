// newsrc/features/residents/hooks/useAllPets.js
import { useCallback, useEffect, useState } from "react";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { petsApi } from "@features/residents/api/pets.api.js";

export function useAllPets({ includeArchived = false } = {}) {
  const [data, setData] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // 1) load all tenants
      const tenantRows = await tenantsApi.list();
      const allPets = [];

      // 2) for each tenant, load pets
      for (const t of tenantRows) {
        const occs = await petsApi.list(t.id, { includeArchived: true });

        for (const o of occs) {
          allPets.push({
            ...o,
            tenantId: t.id,
            tenantName: t.name || t.email || "(unnamed tenant)",
          });
        }
      }

      const filtered = includeArchived
        ? allPets
        : allPets.filter((o) => !o.archived);

      setTenants(tenantRows);
      setData(filtered);
    } catch (err) {
      console.error("[useAllPets] refresh error", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [includeArchived]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    data,        // pets with tenantName attached
    tenants,     // raw tenant rows (for dropdowns, etc.)
    isLoading,
    error,
    refetch: refresh,
  };
}
