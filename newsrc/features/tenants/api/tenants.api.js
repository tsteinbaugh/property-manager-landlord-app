import { petsApi } from "./pets.api.js";
import { occupantsApi } from "./occupants.api.js";
import { emergencyContactsApi } from "./emergencyContacts.api.js";

const MOCK_TENANTS = [
  {
    id: "t1",
    name: "Taylor",
    archived: false, // filter flag
    pets: [{ id: "p1", name: "Rex", kind: "dog" }],           // local demo data (lists use APIs)
    occupants: [{ id: "o1", name: "Alex Roomie" }],
    emergencyContacts: [{ id: "ec1", name: "Mom", phone: "555-1212" }],
  },
];

export const tenantsApi = {
  async list() {
    return [...MOCK_TENANTS];
  },
  async get(id) {
    return MOCK_TENANTS.find(t => t.id === id) || null;
  },
  async create(payload) {
    const id = payload?.id || (crypto.randomUUID?.() || String(Math.random()).slice(2));
    const rec = {
      id,
      archived: false,
      pets: [],
      occupants: [],
      emergencyContacts: [],
      ...payload,
    };
    MOCK_TENANTS.push(rec);
    return rec;
  },
  async update(id, patch) {
    const i = MOCK_TENANTS.findIndex(t => t.id === id);
    if (i === -1) return null;
    MOCK_TENANTS[i] = { ...MOCK_TENANTS[i], ...patch };
    return MOCK_TENANTS[i];
  },
  async toggleArchive(id) {
    const t = MOCK_TENANTS.find(x => x.id === id);
    if (!t) return null;
    t.archived = !t.archived;

    // Cascade to sub-records
    await petsApi.setArchivedByTenant(id, t.archived);
    await occupantsApi.setArchivedByTenant(id, t.archived);
    await emergencyContactsApi.setArchivedByTenant(id, t.archived);

    return t;
  },
  async remove(id) {
    const i = MOCK_TENANTS.findIndex(t => t.id === id);
    if (i !== -1) MOCK_TENANTS.splice(i, 1);
    return { ok: true };
  },
};
