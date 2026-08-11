/**
 * Beings API (stub)
 * Later we'll wire to your backend. For now, return mock data.
 */

const MOCK_BEINGS = [
  { id: "b1", kind: "human", fullName: "Taylor Steinbaugh", phone: "...", email: "..." },
  { id: "b2", kind: "human", fullName: "Mom Steinbaugh" },
  // { id: "p1", kind: "pet",   fullName: "Rex" },
];

export const beingsApi = {
  async list() {
    return MOCK_BEINGS;
  },
  async get(id) {
    return MOCK_BEINGS.find((b) => b.id === id) || null;
  },
  async search(query) {
    const q = (query || "").toLowerCase();
    return MOCK_BEINGS.filter((b) => b.fullName?.toLowerCase().includes(q));
  },
  // placeholders for later CRUD:
  async create(_payload) { return { id: crypto.randomUUID(), ..._payload }; },
  async update(_id, _payload) { return { id: _id, ..._payload }; },
  async remove(_id) { return { ok: true }; },
};
