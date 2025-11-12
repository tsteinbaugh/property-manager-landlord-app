// src/App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PropertyDetail from "./pages/PropertyDetail.jsx";
import PropertyFinancials from "./pages/PropertyFinancials.jsx";
import SignIn from "./pages/SignIn.jsx";

import "./App.css";

function App() {
  const [role, setRole] = useState(null);

  return (
    <BrowserRouter>
      {/* Scrollable container */}
      <div id="scroll-root" className="app-scroll">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<SignIn setRole={setRole} />} />

          {/* Protected shell */}
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

          {/* Fallback */}
          <Route path="*" element={<Navigate to={role ? "/dashboard" : "/"} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
