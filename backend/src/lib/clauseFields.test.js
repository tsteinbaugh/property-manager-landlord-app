const { CLAUSE_TEMPLATES } = require("./clauseTemplates");
const { PROPERTY_FIELDS, LEASE_FIELDS } = require("./clauseFields");
const { CATALOG, isVisible, validateFacts } = require("./factCatalog");
const { buildVariableContext, substituteVariables, clauseBlanks, clauseTerms, unpickedChoices, SOURCE, FIELD_BY_VARIABLE } = require("./clauseVariables");

const used = new Set(CLAUSE_TEMPLATES.flatMap((t) => [...t.bodyText.matchAll(/\{\{\s*#?([a-z_]+)(?::[^}]*)?\s*\}\}/g)].map((m) => m[1])));
const inOptions = [...PROPERTY_FIELDS, ...LEASE_FIELDS].flatMap((q) => (q.options || []).flatMap((o) => [...(o.print || "").matchAll(/\{\{([a-z_]+)\}\}/g)].map((m) => m[1])));
const context = (propertyFacts = {}, leaseFacts = {}) =>
  buildVariableContext({ lease: { facts: leaseFacts }, property: { facts: propertyFacts }, entity: null, tenants: [] });

describe("clauseFields", () => {
  it("gives every variable in the provided clauses a field or a known source", () => {
    const always = ["occupant_names", "myhazards_url"];
    const unknown = [...used].filter((v) => !FIELD_BY_VARIABLE[v] && !SOURCE[v] && !always.includes(v));
    expect(unknown).toEqual([]);
  });

  it("only has fields some clause uses, each filling a variable once", () => {
    const vars = [...PROPERTY_FIELDS, ...LEASE_FIELDS].flatMap((q) => q.vars);
    expect(new Set(vars).size).toBe(vars.length);
    expect(vars.filter((v) => !used.has(v) && !inOptions.includes(v))).toEqual([]);
    for (const q of [...PROPERTY_FIELDS, ...LEASE_FIELDS]) expect(q.states.length, q.id).toBeGreaterThan(0);
  });

  it("asks each follow-up's question in every state the field shows in", () => {
    for (const [target, fields] of [["property", PROPERTY_FIELDS], ["lease", LEASE_FIELDS]]) {
      for (const q of fields.filter((x) => x.showIf)) {
        const parent = CATALOG[target].find((x) => x.id === q.showIf.id);
        if (parent.states) expect(q.states.filter((s) => !parent.states.includes(s)), q.id).toEqual([]);
      }
    }
  });

  it("never types a dollar sign before a variable that prints its own", () => {
    expect(CLAUSE_TEMPLATES.filter((t) => t.bodyText.includes("${{")).map((t) => t.id)).toEqual([]);
  });

  it("fills variables with formatted answers", () => {
    const ctx = context({ taxBlock: "12" }, { returnedPaymentFee: 25, guarantyEnd: "2027-03-01", renewalNoticeDays: 0 });
    expect(ctx.nsf_fee).toBe("$25.00");
    expect(ctx.returned_payment_fee).toBe("$25.00");
    expect(ctx.guaranty_end_date).toBe("3/1/2027");
    expect(ctx.renewal_notice_days).toBe("0");
    expect(ctx.block).toBe("12");
  });

  it("prints a line for a blank, named on screen", () => {
    expect(substituteVariables("Pay {{nsf_fee}}.", context())).toBe("Pay ____________.");
    expect(substituteVariables("Pay {{nsf_fee}}.", context(), { named: true })).toBe("Pay ____________ [Returned payment fee].");
  });

  it("lists each blank once with its clauses, and each clause's own terms", () => {
    const clauses = [
      { title: "A", bodyText: "{{nsf_fee}} {{lien_release_days}}" },
      { title: "B", bodyText: "{{returned_payment_fee}} {{county}} {{typo_here}}" },
    ];
    const blanks = clauseBlanks(clauses, context());
    expect(blanks.map((b) => b.label)).toEqual(["Returned payment fee", "Days to release a lien", "County", "typo here"]);
    expect(blanks[0].clauses).toEqual(["A", "B"]);
    expect(blanks[2].question).toBeUndefined();
    expect(clauseBlanks(clauses, context({ county: "Weld" }, { returnedPaymentFee: 20 })).map((b) => b.label)).toEqual(["Days to release a lien", "typo here"]);
    expect(clauseTerms(clauses[0].bodyText).map((q) => q.id)).toEqual(["lienReleaseDays"]);
  });

  it("answers late fee blanks into the lease's own fields", () => {
    const blanks = clauseBlanks([{ title: "Late Fee", bodyText: "{{late_fee_amount}} {{late_fee_grace_days}}" }], context());
    expect(blanks.map((b) => [b.target, b.question.id])).toEqual([["leaseField", "lateFeeAmount"], ["leaseField", "lateFeeGraceDays"]]);
  });

  it("validates money and dates, and shows charged-back fields only when a utility is charged back", () => {
    expect(validateFacts("lease", { returnedPaymentFee: 12.5, guarantyEnd: "2027-03-01" }).error).toBeUndefined();
    expect(validateFacts("lease", { returnedPaymentFee: -1 }).error).toBeTruthy();
    expect(validateFacts("lease", { guarantyEnd: "soon" }).error).toBeTruthy();
    const q = CATALOG.property.find((x) => x.id === "utilityAvgBill");
    expect(isVisible(q, ["TX"], { utilities: { water: { whoPays: "INCLUDED" } } })).toBe(false);
    expect(isVisible(q, ["TX"], { utilities: { water: { whoPays: "CHARGED_BACK" } } })).toBe(true);
  });

  it("prints only the picked option, asking its follow-up once picked", () => {
    const t = CLAUSE_TEMPLATES.find((x) => x.id === "utility-submetering-disclosure-co");
    const text = (f) => substituteVariables(t.bodyText, context({}, f));
    expect(text({})).toContain("billing method is ____________.");
    expect(text({ allocationFee: "none" })).toContain("billing method is none.");
    expect(text({ allocationFee: "flat", allocationFeeFlat: 8 })).toContain("is a flat amount of $8.00 per month.");
    expect(unpickedChoices([t], context()).map((b) => b.question.id)).toEqual(["allocationFee"]);
    expect(unpickedChoices([t], context({}, { allocationFee: "flat" }))).toEqual([]);
    expect(clauseBlanks([t], context({}, { allocationFee: "flat" })).map((b) => b.label)).toContain("Fee per month");
    expect(clauseTerms(t.bodyText).map((q) => q.id)).toEqual(["utilityAllocationMethod", "allocationFee", "allocationFeeFlat"]);
  });

  it("prints a passage only for its answer, and asks only what still prints", () => {
    const t = CLAUSE_TEMPLATES.find((x) => x.id === "portable-cooling-restriction-co");
    const text = (f) => substituteVariables(t.bodyText, context({}, f));
    const labels = (f) => clauseBlanks([t], context({}, f)).map((b) => b.question.id);
    expect(labels({})).toEqual(["coolingRestricted"]);
    expect(text({ coolingRestricted: "no" })).toContain("unit - at the property. Landlord places no restriction on portable cooling devices. Nothing in this section");
    expect(labels({ coolingRestricted: "no" })).toEqual([]);
    expect(labels({ coolingRestricted: "yes" })).toEqual(["coolingRestriction", "coolingGround", "coolingCommonSpace"]);
    const yes = { coolingRestricted: "yes", coolingRestriction: "R", coolingGround: "code", coolingCommonSpace: "does not", communityCooling: "Library" };
    expect(text(yes)).toContain("Landlord does not intend to operate one or more common spaces at the property that will be cooled and available to Tenant during an extreme heat event. Information about");
    expect(text({ ...yes, coolingCommonSpace: "does", coolingSpaces: "Lobby" })).toContain("extreme heat event: Lobby. Where Landlord");
    for (const f of [{}, yes, { coolingRestricted: "no" }]) expect(text(f)).not.toMatch(/\{\{/);
  });

  it("prints the portal answer in both languages", () => {
    const t = CLAUSE_TEMPLATES.find((x) => x.id === "habitability-notice-co");
    const text = substituteVariables(t.bodyText, context({}, { noticePortal: "none" }));
    expect(text).toContain("portal at: not applicable.");
    expect(text).toContain("en: no aplica.");
  });

  it("refuses an answer over the state's legal limit, and says why", () => {
    expect(validateFacts("lease", { depositReturnDays: 75 }, "CO").error).toBe("Colorado allows no more than 60 days to return a security deposit.");
    expect(validateFacts("lease", { depositReturnDays: 60 }, "CO").error).toBeUndefined();
    expect(validateFacts("lease", { allocationFeeFlat: 15 }, "CO").error).toContain("$10.00");
  });

  it("leaves no bracketed prompt in a Colorado-only clause", () => {
    expect(CLAUSE_TEMPLATES.filter((t) => t.states?.join() === "CO" && t.bodyText.includes("[")).map((t) => t.id)).toEqual([]);
  });
});
