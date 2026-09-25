## Decision Log: Clause Library Verification Workflow — Kansas (State #3)

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
