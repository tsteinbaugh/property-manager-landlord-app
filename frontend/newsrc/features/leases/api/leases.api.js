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

  const attachments = Array.isArray(o.attachments)
    ? o.attachments.map((d) => ({
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

    // legacy
    tenantId: o.tenantId || o?.tenant?.id || (leaseTenants[0]?.tenantId ?? null),

    property: o.property || null,
    tenant: o.tenant || null,

    leaseTenants,

    attachments,
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

  // ------------------------------------------------------------
  // DETAIL / GET (consistent with tenants)
  // detail() = fetch-by-id
  // get() = backwards-compatible wrapper
  // ------------------------------------------------------------
  async detail(id, options = {}) {
    if (!id) throw new Error("id is required");
    const { token } = options;
    const row = await apiFetch(`/api/leases/${id}`, { token });
    return mapLeaseFromApi(row);
  },

  async get(id, options = {}) {
    if (!id) throw new Error("id is required");

    // If token is present, behave like "detail" (fetch by id)
    if (options?.token) return this.detail(id, options);

    // Legacy fallback (rare): try to find from list
    const rows = await this.list(options);
    return rows.find((x) => x?.id === id) || null;
  },

  async create(payload, options = {}) {
    const { token } = options;
    const row = await apiFetch("/api/leases", {
      method: "POST",
      body: payload,
      token,
    });
    return mapLeaseFromApi(row);
  },

  async update(id, patch, options = {}) {
    if (!id) throw new Error("id is required");
    const { token } = options;
    const row = await apiFetch(`/api/leases/${id}`, {
      method: "PATCH",
      body: patch,
      token,
    });
    return mapLeaseFromApi(row);
  },

  async toggleArchive(id, options = {}) {
    if (!id) throw new Error("id is required");

    const { token, archiveReason } = options;

    const body =
      archiveReason === undefined ? undefined : { archiveReason };

    const row = await apiFetch(`/api/leases/${id}/archive`, {
      method: "PATCH",
      body,
      token,
    });

    return mapLeaseFromApi(row);
  },

  // ------------------------------------------------------------
  // ATTACHMENTS
  // ------------------------------------------------------------
  async uploadAttachments(id, files, options = {}) {
    if (!id) throw new Error("id is required");
    const { token } = options;

    const list = Array.isArray(files) ? files : [];
    if (!list.length) throw new Error("files are required");

    const form = new FormData();
    for (const f of list) form.append("files", f);

    const row = await apiFetch(`/api/leases/${id}/attachments`, {
      method: "POST",
      body: form,
      token,
    });

    return mapLeaseFromApi(row);
  },

  async archiveAttachment(leaseId, attachId, options = {}) {
    if (!leaseId) throw new Error("leaseId is required");
    if (!attachId) throw new Error("attachId is required");

    const { token, archiveReason } = options;

    const row = await apiFetch(
      `/api/leases/${leaseId}/attachments/${attachId}/archive`,
      {
        method: "PATCH",
        body: { archiveReason },
        token,
      }
    );

    return mapLeaseFromApi(row);
  },

  // ------------------------------------------------------------
  // LINKING
  // ------------------------------------------------------------
  async linkTenant(leaseId, tenantId, options = {}) {
    if (!leaseId) throw new Error("leaseId is required");
    if (!tenantId) throw new Error("tenantId is required");

    const { token } = options;

    return apiFetch(`/api/leases/${leaseId}/tenants/${tenantId}/link`, {
      method: "POST",
      token,
    });
  },

  async unlinkTenant(leaseId, tenantId, options = {}) {
    if (!leaseId) throw new Error("leaseId is required");
    if (!tenantId) throw new Error("tenantId is required");

    const { token } = options;

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

  async linkProperty(leaseId, propertyId, { token } = {}) {
    if (!leaseId) throw new Error("leaseId is required");
    if (!propertyId) throw new Error("propertyId is required");
    return this.update(leaseId, { propertyId }, { token });
  },

  async unlinkProperty(leaseId, options = {}) {
    if (!leaseId) throw new Error("leaseId is required");
    const { token } = options;
    return this.update(leaseId, { propertyId: "" }, { token });
  },
};
