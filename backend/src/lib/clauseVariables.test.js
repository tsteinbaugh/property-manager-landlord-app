const { buildVariableContext } = require("./clauseVariables");

describe("clauseVariables", () => {
  const base = { lease: { monthlyRent: "1500", startDate: new Date("2027-01-01"), facts: {} }, property: {}, tenants: [] };

  it("fills the notice address from the entity's mailing address, or the lease's own", () => {
    const entity = { legalName: "Example LLC", mailingAddress: "1 Main St, Denver, CO 80202" };
    expect(buildVariableContext({ ...base, entity }).landlord_notice_address).toBe("1 Main St, Denver, CO 80202");
    const lease = { ...base.lease, facts: { noticeAddress: "PO Box 9, Boulder, CO 80301" } };
    expect(buildVariableContext({ ...base, lease, entity }).landlord_notice_address).toBe("PO Box 9, Boulder, CO 80301");
    expect(buildVariableContext({ ...base, entity: {} }).landlord_notice_address).toBe(null);
  });
});
