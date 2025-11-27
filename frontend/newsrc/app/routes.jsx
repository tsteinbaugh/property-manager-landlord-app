// newsrc/app/routes.jsx
import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";

import AppLayout from "@layout/AppLayout.jsx";
import IncludeArchivedToggle from "@shared/ui/IncludeArchivedToggle.jsx";
import RequireRole from "./RequireRole.jsx";
import { ROLES } from "@lib/rbac/roles.js";
import { useUser } from "@app/providers.jsx";

// Auth pages
import SignIn from "@features/auth/pages/SignIn.jsx";
import ForgotPassword from "@features/auth/pages/ForgotPassword.jsx";
import ResetPassword from "@features/auth/pages/ResetPassword.jsx";
import AcceptInvite from "@features/auth/pages/AcceptInvite.jsx";

// Feature panels/lists (used on the sysadmin FeaturesPage)
import PropertiesList from "@features/properties/components/PropertiesList.jsx";
import TenantsList from "@features/residents/components/tenants/TenantsList.jsx";
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

// Landlord flows
////Properties
import LandlordPropertiesPage from "@features/properties/pages/LandlordPropertiesPage.jsx";
import LandlordAddPropertyPage from "@features/properties/pages/LandlordAddPropertyPage.jsx";
import LandlordPropertyDetailPage from "@features/properties/pages/LandlordPropertyDetailPage.jsx";

////Residents
//////Tenants
import LandlordResidentsPage from "@features/residents/pages/LandlordResidentsPage.jsx";
import LandlordTenantsPage from "@features/residents/pages/tenants/LandlordTenantsPage.jsx";
import LandlordAddTenantPage from "@features/residents/pages/tenants/LandlordAddTenantPage.jsx";
import LandlordTenantDetailPage from "@features/residents/pages/tenants/LandlordTenantDetailPage.jsx";
//////Occupants
import LandlordOccupantsPage from "@features/residents/pages/occupants/LandlordOccupantsPage.jsx";
import LandlordAddOccupantPage from "@features/residents/pages/occupants/LandlordAddOccupantPage.jsx";
import LandlordOccupantDetailPage from "@features/residents/pages/occupants/LandlordOccupantDetailPage.jsx";
//////Pets
import LandlordPetsPage from "@features/residents/pages/pets/LandlordPetsPage.jsx";
import LandlordAddPetPage from "@features/residents/pages/pets/LandlordAddPetPage.jsx";
import LandlordPetDetailPage from "@features/residents/pages/pets/LandlordPetDetailPage.jsx";
//////Emergency Contacts
import LandlordEmergencyContactsPage from "@features/residents/pages/emergencyContacts/LandlordEmergencyContactsPage.jsx";
import LandlordAddEmergencyContactPage from "@features/residents/pages/emergencyContacts/LandlordAddEmergencyContactPage.jsx";
import LandlordEmergencyContactDetailPage from "@features/residents/pages/emergencyContacts/LandlordEmergencyContactDetailPage.jsx";

// Tenant flows
import TenantHomePage from "@features/residents/pages/tenants/TenantHomePage.jsx";

// Admin pages
import AdminLayout from "@features/admin/pages/AdminLayout.jsx";
import AdminHome from "@features/admin/pages/AdminHome.jsx";
import Users from "@features/admin/pages/Users.jsx";
import InviteUser from "@features/admin/pages/InviteUser.jsx";
import SystemLogs from "@features/admin/pages/SystemLogs.jsx";

/* ------------------------------------------------------------------ */
/* Role-based landing router                                          */
/* ------------------------------------------------------------------ */

function RoleLandingRouter() {
  const { user, effectiveRole, isSysAdmin } = useUser();

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  const rawRole = effectiveRole || user.baseRole || user.role;
  const role = rawRole ? String(rawRole).toLowerCase() : null;

  if (isSysAdmin || role === ROLES.SYSADMIN) {
    return <Navigate to="/admin/features-page" replace />;
  }

  switch (role) {
    case ROLES.LANDLORD:
      return <Navigate to="/landlord/residents" replace />;

    case ROLES.TENANT:
      return <Navigate to="/tenant/home" replace />;

    case ROLES.PROPERTY_MANAGER:
      // TODO: real manager landing later
      return <Navigate to="/landlord/properties" replace />;

    case ROLES.MAINTENANCE_TECH:
      // TODO: /tech/tickets later
      return <Navigate to="/tenant/home" replace />;

    case ROLES.CLEANER:
      // TODO: /clean/tickets later
      return <Navigate to="/tenant/home" replace />;

    default:
      console.warn("RoleLandingRouter: unknown role", { rawRole, role });
      return <Navigate to="/sign-in" replace />;
  }
}

/* ------------------------------------------------------------------ */
/* Small helper for sysadmin FeaturesPage                             */
/* ------------------------------------------------------------------ */

function Properties() {
  const [showArchived, setShowArchived] = React.useState(true);

  return (
    <>
      <div style={{ marginBottom: 8 }}>
        <IncludeArchivedToggle
          value={showArchived}
          onChange={setShowArchived}
        />
      </div>
      <PropertiesList includeArchived={showArchived} />
    </>
  );
}

function LandlordPropertyDetailsRoute() {
  const { id } = useParams();
  return <LandlordPropertyDetailPage propertyId={id} />;
}

function FeaturesPage() {
  const [showLeasesArchived, setShowLeasesArchived] = React.useState(true);
  const [showTenantsArchived, setShowTenantsArchived] = React.useState(true);
  const [showLegalArchived, setShowLegalArchived] = React.useState(true);

  return (
    <div>
      <h2 style={{ margin: "0 0 8px" }}>Home</h2>

      <section style={{ marginTop: 16 }}>
        <h3 style={{ margin: "0 0 6px" }}>Properties</h3>
        <Properties />
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

      <AddTenantDependentsForm />

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
          <IncludeArchivedToggle
            value={showLeasesArchived}
            onChange={setShowLeasesArchived}
          />
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
          <IncludeArchivedToggle
            value={showLegalArchived}
            onChange={setShowLegalArchived}
          />
        </div>
        <LegalCaseList
          leaseId="lease-123"
          includeArchived={showLegalArchived}
        />
      </section>

      <section style={{ marginTop: 16 }}>
        <LegalCasePanel leaseId="lease-123" caseId="lc1" />
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main app routes                                                    */
/* ------------------------------------------------------------------ */

export function AppRoutes() {
  return (
    <AppLayout>
      <Routes>
        {/* Auth */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/accept-invite" element={<AcceptInvite />} />

        {/* Admin (SYSADMIN only) */}
        <Route
          path="/admin"
          element={
            <RequireRole allow={[ROLES.SYSADMIN]}>
              <AdminLayout />
            </RequireRole>
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="users" element={<Users />} />
          <Route path="invite" element={<InviteUser />} />
          <Route path="logs" element={<SystemLogs />} />
        </Route>

        {/* Logged-in landing router */}
        <Route
          path="/dashboard"
          element={
            <RequireRole>
              <RoleLandingRouter />
            </RequireRole>
          }
        />

        {/* SYSADMIN main screen */}
        <Route
          path="/admin/features-page"
          element={
            <RequireRole allow={[ROLES.SYSADMIN]}>
              <FeaturesPage />
            </RequireRole>
          }
        />

        {/* -------- LANDLORD FLOWS -------- */}

        {/* Create property */}
        <Route
          path="/landlord/properties/new"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordAddPropertyPage />
            </RequireRole>
          }
        />

        {/* Properties main */}
        <Route
          path="/landlord/properties"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordPropertiesPage />
            </RequireRole>
          }
        />

        {/* Property detail */}
        <Route
          path="/landlord/properties/:id"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordPropertyDetailsRoute />
            </RequireRole>
          }
        />

        {/* Residents--> tenant main */}
        <Route
          path="/landlord/residents"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordResidentsPage />
            </RequireRole>
          }
        />

        {/* Add tenant */}
        <Route
          path="/landlord/tenants/new"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordAddTenantPage />
            </RequireRole>
          }
        />

        {/* Tenant detail */}
        <Route
          path="/landlord/tenants/:tenantId"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordTenantDetailPage />
            </RequireRole>
          }
        />

        {/* Residents --> occupant main */}
        <Route
          path="/landlord/occupants"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordOccupantsPage />
            </RequireRole>
          }
        />

        {/* Add occupant */}
        <Route
          path="/landlord/occupants/new"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordAddOccupantPage />
            </RequireRole>
          }
        />

        {/* Occupant detail */}
        <Route
          path="/landlord/occupants/:occupantId"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordOccupantDetailPage />
            </RequireRole>
          }
        />

        {/* Residents --> pet main */}
        <Route
          path="/landlord/pets"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordPetsPage />
            </RequireRole>
          }
        />

        {/* Add pet */}
        <Route
          path="/landlord/pets/new"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordAddPetPage />
            </RequireRole>
          }
        />

        {/* Pet detail */}
        <Route
          path="/landlord/pets/:petId"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordPetDetailPage />
            </RequireRole>
          }
        />

        {/* Residents --> emergency contact main */}
        <Route
          path="/landlord/emergencyContacts"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordEmergencyContactsPage />
            </RequireRole>
          }
        />

        {/* Add emergency contact */}
        <Route
          path="/landlord/emergencyContacts/new"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordAddEmergencyContactPage />
            </RequireRole>
          }
        />

        {/* Emergency contact detail */}
        <Route
          path="/landlord/emergencyContacts/:emergencyContactId"
          element={
            <RequireRole allow={[ROLES.LANDLORD]}>
              <LandlordEmergencyContactDetailPage />
            </RequireRole>
          }
        />

        {/* -------- TENANT FLOWS -------- */}

        <Route
          path="/tenant/home"
          element={
            <RequireRole allow={[ROLES.TENANT]}>
              <TenantHomePage />
            </RequireRole>
          }
        />

        {/* Default + 404 */}
        <Route path="/" element={<Navigate to="/sign-in" replace />} />
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </AppLayout>
  );
}
