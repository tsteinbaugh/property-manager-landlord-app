// newsrc/features/search/hooks/useGlobalSearch.js
import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";
import { buildSearchDocs } from "../searchIndex.js";

const normalizePhone = (s = "") => s.replace(/\D/g, "");
const looksLikePhone = (q = "") => normalizePhone(q).length >= 7;

export function useGlobalSearch({ role, currentUser } = {}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    let on = true;
    (async () => {
      setLoading(true);
      const d = await buildSearchDocs({ role, currentUser });
      if (!on) return;
      setDocs(d);
      setLoading(false);
    })();
    return () => { on = false; };
  }, [role, currentUser]);

  const fuse = useMemo(() => {
    return new Fuse(docs, {
      includeScore: true,
      shouldSort: true,
      threshold: 0.33,
      distance: 120,
      // Expanded keys to cover all modules
      keys: [
        { name: "name", weight: 0.7 },          // primary display label (title/name)
        { name: "propertyName", weight: 0.5 },
        { name: "email", weight: 0.55 },
        { name: "phone", weight: 0.55 },
        { name: "phoneNorm", weight: 0.6 },
        { name: "address", weight: 0.45 },
        { name: "city", weight: 0.4 },
        { name: "state", weight: 0.35 },
        { name: "zip", weight: 0.35 },
        { name: "owner", weight: 0.35 },

        // module-specific fields
        { name: "title", weight: 0.6 },
        { name: "status", weight: 0.4 },
        { name: "priority", weight: 0.35 },
        { name: "type", weight: 0.3 },
        { name: "breed", weight: 0.25 },
        { name: "relation", weight: 0.25 },

        // dates/amounts help narrow results if user types numbers
        { name: "dateISO", weight: 0.2 },
        { name: "amountCents", weight: 0.2 },
        { name: "year", weight: 0.2 },
      ],
    });
  }, [docs]);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    const qDigits = normalizePhone(q);
    const term = looksLikePhone(q) ? qDigits : q;
    return fuse.search(term, { limit: 20 });
  }, [fuse, query]);

  return {
    query,
    setQuery,
    open,
    setOpen,
    loading,
    results,
  };
}
