// newsrc/features/properties/api/properties.api.js
import { apiFetch } from "@lib/apiClient.js";

function mapPropertyFromApi(p) {
  if (!p) return null;

  const archived = !!p.archivedAt;

  const address1 = p.address1 || "";
  const city = p.city || "";
  const state = p.state || "";
  const postalCode = p.postalCode || "";

  const address =
    p.address || [address1, city, state, postalCode].filter(Boolean).join(", ");

  return {
    id: p.id,
    name: p.name || "",

    address1,
    city,
    state,
    postalCode,
    address,

    bedrooms: p.bedrooms ?? null,
    bathrooms: p.bathrooms ?? null,
    sqft: p.sqft ?? null,
    yearBuilt: p.yearBuilt ?? null,
    notes: p.notes || "",

    archived,
    archivedAt: p.archivedAt,
    createdAt: p.createdAt || p.createdAtISO || null,
    updatedAt: p.updatedAt || p.updatedAtISO || null,

    status: p.status || "",
    leases: Array.isArray(p.leases) ? p.leases : [],
    tenants: Array.isArray(p.tenants) ? p.tenants : [],
    occupants: Array.isArray(p.occupants) ? p.occupants : [],
    pets: Array.isArray(p.pets) ? p.pets : [],
    emergencyContacts: Array.isArray(p.emergencyContacts)
      ? p.emergencyContacts
      : [],
    vehicles: Array.isArray(p.vehicles) ? p.vehicles : [],
  };
}

export const propertiesApi = {
  async detail(id, options = {}) {
    return this.get(id, options);
  },

  async list(options = {}) {
    const { token } = options;
    const rows = await apiFetch("/api/properties", { token });
    if (!Array.isArray(rows)) return [];
    return rows.map(mapPropertyFromApi);
  },

  async get(id, options = {}) {
    const { token } = options;
    if (!id) throw new Error("id is required");
    const p = await apiFetch(`/api/properties/${id}`, { token });
    return mapPropertyFromApi(p);
  },

  async add(payload, options = {}) {
    const { token } = options;
    const created = await apiFetch("/api/properties", {
      method: "POST",
      body: payload,
      token,
    });
    return mapPropertyFromApi(created);
  },

  async update(id, patch, options = {}) {
    const { token } = options;
    if (!id) throw new Error("id is required");
    const updated = await apiFetch(`/api/properties/${id}`, {
      method: "PATCH",
      body: patch,
      token,
    });
    return mapPropertyFromApi(updated);
  },

  async setStatus(id, status) {
    console.warn("[propertiesApi.setStatus] not implemented against backend yet");
    return { id, status };
  },

  async toggleArchive(id, options = {}) {
    const { token } = options;
    if (!id) throw new Error("id is required");

    const updated = await apiFetch(`/api/properties/${id}/archive`, {
      method: "PATCH",
      token,
    });

    const mapped = mapPropertyFromApi(updated);

    // Cascade to leases so they archive/unarchive with the property
    try {
      const { leasesApi } = await import("../../leases/api/leases.api.js");
      const leases = await leasesApi.list({ token });
      const byProperty = leases.filter((l) => l.propertyId === id);

      for (const l of byProperty) {
        const shouldBeArchived = mapped.archived;
        const isArchived = !!l.archivedAt;
        if (shouldBeArchived !== isArchived) {
          await leasesApi.toggleArchive(l.id, { token });
        }
      }
    } catch (err) {
      console.warn("Property cascade → leases skipped:", err);
    }

    return mapped;
  },

  async remove(id) {
    console.warn("[propertiesApi.remove] not implemented against backend yet");
    return { ok: true };
  },
};
