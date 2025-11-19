import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "@layout/AppLayout.jsx";
import IncludeArchivedToggle from "@shared/ui/IncludeArchivedToggle.jsx";
import RequireRole from "./RequireRole.jsx";
import { ROLES } from "@lib/rbac/roles.js";

// Auth pages
import SignIn from "@features/auth/pages/SignIn.jsx";
import ForgotPassword from "@features/auth/pages/ForgotPassword.jsx";
import ResetPassword from "@features/auth/pages/ResetPassword.jsx";
import AcceptInvite from "@features/auth/pages/AcceptInvite.jsx";

// Feature panels/lists
import PropertiesList from "@features/properties/components/PropertiesList.jsx";
import TenantsList from "@features/tenants/components/TenantsList.jsx";
import OccupantList from "@features/tenants/components/OccupantList.jsx";
import PetList from "@features/tenants/components/PetList.jsx";
import EmergencyContactList from "@features/tenants/components/EmergencyContactList.jsx";
import MaintenanceTicketList from "@features/maintenance/components/MaintenanceTicketList.jsx";
import RoutineList from "@features/maintenance/components/RoutineList.jsx";
import ExpenseList from "@features/expenses/components/ExpenseList.jsx";
import TaxExportPreview from "@features/tax/components/TaxExportPreview.jsx";
import LeasesList from "@features/leases/components/LeasesList.jsx";
import LeaseStatusPanel from "@features/leases/components/LeaseStatusPanel.jsx";
import LeaseFinancialsPanel from "@features/leases/components/LeaseFinancialsPanel.jsx";
import FinancialsPanel from "@features/financials/components/FinancialsPanel.jsx";
import NoticeList from "@features/notices/components/NoticeList.jsx";
import LegalCaseList from "@features/legal/components/LegalCaseList.jsx";
import LegalCasePanel from "@features/legal/components/LegalCasePanel.jsx";
import CleaningTicketList from "@features/cleaning/components/CleaningTicketList.jsx";

import { useTenants } from "@features/tenants/hooks/useTenants.js";

// ---------- Simple stubs so the Admin area doesn't explode ----------
function Admin() {
  return <div style={{ padding: 16 }}><h2>Admin</h2><p>Select an admin page from the sidebar.</p></div>;
}
function AdminHome() {
  return <div style={{ padding: 16 }}><h3>Admin Home</h3></div>;
}
function Users() {
  return <div style={{ padding: 16 }}><h3>Users</h3></div>;
}
function InviteUser() {
  return <div style={{ padding: 16 }}><h3>Invite User</h3></div>;
}
function SystemLogs() {
  return <div style={{ padding: 16 }}><h3>System Logs</h3></div>;
}
// --------------------------------------------------------------------

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

function OccupantsDemoSection() {
  const { data: tenants, isLoading, error } = useTenants({
    includeArchived: false,
  });

  if (isLoading) {
    return (
      <section style={{ marginTop: 16 }}>
        <h3 style={{ margin: "0 0 6px" }}>Occupants</h3>
        <div>Loading occupants…</div>
      </section>
    );
  }

  if (error) {
    return (
      <section style={{ marginTop: 16 }}>
        <h3 style={{ margin: "0 0 6px" }}>Occupants</h3>
        <div style={{ color: "crimson" }}>
          Error loading occupants: {String(error.message || error)}
        </div>
      </section>
    );
  }

  if (!tenants.length) {
    return (
      <section style={{ marginTop: 16 }}>
        <h3 style={{ margin: "0 0 6px" }}>Occupants</h3>
        <div style={{ color: "#666" }}>
          Create a tenant first to attach occupants.
        </div>
      </section>
    );
  }

  const tenant = tenants[0];

  return (
    <section style={{ marginTop: 16 }}>
      <h3 style={{ margin: "0 0 6px" }}>
        Occupants (tenant {tenant.name || tenant.email || tenant.id})
      </h3>
      <OccupantList tenantId={tenant.id} />
    </section>
  );
}

function DashboardPage() {
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
          <IncludeArchivedToggle value={showTenantsArchived} onChange={setShowTenantsArchived} />
        </div>
        <TenantsList includeArchived={showTenantsArchived} />
      </section>

      <section style={{ marginTop: 16 }}>
        <PetList tenantId="t1" />
      </section>

      <OccupantsDemoSection />

      <section style={{ marginTop: 16 }}>
        <EmergencyContactList tenantId="t1" />
      </section>

      <section style={{ marginTop: 16 }}>
        <MaintenanceTicketList propertyId="prop-123" />
      </section>

      <section style={{ marginTop: 16 }}>
        <RoutineList propertyId="prop-123" />
      </section>

      <div style={{ marginTop: 16 }}>
        <CleaningTicketList propertyId="prop-123" />
      </div>

      <section style={{ marginTop: 16 }}>
        <ExpenseList propertyId="prop-123" />
      </section>

      <section style={{ marginTop: 16 }}>
        <TaxExportPreview propertyId="prop-123" defaultYear={2025} />
      </section>

      <section style={{ marginTop: 16 }}>
        <h3 style={{ margin: "0 0 6px" }}>Leases</h3>
        <div style={{ marginBottom: 8 }}>
          <IncludeArchivedToggle value={showLeasesArchived} onChange={setShowLeasesArchived} />
        </div>
        <LeasesList includeArchived={showLeasesArchived} />
      </section>

      <section style={{ marginTop: 16 }}>
        <LeaseStatusPanel leaseId="lease-123" />
      </section>

      <section style={{ marginTop: 16 }}>
        <LeaseFinancialsPanel leaseId="lease-123" />
      </section>

      <section style={{ marginTop: 16 }}>
        <FinancialsPanel leaseId="lease-123" />
      </section>

      <section style={{ marginTop: 16 }}>
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
        <LegalCasePanel leaseId="lease-123" caseId="lc1" />
      </section>
    </div>
  );
}

export function AppRoutes() {
  return (
    <AppLayout>
      <Routes>
        {/* Auth */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/accept-invite" element={<AcceptInvite />} />

        {/* Logged-in main screen */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Default + 404 */}
        <Route path="/" element={<Navigate to="/sign-in" replace />} />
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </AppLayout>
  );
}

