const { ruleApplies, applicabilityNote, APPLICABILITY_RULE_IDS } = require("./clauseApplicability");
const { CLAUSE_TEMPLATES } = require("./clauseTemplates");

const before = new Date("2026-11-22T12:00:00Z");
const lease = (fields = {}) => ({ startDate: new Date("2026-12-01"), endDate: null, ...fields });

describe("clause applicability rules", () => {
  it("has a rule only for Required or Legal duty clauses that exist, each with a note", () => {
    for (const id of APPLICABILITY_RULE_IDS) {
      const t = CLAUSE_TEMPLATES.find((x) => x.id === id);
      expect(t, id).toBeTruthy();
      expect(["REQUIRED", "LEGAL_DUTY"]).toContain(t.tag);
      expect(applicabilityNote(id)).toBeTruthy();
    }
  });

  it("lead: built before 1978 or year unknown", () => {
    expect(ruleApplies("lead-based-paint", { property: { yearBuilt: 1977 } })).toBe(true);
    expect(ruleApplies("lead-based-paint", { property: { yearBuilt: null } })).toBe(true);
    expect(ruleApplies("lead-based-paint", { property: { yearBuilt: 1978 } })).toBe(false);
    expect(ruleApplies("lead-law-certification-ma", { property: { yearBuilt: 1950 } })).toBe(true);
  });

  it("deposit: applies unless the lease's deposit is $0", () => {
    expect(ruleApplies("security-deposit-use-wa", { lease: lease({ securityDepositAmount: "1000.00" }) })).toBe(true);
    expect(ruleApplies("security-deposit-use-wa", { lease: lease({ securityDepositAmount: null }) })).toBe(true);
    expect(ruleApplies("security-deposit-use-wa", { lease: lease({ securityDepositAmount: "0.00" }) })).toBe(false);
    expect(ruleApplies("security-deposit-use-wa", { lease: lease({ securityDepositTaken: false }) })).toBe(false);
    expect(ruleApplies("security-deposit-use-wa", { lease: lease({ securityDepositTaken: true, securityDepositAmount: "500.00" }) })).toBe(true);
  });

  it("Maryland pet fact sheet: a dog or cat recorded for a tenant on the lease", () => {
    const withPet = (type) => lease({ leaseTenants: [{ tenant: { pets: [{ type }] } }] });
    expect(ruleApplies("pet-eviction-fact-sheet-md", { lease: withPet("Dog") })).toBe(true);
    expect(ruleApplies("pet-eviction-fact-sheet-md", { lease: withPet("cats") })).toBe(true);
    expect(ruleApplies("pet-eviction-fact-sheet-md", { lease: withPet("bird") })).toBe(false);
    expect(ruleApplies("pet-eviction-fact-sheet-md", { lease: lease({ leaseTenants: [] }) })).toBe(false);
  });

  it("dated laws: apply to a lease starting on or after the date, or built after it", () => {
    const early = { lease: lease(), today: before };
    expect(ruleApplies("flood-disclosure-wa", early)).toBe(false);
    expect(ruleApplies("flood-disclosure-wa", { lease: lease({ startDate: new Date("2027-01-01") }), today: before })).toBe(true);
    expect(ruleApplies("flood-disclosure-wa", { lease: lease(), today: new Date("2027-01-02") })).toBe(true);
    expect(ruleApplies("rights-guide-receipt-de", early)).toBe(false);
    expect(ruleApplies("rights-guide-receipt-de", { lease: lease({ startDate: new Date("2027-06-10") }), today: before })).toBe(true);
    const de1950 = (startDate) => ({ property: { yearBuilt: 1950 }, lease: lease({ startDate }), today: before });
    expect(ruleApplies("lead-certification-de", de1950(new Date("2027-01-01")))).toBe(false);
    expect(ruleApplies("lead-certification-de", de1950(new Date("2028-03-01")))).toBe(true);
  });

  it("Florida flood disclosure: a year or longer, or no end date", () => {
    const fl = (startDate, endDate) => ({ lease: lease({ startDate: new Date(startDate), endDate: endDate && new Date(endDate) }) });
    expect(ruleApplies("flood-disclosure-fl", fl("2027-01-01", "2027-12-31"))).toBe(true);
    expect(ruleApplies("flood-disclosure-fl", fl("2027-01-01", "2027-06-30"))).toBe(false);
    expect(ruleApplies("flood-disclosure-fl", fl("2027-01-01", null))).toBe(true);
  });

  it("North Carolina rental tax: only when both dates show fewer than 90 days", () => {
    const nc = (startDate, endDate) => ({ lease: lease({ startDate: new Date(startDate), endDate: endDate && new Date(endDate) }) });
    expect(ruleApplies("rent-tax-nc", nc("2027-01-01", "2027-02-28"))).toBe(true);
    expect(ruleApplies("rent-tax-nc", nc("2027-01-01", "2027-03-31"))).toBe(false);
    expect(ruleApplies("rent-tax-nc", nc("2027-01-01", null))).toBe(false);
  });

  it("Colorado source-of-income statement: every Colorado lease", () => {
    expect(ruleApplies("source-of-income-statement-co", {})).toBe(true);
  });
});
