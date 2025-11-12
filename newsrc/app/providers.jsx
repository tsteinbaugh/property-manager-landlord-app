// newsrc/app/providers.jsx
import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ROLES } from "@lib/rbac/roles.js";

const UserContext = createContext({
  user: null,
  effectiveRole: null,
  isSysAdmin: false,
  impersonate: () => {},
  clearImpersonation: () => {},
  signOut: () => {},
  setUser: () => {},
});

export function UserProvider({ children, seedUser }) {
  // authUser = who actually signed in (authoritative)
  const [user, setUser] = useState(
    seedUser || { id: "u1", name: "Taylor Steinbaugh", email: "t@example.com", role: ROLES.SYSADMIN }
  );

  // uiRole = optional impersonation (only honored if auth is sysadmin)
  const [uiRole, setUiRole] = useState(null);

  // persist uiRole for sysadmin only
  useEffect(() => {
    const key = "impersonatedRole";
    if (user?.role === ROLES.SYSADMIN) {
      const saved = window.localStorage.getItem(key);
      if (saved) setUiRole(saved);
    } else {
      // if not sysadmin, clear any persisted impersonation just in case
      window.localStorage.removeItem(key);
      setUiRole(null);
    }
  }, [user?.role]);

  const isSysAdmin = user?.role === ROLES.SYSADMIN;
  const effectiveRole = isSysAdmin && uiRole ? uiRole : user?.role;

  const impersonate = (role) => {
    if (!isSysAdmin) return; // hard stop
    setUiRole(role);
    window.localStorage.setItem("impersonatedRole", role);
  };
  const clearImpersonation = () => {
    setUiRole(null);
    window.localStorage.removeItem("impersonatedRole");
  };

  const signOut = () => {
    // TODO: wire to real auth
    console.log("[auth] signOut");
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      signOut,
      isSysAdmin,
      effectiveRole,
      impersonate,
      clearImpersonation,
    }),
    [user, isSysAdmin, effectiveRole]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}

export function AppProviders({ children, seedUser }) {
  return (
    <BrowserRouter>
      <UserProvider seedUser={seedUser}>{children}</UserProvider>
    </BrowserRouter>
  );
}
