const { buildVariableContext } = require("./clauseVariables");

describe("clauseVariables", () => {
  const base = { lease: { monthlyRent: "1500", startDate: new Date("2027-01-01"), facts: {} }, property: {}, tenants: [] };

  it("shows date-only lease dates on their own day, whatever the server's timezone", () => {
    const lease = { ...base.lease, startDate: new Date("2025-02-03T00:00:00Z"), endDate: new Date("2026-07-31T00:00:00Z") };
    const ctx = buildVariableContext({ ...base, lease });
    expect(ctx.start_date).toBe("2/3/2025");
    expect(ctx.end_date).toBe("7/31/2026");
  });

  it("fills the notice address from the entity's mailing address, or the lease's own", () => {
    const entity = { legalName: "Example LLC", mailingAddress: "1 Main St, Denver, CO 80202" };
    expect(buildVariableContext({ ...base, entity }).landlord_notice_address).toBe("1 Main St, Denver, CO 80202");
    const lease = { ...base.lease, facts: { noticeAddress: "PO Box 9, Boulder, CO 80301" } };
    expect(buildVariableContext({ ...base, lease, entity }).landlord_notice_address).toBe("PO Box 9, Boulder, CO 80301");
    expect(buildVariableContext({ ...base, entity: {} }).landlord_notice_address).toBe(null);
  });
});
