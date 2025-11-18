// newsrc/features/leases/api/leases.api.js

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
      `Leases API error (${res.status} ${res.statusText}) from ${path}: ${
        text || "<no body>"
      }`
    );
  }

  const text = await res.text().catch(() => "");
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export const leasesApi = {
  async list() {
    const rows = await http("GET", "/api/leases");
    return Array.isArray(rows) ? rows : [];
  },

  async toggleArchive(id) {
    // Backend PATCH /api/leases/:id/archive flips ACTIVE <-> ARCHIVED
    return http("PATCH", `/api/leases/${id}/archive`);
  },
};
