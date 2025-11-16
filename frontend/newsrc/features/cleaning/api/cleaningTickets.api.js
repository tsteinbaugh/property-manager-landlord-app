/**
 * Cleaning Tickets API (stub)
 * A cleaning ticket belongs to a property and is typically assigned to a cleaner/vendor.
 * status: open | scheduled | in_progress | blocked | done
 * priority: low | normal | high | emergency
 */
const MOCK_CLEANING_TICKETS = [
  {
    id: "ct1",
    propertyId: "prop-123",
    title: "Turnover clean after move-out",
    description: "Full house deep clean incl. appliances",
    status: "scheduled",
    priority: "high",
    assignedBeingId: null,     // cleaner/vendor Being id (optional)
    createdAt: "2025-10-02T09:00:00Z",
    scheduledAt: "2025-10-03T15:00:00Z",
    durationMins: 180,
    costCents: 25000,
  },
];

export const cleaningTicketsApi = {
  async listByProperty(propertyId) {
    if (!propertyId) return [];
    return MOCK_CLEANING_TICKETS.filter((t) => t.propertyId === propertyId);
  },
  async get(id) {
    return MOCK_CLEANING_TICKETS.find((t) => t.id === id) || null;
  },
  async create(payload) {
    const id = crypto.randomUUID?.() || String(Math.random()).slice(2);
    const rec = {
      id,
      status: "open",
      priority: "normal",
      createdAt: new Date().toISOString(),
      ...payload,
    };
    MOCK_CLEANING_TICKETS.push(rec);
    return rec;
  },
  async update(id, patch) {
    const i = MOCK_CLEANING_TICKETS.findIndex((t) => t.id === id);
    if (i === -1) return null;
    MOCK_CLEANING_TICKETS[i] = { ...MOCK_CLEANING_TICKETS[i], ...patch };
    return MOCK_CLEANING_TICKETS[i];
  },
  async remove(id) {
    const i = MOCK_CLEANING_TICKETS.findIndex((t) => t.id === id);
    if (i !== -1) MOCK_CLEANING_TICKETS.splice(i, 1);
    return { ok: true };
  },
};
