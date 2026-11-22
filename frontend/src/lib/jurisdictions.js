// The jurisdictions the clause library covers, in display order: the 50
// states alphabetized by postal code, then DC, then the five territories.
const STATES = {
  AK: "Alaska", AL: "Alabama", AR: "Arkansas", AZ: "Arizona", CA: "California", CO: "Colorado",
  CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia", HI: "Hawaii", IA: "Iowa",
  ID: "Idaho", IL: "Illinois", IN: "Indiana", KS: "Kansas", KY: "Kentucky", LA: "Louisiana",
  MA: "Massachusetts", MD: "Maryland", ME: "Maine", MI: "Michigan", MN: "Minnesota", MO: "Missouri",
  MS: "Mississippi", MT: "Montana", NC: "North Carolina", ND: "North Dakota", NE: "Nebraska",
  NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico", NV: "Nevada", NY: "New York", OH: "Ohio",
  OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VA: "Virginia", VT: "Vermont",
  WA: "Washington", WI: "Wisconsin", WV: "West Virginia", WY: "Wyoming",
};
const DISTRICT = { DC: "District of Columbia" };
const TERRITORIES = {
  AS: "American Samoa", GU: "Guam", MP: "Northern Mariana Islands", PR: "Puerto Rico", VI: "Virgin Islands",
};

export const JURISDICTION_NAMES = { ...STATES, ...DISTRICT, ...TERRITORIES };

const ORDER = [...Object.keys(STATES).sort(), ...Object.keys(DISTRICT), ...Object.keys(TERRITORIES).sort()];
const RANK = Object.fromEntries(ORDER.map((code, i) => [code, i]));

// Sorts postal codes into display order; an unknown code goes last, alphabetically.
export function sortJurisdictions(codes) {
  return [...codes].sort((a, b) => (RANK[a] ?? ORDER.length) - (RANK[b] ?? ORDER.length) || a.localeCompare(b));
}

// A clause title as the lease builder's picker shows it: without a trailing
// "(Optional)" or a jurisdiction's own name, e.g. "Late Fee (District of
// Columbia)" becomes "Late Fee". Other parentheticals ("Cook County",
// "Separate Document") say which variant a clause is, so they stay.
const NAME_PATTERN = new RegExp(
  `\\s*\\((?:Optional|U\\.S\\. Virgin Islands|${Object.values(JURISDICTION_NAMES).join("|")})\\)`,
  "g",
);
export function pickerTitle(title) {
  return title.replace(NAME_PATTERN, "").replace(/, Optional\)/g, ")").trim() || title;
}

// Display order for clauses within one group: by title (ignoring a trailing
// jurisdiction name), then by state, so one clause's versions for different
// states sit together. Members of a choice group (pick-one alternatives) are
// kept next to each other, under the alphabetically first member's title.
export function sortClausesForDisplay(items, allTemplates = []) {
  const anchors = {};
  for (const t of allTemplates) {
    if (!t.choiceGroup) continue;
    const base = pickerTitle(t.title).toLowerCase();
    if (!(t.choiceGroup in anchors) || base < anchors[t.choiceGroup]) anchors[t.choiceGroup] = base;
  }
  const firstStateRank = (item) => {
    const codes = sortJurisdictions(item.states || []);
    return codes.length ? (RANK[codes[0]] ?? ORDER.length) : -1;
  };
  const key = (item) => {
    const base = pickerTitle(item.title).toLowerCase();
    return [item.choiceGroup ? anchors[item.choiceGroup] ?? base : base, base, firstStateRank(item), item.title];
  };
  return [...items].sort((a, b) => {
    const ka = key(a), kb = key(b);
    for (let i = 0; i < ka.length; i++) {
      if (ka[i] < kb[i]) return -1;
      if (ka[i] > kb[i]) return 1;
    }
    return 0;
  });
}
