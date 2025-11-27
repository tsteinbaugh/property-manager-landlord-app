// newsrc/features/residents/hooks/useAllEmergencyContacts.js
import { useCallback, useEffect, useState } from "react";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { emergencyContactsApi } from "@features/residents/api/emergencyContacts.api.js";

export function useAllEmergencyContacts({ includeArchived = false } = {}) {
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
      const allEmergencyContacts = [];

      // 2) for each tenant, load emergency contacts
      for (const t of tenantRows) {
        const occs = await emergencyContactsApi.list(t.id, { includeArchived: true });

        for (const o of occs) {
          allEmergencyContacts.push({
            ...o,
            tenantId: t.id,
            tenantName: t.name || t.email || "(unnamed tenant)",
          });
        }
      }

      const filtered = includeArchived
        ? allEmergencyContacts
        : allEmergencyContacts.filter((o) => !o.archived);

      setTenants(tenantRows);
      setData(filtered);
    } catch (err) {
      console.error("[useAllEmergencyContacts] refresh error", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [includeArchived]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    data,        // emergency contacts with tenantName attached
    tenants,     // raw tenant rows (for dropdowns, etc.)
    isLoading,
    error,
    refetch: refresh,
  };
}
