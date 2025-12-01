// newsrc/layout/LandlordSideNav.jsx
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { ROLES } from "@lib/rbac/roles.js";
import styles from "./LandlordSideNav.module.css";

function linkClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.linkActive}` : styles.link;
}

function subLinkClass({ isActive }) {
  return isActive ? `${styles.subLink} ${styles.subLinkActive}` : styles.subLink;
}

export default function LandlordSideNav({ isOpen = true, onToggle }) {
  const { user } = useUser() || {};
  const location = useLocation();
  const pathname = location.pathname || "";

  // Collapsed by default; user can expand
  const [mainOpen, setMainOpen] = useState(false);
  const [residentsOpen, setResidentsOpen] = useState(false);
  const [operationsOpen, setOperationsOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  // Which routes count as "Residents are active"?
  const isResidentsSectionActive =
    pathname === "/landlord/residents" ||
    pathname.startsWith("/landlord/tenants") ||
    pathname.startsWith("/landlord/occupants") ||
    pathname.startsWith("/landlord/pets") ||
    pathname.startsWith("/landlord/emergencyContacts") ||
    pathname.startsWith("/landlord/vehicles");

  const isResidentsRoot = pathname === "/landlord/residents";

  return (
    <nav className={styles.nav}>
      {/* MAIN SECTION */}
      <div className={styles.section}>
        <button
          type="button"
          className={styles.sectionHeaderButton}
          onClick={() => setMainOpen((v) => !v)}
        >
          <span className={styles.sectionHeaderLabel}>Main</span>
          <span className={styles.caret}>{mainOpen ? "▾" : "▸"}</span>
        </button>

        {mainOpen && (
          <div className={styles.sectionBody}>
            <NavLink to="/landlord/properties" className={linkClass}>
              Properties
            </NavLink>

            {/* Residents parent + nested list */}
            <div
              className={
                isResidentsSectionActive
                  ? `${styles.group} ${styles.groupActive}`
                  : styles.group
              }
            >
              <div className={styles.groupHeader}>
                <NavLink
                  to="/landlord/residents"
                  className={() =>
                    isResidentsRoot
                      ? `${styles.link} ${styles.linkActive}`
                      : styles.link
                  }
                >
                  Residents
                </NavLink>

                <button
                  type="button"
                  className={styles.groupToggle}
                  onClick={() => setResidentsOpen((v) => !v)}
                >
                  <span className={styles.caret}>
                    {residentsOpen ? "▾" : "▸"}
                  </span>
                </button>
              </div>

              {residentsOpen && (
                <div className={styles.subList}>
                  <NavLink
                    to="/landlord/residents?tab=tenants"
                    className={subLinkClass}
                  >
                    Tenants
                  </NavLink>
                  <NavLink
                    to="/landlord/residents?tab=occupants"
                    className={subLinkClass}
                  >
                    Occupants
                  </NavLink>
                  <NavLink
                    to="/landlord/residents?tab=pets"
                    className={subLinkClass}
                  >
                    Pets
                  </NavLink>
                  <NavLink
                    to="/landlord/residents?tab=emergencyContacts"
                    className={subLinkClass}
                  >
                    Emergency Contacts
                  </NavLink>
                  <NavLink
                    to="/landlord/residents?tab=vehicles"
                    className={subLinkClass}
                  >
                    Vehicles
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/landlord/leases" className={linkClass}>
              Leases
            </NavLink>
          </div>
        )}
      </div>

      {/* OPERATIONS SECTION */}
      <div className={styles.section}>
        <button
          type="button"
          className={styles.sectionHeaderButton}
          onClick={() => setOperationsOpen((v) => !v)}
        >
          <span className={styles.sectionHeaderLabel}>Operations</span>
          <span className={styles.caret}>{operationsOpen ? "▾" : "▸"}</span>
        </button>

        {operationsOpen && (
          <div className={styles.sectionBody}>
            <NavLink to="/landlord/maintenance" className={linkClass}>
              Maintenance
            </NavLink>
            <NavLink to="/landlord/expenses" className={linkClass}>
              Expenses
            </NavLink>
            <NavLink to="/landlord/tax" className={linkClass}>
              Tax
            </NavLink>
            <NavLink to="/landlord/legal" className={linkClass}>
              Legal
            </NavLink>
            <NavLink to="/landlord/cleaning" className={linkClass}>
              Cleaning
            </NavLink>
          </div>
        )}
      </div>

      {/* ADMIN SECTION (for sysadmin users) */}
      {user?.role === ROLES.SYSADMIN && (
        <div className={styles.section}>
          <button
            type="button"
            className={styles.sectionHeaderButton}
            onClick={() => setAdminOpen((v) => !v)}
          >
            <span className={styles.sectionHeaderLabel}>System</span>
            <span className={styles.caret}>{adminOpen ? "▾" : "▸"}</span>
          </button>

          {adminOpen && (
            <div className={styles.sectionBody}>
              <NavLink to="/landlord/admin" className={linkClass}>
                Admin
              </NavLink>
            </div>
          )}
        </div>
      )}

      {/* Bottom arrow to hide sidebar */}
      {isOpen && onToggle && (
        <div className={styles.bottomToggleRow}>
          <button
            type="button"
            className={styles.bottomToggleButton}
            onClick={onToggle}
            aria-label="Hide menu"
          >
            ⮜
          </button>
        </div>
      )}
    </nav>
  );
}
