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

export const FOR_CAUSE_EVICTION_EXEMPTION_OPTIONS = [
  {
    value: "OWNER_OCCUPIED_OR_ADJACENT",
    label: "I (or a family member) live in this property, or in a property directly next door to it, as my own home",
  },
  {
    value: "SHORT_TERM_RENTAL",
    label: "This is a short-term rental (Airbnb/VRBO-style), not a long-term residential lease",
  },
  { value: "STANDARD_LONG_TERM", label: "Neither — this is a standard long-term rental" },
];
