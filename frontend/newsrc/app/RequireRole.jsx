import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@app/providers.jsx";

export default function RequireRole({ allow = [], children }) {
  const { isAuthenticated, effectiveRole } = useUser();
  const loc = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace state={{ from: loc }} />;
  }

  if (allow.length && !allow.includes(effectiveRole)) {
    return <Navigate to="/403" replace />;
  }
  return children;
}
