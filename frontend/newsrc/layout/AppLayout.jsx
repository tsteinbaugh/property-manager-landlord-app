// newsrc/layout/AppLayout.jsx
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SiteHeader from "./SiteHeader.jsx";
import SiteFooter from "./SiteFooter.jsx";
import LandlordSideNav from "./LandlordSideNav.jsx";
import styles from "./AppLayout.module.css";

// newsrc/layout/AppLayout.jsx
// ...imports...

export default function AppLayout({ children }) {
  const location = useLocation();
  const pathname = location.pathname || "";

  const isAuthRoute =
    pathname === "/sign-in" ||
    pathname === "/forgot-password" ||
    pathname === "/reset-password" ||
    pathname === "/accept-invite";

  if (isAuthRoute) {
    return (
      <div className={styles.authShell}>
        <main className={styles.authMain}>{children}</main>
      </div>
    );
  }

  const isLandlordRoute =
    pathname === "/landlord" || pathname.startsWith("/landlord/");

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={styles.app}>
      <SiteHeader />

      <div className={styles.body}>
        {isLandlordRoute && sidebarOpen && (
          <aside className={styles.sidebar}>
            <LandlordSideNav
              isOpen={sidebarOpen}
              onToggle={() => setSidebarOpen(false)}
            />
          </aside>
        )}

        {isLandlordRoute && !sidebarOpen && (
          <div className={styles.sidebarCollapsed}>
            <button
              type="button"
              className={styles.sidebarCollapsedButton}
              onClick={() => setSidebarOpen(true)}
              aria-label="Show menu"
            >
              ⮞
            </button>
          </div>
        )}

        <main
          className={
            isLandlordRoute && sidebarOpen
              ? styles.mainWithSidebar
              : styles.mainStandalone
          }
        >
          {children}
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}