// newsrc/features/tenants/api/emergencyContacts.api.js
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

function mapEmergencyContactFromApi(c) {
  return {
    id: c.id,
    tenantId: c.tenantId,
    name: c.name,
    phone: c.phone || "",
    relation: c.relation || "",
    email: c.email || "",
    archived: !!c.archived,
  };
}

export const emergencyContactsApi = {
  async list(tenantId, { includeArchived = false } = {}) {
    if (!tenantId) return [];
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await http(
      "GET",
      `/api/tenants/${tenantId}/emergency-contacts${qs}`
    );
    if (!Array.isArray(rows)) return [];
    return rows.map(mapEmergencyContactFromApi);
  },

  async create(tenantId, payload) {
    if (!tenantId) throw new Error("tenantId is required");
    const row = await http(
      "POST",
      `/api/tenants/${tenantId}/emergency-contacts`,
      payload
    );
    return mapEmergencyContactFromApi(row);
  },

  async update(tenantId, id, patch) {
    if (!tenantId) throw new Error("tenantId is required");
    const row = await http(
      "PATCH",
      `/api/tenants/${tenantId}/emergency-contacts/${id}`,
      patch
    );
    return mapEmergencyContactFromApi(row);
  },

  async toggleArchive(tenantId, id) {
    if (!tenantId) throw new Error("tenantId is required");
    const row = await http(
      "PATCH",
      `/api/tenants/${tenantId}/emergency-contacts/${id}/archive`
    );
    return mapEmergencyContactFromApi(row);
  },

  // used when archiving an entire tenant
  async setArchivedByTenant(tenantId, archived) {
    if (!tenantId) return;
    const list = await this.list(tenantId, { includeArchived: true });
    for (const c of list) {
      if (c.archived !== archived) {
        await this.toggleArchive(tenantId, c.id);
      }
    }
  },
};
