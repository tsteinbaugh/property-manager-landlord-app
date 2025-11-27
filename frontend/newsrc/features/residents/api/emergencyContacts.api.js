// newsrc/features/tenants/api/emergencyContacts.api.js
const BASE_URL = "http://localhost:4000";

async function http(method, path, body, token) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
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

function mapEmergencyContactFromApi(o) {
  if (!o) return null;

  // backend shapeEmergencyContact returns { id, name, phone, relation, email, archived, ... }
  const archived = !!(o.archived ?? o.isArchived);

  return {
    id: o.id,
    name: o.name,
    phone: o.phone || "",
    relation: o.relation || "",
    email: o.email || "",
    archived,
    createdAt: o.createdAt || o.createdAtISO || null,
    updatedAt: o.updatedAt || o.updatedAtISO || null,
  };
}

export const emergencyContactsApi = {
  // primary way: list all emergency contacts across the system
  async listAll({ includeArchived = false, token } = {}) {
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await http("GET", `/api/emergencyContacts${qs}`, null, token);
    if (!Array.isArray(rows)) return [];
    return rows.map(mapEmergencyContactFromApi);
  },

  // alias in case anything still calls `list`
  async list(opts) {
    return this.listAll(opts);
  },

  async get(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await http("GET", `/api/emergencyContacts/${id}`, null, token);
    return mapEmergencyContactFromApi(row);
  },

  async create(payload, { token } = {}) {
    const row = await http("POST", "/api/emergencyContacts", payload, token);
    return mapEmergencyContactFromApi(row);
  },

  async update(id, patch, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await http("PATCH", `/api/emergencyContacts/${id}`, patch, token);
    return mapEmergencyContactFromApi(row);
  },

  async toggleArchive(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await http("PATCH", `/api/emergencyContacts/${id}/archive`, undefined, token);
    return mapEmergencyContactFromApi(row);
  },
};
