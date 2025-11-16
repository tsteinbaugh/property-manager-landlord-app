/**
 * Occupants API (stub)
 * { id, tenantId, name, relationship, age, notes, archived }
 */
const MOCK_OCCUPANTS = [
  { id: "occ-1", tenantId: "t1", name: "Alex", relationship: "spouse", age: 34, notes: "", archived: false },
];

export const occupantsApi = {
  async listByTenant(tenantId) {
    if (!tenantId) return [];
    return MOCK_OCCUPANTS.filter(o => o.tenantId === tenantId).map(o => ({ ...o }));
  },
  async add(tenantId, payload) {
    const id = payload?.id || (crypto.randomUUID?.() || String(Math.random()).slice(2));
    const rec = { id, tenantId, archived: false, ...payload };
    MOCK_OCCUPANTS.push(rec);
    return { ...rec };
  },
  async toggleArchive(id) {
    const row = MOCK_OCCUPANTS.find(o => o.id === id);
    if (!row) return null;
    row.archived = !row.archived;
    return { ...row };
  },
  async setArchivedByTenant(tenantId, archivedFlag) {
    for (const row of MOCK_OCCUPANTS) {
      if (row.tenantId === tenantId) row.archived = !!archivedFlag;
    }
    return { ok: true };
  },
  async remove(id) {
    const i = MOCK_OCCUPANTS.findIndex(o => o.id === id);
    if (i !== -1) MOCK_OCCUPANTS.splice(i, 1);
    return { ok: true };
  },
};
