// "About this clause" (Taylor, 2026-11-24): when to use a provided clause and the
// landlord education linked to it in the lease's state. For the landlord only;
// it never prints in the lease.
const fs = require("fs");
const path = require("path");
const { CLAUSE_GUIDANCE } = require("./clauseGuidance");

const cache = new Map();

function educationFile(name) {
  if (!cache.has(name)) {
    const file = path.join(__dirname, "education", `${name}.json`);
    const rows = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : [];
    cache.set(name, new Map(rows.map((r) => [r.id, r])));
  }
  return cache.get(name);
}

// The list's summary: the Use when line, and the states with education.
function aboutSummary(templateId) {
  const guidance = CLAUSE_GUIDANCE[templateId];
  if (!guidance) return {};
  return {
    ...(guidance.useWhen && { useWhen: guidance.useWhen }),
    educationStates: Object.keys(guidance.education),
  };
}

// Education text names other clauses and rows by id in backticks
// (`guest-policy`, `edu-required-fees-or`); the landlord sees the title in
// quotes instead (2026-11-27). An id the app doesn't know loses its backticks.
let titles = null;
function readableIds(text, state) {
  if (!titles) titles = new Map(require("./clauseTemplates").CLAUSE_TEMPLATES.map((t) => [t.id, t.title]));
  const titleOf = (id) => titles.get(id) || educationFile(state).get(id)?.title || educationFile("shared").get(id)?.title;
  return text
    .replace(/`([a-z0-9]+(?:-[a-z0-9]+)+)`/g, (m, id) => (titleOf(id) ? `"${titleOf(id)}"` : id))
    .replace(/\b[a-z0-9]+(?:-[a-z0-9]+)+\b/g, (id) => (titleOf(id) ? `"${titleOf(id)}"` : id));
}

function clauseEducation(templateId, state) {
  const links = CLAUSE_GUIDANCE[templateId]?.education || {};
  // Only a state the map names is ever read, so `state` can't reach another file.
  if (!Object.hasOwn(links, state)) return [];
  return links[state]
    .map((id) => educationFile(state).get(id) || educationFile("shared").get(id))
    .filter(Boolean)
    .map(({ id, title, bodyText }) => ({ id, title, bodyText: readableIds(bodyText, state) }));
}

module.exports = { aboutSummary, clauseEducation };
