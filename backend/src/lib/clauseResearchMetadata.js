// Research metadata for the currently-shipped clause templates in
// `clauseTemplates.js`, keyed by clause id. Generated from
// `lease-clauses-CO.csv` (repo root) — that CSV, plus
// `lease-clause-decision-log-CO.md`, is the actual source of truth; this
// file is a compiled, code-readable copy of three of its columns.
//
// Deliberately NOT merged onto the clause objects in `clauseTemplates.js`:
// that file's objects are spread directly into the `GET /api/clause-templates`
// response, and none of this is meant to be UI-facing. This file exists so
// future tooling (e.g. an automated check that no rent-related clause
// implies a rent increase more than once per 12 months, or that no clause
// anywhere shifts attorney fees to only one party — both standing rules
// from the CO research pass) has real structured data to run against,
// without that data leaking to the frontend.
//
// `ruleTypes` is an array (not a single value) because a clause can
// legitimately be more than one type at once — e.g. Use of Security Deposit
// is both REQUIRED (must exist) and PROHIBITED (bars charging for
// wear-and-tear/preexisting conditions) in the same clause. Values:
// REQUIRED / CONDITIONAL / PROHIBITED / CONSTRAINED / RECOMMENDED — see
// `lease-clause-decision-log-CO.md` §3 for what each means.
//
// `contentType` is always `LEASE_CLAUSE` here, since only LEASE_CLAUSE
// items from the research ever make it into `clauseTemplates.js` in the
// first place — LANDLORD_EDUCATION and OUT_OF_SCOPE findings from the same
// research live only in the decision log, not in shipped code.
//
// Only clauses currently shipped in `clauseTemplates.js` (the CO-verified,
// `is_active: TRUE` set) appear here. The ~51 clauses researched at a
// lower rigor for other states before this pass, and not currently shipped,
// keep their metadata in the CSV/decision log only — add them here if/when
// they're promoted into `clauseTemplates.js` after a real per-state pass.

const CLAUSE_RESEARCH_METADATA = {
  "rent-payment": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "late-fee": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself EDITED this session",
  },
  "returned-payments": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "due-at-signing": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "application-of-payments": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "late-fee-limit-co": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "UNCHANGED - pre-existing tag from before this project, not touched this session | Re-verified 2026-08-20: figures confirmed current and accurate, no change needed.",
  },
  "nsf-fee-limit-co": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "UNCHANGED - pre-existing tag from before this project, not touched this session | Re-verified 2026-08-20: figures confirmed current and accurate, no change needed.",
  },
  "subsidy-late-fee-co": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW - conditional add-on clause, only attaches for subsidy tenancies",
  },
  "security-deposit-use": {
    ruleTypes: ["REQUIRED", "PROHIBITED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself EDITED this session",
  },
  "security-deposit-return": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "security-deposit-return-co": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW - replaces the timeline portion of the old security-deposit-cap-co (the cap-amount portion became LANDLORD_EDUCATION, not lease text - flagging this split as a judgment call, not something explicitly re-confirmed with Taylor in this exact form)",
  },
  "security-deposit-installments-co": {
    ruleTypes: ["REQUIRED", "CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW - optional, used only when a tenant elects installments; due-at-signing left completely unchanged",
  },
  "residential-use-only": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "existing-condition": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "permitted-occupants": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "no-disturbance": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "smoking-policy": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "utilities-responsibility": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "utility-service-continuity": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "utility-payment-evidence": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "acceptable-payment-methods": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "tenant-maintenance": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "no-sublet-assign": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "no-alterations": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "joint-liability": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "services-utilities-provided": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "utilities-paid-by-landlord": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "appliances-included": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "landlord-maintenance": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "habitability-timeline-co": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "UNCHANGED - pre-existing tag from before this project, not touched this session | Re-verified 2026-08-20: figures confirmed current and accurate, no change needed.",
  },
  "subsidy-habitability-proration-co": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW - conditional add-on clause, only attaches for subsidy tenancies",
  },
  "habitability-notice-co": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW - OPTIONAL clause, not legally required, landlord chooses whether to attach",
  },
  "utility-allowance-cap-co": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW - optional add-on, attaches alongside utilities-paid-by-landlord, sourced from Taylor's own observation not the statute walk",
  },
  "landlords-access": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "landlords-access-co": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CORRECTED this session - the 24hr general-entry portion was incorrectly framed as \"required by Colorado law\"; confirmed via 6 independent sources that CO has no statewide general entry-notice statute (only the 48hr bed bug notice is actually mandated). 24hr kept as landlord policy, reframed accurately.",
  },
  "possession-delay": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "default-by-tenant": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself EDITED this session | CORRECTED 2026-08-20 (caught by Claude CLI review): added explicit carve-out that an unpaid late fee alone cannot trigger termination/eviction, consistent with CO law that a late fee is distinct from rent and cannot be grounds for eviction on its own.",
  },
  "surrender-end-of-term": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "early-termination": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself EDITED this session",
  },
  "holdover": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "month-to-month-notice-co-exempt": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW - replaces month-to-month-notice-co, Variant A",
  },
  "month-to-month-notice-co-covered": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW - replaces month-to-month-notice-co, Variant B. Which variant applies depends on a property-level exemption flag not yet built (see decision log SS13/Part 13 UX section)",
  },
  "dv-stalking-termination-co": {
    ruleTypes: ["CONDITIONAL"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW",
  },
  "notices": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "governing-law": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "severability": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "tenants-property-insurance": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "entire-agreement": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "addendum-precedence": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "electronic-signatures": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "pet-policy": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "pet-insurance-requirement": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "assistance-animal-accommodation": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW - universal/federal baseline (Fair Housing Act), CO tag added since the CO-specific override below was verified against it this session",
  },
  "assistance-animal-accommodation-co": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW",
  },
  "parking": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "assigned-parking-space": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "parking-vehicle-rules": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "storage-space": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "ev-charging-rights-co": {
    ruleTypes: ["REQUIRED", "PROHIBITED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW",
  },
  "ev-charging-requirements-co": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW",
  },
  "ev-charging-shared-area-co": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW",
  },
  "ev-charging-end-of-tenancy-co": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW",
  },
  "keys": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "guest-policy": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "guest-policy-day-limit": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "common-area-use": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "fire-safety-grilling": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "landscaping-irrigation": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "snow-removal": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "inspection-rights": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "lead-based-paint": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "hoa-compliance": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged",
  },
  "bed-bug-disclosure-co": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "UNCHANGED - pre-existing tag from before this project, not touched this session | Re-verified 2026-08-20: figures confirmed current and accurate, no change needed.",
  },
  "utility-submetering-disclosure-co": {
    ruleTypes: ["CONDITIONAL"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CORRECTED this session (2% or $10 flat, not both, not greater-of) - was incorrectly marked UNVERIFIED due to a script bug, fixed",
  },
  "radon-disclosure-co": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW - the actual CDPHE brochure PDF still needs to be sourced and attached as a product TODO, separate from this clause text",
  },
};

module.exports = { CLAUSE_RESEARCH_METADATA };
