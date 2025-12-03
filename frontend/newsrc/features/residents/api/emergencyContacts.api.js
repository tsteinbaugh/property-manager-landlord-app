// newsrc/features/residents/api/emergencyContacts.api.js
import { apiFetch } from "@lib/apiClient.js";

function mapEmergencyContactFromApi(o) {
  if (!o) return null;

  const archived = !!(o.archived ?? o.isArchived);

  return {
    id: o.id,
    name: o.name,
    phone: o.phone || "",
    relation: o.relation || "",
    email: o.email || "",
    tenantId: o.tenantId || null,
    archived,
    createdAt: o.createdAt || o.createdAtISO || null,
    updatedAt: o.updatedAt || o.updatedAtISO || null,
  };
}

export const emergencyContactsApi = {
  async listAll({ includeArchived = false, token } = {}) {
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await apiFetch(`/api/emergencyContacts${qs}`, { token });
    if (!Array.isArray(rows)) return [];
    return rows.map(mapEmergencyContactFromApi);
  },

  async list(opts) {
    return this.listAll(opts);
  },

  async get(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/emergencyContacts/${id}`, { token });
    return mapEmergencyContactFromApi(row);
  },

  async create(payload, { token } = {}) {
    const row = await apiFetch("/api/emergencyContacts", {
      method: "POST",
      body: payload,
      token,
    });
    return mapEmergencyContactFromApi(row);
  },

  async update(id, patch, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/emergencyContacts/${id}`, {
      method: "PATCH",
      body: patch,
      token,
    });
    return mapEmergencyContactFromApi(row);
  },

  async toggleArchive(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/emergencyContacts/${id}/archive`, {
      method: "PATCH",
      token,
    });
    return mapEmergencyContactFromApi(row);
  },
};
