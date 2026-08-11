// newsrc/features/search/searchIndex.rbac.test.js
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { buildSearchDocs } from "./searchIndex.js";
import { ROLE_GRANTS } from "@lib/rbac/roles.js";
import { RESOURCES as RESOURCE } from "@lib/rbac/resources.js";

// add: we'll mock these for the last test
import { financialsApi } from "@features/financials/api/financials.api.js";
import { noticesApi } from "@features/notices/api/notices.api.js";

/**
 * ROLE_GRANTS shape:
 *   { [role: string]: Map<ResourceString, Set<ActionString>> }
 * can(role, resource, action) checks ROLE_GRANTS[role].get(resource)?.has(action)
 */

const snapshotRoleGrants = () => {
  const clone = {};
  for (const [role, resMap] of Object.entries(ROLE_GRANTS)) {
    clone[role] = Array.from(resMap.entries()).map(([res, actions]) => [
      res,
      Array.from(actions),
    ]);
  }
  return clone;
};

const restoreRoleGrants = (snap) => {
  for (const key of Object.keys(ROLE_GRANTS)) delete ROLE_GRANTS[key];
  for (const [role, entries] of Object.entries(snap)) {
    ROLE_GRANTS[role] = new Map(
      entries.map(([res, actions]) => [res, new Set(actions)])
    );
  }
};

const makeGrants = (tuples) =>
  new Map(tuples.map(([res, actions]) => [res, new Set(actions)]));

let grantsSnap;

beforeEach(() => {
  grantsSnap = snapshotRoleGrants();
});

afterEach(() => {
  restoreRoleGrants(grantsSnap);
  vi.restoreAllMocks(); // restore any spies/mocks we create
});

describe("RBAC filtering in buildSearchDocs()", () => {
  it("returns no docs when the role has no read access anywhere", async () => {
    ROLE_GRANTS["deny_all"] = new Map(); // no resources at all

    const docs = await buildSearchDocs({ role: "deny_all", currentUser: null });
    expect(Array.isArray(docs)).toBe(true);
    expect(docs.length).toBe(0);
  });

  it("returns only properties when the role can only read properties", async () => {
    ROLE_GRANTS["props_only"] = makeGrants([[RESOURCE.PROPERTIES, ["read"]]]);

    const docs = await buildSearchDocs({ role: "props_only", currentUser: null });
    expect(docs.length).toBeGreaterThan(0);
    expect(docs.every((d) => d.entityType === "property")).toBe(true);
  });

  it("returns properties + tenants when those are granted", async () => {
    ROLE_GRANTS["props_tenants"] = makeGrants([
      [RESOURCE.PROPERTIES, ["read"]],
      [RESOURCE.TENANTS, ["read"]],
    ]);

    const docs = await buildSearchDocs({ role: "props_tenants", currentUser: null });
    expect(docs.length).toBeGreaterThan(0);

    const types = new Set(docs.map((d) => d.entityType));
    expect(types.has("property")).toBe(true);
    expect(types.has("tenant")).toBe(true);

    // ensure other types are filtered out
    expect(types.has("pet")).toBe(false);
    expect(types.has("occupant")).toBe(false);
    expect(types.has("financial")).toBe(false);
    expect(types.has("notice")).toBe(false);
    expect(types.has("maintenanceTicket")).toBe(false);
    expect(types.has("maintenanceRoutine")).toBe(false);
    expect(types.has("cleaningTicket")).toBe(false);
    expect(types.has("expense")).toBe(false);
    expect(types.has("legalCase")).toBe(false);
  });

  it("allows a richer but still restricted set (properties + financials + notices)", async () => {
    ROLE_GRANTS["ops_finance"] = makeGrants([
      [RESOURCE.PROPERTIES, ["read"]],
      [RESOURCE.FINANCIALS, ["read"]],
      [RESOURCE.NOTICES, ["read"]],
    ]);

    // Mock the APIs to ensure at least one financial & notice exist irrespective of seed
    vi.spyOn(financialsApi, "list").mockResolvedValueOnce([
      {
        id: "fin-mock-1",
        leaseId: "lease-123",
        propertyId: "prop-123",
        amount: 100,
        type: "charge",
        description: "Mock rent charge",
      },
    ]);
    vi.spyOn(noticesApi, "list").mockResolvedValueOnce([
      {
        id: "notice-mock-1",
        leaseId: "lease-123",
        propertyId: "prop-123",
        type: "Late Rent",
        title: "Late Rent Notice",
        description: "Rent is past due.",
        status: "open",
      },
    ]);

    const docs = await buildSearchDocs({ role: "ops_finance", currentUser: null });
    const types = new Set(docs.map((d) => d.entityType));

    expect(types.has("property")).toBe(true);
    expect(types.has("financial")).toBe(true);
    expect(types.has("notice")).toBe(true);

    // still excluded:
    expect(types.has("tenant")).toBe(false);
    expect(types.has("pet")).toBe(false);
    expect(types.has("legalCase")).toBe(false);
  });
});
