const fs = require("fs");
const path = require("path");
const { CLAUSE_TEMPLATES } = require("./clauseTemplates");
const { CLAUSE_GUIDANCE } = require("./clauseGuidance");
const { aboutSummary, clauseEducation } = require("./clauseAbout");

const NOTE = /\[(Optional\b|Use (only|this|where|when|if|instead)\b)/;

describe("About this clause", () => {
  it("every linked education row exists in that state", () => {
    for (const [id, { education }] of Object.entries(CLAUSE_GUIDANCE)) {
      for (const [state, ids] of Object.entries(education)) {
        expect(clauseEducation(id, state).map((e) => e.id), id).toEqual(ids);
      }
    }
  });

  it("links each Colorado clause to the education on its subject", () => {
    expect(clauseEducation("appliances-excluded-co", "CO").map((e) => e.id)).toEqual(["edu-appliances-excluded-co"]);
    expect(clauseEducation("pet-policy", "CO").map((e) => e.id)).toContain("edu-pet-caps-co");
    expect(clauseEducation("deposit-forwarding-address-co", "CO").map((e) => e.id)).toEqual(["edu-deposit-surrender-notice-co"]);
  });

  it("gives nothing for another state, or a state that isn't one", () => {
    expect(clauseEducation("appliances-excluded-co", "WY")).toEqual([]);
    expect(clauseEducation("appliances-excluded-co", "../clauseTemplates")).toEqual([]);
    expect(clauseEducation("appliances-excluded-co", "constructor")).toEqual([]);
    expect(clauseEducation("no-such-clause", "CO")).toEqual([]);
  });

  it("keeps the Use when line off the clause text", () => {
    expect(aboutSummary("holdover-rate-co").useWhen).toMatch(/figure you can justify/);
    for (const t of CLAUSE_TEMPLATES.filter((c) => c.states.includes("CO"))) expect(t.bodyText, t.id).not.toMatch(NOTE);
  });

  it("has an education file for every state in the library", () => {
    const files = fs.readdirSync(path.join(__dirname, "education"));
    expect(files).toContain("shared.json");
    for (const s of new Set(CLAUSE_TEMPLATES.flatMap((t) => t.states))) expect(files).toContain(`${s}.json`);
  });

  it("names other clauses and rows by title, never by id (2026-11-27)", () => {
    const text = clauseEducation("guest-policy", "OR").map((r) => r.bodyText).join("\n");
    expect(text).toContain('"Guest Policy"');
    expect(text).not.toMatch(/`|\bedu-[a-z0-9-]+/);
  });
});
