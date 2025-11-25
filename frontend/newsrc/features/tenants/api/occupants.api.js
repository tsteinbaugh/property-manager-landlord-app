// newsrc/features/tenants/api/occupants.api.js
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
  if (!o) return null;

  // backend shapeOccupant returns { id, name, relation, archived, ... }
  const archived = !!(o.archived ?? o.isArchived);

  return {
    id: o.id,
    name: o.name,
    relation: o.relation || "",
    archived,
    createdAt: o.createdAt || o.createdAtISO || null,
    updatedAt: o.updatedAt || o.updatedAtISO || null,
  };
}

export const occupantsApi = {
  // primary way: list all occupants across the system
  async listAll({ includeArchived = false } = {}) {
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await http("GET", `/api/occupants${qs}`);
    if (!Array.isArray(rows)) return [];
    return rows.map(mapOccupantFromApi);
  },

  // alias in case anything still calls `list`
  async list(opts) {
    return this.listAll(opts);
  },

  async get(id) {
    if (!id) throw new Error("id is required");
    const row = await http("GET", `/api/occupants/${id}`);
    return mapOccupantFromApi(row);
  },

  async create(payload) {
    const row = await http("POST", "/api/occupants", payload);
    return mapOccupantFromApi(row);
  },

  async update(id, patch) {
    if (!id) throw new Error("id is required");
    const row = await http("PATCH", `/api/occupants/${id}`, patch);
    return mapOccupantFromApi(row);
  },

  async toggleArchive(id) {
    if (!id) throw new Error("id is required");
    const row = await http("PATCH", `/api/occupants/${id}/archive`);
    return mapOccupantFromApi(row);
  },
};
