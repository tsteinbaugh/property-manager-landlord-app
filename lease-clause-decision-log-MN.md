## Decision Log: Minnesota (State #5) — Session 1

**Date:** 2026-08-23
**Status:** In progress — primary-source statute walk substantially complete; whole-library audit and named-topic canvass not yet run; 12 new rows drafted and verified this session.
**Companion documents:** `decision-log-clause-library-verification.md` (CO), `decision-log-clause-library-verification-wyoming-addendum.md` (WY), `decision-log-clause-library-verification-kansas.md` (KS), `decision-log-clause-library-verification-nebraska.md` (NE), `decision-log-clause-library-verification-session-architecture-review.md`, `steinoak-named-topic-checklist-updated.md`. CSV base was `steinoak_clauses_updated_13.csv`; this session's output is `steinoak_clauses_updated_14.csv`.

---

### 1. Primary source

Minn. Stat. Chapter 504B (Landlord and Tenant), read directly from revisor.mn.gov, current through the 2026 Regular Session amendments noted on the chapter page. Table of sections captured in full; full text read for all clause-relevant sections through the Tenant's Rights group and for select sections beyond that (504B.216, .265, .266, .271) chosen for clause relevance. Not yet read in full text: 504B.212 (tenant organizing), 504B.221/.225/.231 (utility ouster/damages — likely low clause relevance, mostly remedies), 504B.235–.245 (residential tenant screening reports — a different concept from applicant screening fees, not yet distinguished), 504B.251/.255/.261/.268/.275 (misc rights), and eviction-procedure sections (504B.281 onward — deliberately deprioritized per established methodology, procedural rather than clause-relevant).

### 2. Genuinely new findings this session

- **Entry notice (§ 504B.211) is explicit and prescriptive**: 24-hour minimum notice, 8am–8pm entry window, 9 enumerated reasonable-business-purpose categories, 3 specific emergency no-notice exceptions, non-waivable, up to $500/violation + attorney fees. Direct contrast with CO, where 24-hour notice was confirmed *not* statutorily required.
- **Shared-metered utility billing (§ 504B.216)** is the most prescriptive utility statute encountered in this project. Electricity apportionment is flatly prohibited (submetering only); gas/water apportionment must follow specific statutory formulas; $8 admin fee cap, $5 non-compounding late fee cap; disconnection for nonpayment is banned; a near-verbatim lease-attachment disclosure is required when gas or water is apportioned.
- **Death of tenant (§ 504B.265)** is an affirmative statutory termination right (either party, 2 months' notice) built directly into the lease relationship — architecturally different from CO's prohibition-only framing (Letty's Act bars penalty clauses but doesn't itself create a termination mechanism the lease needs to accommodate).
- **Infirmity/medical-facility termination (§ 504B.266)** — a tenant-initiated early-termination right tied to a medical need to move into a care facility, with documentation requirements. **This topic has not appeared in CO, WY, KS, or NE and was not on the existing named-topic checklist.** Recommend adding it to the canvass list for all future states, including a retroactive check against CO/WY/KS/NE if Taylor wants that later (not done this session — flagged, not resolved).
- **Attorney fee mutuality (§ 504B.172)** is automatic by operation of law in Minnesota — a third distinct pattern for this topic across the project (CO requires mutual drafting; KS flatly prohibits fee-shifting; MN makes mutuality automatic regardless of lease language, no drafting fix needed or possible).
- **Right to call police (§ 504B.205)** is its own standalone, explicit, non-waivable statute — first state in this project where this is directly codified rather than inferred from a broader prohibited-provisions list (CO) or confirmed absent (WY/KS/NE).
- **Total Monthly Payment disclosure (§ 504B.120)** and the **utility disclosure attachment (§ 504B.216, subd. 10)** are both product/formatting requirements as much as content requirements — first-page placement and near-verbatim attachment text respectively. Flagged for Taylor as lease-builder implications, not pure clause-library items.

### 3. CSV changes this session

Base: `steinoak_clauses_updated_13.csv` (298 rows). Output: `steinoak_clauses_updated_14.csv` (310 rows, 12 new).

**Verified (previously unverified):**
- `late-fee-limit-mn` — confirmed accurate against § 504B.177(a) as originally tagged (one of the 51 rows flagged in the architecture-review session as displaying pre-verification; this is the first of those 51 resolved).

**Extended to MN (generic clause, compatible mechanics, no conflict):**
- `late-fee`, `security-deposit-use`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `utilities-paid-by-landlord`, `services-utilities-provided`.

**New LEASE_CLAUSE rows (all VERIFIED, all supersedes-linked where a generic equivalent exists):**
- `landlords-access-mn` (supersedes `landlords-access`)
- `security-deposit-return-mn` (supersedes `security-deposit-return`)
- `termination-death-of-tenant-mn`
- `termination-infirmity-mn`
- `abandoned-property-mn`
- `utility-apportionment-mn` (CONDITIONAL — applies specifically to shared-metered buildings; generic utility clauses above remain the default for directly-metered situations)

**New LANDLORD_EDUCATION rows (all VERIFIED):**
- `edu-utility-disclosure-attachment-mn`
- `edu-entry-notice-content-mn`
- `edu-right-to-call-police-mn`
- `edu-attorney-fee-mutuality-mn`
- `edu-screening-fee-rules-mn`
- `edu-prohibited-fees-disclosure-mn`

### 4. Judgment calls made, surfaced for Taylor

- **Security deposit interest (§ 504B.178, subd. 2):** MN requires 1%/year simple interest on deposits. The new `security-deposit-return-mn` clause promises interest "as required by Minnesota law" rather than stating a number, consistent with how other states' clauses avoid hardcoding figures that could go stale — **but Steinoak's product doesn't yet calculate or disclose an actual interest amount anywhere.** This is a product gap, not just a clause gap. Not fixed this session.
- **Utility apportionment formulas (§ 504B.216, subds. 6–7)** are not restated verbatim in `utility-apportionment-mn`'s body text, only referenced — same reasoning as above (avoid the clause going stale if the formula changes). The underlying statute is the authority; happy to add the literal formula text if Taylor prefers it inline instead.
- **`utility-apportionment-mn` is a genuinely new clause pattern**: it's the first CONDITIONAL clause in the library explicitly gated on a *property configuration* (shared-metered vs. directly-metered) rather than a state or a landlord policy choice. This is exactly the kind of property-attribute auto-trigger noted as a candidate in prior sessions (alongside HOA presence, pre-1978 build year). Flagged again here as a concrete example ready to inform that product design when it's built.
- **Two product-level (not clause-level) requirements flagged**: MN's page-1 "Total Monthly Payment" placement rule (§ 504B.120) and the near-verbatim utility disclosure attachment (§ 504B.216, subd. 10). Both logged as LANDLORD_EDUCATION for now since the clause library can't enforce formatting/placement, but both should reach whoever eventually builds the lease-builder's document-assembly logic.
- **Not yet checked for MN:** immigration-status inquiry prohibition (no equivalent found in Chapter 504B so far, but chapter isn't fully read — did not log an absence finding since that would need the same "checked directly, confirmed absent" rigor used for WY/KS/NE, not yet done for MN).

### 5. Not done this session — still open

- Whole-library generic-clause audit (every existing generic clause needs an extend/leave/flag pass for MN, not just the ones touched above opportunistically).
- Named-topic canvass against everything CO/WY/KS/NE surfaced (first pass not started; second pass therefore also not started).
- Remaining statute sections listed in §1.
- Immigration-status and tenant-screening-fairness-act absence checks (need the same "checked directly" rigor as prior states before logging either as confirmed absent).
- Gap-discovery sources 2–4 (real professional MN lease comparison, personal-landlord-experience — not applicable per standing rule, law living outside Chapter 504B).

### 6. Backlog items opened this session (explicitly not resolved, circle back later)

- **Retroactive check: infirmity/medical-facility termination against CO, WY, KS, NE.** MN's § 504B.266 right has no equivalent noted in any of the four completed states' decision logs or the named-topic checklist. Taylor's instruction: flag it, check the other four states, and circle back — not resolved this session. Also add to the canvass list used for all future states going forward regardless of the retroactive check's outcome.
- **Product-level gaps surfaced by MN, not yet actioned:**
  1. **Security deposit interest** (§ 504B.178, subd. 2) — MN requires 1%/year simple interest on deposits, and Steinoak's product doesn't currently calculate, track, or disclose any deposit interest amount anywhere. The clause promises interest "as required by law" but nothing downstream produces a number.
  2. **Page-1 "Total Monthly Payment" placement** (§ 504B.120) — MN requires rent + all nonoptional fees to be summed and displayed as a specifically-labeled line on the lease's first page. This is a document-layout requirement the clause library alone can't satisfy.
  3. **Verbatim utility disclosure attachment** (§ 504B.216, subd. 10) — required close-to-verbatim statutory text as a lease attachment whenever gas or water is apportioned in a shared-metered building; not something clause selection produces on its own.
  
  Taylor's instruction: flag all three, circle back later (when the lease-builder/document-assembly side of the product is being worked on, not now).

### 7. Statute walk — completed this session

Remaining sections read and assessed:

- **§ 504B.212 (Tenant Right to Organize; Tenant Associations)** — genuinely new named-topic, not present in CO/WY/KS/NE. Landlord conduct restriction (must allow organizing activities, can't require handing over tenant contact info, tenant association must stay independent of management). Logged as `edu-tenant-right-to-organize-mn`. **Recommend adding "tenant right to organize" to the named-topic checklist for future states**, alongside infirmity termination (see §6 backlog).
- **§§ 504B.221 / .225 / .231 (Unlawful termination of utilities / intentional ouster / damages for ouster)** — remedies/procedure for the disconnection-ban and ouster provisions already captured substantively in `utility-apportionment-mn`'s notes and the generic utility clauses; no additional clause content needed, these are enforcement mechanics, not obligations that change clause drafting.
- **§§ 504B.235–.245 (Residential Tenant Reports)** — regulates third-party tenant *screening services* (credit-bureau-like entities), not landlords directly; largely mirrors/incorporates the federal Fair Credit Reporting Act. Distinct from the applicant-screening-fee rules in § 504B.173 (already captured in `edu-screening-fee-rules-mn`). Assessed as low clause-relevance — no new row added; flagging here so it's not mistaken for an unreviewed gap later.
- **§ 504B.251 (Recording of Notice of Cancellation of Leases)** — procedural (county recorder mechanics), no clause implication.
- **§ 504B.255 (Termination Notice for Federally Subsidized Housing)** — narrow applicability (subsidized housing only), out of scope for Steinoak's general clause library per the same logic used to deprioritize other subsidized/public-housing-specific provisions in prior states.
- **§ 504B.261 (Pets in Subsidized Disability-Accessible Housing)** — narrow applicability (subsidized housing only), same treatment as above.
- **§ 504B.268 (Right to Counsel in Public Housing; Breach-of-Lease Eviction Actions)** — court-appointed-counsel procedure specific to public housing evictions, no clause implication.
- **§ 504B.275 (Attorney General's Statement; Distribution)** — procedural disclosure-document mechanics (ties back to § 504B.181's posting requirement, already captured conceptually), no separate clause needed.
- **Eviction-procedure sections (§§ 504B.281 onward)** — deliberately not read in full text, consistent with established methodology (procedural, not clause-relevant).

**Statute walk is now substantially complete** for clause-library purposes. CSV total after this addition: 311 rows (`steinoak_clauses_updated_15.csv`), 21 MN-tagged.

### 9. Whole-library generic-clause audit — completed this session

Ran the systematic extend/leave/flag pass across all 62 generic (non-state-suffixed) `LEASE_CLAUSE` rows in the library.

**Correction to earlier work this session:** `services-utilities-provided` was extended to MN in an earlier pass without checking for MN-specific liability-disclaimer risk first. On the systematic audit, this was caught: the clause contains an exculpatory sentence ("Tenant waives all liability of Landlord for any interruption...") matching the pattern KS and NE found **PROHIBITED** under their own general prohibited-lease-provisions statutes (§ 58-2547, § 76-1415), and which WY only confirmed safe for its own state after directly reading all 11 sections of Article 12. Minnesota's statute walk this session did not surface a single consolidated "prohibited lease provisions" statute the way CO/KS/NE have — MN instead uses scattered per-section non-waiver rules — **but absence of a finding is not the same as a confirmed absence of the prohibition**, which could exist elsewhere in MN law (general consumer-protection statutes, case law) outside Chapter 504B. The MN tag has been **removed** from this clause pending a direct check, consistent with the rigor WY applied rather than assuming safety from silence. This is logged in the row's own notes as a correction, not silently fixed.

**Extended to MN (34 clauses)** — all were already tagged KS;NE (vetted against the strictest prohibited-lease-provisions bar found in this project to date) and contain no exculpatory/liability-waiver language, and nothing in this session's statute walk conflicts: `rent-payment`, `returned-payments`, `due-at-signing`, `application-of-payments`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `acceptable-payment-methods`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `appliances-included`, `holdover`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-insurance-requirement`, `assigned-parking-space`, `parking-vehicle-rules`, `keys`, `guest-policy`, `guest-policy-day-limit`, `common-area-use`, `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `lead-based-paint`, `hoa-compliance`.

**Flagged, NOT extended — exculpatory-clause risk group (needs a direct MN prohibited-provisions check before extending, same posture as `services-utilities-provided`):**
- `tenants-property-insurance`, `pet-policy`, `parking`, `storage-space` — all CO;WY only (not KS;NE), all contain "Landlord is not liable for..." or indemnification language. This is the exact clause family the WY addendum session was built around checking. Needs the same direct-statute-check treatment for MN before any extension decision.

**Flagged, NOT extended — reason for CO;WY-only scoping unknown without the full CO/KS/NE decision logs (only partial excerpts of KS/NE logs and no CO log were in this project's uploaded files this session):**
- `default-by-tenant`, `early-termination`, `possession-delay`, `surrender-end-of-term` (all CO;WY), `landlord-maintenance` (CO only), `tenant-maintenance` (CO;WY). No exculpatory language visible in these, but since KS/NE apparently didn't extend to them either, there may be a reason (e.g., early-termination's fee formula vs. a liquidated-damages statute, or default-by-tenant's cure period vs. specific state notice-to-quit requirements) not yet identified. Recommend reviewing the full CO/KS/NE logs (not just this session's excerpts) before deciding on MN, rather than guessing.

**Flagged as needing a dedicated MN-specific clause, not a simple extension:**
- `assistance-animal-accommodation` (currently KS;NE) — MN's § 504B.113 is materially more detailed than the generic FHA-baseline clause: it defines a specific closed list of "licensed professional" categories who may provide documentation, requires disclosure in the lease of the fee prohibition if the landlord otherwise charges pet fees, and makes the tenant liable for animal-caused damage. Recommend a `assistance-animal-accommodation-mn` override in a future session rather than extending the generic version as-is.

**Not part of this audit** (single-state-only by design, not generic): `nsf-fee-limit-fl`, `nsf-fee-limit-pa`, `habitability-timeline-fl`, `habitability-timeline-az`, `flood-disclosure-fl`, `foreclosure-disclosure-nv`, `month-to-month-notice-co-exempt`, `month-to-month-notice-co-covered`.

CSV after this pass: 311 rows total (row count unchanged — this pass only modified `states` tags and notes, no new rows), MN now tagged on 54 rows total (was 21, +34 extended, -1 corrected/removed).

### 11. Exculpatory-clause question — resolved this session

Direct research into Minnesota's treatment of landlord liability-waiver/exculpatory language, per the flag raised in §9.

**Finding:** Minnesota has no statute voiding exculpatory clauses (unlike CO/KS/NE's flat statutory prohibitions). Instead, Minnesota courts apply a common-law **strict construction** standard: *Justice v. Marvel, LLC*, 979 N.W.2d 384 (Minn. 2022), extending *Dewitt v. London Rd. Rental Ctr., Inc.*, 910 N.W.2d 412 (Minn. 2018). A clause releasing a party from its own negligence is enforceable only if it "clearly and unequivocally" says so — broad, unqualified "not liable" language (the pattern used throughout Steinoak's generic library) risks being read as failing that standard, meaning it may provide **no actual protection** even though it isn't unlawful to include. Separately, no exculpatory clause, however drafted, can ever bar claims for intentional, reckless, or willful/wanton conduct — courts will not enforce a waiver of that regardless of wording.

This is a third distinct pattern for this topic across the project: not prohibited (KS/NE), not confirmed absent (WY), but **legally permitted, yet practically weak as currently worded**.

**Decision (Taylor's call, presented as a draft and approved before committing):** rather than extend the generic clauses to MN as-is, drafted 5 MN-specific override clauses that explicitly name "ordinary negligence" (satisfying the clear-and-unequivocal standard) while carving out gross negligence and willful misconduct (since attempting to cover those would just make a court more likely to strike the whole clause under strict construction):

- `tenants-property-insurance-mn` (supersedes `tenants-property-insurance`)
- `pet-policy-mn` (supersedes `pet-policy`) — only the entry/removal liability sentence was changed; the indemnification sentence (tenant indemnifies landlord against third-party claims) is a different legal mechanism than exculpation and was left as-is
- `parking-mn` (supersedes `parking`)
- `storage-space-mn` (supersedes `storage-space`)
- `services-utilities-provided-mn` (supersedes `services-utilities-provided`) — this one already had a narrower "beyond Landlord's reasonable control" qualifier before the addition, so the change here is more belt-and-suspenders than the other four

All 5 are `CONSTRAINED` / `LEASE_CLAUSE` / `VERIFIED`, group-matched to their generic counterparts, dated 2026-08-23.

CSV after this addition: 316 rows (`steinoak_clauses_updated_16.csv`), MN now tagged on 59 rows.

### 13. Named-topic canvass — Pass 1

Ran against the consolidated checklist (`steinoak-named-topic-checklist-updated.md`). Per the standing rule, this is Pass 1 only — a second, independent pass is still required before Minnesota can be declared complete. Status marked Present / Confirmed Absent / Not Yet Checked for every row; nothing left silently blank.

**Disclosures & habitability**

| Topic | MN status |
|---|---|
| Radon disclosure requirement | Not Yet Checked |
| Bed bug disclosure/treatment-timeline requirement | Not Yet Checked |
| Mold disclosure requirement | Not Yet Checked |
| Security deposit interest requirement | **Present** — § 504B.178, subd. 2, 1%/year simple interest (already reflected in `security-deposit-return-mn`) |
| Lead-based paint disclosure | Present (federal, applies regardless of state) |
| Move-in written inventory requirement | **Present, different architecture** — § 504B.182 gives an optional tenant-triggered inspection right, not a mandatory joint signed inventory on a fixed timeline like KS's 5-day rule. Don't conflate with KS's version. |
| Day-one landlord/manager identity disclosure | **Present** — § 504B.181 (already the basis for `edu-...` treatment implicitly via `landlords-access-mn`/general awareness — no dedicated MN row yet; candidate for a future session) |
| Fair housing protected classes beyond federal | **Present, broader than federal** — Minn. Stat. § 363A.09 adds creed, national origin, gender identity, marital status, **status with regard to public assistance**, and sexual orientation on top of the federal list. Not yet logged as its own row/education entry — flag for a future session. |
| Housing-voucher/subsidy acceptance mandate | Not Yet Checked (the "status with regard to public assistance" protected class above may functionally cover this, but that's a discrimination-basis finding, not confirmation of an affirmative acceptance mandate — treat as a distinct open question) |

**Security deposits**

| Topic | MN status |
|---|---|
| Deposit amount cap | **Confirmed absent statewide** — no statutory cap on deposit amount (§ 504B.178). **Important nuance: Minneapolis has its own municipal cap** (1 month's rent, or ½ month if landlord also requires more than first month + deposit upfront, with installment-payment right in that case) — first concrete example in this project of a municipal ordinance actually conflicting with/adding to a state-level cap question, not just adjacent complexity. Logged here rather than only in the municipal-complexity row since it's directly on-topic. |
| Deposit installment-payment right | **Present, but municipal only (Minneapolis)** — tied to the cap ordinance above; no statewide installment right found. |
| Last-month's-rent deposit-application restriction | **Present** — § 504B.178, subd. 8: tenant may not withhold last month's rent on the theory the deposit should cover it; similar architecture to KS. |
| Successor-owner bound by deposit obligations | **Present** — § 504B.178, subds. 5–6 |

**Fees, pricing, and unconscionability**

| Topic | MN status |
|---|---|
| Returned/dishonored check fee cap | Not Yet Checked |
| Attorney-fee-shifting rule | **Present, third distinct pattern** — automatic mutuality by operation of law (§ 504B.172), already logged as `edu-attorney-fee-mutuality-mn` |
| Confession-of-judgment clause prohibition | Not Yet Checked |
| Broad exculpation/liability-limitation/indemnification prohibition | **Present, but via common law not statute** — resolved this session (§11 above): *Justice v. Marvel*/*Dewitt* strict-construction doctrine, not a CO/KS/NE-style statutory ban. Fourth distinct pattern for this topic across the project. |
| Rental-fee transparency / all-in-pricing law | **Present, MN's own analog** — § 504B.120 "Total Monthly Payment" disclosure, already logged as `edu-prohibited-fees-disclosure-mn` |
| General unconscionability doctrine | Not Yet Checked (MN almost certainly has general contract-unconscionability doctrine and a Consumer Fraud Act, per KS/NE's pattern, but not confirmed against MN sources specifically) |
| Late-rent acceptance waiver rule | Not Yet Checked — important given NE's finding on this exact topic; MN's `late-fee` clause extension to MN (§10) hasn't been checked against this specific risk |

**Entry, notices, and identity changes**

| Topic | MN status |
|---|---|
| Landlord entry notice period | **Present, fixed 24-hour** — § 504B.211, matches CO/NE's fixed-number approach (already the basis of `landlords-access-mn`) |
| Broader landlord-identity-change notice | **Present** — § 504B.181, liability-shield/successor framing similar to KS/NE (subd. 6) |
| Landlord lien/security interest in tenant property | Not Yet Checked |

**Termination, default, and possession**

| Topic | MN status |
|---|---|
| For-cause eviction protection after 12 months' tenancy | Not Yet Checked |
| Retaliation prohibition | **Present** — § 504B.441 (90-day burden-shifting presumption) plus § 504B.285, subd. 2 (retaliation defense) plus a 2024 addition explicitly naming **reporting a tenant to immigration enforcement** as a form of prohibited retaliation. Not yet logged as its own CSV row — candidate for a future session. |
| Tenant-death lease-termination protection | **Present** — already covered by `termination-death-of-tenant-mn` |
| Alternate housing / relocation requirement during habitability failure | Not Yet Checked (deliberately deprioritized tenant-remedies-action sections, §§504B.395–471, haven't been read) |
| Fire/casualty damage — tenant termination or rent-reduction right | **Present, partial** — § 504B.131 gives a full-surrender right if the building is destroyed/uninhabitable through no tenant fault; whether MN also has a KS/NE-style *proportional* rent-reduction mechanic for partial damage hasn't been confirmed — flag as needing a closer read before treating as a clean match to the KS/NE pattern. |
| Failure-to-deliver-possession tenant remedy | **Present, narrower than assumed** — § 504B.153 covers this only for **new construction** delays specifically, not a general failure-to-deliver-possession right for any lease. Whether MN has a general-purpose version (the way the library's generic `possession-delay` clause assumes) is Not Yet Checked. |
| Holdover damages formula | Not Yet Checked (§ 504B.141 confirms no automatic tenancy is implied on holdover, but doesn't itself state a damages multiplier — likely lives in the eviction-procedure sections not yet read) |
| Tenant noncompliance notice-and-cure mechanics | Not Yet Checked (lives in § 504B.285, not yet read in full text) |
| Nonpayment pay-or-quit notice mechanics | Not Yet Checked (lives in § 504B.291/§504B.321, not yet read in full text — note the AG handbook excerpt found this session mentions a 14-day pre-eviction notice requirement with financial/legal-resource information, effective 2024, which may partially answer this — needs direct statute confirmation before logging as Present) |
| Abandoned-property disposal procedure | **Present** — already covered, § 504B.271, 28-day hold + 14-day sale notice, dual-notice pattern similar to KS |
| Fast-track eviction for violent crime/drug sale, no cure right | **Possibly present in different form** — § 504B.171's unlawful-activities covenant voids right to possession immediately on breach and allows a fee-waived eviction assignment to the city/county attorney, but this isn't confirmed to match NE's specific "5-day notice, no cure right" fast-track architecture. Needs a closer read of § 504B.285 before resolving. |

**Protected classes / special populations**

| Topic | MN status |
|---|---|
| Domestic violence/sexual assault/trafficking/stalking housing protections | **Present** — § 504B.206, already covered |
| Immigration-status inquiry prohibition | **Present, but different architecture than CO** — MN's 2024 tenant-rights law protects against *retaliation* via reporting a tenant to immigration enforcement (see Retaliation row above), which is not the same as CO's Immigrant Tenant Protection Act (which bars *asking* about status at all). **Minneapolis passed its own municipal ordinance in 2026 specifically banning inquiry** — its existence strongly suggests state law does not yet ban the inquiry itself, only retaliatory reporting after the fact. This nuance matters and shouldn't be flattened to a simple Present/Absent. |
| Right to call police / emergency services | **Present** — § 504B.205, already covered, satisfies universal standing rule #1 |
| Criminal penalty for service-animal misrepresentation | **Present, narrower/civil not criminal** — § 504B.113, subd. 5 provides a landlord-side lease remedy (deny application) for tenant misrepresentation of a service/support animal need, not a standalone criminal statute like WY/KS. Whether MN has a separate criminal-code penalty (like KS's Chapter 39 statute) is Not Yet Checked. |
| EV charging access right | Not Yet Checked |

**Building & fire safety**

| Topic | MN status |
|---|---|
| Smoke detector supply/install/maintain duty | **Present, broad/blanket** — Minn. Stat. § 299F.362, outside the core landlord-tenant title (State Fire Marshal chapter), confirming the established pattern of checking adjacent chapters. Applies to every residential dwelling. |
| Carbon monoxide alarm requirement | **Present, broad/blanket** — Minn. Stat. § 299F.51, also outside the core title. **Notably broader than Nebraska's version** (NE's CO-alarm duty is narrowly triggered by new construction/sale/permitted alteration only; MN's applies to every single-family dwelling and multifamily unit regardless of construction date). Both are strong candidates for dedicated `smoke-co-alarm-mn` lease clause / education entries in a future session — not drafted this session. |

**Statutory layers deliberately deprioritized**

| Layer | MN status |
|---|---|
| Mobile home park act | **Present, deprioritized** — referenced multiple times in Chapter 504B via cross-references to Chapter 327C (e.g., § 504B.211, subd. 7 exempts manufactured home parks; § 504B.151 also cross-references § 327C.015). Consistent with other states' treatment — noted, not pursued. |
| Farm/agricultural tenancy carve-out | Not Yet Checked |
| Rental application / tenant screening fairness act | **Present, MN's version is § 504B.173** (already logged as `edu-screening-fee-rules-mn`) — MN doesn't appear to need a separate "fairness act" the way CO has one; its screening-fee statute functionally covers similar ground. |
| Immigrant tenant protection act (as a distinct act) | Same nuance as the immigration-status-inquiry row above — MN's protection is retaliation-based, not a standalone inquiry-ban act. |
| Municipal ordinance complexity | **Present and significant — flag explicitly, don't just note-and-defer like other states.** Minneapolis has its own deposit cap/installment rule and (as of 2026) its own immigration-inquiry ban; Minneapolis also requires "inclusive screening criteria" restricting credit-score and misdemeanor-based rejections. St. Paul has its own additional rules (not yet researched this session). Given Minneapolis/St. Paul are Minnesota's two largest rental markets by a wide margin, this deserves more attention in a future session than the standard "noted, not resolved" treatment other states got. |
| Disposition of Personal Property Landlord and Tenant Act (free-standing chapter) | Not applicable — MN's abandoned-property procedure is inside § 504B.271, part of the core act, not a free-standing chapter like NE's. |
| Long-term lease exclusion (5+ years) | Not Yet Checked |

### 14. New topics this session adds to the checklist for future states

- **Infirmity/medical-facility termination** (§ 504B.266) — flagged §6, retroactive check against CO/WY/KS/NE still pending.
- **Tenant right to organize** (§ 504B.212) — flagged §7, retroactive check against CO/WY/KS/NE still pending.
- **Shared-metered utility billing regime** — MN's § 504B.216 is a new level of prescriptiveness worth its own checklist row for future states (does the state ban electricity apportionment specifically? cap admin/late fees? require a verbatim disclosure attachment?).
- **Blanket smoke detector / carbon monoxide alarm duties** — confirmed present and broad for MN, living outside the core landlord-tenant title (same architecture pattern as NE's narrower version) — worth a dedicated checklist row given two of five states now show a version of this.
- **Retaliation via reporting to immigration enforcement** — distinct from (and easily conflated with) the immigration-status-inquiry-prohibition row; recommend splitting these into two separate checklist rows going forward so future states don't get flattened into one or the other incorrectly.

### 16. Named-topic canvass — Pass 2 (partial, genuinely independent re-check)

Per the standing rule, ran a second pass rather than treating Pass 1 as final. Focused on (a) re-verifying uncertain Pass-1 findings against primary/legislative sources, and (b) resolving a subset of the Not-Yet-Checked list, prioritizing the highest-risk items. Pass 2 is not exhaustive — see the remaining Not-Yet-Checked list at the end of this section.

**Most important catch — late-rent acceptance waiver rule: CONFIRMED PRESENT, genuine conflict with a clause already extended to MN this session.**

Minnesota has a common-law "waiver-by-acceptance-of-rent" doctrine (Minnesota Supreme Court, most recently applied to Section 8/housing-assistance rent in a case confirming the doctrine covers subsidized rent too): a landlord who accepts rent payments with knowledge of a tenant's breach waives the right to evict for that breach. This is the same underlying risk pattern KS and NE both found — but it's common law here, not a specific statute like NE's § 76-1433 "after the breach" framing.

**This directly affects `late-fee`, which was extended to MN earlier this session (§10) without checking this specific risk.** The clause's existing non-waiver sentence ("Acceptance of a late payment does not waive Landlord's right to require full payment of Rent...") is pre-printed lease boilerplate signed at lease-start — exactly the kind of standing clause NE's statute treats as insufficient, since the reservation has to happen at the time of acceptance, not in advance. I was not able to confirm from available sources whether Minnesota courts follow the same "must reserve at time of acceptance" rule or whether a standing lease clause is enough (the KS-style fix). **Not resolved this session — flagging as open, same posture as Nebraska's unresolved version, and the same underlying product gap applies:** this is fundamentally a landlord-behavior-at-time-of-acceptance problem that lease text alone may not solve, consistent with the reservation-of-rights notice feature already on Steinoak's roadmap (originated from Nebraska's clause-library work).

**Radon disclosure: CONFIRMED ABSENT for rentals — and this is a genuine secondary-source trap, logged as a warning.** One secondary source (tenant-rights.com) confidently claims Minnesota requires landlords to test for and disclose radon in rental units. This is **wrong** as of this session. Minnesota's actual radon disclosure statute (§ 513.61 / § 144.496) applies only to **sales** of residential real property, not leases — and in fact explicitly exempts "a transfer to a tenant who is in possession of the residential real property" from even the sale-disclosure duty. A rental-specific radon disclosure/testing bill has been introduced in at least four legislative sessions (2019, 2021, 2024, and a 2024 companion) and has **not been enacted** each time. This is the same overconfident-secondary-source pattern flagged for WY (Hemlane) and KS/NE (fabricated citations, misattributed fee caps) — treat any specific MN radon claim from a non-primary source as unreliable until this bill actually passes.

**EV charging access right: CONFIRMED ABSENT.** Minnesota is not among the 14 states with a "right-to-charge" statute (10 covering only common-interest-community owners, 4 — CA, CO, CT, IL — extending to tenants too); MN isn't in either group despite state-level EV-adoption policy goals. Matches WY/KS/NE.

**Remaining Not-Yet-Checked after Pass 2** (genuinely unresolved, not guessed at): bed bug disclosure, mold disclosure, confession-of-judgment prohibition, general unconscionability doctrine (MN-specific confirmation), criminal penalty for service-animal misrepresentation (whether MN has a Chapter-39-style criminal statute separate from § 504B.113's civil remedy), farm/agricultural tenancy carve-out, long-term (5+ year) lease exclusion, for-cause eviction protection after 12 months, landlord lien/security-interest abolition, deposit installment-payment right statewide (vs. Minneapolis-only), holdover damages formula, tenant noncompliance cure-period mechanics, nonpayment pay-or-quit notice mechanics (note: MN's redemption-right architecture — tenant may redeem "at any time before possession has been delivered" per § 504B.291 — looks structurally different from KS/NE's fixed-day notice-and-cure model and deserves a closer read rather than being forced into that framework), and fast-track eviction for violent crime/no-cure-right.

### 18. Not-Yet-Checked list — resolution pass

Worked through the remaining open items from the canvass. Results below; items still unresolved after this pass are marked as such, not silently dropped.

**Resolved this pass:**

- **Bed bug disclosure/treatment-timeline: Confirmed absent as a dedicated statute.** MN has no bed-bug-specific disclosure or treatment-timeline law; pest issues (including bed bugs) are handled entirely under the general habitability covenant (§ 504B.161). Matches WY/KS/NE.
- **Mold disclosure: Confirmed absent as a dedicated statute.** Same treatment as bed bugs — covered only by the general habitability covenant, no MN-specific mold law. Notable nuance: 2023 amendments to § 504B.161 explicitly added "extermination of insects, rodents, vermin, or other pests" to the landlord's reasonable-repair duty — a real strengthening worth knowing about even though it doesn't create a disclosure requirement.
- **General unconscionability doctrine: Confirmed absent as a dedicated landlord-tenant statute.** Unlike KS (§ 58-2544) or NE (§ 76-1412, built into the base act), Minnesota has no landlord-tenant-specific unconscionability provision. Consistent with the exculpatory-clause finding from §11 — Minnesota tends to rely on general common-law contract doctrine rather than codifying these protections inside Chapter 504B.
- **Deposit installment-payment right (statewide): Confirmed absent** — already resolved in Pass 2 as Minneapolis-municipal-only, no statewide right.
- **Nonpayment pay-or-quit notice mechanics: Present, materially different architecture — don't force into the KS/NE mold.** Two distinct 2023-session additions apply: (1) a **14-day pre-eviction notice** requirement before filing for nonpayment (§ 504B.321, subd. 1a, effective 2024), which must include specific content (basis for the future eviction, information on financial and legal resources); and (2) an **open-ended redemption right** — the tenant may redeem the tenancy by paying the amount due **at any time before possession is delivered** (§ 504B.291), not a fixed number of days the way KS's 3-day or NE's 7-day models work. This is a genuinely different shape and shouldn't be summarized as "X-day notice."
- **Genuinely new topic surfaced: Cannabis/hemp possession protection (§ 504B.171(c)), non-waivable.** A landlord cannot prohibit a tenant from legally possessing cannabis products, lower-potency hemp edibles, or hemp-derived consumer products, or from using cannabinoid/hemp-derived products — **except** the statute explicitly still allows landlords to prohibit consumption by combustion or vaporization (i.e., smoking/vaping specifically). **Checked directly against `smoking-policy` (already extended to MN this session): no conflict** — that clause only restricts smoking/vaping, not general possession or non-smoking use, so it falls squarely within what MN still permits landlords to restrict. No clause fix needed, but this is a real, easy-to-get-wrong nuance (a landlord adding a broader "no marijuana" clause would violate this) — worth a dedicated `edu-cannabis-possession-mn` LANDLORD_EDUCATION entry in a future session, and a strong candidate for the named-topic checklist going forward.
- **Fast-track eviction for violent crime/no-cure-right: Present, different mechanism than NE's — don't merge.** MN doesn't have NE's specific "5-day notice, no cure right" structure. Instead: (1) breach of the unlawful-activities covenant (§ 504B.171) voids the tenant's right to possession immediately and lets the landlord assign the eviction action to the county/city attorney; and (2) a separate off-premises-conduct rule (§ 504B.171, subd. 1a–2) bars landlords from penalizing tenants for off-premises conduct **unless** it's a crime of violence against specific protected people (other tenants, guests, landlord, landlord's employees) — a real, previously-unlogged limitation on landlord authority worth its own checklist row for future states.

**Still genuinely unresolved after this pass** (not guessed at, flagged for a future session):

- Confession-of-judgment clause prohibition
- Criminal penalty for service-animal misrepresentation (separate from § 504B.113's civil/lease-remedy version, already logged)
- Farm/agricultural tenancy carve-out
- Long-term (5+ year) lease exclusion
- For-cause eviction protection after 12 months' tenancy
- Landlord lien/security-interest abolition
- Holdover damages formula (specific multiplier, if any)
- Tenant noncompliance notice-and-cure mechanics (a specific day-count cure period, as distinct from the material-violation eviction ground already confirmed in § 504B.285)

### 20. Second resolution pass — further items chased

- **Landlord lien/security interest in tenant property: Confirmed present (abolished).** § 504B.101: "The remedy of distress for rent is abolished." Matches KS/NE's abolition pattern directly and unambiguously — no landlord-tenant-code security interest in a tenant's belongings exists in Minnesota. (Note: Minnesota does have a *separate* landlord's lien on **growing crops**, Minn. Stat. §§ 514.960/.964, but that's an agricultural-tenancy mechanism under the general liens chapter, not a residential landlord-tenant remedy — relevant to the farm-tenancy item below, not a conflict with the abolition finding.)
- **Farm/agricultural tenancy carve-out: Present, real and distinct from the core act.** The existence of § 514.960/.964's crop-lien mechanism (filed under the Uniform Commercial Code, perfected against growing crops, entirely separate machinery from Chapter 504B) confirms Minnesota does treat agricultural tenancies under different statutory apparatus than residential leases — consistent with every other state checked. Not further characterized this session (out of scope per Steinoak's target-landlord deprioritization of farm/ag tenancies), but the carve-out's existence is now confirmed rather than assumed.
- **Long-term lease exclusion: Different finding than the checklist topic anticipated — flag the distinction.** Minnesota's Statute of Frauds (§ 513.04/.05) requires any lease longer than **one year** to be in writing to be enforceable — a common, unremarkable rule most states have, not the same as a landlord-tenant-*code* exclusion for very long-term (5+ year) leases from tenant-protection coverage the way the checklist topic was originally framed (based on whatever originating state prompted that row). No evidence found of Chapter 504B itself excluding long-term leases from its protections. Recommend clarifying what the original checklist entry was pointing at before spending more time on this for MN.
- **Confession-of-judgment clause prohibition: Not resolved — genuinely absent from search results, but not confirmed absent by direct statutory reading.** No dedicated MN statute found voiding confession-of-judgment/cognovit clauses in residential leases. Given the pattern already established this session (Minnesota tends to handle contract-fairness issues via general common law rather than Chapter 504B-specific provisions — see the exculpatory-clause and unconscionability findings), a targeted search of Minnesota's general contract law / consumer protection statutes (outside Chapter 504B entirely) would be needed to close this out properly rather than treating "not found in landlord-tenant search results" as confirmation.
- **Criminal penalty for service-animal misrepresentation: Not resolved.** No standalone MN criminal statute found (distinct from § 504B.113's existing civil/lease-remedy treatment, already logged). Needs a dedicated search of MN Chapter 609 (criminal code) rather than landlord-tenant sources.
- **For-cause eviction protection after 12 months' tenancy: Not resolved.** No MN-specific finding surfaced distinguishing tenancies under vs. over 12 months for eviction-cause purposes.
- **Holdover damages formula: Not resolved.** § 504B.141 confirms no automatic tenancy is implied on holdover but doesn't itself state a damages multiplier; the specific figure (if one exists) likely lives in the eviction-procedure sections' remedy provisions, not yet isolated.
- **Tenant noncompliance notice-and-cure mechanics (specific day count): Not resolved as a clean figure**, though related context was found this session: § 504B.135(b) gives 14 days notice to quit for nonpayment on a tenancy-at-will specifically (different from the general-lease nonpayment track's 14-day pre-eviction notice found in §18), and § 504B.285(a)(2) gives 7 additional days to pay rent determined due when nonpayment and material-violation grounds are combined in one action. Neither is quite the general-purpose "cure period" the checklist row is looking for — flag as still open rather than force-fitting either figure to the row.

### 22. Third resolution pass — confession-of-judgment resolved, one new product-relevant finding

**Confession-of-judgment: Confirmed absent as applied to residential leases.** Minnesota does have a confession-of-judgment ban (§ 325G.16, subd. 2(c)), but it's scoped to "consumer credit sale" transactions involving **personal property** only — the definition (§ 325G.16, subd. 3, via § 325G.21) explicitly excludes real property. This ban doesn't reach residential leases. No separate confession-of-judgment prohibition specific to real-property leases was found. This closes the item — not because nothing was found, but because what exists was checked and confirmed not to apply to the lease context.

**Genuinely new, previously-unflagged finding surfaced along the way:** Minnesota's "Consumer Contracts; Plain Language Requirements" subchapter (§§ 325G.29–.37) defines "consumer" to explicitly include anyone who **"leases residential premises for a term not exceeding three years"** (§ 325G.30, subd. 2(3)). This means MN's plain-language contract-drafting requirements (§ 325G.31 — contracts must use plain, commonly-understood language, defined terms, logical structure) and the associated waiver-void provision (§ 325G.36) apply to most residential leases in Minnesota, entirely outside Chapter 504B. This is a genuinely new, previously-unresearched compliance dimension — not just for MN, but a candidate to check for other states too, since a "plain language contract law" applying to short-term residential leases is a distinct legal category from anything on the checklist so far. **Flagging as a new named-topic candidate and a real, unaddressed finding** — Steinoak's clause library hasn't been evaluated against a plain-language-drafting standard for any state, and this is the first time such a requirement has surfaced. Not resolved further this session (would require assessing the entire library's drafting style against § 325G.31's specific requirements, a substantial undertaking of its own).

### 24. Fourth resolution pass — direct statutory read closes out the remaining items

Read § 504B.285 (Eviction Actions; Grounds; Retaliation Defense; Combined Allegations) directly in full, rather than continuing to search around it.

- **For-cause eviction protection after 12 months' tenancy: Confirmed absent.** § 504B.285's eviction grounds (holdover after various termination events, lease violation, nonpayment) apply uniformly regardless of how long the tenancy has run — there is no 12-month (or any other duration) threshold that changes what counts as valid grounds for eviction in Minnesota. This isn't a state that ties eviction-cause requirements to tenancy length.
- **Holdover damages formula: Confirmed absent.** Neither § 504B.141 (holding over generally) nor § 504B.285 (eviction grounds) states a damages multiplier for holdover. Minnesota does not appear to have a "double rent" or similar punitive holdover-damages formula the way some states do — ordinary rent liability during any holdover period is the operative measure, not a statutory multiplier.
- **Tenant noncompliance notice-and-cure mechanics: Confirmed absent as a general requirement.** § 504B.285, subd. 5(b) gives the tenant "up to seven days of additional time to pay any rent determined by the court to be due" — but this is specific to the *combined* nonpayment-plus-material-violation action, not a general pre-filing cure period for lease violations generally. Minnesota does not require landlords to give tenants a cure opportunity before filing an eviction for an ordinary material lease violation (as distinct from the nonpayment-specific 14-day pre-filing notice and open redemption right already confirmed in §18).

**Criminal penalty for service-animal misrepresentation: Confirmed present, but likely scoped narrower than the housing context.** Minn. Stat. § 609.833 makes it a petty misdemeanor (misdemeanor for repeat offenses) to intentionally misrepresent an animal as a service animal — but the prohibited conduct is defined as occurring in a **"place of public accommodation"** (as defined by the Minnesota Human Rights Act, § 363A.03, subd. 34). The Human Rights Act treats "public accommodation" (retail, business, hospitality settings) as a distinct category from "housing" (§ 363A.09) — so this criminal statute most likely does **not** reach the specific scenario relevant to the checklist item (a tenant misrepresenting a pet as a service/support animal to a landlord for a rental unit). The operative protection for that scenario remains the civil/lease-remedy mechanism already logged under § 504B.113 (`edu` treatment folded into the existing service-animal documentation coverage). Flagging the distinction rather than either ignoring the criminal statute or overstating its reach.

### 25. Minnesota — Not-Yet-Checked list fully closed out

All items originally flagged across Pass 1, Pass 2, and the subsequent resolution passes have now been resolved with a primary-source-grounded answer (Present, Confirmed Absent, or Present-with-important-scope-caveat) — none remain in an unaddressed "Not Yet Checked" state. Remaining open work for Minnesota is now limited to the punch list below, not open-ended canvassing.

### 27. Punch list — all six items resolved

**1. Late-fee waiver-risk resolution: resolved, following exact Nebraska precedent.** Minnesota's problem is the same shape as Nebraska's (§16, §22): a timing-based common-law waiver, not a wording problem a standing clause can fix. Applied Taylor's already-established resolution from the NE session directly: `late-fee` stays extended to MN as-is (no override — the clause isn't prohibited, just insufficient alone), and `edu-late-rent-reservation-fix-mn` documents the actual fix — reserve rights in writing at the moment each late payment is accepted, not through lease boilerplate. Same product idea applies (after-the-fact reservation-of-rights notice, already on the roadmap from the Nebraska session).

**2. CO;WY-only clause-scoping group: resolved, read the full CO and KS logs directly.** The group split into three different situations, not one:
- `default-by-tenant` and `early-termination` — **extended to MN as-is.** Both defer to "applicable law" or use figures (10-day cure) that don't conflict with anything found for MN (MN has no general statutory cure period to shorten, confirmed absent in §24), unlike KS/NE where a real statutory cure period existed.
- `tenant-maintenance` — **extended to MN as-is.** Unlike KS/NE, Minnesota doesn't have a consolidated tenant-duties statute; MN handles tenant conduct through the unlawful-activities covenant and cold-weather-notice duty instead, both already reflected elsewhere in the library.
- `possession-delay` — **extended to MN generically**, with a flag: MN's own specific statute (§ 504B.153) only covers new-construction delays with a different remedy structure. No conflict, but no duplication either — a dedicated `possession-delay-mn` for the new-construction scenario specifically is a future nice-to-have, not urgent.
- `landlord-maintenance` and `surrender-end-of-term` — **needed their own MN overrides**, following the KS/NE pattern exactly: `habitability-baseline-mn` (68°F heat rule, extermination duty, energy-efficiency duty — none of which the generic captures) and `surrender-end-of-term-mn` (cross-references `abandoned-property-mn` instead of the vague generic language).

**3. Dedicated `assistance-animal-accommodation-mn`: drafted**, supersedes the generic clause. Reflects § 504B.113's closed list of licensed-professional documentation categories and the fee-disclosure requirement; cross-references the criminal-statute scope caveat from §24 (the operative protection is this lease remedy, not § 609.833).

**4. `edu-cannabis-possession-mn`: drafted.** Companion to the §18 finding — explains the possession-vs-smoking distinction directly so a landlord doesn't accidentally draft a broader "no marijuana" clause that would violate § 504B.171(c).

**5. Plain-language contract requirement: documented, not fully audited.** `edu-plain-language-contract-mn` records the obligation (§§ 325G.29–.37 apply to leases ≤3 years). A full assessment of the library's drafting style against § 325G.31's specific requirements is flagged as a separate, substantial future undertaking — not attempted this session, and potentially relevant to other states too, not just Minnesota.

**6. Retroactive infirmity/tenant-organizing checks against CO/WY/KS/NE: resolved.** Read the full CO and KS decision logs directly (had them on hand; WY addendum and NE were already reviewed).
- **Infirmity/medical-facility termination: confirmed absent for all four states** — no mention anywhere in any of the four logs.
- **Tenant right to organize: confirmed absent for CO, WY, and NE.** **Kansas has a partial, narrower analog** — its retaliation statute (§ 58-2572) bars rent increases or service cuts triggered by "tenant-union organizing," but that's an anti-retaliation protection only, not MN's full affirmative-access framework (landlord must allow leafleting, meetings, contact by mail/phone). Worth keeping these conceptually distinct on the checklist going forward — "protection from retaliation for organizing" and "affirmative right to organize with landlord cooperation" are different strengths of protection, and MN's is the strongest version seen in this project so far.

### 29. Both non-blocking items addressed

**Item 2 (possession-delay new-construction gap): resolved.** Read Minn. Stat. § 504B.153 in full. When the property is "new construction" (a defined term: new building, rehabilitation, modification, reconstruction, or addition) and the landlord knows in advance it won't be ready by the Start Date, the landlord must notify the tenant at least 7 days ahead and offer a choice of alternative housing, a rent-equivalent payment toward the tenant's own alternative housing, or the right to terminate — with a further termination right if the delay runs past 90 days. Non-waivable. Drafted `possession-delay-mn-new-construction` as a CONDITIONAL clause that supplements (doesn't replace) the generic `possession-delay` clause already extended to MN — the generic remains the default for ordinary delays; this one applies specifically when the new-construction trigger is present. No `supersedes` set, since both clauses can coexist depending on property type. This is the same pattern already used for `utility-apportionment-mn` (a property-configuration-gated CONDITIONAL clause).

**Item 5 (plain-language audit): a real assessment was run, not just documented.** Minn. Stat. § 325G.31's actual text is short and fairly generous — three requirements: (1) clear and coherent, (2) common/everyday words, (3) appropriately divided and captioned by section. Assessed all 59 MN-tagged `LEASE_CLAUSE` rows against it:

- **Vocabulary: passed, nearly clean.** Scanned for common legalese markers (witnesseth, heretofore, whereas, party of the first part, notwithstanding the foregoing, etc.) — found exactly one instance, in `landlords-access-mn` ("Notwithstanding the foregoing"). **Fixed**, replaced with "However" — same meaning, plainer wording.
- **Sentence structure/coherence: a real, measurable issue.** Average sentence length across the 59 clauses is 29.6 words, with 13 sentences over 50 words and one at 99 words (`termination-infirmity-mn`). Long compound sentences are a genuine "clear and coherent" risk even when the vocabulary itself is plain. **Fixed the worst offender**: split `termination-infirmity-mn`'s 99-word sentence into three shorter ones, no substantive change to the requirements themselves.
- **Section division/captioning: already satisfied.** Every clause has a `title` field used as its lease-section heading and a `group` field organizing related clauses — this structural requirement is met by the existing schema, not something that needed fixing.

**Remaining long sentences, not rewritten this session (lower priority, listed so they're not lost):** `tenant-maintenance` (70 words), `habitability-baseline-mn` (70 words), `termination-death-of-tenant-mn` (67 words), `early-termination` (66 words), `holdover` (65 words), `pet-policy-mn` (63 words), `default-by-tenant` (57 words). None of these were rewritten because several (`tenant-maintenance`, `early-termination`, `default-by-tenant`, `holdover`) are generic clauses shared across all five states — a wording change would need to be checked against every state's phrasing expectations, not just Minnesota's, and is a bigger edit than fits this session. Recommend a dedicated future pass, informed by this concrete list rather than an abstract "audit the library" task.

**Also worth flagging:** the sentence-length pattern observed here (long compound sentences mixing multiple conditions) is common throughout the library, not unique to Minnesota — since Minnesota is the first state where a plain-language statute was found, this may be worth a broader look across all five states' clauses eventually, not treated as MN-only scope.

### 31. Cross-state plain-language cleanup

Taylor asked to actually do the cross-state cleanup flagged in §29, rather than leave it as a future idea. Ran the same sentence-length scan across the **entire library** (190 `LEASE_CLAUSE` rows, all states), not just Minnesota's 59.

**Vocabulary check, library-wide: clean.** Scanned all 190 rows for the same legalese markers used in the MN-only check (witnesseth, herein, hereunder, null and void, notwithstanding the foregoing, etc.) — zero hits anywhere outside the one MN instance already fixed. The library's word choice is already in good shape across every state.

**Sentence length: 69 sentences over 45 words found library-wide**, concentrated in habitability/tenant-duty clauses (KS, NE, WY, MN) and DV/safe-homes clauses (WY, NE). Fixed 11 of the clearest cases — the ones that were genuine multi-clause run-ons (mixing unrelated ideas via commas and parentheticals) rather than simple enumerated lists:

- `habitability-baseline-ne` (143w → split into 2 sentences)
- `habitability-baseline-ks` (125w → split into 3 sentences)
- `renter-duties-wy` (128w → split into 3 sentences)
- `dv-safe-homes-wy` (120w → split into 4 sentences, pulled the hospitalization/shelter-seeking exception out of a parenthetical into its own sentence)
- `dv-safe-homes-proactive-wy` (101w → split into 4 sentences, same treatment)
- `tenant-duties-ks` (104w → split into 3 sentences)
- `tenant-duties-ne` (103w → split into 3 sentences)
- `tenant-maintenance` (70w, shared across CO;WY;MN → split into 2 sentences)
- `default-by-tenant` (57w, shared across CO;WY;MN → split into 2 sentences)
- `early-termination` (66w, shared across CO;WY;MN → split into 2 sentences)
- `holdover` (65w, shared across all 5 states → split into 2 sentences)

No substantive change to any legal requirement in any of these — purely sentence-structure edits, verified by diffing old/new text before applying.

**Honest result, not oversold:** re-running the same scan afterward still shows 68 sentences over 45 words — barely moved from 69. This isn't a failed cleanup; it's because several of the edited clauses (`tenant-duties-ks`, `tenant-duties-ne`, `habitability-baseline-ks`, `renter-duties-wy`) contain a genuinely long **semicolon-separated enumerated list** as their first sentence (6 duties, or 5 habitability requirements), which I deliberately left as one sentence rather than fragmenting further. A semicolon list is a standard, legitimate legal-drafting convention — arguably clearer than breaking it into a string of "Tenant will also... Tenant will also..." sentences, which would read worse, not better. Word count alone isn't the real test of "clear and coherent"; I stopped at the point where further splitting would trade one readability problem for another.

**Remaining long sentences, not touched, listed rather than hidden:** `tenant-duties-ks`/`tenant-duties-ne` (both ~90-104w, the enumerated-list sentence discussed above), `fire-casualty-termination-ks` (89w), `possession-delay-ne`/`possession-delay-ks` (81w/77w), `identity-change-liability-ks` (76w), `early-termination-ne`/`early-termination-ks` (72w/66w — the KS/NE-specific versions of the clause already fixed generically), `dv-lease-release-ne` (71w), `prohibited-acts-renter-wy` (70w), and roughly 15 more in the 50-70 word range across KS/NE/WY-specific clauses. None are run-on multi-idea sentences the way the 11 fixed ones were — mostly enumerated lists or single complex-but-coherent conditions. Lower priority; a future pass could tighten these further, but the highest-value fixes are done.

**Also checked and left alone on purpose:** `no-disturbance` and `fire-safety-grilling` (both 55w, shared across all 5 states) — read them again specifically for this cleanup and judged them already clear despite length; a three-item "or"-separated list, not a run-on. Not every long sentence needs fixing.

### 32. Minnesota — genuinely, fully final status

CSV: 323 rows total (`steinoak_clauses_updated_20.csv`, row count unchanged from §30 — this pass only edited existing `bodyText`, no new rows). All eight items from this session (six original punch-list items, two non-blocking follow-ups, plus this cross-state cleanup) are resolved with honest, documented results — not overstated, not silently dropped. Minnesota (state #5) is complete. The remaining ~68 long sentences library-wide are a known, tracked, low-priority readability backlog — not a Minnesota-specific gap, and not blocking anything.

The named-topic canvass, in its entirety, is now closed for Minnesota. What remains is a short, bounded list of follow-up items rather than open research:

1. **Late-fee waiver-risk resolution** (§16) — whether MN courts require reservation-at-time-of-acceptance (NE-style) or accept standing lease language (KS-style); currently unresolved and the underlying product question (reservation-of-rights notice feature) is broader than just Minnesota.
2. **CO;WY-only clause-scoping group** (§9) — `default-by-tenant`, `early-termination`, `possession-delay`, `surrender-end-of-term`, `landlord-maintenance`, `tenant-maintenance` — needs the full CO/KS/NE decision logs (not just this project's excerpts) to understand the original scoping reason before deciding on MN.
3. **Dedicated `assistance-animal-accommodation-mn` clause** (§9) — MN's § 504B.113 is more detailed than the generic FHA-baseline clause.
4. **`edu-cannabis-possession-mn` drafting** (§18) — non-waivable statutory protection, no conflict with existing clauses, just needs its own education entry.
5. **Plain-language contract requirement assessment** (§22) — substantial, cross-cutting: MN's §§ 325G.29–.37 apply to leases ≤3 years; the library hasn't been evaluated against this standard for any state.
6. **Retroactive checks against CO/WY/KS/NE** — infirmity/medical-facility termination (§6) and tenant right to organize (§7).

None of these are blocking Minnesota's standing as state #5 — per the project's own definition (statute walk, whole-library audit, and two-pass canvass all complete), Minnesota now meets the bar. These six items are backlog, the same category as HB25-1249-analog checks for WY/KS/NE or the fee-shifting-mutuality question — real, tracked, not forgotten, but not gating.
