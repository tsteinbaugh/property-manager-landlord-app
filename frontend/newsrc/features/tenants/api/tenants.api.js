// newsrc/features/residents/api/tenants.api.js
import { apiFetch } from "@lib/apiClient.js";

function mapTenantFromApi(t) {
  if (!t) return null;

  const archived = !!(t.archived ?? t.archivedAt);

  const leaseTenants = Array.isArray(t.leaseTenants) ? t.leaseTenants : [];

  // Normalize link arrays (keep only what the Tenant Detail UI needs)
  const occupantLinks = Array.isArray(t.occupantLinks)
    ? t.occupantLinks
        .map((link) => {
          const o = link?.occupant;
          return {
            id: link?.id ?? `${link?.tenantId || t.id}:${link?.occupantId || o?.id || "unknown"}`,
            occupantId: link?.occupantId ?? o?.id ?? null,
            occupant: o
              ? {
                  id: o.id,
                  name: o.name,
                  archived: !!o.archivedAt,
                }
              : null,
          };
        })
        .filter((l) => l.occupantId)
    : [];

  const petLinks = Array.isArray(t.petLinks)
    ? t.petLinks
        .map((link) => {
          const p = link?.pet;
          return {
            id: link?.id ?? `${link?.tenantId || t.id}:${link?.petId || p?.id || "unknown"}`,
            petId: link?.petId ?? p?.id ?? null,
            pet: p
              ? {
                  id: p.id,
                  name: p.name,
                  archived: !!p.archivedAt,
                }
              : null,
          };
        })
        .filter((l) => l.petId)
    : [];

  const emergencyContactLinks = Array.isArray(t.emergencyContactLinks)
    ? t.emergencyContactLinks
        .map((link) => {
          const e = link?.emergencyContact;
          return {
            id:
              link?.id ??
              `${link?.tenantId || t.id}:${link?.emergencyContactId || e?.id || "unknown"}`,
            emergencyContactId: link?.emergencyContactId ?? e?.id ?? null,
            emergencyContact: e
              ? {
                  id: e.id,
                  name: e.name,
                  archived: !!e.archivedAt,
                }
              : null,
          };
        })
        .filter((l) => l.emergencyContactId)
    : [];

  const vehicleLinks = Array.isArray(t.vehicleLinks)
    ? t.vehicleLinks
        .map((link) => {
          const v = link?.vehicle;
          return {
            id: link?.id ?? `${link?.tenantId || t.id}:${link?.vehicleId || v?.id || "unknown"}`,
            vehicleId: link?.vehicleId ?? v?.id ?? null,
            vehicle: v
              ? {
                  id: v.id,
                  make: v.make,
                  model: v.model,
                  year: v.year,
                  state: v.state,
                  plate: v.plate,
                  permit: v.permit,
                  archived: !!v.archivedAt,
                }
              : null,
          };
        })
        .filter((l) => l.vehicleId)
    : [];

  return {
    // core fields used by LandlordTenantDetailPage edit form + header
    id: t.id,
    name: t.name || "",
    email: t.email || "",
    phone: t.phone || "",
    age: t.age ?? null,
    heightFeet: t.heightFeet ?? null,
    heightInches: t.heightInches ?? null,
    weight: t.weight ?? null,

    sex: t.sex ?? null,
    hairColor: t.hairColor ?? null,
    eyeColor: t.eyeColor ?? null,
    bodyBuild: t.bodyBuild ?? null,

    markings: t.markings ?? "",
    occupation: t.occupation ?? "",
    employer: t.employer ?? "",
    income: t.income ?? null,
    creditScore: t.creditScore ?? null,

    notes: t.notes ?? "",
    
    archived,
    archivedAt: t.archivedAt,

    // used by the Properties/Leases sections
    leaseTenants,

    // REAL links only (used by the Occupants/Pets/EmergencyContacts/Vehicles sections)
    occupantLinks,
    petLinks,
    emergencyContactLinks,
    vehicleLinks,
  };
}

export const tenantsApi = {
  async listAll({ includeArchived = false, token } = {}) {
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await apiFetch(`/api/tenants${qs}`, { token });
    if (!Array.isArray(rows)) return [];
    return rows.map(mapTenantFromApi);
  },

  async list(opts) {
    return this.listAll(opts);
  },

  async detail(id, options = {}) {
    if (!id) throw new Error("id is required");
    const { token } = options;
    const t = await apiFetch(`/api/tenants/${id}`, { token });
    if (!t) return null;
    return mapTenantFromApi(t);
  },

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

  async toggleArchive(id, { token, archiveReason }= {}) {
    if (!id) throw new Error("id is required");

    const body =
      archiveReason === undefined
        ? undefined
        : { archiveReason }; // can be string or null depending on your backend rules

    const row = await apiFetch(`/api/tenants/${id}/archive`, {
      method: "PATCH",
      body,
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

    return apiFetch(`/api/tenants/${tenantId}/occupants/${occupantId}/link`, {
      method: "POST",
      token,
    });
  },

  async unlinkOccupant(tenantId, occupantId, { token } = {}) {
    if (!tenantId) throw new Error("tenantId is required");
    if (!occupantId) throw new Error("occupantId is required");

    return apiFetch(`/api/tenants/${tenantId}/occupants/${occupantId}/unlink`, {
      method: "DELETE",
      token,
    });
  },

  async linkPet(tenantId, petId, { token } = {}) {
    if (!tenantId) throw new Error("tenantId is required");
    if (!petId) throw new Error("petId is required");

    return apiFetch(`/api/tenants/${tenantId}/pets/${petId}/link`, {
      method: "POST",
      token,
    });
  },

  async unlinkPet(tenantId, petId, { token } = {}) {
    if (!tenantId) throw new Error("tenantId is required");
    if (!petId) throw new Error("petId is required");

    return apiFetch(`/api/tenants/${tenantId}/pets/${petId}/unlink`, {
      method: "DELETE",
      token,
    });
  },

  async linkEmergencyContact(tenantId, emergencyContactId, { token } = {}) {
    if (!tenantId) throw new Error("tenantId is required");
    if (!emergencyContactId) throw new Error("emergencyContactId is required");

    return apiFetch(
      `/api/tenants/${tenantId}/emergencyContacts/${emergencyContactId}/link`,
      { method: "POST", token }
    );
  },

  async unlinkEmergencyContact(tenantId, emergencyContactId, { token } = {}) {
    if (!tenantId) throw new Error("tenantId is required");
    if (!emergencyContactId) throw new Error("emergencyContactId is required");

    return apiFetch(
      `/api/tenants/${tenantId}/emergencyContacts/${emergencyContactId}/unlink`,
      { method: "DELETE", token }
    );
  },

  async linkVehicle(tenantId, vehicleId, { token } = {}) {
    if (!tenantId) throw new Error("tenantId is required");
    if (!vehicleId) throw new Error("vehicleId is required");

    return apiFetch(`/api/tenants/${tenantId}/vehicles/${vehicleId}/link`, {
      method: "POST",
      token,
    });
  },

  async unlinkVehicle(tenantId, vehicleId, { token } = {}) {
    if (!tenantId) throw new Error("tenantId is required");
    if (!vehicleId) throw new Error("vehicleId is required");

    return apiFetch(`/api/tenants/${tenantId}/vehicles/${vehicleId}/unlink`, {
      method: "DELETE",
      token,
    });
  },
};
