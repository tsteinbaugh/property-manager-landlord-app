// newsrc/features/admin/api/adminUsers.api.js
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

function mapUserFromApi(u) {
  return {
    id: u.id,
    email: u.email,
    name: u.name || "",
    baseRole: u.baseRole,
    status: u.status || "ACTIVE",
    archived: !!u.archived,
    createdAt: u.createdAt,
    updatedAt: u.updatedAt,
  };
}

export const adminUsersApi = {
  async list({ includeArchived = false } = {}) {
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await http("GET", `/api/admin/users${qs}`);
    if (!Array.isArray(rows)) return [];
    return rows.map(mapUserFromApi);
  },

  async create(payload) {
    const row = await http("POST", "/api/admin/users", payload);
    return mapUserFromApi(row);
  },

  async update(id, patch) {
    const row = await http("PATCH", `/api/admin/users/${id}`, patch);
    return mapUserFromApi(row);
  },

  async toggleArchive(id) {
    const row = await http("PATCH", `/api/admin/users/${id}/archive`);
    return mapUserFromApi(row);
  },

  async remove(id) {
    await http("DELETE", `/api/admin/users/${id}`);
    return { ok: true };
  },
};
