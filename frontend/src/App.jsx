import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import AppLayout from "./components/AppLayout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import EntitiesPage from "./pages/EntitiesPage";
import EntityDetailPage from "./pages/EntityDetailPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import PropertySpecsPage from "./pages/PropertySpecsPage";
import TenantDetailPage from "./pages/TenantDetailPage";
import LeaseDetailPage from "./pages/LeaseDetailPage";
import VendorDetailPage from "./pages/VendorDetailPage";
import TenantsPage from "./pages/TenantsPage";
import LeasesPage from "./pages/LeasesPage";
import FinancesPage from "./pages/FinancesPage";
import PropertyLedgerPage from "./pages/PropertyLedgerPage";
import MaintenancePage from "./pages/MaintenancePage";
import ClauseLibraryPage from "./pages/ClauseLibraryPage";

export default function App() {
  return (
    <Routes>
      <Route path="/sign-in/*" element={<SignInPage />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />

      <Route
        path="/"
        element={
          <RequireAuth>
            <AppLayout />
          </RequireAuth>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="entities" element={<EntitiesPage />} />
        <Route path="entities/:id" element={<EntityDetailPage />} />
        <Route path="properties" element={<PropertiesPage />} />
        <Route path="properties/:id" element={<PropertyDetailPage />} />
        <Route path="properties/:id/specs" element={<PropertySpecsPage />} />
        <Route path="tenants" element={<TenantsPage />} />
        <Route path="tenants/:id" element={<TenantDetailPage />} />
        <Route path="leases" element={<LeasesPage />} />
        <Route path="leases/:id" element={<LeaseDetailPage />} />
        <Route path="clauses" element={<ClauseLibraryPage />} />
        <Route path="finances" element={<FinancesPage />} />
        <Route path="finances/:id" element={<PropertyLedgerPage />} />
        <Route path="maintenance" element={<MaintenancePage />} />
        <Route path="vendors/:id" element={<VendorDetailPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
