// In-memory generic financials for property OR lease scope
const ROWS = [
  // seed example:
  // { id: 'fin-1', propertyId: 'prop-1', leaseId: null, type: 'charge', description: 'HOA', amountCents: 15000, dateISO: '2025-01-15', archived: false }
];

const rid = () => crypto.randomUUID?.() || Math.random().toString(36).slice(2);

function byScope({ propertyId, leaseId }) {
  return ROWS.filter(r =>
    (propertyId ? r.propertyId === propertyId : true) &&
    (leaseId ? r.leaseId === leaseId : true)
  );
}

export const financialsApi = {
  async list({ propertyId, leaseId }) {
    return byScope({ propertyId, leaseId }).map(r => ({ ...r }));
  },
  async add({ propertyId, leaseId, payload }) {
    const rec = { id: rid(), propertyId: propertyId || null, leaseId: leaseId || null, archived: false, ...payload };
    ROWS.push(rec);
    return { ...rec };
  },
  async remove(id) {
    const i = ROWS.findIndex(r => r.id === id);
    if (i !== -1) ROWS.splice(i, 1);
    return { ok: true };
  },
  async toggleArchive(id) {
    const r = ROWS.find(x => x.id === id);
    if (!r) return null;
    r.archived = !r.archived;
    return { ...r };
  },
};
