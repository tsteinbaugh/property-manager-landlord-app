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

  const documents = Array.isArray(o.documents)
    ? o.documents.map((d) => ({
        id: d.id,
        url: d.url,
        originalName: d.originalName,
        mimeType: d.mimeType,
        size: d.size ?? null,
        createdAt: d.createdAt || null,
        createdById: d.createdById ?? null,
        archivedAt: d.archivedAt ?? null,
        archiveReason: d.archiveReason ?? null,
        archivedById: d.archivedById ?? null,
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
    documents,
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

  async toggleArchive(id, { token, archiveReason } = {}) {
    if (!id) throw new Error("id is required");

    const body =
      archiveReason === undefined
        ? undefined
        : { archiveReason }; // can be string or null depending on your backend rules

    const row = await apiFetch(`/api/leases/${id}/archive`, {
      method: "PATCH",
      body,
      token,
    });

    return mapLeaseFromApi(row);
  },
  
  async uploadDocuments(id, files, { token } = {}) {
    if (!id) throw new Error("id is required");
    const list = Array.isArray(files) ? files : [];
    if (!list.length) throw new Error("files are required");

    const form = new FormData();
    for (const f of list) form.append("files", f);

    const row = await apiFetch(`/api/leases/${id}/documents`, {
      method: "POST",
      body: form,
      token,
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

  async archiveDocument(leaseId, docId, { token, archiveReason } = {}) {
    if (!leaseId) throw new Error("leaseId is required");
    if (!docId) throw new Error("docId is required");
  
    const row = await apiFetch(`/api/leases/${leaseId}/documents/${docId}/archive`, {
      method: "PATCH",
      body: { archiveReason },
      token,
    });
  
    return mapLeaseFromApi(row);
  },
};
