// newsrc/features/leases/api/leases.api.js
import { apiFetch } from "@lib/apiClient.js";

function mapLeaseFromApi(o) {
  if (!o) return null;

  const archived = !!(o.archived ?? o.archivedAt);

  const leaseTenants = Array.isArray(o.leaseTenants)
    ? o.leaseTenants.map((lt) => ({
        id: lt.id ?? `${lt.leaseId || o.id}:${lt.tenantId || "unknown"}`,
        tenantId: lt.tenantId || null,
        tenantName: lt.tenantName || lt?.tenant?.name || "",
        startDate: lt.startDate || "",
        endDate: lt.endDate || "",
      }))
    : [];

  return {
    id: o.id,

    rentAmount: o.rentAmount ?? null,
    status: o.status || "",
    startDate: o.startDate || "",
    endDate: o.endDate || "",

    archived,
    archivedAt: o.archivedAt,
    createdAt: o.createdAt || o.createdAtISO || null,
    updatedAt: o.updatedAt || o.updatedAtISO || null,

    // linkage info (legacy-friendly)
    propertyId: o.propertyId || o?.property?.id || null,
    landlordId: o.landlordId || o?.landlord?.id || null,

    // NOTE: tenantId is legacy; keep it for now so old UI doesn't explode,
    // but prefer leaseTenants going forward.
    tenantId: o.tenantId || o?.tenant?.id || (leaseTenants[0]?.tenantId ?? null),

    property: o.property || null,
    tenant: o.tenant || null,

    leaseTenants,

    // file metadata
    fileUrl: o.fileUrl || null,
    fileOriginalName: o.fileOriginalName || null,
    fileMimeType: o.fileMimeType || null,
    fileSize: o.fileSize ?? null,
  };
}

export const leasesApi = {
  async listAll({ includeArchived = false, token } = {}) {
    const qs = includeArchived ? "?includeArchived=1" : "?includeArchived=0";
    const rows = await apiFetch(`/api/leases${qs}`, { token });
    if (!Array.isArray(rows)) return [];
    return rows.map(mapLeaseFromApi);
  },

  async list(opts) {
    return this.listAll(opts);
  },

  async get(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/leases/${id}`, { token });
    return mapLeaseFromApi(row);
  },

  async create(payload, { token } = {}) {
    const row = await apiFetch("/api/leases", {
      method: "POST",
      body: payload,
      token,
    });
    return mapLeaseFromApi(row);
  },

  async update(id, patch, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/leases/${id}`, {
      method: "PATCH",
      body: patch,
      token,
    });
    return mapLeaseFromApi(row);
  },

  async toggleArchive(id, { token } = {}) {
    if (!id) throw new Error("id is required");
    const row = await apiFetch(`/api/leases/${id}/archive`, {
      method: "PATCH",
      token,
    });
    return mapLeaseFromApi(row);
  },

  async uploadFile(id, file, { token } = {}) {
    if (!id) throw new Error("id is required");
    if (!file) throw new Error("file is required");

    const form = new FormData();
    form.append("file", file);

    const row = await apiFetch(`/api/leases/${id}/file`, {
      method: "POST",
      body: form,
      token,
      // apiFetch should NOT force JSON headers when body is FormData.
      // If your apiFetch currently always sets Content-Type: application/json,
      // update it to skip that header for FormData bodies.
    });

    return mapLeaseFromApi(row);
  },

  async linkTenant(leaseId, tenantId, { token } = {}) {
    if (!leaseId) throw new Error("leaseId is required");
    if (!tenantId) throw new Error("tenantId is required");

    return apiFetch(`/api/leases/${leaseId}/tenants/${tenantId}/link`, {
      method: "POST",
      token,
    });
  },

  async unlinkTenant(leaseId, tenantId, { token } = {}) {
    if (!leaseId) throw new Error("leaseId is required");
    if (!tenantId) throw new Error("tenantId is required");

    try {
      const res = await apiFetch(
        `/api/leases/${leaseId}/tenants/${tenantId}/unlink`,
        { method: "DELETE", token }
      );
      return res || { ok: true };
    } catch (err) {
      const msg = String(err?.message || "");
      if (msg.includes("404") && msg.includes("Lease/tenant link not found")) {
        return { ok: false, notFound: true };
      }
      throw err;
    }
  },

  async unlinkProperty(leaseId, { token } = {}) {
    if (!leaseId) throw new Error("leaseId is required");
    return this.update(leaseId, { propertyId: "" }, { token });
  },
};
