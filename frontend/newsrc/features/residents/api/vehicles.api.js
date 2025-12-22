// newsrc/features/residents/api/vehicles.api.js
import { apiFetch } from "@lib/apiClient.js";

function mapVehicleFromApi(v) {
  if (!v) return null;

  const archived = !!(v.archived ?? v.archivedAt);

  const tenants = Array.isArray(v.tenants)
    ? v.tenants.map((t) => ({
        id: t.id,
        name: t.name,
        archived: !!(t.archived ?? t.archivedAt),
      }))
    : [];

  return {
    id: v.id,
    make: v.make || "",
    model: v.model || "",
    year: v.year ?? null,
    color: v.color || "",
    state: v.state ?? null,
    plate: v.plate || "",
    permit: v.permit || "",
    archived,
    createdAt: v.createdAt || v.createdAtISO || null,
    updatedAt: v.updatedAt || v.updatedAtISO || null,
    tenants,
  };
}

export const vehiclesApi = {
  async listAll({ includeArchived = false, token } = {}) {
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await apiFetch(`/api/vehicles${qs}`, { token });
    if (!Array.isArray(rows)) return [];
    return rows.map(mapVehicleFromApi);
  },

  async list(opts) {
    return this.listAll(opts);
  },

  async get(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/vehicles/${id}`, { token });
    return mapVehicleFromApi(row);
  },

  async create(payload, { token } = {}) {
    const row = await apiFetch("/api/vehicles", {
      method: "POST",
      body: payload,
      token,
    });
    return mapVehicleFromApi(row);
  },

  async update(id, patch, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/vehicles/${id}`, {
      method: "PATCH",
      body: patch,
      token,
    });
    return mapVehicleFromApi(row);
  },

  async toggleArchive(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/vehicles/${id}/archive`, {
      method: "PATCH",
      token,
    });
    return mapVehicleFromApi(row);
  },
};
