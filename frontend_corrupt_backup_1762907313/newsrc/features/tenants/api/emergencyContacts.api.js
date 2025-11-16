/**
 * Emergency Contacts API (stub)
 * { id, tenantId, name, relation, phone, notes, archived }
 */
const MOCK_EMERGENCYCONTACTS = [
  { id: "ec-1", tenantId: "t1", name: "Mom", relation: "mother", phone: "555-123-4567", notes: "", archived: false },
];

export const emergencyContactsApi = {
  async listByTenant(tenantId) {
    if (!tenantId) return [];
    return MOCK_EMERGENCYCONTACTS.filter(c => c.tenantId === tenantId).map(c => ({ ...c }));
  },
  async add(tenantId, payload) {
    const id = payload?.id || (crypto.randomUUID?.() || String(Math.random()).slice(2));
    const rec = { id, tenantId, archived: false, ...payload };
    MOCK_EMERGENCYCONTACTS.push(rec);
    return { ...rec };
  },
  async toggleArchive(id) {
    const row = MOCK_EMERGENCYCONTACTS.find(c => c.id === id);
    if (!row) return null;
    row.archived = !row.archived;
    return { ...row };
  },
  async setArchivedByTenant(tenantId, archivedFlag) {
    for (const row of MOCK_EMERGENCYCONTACTS) {
      if (row.tenantId === tenantId) row.archived = !!archivedFlag;
    }
    return { ok: true };
  },
  async remove(id) {
    const i = MOCK_EMERGENCYCONTACTS.findIndex(c => c.id === id);
    if (i !== -1) MOCK_EMERGENCYCONTACTS.splice(i, 1);
    return { ok: true };
  },
};
