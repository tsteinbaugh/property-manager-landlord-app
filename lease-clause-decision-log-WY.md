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