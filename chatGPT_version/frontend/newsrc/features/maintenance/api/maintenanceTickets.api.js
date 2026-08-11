/**
 * Maintenance Tickets API (stub)
 * A ticket belongs to a property; may be submitted by a tenant; can be assigned to a manager/vendor.
 */
const MOCK_MAINTENANCE_TICKETS = [
  // Example shape:
  {
    id: "mt1",
    propertyId: "prop-123",
    title: "Leaky faucet in kitchen",
    description: "Slow drip under sink",
    status: "open", // open | scheduled | in_progress | blocked | done
    priority: "normal", // low | normal | high | emergency
    submittedByTenantId: "t1", // optional
    assignedBeingId: null,     // manager/vendor Being id (optional)
    createdAt: "2025-10-01T12:00:00Z",
    scheduledAt: null,
    durationMins: null,
    costCents: null,
  }
];

export const maintenanceTicketsApi = {
  async listByProperty(propertyId) {
    if (!propertyId) return [];
    return MOCK_MAINTENANCE_TICKETS.filter((t) => t.propertyId === propertyId);
  },
  async get(id) {
    return MOCK_MAINTENANCE_TICKETS.find((t) => t.id === id) || null;
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
    MOCK_MAINTENANCE_TICKETS.push(rec);
    return rec;
  },
  async update(id, patch) {
    const i = MOCK_MAINTENANCE_TICKETS.findIndex((t) => t.id === id);
    if (i === -1) return null;
    MOCK_MAINTENANCE_TICKETS[i] = { ...MOCK_MAINTENANCE_TICKETS[i], ...patch };
    return MOCK_MAINTENANCE_TICKETS[i];
  },
  async remove(id) {
    const i = MOCK_MAINTENANCE_TICKETS.findIndex((t) => t.id === id);
    if (i !== -1) MOCK_MAINTENANCE_TICKETS.splice(i, 1);
    return { ok: true };
  },
};
