// newsrc/features/leases/api/leaseLifecycle.api.js
// Deterministic lease lifecycle over an in-memory state bucket.
// Exposes a tiny test helper to reset state between tests.

import { leasesApi } from "./leases.api.js";

// In-memory lifecycle state keyed by leaseId
const STATE = new Map();

// ensure a state record exists for a lease
async function ensure(leaseId) {
  if (!leaseId) return null;
  if (!STATE.has(leaseId)) {
    // default seed
    STATE.set(leaseId, { status: "draft", mtmSince: null, endedAt: null });
  }
  return STATE.get(leaseId);
}

// project lease data plus lifecycle fields
async function project(leaseId) {
  const lease = await leasesApi.get(leaseId);
  if (!lease) return null;
  const s = await ensure(leaseId);
  return { ...lease, ...s };
}

export const leaseLifecycleApi = {
  async get(leaseId) {
    return project(leaseId);
  },

  async start(leaseId) {
    const s = await ensure(leaseId);
    if (!s) return null;
    if (s.status === "draft") {
      s.status = "active";
      s.mtmSince = null;
      s.endedAt = null;
    }
    return project(leaseId);
  },

  async setMonthToMonth(leaseId) {
    const s = await ensure(leaseId);
    if (!s) return null;
    if (s.status === "active") {
      s.status = "mtm";
      s.mtmSince = new Date().toISOString();
      s.endedAt = null;
    }
    return project(leaseId);
  },

  async end(leaseId) {
    const s = await ensure(leaseId);
    if (!s) return null;
    if (s.status !== "ended") {
      s.status = "ended";
      s.endedAt = new Date().toISOString();
    }
    return project(leaseId);
  },

  // ---- TEST HELPER (idempotent) ------------------------------------------
  // Allows specs to force a clean starting point.
  async __setForTests(leaseId, patch = {}) {
    const base = await ensure(leaseId);
    if (!base) return null;
    const next = {
      status: "draft",
      mtmSince: null,
      endedAt: null,
      ...patch,
    };
    STATE.set(leaseId, next);
    return project(leaseId);
  },
};
