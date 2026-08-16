import { useEffect, useRef, useState } from "react";

// A plain <select> doesn't scale once there are a lot of options (e.g. every
// Expense on a property) — this is a minimal type-to-filter dropdown for
// those cases, same interaction shape as GlobalSearch (input + filtered
// list + click-outside-to-close), just scoped to one field instead of a
// page-wide search.
export default function SearchableSelect({ value, onChange, options, placeholder = "Search..." }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((o) => o.value === value)?.label || "";
  const filtered = query.trim()
    ? options.filter((o) => o.label.toLowerCase().includes(query.trim().toLowerCase()))
    : options;

  function select(optionValue) {
    onChange(optionValue);
    setQuery("");
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative">
      <input
        type="text"
        value={open ? query : selectedLabel}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => {
          setQuery("");
          setOpen(true);
        }}
        placeholder={placeholder}
        className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
      />
      {open && (
        <div className="absolute left-0 right-0 top-full z-10 mt-1 max-h-56 overflow-y-auto rounded-lg border border-stone-200 bg-white shadow-lg">
          <button
            type="button"
            onClick={() => select("")}
            className="block w-full px-3 py-2 text-left text-sm text-stone-500 hover:bg-stone-50"
          >
            None
          </button>
          {filtered.length === 0 ? (
            <p className="px-3 py-2 text-sm text-stone-400">No matches</p>
          ) : (
            filtered.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => select(opt.value)}
                className="block w-full px-3 py-2 text-left text-sm text-stone-700 hover:bg-stone-50"
              >
                {opt.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
