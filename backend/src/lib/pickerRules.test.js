const { PICKER_RULES, hiddenTemplates } = require("./pickerRules");
const { CLAUSE_TEMPLATES } = require("./clauseTemplates");
const { evaluate, factsIn } = require("./ruleConditions");

const nv = CLAUSE_TEMPLATES.filter((t) => (t.states || []).includes("NV"));
const ctx = (property = {}, lease = {}) => ({
  property: { state: "NV", facts: {}, ...property },
  lease: { facts: {}, leaseTenants: [], ...lease },
  account: {},
  landlord: { propertyCount: 1, propertyCountByState: { NV: 1 } },
});

describe("pickerRules", () => {
  it("only covers Recommended and Optional clauses that exist", () => {
    const byId = Object.fromEntries(CLAUSE_TEMPLATES.map((t) => [t.id, t]));
    for (const [id, rule] of Object.entries(PICKER_RULES)) {
      expect(byId[id], id).toBeTruthy();
      expect(["RECOMMENDED", "OPTIONAL"], id).toContain(byId[id].tag);
      expect(factsIn(rule.condition).length, id).toBeGreaterThan(0);
    }
  });

  it("never hides a clause when nothing is answered", () => {
    for (const [id, rule] of Object.entries(PICKER_RULES)) {
      const t = CLAUSE_TEMPLATES.find((x) => x.id === id);
      const empty = { ...ctx({ state: (t.states || [])[0] }), strictCheckboxes: true };
      expect(evaluate(rule.condition, empty), id).not.toBe(false);
    }
  });

  it("hides the deposit return clause once the lease says no deposit", () => {
    expect(hiddenTemplates(nv, ctx()).map((h) => h.templateId)).not.toContain("security-deposit-return-nv");
    const hidden = hiddenTemplates(nv, ctx({}, { securityDepositTaken: false })).map((h) => h.templateId);
    expect(hidden).toContain("security-deposit-return-nv");
  });
});
