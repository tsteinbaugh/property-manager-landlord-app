// newsrc/features/tenants/api/pets.api.js
const BASE_URL = "http://localhost:4000";

async function http(method, path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `HTTP ${res.status} ${res.statusText} from ${path}: ${
        text || "<no body>"
      }`
    );
  }

  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function mapPetFromApi(p) {
  return {
    id: p.id,
    tenantId: p.tenantId,
    name: p.name,
    type: p.type || "",
    breed: p.breed || "",
    weightLb: p.weightLb ?? null,
    archived: !!p.archived,
  };
}

export const petsApi = {
  async list(tenantId, { includeArchived = false } = {}) {
    if (!tenantId) return [];
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await http("GET", `/api/tenants/${tenantId}/pets${qs}`);
    if (!Array.isArray(rows)) return [];
    return rows.map(mapPetFromApi);
  },

  async create(tenantId, payload) {
    if (!tenantId) throw new Error("tenantId is required");
    const row = await http("POST", `/api/tenants/${tenantId}/pets`, payload);
    return mapPetFromApi(row);
  },

  async update(tenantId, id, patch) {
    if (!tenantId) throw new Error("tenantId is required");
    const row = await http(
      "PATCH",
      `/api/tenants/${tenantId}/pets/${id}`,
      patch
    );
    return mapPetFromApi(row);
  },

  async toggleArchive(tenantId, id) {
    if (!tenantId) throw new Error("tenantId is required");
    const row = await http(
      "PATCH",
      `/api/tenants/${tenantId}/pets/${id}/archive`
    );
    return mapPetFromApi(row);
  },

  // used when archiving an entire tenant
  async setArchivedByTenant(tenantId, archived) {
    if (!tenantId) return;
    const list = await this.list(tenantId, { includeArchived: true });
    for (const p of list) {
      if (p.archived !== archived) {
        await this.toggleArchive(tenantId, p.id);
      }
    }
  },
};
