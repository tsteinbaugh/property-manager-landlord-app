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

## Propagated shared-row edit, 2026-10-03 (at the OK circle-back sync)

- `default-by-tenant-ks-ne` (KS, NE, OH, OK): NE's sentence "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." was added after the two default limbs, once every tagged state had vetted it (KS: KS retro (SOP 1.27); OK at its 2026-10-03 circle-back). Uniform; no KS override. KS's note segment on the row records it.

## Propagated shared-row edit, 2026-10-04 (at the PA circle-back sync)

- `returned-payments` (CO, WY, KS, NE, MN, ND, SD, OH, AZ, GA, PA): AZ's proposal merged once every tagged state had vetted it, PA last. "If more than two of Tenant's payments during the Term are returned" now reads "during any 12-month period", so the count works for a month-to-month tenancy, which has no Term. Uniform; no KS override. KS's note segment on the row records it.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for KS. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any KS row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach KS's law; to be confirmed at KS's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.


---

## Topic gaps pass (end-of-run consistency pass, Claude Desktop, 2026-10-25)

SOP 1.84. One visit, 2026-10-24. Answers the 234 topics Kansas had no row for, plus the six named Kansas items.

Deliverables: `lease-clauses-KS-gaps-delta.csv` (new rows plus existing rows tagged with KS, all 17 columns, CRLF) and this log.

## Where to start

This log is long because §2 carries a line for every one of the 234 topics and §3 a battery for every absence, which is what the pass asks for. The parts worth reading first are short:

1. **§1's "Currency" heading** — the Revisor's codified K.S.A. text does not yet include the 2026 session, and seven 2026 acts bear on this library. That single fact changed more answers than anything else in the pass, and it is the reason several topics that look absent are not.
2. **§6 — findings on existing rows.** Nothing there was edited; it is the list of things that need a decision at sync, and it is where the pass found existing Kansas and shared rows that are wrong.
3. **§4's "Rulings I made" and the six Kansas items**, then the open points — the questions that ask you to choose something are separated from the ones where Kansas law is simply silent.
4. **§5's verdict**, if you want only the bottom line on whether the set is fit to deliver.

The errors found in my own work are recorded where they belong rather than collected: five index defects and the false claim that the Kansas Administrative Regulations could not be reached are in §1; the wrong `K.A.R. 82-1-220` citation I put in the research brief is in §1 and proposed as SOP change 12.

---

### §1 — Sources, channel and currency

## Sources

**Primary corpus** (`corpus-KS-20261024.tar.xz`, SHA-256 verified against the supplied
`.sha256`: `53256fc661bd2de5f4f8bd6820c1c5432c02b4548f8a876c8c63041838e7c162`; self-verify
clean — 13,204 files match, 5 PDFs listed but not shipped, 0 problems). Parsed into one
searchable index that now holds **6,787 records**:

* **Ten complete K.S.A. chapters in full operative text**, 6,346 sections:
  12 (cities and municipalities) 2,043 · 16 (contracts and promises) 249 · 31 (fire
  protection) 112 · 36 (hotels and restaurants) 74 · 44 (labor and industries, incl. the
  Kansas Act Against Discrimination) 655 · 48 (militia, defense and veterans) 517 ·
  50 (unfair trade and consumer protection) 369 · 58 (personal and real property, incl. the
  KRLTA) 1,187 · 60 (procedure, civil) 738 · 61 (procedure, civil, for limited actions,
  incl. the eviction article) 402.
* **The Kansas Constitution**, 241 records.
* **The complete 2025 and 2026 Session Laws of Kansas**, both volumes of each year —
  11,714,459 characters of enacted law.
* 10 chapter-index records.

**Completeness proof for the ten chapters** (SOP rules 19 and 24). All 91 chapter indexes
were fetched from the Revisor's own site and the section counts extracted from them match the
corpus **exactly** for every one of the ten chapters, chapter by chapter, with the figures
above. Chapters 62 and 63 were confirmed wholly repealed (the 1969 criminal code and the 1970
code of criminal procedure) and so have no live sections to miss.

**Index integrity — two defects found and fixed mid-pass, and how the earlier work was
cleared.** The index built over this corpus was not sound when the first slices ran, and
both defects could have produced confidently-wrong confirmed-absence rows.

1. **Truncated bodies.** The page-boundary pattern cut each section at its footer, and the
   footer pattern included `LEGISLATIVE COORDINATING COUNCIL`, matched case-insensitively.
   That phrase appears in the **title of K.S.A. 48-925**, so that section was indexed with 96
   characters of body instead of 8,346. In all, **169 sections were materially truncated**
   (stored body under half the true length), losing about **447,000 characters** of operative
   text — chapters 12 (49 sections), 60 (44), 48 (19), 58 (16), 44 (15), 50 (14), 16 (8),
   61 (4). Total statute body text went from 7.31M to 7.76M characters once repaired.
2. **A repair that was worse than the defect.** The first fix re-derived each section number
   from its filename. The Revisor's `CCC_AAA_NNNN` scheme defeats the obvious reconstruction
   whenever the section's number within its article has a single significant digit:
   `061_040_0001` reconstructs as "61-401" rather than 61-4001, `058_020_0005` as "58-205"
   rather than 58-2005. Both of those are themselves real Kansas sections, so the repair wrote
   **229 sections' text into the wrong records**. It was caught by an integrity check, reverted,
   and redone keying off each record's own stored path. The index's own section numbers, parsed
   from the page text, had been correct throughout.

3. **Section numbers that lost their chapter prefix.** Kansas's Uniform Principal and Income
   Act uses a three-part number — K.S.A. 58-9a-101 and following — and all 48 of its sections
   were indexed as "9a-101", "9a-404" and so on, with the chapter dropped. Their text was
   present and searchable throughout, so nothing was missed in a battery, but a citation
   lookup for 58-9a-404 reported NOT IN CORPUS. Found when the mechanical citation check
   flagged a row citing a chapter-58 section that appeared not to exist; the row's citation was
   correct and the index was wrong. All 48 were repaired by restoring the chapter prefix from
   each record's own path.

4. **Lettered articles keyed without their leading zero, and one collision.** Kansas numbers some
   articles with a trailing letter, and the Revisor pads the section part to four digits
   (`058_030a_0008`). The parser reduced "0008" to "8", producing `58-30a8` where the statute
   itself prints **58-30a08** — across **145 records** in chapters 12, 16, 44, 58 and 60. Mostly
   that only broke citation lookups. In one case it did real damage: `058_030a_0001` was keyed
   **58-3077**, colliding with the genuine K.S.A. 58-3077 ("Commercial real estate; sharing
   commissions with unlicensed persons"), so a 172-character stub shadowed a 3,385-character
   section under one key. Repaired by taking each number from **the section's own text**, which
   prints it on the first line; the collision is resolved and the index now holds no duplicate key
   at all.

   The first attempt at this repair was itself worse than the defect — the same mistake as defect
   2, made again. Its path-derived fallback rewrote all 48 Uniform Principal and Income Act
   sections from the correct three-part `58-9a-404` to `58-9a04`. The mechanical citation check
   caught it within one run, the index was restored from backup, and the script now refuses to
   touch any key already in Kansas's three-part form.

5. **K.S.A. article 60-31a keyed without its leading zero.** The Protection from Stalking, Sexual
   Assault or Human Trafficking Act runs K.S.A. 60-31a01 to 60-31a09 and was indexed as
   `60-31a1`…`60-31a9`. The text was present and searchable throughout — every battery over the
   article worked, and the stalking definition at **60-31a02(d)** that K.S.A. 75-452 incorporates
   was readable all along — but a citation lookup on the statute's own spelling reported NOT IN
   CORPUS, which is why some rows recorded 60-31a01 as an out-of-corpus section they never needed
   to treat as one. Found by the correction pass, not by the gate.

**The check that now gates the index**, and that caught the second and third defects: for
every record, the section number the text names must equal the section number the record is
filed under. The corrupt build produced 229 violations; the corrected build produces **0**,
including across the three-part forms, and the index now carries **no duplicate section key**.

**Five index defects in one pass is the finding, not a footnote.** Every one was in my own build,
not in the Revisor's text. Two were caught by the integrity check, one by the mechanical citation
check, one by a researcher's citation lookup, and one by the correction pass reading a row's
disclaimer. Two of my repairs were themselves defective and had to be reverted. The common thread
is that **a section number must be taken from the section's own text, never reconstructed from a
filename** — Kansas's numbering (`061_040_0001` is 61-4001, not 61-401; `058_030a_0001` is
58-30a01, not 58-3077) defeats the obvious reconstruction, and every one of these defects came
from trying it anyway. That is proposed SOP change 1.

**How the already-completed work was cleared rather than redone.** Every answer file records
its battery command, patterns, control and hit counts, so the completed topics could be
re-verified mechanically: **280 patterns across 43 topics** were evaluated against both the
pre-repair and the repaired index, reporting any pattern that went from 0 hits to hitting.
**None did, and every control remained clean** — so no absence finding recorded before the
repair rested on the missing text. That verification, not an assumption, is why the earlier
slices stand.

**Whole-K.S.A. title index, built for this pass.** Because the corpus covers ten chapters and
Kansas law relevant to tenancies is scattered well beyond them, every live section title in
the Kansas Statutes Annotated was indexed from the Revisor's 91 chapter index pages:
**47,549 entries across 89 live chapters, reduced to 30,878 live titles** after dropping
16,671 marked Repealed, Transferred, Reserved or Renumbered. Every one of the 234 topics was
run against it, and each topic's result — restricted to hits **outside** the ten full-text
chapters — is recorded in its research packet and in `work/titlehits/chunk-{0..4}.json`.

**186 out-of-corpus sections read verbatim and added to the index** (the figure grew through the pass as researchers hit walls; the list below is the first batch of 62), each opened in full, not
summarised:

```
8-1101  8-1102  8-1103  8-1104  8-1105   17-4759
19-3701 19-3702 19-3703 19-3707
21-5808 21-6109 21-6110 21-6111 21-6614
22-2410 22-4901 22-4902 22-4906 22-4913
26-507  26-517
33-101  33-105  33-106  33-107  33-108
39-1101 39-1102 39-1103 39-1104 39-1105 39-1106 39-1107
39-1108 39-1109 39-1110 39-1111 39-1112 39-1113
59-3511 65-171g 65-516  65-530  65-539  65-540
65-1,202 65-1,203 65-1,204 65-1,206 65-1,212
65-5301 65-5302 65-5303 65-5304 65-5305 65-5307 65-5308 65-5316
65-34,177  76-188  79-2401a
```

**Twelve session-law acts extracted in full** and read: L. 2025, ch. 13, 66, 67; L. 2026,
ch. 56, 74, 76, 96, 99, 120, 132, 152, 155.

**Library and governing documents.** `lease-clauses.csv` — 31,233,794 bytes, SHA-256
`6c1c393ff19d0b9ec2287470777d5d89a3ce69a9eefaba84d40d8b2270046dd6`, 10,756 rows / 10,646
active / 146 KS-active / 17 columns, all verified against the stated figures. SOP 1.84,
`lease-clause-topics.md`, and `missing-topics-KS.md` (exactly 234 topics). Kansas's 130
existing topic_keys plus these 234 partition the library's 364 topics exactly, with no overlap
and no unknown key.

**Chapters cited by existing Kansas rows but outside the corpus**, now covered at title level
and, where a topic turned on them, by verbatim fetch: 8, 17, 19, 21, 22, 26, 33, 39, 40, 59,
65, 66, 74, 76, 79, 82a, 84. Chapters 21 (crimes) and 65 (public health) had never been read
for Kansas in any prior pass; both were reached in this one.

## Channel

**ksrevisor.gov, through the built-in browser.** The container's egress allowlist refuses the
Revisor's host from the shell — `curl` returns `(56) CONNECT tunnel failed, response 403` —
so every live read went through the browser, where site access had been granted in an earlier
session. Section URLs were derived from the Revisor's own path scheme
(`/statutes/chapters/ch<NN>/<CCC>_<AAA>_<SSSS>.html`, chapter directory zero-padded to two
digits), validated against hrefs taken from the chapter index pages, and each page was reduced
to operative text with case annotations, AG opinions and law-review references split off.

**WebFetch was treated as a lead only, never as a section read.** It reached the Revisor's
pages and returned real content including history lines, but declined to reproduce full
verbatim text, citing quotation limits. Under SOP rule 12 that makes it incapable of
supporting VERIFIED, so it was used only to locate material that was then read in the browser.

**Case annotations are leads only** (SOP rule 1). They are indexed and searchable, and several
topics' notes record what they point at, but no row rests on a case.

**Local ordinances are flagged, not resolved** (SOP rule 3). Several topics turn on what a
Kansas city or county does; each says so and names the state-law preemption position instead.

**The Kansas Administrative Regulations — reached late, after I had wrongly concluded they could
not be.** For most of this pass the K.A.R. was treated as unreachable and about sixty rows were
marked `NEEDS_REVIEW` on that basis. That conclusion was wrong, and it was mine. The K.A.R. is
published by the Secretary of State at `https://rules.ks.gov/`, an Esper policy library with a
public JSON API; a cross-origin `fetch` from a page on another host fails, which is the only
method I had tried. **Navigating** a browser tab to the API endpoint and reading the page as text
works, needs no scripting, and was available the whole time. Three navigations yield a
regulation's verbatim text, each ending with the publisher's own
`***** Authenticated Kansas Administrative Regulation *****` marker.

**What was then read, in full, on 2026-10-24:**

* **K.A.R. 22-1-1 through 22-1-7**, the State Fire Marshal's entire Kansas Fire Prevention Code
  article (all seven effective). **This answered the largest open question of the pass.**
  **K.A.R. 22-1-3 adopts the International Fire Code 2006 edition and the International Building
  Code 2006 edition** — not the 2024 IFC — and freezes twenty-one NFPA standards at their 2002 to
  2008 editions; K.A.R. 22-1-2 accepts in the alternative the 1997 UBC or the 2006 IBC with a
  certificate of occupancy. **L. 2026, ch. 74, § 2's direction to adopt the 2024 IFC has
  therefore not been carried into regulation**, and the 2024 edition is not in force. K.A.R.
  22-1-4, the K.S.A. 31-136 variance regulation, imposes **no** occupant-notice condition;
  22-1-1 supplies the municipal-modification and inconsistency machinery, appealable under
  K.S.A. 31-142. Three rows moved from `NEEDS_REVIEW` to `VERIFIED` on this reading
  (`fire-code-standard`, `frozen-standard-incorporation`, `sanitary-code-variance`) and two were
  corrected and narrowed (`fire-sprinkler-duty`, `balcony-inspection`).
* **K.A.R. art. 28-50** (KDHE, Asbestos Control): 14 regulations, 9 effective, 5 revoked, with
  **28-50-9** — work practices for asbestos removal in occupied spaces — read whole. Kansas
  protects occupants by **isolation, exclusion and posted warning signs**, with a **24-hour
  re-entry hold** where clearance monitoring is not done, and the K.A.R. 28-50-8 notification
  runs to the **department, not to a tenant**. So **Kansas imposes no asbestos-disclosure duty on
  a landlord toward a tenant** — a negative finding that would have been easy to get backwards.

**And one of my own citations turned out to be false.** This brief told every researcher that the
Cold Weather Rule, residential disconnection procedure and utility-deposit rules sit in **K.A.R.
art. 82-1**, naming **K.A.R. 82-1-220 et seq.** They do not. **K.A.R. 82-1-220 is titled
"Complaints."** Article 82-1 is the Corporation Commission's Rules of Practice and Procedure,
82-1-201 to 82-1-250. The Commission has **17 articles and none for residential utility billing,
deposits or disconnection**, and an agency-wide scan of every regulation's published name for
cold weather, disconnection, deposit, billing or termination of service returned nothing.
Kansas's Cold Weather Rule is a **Corporation Commission order carried into the regulated
utilities' filed tariffs, not a codified regulation** — which is why no statutory search ever
found it. Ten answer files had inherited the citation; every one had hedged it ("believed to",
"content is NOT asserted"), so no row ever stated a false rule, and all ten have been corrected
to name the order-and-tariff source and to give the accurate reason for the remaining gap. The
scan proves no agency-82 regulation is *named* for those subjects rather than that no sentence
anywhere in agency 82 touches them; combined with the absence of any residential-service article,
the order-and-tariff conclusion is the fair one, and it is stated as a conclusion.

**What remains genuinely reg-level**, named in the rows that need it and asserted by none of
them: the Cold Weather Rule itself (a KCC order, not in the K.A.R.); **K.A.R. art. 28-72**
(residential childhood lead poisoning prevention — the lease-facing lead duty is federal and
already in the library, and K.S.A. 65-1,202 to 65-1,212 were read verbatim, so no row rests on
it); **K.A.R. 28-4-113** (day care home definition); and the **copyrighted text of the adopted
IBC and IFC**, which is incorporated by reference and not reproduced in the K.A.R., so a question
whose answer sits inside the model code — an occupancy threshold, a maintenance duty — stays open
for that narrow reason rather than for want of access.

## Currency — and the pass's most consequential finding

**The Revisor's codified K.S.A. text does not yet include the 2026 session.** This was not a
stale capture: the live pages were checked on 2026-10-24, the day of this pass.

| Section | Codified history line, live on 2026-10-24 | Actually amended by |
|---|---|---|
| 61-3806 | L. 2000, ch. 161, § 83; January 1, 2001 | L. 2026, ch. 132, § 2 |
| 61-3807 | L. 2000, ch. 161, § 84; L. 2010, ch. 135, § 219; July 1 | L. 2026, ch. 132, § 3 |
| 58-1401 | L. 2002, ch. 175, § 1; L. 2003, ch. 154, § 15; July 1 | L. 2026, ch. 74, § 3 |

None of the three contains the word "mediation" or the 14-day continuance, and chapter 61
article 38 still runs only 61-3801 through 61-3808 — there is no expungement section. Each of
the 2026 acts takes effect "from and after its publication in the statute book," which has not
reached the codified text.

**Consequence, and the reason this matters beyond Kansas.** A corpus full-text battery and the
whole-K.S.A. title battery will both report a subject **absent** when Kansas legislated on it
six months earlier. Seven 2026 acts bear directly on this library — ch. 56 (Removal of
Squatters Act), ch. 74 (housing code and fire safety), ch. 76 (by-right housing development),
ch. 96 (short-term rentals, window now closed), ch. 120 (EV charging), ch. 132 (eviction
expungement and mediation) and ch. 152 (preemption of local source-of-income, screening,
deposit-cap and right-of-first-refusal ordinances). Several of them convert what would have
been bare confirmed-absence rows into **affirmative legislative refusal**, which SOP rule 19
treats as the strongest form of absence evidence.

**How currency was therefore established for every new row.** For each section a row relies
on: its history line read from the opened section, **plus** a search of both years' session
laws for that section number (`scripts/kslaw.py`), **plus** a check of the 2025 and 2026 act
titles for an act covering the topic (`scripts/kschapter.py --list`). Both results are recorded
in the row's `notes` and in the answer file's `currency` field. An act not yet codified is
cited in session-law form — `L. 2026, ch. 152, § 1(a)(2)` — and a codified section relied on
as amended is cited with the rider, `K.S.A. 61-3806(c), as amended by L. 2026, ch. 132, § 2`.
No row cites the corpus text of 61-3806, 61-3807 or 58-1401 as current without that rider.

**One expired authority caught.** K.S.A. 61-4001(a)(2)'s authority for the supreme court to
impose an additional docket-fee charge "not to exceed $19" ran "[o]n and after July 1, 2019,
through June 30, 2025" — closed on the section's own text. No new row states a dollar total
for the cost of filing an eviction.

**Session-law coverage is complete for 2025 and 2026 and nothing earlier was needed**, because
every codified section relied on carries its own history line and those were read individually.

---

### §2 — Topics answered

One line per topic: topic, row id, Present / Absent / tagged, citation.

234 of 234 topics answered.

- **`accessory-dwelling-unit`** — `edu-accessory-dwelling-unit-ks` — PRESENT — L. 2026, ch. 76; K.S.A. 12-758(c) — CORRECTED from absence by the session-law pass: L. 2026, ch. 76 (by-right housing development act) defines ADUs and mandates by…
- **`actual-notice-method`** — `edu-no-agreed-notice-method-rule-ks` — PRESENT — K.S.A. 16-1608(b); K.S.A. 58-2510 — no agreed-method provision, and K.S.A. 16-1608(b)(B),(d) forbids varying a statutorily specified method by agreement; K.S.A.…
- **`adverse-proceeding-notice`** — `edu-attornment-ks`, `tenant-notice-of-adverse-proceeding-ks` — MIXED — K.S.A. 58-2514 — attornment to a stranger void, K.S.A. 58-2514; conveyance valid without attornment, 58-2513; no statutory tenant-noti…
- **`alarm-tampering-fee`** — `edu-no-alarm-tampering-fee-ks` — ABSENT — K.S.A. 58-2555(f); L. 2026, ch. 99; K.A.R. 22-1-3 — no Kansas statute authorizes or caps a tampering fee; recover actual cost under K.S.A. 58-2555(f), not a flat penalty…
- **`animal-care-access`** — `edu-no-animal-care-entry-right-ks`, `animal-care-access-ks` — PRESENT — K.S.A. 58-2557; K.S.A. 79-3606(cccc); K.S.A. 21-6412 — no Kansas entry or custody right for a tenant's animal; K.S.A. 58-2557 entry limits a…
- **`appliances-excluded`** — `appliances-excluded-ks` — PRESENT — K.S.A. 58-2553(a)(3) — exclusion possible only for items not 'supplied or required to be supplied' by the landlord, K.S.A. 58-2553(a)(3),(a)(5); move-in inventory 58-2548 is t…
- **`asbestos-hazards`** — `edu-asbestos-hazards-ks` — PRESENT — K.S.A. 65-5301(a) — VERIFIED: no disclosure/inspection/notice duty anywhere in ch. 58; licensing bites only on removal or encapsulation of friable (>1% by weight) material, K.S.…
- **`association-obligations-disclosure`** — `edu-no-association-disclosure-ks`, `association-documents-delivery-ks` — MIXED — K.S.A. 58-4607(b); K.S.A. 58-3128(a); K.S.A. 58-4601 — no Kansas disclosure duty (and K.S.A. 58-4607(b)'s public-of…
- **`attorney-fees`** — `edu-attorney-fees-ks` — PRESENT — K.S.A. 58-2547(a)(3); L. 2026, ch. 56, § 6 — PROHIBITED: K.S.A. 58-2547(a)(3) voids any clause by which either party 'agrees to pay either party's attorneys' fees', with actual damage…
- **`automatic-renewal`** — `edu-automatic-renewal-ks`, `automatic-renewal-ks` — MIXED — K.S.A. 50-617; K.S.A. 58-2545(a) — no Kansas auto-renewal notice, formatting or opt-in rule (and K.S.A. 50-617's negative-option statute reaches only uns…
- **`balcony-inspection`** — `edu-no-balcony-inspection-ks` — ABSENT — K.S.A. 58-2553(a)(1); L. 2026, ch. 74 — no Kansas inspection mandate ('balcon' = 1 hit index-wide, 58-3102); duty runs through K.S.A. 58-2553(a)(1)-(2) plus the fire marsh…
- **`bed-bug-cooperation`** — `edu-bed-bug-cooperation-ks`, `pest-cooperation-ks` — MIXED — K.S.A. 58-2553(a)(1) — no Kansas bed bug statute ('bed bug' = 0 hits index-wide) and no habitability warranty; duty arrives via K.S.A. 58-2553(a)(1) +…
- **`binding-arbitration`** — `edu-lease-arbitration-ks` — PRESENT — K.S.A. 5-423; L. 2018, ch. 90 — UPGRADED to VERIFIED 2026-10-24: chapter 5 now in the index and read section-open. Kansas's revised uniform arbitration act (K.S.A. 5-423 to…
- **`cannabis`** — `edu-cannabis-ks` — PRESENT — L. 2026, ch. 133, § 1 — PROHIBITED; UPGRADED to VERIFIED 2026-10-24. 21-5706, 65-6235, 79-5201 and 2-3901 now opened. No Kansas legalisation and no cardholder protection; marijuana re-enacted a…
- **`carpet-cleaning`** — `edu-no-carpet-cleaning-rule-ks`, `TAG:carpet-cleaning-ar` — MIXED, tagged — K.S.A. 58-2550(b) — TAGGED shared clause carpet-cleaning-ar with KS (deposit route verified — K.S.A. 58-2550(b) reaches 'the rental agreeme…
- **`casualty-and-mitigation-waivable`** — `edu-casualty-mitigation-nonwaivable-ks` — PRESENT — K.S.A. 58-2547(a)(1) — PROHIBITED: both rules are inside the act, so K.S.A. 58-2547(a)(1) makes them non-waivable with no express-waiver exception…
- **`certificate-of-occupancy-disclosure`** — `edu-no-certificate-of-occupancy-disclosure-ks` — ABSENT — K.S.A. 12-16,138; L. 2026, ch. 76 — no disclosure duty ('certificate of occupancy' = 2 hits, neither a duty), no rent-bar rule, and no st…
- **`children-occupancy`** — `edu-children-occupancy-ks` — PRESENT — K.S.A. 44-1016(a); L. 2026, ch. 152 — CONSTRAINED: familial status protected, K.S.A. 44-1016(a)-(c) with the definition at 44-1015(i); occupancy limits preserved by 44-1018(…
- **`cold-weather-vacate-notice`** — `edu-no-cold-weather-vacate-notice-ks` — ABSENT — K.S.A. 58-2558 — no Kansas seasonal vacate-notice rule ('cold weather' = 2 hits, both workers'-comp annotations); the Kansas route is the lease-created ext…
- **`collection-fee`** — `edu-collection-fee-ks`, `collection-fee-ks` — MIXED — K.S.A. 50-601; K.S.A. 58-2568 — no Kansas authorization and PROOF BY REPEAL — the collection agency act, K.S.A. 50-601, was repealed by L. 1973, ch. 217, § 22 eff…
- **`common-area-lighting`** — `edu-no-common-area-lighting-rule-ks`, `common-area-lighting-ks` — PRESENT — K.S.A. 58-2553(a)(2); K.S.A. 31-133; L. 2026, ch. 74, §§ 1 — no Kansas lighting STATUTE; general reasonable-care duty K.S.A. 58-2553(a…
- **`communal-land-lease-approval`** — `edu-no-communal-land-lease-approval-ks` — ABSENT — K.S.A. 58-4601 — in Kansas; no state approval requirement (58-2249 is an evidence rule only, 50-6a7(o) a tax definition); trust-land leases are FEDERAL…
- **`condemned-premises-rent-bar`** — `edu-no-condemned-premises-rent-bar-ks` — ABSENT — K.S.A. 12-1751; K.S.A. 17-4759 — in Kansas; no rent-collection bar or re-let ban. City condemnation power K.S.A. 12-1751 to 12-1756 and closing orders un…
- **`confession-of-judgment`** — `edu-confession-of-judgment-ks` — PRESENT — K.S.A. 58-2547(a)(2); K.S.A. 61-3901(a) — PROHIBITED. K.S.A. 58-2547(a)(2) (void, plus actual damages for deliberate use under (b)); K.S.A. 61-3901(a) bars appeal fr…
- **`confirmed-absences-habitability`** — `edu-confirmed-absences-habitability-ks` — ABSENT — L. 2026, ch. 54 — x6 (no repair-and-deduct, no rent withholding/escrow, no minimum temperature, no dangerous-conditions list, no named warranty of h…
- **`confirmed-absences-misc`** — `edu-confirmed-absences-misc-ks` — ABSENT — K.S.A. 50-640(b)(1) — x4 (no tenant-bankruptcy rule; no lease type-size rule, the only one being 58-2570(e)'s notice-to-vacate warning; no initialing requirement; n…
- **`confirmed-absences-outside-title`** — `edu-confirmed-absences-outside-title-ks` — ABSENT — K.S.A. 50-687; K.S.A. 61-3801; L. 2026, ch. 76 — x3: no cash-rent receipt duty (contrast K.S.A. 50-687, which imposes one for rent-to-own GOODS);…
- **`construction-liens`** — `edu-construction-liens-ks`, `no-liens-ks` — PRESENT — K.S.A. 60-1101; K.S.A. 58-2547(a)(4) — act, K.S.A. 60-1101 (lien only on a contract with the owner or the owner's trustee, agent or spouse), 60-1102, 60-1103,…
- **`conversion-notice`** — `edu-no-conversion-notice-ks` — ABSENT — K.S.A. 58-3115a; K.S.A. 58-2570(a); L. 2026, ch. 152, § 1(a)(4) — in Kansas: no condo-conversion tenant notice, offering statement, right of first refusal or conversion leas…
- **`defective-drywall-disclosure`** — `edu-no-drywall-disclosure-ks` — ABSENT — K.S.A. 58-2553(a)(1); K.S.A. 58-30,106(d)(1); K.S.A. 58-3078a — in Kansas: no drywall provision anywhere (all 30 'drywall/gypsum' hits are case names, plus 'gyps…
- **`deposit-cost-schedule`** — `edu-no-deposit-cost-schedule-ks` — ABSENT — K.S.A. 58-2550(b); L. 2026, ch. 152, § 1(a)(3) — in Kansas: no statute permits or forbids a preset deduction schedule (35 'carpet clean/repaint' hits all workers-com…
- **`deposit-last-month-rent`** — `edu-deposit-last-month-rent-ks` — PRESENT — K.S.A. 58-2550(d); K.S.A. 58-2543(m) — Deposit last month's rent — Present. K.S.A. 58-2550(d): unless the rental agreement provides otherwise the tenant may not ap…
- **`deposit-surrender-notice`** — `edu-no-deposit-surrender-notice-ks` — ABSENT — K.S.A. 58-2547(a)(1); K.S.A. 58-2550(b) — in Kansas on a literal zero ('notice of intent to vacate' and variants: 0 hits over statutes, constitution and both y…
- **`designated-repairer`** — `edu-no-designated-repairer-rule-ks`, `designated-repairer-ks` — PRESENT — K.S.A. 58-2553(b); K.S.A. 44-1805; L. 2026, ch. 99, §§ 2(k) — in Kansas, and structurally so: no designated-repairer statute AND no repai…
- **`disaster-displaced-guests`** — `edu-no-disaster-guest-rule-ks` — ABSENT — K.S.A. 48-925(c)(1); L. 2026, ch. 56, § 7(b)(4) — in Kansas on a literal zero ('guest|occupant' near 'disaster|emergency|displaced': 0 hits over statutes, constitu…
- **`disaster-duties`** — `edu-disaster-duties-ks` — PRESENT — K.S.A. 58-2553(a); K.S.A. 50-627(b)(2) — in one phrase: K.S.A. 58-2553(a)'s 'Except when prevented by an act of God, the failure of public utility services or other conditions bey…
- **`drug-free-housing-addendum`** — `edu-no-drug-free-addendum-rule-ks` — ABSENT — K.S.A. 58-2555(f); L. 2026, ch. 56, § 7(b)(4)) — in Kansas x4: no drug-free or crime-free housing regime (all 5 'drug-free' hits are the federal workplace act…
- **`dv-confidentiality`** — `edu-dv-confidentiality-ks` — ABSENT — K.S.A. 58-25,137(c); K.S.A. 60-3104; L. 2026, ch. 103 — in Kansas, and asymmetrically: K.S.A. 58-25,137(c) entitles the landlord to demand a perjury-backed professional's doc…
- **`dv-deposit-timing`** — `edu-dv-deposit-timing-ks` — ABSENT — K.S.A. 12-514; K.S.A. 58-2550(b) — in Kansas on a literal zero (DV terms near 'deposit': 0 hits over statutes, constitution and both years' session laws; the 9 reverse-order hi…
- **`dv-eviction-protection`** — `edu-dv-eviction-protection-ks` — PRESENT — K.S.A. 58-25,137(a)(2); K.S.A. 60-3107(a)(2); L. 2026, ch. 132, §§ 2 — K.S.A. 58-25,137(a)(2) bars eviction or a lease-violation finding on the basis of protected-pe…
- **`dv-lockchange`** — `edu-dv-lockchange-ks` — ABSENT — K.S.A. 58-25,137; K.S.A. 60-3107(a)(2); K.S.A. 60-31a — (no Kansas lock statute of any kind; battery returned 1 false positive and 0). What governs instead: K.S.A. 58-25,137 (tenancy p…
- **`dv-protection-order-chapter-moved`** — `edu-dv-law-citations-ks` — PRESENT — K.S.A. 60-3101; K.S.A. 60-31a; L. 2025, ch. 22 — NOT MOVED. Protection from abuse act still K.S.A. 60-3101 to 60-3111 (ch. 60 art. 31); protection from stalking…
- **`dv-qualifying-documents`** — `edu-dv-qualifying-documents-ks` — PRESENT — K.S.A. 58-25,137(c); K.S.A. 44-1132 — CONSTRAINED. K.S.A. 58-25,137(c): protections attach on the tenant's statement, documentation only on the landlord's request,…
- **`electric-submetering-disclosure`** — `edu-no-electric-submeter-disclosure-ks` — ABSENT — K.S.A. 58-25,127; K.S.A. 12-2723; K.S.A. 58-2551 — for electricity and gas, by legislative choice. Kansas submetering law is water only: K.S.A. 58-2…
- **`emergency-contact`** — `edu-no-emergency-contact-ks` — ABSENT — K.S.A. 58-2551; K.S.A. 58-2557(b); K.S.A. 58-2559 — No Kansas emergency-contact, posting or 24-hour duty; the landlord-plus-telephone-number pattern returned 0 hits, and 'em…
- **`eminent-domain`** — `edu-eminent-domain-ks`, `TAG:eminent-domain-vi` — MIXED, tagged — K.S.A. 58-2545(c); K.S.A. 58-3504; K.S.A. 26-507 — TAGGED eminent-domain-vi (VI;MP -> +KS): no Kansas statute abates rent or ends a lease on a taking,…
- **`employee-screening`** — `edu-employee-screening-ks` — PRESENT — K.S.A. 58-3035(f); K.S.A. 58-2541; L. 2026, ch. 152 — _EDUCATION, CONDITIONAL. No Kansas employee-screening mandate (the offender-registry-plus-employment pattern returned 0…
- **`energy-data-release`** — `edu-no-energy-data-release-ks` — ABSENT — K.S.A. 75-37,128; L. 2025, ch. 66 — cleanly. No Kansas benchmarking programme ('benchmark' returns 4 hits, none energy-related), no energy-data-release provision (patter…
- **`entity-landlord-court-representation`** — `edu-entity-landlord-representation-ks` — PRESENT — K.S.A. 50-6,142(a)(1); K.S.A. 61-2707(a); K.S.A. 61-2703(a) — _EDUCATION, CONDITIONAL, and the topic's question answered YES for Kansas: a COUR…
- **`ev-charging-end-of-tenancy`** — `edu-ev-charging-end-of-tenancy-ks`, `TAG:ev-charging-end-of-tenancy-co` — MIXED, tagged — K.S.A. 58-2567(a); K.S.A. 58-2565(d); K.S.A. 58-2501a — TAGGED ev-charging-end-of-tenancy-co (CO;IL -> +KS); its '…
- **`ev-charging-requirements`** — `edu-ev-charging-requirements-ks`, `TAG:ev-charger-installation-hi` — MIXED, tagged — L. 2026, ch. 120; L. 2025, ch. 91; K.S.A. 58-2547(a)(1) — TAGGED ev-charger-installation-hi (HI;GU;VI;AS;MP -> +KS) with…
- **`ev-charging-shared-area`** — `edu-ev-charging-shared-area-ks`, `TAG:ev-charging-shared-area-co` — MIXED, tagged — K.S.A. 58-3109; L. 2026, ch. 120; L. 2025, ch. 91 — TAGGED ev-charging-shared-area-co (CO;IL -> +KS) with three Kansas caut…
- **`eviction-hardship-stay`** — `edu-eviction-hardship-stay-ks` — ABSENT — K.S.A. 61-3601; K.S.A. 60-262; K.S.A. 61-3808(a) — by express legislative exclusion. K.S.A. 61-3601 removes eviction judgments from K.S.A. 60-262's 14-day enforcement…
- **`eviction-penalty-clause-ban`** — `edu-eviction-penalty-clause-ban-ks` — ABSENT — K.S.A. 58-2547(a) — Eviction penalty / fee clauses - no Kansas ban; K.S.A. 58-2547(a) is a closed list that does not name them, and four limits do the work…
- **`eviction-service-party`** — `edu-eviction-service-party-ks` — PRESENT — K.S.A. 61-3004(c)(1); K.S.A. 61-3003(b); K.S.A. 61-3803 — _EDUCATION, CONSTRAINED. Topic question 1 answered YES: K.S.A. 61-3004(c)(1) allows service on 'an agent au…
- **`exculpatory-clauses`** — `edu-exculpatory-clauses-ks` — PRESENT — K.S.A. 58-2547(a)(4); K.S.A. 16-121(b); K.S.A. 58-2544 — PROHIBITED. K.S.A. 58-2547(a)(4): no rental agreement may provide that either party 'agrees to the exculpation or…
- **`expedited-deposit-disposition`** — `edu-no-expedited-deposit-disposition-ks` — ABSENT — K.S.A. 58-2550(b); K.S.A. 50-627; L. 2026, ch. 152 — 'expedit' returns 55 hits, none in a deposit context; the deposit-near-fee pattern returns 4 hit…
- **`family-child-care`** — `edu-family-child-care-ks` — PRESENT — K.S.A. 21-6109(j); K.S.A. 65-530; K.S.A. 21-6111 — _EDUCATION, CONDITIONAL. No tenant right and no landlord prohibition: 'home occupation|residential use only|single-family us…
- **`farmland-hunting-rights`** — `edu-no-farmland-hunting-rights-ks` — ABSENT — K.S.A. 58-2306; K.S.A. 21-5808(a)(1); K.S.A. 32-1013 — No Kansas statute allocates hunting or fishing rights between landlord and tenant: the decisive pattern re…
- **`fee-in-lieu-of-deposit`** — `edu-fee-in-lieu-of-deposit-ks` — ABSENT — K.S.A. 58-2543(m); L. 2026, ch. 152, § 1(a)(3) — as authorisation, CONSTRAINED in substance. Kansas has no statute authorising a non-refundable fee in place of a depo…
- **`fee-transparency`** — `edu-no-fee-transparency-rule-ks` — ABSENT — K.S.A. 58-2545(a); K.S.A. 12-16,120; L. 2026, ch. 152 — no Kansas all-in-pricing, total-monthly-payment or fee-disclosure statute; K.S.A. 58-2545(a) leaves it to the leas…
- **`fee-unprovided-service`** — `edu-no-fee-unprovided-service-ks` — ABSENT — K.S.A. 50-627(b)(3); K.S.A. 44-510j(g) — Fees for services not provided - ABSENT as a specific prohibition; the Kansas hook is K.S.A. 50-627(b)(3) (court weighs wh…
- **`fire-code-standard`** — `edu-fire-code-standard-ks` — PRESENT — K.S.A. 31-133; L. 2026, ch. 74; L. 2026, ch. 155 — the Kansas fire prevention code is the state fire marshal's K.A.R. art. 22-1 rules under K.S.A. 31-133/31-134, with statew…
- **`fire-sprinkler-duty`** — `edu-fire-sprinkler-duty-ks` — PRESENT — K.S.A. 12-16,219; K.S.A. 31-133(a)(4) — finding, PRESENT_EDUCATION row: no Kansas statute imposes any sprinkler installation, retrofit or disclosure duty on a landlord; K.…
- **`firearms`** — `edu-firearms-ks`, `firearm-rules-ks` — MIXED — K.S.A. 58-2545(a); K.S.A. 12-16,124 — no Kansas statute either restricts a landlord's lease firearm policy or protects a tenant's firearm possession (0 hits linking any firear…
- **`flood-disclosure`** — `edu-no-flood-disclosure-ks` — ABSENT — L. 2026, ch. 76; K.S.A. 58-30,106(d)(1); K.S.A. 58-3035(j) — as a statute (no required notice, form, rider, signature or termination remedy; 'special flood hazard' has ONE hit…
- **`foreclosure-disclosure`** — `edu-no-foreclosure-disclosure-ks` — ABSENT — K.S.A. 58-30,106(d)(1); K.S.A. 60-2414 — as a statute, and now proved by full text rather than secondary source: 13 foreclosure-near-tenant proximity hits all read…
- **`forfeiture-redemption`** — `edu-forfeiture-redemption-ks` — PRESENT — K.S.A. 58-2564(b); L. 2026, ch. 132 — as cure windows, ABSENT as post-termination redemption: K.S.A. 58-2564(b) gives three consecutive 24-hour periods (plus two days…
- **`frozen-standard-incorporation`** — `edu-frozen-standard-incorporation-ks` — PRESENT — K.S.A. 12-3012; K.S.A. 31-134a(a); L. 2026, ch. 74 — in five places: K.S.A. 12-3012 (cities) and 12-3303 (counties) freeze a locally incorporated code…
- **`good-cause-notice`** — `edu-no-good-cause-notice-ks` — ABSENT — K.S.A. 58-2570(a); K.S.A. 58-2572; K.S.A. 16-1204 — Kansas has no good-cause or just-cause eviction law and therefore no coverage notice; termination is K.S.A. 58-2570(a) se…
- **`government-fee-reimbursement`** — `edu-government-fee-reimbursement-ks`, `TAG:government-fee-reimbursement-ky` — MIXED, tagged — K.S.A. 58-2547(a)(4); K.S.A. 12-137; L. 2025, ch. 67 — TAGGED the shared clause government-fee-reimbursement…
- **`governmental-fines`** — `edu-governmental-fines-ks` — ABSENT — K.S.A. 44-1009; K.S.A. 58-2547(a)(4); K.S.A. 58-2555(f) — as a statute (fine/penalty/citation within 60 characters of tenant/lessee/occupant returns exactly ONE hit corpus-wi…
- **`guarantor-renewal`** — `edu-guarantor-renewal-ks`, `TAG:guaranty-as` — MIXED, tagged — K.S.A. 33-106; K.S.A. 16-101 — TAGGED the shared clause guaranty-as (AS;MP -> +KS) after a full-text screen; Kansas has NO lease-guarantor statute (70…
- **`guest-rights`** — `edu-no-guest-rights-ks` — ABSENT — K.S.A. 58-2555(f); L. 2026, ch. 56 — the KRLTA's operative text does not contain the word 'guest' (guest-near-tenant = 0 hits; 'reasonable number of guests|guest fee' = 0 hits; the on…
- **`habitability-materiality`** — `edu-habitability-materiality-ks` — PRESENT — K.S.A. 58-2553(a)(1); K.S.A. 58-2555(a); K.S.A. 58-2559(a) — as a standard: Kansas uses one phrase, 'materially affecting health and safety', in exactly five KRL…
- **`habitability-modifiable`** — `edu-habitability-modifiable-ks` — PRESENT — K.S.A. 58-2553(b); K.S.A. 58-2549 — with a sharp limit: a written agreement can move WHO PERFORMS certain duties (K.S.A. 58-2553(b), (c), (d), already carried by e…
- **`habitability-presumption`** — `edu-no-habitability-presumption-ks` — ABSENT — K.S.A. 60-4905(b); K.S.A. 58-25,125; K.S.A. 58-2501 — 'presumption' within 50 characters of landlord/tenant/premises/dwelling returns THREE hits in the whole c…
- **`habitability-statement`** — `edu-no-habitability-statement-ks` — ABSENT — K.S.A. 58-2553(a) — no Kansas rule requires a lease to state the unit will be delivered fit for habitation (no analogue to Md. Real Prop. 8-208(c)(1); 'lease shall…
- **`habitability-waiver`** — `edu-habitability-waiver-ks` — ABSENT — K.S.A. 58-2547(a)(1) — PROHIBITED, with a lawful exception that must be stated alongside it. K.S.A. 58-2547(a)(1) bars any rental agreement provision by which either party…
- **`hazardous-contamination-disclosure`** — `edu-no-contamination-disclosure-ks` — ABSENT — K.S.A. 65-34,177; K.S.A. 58-30,106(d)(1); K.S.A. 65-1,221 — as a landlord duty: contamination within 50 characters of disclose/lease/tenant/rental/pu…
- **`health-district-rental-rules`** — `edu-health-district-rental-rules-ks` — PRESENT — K.S.A. 19-3701 — CONDITIONAL: Kansas has no health districts and no duty to furnish health rules; county sanitary codes under K.S.A. 19-3701 to 19-3707 a…
- **`heating`** — `edu-heating-ks` — PRESENT — K.S.A. 58-2553(a)(5) — REQUIRED: K.S.A. 58-2553(a)(5) requires "reasonable heat" with two statutory exceptions and no numeric standard anywhere ('minimum temperature|degrees fahrenheit' 0 hits);…
- **`hoa`** — `edu-hoa-ks`, `TAG:association-approval-la` — MIXED, tagged — K.S.A. 58-4601; L. 2025, ch. 13 — PRESENT: Kansas DOES have a common-interest-community act (Kansas uniform common interest owners bill of rights act, K.S.A. 58-4601…
- **`home-business`** — `edu-no-home-business-rule-ks` — ABSENT — K.S.A. 58-2558 — RECOMMENDED: no Kansas home-business permitted-use statute (battery's only hit, 12-16,124, opened and a firearms false positive), but K.S.A. 58-2558 supplies a…
- **`infirmity-termination`** — `edu-no-infirmity-termination-ks` — ABSENT — K.S.A. 58-2570(b) — RECOMMENDED: no Kansas medical, age or care-facility early-termination right ('terminate ... health|medical|disab|infirm' 0 hits; the one 'live i…
- **`informal-dispute-resolution`** — `edu-informal-dispute-resolution-ks`, `TAG:informal-dispute-resolution-or` — MIXED, tagged — K.S.A. 58-2547(a)(1); K.S.A. 5-501; L. 2026, ch. 132 — ABSENCE on the lease-clause question (no Kansas analogue…
- **`inspection-condemnation-disclosure`** — `edu-no-code-order-disclosure-ks` — ABSENT — K.S.A. 58-30,106(d)(1) — Inspection/condemnation disclosure — ABSENCE (education), RECOMMENDED: no Kansas duty to disclose an open inspection, code or c…
- **`inspection-notice-penalty`** — `edu-no-inspection-notice-penalty-ks` — ABSENT — K.S.A. 58-2548 — RECOMMENDED: Kansas requires the joint move-in inventory within five days with a signed copy to the tenant (K.S.A. 58-2548) but attaches NO…
- **`jury-waiver`** — `edu-jury-waiver-ks` — PRESENT — K.S.A. 61-3202(b) — NEEDS_REVIEW: Kansas evictions ARE jury-triable on demand by the pretrial conference (K.S.A. 61-3202(b)-(c), six jurors; 61-3801 sits in the limited-actions code per 6…
- **`key-control-policy`** — `edu-no-key-control-policy-ks` — ABSENT — L. 2026, ch. 56 — RECOMMENDED: no Kansas key-control, key-log, master-key or staff-screening mandate, and no lock-supply duty at all — two literal zeros ('master key|key c…
- **`knowing-use-penalty`** — `edu-knowing-use-penalty-ks` — PRESENT — K.S.A. 58-2547(b) — PROHIBITED: K.S.A. 58-2547(b) — a prohibited provision is unenforceable regardless of fault, and if a landlord "deliberately uses a rental agreement co…
- **`landlord-breach-remedy`** — `edu-landlord-breach-remedy-ks` — PRESENT — K.S.A. 58-2559(a); K.S.A. 58-2553; K.S.A. 58-2552 — RECOMMENDED: the full Kansas map — 58-2559(a) 30-day notice to terminate with a 14-day good-faith cure window and…
- **`landlord-liability-insurance`** — `edu-no-landlord-liability-insurance-ks` — ABSENT — K.S.A. 58-3125 — RECOMMENDED: no Kansas mandate and no state rental registration to attach one to — 'insurance within 60 chars of landlord|lessor|renta…
- **`landlord-registration`** — `edu-no-landlord-registration-ks` — ABSENT — K.S.A. 58-2551(a); K.S.A. 12-16,138; L. 2026, ch. 152 — RECOMMENDED: no Kansas state registration, rental licence, assessor filing, out-of-state-owner broker rule or…
- **`late-fee-limit`** — `edu-no-late-fee-limit-ks` — ABSENT — K.S.A. 58-816a; L. 2024, ch. 46; K.S.A. 9-2230 — CONSTRAINED: no Kansas residential late-fee cap, grace period or daily limit — 48 'late fee' hits in 19 sections, none in the KRLT…
- **`law-enforcement-cooperation`** — `edu-law-enforcement-cooperation-ks` — PRESENT — K.S.A. 22-3904(5); K.S.A. 22-3901; L. 2026, ch. 56 — RE-ANSWERED 2026-10-24 on the battery recheck; disposition ABSENCE_EDUCATION -> PRESENT_EDUCATION, sti…
- **`lead-safe-certification`** — `edu-lead-safe-certification-ks` — PRESENT — K.S.A. 65-1,203(a) — CONDITIONAL, NEEDS_REVIEW: Kansas issues NO lead-safe certificate ('lead.safe|lead safe' 0 hits) but does license lead work — K.S.A. 65-1,203(…
- **`lead-state-notices`** — `edu-no-lead-state-notices-ks` — ABSENT — K.S.A. 65-1,202 — RECOMMENDED, NEEDS_REVIEW: Kansas adds no state lead notice to a lease — no pamphlet, no hazard notification, no blood-lead-triggered duty. Four separate…
- **`lease-content-requirements`** — `edu-no-lease-content-requirements-ks` — ABSENT — K.S.A. 58-2545(a) — RECOMMENDED: Kansas prescribes no residential lease contents and no writing requirement beyond the statute of frauds (33-105/33-106); K…
- **`lease-copy`** — `edu-no-lease-copy-requirement-ks`, `TAG:lease-copy-receipt-hi` — MIXED, tagged — K.S.A. 50-683(c) — CONFIRMED ABSENCE said plainly: Kansas never requires a landlord to give the tenant a copy of the lease — 'copy of the (…
- **`lease-notice-initial-requirement`** — `edu-no-initials-requirement-ks` — ABSENT — K.S.A. 58-2570(e) — No Kansas statute conditions a lease term on the tenant's initials ('initialed|initialled' 2 hits, both outside landlord-tenant: 16-118…
- **`lease-registration`** — `edu-lease-registration-ks` — PRESENT — K.S.A. 58-2221 — but permissive. Kansas has no lease registry; K.S.A. 58-2221 says an instrument conveying or affecting real estate 'may be recorded' with the register of de…
- **`lease-type-parity`** — `edu-no-lease-type-parity-ks` — ABSENT — K.S.A. 58-2545(a) — 'more burdensome' (the RCW 59.18.700(4) phrase) returns 0 hits corpus-wide; no Kansas statute requires parity between month-to-month and fixed-term tenan…
- **`lease-type-size`** — `edu-no-lease-type-size-ks` — ABSENT — K.S.A. 58-2570(e) — for the lease itself. No Kansas minimum type size or legibility rule for a residential lease and no N.Y. C.P.L.R. 4544-style evidentiary sanction; the 34 N-p…
- **`limitation-of-actions`** — `edu-limitation-of-actions-ks` — PRESENT — K.S.A. 60-511(1); L. 2026, ch. 132 — No KRLTA period; K.S.A. 60-511(1) five years on a written lease (60-511(5) catch-all also five), 60-512(1) three years on an oral…
- **`liquidated-damages`** — `edu-liquidated-damages-ks` — ABSENT — K.S.A. 58-2568 — as a statute, CONSTRAINED in substance. No Kansas statute or regulation on agreed damages in a residential lease; all 'liquidated damages' hits touching a le…
- **`lockout-for-rent-delinquency`** — `edu-no-lockout-for-rent-ks` — ABSENT — K.S.A. 58-2569; L. 2026, ch. 56, § 7(b)(4) — as an opt-in, PROHIBITED in substance. No Kansas lock-change provision exists: 'change the locks|lockout' returns 6 hi…
- **`maintenance-duty-shift`** — `waste-removal-duty-shift-ks` — PRESENT — K.S.A. 58-2553(b); L. 2026, ch. 99 — and a clause gap filled. K.S.A. 58-2553(b) lets the LEASE ITSELF (a writing, no separate document and no stated consideration) shi…
- **`meter-conservation-charge`** — `water-meter-charge-notice-ks` — PRESENT — K.S.A. 58-25,127; K.S.A. 58-2553; K.S.A. 66-104 — energy-efficiency charge CONFIRMED ABSENT ('conservation charge' 0 hits corpus-wide; 'energy efficiency' hits onl…
- **`meth-disclosure`** — `edu-no-meth-disclosure-ks` — ABSENT — K.S.A. 65-16,101; K.S.A. 58-30,106(d)(1) — No Kansas property meth-contamination disclosure, reporting, cleanup or habitation-ban duty; all 23 'methamphetamine' hits are crimina…
- **`military-air-zone-disclosure`** — `edu-no-military-zone-disclosure-ks` — ABSENT — K.S.A. 12-772; K.S.A. 12-773; K.S.A. 3-703 — by legislative choice rather than silence. K.S.A. 12-772 creates the very concept other states hang a disclosu…
- **`minor-tenant-filing`** — `edu-minor-tenants-ks` — ABSENT — K.S.A. 38-101 — Minor tenants and eviction filing — CONFIRMED ABSENT as to any filing bar; PRESENT as to the service and guardian ad litem machinery; UPGRADED to VERIFIED 2026-10…
- **`nonpayment-notice`** — `edu-nonpayment-notice-ks` — PRESENT — K.S.A. 58-2564(b); K.S.A. 61-3803 — K.S.A. 58-2564(b) verified word for word against the earlier agent's reading: written notice by the landlord 'of nonpayment AND such landlo…
- **`nonrefundable-deposit-notice`** — `edu-no-nonrefundable-deposit-ks` — ABSENT — K.S.A. 58-2543(m) — No Kansas statute allows a nonrefundable deposit or requires notice of one ('nonrefundable|non-refundable|not be refunded|nonreturnable' 3…
- **`nonrefundable-deposit-separate-notice`** — `edu-no-nonrefundable-separate-notice-ks` — ABSENT — K.S.A. 58-2543(m); K.S.A. 58-2548 — and PROHIBITED in substance. The pattern tracking the Wyoming and Utah trigger ('at the time the deposit…
- **`nonresident-owner-agent`** — `edu-no-nonresident-owner-agent-ks` — ABSENT — K.S.A. 60-308; K.S.A. 58-2551(a); K.S.A. 60-308(b)(1) — 'nonresident owner|landlord|lessor' returns ONE hit in the whole corpus and it is a case annotation under…
- **`notice-delivery-methods`** — `edu-notice-delivery-methods-ks`, `TAG:electronic-notice-ma` — MIXED, tagged — K.S.A. 16-1605(b); K.S.A. 16-1603(b) — TAGGED electronic-notice-ma with KS after full screen: every element has a Kansas provisio…
- **`notice-service-fee`** — `eviction-notice-cost-ks`, `edu-eviction-fee-limits-ks` — PRESENT — L. 2026, ch. 35, § 21 — as an optional clause, with four limits. CONFIRMED ABSENT that any Kansas statute authorises, caps or forbids a landlord'…
- **`notice-to-quit-waiver`** — `edu-notice-to-quit-waiver-ks` — ABSENT — K.S.A. 58-2512; K.S.A. 58-2547(a)(1); K.S.A. 58-2509 — as a permission, PROHIBITED in substance. Kansas has no analogue to Conn. Gen. Stat. § 47a-25 or the Pennsylvania…
- **`nuisance`** — `edu-nuisance-abatement-ks` — PRESENT — K.S.A. 60-908; K.S.A. 12-1617e; K.S.A. 2-3202 — in general form, ABSENT in every landlord-specific form. No Kansas nuisance receivership, rent escrow, padlock or closure power ('recei…
- **`optional-lease-terms`** — `edu-optional-lease-terms-ks` — PRESENT — K.S.A. 58-2545(b) — 10-item Rule 50 inventory of KRLTA lease-decides defaults; . K.S.A. 58-2545(b)-(d), 58-2550(a)(b)(d), 58-2553(b)-(d), 58-2554, 58-2557(a), 58-2558, 5…
- **`ordnance-demolition-meter-disclosures`** — `edu-no-ordnance-demolition-meter-disclosure-ks` — ABSENT — K.S.A. 12-1752 — Ordnance/demolition/meter disclosures — Absent on all three limbs; . 'permit to demolish' zero hits corpus-wide; muni…
- **`other-landlord-facilities`** — `edu-other-landlord-facilities-ks` — PRESENT — K.S.A. 58-2553(a); K.S.A. 44-1805(a) — K.S.A. 58-2553(a) is a closed five-item list, with 'supplied by such landlord' as the trigger, plus the elevator licensi…
- **`owner-move-in-reservation`** — `TAG:owner-occupancy-termination-ar` — tagged — K.S.A. 58-2545(a) — shared clause owner-occupancy-termination-ar with KS (AR;MS;PR;GU;VI;AS;MP -> +KS). No Kansas owner move-in statute and no just-cause law;…
- **`parking-rules-notice`** — `edu-no-parking-rules-notice-ks` — ABSENT — K.S.A. 58-2556(f) — as a parking-specific statute; . Zero hits on parking space/permit and on motor vehicle near tenant; K.S.A. 58-2556(f) (notice at the time the tena…
- **`part5-nonwaivable`** — `edu-nonwaivable-rights-ks` — PRESENT — K.S.A. 58-2547(a)(1); L. 2026, ch. 56 — Part 5 non-waivable — Present;  states the umbrella rule K.S.A. 58-2547(a)(1) plus the scope question: 58-2541's seven exclusions, 58-…
- **`periodic-services-entry`** — `edu-no-periodic-services-entry-ks`, `TAG:scheduled-services-entry-la` — MIXED, tagged — K.S.A. 58-2557(a) — Tagged shared clause scheduled-services-entry-la with KS (LA;AR;MS;VI;AS;MP -> +KS) because K.S.A.…
- **`pest-control-notice`** — `edu-no-pest-control-notice-ks` — ABSENT — K.S.A. 50-6,113; K.S.A. 19-3701; K.S.A. 2-2440b — as a landlord duty; , NEEDS_REVIEW on the K.A.R. applicator-notice point only. 'applicator|structural pest' ZERO hits;…
- **`pet-eviction-fact-sheet`** — `edu-no-pet-eviction-fact-sheet-ks` — ABSENT — K.S.A. 61-3801; K.S.A. 60-5401; K.S.A. 58-2555(f) — No Kansas fact sheet and ZERO hits for an animal rule in the eviction statutes; the KRLTA mentions animals on…
- **`pet-fees`** — `edu-pet-fees-ks` — PRESENT — K.S.A. 58-2550(a); K.S.A. 39-1102 — /constrained; . K.S.A. 58-2550(a) half-month pet deposit, available only where the lease permits pets, stacking on the 1-month/1.5-month cap; the deposit-or-…
- **`plain-language`** — `edu-no-plain-language-rule-ks` — ABSENT — K.S.A. 50-657(a) — Proof by contrast: Kansas imposes readability on car-rental collision damage waivers (K.S.A. 50-657(a)) and poultry production contracts (16-1701) but not…
- **`plain-language-consumer-statement`** — `edu-no-plain-language-consumer-statement-ks` — ABSENT — K.S.A. 50-627(b)(1) — ZERO hits for 'statement of consumer|consumer restrictions|notice to consumer'; no AG preapproval and no dollar thresho…
- **`political-access`** — `edu-no-political-access-rule-ks` — ABSENT — K.S.A. 58-3820 — ZERO hits for candidate access to a building; no voter-information-area duty. Adjacent and precisely bounded: K.S.A. 58-3820 voids a political-yard-sign…
- **`portable-cooling-device`** — `edu-no-portable-cooling-right-ks` — ABSENT — K.S.A. 58-2553(a)(3) — ZERO hits for 'window.mounted|window unit' and 'portable.{0,25}(cool|heat|air)'; no tenant installation right and no lease-notice duty for…
- **`portable-solar`** — `edu-no-portable-solar-right-ks` — ABSENT — K.S.A. 58-2272(b); L. 2025, ch. 66 — ZERO hits for plug-in/balcony/portable solar. Kansas runs the other way: K.S.A. 58-2272(b) gives no one but the surface owner the right…
- **`portfolio-thresholds`** — `edu-portfolio-thresholds-ks` — PRESENT — K.S.A. 44-1018(b)(1); L. 2026, ch. 152 — No general small-landlord concept ('small landlord|exempt.{0,40}landlord' ZERO hits); exactly three thresholds — K.S.A. 44-1018(…
- **`possession-bond`** — `edu-possession-bond-ks` — PRESENT — K.S.A. 58-2547(a)(2); L. 2026, ch. 132 — as to an end-of-term possession bond (prohibited: K.S.A. 58-2547(a)(2) confession of judgment);  states the three real Kansas bonds. KEY C…
- **`post-eviction-property`** — `edu-post-eviction-property-ks` — PRESENT — K.S.A. 58-2565(d); K.S.A. 61-3801 — K.S.A. 58-2565(d) expressly reaches a tenant removed 'as a result of a forcible detainer action, pursuant to K.S.A. 61-3801 throu…
- **`private-well-testing`** — `edu-no-private-well-testing-ks` — ABSENT — K.S.A. 19-3701; L. 2026, ch. 19 — at state level; , NEEDS_REVIEW on the county-code limb. No Kansas analogue to N.J.S.A. 58:12A-32 or ORS 90.321; 'nitrate|coliform|ars…
- **`prohibited-acts-renter`** — `edu-prohibited-acts-renter-ks` — PRESENT — K.S.A. 58-2555(f) — Prohibited acts by renter — Present; . TAG DECLINED on prohibited-acts-renter-wy (WY;AK;HI;AR;MS;DC;GU;AS;MP): its 'intentionally or negligently'…
- **`promises-to-repair`** — `edu-no-promises-to-repair-rule-ks` — ABSENT — K.S.A. 58-2545(a); K.S.A. 58-2559(a); K.S.A. 58-2548 — as a rule, PRESENT as a consequence: Kansas has no written-promise-with-a-date requirement (Wisconsin's ATCP 13…
- **`prop65-rental-warning`** — `edu-no-prop65-warning-ks` — ABSENT — K.S.A. 58-3078a — Prop 65 rental warning - ABSENT: no Kansas chemical-exposure warning law of any kind ('known to the state ... cause cancer' = 0 hits; 'chemical' near warn…
- **`property-tax-rent-disclosure`** — `edu-no-property-tax-rent-statement-ks` — ABSENT — K.S.A. 58-2572(c) — no Kansas statement of the property-tax portion of rent, annually or on a rent change (three targeted patterns all 0 hits; 'property…
- **`protected-class-inquiry-ban`** — `edu-no-protected-class-inquiry-ban-ks` — ABSENT — K.S.A. 44-1016(c); K.S.A. 44-1018(b); L. 2026, ch. 152 — as an inquiry/record ban (the words 'inquiry' and 'record' return 0 hits against every protected…
- **`purpose-limitation`** — `edu-no-purpose-limitation-ks` — PRESENT — K.S.A. 22-3901 — CORRECTED 2026-10-24 from ABSENCE to PRESENT (education) and RAISED to VERIFIED. K.S.A. chapter 22 article 39 now opened and it falsified half the premis…
- **`recycling-notice`** — `edu-no-recycling-notice-ks` — ABSENT — K.S.A. 58-2553(a)(4); K.S.A. 58-2555(c); K.S.A. 12-2035 — no Kansas analog to ORS 90.318 (tenant near 'recycl' = 0 hits; solid waste near tenant/dwelling/landlord = 0 hits). W…
- **`redemption`** — `edu-redemption-ks` — PRESENT — K.S.A. 60-2414(a); K.S.A. 60-1011; K.S.A. 79-2401a — as a tenancy right (redeem near tenant/tenancy, redemption near eviction, and the reverse order all return 0 hits; Kansas's cure windows…
- **`religious-cultural-display`** — `edu-no-religious-display-rule-ks` — ABSENT — K.S.A. 60-5301; K.S.A. 60-5321; K.S.A. 44-1016 — Religious/cultural display - ABSENT as a tenant right ('mezuzah|doorpost|doorframe' = 0 hits). The Kansas pres…
- **`rent-concession`** — `edu-rent-concession-ks`, `TAG:rent-concession-wi` — MIXED, tagged — K.S.A. 58-2549; K.S.A. 58-2545(a); K.S.A. 58-2570 — the shared clause rent-concession-wi with KS (18th state) and added one education . Kansas has…
- **`rent-demand-bar`** — `edu-no-rent-demand-bar-ks` — ABSENT — K.S.A. 58-2560; K.S.A. 58-2562(a)(2); K.S.A. 58-2561 — Kansas never forbids demanding or collecting rent for a defective unit ('may not/shall not demand or collect rent' = 0 hit…
- **`rent-escalation`** — `edu-rent-escalation-ks`, `TAG:rent-increase-midterm-ky`, `TAG:rent-escalation-la` — MIXED, tagged — K.S.A. 58-2545(a); K.S.A. 58-2572(c) — two shared clauses (rent-increase-midterm-ky and rent-escalation-la) with KS…
- **`rent-increase-notice`** — `edu-rent-increase-notice-ks` — ABSENT — K.S.A. 58-2570(b); K.S.A. 58-25,109(f); K.S.A. 58-2556 — no Kansas rent-increase notice statute, cap or frequency limit; a periodic rent change rides on the K.S.A. 58-257…
- **`rent-installments`** — `edu-rent-installments-ks`, `TAG:rent-installments-or` — MIXED, tagged — K.S.A. 58-2545(c); K.S.A. 58-2564(b) — the shared clause rent-installments-or with KS (18th state) and added one education . Kansas has no in…
- **`rent-receipts`** — `edu-no-rent-receipt-duty-ks` — ABSENT — K.S.A. 50-687; K.S.A. 50-681(6); K.S.A. 58-2545(c) — no Kansas duty to give a rent receipt, in cash or otherwise, and no presumption that a later receipt proves earlier payment…
- **`rent-reporting`** — `edu-no-rent-reporting-rule-ks` — ABSENT — L. 2026, ch. 152; K.S.A. 50-701; L. 2026, ch. 132 — no Kansas rent-reporting mandate, offer duty, state programme or late-rent notification rule (both targeted patterns = 0 h…
- **`rent-tax`** — `edu-rent-tax-ks` — PRESENT — K.S.A. 12-1696(b); L. 2026, ch. 96; K.S.A. 12-1697 — but not on ordinary rent: no Kansas tax on residential rent; the transient guest tax reaches only a person occupying a room in a hotel, mote…
- **`rental-inspection`** — `edu-rental-inspection-ks` — PRESENT — K.S.A. 12-16,138(a); K.S.A. 12-16,226(b); L. 2026, ch. 76 — as a preemption, not a programme: K.S.A. 12-16,138(a) bars any city or county residential property licensing ordina…
- **`repair-cost-termination`** — `edu-no-repair-cost-termination-ks` — ABSENT — K.S.A. 58-2553(a); K.S.A. 58-2562(a) — no Kansas analog to W.S. 1-21-1203(d); 'substitute housing' and 'untenantable' both 0 hits. K.S.A. 58-2553(a) names its ow…
- **`repair-escrow-exemption-notice`** — `edu-no-repair-escrow-exemption-ks` — ABSENT — K.S.A. 58-2559(a) — structurally: Kansas has no rent escrow and no repair-and-deduct, so there is nothing for a small-landlord notice to switch off ('thre…
- **`required-disclosures`** — `edu-required-disclosures-ks` — PRESENT — K.S.A. 58-2551(a); K.S.A. 58-2548; K.S.A. 58-30,106(d)(1) — but minimal: K.S.A. 58-2551(a) is the only Kansas lease disclosure (manager and owner name and address, in wr…
- **`required-fees`** — `TAG:fees-and-charges-vi` — tagged — K.S.A. 58-2545(a) — fees-and-charges-vi (VI;MP -> VI;MP;KS). No Kansas statute requires fees to be listed in the lease and none sets a notice period for adding one mid-term ('fees,…
- **`rights-responsibilities-guide`** — `edu-no-rights-guide-duty-ks` — ABSENT — K.S.A. 58-25,105(f) — Rights and responsibilities guide - ABSENT (education), RECOMMENDED: no Kansas state-published tenant guide, no delivery duty, no acknowled…
- **`sanitary-code-variance`** — `edu-no-code-variance-notice-ks` — ABSENT — K.S.A. 19-3701; K.S.A. 31-136 — RECOMMENDED, NEEDS_REVIEW for the K.A.R. layer only: Kansas has no state sanitary code and the county sanitary code act K.S.A. 19-370…
- **`scope`** — `edu-landlord-tenant-scope-ks` — PRESENT — L. 2026, ch. 56 — RECOMMENDED: three regimes mapped - KRLTA 58-2540 et seq. (statewide, district court under the limited actions code, 58-2542), the still-live pre-1975 block 58-2501…
- **`seasonal-tenancy`** — `edu-seasonal-rentals-ks` — PRESENT — K.S.A. 36-501(b)(1); L. 2026, ch. 96 — CONDITIONAL: no Kansas seasonal-tenancy rule at all ('seasonal' 36 hits, none landlord-tenant; 'short-term rental' 14 hits in only the two…
- **`security-deposit-holding`** — `edu-deposit-holding-ks` — ABSENT — K.S.A. 58-25,108(b); L. 2026, ch. 152 — RECOMMENDED: Kansas imposes NO holding duty on a residential deposit - no escrow, trust account, separate account, federally insure…
- **`security-deposit-nonwaiver`** — `edu-deposit-nonwaiver-ks` — PRESENT — K.S.A. 58-2547(a)(1) — PROHIBITED: Kansas has NO deposit-specific nonwaiver clause ('may not be waived|shall not be waived' = 3 hits in 3 sections, none in the KRLTA,…
- **`security-deposit-standards`** — `edu-no-deposit-standards-rule-ks` — ABSENT — K.S.A. 44-1016(b); L. 2026, ch. 152 — RECOMMENDED: no Kansas posting or disclosure duty for deposit-calculation standards and no unit-count trigger ('adjoining…
- **`security-devices`** — `edu-no-security-device-rule-ks` — ABSENT — K.S.A. 58-2553(a)(1); K.S.A. 31-161 — RECOMMENDED: FOUR literal zeros corpus-wide including both session-law years - 'dead ?bolt|deadbolt' 0, 'peephole|door viewer' 0, 're…
- **`senior-housing-work-card`** — `edu-no-senior-housing-work-card-ks` — ABSENT — K.S.A. 44-1018(c)(1) — RECOMMENDED: 'work card' = 0 hits and 'employee ... fingerprint|criminal' = 0 hits corpus-wide including both session-law years, so no a…
- **`servicemember-rights`** — `edu-servicemember-rights-ks` — PRESENT — K.S.A. 58-2570(b); K.S.A. 58-2504; K.S.A. 60-203(c) — CONDITIONAL: Kansas has NO state SCRA and no servicemember lease-termination right. Chapter 48 searched in full as…
- **`sex-offender-disclosure`** — `edu-no-sex-offender-disclosure-ks` — ABSENT — K.S.A. 58-30,106(d)(1); K.S.A. 12-16,123; L. 2026, ch. 105 — RECOMMENDED: no Kansas lease registry notice and no landlord disclosure duty; the Kansas Offender Re…
- **`sex-offender-occupancy`** — `edu-sex-offender-occupancy-ks` — PRESENT — K.S.A. 22-4913(a); L. 2026, ch. 152; L. 2026, ch. 105 — RECOMMENDED: AFFIRMATIVE PREEMPTION, not an absence. K.S.A. 22-4913(a) prohibits cities and counties, on and…
- **`sfr-occupancy-disclosure`** — `edu-no-sfr-occupancy-disclosure-ks` — ABSENT — K.S.A. 58-2543(n); K.S.A. 21-5808; L. 2026, ch. 56 — RECOMMENDED: no Kansas single-family occupancy notice and no placement or relative-font rule. Two literal…
- **`shoreline-access-disclosure`** — `edu-no-shoreline-disclosure-ks` — ABSENT — K.S.A. 58-3201 — RECOMMENDED: 'shoreline|shorefront|shore of' = 0 hits corpus-wide including both session-law years, so no analogue to the new R.I. Gen. Laws 34…
- **`showing-notice-waiver`** — `edu-showing-notice-waiver-ks`, `TAG:showing-notice-la` — MIXED, tagged — K.S.A. 58-2557(a); K.S.A. 58-2547(a)(1) — TAGGED showing-notice-la (LA;AR;MS;VI;AS;MP -> +KS) and added edu-showing-notice-waiver-ks. Tw…
- **`shutdown-rent-protection`** — `edu-no-shutdown-protection-ks` — ABSENT — K.S.A. 48-283; K.S.A. 61-3806(c); L. 2026, ch. 132 — RECOMMENDED: no Kansas rent-timing or eviction protection for a shutdown-affected tenant, so no analogue to NRS…
- **`single-family-zone-lease-limit`** — `edu-no-single-family-zone-lease-limit-ks` — ABSENT — L. 2026, ch. 76; K.S.A. 12-758; K.S.A. 12-741(a) — RECOMMENDED: 'single.family (zone|zoning|district)' = 0 hits, so no analogue to KRS 383.199; 'ow…
- **`smart-access`** — `edu-no-smart-access-law-ks` — ABSENT — K.S.A. 21-6101; L. 2026, ch. 114 — on the subject, PRESENT on the constraint (education), CONSTRAINED: no Kansas smart-lock, keypad, fob, biometric or app-entry statute and no bio…
- **`smoke-drift-waiver`** — `edu-smoke-common-areas-no-drift-waiver-ks` — PRESENT — K.S.A. 21-6110(a); K.S.A. 58-2547(a)(4); K.S.A. 21-6112 — REQUIRED: the Kansas gap the brief flagged is now captured. K.S.A. 21-6110(a) makes it unlawful 'wi…
- **`social-security-defense`** — `edu-no-benefit-delay-defense-ks` — ABSENT — K.S.A. 61-3807(b); L. 2026, ch. 132 — no Kansas benefit-delay eviction defense; K.S.A. 61-3807(b) conditions any tenant continuance on a bond, and the only new con…
- **`special-district-representation`** — `edu-no-special-district-statement-ks` — ABSENT — K.S.A. 12-6a — no Kansas lease-statement duty; special assessments are a special tax on the owner's land under K.S.A. 12-6a10 and a CID sales tax unde…
- **`sprinkler-disclosure`** — `edu-no-sprinkler-disclosure-ks` — ABSENT — K.S.A. 12-16,219 — no Kansas sprinkler disclosure of any kind; the only sprinkler statute, K.S.A. 12-16,219, bars municipal mandates and only for 1-2 unit dwellings an…
- **`statute-of-frauds-lease-term`** — `edu-statute-of-frauds-lease-ks` — PRESENT — K.S.A. 33-105 — K.S.A. 33-105 (leases exceeding one year must be in writing, signed, agent's authority in writing) and 33-106; a failed writing leaves a tenan…
- **`statutory-caps`** — `edu-statutory-caps-ks` — PRESENT — K.S.A. 58-2550(a); K.S.A. 17-2337; K.S.A. 58-2570(c) — at-a-glance  (deposit 1/1.5/+0.5 month 58-2550(a); 1.5x penalties 58-2550(c), 58-2560, 58-2563, 58-2570(c); $30 NSF 60-2610(g)…
- **`steam-radiator-covers`** — `edu-no-radiator-cover-rule-ks` — ABSENT — K.S.A. 58-2553(a)(1) — the word 'radiator' does not occur in Kansas law (2 hits, both 'irradiator' in 48-1606); only K.S.A. 58-2553(a)(1) and (a)(3) apply. Row edu-no-…
- **`stigmatized-property`** — `edu-no-stigmatized-property-rule-ks` — ABSENT — K.S.A. 58-30,106(d)(1) — no Kansas stigma/psychologically-impacted statute and no immunity either way ('psychologically impacted' and 'stigmatiz' both 0 hits; 'su…
- **`stove-refrigerator`** — `edu-no-stove-refrigerator-duty-ks` — ABSENT — K.S.A. 58-2543(l); L. 2026, ch. 99 — K.S.A. 58-2543(l) names 'a refrigerator, stove and sink' only to define a major kitchen facility for the roomer classification, w…
- **`student-housing`** — `edu-no-student-housing-rule-ks` — ABSENT — K.S.A. 58-2541(a) — no Kansas student-housing licence, certification or special rule; students are ordinary KRLTA tenants. K.S.A. 58-2541(a), (c) and (d) take institutional…
- **`subsidized-inspection-refusal`** — `edu-no-subsidized-inspection-rule-ks` — ABSENT — L. 2026, ch. 152; K.S.A. 58-2557 — with affirmative legislative refusal: L. 2026, ch. 152, s 1(a)(1) and s 1(b) bar and void local voucher-acceptance ma…
- **`subsidy-habitability-proration`** — `edu-no-subsidy-proration-rule-ks` — ABSENT — K.S.A. 58-2562(a)(2) — only the general K.S.A. 58-2562(a)(2) casualty proration applies, and its 'tenant's liability for rent' / 'fair rental value of the…
- **`subsidy-late-fee`** — `edu-no-subsidy-late-fee-rule-ks` — ABSENT — K.S.A. 58-2544; L. 2026, ch. 152 — no Kansas subsidy late-fee rule and no residential late-fee cap at all; the only constraint is unconscionability under K.S.A. 58-2544,…
- **`substandard-property-receivership`** — `edu-no-substandard-property-receivership-ks` — PRESENT — K.S.A. 12-1750 — PRESENT/ABSENT: no Kansas receivership for an occupied rental ('collect the rents' 0 hits); K.S.A. 12-1750 to 12-1755 give…
- **`tax-escalation`** — `edu-tax-escalation-ks`, `TAG:tax-insurance-escalation-la` — MIXED, tagged — K.S.A. 58-2545(a) — tagged the shared clause tax-insurance-escalation-la with KS (lawful under K.S.A. 58-2545(a), not a 58-2547(a) prohibite…
- **`telecom-access`** — `edu-telecom-access-ks` — PRESENT — K.S.A. 58-2553(a)(5); K.S.A. 12-2023 — and it corrects the packet: K.S.A. 58-2553(a)(5)'s last sentence bars a landlord from interfering with or refusing access or service by 'a com…
- **`tenancy-at-will`** — `edu-tenancy-at-will-ks` — PRESENT — K.S.A. 58-2501 — K.S.A. 58-2501 presumes a possessor with the owner's assent is a tenant at will, but for a HOME the KRLTA governs -- 58-2545(d) makes an indefinite tenancy week-t…
- **`tenant-bankruptcy`** — `edu-no-tenant-bankruptcy-rule-ks` — ABSENT — K.S.A. 17-6913; K.S.A. 60-2312; K.S.A. 60-2301 — no Kansas tenancy-specific bankruptcy rule, and Kansas has no URLTA supplementary-principles section at all ('general p…
- **`tenant-confidential-information`** — `edu-tenant-confidential-information-ks` — ABSENT — K.S.A. 50-7a; L. 2026, ch. 114; L. 2026, ch. 132 — as to any landlord disclosure ban and any consumer data-privacy act ('reasonable security procedu…
- **`tenant-display-rights`** — `edu-tenant-display-rights-ks` — PRESENT — K.S.A. 58-3820; K.S.A. 58-4617(d) — ABSENT (landlord side): K.S.A. 58-3820 voids a restrictive covenant barring political yard signs under six square feet from 45 days…
- **`tenant-employee-housing`** — `employee-housing-occupancy-ks`, `edu-employee-housing-ks` — PRESENT — K.S.A. 58-2541(e); K.S.A. 58-2504 — _CLAUSE: K.S.A. 58-2541(e) excludes occupancy by a landlord's employee whose right to occupy is condi…
- **`tenant-forward-proceedings`** — `edu-tenant-forward-proceedings-ks`, `TAG:tenant-forward-proceedings-ca` — MIXED, tagged — K.S.A. 58-2514 — forward duty ABSENT (battery 0 on three patterns, control clean); attornment PRESENT at K.S.A. 58…
- **`tenant-insurance-claims`** — `edu-no-tenant-insurance-claim-rule-ks` — ABSENT — K.S.A. 58-2547(a)(1) — (no Kansas rule on claiming against a tenant's policy, no anti-subrogation rule); K.S.A. 58-2547(a)(1) and (a)(4) are the operative li…
- **`tenant-portal`** — `edu-tenant-portal-ks` — PRESENT — K.S.A. 16-1605(a) — no Kansas portal statute; answer built on the Kansas UETA (K.S.A. 16-1605(a)-(d),(f), 16-1607, 16-1603) plus the 58-2510 service rule and 58-2545(c). Added edu-ten…
- **`tenant-records`** — `edu-tenant-records-ks` — PRESENT — K.S.A. 50-6,139b — no rent-ledger, records-access or retention duty (battery 0 on both patterns); PRESENT duty to protect and securely destroy personal information at K.S.A. 50-6,13…
- **`tenant-repair-remedies`** — `edu-tenant-repair-remedies-ks` — PRESENT — K.S.A. 58-2561(a); L. 2026, ch. 99 — no repair-and-deduct (battery 0), no withholding, no escrow; the only rent-into-court routes are judicial (K.S.A. 58-2561(a), 61…
- **`tenant-right-to-organize`** — `edu-tenant-right-to-organize-ks` — PRESENT — K.S.A. 58-2572(a)(3) — the packet's absence claim is DISPROVEN. K.S.A. 58-2572(a)(3) protects a tenant who 'has organized or become a member of a tenants' union…
- **`tenant-rights-statement`** — `edu-no-tenant-rights-statement-ks` — ABSENT — K.S.A. 58-25,105(f) — for ordinary residential tenancies, by proof of contrast: K.S.A. 58-25,105(f) requires the notice in mobile home parks of 5+ homes while th…
- **`tenant-screening`** — `edu-tenant-screening-ks` — PRESENT — K.S.A. 50-724; L. 2026, ch. 152, § 1(a)(2); K.S.A. 44-1016 — no Kansas screening statute (battery: 'rental application' 0, 'criminal history near rent/lease' 0, the only 'tenant…
- **`tenant-statutory-duties`** — `edu-tenant-statutory-duties-ks` — PRESENT — K.S.A. 58-2555(a) — K.S.A. 58-2555(a)-(g), plus 58-2558 and 58-2565(a) outside it. 'facilities and appliances' = 1 hit (58-2555(e) only), confirming the asymmetry…
- **`term-change-notice`** — `edu-term-change-notice-ks` — PRESENT — K.S.A. 58-2570(a); K.S.A. 58-2556 — no Kansas term-change-notice statute (45-hit 'modify/amend lease' pattern screened, all noise); the route is termination and re-letting u…
- **`tpa-exemption-notice`** — `edu-no-tpa-exemption-notice-ks` — ABSENT — K.S.A. 12-16,120; L. 2026, ch. 152; L. 2026, ch. 56 — claim re-derived and CONFIRMED: 'alienable separate from' = 0 hits, no exemption-notice duty, nothing to be exemp…
- **`tpa-notice`** — `edu-no-tpa-notice-ks` — ABSENT — L. 2026, ch. 152, § 1(a)(4); K.S.A. 12-16,120 — claim re-derived and CONFIRMED: 'opportunity to purchase' = 0 hits; the only Kansas mention of a tenant right of first refusal is L. 2026,…
- **`tpa-sunset`** — `edu-no-tenant-law-sunset-ks` — ABSENT — L. 2026, ch. 96 — 'remain in effect only until' and 'is repealed (on|as of)' both 0; 296 'shall expire' hits screened, none in the KRLTA; whole KRLTA unamended and untouched by 202…
- **`translation-duty`** — `edu-translation-duty-ks` — ABSENT — K.S.A. 50-624(b); K.S.A. 50-627(b)(1); K.S.A. 50-640 — ('language other than english|foreign language|non-english' = 0 hits); but the KCPA reaches a residential lease (K.S.A. 50-…
- **`trespass-notice`** — `edu-trespass-notice-ks` — PRESENT — K.S.A. 21-5808(a)(1); K.S.A. 58-2573(b); L. 2026, ch. 56 — K.S.A. 21-5808(a)(1)(A)-(C), class B nonperson misdemeanor; 'guest or invitee' = 0 hits so Kansas has no enumerated defe…
- **`truth-in-renting`** — `edu-no-truth-in-renting-ks` — ABSENT — K.S.A. 58-2570(e); K.S.A. 58-2551 — claim re-derived and CONFIRMED: all five 'truth in renting|lending' hits are truth in LENDING; no lease-content or type-size rule in the KR…
- **`unbundled-parking`** — `edu-unbundled-parking-ks` — PRESENT — K.S.A. 58-2543(j); L. 2026, ch. 152 — _EDUCATION,  (CONSTRAINED). No Kansas unbundling statute ('unbundl' 2 hits corpus-wide, both telecom in 12-2001; 0 hits on 'separately fr…
- **`unpaid-damages-interest`** — `edu-interest-on-unpaid-amounts-ks` — PRESENT — K.S.A. 16-201(a); K.S.A. 16-205(a); K.S.A. 16-207(a) — _EDUCATION,  (CONSTRAINED, NEEDS_REVIEW). K.S.A. 16-201(a) gives 10% a year on 'any money after it become…
- **`usufructuary-lessor`** — `edu-usufructuary-lessor-ks` — PRESENT — K.S.A. 58-503; K.S.A. 58-2517; K.S.A. 58-2202 — _EDUCATION,  (RECOMMENDED, NEEDS_REVIEW). 'usufruct' is a TRUE ZERO corpus-wide (0 hits beside positives 'life estate' 29,…
- **`utility-allowance-cap`** — `utility-allowance-cap-ks` — PRESENT — K.S.A. 58-2547(a)(1); K.S.A. 58-2543(j); K.S.A. 58-2553(a)(5) — _CLAUSE,  (CONSTRAINED, basis CONSTRAINED_TERM, NEEDS_REVIEW for the regulation gap). TAG DECLINED on utili…
- **`utility-apportionment`** — `edu-utility-apportionment-ks` — PRESENT — K.S.A. 58-2553(a)(5); K.S.A. 58-25,127; K.S.A. 12-2723 — _EDUCATION,  (CONSTRAINED). No Kansas RUBS or allocation-formula statute (battery: 'ratio utility|RUBS' 8 hits…
- **`utility-deposit-return`** — `edu-utility-deposit-return-ks` — PRESENT — K.S.A. 58-2543(m); K.S.A. 12-822; K.S.A. 12-808c(d) — _EDUCATION,  (CONSTRAINED, NEEDS_REVIEW for the K.A.R. art. 82-1 gap only). No separate Kansas utility-deposit…
- **`utility-disclosure-attachment`** — `edu-no-utility-disclosure-attachment-ks` — ABSENT — K.S.A. 58-2551; K.S.A. 58-2548; K.S.A. 58-25,127(c) — (RECOMMENDED, VERIFIED). No Kansas utility disclosure attachment, submeter certificate or energ…
- **`utility-disconnection-notice-authorization`** — `edu-no-utility-notice-authorization-ks` — ABSENT — K.S.A. 12-808c(c); K.S.A. 12-3105 — (RECOMMENDED, NEEDS_REVIEW for the K.A.R. art. 82-1 gap only). No Kansas tenant-authorisation mechani…
- **`utility-interruption-submeter`** — `edu-no-submeter-interruption-ks` — PRESENT — K.S.A. 58-2569; K.S.A. 58-25,127 — _EDUCATION,  (PROHIBITED, NEEDS_REVIEW for the undefined scope of 'other essential service' only). Not an absence: K.S.A.…
- **`utility-landlord-account`** — `edu-utility-landlord-account-ks` — PRESENT — K.S.A. 58-2553(a)(5); K.S.A. 12-16,123 — _EDUCATION,  (RECOMMENDED, NEEDS_REVIEW for the K.A.R. art. 82-1 gap only). No Kansas landlord-account scheme: 'customer…
- **`utility-shutoff-statute`** — `edu-utility-shutoff-rules-ks` — PRESENT — K.A.R. 82-1-220; K.S.A. 48-924; K.S.A. 12-808c(a) — _EDUCATION,  (RECOMMENDED, NEEDS_REVIEW for the K.A.R. 82-1-220 et seq. gap only). No Kansas statutory winter mor…
- **`utility-submetering-disclosure`** — `edu-utility-submetering-ks` — PRESENT — K.S.A. 58-25,127; K.S.A. 12-2723 — _EDUCATION,  (CONSTRAINED, VERIFIED). Disproves the packet's '(NONE.)': K.S.A. 58-25,127 is Kansas's water submetering regime…
- **`utility-transfer`** — `edu-no-utility-transfer-cutoff-ks` — ABSENT — K.S.A. 12-541; K.S.A. 58-2569 — (PROHIBITED, VERIFIED). No Kansas transfer-or-cutoff rule (patterns for a tenant-name account and for final billing both returned 0; the…
- **`veterans-incentive`** — `edu-no-veterans-incentive-ks` — ABSENT — K.S.A. 44-1016; L. 2026, ch. 152, § 1(a)(1) — (RECOMMENDED, VERIFIED). No Kansas landlord incentive of any kind for renting to a veteran. Chapter 48 (militia and veterans)…
- **`water-heater-temperature`** — `edu-no-water-heater-rule-ks` — ABSENT — K.S.A. 58-2553(a)(5); K.S.A. 44-915(a)(5); K.S.A. 12-1510(b) — (RECOMMENDED, VERIFIED). No Kansas temperature rule: 'water heater' and 'scald|mixing valve' both ZERO…
- **`waterbed`** — `edu-no-waterbed-rule-ks` — ABSENT — K.S.A. 36-506; K.S.A. 12-2101; K.S.A. 58-2550 — (RECOMMENDED, VERIFIED). Genuine absence, proved with three differently-worded zero patterns plus a non-proximity pattern and a live known…
- **`window-guards`** — `edu-no-window-guard-rule-ks` — ABSENT — K.S.A. 58-2553(a)(1); K.S.A. 12-1510(b); K.S.A. 31-133(a)(3) — (RECOMMENDED, VERIFIED). Genuine absence: 'window guard|window-guard|window stop|window fall' 0 hits, 'fall preven…
- **`written-notice-required`** — `edu-written-notices-ks` — PRESENT — K.S.A. 58-2547(a)(1) — _EDUCATION,  (REQUIRED, VERIFIED). Kansas has no notice-specific anti-downgrade statute but reaches the same result through K.S.A. 58-2547(a)(1)'s n…

---

### §3 — Batteries

Every absence row is backed by a battery run as a single invocation, carrying a nonsense control that must return 0 and a known positive that must return hits, so that control and battery ran in the same batch (SOP rules 19 and 27). The search default is the widest scope: title, body, history and annotations, across all statute, fetched-section, constitution and session-law records.

Listed for every topic whose answer rests on an absence. The full command, every pattern, every hit count and the per-section currency check are preserved verbatim in the answer files at `work/answers/<topic_key>.json`; this is the summary.

## Every battery was replayed against the final index, and the result is clean

This matters more than the table, because a battery is a measurement against the corpus **at a moment in time** and this pass changed its corpus repeatedly: three index repairs, 186 out-of-corpus sections fetched mid-pass, and two tool defaults corrected. A pattern that honestly returned zero when a researcher ran it could return hits by the end.

So all 234 topics' batteries were re-run against the finished index. **Every control came back clean and no battery failed** — 163 replayed with identical counts, and the other 71 differ only in how many hits a *known positive* returns, which is what you expect when the corpus grows. Separately, every one of the **95 patterns a row recorded as returning zero** was re-run on its own: **eight had genuinely drifted** and all eight were opened, judged and corrected (two substantively — see `edu-law-enforcement-cooperation-ks` on K.S.A. 22-3901 to 22-3905, and `edu-no-animal-care-entry-right-ks` on K.S.A. 21-6412). The single remaining zero-to-hit report is `firearms`, and it is an artefact of the detector rather than a defect: the row's recorded zero was for a **proximity** pattern (landlord, tenant, lease or dwelling within 60 characters of "firearm"), which is still zero; the bare term returns 415 hits in 53 sections, as it always did, and the row never claimed otherwise.

An earlier replay reported 18 batteries as CONTROL DIRTY. **That was the replay tool, not the research.** The `command` field is free text a researcher typed, and three habits make it unrunnable — two invocations joined by the bare word `THEN`, trailing narrative prose, and unbalanced quotes — so `ksearch` exited with empty output and the tool read that as a dirty control. Each of those files records `control_clean: true` and a clean structured `patterns` list, which is the machine-readable record. The replay now rebuilds the invocation from those fields and treats a non-zero exit as a failure rather than as a finding. Had the first output been trusted, this log would have reported 18 invalid batteries that were never invalid.

| topic | patterns | control | known positive |
|---|---|---|---|
| `adverse-proceeding-notice` | `attornment\|attorn\b`, `proceeding to recover (the )?(real )?p`, `adverse (claim\|proceeding\|party\|pos`, `notify the (landlord\|lessor)\|inform `, `tax sale\|redemption`, `foreclos` (+1) | clean | `foreclos` → 261 hits |
| `alarm-tampering-fee` | `tamper`, `smoke detector\|smoke alarm`, `carbon monoxide`, `liquidated damages\|penalty clause\|st`, `disable\|disconnect\|render inoperativ`, `fire alarm` | clean | `smoke detector\|smoke alarm` → 30 hits |
| `association-obligations-disclosure` | `common interest community`, `declarant`, `unit owner`, `bylaws`, `tenant`, `lease (of\|a) (the )?unit\|leases? a u` (+6) | clean | `unit owner` → 111 hits |
| `automatic-renewal` | `automatic(ally)? renew\|auto-?renew`, `negative option\|continuous service`, `renewal of (the )?(lease\|rental agree`, `holding over\|holds? over\|holdover`, `from year to year\|year-to-year`, `boldface\|bold-?face\|conspicuous` | clean | `holding over\|holds? over\|hol` → 36 hits |
| `balcony-inspection` | `balcon`, `exterior elevated`, `railing\|guardrail\|handrail`, `(deck\|porch\|stairway\|stairs)\b`, `periodic inspection\|inspected at leas`, `fire escape` | clean | `periodic inspection\|inspected` → 8 hits |
| `bed-bug-cooperation` | `bed ?bug`, `infestation\|vermin\|rodent`, `pest(icide)?`, `exterminat`, `insect`, `necessary or agreed (repairs\|services` | clean | `pest(icide)?` → 63 hits |
| `carpet-cleaning` | `carpet`, `professional(ly)? clean`, `wear and tear`, `clean and safe`, `security deposit`, `itemized` | clean | `security deposit` → 74 hits |
| `certificate-of-occupancy-disclosure` | `certificate of occupancy`, `occupancy permit`, `rental (license\|licensing\|registrati`, `building permit`, `unlawful to occupy\|shall not be occup` | clean | `building permit` → 33 hits |
| `cold-weather-vacate-notice` | `cold weather\|cold-weather`, `freez`, `extended absence`, `November\|April 15`, `vacate the premises`, `winter` | clean | `extended absence` → 7 hits |
| `collection-fee` | `collection agency\|collection agencies`, `debt collect`, `collection (fee\|cost\|charge)`, `cost of collection\|costs of collectio`, `service charge`, `actual damages` | clean | `actual damages` → 80 hits |
| `communal-land-lease-approval` | `(tribal\|tribe\|Indian)`, `(communal land\|native land\|trust lan`, `(reservation of the\|Indian reservatio`, `(approval of the governor\|governor.{0`, `rental agreement` | clean | `rental agreement` → 230 hits |
| `condemned-premises-rent-bar` | `(unfit for human habitation\|unfit for`, `(order.{0,40}vacat\|vacate the premise`, `(condemn\|demolition\|demolish\|razing`, `(may not (collect\|accept\|demand\|rec`, `(dangerous\|unsafe).{0,30}(structure\|`, `fire or casualty` | clean | `fire or casualty` → 3 hits |
| `confirmed-absences-habitability` | `(repair and deduct\|deduct.{0,40}(repa`, `(degrees fahrenheit\|degrees f\|minimu`, `(escrow\|withhold).{0,40}rent`, `(essential service\|air.?condition)`, `(imminent\|imminently dangerous)`, `habitability` | clean | `habitability` → 18 hits |
| `confirmed-absences-misc` | `bankrupt`, `(point type\|type size\|typeface\|bold`, `(initialed\|initialing\|separately ini`, `(translat\|Spanish\|language other tha`, `dwelling unit` | clean | `dwelling unit` → 78 hits |
| `confirmed-absences-outside-title` | `(receipt for rent\|rent receipt\|writt`, `(rental registration\|rental licen\|re`, `(right of first refusal\|opportunity t`, `(licen[sc].{0,45}(action for possessio`, `forcible detainer` | clean | `forcible detainer` → 15 hits |
| `conversion-notice` | `(convert\|conversion).{0,60}(condomini`, `(condominium\|cooperative).{0,60}(conv`, `(right of first refusal\|offer to sell`, `(transient use\|hotel use\|demolish.{0`, `apartment owner` | clean | `apartment owner` → 73 hits |
| `defective-drywall-disclosure` | `(drywall\|wallboard\|gypsum\|plasterbo`, `(sulfur\|sulphur\|corrosive\|hydrogen `, `(seller\|landlord\|lessor).{0,50}discl`, `(defect\|latent defect).{0,40}(disclos`, `disclose to the tenant` | clean | `(seller\|landlord\|lessor).{0,` → 18 hits |
| `deposit-cost-schedule` | `(carpet clean\|cleaning fee\|cleaning `, `(nonrefundable\|non-refundable\|not re`, `(schedule of (charge\|fee\|deduction)\`, `itemiz`, `security deposit` | clean | `security deposit` → 74 hits |
| `deposit-surrender-notice` | `(demand by the tenant\|tenant.{0,20}de`, `(forwarding address\|last known addres`, `(notice of intent to vacate\|advance n`, `(delivery of possession)`, `termination of the tenancy` | clean | `termination of the tenancy` → 13 hits |
| `disaster-displaced-guests` | `(displaced\|displacement).{0,50}(disas`, `(guest\|occupant).{0,45}(disaster\|eme`, `(state of disaster emergency\|disaster`, `(transient guest\|hotel\|motel\|roomin`, `squatter` | clean | `(state of disaster emergency\|` → 108 hits |
| `drug-free-housing-addendum` | `(drug.?free\|drug and alcohol free\|cr`, `(controlled substance\|drug parapherna`, `(abate\|nuisance).{0,45}(drug\|control`, `(addendum\|addenda)`, `criminal activity` | clean | `criminal activity` → 16 hits |
| `dv-confidentiality` | `(confidential\|privacy\|shall not disc`, `(victim\|protected person).{0,60}(conf`, `(address confidentiality\|safe at home`, `protection from abuse`, `protected person` | clean | `protected person` → 23 hits |
| `dv-deposit-timing` | `(security deposit\|deposit).{0,80}(pro`, `(protected person\|domestic violence\|`, `(lock\|rekey\|re.key).{0,45}(change\|r`, `legally allowable charges`, `termination fee` | clean | `termination fee` → 3 hits |
| `dv-lockchange` | `(chang(e\|ing\|ed)\|re-?key\|rekey\|re`, `(dead ?bolt\|deadbolt\|lock and key\|l`, `domestic violence`, `protected person` | clean | `protected person` → 23 hits |
| `electric-submetering-disclosure` | `(sub-?meter\|submetering\|separate met`, `(landlord\|lessor\|tenant\|dwelling un`, `(resell\|resale\|re-?bill\|re-?sale).{`, `electricity` | clean | `electricity` → 66 hits |
| `emergency-contact` | `(emergency\|24-hour\|twenty-four hour)`, `(next of kin\|person to contact\|in ca`, `(landlord\|lessor\|owner\|agent).{0,80`, `emergency` | clean | `emergency` → 1447 hits |
| `eminent-domain` | `(eminent domain\|condemn)`, `(eminent domain\|condemnation\|condemn`, `apportion\w*.{0,130}(award\|damages\|c`, `(relocation (payment\|assistance\|expe` | clean | `(eminent domain\|condemn)` → 415 hits |
| `energy-data-release` | `(usage\|consumption) (data\|informatio`, `benchmark`, `(release\|disclos\w+\|authoriz\w+\|con`, `energy audit` | clean | `(usage\|consumption) (data\|in` → 2 hits |
| `ev-charging-end-of-tenancy` | `(remov\w+\|surrender\|restor\w+).{0,15`, `trade fixture`, `(tenant).{0,120}(may remove\|shall rem`, `fixture` | clean | `fixture` → 49 hits |
| `ev-charging-requirements` | `(electric vehicle\|electric-vehicle)`, `charging (station\|system\|equipment\|`, `(charging\|charger).{0,160}(tenant\|le`, `fast charging` | clean | `(electric vehicle\|electric-ve` → 27 hits |
| `ev-charging-shared-area` | `(common area\|shared\|parking area\|pa`, `(reserve\|reserved\|assign\w*).{0,80}p`, `(parking space\|parking area\|parking `, `common areas` | clean | `common areas` → 76 hits |
| `eviction-hardship-stay` | `(stay\|stayed\|continuance\|postpone\w`, `(hardship\|good cause\|extreme).{0,120`, `supersedeas\|appeal bond`, `stay of (proceedings\|execution)` | clean | `supersedeas\|appeal bond` → 112 hits |
| `eviction-penalty-clause-ban` | `(eviction\|possession\|notice to (quit`, `(penalty\|liquidated damages).{0,120}(`, `prohibited terms\|no rental agreement `, `docket fee` | clean | `docket fee` → 201 hits |
| `expedited-deposit-disposition` | `expedit`, `(administrative\|processing\|handling\`, `(security deposit).{0,140}(fee\|charge`, `security deposit` | clean | `security deposit` → 81 hits |
| `farmland-hunting-rights` | `(hunt\|hunting\|hunter\|fishing\|trapp`, `(hunt\|fish)\w*.{0,170}(lease\|tenant\`, `agricultural purposes\|farm lands\|pas`, `32-1013` | clean | `(hunt\|hunting\|hunter\|fishin` → 203 hits |
| `fee-in-lieu-of-deposit` | `(in lieu of\|instead of).{0,80}(deposi`, `(non-?refundable\|nonrefundable)`, `(surety bond\|guarantee\|guaranty\|ins`, `however denominated` | clean | `however denominated` → 6 hits |
| `fee-transparency` | `all-in pric\|total price\|total monthl`, `nonoptional fee\|non-optional fee\|man`, `advertis[a-z]* (the )?(rent\|rental\|d`, `(disclos[a-z]{0,4}) [a-z ]{0,30}fee`, `single (figure\|amount\|price)`, `junk fee\|hidden fee` (+1) | clean | `deceptive act` → 94 hits |
| `fee-unprovided-service` | `services? (that are \|which are )?not `, `fail[a-z]* to (provide\|supply\|furnis`, `charge [a-z ]{0,20}for (any \|a \|an )`, `without intent to sell`, `surcharge`, `unconscionab` | clean | `unconscionab` → 145 hits |
| `firearms` | `firearm`, `personal and family protection act`, `concealed (carry\|handgun\|weapon)`, `locked[,]? privately[- ]owned motor ve`, `weapon`, `(landlord\|tenant\|lease\|rental\|dwel` (+3) | clean | `firearm` → 398 hits |
| `flood-disclosure` | `flood`, `special flood hazard`, `floodplain\|flood plain`, `material defect`, `duty to disclose\|shall disclose`, `property manager\|property management` (+1) | clean | `duty to disclose\|shall disclo` → 63 hits |
| `foreclosure-disclosure` | `foreclos[a-z]*[a-z ,;]{0,60}(tenant\|l`, `(tenant\|lessee\|lease)[a-z ,;]{0,60}f`, `notice of default`, `protecting tenants at foreclosure`, `foreclosure` | clean | `foreclosure` → 239 hits |
| `good-cause-notice` | `good cause[a-z ,;]{0,50}(evict\|termin`, `just cause`, `without cause\|for cause[a-z ,;]{0,30}`, `nonrenewal\|non-renewal\|refusal to re`, `terminate a month-to-month tenancy` | clean | `terminate a month-to-month ten` → 1 hits |
| `government-fee-reimbursement` | `rental (registration\|license\|licensi`, `registration[a-z ,;]{0,30}(rental\|dwe`, `pass[- ]?through\|passed on to the ten`, `occupation[a-z]* (tax\|license\|fee)`, `may charge [a-z ]{0,20}fee` | clean | `may charge [a-z ]{0,20}fee` → 25 hits |
| `governmental-fines` | `(fine\|penalty\|citation)[a-z ,;]{0,60`, `(tenant\|lessee\|occupant)[a-z ,;]{0,6`, `abat[a-z]* (a \|the )?nuisance`, `civil penalty`, `indemnif` | clean | `indemnif` → 82 hits |
| `guarantor-renewal` | `guarant(y\|ies\|or\|ors)`, `surety\|suretyship`, `answer for the debt`, `promise to answer`, `joint and several` | clean | `guarant(y\|ies\|or\|ors)` → 70 hits |
| `guest-rights` | `guest[a-z ,;]{0,60}(tenant\|lessee\|dw`, `(tenant\|lessee)[a-z ,;]{0,60}guest`, `reasonable number of guests\|guest fee`, `visitor\|invitee`, `guest` | clean | `guest` → 310 hits |
| `habitability-presumption` | `presum[a-z]*[a-z ,;]{0,50}(landlord\|t`, `rebuttable presumption`, `prima facie`, `burden of (proof\|proving)`, `presumption` | clean | `presumption` → 268 hits |
| `habitability-statement` | `fit for human habitation\|fit for habi`, `(lease\|rental agreement) shall (inclu`, `implied warranty`, `deliver possession`, `habitability`, `implied warranty (of )?(habitability\|` | clean | `habitability` → 19 hits |
| `habitability-waiver` | `waive or (to )?forego`, `waiv[a-z]*[a-z ,;]{0,50}(right\|remed\`, `void and unenforceable\|shall be void\`, `against public policy`, `unenforceable` | clean | `unenforceable` → 132 hits |
| `hazardous-contamination-disclosure` | `environmental (use\|covenant\|restrict`, `contaminat[a-z]*[a-z ,;]{0,50}(disclos`, `brownfield\|superfund\|CERCLIS\|compre`, `activity and use limitation\|use limit`, `hazardous (substance\|material\|waste)`, `environmental use control` | clean | `hazardous (substance\|material` → 48 hits |
| `hoa` | `common interest communit`, `homeowner'?s? association`, `restrictive covenant`, `unit owners association`, `declaration or bylaws`, `lease.{0,30}approv\|approv.{0,30}lease` (+1) | clean | `security deposit` → 81 hits |
| `home-business` | `home.based business\|home.occupation\|`, `residential purposes`, `dwelling unit only as a dwelling`, `day care home`, `family day care`, `security deposit` | clean | `security deposit` → 81 hits |
| `infirmity-termination` | `terminate .{0,60}(rental agreement\|le`, `nursing (home\|facility)\|assisted liv`, `physician\|licensed practitioner`, `no longer able to live independently\|`, `60 years of age or older`, `security deposit` | clean | `security deposit` → 81 hits |
| `informal-dispute-resolution` | `dispute resolution`, `mediation`, `shall consider mediation`, `informal`, `arbitration` | clean | `mediation` → 176 hits |
| `inspection-condemnation-disclosure` | `unfit for human habitation`, `condemn`, `notice of violation\|order to (repair\`, `placard`, `disclose.{0,80}(violation\|order\|cond`, `security deposit` | clean | `security deposit` → 81 hits |
| `inspection-notice-penalty` | `inventory`, `walk.?through`, `move.?out inspection\|move.?in inspect`, `forfeit.{0,60}(deposit\|right to)`, `inspection.{0,40}notice`, `security deposit` | clean | `security deposit` → 81 hits |
| `key-control-policy` | `master key\|key control\|dwelling unit`, `\bkeys?\b.{0,60}(tenant\|dwelling\|loc`, `background check\|criminal history rec`, `lock`, `security deposit` | clean | `security deposit` → 81 hits |
| `landlord-liability-insurance` | `liability insurance`, `shall (carry\|maintain\|obtain).{0,40}`, `certificate of insurance`, `insurance.{0,60}(landlord\|lessor\|ren`, `security deposit` | clean | `security deposit` → 81 hits |
| `landlord-registration` | `rental licens\|rental registration\|re`, `residential property licensing`, `business license\|occupation tax`, `resident agent\|statutory agent`, `security deposit` | clean | `security deposit` → 81 hits |
| `late-fee-limit` | `late (fee\|charge\|payment charge)`, `delinquency charge`, `shall not exceed.{0,60}(fee\|charge)`, `grace period`, `unconscionable`, `security deposit` | clean | `unconscionable` → 120 hits |
| `lead-state-notices` | `lead hazard`, `blood lead`, `pamphlet\|brochure`, `notify.{0,60}(occupant\|tenant).{0,60}`, `elevated blood`, `security deposit` | clean | `security deposit` → 81 hits |
| `lease-content-requirements` | `rental agreement shall (be in writing\`, `in writing.{0,60}signed by`, `shall contain the following\|shall inc`, `boldface\|bold ?face\|ten.point\|10.po`, `written rental agreement`, `security deposit` | clean | `security deposit` → 81 hits |
| `lease-copy` | `copy of the (lease\|rental agreement)`, `furnish.{0,40}copy\|provide.{0,40}copy`, `shall be given a copy\|given a copy`, `duplicate`, `executed copy\|fully executed`, `security deposit` | clean | `security deposit` → 81 hits |
| `lease-notice-initial-requirement` | `initialed\|initialled`, `shall initial\|must initial\|place .{0`, `tenant'?s? initials\|lessee'?s? initia`, `separate (written )?(acknowledg\|signa`, `rental agreement` | clean | `rental agreement` → 294 hits |
| `lease-type-parity` | `more burdensome`, `month-to-month\|month to month`, `definite term\|fixed term\|term of the`, `same (terms\|rate\|rent)[^.]{0,60}(ten`, `rent control\|limit the amount of rent` | clean | `month-to-month\|month to month` → 9 hits |
| `lease-type-size` | `(ten\|10\|eight\|8\|twelve\|12\|fourte`, `point type\|points in depth\|size of t`, `boldface\|bold-face\|bold face\|bold t`, `clear and legible\|legibl`, `conspicuous` | clean | `conspicuous` → 89 hits |
| `liquidated-damages` | `liquidated damages`, `penalty\|penalties`, `stipulated damages\|agreed damages\|da`, `actual damages`, `reasonable efforts to rent\|mitigat` | clean | `actual damages` → 81 hits |
| `lockout-for-rent-delinquency` | `change the (door )?locks?\|lock[- ]?ou`, `exclude the tenant\|excludes? a tenant`, `willful diminution of services\|essent`, `delinquent in paying\|delinquency in r`, `actual damages` | clean | `actual damages` → 81 hits |
| `meth-disclosure` | `methamphetamine`, `clandestine (drug )?lab\|drug laborato`, `decontaminat\|remediat`, `material defect\|known.{0,30}defect`, `disclos` | clean | `disclos` → 1571 hits |
| `military-air-zone-disclosure` | `military (installation\|base\|airport\`, `Fort Riley\|Fort Leavenworth\|McConnel`, `airport zoning\|avigation\|flight path`, `military affairs\|armed forces`, `disclos` | clean | `disclos` → 1571 hits |
| `minor-tenant-filing` | `age of majority\|period of minority\|e`, `minor.{0,60}(defendant\|party\|sued\|a`, `emancipat`, `disaffirm\|voidable.{0,40}minor\|contr`, `rental agreement` | clean | `rental agreement` → 294 hits |
| `nonrefundable-deposit-notice` | `nonrefundable\|non-refundable\|not be `, `however denominated\|condition precede`, `pet (fee\|deposit)\|cleaning fee\|admi`, `forfeit`, `security deposit` | clean | `security deposit` → 81 hits |
| `nonrefundable-deposit-separate-notice` | `separate (written )?notice\|separate w`, `at the time the deposit is (taken\|rec`, `written receipt\|receipt for`, `shall (so )?(be )?stated? in writing`, `security deposit` | clean | `security deposit` → 81 hits |
| `nonresident-owner-agent` | `nonresident (owner\|landlord\|lessor)\`, `agent for service of process\|designat`, `withhold.{0,40}(tax\|rent)\|withholdin`, `disclose.{0,80}(owner\|manager\|addres`, `security deposit` | clean | `security deposit` → 81 hits |
| `notice-delivery-methods` | `uniform electronic transactions act\|e`, `electronic mail\|e-mail\|email`, `notice.{0,30}may be served\|service of`, `registered mail\|certified mail`, `rental agreement` | clean | `rental agreement` → 294 hits |
| `notice-to-quit-waiver` | `waive\|waiver`, `no notice to quit shall be necessary\|`, `expressly waived\|waived by the lessee`, `shorten\|lessen the (notice\|period)\|`, `rental agreement` | clean | `waive\|waiver` → 947 hits |
| `ordnance-demolition-meter-disclosures` | `ordnance`, `munition\|explosive ordnance\|military`, `demolition\|demolish`, `shared meter\|master meter\|single met`, `permit to demolish\|intent to demolish`, `dwelling unit` | clean | `dwelling unit` → 114 hits |
| `parking-rules-notice` | `parking`, `towing\|towed\|tow truck`, `rules and regulations concerning the t`, `motor vehicle.{0,40}(tenant\|dwelling `, `permit.{0,20}parking\|parking space`, `rental agreement` | clean | `rental agreement` → 294 hits |
| `periodic-services-entry` | `without notice\|no notice`, `regularly scheduled\|periodic service\`, `necessary or agreed services\|necessar`, `reasonable notice`, `nonstandard rental provision` | clean | `necessary or agreed services\|` → 4 hits |
| `pest-control-notice` | `pesticide`, `pest control\|exterminat`, `fumigat\|insect\|rodent\|vermin`, `applicator\|structural pest`, `notice.{0,60}(pesticide\|pest control)`, `building and housing code` | clean | `building and housing code` → 4 hits |
| `pet-eviction-fact-sheet` | `fact sheet\|information sheet\|informa`, `animal.{0,60}(evict\|abandon\|left beh`, `dog or cat\|household pet\|companion a`, `abandoned animal\|stray animal\|animal`, `animal or pet` | clean | `animal or pet` → 4 hits |
| `plain-language` | `plain language\|plain English\|clear a`, `readab\|readability\|Flesch`, `easy to read\|understandable\|common.{`, `divided and captioned\|captioned\|type`, `consumer transaction` | clean | `consumer transaction` → 47 hits |
| `plain-language-consumer-statement` | `statement of consumer\|consumer restri`, `waiver.{0,40}(disclos\|list\|statement`, `attorney general.{0,60}(approv\|certif`, `conspicuous`, `50,000\|fifty thousand dollars`, `deceptive act` | clean | `deceptive act` → 94 hits |
| `political-access` | `candidate.{0,80}(access\|apartment\|dw`, `canvass.{0,60}(door\|resident\|dwellin`, `voter registration`, `political sign\|campaign sign\|politic`, `solicit.{0,50}(tenant\|resident\|dwell`, `tenants. union` | clean | `tenants. union` → 1 hits |
| `portable-cooling-device` | `air.conditioning\|air conditioner\|coo`, `window.mounted\|window unit`, `portable.{0,25}(cool\|heat\|air)`, `essential service`, `reasonable heat` | clean | `reasonable heat` → 1 hits |
| `portable-solar` | `solar`, `plug.in solar\|balcony solar\|portable`, `renewable energy system\|energy device`, `restrictive covenant.{0,80}solar\|inst`, `distributed energy` | clean | `distributed energy` → 285 hits |
| `private-well-testing` | `private well\|water well\|domestic wel`, `potable water\|drinking water`, `nitrate\|coliform\|arsenic`, `water test\|test results\|sample.{0,30`, `public water supply\|public water syst`, `running water` | clean | `running water` → 1 hits |
| `promises-to-repair` | `promise[sd]? (to\|that)[a-z ,;]{0,40}(`, `cleaned, repaired`, `representation[a-z ,;]{0,60}(landlord\`, `(landlord\|lessor)[a-z ,;']{0,60}promi`, `specified repairs, maintenance tasks` | clean | `specified repairs, maintenance` → 4 hits |
| `prop65-rental-warning` | `known to the state[a-z ,;]{0,30}cause `, `cause cancer\|carcinogen`, `reproductive (harm\|toxicity)\|birth d`, `chemical[a-z ,;]{0,40}(warning\|notice`, `right.to.know`, `asbestos` | clean | `asbestos` → 241 hits |
| `property-tax-rent-disclosure` | `(portion\|part\|share) of[a-z ,;]{0,30`, `property tax[a-z ,;]{0,60}(tenant\|ren`, `ad valorem[a-z ,;]{0,50}(tenant\|rente`, `statement[a-z ,;]{0,40}(property tax\|`, `property tax` | clean | `property tax` → 286 hits |
| `protected-class-inquiry-ban` | `inquir[a-z]*[a-z ,;]{0,60}(race\|relig`, `(race\|religion\|color\|ancestry)[a-z `, `written or oral inquiry`, `record[a-z ,;]{0,40}concerning the rac`, `elicit[a-z]*[a-z ,;]{0,40}(race\|relig`, `preference, limitation, specification ` | clean | `preference, limitation, specif` → 2 hits |
| `recycling-notice` | `recycl`, `solid waste[a-z ,;]{0,50}(tenant\|dwel`, `(tenant\|occupant)[a-z ,;]{0,50}recycl`, `ashes, garbage, rubbish` | clean | `ashes, garbage, rubbish` → 1 hits |
| `religious-cultural-display` | `religious[a-z ,;]{0,40}(display\|symbo`, `mezuzah\|doorpost\|doorframe`, `exercise of religion`, `substantially burden`, `(display\|post)[a-z ,;]{0,40}(door\|en` | clean | `exercise of religion` → 26 hits |
| `rent-concession` | `concession`, `free rent\|rent-free\|rent free\|reduc`, `rebate\|move-in (allowance\|bonus\|spe`, `inducement[a-z ,;]{0,40}(lease\|rental`, `fair rental value` | clean | `fair rental value` → 3 hits |
| `rent-demand-bar` | `(may not\|shall not)[a-z ,;]{0,40}(dem`, `(demand\|collect)[a-z ,;]{0,30}rent[a-`, `rent abate\|abatement of rent\|rent[a-`, `liability for rent is reduced`, `unpaid when due` | clean | `unpaid when due` → 2 hits |
| `rent-escalation` | `escalat`, `consumer price index\|cost of living a`, `rent[a-z ,;]{0,20}(shall\|may) be (inc`, `increase[a-z]{0,3} the rent`, `retaliate by increasing rent` | clean | `retaliate by increasing rent` → 2 hits |
| `rent-increase-notice` | `rent increase\|increase in rent\|incre`, `notice[a-z ,;]{0,40}(rent increase\|in`, `price gouging\|unconscionable price\|e`, `change of terms\|modification of the r`, `state of disaster emergency[a-z ,;]{0,`, `rent[a-z ,;]{0,30}(freeze\|frozen\|cei` (+1) | clean | `periodic rent-paying date` → 5 hits |
| `rent-installments` | `installment[a-z ,;]{0,40}(rent\|rental`, `rent[a-z ,;]{0,40}installment`, `partial payment`, `equal monthly installments` | clean | `equal monthly installments` → 2 hits |
| `rent-receipts` | `rent receipt\|receipt for rent\|receip`, `written receipt`, `(cash\|currency)[a-z ,;]{0,40}(receipt`, `presum[a-z]*[a-z ,;]{0,60}(rent\|insta`, `receipt for the money` | clean | `receipt for the money` → 1 hits |
| `rent-reporting` | `credit report[a-z]*[a-z ,;]{0,40}(rent`, `(rent\|rental) payment[a-z ,;]{0,60}(c`, `consumer reporting agency`, `tenant screening\|screening service\|r`, `credit score`, `credit bureau` | clean | `consumer reporting agency` → 101 hits |
| `repair-cost-termination` | `cost of (the )?(repair\|repairs)`, `(unreasonable\|excessive\|uneconomical`, `substitute housing`, `(refuse\|decline)[a-z ,;]{0,40}(to rep`, `untenantable`, `substantially impaired` | clean | `substantially impaired` → 4 hits |
| `repair-escrow-exemption-notice` | `repair and deduct\|deduct[a-z ,;]{0,30`, `rent[a-z ,;]{0,30}escrow\|escrow[a-z ,`, `(three\|four\|3\|4) or fewer dwelling `, `remedies[a-z ,;]{0,60}(do not apply\|s`, `pay into court` | clean | `pay into court` → 1 hits |
| `rights-responsibilities-guide` | `pamphlet\|brochure\|booklet\|handbook`, `summary of (the\|this) act`, `(prepare\|publish)\w* .{0,50}(guide\|i`, `rights and (responsibilit\|dut)`, `acknowledg\w+ receipt`, `rental agreement` | clean | `rental agreement` → 294 hits |
| `sanitary-code-variance` | `varianc`, `sanitary code`, `board of health .{0,80}(exempt\|except`, `housing code`, `exemption from .{0,40}(code\|regulatio`, `dwelling unit` | clean | `dwelling unit` → 114 hits |
| `security-deposit-holding` | `escrow`, `trust account`, `separate account\|segregated account`, `interest .{0,40}(security deposit\|dep`, `federally insured`, `surety bond\|guarantee bond` (+1) | clean | `security deposit` → 81 hits |
| `security-deposit-standards` | `adjoining dwelling\|four adjoining`, `standards? (by which\|used to\|for det`, `bedroom unit size`, `post\w* .{0,40}(in a conspicuous\|stan`, `terms, conditions or privileges`, `security deposit` | clean | `security deposit` → 81 hits |
| `security-devices` | `dead ?bolt\|deadbolt`, `peephole\|door viewer\|door-viewer`, `rekey\|re-key\|change the locks\|chang`, `window latch\|locking device\|security`, `lock`, `smoke detector\|smoke alarm` | clean | `smoke detector\|smoke alarm` → 36 hits |
| `senior-housing-work-card` | `work card`, `criminal history record check\|backgro`, `55 years of age or older\|housing for `, `sheriff .{0,40}(card\|permit\|registra`, `employee .{0,50}(fingerprint\|criminal`, `familial status` | clean | `familial status` → 19 hits |
| `sex-offender-disclosure` | `sex offender\|sexual offender`, `offender registration`, `registry\|registrant`, `material defect`, `megan`, `disclos` | clean | `disclos` → 1588 hits |
| `sfr-occupancy-disclosure` | `single-family residence\|single family`, `rebuttable presumption`, `first page`, `(two\|2) times larger\|twice the size\`, `unlawful occupancy\|occupying .{0,30}w`, `point.{0,12}type` | clean | `single-family residence\|singl` → 34 hits |
| `shoreline-access-disclosure` | `shoreline\|shorefront\|shore of`, `riparian`, `navigable (stream\|water\|river)`, `public trust`, `high.water mark\|bank of (the\|any) (r`, `disclos` | clean | `disclos` → 1588 hits |
| `showing-notice-waiver` | `prospective .{0,20}(purchaser\|tenant)`, `separate signed\|signed addendum\|sepa`, `reasonable notice`, `unreasonably withhold`, `exhibit the dwelling`, `(24\|48\|twenty-four\|forty-eight) hou` | clean | `exhibit the dwelling` → 1 hits |
| `shutdown-rent-protection` | `shutdown\|shut.down`, `furlough`, `federal (employee\|worker)`, `lapse in appropriations\|continuing ap`, `forbear\|moratorium`, `nonpayment of rent` | clean | `nonpayment of rent` → 16 hits |
| `single-family-zone-lease-limit` | `owner.occupied\|occupied by the owner\`, `single.family (zone\|zoning\|district)`, `accessory dwelling`, `family\|unrelated .{0,30}(persons\|ind`, `zoning regulations`, `comprehensive plan` | clean | `zoning regulations` → 82 hits |
| `smart-access` | `smart lock\|smart access\|keypad\|key `, `surveillance\|video (camera\|monitorin`, `electronic .{0,25}(entry\|access\|lock`, `eavesdrop`, `personal (information\|data) .{0,40}(c`, `right of access` | clean | `surveillance\|video (camera\|m` → 28 hits |
| `social-security-defense` | `social security`, `supplemental security income`, `subsistence or rental payment`, `delay(ed)? (in the )?(mailing\|deliver`, `public assistance`, `continuance` (+1) | clean | `security deposit` → 81 hits |
| `special-district-representation` | `improvement district`, `special assessment`, `benefit district`, `community improvement district`, `transportation development district`, `tax increment` (+2) | clean | `rental agreement` → 294 hits |
| `sprinkler-disclosure` | `sprinkler`, `conspicuous notice`, `bold ?face`, `fire protection system`, `(lease\|rental agreement).{0,60}(shall`, `last inspected` (+1) | clean | `smoke detector\|smoke alarm` → 36 hits |
| `steam-radiator-covers` | `radiator`, `steam (heat\|pipe\|boiler)`, `scald\|burn hazard`, `insulat`, `heating (facilit\|system\|equipment)`, `rider` (+1) | clean | `58-2553` → 10 hits |
| `stigmatized-property` | `psychologically (impacted\|affected)`, `stigmatiz`, `suicide\|homicide`, `human immunodeficiency\|acquired immun`, `material (defect\|fact)`, `sex offender` (+2) | clean | `material (defect\|fact)` → 142 hits |
| `stove-refrigerator` | `refrigerator`, `stove`, `major kitchen facilit`, `cooking (facilit\|equipment\|appliance`, `appliances and facilities\|other facil`, `kitchen sink` (+1) | clean | `supplied or required to be sup` → 2 hits |
| `student-housing` | `student`, `dormitor`, `fraternal or social organization`, `college\|university`, `postsecondary\|post-secondary`, `rooming house` (+1) | clean | `58-2541` → 2 hits |
| `subsidized-inspection-refusal` | `housing choice voucher`, `housing assistance payment`, `section 8\|chapter 8 of title 42`, `housing authority`, `(annual\|biennial\|initial) inspection`, `subsidiz` (+2) | clean | `right to access\|right of acce` → 13 hits |
| `subsidy-habitability-proration` | `prorat\|pro rata`, `diminution\|diminish.{0,30}(value\|ren`, `abate`, `fair rental value`, `reduction (in\|of) rent\|rent reductio`, `uninhabitable\|unfit for` (+2) | clean | `58-2561` → 4 hits |
| `subsidy-late-fee` | `late (fee\|charge\|payment penalt)`, `portion of (the )?rent`, `delinquent rent`, `grace period`, `rental assistance`, `unconscionab` (+1) | clean | `rent (is\|shall be) payable` → 6 hits |
| `tax-escalation` | `increased real estate tax\|increase in`, `ad valorem`, `abatement of (the )?tax\|tax abatement`, `(lessee\|tenant).{0,120}(pay\|reimburs`, `rent control`, `escalat` (+1) | clean | `terms and conditions not prohi` → 2 hits |
| `tenant-bankruptcy` | `bankrupt`, `insolven`, `automatic stay`, `trustee in bankruptcy`, `ipso facto\|upon the filing of a petit`, `general principles of law` (+2) | clean | `58-2547` → 2 hits |
| `tenant-confidential-information` | `personal information`, `social security number`, `security breach\|breach of security`, `breach of privacy`, `reasonable security procedures`, `consumer report` (+2) | clean | `50-7a` → 15 hits |
| `tenant-forward-proceedings` | `attorn(?!ey)`, `tenant.{0,60}(shall\|must).{0,40}(noti`, `proceeding.{0,40}to recover.{0,40}(pos`, `(forward\|deliver\|transmit).{0,50}(su`, `confession of judgment` | clean | `confession of judgment` → 6 hits |
| `tenant-insurance-claims` | `subrogat`, `renter'?s? insurance`, `(require\|requiring).{0,80}(tenant\|le`, `(file\|submit\|make).{0,40}claim.{0,60`, `exculpation` | clean | `subrogat` → 116 hits |
| `tenant-rights-statement` | `statement of (tenant\|renter).{0,30}ri`, `summary of (the )?(act\|rights\|tenant`, `notice of (tenant\|renter).{0,20}right`, `(landlord\|lessor) shall (give\|provid`, `bill of rights`, `tenant.{0,40}rights and (responsibilit` | clean | `bill of rights` → 107 hits |
| `tpa-exemption-notice` | `exempt[a-z]{0,4}[a-z ,;]{0,40}(lease\|`, `(notice\|statement).{0,50}(exempt\|not`, `real estate investment trust`, `alienable separate from`, `prohibited terms and conditions` | clean | `prohibited terms and condition` → 6 hits |
| `tpa-notice` | `right of first refusal`, `opportunity to purchase`, `(convert\|converted\|conversion).{0,70`, `rent[- ]?(control\|cap\|ceiling\|stabi`, `(just\|good) cause.{0,60}(evict\|termi` | clean | `rent[- ]?(control\|cap\|ceilin` → 3 hits |
| `tpa-sunset` | `shall expire`, `sunset`, `remain in effect only until`, `is repealed (on\|as of)`, `this (act\|section) shall (expire\|be `, `hereby repealed` | clean | `hereby repealed` → 225 hits |
| `translation-duty` | `translat`, `(language other than english\|foreign `, `spanish`, `interpreter`, `unconscionable` | clean | `unconscionable` → 120 hits |
| `truth-in-renting` | `truth in (renting\|lending)`, `(rental agreement\|lease) shall (state`, `prominent (place\|type\|location)`, `(point\|12-point\|ten-point) (bold\|ty`, `shall be (set forth\|printed) in`, `boldface` | clean | `boldface` → 14 hits |
| `utility-disclosure-attachment` | `attach[a-z]*[^.]{0,60}(lease\|rental a`, `addend`, `disclos[a-z]*[^.]{0,70}(utility\|utili`, `(utility\|utilities\|water\|gas\|elect`, `monthly water statement`, `statement[^.]{0,40}(utility\|water\|ga` | clean | `monthly water statement` → 1 hits |
| `utility-disconnection-notice-authorization` | `disconnect`, `shut.?off\|shutoff`, `(terminat[a-z]*\|discontinu[a-z]*)[^.]`, `(notify\|notice)[^.]{0,80}(landlord\|o`, `interrupting or causing the interrupti`, `cold weather` | clean | `interrupting or causing the in` → 3 hits |
| `utility-transfer` | `transfer[a-z]*[^.]{0,70}(utility\|util`, `(tenant\|lessee)'?s? (own )?name[^.]{0`, `refuse to contract`, `change of (account\|service\|occupancy`, `final bill\|closing bill\|final readin`, `transfer` | clean | `refuse to contract` → 1 hits |
| `veterans-incentive` | `(veteran\|military)[^.]{0,90}(rent\b\|`, `veterans`, `(incentive\|tax credit\|grant\|guarant`, `service ?member`, `HUD.?VASH\|supportive housing`, `veteran[^.]{0,120}(housing\|landlord\|` | clean | `veterans` → 364 hits |
| `water-heater-temperature` | `water heater`, `degrees`, `(temperature\|thermostat)[^.]{0,90}(wa`, `scald\|anti-?scald\|tempering valve\|m`, `hot water`, `plumbing code\|uniform plumbing\|inter` | clean | `hot water` → 13 hits |
| `waterbed` | `water ?bed`, `flotation\|floatation`, `liquid.?filled\|water-filled\|water fi`, `bedding`, `furniture`, `certificate of occupancy` | clean | `furniture` → 15 hits |
| `window-guards` | `window guard\|window-guard\|window sto`, `window`, `fall (prevention\|protection)\|guard(r`, `screen[a-z]*[^.]{0,50}window`, `egress`, `building and housing codes` | clean | `building and housing codes` → 4 hits |

143 absence-bearing topics, each with its control reporting 0 hits in the same invocation as the battery.

---

### §4 — Decisions, and questions asked of Taylor

## The six named Kansas items

Each answered once, every statute read section-open on 2026-10-24. The full working, with the
statutory text quoted at length, is in `work/KANSAS-ITEMS.md`.

**Item 1 — the eviction-fee clause (rule 54 screen), answered with `eviction-penalty-clause-ban`.**
Decision: **offer it narrowly AND write the education row** — both, because the clause is lawful
only in a narrow shape and the shape needs explaining. Four limits, all read whole: attorney fees
are flatly barred (K.S.A. 58-2547(a)(3), unenforceable under (b), with actual damages if the
landlord deliberately uses a provision known to be prohibited); indemnity is barred (58-2547(a)(4)),
so a fee drafted as the tenant indemnifying the landlord is at risk while reimbursement of the
landlord's own actual loss is not; the docket fee is already recoverable through the judgment and
the legislature has reserved fee-setting to itself (**K.S.A. 61-4001(a)(1)** sets $35 / $55 / $101
and lets the court enter judgment for it; **(a)(2)** says the docket fee "shall be the only fee
collected or moneys in the nature of a fee collected for the docket fee" and "shall only be
established by an act of the legislature"; 61-4002 carries 60-2002 and 60-2003 into limited
actions), so a private "filing fee" duplicates a court-awarded cost; and the KCPA constrains an
untethered fee (50-624(c), (j), (l) make a residential lease a consumer transaction, reaching
50-626 and 50-627) — **but only where the KRLTA does not reach**, a qualification the row states
rather than presenting 50-627 as a settled ceiling, because *Chelsea Plaza Homes, Inc. v. Moore*,
226 Kan. 430, held the KRLTA specific and taking precedence over the broader KCPA (a lead only,
SOP rule 1). Nothing in 58-2547(a)'s closed list names a notice-service or filing charge, so such
a charge is **not prohibited per se**. Delivered as `eviction-notice-cost-ks`, an `[Optional.]`
`CONDITIONAL` clause recovering only the landlord's actual documented out-of-pocket cost of serving
a statutorily required notice, expressly excluding attorney fees, the docket fee and anything taxed
as costs, framed as reimbursement of actual damages rather than indemnity; plus
`edu-eviction-fee-limits-ks`. `eviction-penalty-clause-ban` is a **confirmed absence with its
boundary**: Kansas bans no eviction-fee clause as such, and the limits come from the four sources
above. The three rows point to each other.
**Currency, corrected mid-pass:** I first reported that 61-4001(a)(2)'s "not to exceed $19"
surcharge window had closed on the codified text ("July 1, 2019, through June 30, 2025").
**L. 2026, ch. 35, § 21 reopened it — live 1 July 2026 to 30 June 2030**, confirmed from the act's
own title. No row states a dollar total for filing an eviction, and the citation carries the rider.

**Item 2 — fire and casualty (K.S.A. 58-2562 read whole; unamended since 1975).** It is a
**tenant-side remedy only**. On the trigger — damage or destruction by fire or casualty "to an
extent that the use and habitability of the dwelling unit is substantially impaired" — the tenant
gets two options and the landlord gets none. Under **(a)(1)** the tenant may vacate immediately and
must notify the landlord in writing within five days, and termination dates back **to the vacating,
not the notice**. Under **(a)(2)**, if continued occupancy is lawful, the tenant may vacate any
unusable part and rent liability is reduced "in proportion to the diminution in the **fair rental
value**" — not by floor area and not at the landlord's discretion. Under **(b)** the landlord
returns the deposit portion recoverable under 58-2550, and rent accounting runs from the date of
vacating. What the section does **not** do: it imposes no duty on the landlord to repair or
rebuild, gives the landlord no casualty-termination right, and sets him no deadline. **Both halves
of `casualty-and-mitigation-waivable` are non-waivable**: 58-2562 is inside the KRLTA, so
58-2547(a)(1) voids any clause charging full rent after a substantial casualty, lengthening the
five-day notice, cutting off proportional abatement, or inventing a landlord termination right; and
the mitigation duty in **58-2565(c)** ("shall make reasonable efforts to rent it at a fair rental")
is non-waivable on the same footing, so a clause reciting that the landlord need not re-let is
void. No existing Kansas row was changed.

**Item 3 — the two shared fee clauses.** **`keys` reads correctly in Kansas; no conflict.** It
charges "the cost", not a fixed fee, so it is ordinary contract damages rather than indemnity for a
liability arising under law (58-2547(a)(4) not engaged); it is not an attorney-fee term; and
58-2550's caps govern the **security deposit** only, which a re-key charge is not (58-2543(m)).
**No Kansas domestic-violence lock-change right exists to collide with it** — the KRLTA has no
lock-change provision and the whole-K.S.A. title battery returns nothing. **`hoa-compliance`
conflicts with K.S.A. 58-2547(a)(4)** — reported in §6, not edited. Its sentence "Any fines
incurred due to Tenant's violation of association rules will be Tenant's responsibility" makes the
tenant answer for a liability the law imposes on the **owner**, which is the indemnity limb the
statute forbids. The row's own notes say it was "already vetted against KS/NE's prohibited-lease-
provisions statutes (the strictest bar found in this project to date)" — but that vetting reached
exculpation and liability waiver, not indemnity. The library already holds the cure, arrived at
independently: `hoa-compliance-or` and `hoa-compliance-ak` recover the fine "as Landlord's actual
damages for the breach". Kansas wording I would use, and the sync recommendation, are in §6.
Separately, **neither `keys` nor `hoa-compliance` carries the `KS:` notes segment rule 26 requires**
although both are tagged KS — a documentation defect, flagged not fixed.

**Item 4 — the three central shared edits, one line each. All three read correctly for Kansas.**
`smoking-policy`: the edit landed, charging Tenant only for smoking "by Tenant, an occupant, or a
guest or invitee of Tenant", so it does not reach a neighbour's smoke, and `SERVES_LANDLORD` is
right because Kansas does not regulate smoking inside a private residence (21-6110(d)(2), except a
day care home under 65-530); banning vaping by contract is sound because 21-6109(o) defines smoking
as a lighted or burning product, so vaping sits outside the Act. **But it leaves Kansas law on the
table (§6):** 21-6110(a)(3) makes smoking in common areas of multiple-residential facilities
unlawful and **21-6111 requires the person in charge to post the international no-smoking symbol**
— an affirmative duty no lease clause discharges, and the library has no Kansas row carrying it.
`no-alterations`: its carve-out for installations that law makes the tenant's property is **inert
rather than wrong** here, since a battery over chapters 58, 60 and 61 found no such Kansas statute
(0 hits, control clean, positive "security deposit" 62 hits), and the only KRLTA use of "fixtures"
is 58-2565(d), with which the clause's default agrees. `addendum-precedence`: its exception for a
legally required disclosure is not merely safe but **required**, because 58-2547(a)(1) would void a
term subordinating a statutory disclosure to the lease.

**Item 5 — CARES Act mentions.** Four KS-active rows mention the federal 30-day notice. Three are
false positives: `edu-no-for-cause-eviction-ks`'s 30 days is the **state** periodic-tenancy notice
(58-2570(b)); `edu-self-help-eviction-ban-ks`'s is the **habitability** precondition (58-2559); and
`edu-cares-act-notice` is the shared federal row itself. **One disagrees, and it is reported in
§6:** `edu-cares-act-notice` says the moratorium ended in 2020 "**but the 30-day notice section has
no end date**", while `edu-eviction-procedure-ks` says its "continued operation after the 2020
moratorium lapsed is **contested in the courts**" and is "NOT read section-open this pass". The
library therefore gives a Kansas user two different answers to the same federal question. The
shared row is the one tagged in all 56 jurisdictions and the one read against the statute
(15 U.S.C. 9058 section-open); the Kansas row concedes it was not. Recommendation: conform the
Kansas row, and while it is open fix two smaller things — it omits the shared row's third coverage
limb, the **rural housing voucher program**, and spells "programme".

**Item 6 — currency of the new rows.** Executed and proved mechanically by
`scripts/prove_currency.py`. All **234** answered topics carry a currency record. The script then
re-derived the session-law leg independently over all 11,714,459 characters of the 2025 and 2026
Session Laws for every one of the **521** distinct sections any row cites, testing for a genuine
**amendment or repeal** rather than a mention — a distinction that mattered, since a first version
counted bare cross-references and returned 90 false positives. **Two rows cited an amended section
with no rider; both are fixed and both findings survived.** `edu-firearms-ks` cites K.S.A. 12-189
(amended by **L. 2025, ch. 126, § 2**, a Finney county sales-tax act) only as the subject of a
cross-reference, never for its content. `edu-governmental-fines-ks` cites K.S.A. 8-1102, **amended
and repealed-and-replaced by L. 2026, ch. 142, §§ 6 and 13** (Senate Substitute for HB 2372, veto
overridden) — and here the check earned its place, because the row's confirmed absence rests partly
on 8-1102 not being a fine-pass-through rule; the 2026 text was read, it still governs vehicles
left on a public highway, and the absence stands on the current text. A **third** trap was caught
by a researcher rather than by the gate: **K.S.A. 16-207 was amended by L. 2026, ch. 97**, which on
reading the act in full rewrites **subsection (b) only**, leaving the (a) and (d) text a row relies
on current. All three sections are now in the stale-cite map, so the gate fails any future row
citing them without a rider. **Final state of the gate: `RESULT: CURRENCY PROVED FOR EVERY ANSWERED TOPIC`.** All 234 answered
topics record a currency check and **no row cites a section amended in 2025 or 2026 without a
rider** — the gate's own machine-readable list of unridered citations is empty. Getting there took
three rebuilds of the gate itself, and each failure is worth recording because the gate is the
thing that is supposed to catch this class of error. Version 1 matched any rider language anywhere
in the row, so it passed `edu-nuisance-abatement-ks`, which cited K.S.A. 8-1102 with no rider at
all, on the strength of an unrelated sentence elsewhere in the row — the independent check caught
that. Version 2 anchored the rider to the section but required it in the same sentence, which
flagged rows plainly carrying a rider two sentences later. Version 3 is anchored to the section
within a 400-character window, and on its first run it surfaced **six real gaps the row-wide
version had hidden** — all six strictly incidental citations appearing inside quoted text from
other sections, each now annotated with its amending act. A gate that reports success is only
worth as much as its weakest test, and this one had to be broken twice before it was worth
trusting.

Every chapter number above was verified by opening the act's own
chapter heading and amending section — not taken from the script, whose first attempt at chapter
attribution returned `?` for every hit.

## Rulings I made, so the pass could finish in one visit

**1. Twelve topics deliver two rows under one `topic_key`. That is correct, and it is the
library's own convention.** The independent check flagged it as needing a ruling rather than a
fix, because §3 of the canvass brief frames clause / education / absence / tag as a *choice* and
SOP rule 57 says not to spread one subject across two rows. I settled it against the library
rather than by preference. Of the **11,587** active state-plus-topic combinations in
`lease-clauses.csv`, **1,688 — 14.6% — already carry both a LEASE_CLAUSE and a LANDLORD_EDUCATION
row**, so a clause plus the education explaining its limits is established practice, not an
invention. What is rare is two rows of the *same* `content_type` for one state and topic: 214
combinations, and **Kansas contributes none of them.** Rule 57's bite is against duplicating a
subject in the same register, which is what produces contradictory rows; a clause and its
explanation are different registers. The twelve are `adverse-proceeding-notice`,
`animal-care-access`, `association-obligations-disclosure`, `automatic-renewal`,
`bed-bug-cooperation`, `collection-fee`, `common-area-lighting`, `construction-liens`,
`designated-repairer`, `firearms`, `notice-service-fee`, `tenant-employee-housing`. Proposed as an
SOP clarification so the next state does not have to re-litigate it.

**2. The eviction-fee clause is offered, narrowly, *and* given an education row** — both rather
than either, under rule 54. Reasons and the four limits are in item 1 above.

**3. Rows blocked only by a model code's own text stay NEEDS_REVIEW, with the narrow reason
stated.** `fire-sprinkler-duty` and `balcony-inspection` could have been called VERIFIED once
K.A.R. art. 22-1 was read, since the regulation layer is now known. I kept them at NEEDS_REVIEW
because the question each actually turns on — the occupancy threshold that triggers a sprinkler
requirement, and whether a maintenance duty reaches a balcony — lives inside the **2006 IBC and
IFC**, which K.A.R. 22-1-3 incorporates **by reference** without reproducing. That text is
copyrighted and is not published in the K.A.R., so it was not read, and neither row asserts
anything from it. Three sibling rows did move to VERIFIED, because their questions are answered by
the regulation itself: `fire-code-standard` (which editions are adopted), `sanitary-code-variance`
(whether K.A.R. 22-1-4 adds an occupant-notice condition to a K.S.A. 31-136 exemption — it does
not), and `frozen-standard-incorporation` (which standards are frozen, and at which editions).

**4. A confirmed absence whose subject's natural home is outside the ten full-text chapters is
marked as resting on the title index.** The pass holds ten K.S.A. chapters in full operative text
and the remaining seventy-nine at title level only. Four times in this pass a confident negative
turned out to be wrong for exactly that reason, so an absence of this kind is recorded with its
basis rather than stated flatly.

**5. Where the statute does not settle a point, the row states the cautious course and carries
NEEDS_REVIEW; it does not wait for an answer.** This was the one-visit instruction, and it is why
47 of the 265 delivered rows are NEEDS_REVIEW. Every one names what is unresolved and what to do
in the meantime. The open points are listed below, split into the ones that ask you to choose
something and the ones where the law itself is silent.

## Open points recorded by the canvass

Each is a point the statutory text does not settle. **None of these blocked a topic**: in every case the row states the cautious course and carries `verification_status=NEEDS_REVIEW`, and the full statement of the point is in that row's `notes` and in `work/answers/<topic_key>.json`. Kansas case law would be needed for most, and SOP rule 1 makes cases leads only, so none could have reached VERIFIED in this pass. Indexed here so nothing is lost at sync.

### Points that ask you to choose something (10)

These are product decisions, not unresolved law. Sorted out by keyword, so the split is rough — read past it if a line looks misfiled.

1. **`accessory-dwelling-unit`** — L. 2026, ch. 76 § 2 is opt-in: third-party review and inspection apply only in a political subdivision whose governing body 'has elected to be subj…
2. **`bed-bug-cooperation`** — Worth a library-wide note rather than an answer: the Kansas residential act has NO fitness-for-human-habitation warranty — 'habitable condition|fit…
3. **`cannabis`** — Worth a product decision, not a research question: 65-6235 is an affirmative defence in a criminal case, not a tenant right. A Kansas landlord may…
4. **`cold-weather-vacate-notice`** — Worth a product decision rather than research: I wrote this as an education row only and pointed the landlord at Kansas's existing `extended-absenc…
5. **`collection-fee`** — Product decision embedded in the clause, flagged so you can reverse it: Kentucky's row says the library does not offer a collection-fee clause at a…
6. **`collection-fee`** — Basis-field judgment worth a second eye: I set `collection-fee-ks` to SERVES_LANDLORD rather than the 'CONSTRAINED_TERM | SERVES_LANDLORD' that `co…
7. **`fee-in-lieu-of-deposit`** — Related and worth a decision rather than a drafting choice: should the library say anything about third-party deposit-alternative and surety produc…
8. **`governmental-fines`** — Worth a central check across the library: K.S.A. 58-2547(a)(4) is broader than the equivalent provisions most states have, because it runs against…
9. **`minor-tenant-filing`** — Worth a product look, not a research question: K.S.A. 38-101's marriage exception makes a person sixteen or over who is or has been married an adul…
10. **`smoke-drift-waiver`** — Also worth a product decision: smoke-drift-waiver-ut (the Utah acknowledgment-and-waiver clause) must NOT be tagged KS, because K.S.A. 58-2547(a)(4…

### Legal points the statute leaves open (168)

11. **`accessory-dwelling-unit`** — L. 2026, ch. 76 § 1(c)(1) requires by-right approval only for projects that 'comply with established land use regulations' and 'the criteria outlin…
12. **`animal-care-access`** — K.S.A. 58-2557(b) lets a landlord enter without consent only 'in case of an extreme hazard involving the potential loss of life or severe property…
13. **`animal-care-access`** — Brief's open point, confirmed on reading: K.S.A. 39-1111's verification card-or-letter procedure is framed entirely around 'any place set forth in…
14. **`appliances-excluded`** — K.S.A. 58-2553(a)(3) lists 'all electrical, plumbing, sanitary, heating, ventilating and air-conditioning appliances including elevators' — it omit…
15. **`asbestos-hazards`** — Resolved mid-slice: 65-5301 was fetched, read section-open, and the row is now VERIFIED as to statute with the threshold ('friable', over 1% by wei…
16. **`association-obligations-disclosure`** — CORRECTION (2026-10-24), Part B1. I re-opened this topic against the Kansas uniform common interest owners bill of rights act, K.S.A. 58-4601 to 58…
17. **`association-obligations-disclosure`** — Two provisions now added to the bodyText because they reach the tenant directly and a Kansas landlord should know them. K.S.A. 58-4608(a)(6)(A): an…
18. **`association-obligations-disclosure`** — A CORRECTION TO THE BRIEF ITSELF, recorded under findings_existing_rows because the brief says a load-bearing citation in it needs the same proof a…
19. **`association-obligations-disclosure`** — A smaller precision, also now in the bodyText: the row said Kansas has 'no public offering statement or resale certificate requirement at all'. Bot…
20. **`association-obligations-disclosure`** — THE hoa-compliance BOUNDARY, as Part B1 directed, recorded under findings_existing_rows and NOT fixed. Short version: the row's first sentence is r…
21. **`association-obligations-disclosure`** — The reason I am raising it as a decision for you rather than a defect to patch: THE KANSAS CANVASS HAS ALREADY TAKEN THE OPPOSITE POSITION ON THE S…
22. **`association-obligations-disclosure`** — Housekeeping on the same row: hoa-compliance has KS in its states field but NO 'KS:' notes segment. Kansas appears only inside the MN and ND segmen…
23. **`balcony-inspection`** — Row is NEEDS_REVIEW for the regulation, not for the statute. The statutory answer is as clean as this project gets — 'balcon' appears once in 26 mi…
24. **`balcony-inspection`** — Mechanical point about the corpus that affects anyone citing 31-133: the session-law volumes are extracted plain text, so strike-through markup is…
25. **`binding-arbitration`** — UPGRADE (2026-10-24): reason (1) for NEEDS_REVIEW is cleared — chapter 5 is now in the index and was read in full. Kansas's revised arbitration act…
26. **`binding-arbitration`** — Still open as a question of LAW, not of sources: whether a pre-dispute arbitration clause is a prohibited waiver of act 'rights or remedies' under…
27. **`binding-arbitration`** — Flagging across slices, not asking: L. 2026, ch. 132, §§ 2-3 put court-considered mediation and a 14-day mediation continuance into Kansas eviction…
28. **`cannabis`** — UPGRADE (2026-10-24): the NEEDS_REVIEW reason is cleared. K.S.A. 21-5706, 65-6235, 79-5201 and 2-3901 are now in the index and were read section-op…
29. **`cannabis`** — Pattern defect worth passing to whoever writes the SOP: 'THC' as a search alternative matches as a case-insensitive substring and returned 870 hits…
30. **`cannabis`** — Minor error in work/PENDING-UPGRADES.md, flagged not fixed: the `edu-cannabis-ks` entry says the four blocking sections are now in the index 'along…
31. **`carpet-cleaning`** — Correction to the canvass brief, not to a row — and it matters because other agents in this pass are relying on it. CANVASS-BRIEF.md §5 summarises…
32. **`carpet-cleaning`** — Library-wide, for the same reason as the bed-bug note: Kansas has no statutory normal-wear-and-tear standard ('wear and tear' = 4 hits index-wide,…
33. **`certificate-of-occupancy-disclosure`** — Two findings here are bigger than this topic and belong to slices I do not have. (1) K.S.A. 12-16,138(a) bars a city or county from requiring perio…
34. **`children-occupancy`** — Answering the coordinator's question on the record: L. 2026, ch. 152 § 1(a)(2) does NOT reach occupancy standards. Its six listed screening inputs…
35. **`children-occupancy`** — Noting rather than asking: ch. 152's four preempted subjects line up with topics outside my slice (`source-of-income`, `tenant-screening`, `securit…
36. **`common-area-lighting`** — Common-area egress lighting is a regulation-level standard, not a statutory one: it sits in the Kansas fire prevention code (K.A.R. art. 22-1), whi…
37. **`communal-land-lease-approval`** — CORRECTION (2026-10-24), Part B1. I re-opened this topic against the Kansas uniform common interest owners bill of rights act, K.S.A. 58-4601 to 58…
38. **`communal-land-lease-approval`** — The useful new finding, and I think it is worth more than a line: in a Kansas common interest community of twelve or more residential units, a LEAS…
39. **`communal-land-lease-approval`** — Absence proven inside the act rather than assumed: an article-wide check of all 23 sections of article 58-46 (control clean, known positive 'associ…
40. **`confirmed-absences-habitability`** — Air conditioning and 'other essential service': K.S.A. 58-2563 and 58-2569 penalize a landlord who willfully diminishes services 'by interrupting o…
41. **`construction-liens`** — Tenant as the owner's 'agent' under K.S.A. 60-1101: the lien reaches the landlord's property only where the work was furnished 'under a contract wi…
42. **`defective-drywall-disclosure`** — The licensee disclosure duty in K.S.A. 58-30,106(d)(1) appears to be the single most reusable Kansas finding in this slice: it reaches every 'Kansa…
43. **`dv-deposit-timing`** — UPGRADE (2026-10-24): the source blocker is cleared — K.S.A. 75-452 is now in the index and all four incorporated definitions are quoted in the not…
44. **`dv-deposit-timing`** — Deposit timing when a co-tenant stays after a protected-person termination. K.S.A. 58-25,137(h) continues the lease 'for any remaining tenants or l…
45. **`dv-qualifying-documents`** — UPGRADE (2026-10-24): the 75-452 source blocker is cleared — the section is in the index, read section-open, and all four incorporated definitions…
46. **`dv-qualifying-documents`** — K.S.A. 58-25,137(c) says a tenant asked for documentation 'shall provide documentation ... which may be in any of the following forms', then lists…
47. **`electric-submetering-disclosure`** — Possible uncovered Kansas subject, noticed while proving this absence and outside my topic so not written as a row: K.S.A. 58-25,127 imposes three…
48. **`electric-submetering-disclosure`** — Should the library take a position on landlord electric submetering in Kansas beyond 'get advice'? The answer turns entirely on K.S.A. 66-104, whic…
49. **`emergency-contact`** — Convention check, not a blocker. Texas carries a PAIR on this topic key — a lease clause (emergency-phone-tx) and an education row (edu-emergency-p…
50. **`eminent-domain`** — UPGRADE (2026-10-24): the row's blocker is cleared and it is VERIFIED. K.S.A. 26-513, 26-502, 26-501 and 26-508 are now in the index and were read…
51. **`eminent-domain`** — Housekeeping, noted because it would have broken the merge: this answer file's tag_existing entry for `eminent-domain-vi` used the keys 'action' an…
52. **`employee-screening`** — UPGRADE (2026-10-24): K.S.A. 22-4714 is now in the index and was read section-open, so the row's primary blocker is cleared and it is VERIFIED. The…
53. **`employee-screening`** — Carried forward as a correction, not a question: this answer file's reg_level entry previously said the container could not reach the K.A.R. websit…
54. **`employee-screening`** — The 5% threshold in K.S.A. 58-3037(i) looks like a genuine commercial exposure for Steinoak's Kansas users and it may deserve wider treatment than…
55. **`entity-landlord-court-representation`** — Worth knowing for the product even though it is outside this topic: K.S.A. 61-2703(a)(2) excludes from small claims 'a claim based on an obligation…
56. **`ev-charging-requirements`** — One point I could not settle, flagged rather than guessed, and it affects a clause now tagged for Kansas. K.S.A. 58-2547(a)(4) voids any lease term…
57. **`ev-charging-requirements`** — Possible uncovered Kansas subject, outside my topic so not written as a row: L. 2025, ch. 91 put 'electric vehicle supply equipment' into the Kansa…
58. **`eviction-hardship-stay`** — A textual conflict in the Kansas eviction code that I could not settle and that affects how fast a landlord can actually act. K.S.A. 61-3601 says '…
59. **`eviction-penalty-clause-ban`** — Dangling pointer to flag, as instructed. My row points to `eviction-notice-cost-ks` and `edu-eviction-fee-limits-ks`, the two rows KANSAS-ITEMS ite…
60. **`eviction-penalty-clause-ban`** — A sharpening of item 1 that should be carried into `eviction-notice-cost-ks` when it is written. Item 1 justified that optional clause as recoverin…
61. **`eviction-penalty-clause-ban`** — A second point item 1 could not have had, because it predates my read of L. 2026, ch. 132: K.S.A. 60-2003(7) makes mediation fees taxable as costs,…
62. **`eviction-service-party`** — UPGRADE (2026-10-24): K.S.A. 75-451 and 75-452 are now in the index and were read. The row stays NEEDS_REVIEW but the blocker is now precise: the S…
63. **`eviction-service-party`** — Should Kansas get an optional lease clause on this key, as Tennessee has (eviction-service-party-tn)? The statutory footing is there: K.S.A. 61-300…
64. **`eviction-service-party`** — Narrow scope question worth someone's eye, noticed while comparing the two notice regimes. K.S.A. 58-2510 prescribes service methods for 'Notice as…
65. **`exculpatory-clauses`** — This topic materially advances the additional-insured question I raised under ev-charging-requirements earlier in this slice, so treating them toge…
66. **`family-child-care`** — UPGRADE (2026-10-24): three of this row's four source blockers are cleared — K.S.A. 65-503, 65-523 and 65-526 are now in the index and were read se…
67. **`family-child-care`** — This is the one row in my worklist that a single further retrieval would finish. The brief's corrected Regulations section gives the route: navigat…
68. **`family-child-care`** — Two unresolved points, both flagged in the row with a cautious course rather than guessed at. FIRST, who must post the no-smoking signs. K.S.A. 21-…
69. **`family-child-care`** — SECOND, a genuine tension between two Kansas statutes on outdoor smoking at a day care home. K.S.A. 65-530(b) says 'Nothing in this subsection shal…
70. **`farmland-hunting-rights`** — UPGRADE (2026-10-24): row RAISED to VERIFIED — K.S.A. 21-5810, 32-1013, 32-919 and 32-920 are all now in the index and were read section-open. The…
71. **`farmland-hunting-rights`** — A CORRECTION I MADE TO THIS ROW'S OWN bodyText, flagged so you know it changed: the row previously told the landlord that 'a lease can give the ten…
72. **`farmland-hunting-rights`** — The optional lease clause the earlier note speculated about is now well founded on the statutes, but I did NOT write one, and the reason is the bri…
73. **`farmland-hunting-rights`** — Worth considering once K.S.A. 21-5810 and 32-1013 are fetched: Kansas may support an optional lease clause on the Mississippi model (hunting-rights…
74. **`fee-in-lieu-of-deposit`** — This is the topic's own question and I could not settle it from the text, so the row takes the cautious course and flags it. Does a genuinely NON-R…
75. **`fire-code-standard`** — Is the International Fire Code, 2024 edition actually in force in Kansas yet? L. 2026, ch. 74, s 2 reads as procedure, not as enactment: it exempts…
76. **`fire-code-standard`** — Drafting gap to watch at the next Kansas pass: L. 2026, ch. 74, s 4 repealed K.S.A. 31-132a (the 'apartment house' definition, three or more units)…
77. **`fire-sprinkler-duty`** — One drafting choice flagged for review: the Maryland row on this topic gives concrete building-permit-date triggers (multifamily permitted on or af…
78. **`firearms`** — Product decision, flagged so you can reverse it: I did NOT offer Kansas a clause banning firearm possession in the unit, even though no Kansas stat…
79. **`firearms`** — Confirmation worth having when chapter 75 is in the corpus: the Personal and Family Protection Act (K.S.A. 75-7c01 et seq.) is the Kansas carry-lic…
80. **`flood-disclosure`** — A correction to the standing Kansas instruction that every pass is being given, which affects more than my slice. The instruction says K.S.A. 58-30…
81. **`flood-disclosure`** — Product question: three states (CA, TX, FL) carry a flood-disclosure LEASE_CLAUSE because a statute requires one. Kansas has no statute, so I wrote…
82. **`foreclosure-disclosure`** — Possible row consolidation at sync: Kansas now has two rows in neighbouring territory - the existing 'edu-no-foreclosure-tenant-protection-ks' (top…
83. **`foreclosure-disclosure`** — The existing row's own notes say its PTFA sentence is 'THE WEAKEST CLAIM IN THIS ROW' and was recalled rather than read. I did not fix that, becaus…
84. **`forfeiture-redemption`** — Worth knowing for the eviction topics generally, not just this one: L. 2026, ch. 132 ss 2 and 3 change Kansas eviction practice in a way that is in…
85. **`frozen-standard-incorporation`** — Product question, because it may be worth its own topic: L. 2026, ch. 76, New Sec. 3 is a genuine Kansas novelty - a state-mandated FLOOR that ever…
86. **`frozen-standard-incorporation`** — Judgment call on rule_type: I set CONSTRAINED, matching North Dakota's row on this topic, because the Kansas answer is 'present, in several places,…
87. **`good-cause-notice`** — A routing correction worth propagating, because it affects other agents' topics in this pass and not just mine. The session-law file lists `good-ca…
88. **`governmental-fines`** — UPGRADE (2026-10-24): both sections listed under out_of_corpus_needed (K.S.A. 17-4759 and 12-1,115) are now in the index and were read section-open…
89. **`governmental-fines`** — The row REMAINS NEEDS_REVIEW, and deliberately so. Its status never rested on those two sections; it rests on the interpretive question in the body…
90. **`governmental-fines`** — The one real product decision in this topic, flagged because it goes the other way from most states. Twenty states carry rows here and two of them…
91. **`guarantor-renewal`** — One open question I could not settle from the statute, raised rather than guessed. The Massachusetts question in this topic's checklist asks whethe…
92. **`guarantor-renewal`** — Drafting note on the tagged clause, in case it matters to you: `guaranty-as` says 'Landlord may ask Guarantor to pay without first suing Tenant'. T…
93. **`guest-rights`** — Possible addition to an existing row rather than to mine, flagged because I may not edit it. 'edu-squatter-removal-ks' quotes the squatter definiti…
94. **`habitability-modifiable`** — Two Kansas rows now sit either side of a line that is easy to blur, so flagging the shape rather than asking for a change. 'edu-habitability-duty-d…
95. **`hazardous-contamination-disclosure`** — UPGRADE (2026-10-24): K.S.A. 65-1,221 and 65-34,184 are now in the index and were read section-open, and the row's absence position is materially s…
96. **`hazardous-contamination-disclosure`** — Two retrievals would finish this row: K.S.A. 65-1,222 onwards, and then K.A.R. art. 28-71 by the rules.ks.gov route the corrected brief sets out. T…
97. **`hazardous-contamination-disclosure`** — Pattern defect for the SOP, same shape as the brief's 'THC' example: the acronym 'CELR' matched case-insensitively inside the case names 'McElroy v…
98. **`hazardous-contamination-disclosure`** — The one genuinely unresolved point in my slice, and I would rather flag it than guess. Kansas almost certainly has an environmental use control reg…
99. **`hoa`** — PACKET/BRIEF CORRECTION, not a row defect: both this topic's packet title-battery note and the slice pointers state that "Kansas has NO general HOA…
100. **`informal-dispute-resolution`** — CORPUS NOTE for sync, not a law question: chapter 5 (dispute resolution and arbitration) is now in the index — K.S.A. 5-201 et seq., 5-423 to 5-453…
101. **`jury-waiver`** — Is a PRE-DISPUTE jury-trial waiver in a Kansas residential lease enforceable? No Kansas statute answers it. K.S.A. 60-238(a) says the right declare…
102. **`jury-waiver`** — Worth noting for the eviction rows generally: K.S.A. 61-3202(b) makes a Kansas eviction jury-triable on either party's demand made by the pretrial…
103. **`late-fee-limit`** — UPGRADE (2026-10-24): K.S.A. 9-2230 is now in the index and was read section-open, closing this row's only out_of_corpus_needed entry. The row was…
104. **`lead-safe-certification`** — UPGRADE (2026-10-24): all seven sections this row listed under out_of_corpus_needed (K.S.A. 65-1,201, 65-1,205, 65-1,207 through 65-1,211) are now…
105. **`lead-safe-certification`** — The row REMAINS NEEDS_REVIEW, and its status never rested on those seven sections. The blocker is K.A.R. art. 28-72, made load-bearing by K.S.A. 65…
106. **`lead-safe-certification`** — Carried forward as a correction, not a question: this answer file's reg_level previously said the container cannot reach the K.A.R. website. That i…
107. **`lead-safe-certification`** — Two things would close this topic out. (1) K.S.A. 65-1,201 (the definitions section of the residential childhood lead poisoning prevention act) is…
108. **`lead-state-notices`** — UPGRADE (2026-10-24): all seven sections this row listed under out_of_corpus_needed (K.S.A. 65-1,201, 65-1,205, 65-1,207 through 65-1,211) are now…
109. **`lead-state-notices`** — The row REMAINS NEEDS_REVIEW, and its status never rested on those seven sections. The blocker is K.A.R. art. 28-72, made load-bearing by K.S.A. 65…
110. **`lead-state-notices`** — Carried forward as a correction, not a question: this answer file's reg_level previously said the container cannot reach the K.A.R. website. That i…
111. **`lease-notice-initial-requirement`** — Kansas has no case or statute settling whether a lease may oblige the TENANT to give more than the 30 days K.S.A. 58-2570(b) sets for a month-to-mo…
112. **`limitation-of-actions`** — Kansas statute text does not settle which limitation period governs the statutory awards inside the KRLTA — the 1½-times award against a landlord f…
113. **`maintenance-duty-shift`** — For a Kansas building with two to four households and common areas, both routes are open: the new waste-removal-duty-shift-ks clause (K.S.A. 58-255…
114. **`maintenance-duty-shift`** — K.S.A. 58-2553(b) also permits shifting the (a)(5) running-water, hot-water and heat duty in a small building. I deliberately left that limb out of…
115. **`minor-tenant-filing`** — UPGRADE (2026-10-24): chapter 38 article 1 is now in the index and the row's only blocker is cleared, so it is VERIFIED. The answer to the question…
116. **`minor-tenant-filing`** — Flagged, deliberately not resolved: K.S.A. 38-102's 'unless the minor disaffirms' clause can be read as qualifying only 'the minor's other contract…
117. **`nonpayment-notice`** — K.S.A. 58-2564(b) says two extra days for a mailed notice 'SHOULD be allowed', not 'shall'. The parallel provision in K.S.A. 61-3803 says 'SHALL be…
118. **`nonrefundable-deposit-notice`** — I verified the earlier agent's 'binary' reading of K.S.A. 58-2543(m) and (j) against the text and it holds: (m) is denomination-blind and (j) is re…
119. **`notice-delivery-methods`** — K.S.A. 58-2510 begins 'Notice as required in THE PRECEDING SECTIONS', which on its face means the pre-1975 block at K.S.A. 58-2504 to 58-2509 rathe…
120. **`notice-service-fee`** — Item 1 in work/KANSAS-ITEMS.md records the K.S.A. 61-4001(a)(2) supreme court surcharge window as having closed on 30 June 2025. That note is out o…
121. **`notice-service-fee`** — The optional clause eviction-notice-cost-ks recovers Landlord's ACTUAL documented out-of-pocket cost rather than a stated figure, unlike the Utah a…
122. **`notice-to-quit-waiver`** — K.S.A. 58-2547(a)(1) voids a lease term waiving a right or remedy 'under this act', which plainly reaches the K.S.A. 58-2564 and 58-2570 notices. T…
123. **`nuisance`** — Two out-of-corpus clusters keep this row at NEEDS_REVIEW. First, the agricultural nuisance protections at K.S.A. 2-3202 and 2-3205 (chapter 2 not i…
124. **`pest-control-notice`** — UPGRADE (2026-10-24): K.S.A. 2-2440b and 2-2440c are now in the index and were read section-open, closing both of this row's out_of_corpus_needed e…
125. **`pest-control-notice`** — ONE THING TO FIX CENTRALLY, because it is a corpus-drift problem rather than a legal one: this row's original battery recorded "'applicator|structu…
126. **`pest-control-notice`** — The row REMAINS NEEDS_REVIEW for the reason it always had: the only Kansas notice duty in this area is regulation-level (K.A.R. art. 4-13, which bo…
127. **`pest-control-notice`** — Pest-control notice (KS): the only open point is whether the Kansas pesticide law's regulations (K.A.R. art. 4-13) require a certified applicator o…
128. **`post-eviction-property`** — Post-eviction property (KS): K.S.A. 58-2565(d) is silent on whether the landlord owes any duty of care to stored property, and Kansas has neither a…
129. **`private-well-testing`** — Private well testing (KS): the state answer is a clean absence, but whether a particular Kansas rental's well must be tested is set by the county s…
130. **`purpose-limitation`** — CORRECTION, NOT AN UPGRADE (2026-10-24). K.S.A. chapter 22 article 39 is now in the index and I read 22-3901 through 22-3904 section-open. The row'…
131. **`purpose-limitation`** — The part of the absence that SURVIVES, so the row is not over-corrected: Kansas still has no analogue to N.D. Cent. Code 47-16-12 (a stated-purpose…
132. **`purpose-limitation`** — The sharp end for a Kansas landlord, and worth considering for wider treatment than one row: K.S.A. 22-3904(1) lets the court close and padlock the…
133. **`purpose-limitation`** — One section set could not be opened and it is the only thing keeping this row at NEEDS_REVIEW: K.S.A. chapter 22, article 39 (Common Nuisances, 22-…
134. **`redemption`** — A self-flagged caveat on an existing Kansas row can now be partly closed, and it is not an error so I have not filed it as one. 'edu-no-foreclosure…
135. **`redemption`** — A genuinely new Kansas landlord trap surfaced on this topic and may deserve its own row on a topic_key I was not assigned: K.S.A. 60-1011, equity s…
136. **`rent-tax`** — UPGRADE (2026-10-24): K.S.A. 79-3602, 79-3603 and 79-3606 are now in the index and were read section-open; that was the row's whole blocker, and it…
137. **`rent-tax`** — Worth noting for consistency: K.S.A. 79-3603(g) taxes room rental by 'hotels, as defined by K.S.A. 36-501' and by 'accommodation brokers, as define…
138. **`rent-tax`** — Chapter 79 is the gap on this topic. K.S.A. 79-3602, 79-3603 and 79-3606 are the Kansas retailers' sales tax definitions, imposition and exemption…
139. **`rent-tax`** — Answering the lead's question directly: nothing from L. 2026, ch. 96 persists. The widened 'transient guest' definition and the short-term-rental p…
140. **`rental-inspection`** — The open point that keeps this row at NEEDS_REVIEW, and it is the exact question the topic asks. K.S.A. 12-16,138(a) lets a city or county require…
141. **`sanitary-code-variance`** — Sanitary code variance (sanitary-code-variance): K.S.A. 31-136 lets the state fire marshal grant an exemption from a specific fire-regulation requi…
142. **`security-deposit-holding`** — Security deposit holding (security-deposit-holding): where a licensed Kansas broker is in fact acting in a residential rental and takes the tenant'…
143. **`showing-notice-waiver`** — Showing notice waiver (showing-notice-waiver): Kansas's entry notice is a standard ('reasonable notice', K.S.A. 58-2557(a)) rather than a period, a…
144. **`smoke-drift-waiver`** — Smoke drift waiver (smoke-drift-waiver) - the one open point on an otherwise clean finding: K.S.A. 21-6112 (and 21-6113 to 21-6116) are not in this…
145. **`statutory-caps`** — K.S.A. 60-19a02 (the $350,000 noneconomic-damages cap) is still in the statute book but the Revisor's own annotation records Hilburn v. Enerpipe Lt…
146. **`statutory-caps`** — K.S.A. 61-2704's $12.50 docket-fee surcharge was written to expire 30 June 2025 and the 2025 session laws carry it for FY2026 and FY2027; the corpu…
147. **`stove-refrigerator`** — K.S.A. 58-2553(a)(3) lists the landlord's maintenance duty by system -- 'all electrical, plumbing, sanitary, heating, ventilating and air-condition…
148. **`subsidy-habitability-proration`** — K.S.A. 58-2562(a)(2) reduces 'the tenant's liability for rent' 'in proportion to the diminution in the fair rental value of the dwelling unit'. In…
149. **`telecom-access`** — CORRECTION PASS (2026-10-24), Part B2. Reporting back plainly: THIS ROW HAD ALREADY CORRECTED THE FALSE PREMISE. The agent who wrote it found the l…
150. **`telecom-access`** — THE USEFUL ADDITION, now in the bodyText: the stranding is confined to the CABLE TELEVISION limb. K.S.A. 58-2553(a)(5) protects 'a communication OR…
151. **`telecom-access`** — THE SECOND ADDITION, and I think it is the strongest argument available: K.S.A. 12-2023(f)(1)(C) forbids a municipality to 'require a video service…
152. **`telecom-access`** — The row STAYS NEEDS_REVIEW, and I think correctly. The question is now precisely bounded — only whether a post-2006 state-authorized cable or video…
153. **`telecom-access`** — SCOPE OVERLAP I SHOULD FLAG, because two instructions collided. My brief told me to leave alone 'the ten utility rows that cited K.A.R. art. 82-1',…
154. **`telecom-access`** — K.S.A. 58-2553(a)(5)'s telecom-access duty protects a 'communication or cable television service duly franchised by a municipality', but since 1 Ju…
155. **`telecom-access`** — Separate and smaller: whether cable or internet counts as an 'essential service' for K.S.A. 58-2563's 1.5-months'-rent remedy (the section lists 'e…
156. **`tenant-display-rights`** — CORRECTION PASS (2026-10-24), Part B3. Reporting back plainly: THIS ROW HAD ALREADY CORRECTED THE FALSE PREMISE. The agent who wrote it had found K…
157. **`tenant-display-rights`** — What I added, because it is useful to a landlord and the row did not have it: three further limits on an association display rule, all from the res…
158. **`tenant-display-rights`** — Two flags now in the bodyText that were missing: K.S.A. 58-4617(d)'s first sentence makes a US-flag rule turn on FEDERAL law, which I have marked F…
159. **`tenant-employee-housing`** — Whether the value of employer-provided housing may be credited against the Kansas minimum wage (K.S.A. 44-1201 et seq.) or the federal minimum wage…
160. **`tenant-portal`** — tenant-portal: K.S.A. 16-1605(c) gives a tenant a right to refuse OTHER electronic transactions that 'may not be waived by agreement'. Does a singl…
161. **`tenant-screening`** — tenant-screening: K.S.A. 21-6614(k)(1) and 22-2410(g) let a person whose record is expunged say they were never arrested or convicted 'in any appli…
162. **`unbundled-parking`** — A Kansas landlord who wants a parking charge that is NOT rent has to put it in an agreement outside the rental agreement for the dwelling unit, whi…
163. **`unpaid-damages-interest`** — The one unresolved point, carried as NEEDS_REVIEW: K.S.A. 16-207(a)'s 15% cap and K.S.A. 16-205(a)'s void-as-a-penalty rule are written for 'instru…
164. **`unpaid-damages-interest`** — Kansas's 12% limited-action judgment rate (K.S.A. 16-204(e)(2)) is displaced by any rate the lease specifies, because K.S.A. 16-205(a) makes the ju…
165. **`usufructuary-lessor`** — The one unresolved point, carried as NEEDS_REVIEW: no Kansas statute says whether a lease granted by a life tenant survives the life tenant's death…
166. **`usufructuary-lessor`** — Kansas is the first state on this topic where the word 'usufruct' appears NOWHERE in the statutes at all — Arkansas got 0 hits on a Lexis whole-Cod…
167. **`utility-allowance-cap`** — Regulation gap, and the only thing in this slice I could not reach. The Cold Weather Rule and Kansas's residential utility billing and disconnectio…
168. **`utility-allowance-cap`** — K.S.A. 58-25,127(a) protects a landlord who furnishes separately metered city or water-district water 'so long as the landlord charges the tenant a…
169. **`utility-apportionment`** — Kansas's 2005 'landlord is not a public utility' safe harbour (K.S.A. 58-25,127(a)) covers WATER supplied by a city or water district only, while K…
170. **`utility-deposit-return`** — K.S.A. 12-822 requires a public or municipally owned utility to pay the customer interest on a service deposit 'at the rate determined by the state…
171. **`utility-deposit-return`** — Smaller, and utility-side rather than landlord-side: K.S.A. 12-822's third paragraph sends an unclaimed deposit held by a municipally owned utility…
172. **`utility-disconnection-notice-authorization`** — Three of this slice's topics (utility-disconnection-notice-authorization, utility-deposit-return, utility-shutoff-statute) end at the same wall: th…
173. **`utility-interruption-submeter`** — K.S.A. 58-2569 and 58-2563 protect 'electric, gas, water or other essential service', and the battery shows 'essential service' appears in only fou…
174. **`utility-landlord-account`** — LIBRARY GAP, not a Kansas question: K.S.A. 58-2553(b) lets the lease shift BOTH the (a)(4) waste duty and the (a)(5) water, hot water and heat duty…
175. **`utility-landlord-account`** — K.S.A. 12-16,123 bars a Kansas city or county from requiring a landlord to hand over a tenant list except after a health/safety citation. It binds…
176. **`utility-shutoff-statute`** — Same K.A.R. art. 82-1 wall as utility-disconnection-notice-authorization and utility-deposit-return — one combined pull of the Cold Weather Rule an…
177. **`utility-submetering-disclosure`** — Same open point as edu-utility-apportionment-ks, recorded once here because this is the topic where a landlord would act on it: K.S.A. 58-25,127's…
178. **`written-notice-required`** — Flagged as directed, and already recorded once: K.S.A. 58-2510 governs 'Notice as required in THE PRECEDING SECTIONS', which on its face means the…

## Regulation-level gaps

The Kansas Administrative Regulations **were** reached late in this pass, after I had wrongly recorded that they could not be (see §1). Where the regulation itself has now been read — the whole of the fire marshal's **K.A.R. art. 22-1**, and KDHE's asbestos article **28-50** including 28-50-9 in full — the rows below state it and several moved to VERIFIED. What is listed here is what remains genuinely reg-level: the **Cold Weather Rule**, which is not in the K.A.R. at all but set by Kansas Corporation Commission order and filed utility tariffs; **K.A.R. art. 28-72** (childhood lead) and **28-4-113** (day care home), not opened; and the **copyrighted text of the adopted 2006 IBC and IFC**, which is incorporated by reference and not reproduced in the regulation, so an occupancy threshold or maintenance duty living inside the model code stays open for that narrow reason. Each row below answers the statutory question precisely, names the source, asserts none of its content, and carries NEEDS_REVIEW.

1. **`alarm-tampering-fee`** — {"cite": "K.A.R. art. 22-1", "subject": "Fire code standards adopted by the state fire marshal", "belief": "The fire marshal's adopted code may car…
2. **`asbestos-hazards`** — {"cite": "K.A.R. art. 28-50", "subject": "Asbestos control \u2014 certification, licensing, work practices and notification standards adopted by KD…
3. **`balcony-inspection`** — {"cite": "K.A.R. art. 22-1 (Kansas fire prevention code), incorporating the International Fire Code, 2024 edition per K.S.A. 31-134(a)(4), as amend…
4. **`bed-bug-cooperation`** — {"cite": "County sanitary codes adopted under K.S.A. 19-3702, and municipal housing codes", "subject": "Pest, insect and rodent requirements for re…
5. **`certificate-of-occupancy-disclosure`** — {"cite": "Local building codes and K.A.R. art. 22-1 (Kansas fire prevention code, now to incorporate the International Fire Code, 2024 edition unde…
6. **`cold-weather-vacate-notice`** — {"cite": "Kansas Corporation Commission order and the regulated utility's filed tariff (not a codified K.A.R. regulation) (Kansas Corporation Commi…
7. **`common-area-lighting`** — K.A.R. art. 22-1 — the Kansas fire prevention code adopted by the state fire marshal under K.S.A. 31-133 and 31-134, as amended by L. 2026, ch. 74,…
8. **`common-area-lighting`** — Local housing codes under K.S.A. 12-1750 et seq. and 17-4759(b)-(c),(j) may add a lighting standard, subject to the 31-134(b) consistency rule. SOP…
9. **`confirmed-absences-habitability`** — K.A.R. art. 22-1 — the Kansas fire prevention code, adopted by the state fire marshal under K.S.A. 31-133 and 31-134 as amended by L. 2026, ch. 74,…
10. **`confirmed-absences-habitability`** — Local housing codes under K.S.A. 12-1750 et seq. and 17-4759 supply the unfitness standards item (4) says Kansas's landlord-tenant act lacks, subje…
11. **`defective-drywall-disclosure`** — K.A.R. art. 22-1 — the Kansas fire prevention code adopted by the state fire marshal under K.S.A. 31-133 and 31-134 as amended by L. 2026, ch. 74,…
12. **`designated-repairer`** — Lead-based paint certification (K.A.R. art. 28-72) and asbestos certification (K.A.R. art. 28-50) set who may perform that work; the statutes are i…
13. **`designated-repairer`** — HVAC licensure under K.S.A. 12-1540 to 12-1543 is a county and city option exercised by local rules and regulations. Whether it applies to a given…
14. **`electric-submetering-disclosure`** — Kansas Corporation Commission order and the regulated utility's filed tariff (not a codified K.A.R. regulation) (State Corporation Commission, elec…
15. **`employee-screening`** — K.A.R. article 86 (Kansas Real Estate Commission). The commission's rules govern licensure administration and could bear on how the K.S.A. 58-3037…
16. **`energy-data-release`** — Kansas Corporation Commission order and the regulated utility's filed tariff (not a codified K.A.R. regulation) (State Corporation Commission, elec…
17. **`ev-charging-requirements`** — Local building and electrical codes and permitting for an EV charger installation. Kansas building and electrical codes are adopted and enforced lo…
18. **`ev-charging-requirements`** — Kansas Department of Agriculture weights and measures regulations implementing L. 2025, ch. 91 for electric vehicle supply equipment. The K.A.R. is…
19. **`ev-charging-shared-area`** — Kansas Department of Agriculture weights and measures regulations implementing L. 2025, ch. 91 for electric vehicle supply equipment. Not in corpus…
20. **`ev-charging-shared-area`** — Local zoning, parking and electrical codes governing a charger installation in a shared lot. Local in Kansas; flagged not resolved under SOP rule 3.
21. **`family-child-care`** — K.A.R. 28-4-113 — THE PIVOT OF THIS WHOLE TOPIC AND THE REASON THE ROW REMAINS AT NEEDS_REVIEW. K.S.A. 65-530(a)(1) defines 'day care home' as 'a d…
22. **`family-child-care`** — K.A.R. article 28-4 generally (KDHE, maternity centers and child care facilities) — the licensing regulations the 65-501 et seq. act is administere…
23. **`fire-code-standard`** — K.A.R. art. 22-1 (state fire marshal; the Kansas fire prevention code). This is where the substance of the fire code lives - which edition of the I…
24. **`fire-sprinkler-duty`** — K.A.R. art. 22-1 (state fire marshal; Kansas fire prevention code). Whether a Kansas rental building of three or more units must have sprinklers, a…
25. **`flood-disclosure`** — Kansas real estate commission regulations under K.A.R. art. 86 (broker and salesperson licensure and conduct) were not opened and are not in the co…
26. **`flood-disclosure`** — Local flood plain management ordinances adopted under K.S.A. 12-766 and approved by the chief engineer of the division of water resources are the o…
27. **`frozen-standard-incorporation`** — K.A.R. art. 22-1 (state fire marshal; Kansas fire prevention code). Which edition of which nationally recognized fire prevention code the Kansas fi…
28. **`frozen-standard-incorporation`** — K.A.R. rules under K.S.A. 31-134a(b). The statute DIRECTS the fire marshal to adopt rules specifying subsequent editions of the four listed buildin…
29. **`frozen-standard-incorporation`** — K.A.R. rules under K.S.A. 58-1407 (accessibility standards for certain dwellings; rules and regulations) and 58-1405 (waiver of requirements) - not…
30. **`habitability-materiality`** — City and county building and housing codes are what K.S.A. 58-2553(a)(1) and 58-2555(a) import, and they supply the concrete standards Kansas's sta…
31. **`habitability-materiality`** — K.A.R. art. 22-1 (Kansas fire prevention code) feeds the same phrase for fire matters and is unreachable from this container; see the fire-code-sta…
32. **`habitability-statement`** — City and county housing codes are what 58-2553(a)(1) imports, and they are local law - FLAGGED NOT RESOLVED under SOP rule 3. The row says the code…
33. **`habitability-statement`** — K.A.R. art. 22-1 (Kansas fire prevention code) and the K.A.R. rules under K.S.A. 58-1407 are unreachable from this container and are not relied on…
34. **`hazardous-contamination-disclosure`** — K.A.R. art. 28-71 and the KDHE regulations implementing the environmental use control act and the voluntary cleanup program. THE MASSACHUSETTS ANAL…
35. **`hazardous-contamination-disclosure`** — K.A.R. arts. 28-50 and 28-72 (asbestos and lead-based-paint certification). Art. 28-50 is recorded in the brief as already read in full, with no Ka…
36. **`health-district-rental-rules`** — {"cite": "County sanitary codes adopted by resolution under K.S.A. 19-3702", "what_it_probably_does": "Sets the actual housing, insect-and-rodent,…
37. **`heating`** — {"cite": "Kansas Corporation Commission order and the regulated utility's filed tariff (not a codified K.A.R. regulation) (Kansas Corporation Commi…
38. **`heating`** — {"cite": "K.A.R. art. 22-1 and the state fire marshal's boiler rules under K.S.A. 44-916", "what_it_probably_does": "44-916 and 44-923(b)(5) author…
39. **`home-business`** — {"cite": "K.A.R. 28-4-113 and K.A.R. art. 28-4 generally (child care licensing)", "what_it_probably_does": "K.S.A. 65-530(a)(1) defines \"day care…
40. **`lead-safe-certification`** — {"cite": "K.A.R. art. 28-72 (Kansas Department of Health and Environment, lead-based paint activities)", "what_it_probably_does": "K.S.A. 65-1,212…
41. **`lead-state-notices`** — {"cite": "K.A.R. art. 28-72 (Kansas Department of Health and Environment), under K.S.A. 65-1,202(b) and (e)", "what_it_probably_does": "65-1,202(e)…
42. **`lease-registration`** — County register-of-deeds recording FEES are set by K.S.A. ch. 28 (fees of county officers), which is not in the corpus. The row deliberately states…
43. **`liquidated-damages`** — Kansas has no analogue to the Massachusetts Attorney General's consumer regulation (940 CMR 3.17(6)(c)) that the topic question is built on. The Ka…
44. **`meter-conservation-charge`** — State Corporation Commission regulations, Kansas Corporation Commission order and the regulated utility's filed tariff (not a codified K.A.R. regul…
45. **`meth-disclosure`** — Kansas Department of Health and Environment regulations (K.A.R. art. 28-x) are not in the corpus or the title index. The 2025 appropriation for 're…
46. **`other-landlord-facilities`** — K.A.R. art. 22-1 (state fire marshal adopted codes) and any local building/housing code supply whatever screen, lighting, stairway or fixture stand…
47. **`pest-control-notice`** — K.A.R. art. 4-13 and the related Kansas pesticide law regulations. THESE SET WHAT A CERTIFIED APPLICATOR OR REGISTERED TECHNICIAN MUST TELL A CUSTO…
48. **`pest-control-notice`** — County sanitary codes adopted under K.S.A. 19-3702 may regulate insects and rodents in housing, and K.S.A. 58-2553(a)(1) makes compliance with an a…
49. **`portable-cooling-device`** — Whether a window-mounted unit may obstruct an egress opening is a fire-code question under the International Fire Code, 2024 edition, adopted by L.…
50. **`private-well-testing`** — Any actual Kansas well-testing requirement would be in a county sanitary code adopted under K.S.A. 19-3702 (with KDHE review and approval under 19-…
51. **`private-well-testing`** — Kansas water-well construction and plugging regulations (administered under the Kansas Department of Health and Environment) are regulation-level a…
52. **`prop65-rental-warning`** — The asbestos (K.A.R. art. 28-50) and lead-based paint (K.A.R. art. 28-72) certification regulations could not be opened - the K.A.R. is not in the…
53. **`sanitary-code-variance`** — K.A.R. art. 22-1 (state fire marshal rules adopted under K.S.A. 31-133 and 31-134, which L. 2026, ch. 74, s. 2 directs toward the International Fir…
54. **`sanitary-code-variance`** — Any county sanitary code adopted by resolution under K.S.A. 19-3702, and any city housing code, is a local enactment, flagged and not resolved (SOP…
55. **`seasonal-tenancy`** — K.A.R. art. 4-27 / the secretary of agriculture's lodging establishment standards adopted under K.S.A. 36-506 and the inspection rules under K.S.A.…
56. **`security-deposit-holding`** — K.A.R. art. 86-3 (Kansas Real Estate Commission rules on broker trust accounts, the record form and term being 'prescribed by the commission' under…
57. **`sprinkler-disclosure`** — K.A.R. art. 22-1 (state fire marshal). Whether the fire prevention code and the adopted building/fire code editions call for sprinklers in a buildi…
58. **`steam-radiator-covers`** — Local housing and property-maintenance codes (not K.A.R.) are where a radiator-guarding requirement would live; they are outside the corpus and fla…
59. **`stove-refrigerator`** — Local housing and property-maintenance codes may require cooking or refrigeration equipment in a dwelling unit; they are not in the corpus and reac…
60. **`telecom-access`** — Kansas Corporation Commission order and the regulated utility's filed tariff (not a codified K.A.R. regulation) (state corporation commission) gove…
61. **`telecom-access`** — FEDERAL: 47 C.F.R. 1.4000 (the FCC over-the-air reception devices rule) is the probable source of any satellite-dish right in Kansas and was NOT re…
62. **`tenant-confidential-information`** — No K.A.R. article was identified as bearing on tenant data; none is asserted. The attorney general enforces K.S.A. 50-7a02(g) by action in law or e…
63. **`tenant-employee-housing`** — Any farm-labour or migrant housing standards would be regulatory (KDHE / department of labor) rather than statutory; the K.A.R. is unreachable from…
64. **`utility-allowance-cap`** — {"subject": "KCC residential utility billing, disconnection and the Cold Weather Rule", "citation_NOT_used": "K.A.R. art. 82-1 / 82-1-220 et seq. \…
65. **`utility-deposit-return`** — {"citation": "Kansas Corporation Commission order and the regulated utility's filed tariff (not a codified K.A.R. regulation) (Kansas Corporation C…
66. **`utility-disconnection-notice-authorization`** — {"citation": "Kansas Corporation Commission order and the regulated utility's filed tariff (not a codified K.A.R. regulation) (Kansas Corporation C…
67. **`utility-landlord-account`** — {"citation": "Kansas Corporation Commission order and the regulated utility's filed tariff (not a codified K.A.R. regulation) (Kansas Corporation C…
68. **`utility-shutoff-statute`** — {"citation": "Kansas Corporation Commission order and the regulated utility's filed tariff (not a codified K.A.R. regulation) (Kansas Corporation C…
69. **`water-heater-temperature`** — {"citation": "K.A.R. art. 22-1 (state fire marshal), adopting the International Fire Code 2006 edition (K.A.R. 22-1-3, read in full 2026-10-24; the…
70. **`window-guards`** — {"citation": "K.A.R. art. 22-1 (state fire marshal), adopting the International Fire Code, 2024 edition, under K.S.A. 31-133 and 31-134 as amended…

## Sections a researcher asked for, and whether they were opened

199 distinct out-of-corpus sections were requested during the canvass. **116 of them were then fetched verbatim and added to the index**, so the row that wanted them was answered on the section's own text.

Still unheld, by chapter — no row asserts the content of any of these:

* **ch. 2** — K.S.A. 2-2304, K.S.A. 2-2443a, K.S.A. 2-2457, K.S.A. 2-3202, K.S.A. 2-3205, K.S.A. 2-713
* **ch. 3** — K.S.A. 3-703, K.S.A. 3-706, K.S.A. 3-708
* **ch. 7** — K.S.A. 7-208
* **ch. 8** — K.S.A. 8-138a, K.S.A. 8-143
* **ch. 10** — K.S.A. 10-24
* **ch. 13** — K.S.A. 13-1417
* **ch. 16** — K.S.A. 16-108-233
* **ch. 17** — K.S.A. 17-1630, K.S.A. 17-6913, K.S.A. 17-7925, K.S.A. 17-7926, K.S.A. 17-7927
* **ch. 19** — K.S.A. 19-26,115
* **ch. 21** — K.S.A. 21-5426, K.S.A. 21-6112, K.S.A. 21-6113, K.S.A. 21-6114, K.S.A. 21-6116, K.S.A. 21-6301, K.S.A. 21-6302, K.S.A. 21-6303, K.S.A. 21-6304, K.S.A. 21-6306, K.S.A. 21-6308, K.S.A. 21-6308a, K.S.A. 21-6309, K.S.A. 21-6412, K.S.A. 21-6419, K.S.A. 21-6422
* **ch. 22** — K.S.A. 22-4903, K.S.A. 22-4904, K.S.A. 22-4905, K.S.A. 22-4909
* **ch. 26** — K.S.A. 26-501a, K.S.A. 26-501b, K.S.A. 26-503, K.S.A. 26-506, K.S.A. 26-509, K.S.A. 26-512, K.S.A. 26-514, K.S.A. 26-516, K.S.A. 26-518
* **ch. 28** — K.S.A. 28-72
* **ch. 32** — K.S.A. 32-1031, K.S.A. 32-1032
* **ch. 38** — K.S.A. 38-6, K.S.A. 38-615, K.S.A. 38-622
* **ch. 40** — K.S.A. 40-4906
* **ch. 58** — K.S.A. 58-14
* **ch. 59** — K.S.A. 59-30,118
* **ch. 60** — K.S.A. 60-31a
* **ch. 65** — K.S.A. 65-1, K.S.A. 65-1,222, K.S.A. 65-16,101, K.S.A. 65-34,125, K.S.A. 65-4105, K.S.A. 65-4111
* **ch. 66** — K.S.A. 66-1,176, K.S.A. 66-1,176b, K.S.A. 66-1,209
* **ch. 73** — K.S.A. 73-201c
* **ch. 75** — K.S.A. 75-2955, K.S.A. 75-4316, K.S.A. 75-45, K.S.A. 75-453, K.S.A. 75-458, K.S.A. 75-5712
* **ch. 76** — K.S.A. 76-761a
* **ch. 79** — K.S.A. 79-32,310
* **ch. 83** — K.S.A. 83-201, K.S.A. 83-219, K.S.A. 83-225
* **ch. 16a** — K.S.A. 16a-1-101
* **ch. 264** — K.S.A. 264-00-2288

---

### §5 — The independent check

The check was run by agents that did not produce the work, at most two rounds, one agent at a time, with round 2 scoped to the rows edited after round 1 — and it stops early on a clean round.

## Round 1 — the whole set

I did not produce this work. My job was to try to break it. This records what broke, what did not,
and what I could not settle. Row ids are exact, so a second round can be scoped to whatever the
concurrent correction pass changes after this report.

Snapshot: the delta I checked was built from `work/answers` as it stood at the time of writing —
**234 answer files, 244 new rows, 21 tagged existing rows** (201 VERIFIED / 43 NEEDS_REVIEW among
the new rows). A correction pass was running concurrently; the brief said 155 VERIFIED rows cite an
unlisted section and `check_citations.py` now reports 159, so rows did move under me.

---

## 1. What I checked, and by what method

**Rows re-verified against the cited sections' own text: 47.** Every `rule_type` (REQUIRED 1,
CONDITIONAL 9, PROHIBITED 3, CONSTRAINED 2, RECOMMENDED 32) and both `content_type`s
(LEASE_CLAUSE 5 of the 16 in the delta, LANDLORD_EDUCATION 42), with a deliberate over-sample of
VERIFIED rows (41 of 47) and of confirmed-absence rows (24).

**Where the sample came from.** 30 of the 47 were drawn from
`work/CHECK-TARGETS-unlisted-sections.txt` — the 129-line substantive tail — as instructed. The
rest came from the delta's LEASE_CLAUSE rows, its REQUIRED and PROHIBITED rows, the code-edition
rows named in error shape #2, and the 20 packets carrying an editorial "(NONE …)" block
(error shape #4).

**Method, in order.** (a) The four scripts in the brief, plus `merge_answers.py` to build a delta
CSV and `prove_scope_fence.py` against it. (b) An independent conventions check I wrote myself over
the 244 new rows rather than trusting the merge gate. (c) For each sampled row, the section's full
operative text from `ksection.py` / the index, set against the row's own words — I built a harness
that prints the row's sentence containing the citation next to the section's title and body, and
read all 129 CHECK-TARGETS pairs that way. (d) `kslaw.py` and `kschapter.py` on every section where
currency was load-bearing. (e) Two of my own full batteries with differently-worded patterns from
the ones the rows recorded, each in one invocation with the `zqxvbnmwt` control and a known
positive. (f) 23 recorded batteries replayed with `replay_batteries.py`. (g) Live reads on
ksrevisor.gov through the built-in browser, to validate the index rather than take it on trust.

**Sections I opened in full** (index text, and the four marked ★ also read live on ksrevisor.gov):
5-401, 5-431, 5-434, 5-509, 8-1101, 8-1102, 9-2230, 12-189, 12-1509, 12-1541, 12-16,123, 12-16,138,
12-16,219, 12-1510, 12-1692, 12-1750, 12-1777, 12-2001, 12-3012, 12-4111, 12-4119, 12-4911,
12-5244a, 12-5256, 12-741, 12-758, 12-760, 12-808c, 17-2346, 19-3701, 2-3901, 21-5414, 21-5809,
21-6109, 21-6110, 21-6111, 21-6614, 31-132a, 31-133, 31-134, 31-134a, 31-140, 31-142, 32-1013,
36-506, 36-515a, 39-1101, 44-1001, 44-1004, 44-1015, 44-1017, 44-1017a, 44-1141, 44-1525, 44-1819,
44-508, 44-510j, 44-534, 44-774, 44-915, 48-1606, 48-933, 48-938, 50-1,101, 50-1301, 50-6,147,
50-634, 50-699, 58-1401, 58-2216, 58-25,100, 58-25,127★, 58-2510, 58-2524, 58-2541, 58-2542,
58-2546, 58-2547★, 58-2548, 58-2553★, 58-2563, 58-2568, 58-2569, 58-2570, 58-2571, 58-2573,
58-2801, 58-303, 58-3050, 58-3063, 58-3077, 58-3078a, 58-3101, 58-3106, 58-3206, 58-3701, 58-4301,
58-4302, 58-4601, 58-4603, 58-4606, 58-4611, 58-4618, 58-4704, 58-816, 58-9a-403, 60-1001, 60-1501,
60-1701, 60-2001, 60-203, 60-207, 60-2301, 60-234, 60-2414, 60-256, 60-304, 60-3301, 60-3611,
60-4105, 60-4111, 60-414, 60-4708, 60-4901, 60-4905, 61-2802, 61-3803, 65-530★, 65-5301, 65-5309,
66-104, 77-416, 77-421, 77-441, 79-3602.

**Disclosure of my own side effect.** I edited no answer file, row, script or log. I did run
`scripts/merge_answers.py --write` to build the delta CSV the scope-fence check needs; that script
also rewrites `work/log-material.json` as a side effect. The rewrite is deterministic from the
answer files, so it reflects the answers as they stood when I ran it, which is what the log writer
would produce anyway — but it is a write I caused and it should be regenerated after the correction
pass finishes.

---

## 2. Defects, worst first

### WRONG

**W1. Fourteen rows tell the reader the Kansas Administrative Regulations could not be reached. The
pass established that they can be, on the canvass date, and read three articles in full.**

The brief's own corrected "Regulations" section says it plainly: *"Do **not** write that the K.A.R.
is unreachable — it is not."* `work/log-section1.md` and `KAR-FINDINGS-2026-10-24.md` record
art. 22-1 (all seven regulations), art. 28-50 (listed whole, 28-50-9 read whole) and all 17 of
agency 82's articles as read at rules.ks.gov on 2026-10-24. Fourteen delivered rows still carry the
superseded claim in `notes`:

| row id | status | the row's own words |
|---|---|---|
| `edu-no-water-heater-rule-ks` | VERIFIED | "Those regulations are K.A.R. art. 22-1 and **are unreachable here**" |
| `edu-fire-code-standard-ks` | VERIFIED | "K.A.R. art. 22-1, which is not in this corpus and **which the container cannot reach**" |
| `edu-employee-screening-ks` | VERIFIED | "(K.A.R. article 86) are neither in the corpus nor in the title index and **the container cannot reach the K.A.R. website**" |
| `edu-no-common-area-lighting-rule-ks` | NEEDS_REVIEW | "regulation-level in K.A.R. art. 22-1, which is not in the corpus and **which the container cannot reach**" |
| `edu-fire-sprinkler-duty-ks` | NEEDS_REVIEW | "resolves into K.A.R. art. 22-1, which is **unreachable from this container**" |
| `edu-confirmed-absences-habitability-ks` | NEEDS_REVIEW | "the K.A.R. is not in the corpus and **the container cannot reach it**" |
| `edu-no-electric-submeter-disclosure-ks` | NEEDS_REVIEW | "**the container cannot reach the K.A.R. website**" |
| `edu-no-energy-data-release-ks` | NEEDS_REVIEW | "neither in the corpus nor in the title index and **the container cannot reach the K.A.R. website**" |
| `edu-utility-deposit-return-ks` | NEEDS_REVIEW | "**not reachable from this container**" / "K.A.R. could not be reached" |
| `edu-no-utility-notice-authorization-ks` | NEEDS_REVIEW | "**not reachable from this container**" |
| `edu-utility-shutoff-rules-ks` | NEEDS_REVIEW | "**unreachable here**" |
| `edu-family-child-care-ks` | NEEDS_REVIEW | "**which the container cannot reach**" (K.A.R. 28-4-113) |
| `edu-lead-safe-certification-ks` | NEEDS_REVIEW | "**the container cannot reach it**" (art. 28-72) |
| `edu-no-lead-state-notices-ks` | NEEDS_REVIEW | "regulations **cannot be reached from this container**" |

Three of these are the worst, because the article they say is out of reach is one the pass read
whole:

* **`edu-fire-code-standard-ks`** — the row is titled "Which Fire Code Applies, and to Which
  Buildings" and its first sentence is *"NEEDS_REVIEW for one reason only: the Kansas fire
  prevention code's CONTENT lives in K.A.R. art. 22-1, which is not in this corpus and which the
  container cannot reach."* The row is `VERIFIED`, and 8,000 characters later an
  `UPGRADE (2026-10-24)` block gives the answer in full — 22-1-3 adopts the 2006 IFC and the 2006
  IBC, the 2024 IFC is not in force. The finding is in the row; the row's lead sentence contradicts
  it. For product content a reader scans, the lead sentence is the row.
* **`edu-no-common-area-lighting-rule-ks`** — this one is worse than stale, because the false claim
  is *load-bearing for a status change made on the canvass date itself*. Its correction block reads:
  *"STATUS CHANGED VERIFIED -> NEEDS_REVIEW: the statutory answer is firm … but the operative
  lighting standard is regulation-level in K.A.R. art. 22-1, which is not in the corpus and which
  the container cannot reach, so the row must not be read as proving no standard exists."* The row
  was downgraded on a reason the pass had already disproved, and it never names the 2006 IFC. There
  *is* an honest narrow gap here — the IFC's own egress-illumination text is incorporated by
  reference and not reproduced in the K.A.R. — but that is not the reason the row gives.
* **`edu-no-water-heater-rule-ks`** — VERIFIED, and the "unreachable here" sentence stands with no
  correction appended. The substantive answer is unaffected and well built (no Kansas water-heater
  temperature statute; 44-915(a)(5)'s 210°F is correctly presented as an exemption ceiling, not a
  setting — I checked the section and the quote is verbatim; 12-1510 delegates plumbing codes).

**W2. `edu-no-electric-submeter-disclosure-ks` contradicts itself inside one field.** The same
`notes` says "the container cannot reach the K.A.R. website" and, further on, *"The official
K.A.R. was read at rules.ks.gov on 2026-10-24: K.A.R. 82-1-220 is titled 'Complaints.' …"*. Both
sentences are delivered to the reader.

Severity note, stated fairly: in every one of the fourteen, the *conclusion* survives. None of them
asserts regulatory content, none calls a regulated subject unregulated, and for the six utility rows
the thing genuinely not read is a **KCC order and a filed tariff**, which is correct and is not in
the K.A.R. at all. The defect is that the stated reason is false, and the brief forbade exactly this
sentence.

### UNSUPPORTED

**U1. `edu-nuisance-abatement-ks` states a 2026-amended procedure as current, with no rider.** The
row says: *"12-1617e(e) covers nuisance motor vehicles through the **K.S.A. 8-1102(a)(2)**
impoundment and auction procedure (8-1102 is among the fetched sections)."* K.S.A. 2025 Supp.
8-1102 was **amended and then repealed-and-replaced** by L. 2026, ch. 142, § 6 (Senate Substitute
for HB 2372; I confirmed the act's own words in the 2026 volume: *"Sec. 6. K.S.A. 2025 Supp. 8-1102
is hereby amended to read as follows"* and *"Sec. 13. … K.S.A. 2025 Supp. 8-1102 and 75-6104 are
hereby repealed"*; the Governor's veto was overridden). The corpus text of 8-1102 is pre-2026, the
row's `currency` map has **no entry for 8-1102 at all**, and the subsection lettering the row names
is not shown to have survived. The row also uses the bare form where the supplement form is correct
(`K.S.A. 2025 Supp. 8-1102`).

This is the pass's own standard, not an outside one: two sibling rows citing the same section —
`edu-governmental-fines-ks` and `edu-no-parking-rules-notice-ks` — carry an exemplary rider naming
ch. 142, § 6, HB 2372, the veto override, and the supplement form. `edu-nuisance-abatement-ks` and
`edu-trespass-notice-ks` do not.

**U2. `prove_currency.py`'s rider gate does not test what its headline claims.** Its `RIDER` regex
(`as amended by|L. 202[56]|not amended|no 2025 or 2026|no session-law`) is matched against the whole
row, section-agnostically. `edu-nuisance-abatement-ks` passes it on the sentence *"no 2025 or 2026
act creates a landlord nuisance duty"* — a statement about the topic, not about 8-1102. So the
script prints `=== rows citing a session-touched section WITHOUT a currency rider: NONE ===` and
`RESULT: CURRENCY PROVED FOR EVERY ANSWERED TOPIC` while a row citing a session-touched section
carries no rider for it. `check_citations.py` caught it. **The "currency proved" line should not be
relied on as written**; the per-section check in `check_citations.py` is the one that works.

### IMPRECISE

**I1. Stale "WHY NEEDS_REVIEW" lead paragraphs on nine VERIFIED rows.** A late upgrade pass flipped
`verification_status` to VERIFIED and appended an `UPGRADE (2026-10-24)` block, without rewriting
the paragraph that explains why the row is NEEDS_REVIEW. Each row therefore opens by telling the
reader it is unverified, and in several cases by naming sections it says were "NOT opened" — which
reads as a rule-12 self-accusation even though the upgrade block shows they were later opened:
`edu-fire-code-standard-ks`, `edu-frozen-standard-incorporation-ks`, `edu-cannabis-ks`,
`edu-eminent-domain-ks`, `edu-employee-screening-ks`, `edu-no-farmland-hunting-rights-ks`,
`edu-minor-tenants-ks`, `edu-no-code-variance-notice-ks`, `edu-lease-arbitration-ks`. I checked all
nine: every one carries the upgrade block, and the fire pair's block carries the 22-1-3 / 2006
IFC-IBC finding, so **no finding is lost** — this is presentation, not substance.

**I2. `edu-trespass-notice-ks`** cites 8-1102 without the ch. 142 rider, but only as discarded
battery residue ("'criminal trespass' = 19 hits … K.S.A. 8-1102 (abandoned vehicles)"). Nothing
rests on it.

**I3. Twenty answer files record a `battery.command` that is not literally re-runnable** — two
invocations joined by the bare word `THEN` (`accessory-dwelling-unit`, `attorney-fees`,
`automatic-renewal`, `balcony-inspection`, `bed-bug-cooperation`, `binding-arbitration`,
`carpet-cleaning`, `casualty-and-mitigation-waivable`, `certificate-of-occupancy-disclosure`,
`children-occupancy`, `cold-weather-vacate-notice`, `collection-fee`, `foreclosure-disclosure`,
`forfeiture-redemption`, `frozen-standard-incorporation`, `government-fee-reimbursement`,
`guest-rights`, `habitability-presumption`, `habitability-statement`,
`hazardous-contamination-disclosure`). `replay_batteries.py` reports `carpet-cleaning` as
**CONTROL DIRTY** for this reason alone. I re-ran the ksearch half by hand: control clean, and the
recorded counts hold (`carpet` 1 hit in 60-256, `professional(ly)? clean` 0, `wear and tear` 4 in 4,
`clean and safe` 5 in 3). No absence finding is affected; the reproducibility record is.

**I4. Three rows disclaim a section the corpus actually holds, and the direction of error is
conservative.** `edu-informal-dispute-resolution-ks` says *"K.S.A. 5-509 … is NOT IN CORPUS … the
row describes 5-518's own operative words and does not state 5-509's content"* — 5-509 is in the
index as `statute-fetched` and the row's characterisation of it (court-ordered mediation) is
correct. Same shape on `edu-no-shoreline-disclosure-ks` ("the exceptions are in 58-3206, which I did
NOT open in full") and `water-meter-charge-notice-ks` ("K.S.A. 66-104 … is listed under
out_of_corpus_needed"). In all three the section is present, the row's inference is right, and the
row understates what was available. Worth correcting, but this is the error pointing the safe way.

**I5. Loose session-law phrasing.** Several fire rows say "L. 2026, ch. 74 (itself amended by
L. 2026, ch. 155)". Ch. 155 is a reconciliation act that amends the *statutes*, not ch. 74.

**I6. A convention question rather than a defect: twelve topics deliver two rows under one
`topic_key`**, in every case one LEASE_CLAUSE plus one LANDLORD_EDUCATION —
`adverse-proceeding-notice`, `animal-care-access`, `association-obligations-disclosure`,
`automatic-renewal`, `bed-bug-cooperation`, `collection-fee`, `common-area-lighting`,
`construction-liens`, `designated-repairer`, `firearms`, `notice-service-fee`,
`tenant-employee-housing`. No topic has two rows of the same `content_type`, and `prove_coverage.py`
passes it. But §3 of the brief frames clause / education / absence / tag as a *choice*, and SOP
rule 57 says not to spread one subject across two rows. This needs a ruling, not a fix.

---

## 3. Mechanical check results

| check | result | what I make of it |
|---|---|---|
| `check_citations.py` | 244 rows, 545 distinct sections. **0** cites to a non-existent section in the ten full-text chapters. **0** `K.S.A. §` forms. **1** stale-rider flag (U1). 51 out-of-corpus sections across 22 chapters, all flagged. 159 VERIFIED rows citing a section not in `sections_opened` (advisory). | The one substantive flag is real and is U1. The 159 is a bookkeeping artifact — see §4. |
| `prove_coverage.py` | **ALL MECHANICAL CHECKS PASS** — 234/234 topics covered, no row keyed to another topic, no duplicate row id, no answer file for an unlisted topic, no absence topic without a control, no collision with an active library id, no topic Kansas already had. | Clean. I re-derived the 234/234 and the id-collision check independently. |
| `prove_currency.py` | "CURRENCY PROVED FOR EVERY ANSWERED TOPIC"; 38 cited sections amended or repealed in 2025/2026; 0 unridered. | **The 0 is not trustworthy** — see U2. The 38-section amendment list is useful and independently derived. |
| `prove_scope_fence.py` | **SCOPE FENCE HELD.** 244 rows new; 21 tagged. Every tagged row byte-identical outside `states` and `notes`; all 21 append exactly `KS`; all 21 notes segments begin `KS:`; no delivered row deactivates or supersedes an existing one. | The fence holds. This was the check I most expected to find something in, and it is clean. |
| `replay_batteries.py`, 23 topics | 22 clean. `carpet-cleaning` "CONTROL DIRTY" (harness artifact, I3, disproved by hand). `meth-disclosure` count drift on the broad pattern `disclos` (1571 → 1588), no 0→hit flip. | No absence finding rests on a polluted control or a stale count. |
| my own conventions check, 244 new rows | **0 defects.** `states`=KS, `is_active`=TRUE, `last_checked`=`2026-10-24`, `effective_from`=`2026-10-24`, `choice_group`/`is_default`/`supersedes` blank, all 14 groups from the master, valid `rule_type`/`content_type`/status, all ids end `-ks`. **100%** of LEASE_CLAUSE rows carry a `lease_clause_basis`, **0%** of LANDLORD_EDUCATION rows do. All 12 bodies beginning `[Optional` are CONDITIONAL. No citation inside any `bodyText`. 7 new variables, all declared. | The conventions are met exactly. The `effective_from` normalisation moved 18 statutory dates into `notes` as designed. |
| error shape #1 (the false K.A.R. 82-1 citation) | **CLEARED.** 7 rows mention `82-1-220` / `art. 82-1`; every mention is withdrawal or correction language. No delivered field cites it as authority. | The ten inherited rows were genuinely fixed. |
| error shape #2 (code editions) | **CLEARED.** 6 rows name a code edition; **none** asserts the 2024 IFC is in force. `edu-fire-code-standard-ks` and `edu-frozen-standard-incorporation-ks` name 22-1-3's 2006 IFC/2006 IBC as what is in force and say ch. 74 § 2's direction has not been carried into regulation. `edu-no-balcony-inspection-ks` has been corrected. | Fixed, apart from the stale lead paragraphs (I1). |
| error shape #4 (editorial "(NONE …)") | 20 packets carry the block. **10 of the 20 came back PRESENT** on re-derivation — an exact 10/10 split against the hypothesis. 19 of 20 rows carry their own hit counts in `notes`; the 20th (`utility-deposit-return`) records a full battery with a clean control and a known positive in its answer file. | The warning worked. The lead's hypothesis was overturned on more than half, by the agents' own work. |

---

## 4. The CHECK-TARGETS tail: the bookkeeping-versus-substance split

This was the brief's highest-value target and the likeliest home of a rule-12 violation. **I found
none.**

**Every one of the 129 sections is present in the index in full operative text.** Not one returns
NOT IN CORPUS. Three are special cases the rows handle correctly: `5-401` and `58-303` are repealed
stubs (the rows cite them only as the site of a false-positive case annotation), and `58-9a-403` is
one of the 48 Uniform Principal and Income Act sections whose chapter prefix the index once dropped
and which `log-section1.md` records as repaired.

**The split, from reading all 129 claim-against-section pairs:**

* **Roughly 70 of the 129 are battery residue, not authority.** The row's sentence is of the form
  "pattern X returned N hits and the only one is K.S.A. Y, which is about Z, not our subject". The
  row asserts nothing the section must support, so rule 12 does not bite. Examples:
  `edu-no-carpet-cleaning-rule-ks` on 60-256 (summary judgment); `edu-translation-duty-ks` on
  60-234 (discovery); `edu-no-prop65-warning-ks` on 60-414 (presumptions);
  `edu-no-radiator-cover-rule-ks` on 48-1606 ("so Kansas law does not contain the word 'radiator' at
  all"); `edu-no-truth-in-renting-ks` on 50-1,101 (discount cards); `edu-rent-escalation-ks` on
  44-1819 ("the word is literally 'escalators'"). I spot-checked a dozen of these against the
  section text and the characterisations were accurate every time.
* **Roughly 55 are load-bearing.** I tested 30 of those 55 against the section's own words and found
  **no misattribution and no overstatement**.
* **The `sections_opened` gap is bookkeeping, as the brief suspected, and the CHECK-TARGETS file
  over-reports.** Several rows that the file lists as having "no record the section was opened"
  in fact *quote the section verbatim and correctly*, and three rows go the other way and disclaim a
  section the corpus holds (I4). The convention the agents used — recording what they opened that
  was not already established — explains all of it.

---

## 5. Rows I tried hardest to break and could not

Recorded as evidence, because a failed attack is a result.

1. **`edu-firearms-ks` / K.S.A. 12-189.** My strongest prior. 12-189 is a 15,855-character
   retailers' sales-tax rate section, cited by a firearms row. It holds: the row cites it only as
   the subject of a cross-reference inside 12-16,124(c)'s savings clause, and carries an explicit
   rider — *"K.S.A. 12-189 is cited above only as the subject of a cross-reference inside the
   preemption scheme, not for its own content. For completeness it was amended by L. 2025, ch. 126,
   s 2 … That amendment concerns sales tax rates and cannot affect the firearms preemption point
   this row states; no proposition here rests on 12-189's text."* Unbreakable.
2. **`water-meter-charge-notice-ks` / K.S.A. 58-25,127.** The only `REQUIRED_DISCLOSURE` basis in
   the whole delta, resting on a section that sits inside the Kansas Manufactured Home Residential
   Landlord and Tenant Act — a deprioritized product area. If it were confined to parks, a
   LEASE_CLAUSE row would be asserting a statutory disclosure duty that does not exist for ordinary
   tenancies. **I read 58-25,127 live on ksrevisor.gov.** (a) expressly reaches a landlord who
   furnishes water *"pursuant to subsection (a)(5) of K.S.A. 58-2553"* — the ordinary KRLTA duty —
   *"or subsection (a)(6) of K.S.A. 58-25,111"*. (b) and (c) are freestanding imperatives. The
   basis is right, the clause tracks (a), (b) and (c) without overreach, and the row's reading of
   the same-rate requirement as a condition of the public-utility exemption rather than of (b)/(c)
   is correct on the text.
3. **The `L. 2026, ch. 155, § 8` citation for K.S.A. 31-133.** I thought I had a propagated
   mis-citation: `kslaw.py` shows HB 2534 — printed at **ch. 128** — amending 31-133 at Sec. 6,
   while four rows cite ch. 155 § 8. Ch. 155's own title resolves it: *"An Act reconciling multiple
   amendments to certain statutes; amending K.S.A. … **31-133, as amended by section 6 of 2026
   House Bill No. 2534** …"*. Ch. 155 is the reconciliation act, so its § 8 is the correct
   final-text citation, and `edu-fire-sprinkler-duty-ks`'s parenthetical *"(operative 2026 text:
   L. 2026, ch. 155, s 8, identical in this subsection to L. 2026, ch. 74, s 1)"* is exactly right.
   Attack failed.
4. **`edu-hoa-ks` / K.S.A. 60-3611.** Looked like a volunteer-immunity section cited for an
   association fee rule. I opened 44-1017a: **(e)(1)** defines "Association" as *"a non-profit
   homeowners association as defined in K.S.A. 60-3611"*, **(e)(2)** defines "Commission" as the
   Kansas human rights commission, and **(c)** ends *"The court may award attorney's fees to the
   prevailing party."* The row is right on all three.
5. **Radon.** My own battery turned up K.S.A. 48-16a01–48-16a12 (the radon certification law) and
   K.S.A. 58-3078a (mandatory radon language in contracts). I expected a missed statute. The pass
   had already found 58-3078a, quotes it, and correctly confines it to **sales** — *"confining it
   to SALES: 'each contract for the sale of residential real property shall contain…'"*. Attack
   failed.
6. **Nine absence rows, re-attacked with my own differently-worded patterns** in two batteries, each
   one invocation, control `zqxvbnmwt` clean, known positive live (`security deposit` 81 hits in 23
   sections — matching `utility-deposit-return`'s recorded count exactly). `stigmatiz` 0;
   `psychologically (impacted|affected)` 0; `window guard` 0; `peephole|door viewer` 0;
   `keyless|smart lock|electronic access` 0; `radiator` 2 hits, both "irradiation" inside 48-1606;
   `bed ?bug` 0; `clandestine` 0; `foreclos[a-z]* [^.]{0,60}tenan` 0. **No absence row flipped.**
7. **The index itself.** I read 58-2553, 58-2547, 58-25,127 and 65-530 live on ksrevisor.gov and
   compared them to the stored text. They match, including the 58-2553(a)(5) cable sentence and
   58-2547(a)(4)'s narrow "fire, theft or breakage with respect to common areas" exception. The
   repaired index is trustworthy on the sections that carry the most weight.
8. **Verbatim-quote checks that all held**, each against the section's own text: 44-915(a)(5)'s
   210°F/200,000 BTUH/120-gallon exemption limits; 44-510j(g)'s overcharge sentence; 50-634(b)
   ("damages or a civil penalty … whichever is greater"); 58-2546(c) (one-year cap);
   58-2570(b) (15 days, military orders) and 58-2570(d) (motion under 60-207(b), service under
   60-205, undertaking); 58-2571(a)–(b) including "repeated demands for entry otherwise lawful but
   which have the effect of unreasonably harassing the tenant"; 58-4603 (provisions mandatory);
   60-203(c) verbatim, with the row itself flagging that the section still cites the pre-2015
   50 U.S.C. § 501 numbering; 60-4905(b) (pre-1972 silica/asbestos presumption); 9-2230 (mortgage
   business act, per its own subsection (e)); 12-1509(g)(1) ("prior to any occupancy … until an
   occupancy permit is issued"); 36-515a(b) (90-day closure limit); 58-3206(b); 60-4708;
   66-104(a); 21-6109(a) (ten-foot access point) and (e) (enclosed area); 31-132a's apartment-house
   definition **and its repeal** by HB 2739 ("also repealing K.S.A. 31-132a").
9. **`edu-heating-ks`** (REQUIRED, VERIFIED) is the single best row I read. It states the 58-2553(a)(5)
   duty, says plainly that "reasonable" is the whole standard with no implied warranty behind it,
   gives both statutory exceptions and only those, separates supplying heat from paying for fuel on
   the section's own last sentence, and states the 58-2553(b) four-household shift limit correctly.
   I could not find a word of overreach in it.

---

## 6. Judgment: is the set fit to deliver?

**Yes, with one class of edit first.** The law in this delta is, on a 47-row sample weighted toward
the places most likely to fail, accurate. The conventions are met exactly. The scope fence holds.
The three error shapes I could test mechanically (#1 the false K.A.R. 82-1 citation, #2 code
editions, #4 editorial absences) are genuinely closed, and #4 closed by the agents overturning the
lead's hypothesis on 10 of 20 topics. The absence discipline is real: every absence row records a
battery with a control, 23 replayed clean, and nine re-attacked with fresh patterns did not move.
The restraint is the most persuasive thing in the set — rows repeatedly decline to state content
they did not read, and three of them decline too much.

**What I would not sign off on as it stands:**

1. **The fourteen rows in W1/W2.** They are delivered to users and they say something the pass
   itself proved false, in a sentence the brief expressly forbade. The conclusions survive, so this
   is an edit to `notes`, not a re-answer — but it should not ship. Two of them need more than a
   sentence swap: `edu-no-common-area-lighting-rule-ks`, whose status change rests on the false
   reason and which should name the 2006 IFC and the narrow incorporated-by-reference gap instead;
   and `edu-fire-code-standard-ks` / `edu-frozen-standard-incorporation-ks`, whose answers should be
   moved to the front of `notes` from the upgrade block at the end.
2. **`edu-nuisance-abatement-ks` (U1).** Either add the ch. 142 § 6 rider its two sibling rows
   already carry and the supplement form, or stop naming 8-1102(a)(2) as the live procedure.
3. **The "currency proved" claim in `prove_currency.py` (U2).** The gate does not test
   per-section ridering. It should not be cited as proof in the delivered log, and the per-section
   check in `check_citations.py` should be the one that gates.
4. **A ruling on I6** (twelve topics, two rows each) before delivery, since it is a library-wide
   convention question and not something a row-level fix settles.

**What I could not settle.** The regulation layer below art. 22-1, art. 28-50 and agency 82 — the
Cold Weather Rule as a KCC order and the utilities' filed tariffs, K.A.R. art. 28-72, K.A.R.
28-4-113, K.A.R. art. 86, and the copyrighted text of the 2006 IFC and 2006 IBC that is incorporated
by reference and not reproduced. Those are genuine open gaps, correctly flagged in the rows that
need them, and the rows assert none of their content. The only thing wrong about them is the reason
fourteen rows give for the gap.

**Rows to re-check in round 2** (the ones named above, so a second round can be scoped to whatever
the concurrent correction pass touched): `edu-no-water-heater-rule-ks`, `edu-fire-code-standard-ks`,
`edu-employee-screening-ks`, `edu-no-common-area-lighting-rule-ks`, `edu-fire-sprinkler-duty-ks`,
`edu-confirmed-absences-habitability-ks`, `edu-no-electric-submeter-disclosure-ks`,
`edu-no-energy-data-release-ks`, `edu-utility-deposit-return-ks`,
`edu-no-utility-notice-authorization-ks`, `edu-utility-shutoff-rules-ks`, `edu-family-child-care-ks`,
`edu-lead-safe-certification-ks`, `edu-no-lead-state-notices-ks`, `edu-nuisance-abatement-ks`,
`edu-trespass-notice-ks`, `edu-frozen-standard-incorporation-ks`, `edu-cannabis-ks`,
`edu-eminent-domain-ks`, `edu-no-farmland-hunting-rights-ks`, `edu-minor-tenants-ks`,
`edu-no-code-variance-notice-ks`, `edu-lease-arbitration-ks`,
`edu-informal-dispute-resolution-ks`, `edu-no-shoreline-disclosure-ks`,
`water-meter-charge-notice-ks`.

## Round 2 — the rows edited after round 1

I did not produce this work and I did not fix anything. Scope was the 70 answer files / 74 rows named
in `work/ROUND2-SCOPE.md` (the file lists 73 edited rows; `notice-service-fee` holds a second row,
`eviction-notice-cost-ks`, that the list does not name, so 74 rows exist in those files and I checked
all 74).

**Round 2 is not clean.** Three defects survive that I would not ship, one of them in a delivered
`bodyText`. Everything else I attacked held, and the currency riders — the brief's highest-value
target — are the strongest part of the set.

---

## 1. What I checked, and how

**The browser was unavailable.** My first `navigate` to ksrevisor.gov returned "Nobody answered this
permission request", so per the operating rules I made no further approval-seeking calls. Every
verification below is therefore from the local index and the 2025/2026 session-law volumes, not from
a live read. Round 1 validated the index against ksrevisor.gov on the sections carrying the most
weight; I spot-confirmed the three repairs the brief names (`58-30a08`, `12-6a05`,
`60-31a01`–`60-31a09` all resolve).

**Currency riders — the priority target.** I did not check riders against the worklists. For each one
I opened the named act's own `CHAPTER n / BILL No.` heading and its amending section in the
session-law volume and read what K.S.A. section that section amends.

* I extracted every `L. 2025/2026, ch. N, § M` citation in the 74 rows (309 occurrences, 69 distinct
  act/section pairs) and **hand-opened 34 of them**: 2026 ch. 2 §6, ch. 29 §5, ch. 35 §§7/10/20/21/22,
  ch. 56 §§6/7, ch. 74 §§1/2/3/4, ch. 76 §§4/5, ch. 96 §3, ch. 103 §1, ch. 125 §5, ch. 126 §3,
  ch. 128 §6, ch. 132 §§1/2/3, ch. 133 §1, ch. 138 §§5/10, ch. 142 §§6/13, ch. 150 §185, ch. 152 §1,
  ch. 155 §§8/13/22/26, ch. 157 §2; 2025 ch. 14 §6, ch. 17 §1, ch. 40 §166, ch. 76 §1, ch. 90 §3,
  ch. 91 §§11/16/21, ch. 97 §5, ch. 98 §5, ch. 107 §8, ch. 112 §5, ch. 117 §195, ch. 118 §§4/40/41/46,
  ch. 124 §6.
* I then ran a mechanical sweep of **every** `as amended by L. 20xx, ch. N, § M` rider in scope,
  resolving the named act section and checking it amends the K.S.A. section the rider is attached to:
  **67 rider citations across 36 rows, 0 problems.** A second sweep found no chapter-only rider: every
  rider in scope carries a section number.
* I verified the 14 bill-number↔chapter mappings the rows quote (HB 2323=ch. 61, HB 2393=ch. 35,
  SB 430=ch. 157, HB 2534=ch. 128, HB 2739=ch. 74, Sen. Sub. HB 2372=ch. 142, SB 391=ch. 152,
  HB 2378=ch. 56, HB 2481=ch. 96, SB 380=ch. 120, Sub. HB 2357=ch. 132, HB 2719=ch. 138, HB 2700=ch. 99,
  SB 427=ch. 24, HB 2702=ch. 36, HB 2466=ch. 127, SB 78=2025 ch. 14, SB 98=2025 ch. 124).
* I diffed all three 2026 versions of K.S.A. 31-133 (ch. 74 §1, ch. 128 §6, ch. 155 §8) character by
  character, and read ch. 155 §26 in full.

**The two substantive re-answers.** I opened K.S.A. 22-3901, 22-3902, 22-3903, 22-3904, 22-3905,
60-908, 31-170 and 22-4913 in full for `edu-law-enforcement-cooperation-ks`, and read L. 2026, ch. 126
§3's full reprint of K.S.A. 21-6412 plus 58-2557, 58-2565, 39-1101, 39-1102, 39-1103, 39-1107, 39-1108
and 39-1109 for `edu-no-animal-care-entry-right-ks`. I set `bodyText` and `notes` side by side on both.

**The two status promotions.** For `edu-no-purpose-limitation-ks` and `edu-rent-tax-ks` I extracted
every K.S.A. citation from both delivered fields, diffed it against `sections_opened`, and read the
surrounding sentence for each unlisted one. I then opened 58-2541, 60-908, 12-1696, 12-1697 to test
the propositions.

**The correction blocks.** I located every `STATUS NOTE` and every withdrawal block by character
offset, and separately regex-hunted every surviving "cannot reach / unreachable / could not be
reached" sentence in all 244 rows, checking each one's position against its row's correction block. I
then scanned the **delivered CSV's** `bodyText` for the two named error shapes rather than scanning
the answer files, so the test is what a reader sees.

**Other sections opened in full to test a proposition:** 58-2550, 58-2557, 58-2565, 60-2610, 61-2703,
61-2802, 66-104, 58-3102, 65-5301, 2-2440b, 2-2440c, 31-134 (2026 text).

**Batteries.** Two of my own invocations, control `zqxvbnmwt` clean in each:
`crime.{0,3}free` 0 / `drug.{0,3}free (lease|addend|housing)` 0 / `common nuisance` 24 hits in 11
sections (matching the row's recorded count exactly) / `padlock` 3 in 2 / `bona fide attempt to abate`
3 in 1; and `friable` 2 in 65-5301 / `(degrees fahrenheit|degrees f|…)` 1 / `(rental registration|…)`
1 / `fire alarm` 1 / `applicator|structural pest` 9 in 2 — all five drift patterns reproducing exactly
as `work/BATTERY-DRIFT.md` records them. Also `balcon` 1 hit, `service charge` 80 in 28.

**Scripts:** `check_citations.py`, `prove_coverage.py`, `prove_currency.py`, `prove_scope_fence.py`,
plus three gates I wrote myself (a per-section stale-rider check, a conventions check, and a
delta-versus-answer-file field comparison).

**No side effects.** I edited no answer file, row, script or log. **I did not need to regenerate the
delta** — `/mnt/user-data/outputs/lease-clauses-KS-gaps-delta.csv` is timestamped 00:34:14 and the
newest answer file is 00:33:07, so the existing delta is current and I ran `prove_scope_fence.py`
against it. I therefore did **not** run `merge_answers.py --write`, and `work/log-material.json` is
untouched by me.

---

## 2. Defects, worst first

### WRONG

**W1. `edu-no-portable-cooling-right-ks` tells the reader, in delivered `bodyText`, that Kansas has
adopted the 2024 International Fire Code. It has not.** `RECOMMENDED`, `LANDLORD_EDUCATION`,
**VERIFIED**.

The row's last sentence:

> "Separately, if a local building or fire code restricts how a window unit may be installed,
> compliance with applicable codes materially affecting health and safety is your statutory duty, and
> **Kansas adopted the 2024 edition of the International Fire Code in 2026**."

The pass's own finding, in this row's own `notes`, at offset 3:

> "**K.A.R. 22-1-3 adopts the International Fire Code 2006 edition and the International Building Code
> 2006 edition — NOT the 2024 IFC** … So any statement **in or below this note** that the 2024
> International Fire Code is adopted, in force, or 'being updated to' **is also WITHDRAWN**:
> L. 2026, ch. 74, § 2 directs that adoption and the fire marshal has not yet carried it out."

And the act itself. I read L. 2026, ch. 74 § 2 in full: it amends K.S.A. 31-134 and adds (a)(4),
which exempts a rulemaking "to update the Kansas fire prevention code with the provisions of the
international fire code, 2024 edition, with appropriate amendments" from the economic-impact-statement
requirements of K.S.A. 77-416 and 77-420, gives the attorney general 120 days, and leaves it "subject
to ratification by the legislature pursuant to K.S.A. 2025 Supp. 77-441". It adopts nothing. The act's
title says only "providing requirements for adoption of the international fire code, 2024 edition".

This is error shape #2 from the brief, alive in the delivered product. The withdrawal does not reach
it for two reasons: it is scoped "in or below **this note**", and it lives in `notes`, a different
delivered field that a reader of `bodyText` never sees. **This is the only row in the set whose
`bodyText` asserts it** — I scanned all 74 in-scope rows' delivered bodies — which makes it a
one-sentence fix, not a class of error.

**W2. `edu-confirmed-absences-habitability-ks` still carries the sentence the brief expressly forbids,
with no correction anywhere in the row.** `NEEDS_REVIEW`, in scope, and named both in round 1's W1
table and in round 1's "rows to re-check in round 2" list.

The row's words:

> "REG-LEVEL: a state fire marshal regulation under K.A.R. art. 22-1 may adopt a code with a heat or
> ventilation standard; **the K.A.R. is not in the corpus and the container cannot reach it**, so item
> (3) is stated as a statutory absence only."

The brief's words: *"Do **not** write that the K.A.R. is unreachable — it is not."* And
`KAR-FINDINGS-2026-10-24.md` records art. 22-1 — the very article this sentence names — read in full
at rules.ks.gov, all seven regulations.

22 rows received the head-of-notes `K.A.R. ACCESS CORRECTION` block. **This row received none.** I
searched its whole `notes` for `K.A.R. ACCESS CORRECTION`, `WITHDRAWN` and `WITHDRAWAL`: zero hits.
The false reason stands unsuperseded, at the point of first reading, in a row whose status it
partly explains. The row's *conclusion* (no Kansas minimum-temperature or heat statute) is unaffected
and I confirmed its battery independently — but the stated reason is false and the fix the other 22
rows got was not applied here.

### UNSUPPORTED

**U1. `edu-no-electric-submeter-disclosure-ks` gives a false reason for its NEEDS_REVIEW status, and
the correction its sibling row received was not applied to it.** `NEEDS_REVIEW`, in scope.

The row says:

> "**THE PIVOTAL SECTION I COULD NOT OPEN:** K.S.A. 66-104 defines 'public utility'. Chapter 66 is NOT
> among the ten corpus chapters and **66-104 is not among the fetched sections**, so whether a landlord
> who submeters ELECTRICITY falls inside that definition is NOT answered here — recorded under
> out_of_corpus_needed, **and the reason this row is NEEDS_REVIEW rather than VERIFIED**."

Its `bodyText` carries the same thing to the reader: "turns on a definition in the utilities chapter
that is **outside this library's verified sources**".

I opened 66-104. It is in the index in full operative text, titled "Utilities subject to supervision;
exceptions", history ending `L. 2024, ch. 69, § 1; July 1`. Subsection (a) is directly on the row's
question in its own words:

> "'public utility' means every corporation, company, individual, association of persons, their
> trustees, lessees or receivers, that now or hereafter may own, control, operate or manage, **except
> for private use**, any equipment, plant or generating machinery … and **all companies for the
> production, transmission, delivery or furnishing of heat, light, water or power**."

The sibling row `water-meter-charge-notice-ks`, edited in this same pass, carries the applied
correction stating exactly this: *"**66-104 is in the index as a verbatim fetched section**, along with
66-104d, 66-1,184 and 66-1268."*

This is round 1's I4 shape, but worse than any of round 1's three. Round 1 could say of those that
"the section is present, the row's inference is right, and the row understates what was available …
this is the error pointing the safe way". Here the disclaimer **is the verification status**: the row
is NEEDS_REVIEW rather than VERIFIED for a reason that is not true. And the section would have
sharpened the answer, not just confirmed it — 66-104(a)'s "except for private use" clause read against
K.S.A. 58-25,127(a), which expressly disapplies 66-104 for a *water*-submetering landlord and has no
electric counterpart, is the strongest available support for the row's own conclusion that electric
submetering is a live public-utility risk.

Round 1's W2 (this row asserting both "the container cannot reach the K.A.R. website" and "The
official K.A.R. was read at rules.ks.gov on 2026-10-24") is now superseded by the head block at
offset 3, so the self-contradiction is handled. The 66-104 claim is not.

**U2. `edu-no-energy-data-release-ks` puts the forbidden sentence ahead of its own correction.**
`NEEDS_REVIEW`, in scope, named in round 1's W1 table. This row also received no head block. The
false clause sits at offset ~6,375:

> "the Kansas Corporation Commission's rules on utility customer data (Kansas Corporation Commission
> order and the regulated utility's filed tariff (not a codified K.A.R. regulation)) are neither in the
> corpus nor in the title index and **the container cannot reach the K.A.R. website**."

Its correction arrives ~1,300 characters later and says the right thing — *"The reason this point
stays NEEDS_REVIEW is not that the K.A.R. could not be reached — it was reached — but that a KCC order
and tariff are a source this pass did not read"* — which is also exactly right on the substance: a KCC
order and a filed tariff genuinely were not read and are not in the K.A.R. at all, as the sentence
itself concedes in its own parenthesis. So this is the forbidden sentence surviving at the point of
use, self-corrected downstream rather than left stale. Lower severity than W2, same edit.

**U3. Six session-touched sections are still cited without a rider, and `prove_currency.py`'s own
verdict line says so.** The gate has been rebuilt since round 1 — the section-agnostic regex round 1
broke (U2) is replaced by a per-section window anchored on the citation, which is the right fix — and
it now reports:

| row | section | amended by |
|---|---|---|
| `edu-tenant-screening-ks` | K.S.A. 40-2,118 | L. 2026, ch. 61 |
| `edu-employee-screening-ks` | K.S.A. 65-7616 | L. 2025, ch. 17 |
| `edu-fire-sprinkler-duty-ks` | K.S.A. 77-415 | L. 2026, ch. 138 |
| `edu-no-common-area-lighting-rule-ks` | K.S.A. 77-420 | L. 2026, ch. 138 |
| `edu-ev-charging-requirements-ks` | K.S.A. 83-220 | L. 2025, ch. 91 |
| `edu-ev-charging-shared-area-ks` | K.S.A. 83-220 | L. 2025, ch. 91 |

I read all six in context. **Every one is incidental in the strictest sense** — it appears only inside
a verbatim quotation of a *different* provision's text or of an act's title, never as authority:
40-2,118 inside quoted 21-6614(i)(2)(L) ("as defined in K.S.A. 40-2,118"); 65-7616 inside quoted
L. 2025 ch. 17's title and quoted 45-229(t); 77-415 inside quoted 31-134(a) ("shall comply with
K.S.A. 77-415 et seq."); 77-420 inside quoted new 31-134(a)(4); 83-220 inside quoted 83-225(e). Five
of the six sit in rows that carry explicit riders for the sections they do rely on.

`edu-no-common-area-lighting-rule-ks` is one short clause from clean: it has a disposition sentence —
*"WHY BOTH CITATIONS ARE INCIDENTAL HERE: 77-416 and 77-441 appear in this row only inside a quotation
of a DIFFERENT statute's text"* — that names two of the three chapter-77 sections it quotes in the same
breath, omitting 77-420.

The consequence for the record, not for the law: `prove_currency.py` prints
**`RESULT: GAPS ABOVE MUST BE CLEARED`**. The delivered log must not say currency is proved while that
line stands.

### IMPRECISE

**I1. `edu-no-purpose-limitation-ks`'s delivered `bodyText` has a paragraph-order defect that reads as
a merge artifact from the re-answer.** It says *"They are in the criminal procedure code, under the
heading of common nuisances, and **they do three things to a landlord**."* — then, before naming any of
the three, digresses for about 200 words into the ordinary-lease-term point, the 58-2564 30-day/14-day
notice mechanics and the 58-2555 tenant duties, and only then reaches *"First, a listed activity can
void the lease outright."* A reader who follows the promise gets something else. Presentation only;
the substance is right (see §4.7).

**I2. `edu-no-animal-care-entry-right-ks` enumerates L. 2026, ch. 126 § 3's changes incompletely.** It
says *"the 2026 changes **are** the new feral-cat exemption at (d) and the renumbering of the old (e)
to (f)"*. Reading § 3's amendment markup, the act also edits (e) ("any person **exposing** *who
exposes* poison"), edits (h)(i) ("if a person **is adjudicated guilty of the crime** *convicted of*
cruelty to animals") and adds a new definition at (i)(j)(4), *"'maliciously' means a state of mind
characterized by actual evil-mindedness or specific intent to do a harmful act without a reasonable
justification or excuse."* None of the three touches a limb this row relies on, so the row's actual
inference — *"the limbs this row relies on are pre-existing text carried forward, not new law"* —
holds. An enumeration stated as exhaustive that is not.

**I3. `edu-no-balcony-inspection-ks`.** Its `WHY NEEDS_REVIEW` paragraph says the detailed standards
live in K.A.R. art. 22-1 and the 2024 IFC and that *"**Neither** can be opened from this container"* —
art. 22-1 was read in full. Superseded by the head block at offset 3 and by a later
`CORRECTION AND PARTIAL UPGRADE` block, so this is residue rather than a live claim. Separately its
`bodyText` says *"In 2026 the legislature directed the fire marshal to update that code to the
International Fire Code, 2024 edition, so the detailed standards for elevated exterior elements are in
**the adopted code** and the fire marshal's regulations"* — "the adopted code", immediately after that
clause, reads as the 2024 edition. Weaker than W1 (it does not assert adoption) but the same ambiguity.

**I4. `edu-nuisance-abatement-ks`'s main sentence still uses the bare form.** It reads "12-1617e(e)
covers nuisance motor vehicles through the **K.S.A. 8-1102**(a)(2) impoundment and auction procedure"
where `K.S.A. 2025 Supp. 8-1102` is the correct form; the appended `CURRENCY RIDER` prescribes
`K.S.A. 8-1102, as amended by L. 2026, ch. 142, § 6` and governs. **Round 1's substantive doubt
resolves in the row's favour:** round 1 said "the subsection lettering the row names is not shown to
have survived". I read ch. 142 § 6's full text of 8-1102 — (a)(2) survives and is exactly the
impoundment-and-auction procedure ("Any motor vehicle that has been impounded as provided in this
section for 30 days or more shall be disposed of in the following manner…" with certified-mail notice,
two weeks' publication and public auction). I also confirmed § 13 repeals `K.S.A. 2025 Supp. 8-1102`
and that the act carries "Governor's veto overridden" in its own text.

**I5. Round 1's I3 was not addressed.** All 20 answer files still record a `battery.command` joined by
a bare `THEN`, so the command is not literally re-runnable. Five are in scope:
`accessory-dwelling-unit`, `balcony-inspection`, `binding-arbitration`, `cold-weather-vacate-notice`,
`frozen-standard-incorporation`, `hazardous-contamination-disclosure`. Round 1 established by hand
that no absence finding is affected; the reproducibility record still is.

**I6. The chosen correction style leaves the false sentence in the field, superseded rather than
removed, in nine in-scope rows.** The head block says it plainly — *"Any sentence below saying that
the Kansas Administrative Regulations could not be reached … is WITHDRAWN as false … kept only as an
audit trail"* — so a reader who starts at the top is correctly warned, and I judged this acceptable
rather than defective. Recording it because a reader who scans the middle of a 10–15k-character `notes`
field meets the withdrawn sentence and not its withdrawal:
`edu-no-common-area-lighting-rule-ks` (@10,305), `edu-no-electric-submeter-disclosure-ks` (@10,950),
`edu-employee-screening-ks` (@9,952), `edu-family-child-care-ks` (@12,330), `edu-fire-code-standard-ks`
(@2,874), `edu-fire-sprinkler-duty-ks` (@1,985), `edu-no-private-well-testing-ks` (@1,901),
`utility-allowance-cap-ks` (@10,827), `edu-no-water-heater-rule-ks` (@6,395).

**I7. Out of scope, but it bears on whether round 1's fix was applied completely.** Four rows round 1
flagged in W1 are not in my 73 and did **not** receive the head block, and in each the false sentence
sits in the first 500 characters with its correction 6,000–8,300 characters later —
the worst placement in the set: `edu-utility-deposit-return-ks` (claim @353, correction @8,314),
`edu-no-utility-notice-authorization-ks` (@444 / @6,627), `edu-utility-landlord-account-ks`
(@279 / @7,220), `edu-utility-shutoff-rules-ks` (@503 / @6,197). I did not re-verify these rows'
substance; I report the placement because the scope brief says 22 rows received the block and these
four are the remainder of round 1's fourteen.

---

## 3. Mechanical results

| check | result | what I make of it |
|---|---|---|
| **my rider sweep** (every `as amended by L. 20xx, ch. N, § M` in scope, resolved against the act's own amending section) | **67 citations across 36 rows, 0 problems.** A second sweep found no rider lacking a section number. | The brief predicted a wrong chapter number would be hiding here. **It is not.** This is the cleanest result in the round. |
| **34 act/section attributions opened by hand** | All correct, including every bill-number↔chapter mapping the rows quote and every act title they quote verbatim. | The rows quote act titles word for word and the quotes are exact. |
| **K.S.A. 31-133's three-act chain** | ch. 74 §1 amends 31-133; ch. 128 §6 amends 31-133; ch. 155 §8 amends "31-133, as amended by section 6 of 2026 House Bill No. 2534"; **ch. 155 §26 repeals both** the HB 2534 and the HB 2739 (=ch. 74 §1) versions. (a)(3) and (a)(4) are **byte-identical** between ch. 74 §1 and ch. 155 §8; ch. 155 §8 adds only a new (e) on crisis drills. | The rows' claim "THE OPERATIVE 2026 TEXT OF 31-133 IS L. 2026, ch. 155, § 8, NOT ch. 74, § 1" is right, and `edu-fire-sprinkler-duty-ks`'s "identical in this subsection" is exactly right. One nuance against round 1's I5: the Revisor's own running head for ch. 74 reads "HOUSE BILL No. 2739 **(Amended by Chapter 155)**", so the phrasing round 1 called loose is the publisher's own. The six rows' precision note is nonetheless correct as written. |
| `check_citations.py` | 244 rows, **599** distinct sections. **0** cites to a non-existent section in the ten full-text chapters. **0** `K.S.A. §` forms. **0 stale-rider flags.** 74 out-of-corpus sections across 27 chapters, all flagged. 162 VERIFIED rows citing an unlisted section (advisory). | **Round 1's U1 is cleared.** The 162 is the same bookkeeping artifact as round 1's 159. |
| **my per-section stale-rider check** (34 stale/amended sections, rider required within 400 chars of each citation of *that* section, over the 74 rows) | 14 flags, **all 14 harness false positives** on inspection — session-law-form citations, act-title quotations and riders a few characters outside my window. **0 genuine unridered stale citations in scope.** | The shipped gate's `'L. 2026' not in blob` test is still row-wide and still weak; my per-section version finds nothing it missed. |
| `prove_currency.py` | Gate **rebuilt per-section** since round 1. 38 session-touched sections cited. **6 unridered** (U3). `RESULT: GAPS ABOVE MUST BE CLEARED`. | Round 1's U2 is fixed, and the fix immediately found six real gaps the old gate hid. All six are incidental; the verdict line still stands and must not be papered over. |
| `prove_coverage.py` | **ALL MECHANICAL CHECKS PASS** — 234/234, no mis-keyed row, no duplicate id, no unlisted topic, no absence topic without a control, no collision with an active library id. | Clean. |
| `prove_scope_fence.py` against the existing delta | **SCOPE FENCE HELD.** 244 new, 21 tagged; every tagged row byte-identical outside `states`/`notes`; all 21 append `KS`; all 21 segments begin `KS:`; nothing deactivated or superseded. | Clean. No regeneration was needed — the delta is newer than the newest answer file. |
| **my delta-vs-answer-file comparison**, 13 fields × 74 in-scope rows | 0 rows missing from the delta. **3 diffs, all the designed `effective_from` normalisation** (`edu-no-cold-weather-vacate-notice-ks`: `1975-07-01` → `2026-10-24` with the date appended to `notes`; `edu-no-electric-submeter-disclosure-ks`: blank → `2026-10-24`). All 22 `K.A.R. ACCESS CORRECTION` blocks present in the delivered CSV. | The corrections reach the product, which is the thing that matters. This is also how I found W1 — by scanning the CSV's bodies rather than the answer files. |
| **my conventions check**, 74 in-scope rows | **0 defects.** `states`=KS, `is_active`=TRUE, `last_checked`=`2026-10-24`, `choice_group`/`is_default`/`supersedes` blank, groups all from the master, valid `rule_type`/`content_type`/status, ids all end `-ks` and none collides, `topic_key` matches the file, 100% of LEASE_CLAUSE rows carry a basis and 0% of LANDLORD_EDUCATION rows do, every `[Optional` body is CONDITIONAL, no citation inside any `bodyText`. | Exact. |
| **correction-block placement** | 22 withdrawal blocks, **all at offset ~3**, each opening "READ THIS BEFORE THE REST OF THIS NOTE" and quoting the claim it withdraws. 11 status notes, all present; 4 sit at offset 1,903–2,382 because the withdrawal block precedes them, and **all 4 still precede their row's stale NEEDS_REVIEW lead**. | Scope item 2 is satisfied for all 22+11 — a reader meets the correction first. The failures are the rows that got **no** block: W2, U2 and (out of scope) I7. |
| **correction-block contradiction** (scope item 1) | One: **W1**. The block in `edu-no-portable-cooling-right-ks`'s `notes` withdraws a statement its own `bodyText` makes. No other block contradicts the body it was attached to. | |
| **code editions** (scope item) | 15 rows name a 2024-edition claim. 14 are accurate ("directs", "requires adoption of", "named as the edition … to be updated to", "NOT in force as of 2026-10-24"). **One asserts adoption: W1.** `edu-frozen-standard-incorporation-ks`'s body is the best-drafted of the set. | Error shape #2 is down to one sentence. |
| **battery drift**, 5 patterns replayed in one invocation, control clean | All five reproduce **exactly** as `BATTERY-DRIFT.md` records, and every disposition I checked is accurate: `friable` → 65-5301(a) and (e), and the row correctly withdraws its old "the standard is wholly regulatory" basis and relocates the 1%-by-weight threshold to 65-5301(e); `degrees f` → the words "postsecondary **degrees f**or the purpose" in L. 2026, ch. 54, a genuine pattern defect; `rental licen` → annotation 106 to Kan. Const. Bill of Rights §15 (*Brooks v. Sauceda*), not a registration power; `fire alarm` → L. 2026, ch. 99's right-to-repair definition of "Safety communications, life safety and physical access control equipment", correctly identified; `applicator|structural pest` → 2-2440b/2-2440c, duties on the pesticide business licensee. | The drift clearance is real work, not annotation. |
| index repairs | `58-30a08`, `12-6a05`, `60-31a01`, `60-31a04`, `60-31a09` all resolve. | Good. |

---

## 4. Rows I attacked hardest and could not break

A failed attack is a result, so these are recorded as evidence.

1. **L. 2025, ch. 14, § 6 cited for K.S.A. 79-3602 — my single strongest prior.** An act titled "An
   Act concerning education; relating to postsecondary educational institutions; … prohibiting
   accrediting agencies from compelling such institutions to violate state law" cited as the current
   source of a **retailers' sales-tax definition** looked like a transposed chapter number. It is
   correct. The act's full title ends "… amending K.S.A. 8-1,142, 13-13a46 and 74-32,120 and K.S.A.
   2024 Supp. 58-3046a and 79-3602 and repealing the existing sections", and § 6 reads "K.S.A. 2024
   Supp. 79-3602 is hereby amended to read as follows". `edu-rent-tax-ks` and
   `edu-no-veterans-incentive-ks` quote that title **word for word** and the quote is exact, down to
   "CHAPTER 14 / SENATE BILL No. 78". The paired claim for 79-3606 (L. 2025, ch. 124, § 6, the
   data-centre act) checks out identically. Attack failed.
2. **`edu-law-enforcement-cooperation-ks`, the larger re-answer.** I opened all five sections of
   chapter 22 article 39 and tested every proposition in the ~1,600-word body. All hold: 22-3901's
   nine-limb list; (g) carrying no habituality qualifier where (h) and (i) do; 22-3902(3)'s
   "instituted only in the name of the state of Kansas upon the petition of the attorney general or
   the city, county or district attorney" (so no landlord standing); the 30-day hearing and the 7-day
   pyrotechnics variant; 22-3902(2)(A)'s "shall render void any lease under which a tenant holds
   possession"; the 30-day eviction window; 22-3904(1)'s two-year padlock, bond and $25,000 penalty;
   22-3904(4)'s costs lien; the knew-or-should-have-known plus no-bona-fide-attempt pair governing
   both; 22-3904(5)'s written report; 22-3903's in-rem summons; 22-3905's class A nonperson
   misdemeanour and $25,000 fine. Two details I expected to be sloppy and were not: "unlawful use of
   pyrotechnics **in a place of public assembly**" is nowhere in 22-3901(k), which just cross-refers
   to 31-170 — but 31-170 is titled "Use of pyrotechnics; places of public assembly" and (b)(1)
   prohibits use "in any building which is a place of public assembly", so the gloss is right; and
   K.S.A. 22-4913 says precisely what the row says it says, including the correctional-placement
   carve-out. My own broader `crime.{0,3}free` returns 0 hits, and my `common nuisance` count matches
   the row's recorded 24-in-11 exactly. `bodyText` and `notes` agree throughout, and the notes
   explicitly record which old sentence was false and why it was removed. Attack failed.
3. **`edu-no-animal-care-entry-right-ks` / K.S.A. 21-6412.** Chapter 21 is not a corpus chapter, so
   the row rests entirely on a session-law reprint — the kind of foundation I expected to crack. Every
   limb is verbatim: (a)(2) "knowingly abandoning any animal in any place without making provisions
   for its proper care"; (a)(3) "having physical custody … and knowingly failing to provide such food,
   potable water, protection from the elements, opportunity for exercise and other care"; (b)(2)(A)
   class A nonperson misdemeanour with (B) felony on a second conviction; the renumbered (f) seizure
   power and its 21-day/renewable-30-day-bond transfer route; (g) "unless the owner proves that such
   transfer was unwarranted"; (h) expenses assessed on conviction. The boundary reasoning is right too:
   (f) runs to "any public health officer, law enforcement officer, licensed veterinarian or officer or
   agent of any animal shelter", and a landlord is none of those, so the absence survives while the
   cautious course gains a statutory basis. The entry and abandonment overlay checks out against
   58-2557(a)–(c) and 58-2565(b) and (d) verbatim, and the assistance-dog sentence is an accurate
   composite of 39-1102 (guide dog), 39-1107 (hearing assistance dog) and 39-1108 (service dog), each
   giving the right "in the acquisition and use of rental, residential housing … without being required
   to pay an extra charge" and each making the person "liable for any damage done to the premises".
   `bodyText` and `notes` agree. Only I2 above.
4. **`edu-statutory-caps-ks` — a row that is nothing but numbers, which is the easiest kind to break.**
   Every figure verified against the section's own words: 58-2550(a)'s one month / 1½ months with
   landlord furniture / additional ½ month with pets, plus the municipal housing authority's
   bedroom-size schedule and mandatory deferred payment plan; 58-2550(c)'s "damages in an amount equal
   to 1½ the amount wrongfully withheld"; 58-2563's "not more than one and one-half (1 1/2) months'
   periodic rent or the damages sustained by the tenant, whichever is greater"; 58-2547(b)'s actual
   damages with no multiplier; 60-2610(g) "**shall not exceed $30**" and 60-2610(a)'s "three times the
   amount of the check but not exceeding the amount of the check by more than $500; or $100";
   61-2703(a)'s "$10,000, exclusive of interest, costs and any damages awarded pursuant to K.S.A.
   60-2610"; 61-2802(a)(1)–(3)'s unsecured-contract-without-limit / secured-contract-or-non-contract
   $25,000 split. The ch. 152 § 1(a)(3) deposit-cap preemption is quoted correctly from the act.
   Attack failed.
5. **`edu-rent-tax-ks`, one of the two promotions.** 12-1696(b) "having more than two bedrooms
   furnished for the accommodation of such guests" ✓; (c) "a person who occupies a room in a hotel,
   motel or tourist court for not more than 28 consecutive days" ✓; 12-1697(a) "at not to exceed the
   rate of 2% upon the gross receipts … exclusive of charges for incidental services or facilities" ✓.
   The ch. 96 § 3 rider is right (§ 3 amends 12-1692, and the row correctly notes ch. 96 left 12-1696
   untouched so the general act's definition never moved). Every one of its four unlisted-section
   citations (44-1204, 58-3046a, 66-101j, 79-221) is battery residue or a quoted act title, not
   authority — **no rule-12 problem.** Attack failed.
6. **`edu-no-purpose-limitation-ks`, the other promotion.** All three unlisted citations (31-170,
   44-527, 60-304) are discarded battery hits, explicitly characterised as such. Its stale
   NEEDS_REVIEW lead — which still says "ksection.py returns NOT IN CORPUS for 22-3901 and 22-3902",
   now false — is preceded at offset 3 by a status note that names it and supersedes it, and the
   upgrade block it points to exists and does the work. Two propositions I expected to be
   approximations and were not: 58-2541's exclusion list, which the row recites as seven items in a
   different order, matches (a)–(g) exactly; and 60-908, which I had pegged as a one-sentence section
   that could not support "an injunction may also be granted in the name of the state at the suit of
   the attorney general, a county attorney or a city attorney" — its second sentence says exactly
   that. Attack failed on substance; see I1 for the prose.
7. **`edu-no-balcony-inspection-ks`, the row that originally carried error shape #2.** "The word
   balcony appears once in the whole of Kansas's statutes" — my own `balcon` battery returns **1 hit
   in 1 section**, 58-3102, and it is the limited-common-area sentence the row describes. 31-134(b)'s
   statewide-uniformity and municipal-inconsistency rule is verbatim in the 2026 text. The ch. 150
   § 185 / ch. 117 § 195 riders both resolve to K.S.A. 12-5256, and the 58-1401 / ch. 74 § 3
   narrowing of "public financial assistance" is quoted correctly.
8. **Round 1's U1, resolved in the pass's favour.** See I4: 8-1102(a)(2) survived ch. 142 § 6 intact
   and is the impoundment-and-auction procedure the row names.
9. **`edu-dv-law-citations-ks`'s reconciliation-act reasoning**, which I expected to be hand-waving.
   It says L. 2025, ch. 125 "amends chapters 10, 17, 27, 30, 40, 65, 85, 87, 90, 95 and 99 but does
   NOT touch 21-5413 (its ch. 90 targets are 59…)". The act's running head reads "(Amends Chapters 10,
   17, 27, 30, 40, 65, 85, 87, 90, 95 and 99)" — the list matches exactly; its HB 2249 (= ch. 90)
   targets are 59-2946 and 59-29b46; and `21-5413` occurs **0 times** in the whole act. Attack failed.
10. **`edu-tenant-screening-ks`'s three-act 21-6614 chain.** Every link verified: ch. 61 § 2 amends
    21-6614 (HB 2323); ch. 35 § 4 amends it (HB 2393); ch. 157 § 2 amends "21-6614, as amended by
    section 2 of 2025 House Bill No. 2323"; ch. 157's heading reads "SENATE BILL No. 430 (Amends
    Chapters 2, 35, 61, 126 and 133)", exactly as the row quotes it. The row's conclusion that
    "L. 2026, ch. 157, § 2 carries the operative text" is right, and its explanation of the "2025"
    bill-number prefix as the Kansas biennium convention is right too.

---

## 5. Verdict

**Not fit to deliver as it stands, and four edits from being fit.** None of them is a re-answer.

What I would not sign off on:

1. **W1 — `edu-no-portable-cooling-right-ks`.** Strike or rewrite the last clause of its `bodyText`.
   This is the one thing in the set that tells a reader something false about Kansas law in the field
   the reader actually reads, and it is the error shape the brief singled out. One sentence.
2. **W2 — `edu-confirmed-absences-habitability-ks`** and **U2 — `edu-no-energy-data-release-ks`.**
   Give each the head-of-notes `K.A.R. ACCESS CORRECTION` block the other 22 rows got, or rewrite the
   sentence. The brief forbids the sentence; 22 rows were fixed; these two were missed.
3. **U1 — `edu-no-electric-submeter-disclosure-ks`.** The applied correction on its sibling
   `water-meter-charge-notice-ks` says 66-104 is in the index. Apply the same correction here, and note
   that it bears on whether the row should still be NEEDS_REVIEW, because the false disclaimer **is**
   the status reason. I would also flag 66-104(a)'s "except for private use" clause as material
   support the row declined to use.
4. **U3 — the "currency proved" claim.** `prove_currency.py` now prints
   `RESULT: GAPS ABOVE MUST BE CLEARED`. The delivered log must reflect that, or the six incidental
   citations must be dispositioned the way the other 39 were — which for five of them is one sentence
   each, and for `edu-no-common-area-lighting-rule-ks` is adding "and 77-420" to a sentence that
   already exists.

Also worth a ruling before delivery, though neither is a row-level fix: **I7**, the four utility rows
outside my scope that did not get the block and carry the false claim in their first 500 characters;
and round 1's **I6** (twelve topics with two rows under one `topic_key`), which round 1 flagged as
needing a ruling and which nothing in this round addressed.

**What is genuinely good, stated as plainly as the defects.** The currency riders were the brief's
highest-value target and the predicted home of a wrong chapter number. There is none: 67 rider
citations across 36 rows all resolve to the act's own amending section, 34 of them opened by hand, and
the rows quote act titles verbatim and accurately — including one (L. 2025, ch. 14 for a sales-tax
section) that looks wrong and is right. The two substantive re-answers are the best work in the set:
both open every section they rely on, quote it accurately, say in their own notes which earlier
sentence was false and why, and keep `bodyText` and `notes` in agreement. Both status promotions are
supported, and neither has a rule-12 problem — every unlisted citation in them is battery residue. The
scope fence holds, the conventions are met exactly, the delivered CSV faithfully carries the
corrections, the drift clearance is real reading rather than annotation, and round 1's two gate defects
(U1's stale-rider flag and U2's section-agnostic currency regex) are both genuinely fixed — U2 by a
rebuild that immediately surfaced six gaps the old gate hid, which is the right outcome for a gate.

Round 2 therefore does not end the checking, but what remains is a short, bounded list of edits to two
delivered fields across four rows, plus one line in the log.

## Rows edited after round 2

**20 rows changed after round 2 reported.** Every change is an application of round 2's own findings, and **none changed a row's `verification_status`** — the fingerprint diff confirms zero status transitions. Specifically: the false "2024 International Fire Code was adopted" sentence was corrected **in the delivered body** of `edu-no-portable-cooling-right-ks` rather than only withdrawn in a note, and the current position (K.A.R. 22-1-3's 2006 editions) was stated in the bodies of the other three fire rows; the six rows still carrying the false "the K.A.R. could not be reached" claim — which my sweep had missed because its pattern required "K.A.R." within 80 characters of the phrase, and these say it 95 or more away — received the withdrawal at the head of their notes; the false disclaimer in `edu-no-electric-submeter-disclosure-ks` that K.S.A. 66-104 could not be opened was corrected, 66-104 was read in full, and the row's NEEDS_REVIEW reason was replaced with the real one (which of 66-104(a)'s two limbs a submetering landlord falls under); and the six remaining incidental citations were annotated with their amending acts, each chapter verified against the act's own heading. **No independent round has seen these 20 rows in their final state**, which is why they are listed rather than summarised away.

* `alarm-tampering-fee/edu-no-alarm-tampering-fee-ks`
* `asbestos-hazards/edu-asbestos-hazards-ks`
* `balcony-inspection/edu-no-balcony-inspection-ks`
* `common-area-lighting/edu-no-common-area-lighting-rule-ks`
* `confirmed-absences-habitability/edu-confirmed-absences-habitability-ks`
* `electric-submetering-disclosure/edu-no-electric-submeter-disclosure-ks`
* `employee-screening/edu-employee-screening-ks`
* `energy-data-release/edu-no-energy-data-release-ks`
* `ev-charging-requirements/edu-ev-charging-requirements-ks`
* `ev-charging-shared-area/edu-ev-charging-shared-area-ks`
* `fire-code-standard/edu-fire-code-standard-ks`
* `fire-sprinkler-duty/edu-fire-sprinkler-duty-ks`
* `frozen-standard-incorporation/edu-frozen-standard-incorporation-ks`
* `pest-control-notice/edu-no-pest-control-notice-ks`
* `portable-cooling-device/edu-no-portable-cooling-right-ks`
* `seasonal-tenancy/edu-seasonal-rentals-ks`
* `tenant-screening/edu-tenant-screening-ks`
* `utility-deposit-return/edu-utility-deposit-return-ks`
* `utility-disconnection-notice-authorization/edu-no-utility-notice-authorization-ks`
* `utility-shutoff-statute/edu-utility-shutoff-rules-ks`

For the record, the **73 rows that changed between round 1 and round 2** — which is what round 2 was scoped to — are listed in `work/ROUND2-SCOPE.md`.

---

### §6 — Findings on existing rows

Nothing below was edited. Each entry gives the row, the row's own words, the statute or act in
its words, and the wording I would use. Claude Code fixes these at sync.

---

## First, a correction to my own working assumption

The library **already carries both of the big 2026 eviction acts**, in dedicated rows, and
carries them well. I record that here because my first reading of the session laws suggested
they were missing, and they are not:

* **`edu-eviction-record-sealing-ks`** (effective_from 2026-07-01, last_checked 2026-08-30)
  carries Substitute for HB 2357 = **L. 2026, ch. 132** in detail, including the 30-day
  objection right, the three-year wait, the presumption against the landlord if no objection
  is filed, the unsatisfied-judgment block, the tolling effect of a later judgment, the
  survival of the debt, the mediation consideration, the 14-day continuance and the Judicial
  Council form. Its notes also independently identified the citation problem this pass
  re-derived: "NONE shows a 2026 amendment — 61-3807's history ends at L. 2010 … DO NOT cite
  K.S.A. 61-3804/61-3806/61-3807 for these rules until the amended text is actually published."
* **`edu-squatter-removal-ks`** (2026-09-27) carries **L. 2026, ch. 56** thoroughly, read from
  the enrolled bill and the Session Laws, with all six affidavit elements, the 24-hour floor,
  § 7(c)'s KRLTA exclusion, the immediate-family definition, the holdover exclusion, the
  treble-fair-market-rent remedy, and the interaction with `edu-self-help-eviction-ban-ks`.

So there is no gap on those two acts. What follows are the places where the 2026 session
**does** leave an existing Kansas row behind.

---

## 1. `edu-eviction-record-sealing-ks` — its one open item can now be CLOSED

**The row's note:** "STILL UNREAD: the enrolled bill text itself. The KLRD summary is
authoritative and detailed but is still a summary. Exact statutory language and section
numbers should be confirmed when the Revisor publishes the 2026 amendments."

**Now available.** The Secretary of State's **2026 Session Laws of Kansas, Volume 2** is in
this pass's corpus in full, and **L. 2026, ch. 132 was read verbatim** (saved at
`work/fetched/L2026-ch132.txt`). The row's substance checks out against the primary text on
every point listed above. The section numbering the note asked for is: **New Sec. 1** (the
expungement procedure, with the form duty at § 1(b)); **Sec. 2** amending K.S.A. 61-3806 by
adding subsection (c); **Sec. 3** amending K.S.A. 61-3807 by adding (b)(2); **Sec. 4**
repealing the former 61-3806 and 61-3807; **Sec. 5** the effective clause. Approved **April 9,
2026**.

**One wording nuance to fix while the row is open.** The row says the court must consider
mediation "unless it finds mediation would not materially aid **both parties**." The statute
says "unless the court finds that mediation would not aid **the parties** materially or is
impracticable." "Both parties" is narrower than the text — on the row's wording a landlord
might think a finding adverse to one party alone is not enough.

**Wording I would use:** "the court must consider mediation unless it finds that mediation
would not aid the parties materially, or is impracticable."

**Also:** the row's status can move from summary-based to primary-text-verified, and its
citation can become `L. 2026, ch. 132, § 1` (with `§ 2` and `§ 3` for the mediation and
continuance rules) rather than "Substitute for HB 2357 (2026)."

**And its effective date is asserted more firmly than the act supports.** The row's body opens
"Kansas changed its eviction law **effective July 1, 2026**" and its `effective_from` is
2026-07-01. The enacted text contains no July 1 clause: **§ 5 reads "This act shall take
effect and be in force from and after its publication in the statute book," and it was
approved 9 April 2026.** July 1, 2026 is the publication date stated on the 2026 Session Laws
volumes, which is good evidence but is not the same event as publication of the bound statute
book — and the Revisor's codified text still showed no 2026 amendments when checked live on
2026-10-24, which is evidence the statute book had not yet carried them. The row should state
the statutory formula and the approval date, and give July 1, 2026 as the working date with
its basis, rather than presenting it as the act's own effective date. The same correction
applies in reverse to `edu-squatter-removal-ks` (item 2 below), which is appropriately
cautious where this row is not.

---

## 1a. `edu-eviction-record-sealing-ks` — a material error in the continuance rule

**The row says** the court "**may** order a continuance."

**The act says** (L. 2026, ch. 132, § 3, adding K.S.A. 61-3807(b)(2)): "the court **shall
order** a continuance of not more than 14 days from the date that the mediation order is
entered if the parties are participating in mediation." Mandatory, not permissive.

**And the row misses the consequence.** The same section inserted "**Except as provided in
paragraph (2)**" at the head of 61-3807(b)(1) — the bond requirement. So the mediation
continuance is an **express exception to the bond**: where the parties are in court-ordered
mediation, the tenant gets the continuance **without posting the bond** that 61-3807(b)(1)
otherwise makes a precondition of any continuance. That is the most landlord-relevant feature
of the amendment and it is absent from the row.

**Wording I would use:** "Where both parties are participating in court-ordered mediation, the
court **must** order a continuance of up to 14 days from the date of the mediation order, and
the tenant does **not** have to post the bond that otherwise conditions a continuance
(K.S.A. 61-3807(b), as amended by L. 2026, ch. 132, § 3)."

## 2. `edu-squatter-removal-ks` — its effective-date note can be narrowed

**The row's note:** "EFFECTIVE DATE UNCONFIRMED (instruction 34): sec. 8 reads 'from and after
its publication in the statute book' and the 2026 statute-book publication date was not
established this pass."

**What this pass can add, and what it still cannot.** The 2026 Session Laws volumes in the
corpus carry a stated publication date of **July 1, 2026** on their own authentication pages,
and the sibling row `edu-eviction-record-sealing-ks` sets `effective_from` to 2026-07-01 on
the same statutory formula. That is consistent and supports the July 1, 2026 date.

**But I did not close it, and the note should not be deleted.** "Publication in the statute
book" is a distinct event from publication of the session-laws volume — the statute book is the
bound K.S.A. — and this pass did not establish the bound-volume date. Indeed the Revisor's
codified text still showed no 2026 amendments when checked live on 2026-10-24, which is
evidence the statute book had not yet carried them.

**Wording I would use for the note:** "Effective date: sec. 8 reads 'from and after its
publication in the statute book'; approved April 6, 2026. The 2026 Session Laws volumes state
their own publication date as July 1, 2026, and the sibling 2026 row uses that date on the
same formula, so 2026-07-01 is the working date. The bound statute-book date itself is still
unestablished, and the Revisor's codified text showed no 2026 amendments as of 2026-10-24."

---

## 3. `edu-no-voucher-protection-ks` — rests on absence where Kansas has now legislated

**The row says:** "Kansas doesn't require landlords to accept Housing Choice Vouchers
(Section 8) or any other subsidy source — you can decline an applicant because of how they
intend to pay, the same way you can screen on any other lawful criterion." It then spends its
remaining words on Kansas City, Missouri ordinances. `last_checked` 2026-08-22.

**The act says** (L. 2026, ch. 152, § 1(a)(1), SB 391, veto overridden, law 10 April 2026):
no city or county shall adopt or enforce any ordinance or resolution that "[p]rohibits
landlords from refusing to lease privately owned single-family or multi-unit residential
property or commercial property to a person because such person's source of income to pay rent
on such property consists, in whole or in part, of a financial payment or consideration from
or through the housing choice voucher program, or any successor program, authorized by chapter
8 of title 42 of the United States code, or any other housing assistance program in which
participation by a landlord is voluntary." And § 1(b): "Any ordinance or resolution prohibited
by subsection (a) that was adopted prior to July 1, 2026, shall be null and void."

**Why it matters.** The row currently answers a *state-silence* question. The practical
question a Kansas landlord actually has — "could my city require me to take vouchers?" — is now
answered affirmatively by statute, and any pre-July-2026 local ordinance is void. The row's
Kansas City digression is reaching for exactly this and settles it with out-of-state material
instead of the Kansas act.

**Wording I would use:** "Kansas does not require landlords to accept Housing Choice Vouchers
or any other subsidy source, and since 2026 no Kansas city or county may impose such a
requirement either: L. 2026, ch. 152, § 1(a)(1) bars any local ordinance or resolution
prohibiting a landlord from refusing to lease because the applicant's source of income is, in
whole or in part, a housing choice voucher or any other housing assistance program in which
landlord participation is voluntary, and § 1(b) makes any such ordinance adopted before
July 1, 2026 null and void."

---

## 4. `edu-no-rental-application-regulation-ks` — "no limit" is now overtaken twice

**The row says:** "Kansas does not regulate the rental application or tenant screening process
at all. There is no cap on application fees and no prohibition on charging them, no
portable-screening-report rule, **no limit on how far back criminal or rental history may be
considered**, and no state adverse-action or denial-notice requirement. Kansas also has no
statute restricting consideration of an applicant's criminal history." `last_checked`
2026-08-30.

**Two 2026 acts bear on it.**

(a) **L. 2026, ch. 152, § 1(a)(2)** bars any local ordinance or resolution that "restricts a
landlord's ability to use or consider income-qualifying methods, credit scores, credit reports,
eviction history, property damage history or criminal history **or to request such information**
when done to determine whether to lease a property to a prospective tenant according to such
landlord's customarily applied criteria." The row's "at all" is correct as to *state*
regulation, but Kansas has now affirmatively protected screening against *local* regulation —
a stronger and more useful statement than silence.

(b) **L. 2026, ch. 132** is a real limit on how far back *rental* history goes. An eviction
judgment under the KRLTA becomes expungeable after three years on the tenant's application, and
the act expressly allows a **public housing authority** to request eviction judgment history
"for the past three-year period" for active applicants for federal housing assistance. So the
record a landlord can screen against is now time-limited in practice, and the library already
says so in `edu-eviction-record-sealing-ks` — the two rows simply do not point at each other.

**Wording I would use:** keep the state-silence finding, then add: "Two 2026 changes sit
alongside it. No Kansas city or county may restrict your ability to use or consider
income-qualifying methods, credit scores, credit reports, eviction history, property damage
history or criminal history, or to request that information, when you apply your customary
criteria (L. 2026, ch. 152, § 1(a)(2)). And eviction records are no longer permanent: a tenant
may apply to expunge a Residential Landlord and Tenant Act eviction judgment three years after
it was entered, so an older eviction may not appear at all — see Eviction Expungement and
Mediation."

---

## 5. `edu-security-deposit-cap-ks` — accurate on the state cap, silent on the new local bar

**The row says:** Kansas caps the deposit at one month's rent unfurnished, 1.5 months furnished,
plus half a month for pets, stacking to 2 months (K.S.A. 58-2550(a)); "This is a ceiling, not
something the lease needs to recite." `last_checked` 2026-08-22. I verified 58-2550 section-open
and the row states it correctly.

**What it misses:** **L. 2026, ch. 152, § 1(a)(3)** bars any city or county ordinance or
resolution that "limits the amount of a security deposit a landlord may require to lease a
property to a prospective tenant," and § 1(b) voids any such ordinance adopted before
July 1, 2026. So the state figures are now the *only* ceiling anywhere in Kansas.

**Wording I would use:** add one sentence — "Since 2026 no Kansas city or county may set a lower
deposit limit: L. 2026, ch. 152, § 1(a)(3) bars any local ordinance limiting the amount of a
security deposit a landlord may require, and voids any adopted before July 1, 2026."

---

## 6. `edu-fair-housing-ks` — the protected-class list is missing a class

**The row says:** "The Kansas Act Against Discrimination tracks the federal Fair Housing Act's
protected classes: race, color, national origin, religion, sex, familial status, and
disability."

**The statute says** (K.S.A. 44-1016, read section-open; every one of its subsections (a)
through (g) repeats the same list): "because of race, religion, color, sex, disability,
familial status, national origin **or ancestry**."

**"Ancestry" is a separate class in the Kansas list and the row omits it.** Kansas does not
simply "track" the federal classes — it adds ancestry alongside national origin. This is the
error shape SOP rule 27 warns about: a class list restated from a federal template rather than
from the state's own words.

**What it also misses:** on its own subject, **L. 2026, ch. 152, § 1(a)(1)** now bars Kansas
cities and counties from adding source-of-income protection by ordinance, which is the natural
follow-on to the row's "Kansas hasn't added source of income" sentence.

**Wording I would use:** "The Kansas Act Against Discrimination makes it unlawful to
discriminate in the sale or rental of real property because of race, religion, color, sex,
disability, familial status, national origin or ancestry (K.S.A. 44-1016). Ancestry is a
Kansas class in addition to national origin. Kansas has not added source of income, sexual
orientation or gender identity — and since 2026 no Kansas city or county may add a
source-of-income mandate by ordinance either (L. 2026, ch. 152, § 1(a)(1))."
Note also that 44-1016 is expressly "[s]ubject to the provisions of K.S.A. 44-1018" —
the exemptions section — which the row does not mention.

---

## 7. `edu-no-co-alarm-requirement-ks` — flat "voluntary" may be overtaken by the 2026 code adoption

**The row says:** "Kansas has no state law requiring carbon monoxide alarms in residential
rental property… CO alarms in a Kansas rental are entirely voluntary as a matter of state law."
It cites K.A.R. 4-27-8 for lodging establishments. `last_checked` 2026-08-30.

**What bears on it:** **L. 2026, ch. 74** (HB 2739, as amended by L. 2026, ch. 155) amends
K.S.A. 31-133 and 31-134 — the state fire marshal's rule-making powers, which include "the
installation and maintenance of equipment intended for fire control, detection and
extinguishment in all buildings and other places in which persons work, live or congregate…
including apartment houses" — repeals K.S.A. 31-132a (the definition of "apartment houses"),
and **requires adoption of the International Fire Code, 2024 edition**. The 2024 IFC carries
carbon-monoxide-detection provisions.

**Why this is a flag and not yet a correction.** Whether the adopted 2024 IFC reaches an
existing residential rental in Kansas turns on the fire marshal's adopting regulation and the
code's own scope and retroactivity provisions, and **the K.A.R. was not reachable in this pass**
(see §1). So I am not asserting that CO alarms are now required. What I am saying is that the
row's unqualified "entirely voluntary as a matter of state law" was true on its 2026-08-30 check
and is no longer safe to state flatly after ch. 74.

**Wording I would use:** "Kansas has no statute requiring carbon monoxide alarms in residential
rental property. One caution for 2026: L. 2026, ch. 74 requires adoption of the International
Fire Code, 2024 edition and rewrites the state fire marshal's rule-making authority over fire
detection equipment in buildings where people live, including apartment houses. Whether the
adopted code reaches an existing residential rental depends on the fire marshal's regulation
(K.A.R. art. 22-1), which we have not read. Treat state-law silence as no longer settled and
check the adopting regulation before relying on it."

---

## 8. `hoa-compliance` — conflicts with K.S.A. 58-2547(a)(4) (Kansas item 3)

Reported in full in the item-3 write-up: the shared row's "Any fines incurred due to Tenant's
violation of association rules will be Tenant's responsibility" has the tenant answering for a
liability the law imposes on the owner, which 58-2547(a)(4) forbids. The library already holds
the safe drafting in `hoa-compliance-or` and `hoa-compliance-ak` (recovery of the fine as the
landlord's **actual damages** for the tenant's breach). Recommended wording and the
cross-state implication are in that write-up.

## 9. `keys` and `hoa-compliance` — tagged KS with no `KS:` notes segment

Both are tagged KS but neither carries a `KS: …` segment in `notes`, although every
later-tagged state on those rows has one and 10,027 of the library's 10,511 single-state rows
with notes use the convention. Kansas appears to have been tagged before the convention took
hold. A documentation defect under SOP rule 26, not a legal error.

## 10. `edu-eviction-procedure-ks` — disagrees with `edu-cares-act-notice` (Kansas item 5)

Reported in full in the item-5 write-up: the shared federal row states the CARES Act 30-day
notice provision "has no end date," while the Kansas row's notes call its "continued operation
after the 2020 moratorium lapsed … contested in the courts" and decline to state it as settled
law. Two answers to the same federal question for the same user. Two smaller conformities in
the same row: its coverage description omits the shared row's **rural housing voucher program**
limb, and it spells "programme."

## 11. `smoke-detectors-ks` — basis is `SERVES_LANDLORD` where the statute dictates the allocation

The row's own notes say the install/maintain split is "STATUTORY, not a drafting choice,"
mirroring K.S.A. 31-162(c). A clause whose allocation the statute dictates is a
**`CONSTRAINED_TERM`**, not `SERVES_LANDLORD`, under the rule 55 three-bucket test.

## 12. `smoking-policy` — correct as written, but Kansas law beside it is uncaptured

The clause reads correctly for Kansas (Kansas item 4). Separately, the library has **no Kansas
row** for K.S.A. 21-6110(a)(3), which makes smoking unlawful in "restrooms, lobbies, hallways
and other common areas in public and private buildings, condominiums and other
multiple-residential facilities," or for **K.S.A. 21-6111**, which requires "[t]he proprietor
or other person in charge of the premises of a public place, or other area where smoking is
prohibited" to "post or cause to be posted in a conspicuous place signs displaying the
international no smoking symbol and clearly stating that smoking is prohibited by state law."
That is an affirmative statutory posting duty on a Kansas landlord of a multi-unit building
that no lease clause discharges. It is being written as a new row in this pass under the
`smoke-drift-waiver` topic; recorded here because the gap sat beside an existing row.

---

## 13. A scope question the library should settle: is K.S.A. 58-25,137 confined to mobile home parks?

This is not a defect found in a row — it is a question that sits under several rows, existing
and new, and it should be settled centrally rather than per-row.

**Why it arises.** K.S.A. 58-25,137 ("Housing protections for persons affected by domestic
violence, sexual assault, human trafficking or stalking") sits in **chapter 58, article 25**,
and K.S.A. 58-25,101 says of that article's act: "**This act shall govern the rental of mobile
home space in mobile home parks.** When both the mobile home and the space used to accommodate
the mobile home are rented or leased by the same landlord, the residential landlord and tenant
act, K.S.A. 58-2540 et seq., and amendments thereto, rather than this act, shall apply." On
placement alone, 58-25,137 would be read as part of the Mobile Home Parks Act — a
**deprioritized product area**.

**Why the library treats it as general, and why I think that is right.** Read section-open,
58-25,137 contains no mobile-home language whatever. It speaks throughout of "an applicant",
"a tenant or lessee", "a landlord or property owner", "the premises" and "a rental or lease
agreement". It defines its own terms by reference to **K.S.A. 75-452**, not to the Mobile Home
Parks Act's definitions in 58-25,102. It was enacted standalone by **L. 2019, ch. 56, § 2**
rather than as an amendment to that act. And every operative provision — (a) no denial or
eviction on protected-person status, (b) no rent liability after vacating, (c) the two
qualifying documents, (e) the termination fee capped at one month's rent, (g) non-waivability,
(h) the tenancy continuing for remaining tenants, (i) $1,000 statutory damages plus fees —
reads as general tenancy law.

**What rests on the answer.** The existing rows `edu-dv-housing-protections-ks` (VERIFIED) and
`dv-termination-fee-ks` both rest on 58-25,137 and treat it as general Kansas law, as do the
new `dv-qualifying-documents`, `dv-confidentiality`, `dv-deposit-timing` and
`dv-eviction-protection` rows written in this pass. If the section is in fact confined to
mobile home parks, all of them overstate Kansas's domestic-violence housing protections for an
ordinary residential tenancy — which would be a serious error in a sensitive area. If it is
general, as I believe, nothing changes.

**A third indicator, found after this note was first written.** K.S.A. 75-452 was fetched and
read. It is the definitions section of **K.S.A. 75-451 through 75-458, the "Safe at Home"
address-confidentiality program** — a statewide victim-protection scheme administered by the
attorney general, whose stated purpose (75-451) is "to enable state and local agencies to
respond to requests for public records without disclosing the location of a victim of
domestic violence, sexual assault, human trafficking or stalking." It has nothing whatever to
do with mobile home parks, and it defines all four of the terms 58-25,137(f)(2) borrows.
A provision confined to mobile home parks would have no reason to take its definitions from a
general statewide victim program. That is now three independent indicators pointing the same
way: general operative language, general definitional source, and standalone enactment.

**Recommendation.** Treat it as general — the text, the definitional source and the enactment
history all support it, and the library already does. Settle it at sync with the one source
this pass could not reach: the **enrolled text and title of L. 2019, ch. 56**, which will show
whether § 2 was enacted as part of the Mobile Home Parks Act or as a free-standing section the
revisor placed in article 25. That single document resolves it. Until then the rows should
carry a one-line note recording the placement and why the general reading was taken, rather
than being silent about it.

## 14. Not a defect: the apparent "alias records" in chapter 60

An agent reported that the index contained alias records `60-311`, `60-313` and `60-314`
duplicating 60-3101, 60-3103 and 60-3104 under truncated numbers, and that these inflated the
chapter-60 count. **Checked and false.** They are six genuinely distinct sections: 60-311
("Where process may be served") and 60-313 ("Process, return of proof of service; amendment")
come from files `060_003_0011` and `060_003_0013` — article 3 — while 60-3101 ("Citation and
construction of act") and 60-3103 ("Jurisdiction") come from `060_031_0001` and `060_031_0003`
— article 31, the Protection from Abuse Act. 60-314 is a repealed stub. The chapter-60 count
of 738 matches the Revisor's own chapter index exactly, so nothing is inflated. Recorded here
so the independent check does not spend time re-chasing it.

## Further findings recorded by the canvass

1. **from `alarm-tampering-fee`** — {"id": "smoke-detectors-ks", "field": "lease_clause_basis", "row_says": "lease_clause_basis = SERVES_LANDLORD. Its own notes say: 'The install/maintain split is STATUTORY, not a drafting choice: 31-162(c) provides that the owner supplies and installs all required detectors and the owner tests and maintains them, EXCEPT inside rental units, where the occupant tests and maintains after taking possession. This clause mirrors that allocation rathe…
2. **from `animal-care-access`** — {"id": "assistance-animal-accommodation", "field": "notes / bodyText (verification procedure in housing)", "row_says": "Row id `assistance-animal-accommodation` (LEASE_CLAUSE, REQUIRED, topic=assistance-animal-accommodation, states include KS) and `edu-service-animal-fraud-ks` (LANDLORD_EDUCATION, topic=service-animal-misrepresentation) are Kansas's rows on assistance animals. I did not change either. The point below bears on both and on `edu-…
3. **from `association-obligations-disclosure`** — {"id": "(not a library row) work/CANVASS-BRIEF.md \u00a75 and work/PENDING-UPGRADES.md", "finding": "The brief's corrected common-interest-community paragraph says 'the act contains no leasing provision at all'. That is not quite right, and the same sentence is repeated in PENDING-UPGRADES.md.", "statute_quoted": "K.S.A. 58-4614(e): 'If the declaration requires that votes on specified matters affecting the common interest community be cast by…
4. **from `association-obligations-disclosure`** — {"id": "hoa-compliance", "finding": "THE hoa-compliance BOUNDARY, re-examined 2026-10-24 as Part B1 directed. The row's FIRST sentence is correct for Kansas and is better supported than before. Its SECOND sentence carries a real Kansas defect: a fine pass-through is squarely in the territory K.S.A. 58-2547(a)(4) prohibits, and the Kansas canvass has already declined a materially identical clause on that exact ground, so the library is internal…
5. **from `collection-fee`** — {"id": "edu-consumer-protection-act-ks", "field": "notes / bodyText (the KCPA-as-backstop reasoning)", "row_says": "Row id `edu-consumer-protection-act-ks` (LANDLORD_EDUCATION, CONSTRAINED, topic=consumer-protection-act, states=KS), titled 'Kansas Consumer Protection Act as a Backstop'. I did not read its body in full and I have changed nothing on it. The point below qualifies whatever it says, and it also bears on every row in the library tha…
6. **from `communal-land-lease-approval`** — {"id": "(not a library row) work/CANVASS-BRIEF.md \u00a75 and work/PENDING-UPGRADES.md", "finding": "Both say the Kansas uniform common interest owners bill of rights act 'contains no leasing provision at all'. It contains one.", "statute_quoted": "K.S.A. 58-4614(e): 'If the declaration requires that votes on specified matters affecting the common interest community be cast by lessees rather than unit owners of leased units: (1) This section a…
7. **from `confirmed-absences-outside-title`** — {"row_id": "edu-prohibited-lease-terms-ks (and any Kansas row stating the KRLTA's scope from K.S.A. 58-2541)", "issue": "Not an error in that row's own words, but a scope statement that 2026 law has overtaken, recorded here per the scope fence rather than fixed.", "rows_words_quoted": "K.S.A. 58-2541's seven-item list of 'arrangements NOT governed by the act' is treated library-wide as a complete statement of the KRLTA's scope (see the verifie…
8. **from `defective-drywall-disclosure`** — {"row_id": "edu-no-mold-disclosure-ks, edu-no-radon-disclosure-ks, edu-no-bed-bug-disclosure-ks (and any future Kansas 'no disclosure requirement' row)", "issue": "Each states a disclosure absence without naming the one Kansas disclosure duty that does reach a prospective tenant \u2014 the licensee duty in K.S.A. 58-30,106(d)(1). A landlord who uses a licensed property manager is told by these rows that nothing need be disclosed, when the mana…
9. **from `disaster-displaced-guests`** — {"row_id": "edu-squatter-removal-ks", "issue": "Not an error \u2014 a gap worth filling, recorded rather than fixed per the scope fence. The row sets out the act's six affidavit elements and its three limits (holdover tenants, immediate family, the penalties) but does not state the definitional limb that matters most in the guest scenario: a person authorised by a TENANT to occupy is outside the definition of squatter entirely.", "rows_words_q…
10. **from `eviction-hardship-stay`** — {"id": "edu-eviction-record-sealing-ks", "problem": "MATERIAL ERROR: states the 2026 mediation continuance as DISCRETIONARY when the enacted text makes it MANDATORY.", "row_says_verbatim": "Trial in an RLTA eviction must still occur within 14 days of the appearance date, but where both parties are in court-ordered mediation the court may order a continuance of up to 14 days from the date of the mediation order.", "statute_says_verbatim": "L. 2…
11. **from `foreclosure-disclosure`** — {"id": "edu-no-foreclosure-tenant-protection-ks", "field": "bodyText (the disclosure sentence), and notes (the evidentiary basis and the 60-2414 caveat)", "row_says": "BODY: 'Kansas has no state statute requiring a landlord to disclose a pending foreclosure to a tenant or applicant, and no state statute governing whether a lease survives a foreclosure sale.' and later: 'If you are selling or losing a tenanted property, Kansas law gives you no…
12. **from `informal-dispute-resolution`** — {"row_id": "edu-eviction-record-sealing-ks", "the_rows_own_words": "bodyText, first sentence: \"Kansas changed its eviction law effective July 1, 2026 (Substitute for HB 2357), for eviction actions under the Residential Landlord and Tenant Act.\" notes: \"Substitute for HB 2357 (2026), effective 2026-07-01.\" notes also: \"CITATION CAUTION: ... DO NOT cite K.S.A. 61-3804/61-3806/61-3807 for these rules until the amended text is actually publis…
13. **from `inspection-notice-penalty`** — {"row_id": "move-in-inventory-ks", "the_rows_own_words": "lease_clause_basis: \"SERVES_LANDLORD\". rule_type: \"REQUIRED\". bodyText: \"Within 5 days of the Start Date or delivery of possession, whichever is later, Landlord and Tenant will jointly complete a written inventory documenting the condition of the property and any furnishings or appliances provided. Landlord and Tenant will each sign a copy of the inventory, and Landlord will provid…
14. **from `law-enforcement-cooperation`** — {"id": "edu-no-right-to-call-police-statute-ks", "finding": "Accurate on its own subject (no Kansas statute protects a tenant who calls the police), but its closing sentence tells the reader that nuisance and crime-free housing is a municipal-level matter in Kansas and not state law. Kansas does have a state-level common-nuisance abatement regime that reaches a tenancy directly, K.S.A. 22-3901 through 22-3905, and it was not in the corpus when…
15. **from `portfolio-thresholds`** — {"id": "edu-fair-housing-ks", "row_says": "'The Kansas Act Against Discrimination tracks the federal Fair Housing Act's protected classes: race, color, national origin, religion, sex, familial status, and disability. Kansas hasn't added source of income, sexual orientation, or gender identity as a state-level protected class.'", "statute_says": "K.S.A. 44-1016(a)-(d), read section-open 2026-10-24, lists the classes as 'race, religion, color, s…
16. **from `purpose-limitation`** — {"id": "criminal-activity-ks", "finding": "Does not mention the K.S.A. 22-3901 to 22-3904 common-nuisance route, which is the strongest statutory consequence in Kansas law for criminal activity on let premises and which cuts both ways for the landlord.", "row_words": "bodyText: '[Optional.] Tenant, members of Tenant's household, and Tenant's guests and other persons on the property with Tenant's consent will not engage in criminal activity on…
17. **from `purpose-limitation`** — {"id": "edu-no-expedited-criminal-eviction-ks", "finding": "Understates Kansas law, and its notes expressly clear the chapter where the contrary provision sits. Kansas has no expedited criminal-eviction TRACK inside the KRLTA or chapter 61, which is correct and remains correct. But its notes say 'Nothing in the KRLTA, Chapter 61, or Chapter 22 enacts it', and K.S.A. 22-3902(2)(A) \u2014 in chapter 22 \u2014 gives a prosecutor-initiated route t…
18. **from `tenant-records`** — {"id": "edu-tenant-confidential-information-ks", "row_words_quoted": "bodyText: 'Note that Kansas requires no particular security measures in advance: the duty is to investigate and notify after a breach.' notes: 'CONFIRMED ABSENCE of ... any general consumer data-privacy act ... No Kansas analogue of ... Md. Code Ann., Com. Law 14-3502/14-3503 (reasonable security procedures and secure disposal) -- the pattern \"reasonable security procedures…
19. **from `tenant-screening`** — {"id": "edu-fair-housing-ks", "row_words_quoted": "'The Kansas Act Against Discrimination tracks the federal Fair Housing Act's protected classes: race, color, national origin, religion, sex, familial status, and disability.'", "statute_quoted": "K.S.A. 44-1016(a): 'it shall be unlawful for any person: (a) To refuse to sell or rent after the making of a bona fide offer ... to any person because of race, religion, color, sex, disability, famili…
20. **from `tenant-screening`** — {"id": "edu-no-rental-application-regulation-ks", "row_words_quoted": "'Kansas does not regulate the rental application or tenant screening process at all. There is no cap on application fees ... no limit on how far back criminal or rental history may be considered ... Kansas also has no statute restricting consideration of an applicant's criminal history.'", "statute_quoted": "L. 2026, ch. 152, \u00a7 1(a)(2): no city or county may adopt or e…
21. **from `tenant-statutory-duties`** — {"id": "tenant-duties-ks", "row_words_quoted": "bodyText: '... and maintain the property in the same condition as it was delivered to Tenant, except for ordinary wear and tear.' notes: 'K.S.A. 58-2555.'", "statute_quoted": "K.S.A. 58-2555 has seven subsections, (a) through (g), quoted in full in this answer file's notes. None of them imposes a duty to return the premises in the delivered condition, and the phrase 'wear and tear' appears nowher…
22. **from `unbundled-parking`** — {"id": "edu-no-fees-as-rent-rule-ks", "topic_key": "fees-as-rent", "status": "OVERSTATED \u2014 recorded, NOT edited (scope fence). The full entry, with the statute and my proposed wording, is in work/answers/utility-allowance-cap.json; it is repeated here in short because THIS row relies on the same definition.", "rows_own_words": "BODY: 'No Kansas statute says whether a late fee, a utility charge or any other fee counts as rent, so the lease…
23. **from `utility-allowance-cap`** — {"id": "edu-no-fees-as-rent-rule-ks", "topic_key": "fees-as-rent", "status": "OVERSTATED \u2014 the bodyText contradicts the row's own notes and the statute. Recorded, NOT edited (scope fence).", "rows_own_words": "BODY: 'No Kansas statute says whether a late fee, a utility charge or any other fee counts as rent, so the lease decides, and the courts decide what the lease means.'", "rows_own_notes_already_concede_it": "NOTES: 'K.S.A. 58-2543(j)…
24. **from `utility-allowance-cap`** — {"id": "utility-allowance-cap-co", "topic_key": "utility-allowance-cap", "status": "NOT AN ERROR \u2014 correct for its nine states. Recorded only to show why the KS tag was declined, and because a future state with a bilateral non-waiver statute will hit the same problem.", "rows_own_words": "BODY, third sentence: 'This reimbursement is a separate obligation from Rent: it is not subject to any late fee applicable to Rent under this Lease, wil…

---

### §7 — Findings for other states

These are things this Kansas pass noticed about **other** states' rows. None was changed — Kansas
was the only state in scope. They are recorded because the screens that tag a shared row make you
read it, and what you see is sometimes not a Kansas problem.

**1. `hoa-compliance`'s fine-shifting sentence is a latent problem in every state with an
indemnity bar, not only Kansas.** The sentence is *"Any fines incurred due to Tenant's violation
of association rules will be Tenant's responsibility."* An association fine is levied on the
**owner**, so the clause makes the tenant answer for a liability the law imposes on the landlord —
which is what K.S.A. 58-2547(a)(4) forbids. Kansas is only where it surfaced. The row is tagged to
a group of states, and any of them with a comparable indemnity prohibition has the same exposure.
The library already contains the cure, reached independently in two of them: `hoa-compliance-or`
and `hoa-compliance-ak` recover the fine **"as Landlord's actual damages for the breach"** rather
than as the tenant's responsibility, and Alaska's education row states the principle outright.
**Recommendation: reword the shared row to the Oregon/Alaska damages framing rather than untagging
Kansas alone** — the damages framing is lawful everywhere the responsibility framing is lawful, so
it is a strict improvement, and it closes the same hole in every state at once. Whoever owns those
states should decide; this pass only reports it.

**2. `utility-allowance-cap-co` was read in full and deliberately NOT tagged for Kansas, and the
reason may matter to the states already on it.** Its sentence provides that the utility allowance
"will not be characterized as Rent for purposes of any remedy available for nonpayment of Rent,
and Landlord's remedies … are limited to those otherwise available … for breach of an obligation
other than Rent." In Kansas that runs into **K.S.A. 58-2547(a), which is bilateral**: "No rental
agreement may provide that the tenant **or landlord**: (1) Agrees to waive or to forego rights or
remedies under this act," with (b) making such a provision unenforceable. The clause also caps
"Landlord's obligation to pay" without separating the **non-waivable** duty under K.S.A.
58-2553(a)(5) to supply running water, hot water and heat. Two of the states already tagged read
the sentence as a landlord concession, which is a fair reading of it in a jurisdiction whose
prohibited-terms statute binds the tenant only. **It is worth checking whether any of them has a
bilateral prohibition too** — if so, the same sentence is unenforceable there for the same reason.
Kansas instead received its own row.

**3. `edu-cares-act-notice` is tagged in 56 jurisdictions and is the better-sourced of two
conflicting accounts of the same federal rule.** It says the CARES Act moratorium ended in 2020
"but the 30-day notice section has no end date," and its notes cite 15 U.S.C. 9058 section-open.
Kansas's own `edu-eviction-procedure-ks` says the provision's continued operation is "contested in
the courts" and concedes the federal law was "NOT read section-open this pass." The conflict is
reported under §6 as a Kansas problem, and the Kansas row is the one that should move. It is noted
here only because the shared row carries this question for 56 jurisdictions: if anyone later
concludes the contested characterisation is right, the correction belongs in the **shared** row,
not in one state's.

**4. `nonrefundable-fees-wv` carries a `lease_clause_basis` resting on one state's statute while
tagged to five others.** Its basis is `SERVES_LANDLORD`, but its notes rest on W. Va. Code
§ 37-6A-1(14), under which a pet or application fee escapes the deposit definition only if "the
parties expressly agree, in writing, that a pet fee or application fee is nonrefundable." Whether
each of the other tagged jurisdictions has an equivalent express-agreement provision is outside
this pass's scope. Flagged for whoever owns them.

**5. A cross-reference the library could make but has not.** `edu-attorney-fee-mutuality-mn`
already describes Kansas correctly in its notes — "CO requires mutual drafting, KS flatly
prohibits fee-shifting, MN makes mutuality automatic by statute" — but until this pass there was
no Kansas row on `attorney-fees` for it to point at. There is now (`edu-attorney-fees-ks`). No
change is needed to the Minnesota row; the cross-reference can be made at sync if that is wanted.

## As recorded by the canvass

1. **from `attorney-fees`** — {"row_id": "edu-attorney-fee-mutuality-mn", "observation": "Its notes already describe Kansas correctly \u2014 'CO requires mutual drafting, KS flatly prohibits fee-shifting, MN makes mutuality automatic by statute' \u2014 but the library had no Kansas row on topic=attorney-fees to point at. This answer supplies it (edu-attorney-fees-ks). No change needed to the Minnesota row; noting it so the cross-reference can be made at sync if that is wanted.", "state": "MN"}
2. **from `nonrefundable-deposit-notice`** — nonrefundable-fees-wv (states WV;MS;PR;VI;AS;MP) — not a Kansas problem, recorded only because the tag-first screen made me read it. Its lease_clause_basis is SERVES_LANDLORD, but its notes rest squarely on a West Virginia statute that makes the express written agreement the operative fact (W. Va. Code § 37-6A-1(14): a pet or application fee is outside the deposit definition only if 'the parties expressly agree, in writing, that a pet fee or application fee is nonrefundable'). Under SOP rule 26 that is a basis resting on one state's statute while the clause is tagged to five other jurisdictions. Whether MS, PR, VI, AS and MP each have an equivalent express-agreement provision is outside my scope; flagged for whoever owns those states.

---

### Proposed SOP changes

Each is drawn from something that actually went wrong or was nearly missed in this pass.

---

## 1. A corpus index must be proved, not assumed — three checks before any battery runs

This pass built a searchable index over the supplied corpus and ran absence batteries against
it. The index had two defects, neither of which announced itself, and both of which could
have produced confidently-wrong confirmed-absence rows. Add a standing index-integrity gate.

**(a) A boundary pattern must never use words that occur in statutory text.** The parser cut
each page at its footer, and the footer pattern included `LEGISLATIVE COORDINATING COUNCIL`,
matched case-insensitively. That phrase appears in the **title of K.S.A. 48-925**, so the
section was indexed with 96 characters of body instead of 8,346. In all, **169 sections were
materially truncated** (stored body under half the true length), losing about **447,000
characters** of operative text, concentrated in chapters 12 (49 sections), 60 (44), 48 (19),
58 (16), 44 (15), 50 (14), 16 (8) and 61 (4). Boundary markers must be anchored
structurally — a nav element, a line start — not by a phrase that the law itself may use.

**(b) Never re-derive a section number from a filename when the record already carries one.**
The first repair attempt mapped files to sections by parsing the filename. The Revisor's
scheme is `CCC_AAA_NNNN`, and the obvious reconstruction is wrong whenever the section's
number within its article has a single significant digit: `061_040_0001` reconstructs as
"61-401" rather than 61-4001, and `058_020_0005` as "58-205" rather than 58-2005. Because
61-401 and 58-205 are themselves real Kansas sections, the repair wrote **229 sections' text
into the wrong records**. The index's own section numbers, parsed from the page text, had been
correct all along. The rule: the record's stored path is the only safe key; a filename is
never a citation.

**(b2) A section-number parser must handle every numbering form the state actually uses.**
Kansas writes three-part numbers for some uniform acts — K.S.A. 58-9a-101 to 58-9a-405, the
Uniform Principal and Income Act — and all 48 of those sections were indexed with the chapter
prefix dropped ("9a-404" for 58-9a-404). The text was searchable, so no battery was affected,
but a citation lookup failed. It surfaced only because a mechanical citation check flagged a
row citing a chapter-58 section that appeared not to exist — and the row was right and the
index was wrong. Enumerate the state's numbering forms before trusting a parser: Kansas alone
uses `NN-NNNN`, the comma form `58-25,137`, a trailing letter `58-2309a`, a lettered article
`75-7c01`, and the three-part `58-9a-404`.

**(c) The check that catches all of them.** For every record, confirm that the section number the
text names is the section number the record is filed under. Both defects above show up
immediately under this check — (b) produced 229 violations, and the corrected build produces
0. It costs one pass over the index and should be mandatory before any battery is run against
it, and again after any rebuild.

## 2. After any change to the corpus or index, replay every recorded battery and diff it

Because every answer file records its battery command, patterns, control and hit counts, the
whole body of completed work can be re-verified mechanically against a changed index. This
pass did exactly that: **280 patterns across 43 topics**, evaluated against both the old and
the corrected index, reporting only patterns that went from 0 hits to hitting. The result —
none, with every control still clean — is what made it safe to keep the earlier slices rather
than redo them.

Propose: make "record the battery command verbatim" a hard requirement of the answer format
(it already is in practice), and make "replay and diff on any index change" a standing step.
Without the recorded commands this verification is impossible and the only honest option is
to redo the work.

## 3. A tool's default must not silently narrow the evidence

The search tool defaulted to `--kind statute`, which excluded both the individually fetched
out-of-corpus sections and the complete 2025/2026 session laws. An agent discovered this
mid-slice. Any battery run on the default could not see the 2026 acts at all — and in Kansas
this year that is the difference between "no law found" and a statute enacted in April.

Propose: an evidence tool's default must be its **widest** scope, and any narrowing flag must
print, in the output, what it excluded. The corrected tool prints a warning naming every
record kind the flag dropped. The same applies to the scope default, which an earlier session
had already had to widen after `rent[- ]?control` returned 0 because the phrase appears only
in K.S.A. 12-16,120's title.

## 4. Proximity patterns need a stated character budget, and a 0 from one is weak alone

An agent's proximity pattern returned 0 hits on a protection that plainly exists, because
K.S.A. 58-25,137(a)(2) separates "shall not be evicted" from "protected person" by more than
the 70 characters the pattern allowed. A differently-worded pattern in the same invocation
caught it.

Propose: a battery may not rest on proximity patterns alone. Every battery carries at least
one pattern that matches a single distinctive term with no proximity constraint, and a 0 from
a proximity pattern is recorded as weak evidence unless a non-proximity pattern agrees.

## 5. Prefer the full statutory term to an acronym in any search pattern

A bare `THC` alternative matched as a substring and returned 870 noise hits, burying the
signal. Use `tetrahydrocannabinol`. Generalise: short acronyms match inside unrelated words
and should be written with word boundaries or replaced by the full term.

## 6. When the codified text lags the session, say so in the log and cite the session law

The Revisor's published K.S.A. did not include the 2026 session on the day of this pass —
verified live, not merely inferred from the capture. Seven 2026 acts bear on this library and
none of them is codified. The citation of record in that situation is the session law
(`L. 2026, ch. 152, § 1(a)(2)`), and a row relying on an amended-but-uncodified section cites
both (`K.S.A. 61-3806(c), as amended by L. 2026, ch. 132, § 2`).

Propose: every state pass states, in §1, whether the codified text it searched includes the
most recent session, and how that was established. An existing Kansas row
(`edu-eviction-record-sealing-ks`) had independently derived this same caution months earlier;
making it a standing log field would have surfaced it to this pass immediately instead of
having it rediscovered.

## 7. Check the library before reporting new law as missing

This pass initially concluded that two major 2026 acts were absent from the library. Both were
already carried, well, in dedicated Kansas rows. The check that would have prevented it is
cheap: before recording a finding that the library lacks a statute, search the library for the
statute's own identifiers — act name, bill number, session-law chapter, and the distinctive
terms of the rule — not merely the topic key.

## 8. `effective_from` convention should be written down

The brief for this pass told agents to use the statute's own effective date. The library's
actual convention is the canvass date: 10,564 of 10,646 active rows set the column, 89% of
those equal `last_checked`, and 10,441 fall in 2026. A small minority carry a real statutory
date. Agents followed the brief and produced rows inconsistent with the library until it was
caught and normalised.

Propose: state the convention in the SOP — `effective_from` is the canvass date, the law's own
effective date belongs in `notes` — or, if the minority practice is deliberate, say when a
statutory date is wanted instead.

## 9. An absence claim may never rest on a battery that is blind to part of the corpus by construction

This pass built a whole-K.S.A. title battery and, to keep it useful, reported only hits
**outside** the ten full-text chapters already held in the corpus. That was the right design
for its purpose — but it made the battery structurally incapable of seeing anything in
chapters 12, 16, 31, 36, 44, 48, 50, 58, 60 and 61, and a note written from it accordingly
asserted that **"Kansas has NO general HOA / common-interest-community act."**

Kansas does. It is the **Kansas Uniform Common Interest Owners Bill of Rights Act, K.S.A.
58-4601 through 58-4614 and 58-4616 through 58-4623** — in chapter 58, the single most
important chapter for this library, and therefore suppressed from that battery's output. It
compounded because the act never uses the phrase "homeowners association", so a keyword search
for that phrase would also have missed it. A canvass agent caught it by reading the chapter's
own article list.

Propose: (a) any instrument that filters its own output must say so **in the output**, in the
terms of what it cannot see — this one did carry that warning, and the warning was still not
enough; (b) a conclusion of the form "state X has no Y act" must be supported by a full-text
battery over the whole corpus **and** by an inspection of the relevant chapter's article list,
never by a filtered battery; and (c) when an act is of a kind most states have, treat its
apparent absence as a signal to look harder rather than as a finding — uniform acts in
particular are often codified under a name the searcher did not predict.

**This happened three separate times in one pass, which is what makes it a standard rather
than an anecdote.** Each time the missed law was in chapter 58:

1. **"Kansas has no general HOA / common-interest-community act."** It has the Kansas Uniform
   Common Interest Owners Bill of Rights Act, **K.S.A. 58-4601 to 58-4623**, mandatory under
   58-4603, applying to every common interest community of 12 or more residential units.
2. **"No Kansas mandatory-access statute for cable or telecom in rental buildings."** The last
   sentence of **K.S.A. 58-2553(a)(5)** — a paragraph otherwise about water and heat — reads
   "The landlord shall not interfere with or refuse to allow access or service to a tenant by a
   communication or cable television service duly franchised by a municipality." A KRLTA duty,
   non-waivable under 58-2547(a)(1), and the pattern that finds it returns exactly one hit
   corpus-wide.
3. **"No Kansas flag-display or political-sign tenant right."** **K.S.A. 58-3820** voids a
   restrictive-covenant ban on political yard signs under six square feet in a window around an
   election; **K.S.A. 58-4617(d)** bars a 12+-unit association from prohibiting the US flag, the
   state flag, or candidate and ballot-question signs on a unit.

Note the second and third would also have been missed by a keyword sweep: nobody searches a
water-and-heat paragraph for a cable duty, and Kansas writes "political **yard** signs", so
`political sign` misses 58-3820.

**The systematic remedy applied here, which should become the standard.** Every editorial
absence claim written into this pass's title battery was located mechanically — 20 topics
carried one — and each of those topics' research packets was given an explicit warning that the
claim is a hypothesis to be re-derived, naming the three disproven instances and the in-corpus
leads. Propose: any instrument that mixes retrieved evidence with the researcher's own
commentary must mark the commentary as such, and the commentary must be re-derived before it
can support a row.

Topics answered on the wrong premise and listed for re-check at sync:
`association-obligations-disclosure`, `communal-land-lease-approval`, the `hoa-compliance`
boundary, and — caught before delivery — `telecom-access` and `tenant-display-rights`.

## 10. Battery patterns: three failure modes to write into the standard

All three were found by agents in this pass, each on a topic where the wrong answer would have
been a confident confirmed absence.

**(a) Match the inflection the statute uses, not only the noun.** A pattern of
`rent[a-z ,;]{0,30}(suspended|abated|abatement)` returned a clean 0 for `rent-demand-bar`,
which would have produced a wrong absence row — because **K.S.A. 58-2560 says "rent abates"**.
The finite verb was missing from the alternation. Require every battery to include the verb
inflections of its key term, not just the noun and the participle.

**(b) Short stems and acronyms match inside unrelated words.** `escalat` returns 11 hits that
are all the elevator act's "escalators" (K.S.A. 44-1819, 44-1822); a bare `THC` returned 870
noise hits; a bare `rent` matched the letters inside an ordinary word in K.S.A. 48-924. Require
`\b` anchoring and the full statutory term in preference to an acronym or a bare stem.

**(c) Titles invert the words.** The Kansas statute of frauds is titled "Agreements void unless
in writing," so `frauds` finds nothing. Already noted in this pass's title battery, but it
belongs in the standard.

**The common rule worth stating:** a 0 on a subject most states legislate is more likely a
pattern defect than an absence. Before recording a confirmed absence on such a subject, vary
the wording, vary the inflection, and include at least one pattern with no proximity
constraint — and say in the row's notes that you did.

## 11. Run a mechanical citation check over the finished rows before any human-style review

This pass extracted every `K.S.A.` citation from every row's `notes` and `bodyText` — 458
distinct sections across 210 rows — and checked each against the index. Two things fell out of
it that no amount of reading would reliably have caught:

* **One apparent defect that was really an index defect** (the 58-9a-404 case in §1 above):
  the row was right and the index was wrong.
* **A clean separation of citations into "in a chapter we hold complete" and "a lead in a
  chapter we do not hold"** — 31 distinct sections across 16 unfetched chapters. That list is
  the fetch queue, and it is exactly what tells you whether a row is resting on something
  nobody opened.

The check also confirmed mechanically what would otherwise be an assertion: **no row uses the
forbidden "K.S.A. §" form**, and **no row relies on a section whose codified text this corpus
holds in a pre-2026 state without the "as amended by" rider**.

Propose: make this a required step between the canvass and the independent check. It is cheap,
it is deterministic, and it converts "we believe the citations are sound" into a result. Its
one design rule: separate a citation to a chapter held in full (where a missing section is a
real defect) from a citation to a chapter not held (where it is a lead to be fetched or
flagged), because conflating them buries the signal in noise — the first version of this check
reported 67 "defects", 66 of which were artifacts of the regex or legitimate leads.

## 12. A citation in the research brief needs the same proof as a citation in a row

This pass's worst defect was not in any row. It was in the **brief**. I wrote that the Kansas Cold
Weather Rule, residential disconnection procedure and utility-deposit rules sit in `K.A.R. art.
82-1`, naming `K.A.R. 82-1-220 et seq.`, and I never opened it. **K.A.R. 82-1-220 is titled
"Complaints."** The Corporation Commission has 17 K.A.R. articles and **none** for residential
utility billing, deposits or disconnection; Kansas's Cold Weather Rule is a Commission **order**
carried into filed tariffs, not a codified regulation. Ten independent researchers repeated the
citation. Not one challenged it.

Two things follow, and the second matters more than the first.

**(a) Brief statements are evidence, and must be sourced like evidence.** Every statutory or
regulatory citation in a canvass brief should carry the same mark as a row's: either the section
was opened, or it is labelled a **lead** in the brief itself. A brief should be auditable by
`check_citations.py` exactly as the rows are. Had that run against the brief, this would have
surfaced on day one.

**(b) The scope document is the one source researchers do not question.** Each of the ten agents
*hedged* the citation — "believed to", "could not be reached", "content is NOT asserted" — which
is why no delivered row ever stated a false rule. That hedging discipline worked and should be
kept. But hedging is not challenge: ten researchers independently suspected nothing, because the
brief reads as settled scope rather than as a claim. The standard should say plainly that **the
brief is the lead researcher's draft, not authority**, and that an agent who cannot verify a
load-bearing brief statement must say so in its report. Add a required report line: *"brief
statements I relied on and could not verify."*

## 13. Distinguish "the source could not be reached" from "the source does not say that"

For most of this pass the K.A.R. was recorded as unreachable, and roughly sixty rows carried
`NEEDS_REVIEW` on that basis. It was reachable throughout. The only method tried was a
cross-origin `fetch`, which the browser refuses; **navigating** a tab to the same URL and reading
the page text works and needs no scripting.

An access failure should never be logged against a source on the strength of one method. Require,
before writing "could not be reached": a direct navigation, a note of the exact URL tried, and the
error observed. And when the gap is real, the **reason** stated in the row must be the true one —
"the rule is not in the K.A.R." and "the K.A.R. could not be opened" send a later reader to
completely different work. Three of this pass's rows reached `VERIFIED` the moment the real
regulation was read, and two others had their stated reason replaced by a far narrower one (the
adopted model code's copyrighted text is not reproduced in the regulation).

## 14. Treat every "this state has no such act" sentence as a claim to be tested

Four times in this pass a confident negative was wrong: Kansas was said to have no general
common-interest-community act (it has the **Kansas Uniform Common Interest Owners Bill of Rights
Act, K.S.A. 58-4601 to 58-4623**), no telecom mandatory-access provision (the last sentence of
**K.S.A. 58-2553(a)(5)**), no tenant display right (**K.S.A. 58-3820**, **58-4617(d)**), and no
codified Cold Weather Rule in the place it was said to be.

The shape is always the same: the negative is derived from a corpus that is complete for some
chapters and silent for the rest. A whole-statute **title index** catches most of these cheaply
and should be built as a standing step, not improvised mid-pass. And an absence asserted about a
subject whose natural home is **outside** the full-text chapters should be marked as resting on
the title index alone, so a later reader knows which absences are strong and which are merely
unsearched.

## 15. A battery result is a measurement against the corpus at a moment in time — record which moment

This pass changed its own corpus repeatedly while rows were being written: three index repairs,
**186 out-of-corpus sections fetched mid-pass**, and two tool defaults corrected (`--kind` once
excluded the fetched sections *and* both session-law years; a trailing-comma guard once reported
NO REFERENCE for the commonest Kansas citation form). The consequence is subtle and was nearly
missed: **a pattern that honestly returned zero when a researcher ran it can return hits later,
while the row still says the subject is absent.**

`absence_flip_check.py` cleared the *index-defect* version of this question by replaying every
recorded pattern against the broken and the repaired index. It did not and could not cover the
*growth* version. A purpose-built re-check (`recheck_zero_batteries.py`, 1,354 patterns examined,
95 recorded as zero) found **eight genuine drifts**, several of them substantive: a row asserting
`'friable' 0 hits index-wide, so the technical standard is regulatory` when K.S.A. 65-5301 — since
fetched — now contains it; and a law-enforcement-cooperation row whose two key zeros now hit
**K.S.A. 22-3904**, the common-nuisance remedy, which another researcher independently found to
*void a lease*. Nothing in the answer-file schema recorded which index build a battery ran
against, so the drift was invisible.

Two changes. **(a)** Every battery record should carry the index's content hash, or at minimum its
section count and build timestamp, so drift is detectable rather than inferred. **(b)** After any
ingest or tool-default change, re-run every recorded zero-hit pattern and clear the flips before
delivery — it is cheap, it is now scripted, and it is the only check that catches this class.

Related recording defect worth fixing in the standard: **20 answer files recorded two invocations
in one `battery.command` field joined by the bare word `THEN`**, which is not re-runnable. The
replay tool reported one of them as CONTROL DIRTY for that reason alone, and the independent check
had to disprove it by hand. A battery's command field should hold one invocation, or a list.

## 16. Rule 57 bars duplicating a subject in the same register, not a clause plus its explanation

The independent check asked for a ruling: twelve Kansas topics deliver two rows under one
`topic_key`, one LEASE_CLAUSE and one LANDLORD_EDUCATION, which §3 of the canvass brief seems to
frame as a choice and rule 57 seems to forbid. The library settles it. Of **11,587** active
state-plus-topic combinations, **1,688 (14.6%) already carry both** a clause row and an education
row — established practice across many states, not a Kansas invention. What is genuinely rare is
**two rows of the same `content_type`** for one state and topic: 214 combinations, none of them
Kansas's.

So rule 57 should say what it actually protects against: two rows of the same kind on the same
subject, which is how the library ends up stating a point two ways and contradicting itself. A
clause and the education explaining the clause's limits are different registers and belong
together. Writing this down saves every later state the same argument.

---

### Proposed topic questions

Three subjects turned up in Kansas law that have no home in the library's 364 topics. Each is
real, landlord-facing, and almost certainly not Kansas-specific — which is the test for adding
a topic rather than a state row. Each is currently carried inside a Kansas row on an adjacent
topic, named below, so nothing is lost if the answer is "no".

## 1. Water submetering: the no-markup cap, the surcharge ban and the monthly statement

**K.S.A. 58-25,127**, read section-open. It sits in chapter 58 article 25 (the Mobile Home
Parks Act) but is **not** confined to it — it expressly reaches a landlord who furnishes water
to tenants "pursuant to **subsection (a)(5) of K.S.A. 58-2553**", the ordinary KRLTA duty. It
provides that such a landlord is not a "public utility" under K.S.A. 66-104 **so long as the
landlord charges the tenant at the same rate charged by the city or water district**; that
**(b)** "[t]he landlord shall not charge the tenant any surcharge for the installation,
maintenance or any other purpose related to the use of a separate water meter"; and that
**(c)** "[t]he landlord shall provide the tenant with a **monthly water statement** showing the
computation of the amount the tenant owes, the tenant's meter reading for the current water
statement period and the tenant's meter reading for the prior water statement period."

That is a rate cap, an absolute fee ban and a recurring disclosure duty in one section. The
library's nearest topics are `utility-submetering-disclosure`, `utility-apportionment` and
`meter-conservation-charge`, and none of them is framed to carry a no-markup rule or a monthly
statement requirement. **Many states regulate submetered water this way**, so a dedicated
topic would probably earn its place across the library rather than only in Kansas.
Currently carried in: `water-meter-charge-notice-ks` (topic `meter-conservation-charge`).

## 2. Equity skimming: buying a defaulted rental and pocketing the rents

**K.S.A. 60-1011**, "Equity skimming; damage, costs, fees." A buyer of a defaulted one-to-four
family dwelling who fails to notify the lender within 21 days and does not apply the rents to
the mortgage is exposed to suit — by the former owner, by **the buyer's own tenant**, and by
the lender — for all rents received, plus costs and fees. It is squarely a landlord-facing
exposure for anyone acquiring tenanted property, and the tenant's own standing to sue makes it
a lease-adjacent risk rather than a pure finance matter.

The library has `foreclosure`, but that topic is about a tenant's position when the landlord's
lender forecloses, not about the acquirer's duties. **This is an investor-facing subject the
topic list does not reach**, and most states have an equity-skimming or mortgage-rescue statute
of some kind.
Currently carried in: `edu-redemption-ks` (topic `redemption`).

## 3. EV charging equipment as a weights-and-measures matter

**L. 2025, ch. 91** places electric vehicle supply equipment inside the chapter 83
weights-and-measures regime, and **L. 2026, ch. 120** regulates retail electric suppliers that
operate public fast-charging stations. Neither imposes a duty on a landlord — which is the
right answer for the three existing `ev-charging-*` topics — but the weights-and-measures angle
is a distinct subject: a landlord who resells electricity through a charger may be selling a
measured commodity, with registration, accuracy and price-posting consequences that none of
the three EV topics is framed to ask about.

This one is the least certain of the three. It may be better handled as an extra question
inside `ev-charging-requirements` than as a topic of its own; I note it because the agent that
found it could not place it anywhere in the list.
Currently carried in: `edu-ev-charging-requirements-ks`.

---

**Not proposed, deliberately.** The K.S.A. 21-6111 smoking-sign posting duty, the
K.S.A. 58-30,106(d)(1) licensee disclosure duty and the L. 2026, ch. 56 squatter-affidavit
procedure all found homes in existing topics (`smoke-drift-waiver`, the various disclosure
topics, and `unauthorized-occupant-removal` respectively), so none needs a new topic even
though each was new to Kansas's coverage.

---

### New `{{variables}}` introduced

- `{{designated_repairer}}` — `designated-repairer`
- `{{employee_duties}}` — `tenant-employee-housing`
- `{{employee_housing_consideration}}` — `tenant-employee-housing`
- `{{employee_position}}` — `tenant-employee-housing`
- `{{excluded_appliance_list}}` — `appliances-excluded`
- `{{lien_release_days}}` — `construction-liens`
- `{{tenant_metered_common_areas}}` — `common-area-lighting`

## Gaps-pass sync review (Claude Code, 2026-10-25)

Merged with `merge-delta.py --base 9f38860` after Colorado and Wyoming: 244 new rows (37 lease clauses), 21 shared rows tagged, nothing refused.

**NEEDS_REVIEW (41 delivered):** 21 rested on points only Kansas case law could settle; each was read and closed VERIFIED, four after adding the doubt and the course that works under every reading (`edu-eviction-hardship-stay-ks`, `edu-notice-delivery-methods-ks`, `edu-rental-inspection-ks`, `edu-ev-charging-requirements-ks`). 20 waited on regulations or agency text, read at sync (K.A.R. on rules.ks.gov, the KCC Billing Standards and Cold Weather Rule, K.S.A. 66-104, 75-453, 2-3202, 12-1,115, chapter 65 and 83 material): 16 closed VERIFIED, 14 of them with corrections (among them Kansas's own lead renovation rule, K.A.R. 28-72; the KCC shutoff, notice and deposit rules; Safe at Home's service agent is the attorney general, K.S.A. 75-453(a)(2)). Four stay NEEDS_REVIEW on unreachable sources (2006 IBC/IFC; Supreme Court Rules; a KCC order), listed in the backlog for Taylor's browser.

**Findings on existing rows (§6):** 1-1a `edu-eviction-record-sealing-ks` (L. 2026, ch. 132 read: mediation 'would not aid the parties materially', the continuance is mandatory and needs no bond, the effective-date formula); 2 squatter note; 3 `edu-no-voucher-protection-ks`, 4 `edu-no-rental-application-regulation-ks`, 5 `edu-security-deposit-cap-ks` (L. 2026, ch. 152 preempts local voucher, screening and deposit-cap ordinances); 6 `edu-fair-housing-ks` (ancestry, K.S.A. 44-1016); 7 `edu-no-co-alarm-requirement-ks`; 8 new `hoa-compliance-ks` (K.S.A. 58-2547(a)(4)), KS untagged from `hoa-compliance`; 9 KS note on `keys`; 10 `edu-eviction-procedure-ks` aligned with `edu-cares-act-notice`; 11 `smoke-detectors-ks` basis; 13 a scope note on the 16 rows resting on K.S.A. 58-25,137 (the 2019 enrolled act was not reachable; the general reading is also the safe course). Of the 24 further findings, 12 fixes applied after the statutes were read (among them `tenant-duties-ks` no longer shifts the landlord's repair duty; `edu-no-fees-as-rent-rule-ks` now states K.S.A. 58-2543(j)'s rent definition; licensee disclosure under K.S.A. 58-30,106(d)(1); the K.S.A. 22-3901 common-nuisance route); 5 were not defects.

**Choice points (§4):** none needed Taylor; `collection-fee-ks` kept as an optional clause, basis CONSTRAINED_TERM | SERVES_LANDLORD.

**Edited-after rows:** consistent on the fire-code editions; L. 2026, ch. 74 was found to streamline, not require, a 2024 IFC update, and two rows that said it required one (one of them Claude Code's own edit this sync) were corrected.

**Spot check:** K.S.A. 58-2547, 58-2553(b), 58-25,127, 44-1016, 58-2543(j), 58-2548 and both 2026 acts read; `waste-removal-duty-shift-ks`, `water-meter-charge-notice-ks` and `eviction-notice-cost-ks` match. **Cross-state items** (shared `hoa-compliance`, `utility-allowance-cap-co`, `nonrefundable-fees-wv`) are on Claude Code's list in the backlog. SOP 1.86 takes up the pass's 16 proposals; its three proposed topics became topic questions; seven new `{{variables}}` added to M.14.
