// newsrc/features/beings/hooks/useBeings.js
import { useEffect, useMemo, useState } from "react";
import { beingsApi } from "../api/beings.api.js";
import { getRole } from "@lib/auth/role.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";

// Optional normalization so your global list is consistent
function normalize(record = {}) {
  // If backend already supplies record.kind, prefer it.
  if (record.kind) {
    return {
      kind: record.kind,
      id: record.id,
      displayName: record.displayName || record.name || record.title || `#${record.id}`,
      tags: record.tags || [],
      link: record.link || null,
      raw: record,
    };
  }

  // Heuristics (safe fallbacks)
  let kind = "person";
  if ("species" in record) kind = "pet";
  else if ("relation" in record && "phone" in record) kind = "emergency_contact";
  else if ("relationship" in record && "age" in record) kind = "occupant";
  else if ("leaseId" in record && "status" in record) kind = "tenant";
  else if ("role" in record) kind = "user";

  const displayName =
    record.displayName ||
    record.name ||
    record.title ||
    record.email ||
    `${kind} #${record.id}`;

  return {
    kind,
    id: record.id,
    displayName,
    tags: [],
    link: null,
    raw: record,
  };
}

export function useBeings(query = "") {
  const role = getRole();
  const canView = can(role, R.BEINGS, A.VIEW);

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(!!canView);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;

    if (!canView) {
      setData([]);
      setError(new Error("Forbidden"));
      setLoading(false);
      return;
    }

    (async () => {
      setLoading(true); setError(null);
      try {
        const res = query ? await beingsApi.search(query) : await beingsApi.list();
        if (!alive) return;
        setData(Array.isArray(res) ? res : []);
      } catch (e) {
        if (!alive) return;
        setError(e);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => { alive = false; };
  }, [query, canView]);

  // Stable, normalized output for UI
  const results = useMemo(() => data.map(normalize), [data]);

  return { data: results, isLoading, error };
}
