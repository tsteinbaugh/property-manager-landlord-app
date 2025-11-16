import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * SearchInput
 * - Controlled input via value/onChange
 * - Can accept either:
 *    A) `search(query)` => returns array of result objects
 *    B) precomputed `results` array (already filtered upstream)
 * - Optional open / onOpenChange control (falls back to internal state)
 * - Optional loading boolean
 * - onSelect(result) called when a row is clicked/entered
 *
 * Result shape (flexible):
 *   {
 *     id: string,
 *     label: string,
 *     sublabel?: string,
 *     entityType?: string,
 *     propertyId?: string|number,
 *   }
 */

export default function SearchInput({
  value,
  onChange,
  open: openProp,
  onOpenChange,
  loading = false,
  // Either supply `search` OR `results`
  search,            // (query: string) => Result[]
  results = [],      // precomputed results
  placeholder = "Search…",
  onSelect,
}) {
  const isControlledOpen = typeof openProp === "boolean";
  const [openInternal, setOpenInternal] = useState(false);
  const open = isControlledOpen ? openProp : openInternal;
  const setOpen = isControlledOpen ? onOpenChange || (() => {}) : setOpenInternal;

  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  // Derive items from either search() or provided results
  const items = useMemo(() => {
    if (typeof search === "function") {
      try {
        return search(value?.trim?.() ?? "");
      } catch {
        return [];
      }
    }
    // If no search func, just use the provided results array
    return Array.isArray(results) ? results : [];
  }, [search, results, value]);

  useEffect(() => {
    // keep active in range
    if (activeIndex >= items.length) setActiveIndex(items.length ? items.length - 1 : 0);
  }, [items.length, activeIndex]);

  useEffect(() => {
    // auto-scroll active item into view
    const el = listRef.current?.querySelector(`[data-ridx="${activeIndex}"]`);
    if (el && el.scrollIntoView) el.scrollIntoView({ block: "nearest" });
  }, [activeIndex, items.length]);

  const handleKeyDown = (e) => {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      return;
    }
    if (!items.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % items.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + items.length) % items.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = items[Math.max(0, Math.min(activeIndex, items.length - 1))];
      if (target && typeof onSelect === "function") onSelect(target);
    } else if (e.key === "Escape") {
      setOpen(false);
      // do not clear the value—let caller decide
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 520 }}>
      <div style={{ position: "relative" }}>
        <input
          ref={inputRef}
          value={value || ""}
          onChange={(e) => {
            onChange?.(e.target.value);
            setOpen(true);
            setActiveIndex(0);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label="Global search"
          style={{
            width: "100%",
            padding: "10px 36px 10px 12px",
            borderRadius: 10,
            border: "1px solid #d1d5db",
            outline: "none",
            boxShadow: open ? "0 0 0 4px rgba(59,130,246,0.15)" : "none",
          }}
        />
        {value ? (
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              onChange?.("");
              setActiveIndex(0);
              inputRef.current?.focus();
            }}
            aria-label="Clear"
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              border: "none",
              background: "transparent",
              fontSize: 18,
              cursor: "pointer",
              color: "#6b7280",
            }}
          >
            ×
          </button>
        ) : null}
      </div>

      {open && (value?.trim?.() ?? "") && (
        <div
          role="group"
          aria-label="Search results"
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            right: 0,
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: 10,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            zIndex: 20,
            maxHeight: 360,
            overflowY: "auto",
          }}
        >
          {loading ? (
            <div style={{ padding: 16, textAlign: "center", color: "#6b7280" }}>
              Searching…
            </div>
          ) : items.length === 0 ? (
            <div style={{ padding: 16, textAlign: "center", color: "#6b7280" }}>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>No results</div>
              <div style={{ fontSize: 12 }}>
                Try a name, phone, email, address, pet type/breed…
              </div>
            </div>
          ) : (
            items.map((r, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={r.id ?? i}
                  data-ridx={i}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => onSelect?.(r)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: isActive ? "1px solid #93c5fd" : "1px solid #eee",
                    marginBottom: 6,
                    background: isActive ? "#eff6ff" : "#fff",
                    cursor: "pointer",
                    outline: isActive ? "2px solid #bfdbfe" : "none",
                  }}
                  title={r.label}
                >
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                    {r.entityType ? (
                      <span
                        style={{
                          fontSize: 12,
                          padding: "2px 6px",
                          borderRadius: 999,
                          background: "#f2f4f7",
                          textTransform: "capitalize",
                        }}
                      >
                        {r.entityType}
                      </span>
                    ) : null}
                    <span style={{ fontWeight: 600 }}>{r.label}</span>
                  </div>
                  {r.sublabel ? (
                    <div style={{ fontSize: 12, color: "#6b7280" }}>{r.sublabel}</div>
                  ) : null}
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
