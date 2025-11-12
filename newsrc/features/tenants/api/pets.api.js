/**
 * Pets API (stub)
 * { id, tenantId, name, species, breed, weightLbs, notes, archived }
 */
const MOCK_PETS = [
  { id: "pet-1", tenantId: "t1", name: "Scout", species: "dog", breed: "Lab mix", weightLbs: 55, notes: "Good boy", archived: false },
];

export const petsApi = {
  async listByTenant(tenantId) {
    if (!tenantId) return [];
    return MOCK_PETS.filter(p => p.tenantId === tenantId).map(p => ({ ...p }));
  },
  async add(tenantId, payload) {
    const id = payload?.id || (crypto.randomUUID?.() || String(Math.random()).slice(2));
    const rec = { id, tenantId, archived: false, ...payload };
    MOCK_PETS.push(rec);
    return { ...rec };
  },
  async toggleArchive(id) {
    const row = MOCK_PETS.find(p => p.id === id);
    if (!row) return null;
    row.archived = !row.archived;
    return { ...row };
  },
  async setArchivedByTenant(tenantId, archivedFlag) {
    for (const row of MOCK_PETS) {
      if (row.tenantId === tenantId) row.archived = !!archivedFlag;
    }
    return { ok: true };
  },
  async remove(id) {
    const i = MOCK_PETS.findIndex(p => p.id === id);
    if (i !== -1) MOCK_PETS.splice(i, 1);
    return { ok: true };
  },
};
