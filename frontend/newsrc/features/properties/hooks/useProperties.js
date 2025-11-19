import { useCallback, useEffect, useState } from "react";
import { apiFetch } from "@lib/apiClient.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import { useUser } from "@app/providers.jsx";

export function useProperties({
  includeArchived = false,
  role = ROLES.SYSADMIN,
} = {}) {
  const { token } = useUser();

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    if (!can(role, R.PROPERTIES, A.VIEW)) {
      setData([]);
      setError(new Error("forbidden"));
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const props = await apiFetch("/api/properties", { token });

      const mapped = props.map((p) => {
        const name = p.name || p.address1;
        const address1 = p.address1 || "";
        const city = p.city || "";
        const state = p.state || "";
        const postalCode = p.postalCode || "";

        return {
          id: p.id,
          name,
          address1,
          city,
          state,
          postalCode,
          address: `${address1}, ${city}, ${state} ${postalCode}`.trim(),
          archived: !!p.isArchived,
        };
      });

      setData(includeArchived ? mapped : mapped.filter((x) => !x.archived));
    } catch (e) {
      console.error("Failed to load properties:", e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [includeArchived, role, token]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const toggleArchive = useCallback(
    async (id) => {
      if (!can(role, R.PROPERTIES, A.ARCHIVE)) {
        setError(new Error("forbidden"));
        return;
      }

      try {
        const updated = await apiFetch(`/api/properties/${id}/archive`, {
          method: "PATCH",
          token,
        });

        setData((curr) =>
          curr.map((p) =>
            p.id === id
              ? {
                  ...p,
                  archived: !!updated.isArchived,
                }
              : p
          )
        );
      } catch (err) {
        console.error("Archive toggle failed:", err);
        setError(err);
      }
    },
    [role, token]
  );

  return { data, isLoading, error, toggleArchive, refetch: refresh };
}
