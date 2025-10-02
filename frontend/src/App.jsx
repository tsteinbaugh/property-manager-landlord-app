// property-manager-landlord-app/frontend/src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import PropertyDetail from "./pages/PropertyDetail";
import PropertyFinancials from "./pages/PropertyFinancials";
import "./App.css";

function App() {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <div className="app-scroll">
        <Routes>
          <Route path="/" element={<SignIn setRole={setRole} />} />

          <Route
            path="/dashboard"
            element={role ? <Dashboard role={role} setRole={setRole} /> : <Navigate to="/" replace />}
          />

          <Route
            path="/property/:id"
            element={role ? <PropertyDetail role={role} setRole={setRole} /> : <Navigate to="/" replace />}
          />

          <Route
            path="/properties/:id/financials"
            element={role ? <PropertyFinancials /> : <Navigate to="/" replace />}
          />

          {/* Optional: catch-all */}
          <Route path="*" element={<Navigate to={role ? "/dashboard" : "/"} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
