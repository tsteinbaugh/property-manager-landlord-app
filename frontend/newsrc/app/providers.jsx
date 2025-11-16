// newsrc/app/providers.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

const UserContext = createContext(null);

export function AppProviders({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [impersonatedRole, setImpersonatedRole] = useState(null);

  // Effective role = impersonated if set, else baseRole
  const effectiveRole = impersonatedRole || user?.baseRole || null;

  const isSysAdmin = user?.baseRole === "SYSADMIN";

  // Try to restore session from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (!stored) return;
    try {
      const { user: u, token: t } = JSON.parse(stored);
      if (u && t) {
        setUser(u);
        setToken(t);
      }
    } catch {
      // ignore bad data
    }
  }, []);

  // Persist auth in localStorage
  useEffect(() => {
    if (user && token) {
      localStorage.setItem("auth", JSON.stringify({ user, token }));
    } else {
      localStorage.removeItem("auth");
    }
  }, [user, token]);

  async function signIn({ username, password }) {
    // SignIn.jsx passes { username, password }; backend expects email
    const res = await fetch(`${API_BASE}/api/auth/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: username, password }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Sign in failed");
    }

    const data = await res.json();
    setUser(data.user);
    setToken(data.token);
    setImpersonatedRole(null);
    return data.user;
  }

  function signOut() {
    setUser(null);
    setToken(null);
    setImpersonatedRole(null);
    localStorage.removeItem("auth");
  }

  function impersonate(role) {
    if (!isSysAdmin) return;
    setImpersonatedRole(role);
  }

  function clearImpersonation() {
    setImpersonatedRole(null);
  }

  const value = {
    user,
    token,
    isSysAdmin,
    effectiveRole,
    impersonatedRole,
    impersonate,
    clearImpersonation,
    signIn,
    signOut,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used within <AppProviders>");
  }
  return ctx;
}
