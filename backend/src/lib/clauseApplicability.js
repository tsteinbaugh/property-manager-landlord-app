// Provided clauses the law requires only in some situations, with the
// property fact that decides whether this lease needs one. "Add my default
// clauses" includes such a clause whenever its rule says it applies, and the
// landlord can't untick it as a default (Taylor, 2026-11-21). This is the
// start of automatic applicability (backlog); each rule reads facts the app
// already stores.
//
// A missing fact counts as "applies": leaving out a required disclosure is
// the worse mistake than including one that turns out unnecessary.

// Federal lead-based paint disclosure: "target housing" is housing built
// before 1978 (42 U.S.C. § 4851b; 24 C.F.R. § 35.86; 40 C.F.R. § 745.103). The
// zero-bedroom and elderly or disabled housing exceptions aren't modeled yet,
// so those properties still get the clause, which is harmless.
function builtBefore1978OrUnknown(property) {
  const year = property?.yearBuilt;
  return year === null || year === undefined || year < 1978;
}

const LEAD_NOTE =
  "Required by law for homes built before 1978, so it's added automatically when the property was built before 1978 or its year built isn't entered.";

const RULES = {
  "lead-based-paint": { applies: builtBefore1978OrUnknown, note: LEAD_NOTE },
  "lead-based-paint-dc": { applies: builtBefore1978OrUnknown, note: LEAD_NOTE },
  "lead-disclosure-ri": { applies: builtBefore1978OrUnknown, note: LEAD_NOTE },
};

// True if templateId has an applicability rule and it applies to property.
function requiredForProperty(templateId, property) {
  const rule = RULES[templateId];
  return Boolean(rule && rule.applies(property));
}

function applicabilityNote(templateId) {
  return RULES[templateId]?.note || null;
}

module.exports = { requiredForProperty, applicabilityNote, APPLICABILITY_RULE_IDS: Object.keys(RULES) };
