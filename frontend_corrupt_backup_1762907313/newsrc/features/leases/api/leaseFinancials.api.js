/**
 * Lease Financials API (stub)
 * Ledger entries: { id, leaseId, type, dateISO, description, amountCents, archived }
 * type = "charge" | "payment"
 */
const MOCK_LEDGER = [
  { id: "lf-1", leaseId: "lease-123", type: "charge",  dateISO: "2025-11-01", description: "November rent",  amountCents: 200000, archived: false },
  { id: "lf-2", leaseId: "lease-123", type: "payment", dateISO: "2025-11-03", description: "Tenant payment", amountCents: 200000, archived: false },
];

export const leaseFinancialsApi = {
  async listByLease(leaseId) {
    if (!leaseId) return [];
    return MOCK_LEDGER.filter(e => e.leaseId === leaseId).map(e => ({ ...e }));
  },

  async add(leaseId, payload) {
    const id = payload?.id || (crypto.randomUUID?.() || String(Math.random()).slice(2));
    const rec = { id, leaseId, archived: false, ...payload };
    MOCK_LEDGER.push(rec);
    return { ...rec };
  },

  async toggleArchive(id) {
    const row = MOCK_LEDGER.find(e => e.id === id);
    if (!row) return null;
    row.archived = !row.archived;
    return { ...row };
  },

  async setArchivedByLease(leaseId, archivedFlag) {
    for (const row of MOCK_LEDGER) {
      if (row.leaseId === leaseId) row.archived = !!archivedFlag;
    }
    return { ok: true };
  },

  async remove(id) {
    const i = MOCK_LEDGER.findIndex(e => e.id === id);
    if (i !== -1) MOCK_LEDGER.splice(i, 1);
    return { ok: true };
  },
};
