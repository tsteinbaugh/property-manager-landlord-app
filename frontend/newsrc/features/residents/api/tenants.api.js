// newsrc/features/tenants/api/tenants.api.js
import { petsApi } from "./pets.api.js";
import { occupantsApi } from "./occupants.api.js";
import { emergencyContactsApi } from "./emergencyContacts.api.js";

const BASE_URL = "http://localhost:4000";

async function http(method, path, body, token) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `HTTP ${res.status} ${res.statusText} from ${path}: ${
        text || "<no body>"
      }`
    );
  }

  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function mapTenantFromApi(t) {
  if (!t) return null;

  return {
    id: t.id,
    name: t.name,
    email: t.email || "",
    phone: t.phone || "",
    // Prefer `archived` if provided (shapeTenant), fall back to `isArchived`
    archived: !!(t.archived ?? t.isArchived),
    pets: [],
    occupants: [],
    emergencyContacts: [],
  };
}

export const tenantsApi = {
  // Simple list (uses /api/tenants)
  async list(options = {}) {
    const { token } = options;
    const rows = await http("GET", "/api/tenants", null, token);
    if (!Array.isArray(rows)) return [];
    return rows.map(mapTenantFromApi);
  },

  // Legacy get: resolve from list() so callers aren't broken
  async get(id, options = {}) {
    const rows = await this.list(options);
    return rows.find((t) => t.id === id) || null;
  },

  // NEW: full-detail tenant, including leases + property + household
  // Uses backend GET /api/tenants/:id (the new route we added)
  async detail(id, options = {}) {
    const { token } = options;
    if (!id) throw new Error("id is required");

    const t = await http("GET", `/api/tenants/${id}`, null, token);
    if (!t) return null;

    return {
      id: t.id,
      name: t.name,
      email: t.email || "",
      phone: t.phone || "",
      archived: !!(t.archived ?? t.isArchived),

      // All leases this tenant is/was on (from LeaseTenant join)
      // Each item has: { id, isPrimary, startDate, endDate, lease: { ... } }
      leaseTenants: Array.isArray(t.leaseTenants) ? t.leaseTenants : [],

      // Household info (non-archived, as returned by the backend)
      occupants: Array.isArray(t.occupants) ? t.occupants : [],
      pets: Array.isArray(t.pets) ? t.pets : [],
      emergencyContacts: Array.isArray(t.emergencyContacts)
        ? t.emergencyContacts
        : [],
      vehicles: Array.isArray(t.vehicles) ? t.vehicles : [],
    };
  },

  async create(payload, options = {}) {
    const { token } = options;
    const row = await http("POST", "/api/tenants", payload, token);
    return mapTenantFromApi(row);
  },

  async update(id, patch, options = {}) {
    const { token } = options;
    const row = await http("PATCH", `/api/tenants/${id}`, patch, token);
    return mapTenantFromApi(row);
  },

  async toggleArchive(id, options = {}) {
    const { token } = options;
    const t = await http(
      "PATCH",
      `/api/tenants/${id}/archive`,
      undefined,
      token
    );
    return mapTenantFromApi(t);
  },

  async remove(id) {
    console.warn("[tenantsApi.remove] not implemented against backend yet");
    return { ok: true };
  },
};
