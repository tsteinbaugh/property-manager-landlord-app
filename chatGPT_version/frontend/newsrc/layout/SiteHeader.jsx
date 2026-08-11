// newsrc/layout/SiteHeader.jsx
import React from "react";
// import Breadcrumbs from "@shared/ui/Breadcrumbs/Breadcrumbs.jsx";
// import FeverLight from "@shared/ui/FeverLight/FeverLight.jsx";
// import SearchInput from "@shared/ui/SearchInput.jsx";
// import { useGlobalSearch } from "@features/search/hooks/useGlobalSearch.js";
import AvatarMenu from "@shared/ui/AvatarMenu.jsx";
import { useUser } from "@app/providers.jsx";
import { useRole } from "@lib/rbac/useRole.js";

export default function SiteHeader() {
  const { user } = useUser();
  const authRole = user?.role || "viewer";
  const { role: effectiveRole } = useRole(authRole);

  // Commented out so it stops calling protected endpoints during search index build
  // const { query, setQuery, open, setOpen, loading, results } = useGlobalSearch({
  //   role: effectiveRole,
  //   currentUser: user || null,
  // });

  return (
    <>
      {/*
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
        <Breadcrumbs items={[{ label: "Dashboard", to: "/dashboard" }]} />
        <div style={{ flex: "0 1 520px" }}>
          <SearchInput
            value={query}
            onChange={setQuery}
            open={open}
            onOpenChange={setOpen}
            loading={loading}
            results={results.map((r) => ({
              id: r.item._rid,
              label: r.item.name || r.item.propertyName || "(no label)",
              sublabel: [
                r.item.propertyName,
                r.item.email,
                r.item.phone,
                r.item.address,
                r.item.city,
                r.item.type,
                r.item.breed,
                r.item.relation,
              ]
                .filter(Boolean)
                .slice(0, 3)
                .join(" • "),
              entityType: r.item.entityType,
              propertyId: r.item.propertyId,
            }))}
            onSelect={(res) => console.log("open", res)}
            placeholder="Search name, phone, email, address, pet…"
          />
        </div>
        <FeverLight />
      </header>
      */}

      <header style={{ display: "flex", alignItems: "center", gap: 12, padding: 8, borderBottom: "1px solid #eee" }}>
        <div style={{ flex: 1 }} />
        <AvatarMenu />
      </header>

    </>
  );
}
