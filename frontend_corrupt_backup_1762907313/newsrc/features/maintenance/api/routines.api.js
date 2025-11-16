/**
 * Routine Maintenance API (stub)
 * Defines recurring maintenance tasks per property.
 * Later we can "materialize" due instances into real tickets.
 */
const MOCK_ROUTINES = [
  // Example:
  {
    id: "rm1",
    propertyId: "prop-123",
    title: "Replace HVAC filter",
    frequency: { unit: "days", every: 90 }, // or months, weeks
    lastCompletedAt: null,                   // ISO or null
    nextDueAt: "2026-01-01T00:00:00Z",      // optional precomputed
    assignedBeingId: null,                   // manager/vendor Being
    notes: "MERV 8 filter",
  }
];

export const routinesApi = {
  async listByProperty(propertyId) {
    if (!propertyId) return [];
    return MOCK_ROUTINES.filter((r) => r.propertyId === propertyId);
  },
  async create(payload) {
    const id = crypto.randomUUID?.() || String(Math.random()).slice(2);
    const rec = { id, ...payload };
    MOCK_ROUTINES.push(rec);
    return rec;
  },
  async update(id, patch) {
    const i = MOCK_ROUTINES.findIndex((r) => r.id === id);
    if (i === -1) return null;
    MOCK_ROUTINES[i] = { ...MOCK_ROUTINES[i], ...patch };
    return MOCK_ROUTINES[i];
  },
  async remove(id) {
    const i = MOCK_ROUTINES.findIndex((r) => r.id === id);
    if (i !== -1) MOCK_ROUTINES.splice(i, 1);
    return { ok: true };
  },
};
