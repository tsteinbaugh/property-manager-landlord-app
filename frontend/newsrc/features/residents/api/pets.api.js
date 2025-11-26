// newsrc/features/tenants/api/pets.api.js
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

function mapPetFromApi(p) {
  if (!p) return null;

  // backend shapePet returns { id, name, relation, archived, ... }
  const archived = !!(p.archived ?? p.isArchived);

  return {
    id: p.id,
    name: p.name,
    type: p.type,
    breed: p.breed,
    weightLb: p.weightLb,
    archived,
    createdAt: p.createdAt || p.createdAtISO || null,
    updatedAt: p.updatedAt || p.updatedAtISO || null,
  };
}

export const petsApi = {
  // primary way: list all pets across the system
  async listAll({ includeArchived = false, token } = {}) {
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await http("GET", `/api/pets${qs}`, null, token);
    if (!Array.isArray(rows)) return [];
    return rows.map(mapPetFromApi);
  },

  // alias in case anything still calls `list`
  async list(opts) {
    return this.listAll(opts);
  },

  async get(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await http("GET", `/api/pets/${id}`, null, token);
    return mapPetFromApi(row);
  },

  async create(payload, { token } = {}) {
    const row = await http("POST", "/api/pets", payload, token);
    return mapPetFromApi(row);
  },

  async update(id, patch, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await http("PATCH", `/api/pets/${id}`, patch, token);
    return mapPetFromApi(row);
  },

  async toggleArchive(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await http("PATCH", `/api/pets/${id}/archive`, undefined, token);
    return mapPetFromApi(row);
  },
};
