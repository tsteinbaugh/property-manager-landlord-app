const { evaluate, resolve, UNKNOWN, factsIn } = require("./ruleConditions");

const ctx = (property = {}, lease = {}, extra = {}) => ({ property: { state: "NJ", facts: {}, ...property }, lease: { facts: {}, ...lease }, ...extra });
const multi = { fact: "property.unitsInBuilding", op: "gte", value: 3 };
const ownerIn = { fact: "property.ownerLivesInBuilding", op: "eq", value: true };

describe("ruleConditions", () => {
  it("is unknown when the answer is missing, and true or false once answered", () => {
    expect(evaluate(multi, ctx())).toBe(UNKNOWN);
    expect(evaluate(multi, ctx({ facts: { unitsInBuilding: 4 } }))).toBe(true);
    expect(evaluate(multi, ctx({ facts: { unitsInBuilding: 2 } }))).toBe(false);
  });

  it("uses three-valued all / any / not", () => {
    const rule = { all: [multi, { not: ownerIn }] };
    expect(evaluate(rule, ctx({ facts: { unitsInBuilding: 2 } }))).toBe(false);
    expect(evaluate(rule, ctx({ facts: { unitsInBuilding: 4 } }))).toBe(UNKNOWN);
    expect(evaluate(rule, ctx({ facts: { unitsInBuilding: 4, ownerLivesInBuilding: false } }))).toBe(true);
    expect(evaluate({ any: [multi, ownerIn] }, ctx({ facts: { ownerLivesInBuilding: true } }))).toBe(true);
    expect(evaluate({ any: [multi, ownerIn] }, ctx({ facts: { unitsInBuilding: 1 } }))).toBe(UNKNOWN);
  });

  it("reads a checkbox's default when it isn't answered", () => {
    expect(resolve("property.furnished", ctx())).toBe(false);
  });

  it("derives the deposit, lease length and the people on the lease", () => {
    expect(resolve("lease.depositTaken", ctx({}, { securityDepositTaken: false }))).toBe(false);
    expect(resolve("lease.depositTaken", ctx({}, { securityDepositAmount: "500" }))).toBe(true);
    expect(resolve("lease.depositTaken", ctx())).toBe(null);
    expect(resolve("lease.termDays", ctx({}, { startDate: "2027-01-01", endDate: "2027-12-31" }))).toBe(364);
    const lease = {
      leaseTenants: [
        { role: "PRIMARY", tenant: { isStudent: false, occupants: [{ isStudent: true }] } },
        { role: "GUARANTOR", tenant: { isStudent: true, occupants: [] } },
      ],
    };
    expect(resolve("lease.anyStudent", ctx({}, lease))).toBe(true);
    expect(resolve("lease.peopleCount", ctx({}, lease))).toBe(2);
    expect(resolve("lease.hasGuarantor", ctx({}, lease))).toBe(true);
  });

  it("derives utility charge-backs, unknown until every utility is answered", () => {
    const some = { facts: { utilities: { water: { whoPays: "CHARGED_BACK", method: "SUBMETER" } } } };
    expect(resolve("property.anyUtilityChargedBack", ctx(some))).toBe(true);
    expect(resolve("property.chargeBackMethods", ctx(some))).toEqual(["SUBMETER"]);
    const none = { facts: { utilities: Object.fromEntries(["electric", "gas", "water", "sewer", "trash"].map((k) => [k, { whoPays: "TENANT_DIRECT" }])) } };
    expect(resolve("property.anyUtilityChargedBack", ctx(none))).toBe(false);
    expect(resolve("property.chargeBackMethods", ctx(none))).toEqual([]);
    expect(resolve("property.anyUtilityChargedBack", ctx())).toBe(null);
  });

  it("derives where the landlord lives", () => {
    const account = { residenceState: "NY" };
    expect(resolve("landlord.livesInPropertyState", ctx({}, {}, { account }))).toBe(false);
    expect(resolve("landlord.livesInPropertyState", ctx({}, {}, { account: {} }))).toBe(null);
    const hi = ctx({ state: "HI", facts: { island: "Maui" } }, {}, { account: { residenceState: "HI", residenceIsland: "Oʻahu" } });
    expect(resolve("landlord.sameIsland", hi)).toBe(false);
  });

  it("matches county names regardless of case and a trailing County", () => {
    const c = { fact: "property.county", op: "matches", value: ["Davidson", "Knox"] };
    expect(evaluate(c, ctx({ facts: { county: "davidson county" } }))).toBe(true);
    expect(evaluate(c, ctx({ facts: { county: "Polk" } }))).toBe(false);
  });

  it("refuses an unknown fact", () => {
    expect(() => resolve("property.madeUp", ctx())).toThrow();
    expect(factsIn({ all: [multi, { not: ownerIn }] })).toEqual(["property.unitsInBuilding", "property.ownerLivesInBuilding"]);
  });
});
