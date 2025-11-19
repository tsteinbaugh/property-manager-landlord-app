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

function mapOccupantFromApi(o) {
  return {
    id: o.id,
    tenantId: o.tenantId,
    name: o.name,
    relation: o.relation || "",
    archived: !!o.archived,
  };
}

export const occupantsApi = {
  async list(tenantId, { includeArchived = false } = {}) {
    if (!tenantId) return [];
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await http("GET", `/api/tenants/${tenantId}/occupants${qs}`);
    if (!Array.isArray(rows)) return [];
    return rows.map(mapOccupantFromApi);
  },

  async create(tenantId, payload) {
    if (!tenantId) throw new Error("tenantId is required");
    const row = await http("POST", `/api/tenants/${tenantId}/occupants`, payload);
    return mapOccupantFromApi(row);
  },

  async update(tenantId, id, patch) {
    if (!tenantId) throw new Error("tenantId is required");
    const row = await http(
      "PATCH",
      `/api/tenants/${tenantId}/occupants/${id}`,
      patch
    );
    return mapOccupantFromApi(row);
  },

  async toggleArchive(tenantId, id) {
    if (!tenantId) throw new Error("tenantId is required");
    const row = await http(
      "PATCH",
      `/api/tenants/${tenantId}/occupants/${id}/archive`
    );
    return mapOccupantFromApi(row);
  },

  // used when archiving an entire tenant
  async setArchivedByTenant(tenantId, archived) {
    if (!tenantId) return;
    const list = await this.list(tenantId, { includeArchived: true });
    for (const o of list) {
      if (o.archived !== archived) {
        await this.toggleArchive(tenantId, o.id);
      }
    }
  },
};
