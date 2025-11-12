/**
 * Properties API (stub)
 * Shape: { id, name, address, archived, status }
 * status: "occupied" | "vacant" | "remodel"
 */
const MOCK_PROPERTIES = [
  { id: "prop-123", name: "6740 Sequoia St", address: "Frederick, CO", archived: false, status: "occupied" },
  { id: "prop-456", name: "5349 Rustler Trail", address: "Parker, CO",     archived: false, status: "vacant"   },
];

const VALID_STATUS = new Set(["occupied", "vacant", "remodel"]);

export const propertiesApi = {
  async list() {
    // return fresh copies so React state updates re-render
    return MOCK_PROPERTIES.map(p => ({ ...p }));
  },

  async get(id) {
    return MOCK_PROPERTIES.find(p => p.id === id) || null;
  },

  async add(payload) {
    const id = payload?.id || (crypto.randomUUID?.() || String(Math.random()).slice(2));
    let status = payload?.status ?? "vacant";
    if (!VALID_STATUS.has(status)) status = "vacant";

    const rec = { id, archived: false, status, ...payload };
    MOCK_PROPERTIES.push(rec);
    return { ...rec };
  },

  async update(id, patch) {
    const i = MOCK_PROPERTIES.findIndex(p => p.id === id);
    if (i === -1) return null;

    const next = { ...MOCK_PROPERTIES[i], ...patch };
    if ("status" in patch && !VALID_STATUS.has(patch.status)) {
      // keep previous status if invalid value is attempted
      next.status = MOCK_PROPERTIES[i].status;
    }

    MOCK_PROPERTIES[i] = next;
    return { ...MOCK_PROPERTIES[i] };
  },

  async setStatus(id, status) {
    if (!VALID_STATUS.has(status)) return null;
    const rec = MOCK_PROPERTIES.find(p => p.id === id);
    if (!rec) return null;
    rec.status = status;
    return { ...rec };
  },

  async toggleArchive(id) {
    const rec = MOCK_PROPERTIES.find(p => p.id === id);
    if (!rec) return null;
    rec.archived = !rec.archived;

    // ⬇️ Cascade 1: Leases under this property (auto-cascade to financials via leases api)
    try {
      const { leasesApi } = await import("../../leases/api/leases.api.js");
      const leases = await leasesApi.list();
      const byProperty = leases.filter(l => l.propertyId === id);
      for (const l of byProperty) {
        if (l.isArchived !== rec.archived) {
          await leasesApi.toggleArchive(l.id);
        }
      }
    } catch (err) {
      console.warn("Property cascade → leases skipped:", err);
    }

    // ⬇️ Cascade 2 (optional): Tenants linked to this property
    // Only enable if your tenants model includes propertyId.
    /*
    try {
      const { tenantsApi } = await import("../../tenants/api/tenants.api.js");
      const tenants = await tenantsApi.list();
      const byPropertyTenants = tenants.filter(t => t.propertyId === id);
      for (const t of byPropertyTenants) {
        if (t.archived !== rec.archived) {
          await tenantsApi.toggleArchive(t.id);
        }
      }
    } catch (err) {
      console.warn("Property cascade → tenants skipped:", err);
    }
    */

    // ⬇️ Cascade 3 (future): maintenance, expenses, etc.
    // await maintenanceApi.setArchivedByProperty(id, rec.archived)
    // await expensesApi.setArchivedByProperty(id, rec.archived)

    return { ...rec };
  },

  async remove(id) {
    const i = MOCK_PROPERTIES.findIndex(p => p.id === id);
    if (i !== -1) MOCK_PROPERTIES.splice(i, 1);
    return { ok: true };
  },
};
