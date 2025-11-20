import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@app/providers.jsx";

/**
 * RequireRole
 *
 * Usage:
 *   <RequireRole allow={[ROLES.SYSADMIN]}>
 *     <AdminLayout />
 *   </RequireRole>
 *
 * Behavior:
 *   - If no user → /sign-in
 *   - If isSysAdmin → always allowed
 *   - Else, if allow[] given and effectiveRole not in it → /dashboard
 *   - Otherwise → render children
 */
export default function RequireRole({ allow = [], children }) {
  const { user, effectiveRole, isSysAdmin } = useUser();
  const loc = useLocation();

  // 1) Not signed in at all
  if (!user) {
    return <Navigate to="/sign-in" replace state={{ from: loc }} />;
  }

  // 2) Sysadmin can see everything (including /admin)
  if (isSysAdmin) {
    return children;
  }

  // 3) If we passed an allow list, enforce it against effectiveRole
  if (Array.isArray(allow) && allow.length > 0) {
    if (!allow.includes(effectiveRole)) {
      // Logged in but wrong role → send them somewhere safe
      return <Navigate to="/dashboard" replace />;
    }
  }

  // 4) Allowed
  return children;
}
