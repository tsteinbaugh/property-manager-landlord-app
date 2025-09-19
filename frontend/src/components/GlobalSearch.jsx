import React, { useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";

/**
 * GlobalSearch — frontend-only, enhanced
 * - Fuzzy search across properties, tenants, occupants, pets, emergency contacts
 * - Works with your current data shape (tenants.contact.{phone,email}, etc.)
 * - Phone normalization (so 5551234567 matches 555-123-4567)
 * - Enter opens first/active result; ↑/↓ keyboard navigation; Esc clears
 * - Shows Matches vs Close results with counts
 * - Smart empty-state hints based on query type (phone/email)
 *
 * Props
 *   properties: Property[]
 *   onOpenProperty: (propertyId: string | number) => void
 *   placeholder?: string
 */

// ---------------- Helpers ----------------
const normalizePhone = (s = "") => s.replace(/\D/g, "");

function looksLikePhone(q = "") {
  // loose: allow 7+ digits w/ optional punctuation
  const digits = normalizePhone(q);
  return digits.length >= 7;
}

function looksLikeEmail(q = "") {
  return q.includes("@");
}

// Build a flat index of searchable docs from your real data shape
function buildIndex(properties = []) {
  const docs = [];
  for (const p of properties) {
    const propertyName = p.address || p.name || "(Unnamed property)";

    // Property itself
    docs.push({
      _rid: `p-${p.id}`,
      propertyId: p.id,
      propertyName,
      entityType: "property",
      name: propertyName,
      address: p.address || "",
      city: p.city || "",
      state: p.state || "",
      zip: p.zip || "",
      phone: "",
      phoneNorm: "",
      email: "",
      type: "",
      breed: "",
      relation: "",
    });

    // Tenants
    for (const t of p.tenants || []) {
      const phone = t?.contact?.phone || "";
      const email = t?.contact?.email || "";
      docs.push({
        _rid: `t-${p.id}-${t.name || Math.random()}`,
        propertyId: p.id,
        propertyName,
        entityType: "tenant",
        name: t.name || "",
        email,
        phone,
        phoneNorm: normalizePhone(phone),
        address: p.address || "",
        city: p.city || "",
        state: p.state || "",
        zip: p.zip || "",
        type: "",
        breed: "",
        relation: "",
      });
    }

    // Occupants
    for (const o of p.occupants || []) {
      docs.push({
        _rid: `o-${p.id}-${o.name || Math.random()}`,
        propertyId: p.id,
        propertyName,
        entityType: "occupant",
        name: o.name || "",
        email: "",
        phone: "",
        phoneNorm: "",
        address: p.address || "",
        city: p.city || "",
        state: p.state || "",
        zip: p.zip || "",
        type: "",
        breed: "",
        relation: "",
      });
    }

    // Emergency contacts
    for (const ec of p.emergencyContacts || []) {
      const phone = ec?.contact?.phone || "";
      const email = ec?.contact?.email || "";
      docs.push({
        _rid: `e-${p.id}-${ec.name || Math.random()}`,
        propertyId: p.id,
        propertyName,
        entityType: "emergencyContact",
        name: ec.name || "",
        email,
        phone,
        phoneNorm: normalizePhone(phone),
        address: p.address || "",
        city: p.city || "",
        state: p.state || "",
        zip: p.zip || "",
        type: "",
        breed: "",
        relation: ec.relation || "",
      });
    }

    // Pets
    for (const pet of p.pets || []) {
      docs.push({
        _rid: `pet-${p.id}-${pet.name || Math.random()}`,
        propertyId: p.id,
        propertyName,
        entityType: "pet",
        name: pet.name || "",
        email: "",
        phone: "",
        phoneNorm: "",
        address: p.address || "",
        city: p.city || "",
        state: p.state || "",
        zip: p.zip || "",
        type: pet.type || "",
        breed: pet.breed || "",
        relation: "",
      });
    }
  }
  return docs;
}

function badgeLabel(t) {
  switch (t) {
    case "tenant":
      return "Tenant";
    case "occupant":
      return "Occupant";
    case "pet":
      return "Pet";
    case "emergencyContact":
      return "Emergency";
    default:
      return "Property";
  }
}

export default function GlobalSearch({
  properties,
  onOpenProperty,
  placeholder = "Search name, phone, email, address, pet…",
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // keyboard focus
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Global keyboard shortcuts: Ctrl/Cmd+K to focus; '/' to focus when not typing
  useEffect(() => {
    function onKey(e) {
      const tag = (e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "");
      const isTyping = tag === "input" || tag === "textarea" || (e.target && e.target.isContentEditable);

      // Ctrl/Cmd + K opens & focuses search from anywhere
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
        setActiveIndex(0);
        return;
      }

      // Quick '/' opens search only if user isn't already typing in a field
      if (!isTyping && e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
        setActiveIndex(0);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Build index + Fuse once per properties change
  const fuse = useMemo(() => {
    const docs = buildIndex(properties);
    return new Fuse(docs, {
      includeScore: true,
      shouldSort: true,
      threshold: 0.33, // slightly stricter than before
      distance: 100,
      keys: [
        { name: "name", weight: 0.6 },
        { name: "email", weight: 0.55 },
        { name: "phone", weight: 0.55 },
        { name: "phoneNorm", weight: 0.6 }, // normalized phone
        { name: "address", weight: 0.45 },
        { name: "city", weight: 0.4 },
        { name: "state", weight: 0.35 },
        { name: "zip", weight: 0.35 },
        { name: "type", weight: 0.3 },
        { name: "breed", weight: 0.25 },
        { name: "relation", weight: 0.2 },
        { name: "propertyName", weight: 0.35 },
      ],
    });
  }, [properties]);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return [];

    // If it's a phone-like query, prefer normalized digits search
    const qDigits = normalizePhone(q);
    const searchTerm = looksLikePhone(q) ? qDigits : q;

    // Limit results for snappy UX
    return fuse.search(searchTerm, { limit: 15 });
  }, [fuse, query]);

  // Split matches and close results by score threshold (lower = better)
  const NEAR_EXACT = 0.07;
  const matches = results.filter((r) => (r.score ?? 1) <= NEAR_EXACT);
  const close = results.filter((r) => (r.score ?? 1) > NEAR_EXACT);

  // Flatten for keyboard nav (keep Matches first, then Close)
  const flat = useMemo(() => [...matches, ...close], [matches, close]);

  // Keep activeIndex in range as results change
  useEffect(() => {
    if (activeIndex >= flat.length) setActiveIndex(flat.length > 0 ? flat.length - 1 : 0);
  }, [flat.length, activeIndex]);

  // Auto-scroll the active row into view when moving with arrows
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-ridx="${activeIndex}"]`);
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex, flat.length]);

  function handleKeyDown(e) {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      return;
    }
    if (!flat.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % flat.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + flat.length) % flat.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = flat[Math.max(0, Math.min(activeIndex, flat.length - 1))];
      if (target) onOpenProperty(target.item.propertyId);
    } else if (e.key === "Escape") {
      setOpen(false);
      setQuery("");
    }
  }

  function Row({ r, index }) {
    const d = r.item;
    const isActive = index === activeIndex;

    const secondary = [];
    if (d.email) secondary.push(d.email);
    if (d.phone) secondary.push(d.phone);
    if (d.address) secondary.push(d.address);
    if (d.city) secondary.push(d.city);
    if (d.type) secondary.push(d.type);
    if (d.breed) secondary.push(d.breed);
    if (d.relation) secondary.push(d.relation);

    const primary =
      d.name || d.email || d.phone || d.address || d.city || d.propertyName || "(no label)";

    return (
      <button
        data-ridx={index}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => onOpenProperty(d.propertyId)}
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
        title={`Open ${d.propertyName}`}
      >
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
          <span style={{ fontSize: 12, padding: "2px 6px", borderRadius: 999, background: "#f2f4f7" }}>
            {badgeLabel(d.entityType)}
          </span>
          <span style={{ fontWeight: 600 }}>{primary}</span>
        </div>
        <div style={{ fontSize: 12, color: "#6b7280" }}>
          {d.propertyName}
          {secondary.length ? " • " + secondary.slice(0, 3).join(" • ") : ""}
        </div>
      </button>
    );
  }

  const total = results.length;

  return (
    <div style={{ position: "relative", maxWidth: 520, width: "100%" }}>
      <div style={{ position: "relative" }}>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
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
        {query && (
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              setQuery("");
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
        )}
      </div>

      {/* Results dropdown */}
      {open && query.trim() && (
        <div
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
          ref={listRef}
        >
          {total === 0 && (
            <div style={{ padding: 16, textAlign: "center", color: "#6b7280" }}>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>No results</div>
              <div style={{ fontSize: 12 }}>
                {looksLikePhone(query)
                  ? "Try digits only (e.g., 5551234567)."
                  : looksLikeEmail(query)
                  ? "Try the part before @ or full email."
                  : "Try a phone, email, pet type/breed, name, or address."}
              </div>
            </div>
          )}

          {matches.length > 0 && (
            <div style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#374151", margin: "6px 2px" }}>
                Matches ({matches.length})
              </div>
              {matches.map((r, i) => (
                <Row key={`${r.item._rid}`} r={r} index={i} />
              ))}
            </div>
          )}

          {close.length > 0 && (
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#374151", margin: "6px 2px" }}>
                Close results ({close.length})
              </div>
              {close.map((r, i) => (
                <Row key={`${r.item._rid}`} r={r} index={i + matches.length} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
