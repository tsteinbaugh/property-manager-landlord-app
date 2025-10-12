import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import PropertyDetail from "./pages/PropertyDetail";
import PropertyFinancials from "./pages/PropertyFinancials";
import AppLayout from "./components/layout/AppLayout";
import { UserProvider } from "./context/UserContext";
import { PropertyProvider } from "./context/PropertyContext";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./App.css"; // ⬅️ removed stray 'a'

function App() {
  const [role, setRole] = useState(null);

  return (
    <UserProvider>
      <PropertyProvider>
        <Router>
          {/* This is your scrollable container */}
          <div id="scroll-root" className="app-scroll">
            {/* Reset scroll on every route change */}
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<SignIn setRole={setRole} />} />

              {/* Everything below here gets the header + breadcrumbs */}
              <Route element={role ? <AppLayout /> : <Navigate to="/" replace />}>
                <Route path="/dashboard" element={<Dashboard role={role} setRole={setRole} />} />
                <Route path="/property/:id" element={<PropertyDetail role={role} setRole={setRole} />} />
                <Route path="/property/:id/financials" element={<PropertyFinancials />} />
                <Route path="/properties/:id/financials" element={<PropertyFinancials />} />
              </Route>
              <Route path="*" element={<Navigate to={role ? "/dashboard" : "/"} replace />} />
            </Routes>
          </div>
        </Router>
      </PropertyProvider>
    </UserProvider>
  );
}

export default App;
