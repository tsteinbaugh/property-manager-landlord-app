## Decision Log: Clause Library Verification Workflow — Kansas (State #3)

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL) is closed. **No re-audit of any completed state is planned, now or later.** "Re-audit" means re-scrubbing everything for a state, and that won't happen. Targeted work is welcome: going back to re-verify or fix a specific row or topic in a completed state (a scalpel, not a hammer) needs no special justification; just say what and why. The word "re-audit" throughout these files refers to the one-time settings re-run of Aug–Sep 2026, which is finished. Older phrases such as "flag for the X re-audit", "live item for the X re-audit", "when X is next revisited" or "screen the completed states on their next revisit" are historical and dead: they are not a queue. Do not propose, plan or mention a re-audit, and do not park anything "for the re-audit". If something specific in a completed state looks wrong or unverified, say what and why and propose the targeted fix.

**Date started:** 2026-08-22
**Status:** ✅ Original pass complete 2026-08-22 (sessions 1–8). ✅ **RE-AUDIT COMPLETE 2026-08-29/30 at higher settings — see §15 onward.** Kansas is closed. Library v62; 113 KS-tagged rows, 112 VERIFIED, 1 NEEDS_REVIEW (blocked on Nebraska).

**⚠️ SECTIONS 1–14 BELOW ARE THE ORIGINAL PASS AND CONTAIN KNOWN ERRORS THAT THE RE-AUDIT CORRECTED.** Read §15 onward before relying on anything above it. The re-audit found a material error in a row that shipped VERIFIED, a statutory duty missing entirely, and a law enacted after the original pass. §14's open list is superseded by §22.
**Companion documents:** `decision-log-clause-library-verification.md` (Colorado, state #1), `decision-log-clause-library-verification-wyoming.md` (Wyoming, state #2) — same schema, same methodology, same standing rules. This file only records what's specific to Kansas.

**Housekeeping note:** this log was written up *after* the working session, in one pass, from the session transcript — not incrementally as decisions were made. Fine this time, but the CO/WY logs were built the right way (as-you-go). Do it as-you-go for state #4.

---

### ⚠️ SCOPE BOUNDARY — READ BEFORE ASSUMING "KANSAS IS DONE"

Kansas was chosen as state #3 specifically to test the methodology against the URLTA statutory family — genuinely different architecture from both Colorado's dense consumer-protection code and Wyoming's thin civil-procedure statute — without engaging Ohio's deliberately-deferred municipal-ordinance complexity (Cleveland/Cincinnati/Columbus/Toledo each have distinct rental-registration and lead-safe requirements; Ohio stays queued, not started).

**What's actually done, as of session 5:** every section of the core Kansas Residential Landlord and Tenant Act (K.S.A. 58-2540–58-2573) has been read from primary source (ksrevisor.gov) and resolved into a clause, an education item, or an explicit "extend the self-limiting generic" decision — including §§58-2548 and 58-2560, missed in the original pass and closed in session 5 (see §7). Gap-discovery source #4 has been run for security deposit interest, radon, bed bugs, fair housing, mold disclosure, and Kansas's own service-animal-fraud statute. Gap-discovery source #2 has been run against a real regional lease product (KCRAR — see §8). The full CO/WY-style whole-library audit (all 50 remaining `CO;WY`-tagged generic clauses) has been run — see §7.

**What's still NOT done:**
- The Mobile Home Parks Residential Landlord and Tenant Act (K.S.A. 58-25,100–137, excluding 137 itself) — deprioritized by product decision, not removed — not an expected use case for Steinoak's target landlords right now, revisitable if customer demand emerges. Logged as such, not audited clause-by-clause. Same treatment as CO's Mobile Home Park Act (see CO log, product scoping decision, 2026-08-18) and WY's confirmed absence of one.
- The pre-1975 common-law block (K.S.A. 58-2501–2533, farm tenancies etc.) — confirmed out of scope via §58-2541, not read section-by-section beyond that confirmation.
- K.S.A. 58-25,138 (claimed landlord immunity for assistance-animal injury/damage) — only one low-quality source found, not primary-verified, not logged as a finding. Needs a direct primary-source check before it's usable either way.
- Ohio — still queued, deliberately deferred, not started.

**No attorney has reviewed any of this.** Same posture as the CO and WY logs.

---

### 1. Why Kansas, and the statute's actual structure

Selected specifically because it's a genuine 1975 URLTA adoption — the goal was proving the schema and three-bucket test hold up against a state where a meaningful fraction of existing CO/WY-shaped clauses might map cleanly onto the statute's own structure, as opposed to needing to be built from nothing (Wyoming) or corrected against a dense idiosyncratic code (Colorado).

Kansas Chapter 58, Article 25 turned out to have **three distinct sub-parts**, not obvious going in:

1. **§§58-2501–2533** — pre-1975 common-law-era provisions (tenancies at will/year-to-year, farm and crop-share leases, distraint). Confirmed via §58-2541 that farm/agricultural tenancies and several other arrangement types are excluded from the KRLTA and governed here instead. Deprioritized by product decision — agricultural/farm landlords are not an expected use case for Steinoak's target landlords right now, revisitable on demand — not silently skipped, and not a portfolio-relevance call.
2. **§§58-2540–58-2573** — the Kansas Residential Landlord and Tenant Act (KRLTA) itself. This is the CO-Title-38/WY-Article-12 equivalent, and where essentially every clause candidate came from.
3. **§§58-25,100–137** — a separate Mobile Home Parks Residential Landlord and Tenant Act, structurally mirroring the KRLTA section-for-section. Deprioritized by product decision (not an expected use case for target landlords right now, revisitable), logged not skipped (mirrors CO's Mobile Home Park Act, WY's confirmed absence of one).

One numbering anomaly resolved rather than assumed: **§58-25,137** (domestic violence/sexual assault/human trafficking/stalking housing protections) is numbered inside the Mobile Home Park block's numeric range but is **not** substantively mobile-home-specific — confirmed by checking where it sits in the statute index (immediately followed by unrelated 1930s plat/surveying statutes) and by its own general language ("applicant," "tenant or lessee," "rental or lease agreement," no mobile-home restriction anywhere). It's a 2019-enacted standalone protection that landed in that number range as a codification artifact. Applies to standard residential tenancies. See §3 below for the resulting clause.

---

### 2. Resolved: scope-defining and prohibited-terms sections

**§58-2541 (arrangements not subject to act).** Confirmed farm/agricultural-use tenancies, institutional residence, purchase-contract occupancy, fraternal-org housing, hotels/motels, employment-conditioned housing, and condo/co-op owner-occupancy are excluded. A standard Steinoak lease is squarely inside the KRLTA. No clause needed — this just confirms scope.

**§58-2547 (prohibited terms) — the single biggest Kansas-specific finding of this pass.** Kansas voids four categories of lease provision outright: any waiver of Act rights/remedies; confession-of-judgment clauses; **any attorney's-fee-shifting provision at all, one-way or mutual** (materially different from Colorado's "must be mutual" rule); and broad exculpation/liability-limitation/indemnification, except a narrow carve-out letting a tenant agree to limit landlord liability for fire/theft/breakage specifically in common areas. Remedy structure (§58-2547(b)): a prohibited provision is simply unenforceable; tenant damages only apply if the landlord *"deliberately uses a rental agreement containing provisions known by such landlord to be prohibited"* — a real knowledge requirement, not strict liability.

Logged as `edu-prohibited-lease-terms-ks`, dual-purposed as a standing validation rule the same way CO's police-call and rent-frequency rules are: every future KS clause needs to be checked against this list.

**Flagged, resolved by Taylor:** `tenants-property-insurance` (CO;WY)'s "Landlord is not liable for any such loss or damage" language could arguably fall under the (a)(4) exculpation ban. Given the practical exposure is low (unenforceable-only unless knowing use of a known-prohibited term is shown), **Taylor decided to extend it to KS as-is**, treated as a known soft spot rather than something requiring a rewrite.

---

### 3. Resolved: core substantive sections, section by section

All read from primary source (ksrevisor.gov), all `VERIFIED`. Full clause/education text lives in the CSV — this is the summary of what each one established and any Kansas-specific number or mechanic worth remembering:

| Section | Topic | Resolution |
|---|---|---|
| §58-2550 | Security deposits | Caps: 1 month unfurnished, 1.5 months furnished, +0.5 month pets (stacking). Return: 14 days after determining deductions, never later than 30 days after termination+possession+demand; mail to last-known-address if no demand. Noncompliance penalty: wrongfully withheld amount **+ 1.5×** that amount. New mechanic with no CO/WY analog: tenant can't apply the deposit to last month's rent or skip rent using it, unless the lease says otherwise — violating forfeits the deposit. No interest requirement (confirmed absent, §5). → `security-deposit-return-ks`, `security-deposit-use-ks`, `edu-security-deposit-cap-ks`, `edu-security-deposit-noncompliance-penalty-ks`, `edu-security-deposit-successor-owner-ks`. |
| §58-2551 | Landlord/manager disclosure | Genuine gap CO/WY never needed: a **day-one written disclosure** of manager and owner/agent contact info, required before or at tenancy start. Noncompliance makes the signer the tenant's implied agent for service/notices. → `landlord-disclosure-ks`, `edu-disclosure-noncompliance-ks`. |
| §58-2553 | Landlord habitability duties | Standard URLTA baseline (code compliance, common-area care, systems in good order, waste receptacles, water/heat) plus a cable/communication-access non-interference rule. Kansas allows duty-delegation to tenants under narrow conditions (≤4-household buildings, or separate written agreement elsewhere) — not used in the current template, logged as available. → `habitability-baseline-ks` (supersedes `landlord-maintenance`), `edu-habitability-duty-delegation-ks`. |
| §58-2555 | Tenant duties | Standard URLTA tenant-duty list, plus explicit responsibility for guest/pet damage and a no-disturbance-of-other-tenants duty not present in the CO/WY generic. → `tenant-duties-ks` (supersedes `tenant-maintenance`). |
| §58-2557 | Landlord entry | **No fixed notice-period number** — just "reasonable notice" and "reasonable hours." Confirmed this directly against primary text after multiple secondary sources confidently (and wrongly) cited "24 hours" as statutory — same trap the WY pass warned about. Warrantless entry only for "extreme hazard involving potential loss of life or severe property damage" (narrower than a generic emergency clause), plus an explicit anti-harassment provision. **Decision (Taylor, session 4): rely on the existing self-limiting `landlords-access` clause** ("...or the notice period required by applicable law if longer") rather than a KS override. `landlords-access` states field extended to `CO;WY;KS`. `edu-entry-standard-ks` kept as reference-only education. |
| §58-2564 | Tenant noncompliance/nonpayment | Two notice tracks: general material/health-safety breach gets 30-day termination notice with a one-time 14-day cure right; nonpayment gets a 3-day pay-or-quit notice computed as **three consecutive 24-hour periods**, plus 2 extra days if mailed. → `edu-tenant-noncompliance-notice-ks`. Reading this section surfaced the `default-by-tenant` attorney-fee conflict — see §4. |
| §58-2565 | Extended absence / abandoned property | 10-day rent default + substantial belongings removed = presumed abandonment (rebuttable). Landlord may enter during any 30+ day absence. Property left behind: take possession, store at tenant's expense, sell/dispose after 30 days — but **requires both** newspaper publication (15+ days ahead) **and** a mailed copy to the tenant (within 7 days of publication). This is procedurally distinct from Wyoming, which allows any of three alternative methods (certified mail / personal service / publication) — flagged in the CSV notes not to merge the two states' method lists in a future full-pass. → `extended-absence-notice-ks`, `abandoned-property-ks`. |
| §58-2566 | Acceptance of late rent | Initially misread — the ksrevisor.gov fetch truncated the sentence and I missed the **"without reservation"** qualifier. Corrected: accepting late rent *without reservation* waives the right to act on that breach, unless otherwise agreed after the breach. Accepting *with* reservation avoids the waiver in the first place — no after-the-fact agreement needed. See §4 for the resulting drafting fix. |
| §58-2567 | Landlord liens | Distraint abolished; any landlord lien/security interest in tenant property is unenforceable unless perfected before the 1975 Act took effect. → `edu-landlord-lien-abolished-ks`. |
| §58-2570 | Holdover, termination notices | Willful bad-faith holdover damages capped at **1.5×** periodic rent or 1.5× actual damages (whichever greater) — not "double the rent" like the CO/WY generic states outright. **Decision (Taylor, session 4): rely on the existing self-limiting `holdover` clause** ("...or the maximum amount allowed under applicable law, if less") rather than a KS override. `holdover` states field extended to `CO;WY;KS`. `edu-holdover-ks` kept as reference-only. Also found: any landlord-provided notice-to-vacate document adding terms beyond the lease requires an exact bolded statutory warning or the added terms don't bind the tenant. → `edu-notice-to-vacate-additional-terms-ks`. |
| §58-2572 | Retaliation | Bars rent increases/service cuts triggered by a code complaint, a habitability complaint to the landlord, or tenant-union organizing — with real carve-outs for good-faith cost-driven increases and for tenant-caused code violations, rent default, or code-compliance work that would end the tenant's use of the unit. → `edu-retaliation-prohibition-ks`. |
| §58-2556 | Rules and regulations | Standard URLTA enforceability test (legitimate purpose, reasonably related, applies equally, sufficiently explicit); post-signing rule changes need written tenant consent for anything substantially modifying the deal — no fixed advance-notice period in the standard Act (unlike the parallel Mobile Home Park Act section, which does specify 30 days). → `edu-rules-regulations-enforceability-ks`. |
| §58-25,137 | DV/SA/trafficking/stalking housing protections | See §1 above for the scope resolution. Substance: can't deny/evict based on protected-person status; tenant not liable for rent after vacating under this protection (landlord may charge up to 1 month's rent as an early-termination fee); documentation may be required; false claims can be grounds for denial/eviction; rights can't be waived; remaining co-tenants' lease continues; violations carry $1,000 statutory damages + attorney fees (court-awarded under a separate cause of action, doesn't conflict with §58-2547's lease-provision ban). → `dv-housing-protections-ks`, `edu-dv-housing-protections-violation-ks`. |

---

### 4. Flagged items — resolved in session 4

Four items came out of the section-by-section read that weren't mine to decide unilaterally. All four resolved:

1. **`tenants-property-insurance`'s exculpation-adjacent language.** Researched the actual consequence structure (§58-2547(b): unenforceable-only, damages need knowing use of a known-prohibited term). **Taylor's call: extend to KS as-is**, given the low practical exposure.

2. **`default-by-tenant`'s attorney-fee sentence**, sitting next to a flat KS prohibition on fee-shifting clauses of any kind. **Taylor's call: draft a KS-specific version.** Done — `default-by-tenant-ks` (supersedes `default-by-tenant`), identical to the generic minus the prevailing-party attorneys'-fees sentence.

3. **Self-limiting generics (`landlords-access`, `holdover`) relying on "or applicable law, if less/longer" catch-alls** rather than explicit KS overrides. **Taylor's call: rely on the generics.** Both extended to `CO;WY;KS`; the KS-specific drafts I'd made were converted to reference-only `LANDLORD_EDUCATION` rows (`edu-entry-standard-ks`, `edu-holdover-ks`) rather than superseding clauses.

4. **`late-fee`'s non-waiver language, given §58-2566's "after the breach" requirement.** Taylor asked me to explore rather than just flag for a lawyer. Found the actual fix: the statute's real qualifier is **"without reservation"** (missed on first read due to a truncated primary-source fetch — corrected and noted in the CSV). A standing reservation-of-rights clause, rather than a flat non-waiver statement, tracks the statute's own language and gives a real textual argument that late-rent acceptance is never "without reservation" under the lease. Logged as `edu-late-rent-reservation-fix-ks` with suggested replacement language. **Not yet applied to the actual `late-fee` clause** — that's still an open implementation step, not a decision Taylor has made about whether/how to use the suggested language. Also surfaced in passing: *Schutt v. Foster* (Kan. Sup. Ct.), a real case where a $20/day compounding late fee was found unconscionable by the Court of Appeals before the Supreme Court reversed on procedural grounds — worth keeping in mind given the generic `late-fee` clause uses open placeholder values.

---

### 5. Gap-discovery source #4 — confirmed absences, highest-value topics only

Not exhaustive (see §8) but these four are done to full proof-of-absence standard, each cross-checked against multiple independent sources and/or primary text:

- **No security-deposit interest requirement.** Confirmed absent from the §58-2550 primary text already pulled; corroborated by secondary sources. Unlike CT/MD/MA/NJ/OH. → `edu-no-security-deposit-interest-ks`.
- **No radon disclosure statute.** Only a handful of states require this (CO among them); Kansas isn't one, confirmed via two independent legal-reference sources. → `edu-no-radon-disclosure-ks`.
- **No residential bed bug disclosure/treatment-timeline statute.** Kansas's bed bug regulations (K.A.R. 4-27 series) are lodging-establishment-specific (hotels/motels), not residential rentals — infestations fold into the general habitability duty instead. **Naming trap caught:** several sources describing a specific "Kansas" inspection/treatment timeline were actually describing Kansas City, *Missouri's* municipal ordinance, not Kansas state law. → `edu-no-bed-bug-disclosure-ks`.
- **Fair housing tracks federal classes only.** Kansas Act Against Discrimination mirrors the federal seven protected classes, no state-added classes, no source-of-income protection statewide. Same KC-Missouri naming trap applies — Kansas City, Missouri's source-of-income ordinance doesn't apply on the Kansas side of the metro. → `edu-fair-housing-ks`.

**Process note carried forward from Wyoming, reconfirmed here:** the KC-Missouri/Kansas naming collision is a new, Kansas-specific version of the "confident secondary source, wrong state" trap — worth remembering specifically for any future Kansas City-area research, not just a generic caution.

---

### 6. Standing rules established this pass

- **No attorney-fee-shifting lease provisions of any kind for Kansas** (one-sided or mutual) — different from Colorado's mutuality-only requirement. Part of `edu-prohibited-lease-terms-ks`, functions as a standing validation rule the same way CO's police-call and rent-frequency rules do.
- **No general liability exculpation/indemnification language**, with the narrow common-area fire/theft/breakage carve-out. Same standing-rule status.
- **Reservation-of-rights framing, not flat non-waiver framing**, for any Kansas late-payment/non-waiver language going forward — per §4, item 4.

---

### 7. Session 5 (2026-08-22, same day) — whole-library audit + closing two missed sections

Prompted by a direct instruction to finish the §8 backlog. Went through all 50 remaining `CO;WY`-tagged generic clauses one by one and decided extend/leave/flag for each, the way the Wyoming log's §10 did for Wyoming. Also closed two KRLTA sections that were referenced in passing during the original pass but never actually resolved from primary source: §58-2548 and §58-2560.

**Two sections closed that should have been done in the original pass:**
- **§58-2548 (move-in inventory).** Genuine requirement, no CO/WY analog: within 5 days of occupancy/possession, landlord and tenant jointly inventory the property in writing, signed duplicates, tenant gets a copy. → `move-in-inventory-ks`. This gap only surfaced because a real Kansas lease-form comparison (§8) explicitly listed it as a required document — the original section-by-section read skipped it.
- **§58-2560 (failure to deliver possession — tenant's remedies).** Real conflict found: the generic `possession-delay` clause gives the tenant a termination right only after a 30-day delay. Kansas actually gives the tenant a **5-day-notice** termination right, immediate rent abatement, a demand-performance/damages alternative, and 1.5× willful-bad-faith damages. → `possession-delay-ks` (supersedes `possession-delay`).

**43 of 50 CO;WY generics extended to `CO;WY;KS`** as genuinely generic, no conflict found: `rent-payment`, `returned-payments`, `due-at-signing`, `application-of-payments`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `acceptable-payment-methods`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `utilities-paid-by-landlord`, `appliances-included`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-policy`, `pet-insurance-requirement`, `parking`, `assigned-parking-space`, `parking-vehicle-rules`, `storage-space`, `keys`, `guest-policy`, `guest-policy-day-limit`, `common-area-use`, `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `lead-based-paint` (federal, applies regardless of state), `hoa-compliance`, `assistance-animal-accommodation`, `tenants-property-insurance`, `services-utilities-provided`.

Two of those extensions apply reasoning rather than being clean no-conflict cases, worth naming explicitly:
- **`tenants-property-insurance`** — extended per Taylor's session-4 decision (flagged earlier that session, resolved: extend as-is given low practical exposure under §58-2547(b)'s knowing-use requirement).
- **`services-utilities-provided`** — contains "Tenant waives all liability of Landlord," arguably a cleaner example of exculpation language than `tenants-property-insurance`. Extended anyway, applying the same risk-tolerance precedent Taylor already set for that clause, rather than generating a fresh open flag for a near-identical question. Documented in the CSV notes in case Taylor wants to revisit the whole category at once rather than clause by clause.

Two extensions got a cross-reference note added rather than being extended silently:
- **`snow-removal`** — only safe for tenant-exclusive-use areas; a shared common-area walkway remains the landlord's non-delegable duty under §58-2553(a)(2) except through the narrow procedure in `edu-habitability-duty-delegation-ks`.
- **`landscaping-irrigation`** — no statutory conflict found, extended without incident.

**5 flagged, not extended — real conflicts or overlaps, each resolved with a KS-specific draft rather than left open:**
- **`late-fee`** → `late-fee-ks`. Applies the reservation-of-rights fix from §4/session 4, now actually implemented rather than just logged as a suggestion.
- **`possession-delay`** → `possession-delay-ks`. See above.
- **`early-termination`** → `early-termination-ks`. The generic's flat "10 days to cure" for landlord-initiated early termination doesn't match Kansas's actual 14-day cure period (§58-2564(a)) — and a lease clause contractually shortening a statutory cure period arguably isn't just wrong, it's a waiver of Act rights prohibited outright under §58-2547(a)(1). Rewritten to point to `default-by-tenant-ks` and `edu-tenant-noncompliance-notice-ks` instead of restating a number. Tenant's own voluntary termination right (30 days + fee) is unchanged — that's a contract right, not a statutory notice period.
- **`surrender-end-of-term`** → `surrender-end-of-term-ks`. The generic's vague "may be treated as abandoned... to the extent permitted by applicable law" understates Kansas's actual specific abandoned-property procedure, which already has its own clause (`abandoned-property-ks`, from the original pass). Rewritten to cross-reference that clause instead of restating a vaguer version of the same topic.
- **`tenant-maintenance`, `landlord-maintenance`, `default-by-tenant`** — correctly left `CO;WY` only. Each already has a KS-specific superseding clause from the original pass (`tenant-duties-ks`, `habitability-baseline-ks`, `default-by-tenant-ks`); no action needed.

**One genuine new finding from outside Article 25 entirely**, parallel to Wyoming's §35-13-207 service-animal-fraud discovery: **K.S.A. 39-1112**, part of Kansas's "White Cane Law" (Ch. 39, not Ch. 58), makes misrepresenting an animal as a service animal a Class A nonperson misdemeanor (up to 1 year, $2,500 fine). Well-corroborated across many independent sources with consistent figures. → `edu-service-animal-fraud-ks`. A second claim came up alongside it — that K.S.A. 58-25,138 gives landlords blanket immunity for assistance-animal injury/damage — but only one low-quality source made that claim. **Not logged, not used.** Needs its own primary-source check, listed in §9.

**Mold disclosure, confirmed absent** — closes the item flagged unchecked in the original pass. Multiple independent sources agree Kansas has no mold-specific disclosure statute or form; a landlord-caused mold problem falls under the general habitability duty instead. → `edu-no-mold-disclosure-ks`.

### 8. Gap-discovery source #2 — real lease product comparison

Compared findings against the Kansas City Regional Association of Realtors' actual dual-state (KS/MO) residential lease form — a genuine real-world product, not a generic template mill. Strong corroboration, no major new gaps:
- Holdover rate explicitly listed as "1½ in Kansas" — matches the §58-2570(c) finding from the original pass exactly.
- The form's attorney-fees section explicitly scopes fee-shifting to "(in Missouri)" only — real-world confirmation of the Kansas fee-shifting ban found in §58-2547(a)(3).
- "Five (5) calendar days in Kansas" for a notice period — matches the §58-2560 finding closed this session.
- Move-in checklist listed as required — matches §58-2548, also closed this session.
- Landlord name/address disclosure listed as required for all Kansas leases — matches §58-2551 from the original pass.

Not an exhaustive line-by-line read of the entire KCRAR document — but every point of comparison that came up either confirmed an existing finding or pointed at the two sections closed in §7. No further gaps surfaced. Reasonable to consider source #2 satisfied for now, not exhaustively closed forever.

### 10. Session 7 (2026-08-22, same day) — closing the gap to actual CO/WY parity

Prompted by a direct, warranted question: was Kansas actually at the same completeness level as CO and WY, or did it just look that way? Honest answer at the time: no. Wyoming's completeness came from a deliberate, *named-topic* canvass — every CO-specific finding checked one by one against Wyoming (§10–11 of that log). Kansas had the equivalent whole-library audit for generic mechanical clauses (session 5, §7 above) but had never run that same named-topic canvass. This session ran it — twice, because the first pass still missed one item (see below).

**Full cross-check against Wyoming's own §11 checklist, item by item, final status:**

| Wyoming's checklist item | Kansas status |
|---|---|
| Radon disclosure | Confirmed absent — session 4 |
| Bed bug disclosure | Confirmed absent — session 4 |
| EV charging access rights | Confirmed absent — session 7 |
| Housing-voucher/subsidy protections | Confirmed absent — session 7 |
| Deposit installment-payment right | Confirmed absent — session 7 |
| Criminal service-animal-fraud penalty | **Found present** (K.S.A. 39-1112) — session 5 |
| Consumer-protection-law analog | **Found present, nuanced** (KCPA backstop, no fee-transparency law) — session 7 |
| For-cause eviction after 12 months | Confirmed absent — session 7 (second pass) |
| Tenant-death lease-termination protections | Confirmed absent — session 7 |
| Alternate housing during habitability failure | Confirmed absent — session 7 |
| Deposit-rights general nonwaivability | Already covered by the broader §58-2547(a)(1) nonwaiver rule (`edu-prohibited-lease-terms-ks`), which bars waiving *any* Act right, not just deposit-specific ones — Kansas's version is broader than Wyoming's narrower deposit-only finding, so no separate row needed |
| Broader landlord-identity-change notice | **Found present, structured differently** (K.S.A. 58-2554, liability-shield framing not a notice mandate) — session 7 |

Every item on Wyoming's list now has an explicit, checked status for Kansas. Nothing on that list is still an open question.

**Confirmed absent, closing named topics from Wyoming's own checklist, applied to Kansas:**
- **EV charging access rights** → `edu-no-ev-charging-right-ks`. No Kansas right-to-charge statute; Kansas doesn't appear in either tier of a multi-state tracker (10 owner/HOA-only states, or the smaller tenant-inclusive group including CO).
- **Housing-voucher/subsidy protections** → `edu-no-voucher-protection-ks`. No state mandate to accept vouchers. Same KC-Missouri naming trap resurfaced — a since-preempted KCMO ordinance kept appearing in "Kansas" search results.
- **Security deposit installment-payment right** → `edu-no-deposit-installments-ks`. One contradicting source (PayRent) found and rejected — its own wording suggests it was describing a subsidized-housing-authority-specific rule, not general Kansas law, and it contradicts every other source plus the already-verified primary text of §58-2550.
- **Tenant-death lease-termination protections** → `edu-no-tenant-death-statute-ks`. No Kansas equivalent to a "Letty's Act"-style statute; estate remains liable under ordinary contract principles.
- **Alternate housing during a major habitability failure** → `edu-no-alt-housing-requirement-ks`. No relocation/alternate-housing obligation; tenant's real remedies are the existing notice-and-cure and fire/casualty provisions.
- **For-cause eviction protection after 12 months' tenancy** → `edu-no-for-cause-eviction-ks`. This one was missed in the first pass through this checklist — a source had already surfaced it in passing earlier in the session (while reading §58-2570) but it never got its own dedicated check or row. Caught only when directly asked "are we really done," re-verified against two independent sources plus the already-confirmed §58-2570(b) text, and closed properly.

**Two genuine new findings, not absences:**
- **Kansas Consumer Protection Act as an unconscionability backstop** → `edu-consumer-protection-act-ks`. Answers the "does Kansas have anything like CO's Honest Pricing Act" question with real nuance rather than a clean yes/no: no rental-fee-transparency law, but a general KCPA unconscionability doctrine that has real teeth — *Schutt v. Foster* (Kan. Sup. Ct.) is a live example, a $20/day late fee compounding to $21,240 found unconscionable by the Court of Appeals, reversed by the Supreme Court only on a procedural technicality, not on the merits.
- **§58-2544 (unconscionability)** → `edu-unconscionability-ks`. This was flagged as a candidate in the very first structural pass of this project and never actually resolved with primary-source text until now — closing a loose end that predates even the KRLTA line-by-line read.

**Two sections that got referenced in earlier sessions but never actually turned into their own clause, closed here:**
- **§58-2554 (landlord/manager conveyance, liability shift)** → `identity-change-liability-ks`. The primary text was already pulled in session 4 while researching habitability, but never used. Structurally different from Colorado's proactive 1-business-day tenant-notification rule: Kansas frames this as a liability shield for the *departing* landlord/manager once notice is given, not an affirmative duty to notify. Worth flagging plainly: this doesn't obligate anyone to tell the tenant anything — it only protects the outgoing party, once they choose to give notice.
- **§58-2562 (fire/casualty damage)** → `fire-casualty-termination-ks`. Flagged as a "candidate" in the very first statute-structure table (session 1) and never drafted. A real tenant termination/rent-reduction right with actual notice mechanics (5-day written notice to terminate; proportional rent reduction for partial-vacate), not just an education note.

**What this session actually demonstrates, worth being honest about:** the first pass through this checklist was itself incomplete — it took a second, direct challenge ("are we really done?") to catch the for-cause eviction item. That's a real pattern worth naming: claiming completeness and re-checking against a named list are not the same act, and even the second one benefits from being checked again rather than trusted on the first pass. Worth remembering for state #4: run the named-topic checklist, then re-run it once against itself before declaring it closed, rather than treating one pass as sufficient.

**CSV changes:** 10 new rows added across two passes within this session (3 `LEASE_CLAUSE`, 7 `LANDLORD_EDUCATION`), all `VERIFIED`. No new `supersedes` relationships — none of these topics had an existing generic clause to override. Checked for duplicates and malformed rows after each addition — none found. Running total: 235 rows, 91 KS-tagged.

### STANDING RULE, added session 7 — completeness check for every future state

Two distinct exercises, both required before any state can be called complete, neither one a substitute for the other:

1. **Whole-library generic-clause audit** — go through every existing `CO;WY;KS`-style generic clause one by one, decide extend/leave/flag for the new state.
2. **Named-topic absence canvass** — take the full list of every state-specific finding logged for *every prior state* (not just one), and check each one explicitly against the new state, confirmed present or confirmed absent, not skipped.

**Run canvass #2 twice.** The first pass through Kansas's own canvass this session still missed an item (for-cause eviction after 12 months) — caught only because Taylor asked "are we really done?" a second time rather than accepting the first "yes." Treat a single pass as provisional, not final. Re-run the full list against itself once before writing "complete" anywhere.

Companion-document logs (CO → WY → KS → ...) mean each new state's canvass list keeps growing — Nebraska's canvass needs to check everything on Wyoming's list AND everything new that Kansas surfaced (Kansas Consumer Protection Act analog, §58-2554-style identity-change framing, fire/casualty termination rights, unconscionability doctrine, etc.), not just the original Wyoming set.

### 13. Session 8 (2026-08-22, same day) — closing the two CO-standing-rule gaps the checklist itself surfaced

While building the consolidated named-topic checklist, two items turned out to have been on Wyoming's original checklist implicitly (as CO standing rules) but never explicitly re-checked as their own present/absent line item for either WY or KS. Closed for Kansas here:

- **Immigration-status inquiry prohibition** → `edu-no-immigrant-tenant-protection-ks`. Confirmed absent. Only California (2017), Illinois (2020), and Colorado (2020) were found to have a dedicated statute of this kind.
- **Right to call police / emergency services (non-waivable)** → `edu-no-right-to-call-police-statute-ks`. Confirmed absent at the state level, weaker corroboration than most other absence findings in this project (no multi-state tracker the way EV charging had), flagged honestly rather than overstated. Named explicitly: any real protection here would live at the municipal nuisance-ordinance level, the same category of city-by-city complexity keeping Ohio deliberately deferred — not audited, not assumed clean.

**Both items are still genuinely open for Wyoming** — this session only closed them for Kansas. Noted in the consolidated checklist for whoever picks that up.

**CSV changes:** 2 new rows added, both `LANDLORD_EDUCATION`, `VERIFIED`. No `supersedes` relationships. Running total: 237 rows, 93 KS-tagged.

### 14. What's still open after session 8

**Framing correction (session 6):** everything in this log previously described as "N/A for Steinoak's current portfolio" was mis-framed. Steinoak is a nationwide product, not scoped to Taylor's own properties — mobile home parks and farm/agricultural tenancies are deprioritized because they're not an expected use case for target landlords right now, not because they don't apply to Taylor personally. This matches the correct standing framing already established in the CO log's "product scoping decision, 2026-08-18" entry (mobile home park and employer-provided housing "not expected use cases for this app's target landlords... deprioritized, not removed"), which some earlier passages in that same CO log (predating that decision) don't consistently reflect. Not removed, not a permanent exclusion — revisitable if customer demand emerges.

1. **K.S.A. 58-25,138** (claimed assistance-animal liability immunity) — **RESOLVED, confirmed false (2026-08-22, same day).** Pulled ksrevisor.gov's own official Article 25 chapter index directly: §58-25,137 (the DV/SA protection) is the **last section in the entire article**, immediately followed by Article 26 — an unrelated 1800s townsite/platting law. No §58-25,138 exists anywhere in the Kansas statutes. The claim was fabricated or a badly garbled citation to something else entirely. Not used, not logged as landlord education. Textbook example of the Wyoming-log pattern (single confident low-authority source, no primary-source support) — worth remembering that this pattern shows up in Kansas too, not just Wyoming's Hemlane-specific problem.
2. **Mobile Home Parks RLTA** (§§58-25,100–136) — deprioritized by product decision (not an expected use case for target landlords right now), not audited section-by-section. Revisit if customer demand emerges — not a portfolio-relevance call.
3. **The pre-1975 common-law block** (§§58-2501–2533) — confirmed out of scope, not read beyond that confirmation.
4. **Ohio** — still queued, deliberately deferred.

Item 1 (K.S.A. 58-25,138) closed in session 6. Everything else in this section was genuinely open until session 7 closed it — see §10 above.

**Session 4 CSV changes:** 29 new rows added (11 `LEASE_CLAUSE`, 18 `LANDLORD_EDUCATION`), all `VERIFIED`. Five `supersedes` relationships wired up: `security-deposit-return-ks`, `security-deposit-use-ks`, `habitability-baseline-ks`, `tenant-duties-ks`, `default-by-tenant-ks`. Two generics extended: `landlords-access` and `holdover`, both `CO;WY` → `CO;WY;KS`.

**Session 5 CSV changes:** 7 new rows added (`late-fee-ks`, `move-in-inventory-ks`, `possession-delay-ks`, `early-termination-ks`, `surrender-end-of-term-ks`, `edu-service-animal-fraud-ks`, `edu-no-mold-disclosure-ks`), all `VERIFIED`. 43 generics extended to include KS (see §7 for the full list). Four `supersedes` relationships wired up: `late-fee-ks`, `possession-delay-ks`, `early-termination-ks`, `surrender-end-of-term-ks`.

**Session 7 CSV changes:** 10 new rows added across two passes within the session (3 `LEASE_CLAUSE`, 7 `LANDLORD_EDUCATION`), all `VERIFIED`. No new `supersedes` relationships.

**Running total:** 235 rows in the library, 91 KS-tagged. Checked for duplicate IDs and malformed rows after every edit across all sessions — none found.

---
---

# PART II — RE-AUDIT (2026-08-29 / 2026-08-30)

**Base:** `steinoak_clauses_updated_57.csv` — 395 rows; CO 106, WY 96, NE 95, KS 93, MN 70, SD 37, ND 33. Gate check run at session start and passed exactly.
**End state:** v62 — 415 rows; KS 113. All six other state counts unchanged throughout.
**Settings:** higher reasoning + research. The original pass ran at default settings.
**Precedent:** CO and WY had both been re-audited and both surfaced errors that shipped `VERIFIED`. Kansas made three for three.

## §15. Structural finding — Kansas's risk profile differs from CO's and WY's

A pre-screen established that **every statutory citation in the `bodyText` of a KS-tagged row sits in a `LANDLORD_EDUCATION` row. Kansas has zero citations inside any `LEASE_CLAUSE`.** The specific failure both prior re-audits found — a bad citation in text a tenant reads — is structurally impossible for Kansas.

That prediction held. Kansas's material error was a **valid citation described wrongly**, in an education row, which is the class a citation screen cannot catch.

## §16. MATERIAL ERROR — `edu-service-animal-fraud-ks` shipped VERIFIED and was wrong

**K.S.A. 39-1112 does not reach residential rental housing.** It criminalizes misrepresentation "in or upon any place listed in K.S.A. 39-1101" — common carriers, hotels, public accommodations, places open to the general public. **Housing is not on that list.** The housing rights are conferred separately by 39-1102 (guide dog), 39-1107 (hearing assistance dog) and 39-1108 (service dog), each adding "the acquisition and use of rental, residential housing" *on top of* the 39-1101 places. The conjunction decides it.

The row had described this as "parallel to Wyoming's Wyo. Stat. § 35-13-203(b) finding." **The parallel was false.** Wyoming's penalty reached housing because it was scoped to rights "set forth in this article" and the leasing right sat in that article. Kansas scoped by **place list** instead of by act. Same question, opposite answer, purely structural.

**Same defect in 39-1111** — the statutory verification procedure is likewise scoped to the 39-1101/39-1110 place lists and also does not reach housing. **Kansas extended the substantive rights into housing but extended neither the verification procedure nor the misrepresentation penalty. A Kansas landlord gets the duty without the tools.**

## §17. INVERSION — the criminal exposure runs toward the landlord

**K.S.A. 39-1103** makes it a misdemeanor to deny or interfere with rights under 39-1101, 39-1102, 39-1107, 39-1108 or 39-1109. Since three of those extend expressly to rental housing, **a Kansas landlord who refuses a service dog in a rental, or charges a fee for one, commits a crime.** Unclassified misdemeanor → class C under K.S.A. 21-6602(a)(4): ≤1 month, ≤$500.

The library had recorded Kansas's criminal exposure as running toward the *tenant*. It runs toward the *landlord*, and the tenant-facing penalty doesn't reach housing at all. → `edu-service-animal-denial-penalty-ks`.

## §18. ESA determination — Kansas needed a fourth category

The three-way classification (independent / federally-tethered / no basis) does not fit Kansas. **Kansas splits by animal type:**

- **Trained service animals — strong independent basis.** 39-1102/1107/1108, express housing right, statutory no-fee rule, criminal backing.
- **ESAs — expressly excluded.** 39-1113(f) excludes animals kept for comfort, protection or personal defense, and 39-1113's preamble applies its definitions to 39-1101 *through 39-1109*, so the exclusion reaches the housing sections. 39-1113(a) defines "assistance dog" as a closed three-item list. **The act is also dogs-only**, so a non-canine assistance animal falls outside it entirely.
- **The only ESA pathway is KAAD's generic duty**, K.S.A. 44-1016(h)(3)(B) — reasonable accommodations in rules, policies, practices or services. It never mentions animals and contains **no federal reference**, so on independence-from-federal-law Kansas is arguably *stronger* than Wyoming (whose § 35-13-201(c) is expressly "in accordance with the federal Fair Housing Act"); on animal-specificity it is weaker than both CO and WY.

**Classification: independent statute, but GENERIC rather than animal-specific — a fourth category, now added to the checklist.**

**Honest limits, recorded not glossed:** no Kansas court has held the KAAD *housing* provisions are FHA-lockstep (employment-side lockstep is established — *Kinchion*, *Allen* — but nothing extends it to housing); no Kansas case applies 44-1016(h)(3)(B) to an animal; whether 44-1002(k)(1)'s employment-flavored definition constrains the housing duty is unlitigated; and KHRC is HUD-certified "substantially equivalent," which is real evidence of federal-facing practice. **Net: textually independent, practically federal-facing, judicially untested.**

Kansas rejected a dedicated ESA housing act **four times** (HB 2523/2019; SB 360 and S Sub HB 2057/2022; SB 170/2025) — proof of absence by legislative refusal.

## §19. KAAD exemptions — a trap on nobody's list

K.S.A. 44-1016 opens **"Subject to the provisions of K.S.A. 44-1018"** — the exemption is incorporated into the first clause of the operative section. **44-1018(b)** exempts owners of ≤3 single-family houses renting without a broker, and owner-occupied buildings of ≤4 units, from 44-1016 **entirely, including the accommodation duty**. The advertising ban at 44-1016(c) survives.

Given Steinoak's target user, a meaningful share of small Kansas landlords may have no state accommodation duty at all. **Same trap shape as CO's source-of-income finding**, where the statement duty and the acceptance duty had mismatched exemptions. → `edu-kaad-housing-exemptions-ks`.

## §20. Gap found — the Kansas Smoke Detector Act

**K.S.A. 31-160/31-161/31-162, Chapter 31 (Fire Protection) — outside the KRLTA.** The library carried **zero** KS rows on it through the original pass and every session since.

The install/maintain split is **statutory, not a drafting choice**: 31-162(c) — owner supplies and installs; owner tests and maintains, **except inside rental units, where the occupant tests and maintains after taking possession**. Placement: every story; stairwell ceilings in multi-unit. Units built **after 1999-01-01 must be permanently wired** into the electrical system.

Two provisions favor the landlord, both recovered only by chasing the section *title*: **(g)** noncompliance by *either* party is inadmissible in **any** action for **any** aspect of civil liability; **(h)** the Act cannot reduce or deny insurance payment.

Third confirmation that a first pass confined to the core act's table of contents misses real findings — Nebraska's and North Dakota's smoke-detector duties also lived outside their landlord-tenant chapters.

## §21. Law enacted after the original pass — Sub. HB 2357

Effective **2026-07-01**, already in force. **This row was written wrong twice before it was right, and the reason matters.**

The first version described automatic sealing, dismissal-based sealing, housing-authority access, and KCPA liability for disseminating sealed data. **None of that is in the enacted Substitute.** Those were features of the *introduced* bill. The row had been built from a research summary that blended reporting on the introduced version with reporting on the enacted one — **the same failure as CO's carpet-lookback error (superseded draft read as enacted text), recurring at the bill-substitute level.**

The enacted law is **tenant-initiated expungement**: the tenant files electronically at no cost under the original docket number and serves the landlord by return receipt delivery. **The landlord has 30 days to object.** If no objection is filed, the court decides without a hearing and **presumes any money judgment was satisfied.** The court must grant expungement only if all three hold: three years since judgment; money judgments satisfied; no additional covered eviction judgment in that period. An **unsatisfied money judgment blocks expungement** unless the landlord agrees; a later judgment **tolls** expungement of the earlier one; and expungement **does not extinguish the debt** or bar a separate action. Mediation must be *considered*, not ordered, with a ≤14-day continuance where both parties are in court-ordered mediation.

**Citation caution:** the published text of K.S.A. 61-3804, 61-3806 and 61-3807 shows **no 2026 amendment** (61-3807's history ends at L. 2010, and its continuance provision lacks the new 14-day mediation continuance). **Cite Sub. HB 2357 directly** until the Revisor publishes the amendments.

## §22. Other re-audit findings

**Citation screen, scope 59** (all citations in all KS-tagged rows, `notes` included, not just the 12 KS-attributed): **clean, no fabricated citation.** Tier 1 = 50 distinct citations, all in education rows. The automatic correction-language carve-out caught exactly the two dead cites it needed (`58-25,138`, `Wyo. Stat. 35-13-207`). **Carve-out false-positive noted:** it also suppressed valid cites sitting in sentences containing "corrected" — treat the carve-out as *deprioritize*, not *exclude*.

**Verified from primary source:** `Minn. Stat. § 504B.205` (highest-risk item — a cross-state cite in KS body text), `K.S.A. 58-2544`, `K.A.R. 4-27`.

**Confirmed absences, several affirmative rather than inferred:** carbon monoxide alarms (**the full section list of Ch. 31 Art. 1 contains no CO section** — a manufacturer's "at the renter's request" claim is unsupported); environmental-event termination; operational habitability duties; renter's-insurance restriction; double-letting; fraud-termination; payment-method fee ban; expedited criminal eviction (**SB 668/1998 died**); rental-application/screening regulation (**closes a row flagged low-confidence across multiple prior sessions**); rent control (**preempted statewide, K.S.A. 12-16,120**).

**Confirmed present:** NSF service charge capped at **$30** (K.S.A. 60-2610(g)) — refutes the "$20 cap" myth; 58-2559 requires **written** habitability notice as a strict element, with no CO-style verbal-designation waiver trap; 58-2546(c) caps **conduct-formed** agreements at one year; 58-2570(a) sets a **7-day week-to-week** notice the library never had; 58-2570(b)'s 15-day military notice is **tenant-only** and needs both service *and* orders.

**Judgment calls resolved by Taylor:** `returned-payments` left as-is (60-2610(g) caps the *drawee's* charge; the landlord recovers it as a pass-through, so the ceiling is $30 either way); smoke detectors split into clause + education; the four low-value absences given rows after all, since a logged-only absence is invisible to the next state's canvass; topic 49 (free-standing abandoned-property chapter) closed **N/A** — 58-2565 is self-contained.

**Canvass pass 2 caught pass 1's scope error:** pass 1 canvassed 31 rows and reported "31 of 31" when the checklist holds **73**. A denominator instruction has been added to the checklist. Pass 2's substantive re-checks came back clean — notably a direct sweep of all 113 KS rows for exculpatory language against 58-2547(a)(4), rather than trusting notes.

## §23. Kansas open items

1. **`assistance-animal-accommodation` (KS;NE) stays NEEDS_REVIEW** — tagged to Nebraska, which is unchecked. A Kansas answer cannot move a shared row. Also carries an unresolved conflict over whether HUD's 2025-09-17 withdrawal and 2026-05-22 enforcement narrowing are two events or one.
2. **Enrolled text of Sub. HB 2357 unread.** The KLRD 2026 Summary of Legislation is authoritative and detailed but is a summary; exact statutory language and section numbers should be confirmed when published.
3. **Pre-1975 block (58-2501–2533) and Mobile Home Parks RLTA** remain deprioritized by product decision — not gaps, revisitable on customer demand.
4. **Numbering note:** Part I's section numbers skip (§8 → §10 → §13); an artifact of the original sessions, left as-is to preserve cross-references.

---

## §5a.1 PROPAGATION NOTE — incoming from the Nebraska re-audit, 2026-08-31 (v62 → v63)

**`assistance-animal-accommodation` — Nebraska removed; row is now KS-only and flipped `NEEDS_REVIEW` → `VERIFIED`.**

The row shipped at `NEEDS_REVIEW` with Nebraska as the sole remaining blocker. Both blockers are now resolved:

1. **Nebraska's basis is determined, and it takes its own override.** Nebraska has an express service-animal *housing* statute (Neb. Rev. Stat. §§20-131.01 to 20-131.04) that the library had zero rows on — four-way classification **category 1: independent, animal-specific, housing-express**. Stronger than Kansas's generic-duty basis. It carries a no-additional-deposit rule the shared clause does not state, so Nebraska now takes `assistance-animal-accommodation-ne`.
2. **The HUD question is resolved as TWO SEQUENTIAL EVENTS**, not conflicting accounts of one: the 2025-09-17 withdrawal of FHEO-2020-01 and FHEO 2013-01 (later formalized at Fed. Reg. Docket FR-6571-N-01), then a separate 2026-05-22 FHEO memo narrowing enforcement to individually-trained animals. Neither amended the FHA itself, so private suits and state-agency enforcement are unaffected.

**Scope of the change: states-field only. `bodyText` was not touched**, so no clause-text propagation is owed to Kansas. This note records the status flip.

**Two Kansas-relevant findings from the Nebraska work, offered as contrast rather than as changes:**

- **Penalty scoping came out opposite to Kansas.** Neb. §20-129 is scoped by **section list** and expressly names §§20-131.01 to 20-131.04, so it reaches housing — the Wyoming pattern. Kansas's §39-1112 is scoped to "any place listed in K.S.A. 39-1101" and does not. Same question, third distinct answer. Nebraska also has **no tenant misrepresentation offence at all** (LB553/2019 and LB309/2021 both died in Judiciary), and its criminal exposure runs at the **landlord** for denying — the same inversion Kansas found, reached by different statutory machinery.
- **Species scope diverges, via a mechanism Kansas does not have.** Nebraska freezes "service animal" to 28 C.F.R. 36.104 *as it existed on 2008-01-01* (§49-801(20)). The dog-only limitation and the express emotional-support exclusion both entered federal law in 2010, so neither applies in Nebraska: NE is species-**open** where Kansas is dogs-only, and NE excludes ESAs only by implication from "individually trained" where Kansas excludes them expressly at 39-1113(f). This produced a new checklist canvass row on statutory freeze-date incorporation by reference, unchecked for Kansas.


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

**Relevance to Kansas:** all three clauses are KS-tagged. The `holdover` edit is neutral for KS — the 1.5× cap under K.S.A. 58-2570(c) already sat below the removed "double" figure, so the self-limiting tail was already doing the work. The `returned-payments` edit brings the clause in line with `edu-nsf-fee-cap-ks`.

**CSV: v93 → v94 (484 rows, unchanged count — body text and notes only).** No new rows; no display collisions introduced.


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

# CORE-OBLIGATIONS CANVASS — 2026-09-07 (PARTIAL — deposit block)

Appended during the **South Dakota** re-audit session. Context: SD's re-audit found the consolidated named-topic checklist had **no topic row at all** for several universal landlord obligations — recorded as **Addendum L.10**, accretion bias. A `CORE OBLIGATIONS` section was added and SD filled; ND and MN have since been canvassed. **Kansas is the fourth state, and this pass covers the four security-deposit rows only.** Ten KS cells remain `NOT CANVASSED`.

**Source:** K.S.A. 58-2550 read in full from the **Kansas Office of Revisor of Statutes**, the official publisher. History: `L. 1975, ch. 290, § 11; L. 1978, ch. 216, § 1; L. 1997, ch. 68, § 1`. **Last amended 1997** — the oldest-settled deposit provision of the four states canvassed, and the only one with no amendment in the last three decades. No K.4 currency risk.

## Three findings the library did not have

**1. A tenant DEMAND is part of the return trigger — unique among the states canvassed.** § 58-2550(b) runs two clocks: the balance is due **within 14 days after the landlord determines the amount** of expenses or damages, but **in no event more than 30 days after termination of the tenancy, delivery of possession, and demand by the tenant.** If the tenant makes no demand within 30 days, the landlord must **mail** the balance to the last known address.

SD keys its clock to termination plus receipt of a mailing address; ND to termination plus delivery of possession; MN to termination plus receipt of a mailing address. **Kansas is the only one of the four to make the tenant's own demand an element**, with a mailing fallback if no demand comes. A landlord who waits for a demand that never arrives is not thereby excused.

**2. The last-month's-rent restriction exists here, and it is the strongest version found.** § 58-2550(d) bars a tenant from applying the deposit to last month's rent or using it in lieu of rent at any time, and a tenant who does **forfeits the deposit entirely** — the landlord may still recover the rent as if the deposit had never been applied.

This is the topic the SD re-audit left **Inconclusive**, then partially resolved through § 43-32-6.1's functional test, and which MN regulates from both directions (§ 504B.178 subds. 1 and 8). **Four states, four postures**: KS forfeiture; MN express carve-out plus tenant penalty; SD a functional test with no express rule either way; ND nothing located. The topic is live in three of four and was invisible to the checklist until now.

**3. Successor liability is express.** § 58-2550(f): "the holder of the landlord's interest in the premises at the time of the termination of the tenancy shall be bound by this section." **SD's equivalent was confirmed absent** in the re-audit; ND and MN both have detailed transfer regimes. Kansas is a third pattern — one sentence, no transfer procedure, liability simply follows the interest.

## Also recorded

**Caps are tiered by furnishing** — one month unfurnished, 1½ months furnished, **plus an additional ½ month where pets are permitted** (§ 58-2550(a)). No other canvassed state ties the cap to furnishing. Subsidised municipal housing authorities may use a bedroom-size schedule and **must offer a deferred payment plan** allowing the deposit to be paid in instalments — the only instalment right found in any of the four states, and the topic SD recorded as confirmed absent.

**Itemization is mandatory, not on request**, and the case law enforces it: *Geiger v. Wallace*, 233 Kan. 656 (1983) awarded deposit plus 1½× for failure to furnish an itemized statement; *Love v. Monarch Apartments*, 13 Kan. App. 2d 341 (1989) holds the trial court has **no discretion to reduce** the statutory damages; *A & S Rental Solutions v. Kopet*, 31 Kan. App. 2d 979 (2003) allows substantial compliance as a defence.

## Ten cells still NOT CANVASSED for Kansas

Habitability/repair duty and its waivability; tenant repair duty; tenant remedy for failure to repair; both assistance-animal rows; general reasonable-accommodation duty; required state disclosures; rent-modification notice; periodic-tenancy termination notice; state-wide lease-content restrictions.

**Section leads identified from the official article index, recorded to save the next pass the lookup:** § 58-2551 (disclosures required of landlord), § 58-2553 (duties of landlord; agreement that tenant perform landlord's duties; **limitations**), § 58-2554 (conveyance by landlord), § 58-2555 (duties of tenant), § 58-2559 (material noncompliance by landlord; **30-day termination notice**), § 58-2560 (failure to deliver possession), § 58-2545 (rental agreement terms), § 58-2547 (prohibited provisions), § 58-2557 (landlord access), § 58-2570 (termination of periodic tenancy). **None read in this pass.**

## No CSV changes

Canvass and record only; **no §5a.1 propagation owed.**

## Habitability block — § 58-2553 read in full

**Source:** Kansas Office of Revisor of Statutes. History: `L. 1975, ch. 290, § 14; L. 1982, ch. 230, § 2`. **Last amended 1982.**

**Two features no other canvassed state has.**

**An excuse clause at the front of the duty.** § 58-2553(a) opens: *"Except when prevented by an act of God, the failure of public utility services or other conditions beyond the landlord's control, the landlord shall…"* MN, ND and SD all state their duties unconditionally and handle causation elsewhere. Kansas builds the excuse into the duty itself, which changes where the burden sits in a dispute.

**A cable and communications access right.** § 58-2553(a)(5) closes: *"The landlord shall not interfere with or refuse to allow access or service to a tenant by a communication or cable television service duly franchised by a municipality."* Nothing comparable appears in ND ch. 47-16, MN ch. 504B, or SD ch. 43-32. It sits inside the habitability section, which is why a topic-driven canvass would never have found it — and it is a genuine restriction on landlord conduct that the library does not record.

**Waivability: Kansas patterns with ND, against SD and MN.** No express non-waiver clause; instead two structured delegation routes.

- § 58-2553(b): in a building housing **not more than four households** with common areas, the parties may agree in writing that the tenant performs the **waste-removal and water/heat duties** plus specified repairs, in good faith and not to evade.
- § 58-2553(c): for any unit other than a single-family residence, a tenant-repair agreement is valid only if made in good faith, **in a separate signed writing, supported by adequate consideration**, not required to cure a code violation under (a)(1), and not diminishing the landlord's duties to other tenants.
- § 58-2553(d): performance of that agreement **may not be made a condition** of any rental obligation.

**The § 58-2553(c) conditions are near-identical to MN § 504B.161 subd. 2** — separate writing, adequate consideration — and to ND § 47-16-13.1(5). Three states share this URLTA-derived architecture. **SD is the outlier**, with flat non-waivability and a repairs-in-lieu-of-rent exception carrying no formality requirement at all.

**But Kansas goes further than either in one direction:** § 58-2553(b) permits delegating the **running water, hot water and heat** duty to the tenant in small buildings. That delegation would be void in SD under § 43-32-8 and is not available in MN, where § 504B.161 subd. 2 cannot reach the subd. 1 covenants at all. **A landlord operating across these states cannot carry one delegation clause between them.**

**Countervailing case law recorded rather than omitted:** despite the delegation routes, Kansas courts describe the core duties as **"absolute and non-delegable"** (*State v. Mwaura*, 4 Kan. App. 2d 738, 741) and speak of **"three duties on all Kansas residential landlords"** (*O'Neil v. Durham*, 41 Kan. App. 2d 540, 203 P.3d 68 (2009)). Both are annotations on the official page; **neither opinion was read**. The tension between the statute's express delegation and the case law's non-delegable framing is flagged, not resolved.

## Kansas status

**Six of fourteen cells filled.** Remaining: tenant repair duty (§ 58-2555); tenant remedy for failure to repair (§ 58-2559); both assistance-animal rows; general reasonable-accommodation duty; required state disclosures (§ 58-2551); rent-modification notice; periodic-tenancy termination notice (§ 58-2570); state-wide lease-content restrictions (§ 58-2547 prohibited provisions is the lead).

## Leads identified this pass — NOT verified, NOT filled

A further search returned Kansas answers for most remaining cells, but **only through secondary sources**: the K-State tenant handbook, a commercial eviction-notice table, and a Justia 2018 snapshot. Under this project's standard those locate primary text; they do not support a cell. **Nothing below has been filled into the checklist**, and none of it should be treated as verified.

Recorded so the next session starts with targets rather than searches:

| Section | Apparent content | Source quality |
|---|---|---|
| **§ 58-2547** | "Prohibited terms and conditions in rental agreement; damages" — the K-State handbook states the listed provisions are **unenforceable if included** and the tenant **may recover actual damages**, and that the list includes **an agreement to pay either party's attorney's fees**. This is the likely basis for the library's standing assertion that KS bans lease fee clauses | Secondary; official title confirmed from the Revisor's article index |
| **§ 58-2566** | "Acceptance of late rent; effect" — acceptance of late rent **without reservation** waives the right to terminate for that breach, **"unless otherwise agreed after the breach has occurred."** This is the KS late-rent waiver rule the SD log refers to, and the "after the breach" formula matches NE § 76-1433 | Secondary (Justia 2018 text); **history shows L. 1975 ch. 290 § 27 and no later amendment**, so staleness risk is low but the text is unconfirmed |
| **§ 58-2570** | Termination of tenancy: **7 days** for a weekly periodic tenancy, **30 days** for monthly, plus holdover and immediate-possession provisions | Commercial table only — weakest of these |
| **§ 58-2564** | Notice to cure: **14 days** for a lease violation, **3 days** for nonpayment | Commercial table only |
| **§ 58-2551** | "Disclosures required of landlord…; person failing to comply becomes landlord's agent for certain purposes" | Official title only |
| **§ 58-2548** | "Inventory of premises by landlord and tenant, when; copies" — a move-in inventory provision, which **SD confirmed absent** and MN has at § 504B.182 | Official title only |
| **§ 58-2555** | "Duties of tenant" | Official title only |
| **§ 58-2559** | "Material noncompliance by landlord; notice; termination…" — the tenant's **30-day** termination route appears in an official-page snippet | Partial official text |
| **§ 58-2571 / 58-2572** | Access remedies; **retaliatory action prohibited** | Official titles only |

**§ 58-2548 is worth flagging now**, even unverified: a statutory move-in inventory would put Kansas with Minnesota (§ 504B.182) and North Dakota (§ 47-16-07.2's mandatory condition statement) against South Dakota, where the re-audit confirmed no such requirement exists. **Three of four states may require a move-in document that SD does not** — a pattern the core-obligations table was built to expose, and one no state's individual canvass would have surfaced.

## Kansas status at handoff

**Six of fourteen cells filled**, all from primary text at the Kansas Office of Revisor of Statutes: the four deposit rows (§ 58-2550) and the two habitability rows (§ 58-2553). **Eight cells remain `NOT CANVASSED`** with the section leads above.

**No CSV changes.** Canvass and record only; **no §5a.1 propagation owed.**

## § 58-2547 read in full — the strictest prohibited-terms provision of the four states

**Source:** Kansas Office of Revisor of Statutes. History: `L. 1975, ch. 290, § 8` — **never amended.**

> "(a) No rental agreement may provide that the tenant **or landlord**: (1) Agrees to waive or to forego rights or remedies under this act; (2) authorizes any person to confess judgment on a claim arising out of the rental agreement; (3) agrees to pay **either party's** attorneys' fees; or (4) agrees to the exculpation or limitation of any liability of either party arising under law or to indemnify either party for that liability or the costs connected therewith, **except that a rental agreement may provide that a tenant agrees to limit the landlord's liability for fire, theft or breakage with respect to common areas** of the dwelling unit.
> (b) A provision prohibited by subsection (a) included in a rental agreement is unenforceable. If a landlord **deliberately** uses a rental agreement containing provisions known by such landlord to be prohibited, the tenant may recover **actual damages**."

**The CSV's standing assertion is now primary-verified.** The trunk carries an integrity check that **zero `LEASE_CLAUSE` rows tagged KS or NE contain attorney-fee language**. § 58-2547(a)(3) is its basis, and the text confirms it — with a detail the assertion does not capture: **the ban is bilateral.** It bars a clause requiring *either* party to pay fees, so a tenant-favourable fee clause is equally void. Nothing in the library records that.

**Three cross-state contrasts, each against a South Dakota confirmed-absence.**

| | KS | SD |
|---|---|---|
| Confession of judgment | **Expressly banned** in a lease, § 58-2547(a)(2) | **Confirmed absent** as a ban; ch. 21-26 permits it, subject to § 21-26-5's non-waivable notice and hearing |
| Exculpation / limitation of liability | **Expressly banned**, with one narrow carve-out | **Confirmed absent** as an enumerated ban; only § 53-9-3's general fraud/willful/violation-of-law limit |
| Waiver of statutory rights | **Expressly banned** | No general equivalent |

The SD re-audit established that South Dakota follows the **North Dakota pattern** — no enumerated prohibited-provisions statute. Kansas is the opposite pole, and Minnesota sits between with non-waiver clauses attached to individual sections rather than a single list.

**The exculpation carve-out matters for the clause library.** § 58-2547(a)(4) permits *only* a limitation of the landlord's liability for **fire, theft or breakage in common areas**. The library's exculpatory family — `parking`, `storage-space`, `tenants-property-insurance` — is tagged **CO;WY;ND;SD** and **not KS**. That exclusion is correct and now has a verified basis: those clauses reach beyond common-area fire/theft/breakage and would be void in Kansas. Recorded so a future extension pass does not tag them to KS on the assumption the omission was an oversight.

**Identified, not read:** § 58-2544 (unconscionability), § 58-2567 (lien or security interest in tenant's personal property unenforceable; distraint abolished — the KS analogue to SD's confirmed-absent landlord lien), § 58-2566 (acceptance of late rent waives the termination right "unless otherwise agreed after the breach has occurred").

## Kansas status at handoff

**Seven of fourteen cells filled**, all from primary text at the Kansas Office of Revisor of Statutes: the four deposit rows (§ 58-2550), the two habitability rows (§ 58-2553), and lease-content restrictions (§ 58-2547).

**Seven remain `NOT CANVASSED`:** tenant repair duty (§ 58-2555); tenant remedy for failure to repair (§ 58-2559); both assistance-animal rows; general reasonable-accommodation duty; required state disclosures (§ 58-2551, § 58-2548 inventory); rent-modification notice; periodic-tenancy termination notice (§ 58-2570).

**Direct section URLs are recorded in this log's prior entry**; the Revisor's article index resolves each as `ksrevisor.gov/statutes/chapters/ch58/058_025_00NN.html`.

**No CSV changes.** Canvass and record only; **no §5a.1 propagation owed.**

## § 58-2570 — termination notice, and a military provision that inverts South Dakota's

**Fixed periods, not scaling.** § 58-2570(a): **7 days** to end a week-to-week tenancy, either party. § 58-2570(b): **30 days** to end a month-to-month, running to a periodic rent-paying date not less than 30 days after receipt.

**Kansas does not scale notice to the rent interval.** ND § 47-16-15 and SD § 43-32-15 both scale (capped at one month); MN § 504B.135 scales (capped at three months). **Kansas states two fixed periods for two named tenancy types.** A landlord reasoning by analogy from the Dakotas would get Kansas wrong, and vice versa.

**The military provision runs the opposite way to South Dakota's — this is the finding worth carrying.**

> "…except that **not more than 15 days' written notice by a tenant** shall be necessary to terminate any such tenancy where **the tenant is in the military service** of the United States and termination of the tenancy is necessitated by military orders."

Kansas gives a servicemember tenant an **earlier exit** — the tenant may leave on 15 days rather than 30. **SD § 43-8-8 does the reverse**: where the tenant, or the tenant's spouse or minor child, is on active service, the **landlord must give two months' notice** rather than fifteen days. One state shortens the tenant's obligation; the other lengthens the landlord's.

Same subject, same beneficiary class, **opposite mechanic**. This is exactly the shape of finding that gets transferred wrongly between states — and it is only visible because both states were run against the same checklist row. Neither state's individual canvass would have surfaced it.

**Also recorded:** § 58-2570(b) provides that a rental agreement for a **definite term of more than 30 days is not a month-to-month tenancy** even where rent is reserved payable at 30-day intervals — a characterisation rule with no counterpart in the other three states.

**Holdover (c):** where the holdover is **willful and not in good faith**, the landlord may recover **not more than 1½ months' periodic rent, or not more than 1½ times actual damages, whichever is greater**. Both limbs are drafted as ceilings, so "whichever is greater" selects which ceiling applies rather than fixing a sum. Contrast **SD, which has no holdover multiplier at all** (`holdover-sd`), and ND, whose § 47-16-14 presumes renewal instead.

**Source note.** Subsections (a) and (b) and the history line (`L. 1975 ch. 290 § 31; L. 1978 ch. 218 § 3; L. 1978 ch. 217 § 3; L. 2003 …`) are from the Kansas Revisor's and Legislature's own pages. **Subsection (c) is from four concordant reproductions (Justia 2024/2021/2014, FindLaw, LawServer) and was not read from the Revisor page** — recorded at that lower tier rather than presented as equivalent.

## Kansas status

**Eight of fourteen cells filled.** Remaining: tenant repair duty (§ 58-2555); tenant remedy for failure to repair (§ 58-2559); both assistance-animal rows; general reasonable-accommodation duty; required state disclosures (§§ 58-2551, 58-2548).

## § 58-2555 — tenant duties, and the fault standard that isn't there

**Source:** Kansas Office of Revisor of Statutes, read in full. History: `L. 1975, ch. 290, § 16` — **never amended.**

Seven duties (a)–(g). Most track the URLTA pattern and are unremarkable against the other three states. **Subsection (f) is not.**

> "(f) be responsible for **any destruction, defacement, damage, impairment or removal of any part of the premises caused by an act or omission of the tenant or by any person or animal or pet on the premises at any time with the express or implied permission or consent of the tenant**"

**There is no fault standard in it at all.** Set against the other three:

| State | Standard for tenant-caused damage |
|---|---|
| **KS** § 58-2555(f) | **"any act or omission"** — no negligence, no willfulness, no qualifier |
| ND § 47-16-10 | **ordinary negligence** |
| MN § 504B.161(1)(a)(2) | **willful, malicious or irresponsible** conduct |
| SD § 43-32-10 | **negligent, willful or malicious** conduct |

Kansas is the only one of the four that imposes responsibility without reference to the tenant's state of mind or care, and it **names animals and pets expressly** as a source of attributed damage. *New Hampshire Ins. Co. v. Hewins*, 6 Kan. App. 2d 259, extends it further — a tenant is liable for damage caused by a **cotenant's** negligent act.

**This matters to the clause library and has not been checked.** The library's `tenant-maintenance` generic and `existing-condition` clause both allocate damage responsibility. In Kansas the statute already imposes a broader allocation than any lease language would need; in the Dakotas and Minnesota a clause drafted to Kansas's breadth would sit above the statutory floor. **Whether the KS rendering of those clauses matches § 58-2555(f)'s scope is a live question**, flagged here and not actioned — this is an SD session.

**Subsection (g)** adds a duty not to engage in, or allow any person or animal or pet to engage in, conduct disturbing the **quiet and peaceful enjoyment of other tenants**. That is a statutory analogue to the library's `no-disturbance` clause, and it likewise reaches animals expressly.

## Kansas status

**Nine of fourteen cells filled.** Remaining: tenant remedy for failure to repair (§ 58-2559); both assistance-animal rows; general reasonable-accommodation duty; required state disclosures (§§ 58-2551, 58-2548).

## §§ 58-2559, 58-2551, 58-2548 and the assistance-animal question — Kansas closed out

**§ 58-2559 — a fourth remedy architecture.** On material noncompliance, or noncompliance with § 58-2553 **materially affecting health and safety**, the tenant serves written notice and the lease terminates on a rent-paying date **not less than 30 days** later. But § 58-2559(a)(1) gives the landlord a **14-day cure window**: adequately initiating a good-faith effort to remedy stops termination. A **same-or-similar repeat breach** then supports a fresh 30-day notice with **no second cure right**. § 58-2559(b) adds damages and injunctive relief — and per *Love v. Monarch Apartments*, 13 Kan. App. 2d 341, 345, **an action under (b) requires no notice at all and does not depend on the landlord's lack of good faith.**

**Kansas has neither repair-and-deduct nor rent escrow.** Set against the others: ND repair-and-deduct; SD repair-and-deduct, vacate, **plus** escrow into the tenant's own account; MN **court-administered** escrow with a receivership regime; **KS terminate-or-sue.** Four states, four architectures — none of which a clause drafted for another would fit.

§ 58-2559(a)(2) mirrors § 58-2555(f): the tenant may not terminate for a condition attributable to the tenant **or any person or animal or pet** there with the tenant's permission.

**§ 58-2548 confirms the flag raised earlier in this log.** Kansas **does** require a joint move-in inventory: within **five days** of initial occupancy or delivery of possession, landlord and tenant **shall jointly inventory** the premises, complete a written record of condition and of any furnishings or appliances, sign duplicate copies, and give the tenant a copy.

**That settles the pattern: three of four states require a move-in document, and South Dakota is the outlier.** ND § 47-16-07.2 (signed condition statement, prima facie proof), MN § 504B.182 (initial and final inspections, wired into the deposit penalty), KS § 58-2548 (joint five-day inventory) — against SD, where the re-audit confirmed the move-in inventory is good practice only. **No individual state canvass would have produced this; it is visible only across a shared row.**

**§ 58-2551** requires written disclosure, at or before commencement, of the name and address of the person authorised to manage the premises and of the owner or agent for service of process — with non-compliance making that person **the landlord's agent** for those purposes.

### The assistance-animal cells are left OPEN, deliberately

Kansas is the first state in this canvass where the sources **conflict outright**, and the conflict is the K.4 shape:

- Several sources state Kansas has **no state-specific assistance-animal or ESA statute**, relying on the FHA plus the Kansas Act Against Discrimination, and one says flatly that **"Kansas does not have a state-specific ESA statute or ESA fraud law."**
- Another asserts a **"Kansas Assistance Animals in Housing Act"** in force since 2022.
- A third cites **K.S.A. 39-1109**.
- **2022 SB 360** was located — a *bill* carrying a misrepresentation-of-entitlement provision. **Enactment unconfirmed.**

Under K.4 and L.6 an introduced bill is not law, and under L.13 the right response to conflicting authority is to check, not to pick. **Both animal cells and the accommodation cell are recorded as OPEN with the conflict documented**, not filled. Escalated for primary text: whether 2022 SB 360 was enacted, and what K.S.A. 39-1109 and the KAAD housing sections (44-1015 to 44-1018) actually say.

The **general reasonable-accommodation duty** is recorded as *present at secondary confidence* — the KAAD is consistently described as mirroring the FHA standard and is enforced by the Kansas Human Rights Commission as a HUD-substantially-equivalent agency, but **no KAAD section was read from primary text**. Same tier as ND's unsearched Title 14-02.4; SD's § 20-13-23.7 remains the only one of the four that is primary-verified.

## Kansas status — canvass complete

**Fourteen of fourteen cells now carry a status.** Eleven filled from primary text at the Kansas Office of Revisor of Statutes; one (disclosures) tiered below that and marked; **three left OPEN with a documented source conflict rather than guessed.**

**No CSV changes.** Canvass and record only; **no §5a.1 propagation owed.** Two clause-level questions are flagged for KS's next review: whether the KS renderings of `tenant-maintenance` and `existing-condition` match § 58-2555(f)'s no-fault breadth, and whether `no-disturbance` aligns with § 58-2555(g).

## Rent-modification notice — no statute; Kansas canvass complete at 15 of 15

The KRLTA prescribes **no rent-increase or change-of-terms notice**. For a periodic tenancy the only mechanism is the § 58-2570 termination notice — 7 days week-to-week, 30 days month-to-month — which **ends the tenancy rather than modifying it**; during a fixed term the lease governs. Kansas also has **no rent control, no statutory late-fee cap and no mandatory grace period.**

**Across the seven states this row now divides four to three.** No statutory notice: **KS, NE, MN, WY.** Notice required: **CO** (60 days where there is no written agreement, **plus a once-per-twelve-months cap on the frequency of increases** — unique among the seven), **ND** § 47-16-07 (30 days), **SD** § 43-32-13 (30 days, with a 15-day tenant counter-right).

**Kansas's fourteen other cells are recorded above.** Three remain OPEN on the unresolved 2022 SB 360 enactment question; the rest are filled from primary text at the Kansas Office of Revisor of Statutes, with the disclosures cell tiered below.

## The three OPEN cells are resolved — and two commercial sources cite statutes that do not exist

The assistance-animal cells were left **OPEN** rather than guessed, on the ground that sources conflicted over whether a "Kansas Assistance Animals in Housing Act" had been enacted in 2022. **Resolved: it was not.**

**HB 2523 (2019), SB 360 (2021), and S. Sub. for HB 2057 (2022) all died in the legislature.** Three separate attempts, none enacted.

**Consequence worth recording as its own finding:** two commercial ESA sites cite **K.S.A. 58-25,137** (annual re-certification of ESA documentation) and **K.S.A. 58-25,138** (landlord non-liability for assistance-animal injury) as live Kansas law. Those are the sections SB 360 *would have created*. **They do not exist.** A landlord relying on § 58-25,137 to demand annual ESA renewals would be acting on a statute that was never enacted — and unlike a stale figure, a nonexistent section cannot be caught by checking currency, only by checking existence.

**This is the fifth miscitation this canvass has caught**, and the first where the cited section was never law at all rather than merely misdescribed. It vindicates the decision to hold the cells OPEN: both directions were available from confident secondary sources, and picking either would have been wrong — the "enacted" reading fabricates law, the bare "no state statute" reading would have missed what Kansas *does* have.

### What Kansas actually has — from this project's own prior KS re-audit

The earlier KS re-audit had already resolved this correctly, and the core-obligations cells now reflect it:

- **Trained assistance DOGS have an independent state housing right** — K.S.A. 39-1102 / 39-1107 / 39-1108, with a statutory no-fee rule — **but the scheme expressly excludes ESAs**, and is limited to **dogs**, so a non-canine assistance animal falls outside it entirely.
- **K.S.A. 39-1111's verification procedure is scoped to the public-accommodations place list and does not reach housing.** Kansas extends the substantive right into housing without extending the tools for verifying it.
- **K.S.A. 39-1112's misrepresentation penalty** — Class A nonperson misdemeanor, up to a year and $2,500 — is likewise scoped to "any place listed in K.S.A. 39-1101," and **housing is not on that list.** It does not reach a fraudulent housing claim.
- **K.S.A. 39-1103 runs the other way**: denying or interfering with the rights of a person with an assistance animal is a **misdemeanor against the landlord**. Kansas joins CO and SD in having criminal exposure that runs toward the landlord, not the tenant.

**For ESAs specifically, the FHA plus KAAD § 44-1016 are the only basis.**

### The accommodation duty, and why its exemptions must be read separately

KAAD § 44-1016 prohibits disability discrimination in housing, enforced by the Kansas Human Rights Commission as a HUD-substantially-equivalent agency. **§ 44-1018(b) exempts small landlords from § 44-1016 entirely — including the accommodation duty** — for three or fewer single-family houses rented without a broker, or an owner-occupied building of four or fewer units. **The advertising ban at § 44-1016(c) survives the exemption.**

The duty and its exemptions live in different sections, and reading only the duty produces an answer that is wrong for a large share of Kansas landlords. Recorded at secondary confidence; KAAD text not read from primary source in this pass.

## Kansas status

**Fifteen of fifteen cells filled, no cells OPEN.** Eleven from primary text at the Kansas Office of Revisor of Statutes; the disclosures and KAAD cells tiered below that and marked.

## § 58-2555 clause flag — FALSE POSITIVE, no action

The canvass flagged whether the KS renderings of `tenant-maintenance`, `existing-condition` and `no-disturbance` matched § 58-2555(f)'s no-fault breadth and (g)'s quiet-enjoyment duty. **They do.** Kansas already overrides the generic with **`tenant-duties-ks`**, which carries both:

> "Tenant is also responsible for any destruction, defacement, damage, impairment, or removal of any part of the property caused by Tenant **or by any person, animal, or pet** on the property with Tenant's express or implied permission or consent. Tenant will not engage in, or allow any such person, animal, or pet to engage in, conduct that disturbs the quiet and peaceful enjoyment of the property by other tenants."

That tracks § 58-2555(f) and (g) in substance — **including the absence of any fault standard and the express attribution to animals and pets**, the two features the canvass identified as distinctively Kansan. The row cites K.S.A. 58-2555 and is `REQUIRED` / `VERIFIED`.

**Minor observation, not a defect:** the generic `no-disturbance` is also tagged KS, so a generated Kansas lease states the quiet-enjoyment duty twice — once in `tenant-duties-ks`, once in `no-disturbance`. Redundant rather than conflicting. Recorded, not changed.

**No CSV changes. No §5a.1 propagation owed.**

## Exculpatory family reviewed — no change, one flag recorded

`parking-ks`, `storage-space-ks` and `tenants-property-insurance-ks` all exist and **strip the not-liable sentence entirely** rather than carving it. That is safe and defensible. It may also be **more conservative than Kansas requires.**

**K.S.A. § 58-2547(a)(4)** bans exculpation and liability-limitation clauses **"except that a rental agreement may provide that a tenant agrees to limit the landlord's liability for fire, theft or breakage with respect to COMMON AREAS of the dwelling unit."**

- **`parking-ks`** — a designated parking area is plausibly a common area, so a narrowed fire/theft/breakage limitation may be lawful.
- **`storage-space-ks`** — weaker. The clause assigns storage *"for Tenant's exclusive use,"* and exclusivity cuts against "common area."
- **`tenants-property-insurance-ks`** — the renter's-insurance requirement is preserved and lawful; only the exculpation was dropped. Least affected.

**Not changed.** Restoring an exculpatory sentence is a risk decision, not a research conclusion, and "common areas" is undefined in the section. Flagged for KS's next review with the analysis recorded so it need not be redone.

**Note the contrast now visible across the two URLTA states:** Kansas bans exculpation broadly with a **narrow common-area carve-out**; Nebraska bans it **narrowly** (active and actionable negligence only) with no carve-out. The two states' overrides reflect that correctly — KS strips, NE carves — which is the right outcome reached by two different routes.


## Propagated from the Nevada pass, 2026-09-24

Two shared rows tagged to this state were edited by the Nevada pass (§5a.1 / instruction 9):

1. `common-area-use` — appended: "Nothing in this Section restricts any display that applicable law entitles Tenant to make, such as the display of the flag of the United States or of religious or cultural items, subject to any lawful limits on its size, placement, and manner." Driven by NRS 118A.325 / 118A.327 (NV). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
2. `parking-vehicle-rules` — inserted "in accordance with applicable law" before the landlord's towing authority. Driven by NRS 487.038 (NV). Classification: UNIFORM — self-limiting. Inherit without override.

`last_checked` on both rows reset to 2026-09-24. No other field changed. Detail: lease-clause-decision-log-NV.md §§3.1, 11.6, 16. (Appended at sync, 2026-09-25.)


## Propagated from the Texas pass, 2026-09-25

Two shared rows tagged to this state were edited by the Texas pass (§5a.1 / instruction 9):

1. `no-alterations` — appended: "This Section does not limit any repair, installation, or rekeying that applicable law entitles Tenant to perform." Driven by Tex. Prop. Code §§92.0561, 92.164(a)(1), 92.165(1) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
2. `assigned-parking-space` — reassignment is now "subject to any limits applicable law places on changing parking rules or policies during the Term." Driven by Tex. Prop. Code §92.0131(e) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.

`last_checked` on both rows reset to 2026-09-25. No other field changed. Detail: lease-clause-decision-log-TX.md §§3.1, 16. (Appended at sync, 2026-09-26.)


## Propagated at the Florida sync, 2026-09-26

A shared row tagged to this state was edited (§5a.1 / instruction 9), by Taylor's decision at the Florida sync, not by a state pass.

1. `application-of-payments`: payments are now applied **rent first**, oldest unpaid period first, and only then to fees and other charges ("unless Tenant directs otherwise in writing for a particular payment or applicable law requires otherwise"). It was fees first. The cure-preserving sentence is kept. NJ and FL are folded back into this row and `application-of-payments-nj` is retired. Reason: fees first turns an unpaid fee into an apparent rent shortfall. No tagged state's research found a statute requiring fees first, and rent first is lawful on any reading. Classification: UNIFORM. It removes a landlord-favorable ordering and adds no obligation. Inherit without override.

`last_checked` reset to 2026-09-26. No other field changed. This is not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-FL.md §16. (Appended at sync, 2026-09-26.)

2. `default-by-tenant-ks-ne` (second propagated edit at the Florida sync, 2026-09-26): the non-rent cure promise now ends "...does not cure the failure after receiving written notice, except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure." Driven by Florida's finding that promising a cure for every breach can contractually give up a state's no-cure termination grounds (checklist instruction 33). This is a targeted fix Taylor approved, not a re-audit. Classification: UNIFORM. It is self-limiting and adds no landlord right where no such law exists. Inherit without override. `last_checked` reset to 2026-09-26. Detail: lease-clause-decision-log-FL.md §16.

## Propagated from the Arizona pass, 2026-09-27

Not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-AZ.md §14 and §17. (Appended at sync, 2026-09-27.)

1. **Shared-row edit received from Arizona (2026-09-27, Taylor's decision) — `entire-agreement`.** The sentence "may not be changed except in writing signed by all parties" now continues ", or as applicable law permits Landlord to change it by written notice to Tenant." Driver: A.R.S. §33-1342(C), which lets an Arizona landlord amend existing leases by written notice to comply with new laws; the old wording could be read to waive such a right. Recorded as **uniform** under §5a.1: the words are self-limiting and change nothing where this state's law gives no unilateral amendment right, while preserving any right it does give (for example, rules adopted on notice or changes to a periodic tenancy on the notice the law requires). No state-specific override is needed. `last_checked` was reset to 2026-09-27.

2. **2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged KS** (§5a.1; uniform text, no KS override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. Kansas does not regulate applications (`edu-no-rental-application-regulation-ks`). A statutory fraudulent-misrepresentation termination right was confirmed absent, so the clause gives the landlord a lease-breach route it would otherwise lack. Remedies run through `default-by-tenant-ks-ne` (K.S.A. 58-2564(a) notice and cure).

---

## Gap-discovery backfill (instruction 36) — 2026-09-27

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§1 statute structure and three-layer map; §3 core sections read section by section; §7 two missed sections closed; §20 Kansas Smoke Detector Act, ch. 31) |
| Gap-discovery source 2 — real-lease comparison | Done (§8: Kansas City Regional Association of Realtors dual-state KS/MO residential lease form; edition/date not recorded in §8 — see "Record gap" below) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§24 below: 68 scenarios, Claude-generated) |
| Gap-discovery source 4 — outside-title search | Done (§5 confirmed absences, highest-value topics; §20 K.S.A. ch. 31; §21 Sub. H.B. 2357) |

**Scope of this pass:** the landlord-scenario screen only. Kansas was not re-audited and no completed finding was re-scrubbed (instruction 22). Sources 1, 2 and 4 are cited above to the sections where earlier passes recorded them; instruction 36's backfill list names Kansas for the scenario screen only, and not for the real-lease or outside-title backfills.

**Record gap, not a work gap (source 2).** §8 names the lease used — the Kansas City Regional Association of Realtors' dual-state KS/MO residential lease form — and lists five points of comparison, but records no URL, publisher edition or date. Instruction 36 now requires all three. The comparison itself qualifies (a state Realtors association product, not a template mill), so the row says Done; what is missing is the citation metadata. **Ask:** should the KS chat re-locate that form and backfill the URL and edition into §8, or is the name enough? Flagged rather than silently left, because the check script reads the table, not §8.

**Research mode:** on, for this pass only. Every gap below is a statutory question and none of them could be answered from the CSV. Primary reads went to ksrevisor.gov where it was reachable; see the evidentiary note in §24.4.

---

### §24. Landlord-scenario screen (gap-discovery source 3) — 2026-09-27

**Method:** Arizona's 59-scenario map (AZ log §18.1) was taken as the base. One Arizona-only scenario was dropped (the city rental tax, which has no Kansas analog), four were **split** where Kansas divides the question differently from Arizona — rent withholding from repair-and-deduct, tenant damage from the landlord's right to cure and bill, the tenant's own utility shutoff from a municipal bill landing on the owner, and mid-lease rule changes from rent assigned to a lender — and **six Kansas-specific scenarios were added**. Each of the resulting 68 was run against the 115 KS-active rows in the attached `lease-clauses.csv` and marked Covered or Gap. Scenarios were generated here; Taylor was not asked about his experience (instruction 36).

**Result:**
- **68 scenarios: 49 covered, 15 gaps, 3 confirmed absences, 1 flagged unsearched.** The 15 gaps resolve to 14 rows — two scenarios (partial payment, and withholding over a repair) land on the same new row.
- **14 new rows** — 10 substantive findings, 4 confirmed absences rowed rather than logged only.
- **2 changed rows**, both KS-only: `edu-self-help-eviction-ban-ks` (added the prohibition it was missing) and `edu-entry-standard-ks` (topic_key alignment only).
- **No shared row was added or edited.** Nothing in this pass needs instruction 9 / §5a.1 propagation.
- **3 confirmed absences recorded without a row.**
- **2 new rows ship NEEDS_REVIEW** because their controlling sections were never read verbatim (instruction 10's corollary).

#### §24.0 The finding that matters more than any single row

**Five sections of the Kansas Residential Landlord and Tenant Act were cited by no KS-active row before this pass:** K.S.A. 58-2549, 58-2561, 58-2568, 58-2569 and 58-2571. A sixth gap sat *inside* a section the library already cited — 58-2565(c), the re-letting duty, absent from `abandoned-property-ks`, which renders (a), (b) and (d)–(f) of the same section.

These are not obscure provisions. 58-2568 is the Act's landlord-remedies section. 58-2569 is the prohibition that `edu-self-help-eviction-ban-ks` was asserting while citing only the damages section. 58-2571 is the remedy for a tenant who refuses lawful access, the analog of the Arizona section Arizona's own screen leaned on.

**What this says about source 1 for Kansas.** The statute walk recorded in §§1, 3 and 7 was run at default settings (Sonnet, medium effort, research off) and was less complete than the log implies. This is not a re-audit finding — every one of these came out of the scenario screen, which is exactly what the screen is for — but it is a **method finding with consequences for the other eleven states now getting this same backfill.** A cheap, mechanical check surfaced all five in one step: extract every section number in the state's core act from the official section index, then list which ones appear in no row's `bodyText` or `notes`. That took one index read and one pass over the CSV. Recommend it be made part of the scenario screen for every remaining state, and of the statute walk going forward. See the proposed checklist cells.

#### §24.1 Scenario map

| Scenario | KS coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays a holding deposit, then backs out | `due-at-signing`, `edu-no-rental-application-regulation-ks` (fees only) | **Gap → `edu-holding-deposit-ks`** (K.S.A. 58-2543(m)) |
| Screening: fees, criminal history, income source, immigration status | `edu-no-rental-application-regulation-ks`, `edu-fair-housing-ks`, `edu-no-voucher-protection-ks`, `edu-no-immigrant-tenant-protection-ks` | Covered |
| Applicant lied on the application | `rental-application-accuracy`; `edu-no-fraud-termination-statute-ks` | Covered (no KS statutory fraud-termination right; the clause supplies it) |
| Voucher holder applies | `edu-no-voucher-protection-ks` | Covered |
| Unit not ready on move-in day | `possession-delay-ks` (§§58-2552, 58-2560) | Covered |
| Required disclosures at signing | `landlord-disclosure-ks`, `move-in-inventory-ks`, `lead-based-paint`, `smoke-detectors-ks`, `edu-disclosure-noncompliance-ks` | Covered |
| Blank left in the lease | `edu-prohibited-lease-terms-ks`; no KS blank-spaces statute located | Covered (no statutory rule; product/builder rule governs) |
| Owner never registered the rental with a state or county office | — | **Flagged** (no state rental-registration statute located, but not searched to the standard of the in-act absences; municipal registration flagged, instruction 20) |
| Property is in an HOA | `hoa-compliance` | Covered |
| Deposit plus prepaid rent over the cap | `edu-security-deposit-cap-ks`; K.S.A. 58-2543(j) puts prepaid rent outside the deposit | Covered; sharpened by the new holding-deposit row |
| **Rent and money** | | |
| Rent is late | `late-fee-ks`, `default-by-tenant-ks-ne`, `edu-tenant-noncompliance-notice-ks` (3-day pay-or-quit) | Covered |
| Tenant pays part of the rent | `application-of-payments` (rent first), `edu-late-rent-acceptance-waiver-ks`, `edu-late-rent-reservation-fix-ks` | Covered for waiver; **Gap on the litigation side → `edu-rent-into-court-counterclaim-ks`** (§58-2561) |
| Tenant withholds rent over a repair | `habitability-baseline-ks`, `edu-habitability-notice-written-ks` | Covered on duty; **Gap on the mandatory-counterclaim and rent-into-court mechanics → `edu-rent-into-court-counterclaim-ks`** |
| Check bounces | `returned-payments`, `edu-nsf-fee-cap-ks` | Covered |
| Tenant pays in cash and wants a receipt | `acceptable-payment-methods` | **Confirmed absent** (no cash-receipt duty; §58-2549 is an anti-waiver rule, not a receipt rule) |
| Raising the rent at renewal | `edu-rent-control-preemption-ks` (no KS rent-increase notice statute; 30-day route via §58-2570(b)) | Covered |
| **During the tenancy** | | |
| Heat or AC fails | `habitability-baseline-ks` (§58-2553(a)) | Covered — the clause already carries supplied-HVAC maintenance and reasonable heat |
| Repair and deduct | `habitability-baseline-ks`, `edu-habitability-notice-written-ks` (§58-2559 track) | Covered |
| Landlord wants to fix the tenant's breach and bill it | `default-by-tenant-ks-ne`, `tenant-duties-ks` | **Confirmed absent** (no URLTA §4.105-style repair-and-bill-as-rent section in the Article 25 index) |
| Bedbugs, roaches, pests | `edu-no-bed-bug-disclosure-ks`, `tenant-duties-ks`, `habitability-baseline-ks` | Covered |
| Mold complaint | `edu-no-mold-disclosure-ks`, `habitability-baseline-ks` | Covered |
| Tenant causes damage or won't keep the unit clean | `default-by-tenant-ks-ne`, `tenant-duties-ks`, `edu-tenant-noncompliance-notice-ks` | Covered |
| Landlord needs to enter; tenant refuses | `landlords-access`, `edu-entry-standard-ks` (§58-2557 standard only) | **Gap → `edu-entry-refusal-remedies-ks`** (§58-2571, both directions) |
| Tenant changes the locks | `keys` | Covered; DV/stalking lock-change right **confirmed absent** (§58-25,137 read in full, nine subsections, no lock provision) |
| Tenant away for a month | `extended-absence-notice-ks` (§58-2558) | Covered — **the opposite of Arizona**, which has no extended-absence duty |
| Guest won't leave; squatter | `guest-policy`, `guest-policy-day-limit`, `permitted-occupants` | **Gap → `edu-squatter-removal-ks`** (new 2026 Act) |
| Roommate moves out | `joint-liability`, `no-sublet-assign` | Covered |
| Tenant sublets or lists on a short-term rental site | `no-sublet-assign`, `residential-use-only` | Covered |
| Noise and neighbour complaints | `no-disturbance`, `default-by-tenant-ks-ne` | Covered |
| Drugs, violence or other crime | `edu-no-expedited-criminal-eviction-ks`, `default-by-tenant-ks-ne`, `edu-tenant-noncompliance-notice-ks` | Covered for the lease route. Kansas's common-nuisance statutes (ch. 22 art. 39) **flagged, not read** |
| Marijuana | `smoking-policy`, `no-disturbance` | Covered (no Kansas legalization; nothing to carve out) |
| Unapproved pet | `pet-policy-ks`, `pet-insurance-requirement` | Covered |
| Assistance or emotional-support animal request | `assistance-animal-accommodation` (NEEDS_REVIEW, blocked on NE), `edu-kaad-accommodation-duty-ks`, `edu-kaad-housing-exemptions-ks`, `edu-service-animal-denial-penalty-ks`, `edu-service-animal-fraud-ks` | Covered |
| Disability modification request | `edu-kaad-accommodation-duty-ks` (§44-1016(h)(3)(A)), `no-alterations` | Covered |
| Tenant paints or alters the unit | `no-alterations` | Covered |
| HOA fines the owner because of the tenant | `hoa-compliance` | Covered |
| Car towed from the lot | `parking-vehicle-rules`, `assigned-parking-space` | **Gap → `edu-no-private-towing-regulation-ks`** (§§8-1102, 8-1103; no signage or authorization statute) |
| Pool at the property | — | **Gap → `edu-no-pool-barrier-requirement-ks`** (K.A.R. 28-4 is child care, not rentals) |
| Yard, snow and outdoor work by the tenant | `landscaping-irrigation`, `snow-removal`, `edu-habitability-duty-delegation-ks` (§58-2553(b) limits) | Covered |
| Tenant's utility is shut off | `utility-service-continuity`, `utility-payment-evidence`, `utilities-responsibility` | Covered |
| A tenant's unpaid city utility bill lands on the owner | `utilities-paid-by-landlord`, `services-utilities-provided-ks-oh` | **Gap → `edu-municipal-utility-lien-ks`** (§12-808c(b)) |
| Landlord shuts off a utility, or a master-metered service is cut | `edu-self-help-eviction-ban-ks` (§58-2563) | Covered; **row changed** to add §58-2569, the prohibition itself |
| Adding a new rule mid-lease, or a law changes | `edu-rules-regulations-enforceability-ks` (§58-2556), `entire-agreement` carve-out, `addendum-precedence` | Covered |
| Rent is assigned to a lender, or a receiver collects it | `identity-change-liability-ks`, `edu-security-deposit-successor-owner-ks` | **Gap → `edu-rent-receipt-anti-waiver-ks`** (§58-2549) |
| **Ending the tenancy** | | |
| Tenant wants out early | `early-termination-ks`, `default-by-tenant-ks-ne` | Covered on the clause; **Gap on what you can actually sue for → `edu-landlord-remedies-on-termination-ks`** (§58-2568) |
| Domestic violence, sexual assault, trafficking or stalking victim wants out | `dv-housing-protections-ks`, `edu-dv-housing-protections-violation-ks` (§58-25,137) | Covered — see the fee note in §24.5 |
| Tenant is deployed or called up | `early-termination-ks` (SCRA), `edu-military-termination-notice-ks` (15-day KS military notice) | Covered |
| Month-to-month or week-to-week notice either way | `edu-military-termination-notice-ks` (§58-2570(a), (b)) | Covered |
| Tenant stays after the lease ends | `holdover`, `surrender-end-of-term-ks-ne`, `edu-holdover-ks` (§58-2570(c) 1.5× cap) | Covered |
| Tenant disappears | `abandoned-property-ks` (§58-2565(a), (b), (d)–(f)) | **Gap → `edu-abandonment-mitigation-duty-ks`** (§58-2565(c), the missing subsection) |
| Tenant dies | `edu-no-tenant-death-statute-ks` | Covered (absence already rowed) |
| Fire or casualty | `fire-casualty-termination-ks`, `edu-no-alt-housing-requirement-ks`, `edu-no-environmental-event-termination-ks` | Covered |
| Eviction process | `edu-tenant-noncompliance-notice-ks`, `edu-termination-outside-eviction-ks` (names ch. 61 only) | **Gap → `edu-eviction-procedure-ks`** (ch. 61 art. 38) |
| Retaliation claim | `edu-retaliation-prohibition-ks` (§58-2572) | Covered |
| Belongings left after move-out or eviction | `abandoned-property-ks`, `edu-landlord-lien-abolished-ks` | Covered |
| Deposit dispute | `security-deposit-return-ks`, `security-deposit-use-ks`, `edu-security-deposit-noncompliance-penalty-ks` | Covered |
| Deposit refund never cashed | — | **Gap → `edu-unclaimed-deposit-refund-ks`** (§§58-3935(a)(16), 58-3950) |
| Tenant asks to seal an eviction record | `edu-eviction-record-sealing-ks` (Sub. H.B. 2357) | Covered |
| **Owner changes** | | |
| Owner sells the property with a tenant in place | `identity-change-liability-ks` (§58-2554), `edu-security-deposit-successor-owner-ks` | Covered — **the opposite of Arizona**, where this was a real gap |
| Lender forecloses | — | **Gap → `edu-no-foreclosure-tenant-protection-ks`** |
| Owner switches property managers | `identity-change-liability-ks`, `landlord-disclosure-ks` (§58-2551) | Covered |
| Buyer is a foreign-adversary entity | — | **Gap → `edu-no-foreign-adversary-land-ban-ks`** (Sub. S.B. 172 vetoed) |
| **Kansas-specific additions** | | |
| Tornado or severe-storm shelter duty | `habitability-baseline-ks` | Covered — no storm-shelter duty located; nothing to add |
| Tenant runs a licensed child care out of the home | `residential-use-only`, `common-area-use` | Covered; the K.A.R. 28-4 pool/fencing overlap is noted in `edu-no-pool-barrier-requirement-ks` |
| Property straddles the Kansas City metro and a Missouri rule is cited at you | `edu-no-bed-bug-disclosure-ks` (already carries the KCMO warning) | Covered |
| Farm, pasture or ag ground in the same transaction | `edu-termination-outside-eviction-ks` (§§58-2501–58-2533 named, unaudited) | Covered as a deprioritized product decision, not a gap |
| Radon | `edu-no-radon-disclosure-ks` | Covered |
| Meth-contaminated property disclosure | — | **Flagged, not searched** — see §24.5 |

#### §24.2 Rows changed

**New rows (14).** Ten substantive, four confirmed absences rowed rather than logged only, per the standing direction that a logged-only absence is invisible in the library and forces the next state's canvass to re-derive it.

*From the Act itself:*
- **`edu-abandonment-mitigation-duty-ks`** (REQUIRED, VERIFIED). K.S.A. 58-2565(c), quoted verbatim in the row's notes. On abandonment the landlord *must* make reasonable efforts to re-rent at a fair rental, and the consequence is not just a damages offset: if the landlord fails to try, or accepts the abandonment as a surrender, **the rental agreement is deemed terminated by the landlord as of the date the landlord had notice of the abandonment.** Rent stops there. The highest-value finding in the pass — a landlord following the library as it stood would have sat on an abandoned unit and sued for the balance of the term. Deliberately *not* added to `abandoned-property-ks`: it is a landlord duty with a landlord-adverse consequence, so it stays out of tenant-facing text per the standing sub-rule.
- **`edu-landlord-remedies-on-termination-ks`** (RECOMMENDED, VERIFIED). K.S.A. 58-2568, quoted verbatim. Possession, rent, or both, plus a separate actual-damages claim that may be filed *before* the termination date. K.S.A. 61-3802 ("Judgment not bar to other actions") looks directly on point and was deliberately kept out of the body — title read, text not.
- **`edu-rent-into-court-counterclaim-ks`** (RECOMMENDED, **NEEDS_REVIEW**). K.S.A. 58-2561. The tenant must raise any counterclaim in the possession or rent action or forfeit it; the court may order rent paid into court and determine each side's net obligation. Ships NEEDS_REVIEW because both hosts returned a paraphrase, not statutory text, and one said so explicitly.
- **`edu-entry-refusal-remedies-ks`** (CONDITIONAL, **NEEDS_REVIEW**). K.S.A. 58-2571. Refused access gets the landlord injunctive relief or termination plus actual damages; unlawful entry, unreasonable entry or harassing entry demands get the tenant the same. Written as a separate row rather than folded into `edu-entry-standard-ks` precisely so paraphrase-sourced content does not silently downgrade a verbatim-sourced VERIFIED row. Merge the two once 58-2571 is read.
- **`edu-rent-receipt-anti-waiver-ks`** (PROHIBITED, VERIFIED). K.S.A. 58-2549, one sentence, quoted in full: no rental agreement, assignment, conveyance, trust deed or security instrument may permit the receipt of rent free of the §58-2553(a) habitability duty. The duty travels with the rent — relevant to rent assignments in loan documents, a receiver collecting during default, and a sale directing rent elsewhere.

*From outside the Act:*
- **`edu-squatter-removal-ks`** (CONDITIONAL, VERIFIED). **New law: Kansas's Removal of Squatters Act, L. 2026, ch. 56 (H.B. 2378), approved April 6, 2026.** Notarized six-element affidavit to law enforcement, 24-hour floor, notice to vacate immediately, and §7(c) puts squatter occupancy outside the KRLTA so no eviction action is needed. Read from the **enrolled bill and the Secretary of State's session laws**, not from any of the three bill drafts (instruction 17). Three traps recorded in the row: holdover tenants are excluded, immediate family are excluded, and a wrongful removal costs actual damages plus **treble fair market rent** plus costs and attorney fees. Effective-date clause is "publication in the statute book" and that date was not established — flagged in the row (instruction 34). K.S.A. numbers not yet assigned, same position as Sub. H.B. 2357; cite the session law until the Revisor publishes 2026.
- **`edu-eviction-procedure-ks`** (REQUIRED, VERIFIED). Chapter 61 Article 38. Pre-suit notice to leave at least three days out, counted as three consecutive 24-hour periods with weekends and holidays included and two extra days if mailed (§61-3803), and it may be combined with the Act's own notice — one notice can serve both. Appearance date set by the court, not less than three nor more than 14 days after the summons issues (§61-3805). Writ of restitution executed within 14 days of receipt (§61-3808). Article 38's full section list is in the row's notes; §§61-3802, 61-3804, 61-3806 and 61-3807 were not read.
- **`edu-municipal-utility-lien-ks`** (RECOMMENDED, VERIFIED). K.S.A. 12-808c(b), quoted verbatim: no lien attaches to the property for unpaid municipal utility fees "when the utility service has been contracted for by a tenant and not by the landlord or owner of the property." Whose name is on the account decides whether the city can certify the tenant's unpaid water to the tax roll. Subsections (c)–(e) came back paraphrased and are held in notes, not asserted in the body. **Currency not established:** History available is L. 2006, ch. 95, §1 from a 2020 edition; whether it has been amended since was not confirmed after two attempts.
- **`edu-unclaimed-deposit-refund-ks`** (REQUIRED, VERIFIED). K.S.A. 58-3935(a)(16) catch-all, five years, quoted verbatim, plus §58-3950's November 1 reporting deadline, July 1 as-of date and the $100/$250 small-holder exemption. An uncashed deposit refund is not the landlord's money.
- **`edu-holding-deposit-ks`** (RECOMMENDED, VERIFIED). K.S.A. 58-2543(m), quoted verbatim. The definition is denomination-blind but **agreement-scoped**: pre-lease holding money is not "specified in a rental agreement," so it sits outside the §58-2550 cap and return rules — until the signed lease recites it or credits it, at which point the cap and the clock attach. The agreement-scoped reading is an inference from the definition's own words; no Kansas case or AG opinion was located either way, and the row is written as a drafting rule rather than a prediction.

*Confirmed absences, rowed:*
- **`edu-no-foreclosure-tenant-protection-ks`** — no state disclosure or lease-survival statute. Secondary-source-only basis; should be `CONFIRMED_ABSENT`, not `CITED`. The federal PTFA sentence is recalled, not read, and is flagged as the weakest claim in the row.
- **`edu-no-foreign-adversary-land-ban-ks`** — **proof by legislative refusal**, the strongest form this project recognises. House Sub. for S.B. 172 passed, and the Governor vetoed it on 2024-05-10; the veto message appears in the 2024 session laws with no chapter number, and no 2025–2026 Kansas enactment was located. Recorded in the row: search results led with "Legislature adopts ban on foreign adversary property ownership" from nine days *before* the veto, and a pass that stopped at the first confident headline would have shipped the opposite finding.
- **`edu-no-private-towing-regulation-ks`** — §8-1102 read; a private tow needs only a "request of the owner or occupant," with no written authorization and no entrance-signage requirement, and "nonconsensual tow"/"nonconsensual towing" returned zero Kansas results. **The direct inverse of Arizona's finding**, so A.R.S. 9-499.05 must not be imported (instruction 18). Municipal ordinances and KCC motor-carrier rules flagged, not resolved.
- **`edu-no-pool-barrier-requirement-ks`** — the only Kansas pool rules located are KDHE child care regulations (K.A.R. 28-4-129, 28-4-594), which bite because of the licence, not the tenancy. Arizona's `pool-safety-notice-az` must not be imported. Neither regulation was read section-open.

**Changed rows (2), both KS-only — no propagation owed.**
- **`edu-self-help-eviction-ban-ks`** — added K.S.A. 58-2569, quoted verbatim, the prohibition this row was asserting while citing only §58-2563's damages. The "by action or otherwise ... except in case of abandonment, surrender or as otherwise permitted in this act" wording also explains why the 2026 squatter act works: §7(c) removes squatter occupancy from the Act entirely. Against anyone who *is* a tenant, §58-2569 still governs. `rule_type` stays PROHIBITED; the 1.5-month figure and punitive-damages points are unchanged.
- **`edu-entry-standard-ks`** — **`topic_key` only**, `entry-standard` → `landlord-entry`. No text, status or rule_type change. Every other state's entry education row and every `landlords-access` clause in all 14 states uses `landlord-entry`; `entry-standard` was carried by this one KS row and would have split Kansas's entry guidance from the new remedies row. A LEASE_CLAUSE + LANDLORD_EDUCATION pair sharing one key is the established convention (NV, AZ, TX). **Judgment call for Taylor:** this is a display-grouping change to a closed state — drop this row from the merge if you would rather leave the keys alone. Nothing else depends on it.

#### §24.3 Confirmed absences (no row)

- **Cash-rent receipt duty.** No section in the Article 25 index imposes one; §58-2549's title ("Receipt of rent subject to certain obligations") is an anti-waiver rule about habitability duties, not a receipt requirement — the title is a genuine trap for a keyword search. Basis: full official section-index read. *Same result as Arizona.*
- **Lock change or rekey right for a DV, sexual assault, trafficking or stalking victim.** K.S.A. 58-25,137 read in full, all nine subsections: it covers denial, eviction, lease-violation findings, documentation, termination, the fee, co-tenants and anti-waiver, and contains no lock provision. Basis: full section read.
- **Landlord's right to cure a tenant's breach and bill it as rent** (URLTA §4.105 / A.R.S. 33-1369 analog). No such section in the Article 25 index; §58-2564 gives notice and termination, not self-cure. Basis: full official section-index read.

#### §24.4 Evidentiary basis and what limited it

**ksrevisor.gov was the intended primary source and was only partly reachable.** The Chapter 58 section-number-and-title index was read from it successfully, and that index is what every in-act absence above rests on — a complete enumeration, not a search. Individual section pages returned repeated `robots.txt` fetch failures, so section text came from Justia's 2025 Kansas Statutes and FindLaw, both of which reproduce the Revisor's text with History lines. Where a host returned a paraphrase rather than text, the affected row says so and ships NEEDS_REVIEW (instruction 10's corollary). Per-row basis is recorded in each row's `notes` (instruction 15).

**Verbatim text obtained:** §§58-2549, 58-2565(c), 58-2568, 58-2569, 58-2543(j)(k)(m), 58-3935(a)(16) and (a)(17), 12-808c(b), 61-3805, and the operative fragments of 58-25,137, 61-3803, 61-3808, 58-3950, 8-1102 and H.B. 2378.
**Paraphrase only:** §§58-2561, 58-2571 (fragments), 12-808c(c)–(e).

**One mid-pass correction, recorded because it is the recurring shape.** A first read of K.S.A. 58-3935 reported a category "Landlord sale proceeds: 1 year." Re-reading the subsection showed (a)(17) is proceeds of a sale under K.S.A. 58-817 remaining after the §58-816 lien — the **self-service storage** lien sale, not residential landlord abandonment. Valid citation, false characterization; the 1-year period was one step from being written into a row. Proceeds left over from a §58-2565(d)–(e) sale fall under the 5-year catch-all instead. This is the fourth or fifth time this project has caught the same class, and it was caught by re-reading the subsection rather than by any screen.

#### §24.5 Flagged, not resolved

- **Meth-contamination disclosure** — not searched this pass. Several states require it; Kansas unknown.
- **Kansas common-nuisance statutes, ch. 22 art. 39** — not read. The lease side (`no-disturbance`, `default-by-tenant-ks-ne`) is covered; a crime/nuisance-abatement education row of the kind Arizona has may still be owed.
- **State rental registration** — no state statute located, but not searched to the standard of the in-act absences. Municipal registration flagged, not resolved (instruction 20).
- **Municipal ordinances** on towing, pool barriers, utility accounts, rental registration and bed bugs — flagged throughout, resolved nowhere (instruction 20). The Kansas side of the Kansas City metro plus Wichita, Topeka, Lawrence, Overland Park and Olathe is where a state-level-only library will be thinnest.
- **Kansas Corporation Commission motor-carrier rules** and **K.A.R. 28-4** — administrative code, needing agency-rulemaking monitoring rather than bill tracking (instruction 16), the same treatment already flagged for K.A.R. 4-27 and K.A.R. 21-60-16.
- **`dv-housing-protections-ks`, no change but worth knowing:** §58-25,137 allows the early-termination fee "only if it is contained in the terms of the rental or lease agreement." The clause itself is what satisfies that condition, so the fee is load-bearing on the clause's presence — strip the DV clause from a Kansas lease and the one-month fee goes with it.
- **`topic_key` fragmentation across states, a library-hygiene finding, not a Kansas one.** The same topic carries different keys in different states: unclaimed deposits are `deposit-escheat` in ND/NV/TX but `escheat` in AZ; the re-let duty is `landlord-mitigation-duty` in MN/TX but `mitigation` in FL/AZ; towing is `towing` in NV/AZ but `private-property-towing` in TX. This pass adopted the majority key each time rather than minting new ones, but instruction 26.2 treats `topic_key` as the group-by for finding near-duplicates, and a split key defeats it. Normalizing is a cross-state product decision for Taylor, not something to fix from a Kansas chat.

#### §24.6 Integrity

Delta built against the attached `lease-clauses.csv`: **941 rows, 16 columns, 905 active, KS 115 active** — matches the figure stated in the prompt, checked before any work (instruction 13).

`lease-clauses-KS-delta.csv`: **16 rows, 14 new and 2 changed**, same 16-column header, unchanged rows omitted. Checks run programmatically: no duplicate ids within the delta; no new id collides with any of the 941 existing ids; every row carries all 16 fields; every row has a non-blank `verification_status` (instruction 27); every `rule_type`, `content_type` and `verification_status` is a valid enum value; every row is `states = KS` with empty `supersedes`; no blank `topic_key`. The one `topic_key` overlap inside Kansas — `edu-entry-refusal-remedies-ks` sharing `landlord-entry` with `landlords-access` — is the established clause-plus-education convention, confirmed against NV, AZ and TX, not a display collision. Eight of the new rows reuse a key another state already carries, which is the intended grouping.

On merge: **941 → 955 rows; KS 115 → 129 active** (63 lease clauses unchanged, education 52 → 66). No other state's count changes. Library totals after merge: VERIFIED 923, UNVERIFIED 29, NEEDS_REVIEW 3 (`assistance-animal-accommodation`, still blocked on Nebraska, plus the two new KS rows above).

#### §24.7 Open items from this pass

1. **Primary text requested (instruction 10, two attempts each, stopped rather than searching a third time).** K.S.A. **58-2561** and **58-2571** — needed to move the two NEEDS_REVIEW rows to VERIFIED. K.S.A. **12-808c** with its History line — needed for currency and for subsections (c)–(e).
2. **Confirm the 2026 statute-book publication date** to fix the effective date of the Removal of Squatters Act, and re-cite both it and Sub. H.B. 2357 by K.S.A. section once the Revisor publishes the 2026 amendments.
3. **Confirm from the House or Senate journal** that no override vote succeeded on House Sub. for S.B. 172.
4. **Read K.S.A. 61-3802** before relying on the possession-plus-money point in anything customer-facing.
5. **Read the federal PTFA** before `edu-no-foreclosure-tenant-protection-ks` goes in front of a customer.
6. **Source 2 metadata** — decide whether to backfill the KCRAR form's URL and edition into §8.
7. Carried, unchanged by this pass: `assistance-animal-accommodation` stays NEEDS_REVIEW, blocked on Nebraska, and still carries the unresolved HUD date conflict.

## Propagated shared-row edits, 2026-09-28 (Taylor's decisions after the gap-discovery backfill)

Uniform under §5a.1: each edit is self-limiting, so this state needs no override. Not a re-audit; nothing else in this state was reviewed.

1. **`no-alterations`** — the carve-out now reads "any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform". It keeps disability modifications that fair-housing law requires the landlord to permit (at the tenant's expense) from reading as subject to unfettered landlord consent. Raised by the NE backfill (NE log §D.1).
2. **`holdover`** — a continued month-to-month tenancy is now "terminable by either party upon the written notice required by applicable law or, where applicable law sets no notice period, by this Lease". Wyoming has no statutory period (`periodic-tenancy-notice-wy` supplies one). Raised by the WY backfill (WY log §20.4).

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their text and citations are unchanged in the new rows.

- **Moved to education:** `security-deposit-return-ks` → `edu-security-deposit-return-ks`; `habitability-baseline-ks` → `edu-habitability-baseline-ks`; `dv-housing-protections-ks` → `edu-dv-housing-protections-ks`; `possession-delay-ks` → `edu-possession-delay-ks`; `fire-casualty-termination-ks` → `edu-casualty-termination-ks`.
- The switched-off habitability and possession-delay rows superseded shared clauses (`landlord-maintenance`, `possession-delay`); those are not brought back.
- **§5a.1:** only KS-only rows changed; no propagation owed.

### Verdict for every lease clause

All 14 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `dv-housing-protections-ks` | Education | — | tenant right |
| `fire-casualty-termination-ks` | Education | — | tenant right |
| `habitability-baseline-ks` | Education | — | landlord duty |
| `possession-delay-ks` | Education | — | tenant remedies incl 1.5x |
| `security-deposit-return-ks` | Education | — | landlord duty |
| `abandoned-property-ks` | Keep | SERVES_LANDLORD |  |
| `identity-change-liability-ks` | Keep | SERVES_LANDLORD |  |
| `landlord-disclosure-ks` | Keep | REQUIRED_DISCLOSURE: K.S.A. 58-2551 |  |
| `late-fee-ks` | Keep | CONSTRAINED_TERM | SERVES_LANDLORD |  |
| `move-in-inventory-ks` | Keep | SERVES_LANDLORD | joint inventory documents condition for deductions |
| `pet-policy-ks` | Keep | SERVES_LANDLORD |  |
| `security-deposit-use-ks` | Keep | SERVES_LANDLORD | bars applying deposit to last month |
| `smoke-detectors-ks` | Keep | SERVES_LANDLORD | tenant maintenance duty |
| `tenant-duties-ks` | Keep | SERVES_LANDLORD |  |

**Propagation note, 2026-09-30 (rule 62):** `early-termination-ks`, which this state is tagged on, gained one sentence: the early-termination option and fee apply only if the lease has a fixed Term; a periodic tenancy ends on the notice that law and the lease provide, without a fee. Uniform edit by Claude Code, proposed by SC's retro (AL retro finding 4). Nothing the landlord has under law is removed.

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease had no section of that title after the 2026-09-29 scrub, so the pointer resolved to nothing here; the edit fixes it. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Retro checks (SOP 1.26), 2026-10-02

**2026-10-02. Scalpel, not a re-audit (rule 1).** The 17 [Retro] rules named in the prompt and the 7 targeted fixes, and nothing else. Settings: Opus, high effort, research mode on only for the rule 9 triggers (every item below is a statutory question the CSV cannot answer). Files: the attached `lease-clauses.csv` (2,699 rows, 17 columns — checked first, matches), `lease-clause-decision-log-KS.md`, `lease-clause-citations-KS.csv`, `lease-clause-topics.md`. **Where anything earlier in the KS chat conflicts with those files, the attached files govern.** Deleted at the start of this pass: `lease-clauses-KS-delta.csv`, `ks-log-section-gap-discovery-backfill.md`, `ks-checklist-cells.md`, `lease-clause-decision-log-KS.md`, `lease-clause-decision-log-named-topic-checklist.md`, `decision-log-clause-library-verification-kansas.md`, `decision-log-clause-library-verification-kansas-reaudit.md`, `steinoak-named-topic-checklist.md`, `steinoak_clauses_updated_2/58/59/60/61/62.csv`. (A stale 941-row, 16-column `lease-clauses.csv` from 2026-09-27 was also still in the uploads folder; it was ignored.)

**None of the 17 screens was already recorded in KS's log under another name.** All ran fresh.

### Method and its boundary (rules 11, 12, 14, 15, 19)

The Kansas Legislature's official statute search at `kslegislature.gov/b2025_26/laws/search/` **indexes section titles and a leading snippet only, not body text.** Proved both ways: `"periodic rent-paying date"` returns 0 results though it is verbatim in K.S.A. 58-2570(b), and `"ten-point"` returns 0 though 58-2570(e) uses it. **A clean negative from that search proves nothing**, so it was used only to locate sections, never to establish an absence.

Instead a full-text corpus was built in the built-in browser from ksrevisor.gov: **every section of K.S.A. chapters 12, 16, 16a, 31, 44, 50, 58, 60 and 61 — 5,906 sections, 16,345,503 characters, 0 fetch failures, control term `zqxvbnmwt` 0 hits.** The **Kansas Constitution** was loaded separately (238 sections, 1,263,166 characters, control 0 hits) because the official statute search does not cover it (rule 35c). Annotations were stripped before matching so hits are statutory text. **Boundary: chapters outside that list — notably 21 (crimes) and 65 (public health) — were not loaded.** Each absence below states which corpus it rests on.

### One line per rule

| Rule | Verdict |
|---|---|
| **40** Formatting and placement | **Checked, one real hit, already in the library.** Battery run across all nine corpus chapters, not just the lease-content sections: `underlined` **0 hits code-wide**; `separate document` 0; `separate writing` 0; `boldface`/`boldfaced` 9 hits, of which the only residential one is **K.S.A. 58-2570(e)**, ten-point boldface, already carried by `edu-notice-to-vacate-additional-terms-ks`; `conspicuous` 46 hits, residential ones being 58-2510 and 58-2564 (service by conspicuous posting — a delivery method, not lease formatting) and 50-626; `point type`, `type size`, `capital letters` all consumer-credit or cigarette-labelling only. Layout table below. **Omission sanction found:** 58-2570(e)'s is non-monetary but real — omit the statement and the tenant is not bound by the additional terms. No REQUIRED lease statement arises, because the statement belongs to a separate notice document, not to every rental agreement. New row `edu-statutory-forms-ks` records the prescribed words and the drafting way out. |
| **41** Just cause | **Checked, no issue. Already covered in §24-era work.** Kansas has no just-cause or good-cause rule; the verdict already sits in a row keyed `for-cause-eviction` (`edu-no-for-cause-eviction-ks`), satisfying 41b. Clause wording screened: `holdover`, `surrender-end-of-term-ks-ne`, `no-alterations`, `keys` and `early-termination-ks` carry no end-of-term-ends-possession problem, because in Kansas expiration *does* end possession (58-2570(b), (c)). Situational limits the row already names: retaliation (58-2572). One it does not: 58-2561's netting, under which a tenant can defeat a nonpayment possession action outright. Left as a note, not a row (one subject per row, rule 57). |
| **42** Required text inside a shared clause | **Checked, no issue.** No Kansas statute forces a sentence into a fee, deposit or other clause KS is tagged on. 58-2550 prescribes no deposit text; 58-2547 prohibits terms rather than requiring them; the only prescribed words in Article 25 are 58-2570(e)'s, which belong to a separate document. Contrast recorded so the next state does not import it: this is **unlike** New Jersey's N.J.S.A. 2A:18-61.67 and Texas's Occ. Code 2308.253(e). |
| **43** Cure promises | **Checked, one placement defect found in a shared row — proposed, not edited.** `default-by-tenant-ks-ne`'s no-cure carve-out ("except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure") sits at the end of the **non-rent limb only**, so it does not reach the rent limb — the defect rule 43 was amended to catch. See targeted fix 19: NE's proposed separate sentence fixes it and is lawful in Kansas. Rent-limb check: the clause ties cure to "written notice from Landlord", and **Kansas does require pre-suit notice for nonpayment** (58-2564(b)'s three-day pay-or-quit, plus 61-3803's three-day notice to leave), so the clause adds no contractual notice Kansas does not already demand. `application-of-payments` carries no cure promise. |
| **44** Terms the statute turns into landlord duties | **Checked, no issue.** Kansas's "as agreed" hooks are 58-2545(c) (time and place of rent), 58-2553(a)'s closing sentence (tenant's utility obligation "in accordance with the provisions of the rental agreement"), 58-2554, 58-2558 and 58-2566. None converts a generous lease term into a mandatory duty. The `notices` clause is self-protecting on its face: "nothing in this Lease designates an alternative method of delivery for any notice governed by law", which forecloses the extra-notice-method trap. |
| **45** Electronic notices | **Checked, no clause at risk; two unwaivable conditions recorded.** The Kansas UETA itself was read, not just a cross-reference. **16-1603** scope: excludes only wills, codicils, testamentary trusts and most of the UCC — **no exclusion for eviction, default or cure notices, and none for residential leases.** **16-1605(b)** applies only between parties who have each agreed to electronic dealing, determined from conduct; **(c)** a party who agrees may refuse for *other* transactions and "The right granted by this subsection may not be waived by agreement"; **(d)** otherwise the act's provisions may be varied by agreement — the reverse shape from the states rule 45 was written about. **16-1608** is the one that bites: an electronic record satisfies a writing requirement only if "capable of retention by the recipient at the time of receipt", a record the sender inhibits the recipient from printing or storing "is not enforceable against the recipient", and **"The requirements of this section may not be varied by agreement"** (two carve-outs). **16-1608(b)** preserves another law's specified posting method, transmission method and formatting — so 58-2564(b)'s service methods and 58-2570(e)'s ten-point boldface survive electronification. No KS clause relies on electronic delivery of a default or cure notice; `electronic-signatures` is about execution and `acceptable-payment-methods` about payment. |
| **46** The lease as the required notice | **Checked, already satisfied, plus one drafting gain.** Kansas's lease-as-vehicle disclosure is 58-2551, already carried as a lease clause with `lease_clause_basis` `REQUIRED_DISCLOSURE: K.S.A. 58-2551` (`landlord-disclosure-ks`). 61-3803 expressly allows the pre-suit notice to be combined with a KRLTA notice, already in `edu-eviction-procedure-ks`. No shared clause promises a separate notice the statute would let the lease carry. **Gain recorded in `edu-statutory-forms-ks`:** because 58-2570(e) bites only on terms "not contained in the rental agreement", putting move-out terms in the lease removes the boldface requirement altogether. Also see targeted fix 20, which is rule 46 in its reverse form. |
| **47** Penalties for knowingly using a prohibited term | **Checked, Kansas has one, already carried.** 58-2547 read in full: (a)(1)–(4) void waiver of Act rights, confession of judgment, **any** attorney-fee shifting in either direction, and exculpation/limitation/indemnification except a tenant's limit on the landlord's liability for fire, theft or breakage in common areas; **(b)** makes a prohibited provision unenforceable and, "If a landlord deliberately uses a rental agreement containing provisions known by such landlord to be prohibited", lets the tenant recover actual damages. Note the two elements — deliberate use *and* known to be prohibited. `edu-prohibited-lease-terms-ks` states this correctly. Second limb of rule 47: **Kansas has no creditor debt-collection statute with per-violation penalties**; the nearest reach is the KCPA's unconscionability standard at 50-627, which the 1973 Kansas Comment says covers "unconscionable debt collection practices". |
| **48** Separate-document requirements | **Checked; the tenant-chore split applies — see targeted fix 22.** `separate document` and `separate writing` return **0 hits** code-wide; `separate instrument` returns only 60-1104; `separate agreement` returns **58-2553**, which is the tenant-chore provision. No lease clause is being asked to supply a notice the statute requires to be separate. |
| **49** Collection-cost bans | **Checked; one flag on a shared row and one gain.** Kansas bans lease attorney-fee shifting outright (58-2547(a)(3)), so "costs and expenses" language is the live risk. `default-by-tenant-ks-ne` recovers "reasonable costs and expenses" — it does not name attorney's fees, but read to include them it would be unenforceable and, used deliberately, expose the landlord to 58-2547(b) damages. Shared row (KS, NE, OH, OK), so **proposed, not edited** — see "Proposed SOP changes" and the ask to Taylor. **Gain:** 60-2610(a) awards "the costs of collection including but not limited to reasonable attorney fees" on a worthless-check claim — a *statutory* award untouched by 58-2547(a)(3). Added to `edu-nsf-fee-cap-ks`: a Kansas landlord can recover fees on a bounced rent cheque while still being unable to put a fee clause in the lease. |
| **50** "The lease controls" wording | **Checked; every choice made on purpose, two found unmade.** Every "unless otherwise agreed" in the KRLTA: **58-2545** (rent time, place, apportionment, and the week-to-week/month-to-month default if no definite term), **58-2554**, **58-2558**, **58-2566**. `if the lease so provides` returns 0 hits code-wide. The two *unmade* choices are lease-conditioned landlord rights under **58-2550(a)**: the 1.5-month deposit cap "If the rental agreement provides for the tenant to use furniture owned by the landlord", and the extra pet deposit "if the rental agreement permits the tenant to keep or maintain pets". The pet condition is already met by `pet-policy-ks`; **the furniture condition was met by nothing** — `appliances-included` covers appliances and equipment, not furniture. New row `furnishings-included-ks`. The third, 58-25,137(e)'s fee, is targeted fix 20. |
| **51** Plain-language and consumer-contract statutes | **Checked; Kansas is absent on one half and live on the other.** No Kansas plain-language or consumer-contract statute reaches residential leases (nothing like Pennsylvania's or Minnesota's; `plain language` hits are 50-626, 50-657, 16-1701, 44-1408 and others, none a lease-drafting rule). Asked rule 51's two questions separately: **(i) enumerated list of unfair practices — ABSENT.** 50-626 lists deceptive representations and 50-627 lists circumstances bearing on unconscionability, and **neither enumerates blank spaces filled after signing or failure to give a copy at signing**. **(ii) general standard — LIVE.** 50-627(a) bars any unconscionable act or practice in a consumer transaction, before, during or after it, with unconscionability a question for the court and seven non-exhaustive factors in (b). Already carried by `edu-consumer-protection-act-ks`, including *Chelsea Plaza Homes v. Moore* on KRLTA precedence; new row `edu-no-lease-completeness-rule-ks` records the blank-spaces half. |
| **54** Optional clauses (general screen) | **Checked; four offered, two put to Taylor, four recorded as covered or barred.** Full candidate table below. Offered: `furnishings-included-ks`, `casualty-landlord-termination-ks`, `tenant-caused-damage-ks`, `criminal-activity-ks` (plus `maintenance-allocation-ks` under fix 22 and `dv-termination-fee-ks` under fix 20). Put to Taylor: the **58-2530 exemption waiver** and the **non-willful holdover charge**. |
| **54t** Tenant-caused damage | **Checked; a real asymmetry found.** Each abatement and exit provision was checked separately for its own tenant-fault exception, as the rule requires. **58-2559(a)(2) HAS one** (no tenant termination for a condition attributable to the tenant or to any person or pet there with the tenant's permission). **58-2562, fire and casualty, HAS NONE** — neither the immediate-vacate termination in (a)(1) nor the proportional rent reduction in (a)(2) is conditioned on fault. 58-2560 and 58-2563 turn on the landlord's own conduct; 58-2561 sets no fault condition. **Consequence:** in Kansas a tenant whose own negligence causes the fire can still terminate and still get rent reduced, and a lease term removing that would waive an Act right (void under 58-2547(a)(1), with 58-2547(b) damages on deliberate use). `tenant-caused-damage-tn` was read and **not tagged** for exactly that reason: its "Rent will not abate or be reduced" sentence is unlawful here. `tenant-caused-damage-ks` keeps only the liability limb; the finding is recorded on `edu-casualty-termination-ks`. |
| **35c** Constitution screen | **Checked; nothing reaches a residential lease, and one shared clause is cleared.** Whole constitution searched (238 sections, control 0 hits). **`landlord` returns 0 hits anywhere in the Kansas Constitution.** **No cannabis article** — Kansas has nothing like Missouri's Article XIV, and `marijuana`'s only hits are case annotations under Bill of Rights §15 and Article 11, so the shared `smoking-policy` ban is safe here. **B. of R. §4** gives an individual right to keep and bear arms "for the defense of self, family, home and state… and for any other lawful purpose", but it runs against the state and **no KS clause restricts firearms** (screened: 0 hits for firearm/weapon/gun/ammunition), so nothing to fix. **B. of R. §11** (speech and press) does not reach `common-area-use`'s sign and banner restriction, a private contract term. **B. of R. §15** (search and seizure) and **§16** (no imprisonment for debt except fraud) are state-directed. **B. of R. §17** is worth recording: it bars distinctions between Kansas citizens and other states' citizens as to property, and expressly says "The rights of aliens in reference to the purchase, enjoyment or descent of property may be regulated by law" — the constitutional authorisation behind the vetoed Sub. S.B. 172 in `edu-no-foreign-adversary-land-ban-ks`. **Art. 15 §9** homestead protects an owner-occupier's family, not a tenant, and cannot be alienated without joint spousal consent — relevant to the 58-2530 ask. **Art. 12 §5** (cities' home rule) is the constitutional root of the municipal layer this project flags under rule 3: in Kansas the local layer is constitutional, not merely statutory, which is why state-level-only coverage is structurally incomplete here. |
| **27** The seven topics | **All seven answered; all seven were missing for Kansas** (18–22 other states had a row each). Six **Confirmed absent** with a row, one **Present**: `algorithmic-rent-setting` absent (the single `algorithmic` hit is 50-7a01 defining "encrypted"); `fees-as-rent` absent (0 hits for every form; 58-2543(j)'s broad "rent" definition recorded as the counter-argument); `quiet-possession` absent, **with a naming trap recorded** — the only `quiet possession` hit is 58-2203, the statutory warranty **deed** form, and the KRLTA's only use of "quiet" is 58-2555's **tenant duty** not to disturb other tenants, i.e. the right runs the wrong way; `landlord-self-cure` absent (no URLTA §4.105 analog; the one in-range hit, 58-2531, is a farm-lease preamble); `lease-completeness` absent; `statutory-forms` **PRESENT** (58-2570(e)'s verbatim statement); `tenant-security-cameras` absent (the audio point is flagged as chapter 21, not in the corpus, not read). |
| **79** Re-read before trusting a summary | **11 named rows screened plus the rest of the citations file; 2 fixed, 9 confirmed, 7 basis upgrades.** Table below. |

### §Layout table (rule 40)

| Requirement | Citation | Where it bites | In the library |
|---|---|---|---|
| Ten-point boldface prescribed statement, verbatim | K.S.A. 58-2570(e) | A document the landlord gives the tenant which, signed, is the tenant's notice to vacate, **and** which adds terms not in the rental agreement | `edu-notice-to-vacate-additional-terms-ks`; now also `edu-statutory-forms-ks` |
| Omission sanction | K.S.A. 58-2570(e) | Statement missing → tenant's signature does not bind them to any of the additional terms | same |
| Conspicuous posting as a service method | K.S.A. 58-2564(b), 58-2510 | Service of a notice, not lease formatting | `edu-tenant-noncompliance-notice-ks`, `edu-eviction-procedure-ks` |
| Formatting survives electronification | K.S.A. 16-1608(b) | Another law's formatting requirement must still be met in an electronic record | recorded here; no clause change needed |
| Underlining, type size, capital letters, separate document | — | **None in Kansas** | n/a |

### §Rule 79 screen

| Row | Verdict |
|---|---|
| `edu-rent-control-preemption-ks` | **FIXED.** 12-16,120 read section-open for the first time. The citation was right; the qualifiers were missing, and the section's own title ends "exceptions". Added (b) the ownership-interest exception, **(c) an owner may voluntarily agree to rent limits in return for grants or incentives** — the route by which a Kansas property can lawfully end up rent-restricted despite preemption — and (d) the bar on a city requiring such an agreement as a permit or zoning condition. |
| `edu-no-alt-housing-requirement-ks` | **FIXED** (pointer, fix 18) and **basis upgraded**: 26 corpus hits for relocation/alternate-housing terms, none in Article 25. |
| `edu-nsf-fee-cap-ks` | **CONFIRMED, no error** — and this is the WY bad-check failure shape, which Kansas passes. (g) is the right subdivision for the $30 cap, quoted verbatim; the damages formula keeps its construction; the 14-day first-class-mail demand in (b) is right. **Extended** with (a)'s statutory fee award (rule 49). |
| `edu-no-for-cause-eviction-ks` | **CONFIRMED.** Consistent with 58-2570(b) read section-open. |
| `edu-no-mold-disclosure-ks` | **CONFIRMED; basis upgraded.** `mold` returns one corpus hit, 50-802, not housing. |
| `edu-no-renters-insurance-restriction-ks` | **CONFIRMED; basis upgraded.** 0 hits code-wide. |
| `edu-no-ev-charging-right-ks` | **CONFIRMED; basis upgraded.** 0 hits code-wide. |
| `edu-no-right-to-call-police-statute-ks` | **CONFIRMED; basis upgraded** from the weakest in the set to full-text-verified: 0 hits code-wide. Pointer also fixed (fix 18). |
| `edu-no-tenant-death-statute-ks` | **CONFIRMED; basis upgraded.** One hit, 58-501, which is joint tenancy versus tenancy in common — a "tenancy" naming trap, not tenant death. |
| `edu-no-immigrant-tenant-protection-ks` | **CONFIRMED; basis upgraded.** Two hits, 12-16,140 (municipalities and citizenship information) and 44-772 (employment); neither a tenant protection. |
| `edu-no-rental-application-regulation-ks` | **CONFIRMED; basis upgraded.** Twelve hits, none in Article 25: 58-4219 and 58-4224 are manufactured-home **installer** licensing and 44-1807 is elevator-contractor licensing. |

**Rows recording no basis (rule 79's count), counted from `notes` and `lease_clause_basis` in `lease-clauses.csv`, not from the citations file:** of **129 KS-active rows, 108 record no readable basis for Kansas** — but the figure needs its split, because the two groups need different repairs. **16 were created or renamed by a library-wide pass** (`appliances-included`, `holdover`, `landscaping-irrigation`, `snow-removal`, `lead-based-paint`, `assistance-animal-accommodation`, `edu-entry-standard-ks`, `tenant-duties-ks`, `edu-kaad-accommodation-duty-ks`, `tenants-property-insurance-ks-oh-ca`, `edu-rent-receipt-anti-waiver-ks`, `edu-security-deposit-return-ks`, `edu-habitability-baseline-ks`, `edu-dv-housing-protections-ks`, `edu-possession-delay-ks`, `edu-casualty-termination-ks`) — fixed by carrying the source row's basis forward, a provenance repair, not a re-verification. **The other 92 are research-pass rows, and 58 of those are shared rows carrying no `KS:` note segment at all** (`rent-payment`, `due-at-signing`, `governing-law`, `severability`, `keys`, `guest-policy` and the rest of the generic family), which is the real hole: Kansas never recorded its own basis for the shared clauses it is tagged on, so rule 79's keyword screen cannot see them and neither can the next reader. Not repaired this pass — 58 rows is a pass of its own, and it is a library-wide problem, not a Kansas one. Proposed as an SOP change below.

### §Targeted fixes

| # | Verdict |
|---|---|
| **18** Dangling pointers | **FIXED, and the prompt's premise corrected.** Both pointers are in **`bodyText`, not `notes`** — the prompt said "Notes only", and a notes-only sweep would have reported both rows clean while leaving landlord-facing text pointing at switched-off rows. `edu-no-alt-housing-requirement-ks`: "(see fire-casualty-termination-ks)" → "(see edu-casualty-termination-ks)". `edu-no-right-to-call-police-statute-ks`: "(see dv-housing-protections-ks)" → "(see edu-dv-housing-protections-ks and dv-termination-fee-ks)". **A third reference Claude Code's sweep did not name:** `casualty-termination-nv`'s notes say "Same URLTA architecture as fire-casualty-termination-ks" — a comparative note on NV's own row, so left alone per the rule that provenance and history are not pointers, but flagged for NV. Library-wide check run: after these two fixes, no active KS row's `bodyText` points at any inactive row. |
| **19** Rule 62 vetting, `default-by-tenant-ks-ne` | **LAWFUL AND ACCURATE IN KANSAS — recommend adopting.** NE's sentence ("Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one") is self-limiting, so it cannot overstate Kansas law, and Kansas does supply a no-cure case: under **58-2564(a)**, where the same or a similar breach recurs after the 14-day cure window, the landlord may terminate on 30 days' notice **without offering another chance to cure**. For the rent limb Kansas does **not** permit no-cure — 58-2564(b)'s three-day pay-or-quit always applies — but the sentence's "where applicable law permits" handles that. It also fixes the rule 43 placement defect, because it is a separate sentence reaching both limbs. No waiver concern under 58-2547(a)(1): a term that operates only where law permits waives nothing. Shared text **not edited** (rule 62). |
| **20** Scrub-switched-off required clauses | **ONE REAL FORFEITURE FOUND AND RESTORED; four correctly moved.** **`dv-housing-protections-ks` → RESTORE.** K.S.A. 58-25,137(e): "A landlord or property owner may impose a reasonable termination fee not to exceed one month's rent… **Such termination fee may only be imposed if it is contained in the terms of the rental or lease agreement.**" The 2026-09-29 scrub switched the clause off and moved its content to education, so since that date a Kansas lease built from this library has contained no such term and **the landlord has lost the one-month fee entirely** — the same shape as the Arizona move-out-inspection notice. New row `dv-termination-fee-ks`, deliberately narrow: the fee only, as the landlord's own figure with the statutory ceiling in a builder prompt, with the tenant-facing protections left in `edu-dv-housing-protections-ks`. **`security-deposit-return-ks`** — only restated a right; 58-2550(b)'s written itemisation is delivered at move-out, not lease text. But reading 58-2550(a) for this question surfaced the furniture and pet deposit uplifts (rule 50), hence `furnishings-included-ks`. **`habitability-baseline-ks`** — restated a landlord duty; 58-2553(a) requires no lease text. **`possession-delay-ks`** — restated tenant remedies; 58-2560 requires no lease text. **`fire-casualty-termination-ks`** — restated a tenant right; 58-2562 requires no lease text, but it gives the landlord nothing either, hence `casualty-landlord-termination-ks`. |
| **21** Rule 62 vetting, `returned-payments` | **LAWFUL IN KANSAS — recommend adopting.** No Kansas statute speaks to counting returned payments by term or by period: 60-2610(g) caps the service charge at $30 per dishonoured cheque and conditions nothing on a term. AZ's rule 37 point is right on the merits — a month-to-month tenancy has no Term, so "during the Term" is unbounded at one end and meaningless at the other — and "during any 12-month period" is an improvement for Kansas too. Separately noted: this row is now `CONSTRAINED_TERM` and carries "not to exceed the maximum amount permitted by applicable law", which closes the uncapped-fee flag the 2026-08-30 canvass raised. Shared text **not edited**. |
| **22** Tenant-chore split | **KANSAS HAS THE SPLIT — settled, not put to Taylor (rule 48).** 58-2553 read in full. **(c)**: for any dwelling unit "other than a single family residence", a tenant-performs agreement is valid **only if** it is in good faith, not to evade the landlord's obligations, "set forth in a separate written agreement signed by the parties and **supported by adequate consideration**", does not cover work needed to cure the (a)(1) codes duty, and does not diminish the landlord's obligation to other tenants. **(d)**: performance of that separate agreement may not be treated "as a condition to any obligation or the performance of any rental agreement". KS notes added to `landscaping-irrigation` and `snow-removal` (both bind only for a single-family residence; no text change, 29-state shared rows), and new `maintenance-allocation-ks` modeled on the AZ and ND rows with Kansas's consideration requirement and no-condition rule written in. **Kansas differs from AZ, NE, IA and ND** in having a second route at **58-2553(b)**: for a dwelling housing not more than four households with common areas, a plain written agreement — the lease will do, no separate writing, no stated consideration — can shift the (a)(4) waste and (a)(5) water-and-heat duties as well as specified repairs. (b) and (c) overlap for two-to-four-household buildings; the row follows the stricter (c). |
| **23** Rule 37, effective-date reach | **Checked, nothing to fix.** No Kansas statute in the corpus applies to leases "entered into or renewed on or after" a date: that phrasing and its variants return only 58-652, 58-816, 58-2318 and 16-1002, none a KS row's basis and none in Article 25. The two KS rows carrying a date are **`edu-eviction-record-sealing-ks`** (Substitute for H.B. 2357, effective 2026-07-01) and **`edu-squatter-removal-ks`** (L. 2026 ch. 56). Both are **date-of-event rules, not date-of-lease rules** — one runs on when the eviction judgment was entered and the expungement sought, the other on when the occupancy is challenged — so neither raises the periodic-tenancy question, and neither needs the "follow the rule for every tenancy" sentence. `edu-squatter-removal-ks` already flags that the statute-book publication date behind its effective-date clause is unconfirmed. |
| **24** Rule 39, CARES Act as a filing condition | **CONFIRMED ABSENT, with its boundary; recorded in the eviction row.** No Kansas court rule makes the CARES Act 30-day notice, or any federal notice, a condition of filing — nothing like Georgia's Uniform Magistrate Court Rule 46. kscourts.gov's own site search, 2026-10-02, across Pages, News, Orders and Rules: "eviction" returns self-help pages, the Ad Hoc Committee on Best Practices for Eviction Proceedings and its report, news and decisions, **and no rule**; "CARES Act" returns only unrelated appellate decisions. Structurally Kansas has no uniform magistrate-court rules to carry one, because limited actions are heard in the district courts under ch. 61. **Boundary: individual judicial districts' local rules were not searched**, and a local rule could add one. `edu-eviction-procedure-ks` now records the absence plus the point that the federal notice still applies on its own terms to a covered dwelling, flagged as a federal citation needing separate monitoring and as contested since the 2020 moratorium lapsed. |

### §Rule 54 candidate table

| Candidate | Citation | Verdict |
|---|---|---|
| Tenant maintenance agreement | 58-2553(b), (c), (d) | **OFFERED** — `maintenance-allocation-ks` (fix 22) |
| DV/stalking early-termination fee | 58-25,137(e) | **OFFERED** — `dv-termination-fee-ks` (fix 20); right is lost if the lease is silent |
| Furniture provided by landlord | 58-2550(a) | **OFFERED** — `furnishings-included-ks`; unlocks the 1.5-month deposit cap |
| Landlord termination after casualty | 58-2562 (silent as to the landlord) | **OFFERED** — `casualty-landlord-termination-ks`; ~20 states already carry one |
| Tenant-caused damage | 58-2562 vs 58-2559(a)(2) | **OFFERED, narrowed** — `tenant-caused-damage-ks`, liability limb only |
| Criminal-activity clause | 58-2564(a); no expedited track | **OFFERED, narrowed** — `criminal-activity-ks` on the NM pattern, no no-cure promise |
| Pet deposit uplift | 58-2550(a) | **ALREADY COVERED** — `pet-policy-ks` permits approved pets in writing, meeting the condition |
| Holdover charge, willful holdover | 58-2570(c) | **STATUTORY MEASURE EXISTS** — 1.5× periodic rent or 1.5× actual damages; `holdover` self-limits correctly |
| Holdover charge, **non-willful** holdover | 58-2570(c) is willful-only | **ASK TAYLOR** — rule 54's named gap shape; see below |
| Waiver of exemption laws for rent debts | 58-2530 | **ASK TAYLOR** — see below |
| Attorney-fee clause | 58-2547(a)(3) | **BARRED** — flat ban, either direction |
| Confession of judgment | 58-2547(a)(2) | **BARRED** |
| Exculpation / indemnification | 58-2547(a)(4) | **BARRED** except a tenant's limit on landlord liability for fire, theft or breakage in common areas; already handled conservatively by `parking-ks-oh-ca`, `storage-space-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca` |
| Shortened statutory cure period | 58-2547(a)(1) | **BARRED** — already fixed in `early-termination-ks` |

### §Two calls for Taylor (rule 76)

**1. K.S.A. 58-2530 — "A tenant may waive, in writing, the benefit of the exemption laws of this state for all debts contracted for rents."** One sentence, from G.S. 1868, never repealed, and it is exactly the statutory-waiver shape rule 54 names for TN, VA and AL. It would let a Kansas lease include a written waiver of the personal-property and wage exemptions in K.S.A. 60-2304 and 60-2310, making a rent judgment materially easier to collect. Nothing voids it: it is not a right "under this act", so 58-2547(a)(1) is not engaged, and 60-2312 concerns electing federal bankruptcy exemptions, not waivers. **Recommendation: offer it, narrowly, with an education row beside it.** The reasons to be careful are real but manageable — federal law caps wage garnishment whatever the lease says (15 U.S.C. 1673), the constitutional homestead at Art. 15 §9 cannot be alienated without joint spousal consent and in any case protects owner-occupiers rather than tenants, and a broad waiver in a consumer lease is a candidate for 50-627 unconscionability and for *Schutt v. Foster*. A clause limited to the statutory personal-property exemptions, excluding wages and homestead, carries most of the benefit and little of that risk. **Say the word and I will draft it; I have not, because an exemption waiver is a legal-strategy choice rather than a research conclusion.**

**2. A holdover charge for a non-willful holdover.** 58-2570(c) caps recovery at 1.5× periodic rent or 1.5× actual damages **only "if the tenant's holdover is willful and not in good faith"**. For a good-faith holdover Kansas sets no measure at all — which is precisely the gap rule 54 describes as "the cases a conditional measure leaves out". The shared `holdover` clause claims "holdover damages in the maximum amount permitted by applicable law for each day", and `edu-holdover-ks` says the self-limiting wording "already caps this correctly for Kansas". **That is only half right:** it caps the willful case and leaves the non-willful case with no figure, so the clause currently recovers an indeterminate amount in the commoner scenario. A lease may set its own figure there (58-2545(a) allows terms not prohibited, and silence is not prohibition), subject to 58-2544 unconscionability and *Schutt v. Foster* on large or compounding charges. **Recommendation: a KS-specific daily holdover charge for the non-willful case, expressly excluding a holdover following a termination for nonpayment** — rule 53's warning that a daily charge after a nonpayment termination works as a second, repeating late charge. I have not drafted it or touched `edu-holdover-ks`, because the figure is yours to set.

### §Integrity

Gate check before any work: attached `lease-clauses.csv` **2,699 rows, 17 columns, CRLF** — matches the prompt. KS 129 active, 5 inactive, 134 tagged; all 129 carry a `verification_status` (rule 64, no blanks).

`lease-clauses-KS-retro-delta.csv`: **21 rows — 13 new, 8 changed**, all 17 columns, header byte-identical to the master, **CRLF line endings, 0 bare line feeds outside quoted fields**. Programmatic checks: no duplicate ids; no new id collides with any of the 2,699 existing ids; every changed id exists and is active; every row carries a non-blank `verification_status`, a valid `rule_type`, `content_type` and `topic_key`; every new `LEASE_CLAUSE` carries a `lease_clause_basis` (rule 55) and every new education row leaves it blank, matching the library convention (633 of 633 active lease clauses carry one, 0 of 1,944 education rows do); every new row is `states = KS` with empty `supersedes`; **every row id named in new or changed `bodyText` resolves to a row active after merge**, and the only references to inactive rows are four deliberate history mentions in `notes` (rule 78 leaves those). No shared row's text was changed — `landscaping-irrigation` and `snow-removal` take a `KS:` note and a `last_checked` reset only, so no rule 9 / §5a.1 propagation is owed by this pass.

Six new `topic_key`s reuse the library's existing key for the subject (rule 58): `algorithmic-rent-setting`, `fees-as-rent`, `quiet-possession`, `landlord-self-cure`, `lease-completeness`, `statutory-forms`, `tenant-security-cameras`, `dv-lease-termination`, `tenant-repair-agreement`, `casualty-termination`, `tenant-caused-damage`, `criminal-activity`. One new key, `furnishings-included`, is genuinely new — no state carried a furnishings topic.

On merge: **2,699 → 2,712 rows; KS 129 → 142 active** (58 → 64 lease clauses, 71 → 78 education). No other state's count changes.

### Proposed SOP changes

1. **Rule 19 / rule 11, add:** *Before relying on a state's official statute search for an absence, prove what it indexes by searching a phrase you have already read verbatim in a section's body.* Kansas's official search at kslegislature.gov indexes section titles and a leading snippet only: `"periodic rent-paying date"` returns 0 results although it is verbatim in K.S.A. 58-2570(b), and `"ten-point"` returns 0 although 58-2570(e) uses it. A battery run against that search would have returned clean negatives for the whole rule 40 formatting set and missed Kansas's one real formatting rule — which the library already held, so the error would have shown up as a contradiction rather than a silent gap only by luck. The control-term test (`zqxvbnmwt` → 0) does **not** catch this, because a title-only index passes it.
2. **Rule 78, add:** *A switched-off row's dangling pointers live in `bodyText` as often as in `notes`, so sweep both.* Both pointers in targeted fix 18 were in `bodyText`; the prompt scoped the fix to notes, and a notes-only sweep would have reported both rows clean.
3. **Rule 79, add:** *Count the no-basis rows separately for shared rows carrying no state note segment.* Kansas's 108-of-129 figure is dominated by 58 shared rows on which Kansas never wrote a `KS:` segment at all — invisible to a keyword screen and to the next reader, and a different repair from both the research-pass and library-wide-pass cases the rule already distinguishes.
4. **Rule 54, add to the holdover bullet:** *Where the statutory holdover measure is conditioned on willfulness or bad faith, say what applies to the ordinary good-faith holdover, and check whether the shared clause's self-limiting wording leaves that case with no figure.* Kansas is the example; `edu-holdover-ks` asserted the self-limiting wording "caps this correctly" when it caps only the willful case.
5. **Rule 50, add:** *Read the state's security-deposit section for lease-conditioned uplifts, not only for its caps.* K.S.A. 58-2550(a)'s furnished-unit and pet uplifts each depend on what the rental agreement says; the pet condition was met by an existing clause and the furniture condition by nothing, and a three-bucket pass that treats the section as "a ceiling, not something the lease needs to recite" will miss both.

## Retro sync (Claude Code, 2026-10-02)

- **Merged** with `merge-delta.py --base 61410f3` (the attached CSV is byte-identical to it) after one fix in a copy: the delta's lines ended in a doubled carriage return, so every other row read as blank; normalised, 21 rows of 17 fields with no carriage return inside any field. Then 8 rows updated and 13 new, no refusals. KS active 129 → 142 (64 lease clauses), no same-topic pairs; every other state's set unchanged.
- **Guards:** `check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py` and `checkConfigIds.js` all pass.
- **Statute spot-check, 6 of 6, against ksrevisor.gov (read by Claude Code at sync):** K.S.A. 58-2547(a)-(b) (no attorney-fee term in either direction; deliberate use of a known prohibited term); 58-2553(c)-(d) (the chore split, behind `maintenance-allocation-ks`); 58-2562 (fire and casualty, with no tenant-fault exception, behind `tenant-caused-damage-ks`'s narrowing); 58-2530 (the exemption waiver); 58-2550(a) (the furniture and pet uplifts, behind `furnishings-included-ks`); 58-25,137(e) (the termination fee "may only be imposed if it is contained in the terms of the rental or lease agreement", behind `dv-termination-fee-ks`).
- **Citations file:** 13 rows added (7 confirmed-absence rows), 8 changed rows dated.
- **The two calls put to Taylor, decided at sync (rule 76):** both are rule 54 options the SOP already settles. The K.S.A. 58-2530 exemption waiver follows Taylor's AL decision and `exemption-waiver-ga`: offered, narrow, as the retro recommended. A good-faith holdover charge fills the gap rule 54 names: offered, approximating actual loss, excluding nonpayment terminations, with `edu-holdover-ks` corrected. Both queued for Kansas's next circle-back in `retro-extras.csv`.
- **Rule 62 answers recorded:** KS supports AZ's `returned-payments` wording and NE's `default-by-tenant-ks-ne` sentence. Its rule 49 flag on that row's "reasonable costs and expenses" joins OK's, MI's and NC's.
- **Library-wide (backlog):** 58 shared rows Kansas is tagged on carry no `KS:` note segment, so their Kansas basis is invisible; the same is likely true of other early states.
- **SOP 1.27:** all five proposals adopted (rules 11, 50, 54, 78, 79). KS's conformance column is complete except three examples.

## Circle-back checks (SOP 1.41), 2026-10-03

**2026-10-03. Scalpel, not a re-audit (rule 1).** The prompt names **0 rules** and **2 targeted fixes**, and nothing else was reopened. Settings: Opus, high effort, research mode on only for the rule 9 triggers — both fixes turn on statutory text the CSV cannot supply. Files: the attached `lease-clauses.csv` (**2,876 rows, 17 columns, CRLF — checked first, matches**), `lease-clause-decision-log-KS.md`, `lease-clause-citations-KS.csv`, `lease-clause-topics.md`. **Where anything earlier in the KS chat conflicts with those files, the attached files govern.** Deleted at the start of this pass: `lease-clause-decision-log-KS-retro.md` and `lease-clauses-KS-retro-delta.csv`, both from yesterday's SOP 1.26 retro and both already synced.

**Both fixes were already recorded in KS's log as open, and both are now closed.** The 2026-10-02 retro put them to Taylor under rule 76 (log §Two calls for Taylor, and the rule 54 candidate table at rows "Holdover charge, non-willful holdover" and "Waiver of exemption laws for rent debts"); the 2026-10-02 sync section records Claude Code's decision on both and queues them for this circle-back. Nothing else in the log already covers either screen under another name.

### One line per rule

**No [Retro] rules were in scope for this pass.** SOP 1.41's change log records that Kansas's own column is complete except three examples, and the two items below are the follow-through from KS's 1.26 retro rather than new rules. The one rule doing real work here is **rule 54 as amended 1.27** — the amendment this chat proposed after finding Kansas's willful-only holdover measure — now applied to the state that produced it, together with **rule 53 as amended**, whose tender-defence sentence turns out to bite in Kansas for a second, independent reason (below).

### §Targeted fixes

| # | Verdict |
|---|---|
| **1** Exemption waiver | **FIXED — clause and education row added.** New `exemption-waiver-ks` (CONDITIONAL, optional, off by default, `SERVES_LANDLORD`) and `edu-exemption-waiver-ks`, both on `topic_key` `homestead-waiver` with the AL and GA rows. Scope is as recommended and as the sync directed: the statutory personal-property exemptions only, wages and homestead excluded. |
| **2** Good-faith holdover charge | **FIXED — clause added, education row corrected.** New `holdover-rate-ks` (CONDITIONAL, optional, off by default, `CONSTRAINED_TERM`, `topic_key` `holdover-rate`) set to approximate actual loss, with nonpayment terminations excluded. `edu-holdover-ks` corrected — **three errors, not the one the prompt named.** |

#### Fix 1 — what was read and what the clause does

**Controlling text, quoted in full because it is one sentence.** K.S.A. 58-2530: *"Tenant may waive exemptions. A tenant may waive, in writing, the benefit of the exemption laws of this state for all debts contracted for rents."* History: G.S. 1868, ch. 55, § 30; October 31; R.S. 1923, 67-530 — never amended, never repealed. The lease is the writing the section requires.

**What there is to waive.** K.S.A. 60-2304 ("Personal property; articles exempt") exempts, in its own words: (a) the furnishings, equipment and supplies, including food, fuel and clothing, in present possession and reasonably necessary at the principal residence for one year; (b) ornaments of the person including jewelry, to $1,000; (c) one means of conveyance regularly used for transportation or for getting to work, to $20,000, **with no value limit where the vehicle is designed or equipped for a person with a disability**; (d) a burial plot or crypt; (e) the books, documents, furniture, instruments, tools, implements, equipment, breeding stock, seed grain and other tangible means of production of a profession, trade, business or occupation, aggregate $7,500; (f) property exempt under K.S.A. 36-202, 48-245 or 84-2-326. No inflation adjustment — newest amendment L. 1988, ch. 217, § 2 — unlike Alabama's three-yearly CPI adjustment under Ala. Code § 6-10-12.

**The clause reaches (b), (c) and (e) only.** The carve-outs, and this is the part worth recording: **they are a drafting judgment, not a statutory carve-out.** Alabama's § 6-10-120/121 and Georgia's § 44-13-40 each except specified property by statute, so `exemption-waiver-al` and `exemption-waiver-ga` are simply tracking their statutes. **Kansas's 58-2530 excepts nothing on its face**, so every limit in the Kansas clause is mine under rule 76. It leaves out:

- **60-2304(a), the household basics** — food, fuel, clothing, furnishings reasonably necessary at the residence. The `homestead-waiver` family holds this line in every state, and it is the single term most likely to be refused and to take the rest of the clause down with it under K.S.A. 58-2544.
- **60-2304(d)** a burial plot, and **the disability-equipped vehicle**, which 60-2304(c) exempts without any value limit.
- **Earnings.** K.S.A. 60-2310(b) caps wage garnishment at the lesser of 25% of disposable earnings or the amount by which they exceed 30 times the federal minimum hourly wage, and 15 U.S.C. § 1673 caps it federally whatever the lease says.
- **Any homestead.** K.S.A. 60-2301 and Kan. Const. art. 15, § 9 both provide a homestead *"shall not be alienated without the joint consent of husband and wife, when that relation exists"* — a tenant's own signature cannot waive it. **Worth flagging for the mobile-home product question:** 60-2301 covers *"a manufactured home or mobile home, occupied as a residence by the owner"*, so a tenant who owns the home on a rented lot may hold a Kansas homestead. Mobile-home parks remain a deprioritised product decision, but the clause must not purport to waive this.
- **The benefit exemptions in K.S.A. 60-2313** — pensions, public assistance (39-717), workers compensation (44-514), unemployment (44-718), crime-victims awards (74-7313), insurance and fraternal benefits (40-414, 40-711). Each is exempt under its own statute; a lease waiver would be overreach.

**Not barred.** Exemption laws sit in K.S.A. ch. 60 art. 23, not in the KRLTA, so **K.S.A. 58-2547(a)(1)** — which voids a term by which a party waives or forgoes "rights or remedies under this act" — is not engaged, and the clause's closing sentence says so expressly. A **section-by-section scan of all of chapter 60 article 23 returned zero occurrences of "waiv" anywhere in the article**, so nothing there voids an exemption waiver; K.S.A. 60-2312 concerns electing federal bankruptcy exemptions, not waivers. 58-2530 sits in the pre-1975 block this project deprioritises as farm and agricultural, but its own text is general, it is a collection provision with no KRLTA counterpart to conflict with, and neither K.S.A. 58-2541 (arrangements not governed by the act) nor 58-2573 (inapplicability) touches it.

**Unread, and the real risk.** No Kansas case was read on whether 58-2530 reaches a modern residential lease or on how courts treat such waivers. The live backstops are **K.S.A. 58-2544** (a court may refuse to enforce an unconscionable provision, enforce the remainder without it, or limit it) and the KCPA's unconscionability standard at **K.S.A. 50-627**, with *Schutt v. Foster* the Kansas authority this library already records against harsh lease charges. Both are stated in the education row, in the tenant-facing register.

#### Fix 2 — what was read, and the second reason nonpayment is excluded

**The gap.** K.S.A. 58-2570(c), read section-open and quoted: *"If the tenant remains in possession without the landlord's consent after expiration of the term of the rental agreement or its termination, the landlord may bring an action for possession. In addition, if the tenant's holdover is willful and not in good faith the landlord may recover an amount not more than 1½ months' periodic rent or not more than 1½ times the actual damages sustained by the landlord, whichever is greater."* Conditioned on willfulness and bad faith, so the good-faith case has no figure.

**Trigger confirmed (rule 53).** The statute runs from *"expiration of the term of the rental agreement OR ITS TERMINATION"*, so a charge starting when the lease ends on either footing is a trigger Kansas allows — the same position as North Carolina, the opposite of Virginia's notice-date trigger. It also means the new clause reaches **further than the shared `holdover` row**, whose own trigger is only "the end of the Term".

**Nonpayment excluded for two reasons, not one.** The ordinary one is rule 53's: a daily charge running from a nonpayment termination works as a second, repeating late charge alongside `late-fee-ks`. The second is specific to Kansas and is exactly what rule 53's amended tender-defence sentence asks for. **K.S.A. 58-2561(a)**, read section-open: in a possession action for nonpayment the court *"may order the tenant to pay into court all or part of the rent accrued and thereafter accruing"*, and *"If no rent remains due after application of this section, judgment may be entered for the tenant in the action for possession."* That is a route by which a Kansas tenant keeps possession by paying — so a daily charge from the termination date would raise the statutory price of staying and would be charged for the same days as the rent tendered.

**Not a multiple, and deliberately not liquidated damages.** Unlike `holdover-rate-ga` and `holdover-rate-nc`, this row carries **no** "difficult to estimate in advance / reasonable estimate / not a penalty" recital, because Kansas is not a state in which to stipulate a premium: K.S.A. 58-2544 lets a court refuse to enforce an unconscionable provision or limit it, and *Schutt v. Foster* is already in this library against large or compounding lease charges. The charge is set at the daily equivalent of Rent plus documented further loss — the same shape `edu-holdover-rate-nm` records for New Mexico on the same reasoning.

**Why there is no conflict with the statutory ceiling in either case.** Because the charge approximates actual loss, it cannot exceed 58-2570(c)'s willful-holdover ceiling, which is the **greater** of 1.5 months' periodic rent or **1.5 times the actual damages sustained** — and actual loss is always at or below 1.5 times itself. So the clause's self-limiting sentence is belt-and-braces rather than wording that hides a conflict, which is rule 53's specific caution about self-limiting text. 58-2547(a)(1) is not engaged either: 58-2570(c) is a ceiling on what a landlord may recover, not a tenant entitlement the clause removes.

**`edu-holdover-ks` — three errors fixed, not one.**
1. **The substantive one the prompt named.** The row said the shared clause's self-limiting wording "already caps this correctly for Kansas, so no separate KS override is needed." It caps only the **willful** case, leaving the commoner good-faith holdover with no figure anywhere in the library.
2. **A dead quotation.** The row quoted the shared clause as reading *"or the maximum amount allowed under applicable law, if less"* — wording the shared-clause pass of **2026-09-03** removed along with the hardcoded double-rent figure. The clause has since read "holdover damages in the maximum amount permitted by applicable law for each day", so the row had been quoting text that no longer existed for a month. Not something the prompt named, and not something a citation screen catches, because the citation was right and the quotation was of a sibling row rather than a statute.
3. **A stale implementation note.** Its notes still said *"Implementation step still needed: extend holdover states field to include KS"* — the shared `holdover` row is tagged `CO;WY;KS;NE;MN;FL` and has been for some time.

**Added while correcting:** the trigger point (expiration or earlier termination, not a notice date) and the **K.S.A. 58-2545(d) consent trap** — 58-2570(c)'s own last sentence routes a consented holdover to 58-2545(d), which makes the tenancy month-to-month, or week-to-week for a roomer paying weekly rent. No KS row carried that. Title changed to say what the row now says; `rule_type` stays RECOMMENDED and it stays education, since it restates a landlord recovery limit.

### §Integrity

Gate check before any work: attached `lease-clauses.csv` **2,876 rows, 17 columns, CRLF** — matches the prompt. KS 142 active (64 lease clauses, 78 education).

`lease-clauses-KS-retro-delta.csv`: **4 rows — 3 new, 1 changed**, all 17 columns, **header byte-identical to the master, CRLF line endings, 0 bare line feeds outside quoted fields.** Programmatic checks: no duplicate ids; neither new id collides with any of the 2,876 existing ids; the changed id exists and is active; every row carries a non-blank `verification_status` and a valid `rule_type`, `content_type` and `topic_key`; both new lease clauses carry a `lease_clause_basis` and the new education row leaves it blank, matching the library convention (rule 55); every new row is `states = KS` with empty `supersedes`; `choice_group` and `is_default` left blank on all four, since an optional clause is carried by `CONDITIONAL` plus the `[Optional.]` prefix rather than by a choice group; **every row id named in new or changed `bodyText` and `notes` resolves to a row active after merge** (no dangling pointers, SOP rule 78); and the one builder variable used, `{{holdover_daily_rate}}`, is the existing one from `holdover-rate-ga` and `holdover-rate-nc` rather than a new one (rule 60).

**No shared row's text was changed and no shared row was re-tagged**, so no rule 9 / §5a.1 propagation is owed by this pass. Both new `topic_key`s are existing family keys (rule 58): `homestead-waiver` and `holdover-rate`.

On merge: **2,876 → 2,879 rows; KS 142 → 145 active** (64 → 66 lease clauses, 78 → 79 education). No other state's count changes. The `homestead-waiver` family goes 6 → 8 rows and `holdover-rate` 13 → 14.

### Proposed SOP changes

1. **Rule 78, add:** *A row that quotes a sibling row's wording goes stale when that row is edited, so a pass that rewrites a shared clause re-reads every row that quotes it, not only the rows that cite it.* `edu-holdover-ks` quoted the shared `holdover` clause's "or the maximum amount allowed under applicable law, if less" for a month after the 2026-09-03 shared-clause pass removed it. Rule 78 already says to reset `last_checked` on every row that describes or quotes a rewritten shared clause; what this adds is that resetting the date is not enough — the quotation itself has to be re-read, because a citation screen cannot see it (the citation was correct) and the row still parsed as true.
2. **Rule 54, add to the exemption-waiver bullet:** *Where the state's waiver statute excepts nothing on its face, the carve-outs are the drafter's and must be labelled as such in the row.* Alabama and Georgia both have statutory exceptions, so their clauses track the statute; Kansas's K.S.A. 58-2530 is one sentence with no exceptions, so every limit in `exemption-waiver-ks` is a judgment under rule 76 rather than a statutory requirement. A later reader comparing the three rows would otherwise assume Kansas's carve-outs are statutory too — the same shape as the naming traps this project keeps recording.

## Circle-back sync (Claude Code, 2026-10-03)

- **Merged** with `merge-delta.py --base 2b10851`, from a copy whose doubled line endings (`\r\r\n`, as at the KS retro) were normalised; the content was unchanged. 3 new rows (`exemption-waiver-ks`, `edu-exemption-waiver-ks`, `holdover-rate-ks`) and 1 updated (`edu-holdover-ks`); nothing refused. KS active 142 → 145; no same-topic pairs. No other row quotes the removed "if less" wording. The section-pointer guard caught `holdover-rate-ks` naming "the Holdover section"; Kansas uses the shared `holdover` clause titled "Holdover Tenancy", so the pointer was corrected at sync.
- **Citations file:** rows added for the three new rows; `edu-holdover-ks` gains K.S.A. 58-2545(d) and is re-dated.
- **Guards:** all pass. **Statute spot-check, 3 of 3, on ksrevisor.gov:** K.S.A. 58-2530 (one sentence, no exceptions; history G.S. 1868), 58-2570(c), 58-2561(a). The 58-2530 page's case annotations support the clause's limits: a waiver under the section is not a waiver of homestead (*West v. Grove*, 139 Kan. 361), and the legislature could permit waiver of personal-property exemptions.
- **Note on the nonpayment exclusion:** 58-2561(a) works through the tenant's counterclaim and payment into court, with judgment for the tenant when no rent remains due, rather than a plain right to stay by paying. The exclusion stands as a conservative choice under rule 53 either way.
- **SOP 1.42:** both proposals adopted (rule 78 quotation re-read; rule 54 labelling of drafter-made carve-outs). KS's holdover and statutory-waiver cells set to ✓.
