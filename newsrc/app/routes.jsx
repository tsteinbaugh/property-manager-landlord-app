import TenantsList from "@features/tenants/components/TenantsList.jsx";
import LeasesList from "@features/leases/components/LeasesList.jsx";
import LeaseFinancialsPanel from "@features/leases/components/LeaseFinancialsPanel.jsx";
import OccupantList from "@features/tenants/components/OccupantList.jsx";
import PetList from "@features/tenants/components/PetList.jsx";
import LegalCasePanel from "@features/legal/components/LegalCasePanel.jsx";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@layout/AppLayout.jsx";
import EmergencyContactList from "@features/tenants/components/EmergencyContactList.jsx";
import MaintenanceTicketList from "@features/maintenance/components/MaintenanceTicketList.jsx";
import RoutineList from "@features/maintenance/components/RoutineList.jsx";
import ExpenseList from "@features/expenses/components/ExpenseList.jsx";
import TaxExportPreview from "@features/tax/components/TaxExportPreview.jsx";
import LeaseStatusPanel from "@features/leases/components/LeaseStatusPanel.jsx";
import LegalCaseList from "@features/legal/components/LegalCaseList.jsx";
import IncludeArchivedToggle from "@shared/ui/IncludeArchivedToggle.jsx";
import PropertiesList from "@features/properties/components/PropertiesList.jsx";
import CleaningTicketList from "@features/cleaning/components/CleaningTicketList.jsx";
import FinancialsPanel from "@features/financials/components/FinancialsPanel.jsx";
import NoticeList from "@features/notices/components/NoticeList.jsx";
import SignIn from "../features/auth/pages/SignIn.jsx";
import ForgotPassword from "../features/auth/pages/ForgotPassword.jsx";
import ResetPassword from "../features/auth/pages/ResetPassword.jsx";
import AcceptInvite from "../features/auth/pages/AcceptInvite.jsx";

function HomePage() {
  const [showLeasesArchived, setShowLeasesArchived] = React.useState(true);
  const [showTenantsArchived, setShowTenantsArchived] = React.useState(true);
  const [showLegalArchived, setShowLegalArchived] = React.useState(true);

  return (
    <div>
      <h2 style={{ margin: "0 0 8px" }}>Home</h2>

      <section style={{ marginTop: 16 }}>
        <h3 style={{ margin: "0 0 6px" }}>Properties</h3>
        <PropertiesDemo />
      </section>

      <section style={{ marginTop: 16 }}>
        <h3 style={{ margin: "0 0 6px" }}>Tenants</h3>
        <div style={{ marginBottom: 8 }}>
          <IncludeArchivedToggle
            value={showTenantsArchived}
            onChange={setShowTenantsArchived}
          />
        </div>
        <TenantsList includeArchived={showTenantsArchived} />
      </section>

      <section style={{ marginTop: 16 }}>
        {/* Pets for tenant t1 */}
        <PetList tenantId="t1" />
      </section>

      <section style={{ marginTop: 16 }}>
        {/* Occupants for tenant t1 */}
        <OccupantList tenantId="t1" />
      </section>

      <section style={{ marginTop: 16 }}>
        {/* Emergency contacts demo (tenantId t1) */}
        <EmergencyContactList tenantId="t1" />
      </section>

      <section style={{ marginTop: 16 }}>
        {/* Maintenance tickets demo (propertyId prop-123) */}
        <MaintenanceTicketList propertyId="prop-123" />
      </section>

      <section style={{ marginTop: 16 }}>
        {/* Routine maintenance demo (propertyId prop-123) */}
        <RoutineList propertyId="prop-123" />
      </section>

      <div style={{ marginTop: 16 }}>
        {/* Cleaning tickets demo (propertyId prop-123) */}
        <CleaningTicketList propertyId="prop-123" />
      </div>

      <section style={{ marginTop: 16 }}>
        {/* Expenses demo (propertyId prop-123) */}
        <ExpenseList propertyId="prop-123" />
      </section>

      <section style={{ marginTop: 16 }}>
        {/* Tax exports demo (propertyId prop-123) */}
        <TaxExportPreview propertyId="prop-123" defaultYear={2025} />
      </section>

      <section style={{ marginTop: 16 }}>
        <h3 style={{ margin: "0 0 6px" }}>Leases</h3>
        <div style={{ marginBottom: 8 }}>
          <IncludeArchivedToggle
            value={showLeasesArchived}
            onChange={setShowLeasesArchived}
          />
        </div>
        <LeasesList includeArchived={showLeasesArchived} />
      </section>

      <section style={{ marginTop: 16 }}>
        {/* Lease lifecycle demo (lease-123) */}
        <LeaseStatusPanel leaseId="lease-123" />
      </section>

      <section style={{ marginTop: 16 }}>
        {/* Lease financials for lease-123 */}
        <LeaseFinancialsPanel leaseId="lease-123" />
      </section>

      <section style={{ marginTop: 16 }}>
        {/* Financials Panel for lease-123 */}
        <FinancialsPanel leaseId="lease-123" />
      </section>

      <section style={{ marginTop: 16 }}>
        {/* Notices for lease-123 */}
        <NoticeList leaseId="lease-123" />
      </section>

      <section style={{ marginTop: 16 }}>
        <h3 style={{ margin: "0 0 6px" }}>Legal Cases</h3>
        <div style={{ marginBottom: 8 }}>
          <IncludeArchivedToggle value={showLegalArchived} onChange={setShowLegalArchived} />
        </div>
        <LegalCaseList leaseId="lease-123" includeArchived={showLegalArchived} />
      </section>

      <section style={{ marginTop: 16 }}>
        {/* Legal case panel for lc1 */}
        <LegalCasePanel leaseId="lease-123" caseId="lc1" />
      </section>
    </div>
  );
}

function DashboardPage() {
  return <div>Dashboard page</div>;
}

function PropertiesDemo() {
  const [showArchived, setShowArchived] = React.useState(true);
  return (
    <>
      <div style={{ marginBottom: 8 }}>
        <IncludeArchivedToggle value={showArchived} onChange={setShowArchived} />
      </div>
      <PropertiesList includeArchived={showArchived} />
    </>
  );
}

export function AppRoutes() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Public auth pages */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/accept-invite" element={<AcceptInvite />} />
    
        {/* Example protected route */}
        {/* <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} /> */}
    
        <Route path="/" element={<Navigate to="/sign-in" replace />} />
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </AppLayout>
  );
}
