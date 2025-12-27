import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@app/providers.jsx";

export default function RequireRole({ allow = [], children }) {
  const { user, effectiveRole, isSysAdmin } = useUser();
  const loc = useLocation();

  // 1) Not signed in at all
  if (!user) {
    return <Navigate to="/sign-in" replace state={{ from: loc }} />;
  }

  // 2) Normalize role: prefer effectiveRole, then baseRole, then user.role
  const rawRole = effectiveRole || user.baseRole || user.role;
  const normalizedRole = rawRole ? String(rawRole).toLowerCase() : null;

  // 3) Sysadmin can see everything (including /admin)
  if (isSysAdmin || normalizedRole === "system_admin") {
    return children;
  }

  // 4) If we passed an allow list, enforce it against the normalizedRole
  if (Array.isArray(allow) && allow.length > 0) {
    if (!allow.includes(normalizedRole)) {
      // Logged in but wrong role → send them somewhere safe
      return <Navigate to="/dashboard" replace />;
    }
  }

  // 5) Allowed
  return children;
}
