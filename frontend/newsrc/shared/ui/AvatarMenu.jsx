// newsrc/shared/ui/AvatarMenu.jsx
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from "./AvatarMenu.module.css";
import { useUser } from "@app/providers.jsx";
import { ROLES } from "@lib/rbac/roles.js";

const ROLE_LABEL = {
  [ROLES.SYSADMIN]: "System Admin",
  [ROLES.LANDLORD]: "Landlord",
  [ROLES.PROPERTY_MANAGER]: "Property Manager",
  [ROLES.MAINTENANCE_TECH]: "Maintenance Tech",
  [ROLES.TENANT]: "Tenant",
  [ROLES.CLEANER]: "Cleaner",
};

export default function AvatarMenu() {
  const {
    user,
    isSysAdmin,
    effectiveRole,
    baseRole,
    impersonate,
    clearImpersonation,
    signOut,
  } = useUser();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({
    profile: false,
    settings: false,
    admin: false,
  });

  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setExpanded({ profile: false, settings: false, admin: false });
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const initials = (user?.name || user?.email || "?")
    .split(" ")
    .map((s) => s[0]?.toUpperCase())
    .slice(0, 2)
    .join("");

  const allRoles = Object.values(ROLES);

  const toggleSection = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleImpersonateChange = (e) => {
    const nextRole = e.target.value;
    if (nextRole && impersonate) impersonate(nextRole);
  };

  const currentRoleLabel =
    ROLE_LABEL[effectiveRole] ?? effectiveRole ?? "Unknown";

  const goToAdmin = () => {
    setOpen(false);
    setExpanded({ profile: false, settings: false, admin: false });
    navigate("/admin");
  };

  return (
    <div className={css.wrap} ref={ref}>
      <button
        className={css.avatarBtn}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account menu"
      >
        <span className={css.avatarCircle} aria-hidden="true">
          {initials}
        </span>
        <span className={css.meta}>
          <span className={css.name}>
            {user?.name || user?.email || "Signed out"}
          </span>
          <span className={css.role} data-testid="role-text">
            {currentRoleLabel}
          </span>
        </span>
      </button>

      {open && (
        <div className={css.menu} role="menu" aria-label="User menu">
          {/* PROFILE SECTION */}
          <button
            type="button"
            className={css.sectionHeader}
            role="menuitem"
            aria-expanded={expanded.profile}
            onClick={() => toggleSection("profile")}
          >
            <span>Profile</span>
            <span className={css.chevron} aria-hidden="true">
              {expanded.profile ? "▴" : "▾"}
            </span>
          </button>
          {expanded.profile && (
            <div className={css.sectionBody}>
              <div className={css.fieldRow}>
                <span className={css.fieldLabel}>Name</span>
                <span className={css.fieldValue}>
                  {user?.name || "(not set)"}
                </span>
              </div>
              <div className={css.fieldRow}>
                <span className={css.fieldLabel}>Email</span>
                <span className={css.fieldValue}>
                  {user?.email || "(not set)"}
                </span>
              </div>
              <div className={css.fieldRow}>
                <span className={css.fieldLabel}>Base role</span>
                <span className={css.fieldValue}>
                  {ROLE_LABEL[baseRole] ?? baseRole ?? "(unknown)"}
                </span>
              </div>
              <div className={css.fieldRow}>
                <span className={css.fieldLabel}>Effective role</span>
                <span className={css.fieldValue}>{currentRoleLabel}</span>
              </div>
            </div>
          )}

          {/* SETTINGS SECTION */}
          <button
            type="button"
            className={css.sectionHeader}
            role="menuitem"
            aria-expanded={expanded.settings}
            onClick={() => toggleSection("settings")}
          >
            <span>Settings</span>
            <span className={css.chevron} aria-hidden="true">
              {expanded.settings ? "▴" : "▾"}
            </span>
          </button>
          {expanded.settings && (
            <div className={css.sectionBody}>
              {/* placeholders for real prefs later */}
              <div className={css.fieldRow}>
                <span className={css.fieldLabel}>Theme</span>
                <span className={css.fieldValue}>Light (default)</span>
              </div>
              <div className={css.fieldRow}>
                <span className={css.fieldLabel}>Notifications</span>
                <span className={css.fieldValue}>Enabled</span>
              </div>
            </div>
          )}

          {/* ADMINISTRATION SECTION (sysadmin only) */}
          {isSysAdmin && (
            <>
              <button
                type="button"
                className={css.sectionHeader}
                role="menuitem"
                aria-expanded={expanded.admin}
                onClick={() => toggleSection("admin")}
              >
                <span>Administration</span>
                <span className={css.chevron} aria-hidden="true">
                  {expanded.admin ? "▴" : "▾"}
                </span>
              </button>
              {expanded.admin && (
                <div className={css.sectionBody}>
                  <button
                    type="button"
                    className={css.subtleAction}
                    onClick={() => navigate("/admin")}
                  >
                    Open admin
                  </button>
                </div>
              )}
            </>
          )}

          <hr className={css.hr} />

          <button
            type="button"
            className={css.item}
            role="menuitem"
            onClick={signOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
