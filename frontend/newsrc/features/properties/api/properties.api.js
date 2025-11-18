// newsrc/features/properties/api/properties.api.js

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
      `Properties API error (${res.status} ${res.statusText}) from ${path}: ${
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

function mapPropertyFromApi(p) {
  // backend server.js returns: { id, name, address, archived, leases: [...] }
  return {
    id: p.id,
    name: p.name || "",
    address: p.address || "",
    archived: !!p.archived,
    status: p.status || "occupied", // placeholder until we model status in DB
    leases: Array.isArray(p.leases) ? p.leases : [],
  };
}

export const propertiesApi = {
  async list() {
    const rows = await http("GET", "/api/properties");
    if (!Array.isArray(rows)) return [];
    return rows.map(mapPropertyFromApi);
  },

  async get(id) {
    const all = await this.list();
    return all.find((p) => p.id === id) || null;
  },

  // we’ll hook this up later with POST /api/properties
  async add(payload) {
    console.warn("[propertiesApi.add] not implemented against backend yet");
    return {
      id: payload?.id || String(Math.random()).slice(2),
      name: payload?.name || "",
      address: payload?.address || "",
      archived: false,
      status: payload?.status || "vacant",
      leases: [],
    };
  },

  async update(id, patch) {
    console.warn("[propertiesApi.update] not implemented against backend yet");
    return { id, ...patch };
  },

  async setStatus(id, status) {
    console.warn("[propertiesApi.setStatus] not implemented against backend yet");
    return { id, status };
  },

  async toggleArchive(id) {
    // Try PATCH first; if backend only supports POST, we can fall back
    let updated;
    try {
      updated = await http("PATCH", `/api/properties/${id}/archive`);
    } catch (err) {
      // Fallback to POST /toggle-archive if PATCH is not supported
      console.warn(
        "[propertiesApi.toggleArchive] PATCH failed, trying POST /toggle-archive",
        err
      );
      updated = await http("POST", `/api/properties/${id}/toggle-archive`);
    }

    const mapped = mapPropertyFromApi(updated);

    // Cascade to leases so they archive/unarchive with the property
    try {
      const { leasesApi } = await import("../../leases/api/leases.api.js");
      const leases = await leasesApi.list();
      const byProperty = leases.filter((l) => l.propertyId === id);
      for (const l of byProperty) {
        const shouldBeArchived = mapped.archived;
        const isArchived = !!l.archived || l.status === "ARCHIVED";
        if (shouldBeArchived !== isArchived) {
          await leasesApi.toggleArchive(l.id);
        }
      }
    } catch (err) {
      console.warn("Property cascade → leases skipped:", err);
    }

    // Future: cascade to tenants, maintenance, etc.

    return mapped;
  },

  async remove(id) {
    console.warn("[propertiesApi.remove] not implemented against backend yet");
    return { ok: true };
  },
};
