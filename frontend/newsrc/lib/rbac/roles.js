// newsrc/lib/rbac/roles.js
import { RESOURCES as R, ACTIONS as A } from "./resources.js";

export const ROLES = {
  SYSADMIN: "system_admin",
  LANDLORD: "landlord",
  PROPERTY_MANAGER: "property_manager",
  MAINTENANCE_TECH: "maintenance_tech",
  TENANT: "tenant",
  CLEANER: "cleaner",
};

// small helpers
const all = (...acts) => new Set(acts);
const allow = (...pairs) => {
  const m = new Map();
  for (const [resource, actions] of pairs) m.set(resource, actions);
  return m;
};

// Grants derived from your current app + common-sense defaults.
// Note: “own data only” scoping for TENANT will be enforced in your hooks/APIs later.
export const ROLE_GRANTS = {
  [ROLES.SYSADMIN]: allow(
    [R.USERS,             all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE)],
    [R.TENANTS,             all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE)],
    [R.TENANT_PETS,         all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE)],
    [R.TENANT_OCCUPANTS,    all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE)],
    [R.TENANT_EMERGENCYCONTACTS,    all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE)],
    [R.LEASES,              all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE)],
    [R.LEASE_FINANCIALS,    all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE, A.EXPORT)],
    [R.LEGAL_CASES,         all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE, A.STATUS)],
    [R.NOTICES,             all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE, A.STATUS)],
    [R.MAINTENANCE_TICKETS, all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE)],
    [R.ROUTINE_MAINTENANCE, all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE)],
    [R.EXPENSES,            all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE, A.EXPORT)],
    [R.TAX_EXPORTS,         all(A.VIEW, A.EXPORT)],
    [R.PROPERTIES,          all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE, A.STATUS)],
    [R.USERS,               all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE)],
    [R.CLEANING_TICKETS,    all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE)],
    [R.BEINGS,              all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE)],
    [R.FINANCIALS,          all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE, A.EXPORT)],
    [R.NOTICES,             all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.DELETE, A.STATUS)],
  ),

  [ROLES.LANDLORD]: allow(
    [R.TENANTS,             all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE)],
    [R.TENANT_PETS,         all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE)],
    [R.TENANT_OCCUPANTS,    all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE)],
    [R.TENANT_EMERGENCYCONTACTS,    all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE)],
    [R.LEASES,              all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.STATUS)],
    [R.LEASE_FINANCIALS,    all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.EXPORT)],
    [R.LEGAL_CASES,         all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.STATUS)],
    [R.NOTICES,             all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.STATUS)],
    [R.MAINTENANCE_TICKETS, all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE)],
    [R.ROUTINE_MAINTENANCE, all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE)],
    [R.EXPENSES,            all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.EXPORT)],
    [R.TAX_EXPORTS,         all(A.VIEW, A.EXPORT)],
    [R.PROPERTIES,          all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.STATUS)],
    [R.CLEANING_TICKETS,    all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE)],
    [R.BEINGS,              all(A.VIEW)],
    [R.FINANCIALS,          all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.EXPORT)],
    [R.NOTICES,             all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.STATUS)],
  ),

  [ROLES.PROPERTY_MANAGER]: allow(
    [R.TENANTS,             all(A.VIEW)],
    [R.TENANT_PETS,         all(A.VIEW)],
    [R.TENANT_OCCUPANTS,    all(A.VIEW)],
    [R.TENANT_EMERGENCYCONTACTS,    all(A.VIEW)],
  
    [R.LEASES,              all(A.VIEW, A.UPDATE, A.STATUS)],         // manage terms/dates/status
    [R.NOTICES,             all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE, A.STATUS)],
    [R.LEASE_FINANCIALS,    all(A.VIEW, A.CREATE, A.UPDATE, A.EXPORT)], // run ledgers/receipts
    [R.LEGAL_CASES,         all(A.VIEW, A.UPDATE, A.STATUS)],         // progress cases (no delete)
    [R.MAINTENANCE_TICKETS, all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE)],
    [R.ROUTINE_MAINTENANCE, all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE)],
    [R.EXPENSES,            all(A.VIEW, A.CREATE, A.UPDATE, A.EXPORT)],
    [R.TAX_EXPORTS,         all(A.VIEW, A.EXPORT)],
    [R.PROPERTIES,          all(A.VIEW, A.UPDATE, A.STATUS)],         // no create/delete/archive
    [R.CLEANING_TICKETS,    all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE)],
    [R.BEINGS,              all(A.VIEW)],
    [R.FINANCIALS,          all(A.VIEW, A.CREATE, A.UPDATE, A.EXPORT)],
    [R.NOTICES,             all(A.VIEW, A.CREATE, A.UPDATE, A.STATUS)],

  ),
  
  [ROLES.MAINTENANCE_TECH]: allow(
    [R.MAINTENANCE_TICKETS, all(A.VIEW, A.CREATE, A.UPDATE)], // log/ack/complete work
    [R.ROUTINE_MAINTENANCE, all(A.VIEW, A.CREATE, A.UPDATE)],
    [R.PROPERTIES,          all(A.VIEW)],                      // read property details
    [R.CLEANING_TICKETS,    all(A.VIEW, A.CREATE, A.UPDATE)], // if they also handle turnovers
    [R.BEINGS,              all(A.VIEW)],
  ),

  [ROLES.TENANT]: allow(
    [R.TENANTS,             all(A.VIEW, A.UPDATE)],          // own record only (enforce in APIs)
    [R.TENANT_PETS,         all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE)], // own
    [R.TENANT_OCCUPANTS,    all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE)], // own
    [R.TENANT_EMERGENCYCONTACTS,    all(A.VIEW, A.CREATE, A.UPDATE, A.ARCHIVE)], // own
    [R.LEASES,              all(A.VIEW, A.EXPORT)],                     // own
    [R.LEASE_FINANCIALS,    all(A.VIEW, A.EXPORT)],                     // own
    [R.MAINTENANCE_TICKETS, all(A.VIEW, A.CREATE, A.UPDATE)], // own tickets
    [R.ROUTINE_MAINTENANCE, all(A.VIEW)],                     // read-only
    [R.BEINGS,              all(A.VIEW)],
    [R.NOTICES,             all(A.VIEW)],
  ),

  [ROLES.CLEANER]: allow(
    [R.PROPERTIES,          all(A.VIEW)],
    [R.CLEANING_TICKETS,    all(A.VIEW, A.CREATE, A.UPDATE)], // acknowledge/complete assigned work
    [R.BEINGS,              all(A.VIEW)],
  ),
};
