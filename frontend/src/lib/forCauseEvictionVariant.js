// Frontend mirror of backend/src/lib/forCauseEvictionVariant.js — see that file's comment for
// the full "why." Kept as a small duplicated helper (same pattern as other frontend/backend
// pairs in this app, e.g. clauseGroups) rather than a shared package, since frontend and
// backend are otherwise fully independent here.
const EXEMPT_TEMPLATE_ID = "month-to-month-notice-co-exempt";
const COVERED_TEMPLATE_ID = "month-to-month-notice-co-covered";
const FOR_CAUSE_VARIANT_TEMPLATE_IDS = [EXEMPT_TEMPLATE_ID, COVERED_TEMPLATE_ID];

export function correctForCauseVariantId(forCauseEvictionExemption) {
  if (forCauseEvictionExemption === "OWNER_OCCUPIED_OR_ADJACENT" || forCauseEvictionExemption === "SHORT_TERM_RENTAL") {
    return EXEMPT_TEMPLATE_ID;
  }
  return COVERED_TEMPLATE_ID;
}

export function isWrongForCauseVariant(templateId, forCauseEvictionExemption) {
  if (!FOR_CAUSE_VARIANT_TEMPLATE_IDS.includes(templateId)) return false;
  return templateId !== correctForCauseVariantId(forCauseEvictionExemption);
}

// Which C.R.S. § 38-12-1302(1) exemption the facts show; mirrors the backend's
// coForCauseExemption (worked out, never picked; 2026-11-27).
const SINGLE = ["SINGLE_FAMILY", "ADU", "ROOM_IN_OWNER_HOME"];
function smallBuilding(facts) {
  if (facts.unitsInBuilding != null && facts.unitsInBuilding !== "") return Number(facts.unitsInBuilding) <= 3;
  return SINGLE.includes(facts.propertyType) ? true : null;
}
export function coForCauseExemption(property, lease) {
  const f = property?.facts || {};
  if (lease?.startDate && lease?.endDate && (new Date(lease.endDate) - new Date(lease.startDate)) / 86400000 < 30) return "SHORT_TERM_RENTAL";
  const resides = f.coOwnerResides || (f.ownerLivesInBuilding === true ? "here" : null);
  if (resides !== "here" && resides !== "next_door") return "STANDARD_LONG_TERM";
  if (smallBuilding(f) === true || (resides === "next_door" && f.coAdjacentSmall === true)) return "OWNER_OCCUPIED_OR_ADJACENT";
  return "STANDARD_LONG_TERM";
}
