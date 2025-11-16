/**
 * Legal Cases API (stub)
 * Tracks eviction/notice/court workflow.
 * status: open | pending_court | judgment | closed
 */
const MOCK_CASES = [
  {
    id: "lc1",
    propertyId: "prop-123",
    leaseId: "lease-123",
    tenantId: "t1",
    status: "open",
    title: "Non-payment of rent - October",
    openedAt: "2025-11-03T14:05:00Z",
    archived: false, // ← add archived flag
    events: [
      { at: "2025-11-03T15:00:00Z", kind: "notice_posted", note: "Demand for Payment (10-day)" },
    ],
    notes: "Initial demand sent.",
  }
];

export const legalCasesApi = {
  async listByProperty(propertyId) {
    if (!propertyId) return [];
    return MOCK_CASES.filter(c => c.propertyId === propertyId);
  },
  async listByLease(leaseId) {
    if (!leaseId) return [];
    return MOCK_CASES.filter(c => c.leaseId === leaseId);
  },
  async get(id) {
    return MOCK_CASES.find(c => c.id === id) || null;
  },
  async create(payload) {
    const id = payload?.id || (crypto.randomUUID?.() || String(Math.random()).slice(2));
    const rec = {
      id,
      status: "open",
      openedAt: new Date().toISOString(),
      events: [],
      archived: false,        // ← default
      ...payload,
    };
    MOCK_CASES.push(rec);
    return rec;
  },
  async update(id, patch) {
    const i = MOCK_CASES.findIndex(c => c.id === id);
    if (i === -1) return null;
    MOCK_CASES[i] = { ...MOCK_CASES[i], ...patch };
    return MOCK_CASES[i];
  },
  async addEvent(id, event) {
    const c = MOCK_CASES.find(x => x.id === id);
    if (!c) return null;
    c.events = c.events || [];
    c.events.push({ at: new Date().toISOString(), ...event });
    return c;
  },
  async setStatus(id, status) {
    const c = MOCK_CASES.find(x => x.id === id);
    if (!c) return null;
    c.status = status;
    if (status === "closed") c.closedAt = new Date().toISOString();
    return c;
  },
  async toggleArchive(id) {              // ← NEW
    const c = MOCK_CASES.find(x => x.id === id);
    if (!c) return null;
    c.archived = !c.archived;
    return c;
  },
  async remove(id) {
    const i = MOCK_CASES.findIndex(c => c.id === id);
    if (i !== -1) MOCK_CASES.splice(i, 1);
    return { ok: true };
  },
};
