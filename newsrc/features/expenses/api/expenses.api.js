/**
 * Expenses API (stub)
 * Tracks non-rent costs by property. Can link to maintenance or cleaning tickets.
 */
const MOCK_EXPENSES = [
  {
    id: "e1",
    propertyId: "prop-123",
    dateISO: "2025-11-01",
    vendor: "Home Depot",
    category: "maintenance", // maintenance | cleaning | hoa | insurance | utilities | admin | legal | taxes | other
    description: "P-trap and plumber's tape",
    amountCents: 2499,
    maintenanceTicketId: "mt1", // optional link to maintenance ticket
    cleaningTicketId: null,     // optional link to cleaning ticket
    notes: "",
  },
  {
    id: "e2",
    propertyId: "prop-123",
    dateISO: "2025-11-03",
    vendor: "Sparkle & Shine LLC",
    category: "cleaning",
    description: "Turnover deep clean",
    amountCents: 25000,
    maintenanceTicketId: null,
    cleaningTicketId: "ct1", // links to your cleaning ticket seed
    notes: "3-hour turnover",
  },
];

export const expensesApi = {
  async listByProperty(propertyId) {
    if (!propertyId) return [];
    return MOCK_EXPENSES.filter((x) => x.propertyId === propertyId);
  },
  async get(id) {
    return MOCK_EXPENSES.find((x) => x.id === id) || null;
  },
  async create(payload) {
    const id = crypto.randomUUID?.() || String(Math.random()).slice(2);
    const rec = {
      maintenanceTicketId: null,
      cleaningTicketId: null,
      ...payload,
      id,
    };
    MOCK_EXPENSES.push(rec);
    return rec;
  },
  async update(id, patch) {
    const i = MOCK_EXPENSES.findIndex((x) => x.id === id);
    if (i === -1) return null;
    MOCK_EXPENSES[i] = { ...MOCK_EXPENSES[i], ...patch };
    return MOCK_EXPENSES[i];
  },
  async remove(id) {
    const i = MOCK_EXPENSES.findIndex((x) => x.id === id);
    if (i !== -1) MOCK_EXPENSES.splice(i, 1);
    return { ok: true };
  },
};
