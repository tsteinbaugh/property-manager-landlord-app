// newsrc/features/residents/api/vehicles.api.js
import { apiFetch } from "@lib/apiClient.js";

function mapVehicleFromApi(o) {
  if (!o) return null;

  const archived = !!(o.archived ?? o.isArchived);

  return {
    id: o.id,
    make: o.make || "",
    model: o.model || "",
    year: o.year || "",
    color: o.color || "",
    state: o.state || "",
    plate: o.plate || "",
    permit: o.permit || "",
    tenantId: o.tenantId || null,
    archived,
    createdAt: o.createdAt || o.createdAtISO || null,
    updatedAt: o.updatedAt || o.updatedAtISO || null,
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
