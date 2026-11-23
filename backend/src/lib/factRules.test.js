const { FACT_RULES } = require("./factRules");
const { factsIn, evaluate, DERIVED } = require("./ruleConditions");
const { CATALOG } = require("./factCatalog");
const { CLAUSE_TEMPLATES } = require("./clauseTemplates");
const { ruleApplies } = require("./clauseApplicability");

const byId = Object.fromEntries(CLAUSE_TEMPLATES.map((t) => [t.id, t]));

describe("factRules", () => {
  it("only covers provided Required or Legal duty clauses", () => {
    for (const id of Object.keys(FACT_RULES)) {
      expect(byId[id], id).toBeTruthy();
      expect(["REQUIRED", "LEGAL_DUTY"], id).toContain(byId[id].tag);
    }
  });

  it("reads only known facts, each asked in every state the clause covers", () => {
    for (const [id, rule] of Object.entries(FACT_RULES)) {
      expect(rule.note, id).toBeTruthy();
      for (const path of factsIn(rule.condition)) {
        if (DERIVED[path]) continue;
        const [target, qid] = path.split(".");
        const q = CATALOG[target]?.find((x) => x.id === qid);
        expect(q, `${id}: ${path}`).toBeTruthy();
        if (q.states) {
          // A rule that first narrows to some states (property.state eq) needs
          // its facts asked only there.
          const top = rule.condition.all || [];
          const only = top.find((c) => c.fact === "property.state" && c.op === "eq");
          const covered = only ? [only.value] : byId[id].states;
          const missing = covered.filter((s) => !q.states.includes(s));
          expect(missing, `${id}: ${path} isn't asked in ${missing}`).toEqual([]);
        }
        expect(q.type === "checkbox" && !q.default, `${id}: ${path} is a checkbox`).toBe(false);
      }
    }
  });

  it("evaluates every rule without error, empty or answered", () => {
    const answered = {
      property: { state: "NJ", yearBuilt: 1950, facts: { propertyType: "APARTMENT", unitsInBuilding: 6, county: "Essex" } },
      lease: { facts: {}, securityDepositTaken: true, startDate: "2027-03-15", endDate: "2028-03-14", leaseTenants: [] },
      account: { residenceState: "NJ" },
      landlord: { propertyCount: 2, propertyCountByState: { NJ: 2 } },
    };
    for (const rule of Object.values(FACT_RULES)) {
      expect(() => evaluate(rule.condition, { property: { facts: {} }, lease: { facts: {} } })).not.toThrow();
      expect(() => evaluate(rule.condition, answered)).not.toThrow();
    }
  });

  it("adds a clause that states a fact only once the answer is Yes", () => {
    const ctx = (facts) => ({ property: { state: "MO", facts }, lease: { facts: {} } });
    expect(ruleApplies("meth-disclosure-mo", ctx({}))).toBe(false);
    expect(ruleApplies("meth-disclosure-mo", ctx({ drugContamination: false }))).toBe(false);
    expect(ruleApplies("meth-disclosure-mo", ctx({ drugContamination: true }))).toBe(true);
    // A clause written to work either way ("state 'none' or describe ...") is added while blank.
    expect(ruleApplies("meth-disclosure-ca", { property: { state: "CA", facts: {} }, lease: { facts: {} } })).toBe(true);
  });

  it("applies when unanswered, and not once an answer rules it out", () => {
    const nj = (facts, lease = {}) => ({ property: { state: "NJ", facts }, lease: { facts: {}, ...lease } });
    expect(ruleApplies("truth-in-renting-statement-nj", nj({}))).toBe(true);
    expect(ruleApplies("truth-in-renting-statement-nj", nj({ propertyType: "SINGLE_FAMILY" }))).toBe(false);
    expect(ruleApplies("truth-in-renting-statement-nj", nj({ propertyType: "APARTMENT", unitsInBuilding: 2 }))).toBe(false);
    expect(ruleApplies("truth-in-renting-statement-nj", nj({ propertyType: "APARTMENT", unitsInBuilding: 3, ownerLivesInBuilding: true }))).toBe(false);
    expect(ruleApplies("truth-in-renting-statement-nj", nj({ propertyType: "APARTMENT", unitsInBuilding: 10 }))).toBe(true);
  });

  it("Georgia escrow: exempt only for an individual with ten or fewer units and no paid manager", () => {
    const ga = (extra) => ({
      property: { state: "GA", entity: { entityType: "PERSONAL" }, facts: {} },
      lease: { facts: {}, securityDepositTaken: true },
      account: {},
      landlord: { propertyCount: 3 },
      ...extra,
    });
    expect(ruleApplies("security-deposit-escrow-ga", ga())).toBe(true);
    expect(ruleApplies("security-deposit-escrow-ga", ga({ account: { moreThanTenRentalUnits: false } }))).toBe(false);
    expect(ruleApplies("security-deposit-escrow-ga", ga({ account: { moreThanTenRentalUnits: false }, landlord: { propertyCount: 11 } }))).toBe(true);
    const llc = ga({ account: { moreThanTenRentalUnits: false } });
    llc.property.entity = { entityType: "LLC" };
    expect(ruleApplies("security-deposit-escrow-ga", llc)).toBe(true);
  });

  it("Minnesota proration follows the lease dates", () => {
    const mn = (lease) => ({ property: { state: "MN", facts: {} }, lease: { facts: {}, ...lease } });
    expect(ruleApplies("prorated-rent-mn", mn({ startDate: "2027-01-01", endDate: "2027-12-31", leaseType: "FIXED" }))).toBe(false);
    expect(ruleApplies("prorated-rent-mn", mn({ startDate: "2027-01-15", endDate: "2027-12-31", leaseType: "FIXED" }))).toBe(true);
    expect(ruleApplies("prorated-rent-mn", mn({ startDate: "2027-01-01", endDate: "2027-12-14", leaseType: "FIXED" }))).toBe(true);
  });
});
