// newsrc/features/tenants/api/vehicles.api.js
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

function mapVehicleFromApi(o) {
  if (!o) return null;

  // backend shapeVehicle returns { id, make, model, year,... archived, ... }
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
    archived,
    createdAt: o.createdAt || o.createdAtISO || null,
    updatedAt: o.updatedAt || o.updatedAtISO || null,
  };
}

export const vehiclesApi = {
  // primary way: list all vehicles across the system
  async listAll({ includeArchived = false, token } = {}) {
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await http("GET", `/api/vehicles${qs}`, null, token);
    if (!Array.isArray(rows)) return [];
    return rows.map(mapVehicleFromApi);
  },

  // alias in case anything still calls `list`
  async list(opts) {
    return this.listAll(opts);
  },

  async get(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await http("GET", `/api/vehicles/${id}`, null, token);
    return mapVehicleFromApi(row);
  },

  async create(payload, { token } = {}) {
    const row = await http("POST", "/api/vehicles", payload, token);
    return mapVehicleFromApi(row);
  },

  async update(id, patch, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await http("PATCH", `/api/vehicles/${id}`, patch, token);
    return mapVehicleFromApi(row);
  },

  async toggleArchive(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await http("PATCH", `/api/vehicles/${id}/archive`, undefined, token);
    return mapVehicleFromApi(row);
  },
};
