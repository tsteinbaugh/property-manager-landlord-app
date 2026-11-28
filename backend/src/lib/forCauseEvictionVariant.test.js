const { coForCauseExemption } = require("./forCauseEvictionVariant");

describe("coForCauseExemption (C.R.S. § 38-12-1302(1), 2026-11-27)", () => {
  const at = (facts, lease = {}) => coForCauseExemption({ facts }, lease);
  it("exempts an owner-occupied or owner-adjacent single-family home, duplex or triplex", () => {
    expect(at({ propertyType: "SINGLE_FAMILY", coOwnerResides: "here" })).toBe("OWNER_OCCUPIED_OR_ADJACENT");
    expect(at({ propertyType: "APARTMENT", unitsInBuilding: 3, ownerLivesInBuilding: true })).toBe("OWNER_OCCUPIED_OR_ADJACENT");
    expect(at({ propertyType: "APARTMENT", unitsInBuilding: 8, coOwnerResides: "next_door", coAdjacentSmall: true })).toBe("OWNER_OCCUPIED_OR_ADJACENT");
  });
  it("covers four or more units, an absent owner, or a fact not yet answered", () => {
    expect(at({ propertyType: "APARTMENT", unitsInBuilding: 4, coOwnerResides: "here" })).toBe("STANDARD_LONG_TERM");
    expect(at({ propertyType: "SINGLE_FAMILY", coOwnerResides: "no" })).toBe("STANDARD_LONG_TERM");
    expect(at({ propertyType: "SINGLE_FAMILY" })).toBe("STANDARD_LONG_TERM");
  });
  it("treats a lease of less than thirty days as a short-term rental", () => {
    expect(at({}, { startDate: "2026-12-01", endDate: "2026-12-20" })).toBe("SHORT_TERM_RENTAL");
    expect(at({}, { startDate: "2026-12-01", endDate: "2027-11-30" })).toBe("STANDARD_LONG_TERM");
  });
});
