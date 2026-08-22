// Research metadata for the currently-shipped clause templates in
// `clauseTemplates.js`, keyed by clause id. Generated from
// `lease-clauses.csv` (repo root, covers CO + WY so far) — that CSV, plus
// `lease-clause-decision-log-CO.md` and `lease-clause-decision-log-WY.md`,
// is the actual source of truth; this file is a compiled, code-readable
// copy of three of its columns.
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
// Only clauses currently shipped in `clauseTemplates.js` (the CO/WY-verified,
// `is_active: TRUE` set) appear here. The ~51 clauses researched at a
// lower rigor for other states before this pass, and not currently shipped,
// keep their metadata in the CSV/decision log only — add them here if/when
// they're promoted into `clauseTemplates.js` after a real per-state pass.

const CLAUSE_RESEARCH_METADATA = {
  "rent-payment": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "late-fee": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself EDITED this session WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "returned-payments": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "due-at-signing": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "application-of-payments": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
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
  "nonrefundable-deposit-notice-wy": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1207. Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-12/section-1-21-1207/. Genuine REQUIRED disclosure — satisfies bucket-test criterion #1. Note: statute requires this be stated in the agreement AND separately, in writing, at the time the deposit is collected — this clause satisfies the first prong only; the second is a process step, logged separately as edu-nonrefundable-deposit-separate-notice-wy so it isn't lost.",
  },
  "security-deposit-return-wy": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1208(a). Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-12/section-1-21-1208/. Mechanics differ materially from CO's security-deposit-use clause (different timelines, different extension trigger) — drafted independently rather than adapted from the CO version.",
  },
  "utility-deposit-return-wy": {
    ruleTypes: ["CONDITIONAL"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1208(b). Source: same as security-deposit-return-wy. Marked CONDITIONAL — only applicable where Landlord actually collects and separately identifies a utility deposit; not all Steinoak WY leases will use this clause.",
  },
  "unpaid-damages-interest-wy": {
    ruleTypes: ["CONSTRAINED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1211(b). Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-12/section-1-21-1211/ (also cross-checked via FindLaw mirror). CONSTRAINED — 10% rate is statutory, not Landlord's choice. 1211(a) (sheriff removal of possessions after a court eviction order) is OUT_OF_SCOPE — court/eviction-process mechanics, not drafted.",
  },
  "residential-use-only": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "existing-condition": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 via cross-check pass (gap-discovery source #2, WY decision log §7): bodyText is a generic contractual acknowledgment with no CO-specific statutory reference, and nothing in WY Article 12/13 or elsewhere conflicts with or modifies this kind of representation. Extended to WY rather than marked universal outright, per the standing rule that universal status must be explicitly earned per-state, not assumed from two states agreeing.",
  },
  "permitted-occupants": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "no-disturbance": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "smoking-policy": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "utilities-responsibility": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "utility-service-continuity": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "utility-payment-evidence": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "acceptable-payment-methods": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "tenant-maintenance": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "no-sublet-assign": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "no-alterations": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "joint-liability": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "renter-duties-wy": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1204(a)(i)-(viii). Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-12/section-1-21-1204/.",
  },
  "prohibited-acts-renter-wy": {
    ruleTypes: ["PROHIBITED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1205(a)(i)-(iii). Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-12/section-1-21-1205/. Note absence: WY has no statutory advance-notice-for-entry requirement — this clause only bars the tenant from unreasonably refusing entry, it does not itself establish a landlord notice obligation. Flagged in decision log §2 as an open absence to verify.",
  },
  "services-utilities-provided": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "utilities-paid-by-landlord": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "appliances-included": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "landlord-maintenance": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
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
  "habitability-baseline-wy": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1202(a),(b). Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-12/section-1-21-1202/. Note: (d) of this section allows duties to be reassigned/modified by explicit written agreement — logged separately as edu-habitability-modifiable-wy rather than folded into this clause, since most leases won't modify the baseline. (a) also carries a seasonal-rental-unit carve-out (e.g. summer cabins without utilities) — N/A for typical Steinoak use case, not drafted.",
  },
  "landlords-access": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
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
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "default-by-tenant": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself EDITED this session | CORRECTED 2026-08-20 (caught by Claude CLI review): added explicit carve-out that an unpaid late fee alone cannot trigger termination/eviction, consistent with CO law that a late fee is distinct from rent and cannot be grounds for eviction on its own. WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "surrender-end-of-term": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "early-termination": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself EDITED this session WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "holdover": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
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
  "dv-safe-homes-wy": {
    ruleTypes: ["CONDITIONAL"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1303(a),(b),(d). Statutorily-accurate/defense-framed version — SELECTED variant per Taylor's decision 2026-08-21 (chose over the proactive-grant alternative, see dv-safe-homes-proactive-wy). Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-13/section-1-21-1303/. verified_date: 2026-08-21. verified_by: Taylor + session research.",
  },
  "abandoned-property-wy": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1210. Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-12/section-1-21-1210/. Distinct enough from a generic surrender/holdover clause to get its own id rather than folding into an existing one. Notice-service methods (certified mail / personal service / newspaper publication) logged separately as edu-abandoned-property-notice-methods-wy, since those are process mechanics for Landlord to follow, not tenant-facing lease text.",
  },
  "notices": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "governing-law": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "severability": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "tenants-property-insurance": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "entire-agreement": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "addendum-precedence": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "electronic-signatures": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "pet-policy": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "pet-insurance-requirement": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "assistance-animal-accommodation": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW - universal/federal baseline (Fair Housing Act), CO tag added since the CO-specific override below was verified against it this session WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "assistance-animal-accommodation-co": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "NEW",
  },
  "assistance-animal-accommodation-wy": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "WY added 2026-08-21, backlog item #6 from session 5's full-library audit (§11) — this one resolved to a genuine WY-specific finding, not an absence. Wyoming has its own assistance-animal-fraud misdemeanor statute (Wyo. Stat. § 35-13-207, enacted via 2017 House Bill 114, effective July 1 2017), punishable by a fine up to $750. Bill text pulled directly from wyoleg.gov (primary source) to confirm wording, corroborated by 5 independent secondary sources. Lives in Title 35, Chapter 13 — outside Title 1 entirely, so this is also a genuine 4th-gap-discovery-source find that the session-4 outside-Title-1 sweep missed. Structured parallel to assistance-animal-accommodation-co: same base text, WY-specific penalty citation substituted for CO's. Supersedes the generic assistance-animal-accommodation clause for WY.",
  },
  "parking": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "assigned-parking-space": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "parking-vehicle-rules": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "storage-space": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
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
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "guest-policy": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "guest-policy-day-limit": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "common-area-use": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "fire-safety-grilling": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "landscaping-irrigation": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "snow-removal": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "inspection-rights": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "lead-based-paint": {
    ruleTypes: ["REQUIRED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
  },
  "hoa-compliance": {
    ruleTypes: ["RECOMMENDED"],
    contentType: "LEASE_CLAUSE",
    verificationStatus: "VERIFIED",
    notes: "CO added - verified this session (statute walk + full-library audit; content itself unchanged WY added 2026-08-21 (full-library cross-check pass): generic mechanics, no CO-specific statutory language or number, confirmed no conflict with WY findings from this project.",
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
