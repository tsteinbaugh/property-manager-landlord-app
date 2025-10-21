// src/App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import SignIn from "./pages/SignIn.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PropertyDetail from "./pages/PropertyDetail.jsx";
import PropertyFinancials from "./pages/PropertyFinancials.jsx";

import "./App.css";

export default function App() {
  const [role, setRole] = useState(null);

  return (
    <BrowserRouter>
      {/* This is your scrollable container */}
      <div id="scroll-root" className="app-scroll">
        {/* Reset scroll on every route change */}
        <ScrollToTop />

        <Routes>
          {/* Public */}
          <Route path="/" element={<SignIn setRole={setRole} />} />

          {/* Protected shell (header + breadcrumbs) */}
          <Route element={role ? <AppLayout /> : <Navigate to="/" replace />}>
            <Route
              path="/dashboard"
              element={<Dashboard role={role} setRole={setRole} />}
            />
            <Route
              path="/property/:id"
              element={<PropertyDetail role={role} setRole={setRole} />}
            />
            {/* keep both forms you had */}
            <Route path="/property/:id/financials" element={<PropertyFinancials />} />
            <Route path="/properties/:id/financials" element={<PropertyFinancials />} />
          </Route>

          {/* Fallback */}
          <Route
            path="*"
            element={<Navigate to={role ? "/dashboard" : "/"} replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
