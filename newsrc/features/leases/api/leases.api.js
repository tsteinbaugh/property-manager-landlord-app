// Simple in-memory leases store for UI/tests
import { leaseFinancialsApi } from "./leaseFinancials.api.js";

const MOCK_LEASES = [
  {
    id: "lease-123",
    propertyId: "prop-123",
    tenantIds: ["t1"],
    startDateISO: "2025-10-01",
    endDateISO: "2026-09-30",
    isArchived: false, // used by components/tests
  },
];

export const leasesApi = {
  async list() {
    return [...MOCK_LEASES];
  },
  async get(id) {
    return MOCK_LEASES.find(l => l.id === id) || null;
  },
  async create(payload) {
    const id = payload?.id || (crypto.randomUUID?.() || String(Math.random()).slice(2));
    const rec = {
      id,
      isArchived: false,
      ...payload,
    };
    MOCK_LEASES.push(rec);
    return rec;
  },
  async update(id, patch) {
    const i = MOCK_LEASES.findIndex(l => l.id === id);
    if (i === -1) return null;
    MOCK_LEASES[i] = { ...MOCK_LEASES[i], ...patch };
    return MOCK_LEASES[i];
  },
  async toggleArchive(id) {
    const l = MOCK_LEASES.find(x => x.id === id);
    if (!l) return null;
    l.isArchived = !l.isArchived;

    // Cascade: archive/unarchive all financial ledger rows for this lease
    await leaseFinancialsApi.setArchivedByLease(id, l.isArchived);

    return l;
  },
  async remove(id) {
    const i = MOCK_LEASES.findIndex(l => l.id === id);
    if (i !== -1) MOCK_LEASES.splice(i, 1);
    return { ok: true };
  },
};
