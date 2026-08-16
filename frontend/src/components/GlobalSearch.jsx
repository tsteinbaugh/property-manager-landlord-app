import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const MIN_QUERY_LENGTH = 2;
const DEBOUNCE_MS = 300;

const GROUP_LABELS = {
  property: "Properties",
  entity: "Entities",
  tenant: "Tenants",
  vendor: "Vendors",
  occupant: "Occupants",
  pet: "Pets",
  vehicle: "Vehicles",
};

const GROUP_ORDER = ["property", "entity", "tenant", "occupant", "pet", "vehicle", "vendor"];

function groupResults(results) {
  const groups = new Map();
  for (const result of results) {
    if (!groups.has(result.type)) groups.set(result.type, []);
    groups.get(result.type).push(result);
  }
  return GROUP_ORDER.filter((type) => groups.has(type)).map((type) => ({
    type,
    label: GROUP_LABELS[type],
    items: groups.get(type),
  }));
}

export default function GlobalSearch() {
  const api = useApi();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < MIN_QUERY_LENGTH) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const timeoutId = setTimeout(async () => {
      try {
        const data = await api.get(`/api/search?q=${encodeURIComponent(trimmed)}`);
        setResults(data.results);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, DEBOUNCE_MS);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleGlobalKeydown(event) {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isShortcut) {
        event.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    }
    document.addEventListener("keydown", handleGlobalKeydown);
    return () => document.removeEventListener("keydown", handleGlobalKeydown);
  }, []);

  function goTo(route) {
    setOpen(false);
    setQuery("");
    navigate(route);
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  }

  const trimmedQuery = query.trim();
  const showDropdown = open && trimmedQuery.length >= MIN_QUERY_LENGTH;
  const groups = groupResults(results);

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search tenants, properties, pets…"
          className="w-full rounded-lg border border-stone-200 bg-stone-50 py-2 pl-9 pr-14 text-sm text-stone-900 placeholder-stone-400 focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
        />
        <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border border-stone-200 bg-white px-1.5 py-0.5 text-xs text-stone-400">
          ⌘K
        </kbd>
      </div>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-96 overflow-y-auto rounded-lg border border-stone-200 bg-white shadow-lg">
          {loading && <div className="px-4 py-3 text-sm text-stone-400">Searching…</div>}

          {!loading && groups.length === 0 && (
            <div className="px-4 py-3 text-sm text-stone-400">No matches for "{trimmedQuery}"</div>
          )}

          {!loading &&
            groups.map((group) => (
              <div key={group.type} className="py-1">
                <div className="px-4 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-stone-400">
                  {group.label}
                </div>
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(item.route)}
                    className="block w-full px-4 py-2 text-left hover:bg-stone-50"
                  >
                    <div className="text-sm font-medium text-stone-900">{item.title}</div>
                    {item.subtitle && <div className="text-xs text-stone-500">{item.subtitle}</div>}
                  </button>
                ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
