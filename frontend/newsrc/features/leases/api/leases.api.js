// newsrc/features/leases/api/leases.api.js

const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:4000";

async function http(method, path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text().catch(() => "");

  if (!res.ok) {
    throw new Error(
      `Leases API error (${res.status} ${res.statusText}) from ${path}: ${
        text || "<no body>"
      }`
    );
  }

  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    // tolerate non-JSON empty-ish responses
    return null;
  }
}

export const leasesApi = {
  async list() {
    const rows = await http("GET", "/api/leases");
    return Array.isArray(rows) ? rows : [];
  },

  async toggleArchive(id) {
    // backend supports both PATCH /archive and POST /toggle-archive;
    // we'll use PATCH as the canonical route
    return http("PATCH", `/api/leases/${id}/archive`);
  },

  async update(id, patch) {
    return http("PATCH", `/api/leases/${id}`, patch);
  },
};
