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
// either one; this only shapes what gets auto-suggested/auto-attached. Since the CO retro
// (2026-10-01) the pair is also choice group `co-part13-coverage`, so attaching the second
// one to a lease that already has the first is refused (clauseChoiceGroups.js).
// Which C.R.S. § 38-12-1302(1) exemption a lease's facts show (read in HB 24-1098
// as signed, 2026-11-27; Taylor, 2026-11-27: worked out from facts, never picked):
// - (a) a short-term rental: leased for less than thirty consecutive days
//   (§ 38-12-1301(12)(a)), from the lease dates;
// - (b) the owner or master tenant lives in the premises, or the owner lives in
//   the adjacent property, as a primary residence, and the premises or that
//   adjacent property is a single-family home (with or without an accessory
//   dwelling unit), a duplex or a triplex, not four or more units.
// A family member living there is not the owner (the old radio button said it
// was). Anything else, or a fact not yet answered, is the covered default.
const SINGLE = ["SINGLE_FAMILY", "ADU", "ROOM_IN_OWNER_HOME"];
function smallBuilding(facts) {
  if (facts.unitsInBuilding != null && facts.unitsInBuilding !== "") return Number(facts.unitsInBuilding) <= 3;
  return SINGLE.includes(facts.propertyType) ? true : null;
}
function coForCauseExemption(property, lease) {
  const f = property?.facts || {};
  if (lease?.startDate && lease?.endDate && (new Date(lease.endDate) - new Date(lease.startDate)) / 86400000 < 30) return "SHORT_TERM_RENTAL";
  const resides = f.coOwnerResides || (f.ownerLivesInBuilding === true ? "here" : null);
  if (resides !== "here" && resides !== "next_door") return "STANDARD_LONG_TERM";
  if (smallBuilding(f) === true || (resides === "next_door" && f.coAdjacentSmall === true)) return "OWNER_OCCUPIED_OR_ADJACENT";
  return "STANDARD_LONG_TERM";
}

function isWrongForCauseVariant(templateId, forCauseEvictionExemption) {
  if (!FOR_CAUSE_VARIANT_TEMPLATE_IDS.includes(templateId)) return false;
  return templateId !== correctForCauseVariantId(forCauseEvictionExemption);
}

module.exports = {
  EXEMPT_TEMPLATE_ID,
  COVERED_TEMPLATE_ID,
  FOR_CAUSE_VARIANT_TEMPLATE_IDS,
  correctForCauseVariantId,
  coForCauseExemption,
  isWrongForCauseVariant,
};
