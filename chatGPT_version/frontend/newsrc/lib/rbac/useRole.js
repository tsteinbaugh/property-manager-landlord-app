import { useMemo, useState, useEffect } from "react";

/**
 * Role model:
 * - authRole: role from authentication (immutable for the session; “who you are”)
 * - role: effective role used by RBAC checks (may be impersonated)
 * - impersonated: non-empty string when sysadmin is impersonating
 *
 * Persistence:
 * - We only ever persist the *impersonated* role (if any) under RBAC_IMPERSONATED.
 * - On load:
 *    role = impersonated || authRole
 * - Reset clears impersonation and returns to authRole.
 */

const KEY_IMPERSONATED = "RBAC_IMPERSONATED";

export function useRole(user) {
  const authRole = user?.role || "viewer";
  const canImpersonate = authRole === "sysadmin";

  const [impersonated, setImpersonated] = useState(() => {
    try {
      return localStorage.getItem(KEY_IMPERSONATED) || "";
    } catch {
      return "";
    }
  });

  const role = impersonated || authRole;

  useEffect(() => {
    // If auth changes away from sysadmin, drop impersonation.
    if (!canImpersonate && impersonated) {
      setImpersonated("");
      try { localStorage.removeItem(KEY_IMPERSONATED); } catch {}
    }
  }, [canImpersonate, impersonated]);

  const api = useMemo(() => {
    return {
      authRole,
      role,
      impersonated,
      canImpersonate,
      setRole: (nextRole) => {
        if (!canImpersonate) return;
        setImpersonated(nextRole);
        try { localStorage.setItem(KEY_IMPERSONATED, nextRole); } catch {}
      },
      resetRole: () => {
        setImpersonated("");
        try { localStorage.removeItem(KEY_IMPERSONATED); } catch {}
      },
    };
  }, [authRole, role, impersonated, canImpersonate]);

  return api;
}
