## Decision Log: Clause Library Verification Workflow — Kansas (State #3)

**Date started:** 2026-08-22
**Status:** ✅ Core KRLTA pass complete (2026-08-22) — ✅ Whole-library generic-clause audit closed (session 5) — ✅ Named-topic absence canvass brought to CO/WY parity (session 7). See §11 for current open items.
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
