// newsrc/features/residents/api/emergencyContacts.api.js
import { apiFetch } from "@lib/apiClient.js";

function mapEmergencyContactFromApi(e) {
  if (!e) return null;

  const archived = !!(e.archived ?? e.archivedAt);

  const tenants = Array.isArray(e.tenants)
    ? e.tenants.map((t) => ({
        id: t.id,
        name: t.name,
        archived: !!(t.archived ?? t.archivedAt),
      }))
    : [];

  return {
    id: e.id,
    name: e.name,
    phone: e.phone,
    email: e.email,
    address1: e.address1 || "",
    city: e.city  || "",
    state: e.state || "",
    postalCode: e.postalCode || "",
    relation: e.relation || "",
    notes: e.notes || "",
    archived,
    createdAt: e.createdAt || e.createdAtISO || null,
    updatedAt: e.updatedAt || e.updatedAtISO || null,
    tenants,
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
