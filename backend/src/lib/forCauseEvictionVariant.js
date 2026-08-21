// Maps a Property's forCauseEvictionExemption value to which of the two
// month-to-month termination-notice clause templates actually applies —
// see lease-clause-decision-log-CO.md §8a Part 13. Both templates are
// tagged states: ["CO"], so without this they'd both show as valid options
// for every CO lease; the landlord shouldn't have to know C.R.S. § 38-12-1302
// well enough to pick the right one themselves.
const EXEMPT_TEMPLATE_ID = "month-to-month-notice-co-exempt";
const COVERED_TEMPLATE_ID = "month-to-month-notice-co-covered";
const FOR_CAUSE_VARIANT_TEMPLATE_IDS = [EXEMPT_TEMPLATE_ID, COVERED_TEMPLATE_ID];

// STANDARD_LONG_TERM (the Property model's default) and any unrecognized/unset value both
// resolve to the "covered" variant — the safer default, since it never asserts an exemption
// right the landlord may not actually have.
function correctForCauseVariantId(forCauseEvictionExemption) {
  if (forCauseEvictionExemption === "OWNER_OCCUPIED_OR_ADJACENT" || forCauseEvictionExemption === "SHORT_TERM_RENTAL") {
    return EXEMPT_TEMPLATE_ID;
  }
  return COVERED_TEMPLATE_ID;
}

// True if templateId is one of the two for-cause variants AND isn't the one this property
// actually needs — used to filter it out of an automated/suggested attach list. Deliberately
// NOT enforced on manual attach (POST /:id/clauses) — a landlord can still explicitly attach
// either one; this only shapes what gets auto-suggested/auto-attached.
function isWrongForCauseVariant(templateId, forCauseEvictionExemption) {
  if (!FOR_CAUSE_VARIANT_TEMPLATE_IDS.includes(templateId)) return false;
  return templateId !== correctForCauseVariantId(forCauseEvictionExemption);
}

module.exports = {
  EXEMPT_TEMPLATE_ID,
  COVERED_TEMPLATE_ID,
  FOR_CAUSE_VARIANT_TEMPLATE_IDS,
  correctForCauseVariantId,
  isWrongForCauseVariant,
};
