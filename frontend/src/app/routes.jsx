import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "../features/layout/AppLayout.jsx";
import ScrollToTop from "../features/ui/ScrollToTop.jsx";

import SignIn from "../features/auth/pages/SignIn.jsx";
import Dashboard from "../features/properties/pages/Dashboard.jsx";
import PropertyDetail from "../features/properties/pages/PropertyDetail.jsx";
import PropertyFinancials from "../features/financials/pages/PropertyFinancials.jsx";

export default function AppRoutes() {
  const [role, setRole] = useState(null);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SignIn setRole={setRole} />} />

        <Route element={role ? <AppLayout /> : <Navigate to="/" replace />}>
          <Route
            path="/dashboard"
            element={<Dashboard role={role} setRole={setRole} />}
          />
          <Route
            path="/property/:id"
            element={<PropertyDetail role={role} setRole={setRole} />}
          />
          <Route path="/property/:id/financials" element={<PropertyFinancials />} />
          <Route path="/properties/:id/financials" element={<PropertyFinancials />} />
        </Route>

        <Route
          path="*"
          element={<Navigate to={role ? "/dashboard" : "/"} replace />}
        />
      </Routes>
    </>
  );
}
