// newsrc/features/residents/api/occupants.api.js
import { apiFetch } from "@lib/apiClient.js";

function mapOccupantFromApi(o) {
  if (!o) return null;

  const archived = !!(o.archived ?? o.isArchived);

  return {
    id: o.id,
    name: o.name,
    relation: o.relation || "",
    tenantId: o.tenantId || null,
    archived,
    createdAt: o.createdAt || o.createdAtISO || null,
    updatedAt: o.updatedAt || o.updatedAtISO || null,
  };
}

export const occupantsApi = {
  async listAll({ includeArchived = false, token } = {}) {
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await apiFetch(`/api/occupants${qs}`, { token });
    if (!Array.isArray(rows)) return [];
    return rows.map(mapOccupantFromApi);
  },

  async list(opts) {
    return this.listAll(opts);
  },

  async get(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/occupants/${id}`, { token });
    return mapOccupantFromApi(row);
  },

  async create(payload, { token } = {}) {
    const row = await apiFetch("/api/occupants", {
      method: "POST",
      body: payload,
      token,
    });
    return mapOccupantFromApi(row);
  },

  async update(id, patch, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/occupants/${id}`, {
      method: "PATCH",
      body: patch,
      token,
    });
    return mapOccupantFromApi(row);
  },

  async toggleArchive(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/occupants/${id}/archive`, {
      method: "PATCH",
      token,
    });
    return mapOccupantFromApi(row);
  },
};
