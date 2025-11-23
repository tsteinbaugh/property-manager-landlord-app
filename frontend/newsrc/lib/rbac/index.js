// newsrc/lib/rbac/index.js
import { ROLES, ROLE_GRANTS } from "./roles.js";

/**
 * Normalize incoming role strings / values to one of the canonical
 * ROLES.* values used as keys in ROLE_GRANTS.
 */
function normalizeRole(inputRole) {
  if (!inputRole) return null;

  const raw = String(inputRole).trim();

  // If it's already an exact key in ROLE_GRANTS, we're done
  if (ROLE_GRANTS[raw]) return raw;

  const lower = raw.toLowerCase();

  // Common variants → canonical roles
  if (lower === "landlord") return ROLES.LANDLORD;
  if (lower === "tenant") return ROLES.TENANT;
  if (lower === "property_manager") return ROLES.PROPERTY_MANAGER;
  if (lower === "maintenance_tech") return ROLES.MAINTENANCE_TECH;
  if (lower === "cleaner") return ROLES.CLEANER;

  // System admin variants
  if (
    lower === "system_admin" ||
    lower === "sysadmin" ||
    lower === "admin"
  ) {
    return ROLES.SYSADMIN;
  }

  // As a fallback, match against any ROLES value case-insensitively
  for (const value of Object.values(ROLES)) {
    if (value.toLowerCase() === lower) return value;
  }

  return null;
}

// can(role, resource, action?) → boolean
export function can(role, resource, action) {
  const normalizedRole = normalizeRole(role);
  if (!normalizedRole) return false;

  const resMap = ROLE_GRANTS[normalizedRole];
  if (!resMap) return false;

  if (!action) {
    // any access to that resource
    return !!resMap.get(resource);
  }

  const actions = resMap.get(resource);
  return !!(actions && actions.has(action));
}

// Minimal conditional wrapper for the UI
export function IfCan({ role, resource, action, children, fallback = null }) {
  return can(role, resource, action) ? children : fallback;
}
