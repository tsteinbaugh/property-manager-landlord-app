// newsrc/lib/rbac/index.js
import { ROLE_GRANTS } from "./roles.js";

// can(role, resource, action?) → boolean
export function can(role, resource, action) {
  const resMap = ROLE_GRANTS[role];
  if (!resMap) return false;
  if (!action) return !!resMap.get(resource); // any access to that resource
  const actions = resMap.get(resource);
  return !!(actions && actions.has(action));
}

// Minimal conditional wrapper for the UI
export function IfCan({ role, resource, action, children, fallback = null }) {
  return can(role, resource, action) ? children : fallback;
}
