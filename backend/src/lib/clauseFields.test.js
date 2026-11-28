const { CLAUSE_TEMPLATES } = require("./clauseTemplates");
const { PROPERTY_FIELDS, LEASE_FIELDS } = require("./clauseFields");
const { CATALOG, isVisible, validateFacts } = require("./factCatalog");
const { buildVariableContext, substituteVariables, clauseBlanks, clauseTerms, blanksHoldingPdf, SOURCE, FIELD_BY_VARIABLE, derivedFacts } = require("./clauseVariables");

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
        const where = q.showIf.states || q.states;
        if (where && parent?.states) expect(where.filter((s) => !parent.states.includes(s)), q.id).toEqual([]);
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
    // County is asked right in the blanks box and saved to the property (Taylor, 2026-11-27).
    expect(blanks[2]).toMatchObject({ target: "property", question: { id: "county" } });
    expect(blanks[3].question).toBeUndefined();
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

  it("holds the PDF for a blank in a Required clause, but only warns for a customized copy (Taylor, 2026-11-27)", () => {
    const t = CLAUSE_TEMPLATES.find((x) => x.id === "environmental-covenant-incorporation-co");
    expect(t.tag).toBe("REQUIRED");
    // Its questions show once the property has a recorded restriction.
    const held = blanksHoldingPdf([{ ...t, sourceTemplateId: t.id }], context({ environmentalRestriction: true }));
    expect(held.map((b) => b.label)).toContain("Where the environmental restriction is recorded");
    expect(blanksHoldingPdf([{ ...t, sourceTemplateId: null }], context({ environmentalRestriction: true }))).toEqual([]);
    // A hidden question is neither listed nor held.
    expect(blanksHoldingPdf([{ ...t, sourceTemplateId: t.id }], context({ environmentalRestriction: false }))).toEqual([]);
  });

  it("neither holds nor prints a line for a question its answers hide (New York's Good Cause notice, 2026-11-27)", () => {
    const t = CLAUSE_TEMPLATES.find((x) => x.id === "good-cause-notice-ny");
    const at = (facts) => buildVariableContext({ lease: { facts }, property: { state: "NY", address1: "1 A St", city: "Albany", zip: "12207", facts: {} }, entity: null, tenants: [] });
    const covered = at({ goodCauseExemptNotAdopted: "not_adopted" });
    expect(blanksHoldingPdf([{ ...t, sourceTemplateId: t.id }], covered).map((b) => b.question.id)).not.toContain("goodCauseExemptNotAdopted");
    expect(substituteVariables(t.bodyText, covered)).toContain("section 213 of the Real Property Law X;");
    // In New York City the exemptions are asked, and a hidden one no longer is.
    const nyc = at({ goodCauseExemptNotAdopted: "nyc" });
    expect(blanksHoldingPdf([{ ...t, sourceTemplateId: t.id }], nyc).map((b) => b.question.id)).toContain("goodCauseExemptSmallLandlord");
    expect(blanksHoldingPdf([{ ...t, sourceTemplateId: t.id }], nyc).map((b) => b.question.id)).not.toContain("goodCauseRentIncrease");
  });

  it("works out New York's Good Cause coverage from pointed questions and stored data (Taylor, 2026-11-27)", () => {
    const t = CLAUSE_TEMPLATES.find((x) => x.id === "good-cause-notice-ny");
    const no = Object.fromEntries(["goodCauseExemptSmallLandlord", "goodCauseExemptRegulated", "goodCauseExemptAffordable", "goodCauseExemptCareFacility", "goodCauseExemptHotel", "goodCauseExemptDormitory", "goodCauseExemptReligious", "goodCauseExemptHighRent", "goodCauseExemptCondoCoop", "goodCauseExemptNewBuilding"].map((id) => [id, "no"]));
    const ctx = (lf, pf, yearBuilt = 1950) => buildVariableContext({ lease: { facts: { seasonal: false, ...lf } }, property: { state: "NY", yearBuilt, facts: { county: "Kings", propertyType: "APARTMENT", unitsInBuilding: 20, ownerLivesInBuilding: false, ...pf } }, entity: null, tenants: [] });
    // Brooklyn is in New York City; the owner doesn't live there; not seasonal; not a manufactured home.
    expect(derivedFacts(ctx(no, {}))).toMatchObject({ goodCauseExemptNotAdopted: { value: "nyc" }, goodCauseExemptOwnerOccupied: { value: "no" }, goodCauseExemptSeasonal: { value: "no" }, goodCauseExemptManufacturedHome: { value: "no" }, goodCauseCovered: { value: "yes" } });
    expect(substituteVariables(t.bodyText, ctx(no, {}))).toMatch(/YES X\s*NO\n/);
    // A co-op is exempt (F); a building from 2015 is too (G).
    expect(derivedFacts(ctx({ ...no, goodCauseExemptCondoCoop: undefined }, { propertyType: "COOP" })).goodCauseCovered.value).toBe("no");
    expect(derivedFacts(ctx({ ...no, goodCauseExemptNewBuilding: undefined }, {}, 2015)).goodCauseCovered.value).toBe("no");
    // Until every exemption is answered, coverage isn't decided.
    expect(derivedFacts(ctx({}, {})).goodCauseCovered).toBeUndefined();
  });

  it("answers questions from data the app already stores, and asks only when it's missing (Taylor, 2026-11-27)", () => {
    const ctx = buildVariableContext({
      lease: { facts: { parkingAssigned: 1, parkingCharged: false, foreclosureUnderway: false, seasonal: true }, deposits: [{ type: "SECURITY", dateReceived: new Date("2026-03-02T00:00:00Z") }] },
      property: { state: "MD", yearBuilt: 1965, facts: { unitsInBuilding: 8, utilities: { gas: { whoPays: "NOT_PROVIDED" }, electric: { whoPays: "TENANT_DIRECT" }, water: { whoPays: "INCLUDED" }, sewer: { whoPays: "INCLUDED" } } } },
      entity: { contactPhone: "970-555-0100" },
      tenants: [{ role: "PRIMARY", firstName: "A", lastName: "B", pets: [{ type: "dog", name: "Max", breed: "Labrador" }] }],
    });
    expect(ctx.landlord_phone).toBe("970-555-0100");
    expect(ctx.approved_pets).toBe("a dog, Max, Labrador");
    expect(derivedFacts(ctx)).toMatchObject({
      depositReceivedDate: { value: "2026-03-02" },
      builtPreSeventyEight: { value: "yes" },
      buildingSixPlusUnits: { value: "yes" },
      multiUnitDwelling: { value: "yes" },
      gasPayer: { value: "none" },
      electricityPayer: { value: "tenant" },
      waterSewerPayer: { value: "landlord" },
      parkingProvided: { value: "yes" },
      parkingFeeCharged: { value: "no" },
      foreclosurePending: { value: "no" },
      seasonalNonPrimary: { value: "yes" },
    });
    expect(derivedFacts(ctx).landlordMobileNumber).toBeUndefined(); // not known to take texts
    const texts = buildVariableContext({
      lease: { facts: {} },
      property: { state: "MD", facts: { heatingFuel: "gas", utilities: { gas: { whoPays: "TENANT_DIRECT" } } } },
      entity: { contactPhone: "970-555-0100", contactPhoneTexts: true },
      tenants: [{ role: "PRIMARY", firstName: "A", lastName: "B", phone: "970-555-0101", phoneTexts: true }],
    });
    expect(derivedFacts(texts)).toMatchObject({ landlordMobileNumber: { value: "970-555-0100" }, tenantMobileNumber: { value: "970-555-0101" }, heatPayer: { value: "tenant" } });
    // Nothing stored: nothing derived, so each is asked as before.
    expect(derivedFacts(context())).toEqual({});
  });

  it("prints only the picked option, asking its follow-up once picked", () => {
    const t = CLAUSE_TEMPLATES.find((x) => x.id === "utility-submetering-disclosure-co");
    const text = (f) => substituteVariables(t.bodyText, context({}, f));
    expect(text({})).toContain("billing method is ____________.");
    expect(text({ allocationFee: "none" })).toContain("billing method is none.");
    expect(text({ allocationFee: "flat", allocationFeeFlat: 8 })).toContain("is a flat amount of $8.00 per month.");
    expect(blanksHoldingPdf([t], context()).map((b) => b.question.id)).toEqual(["allocationFee"]);
    expect(blanksHoldingPdf([t], context({}, { allocationFee: "flat" }))).toEqual([]);
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

describe("conclusions worked out from facts (2026-11-27)", () => {
  const { derivedFacts, buildVariableContext } = require("./clauseVariables");
  const d = (state, facts) => derivedFacts(buildVariableContext({ lease: { facts: {} }, property: { state, facts }, entity: null, tenants: [] }));
  it("prints Hawaii's accommodation promise unless the facts show HRS § 515-4(a)'s exemption", () => {
    expect(d("HI", { propertyType: "SINGLE_FAMILY" }).fairHousingExempt?.value).toBe("no");
    expect(d("HI", { propertyType: "ROOM_IN_OWNER_HOME" }).fairHousingExempt).toBeUndefined();
  });
  it("works out Iowa's carbon monoxide Yes from a fuel-burning heat source only", () => {
    expect(d("IA", { heatingFuel: "gas" }).coAlarmsRequired?.value).toBe("yes");
    expect(d("IA", { heatingFuel: "electric" }).coAlarmsRequired).toBeUndefined();
  });
  it("fills Colorado's exemption (b) for an owner-occupied single-family home", () => {
    expect(d("CO", { propertyType: "SINGLE_FAMILY", coOwnerResides: "here" }).forCauseExemption?.value).toBe("b");
  });
});
