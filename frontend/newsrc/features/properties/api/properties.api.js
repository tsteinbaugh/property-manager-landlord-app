// newsrc/features/properties/api/properties.api.js

import emergencyContactCard from "@features/residents/components/emergencyContacts/EmergencyContactCard.jsx";

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
  if (!p) return null;

  const archived = !!(p.archived ?? p.isArchived);

  const address1 = p.address1 || "";
  const city = p.city || "";
  const state = p.state || "";
  const postalCode = p.postalCode || "";

  // Keep `address` as a single string for existing UIs, but derive from real fields.
  const address =
    p.address ||
    [address1, city, state, postalCode].filter(Boolean).join(", ");

  return {
    id: p.id,
    name: p.name || "",
    address1: p.address1 || "",
    city: p.city || "",
    state: p.state || "",
    postalCode: p.postalCode || "",
    bedrooms: p.bedrooms ?? null,
    bathrooms: p.bathrooms ?? null,
    sqft: p.sqft ?? null,
    yearBuilt: p.yearBuilt ?? null,
    notes: p.notes || "",
    archived: !!(p.archived ?? p.isArchived),
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
    status: p.status || "occupied", // still a placeholder until modeled in DB
    leases: Array.isArray(p.leases) ? p.leases : [],
    tenants: Array.isArray(p.tenants) ? p.tenants : [],
    occupants: Array.isArray(p.occupants) ? p.occupants : [],
    pets: Array.isArray(p.pets) ? p.pets : [],
    emergencyContacts: Array.isArray(p.emergencyContacts) ? p.emergencyContacts : [],
  };
}

export const propertiesApi = {
  // Just reuse .get() so they stay in sync
  async detail(id, options = {}) {
    return this.get(id, options);
  },

  // List properties (optionally scoped with token)
  async list(options = {}) {
    const { token } = options;
    const rows = await http("GET", "/api/properties", null, token);
    if (!Array.isArray(rows)) return [];
    return rows.map(mapPropertyFromApi);
  },

  // Property detail with leases + tenants (uses GET /api/properties/:id)
  async get(id, options = {}) {
    const { token } = options;
    if (!id) throw new Error("id is required");

    const p = await http("GET", `/api/properties/${id}`, null, token);
    if (!p) return null;
    return mapPropertyFromApi(p);
  },

  // Create property (wired to POST /api/properties)
  async add(payload, options = {}) {
    const { token } = options;

    const created = await http("POST", "/api/properties", payload, token);
    return mapPropertyFromApi(created);
  },

  // Update property (PATCH /api/properties/:id)
  async update(id, patch, options = {}) {
    const { token } = options;
    if (!id) throw new Error("id is required");

    const updated = await http(
      "PATCH",
      `/api/properties/${id}`,
      patch,
      token
    );
    return mapPropertyFromApi(updated);
  },

  async setStatus(id, status) {
    console.warn("[propertiesApi.setStatus] not implemented against backend yet");
    return { id, status };
  },

  // Archive/unarchive property, and cascade archive to leases
  async toggleArchive(id, options = {}) {
    const { token } = options;
    if (!id) throw new Error("id is required");

    // Try PATCH first; if backend only supports POST, we can fall back
    let updated;
    try {
      updated = await http(
        "PATCH",
        `/api/properties/${id}/archive`,
        undefined,
        token
      );
    } catch (err) {
      console.warn(
        "[propertiesApi.toggleArchive] PATCH failed, trying POST /toggle-archive",
        err
      );
      updated = await http(
        "POST",
        `/api/properties/${id}/toggle-archive`,
        undefined,
        token
      );
    }

    const mapped = mapPropertyFromApi(updated);

    // Cascade to leases so they archive/unarchive with the property
    try {
      const { leasesApi } = await import("../../leases/api/leases.api.js");
      const leases = await leasesApi.list({ token });
      const byProperty = leases.filter((l) => l.propertyId === id);
      for (const l of byProperty) {
        const shouldBeArchived = mapped.archived;
        const isArchived = !!l.archived || l.status === "ARCHIVED";
        if (shouldBeArchived !== isArchived) {
          await leasesApi.toggleArchive(l.id, { token });
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
