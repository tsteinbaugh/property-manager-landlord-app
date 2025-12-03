// newsrc/features/residents/api/tenants.api.js
import { apiFetch } from "@lib/apiClient.js";

function mapTenantFromApi(t) {
  if (!t) return null;

  return {
    id: t.id,
    name: t.name,
    email: t.email || "",
    phone: t.phone || "",
    archived: !!(t.archived ?? t.isArchived),
    pets: Array.isArray(t.pets) ? t.pets : [],
    occupants: Array.isArray(t.occupants) ? t.occupants : [],
    emergencyContacts: Array.isArray(t.emergencyContacts)
      ? t.emergencyContacts
      : [],
    vehicles: Array.isArray(t.vehicles) ? t.vehicles : [],
    leaseTenants: Array.isArray(t.leaseTenants) ? t.leaseTenants : [],
  };
}

export const tenantsApi = {
  // Simple list (GET /api/tenants)
  async list(options = {}) {
    const { token } = options;
    const rows = await apiFetch("/api/tenants", { token });
    if (!Array.isArray(rows)) return [];
    return rows.map(mapTenantFromApi);
  },

  // Detail (GET /api/tenants/:id)
  async detail(id, options = {}) {
    if (!id) throw new Error("id is required");
    const { token } = options;
    const t = await apiFetch(`/api/tenants/${id}`, { token });
    if (!t) return null;
    return mapTenantFromApi(t);
  },

  // Legacy get: resolve from list() so callers aren't broken
  async get(id, options = {}) {
    const rows = await this.list(options);
    return rows.find((t) => t.id === id) || null;
  },

  async create(payload, options = {}) {
    const { token } = options;
    const row = await apiFetch("/api/tenants", {
      method: "POST",
      body: payload,
      token,
    });
    return mapTenantFromApi(row);
  },

  async update(id, patch, options = {}) {
    if (!id) throw new Error("id is required");
    const { token } = options;
    const row = await apiFetch(`/api/tenants/${id}`, {
      method: "PATCH",
      body: patch,
      token,
    });
    return mapTenantFromApi(row);
  },

  async toggleArchive(id, options = {}) {
    if (!id) throw new Error("id is required");
    const { token } = options;
    const row = await apiFetch(`/api/tenants/${id}/archive`, {
      method: "PATCH",
      token,
    });
    return mapTenantFromApi(row);
  },

  async remove(id, options = {}) {
    if (!id) throw new Error("id is required");
    const { token } = options;
    await apiFetch(`/api/tenants/${id}`, {
      method: "DELETE",
      token,
    });
    return { ok: true };
  },
};
