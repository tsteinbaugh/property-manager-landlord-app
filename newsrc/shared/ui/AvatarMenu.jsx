// newsrc/shared/ui/AvatarMenu.jsx
import React, { useRef, useState, useEffect } from "react";
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
  const { user, isSysAdmin, effectiveRole, impersonate, clearImpersonation, signOut } = useUser();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const initials = (user?.name || user?.email || "?")
    .split(" ")
    .map((s) => s[0]?.toUpperCase())
    .slice(0, 2)
    .join("");

  const allRoles = Object.values(ROLES); // single source of truth

  return (
    <div className={css.wrap} ref={ref}>
      <button
        className={css.avatarBtn}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account menu"
      >
        <span className={css.avatarCircle} aria-hidden>
          {initials}
        </span>
        <span className={css.meta}>
          <span className={css.name}>{user?.name || user?.email || "Signed out"}</span>
          <span className={css.role} data-testid="role-text">
            {ROLE_LABEL[effectiveRole] ?? effectiveRole ?? "Unknown"}
          </span>
        </span>
      </button>

      {open && (
        <div className={css.menu} role="menu" aria-label="User menu">
          <button className={css.item} role="menuitem" onClick={() => alert("Profile clicked")}>
            Profile
          </button>
          <button className={css.item} role="menuitem" onClick={() => alert("Settings clicked")}>
            Settings
          </button>

          {isSysAdmin && (
            <>
              <div className={css.sectionLabel}>Administration</div>
              <div className={css.subtle}>Impersonate role</div>
              <div className={css.roleList} role="group" aria-label="Role switcher">
                {allRoles.map((r) => (
                  <button
                    key={r}
                    className={`${css.rolePill} ${effectiveRole === r ? css.active : ""}`}
                    onClick={() => impersonate(r)}
                  >
                    {ROLE_LABEL[r] || r}
                  </button>
                ))}
              </div>
              <button className={css.item} role="menuitem" onClick={clearImpersonation}>
                Clear impersonation
              </button>
              <hr className={css.hr} />
            </>
          )}

          <button className={css.item} role="menuitem" onClick={signOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
