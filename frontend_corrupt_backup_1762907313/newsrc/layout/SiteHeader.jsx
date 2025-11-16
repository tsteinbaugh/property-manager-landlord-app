// newsrc/layout/SiteHeader.jsx
import React from "react";
import Breadcrumbs from "@shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import FeverLight from "@shared/ui/FeverLight/FeverLight.jsx";
import SearchInput from "@shared/ui/SearchInput.jsx";
import { useGlobalSearch } from "@features/search/hooks/useGlobalSearch.js";

export default function SiteHeader() {
  // Temporary: role=sysadmin for full visibility
  const { query, setQuery, open, setOpen, loading, results } = useGlobalSearch({
    role: "sysadmin",
    currentUser: null,
  });

  // Prefer pre-normalized entries (label/sublabel), but fall back to raw fields
  const normalizedResults = Array.isArray(results)
    ? results
        .map((r) => {
          const d = r?.item ?? r;
          if (!d) return null;

          const label =
            d.label ||
            d.name ||
            d.propertyName ||
            d.address ||
            d.city ||
            "(no label)";

          const sublabel =
            d.sublabel ||
            [
              d.propertyName,
              d.email,
              d.phone,
              d.address,
              d.city,
              d.type,
              d.breed,
              d.relation,
            ]
              .filter(Boolean)
              .slice(0, 3)
              .join(" • ");

          return {
            id: d.id || d._rid || `${d.entityType || "res"}:${Math.random().toString(36).slice(2)}`,
            label,
            sublabel,
            entityType: d.entityType,
            propertyId: d.propertyId,
          };
        })
        .filter(Boolean)
    : [];

  return (
    <header
      style={{
        padding: 8,
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center",
        gap: 12,
        justifyContent: "space-between",
      }}
    >
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Dashboard", to: "/dashboard" },
        ]}
      />

      <div style={{ flex: "0 1 520px" }}>
        <SearchInput
          value={query}
          onChange={setQuery}
          open={open}
          onOpenChange={setOpen}
          loading={loading}
          results={normalizedResults}
          onSelect={(res) => {
            // TODO: route based on entityType (property/tenant/etc.)
            console.log("Selected search result:", res);
          }}
          placeholder="Search name, phone, email, address, pet…"
        />
      </div>

      <FeverLight />
    </header>
  );
}
