import React from "react";
import SiteHeader from "@layout/SiteHeader.jsx";
import SiteFooter from "@layout/SiteFooter.jsx";

export default function AppLayout({ children }) {
  return (
    <div className="app">
      <SiteHeader />
      <main style={{ padding: 16 }}>{children}</main>
      <SiteFooter />
    </div>
  );
}
