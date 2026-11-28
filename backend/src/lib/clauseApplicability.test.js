const { ruleApplies, ruleState, ruleReads, applicabilityNote, APPLICABILITY_RULE_IDS } = require("./clauseApplicability");
const { UNKNOWN } = require("./ruleConditions");
const { tagIn } = require("./stateScopedTags");
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

  it("federal lead: the lead-free, 0-bedroom and elderly or disability exceptions (40 C.F.R. §§ 745.101, 745.103)", () => {
    const p = (fields, facts = {}) => ({ yearBuilt: 1950, bedrooms: 2, facts, ...fields });
    const ctx = (property, leaseFields = {}) => ({ property, lease: { facts: {}, leaseTenants: [], ...leaseFields } });
    expect(ruleApplies("lead-based-paint", ctx(p({}, { certifiedLeadFree: true })))).toBe(false);
    // A studio: asks about a child under 6, and the clause stays until answered No.
    expect(ruleState("lead-based-paint", ctx(p({ bedrooms: 0 })))).toBe(UNKNOWN);
    expect(ruleReads("lead-based-paint", ctx(p({ bedrooms: 0 })))).toContain("lease.childUnder6");
    expect(ruleReads("lead-based-paint", ctx(p({})))).not.toContain("lease.childUnder6");
    expect(ruleApplies("lead-based-paint", ctx(p({ bedrooms: 0 })))).toBe(true);
    expect(ruleApplies("lead-based-paint", ctx(p({ bedrooms: 0 }), { facts: { childUnder6: false } }))).toBe(false);
    expect(ruleApplies("lead-based-paint", ctx(p({}, { elderlyOrDisabledHousing: true }), { facts: { childUnder6: false } }))).toBe(false);
    // An occupant under 6 at the lease start (by birth date) settles it without asking.
    const withChild = { startDate: "2027-01-01", leaseTenants: [{ tenant: { occupants: [{ dateOfBirth: "2024-05-01" }] } }] };
    expect(ruleState("lead-based-paint", ctx(p({ bedrooms: 0 }), withChild))).toBe(true);
    const olderChild = { startDate: "2027-01-01", leaseTenants: [{ tenant: { occupants: [{ dateOfBirth: "2019-05-01" }] } }] };
    expect(ruleState("lead-based-paint", ctx(p({ bedrooms: 0 }), olderChild))).toBe(UNKNOWN);
    // The state lead rules keep the plain year test.
    expect(ruleApplies("lead-law-certification-ma", ctx(p({}, { certifiedLeadFree: true })))).toBe(true);
  });

  it("Nevada foreclosure, every DC lease, Minnesota exempt setting", () => {
    const nv = (foreclosureUnderway) => ({ property: { state: "NV", facts: {} }, lease: { facts: { foreclosureUnderway } } });
    expect(ruleApplies("foreclosure-disclosure-nv", nv(true))).toBe(true);
    expect(ruleApplies("foreclosure-disclosure-nv", nv(undefined))).toBe(true);
    expect(ruleApplies("foreclosure-disclosure-nv", nv(false))).toBe(false);
    expect(ruleApplies("foreclosure-disclosure-nv", { property: { state: "SC", facts: {} }, lease: { facts: { foreclosureUnderway: true } } })).toBe(false);
    expect(ruleApplies("required-disclosures-dc", { property: { state: "DC", facts: {} }, lease: { facts: {} } })).toBe(true);
    const mn = (mnExemptSetting) => ({ property: { state: "MN", facts: { mnExemptSetting } }, lease: { facts: {} } });
    expect(ruleApplies("key-control-exempt-setting-mn", mn(undefined))).toBe(false);
    expect(ruleApplies("key-control-exempt-setting-mn", mn(true))).toBe(true);
  });

  it("shared clauses that are a duty in only some states take their other tag elsewhere", () => {
    const t = (id) => CLAUSE_TEMPLATES.find((x) => x.id === id);
    expect(tagIn(t("foreclosure-disclosure-nv"), "NV")).toBe("LEGAL_DUTY");
    expect(tagIn(t("foreclosure-disclosure-nv"), "SC")).toBe("RECOMMENDED");
    expect(tagIn(t("lease-copy-receipt-hi"), "AZ")).toBe("LEGAL_DUTY");
    expect(tagIn(t("lease-copy-receipt-hi"), "KS")).toBe("RECOMMENDED");
    expect(tagIn(t("parking-rules-notice-co"), "SC")).toBe("RECOMMENDED");
    expect(tagIn(t("lead-based-paint"), "KS")).toBe("REQUIRED");
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
