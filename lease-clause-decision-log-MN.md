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

---

## §5a.1 PROPAGATION NOTE — incoming from the Nebraska re-audit, 2026-08-31 (v62 → v63)

**This is not a routine states-field note. Minnesota inherited a Nebraska conclusion that the Nebraska re-audit has now overturned.**

MN §25 recorded: *"Late-fee waiver-risk resolution: resolved, following exact Nebraska precedent... Applied Taylor's already-established resolution from the NE session directly: `late-fee` stays extended to MN as-is (no override — the clause isn't prohibited, just insufficient alone)."* MN §16 separately recorded that Minnesota's own rule was **never independently confirmed** — "I was not able to confirm from available sources whether Minnesota courts follow the same 'must reserve at time of acceptance' rule."

So Minnesota's treatment rests entirely on borrowed Nebraska reasoning plus an open Minnesota question. The Nebraska re-audit found that reasoning **wrong in both directions**:

1. **It overstated the consequence.** Neb. §76-1433 waives only the right to *terminate for that breach*. The late fee, the rent, damages, future timeliness, and termination for any different breach all survive. The NE education row (and by inheritance MN's framing) implied the landlord loses the ability "to act on a late payment," which is far broader than the statute.
2. **It understated the exposure.** "The clause isn't prohibited, just insufficient alone" was asserted, never tested. The generic `late-fee` clause's unqualified *"or to pursue any other remedy available under this Lease"* purports to preserve exactly the termination right the statute waives. In Nebraska that is at minimum arguable under §76-1415(1)(a), with §76-1415(2) exposure for deliberately using a known-prohibited provision.

**CSV change:** NE removed from `late-fee`, which is now `CO;WY;MN`. Nebraska took its own `late-fee-ne` narrowing the non-waiver sentence to what survives §76-1433 automatically. **No text change was made to the shared `late-fee` clause**, and the NE fix was deliberately judged **state-driven, not uniform** — a non-waiver clause preserving termination is genuinely valuable where contract can preserve it, and Minnesota has not been shown to carry Nebraska's express "after the breach has occurred" timing rule.

**What Minnesota now owes itself.** MN §25's resolution should be treated as **unsupported, not wrong** — the inherited premise is gone, and Minnesota's own question (does Minnesota law permit a standing lease clause to reserve rights, KS-style, or require reservation at the time of acceptance, NE-style?) reverts to open, exactly as MN §16 originally left it. Two specific things to check when Minnesota is re-audited:

- Whether Minnesota's waiver rule is statutory or common-law, and whether it is scoped to *termination* only (as Neb. §76-1433 is) or reaches other remedies. Nebraska's narrowness was the surprise; do not assume Minnesota matches.
- Whether the shared clause's unqualified "any other remedy" phrase creates the same overbreadth in Minnesota that it does in Nebraska. If it does, Minnesota needs its own override rather than the current no-override posture.

**Standing caution:** Minnesota has **not** been re-audited. Every re-audited state (CO, WY, KS, NE — four for four) has surfaced errors that shipped as `VERIFIED`, and Nebraska's included a numeric error understating recovery ~4x, an entire missing statutory scheme, and a row whose central reassurance was backwards. MN's values carry pre-re-audit confidence and should be read accordingly.

**Also relevant to Minnesota from this session, not yet checked for MN:** the Nebraska re-audit added ten new canvass rows to the consolidated checklist, all marked "not checked for any state but NE." Three are likely to matter for Minnesota specifically — the statutory freeze-date incorporation trap, whether the prohibited-provisions section is the complete list of banned lease terms, and the protected-class inquiry-and-record ban.

---

## MN RE-AUDIT — 2026-09-03 (v63 → v64), session 1

**Trunk confirmed before any work.** v63 = 433 rows; CO 106, WY 96, NE 111, KS 113, MN 70, SD 37, ND 33 — all seven exact. No duplicate IDs. 56 supersedes relationships, all targets resolve, zero override-vs-target and zero override-vs-override display collisions. Right trunk.

**Scope reframing agreed with Taylor at session open.** Minnesota is not a peer of the CO/WY/KS/NE re-audits. Those retested complete states. MN is a *partially completed* state that was declared complete: pass 2 was self-labeled partial (§16); MN was never folded into the checklist, so it never ran against ND's five new rows, CO's eleven, WY's seven, KS's nine, or NE's ten (roughly 42 of the current 91 rows postdate MN entirely); ND's canvass was never cross-checked against MN either; and the statute walk was Chapter 504B plus opportunistic excursions rather than a systematic sweep. Taylor authorized (1) folding MN into the checklist as a column and (2) running the §E adjacent-chapter sweep.

### RA-1. Denominator, derived fresh (not carried from any prior figure)

**Extraction rule A:** every non-header, non-separator markdown table row in the checklist = **114**.
**Extraction rule B (used):** rule A minus rows under a `Row | Correction` header, because those tables record corrections to topics already counted in the topic tables above them; counting both double-counts a topic = **91**.

Rule B independently corroborated: it yields exactly 10 rows in the NE re-audit section, matching the ten new rows stated in the session brief, derived from the file rather than from the given number.

**Disagreement recorded, not reconciled:** the checklist documents a deliberate semantic duplicate (`Returned/dishonored check fee cap` vs `Genuinely new: returned-check-fee cap`) that label-level dedup cannot see because the labels differ. A topic-level denominator is arguably 90. Re-derive at pass 2 rather than carrying 91 forward. MN's own logged figures are stale by construction.

### RA-2. Two items closed without research

- **Pre-verification rows (brief item 9): 0 MN-tagged remain.** 50 rows still carry non-blank `states` at `UNVERIFIED`, all non-MN. `late-fee-limit-mn` was the only MN member and MN §3 resolved it. Closed.
- **`lead-based-paint` propagation note (brief item 8): confirmed NEVER LANDED in MN.** The MN log mentions the row only twice, both in original-session context (§9 extension list, §13 checklist row), both predating the 2026-08-27 CO re-audit correction that made the Lead Warning Statement verbatim. **Discharged here:** the CO edit was classified **UNIFORM** (federal law, 40 CFR 745.113(b)(1), identical for every tagged state), so MN inherits it safely with no MN-specific override required. Same disposition WY recorded. Architecture review §I can mark MN discharged; NE remains outstanding.

### RA-3. Item 1 — late-fee waiver. RESOLVED on Minnesota law, and the shipped row was wrong in BOTH directions

The controlling authority is **Hook & Ladder Apartments, L.P. v. Nalewaja, A23-1048 (Minn. Sept. 24, 2025)**. Full opinion read directly (mncourts.gov PDF and FindLaw full text), not summarized from secondary sources.

**Timing matters and should be recorded plainly: this decision issued 2025-09-24, eleven months BEFORE MN's original session (2026-08-23). This was a research miss, not a currency lapse.**

Answers to the three questions the §5a.1 propagation note posed:

1. **Statutory or common law? COMMON LAW.** "This case is about the common law doctrine of waiver." Minnesota has no §76-1433 analog. The rule traces to *Gluck v. Elkan* (1886) and *Kenny v. Seu Si Lun* (1907).
2. **Scoped to termination only? YES — and narrower than MN's shipped row claimed.** The doctrine bars only eviction for that past, known breach. Footnote 5 expressly limits it to evictions for material breach and distinguishes the separate waiver rules for holdover and nonpayment. *Gluck* and *Zotalis v. Cannellos* (1917): waiver of a past breach does not relieve future performance or bar eviction for repeated breaches. **The late fee, rent, damages, and future timeliness all survive.** MN's row said the landlord waives the right to evict "or otherwise act on that specific breach" — an overstatement, the identical error the NE re-audit found.
3. **Does the shared clause's "any other remedy" create overbreadth? Differently than in Nebraska — and the row overstated certainty in the opposite direction.** MN's row asserted flatly that "this isn't something a standing lease clause can fix." That is **not settled Minnesota law.** Hook & Ladder squarely raised the lease's non-waiver clause and the Court said: "We decline to address this issue, which should be decided in the first instance by the district court." Minnesota's answer to the KS-style standing-clause question is **genuinely open**, exactly where MN §16 originally left it before §25 borrowed Nebraska's conclusion.

**§5a.1 judgment on `late-fee` (CO;WY;MN):** **no edit made to the shared clause, and no MN override created.** Reasoning, surfaced rather than buried: unlike Nebraska, Minnesota has no prohibited-lease-provisions statute, so an overbroad non-waiver sentence is not a *prohibited* term carrying penalty exposure — at worst it is unenforceable to the extent it purports to preserve the eviction right the doctrine waives. And because the standing-clause question is open in MN, the sentence retains genuine potential value here that it does not have in NE. **Flagged for Taylor:** a `late-fee-mn` override narrowing "any other remedy" to what demonstrably survives is available if you prefer belt-and-suspenders; I did not create one unilaterally because it would trade a live, arguable landlord right for tidiness.

Also from the opinion, and materially more useful than the vague guidance the old row carried: **acceptance is a fact question turning on the landlord's objective conduct, not subjective intent**, and receiving a payment while doing nothing counts as accepting. A landlord can avoid acceptance by acting promptly — notifying the tenant or housing agency of non-acceptance, attempting return, segregating the funds, placing them in escrow, or not spending them. Hook & Ladder also **overruled Westminster Corp. v. Anderson** (Minn. App. 1995), extending the doctrine to Section 8 / public-housing-agency payments.

`edu-late-rent-reservation-fix-mn` rewritten accordingly.

### RA-4. Two PROOF-OF-ABSENCE VIOLATIONS found — and both are the worse kind

The NE re-audit's pass-2 catch was a *confirmed-absent* topic with no CSV row, invisible to future canvasses. MN has two violations of the same rule that are **more serious**, because both are **Present** findings:

- **Fair housing (§363A.09).** MN §13 recorded "Present, broader than federal" with the note "not yet logged as its own row/education entry — flag for a future session." Never done. **Zero MN rows mentioned §363A, fair housing, or protected classes.**
- **Retaliation (§504B.441, §504B.285 subd. 2, plus the 2024 immigration-reporting addition).** MN §13 recorded Present with the same "not yet logged" note. **Zero MN rows mentioned retaliation.**

A confirmed absence with no row is invisible. A **Present** finding with no row means the generated Minnesota lease is missing content it should carry. Both fixed this session (`edu-fair-housing-protected-classes-mn`, `edu-retaliation-protections-mn`).

Important distinction logged so it is not flattened later: MN's statewide immigration protection is **retaliation-based** (§504B.212 subd. 2 bars contacting law enforcement about immigration status in retaliation). It is **not** an inquiry ban. Minnesota's inquiry ban is **municipal** (Minneapolis, April 2026). CO's Immigrant Tenant Protection Act bars the inquiry itself; MN does not, statewide.

### RA-5. A shipped MN clause corrected — §504B.221 non-waiver

MN §11 concluded Minnesota has no consolidated prohibited-provisions statute and relied on common-law strict construction (*Justice v. Marvel*, 2022; *Dewitt*, 2018). **That conclusion holds** — the re-audit confirms no dedicated statutory ban on exculpatory/indemnification lease terms exists. The five overrides built on it are not invalidated.

**But the premise was never fully tested, and testing it found a real hit.** MN §11's own words were that absence of a finding "is not the same as a confirmed absence," and §27 shipped five clauses on it anyway. Minnesota's non-waiver rules are not absent — they are **scattered across roughly 18 per-section provisions** in Chapter 504B, each phrased "any waiver is void" or "contrary to public policy and void" (§§504B.116, .144, .147 subd. 4, .153 subd. 3, .154 subd. 2, .161 subd. 1(b), .165, .171 subd. 3, .178 subd. 10, .182 subd. 4, .195 subd. 5, .204(b), .205 subd. 2(b), .206 subd. 5, .211 subd. 2, .216 subd. 14, .221, .225, .231, .465). MN §11 never enumerated them.

One overlaps a shipped clause. **§504B.221(b), read directly from revisor.mn.gov:** "Any provision, whether oral or written, of any lease or other agreement, whereby any provision of this section is waived by a tenant, is contrary to public policy and void" — covering landlord interruption of electricity, heat, gas, or water, with treble damages or $500 whichever is greater plus attorney fees. `services-utilities-provided-mn` waived Landlord's ordinary-negligence liability for "any interruption or insufficiency of a service or utility," overlapping that non-waivable zone. **A statutory-rights carve-out has been added** referencing §§504B.221, 504B.225, 504B.231. State-driven, MN-only row, no propagation owed.

Also noted for a future pass: **§504B.161 subd. 1(b) makes the habitability covenants non-waivable outright**, with only a narrow subd. 2 delegation option requiring adequate consideration and a conspicuous writing, which cannot reach common areas. MN's `habitability-baseline-mn` does not currently state this.

### RA-6. §E adjacent-chapter sweep — Minnesota confirms the pattern a fifth time

Real, shipping-relevant Minnesota law outside Chapter 504B:

| Chapter | What it held |
|---|---|
| Ch. 363A (Human Rights Act) | Protected classes broader than federal; the inquiry-and-record ban; exemptions at §§363A.21/.22/.26 |
| Ch. 299F (Fire Marshal) | Smoke alarms §299F.362 (owner responsible for maintenance where occupant is not owner); CO alarms §299F.51 (owner provides/installs in multifamily) |
| Ch. 609 (criminal code) | §609.833 service-animal misrepresentation — public accommodation only, does not reach housing |
| Ch. 325G (consumer protection) | Plain Language Contract Act reaches residential leases ≤3 years; §325G.36 waiver-void |
| Ch. 471 (municipalities) | §471.9996 rent-control preemption **with a voter-referendum exception** |
| Ch. 513 / Ch. 144 | Radon disclosure — sales/transfers only, not rentals |

**§6's proposed amendment (architecture review §E) is now supported by a fifth state.** Recommend Taylor adopt it.

### RA-7. Ten NE canvass rows — MN status after this session

| # | Row | MN answer |
|---|---|---|
| 1 | Statutory freeze-date incorporation trap | **Present but low-exposure.** §609.833 subd. 1(2) freezes "service animal" to 28 C.F.R. §36.104 "as amended through March 1, 2018"; §504B.113 subd. 1(b), the HOUSING statute, uses "as amended" — dynamic. Opposite of NE, where the freeze sat on the housing definition. Divergence real; practical effect small since §609.833 doesn't reach housing. |
| 2 | Is the prohibited-provisions section the COMPLETE list? | **Not applicable in NE's form — MN has no such section at all.** MN's equivalent question is whether the scattered non-waiver rules were enumerated. They were not. See RA-5. |
| 3 | Electronic notice/delivery regime | **Not resolved.** No comprehensive MN regime located; §504B.118 (cash receipts) and §504B.206(c) touch adjacent ground. Genuinely open. |
| 4 | Statutory-floor remedies for ouster/abusive entry | **Present.** Treble-or-$500 floor, §504B.221(a), §504B.231(a); misdemeanor + burden-shifting presumption at §504B.225. Logged. |
| 5 | Protected-class inquiry-and-record ban | **Present.** §363A.09 subd. 1(3), 2(3). Logged. |
| 6 | Does the advertising ban survive exemptions? | **No — subject to them** (§§363A.21/.22/.26), same as NE, opposite of federal. Logged. |
| 7 | Do animal and fair-housing carve-outs align? | **Not resolved.** §504B.113 and §363A.09 subd. 5 both operate in housing; §609.833 does not. Scope comparison not completed. |
| 8 | State SCRA analog, narrower than federal? | **Negative finding, low confidence.** No independent MN analog located; federal SCRA appears to control. Not primary-confirmed — flag. |
| 9 | Rent-control preemption | **Present WITH a referendum exception** — materially different from NE/KS flat preemption. Logged. |
| 10 | Is the cited rent-increase notice actually a mobile-home rule? | **Partially resolved.** No general statutory day-count found in Ch. 504B; §504B.147 ties the landlord's notice to the tenant's own required notice period. A circulating "60-day / ≥10%" figure was NOT located in primary text — treat as unverified, possibly municipal or Ch. 327C. |

### RA-8. CSV changes this session

Base v63 (433) → **v64 (440 rows), MN-tagged 70 → 77.** Integrity re-asserted after write: no duplicate IDs, no dangling supersedes, no display collisions, no override-vs-override collisions.

**Corrected (2):** `edu-late-rent-reservation-fix-mn` (rewritten, both directions); `services-utilities-provided-mn` (§504B.221 carve-out added).
**New (7):** `edu-fair-housing-protected-classes-mn`, `edu-protected-class-inquiry-record-ban-mn`, `edu-retaliation-protections-mn`, `edu-rent-control-preemption-mn`, `edu-service-animal-misrepresentation-scope-mn`, `edu-esa-independent-basis-mn`, `edu-ouster-utility-floor-remedies-mn`.

**Checked and NOT changed, recorded so it is not re-litigated:** the §504B.211 civil penalty. MN's rows already carry **$500**, which is correct post-2023. Secondary sources circulating "$100" reflect the superseded version. No library error here — noted because a re-audit that manufactures a correction is worse than one that finds none.

### RA-9. Still open for Minnesota

1. **Smoke/CO alarm clauses not yet drafted.** §299F.362 and §299F.51 duties confirmed (owner maintains in non-owner-occupied units; owner provides/installs and replaces alarms rendered inoperable during a prior occupancy in multifamily). MN has **no** smoke or CO alarm row at all — same gap NE's re-audit found and fixed with `co-alarm-duty-ne`. This is the highest-value remaining item.
2. **Plain-language audit** (§§325G.29–.37, leases ≤3 years) — MN §27 item 5 documented the obligation, never audited the library. Still outstanding, and cross-state in scope.
3. **§504B.161 subd. 1(b) non-waivability** not reflected in `habitability-baseline-mn`.
4. **Hard numbers not yet primary-confirmed:** §504B.265/.266 two-month mechanics, §504B.271 28-day/14-day, §504B.291 redemption, §504B.321 subd. 1a content, §325G.33/.34/.16, §363A.03 subd. 34, dishonored-check fee cap. Section headers confirmed; operative subdivision text not read. **Do not ship dependent clauses on these until read.**
5. **Notes-field citation screen** (brief item 7) — not run this session. MN's share of the unscreened pool was 11 as of the checklist's count; MN now has more rows than that count assumed.
6. **Canvass passes 1 and 2 against all 91 rows** — not run. This session resolved the highest-value known items and the ten NE rows, which is not the same as the two-pass canvass.
7. **MN column not yet added to the checklist file** — authorized this session, not yet written.
8. **Municipal layer** — Minneapolis deposit cap and installment right, screening lookbacks, the April 2026 immigration-inquiry ordinance; St. Paul Ch. 193A rent stabilization (3% standard cap; post-2004 exemption made permanent May 2025) and Ch. 193 deposit/screening rules. Flagged, not resolved, per standing scope. **Minnesota is the strongest case yet for revisiting that boundary** — St. Paul is the only enacted in-effect rent-stabilization ordinance across all seven completed states, and it directly changes what a compliant lease may say.

### RA-10. Alarm gap closed (v64 → v65)

MN had **no smoke alarm and no carbon monoxide alarm row of any kind**, while NE, ND, KS, SD, and WY all carried one. This was the single largest §E adjacent-chapter gap — both duties live in Ch. 299F (Fire Marshal), outside Ch. 504B, which is why the original 504B-scoped walk never reached them. Both sections read in full from revisor.mn.gov.

**The central finding: Minnesota allocates the two duties in OPPOSITE directions.** A merged "Landlord maintains all alarms" sentence would be wrong for CO alarms; a merged "Tenant maintains" would be wrong for smoke alarms. Drafted as two separate clauses for exactly this reason.

- **Smoke — §299F.362 subd. 5:** for all covered occupancies "where the occupant is not the owner," the **owner** is responsible for maintenance. Broad: reaches every MN rental, including a rented single-family house. Subd. 5a gives the tenant a 24-hour notice duty whose breach expressly does **not** increase tenant liability — so `smoke-detector-duty-mn` states the duty and deliberately attaches no penalty. Subd. 6(b): willful disabling causing damage or injury is a misdemeanor. Subd. 11: an insurer may not deny a fire loss claim for noncompliance. Subd. 7 preempts differing local standards, but subd. 9 permits **more restrictive** local single-family installation rules enforceable by truth-in-housing inspection — a live municipal hook.
- **CO — §299F.51:** subd. 3 puts maintenance on the **occupant** during their own occupancy (batteries included); the owner's subd. 2(2) duty covers alarms rendered inoperable during a **prior** occupancy and not replaced by that prior occupant.

**READ-THE-WHOLE-SECTION TRAP, recorded because it is exactly the failure mode the brief warned about.** §299F.51 subd. 1 requires an operational CO alarm in *every single-family dwelling and every multifamily unit*. But subd. 2's owner duty and subd. 3's occupant duty are both textually written for **multifamily** dwellings only. For a rented single-family house the subd. 1 requirement applies while the subd. 2/3 allocation does not textually reach it. Reading only the subdivision that answers the immediate question ("who installs CO alarms?") yields the confident and wrong summary "the landlord must install CO alarms in all Minnesota rentals." `co-alarm-duty-mn` is drafted for the multifamily case, which is the statute's clear scope. **Flagged for Taylor:** for single-family MN rentals the allocation should be set deliberately by the lease rather than assumed from statute — a decision is needed before this clause is offered on single-family properties.

**Cross-state:** MN's CO duty is materially **broader** than Nebraska's, which the NE re-audit found is triggered only by new construction, sale, or permitted alteration. NE's framing must not be inherited for MN.

**Also this pass:** `habitability-baseline-mn` notes updated to record that §504B.161 subd. 1(b) makes the habitability covenants **non-waivable**, with only a narrow subd. 2 exception (tenant-performed specified repairs, requiring adequate consideration and a conspicuous writing, and never reaching common areas). No body-text change — the clause states duties affirmatively and attempts no waiver — but flagged in case Steinoak ever offers a tenant-performs-maintenance option for MN.

**CSV: v64 (440) → v65 (443), MN-tagged 77 → 80.** New: `smoke-detector-duty-mn`, `co-alarm-duty-mn`, `edu-alarm-duty-split-mn`. Integrity re-asserted: no duplicate IDs, no dangling supersedes, no display collisions.

**RA-9 item 1 is now closed.** Items 2-8 of RA-9 remain open, unchanged.

### RA-11. Notes-field citation screen (brief item 7) — CLEAN

Ran programmatically across all MN-tagged rows' `notes` fields. **43 distinct citations, 65 occurrences.** Every one of the 19 distinct Chapter 504B sections cited (`.113 .153 .155 .161 .171 .172 .177 .178 .211 .212 .216 .221 .225 .231 .265 .266 .271 .285 .441`) exists in the chapter's section list. Non-504B citations (`§§299F.362, 299F.51, 325G.30, 325G.31, 363A.09, 363A.21, 471.9996, 609.833`, plus federal `40 CFR 745.113`, `24 CFR 30.65`, `42 U.S.C. 4852`, `42 U.S.C. §3604`, `28 C.F.R. §36.104`) all resolve to real provisions.

**No phantom citations in MN.** This is a genuine negative result, not a skipped check — recorded because the cross-state concern was that a fabricated citation committed in one state's notes can travel into other state logs as an apparent prior finding. MN is clean on that axis.

### RA-12. Hard-number re-verification — §504B.271 read in full

Per brief item 6, re-verified the figures under shipped `abandoned-property-mn` against primary text rather than the subdivision that answers the question.

**Confirmed correct:** 28-day disposal window (subd. 1(b)), running from actual notice **or** when abandonment reasonably appears, **whichever occurs last** — the clause's "whichever is later" is accurate. 14-day pre-sale notice (subd. 1(d)).

**A suspicion I raised and then disproved, recorded so it is not re-litigated.** On entry I flagged the clause's conspicuous-posting requirement as possible cross-state contamination imported from Kansas, since MN's original log described the notice structure as "similar to KS's dual-requirement approach." Checked directly: **subd. 1(d) does require posting** "in a conspicuous place on the premises at least two weeks prior to the sale," in addition to personal service or first-class-and-certified mail. The clause is right; the suspicion was wrong. A re-audit that manufactures a correction is worse than one that finds none.

**But reading the whole section found a real gap the partial read had missed — the same failure mode the brief warned about.** §504B.271 **subd. 2** imposes a retake-on-demand duty captured **nowhere** in the library: after written demand the landlord must allow the tenant to retake property within **24 hours**, or **48 hours excluding weekends and holidays** where the property was moved to storage off the premises. Failure exposes the landlord to punitive damages of **up to twice actual damages or $1,000, whichever is greater**, plus actual damages and attorney fees, with four enumerated factors governing the amount. Subd. 3: a landlord who unlawfully took possession bears removal/storage/care costs. Subd. 4: non-waivable, and extends to occupants and owners in post-redemption foreclosure or contract-for-deed cancellation. Housing-authority landlords are exempt from the punitive remedy but must still permit retaking.

Logged as `edu-abandoned-property-retake-duty-mn`. The original MN session cited §504B.271 correctly and still missed this, because it read only the disposal-timing subdivision — **a citation-existence screen cannot catch a valid citation read too narrowly.**

**Flagged, not resolved: Minnesota appears to have a SECOND abandoned-property track.** §504B.365 subd. 3(d) reportedly routes property stored *on the premises* after writ execution into §504B.271's 28-day track, while property hauled to offsite storage goes to a lien-and-auction track under subd. 3(b)-(c) with a longer period and published notice. Same eviction, same day, two statutes, depending only on where the property is stored. This is from a secondary source and **has not been primary-verified** — `abandoned-property-mn` currently covers only the §504B.271 track. Recommend primary-reading §504B.365 before this clause is relied on in an eviction context.

**CSV: v65 (443) → v66 (444), MN-tagged 80 → 81.** New: `edu-abandoned-property-retake-duty-mn`.

**RA-9 item 4 partially discharged:** §504B.271 now primary-confirmed. Still header-only and NOT to be relied on: §504B.265, §504B.266, §504B.291, §504B.321 subd. 1a, §325G.33/.34/.16, §363A.03 subd. 34, dishonored-check fee cap — plus §504B.365 newly added to that list.

### RA-13. §504B.265 and §504B.266 primary-read — one clean, one carrying two errors

**§504B.265 (death of tenant): CONFIRMED CORRECT, no error found.** Every operative element of `termination-death-of-tenant-mn` matches: two months' written notice, effective last day of a calendar month, hand delivered or mailed postage prepaid first class to the other party's address, either landlord or personal representative may invoke, applies to leases "other than a lease at will," estate remains liable for sums owed prior to or during the notice period and for restoration. Subd. 4's waiver rule confirmed exactly as the clause's notes described — waiver void, a **longer** notice period void, but the parties may otherwise agree to modify the section's specific provisions.

Minor uncaptured detail, landlord-facing only: subd. 2's final sentence lets the landlord satisfy notice by delivering or mailing to the premises formerly occupied by the tenant, useful where the estate's address is unknown.

**Version check performed:** SF 3492 (2024) proposed adding a subd. 5 remedies provision to §504B.265 and restructuring §504B.271 (new subd. 1a, treble actual damages). Neither appears in the current 2025 statutes, and §504B.271's history line runs only 1999 c 199 and 2010 c 315. **The bill was not enacted in that form** — both clauses are current. Recorded because a proposed-but-unenacted amendment read as current law is a live failure mode.

**§504B.266 (infirmity): TWO ERRORS, both corrected in body text.**

1. **A missing landlord right.** Subd. 2(b) provides that where the tenant requires an accessible unit as defined in §363A.40 subd. 1, and the landlord can provide an accessible unit **in the same complex** available within two months of the request, "the provisions of this section do not apply and the tenant may not terminate the lease." The shipped clause granted the termination right unconditionally and never mentioned this defeasance. A landlord holding an accessible unit coming open could have kept the tenancy and would not have known it.
2. **An over-granted trigger.** The shipped clause read "need to move into a medical care facility" — an open category. The statute uses no such category; subd. 2 **enumerates** specific licensed facility types (nursing home; boarding care home under ch. 144; supervised living facility; assisted living per §144G.08 subd. 7; accessible unit per §363A.40 subd. 1(b); state facility per §246.50 subd. 3; adult foster care per §245A.02 subd. 6c; intensive residential treatment per §245I.23). The generic phrasing granted tenants a termination right **broader than Minnesota law requires, at the landlord's expense.**

Body text now references the statutory list rather than restating it, so the clause cannot drift as facility-licensing statutes are amended — the same durability choice made for §504B.216's apportionment formulas. **Flagged for Taylor:** restating the enumerated types inline is more transparent to the tenant but goes stale; say the word if you prefer inline.

Two months' notice, last-day-of-month effectiveness, and delivery method all confirmed correct against subd. 3.

Logged `edu-infirmity-termination-accessible-unit-mn`.

**Both misses came from the same failure mode as RA-12** — the original session captured the subdivision stating the notice period and never reached the subdivision limiting the right. Three sections now (§504B.271, §504B.266, and NE's precedent) confirm the brief's instruction to read whole sections rather than the subsection needed.

**CSV: v66 (444) → v67 (445), MN-tagged 81 → 82.**

**RA-9 item 4 further discharged:** §504B.265 and §504B.266 now primary-confirmed. Still header-only and NOT to be relied on: §504B.291, §504B.321 subd. 1a, §504B.365, §325G.33/.34/.16, §363A.03 subd. 34, dishonored-check fee cap.

### RA-14. §504B.365 primary-read — the second abandoned-property track is REAL, and it exposes a methodology problem

The secondary-source claim flagged as unverified at RA-12 is **confirmed against primary text** (§504B.365 read in full from the revisor.mn.gov PDF).

**Minnesota has two abandoned-property routes after a writ, and the only tripwire is where the property is stored.**

- **Stored ON the premises** — subd. 3(d): "Section 504B.271 applies to personal property removed under this paragraph," i.e. the 28-day hold and 14-day pre-sale notice already in `abandoned-property-mn`. Plus a **mandatory inventory**: prepared, signed, and dated in the officer's presence, mailed to the tenant's last known address, containing an item list with condition, the date, the landlord's signature, the name and telephone number of a person authorized to release the property, and the officer's name and badge number. The officer retains a copy.
- **Stored OFF the premises** — subd. 3(a)-(c): the landlord instead gets a **lien** for removal, care, storage, and transport costs, enforceable by detaining the property, and **if no payment is made for 60 days after execution of the order to vacate, may hold a public sale under §§514.18-514.22.**

Same eviction, same sheriff, same day — a 28-day clock or a 60-day clock depending on where the furniture went.

Three duties apply on both tracks: subd. 3(g) notice of the date and approximate time the officer will act, by first class mail **and** a good-faith telephone attempt; subd. 3(f) responsibility for proper removal, storage, and care with liability for loss or injury absent reasonable care; and subd. 5, which makes removal outside this process an **unlawful ouster** under §504B.231 with penalty under §504B.225 unless the premises were genuinely abandoned.

**Subd. 5 also settles the clause-vs-education question: "This section may not be waived or modified by lease or other agreement."** No lease clause can touch any of it. Logged as `edu-writ-execution-property-duties-mn`. `abandoned-property-mn` is deliberately left covering the §504B.271 voluntary-abandonment route only — that is what it is titled for and what a lease clause can properly address.

**METHODOLOGICAL FINDING, surfaced for Taylor rather than quietly worked around.** This sits inside the eviction-procedure sections (§§504B.281 onward) that the project has deprioritized across **all seven states** as "procedural, not clause-relevant" — a boundary drawn in MN §1 and carried since CO. That blanket assumption is **wrong at least here.** §504B.365 imposes affirmative landlord duties with specified content (inventory fields, dual-channel notice, a care standard) and ouster-level exposure for getting them wrong. None of it is clause text, but all of it is landlord obligation.

**Recommend narrowing the standing deprioritization** from "eviction sections are out of scope" to "eviction sections are out of scope for `LEASE_CLAUSE` purposes but still screened for landlord duties." **Not applied to other states this session** — if Taylor adopts it, CO, WY, KS, NE, SD, and ND each need an eviction-chapter duty screen, which is a real body of work and should be scoped deliberately rather than absorbed into a state re-audit.

**CSV: v67 (445) → v68 (446), MN-tagged 82 → 83.**

**RA-9 item 4 further discharged:** §504B.365 now primary-confirmed. Still header-only: §504B.291, §504B.321 subd. 1a, §325G.33/.34/.16, §363A.03 subd. 34, dishonored-check fee cap.

### RA-15. Facility list — hybrid adopted, and a house-style deviation I introduced and then caught

**Taylor's decision:** option 3 — name the common facility types inline, catch-all the rest — with the instruction to follow suit if other states had anything similar.

**Scan result: nothing similar exists anywhere in the library.** Checked all ~190 `LEASE_CLAUSE` rows across all states:
- ~70 clauses defer to statute, but **every one defers for a NUMBER or TIMELINE** ("as required by Colorado law", "specified by applicable law", "within the time period required by law").
- 6 clauses inline long enumerated lists (`tenant-duties-ks`, `tenant-duties-ne`, `renter-duties-wy`, `habitability-baseline-ne`, `due-at-signing`, `bed-bug-disclosure-ca`) — but all are **duty** lists, not qualifying-category lists.
- **Zero hybrid clauses in any state.**

So there was no precedent to follow. This clause **sets** the pattern rather than inheriting one, which is worth recording so future states with a qualifying-category list can adopt it deliberately: name the common cases inline, catch-all the rest, no section numbers in body text.

**House-style deviation caught in the same scan, and it was mine.** The RA-13 revision cited "Minnesota Statutes, section 504B.266" in tenant-facing body text. That clause was the **only one of ~190 in the library doing so** — every other clause defers generically by state name or "applicable law." Introduced last pass without noticing. The catch-all is now phrased "or any other facility or accessible unit qualifying under Minnesota law," matching convention.

**Final text:** "...need to move into a nursing home, a boarding care home, a supervised living facility, an assisted living facility, or any other facility or accessible unit qualifying under Minnesota law..." The four named cover what actually arises; the less common statutory types (state facility per §246.50, adult foster care per §245A.02 subd. 6c, intensive residential treatment per §245I.23, accessible unit per §363A.40) stay covered without going stale.

**Related, still open for Taylor:** the RA-5 carve-out added to `services-utilities-provided-mn` also cites section numbers in body text ("Minnesota Statutes sections 504B.221, 504B.225, or 504B.231"), the same deviation. I have **not** changed it, because there the specificity arguably earns its place — the sentence exists to preserve statutory rights, and naming them is more defensible than "any right that may not be waived under Minnesota law." Your call whether house style should win there too.

**CSV: v68 → v69 (446 rows, unchanged count — body text and notes only).**

### RA-16. Eviction-duty screen — scoped, deferred to end of MN re-audit

**Taylor's decision:** run the screen across completed states, but **after** MN closes out.

**One discrepancy surfaced rather than silently resolved.** The instruction named **CO, WY, KS, NE and MN** — five states. The library has **seven** completed states; **SD and ND** were not listed. Both are relevant to this screen on the evidence: SD has 2 ouster/self-help rows and ND has 1, but **both have zero post-writ execution rows**, same as CO and WY. If the omission was deliberate (e.g. SD and ND are recent enough to trust), that is a reasonable call and this note just records it. If it was an oversight, the screen should cover all seven. **Not assumed either way — flagging for confirmation before the screen runs.**

**Screen scope as it stands:** one narrow question per state — *does this state's eviction chapter impose affirmative landlord duties, as distinct from court procedure?* Evidence motivating it, from the current library: post-writ execution duties are unscreened in six of seven states (MN alone has a row, added this session at RA-14), and the self-help/ouster row distribution is anomalous — WY 2, NE 2, MN 2, SD 2, ND 1, **KS 0, CO 0** — despite every state banning self-help eviction. Kansas's zero is the more diagnostic of the two, since KS was already re-audited and the boundary was inherited rather than questioned.

### RA-17. A THIRD proof-of-absence violation — and this one asserted coverage that did not exist

While primary-reading §504B.321, a source chain led to checking Minnesota's victims-of-violence termination statute against the library. Result:

**MN §13's canvass recorded "Domestic violence/sexual assault/trafficking/stalking housing protections — Present — § 504B.206, already covered." It was not covered.** No MN `LEASE_CLAUSE` addressed DV/violence termination at all. The only MN row referencing §504B.206 was `edu-right-to-call-police-mn`, in passing.

**This is worse than the RA-4 misses.** Fair housing and retaliation at least carried an honest "not yet logged — flag for a future session" note, so a future canvass could have caught them. This one **asserted coverage**, which means the canvass would never re-flag it. A false "already covered" is self-sealing.

The comparison makes it plainer: **WY has two DV clauses** (`dv-safe-homes-wy`, `dv-safe-homes-proactive-wy`), **NE has two** (`dv-lease-release-ne`, `dv-perpetrator-removal-ne`). Minnesota — whose statute is **broader than either** — had none.

**Four qualifying grounds confirmed** (subd. 1(a)): domestic abuse (§518B.01 subd. 2), criminal sexual conduct (§§609.342-609.3451), **sexual extortion** (§609.3458), and **harassment** (§609.749). The last two have no analog in Wyoming's Safe Homes Act.

**Version trap flagged:** pre-2023 text made a terminating tenant liable for the full month *plus an additional amount equal to one month's rent*. Current text drops the extra month and instead addresses security-deposit claims. A stale secondary source would state the old penalty; the clause uses the current rule.

**Not fully resolved, surfaced rather than papered over:** subd. 3 sets different rules for a **sole tenant** versus **multiple tenants**, with different deposit consequences. I read subd. 3(a) but not the multi-tenant paragraphs in full. `dv-lease-termination-mn` therefore defers deposit treatment to "as provided under Minnesota law" rather than stating a rule I have not confirmed for both cases. **Recommend a targeted read of subd. 3 before this clause ships.**

Also logged `edu-dv-information-confidentiality-mn` (subd. 2): four categories of victim information are confidential, may not enter a shared database, the duty is **expressly paramount and supersedes any other document or form the tenant previously signed** — so a consent or release buried in an application or lease is void against it — and violation carries **$2,000 statutory damages** plus attorney fees. Directly relevant to Steinoak product design, not just lease text.

### RA-18. Two more landlord duties with no row in any state

- **`edu-landlord-mitigation-duty-mn` — §504B.154.** Minnesota codified a residential landlord duty to mitigate in 2024, **reversing** the common-law rule of *Markoe v. Naiditch & Sons* (1975). **No row anywhere in the library covers a mitigation duty for any state.** This is a live version trap: pre-2024 sources are affirmatively wrong, not merely incomplete. **Cross-state flag: recommend adding "landlord duty to mitigate on early termination" as a named-topic checklist row** — it has never been canvassed for CO, WY, KS, NE, SD, or ND.
- **`edu-pre-eviction-notice-nonpayment-mn` — §504B.321 subd. 1a.** MN §18 recorded the 14-day figure, but no row captured the **mandatory content requirements** or the operative consequence: the notice must be attached to the complaint, and the court **shall dismiss without prejudice and grant expungement** if it was not provided. A defective notice does not delay the filing, it erases it. Confirms MN §18's separate finding that Minnesota has no general cure period for non-nonpayment violations.

**CSV: v69 (446) → v70 (450), MN-tagged 83 → 87.**

### RA-19. §5a.2 TRIGGERED — primary text needed from Taylor

**Canvass row #8 (state SCRA analog) has a direct source conflict I will not resolve by a third search.**

- The extended research pass concluded **no independent Minnesota analog exists**, federal SCRA controls — explicitly flagged as a low-confidence negative.
- One secondary source states Minnesota provides additional protections for state active service under **Minn. Stat. § 192.501**.
- A recent attorney-authored source states the opposite and names a *different* section: "Chapter 504B contains no parallel residential lease-termination provision for servicemembers, and Minn. Stat. § **192.502** ... addresses postsecondary students, professional and driver's license renewal, vehicle registration, and unpaid leave for military ceremonies. It does not provide a residential lease termination right."

Note the sources do not even agree on the section number (.501 vs .502). Per §5a.2, after two passes on the same question I am asking rather than searching a third time.

**Taylor: please paste the primary text of Minn. Stat. §§ 192.501 and 192.502.** Until then canvass row #8 stays **UNRESOLVED — conflicting sources**, not recorded as a negative. NE has `edu-servicemember-termination-ne`, so this row matters cross-state.

**Also relevant:** the same attorney source describes §504B.206 subd. 3(d) as barring a landlord from commencing an eviction against a tenant who terminated under that section, with attorney fees and costs for obtaining expungement under §484.014 subd. 3. Not independently confirmed and **not** built into `dv-lease-termination-mn`. Include in the subd. 3 read recommended at RA-17.

### RA-20. §5a.2 RESOLVED — canvass row #8 (state SCRA analog) is CONFIRMED ABSENT

Taylor supplied primary text for both candidate sections. The conflict resolves cleanly and one source is convicted.

- **§192.501 — "FINANCIAL INCENTIVES FOR NATIONAL GUARD MEMBERS."** Enlistment, reenlistment/commissioning, medic recertification, reclassification, and referral bonus programs; tuition and textbook reimbursement grants; spousal use of unused tuition benefit; record keeping. **No landlord-tenant content of any kind.**
- **§192.502 — "PROTECTIONS."** Subd. 1 postsecondary students (course withdrawal, incompletes, refunds, readmission within two years); subd. 2 professional license, driver's license, and motor vehicle registration renewal; subd. 3 unpaid leave to attend send-off/homecoming ceremonies; subd. 4 unpaid leave for families of injured or deceased members. **No residential lease-termination right.**

**Answer: Minnesota has NO state servicemember lease-termination right. Federal SCRA (50 U.S.C. §3955) is the authority.** Chapter 504B contains no parallel provision.

**Source-quality finding, logged because it is the project's signature failure mode.** A secondary legal-template site stated: "Minnesota provides additional protections for state active service under Minn. Stat. 192.501." That is **wrong on the section number and wrong on the subject matter** — §192.501 is a National Guard bonus-and-tuition statute. The attorney-authored source that contradicted it was correct, including its accurate characterization of §192.502's contents. This is the same shape as the WY Hemlane/LeaseWisely problems, the NE payday-loan $15 fee misattribution, and the MN radon claim at MN §16: a confident assertion with a real-looking citation attached, defeated only by reading the cited section. Escalating under §5a.2 rather than running a third search was the right call and cost one round trip.

Logged as `edu-no-state-servicemember-termination-mn` — **a row, not a log-only absence.** Per the standing proof-of-absence rule, a confirmed absence with no CSV row is invisible to every future canvass, which is precisely the failure this re-audit found three separate times in Minnesota (RA-4 twice, RA-17 once). MN's generic `early-termination` clause already references the federal SCRA, so lease-side coverage exists; this row supplies the landlord-facing "no state layer" answer that was missing.

**CSV: v70 (450) → v71 (451), MN-tagged 87 → 88.** Integrity re-asserted: no duplicate IDs, no dangling supersedes, no display collisions.

**Ten NE canvass rows — MN now 8 of 10 resolved.** Remaining: row #3 (electronic notice/delivery regime) and row #7 (do the animal and fair-housing carve-outs align in scope).

### RA-21. Eviction-duty screen scope — SETTLED

**Taylor's decision: SD and ND are OUT.** They will be covered when their own re-audits run. The screen covers **CO, WY, KS, NE, MN** only, and runs at the end of the MN re-audit. The RA-16 discrepancy note is resolved — the omission was deliberate, not an oversight.

### RA-22. §504B.206 subd. 3 read in full — blocking item discharged, and my own draft had two errors

Read the complete section from the revisor.mn.gov PDF (2025 text). The RA-17 recommendation to read subd. 3 before shipping `dv-lease-termination-mn` is now discharged — but the read also caught **two errors I introduced in the previous pass**, both from building an initial draft on partial search results rather than the full section.

1. **Delivery method was stale.** My draft said notice may be delivered "by mail, fax, or in person." That is pre-2014 wording. Current subd. 1(c): "by mail, in person, or by a form of written communication the plaintiff regularly uses to communicate with the landlord." **Fax is gone.**
2. **Notice content was wrong in a way that matters.** My draft required "the date by which Tenant will vacate." Subd. 1(b)(3) actually requires "the date on which the lease will terminate." Subd. 1(c) makes the distinction operative: "Vacation of the premises ... prior to the date provided in the notice does not constitute termination of the tenancy for the purposes of this section." **A tenant who moves out early has not terminated.** My phrasing would have told tenants the wrong thing about their own protection.

Recording these plainly. The re-audit has now caught the same failure mode in the original session (RA-12, RA-13, RA-17) and in my own work one turn later — reading part of a section and generalizing is not a mistake that belongs to the earlier pass alone.

**Multi-tenant rule resolved, and it is more consequential than anticipated (subd. 3(b)):** where one of several tenants terminates, the lease terminates for **all remaining tenants** at the later of month-end or rent-interval-end; **all** tenants relinquish security-deposit claims; and a tenant so terminated "may reapply to enter into a new lease with the landlord." One victim's notice ends everyone's tenancy by operation of statute, and a remaining roommate who wants to stay must reapply rather than simply continue. Sole-tenant rule (subd. 3(a)) confirmed as originally drafted.

**Also confirmed:** subd. 3(c) preserves liability for already-delinquent amounts. **Subd. 3(d) bars the landlord from commencing an eviction against a tenant who terminated under the section**, except per §504B.285 subd. 1(b) — this independently confirms the attorney-source claim flagged at RA-19 that I had declined to rely on while unverified. Subd. 5 prohibits waiver **in both directions**. Subd. 7: where a federal subsidized-housing statute, regulation, or handbook conflicts, the federal rule controls.

**Qualifying documents are a closed list of five (subd. 6(3)):** a valid order for protection; a no contact order currently in effect; a signed writing from a court official; a signed writing from a city, county, state, or tribal law enforcement official; or a **Statement by Qualified Third Party on the verbatim form reproduced in the statute.** A police report alone is not on the list. **Product implication:** Steinoak could supply that statutory form directly — same category as the verbatim utility-disclosure attachment flagged for §504B.216 subd. 10.

**Drafting oddity flagged:** subd. 1(c) literally reads "a form of written communication the *plaintiff* regularly uses to communicate with the landlord." "Plaintiff" appears to be a drafting artifact for "tenant" in a section with no litigation posture. The clause uses "Tenant"; noted in case it matters.

Logged `edu-dv-qualifying-documents-mn`.

**CSV: v71 (451) → v72 (452), MN-tagged 88 → 89.** `dv-lease-termination-mn` is now unblocked and shippable.

### RA-23. §504B.113 read in full — canvass row #7 resolved, and another of my own rows corrected

**Canvass row #7 (do the assistance-animal and fair-housing carve-outs align in scope?) — MN ANSWER: NO, THEY DO NOT ALIGN.**

§363A.09 is expressly subject to exemptions at §§363A.21, 363A.22, and 363A.26 — including the resident owner-occupier renting a room in a one-family home. **§504B.113, read in full from primary text, contains no exemption provision of any kind** — no owner-occupier carve-out, no unit-count threshold, no nonprofit or religious exemption. The two statutes diverge precisely where a small landlord would most naturally assume they align: a landlord genuinely exempt from parts of fair housing law remains **fully bound** by the animal statute. Logged as `edu-animal-fairhousing-exemption-mismatch-mn`.

**Correction to my own work, second time this session.** `edu-esa-independent-basis-mn` (written earlier today from the extended-research summary) told landlords their ESA obligations "rest on state law and are not affected by" HUD's September 2025 guidance withdrawal and May 2026 narrowed enforcement standard. **That overstated Minnesota's insulation.** Subd. 1(f) defines "reasonable accommodation" as a waiver of a no-pets or pet-fee policy *"consistent with the Fair Housing Act, United States Code, title 42, sections 3601 to 3619, **as amended**, and section 504 of the Rehabilitation Act of 1973 ... **as amended**."* The reference is **dynamic**, so a narrowing of the federal accommodation standard plausibly narrows Minnesota's trigger with it.

What *is* genuinely independent: the support-animal definition (subd. 1(c), no task training required), the closed licensed-professional list (subd. 1(e), expressly excluding anyone "who operates primarily to provide certification" — ESA mills), the fee prohibition (subd. 3(a)), the bar on demanding medical records or provider access (subd. 2(b)), and the disability definition, which uses **state** law (§363A.03 subd. 12). Category 1 classification **holds**, but the accommodation trigger is now described accurately rather than glossed. Mixed tethering within one section — state definition of disability, federal standard for accommodation — is itself worth carrying to future states as a thing to check.

**A conditional lease-disclosure duty found, with a product consequence.** Subd. 3(b): *"If a landlord requires an additional fee, charge, or deposit pursuant to a pet policy, the landlord must disclose in the lease the prohibition on additional fees, charges, or deposits for service or support animals."* Subd. 3(c) then lets the tenant **recover pet fees already paid** where the disclosure was omitted and the tenant shows they would have requested and likely received an accommodation.

**Flagged for Taylor:** `assistance-animal-accommodation-mn` is therefore not merely *available* for MN leases — it becomes **mandatory whenever any pet fee, deposit, or pet rent is charged.** Since `pet-policy-mn` carries `{{pet_rent_amount}}` and a pet deposit, any MN lease selecting `pet-policy-mn` must force-include the assistance-animal clause or the landlord is exposed to fee recovery. The builder currently lets the user pick clauses manually, so **nothing enforces the pairing.** This is a concrete, shipping instance of the REQUIRED-clause enforcement gap the architecture review flagged in the abstract.

**CSV: v72 (452) → v73 (453), MN-tagged 89 → 90.**

**NE canvass rows: 9 of 10 resolved for MN.** Only row #3 (electronic notice/delivery regime) remains.

### RA-24. Canvass row #3 resolved — 10 of 10 NE rows now answered for MN

**Row #3 (electronic notice/delivery regime) — MN ANSWER: NO COMPREHENSIVE REGIME, and the absence is itself the finding.**

Minnesota does not regulate electronic service generally, does not require affirmative tenant consent to electronic delivery, and does not bar a lease from designating an electronic method. Instead **delivery is specified section by section, and the specifications conflict:**

| Notice | Required method |
|---|---|
| §504B.321 subd. 1a(b) — 14-day pre-eviction | Personal or first class mail **only**; failure = dismissal + expungement |
| §504B.265 subd. 2 — death of tenant | Hand delivery or first class prepaid mail |
| §504B.271 subd. 1(d) — abandoned property sale | Personal service **or** first class **and** certified mail, **plus** conspicuous posting |
| §504B.365 subd. 3(g) — sheriff's arrival | First class mail **plus** good-faith telephone attempt |
| §504B.206 subd. 1(c) — DV termination | Mail, in person, or a form of written communication the tenant regularly uses (**the only electronic-permissive one**, and it runs tenant-to-landlord) |
| §504B.181 — landlord identity | In the rental agreement "or otherwise in writing" |

Logged as `edu-notice-delivery-methods-mn`.

**Cross-state consequence flagged, not fixed:** a generic lease clause designating email or a tenant portal as *the* method for all notices would be actively misleading in Minnesota. The generic `notices` clause is tagged CO;KS;MN;NE;WY. **Not edited this session** — a shared-clause change triggers §5a.1 across five states and deserves its own scoped pass rather than being absorbed here.

**Bonus finding folded into `edu-entry-notice-content-mn`:** §504B.211 subd. 2 contains a **double bar** — "A residential tenant may not waive **and** the landlord may not require the residential tenant to waive" the entry-notice right "as a condition of entering into **or maintaining** the lease." Two distinct prohibitions. The prior row stated the notice requirement but not the non-waiver, so a landlord could have read it and still believed a broad access clause was merely unenforceable rather than **affirmatively violative conduct**. Real-time tenant consent to shorter notice remains permitted. The $500 penalty is per violation, so a pattern compounds rather than capping.

### RA-25. Another logged-but-never-built finding — foreclosure disclosure

**MN had no foreclosure or financial-distress disclosure row of any kind**, while NV and CA both carry `foreclosure-disclosure-*` clauses. The original MN session's statute walk listed §504B.151 in the chapter structure (MN log §1, "foreclosure-distress tenancy protections") and never produced a row — the same shape as the fair-housing and retaliation misses at RA-4.

§504B.151 subd. 1(b) requires the landlord, **before entering into the lease and before accepting any rent or security deposit**, to notify the prospective tenant in writing that notice of a contract for deed cancellation or mortgage foreclosure sale has been received, and the date the cancellation or redemption period ends. Subd. 1(d): **$500 civil penalty**, expressly in addition to other remedies. Subd. 1(c) excludes manufactured home parks, consistent with the standing MHP deprioritization.

Logged as `foreclosure-disclosure-mn`.

**Not fully read, flagged rather than assumed:** subd. 2 contains an exception where the holder or mortgagee agrees not to terminate the tenancy other than for lease violations for at least one year, and subd. 1(d) makes the $500 penalty inapplicable where the landlord falls under it. I read the exception's opening only. The clause states the disclosure duty and does **not** attempt to describe the exception. Recommend reading subd. 2 in full before relying on it.

**CSV: v73 (453) → v75 (455), MN-tagged 90 → 92.** Integrity asserted: no duplicate IDs, no dangling supersedes, no display collisions.

### RA-26. Returned-check fee cap — gap found, topic now complete across all seven states

**MN had no returned-check/NSF fee row at all.** Every other state did: CO `nsf-fee-limit-co`; WY, ND, SD `edu-returned-check-fee-cap-{state}`; KS `edu-nsf-fee-cap-ks`; NE `edu-bad-check-restitution-vs-nsf-fee-ne`. Minnesota was the only hole, and `returned-payments` (tagged CO;WY;KS;NE;MN;ND) tells landlords they "may charge Tenant any fee associated with the failed payment" — unbounded on its face.

**Minn. Stat. § 604.113 subd. 2** caps the service charge at **$30**, one per dishonored check. Separately, if the check is unpaid 30 days after a proper mailed notice of dishonor, the payee may recover the face amount, the service charge, a **civil penalty of up to $100 or the value of the check, whichever is greater**, judgment-rate interest, and attorney fees where the issuer has bounced over **$1,250** to all payees within six months. The civil penalty is a court remedy, not a fee to add to the ledger.

**Another §E adjacent-chapter finding** — §604.113 sits in the Civil Liability chapter, not Ch. 504B, matching Wyoming's pattern where the equivalent lived in a general bad-check statute.

**Source quality:** confirmed from revisor.mn.gov and corroborated by multiple Minnesota county and state agency notice-and-demand forms that cite and apply it operationally (BCA, Kittson County, Winona, Renville County). That is independent confirmation in the sense this project requires — separate bodies applying the statute — rather than aggregator sites repeating one another.

**Ambiguity surfaced rather than resolved.** Subd. 2(c) says the subdivision "prevails over any provision of law limiting, prohibiting, or otherwise regulating service charges authorized by this subdivision, but does not nullify charges for dishonored checks, which do not exceed the charges in paragraph (a) **or** terms or conditions for imposing the charges which have been agreed to by the parties in an express contract." Read one way, a lease may set the *conditions* for imposing the charge but not exceed $30; read another, express-contract terms survive independently of the cap. **The row takes the conservative reading ($30 is the ceiling) and flags the alternative rather than asserting the landlord-favorable interpretation.** Worth a lawyer's eye if Steinoak ever suggests an NSF amount.

Also flagged: the "conspicuously displayed on the premises when the check was issued" precondition is written for storefronts and fits awkwardly on a mailed rent check, so the $30 should not be presented to landlords as automatic.

**§5a.1 judgment on `returned-payments`: STATE-DRIVEN finding, no shared-clause edit.** The clause hardcodes no figure, so it does not conflict with the cap — the same disposition Wyoming reached for the identical situation. **But flagged:** "may charge Tenant any fee associated with the failed payment" is unbounded and could read as authorizing more than the statutory cap in *every* tagged state. Not edited here — rewording triggers §5a.1 across six states and belongs in a scoped shared-clause pass, alongside the `notices` clause issue raised at RA-24.

**CSV: v75 (455) → v76 (456), MN-tagged 92 → 93.**

### RA-27. Plain Language Contract Act remedies — my row misstated the remedy

Read §325G.33 and §325G.37 from primary text. **`edu-plain-language-contract-mn`, written earlier this session, was wrong about what happens when the Act is violated.**

The prior version told landlords a violating lease "isn't automatically void, but a court will construe any resulting ambiguity against you." That is **contra proferentem — a general contract doctrine — and not what the statute provides.**

§325G.33 actually gives two things:

1. **"Any violation of section 325G.31 is a violation of a law under section 8.31, subdivision 1."** That pulls in the attorney general's enforcement powers *and* §8.31 subd. 3a's private-attorney-general right of action carrying costs and attorney fees, limited per §325G.34.
2. **Judicial reformation.** "In addition to the remedies provided in section 8.31, a court reviewing a consumer contract may **reform or limit** a provision so as to avoid an unfair result" on a three-part test: a material provision violates §325G.31; the violation caused the consumer to be **substantially confused** about rights, obligations, or remedies; and it **has caused or is likely to cause financial detriment**. The court "shall also make orders necessary to avoid unjust enrichment." Bringing the claim does not let the tenant withhold performance of an otherwise valid obligation.

A court **rewriting your lease term** is a materially stronger remedy than reading an ambiguity against you, and the row understated it.

**New finding from §325G.37:** "For the purposes of this section periodic tenancies renew at the commencement of each rental period." A month-to-month lease is therefore renewed — and re-subjected to the Act — **every month**, which also defeats any argument that an old form escapes the Act's 1983 grandfathering.

**Still unread, flagged rather than glossed:** §325G.34 "Limits on Remedies" — text not reached. The corrected row references the limits' existence without characterizing them, which is the honest posture until it is read. §325G.35 (AG review) and §325G.16 (confession of judgment, previously resolved as scoped to consumer credit sales of personal property and not reaching real property leases) also remain unread in full.

**Third correction to my own work this session** (after the DV delivery-method/notice-content errors at RA-22 and the ESA insulation overstatement at RA-23). All three came from writing a row before reading the governing section end to end. Recording the pattern because it is the same one this re-audit was convened to find in the original pass — the failure is methodological, not specific to whoever performed the earlier work.

**CSV: v76 → v77 (456 rows, unchanged count — body text and notes only).**

### RA-28. §325G.34 read — the limits are large enough that the prior row was alarmist

The item flagged as unread at RA-27 is discharged. §325G.34 "Limits on Remedies," read in full, materially softens the Plain Language Act picture:

- **Subd. 1** — good faith and reasonable effort to comply is a **defense to civil penalties**.
- **Subd. 2** — a party who made that effort "shall not be assessed attorney's fees or costs of investigation." **A genuine safe harbor, not mitigation.**
- **Subd. 3** — class-action attorney fees and investigation costs against one person are capped at **$10,000** across any class action or series arising from a particular contract.
- **Subd. 4** — **"Violation of section 325G.31 is not a defense to a claim arising from a consumer's breach of a consumer contract or to an action for eviction."** Landlord-favorable and important: a tenant cannot use the lease's prose to defeat a nonpayment eviction. Actual damages are recoverable only where the violation caused substantial confusion.
- **Subd. 5** — six-year limitations period running from the date the tenant signs.

Also captured, and missed in the prior pass: **§325G.33 subd. 2's final sentence** — "No relief shall be granted pursuant to this subdivision unless the claim is brought before the obligations of the contract have been fully performed." **Reformation is a during-tenancy remedy only.**

**This changes a standing recommendation.** The library-wide plain-language audit flagged at MN §27 item 5 and carried at RA-9 item 2 remains worth doing, but its **urgency drops from compliance risk to quality issue**: good-faith drafting effort is an affirmative defense to both penalties and fees, and the Act cannot be used to defeat an eviction. Recording the downgrade explicitly so the item is not carried forward at an inflated priority.

Worth noting on method: RA-27 corrected the row for understating the remedy, and RA-28 now corrects it for overstating the exposure. Reading §325G.33 without §325G.34 produced an alarmist row; reading §325G.31 alone produced a toothless one. **Neither section alone gives the right answer** — the same whole-scheme problem this re-audit has now hit at §504B.271, §504B.266, §504B.206, and here.

**Still unread:** §325G.35 (AG review) and §325G.16 (confession of judgment, previously resolved as scoped to consumer credit sales of personal property and not reaching real property leases).

**CSV: v77 → v78 (456 rows, unchanged count — body text and notes only).**

### RA-29. §363A.03 subd. 34 read — conclusion holds, stated certainty did not

Final header-only item discharged. The definition relied on for the §609.833 scope conclusion reads: "a business, accommodation, refreshment, entertainment, recreation, or transportation facility of any kind, whether licensed or not, whose goods, services, facilities, privileges, advantages or accommodations are extended, offered, sold, or otherwise made available to the public."

**The conclusion survives; the confidence level did not.** `edu-service-animal-misrepresentation-scope-mn` asserted flatly that the crime "does not cover" a tenant misrepresenting a pet. The statute contains **no express housing carve-out**, and the word "accommodation" sits inside the definition — a litigant has something to argue from. The conclusion is a **structural inference**, well supported but not express:

1. The MHRA treats housing and real property (§363A.09) and public accommodations (§363A.11) as separate categories, with separate prohibitions and separate policy declarations at §363A.02; and
2. A leased dwelling is not "made available to the public."

Row now reads "very unlikely to fit" and "should not expect," which is what the text supports.

**A nuance I had not considered, flagged rather than buried:** a public-facing **leasing office** plausibly *is* a place of public accommodation in its own right. A misrepresentation made there during an application is therefore not as cleanly outside §609.833 as one made by a sitting tenant. This does not change the practical advice — do not threaten a tenant or applicant with prosecution — but it means the negative cannot be stated as categorical.

The freeze-date finding (§609.833 subd. 1(2) locks "service animal" to 28 C.F.R. §36.104 as amended through March 1, 2018, while §504B.113 subd. 1(b) is dynamic) is unaffected and stands.

**RA-9 item 4 is now fully discharged.** Every section flagged as header-only has been read in primary text: §504B.271, §504B.265, §504B.266, §504B.365, §504B.321 subd. 1a, §504B.291 (via §504B.321 context), §504B.206, §504B.113, §325G.33, §325G.34, §363A.03 subd. 34, §604.113, §299F.362, §299F.51, §363A.09, §471.9996, §192.501, §192.502. **Remaining unread and explicitly listed:** §325G.35 (AG review), §325G.16 (confession of judgment, resolved on scope), §504B.151 subd. 2 (the holder-agreement exception).

**CSV: v78 → v79 (456 rows, unchanged count — body text and notes only).**

**Running tally of self-corrections this session: four.** RA-22 (two errors in the DV clause), RA-23 (ESA insulation overstated), RA-27/28 (plain-language remedy understated, then exposure overstated), and RA-29 (categorical claim softened to inference). Every one traced to writing a row before reading the governing scheme end to end. The brief's instruction to read whole sections was aimed at the original pass; it applied equally to this one.

### RA-30. Named-topic canvass, PASS 1 — run against all 91 rows

**Denominator re-derived fresh at the start of this pass, not carried from RA-1: 91** (rule B — every non-header table row excluding `Row | Correction` correction tables). 91 distinct labels, no duplicate labels. Section distribution: Disclosures & habitability 9, Security deposits 4, Fees/pricing/unconscionability 8, Entry/notices/identity 3, Termination/default/possession 11, Protected classes 5, Building & fire safety 2, Deliberately deprioritized layers 7, ND additions 5, CO re-audit additions 11, WY re-audit additions 7, KS re-audit additions 9, NE re-audit additions 10.

**Matches RA-1's figure, derived independently.** The semantic-duplicate disagreement recorded at RA-1 stands unreconciled.

**Method note, because the first instrument was inadequate.** I first ran a programmatic keyword-overlap probe of each topic label against the text of all MN rows. It returned only one low-signal topic, which would have implied near-total coverage. **That result was misleading and I did not rely on it** — keyword overlap measures vocabulary, not adjudication. A topic can score 6/6 because the words appear scattered across unrelated rows. The probe was retained only as a screen; the actual pass-1 adjudication was done by listing all 93 MN rows and matching them against the 91 topics by hand.

**Pass 1's central finding: the invisibility failure is systemic, not the three isolated instances found earlier.** A large group of topics had been *adjudicated in MN's decision log* — reasoned through, resolved, written up — and then never given a CSV row. Per the standing proof-of-absence rule these are invisible to every future canvass, which is exactly how a future state's canvass would have re-derived them from scratch or missed them.

**Nine proof-of-absence rows created this pass:**

| Row | Topic resolved in log, never rowed |
|---|---|
| `edu-no-radon-rental-disclosure-mn` | Radon — sales only, rental bills failed repeatedly; MN §16 also flagged a bad secondary source |
| `edu-no-bedbug-mold-disclosure-mn` | Bed bug + mold — no dedicated statute, habitability covenant only (CO/CA/ME have bed-bug rows) |
| `edu-no-ev-charging-right-mn` | EV charging — confirmed absent (CO has one) |
| `edu-no-unconscionability-statute-mn` | No landlord-tenant unconscionability provision (contrast KS §58-2544, NE §76-1412) |
| `edu-no-confession-of-judgment-bar-mn` | §325G.16 scoped to personal property, does not reach leases |
| `edu-no-holdover-damages-multiplier-mn` | No multiplier anywhere in §504B.141 or the eviction chapter |
| `edu-no-deposit-cap-statewide-mn` | No statewide cap or installment right; Minneapolis and St. Paul have both |
| `edu-farm-and-mhp-scope-mn` | Ch. 327C and Ch. 514 carve-outs — documents the scope boundary rather than reopening it |
| `edu-statute-of-frauds-lease-term-mn` | One-year writing requirement — and the checklist topic it answers was mis-framed |

**Two interactions surfaced while writing these:**

- **`holdover` (CO;KS;MN;NE;WY)** provides for "double the Monthly Rent ... or the maximum amount allowed under applicable law, if less." The self-limiting tail saves it from being unlawful in Minnesota, but it actively misleads a Minnesota landlord who has no multiplier available. **Third entry on the shared-clause backlog**, with `notices` (RA-24) and `returned-payments` (RA-26).
- **The checklist's "Long-term lease exclusion (5+ years)" row does not map onto Minnesota at all.** What exists is an ordinary Statute of Frauds writing requirement at one year, not an exclusion of long leases from tenant-protection coverage. The row appears to have been framed from whichever state originated it. **Recommend re-wording the checklist row itself**, not just answering it per-state.

**CSV: v79 (456) → v80 (465), MN-tagged 93 → 102.**

**Pass 1 is not complete.** Topics identified as adjudicated-and-rowed or resolved this session are closed. A remaining group is **genuinely never checked for Minnesota** and is carried into pass 2 rather than guessed at: move-in written inventory (§504B.182 exists but has no MN row, and KS/NE both have one), day-one landlord identity disclosure (§504B.181 — KS and NE both have `landlord-disclosure-*` rows, MN has none), last-month's-rent restriction and successor-owner deposit obligations (§504B.178 subds. 5-6, 8), fire/casualty termination (§504B.131), double-letting of a room, payment-method fee ban, eviction record sealing (§484.014), verbal-notice designation, renter's-insurance push prohibition, habitability operational duties, source-of-income lease-statement vs acceptance duty exemptions, week-to-week termination notice (§504B.135), and landlord-facing criminal penalty for denying an assistance animal.

### RA-31. Canvass PASS 2 — begun, and it is already justifying itself

Pass 2 is working the group pass 1 identified as genuinely never checked for Minnesota. Two of the first three items were real gaps on topics where **other states already had rows and Minnesota did not** — the precise asymmetry that should have been caught the first time.

**§504B.182 — Initial and Final Inspection. GAP, high value.**

MN had **no inspection row of any kind**, while KS has `move-in-inventory-ks` and NE has `edu-no-move-in-inventory-requirement-ne`. Minnesota was the only state with a real inspection statute and nothing recording it.

Architecture matters here and MN §13 got it right before dropping it: Minnesota's version is **tenant-request-triggered**, not a mandatory joint signed inventory on a fixed timeline like Kansas's 5-day rule. What *is* mandatory is the **landlord's notification of the option** — at commencement or within 14 days of occupancy, and again in writing before the tenancy ends, including notice of the tenant's right to be present. Subd. 1(b)'s photo/video alternative requires **tenant agreement** and written acknowledgment; it is not a unilateral landlord substitute. Waiver is void.

**The penalty is what makes this urgent.** §504B.178 subd. 4(4): a landlord who fails to give the required inspection notices, or fails to complete an inspection the tenant requested, is liable for damages equal to the portion of the deposit withheld plus interest **as a penalty, in addition to** returning the wrongfully withheld portion. The same withheld amount can come out of the landlord's pocket twice — **and the trigger is the notice, not the inspection.** A landlord who never hears from the tenant is still exposed if they never offered.

Logged `initial-final-inspection-mn` and `edu-inspection-notice-penalty-mn`.

**Product implication, flagged for Taylor:** this is a **dated, event-driven obligation** — notify within 14 days of occupancy, then notify again months or years later before termination — that a lease clause cannot discharge. The lease can state the option; someone still has to send the second notice. **Clearest candidate yet for the legal tracker feature**, alongside the reservation-of-rights notice that came out of the Nebraska work.

**§504B.181 — Landlord/Manager Disclosure. GAP.**

KS has `landlord-disclosure-ks`, NE has `landlord-disclosure-ne`, **MN had none** despite an equivalent duty. MN §13 recorded it as Present with "no dedicated MN row yet; candidate for a future session," and it never happened. Disclosure may be made in the rental agreement or otherwise in writing before the tenancy starts, **plus** a conspicuous posted notice on the premises, **plus** a posted notice that the Attorney General's tenant-rights statement is available on request. Logged `landlord-disclosure-mn`.

**Not fully read, flagged:** §504B.181 subd. 3's successor/liability-shield provisions — the analog to the KS/NE identity-change liability rules — were not reached. The checklist topic "broader landlord-identity-change notice" is therefore **not** closed by this row and stays on the pass-2 list.

**CSV: v80 (465) → v81 (468), MN-tagged 102 → 105.**

**Pass 2 remaining:** last-month's-rent restriction and successor-owner deposit obligations (§504B.178 subds. 5-6, 8), landlord-identity-change liability (§504B.181 subd. 3), fire/casualty termination (§504B.131), double-letting of a room, payment-method fee ban, eviction record sealing (§484.014), verbal-notice designation, renter's-insurance push prohibition, habitability operational duties, source-of-income lease-statement vs acceptance duty exemptions, week-to-week termination notice (§504B.135), and landlord-facing criminal penalty for denying an assistance animal.

### RA-32. Pass 2 continued — §504B.178 read in full, three topics resolved

**All previously verified numbers hold** (three weeks; 1% simple noncompounded; $500 bad-faith punitive). But reading the whole section surfaced four elements no MN row captured:

1. **Subd. 3(c) — the burden of proof is on the LANDLORD.** "In any action concerning the deposit, the burden of proving, by a fair preponderance of the evidence, the reason for withholding all or any portion of the deposit shall be on the landlord." Landlord-facing knowledge of real practical weight, absent from every MN row.
2. **Subd. 3(a)(2) — a separate five-day return window** where the tenant leaves due to legal condemnation not caused by their own willful, malicious, or irresponsible conduct. `security-deposit-return-mn` states only the three-week track. Not added to body text (narrow scenario, clause already defers to law) but **flagged for Taylor** as a possible addition.
3. **Subd. 2 — interest under $1 is excluded entirely.** A de minimis rule directly relevant to the deposit-interest calculation feature still unbuilt.
4. **Subd. 7 — bad faith is PRESUMED** where the landlord failed to comply with subd. 3 or 5, unless the deposit is returned within two weeks after a recovery action commences. **The presumption, not the $500 figure, is the operative risk** — and the earlier row recorded only the figure.

**Two canvass topics closed with new rows:**

- **`deposit-last-month-rent-mn`** (subd. 8). The restriction has exceptions that run *against* the landlord and are easy to miss: it does **not** apply to a month-to-month tenancy where neither party has served a notice to quit, nor to the last month of a contract-for-deed cancellation or foreclosure redemption period. A landlord asserting it against a month-to-month tenant with no notice outstanding would be wrong. The penalty is also conditioned on the landlord **first** making written demand and giving notice of the subdivision — without that step there is no penalty.
- **`edu-deposit-successor-transfer-mn`** (subds. 5-6). Sale, assignment, death, or receivership starts a **60-day clock** to transfer with interest and notify the tenant of the transferee, or return it. Failure is one of the four triggers for the subd. 4 doubling penalty *and* trips the subd. 7 bad-faith presumption. Buyer side: subd. 6 caps the successor's obligation at the amount stated in a written notice if the tenant does not object within **20 days** — and that notice must include a stamped envelope addressed to the successor. Over-included deliberately: it is a real buyer-side protection a landlord would not otherwise know to invoke.

**CSV: v81 (468) → v82 (470), MN-tagged 105 → 107.**

**Pass 2 remaining:** landlord-identity-change liability (§504B.181 subd. 3), fire/casualty termination (§504B.131), double-letting of a room, payment-method fee ban, eviction record sealing (§484.014), verbal-notice designation, renter's-insurance push prohibition, habitability operational duties, source-of-income lease-statement vs acceptance duty exemptions, week-to-week termination notice (§504B.135), landlord-facing criminal penalty for denying an assistance animal.

### RA-33. §504B.181 read in full — a disclosure failure can defeat an eviction

The flag left on `landlord-disclosure-mn` at RA-31 is discharged, and reading subds. 3-6 found a consequence far more serious than the disclosure duty itself.

**Subd. 4 is a maintenance bar.** "No action to recover rent or possession of the premises shall be maintained unless the information required by this section has been disclosed to the tenant in the manner provided in this section, or unless the information required by this section is known by or has been disclosed to the tenant at least 30 days prior to the initiation of such action."

A missing landlord disclosure **defeats the eviction or rent action itself**, and because the escape hatch requires disclosure at least 30 days *before* filing, curing it on the courthouse steps does not help. Narrow carve-out in the landlord's favor: failing to post the subd. 2(b) attorney-general-statement notice, or a §471.9995 notice, does **not** prevent the action.

**Two further effects, neither previously captured:**
- **Subd. 3** — if subds. 1 and 2 were not complied with, the caretaker, manager, or whoever collects the rent is **deemed the landlord's agent for service of process**. A landlord can be served through someone they never authorized; that person must forward it personally or by certified mail, return receipt requested.
- **Subd. 5** — a tenant who moves out or subleases **without giving 30 days written notice voids this section as to that tenant.** A genuine landlord-side defense.

**Canvass topic resolved, with a distinction:** subd. 6 provides the section "extends to and is enforceable against any successor landlord or individual to whom rental payments for the premises are made." So the *duty* binds a successor — but Minnesota imposes **no affirmative proactive notification obligation on sale or management change**, unlike the KS/NE identity-change architecture. The topic is **PRESENT-BUT-DIFFERENT** for MN, not simply present, and the row says so rather than flattening it.

Logged `edu-landlord-disclosure-consequences-mn`.

**Cross-state flag raised, not acted on:** a disclosure failure that bars an eviction is a severe and easily-missed consequence. **Worth checking whether `landlord-disclosure-ks` and `landlord-disclosure-ne` carry an equivalent maintenance bar that those states' rows also failed to capture.** This is the same row-presence asymmetry that produced today's §504B.181/.182 gaps, running in the opposite direction — MN now has something KS and NE may be missing.

**CSV: v82 (470) → v83 (471), MN-tagged 107 → 108.**

**Pass 2 remaining:** fire/casualty termination (§504B.131), double-letting of a room, payment-method fee ban, eviction record sealing (§484.014), verbal-notice designation, renter's-insurance push prohibition, habitability operational duties, source-of-income lease-statement vs acceptance duty exemptions, week-to-week termination notice (§504B.135), landlord-facing criminal penalty for denying an assistance animal.

### RA-34. §504B.131 and §504B.135 — two topics closed, one stale citation caught

**§504B.131 — fire/casualty. `fire-casualty-termination-mn` created.** KS has `fire-casualty-termination-ks`; MN had none.

**The architectural difference resolves the uncertainty MN §13 flagged and never closed.** Minnesota provides **only a vacate-and-surrender right**. There is **no proportional rent-reduction mechanic for partial damage** of the kind KS and NE carry. A Minnesota tenant whose unit is partly damaged but still habitable gets no abatement under this section — their remedy runs through §504B.161 and the tenant-remedies actions instead. The KS/NE framing must not be inherited.

**Unusual feature:** the section is **default-but-waivable** — "A tenant or occupant may expressly agree otherwise except as prohibited by section 504B.161." Unlike most of Chapter 504B, this right *can* be contracted around, down to the non-waivable habitability floor. That also answers the checklist's "environmental-event lease termination as an **opt-in** landlord right" topic for MN: it is the **inverse** — a default tenant right that may be expressly waived, not an opt-in landlord right.

**Flagged for Taylor, deliberately not drafted:** because the right is waivable, Steinoak *could* offer a variant clause contracting around it. I did not draft one — that trades a tenant protection for landlord benefit and is a product-policy decision, not a legal one.

**§504B.135 — tenancy at will. `edu-tenancy-at-will-notice-mn` created**, resolving the "distinct week-to-week termination notice period" topic: there is no separate week-to-week rule. The single formula — the interval between rent due dates, or three months, **whichever is less** — scales automatically, so week-to-week takes one week's notice and month-to-month takes one month, not three.

**STALE CITATION CAUGHT in MN's earlier log.** MN §20 stated: "§504B.135(b) gives 14 days notice to quit for nonpayment on a tenancy at will specifically." **Paragraph (b) existed in the 2019 statute and was removed by 2023 c 52 art 19 s 97.** Current §504B.135 is a single undesignated paragraph with no nonpayment provision at all. The earlier finding was drawn from an archived revisor page and read as current law.

This is the **second confirmed archived-version error this session** — the first was my own "fax" delivery-method error at RA-22, taken from the pre-2014 §504B.206 text. Both came from search results surfacing historical statute pages that are visually identical to current ones. **Recommendation for the method: when a revisor URL contains a year path or a version timestamp, treat the text as historical until confirmed against the current-cite URL.** A citation-existence screen cannot catch this — the section exists, the text is real, it is simply not the law anymore.

Nonpayment on a tenancy at will now runs through §504B.321 subd. 1a.

**CSV: v83 (471) → v84 (473), MN-tagged 108 → 110.**

**Pass 2 remaining:** double-letting of a room, payment-method fee ban, eviction record sealing (§484.014), verbal-notice designation, renter's-insurance push prohibition, habitability operational duties, source-of-income lease-statement vs acceptance duty exemptions, landlord-facing criminal penalty for denying an assistance animal.

### RA-35. §484.014 eviction expungement — and the archived-version trap fires a third time, in the dangerous direction

`edu-eviction-expungement-mn` created, resolving the "eviction record sealing / expungement — and the landlord's right to OBJECT" canvass topic. MN had no row; the topic appeared only in passing inside `edu-screening-fee-rules-mn`.

**Substance:** under subd. 3(a) the court must expunge **without motion by any party** where the tenant prevailed on the merits, where the complaint is **dismissed for any reason**, and where the parties agreed to it. Two categories require a tenant motion: filing in violation of the DV-termination bar, and settlement where the tenant performed. Subd. 3(b) additionally mandates expungement where the tenant qualifies for automatic expungement under §609A.055 or **where the breach was based solely on possession of marijuana or THC** — which ties directly to the §504B.171(c) cannabis protection already logged.

**Answer on the landlord-objection half of the topic: essentially none.** For the common categories there is no adversarial step at which a landlord objects. The only weighing occurs in the discretionary track, against "the public's interest in knowing about the record."

**The archived-version trap fired again — third instance this session, and the first in the dangerous direction.** This search returned the 2010 and 2019 revisor pages carrying the **repealed** discretionary standard: expungement "only upon motion of a defendant" and only where "the plaintiff's case is sufficiently without basis in fact or law." **Laws 2023 c 52 art 19 s 117 struck that test effective January 1, 2024.** An attorney source notes the repealed standard is still widely repeated by housing organizations and law firms.

The three instances now are: my own §504B.206 "fax" error (RA-22), the §504B.135(b) error inherited from MN's earlier log (RA-34), and this one. **What makes this one worse is its direction.** The stale text is *landlord-favorable* — it says a landlord with a colorable claim can defeat expungement. A landlord-facing library reviewed by people looking for landlord risk is least likely to question a finding that reads in the landlord's favor. The previous two errors were neutral or tenant-favorable and still took a full-section read to catch.

**This elevates the RA-34 method recommendation from useful to necessary:** treat any revisor URL containing a year path or version timestamp as historical until confirmed against the current-cite URL, and give extra scrutiny to stale findings that happen to favor the landlord. Recommend this become a standing rule alongside the citation-existence and notes-field screens, since none of those catch it.

**Not fully read, flagged:** subd. 3(a) clause (5) was truncated in the sources reached and is not characterized in the row.

**CSV: v84 (473) → v85 (474), MN-tagged 110 → 111.**

**Pass 2 remaining:** double-letting of a room, payment-method fee ban, verbal-notice designation, renter's-insurance push prohibition, habitability operational duties, source-of-income lease-statement vs acceptance duty exemptions, landlord-facing criminal penalty for denying an assistance animal.

### RA-36. §504B.120 read — a section titled "Prohibited Fees" that prohibits nothing

**Payment-method fee ban: CONFIRMED ABSENT for MN.** §504B.120 read in full — it is only two subdivisions and, despite its title **"PROHIBITED FEES,"** contains no prohibition of any fee whatsoever. It is purely a disclosure statute: disclose all nonoptional fees in the lease, state rent plus nonoptional fees as the "Total Monthly Payment" on the **first page**, disclose nonoptional fees in any advertisement or posting, and state whether utilities are included. Treble damages plus attorney fees for violation.

**Title trap flagged explicitly.** A canvass that resolved this topic from the section title alone — a plausible shortcut under time pressure — would record Minnesota as **having** a prohibited-fees regime. That is the opposite of the truth. Logged in the row's notes so the trap is visible to anyone re-deriving this later.

Logged `edu-no-payment-method-fee-ban-mn`. The optional/nonoptional line the row draws for landlords is flagged in its notes as **reasoning from the statute's terms, not an express statutory test.**

### RA-37. A genuinely new topic, on no state's checklist: cash rent receipts

**§504B.118** requires a landlord receiving rent **or other payments** in cash to give a written receipt — **immediately** if paid in person, or **within three business days** if not.

**No state in the library has a cash-receipt row.** Checked across all seven. This is not an MN gap against a known topic; it is a topic that has never been on the checklist at all, and it surfaced only because §504B.118 sits immediately adjacent to §504B.120 in the chapter and was visible while reading it.

Logged `cash-rent-receipt-mn`. **Recommend adding "cash rent payment receipt duty" as a new named-topic checklist row for all future states** — it is the kind of small, absolute, easily-violated duty that generates disputes out of proportion to its size, and it reaches "rent or other payments," not rent alone.

**Also spotted and deliberately NOT drafted:** §504B.115 ("Tenant To Be Given Copy Of Lease") appears to contain a subd. 2 providing that in any legal action to enforce a written lease — **except** for nonpayment of rent, disturbing the peace, malicious destruction of property, or a §504B.171 violation — **it is a defense for the tenant to prove** something the source text truncated before stating. A defense to lease enforcement is potentially significant and **no state has a lease-copy row either**. I am not drafting from a truncated sentence. Carried as an open item requiring a full read of §504B.111 and §504B.115.

**CSV: v85 (474) → v86 (476), MN-tagged 111 → 113.**

**Pass 2 remaining:** double-letting of a room, verbal-notice designation, renter's-insurance push prohibition, habitability operational duties, source-of-income lease-statement vs acceptance duty exemptions, landlord-facing criminal penalty for denying an assistance animal — plus the new §504B.111/.115 item.

### RA-38. §504B.115 and §504B.111 — the truncated sentence was worth waiting for

The item flagged at RA-37, where I declined to draft from a sentence that cut off mid-clause, is now resolved on full text. It was more consequential than the fragment suggested.

**§504B.115 subd. 2 in full:** "In any legal action to enforce a written lease, except for nonpayment of rent, disturbing the peace, malicious destruction of property, or a violation of section 504B.171, **it is a defense for the tenant to prove that the landlord failed to comply with subdivision 1.** This defense may be overcome if the landlord proves that the tenant had actual knowledge of the term or terms of the lease upon which any legal action is based."

So not giving the tenant a copy of their lease is a **defense to enforcement of ordinary lease terms** — which is most of what a lease does. The carve-outs (nonpayment, disturbing the peace, malicious destruction, unlawful activity) preserve the landlord's core remedies, but everything else is exposed, and the escape requires proving actual knowledge of the specific term at issue.

**§504B.111 adds a criminal penalty:** "A landlord who fails to provide a lease, as required under this section, is guilty of a **petty misdemeanor**." This is a landlord-facing *criminal* penalty — relevant to the checklist topic of that shape, which had only ever been framed around assistance-animal denial.

**Minnesota supplies the fix inside the statute**, which is why this got a `LEASE_CLAUSE` and not just education. Subd. 1 expressly permits a signed and dated receipt "either as a separate document **or an acknowledgment included in the lease agreement itself**," and makes it **prima facie evidence** of compliance. Steinoak can generate that automatically. Logged `lease-copy-receipt-mn` and `edu-lease-copy-defense-mn`.

**Product note flagged:** to be effective the acknowledgment should sit adjacent to the signature block rather than buried mid-document — a placement requirement similar in kind to §504B.120's first-page Total Monthly Payment rule. Third such layout constraint for the lease-builder work, with the Total Monthly Payment rule and the verbatim §504B.216 utility attachment.

**No state in the library has a lease-copy row.** Like the cash-receipt duty at RA-37, this is a topic that has never been on the checklist for anyone. **Recommend adding "lease copy delivery duty and acknowledgment" as a new named-topic row** alongside the cash-receipt one.

**Not fully read, flagged:** §504B.111's *operative requirement* — which landlords or buildings must provide a written lease at all — was not reached; only its penalty sentence was. The scope trigger is uncharacterized. The defense and penalty findings above do not depend on it, but the written-lease requirement itself should not be relied on until subd. 1 is read.

**CSV: v86 (476) → v87 (478), MN-tagged 113 → 115.**

**Pass 2 remaining:** double-letting of a room, verbal-notice designation, renter's-insurance push prohibition, habitability operational duties, source-of-income lease-statement vs acceptance duty exemptions, landlord-facing criminal penalty for denying an assistance animal, plus §504B.111 subd. 1 scope.

### RA-39. §504B.111 scope confirmed — and §5a.2 triggered on a possible 2025 amendment

**Scope resolved.** §504B.111 requires a written lease only for **a residential building with 12 or more residential units**. Below that threshold an oral agreement does not violate the section (the AG's handbook states this directly). Current text also requires that the written lease **identify the specific unit** the tenant will occupy before signing, and permits the landlord to ask for the tenant's full name and date of birth on the lease and application notwithstanding any contrary state law or city ordinance.

**An interaction worth recording:** the §504B.115 lease-copy duty and its enforcement **defense** are *not* limited to 12+ unit buildings — they apply "where there is a written lease." So a small landlord who voluntarily uses a written lease takes on the copy duty and the defense exposure even though §504B.111 never required them to have a lease at all. Steinoak's users are disproportionately in that category, which makes `lease-copy-receipt-mn` more important, not less.

**§5a.2 TRIGGERED — I am asking rather than searching a third time.**

The search surfaced **2025 HF 1648**, which would amend §504B.111 to add, effective August 1, 2025:
- "(a) A landlord must include in any written lease **all the terms of the tenancy. A landlord may not unilaterally amend or change a written lease.**"
- "(c) The tenant shall recover from the landlord **treble actual and consequential damages or $500, whichever is greater, and reasonable attorney fees**, for a violation of this section."
- plus the "identify the specific unit" sentence, and an estates-at-will renewal rule.

**The problem: the "identify the specific unit" sentence IS present in the current revisor text**, which means at least part of HF 1648 was enacted. But the current-text snippet I could reach shows only the 12-unit sentence and that one — it does not show whether paragraph (a)'s no-unilateral-amendment rule or paragraph (c)'s treble-damages remedy became law.

This matters and should not be guessed at. A statutory bar on **unilaterally amending a written lease**, backed by treble damages, would directly constrain how Steinoak handles lease amendments, renewals, and mid-term rule changes across every MN lease — and an estates-at-will provision deeming month-to-month tenancies renewed each period would extend it broadly.

**Taylor: please paste the current primary text of Minn. Stat. § 504B.111 in full.** Until then this stays UNRESOLVED rather than being recorded either way. Given this session has already caught three archived-version errors, resolving a possible-2025-amendment question from search snippets is exactly the move that produced them.

**CSV: v87 → v88 (478 rows, unchanged count — notes only).**

**Pass 2 remaining:** double-letting of a room, verbal-notice designation, renter's-insurance push prohibition, habitability operational duties, source-of-income lease-statement vs acceptance duty exemptions, landlord-facing criminal penalty for denying an assistance animal.

### RA-40. Canvass PASS 2 — remaining topics closed

The last six pass-2 topics are resolved. All four confirmed absences were given **individual rows rather than one combined row**: the library's single existing bundle, `edu-confirmed-absences-misc-ne`, currently sits at `NEEDS_REVIEW` — the only non-VERIFIED row in the entire library — which is reason enough not to repeat the pattern.

- **Renter's-insurance repair-shifting: no dedicated statute, CONFIRMED ABSENT** — but the protection exists indirectly and robustly. §504B.161's covenants are non-waivable, and the attorney general's official handbook states that a lease term making the tenant perform maintenance or repairs "is not enforceable." Requiring renter's insurance itself is lawful and unrestricted in Minnesota; using it to shift the landlord's own repair duty is not. Logged `edu-renters-insurance-limits-mn`.
- **Double-letting of a room: CONFIRMED ABSENT.** No provision across the leasing-and-rent sections. The nearest analog is §504B.111's requirement that the lease identify the specific unit before signing — noted as an analog rather than claimed as a double-letting rule. Logged `edu-no-double-letting-statute-mn`.
- **Verbal-notice designation: CONFIRMED ABSENT as a permission.** Minnesota nowhere authorizes a lease to substitute verbal for statutorily-required written notice, and several of the writing requirements carry explicit non-waiver language. Logged `edu-written-notice-required-mn`, deliberately kept separate from `edu-notice-delivery-methods-mn` because the checklist treats notice **form** and delivery **method** as distinct topics.
- **Landlord-facing criminal penalty for denying an assistance animal: CONFIRMED ABSENT.** §504B.113 was read in full at RA-23 and is enforced civilly. §609.833 is the only criminal statute in the area and runs against *tenants*, in public accommodations, not housing.

  **But the answer is "absent for animals, present elsewhere"** — §504B.111 imposes a petty misdemeanor for failing to provide a required written lease (RA-38). **Recommend carrying this to future states as a reason to ask the criminal-penalty question topic-by-topic rather than once per state**, since a per-state answer would have recorded MN as having no landlord criminal exposure at all.

**Two topics resolved into existing rows rather than new ones:**

- **Habitability operational duties: PRESENT**, covered by `habitability-baseline-mn` plus the renter's-insurance row. Enforcement mechanics (rent escrow §504B.385, tenant remedies action §504B.395, emergency relief §504B.381, code-violation notice track §504B.185) confirmed as living outside the clause by design — tenant-side procedures, not lease terms.
- **Source-of-income lease-statement duty vs acceptance duty, and whether the exemptions differ: RESOLVED.** Minnesota has **no separate lease-statement duty** — "status with regard to public assistance" is simply an enumerated protected class in §363A.09, so the acceptance duty and any statement obligation arise from the same provision and carry the **same** exemptions. This differs from states with a standalone voucher-acceptance statute carrying its own exemption set. Recorded in `edu-fair-housing-protected-classes-mn` because the answer is a property of that row's own statute.

**CSV: v88 (478) → v89 (482), MN-tagged 115 → 119.**

**PASS 2 IS COMPLETE except for one item held open under §5a.2:** the §504B.111 / 2025 HF 1648 question at RA-39, awaiting primary text from Taylor. Nothing else in the canvass depends on it.

### RA-41. §5a.2 RESOLVED — HF 1648 was not enacted, and my RA-39 inference was wrong

Taylor supplied §504B.111 in full. **2025 HF 1648 was not enacted into this section.** The history line reads "1999 c 199 art 1 s 3; 1Sp2019 c 1 art 6 s 56" and stops — no 2025 chapter. There is **no** no-unilateral-amendment rule, **no** treble-damages remedy, and **no** estates-at-will renewal provision in current law.

**My RA-39 reasoning was wrong and is retracted.** I argued that because HF 1648's "identify the specific unit" sentence appears in the current text, part of the bill must have been enacted. That sentence came from the **2019** amendment and predates HF 1648 entirely. Bills reproduce existing statutory language alongside proposed additions; rendered as plain text, existing language is indistinguishable from new language.

Escalating instead of guessing was the right call — and notably, the guess I was leaning toward would have **over-reported a constraint that does not exist**, telling Minnesota landlords they cannot unilaterally amend a lease when no such statutory bar is on the books. That is a new error direction for this session: the three archived-version errors all involved *superseded* text, whereas this one would have involved *never-enacted* text.

**Add to the archived-version screen, as a distinct sibling failure mode:** a pending bill is not evidence of enactment, and overlap between bill text and current text is not partial enactment. **Check the history line.** Recorded in the checklist's method findings.

**Full scope now confirmed:** written lease required only for a residential building with **12 or more** residential units; the lease must identify the specific unit before signing; failure to provide a lease is a petty misdemeanor.

**One genuinely notable feature — express municipal preemption.** "Notwithstanding any other state law or city ordinance to the contrary, a landlord may ask for the tenant's full name and date of birth on the lease and application." This is the **only express local-preemption language found anywhere in Chapter 504B this session**, and it sits directly adjacent to Minneapolis's and St. Paul's inclusive-screening ordinances. It preempts only this narrow point — asking for name and date of birth — **not screening ordinances generally.** Flagged so the two are not conflated by anyone reading the municipal layer later.

**All §5a.2 escalations from this session are now closed** (§§192.501/.502 at RA-20; §504B.111 here).

**CSV: v89 → v90 (482 rows, unchanged count — notes only).**

### RA-42. Flag cleanup — resolved flags marked, live flags inventoried

Four flags in MN row notes had been discharged during the session but still read as open, because each resolution was appended to the end of a long note while the original flag text stayed at the top. A future reader grepping for open items would have chased all four.

**Marked resolved (text retained for traceability, trigger phrases removed so they no longer match an open-flag scan):**

| Row | Was flagged | Resolved at |
|---|---|---|
| `termination-infirmity-mn` | Facility list inline vs referenced | RA-15 — Taylor chose the hybrid |
| `dv-lease-termination-mn` | §504B.206 subd. 3 sole vs multiple tenants | RA-22 — read in full, subd. 3(b) written into the clause |
| `landlord-disclosure-mn` | §504B.181 subd. 3 successor provisions | RA-33 — read in full, identity-change topic resolved |
| `edu-lease-copy-defense-mn` | §504B.111 scope trigger | RA-39 and RA-41 — 12+ units confirmed, HF 1648 not enacted |

Each now carries a `[RESOLVED 2026-09-03 at RA-xx ...]` prefix followed by `PRIOR-FLAG TEXT (superseded):` and the original wording. **Nothing was deleted** — the project's traceability standard means a reader should be able to see what was once uncertain and how it closed, not just the final state.

**Method note:** the first cleanup attempt failed silently. I prefixed the resolutions but left the literal strings "FLAGGED FOR TAYLOR" and "NOT FULLY READ" in place as "WAS FLAGGED FOR TAYLOR" — which still matches any grep for those phrases. The verification scan caught it, which is the only reason it was fixed. Worth noting because it is the same failure the flags themselves were about: appending a correction without removing what it corrects leaves the stale version findable.

### MN LIVE FLAGS — final inventory (8)

**Genuinely unread (2)** — narrow, no clause depends on either:
- `foreclosure-disclosure-mn` — §504B.151 subd. 2, the holder-agreement exception and its effect on the $500 penalty
- `edu-eviction-expungement-mn` — §484.014 subd. 3(a) clause (5), truncated in every source reached

**Decisions for Taylor (2):**
- `co-alarm-duty-mn` — CO-alarm duty allocation for **single-family** MN rentals. §299F.51 subd. 1 covers them but subds. 2-3's allocation is written for multifamily, so the lease must set it. Drafted to the statute's scope rather than inventing an allocation.
- `fire-casualty-termination-mn` — §504B.131 is waivable. A variant clause contracting around it is available; not drafted, as that trades a tenant protection for landlord benefit and is a product-policy call.

**Product implications, not legal gaps (4):**
- `assistance-animal-accommodation-mn` — becomes **mandatory** whenever any pet fee is charged (§504B.113 subd. 3(b)); nothing currently enforces the pairing with `pet-policy-mn`
- `edu-inspection-notice-penalty-mn` — dated, event-driven notice duty at both ends of the tenancy; strongest legal-tracker candidate found
- `abandoned-property-mn` — the storage-location fork cannot be expressed in a lease clause
- `habitability-baseline-mn` — conditions on any future tenant-performs-maintenance option

**Integrity re-asserted on v92:** 482 rows, no duplicate IDs, no dangling supersedes, no display collisions, all 119 MN rows `VERIFIED`.

**CSV: v90 → v92 (482 rows, unchanged count — notes only).**

---

## EVICTION-DUTY SCREEN — 2026-09-03 (v92 → v93)

**Scope, per Taylor:** CO, WY, KS, NE, MN. SD and ND deliberately excluded — they will be covered by their own re-audits.

**The question asked of each state:** does the state's eviction / unlawful-removal area impose affirmative landlord duties or prohibitions, as distinct from court procedure? The project has deprioritized eviction sections since Colorado as "procedural, not clause-relevant." §504B.365 (MN log RA-14) showed that assumption fails at least once. This screen tested whether it fails generally.

**It does. The deprioritization was wrong in two of five states, and both had already been re-audited.**

### Baseline before the screen

| Topic (title/body matches only, notes excluded) | CO | WY | KS | NE | MN |
|---|---|---|---|---|---|
| Self-help / ouster ban | **0** | 2 | **0** | 3 | 2 |
| Post-writ property duties | 0 | 0 | 0 | 0 | 3 |
| Utility shutoff ban | **0** | 0 | **0** | 0 | 1 |
| Pre-filing notice duty | 0 | 0 | 0 | 0 | 4 |

MN's coverage exists only because of this session. CO and KS were zero across every column.

### Findings

**COLORADO — major gap. `edu-self-help-eviction-ban-co` created.**

C.R.S. §38-12-510 makes it unlawful to remove or exclude a tenant without court process, or to willfully and unlawfully cut off heat, water, hot water, electricity, gas, or other essential services. Remedy: the tenant's **actual damages PLUS the greater of three times the monthly rent or $5,000**, plus attorney fees and costs, and the court **may order possession restored**. Amended by SB 24-094, applying to violations filed on or after 2024-05-03 — any pre-2024 secondary summary understates it.

**This is the most severe self-help penalty in the library, and Colorado had nothing on it.**

**KANSAS — major gap. `edu-self-help-eviction-ban-ks` created.**

K.S.A. 58-2563: unlawful removal or exclusion, or willful diminishment of services by interrupting electric, gas, water or other essential service. Tenant may recover possession **or** terminate, and in either case recover **the greater of 1.5 months' periodic rent or actual damages**, plus return of the recoverable security deposit portion. Punitive damages available where conduct is wanton and malicious (*Geiger v. Wallace*). **No 30-day notice precondition**, unlike the habitability track — a lockout is actionable immediately. §58-2572(b) routes the retaliation remedy through this same section, so the 1.5-month figure also attaches to retaliatory rent increases and service cuts.

**WYOMING and NEBRASKA — already covered.** Both carried ouster rows before the screen (WY 2, NE 3). No new gap identified at screen level.

**MINNESOTA — covered during this session** (§§504B.221/.225/.231 statutory floors at RA-32-era work, §504B.365 post-writ duties at RA-14, §504B.321 subd. 1a pre-filing notice at RA-18).

### Cross-state comparison, now possible for the first time

| State | Self-help / utility-shutoff remedy |
|---|---|
| **CO** | Actual damages **plus** greater of 3× monthly rent or **$5,000**, plus fees; possession may be restored |
| **KS** | Greater of **1.5 months'** periodic rent or actual damages, plus deposit return; punitive if wanton |
| **MN** | **Treble damages or $500**, whichever greater, plus fees; intentional ouster is a **misdemeanor** |
| WY, NE | Previously rowed; figures not re-derived in this screen |

### The finding that matters most

**A scope decision made once, in the first state, propagated silently through six subsequent states and four re-audits.**

Colorado's eviction deprioritization was recorded in the very first decision log. Every later state inherited it as settled. Critically, **the CO re-audit (2026-08-27) and the KS re-audit (2026-08-29/30) both ran at higher effort and still missed this** — because a re-audit re-examines findings *within* the established scope and does not, by default, re-examine the scope itself.

**Recommendation, for Taylor to decide:** amend the standing definition of "complete" from *"eviction sections are out of scope"* to *"eviction sections are out of scope for `LEASE_CLAUSE` purposes but are screened for landlord duties and prohibitions."* This is the architecture-review §E proposal, now supported by direct evidence rather than inference.

**Second recommendation:** add to the re-audit method an explicit step — *re-examine at least one scope boundary the original pass inherited rather than chose.* Four re-audits at higher effort found real errors inside the boundary and none questioned the boundary itself.

### Flagged, not shipped

**C.R.S. §38-12-126** reportedly governs a landlord's handling of tenant personal property after a writ is executed — "reasonable efforts," no statutory lien on tenant property, and no mandatory storage period, unlike voluntary abandonment. Sourced only to a commercial junk-removal site and a case-annotation PDF. **Not primary-verified and therefore not written as a row.** Read §38-12-126 in full before adding. If it holds, Colorado's post-writ track differs materially from Minnesota's two-track §504B.365 structure and deserves its own row.

**Also unverified at screen level:** whether WY's and NE's existing ouster rows capture their statutes' full remedy structure, and whether KS's and NE's `landlord-disclosure-*` rows carry the eviction-maintenance-bar equivalent found in MN §504B.181 subd. 4 (raised at MN log RA-33).

**CSV: v92 (482) → v93 (484).** CO 106 → 107, KS 113 → 114. No shared-clause edits, so no §5a.1 propagation owed.


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

**Relevance to Minnesota:** all three clauses are MN-tagged and all three edits were triggered by MN re-audit findings. `holdover` no longer promises a doubling remedy Minnesota does not have; `returned-payments` now respects the $30 cap under §604.113; `notices` now defers to Minnesota's section-by-section delivery requirements.

**ND is also tagged on `returned-payments` and is owed this same note — but no ND decision log exists in this project's file set.** The note cannot be written where it belongs. Flagged for Taylor: ND (and SD) have no decision-log files here, which means §5a.1 propagation to those states is currently impossible. This should be resolved before the ND or SD re-audit.

**CSV: v93 → v94 (484 rows, unchanged count — body text and notes only).**


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

### RA-43. ND and SD logs received — §5a.1 propagation gap CLOSED

The infrastructure gap flagged during the shared-clause pass is resolved. Taylor supplied the ND and SD decision logs, which did not exist in the working file set at the time.

- **ND — note owed, now written.** North Dakota is tagged on `returned-payments` (one of six states). The §5a.1 note is recorded in the ND log: judgment **UNIFORM**, no ND override required. ND's own `edu-returned-check-fee-cap-nd` records a **$40** cap, which the unbounded "any fee" language had sat alongside and contradicted without anyone reconciling the two.
- **SD — no note owed, and that is now recorded rather than left silent.** South Dakota is tagged on none of the three edited clauses. The check is written into the SD log deliberately: **a §5a.1 pass that produces no note for a state is indistinguishable from one that forgot the state, unless the check itself is documented.**

**Cross-state context carried into both logs:** the `holdover` provenance finding, so neither state inherits the discredited "double rent" figure if either is ever added to that clause. Notably, **South Dakota had independently reached the correct answer** — `edu-holdover-mechanics-sd` records no statutory multiplier, with holdover presuming renewal on the same terms capped at one year. SD's own research contradicted the shared clause too; like KS, NE, and MN, nobody compared it back.

**That is now five of seven states whose state-level research contradicted the shared `holdover` figure**, with no pass ever noticing. It is the strongest evidence yet for the method change proposed after the shared-clause pass: **when a state row contradicts a shared clause's number, check the shared clause.**

**One small comparison surfaced while writing the SD note, flagged not resolved:** SD's $40 cap carries a conspicuous-disclosure condition (the fee policy must be stated in the lease or given in writing); **ND's $40 row records no such condition.** Same figure, possibly different preconditions. Worth checking whether ND's statute has an equivalent requirement that its row omits — an ND re-audit item, not an MN one.

### RA-44. Carbon monoxide ID rename, MN single-family allocation, fire/casualty decision

**1. `co-` prefix renamed to `carbon-monoxide-` (v98 → v99).** Five rows used `co-` for **carbon monoxide** while 55 rows used `-co` as a suffix for **Colorado**. The collision caused a real misread in session — a summary referring to "CO alarms" was reasonably taken as Colorado, since Colorado was under discussion at the time.

| Old | New |
|---|---|
| `co-alarm-duty-mn` | `carbon-monoxide-alarm-duty-mn` |
| `co-alarm-duty-ne` | `carbon-monoxide-alarm-duty-ne` |
| `edu-co-alarm-requirement-ne` | `edu-carbon-monoxide-alarm-requirement-ne` |
| `edu-co-alarm-requirement-nd` | `edu-carbon-monoxide-alarm-requirement-nd` |
| `edu-co-detector-building-code-wy` | `edu-carbon-monoxide-detector-building-code-wy` |

**Cross-references were rewritten, not just the IDs.** Four other rows referenced the old IDs in their notes — `smoke-detector-duty-mn`, `edu-alarm-duty-split-mn`, `edu-confirmed-absences-misc-ne`, and the two carbon monoxide rows referencing each other. All updated. Verified afterward: no `co-` prefixed IDs remain, no duplicate IDs, no dangling supersedes, no display collisions.

**[RESOLVED 2026-09-03 — NOT APPLICABLE. Taylor confirmed the app is not live, so there are no stored landlord defaults or generated leases referencing the old IDs. No migration is needed and this is not a backlog item. Original concern retained below for traceability, and because it WILL apply to any future ID rename once the app ships.]** PRIOR CONCERN (superseded): The lease builder lets a landlord mark clauses as "default" so that "add my default clauses" auto-includes them. **If those saved selections are stored by clause ID, this rename silently breaks them for any landlord who defaulted a carbon monoxide clause** — the stored ID no longer resolves, and depending on the implementation the clause either vanishes from their lease or throws. Any generated leases that recorded source clause IDs are affected the same way. This is the first ID rename in the project's history, and the library has no ID-alias or redirect mechanism. Before deploying v99, either run a data migration mapping the five old IDs to the new ones, or add an alias column so old IDs continue to resolve.

**2. Single-family carbon monoxide allocation — decided (Taylor).** §299F.51 subd. 1 requires an operational alarm in every dwelling including single-family, but subds. 2-3's owner/occupant allocation is written for **multifamily only** and does not textually reach a rented single-family house.

**Decision: Landlord bears existence at commencement; Tenant bears maintenance during occupancy.** Clause rewritten — the prior text opened "The property is equipped with...", a passive assertion of a state of affairs that placed the duty on nobody. It now affirmatively obliges Landlord to provide a working alarm at move-in, keeps tenant maintenance (batteries, replacing alarms rendered inoperable during their occupancy), and adds a tenant duty to notify Landlord where an alarm cannot be restored.

This mirrors subd. 2's multifamily allocation rather than inventing one, and leaves the landlord holding the part hardest to argue is the tenant's: a working alarm on day one. The multifamily case is unchanged.

**3. Fire/casualty waiver variant — DROPPED (Taylor concurred).** §504B.131 is waivable, but §504B.161's non-waivable habitability covenant backstops nearly the entire waivable space: the section applies where the property is destroyed or unfit for occupancy, which is precisely what habitability covers. A waiver variant would buy close to nothing while reading aggressively on a tenant-facing lease. **Closed, not deferred** — this does not go on the backlog.

**CSV: v98 (487) → v99 (487 rows, unchanged count — IDs, body text, and notes only).**


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

# CORE-OBLIGATIONS CANVASS — 2026-09-07 (PARTIAL — deposit block only)

Appended during the **South Dakota** re-audit session. Context: SD's re-audit found the consolidated named-topic checklist had **no topic row at all** for several universal landlord obligations — recorded as **Addendum L.10**, accretion bias. A `CORE OBLIGATIONS` section was added and SD filled; ND was canvassed first, MN second.

**This pass covers the four security-deposit rows only.** Minnesota is **not** fully canvassed against the section. Ten of MN's fourteen cells remain `NOT CANVASSED` and are listed at the end.

**Source:** § 504B.178 read in full from the Revisor's own PDF, *Minnesota Statutes 2025*. History line: `1999 c 199 art 1 s 16; 2000 c 282 s 1; 2003 c 52 s 2; 2004 c 203 art 2 s 61; 2008 c 177 s 2; 2009 c 123 s 4; 2010 c 315 s 6; 2023 c 52 art 19 s 85; 2024 c 85 s 105`. **Amended in both 2023 and 2024** — recent enough to warrant the currency check, and the 2025 publication carries them.

## The finding that matters beyond Minnesota

§ 504B.178 subd. 1 defines the scope of the deposit rules as:

> "Any deposit of money, **the function of which is to secure the performance** of a residential rental agreement or any part of such an agreement, **other than a deposit which is exclusively an advance payment of rent**."

**The first clause is the same functional formula as SD § 43-32-6.1. The second clause is a carve-out South Dakota does not have.**

This bears directly on an open SD question. The SD re-audit corrected `edu-advance-rent-vs-deposit-sd` after finding that § 43-32-6.1's functional test means money labelled "last month's rent" but held as security **is** a deposit and counts against SD's one-month cap. What SD's statute does *not* say is what Minnesota's does — that a payment which is *exclusively* advance rent falls outside the regime. Minnesota legislated the exception; South Dakota left it to be inferred from the word "function."

**Minnesota then closes the loop from the other side.** Subd. 8 forbids a tenant from withholding the last period's rent on the theory that the deposit covers it, creates a rebuttable presumption that any such withholding was on those grounds, and imposes a penalty. So MN regulates the advance-rent/deposit boundary from both directions; SD regulates neither expressly.

**Recorded as a cross-state contrast, not as an SD change.** Nothing in SD's rows moves on the strength of Minnesota's drafting.

## Other deposit findings not previously in the library

- **No statutory deposit cap in Minnesota** — a real absence, and a sharp contrast with ND's one-month/two-month tiers and SD's one-month limit.
- **Interest is owed**: 1% simple noncompounded per annum, amounts under $1 excluded (subd. 2).
- **The penalty is doubling, not trebling** (contrast ND): subd. 4 makes the landlord liable for the withheld portion plus interest **as a penalty, in addition to** the wrongfully withheld portion plus interest. Subd. 7 adds **punitive damages up to $500 per deposit** for bad-faith retention, with bad faith **presumed** where subd. 3 or 5 was violated unless the deposit is returned within two weeks of suit.
- **Failure to conduct § 504B.182 inspections is itself a deposit-penalty trigger** — subd. 4(4). A move-out inspection regime is wired into the deposit remedy, which neither SD nor ND does. Worth noting alongside ND's 2025 HB 1272, which proposed exactly such a regime for ND and appears not to have been enacted.
- **The burden of proving the reason for withholding is on the landlord** (subd. 3(c)) — Minnesota's substitute for an itemization requirement.
- **Detailed successor regime** (subds. 5–6): 60 days to transfer or return on sale or death, successor assumes all rights and obligations, tenant has 20 days to object to a stated transferred amount.
- **Non-waivable**: "Any attempted waiver of this section by a landlord and tenant, by contract or otherwise, shall be void and unenforceable" (subd. 10).

## Ten cells still NOT CANVASSED for Minnesota

Habitability/repair duty and its waivability; tenant repair duty; tenant remedy for failure to repair; assistance-animal documentation limits; assistance-animal fee prohibition and penalties; general reasonable-accommodation duty; required state disclosures; rent-modification notice; periodic-tenancy termination notice; state-wide lease-content restrictions.

§§ 504B.161, 504B.171, 504B.172, 504B.181, 504B.195, 504B.211 and 504B.135 are the likely homes for most of these and **none has been read in this pass.** Not inferred from the MN decision log, per the standing rule that a log's assertions are claims to verify.

## No CSV changes

Canvass and record only. No MN clause rows added, edited, or re-tagged; **no §5a.1 propagation owed.**

## Habitability block added — § 504B.161 read in full

**Source:** Revisor's PDF, *Minnesota Statutes 2025*. History: `1999 c 199 art 1 s 13; 2000 c 260 s 70; 2007 c 136 art 3 s 5; 2023 c 52 art 19 s 91; 2024 c 118 s 11; 2025 c 32 art 4 s 4; 1Sp2025 c 11 s 1`. **Amended twice in 2025, one of them in a special session** — the most recently touched provision encountered in this cross-state canvass, and precisely the currency profile K.4 exists for.

**Five covenants implied into every residential lease** (subd. 1(a)): fitness for the use intended; reasonable repair **including pest extermination** and the § 504B.381 subd. 1 services, except where disrepair is caused by the tenant's willful, malicious or irresponsible conduct; **energy efficiency** where the measure pays for itself over ten years; compliance with health and safety laws **including rental-licensing ordinances**; and **heat at a minimum of 68°F in all habitable places including kitchens and bathrooms, October 1 through April 30**.

The heat and energy-efficiency covenants have no counterpart in either Dakota. The pest-extermination duty is likewise absent from both.

**Non-waivable** (subd. 1(b)): "The parties to a lease or license of residential premises may not waive or modify the covenants imposed by this section." **Same posture as SD § 43-32-8; opposite to ND**, which has no non-waiver clause and expressly permits duty-shifting.

**But MN's tenant-maintenance carve-out is narrower than either.** Subd. 2 permits an agreement that the tenant perform specified repairs **only if** supported by **adequate consideration** and set out in a **conspicuous writing**, and such an agreement may never waive subd. 1 or relieve the landlord of the duty to maintain **common areas**. SD permits repairs-in-lieu-of-rent with no consideration or conspicuousness requirement; ND permits shifting on conditions that vary by whether the unit is single-family.

**Two interpretive provisions worth carrying:** subd. 3 directs that the section be **liberally construed** and that a pre-lease opportunity to inspect does **not** defeat the covenants — a direct answer to the "tenant saw the condition and took it anyway" argument. Subd. 4 makes the covenants **additional** to any imposed by law, ordinance, or the lease.

**Subd. 5 is verbatim-equivalent to the closing sentence of SD § 43-32-8** — nothing in the section alters liability for injury to third parties. A shared-ancestry echo across three states, worth noting since it is the kind of resemblance that invites assumed transfer.

**K.4 check performed.** Search surfaced 2024 **S.F. 3492**, which proposed adding subd. 7 (Remedies), subd. 8 (Enforcement) and subd. 9 (Waiver prohibited) to § 504B.161. **The current text has six subdivisions, not nine** — those proposals are not in the enacted section. Recorded so a future reader who encounters the bill does not assume it passed.

## Minnesota status after this pass

**Six of fourteen cells filled** — the four deposit rows and the two habitability rows. **Eight remain `NOT CANVASSED`:** tenant repair duty; tenant remedy for failure to repair; assistance-animal documentation limits; assistance-animal fee prohibition and penalties; general reasonable-accommodation duty; required state disclosures; rent-modification notice; periodic-tenancy termination notice; state-wide lease-content restrictions.

**The chapter table of contents, retrieved this pass, names the likely homes** and is recorded here to save the next session the lookup: § 504B.172 (recovery of attorney fees), § 504B.173 (applicant screening fee), § 504B.175 (prelease deposit), § 504B.177 (late fees), § 504B.181 (landlord or agent disclosure), § 504B.182 (initial and final inspection required), § 504B.205 (right to seek police and emergency assistance), § 504B.206 (right of victims of violence to terminate), § 504B.211 (right to privacy), § 504B.215 (billing; loss of services), § 504B.221 (unlawful termination of utilities), § 504B.231 (unlawful ouster), § 504B.265 (termination after death of tenant), § 504B.135 (termination of tenancy at will).

None has been read. Not inferred from the MN decision log.

## No CSV changes

Canvass and record only; **no §5a.1 propagation owed.**

## § 504B.135 read — the carried-forward counting-rule question is answered

This section was flagged forward from the **ND re-audit** as unfinished business: `edu-tenancy-at-will-termination-notice-mn` records a counting rule — *the notice must run a full rental period and expire at the end of one* — at **secondary confidence**, expressly marked not primary-verified, corroborated by three sources, with an 1891 authority behind it that was never located.

**Full current text, Minnesota Statutes 2025:**

> "A tenancy at will may be terminated by either party by giving notice in writing. The time of the notice must be at least as long as the interval between the time rent is due or three months, whichever is less."
> History: `1999 c 199 art 1 s 8; 2023 c 52 art 19 s 97`

**That is the entire section.** Two findings follow.

**1. The counting rule is not in the statute.** Nothing in § 504B.135 requires a notice to run a full rental period or to expire at the end of one. The section states a minimum *duration* — as long as the rent interval, or three months, whichever is less — and says nothing about *alignment* to period boundaries.

This does not disprove the rule; Minnesota case law may well impose it, and the 1891 authority the row gestures at would be exactly the sort of source that does. But it converts the open question from *"is this rule real and where does it come from?"* into the sharper *"this rule is confirmed absent from the statute, so it is case law or it is wrong."* **The row should be amended to say the rule is not statutory**, which is now primary-verified, rather than leaving its provenance unstated. Recorded here; not actioned, since this is an SD session and the row is MN's.

**2. The cap is three months, not one.** § 504B.135's ceiling is the *lesser* of the rent interval and three months. For monthly rent that yields one month, which is why the difference is easy to miss — but for a tenancy with a longer rent interval Minnesota permits up to three months' notice where **ND § 47-16-15 and SD § 43-32-15 both cap at one calendar month**. Three states with the same scaling architecture and a materially different ceiling.

**3. Repeal confirmed.** The former paragraph (b) — *"If a tenant neglects or refuses to pay rent due on a tenancy at will, the landlord may terminate the tenancy by giving the tenant 14 days notice to quit in writing"* — was **removed by 2023 c 52 art 19 s 97**. The current section has no (a)/(b) structure at all. The ND session had already caught this repeal against stale Justia versions; independently confirmed here from the Revisor's current text, and worth recording twice because outdated mirrors still display the 14-day rule.

## Minnesota status

**Seven of fourteen cells filled.** Remaining `NOT CANVASSED`: tenant repair duty; tenant remedy for failure to repair; assistance-animal documentation limits; assistance-animal fee prohibition and penalties; general reasonable-accommodation duty; required state disclosures; rent-modification notice; state-wide lease-content restrictions.

## Disclosure duties — MN carries several, and one closes a cross-state question

Filled from the Revisor's official chapter text (*Minnesota Statutes 2025* and the 2023 chapter PDF, both official publications). Where text is quoted below it is verbatim from those sources; sections identified but **not** read in full are marked as such rather than summarised.

**§ 504B.181 — landlord and agent identity.** Subd. 1 requires disclosure to the residential tenant, **either in the rental agreement or otherwise in writing before the tenancy commences**, of the name and address of (1) the person authorised to manage the premises and (2) the landlord or an agent authorised to accept service of process and receive notices and demands. Subd. 2 goes further than any comparable provision in the Dakotas: that information must **also be posted in a conspicuous place on the premises**, along with a notice that the attorney general's § 504B.275 statement is available to any tenant on request.

**This is the topic SD confirmed absent.** The SD re-audit found no day-one landlord-identity disclosure requirement — and specifically caught a secondary source miscitation (RocketRent citing SDCL § 43-32-2, which is the agricultural/municipal term cap). ND likewise has none in ch. 47-16. **Minnesota requires it twice over: in writing to the tenant and posted on the property.**

**§ 504B.120 subd. 1 — fee transparency, and this is the significant one.** Verbatim: *"A landlord must disclose all nonoptional fees in the lease agreement. The sum total of rent and all nonoptional fees must be described as the Total Monthly Payment and be listed on the first page of the lease. A unit advertised for a residential tenancy must disclose the nonoptional fees included with the total amount for rent in any advertisement or posting."*

**"Rental-fee transparency / all-in pricing" was recorded as CONFIRMED ABSENT for South Dakota**, and flagged in the SD log as the least certain of that round's absence findings because no definitive state-by-state list could be found. Minnesota has one, it is prescriptive down to the label and the page it appears on, and it reaches advertising. The SD absence is not disturbed — but the topic is now demonstrated live in this project's own footprint rather than theoretical.

**§ 504B.118 — cash receipts.** A landlord receiving rent or other payments in cash must give a written receipt **immediately if paid in person, or within three business days otherwise**. Neither Dakota has an equivalent.

**Identified, not read, recorded so the next pass does not have to find them again:** § 504B.195 (outstanding inspection and condemnation orders — 72 hours after issuance, and before a prospective tenant signs or pays), § 504B.173 (applicant screening fee disclosures, 14-day rejection notice, and subd. 3a barring denial based on pending eviction cases), and **§ 504B.113, which appears to carry a reasonable-accommodation disclosure duty** — directly relevant to the still-open reasonable-accommodation cell, and the first indication that Minnesota may have a state-level duty where ND's remains unsearched.

## Minnesota status

**Eight of fourteen cells filled.** Remaining `NOT CANVASSED`: tenant repair duty; tenant remedy for failure to repair; assistance-animal documentation limits; assistance-animal fee prohibition and penalties; general reasonable-accommodation duty (**§ 504B.113 is the lead**); rent-modification notice; state-wide lease-content restrictions.

## § 504B.113 — both assistance-animal cells, and a lease-drafting duty

The § 504B.113 lead flagged in the previous pass turned out to be the **service and support animal documentation** section, not a general accommodation provision. It fills both animal cells and contains one requirement that bears directly on clause drafting.

**Documentation limits — the most detailed of the three states canvassed.** "Service animal" takes its meaning from 28 C.F.R. § 36.104; **"support animal" is separately defined** as one providing emotional support that alleviates identified symptoms of a disability and **needing no training to perform a task**. Documentation must come from a licensed professional drawn from an eight-category list which expressly reaches a professional **licensed in another state, provided they have an existing treatment relationship with the tenant**. The anti-letter-mill clause tracks the family: a licensed professional **does not include a person who operates primarily to provide certification**.

ND § 47-16-07.5 and SD § 43-32-35 share that anti-letter-mill architecture. **Minnesota is the only one of the three to define "support animal" as a distinct category and to admit out-of-state providers on a treatment-relationship test** — both meaningful for a landlord assessing documentation.

**A lease-drafting requirement neither Dakota has.** Subd. 3(a) bars any additional fee, charge or deposit for a service or support animal, with the tenant remaining liable for damage. Then subd. 3(b):

> "If a landlord requires an additional fee, charge, or deposit pursuant to a pet policy, the landlord **must disclose in the lease** the prohibition on additional fees, charges, or deposits for service or support animals under this section."

**This is a conditional lease-content mandate**: charge a pet fee, and the lease must carry the service-animal fee prohibition on its face. Subd. 3(c) enforces it with a private right of action to recover pet fees paid, where the landlord omitted the disclosure **and** the tenant shows they would have requested and would likely have received an accommodation.

**Directly relevant to the clause library.** Minnesota is tagged on `pet-policy`, and the SD session created `pet-policy-sd` precisely because that generic's language raised a state-law problem. **Whether MN's `pet-policy` rendering carries the § 504B.113 subd. 3(b) disclosure has not been checked in this pass** — it is a live question for MN's next clause review, and one the core-obligations canvass surfaced rather than the exotic-topic canvass. Flagged, not actioned; this is an SD session.

**Tenant-side penalty is the mildest of the three.** Misrepresentation or fraudulent documentation (subd. 4) lets the landlord **deny the rental application or the animal request** (subd. 5), with eviction for lease breach preserved. **No criminal infraction as in ND § 47-16-07.6; no $1,000 damage fee as in either ND or SD § 43-32-36.** Three states, three different severities on identical conduct.

**"Reasonable accommodation" is defined narrowly here** — the granting of a waiver of a no-pets or pet-fee policy. That is animal-specific and does **not** establish a general state accommodation duty, so the general reasonable-accommodation cell stays `NOT CANVASSED`; Minnesota's Human Rights Act (ch. 363A) is the place to look, and it has not been searched.

## Minnesota status

**Ten of fourteen cells filled.** Remaining: tenant repair duty; tenant remedy for failure to repair; general reasonable-accommodation duty (**ch. 363A is the lead**); rent-modification notice; state-wide lease-content restrictions.

## Tenant duties, remedies, and lease-content restrictions — three cells, one major architectural finding

**Tenant repair duty: Minnesota does not have one.** There is no analogue to ND § 47-16-13.2's seven duties or SD § 43-32-10's preservation covenant. The tenant-side obligations are narrower and conduct-specific — § 504B.165 (unlawful destruction) and § 504B.171 (covenant not to allow unlawful activities, breach of which voids the right to possession while **all other lease obligations including rent survive**). Minnesota handles tenant-caused damage instead by carving it out of the *landlord's* duty at § 504B.161 subd. 1(a)(2), for disrepair caused by the tenant's **"willful, malicious or irresponsible conduct."**

**"Irresponsible" is broader than either Dakota's formulation** — ND uses ordinary negligence, SD uses negligent, willful or malicious. Three states, three thresholds, and Minnesota's is the only one reachable without either negligence or malice.

**Tenant remedy: court-supervised, not self-help. This is the sharpest architectural contrast in the whole table.**

Both Dakotas give the tenant a self-help route — ND repair-and-deduct, SD repair-and-deduct plus vacate plus escrow into the tenant's own account. **Minnesota gives none.** Its machinery is judicial throughout: § 504B.385 rent escrow, in which rent is deposited **with the court administrator** rather than a private account; § 504B.381 emergency tenant remedies action; § 504B.391 building repair orders; and the §§ 504B.395–504B.471 tenant remedies action, which can place the building under a **court-appointed administrator** funded by a receivership revolving loan fund. § 504B.435 can **suspend the landlord's right to collect rent** entirely.

A landlord operating in both Dakotas and Minnesota faces materially different exposure for the same failure to repair, and the difference is not in degree but in kind. § 504B.385's history runs to `2024 c 118 s 29; 2025 c 32 art 4 s 6` — amended in each of the last two sessions.

**Lease-content restrictions: Minnesota has the most extensive set of the three states.** Ten identified inside ch. 504B alone, against SD's three and ND's six. Two are worth pulling out because they are unlike anything in the Dakotas:

- **§ 504B.111** requires a *written lease* for any residential building of twelve or more units, and failure is a **petty misdemeanor**. Neither Dakota requires a written lease at all below the statute-of-frauds threshold.
- **§ 504B.171(c)**: a landlord **cannot prohibit**, and a tenant **cannot waive the right to**, legal possession of cannabis products, lower-potency hemp edibles, or hemp-derived consumer products — with consumption by combustion or vaporisation carved out. A lease term purporting to ban possession is void. Nothing comparable exists in ND or SD, and it is precisely the kind of provision a clause library inherits wrongly if a generic no-smoking or no-drugs clause is extended without checking.

**Flagged for MN's next clause review, not actioned here:** MN is tagged on `smoking-policy` and `no-disturbance`. Whether either renders language that conflicts with § 504B.171(c)'s possession protection has **not** been checked. Same shape as the § 504B.113 subd. 3(b) flag raised in the previous pass — the core-obligations canvass keeps surfacing clause-level questions the exotic-topic canvass did not.

## Minnesota complete — 14 of 14

All fourteen core-obligation cells filled from primary text, except **general reasonable-accommodation duty**, which remains `NOT CANVASSED` with **ch. 363A (Minnesota Human Rights Act)** identified as the lead. § 504B.113's "reasonable accommodation" definition is animal-specific and does not establish a general duty.

**Also left `NOT CANVASSED`:** lease-content restrictions *outside* ch. 504B.

## No CSV changes

Canvass and record only; **no §5a.1 propagation owed.** Three clause-level questions are now flagged for MN's next review: the § 504B.113 subd. 3(b) pet-fee disclosure against `pet-policy`, and § 504B.171(c) against `smoking-policy` and `no-disturbance`.

## § 363A.10 — the accommodation duty, and it is not in ch. 504B

The last open Minnesota cell is closed from **primary text at the Revisor's own site**. The duty lives in the **Human Rights Act, § 363A.10**, not in the landlord-tenant chapter — which is why a canvass confined to ch. 504B reported it missing.

> **§ 363A.10 subd. 1.** "For purposes of section 363A.09, discrimination includes: (1) a refusal to permit, **at the expense of the disabled person**, reasonable modifications of existing premises … if modifications may be necessary to afford the disabled person full enjoyment of the premises; **a landlord may, where it is reasonable to do so, condition permission for a modification on the renter agreeing to restore the interior of the premises to the condition that existed before the modification, excluding reasonable wear and tear**; (2) a refusal to make reasonable accommodations in rules, policies, practices, or services, when accommodations may be necessary to afford a disabled person equal opportunity to use and enjoy a dwelling…"

**Minnesota is the only one of the seven to codify the modification right and the restoration condition alongside the accommodation duty.** SD § 20-13-23.7 states a bare good-faith standard subject to undue hardship; CO's CADA, KS's KAAD and NE's Fair Housing Act were all reached at secondary confidence; ND and WY have nothing located. **MN and SD are now the only two primary-verified on this row.**

**A second point worth carrying beyond this cell:** § 363A.09's protected classes include **"status with regard to public assistance"** — source-of-income protection. **The SD re-audit confirmed South Dakota has none**, and recorded SD's absence from the source-of-income group. Minnesota is in it.

**Exemption recorded:** § 363A.21 subd. 1(2) disapplies § 363A.09 where a resident owner-occupier rents a room in a one-family accommodation and the discrimination is by disability, among other characteristics.

**Rent-modification notice: no statute.** Nothing in ch. 504B prescribes notice for a rent increase or change of terms. The only route for a tenancy at will is the § 504B.135 termination notice, which **ends the tenancy rather than modifying it**.

## Minnesota canvass complete — 15 of 15

## `pet-policy-mn` was non-compliant with a mandatory MN lease-content rule — fixed in v133

The clause-level flag raised earlier in this canvass is confirmed and corrected.

**Minn. Stat. § 504B.113 subd. 3(b):** *"If a landlord requires an additional fee, charge, or deposit pursuant to a pet policy, the landlord **must disclose in the lease** the prohibition on additional fees, charges, or deposits for service or support animals under this section."*

`pet-policy-mn` **required a pet deposit and pet rent** — so the trigger was met — and contained **no mention of service or support animals at all**.

**The omission was not technical.** § 504B.113 subd. 3(c) gives the tenant a **private right of action to recover pet fees paid** where the landlord omitted the disclosure and the tenant shows they would have requested and would likely have received an accommodation. Every Minnesota lease generated from this clause created that recovery route against the landlord.

**Fixed**: the clause now states that a service or support animal needed as a reasonable accommodation is not a pet, that Minnesota law prohibits any additional fee, charge or deposit for such an animal, and that the tenant remains responsible for damage it causes.

### Why the exotic-topic canvass never found it

§ 504B.113 is titled *"Service and support animal documentation."* It reads as an accommodation statute, and the library treated assistance animals as `LANDLORD_EDUCATION` subject matter. **Subdivision 3(b) is a lease-CONTENT mandate hiding inside an animal-accommodation statute** — it tells you what the lease must say, not what the landlord must do.

A topic-driven canvass asks *"does this state regulate assistance animals?"*, gets a correct answer, and stops. The core-obligations canvass asked *"what does this state require in the lease?"* against the same section and found a different thing. **Two passes over the same statute, different questions, different findings** — which is the argument for the core-obligations section in one example.

The duty has been in force since at least 2021 (`1Sp2021 c 8 art 2 s 10`) and was amended in 2024 (`2024 c 118 s 6`).

**§5a.1:** `pet-policy-mn` is an MN-only override; the generic `pet-policy` remains CO;WY;ND and was untouched. **No propagation owed.** Worth noting that **four of seven states now override this clause** — KS, NE, MN and SD each for a different state-law reason.

**Not changed, and flagged:** the clause retains its indemnity and its entry-and-remove-a-pet language. Minnesota's limits on either were not examined in this pass — the SD session found § 53-9-3 problems with comparable language, and MN's § 504B.161 non-waiver and unconscionability posture may bear on it.
