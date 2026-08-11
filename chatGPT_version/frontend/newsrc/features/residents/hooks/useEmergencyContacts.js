// newsrc/features/residents/hooks/useAllEmergencyContacts.js
import { useCallback, useEffect, useState } from "react";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { emergencyContactsApi } from "@features/residents/api/emergencyContacts.api.js";
import { useUser } from "@app/providers.jsx";

export function useAllEmergencyContacts({ includeArchived = false } = {}) {
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

        // Load tenants (for tenantName)
        const tenantRows = await tenantsApi.list({ token });
        const tenantMap = new Map(
          tenantRows.map((t) => [
            t.id,
            t.name || t.email || "(unnamed tenant)",
          ])
        );

        // Load ALL emergency contacts (archived + active)
        const contacts = await emergencyContactsApi.listAll({
          includeArchived: true,
          token,
        });

        const withTenant = contacts.map((c) => {
          const tenantName =
            c.tenantId && tenantMap.get(c.tenantId)
              ? tenantMap.get(c.tenantId)
              : null;

          return {
            ...c,
            tenantName,
          };
        });

        const filtered = includeArchived
          ? withTenant
          : withTenant.filter((o) => !o.archived);

        setTenants(tenantRows);
        setData(filtered);
      } catch (err) {
        console.error("[useAllEmergencyContacts] refresh error", err);
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
    data, // emergency contacts with optional tenantName
    tenants, // raw tenant rows
    isLoading,
    error,
    refetch: refresh,
  };
}
