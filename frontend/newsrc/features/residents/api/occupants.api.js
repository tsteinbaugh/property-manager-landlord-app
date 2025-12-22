// newsrc/features/residents/api/occupants.api.js
import { apiFetch } from "@lib/apiClient.js";

function mapOccupantFromApi(o) {
  if (!o) return null;

  const archived = !!(o.archived ?? o.archivedAt);

  const tenants = Array.isArray(o.tenants)
    ? o.tenants.map((t) => ({
        id: t.id,
        name: t.name,
        archived: !!(t.archived ?? t.archivedAt),
      }))
    : [];

  return {
    id: o.id,
    name: o.name,
    phone: o.phone || "",
    email: o.email || "",
    relation: o.relation || "",
    age: o.age ?? null,
    heightFeet: o.heightFeet ?? null,
    heightInches: o.heightInches ?? null,
    weight: o.weight ?? null,
    sex: o.sex || "",
    hairColor: o.hairColor || "",
    eyeColor: o.eyeColor || "",
    bodyBuild: o.bodyBuild || "",
    markings: o.markings || "",
    notes: o.notes || "",
    violations: o.violations || "",
    archived,
    createdAt: o.createdAt || o.createdAtISO || null,
    updatedAt: o.updatedAt || o.updatedAtISO || null,
    tenants,
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
