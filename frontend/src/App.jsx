import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import PropertyDetail from "./pages/PropertyDetail";
import PropertyFinancials from "./pages/PropertyFinancials";
import AppLayout from "./components/layout/AppLayout";
import { UserProvider } from "./context/UserContext";
import { PropertyProvider } from "./context/PropertyContext";
import "./App.css";

function App() {
  const [role, setRole] = useState(null);

  return (
    <UserProvider>
      <PropertyProvider>
        <Router>
          <div className="app-scroll">
            <Routes>
              <Route path="/" element={<SignIn setRole={setRole} />} />

              {/* Everything below here gets the header + breadcrumbs */}
              <Route element={role ? <AppLayout /> : <Navigate to="/" replace />}>
                <Route path="/dashboard" element={<Dashboard role={role} setRole={setRole} />} />
                {/* support both routes you currently use */}
                <Route path="/property/:id" element={<PropertyDetail role={role} setRole={setRole} />} />
                <Route path="/properties/:id/financials" element={<PropertyFinancials />} />
              </Route>

              {/* Optional catch-all */}
              <Route path="*" element={<Navigate to={role ? "/dashboard" : "/"} replace />} />
            </Routes>
          </div>
        </Router>
      </PropertyProvider>
    </UserProvider>
  );
}

export default App;
