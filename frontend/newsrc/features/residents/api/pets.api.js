// newsrc/features/residents/api/pets.api.js
import { apiFetch } from "@lib/apiClient.js";

function mapPetFromApi(p) {
  if (!p) return null;

  const archived = !!(p.archived ?? p.archivedAt);

  const tenants = Array.isArray(p.tenants)
    ? p.tenants.map((t) => ({
        id: t.id,
        name: t.name,
        archived: !!(t.archived ?? t.archivedAt),
      }))
    : [];

  return {
    id: p.id,
    name: p.name,
    breed: p.breed || "",
    type: p.type || "",
    weight: p.weight ?? null,
    age: p.age ?? null,
    license: p.license || "",
    notes: p.notes || "",
    archived,
    createdAt: p.createdAt || p.createdAtISO || null,
    updatedAt: p.updatedAt || p.updatedAtISO || null,
    tenants,
  };
}

export const petsApi = {
  async listAll({ includeArchived = false, token } = {}) {
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await apiFetch(`/api/pets${qs}`, { token });
    if (!Array.isArray(rows)) return [];
    return rows.map(mapPetFromApi);
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

  async toggleArchive(id, { token, archiveReason } = {}) {
    if (!id) throw new Error("id is required");

    const body =
      archiveReason === undefined
        ? undefined
        : { archiveReason }; // can be string or null depending on your backend rules

    const row = await apiFetch(`/api/pets/${id}/archive`, {
      method: "PATCH",
      body,
      token,
    });
    
    return mapPetFromApi(row);
  },
};
