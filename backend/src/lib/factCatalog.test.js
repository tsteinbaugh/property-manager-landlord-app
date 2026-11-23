const { CATALOG, isVisible, unansweredQuestions, validateFacts, mergeFacts } = require("./factCatalog");

describe("factCatalog", () => {
  it("gives every question a unique id within its set", () => {
    for (const questions of Object.values(CATALOG)) {
      const ids = questions.map((q) => q.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it("points every showIf at a question in the same set", () => {
    for (const questions of Object.values(CATALOG)) {
      const ids = new Set(questions.map((q) => q.id));
      for (const q of questions.filter((x) => x.showIf)) for (const id of [].concat(q.showIf.id)) expect(ids.has(id)).toBe(true);
    }
  });

  it("shows state questions only in their states", () => {
    const mold = CATALOG.property.find((q) => q.id === "mold");
    expect(isVisible(mold, ["MT"], {})).toBe(true);
    expect(isVisible(mold, ["CO"], {})).toBe(false);
  });

  it("shows a follow-up only when its answer calls for it", () => {
    const units = CATALOG.property.find((q) => q.id === "unitsInBuilding");
    expect(isVisible(units, ["CO"], {})).toBe(false);
    expect(isVisible(units, ["CO"], { propertyType: "SINGLE_FAMILY" })).toBe(false);
    expect(isVisible(units, ["CO"], { propertyType: "CONDO" })).toBe(true);
  });

  it("counts a No answer as answered and blank as unanswered", () => {
    const blank = unansweredQuestions("property", ["CO"], {}).map((q) => q.id);
    expect(blank).toContain("environmentalRestriction");
    const answered = unansweredQuestions("property", ["CO"], { environmentalRestriction: false }).map((q) => q.id);
    expect(answered).not.toContain("environmentalRestriction");
    expect(blank).not.toContain("managerPhone");
    expect(blank).not.toContain("mold");
  });

  it("treats utilities as unanswered until every utility has an answer", () => {
    const some = { utilities: { water: { whoPays: "INCLUDED" } } };
    expect(unansweredQuestions("property", ["CO"], some).map((q) => q.id)).toContain("utilities");
    const all = { utilities: Object.fromEntries(["electric", "gas", "water", "sewer", "trash"].map((k) => [k, { whoPays: "TENANT_DIRECT" }])) };
    expect(unansweredQuestions("property", ["CO"], all).map((q) => q.id)).not.toContain("utilities");
  });

  it("validates answers and merges them, with null clearing one", () => {
    expect(validateFacts("property", { propertyType: "CONDO" }).facts).toEqual({ propertyType: "CONDO" });
    expect(validateFacts("property", []).error).toBeTruthy();
    expect(validateFacts("lease", { propertyType: "CONDO" }).error).toBeTruthy();
    expect(mergeFacts({ a: 1, b: 2 }, { a: null, c: 3 })).toEqual({ b: 2, c: 3 });
  });
});
