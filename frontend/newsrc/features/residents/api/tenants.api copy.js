// newsrc/features/residents/api/tenants.api.js
import { apiFetch } from "@lib/apiClient.js";

function mapTenantFromApi(t) {
  if (!t) return null;

  // ONLY use real join-table links. If there are none, there are no links.
  const occupantLinks = Array.isArray(t.occupantLinks)
    ? t.occupantLinks.map((link) => ({
        id: link.id,
        occupantId: link.occupantId,
        occupant: link.occupant
          ? {
              id: link.occupant.id,
              name: link.occupant.name,
              relation: link.occupant.relation || "",
              archived: !!(link.occupant.isArchived ?? link.occupant.archived),
            }
          : null,
      }))
    : [];

    const petLinks = Array.isArray(t.petLinks)
    ? t.petLinks.map((link) => ({
        id: link.id,
        petId: link.petId,
        pet: link.pet
          ? {
              id: link.pet.id,
              name: link.pet.name,
              type: link.pet.type,
              breed: link.pet.breed,
              weightLb: link.pet.weightLb,
              archived: !!(link.pet.isArchived ?? link.pet.archived),
            }
          : null,
      }))
    : [];

  const emergencyContactLinks = Array.isArray(t.emergencyContactLinks)
    ? t.emergencyContactLinks.map((link) => ({
        id: link.id,
        emergencyContactId: link.emergencyContactId,
        emergencyContact: link.emergencyContact
          ? {
              id: link.emergencyContact.id,
              name: link.emergencyContact.name,
              phone: link.emergencyContact.phone,
              relation: link.emergencyContact.relation,
              email: link.emergencyContact.email,
              archived: !!(link.emergencyContact.isArchived ?? link.emergencyContact.archived),
            }
          : null,
      }))
    : [];

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

    // REAL links only
    occupantLinks,
    petLinks,
    emergencyContactLinks,
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

  async linkOccupant(tenantId, occupantId, { token } = {}) {
    if (!tenantId) throw new Error("tenantId is required");
    if (!occupantId) throw new Error("occupantId is required");

    return apiFetch(
      `/api/tenants/${tenantId}/occupants/${occupantId}/link`,
      {
        method: "POST",
        token,
      }
    );
  },

  async unlinkOccupant(tenantId, occupantId, { token } = {}) {
    if (!tenantId) throw new Error("tenantId is required");
    if (!occupantId) throw new Error("occupantId is required");

    return apiFetch(
      `/api/tenants/${tenantId}/occupants/${occupantId}/unlink`,
      {
        method: "DELETE",
        token,
      }
    );
  },

  async linkPet(tenantId, petId, { token } = {}) {
    if (!tenantId) throw new Error("tenantId is required");
    if (!petId) throw new Error("petId is required");

    return apiFetch(
      `/api/tenants/${tenantId}/pets/${petId}/link`,
      {
        method: "POST",
        token,
      }
    );
  },

  async unlinkPet(tenantId, petId, { token } = {}) {
    if (!tenantId) throw new Error("tenantId is required");
    if (!petId) throw new Error("petId is required");

    return apiFetch(
      `/api/tenants/${tenantId}/pets/${petId}/unlink`,
      {
        method: "DELETE",
        token,
      }
    );
  },

  async linkEmergencyContact(tenantId, emergencyContactId, { token } = {}) {
    if (!tenantId) throw new Error("tenantId is required");
    if (!emergencyContactId) throw new Error("emergencyContactId is required");

    return apiFetch(
      `/api/tenants/${tenantId}/emergencyContacts/${emergencyContactId}/link`,
      {
        method: "POST",
        token,
      }
    );
  },

  async unlinkEmergencyContact(tenantId, emergencyContactId, { token } = {}) {
    if (!tenantId) throw new Error("tenantId is required");
    if (!emergencyContactId) throw new Error("emergencyContacyId is required");

    return apiFetch(
      `/api/tenants/${tenantId}/emergencyContacts/${emergencyContactId}/unlink`,
      {
        method: "DELETE",
        token,
      }
    );
  },
};
