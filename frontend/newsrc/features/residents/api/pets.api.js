// newsrc/features/residents/api/pets.api.js
import { apiFetch } from "@lib/apiClient.js";

function mapPetFromApi(p) {
  if (!p) return null;

  const archived = !!(p.archived ?? p.isArchived);

  return {
    id: p.id,
    name: p.name,
    type: p.type,
    breed: p.breed,
    weightLb: p.weightLb,
    tenantId: p.tenantId || null,
    archived,
    createdAt: p.createdAt || p.createdAtISO || null,
    updatedAt: p.updatedAt || p.updatedAtISO || null,
  };
}

export const petsApi = {
  async listAll({ includeArchived = false, token } = {}) {
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await apiFetch(`/api/pets${qs}`, { token });
    if (!Array.isArray(rows)) return [];
    return rows.map(mapPetFromApi);
  },

  async list(opts) {
    return this.listAll(opts);
  },

  async get(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/pets/${id}`, { token });
    return mapPetFromApi(row);
  },

  async create(payload, { token } = {}) {
    const row = await apiFetch("/api/pets", {
      method: "POST",
      body: payload,
      token,
    });
    return mapPetFromApi(row);
  },

  async update(id, patch, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/pets/${id}`, {
      method: "PATCH",
      body: patch,
      token,
    });
    return mapPetFromApi(row);
  },

  async toggleArchive(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/pets/${id}/archive`, {
      method: "PATCH",
      token,
    });
    return mapPetFromApi(row);
  },
};
