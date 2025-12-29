// newsrc/lib/rbac/resources.js
// Keep resource keys aligned with your existing folders/components.

export const RESOURCES = {
  TENANTS: "tenants",                             // features/tenants
  PETS: "pets",                                   // features/tenants (pets)
  OCCUPANTS: "occupants",                         // features/tenants (occupants)
  EMERGENCYCONTACTS: "emergency_contacts",        // features/tenants (emergencyContacts)
  VEHICLES: "vehicles",                           // features/tenants (occupants)
  LEASES: "leases",                               // features/leases
  LEASE_FINANCIALS: "lease_financials",           // features/leases (financials)
  LEGAL_CASES: "legal_cases",                     // features/legal
  NOTICES: "notices",
  MAINTENANCE_TICKETS: "maintenance_tickets",     // features/maintenance (TicketList)
  ROUTINE_MAINTENANCE: "routine_maintenance",     // features/maintenance (RoutineList)
  EXPENSES: "expenses",                           // features/expenses
  TAX_EXPORTS: "tax_exports",                     // features/tax
  PROPERTIES: "properties",                       // features/properties
  USERS: "users",                                 // (system/user management) - future
  CLEANING_TICKETS: "cleaning_tickets",           // cleaners module
  BEINGS: "beings",
  FINANCIALS: "financials",
};

// Actions are generic; scope (e.g., “own record only”) will be enforced in your APIs/hooks later.
export const ACTIONS = {
  VIEW: "view",
  CREATE: "create",
  UPDATE: "update",
  ARCHIVE: "archive",
  DELETE: "delete",
  STATUS: "status",   // e.g., Lease lifecycle, Legal case status
  EXPORT: "export",   // e.g., Tax/CSV exports
};

