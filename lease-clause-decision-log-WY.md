## Decision Log: Clause Library Verification Workflow — Wyoming (State #2)

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
