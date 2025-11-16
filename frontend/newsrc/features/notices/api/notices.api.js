const NOTICES = [
  // example seed:
  // { id:'n-1', leaseId:'lease-123', propertyId:null, type:'JDF-99A', status:'prepared', mode:'posted', servedAt:null, notes:'', archived:false }
];
const rid = () => crypto.randomUUID?.() || Math.random().toString(36).slice(2);

function byScope({ propertyId, leaseId }) {
  return NOTICES.filter(n =>
    (propertyId ? n.propertyId === propertyId : true) &&
    (leaseId ? n.leaseId === leaseId : true)
  );
}

export const noticesApi = {
  async list({ propertyId, leaseId }) { return byScope({ propertyId, leaseId }).map(n => ({ ...n })); },
  async create(payload) {
    const rec = { id: rid(), archived: false, status: "draft", ...payload };
    NOTICES.push(rec); return { ...rec };
  },
  async setStatus(id, status) {
    const n = NOTICES.find(x => x.id === id); if (!n) return null;
    n.status = status; if (status === "delivered") n.servedAt = new Date().toISOString();
    return { ...n };
  },
  async toggleArchive(id) {
    const n = NOTICES.find(x => x.id === id); if (!n) return null;
    n.archived = !n.archived; return { ...n };
  },
  async remove(id) {
    const i = NOTICES.findIndex(n => n.id === id);
    if (i !== -1) NOTICES.splice(i, 1);
    return { ok: true };
  },
};
