// newsrc/features/tenants/api/tenants.api.js
import { petsApi } from "./pets.api.js";
import { occupantsApi } from "./occupants.api.js";
import { emergencyContactsApi } from "./emergencyContacts.api.js";

const BASE_URL = "http://localhost:4000";

async function http(method, path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `HTTP ${res.status} ${res.statusText} from ${path}: ${text || "<no body>"}`
    );
  }

  // try to parse JSON, but tolerate empty responses
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function mapTenantFromApi(t) {
  // Shape to match what the rest of the frontend expects:
  // id, name, archived, plus placeholder arrays so lists don’t explode.
  return {
    id: t.id,
    name: t.name,
    email: t.email || "",
    phone: t.phone || "",
    archived: !!t.archived,
    pets: [], // pets/occupants/contacts are managed via their own APIs
    occupants: [],
    emergencyContacts: [],
  };
}

export const tenantsApi = {
  async list() {
    const rows = await http("GET", "/api/tenants");
    if (!Array.isArray(rows)) return [];
    return rows.map(mapTenantFromApi);
  },

  async get(id) {
    // For now just list + find; we can add a dedicated endpoint later if needed.
    const rows = await this.list();
    return rows.find((t) => t.id === id) || null;
  },

  async create(payload) {
    // Placeholder for later — we’ll add a POST /api/tenants when we wire up a “create tenant” flow.
    console.warn("[tenantsApi.create] not implemented against backend yet");
    // Make a fake record so any existing demo code doesn’t explode:
    const rec = {
      id: payload?.id || String(Math.random()).slice(2),
      name: payload?.name || "",
      email: payload?.email || "",
      phone: payload?.phone || "",
      archived: false,
      pets: [],
      occupants: [],
      emergencyContacts: [],
    };
    return rec;
  },

  async update(id, patch) {
    console.warn("[tenantsApi.update] not implemented against backend yet");
    // Fallback: just return the patch merged with id so callers don’t crash
    return { id, ...patch };
  },

  async toggleArchive(id) {
    // Hit backend to flip isArchived
    const t = await http("PATCH", `/api/tenants/${id}/archive`);
    const archived = !!t.archived;

    // Keep the existing cascade behavior to demo “archive everything for this tenant”
    await petsApi.setArchivedByTenant(id, archived);
    await occupantsApi.setArchivedByTenant(id, archived);
    await emergencyContactsApi.setArchivedByTenant(id, archived);

    return mapTenantFromApi(t);
  },

  async remove(id) {
    console.warn("[tenantsApi.remove] not implemented against backend yet");
    return { ok: true };
  },
};
