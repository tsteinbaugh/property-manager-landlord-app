// newsrc/features/leases/api/leases.api.js
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

async function httpUpload(path, file, token) {
  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer token`;
  }

  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers,
    body: formData,
  });

  const text = await res.text().catch(() => "");

  if (!res.ok) {
    throw new Error(
      `HTTP ${res.status} ${res.statusText} from ${path}: ${
        text || "<no body>"
      }`
    );
  }

  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function mapLeaseFromApi(o) {
  if (!o) return null;

  const archived = !!(o.archived ?? o.isArchived);

  return {
    id: o.id,
    rentAmount: o.rentAmount ?? null,
    status: o.status || "",
    startDate: o.startDate || "",
    endDate: o.endDate || "",
    archived,
    createdAt: o.createdAt || o.createdAtISO || null,
    updatedAt: o.updatedAt || o.updatedAtISO || null,

    // linkage info
    propertyId: o.propertyId || (o.property && o.property.id) || null,
    landlordId: o.landlordId || (o.landlord && o.landlord.id) || null,
    tenantId: o.tenantId || (o.tenant && o.tenant.id) || null,

    property: o.property || null,
    tenant: o.tenant || null,

    // full leaseTenants info (if backend includes it)
    leaseTenants: Array.isArray(o.leaseTenants)
      ? o.leaseTenants.map((lt) => ({
          id: lt.id,
          tenantId: lt.tenantId,
          tenantName:
            lt.tenantName ||
            (lt.tenant && lt.tenant.name) ||
            "",
          isPrimary: !!lt.isPrimary,
          startDate: lt.startDate || "",
          endDate: lt.endDate || "",
        }))
      : [],

    // file metadata
    fileUrl: o.fileUrl || null,
    fileOriginalName: o.fileOriginalName || null,
    fileMimeType: o.fileMimeType || null,
    fileSize: o.fileSize ?? null,
  };
}

export const leasesApi = {
  // primary way: list all leases across the system
  async listAll({ includeArchived = false, token } = {}) {
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await http("GET", `/api/leases${qs}`, null, token);
    if (!Array.isArray(rows)) return [];
    return rows.map(mapLeaseFromApi);
  },

  // alias in case anything still calls `list`
  async list(opts) {
    return this.listAll(opts);
  },

  async get(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await http("GET", `/api/leases/${id}`, null, token);
    return mapLeaseFromApi(row);
  },

  async create(payload, { token } = {}) {
    const row = await http("POST", "/api/leases", payload, token);
    return mapLeaseFromApi(row);
  },

  async update(id, patch, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await http("PATCH", `/api/leases/${id}`, patch, token);
    return mapLeaseFromApi(row);
  },

  async toggleArchive(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await http(
      "PATCH",
      `/api/leases/${id}/archive`,
      undefined,
      token
    );
    return mapLeaseFromApi(row);
  },

  async uploadFile(id, file, { token } = {}) {
    if (!id) throw new Error("id is required");
    if (!file) throw new Error("file is required");
    const row = await httpUpload(`/api/leases/${id}/file`, file, token);
    return mapLeaseFromApi(row);
  },

  // NEW: link tenant to lease via LeaseTenant join
  async linkTenant(leaseId, tenantId, { token } = {}) {
    if (!leaseId) throw new Error("leaseId is required");
    if (!tenantId) throw new Error("tenantId is required");
    const res = await http(
      "POST",
      `/api/leases/${leaseId}/tenants/${tenantId}/link`,
      null,
      token
    );
    return res;
  },

  // NEW: unlink tenant from lease via LeaseTenant join
  async unlinkTenant(leaseId, tenantId, { token } = {}) {
    if (!leaseId) throw new Error("leaseId is required");
    if (!tenantId) throw new Error("tenantId is required");

    try {
      const res = await http(
        "DELETE",
        `/api/leases/${leaseId}/tenants/${tenantId}/unlink`,
        null,
        token
      );
      return res || { ok: true };
    } catch (err) {
      const msg = String(err.message || "");

      // Gracefully handle the case where no LeaseTenant row exists
      // (legacy single-tenant leases), and let caller fall back.
      if (
        msg.includes("404") &&
        msg.includes("Lease/tenant link not found")
      ) {
        return { ok: false, notFound: true };
      }

      throw err;
    }
  },
};