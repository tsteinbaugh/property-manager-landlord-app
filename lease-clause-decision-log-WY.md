## Decision Log: Clause Library Verification Workflow — Wyoming (State #2)

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL) is closed. **No re-audit of any completed state is planned, now or later.** "Re-audit" means re-scrubbing everything for a state, and that won't happen. Targeted work is welcome: going back to re-verify or fix a specific row or topic in a completed state (a scalpel, not a hammer) needs no special justification; just say what and why. The word "re-audit" throughout these files refers to the one-time settings re-run of Aug–Sep 2026, which is finished. Older phrases such as "flag for the X re-audit", "live item for the X re-audit", "when X is next revisited" or "screen the completed states on their next revisit" are historical and dead: they are not a queue. Do not propose, plan or mention a re-audit, and do not park anything "for the re-audit". If something specific in a completed state looks wrong or unverified, say what and why and propose the targeted fix.

**Date started:** 2026-08-21
**Status:** ✅ Closed out 2026-08-21 — see §13 for final status and handoff to state #3 (Kansas)
**Companion document:** `decision-log-clause-library-verification.md` (Colorado, state #1) — same schema, same methodology, same standing rules. This file only records what's specific to Wyoming: statute findings, clause decisions, open items, and any process learnings that came out of applying the CO-built methodology to a second state.

---

### ⚠️ SCOPE BOUNDARY — READ BEFORE ASSUMING "WYOMING IS DONE"

Wyoming was chosen specifically to test whether the process, schema, and screening rules built during the Colorado pass generalize — **not** to stress-test against municipal-ordinance complexity (that harder problem stays deferred, same as Colorado's Denver/Boulder gap). Wyoming has no equivalent municipal-layering concern raised yet; that hasn't been checked, just not flagged as a known issue the way Denver/Boulder was for CO.

As of this entry, **all 11 sections of Article 12 and all 4 sections of Article 13 have been read in full from primary source and drafted into clauses or education items.** What remains open: the absences listed in §2 (deposit cap, entry-notice, rent-increase-frequency, mobile-home-park, anti-retaliation) are still only at secondary-source-confirmed status, not full proof-of-absence — and no other Wyoming title/chapter has been checked yet for landlord-relevant law living outside Title 1 (the 4th gap-discovery source, per the CO methodology) beyond the Fair Housing Act already confirmed. Do not treat Wyoming as fully verification-complete based on this log until those are closed out.

**No attorney has reviewed any of this.** Same posture as the Colorado log.

---

### 1. Why Wyoming, and what "done" needs to mean here

Selected as the second state specifically *because* it's thin — the goal is proving the schema and three-bucket test hold up when there's comparatively little law to sort, before testing them against a dense state. Wyoming's landlord-tenant law lives almost entirely in one place: **Title 1, Chapter 21** (the Code of Civil Procedure — landlord-tenant law is procedural in Wyoming, not property law the way Colorado's Title 38 is).

Three relevant Articles, one dead end:
- **Article 12 — Residential Rental Property** (W.S. 1-21-1201–1211): the core substantive law, 11 sections, no Parts/subdivisions.
- **Article 13 — Wyoming Safe Homes Act** (W.S. 1-21-1301–1304): domestic abuse/sexual violence tenant protections.
- **Article 10 — Forcible Entry and Detainer** (W.S. 1-21-1001 et seq.): eviction procedure — OUT_OF_SCOPE, consistent with the Legal Tracker deferral established in the CO log.
- **Title 34, Chapter 2** — despite some landlord-blog summaries calling this a second "Landlord and Tenant" code, it's actually general deeds/mortgages/conveyance law. Only two sections are tenancy-relevant: §34-2-128 (no implied tenancy except by sufferance) and §34-2-129 (an expired lease can't self-renew without a new signed writing). Flagging this because it's an easy mistake to inherit uncritically from secondary sources — worth remembering as a caution for future states too.

Also confirmed: **Title 40, Chapter 26 — Wyoming Fair Housing Act** (§§40-26-101–145). Mirrors federal protected classes, no WY-added classes. **OUT_OF_SCOPE** — application-stage, same bucket logic as Colorado's Title 24 anti-discrimination finding.

---

### 2. Absences — brought to full proof-of-absence standard (2026-08-21, session 3)

Per the CO log's §2 standing principle ("proof of absence is as important as proof of presence"), each of these is now backed by either a direct full-text read of the relevant statute or multiple independent, citation-agreeing secondary sources — not just one blog's say-so:

- **No security-deposit cap, interest requirement, or separate-account requirement.** Confirmed by direct full-text read of W.S. 1-21-1207–1211 (none of these appear anywhere) plus 8 independent sources agreeing. **One source actively contradicted this** — Hemlane's page claimed a 2023 amendment requiring interest-bearing accounts and a 2–3 month deposit cap, a claim that both contradicts the primary statute text and contradicts a *different paragraph on that same page*. Treated as fabricated/unreliable, explicitly rejected.
- **No statutory advance-notice period for landlord entry.** Confirmed by direct full-text read of W.S. 1-21-1201–1205 (no numeric period anywhere — only a bar on the tenant *unreasonably* denying access). Secondary sources disagree with each other on what's "reasonable" (24 hours, 48 hours, 2 days, all cited by different sites with no statute reference) — that disagreement is itself evidence no such statute exists.
- **No rent-increase cap, frequency limit, or notice-period statute.** Broader finding than originally scoped — the original list only asked about a frequency cap; this pass also confirmed there's no notice-period statute either. Multiple higher-quality sources (Nolo, LegalClarity, apartments.com's own state-law table, AAOA) explicitly say "no statute," rather than simply omitting the topic. The commonly-cited "30 days" figure is industry practice tied to the month-to-month termination convention, not a codified rent-increase rule.
- **No separate mobile-home-park landlord-tenant act.** Confirmed by direct search for a named/numbered Wyoming act — found none. What *does* exist: Title 31, Ch. 2 (titling/taxation of the home itself) and Title 35, Ch. 4 (health/sanitation standards, largely eliminated per §35-4-224), plus local zoning ordinances — none of which are landlord-tenant law. Mobile-home lot tenancies fall under the same Article 12 as any other rental. **Two sources claimed otherwise** (a "Mobile Home Parks Act" with rent-increase protections) — likely fabricated, or conflated with Colorado's actual, differently-named Mobile Home Park Act (C.R.S. Title 38, Art. 12, Part 2). Rejected.
- **No comprehensive anti-retaliation statute.** Confirmed by two independent sources explicitly stating this, both also noting a common-law retaliation defense may still be available to a tenant in an eviction proceeding — included as a nuance so this doesn't get treated as zero landlord exposure.

**Five education items added to the CSV** to preserve these findings as usable landlord-facing content, not just log narrative: `edu-no-deposit-cap-interest-account-wy`, `edu-no-entry-notice-statute-wy`, `edu-no-rent-increase-statute-wy`, `edu-no-mobile-home-park-act-wy`, `edu-no-anti-retaliation-statute-wy`.

**Process note worth carrying forward to future states:** two of these seven absence-checks surfaced sources that were actively wrong, not just silent — one internally self-contradicting, one likely confusing Wyoming with a different state's law of a similar name. Worth treating "a source made a specific, confident claim" as no more reliable than "a source said nothing," and cross-checking specific claims (not just topic coverage) against primary text before trusting them.

---

### 3. Article 12 — content_type calls and drafting status (complete)

| Section | Topic | Call | Clause/education id(s) |
|---|---|---|---|
| 1201 | Definitions | Not a clause | — |
| 1202(a),(b) | Habitability baseline (electrical/plumbing/heating/hot+cold water; tenant cooperation) | LEASE_CLAUSE — REQUIRED | `habitability-baseline-wy` |
| 1202(c) | Materiality threshold — doesn't cover trivial breakage/malfunctions | LANDLORD_EDUCATION | `edu-habitability-materiality-wy` |
| 1202(d) | Duties reassignable by explicit written agreement | LANDLORD_EDUCATION | `edu-habitability-modifiable-wy` |
| 1203(a)–(c),(e) | Owner's duty to correct; renter notice/dispute process; no liability for mental-suffering claims | LANDLORD_EDUCATION | `edu-repair-notice-process-wy` |
| 1203(d) | Cost-based termination option (uneconomical repair) | LANDLORD_EDUCATION | `edu-repair-cost-termination-wy` *(added prior session)* |
| 1204 | Renter's duties | LEASE_CLAUSE — REQUIRED | `renter-duties-wy` |
| 1205 | Prohibited acts by renter | LEASE_CLAUSE — PROHIBITED | `prohibited-acts-renter-wy` |
| 1206 | Renter's remedies — court-mediated only, no self-help repair-and-deduct in WY | LANDLORD_EDUCATION | `edu-renter-repair-remedy-wy` |
| 1207 | Required notice of nonrefundable deposit | LEASE_CLAUSE — REQUIRED (disclosure) + LANDLORD_EDUCATION (separate-notice-at-collection process step) | `nonrefundable-deposit-notice-wy`, `edu-nonrefundable-deposit-separate-notice-wy` |
| 1208(a) | Deposit deductions, itemization, 30-day return (+30 more if damage) | LEASE_CLAUSE — REQUIRED | `security-deposit-return-wy` |
| 1208(b) | Separate utility-deposit refund cascade | LEASE_CLAUSE — CONDITIONAL | `utility-deposit-return-wy` |
| 1208(c) | Noncompliance penalty (full deposit + court costs) | LANDLORD_EDUCATION | `edu-deposit-noncompliance-penalty-wy` |
| 1209 | Successor owner bound by 1207/1208 | LANDLORD_EDUCATION | `edu-successor-owner-bound-wy` |
| 1210 | Abandoned property disposition | LEASE_CLAUSE — REQUIRED | `abandoned-property-wy` |
| 1210(a)(i) | Valid notice-service methods (certified mail / personal service / publication) | LANDLORD_EDUCATION | `edu-abandoned-property-notice-methods-wy` |
| 1211(a) | Sheriff removal after court eviction order | OUT_OF_SCOPE — court/eviction process | Not drafted, consistent with Legal Tracker deferral |
| 1211(b) | 10%/year statutory interest on unpaid tenant damages beyond the deposit | LEASE_CLAUSE — CONSTRAINED | `unpaid-damages-interest-wy` |

All clause text drafted directly from primary-source statute text (law.justia.com, cross-checked against FindLaw for §1211), not from secondary summaries. Full bodyText, citations, and reasoning are in the CSV `notes` column for each id.

---

### 4. Article 13 — Wyoming Safe Homes Act (resolved, drafted, added to CSV)

Full text of all 4 sections read directly from primary source (not summarized from blogs) before drafting.

**Two statutory pathways under §1303, materially different from Colorado's model:**
- **(a) Credible imminent threat** — forward-looking, no lookback window stated in the statute text itself.
- **(b) Actual past victimization on the premises** — 60-day window from incident to notice, with a built-in hardship extension ("as soon thereafter as practicable" if hospitalization or seeking shelter/counseling prevented timely notice).
- Both require 7 days' written notice to the landlord before vacating.

**Architecturally different from Colorado's version**, not just numerically: Wyoming's is a **court-tested affirmative defense** to a rent claim, not a standalone termination right. Colorado's clause was left untouched rather than merged into a shared multi-state clause, per Taylor's explicit direction (2026-08-21) — the notice-timing mechanic and legal architecture diverge too much for one shared clause to stay accurate for both states.

**Clauses drafted, both verified 2026-08-21, citation W.S. 1-21-1303(a),(b),(d):**

| id | content_type | is_active | Status |
|---|---|---|---|
| `dv-safe-homes-wy` | LEASE_CLAUSE | **TRUE** | Selected/shipped variant — statutorily accurate, defense-framed |
| `dv-safe-homes-proactive-wy` | LEASE_CLAUSE | **FALSE** | Alternate posture — proactively grants an unconditional lease-level termination right, going beyond the statutory minimum. Documented, not deleted, in case a future per-property posture setting makes this selectable. |

**Editorial-call precedent set this session:** when two clause variants reflect a genuine *posture* choice (not competing facts about what the law says), Taylor picks one to ship — consistent with the rest of the library being one curated answer per topic, not a landlord-facing menu of legal-strategy options. The unselected variant gets preserved `is_active: FALSE`, not discarded, since building "let the end-user choose their posture" is a real product-scope decision (a new interaction pattern), not something that falls out of the content work for free.

**Dual-logged as LANDLORD_EDUCATION + standing validation checks (same pattern as CO's Part 4):**

| id | Citation | Rule |
|---|---|---|
| `edu-safe-homes-nondiscrimination-wy` | W.S. 1-21-1303(c) | Can't terminate a tenancy based *solely* on victim status |
| `edu-safe-homes-nonwaiver-wy` | W.S. 1-21-1304 | Safe Homes Act protections can't be waived or modified by lease or separate agreement |

**Absence flagged, not assumed:** unlike Colorado, Wyoming's Safe Homes Act (read in full, all 4 sections) contains **no landlord confidentiality duty** regarding victim status or new address. Treated as a genuine state difference pending correction, not a research gap.

---

### 5. Clauses added to CSV — running total: 21 WY rows (10 LEASE_CLAUSE, 11 LANDLORD_EDUCATION; 20 active, 1 inactive)

**Session 1 (2026-08-21) — Safe Homes Act:**

| id | group | content_type | is_active | rule_type |
|---|---|---|---|---|
| `dv-safe-homes-wy` | Default & Termination | LEASE_CLAUSE | TRUE | CONDITIONAL |
| `dv-safe-homes-proactive-wy` | Default & Termination | LEASE_CLAUSE | FALSE | CONDITIONAL |
| `edu-safe-homes-nondiscrimination-wy` | Disclosures | LANDLORD_EDUCATION | TRUE | PROHIBITED |
| `edu-safe-homes-nonwaiver-wy` | Disclosures | LANDLORD_EDUCATION | TRUE | PROHIBITED |
| `edu-repair-cost-termination-wy` | Landlord Responsibilities | LANDLORD_EDUCATION | TRUE | CONDITIONAL |

**Session 2 (2026-08-21, continued) — remaining Article 12:**

| id | group | content_type | is_active | rule_type |
|---|---|---|---|---|
| `habitability-baseline-wy` | Landlord Responsibilities | LEASE_CLAUSE | TRUE | REQUIRED |
| `renter-duties-wy` | Tenant Responsibilities | LEASE_CLAUSE | TRUE | REQUIRED |
| `prohibited-acts-renter-wy` | Tenant Responsibilities | LEASE_CLAUSE | TRUE | PROHIBITED |
| `nonrefundable-deposit-notice-wy` | Security Deposit | LEASE_CLAUSE | TRUE | REQUIRED |
| `security-deposit-return-wy` | Security Deposit | LEASE_CLAUSE | TRUE | REQUIRED |
| `utility-deposit-return-wy` | Security Deposit | LEASE_CLAUSE | TRUE | CONDITIONAL |
| `unpaid-damages-interest-wy` | Security Deposit | LEASE_CLAUSE | TRUE | CONSTRAINED |
| `abandoned-property-wy` | Default & Termination | LEASE_CLAUSE | TRUE | REQUIRED |
| `edu-habitability-materiality-wy` | Landlord Responsibilities | LANDLORD_EDUCATION | TRUE | RECOMMENDED |
| `edu-habitability-modifiable-wy` | Landlord Responsibilities | LANDLORD_EDUCATION | TRUE | RECOMMENDED |
| `edu-repair-notice-process-wy` | Landlord Responsibilities | LANDLORD_EDUCATION | TRUE | REQUIRED |
| `edu-renter-repair-remedy-wy` | Landlord Responsibilities | LANDLORD_EDUCATION | TRUE | RECOMMENDED |
| `edu-successor-owner-bound-wy` | Disclosures | LANDLORD_EDUCATION | TRUE | REQUIRED |
| `edu-deposit-noncompliance-penalty-wy` | Security Deposit | LANDLORD_EDUCATION | TRUE | PROHIBITED |
| `edu-nonrefundable-deposit-separate-notice-wy` | Security Deposit | LANDLORD_EDUCATION | TRUE | REQUIRED |
| `edu-abandoned-property-notice-methods-wy` | Notices & General | LANDLORD_EDUCATION | TRUE | REQUIRED |

Full clause text, citations, and proof-record details for each are in the CSV itself (`notes` column) — not duplicated here to avoid the two documents drifting out of sync. This log tracks *decisions and reasoning*; the CSV remains the source of truth for actual clause content.

---

### 6. Gap-discovery source #3 — law outside Title 1 (2026-08-21, session 4)

Beyond the Fair Housing Act (Title 40) already found, checked several categories that commonly hide outside a state's core landlord-tenant title:

- **Carbon monoxide/smoke detectors — real finding, not in Article 12 at all.** Wyoming has no detector requirement in the rental statute itself. The requirement comes from Wyoming's adoption of the International Residential Code, generally scoped to new construction with fuel-burning appliances or an attached garage — not automatically to existing rental stock — with enforcement handled locally by individual cities and counties. This is exactly the kind of thing a pure Article-12 statute walk would miss entirely. Logged as `edu-co-detector-building-code-wy`, deliberately **not** drafted as a uniform LEASE_CLAUSE, since a single statewide clause would misstate how enforcement actually works — small-scale version of the same caution behind the CO log's Denver/Boulder municipal-ordinance gap.
- **Methamphetamine-contamination disclosure — checked, not found.** Some states (Utah, Alaska, Arizona, others) require this; Wyoming's Title 35 controlled-substances provisions cover criminal penalties for meth possession/production, not a landlord disclosure duty. Not added as a clause since there's nothing to disclose under WY law specifically — noting the absence here rather than in the CSV, since this is a narrower/lower-stakes finding than the §2 absences.
- **Landlord's lien on tenant's personal property for unpaid rent — checked, not found.** Title 29 (Liens) has real content, but it's contractor/materialman's liens for improvements to the property (Ch. 2) and general personal-property lien mechanics (Ch. 7) — nothing establishing a residential landlord's lien on a tenant's belongings for unpaid rent, the way some states historically allow.
- **A third unreliable source caught in this pass**, worth adding to the running pattern: a site called LeaseWisely lists roughly fifteen "required" Wyoming landlord disclosures — flood hazard areas, foreclosure status, required insurance coverage, pest infestations, prior meth contamination, and more — presented as a clean bulleted list with no statute citations. None of it corresponds to anything in the actual Article 12 text, and no other source (including professional lease-template providers) treats these as Wyoming-specific legal requirements. Treated as fabricated or badly generalized content, not adopted. This is now the third source this project has caught making confident, specific, wrong claims (alongside the Hemlane deposit-interest claim and the Hemlane/generis "Mobile Home Parks Act" claim) — reinforcing the standing lesson from §2: a confident specific claim needs the same primary-source check as an absence claim, arguably more, since confidence reads as trustworthy when it shouldn't be.

### 7. Gap-discovery source #2 — topic comparison against real WY lease products

Reviewed several Wyoming-specific lease template providers (ezLandlordForms, Steadily, PandaDoc, ILRG, AAOA, PropMgmtForms) for structure/topic coverage, since Wyoming's thin statutory law means most of what's "standard" here comes from custom-and-practice rather than legal mandate. Nothing surfaced that maps to a genuine, uncovered Wyoming *legal* requirement — the topics these templates emphasize (lease term flexibility, condition-of-property/as-is acknowledgment, federal lead-paint disclosure, standard responsibilities language) are either already covered by the current WY set or are things the base 150-row library likely already handles as universal/federal content rather than WY-specific.

One item worth a quick cross-check rather than a new draft: a **condition-of-property / as-is acknowledgment clause** appears as standard in every professional template reviewed. **Cross-check complete, 2026-08-21:** this clause already exists in the library (`existing-condition`, in the Tenant Responsibilities group) and was tagged `CO` only — a real gap, not a false alarm. Its text turned out to be a fully generic contractual acknowledgment with no Colorado-specific statutory reference, and nothing in Wyoming's Article 12, Article 13, or anywhere else conflicts with or modifies this kind of representation. **Extended to `CO;WY`** rather than marked universal outright — two states agreeing isn't the same as earning universal status, per the schema's own standing rule that universal must be explicit, not assumed.

---

### 8. Next up

All four gap-discovery sources from the CO methodology have now been run against Wyoming: statute-structure walk (Article 12/13, complete), topic comparison against a real lease product (§7, nothing new found), personal landlord experience (N/A — this is Taylor's own lived-experience source, not something I can run independently), and law outside the main landlord-tenant title (§6, complete). What's left:

1. ~~**Personal landlord experience pass**~~ — **Not applicable, confirmed 2026-08-21.** Taylor has no landlord experience outside Colorado, so this gap-discovery source structurally can't be run for Wyoming the way it was for CO. This isn't a gap to keep chasing — it's a real, permanent limit on this particular source for any state where Taylor lacks direct experience. Worth carrying this forward explicitly for state #3 and beyond, so future sessions don't keep re-asking a question that has a settled answer: for non-CO states, this source will only ever produce something if Taylor happens to have picked up relevant experience in the meantime (a new property in that state, a conversation with another landlord there, etc.) — otherwise it's permanently N/A, not merely unfinished.
2. Re-verification cadence for WY hasn't been set yet — Wyoming's legislative session timing differs from Colorado's; worth confirming before setting a "re-verify annually in [month]" rule parallel to CO's.
3. Confirm the condition-of-property/as-is clause noted in §7 is actually tagged for WY in the full 176-row file, rather than assuming.

With this, Wyoming is close to the same completeness level as the Colorado pass — the main remaining open item is source #3 (Taylor's own landlord experience), which by its nature can't be run without Taylor's direct input.

---

### 13. Final status and handoff to state #3 (2026-08-21)

**Wyoming is closed out.** Final numbers: 189 total rows in the library, 91 tagged WY (63 LEASE_CLAUSE, 28 LANDLORD_EDUCATION; 90 active, 1 intentionally inactive — `dv-safe-homes-proactive-wy`, the documented-but-unselected alternate posture from the Safe Homes Act decision).

**State #3 decision: Kansas**, not Ohio. Ohio was seriously considered — it already has one stray pre-existing clause in the library (`security-deposit-interest-oh`, untouched by any verification pass) and would test a genuine URLTA-style statute structure, different from both CO's and WY's. But Ohio would also mean actually engaging the municipal-ordinance complexity this project has deliberately deferred twice now (Cleveland/Cincinnati/Columbus/Toledo all have their own rental-registration and lead-safe-certification ordinances, driven by older urban housing stock — a different flavor of complexity than CO's Denver/Boulder situation, but a real one). Taylor chose to hold that off and pick **Kansas** instead — same URLTA-family architecture test as Ohio would have offered, without forcing the municipal question yet. Ohio (and its stray existing clause) remains a reasonable candidate for a future state, whenever municipal complexity is ready to be tackled deliberately.

**Going forward, each state gets its own chat and its own decision log**, rather than accumulating in one continuously-growing file. This WY log is now closed and stands as a companion reference for future states, the same way the CO log served as this file's own companion at the start. The next log (`decision-log-clause-library-verification-kansas.md` or similar) should open by referencing both this file and the original CO file — particularly the process lessons in §10–§12 above (the value of a full-library audit done early rather than a narrow single-clause check, and the finding that source reliability doesn't automatically transfer state to state, so previously-trusted domains need re-checking against the new state too).

---

### 9. Wyoming verification status, as of 2026-08-21

Of the CO methodology's four gap-discovery sources, three have run to completion for Wyoming (statute-structure walk, law outside Title 1, topic comparison against real lease products) and the fourth (personal landlord experience) is confirmed structurally not applicable — Taylor has no landlord experience outside Colorado. **This isn't an open item; it's a settled finding.** Wyoming should be treated as having reached the same practical completeness the Colorado pass reached, adjusted for the fact that one of four sources simply doesn't exist for this state.

What would still change this picture: municipal-ordinance complexity (deliberately out of scope for this state-generalization test, same as CO's Denver/Boulder deferral), and the standard annual re-verification cadence once one gets set for Wyoming specifically. §7's cross-check is now closed — `existing-condition` extended to `CO;WY` — so there's no dangling open item from that source either.

**Correction, session 5:** the completeness claim above didn't hold up. §10–§11 below found that a full pass through the original library — as opposed to the single-clause check in §7 — surfaces at least ten legal topics never actually checked against Wyoming law. "Verification-complete" should be read as applying to Article 12/13 and the originally-scoped absence list specifically, not to the library as a whole.

---

### 10. Full-library cross-check against Wyoming (2026-08-21, session 5)

Prompted by a direct question: had the *original* 150-row library (mostly Colorado clauses, plus other states) actually been reviewed for Wyoming applicability, or had only the one `existing-condition` hypothesis from §7 been checked? **Honest answer: only that one clause had been checked.** This section is the actual full pass, done properly.

**Scope:** 98 of the 150 original rows are tagged `CO` only. (The other 51 are already state-specific to two dozen other states — CA, TX, MD, VA, and others — each presumably added because that state has its own distinct requirement; not re-audited in this pass, flagged in §11 below as a known unaddressed area.)

**A real architectural gap found along the way:** the library uses a `supersedes` field — a generic base clause (e.g. `security-deposit-return`) gets overridden by a state-specific version (e.g. `security-deposit-return-co`) when one exists for that state. **The WY-specific clauses drafted in earlier sessions never had `supersedes` set.** Fixed: `security-deposit-return-wy` now supersedes `security-deposit-return`; `habitability-baseline-wy` now supersedes `landlord-maintenance`. Without this fix, a WY lease could have shown both the generic and the WY-specific version of the same topic side by side.

**51 of the 98 CO-only clauses were genuinely generic** — pure lease mechanics with no Colorado citation, no CO-specific number, and nothing conflicting with anything established about Wyoming law this project. Extended to `CO;WY`: `rent-payment`, `late-fee`, `returned-payments`, `due-at-signing`, `application-of-payments`, `residential-use-only`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `acceptable-payment-methods`, `tenant-maintenance`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `services-utilities-provided`, `utilities-paid-by-landlord`, `appliances-included`, `landlord-maintenance`, `landlords-access` *(the generic 24-hour version — not `landlords-access-co`, which bakes in a CO-specific bed-bug-inspection notice rule)*, `possession-delay`, `default-by-tenant`, `surrender-end-of-term`, `early-termination`, `holdover`, `notices`, `governing-law`, `severability`, `tenants-property-insurance`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-policy`, `pet-insurance-requirement`, `parking`, `assigned-parking-space`, `parking-vehicle-rules`, `storage-space`, `keys`, `guest-policy`, `guest-policy-day-limit`, `common-area-use`, `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `lead-based-paint` *(federal requirement, applies regardless of state)*, `hoa-compliance`, `assistance-animal-accommodation` *(the generic ADA/FHA version — not the `-co` version, see §12)*.

One item flagged rather than mechanically extended: **`holdover`'s "double the Monthly Rent" figure.** The clause already self-limits ("or the maximum amount allowed under applicable law, if less"), so it's not unsafe to extend — but whether a double-rent holdover penalty is actually enforceable in Wyoming absent a specific statute authorizing it hasn't been independently confirmed. Extended on the strength of the self-limiting language, not because the number itself was verified.

**~46 remaining CO-only clauses were correctly left untouched** — genuinely Colorado-specific (statute citations, CO-specific dollar figures, or content built around a 2023–2025 Colorado bill like HB25-1249 or HB25-1240). Not extending these is the correct default. But going through them individually surfaced something more important than a simple "leave it alone" — see §11.

### 11. New research gaps surfaced by the full audit — genuinely unchecked for Wyoming

The §6/§7 gap-discovery passes from earlier sessions were not as comprehensive as they were presented. Going through all 46 remaining CO-specific clauses one by one surfaced **at least ten distinct legal topics that have never actually been checked against Wyoming law**, not merely confirmed absent:

1. ~~**Radon disclosure**~~ (`radon-disclosure-co`, `edu-radon-lease-length-co`) — **Confirmed absent, 2026-08-21.** Wyoming has no radon disclosure requirement of any kind, statutory or association-form. Logged as `edu-no-radon-disclosure-wy`. Confirmed via 6 independent sources, including a dedicated radon-industry resource explicitly naming WY as one of 7 states with zero requirement.
2. ~~**Bed bug disclosure**~~ (`bed-bug-disclosure-co`) — **Confirmed absent, 2026-08-21.** Logged as `edu-no-bed-bug-disclosure-wy`. Confirmed via 6 independent sources naming WY's only 2 mandated disclosures (lead paint, nonrefundable-deposit notice) with bed bugs absent from all of them. One outlier source (iPropertyManagement) listed a bed bug disclosure as something to include — treated as likely generic cross-state template content, not a genuine WY-specific finding, consistent with the pattern of unreliable sources already caught this session.
3. ~~**EV charging access rights**~~ — **Confirmed absent, 2026-08-21.** Logged as `edu-no-ev-charging-right-wy`. Confirmed via a dedicated 50-state right-to-charge tracker explicitly listing Wyoming among states with no such legislation, alongside a clear list of 30+ states that do (including CO and OR). Related but distinct finding: Wyoming passed EV tax legislation for 2026 (a per-kWh DC fast-charging tax plus registration decal fees) — consumer/tax law, not a tenant-rights statute, not relevant here.
4. ~~**Housing-voucher/subsidy protections**~~ — **Confirmed absent, 2026-08-21.** Logged as `edu-no-voucher-protection-wy`. A dedicated WY tenant-screening resource states directly: "Can Wyoming landlords refuse Housing Choice Voucher holders? Yes – No source of income protections." Opposite of Colorado's mandatory-acceptance regime under HB25-1240.
5. ~~**Tenant's right to pay the deposit in installments**~~ — **Confirmed absent, 2026-08-21.** Logged as `edu-no-deposit-installments-wy`. No source among 6+ detailed sources on WY's deposit process mentions an installment right. **Process note:** Hemlane was caught fabricating WY deposit content a second time in this same pass (a false "75% interest payment" requirement) — this domain is now treated as systematically unreliable for Wyoming deposit topics, not just a one-off error.
6. ~~**Criminal penalty for service-animal fraud**~~ — **Resolved as a genuine finding, not an absence, 2026-08-21.** Wyoming has its own service-animal-fraud misdemeanor statute (Wyo. Stat. § 35-13-207, up to $750, enacted 2017), confirmed directly from the Wyoming Legislature's own bill text. New clause `assistance-animal-accommodation-wy` drafted, superseding the generic version for WY — structured parallel to CO's `-co` version, WY-specific citation substituted for CO's. This statute lives in Title 35, outside Title 1 — a genuine 4th-gap-discovery-source find the session-4 sweep missed.
7. ~~**Wyoming's own consumer-protection law**~~, analogous to CO's Honest Pricing Act — **Resolved, 2026-08-21.** Logged as `edu-no-rental-fee-transparency-law-wy`. Wyoming does have a general Consumer Protection Act (Wyo. Stat. § 40-12-101 et seq., 1973) — but it's a broad deceptive-trade-practices statute, not a rental-fee-specific transparency law. No WY equivalent to Colorado's all-in-pricing mandate, free-payment-method requirement, or unprovided-service-fee prohibition. **This was named as a to-do after session 3 and dropped — flagged here plainly as a real miss that took this long to close, not just a slow backlog item.** Note: `edu-fee-shifting-co` (one-sided attorney-fee provisions) turned out to be a *different* CO statute (C.R.S. 38-12-801, not Honest Pricing) — remains genuinely unresolved, was mistakenly bundled into this topic originally.
8. ~~**"For cause" eviction protection after 12 months' tenancy**~~ — **Confirmed absent, 2026-08-21.** Logged as `edu-no-for-cause-eviction-wy`. Multiple sources confirm no tenure threshold exists in Wyoming — no-cause termination is available for month-to-month tenancies and fixed-term non-renewals regardless of how long the tenant has lived there.
9. ~~**Tenant-death lease-termination protections**~~ ("Letty's Act" equivalent) — **Confirmed absent, 2026-08-21.** Logged as `edu-no-tenant-death-statute-wy`. No provision anywhere in Article 12's 11 sections; the estate remains liable for the remaining lease term under ordinary contract principles, not a codified statutory shield.
10. ~~**Alternate housing during a major habitability failure**~~ — **Confirmed absent, 2026-08-21.** Logged as `edu-no-alt-housing-requirement-wy`. A Wyoming tenant's only remedy is the judicial path already covered by `edu-renter-repair-remedy-wy` — no self-help or automatic alternate-housing obligation.
11. ~~**General deposit-rights nonwaivability**~~ — **Confirmed absent, 2026-08-21.** Logged as `edu-no-deposit-nonwaiver-statute-wy`. Different from the Safe Homes Act's own nonwaiver provision (DV-specific only). **Process note:** the Hemlane WY deposit page produced a *third* distinct fabricated claim this session (fictional new DV-related deposit provisions) — this specific page is now treated as systematically unreliable for Wyoming deposit content, not an occasional-error source.
12. ~~**Broader landlord-identity-change notice**~~ — **Confirmed absent, 2026-08-21.** Logged as `edu-no-broad-identity-change-notice-wy`. Wyoming's only related rule is the narrower deposit-duty-succession requirement already covered by `edu-successor-owner-bound-wy` (§1209) — nothing broader requiring proactive tenant notice on ownership/management changes generally, unlike Colorado's 1-business-day rule.

**Backlog closed, 2026-08-21: all 12 items from §11 resolved.** Final tally: 8 confirmed absent outright (radon, bed bugs, EV charging, voucher/subsidy protections, deposit installments, for-cause eviction, tenant-death termination, alternate housing, deposit nonwaivability, broader identity-change notice — that's actually 10), 1 genuine new finding requiring a real clause (the service-animal-fraud penalty), and 1 resolved with real nuance rather than a clean yes/no (the consumer-protection law — present but narrower/weaker than CO's). One adjacent item surfaced along the way and correctly left open rather than folded in: `edu-fee-shifting-co`'s attorney-fee-mutuality question is a different CO statute than the Honest Pricing Act items, was originally miscategorized into this same backlog entry, and remains genuinely unchecked for Wyoming — worth its own pass if it matters enough to chase.

Process lessons worth carrying into state #3, beyond the content itself: (1) a full pass through the *entire* existing library — not just the clauses that seem obviously relevant — is worth doing early rather than treating a narrower single-clause check as equivalent; (2) at least two source domains (Hemlane, and separately LeaseWisely/generis) proved unreliable specifically for Wyoming content across multiple independent claims, not just isolated errors — worth checking early in a new state's research whether the same domains hold up there too, rather than assuming a domain's reliability carries over state to state.

Lower priority, but technically also unconfirmed: `edu-pet-caps-co`, `edu-carpet-damage-co`, `edu-bad-faith-deposit-co`, `edu-wear-tear-void-co`, `edu-walkthrough-co` — all tied to Colorado's 2025 HB25-1249 deposit-reform bill specifically, unlikely Wyoming has anything this recent or this specific, but not independently confirmed absent.

**None of these were extended, drafted, or assumed absent for Wyoming.** They're listed here as an honest, prioritized backlog — this is what "actually looked over the whole library" turned up, as opposed to the narrower single-clause check done in §7.

### 12. Flagged for Taylor's call, not decided unilaterally

- **`security-deposit-use` (generic "what can the deposit be applied to" clause) vs. `security-deposit-return-wy`** (the WY-specific clause drafted in session 2, which already folds deposit-application language into its own text): extending the generic `security-deposit-use` to WY as well could create redundant/overlapping deposit language on the same lease. Not extended pending a decision on whether to split `security-deposit-return-wy` into two clauses (matching the CO pattern of separate "use" and "return" clauses) or leave it combined.
- **`assistance-animal-accommodation` vs. `assistance-animal-accommodation-co`**: these appear to be a near-duplicate pair already existing in the CO-only portion of the library, predating this Wyoming work — worth a look independent of the Wyoming pass, not something decided here.

- ## Decision Log Addendum: Wyoming (State #2) — Session 6, Closing Remaining Open Items

**Date:** 2026-08-24 (conducted from within the Nebraska/cross-state conversation, applied directly to the shared CSV)
**Prior status:** Closed 2026-08-21 per §13 of the main WY log, with known open items — see that file's §11 backlog notes, §12 flagged-for-Taylor items, and the consolidated named-topic checklist's "Not yet checked" rows for WY.

This addendum resolves the specific items that were still open when Wyoming was last worked, prompted by a direct question about whether all four states (CO, WY, KS, NE) were actually complete.

---

### Correction to a claim made earlier in the cross-state conversation

Before starting this session's work, `security-deposit-use` was incorrectly described (in conversation, not in any file) as a "genuine gap" for Wyoming — the claim was that WY has no clause governing what the deposit can be applied to. **This was wrong.** The main WY log's own §12 already documents why: `security-deposit-return-wy` (drafted in an earlier WY session) already folds deposit-application language into itself — "Landlord may apply the deposit to accrued rent, damage to the property beyond reasonable wear and tear, the cost to clean the property..." — combining "use" and "return" into one clause rather than following the CO pattern of two separate clauses. Confirmed by re-reading the actual clause text. Extending the separate generic `security-deposit-use` clause to WY on top of this would create redundant, overlapping deposit language on the same lease. No fix needed — this was a deliberate architectural choice, correctly left as-is, and the earlier conversational claim is retracted here.

---

### 1. Wyoming's exculpation/liability-limitation posture — checked directly, confirmed absent

Prompted by the pattern found for Kansas and Nebraska (both have statutes banning categories of lease provisions, including landlord liability disclaimers, that several `CO;WY;KS;NE`-tagged clauses were found to violate) and by the Colorado scare (a secondary source falsely claiming a similar CO rule), Wyoming's own posture was checked directly rather than assumed.

**Confirmed absent.** All 11 sections of Article 12 (W.S. 1-21-1201–1211) were already read directly from primary source during Wyoming's original session 3 (documented in the main log's §3 table) — no "prohibited lease provisions" section exists anywhere in it, unlike Colorado's §38-12-801, Kansas's §58-2547, or Nebraska's §76-1415. This means the liability-disclaimer exposure found in `tenants-property-insurance`, `services-utilities-provided`, `parking`, `storage-space`, and `pet-policy` for Kansas and Nebraska genuinely doesn't apply to Wyoming — the generic, `CO;WY`-tagged versions of these clauses are safe to keep as-is. Logged as `edu-no-prohibited-lease-provisions-statute-wy`.

### 2. Three named-topic canvass items, previously "not yet checked" — all resolved

- **Immigration-status inquiry prohibition** — confirmed absent. Multiple independent Wyoming landlord-tenant overviews consistently describe protected classes as federal-only with no state additions; none mention immigration status. Logged as `edu-no-immigrant-tenant-protection-wy`. Closes this checklist item for all four states now (CO: present/standing rule; WY, KS, NE: confirmed absent).
- **Right to call police / emergency services (non-waivable)** — confirmed absent at the state level. Same weaker-evidence caveat as the equivalent KS/NE findings (absence-of-mention across general overviews, not an explicit "no such law" statement). Logged as `edu-no-right-to-call-police-statute-wy`. Closes this item across all four states.
- **Rental application / tenant-screening fairness act** — confirmed absent with reasonable confidence. Landlord Studio's Wyoming guide explicitly states "despite there being no statute" regarding application fees — an affirmative statement, not mere silence. Logged as `edu-no-tenant-screening-fairness-act-wy`.

### 3. A genuine new finding: returned-check fee cap

Wyoming caps the fee a landlord can collect for a dishonored check at $30, on top of face value, after written demand (Wyo. Stat. §1-1-115(b)). Confirmed via 7+ independent sources all citing the same statute, one quoting the operative language directly. This is a real, correctly-attributed general bad-check statute — a materially stronger evidence base than the similarly-shaped but *incorrect* $15 figure rejected during the Nebraska liability audit (that one turned out to govern payday-loan licensees only, a different statute entirely). `returned-payments` doesn't hardcode a dollar figure, so no clause conflict exists — this is pure landlord-facing awareness. Logged as `edu-returned-check-fee-cap-wy`.

### 4. Gap-discovery source #2 — attempted redo, judgment call not to force it

The Wyoming Association of Realtors has real lease forms, but — same pattern as Nebraska — they're not publicly accessible (ezLandlordForms' own page notes "these can't be customized to your property," consistent with a member/association-restricted product). Checked ILRG/PublicLegal, the same publisher whose Nebraska lease proved valuable (attorney-reviewed, statutory citations woven throughout). **Wyoming's version is materially thinner** — the public preview shows generic fill-in-the-blank contract boilerplate with a bracketed placeholder note ("[Landlord should note above any disclosures... under Federal or Wyoming law...]") rather than the kind of state-specific statutory citation density the Nebraska document had.

**Judgment call: not purchasing/reading the full ILRG Wyoming document.** Given the preview shows no meaningful state-specific substance beyond what a template-mill site would offer, and given Wyoming's law is already unusually thoroughly primary-source-verified (full statute reads of both Article 12 and the Safe Homes Act, plus an already-completed whole-library audit), a weak product isn't likely to surface much a careful statute read hasn't already caught — different from Nebraska's case, where the real product actually caught a genuine miss in this project's own prior work. Gap-discovery source #2 for Wyoming remains weaker in kind than Kansas's or Nebraska's, but this reflects Wyoming's genuinely thin professional-forms market, not unwillingness to look. Worth revisiting only if a better Wyoming-specific product surfaces later.

### 5. Items intentionally left open, not part of this session's scope

- **HB25-1249-style Colorado deposit-reform items** (`edu-pet-caps-co`, `edu-carpet-damage-co`, `edu-bad-faith-deposit-co`, `edu-wear-tear-void-co`, `edu-walkthrough-co`) — still unconfirmed for Wyoming, lower priority per the main log's own §11 backlog notes.
- **`edu-fee-shifting-co`'s attorney-fee-mutuality question** — a different Colorado statute than the Honest Pricing Act items it was originally bundled with, still genuinely unresolved for Wyoming.
- **Municipal-ordinance complexity** — never checked for Wyoming, not flagged as a known issue the way Denver/Boulder was for CO, consistent with the original scope-boundary warning at the top of the main WY log.
- **Re-verification cadence** — still not set for Wyoming specifically (Wyoming's legislative session timing differs from Colorado's).

---

**CSV changes this session:** 5 new `LANDLORD_EDUCATION` rows (`edu-no-prohibited-lease-provisions-statute-wy`, `edu-no-immigrant-tenant-protection-wy`, `edu-no-right-to-call-police-statute-wy`, `edu-no-tenant-screening-fairness-act-wy`, `edu-returned-check-fee-cap-wy`), all `VERIFIED`. No lease-clause changes needed — every finding this session was a confirmed absence or a general-awareness item, nothing required a new or modified `LEASE_CLAUSE`. Running total: 298 rows in the library, 94 WY-tagged.

**Wyoming status after this session:** the three previously-open named-topic canvass items are closed, the exculpation-ban question raised by the KS/NE liability audit is resolved (confirmed absent, no exposure), and one genuine new finding (returned-check fee cap) is added. Gap-discovery source #2 remains structurally weaker than Kansas's or Nebraska's, by judgment call rather than lack of effort — the professional forms market for Wyoming just doesn't offer an equivalent product. Remaining open items (HB25-1249-analog checks, the fee-shifting-mutuality question, municipal complexity, re-verification cadence) are lower-priority backlog, not blocking items.

---

## Addendum — 2026-08-28: shared-clause propagation notes owed from the CO re-audit (§5a.1)

Two clauses were edited during the Colorado re-audit on 2026-08-27. Under the propagation rule added at CO log §5a.1, every tagged state's log owes a written note recording what changed, why, which state's work prompted it, and — the step that matters most — an explicit judgment on whether the change is **uniform** or **state-driven**. Both are recorded here, including the one that turns out not to reach Wyoming.

### 1. `lead-based-paint` — WY is tagged, change inherited, classification: UNIFORM

**What changed.** 40 CFR 745.113(b)(1) requires the Lead Warning Statement to appear in the lease **verbatim**; the prior clause text paraphrased it, which does not satisfy the regulation. The paraphrase was replaced with the exact regulatory text, and the other elements 745.113(b) requires were added: the landlord's affirmative disclosure or statement of no knowledge (b)(2), the records/reports list or statement of none (b)(3), the tenant's acknowledgment of receipt (b)(4), and the accuracy certification (b)(6).

**What prompted it.** Colorado's re-audit at higher research settings, as a federal spot-check — not a Colorado-law finding.

**Classification: UNIFORM.** The forcing authority is federal (40 CFR 745.113(b)(1); 42 U.S.C. 4852d), not any state's statute. Wyoming inherits the corrected text safely and benefits equally; no Wyoming-specific override is needed or warranted. This is the clean case §5a.1 contemplates — a state-driven edit inherited silently is the dangerous one, and this is not that.

**Confirmed against the CSV, not assumed.** Row `lead-based-paint` is tagged `CO;WY;KS;NE;MN`, and because Wyoming reads the same shared row rather than an override, the corrected text is already the operative Wyoming lease language. The `bodyText` now opens with the verbatim statutory Lead Warning Statement, and `last_checked` has been reset to `2026-08-27` per §5a.1 step 2. Nothing further is required on the Wyoming side; this entry is the §5a.1 step-1 obligation being discharged.

Worth noting for exposure context: 42 U.S.C. 4852d(b)(5)'s statutory penalty is inflation-adjusted to **$22,263 per violation** (24 CFR 30.65(b)), plus treble damages and fees — so the paraphrase-vs-verbatim distinction was not cosmetic. Records retention is 3 years (40 CFR 745.113(c)). The 10-day inspection opportunity is a **sale** requirement, not a lease one, and is correctly absent.

### 2. `assistance-animal-accommodation` — does NOT reach Wyoming, and here is why

The instruction that prompted this entry scoped this clause to KS/NE only. **Confirmed correct against the CSV**, and the reason is worth recording rather than just accepting: row `assistance-animal-accommodation` is tagged `KS;NE` — Wyoming was removed from it during session 7's full-library `supersedes` audit, because Wyoming carries its own override, `assistance-animal-accommodation-wy` (Wyo. Stat. § 35-13-207 fraud penalty), and both rows were displaying simultaneously before that fix. So §5a.1's trigger — the tagged states of the *edited row* — genuinely does not include Wyoming. No propagation obligation is owed on this row.

### 3. A gap in §5a.1 itself, surfaced by working item 2 — flagged for Taylor, not decided

Item 2 is correct on the rule as written, but the rule as written may not be catching what it was built to catch. The reason KS/NE moved to `NEEDS_REVIEW` is **not** a Kansas or Nebraska law problem — it is a *federal* currency problem: HUD withdrew FHEO-2020-01 effective 2025-09-17 and narrowed enforcement to individually-trained animals on 2026-05-22, leaving the ESA basis unsettled.

That unsettled federal baseline is expressed in **body text that is duplicated nearly verbatim across six rows**. Comparing them:

| Row | states | status | last_checked |
|---|---|---|---|
| `assistance-animal-accommodation` | KS;NE | NEEDS_REVIEW | 2026-08-27 |
| `assistance-animal-accommodation-co` | CO | VERIFIED | 2026-08-27 |
| `assistance-animal-accommodation-wy` | WY | VERIFIED | **2026-08-21** |
| `assistance-animal-accommodation-mn` | MN | VERIFIED | **2026-08-23** |
| `assistance-animal-accommodation-nd` | ND | VERIFIED | **2026-08-24** |

CO's override was re-checked on 2026-08-27 because CO was the state being audited — its notes now carry the CADA-based independent state-law reasoning. WY, MN, and ND's overrides were not, and still carry pre-audit dates. The WY override's operative text is the same federal-baseline paragraph as the shared row, differing only in the final sentence (the Wyoming fraud-penalty citation, which is independently sound and not affected by the HUD development).

**The structural point:** §5a.1 triggers on *rows tagged with more than one state*. A single-state override row that was never edited never trips it — even when it carries the identical federal text whose basis just became unsettled. The rule tracks rows; the risk lives in shared *text*. This is the same class of failure §5a.1 was written to prevent, arriving through a door the rule does not cover.

**Not acting on this unilaterally**, since it is a legally consequential status change across three states. The options, for Taylor's call:
- **(a)** Run the same one-question state-law-basis check for WY (and MN, ND) that CO got via CADA, and record the result. Wyoming's likely answer is thinner than Colorado's — WY has no state analog to CADA that this project has found — which may mean WY lands at `NEEDS_REVIEW` alongside KS/NE rather than resolving to `VERIFIED`.
- **(b)** Leave the override rows as-is and treat the HUD question as owned solely by the shared row.
- **(c)** Extend §5a.1 to trigger on shared *text* rather than shared *row tags* — the durable fix, but the largest change, and it needs a way to detect near-duplicate bodies across override families.

Recommend **(a)** at minimum, since it is one question per state and the current state is an affirmative `VERIFIED` resting on a basis that has since moved. Option (c) is the real fix and belongs in the architecture-review backlog either way.

### 4. §5a.1's programmatic check — run for Wyoming, and it found more than expected

§5a.1 prescribes: list every clause where `states` contains more than one state and `last_checked` post-dates the earliest tagged state's completion date; each hit needs a log note in the lagging states or an explanation of why none is required.

**Run against the current CSV: 50 WY-tagged multi-state rows, of which 44 have `last_checked` after Wyoming's 2026-08-21 completion.** An earlier draft of this entry asserted `lead-based-paint` was the only hit. That was wrong, and the correction is worth recording because it exposes something about the check itself.

**Most of the 44 are benign, but the check cannot tell you which.** The large majority are rows whose `last_checked` was bumped when MN, ND, or SD were *added to the `states` tag* during their own passes — a re-verification against a new state's law, not a modification of the text Wyoming reads. Those owe Wyoming nothing. But `last_checked` is bumped identically for a tag extension and for a text edit, and the schema records no distinction between them, so the prescribed check has a **high false-positive rate and requires a manual read of every hit's notes to resolve**. That is a real limitation of the check as specified, not a one-off.

**Reading all 44, four rows besides `lead-based-paint` received an actual `bodyText` edit while Wyoming was tagged — and none was ever recorded in this log:**

| Row | states | edit | date |
|---|---|---|---|
| `tenant-maintenance` | CO;WY;MN | long compound sentence split into shorter ones | 2026-08-23 |
| `holdover` | CO;WY;KS;NE;MN | same plain-language split | 2026-08-23 |
| `default-by-tenant` | CO;WY;MN;ND | same plain-language split | 2026-08-24 |
| `early-termination` | CO;WY;MN;ND | same plain-language split | 2026-08-24 |

All four came from the same cross-state plain-language cleanup during the Minnesota session, following MN's plain-language audit. **Classification: UNIFORM, and specifically not state-driven** — the rows' own notes are explicit that only MN's Plain Language Contract Act (Minn. Stat. § 325G.31) was confirmed to apply, and the cleanup was done as a general readability improvement because the pattern was library-wide rather than because MN's statute forced it on other states. Each is recorded as "no substantive change" — sentence splitting, not altered meaning. Wyoming inherits all four safely; no override is warranted.

**Two honest caveats on that classification.** First, it rests on the editing session's own characterization of its work as non-substantive; this entry did not re-read the before/after text to confirm no meaning shifted. Second, these edits predate §5a.1's creation on 2026-08-27, so they were never subject to the rule — recording them now discharges the obligation retroactively rather than catching a live violation.

**One row checked and excluded:** `services-utilities-provided` (CO;WY;NE) surfaced on a keyword scan for "CORRECTION," but reading its notes shows the correction concerns whether to tag MN, not an edit to the body text Wyoming reads. No note owed.

**Recommended addition to §5a.1**, for Taylor's call: the programmatic check needs a way to distinguish a `last_checked` bump caused by a text edit from one caused by a tag extension. The cheapest version is a convention — a required marker in `notes` for any bodyText/rule_type/content_type change (the existing `MATERIAL CORRECTION` and `plain-language cleanup` phrasings are already doing this informally, which is why this pass could resolve the 44 at all). A stricter version is a separate `last_edited` column distinct from `last_checked`. Without one of these, the check as written will keep producing ~90% false positives and will get worse as the state count grows.

### 5. ESA federal-currency question — RESOLVED for Wyoming, and a citation error found in shipped lease text (2026-08-28)

Ran the one-question state-law-basis check flagged in §3 above. Taylor supplied the full primary text of Wyo. Stat. §§ 35-13-201 through 35-13-206, per §5a.2. Two outcomes: the ESA question resolves favorably, and a material citation error was found in Wyoming's shipped tenant-facing clause.

**Determination: Wyoming HAS an independent state-law basis. `assistance-animal-accommodation-wy` stays VERIFIED.** It does *not* move to NEEDS_REVIEW alongside KS/NE.

Two enacted provisions carry it, neither dependent on HUD guidance:
- **§ 35-13-201(c):** "A person shall not be discriminated against in the leasing or rental of residential property because the person has an assistance animal, which shall be permitted in leased or rented residential property in accordance with the federal Fair Housing Act."
- **§ 35-13-205(a)(iv):** "'Assistance animal' means an animal that works, provides assistance or performs tasks for the benefit of a person with a disability, **or provides emotional support that alleviates one (1) or more identified symptoms or effects of a person's disability**."

That second definition is the whole ballgame. Many states protect only individually-trained service animals, which would leave ESAs exposed once HUD withdrew FHEO-2020-01 (2025-09-17) and narrowed enforcement to individually-trained animals (2026-05-22). Wyoming's legislature wrote emotional support into the statutory definition, so Wyoming's ESA housing protection rests on state law that has not moved.

**Qualifier, recorded rather than glossed:** § 35-13-201(c) permits the animal "in accordance with the federal Fair Housing Act," so while the *right* is independently state-created, its operative *mechanics* (documentation, fees, the accommodation analysis) are federally referenced. This is a weaker basis than Colorado's CADA, which supplies its own standards. No Wyoming case law construes § 35-13-201(c). Classify Wyoming as **independent statute — yes, but federally-referenced and untested**, a notch below CO.

**Note also § 35-13-201(a)(iii)**, a separate and broader hook: a person with a disability "shall not be discriminated against in the leasing or rental of apartments and other private residential property because of his disability."

#### 5.1 Material citation error corrected — `assistance-animal-accommodation-wy`

The clause's final sentence, shown to tenants, cited **§ 35-13-207**. **That section does not exist.** The article ends at § 35-13-206. The misrepresentation misdemeanor is at **§ 35-13-203(b)**.

- **Corrected in `bodyText`**; `35-13-207` now appears nowhere in the library (verified programmatically post-write).
- **The $750 figure was correct and is unchanged** — § 35-13-203(b) provides a fine of "not more than seven hundred fifty dollars ($750.00)." Only the section number was wrong.
- **This was a verification-depth failure, not a research-methodology failure.** The row's own notes claimed the citation was "pulled directly from wyoleg.gov (primary source) to confirm wording, corroborated by 5 independent secondary sources." It was not. This is the same class of error the CO re-audit surfaced (§A of the architecture-review addendum) — shipped `VERIFIED` on a citation that primary text does not support. It is the first confirmed instance of that class in a state *other* than Colorado, which materially strengthens the addendum's warning that "all six other completed states were built under the same conditions… none has been tested."
- **Contamination note:** the research pass independently flagged that fabricated "§ 35-13-207" citations circulate on ESA-letter-selling websites. The five "independent secondary sources" the original note relied on were most likely repeating one bad upstream source — precisely the aggregator-consistency failure mode this project already had a standing rule about.

#### 5.2 Two collateral confirmations

- **§ 35-13-203(b) reaches housing.** It penalizes misrepresenting "a service animal or an assistance animal" to obtain "any of the rights or privileges set forth in **this article**" — and § 35-13-201(c) is in that article. So the criminal deterrent genuinely applies to the rental scenario. This distinguishes Wyoming from Minnesota, where § 609.833 was found likely *not* to reach housing, making MN's lease-remedy sentence the operative protection instead.
- **2025 SF0147's $5,000 penalty is a different offense.** It sits at § 35-13-206(a) — injuring or killing a service or assistance animal — not misrepresentation. The misrepresentation penalty remains $750. The clause needed no dollar-figure change.

#### 5.3 Open, not addressed here

- **MN and ND overrides remain unchecked.** Per §3's table, `assistance-animal-accommodation-mn` (2026-08-23) and `-nd` (2026-08-24) still carry pre-audit dates and the same federal-baseline text. Wyoming's result does not transfer — each needs its own state-basis check. ND's notes already self-flag that its penalty was "not independently verified against primary text," which given what this pass found in Wyoming is now a materially more concerning open item than it looked before.
- **§5a.1's row-vs-text gap (§3 above) is unresolved.** This session confirms the gap is real and consequential: WY's override was carrying both an unverified federal basis *and* a fabricated citation while sitting at `VERIFIED`, and no programmatic check in the current schema would have surfaced either.
- **Citation-existence check.** Nothing in the current process verifies that a cited section *exists*. A cheap programmatic screen — extract every statutory citation from `bodyText`, verify each against the state's actual section list — would have caught this in seconds. Recommend adding to the architecture-review backlog.

---

**CSV changes this session:** `steinoak_clauses_updated_42.csv`. One row modified (`assistance-animal-accommodation-wy`): `bodyText` citation corrected § 35-13-207 → § 35-13-203(b); `last_checked` → 2026-08-28; `verification_status` remains `VERIFIED`, now on a primary-source-confirmed state basis. No new rows, no `states` changes. 361 rows total, 94 WY-tagged. Duplicate-ID assertion passed pre-write; post-write verification confirmed row count, ID uniqueness, and zero remaining `35-13-207` references library-wide.

### 6. Session 8 (2026-08-28): deposit split, fee-shifting resolved, cadence set

Three items closed, all from Taylor's decisions this session.

#### 6.1 Security deposit split to the CO pattern — DONE

Wyoming had been carrying deposit *use* and deposit *return* in a single clause, unlike Colorado's two-clause pattern (generic `security-deposit-use` + short state-specific return override). Taylor elected to split and reuse the generic use clause rather than write a WY-specific one.

- `security-deposit-use` extended `CO;NE;MN;ND` → **`CO;NE;MN;ND;WY`**
- `security-deposit-return-wy` trimmed to return mechanics only — the application sentence was removed; still supersedes the generic `security-deposit-return`

Retained in the WY return clause, all sourced to Wyo. Stat. § 1-21-1208(a): the 30-day deadline (or 15 days after forwarding address, whichever is later), the +30-day extension where the property is damaged, the written itemization with reasons, and the tenant's 30-day forwarding-address duty.

**Two deliberate giveaways, accepted rather than overridden — recorded so they are decisions, not drift:**
1. The generic clause permits cleaning deductions only where the property is *"substantially less clean"* than at move-in. § 1-21-1208(a) is more permissive: it allows the cost to clean *to the condition it was in at the start*. Wyoming landlords using this clause give up some cleaning-deduction latitude the statute would allow.
2. § 1-21-1208(a)'s catch-all — "any other costs this Lease provides for" — is not carried into the generic clause.

Neither is unlawful; both are more tenant-favorable than Wyoming requires. If either turns out to matter commercially, the fix is a WY-specific use clause superseding the generic, not an edit to the shared row.

**Minor redundancy noted, not acted on:** the generic use clause and `nonrefundable-deposit-notice-wy` both render `{{security_deposit}}`, so the deposit amount will appear twice in a Wyoming lease — once on collection, once in the nonrefundable disclosure. Cosmetic, and the § 1-21-1207 disclosure genuinely needs the figure to be intelligible. Flagged for a future formatting pass.

#### 6.2 Fee-shifting — the `edu-fee-shifting-co` counterpart, open since session 5, is closed

**Wyoming has no reciprocity statute, and the answer is the opposite of Colorado's.** Wyoming applies the American Rule — each side bears its own fees absent contract or statute (*Circle Resources v. Hassler*, 2023 WY, citing *Levy v. Aspen S* and *Prancing Antelope I*) — and a contract must "unequivocally provide" for fee recovery before fees will be awarded (*Cowardin v. Finnerty*, 1999 WY, citing *Coulter v. City of Rawlins*). Wyoming is **not** among the seven reciprocity states (CA, FL, HI, MT, OR, UT, WA), and a Drake Law Review survey places it among the 31 states with no protection against one-sided fee provisions at all. **No WY analog to C.R.S. § 38-12-801(3)(a)(II) exists.** A landlord-only fee clause would be enforceable in Wyoming.

Logged as `edu-no-fee-reciprocity-wy`.

#### 6.3 A §5a.1 violation found retroactively — `default-by-tenant`

Closing 6.2 surfaced a live instance of the exact failure §5a.1 was written to prevent.

The prevailing-party attorney-fee language in `default-by-tenant` (CO;WY;MN;ND) was **forced by Colorado law** — C.R.S. § 38-12-801(3)(a)(II) voids landlord-only provisions there. That is a **state-driven** edit, not uniform. It was inherited by WY, MN, and ND with no classification recorded at the time. Wyoming landlords have therefore been extending tenants a reciprocal fee right that Wyoming law does not require, as a side effect of a Colorado fix, never as a decision.

**Taylor's decision 2026-08-28: keep the mutual language for Wyoming.** Simpler, more even-handed, not unlawful, and not worth a WY override. Recorded as a choice rather than left as drift.

**MN and ND still owe this check in their own logs.** The same unclassified Colorado-driven edit sits in both, and neither has been assessed against its own state's fee-shifting law.

This is now the **second** §5a.1-class finding this state has produced in two sessions (the first being the fabricated § 35-13-207 citation in §5.1). Both were invisible to every programmatic check the schema currently supports.

#### 6.4 Re-verification cadence — proposed, Taylor's to confirm

**Proposed rule: re-verify Wyoming every April.** Wyoming's legislature runs a short session — roughly January through March, shorter still in budget years — so April is the first month each year when the year's new law is settled and knowable. The `last_checked` column added earlier is the mechanism; the cadence is just the rule for when a date has gone stale.

Practical limitation, stated plainly: this cannot be automated from inside a session. There is no timer and no reminder — the cadence works only if a session is started to run it. Lowest-priority of this session's items; it matters at year two, not now.

---

**CSV changes this session:** `steinoak_clauses_updated_43.csv`. 362 rows (+1), 96 WY-tagged (+2). One row added (`edu-no-fee-reciprocity-wy`); one `states` extension (`security-deposit-use`); one `bodyText` trim (`security-deposit-return-wy`); one notes-only retroactive classification (`default-by-tenant`, no text change, `last_checked` deliberately not bumped since nothing was edited). Duplicate-ID assertion passed pre-write; post-write verification confirmed row count and ID uniqueness.

---

## Addendum — 2026-08-28, session 9: rebase, citation screen, and final close-out

### 7. Both re-audits were running on a stale CSV — resolved

The Colorado re-audit and this Wyoming session were each handed a CSV that **predated South Dakota entirely** (361 rows, zero SD content). SD was completed as state #7 and holds 37 rows in the real trunk. Both sessions therefore produced branches off the wrong base.

| file | rows | SD? | CO re-audit fixes? | WY session fixes? |
|---|---|---|---|---|
| `_41` (stale base both chats used) | 361 | ❌ | ✅ | ❌ |
| `_44` (this session's output) | 362 | ❌ | ✅ | ✅ |
| `_55` (true trunk, all 7 states) | 384 | ✅ | ❌ | ❌ |
| `_56` (reconciled merge) | 395 | ✅ | ✅ | ✅ |
| **`_57` (current, CO wrote it)** | **395** | ✅ | ✅ | ✅ |

Adopting `_44` would have silently deleted all 37 SD rows. Adopting `_55` would have re-shipped errors CO had already fixed — including a phantom **"$20.00 per occurrence, as required by Colorado law"** NSF cap in tenant-facing lease text and the non-verbatim lead-paint warning. `_56` merged both branches onto the trunk; the CO session verified the port as byte-identical on all 11 modified and 10 added rows, then wrote `_57` (one row, `edu-service-animal-fraud-ks`, notes only).

**Process lesson worth carrying to every future state: confirm the CSV version at session start before doing any work.** A row-count and state-tag check takes seconds. Neither session ran one, and the cost was a full reconciliation session.

### 8. Citation-existence screen — Wyoming's results

Built in response to the fabricated `§ 35-13-207` (§5.1). Extracts every statutory citation from `bodyText` and checks the cited section exists.

**Wyoming is clean on tenant-facing text.** WY's only lease-clause citation is `assistance-animal-accommodation-wy` → `Wyo. Stat. § 35-13-203(b)`, verified against primary text this session.

Library-wide Tier 1 (citations inside lease clauses) is **5 rows across all seven states**, all now verified. Two of the five carried real errors — WY's phantom cite and CO's "criminal offense" mischaracterization of a civil infraction. A 40% error rate in the tier that actually reaches tenants.

**Screen limitations found while building it, recorded so they aren't rediscovered:**
- v1 undercounted by ~20%. It matched only the `§` glyph, missing the spelled-out `C.R.S. section 38-12-1301` form and continuation cites like `sections 18-13-107.3 and 18-13-107.7`. Both misses fell almost entirely on Colorado, whose drafting convention favors the spelled-out form — the state with the most clauses was the state least covered.
- **An existence check cannot catch a correct citation described wrongly.** CO's "criminal offense" error was a valid cite with a false characterization. Per-state passes still require reading what the statute says.

**WY has 16 citations that appear only in `notes`, not `bodyText`** — the lowest-risk pocket in the library. Nearly all are Article 12 sections (`1-21-1202` through `1-21-1211`) and Safe Homes sections read in full primary text during the statute walk, plus `35-13-201`–`206` from text Taylor supplied. The one genuinely unread cite is `Wyo. Stat. § 40-12-105` (Consumer Protection Act). `35-13-207` appears only as its own correction record.

### 9. Final status — Wyoming closed

Verified against `_57`, not memory: **96 WY-tagged rows, all `VERIFIED`**, zero `NEEDS_REVIEW`, zero supersedes collisions library-wide. 62 `LEASE_CLAUSE`, 34 `LANDLORD_EDUCATION`. One intentionally inactive row (`dv-safe-homes-proactive-wy`, the unselected Safe Homes posture).

**Carried forward, not blocking:**
- **South Dakota owes a §5a.1 note** on four shared rows tagged both WY and SD — `security-deposit-use`, `possession-delay`, `surrender-end-of-term`, `early-termination`. SD's log, not WY's.
- **Re-verification cadence: April**, proposed, unconfirmed. WY's legislature runs Jan–Mar, so April is the first month the year's law is settled.
- **Three checklist rows still genuinely open for WY** — immigration-status inquiry prohibition, right to call police (non-waivable), immigrant tenant protection act analog. Never checked here.

**Wyoming's asterisk is unchanged and remains the honest headline:** Wyoming state law, verified against primary text. Municipal deferred. Federal deferred except the lead-paint and ESA spot-checks. No attorney review.

---

## §5a.1 PROPAGATION NOTE — incoming from the Nebraska re-audit, 2026-08-31 (v62 → v63)

Two shared clauses tagged to WY were touched by the Nebraska re-audit.

### 1. `services-utilities-provided` (CO;WY;NE) — bodyText REWORDED, judged UNIFORM

**Old:** "Tenant waives all liability of Landlord for any interruption or insufficiency of a service or utility resulting from causes beyond Landlord's reasonable control."
**New:** "Landlord is not liable for any interruption or insufficiency of a service or utility resulting from causes beyond Landlord's reasonable control."

**Why.** Neb. §76-1415(1)(d) bars exculpation or limitation of landlord liability "arising due to **active and actionable negligence**." Because the clause is already self-limited to causes beyond the landlord's reasonable control — which by definition is not the landlord's active negligence — the original Nebraska reasoning on (d) was **correct**, and no negligence carve-out was needed. The real exposure was **§76-1415(1)(a)**, which bars the tenant agreeing to "waive or forego rights or remedies under the Act": the clause opened with a tenant-side *waiver*, which invites that argument for free. Recast as an allocation. **Substance unchanged in every state.**

**Neutral for Wyoming.** The WY re-audit confirmed Wyoming has no prohibited-lease-provisions statute at all — no attorney-fee ban, no confession-of-judgment ban, no exculpation ban — so neither the old nor the new wording is at risk under Wyoming law. The change is adopted for consistency and clarity, and costs Wyoming nothing: the substance is identical.

**§5a.1 judgment: UNIFORM, not state-driven.** No state is disadvantaged and no state needs an override. A Nebraska-only override was deliberately **not** created, because the improvement is not Nebraska-specific.

### 2. `late-fee` (was CO;WY;NE;MN) — NE REMOVED, no text change

Nebraska took its own `late-fee-ne`. Neb. §76-1433 waives the landlord's right to terminate for a breach on accepting rent with knowledge of it, "unless otherwise agreed **after the breach has occurred**" — an express timing rule the shared clause's unqualified "or to pursue any other remedy available under this Lease" collides with.

**§5a.1 judgment: STATE-DRIVEN. Deliberately NOT propagated to WY.** A non-waiver clause preserving termination is genuinely valuable where contract can preserve it, and WY has not been shown to carry Nebraska's express timing rule. Narrowing every tagged state to solve one state's problem would surrender real protection in the others. **WY keeps the clause unchanged.**

**Worth checking when WY is next revisited:** whether WY's own late-rent waiver rule is statutory or common-law, and whether it reaches *termination only* (as Nebraska's does) or other remedies too. Nebraska's narrowness was the surprise of that analysis — the prior conclusion had been wrong in both directions, overstating what the landlord loses and understating the clause's exposure.


---

## §5a.1 PROPAGATION NOTE — Shared-clause pass, 2026-09-03 (v93 → v94)

Three shared multi-state clauses were edited. Per §5a.1, this note is recorded in **every tagged state's log**, with the uniform-vs-state-driven judgment for each.

### 1. `notices` — EDIT — judgment: **UNIFORM**

Added a saving clause: where applicable law requires a particular method, form, timing, or content for a notice, that requirement controls over the clause, and the lease does not designate an alternative delivery method for any notice governed by law.

**Uniform**, therefore safe to inherit with no per-state override. Every tagged state specifies notice delivery per-statute, so deferring is correct in all of them.

**Trigger:** the Minnesota re-audit found MN specifies delivery section by section with conflicting requirements — the 14-day pre-eviction notice is personal or first class mail **only** and failure means dismissal plus expungement; abandoned-property sale needs personal service **or** first class **and** certified mail **plus** posting; post-writ notice needs mail **plus** a telephone attempt. The prior text named only *where* notices go and was silent on *how*.

**Correction to the original flag:** the concern as first raised (that the clause designated email or a portal) was overstated — the clause never designated anything. It was silent, not wrong. The edit closes a silence rather than fixing an assertion.

### 2. `returned-payments` — EDIT — judgment: **UNIFORM**

"may charge Tenant **any** fee associated with the failed payment" → "may charge Tenant **a** fee ... **not to exceed the maximum amount permitted by applicable law**."

**Uniform**, safe to inherit, no per-state override. The self-limiting formulation is correct in every tagged state regardless of each state's figure.

**Trigger:** all six tagged states have a cap and already carry a row recording it — CO `nsf-fee-limit-co`, WY `edu-returned-check-fee-cap-wy`, KS `edu-nsf-fee-cap-ks`, NE `edu-bad-check-restitution-vs-nsf-fee-ne`, ND `edu-returned-check-fee-cap-nd`, MN `edu-returned-check-fee-cap-mn` ($30, Minn. Stat. §604.113). The unbounded word "any" was therefore wrong in **all six states simultaneously** — the clause promised landlords something no tagged state permits.

### 3. `holdover` — EDIT — judgment: **STATE-DRIVEN figure, uniform-safe edit**

Removed the hardcoded "double the Monthly Rent ... or the maximum amount allowed under applicable law, if less" and replaced it with a pure deferral to the statutory maximum.

The figure is genuinely state-driven, but no per-state override is needed because each state's figure is already carried by its own education row.

**The old text was wrong in BOTH directions, which is why leaving it was not an option:**

- **Over-promised in MN.** Minnesota has **no holdover multiplier at all**. "Double the Monthly Rent" described a remedy that does not exist. The self-limiting tail kept it lawful but misleading.
- **Under-claimed in NE.** Nebraska allows **three months' periodic rent or threefold actual damages, whichever is greater, plus statutory attorney fees** (§76-1437(3)) — all of which **exceed** double monthly rent. The old "or the maximum allowed ... if less" language could only cap **downward**, so a Nebraska landlord relying on the clause would recover materially less than the statute allows.

**The general lesson worth carrying:** a ceiling-only formulation silently forfeits recovery in any state whose statutory figure is *higher* than the hardcoded one. Self-limiting language protects against unlawfulness but not against under-claiming.

KS is unaffected either way — its 1.5× cap (K.S.A. 58-2570(c)) already sits below double.

**GAP SURFACED, NOT CLOSED:** **CO and WY have no holdover-damages education row**, and their statutory figures have never been verified in this project. The "double" figure appears to have originated as Colorado's, but that has not been confirmed against C.R.S. Recommend verifying both and adding `edu-holdover-co` / `edu-holdover-wy` to match KS, NE, and MN.

**Relevance to Wyoming:** all three clauses are WY-tagged. WY has no holdover education row and its statutory holdover figure has never been verified in this project — flagged for the WY re-audit.

**CSV: v93 → v94 (484 rows, unchanged count — body text and notes only).** No new rows; no display collisions introduced.


---

## HOLDOVER FIGURE — PROVENANCE FINDING, 2026-09-03 (v96 → v97)

Follow-up to the shared-clause pass, which removed "double the Monthly Rent" from the generic `holdover` clause and flagged that CO's and WY's figures had never been verified.

**Both are now checked. The result: the "double" figure had no statutory basis in ANY of the five tagged states.**

| State | Actual rule | vs. "double" |
|---|---|---|
| **CO** | No multiplier. C.R.S. §13-40-123 — damages, costs, and attorney fees (residential only if the lease provides). Damages measured as **reasonable rental value** (*Behr v. Burge*, 940 P.2d 1084 (Colo. App. 1996)) | Too high |
| **WY** | No multiplier. Actual damages plus 10% annual interest (§1-21-1211(b), **provisional — see caveat**) | Too high |
| **KS** | 1.5× cap (K.S.A. 58-2570(c)) | Too high |
| **NE** | Three months' periodic rent or threefold actual damages, whichever greater, **plus attorney fees** (§76-1437(3)) | Too **low** |
| **MN** | No multiplier at all | Baseless |

**Wrong in every direction at once** — too high in three states, too low in one, and baseless in the two where it was assumed to have originated.

**The shared-clause pass hypothesized the figure "appears to have originated as Colorado's." That hypothesis is disproved.** Colorado has no multiplier. The number appears to be generic template boilerplate that entered the library before any state-specific research and was never questioned — and it survived four state re-audits.

**Why this one is worth recording as a pattern, not just a fix:** nothing in the library ever asserted a source for "double." Each state's own research quietly contradicted it — KS logged a 1.5× cap, NE logged a higher ceiling, MN logged none — and no pass ever compared the state findings back against the shared clause they were supposed to be qualifying. The self-limiting tail ("or the maximum allowed under applicable law, if less") made the clause lawful everywhere, which is exactly what stopped anyone from looking.

**Also corrected:** `edu-holdover-ne` described double monthly rent as "Colorado's double-rent figure." That attribution was wrong and is now flagged in the row.

New rows: `edu-holdover-co`, `edu-holdover-wy`.

### Confidence caveats, stated plainly

- **CO** — statute text and case annotation both from the Justia codification rather than the Colorado Revisor directly. Sound, but a single source family, and the "no multiplier" conclusion is an **absence finding across Article 40** rather than an express statutory statement. Confirm on the next CO pass.
- **WY — lower confidence, flagged.** The §1-21-1211(b) actual-damages-plus-10%-interest figure comes from **one secondary source last updated in 2022** and was not confirmed against the Wyoming statute. The surrounding negative rests on absence across secondary overviews, not a primary read of Article 10. **This project has already recorded Wyoming secondary sources as unreliable specifically** (the WY log flags Hemlane and LeaseWisely). Primary-verify §1-21-1211 before relying on this row; treat the 10% figure as provisional.

---

## §1-21-1211 PRIMARY-VERIFIED — 2026-09-03 (v97 → v98)

The low-confidence caveat on `edu-holdover-wy` is discharged. §1-21-1211 read in full from **wyoleg.gov** (the Wyoming Legislature's own site) and cross-confirmed against **Justia's 2024 codification** — identical text, two independent source families.

**The read found an error in my own row, written one turn earlier.**

The prior body text presented §1-21-1211(b)'s "actual damages plus 10% interest" as the measure applying when a **holdover** tenant's liability exceeds the deposit. That is a misapplication. Subsection (b) opens *"If the renter **damages the rental property**"* — it governs **property damage**, not holdover rent, and says nothing about liability for a holdover period. I took a figure from a secondary source that had cited the section correctly, and attached it to the wrong subject.

**This is precisely the failure mode Wyoming's own re-audit added to the checklist — "a correct citation can still be described wrongly."** A citation-existence screen passes it; only reading the section catches it. It is the second time this session I committed a failure mode I had just finished documenting.

**The underlying negative stands and is now stronger.** Wyoming has **no holdover damages formula**. That conclusion no longer rests on a misread provision — it rests on §1-21-1211 being the residential rental article's damages section and containing no holdover measure at all.

### New finding — post-writ possessions

§1-21-1211(a): *"If the renter does not vacate the premises as required by a court order ... the sheriff may remove the renter's possessions and prevent the renter from reentering the premises **without further action by the court**."*

**Wyoming imposes no storage period, no inventory requirement, no duty of care over removed property, and no notice-before-disposal obligation.** That is far less prescriptive than Minnesota, which requires a signed inventory prepared in the officer's presence, mailed notice, a care standard, and either a 28-day hold or a 60-day lien-and-sale track depending on storage location.

Logged as `edu-post-writ-possessions-wy`. The eviction-duty screen had recorded WY at **0 post-writ property rows**; this fills that with a **confirmed-absent** answer rather than leaving the absence invisible, per the proof-of-absence rule.

**Found incidentally** while verifying subsection (b) — which is itself an argument for the whole-section rule: the screen-relevant finding was in the subsection I did not go looking for.

**Flagged:** the row's closing caution about conversion and bailment is general common-law reasoning, **not a Wyoming statutory finding**, and is marked as such in the row.


---

## § 5a.1 PROPAGATION NOTE — received from the ND re-audit session, 2026-09-06

**Shared clause edited: `lead-based-paint`.** Its `states` field changed from `CO;WY;KS;NE;MN` to `CO;WY;KS;NE;MN;ND;SD`. **The clause TEXT did not change.** No re-review is owed on this state's existing tag and this state's `last_checked` is unaffected.

**Why the edit happened.** A checklist-to-CSV reconciliation screen — built and first run during the ND re-audit — found that this `REQUIRED` / `LEASE_CLAUSE` row was never tagged ND or SD, even though the consolidated named-topic checklist recorded lead-paint disclosure as "Present (federal)" for ND. Because the `states` field is the display source of truth, a Steinoak-generated ND or SD lease for pre-1978 target housing was **omitting the federally mandated Lead Warning Statement entirely**. Exposure per this row's own record: 42 U.S.C. § 4852d(b)(5), inflation-adjusted to **$22,263 per violation** (24 CFR 30.65(b)), plus treble damages and fees.

**§ 5a.1 judgment: UNIFORM, safe to inherit.** The requirement is federal (40 CFR 745.113(b)) with no state-specific variation — the same judgment already recorded for the KS propagation when the Lead Warning Statement was corrected to verbatim text.

**The transferable lesson, not the tag change, is the reason this note is here.** The checklist asserted coverage the library did not have. That assertion was true about the *law* and false about the *library*, and nothing in the process compared the two. Two new standing screens were earned from it:

1. **Checklist-to-CSV reconciliation** — for every topic marked Present, assert a matching CSV row exists.
2. **Exhaustive generic-clause audit by group** — enumerate every generic clause and test each state's tag, adjudicating misses rather than trusting a keyword probe.

**This state's result on screen 2, run 2026-09-06 across all seven states:** every generic lease clause not tagged to this state has a state-specific override in place. **No defect found here.** The defect was confined to ND (43 clauses, since fixed) and SD (45 clauses, outstanding — flagged for the SD session).

---

# CORE-OBLIGATIONS CANVASS — 2026-09-07 (PARTIAL — deposits, habitability, tenant remedy)

Appended during the **South Dakota** re-audit session. Context: SD's re-audit found the consolidated named-topic checklist had **no topic row** for several universal landlord obligations — **Addendum L.10**, accretion bias. A `CORE OBLIGATIONS` section was added; SD, ND, MN, KS, CO and NE have been canvassed. **Wyoming is the seventh and last state.** This pass covers seven of fifteen cells.

**Source tier stated up front:** Wyoming text here is from **Justia's 2025 codification plus concordant secondary sources, not from wyoleg.gov.** Every WY cell is marked accordingly and sits **below** the other six states in confidence. This should be upgraded before any WY clause work relies on it.

## Wyoming is the most permissive of the seven — except where it isn't

**No deposit cap. No separate account. No interest** — § 1-21-1208(a) requires return *"without interest"* in terms. **§ 1-21-1207 requires written notice of any NONREFUNDABLE deposit**, making Wyoming the only one of the seven to contemplate a nonrefundable deposit at all — at the opposite pole from Colorado, where § 38-12-106 now *requires* pet deposits to be refundable.

**And the remedy for non-compliance is the weakest of the seven.** § 1-21-1208(c): the renter recovers **the full amount wrongfully withheld and court costs**. No multiplier, no punitive element, **no attorney fees**. Against CO treble plus fees, ND treble, MN double plus $500 punitive, KS 1½×, NE liquidated damages capped at the lesser of one month's rent or 2× the deposit plus fees as of right, and SD forfeiture plus a $200 cap — **Wyoming is the only state where a landlord who wrongfully withholds faces no consequence beyond returning what was owed.** Meanwhile § 1-21-1211(b) lets the *owner* recover damages exceeding the deposit **with 10% per annum interest.** The asymmetry is worth recording plainly.

**A deadline mechanic no other state has.** § 1-21-1208(a) runs **30 days from termination or 15 days from receipt of the new mailing address, whichever is later** — and then: *"If there is damage to the residential rental unit, this period shall be extended by thirty (30) days."* **Wyoming is the only one of the seven where the landlord's own damage claim extends the landlord's own deadline**, to 60/45. Every other state runs a single clock the landlord cannot lengthen by asserting a claim.

The renter carries a reciprocal duty: **within thirty days of termination, notify the owner where payment and notice may be made.**

## But the habitability duty cannot be waived — and that changes a split recorded earlier

§ 1-21-1202: **the warranty of habitability cannot be waived or modified by the parties.**

**This revises a finding entered earlier in this canvass.** The CO entry recorded a clean **3–2 split** — CO/MN/SD non-waivable against ND/KS delegating. With NE and WY now canvassed the picture is **4–3**: **CO, MN, SD and WY non-waivable**; **ND, KS and NE permitting structured delegation** — with the NE entry's own caveat that Nebraska pairs the narrowest delegation with an express anti-waiver rule and so sits closer to the non-waivable group in substance.

**The Wyoming case is the most striking.** Its substantive duty is the thinnest of the seven — safe, sanitary and fit for occupancy; operational electrical, heating and plumbing with hot and cold water unless otherwise agreed in writing; common areas sanitary and reasonably safe — and **it is conditioned on the renter being current in rent**, which no other state does. Yet the little that exists **cannot be contracted around**. Permissive in substance, rigid in form.

## Tenant remedy: the narrowest of the seven

The renter must be **current in rent**, give **written notice**, and allow a **reasonable time** to remedy. On failure the renter may terminate, with pro-rated rent to the termination date and return of prepaid rents and deposits after deductions (§ 1-21-1203(d)). **Wyoming does not permit rent withholding to compel repairs, and has no repair-and-deduct and no escrow.**

All seven now recorded: **CO** terminate, punitive damages, injunctive relief, AG enforcement, receivership · **MN** court-administered escrow with receivership · **SD** repair-and-deduct, vacate, own-account escrow · **ND** repair-and-deduct · **KS** and **NE** terminate-or-sue for damages · **WY** terminate only, and only if paid up.

## Eight cells still NOT CANVASSED for Wyoming

Tenant repair duty (**§ 1-21-1204**); both assistance-animal rows; general reasonable-accommodation duty; required state disclosures (**§ 1-21-1207** is one, already noted); rent-modification notice (**reported as no statute**); periodic-tenancy termination notice (**§ 1-21-1002** is the lead); state-wide lease-content restrictions.

**Also recorded for the next pass:** § 1-21-1205 (prohibited acts by renter; entry grounds), § 1-21-1206 (renter's remedies), § 1-21-1209 (holder of owner's interest bound), § 1-21-1211(b) (owner's recovery beyond the deposit, 10% interest), § 1-21-1303 (domestic-abuse termination), **§ 1-1-115(b) (returned-check fee capped at $30)** — the last being outside Article 12 entirely and the WY analogue to SD § 57A-3-421's $60 and ND's $40.

## No CSV changes

Canvass and record only; **no §5a.1 propagation owed.**

## Remaining cells — Wyoming canvass complete, 15 of 15

**A widely-repeated 30-day termination-notice claim rests on a miscitation.** Multiple sources state Wyoming has **no statute** governing notice to terminate a periodic tenancy of any length — month-to-month, week-to-week, or a year or longer. One commercial source asserts a **30-day** notice and cites **§ 1-21-1203**. That section is *"Owner's duties; notice by renter of noncompliance; duty to correct; exceptions; termination of rental agreement; liability limited"* — **it contains no termination-notice rule at all.**

Recorded as **unsupported pending primary verification**, not adopted. This is the fourth miscitation this canvass has caught in a secondary source (after RocketRent's SDCL § 43-32-2, DocDraft's SDCL § 43-32-14, and the KS handbook chain), and the pattern is consistent: **a plausible-sounding number attached to a real section number that does not say it.**

What Wyoming does have is an **eviction** notice — § 1-21-1003 requires a **3-day notice to quit** before filing a forcible entry and detainer action, for all § 1-21-1002 grounds, with rent required to be 3 days overdue for the nonpayment ground. **That is a precondition to suit, not a periodic-tenancy termination notice**, and conflating the two would materially misstate a landlord's obligations.

### Wyoming is the thinnest regulatory regime of the seven, and in one place it runs the other way

**No enumerated prohibited-provisions statute** (KS § 58-2547, NE § 76-1415 both have one). **No unconscionability statute** (ND § 47-16-13.3, KS § 58-2544, NE § 76-1412 all have one). No ban on confession of judgment, exculpation, or fee-shifting. **No state fair housing act** — the only one of the seven without one, so the FHA's accommodation duty operates directly with no state overlay.

**§ 1-21-1203(e) is the outlier that runs the other direction:** *"The owner is not liable under this article for claims for mental suffering or anguish."* **A statutory damages exclusion in the landlord's favour — the only one found in any of the seven states.** Every other state's landlord-tenant statute constrains what the landlord may do; Wyoming's also constrains what the tenant may recover.

**The comparison worth recording:** the SD re-audit established that South Dakota follows the ND pattern — no enumerated prohibited-provisions list — but does have **§ 53-9-3's general exculpatory limit** as a backstop. **Wyoming appears to have neither.** It is the SD pattern taken one step further, and the single non-waiver rule at § 1-21-1202 is the only lease-content restriction located.

### Two further contrasts

**The single mandated disclosure is the mirror image of every other state's.** § 1-21-1207 requires written notice of any **nonrefundable** deposit. KS § 58-2551, NE § 76-1417 and MN § 504B.181 all require **landlord or manager identity** disclosure; Wyoming requires none. Its one mandated disclosure instead protects the tenant against an unexpected forfeiture — a different problem entirely.

**Wyoming joins South Dakota as the second of seven with no move-in inventory requirement**, against ND § 47-16-07.2, MN § 504B.182 and KS § 58-2548. That refines the pattern recorded in the KS entry, which had SD as the sole outlier on a four-state sample.

**The tenant-duty row has a Wyoming-only element:** § 1-21-1204 requires the renter to **restore the unit to its original cleanliness and dispose of all waste before termination**. No other canvassed state imposes a statutory restore-to-original-condition obligation.

## Wyoming status — canvass complete

**Fifteen of fifteen cells carry a status**, every one tiered below the other six states because **the source was Justia's 2024/2025 codification plus concordant secondary material, not wyoleg.gov.** Three cells are recorded as *"not located"* rather than confirmed absent (both assistance-animal rows and reasonable accommodation), with the search boundary stated.

**This tiering should be resolved before any Wyoming clause work relies on these cells.**

**No CSV changes.** Canvass and record only; **no §5a.1 propagation owed.**

## PRIMARY-SOURCE UPGRADE — wyoleg.gov read in full, and it REFUTES one of my own cells

The tiering flag raised in the previous entry is resolved: **the whole of Title 1, ch. 21, art. 12 was read from wyoleg.gov**, the Legislature's own statute server (2024 Wyoming Statutes). All fifteen WY cells now rest on official text.

**The flag was justified. One cell was flatly wrong, and it was the one I built a cross-state finding on.**

### § 1-21-1202(d) — Wyoming is the MOST permissive of the seven, not the least

The previous entry recorded, from a secondary source, that *"the warranty of habitability cannot be waived or modified by the parties."* The official text says the opposite:

> **§ 1-21-1202(d).** "**Any duty or obligation in this article may be assigned to a different party or modified by explicit written agreement signed by the parties.**"

**Every duty in the article — including the habitability standard itself — is assignable and rewritable by signed writing.** Wyoming has no non-waivable floor at all.

**This invalidates the "4–3 split" recorded in this log's previous entry and in the CO entry.** The corrected picture:

| Non-waivable | Structured delegation permitted | **Fully modifiable** |
|---|---|---|
| CO (§ 38-12-503(5), § 38-12-507) · MN (§ 504B.161(1)(b)) · SD (§ 43-32-8) | ND (§ 47-16-13.1(4)–(5)) · KS (§ 58-2553(b)–(d)) · NE (§ 76-1419, narrowest, but paired with § 76-1415(1)(a)'s anti-waiver rule) | **WY (§ 1-21-1202(d))** |

**Wyoming is its own category.** Three groups, not two — and the state I had placed in the *most* protective group belongs in a group of its own at the opposite end.

**Two further narrowings the secondary sources also missed.** § 1-21-1202(c): the article **"does not apply to breakage, malfunctions or other conditions which do not materially affect the physical health or safety of the ordinary renter."** And § 1-21-1202(a) exempts **seasonal units such as summer cabins** not intended to have the amenities.

### § 1-21-1208(c) — two errors and one omission in the deposit-penalty cell

Official text: *"If the owner … **unreasonably fails to comply** with subsection (a) or (b) …, the renter may recover **the full deposit** and court costs."*

- The trigger carries a **reasonableness qualifier** the previous entry omitted.
- The remedy is **the entire deposit**, not merely the portion wrongfully withheld — **more generous** than recorded, so the earlier entry understated the tenant's position while overstating it elsewhere.
- **Missed entirely, and unique among the seven:** *"if the owner is the prevailing party and the court finds **the renter acted unreasonably in bringing the action**, the owner may be awarded court costs."* **No other canvassed state penalises a tenant for an unreasonable deposit claim.** Costs run both ways in Wyoming.

### § 1-21-1206 — the tenant remedy is a three-step ladder, not a bare termination right

The previous entry described "notice and reasonable time, then terminate." The actual structure: a § 1-21-1203(b) notice **served by certified mail**, to which the owner may respond by **disputing the claim in writing**; then a formal **"notice to repair or correct condition"** under § 1-21-1206(b) reciting the first notice and warning of court action in **three days**; then a **civil action in circuit court** where the court may award **costs, damages and affirmative relief**, damages expressly including **rent improperly retained or collected**, and relief including **an order directing repairs**.

Still no repair-and-deduct, no escrow, no self-help — but a genuine judicial remedy with damages, which the earlier entry did not convey. Counterweight: **§ 1-21-1203(d) lets the owner refuse repair and terminate** where cost is unreasonable in light of the rent, on 10–20 days' notice for the renter to find substitute housing.

### Confirmed correct on the official text

The deposit return deadline and its damage extension; the mandatory written itemization; no cap, no interest, § 1-21-1207's nonrefundable-deposit notice; § 1-21-1209 successor liability; § 1-21-1203(e)'s mental-suffering exclusion; the absence of any statutory periodic-termination notice; and § 1-21-1204's renter duties including the restore-to-original-condition obligation at (viii).

**Also now recorded**, previously absent: § 1-21-1210's **two-stage abandoned-property regime** — 7 days' notice, a further 7 days if the renter responds, storage costs payable before removal, owner not responsible for storage loss.

## Method note

**This is the clearest vindication in the whole canvass of tiering a source rather than trusting it.** The WY cells were marked below the other six precisely because they came from Justia and secondary compilations. Reading the official text changed **one cell to its opposite**, corrected **two more**, and invalidated **a cross-state structural finding** that had already been written into two other state logs. Had the tier not been flagged, that finding would have propagated as settled.

**All fifteen WY cells now carry the wyoleg.gov verification marker.**


## Propagated from the Nevada pass, 2026-09-24

Two shared rows tagged to this state were edited by the Nevada pass (§5a.1 / instruction 9):

1. `common-area-use` — appended: "Nothing in this Section restricts any display that applicable law entitles Tenant to make, such as the display of the flag of the United States or of religious or cultural items, subject to any lawful limits on its size, placement, and manner." Driven by NRS 118A.325 / 118A.327 (NV). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
2. `parking-vehicle-rules` — inserted "in accordance with applicable law" before the landlord's towing authority. Driven by NRS 487.038 (NV). Classification: UNIFORM — self-limiting. Inherit without override.

`last_checked` on both rows reset to 2026-09-24. No other field changed. Detail: lease-clause-decision-log-NV.md §§3.1, 11.6, 16. (Appended at sync, 2026-09-25.)


## Propagated from the Texas pass, 2026-09-25

Three shared rows tagged to this state were edited by the Texas pass (§5a.1 / instruction 9):

1. `tenant-maintenance` — "...except for ordinary wear and tear" now reads "...except for ordinary wear and tear and any condition that applicable law requires Landlord to repair or remedy." Driven by Tex. Prop. Code §92.006(c) / §92.0563(b) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
2. `no-alterations` — appended: "This Section does not limit any repair, installation, or rekeying that applicable law entitles Tenant to perform." Driven by Tex. Prop. Code §§92.0561, 92.164(a)(1), 92.165(1) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
3. `assigned-parking-space` — reassignment is now "subject to any limits applicable law places on changing parking rules or policies during the Term." Driven by Tex. Prop. Code §92.0131(e) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.

`last_checked` on all three rows reset to 2026-09-25. No other field changed. Detail: lease-clause-decision-log-TX.md §§3.1, 16. (Appended at sync, 2026-09-26.)


## Propagated at the Florida sync, 2026-09-26

A shared row tagged to this state was edited (§5a.1 / instruction 9), by Taylor's decision at the Florida sync, not by a state pass.

1. `application-of-payments`: payments are now applied **rent first**, oldest unpaid period first, and only then to fees and other charges ("unless Tenant directs otherwise in writing for a particular payment or applicable law requires otherwise"). It was fees first. The cure-preserving sentence is kept. NJ and FL are folded back into this row and `application-of-payments-nj` is retired. Reason: fees first turns an unpaid fee into an apparent rent shortfall. No tagged state's research found a statute requiring fees first, and rent first is lawful on any reading. Classification: UNIFORM. It removes a landlord-favorable ordering and adds no obligation. Inherit without override.

`last_checked` reset to 2026-09-26. No other field changed. This is not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-FL.md §16. (Appended at sync, 2026-09-26.)

2. `default-by-tenant` (second propagated edit at the Florida sync, 2026-09-26): the non-rent cure promise now ends "...does not cure the failure after receiving written notice, except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure." Driven by Florida's finding that promising a cure for every breach can contractually give up a state's no-cure termination grounds (checklist instruction 33). This is a targeted fix Taylor approved, not a re-audit. Classification: UNIFORM. It is self-limiting and adds no landlord right where no such law exists. Inherit without override. `last_checked` reset to 2026-09-26. Detail: lease-clause-decision-log-FL.md §16.

## Propagated from the Arizona pass, 2026-09-27

Not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-AZ.md §14 and §17. (Appended at sync, 2026-09-27.)

1. **Shared-row edit received from Arizona (2026-09-27, Taylor's decision) — `entire-agreement`.** The sentence "may not be changed except in writing signed by all parties" now continues ", or as applicable law permits Landlord to change it by written notice to Tenant." Driver: A.R.S. §33-1342(C), which lets an Arizona landlord amend existing leases by written notice to comply with new laws; the old wording could be read to waive such a right. Recorded as **uniform** under §5a.1: the words are self-limiting and change nothing where this state's law gives no unilateral amendment right, while preserving any right it does give (for example, rules adopted on notice or changes to a periodic tenancy on the notice the law requires). No state-specific override is needed. `last_checked` was reset to 2026-09-27.

2. **2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged WY** (§5a.1; uniform text, no WY override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. No application statute logged. Remedies run through `default-by-tenant`.

---

## Gap-discovery backfill (instruction 36) — 2026-09-27

*Numbered §20 deliberately: the WY log has two numbering runs (main log §§1–13, later session §§1–5). §20 collides with neither. Subsections below are §20.1 and §20.2.*

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§1 structure walk; §3 Article 12 section-by-section table; §4 Article 13 Safe Homes Act) |
| Gap-discovery source 2 — real-lease comparison | Done (§20.1: ASUW Approved Lease, Associated Students of the University of Wyoming / UW Student Attorney office, undated — host page last updated 2026-08-25) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§20.2) |
| Gap-discovery source 4 — outside-title search | Done (§6 "law outside Title 1"; extended in §20.2 with the Title 31 abandoned-vehicle finding) |

### §20.0 — Why this backfill exists: a numbering mismatch, not new work for its own sake

The old WY log used a different source numbering than instruction 36 now does, and the mismatch is what left two rows short:

- WY log §6 is headed **"Gap-discovery source #3 — law outside Title 1."** Under instruction 36's numbering that work is **source 4**, the outside-title search. The work was done; only the label was wrong.
- WY log §8 recorded **source #3 as "personal landlord experience"** and closed it **"Not applicable, confirmed 2026-08-21"** on the reasoning that Taylor has no landlord experience outside Colorado. Instruction 36 recast this source as a **landlord-scenario screen written by the model**, which removes the dependency on Taylor's experience entirely. So the "permanently N/A" finding was correct about the old source and is simply inapplicable to the new one. §20.2 runs it. **Taylor was not asked about his experience in this pass, per the prompt's explicit instruction.**
- Source 2 was genuinely incomplete. WY log §7 compared against free template mills (ezLandlordForms, Steadily, PandaDoc, ILRG, AAOA, PropMgmtForms); the later session's §4 recorded a redo attempt abandoned because the Wyoming Association of Realtors form is member-restricted and the ILRG Wyoming preview was thin. Both of those judgments were reasonable at the time and both stand — §20.1 succeeds by a route neither attempt tried: a lease published by a **public body**.

Scope: two targeted checks. **No re-audit of completed Wyoming work, no re-scrub of existing rows.** Instructions 1–36 in force. Result: **7 new rows, 0 changed rows, 6 confirmed absences, 3 cross-state questions for Taylor.**

---

### §20.1 — Part 1: real-lease comparison (gap-discovery source 2)

**Lease used.** *ASUW Approved Lease* — `https://www.uwyo.edu/studentatty/legal-documents/asuw-approved-lease.pdf`
**Publisher:** Associated Students of the University of Wyoming, distributed by the **University of Wyoming Student Attorney office**.
**Edition/date:** none printed on the document. The hosting page was last updated **2026-08-25**; that is the only date available and is recorded as such rather than passed off as an edition date.

**Why it qualifies (route (b) — a lease published by a state agency or public body).** The University of Wyoming is a state institution and the Student Attorney office is a public legal-services office. Critically, this is **not** a university-housing lease: it is the form the office puts in front of students renting from **private Laramie landlords**, described on its face as drafted collaboratively by local landlords, students, and ASUW representatives and intended to be fair to both parties. That makes it a real instrument used in the private Wyoming rental market, negotiated by actual Wyoming landlords — which is what source 2 is for. Two university-owned-housing leases were also located (`traditional-apt-lease.pdf`, `bison-run-lease.pdf` rev. 12.2022) and **deliberately not used**: institutional housing terms are atypical and would generate false gaps.

**Route (a) was tried first and failed**, consistent with the earlier session's finding: the Wyoming Association of Realtors form is member-restricted and no Wyoming brokerage or property-management company was found publishing a full lease. Generic multi-state form sites were excluded by the prompt and were not used.

**Instruction 6 applied throughout: the lease is a lead only.** Every statutory claim below was verified against primary text; nothing was adopted because the lease said it. **No text from the lease is reproduced here — it is copyrighted.** The map is by topic.

#### §20.1.1 — Provision map, by topic (20 provisions)

| # | Lease provision (topic) | WY library | Verdict |
|---|---|---|---|
| 1 | Parties | `notices`, `joint-several-liability` | Covered |
| 2 | Leased premises / description | `premises-description` family | Covered |
| 3 | Term — Option A month-to-month, 30-day termination notice | — | **GAP A** |
| 4 | Term — Option B fixed term | `lease-term`, `surrender-end-of-term` | Covered |
| 5 | Rent, due date, place of payment | `rent-payment`, `acceptable-payment-methods` | Covered |
| 6 | Late fee (capped, after grace period) | `late-fee` | Covered — no WY statutory cap; lease's own cap is its drafting choice, not law |
| 7 | Returned check charge | `returned-payments` + `edu-returned-check-fee-cap-wy` (W.S. 1-1-115(b), $30) | Covered |
| 8 | Security deposit — 30-day return, written statement | `security-deposit-return-wy` (W.S. 1-21-1208) | Covered |
| 9 | Security deposit — normal wear and tear defined to exclude dirt/soil | `security-deposit-return-wy` | Covered — WY does not define the term by statute; both documents define it contractually |
| 10 | Occupancy limits | `permitted-occupants` | Covered |
| 11 | Pets | `pet-policy`, `pet-deposit-fee`, `pet-insurance-requirement` | Covered |
| 12 | Use and conditions — check-in/check-out inventory within 10 days | `existing-condition` (extended CO;WY in §7) | Covered |
| 13 | Utilities | `utilities-responsibility`, `services-utilities-provided`, `utility-service-continuity` | Covered |
| 14 | Maintenance and repair, incl. lawn mowing and snow removal | `tenant-maintenance`, `snow-removal`, `edu-repair-notice-process-wy` (W.S. 1-21-1202/1203) | Covered |
| 15 | Liability of lessor (exculpatory, carve-out for lessor's own negligence) | `tenants-property-insurance` + `edu-no-prohibited-lease-provisions-statute-wy` | Covered — WY has no prohibited-provisions statute, confirmed in the later session's §1 |
| 16 | Right of privacy and access | `landlords-access` + `edu-no-entry-notice-statute-wy` | Covered |
| 17 | Default by lessee and remedies — liquidated damages, re-renting, removal/storage of belongings | `default-by-tenant`, `early-termination`, `abandoned-property-wy`, `edu-post-writ-possessions-wy` | Covered |
| 18 | Constructive eviction | — | Not needed — see §20.1.3 |
| 19 | Delayed possession | `possession-delay` | Covered |
| 20 | Assignment and subleasing (consent not unreasonably withheld) | `no-sublet-assign` | Covered |
| 21 | Notices | `notices`, `edu-abandoned-property-notice-methods-wy` | Covered |
| 22 | Waiver | `entire-agreement` family | Covered |
| 23 | Joint and several liability | `joint-several-liability` | Covered |
| 24 | Other provisions / addenda | `additional-provisions` family | Covered |
| 25 | Signature block — **lessor identifies capacity: owner, agent, or holder of a leasehold** | — | **GAP B** |

*(Numbered to 25 because several of the lease's 20 headed provisions carry two distinct topics; each was mapped separately rather than collapsed.)*

#### §20.1.2 — Gaps found, and the rows written

**GAP A — no clause states a periodic-tenancy termination notice period.** → new row **`periodic-tenancy-notice-wy`** (LEASE_CLAUSE, CONDITIONAL, `topic_key=termination-notice`, group Default & Termination).

This is **instruction 19's failure shape in its purest form.** `edu-no-statutory-termination-notice-wy` already tells the landlord, in terms: *"Because there is no statute, the lease itself is doing the work — state the notice period in writing rather than relying on a default that does not exist."* And `holdover` (CO;WY;KS;NE;MN;FL;AZ) says a continued tenancy is *"terminable by either party upon written notice as required by applicable law."* For Wyoming that phrase points at **nothing**: W.S. Title 1 ch. 21 art. 12 sets no notice period for month-to-month, week-to-week, or a periodic tenancy of a year or more. So the library correctly diagnosed the problem in prose and then shipped no clause that solved it. The ASUW lease's Option A is exactly the missing instrument, which is how it surfaced.

The drafted clause supplies 30 days with the termination effective at the end of a rental period, and a roll-forward if notice lands late in a period. **The 30 days is a contract term, not a statutory figure** — that is stated in the row's notes so nobody later mistakes it for a WY requirement. No display collision: `holdover` is `topic_key=holdover`, this is `termination-notice`.

**GAP B — the agent-capacity default under W.S. 1-21-1201(a)(i).** → two new rows: **`agent-capacity-designation-wy`** (LEASE_CLAUSE, CONDITIONAL) and **`edu-agent-capacity-notice-wy`** (LANDLORD_EDUCATION, RECOMMENDED), both `topic_key=landlord-disclosure`.

Verified section-open. The definition reads, in relevant part: *"'Owner' means the owner, lessor or sublessor of a residential rental unit and for purposes of notice and other communication required or allowed under this article, 'owner' includes a managing agent, leasing agent or resident manager **unless the agent or manager specifies otherwise in writing in the rental agreement**."*

That is an **instruction 30 opt-out** — a right that exists only if the lease claims it, and is forfeited by silence. The default runs against the landlord: with a silent lease, a tenant's habitability notice, deposit demand, or forwarding address is effective on delivery to the property manager, and the landlord's statutory clocks start then. And the statute is specific that the carve-out must live **in the rental agreement**, so a management agreement cannot accomplish it. The two existing rows citing 1-21-1201 (`edu-no-entry-notice-statute-wy`, `edu-no-prohibited-lease-provisions-statute-wy`) cite it for unrelated absences; neither touches this. Surfaced by the ASUW lease's signature block, which asks the lessor to state capacity — owner, agent, or holder of a leasehold.

#### §20.1.3 — Confirmed absences and deliberate non-adoptions

- **Constructive eviction (lease provision 18) — not drafted, and that is a considered call.** Wyoming has no constructive-eviction statute; it is a common-law doctrine. A lease clause on it would in practice be a limitation or waiver of a tenant remedy, and the substance is already handled by the habitability and repair rows (`edu-repair-notice-process-wy`, `edu-repair-cost-termination-wy`, W.S. 1-21-1202/1203). Drafting a waiver here would import risk for no gain. Recorded as a non-adoption with reasoning rather than a silent omission.
- **No missing *required* clause.** Consistent with the AZ result (§16), the comparison surfaced no clause Wyoming law *requires* that the library lacked — unsurprising, since Article 12 imposes almost no mandatory lease content. Both gaps are gaps of **practical necessity** (A) and **forfeited-by-silence opportunity** (B), which is the more valuable category for a thin-statute state.
- **Late-fee and wear-and-tear definitions:** the ASUW lease caps late fees and defines normal wear and tear. Checked — **neither figure comes from Wyoming law.** No WY statute caps residential late fees or defines wear and tear. Both are the drafters' choices. Not adopted as legal content; noted so a future session does not mistake them for statutory figures read off a "real lease."
- **Corrections to existing WY rows: none.** No provision in the lease contradicted an existing WY row's text or classification.

---

### §20.2 — Part 2: landlord-scenario screen (gap-discovery source 3)

Scenarios written by the model, adapted from Arizona's 59-scenario map (AZ log §18.1) and extended with Wyoming-specific ones. **Taylor was not asked about his experience.** Each scenario was run against the 99 WY-active rows.

**Result: 64 scenarios, 60 covered, 4 gaps.**

#### §20.2.1 — Scenario map

**A. Before the lease (11)** — 1 applicant screening `edu-no-tenant-screening-fairness-act-wy` ✓ · 2 application fee ✓ · 3 adverse-action denial ✓ · 4 assistance animal `assistance-animal-accommodation` + W.S. 35-13-201/205 ✓ · 5 immigration-status question `edu-no-immigrant-tenant-protection-wy` ✓ · 6 holding deposit ✓ · 7 lead paint, pre-1978 `lead-based-paint` ✓ · 8 **who signs, and in what capacity — GAP B (§20.1.2)** · 9 co-signer/guarantor ✓ · 10 several adult tenants `joint-several-liability` ✓ · 11 unit not ready on the start date `possession-delay` ✓

**B. Rent and money (12)** — 12 rent due/grace ✓ · 13 late fee ✓ · 14 bounced check `edu-returned-check-fee-cap-wy` ✓ · 15 partial payment accepted ✓ · 16 raising rent mid-tenancy `edu-no-rent-increase-statute-wy` ✓ · 17 deposit amount (no WY cap) ✓ · 18 deposit applied at move-out `security-deposit-return-wy` ✓ · 19 deposit return deadline and itemization (W.S. 1-21-1208) ✓ · 20 tenant disputes deductions ✓ · 21 last month's rent vs deposit ✓ · 22 pet deposit/fee ✓ · 23 **tenant pays cash and wants a receipt — absence, §20.2.3**

**C. During the tenancy (18)** — 24 repair request and response `edu-repair-notice-process-wy` ✓ · 25 repair costs more than the unit is worth `edu-repair-cost-termination-wy` (W.S. 1-21-1203(d)) ✓ · 26 tenant withholds rent over repairs ✓ · 27 entry for repairs `edu-no-entry-notice-statute-wy` ✓ · 28 entry to show the unit `prohibited-acts-renter-wy` ✓ · 29 emergency entry ✓ · 30 utilities in tenant's name, shut off ✓ · 31 smoke/CO detectors `edu-carbon-monoxide-detector-building-code-wy` ✓ · 32 mold / bed bugs `edu-no-bed-bug-disclosure-wy` ✓ · 33 unauthorized occupant `permitted-occupants` ✓ · 34 unauthorized pet ✓ · 35 noise / neighbor complaints `no-disturbance` ✓ · 36 smoking / cannabis `smoking-policy` ✓ · 37 tenant runs a business from the unit ✓ · 38 tenant sublets or lists on Airbnb `no-sublet-assign` ✓ · 39 domestic-violence early termination `dv-safe-homes-*` (Art. 13) ✓ · 40 tenant complains, landlord wants them out `edu-no-anti-retaliation-statute-wy` ✓ · 41 **fire or other casualty makes the unit uninhabitable — GAP C**

**D. Ending the tenancy (13)** — 42 fixed term expires `surrender-end-of-term` ✓ · 43 tenant stays past the term `holdover`, `edu-holdover-wy` ✓ · 44 **either party ends a month-to-month — GAP A (§20.1.2)** · 45 tenant breaks the lease early `early-termination` ✓ · 46 tenant abandons the unit `abandoned-property-wy` ✓ · 47 notice to quit / FED filing `edu-no-for-cause-eviction-wy` ✓ · 48 **landlord changes the locks instead of filing — GAP F** · 49 sheriff executes the writ `edu-post-writ-possessions-wy` (W.S. 1-21-1211(a)) ✓ · 50 belongings left behind `abandoned-property-wy`, `edu-abandoned-property-notice-methods-wy` ✓ · 51 move-out inspection `existing-condition` ✓ · 52 tenant dies mid-lease `edu-no-tenant-death-statute-wy` ✓ · 53 military transfer (SCRA) ✓ · 54 duty to mitigate after a breach ✓

**E. Owner changes (5)** — 55 landlord sells with a tenant in place `edu-successor-owner-bound-wy` (W.S. 1-21-1207/1208) ✓ · 56 tenant must be told about a management change `edu-no-broad-identity-change-notice-wy` ✓ · 57 **lender forecloses on the rental — GAP E** · 58 deposit follows the property on transfer ✓ · 59 buyer wants the unit vacant ✓

**F. Wyoming-specific additions (5)** — 60 **vehicle abandoned in the tenant's parking space — GAP D** · 61 frozen pipes and winterization duties `snow-removal`, `tenant-maintenance` ✓ (allocation is contractual; no WY statute located) · 62 well or septic on a rural rental ✓ (no WY landlord-tenant statute located; handled as a maintenance allocation — see §20.2.3) · 63 wildlife intrusion ✓ (no statute; ordinary repair/pest allocation) · 64 firearms in the unit ✓ (no statute compels or forbids a lease restriction — see §20.2.3)

#### §20.2.2 — Gaps found, and the rows written

**GAP C — fire or other casualty.** → new row **`casualty-termination-wy`** (LEASE_CLAUSE, CONDITIONAL, `topic_key=casualty-termination`).
Ten of fourteen states carry a casualty row (KS, ND, SD, MN, OH, CA, NV, TX, FL, AZ); Wyoming carried none, so a WY lease had no answer at all to "the unit burned." **Confirmed absent from Wyoming law**: Article 12's 11 sections were read in full in the original statute walk and contain no casualty or untenantability provision; the Title 34 ch. 2 section index was read 2026-09-27 and contains only 34-2-128 through 34-2-130 (implied tenancy, renewal, mineral leases) — no destruction, untenantability, or rent-abatement section. The nearest statutory neighbour runs the other way: W.S. 1-21-1203(d) lets the **owner** refuse an unreasonably costly repair and terminate. Because no statute supplies a default, the contract term is doing all the work — CONDITIONAL per the AZ classification rule. None of the ten existing rows could be extended to WY: each is statute-driven on its own state's provision.

**GAP D — abandoned vehicle.** → new row **`edu-abandoned-vehicle-disposal-wy`** (LANDLORD_EDUCATION, CONSTRAINED, `topic_key=towing`). *Also a source-4 finding by nature — both sections sit outside the landlord-tenant title.*
`parking-vehicle-rules` (tagged WY among twelve states) says Landlord may have a vehicle towed *"in accordance with applicable law"* and no WY row said what that law is. Four other states carry a towing row (NV, TX ×2, AZ); WY did not. Verified section-open: **W.S. 31-13-104** — removal requires the property owner's written request on a department-prescribed form; a notice of intent to impound must be posted on the vehicle and remain **5 days** on private property; the towing service must give certified-mail notice to owner and lienholders within **3 business days** of identifying their latest known addresses. **W.S. 31-13-109** — to sell: wait **30 days**, notify the **sheriff** of the county plus owner and lienholders by certified mail with return receipt, publish **once a week for two consecutive weeks**, hold the auction no sooner than **10 days** after notice, with total recoverable removal/towing/storage/sale expenses **capped at $1,000**. No clause conflict: `parking-vehicle-rules` already defers to law. Not read: 31-13-112(e) (the court route) and the remainder of ch. 13; municipal towing ordinances flagged, not resolved, consistent with WY's state-level-only scope.

**GAP E — foreclosure.** → new row **`edu-foreclosure-tenant-rights-wy`** (LANDLORD_EDUCATION, RECOMMENDED, `topic_key=foreclosure`).
Seven states carry a foreclosure row (MN, NV ×2, CA ×2, NJ, FL, AZ ×2); WY carried none. **Confirmed absent from state law:** the Title 34 ch. 4 section index (Foreclosure of Mortgages and Power of Sale, 34-4-101 through 34-4-113) was read 2026-09-27 — no section mentions tenants, leases, occupants, or possession by a non-mortgagor. The protection is federal, and the row **flags it as federal per instruction 16** so the Claude CLI statute watch does not expect it in a Wyoming bill feed. Two honest limits recorded in the row's notes: the absence rests on an **index** read plus Article 12's full read, not an official full-text search; and the PTFA's own text was **not** read section-open in this pass — its 90-day and bona-fide-lease terms are stated as commonly summarized.

**GAP F — self-help eviction.** → new row **`edu-no-self-help-eviction-statute-wy`** (LANDLORD_EDUCATION, RECOMMENDED, `topic_key=self-help-eviction`). **The highest-consequence finding in this pass.**
Thirteen of fourteen states carry a self-help/lockout/utility-shutoff row (CO, KS, NE, MN, ND, SD, CA, NV, TX ×3, NJ, FL, AZ). **Wyoming was the only one without** — on one of the questions landlords most often get wrong, in the state whose statutes are most silent about it.

The row is written **conservatively and affirmatively**: it states what Wyoming law *does* provide (notice to quit under W.S. 1-21-1003; the FED action under 1-21-1001 through 1-21-1017; and W.S. 1-21-1211(a), which is explicit that the **sheriff, on a court order**, removes possessions and prevents reentry), then states that no statute prohibiting lockouts or utility shutoffs was **located**, then warns that this silence is not authorization and leaves the landlord exposed to uncapped common-law claims — wrongful eviction, trespass, conversion.

**Evidentiary basis, stated plainly per instruction 15:** Title 1 ch. 21 art. 10 section index (titles only); Article 12 read in full; Title 34 ch. 2 index; consistent secondary-source agreement. **Not** an official full-text search of the Wyoming code, and **1-21-1016 ("Ejectment Not Barred") was not read section-open.** This is the weaker-evidence tier, the same caveat carried by `edu-no-right-to-call-police-statute-wy`. Two search rounds were run, which is the §5a.2 escalation point — see §20.3.

#### §20.2.3 — Confirmed absences (no row written)

- **Cash-rent receipt (scenario 23)** — no WY statute located requiring a receipt for cash rent. Weaker evidence: absence of mention across general overviews, not an affirmative "no such law" statement.
- **Extended-absence notice (Arizona analogue)** — Arizona requires a tenant to notify the landlord of an absence over a set length; **Wyoming has no equivalent**, confirmed against the full Article 12 read. No row: there is nothing to teach beyond "the AZ rule is not portable," and the lease can require it contractually if a landlord wants it.
- **Well and septic (scenario 62)** — no Wyoming landlord-tenant statute located allocating responsibility or imposing testing/disclosure duties on a residential landlord. Genuinely relevant to rural Wyoming rentals but it is a **maintenance-allocation** question the existing `tenant-maintenance` / repair rows already handle contractually, not a legal gap. Flagged to Taylor in §20.4 as a possible product addition, not drafted as law.
- **Firearms (scenario 64)** — no statute located that compels or forbids a private landlord's lease restriction on firearms. Wyoming's firearm-preemption statute governs **governmental** regulation, not private lease terms; **it was not read section-open and is deliberately not cited in any row.** A firearms clause is a product decision, not a legal requirement — flagged in §20.4, not drafted.
- **Meth-contamination disclosure and landlord's lien** — already confirmed absent in WY log §6; re-confirmed as still absent, not re-researched.
- **Smoke detectors — NOT a gap. Near-miss recorded.** A keyword screen for "smoke detector"/"smoke alarm" across WY rows returned nothing, which looked like a clean gap. Reading `edu-carbon-monoxide-detector-building-code-wy` in full before logging it showed the row explicitly covers "smoke **or** carbon monoxide detectors" — the screen missed it on phrasing. **A grep miss is not an absence.** Logging this because it is the exact mechanism by which a careful process invents a false gap, and it nearly did here.

---

### §20.3 — Research mode: reached the trigger, did not request a toggle

The prompt allows research mode where a statutory question needs it, with notice to Taylor. **GAP F hit that trigger**: two search rounds are done (the §5a.2 escalation point), and an official wyoleg.gov full-text search on lockout and utility-shutoff terms is the one step that would move the absence claim from the weaker to the strong tier.

**I did not stop the pass for it.** The conservative row is publishable as written — it is affirmatively correct about what Wyoming *does* provide, it names its own evidentiary limit, and its practical advice ("silence is not permission") does not change on the outcome of that search. Blocking the whole backfill on a toggle only Taylor can flip would have been the worse trade. **Flagged for Taylor in §20.4 as the single highest-value follow-up**, with the row shipping in the meantime.

---

### §20.4 — For Taylor: cross-state questions and open items

**Per instruction 9 / §5a.1, no shared row was added or edited in this pass.** All seven new rows are WY-only. These are product decisions, not research findings:

1. **Casualty is ten single-state rows with no shared base.** KS, ND, SD, MN, OH, CA, NV, TX, FL, AZ each carry their own, and WY now makes eleven. Several are statute-driven and genuinely have to be state-specific, but the underlying contract skeleton is close to identical. **Consolidation candidate — a shared base row plus state overrides via `supersedes`.** Not actioned. If approved, it needs paste-ready propagation notes across eleven state logs.
2. **`holdover` points at law that does not exist for Wyoming.** Its text says a continued tenancy is "terminable by either party upon written notice as required by applicable law." For WY there is no such law — `periodic-tenancy-notice-wy` now fills it, but the shared row's phrasing may mislead in any other state with the same silence. **A shared-row edit would touch CO;WY;KS;NE;MN;FL;AZ — your call, not mine.**
3. **An official wyoleg.gov full-text search on self-help/lockout terms** (§20.3). Highest-value single follow-up in this pass.
4. **Optional, not drafted:** a well/septic allocation clause and a firearms-policy clause for rural Wyoming rentals. Both are product features with no statutory driver. Say the word and I will draft them as CONDITIONAL with the "no statute" basis stated.

---

### §20.5 — Integrity

- 941-row library verified at 16 columns with no duplicate IDs before any work (instruction 13). WY inventory at start: 100 tagged, 99 active, all VERIFIED.
- All 7 new IDs checked against the full library — **no collisions**. All 7 `topic_key` values checked against the 99 WY-active rows — **no display collisions**.
- No blank `status`/`rule_type`/`content_type` fields (instruction 27). No other state's architecture imported (instruction 25) — the ten existing casualty rows were checked for extendability and rejected on statute-driven grounds rather than copied.
- No enacted-bill claims made, so instruction 33 is not engaged.
- Every statutory figure in the new rows was verified section-open **except** where the row's own notes say otherwise: the PTFA text (federal, summarized) and W.S. 31-13-112(e) (not read). Those limits are in the rows, not only here.
- **Zero existing WY rows were re-scrubbed, re-verified, or edited.** Scalpel, not hammer.

## Propagated shared-row edits, 2026-09-28 (Taylor's decisions after the gap-discovery backfill)

Uniform under §5a.1: each edit is self-limiting, so this state needs no override. Not a re-audit; nothing else in this state was reviewed.

1. **`no-alterations`** — the carve-out now reads "any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform". It keeps disability modifications that fair-housing law requires the landlord to permit (at the tenant's expense) from reading as subject to unfettered landlord consent. Raised by the NE backfill (NE log §D.1).
2. **`pet-policy`** — "without liability to Tenant" now reads "without liability to Tenant to the extent applicable law permits". A flat disclaimer of the landlord's own entry-and-removal act is void where exculpation is barred (ND §9-08-02). Raised by the ND backfill (ND log §43.7).
3. **`holdover`** — a continued month-to-month tenancy is now "terminable by either party upon the written notice required by applicable law or, where applicable law sets no notice period, by this Lease". Wyoming has no statutory period (`periodic-tenancy-notice-wy` supplies one). Raised by the WY backfill (WY log §20.4).

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their text and citations are unchanged in the new rows.

- **Moved to education:** `dv-safe-homes-wy` → `edu-safe-homes-rent-defense-wy`; `habitability-baseline-wy` → `edu-habitability-baseline-wy`; `utility-deposit-return-wy` → `edu-utility-deposit-return-wy`.
- **Trimmed:** `security-deposit-return-wy` keeps only the tenant's forwarding-address duty; the return deadline and itemization moved to `edu-security-deposit-return-wy`.
- `habitability-baseline-wy` superseded the shared `landlord-maintenance`; that shared clause is not brought back, so a Wyoming lease has no landlord-repair clause and the duty lives in education.
- **§5a.1:** only WY-only rows changed; no propagation owed.

### Verdict for every lease clause

All 13 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `dv-safe-homes-wy` | Education | — | tenant defense |
| `habitability-baseline-wy` | Education | — | landlord duty |
| `utility-deposit-return-wy` | Education | — | landlord duty |
| `security-deposit-return-wy` | Split | SERVES_LANDLORD | keep tenant forwarding-address duty; timeline to edu |
| `abandoned-property-wy` | Keep | SERVES_LANDLORD | landlord disposal right |
| `agent-capacity-designation-wy` | Keep | SERVES_LANDLORD | opt-out only works in the rental agreement |
| `assistance-animal-accommodation-wy` | Keep | SERVES_LANDLORD |  |
| `casualty-termination-wy` | Keep | SERVES_LANDLORD | contract choice, no WY statute |
| `nonrefundable-deposit-notice-wy` | Keep | REQUIRED_DISCLOSURE: Wyo. Stat. § 1-21-1207 |  |
| `periodic-tenancy-notice-wy` | Keep | CONSTRAINED_TERM | no WY statutory period; lease supplies it |
| `prohibited-acts-renter-wy` | Keep | SERVES_LANDLORD |  |
| `renter-duties-wy` | Keep | SERVES_LANDLORD |  |
| `unpaid-damages-interest-wy` | Keep | SERVES_LANDLORD | landlord right |

## Retro checks (SOP 1.15)

**2026-09-30.** Sixteen [Retro] rules and three targeted fixes, run against Wyoming only. Not a re-audit (rule 1): nothing outside these nineteen items was reopened. Files Taylor uploaded for this task are the sole source of truth; the attached `lease-clauses.csv` was confirmed at **2,154 rows / 17 columns / CRLF**, WY **111 tagged, 107 active**, before any work. Old output files from this chat were deleted first (rule 8): `lease-clauses-WY-delta.csv`, `WY-log-section-gap-discovery-backfill.md`, `WY-checklist-cells.md`, and ten stale working files in the outputs folder (`RECONCILIATION-v56.md`, `citation-screen-inventory.md`, two superseded WY decision-log copies, a checklist copy, and `steinoak_clauses_updated{,_42,_43,_44,_56}.csv`). Where anything earlier in this chat conflicts with the attached files, **the attached files govern** — in particular the 2026-09-27 backfill delta is now merged and must not be re-applied.

**Result: 21 delta rows — 6 changed, 15 new.** Research mode was not needed and was not requested. Two questions went to Taylor in the chat and he answered both within the day; his decisions are recorded in §6, along with the clause one authorises and the education row the other produced. A third item — an accuracy defect in a shipped row — was found while answering the second and is fixed here.

### Corpus and its boundary (rules 11, 12, 14, 19)

Read **section-open, in full**, from the official Wyoming Legislature NXT gateway, **2026 Wyoming Statutes** (`wyoleg.gov/NXT/gateway.dll/2026 Wyoming Statutes/2026 Titles/1/53/...`):

- **Art. 10, Forcible Entry and Detainer**, W.S. 1-21-1001 → 1-21-1017 (all 17 sections) — first time read whole; prior passes had the index only.
- **Art. 12, Residential Rental Property**, W.S. 1-21-1201 → 1-21-1211 (all 11 sections).
- **Art. 13, Wyoming Safe Homes Act**, W.S. 1-21-1301 → 1-21-1304 (all 4 sections).
- **W.S. 1-1-115** (civil liability for unpaid checks), all of (a)–(f), from the official `title01.pdf`.

Read 2026-09-30 on law.justia.com (current edition): **W.S. 40-21-103 and 40-21-105** (UETA), **W.S. 40-12-102 and 40-12-105** (Consumer Protection Act), and the **Wyoming Constitution** article list with Article 1 section-by-section.

**Currency (rules 16, 17).** The gateway's dated path is an edition selector, so this was tested rather than assumed: the same Article 12 node was pulled from the **2024** and the **2026** editions and the text is **identical**, and a 2025 edition also resolves. The 2026 edition was used throughout. The gateway prints no per-section history line, which is a real limitation and is recorded as one.

**Boundary, stated plainly (rule 19).** This is **four statutes read whole plus six sections read individually — not a code-wide full-text search**, so no nonsense control and no known-positive battery were run, because there was no index to run them against. The reason is infrastructure, not choice, and it is worth recording for every future Wyoming pass:

- The shell cannot reach any statute host. The organization's egress proxy returns **403 to CONNECT** for `wyoleg.gov`, `law.justia.com`, `codes.findlaw.com`, `casetext.com` and `lexisnexis.com`; only GitHub and the package registries are allowed. Per the proxy's own guidance these are policy denials, not to be routed around.
- **law.justia.com is behind a Cloudflare bot challenge in the browser pane**, which was not bypassed.
- wyoleg.gov publishes whole-title PDFs, but the fetch tool truncates them (Title 1 stops inside chapter 10; Title 40 at chapter 10), so they cannot serve as a corpus.
- The NXT gateway has no documented query URL; two attempts to construct one failed and a third was not made.
- Rule 14's hash check could not be run: the pane's `javascript_tool` returned `undefined` on two attempts, so browser-side SHA-256 was unavailable. Texts were read directly in the pane and in the fetch tool and cross-checked against each other (the Safe Homes §1-21-1304 text matched word for word across both channels), which is weaker than a hash and is labelled as such.

Nothing in this section's findings rests on a secondary source. Where a question could only be answered secondarily, the row says so.

### The sixteen rules

| # | Rule | Verdict |
|---|---|---|
| 1 | **40 formatting and placement** | **Checked, no issue — layout table below is empty of requirements.** Battery run against every statute read: `underlined`, `boldface`/`bold`, `conspicuous`, `separate document`, `substantially equivalent`, type-size. **Zero hits** in Art. 10, 12, 13, W.S. 1-1-115, the WCPA or the UETA. Wyoming prescribes no formatting or placement for any residential lease text. Omission sanctions that forfeit money: **none** — and that is a finding in itself, recorded in `nonrefundable-deposit-notice-wy`'s notes: W.S. 1-21-1207 is mandatory but sanction-free on its face, because W.S. 1-21-1208(c)'s penalty reaches only subsections (a) and (b) of 1-21-1208. Nothing competes for the first page, so rule 40's order question does not arise and Taylor does not need to settle one. |
| 2 | **41 just cause** | **Already answered, now upgraded.** `edu-no-for-cause-eviction-wy` carries `topic_key=for-cause-eviction`, so rule 41b was already satisfied. Its basis was four secondary sources; it is now **primary**: W.S. 1-21-1002(a)(i) permits an FED proceeding *"Against tenants holding over their terms"*, which is the direct opposite of a just-cause rule. Screened for situational for-cause limits (conversion-notice year, rent-escrow bar, tenants'-association protection) across all three articles — none exist. **Row changed:** `edu-no-for-cause-eviction-wy` (notes). |
| 3 | **42 required text in a shared clause** | **Present, and a drafting defect fixed.** W.S. 1-21-1207: *"Any rental agreement shall state whether any portion of a deposit is nonrefundable."* Mandatory on every Wyoming agreement that takes a deposit, including one with **no** nonrefundable portion — so the row correctly stays REQUIRED, not CONDITIONAL. But the shipped text handled the common $0 case with a parenthetical afterthought and asserted that "$0 … is nonrefundable and will not be returned to Tenant regardless of the condition of the property", which is nonsense on its face and answered the statutory *"whether"* only obliquely. Rewritten to answer it affirmatively either way. **Row changed:** `nonrefundable-deposit-notice-wy`. |
| 4 | **43 cure promises** | **Checked — `default-by-tenant` and `application-of-payments` pass; `early-termination` does not, and is flagged under rule 62 rather than edited.** Wyoming **does** require a pre-suit notice for nonpayment (a three-day notice to quit, W.S. 1-21-1003, on top of W.S. 1-21-1002(a)(i)'s three-day arrears trigger), so `default-by-tenant`'s rent limb adds nothing by contract. Its non-rent limb carries the no-cure carve-out *"except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure"*, and Wyoming does permit exactly that — W.S. 1-21-1002(a)(vi) grounds an FED on any violation of W.S. 1-21-1204 or 1-21-1205 with **no statutory cure right at all**. The carve-out therefore bites and the right is preserved. **The problem is `early-termination`:** its landlord limb promises *"at least 30 days' written notice"* plus a *"10 days"* cure before terminating for a material breach — against a statutory route of three days' notice and straight to court. The clause's closing *"Nothing in this Section limits any right either party has under applicable law"* is the self-limiting wording rule 53 warns can hide a real conflict, and a bargained 30-day promise is the kind of term a court is more likely to enforce than to treat as displaced by a generic savings sentence. See §9. |
| 5 | **44 terms the statute turns into landlord duties** | **Real finding — one new row.** Five *"as agreed in the rental agreement"* hooks in Article 12. Four already have rows: 1-21-1201(a)(i) → `agent-capacity-designation-wy`; 1-21-1202(d) → `edu-habitability-modifiable-wy`; 1-21-1204(a)(v) → `permitted-occupants`; 1-21-1202(a) → see rule 50. The fifth had none: **W.S. 1-21-1203(a)(iv)** obliges an owner to *"maintain other appliances and facilities as specifically contracted in the rental agreement"*, so whatever the shared `appliances-included` clause lists becomes a **statutory** duty in Wyoming, enforceable through the W.S. 1-21-1206 ladder up to court-ordered repair or termination. A landlord listing a window air conditioner is contracting into the Act. **Row added:** `edu-contracted-appliances-duty-wy`. A dangling pointer surfaced with it — see §9. |
| 6 | **45 electronic notices** | **Checked, no clause defect — one new row because the screen produced a real answer.** The UETA was read itself, not through the landlord-tenant sections. W.S. 40-21-103(b) excludes **only** wills/codicils/testamentary trusts, most of the UCC, and UCITA — **no carve-out for eviction, default or cure notices, and none for residential leases**, unlike several other states in this library. Two unwaivable conditions: W.S. 40-21-105(b) (applies only between parties who have each agreed, judged from context and conduct) and **40-21-105(c)**, whose right to refuse other electronic transactions *"may not be waived by agreement"*. What actually controls is the landlord-tenant text: W.S. 1-21-1003 requires physical delivery of the notice to quit; 1-21-1203(b) and 1-21-1206(b) require certified mail or the 1-21-1003 manner; 1-21-1210(a)(i) fixes three service routes. UETA defers to them (40-21-103(d)). No WY clause offends: the shared `notices` clause is expressly self-limiting and disclaims designating any alternative method, and `electronic-signatures` reaches execution, not notices. **Row added:** `edu-electronic-notices-wy`. |
| 7 | **46 the lease as the required notice** | **Real finding — `abandoned-property-wy` reviewed, fix made in the deposit clause.** W.S. 1-21-1210(a)(i)(A) deems the abandoned-property notice served when mailed by certified mail only to *"an address furnished to the owner by the renter in writing specifically for this purpose."* `abandoned-property-wy` never secures such an address, and `security-deposit-return-wy` collected one scoped to the deposit alone — so the cheap, certain service route was unavailable and a Wyoming landlord was left with personal service under W.R.C.P. Rule 4 or **newspaper publication**. The lease can itself be that writing, so it now is. No shared clause promises a separate notice that needs reconciling. **Row changed:** `security-deposit-return-wy`. |
| 8 | **47 penalties for knowingly using a prohibited term** | **Checked, none exist.** Wyoming has no prohibited-lease-provisions statute (`edu-no-prohibited-lease-provisions-statute-wy`; re-confirmed on today's full read of Article 12), so there is no knowing-use penalty to trigger. One genuine non-waiver provision does exist — **W.S. 1-21-1304**, which bars waiving or modifying the Safe Homes Act *"in any lease or separate agreement"* — but it carries no penalty, and no WY-tagged clause touches a DV right. Residual exposure, recorded in `edu-consumer-protection-act-wy`: the WCPA's catch-all at W.S. 40-12-105(a)(xv), if the Act reaches leases at all. |
| 9 | **48 separate-document requirements** | **Present, already correctly handled.** W.S. 1-21-1207 requires written notice of nonrefundability *"at the time the deposit is taken"* — a second, separate communication the lease cannot supply. `nonrefundable-deposit-notice-wy` satisfies the in-agreement prong and `edu-nonrefundable-deposit-separate-notice-wy` carries the separate-notice prong. Confirmed section-open today; no lease clause purports to substitute for it. No other separate-document requirement exists in the read corpus. |
| 10 | **49 collection-cost bans** | **Checked, no ban — Wyoming runs the other way.** Read as "costs and expenses" language, not only fee sentences. W.S. 1-21-1008(b) directs an FED court to award *"costs and attorney's fees as provided by the lease"*; W.S. 1-21-1208(c) gives the renter court costs and the prevailing owner court costs where the renter sued unreasonably; W.S. 1-1-115 allows a $30 collection fee and, unpaid, treble damages. `default-by-tenant`'s *"reasonable costs and expenses"* and its mutual prevailing-party sentence are both lawful here. |
| 11 | **50 "the lease controls" wording** | **Eight hooks found; every choice is now deliberate.** 1-21-1201(a)(i) agent notice opt-out → taken (`agent-capacity-designation-wy`). 1-21-1203(a)(iv) appliances → taken, with its consequence now documented (rule 44). 1-21-1204(a)(v) occupancy → taken (`permitted-occupants`). 1-21-1208(a) deposit applied to *"other costs provided by any contract"* → **deliberately declined**, as a tenant-favourable deviation recorded in 2026-08-28. 1-21-1008(b) attorney's fees as the lease provides → taken, mutual, Taylor's call of 2026-08-28. 1-21-1210(a)(i)(A) address designation → **newly taken** (rule 46). **1-21-1202(a)**, which lets a written agreement displace the heat/electrical/hot-and-cold-water baseline → **deliberately declined; I decided this one myself.** Wyoming is an outlier in permitting it, but a clause contracting away habitability is a product I would not ship and a term a landlord would have to defend; there is no upside that a properly scoped maintenance allocation cannot reach. **1-21-1202(d)**, which lets *any* duty be reassigned by explicit signed written agreement → **newly taken**, as a narrow optional clause, on Taylor's decision of 2026-09-30 (§6). |
| 12 | **51 plain-language and consumer-contract statutes** | **Checked — one new row.** Wyoming has **no** plain-language consumer-contract statute: no readability test, no statement-of-waivers requirement. The WCPA definitions were read, not just the practice list: *"merchandise"* expressly includes *"real"* property, but *"consumer transactions"* reaches the *"advertising, offering for sale, sale or distribution"* of merchandise, and whether letting a dwelling is a sale or distribution is **not resolved by the text**; no case law was read and the row says so rather than guessing. Checked for and **absent**: a blank-spaces-filled-after-signing practice, a copy-at-signing practice, and any express residential-lease exclusion. The rule 40 battery was run over the WCPA at the same time, with no hits. **Row added:** `edu-consumer-protection-act-wy`. |
| 13 | **52 exculpation** | **Checked, no issue — the base clauses stay.** Wyoming voids nothing of the kind: no prohibited-provisions section anywhere in Article 12 (read in full again today), and the statute itself limits owner liability — W.S. 1-21-1203(e) exempts owners from claims for mental suffering or anguish, and W.S. 1-21-1202(d) lets duties be reassigned outright. `tenants-property-insurance`, `parking`, `storage-space` and `services-utilities-provided` keep their "Landlord is not liable" wording for WY; the `-ks-oh-ca` variants are **not** needed. `pet-policy` and `abandoned-property-wy` screened too — the former's disclaimer is already limited to what applicable law permits, and the latter tracks W.S. 1-21-1210(c), which grants the immunity by statute. |
| 14 | **54t tenant-caused damage** | **Real finding — two new rows, and the law/lease split is clean.** What Wyoming gives the landlord without any clause: W.S. 1-21-1205(a)(i) (renter must not damage), 1-21-1211(b) (deposit, plus personal liability for the remainder, plus 10%/yr interest, plus any legal action), 1-21-1203(c) (no duty to correct a renter-caused condition) and 1-21-1206(a) (the renter's repair remedies are open only to a renter in compliance with 1204 and 1205). **Each abatement or exit route was checked separately for its own fault exception, as rule 54 requires, and all three carry one** — 1-21-1203(c), 1-21-1206(a), and the library's own `casualty-termination-wy`, already limited to casualty *"through no fault of Tenant"*. There is no rent-into-court or repair-escrow statute, so that limb does not arise, and **no casualty statute at all**, which means there is no statutory tenant exit for a no-abatement term to waive — the thing that bars this clause elsewhere. The gap the law leaves is rent: nothing says whether rent runs during repair or whether lost rent is recoverable. So the lease may lawfully fill it. **Rows added:** `tenant-caused-damage-wy` (CONDITIONAL, modelled on `tenant-caused-damage-tn`, which was read and **not** tagged) and `edu-tenant-caused-damage-wy`. |
| 15 | **35c constitution screen** | **Checked, nothing reaches residential leases.** Article 1 (Declaration of Rights) read heading-by-heading, all 37 sections. **Cannabis: no provision of any kind** — Wyoming has no analogue to Missouri's Article XIV, so the shared `smoking-policy` clause's marijuana and vaping ban stands unmodified for WY. **Firearms:** Art. 1 §24, *"The right of citizens to bear arms in defense of themselves and of the state shall not be denied"* — a limit on the state, not on a private landlord, and no WY-tagged clause restricts firearms anyway. **Speech and signs:** Art. 1 §20, likewise state action; `common-area-use`'s sign restriction is unaffected and already carves out displays applicable law entitles the tenant to make. **Privacy:** Art. 1 §4 is a search-and-seizure provision binding government, not a landlord-entry rule. Art. 1 §35 (impairing the obligation of contracts) noted as background. **Boundary:** Article 1 was read section by section; the remaining articles were screened by subject from the article list (legislative, executive, judicial, franchise, education, water, mines, corporations and the later structural articles) and none governs private leases — that screen is by subject, not by full text. |
| 16 | **27 the seven topics** | **All seven were absent for Wyoming; all seven now have a row.** `edu-no-algorithmic-rent-rule-wy` (confirmed absent), `edu-fees-as-rent-wy` (confirmed absent as a rule, with the real consequence stated: W.S. 1-21-1002(a)(i)'s three-day nonpayment route reaches **rent only**, so labelling fees "additional rent" does not get them there), `edu-no-landlord-self-cure-wy` (confirmed absent — no URLTA-style fix-and-bill right), `edu-no-lease-completeness-rule-wy` (confirmed absent, with the affirmative point that five Wyoming rights turn on written lease text), `edu-no-quiet-possession-statute-wy` (confirmed absent as statute, case law **not located** and said so — and the substantive find that Wyoming's only "peaceful enjoyment" language, W.S. 1-21-1205(a)(ii), is a *tenant duty* protecting neighbours, not a landlord covenant), `edu-statutory-forms-wy` (no forms; three content-prescribed notices recorded) and `edu-no-tenant-camera-rule-wy` (confirmed absent; recording law not located). |

### The three targeted fixes

**17 — Scrub-trimmed clauses (rule 78 with rule 47).** The 2026-09-29 scrub shortened **`security-deposit-return-wy`** to the tenant's forwarding-address duty alone. The number-check half is clean: the trimmed clause carries **no fillable figure**, so no lawful-looking landlord number can undercut a statutory limit, and no protected-group grace period or notice rule exists in Wyoming to be undercut. The condition a number check cannot catch is the one found under rule 46 — the address was scoped to the deposit, which silently cost the landlord the certified-mail service route for abandoned property under W.S. 1-21-1210(a)(i)(A). **Restored only what was needed:** one sentence extending the designation. **Row changed:** `security-deposit-return-wy`.

**18 — Scrub-switched-off required clauses (rule 78 with rule 46).** Each of the three asked: was this clause carrying a written notice or disclosure a statute requires?

- **`dv-safe-homes-wy` — NO, correctly left off.** Article 13 read in full today. The Safe Homes Act imposes **no** landlord notice or disclosure duty anywhere; it creates a tenant affirmative defence (1-21-1303(a)–(b)), bars status-based termination (1-21-1303(c)) and forbids waiver (1-21-1304). The clause restated a right the law gives regardless. Education is the right home.
- **`habitability-baseline-wy` — NO, correctly left off.** W.S. 1-21-1202 and 1-21-1203 impose duties on the owner and require nothing to appear in the lease. The lease is the vehicle for *varying* them, not for stating them. (The pointer this left dangling is in §9.)
- **`utility-deposit-return-wy` — NO as to notice, but the review found something else and a clause goes back for a different reason.** W.S. 1-21-1208(b) requires nothing in the lease, so the switched-off clause was pure restatement and is correctly off. But the subsection applies only to money *"held and **separately identified** as a utilities deposit"* — separate identification is the **trigger for the entire regime**, including the landlord-favourable limb that lets the owner apply the deposit to the tenant's utility debt after 45 days. Nothing in the library identified one, so a Wyoming landlord taking a utility deposit fell outside 1-21-1208(b) altogether and the money was ordinary deposit under 1-21-1208(a). **Row added:** `utility-deposit-identification-wy` (CONDITIONAL). New `{{variable}}` for the builder backlog: **`{{utility_deposit}}`**.

**19 — Rule 62 vetting of AZ's `returned-payments` wording.** AZ proposes replacing *"If more than two of Tenant's payments during the Term are returned"* with *"during any 12-month period"*. **Lawful in Wyoming, and Wyoming is a good argument for it.** No Wyoming statute governs how many dishonoured payments let a landlord demand guaranteed funds; W.S. 1-1-115 regulates only the collection fee and the remedy, and the clause's fee sentence is already self-limiting to "the maximum amount permitted by applicable law", so the $30 cap is not in conflict. The positive case is rule 37's: Wyoming sets **no statutory periodic-tenancy term** and the library supplies one only by contract (`periodic-tenancy-notice-wy`), so a Wyoming month-to-month tenancy genuinely has no "Term" for the current wording to measure against. **Recommend adopting.** Not edited here.

Vetting `returned-payments` also turned up a defect in Wyoming's own row — see below.

### Rows changed and added

**Changed (6).** `security-deposit-return-wy` (fix 17 / rule 46 — address designation extended); `nonrefundable-deposit-notice-wy` (rule 42 — $0 case rewritten); `edu-returned-check-fee-cap-wy` (**citation corrected**, content added); `edu-no-for-cause-eviction-wy` (rule 41 — secondary → primary); `edu-no-self-help-eviction-statute-wy` (evidence upgraded, conclusion unchanged); **`edu-habitability-baseline-wy` (accuracy defect fixed — see below)**.

**Added (15).** `duty-reassignment-wy`, `edu-habitability-waiver-wy`, `tenant-caused-damage-wy`, `edu-tenant-caused-damage-wy`, `utility-deposit-identification-wy`, `edu-contracted-appliances-duty-wy`, `edu-electronic-notices-wy`, `edu-consumer-protection-act-wy`, and the seven rule-27 rows.

#### A citation error found and fixed

`edu-returned-check-fee-cap-wy` cited **W.S. 1-1-115(b)** for both the $30 cap and the written-demand requirement. Both are in **subsection (a)**; subsection (b) is the treble-damages escalation. This is precisely the failure the citation-existence screen **cannot** catch — a real section described wrongly — and it survived because the row rested on seven agreeing secondary sources, one of which quoted the statute correctly while the row attached it to the wrong subdivision. Reading W.S. 1-1-115 section-open also recovered content the library never had: the demand's **prescribed content and delivery** (USPS certificate of mailing to the address on the check or the last known address, or personal service under the W.R.C.P.; and it must state both that the drawer owes the check's value plus the collection fee and what that fee is), and the remedy in (b) — **treble the check, never less than $100, plus the $30 and court costs** — with attorney fees available under (c) against dilatory or bad-faith defences. A landlord remedy worth real money was absent from the library entirely.

The pattern is the one §2 of this log recorded in August and it has now repeated: **agreement among secondary sources tells you a statute exists, never what it says.**

#### An accuracy defect found while answering Taylor's second question

`edu-habitability-baseline-wy` told Wyoming landlords: *"Wyoming requires you to keep the property safe and sanitary and fit for human habitation, including operational electrical, heating and plumbing systems with hot and cold running water, **unless you and the tenant agree otherwise in writing**."* That attaches the waiver to the whole duty, habitability included. **The statute does not.**

W.S. 1-21-1202(a) is three sentences, and the distinction is the whole point:

1. *"Each owner and his agent renting or leasing a residential rental unit shall maintain that unit in a safe and sanitary condition fit for human habitation."* — **no qualifier of any kind.**
2. *"Each residential rental unit shall have operational electrical, heating and plumbing, with hot and cold running water unless otherwise agreed upon in writing by both parties."* — the waiver attaches **here and only here**.
3. *"Provided, however, this section shall not prevent the rental of seasonal rental units such as summer cabins which are not intended to have such amenities."*

The old wording told a landlord that habitability itself is waivable by agreement. It is not, and that is the more dangerous direction to be wrong in. Rewritten to separate the three sentences and to carry the seasonal proviso, which this row's own notes had recorded since August as *"not drafted (N/A for typical use case)"* — it is now drafted, because it is the legitimate use case for the waiver and a landlord who knows about it often does not need the waiver at all. **Row changed:** `edu-habitability-baseline-wy`.

The defect survived three passes because the row was read as a summary of a duty rather than parsed as a sentence boundary. Worth noting as a pattern alongside the citation error above: both rows were VERIFIED, and both were wrong in a way only re-reading the primary text could expose.

### §9 Propagation and shared-row flags (rule 62) — proposed, not made

Neither item was edited. Both touch clauses tagged in many states; under rule 62 an edit I cannot vouch for in every tagged state goes in as a proposal.

1. **`early-termination` (CO;WY;MN;ND;SD;OH;NV;TX;GA;NC) — landlord-side cure promise.** The clause commits the landlord to *"at least 30 days' written notice"* and a *"10 days"* cure before terminating for material breach. In Wyoming the statutory route is a three-day notice to quit and an FED action with no cure right (W.S. 1-21-1003; 1-21-1002(a)(vi)). The closing savings sentence probably preserves the statutory route, but a bargained 30-day promise is the kind of term a court enforces. **Recommendation:** make the landlord limb expressly subordinate — e.g. "…or such shorter notice and cure period as applicable law permits" — which is self-limiting and, I believe, safe in all ten tagged states, though I have only verified Wyoming. Alternative if Taylor prefers certainty: a WY override. **Taylor's call.**
2. **`appliances-included` (26 states) — dangling pointer in Wyoming.** It tells the tenant Landlord will maintain the listed items *"as described in this Lease's Maintenance & Repairs Section"*, but the 2026-09-29 scrub switched off `habitability-baseline-wy` and did not restore the shared `landlord-maintenance`, so a Wyoming lease has **no landlord-repair clause** and that pointer resolves to a section holding only tenant duties. No legal harm — W.S. 1-21-1203(a)(iv) supplies the duty directly — but the lease promises something it does not contain. This is the rule 78 pointer sweep finding one more. **Recommendation:** Claude Code should run the same section-name sweep across the other 12 states whose clauses the scrub switched off, since the pointer text is identical in all 26.

### §6 Decisions (rule 54 verdicts, and the question put to Taylor with his answer)

**Question asked in chat 2026-09-30, answered the same evening: should the library offer a Wyoming duty-reassignment clause? Taylor: "Yes, offer the clause for habitability duty."**

W.S. 1-21-1202(d) provides that *"Any duty or obligation in this article may be assigned to a different party or modified by explicit written agreement signed by the parties."* In plain terms, Wyoming lets a lease move a habitability-related duty from landlord to tenant — the propane tank, the well pump, a septic system on a rural property — if the lease says so explicitly and both parties sign. Most states forbid this outright; Wyoming is an outlier. It had been education-only since 2026-08-21 (`edu-habitability-modifiable-wy`) and was the one item in this retro I would not decide alone, because offering a configurable duty-shift is a product question rather than a legal one.

**Row added: `duty-reassignment-wy`** (LEASE_CLAUSE, CONDITIONAL, `topic_key=habitability-modifiable`, basis SERVES_LANDLORD), built to the scope recommended and approved:

- The clause invokes W.S. 1-21-1202(d) by name and sits in the signed lease, which is the "explicit written agreement signed by the parties" the subsection requires. Rule 48 checked: 1-21-1202(d) imposes no separate-document requirement, unlike W.S. 1-21-1207, so no second signature page is needed.
- It reaches **only named items** the landlord fills in (`{{reassigned_duties}}`), never a category.
- The **core baseline is expressly carved out** and stays with the landlord: electrical, heating and plumbing systems and hot and cold running water; the safe, sanitary, habitable condition of the property as a whole; and the common areas. That tracks W.S. 1-21-1202(a) and W.S. 1-21-1203(a)(i)–(iii). What is left assignable in practice is the 1-21-1203(a)(iv) category — "other appliances and facilities as specifically contracted" — plus discrete site equipment, which is the real rural-Wyoming use case.
- A closing savings sentence refuses any assignment applicable law does not permit, and the cost-recovery sentence recovers as a **debt, expressly not Rent**, keeping it consistent with `edu-no-landlord-self-cure-wy` (Wyoming gives no statutory fix-and-bill-as-rent right) and `edu-fees-as-rent-wy` (the three-day nonpayment route reaches rent only).
- Shares `topic_key` with its education companion per rule 58; no display collision, since that row is LANDLORD_EDUCATION.
- New `{{variable}}` for the builder backlog: **`{{reassigned_duties}}`**.

**Unread risk, labelled as unread (rule 76).** No Wyoming case law construing W.S. 1-21-1202(d) was read. How far a court would enforce a reassignment against the W.S. 1-21-1203(a) owner duties — which the statute states without an express "unless agreed" qualifier — is **unknown to me**. The narrow scope, the carve-out and the savings sentence are the response to that uncertainty, not a resolution of it. This belongs on the list for a Wyoming case-law pass if one is ever run.

**Decided without asking:** I **declined** to offer a clause under W.S. 1-21-1202(a)'s *"unless otherwise agreed upon in writing by both parties"*, which would let a lease contract away heat, electrical, plumbing or hot and cold water. Lawful in Wyoming, and genuinely unusual — but a term a landlord would have to defend, with no upside a properly scoped maintenance allocation cannot reach. Taylor's approval above was for the narrow reassignment clause and is not read as reaching this.

**Second question, asked and answered 2026-10-01: having declined the W.S. 1-21-1202(a) utilities waiver as a clause, is it covered by an education row?** Taylor: *"I think leave it out as a clause. Do we have an education row on this though? If a landlord/user actually wants a clause around this after reading the education row about this, they can create their own clause."*

**It was not covered, and now is. Row added: `edu-habitability-waiver-wy`.** The waiver appeared nowhere in the library except as nine unexplained words inside `edu-habitability-baseline-wy` — which, as set out above, attached them to the wrong sentence. A landlord reading the library could not have learned that the escape hatch exists, what it reaches, or why to avoid it.

Taylor's framing is a better design than the one I proposed, and it is worth stating as the general rule it implies: **where a state permits something the product declines to ship, the library explains it rather than hiding it, and the landlord who wants it writes their own clause.** That keeps rule 54's "offer every lawful optional clause" honest without making the product the author of a term it would not stand behind. The new row says in terms that the option is lawful, that it is deliberately not offered, what the three reasons are, that a genuinely seasonal property may not need it at all, and that a landlord who still wants it can add a custom clause and should take advice first.

New `topic_key`: **`habitability-waiver`**, which no other state has. Rule 58 was weighed — it could have shared `habitability-modifiable` with `edu-habitability-modifiable-wy` and `duty-reassignment-wy` — but waiving a requirement and reassigning a duty are different mechanisms with opposite risk profiles, and conflating them is exactly what went wrong in the baseline row. A separate key also makes the cross-state consistency check ask every other state whether its habitability duty is waivable; in most the answer is "no, void," which is worth recording per state. Collapse it at sync if Taylor would rather have one key.

**Other rule 54 verdicts this retro:** `tenant-caused-damage-wy` — **offered** (the law leaves the rent question open and there is no statutory tenant exit to waive). `utility-deposit-identification-wy` — **offered** (separate identification is the trigger for the whole W.S. 1-21-1208(b) regime). Habitability-baseline waiver under 1-21-1202(a) — **declined as a clause, explained as education** (`edu-habitability-waiver-wy`), on Taylor's decision of 2026-10-01. Deposit applied to "other costs provided by any contract" under 1-21-1208(a) — **declined**, standing decision of 2026-08-28, unchanged.

### §8 Integrity checks run on the delta

17 columns, header and CRLF line endings identical to the master; 21 rows, no duplicate ids; no id collides with an existing row except the 6 intended changes; every `supersedes` resolves (one non-empty, `security-deposit-return-wy` → `security-deposit-return`, unchanged); no blank `states`, `is_active`, `rule_type`, `content_type`, `verification_status`, `topic_key`, `group`, `title`, `bodyText`, `effective_from` or `last_checked`; no education row carries a `lease_clause_basis` and every new lease clause carries one; three new `{{variables}}` for the builder backlog — `{{utility_deposit}}`, `{{reassigned_duties}}` and `{{nonrefundable_deposit_amount}}` (the last already in use, re-listed because its clause was rewritten); **no `LEASE_CLAUSE` `topic_key` collision among WY-active rows after merge**; on the 6 changed rows only `bodyText`, `notes` and `last_checked` moved — `states` and `is_active` are untouched, so no other state's tagging changes. WY active goes 107 → 122. Every `notes` addition is prefixed `WY:` per rule 61.

### Proposed SOP changes

1. **Rule 19 — record the corpus channel, not just the search boundary.** An absence row's strength depends on *how the text was reached*, and a session may have no code-wide search available at all. When no loadable corpus exists, say which channels were tried and why each failed (egress policy, bot challenge, PDF truncation, no query URL), so the next pass does not silently repeat the attempt or silently assume a battery was run. *(Wyoming: four articles read whole was the best available, and the log has to show that is what "confirmed absent" rests on.)*
2. **Rule 16 — where a statute site serves editions by a dated path, pull the same node from two editions and diff it.** Cheap, and it converts "the URL says 2026" into evidence. *(Wyoming's Article 12 is identical in the 2024 and 2026 editions; that is now a recorded fact rather than an assumption.)*
3. **Rule 22 — when a row rests on secondary sources agreeing, re-read the section before trusting the subdivision.** Agreement proves the statute exists, not which subsection says what. *(`edu-returned-check-fee-cap-wy` cited 1-1-115(b) for a rule in 1-1-115(a) through seven agreeing sources.)*
4. **Rule 54 — when a statute conditions a regime on the lease "separately identifying" or "specifically designating" something, that identification is itself an optional clause.** Easy to miss, because the statute reads as a landlord duty rather than a lease term. *(W.S. 1-21-1208(b)'s utility deposit; W.S. 1-21-1210(a)(i)(A)'s notice address — two in one state.)*
5. **Rule 14 — state the verification method actually used when the prescribed one is unavailable.** The pane's `javascript_tool` returned `undefined`, so no browser-side hash was possible; texts were cross-read in two independent channels instead. Weaker, and the log should name it rather than skip the step silently.
6. **Rule 54 — a lawful option the product declines to ship still gets an education row, not silence.** Declining is a product decision; leaving the landlord unable to discover the option is a coverage gap. The row should say the option is lawful, why it is not offered, and that a landlord who wants it can write their own clause. *(Taylor, 2026-10-01, on the W.S. 1-21-1202(a) utilities waiver — he asked the question that produced this rule.)*
7. **Rule 59 — parse the sentence boundary before summarising a subsection, and say which sentence a qualifier attaches to.** A trailing "unless otherwise agreed" belongs to its own sentence, not to the subsection. *(W.S. 1-21-1202(a): `edu-habitability-baseline-wy` had been telling Wyoming landlords since August that habitability itself is waivable by agreement, because a three-sentence subsection was summarised as one.)*
8. **Rule 54 — where a state is an outlier in permitting something other states forbid, offer it narrowly and carve out the core, rather than offering it whole or not at all.** The question is not only "does the law allow a clause" but "how much of what the law allows should the product sell". *(W.S. 1-21-1202(d) lets a Wyoming lease reassign any duty in the article, including heat and hot water; the clause shipped reassigns only named non-core items and carves the 1-21-1202(a) baseline out. Taylor approved that scope on 2026-09-30.)*

**Sync note (Claude Code, 2026-10-01):** merged with `merge-delta.py` against 01a7de9 (the 2,154-row library the pass was staged from): 6 changed, 15 new, all WY-owned; 2,169 rows. One edit at sync: `edu-habitability-waiver-wy` said "No Wyoming court has ever construed this clause", but this pass read no case law (see the duty-reassignment entry above), so it now says no case law was reviewed and the reach is unknown (rule 76). Item 2 of the propagation section (the `appliances-included` pointer) was made as a uniform shared edit with Taylor's approval: the sweep found it dangling in WY, KS, NE, MN, ND, SD and OH. Item 1 (`early-termination`'s landlord cure promise) goes to the nine other tagged states as a vetting item before any merge. The AZ `returned-payments` wording is now vetted for WY. New variables `{{utility_deposit}}` and `{{reassigned_duties}}` are in backlog M.14. The citations file has the 15 new rows and the corrections. WY's retro column is complete.

**Statute spot-check at sync (Claude Code, 2026-10-01):** read against the official `wyoleg.gov/statutes/compress/title01.pdf` (downloaded whole by the shell, sha256 44b895e0…): W.S. 1-1-115(a)-(c) (the $30 fee and demand are in (a); treble damages, $100 minimum, in (b): the corrected row holds); 1-21-1202(a) (three sentences; "unless otherwise agreed upon in writing by both parties" closes the utilities sentence only, and the seasonal proviso is the third: the rewritten baseline row holds) and (d); 1-21-1208(a)-(b) ("cost to clean the unit to the condition at the beginning" and "other costs provided by any contract" in (a); "held and separately identified as a utilities deposit" in (b)); 1-21-1210(a)(i)(A)-(C). All match. One precision note: under 1-21-1208(b) applying the utility deposit to the utility debt is a duty ("shall … apply"), not a landlord option as this retro's fix 18 describes it; `utility-deposit-identification-wy` defers to "as Wyoming law provides", so no text change. Note for the next WY pass: the shell reaches the official title PDFs, so a whole-title corpus is available after all (rule 19).

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Propagated shared-row edit, 2026-10-03 (Wyoming's proposal, merged after every tagged state vetted it)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `early-termination` landlord limb.** Old: 'Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or if Tenant vacates or abandons the property without notifying Landlord.' New: 'Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or on such shorter notice and cure period as applicable law permits, or if Tenant vacates or abandons the property without notifying Landlord.' Why: the 30-day notice and 10-day cure promised in the lease could give up a shorter route the state's law allows for a material breach. Every state tagged on the row (CO, WY, MN, ND, SD, OH) vetted the wording and supported it; "as applicable law permits" means it never permits less than the law requires. This state's existing note on the row still holds.

## Propagated shared-row edit, 2026-10-04 (at the PA circle-back sync)

- `returned-payments` (CO, WY, KS, NE, MN, ND, SD, OH, AZ, GA, PA): AZ's proposal merged once every tagged state had vetted it, PA last. "If more than two of Tenant's payments during the Term are returned" now reads "during any 12-month period", so the count works for a month-to-month tenancy, which has no Term. Uniform; no WY override. WY's note segment on the row records it.

## Propagated shared-row edit, 2026-10-04 (at the WY circle-back sync)

- `surrender-end-of-term` (WY, SD, OH, CA, NV, TX, FL, AZ, GA, NC, TN, VA): CA's proposal merged once every tagged state had vetted it, WY last. "Tenant will surrender possession of the property and return all keys to Landlord immediately" now ends ", unless applicable law entitles Tenant to remain." The duty to surrender stays; the qualifier only stops the clause overstating it where a statute, retaliation rule, foreclosure rule or similar lets a tenant stay. Uniform; no WY override. WY's note segment on the row records it.

## Circle-back checks (SOP 1.56), 2026-10-04

**2026-10-04.** One [Retro] rule and one targeted fix, run against Wyoming only. Not a re-audit (rule 1). The attached `lease-clauses.csv` was confirmed at **2,876 rows / 17 columns / CRLF** before any work; WY **126 tagged, 122 active**. Old output files from this chat were deleted first (rule 8): `lease-clauses-WY-retro-delta.csv` and `lease-clause-decision-log-WY-retro.md`, both the 2026-10-01 SOP 1.15 outputs, now merged. The outputs folder was already empty. **Where anything earlier in this chat conflicts with the files attached for this task, the attached files govern** — in particular the SOP 1.15 delta is merged and must not be re-applied.

**Result: 46 delta rows, all changed, all WY-only. 4 carry a bodyText change; 42 are basis upgrades. No new rows, no shared row touched.**

---

### Rule 79 — re-read the section before trusting a summary of it

**Verdict: run in full. Three substantive defects found and fixed, one statutory ambiguity resolved, 42 rows upgraded from host-copy or secondary basis to a named artifact.**

#### What was read

| Artifact | Sections | Outcome |
|---|---|---|
| Official NXT gateway, **2026 Wyoming Statutes**, Art. 12 (`/1/53/65`) | W.S. 1-21-1201 → 1-21-1211, all 11 | **Character-identical** to the 2026-09-30 read |
| Official NXT gateway, Art. 13 (`/1/53/66`) | W.S. 1-21-1301 → 1-21-1304, all 4 | **Character-identical** to the 2026-09-30 read |
| **2025 SF0147 enrolled act**, `wyoleg.gov/2025/Enroll/SF0147.pdf` | amends W.S. 35-13-205(a)(iv), (a)(viii), 35-13-206(a) | Closes the assistance-animal currency question — see below |
| law.justia.com, current edition | W.S. 35-13-201(c) | Matches the row word for word; no history line printed |

Rule 79's hash step was run as a **text comparison, not a stored-file hash**: the 2026-10-01 outputs were deleted under rule 8 before this task began, so there was no saved section file to hash against. Both articles were re-pulled live and compared against the full text read on 2026-09-30, which is still in this chat. They match. Recording the method rather than claiming a hash.

**Boundary, unchanged from the last retro and still the governing limit on every Wyoming absence row:** there is no loadable Wyoming corpus for this session. The org egress proxy returns 403 to every statute host (wyoleg.gov, Justia, FindLaw, Casetext, Lexis), Justia is behind a bot challenge in the browser pane, the whole-title PDFs truncate, and the gateway publishes no documented query URL. So **no absence row in Wyoming rests on a statute-wide search with terms and hit counts.** The strongest available basis is three articles read whole, and every absence row now says so in those words.

#### The three defects

**1. `edu-deposit-noncompliance-penalty-wy` — scope understated and the deadline misstated.** Two errors in one short row, both caught by reading W.S. 1-21-1208 sentence by sentence.

- **Scope.** Subsection (c) penalises an unreasonable failure to comply with *"subsection (a) **or (b)**"*. The row described only the (a) duty. A landlord who mishandled a **separately identified utility deposit** under (b) would not have learned that the same full-deposit-plus-court-costs penalty reaches him.
- **Deadline.** The row said *"the 30-day (or 60-day, if there's damage) deadline."* The statute sets **the later of** 30 days after termination **and 15 days after receipt of the renter's new mailing address**, extended by a further 30 days where there is damage. The row dropped the whichever-is-later limb. The error ran in the conservative direction — it makes the clock look tighter than it is — but it still misstates the rule, and a landlord would not learn that a late forwarding address pushes the deadline **out**. Worth noting that `edu-security-deposit-return-wy` states the same deadline correctly; the defect was in the row that generalised it.

**2. `abandoned-property-wy` — the statute contradicts itself, and the clause had picked the dangerous number.** W.S. 1-21-1210(a)(iii) gives **two different figures for the same hold period**. One sentence: the property *"shall be held for an additional period of **seven (7) days** after the written response is received."* The very next sentence: *"If the renter fails to take possession of the property within the additional **fifteen (15) day** period…"* Both govern the same window. The likeliest explanation is an amendment that changed one figure and missed the other, but the text as enacted is ambiguous on its face and no Wyoming case construing it was located.

The clause tracked seven. **Changed to fifteen**, decided under rule 76 rather than referred, because the two readings are not symmetric in consequence: a landlord who holds fifteen days where seven would have done loses a few days of storage, which W.S. 1-21-1210(b) lets him charge to the renter anyway; a landlord who disposes on day eight, before a court that reads the fifteen-day sentence as controlling, has converted someone else's property with no statutory cap on the exposure. The cheap error is the safe one.

**3. `edu-abandoned-property-notice-methods-wy` — the ambiguity recorded.** Subdivisions confirmed correct ((a)(i)(A), (B), (C)). The row now carries the seven-versus-fifteen contradiction, because the lease clause has just departed from the figure every secondary source on Wyoming abandoned property repeats, and a landlord is entitled to know why.

#### The currency question that mattered most

**`assistance-animal-accommodation-wy`** was the highest-risk row in the screen: it rested on primary text Taylor supplied on **2026-08-28**, and **2025 SF0147** had amended that article. A supplied copy that predated the amendment would have made the row wrong, not merely unsourced — rule 79's named failure mode.

The **enrolled act** was read. SF0147 amends **W.S. 35-13-205(a)(iv), 35-13-205(a)(viii) and 35-13-206(a) only.** Three consequences, all favourable to the row:

1. The ESA-inclusive limb of the "assistance animal" definition **survives intact** — *"or provides emotional support that alleviates one (1) or more identified symptoms or effects of a person's disability"* — so Wyoming's independent state basis for emotional-support animals in housing holds.
2. SF0147 **does not touch W.S. 35-13-203**, so the **$750** misrepresentation fine the clause states is current.
3. The act raised **35-13-206(a)** from $750 to **$5,000** and from six months to less than one year — but that is the *injuring-or-killing* offence, which the clause does not cite. The row's existing note already drew that distinction; it is confirmed correct.

**Limit, stated rather than papered over:** W.S. 35-13-203(b) itself was **not** re-read live today — the fetch was refused — so the $750 figure and the (b) subdivision rest on Taylor's 2026-08-28 primary text plus the enrolled act showing no intervening amendment. A sound chain, but not a section-open read of 203(b) on this date, and the row now says so.

#### The counts rule 79 asks for

WY active = **122** = **70 WY-only** + **52 shared**.

**Group 1 — rows a research pass wrote: 41 upgraded.** Breakdown by the artifact that was *actually* read before today:

- **14 rested on a law.justia.com host copy** naming a section (`edu-repair-cost-termination-wy`, `edu-repair-notice-process-wy`, `renter-duties-wy`, `prohibited-acts-renter-wy`, `edu-renter-repair-remedy-wy`, `edu-successor-owner-bound-wy`, `unpaid-damages-interest-wy`, `edu-habitability-materiality-wy`, `edu-safe-homes-nondiscrimination-wy` and others). **All subdivisions confirmed correct.** `unpaid-damages-interest-wy` is worth singling out: it had been cross-checked against a FindLaw mirror, which is two host copies and not a primary read, and the 10% is indeed in **1-21-1211(b)** as cited — the same shape as the `edu-returned-check-fee-cap-wy` error caught last retro, but this one was right.
- **4 recorded no artifact at all** — `edu-nonrefundable-deposit-separate-notice-wy`, `edu-habitability-modifiable-wy`, `edu-abandoned-property-notice-methods-wy`, `edu-deposit-noncompliance-penalty-wy`. All four now read section-open; two of them produced the defects above.
- **14 are absences resting on secondary agreement.** Nine are now **partly upgraded** — the three-article whole read independently confirms the absence *within the landlord-tenant code*, which is a real strengthening. Five are **not upgradeable** because their subject sits outside Title 1 and no code-wide search exists: radon, bed bugs, EV charging, the mobile-home act, and the CO-detector building-code row. Each now says which tier it is on.
- **`edu-no-right-to-call-police-statute-wy` remains the weakest absence in the Wyoming set** and is now labelled as such: no source makes an affirmative "no such law" statement; it rests on absence-of-mention.
- **An incidental find worth more than the row it sits on.** While restating `edu-no-mobile-home-park-act-wy`, W.S. 1-21-1201(a)(iv) read section-open shows that Art. 12's definition of "residential rental unit" **expressly excludes a mobile home lot**. Wyoming's landlord-tenant code therefore does not reach mobile-home-lot tenancies at all — a stronger and more useful point than the row's current "no such act was found," and now recorded on it.

**Group 2 — rows a library-wide pass created or renamed: 5.** `edu-safe-homes-rent-defense-wy`, `edu-utility-deposit-return-wy`, `edu-security-deposit-return-wy`, `security-deposit-return-wy`, `edu-habitability-baseline-wy`. Each had the source row's basis carried forward **and** was re-read section-open, per rule 79's TN circle-back point. **Nothing was dropped in any rename.** `edu-habitability-baseline-wy`'s 2026-10-01 sentence-boundary fix was re-checked against the live text and holds.

**Group 3 — shared rows tagged WY carrying no WY note segment: 51 of 52.** Only `security-deposit-use` carries one. This is the Kansas shape (58 of 58 there). Segments were split using rule 79's method — end at the next `" | "` followed by **any** capital letter, not only a state code. **Not fixed here**, and deliberately: all 51 are recorded GENERIC in the citations file, the WY work on them was a single 2026-08-21 full-library cross-check, and writing 51 identical segments by hand is a job for one scripted backfill at merge rather than 51 hand-edits in a scalpel pass. **Recommended to Claude Code:** backfill a uniform `WY:` segment naming that cross-check as the artifact, so the next screen can see it.

**24 WY-only rows were not touched**, because each already records a named artifact — the 2026-09-27 and 2026-09-30 retro rows ("read section-open … 2026 Wyoming Statutes, wyoleg.gov NXT gateway"), `edu-returned-check-fee-cap-wy` (fixed last retro from the official `title01.pdf`), `edu-holdover-wy` (primary-verified), `edu-no-rental-fee-transparency-law-wy` (primary read of W.S. 40-12-105), and `edu-no-fee-reciprocity-wy` (four named Wyoming decisions).

---

### Targeted fix 2 — rule 62 vetting of two shared rows (answers only; shared text not edited)

**(1) `surrender-end-of-term` — CA's proposal, qualifying the surrender duty with "unless applicable law entitles Tenant to remain". SUPPORT.**

Does the current wording state a duty Wyoming law doesn't back? **No.** Wyoming has no just-cause rule, and that is now primary-verified: W.S. 1-21-1002(a)(i) grounds a forcible entry and detainer action *"Against tenants holding over their terms"*, so expiry of the term ends the right to possession. The unqualified sentence is accurate here.

Is the qualified wording lawful and accurate in Wyoming? **Yes, and it is not idle even here.** One Wyoming case fits it squarely: after a foreclosure sale, the federal Protecting Tenants at Foreclosure Act can entitle a bona fide tenant to remain past the end of the term (`edu-foreclosure-tenant-rights-wy`). The qualifier covers that without disturbing the ordinary case. Self-limiting, accurate, no override needed.

**(2) `default-by-tenant` — MN's proposal, moving the no-cure carve-out into its own sentence reaching both limbs. SUPPORT.**

The only question put was whether the edit could be read to drop a cure or pre-suit notice Wyoming requires for nonpayment. It cannot, and the reason matters: **Wyoming does require a pre-suit notice** — a three-day notice to quit under W.S. 1-21-1003, on top of W.S. 1-21-1002(a)(i)'s three-day arrears trigger — but it grants **no statutory right to cure** a nonpayment by paying up. The three-day notice is a notice to quit, not a pay-or-quit. The carve-out reaches **cure**, not **notice**, so moving it to cover both limbs takes nothing away that Wyoming law gives.

Note that the pre-settled Indiana/Pennsylvania branch — "if the edit would only drop the lease's own promise of written notice of a rent default that your law doesn't require" — **does not apply to Wyoming**, because Wyoming's law does require that notice. The edit is supported on its own terms, not on that ground, and no optional notice clause is needed because the statute already compels one.

**Which education row tells Wyoming landlords they may still give notice first: `edu-no-for-cause-eviction-wy`.** It is named as asked, and the sentence is **already written into this delta** rather than left for the merge, because the gap it closes was larger than the question assumed: Wyoming had **no nonpayment-notice row of any kind** (the `nonpayment-notice` topic key is carried by twelve states and not by WY), and the only prior mention of the three-day notice sat inside `edu-holdover-wy`, where a landlord looking for it would never find it. The row now states that the notice is a precondition to filing, that it is not a right to cure, and that a landlord may always give more notice than the statute requires.

---

### Integrity checks run on the delta

17 columns, header and CRLF line endings identical to the master; 46 rows, no duplicate ids; **every id already exists in the master — no new rows**; on every row only `bodyText`, `notes` and `last_checked` moved, with `states` and `is_active` untouched, so no other state's tagging changes; **no shared row is in the delta**; no blank required field; no `LEASE_CLAUSE` `topic_key` collision among WY-active rows after merge; WY active stays 122. Every note addition is prefixed `WY:` per rule 61, and every one names the artifact read, the subdivision checked, and the verdict.

---

### Proposed SOP changes

1. **Rule 79 — a statute that contradicts itself is a finding, not a drafting choice; take the reading whose error is cheaper.** When two sentences of one subdivision give different figures for the same period, record the conflict on the row and pick the direction whose downside is recoverable, saying why. *(W.S. 1-21-1210(a)(iii) says both "seven (7) days" and "the additional fifteen (15) day period" for the same hold. Holding too long costs chargeable storage; disposing too early is conversion.)*
2. **Rule 79 — where a row rests on text the user supplied, re-check it against the enrolled act of any session law amending that article, not against another copy of the compiled section.** A supplied copy carries no edition marker, so only the act shows whether it predates the amendment. *(`assistance-animal-accommodation-wy` rested on text supplied 2026-08-28; 2025 SF0147 had amended the article, and only the enrolled act showed which subsections it reached.)*
3. **Rule 79 — when a row generalises a companion row's figure, screen the pair together.** The specific row is usually right and the summarising row is where the limb gets dropped. *(`edu-security-deposit-return-wy` states the whichever-is-later deadline correctly; `edu-deposit-noncompliance-penalty-wy`, summarising it, did not.)*
4. **Rule 79 — a scope word in a penalty subsection ("subsection (a) or (b)") is a qualifier, and gets the same sentence-level parse as "unless otherwise agreed".** The existing rule names trailing qualifiers; cross-references that widen a penalty are the same error shape and were not covered. *(W.S. 1-21-1208(c) reaches both deposit limbs; the row covered one.)*
5. **Rule 8 — deleting last pass's outputs destroys the files rule 79's hash step compares against.** The two rules conflict as written. Either the saved section texts should live outside the deliverables that rule 8 clears, or rule 79 should say that where no saved file survives, the check is a live re-pull compared against the previous read, recorded as such. *(This pass: the SOP 1.15 outputs were deleted before work began, so Art. 12 and 13 were re-pulled and compared by text, which is what the log reports.)*

### Vouches given (propagation, rule 62)
- **2026-10-04:** `surrender-end-of-term` (CA's proposal) and `default-by-tenant` (MN's proposal), both supported for WY; reasoning above.

## Circle-back sync (Claude Code, 2026-10-04)

- **Merged** with `merge-delta.py --base 2b10851`: 46 WY rows updated (bodies of four rows, including `abandoned-property-wy`'s hold period moved from 7 to 15 days and `edu-deposit-noncompliance-penalty-wy`'s scope and deadline; notes on the rest); no new rows, no shared row, nothing refused. WY active 122, unchanged.
- **Backfill (as the pass recommended):** 49 shared rows tagged WY carried no WY note segment; each now has one naming the 2026-08-21 full-library cross-check as its basis (all 49 are GENERIC in the citations file). The pass counted 51; two already had a WY segment in another form.
- **Citations file:** the 46 rows re-dated; the two corrected rows note what changed.
- **Rule 62, edit merged.** WY was the last tagged state to vet CA's `surrender-end-of-term` qualifier; it now reads "…return all keys to Landlord immediately, unless applicable law entitles Tenant to remain." for all 12 tagged states, with a note in each state's segment and log. WY also supports MN's `default-by-tenant` edit (Wyoming requires the three-day notice to quit, so the Indiana/Pennsylvania question doesn't arise), which now waits only on NY.
- **Guards:** all pass. **Statute spot-check, 2 of 2, on the official title 1 PDF from wyoleg.gov:** W.S. 1-21-1210(a)(iii) (both "seven (7) days after the written response is received" and "the additional fifteen (15) day period", confirming the contradiction) and 1-21-1208 ((c) reaches "subsection (a) or (b)"; the deadline is 30 days after termination or 15 days after the new address, "whichever is later").
- **SOP 1.57:** all five proposals adopted (rule 79). WY's 79 cell set to ✓.

## Propagated shared-row edit, 2026-10-04 (at the NY circle-back sync)

- `default-by-tenant`: MN's proposal merged once every state tagged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY) had vetted it, NY last. The no-cure carve-out moved out of the non-rent limb into its own sentence reaching both limbs, in the wording already merged on `default-by-tenant-ks-ne`: "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." It is self-limiting, so it reaches a breach only where WY law lets Landlord proceed without a cure opportunity. Uniform; no WY override.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for WY. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any WY row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach WY's law; to be confirmed at WY's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.


---

## Topic gaps pass (end-of-run consistency pass, Claude Desktop, 2026-10-24)

**Pass:** end-of-run consistency pass, 253 topics Wyoming had no row for, plus the six Wyoming items. One visit, 2026-10-24 (Taylor).  
**Deliverable pair:** `lease-clauses-WY-gaps-delta.csv` (new rows + tagged existing rows) and this log.


---

## §1 Sources, channel and currency

**Channel.** `corpus-WY-20261024.tar.xz`, downloaded by Claude Code from wyoleg.gov on 2026-10-24.
Archive SHA-256 verified against the supplied `.sha256` before unpacking; `verify_wy.py` then reported
**603 files match, 41 PDFs listed but not shipped, 0 problems**. Holds every Wyoming title as text
(`pdftotext -layout`), plus Title 97 (constitution) and Title 99 (noncodified), and the enrolled act of
every 2025 (171) and 2026 (107) act. The Legislature's download page states the text "contains changes
from the 2026 Budget Session and reflects the contents of the statutes as they exist as of July 1, 2026."

**This is the first Wyoming pass with a code-wide corpus.** Every earlier Wyoming pass, including the
2026-09-30 and 2026-10-04 retros, recorded that no statute-wide search was possible — the organization's
egress proxy returns 403 to every statute host, Justia is behind a bot challenge, and the site publishes
no bulk text. Those passes reached statutes by guessing gateway node numbers, and every absence row they
produced carries the boundary phrase "Articles 10, 12 and 13 read whole." That boundary is superseded by
this pass's batteries — and was, in fact, one article short (see Article 14, §6 finding 1).

### Limits of this corpus, each found during the pass and each bounding an absence claim

1. **Title 34.1 — the Uniform Commercial Code — is NOT in the corpus.** The manifest holds titles 01
   through 42 plus 97 and 99. Wyoming codifies its UCC separately as "Title 34.1", which was never
   downloaded; Title 34 chapter 21 is 527 "Renumbered by order of management council" stubs marking where
   it used to sit, and `34.1-` returns 76 hits that are all cross-references *from* other titles. So **no
   absence of UCC subject matter — goods, sales, warranties, secured transactions, leases of goods — is
   proved by this corpus.** For a residential real-property library the practical reach is small, but any
   row touching a security interest in a tenant's goods, a waterbed or furnishings warranty, or the
   UCC/UCCC boundary should say the UCC was not searched. (The Uniform Consumer Credit Code is a
   different act, in Title 40, and IS in the corpus.)
2. **No agency rules.** rules.wyo.gov is outside the corpus. This bites hardest on the Public Service
   Commission (landlord submetering under § 37-1-101(a)(vi)(H)), the Department of Revenue (the 2026
   EV-charging tax), and the Department of Agriculture (public pool and spa standards under
   §§ 35-28-101 to 35-28-110). Rows on those topics state the statutory position and the cautious course,
   never a predicted enforcement outcome.
3. **No court rules, forms or case law.** W.R.C.P. and W.R.C.P.C.C. are cited where a statute points at
   them (for example § 1-21-1210(a)(i)(B)) but were not read. Several rows turn on questions only case law
   can settle — waiver of forfeiture during an unexpired term, the reach of § 1-21-1202(d), whether a
   § 1-21-1208(c) claim is a statutory liability (eight years) or a penalty (one year). Each says so.
4. **No municipal or county ordinances**, consistent with SOP rule 3. This matters more in Wyoming than
   in most states: Wyoming is a constitutional home-rule state (Wyo. Const. art. 13, § 1(b)), nothing in
   the code preempts local rental regulation, and § 35-9-121(b) expressly makes a *more stringent* local
   code prevail. Plumbing in particular has no state floor at all (§ 35-9-106(a)(i)'s model-code list is
   exhaustive and omits a plumbing code), so it is purely local under § 15-1-119.

### Search-engine defects found and fixed during the pass

Recorded because each produced false zeros or false hits before it was caught, and each is now a proposed
SOP rule.

- **Line wraps.** `pdftotext -layout` breaks statutory phrases across lines. The first harness normalised
  spaces and tabs but not newlines, so every multi-word literal returned false zeros — caught when
  `Condominium Ownership Act` returned 0 though Wyoming has one at § 34-20-101. Fixed by searching a
  whitespace-collapsed view; revalidated with the nonsense control still at 0 and `residential rental
  unit` rising 20 → 23. Every battery run before the fix was re-run.
- **Unescaped number style.** Wyoming writes `seven (7) days`; unescaped parentheses make that a regex
  group matching nothing. Found by an agent re-running its own numeric patterns escaped.
- **Bare section numbers are substrings.** `1-3-119` returns 7 hits of which 6 are really `41-3-119` and
  `21-3-119`; `1-3-111` returns 9 of which 8 are false — and in a currency check they look exactly like
  live amendments. Fixed by adding an anchored `cite` command reporting anchored and unanchored counts
  side by side.
- **Phrase traps in Wyoming's own wording.** `hot water` does not match § 1-21-1203(a)(iii), which says
  "hot and cold water". `data breach` returns 0 because Wyoming says "breach of the security of the data
  system". `terminate the lease` returns 0 because Wyoming says "rental agreement". `Section 8` returns
  170 hits that are almost all bill-section numbering. `security device` returns 23 hits that are all
  financial surety devices. Title 23 uses "lessee" and never "tenant"; Title 37 never uses "landlord".

---

## §2 Topics answered

**253 of 253 topics answered.** One line each: topic — row id(s) — Present / Absent / Tagged — citation.

- Abandonment and mitigation - edu-abandonment-and-mitigation-wy - Absent (no mitigation statute; abandonment is a statutory 'termination') - Wyo. Stat. §§ 1-21-1201(a)(v), 1-21-1208(a), 1-21-1210, 1-21-1211(b)
- Casualty and mitigation waivable - edu-casualty-and-mitigation-waivable-wy - Present (no casualty or mitigation statute; Wyo. Stat. § 1-21-1202(d) expressly permits modifying article duties by explicit signed writing, Safe Homes Act § 1-21-1304 is the one non-waivable floor) - Wyo. Stat. §§ 1-21-1202(d), 1-21-1304
- Cure and eviction grounds - edu-cure-and-eviction-grounds-wy - Present (closed list of FED grounds plus a bare 3-day notice to quit; no statutory right to cure) - Wyo. Stat. §§ 1-21-1002(a), 1-21-1003, 1-21-1204(a)(vii)
- Dv qualifying documents - edu-dv-qualifying-documents-wy - Present (only 'medical, court or police evidence'; no third-party certification, no form; delivery to landlord required on the 1-21-1303(b) track only) - Wyo. Stat. §§ 1-21-1303(a)(i), 1-21-1303(b)(ii)
- Exculpatory clauses - edu-exculpatory-clauses-wy - Absent (no anti-exculpation statute; two statutory liability limits already favor the owner) - Wyo. Stat. §§ 1-21-1203(e), 1-21-1210(c), 1-21-1202(d)
- Frozen standard incorporation - edu-frozen-standard-incorporation-wy - Present (frozen 2012 IBC accessibility and 1997 UBC fees; rolling NFPA 58 and ADA; most International codes named with no edition, with the operative edition set by agency rule or local IRC adoption) - Wyo. Stat. §§ 16-6-501, 35-9-106, 35-9-108(d), 35-9-120(a), 35-9-121, 35-9-163, 16-13-101
- Homestead waiver - edu-homestead-waiver-wy - Absent as a lease mechanism (statutory waiver words exist only for conveyances under Wyo. Stat. § 34-2-121; exemption is constitutional and requires joint spousal consent) - Wyo. Const. art. 19, § 9; Wyo. Stat. §§ 34-2-121, 1-20-106, 1-20-108
- Lead state notices - edu-no-lead-state-notices-wy - Absent (Wyoming has no lead statute of any kind; federal Title X disclosure is the whole obligation) - No Wyoming statute; FEDERAL: 42 U.S.C. S 4852d
- Mold disclosure - edu-no-mold-disclosure-wy - Absent (no Wyoming mold statute; mold runs through the general habitability duty and the 1-21-1203(c) tenant-cause defense) - No Wyoming mold statute; Wyo. Stat. §§ 1-21-1202(a),(c), 1-21-1203
- Pet eviction fact sheet - edu-no-pet-eviction-fact-sheet-wy - Absent (no Wyoming pet disclosure of any kind; pets are a lease matter, and 1-21-1207 is the only disclosure a pet fee triggers) - No Wyoming statute; related Wyo. Stat. §§ 1-21-1207, 35-13-201(c)
- Recycling notice - edu-no-recycling-notice-wy - Absent (no Wyoming recycling duty or notice; tenant waste duties in 1-21-1204(a)(ii) and (a)(viii) are what exists) - No Wyoming statute; Wyo. Stat. § 1-21-1204(a)
- Required disclosures - edu-required-disclosures-wy + nonrefundable-deposit-disclosure-wy - Present (Wyo. Stat. § 1-21-1207 is the only required lease disclosure; no state form, font or placement rule; 34-1-151 seller disclosure cannot reach a dwelling lease-option) - Wyo. Stat. § 1-21-1207
- Sfr occupancy disclosure - edu-no-sfr-occupancy-disclosure-wy - Absent (no SFR notice, no occupancy standard, no font or placement rule; 1-21-1204(a)(v)'s ceiling is whatever the lease specifies) - No Wyoming statute; Wyo. Stat. § 1-21-1204(a)(v)
- Student housing - edu-no-student-housing-rule-wy - Absent (no Wyoming student-housing law; the only statutory mentions are capital-construction funding exclusions) - No Wyoming statute; Wyo. Stat. § 1-21-1201(a)(iv)
- Tenant repair agreement - edu-tenant-repair-agreement-wy + tenant-repair-agreement-wy - Present (Wyo. Stat. § 1-21-1202(d) permits assigning any article duty by explicit signed writing, with no separate-writing, consideration, good-faith or dwelling-type condition; § 1-21-1203(a)(iv) is a separate opt-in for appliances) - Wyo. Stat. §§ 1-21-1202(d), 1-21-1203(a)(iv)
- Utility disclosure attachment - edu-no-utility-disclosure-attachment-wy - Absent (no attachment required, but metered sales of a utility commodity to tenants forfeit the public-utility exemption except fee-free water allocation) - No Wyoming statute; Wyo. Stat. §§ 37-1-101(a)(vi)(H)(VI),(VIII), 1-21-1208(b)
- accessory-dwelling-unit — edu-no-accessory-dwelling-unit-statute-wy — Absent — Wyo. Stat. § 15-1-601(a); § 18-5-201(a)
- actual-notice-method — edu-no-agreed-actual-notice-method-wy — Absent — Wyo. Stat. §§ 1-21-1203(b), 1-21-1003, 1-21-1210(a)(i); 40-21-108(b)(ii)
- adverse-proceeding-notice — edu-no-adverse-proceeding-notice-wy + adverse-proceeding-notice-wy — Absent (no landlord disclosure duty, no attornment statute; foreclosing mortgagee must notify the person in possession) — Wyo. Stat. §§ 34-4-103(a)(iv), 34-4-104(a)
- alarm-tampering-fee — edu-no-alarm-tampering-fee-wy — Absent — Wyo. Stat. § 1-21-1205(a)(i); § 6-3-201(a)
- animal-care-access — animal-care-access-wy + edu-animal-care-access-wy — Absent — Wyo. Stat. § 1-21-1205(a)(iii); § 1-21-1202(d)
- appliances-excluded — appliances-excluded-wy + edu-appliances-excluded-wy — Present — Wyo. Stat. § 1-21-1203(a)(iv)
- application-fees — edu-no-application-fee-rule-wy — Absent — no Wyoming statute; nearest Wyo. Stat. § 40-12-505(d), § 1-21-1207
- asbestos-hazards — edu-asbestos-hazards-wy — Absent — Wyo. Stat. §§ 1-1-131 through 1-1-137 (successor liability only; no landlord duty)
- association-obligations-disclosure — edu-no-association-disclosure-wy — Absent — Wyo. Stat. §§ 34-20-101 to 34-20-104
- automatic-renewal - edu-automatic-renewal-wy + lease-renewal-and-holdover-wy - Present - Wyo. Stat. §§ 34-2-128, 34-2-129
- balcony-inspection — edu-no-balcony-inspection-mandate-wy — Absent (no inspection mandate; §§ 35-9-501/504/506/507 fire-escape duty fills the gap) — Wyo. Stat. §§ 35-9-501 to 35-9-507
- bed-bug-cooperation — edu-no-bed-bug-rule-wy + pest-cooperation-wy — Absent — Wyo. Stat. §§ 1-21-1203, 1-21-1204
- binding-arbitration — edu-lease-arbitration-wy + arbitration-agreement-wy — Present — Wyo. Stat. §§ 1-36-101 to 1-36-119
- cannabis — edu-cannabis-wy — Present — Wyo. Stat. §§ 35-7-1031(c), 35-7-1039, 35-7-1063(a)(i)
- carpet-cleaning — edu-carpet-cleaning-wy + carpet-cleaning-wy — Present — Wyo. Stat. § 1-21-1208(a)
- certificate-of-occupancy-disclosure — edu-no-certificate-of-occupancy-disclosure-wy — Absent — Wyo. Stat. § 35-9-108(n) (CO exists, no disclosure duty)
- children-occupancy — edu-children-occupancy-wy — Absent (no required lease content; Wyo. Fair Housing Act constrains) — Wyo. Stat. §§ 40-26-103, 40-26-113; 1-21-1204(a)(v)
- cold-weather-vacate-notice — edu-no-cold-weather-vacate-notice-wy + cold-weather-vacate-notice-wy — Absent (no Wyoming cold-weather rule; only hook is § 1-21-1204(a)(iv) reasonable use of heating facilities) — Wyo. Stat. § 1-21-1204
- collection-fee — collection-fee-wy + edu-collection-fee-wy — Present — Wyo. Stat. § 1-1-115; § 1-21-1008(b); § 33-11-101(b)(v)
- common-area-lighting — edu-common-area-lighting-wy + common-area-lighting-tenant-meter-wy — Present — Wyo. Stat. § 1-21-1203(a)(ii); § 35-9-504
- communal-land-lease-approval — edu-communal-land-lease-approval-wy + communal-land-lease-approval-wy — Present — Wyo. Stat. § 36-5-116
- condemned-premises-rent-bar — edu-no-condemned-rent-bar-wy — Absent — no rent bar; Wyo. Stat. § 35-9-156(d)-(h), § 15-1-103(a)(xxvi)
- condition-inspection — edu-condition-inspection-wy + tag move-in-condition-report-as — Present — Wyo. Stat. §§ 1-21-1204(a)(viii), 1-21-1208(a)
- confession-of-judgment — edu-confession-of-judgment-wy — Present — Wyo. Stat. §§ 1-16-201, 1-16-202; § 40-14-249
- confirmed-absences-habitability - edu-confirmed-absences-habitability-wy - Present - Wyo. Stat. §§ 1-21-1202(d), 1-21-1203, 1-21-1206
- confirmed-absences-misc — edu-confirmed-absences-misc-wy — Absent (no alarm statute, no payment-method fee rule, no false-application termination, no rental licence) — Wyo. Stat. § 1-1-115 fills the dishonored-rent-check gap
- confirmed-absences-outside-title — edu-confirmed-absences-outside-title-wy — Present — Wyo. Stat. §§ 1-21-1401 to 1-21-1403
- construction-liens — edu-construction-liens-wy + tag no-liens-ar — Present — Wyo. Stat. § 29-2-105
- conversion-notice — edu-no-conversion-notice-wy — Absent — Wyo. Stat. §§ 34-20-101 to 34-20-104 (silent)
- criminal-activity — edu-criminal-activity-wy + criminal-activity-wy — Absent (no crime-specific eviction statute; clause lawful as contract) — Wyo. Stat. §§ 1-21-1002(a)(vi), 1-21-1204(a)(vii), 40-26-103(c)
- defective-drywall-disclosure — edu-no-defective-drywall-disclosure-wy — Absent — Wyo. Stat. § 1-21-1202(a); § 1-21-1203(a)(i)
- deposit-cost-schedule — deposit-cost-schedule-wy — Present — Wyo. Stat. § 1-21-1208(a)
- deposit-escheat — edu-deposit-escheat-wy — Present (security deposits named in the act; 5-year dormancy, Nov. 1 report, 120-day owner notice, $100/day and 25% penalties; contract forfeiture deadlines ineffective) — Wyo. Stat. §§ 34-24-102(a)(x)(B), 34-24-103(a), 34-24-118, 34-24-135
- deposit-last-month-rent — deposit-last-month-rent-wy + edu-deposit-last-month-rent-wy — Present — Wyo. Stat. § 1-21-1208(a)
- deposit-surrender-notice — edu-deposit-surrender-notice-wy + deposit-surrender-notice-wy — Present — Wyo. Stat. § 1-21-1208(a)
- designated-repairer — designated-repairer-wy + edu-designated-repairer-wy — Present — Wyo. Stat. § 1-21-1203(b)
- disability-accommodation — edu-disability-accommodation-wy + disability-modification-restoration-wy — Present — Wyo. Stat. § 40-26-107, § 35-13-201(c)
- disaster-displaced-guests — edu-disaster-displaced-guests-wy — Absent — Wyo. Stat. § 1-21-1204(a)(v) (lease-specified occupant cap is the only control)
- disaster-duties — edu-disaster-duties-wy — Absent — Wyo. Stat. § 1-21-1203(d) fills the gap
- double-letting - edu-no-double-letting-rule-wy - Absent - no Wyoming statute (nearest Wyo. Stat. §§ 1-21-1204(a)(v), 34-2-128)
- drug-free-housing-addendum — edu-drug-free-housing-addendum-wy + drug-free-housing-addendum-wy — Absent (no addendum statute; nuisance and clandestine-lab liability fill the gap) — Wyo. Stat. §§ 6-6-201, 35-9-158(a)(ii), 1-21-1002(a)(vi)
- dv-confidentiality — edu-no-dv-confidentiality-rule-wy — Absent — Wyo. Stat. §§ 1-21-1301 to 1-21-1304; § 35-21-112
- dv-deposit-timing — edu-no-dv-deposit-timing-wy — Absent — Wyo. Stat. §§ 1-21-1301 to 1-21-1304 silent; § 1-21-1208 governs
- dv-lockchange — edu-no-dv-lock-change-wy — Absent — Wyo. Stat. §§ 1-21-1301 to 1-21-1304 (silent); § 35-21-105(a)(i) fills the gap
- dv-protection-order-chapter-moved — edu-dv-law-citations-wy — Present (nothing moved; § 1-21-1302(a)(i)'s cross-reference to § 35-21-102(a)(iii) verified live) — Wyo. Stat. §§ 1-21-1301 to 1-21-1304, 35-21-102(a)(iii)
- electric-submetering-disclosure — edu-electric-submetering-wy — Present — Wyo. Stat. § 37-1-101(a)(vi)(H)(VI), (VIII)
- emergency-contact — edu-no-emergency-contact-rule-wy — Absent — Wyo. Stat. § 1-21-1201(a)(i) (agent counts as owner for notice)
- eminent-domain — edu-eminent-domain-wy + eminent-domain-wy — Present (§ 1-26-711 is a lease-displaceable default covering partial takings only) — Wyo. Stat. § 1-26-711
- employee-screening — edu-no-employee-screening-mandate-wy — Absent — Wyo. Stat. § 33-28-103(a); § 33-28-106(a)
- energy-data-release — edu-no-energy-data-release-wy + energy-data-release-wy — Absent — no Wyoming statute; Wyo. Stat. § 9-12-1201 et seq. is public facilities only
- entity-landlord-court-representation — edu-entity-landlord-court-representation-wy — Present — Wyo. Stat. § 1-21-1017
- environmental-event-termination — edu-no-environmental-event-termination-wy + environmental-event-termination-wy — Absent — no casualty statute; nearest Wyo. Stat. § 1-21-1203(d)
- ev-charging-end-of-tenancy — edu-ev-charging-end-of-tenancy-wy — Absent (no end-of-tenancy rule) but surrounding WY EV law is live — Wyo. Stat. §§ 37-1-101(a)(vi)(H)(X), 39-17-304(a)(iv), 40-26-107(c)(i)
- ev-charging-requirements — ev-charging-requirements-wy + edu-ev-charging-requirements-wy — Absent (no tenant right; two regulatory traps on selling the power) — Wyo. Stat. § 37-1-101(a)(vi)(H)(VI); § 39-17-304(a)(iv)
- ev-charging-shared-area - edu-no-ev-charging-shared-area-wy - Absent - no WY shared-area statute; Wyo. Stat. § 37-1-101(a)(vi)(H)(X) governs the billing question
- eviction-hardship-stay — edu-no-eviction-hardship-stay-wy — Absent (no hardship stay; §§ 1-21-1007, 1-21-1014(b), 1-21-1015 are bond-conditioned delays only) — Wyo. Stat. §§ 1-21-1007 to 1-21-1015
- eviction-penalty-clause-ban — edu-no-eviction-penalty-rule-wy — Absent — Wyo. Stat. §§ 1-21-1008, 1-21-1202(d), 40-12-105
- eviction-process — edu-eviction-process-wy — Present — Wyo. Stat. §§ 1-21-1001 to 1-21-1017
- eviction-record-sealing — edu-no-eviction-record-sealing-wy — Absent — no Wyoming provision; §§ 7-13-1401 et seq. are criminal only
- eviction-service-party — edu-no-eviction-service-party-wy — Absent (no lease-named service party, no address confidentiality program) — Wyo. Stat. §§ 1-21-1003, 1-21-1004
- expedited-criminal-eviction — edu-no-expedited-criminal-eviction-wy — Absent — Wyo. Stat. § 1-21-1002(a); § 1-21-1003; § 1-21-1004
- expedited-deposit-disposition — edu-no-expedited-deposit-disposition-wy — Absent — Wyo. Stat. § 1-21-1208(a)-(c)
- extended-absence-notice — edu-no-extended-absence-notice-wy + extended-absence-notice-wy — Absent (no absence-notice duty; § 1-21-1204's eight renter duties are exhaustive and abandonment is undefined) — Wyo. Stat. §§ 1-21-1204, 1-21-1201(a)(v)
- fair-housing — edu-fair-housing-wy + edu-fair-housing-exemptions-wy — Present — Wyo. Stat. §§ 40-26-101 to 40-26-145
- family-child-care — edu-family-child-care-wy + family-child-care-wy — Present — Wyo. Stat. § 34-1-501
- farmland-hunting-rights — farmland-hunting-rights-wy + edu-farmland-hunting-rights-wy — Present — Wyo. Stat. § 23-3-305(b), (e)
- fee-in-lieu-of-deposit — edu-no-fee-in-lieu-of-deposit-rule-wy — Absent — no statute; nearest Wyo. Stat. § 1-21-1207, § 1-21-1208(a)
- fee-unprovided-service — edu-fee-unprovided-service-wy — Present — Wyo. Stat. §§ 40-12-105(a)(v) and (a)(xv), 40-12-102(a)(ii) and (vi), 40-12-108, 40-12-109
- fire-code-standard — edu-fire-code-standard-wy — Present — Wyo. Stat. §§ 35-9-106(a)(i), 35-9-108(a), 35-9-121(a)
- fire-sprinkler-duty - edu-no-fire-sprinkler-duty-wy - Absent - no WY statutory duty; Wyo. Stat. §§ 35-9-106(a)(i), 35-9-108(a), 35-9-121 are the framework
- firearms — edu-firearms-wy + firearm-rules-wy — Present (private landlord may restrict; governmental landlord may not) — Wyo. Stat. § 6-8-105(d)(ii), § 6-8-401(c)
- flood-disclosure — edu-no-flood-disclosure-wy + flood-disclosure-wy — Absent — no flood statute; Wyo. Stat. §§ 33-28-102(b)(viii), 33-28-310(a)(i)(F)
- foreclosure-disclosure — edu-no-foreclosure-disclosure-wy — Absent — no Wyoming statute; § 34-4-104(a) notifies the tenant instead
- foreign-ownership — edu-foreign-ownership-wy — Present — Wyo. Stat. §§ 19-13-501 to 19-13-502 (reporting only); alien land law repealed 2001
- forfeiture-redemption — edu-no-forfeiture-redemption-wy — Absent (no tenant redemption or reinstatement right) — Wyo. Stat. §§ 1-21-1002(a)(i), 1-21-1008
- furnishings-included — furnishings-included-la (tagged WY) — Tagged — Wyo. Stat. § 1-21-1204(a)(viii); § 1-21-1205(a)(i); § 1-21-1208(a)
- good-cause-notice — edu-no-good-cause-notice-wy — Absent — Wyo. Stat. §§ 1-21-1002(a), 1-21-1003; 34-2-128, 34-2-129
- government-fee-reimbursement — edu-government-fee-reimbursement-wy + government-fee-reimbursement-wy — Absent (no state rental registration/licensing and no pass-through rule; 30-day transient-guest line keeps residential rent out of sales and lodging tax) — Wyo. Stat. §§ 39-15-101(a)(xiv), 39-15-103(a)(i)(G)
- governmental-fines — edu-governmental-fines-wy — Absent — Wyo. Stat. § 15-1-103(a)(xix); § 18-2-115
- guarantor-renewal — edu-guarantor-renewal-wy + guaranty-wy — Present — Wyo. Stat. § 1-23-105(a)(ii); §§ 34-2-128, 34-2-129
- guest-rights — edu-no-guest-rights-statute-wy + guest-policy-wy — Absent — no Wyoming statute; Wyo. Stat. § 1-21-1204(a)(v) and § 1-21-1205(a) are the only levers
- habitability-presumption — edu-no-habitability-presumption-wy — Absent — no presumption; Wyo. Stat. § 1-21-1203(b) puts the burden on the renter
- habitability-statement — edu-habitability-statement-wy — Absent — Wyo. Stat. § 1-21-1207 is Wyoming's ONLY mandatory lease recital and it concerns nonrefundable deposits
- hazardous-contamination-disclosure — edu-no-contamination-disclosure-wy — Absent — § 35-9-156(d) and §§ 35-11-1601 et seq. are buyer-facing only
- health-district-rental-rules - edu-no-health-district-rental-rules-wy - Absent - no WY rental rule; Wyo. Stat. §§ 35-1-105(a)(vii), 35-1-303, 35-1-310 are the framework
- heating — edu-heating-wy + tenant-supplied-heat-wy — Present (heat is a § 1-21-1203(a)(iii) duty, no temperature standard, shiftable under § 1-21-1202(d)) — Wyo. Stat. §§ 1-21-1202, 1-21-1203
- hoa — edu-hoa-wy — Absent — Wyo. Stat. §§ 34-20-101 to 34-20-104; § 34-1-154
- holding-deposit — edu-holding-deposit-wy + holding-deposit-credited-wy — Absent — no Wyoming statute; Wyo. Stat. §§ 1-21-1207, 1-21-1208 take over at signature
- holdover-rate — holdover-rate-wy + edu-holdover-rate-wy — Present — Wyo. Stat. §§ 34-2-128, 34-2-129, 1-21-1002(a)(i), 1-21-1008(b), 1-21-1208(a)
- home-business — edu-home-business-wy + home-business-wy — Present (§ 34-1-501 child-care covenant rule; no general home-business statute) — Wyo. Stat. § 34-1-501
- infirmity-termination — edu-no-infirmity-termination-wy — Absent — Wyo. Stat. § 1-21-1201(a)(v); § 1-21-1208(a)
- informal-dispute-resolution — tagged informal-dispute-resolution-or — Tagged — Wyo. Stat. §§ 1-21-1202(d), 1-21-1002(a), 1-36-104(c)
- inspection-condemnation-disclosure — edu-no-inspection-condemnation-disclosure-wy — Absent (no state housing code and no landlord disclosure duty; narrow contaminated-property regime at § 35-9-156 discloses only to a purchaser, and serves the order on occupants directly) — Wyo. Stat. § 35-9-156(d)-(h)
- inspection-notice-penalty — edu-no-inspection-notice-penalty-wy — Absent — Wyo. Stat. § 1-21-1208(a), (c)
- jury-waiver — edu-jury-waiver-wy + jury-waiver-possession-wy — Absent — no Wyoming statute; Wyo. Const. art. 1, § 9; Wyo. Stat. § 1-21-1008(a)
- key-control-policy — edu-no-key-control-mandate-wy — Absent — no Wyoming statute; nearest is Wyo. Stat. § 33-28-106(a) licensee background check
- knowing-use-penalty — edu-no-knowing-use-penalty-wy — Absent — no prohibited-terms list; Wyo. Stat. § 1-21-1202(d), WCPA §§ 40-12-105(a)(viii), (xv)
- landlord-breach-remedy — edu-landlord-breach-remedy-wy — Present — Wyo. Stat. §§ 1-21-1203(b)-(e), 1-21-1206(a)-(d)
- landlord-liability-insurance — edu-no-landlord-insurance-mandate-wy — Absent — no mandate; cf. Wyo. Stat. § 33-28-401(a)
- landlord-lien - edu-landlord-lien-wy - Present (house trailer sites only) - Wyo. Stat. § 29-7-301; no general landlord lien
- landlord-registration — edu-landlord-registration-wy — Absent (no rental registration; foreign-entity certificate of authority, registered agent and short-term lodging sales tax licence fill the gap) — Wyo. Stat. §§ 17-16-1501, 17-16-1502(a),(d), 39-15-106(a)
- landlord-remedies-termination — edu-landlord-remedies-termination-wy — Present — Wyo. Stat. §§ 1-21-1001 to 1-21-1017, 5-9-128, 34-2-128
- late-fee-limit — edu-no-late-fee-limit-wy — Absent — no Wyoming statute; lease governs, Wyo. Stat. § 1-21-1208(a) makes it deductible
- law-enforcement-cooperation — edu-law-enforcement-cooperation-wy — Present — Wyo. Stat. §§ 14-3-205, 35-20-103, 35-20-111
- lead-safe-certification — edu-no-lead-safe-certification-wy — Absent (no Wyoming lead law at all) — FEDERAL: 42 U.S.C. § 4852d
- lease-content-requirements — edu-lease-content-requirements-wy — Present — Wyo. Stat. § 1-21-1207; § 1-23-105(a)(v)
- lease-copy — edu-no-lease-copy-duty-wy — Absent — Wyo. Stat. § 1-23-105(a)(v); §§ 1-21-1202(d), 1-21-1207
- lease-notice-initial-requirement — edu-no-lease-initials-requirement-wy — Absent (no initialing, bold-type or point-size rule; the only writing rules are the statute of frauds at § 1-23-105(a)(v) and the written-renewal rule at § 34-2-129) — Wyo. Stat. §§ 1-23-105, 34-2-128, 34-2-129
- lease-registration — edu-lease-registration-wy — Absent — Wyo. Stat. § 34-1-102; § 34-1-120; § 1-23-105(a)(v)
- lease-term-limitation — edu-lease-term-limitation-wy + lease-term-and-recording-wy — Present — Wyo. Stat. § 1-23-105(a)(v); § 34-1-102; § 34-1-120
- lease-type-parity — edu-no-lease-type-parity-wy — Absent — no Wyoming statute; Wyo. Stat. §§ 34-2-128, 34-2-129 govern instead
- lease-type-size — edu-no-lease-type-size-wy — Absent — no type-size or evidentiary rule; only content duty is Wyo. Stat. § 1-21-1207
- limitation-of-actions — edu-limitation-of-actions-wy — Present — Wyo. Stat. §§ 1-3-105(a)(i) (ten years on a written lease), 1-3-119 (partial payment restarts the clock)
- liquidated-damages — edu-liquidated-damages-wy — Absent — no statute; § 1-21-1208(a) and (c) are the operative constraint
- lockout-for-rent-delinquency - edu-no-lockout-for-rent-wy - Absent (and effectively prohibited) - Wyo. Stat. §§ 6-3-306, 1-21-1001, 1-21-1003
- maintenance-duty-shift — edu-maintenance-duty-shift-wy + maintenance-duty-shift-wy — Present (§ 1-21-1202(d) permits assigning any Article 12 duty by explicit written signed agreement; no anti-waiver) — Wyo. Stat. § 1-21-1202(d)
- meter-conservation-charge — edu-no-meter-conservation-charge-wy — Absent — no statute; Wyo. Stat. §§ 42-2-501, 37-18-102
- meth-disclosure — edu-meth-disclosure-wy — Absent (no tenant disclosure) — Wyo. Stat. §§ 35-9-156, 35-9-158 govern instead
- military-air-zone-disclosure — edu-no-military-zone-disclosure-wy — Absent — no Wyoming provision; § 10-5-301 is a local airport-zoning enabling act only
- minor-tenant-filing — edu-minor-tenant-filing-wy — Present (minors over 14 MAY be sued, with a court-appointed guardian) — Wyo. Stat. § 1-1-102
- municipal-utility-lien — edu-municipal-utility-lien-wy — Present — Wyo. Stat. § 35-3-122; § 16-10-110; § 15-4-204
- nonpayment-notice — edu-nonpayment-notice-wy — Present — Wyo. Stat. §§ 1-21-1002(a)(i), 1-21-1003, 1-21-1004
- nonresident-owner-agent — edu-no-nonresident-owner-agent-wy + nonresident-owner-agent-wy — Absent (no nonresident-landlord agent statute and no income tax to withhold; the real in-state agent duty is § 17-28-101 for entity owners) — Wyo. Stat. §§ 1-21-1201(a)(i), 5-1-107, 17-28-101(a)
- notice-service-fee — edu-no-notice-service-fee-wy — Absent — Wyo. Stat. § 1-21-1003; § 1-21-1008(b)
- notice-to-quit-waiver — edu-notice-to-quit-waiver-wy + notice-to-quit-preserved-wy — Present — Wyo. Stat. § 1-21-1003 (not waivable); § 1-21-1202(d) does not reach article 10
- notice-to-vacate-additional-terms — edu-no-notice-to-vacate-terms-rule-wy — Absent — no Wyoming statute; Wyo. Stat. § 1-21-1003 sets the only notice requirement
- nuisance — edu-nuisance-wy + nuisance-and-unlawful-use-wy — Present — Wyo. Stat. §§ 6-6-201 to 6-6-208, §§ 35-9-111 to 35-9-113, § 35-1-105(a)(vii), § 18-2-115
- optional-lease-terms — edu-optional-lease-terms-wy — Present — Wyo. Stat. § 1-21-1202(d) plus seven lease-dependent hooks in Article 12 and § 1-23-105
- ordnance-demolition-meter-disclosures — edu-no-ordnance-demolition-meter-disclosure-wy — Absent — §§ 16-7-101 to 16-7-121 and § 37-1-101(a)(vi)(H)(VI) fill the gap
- other-landlord-facilities - edu-other-landlord-facilities-wy - Present - Wyo. Stat. §§ 35-9-501, 35-9-502, 35-9-504, 35-9-506, 35-9-507
- owner-move-in-reservation — edu-owner-move-in-reservation-wy, plus WY tagged onto owner-occupancy-termination-ar — Absent (no owner move-in statute; §§ 34-2-128/129 make end-of-term termination automatic) — Wyo. Stat. §§ 34-2-128, 34-2-129, 1-21-1002(a)(i)
- parking-rules-notice — edu-no-parking-rules-notice-wy — Absent — Wyo. Stat. §§ 31-5-111, 31-5-501, 31-13-109
- part5-nonwaivable — edu-nonwaivable-rights-wy — Absent — Wyo. Stat. § 1-21-1202(d) makes Article 12 waivable; § 1-21-1304 is the only floor
- periodic-services-entry — scheduled-services-entry-wy + edu-periodic-services-entry-wy — Present — Wyo. Stat. §§ 1-21-1205(a)(iii), 1-21-1202(d)
- pest-control-notice — edu-no-pest-control-notice-wy — Absent (schools only; local notice ordinances expressly preempted) — Wyo. Stat. §§ 35-7-375, 35-7-374(c)
- pet-fees — edu-pet-fees-wy — Present — Wyo. Stat. § 1-21-1207; § 1-21-1208(a); § 35-13-201(c)
- plain-language — edu-no-plain-language-rule-wy — Absent — Wyo. Stat. §§ 40-12-102, 40-12-105 (no drafting rules); § 1-21-1202(d)
- plain-language-consumer-statement — edu-no-plain-language-statement-wy — Absent (no readability or plain-language rule for leases; the only backstop is the Wyoming Consumer Protection Act's knowing-misrepresentation provision) — Wyo. Stat. §§ 40-12-102, 40-12-105(a)(viii)
- political-access — edu-no-political-access-rule-wy — Absent — Wyo. Stat. § 6-3-303(a); § 22-25-115
- pool-safety — edu-pool-safety-wy + pool-and-spa-use-wy — Present — Wyo. Stat. §§ 35-28-101 to 35-28-110
- portable-cooling-device — edu-no-portable-cooling-rule-wy + portable-cooling-device-wy — Absent — no Wyoming statute; Wyo. Stat. § 1-21-1203(a)(iii)-(iv) makes cooling opt-in
- portable-solar — edu-no-portable-solar-right-wy + portable-solar-consent-wy — Absent — no tenant right; Wyo. Stat. §§ 34-22-101 to 34-22-106, §§ 37-16-101 to 37-16-104
- portfolio-thresholds — edu-portfolio-thresholds-wy — Present — Wyo. Stat. § 40-26-110(a) (three single family houses) and § 40-26-110(b) (four families, owner-occupied); no unit-count threshold anywhere in Title 1
- possession-bond — edu-no-possession-bond-wy — Absent — Wyo. Stat. §§ 1-21-1012 to 1-21-1015 are the Wyoming substitute
- private-well-testing - edu-private-well-testing-wy + well-water-disclosure-wy - Present (no disclosure act; monthly sampling at 10+ connections) - Wyo. Stat. §§ 35-4-220(a)(ii), 35-4-221
- promises-to-repair — edu-promises-to-repair-wy + promised-repairs-wy — Absent (no written-promise rule; § 1-21-1203(a)(iv) and the WCPA supply the consequences) — Wyo. Stat. § 1-21-1203(a)(iv), §§ 40-12-105, 40-12-109
- prop65-rental-warning — edu-no-chemical-warning-rule-wy — Absent — no state statute; FEDERAL 42 U.S.C. § 4852d
- property-tax-rent-disclosure — edu-no-property-tax-rent-statement-wy — Absent — no Wyoming statute; § 39-13-107(J) is the only tax/renter link
- protected-class-inquiry-ban — edu-no-protected-class-inquiry-ban-wy — Absent — no Wyoming inquiry ban; § 40-26-104 reaches a question that states an intention
- purpose-limitation — edu-purpose-limitation-wy + purpose-limitation-wy — Present (statutory use duty at § 1-21-1204(a)(v); no lease-voiding statute) — Wyo. Stat. § 1-21-1204(a)(v)
- redemption — edu-no-tenant-redemption-wy — Absent — Wyo. Stat. § 1-21-1013; § 1-21-1014(b); § 1-21-1015
- religious-cultural-display — edu-no-religious-display-rule-wy — Absent — Wyo. Stat. § 40-26-103(b); §§ 1-21-1205(a)(i), 1-21-1208(a)
- rent-concession — edu-no-rent-concession-rule-wy + rent-concession-wy — Absent (no concession statute at all; clawback enforceable as a lease obligation via §§ 1-21-1204(a)(vii) and 1-21-1002(a)(vi)) — Wyo. Stat. §§ 1-21-1002, 1-21-1204(a)(vii)
- rent-control — edu-rent-control-wy — Absent — Wyo. Const. art. 13, § 1(b); no preemption statute
- rent-demand-bar — edu-no-rent-demand-bar-wy + rent-paid-without-deduction-wy — Absent — no bar; Wyo. Stat. § 1-21-1206(c) allows a retrospective clawback
- rent-escalation — TAG rent-escalation-la + new edu-rent-escalation-wy — Tagged — no Wyoming rent regulation; Wyo. Stat. § 1-21-1202(d), § 40-26-144(b)
- rent-installments — tagged rent-installments-or — Tagged — no Wyoming statute; Wyo. Stat. § 1-21-1002(a)(i), § 1-21-1003
- rent-into-court-counterclaim — edu-rent-into-court-counterclaim-wy — Present — Wyo. Stat. §§ 1-21-1007, 1-21-1014(b), 1-21-1015(a)-(b)
- rent-receipt-anti-waiver — edu-rent-receipt-anti-waiver-wy — Present — Wyo. Stat. §§ 34-2-128, 34-2-129; no Kansas-style split prohibited
- rent-receipts - edu-no-rent-receipt-duty-wy - Absent - no Wyoming receipt statute
- rent-reporting — edu-no-rent-reporting-rule-wy — Absent (no Wyoming rent-reporting statute; FCRA governs, WCPA polices the description, § 40-12-502 polices the data) — FEDERAL 15 U.S.C. § 1681s-2; Wyo. Stat. §§ 40-12-105, 40-12-502, 40-12-505
- rent-tax — edu-rent-tax-wy — Present — Wyo. Stat. §§ 39-15-101(a)(i) and (xiv), 39-15-103(a)(i)(G), 39-15-104(h)
- rental-inspection — edu-rental-inspection-wy + rental-inspection-access-wy — Absent — no Wyoming program; §§ 35-9-111, 35-1-105(a)(vii), 35-9-121 and local ordinance fill the gap
- renters-insurance-rules — renters-insurance-requirement-wy + edu-no-renters-insurance-rules-wy — Absent — no Wyoming regulation; cf. §§ 1-21-1202(d), 1-21-1208(a), 26-9-203
- repair-escrow-exemption-notice — edu-no-repair-escrow-exemption-wy — Absent (no escrow or repair-and-deduct remedy, so no exemption and no notice) — Wyo. Stat. §§ 1-21-1203, 1-21-1206
- required-fees — edu-required-fees-wy — Present — Wyo. Stat. § 1-21-1208(a); § 1-21-1207; § 1-1-115
- rights-responsibilities-guide — edu-no-rights-guide-wy — Absent — Wyo. Stat. § 40-26-114 (duty is on the agency, not the landlord)
- rules-regulations — edu-rules-regulations-wy + rules-regulations-wy — Present (rules are rental-agreement material by definition and evictable, but no reasonableness, uniformity or notice standard; mid-term changes need a reserved power) — Wyo. Stat. §§ 1-21-1201(a)(ii), 1-21-1204(a)(vii), 1-21-1002(a)(vi)
- sanitary-code-variance — edu-no-sanitary-code-variance-wy — Absent — Wyo. Stat. § 35-9-121(d); § 1-21-1202(a)
- seasonal-tenancy — edu-seasonal-tenancy-wy + seasonal-tenancy-wy — Present — Wyo. Stat. § 1-21-1201(a)(iv); § 1-21-1202(a)
- security-deposit-holding — edu-security-deposit-holding-wy + security-deposit-holding-wy — Present — Wyo. Stat. § 1-21-1208(a); § 33-28-122
- security-deposit-interest — edu-no-security-deposit-interest-wy — Absent — Wyo. Stat. § 1-21-1208(a) returns the deposit "without interest"
- security-deposit-standards — edu-security-deposit-standards-wy — Present — no standards on a self-managing owner, but Wyo. Stat. § 33-28-122 governs a broker-held deposit
- security-devices — edu-no-security-device-rule-wy + security-devices-wy — Absent — no mandate; § 1-21-1203(a)(i) is the only hook
- senior-housing-work-card - edu-no-senior-housing-work-card-wy - Absent - no WY work card; Wyo. Stat. §§ 40-26-112, 40-12-111 are the live senior-housing law
- service-animal-denial-penalty — edu-service-animal-denial-penalty-wy — Present (denying an assistance animal in a rental is a misdemeanor) — Wyo. Stat. § 35-13-203(a) with § 35-13-201(c)
- service-animal-misrepresentation — edu-service-animal-misrepresentation-wy — Present — Wyo. Stat. § 35-13-203(b), reaching housing via § 35-13-201(a)(iii) and (c)
- servicemember-rights — edu-servicemember-rights-wy — Present — Wyo. Stat. §§ 19-11-122, 19-11-123, 19-11-125 (no state lease-termination right; federal SCRA extended to the Guard)
- sex-offender-disclosure — edu-no-sex-offender-disclosure-wy — Absent — no disclosure duty; §§ 6-2-320(a)(iv)-(v) and 7-19-303 are the operative law
- sex-offender-occupancy — edu-sex-offender-occupancy-wy + sex-offender-occupancy-wy — Present (1,000-ft restrictions on the offender; no landlord duty) — Wyo. Stat. § 6-2-320(a)(iv)-(v); 2026 Wyo. Sess. Laws ch. 52 (SF0088)
- shoreline-access-disclosure — edu-no-shoreline-access-disclosure-wy — Absent — Wyo. Const. art. 8, § 1; Wyo. Stat. § 18-5-306
- showing-notice-waiver — tagged showing-notice-la — Tagged (nothing to waive: Wyoming sets no entry-notice period) — Wyo. Stat. § 1-21-1205(a)(iii); § 6-3-303
- shutdown-rent-protection — edu-no-shutdown-rent-protection-wy — Absent (no shutdown, moratorium or emergency rent statute of any kind; the adjacent live rule is the SCRA extension for state-activated National Guard) — Wyo. Stat. § 19-11-122
- single-family-zone-lease-limit — edu-no-single-family-zone-lease-limit-wy — Absent — Wyo. Stat. § 15-1-601(a); § 18-5-201(a)
- smart-access — edu-no-smart-access-law-wy + smart-access-system-wy — Absent — no smart-access statute; Wyo. Stat. § 40-12-502 applies to the data
- smoke-drift-waiver — edu-no-smoke-drift-rule-wy + smoke-drift-waiver-wy — Absent — no Wyoming smoking statute of any kind
- social-security-defense — edu-no-benefit-delay-defense-wy — Absent — no defence; Wyo. Stat. § 1-21-1007 runs the other way
- special-district-representation — edu-special-district-representation-wy — Absent — no lease recital required; Wyo. Stat. § 15-6-406(a) makes the assessment an owner's lien
- sprinkler-disclosure — edu-no-sprinkler-disclosure-wy — Absent — §§ 35-9-107(a)(iii)(F) and 35-9-108(s) are the only statutory sprinkler provisions
- statute-of-frauds-lease-term - edu-statute-of-frauds-lease-term-wy - Present - Wyo. Stat. § 1-23-105(a)(v) (1 year, validity); § 34-1-102 with § 34-1-120 (3 years, recording)
- statutory-caps — edu-statutory-caps-wy — Absent (no residential deposit, late-fee, application-fee or holdover cap; the real Wyoming numbers listed) — Wyo. Stat. §§ 1-21-1208, 1-16-102, 1-1-115, 1-21-1008(b)
- statutory-early-termination — edu-statutory-early-termination-wy — Present — Wyo. Stat. §§ 1-21-1303, 1-21-1206, 1-21-1203(d), 19-11-122
- steam-radiator-covers — edu-steam-radiator-covers-na-wy — Absent — no Wyoming statute; §§ 1-21-1202(a), 1-21-1203(a)(iii) and adopted model codes fill the gap
- stigmatized-property — edu-stigmatized-property-wy — Absent — no stigma statute and no safe harbour; §§ 33-28-311(a) and 33-28-303(c) govern a licensed manager
- stove-refrigerator — edu-no-stove-refrigerator-rule-wy — Absent (no supply duty; § 1-21-1203(a)(iv) makes any appliance duty opt-in) — Wyo. Stat. § 1-21-1203(a)(iii)-(iv)
- subsidized-inspection-refusal — edu-no-subsidized-inspection-refusal-wy — Absent — Wyo. Stat. § 40-26-103; § 1-21-1205(a)(iii)
- subsidy-habitability-proration — edu-no-subsidy-proration-rule-wy — Absent — Wyo. Stat. §§ 1-21-1203(d), 1-21-1206(c)
- subsidy-late-fee — edu-no-subsidy-late-fee-rule-wy — Absent (no subsidy late-fee rule and no residential late-fee statute at all; the constraint is federal and contractual via the HAP contract) — no Wyoming statute; cf. Wyo. Stat. §§ 1-21-1002(a)(i), 40-26-103
- substandard-property-receivership — edu-no-substandard-receivership-wy — Absent — Wyo. Stat. § 15-1-103(a)(xxvi); § 18-2-115; § 1-21-1206(c)
- tax-escalation — edu-tax-escalation-wy + tag tax-insurance-escalation-la — Absent (no WY statute) — Wyo. Stat. § 1-21-1208(a); § 39-11-105(a)(xliii)-(xlv)
- telecom-access — edu-no-telecom-access-rule-wy + telecom-access-wy — Absent — no Wyoming statute; FEDERAL 47 C.F.R. § 1.4000 is the only real constraint
- tenancy-at-will — edu-tenancy-at-will-wy + holdover-tenancy-by-sufferance-wy — Present — Wyo. Stat. §§ 34-2-128, 34-2-129
- tenant-bankruptcy — edu-tenant-bankruptcy-wy — Absent (no WY landlord-tenant bankruptcy rule) — but Wyo. Stat. § 1-20-109 opts Wyoming out of the federal exemptions
- tenant-confidential-information — edu-tenant-confidential-information-wy — Absent (no confidentiality rule) — Wyo. Stat. § 40-12-502 breach duty applies
- tenant-display-rights - edu-no-tenant-display-rights-wy + display-and-signage-rules-wy - Absent - no WY display right; Wyo. Stat. § 8-3-110 is protocol only
- tenant-employee-housing — edu-tenant-employee-housing-wy + tenant-employee-housing-wy — Absent (no employee-housing statute, and no employee carve-out from Article 12 either) — Wyo. Stat. §§ 1-21-1201(a)(ii)-(iv), 27-4-104(a)
- tenant-forward-proceedings — edu-no-tenant-forward-proceedings-wy + tag tenant-forward-proceedings-ca — Absent — no statute; Wyo. Stat. § 34-4-103(a)(iv)
- tenant-insurance-claims — edu-no-tenant-insurance-claims-wy — Absent — no Wyoming statute; lease governs, § 1-21-1211(b) is the clean route to tenant-caused damage
- tenant-portal — electronic-communications-and-portal-wy + edu-tenant-portal-wy — Present — Wyo. Stat. §§ 40-21-105(b)-(c), 40-21-107, 40-21-115(b)
- tenant-records — edu-tenant-records-wy — Present (no ledger duty; breach statute DOES reach landlords) — Wyo. Stat. §§ 40-12-501, 40-12-502
- tenant-right-to-organize — edu-no-tenant-organizing-right-wy — Absent — Wyo. Stat. § 1-21-1002(a); Wyo. Const. art. 1, § 21
- tenant-rights-statement — edu-no-tenant-rights-statement-wy — Absent — Wyo. Stat. §§ 1-21-1003, 1-21-1207
- term-change-notice — edu-no-term-change-notice-rule-wy + term-change-notice-wy — Absent (no rent-increase or term-change notice statute; §§ 34-2-128/129 bar implied renewal and § 1-21-1202(d) requires an explicit signed writing to modify) — Wyo. Stat. §§ 1-21-1202(d), 34-2-128, 34-2-129
- tpa-exemption-notice — edu-no-tpa-exemption-notice-wy — Absent — Wyo. Stat. § 1-21-1002(a)(i); §§ 34-2-128, 34-2-129
- tpa-notice — edu-no-tpa-notice-wy + sale-of-property-wy — Absent — no Wyoming tenant purchase right; Wyo. Stat. § 1-21-1209 governs what travels on a sale
- tpa-sunset — edu-no-tpa-sunset-wy — Absent — no Wyoming landlord-tenant or fair housing statute carries a sunset
- translation-duty — edu-no-translation-duty-wy — Absent — no duty; Wyo. Stat. § 8-6-101 makes English the official language
- trespass-notice — edu-trespass-notice-wy — Present — Wyo. Stat. § 6-3-303(a)-(c)
- truth-in-renting — edu-no-truth-in-renting-wy — Absent — § 1-21-1202(d) and § 40-12-105(a)(viii) fill the gap
- unauthorized-occupant-removal - edu-unauthorized-occupant-removal-wy + occupants-and-guests-wy - Present - Wyo. Stat. §§ 1-21-1401 to 1-21-1403 (2025 Wyo. Sess. Laws ch. 20 (SF0006)); § 6-5-309; § 6-3-201(b)(iv)
- unbundled-parking — edu-no-unbundled-parking-rule-wy + unbundled-parking-wy — Absent (no unbundling rule; § 31-5-111(a) gives the owner broad control) — Wyo. Stat. §§ 31-5-111, 31-5-501(b), 40-26-107(c)(ii)
- unconscionability — edu-unconscionability-wy — Absent — Wyo. Stat. § 40-14-508 (UCCC only); common law otherwise
- usufructuary-lessor — edu-usufructuary-lessor-wy + life-tenant-lessor-status-wy — Absent (no usufruct) — Wyo. Stat. § 34-1-111 is the Wyoming analog
- utility-allowance-cap — utility-cost-allocation-wy + edu-utility-allowance-cap-wy — Present — Wyo. Stat. § 37-1-101(a)(vi)(H)(VI) and (VIII)
- utility-apportionment — edu-utility-apportionment-wy + utility-apportionment-wy — Present (no landlord-tenant rule; the limit is the § 37-1-101(a)(vi)(H) public-utility exemption) — Wyo. Stat. § 37-1-101(a)(vi)(H)(VI), (VIII)
- utility-disconnection-notice-authorization — edu-no-utility-disconnection-notice-authorization-wy — Absent — Wyo. Stat. § 1-21-1202(a); § 1-21-1208(b); § 35-3-122
- utility-interruption-submeter — edu-no-submeter-interruption-rule-wy — Absent (no authority to interrupt; owner's habitability duties forbid it) — Wyo. Stat. §§ 1-21-1202(a), 1-21-1203(a)(iii); § 37-1-101(a)(vi)(H)(VI)
- utility-landlord-account — edu-utility-landlord-account-wy + utility-landlord-account-wy — Absent on tenant shutoff protections, pay-and-deduct and master metering; Present on the submetering exemption withdrawal — Wyo. Stat. § 37-1-101(a)(vi)(H)(VI), (VIII), (IX)
- utility-shutoff-statute — edu-utility-shutoff-wy — Absent — Wyo. Stat. § 1-21-1202(a); § 6-3-306; § 37-12-401(a)(iv)
- utility-submetering-disclosure — edu-utility-submetering-disclosure-wy + utility-responsibility-and-allocation-wy — Present — Wyo. Stat. § 37-1-101(a)(vi)(H)(VI), (VIII), (IX)
- utility-transfer — edu-no-utility-transfer-cutoff-wy + utility-transfer-wy — Absent — no Wyoming cutoff right; Wyo. Stat. § 37-12-401(a)(iv), § 37-12-402(c) are the exposure
- veterans-incentive — edu-no-veterans-incentive-wy — Absent — no incentive; Wyo. Stat. § 39-13-105 benefits the veteran only, § 19-11-122 imposes duties
- waiver-by-acceptance — edu-waiver-by-acceptance-wy — Present — Wyo. Stat. §§ 34-2-128, 34-2-129
- water-heater-temperature — edu-no-water-heater-temperature-rule-wy — Absent — § 1-21-1203(a)(i) and (a)(iii) are the only hooks
- waterbed - edu-no-waterbed-rule-wy + waterbed-and-liquid-filled-furniture-wy - Absent - no Wyoming statute; Wyo. Stat. §§ 1-21-1202(d), 1-21-1203(c), 1-21-1207, 1-21-1208(a) fill the gap
- window-guards — edu-no-window-guard-rule-wy — Absent (no statute; model codes via § 35-9-106(a)(i) and local enforcement under § 35-9-121 fill the gap) — Wyo. Stat. §§ 35-9-106(a)(i), 35-9-121(a)
- written-notice-required — edu-written-notice-required-wy — Present — Wyo. Stat. §§ 1-21-1003, 1-21-1203(b) and (d), 1-21-1207, 1-21-1208(a), 1-21-1210(a)

---

## §3 Batteries for every absence

Every ABSENT verdict is backed by a battery run against the corpus: the statute's own words and the everyday term, singular and plural, word boundaries on short words, both apostrophe forms, the statute's number style, proximity in **both** word orders, a nonsense **control** proving the search surface returns true empties, and a labelled **known positive** proving the pattern shape fires. Multi-word patterns were run against a whitespace-collapsed view of the corpus so a phrase survives a `pdftotext -layout` line break (see §1).


**167 topics, 2,352 recorded patterns.** Batteries for Present and Tagged topics are not repeated here — they are in each row's `notes` column in the delta.


**`abandonment-and-mitigation`** (Absent) — `mitigat` **3** *(Title 1 - all off-topic (hazardous materials, habeas bail))* · `mitigat` **0** *(Title 34 - term)* · `relet` **0** *(Title 1 - everyday term)* · `[Rr]e-?let` **0** *(Title 1 - hyphen and case variants)* · `re-?let\b` **0** *(Title 34 - word boundary)* · `re-?rent` **0** *(Title 1 - everyday term)* · `duty to mitigate` **0** *(Title 1 - phrase (fixed harness))* · `duty to mitigate` **0** *(corpus-wide (fixed harness))* · `mitigate damages` **2** *(corpus-wide (fixed harness) - 31-16-110(o) dealership lessor, 41-2-122 water commission; neither landlord-tenant. Negative implication: legislature knows the phrase)* · `mitigate his damages` **0** *(corpus-wide (fixed harness))* · `reasonable efforts to re-rent` **0** *(Title 1 (fixed harness))* · `fair rental value` **0** *(Title 1 (fixed harness))* · `make reasonable` **3** *(Title 1 (fixed harness) - one is 1-21-1206(c) repairs order (renter's remedy, not mitigation), two eminent domain)* · `reasonable effort` **4** *(Title 1 (fixed harness) - adoption, condemnation, wrongful death, crime-victim comp; none landlord-tenant)* · `minimize .{0,40}damages` **0** *(proximity order A)* · `damages .{0,40}minimize` **0** *(proximity order B)* · `mitigat\w*[^.]{0,120}(rent\|lease\|tenan\|landlord)` **8** *(corpus-wide proximity order A - all environmental/agricultural, inspected)* · `(rent\|lease\|tenan\|landlord)[^.]{0,120}mitigat` **5** *(corpus-wide proximity order B - all off-topic, inspected)* · `avoidable` **2** *(Title 1 - 'unavoidable casualty/accident' only)* · `1-21-1` **6** *(currency, session-laws/2025 - all SF0006 Article 14, already codified)* · `1-21-1` **0** *(currency, session-laws/2026)* · `landlord` **0** *(currency, session-laws/2025 and /2026 both 0)*
  
**control** `zxqvwomble` **0** *(nonsense control (fixed harness) - engine reports true empties)*  ·  **known positive** `residential rental unit` **23** *(known positive (fixed harness) - multi-word phrase survives line wraps)* · `Condominium Ownership Act` **1** *(known positive (fixed harness) - line-wrap regression check)* · `abandon` **19** *(known positive, Title 1 - abandonment is addressed, just not mitigation)*

**`accessory-dwelling-unit`** (Absent) — `accessory dwelling` **0** *(statute term)* · `accessory dwellings?` **0** *(plural variant)* · `accessory apartment` **0** *(alternate statutory term (CT style))* · `additional dwelling unit` **0** *(everyday term)* · `second dwelling unit` **0** *(everyday term)* · `detached dwelling unit` **0** *(everyday term)* · `granny flat` **0** *(colloquial term)* · `casita` **0** *(colloquial term)* · `guesthouse\|guest house` **0** *(colloquial term, both spellings)* · `\baccessory (structure\|building\|use\|unit)` **2** *(proximity, zoning-verb order; both hits are the Title 16 / 2026 HB0002 residential building permit timeline, a section heading context only - not ADU law)* · `single.family dwelling` **5** *(reverse-order proximity anchor; Title 39 tax definitions x3, Title 42 foster care, 2025 SF0069 tax - off point)*
  
**control** `zxqvwomble` **0** *(nonsense control - engine reports true empties)*  ·  **known positive** `\bzoning\b` **95** *(known positive - proves pattern shape matches)* · `residential rental unit` **23** *(known positive, multi-word phrase - proves the corrected harness matches across line wraps)*

**`actual-notice-method`** (Absent) — `actual notice (Title 1)` **5** *(term — all read; none landlord-tenant)* · `actual notice (whole corpus)` **32** *(term — none in Art. 12 or Art. 13)* · `actual knowledge (Title 1)` **1** *(everyday variant — not landlord-tenant)* · `text message (Title 1)` **0** *(everyday term)* · `electronic mail (Title 1)` **1** *(eminent domain only)* · `electronic record (Title 1)` **0** *(statute's own term)* · `reasonably calculated (Title 1)` **0** *(proximity/standard phrasing)* · `agreed notice (Title 1)` **0** *(word order A)* · `method of notice (Title 1)` **0** *(word order B)* · `notice is given (Title 1)` **1** *(verb form — not landlord-tenant)* · `1-21-120 (session-laws 2025+2026)` **0** *(currency check)* · `1-21-100 (session-laws 2025+2026)` **0** *(currency check)* · `40-21-1 (session-laws 2025+2026)` **6** *(currency check — all cross-references in 2025 SF0025, no amendment)*
  
**control** `zxqvwomble` **0** *(nonsense control — engine reports true empties)*  ·  **known positive** `certified mail (Title 1)` **12** *(known positive — service-method language does match in this title)*

**`adverse-proceeding-notice`** (Absent) — `attornment` **0** *(term - no Wyoming attornment statute)* · `\battorn(ment\|ments\|ed\|s)\b` **0** *(term, word-boundary variant (bare 'attorn' = 2763 false hits inside 'attorney'))* · `foreclos.{0,200}tenant` **1** *(proximity, order A - sole hit is § 29-2-105 heading/text on tenant improvements, excluded)* · `tenant.{0,200}foreclos` **0** *(proximity, order B)* · `foreclos.{0,250}occupan` **0** *(proximity, everyday term, order A)* · `occupan.{0,250}foreclos` **0** *(proximity, order B)* · `notice of (sale\|foreclosure).{0,120}occupant` **0** *(statute's likely verbs)* · `bona fide tenan` **0** *(federal-style term absent from state code)* · `Protecting Tenants` **0** *(no state adoption of PTFA language)* · `disclos.{0,150}foreclos` **0** *(landlord-disclosure angle, order A)* · `foreclos.{0,150}disclos` **1** *(order B - Title 39 tax provision, not on point)* · `notify the (landlord\|lessor)` **0** *(tenant-duty angle)* · `shall (notify\|inform) the owner.{0,120}(claim\|proceeding\|suit\|action)` **0** *(tenant-duty angle, statute's likely verbs)* · `34-4-10` **0** *(currency - session-laws/2025 and /2026 both 0)*
  
**control** `zxqvwomble` **0** *(nonsense control - engine reports true empties)*  ·  **known positive** `person in possession` **3** *(known positive (Title 34) - located the controlling text)* · `foreclos` **288** *(known positive, corpus-wide)* · `\btenant\b` **36** *(known positive, Title 01)*

**`alarm-tampering-fee`** (Absent) — `smoke detector\|smoke alarm\|carbon monoxide` **1** *(term - sole hit is § 6-3-1003 animal euthanasia gas chamber, not an alarm)* · `\bsmoke\b` **14** *(everyday term, word-bounded - none about dwelling alarms)* · `detector` **6** *(term - Title 30 oil/gas and § 35-11-1430 tank leak detectors only)* · `fire alarm` **7** *(term - state buildings, schools, plan review; no residential rental rule)* · `tamper` **41** *(statute verb - Title 6 hits are the corrections-officer contamination offense only)* · `fire extinguisher` **2** *(proximate term - Titles 30 and 41, non-residential)* · `building code` **20** *(gap-filler - IFC/IBC adopted by rule under § 35-9-106(a)(i))* · `\bsmoke\b (session-laws/2025 + /2026)` **1** *(currency - 2026 SF0046 'smoke shop' tobacco definition only)*
  
**control** `zxqvwomble` **0** *(nonsense control - engine reports true empties)*  ·  **known positive** `rental agreement` **37** *(known positive - pattern shape matches live text)*

**`animal-care-access`** (Absent) — `\banimals?\b (title01)` **0** *(term)* · `\bpets?\b (title01)` **0** *(everyday term)* · `companion animal (title01)` **0** *(statutory term)* · `household pet (title01)` **0** *(statutory term)* · `animal left` **0** *(term)* · `animal in distress` **0** *(term)* · `enter.{0,120}animal` **11** *(proximity order 1 - all livestock/brands/veterinary, none landlord-tenant)* · `animal.{0,120}enter the` **0** *(proximity order 2)* · `abandoned animal` **1** *(§ 33-30-215, veterinary custody only)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `refuse entry to (title01)` **1**

**`application-fees`** (Absent) — `application fee` **79** *(term — all licensing/permit fees; Title 1 hit is structured settlements, none residential)* · `screening fee` **0** *(everyday term)* · `rental application` **0** *(statute's own likely term)* · `prospective tenant` **0** *(term)* · `prospective renter` **0** *(term, Wyoming uses 'renter')* · `holding fee` **0** *(term)* · `holding deposit` **1** *(term — Title 26 insurance only)* · `non-refundable` **0** *(hyphen variant)* · `nonrefundable` **26** *(variant — Title 1 hits are Wyo. Stat. § 1-21-1207 deposit notice, not application fees)* · `tenant screening` **2** *(term — both Wyo. Stat. § 40-12-505(d) security-freeze exemptions)* · `application.{0,80}(fee\|charge).{0,120}(rent\|tenant\|lease)` **13** *(proximity, order A — none residential)* · `(rent\|tenant\|lease).{0,120}application.{0,80}(fee\|charge)` **7** *(proximity, order B — none residential)* · `fee.{0,60}(screen\|background check)` **4** *(proximity with likely verb — professional licensing only)* · `credit (report\|check).{0,100}(tenant\|renter\|lease)` **0** *(proximity)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `residential rental unit` **23** *(known positive — multi-word phrase matches across line wrap)*

**`asbestos-hazards`** (Absent) — `asbestos` **21** *(statutory term - all 21 inside the successor-liability act, Title 1)* · `[Aa]sbestos` **21** *(case-insensitive, same 21)* · `asbestos-containing` **1** *(same act)* · `friable` **0** *(everyday/regulatory term)* · `ACM` **0** *(industry abbreviation)* · `asbestos abatement` **0** *(statute's likely term)* · `abatement contractor` **0** *(licensing term)* · `certified asbestos` **0** *(licensing term)* · `one percent asbestos` **0** *(threshold phrasing used by other states)* · `asbestos disclosure` **0** *(disclosure term)* · `disclose asbestos` **0** *(disclosure term, verb form)* · `asbestos.{0,80}tenant` **0** *(proximity, order 1)* · `tenant.{0,80}asbestos` **0** *(proximity, order 2)* · `asbestos.{0,80}landlord` **0** *(proximity, order 1)* · `landlord.{0,80}asbestos` **0** *(proximity, order 2)* · `asbestos.{0,120}dwelling` **0** *(proximity, subject not role)* · `hazardous material.{0,60}disclos` **0** *(broader disclosure family)* · `encapsulat` **1** *(Title 35 drug scheduling (gelatin capsule), not asbestos)* · `indoor air` **0** *(no clean-indoor-air act)* · `lead-based paint` **0** *(sibling hazard - also purely federal in WY)* · `[Ll]ead.based paint` **0** *(same, hyphen-tolerant)* · `asbestos (session-laws/2025 + /2026)` **0** *(currency check, 278 enrolled acts)*
  
**control** `zxqvwomble` **0** *(nonsense control - engine reports true empties)*  ·  **known positive** `Successor Corporation Asbestos` **1** *(known positive, multi-word, survives the pdftotext line wrap)* · `environmental quality` **146** *(known positive, multi-word, 23 documents)* · `air quality` **15** *(known positive, multi-word)* · `residential rental unit` **23** *(known positive, multi-word landlord-tenant term)*

**`association-obligations-disclosure`** (Absent) — `34-20-10[0-9]` **5** *(term — 4 in Title 34, confirming the Act is only 4 sections; 1 cross-ref in Title 18)* · `bylaws (scoped title34)` **0** *(term — 0 in Title 34, though 718 corpus-wide, so the word is findable)* · `resale certificate` **0** *(term — statute's own words in other states' acts)* · `public offering statement` **0** *(term)* · `planned community` **0** *(everyday term)* · `common interest community` **0** *(everyday term)* · `protective covenants` **0** *(everyday term)* · `restrictive covenants` **5** *(term — present but all subdivision open-space/mineral context, none lease-facing)* · `copy of the declaration` **0** *(likely statutory phrase)* · `lease.{0,120}declaration (title34)` **0** *(proximity, order 1)* · `declaration.{0,120}lease (title34)` **0** *(proximity, order 2)* · `tenant.{0,160}association (title34)` **0** *(proximity, order 1)* · `association.{0,160}tenant (title34)` **0** *(proximity, order 2)* · `lessee.{0,120}declaration (title34)` **0** *(proximity, statute's role word)* · `furnish.{0,80}declaration (title34)` **0** *(proximity with the statute's likely verb)* · `unit owners' association\|homeowners association\|homeowners' association\|owners association` **2** *(term — both in Title 18 subdivision permits, pinned to § 18-5-306(a)(xii) and § 18-5-316(a)(x))*
  
**control** `zxqvwomble` **0** *(nonsense control — engine reports true empties)*  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — phrase matching survives PDF line wraps)*

**`balcony-inspection`** (Absent) — `balcon` **0** *(root term, corpus-wide)* · `balconies` **0** *(plural)* · `exterior elevated` **0** *(CA statutory term)* · `elevated element` **0** *(CA statutory term)* · `porch` **0** *(everyday term)* · `exterior stair` **0** *(everyday term)* · `structural observation` **0** *(code term)* · `inspect.{0,40}balcon` **0** *(proximity, order 1)* · `balcon.{0,40}inspect` **0** *(proximity, order 2)* · `\bdecks\b` **1** *(Title 36 only, unrelated)* · `periodic inspection` **2** *(Titles 35/41, DEQ water and unrelated)* · `guard rail` **3** *(all Title 35 fire-escape stairs)* · `stairway` **13** *(no inspection schedule)* · `cite 35-9-501 session-laws/2025 and /2026` **0** *(currency, anchored)* · `cite 35-9-504 session-laws/2026` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `apartment house` **3** *(multi-word known positive)*

**`bed-bug-cooperation`** (Absent) — `bed bugs?` **0** *(everyday term, singular and plural)* · `bedbugs?` **0** *(closed-compound variant)* · `\bvermin\b` **0** *(older statutory term, word-bounded)* · `cockroach` **0** *(species term)* · `exterminat` **2** *(stem; both Title 11 agriculture, none housing)* · `infestation` **11** *(10 Title 11 agriculture, 1 Title 26 insurance)* · `infested` **12** *(all Title 11)* · `\bpests?\b` **124** *(word-bounded; 85 Title 11, 10 Title 35 all inside Pesticide Act purpose/definitions)* · `rodents?` **15** *(9 Title 11, 6 Title 35 FIFRA cross-refs and bait-station exemption)* · `pest control` **28** *(two-word proximity; weed-and-pest districts, none housing)* · `cite 1-21-1203 session-laws` **0** *(currency, anchored)* · `cite 35-7-375 session-laws` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0** *(nonsense control — engine reports true empties)*  ·  **known positive** `apartment house` **3** *(multi-word known positive — phrase shape matches across line wrap)*

**`certificate-of-occupancy-disclosure`** (Absent) — `certificate of occupancy` **7** *(statute term; all seven reviewed in context, none a tenant disclosure)* · `certificates of occupancy` **0** *(plural)* · `occupancy certificate` **0** *(reverse word order)* · `occupancy permit` **0** *(everyday term)* · `disclos\w+[^.]{0,120}certificate of occupancy` **0** *(proximity, order 1)* · `certificate of occupancy[^.]{0,120}disclos\w+` **0** *(proximity, order 2)* · `renter[^.]{0,100}certificate of occupancy` **0** *(proximity with the landlord-tenant act's own word 'renter')*
  
**control** `zxqvwomble` **0**  ·  **known positive** `\bdisclos` **1260** · `fit for human occupancy` **1** *(known positive, Title 1 § 1-21-1203(a)(i))*

**`children-occupancy`** (Absent) — `children (Title 1)` **7** *(term — none landlord-tenant)* · `\bchild\b (Title 1)` **136** *(singular with word boundary — none in Art. 12)* · `minor child (Title 1)` **4** *(variant — none landlord-tenant)* · `familial status (Title 1)` **0** *(statute's own term, wrong title)* · `fair housing (Title 1)` **0** *(term)* · `discriminat (Title 1)` **0** *(stem)* · `occupancy (Title 1)` **6** *(term — all read, none sets a limit)* · `occupancy limit (Title 1)` **0** *(word order A)* · `occupancy standard (Title 1)` **0** *(word order B)* · `persons per bedroom (Title 1)` **0** *(everyday term)* · `per bedroom (Title 1)` **0** *(everyday term)* · `number of occupants (Title 1)` **1** *(= 1-21-1204(a)(v) itself)* · `40-26-1 (session-laws 2025+2026)` **0** *(currency check)* · `1-21-120 (session-laws 2025+2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `familial status (whole corpus)` **15** *(known positive — all Title 40 ch. 26)*

**`cold-weather-vacate-notice`** (Absent) — `cold weather` **0** *(everyday term)* · `winteriz` **0** *(everyday term)* · `frozen pipe` **0** *(everyday term)* · `\bpipes?\b.{0,200}(freez\|frozen\|burst)` **0** *(proximity, order A, singular and plural)* · `(freez\|frozen\|burst).{0,200}\bpipes?\b` **0** *(proximity, order B)* · `freez` **59** *(stem - all in Titles 11/17/27/40, none landlord-tenant)* · `extended absence` **0** *(statute's likely term (URLTA))* · `prolonged absence` **0** *(variant term)* · `\babsence\b.{0,150}(notify\|notice)` **13** *(proximity, order A - none in a tenancy context)* · `(notify\|notice).{0,150}\babsence\b` **13** *(proximity, order B - sole Title 1 hit is criminal evidence return)* · `minimum temperature` **0** *(heat-standard angle)* · `unoccupied` **6** *(everyday term - Titles 30/31/35/40 only)* · `heat.{0,150}vacat` **1** *(proximity order A - Title 15, not on point)* · `vacat.{0,150}heat` **1** *(proximity order B - Title 31, not on point)* · `1-21-12` **0** *(currency - 0 in session-laws/2025 and /2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `\babsence\b` **304** *(known positive, corpus-wide)* · `renter.s duties` **1** *(known positive - located § 1-21-1204)*

**`condemned-premises-rent-bar`** (Absent) — `unfit for human habitation` **0** *(statute's own likely words)* · `unfit for occupancy` **0** *(variant)* · `unsafe building` **0** *(everyday term)* · `order to vacate` **0** *(term)* · `vacate order` **0** *(term, reversed)* · `dilapidated` **0** *(term)* · `placarded` **6** *(term — Title 31 motor vehicles only)* · `\braze\b` **1** *(short word, boundaries — Title 4, unrelated)* · `unsafe structure` **1** *(term — Title 41 water)* · `dangerous building` **1** *(term — Wyo. Stat. § 15-1-103(a)(xxvi) municipal delegation, no rent rule)* · `uninhabitable` **12** *(statute's own word — all Wyo. Stat. §§ 35-9-153(h), 35-9-156(d), 1-40-208(a))* · `condemn` **293** *(root term — Title 1 hits are the Eminent Domain Act; no building-condemnation rent rule)* · `rent.{0,200}condemn` **2** *(proximity, order A — eminent domain)* · `condemn.{0,200}\brent\b` **1** *(proximity, order B — Title 41)* · `(collect\|accept\|demand).{0,60}rent.{0,120}(condemn\|vacate\|unfit\|uninhabit)` **0** *(proximity with statute's likely verbs)* · `shall not (collect\|accept\|demand).{0,80}rent` **1** *(prohibition shape — Title 11 agriculture)* · `abate.{0,120}rent` **0** *(proximity, order A)* · `rent.{0,120}abate` **0** *(proximity, order B)* · `treble` **4** *(penalty shape — none in Title 1)* · `three times the amount` **0** *(penalty shape, spelled-out variant)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `residential rental unit` **23**

**`confirmed-absences-misc`** (Absent) — `smoke detector` **0** *(everyday + statutory term)* · `smoke alarm` **0** *(alternate statutory term)* · `carbon monoxide` **1** *(Title 6 animal euthanasia, not alarms)* · `detector` **6** *(Titles 30/35, mine gas detectors)* · `\bsmoke\b` **14** *(no dwelling alarm mandate)* · `fire alarm` **7** *(no residential mandate)* · `convenience fee` **0** *(everyday term)* · `checkout fee` **0** *(statutory term elsewhere)* · `imposes? a surcharge` **0** *(proximity/verb form)* · `surcharge` **86** *(0 in Title 40; none a merchant rule)* · `payment card` **27** *(Titles 6/9 only, card fraud)* · `rental application` **0** *(subject term)* · `application for.{0,20}rental` **0** *(reverse word order)* · `false statement.{0,60}applicat` **16** *(none landlord-tenant)* · `innkeeper` **0** *(alternate role term)* · `theft of services` **2** *(§ 1-1-116, licensed service providers only)* · `cite 1-1-115 session-laws/2025 and /2026` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `rental agreement` **37** *(multi-word known positive)*

**`conversion-notice`** (Absent) — `conver(t\|sion\|ted\|ting).{0,60}condominium` **0** *(proximity, order A)* · `condominium.{0,60}conver` **0** *(proximity, REVERSE order)* · `right of first refusal` **2** *(read — Title 31 dealer, Title 34 transfer fee; not tenant)* · `first refusal` **3** *(looser form)* · `notice to vacate.{0,80}sale` **0** *(proximity, order A)* · `sale.{0,80}notice to vacate` **0** *(proximity, REVERSE order)* · `ninety \(90\) days.{0,120}tenant` **1** *(read — Relocation Assistance Act, agency duty)* · `tenant.{0,120}ninety \(90\) days` **0** *(REVERSE order)* · `34-20-1[0-9]+\.` **4** *(enumeration — whole Act is 4 sections)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — short title)* · `cooperative housing` **2** *(multi-word known positive; neither a conversion rule)*

**`criminal-activity`** (Absent) — `crime.free` **0** *(term — everyday name for the addendum)* · `expedited evict` **0** *(term — the fast-track other states name)* · `criminal activity` **39** *(term — ZERO in Title 1; all hits read and excluded (Titles 6/7/9/11/13/19/35 and 2026 HB0043 money laundering))* · `unlawful activit` **1** *(term — Title 4 only, not leasing)* · `immediate.{0,60}termination of the rental` **0** *(term — Wyoming says 'rental agreement', so the phrase is tested in Wyoming's own style)* · `evict.{0,120}drug` **0** *(proximity, order 1)* · `drug.{0,120}evict` **1** *(proximity, REVERSE order — Title 11 § 11-25-205(d), pari-mutuel event ejection; excluded)* · `reasonable effort.{0,80}eject` **0** *(proximity, order 1 — the prostitution-ejection duty other states impose)* · `eject.{0,80}reasonable effort` **0** *(proximity, REVERSE order)* · `prostitution` **31** *(term — none imposes a landlord ejection duty; Title 15 hit is § 15-1-103(a)(xvi)(B) municipal power, read)* · `disparate` **0** *(term — Wyoming's Fair Housing Act codifies no effects test)* · `illegal manufacture or distribution` **1** *(term — the single corpus-wide occurrence is § 40-26-103(c) itself)* · `cite 1-21-1002 / 1-21-1204 / 1-21-1205 / 40-26-103, session-laws 2025 and 2026` **0** *(currency, anchored — 0 anchored and 0 unanchored for each)*
  
**control** `zxqvwomble` **0** *(NONSENSE CONTROL — engine reports true empties)*  ·  **known positive** `forcible entry and detainer` **7** *(KNOWN POSITIVE, multi-word — 5 in Title 1, 2 in Title 5)* · `notice to quit` **1** *(KNOWN POSITIVE, multi-word — § 1-21-1003)* · `discriminatory housing practice` **36** *(KNOWN POSITIVE, multi-word — all 36 in Title 40, proving phrases survive the line wrap)*

**`defective-drywall-disclosure`** (Absent) — `drywall` **0** *(everyday and statutory term)* · `wallboard` **0** *(alternate term)* · `defective drywall` **0** *(statutory phrase used by VA/FL)* · `Chinese` **0** *(colloquial term)* · `corrosive` **1** *(Title 35, unrelated to dwellings)* · `gypsum` **2** *(material term; Title 30 mining, Title 35)* · `sulfur` **19** *(off-gassing term; all mineral/air-quality contexts)* · `hydrogen sulfide` **4** *(off-gassing term; oil and gas / air quality)* · `property condition disclosure` **0** *(would-be umbrella statute)* · `residential real property disclosure` **0** *(would-be umbrella statute)* · `latent defect` **0** *(common-law term)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `residential rental unit` **23** *(known positive, multi-word)* · `\bdisclos` **1260**

**`disaster-displaced-guests`** (Absent) — `evacuee` **11** *(present but all Title 19 interstate emergency management compact)* · `displaced` **62** *(present but 38 are Title 16 ch. 7 public-acquisition relocation assistance; none landlord-tenant)* · `emergency shelter` **2** *(Titles 9 and 14, child welfare only)* · `sheltering` **1** *(Title 19 only)* · `disaster.{0,80}guest` **0** *(proximity, order 1)* · `guest.{0,80}disaster` **0** *(proximity, order 2)* · `disaster.{0,120}lease` **0** *(proximity, order 1)* · `lease.{0,120}disaster` **0** *(proximity, order 2)* · `disaster.{0,120}tenan` **0** *(proximity, order 1, stem)* · `tenan.{0,120}disaster` **0** *(proximity, order 2, stem)* · `rent.{0,60}state of emergency` **0** *(proximity, order 1)* · `state of emergency.{0,60}rent` **0** *(proximity, order 2)* · `disaster.{0,60}displaced` **0** *(proximity, order 1)* · `displaced by.{0,60}disaster` **0** *(proximity, order 2)* · `temporary occupant` **0** *(statute-style term)* · `temporarily displaced` **0** *(statute-style term)* · `emergency housing` **0** *(everyday term)* · `state of emergency.{0,100}hous` **0** *(proximity to housing stem)* · `natural disaster.{0,100}rent` **0** *(proximity)* · `wildfire.{0,100}rent` **0** *(proximity, WY-specific hazard)* · `price gouging` **0** *(no emergency price law)* · `host.{0,40}displaced` **0** *(proximity, host-liability shield)* · `Good Samaritan.{0,80}hous` **0** *(host-liability shield)* · `\bguest\b` **0** *(Title 1, singular, word boundary)* · `\bguests\b` **2** *(Title 1, plural, word boundary - §§ 1-21-1203(c), 1-21-1204(a)(viii) only)* · `additional occupant` **0** *(Title 1)* · `occupancy limit` **0** *(Title 1)* · `1-21-1204 (session-laws/2025 + /2026)` **0** *(currency check)* · `1-21-1402 (session-laws/2025 + /2026)` **1** *(currency check - 2025 SF0006, the act that created Article 14, already in the title text)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `natural disaster` **43** *(known positive, multi-word)* · `state of emergency` **6** *(known positive, multi-word)* · `take in` **73** *(known positive, multi-word)* · `residential rental unit` **23** *(known positive, multi-word)*

**`disaster-duties`** (Absent) — `natural disaster` **43** *(term — present but enumerated by title; none landlord-tenant)* · `declared disaster` **0** *(term)* · `disaster emergency` **0** *(term)* · `untenantable` **0** *(statute's own word in other states)* · `destroyed by fire` **0** *(everyday term)* · `uninhabitable` **12** *(term — Titles 1 and 35 only; led to § 35-9-156(d))* · `rent shall abate` **0** *(statutory phrase, both number/person forms checked)* · `abatement of rent` **0** *(statutory phrase)* · `abate the rent` **0** *(verb form)* · `rent abatement` **0** *(everyday term)* · `apportionment of rent` **0** *(statutory phrase)* · `rent is suspended` **0** *(variant)* · `terminate the lease` **0** *(likely statutory verb phrase)* · `lease shall terminate` **0** *(variant)* · `tenancy shall terminate` **0** *(variant)* · `lease is terminated` **0** *(variant)* · `surrender the premises` **0** *(everyday term)* · `price gouging` **0** *(term)* · `gouging` **0** *(single-word fallback)* · `disaster.{0,200}(tenant\|lease\|rent\|landlord)` **0** *(proximity, order 1)* · `(tenant\|lease\|rent\|landlord).{0,200}disaster` **1** *(proximity, order 2 — excluded on reading, Title 33 nurse licensure)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — phrase matching survives PDF line wraps)*

**`double-letting`** (Absent) — `double let` **0** *(term)* · `double-let` **0** *(hyphenated variant)* · `doubly let` **0** *(variant)* · `let to (two\|more than one)` **0** *(statute's likely verb)* · `same (room\|premises\|unit)[^.]{0,60}(two\|more than one)` **0** *(proximity, order A)* · `two or more (persons\|tenants)[^.]{0,60}same room` **0** *(proximity, order B)* · `part of a room` **0** *(operative field-code phrase)* · `whole room` **0** *(operative field-code phrase)* · `entitled to the whole` **0** *(operative field-code phrase)* · `more than one family` **0** *(operative field-code phrase)* · `rent abatement` **0** *(remedy term)* · `abatement of rent` **0** *(remedy term, reversed)* · `abate[^.]{0,30}rent` **0** *(verb form)* · `roomer` **0** *(everyday term)* · `relieved of all obligation` **1** *(excluded - Title 15, municipal, not a letting rule)* · `relieved[^.]{0,40}rent` **1** *(excluded - Title 3, unrelated)* · `rooming house` **2** *(excluded - definitional only (T18 subdivision, T35 boarding home))* · `lodging house` **3** *(excluded - T33 licensing x2, T35 health x1)* · `overlapping` **7** *(none about lettings)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `tenancy by sufferance` **2** *(KNOWN POSITIVE, multi-word)* · `landlord and tenant` **2** *(KNOWN POSITIVE, multi-word)*

**`drug-free-housing-addendum`** (Absent) — `drug.free` **3** *(Titles 27/35 and 2026 SF0009, none a lease addendum)* · `drug free` **2** *(spaced variant)* · `crime.free` **0** *(everyday term)* · `addendum` **5** *(none landlord-tenant)* · `controlled substance.{0,80}premises` **2** *(proximity order 1, neither landlord-tenant)* · `premises.{0,80}controlled substance` **0** *(proximity order 2)* · `nuisance.{0,60}controlled substance` **0** *(proximity; § 6-6-201 words it in the opposite order)* · `clandestine` **38** *(Titles 1/6/35, the Emergency Response Act)* · `methamphetamine` **24** *(Titles 6/9/35)* · `cite 6-6-201 / 6-6-204 / 6-6-207 / 35-9-158 / 1-21-1002, session-laws 2025+2026` **0** *(currency, anchored)* · `cite 35-9-156 session-laws/2026` **2** *(currency, anchored: 2026 ch. 23 SF0071, office-to-department rename only)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `rental agreement` **37** *(multi-word known positive)*

**`dv-confidentiality`** (Absent) — `address confidentiality` **0** *(program term)* · `substitute address` **0** *(program term)* · `shall not disclose.{0,160}(tenant\|victim)` **0** *(proximity order A, statute's likely verb)* · `(tenant\|victim).{0,160}shall not disclose` **0** *(proximity order B)* · `confidential.{0,120}(domestic abuse\|domestic violence\|sexual violence)` **7** *(proximity order A; 4 all in § 35-21-112)* · `(domestic abuse\|domestic violence\|sexual violence).{0,120}confidential` **7** *(proximity order B; identical set)* · `program participant` **17** *(ACP-style scheme; none DV address)* · `cite 1-21-1303 session-laws` **0** *(currency, anchored)* · `cite 35-21-112 session-laws` **1** *(currency, anchored; 2025 HB0137 conforming only)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `domestic abuse` **>0** *(multi-word known positive, matches across line wrap)*

**`dv-deposit-timing`** (Absent) — `(domestic abuse\|sexual violence\|domestic violence).{0,300}deposit` **0** *(proximity, order 1, statute's own words)* · `deposit.{0,300}(domestic abuse\|sexual violence\|domestic violence)` **0** *(proximity, order 2)* · `vacate.{0,200}deposit` **4** *(likely-verb proximity; all four inspected and excluded as non-DV)* · `domestic violence` **48** *(term is well represented in the corpus)* · `\bdeposit\b` **1018** *(word-bounded term)* · `1-21-1302 / 1-21-1303 / 1-21-1208 (anchored cite, session-laws/2025 and /2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `held as a deposit` **2** *(multi-word known positive (§ 1-21-1208(a) and (b)))* · `Safe Homes` **2** *(multi-word known positive)*

**`dv-lockchange`** (Absent) — `\block\b` **22** *(word-boundary term; 0 in Title 1)* · `locks\b` **29** *(plural; exactly 1 in Title 1 = § 1-21-1403(a), read)* · `change.{0,60}lock` **3** *(proximity, order A — all read, none a DV duty)* · `lock.{0,60}chang` **2** *(proximity, REVERSE order)* · `rekey\|re-key` **0** *(everyday term, both spellings)* · `exclude.{0,80}perpetrator` **0** *(proximity)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `perpetrator` **29** *(known positive — the word exists, the proximity does not)* · `order not to affect title to property` **2** *(multi-word known positive)*

**`emergency-contact`** (Absent) — `emergency contact (Title 1)` **0** *(everyday term)* · `emergency (Title 1)` **27** *(term — none in Art. 12 or 13)* · `emergency.{0,200}(renter\|rental unit\|lessor) (Title 1)` **0** *(proximity, word order A)* · `(renter\|rental unit\|lessor).{0,200}emergency (Title 1)` **0** *(proximity, word order B)* · `contact information (Title 1)` **1** *(not landlord-tenant)* · `name and address of (Title 1)` **0** *(disclosure phrasing)* · `telephone number (Title 1)` **7** *(none in Art. 12)* · `twenty-four (24) hour (Title 1)` **1** *(statute's number style — DV services, not landlord-tenant)* · `after hours (Title 1)` **0** *(everyday term)* · `authorized to manage (Title 1)` **0** *(word order A)* · `person authorized (Title 1)` **4** *(word order B — none landlord-tenant)* · `resident manager (Title 1)` **4** *(one is 1-21-1201(a)(i))* · `designated agent (Title 1)` **3** *(all Art. 12, no disclosure duty)* · `1-21-120 / 1-21-100 (session-laws 2025+2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `(renter\|rental unit).{0,200}deposit (Title 1)` **10** *(known positive — proximity shape matches)*

**`employee-screening`** (Absent) — `employee screening` **0** *(exact term - absent corpus-wide)* · `screening.*employee\|employee.*screening` **19** *(proximity, both word orders - none about rental staff)* · `background check` **97** *(everyday term - occupational licensing, schools, child care; no rental mandate)* · `criminal background` **34** *(variant - same, no rental mandate)* · `criminal history record` **185** *(statute term - Titles 7 and 33; § 33-28-106(a) is the only route touching property managers)* · `fingerprint` **141** *(statute term - no rental-housing provision)* · `apartment` **11** *(subject term - only rental-staff use is § 33-28-103(a)(vi))* · `property manage` **3** *(subject term - all Title 33)* · `consumer report` **66** *(FCRA-adjacent - 51 in Title 40, none a rental-employee duty)* · `33-28 (session-laws/2025 + /2026)` **4** *(currency - 2026 SF0105 amends only § 33-28-102(b)(xiii) and § 33-28-306)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `resident manager` **19** *(known positive - 13 in Title 33)*

**`energy-data-release`** (Absent) — `energy usage` **0** *(everyday term)* · `usage data` **0** *(term)* · `energy use data` **0** *(statutory term)* · `consumption data` **0** *(term)* · `energy (data\|record)` **0** *(term)* · `smart meter` **0** *(term)* · `advanced metering` **0** *(term)* · `release.{0,100}usage` **0** *(proximity order 1)* · `usage.{0,100}release` **0** *(proximity order 2)* · `tenant.{0,120}(utility\|energy) (data\|record)` **0** *(proximity)* · `benchmark` **56** *(all off point - state facilities, schools, telecom price benchmark)* · `energy performance` **19** *(all Title 9 art. 12, public facilities)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(known positive - engine matches multi-word phrases across line wraps)*

**`environmental-event-termination`** (Absent) — `fire or other casualty` **0** *(statute's own likely words)* · `destroyed by fire` **0** *(term)* · `impossible or unlawful` **0** *(the Colorado formulation)* · `force majeure` **0** *(everyday term)* · `frustration of purpose` **0** *(doctrine term)* · `casualty` **128** *(root term — 105 Title 26 insurance; Title 1 hit is vacating a judgment)* · `act of God` **8** *(term — Title 1 hits are Wyo. Stat. § 1-1-140, utility liability)* · `natural disaster` **43** *(term — none in Title 1 or 34)* · `wildfire` **115** *(term — utility and fire management only)* · `quarantine` **113** *(term — livestock and public health only)* · `public health (event\|emergency)` **29** *(term — Title 1 hits are the COVID-19 shield at § 1-1-141)* · `shall be excused` **4** *(excuse shape — no rent provision)* · `flood.{0,100}terminat` **0** *(proximity, order A)* · `terminat.{0,100}(fire\|flood\|casualty)` **11** *(proximity, order B — none a lease)* · `casualty.{0,150}(lease\|tenan\|rent)` **3** *(proximity, order A — insurance)* · `(lease\|tenan\|rent).{0,150}casualty` **3** *(proximity, order B — insurance and municipal)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `residential rental unit` **23**

**`ev-charging-end-of-tenancy`** (Absent) — `charging.{0,80}vehicle` **9** *(present; Titles 37, 39 + HB0145)* · `vehicle.{0,80}charging` **5** *(present, reverse order; Titles 31, 39 + HB0145)* · `charging.{0,100}tenant` **0** *(proximity, order 1)* · `tenant.{0,100}charging` **0** *(proximity, order 2)* · `charging.{0,100}lease` **1** *(proximity, order 1; Title 33 licensing, excluded on reading)* · `lease.{0,100}charging` **1** *(proximity, order 2; Title 35, excluded on reading)* · `charging.{0,100}landlord` **0** *(proximity)* · `electric vehicle.{0,150}tenant` **0** *(proximity, wide window)* · `remove.{0,80}charging` **0** *(end-of-tenancy removal verb)* · `restore.{0,80}charging` **0** *(end-of-tenancy restoration verb)* · `EVSE` **0** *(industry abbreviation)* · `electric vehicle supply` **0** *(statutory term used by other states)* · `zero.emission vehicle` **0** *(alternate statutory term)* · `\bfixture\b (Title 1)` **0** *(singular, word boundary - no tenant-fixture rule)* · `\bfixtures\b (Title 1)` **3** *(plural, word boundary - all plumbing fixtures in renter's duties)* · `trade fixture (Titles 1 and 34)` **0** *(common-law removal term)* · `\bfixture\b (Title 34)` **2** *(neither a tenant-removal rule)* · `electric vehicle (Title 34)` **0** *(Condominium Ownership Act does not address charging)* · `electric vehicle (session-laws/2025 + /2026)` **present** *(currency check - 2025 SF0106 and 2026 HB0145; HB0145 is eff. July 1, 2026 and IS in the title text)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `electric vehicle` **42** *(known positive, multi-word; Titles 31, 37, 39 + 2025 SF0106, 2026 HB0145)* · `charging station` **13** *(known positive, multi-word; Titles 30, 39 + 2026 HB0145)* · `plug.in` **55** · `three and one-half cents` **2** *(known positive; confirms the new §.035 rate is in the Title 39 text AND in HB0145)* · `residential rental unit` **23** *(known positive, multi-word landlord-tenant term)*

**`ev-charging-requirements`** (Absent) — `electric vehicle` **42** *(term — Titles 31, 37, 39 and session laws; 0 in Titles 1, 34, 35)* · `charging station` **13** *(term — Titles 30, 39 and 2026 HB0145 only)* · `electric vehicle charging` **0** *(compound term)* · `EVSE` **0** *(industry abbreviation)* · `charging equipment` **0** *(everyday term)* · `electric vehicle supply` **0** *(statutory term in other states)* · `zero emission vehicle` **0** *(term)* · `plug-in` **16** *(term — all vehicle-tax context, Titles 31, 39, HB0145)* · `right to install` **0** *(tenant-right phrase)* · `install a charging` **0** *(tenant-right phrase)* · `parking space.{0,200}charging` **0** *(proximity, order 1)* · `charging.{0,200}parking space` **0** *(proximity, order 2)* · `tenant.{0,200}charging` **0** *(proximity, order 1)* · `charging.{0,200}tenant` **0** *(proximity, order 2)* · `landlord.{0,200}charging` **0** *(proximity, role word)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — phrase matching survives PDF line wraps)* · `DC fast charging station` **4** *(second multi-word known positive, inside the title actually searched (Title 39))*

**`ev-charging-shared-area`** (Absent) — `charging system` **0** *(term used by CO/IL statutes)* · `charging equipment` **0** *(term)* · `EVSE` **0** *(industry abbreviation)* · `common area[^.]{0,80}charg` **0** *(proximity, order A)* · `charg[^.]{0,80}common area` **0** *(proximity, order B)* · `parking space[^.]{0,80}electric` **0** *(proximity)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `electric vehicle` **42** *(KNOWN POSITIVE, multi-word - tax/motor-vehicle only, no rental rule)* · `charging station` **13** *(KNOWN POSITIVE, multi-word - tax/mine only, no rental rule)*

**`eviction-hardship-stay`** (Absent) — `substantial hardship` **0** *(ND/WI statutory term)* · `extreme hardship` **1** *(Title 31 only)* · `hardship` **62** *(7 in Title 1, none in the FED article)* · `stay the writ` **0** *(everyday term)* · `stay execution` **0** *(verb form)* · `stay.{0,40}restitution` **0** *(proximity, order 1, statute's own noun)* · `restitution.{0,40}stay` **0** *(proximity, order 2)* · `postpone.{0,40}eviction` **0** *(alternate verb)* · `rental assistance` **1** *(Title 14, not an eviction pause)* · `cite 1-21-1007 / 1-21-1013 / 1-21-1014 / 1-21-1015 / 1-17-201 / 19-11-122, session-laws 2025+2026` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `stay of execution` **25** *(19 in Title 1, all ch. 17 art. 2; also serves as a multi-word known positive)* · `rental agreement` **37** *(multi-word known positive)*

**`eviction-penalty-clause-ban`** (Absent) — `eviction fee` **0** *(everyday term)* · `\bpenalt.{0,120}(lease\|rental agreement)` **20** *(proximity order A)* · `(lease\|rental agreement).{0,120}\bpenalt` **31** *(proximity order B)* · `void and unenforceable` **12** *(statute's likely phrasing; 0 in Title 1)* · `unenforceable` **46** *(broad stem; 0 in Title 1)* · `void.{0,80}(lease\|rental agreement)` **22** *(proximity order A)* · `(lease\|rental agreement).{0,80}\bvoid\b` **7** *(proximity order B)* · `cite 1-21-1008 session-laws` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `liquidated damages` **14** *(statute's term + multi-word known positive; none a lease rule)*

**`eviction-record-sealing`** (Absent) — `expunge` **118** *(statute's own word; 1 in Title 1, read, irrelevant)* · `seal.{0,60}record` **42** *(proximity, order A; 1 in Title 1, read)* · `record.{0,60}seal` **34** *(proximity, REVERSE order; 1 in Title 1, read)* · `forcible entry and detainer.{0,120}(seal\|expunge\|confidential)` **0** *(subject proximity)* · `public (access\|inspection).{0,80}court record` **0** *(alternative phrasing)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `consumer reporting agency` **54** *(multi-word known positive)* · `tenant screening\|screening report` **3** *(multi-word known positive — § 40-12-505(d))*

**`eviction-service-party`** (Absent) — `address confidentiality` **0** *(term — Wyoming has no ACP, so no Secretary-of-State redirection)* · `substitute address` **0** *(term — the ACP's own vocabulary)* · `agent for service of process` **47** *(term — present corpus-wide, ZERO in Title 1; all entity/insurance registration, excluded)* · `accept service` **16** *(term — everyday phrasing, none in Title 1)* · `authorized by appointment` **2** *(term — the rules-of-civil-procedure phrase; Titles 9 and 17 only, neither landlord-tenant)* · `rental agreement.{0,150}service of process` **0** *(proximity, order 1, using Wyoming's own term 'rental agreement')* · `service of process.{0,150}rental agreement` **0** *(proximity, REVERSE order)* · `lease.{0,120}accept service` **0** *(proximity, order 1)* · `accept service.{0,120}lease` **0** *(proximity, REVERSE order)* · `designate.{0,80}service of process` **8** *(proximity, order 1 — Titles 3/5/26/27/40, none landlord-tenant)* · `service of process.{0,80}designat` **5** *(proximity, REVERSE order — same titles, excluded)* · `service of process` **235** *(broad term present corpus-wide; 4 in Title 1, each read and excluded — the zeros above are real)* · `cite 1-21-1003 / 1-21-1004 / 1-21-1201, session-laws 2025 and 2026` **0** *(currency, anchored — 0 anchored and 0 unanchored for each)*
  
**control** `zxqvwomble` **0** *(NONSENSE CONTROL — engine reports true empties)*  ·  **known positive** `usual place of abode` **14** *(KNOWN POSITIVE, multi-word — 2 in Title 1, the exact § 1-21-1003 wording)*

**`exculpatory-clauses`** (Absent) — `exculpat` **0** *(Title 1 and Title 34 both 0)* · `own negligence` **0** *(Title 1 and Title 34 both 0 (fixed harness))* · `hold harmless` **1** *(Title 1 (fixed harness), inspected, not lease-related; Title 34 = 0)* · `release from liability` **0** *(Title 1 and Title 34 both 0 (fixed harness))* · `limit the liability` **0** *(Title 1 and Title 34 both 0 (fixed harness))* · `exempt .{0,40}liability` **1** *(proximity order A - Title 1 = 1, Title 34 = 1, both inspected and off-topic)* · `liability .{0,40}exempt` **0** *(proximity order B - Title 1 and Title 34 both 0)* · `indemnif` **8** *(Title 1 - all inspected, civil-procedure and governmental claims; Title 34 = 7)* · `agreement to indemnify` **1** *(corpus-wide, Title 9 only (fixed harness))* · `indemnity agreement` **1** *(corpus-wide, Title 40 only (fixed harness))* · `against public policy` **6** *(corpus-wide (fixed harness) - none reaching residential leases)* · `contrary to public policy` **5** *(corpus-wide (fixed harness) - Titles 4, 17, 35)* · `invalid and unenforceable` **0** *(corpus-wide phrase (fixed harness))* · `not liable` **14** *(Title 1 (fixed harness) - includes the 1-21-1203(e) grant)*
  
**control** `zxqvwomble` **0** *(nonsense control - engine reports true empties)*  ·  **known positive** `exculpatory` **4** *(known positive corpus-wide - Title 4 trust code, Title 7 DNA; none in Title 1 or 34)* · `hold harmless` **22** *(known positive corpus-wide, six titles (fixed harness))* · `void and unenforceable` **12** *(known positive corpus-wide; Title 34's four are restrictive-covenant removal, not lease terms)* · `residential rental unit` **23** *(known positive (fixed harness))* · `Condominium Ownership Act` **1** *(known positive, line-wrap regression check)*

**`expedited-criminal-eviction`** (Absent) — `criminal activity` **39** *(0 in Title 1; all corpus hits reviewed, none an eviction provision)* · `expedited` **3** *(Title 1 only; malpractice screening and victim compensation)* · `drug house` **0** *(everyday term)* · `controlled substance[^.]{0,250}(evict\|tenan\|lease\|landlord\|premises)` **6** *(proximity order 1; all off point)* · `evict\w*[^.]{0,250}controlled substance` **0** *(proximity order 2)* · `nuisance[^.]{0,120}evict` **0** *(proximity)* · `nuisance abatement` **1** *(Title 18 county authority)* · `abate\w*[^.]{0,120}nuisance` **10** *(public nuisance padlock action, not a landlord remedy)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `forcible entry and detainer` **5** *(known positive, multi-word)* · `forcible entry` **18** · `unlawful detainer` **1**

**`expedited-deposit-disposition`** (Absent) — `expedit (Title 1)` **10** *(stem — none in Art. 12 or 13)* · `administrative fee (Title 1)` **0** *(term)* · `processing fee (Title 1)` **0** *(everyday term)* · `request in writing (Title 1)` **0** *(word order A)* · `earlier than (Title 1)` **0** *(word order B)* · `sooner (Title 1)` **5** *(only Art. 12 hit is 1-21-1206(d) vacate window)* · `security deposit (Title 1)` **0** *(statute uses bare 'deposit')* · `1-21-120 (session-laws 2025+2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `administrative fee (whole corpus)` **24** *(known positive — phrase matches where Wyoming uses it)*

**`extended-absence-notice`** (Absent) — `extended absence` **0** *(statute's own term in URLTA states)* · `prolonged absence` **0** *(variant term)* · `\babsence\b.{0,150}(notify\|notice)` **13** *(proximity, order A - no tenancy hit; sole Title 1 hit is criminal evidence)* · `(notify\|notice).{0,150}\babsence\b` **13** *(proximity, order B - same)* · `notify the (landlord\|lessor)` **0** *(everyday phrasing of the duty)* · `unoccupied` **6** *(everyday term - Titles 30/31/35/40 only)* · `1-21-12` **0** *(currency - 0 in session-laws/2025 and /2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `\babsence\b` **304** *(known positive, corpus-wide)* · `\babandon` **19** *(known positive, Title 01 - located §§ 1-21-1201(a)(v) and 1-21-1210)* · `renter.s duties` **1** *(known positive - located § 1-21-1204)*

**`fee-in-lieu-of-deposit`** (Absent) — `in lieu of a security deposit` **0** *(statute's own likely words)* · `rental security insurance` **0** *(product term)* · `deposit waiver` **0** *(everyday term)* · `rent guaranty\|rent guarantee` **0** *(product term, both spellings)* · `lease insurance` **0** *(product term)* · `credit bureau` **0** *(reporting term)* · `in lieu of.{0,40}deposit` **10** *(proximity, order A — bail, bonding, banking; none residential)* · `deposit.{0,60}in lieu` **9** *(proximity, order B — none residential)* · `surety bond.{0,100}(tenant\|renter\|lease)` **6** *(proximity — none residential)* · `security deposit` **12** *(term — 0 in Title 1, confirming the established fact)* · `consumer reporting agency` **54** *(reporting term — no landlord notice duty)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `held as a deposit` **2** *(known positive — both Wyo. Stat. § 1-21-1208(a))*

**`fire-sprinkler-duty`** (Absent) — `sprinkler` **10** *(term - no hit imposes an install/retrofit duty; T35 hits are acceptance testing, phased plan submission, lawn sprinklers under 90V)* · `retrofit` **3** *(everyday term - T99 x1, 2025 SF0064 x2, none about sprinklers in rentals)* · `standpipe` **1** *(term of art - Title 99 noncodified only)* · `fire suppression` **24** *(multi-word term - none a rental duty)* · `fire code` **6** *(term)* · `Uniform Building Code` **2** *(T35 fee schedule only)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `International Fire Code` **4** *(KNOWN POSITIVE, multi-word)* · `International Building Code` **6** *(KNOWN POSITIVE, multi-word)* · `building code` **20** *(KNOWN POSITIVE, multi-word)*

**`flood-disclosure`** (Absent) — `floodplain` **0** *(closed-compound term)* · `flood plain` **1** *(open-compound term; only § 16-10-102(a)(v), drainage districts)* · `flood hazard` **0** *(FEMA term)* · `flood zone` **0** *(everyday term)* · `special flood` **0** *('special flood hazard area' stem)* · `flood insurance` **1** *(§ 40-23-123 mortgage lending fee only)* · `\bflood` **95** *(broadest stem; 0 in Titles 1 and 34)* · `disclos.{0,100}flood` **4** *(proximity order A; all Title 31 vehicle titles)* · `flood.{0,100}disclos` **3** *(proximity order B; all Title 31)* · `inundat` **1** *(alternative term; Title 41 water)* · `cite 33-28-310 session-laws` **0** *(currency, anchored)* · `cite 33-28-102 session-laws` **2** *(currency, anchored; 2026 SF0105 amends (b)(xiii) and § 33-28-306 only)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `adverse material facts` **14** *(multi-word known positive, matches across line wrap)*

**`foreclosure-disclosure`** (Absent) — `foreclos.{0,250}(tenant\|renter\|lessee\|occupant)` **1** *(proximity order 1; sole hit excluded as a § 29-2-105 heading adjacency)* · `(tenant\|renter\|lessee\|occupant).{0,250}foreclos` **3** *(proximity order 2; all three inspected and excluded)* · `foreclos.{0,200}disclos` **1** *(excluded — Title 39 tax voluntary-disclosure agreements)* · `disclos.{0,200}foreclos` **0** *(reverse order)* · `notice of (default\|foreclosure)` **11** *(statute's own words; none is a tenant disclosure)* · `34-4-104 / 1-18-103 / 1-18-104 (anchored cite, session-laws/2025 and /2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `foreclosure by advertisement` **5** *(multi-word known positive)*

**`forfeiture-redemption`** (Absent) — `relief from forfeiture` **0** *(term — the equitable doctrine's own name)* · `redemption` **333** *(term — 50 in Title 1, all located to Chapter 18 execution sales (§§ 1-18-103 to 1-18-106); none in the FED chapter)* · `redeem` **183** *(term, alternate form — 12 in Title 1, same chapter)* · `forcible entry.{0,400}redem` **0** *(proximity, order 1 — no redemption provision near the FED chapter)* · `redem.{0,400}forcible entry` **0** *(proximity, REVERSE order)* · `reinstate.{0,100}(lease\|tenancy\|rental agreement)` **1** *(proximity, order 1 — Title 19 only, employment reinstatement; excluded)* · `(lease\|tenancy\|rental agreement).{0,100}reinstate` **2** *(proximity, REVERSE order — Title 19 §§ 19-11-110/111, employment and insurance; excluded)* · `right to cure` **8** *(term — 6 Title 40 consumer credit, 2 in 2025 SF0146; none landlord-tenant)* · `cure the (default\|breach)` **14** *(term — none in Title 1)* · `pay.{0,80}into court` **4** *(proximity — Titles 16/39/41, none landlord-tenant)* · `cite 1-21-1007 / 1-21-1008 / 1-21-1015 / 34-2-128 / 34-2-129, session-laws 2025 and 2026` **0** *(currency, anchored — 0 anchored and 0 unanchored for each)*
  
**control** `zxqvwomble` **0** *(NONSENSE CONTROL — engine reports true empties)*  ·  **known positive** `tenancy by sufferance` **2** *(KNOWN POSITIVE, multi-word — the exact § 34-2-128 wording)* · `writ of restitution` **6** *(KNOWN POSITIVE, multi-word — all 6 in Title 1)* · `restitution of the premises` **1** *(KNOWN POSITIVE, multi-word — the exact § 1-21-1008(a) wording)*

**`furnishings-included`** (Tagged) — `furnished (unit\|apartment\|dwelling\|premises\|room\|rental\|house)` **0** *(statutory phrasings used elsewhere)* · `furniture deposit` **0** *(deposit variant)* · `furnitur\w*[^.]{0,200}(renter\|tenant\|lessee\|landlord\|lessor\|owner)` **0** *(proximity order 1)* · `(renter\|tenant\|lessee\|landlord\|lessor)[^.]{0,200}furnitur\w*` **0** *(proximity order 2)* · `inventory of furnish` **0** *(inventory requirement)* · `inventory[^.]{0,150}(furnitur\|furnish)` **1** *(Title 40 equipment dealer repurchase - off point)* · `furniture` **1** *(Title 1 exemption statute - off point)* · `furnished` **10** *(Title 1; all the ordinary verb)* · `appliance` **2** *(Title 1; § 1-21-1203(a)(iii)-(iv) and § 1-21-1204(a)(iv))*
  
**control** `zxqvwomble` **0**  ·  **known positive** `wear and tear` **12** *(known positive, multi-word; includes Title 1 deposit section)* · `residential rental unit` **23** *(known positive, multi-word)*

**`good-cause-notice`** (Absent) — `good cause (Title 1)` **19** *(term — none in Art. 10 or Art. 12)* · `good cause.{0,200}(evict\|tenan\|renter\|lease) (Title 1)` **0** *(proximity, word order A)* · `(evict\|tenan\|renter\|lease).{0,200}good cause (Title 1)` **0** *(proximity, word order B)* · `just cause (Title 1)` **0** *(everyday term)* · `cause for eviction (Title 1)` **0** *(everyday term)* · `reason for terminat (Title 1)` **0** *(stem)* · `nonrenewal\|non-renewal (Title 1)` **0** *(both spellings)* · `refuse to renew (Title 1)` **0** *(verb form)* · `month to month\|month-to-month (whole corpus)` **4** *(none landlord-tenant)* · `periodic tenancy (whole corpus)` **0** *(term)* · `tenancy at will / tenant at will (whole corpus)` **0** *(singular and variant)* · `1-21-100 / 1-21-120 / 34-2-12 (session-laws 2025+2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `good cause (whole corpus)` **397** *(known positive — phrase matches freely across 36 titles)* · `holding over (whole corpus)` **4** *(known positive — located 34-2-128)*

**`government-fee-reimbursement`** (Absent) — `rental (registration\|license\|licensing)` **0** *(core term - no state rental registration or licensing scheme exists)* · `(tenant\|renter).{0,200}registration fee` **0** *(proximity, order A)* · `registration fee.{0,200}(tenant\|renter\|rent)` **14** *(proximity, order B - Titles 31/39 and HB0004 only, all motor-vehicle or tax, none rental housing)* · `pass(ed)? (on\|through).{0,150}tenant` **0** *(everyday phrasing, order A)* · `tenant.{0,150}pass(ed)? (on\|through)` **0** *(everyday phrasing, order B)* · `reimburs.{0,150}(tax\|fee).{0,100}tenant` **0** *(statute's likely verb)* · `business license.{0,200}(rent\|landlord\|dwelling)` **0** *(adjacent licensing angle)* · `\bordinance\b.{0,200}(rental\|dwelling unit)` **0** *(local-authority angle, order A)* · `(rental\|dwelling unit).{0,200}\bordinance\b` **0** *(local-authority angle, order B)* · `preempt.{0,200}(rent\|landlord\|tenant)` **2** *(preemption angle - both Title 17, business entities)* · `(rent\|landlord\|tenant).{0,200}preempt` **3** *(preemption angle, reverse order - all Title 17)* · `absorb.{0,100}tax` **0** *(tax pass-through angle)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `[Ll]odging tax` **18** *(known positive - located the lodging tax regime)* · `inspection fee` **30** *(known positive - none in a rental-housing context)* · `\bsurcharge\b` **79** *(known positive, corpus-wide)* · `vendor shall (collect\|add)` **4** *(known positive - located § 39-15-107(b))*

**`governmental-fines`** (Absent) — `governmental fine` **0** *(exact term - absent)* · `municipal fine` **0** *(variant - absent)* · `code violation` **0** *(everyday term - absent)* · `chronic nuisance` **0** *(program term - absent)* · `crime free` **0** *(program term - absent)* · `fine.*tenant\|tenant.*fine` **27** *(proximity, both word orders - no pass-through rule)* · `pass.*fine\|fine.*pass` **47** *(proximity, both word orders - none on point)* · `reimburse.*penalty\|penalty.*reimburse` **39** *(proximity, both word orders - none landlord-tenant)* · `emergency assistance\|calls for police\|police response` **6** *(nuisance-call protection - absent; Title 1 hit is § 1-1-120 Good Samaritan)* · `18-2-115\|15-1-103 (session-laws)` **1** *(currency - 2025 HB0172 cites § 15-1-103(a)(xviii) on firearms only)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `nuisance` **94** *(known positive - § 15-1-103(a)(xix), § 18-2-101(a)(viii), § 18-2-115)* · `abatement` **54** · `civil penalty` **210** *(known positive - pattern shape matches)*

**`guest-rights`** (Absent) — `\bguest\b` **13** *(Titles 12, 33, 39 and 2025 SF0042 — liquor and lodging tax, no tenant right)* · `\bguests\b` **19** *(only 2 in Title 1 (§ 1-21-1203(c), § 1-21-1204(a)(viii)), 0 in Title 34)* · `\binvitee` **2** *(Titles 1 and 34)* · `visitor` **17** *(none landlord-tenant)* · `overnight` **25** *(none a guest right)* · `guest fee` **0** *(no guest-fee prohibition anywhere)* · `social guest` **0** *(term variant)* · `roommate\|room-mate` **1** *(Title 35, unrelated)* · `three \(3\) or more.{0,40}household\|three or more.{0,40}household` **0** *(the comparator rule's threshold, in Wyoming's number style with escaped parens and in plain form)* · `supplier` **360** *(0 in Title 1 and 0 in Title 34 — none landlord-tenant)* · `tradesmen\|tradespeople` **0** *(supplier limb absent)* · `deliveryman\|delivery person` **4** *(Titles 27, 39 and two session laws — none landlord-tenant)* · `\bguest (title34)` **0** *(nothing in the property title either)* · `1-21-120 (session-laws)` **0** *(currency)* · `landlord\|renter (session-laws/2026)` **0** *(currency)*
  
**control** `zxqvwomble` **0** *(nonsense control — engine reports true empties)*  ·  **known positive** `residential rental unit (title01)` **23** · `household` **228** *(known positive — the short word does match corpus-wide)*

**`habitability-presumption`** (Absent) — `warranty of habitability` **0** *(statute's own likely words)* · `housing code` **0** *(the California/Massachusetts trigger term)* · `implied warranty` **7** *(term — none in Title 1)* · `habitab` **15** *(root term — only 1 in Title 1, at § 1-40-208(a); absent from the landlord-tenant article)* · `presumed` **16** *(statute's word, Title 1 scope)* · `presumption` **4** *(noun form, Title 1 scope)* · `prima facie` **12** *(alternative formulation, Title 1 scope)* · `rebuttable` **1** *(variant, Title 1 scope — not landlord-tenant)* · `conclusive evidence` **0** *(variant, Title 1 scope)* · `presum.{0,200}(habitab\|rental unit\|renter\|owner)` **19** *(proximity, order A — Title 1 hits are § 1-21-1210(a) and eminent domain)* · `(habitab\|rental unit\|renter).{0,200}presum` **1** *(proximity, order B — § 1-21-1210(a) only)* · `prima facie.{0,200}(rent\|tenan\|habitab)` **2** *(proximity — Titles 17 and 34, neither residential)* · `building code` **20** *(term — none in Title 1)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `reasonable cause supported by evidence` **1** *(known positive — § 1-21-1203(b), long phrase matched across line wrap)*

**`habitability-statement`** (Absent) — `rental agreement shall.{0,80}state` **1** *(§ 1-21-1207 - the one mandatory recital, about nonrefundable deposits)* · `warranty of habitability` **0** *(the doctrine's own name)* · `statement of habitability` **0** *(recital term used by mandating states)* · `warrant.{0,60}habitab` **0** *(proximity, order 1)* · `habitab.{0,60}warrant` **0** *(proximity, order 2)* · `lease.{0,80}habitab` **0** *(proximity, order 1)* · `habitab.{0,80}lease` **1** *(proximity, order 2 - § 1-21-1202(a) duty, not a recital)* · `disclos.{0,60}habitab` **0** *(proximity, order 1)* · `habitab.{0,60}disclos` **0** *(proximity, order 2)* · `shall be stated in the lease` **0** *(recital phrasing)* · `in the rental agreement.{0,60}habitab` **0** *(proximity, statute's own term)* · `writing.{0,60}fit for` **0** *(proximity)* · `1-21-1202 / 1-21-1203 / 1-21-1207 (session-laws/2025 + /2026)` **0** *(currency check, 278 enrolled acts)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `fit for human habitation` **1** *(known positive, multi-word - § 1-21-1202(a))* · `habitab` **15** *(known positive stem; Titles 1, 22, 34, 35)* · `implied warranty` **7** *(known positive, multi-word; Titles 12, 31, 35 - none landlord-tenant)* · `shall contain.{0,60}statement` **52** *(known positive - the required-recital pattern shape matches where such a duty exists)* · `lease shall.{0,80}state` **4** *(known positive; Titles 19, 23, 34, 36 - none residential)* · `residential rental unit` **23** *(known positive, multi-word)*

**`hazardous-contamination-disclosure`** (Absent) — `contaminat.{0,250}(tenant\|renter\|lessee)` **0** *(DECISIVE proximity, order 1, corpus-wide)* · `(tenant\|renter\|lessee).{0,250}contaminat` **0** *(DECISIVE proximity, order 2, corpus-wide)* · `brownfield` **0** *(term)* · `environmental covenant` **0** *(term — no Uniform Environmental Covenants Act)* · `deed notice` **1** *(term — only inside the § 35-11-103(g)(vii) definition)* · `notice.{0,150}prospective purchaser` **0** *(proximity)* · `prospective purchaser` **11** *(term — present, but buyer-facing only)* · `(tenant\|lessee\|renter\|lease).{0,200}disclos (title35)` **1** *(proximity, order 2 — read and excluded, coroner records)* · `contamination` **62** *(term — present, none tenant-facing)* · `contaminated` **40** *(singular/other form)* · `hazardous substance` **15** *(statute's own words)* · `institutional control` **10** *(statute's own words)* · `voluntary remediation` **14** *(statute's own words)* · `clandestine laboratory` **37** *(statute's own words)* · `methamphetamine` **24** *(everyday term)* · `cleanup` **5** *(everyday term)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — phrase matching survives PDF line wraps)* · `use control area` **24** *(second multi-word known positive, inside Title 35, the title searched)* · `disclos.{0,200}(tenant\|lessee\|renter\|lease) (title35)` **3** *(proximity, order 1 — all read, all excluded as 'release'/'please' false positives)*

**`health-district-rental-rules`** (Absent) — `rental dwelling` **0** *(Nevada statute's own term)* · `tenant[^.]{0,80}health officer` **0** *(proximity, order A)* · `health officer[^.]{0,80}tenant` **0** *(proximity, order B)* · `landlord[^.]{0,60}board of health` **0** *(proximity)* · `sanitation regulations` **0** *(term)* · `housing code` **0** *(term - 0 corpus-wide)* · `upon request[^.]{0,60}regulation` **1** *(excluded - Title 11 agriculture)* · `regulation[^.]{0,60}upon request` **2** *(excluded - Titles 9, 26; reversed order)* · `provide[^.]{0,60}copy[^.]{0,60}regulation` **1** *(excluded - Title 42)* · `copy of (the\|such) (rules\|regulations)` **4** *(excluded - Titles 28, 41, 42, 2026 SF0127)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `health district` **5** *(KNOWN POSITIVE, multi-word)* · `district board of health` **7** *(KNOWN POSITIVE, multi-word)* · `county health officer` **35** *(KNOWN POSITIVE, multi-word)* · `health hazard` **10** *(KNOWN POSITIVE, multi-word)*

**`hoa`** (Absent) — `unit owners' association` **0** *(UCIOA term)* · `common interest community` **0** *(UCIOA term)* · `declaration of covenants` **0** *(everyday term)* · `home owners.? association` **0** *(open-compound variant)* · `homeowners.? association` **2** *(closed-compound; both Title 18 subdivision permits)* · `property owners.? association` **1** *(Title 34 transfer-fee list only)* · `association.{0,140}\brent\b` **0** *(proximity order A — no rent-diversion right)* · `\brent\b.{0,140}association` **0** *(proximity order B)* · `association.{0,120}lease` **9** *(proximity order A; none residential approval)* · `lease.{0,120}association` **13** *(proximity order B; none residential approval)* · `association.{0,100}lien` **9** *(no assessment lien)* · `assessment.{0,80}lien` **53** *(proximity order A; municipal and water districts)* · `lien.{0,80}assessment` **50** *(proximity order B)* · `34-20-` **4** *(section enumeration — the whole Condominium Ownership Act)* · `cite 34-20-104 session-laws` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Wyoming Nonprofit Corporation Act` **7** *(multi-word known positive)*

**`holding-deposit`** (Absent) — `holding deposit` **1** *(exact term; sole hit § 26-8-102 insurer deposits — excluded)* · `earnest money` **6** *(everyday term; all real estate sales or brokerage — excluded)* · `reservation fee` **0** *(alternative term)* · `good faith deposit` **0** *(alternative term)* · `prospective (tenant\|renter\|lessee)` **0** *(the party a holding-deposit rule would name)* · `applicant.{0,200}deposit` **31** *(proximity order 1, corpus-wide; scoped to Title 1 the union with the reverse is 1, excluded (§ 1-9-102))* · `deposit.{0,200}applicant` **27** *(proximity order 2, corpus-wide; none in Title 1 ch. 21)* · `1-21-1207 / 33-28-122 / 34-24-130 (anchored cite, session-laws/2025 and /2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `application fee` **79** *(multi-word known positive)* · `nonrefundable` **26** *(known positive — the § 1-21-1207 term)*

**`homestead-waiver`** (Absent) — `waive the exemption` **0** *(corpus-wide phrase (fixed harness))* · `waive any exemption` **0** *(corpus-wide phrase (fixed harness))* · `cannot be waived` **0** *(corpus-wide phrase (fixed harness))* · `waiver of exemption` **2** *(corpus-wide - Titles 27 and 42, inspected, neither reaches leases (fixed harness))* · `waiv\w*(?:.\|\n){0,160}exempt` **24** *(corpus-wide proximity order A, newline-crossing)* · `exempt(?:.\|\n){0,160}waiv` **17** *(corpus-wide proximity order B, newline-crossing)* · `waiv\w*(?:.\|\n){0,160}homestead` **6** *(proximity order A - all 7 distinct hits inspected; only 34-2-121 is on point)* · `homestead(?:.\|\n){0,160}waiv` **3** *(proximity order B - Title 2 probate and Title 34 only)* · `releasing and waiving` **1** *(corpus-wide - locates the statutory words in 34-2-121 (fixed harness))* · `exemption laws of this state` **2** *(corpus-wide - 34-2-121 and Title 2 probate (fixed harness))* · `unconscionable` **23** *(Title 40 - checked for a consumer-contract override; none reaches leases)*
  
**control** `zxqvwomble` **0** *(nonsense control - engine reports true empties)*  ·  **known positive** `homestead` **79** *(known positive corpus-wide; Title 1 = 13, Title 34 = 10)* · `homestead exemption` **12** *(known positive, multi-word (fixed harness))* · `exempt from levy` **7** *(known positive, multi-word (fixed harness))* · `waive` **35** *(known positive, Title 1)* · `residential rental unit` **23** *(known positive (fixed harness))* · `Condominium Ownership Act` **1** *(known positive, line-wrap regression check)*

**`infirmity-termination`** (Absent) — `infirmity` **4** *(statute's own word; none about tenancies)* · `early termination` **0** *(everyday term)* · `unable to live independently` **0** *(MI/NY statutory phrasing)* · `incapable of living independently` **0** *(MI statutory phrasing)* · `accessible unit` **0** *(MN statutory phrasing)* · `death of (the \|a )?(tenant\|renter\|lessee)` **0** *(adjacent NV rule)* · `public housing[^.]{0,150}(terminat\|lease)` **0** *(TN statutory route)* · `physician[^.]{0,200}(lease\|rental agreement\|tenan)` **1** *(Title 27 workers comp - off point)* · `terminate[^.]{0,200}(health\|medical\|disab\|incapacit)` **26** *(proximity order 1; none in Title 1)* · `(health\|medical\|disab\|incapacit)\w*[^.]{0,200}terminate the (lease\|rental)` **0** *(proximity order 2)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `nursing home` **84** *(known positive, multi-word)* · `assisted living` **28** *(known positive, multi-word)* · `long.term care` **181** · `senior citizen` **75** *(known positive, multi-word)*

**`informal-dispute-resolution`** (Tagged) — `mediation (Title 1)` **22** *(term — none in Art. 10 or Art. 12 of ch. 21)* · `informal (Title 1)` **8** *(term — each read: equine activities, prejudgment-attachment hearing, adoption consent, eminent-domain ADR, and the Art. 6 informal claims procedure in ch. 26; none landlord-tenant)* · `alternative dispute (Title 1)` **0** *(term)* · `dispute resolution (Title 1)` **1** *(eminent domain, not landlord-tenant)* · `meet and confer (Title 1)` **0** *(everyday term)* · `before (commencing\|filing) (an action\|suit) (Title 1)` **1** *(not landlord-tenant)* · `(mediat\|arbitrat\|informal).{0,250}(renter\|rental unit\|landlord\|lease) (Title 1)` **1** *(proximity word order A — the single hit is the eminent-domain ADR sentence)* · `(renter\|rental unit\|landlord\|lease).{0,250}(mediat\|arbitrat\|informal) (Title 1)` **4** *(proximity word order B — none in Art. 10 or Art. 12)* · `1-21-100 / 1-21-120 / 1-36-1 (session-laws 2025+2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `arbitration (Title 1)` **28** *(known positive — all in Art. 8 of ch. 21 and ch. 36, none landlord-tenant)*

**`inspection-condemnation-disclosure`** (Absent) — `unfit for human habitation` **0** *(sister-state term of art)* · `unfit.{0,100}habitation` **0** *(proximity, order A)* · `habitation.{0,100}unfit` **0** *(proximity, order B)* · `housing code` **0** *(core term - no state housing code)* · `property maintenance code` **0** *(core term)* · `unsafe building` **0** *(everyday term)* · `dilapidated` **0** *(everyday term)* · `prospective (tenant\|renter\|lessee)` **0** *(applicant-disclosure angle - the disclosure duty runs only to a 'prospective purchaser')* · `[Rr]eal [Ee]state [Dd]isclosure` **0** *(no Wyoming seller-disclosure act)* · `\bdisclose\b.{0,200}(violation\|order\|condemn)` **22** *(proximity, order A - no landlord-to-tenant duty among them)* · `(violation\|order\|condemn).{0,200}\bdisclose\b` **27** *(proximity, order B - same)* · `code (violation\|enforcement)` **7** *(term - Titles 7/15/16/35)* · `notice of violation` **23** *(term - none landlord-tenant)* · `35-9-156` **2** *(currency - 0 in session-laws/2025; 2 in /2026 (SF0071), amending subsection (a) only)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `uninhabitable` **12** *(known positive - 11 in Title 35, located § 35-9-156)* · `clandestine laboratory` **37** · `dangerous building` **1** *(known positive - located § 15-1-103(a)(xxvi))*

**`inspection-notice-penalty`** (Absent) — `walk.through` **0** *(everyday term, hyphen and space - absent)* · `move.out` **0** *(everyday term - absent)* · `move.in` **1** *(everyday term - Title 34, not a rental inspection)* · `joint inspection` **0** *(statute term - absent)* · `checklist` **5** *(term - all Title 9 state government)* · `condition of the premises` **1** *(term - Title 26 insurance)* · `inventory` **152** *(synonym - none a rental condition inventory)* · `inspect (scoped title01)` **19** *(each hit reviewed; only § 1-21-1205(a)(iii) is rental)* · `1-21-120 (session-laws/2025 + /2026)` **0** *(currency - no 2025 or 2026 act)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `inspect` **1953** *(known positive - pattern shape matches)*

**`jury-waiver`** (Absent) — `waiver of.{0,40}jury` **0** *(term)* · `waive.{0,120}jury` **7** *(proximity order 1, none contractual)* · `jury.{0,120}waive` **11** *(proximity order 2, none contractual)* · `standard form contract` **0** *(Vermont's term)* · `adhesion` **0** *(term)* · `class action waiver` **0** *(term)* · `unconscionab` **27** *(all Title 40 UCCC; 0 in Title 34; § 40-14-206 limits 'consumer lease' to goods)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `jury trial` **30** · `\bjur(y\|ies)\b (Title97)` **9** *(known positive - all read, only art. 1 §§ 9 and 10)*

**`key-control-policy`** (Absent) — `\bkeys\b` **11** *(0 in Title 1; both Title 34 hits are digital-asset private keys)* · `rekey\|re-key\|rekeying` **0** *(no rekeying duty anywhere)* · `master key` **0** *(no master-key rule)* · `keyless` **0** *(no electronic-key rule)* · `\block\b\|\blocks\b` **29** *(single Title 1 hit is § 1-21-1403(a), the unauthorized-occupant lock change)* · `deadbolt\|dead bolt` **0** *(no security-device standard)* · `criminal history.{0,60}employ\|employ.{0,60}criminal history` **9** *(proximity, both word orders — Titles 7, 15, 21 only; no residential-property staff rule)* · `background check (title01 / title34)` **0** *(scoped — nothing in either property-relevant title)* · `33-28-10\|1-21-140 (session-laws)` **8** *(currency — 2025 SF0006 created §§ 1-21-1401 to 1-21-1403 (in corpus); 2026 SF0105 touched § 33-28-102(b)(xiii) and § 33-28-306 only)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `\bkey\b` **87** *(known positive — short-word boundary pattern matches; all 12 Title 1 hits are 'key witness' in the crime-victims chapter)* · `background check` **97** *(known positive — but 0 in Title 1 and 0 in Title 34)*

**`knowing-use-penalty`** (Absent) — `knowingly uses` **2** *(statute's own likely words — both Title 6 criminal code)* · `prohibited provision` **3** *(term — no lease-term list)* · `contrary to public policy` **5** *(the Minnesota formulation — none in Title 1)* · `void and unenforceable` **12** *(voidness shape — none in Title 1)* · `shall be void` **33** *(voidness shape — Title 1 hits are the statute of frauds and noncompetes)* · `unconscionable` **23** *(term — all Title 40, none a prohibited lease term)* · `waive.{0,80}(right\|remedy)` **82** *(proximity — no anti-waiver rule in Article 12)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `deceptive trade practice` **18** *(known positive — locates the Wyoming Consumer Protection Act)*

**`landlord-liability-insurance`** (Absent) — `landlord.{0,250}insurance` **1** *(DECISIVE proximity, order 1 — read and excluded, § 33-28-311 abutting an article heading)* · `insurance.{0,250}landlord` **0** *(DECISIVE proximity, order 2, corpus-wide)* · `rental registration` **0** *(term)* · `landlord registration` **0** *(term)* · `renters insurance` **0** *(everyday term, no apostrophe)* · `renter's insurance` **0** *(everyday term, apostrophe form)* · `shall carry insurance` **0** *(likely statutory verb phrase)* · `shall maintain insurance` **0** *(verb variant)* · `shall obtain insurance` **1** *(verb variant — Title 13 banking, excluded)* · `minimum coverage` **0** *(term)* · `require the tenant to.{0,100}insurance` **0** *(proximity, landlord-facing)* · `liability insurance.{0,250}(rental\|dwelling\|tenant)` **2** *(proximity, order 1 — Title 26 rental cars, excluded)* · `(rental\|dwelling\|tenant).{0,250}liability insurance` **2** *(proximity, order 2 — same, excluded)* · `owner.{0,150}shall.{0,150}liability insurance` **2** *(proximity with statutory verb — Titles 31, 40, excluded)* · `liability insurance` **94** *(term — present corpus-wide, 14 in Title 1, 0 in Title 34, none landlord-facing)* · `general liability` **4** *(term)* · `proof of insurance` **7** *(term)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — phrase matching survives PDF line wraps)* · `certificate of insurance` **41** *(second multi-word known positive — insurance phrases of this shape are findable)*

**`landlord-registration`** (Absent) — `rental registration` **0** *(subject term)* · `register.{0,60}rental` **1** *(Title 31, vehicle registration)* · `residential rental property` **1** *(Title 1, not a registration provision)* · `business license` **19** *(none reaches a residential landlord)* · `may not maintain a proceeding` **2** *(both § 17-16-1502)* · `lodging service (scoped title39)` **17** *(short-term rental tax)* · `sales tax license (scoped title39)` **3** *(§ 39-15-106(a))* · `thirty \(30\) continuous days (scoped title39)` **1** *(transient-guest line, escaped parentheses)* · `cite 17-16-1501 / 17-16-1502 / 17-29-114, session-laws 2025+2026` **0** *(currency, anchored)* · `cite 39-15-104 / 39-15-106, session-laws 2026` **14** *(currency, anchored: HB0107 and SF0079, both effective 2026-07-01 except SF0079 § 2 (2027, vehicle liens only))*
  
**control** `zxqvwomble` **0**  ·  **known positive** `certificate of authority` **385** *(multi-word known positive; found the real duty)* · `transacting business` **52** *(multi-word known positive)* · `rental agreement` **37** *(multi-word known positive)*

**`late-fee-limit`** (Absent) — `late fee` **29** *(corpus-wide; ZERO in Title 1; all inspected hits are plate or licence fees)* · `late charge` **2** *(corpus-wide; ZERO in Title 1)* · `delinquency charge` **21** *(the statute's own term — all Title 40 UCCC (20) and Title 9 (1); none reaches a residential lease)* · `late payment` **7** *(corpus-wide; 1 in Title 1, not a fee rule)* · `(rent\|rental agreement).{0,200}late` **143** *(proximity order 1; 7 in Title 1, all 'related'/'appellate' false matches)* · `late.{0,200}rent\b` **104** *(proximity order 2; 4 in Title 1, same false matches)* · `late fee (scope session-laws)` **3** *(currency check — all 'license plate fee', no residential rule in 2025 or 2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `accrued rent` **1** *(multi-word known positive in Title 1 (§ 1-21-1007))* · `liquidated damages` **14** *(multi-word known positive; 2 in Title 1)*

**`lead-safe-certification`** (Absent) — `lead.based paint` **0** *(term — the federal statute's own phrase)* · `lead paint` **0** *(term — everyday phrasing)* · `lead poisoning` **0** *(term — the public-health framing)* · `lead hazard` **0** *(term — the abatement framing)* · `lead.safe` **0** *(term — the certificate's own name, hyphen or space)* · `blood lead` **0** *(term — the screening framing)* · `lead level` **0** *(term — the screening framing, alternate)* · `certificate of (lead\|compliance)` **2** *(term — Titles 9 and 23, neither about lead)* · `\blead\b.{0,60}(abat\|hazard\|paint\|poison)` **0** *(proximity, order 1, word-bounded on the short word)* · `(abat\|hazard\|paint\|poison).{0,60}\blead\b` **0** *(proximity, REVERSE order)* · `\blead\b.{0,120}(child\|dwelling\|residen\|rental)` **1** *(proximity, order 1 — read; verb 'lead to' in Title 14, excluded)* · `(child\|dwelling\|residen\|rental).{0,120}\blead\b` **2** *(proximity, REVERSE order — read; both verb 'lead to', Titles 14 and 35, excluded)*
  
**control** `\blead\b` **114** *(single-word control — the word is abundant corpus-wide, so every phrase zero above is real)* · `zxqvwomble` **0** *(NONSENSE CONTROL — engine reports true empties)*  ·  **known positive** `asbestos` **21** *(KNOWN POSITIVE — a hazardous-material term that DOES register (all 21 in Title 1))* · `pamphlet` **19** *(KNOWN POSITIVE, disclosure vocabulary present in corpus without attaching to lead)* · `renovat` **74** *(KNOWN POSITIVE, renovation vocabulary present without attaching to lead)*

**`lead-state-notices`** (Absent) — `lead-based paint` **0** *(corpus-wide, statute's own term (fixed harness))* · `lead based paint` **0** *(corpus-wide, unhyphenated variant (fixed harness))* · `lead-?based` **0** *(corpus-wide, hyphen-optional)* · `leadbased` **0** *(corpus-wide, closed-up variant)* · `lead paint` **0** *(corpus-wide, everyday term (fixed harness))* · `lead poisoning` **0** *(corpus-wide (fixed harness))* · `lead-poisoning` **0** *(corpus-wide, hyphenated)* · `lead hazard` **0** *(corpus-wide (fixed harness))* · `lead abatement` **0** *(corpus-wide (fixed harness))* · `blood lead` **0** *(corpus-wide (fixed harness))* · `elevated blood` **0** *(corpus-wide (fixed harness))* · `\bpaints\b` **0** *(corpus-wide, plural with word boundary)* · `painting` **5** *(corpus-wide, inflected form)* · `\blead\b(?:.\|\n){0,120}paint` **0** *(proximity order A, newline-crossing)* · `paint(?:.\|\n){0,120}\blead\b` **0** *(proximity order B, newline-crossing)* · `\blead\b(?:.\|\n){0,120}(hazard\|poison\|child)` **1** *(proximity order A - inspected, verb 'lead' in Title 14)* · `(hazard\|poison\|child)(?:.\|\n){0,120}\blead\b` **2** *(proximity order B - inspected, verb 'lead' in Titles 14 and 35)* · `lead-based paint` **0** *(currency - session-laws/2025 and /2026 both 0)*
  
**control** `zxqvwomble` **0** *(nonsense control - engine reports true empties)*  ·  **known positive** `\bpaint\b` **11** *(known positive, corpus-wide, word boundary - eight titles, none housing)* · `residential rental unit` **23** *(known positive (fixed harness))* · `Condominium Ownership Act` **1** *(known positive, line-wrap regression check)* · `International Building Code` **6** *(known positive - corpus-wide multi-word scoping works)*

**`lease-copy`** (Absent) — `copy of the lease (whole corpus)` **0** *(statute's likely term)* · `copy of the rental agreement (whole corpus)` **0** *(Wyoming's own noun)* · `copy of the (written )?(lease\|agreement\|contract) (Title 1)` **2** *(both read; neither landlord-tenant)* · `copy.{0,80}(renter\|tenant\|lessee) (Title 1)` **1** *(proximity word order A)* · `furnish.{0,80}copy (Title 1)` **0** *(proximity word order B with likely verb)* · `duplicate (Title 1)` **6** *(everyday variant — none landlord-tenant)* · `copy of the lease / copy of any (lease\|contract) / legible copy / copy of all (Title 33)` **0** *(broker and property-manager duty check)* · `copy.{0,120}(lease\|rental)\|( lease\|rental).{0,120}copy (Title 33)` **2** *(proximity both orders — military orders and optometry, no lease duty)* · `1-21-120 / 1-23-105 / 34-2-12 (session-laws 2025+2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `copy (Title 33)` **102** *(known positive — term matches abundantly)*

**`lease-notice-initial-requirement`** (Absent) — `separately initial` **0** *(statute's own term in states that have the rule)* · `\binitial(ed\|ing\|s)? by\b` **2** *(word-boundary variants - Titles 22 and 32, not landlord-tenant)* · `initialed` **4** *(term - Titles 3/9/22/32, none landlord-tenant)* · `shall initial` **14** *(statute's likely verb - none in Title 1 or Title 34, none about a lease)* · `capital letters` **19** *(typography angle - none in Title 1 or Title 34)* · `point type\|point font` **8** *(typography angle - none in Title 1 or Title 34)* · `conspicuous` **166** *(typography/notice angle - only 5 in Title 1, all about posting a writ or fee list)* · `copy of the (lease\|rental agreement)` **0** *(adjacent duty to furnish a copy - none)* · `acknowledg.{0,150}(receipt\|copy).{0,150}(lease\|rental agreement)` **2** *(acknowledgment angle - both Title 16, public records)* · `1-23-105` **0** *(currency - 0 in session-laws/2025 and /2026)* · `34-2-12` **0** *(currency - 0 in session-laws/2025 and /2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `boldface\|bold face\|bold type\|boldfaced` **22** *(typography angle - sole Title 1 hit is Wyo. Stat. § 1-16-603(a), a structured-settlement disclosure, which doubles as a known positive showing Wyoming does impose type requirements where it wants to)* · `\bsigned\b` **23** *(known positive, Title 01)* · `in writing and signed` **1** *(known positive, Title 01 - multi-word phrase survives the line-wrap)*

**`lease-registration`** (Absent) — `rental registration` **0** *(program term - absent)* · `rental license` **0** *(program term - absent)* · `landlord registr` **0** *(stem, catches registration/registry - absent)* · `registration of rental` **1** *(reversed word order - § 31-19-104 rental VEHICLES, off-subject)* · `memorandum of lease` **0** *(short-form recording term - absent)* · `short form lease` **0** *(variant - absent)* · `record.*lease\|lease.*record` **53** *(proximity, both word orders - no registration duty)* · `34-1-1 / 1-23-105 (session-laws)` **3** *(currency - 2025 HB0097 and 2026 SF0099 touch neither the recording nor the frauds sections)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `leases for a term` **1** *(positive - the § 34-1-102 three-year exception)* · `statute of frauds` **3** *(positive - Titles 1 and 34)* · `register of deeds\|county clerk` **1146** *(known positive - pattern shape matches)*

**`lease-type-parity`** (Absent) — `month-to-month\|month to month` **4** *(0 in Title 1 and 0 in Title 34 — Titles 26, 40 and the 2026 budget bill)* · `from month to month` **2** *(both Title 40)* · `periodic tenancy` **0** *(no statutory periodic tenancy)* · `tenancy at will` **0** *(no tenancy at will)* · `term of the tenancy` **0** *(term variant)* · `fixed term\|fixed-term` **3** *(Titles 9 and 35 only)* · `rent control\|rent stabiliz` **0** *(no rent regulation, so no cap on a lease-type rent differential)* · `1-21-120 (session-laws)` **0** *(currency)* · `landlord\|renter (session-laws/2026)` **0** *(currency)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `residential rental unit (title01)` **23** · `more burdensome\|less favorable\|less favourable` **12** *(known positive for the phrase shape — all Titles 9, 13, 26, 27, 37; none landlord-tenant)*

**`lease-type-size`** (Absent) — `typeface` **0** *(term)* · `10-point\|12-point\|8-point` **0** *(hyphenated numeral style — Wyoming writes 'ten (10) point')* · `type size` **9** *(term — 0 in Titles 1 and 34)* · `point type` **5** *(statute's own style — 0 in Titles 1 and 34)* · `point font` **3** *(variant — 0 in Titles 1 and 34)* · `boldface` **13** *(term — 0 in Titles 1 and 34)* · `bold face` **2** *(two-word spelling — Title 29 only)* · `capital letters` **19** *(term — 0 in Titles 1 and 34)* · `legible` **36** *(term — 0 in Title 1)* · `conspicuous` **166** *(term — Title 1 hits are physical posting, not print format)* · `received in evidence` **17** *(evidentiary-sanction shape — no lease print rule)* · `admissible in evidence` **17** *(evidentiary-sanction shape)* · `shall not be.{0,60}evidence` **26** *(evidentiary-sanction shape, proximity)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `rental agreement shall` **3** *(known positive — all Title 1; locates the only content duty, § 1-21-1207)*

**`liquidated-damages`** (Absent) — `liquidated damages (title34)` **0** *(0 in Title 34 — consistent with the UCC having been renumbered out to W.S. 34.1)* · `penalty clause` **0** *(everyday term)* · `liquidated` **39** *(shorter root form)* · `actual damages` **53** *(contrasting term — present, none landlord-tenant)* · `reasonable in light of` **2** *(statutory test phrase — one is § 1-21-1203(d) repair costs, not damages)* · `unconscionable` **23** *(term — all Title 40 consumer credit code; no general unconscionability statute)* · `34\.1-2-718\|34\.1-2A-504\|34\.1-2-719` **0** *(UCC sections — absent because Title 34.1 is not in this corpus)* · `Renumbered by order of management council` **527** *(all in Title 34 — proves the UCC chapter is stubs only)* · `34\.1-` **76** *(cross-references to the missing title, from 12 other titles)* · `1-21-1208 / 1-21-1202 / 40-14-248 / 40-14-508 (session-laws)` **0** *(currency — 0 each across 2025 and 2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — phrase matching survives PDF line wraps)* · `liquidated damages` **14** *(second multi-word positive — the exact phrase IS findable; all 14 located and none is a lease provision)*

**`lockout-for-rent-delinquency`** (Absent) — `lockout` **3** *(excluded - Titles 27 (labor lockout) and 31)* · `lock ?out` **3** *(spaced variant, same hits)* · `chang(e\|ing) the locks` **0** *(everyday term, both inflections)* · `change the lock` **0** *(singular)* · `exclude the tenant` **0** *(statute's likely verb)* · `self-?help` **0** *(term of art, both spellings)* · `forcible detainer` **0** *(as a standalone phrase)* · `shut off[^.]{0,40}utilit` **0** *(proximity, order A)* · `utilit[^.]{0,40}shut off` **0** *(proximity, order B)* · `interrupt[^.]{0,40}(service\|utilit)` **9** *(none landlord-tenant)* · `\block (Title 1 scope)` **1** *(the single hit IS § 1-21-1403(a) - proves no other lock power in Title 1)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `forcible entry` **18** *(KNOWN POSITIVE, multi-word - T1 x10, T5 x3, T6 x3, T20 x2)*

**`meter-conservation-charge`** (Absent) — `conservation (charge\|improvement)` **8** *(statute's term; all Title 9 program)* · `energy conservation` **13** *(everyday term; all Title 9)* · `weatheriz` **5** *(stem; all § 42-2-501 LIHEAP)* · `energy efficien` **6** *(stem; none a rental charge)* · `conservation.{0,100}meter` **0** *(proximity order A)* · `meter.{0,100}conservation` **3** *(proximity order B; none a utility charge)* · `rent deduction` **0** *(remedy term)* · `deduct.{0,100}\brent\b` **0** *(remedy, verb form, word-bounded)* · `conservation (Title 37 scope)` **3** *(utility title; none a conservation charge)* · `surcharge (Title 37 scope)` **1** *(§ 37-18-102 low-carbon mechanism only)* · `cite 42-2-501 session-laws` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `energy conservation` **13** *(multi-word known positive)*

**`meth-disclosure`** (Absent) — `disclos.{0,250}(clandestine\|methamphetamine)` **0** *(proximity order 1 — no meth disclosure duty anywhere)* · `(clandestine\|methamphetamine).{0,250}disclos` **0** *(proximity order 2)* · `(clandestine\|methamphetamine\|contaminat).{0,300}(tenant\|renter\|lessee\|lease\|rental)` **14** *(all inspected and excluded — 'lease' inside 'release')* · `(tenant\|renter\|lessee\|lease\|rental).{0,300}(clandestine\|methamphetamine)` **6** *(reverse order; all inspected and excluded)* · `illegal drug (lab\|manufactur)` **0** *(everyday term variant)* · `methamphetamine` **24** *(term is well represented (Titles 6, 9, 35 and 2025 SF0009))*
  
**control** `zxqvwomble` **0**  ·  **known positive** `clandestine laboratory operation` **29** *(multi-word known positive)* · `uninhabitable or contaminated` **7** *(multi-word known positive from § 35-9-156(d))*

**`military-air-zone-disclosure`** (Absent) — `accident potential zone\|clear zone\|noise zone` **0** *(sister-state terms of art)* · `airport (zoning\|hazard\|influence)` **0** *(term)* · `airport hazard` **0** *(model-act phrase)* · `airport approach` **0** *(model-act phrase)* · `military impact` **0** *(sister-state term)* · `avigation` **22** *(TRAP — all are the tail of 'navigation')* · `\bavigation` **0** *(same term with word boundary — the true zero)* · `zoning.{0,80}airport` **0** *(proximity, order A)* · `airport.{0,80}zoning` **1** *(proximity, REVERSE order — read, § 10-5-301, not a disclosure)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `military (installation\|base\|airport)` **16** *(multi-word known positive)* · `F\.E\. Warren\|Warren Air Force` **2** *(multi-word known positive)*

**`mold-disclosure`** (Absent) — `\bmold\b` **0** *(corpus-wide, word boundary on the short word)* · `\bmould\b` **0** *(corpus-wide, British spelling)* · `mildew` **0** *(corpus-wide, everyday term)* · `toxic mold` **0** *(corpus-wide (fixed harness))* · `mold remediation` **0** *(corpus-wide (fixed harness))* · `mold assessment` **0** *(corpus-wide (fixed harness))* · `indoor air quality` **0** *(corpus-wide (fixed harness))* · `dampness` **0** *(corpus-wide)* · `fungus` **2** *(corpus-wide - Title 11 agriculture only)* · `fungi` **8** *(corpus-wide - Title 34's three are 'fungible' digital-asset custody, inspected)* · `moisture` **4** *(corpus-wide - Titles 9, 31, 35, 40, none housing)* · `microbial` **6** *(corpus-wide - none housing)* · `mold(?:.\|\n){0,140}(disclos\|tenan\|rental\|lease\|dwelling)` **0** *(proximity order A, newline-crossing)* · `(disclos\|tenan\|rental\|lease\|dwelling)(?:.\|\n){0,140}\bmold` **0** *(proximity order B, newline-crossing)* · `shall disclose` **1** *(Title 1 (fixed harness) - not mold)* · `written disclosure` **0** *(Title 1 (fixed harness))* · `\bmold` **0** *(currency - session-laws/2025 and /2026 both 0)*
  
**control** `zxqvwomble` **0** *(nonsense control - engine reports true empties)*  ·  **known positive** `\bmolds\b` **3** *(corpus-wide plural - all inspected: obscenity molds, dental molds, ear molds; none fungal. Also serves as the known positive for this shape)* · `disclos` **20** *(known positive, Title 1 - none concerns mold)* · `residential rental unit` **23** *(known positive (fixed harness))* · `Condominium Ownership Act` **1** *(known positive, line-wrap regression check)*

**`nonresident-owner-agent`** (Absent) — `nonresident (owner\|landlord\|lessor)` **12** *(core term - Titles 31/37/39/41 only, none rental housing)* · `non-resident (owner\|landlord\|lessor)` **0** *(hyphenated variant)* · `out-of-state (owner\|landlord)` **0** *(everyday term)* · `nonresident.{0,200}(service of process\|agent)` **25** *(proximity, order A - no landlord-tenant hit)* · `(service of process\|agent).{0,200}nonresident` **19** *(proximity, order B - sole Title 1 hit is the motor-vehicle implied-appointment statute)* · `real property.{0,200}registered agent` **0** *(property-specific agent angle)* · `withhold.{0,200}nonresident` **4** *(withholding angle - Titles 31 and 39, none about rent)* · `(individual\|personal) income tax` **4** *(no Wyoming income tax is imposed)* · `tax on (the )?income` **1** *(sole hit is Wyo. Const. art. 15, § 18, which conditions a future income tax)* · `long.arm` **0** *(everyday term - Wyoming's provision is captioned differently)* · `designate.{0,150}agent.{0,150}(property\|premises\|rental)` **3** *(designation-duty angle - Title 1 hits are §§ 1-21-1208(a), 1-21-1209, which presuppose rather than require an agent)* · `17-28-101` **0** *(currency - 0 in session-laws/2025 and /2026)* · `5-1-107` **0** *(currency - 0 in session-laws/2025 and /2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `registered agent` **270** *(known positive - 240 in Title 17, located § 17-28-101)* · `agent for service of process` **47** · `\bagent\b` **54** *(known positive, Title 01)*

**`notice-service-fee`** (Absent) — `notice fee` **2** *(exact term - both Title 17 business organizations)* · `posting fee` **0** *(variant - absent)* · `service fee` **13** *(term - none landlord-tenant)* · `cost of service` **8** *(everyday phrasing - none landlord-tenant)* · `sheriff.s fee` **1** *(apostrophe both ways - Title 29 liens only)* · `notice.*fee\|fee.*notice` **67** *(proximity, both word orders - no landlord notice charge)* · `1-21-10 (session-laws/2025 + /2026)` **0** *(currency - no 2025 or 2026 act)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `service of notice` **25** *(known positive - 4 in Title 1, none chargeable)* · `rental agreement` **37** *(known positive - pattern shape matches)*

**`notice-to-vacate-additional-terms`** (Absent) — `notice to vacate` **0** *(the Kansas phrase does not exist in Wyoming law)* · `intent to vacate` **0** *(term variant)* · `additional terms` **2** *(Titles 9 and 17 — neither landlord-tenant)* · `notice to quit` **1** *(§ 1-21-1003 — read in full, not relied on as a heading)* · `uninhabitable\|unfit for habitation` **12** *(11 in Title 35, 1 in Title 1 (§ 1-40-208(a), crime victims, cross-referencing § 35-9-156(d)))* · `1-21-120 (session-laws)` **0** *(currency)* · `landlord\|renter (session-laws/2026)` **0** *(currency)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `boldface\|bold face\|bold type` **22** *(known positive — Wyoming does use type-format mandates elsewhere; the one Title 1 hit is § 1-16-603(a), structured settlements)* · `point type\|10-point\|ten \(10\) point` **16** *(known positive in Wyoming's own number style with escaped parentheses — none landlord-tenant)* · `alteration.{0,60}vacate\|vacate.{0,60}alteration` **1** *(proximity, both word orders — the single hit is § 34-12-107 on vacating platted streets, a false positive, excluded)*

**`ordnance-demolition-meter-disclosures`** (Absent) — `ordnance` **0** *(ORDNANCE strand — statute's own word, absent corpus-wide)* · `unexploded` **0** *(everyday term)* · `munitions` **0** *(everyday term, plural)* · `military ordnance` **0** *(multi-word variant)* · `ordnance location` **0** *(the California statutory phrase)* · `explosive ordnance` **0** *(multi-word variant)* · `former military` **0** *(everyday term)* · `demolition` **45** *(DEMOLITION strand — subject present and findable)* · `demolish` **8** *(verb form)* · `demolition.{0,250}(tenant\|renter\|lessee\|rental)` **0** *(proximity, order 1)* · `(tenant\|renter\|lessee\|rental).{0,250}demolition` **1** *(proximity, order 2 — read; it is § 16-7-102(a), relied on in the row)* · `notice to vacate.{0,200}demol` **0** *(proximity with the landlord-facing verb)* · `shared meter` **0** *(METER strand — the California statutory term)* · `shared utility` **0** *(variant)* · `submeter` **0** *(everyday term)* · `single meter` **0** *(variant)* · `individually metered` **0** *(variant)* · `ratio utility` **0** *(industry term (RUBS))* · `master meter` **4** *(term — all Title99 Gillette water pipeline, excluded)* · `common area.{0,200}meter` **0** *(proximity, order 1)* · `meter.{0,200}common area` **0** *(proximity, order 2)* · `37-1-101 (session-laws)` **2** *(currency — both opened and read; 2025 HB0192 and 2026 SF0099 only CROSS-REFERENCE the section, neither amends it)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — phrase matching survives PDF line wraps)*

**`owner-move-in-reservation`** (Absent) — `owner occupancy` **0** *(subject term)* · `intends? to occupy` **0** *(statutory phrasing elsewhere, singular and plural)* · `owner.{0,40}occupy.{0,60}dwelling` **0** *(proximity)* · `personal use.{0,40}owner` **0** *(alternate framing)* · `immediate family.{0,60}occup` **0** *(relative-occupancy framing)* · `good cause.{0,60}evict` **0** *(just-cause regime check)* · `cite 34-2-128 / 34-2-129 / 1-21-1001 / 1-21-1003, session-laws 2025+2026` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `just cause` **25** *(none a tenancy provision; multi-word known positive)* · `relocation assistance` **12** *(Title 16 agency act only; multi-word known positive)* · `rental agreement` **37** *(multi-word known positive)*

**`parking-rules-notice`** (Absent) — `\btow(ed\|ing)?\b` **130** *(word-bounded; 104 Title 31)* · `towing` **67** *(gerund)* · `(sign\|signage\|posted).{0,140}\btow(ed\|ing)?\b` **5** *(proximity order A, word-bounded; none a signage requirement)* · `\btow(ed\|ing)?\b.{0,140}(sign\|signage\|posted)` **6** *(proximity order B, word-bounded)* · `tow.{0,140}(sign\|signage\|posted)` **158** *(SEARCH TRAP — unbounded 'tow' matches 'town'; discarded)* · `immobiliz` **0** *(booting term)* · `boot(ed\|ing)?\b` **0** *(everyday term)* · `parking` **84** *(subject term; 4 in Title 1, none landlord-tenant)* · `parking (space\|lot\|area\|rules)` **26** *(compound; none landlord-tenant)* · `abandoned (motor )?vehicle` **31** *(statute's own term)* · `private property.{0,120}(tow\|vehicle)` **6** *(proximity order A)* · `(tow\|vehicle).{0,120}private property` **12** *(proximity order B)* · `(handicap\|disab\|accessible).{0,80}parking` **10** *(accessible parking)* · `cite 31-5-111 / 31-13-109 session-laws` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `towing and recovery service` **15** *(multi-word known positive)*

**`part5-nonwaivable`** (Absent) — `shall not be waived` **5** *(corpus-wide; exactly 1 in Title 1 = § 1-21-1304)* · `may not be waived` **3** *(corpus-wide; 1 in Title 1 = § 1-16-607(a), excluded)* · `void as (contrary to\|against) public policy` **0** *(the URLTA/Colorado formulation — absent)* · `contrary to public policy` **5** *(corpus-wide; 0 in Title 1)* · `unenforceable` **46** *(corpus-wide; 0 in Title 1)* · `waive` **882** *(term count proving the engine finds waiver language freely (35 in Title 1))*
  
**control** `zxqvwomble` **0**  ·  **known positive** `explicit written agreement` **1** *(multi-word known positive — the § 1-21-1202(d) phrase)*

**`pest-control-notice`** (Absent) — `fumigat` **0** *(term — the treatment a notice statute would name)* · `vermin` **0** *(term — the older habitability vocabulary)* · `bed bug` **0** *(term — multi-word, the commonest modern trigger)* · `structural pest` **0** *(term — the California licensing category)* · `exterminat` **2** *(term — both Title 11 agriculture, excluded)* · `pest control` **28** *(term — ZERO in Title 1; all weed-and-pest districts, taxation and 2026 appropriations; excluded)* · `\bpests?\b` **124** *(term, word-bounded, singular and plural — none in Title 1)* · `rodent` **15** *(term — Titles 11 and 35 only)* · `insect` **59** *(term — none in Title 1)* · `pesticide.{0,200}notif` **5** *(proximity, order 1 — all read: §§ 35-7-358, 35-7-374(c), 35-7-375)* · `notif.{0,200}pesticide` **4** *(proximity, REVERSE order — same sections)* · `pesticide.{0,200}\bnotice` **1** *(proximity, order 1, alternate noun)* · `\bnotice.{0,200}pesticide` **2** *(proximity, REVERSE order)* · `pesticide.{0,150}(occupant\|tenant\|resident\|dwelling)` **1** *(proximity, order 1 — read; § 35-7-360(c)-(d), nonresident applicator licensing, excluded)* · `(occupant\|tenant\|resident\|dwelling).{0,150}pesticide` **1** *(proximity, REVERSE order — same hit, excluded)* · `cite 35-7-374 / 35-7-375 / 35-7-354 / 1-21-1203, session-laws 2025 and 2026` **0** *(currency, anchored — 0 anchored and 0 unanchored for each)*
  
**control** `zxqvwomble` **0** *(NONSENSE CONTROL — engine reports true empties)*  ·  **known positive** `commercial applicator` **8** *(KNOWN POSITIVE, multi-word — all 8 in Title 35)* · `pesticide` **130** *(KNOWN POSITIVE — 111 in Title 35, so the residential zero is real)*

**`pet-eviction-fact-sheet`** (Absent) — `fact sheet` **0** *(corpus-wide (fixed harness))* · `factsheet` **0** *(corpus-wide, closed-up variant)* · `\bpets\b` **5** *(corpus-wide plural, word boundary - all inspected, none landlord-tenant)* · `pet deposit` **0** *(corpus-wide (fixed harness))* · `companion animal` **0** *(corpus-wide (fixed harness))* · `disclos` **20** *(Title 1 - the Act's only disclosure is 1-21-1207, not pet-specific)* · `written disclosure` **0** *(Title 1 (fixed harness))* · `fact sheet` **0** *(currency - session-laws/2025 and /2026 both 0)* · `assistance animal` **16** *(currency - hits in session-laws/2025/SF0147, inspected; already codified)*
  
**control** `zxqvwomble` **0** *(nonsense control - engine reports true empties)*  ·  **known positive** `\bpet\b` **22** *(corpus-wide, word boundary - all inspected, Titles 6, 11, 27, 35; none landlord-tenant. Also the known positive for this shape)* · `assistance animal` **16** *(corpus-wide positive - Title 35 and 2025 SF0147; located 35-13-201(c), outside Title 1)* · `service animal` **14** *(corpus-wide positive, Title 35 and SF0147)* · `emotional support` **2** *(corpus-wide positive - inside the 35-13-205(a)(iv) definition)* · `residential rental unit` **23** *(known positive (fixed harness))* · `Condominium Ownership Act` **1** *(known positive, line-wrap regression check)*

**`plain-language`** (Absent) — `plain language (whole corpus)` **2** *(both read; insurance and tax, not contracts)* · `plain English (whole corpus)` **0** *(everyday variant)* · `consumer contract (whole corpus)` **0** *(statute's likely term)* · `common everyday (whole corpus)` **0** *(Plain Language Contract Act phrasing)* · `Flesch (whole corpus)` **0** *(readability-score term)* · `readability (whole corpus)` **1** *(Title 26 insurance only)* · `readable (whole corpus)` **12** *(Title 1 = 0)* · `clear and conspicuous (whole corpus)` **17** *(Title 1 = 0)* · `captioned (whole corpus)` **5** *(Title 1 = 1, not a lease)* · `understandable (whole corpus)` **7** *(Title 1 = 0)* · `1-21-120 (session-laws 2025+2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `legible (whole corpus)` **36** *(known positive — format rules match where they exist)* · `type size\|point type (whole corpus)` **14** *(known positive — Title 1 = 0)*

**`plain-language-consumer-statement`** (Absent) — `plain language` **2** *(core term - Titles 26 and 39, neither about leases or consumer contracts)* · `plain English` **0** *(everyday variant)* · `[Ff]lesch` **0** *(the readability test other states name)* · `clear and coherent` **0** *(the statutory standard other states use)* · `everyday words` **0** *(the statutory standard other states use)* · `readab` **13** *(stem - no hit imposes readability on a lease or consumer contract)* · `understandable` **7** *(everyday term - none about leases)* · `construed against` **0** *(no statutory contra proferentem rule)* · `ambiguit` **3** *(Titles 9 and 34 - no lease construction rule)* · `40-12-10 (session laws)` **0** *(currency - 0 in session-laws/2025 and /2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `readab (Title 26)` **1** *(known positive - located § 26-22-105(h), proving Wyoming does impose readability standards elsewhere and the pattern shape finds them)* · `[Cc]onsumer [Pp]rotection [Aa]ct` **3** · `40-12-10` **26** *(known positive - located the Wyoming Consumer Protection Act)* · `deceptive trade practice` **18** · `\bmerchandise\b` **89** *(known positive - 43 in Title 40)*

**`political-access`** (Absent) — `political sign` **0** *(exact term - absent)* · `political literature` **0** *(variant - absent)* · `apartment\|multiple.unit\|door to door\|door.to.door (scoped title22)` **0** *(election code never mentions residential buildings)* · `solicit.*tenant\|tenant.*solicit` **18** *(proximity, both word orders - none about political access)* · `campaign material` **4** *(term - all Title 22, public property only)* · `free speech\|freedom of speech` **4** *(term - none imposing a private duty)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `canvass` **164** *(known positive - election canvassing boards)* · `petition.*circulat\|circulat.*petition` **29** *(known positive - pattern shape matches)*

**`portable-cooling-device`** (Absent) — `air conditioning\|air-conditioning\|air conditioner` **7** *(Titles 9, 16, 26, 34, 35, 39 and 2025 HB0086; the Title 34 hit is the Condominium Ownership Act common-elements definition)* · `cooling` **4** *(Titles 30, 35, 40 — 0 in Title 1)* · `swamp cooler\|evaporative cool` **0** *(regional term variant)* · `window unit` **0** *(everyday term)* · `extreme heat\|excessive heat` **0** *(no heat-emergency rule)* · `maximum temperature\|minimum temperature` **0** *(no temperature standard of any kind)* · `portable (title01)` **0** *(scoped)* · `portable\|cooling\|air condition (title34)` **6** *(scoped — all condominium or unrelated)* · `1-21-120 (session-laws)` **0** *(currency)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `portable` **143** *(known positive corpus-wide — but 0 in Title 1)* · `residential rental unit (title01)` **23**

**`portable-solar`** (Absent) — `solar.{0,100}(lease\|tenant\|renter)` **0** *(proximity, order A)* · `(lease\|tenant\|renter).{0,100}solar` **0** *(proximity, order B)* · `covenant.{0,150}solar` **0** *(proximity, order A — no anti-restriction provision)* · `solar.{0,150}covenant` **0** *(proximity, order B)* · `solar easement` **0** *(term)* · `restrict.{0,100}solar` **3** *(proximity — all Wyo. Stat. § 34-22-104's own access restrictions)* · `plug-in` **16** *(the Virginia/Vermont term — all electric-vehicle and tax, none solar)* · `photovoltaic` **1** *(term — Wyo. Stat. § 34-22-102(a)(i)(D))* · `solar energy system` **2** *(term — both Wyo. Stat. § 34-22-105(a))* · `solar` **99** *(root term — 0 in Title 1)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `net metering` **8** *(known positive — locates Wyo. Stat. §§ 37-16-101 to 37-16-104)*

**`possession-bond`** (Absent) — `possession bond` **0** *(the Tennessee/Texas term)* · `bond for possession` **0** *(word-order variant)* · `bond to obtain possession` **0** *(variant)* · `landlord.{0,200}bond (title01)` **0** *(DECISIVE proximity, order 1)* · `bond.{0,200}landlord (title01)` **0** *(DECISIVE proximity, order 2)* · `plaintiff.{0,200}bond (title01)` **20** *(proximity, order 1 — inspected; general provisional-remedy bonds, none in the FED article)* · `bond.{0,200}plaintiff (title01)` **12** *(proximity, order 2 — same)* · `bond.{0,150}restitution` **2** *(proximity, order 1 — Title 40, excluded)* · `restitution.{0,150}bond` **2** *(proximity, order 2 — Title 40, excluded)* · `immediate possession` **1** *(term — read and excluded, eminent domain in Title 1 ch. 26)* · `writ of possession` **4** *(term — Title 1 only)* · `supersedeas` **3** *(term — Titles 1 and 27, none in the FED article)* · `undertaking` **129** *(bond synonym — present and findable corpus-wide, none in the FED article)* · `1-21-1007 / -1012 / -1013 / -1014 / -1015 (session-laws)` **0** *(currency — 0 each across 2025 and 2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — phrase matching survives PDF line wraps)* · `writ of restitution` **6** *(second multi-word known positive, inside Title 1, the title searched)*

**`promises-to-repair`** (Absent) — `promise.{0,30}repair` **0** *(proximity, order 1)* · `repair.{0,30}promise` **0** *(proximity, order 2)* · `agrees? to (clean\|repair\|improve)` **0** *(singular and plural, three verbs)* · `before.{0,30}rental agreement is signed` **0** *(uses Wyoming's term, not 'lease')* · `prior to.{0,40}sign` **22** *(eleven titles, none a repair-promise rule)* · `in writing.{0,60}repair` **1** *(Title 40 cure definition)* · `repair.{0,60}in writing` **0** *(reverse order)* · `cite 40-12-102 / 40-12-105 / 40-12-108 / 40-12-109 / 1-23-105, session-laws 2025+2026` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `completion date` **6** *(none a tenancy provision; multi-word known positive)* · `rental agreement` **37** *(multi-word known positive)*

**`prop65-rental-warning`** (Absent) — `carcinogen` **3** *(Prop 65 core term; all occupational-disease or cleanup standards)* · `reproductive (harm\|toxic)` **0** *(Prop 65 core term, both forms)* · `known to the state` **0** *(Prop 65 warning phrase)* · `chemical.{0,100}warning` **0** *(proximity order A)* · `warning.{0,100}chemical` **0** *(proximity order B)* · `birth defects` **0** *(warning language)* · `toxic substance` **5** *(alternative term; none a housing warning)* · `hazardous substance.{0,120}(dwelling\|tenan\|rent)` **0** *(proximity to housing)* · `lead.?based paint` **0** *(both spellings; no state lead rule)* · `\bradon\b` **0** *(word-bounded)* · `mold` **8** *(none a housing standard)* · `methamphetamine.{0,120}(propert\|dwelling\|contaminat)` **2** *(both § 6-4-405, criminal)* · `\basbestos\b` **21** *(all §§ 1-1-131 et seq. successor liability)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `toxic substance` **5** *(multi-word known positive)*

**`property-tax-rent-disclosure`** (Absent) — `property tax.{0,250}(rent\|renter\|tenant\|lease)` **11** *(proximity order 1; all inspected and excluded)* · `(rent\|renter\|tenant\|lease).{0,250}property tax` **9** *(proximity order 2; all inspected and excluded)* · `portion of rent` **0** *(the phrase such a statute would use)* · `rent constituting property tax` **0** *(circuit-breaker phrasing)* · `certificate of rent paid` **0** *(renter-credit phrasing)* · `renter.{0,150}(credit\|refund\|rebate)` **3** *(all deposit or prorated-rent refunds in Title 1)* · `39-13-107 (anchored cite, session-laws/2025 and /2026)` **1** *(currency check — the single 2025 hit is a cross-reference in HB0038 amending § 39-13-108(c)(ii)(B), not an amendment to § 39-13-107)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `property tax` **164** *(multi-word known positive)* · `ad valorem` **216** *(multi-word known positive)*

**`protected-class-inquiry-ban`** (Absent) — `inquir [title40]` **3** *(root form; all read, none in the fair housing chapter)* · `elicit [title40]` **0** *(model-act verb)* · `record or file.{0,80}(race\|color\|religion) [title40]` **0** *(proximity, order A)* · `(race\|color\|religion).{0,80}(record\|file\|inquiry) [title40]` **0** *(proximity, REVERSE order)* · `written or oral inquiry [title40]` **0** *(model-act phrase)* · `make any (written or oral )?inquiry` **0** *(corpus-wide)* · `inquiry.{0,80}(race\|color\|religion\|disabilit)` **1** *(corpus-wide order A — Title 28 subpoena, read)* · `(race\|color\|religion\|disabilit).{0,80}inquiry` **0** *(corpus-wide REVERSE order)* · `shall not (ask\|inquire\|require).{0,100}(race\|color\|religion\|disabilit\|national origin)` **0** *(corpus-wide)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `application form [title40]` **5** *(multi-word known positive)*

**`recycling-notice`** (Absent) — `recycl` **0** *(Title 1 - no recycling term in the landlord-tenant law)* · `recycling notice` **0** *(corpus-wide phrase (fixed harness))* · `refuse collection` **0** *(corpus-wide phrase (fixed harness))* · `notify .{0,60}recycl` **0** *(corpus-wide proximity with the likely verb)* · `recycl\w*(?:.\|\n){0,160}(tenan\|renter\|landlord\|rental\|dwelling\|lease)` **0** *(proximity order A, newline-crossing)* · `(tenan\|renter\|landlord\|rental\|dwelling\|lease)(?:.\|\n){0,160}recycl` **3** *(proximity order B - all inspected, Title 30 oil and gas, 'lease' = oil and gas lease)* · `composting` **6** *(corpus-wide - Title 35 only, facility rules)* · `waste diversion` **2** *(corpus-wide (fixed harness) - Title 35 only)* · `solid waste` **284** *(corpus-wide (fixed harness) - facility permitting and local government, no landlord duty)* · `garbage` **2** *(Title 1 - exactly 1-21-1204(a)(ii) and (a)(viii))* · `recycl` **0** *(currency - session-laws/2025 and /2026 both 0)*
  
**control** `zxqvwomble` **0** *(nonsense control - engine reports true empties)*  ·  **known positive** `recycl` **33** *(known positive corpus-wide - Title99 and Titles 27, 30, 31, 35; the word exists, just not in Title 1)* · `garbage` **30** *(known positive corpus-wide, eight titles)* · `waste` **12** *(Title 1, known positive)* · `residential rental unit` **23** *(known positive (fixed harness))* · `Condominium Ownership Act` **1** *(known positive, line-wrap regression check)*

**`redemption`** (Absent) — `redemption` **50** *(Title 1 only; every hit mapped to a section, all in ch. 15, 17, 18 execution/sale redemption)* · `redeem` **12** *(Title 1 only; same chapters)* · `right of redemption` **4** *(all Title 1 ch. 18)* · `redeem[^.]{0,200}(tenan\|renter\|lease\|possession)` **1** *(proximity order 1; Title 34 tax deeds)* · `(tenan\|renter)[^.]{0,200}redeem` **0** *(proximity order 2)* · `reinstate[^.]{0,150}(lease\|tenancy\|rental)` **0** *(alternate term)* · `pay(ment)? of (all )?rent[^.]{0,150}(before\|prior to\|restitution)` **0** *(redemption-by-payment phrasing)* · `partial payment[^.]{0,200}rent` **0** *(reservation-wording rule absent)* · `cure[^.]{0,150}(default\|nonpayment\|breach)` **31** *(0 in Title 1)* · `waive[rd]?[^.]{0,150}(forfeiture\|acceptance of rent)` **1** *(Title 35, off point)* · `accept\w*[^.]{0,150}rent[^.]{0,100}waiv` **0** *(waiver rule not codified)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `writ of restitution` **6** *(known positive, multi-word)* · `forcible entry and detainer` **5** *(known positive, multi-word)*

**`religious-cultural-display`** (Absent) — `mezuzah (whole corpus)` **0** *(statute's own term elsewhere)* · `doorpost (whole corpus)` **0** *(everyday term)* · `(religious\|cultural).{0,200}(renter\|tenant\|dwelling\|rental unit\|lease) (whole corpus)` **41** *(proximity word order A — none in Title 1; Title 34 hit is a charitable gift)* · `(renter\|tenant\|dwelling\|rental unit\|lease).{0,200}(religious\|cultural) (whole corpus)` **39** *(proximity word order B — none in Title 1)* · `display.{0,150}(dwelling\|rental unit\|renter\|tenant) (whole corpus)` **1** *(Title 16, not landlord-tenant)* · `(dwelling\|rental unit\|renter\|tenant).{0,150}display (whole corpus)` **0** *(reverse order)* · `flag of the United States / United States flag (whole corpus)` **1** *(Title 8 state-flag proportions only — no tenant flag right)* · `40-26-1 / 1-21-120 (session-laws 2025+2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `religious (whole corpus)` **258** *(known positive — term matches across 27 titles)* · `display (whole corpus)` **424**

**`rent-concession`** (Absent) — `concession` **11** *(core term - Titles 35/36 and SF0001, all vendor stands or state-land leases)* · `free rent` **0** *(everyday term)* · `rent (discount\|credit\|rebate\|abatement)` **0** *(proximity, order A)* · `(discount\|credit\|rebate\|abatement).{0,120}\brent\b` **0** *(proximity, order B, word boundary on short word)* · `net effective` **8** *(advertising-disclosure angle - Titles 15 and 21, tax and school funding yields)* · `inducement.{0,150}(lease\|rent)` **1** *(Title 40, not a concession rule)* · `liquidated damages` **14** *(clawback-characterization angle - the 2 Title 1 hits are garnishment and structured settlements)* · `penalty.{0,150}(lease\|rent\|tenant)` **20** *(clawback-characterization angle - the 2 Title 1 hits are structured settlements)* · `1-21-12` **0** *(currency - 0 in session-laws/2025 and /2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `\brent\b` **27** *(known positive, Title 01)*

**`rent-control`** (Absent) — `rent control` **0** *(exact term - absent in both directions)* · `rent stabiliz` **0** *(stem, catches stabilization/stabilizing - absent)* · `maximum rent` **0** *(variant - absent)* · `rent increase` **0** *(everyday term - absent, no notice rule either)* · `price gouging` **0** *(emergency price term - absent)* · `excessive price\|unconscionable price` **0** *(variants - absent)* · `rental registration / rental license / landlord registr` **0** *(no statewide program and no limit on local ones)* · `moratorium` **7** *(term - Titles 26, 35, 42, none rental)* · `preempt` **72** *(reviewed by title - nearest are § 15-1-130, § 35-9-810, § 35-12; none rental)* · `preempt (session-laws/2025 + /2026)` **7** *(currency - credentialing, firearms, wildfire plans, sales tax; none rental)*
  
**control** `emergency.*price\|price.*emergency` **30** *(proximity, both word orders - none a rent or housing price control)* · `zxqvwomble` **0**  ·  **known positive** `local affairs` **2** *(known positive - Wyo. Const. art. 13, § 1(b) home rule)*

**`rent-demand-bar`** (Absent) — `rent escrow` **0** *(term)* · `repair and deduct` **0** *(term)* · `abate.{0,80}rent` **0** *(proximity order 1)* · `rent.{0,80}abate` **0** *(proximity order 2)* · `unfit for human habitation` **0** *(term)* · `may not (demand\|collect).{0,60}rent` **0** *(statute's likely verbs)* · `(demand\|collect).{0,60}rent.{0,60}prohibit` **0** *(proximity)* · `rental registration` **0** *(term)* · `withhold.{0,80}rent` **9** *(proximity order 1 - Title 1 hit is 'withhold consent to enter')* · `rent.{0,80}withhold` **5** *(proximity order 2 - child support and school funding only)* · `deduct.{0,80}rent` **4** *(Title 1 hit is § 1-32-213 occupying claimant)* · `certificate of occupancy` **7** *(all read; § 35-9-108, no rent consequence)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `rent improperly retained or collected` **present at § 1-21-1206(c)**

**`rent-escalation`** (Tagged) — `rent increase\|increase in rent\|increase the rent` **0** *(all three phrasings, corpus-wide)* · `maximum rent` **0** *(no rent ceiling)* · `escalat` **13** *(Titles 9, 15, 35, 39 and 2025 HB0086 — none landlord-tenant)* · `notice of.{0,30}increase` **2** *(proximity — Titles 13 and 26 only)* · `retaliat (title01 / title34 / title40)` **0** *(scoped — no landlord-retaliation statute anywhere it could live)* · `coerce\|intimidat\|interfere (title40)` **10** *(located § 40-26-144, the only interference protection a Wyoming tenant has)* · `1-21-120 (session-laws)` **0** *(currency)* · `landlord\|renter (session-laws/2026)` **0** *(currency)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `retaliat` **32** *(known positive corpus-wide — but 0 in Title 1, 0 in Title 34, 0 in Title 40; the Title 35 hit is § 35-2-1306(a), long-term care electronic monitoring)* · `consumer price index` **9** *(known positive for multi-word phrase — none tied to rent)*

**`rent-installments`** (Tagged) — `rent is due` **0** *(statute's own likely words)* · `periodic rent` **0** *(term)* · `when rent is payable` **0** *(the Rhode Island formulation)* · `rent shall be payable` **0** *(variant phrasing)* · `installment` **287** *(root term — only 5 in Title 1, none about rent)* · `equal monthly installments` **10** *(the default-rule formulation — none in Title 1, none about rent)* · `partial payment` **20** *(term — 7 in Title 1, all non-rent (§§ 1-1-108, 1-3-119, 1-40-113, judgment satisfaction))* · `rent.{0,80}install` **9** *(proximity — Titles 13, 31, 35, 40; none residential)* · `apportioned` **113** *(the day-by-day apportionment shape — only 1 in Title 1, not a rent rule)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `three \(3\) days after it is due` **1** *(known positive, parentheses escaped — Wyo. Stat. § 1-21-1002(a)(i))*

**`rent-receipts`** (Absent) — `rent receipt` **0** *(multi-word term)* · `presum[^.]{0,60}paid` **0** *(the PR/Guam presumption)* · `presumption of payment` **0** *(term of art)* · `receipt[^.]{0,50}rent` **7** *(proximity, order A - T1 x2 excluded, both 'after receipt of' a notice)* · `rent[^.]{0,50}receipt` **11** *(proximity, order B - same exclusion)* · `written receipt` **3** *(excluded - T14, § 34-13-121 custodial property, 2026 SF0010)* · `cash payment` **8** *(none landlord-tenant)* · `acquittance` **5** *(archaic term, none landlord-tenant)* · `legal tender` **23** *(no rent payment-method rule)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `money order` **27** *(KNOWN POSITIVE, multi-word; no rent rule)* · `receipt for` **55** *(KNOWN POSITIVE, multi-word, 22 documents)*

**`rent-reporting`** (Absent) — `rent reporting` **1** *(Title 9, mineral royalty reporting; not tenancy)* · `credit reporting agency` **0** *(everyday term)* · `credit bureau` **0** *(everyday term)* · `positive rent` **0** *(CA/MD statutory term)* · `rental payment.{0,60}report` **0** *(proximity, order 1)* · `report.{0,60}rental payment` **0** *(proximity, order 2)* · `cite 40-12-501 / 40-12-502 / 40-12-505, session-laws 2025+2026` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `consumer reporting agency` **54** *(statutory term; none regulates landlord reporting; multi-word known positive)* · `tenant screening` **2** *(both § 40-12-505 exceptions; multi-word known positive)*

**`rental-inspection`** (Absent) — `rental inspection` **0** *(exact program term)* · `housing inspector` **0** *(the official such a statute would name)* · `administrative warrant` **0** *(the entry mechanism such a statute would use)* · `rental (licen\|registr)` **0** *(no rental licensing or registration)* · `landlord (licen\|registr)` **0** *(role-based variant)* · `inspect.{0,200}(dwelling\|rental\|residential)` **10** *(proximity order 1; all inspected and excluded)* · `(dwelling\|rental\|residential).{0,200}inspect` **3** *(proximity order 2; all inspected and excluded)* · `certificate of occupancy` **7** *(none is a periodic rental requirement)* · `right of entry` **10** *(none is a housing inspector's entry right)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `health officer` **158** *(multi-word known positive)*

**`renters-insurance-rules`** (Absent) — `renter.s insurance` **0** *(everyday term, apostrophe both ways)* · `force.?placed\|forced place` **0** *(term of art, both spellings)* · `tenant.{0,40}insurance` **1** *(proximity, order A — Title 2 probate, read)* · `insurance.{0,40}tenant` **0** *(proximity, REVERSE order)* · `liability insurance.{0,80}(lease\|rental\|dwelling)` **4** *(order A — all rental-car / mechanical breakdown, read)* · `(lease\|rental\|dwelling).{0,80}liability insurance` **1** *(REVERSE order — same, read)* · `homeowner.?s? insurance\|renters policy\|tenant homeowners` **5** *(all §§ 26-23-106/107, owner-side, read)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `insurable interest` **27** *(multi-word known positive)* · `sell, solicit or negotiate` **7** *(multi-word known positive — § 26-9-203)*

**`repair-escrow-exemption-notice`** (Absent) — `repair and deduct` **0** *(term, multi-word — the remedy's own name)* · `escrow` **198** *(term — 19 in Title 1, sampled and read: structured settlements and § 1-40-303 crime-profits escrow; no housing escrow)* · `four \(4\) or fewer` **0** *(term — Wyoming's number style, parentheses escaped)* · `three \(3\) or fewer` **1** *(term — Title 17 only; no unit-count exemption in housing)* · `withhold.{0,80}rent` **9** *(proximity, order 1 — sole Title 1 hit is § 1-21-1205(a)(iii) 'withhold consent to enter'; excluded)* · `rent.{0,80}withhold` **5** *(proximity, REVERSE order — Titles 20 and 21 only)* · `deduct.{0,120}(repair\|rent)` **7** *(proximity, order 1 — Title 1 hits are the §§ 1-21-1207/1208 deposit provisions; excluded)* · `(repair\|rent).{0,120}deduct` **11** *(proximity, REVERSE order — same, plus § 1-32-209 occupying claimant)* · `\bexempt.{0,120}(dwelling unit\|rental unit)` **0** *(proximity, order 1 — the exemption a notice would announce)* · `(dwelling unit\|rental unit).{0,120}\bexempt` **0** *(proximity, REVERSE order)* · `cite 1-21-1202 / 1-21-1203 / 1-21-1206, session-laws 2025 and 2026` **0** *(currency, anchored — 0 anchored and 0 unanchored for each)*
  
**control** `zxqvwomble` **0** *(NONSENSE CONTROL — engine reports true empties)*  ·  **known positive** `notice to repair or correct condition` **1** *(KNOWN POSITIVE, multi-word (six words) — the exact § 1-21-1206(b) wording)* · `due diligence` **30** *(KNOWN POSITIVE, multi-word — 6 in Title 1, including § 1-21-1206(c))*

**`rights-responsibilities-guide`** (Absent) — `pamphlet (Title 1)` **0** *(term)* · `brochure (Title 1)` **0** *(everyday term)* · `handbook (Title 1)` **0** *(everyday term)* · `rights and responsibilities (Title 1)` **0** *(topic phrase)* · `summary of (the )?(act\|law\|rights) (Title 1)` **0** *(alternate phrasing)* · `informational (booklet\|statement\|packet) (Title 1)` **0** *(alternate phrasing)* · `1-21-120 / 40-26-1 (session-laws 2025+2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `pamphlet (whole corpus)` **19** *(known positive — term matches across 10 titles)* · `rights and responsibilities (whole corpus)` **20** *(known positive — Title 40 hit is § 40-26-114, a duty on the agency)*

**`sanitary-code-variance`** (Absent) — `sanitary code` **0** *(exact term - absent, no state sanitary code)* · `housing code` **0** *(synonym - absent)* · `health code` **0** *(synonym - absent)* · `minimum standards.*housing\|housing.*minimum standards` **11** *(proximity, both word orders - none a dwelling sanitary standard)* · `waiver.*code\|code.*waiver` **37** *(proximity, both word orders - no tenant-disclosure duty)* · `1-21-120 (session-laws/2025 + /2026)` **0** *(currency - no 2025 or 2026 act)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `variance` **94** *(known positive - 55 in Title 35; § 35-9-106(c) and § 35-9-121(d) grant variances)* · `building code` **20** · `fire code` **6**

**`security-deposit-interest`** (Absent) — `interest on.{0,60}deposit` **8** *(proximity, order A — Title 1 hit is structured settlements)* · `deposit.{0,60}interest` **113** *(proximity, order B — Title 1 hits are § 1-21-1211(b) and eminent domain)* · `accrued interest` **71** *(term — none in Title 1)* · `escrow account` **49** *(term — Title 1 hits are structured settlements and eminent domain)* · `federally insured` **12** *(the North Dakota requirement — none in Title 1)* · `passbook` **3** *(rate-benchmark term — none in Title 1)* · `prevailing rate` **5** *(rate-benchmark term — none in Title 1)* · `Federal Reserve` **47** *(defunct-federal-body check — none in Title 1, so no stale peg)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `without interest` **19** *(known positive and express negative — Wyo. Stat. § 1-21-1208(a))* · `ten percent \(10%\) per annum` **14** *(known positive, metacharacters escaped — locates Wyo. Stat. § 1-21-1211(b))*

**`security-devices`** (Absent) — `deadbolt` **0** *(closed-compound form)* · `dead bolt` **0** *(spaced form)* · `peephole` **0** *(everyday term)* · `door viewer` **0** *(the statutory term in other states)* · `keyless` **0** *(Texas statutory term)* · `rekey` **0** *(closed form)* · `re-key` **0** *(hyphenated form)* · `window latch` **0** *(term)* · `sliding door` **0** *(term)* · `change the lock` **0** *(verb phrase, singular)* · `changing the lock` **0** *(gerund form)* · `lock.{0,150}(tenant\|renter)` **0** *(proximity, order 1, word boundary on short word)* · `(tenant\|renter).{0,150}lock\b` **0** *(proximity, order 2, word boundary)* · `door.{0,150}(tenant\|renter)` **0** *(proximity)* · `security device` **23** *(term — all read, all financial surety devices (§ 40-22-106, Title 16 loan collateral), excluded)* · `lock` **462** *(root word — plainly findable corpus-wide)* · `locks` **29** *(plural — the single Title 1 hit is § 1-21-1403)* · `latch` **1** *(Title 35, unrelated)* · `1-21-1203 / -1303 / -1304 / -1403 (session-laws)` **0** *(currency — 0 each across 2025 and 2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — phrase matching survives PDF line wraps)* · `exterior door` **2** *(second multi-word positive — phrase found (columbarium standards), so device phrases of this shape are findable)*

**`senior-housing-work-card`** (Absent) — `work card` **0** *(Nevada statute's own term)* · `sheriff.s card` **0** *(both apostrophe forms)* · `senior housing` **0** *(everyday term)* · `age-restricted` **0** *(everyday term)* · `55 or older` **0** *(numeral style)* · `housing for older persons` **0** *(federal phrase - WY says 'housing for elderly')* · `work permit` **1** *(Title 35 only, excluded)* · `older persons` **1** *(§ 40-12-111 HEADING only - excluded as heading, section then read in full)* · `fifty-five \(55\)` **18** *(statute's number style, parens escaped - T40 x4 are § 40-26-112)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `background check` **97** *(KNOWN POSITIVE, multi-word, 12 docs - none reaches rental staff)* · `criminal history` **230** *(KNOWN POSITIVE, multi-word, 17 docs)* · `fingerprint` **141** *(KNOWN POSITIVE, 16 docs)*

**`sex-offender-disclosure`** (Absent) — `sex offender\|sexual offender` **47** *(term, both forms)* · `registry.{0,100}(disclos\|landlord\|lessor\|rent)` **5** *(proximity, order A — all read)* · `(disclos\|landlord\|lessor\|rent).{0,100}registry` **10** *(proximity, REVERSE order — all read)* · `no duty to disclose\|not required to disclose` **3** *(Titles 2 and 3 only)* · `residency restriction` **0** *(TRAP — Wyoming does not use this phrase; the rule exists)* · `shall not reside.{0,120}(school\|day care\|park)` **0** *(proximity, order A — assumed verb, wrong)* · `(school\|day care\|park).{0,120}shall not reside` **0** *(proximity, REVERSE order)* · `within one thousand` **12** *(subject search that FOUND § 6-2-320)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `sex offender` **44** *(KNOWN POSITIVE (multi-word), 44 hits corpus-wide: proves phrase matching works for this subject across the corpus's PDF line wraps, so the zero results above are true empties rather than the wrap defect fixed 2026-10-24. (Count corrected from a mistyped 86 on the same day it was added.))* · `Wyoming Fair Housing Act` **1** *(KNOWN POSITIVE (multi-word, line-wrap regression check))*

**`sfr-occupancy-disclosure`** (Absent) — `single-family` **0** *(corpus-wide, hyphenated variant)* · `single family` **0** *(Title 1 and Title 34 both 0 (fixed harness))* · `one-family` **0** *(corpus-wide - Wyoming writes it 'one (1) and two (2) family dwellings')* · `single family residence` **1** *(corpus-wide - Title 26 insurance only (fixed harness))* · `single family dwelling` **5** *(corpus-wide - Titles 39, 42 and 2025 SF0069, all taxation (fixed harness))* · `family dwelling` **10** *(corpus-wide (fixed harness) - none a lease disclosure)* · `occupancy limit` **0** *(corpus-wide (fixed harness))* · `maximum occupancy` **0** *(corpus-wide (fixed harness))* · `occupancy standard` **0** *(corpus-wide (fixed harness))* · `persons per bedroom` **0** *(corpus-wide (fixed harness))* · `first page` **0** *(Title 1 (fixed harness) - no placement rule)* · `top of the first page` **0** *(corpus-wide (fixed harness))* · `larger than any other` **0** *(corpus-wide (fixed harness) - no relative font rule)* · `point type` **0** *(Title 1 (fixed harness))* · `bold type` **1** *(Title 1 - 1-16-603 structured settlements, inspected)*
  
**control** `zxqvwomble` **0** *(nonsense control - engine reports true empties)*  ·  **known positive** `single family` **37** *(known positive corpus-wide, eight-plus titles - the phrase exists, just not in the housing titles)* · `number of occupants` **3** *(corpus-wide positive - one is Title 1, exactly 1-21-1204(a)(v))* · `font` **26** *(known positive corpus-wide - none in Title 1 or Title 34)* · `type size` **9** *(known positive corpus-wide (fixed harness) - none in Title 1 or 34)* · `capital letters` **19** *(known positive corpus-wide (fixed harness) - none a lease rule)* · `residential rental unit` **23** *(known positive (fixed harness))* · `Condominium Ownership Act` **1** *(known positive, line-wrap regression check)*

**`shoreline-access-disclosure`** (Absent) — `shoreline` **2** *(both Title 18 county boundary descriptions)* · `shore line` **0** *(two-word variant)* · `\bshore\b` **2** *(word boundary on a short word; Titles 40, 41)* · `beach` **0** *(everyday term)* · `waterfront` **1** *(Title 15, unrelated)* · `littoral` **0** *(legal term)* · `coastal` **0** *(legal term)* · `lakeshore` **0** *(everyday term)* · `riparian` **7** *(all the subdivision no-riparian-rights statement)* · `navigable` **5** *(no disclosure duty)* · `public access[^.]{0,200}(water\|lake\|river\|stream)` **0** *(proximity)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `residential rental unit` **23** *(known positive, multi-word)* · `\bdisclos` **1260**

**`showing-notice-waiver`** (Tagged) — `showing (Title 1)` **22** *(term — the only Art. 12 use is 1-21-1205(a)(iii)'s 'showing the unit for rent or sale')* · `notice (of\|before) entry (Title 1)` **0** *(topic phrase, both prepositions)* · `twenty-four (24) hours (Title 1)` **0** *(statute's own number style)* · `reasonable notice (Title 1)` **8** *(none in Art. 12 — article read in full)* · `enter the residential (Title 1)` **1** *(= 1-21-1205(a)(iii) itself)* · `prospective (tenant\|purchaser\|buyer) (Title 1)` **2** *(both read — equine activities and a foreclosure-sale notice; neither landlord-tenant)* · `separate (written )?(document\|agreement\|addendum) (Title 1)` **1** *(separate-document rule check — not landlord-tenant)* · `initialed (Title 1)` **0** *(separate-signature rule check)* · `waiver (Title 1)` **11** *(none governs an entry or showing notice)* · `self-help\|lockout\|lock out (Title 1)` **0** *(entry-by-force check)* · `1-21-120 / 6-3-303 (session-laws 2025+2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `entry (Title 1)` **65** *(known positive — term matches abundantly)*

**`shutdown-rent-protection`** (Absent) — `\bshutdown\b` **0** *(core term, word boundary)* · `shutdown\|shut down` **3** *(spaced variant - Titles 37 and 41, utility and water facility shutdowns)* · `government shutdown` **0** *(everyday term)* · `lapse in appropriation` **0** *(the statutory phrasing other states use)* · `essential worker` **0** *(adjacent term)* · `federal employee.{0,200}(rent\|lease\|evict)` **0** *(proximity, order A)* · `(rent\|lease\|evict).{0,200}federal employee` **0** *(proximity, order B)* · `moratorium` **7** *(Titles 26/35/42 - no eviction moratorium)* · `state of emergency.{0,250}(rent\|evict\|lease)` **1** *(emergency-rent angle, order A - Title 33 professional licensing)* · `(rent\|evict\|lease).{0,250}state of emergency` **0** *(emergency-rent angle, order B)* · `unemploy.{0,200}(rent\|evict\|tenant)` **6** *(income-interruption angle, order A - none creates a tenancy protection)* · `(rent\|evict\|tenant).{0,200}unemploy` **11** *(income-interruption angle, order B - same)* · `hardship.{0,200}(rent\|evict)` **1** *(hardship angle, order A - Title 19)* · `(rent\|evict).{0,200}hardship` **0** *(hardship angle, order B)* · `furlough` **10** *(the everyday term for the worker's situation - the 2 Title 1 hits are jury-service reinstatement)* · `19-11-12` **0** *(currency - 0 in session-laws/2025 and /2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `[Ss]ervicemembers [Cc]ivil [Rr]elief` **5** *(known positive - all Title 19, located § 19-11-122)* · `military.{0,200}(lease\|terminate\|rent)` **36** *(known positive, proximity shape matches widely)*

**`single-family-zone-lease-limit`** (Absent) — `accessory dwelling` **0** *(ADU term - absent corpus-wide)* · `single.family` **37** *(hyphen and space - all property tax, schools, insurance; none a leasing limit)* · `single family residential` **23** *(variant - Title 39 and 2025 SF0069, property tax)* · `owner.occup` **3** *(stem - only a property-tax 'primary residence' definition in 2026 HB0045)* · `short term rental\|short.term rental` **5** *(hyphen and space - § 33-28-102(b)(liv) definition only, no regulation)* · `group home\|community residence\|family care home` **15** *(zoning-protection check - none)* · `zoning.*rent\|rent.*zoning` **17** *(proximity, both word orders - no rental restriction)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `zoning` **95** *(known positive - 37 in Title 18, 11 in Title 15)*

**`smart-access`** (Absent) — `smart lock` **0** *(everyday term)* · `electronic lock` **0** *(term)* · `keyless` **0** *(term)* · `internet of things` **0** *(term)* · `access control` **2** *(both read, neither premises-related)* · `key fob` **2** *(Title 26 insurance)* · `smart (home\|device)` **5** *(all read; 2026 SF0035 is a school cell-phone act)* · `facial recognition` **1** *(Title 32)* · `biometric` **20** *(all read; § 6-3-901(b)(xiii) is the only one reaching a landlord, via § 40-12-501(a)(vii))* · `surveillance` **40** *(Titles 11 and 35, none landlord-tenant)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `breach of the security of the data system` **2**

**`smoke-drift-waiver`** (Absent) — `smoke-free\|smokefree\|smoke free` **0** *(all three spellings)* · `clean indoor air` **0** *(the usual statutory title)* · `secondhand smoke\|second-hand smoke\|environmental tobacco` **0** *(term variants)* · `no smoking\|nonsmoking\|non-smoking` **0** *(everyday term, all hyphenations)* · `[Ss]moking` **7** *(ALL seven in Title 30 — explosives magazines and underground mine workings; none is an indoor-air rule)* · `public place.{0,60}smok\|smok.{0,60}public place` **0** *(proximity, both word orders)* · `[Tt]obacco (title27)` **8** *(§ 27-9-105(a)(iv) off-duty tobacco-use employment protection and the firefighter disease presumption — not a smoking ban)* · `1-21-120 (session-laws)` **0** *(currency)*
  
**control** `zxqvwomble` **0** · `[Tt]obacco (title35)` **30** *(Article 15 importation and labelling (§§ 35-7-1501, 35-7-1502) and the controlled-substances carve-out)*  ·  **known positive** `[Tt]obacco` **170** *(known positive — the subject vocabulary is abundant, so the zeros are a real absence)* · `electronic cigarette\|vap` **99**

**`social-security-defense`** (Absent) — `public assistance` **0** *(term, Title 1 scope)* · `government benefit` **0** *(term, Title 1 scope)* · `housing assistance payment` **0** *(term, Title 1 scope; 3 corpus-wide, all programme administration)* · `voucher.{0,100}(rent\|landlord)` **0** *(proximity)* · `pay and stay` **0** *(everyday term)* · `reinstat.{0,120}(tenan\|lease\|rental)` **6** *(proximity — none in Title 1)* · `cure.{0,80}(nonpayment\|rent)` **18** *(proximity — the Title 1 hit is § 1-21-1015 appeal deposits)* · `social security` **2** *(term, Title 1 scope — both garnishment/execution exemption lists)* · `supplemental security income` **2** *(term, Title 1 scope — the same two lists)* · `continuance` **18** *(term, Title 1 scope — only § 1-21-1007 is landlord-tenant, and it runs against the tenant)* · `stay of (execution\|proceedings)` **29** *(term — 19 in Title 1, none a nonpayment stay)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `three \(3\) days after it is due` **1** *(known positive, metacharacters escaped — Wyo. Stat. § 1-21-1002(a)(i))*

**`special-district-representation`** (Absent) — `special district (Title 1)` **3** *(eminent domain 'public entity' definition and two governmental-claims provisions; none landlord-tenant)* · `metropolitan district` **0** *(other states' term for the same thing)* · `special district.{0,150}lease` **2** *(proximity, order 1 - Titles 18 and 41 joint-powers facility leasing, excluded on reading)* · `lease.{0,150}special district` **0** *(proximity, order 2)* · `special district.{0,150}tenant` **0** *(proximity, order 1)* · `tenant.{0,150}special district` **0** *(proximity, order 2)* · `special district.{0,120}renter` **0** *(proximity, order 1, Wyoming's own term for a tenant)* · `renter.{0,120}special district` **0** *(proximity, order 2)* · `improvement district.{0,150}lease` **1** *(proximity, order 1 - Title 9 state property, excluded)* · `lease.{0,150}improvement district` **1** *(proximity, order 2 - same hit)* · `special assessment.{0,120}tenant` **1** *(proximity, order 1 - Title 2 Principal and Income Act, excluded)* · `tenant.{0,120}special assessment` **0** *(proximity, order 2)* · `district.{0,60}disclos` **2** *(proximity, order 1 - Titles 7 and 22, excluded on reading)* · `disclos.{0,60}district` **3** *(proximity, order 2 - Titles 7, 14, 18, excluded on reading)* · `acknowledg.{0,80}district` **4** *(Titles 34, 40, 41 - none a lease recital)* · `special district (session-laws/2025 + /2026)` **19** *(currency check - district legislation present, but all lease/tenant proximity patterns were run corpus-wide including both session-law years and returned 0)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `special district` **304** *(known positive, multi-word - subject richly present across many titles)* · `improvement district` **187** *(known positive, multi-word)* · `special assessment` **115** *(known positive, multi-word)* · `service district` **88** *(known positive, multi-word)*

**`sprinkler-disclosure`** (Absent) — `sprinkler` **10** *(root term — every hit located and classified; none is a disclosure or residential mandate)* · `automatic sprinkler` **0** *(code term of art)* · `fire suppression` **24** *(adjacent term — present and findable, none landlord-facing)* · `standpipe` **1** *(Title99, excluded)* · `sprinkler.{0,250}(tenant\|lease\|rental\|disclos)` **0** *(DECISIVE proximity, order 1)* · `(tenant\|lease\|rental\|disclos).{0,250}sprinkler` **0** *(DECISIVE proximity, order 2)* · `notice.{0,150}sprinkler` **0** *(proximity, order 1, with the disclosure verb)* · `sprinkler.{0,150}notice` **0** *(proximity, order 2)* · `35-9-107 / 35-9-108 / 16-6-501 / 16-6-502 / 1-21-1203 (session-laws)` **0** *(currency — 0 each across 2025 and 2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — phrase matching survives PDF line wraps)* · `fire sprinkler` **4** *(second multi-word known positive, inside Titles 16 and 35, the titles searched)* · `sprinkler system` **3** *(third multi-word positive, inside Title 35)*

**`statutory-caps`** (Absent) — `late charge` **2** *(Title 40, not rent)* · `application fee` **79** *(fifteen titles, none a rental application fee)* · `shall not exceed.{0,60}rent` **5** *(proximity, order 1, none residential)* · `rent.{0,60}shall not exceed` **4** *(proximity, order 2)* · `one \(1\) month.{0,20}rent` **1** *(Wyoming number style with escaped parentheses; Title 7, not a cap)* · `deposit.{0,40}exceed` **3** *(order 1, no residential deposit cap)* · `exceed.{0,40}deposit` **4** *(order 2)* · `cite 1-21-1208 / 1-21-1008 / 1-21-201 / 1-16-102, session-laws 2025+2026` **0** *(currency, anchored)* · `cite 1-21-1403 session-laws/2025` **2** *(currency, anchored: 2025 ch. 20 SF0006, the creating act, already in the title text)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `late fee` **29** *(none residential; multi-word known positive)* · `rental agreement` **37** *(multi-word known positive)*

**`steam-radiator-covers`** (Absent) — `\bradiator` **1** *(word-bounded; sole hit is Title 40 antifreeze definitions — excluded)* · `radiator cover` **0** *(exact multi-word term)* · `scald` **0** *(the harm such a statute would name)* · `burn.{0,150}(child\|infant\|tenant)` **0** *(proximity, likely victims)* · `lease rider` **0** *(the delivery mechanism New Jersey uses)* · `heating (system\|equipment\|surface)` **3** *(Titles 31 and 42 only; no cover duty)* · `\bsteam\b` **22** *(word-bounded; exactly 1 in Title 1, a utility definition — excluded)* · `35-9-106 (anchored cite, session-laws/2025 and /2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `hot and cold water` **3** *(multi-word known positive, includes § 1-21-1203(a)(iii))* · `carbon monoxide` **1** *(multi-word known positive for building-safety vocabulary)*

**`stigmatized-property`** (Absent) — `stigmatiz` **0** *(term of art)* · `psychologically (impacted\|affected)` **0** *(sister-state term, both adjectives)* · `not a material fact` **0** *(the safe-harbour formula — Wyoming has none)* · `material fact.{0,120}(death\|suicide\|homicide)` **1** *(proximity, order A — Title 26 insurance, read)* · `(death\|suicide\|homicide).{0,120}material fact` **0** *(proximity, REVERSE order)* · `homicide.{0,200}(dwelling\|premises\|property)` **0** *(subject proximity)* · `HIV` **72** *(TRAP — every hit is a substring of 'archive', 'hive' etc.)* · `\bHIV\b` **0** *(same term with word boundary — the true zero)* · `human immunodeficiency` **0** *(spelled-out form)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `acquired immune` **1** *(multi-word known positive — Title 35 public health)* · `adverse material facts [title33]` **13** *(multi-word known positive — § 33-28-303(c))*

**`stove-refrigerator`** (Absent) — `\bstove` **3** *(term — Titles 11/26/39 only; none housing)* · `refrigerat` **13** *(term, stem form covering refrigerator/refrigeration — nearest is the Title 34 condominium common-elements list; read and excluded)* · `\boven\b` **0** *(term, WORD-BOUNDED — the bare form 'range\|oven' returns 1740 because 'oven' is a substring of proven/government; the bounded zero is the real answer)* · `cooking` **11** *(term — none a landlord duty)* · `kitchen` **10** *(term — ZERO in Title 1; Title 35 hits are food-establishment definitions)* · `appliance.{0,150}(provide\|furnish\|supply)` **4** *(proximity, order 1 — Titles 33/37/41, none landlord-tenant)* · `(provide\|furnish\|supply).{0,150}appliance` **4** *(proximity, REVERSE order — same titles)* · `cooking.{0,150}(facilit\|appliance\|equip)` **0** *(proximity, order 1)* · `(facilit\|appliance\|equip).{0,150}cooking` **3** *(proximity, REVERSE order — Titles 16/26 and 2026 HB0002; excluded)* · `cite 1-21-1202 / 1-21-1203 / 1-21-1206, session-laws 2025 and 2026` **0** *(currency, anchored — 0 anchored and 0 unanchored for each)*
  
**control** `zxqvwomble` **0** *(NONSENSE CONTROL — engine reports true empties)*  ·  **known positive** `appliance` **35** *(KNOWN POSITIVE — exactly 2 in Title 1, both read and both in Article 12 (§§ 1-21-1203(a)(iv), 1-21-1204(a)(iv)); positive proof of the only appliance provisions Wyoming has)* · `rental agreement` **37** *(KNOWN POSITIVE, multi-word — 32 in Title 1)*

**`student-housing`** (Absent) — `residence hall` **0** *(corpus-wide (fixed harness))* · `student residence` **0** *(corpus-wide (fixed harness))* · `campus housing` **2** *(corpus-wide (fixed harness) - Title 6 and a 2026 act, inspected, off-topic)* · `married student` **0** *(corpus-wide (fixed harness))* · `fraternity` **3** *(corpus-wide - Titles 12 and 27, not housing)* · `sorority` **1** *(corpus-wide - Title 27, not housing)* · `student housing` **6** *(currency - hits in 2025 HB0086 and 2026 HB0111, both read, both capital construction)*
  
**control** `zxqvwomble` **0** *(nonsense control - engine reports true empties)*  ·  **known positive** `student housing` **6** *(corpus-wide, all inspected - Titles 9 and 21 capital construction plus 2025 HB0086 and 2026 HB0111; none landlord-tenant. Also the known positive for this phrase)* · `dormitor` **17** *(corpus-wide known positive - institutional facility provisions only)* · `age of majority` **74** *(known positive corpus-wide (fixed harness) - located 14-1-101(a))* · `eighteen \(18\) years of age` **150** *(known positive, escaped parens, Wyoming number style)* · `residential rental unit` **23** *(known positive (fixed harness))* · `Condominium Ownership Act` **1** *(known positive, line-wrap regression check)*

**`subsidized-inspection-refusal`** (Absent) — `housing choice voucher` **0** *(program term)* · `subsidiz\w+ housing` **0** *(everyday term)* · `rental assistance` **1** *(Title 14 child welfare - off point)* · `housing assistance payment` **3** *(Title 42 / 2026 SF0106 eligibility data matching)* · `section 8` **170** *(overwhelmingly internal cross-references; housing uses are the Title 42 data-matching paragraphs)* · `source of income` **7** *(none in a housing context - Wyoming has no source-of-income protection)* · `public housing authority` **3** *(Title 15 enabling provisions)* · `housing authority` **25** *(Titles 9, 15, 18 enabling provisions)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `fair housing` **6** *(known positive; located Title 40 ch. 26)* · `discriminat\w+[^.]{0,200}(rent\|housing\|dwelling)` **45** *(known positive, proximity)* · `residential rental unit` **23** *(known positive, multi-word)*

**`subsidy-habitability-proration`** (Absent) — `prorat (Title 1)` **3** *(all read; only 1-21-1203(d) is landlord-tenant and it is a termination refund)* · `abatement of rent\|rent abatement (whole corpus)` **0** *(both word orders)* · `housing choice voucher (whole corpus)` **0** *(program term)* · `housing assistance payment (whole corpus)` **3** *(all read; eligibility-verification cross-references only)* · `rent subsid\|subsidized (whole corpus)` **7** *(none in Title 1, none landlord-tenant)* · `source of income (whole corpus)` **7** *(none in Title 40 ch. 26 — not a protected class)* · `section 8\|section eight (whole corpus)` **180** *(DISCARDED — matches bill and statute section numbering, not the federal program)* · `1-21-120 / 40-26-1 (session-laws 2025+2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `prorat (whole corpus)` **118** *(known positive — stem matches across 18 titles)*

**`subsidy-late-fee`** (Absent) — `late fee` **0** *(core term scoped to Title 1 - also 0 scoped to Title 15; 29 corpus-wide in unrelated titles)* · `late charge` **2** *(variant term - both Title 40, not tenancy)* · `late.{0,120}(rent\|payment).{0,120}(fee\|charge\|penalty)` **46** *(proximity with the statute's likely nouns - sole Title 1 hit is a child-support judgment penalty)* · `[Hh]ousing [Cc]hoice [Vv]oucher` **0** *(the program's own name)* · `1437f` **0** *(the federal citation - Wyoming nowhere adopts it)* · `United States Housing Act` **0** *(the federal act's name)* · `housing assistance payment` **3** *(the HAP term - Title 42 benefits data-matching only)* · `rental assistance` **1** *(Title 14, not a late-fee rule)* · `source of income` **7** *(none in Title 40; not a protected class under § 40-26-103)* · `\bsubsid` **7** *(stem scoped to Title 1 - none about housing subsidy)* · `1-21-12` **0** *(currency - 0 in session-laws/2025 and /2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `housing authority` **25** *(known positive - 19 in Title 15, located § 15-10-101 et seq.)* · `\bvoucher` **130** *(known positive, corpus-wide)* · `late fee (corpus-wide)` **29** *(known positive - the phrase is findable where it exists, which makes the Title 1 and Title 15 zeroes meaningful)*

**`substandard-property-receivership`** (Absent) — `dilapidated` **0** *(term - absent corpus-wide)* · `unsafe building\|dangerous building\|unfit for human` **1** *(sole hit is the § 15-1-103(a)(xxvi) enabling power)* · `substandard` **20** *(Title 15 hits are reclamation, urban renewal and the Housing Authorities Law - no receivership)* · `receivership` **76** *(Titles 13, 17, 26 - banking, entities, insurance)* · `condemn` **293** *(180 are Title 1 eminent domain, not building condemnation)* · `demolish\|demolition` **53** *(none a rental receivership)* · `1-21-10 / 1-21-120 / 18-2-115\|15-1-103 (session-laws)` **1** *(currency - only 2025 HB0172, firearms)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `receiver` **399** *(known positive - § 1-33-101 lists the grounds; habitability is not one)* · `nuisance` **94** *(known positive - § 18-2-115, § 15-1-103(a)(xix))*

**`tax-escalation`** (Absent) — `tax escalation` **0** *(term)* · `escalation clause` **0** *(term)* · `escalat` **13** *(all located; none about leases)* · `increase in.{0,60}tax.{0,80}(tenant\|lessee\|renter)` **0** *(proximity order 1)* · `(tenant\|lessee\|renter).{0,80}(pay\|share).{0,60}tax` **0** *(proximity order 2)* · `tax abatement.{0,100}(tenant\|lessee)` **0** *(Massachusetts' abatement-refund concept)* · `proportionate share` **110** *(checked by title; none a residential lease provision)* · `pro rata share` **15** *(same)* · `(lessee\|tenant).{0,100}(ad valorem\|property tax) (title39)` **7** *(none imposes residential property tax on a tenant)* · `owner occupied (title39)` **0** *(confirms the 4% cap carries no occupancy condition)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `residential structure.{0,80}exempt (title39)` **9**

**`telecom-access`** (Absent) — `satellite dish\|satellite antenna\|direct broadcast` **0** *(every variant, corpus-wide)* · `\bantenna` **9** *(Titles 15, 17, 18 — municipal and county structures, no tenant right)* · `cable television\|cable TV` **10** *(Title 34's one hit is § 34-24-102(a)(xvii) (Unclaimed Property 'utility'); Title 37's four are pole attachment and underground facilities)* · `franchise.{0,60}cable\|cable.{0,60}franchise` **5** *(proximity, both word orders — all Title 15 § 15-1-131, a municipal power)* · `broadband (title37)` **17** *(definitional plus § 37-15-413, which limits CITIES, not landlords)* · `telecommunications.{0,60}building\|multiple dwelling` **1** *(the single hit is § 18-5-402(a)(vi), a county cluster-development definition)* · `1-21-120 (session-laws)` **0** *(currency)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `broadband` **122** *(known positive — abundant vocabulary, so the absence is legislative)* · `cable service\|cable system\|cable operator` **12** *(known positive — none landlord-tenant)*

**`tenant-bankruptcy`** (Absent) — `bankrupt.{0,120}tenant` **0** *(proximity, order 1)* · `tenant.{0,120}bankrupt` **0** *(proximity, order 2)* · `bankrupt.{0,120}renter` **0** *(proximity, order 1, Wyoming's own term)* · `renter.{0,120}bankrupt` **0** *(proximity, order 2)* · `bankruptcy.{0,120}lease` **4** *(proximity, order 1 - Titles 31, 34 and 2025 SF0039, excluded on reading)* · `lease.{0,120}bankruptcy` **1** *(proximity, order 2 - Title 35, excluded on reading)* · `automatic stay` **1** *(Title 26 insurance insolvency, not bankruptcy)* · `landlord.s lien` **0** *(corpus-wide, apostrophe written both ways - Wyoming has NO landlord's lien on tenant goods)* · `landlord.{0,60}lien` **1** *(proximity, order 1 - § 29-2-105, a lien AGAINST the landlord)* · `lien.{0,60}landlord` **2** *(proximity, order 2 - same section)* · `\b1-20-101 / \b1-20-106 / \b1-20-109 / \b1-15-408 / \b1-15-511 (session-laws/2025 + /2026)` **0** *(currency check, anchored, 278 enrolled acts)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `bankrupt` **104** *(known positive stem, many titles - subject present in Wyoming law, pattern matches)* · `insolven` **293** *(known positive stem)* · `homestead exemption` **12** *(known positive, multi-word; Titles 1, 2, 34)* · `disposable earnings` **12** *(known positive, multi-word, Title 1)* · `twenty.five percent \(25%\)` **2** *(known positive, escaped parentheses - §§ 1-15-408(b)(i), 1-15-511(a)(i))* · `residential rental unit` **23** *(known positive, multi-word)*

**`tenant-confidential-information`** (Absent) — `tenant.{0,250}confidential` **0** *(DECISIVE proximity, order 1, corpus-wide)* · `confidential.{0,250}tenant` **0** *(DECISIVE proximity, order 2, corpus-wide)* · `renter.{0,250}confidential` **0** *(proximity with the statute's own role word)* · `landlord.{0,200}disclos` **1** *(proximity — Title 7, read and excluded)* · `data breach` **0** *(everyday term — absent; Wyoming says 'breach of the security of the data system')* · `personally identifiable` **21** *(variant term — present)* · `social security number` **60** *(term — present)* · `consumer report` **66** *(term — present)* · `credit report` **52** *(term — present)* · `immigration status` **19** *(Oregon-list term — present but not landlord-facing)* · `source of income` **7** *(Oregon-list term — present but not landlord-facing)* · `shred` **1** *(disposal duty — Title 35, unrelated)* · `dispose of.{0,120}records` **2** *(disposal duty — Title 17, excluded)* · `destruction of.{0,100}records` **3** *(disposal duty — Titles 9, 14, 42, excluded)* · `40-12-501 / 40-12-502 / 6-3-901 (session-laws)` **0** *(currency — 0 each across 2025 and 2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — phrase matching survives PDF line wraps)* · `breach of the security of the data` **2** *(second multi-word positive (6 words), inside Title 40 — the statutory term that located the article)* · `personal identifying information` **24** *(third multi-word positive — the defined term)*

**`tenant-display-rights`** (Absent) — `political sign` **0** *(multi-word term)* · `American flag` **0** *(everyday term)* · `political advertis` **0** *(as a display right)* · `religious (display\|symbol)` **0** *(term, both nouns)* · `mezuzah` **0** *(specific religious item)* · `campaign sign` **2** *(excluded - Title 22 elections only)* · `yard sign` **3** *(excluded - Title 22 x2, Title 40 x1)* · `United States flag` **1** *(§ 8-3-110(b) only - protocol, not a right)* · `display[^.]{0,50}flag` **16** *(proximity, order A - Title 8 only, protocol/government)* · `flag[^.]{0,50}display` **13** *(proximity, order B - same)* · `desecrat` **1** *(Title 6 only, not a rental provision)* · `sign[^.]{0,40}(tenant\|lessee)` **9** *(proximity, order A - all signatures, not signage)* · `(tenant\|lessee)[^.]{0,40}sign` **24** *(proximity, order B - same)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `flag` **119** *(KNOWN POSITIVE - Title 8 x73; vocabulary demonstrably present)*

**`tenant-employee-housing`** (Absent) — `employee housing` **0** *(subject term)* · `company housing` **0** *(everyday term)* · `guest worker` **0** *(AS statutory term)* · `conditioned on employment` **0** *(AK/HI statutory phrasing)* · `employment.{0,60}occupancy` **0** *(proximity, order 1)* · `occupancy.{0,60}employment` **0** *(proximity, order 2)* · `caretaker` **12** *(Titles 14/42, none a housing provision)* · `cite 27-4-101 / 27-4-104 / 27-4-202 / 33-28-103, session-laws 2025+2026` **0** *(currency, anchored)* · `cite 1-21-1402 session-laws/2025` **1** *(currency, anchored: 2025 ch. 20 SF0006, the creating act, already in the title text)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `resident manager` **19** *(Titles 1/23/33; multi-word known positive)* · `rental agreement` **37** *(multi-word known positive)*

**`tenant-forward-proceedings`** (Absent) — `\battorn(s\|ed\|ing\|ment)?\b` **0** *(word-bounded — the real answer)* · `attorn` **2763** *(SEARCH TRAP — substring of 'attorney'; discarded)* · `attornment` **0** *(noun form)* · `served upon the tenant` **0** *(statute's likely phrasing)* · `tenant.{0,120}service of process` **0** *(proximity)* · `occupant.{0,120}foreclos` **0** *(proximity order A)* · `foreclos.{0,120}(tenant\|occupant\|lessee)` **0** *(proximity order B)* · `forward.{0,100}notice` **8** *(proximity order A; none a tenant duty)* · `notice.{0,100}forward` **12** *(proximity order B; none a tenant duty)* · `(purchaser\|grantee).{0,120}\brent\b` **0** *(proximity order A — no rule on rent after transfer)* · `\brent\b.{0,120}(purchaser\|grantee)` **0** *(proximity order B)* · `cite 34-4-103 session-laws` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `person in possession of the mortgaged premises` **1** *(long multi-word known positive — § 34-4-103(a)(iv))*

**`tenant-insurance-claims`** (Absent) — `renter.{0,5}s insurance` **0** *(apostrophe both ways, corpus-wide)* · `renters insurance` **0** *(no-apostrophe form)* · `insurance.{0,250}(tenant\|renter\|lease)` **34** *(proximity order 1; ZERO in Title 1)* · `(tenant\|renter\|lease).{0,250}insurance` **39** *(proximity order 2; ZERO in Title 1)* · `exculpat` **5** *(corpus-wide, 0 in Title 1; all Title 4 trusts or Title 7 DNA — excluded)* · `indemnif.{0,200}negligen` **2** *(Title 33 carnivals and § 40-17-102 motor carriers — no lease rule)* · `hold harmless` **22** *(corpus-wide; 1 in Title 1, not a lease rule)* · `subrogat` **42** *(corpus-wide; 4 in Title 1, all inspected and excluded)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `liability insurance` **94** *(multi-word known positive; 14 in Title 1)*

**`tenant-right-to-organize`** (Absent) — `tenant (union\|organization\|association)` **0** *(statutory terms used elsewhere)* · `tenants' (union\|organization\|association)` **0** *(possessive form, apostrophe normalised by the harness)* · `association of tenants` **0** *(reverse word order)* · `right to organize` **1** *(Title 27 labor - not tenancies)* · `retaliat` **32** *(0 in Title 1; no landlord retaliation statute in Wyoming)* · `retaliat\w*[^.]{0,250}(tenant\|renter\|lease\|rental)\|( tenant\|renter\|rental)[^.]{0,250}retaliat` **0** *(proximity, both orders)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `organize` **733** *(known positive; 9 in Title 1)* · `assembly\|assemble` **165** · `fair housing` **6** *(known positive, multi-word)* · `residential rental unit` **23** *(known positive, multi-word)*

**`tenant-rights-statement`** (Absent) — `statement of tenant rights (whole corpus)` **0** *(topic phrase)* · `tenant rights (whole corpus)` **0** *(short form)* · `first page (Title 1)` **0** *(placement rule check)* · `attached to the lease (Title 1)` **0** *(attachment rule check)* · `shall not (bring\|maintain) an action (Title 1)` **0** *(suit-bar, reverse phrasing)* · `1-21-100 / 1-21-120 (session-laws 2025+2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `acknowledg (Title 1)` **13** *(known positive — stem matches; none in Art. 10 or Art. 12)* · `no action shall be (brought\|maintained) (Title 1)` **4** *(known positive for suit-bar phrasing; none landlord-tenant)*

**`term-change-notice`** (Absent) — `rent increase` **0** *(core term)* · `increase.{0,150}\brent\b` **0** *(proximity, order A, word boundary ('rent' is inside 'current', 'different'))* · `\brent\b.{0,150}increase` **0** *(proximity, order B)* · `month-to-month\|month to month` **4** *(both spellings - Titles 26 and 40 and SF0001, none tenancy; re-verifies the established slice fact)* · `periodic tenancy` **0** *(re-verified)* · `tenancy at will` **0** *(re-verified)* · `notice to (terminate\|quit).{0,150}(tenancy\|lease)` **0** *(statute's likely phrasing)* · `modif.{0,150}rental agreement` **0** *(proximity, order A)* · `rental agreement.{0,150}modif` **1** *(proximity, order B - sole hit is the § 1-21-1201(a)(ii) definition, which treats a modification as an agreement)* · `terminate the (tenancy\|rental agreement\|lease)` **2** *(both in § 1-21-1203(d), the repair-refusal termination)* · `1-21-12` **0** *(currency - 0 in session-laws/2025 and /2026)* · `34-2-12` **0** *(currency - 0 in session-laws/2025 and /2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `\bnotice\b` **270** *(known positive, Title 01)* · `thirty \(30\) days.{0,200}(notice\|terminat)` **8** *(known positive, Title 01 - Wyoming's spelled-and-numbered period style is findable, and none of the eight is a term-change notice (parentheses escaped))*

**`tpa-exemption-notice`** (Absent) — `rent control / rent stabiliz / maximum rent / rent increase` **0** *(no cap to be exempt from)* · `just cause` **25** *(none a tenancy ground)* · `good cause` **397** *(19 in Title 1, each filtered for rent/tenant/evict/premises/lease - none matched)* · `right of first refusal` **2** *(Title 31 vehicles, Title 34 transfer-fee definition)* · `first refusal` **3** *(shorter form - adds Title 17 entity hit only)* · `opportunity to purchase` **2** *(Titles 36, 37 - no tenant right)* · `conversion (scoped title34)` **4** *(electronic recording, solar, wind - no condominium conversion protection)* · `\btenant (scoped title34)` **15** *(all conveyancing senses plus §§ 34-2-128/129)* · `rent control\|rent stabiliz\|maximum rent (session-laws)` **0** *(currency - no 2025 or 2026 act)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Wyoming Fair Housing Act` **1** *(KNOWN POSITIVE (multi-word, line-wrap regression): proves a multi-word phrase matches across the pdftotext line wrap, so the zero results above are true empties and not the harness defect fixed 2026-10-24)* · `residential rental unit` **23** *(KNOWN POSITIVE (multi-word, high-frequency): confirms phrase matching in Title 1, the title a tenant-opportunity-to-purchase or conversion-notice rule would sit in)*

**`tpa-notice`** (Absent) — `opportunity to purchase` **2** *(Titles 36 and 37, both read, neither landlord-tenant)* · `right of first refusal` **2** *(Title 31 dealer franchises, Title 34 private transfer fee definition)* · `first refusal` **3** *(adds a Title 17 corporate provision)* · `tenant.{0,120}(purchase\|buy).{0,80}(notice\|offer)` **0** *(proximity order 1)* · `(notice\|offer).{0,120}tenant.{0,60}purchase` **0** *(proximity order 2)* · `condominium conversion` **0** *(term)* · `convert.{0,80}condominium` **0** *(proximity)* · `mobile home park.{0,120}(sale\|sell\|purchase)` **0** *(proximity)* · `mobile home park` **4** *(all Title 35, no sale-notice provision)* · `notice of (the )?sale.{0,100}(tenant\|renter\|lessee)` **0** *(proximity)* · `intent to sell` **3** *(Titles 39 and 40, off point)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1**

**`tpa-sunset`** (Absent) — `This act is repealed` **0** *(term variant)* · `sunset\|repealed effective\|shall expire (title01)` **1** *(the single hit is a temporary-restraining-order expiry, not a landlord-tenant sunset)* · `sunset\|repealed effective\|shall expire\|expires on (title34)` **0** *(nothing in the property title)* · `sunset\|repealed effective\|shall expire\|expires on (title40)` **12** *(all licence-renewal and pawn-maturity dates; none in the Fair Housing Act chapter)* · `40-26-\|1-21-14\|1-21-10 (session-laws)` **6** *(currency — all in 2025 SF0006, whose only dating provision is 'effective July 1, 2025'; no repeal date)* · `1-21-120 (session-laws)` **0** *(currency)* · `sunset\|is repealed (session-laws)` **many across 2026 acts** *(confirms the legislature used sunset drafting in the latest session and still did not apply it to landlord-tenant law)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `sunset` **33** *(known positive — Wyoming does use sunset drafting, just not here)* · `repealed effective` **27** · `is repealed effective\|shall be repealed` **22** *(known positive — none in Title 1, 34 or the Fair Housing chapter)* · `expires on\|shall expire` **119**

**`translation-duty`** (Absent) — `translat.{0,150}(lease\|rental\|tenan\|contract)` **0** *(proximity, order A)* · `(lease\|rental\|tenan\|contract).{0,150}translat` **1** *(proximity, order B — Title 33 speech-language pathology aide)* · `negotiat.{0,120}language` **0** *(proximity, order A — the California trigger)* · `language.{0,120}negotiat` **0** *(proximity, order B)* · `translat` **20** *(root term — only 1 in Title 1, a crime-victims interpreter right)* · `Spanish` **1** *(named-language term — one hit, Title 39 revenue)* · `interpreter` **13** *(term — the Title 1 hit is the crime-victims provision)* · `primary language` **2** *(term — education only)* · `limited English` **7** *(term — education only)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `English` **87** *(known positive — 7 in Title 8 locate Wyo. Stat. § 8-6-101; only 1 in Title 1, juror qualification)*

**`truth-in-renting`** (Absent) — `truth in renting` **0** *(the topic's own term, lowercase)* · `Truth in Renting` **0** *(same term, title case — tried because it is a proper noun elsewhere)* · `plain english` **0** *(everyday term)* · `written in a clear` **0** *(likely statutory phrasing)* · `summary of.{0,80}rights` **0** *(proximity — the handbook concept)* · `tenant.{0,150}rights.{0,150}booklet` **0** *(proximity — the handbook concept, role word first)* · `plain language` **2** *(term — Titles 26 and 39, neither a lease requirement)* · `readable` **12** *(term — six titles, no rental-agreement readability standard)* · `8-6-101 / 40-12-105 / 40-12-109 / 1-21-1202 / 1-21-1304 (session-laws)` **0** *(currency — 0 each across 2025 and 2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — phrase matching survives PDF line wraps)* · `official language` **3** *(second multi-word positive, inside Title 8, the title searched — located § 8-6-101)*

**`unbundled-parking`** (Absent) — `unbundl` **1** *(Title 37 utility context, not parking)* · `parking agreement` **0** *(CA statutory term)* · `parking fee` **1** *(Title 9, state facility fee)* · `parking area` **8** *(includes the Title 34 condominium common-areas definition)* · `parking (scoped title40)` **0** *(fair housing act never names parking)* · `cite 31-5-111 / 31-5-501 / 40-26-107 / 15-1-801, session-laws 2025+2026` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `off.street parking` **5** *(Title 15 municipal bonding only; multi-word known positive)* · `parking space` **12** *(Titles 11/31/35; multi-word known positive)*

**`unconscionability`** (Absent) — `unconscionab` **27** *(stem; all Title 40 ch. 14, zero in Titles 1 and 34)* · `unconscionable` **23** *(adjective; same distribution)* · `adhesion` **0** *(contract-of-adhesion term)* · `void as against public policy` **0** *(statute's likely phrasing)* · `oppressive` **9** *(alternative term; none a lease rule)* · `cite 40-14-508 session-laws` **0** *(currency, anchored)* · `cite 40-14-204 / 40-14-206 / 40-14-520 session-laws` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `contrary to public policy` **5** *(multi-word known positive; none a lease rule)*

**`usufructuary-lessor`** (Absent) — `usufruct` **0** *(the civil-law term — absent from the whole corpus)* · `life tenant` **0** *(everyday term)* · `tenant for life` **2** *(the statute's own words — § 34-1-111 heading AND operative sentence)* · `remainderman\|remainder.?man` **1** *(Title 2 ch. 9 art. 1 heading)* · `estate for years` **1** *(alternative phrasing)* · `emblement` **0** *(the common-law doctrine — absent)* · `apportion.{0,200}rent` **5** *(proximity order 1; all excluded (trust funds, water, insurance))* · `rent.{0,200}apportion` **7** *(proximity order 2; all excluded)* · `death of the (lessor\|life tenant\|owner)` **23** *(none a tenancy rule)* · `34-1-111 / 2-9-101 / 34-2-128 / 34-2-129 (anchored cite, session-laws/2025 and /2026)` **0** *(currency check)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `life estate` **7** *(Titles 2 (§§ 2-9-101, 2-9-102) and 42; multi-word known positive)*

**`utility-disclosure-attachment`** (Absent) — `utility disclosure` **0** *(corpus-wide (fixed harness))* · `submeter` **0** *(corpus-wide)* · `sub-meter` **0** *(corpus-wide, hyphenated variant)* · `shared meter` **0** *(corpus-wide (fixed harness))* · `ratio utility` **0** *(corpus-wide (fixed harness) - no RUBS statute)* · `utility allocation` **0** *(corpus-wide (fixed harness))* · `resale of utility` **0** *(corpus-wide (fixed harness))* · `master meter` **4** *(corpus-wide (fixed harness) - all Title99, inspected, a county water agreement)* · `average .{0,30}utility` **3** *(corpus-wide proximity - none a lease disclosure)* · `utilit\w*(?:.\|\n){0,140}(disclos\|attach\|addendum)` **9** *(proximity order A, newline-crossing - housing-adjacent hits inspected, all easements and licensing)* · `(disclos\|attach\|addendum)(?:.\|\n){0,140}utilit` **6** *(proximity order B, newline-crossing - inspected, none a lease disclosure)* · `separately identified` **5** *(corpus-wide (fixed harness) - one is the 1-21-1208(b) gateway phrase)* · `tenant` **5** *(Title 37 - the four substantive hits located 37-1-101(a)(vi)(H)(VI) and (VIII); Title 37 'landlord' = 0)* · `landlord` **0** *(Title 37 - a landlord-keyword search alone would miss the submetering rule)*
  
**control** `zxqvwomble` **0** *(nonsense control - engine reports true empties)*  ·  **known positive** `resell` **15** *(known positive corpus-wide, eight titles - no landlord-to-tenant rule)* · `utilities deposit` **3** *(positive, all Title 1 within 1-21-1208(b) (fixed harness))* · `utility deposit` **1** *(positive, Title 1, 1-21-1208(b) (fixed harness))* · `utility charges` **1** *(positive, Title 1, 1-21-1208(b) (fixed harness))* · `utilit` **31** *(known positive, Title 1)* · `residential rental unit` **23** *(known positive (fixed harness))* · `Condominium Ownership Act` **1** *(known positive, line-wrap regression check)*

**`utility-disconnection-notice-authorization`** (Absent) — `landlord[^.]{0,250}(disconnect\|shut off\|utility)` **0** *(proximity order 1)* · `(disconnect\|shut off)[^.]{0,250}(landlord\|owner of the (dwelling\|building\|premises))` **0** *(proximity order 2)* · `disconnect` **19** *(statute's own word; all Title 37 hits read, none a notification right)* · `shutoff\|shut-off\|shut off` **7** *(three spellings)* · `termination of (utility )?service` **3** *(Titles 9, 19 - off point)* · `notice[^.]{0,200}(disconnect\|shut off\|discontinu)` **17** *(proximity order 1)* · `(disconnect\|discontinu)\w*[^.]{0,200}notice` **9** *(proximity order 2)* · `third party notice` **1** *(Title 26 insurance - off point)* · `designee` **391** *(none tied to a utility disconnection)* · `cold weather` **0** *(no winter shutoff moratorium)* · `copy of (the \|any )?notice[^.]{0,120}(owner\|landlord)` **15** *(Title 37 hits read; improvement-district assessments)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `notify the owner` **14** *(known positive, multi-word)* · `public utility` **355** *(known positive, multi-word)*

**`utility-interruption-submeter`** (Absent) — `submeter (whole corpus)` **0** *(the industry term appears nowhere in Wyoming statutes)* · `disconnect\|shut off\|shutoff (Title 1)` **0** *(everyday terms)* · `interrupt (Title 1)` **1** *(contempt of court, not utilities)* · `utility service (Title 1)` **6** *(all municipal condemnation, §§ 1-26-804 to 1-26-809)* · `discontinu (Title 37)` **6** *(all read — PSC orders and rail abandonment)* · `termination of service (Title 37)` **0** *(statute's likely phrase)* · `shut off\|shutoff / curtail (Title 37)` **1** *(one each, neither landlord-tenant)* · `disconnect\|shut off (Title 35)` **7** *(electrician licensing and storage tanks)* · `interrupt.{0,150}(tenant\|renter\|dwelling) (Title 35)` **0** *(proximity)* · `utilit (Title 6)` **0** *(no criminal provision on cutting a tenant's utilities)* · `1-21-120 (session-laws 2025+2026)` **0** *(currency check)* · `37-1-101 (session-laws 2025+2026)` **2** *(currency check — both cross-references only (2025 HB0192, 2026 SF0099); subparagraph (H) unamended)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `disconnect (Title 37)` **7** *(known positive — verb matches in the utility title)* · `tenant\|lessee\|occupant (Title 37)` **14** *(known positive — tenant nouns match in the utility title)*

**`utility-landlord-account`** (Absent) — `repair and deduct` **0** *(core tenant remedy - absent)* · `rent escrow` **0** *(core tenant remedy - absent)* · `withhold rent` **0** *(core tenant remedy - absent)* · `pay.{0,120}deduct` **94** *(proximity, order A - 5 Title 1 hits, none a tenant utility remedy)* · `deduct.{0,120}rent` **7** *(proximity, order B - the 3 Title 1 hits are inside § 1-21-1208's deposit deductions)* · `\brent\b.{0,120}deduct` **1** *(proximity, word-boundary variant - same § 1-21-1208 hit)* · `receiver.{0,200}(rent\|tenant)` **8** *(rent-receivership angle - none is a tenant petition)* · `master meter` **4** *(all Title 99 noncodified water-district provisions; no master-metering duty)* · `submeter\|sub-meter` **0** *(Wyoming never uses the word - the rule is written as 'metered or other direct sales', which is why it is easy to miss)* · `\boccupant` **0** *(scoped to Title 37 - no occupant protection anywhere in the public utilities title)* · `(disconnect\|discontinu\|terminat\|shut).{0,150}(service\|utility)` **19** *(scoped to Title 37, order A - read; none protects a tenant against shutoff for a landlord's unpaid bill)* · `(service\|utility).{0,150}(disconnect\|discontinu\|terminat\|shut)` **14** *(scoped to Title 37, order B - same)* · `37-1-101` **2** *(currency - 1 in session-laws/2025 (HB0192) and 1 in /2026 (SF0099), both cross-references only)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `\btenant` **4** *(known positive, scoped to Title 37 - all four are inside § 37-1-101(a)(vi)(H)(VI), (VIII), (IX), which located the controlling text)* · `public utility` **263** *(known positive, Title 37)* · `utilities deposit` **3** *(known positive - all Title 1, § 1-21-1208(b))*

**`utility-shutoff-statute`** (Absent) — `cold weather` **0** *(winter moratorium term - absent)* · `shut.?off\|shut off` **7** *(hyphen, space and closed forms - no residential disconnection rule)* · `disconnect` **19** *(statute term - Title 37 hits are § 37-12-401/402 and § 37-13-132 only)* · `self.help` **0** *(term - absent; no anti-self-help statute)* · `interrupt.*utilit\|utilit.*interrupt` **15** *(proximity, both word orders - no landlord shutoff ban)* · `termination of service\|terminate.*service` **45** *(both phrasings - none a residential disconnection rule)* · `winter` **70** *(53 in Title 99 noncodified; no utility moratorium)* · `moratorium` **7** *(none utility)* · `disconnect / 37-12-4 / 37-1-101 (session-laws)` **2** *(currency - both are cross-references, neither amends § 37-1-101(a)(vi)(H))*
  
**control** `zxqvwomble` **0**  ·  **known positive** `public service commission` **143** *(known positive - the rules live with the PSC, outside this corpus)* · `forcible` **20** *(known positive - 10 in Title 1; § 6-3-306 is the criminal counterpart)*

**`utility-transfer`** (Absent) — `transfer.{0,60}utility\|utility.{0,60}transfer` **2** *(proximity, both word orders — both Title 37 rate regulation)* · `shut off\|shutoff\|shut-off` **7** *(all spellings — Titles 99, 19, 35, 37, 41; none landlord-tenant)* · `in the name of the (owner\|landlord)` **11** *(none about a tenancy utility account)* · `[Ll]andlord (title37)` **0** *(Title 37 never uses the word — a landlord-keyword search misses § 37-12-401 entirely)* · `theft of services\|interrupt.{0,40}service` **11** *(no landlord utility-cutoff offence)* · `1-21-120 (session-laws)` **0** *(currency)* · `landlord\|renter (session-laws/2026)` **0** *(currency)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `utility service` **31** *(known positive — all 6 Title 1 hits are §§ 1-26-804 to 1-26-809, municipal acquisition of utility plants)* · `disconnect` **19** *(known positive — the relevant hits are § 37-12-401(a)(iv) and § 37-12-402(c))* · `terminate.{0,40}utility\|utility.{0,40}terminat` **3** *(proximity, both word orders — all Title 37 rate and certificate provisions, false positives, excluded)*

**`veterans-incentive`** (Absent) — `landlord incentive` **0** *(the topic's own term)* · `vacancy (relief\|payment)` **0** *(the Florida pilot terms)* · `HUD-VASH\|VASH` **0** *(programme term)* · `incentive.{0,120}veteran` **0** *(proximity, order A)* · `veteran.{0,120}(hous\|rent\|lease)` **22** *(proximity, order B — all inspected; Title 39 hits are the veteran's own principal residence only)* · `tax credit.{0,150}(rent\|landlord\|lease)` **0** *(proximity)* · `honorably discharged veteran` **16** *(statute's own words — no landlord benefit)* · `servicemember\|service member` **112** *(both spellings — no landlord incentive)* · `military` **670** *(broad term — no landlord incentive)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `veteran` **410** *(known positive — the subject is well covered; the incentive is what is absent)*

**`water-heater-temperature`** (Absent) — `water heater` **1** *(the topic's own term — Title 42 LIEAP weatherization only, excluded)* · `scald` **0** *(everyday term)* · `anti-scald` **0** *(industry term)* · `tempering valve` **0** *(industry term)* · `mixing valve` **0** *(industry term)* · `maximum temperature` **0** *(likely statutory phrase)* · `water temperature` **0** *(likely statutory phrase)* · `set the thermostat` **0** *(the Wisconsin/Washington duty phrasing)* · `120 degrees` **0** *(the common figure)* · `Legionella` **0** *(the low-temperature counter-concern)* · `thermostat` **1** *(Title 40, excluded)* · `hot water.{0,200}(tenant\|renter)` **0** *(DECISIVE proximity, order 1)* · `(tenant\|renter).{0,200}hot water` **0** *(DECISIVE proximity, order 2)* · `plumbing code` **0** *(NO STATE PLUMBING CODE — term absent)* · `International Plumbing Code` **0** *(NO STATE PLUMBING CODE — named model code absent)* · `plumbing` **12** *(root term — present, Title 15 hit is § 15-1-119)* · `temperature.{0,150}water` **2** *(proximity, order 1 — Title 35 water quality, excluded)* · `water.{0,150}temperature` **1** *(proximity, order 2 — same)* · `1-21-1203 / 35-9-106 / 35-9-121 (session-laws)` **0** *(currency — 0 each across 2025 and 2026)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `Condominium Ownership Act` **1** *(multi-word known positive — phrase matching survives PDF line wraps)* · `hot and cold water` **3** *(second multi-word positive (4 words), inside Title 1 — located the governing § 1-21-1203(a)(iii))* · `degrees Fahrenheit` **11** *(third multi-word positive — temperature figures are findable where they exist)*

**`waterbed`** (Absent) — `waterbed` **0** *(closed-up spelling)* · `water ?bed` **0** *(spaced spelling variant)* · `water filled` **0** *(everyday term)* · `liquid-?filled` **1** *(excluded - Title 30 mine/explosives safety; both hyphen forms)* · `flotation` **2** *(excluded - Title 23 game and fish, Title 41 water; the FL statute's term)* · `bedding` **2** *(excluded - Title 1 is the § 1-20-106 execution exemption; Title 35 unrelated)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `residential rental unit` **23** *(KNOWN POSITIVE, multi-word, Title 1)* · `additional deposit` **6** *(KNOWN POSITIVE, multi-word - T1 x1, T22 x2, T26 x3; none a waterbed rule)*

**`window-guards`** (Absent) — `window guard` **0** *(subject term)* · `window.{0,30}guard` **0** *(proximity, order 1)* · `guard.{0,30}window` **0** *(proximity, order 2)* · `window fall` **0** *(everyday term)* · `fall prevention` **0** *(code term)* · `window screen` **0** *(everyday term)* · `window opening` **0** *(code term)* · `egress window` **0** *(code term)* · `sill` **1** *(Title 31, vehicle)* · `\bwindow` **28** *(word boundary; Title 35 pair read in context, neither a guard rule)* · `windows` **16** *(plural checked separately; Title 31 glazing)* · `cite 35-9-106 / 35-9-121 / 40-26-103, session-laws 2025+2026` **0** *(currency, anchored)*
  
**control** `zxqvwomble` **0**  ·  **known positive** `apartment house` **3** *(multi-word known positive)* · `rental agreement` **37** *(multi-word known positive)*

---

## §4 Decisions, and questions asked of Taylor

### Item 1 — optional clauses never screened for Wyoming (SOP rule 54)

Four candidates. Each was decided from the Wyoming text, not from what other states do.
Where the candidate overlaps a topic in `missing-topics-WY.md`, the full answer lives in the
topic's row and this entry points to it (prompt: "answer each once and point the other to it").

---

#### 1a. Holdover charge — OFFERED as an optional clause

**Topic that owns this answer:** `holdover-rate` → `holdover-rate-wy` (clause) and
`edu-holdover-rate-wy` (education). This entry is the pointer; the reasoning is in those rows.

**Lawful.** No Wyoming statute forbids a stipulated holdover charge, caps it, sets a multiplier or
supplies any measure. Three provisions affirmatively support one:

- **Wyo. Stat. §§ 34-2-128 and 34-2-129** are what make the charge *safe to collect* in Wyoming,
  and they are the reason this answer differs from most states. Section 34-2-128 provides that no
  renewal or extension arises "either by the tenant holding over or by the landlord accepting
  compensation or rent for or during the holding over"; § 34-2-129 requires an express written
  contract signed by both parties to renew. Elsewhere, demanding and banking a daily holdover
  charge is the classic way a landlord accidentally creates a new tenancy. In Wyoming the statute
  forecloses that.
- **Wyo. Stat. § 1-21-1208(a)** makes it deductible from the deposit as a "cost provided by any
  contract."
- **Wyo. Stat. § 1-21-1002(a)(i)** grounds the forcible entry and detainer action against a tenant
  "holding over their term."

**The finding that shaped the drafting.** Wyo. Stat. § 1-21-1008(a) gives a winning FED plaintiff
*restitution of the premises and costs only*. The money judgment is in § 1-21-1008(b), and that
subsection is gated by its own opening words — "If the case is one based on failure to pay rent" —
and is measured by "the terms and conditions of the agreement between the parties." In a pure
holdover case the landlord takes possession and nothing else. **Defining the holdover charge as
Rent is therefore not cosmetic: it is what brings the money inside the same proceeding.** The
clause does that expressly.

**Shape of the offered clause.** Charge framed as an agreed price for use and occupancy actually
taken, not as liquidated damages substituting for actual damages; builder default of
`{{holdover_daily_rate}}` at 150% of the daily equivalent of monthly rent, with no higher figure
offered and 100% in a HUD-assisted or regulated unit; additional to, not in place of, actual
damages, with an express no-double-recovery sentence for the same day; and an express statement
that it creates no tenancy and waives no § 1-21-1003 notice.

**Stated as unread, not predicted.** Wyoming has no liquidated-damages statute (`liquidated
damages` = 14 corpus-wide, 0 in Title 1 ch. 21; both Title 1 hits are garnishment and structured
settlements). Whether a stipulated sum survives as an agreed price or is struck as a penalty is
pure common-law penalty doctrine — case law, outside this corpus, **not read**. The clause is
drafted to be least exposed; it is not certified. The library's alternative, if it wants certainty
over a reasoned best shape, is an actual-damages-only holdover clause, which no penalty challenge
can reach at the cost of making the landlord prove loss. **Recommendation: ship the optional
clause as drafted.**

**Conflict found and fixed inside this delta.** `holdover-tenancy-by-sufferance-wy` (written for
`tenancy-at-will`) carried its own "[insert, for example 150%]" rate sentence. Both rows are new in
this pass, so the scope fence does not reach them. Under SOP rule 57 the rate sentence was removed
from the sufferance row and left to `holdover-rate-wy`: the sufferance row now states the *legal
consequence* of holding over, the optional clause sets the *price*. Compensation for use and
occupancy and actual damages remain recoverable in the sufferance row for a lease that does not
take the optional charge.

---

#### 1b. Statutory waivers — OFFERED selectively; one is PROHIBITED

The prompt's waiver item overlaps six `*-waiver` topics. Each is answered once, in its own row.

| Candidate | Decision | Row | Governing text |
|---|---|---|---|
| Jury waiver (possession) | **Offered, "[Optional.]"** | `jury-waiver-possession-wy` | Wyo. Const. art. 1, § 9; Wyo. Stat. § 1-21-1008(a) |
| Notice-to-quit waiver | **NOT offered — unlawful** | `edu-notice-to-quit-waiver-wy` (PROHIBITED) + `notice-to-quit-preserved-wy` | Wyo. Stat. §§ 1-21-1003, 1-21-1202(d) |
| Homestead / exemption waiver | **NOT offered — rule 54 education row** | `edu-homestead-waiver-wy` | Wyo. Const. art. 19, § 9; Wyo. Stat. §§ 34-2-121, 1-20-106 |
| Showing-notice waiver | **Nothing to waive — tagged** | tagged `showing-notice-la` | Wyo. Stat. § 1-21-1205(a)(iii) |
| Smoke-drift waiver | **Offered** | `smoke-drift-waiver-wy` | no Wyoming smoking statute of any kind |
| Waiver by acceptance of rent | **Education only** | `edu-waiver-by-acceptance-wy` | Wyo. Stat. §§ 34-2-128, 34-2-129 |

Three of these deserve a line of their own.

**The jury waiver is lawful but nearly pointless, and the row says so in its own opening bracket.**
Wyo. Stat. § 1-21-1008(a) already gives a bench trial in an FED action *if neither party demands a
jury*. So a landlord who simply never demands one already has what the clause buys. **The clause's
only real work is stopping the tenant from demanding a jury** — which is exactly the framing that
draws scrutiny, and the reason the row is narrowed to possession and to the § 1-21-1008(b) rent
determination, carved out for damages, counterclaims and separate actions, and expressly made not
to touch the Safe Homes Act, which Wyo. Stat. § 1-21-1304 makes non-waivable. Offered, but a
landlord who skips it loses almost nothing.

**The notice-to-quit waiver must not be offered.** Wyo. Stat. § 1-21-1003 says the party "**must
notify** the adverse party to leave the premises" and contains no "unless otherwise agreed." The
tempting authority for waiving it, Wyo. Stat. § 1-21-1202(d), reaches **article 12 only** and not
article 10, so it is not authority here. The library offers the opposite clause —
`notice-to-quit-preserved-wy` — which states that nothing in the lease shortens or waives that
notice. A landlord relying on a waiver would lose the eviction on its own papers.

**The homestead waiver gets a rule 54 education row rather than a clause.** Wyoming's statutory
waiver words exist only for *conveyances* (Wyo. Stat. § 34-2-121), the exemption itself is
constitutional, and Wyo. Const. art. 19, § 9 requires joint spousal consent — which independently
defeats a waiver signed by one spouse. The exemption article (§§ 1-20-101 through 1-20-109) is
simply silent on contractual waiver, and no case law is in this corpus. Since an invalid clause
buys nothing, there is no upside even if a narrow version might survive. The row says the device
exists, why the library declines it, and that the landlord may add their own.

---

#### 1c. Eviction-fee clause (a charge for serving notices or filing) — SPLIT

This candidate turned out to be two different things, and Wyoming answers them differently.

**A fee for preparing or serving the notice: NOT offered.** Topic `notice-service-fee` →
`edu-no-notice-service-fee-wy` (education, Absent). No Wyoming statute authorizes, sets or caps a
notice-service fee, and none forbids one — so such a fee is pure contract with no statutory
backing, unlike Utah's and Idaho's express provisions. What decides it is what the notice actually
costs: Wyo. Stat. § 1-21-1003 requires only "a written copy" left with the defendant or at the
usual place of abode or business, three days before filing. No form is prescribed, no process
server is required, no filing is involved, and the landlord may serve it personally. A flat
"$75 notice fee" is therefore hard to defend as a reasonable estimate of a sheet of paper and a
trip. The row states the absence and the reasoning, per rule 54.

**Collection costs and court-awarded fees: OFFERED.** Topic `collection-fee` →
`collection-fee-wy` (clause) + `edu-collection-fee-wy` (education, CONSTRAINED). These rest on real
Wyoming authority rather than on contract alone: **Wyo. Stat. § 1-1-115** supplies the dishonored-
check remedy (after written demand — the amount of the check, a $30 collection fee, and, if unpaid
within 30 days, three times the check, not less than $100, plus court costs); **Wyo. Stat.
§ 1-21-1008(b)** lets the court add costs and attorney's fees as the lease provides in a nonpayment
possession action; **Wyo. Stat. § 33-11-101(b)(v)** and § 33-11-102 govern the licensed collection
agency whose fee the clause passes through. The clause recovers *actual, reasonable third-party*
collection costs, requires written notice of the unpaid amount before referral, and bars double
recovery on the same dishonored payment.

---

#### 1d. Crime-free / criminal-activity clause — OFFERED as an optional clause

**Topic that owns this answer:** `criminal-activity` → `criminal-activity-wy` (clause, Rules &
Regulations) and `edu-criminal-activity-wy` (education, Default & Termination).

**Wyoming has no crime-specific eviction machinery at all,** and the absence is unusually complete:
no fast-track or expedited eviction for violent crime or drug sales, no statute stripping the cure
right because the breach was criminal, no statute making eviction a landlord *duty*, no statute
letting a district attorney or the Attorney General evict in the landlord's place, no crime of
failing to eject a tenant, and no statute that authorises, forms, requires or limits a crime-free
addendum. The phrase "crime-free" appears nowhere in Wyoming law, and "criminal activity" appears
nowhere in the landlord-tenant title. (Battery in §3.)

**The clause is nonetheless lawful and enforceable, and the chain is short enough to state
exactly.** Wyo. Stat. § 1-21-1204(a)(vii) makes it a statutory renter duty to "[c]omply with all
lawful requirements of the rental agreement between the owner and the renter," and Wyo. Stat.
§ 1-21-1002(a)(vi) allows a forcible entry and detainer action "[a]gainst renters in violation of
any terms imposed under W.S. 1-21-1204 or 1-21-1205." **So a crime-free covenant written into the
lease becomes a lawful requirement of the rental agreement, breaching it breaches
§ 1-21-1204(a)(vii), and that breach is itself a statutory FED ground** — the landlord is not
relying on common-law forfeiture. This is worth stating plainly because it generalises:
§ 1-21-1204(a)(vii) is the *only* bridge in Wyoming between an ordinary lease covenant and a
statutory eviction ground.

**For conduct that affects other people the clause may be unnecessary.** Wyo. Stat.
§ 1-21-1205(a)(ii) independently forbids a renter to "[i]nterfere with another person's peaceful
enjoyment of the residential property," and § 1-21-1205(a)(i) covers destruction, defacement and
damage, including knowingly permitting another person to cause it. Either is an FED ground under
§ 1-21-1002(a)(vi) **with no lease term written at all** — the route available on a bare or oral
lease.

**What the clause cannot buy is speed.** The three-day notice under Wyo. Stat. § 1-21-1003 applies
to a criminal-activity termination exactly as it does to any other, and no Wyoming provision
shortens it.

**Shape of the offered clause.** Written on *conduct during the tenancy*, never on a person's
record; covering Tenant, occupants and guests; expressly stating that **an arrest, a charge or a
criminal record is not by itself a violation**, and that proof is by the civil standard in the FED
action; excluding controlled-substance possession for personal use from the definition; keeping
the § 1-21-1003 notice in the text; and closing with a sentence that nothing in it permits
self-help possession, a lock change or removal of property.

**Stated as unread, not predicted.** Whether a blanket or aggressively drafted crime-free term
creates unlawful disparate impact is not answerable from this corpus. Wyoming codifies no effects
test (`disparate` = 0), and the governing material — federal Fair Housing Act case law and HUD's
disparate-impact rule and guidance — is outside the corpus and **was not read**. No prediction is
made. The uniform-application and conduct-not-record drafting above is the mitigation. **If the
library wants a position on screening applicants for criminal history, that needs a federal-law
read this canvass did not do** — flagged for Taylor rather than guessed at.


### Item 2 — fire and casualty

**Answered at the topic `casualty-and-mitigation-waivable` → `edu-casualty-and-mitigation-waivable-wy`.**
Asked plainly, answered plainly:

> **Wyoming law has no rule on a dwelling made unlivable by fire or other casualty.** There is no
> rent-abatement rule, no tenant right to terminate, and no landlord duty to rebuild. The
> Residential Rental Property Act, Wyo. Stat. §§ 1-21-1201 through 1-21-1211, does not mention
> casualty, fire, destruction or untenantability at all.

So this is now a **checked absence**, not an unrecorded gap — which is what the item asked for. The
battery is in §3 (22 patterns: casualty, fire, destroyed/destruction, untenantable/uninhabitable,
damage by fire, abate/abatement of rent, act of God, force majeure, each in the statute's words and
the everyday term, singular and plural, both word orders on the proximity patterns, with a nonsense
control at 0 and a labelled known positive).

Two consequences the row states rather than leaves implied:

1. **The lease is the only document that answers the question.** If it is silent, landlord and
   tenant argue common law with no statute to guide either of them. The row tells the landlord to
   write a casualty clause and names the four points it must cover: who may terminate and on what
   notice; whether rent abates in whole or in part while the unit is unusable; how a partial
   casualty is handled; and what happens to the deposit and prepaid rent on termination.
2. **A casualty termination still starts the deposit clock.** It is a "termination of the rental
   agreement" for Wyo. Stat. § 1-21-1208(a), so the thirty-day accounting runs from it. This is the
   kind of interaction a landlord drafting a casualty clause from another state's form would miss.

**Mitigation is the same shape** — no statute imposes a duty to re-rent and none forbids waiving
one — but the row expressly warns against reading that as permission to disclaim mitigation,
because nothing authorises the waiver either and a court applying ordinary contract principles can
still confine recovery to losses the landlord could not reasonably have avoided.

The topic's verdict is recorded **Present** rather than Absent, and the reason is worth stating so
the §2 line is not misread: the *casualty rule* is absent, but the topic as the library frames it
asks about **waivability**, and on that Wyoming has real law — Wyo. Stat. § 1-21-1202(d) permits
modifying the article's duties by explicit signed writing, and Wyo. Stat. § 1-21-1304 (Safe Homes
Act) is the one non-waivable floor.

---


### Items 3, 4 and 5 — answered by Claude, not by the topic canvass

All batteries below were re-run on the FIXED harness (whitespace-collapsed view; nonsense control
`zxqvwomble` = 0 hits at the time of each run). Corpus: Wyoming Statutes as published by the
Legislature, current to 2026-07-01, all 44 titles plus the constitution and noncodified statutes.

### Item 3 — shared fee clauses read against Wyoming law

**`keys` (re-key charges) — NO CONFLICT. Wyoming regulates none of this.**
Battery: `\brekey|re-key|change the locks|changing the locks|lock change` = **0 hits code-wide**.
`locks?\b` scoped to title 1 = 6 hits, none a landlord-tenant rule. Domestic-violence proximity run in
BOTH word orders: `(?:domestic abuse|sexual violence)(?:.|\n){0,400}?lock` = **0**; `lock(?:.|\n){0,400}?
(?:domestic abuse|sexual violence)` = **0**. The Wyoming Safe Homes Act, Wyo. Stat. §§ 1-21-1301 through
1-21-1304, was read whole: it creates two affirmative defences to a rent claim (§ 1-21-1303(a), (b)), a
status-based-termination ban (§ 1-21-1303(c)) and a non-waiver rule (§ 1-21-1304) — and **no lock-change
right of any kind**. So Wyoming is a state where a DV victim has no statutory right to a lock change,
and nothing caps or conditions a re-key charge. The clause stands as written.

**`hoa-compliance` (passing association fines to the tenant) — NO CONFLICT, for an unusual reason.**
Wyoming has a Condominium Ownership Act (Wyo. Stat. § 34-20-101 et seq.) but **no common-interest
ownership act and no general HOA statute**: `unit owners' association` = **0 hits**; `homeowners
association` = 2 hits, both in title 18 (county planning), neither regulating associations. No fine rule
reaches a tenant: `(?:fine|assessment)(?:.|\n){0,200}?\btenant\b` and the reverse order, both scoped to
title 34, = **0 and 0**. Nothing in Wyoming law regulates association fines or bars passing one to a
tenant by contract. The clause stands as written.

### Item 4 — the three central shared edits, under Wyoming law

**`smoking-policy` — reads correctly.** The remediation sentence is already limited to smoking by
"Tenant, an occupant, or a guest or invitee of Tenant", so it never charges the tenant for a stranger's
smoke. Nothing in Wyoming law cuts against the ban: no clean-indoor-air act (`clean indoor air` = 0), no
cannabis legalisation (the single `marijuana` hit is title 35's controlled-substances schedule; the six
`cannabis` hits are hemp and agriculture in titles 11, 14 and 35), and no statute protecting smoking or
vaping in a dwelling (`smok\w* (?:is|shall be) (?:permitted|allowed)` = 0). The Wyoming Constitution was
searched at the 2026-09-30 retro and has no cannabis provision, unlike Missouri's Article XIV.

**`no-alterations` — reads correctly, and its carve-out is inert here.** The sentence protecting an
installation "that applicable law makes Tenant's property" costs Wyoming nothing and protects against
nothing, because Wyoming has no such law: `trade fixture` = 0, `shall remain the (?:property|personal
property) of the (?:tenant|lessee)` = 0, `electric vehicle charging` = 0. The Solar Rights Act (§ 34-22-101
et seq.) is about solar access between landowners, not tenant installations. Harmless and correct.

**`addendum-precedence` — reads correctly.** Wyoming has no statute making any document control over a
lease: `notwithstanding any (?:provision|term) (?:of|in) (?:the|a) (?:lease|rental agreement)` = 0, and the
three `shall control over` hits are title 9 (state fund earnings) and title 35 (the Life is a Human Right
Act), none lease-related. The one Wyoming provision that requires text IN the agreement —
§ 1-21-1207's nonrefundable-deposit statement — sets no precedence rule. The clause's carve-out is
correct and, as with `no-alterations`, currently inert in Wyoming.

### Item 5 — CARES Act mentions

**Nothing disagrees, because only one WY row mentions it.** Of the 123 active rows carrying WY, exactly
**one** mentions the CARES Act or a federal 30-day notice to vacate: `edu-cares-act-notice` itself, the
shared federal row, on which Wyoming is tagged. No Wyoming-specific row mentions the federal 30-day
notice at all, so there is no row that could disagree with it.

One adjacent point, recorded so it is not mistaken for a conflict later:
`edu-foreclosure-tenant-rights-wy` carries the **Protecting Tenants at Foreclosure Act's 90-day** notice.
That is a different federal act from the CARES Act's 30-day notice, with different triggers, and the two
rows do not overlap or contradict. A landlord with a covered property at foreclosure may face both.

---


### Item 6 — currency of the new rows

The corpus titles are the Legislature's own download, current to **July 1, 2026** (after the 2026
budget session), so both the 2025 general session and the 2026 budget session are already in the
title text. The live question for this item is therefore narrower and was run as a systematic
check rather than left to each slice's assertion:

**Method.** Every statute section cited anywhere in the delta was extracted mechanically from the
row bodies, notes and citation fields — **740 distinct sections**. Each was searched against the
2025 and 2026 enrolled acts with the anchored `cite` matcher (`(?<![0-9.\-])NUM(?![0-9.\-])`, so
`1-3-119` cannot match `41-3-119`). **125 of the 740 are touched by a 2025 or 2026 act**; the 85
acts that touch them were then screened for an effective date later than July 1, 2026.

**Result — six acts carry a later effective date and touch a cited section. Every one was read, and
none changes a rule stated in a new row:**

| Act | Later date | Why it does not reach a new row |
|---|---|---|
| 2025 SF0025 (ch. 5) — electronic lien and title | July 1, 2027 | Only **cross-references** UETA, Wyo. Stat. §§ 40-21-101 through 40-21-119; it does not amend them. The electronic-communications row's UETA reasoning is unaffected. |
| 2026 SF0079 — sales and use tax | July 1, 2027 | Amends **§ 5-9-128(a)(vi)(D)**; the paragraph the delta relies on is **(a)(v)** (circuit court FED jurisdiction). The delayed date applies to the act's Section 2 only; the amendments are effective July 1, 2026 and are already in the title text. |
| 2026 SF0071 — administration of government | (none in fact) | Subsection (b) makes Sections 1 and 6 effective *immediately*, not later; the act is otherwise effective July 1, 2026. Its amendments to §§ 19-13-501, 35-9-152 to 35-9-157 and 7-19-201 are agency-renaming, not substantive. |
| 2026 SF0107 — motor vehicles | July 1, 2028 | Only cross-references §§ 31-3-102 and 39-15-107(b); amends neither. |
| 2026 SF0026 — taxation and revenue | Jan 1, 2027 | Amends **§ 39-11-105(a)(xxxvi)** (Game and Fish Commission real property). The delta cites (a)(xxiv), (a)(xliii) and (a)(xlv). No overlap. |
| 2026 SF0001 — general appropriations | Mar 15, 2027 | An appropriation made "notwithstanding § 39-15-111(p)(i)(A)"; it changes no rule of law a lease depends on. |

**One 2026 act does change a rule a new row states, and it is already in force.** 2026 SF0088
(enrolled act 52, Senate), effective **July 1, 2026**, created Wyo. Stat. § 6-2-320(a)(v),
extending the 1,000-foot residency restriction to **child care facilities**. Because it took effect
on the corpus date it is in the title text, and the affected row is written from the current text.
Two traps inside it are recorded in the row rather than smoothed over: the grandfather dates differ
(2010 for schools, 2026 for child care facilities), and the carve-outs at (b)(iii) and (b)(ix) —
including the sheriff-approved shelter and recovery-facility exemption — are drafted against the
**school** paragraph only.

**Conclusion: no enactment effective after July 1, 2026 alters any rule stated in a new row.**

### Points not settled from the corpus, with the course taken

Each of these was worked out as far as the corpus allows, then written into the row as the cautious course rather than left open (prompt: leave nothing 'to check later'). Every one turns on Wyoming **case law**, which is outside this corpus and was not read; no prediction is made in any row.


- [abandonment-and-mitigation] Whether Wyoming common law imposes an avoidable-consequences limit on a residential landlord's claim for rent after abandonment cannot be settled from this corpus, which holds no case law. Recommendation: keep the row's cautious course (express survival-of-liability clause plus documented re-rental effort) and have Wyoming counsel check the case law before the library asserts either way.

- [binding-arbitration] No Wyoming statute or (searchable) authority says whether a forcible entry and detainer action can be compelled to arbitration. Recommendation: keep the possession/unpaid-rent carve-out in the clause as drafted; the risk runs against the landlord, not the tenant, because § 1-36-104(c) stays the court action.

- [casualty-and-mitigation-waivable] Wyo. Stat. § 1-21-1202(d) permits modifying 'any duty or obligation in this article', which on its face includes the owner's habitability duties in §§ 1-21-1202(a) and 1-21-1203(a). How far a Wyoming court will enforce such a modification cannot be settled from this corpus, which holds no case law. Recommendation: the row already states the cautious course - name the duty and the statute expressly, get both signatures, and never draft a clause that leaves nobody responsible for a safe and sanitary dwelling.

- [construction-liens] Whether a lease clause that permits alterations with the landlord's written consent amounts to improvements 'specifically authorized by the landlord' under Wyo. Stat. § 29-2-105(a)(ii) cannot be settled from the statutes alone and no Wyoming case law is in the corpus. Recommendation: the education row states the cautious course — give consent in writing, describe it as permission rather than authorization or request, and disclaim any agreement to pay.

- [criminal-activity] Whether a blanket or aggressively drafted crime-free term creates unlawful disparate impact is not answerable from this corpus. Wyoming codifies no effects test ('disparate' = 0) and the governing material — federal Fair Housing Act case law and HUD's disparate-impact rule and guidance — is outside the corpus and was not read. I have made no prediction. Recommendation, already written into both rows: offer the clause as OPTIONAL, write it on conduct during the tenancy rather than on a person's record, state expressly that an arrest, charge or record is not itself a breach, apply it uniformly, and keep the § 1-21-1003 three-day notice in the text. If the library wants a position on screening on criminal history at application, that needs a federal-law read this canvass did not do.

- [cure-and-eviction-grounds] Wyo. Stat. § 1-21-1002(a)(vi) reaches only violations of §§ 1-21-1204 and 1-21-1205, so an ordinary lease breach becomes an eviction ground only through § 1-21-1204(a)(vii)'s duty to comply with all lawful requirements of the rental agreement. No case law is in the corpus to confirm a Wyoming court reads the chain that way. Recommendation: keep the row's instruction to plead the chain expressly (lease term, breach, § 1-21-1204(a)(vii), § 1-21-1002(a)(vi)) rather than pleading lease breach alone, and have Wyoming counsel confirm against the case law.

- [deposit-cost-schedule] Wyoming sets no dollar ceiling on a contract-stated deposit charge and there is no Wyoming case law in the corpus construing 'other costs provided by any contract' in § 1-21-1208(a). Recommendation: keep each scheduled amount at the landlord's genuine reasonable cost and cap the charge at what is actually spent, as the clause does, because § 1-21-1208(c) lets the renter recover the FULL deposit plus court costs if the owner 'unreasonably' fails to comply with subsection (a).

- [deposit-surrender-notice] Whether a Wyoming lease may make the deposit refund itself conditional on advance notice of surrender (the Texas model) cannot be settled from the statutes alone. Wyo. Stat. § 1-21-1202(d) appears to permit it; Wyo. Stat. § 1-21-1208(c)'s 'unreasonably fails to comply' remedy cuts the other way. Recommendation: draft it as a covenant with actual damages, as done here, and do not forfeit the deposit for a missed notice until there is case law.

- [dv-deposit-timing] Wyo. Stat. § 1-21-1303 creates an affirmative defense to a rent claim, not a termination right, so no statute says when the § 1-21-1208(a) deposit clock starts after a sole tenant vacates under the Safe Homes Act. Recommendation as written in the row: treat acceptance of the surrender as the termination and start the 30 days then, rather than holding the deposit to the end of the stated term.

- [electric-submetering-disclosure] Wyo. Stat. § 37-1-101(a)(vi)(H)(VI) says in terms that the tenant-use exemption does not apply to 'metered or other direct sales of a utility commodity by a producer or other person to his tenants,' and the legislature wrote a tenant-billing carve-out for water only, at (H)(VIII). On the statute's text a Wyoming landlord who submeters and bills electricity therefore loses the exemption and is a public utility under PSC jurisdiction. I could not confirm how the Public Service Commission actually applies this to small residential landlords, because PSC rules, orders and case law are not in the corpus. Recommendation: keep the row as written - it tells the landlord the cautious course (include electricity in rent, or put the account in the tenant's name, or get written PSC guidance before submetering) without asserting an enforcement outcome. A follow-up check of PSC rules (Chapter 3 service regulations) and any Wyoming case law on § 37-1-101(a)(vi)(H)(VI) would let a later row speak more definitely.

- [eminent-domain] Wyo. Stat. § 1-26-711(b) addresses only a PARTIAL taking; neither it nor any other Wyoming statute says what happens to the lease or the rent when the entire property is taken. I could not settle that from primary text, because the answer sits in common law and the corpus holds no case law. Recommendation: do not assert a rule for a total taking. The row states the gap plainly and the lease clause fills it by contract, which § 1-26-711(a) expressly permits. If the library can reach Wyoming case law later, the question to run is whether a total taking terminates a residential lease by operation of law and extinguishes the rent from the date of possession.

- [ev-charging-end-of-tenancy] Unsettled and stated as a cautious course in the row: whether the new $.035 per kilowatt hour license tax reaches an ordinary Level 2 charger at an apartment building. Wyo. Stat. § 39-17-304(a)(iv), added by 2026 Wyo. Sess. Laws ch. 33 (HB0145) effective July 1, 2026, levies the tax on 'all electricity sold or dispensed for sale or use in this state to propel a motor vehicle', with no DC-fast-charging-station limit, while the taxable-event provision at § 39-17-303(a)(iii) and the collection, metering and price-display duties at § 39-17-303(c)(ii)-(iii) are all still expressly confined to a DC fast charging station. The two cannot both be given their plain meaning. Section 2 of HB0145 directs the department of transportation and the department of revenue to promulgate implementing rules, and agency rules are outside this corpus, so the point cannot be settled from primary statutory text alone. My recommendation: leave the row as written (treat the tax as potentially applying, prefer a flat amenity fee over per-kWh pricing, check the agency rules) and have whoever has access to the Wyoming Department of Revenue alternative-fuel rules confirm the scope before any Wyoming row tells a landlord that per-kilowatt-hour EV billing to tenants is tax-free.

- [ev-charging-requirements] Unsettled and stated cautiously in the row rather than resolved: whether Wyoming's § 39-17-304(a)(iv) per-kilowatt-hour electricity tax reaches an ordinary Level 1 or Level 2 tenant charging outlet, given that § 39-17-303(b)(iii) imposes the tax only 'at a DC fast charging station' while § 39-17-304(a)(iv) levies it on 'all electricity sold or dispensed for sale or use in this state to propel a motor vehicle'. The corpus holds no agency rule or case resolving it, and § 39-17-305 supplies no exemption for (a)(iv) at all. My recommendation: leave the row as written — it tells the landlord to avoid per-kilowatt-hour billing entirely, which sidesteps both this question and the § 37-1-101(a)(vi)(H)(VI) public-utility problem in one move, so the landlord can act without the ambiguity being resolved. If the library later gains access to Wyoming Department of Revenue rules (Chapter 11, fuel tax) or PSC rules, both should be checked against this row.

- [ev-charging-shared-area] Whether Wyo. Stat. § 37-1-101(a)(vi)(H)(X) exempts a landlord who bills tenants per kilowatt hour for EV charging cannot be settled from the statute alone with total confidence, because no Wyoming decision is in this corpus and the Public Service Commission's own construction is an agency matter outside it. Recommendation: the row states the (H)(X) reading as the better argument, and also gives the cautious course (fold charging into rent or charge a flat stall fee) for a landlord who wants certainty. If the library ever adds agency material, the PSC's treatment of (H)(X) is the thing to check.

- [eviction-service-party] Whether a lease clause naming a person to accept the FED summons would be effective in Wyoming cannot be settled from this corpus. § 1-21-1004 incorporates service 'as in other cases', which points to the Wyoming Rules of Civil Procedure, and court rules are not in the corpus. Recommendation, written into the row: do not offer a named-service-party clause for Wyoming; if a landlord insists on one, use it only as an extra copy and always serve by the statutory route as well.

- [exculpatory-clauses] Whether a Wyoming court will enforce a residential lease clause exculpating the landlord from its own ordinary negligence, and how far Wyo. Stat. § 1-21-1202(d) lets the parties modify the habitability duties in §§ 1-21-1202(a) and 1-21-1203(a), cannot be settled from this corpus, which holds no case law. Recommendation: keep the row's cautious drafting course - prefer assigning a duty under § 1-21-1202(d) over disclaiming liability, say 'negligence' expressly and conspicuously, carve out gross negligence and willful misconduct, and include severability - and have Wyoming counsel check the anticipatory-release case law before the library asserts enforceability.

- [expedited-deposit-disposition] No Wyoming authority settles whether a lease-stated expediting or processing fee could be an 'other cost provided by any contract' deductible under § 1-21-1208(a). Recommendation: do not charge one. The phrase most naturally covers costs the owner incurs, and § 1-21-1208(c) forfeits the FULL deposit plus court costs for an unreasonable failure to comply with subsection (a).

- [fair-housing] Wyo. Stat. § 40-26-102(a)(viii) defines 'enforcing authority' as a Wyoming state agency OR a Wyoming nonprofit accepted by HUD for that role, rather than naming a standing agency. Whether any body currently holds that designation cannot be settled from the statutory corpus (no agency rules in it). Recommendation: the rows tell the landlord to confirm rather than assume, and lean on the self-executing private right of action at § 40-26-139 (district court, two years, actual and punitive damages) plus HUD, which operate regardless. If the library later gets access to Wyoming agency rules or HUD's FHAP list, this should be checked and the enforcement row updated.

- [firearms] § 6-8-401(c)'s preemption list ends with 'or any other entity', which on its face could be read to reach a private landlord. I resolved it against that reading because § 6-8-105(d)(ii) expressly preserves a private property owner's right to restrict firearms on his own property, and because the rest of the list is governmental. No Wyoming case construing the phrase is in this corpus (no case law is). Recommendation: keep the rows as written, and if the library ever adds a case-law pass, check for a decision on whether § 6-8-401(c) reaches private owners.

- [frozen-standard-incorporation] The operative edition of the International Fire Code, International Building Code and National Electrical Code under Wyo. Stat. §§ 35-9-106(a)(i) and 35-9-120(a) is set by Department of Fire Prevention and Electrical Safety rules, and the operative edition of the International Residential Code is set by each adopting county or municipality. Neither agency rules nor local ordinances are in this corpus, so the edition cannot be stated. Recommendation: keep the row's instruction to pull the current department rule and the local adopting ordinance rather than assuming the newest national edition, and do not let the library state a Wyoming code edition as a fact.

- [good-cause-notice] Wyoming has NO statutory notice period for ending a month-to-month or other periodic tenancy — the words 'month-to-month', 'periodic tenancy' and 'tenancy at will' appear nowhere in the statutes. Recommendation: the lease must state the notice period expressly (30 days before the next rent due date is the conventional choice); without a lease term the landlord is left to common law and to § 34-2-128's tenancy-by-sufferance default, which no statute in the corpus defines. Resolving the common-law period would need Wyoming case law, which the corpus does not hold.

- [habitability-presumption] A drafting inconsistency inside Wyo. Stat. § 1-21-1210(a)(iii), flagged for whichever slice owns abandoned property. Paragraph (iii) says that if the renter responds in writing within seven (7) days intending to collect, 'the property shall be held for an additional period of seven (7) days after the written response is received', and then in the next sentence refers to 'the additional fifteen (15) day period'. The two numbers do not match. My recommendation for any abandoned-property row: hold the property for fifteen (15) days after the written response rather than seven, since that is the longer of the two figures the same paragraph names and the cheaper error to make; and say in the row that the statute is internally inconsistent on this point so the landlord understands why the cautious figure is used.

- [holding-deposit] Whether Wyo. Stat. § 1-21-1208 reaches money held before any rental agreement exists cannot be settled from the text: § 1-21-1208(a) is keyed to 'termination of the rental agreement' and § 1-21-1201(a)(iii) and (v) define 'renter' and 'termination' by reference to a rental agreement. Recommendation as written: assume it does not, and cover the pre-signature period with a signed holding-deposit agreement plus the § 1-21-1207 written notice given at the time the money is taken.

- [holdover-rate] Not settled, and not settleable from this corpus: whether a Wyoming court would enforce a stipulated holdover charge as liquidated damages or strike it as a penalty. Wyoming has no liquidated-damages statute, so the question is pure common-law penalty doctrine, which is case law and outside this corpus. My recommendation, reflected in the row: ship the clause as OPTIONAL, default the builder variable to 150% of the daily equivalent of monthly rent and offer no higher figure, 100% in a HUD-regulated unit, frame it as a price for use and occupancy rather than as liquidated damages in substitution for actual damages, define it as Rent so Wyo. Stat. § 1-21-1008(b) can reach it, bar double recovery for the same day, and keep actual damages available as an alternative. If the library wants certainty rather than a reasoned best shape, the alternative is to offer only an actual-damages holdover clause and no stipulated rate — that is the one version no penalty challenge can reach, at the cost of making the landlord prove loss.

- [home-business] Whether a residential lease term counts as a 'covenant' within Wyo. Stat. § 34-1-501 cannot be settled from this corpus: the section sits in an article headed Covenants in the conveyancing chapter, which points to recorded restrictive covenants, but its words are not limited to recorded instruments, and case law is outside the corpus. Recommendation, already written into both rows: draft so the answer does not matter — make any child-care prohibition clear and express in the lease, which satisfies the section's own exception under either reading.

- [homestead-waiver] Wyoming's exemption article (Wyo. Stat. §§ 1-20-101 through 1-20-109) is simply silent on contractual waiver - it neither authorizes nor forbids one - and the corpus holds no case law on whether a residential lease may waive the Wyo. Stat. § 1-20-106 personal-property exemptions. Recommendation: keep the row's advice to omit any exemption waiver from Wyoming leases. The constitutional joint-consent requirement in Wyo. Const. art. 19, § 9 independently defeats a homestead waiver signed by one spouse, and an invalid clause buys nothing, so there is no upside to including one even if a court might uphold a narrow version.

- [inspection-condemnation-disclosure] Whether leasing a unit that is under a Wyo. Stat. § 35-9-156(d) uninhabitable-or-contaminated order counts as a 'transfer' triggering the subsection's full written disclosure duty. The sentence says property 'shall only be transferred or sold prior to remediation if full, written disclosure is made to the prospective purchaser', and everything around it (earnest money receipt, sale documents, notice to the incident commander within ten days of the transfer or sale) is sale machinery, but 'transferred' is undefined. I could not settle it from primary text and the corpus has no case law. Recommendation: treat the duty as applying. The row tells the landlord not to re-let before remediation and, if they let at all, to make the written disclosure to the tenant and notify the incident commander -- the cost of over-complying is nil.

- [limitation-of-actions] Could not be settled from primary statutory text: whether a renter's claim under Wyo. Stat. § 1-21-1208(c) for 'the full deposit and court costs' is governed by the eight (8) year period for a liability created by statute (§ 1-3-105(a)(ii)(B)) or the one (1) year period for an action upon a statute for a penalty or forfeiture (§ 1-3-105(a)(v)(D)). The statute gives the renter the FULL deposit regardless of what was actually owed, which has a penal flavour, but it is framed as recovery of the renter's own money rather than as a multiplier or fine, which cuts the other way; § 1-21-1208 prescribes no period of its own, so the (a)(v)(D) exception does not resolve it, and case law is outside this corpus. Recommendation: leave the row as written — tell landlords to assume eight (8) years and to keep deposit records that long — and have whoever has case-law access check Wyoming decisions characterising § 1-21-1208(c) before any row states a one-year bar.

- [meth-disclosure] Wyo. Stat. § 35-9-156(d) forbids property under an unremediated uninhabitable order being 'transferred or sold' without full written disclosure. Every surrounding reference is to a sale (purchaser, earnest money receipt, deed, buyer), so it probably does not reach a lease, but 'transferred' is broad and no Wyoming authority in this corpus settles it. Recommendation as written: never re-let under a live order, and give the same full written disclosure to any tenant of property that has been contaminated.

- [nonpayment-notice] Wyo. Stat. § 1-21-1003 authorizes only personal delivery of a written copy, or leaving it at the tenant's usual place of abode or business if the tenant cannot be found. It does not mention mail or posting, and no court rules or case law are in the corpus to say whether substantial compliance (certified mail, conspicuous posting) suffices. Recommendation: use one of the two statutory methods and document it; treat mail or posting as a supplement only, never as the service relied on.

- [plain-language] Whether the Wyoming Consumer Protection Act reaches a residential lease is unsettled: 'merchandise' expressly includes real property (§ 40-12-102(a)(vi)) but 'consumer transactions' is defined as advertising, offering for sale, sale or distribution (§ 40-12-102(a)(ii)), with no leasing verb, and no case law is in the corpus. Recommendation: assume it may apply to knowingly false statements made in advertising or renting, and do not rely on being outside it.

- [redemption] Wyoming has no statute on the effect of accepting rent after a notice to quit or after filing a forcible entry and detainer action, and case law is outside the corpus, so I could not settle whether acceptance waives the forfeiture and reinstates the tenancy. Recommendation: keep the row as written - it states the cautious course (decline, or accept only under a signed non-waiver agreement reached before the check is deposited) rather than asserting a rule. A later check of Wyoming Supreme Court authority on waiver by acceptance of rent would let the row speak more definitely.

- [rent-escalation] The output schema says to use `tag` only when tagging an existing multi-state row, 'then rows is []'. I have done both: tagged rent-escalation-la (which supplies the lease clause and needs no Wyoming duplicate) AND written one new LANDLORD_EDUCATION row, because the Wyoming-specific facts a landlord must know here — no rent regulation at all, no retaliation statute at all, no implied renewal under §§ 34-2-128 and 34-2-129, and the § 40-26-144(b) interference exposure — are not carried by the tagged clause and are not duplicated by it. Recommendation: accept both. If assembly requires a strict either/or, keep the education row and drop the tag, since the clause can be re-tagged cheaply but the Wyoming context cannot be reconstructed.

- [rent-receipt-anti-waiver] Stated cautiously in the row rather than resolved: whether a Wyoming landlord who accepts rent DURING a running term, after serving a § 1-21-1003 three-day notice to quit, waives the default. §§ 34-2-128 and 34-2-129 do not reach it — by their own words they govern only what follows expiration or termination of the term — and no Wyoming statute addresses waiver by acceptance of rent after breach; 'acceptance of rent' is a single corpus-wide hit and it is § 34-2-128. The governing law is therefore the common-law waiver-of-forfeiture doctrine, which is case law and outside this corpus. My recommendation: leave the row as written. It tells the landlord to take a signed use-and-occupancy, non-waiver acknowledgement before accepting any payment after a notice to quit, which is safe whichever way the doctrine runs in Wyoming, and it warns against relying on a lease-wide non-waiver clause alone. If the library later gains Wyoming case law, this is the first point to check.

- [rental-inspection] Whether a lease clause requiring the tenant to admit a government inspector gives the inspector lawful authority to enter cannot be answered from the statutes: Wyo. Stat. § 1-21-1205(a)(iii) names only the owner, agent or manager, and the occupant's Wyo. Const. art. 1, § 4 protection is personal to the tenant. Recommendation as written into the clause: keep the obligation running to the landlord, add an express savings sentence, and have the landlord attend the inspection so the statutory access right being exercised is the landlord's own.

- [required-fees] Tag-first turned up one multi-state lease clause on this topic, `fees-and-charges-vi` (VI;MP, LEASE_CLAUSE, SERVES_LANDLORD): it lists every fee, promises no other charges, and bars adding a fee mid-term without written agreement. Nothing in Wyoming law prohibits that clause - it is lawful as written here, and it dovetails with Wyo. Stat. § 1-21-1208(a)'s 'other costs provided by any contract' limit and § 1-21-1202(d)'s requirement that a modification be by explicit written agreement signed by the parties. I wrote the education row instead of tagging, because the answer schema allows only one of the two and the Wyoming-specific law (the deposit catch-all, the § 1-21-1207 nonrefundable notice and the § 1-1-115 bad-check remedy) would otherwise be lost. Recommendation: also tag `fees-and-charges-vi` for WY as lawful as written, as an optional clause companion to this education row.

- [servicemember-rights] Wyo. Stat. § 19-11-125(b)(vi) ('Other services provided pursuant to a contract that requires periodic and ongoing payments') may or may not reach a residential lease; the named items in (b)(i)-(v) are all consumer subscription services, which points away, but the text is broad and no Wyoming authority in this corpus decides it. Recommendation as written in the row: on notice plus orders, do not charge an early-termination fee, do not forfeit the deposit, and settle rent to the effective date — the downside (a § 19-11-122(b) misdemeanor plus a mandatory § 19-11-123 fee award) far exceeds the fee at stake.

- [sex-offender-occupancy] The § 6-2-320(b) mismatch cannot be settled from the corpus: subsection (b)'s stem confines its exceptions to paragraphs (a)(i) and (ii), yet two of the nine exceptions address residence near a school, which is (a)(iv)'s subject. Case law is outside the corpus. Recommendation, written into the education row: flag it, and tell an owner of a licensed care facility, shelter or recovery residence within 1,000 feet of a school or child care facility not to rely on (b)(iii) or (b)(ix) without advice.

- [statutory-early-termination] Wyo. Stat. § 19-11-125 lets a uniformed services member ordered to active service for more than 30 days suspend, and for more than 180 days terminate, a 'service contract'. Subsection (b) enumerates telecommunications, internet, television, athletic club or gym memberships and satellite radio, then adds (b)(vi), 'Other services provided pursuant to a contract that requires periodic and ongoing payments' — words broad enough on their face to capture a residential lease, which does require periodic and ongoing payments. I could not settle whether (b)(vi) reaches a lease: the five enumerated items are all consumer subscription services, which under ejusdem generis argues the catch-all is confined to that genus, and a lease is a conveyance of an interest in land rather than a 'service'; but nothing in the section says so, and (c) would otherwise give a Guard member a 10-day no-penalty exit with no loss of deposit. No Wyoming case construes it and case law is outside this corpus. RECOMMENDATION: do not rely on a lease being outside § 19-11-125. Treat a Guard or uniformed services member's written notice with a copy of orders as effective, honour it without charging a penalty, fee or loss of deposit, and rely on the federal SCRA framework, which reaches the same result for most such tenants anyway. The downside of guessing wrong is a § 19-11-125(e) misdemeanor with a $1,000 fine.

- [student-housing] Wyo. Stat. § 1-21-1201(a)(iv) limits the whole Residential Rental Property Act to a 'renter's principal place of residence'. Whether an academic-year tenancy by a student who keeps a permanent address elsewhere qualifies cannot be settled from this corpus, which holds no case law, and the answer determines whether §§ 1-21-1202, 1-21-1203, 1-21-1207, 1-21-1208, 1-21-1210 and 1-21-1211 apply at all. Recommendation: keep the row's advice to comply with the Act for every residential tenancy regardless, since the Act's owner-side protections (the § 1-21-1210 abandoned-property procedure above all) are worth more to a student-market landlord than the § 1-21-1208 obligations cost. The same definitional question affects seasonal and second-home rentals and should be flagged to whichever topic owns the Act's scope.

- [tenancy-at-will] One point I could not settle from the statutes: whether the Article 12 duties in Wyo. Stat. §§ 1-21-1201 through 1-21-1211 — habitability, deposits, abandoned property — continue to bind an owner during a tenancy by sufferance after the lease has expired. Wyo. Stat. § 34-2-128 says the sufferance tenancy carries 'the rights, duties, obligations and incidents of such tenancy' without saying what those are, and Article 12 keys to a 'residential rental unit' defined in § 1-21-1201(a)(iv) as the renter's principal place of residence, which a holdover's home still is. No statute resolves it and case law is outside this corpus. My recommendation, reflected in the row: assume the Article 12 duties continue until possession is actually returned. That is the cheaper error, and the deposit cascade in § 1-21-1208(a) runs from 'termination of the rental agreement' in any event, so a landlord who treats the duties as continuing is complying with § 1-21-1208 on either reading.

- [tenant-repair-agreement] Wyo. Stat. § 1-21-1202(d) is broad enough on its face to assign even the core habitability duties in §§ 1-21-1202(a) and 1-21-1203(a) to the tenant, and Wyoming attaches none of the usual safeguards. The corpus holds no case law testing that outer limit. Recommendation: keep the drafted clause's paragraph 3, which retains those core duties with the landlord, and keep the education row's division between safer uses (lawn, snow, filters, bulbs, waste, gutters, pool) and aggressive ones (furnace, water heater, roof, shared common areas). Have Wyoming counsel confirm against the case law before the library offers a clause that assigns a core duty.

- [utility-apportionment] Whether a ratio-based allocation (as opposed to submetering) of an electricity or gas bill is a 'direct sale' inside the § 37-1-101(a)(vi)(H)(VI) clawback cannot be settled from this corpus: it turns on Public Service Commission practice, and PSC rules, tariffs and orders are not in the corpus. Recommendation, written into both rows: treat it as inside the clawback, do not allocate electricity or gas at all, and recover those costs through rent or by putting the account in the tenant's name.

- [utility-disclosure-attachment] Whether an administrative or billing fee added to a submetered water pass-through defeats the exemption in Wyo. Stat. § 37-1-101(a)(vi)(H)(VIII) is decided in practice by the Wyoming Public Service Commission, whose rules and orders are not in this corpus. Recommendation: keep the row's cautious reading of the statute's own words - pass through metered water with no added fee of any kind, and for electricity and gas either include them in rent or have the tenant take service directly - and have the landlord confirm with the PSC before adopting a fee-bearing allocation program.

- [utility-interruption-submeter] Whether the Public Service Commission has by rule exempted or conditioned landlord electric submetering under § 37-1-101(a)(vi)(H)(VI) cannot be settled from this corpus, which holds no agency rules. Recommendation: the row tells the landlord to include electricity in rent or put the account in the tenant's name, and to get advice before running a submetered resale program.

- [utility-landlord-account] Whether a Wyoming landlord who submeters ELECTRICITY or GAS and bills tenants for it in fact becomes subject to Public Service Commission jurisdiction. The statutory text is clear that the exemption is withdrawn -- Wyo. Stat. § 37-1-101(a)(vi)(H)(VI) -- and clear that the water carve-outs at (H)(VIII) and (IX) do not extend to electricity or gas. What I cannot settle is the consequence, because PSC rules, tariffs and declaratory orders are not in the corpus and there is no case law. Recommendation: state the statutory position and the cautious course, as the row does -- separate accounts in the tenant's name, or utilities included in rent as a flat amount not presented as a metered sale -- and do not predict whether the Commission would act. If the library can reach PSC rules or orders later, the question to run is whether the Commission has ever asserted jurisdiction over a residential landlord submetering electricity or gas.

- [waiver-by-acceptance] Not settled by any Wyoming statute, and stated in the row as the cautious course rather than as an answer: whether a landlord who accepts rent during an UNEXPIRED term, after serving the three-day notice to quit under Wyo. Stat. § 1-21-1003, waives the notice and the underlying default. Wyo. Stat. §§ 34-2-128 and 34-2-129 do not reach it, because both are expressly keyed to a term that has expired. The risk is highest where the ground is nonpayment, because § 1-21-1002(a)(i) defines the ground as 'a failure to pay rent for three (3) days after it is due' and a tenant who has paid in full can argue the ground has evaporated. Wyoming case law would resolve this and is outside this corpus. Recommendation: leave the row as written (refuse the payment, or take it only under a signed use-and-occupancy and non-waiver writing, and put a non-waiver clause in the lease), and have whoever has case-law access check Wyoming decisions on waiver of a notice to quit by acceptance of rent before any row tells a landlord it is safe to accept rent after serving notice during a live term.


---

## §5 The independent check

Rule 80, scaled as the prompt directs: **at most 2 rounds, one agent at a time**, the second round
re-checking only rows edited after the first, stopping early on a clean round. Alongside the agent
rounds the main pass ran four **mechanical** checks over the whole delta, which catch a different
class of defect from a reader and are recorded here because they are reproducible.

### Mechanical checks (whole delta, every row — not a sample)

**1. Quotation fidelity, SOP rule 59 — `tools/quotecheck.py`.** Every statutory-looking quotation in
every row's `bodyText` and `notes` was extracted and matched against a whitespace-collapsed view of
the corpus, allowing the two legitimate quoting devices (bracketed alterations such as
`[i]ntentionally`, and ellipsis for omission) and comparing case-insensitively, since a bracketed
initial *signals* a deliberate case change. **122 quotations tested. Three real deviations found and
fixed; the 9 residual reports are all false positives** (clause fill-in text, a rhetorical question,
a search pattern recorded in notes, and one long quotation whose internal `"FIRE ESCAPE"` broke the
pairing — verified verbatim by hand). The three fixed:

- `edu-unauthorized-occupant-removal-wy` had added a serial comma inside a quotation of Wyo. Stat.
  § 1-21-1401(a)(ii), which reads "the sheriff, the sheriff's deputies **or** peace officers of a
  city or town."
- `edu-written-notice-required-wy` carried **emphasis capitals inside quotation marks** in two
  places ("IN WRITING", "ADDITIONAL PERIOD OF SEVEN (7) DAYS"). Both passages are otherwise verbatim;
  the capitals were removed so the quoted words are the statute's own.

**2. "treble" vs "triple" (rule 59, damages formula).** Wyo. Stat. § 1-21-1403(c)(ii) awards
"**triple** the fair market value of renting the residential dwelling during the period of wrongful
removal." `\btreble\b` is **0 in Title 1** (4 corpus-wide, Titles 13, 23, 33 and 42). **12 occurrences
across 9 rows** were corrected — and the correction matters twice over, because the rows had
paraphrased it as "treble fair market **rent**", which misses the measure as well as the multiplier.
*An earlier sweep of mine added the QC note to these rows without the body text actually changing;
the independent check caught that, correctly calling a note recording an unmade fix worse than no
note.* The second sweep made the change and verified it exhaustively. Remaining `treble` uses are
legitimate: a Minnesota comparison, federal treble damages, recorded search patterns, and one row
explaining why a "treble" search misleads in Wyoming.

**3. Statutory range recitations.** Article 10 runs **§§ 1-21-1001 through 1-21-1017**; § 1-21-1017
(business representation in "proceedings under this article") was read section-open to confirm it.
The endpoint "1016" is a **defect in the cross-referencing statute** § 5-9-128(a)(v), and it had
propagated into **13 range recitations across 7 topics**, including clause text. All corrected; the
verbatim quotation of the defective statute was deliberately left intact.

**4. Cross-row numeric contradictions.** Every sentence pairing a section cite with a day/hour period
was extracted and grouped. Six apparent conflicts all resolved as artefacts of sentence-splitting:
§ 1-21-1208 genuinely carries 30, 15, 10, 45 and 7-day periods across its deposit and
utilities-deposit chains. **No real contradiction between rows.** One *was* found earlier and fixed —
`holdover-tenancy-by-sufferance-wy` and `holdover-rate-wy` both set a holdover rate; the rate now
lives only in the optional clause (SOP rule 57).

**5. Reproducibility of recorded counts.** Two rows recorded contradictory counts for the same
pattern: `edu-no-condemned-rent-bar-wy` had `treble` = 4 (correct) and
`edu-landlord-remedies-termination-wy` had `treble` = 0 corpus-wide (wrong). Re-measured and
corrected. A recorded count that does not reproduce is a defect even where the verdict is right —
this is proposed SOP change 9.

### Round 1 — independent agent

**Coverage: all 240 topics / 308 rows as they stood at the round-1 snapshot, no triage.** The
quotation-fidelity, citation-existence and schema/scope/battery-structure sweeps ran over 100% of the
delta; the battery re-execution reached **3,001 of 3,338 recorded patterns (90%)** across eight corpus
scopes. **231 topics clean.** The agent modified no file under `/home/claude/answers/`.

**Its single most valuable result is a negative one: of the 1,628 patterns recorded at zero hits, not
one fires under any scope.** Every nonsense control is present and returns 0; every labelled known
positive fires. That is the strongest available evidence that the confirmed absences are real. The 17
residual non-reproductions were all traceable to scope annotations embedded in the `pattern` string
(`(scoped title01)`, `[title40]`) or to four unescaped `(digits)` groups whose escaped forms reproduce
the recorded counts exactly — not to a mis-measured count.

**It independently confirmed both items it was asked to verify**, and on one of them it caught me out:

- **Article 10 = §§ 1-21-1001 through 1-21-1017** — confirmed by enumerating every heading in Title 1
  ch. 21. § 1-21-1017's own text says "proceedings under this article" and the ARTICLE 11 heading
  follows it. The correction was complete.
- **§ 1-21-1403(c)(ii) = "triple"** — confirmed, **and my correction was not complete.** Nine
  occurrences across eight topics still said "treble", five of them in shipped `bodyText`, and five of
  those topics' notes *already asserted the fix had been made*. The agent's phrasing is the right
  standard and is adopted here: **a note recording a fix that was not made is worse than no note.**
  Fixed, exhaustively verified, and the QC notes now match the text.

**Defects it found that I fixed:**

| # | Defect | Resolution |
|---|---|---|
| G1 | `edu-unconscionability-wy` cited **§ 40-14-102(f)** three times for the "sale of an interest in land" definition. § 40-14-102 is "Purposes; rules of construction" and ends at (c) — it defines nothing. The whole rent-to-own / lease-option conclusion rested on it. | Corrected to **§ 40-14-205(f)**, confirmed by the definition indexes at § 40-14-142(a)(lii) and § 40-14-203(a)(xv) |
| G2 | § 31-16-110(o) cited for the duty to mitigate damages; § 31-16-110 is "Succession to franchise ownership" | Corrected to **§ 31-16-109(o)** |
| F1 | **Five clause rows each set a holdover charge** — four unconditional, two on `{{holdover_daily_rate}}`, one a free-text bracket — with no `choice_group` to keep them apart. I had fixed only one pair. | The rate now lives in `holdover-rate-wy` alone; the other four keep the obligation to pay compensation for use and occupancy and refer to it. SOP rule 57 |
| F2 | Three clause rows each allocated utilities in full, and their texts disagreed — one put the landlord-held utilities "included in the Rent", another said only that Landlord "will not bill Tenant separately" | `utility-cost-allocation-wy` owns the allocation; the other two keep their own subject and cross-reference it |
| F4 | `deposit-surrender-notice-wy` carried `REQUIRED_DISCLOSURE: § 1-21-1208(a)`, but that subsection requires no lease text — its duties run to the renter and the owner. The row also asserted that mailing to the last known address "satisfies Landlord's obligation under § 1-21-1208(a)", which the statute does not say | Basis → `SERVES_LANDLORD`, `rule_type` → `RECOMMENDED`, and the self-certifying sentence removed. A lease cannot declare its own statutory compliance |
| E1/E3 | Three colon-subtitle titles; the non-standard `[e]ngage[]` alteration; **10** `xx` placeholder citations (the agent found 3) | All fixed. **Two placeholders were not merely vague but pointed at the wrong chapter**: the firefighter presumption is § 27-15-102, not "27-14-6xx", and the hazardous-materials mitigation provision is § 1-1-120, not "1-39-1xx" |

**One finding declined, one withdrawn by the agent itself, one false positive.** F3 (three rows
carrying the § 1-21-1207 nonrefundable recital) was examined and declined: the three are
cross-references doing distinct work, and `deposit-cost-schedule-wy` already disclaims making anything
nonrefundable and points to the section that owns it. The agent withdrew three of its own findings on
re-check — the `S`/`SS` glyph residue (pre-assembly only; the assembled CSV has **0** letter-cites and
7,839 `§` glyphs), the placeholder count, and **the $100-floor half of B2, which was a false positive**:
both rows state the floor verbatim, and a phrase the finding attributed to a row appears in no row.
Recording that matters — a check that produces a false positive is information about the check.

### Round 2 — independent agent (final round)

Scope as the SOP directs: **only rows added or edited after round 1** — 49 topics (13 added, 36
edited). The agent re-assembled the delta first so every check ran against what actually ships, then
worked all seven checks, re-running the full 683-entry battery for those topics and reading the
load-bearing statutes section-open.

**Round 2 was not a clean round, so the check ends at the cap of two rounds rather than early.** It
confirmed that ten of eleven round-1 fixes had landed, and found three more ship-blockers.

**S1 — the emphasis-capitals fix had not landed, and the reason is a defect in my own tool.** Round 1
flagged capitals inside quotation marks in `edu-written-notice-required-wy`; I fixed the two instances
I found by hand and left a QC note implying the row was clear. **Twelve quotations across nine rows
still carried them.** My `quotecheck.py` could not see them: I had made it case-insensitive so that
bracketed alterations like `[i]ntentionally` would stop producing false positives, and that change
blinded it to case deviations, which are themselves the defect. All twelve are now restored to the
statute's own casing, taken from the corpus text rather than retyped, and **the checker now reports
case deviations as their own class** — it reads 0 against the shipped delta.

*This is the second time in this pass that a note recorded a fix that was not fully made, and both
times an independent agent caught it. The lesson is in proposed SOP change 9 and is worth stating
plainly: a QC note is a claim, and a claim about a correction needs verifying exactly like a claim
about a statute.*

**S2 — `utility-transfer-wy` and its education row contradicted eight other rows.** They told the
landlord to bill the utility "plus an administrative charge of $[amount] per service per billing
period." Billing a tenant the cost of a utility commodity plus a markup is a "metered or other direct
sale … to his tenants" inside the Wyo. Stat. § 37-1-101(a)(vi)(H)(VI) clawback, and the consequence
there is **loss of the public-utility exemption itself**, not an unenforceable fee; for water,
(H)(VIII) carries its own "no additional fees or charges" limit. The charge is removed. The same
sentence carried a second contradiction the check did not name — it made the charge "payable as
additional rent", which `edu-fees-as-rent-wy` warns against, because no Wyoming statute makes a fee
rent and so it cannot run through the three-day nonpayment route. Also removed.

**S3 — two ungated clause rows conflicted, and one conflict was a legal risk rather than untidiness.**
`purpose-limitation-wy` flatly banned "short-term or transient lodging of any kind" while
`occupants-and-guests-wy` permitted it with Landlord's written consent; the ban now carries the same
consent gate. Separately, **two clause rows each opened a `[number]` blank for the occupancy number**.
Wyo. Stat. § 1-21-1204(a)(v) makes the renter's duty turn on the number "specified in the rental
agreement", so two blanks filled differently make the statutory duty itself ambiguous.
`occupants-and-guests-wy` owns the number because it is the row that ties it to the statute;
`guest-policy-wy` now refers to it.

**Three smaller corrections, two of them to recorded numbers I wrote myself:** § 34-14-208(e) →
**§ 34-14-209(e)** (§ 34-14-208 is "Remedies of creditors"; the lease-termination defence is in
"Defenses, liability and protection of transferee"); the known positive `nuisance` recorded as "300+"
in my own tag note when the measured count is **94**; and "18 section headings" for Article 10 when
the range it states, §§ 1-21-1001 to 1-21-1017, is **17** — a note contradicting itself, in the same
row whose `treble` count also failed to reproduce.

**What round 2 could not break.** No false absence anywhere: 637 of 645 in-scope patterns reproduce,
and all eight exceptions are scope annotations inside pattern strings or non-numeric `hits` values,
not mis-measured counts. All 38 anchored `cite` entries reproduce exactly. Every one of the 49 topics
carries a working `zxqvwomble` control at 0 and a known positive that fires. Schema, scope fence and
the `governmental-fines` tag chain (§ 1-21-1204(a)(vii) → § 1-21-1002(a)(vi)) all verify. Of the
thirteen topics added after round 1 it said the legal substance is the strongest work in the delta and
it could not break it — § 6-2-320's two differing grandfather clauses, the § 6-2-320(b) stem defect,
§ 34-1-501 as a covenants-only rule, and § 35-7-374(c)'s express preemption of local pesticide-notice
ordinances all check word for word.

**One correction back to round 1:** round 1 cited "§ 40-14-101(a)(lii)" for the UCCC definition index;
§ 40-14-101 is "Short title". The index is **§ 40-14-142(a)(lii)**, which is what the QC note in the
delta says.

### Rows edited after the last round

Sixteen topics, twenty-two rows and one tag were edited after round 2 reported, all in response to its
findings. None has been re-checked by an independent agent, and the SOP's two-round cap is reached, so
they are listed here for the sync:

| topic | row(s) / tag | why |
|---|---|---|
| `written-notice-required` | `edu-written-notice-required-wy` | S1 — 4 quotations restored to statutory casing |
| `lease-registration` | `edu-lease-registration-wy` | S1 |
| `rent-tax` | `edu-rent-tax-wy` | S1 |
| `repair-escrow-exemption-notice` | `edu-no-repair-escrow-exemption-wy` | S1 |
| `security-deposit-interest` | `edu-no-security-deposit-interest-wy` | S1 |
| `social-security-defense` | `edu-no-benefit-delay-defense-wy` | S1 |
| `statute-of-frauds-lease-term` | `edu-statute-of-frauds-lease-term-wy` | S1 |
| `statutory-caps` | `edu-statutory-caps-wy` | S1 |
| `utility-apportionment` | `edu-utility-apportionment-wy` | S1 |
| `utility-transfer` | `utility-transfer-wy`, `edu-no-utility-transfer-cutoff-wy` | S2 — administrative charge and "additional rent" removed |
| `purpose-limitation` | `purpose-limitation-wy` | S3 — lodging ban now consent-gated |
| `purpose-limitation` | `edu-purpose-limitation-wy` | § 34-14-208(e) → § 34-14-209(e) |
| `guest-rights` | `guest-policy-wy` | S3 — no longer opens a second occupancy blank |
| `governmental-fines` | tag on `tenant-caused-fines-as` | `nuisance` count corrected 300+ → 94 |
| `landlord-remedies-termination` | `edu-landlord-remedies-termination-wy` | Article 10 heading count 18 → 17 |
| `utility-landlord-account` | `utility-landlord-account-wy` | cross-reference retitled to the owning section |
| `utility-submetering-disclosure` | `utility-responsibility-and-allocation-wy` | cross-reference retitled to the owning section |

After these edits the whole delta was re-assembled and re-checked mechanically: **336 rows, 17 columns
exact, 0 letter-citations, 0 `xx` placeholders, 0 case deviations inside quotations, exactly one row
setting a holdover rate, 8,104 `§` glyphs, and every one of 162 absences carrying a battery.**

---

## §6 Findings on existing rows

— raised by the gaps canvass (not fixed; scope fence)

**1. A whole article the library never saw: Title 1, ch. 21, ARTICLE 14 — Removal of Unauthorized
Occupants, Wyo. Stat. §§ 1-21-1401 through 1-21-1403**, added by 2025 Wyo. Sess. Laws ch. 20 (SF0006).
Verified section-open in the corpus text of Title 1 and against the enrolled act.

This matters twice over.

*As a finding on a row.* `edu-no-self-help-eviction-statute-wy` says "The FED process is the route the
statutes actually provide." That is still correct **for tenants** — § 1-21-1402(a)(iv) excludes anyone who
"is not a current or former tenant pursuant to a written or oral rental or lease agreement" — but it is now
incomplete as a statement about Wyoming. For a non-tenant occupying a dwelling unlawfully, Article 14
supplies a second, non-judicial route: a sworn complaint to law enforcement, immediate notice to vacate,
the owner restored to possession, and a lock change with an officer present, backed by treble fair-market
rent plus fees against an owner who misuses it (§ 1-21-1403(c)). Suggested wording for Claude Code: keep
the row's tenant-facing holding and add one sentence distinguishing Article 14 as available only against a
person who never was a tenant.

*As a finding on my own prior work, which is the more useful half.* The 2026-09-30 and 2026-10-04 retro
logs both state the evidentiary boundary for every Wyoming absence row as **"Articles 10, 12 and 13 read
whole."** Article 14 was already law when both were written. I did not find it because neither pass had a
code-wide corpus — the boundary was three articles reached by guessing gateway node numbers (63, 65, 66),
and nothing told me a node 67 existed. Every Wyoming absence row carrying that boundary phrase is sound on
its own subject but was screened against an article set that was one article short. Claude Code should
treat "Articles 10, 12 and 13 read whole" in those logs as superseded by this pass's corpus-wide batteries.

**2. Scope qualifier missing from Wyoming's deposit and habitability rows.** § 1-21-1201(a)(iv) defines
"residential rental unit" as "a renter's **principal place of residence**", excluding "a mobile home lot or
recreational property rented on an occasional basis." That definition gates the whole of Article 12 —
habitability, deposits, abandoned property. A Wyoming row that states a deposit or habitability rule as
applying to every rental is missing the qualifier. Article 10 eviction procedure is unaffected and still
applies. Affected rows include `edu-security-deposit-return-wy`, `edu-habitability-baseline-wy` and
`edu-deposit-noncompliance-penalty-wy`. Not fixed here.

**3. § 1-21-1202(d) does not reach Article 10.** Its words are "any duty or obligation in **this article**",
and it sits in Article 12. So it is not authority for waiving the § 1-21-1003 notice to quit, the
§ 1-21-1002(a)(i) grace period, or any other Article 10 procedure. Recorded because the modification power
is broad enough that it invites over-reading, and `duty-reassignment-wy` and `edu-habitability-waiver-wy`
both rest on it (correctly — both are Article 12 subjects).

**4. `edu-consumer-protection-act-wy` can be sharpened — my own row, from the 2026-09-30 retro.** It
says whether the Wyoming Consumer Protection Act reaches a residential lease "is genuinely unsettled on
the words," because I read only §§ 40-12-102 and 40-12-105 and could not resolve whether letting a
dwelling is a "sale or distribution." This pass read further. § 40-12-102(a)(vi) defines "merchandise" to
include property "real, personal or mixed"; § 40-12-105(a) is gated on "knowingly," with (a)(viii) and the
(a)(xv) catch-all reaching lease wording and advertising; and — the piece I never read — **§ 40-12-110
contains no real-property exemption**. § 40-12-109 requires pre-suit notice and a cure period. The row's
caution is not wrong, but "unsettled" now understates it: the Act has no exemption that would keep a
landlord out, and it is the only knowing-conduct hook on a Wyoming landlord anywhere in the code. Not
fixed here (scope fence). Suggested for Claude Code: keep the no-case-law caveat, drop "unresolved on the
text," and add the § 40-12-110 and § 40-12-109 points.

**5. Scope qualifier, second instance.** `edu-no-self-help-eviction-statute-wy` and
`edu-no-quiet-possession-statute-wy` both describe Wyoming's possession machinery as "the three-day notice
to quit, the court action, and a sheriff acting on a court order." With Article 14 now in view that list is
incomplete for a non-tenant occupant, and both rows would benefit from the same one-sentence addition
described in finding 1.

**6. `assistance-animal-accommodation-wy` tells only half of a two-sided penalty statute.** The clause
warns the TENANT that knowingly misrepresenting an animal is a misdemeanor punishable by up to $750
(Wyo. Stat. § 35-13-203(b)) — correct, and verified again this pass. But § 35-13-203 has two subsections,
and **(a) runs against the landlord**: "Any person denying or interfering with admittance to or enjoyment
of any place or facility referenced in W.S. 35-13-201(a) through (c) or otherwise interfering with the
rights of the blind, partially blind, deaf, hearing impaired person or other person with a disability is
guilty of a misdemeanor and may be fined not more than seven hundred fifty dollars ($750.00)."
§ 35-13-201(c) is the residential-leasing assistance-animal right, so **refusing an assistance animal is
itself a crime in Wyoming**, carrying the same $750 as the tenant-side offence. The row cites (b) and
never mentions (a). A landlord reading it learns the tenant faces a criminal penalty for lying and does
not learn that he faces one for refusing. Read section-open in the corpus text of Title 35. Not fixed
here (scope fence). Suggested for Claude Code: add one sentence giving (a) the same prominence as (b),
and note that § 40-26-107(c)(ii) supplies the parallel civil reasonable-accommodation duty.


### 7. `edu-no-immigrant-tenant-protection-wy` — right answer, wrong basis, and the basis is now checkable

This row was written when no Wyoming corpus could be loaded. Its own notes say so:
*"Title 40 ch. 26 not read for this row"* and *"no loadable Wyoming corpus exists for this session
(org egress policy returns 403 for every statute host)."* This pass has the corpus, so the gap the
row flagged can be closed. **Its conclusion survives; three statements supporting it do not.**

**(a) The row states something false about Wyoming law.** The notes read:

> "multiple independent Wyoming landlord-tenant law overviews consistently describe protected
> classes as **federal-only with no state additions**"

Wyoming has its own fair housing act — **Wyo. Stat. §§ 40-26-101 through 40-26-145** — with its own
protected classes. `national origin` returns **14 hits in Title 40**. The "federal-only, no state
additions" description is wrong as a statement of Wyoming law, whatever the secondary overviews
say, and it is the kind of sentence another row could be built on. (Related: the substantive
prohibitions at §§ 40-26-103 to 40-26-109 carry no age or marital-status class, but
**§ 40-26-144(a)(i)** does — its list is "race, color, religion, sex, disability, **age**, familial
status, national origin or **status with respect to marriage or public assistance**" — for the
force-or-threat intimidation offence.)

**(b) The absence now has a real battery instead of secondary agreement.** Run corpus-wide this
pass: `immigration status` **19** (Titles 9 and 42, welfare and public assistance; 2025 HB0133;
2026 SF0106) · `immigration` **59** (none in Title 40) · `immigrant` **1** (Title 6) ·
`citizenship status` **2** · `alienage` **2** (Title 2, descent and distribution) · `undocumented`
**0** · `lawful presence` **4** · `lawfully present` **17** (Titles 27, 32, 42 — employment and
benefits) · **Title 40 scope: `immigration` 0, `citizenship` 0.** Control `zxqvwomble` **0**; known
positive `national origin` **45** corpus-wide, **14 in Title 40**. The one 2026 act on point,
**SF0106** (enrolled act 68, Senate), was read: it is a welfare and Medicaid eligibility act
requiring verification of "citizenship or immigration status" for public assistance and hospital
admissions. **It does not reach landlords, housing or leases.** *Conclusion: confirmed absent, now
on the code rather than on overviews.*

**(c) Two smaller defects.** The row's `rule_type` is **PROHIBITED**, but its body states an
absence — no Wyoming statute prohibits the inquiry — so nothing is prohibited and the type
contradicts the text. And the body asserts *"Only California, Illinois, and Colorado have been
found to have a dedicated statute of this kind"* — an other-states claim inside a Wyoming row,
unsourced and liable to go stale as the library grows.

**Suggested wording** (Claude Code to apply; not changed here, per the scope fence). Replace the
notes sentence at (a) with:

> Wyoming has its own fair housing act, Wyo. Stat. §§ 40-26-101 through 40-26-145; its classes are
> not federal-only. None of them is immigration or citizenship status: `immigration` and
> `citizenship` both return 0 in Title 40, and `national origin` returns 14.

and change `rule_type` to **RECOMMENDED** to match a confirmed-absence education row.

---

### 8. Two rows read only half of Wyo. Stat. § 1-21-1204(a)(v)

The paragraph contains **two** duties, not one:

> (v) **Occupy the residential rental unit in the manner for which it was designed** *and* shall not
> increase the number of occupants above that specified in the rental agreement without written
> permission of the owner;
> — Wyo. Stat. § 1-21-1204(a)(v), read section-open

The first limb is **Wyoming's statutory purpose limitation**. It operates with no lease clause at
all, and because § 1-21-1002(a)(vi) grounds a forcible entry and detainer action on violation of any
duty imposed under § 1-21-1204, it carries its own eviction ground. Two existing rows describe the
paragraph as if the occupancy cap were all of it:

- **`edu-contracted-appliances-duty-wy`** — *"1-21-1204(a)(v) (occupancy above the number 'specified
  in the rental agreement' — already carried by `permitted-occupants`)."* The conclusion that
  `permitted-occupants` carries it is true of the second limb only; nothing carries the first.
- **`edu-no-lease-completeness-rule-wy`** — lists *"the occupancy number (W.S. 1-21-1204(a)(v))"*
  among the blanks a lease should fill in. Correct for the second limb; the first is not a blank to
  fill, it is a duty that binds whatever the lease says.

**Suggested wording** (Claude Code to apply): in both rows, describe the paragraph as *"§ 1-21-1204(a)(v)
— two duties: occupy the unit in the manner for which it was designed, and do not exceed the
occupancy number specified in the rental agreement without written permission."* The first limb is
answered in this delta at the `purpose-limitation` topic.

---

## §7 Findings for other states

**None.**

Stated positively, because an empty section is otherwise ambiguous: the canvass read a large number
of shared multi-state rows in the course of the tag-first screen (SOP rules 26-28), and every
apparent problem resolved on inspection into either (a) another state's correctly-scoped segment on
a shared row, or (b) a warning about a row that does not exist ("any row that said X would be
wrong"). No existing row belonging to another state was found to misstate that state's law.

Two near-misses are recorded so a later pass does not re-open them:

- **`utility-allowance-cap-co`** was examined as a tag candidate and **rejected for Wyoming** — an
  allowance-plus-metered-overage structure for electricity or gas is the exact "metered or other
  direct sale ... to his tenants" caught by the Wyo. Stat. § 37-1-101(a)(vi)(H)(VI) clawback, and
  the consequence there is loss of the public-utility exemption, not merely an invalid fee. That is
  a finding about **Wyoming**, not a defect in the Colorado row, which is correct for Colorado.
- **`tenant-caused-fines-as`** (AS;MP) is correct as written for American Samoa, which has an actual
  statutory liability at A.S.C.A. § 13.0224(c)(6). Wyoming has no analogue, so the row was tagged
  with a note making the Wyoming basis contract-only. The existing AS and MP segments are untouched.

---

## Variables

**Reused where the library already had a name.** Seven uses across four rows were normalised at QC after different canvass slices coined parallel names for the same field: `{{lease_start_date}}` and `{{lease_end_date}}` to the library's `{{start_date}}` and `{{end_date}}`, `{{owner_notice_address}}` to `{{owner_address}}`, `{{utilities_deposit}}` to `{{utility_deposit}}`, and three utility-side synonyms to `{{landlord_utilities}}` and `{{tenant_utilities}}`. `{{holdover_daily_rate}}` (library, 20 uses) is reused by the new holdover clause.

**34 genuinely new variables**, all for fields Wyoming's rows need and the library has no name for. The `wy_manager_*` trio follows the library's existing state-prefixed pattern (`{{va_resident_agent_name}}`).

| variable | uses |
|---|---|
| `{{child_care_liability_amount}}` | 1 |
| `{{concession_application}}` | 1 |
| `{{concession_description}}` | 1 |
| `{{concession_total_value}}` | 1 |
| `{{credential_data_deletion_days}}` | 1 |
| `{{fee_bearing_method}}` | 1 |
| `{{guaranty_end_date}}` | 1 |
| `{{guaranty_max_liability}}` | 1 |
| `{{included_utilities}}` | 1 |
| `{{insurance_proof_days}}` | 1 |
| `{{landlord_utilities}}` | 2 |
| `{{lost_credential_notice_days}}` | 1 |
| `{{max_children_in_care}}` | 1 |
| `{{nonelectronic_payment_method}}` | 1 |
| `{{number_of_units_on_master_meter}}` | 1 |
| `{{payment_address}}` | 1 |
| `{{pool_guest_limit}}` | 1 |
| `{{pool_minimum_age}}` | 1 |
| `{{portal_fee}}` | 1 |
| `{{renters_liability_limit}}` | 2 |
| `{{scheduled_services}}` | 1 |
| `{{seasonal_amenities_statement}}` | 1 |
| `{{seasonal_property_description}}` | 1 |
| `{{service_notice_hours}}` | 1 |
| `{{smart_access_credential_count}}` | 1 |
| `{{smart_access_locations}}` | 1 |
| `{{smart_access_method}}` | 1 |
| `{{tenant_notice_days}}` | 1 |
| `{{tenant_other_residence}}` | 1 |
| `{{tenant_utilities}}` | 3 |
| `{{water_allocation_method}}` | 1 |
| `{{wy_manager_address}}` | 1 |
| `{{wy_manager_name}}` | 1 |
| `{{wy_manager_phone}}` | 1 |

---

## Proposed SOP changes

Ten proposals. Eight are **false-signal mechanisms** — ways a search returns a confident zero that
is not a real absence — and one is about a battery's own integrity. Every one was hit in this pass,
most of them more than once, and every one would have shipped a wrong confirmed-absence row if it
had not been caught. They are offered as additions to SOP rule 19, which already requires controls
and known positives but does not yet guard the *search surface* itself.

**The common failure is the same in all eight: a battery proves the pattern did not match. Rule 19's
control proves the corpus can return a true empty. Neither proves the pattern could ever have
matched the text if the text were there.** That is the gap.

---

**1. The search surface must be line-wrap-proof, and a multi-word known positive must prove it.**
*This is the most serious one and it nearly corrupted the whole pass.* Corpus text produced by
`pdftotext -layout` wraps mid-sentence, so a multi-word literal spanning a line break never matches.
Every multi-word battery in this pass returned a **false zero** until the harness gained a
whitespace-collapsed view of each document. It was caught only because `Condominium Ownership Act`
returned 0 while Wyoming plainly has one at Wyo. Stat. § 34-20-101. On revalidation the control
still returned 0 and `residential rental unit` went **20 → 23**.
*Proposed:* search a whitespace-collapsed view of the corpus, and require **at least one known
positive that is itself multi-word**, so the positive fails if the surface is line-broken. A
single-word positive cannot detect this failure and gives false assurance.

**2. Escape the statute's own number style.** Wyoming writes `seven (7) days`. Pasted into a regex,
`(7)` becomes a capture group matching the bare digit, so the pattern silently stops being the
phrase the drafter searched for.
*Proposed:* rule 19 should require patterns taken from statutory text to be escaped, or run as
literals.

**3. Anchor bare section numbers.** `1-3-119` matched 7 times in this corpus; **6 were `41-3-119`
and `21-3-119`.** A canvasser counting hits concludes a section is discussed where it is not — or,
worse, reads the wrong section's text and attributes it.
*Proposed:* require `(?<![0-9.\-])NUM(?![0-9.\-])` for any section-number search, and require the
battery to record anchored and unanchored counts when they differ.

**4. Scope filters must be case-insensitive.** A scope of `title97` silently returned 0 because the
file is named `Title97`. A silent zero from a *scope* looks exactly like a real absence.
*Proposed:* match scopes case-insensitively, and make a scope that matches **no document** an
error rather than an empty result.

**5. Search the subject, not the role.** Two universal Wyoming duties catch landlords and neither
contains the word "landlord": Wyo. Stat. § 14-3-205(a) (child abuse, "Any person") and
§ 35-20-103(a) (vulnerable adults, "Any person or agency"), the second carrying a criminal penalty
for failing to report under § 35-20-111(b). Searching the role finds neither. Likewise
§ 6-2-320's residency restriction is invisible to `residency restriction` (0) and
`shall not reside` near school or day care (0, **both orders**); it was found only by searching the
subject, `within one thousand`.
*Proposed:* for any topic framed by a role, require at least one battery pattern on the **conduct
or subject matter** rather than the actor.

**6. Proximity must be run in both word orders before an absence is recorded.** Wyo. Stat. § 6-6-201
is invisible to `nuisance.{0,60}controlled substance` and visible only in the reverse order.
*Proposed:* make both orders mandatory for any proximity pattern supporting a negative finding.
(Rule 19 already says "proximity in BOTH word orders"; this pass suggests it needs to be stated as
a *validation* requirement, because batteries were still submitted with one order.)

**7. Short words need word boundaries, and the trap list should be in the SOP.** Found this pass,
each producing false positives that a canvasser would otherwise have counted as real:
`late` inside *related* and *appellate* (all nine Title 1 late-rent proximity hits were false);
`lease` inside *release* (every one of twenty meth-contamination hits, and several servicemember
hits); `tow` inside *town*; `attorn` inside *attorney* (so `\battorn(ment)?\b` = 0 is what actually
establishes Wyoming has no attornment provision); `avigation` inside *navigation* (22 hits, all
false); `HIV` inside *archive* and *hive* (72 hits across nine titles, **all** false);
`screens` inside *screening*; `oven` inside *proven* and *government* (unbounded `oven` returns
1,740 hits, `\boven\b` returns **0**).
*Proposed:* require `\b` on any search term under six characters, and carry a standing trap list.
Three further phrase traps found this pass belong on it: Wyoming says **"registered offender"**, so
`registered sex offender` = 0; it writes numbers as words-plus-figures, so `1,000 feet` = 0 while
`one thousand \(1,000\) feet` = 27; and `pest control` = 28 corpus-wide but **0 in Title 1**, all
hits being weed-and-pest districts and appropriations.

**8. Never recite a statutory range taken from a cross-reference; verify the article's last
section.** Wyoming's Article 10 runs §§ 1-21-1001 through **1-21-1017**, but § 5-9-128(a)(v) names
"1-21-1001 through 1-21-**1016**" — a defect in the cross-referencing statute. That wrong endpoint
propagated into **13 range recitations across 7 topics** in this pass, including into clause text a
court would read, before it was caught by reading § 1-21-1017 directly.

**This is not a quirk; it is a pattern, and this pass hit it three times.** § 1-21-1002(b) saves
"1-21-1201 through 1-21-**1210**" though Article 12 runs to 1211. And § 40-12-501(a)(xi) — the
data-breach article's *own* scope sentence — says *"'This act' means W.S. 40-12-501 through
40-12-511"* when the article ends at § 40-12-509: anchored searches give `40-12-510` = **0**
corpus-wide, and the only `40-12-511` hit is that self-reference. One row had repeated that range as
its own claim and was corrected. A statute's self-description of its own extent is exactly as
unreliable as another statute's cross-reference.
*Proposed:* a range recited in a clause must be verified by reading the first section *past* the
claimed endpoint and confirming it falls outside the article — not by copying a range from another
statute, however authoritative that statute looks.

**9. A recorded hit count must be reproducible, and the check should re-run a sample.** I introduced
this error myself: adding a known positive to a battery, I recorded `hits: 86` for `sex offender`
when the measured count is **44**. The conclusion was unaffected, but a battery exists precisely so
a later reader can re-run it — a number nobody measured is worse than no number, because it looks
like evidence.
*Proposed:* state in rule 19 that a recorded count which does not reproduce is a defect **even
where the verdict is right**, and add to rule 80's check that the reviewer re-runs a sample of
recorded patterns rather than only reading them.


**10. Give a battery entry a `scope` field instead of burying the scope in the pattern string.** The
independent check re-ran 3,001 of this pass's 3,338 recorded patterns and reproduced every one except
17 — and all 17 failed for the same avoidable reason: the scope was written *inside* the pattern
string (`'treble' (scoped title01)`, `'lead paint' [title40]`, `cite 35-7-374 … session-laws`), so a
machine re-running the pattern searches for that text literally. Four more needed their `(digits)`
escaped (proposal 2) before they reproduced exactly.
*Proposed:* record a battery entry as `pattern` / `scope` / `hits` / `note`, with the scope as its own
field. The whole point of a battery is that someone else can re-run it; a pattern that only a human
reader can interpret is not reproducible evidence. This change alone would have made 100% of this
pass's batteries machine-checkable.

---

## Proposed topic questions

Two, both arising from topics where Wyoming's answer turned out to depend on something the topic
does not currently ask about.

1. **`criminal-activity` should ask whether the state has a general "comply with the lease" renter
   duty that supplies an eviction ground.** Wyoming has no crime-specific eviction machinery at
   all, yet a crime-free covenant is fully enforceable, because Wyo. Stat. § 1-21-1204(a)(vii)
   makes compliance with "all lawful requirements of the rental agreement" a statutory duty and
   § 1-21-1002(a)(vi) makes breach of that duty an eviction ground. A canvasser looking only for
   crime-specific authority records a bare absence and misses that every lease covenant in the
   state reaches eviction through one paragraph. The question generalises well beyond this topic.

2. **The `*-waiver` topics should ask what the default rule is before asking whether it can be
   waived.** Two Wyoming waiver topics turned out to have nothing to waive: `showing-notice-waiver`
   (Wyoming sets no entry-notice period at all — the only standard in § 1-21-1205(a)(iii) is
   whether the renter's refusal was "unreasonable") and, in substance, `jury-waiver`
   (§ 1-21-1008(a) already gives a bench trial unless a party demands a jury, so the clause's only
   real effect is to stop the *tenant* demanding one). Both are easy to answer wrongly — as a
   lawful waiver rather than as an empty one — unless the topic asks for the baseline first.

## Gaps-pass sync review (Claude Code, 2026-10-24)

Merged with `merge-delta.py --base 9f38860` after Colorado's sync: 325 new rows, 11 shared rows tagged for WY (four onto rows Colorado's sync had just changed; merged onto current), nothing refused. Every row VERIFIED; no NEEDS_REVIEW row is open for Wyoming.

**Findings on existing rows (§6), each read against the corpus:**
1, 5. `edu-no-self-help-eviction-statute-wy` and `edu-no-quiet-possession-statute-wy`: the 2025 Article 14 removal route (§§ 1-21-1401 to 1-21-1403) added, with its exclusion of current and former tenants (§ 1-21-1402(a)(iv)) and the treble-rent remedy (§ 1-21-1403(c)). The retro logs' boundary "Articles 10, 12 and 13 read whole" is superseded by this pass's corpus-wide batteries.
2. `edu-security-deposit-return-wy`, `edu-habitability-baseline-wy`, `edu-deposit-noncompliance-penalty-wy`: the § 1-21-1201(a)(iv) principal-residence scope added.
3. § 1-21-1202(d) does not reach Article 10: recorded; no row relies on it for Article 10.
4. `edu-consumer-protection-act-wy`: § 40-12-110 (no real-property exemption) and § 40-12-109 (pre-suit notice) added; the no-case-law caveat kept.
6. `assistance-animal-accommodation-wy`: the landlord-side misdemeanor, § 35-13-203(a) with § 35-13-201(c), added beside the tenant-side one.
7. `edu-no-immigrant-tenant-protection-wy`: rewritten; the notes' "federal-only" statement corrected (Wyoming's own fair housing act, §§ 40-26-101 to 40-26-145); the other-states sentence removed; rule_type PROHIBITED -> RECOMMENDED.
8. `edu-no-lease-completeness-rule-wy` (text) and `edu-contracted-appliances-duty-wy` (notes): both limbs of § 1-21-1204(a)(v).

**Items:** 1 (four rule 54 options) and 2 (casualty: now a checked absence, `edu-casualty-and-mitigation-waivable-wy`) answered in the delta; 3 (`keys`, `hoa-compliance`: no Wyoming conflict, no DV lock-change right), 4 (the three shared edits read correctly) and 5 (no WY row disagrees with `edu-cares-act-notice`) need no change; 6 (currency) clean.

**Points not settled from the corpus (§4):** every one is a case-law or agency-practice question, stated in its row with the cautious course (SOP Part 5 policy); none leaves a row open.

**Edited-after rows (§5):** the S1 rows are quotation-casing fixes; `purpose-limitation-wy`, `edu-purpose-limitation-wy` (§ 34-14-209(e) confirmed) and `guest-policy-wy` read correctly. `utility-transfer-wy` still called the utility reimbursement both "not Rent" and "additional Rent" (erratum S2 applied in part); finished as S2 intended.

**Statute spot-check:** § 1-21-1208(a) (deposit: 30 days or 15 after the address, whichever is later, plus 30 for damage) against `edu-security-deposit-return-wy`; § 34-2-128 (no implied renewal by holding over or accepting rent) against `edu-holdover-rate-wy`; §§ 1-21-1401 to 1-21-1403, § 40-12-109 and -110, § 35-13-201 and -203 read whole for the fixes above. No errors.

**Sync housekeeping:** `pool-and-spa-use-wy` remapped from "Building & Safety" to "Rules & Regulations"; 33 new `{{variables}}` added to backlog M.14 (`{{landlord_utilities}}`, listed in the log, appears in no active clause). The pass's SOP proposals and topic questions are taken up with Colorado's in SOP 1.85.

## Federal row: HUD assistance-animal enforcement change (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: the assistance-animal clause stays as written (an animal a tenant needs for a disability, trained or not, is an accommodation, not a pet), and a new federal education row, `edu-assistance-animals-federal-enforcement`, is tagged here and in every jurisdiction but CO. It explains HUD's September 17, 2025 withdrawal of its assistance-animal guidance (91 Fed. Reg. 17291) and FHEO's May 22, 2026 memorandum limiting Fair Housing Act charges to trained animals, and what neither changes: the Act, 24 C.F.R. § 100.204, private suits, Section 504 and ADA complaints, and state law. No clause text changed.

## Federal rows: foreclosure tenants, screening-report notice, voucher leases (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12 (Ohio gaps product item P1): three federal education rows are tagged here and in every jurisdiction, each read from the official federal text: `edu-ptfa-foreclosure-tenants` (Protecting Tenants at Foreclosure Act, 12 U.S.C. § 5220 note), `edu-fcra-adverse-action-notice` (Fair Credit Reporting Act adverse-action notice, 15 U.S.C. § 1681m) and `edu-voucher-tenancy-addendum` (Housing Choice Voucher lease and termination rules, 24 C.F.R. §§ 982.308, 982.310). This state's existing rows on these laws stay; no clause text changed.
