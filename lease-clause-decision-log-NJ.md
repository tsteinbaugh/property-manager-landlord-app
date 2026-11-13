# New Jersey — lease-clause decision log (state #12)

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL) is closed. **No re-audit of any completed state is planned, now or later.** "Re-audit" means re-scrubbing everything for a state, and that won't happen. Targeted work is welcome: going back to re-verify or fix a specific row or topic in a completed state (a scalpel, not a hammer) needs no special justification; just say what and why. The word "re-audit" throughout these files refers to the one-time settings re-run of Aug–Sep 2026, which is finished. Older phrases such as "flag for the X re-audit", "live item for the X re-audit", "when X is next revisited" or "screen the completed states on their next revisit" are historical and dead: they are not a queue. Do not propose, plan or mention a re-audit, and do not park anything "for the re-audit". If something specific in a completed state looks wrong or unverified, say what and why and propose the targeted fix.

**Date:** 2026-09-26 · **Settings:** Opus, high effort, ordinary search/fetch (two lookups, §1.3). Research mode not yet used.
**Scope:** New Jersey state law only. Municipal ordinances are flagged where met, not resolved (instruction 20).
**Input CSV:** `lease-clauses.csv`, 800 rows, 760 active; active counts CA 150, CO 114, KS 114, MN 119, ND 110, NE 111, NV 102, OH 73, SD 90, TX 128, WY 98, NJ 0. No duplicate ids. **Instruction 13/27 check failed on one row** (§0.1).
**Output CSV (draft 2, see §10):** 828 rows, 789 active. **NJ 71 active: 69 VERIFIED, 2 NEEDS_REVIEW** (after §11). 43 shared rows tagged NJ, 17 new NJ lease clauses (including the rewritten dormant row), 10 education rows. Other states' active counts unchanged. No duplicate ids, no dangling `supersedes`, no display collisions, no new row with blank `states`.

---

## 0. Completion status — read this first

**FINAL STATE (after §14): the NJ pass is complete.** 79 active NJ rows, **all VERIFIED**; no held rows; checklist complete; proof-of-absence searches done. Earlier rows in this table are kept as the record.

| | Status |
|---|---|
| Primary text read | **Statutes:** N.J.S.A. 46:8 (whole chapter, 46:8-1 to 46:8-64; the table of contents confirms there are no sections 46:8-11 to 46:8-18); 2A:18-53 to 2A:18-60, 2A:18-61.1 to 2A:18-61.12, 2A:18-72 to 2A:18-84; 2A:39-1 to 2A:39-8 (whole chapter); 2A:42 (whole chapter; the table of contents confirms there are no sections 2A:42-14 to -73 or -79 to -84); 2A:50-69 to 2A:50-72; 2C:33-11.1; 52:27D-437.1 to 52:27D-437.20. **Regulations:** N.J.A.C. 5:10 (all except subchapters 1, 1A and 1B), from the nj.gov OAL compilation current to 2023-08-07 (§1.2). |
| Step 1 — tag first | **Done against the text read.** 43 shared rows tagged NJ (§2.1). 7 superseded by NJ overrides (§2.2). 4 held (§2.3). |
| Step 2 — new NJ rows | 17 lease clauses, including the rewritten dormant row, and 10 education rows (§3). **No shared-row text edited**, so no propagation is owed. |
| Instruction 24 families | **Both closed.** `security-deposit-return-nj`; `assistance-animal-accommodation-nj` (N.J.S.A. 10:5-29.2), §10. |
| Dormant row | `security-deposit-interest-nj` **rewritten and activated** (§5). |
| Named-topic checklist / NJ column | **Done** — NJ column in all 10 tables (69 rows); 20 new topics; candidate-topic table (126 refs: 75 answered, 48 not located, 2 not checked, 1 N/A); instructions 31–32 added. |
| Layout rules | **9 found** (§4). |

### 0.1 Instruction 13/27: one pre-existing failure, not touched

`security-deposit-installments-co` (CSV line 127) has a blank `verification_status`, the invalid `rule_type` `REQUIRED/CONSTRAINED`, blank dates, and notes pointing to a `lease-clause-citations.csv` that isn't in the handoff set. It's an inactive CO row, so it shows on no lease. The TX log recorded zero blank statuses at close, so the row changed after Texas. **Out of scope for the NJ pass (Taylor, 2026-09-26): being resolved separately.** Not touched here.

**Resolved 2026-09-26 (Claude Code, at sync).** This was a missed restore, not a Colorado problem. The 2026-09-25 CO restore copied status back only for active rows, and this row was already inactive. Its record in `lease-clause-citations-CO.csv` is `REMOVED` / `VERIFIED`: the clause was pulled on 2026-09-13 because Colorado law gives no deposit-installment right. The CSV row now carries `VERIFIED` (the finding that removed it is verified), dates 2026-08-18 / 2026-09-13, and a do-not-reactivate note. It stays inactive. `REQUIRED/CONSTRAINED` is not invalid: `/` is the library's multi-type separator (three `REQUIRED/PROHIBITED` rows use it). No blank status remains in the CSV. No Colorado re-audit is involved or planned (see the standing rule at the top).

## 1. Process notes

### 1.1 Statute source and currency
All statutes come from the official N.J.S.A. text Taylor pasted, with a chapter-law history line on each section. The newest landlord-tenant chapter laws seen are **P.L.2025, c.405** (the application-fee cap, N.J.S.A. 46:8-18.1) and **P.L.2024, c.74** (lead-safe certification amendments). **Not yet done:** a sweep of the 2026–2027 session for landlord-tenant bills already signed (instruction 17 and kickoff item 2). Until it runs, every row's currency is "as of the pasted text".

### 1.2 Regulation currency: a stamped cut-off
Every N.J.A.C. 5:10 page reads *"adopted and published through the New Jersey Register, Vol. 55 No. 15, August 7, 2023."* Taylor confirmed nj.gov offers no newer edition. To compensate:
- **N.J.A.C. 5:10-27.1** was spot-checked against the Cornell LII copy, which updates quarterly. It shows the same text and the same last amendment (R.2023 d.089, effective 2023-08-07).
- **One web search** found no later adoption touching the sections used.
- **One DCA adoption notice (`adopt_DCA_5_10_tier`) is undated and unread.** Check it before these rows close.

Each row built from 5:10 records this limit (instruction 16).

### 1.3 Section-open vs recall (instruction 22)
Every row was drafted with the section text in view. **Case law is recall-only and is not relied on anywhere.** Where a rule depends on case law (habitability and rent abatement, mitigation, late fees as "rent", unconscionable increases), the row says so and either holds or goes in as `NEEDS_REVIEW`.

## 2. Step 1 — tag first

### 2.1 Tagged NJ as written (43)
`rent-payment`, `due-at-signing`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `tenant-maintenance`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `services-utilities-provided` (base), `utilities-paid-by-landlord`, `appliances-included`, `landlord-maintenance`, `landlords-access`, `possession-delay`, `default-by-tenant`, `early-termination`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-insurance-requirement`, `assigned-parking-space`, `guest-policy`, `guest-policy-day-limit`, `common-area-use`, `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `lead-based-paint`, `hoa-compliance`, `keys`, and the variants `tenants-property-insurance-ks-oh-ca`, `parking-ks-oh-ca`, `storage-space-ks-oh-ca`.

Every tagged row has an `NJ:` note naming the controlling section. The ones that matter:
- **`landlords-access`:** buildings of 3+ units require access on "reasonable notification, which under ordinary circumstances shall be one day" (N.J.A.C. 5:10-5.1(c)). The clause's 24 hours matches. Nothing read sets an entry rule for 1–2 unit rentals.
- **`utilities-responsibility`:** in a building of 3+ units, heat can't be shifted to the tenant except by a written agreement for separately billed equipment (N.J.A.C. 5:10-14.4(c)). That agreement is `tenant-supplied-heat-nj`.
- **`early-termination`:** tagged as lawful but exposed, the same posture as KS, NE, OH, NV and TX. The fee is exposed to NJ mitigation case law, which isn't read.
- **`default-by-tenant`:** it doesn't expressly reserve a right of reentry, which N.J.S.A. 2A:18-61.1(e)(1) requires for the lease-breach eviction ground. That gap is filled by the new opt-in `right-of-reentry-nj`.

### 2.2 Not tagged — NJ override written instead (7)

| Base | Override | Why the base fails in NJ |
|---|---|---|
| `security-deposit-return` (blank-states parent) and `security-deposit-use` | `security-deposit-return-nj` | `-use` can be read to allow applying the deposit to rent mid-tenancy, which N.J.S.A. 46:8-21.1 bars. "Use" is folded into the return row, following the WY pattern. |
| `late-fee` | `late-fee-nj` | A tenant-set grace period can violate the 5-business-day grace period for seniors and benefit recipients (N.J.S.A. 2A:42-6.1, 2A:42-6.3). |
| `acceptable-payment-methods` | `acceptable-payment-methods-nj` | An electronic-only payment list violates N.J.S.A. 46:8-49.1. |
| `holdover` / `holdover-ca` | `holdover-nj` | NJ has **two** double-rent statutes (N.J.S.A. 2A:42-5 and 2A:42-6), and neither matches the base's "double the Monthly Rent" (K.3). `-ca` avoids that but gives up both NJ recoveries. |
| `surrender-end-of-term` | `surrender-end-of-term-nj` | "Upon the expiration… Tenant will surrender" conflicts with good-cause renewal (N.J.S.A. 2A:18-61.3(a)). |
| `pet-policy` | `pet-policy-nj` | The base's landlord self-help entry to remove a pet has no NJ authority and runs into N.J.S.A. 2A:39-1. It also omits the senior-housing pet right (N.J.S.A. 2A:42-104). |

### 2.3 Held — waiting on text or decisions (3; `assistance-animal-accommodation` released in §10)

| Row | Waiting on |
|---|---|
| `returned-payments` | The NJ referent for "maximum amount permitted by law" (the bad-check fee statute) isn't read, so the clause has an empty referent (K.3). |
| `application-of-payments` | Whether applying payments to fees before rent is sound in NJ is case law on late fees as "rent". |
| `parking-vehicle-rules` | NJ towing statutes, not read. |

## 3. Step 2 — new rows

### 3.1 New NJ lease clauses (17)

| Row | Rule type | Rests on | Status |
|---|---|---|---|
| `security-deposit-interest-nj` (dormant, rewritten) | REQUIRED | N.J.S.A. 46:8-19, 46:8-26 | VERIFIED |
| `security-deposit-return-nj` | REQUIRED | N.J.S.A. 46:8-21.1, 46:8-21.2, 46:8-24 | VERIFIED |
| `window-guard-notice-nj` | REQUIRED | N.J.A.C. 5:10-27.1(c), App. 27A | VERIFIED |
| `flood-insurance-lease-notice-nj` | REQUIRED | N.J.S.A. 46:8-50(c) | VERIFIED |
| `flood-risk-disclosure-nj` | REQUIRED | N.J.S.A. 46:8-50(a), (b), (e) | **NEEDS_REVIEW** |
| `truth-in-renting-statement-nj` | REQUIRED | N.J.S.A. 46:8-45, 46:8-46 | VERIFIED |
| `landlord-registration-disclosure-nj` | REQUIRED | N.J.S.A. 46:8-28, 46:8-29, 46:8-29.1, 46:8-33 | VERIFIED |
| `late-fee-nj` | CONSTRAINED | N.J.S.A. 2A:42-6.1, 2A:42-6.3 | **NEEDS_REVIEW** |
| `acceptable-payment-methods-nj` | RECOMMENDED | N.J.S.A. 46:8-49.1 to 46:8-49.3 | VERIFIED |
| `surrender-end-of-term-nj` | RECOMMENDED | N.J.S.A. 2A:18-61.3, 2A:18-72 to 2A:18-84 | VERIFIED |
| `pet-policy-nj` | RECOMMENDED | N.J.S.A. 2A:39-1, 2A:42-103 to 2A:42-111 | VERIFIED |
| `right-of-reentry-nj` | RECOMMENDED | N.J.S.A. 2A:18-61.1(e)(1) | VERIFIED |
| `holdover-nj` | CONDITIONAL | N.J.S.A. 46:8-10, 2A:42-5, 2A:42-6, 2A:18-61.3 | **NEEDS_REVIEW** |
| `lead-safe-certification-nj` | CONDITIONAL | N.J.S.A. 52:27D-437.16(c), (e) | VERIFIED |
| `conversion-statement-nj` | CONDITIONAL | N.J.S.A. 2A:18-61.9 | VERIFIED |
| `rent-control-exemption-notice-nj` | CONDITIONAL | N.J.S.A. 2A:42-84.2, 2A:42-84.3 | VERIFIED |
| `tenant-supplied-heat-nj` | CONDITIONAL | N.J.A.C. 5:10-14.4(c) | VERIFIED |

### 3.2 New NJ education rows (10)
The Anti-Eviction Act; the self-help and utility shut-off ban; retaliation; statutory early termination (death, disability, domestic violence, DV lock changes); rent into court and receivership; heat, pest and CO duties in buildings of 3+ units; screening limits (Fair Chance, military housing allowance, COVID-era records, application-fee cap) — **NEEDS_REVIEW**; foreclosure tenant rights; unlawful lease terms (N.J.S.A. 46:8-48); municipal rent control — **NEEDS_REVIEW**.

## 4. Layout and placement requirements (instruction 28)

| Rule | Requirement | Where it lives |
|---|---|---|
| N.J.A.C. 5:10-27.1(c) | Window-guard notice in **prominent boldface** in every lease in a building of 3+ units | `window-guard-notice-nj` |
| N.J.S.A. 46:8-50(a) | Flood-zone disclosure as a **separate rider**, individually signed or acknowledged, **12-point minimum**, before signing | `flood-risk-disclosure-nj` |
| N.J.S.A. 46:8-50(b) | Model notice **headed "Flood Risk"**; FEMA-zone questions may not offer "unknown" | `flood-risk-disclosure-nj` |
| N.J.S.A. 46:8-50(c) | **Exact statutory sentence** on renter flood insurance in every residential lease | `flood-insurance-lease-notice-nj` |
| N.J.S.A. 2A:18-61.9 | Conversion statement in **capitals**, as the **first clause** of the lease, and **also as a separate document** at application and signing | `conversion-statement-nj` |
| N.J.S.A. 52:27D-437.16(e)(2) | Lead-safe certification **attached as an exhibit** to the lease | `lead-safe-certification-nj` |
| N.J.S.A. 2A:42-84.3 | Rent-control exemption **provision in the lease** plus a written statement before signing | `rent-control-exemption-notice-nj` |
| N.J.S.A. 2A:50-70(b) | Foreclosure tenant notice: prescribed text, **English and Spanish**, **14-point bold**, 8½ × 11 paper (not lease content) | edu |
| N.J.S.A. 46:8-45, 46:8-46 | Truth in Renting statement delivered and **posted** (a separate document) | `truth-in-renting-statement-nj` |
| N.J.S.A. 2A:18-61.67 | Any lease attorney-fee clause must carry the statutory tenant-reciprocity sentence in **bold**, at least **one point larger** than the clause or **11 point**, whichever is larger | `default-by-tenant-nj` |

These add to the **Addendum M.12** case for a single `formatting` field. New Jersey adds two values Texas didn't need: **"first clause"** placement and **"attached exhibit"**.

## 5. Dormant row (instruction 21)

`security-deposit-interest-nj` was right about two things: an insured interest-bearing account and annual interest. It missed the operative rules:
- the 30-day written notice naming the institution, account type, rate and amount, repeated on transfer, on account changes and at each annual payment;
- the account-type split at 10 units;
- paying interest in cash or as a rent credit, with the January 31 election;
- the tenant's remedy of applying the deposit plus 7% interest to rent, which permanently ends the landlord's right to demand a further deposit;
- the owner-occupied 2-unit exemption, which the tenant can override by invoking the Act;
- the seasonal exemption.

**This matches every dormant row resolved so far:** one real fact, and the operative rule missing.

## 6. Findings worth Taylor's attention

1. **Good-cause renewal changes the meaning of "end of term".** Any shared clause that treats expiration as ending possession is wrong for Anti-Eviction-covered NJ premises. Two were caught: `surrender-end-of-term` and `holdover`. The rest were screened for this.
2. **Registration is an eviction precondition.** Without a filed certificate given to the tenant, no judgment for possession is entered (N.J.S.A. 46:8-33). No other state in the library has this.
3. **Deposit penalties are mandatory double damages** (N.J.S.A. 46:8-21.1: "shall award"). The tenant's 7% rent-offset remedy under N.J.S.A. 46:8-19 is a self-executing penalty for missing a single bank notice.
4. **Cash receipts are an eviction defense.** Any month without a cash receipt is a defense to a nonpayment eviction for that month (N.J.S.A. 46:8-49.2(c)).
5. **Opt-in landlord rights (instruction 30):**
   - Built: the right of reentry (`right-of-reentry-nj`) and the double-rent recovery for holdover (`holdover-nj`).
   - Not built: the landlord's rent lien against other creditors (N.J.S.A. 2A:42-1), which has no lease hook.
6. **Statute defects recorded, not resolved:**
   - N.J.S.A. 46:8-50(f) cites "subsection f." where it means (e).
   - N.J.S.A. 46:8-39 and 46:8-40 still require information on the Federal Crime Insurance Program, which no longer operates. No row written.
   - N.J.S.A. 46:8-38 defines "multiple dwelling" as 10+ units, but N.J.A.C. 5:10-2.2 uses 3+. Each row cites the definition its own source uses.
7. **The one- and two-family gap.** N.J.A.C. 5:10 covers only buildings of 3+ units. Habitability, heat, pests and CO duties for 1–2 family rentals come from local codes and other DCA rules not read.

## 7. What I still need — one consolidated request

Each item is an exact range or a single decision:
1. **Law Against Discrimination: N.J.S.A. 10:5-1 through 10:5-50.** Please send the table of contents first, and I'll name the sections to copy. This closes the assistance-animal family and the screening row.
2. **Decision on case law.** Habitability, rent abatement, mitigation, late fees as "rent" and unconscionable increases are judge-made in NJ. Options:
   - **(a)** a research-mode pass to locate and record the leading cases as case law (instruction 16);
   - **(b)** leave the four affected rows at NEEDS_REVIEW or held, with the case-law flag.
4. **For the application-fee row:** the effective date of P.L.2025, c.405. The 46:8-18.1 page on the site may show it; if not, I'll find it in the currency sweep.

**On my side, no paste needed:**
- the 2026–2027 session sweep;
- the undated DCA 5:10 adoption notice;
- the DCA flood-notice model form and whether the DEP flood look-up tool is live;
- the source for the "more than 100 municipalities" figure;
- the section behind the $20 window-guard charge.

## 8. Propagation notes

**None owed.** No shared row's `bodyText`, `rule_type` or `content_type` changed. Every shared-row change is an added `NJ` tag and an `NJ:` note, a states-only change under §5a.1.

## 9. Deliverables (draft 1)

| File | State |
|---|---|
| `lease-clauses.csv` | 826 rows, 787 active. NJ 69 (64 VERIFIED, 5 NEEDS_REVIEW) after the research pass. Integrity checks pass; the pre-existing CO row is out of scope (§0.1). |
| `lease-clause-decision-log-NJ.md` | This file |
| Named-topic checklist | **Complete** — NJ column in every table, New Jersey sections, candidate-topic table, instructions 31–32 |


---

## 10. Research pass and LAD batch — 2026-09-26

**Research pass (advanced research, once; report in the conversation).** It settled the case-law questions below, none of which changed a row's text except where noted.

- **Late fees and legal fees as rent:** *Community Realty Mgmt. v. Harris*, 155 N.J. 212 (1998). They are recoverable in a nonpayment eviction only if the lease expressly calls them rent, and never against Section 8 or public-housing tenants (*Harris*; *Hodges v. Sasil Corp.*, 189 N.J. 210 (2007)). No general late-fee cap was found. `late-fee-nj` stays NEEDS_REVIEW pending Taylor's "additional rent" decision.
- **Mitigation:** *Sommer v. Kridel*, 74 N.J. 446 (1977). The landlord must try to re-let and bears the burden of proving it did. Noted on `default-by-tenant-nj`; `early-termination` stays tagged as lawful but exposed.
- **Habitability:** *Marini v. Ireland*, 56 N.J. 130 (1970) and *Berzito v. Gambino*, 63 N.J. 460 (1973). Recorded on the rent-into-court education row. No Rule of Court on rent deposits was found.
- **Unconscionable rent increases:** *Fromet Properties v. Buel*, 294 N.J. Super. 601 (App. Div. 1996). The landlord bears the burden. Recorded on the rent-control education row.
- **Deposits:** only the net amount wrongly withheld is doubled (*Jaremback*, *Kang In Yi*, *Lorril*). A pet deposit counts toward the 1.5x cap (*Reilly v. Weiss*, 406 N.J. Super. 71 (App. Div. 2009)). Notes on `security-deposit-return-nj` and `pet-policy-nj` updated. The builder's cap check must add the pet deposit to the security deposit.
- **Holdover:** *Lorril Co. v. La Corte*, 352 N.J. Super. 433 (2002) applied N.J.S.A. 2A:42-5 to residential tenants. No case was found on N.J.S.A. 2A:42-6 against Anti-Eviction coverage, so `holdover-nj` stays NEEDS_REVIEW on that point only.
- **Right of reentry:** no case was found on what wording reserves it. `right-of-reentry-nj` is drafting practice, not settled law.
- **Currency:**
  - P.L.2025, c.405 took effect 2026-05-01.
  - P.L.2025, c.251 added source-of-income protection.
  - P.L.2026, c.43 (the FAIR Act, which restricts algorithmic rent-setting) was signed 2026-07-20; its reported effective date of 2027-07-01 comes from secondary sources.
  - No N.J.A.C. 5:10 amendment after R.2023 d.103 (effective 2023-09-05) was found; the undated DCA notice is R.2023 d.089.
  - The DEP flood look-up tool has been live since 2023-12-21, so the FEMA-zone disclosure duty is in effect.
  - The $20 window-guard charge is N.J.S.A. 55:13A-7.14(c).
  - Rent control: about 120 of 564 municipalities (secondary source).
  - No bed-bug statute.

**Pasted by Taylor, read section-open:** N.J.S.A. 2A:18-61.66, 2A:18-61.67, 10:5-5, 10:5-12, 10:5-12.2 (nursing-home Medicaid admission, which isn't landlord-tenant; no row), 10:5-29.2, 10:5-29.5 and 10:5-50.

### 10.1 Row changes

| Row | Change | Status |
|---|---|---|
| `default-by-tenant` | **NJ tag removed.** Its fee sentence triggers N.J.S.A. 2A:18-61.66 and 2A:18-61.67. | — |
| `default-by-tenant-nj` | **New.** Base text verbatim plus the statutory reciprocity sentence, with a builder instruction for bold type one point larger or 11 point. | VERIFIED |
| `assistance-animal-accommodation-nj` | **New; instruction 24 family closed.** It drops the base's direct-threat denial sentence, which N.J.S.A. 10:5-29.2 doesn't provide for trained service and guide dogs, and adds retired service dogs. | VERIFIED |
| `edu-screening-rules-nj` | Source-of-income rules and income-test limit (N.J.S.A. 10:5-12(g)(4)) read section-open; familial-status sentence added. | NEEDS_REVIEW → **VERIFIED** |
| `edu-municipal-rent-control-nj` | Count updated to about 120 of 564. | NEEDS_REVIEW (secondary count) |
| `flood-risk-disclosure-nj` | The DCA model form exists and its answer choices differ from the draft rider (for example "Yes – effective map / Yes – preliminary map / No"). | NEEDS_REVIEW |
| Various | Case law and currency added to notes. | — |

**Assistance-animal classification:** New Jersey has an independent, animal-specific housing statute for service and guide dogs (N.J.S.A. 10:5-29.2), like Nebraska. Emotional support animals rest on the reasonable-accommodation regulation N.J.A.C. 13:13-3.4, which isn't read section-open and is flagged.

### 10.2 Remaining NEEDS_REVIEW (4)
1. `late-fee-nj`: Taylor's "additional rent" decision.
2. `holdover-nj`: no case on N.J.S.A. 2A:42-6 for Anti-Eviction-covered tenants.
3. `flood-risk-disclosure-nj`: align the rider to the DCA model form. That needs the form's text, a one-page PDF on nj.gov.
4. `edu-municipal-rent-control-nj`: the count rests on a secondary source.

### 10.3 Still open
- The **"additional rent" decision** (it affects `late-fee-nj` and `default-by-tenant-nj`).
- **The DCA Flood Risk Notice PDF text:** nj.gov/dca/codes/offices/pdf/Flood_Risk_Notice.pdf.
- **Optional:** N.J.A.C. 13:13-3.4, so the emotional-support-animal basis rests on regulation text rather than research.
- **The NJ checklist column.**
- **Held rows:** `returned-payments` (bad-check fee statute unread), `application-of-payments` (research found no case; the payment-order risk is inference only), `parking-vehicle-rules` (towing law unread).


## 11. Decisions and the flood form — 2026-09-26

- **"Additional rent": NO (Taylor).** Late fees and legal fees are not labeled rent, so they can't support a nonpayment eviction in NJ (*Harris*). That matches the library-wide default in `default-by-tenant`. `late-fee-nj` is now **VERIFIED**. Note that this isn't a uniform national rule: NJ is a state where a lease *could* make fees count as rent. The library simply declines to.
- **Flood rider:** the body is replaced with the DCA model Flood Risk Notice, verbatim from the 2-page nj.gov PDF Taylor pasted. `flood-risk-disclosure-nj` is now **VERIFIED**. The form adds block and lot, event descriptions and dated signatures by both parties. It repeats the renter flood-insurance text, but N.J.S.A. 46:8-50(c) still requires that text in the lease itself, so `flood-insurance-lease-notice-nj` stays. New builder placeholders: `{{property_address}}`, `{{municipality}}`, `{{county}}`, `{{block}}`, `{{lot}}`.

**Remaining NEEDS_REVIEW (2):**
- `holdover-nj`: no case on N.J.S.A. 2A:42-6 for Anti-Eviction-covered tenants;
- `edu-municipal-rent-control-nj`: the municipality count rests on a secondary source.

**Still open:** the NJ checklist column and the three held rows (§10.3).


## 12. Checklist completion and close — 2026-09-26

- **Candidate-topic canvass:** 126 refs, meaning the 104 Texas carried plus Texas's 22 new topics. 75 answered, 48 not located (bounded to text read), 2 not checked (towing law; exact-word searches), 1 N/A.
- **Citation-existence screen:** 139 distinct cites; 135 resolve to text read section-open; the remaining 4 are labelled in their rows. No phantom cites.
- **Instruction 19:** 25 row ids named; 23 are active NJ rows, and 2 are the deliberately held `returned-payments` and `parking-vehicle-rules`.
- **New standing instructions:** 31 (screen shared clauses for "end of term ends possession" wording) and 32 (screen for statutes that force text into shared clauses).
- **Integrity at close:** 828 rows, 789 active; NJ 71. No duplicate ids, dangling `supersedes`, display collisions or blank `states` on new rows. Other states' active counts are unchanged from session start. The one pre-existing blank status (CO) is out of scope by Taylor's decision.

### 12.1 Final open items (none blocking)

| Item | What would close it |
|---|---|
| `holdover-nj` NEEDS_REVIEW | A case on N.J.S.A. 2A:42-6 for Anti-Eviction-covered tenants. The clause already confines that remedy to exempt premises |
| `edu-municipal-rent-control-nj` NEEDS_REVIEW | The DCA 2026 Rent Control Survey file (nj.gov/dca/home/misc/Rent_Control_Survey.xlsx) |
| `returned-payments` held | The NJ bad-check fee statute |
| `application-of-payments` held | No NJ case either way; left untagged rather than guessed |
| `parking-vehicle-rules` held | NJ towing statutes |
| Proof-of-absence searches | Official-site full-text searches (radon, mold, smoke detector, EV charging, immigration), with variant word forms |


## 13. Open items closed — 2026-09-26

| Item | Resolution | Status |
|---|---|---|
| `holdover-nj` | The clause asserts N.J.S.A. 2A:42-6 only for premises the Anti-Eviction Act does not cover, and 2A:42-5 only "to the extent it applies" (*Lorril Co.*, 2002). The unresolved case-law point therefore sits outside the clause. | **VERIFIED** |
| `edu-municipal-rent-control-nj` | The unsourced "about 120" count was removed from the body; the row now says "many". | **VERIFIED** |
| `returned-payments` (held) | **New `returned-payments-nj`.** NJ has no landlord fee cap, so the base's "maximum permitted by law" has no referent (K.3). The fee becomes a lease figure `{{returned_payment_fee}}`. N.J.S.A. 2A:32A-1 is recorded as a separate payee remedy: after a 35-day certified demand, the face amount, fees, and the greater of $100 or treble. Text is from the Justia host, fetched by me. | **VERIFIED** |
| `application-of-payments` (held) | **New `application-of-payments-nj`: rent first, then fees.** Fees-first allocation would turn an unpaid fee into a rent shortfall that could support eviction. That would get around *Harris* and Taylor's no-"additional rent" decision. Rent-first is lawful on any reading, so no case is needed. | **VERIFIED** |
| `parking-vehicle-rules` (held) | **Tagged NJ.** The Predatory Towing Prevention Act (N.J.S.A. 56:13-13, 56:13-16) regulates the tower and property owner: a towing contract, a 36×36-inch sign, and owner authorization per vehicle. There is no lease-content rule, so the base's "in accordance with applicable law" is sufficient. Text is from the Justia host; the six-unit signage exemption comes from the host summary, not verbatim text. | tagged |

**Integrity:** 830 rows, 791 active; **NJ 74, all VERIFIED**. No duplicate ids, dangling `supersedes` or display collisions. Other states are unchanged.

**The one item not closable from here:** proof-of-absence searches. Radon, mold, smoke detectors, EV charging and immigration-status rules are marked "Not located" in the checklist, bounded to the text read. Turning them into "Confirmed absent" needs full-text searches on the official legislative site, including variant word forms. Taylor ran those for Texas. Nothing in the CSV depends on them.


## 14. Proof-of-absence searches — 2026-09-26

Taylor ran full-text searches of all N.J.S.A. titles on the official Legislature site (compilation updated through P.L.2026, c.30), with alternate-word-form stemming on. Every hit was pasted and read.

| Topic | Result | Row |
|---|---|---|
| Radon | **Confirmed absent (statutes).** Hits cover sales (the seller gives the buyer test results, N.J.S.A. 26:2D-73, a false positive for tenant duties), schools, child care centers (30:5B-5.2), tier-one new construction (52:27D-123a) and tester certification. | `edu-no-radon-disclosure-nj` |
| Mold | **Confirmed absent (statutes).** Every hit is the manufacturing sense of "mold" except the real-estate licensee sale-disclosure safe harbor (56:8-19.1), which is a sale-only false positive. | `edu-no-mold-disclosure-nj` |
| Smoke alarms | **Present for multiple dwellings:** N.J.S.A. 55:13A-7.1, under DCA rules. **Confirmed absent** as a statutory duty specific to 1–2 family rentals. The DCA rules (N.J.A.C. 5:70) were not read, so the change-of-occupancy certificate is not asserted. | `edu-smoke-alarm-nj` |
| EV-charging right | **Confirmed absent (statutes).** The only housing hit is Make-Ready parking for certain new multifamily projects (40:55D-66.20), a construction duty. | `edu-no-ev-charging-right-nj` |
| Immigration-status rule | **Confirmed absent (statutes).** Hits are DV coercive control (2C:25-29), data privacy (56:8-166.4) and MVC confidentiality. The LAD's national-origin protection still applies. | `edu-no-immigration-inquiry-rule-nj` |

**Boundary for every row:** statutes only. Regulations and local codes were not searched.

**Integrity:** 835 rows, 796 active; NJ 79, all VERIFIED. Other states are unchanged.


## Propagated at the Florida sync, 2026-09-26

A shared row tagged to this state was edited (§5a.1 / instruction 9), by Taylor's decision at the Florida sync, not by a state pass.

1. `application-of-payments`: payments are now applied **rent first**, oldest unpaid period first, and only then to fees and other charges ("unless Tenant directs otherwise in writing for a particular payment or applicable law requires otherwise"). It was fees first. The cure-preserving sentence is kept. NJ and FL are folded back into this row and `application-of-payments-nj` is retired. Reason: fees first turns an unpaid fee into an apparent rent shortfall. No tagged state's research found a statute requiring fees first, and rent first is lawful on any reading. Classification: UNIFORM. It removes a landlord-favorable ordering and adds no obligation. Inherit without override.

`last_checked` reset to 2026-09-26. No other field changed. This is not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-FL.md §16. (Appended at sync, 2026-09-26.)

2. `default-by-tenant-nj` (second propagated edit at the Florida sync, 2026-09-26): the non-rent cure promise now ends "...does not cure the failure after receiving written notice, except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure." Driven by Florida's finding that promising a cure for every breach can contractually give up a state's no-cure termination grounds (checklist instruction 33). This is a targeted fix Taylor approved, not a re-audit. Classification: UNIFORM. It is self-limiting and adds no landlord right where no such law exists. Inherit without override. `last_checked` reset to 2026-09-26. Detail: lease-clause-decision-log-FL.md §16.

## Propagated from the Arizona pass, 2026-09-27

Not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-AZ.md §14 and §17. (Appended at sync, 2026-09-27.)

1. **Shared-row edit received from Arizona (2026-09-27, Taylor's decision) — `entire-agreement`.** The sentence "may not be changed except in writing signed by all parties" now continues ", or as applicable law permits Landlord to change it by written notice to Tenant." Driver: A.R.S. §33-1342(C), which lets an Arizona landlord amend existing leases by written notice to comply with new laws; the old wording could be read to waive such a right. Recorded as **uniform** under §5a.1: the words are self-limiting and change nothing where this state's law gives no unilateral amendment right, while preserving any right it does give (for example, rules adopted on notice or changes to a periodic tenancy on the notice the law requires). No state-specific override is needed. `last_checked` was reset to 2026-09-27.

2. **2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged NJ** (§5a.1; uniform text, no NJ override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. The Fair Chance in Housing Act (N.J.S.A. 46:8-52 to 64, `edu-screening-rules-nj`) limits criminal-history inquiry; the last sentence keeps the clause off that information. The clause avoids "to the extent permitted by law" wording. The N.J.S.A. 56:12-16 savings-clause rule was not read. Remedies run through `default-by-tenant-nj`. **Open (effectiveness):** the Anti-Eviction Act's grounds (2A:18-61.1) are exclusive, and whether one reaches a false application was not researched.

---

## 15. Gap-discovery backfill (instruction 36) — 2026-09-27

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§§1–3, 10: N.J.S.A. 46:8, 2A:18, 2A:39, 2A:42, 10:5 and N.J.A.C. 5:10, read section-open) |
| Gap-discovery source 2 — real-lease comparison | Done (§15.1: NJ Realtors Standard Form of Residential Lease, Form 125-10/2022) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§15.2) |
| Gap-discovery source 4 — outside-title search | Done (§§10, 13, 14, and §15.1 findings in Titles 40A, 52, 55, 56 and 58) |

**Scope:** two targeted checks, not a re-audit. Everything was screened against the current `lease-clauses.csv` (941 rows, 14 states). That copy already reflects the library changes since the NJ pass: `application-of-payments` is rent-first (and `application-of-payments-nj` is retired), `default-by-tenant-nj` carries the no-cure carve-out, `entire-agreement` has its notice carve-out, and `rental-application-accuracy` is tagged NJ.

**Result:**
- **One missing required lease rider found:** steam radiator covers. It's required wherever a unit has steam radiators.
- **One correction:** `edu-smoke-alarm-nj` recorded a false confirmed absence.
- **Four other new rows:** well-test results, casualty, landlord liability insurance, towing.
- **No shared row changed.**

### 15.1 Real-lease comparison (source 2)

**Lease used:** NEW JERSEY REALTORS® Standard Form of Residential Lease, **Form 125-10/2022** (©2001 New Jersey Realtors®, Inc.), 47 numbered sections plus a steam-radiator rider.
- **Where it came from:** a completed-header copy posted by **Halo Realty**, a Bridgewater, NJ brokerage, at `https://d1e1jt2fj4r8r.cloudfront.net/004783a8-0082-479f-be5f-5071f36c16e4/geT-7fDtN/Residential%20Lease%20Agreement.pdf`.
- **Why it qualifies:** it's the state Realtors association's own residential form, category (a), posted publicly by a New Jersey brokerage. It isn't a multi-state template.
- **How it was used:** as a lead only (instruction 6). The map below is by topic, and none of the lease's text is reproduced.

| Form 125 topic | NJ library coverage | Result |
|---|---|---|
| Condo/co-op conversion termination notice (first clause) | `conversion-statement-nj` | Covered |
| Property, term, rent, initial deposit | `rent-payment`, `due-at-signing` | Covered |
| Security deposit (Rent Security Deposit Act, interest, 30-day return) | `security-deposit-interest-nj`, `security-deposit-return-nj` | Covered |
| Late charge and returned-check fee | `late-fee-nj`, `returned-payments-nj` | Covered |
| "Additional rent" for landlord-performed obligations | Taylor's decision (§11): no fee is labeled rent | Not needed (deliberately declined) |
| Possession and use; hazardous materials; vacancy | `residential-use-only`, `permitted-occupants`, `fire-safety-grilling` | Covered |
| Utilities allocation | `utilities-responsibility`, `utilities-paid-by-landlord`, `tenant-supplied-heat-nj` | Covered |
| No assignment or sublet | `no-sublet-assign` | Covered |
| Violation, eviction and re-entry | `right-of-reentry-nj`, `default-by-tenant-nj`, `edu-anti-eviction-act-nj` | Covered |
| Damages (lost rent, re-letting costs) | `default-by-tenant-nj` (mitigation), `early-termination` | Covered |
| Quiet enjoyment | `landlord-maintenance`, `edu-self-help-eviction-ban-nj` | Covered |
| Tenant repairs; landlord repairs | `tenant-maintenance`, `landlord-maintenance`, `edu-heat-and-pest-duties-nj` | Covered |
| Access | `landlords-access`, `inspection-rights` | Covered |
| No alterations; painting | `no-alterations` | Covered |
| Municipal inspections and certificates | `landlord-registration-disclosure-nj`; municipal layer flagged | Covered (state layer); local layer flagged |
| Tenant insurance | `tenants-property-insurance-ks-oh-ca` | Covered |
| Fire and other casualty | none | **Gap → `casualty-nj`** (N.J.S.A. 46:8-6, 46:8-7) |
| Landlord liability; insurance minimums | none | **Gap → `edu-rental-liability-insurance-nj`** (N.J.S.A. 40A:10A-1, -2) |
| Pets; per-day unauthorized-pet charge | `pet-policy-nj`, `assistance-animal-accommodation-nj` | Covered (per-day charge not adopted) |
| Notices (personal delivery or certified mail) | `notices` | Covered |
| No waiver | none | Not needed (Taylor's decision on AZ §16.4: no general non-waiver clause) |
| Severability; binding effect; entire agreement | `severability`, `entire-agreement` | Covered |
| Renewal of lease (good cause) | `holdover-nj`, `edu-anti-eviction-act-nj` | Covered |
| Furniture | `appliances-included` | Covered |
| End of term (clean, repaired, vacated) | `surrender-end-of-term-nj` | Covered |
| Association bylaws and rules | `hoa-compliance` | Covered |
| Attorney review; broker's commission; Consumer Information Statement; licensee business relationship | none | Not needed (real-estate licensee duties, not landlord lease content) |
| Megan's Law statement and registry | none | Not needed (licensee disclosure) |
| Lead-based paint; lead-safe certification attached | `lead-based-paint`, `lead-safe-certification-nj` | Covered |
| Window guard notice | `window-guard-notice-nj` | Covered |
| Truth in Renting acknowledgment | `truth-in-renting-statement-nj` | Covered |
| Smoke, CO alarm and fire extinguisher certificate | `edu-smoke-alarm-nj` (said no 1–2 family statute) | **Correction** (see below) |
| Private well testing | none | **Gap → `private-well-test-results-nj`** (N.J.S.A. 58:12A-32) |
| Security cameras inside the unit | none | **Not located:** no landlord-specific statute found; the form relies on general invasion-of-privacy law. No row |
| New multiple dwelling rent-control exemption | `rent-control-exemption-notice-nj` | Covered |
| Steam radiator rider | none | **Missing required rider → `steam-radiator-cover-notice-nj`** (N.J.S.A. 52:27D-198.20) |
| Addenda; other provisions | `addendum-precedence` | Covered |

**What the comparison produced:**
- **(a) Missing required clause, one:** `steam-radiator-cover-notice-nj`.
  - P.L.2021, c.259, codified N.J.S.A. 52:27D-198.20, requires the owner of residential rental property to notify tenants of their right to request radiator covers. The notice must go "as a rider to any written residential lease agreement", in writing at least annually, and be posted in common areas.
  - Covers must be installed within 90 days of a written request. Fine up to $500, plus a private action for an injured person.
  - The act doesn't define "residential rental property", so the rider is CONDITIONAL on the unit having steam radiators, with no unit-count threshold.
  - Read from the chapter law on the Legislature's site.
- **(b) Correction, one:** `edu-smoke-alarm-nj`.
  - §14 recorded "confirmed absent" for a 1–2 family statutory smoke-alarm duty. **That was wrong.**
  - N.J.S.A. 52:27D-198.1 requires a smoke alarm on each level and outside each sleeping area, plus an ABC fire extinguisher, in any residence of no more than two households.
  - N.J.S.A. 52:27D-198.2 bars an owner from leasing, or allowing a change of occupancy, without first getting a compliance certificate. N.J.A.C. 5:70-2.3 adds CO alarms to the certificate.
  - **Why the search missed it:** the sections say "smoke-sensitive alarm device" and "alarm device", not "smoke detector". Same L.13 shape as SD §20-13-23.4: the absence row was wrong about the world, not just its footnote.
- **(c) New rows, four:**
  - `casualty-nj`: restates the N.J.S.A. 46:8-6 and 46:8-7 defaults rather than varying them.
  - `private-well-test-results-nj`: CONDITIONAL.
  - `edu-rental-liability-insurance-nj`: outside the landlord-tenant title.
  - `edu-towing-nj`: from §15.2.
- **(d) Confirmed absences / not located:**
  - security cameras: no landlord-specific statute located (bounded; not searched on the official site);
  - Megan's Law and attorney review: licensee duties, not landlord duties.
- **(e) Cross-state questions:**
  - **Lease riders required by statute for a physical feature (radiators, wells):** worth a quick "rider" / "private well" statute search in other states. Informational; no shared-row change proposed.
  - **The L.13 search-term failure:** a proof-of-absence search should include the statute's own terms of art ("alarm device") as well as common terms. This is a method note for the checklist.

### 15.2 Landlord-scenario screen (source 3)

**Method:** Arizona's 59-scenario map (AZ log §18.1), adapted to New Jersey with NJ-specific scenarios added, run against the 80 NJ-active rows. Where a scenario had no NJ answer, primary text was checked: sections already read section-open (§§1–14), chapter laws on the Legislature's site, or host copies, each noted.

**Result:** 59 scenarios. 53 were covered by existing rows. The other 6 were closed by this pass:
- **Two scenario gaps:** car towed (now `edu-towing-nj`) and fire or casualty (now `casualty-nj`).
- **Four scenarios answered by rows new or corrected in §15.1:** steam radiators, well test at signing, smoke/CO certificate at turnover, landlord insurance.

Four bounded absences are listed after the table.

| Scenario | NJ coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Holding deposit, then the applicant backs out | `security-deposit-return-nj` (money held "as security" is trust money, N.J.S.A. 46:8-19); fee cap in `edu-screening-rules-nj` | Covered as to deposits; no holding-deposit statute located (bounded) |
| Screening: fees, criminal history, income source, immigration | `edu-screening-rules-nj`, `edu-no-immigration-inquiry-rule-nj` | Covered |
| Applicant lied on the application | `rental-application-accuracy` | Covered (its carve-out also fits the Fair Chance Act's inquiry limits) |
| Voucher holder applies | `edu-screening-rules-nj` (N.J.S.A. 10:5-12(g)(4)) | Covered |
| Unit not ready on move-in day | `possession-delay` | Covered |
| Disclosures at signing | Truth in Renting, registration, flood (2 rows), window guards, lead (2 rows), conversion, rent-control exemption, **steam radiator (new)**, **well test (new)** | Covered |
| Owner never registered | `landlord-registration-disclosure-nj` (no possession judgment, N.J.S.A. 46:8-33) | Covered |
| Property is in an HOA | `hoa-compliance` | Covered |
| Deposit over the 1.5-month cap, pet deposit included | `security-deposit-return-nj` | Covered |
| Smoke/CO certificate before a 1–2 family turnover | `edu-smoke-alarm-nj` (corrected) | Covered (§15.1) |
| Landlord's own insurance | `edu-rental-liability-insurance-nj` | Covered (new) |
| **Rent and money** | | |
| Rent is late | `late-fee-nj`, `default-by-tenant-nj`, `edu-anti-eviction-act-nj` (no pre-suit notice for nonpayment) | Covered |
| Senior or benefits recipient pays on day 4 | `late-fee-nj` (5-business-day grace, N.J.S.A. 2A:42-6.1) | Covered |
| Tenant pays part of the rent | `application-of-payments` (rent first) | Covered as to allocation; no partial-payment-acceptance waiver statute located (bounded) |
| Check bounces | `returned-payments-nj` (N.J.S.A. 2A:32A-1) | Covered |
| Tenant pays cash and wants a receipt | `acceptable-payment-methods-nj` (receipt mandatory, N.J.S.A. 46:8-49.2) | Covered |
| Tenant insists on paying by check, not the portal | `acceptable-payment-methods-nj` (EFT can't be required) | Covered |
| Raising rent at renewal | `edu-municipal-rent-control-nj`, `edu-anti-eviction-act-nj` (unconscionability) | Covered |
| Paying deposit interest each year | `security-deposit-interest-nj` | Covered |
| **During the tenancy** | | |
| No heat in January | `edu-heat-and-pest-duties-nj`, `tenant-supplied-heat-nj` | Covered |
| Tenant withholds rent or repairs and deducts | `edu-rent-receivership-withholding-nj` (Marini, Berzito) | Covered |
| Child could be burned on a steam radiator | **`steam-radiator-cover-notice-nj`** | Covered (new) |
| Window guards requested | `window-guard-notice-nj` | Covered |
| Pests, bedbugs, mold | `edu-heat-and-pest-duties-nj`, `edu-no-mold-disclosure-nj` | Covered |
| Tenant damages the unit | `tenant-maintenance`, `default-by-tenant-nj`, `right-of-reentry-nj` | Covered |
| Landlord needs to enter; tenant refuses | `landlords-access` (one day, N.J.A.C. 5:10-5.1(c)) | Covered |
| Tenant changes the locks; DV lock change | `keys`, `edu-statutory-early-termination-nj` (N.J.S.A. 46:8-9.14) | Covered |
| Tenant away for a month | none | No statute located (bounded) |
| Guest won't leave; squatter | `guest-policy`, `edu-self-help-eviction-ban-nj` (court process only) | Covered. The 2025 squatter bill (S725) was not confirmed enacted; not relied on |
| Roommate moves out | `joint-liability` | Covered |
| Sublet or Airbnb | `no-sublet-assign`, `residential-use-only` | Covered |
| Noise | `no-disturbance` (notice to cease, N.J.S.A. 2A:18-61.1(b)) | Covered |
| Drugs, assault, theft, trafficking | `edu-anti-eviction-act-nj` (grounds n–r, 3 days' notice) | Covered |
| Cannabis smoking | `smoking-policy` | Covered as lease text; the NJ statutory basis for a landlord prohibition is not read (flagged) |
| Unapproved pet; senior-housing pet | `pet-policy-nj` | Covered |
| Service or support animal | `assistance-animal-accommodation-nj` | Covered |
| Tenant alters or paints | `no-alterations` | Covered |
| Car towed from the lot | `parking-vehicle-rules` (defers to law) | **Gap → `edu-towing-nj`** |
| Snow and ice | `snow-removal` | Covered (municipal sidewalk ordinances flagged) |
| Tenant's utility shut off | `utility-service-continuity` | Covered |
| Landlord's utility shut off for nonpayment | N.J.S.A. 2A:18-61.1(a) (tenant-paid utility not unpaid rent); `edu-rent-receivership-withholding-nj` | Covered. BPU tenant-notice rule N.J.A.C. 14:3-3A.6 exists; utility-side, not read, no row |
| Adding a rule mid-lease | `common-area-use` note (N.J.S.A. 2A:18-61.1(d)), `entire-agreement` carve-out | Covered |
| Fire or other casualty | none | **Gap → `casualty-nj`** |
| **Ending the tenancy** | | |
| Tenant wants out early | `early-termination`, `default-by-tenant-nj` (Sommer v. Kridel) | Covered |
| DV, death, disability | `edu-statutory-early-termination-nj` | Covered |
| Servicemember deployed | `early-termination` (SCRA preserved) | Covered |
| Month-to-month notice | `holdover-nj`, `edu-anti-eviction-act-nj` | Covered |
| Lease ends and tenant stays | `holdover-nj`, `surrender-end-of-term-nj` | Covered |
| Landlord wants the unit back for own use | `edu-anti-eviction-act-nj` (ground (l)(3), 3 or fewer units) | Covered |
| Tenant disappears; belongings left | `surrender-end-of-term-nj` (N.J.S.A. 2A:18-72 to 84) | Covered |
| Eviction process; lockout | `edu-anti-eviction-act-nj`, `edu-self-help-eviction-ban-nj` | Covered |
| Retaliation | `edu-retaliation-nj` | Covered |
| Deposit dispute | `security-deposit-return-nj` | Covered |
| Deposit refund never cashed | none | Not located: the Uniform Unclaimed Property Act (N.J.S.A. 46:30B) is not read (bounded) |
| Tenant asks to seal an eviction record | `edu-screening-rules-nj` (COVID-period records only) | Covered as to COVID records; general sealing bills (2024 A1703/S279) not confirmed enacted |
| **Owner changes** | | |
| Owner sells with a tenant in place | `security-deposit-return-nj` (deposit transfer, N.J.S.A. 46:8-20, -21); `landlord-registration-disclosure-nj` (amended certificate); good cause binds the successor (N.J.S.A. 2A:18-61.3(b)) | Covered |
| Lender forecloses | `edu-foreclosure-tenant-rights-nj` | Covered |
| Building converts to condo | `conversion-statement-nj`, `edu-anti-eviction-act-nj` | Covered |
| Manager changes | `landlord-registration-disclosure-nj` (amended certificate within 20 days; copy to tenants within 7) | Covered |

**Absences recorded (no row).** All are bounded to text read. None was run as an official full-text search in this pass.
- **Holding deposit:** no rental holding-deposit statute located.
- **Partial-payment acceptance waiver:** none located.
- **Extended-absence notice:** none located.
- **Unclaimed deposit escheat:** N.J.S.A. 46:30B not read.

### 15.3 Rows changed

The delta file `lease-clauses-NJ-delta.csv` has six rows, each complete, with the change and reason in its notes:

| Row | Change | Status |
|---|---|---|
| `steam-radiator-cover-notice-nj` | New, CONDITIONAL lease rider (N.J.S.A. 52:27D-198.20) | VERIFIED |
| `private-well-test-results-nj` | New, CONDITIONAL (N.J.S.A. 58:12A-32, FindLaw host copy) | VERIFIED |
| `casualty-nj` | New, RECOMMENDED (N.J.S.A. 46:8-6, -7) | VERIFIED |
| `edu-rental-liability-insurance-nj` | New education row (N.J.S.A. 40A:10A-1, -2) | VERIFIED |
| `edu-towing-nj` | New education row (N.J.S.A. 56:13-13, -16) | VERIFIED |
| `edu-smoke-alarm-nj` | **Corrected**: body rewritten; false confirmed absence withdrawn (N.J.S.A. 52:27D-198.1, -198.2; N.J.A.C. 5:70-2.3) | VERIFIED |

**No shared row's text changed**, so no propagation is owed.

**New layout item for the §4 table:** N.J.S.A. 52:27D-198.20 requires the steam-radiator notice as a lease **rider**, plus an annual written notice and common-area posting.

**Source-quality note (instruction 29):**
- Read from the official Legislature site (chapter laws): P.L.2021, c.259 and P.L.2022, c.92.
- Read from FindLaw or Justia host copies with history lines, not compared with the official site: N.J.S.A. 52:27D-198.1, -198.2, 58:12A-32 and 56:13-13, -16. Each row says so.
- N.J.A.C. 5:70-2.3 is from the Cornell LII copy.

### 15.4 Integrity (merged view: attached CSV plus delta)

- 946 rows, 910 active.
- NJ has **85 active rows, all VERIFIED**: 80 before, plus 5 new; the smoke row is changed in place.
- Other states' active counts are unchanged: AZ 109, CA 151, CO 115, FL 99, KS 115, MN 120, ND 111, NE 112, NV 103, OH 74, SD 91, TX 129, WY 99.
- No duplicate ids, dangling `supersedes` or display collisions.
- No blank status or blank `states` on any delta row.

## Propagated shared-row edits, 2026-09-28 (Taylor's decisions after the gap-discovery backfill)

Uniform under §5a.1: each edit is self-limiting, so this state needs no override. Not a re-audit; nothing else in this state was reviewed.

1. **`no-alterations`** — the carve-out now reads "any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform". It keeps disability modifications that fair-housing law requires the landlord to permit (at the tenant's expense) from reading as subject to unfettered landlord consent. Raised by the NE backfill (NE log §D.1).

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows, and checklist mentions of them now point to those rows. Statutory limits that stay useful when filling in a clause are now bracket prompts for the landlord, not lease text.

- **Moved to education:** `security-deposit-interest-nj` → `edu-security-deposit-rules-nj` (which also takes the restated rules from `security-deposit-return-nj`); `casualty-nj` → `edu-casualty-nj`.
- **Trimmed:** `security-deposit-return-nj` (amount and permitted uses), `late-fee-nj` (senior grace rule → `edu-late-fee-rules-nj`), `acceptable-payment-methods-nj` (duties → `edu-payment-rules-nj`), `holdover-nj` (Anti-Eviction sentence → `edu-anti-eviction-act-nj`), `surrender-end-of-term-nj` (property procedure → `edu-property-left-behind-nj`), `private-well-test-results-nj` (testing duty → `edu-private-well-testing-nj`).
- **§5a.1:** only NJ-only rows changed; no propagation owed.

### Verdict for every lease clause

All 23 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `casualty-nj` | Education | — | restates statutory abatement |
| `security-deposit-interest-nj` | Education | — | landlord duties |
| `acceptable-payment-methods-nj` | Split | CONSTRAINED_TERM | keep methods; receipt and post-warrant duties to edu |
| `holdover-nj` | Split | SERVES_LANDLORD | keep double-rent remedies; Anti-Eviction restatement to edu |
| `late-fee-nj` | Split | CONSTRAINED_TERM | keep fee; senior grace rule to edu |
| `private-well-test-results-nj` | Split | SERVES_LANDLORD | keep acknowledgment; testing duty to edu |
| `security-deposit-return-nj` | Split | SERVES_LANDLORD | keep deposit amount; cap and return duties to edu |
| `surrender-end-of-term-nj` | Split | SERVES_LANDLORD | keep surrender duties; property procedure to edu |
| `assistance-animal-accommodation-nj` | Keep | SERVES_LANDLORD |  |
| `conversion-statement-nj` | Keep | REQUIRED_DISCLOSURE: N.J.S.A. 2A:18-61.9 |  |
| `default-by-tenant-nj` | Keep | SERVES_LANDLORD |  |
| `flood-insurance-lease-notice-nj` | Keep | REQUIRED_DISCLOSURE: N.J.S.A. 46:8-50(c) |  |
| `flood-risk-disclosure-nj` | Keep | REQUIRED_DISCLOSURE: N.J.S.A. 46:8-50 |  |
| `landlord-registration-disclosure-nj` | Keep | SERVES_LANDLORD | acknowledgment of required delivery |
| `lead-safe-certification-nj` | Keep | REQUIRED_DISCLOSURE: N.J.S.A. 52:27D-437.16 |  |
| `pet-policy-nj` | Keep | SERVES_LANDLORD |  |
| `rent-control-exemption-notice-nj` | Keep | REQUIRED_DISCLOSURE: N.J.S.A. 2A:42-84.1 et seq. |  |
| `returned-payments-nj` | Keep | CONSTRAINED_TERM |  |
| `right-of-reentry-nj` | Keep | SERVES_LANDLORD | opt-in |
| `steam-radiator-cover-notice-nj` | Keep | REQUIRED_DISCLOSURE: N.J.S.A. 52:27D-198.20 |  |
| `tenant-supplied-heat-nj` | Keep | SERVES_LANDLORD | written agreement shifts heat |
| `truth-in-renting-statement-nj` | Keep | SERVES_LANDLORD | acknowledgment of required delivery |
| `window-guard-notice-nj` | Keep | REQUIRED_DISCLOSURE: N.J.A.C. 5:10-27.1 |  |

---

## Retro checks (SOP 1.12) — 2026-09-30

A targeted check of New Jersey against 16 [Retro] rules, not a re-audit (rule 1). Nothing else was reopened.

**Inputs:** `lease-clauses.csv`, 2,027 rows, which matches the prompt. NJ had 89 active rows at the start. Where these files differ from earlier in this chat, the attached files govern. In particular, the 2026-09-29 scrub moved `casualty-nj` to `edu-casualty-nj` and `security-deposit-interest-nj` to `edu-security-deposit-rules-nj`, and split out four edu rows.

**Sources:**
- **Statutes:** read section-open in the built-in browser from the official NJ Legislature statutes (lis.njleg.state.nj.us; compilation through P.L.2026, c.30). Each section was fetched twice and its heading checked, and a SHA-256 hash was saved.
- **NJ Constitution:** the whole text from njleg.gov/constitution, searched as one corpus.
- **Chapter laws:** P.L.2021, c.16 and S451 (Second Reprint) from pub.njleg.gov.
- **Court rules:** all of Rules of Court Part VI, plus R. 1:38-3, from njcourts.gov (amendments through 2026-09-01).
- **Searches:** run on the official full-text engine, with a control term (0 hits) and a known-positive test (1 hit).
- **Detail:** NJ retro sources, `src/README.md`.

**Rows:** 24 rows in the delta (12 new, 12 changed). With the delta merged, NJ has 101 active rows: 100 VERIFIED, 1 NEEDS_REVIEW.

| Rule | Verdict | What was read and what changed |
|---|---|---|
| 37 tenancy type | **Fixed** | **Early termination:** the shared `early-termination` measures its fee on "the remaining Rent due under the Term", which assumes a fixed term. NJ was removed from it and tagged on `early-termination-ks` (option and fee only for a fixed Term). **Excluded premises:** N.J.S.A. 2A:18-56 sets the notice to quit by tenancy type: three months at will or year to year, one month month to month, one term otherwise. Added to `edu-anti-eviction-act-nj`. **Checked, no change:** the 46:8-21.2 deposit increase is counted "annually", which `edu-security-deposit-rules-nj` already says. The 46:8-9.1 death termination covers only leases of one year or more, which `edu-statutory-early-termination-nj` already says. New `tenant-caused-damage-nj` carries a periodic-tenancy measure. |
| 39 eviction duties | **Fixed** | Read all of Part VI and R. 1:38-3. **New `edu-eviction-court-rules-nj`:** the default-judgment affidavit must certify that non-base charges claimed as rent are allowed (R. 6:6-3(b)); entity landlords need an attorney (R. 6:10); judge review of consent judgments (6:6-4); alternate-address service (6:2-3); warrant timing and 30-day lapse (6:7-1(d)); 7-day orderly-removal stay (6:6-6(b)); levy hours (6:7-4). **New `edu-eviction-record-sealing-nj`:** R. 1:38-3 keeps cases with no judgment for possession, and judgments seven or more years old, out of public access. **Already covered:** lockout ban (`edu-self-help-eviction-ban-nj`) and post-writ property (`edu-property-left-behind-nj`). **Not located:** any post-writ animal duty (pattern 0 hits in Part VI) or a writ-execution immunity. |
| 41b `for-cause-eviction` row | **Fixed** | New `edu-for-cause-eviction-nj`: a pointer row to `edu-anti-eviction-act-nj` (2A:18-61.1, 61.3). The rule itself wasn't moved. |
| 43 cure promises | **Fixed** | **`default-by-tenant-nj`:** the rent limb promised a cure "after receiving written notice from Landlord", but NJ needs no pre-suit notice for nonpayment (2A:18-61.2 excepts grounds a and f). The no-cure carve-out also covered the non-rent limb only. Both limbs now sit under one carve-out sentence that names nonpayment and the no-notice grounds (2A:18-61.1(c), (n)–(r)). Pre-judgment payment rights are kept. **Shared `early-termination`:** its "fails to cure the breach within 10 days" gave away those grounds. Fixed by the switch to `early-termination-ks` (rule 37). **`application-of-payments`:** checked, no issue; it promises no cure. |
| 44 terms turned into duties | **Checked, no issue** | Read 2A:18-61.2 and 46:8-21.1. Their service methods are fixed by statute, and no "as agreed in the lease" wording was found in the text read. NJ note added to `notices`. |
| 45 electronic notices | **Fixed (education)** | Read the UETA itself: N.J.S.A. 12A:12-3, -5, -8. It excludes notices of default, eviction or the right to cure under a residential lease (12A:12-3(c)(2)(b)). It applies only by agreement, and the right to refuse later electronic dealings can't be waived (-5(c)). A record the recipient is stopped from printing or storing is unenforceable against them (-8(c)). No NJ clause relies on electronic delivery of an excluded notice. New `edu-electronic-notices-nj`; NJ notes added to `notices` and `electronic-signatures`, superseding "UETA not read". |
| 46 lease as the notice | **Checked, no issue** | No NJ statute in the text read lets a lease paragraph serve as a required notice. The lease-text requirements (46:8-50(c), 2A:42-84.3, 2A:18-61.9) are already rows, and no shared clause promises a separate notice for them. |
| 47 knowing-use penalties | **Fixed** | N.J.S.A. 46:8-48 bars offering or entering a lease with a provision that violates clearly established tenant rights. The tenant may petition to end the lease, and the penalty is up to $100 per offense (46:8-47); no knowledge is required. **`late-fee-nj`:** since the scrub, the clause let a landlord set a grace period under five business days for the seniors and benefit recipients protected by 2A:42-6.1. The statutory sentence is now restored inside the clause. **`edu-truth-in-renting-lease-provisions-nj`:** penalty amount added. **Checked, no issue:** `notices`, `common-area-use` and `pet-policy-nj` (the pet-deposit cap is handled by the builder warning on `due-at-signing`). `early-termination` is fixed under rule 43. The Truth-in-Consumer Contract, Warranty and Notice Act doesn't apply to residential leases (56:12-15). That closes the open item on `rental-application-accuracy` (NJ note). |
| 48 separate documents | **Checked, no issue** | Each separate-document requirement is already met by its own row: conversion statement (2A:18-61.9, separate statement at application and signing), flood rider (46:8-50(a)), Truth in Renting statement (46:8-45, -46), rent-control exemption prior statement (2A:42-84.3), registration certificate (46:8-28 et seq.), foreclosure notice (2A:50-70, education). No lease clause stands in for any of them. |
| 49 collection costs | **Checked, no issue** | Read "reasonable costs and expenses" in `default-by-tenant-nj`. No collection-cost ban for residential leases was found in the text read. "Expenses" already triggers the 2A:18-61.66/-67 reciprocity sentence. No charge is labeled rent. |
| 50 "lease controls" | **Checked; choices recorded** | Every NJ provision read that lets the lease choose, and the choice made: **(a)** 46:8-6 and 46:8-7 (casualty, "unless otherwise stipulated"): statutory default kept, except optional `tenant-caused-damage-nj`, which covers tenant fault only; recorded in `edu-casualty-nj`. **(b)** 46:8-10 (month-to-month "in the absence of any agreement to the contrary"): `holdover-nj` chooses month-to-month. **(c)** 46:8-9.1 (death termination unless the lease "explicitly provide[s] otherwise"): not varied; noted on `early-termination-ks`. **(d)** 2A:18-61.1(d) and (e) (rules and covenants in the lease at the start of the term; reserved reentry): chosen in `common-area-use` and `right-of-reentry-nj`. **(e)** 12A:12-5(d) (UETA variable by agreement): not used. |
| 51 plain language and consumer law | **Fixed (education)** | **Plain Language Act:** N.J.S.A. 56:12-1 to -10 reaches residential leases ("Leases ... real ... property"). Damages are actual plus up to $50, with fees up to $2,500, subject to good-faith and other defenses; there is optional AG certification. New `edu-plain-language-act-nj`. **Consumer Fraud Act:** 56:8-1(e) defines "sale" to include rental. 56:8-2.22 requires a full copy of any signed document at the same time; 56:8-19 gives treble damages. New `edu-consumer-fraud-act-nj`; how far the Act reaches landlords is unread case law. **Blank spaces:** no rule found ("blank spaces" 9 hits, none on residential leases). **Formatting battery (rule 40), in the builder backlog:** section captions, a table of contents above 3,000 words, and a 10-point floor for conditions and exceptions (56:12-10(b)). |
| 53 figure vs shared clause | **Fixed** | **`default-by-tenant-nj`:** its rent-cure trigger (written notice) has no basis in NJ law; fixed under rule 43. **`rent-payment`:** checked, no issue (no figure; the next-business-day rule doesn't conflict). **`assistance-animal-accommodation-nj`:** checked, no issue (no figure; documentation only "not readily apparent"). **`early-termination`:** its 30-day landlord notice didn't track the one month in 2A:18-61.2(b); moot after the switch. **`holdover-nj`:** checked; its triggers match 2A:42-5 (from the tenant's stated date) and 2A:42-6 (after demand). |
| 54t tenant-caused damage | **Fixed** | Each provision has its own fault exception: 46:8-6 and 46:8-7 ("without the fault of the lessee"); rent into court, narrower, at 2A:42-91(b) ("maliciously or by abnormal or unusual use"); removal ground 2A:18-61.1(c). Essential-services withholding (*Marini*) and mitigation (*Sommer*) are unread case law. **New `edu-tenant-caused-damage-nj`.** **New optional `tenant-caused-damage-nj`** (CONDITIONAL, SERVES_LANDLORD), modelled on `tenant-caused-damage-tn` (not tagged) and following SC: lost-rent part only. TN part (1) is omitted because 46:8-6 already covers it, and a broad no-abatement promise could waive the rent-into-court remedy. `edu-casualty-nj` gains the fault and rule-50 sentence. |
| 35c constitution | **Checked, no clause reached** | **Constitution:** whole text searched (cannabis 17, arms 0, privacy 0, lease terms 17, all on tax relief or state land; speech 3; control 0). Art. IV, s. VII, ¶13 makes cannabis "lawful and subject to regulation", which gives no right against a private landlord. Art. I, ¶6 (speech): the private-property doctrine (*Schmid*, *Twin Rivers*) is unread, and nothing suggests it reaches a lease of a home. No change; NJ note on `common-area-use`. **Cannabis statute:** N.J.S.A. 2C:35-10a(c) lets an owner ban cannabis smoking or vaping in multiple dwellings, so the shared `smoking-policy` is lawful (NJ note). New `edu-cannabis-nj` (also 24:6I-51(b)(1), 24:6I-55(b)). |
| 27 seven topics | **Fixed / recorded** | **algorithmic-rent-setting:** Present. New `edu-algorithmic-rent-setting-nj` (FAIR Act, S451 2R; effective 2027-07-01). **NEEDS_REVIEW** until chapter law P.L.2026, c.43 is posted. **fees-as-rent:** Present. New `edu-fees-as-rent-nj` (R. 6:6-3(b); *Harris*, case law). **statutory-forms:** Present. New `edu-statutory-forms-nj`, a pointer row. **quiet-possession:** Confirmed absent (statutes). "quiet possession" and "quiet enjoyment" give 2 hits each: a deed covenant, a municipal ordinance, a campground and the UCC. No row; the implied covenant is case law. **lease-completeness:** Confirmed absent (statutes). "blank spaces" hits cover motor-vehicle and credit contracts only. No row. **tenant-security-cameras:** Confirmed absent (statutes). "security camera" 1 hit (baby monitors), "video doorbell" 0, "surveillance camera" 2 (a municipal registry). No row. **landlord-self-cure:** Not located. Boundary: the phrase searches returned 0, but no search can prove a negative for a concept phrased so many ways. Regulations and case law not searched. |

**Other changes:**
- **Changed in place:** `early-termination` (NJ removed), `early-termination-ks` (NJ added).
- **NJ note segment and `last_checked` only:** `rental-application-accuracy`, `smoking-policy`, `common-area-use`, `notices`, `electronic-signatures`.
- **Shared text edited:** none, so no propagation is owed (rule 62).

**Integrity (merged view):**
- 2,039 rows (2,027 + 12 new), 1,916 active.
- Only NJ's count changed (89 → 101).
- No duplicate ids, dangling `supersedes` or display collisions.
- No blank status, `states` or `topic_key` on any delta row; every NJ lease clause has a `lease_clause_basis`.
- Same header and CRLF line endings as the master.

**For the legal watch (§10):**
- **P.L.2026, c.43:** confirm the enacted text and its codification.
- **Court-rule citations:** R. 6:6-3, 6:7-1 and 1:38-3 are court rules, not statutes, and need separate monitoring (rule 21).

**No new `{{variables}}`.**

### Proposed SOP changes
1. **Rule 47 plus the scrub:** when a library-wide pass moves a statutory limit out of a CONSTRAINED_TERM clause into education, re-check whether the remaining clause, filled with a lawful-looking landlord figure, now violates that limit for the protected tenants. In a state with a penalty for offering a void term (NJ 46:8-47/-48), it does. Reason: the 2026-09-29 scrub left `late-fee-nj` able to undercut 2A:42-6.1.
2. **Rule 39:** read the court's public-access rules (NJ R. 1:38-3) as well as the eviction-procedure rules when screening for record sealing. Reason: NJ's sealing rule lives in Part I, not Part VI, and no statute covers it.
3. **Rule 43:** when the rent limb of a default clause ties its cure to "written notice from Landlord", check whether the state requires any pre-suit notice for nonpayment. If it doesn't, the clause adds a notice by contract. Reason: `default-by-tenant-nj`.
4. **Rule 51:** check whether a state's consumer-contract notice statute excludes residential leases before treating it as open. Reason: NJ's TCCWNA expressly excludes them (56:12-15), which closed an open item at once.

### Proposed topic questions
- `tenant-caused-damage`: does the rent-into-court (repair-escrow) statute have a narrower tenant-fault defense than the casualty statute, so that a no-abatement clause could waive it?
- `cannabis`: does the state let landlords ban cannabis smoking only in multi-unit buildings, and edibles only outside them?

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Circle-back checks (SOP 1.46), 2026-10-03

This is a targeted check of rule 79 and two scrub fixes, not a re-audit (rule 1). Nothing else was reopened.

**Inputs:**
- `lease-clauses.csv`: 2,876 rows, which matches the prompt. NJ has 101 active rows.
- The attached files govern wherever they differ from earlier in this chat.

**Sources:**
- **Statutes:** read section-open in the built-in browser on the official NJ Legislature statutes (lis.njleg.state.nj.us; compilation through P.L.2026, c.30). Each section was fetched twice and its heading checked; hashes are in `src-1003/README.md`.
- **Chapter laws:** P.L.2025, c.19 and P.L.2025, c.405, from pub.njleg.gov.

**Delta:** 16 changed rows, no new rows. NJ still has 101 active rows (100 VERIFIED, 1 NEEDS_REVIEW). No other state's counts changed.

| Check | Verdict | What was read and rows changed |
|---|---|---|
| **Rule 79: re-read before trusting a summary** | **Fixed** | **Screen:** keywords for secondary or host bases, run on every active NJ row. 23 rows hit. 15 cite case law or the research pass for case-law points only, or rest on the official nj.gov N.J.A.C. text with Cornell as a spot check. Those are outside rule 79's statutory screen and unchanged. **8 of 101 rows recorded no basis**, mostly rows the scrub created. All 8 were read section-open; the immigration row's basis is Taylor's official full-text search. **Fixes below.** |
| ↳ `edu-municipal-rent-control-nj` | **Fixed** | **Wrong citation (79a):** "2A:18-61.1f/61.1g" are separate sections on notices for buildings being boarded up or retired. The rule the row states is subsection (f) of 2A:18-61.1. **Missing qualifiers (79b):** 2A:42-84.2 exempts only limits on "periodic or regular increases in base rentals", and only for the shorter of the mortgage amortization period or 30 years. It excludes housing built for senior citizens (84.1(e)) and rent control on substandard dwellings under 2A:42-74 et seq. The tenant also gets a written statement before signing (84.3). Body rewritten. |
| ↳ `edu-smoke-alarm-nj` | **Fixed (stale host copy)** | The FindLaw copy predated **P.L.2025, c.19** (approved 2025-02-03, effective immediately). That act removed the portable fire extinguisher requirement from 52:27D-198.1 and added a warning label for secondary power sources. The body's extinguisher sentence was wrong and is gone. The certificate path is now split correctly: the municipal certificate-of-occupancy official where an ordinance requires one, otherwise the fire-safety enforcing agency (198.2(a)/(b)). The $500 fine (198.3) is added. The CO-alarm rule (N.J.A.C. 5:70-2.3) still rests on the Cornell copy; the official N.J.A.C. couldn't be reached, and it is marked so. |
| ↳ `edu-algorithmic-rent-setting-nj` | **Unreachable; unchanged** | P.L.2026, c.43 is still not posted (the PL26 chapter-law folder ends at c.30), and the compiled statutes have 0 hits for "coordinating function". The row stays NEEDS_REVIEW on the S451 Second Reprint. |
| ↳ `edu-towing-nj`, `parking-vehicle-rules` (NJ note) | **Fixed** | 56:13-13(d) exempts single-family homes, owner-occupied buildings of six or fewer units and cars blocking a driveway from the whole section. The Justia host summary had applied the exemption to the sign rule only. Subsection (e) allows a simpler sign for assigned-space communities. 56:13-7 and -16 were re-read; no change. |
| ↳ `returned-payments-nj` | **Fixed (notes)** | 2A:32A-1 read officially. Damages can't exceed the check amount by more than $500; the demand form and hardship waiver are now read verbatim. Clause text is unaffected. |
| ↳ `steam-radiator-cover-notice-nj` | **Fixed** | 52:27D-198.20(b) attaches the rider duty to property with *uncovered* steam radiators; builder note corrected. |
| ↳ `edu-property-left-behind-nj` | **Fixed** | Added three qualifiers: the "reasonably believes" no-further-claim condition (2A:18-72); "30 days after delivery or 33 after mailing, whichever comes first" (2A:18-74); and the mailing method (2A:18-73). Also added the double-damages penalty (2A:18-82). |
| ↳ `edu-security-deposit-rules-nj` | **Fixed** | Added the 46:8-26 exemption: owner-occupied buildings with two or fewer rental units, until the tenant gives 30 days' written notice invoking the Act. Also added the 60-day qualifier on moved-account notices (46:8-19(c)(2)). |
| ↳ `edu-private-well-testing-nj` | **Fixed** | 58:12A-32 applies only where no other State law requires testing, and allows posting inside a seasonal rental. Both qualifiers added. |
| ↳ `edu-screening-rules-nj` | **Fixed** | The fee-cap exemption is "a dwelling unit located in a one-family or two-family dwelling" plus licensees who aren't the landlord (46:8-18.1(c)); the body said "buildings with three or more units". The CPI adjustment starts in 2027. The effective date of 2026-05-01 is now from the chapter law itself (P.L.2025, c.405, s.3), not a press release. |
| ↳ `edu-rental-liability-insurance-nj`, `edu-late-fee-rules-nj`, `edu-payment-rules-nj` | **Checked, no issue** | Re-read 40A:10A-1/-2; 2A:42-6.1–6.3 and 10.16a; 46:8-49.1–49.3. The bodies match; basis notes added. |
| **Fix 2: scrub-trimmed clauses** | **Fixed (2), no issue (3)** | **`security-deposit-return-nj`:** restored "no deduction while Tenant remains in possession" (46:8-21.1). Without it, the "unpaid Rent" use reopens mid-tenancy deductions, which is why `security-deposit-use` was never tagged NJ, and 46:8-47/-48 penalize offering that term. **`acceptable-payment-methods-nj`:** the change-on-notice sentence let a landlord switch to electronic-only payment. It now always keeps a non-EFT method (46:8-49.1); a number check can't catch this. **`holdover-nj`:** no issue; both double-rent remedies keep their statutory triggers, and 2A:42-6 stays confined to premises outside the Anti-Eviction Act. **`surrender-end-of-term-nj`:** no issue; no landlord figure or choice can break the property procedure. **`private-well-test-results-nj`:** no issue; it is an acknowledgment only, and the testing duty is in education. **Required lease text:** the statutory text a lease must carry (46:8-50(c), 2A:18-61.9, 2A:42-84.3, 52:27D-198.20, N.J.A.C. 5:10-27.1(c), 2A:18-61.67, the lead-safe exhibit) all lives in rows the scrub didn't touch; those rows were checked intact. |
| **Fix 3: scrub-switched-off required clauses** | **Checked, no restore** | **`security-deposit-interest-nj`:** 46:8-19(c) requires a written notice within 30 days of receiving the deposit, naming the institution, account type, rate and amount. The switched-off clause promised that future notice but never was it, since it can't carry details unknown at signing. It only restated duties the Act imposes anyway, and those are in `edu-security-deposit-rules-nj`. No lease clause restored. |

**Citation-file updates for the sync (rule 79, upgrade basis):**
- **`edu-municipal-rent-control-nj`:** replace "2A:18-61.1f, 2A:18-61.1g" with "N.J.S.A. 2A:18-61.1(f)", and add 2A:42-84.2, 84.3, 84.5.
- **`edu-smoke-alarm-nj`:** add 52:27D-198.3 and P.L.2025, c.19.
- **`edu-towing-nj` and `parking-vehicle-rules`:** basis is now official.
- **`returned-payments-nj` and `edu-private-well-testing-nj`:** basis is now official.
- **`edu-property-left-behind-nj` and `edu-security-deposit-rules-nj`:** basis is now section-open. Add 46:8-20 to the deposit row.

**Unreachable (marked):**
- P.L.2026, c.43 (`edu-algorithmic-rent-setting-nj`).
- N.J.A.C. 5:70-2.3 (smoke/CO).
- N.J.A.C. 13:13-3.4 (`assistance-animal-accommodation-nj`, unchanged; the clause hedges "to the extent permitted by applicable law").

**Integrity (merged view):**
- 2,876 rows; no new ids.
- Per-state active counts unchanged.
- No display collisions; same header and CRLF line endings.
- No shared text edited, so no propagation is owed. `parking-vehicle-rules` got an NJ note only.

### Proposed SOP changes
1. **Rule 79:** when re-reading a host-copy section, compare its history line with the official one. A host copy can predate an amendment, and then the row is wrong, not merely unsourced. Reason: NJ's FindLaw copy of 52:27D-198.1 predated P.L.2025, c.19, which dropped the extinguisher rule the row asserted.
2. **Rule 79(a):** check whether a cited section number with a letter suffix ("61.1f") is a separate section rather than a subsection ("61.1(f)"). Reason: `edu-municipal-rent-control-nj` cited two unrelated sections this way.

## Circle-back sync (Claude Code, 2026-10-03)

- **Merged** with `merge-delta.py --base 2b10851`: 15 rows updated (14 NJ rows and NJ's note on shared `parking-vehicle-rules`), no new rows. The tool refused the 16th, `acceptable-payment-methods-nj`, because it is tagged NJ and IL and its text changed (rule 62). Claude Code's call (rule 76): the new sentence ("will always accept at least one method that is not an electronic funds transfer and will not require payment by electronic funds transfer") states the rule IL was tagged for (765 ILCS 705/4), so it is uniform for IL and needs no IL override. Applied by hand: NJ's text and notes from the delta, IL's segment kept, and an IL note added; recorded in IL's log too. NJ active 101, unchanged.
- **Citations file:** the 16 changed rows re-dated; `edu-municipal-rent-control-nj` now cites N.J.S.A. 2A:18-61.1(f) and 2A:42-84.2, 84.3, 84.5 (not the separate sections 61.1f and 61.1g); `edu-smoke-alarm-nj` adds 52:27D-198.3 and P.L.2025, c.19; `edu-security-deposit-rules-nj` adds 46:8-20; eight rows note the upgraded official basis.
- **Guards:** all pass. **Statute spot-check, against P.L.2025, c.19 as published on pub.njleg.gov:** § 52:27D-198.1 as amended has no portable-extinguisher requirement and adds the secondary-power-source warning label; § 198.2(a)-(b) splits the certificate between the municipal official and the fire-safety enforcing agency; § 198.3 sets a fine of not more than $500. The compiled statutes site (lis.njleg.state.nj.us) doesn't serve section text to this machine.
- **Still unreachable, marked on the rows:** P.L.2026, c.43 (algorithmic rent setting, which stays NEEDS_REVIEW), N.J.A.C. 5:70-2.3, N.J.A.C. 13:13-3.4.
- **SOP 1.47:** both proposals adopted (rule 79). NJ's 79 cell set to ✓.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for NJ. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any NJ row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach NJ's law; to be confirmed at NJ's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.

# Topic gaps pass (end-of-run consistency pass, 2026-10-31): Desktop's log

# Topic gaps: New Jersey topic gaps (end-of-run consistency pass) — gaps log

Pass run on SOP 1.93 in the "NJ – topic gaps" scope: add rows only; existing rows untouched except NJ tags (SOP rule 26). Interim copy: the delta and this log are cumulative and are replaced at each delivery.

**Step A (2026-10-31):** decompressed `lease-clauses.csv` is 50,723,274 bytes, SHA-256 `b81bee9a731a3818216a48850a2d3bb2792e90f831a36e427053fb51940dfc09`; 13,460 rows, 13,349 active, 102 active NJ; `missing-topics-NJ.md` lists 275 topics; corpus `corpus-NJ-20261030.tar.xz` SHA-256 `4480be2e…7f51` matches its .sha256. Outputs from the 2026-10-03 retro deleted before starting.

## §1 Sources, channel and currency
- **Statutes:** the Legislature's whole statutes file in the NJ corpus (`statutes/STATUTES.TXT`, "UPDATED THROUGH P.L.2026, c.50, and J.R.1"), split by the corpus's catchline index (56,406 sections); every relied-on section printed whole by a section tool and read section-open. Batteries run on all 56,406 sections with control term `zqxvbnmwt` in the same step and a known positive.
- **Session laws:** P.L.2024 to P.L.2026 chapter texts in the corpus; P.L.2026, c.51-101 are not in STATUTES.TXT (c.71-101 bill last prints only, labelled so where used). Effective dates read from each act's own effective-date section.
- **Rules of Court:** Part VI and its appendices from the corpus (njcourts.gov service); R. 4:4-4 read 2026-10-31 from the same njcourts.gov service in the built-in browser (whole rule; hash in the row).
- **Regulations:** DCA courtesy copies of N.J.A.C. 5:10, 5:28 and others, DCR copies of N.J.A.C. 13:5, 13:9, 13:10, 13:16 (agency copies; the official N.J.A.C. on LexisNexis not reachable). Not held: N.J.A.C. 5:70, 14:3, 13:45A, 13:13.
- **Constitution:** corpus text through the November 2021 amendments.
- **Channel:** offline corpus by script (rule 24); research agents, at most two at a time, each saving one answer per topic.
- **Currency:** corpus scan (three sources) finds no 2024-2026 act touching 2A:18, 2A:42, 2A:39, 2A:33, 46:8-19 to -26 or 46:8-43 to -64; confirmed per relied-on section from its history line. Acts that do touch core chapters and were read where relied on: P.L.2025, c.405 (application fee, effective 2026-05-01 by its s.3), c.19 (smoke alarms), c.144 (lead in drinking water), c.251 and c.307 (LAD), c.362 (46:8C), P.L.2024, c.74 (lead-safe), P.L.2025, c.326 (veterans' homestead), P.L.2026, c.82 (46:8-65 portable solar; bill last print R3 only; effective six months after enactment, 2026-09-01 approval).

## §2 Topics answered (275 of 275)

| Topic | Row id(s) | Verdict | Citation |
|---|---|---|---|
| `abandoned-property` | `edu-abandoned-property-nj` | Present | N.J.S.A. 2A:18-72; N.J.S.A. 2A:18-73; N.J.S.A. 2A:18-74; N.J.S.A. 2A:18-75; … |
| `abandonment-and-mitigation` | `edu-no-mitigation-statute-nj` | Absent | N.J.S.A. 2A:18-72 |
| `accessory-dwelling-unit` | `edu-no-adu-statute-nj` | Absent | N.J.S.A. 52:27D-304; N.J.S.A. 52:27D-320; N.J.S.A. 2A:18-61.1; N.J.S.A. 46:8-26 |
| `actual-notice-method` | `edu-no-agreed-notice-method-rule-nj` | Absent | N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-61.1 |
| `adverse-proceeding-notice` | `edu-no-adverse-proceeding-notice-nj` | Absent | N.J.S.A. 2A:50-70; N.J.S.A. 2A:18-61.27; N.J.S.A. 55:13A-11; N.J.S.A. 2A:18-61.60; … |
| `alarm-tampering-fee` | `edu-no-alarm-tampering-fee-nj`, `detector-care-la (tagged)` | Absent | N.J.S.A. 52:27D-198.1; N.J.S.A. 52:27D-198.2; N.J.S.A. 52:27D-198.3; N.J.S.A. 52:27D-198.18; … |
| `alt-housing` | `edu-alt-housing-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.1g; N.J.S.A. 2A:18-61.1h; N.J.S.A. 2A:18-61.11; … |
| `animal-care-access` | `edu-no-animal-care-entry-right-nj`, `animal-care-access-vi (tagged)` | Absent | N.J.S.A. 2C:18-3; N.J.S.A. 4:22-46.2; N.J.S.A. 2A:18-75; N.J.A.C. 5:10-5.1 |
| `appliances-excluded` | `edu-no-appliances-excluded-rule-nj` | Absent | N.J.A.C. 5:10-1.6; N.J.A.C. 5:10-20.1; N.J.S.A. 46:8C-2; N.J.S.A. 46:8-44; … |
| `application-fees` | `edu-application-fees-nj` | Present | N.J.S.A. 46:8-18.1; N.J.S.A. 46:8-18.2; P.L.2025, c.405 (s.3 effective date); N.J.S.A. 46:8-54; … |
| `asbestos-hazards` | `edu-no-asbestos-rule-nj` | Absent | N.J.S.A. 34:5A-34; N.J.S.A. 34:5A-35; N.J.S.A. 34:5A-36; N.J.S.A. 13:1E-99.119 |
| `association-obligations-disclosure` | `edu-no-association-disclosure-nj` | Absent | N.J.S.A. 46:8B-15; N.J.S.A. 45:22A-45; N.J.S.A. 45:22A-45.2; N.J.S.A. 45:22A-46; … |
| `attorney-fees` | `edu-attorney-fees-nj` | Present | N.J.S.A. 2A:18-61.66; N.J.S.A. 2A:18-61.67 |
| `automatic-renewal` | `edu-no-automatic-renewal-rule-nj` | Absent | N.J.S.A. 2A:18-61.3; N.J.S.A. 2A:18-61.4; N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-56; … |
| `balcony-inspection` | `edu-balcony-inspection-nj` | Present | N.J.S.A. 52:27D-132.2; N.J.S.A. 52:27D-132.3; N.J.S.A. 52:27D-132.4; N.J.S.A. 52:27D-132.5; … |
| `bed-bug-cooperation` | `pest-cooperation-nj` | Present | N.J.S.A. 29:4-14; N.J.S.A. 26:10-12; N.J.S.A. 26:10-19; N.J.A.C. 5:10-10.2; … |
| `bed-bug-disclosure` | `edu-no-bed-bug-disclosure-nj` | Absent | N.J.S.A. 29:4-14; N.J.S.A. 26:10-12; N.J.S.A. 26:10-19; N.J.A.C. 5:10-10.2 |
| `binding-arbitration` | `edu-binding-arbitration-nj` | Present | N.J.S.A. 2A:23B-3; N.J.S.A. 2A:23B-4; N.J.S.A. 2A:23B-6; N.J.S.A. 2A:23B-16; … |
| `carpet-cleaning` | `carpet-cleaning-ar (tagged)` | Tagged | N.J.S.A. 46:8-21.1; N.J.S.A. 46:8-26 |
| `casualty-and-mitigation-waivable` | `edu-casualty-mitigation-waiver-nj` | Present | N.J.S.A. 46:8-6; N.J.S.A. 46:8-7; N.J.S.A. 46:8-44; N.J.S.A. 46:8-48; … |
| `certificate-of-occupancy-disclosure` | `edu-no-certificate-of-occupancy-disclosure-nj` | Absent | N.J.S.A. 52:27D-133; N.J.S.A. 52:27D-198.2; N.J.S.A. 52:27D-198.3; N.J.S.A. 55:13A-13; … |
| `children-occupancy` | `edu-children-occupancy-nj` | Present | N.J.S.A. 10:5-12; N.J.S.A. 10:5-5; N.J.A.C. 5:10-22.2; N.J.A.C. 5:10-22.3 |
| `cold-weather-vacate-notice` | `edu-no-cold-weather-vacate-notice-nj` | Absent | N.J.S.A. 2A:42-10.16; N.J.S.A. 2A:18-59.3 |
| `collection-fee` | `edu-no-collection-fee-rule-nj` | Absent | N.J.S.A. 2A:18-61.66 |
| `common-area-lighting` | `edu-common-area-lighting-nj` | Present | N.J.A.C. 5:10-13.1; N.J.A.C. 5:10-13.2; N.J.A.C. 5:10-13.3; N.J.A.C. 5:10-4.1; … |
| `communal-land-lease-approval` | `edu-no-communal-land-lease-approval-nj` | Absent | N.J.S.A. 2A:34-54 |
| `condemned-premises-rent-bar` | `edu-no-condemned-rent-bar-nj` | Absent | N.J.S.A. 40:48-2.3; N.J.S.A. 40:48-2.5; N.J.S.A. 40:48-2.6; N.J.S.A. 2A:18-61.1; … |
| `condition-inspection` | `move-in-condition-report-as (tagged)` | Tagged | N.J.S.A. 46:8-21.1 |
| `confession-of-judgment` | `edu-confession-of-judgment-nj` | Present | N.J.S.A. 2A:16-9; N.J.S.A. 2A:16-9.1; N.J.S.A. 2A:16-13; N.J.S.A. 2A:50-6 |
| `confirmed-absences-habitability` | `edu-confirmed-absences-habitability-nj` | Absent |  |
| `confirmed-absences-misc` | `edu-confirmed-absences-misc-nj` | Absent |  |
| `confirmed-absences-outside-title` | `edu-confirmed-absences-outside-title-nj` | Present | N.J.S.A. 46:8-49.2; N.J.S.A. 46:8-33; N.J.S.A. 46:8-27; N.J.S.A. 10:5-12 |
| `construction-liens` | `no-liens-nj` | Present | N.J.S.A. 2A:44A-1; N.J.S.A. 2A:44A-2; N.J.S.A. 2A:44A-3; N.J.S.A. 2A:44A-38 |
| `criminal-activity` | `criminal-activity-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-61.4 |
| `cure-and-eviction-grounds` | `edu-cure-and-eviction-grounds-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-61.4; N.J.S.A. 2A:18-53; … |
| `defective-drywall-disclosure` | `edu-no-drywall-disclosure-nj` | Absent | N.J.S.A. 45:5AAA-6 |
| `deposit-cost-schedule` | `edu-no-deposit-cost-schedule-nj` | Absent | N.J.S.A. 46:8-21.1 |
| `deposit-escheat` | `edu-deposit-escheat-nj` | Present | N.J.S.A. 46:30B-6; N.J.S.A. 46:30B-7; N.J.S.A. 46:30B-7.1; N.J.S.A. 46:30B-7.2; … |
| `deposit-installments` | `edu-deposit-installments-nj` | Present | N.J.S.A. 46:8-21.1; N.J.S.A. 46:8-21.2; N.J.S.A. 46:8-26 |
| `deposit-last-month-rent` | `edu-deposit-last-month-rent-nj` | Present | N.J.S.A. 46:8-19; N.J.S.A. 46:8-20; N.J.S.A. 46:8-21.1; N.J.S.A. 46:8-21.2 |
| `deposit-surrender-notice` | `edu-no-deposit-surrender-notice-nj` | Absent | N.J.S.A. 46:8-21.1; N.J.S.A. 46:8-24; N.J.S.A. 2A:18-61.1f |
| `designated-repairer` | `edu-no-designated-repairer-rule-nj` | Absent | N.J.S.A. 46:8-48; N.J.S.A. 46:8-44 |
| `disability-accommodation` | `edu-disability-accommodation-nj` | Present | N.J.S.A. 10:5-12; N.J.S.A. 10:5-4.1; N.J.S.A. 10:5-5; N.J.S.A. 45:22A-48.3 |
| `disaster-displaced-guests` | `edu-no-disaster-guest-rule-nj` | Absent | N.J.S.A. 20:4-3.1; N.J.S.A. 46:8-21.1 |
| `disaster-duties` | `edu-disaster-duties-nj` | Present | N.J.S.A. 2A:18-61.62; N.J.S.A. 2A:18-61.63; N.J.S.A. 2A:18-61.64; N.J.S.A. 2A:18-61.65; … |
| `double-letting` | `edu-no-double-letting-rule-nj` | Absent |  |
| `drug-free-housing-addendum` | `edu-drug-free-housing-addendum-nj` | Absent | N.J.S.A. 2A:18-61.1 |
| `dv-confidentiality` | `edu-dv-confidentiality-nj` | Present | N.J.S.A. 46:8-9.4 to -9.12; N.J.S.A. 46:8-21.1; N.J.S.A. 47:4-3; N.J.S.A. 47:4-4 |
| `dv-deposit-timing` | `edu-dv-deposit-timing-nj` | Present | N.J.S.A. 46:8-21.1; N.J.S.A. 46:8-9.4 to -9.12; N.J.S.A. 46:8-26 |
| `dv-eviction-protection` | `edu-no-dv-eviction-protection-nj` | Absent | N.J.S.A. 2A:18-61.1; N.J.S.A. 46:8-9.4 to -9.12; N.J.S.A. 2C:25-29; N.J.S.A. 2C:25-28 |
| `dv-lease-termination` | `edu-dv-lease-termination-nj` | Present | N.J.S.A. 46:8-9.4 to -9.12; N.J.S.A. 2C:25-19; N.J.S.A. 46:8-21.1 |
| `dv-lockchange` | `edu-dv-lockchange-nj` | Present | N.J.S.A. 46:8-9.13; N.J.S.A. 46:8-9.14; N.J.S.A. 2C:25-28; N.J.S.A. 2C:25-29 |
| `dv-protection-order-chapter-moved` | `edu-dv-protection-order-citations-nj` | Present | N.J.S.A. 46:8-9.6; N.J.S.A. 46:8-9.14; N.J.S.A. 2C:25-19; N.J.S.A. 2C:25-28; … |
| `dv-qualifying-documents` | `edu-dv-qualifying-documents-nj` | Present | N.J.S.A. 46:8-9.6; N.J.S.A. 46:8-9.7; N.J.S.A. 46:8-9.11; N.J.S.A. 46:8-9.14 |
| `electric-submetering-disclosure` | `edu-electric-submetering-nj` | Absent | N.J.S.A. 48:2-13; N.J.S.A. 55:13A-7.8; N.J.S.A. 55:13A-7.9; N.J.S.A. 55:13A-7.10; … |
| `emergency-assistance-right` | `edu-no-emergency-assistance-right-nj` | Absent | N.J.S.A. 2A:42-10.10; N.J.S.A. 2A:18-61.1 |
| `emergency-contact` | `edu-emergency-contact-nj`, `social-services-hotline-lease-notice-nj` | Present | N.J.S.A. 46:8-28; N.J.S.A. 55:13A-7.19; N.J.S.A. 30:1-1.1; N.J.S.A. 2A:42-143; … |
| `eminent-domain` | `eminent-domain-vi (tagged)` | Tagged | N.J.S.A. 20:3-2; N.J.S.A. 20:3-19; N.J.S.A. 20:3-20; N.J.S.A. 20:4-4; … |
| `employee-screening` | `edu-employee-screening-nj` | Present | N.J.S.A. 34:6B-11; N.J.S.A. 34:6B-13; N.J.S.A. 34:6B-14; N.J.S.A. 34:6B-15; … |
| `energy-data-release` | `edu-energy-data-release-nj` | Present | N.J.S.A. 48:3-85; N.J.S.A. 48:3-87.10 |
| `entity-landlord-court-representation` | `edu-entity-landlord-court-representation-nj` | Present | R. 6:10; R. 6:11; R. 6:6-3; R. 6:1-2 |
| `environmental-event-termination` | `edu-no-environmental-event-termination-nj` | Absent | N.J.S.A. 46:8-50; N.J.S.A. 46:8-7; N.J.S.A. 2A:18-61.1 |
| `ev-charging-end-of-tenancy` | `edu-no-ev-charging-end-of-tenancy-nj` | Absent | N.J.S.A. 45:22A-48.4; N.J.S.A. 52:27D-141.13; P.L.2026, c.51 (acts corpus); P.L.2025, c.155 (acts corpus, s.1 definition) |
| `ev-charging-requirements` | `edu-ev-charging-requirements-nj` | Present | N.J.S.A. 40:55D-66.18; N.J.S.A. 40:55D-66.19; N.J.S.A. 40:55D-66.20; N.J.S.A. 40:55D-66.21; … |
| `ev-charging-shared-area` | `edu-ev-charging-shared-area-nj` | Absent | N.J.S.A. 45:22A-48.4; N.J.S.A. 48:7-6.1; N.J.S.A. 48:25-10; N.J.S.A. 40:55D-66.20 |
| `eviction-hardship-stay` | `edu-eviction-hardship-stay-nj` | Present | N.J.S.A. 2A:42-10.1; N.J.S.A. 2A:42-10.3; N.J.S.A. 2A:42-10.6; N.J.S.A. 2A:42-10.8; … |
| `eviction-penalty-clause-ban` | `edu-no-eviction-penalty-ban-nj` | Absent | N.J.S.A. 2A:42-10.16a; N.J.S.A. 2A:18-61.6; N.J.S.A. 2A:18-61.66 |
| `eviction-service-party` | `edu-eviction-service-party-nj` | Present | R. 6:2-3; N.J.S.A. 2A:18-54; N.J.S.A. 47:4-3; N.J.S.A. 47:4-4 |
| `exculpatory-clauses` | `edu-exculpatory-clauses-nj` | Present | N.J.A.C. 5:10-4.1; N.J.S.A. 46:8-48; N.J.S.A. 46:8-47; N.J.S.A. 2A:42-106 |
| `expedited-criminal-eviction` | `edu-expedited-criminal-eviction-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2C:35-5.7 |
| `expedited-deposit-disposition` | `edu-expedited-deposit-disposition-nj` | Present | N.J.S.A. 46:8-21.1; N.J.S.A. 46:8-26 |
| `extended-absence-notice` | `extended-absence-notice-ks (tagged)` | Tagged | N.J.S.A. 2A:18-72 |
| `fair-housing` | `edu-fair-housing-nj` | Present | N.J.S.A. 10:5-3; N.J.S.A. 10:5-4; N.J.S.A. 10:5-5; N.J.S.A. 10:5-12; … |
| `family-child-care` | `edu-no-family-child-care-rule-nj` | Absent | N.J.S.A. 40:55D-66.5b; N.J.S.A. 30:5B-17; N.J.S.A. 30:5B-18; N.J.S.A. 30:5B-22.1; … |
| `farmland-hunting-rights` | `farmland-sporting-rights-co (tagged)` | Tagged | N.J.S.A. 23:7-1; N.J.S.A. 23:7-2; N.J.S.A. 23:7-6; N.J.S.A. 23:4-16; … |
| `fee-in-lieu-of-deposit` | `edu-no-fee-in-lieu-of-deposit-nj` | Absent | N.J.S.A. 46:8-19; N.J.S.A. 46:8-21.2; N.J.S.A. 46:8-24; N.J.S.A. 46:8-26 |
| `fee-transparency` | `edu-no-fee-transparency-rule-nj` | Absent | N.J.S.A. 46:8C-2; N.J.S.A. 46:8-48 |
| `fee-unprovided-service` | `edu-no-fee-unprovided-service-nj` | Absent | N.J.S.A. 56:8-1; N.J.S.A. 56:8-2; N.J.S.A. 48:5A-49; N.J.S.A. 48:5A-11.5; … |
| `fire-code-standard` | `edu-fire-code-standard-nj` | Present | N.J.S.A. 52:27D-196; N.J.S.A. 52:27D-198; N.J.S.A. 52:27D-199; N.J.S.A. 52:27D-201; … |
| `fire-sprinkler-duty` | `edu-fire-sprinkler-duty-nj` | Present | N.J.S.A. 52:27D-123.20; N.J.S.A. 52:27D-198; N.J.S.A. 52:27D-198.9; N.J.S.A. 52:27D-199; … |
| `firearms` | `edu-firearms-nj` | Present | N.J.S.A. 2C:58-4.6; N.J.S.A. 2C:39-5; N.J.S.A. 2C:39-6; N.J.S.A. 2C:58-15 |
| `foreclosure-disclosure` | `edu-no-foreclosure-disclosure-nj` | Absent | N.J.S.A. 2A:50-70; N.J.S.A. 2A:50-64; N.J.S.A. 56:8-2 |
| `foreign-ownership` | `edu-no-foreign-ownership-restriction-nj` | Absent | N.J.S.A. 46:3-18; N.J.S.A. 46:3-19 |
| `forfeiture-redemption` | `edu-forfeiture-redemption-nj` | Present | N.J.S.A. 2A:42-6; N.J.S.A. 2A:42-7; N.J.S.A. 2A:42-8; N.J.S.A. 2A:42-9; … |
| `frozen-standard-incorporation` | `edu-code-editions-nj` | Present | N.J.S.A. 52:27D-123; N.J.S.A. 52:27D-123.20; N.J.S.A. 52:27D-196; N.J.S.A. 52:27D-198; … |
| `furnishings-included` | `furnishings-included-la (tagged)` | Tagged | N.J.S.A. 2A:42-10.17 |
| `good-cause-notice` | `edu-good-cause-notice-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-61.6; R. 6:3-4; … |
| `government-fee-reimbursement` | `government-fee-reimbursement-ky (tagged)` | Tagged | N.J.S.A. 46:8-28.5; N.J.S.A. 52:27D-437.16; N.J.S.A. 2A:18-61.31; N.J.S.A. 55:13A-7.14; … |
| `governmental-fines` | `tenant-caused-fines-as (tagged)` | Tagged | N.J.S.A. 26:3-49; N.J.S.A. 26:3-54; N.J.S.A. 40:48-2.31; N.J.S.A. 46:8-49.3; … |
| `guarantor-renewal` | `guaranty-as (tagged)` | Tagged | N.J.S.A. 25:1-15; N.J.S.A. 46:8-21.2 |
| `guest-rights` | `edu-no-guest-rights-statute-nj` | Absent | N.J.S.A. 2A:42-107 |
| `habitability-materiality` | `edu-habitability-materiality-nj` | Present | N.J.S.A. 2A:42-86; N.J.S.A. 2A:42-87; N.J.S.A. 2A:42-88; N.J.S.A. 2A:42-91; … |
| `habitability-modifiable` | `edu-habitability-modifiable-nj` | Present | N.J.A.C. 5:10-4.1; N.J.A.C. 5:10-5.1; N.J.A.C. 5:28-1.1; N.J.A.C. 5:28-1.12; … |
| `habitability-presumption` | `edu-no-habitability-presumption-nj` | Absent | N.J.S.A. 2A:42-10.12; N.J.S.A. 2A:42-91; N.J.S.A. 2A:42-92; N.J.S.A. 2A:42-93 |
| `habitability-statement` | `edu-no-habitability-statement-nj` | Absent | N.J.S.A. 2A:18-61.67; N.J.S.A. 46:8-50; N.J.S.A. 55:13A-7.14; N.J.S.A. 58:12A-12.3c |
| `habitability-waiver` | `edu-habitability-waiver-nj` | Present | N.J.S.A. 2A:42-85; N.J.S.A. 2A:42-86; N.J.S.A. 2A:42-87; N.J.S.A. 2A:42-88; … |
| `hazardous-contamination-disclosure` | `edu-no-contamination-disclosure-nj` | Absent | N.J.S.A. 58:10B-13; N.J.S.A. 58:10B-24.3; N.J.S.A. 46:3C-2; N.J.S.A. 46:3C-3 |
| `health-district-rental-rules` | `edu-health-district-rental-rules-nj` | Present | N.J.S.A. 26:3-31; N.J.S.A. 2A:42-74; N.J.S.A. 2A:42-75; N.J.S.A. 2A:42-76; … |
| `hoa` | `edu-association-rentals-nj` | Present | N.J.S.A. 46:8B-9; N.J.S.A. 46:8B-15; N.J.S.A. 46:8B-21; N.J.S.A. 46:8D-13.1; … |
| `holding-deposit` | `edu-no-holding-deposit-rule-nj` | Absent | N.J.S.A. 46:8-19; N.J.S.A. 46:8-21.2; N.J.S.A. 46:8-18.1; N.J.S.A. 46:8C-11 |
| `holdover-rate` | `edu-holdover-rate-nj` | Absent | N.J.S.A. 2A:42-5; N.J.S.A. 2A:42-6; N.J.S.A. 46:8-10; N.J.S.A. 2A:39-4; … |
| `home-business` | `edu-home-business-nj` | Absent | N.J.S.A. 40:55D-66.5a; N.J.S.A. 40:55D-66.5b; N.J.S.A. 2A:18-61.1 |
| `homestead-waiver` | `edu-no-homestead-waiver-nj` | Absent | N.J.S.A. 2A:17-17.1 to -17.6; N.J.S.A. 2A:17-19; N.J.S.A. 2A:26-4; N.J.S.A. 2A:33-1; … |
| `infirmity-termination` | `edu-infirmity-termination-nj` | Absent | N.J.S.A. 46:8-9.1; N.J.S.A. 46:8-9.2; N.J.S.A. 46:8-9.3 |
| `informal-dispute-resolution` | `informal-dispute-resolution-or (tagged)` | Tagged | N.J.S.A. 2A:18-61.4; N.J.S.A. 46:8-48; N.J.S.A. 2A:18-61.1 |
| `inspection-condemnation-disclosure` | `edu-no-inspection-condemnation-disclosure-nj` | Absent | N.J.S.A. 55:13A-17; N.J.S.A. 52:27D-208; N.J.S.A. 40:48-2.5a; N.J.A.C. 5:10-1.13; … |
| `inspection-notice-penalty` | `edu-no-inspection-notice-penalty-nj` | Absent | N.J.S.A. 46:8-19; N.J.S.A. 46:8-21.1 |
| `jury-waiver` | `edu-jury-waiver-nj` | Present | N.J. Const. art. I, ¶ 9; N.J.S.A. 2A:18-61; N.J.S.A. 2A:23A-2 (hit text); N.J.S.A. 56:10-7.3 (hit text); … |
| `key-control-policy` | `edu-no-key-control-policy-nj` | Absent | N.J.A.C. 5:10-19.2; N.J.A.C. 5:10-1.10(e) (subsection read); N.J.S.A. 40A:12A-22.1; N.J.S.A. 55:13A-7.13 |
| `knowing-use-penalty` | `edu-knowing-use-penalty-nj` | Present | N.J.S.A. 46:8-44; N.J.S.A. 46:8-47; N.J.S.A. 46:8-48; N.J.S.A. 2A:18-61.6 |
| `landlord-breach-remedy` | `edu-landlord-breach-remedy-nj` | Present | N.J.S.A. 2A:42-85; N.J.S.A. 2A:42-88; N.J.S.A. 2A:42-10.10; N.J.S.A. 2A:42-10.13; … |
| `landlord-lien` | `edu-landlord-lien-nj` | Present | N.J.S.A. 2A:33-1 to -23; N.J.S.A. 2A:42-1; N.J.S.A. 2A:42-2; N.J.S.A. 2A:42-3; … |
| `landlord-registration` | `edu-landlord-registration-nj` | Present | N.J.S.A. 46:8-27; N.J.S.A. 46:8-28; N.J.S.A. 46:8-28.2; N.J.S.A. 46:8-28.5; … |
| `landlord-remedies-termination` | `edu-landlord-remedies-termination-nj` | Present | R. 6:3-4; R. 6:1-2; N.J.S.A. 2A:18-55; N.J.S.A. 2A:18-61.1; … |
| `landlord-self-cure` | `landlord-self-cure-as (tagged)` | Tagged | N.J.S.A. 46:8-21.1; N.J.S.A. 2A:18-61.1; N.J.A.C. 5:10 occupant-access subsection (c) |
| `late-fee-limit` | `edu-no-late-fee-cap-nj` | Absent | N.J.S.A. 2A:42-6.1; N.J.S.A. 2A:42-6.2; N.J.S.A. 2A:42-6.3; N.J.S.A. 2A:42-10.16a; … |
| `law-enforcement-cooperation` | `edu-law-enforcement-cooperation-nj` | Absent | N.J.S.A. 9:6-8.10; N.J.S.A. 2A:18-61.1; N.J. Const. art. I, ¶ 7 |
| `lead-state-notices` | `lead-in-drinking-water-disclosure-nj`, `lead-service-line-notice-nj`, `edu-lead-state-notices-nj` | Present | N.J.S.A. 58:12A-12.3; N.J.S.A. 58:12A-12.3a; N.J.S.A. 58:12A-12.3b; N.J.S.A. 58:12A-12.3c; … |
| `lease-completeness` | `edu-lease-completeness-nj` | Absent | N.J.S.A. 56:12-62 (scope check) |
| `lease-content-requirements` | `edu-lease-content-requirements-nj` | Present | N.J.S.A. 46:8-50; N.J.S.A. 2A:18-61.67; N.J.S.A. 2A:18-61.1; N.J.S.A. 56:12-2 |
| `lease-copy` | `lease-copy-receipt-nj` | Present | N.J.S.A. 56:8-2.22; N.J.S.A. 56:8-1; N.J.S.A. 2A:18-61.1 |
| `lease-notice-initial-requirement` | `edu-no-lease-initials-requirement-nj` | Absent | N.J.S.A. 46:8-50; N.J.S.A. 58:12A-12.3c |
| `lease-registration` | `edu-lease-registration-nj` | Present | N.J.S.A. 46:26A-2; N.J.S.A. 46:26A-12; N.J.S.A. 2A:18-61.3 |
| `lease-term-limitation` | `edu-lease-term-limitation-nj` | Present | N.J.S.A. 25:1-11; N.J.S.A. 25:1-12; N.J.S.A. 3B:28-3; N.J.S.A. 3B:28-3.1 |
| `lease-type-parity` | `edu-no-lease-type-parity-nj` | Absent | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-56; N.J.S.A. 46:8-10; N.J.S.A. 2A:42-11; … |
| `lease-type-size` | `edu-no-lease-type-size-nj` | Absent | N.J.S.A. 2A:18-61.67; N.J.S.A. 46:8-50; N.J.S.A. 58:12A-12.3c; N.J.S.A. 56:12-1; … |
| `limitation-of-actions` | `edu-limitation-of-actions-nj` | Present | N.J.S.A. 2A:14-1; N.J.S.A. 2A:14-2; N.J.S.A. 2A:14-4; N.J.S.A. 2A:14-24 |
| `liquidated-damages` | `edu-no-liquidated-damages-statute-nj` | Absent | N.J.S.A. 46:8-19; N.J.S.A. 46:8-21.1 |
| `lockout-for-rent-delinquency` | `edu-lockout-for-rent-delinquency-nj` | Present | N.J.S.A. 2A:39-1 to -8; N.J.S.A. 2C:33-11.1; N.J.S.A. 2A:42-10.16; N.J.S.A. 2A:42-10.16a; … |
| `maintenance-duty-shift` | `edu-no-maintenance-duty-shift-nj` | Absent | N.J.A.C. 5:10-4.1; N.J.A.C. 5:10-5.6; N.J.S.A. 2A:42-96; N.J.S.A. 2A:42-86 |
| `meter-conservation-charge` | `edu-no-meter-conservation-charge-nj` | Absent | N.J.S.A. 55:13A-7.8; N.J.S.A. 55:13A-7.9; N.J.S.A. 55:13A-7.10; N.J.S.A. 55:13A-7.11 |
| `meth-disclosure` | `edu-no-meth-disclosure-nj` | Absent | N.J.S.A. 2C:35-4 |
| `military-air-zone-disclosure` | `edu-no-military-zone-disclosure-nj` | Absent | N.J.S.A. 6:1-85.1; N.J.S.A. 6:1-85.2; N.J.S.A. 46:3C-2; N.J.S.A. 46:3C-3; … |
| `minor-tenant-filing` | `edu-minor-tenant-filing-nj` | Present | N.J.S.A. 9:17B-1; N.J.S.A. 9:17B-2; N.J.S.A. 9:17B-3; N.J.S.A. 46:39-3; … |
| `municipal-utility-lien` | `edu-municipal-utility-lien-nj` | Present | N.J.S.A. 40A:26A-12; N.J.S.A. 40A:31-12; N.J.S.A. 40:14A-21; N.J.S.A. 40:14B-41; … |
| `nonpayment-notice` | `edu-nonpayment-notice-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-61.4; N.J.S.A. 2A:18-53; … |
| `nonrefundable-deposit-notice` | `edu-no-nonrefundable-deposit-rule-nj` | Absent | N.J.S.A. 46:8-19; N.J.S.A. 46:8-21.1; N.J.S.A. 46:8-24; N.J.S.A. 46:8-18.1 |
| `nonrefundable-deposit-separate-notice` | `edu-no-nonrefundable-separate-notice-nj` | Absent | N.J.S.A. 46:8-19; N.J.S.A. 46:8-21.1 |
| `nonresident-owner-agent` | `edu-nonresident-owner-agent-nj` | Present | N.J.S.A. 46:8-27; N.J.S.A. 46:8-28; N.J.S.A. 46:8-28.1; N.J.S.A. 46:8-29; … |
| `notice-service-fee` | `edu-no-notice-fee-rule-nj` | Absent | N.J.S.A. 2A:18-61.66 |
| `notice-to-quit-waiver` | `edu-notice-to-quit-waiver-nj` | Present | N.J.S.A. 2A:18-56; N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-61.4; … |
| `notice-to-vacate-additional-terms` | `edu-no-notice-to-vacate-terms-rule-nj` | Absent | N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-56 |
| `nuisance` | `edu-nuisance-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2C:33-12; N.J.S.A. 2C:33-12.1; … |
| `optional-lease-terms` | `edu-optional-lease-terms-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.66; N.J.S.A. 2A:18-61.67; N.J.S.A. 46:8-21.2; … |
| `ordnance-demolition-meter-disclosures` | `edu-no-ordnance-demolition-meter-disclosure-nj` | Absent | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2 |
| `other-landlord-facilities` | `edu-other-landlord-facilities-nj` | Present | N.J.A.C. 5:10-4.1; N.J.A.C. 5:10-12.1; N.J.A.C. 5:10-12.2; N.J.A.C. 5:10-12.3; … |
| `owner-move-in-reservation` | `edu-owner-move-in-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-61.3; N.J.S.A. 2A:18-61.4; … |
| `parking-rules-notice` | `edu-parking-rules-notice-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 56:13-9; N.J.S.A. 56:13-13; N.J.S.A. 56:13-16; … |
| `part5-nonwaivable` | `edu-nonwaivable-rights-nj` | Present | N.J.S.A. 2A:18-61.4; N.J.S.A. 46:8-24; N.J.S.A. 46:8-36; N.J.S.A. 2A:42-96; … |
| `periodic-services-entry` | `scheduled-services-entry-la (tagged)` | Tagged | N.J.A.C. 5:10-5.1 |
| `pest-control-notice` | `edu-no-pest-control-notice-statute-nj` | Absent | N.J.S.A. 13:1F-21; N.J.S.A. 13:1F-27 |
| `pet-eviction-fact-sheet` | `edu-no-pet-eviction-fact-sheet-nj` | Absent | N.J.S.A. 2A:18-75 |
| `pet-fees` | `edu-pet-fees-nj` | Present | N.J.S.A. 46:8-19; N.J.S.A. 46:8-21.2; N.J.S.A. 46:8-26; N.J.S.A. 10:5-29.2; … |
| `plain-language-consumer-statement` | `edu-plain-language-consumer-statement-nj` | Present | N.J.S.A. 56:12-1; N.J.S.A. 56:12-2; N.J.S.A. 56:12-3; N.J.S.A. 56:12-4; … |
| `political-access` | `edu-no-political-access-rule-nj` | Absent | N.J.S.A. 2A:42-10.10; N.J.S.A. 2A:42-10.11; N.J.S.A. 2A:42-10.12; N.J.S.A. 2A:42-10.13; … |
| `pool-safety` | `edu-pool-safety-nj` | Present | N.J.A.C. 5:10-6.5; N.J.A.C. 5:10-13.4; N.J.S.A. 52:27D-133.1; N.J.S.A. 52:27D-133.2; … |
| `portable-cooling-device` | `edu-no-portable-cooling-rule-nj` | Absent |  |
| `portable-solar` | `edu-portable-solar-nj`, `portable-solar-devices-nj` | Present | P.L.2026, c.82, ss.1-5 (Senate No. 2368, Third Reprint; last bill print) |
| `portfolio-thresholds` | `edu-portfolio-thresholds-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:42-10.13; N.J.S.A. 2A:42-86; N.J.S.A. 46:8-26; … |
| `possession-bond` | `edu-no-possession-bond-nj` | Absent | N.J.S.A. 2A:16-9; N.J.S.A. 2A:18-61.4 |
| `post-eviction-property` | `edu-post-eviction-property-nj` | Present | N.J.S.A. 2A:18-72 to -84; N.J.S.A. 2A:42-10.16 |
| `prohibited-acts-renter` | `prohibited-acts-renter-wy (tagged)` | Tagged | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.A.C. 5:10-5.1 |
| `promises-to-repair` | `edu-no-promises-to-repair-rule-nj` | Absent | N.J.S.A. 56:8-1; N.J.S.A. 56:8-2 |
| `prop65-rental-warning` | `edu-no-chemical-warning-rule-nj` | Absent |  |
| `property-tax-rent-disclosure` | `edu-tenant-property-tax-rebate-nj` | Present | N.J.S.A. 54:4-6.2 to -6.8; N.J.S.A. 54:4-6.10 to -6.13; N.J.S.A. 54:4-3.30a; N.J.S.A. 54:4-8.18 |
| `protected-class-inquiry-ban` | `edu-protected-class-inquiry-ban-nj` | Present | N.J.S.A. 10:5-12; N.J.S.A. 10:5-5; N.J.A.C. 13:10-1.1; N.J.A.C. 13:10-2.2; … |
| `purpose-limitation` | `edu-purpose-limitation-nj` | Present | N.J.S.A. 46:8-8; N.J.S.A. 2C:33-12; N.J.S.A. 2C:33-12.1; N.J.S.A. 2A:54A-1 to -5; … |
| `quiet-possession` | `edu-no-quiet-possession-statute-nj` | Absent | N.J.S.A. 46:4-5; N.J.S.A. 2A:39-1; N.J.S.A. 40:48-2.12q |
| `recycling-notice` | `edu-no-recycling-notice-nj` | Absent | N.J.S.A. 13:1E-99.16; N.J.S.A. 13:1E-99.13a; N.J.S.A. 40:66-1.3 |
| `redemption` | `edu-redemption-nj` | Present | N.J.S.A. 2A:42-10.16a; N.J.S.A. 2A:18-55; N.J.S.A. 2A:42-7; N.J.S.A. 2A:42-8; … |
| `religious-cultural-display` | `edu-no-religious-display-rule-nj` | Absent | N.J.S.A. 10:5-12; N.J.S.A. 10:5-5; N.J.S.A. 45:22A-48.1 |
| `rent-concession` | `rent-concession-wi (tagged)` | Tagged | N.J.S.A. 46:8-48 |
| `rent-demand-bar` | `edu-rent-demand-bar-nj` | Present | N.J.S.A. 2A:42-74; N.J.S.A. 2A:42-75; N.J.S.A. 2A:42-76; N.J.S.A. 2A:42-77; … |
| `rent-escalation` | `rent-escalation-la (tagged)` | Tagged | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-61.4; N.J.S.A. 2A:18-56; … |
| `rent-increase-notice` | `edu-rent-increase-notice-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-56; N.J.S.A. 2A:42-10.12; … |
| `rent-installments` | `rent-installments-or (tagged)` | Tagged | N.J.S.A. 2A:42-6.1; N.J.S.A. 2A:42-6.2; N.J.S.A. 2A:42-6.3; N.J.S.A. 2A:33-7 (search hit only; not relied on) |
| `rent-into-court-counterclaim` | `edu-rent-into-court-counterclaim-nj` | Present | R. 6:3-1; R. 6:3-4; R. 6:4-1; N.J.S.A. 2A:18-55; … |
| `rent-receipt-anti-waiver` | `edu-no-rent-receipt-anti-waiver-nj` | Absent | N.J.S.A. 46:8-48; N.J.S.A. 46:8-24; N.J.S.A. 46:8-20; N.J.S.A. 46:8-21 |
| `rent-receipts` | `edu-rent-receipts-nj` | Present | N.J.S.A. 46:8-49.2; N.J.S.A. 46:8-49.3; N.J.S.A. 46:8-47; N.J.S.A. 46:8-44; … |
| `rent-reporting` | `edu-rent-reporting-nj` | Present | N.J.S.A. 52:27D-287.8; N.J.S.A. 52:27D-287.9 |
| `rent-tax` | `edu-rent-tax-nj` | Present | N.J.S.A. 54:32B-2; N.J.S.A. 54:32B-3; N.J.S.A. 54:32D-1; N.J.S.A. 40:48F-1 |
| `rental-inspection` | `edu-rental-inspection-nj` | Present | N.J.S.A. 55:13A-3; N.J.S.A. 55:13A-13; N.J.A.C. 5:10-1.10 |
| `renters-insurance-rules` | `edu-renters-insurance-rules-nj` | Present | N.J.S.A. 46:8-38; N.J.S.A. 46:8-39; N.J.S.A. 46:8-40; N.J.S.A. 46:8-41; … |
| `repair-cost-termination` | `edu-repair-cost-termination-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-61.1g; N.J.S.A. 2A:18-61.1h; … |
| `repair-escrow-exemption-notice` | `edu-no-repair-escrow-exemption-nj` | Absent | N.J.S.A. 2A:42-84.1 to -84.6; N.J.S.A. 2A:42-85 to -96 |
| `repair-notice` | `edu-repair-notice-nj` | Present | N.J.S.A. 2A:42-86; N.J.S.A. 2A:42-90; N.J.S.A. 2A:42-91; N.J.S.A. 2A:42-96; … |
| `required-disclosures` | `edu-required-disclosures-nj` | Present | N.J.S.A. 46:8-44; N.J.S.A. 46:8-46; N.J.S.A. 46:8-27; N.J.S.A. 46:8-29; … |
| `required-fees` | `edu-mobile-home-park-fees-nj`, `fees-and-charges-vi (tagged)` | Present+Tagged | N.J.S.A. 46:8C-2; N.J.S.A. 46:8C-3; N.J.S.A. 46:8-48 |
| `rights-responsibilities-guide` | `edu-rights-responsibilities-guide-nj` | Present | N.J.S.A. 46:8-44; N.J.S.A. 46:8-45; N.J.S.A. 46:8-46; N.J.S.A. 46:8-47; … |
| `rules-regulations` | `edu-rules-regulations-nj`, `rules-wi (tagged)` | Present+Tagged | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-61.4; N.J.S.A. 2A:42-10.10; … |
| `sale-or-management-change` | `edu-sale-or-management-change-nj` | Present | N.J.S.A. 46:8-19; N.J.S.A. 46:8-20; N.J.S.A. 46:8-21; N.J.S.A. 46:8-27; … |
| `sanitary-code-variance` | `safety-exception-notice-nj`, `edu-code-variance-nj` | Present | N.J.S.A. 55:13A-11; N.J.S.A. 52:27D-200 |
| `scope` | `edu-scope-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 46:8-26; N.J.S.A. 46:8-44; N.J.S.A. 2A:42-86; … |
| `seasonal-tenancy` | `edu-seasonal-tenancy-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:42-10.17; N.J.S.A. 46:8-19; N.J.S.A. 58:12A-32; … |
| `security-deposit-cap` | `edu-security-deposit-cap-nj` | Present | N.J.S.A. 46:8-21.2; N.J.S.A. 46:8-19; N.J.S.A. 46:8-20; N.J.S.A. 46:8-24; … |
| `security-deposit-holding` | `edu-security-deposit-holding-nj` | Present | N.J.S.A. 46:8-19; N.J.S.A. 46:8-22; N.J.S.A. 46:8-23; N.J.S.A. 46:8-25; … |
| `security-deposit-nonwaiver` | `edu-security-deposit-nonwaiver-nj` | Present | N.J.S.A. 46:8-24; N.J.S.A. 46:8-26; N.J.S.A. 46:8-21.2; N.J.S.A. 46:8-19; … |
| `security-deposit-on-sale` | `edu-security-deposit-on-sale-nj` | Present | N.J.S.A. 46:8-20; N.J.S.A. 46:8-21; N.J.S.A. 46:8-19; N.J.S.A. 46:8-26 |
| `security-deposit-penalty` | `edu-security-deposit-penalty-nj` | Present | N.J.S.A. 46:8-21.1; N.J.S.A. 46:8-19; N.J.S.A. 46:8-21.4; N.J.S.A. 46:8-21.5; … |
| `security-deposit-standards` | `edu-no-security-deposit-standards-nj` | Absent | N.J.S.A. 46:8-21.2 |
| `security-deposit-use` | `edu-security-deposit-use-nj` | Present | N.J.S.A. 46:8-21.1; N.J.S.A. 46:8-24; N.J.S.A. 46:8-26; DCA Security Deposit Bulletin (July 2025) |
| `security-devices` | `edu-security-devices-nj` | Present | N.J.A.C. 5:10-19.1; N.J.A.C. 5:10-19.2; N.J.A.C. 5:10-1.3 (Multiple dwelling definition); N.J.A.C. 5:28-1.1; … |
| `self-help-eviction` | `edu-self-help-eviction-nj` | Present | N.J.S.A. 2A:39-1 to -8; N.J.S.A. 2C:33-11.1; N.J.S.A. 2A:42-10.16; R. 6:7-1 |
| `senior-housing-work-card` | `edu-no-senior-housing-work-card-nj` | Absent | N.J.S.A. 10:5-5 |
| `service-animal-denial-penalty` | `edu-service-animal-denial-penalty-nj` | Present | N.J.S.A. 10:5-29.1; N.J.S.A. 10:5-29.2; N.J.S.A. 10:5-29.3; N.J.S.A. 10:5-29.4; … |
| `service-animal-misrepresentation` | `edu-service-animal-misrepresentation-nj` | Present | N.J.S.A. 10:5-29.5; N.J.S.A. 10:5-29.2 |
| `servicemember-rights` | `edu-servicemember-rights-nj` | Present | N.J.S.A. 38:23C-1; N.J.S.A. 38:23C-2; N.J.S.A. 38:23C-3; N.J.S.A. 38:23C-4; … |
| `sex-offender-disclosure` | `edu-sex-offender-disclosure-nj` | Present | N.J.S.A. 2C:7-13; N.J.S.A. 2C:7-15; N.J.S.A. 2C:7-16; N.J.S.A. 46:8-55; … |
| `sex-offender-occupancy` | `edu-no-sex-offender-occupancy-rule-nj` | Absent | N.J.S.A. 46:8-55; N.J.S.A. 2C:7-16 |
| `sfr-occupancy-disclosure` | `edu-no-sfr-occupancy-disclosure-nj` | Absent | N.J.S.A. 46:8-50; N.J.S.A. 2A:18-61.67; N.J.S.A. 55:13A-7.14; N.J.S.A. 55:13A-7.19 |
| `shoreline-access-disclosure` | `edu-no-shoreline-access-disclosure-nj` | Absent | N.J.S.A. 13:1D-150; N.J.S.A. 2A:42A-8 |
| `showing-notice-waiver` | `showing-notice-la (tagged)` | Tagged | N.J.S.A. 2A:39-1; N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.A.C. 5:10-5.1 |
| `shutdown-rent-protection` | `edu-no-shutdown-rent-protection-nj` | Absent |  |
| `single-family-zone-lease-limit` | `edu-no-single-family-zone-lease-limit-nj` | Absent |  |
| `smart-access` | `edu-no-smart-access-rule-nj` | Absent | N.J.A.C. 5:10-19.2; N.J.S.A. 46:8-9.14 |
| `smoke-drift-waiver` | `edu-smoke-drift-nj` | Present | N.J.S.A. 26:3D-56; N.J.S.A. 26:3D-57; N.J.S.A. 26:3D-58; N.J.S.A. 26:3D-59; … |
| `social-security-defense` | `edu-no-benefit-delay-defense-nj` | Absent | N.J.S.A. 2A:42-6.1; N.J.S.A. 2A:42-6.3; N.J.S.A. 2A:18-55; N.J.S.A. 2A:42-10.16; … |
| `source-of-income` | `edu-source-of-income-nj` | Present | N.J.S.A. 10:5-12; N.J.S.A. 10:5-5; N.J.S.A. 10:5-14.1a; P.L.2025, c.251 (session law); … |
| `special-district-representation` | `edu-no-special-district-statement-nj` | Absent | N.J.S.A. 40:56-66 |
| `sprinkler-disclosure` | `edu-no-sprinkler-disclosure-nj` | Absent |  |
| `statute-of-frauds-lease-term` | `edu-statute-of-frauds-lease-term-nj` | Present | N.J.S.A. 25:1-11; N.J.S.A. 25:1-12; N.J.S.A. 25:1-13; N.J.S.A. 25:1-14; … |
| `statutory-caps` | `edu-statutory-caps-nj` | Present | N.J.S.A. 46:8-21.2; N.J.S.A. 46:8-18.1; N.J.S.A. 2A:42-5; N.J.S.A. 2A:42-6; … |
| `stigmatized-property` | `edu-no-stigmatized-property-rule-nj` | Absent | N.J.S.A. 10:5-5 |
| `stove-refrigerator` | `edu-stove-refrigerator-nj` | Present | N.J.A.C. 5:10-20.1; N.J.A.C. 5:10-5.7; N.J.A.C. 5:10-1.6; N.J.A.C. 5:10-17.4; … |
| `student-housing` | `edu-student-housing-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 55:13B-3; N.J.S.A. 55:13A-11; N.J.S.A. 55:13A-3; … |
| `subsidized-inspection-refusal` | `edu-no-subsidized-inspection-refusal-rule-nj` | Absent | N.J.S.A. 10:5-12; N.J.S.A. 10:5-5; N.J.S.A. 2A:18-61.1; DCR SOI fact sheet |
| `subsidy-habitability-proration` | `edu-no-subsidy-proration-rule-nj` | Absent | N.J.S.A. 10:5-12; N.J.S.A. 10:5-5; N.J.S.A. 52:27D-287.8 |
| `subsidy-late-fee` | `edu-subsidy-late-fee-nj` | Present | N.J.S.A. 52:27D-287.7; N.J.S.A. 52:27D-287.8; N.J.S.A. 52:27D-287.9; N.J.S.A. 10:5-12; … |
| `substandard-property-receivership` | `edu-substandard-property-receivership-nj` | Present | N.J.S.A. 2A:42-114; N.J.S.A. 2A:42-115; N.J.S.A. 2A:42-116; N.J.S.A. 2A:42-117; … |
| `tax-escalation` | `edu-tax-escalation-nj`, `tax-insurance-escalation-la (tagged)` | Present+Tagged | N.J.S.A. 54:4-6.2; N.J.S.A. 54:4-6.3; N.J.S.A. 54:4-6.4; N.J.S.A. 54:4-6.5; … |
| `telecom-access` | `edu-telecom-access-nj` | Present | N.J.S.A. 48:5A-49; N.J.S.A. 48:5A-50; N.J.S.A. 48:5A-51 |
| `tenancy-at-will` | `edu-tenancy-at-will-nj` | Present | N.J.S.A. 2A:18-56; N.J.S.A. 2A:18-57; N.J.S.A. 2A:18-53; N.J.S.A. 2A:18-61.1 |
| `tenant-bankruptcy` | `edu-no-tenant-bankruptcy-rule-nj` | Absent | N.J.S.A. 46:8-23 |
| `tenant-confidential-information` | `edu-tenant-confidential-information-nj` | Present | N.J.S.A. 46:8-9.10; N.J.S.A. 46:8-9.11; N.J.S.A. 46:8-9.12; N.J.S.A. 56:8-161; … |
| `tenant-death` | `edu-tenant-death-nj` | Present | N.J.S.A. 46:8-9.1; N.J.S.A. 46:8-9.2; N.J.S.A. 46:8-9.3; N.J.S.A. 54:4-6.7; … |
| `tenant-display-rights` | `edu-no-display-rights-statute-nj` | Absent | N.J.S.A. 45:22A-48.1; N.J.S.A. 45:22A-48.2; N.J.S.A. 45:22A-48.3; N.J.S.A. 5:4-1; … |
| `tenant-employee-housing` | `edu-tenant-employee-housing-nj`, `employee-housing-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2C:43-8.1; N.J.S.A. 2A:18-56 |
| `tenant-forward-proceedings` | `tenant-forward-proceedings-ca (tagged)` | Tagged | N.J.S.A. 46:8-1; N.J.S.A. 46:3-8; N.J.S.A. 4:7-41 |
| `tenant-insurance-claims` | `edu-no-tenant-insurance-claims-nj` | Absent | N.J.S.A. 46:8-50 |
| `tenant-portal` | `edu-tenant-portal-nj` | Present | N.J.S.A. 46:8-49.1; N.J.S.A. 46:8-49.2; N.J.S.A. 46:8-49; N.J.S.A. 46:8-44; … |
| `tenant-records` | `edu-tenant-records-nj` | Present | N.J.S.A. 46:8-49.2; N.J.S.A. 46:8-49.3; N.J.S.A. 46:8-44; N.J.S.A. 56:8-162; … |
| `tenant-repair-agreement` | `tenant-repair-agreement-hi (tagged)` | Tagged | N.J.S.A. 46:8-6; N.J.S.A. 46:8-7; N.J.S.A. 46:8-44 |
| `tenant-repair-remedies` | `edu-tenant-repair-remedies-nj` | Present | N.J.S.A. 26:3-31; N.J.S.A. 26:3-31.4; N.J.S.A. 26:3-31.5; N.J.S.A. 26:3-31.6; … |
| `tenant-right-to-organize` | `edu-tenant-right-to-organize-nj` | Present | N.J.S.A. 2A:42-10.10; N.J.S.A. 2A:42-10.11; N.J.S.A. 2A:42-10.12; N.J.S.A. 2A:42-10.13; … |
| `tenant-rights-statement` | `edu-tenant-rights-statement-nj` | Present | N.J.S.A. 46:8-44; N.J.S.A. 46:8-45; N.J.S.A. 46:8-46; N.J.S.A. 46:8-47; … |
| `tenant-security-cameras` | `edu-no-tenant-camera-rule-nj` | Absent | N.J.S.A. 40:48-1.7; N.J.S.A. 2C:14-9; N.J.S.A. 2A:156A-4; N.J.S.A. 2A:156A-2 (definitions (b)-(c)) |
| `tenant-statutory-duties` | `edu-tenant-statutory-duties-nj` | Present | N.J.A.C. 5:10-5.1; N.J.A.C. 5:10-5.2; N.J.A.C. 5:10-5.3; N.J.A.C. 5:10-5.4; … |
| `term-change-notice` | `edu-term-change-notice-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-56; N.J.S.A. 2A:42-10.10; … |
| `termination-notice` | `edu-termination-notice-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.3; N.J.S.A. 2A:18-61.4; N.J.S.A. 2A:18-53; … |
| `towing` | `edu-private-property-towing-nj` | Present | N.J.S.A. 56:13-13; N.J.S.A. 56:13-16 |
| `tpa-exemption-notice` | `edu-no-tpa-exemption-notice-nj` | Absent | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:42-84.3 |
| `tpa-notice` | `edu-tpa-notice-nj` | Present | N.J.S.A. 46:8-44; N.J.S.A. 46:8-45; N.J.S.A. 46:8-46; N.J.S.A. 2A:18-61.8 |
| `tpa-sunset` | `edu-no-tpa-sunset-nj` | Absent | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-59.3; N.J.S.A. 2A:18-61.16a |
| `translation-duty` | `edu-translation-duty-nj` | Present | N.J.S.A. 55:13A-7.19; N.J.S.A. 55:13A-3; N.J.S.A. 46:8-45; N.J.S.A. 46:8-46; … |
| `trespass-notice` | `edu-trespass-notice-nj` | Present | N.J.S.A. 2C:18-3; N.J.S.A. 2A:18-61.1; N.J.S.A. 2C:33-11.1 |
| `unauthorized-occupant-removal` | `edu-unauthorized-occupant-removal-nj` | Present | N.J.S.A. 2A:39-1 to -8; N.J.S.A. 2A:35-1 to -3; N.J.S.A. 2C:18-3; N.J.S.A. 2C:33-11.1; … |
| `unbundled-parking` | `edu-no-unbundled-parking-rule-nj` | Absent | N.J.S.A. 55:13A-7.3; N.J.S.A. 55:13A-3; N.J.S.A. 46:8B-35; N.J.S.A. 48:7-6.1 |
| `unconscionability` | `edu-unconscionability-nj` | Present | N.J.S.A. 56:8-1; N.J.S.A. 56:8-2; N.J.S.A. 2A:18-61.1; N.J.S.A. 56:12-4.1 |
| `unpaid-damages-interest` | `interest-on-unpaid-amounts-nj` | Present | N.J.S.A. 31:1-1; N.J.S.A. 2C:21-19; N.J.S.A. 46:8-19 |
| `usufructuary-lessor` | `edu-usufructuary-lessor-nj` | Present | N.J.S.A. 2A:42-11; N.J.S.A. 2A:42-12; N.J.S.A. 2A:65-6 |
| `utility-allowance-cap` | `utility-allowance-cap-co (tagged)` | Tagged | N.J.S.A. 55:13A-7.8; N.J.S.A. 55:13A-7.9; N.J.S.A. 55:13A-3; N.J.S.A. 48:2-13; … |
| `utility-apportionment` | `edu-utility-apportionment-nj` | Present | N.J.S.A. 55:13A-7.8; N.J.S.A. 55:13A-7.9; N.J.S.A. 55:13A-7.10; N.J.S.A. 55:13A-7.11; … |
| `utility-deposit-return` | `edu-utility-deposit-nj` | Present | N.J.S.A. 46:8-19; N.J.S.A. 46:8-21.1; N.J.S.A. 46:8-21.2; N.J.S.A. 46:8-26; … |
| `utility-disclosure-attachment` | `edu-utility-disclosure-attachment-nj` | Present | N.J.A.C. 5:10-25.2; N.J.S.A. 55:13A-7.9; N.J.S.A. 55:13A-3; N.J.S.A. 48:2-29.30 |
| `utility-disconnection-notice-authorization` | `utility-disconnection-notice-authorization-nj` | Present | N.J.S.A. 48:2-29.42; N.J.S.A. 48:2-13 |
| `utility-interruption-submeter` | `edu-utility-interruption-submeter-nj` | Present | N.J.S.A. 2C:33-11.1; N.J.S.A. 2A:39-1; N.J.S.A. 2A:39-2; N.J.A.C. 5:10-4.2; … |
| `utility-landlord-account` | `edu-utility-landlord-account-nj` | Present | N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-61.60; N.J.S.A. 2A:18-61.61; N.J.S.A. 2A:42-85; … |
| `utility-shutoff-statute` | `edu-utility-shutoff-statute-nj` | Present | N.J.S.A. 48:2-24; N.J.S.A. 40A:5A-28; N.J.S.A. 40A:5A-29; N.J.S.A. 40A:5A-31; … |
| `utility-submetering-disclosure` | `edu-no-utility-submetering-disclosure-nj` | Absent | N.J.S.A. 48:2-13; N.J.S.A. 55:13A-7.8; N.J.S.A. 55:13A-7.9 |
| `utility-transfer` | `utility-transfer-nj` | Present | N.J.S.A. 2C:33-11.1; N.J.A.C. 5:10-4.2; N.J.S.A. 48:2-29.54; N.J.S.A. 48:2-29.56b; … |
| `veterans-incentive` | `edu-no-veterans-incentive-nj` | Absent | N.J.S.A. 10:5-12; N.J.S.A. 10:5-5; N.J.S.A. 46:8-51; N.J.S.A. 52:27D-287.1; … |
| `waiver-by-acceptance` | `edu-waiver-by-acceptance-nj` | Absent | N.J.S.A. 2A:18-55; N.J.S.A. 2A:42-10.16a; N.J.S.A. 2A:42-10.16 |
| `water-heater-temperature` | `edu-water-heater-temperature-nj` | Present | N.J.A.C. 5:10-15.1; N.J.A.C. 5:10-15.2; N.J.A.C. 5:10-15.3; N.J.A.C. 5:10-1.4; … |
| `waterbed` | `edu-no-waterbed-rule-nj`, `waterbed-nj` | Absent | N.J.S.A. 2A:18-61.1; N.J.S.A. 46:8-21.1 |
| `written-notice-required` | `edu-written-notice-required-nj` | Present | N.J.S.A. 2A:18-61.2; N.J.S.A. 2A:18-61.1; N.J.S.A. 2A:18-56; N.J.S.A. 46:8-19; … |

## §3 Batteries for every absence
Absence topics only (searches for present topics are in the row notes). Each battery: name: pattern | hits | known positive | control term `zqxvbnmwt` 0 (run in the same step).

- **`abandonment-and-mitigation`**: mitig-ll2: 'mitigat' ctx landlord|lessor|tenant | 14 (none on reletting) | 46:8-56 passed | control 0 ; mitig-46: 'mitigat|re-?let' title 46 | 5 | 46:8-56 passed | control 0 ; relet2: 're-?let|re-?rent|relet' | 2 (boat pre-rental) | 12:7-61 passed | control 0 ; mitig-all: 'mitigat' title 2A | 9 | 2C:5-4 failed (outside title filter) | control 0 (+1 more in the running record)
- **`accessory-dwelling-unit`**: adu2: 'accessory\s+(dwelling|apartment|unit)|granny|in-law\s+(suite|apartment)' | 3 | 52:27D-304 passed | control 0 ; adu3: 'accessory' ctx dwelling|apartment|residen title 40 | 2 | 40:55D-7 failed | control 0
- **`actual-notice-method`**: actual-notice2: 'actual\s+notice' ctx tenant|lessee|landlord | 3 | 46:39-4 passed | control 0 ; notice-text2: 'text\s+messag|electronic\s+mail|e-mail' ctx tenant|lessee | 6 | 2A:50-70 passed | control 0 ; agreed-notice: 'notice' ctx agreed-method phrases title 46 | 0 | none | control 0
- **`adverse-proceeding-notice`**: ll-notify2: '(landlord|owner|lessor)\s+shall\s+(\w+\s+){0,6}(notify|notice|inform)' ctx tenant | 11 | 2A:50-70 passed | control 0 ; notify-tenants: '(notify|notice\s+to|inform)\s+(all\s+|each\s+|the\s+)?(tenants|residents|occupants)' | 14 | 2A:50-70 in hits | control 0 ; condemn-tenant: 'condemn|vacate\s+order|order\s+to\s+vacate' ctx tenant title 2A | 0 | none | control 0
- **`alarm-tampering-fee`**: tamper3: 'tamper' ctx alarm|detector|sensor | 3 | 2A:38-1 passed | control 0 ; alarm-fee: '(fee|charge|penalt)\w*' ctx smoke/CO alarm terms | 5 | 52:27D-198.3 failed (ctx); 52:27D-198.19 in hits | control 0 ; smoke: 'smoke\s+(alarm|detector|sensitive)|carbon\s+monoxide\s+(alarm|detector|sensor)' | 10 | (finder) | control 0
- **`animal-care-access`**: animal-entry2: '(animal|pet|livestock|dog|cat)s?\b' ctx landlord|tenant|lessee|rental (unit|premises) | 43 | 2A:18-75 passed | control 0 ; animal-enter: '(enter|entry)' ctx animal..dwelling title 4 | 2 | none | control 0 ; humane: 'take (possession|custody) of (the|any|an) (living )?animal' | 2 | (finder: 4:22-46.2) | control 0
- **`appliances-excluded`**: appl3: '(appliance|refrigerator|stove|dishwasher|microwave)s?\b' ctx landlord|tenant|lessee|lessor | 18 | 46:8C-2 passed | control 0 ; appl: '(appliance|refrigerator|stove|range|dishwasher|washer|dryer|microwave)s?\b' ctx landlord|tenant|lessee|lease title 46 | 1 | 46:8C-2 in hits | control 0
- **`asbestos-hazards`**: asb3: 'asbestos' | 24 | 34:5A-36 passed | control 0 ; asb2: 'asbestos' ctx tenant|lessee|landlord|occupant|dwelling | 4 | 34:5A-36 failed (ctx) | control 0
- **`association-obligations-disclosure`**: assoc-lease2: '(lease|tenant|lessee|rent)' ctx association title 46 | 40 | 46:8B-15 passed | control 0 ; assoc-lease45: '(lease|tenant|lessee)' ctx association title 45 | 36 | none | control 0 ; assoc-disc: '(disclos|copy\s+of\s+the\s+(master\s+deed|bylaws|by-laws|rules))' ctx tenant|lessee | 54 | 2A:50-70 failed | control 0
- **`automatic-renewal`**: autorenew2: 'automatic(ally)?\s+renew|auto-renew|renew\w*\s+automatically' | 20 | 56:12-95.5 passed | control 0 ; renew-lease: 'renew' ctx residential lease|dwelling|tenant title 2A | 12 | none | control 0
- **`bed-bug-disclosure`**: bedbug2: 'bed\s*-?\s*bugs?|cimex' | 3 | 29:4-14 passed | control 0 ; bedbug-disc: '(disclos|notif|notice)\w*' ctx bed bugs|infest | see log | 29:4-14 | control 0 ; infest2: 'infest' ctx tenant|landlord|lessee|dwelling|hotel | 3 | 29:4-14 passed | control 0
- **`certificate-of-occupancy-disclosure`**: co3: 'certificate\s+of\s+(occupancy|habitability)' ctx tenant|lessee|lease|rent | 30 | 52:27D-198.2 passed | control 0 ; co2: same ctx disclose..tenant | 1 | 52:27D-198.2 failed | control 0
- **`cold-weather-vacate-notice`**: winter3: '(winter|cold\s+weather|freezing|november\s+15|march\s+15|heating\s+season)' ctx tenant|evict|lessee|warrant|vacate | 10 | 40A:5A-28 passed | control 0 ; winter2: 'winter|cold\s+weather' title 2A | 2 | none | control 0
- **`collection-fee`**: collection-fee: collection (fees?|costs?|charges?|expenses?) | 23 | 17:16C-42 | control 0 ; notice-fee2: (eviction|notice|service|filing|posting|processing|administrative) (fee|charge)s?, ctx tenant|landlord|lease|lessee | 74 | 22A:2-30 | control 0
- **`communal-land-lease-approval`**: tribal2: 'tribal|tribe|indian\s+(land|reservation|nation)|communal\s+land|native\s+(land|american)' ctx lease|rent|land | 17 | 2A:34-54 passed | control 0
- **`condemned-premises-rent-bar`**: condemned-rentbar2: (unfit|placard\w*|condemned|vacated\s+and\s+closed|uninhabitable|untenantable) within 20 words of rent|rents|rental payments, both orders | 1 | 52:15D-15 | control 0 ; unfit-hab: unfit\s+for\s+human\s+(habitation|occupancy)|unfit\s+for\s+habitation | 7 (40:48-2.3 to -2.9, 54:5-77, 55:19-82; none a rent bar) | n/a | control 0 ; code-displace: displacement by code enforcement | 4 (20:4-3.1, 20:4-4.1, 20:4-4.1a, 20:4-14) | n/a | control 0
- **`confirmed-absences-habitability`**: radon: radon | 23 | 26:2D-73 | control 0 ; radon-tenant (ctx tenant|lessee|landlord|rental|lease): radon | 1 (34:1B-21.39) | 30:5B-5.2 FAILED (no tenancy word near; not needed, no-filter battery passed) | control 0 ; mold: \bmou?lds?\b|mildew | 15 | 56:8-19.1 | control 0
- **`defective-drywall-disclosure`**: drywall: drywall|gypsum\s+(wall)?board|wallboard|sheetrock|plasterboard | 2 | 45:5AAA-6 | control 0 ; chinese-drywall: chinese|defective|corrosive|reactive\s+drywall | 0 | none possible (term absent); covered by drywall battery | control 0
- **`deposit-cost-schedule`**: dep-clean: clean\w*|carpet\w* ctx security deposits? | 0 | (pattern check dep-clean-b) | control 0 ; dep-clean-b: clean\w*|carpet\w* ctx deposit | 29 (none tenancy) | 13:1E-224 | control 0 ; wear-tear: wear\s+and\s+tear ctx tenant|lease|lessee | 4 (none landlord-tenant) | (no positive run) | control 0
- **`deposit-surrender-notice`**: surrender-dep: surrender\w*|vacat\w* ctx security deposits? | 2 | 26:2H-127 | control 0 ; forwarding: forwarding address|last known address ctx security deposit|tenant | 7 | 46:8-21.1 | control 0
- **`designated-repairer`**: repair-deduct: repair\w*\s+and\s+deduct|deduct ... cost(s)|expense(s) ... repair|offset\w* ... rent | 0 | none possible (term absent); see rd-broad | control 0 ; rd-broad: deduct\w*\W+(\w+\W+){0,10}repair\w*|repair ... deduct ... rent | 2 | 32:9-16 | control 0 ; contractor-choice: (designat|approv|select|choose|chosen)\w*\s+(\w+\s+){0,4}(contractor|repairer|repairman|vendor)\w* | 49 | 13:1E-157 | control 0 ; designated-rep (ctx tenant|lessee|landlord): same with tenancy filter | 1 (39:3-4c) | (none set) | control 0
- **`disaster-displaced-guests`**: evacuee: evacuee\w*|displaced\s+(by|from|because) ... disaster|emergency|fire|flood|storm|hurricane|disaster-displaced | 5 | 26:2D-45 | control 0 ; disp-guest (ctx tenant|lease|rental|landlord|dwelling|hotel): (displaced|evacuee\w*|evacuated) ... guest|occupant|household|person|family|families|individual | 21 | 20:4-3.1 | control 0
- **`double-letting`**: double-let: (lease|let|rent) ... (two|more than one|another|second) ... tenants|persons|lessees; double letting|leasing|lease; same premises|dwelling|unit|apartment ... two|another | 2 | 46:39-1 | control 0 ; deliver-poss: (fail|refus)\w* ... deliver\w* ... possession|possession ... not delivered | 1 | 12A:2A-527 | control 0
- **`drug-free-housing-addendum`**: drug-free: drug\W+free|crime\W+free|drug\W+(related\s+)?(lease\s+)?addendum | 4 | 52:27D-3.3 | control 0
- **`dv-eviction-protection`**: dv-all: 'domestic\s+violence' ctx '(tenant|lease|landlord|evict|dwelling)' all titles | 40 hits (none in 2A:18 or 10:5; only 46:8-9.5 to -9.14 and 46:8-21.1 address tenancies) | positive 46:8-9.6 passed | control 0 ; dv-terms: 'domestic\s+violence' title 46 | 8 hits (46:8-9.5, -9.6, -9.7, -9.8, -9.11, -9.13, -9.14, -21.1) | positive 46:8-9.6 passed | control 0 ; dv-2a: 'domestic\s+violence' title 2A | 18 hits, none in ch. 18, 39 or 42 | listed positive 2A:18-61.1 failed (section lacks the term; positive for the pattern is 46:8-9.6 in dv-terms) | control 0 ; victim-evict: '(victim|abuse|stalking|restraining\s+order)' ctx '(evict|possession|2A:18-61)' all titles | 65 hits, none bars evicting a victim | positive 46:8-9.7 passed | control 0 (+3 more in the running record)
- **`electric-submetering-disclosure`**: submeter: sub\W?meter\w*|master\W?meter\w*|ratio\s+utility|resell ... electric|gas | 0 | none possible (terms absent); see separate-meter | control 0 ; separate-meter: (separate|individual)\w* ... meter\w*|meter ... each|individual dwelling|unit|apartment | 3 | 55:13A-7.8 | control 0 ; meter-tenant (ctx tenant|lessee|landlord|dwelling unit): meter\w* | 36 | 55:13A-7.8 | control 0
- **`emergency-assistance-right`**: police-call (ctx tenant|lessee|landlord|evict|rental|lease): (summon|call|contact|request)\w* ... police|law enforcement|emergency assistance|services|help|emergency assistance | 18 | 44:10-51 | control 0 ; police-call-all: (summon|call|contact|request)\w* ... police|law enforcement|emergency (assistance|services|help) | 71 | 2A:34-82 | control 0 ; nuisance-call: (nuisance|disorderly) ... call|calls|police response | 0 | none possible (term absent); covered by police-call-all | control 0
- **`environmental-event-termination`**: env-term: (terminat|cancel|end) ... lease|tenancy|rental agreement ... contamina|hazardous|environmental|toxic|spill|flood|mold|radon|public health | 1 | 46:8-50 | control 0 ; env-term2: (contamina|hazardous substance|environmental|toxic|spill|mold|radon) ... (terminat|cancel) ... lease|tenancy | 0 | none possible; covered by env-term | control 0
- **`ev-charging-end-of-tenancy`**: ev-removal: (electric vehicle|charging station|supply equipment) ... remov|restor|property of|surrender|terminat | 3 | 45:22A-48.4 | control 0 ; ev-tenant (ctx tenant|lessee|landlord|renter|lease|leased premises|rental unit|property|dwelling): electric\s+vehicle|charging\s+station|vehicle\s+supply\s+equipment|make-ready | 19 | 45:22A-48.4 | control 0
- **`ev-charging-shared-area`**: ev-common: (electric vehicle|charging station|supply equipment) ... common area|element|shared|parking lot|area|garage | 2 | 45:22A-48.4 | control 0 ; ev-tenant (see ev-charging-end-of-tenancy) | 19 | 45:22A-48.4 | control 0
- **`eviction-penalty-clause-ban`**: notice-fee2: as in collection-fee | 74 | 22A:2-30 | control 0 ; liqdam-lease: liquidated damages|penalt\w+, ctx residential lease|tenancy|lessee, title 46 | 5 | 46:8-21.1 | control 0
- **`family-child-care`**: fcc-landlord: '(day\s+care|child\s+care)' ctx '(landlord|lessor|tenant|lessee|lease)' all titles | 29 hits (none gives a tenant right or landlord duty; 2A:18-61.66 fee definition) | positive 2A:18-61.66 passed | control 0 ; fcc-home-all: '(family\s+(child\s+)?(day\s+)?care\s+(home|provider))' no tenancy filter | 45 hits (26:2Y adult family care, 30:5B registration, 40:55D-66.5a/-66.5b zoning/deed/condo; none on leases) | positive 40:55D-66.5b pass... ; fcc-home: '(family\s+(child\s+)?(day\s+)?care\s+home|child\s+care\s+home)' ctx '(lease|landlord|tenant|rent|residential|association)' | 18 hits | finder, no positive set | control 0
- **`fee-in-lieu-of-deposit`**: in-lieu-deposit: in lieu of deposit|deposit alternative|security deposit insurance|surety bond in lieu | 4 (none tenancy) | 2A:44-6 (pattern check) | control 0
- **`fee-transparency`**: total-price: total price|all-in|junk fee|hidden fee|drip pricing|mandatory fee | 25 (none rental) | 17:16C-98 | control 0 ; fee-disclose-tenant: fees? ctx disclos\w+ title 46 | 15 | 46:8-55 | control 0
- **`fee-unprovided-service`**: fee-not-provided: '(service|services|goods)\W+(\w+\W+){0,6}not\W+(been\W+)?(provided|rendered|supplied|furnished|received)' all titles, no tenancy filter | 11 hits (none landlord-tenant) | positive 48:5A-11.5 passed | control 0 ; fee-charge-tenant: '(fee|charge|surcharge)s?\b' ctx '(tenant|lessee)' title 46 | 19 hits (46:8-18.1 application fee, 46:8C-2 mobile home; no general rule) | positive 46:8C-2 passed | control 0 ; catv-landlord: '(cable\s+television|catv)' ctx '(landlord|tenant)' all titles | 3 hits (48:5A-49 live hit) | positive: 48:5A-49 live hit | control 0
- **`foreclosure-disclosure`**: forecl-disclose: '(foreclos\w*\W+(\w+\W+){0,25}(disclos|notif|inform|notice))|((disclos|notif|inform|notice)\w*\W+(\w+\W+){0,25}foreclos)' ctx '(tenant|lessee)' | 7 hits (2A:18-61.6, 2A:50-64, 2A:50-70, 2A:50-73, 40:48-2.12s3, ... ; forecl-tenant-notice: 'foreclos' ctx '(tenant|lessee|prospective\s+(tenant|lessee)|rental)' all titles | 51 hits | positive 2A:50-70 passed | control 0
- **`foreign-ownership`**: alien-land: '(alien|foreign\s+(adversar|government|national|principal|entit|person|countr))' ctx '(real\s+(estate|property)|land|lease)' all titles | 76 hits (46:3-18 the only land-rights rule; rest corporate/insurance/'alienat... ; alien-tenant: '\baliens?\b' ctx '(real\s+(estate|property)|lands?\b|lease|tenant)' | 15 hits | positive 46:3-18 passed | control 0 ; foreign-adversary: '(foreign\s+adversar|country\s+of\s+concern|foreign\s+principal)' all titles, no filter | 1 hit (38:20-1 war-orphan definition) | positive 38:20-1 passed | control 0
- **`guest-rights`**: guest-tenant: '(guests?|visitors?|invitees?)\b' ctx '(tenant|lessee|landlord|dwelling\s+unit|rental)' all titles | 48 hits (hotel/transient-guest exclusions, liability statutes, 2A:42-107; none a guest right) | positive 2A:42-1... ; supplier-access: '(right\s+of\s+access|access\s+to\s+(the\s+)?(premises|building|dwelling))' ctx '(tenant|lessee)' all titles | 3 hits (none residential) | positive 17:14A-52 passed | control 0
- **`habitability-presumption`**: presume-tenant: 'presum\w*' ctx '(tenant|lessee|landlord|dwelling)' all titles | 31 hits (2A:42-10.12 reprisal; 2A:18-76 abandonment; 46:8B-32 condo-lease unconscionability; none on habitability) | positive 2A:42-10.12 passed |... ; presume-habit: 'presum\w*' ctx '(habitab|repair|fitness\s+for\s+human|housing\s+code)' all titles | 14 hits (none landlord-tenant) | positive 39:13-2.1 passed | control 0
- **`habitability-statement`**: lease-shall-contain: '(lease|rental\s+agreement)s?\W+(\w+\W+){0,8}(shall|must)\W+(\w+\W+){0,2}(contain|include|state|set\s+forth|provide)' ctx '(tenant|dwelling)' all titles | 8 hits (2A:18-61.67, 46:8-50, 55:13A-7.14, 58:12A-1... ; habit-statement: '(fit\w*\s+for\s+human\s+habitation|habitab\w+)' ctx '(lease|rental\s+agreement)' all titles | 3 hits (40:65-12.3, 46:8-50, 52:27D-287.10) | positive 46:8-50 passed | control 0
- **`hazardous-contamination-disclosure`**: contam-lease: '(deed\s+notice|institutional\s+control|engineering\s+control|contaminat\w+|hazardous\s+(substance|discharge))' ctx '(lease|lessee|tenant)' all titles | 63 hits (Spill Act, ISRA, Brownfield Act; none a residential... ; contam-disclose: '(disclos\w+|notif\w+|notice)\W+(\w+\W+){0,20}(contaminat|hazardous\s+(substance|discharge|waste)|toxic)' ctx '(lease|lessee|tenant|rent)' all titles | 8 hits | positive 58:10B-13 passed | control 0
- **`holding-deposit`**: holding-dep: holding deposit|earnest money|binder|good faith deposit|reservation fee | 2 (46:8C-11, -12) | 46:8C-11 | control 0
- **`holdover-rate`**: hr-liqdam: liquidated\s+damages ctx tenan|lease | 7 | 2A:32A-1 | control 0 ; hr-liqdam-noctx: liquidated\s+damages | 47 | 2A:32A-1 | control 0 ; hr-holdover: hold(s|ing)?\s*over|holdover | 25 | 2A:42-5, 46:8-10 | control 0 ; hr-dblrent: double\s+(the\s+)?(rent|yearly) | 2 | 2A:42-5 | control 0
- **`home-business`**: hb-occ: home\s+(occupation|business)|home-based\s+business|cottage\s+(industry|food) | 2 | 34:11-58.2 | control 0 ; hb-telework: telework|work\s+from\s+home|home\s+office | 20 | none (see hb-occ) | control 0 ; hb-family-day: family\s+day\s+care | 32 | 40:55D-66.5b | control 0 ; hb-fdc-lease: family\s+day\s+care ctx lease|lessor|landlord|tenant | 2 | 40:55D-66.5b excluded by filter (expected) | control 0
- **`homestead-waiver`**: homestead: homestead, ctx exempt|waive | 15 | 2A:17-17.2 | control 0 ; exemption-waiver: waive (0-6) exemption | waiver of (0-4) exemption | 8 | 2A:26-4 | control 0 ; exempt-goods: exempt (0-6) (execution|levy|attachment), title 2A | 6 | 2A:17-17.4 | control 0
- **`infirmity-termination`**: it-incap: incapacity|incapable\s+of\s+(living|contract)|infirm ctx lease|tenan|rental | 39 | 2A:18-61.7 | control 0 ; it-incap-contract: incapacity\s+to\s+contract|incapable\s+of\s+(contracting|living\s+independently)|terminable\s+at\s+(the\s+)?(pleasure|will) | 0 | 46:8-9.2 FAILED (term absent); see it-assisted | control 0 ; it-assisted: accepted\s+into\s+an\s+assisted\s+living | 1 | 46:8-9.2 | control 0 ; it-nursing: (nursing|assisted\s+living|continuing\s+care) ctx terminat* lease|tenancy|rental | 0 | none | control 0
- **`inspection-condemnation-disclosure`**: icd-condemn: condemn\w*|unfit\s+for\s+(human\s+)?(habitation|occupancy)|placard\w* ctx tenan|lease|prospective|rental | 177 | none (too broad, discarded) | control 0 ; icd-unfit: unfit\s+for\s+(human\s+)?(habitation|occupancy)|condemned|order\w*\s+to\s+vacate|placard\w* ctx tenan|lessee|occupant | 18 | 2A:50-73 | control 0 ; icd-disclose: disclos\w*|notif\w*|inform\w* ctx (prospective|new)\s+(tenant|lessee|occupant)s? | 16 | 46:8-50 | control 0 ; icd-violation-notice: (code|housing|outstanding)\s+violations? ctx disclos\w*|prospective | 1 | 45:22A-27 | control 0
- **`inspection-notice-penalty`**: inp-inspect: inspect\w*|walk-?through|condition\s+(report|checklist|statement)|move-?(in|out) ctx security\s+deposit | 2 | 46:8-21.1 | control 0 ; inp-noctx: move-?(in|out)\s+inspection|walk-?through|pre-?move|condition\s+(report|checklist)|inventory\s+and\s+condition | 7 | 52:27D-132.3 | control 0
- **`key-control-policy`**: kc-key: keys?\b|pass\s*key|master\s+key|key\s+control ctx tenan|lease|dwelling|apartment | 48 | 46:8-9.13 | control 0 ; kc-masterkey: master\s+key|pass\s*key|key\s+control|re-?key\w* | 2 | 2C:5-6 | control 0 ; kc-bgcheck: (criminal\s+)?background\s+(check|investigation)|criminal\s+history\s+record ctx superintendent|janitor|landlord|multiple\s+dwelling|apartment|tenant | 30 | 40A:12A-22.1 | control 0
- **`late-fee-limit`**: late-charge: (late|delinquency)\s+(fees?|charges?) ctx rent|tenant|lease | 36 (tenancy: 2A:42-6.1, 2A:42-10.16a only) | 2A:42-6.1 | control 0 ; late-cap: (late|delinquency) fee/charge ctx exceed|not more than|percent, title 46 | 3 (condo 46:8B) | none (bounded) | control 0
- **`law-enforcement-cooperation`**: lec-calls: (call\w*|summon\w*|request\w*|seek\w*)\s+(for\s+)?(police|law\s+enforcement|emergency)\s+(assistance|services|help)|crime[\s-]free|nuisance\s+propert | 2 | 52:17C-8 | control 0 ; lec-cooperate: cooperat\w*\s+with\s+(law\s+enforcement|the\s+police|police) ctx landlord|tenant|lease|rental | 3 | 2C:44-1 | control 0
- **`lease-completeness`**: blank-spaces: blank (spaces?|lines?)|blanks (0-3) (filled|left|completed), ctx lease|tenant|consumer|contract | 9 | 17:11C-36 | control 0
- **`lease-notice-initial-requirement`**: lni-initial: \binitial(s|ed|ing)\b|separately\s+signed|individually\s+signed|signed\s+or\s+initialed ctx lease|tenant|rental|lessee | 9 | 46:8-50 | control 0 ; lni-noctx: \binitial(s|ed|led)\s+(by|beside|next|adjacent|in|at)\b|place\s+(his|her|their)\s+initials | 5 | 19:31A-8 | control 0
- **`lease-type-parity`**: ltp-mtm: month[\s-]+to[\s-]+month ctx rent|tenan | 6 | 46:8-10 | control 0 ; ltp-fixed: (fixed|definite)\s+term|periodic\s+tenan|tenancy\s+from\s+(month|week|year) ctx rent\w*\s+(higher|more|differ)|more\s+burdensome|premium|surcharge | 1 | 48:4-1 | control 0 ; ltp-fixed-noctx: same, no filter | 45 | 46:8-10 | control 0
- **`lease-type-size`**: lts-type: \d+[\s-]*point\s+(type|font|typeface)|(type|font)\s*size|typeface ctx lease|tenan|rental | 11 | 2A:18-61.67, 46:8-50 | control 0 ; lts-noctx: \d+[\s-]*point\s+(type|font|typeface|bold)|point\s+size | 74 | 2A:18-61.67 | control 0
- **`liquidated-damages`**: liqdam: liquidated\s+damages | 47 | 12A:2-718 | control 0 ; liqdam-lease: see eviction-penalty-clause-ban | 5 | 46:8-21.1 | control 0
- **`maintenance-duty-shift`**: mds-shift: (tenant|lessee|occupant)\s+(shall\s+|may\s+|agrees?\s+to\s+)?(make|perform|undertake)\s+(\w+\s+){0,3}(repairs?|maintenance)|in\s+lieu\s+of\s+rent|relieved... | 1 | 12:3-68 | control 0 ; mds-waiver: waive\w*|waiver ctx habitab|fitness\s+for\s+human|substandard | 1 | 2A:42-96 FAILED (filter) | control 0 ; mds-waiver2: provision\s+of\s+a\s+lease\s+(\w+\s+){0,6}waived | 0 | 2A:42-96 FAILED (span too short) | control 0 ; mds-waived-lease: waive[ds]?\b|waiver ctx provision\s+(of|in)\s+(a|any)\s+lease | 4 | 2A:42-96 | control 0
- **`meter-conservation-charge`**: mcc-meter: sub-?meter\w*|conservation\s+charge|ratio\s+utility|individual(ly)?\s+meter\w* ctx tenan|landlord|dwelling|apartment|rent | 0 | 55:13A-7.8 FAILED; see mcc-meter3 | control 0 ; mcc-meter2: meter\w* ctx tenan|landlord|lessee|apartment | 102 | none (noise, discarded) | control 0 ; mcc-meter3: \b(sub)?meter(s|ed|ing)?\b ctx tenan|landlord|lessee|apartment|dwelling\s+unit | 34 | 55:13A-7.8 | control 0 ; mcc-onbill: on-?bill|energy\s+efficiency\s+(charge|program|loan)|conservation\s+(charge|surcharge|program) | 13 | 48:3-98.1 | control 0
- **`meth-disclosure`**: meth-1b: methamphetamine | 12 | 2C:35-28 | control 0 ; meth-5: production\s+facility | 14 | 2C:35-4 | control 0 ; meth-7b: decontaminat | 5 | 26:13-8 | control 0 ; meth-2: clandestine | 0 | none (term absent) | control 0 (+2 more in the running record)
- **`military-air-zone-disclosure`**: mil-1b: military\s+(air\s+)?installation ctx lease|tenant|rent|disclos | 9 | 52:27I-20 | control 0 ; mil-1: military\s+(air\s+)?installation | 19 | (none run) | control 0 ; mil-2: accident\s+potential | 0 | none (term absent) | control 0 ; mil-4: military ctx noise|overflight|air base|airfield | 1 | none | control 0 (+1 more in the running record)
- **`nonrefundable-deposit-notice`**: nonrefund: non-?refundable ctx tenant|lease|rent|landlord | 27 (none tenancy) | 17:11C-58 | control 0
- **`nonrefundable-deposit-separate-notice`**: nonrefund: non-?refundable ctx tenant|lease|rent|landlord | 27 (none tenancy) | 17:11C-58 | control 0
- **`notice-service-fee`**: notice-fee: (fee|charge|cost) within 6 words of (notice to quit/cease|eviction|summary dispossess|warrant for/of removal), ctx tenant|landlord|lease | 5 | positive 2A:42-10.16a failed; backed by notice-fee2 | control 0 ; notice-fee2: see collection-fee | 74 | 22A:2-30 | control 0 ; liqdam: liquidated damages | 47 | 12A:2-718 | control 0
- **`notice-to-vacate-additional-terms`**: ntv-1b: notice\s+to\s+(vacate|quit) ctx form | 1 | 2A:18-61.1 | control 0 ; ntv-1: same ctx additional terms|terms not contained|form | 1 | 2A:18-61.1 (hit) | control 0 ; ntv-2: move[\s-]*out | 2 | 2A:18-61.9 (hit) | control 0 ; ntv-3: notice\s+to\s+quit | 6 | 2A:18-56 | control 0 (+1 more in the running record)
- **`ordnance-demolition-meter-disclosures`**: od-1b: ordnance|munitions | 3 | 58:10A-3 | control 0 ; od-5c: demolition\s+permit | 3 | 52:27D-124 | control 0 ; od-5b: same ctx tenant|lessee|occupant | 0 | 52:27D-124 failed (no tenant word) | control 0 ; od-3: meters? ctx tenants? | 10 | (hits) | control 0
- **`pest-control-notice`**: pc-1: pesticide ctx tenant|lessee|landlord|multiple dwelling|apartment|resident | 10 | (hits) | control 0 ; pc-3: pesticide | 68 | 58:10A-3 | control 0 ; pc-2: notif|notice ctx pesticide title 13 | 14 | (hits, School IPM) | control 0
- **`pet-eviction-fact-sheet`**: pf-3b: fact\s+sheet | 28 | 18A:40-42 | control 0 ; pf-1: fact\s+sheet ctx pet|animal|dog|cat | 20 | (hits) | control 0 ; pf-2b: (pets?|dogs?|cats?|domesticated animals?) ctx evict|removal of tenant|tenant|lessee | 14 | 2A:18-75, 2A:42-103 | control 0
- **`political-access`**: pa-2: canvass\w* ctx tenant|...|residential | 7 | (hits) | control 0 ; pa-2b: canvass\w* | 145 | 19:31-6.7 | control 0 ; pa-4: candidates? ctx tenants?|apartment|multiple dwelling | 34 | (hits) | control 0 ; pa-3: (political|campaign|election)\s+signs? | 0 | none (phrase absent) | control 0 (+1 more in the running record)
- **`portable-cooling-device`**: pcd-1b: air conditioning|cooling device/system/unit ctx tenant|lessee|landlord|rental|dwelling unit | 13 | 52:27D-121, 17:16C-62 | control 0 ; pcd-3: air\s*-?\s*condition\w* | 55 | 45:16A-12.1 | control 0 ; pcd-2: (window|portable) (air|unit|cooler|fan) | 1 | 26:2H-14.3 (hit) | control 0
- **`possession-bond`**: pb-1c: confess\w* | 32 | 2A:16-9 | control 0 ; pb-3: bond ctx tenant|lessee title 2A | 3 | (hits) | control 0
- **`promises-to-repair`**: pr-1b: promis\w* ctx tenant|lessee|landlord|lease | 84 | 12A:2A-210 | control 0 ; pr-3: repair\w* ctx landlord|lessor~promis|in writing|completion date | 4 | (hits) | control 0 ; pr-2: (agree|commit|undert)\w* to (make )?repair | 0 | none | control 0
- **`prop65-rental-warning`**: p65-1b: carcinogen|reproductive tox|formaldehyde ctx tenant|lessee|landlord|rental|dwelling | 3 | 58:10A-3 | control 0 ; p65-2: carcinogen|formaldehyde | 19 | (hits) | control 0 ; p65-3b: warning ctx tenants?|lessees? | 3 | 34:6-47.4 | control 0
- **`quiet-possession`**: qp-possession: quiet\s+possession | 2 | 46:4-5 | control 0 ; qp-enjoyment: quiet(ly)?\s+enjoy | 2 | 12A:9-610 | control 0 ; qp-covenant: covenant[^.]{0,80}(peaceabl|undisturb|interfer) ctx (lease|tenant|landlord) | 0 | none (see qp-peaceable) | control 0 ; qp-peaceable: (peaceabl|undisturbed) ctx (lease|tenant|landlord|lessee) | 2 | 2A:39-1 | control 0
- **`recycling-notice`**: rc-recycl: recycl ctx (tenant|multifamily|multi-family|apartment|landlord|dwelling) | 17 | (none needed; see rc-recycl-notice) | control 0 ; rc-recycl-notice: recycl ctx (notif|notice|inform) | 82 | 13:1E-99.16 | control 0
- **`religious-cultural-display`**: rd-religious-display: (religious|mezuzah|cultural)[^.]{0,120}(display|item|symbol|object|sign) | 94 (noise) | none | control 0 ; rd-religious-display2: \b(religious|mezuzah)\b[^.]{0,120}\b(display|items?|symbols?|objects?|signs?|decorations?)\b | 4 | 16:12-19 | control 0 ; rd-display-tenant: \bdisplay\b[^.]{0,100}\b(flag|religious|sign) ctx (tenant|lessee|landlord|homeowner|association) | 7 | 45:22A-48.1 | control 0
- **`rent-receipt-anti-waiver`**: rent-receipt-habit: receipt of rent|collect rent|accept rent ctx habitab|repair|fit for | 14 (public authorities, receivers) | 2A:42-128 | control 0 ; habit-split-all: habitab\w* ctx assign|grantee|mortgagee|security instrument | 1 (40:65-12.3) | habit-word 46:8-50 | control 0 ; habit-word: habitab\w* | 17 | 46:8-50 | control 0
- **`repair-escrow-exemption-notice`**: rre-escrow-exempt (v1): (exempt|opt\s+out|shall\s+not\s+apply) ctx (rents? into court|deposit of rents|rent escrow|repair and deduct|withhold rent) | 0 | none | control 0 ; rre-escrow-exempt (v2): (exempt|opt\s+out|shall\s+not\s+apply|except) ctx (deposit\s+of\s+rents|rents\s+into\s+court) | 1 | 2A:42-93 (hit); 2A:42-86 failed (no ctx phrase) | control 0
- **`security-deposit-standards`**: dep-standards: standards?|criteria ctx security deposits? title 46 | 0 | (pattern check in dep-standards-b) | control 0 ; dep-standards-b: standards? ctx deposit title 46 | 3 (none tenancy) | 46:3B-16 | control 0
- **`senior-housing-work-card`**: workcard2: (work\s+card|fingerprint\w*|criminal\s+history\s+record\s+background\s+check) ctx (senior|age\s+55|55\s+years|older\s+persons|age-restricted) | 7 | 53:1-20.9a | control 0 ; olderpersons: housing\s+for\s+older\s+persons | 4 | 10:5-5 (hit) | control 0
- **`sex-offender-occupancy`**: resres: (resid\w*|live|dwell\w*)\s+within\s+[0-9,]+\s+feet ctx (offender|registrant) | 0 | see resresp | control 0 ; resresp: (resid\w*|live|dwell\w*|located)\s+within\s+[0-9,]+\s+feet | 11 | 26:2H-11.1 (hit) | control 0 ; sexoff: (landlord|lessor|lease|tenant|rent\w*|real\s+estate|resid\w+\s+within|within\s+\d[,0-9]*\s+feet) ctx (sex\s+offender|registrant|Megan) title 2C | 14 | 2C:7-4 (hit) | control 0
- **`sfr-occupancy-disclosure`**: squat: (squat\w*|unlawful\s+occupan\w*|unauthorized\s+occupan\w*|lawful\s+occupancy) | 3 | 40A:12-13 (hit) | control 0 ; fontsize: (\d+-point|point\s+type|type\s*face|font\s+size|bold\s*face|boldface|first\s+page) ctx (lease|rental\s+agreement|tenan) | 33 | 46:8-50 | control 0
- **`shoreline-access-disclosure`**: shore: (public\s+access|right\s+of\s+way|beach\s+access|access\s+to\s+the\s+(beach|shore|ocean|tidal)) ctx (beach|shore\w*|tidal|ocean|waterfront) | 15 | 13:1D-152 (hit) | control 0 ; shore2: (public\s+access|beach|shore\w*|tidal\s+waters?) ctx (landlord|lessee|tenan\w*|rental\s+(unit|propert|dwelling)) | 82 | 2A:42A-8 (hit) | control 0
- **`shutdown-rent-protection`**: shutdown2: (shutdown|lapse\s+in\s+(appropriations|funding)|furlough\w*) ctx (rent|tenan|evict|landlord|lease) | 15 | 52:27D-287.7 | control 0 ; fedemp: (federal\s+(government\s+)?employee|government\s+employee|civilian\s+employee) ctx (rent\s|tenan|evict|landlord) | 13 | 2C:39-6 (hit) | control 0 ; acts grep -i -E 'shutdown|lapse in' text/acts | 4 files, none on point | n/a
- **`single-family-zone-lease-limit`**: sfzone: (owner[\s-]+occup\w*) ctx (zon\w*) | 5 | 2A:18-61.1 (hit) | control 0 ; sfzone2: (single[\s-]+family)\s+(zon\w*|district) | 0 | none for exact term (see adu) | control 0 ; adu: accessory\s+(dwelling|apartment) | 2 | 52:27D-304 (hit) | control 0
- **`smart-access`**: smart2: (smart\s+lock|keyless|electronic\s+(lock|key|access)|access\s+control\s+system|smart\s+access|biometric|key\s*fob|keypad|connected\s+device) ctx (landlord|tenan|lease|dwelling\s+unit) | 21 | 18A:7G-5.2 | control 0 ; smart (no filter): same pattern | 39 | 18A:7G-5.2 (hit) | control 0
- **`social-security-defense`**: ssdef3: (social\s+security|public\s+assistance|rental\s+assistance|housing\s+assistance|supplemental\s+security|voucher|subsid\w+) ctx (nonpayment|non-payment|eviction|summary\s+dispossess|judgment\s+for\s+possession|late\s+(ch... ; ssdef2: (public\s+assistance|rental\s+assistance|housing\s+assistance|voucher|section\s+8|subsid\w+) ctx (tenan\w*\s+portion|portion\s+of\s+(the\s+)?rent|nonpayment) | 7 | 52:27D-287.9 (hit) | control 0
- **`special-district-representation`**: spdist: (special\s+improvement\s+district|special\s+assessment|improvement\s+district|business\s+improvement\s+district) ctx (lease|tenan\w*|lessee|rental\s+unit) | 43 | 40:56-66 (hit) | control 0
- **`sprinkler-disclosure`**: sprink: sprinkler ctx (lease|tenan|landlord|rental|dwelling\s+unit|multiple\s+dwelling) | 16 | 52:27D-123.20 (hit) | control 0
- **`stigmatized-property`**: stigma2: (psycholog\w*\s+impact\w*|stigmatiz\w*|homicide|suicide|murder|death|HIV|AIDS) title 46 | 31 | 46:8-9.1 (hit) | control 0 ; stigma3: same, ctx (real\s+estate|broker|licensee), title 45 | 18 | 45:15-10.8 (hit) | control 0 ; stigma: (psychologically\s+impacted|stigmatiz\w*|homicide|suicide|death\s+(occurred|on\s+the\s+premises)|HIV|AIDS|haunt\w*) ctx (real\s+estate|lease|tenan|rental|dwelling|seller|broker) | 67 | 10:5-5 (hit) | control 0
- **`subsidized-inspection-refusal`**: subinsp2: inspect\w* ctx (section\s+8|housing\s+choice\s+voucher|housing\s+assistance\s+payment|rental\s+assistance|public\s+housing) | 59 | 2A:18-61.1 (hit) | control 0
- **`subsidy-habitability-proration`**: abate-rent2: abat\w* ctx \brent | 35 | 40:14B-22.2 | control 0 ; subsidy-abate: (subsid\w*|voucher|housing\s+assistance) ctx (abat|withh[oe]ld|suspend)\w* | 55 | 52:27D-283 | control 0 ; housing-quality: housing\s+quality | 0 | none (no section has the term; see subsidy-abate) | control 0
- **`tenant-bankruptcy`**: bankrupt2: bankrupt\w* ctx (tenant|lessee|landlord|lease) | 31 | 46:8-23 | control 0 ; courtrules grep: bankrupt in courtrules/ courtforms/ dca/ | 0 in R_6_*; XI-F/XI-Z debt-defense box only | grep (no control)
- **`tenant-display-rights`**: display-flag2: \bflags?\b ctx (tenant|lessee|landlord|lease|dwelling|unit\s+owner|association) | 10 | 45:22A-48.1 | control 0 ; display-sign3: \bsigns?\b ctx (tenant|lessee|landlord) | 46 | 10:5-12 | control 0 ; display-sign5: (political\s+sign|campaign\s+sign|religious\s+(item|display|symbol)|signs?\s+(and|or)\s+(banner|poster)) | 1 | 18A:36A-4.1 | control 0
- **`tenant-insurance-claims`**: renters-ins: (renter'?s'?\s+insurance|tenant'?s'?\s+insurance|renters?\s+insurance|contents\s+(insurance|coverage)|(tenant|lessee)\w*\s+(shall|must)\s+(obtain|carry|maintain|purchase)\s+\w*\s*insurance) | 2 | 46:8-50 | control 0 ; ins-claim-tenancy2: (insurance\s+(claim|proceeds)|claim\s+(against|under)\s+\w*\s*(insurance|policy)) ctx (tenant|lessee|landlord) | 4 | 56:12-62 | control 0
- **`tenant-security-cameras`**: cam1b: (security|surveillance|video)\s+(camera|monitor\w*|system|recording) | 59 | 40:48-1.7 | control 0 ; cam2b: (video\s+doorbell|doorbell\s+camera|\bcameras?\b) ctx (tenant|landlord|dwelling|residen|apartment) | 11 | 40:48-1.7 | control 0
- **`tpa-exemption-notice`**: tpa-exempt-notice: exempt\w* ctx notice|statement|notif --title 2A | 12 | 2A:42-84.3 | control 0 ; tpa-exempt-any: exempt\w*\s+(\w+\s+){0,8}(rent\s+control|rent\s+leveling|good\s+cause|eviction|removal|P\.L\.1974,\s*c\.\s*49) | 8 | 2A:42-84.3 | control 0
- **`tpa-sunset`**: tpa-sunset-aea: expire\w*|sunset|repeal\w*|cease\w*\s+to\s+(be\s+)?(have\s+)?effect|remain\s+in\s+effect\s+until|shall\s+terminate --title 2A | 61 | 2A:18-61.1 | control 0 ; tpa-sunset-46: same ctx tenant|lessee|landlord --title 46 | 0 | 46:8-21.1 FAILED | control 0 (superseded) ; tpa-sunset-46b: expir\w*|sunset|repeal\w*|remain\s+in\s+effect\s+until --title 46 | 69 | 46:8-21 | control 0
- **`unbundled-parking`**: parking-t46b: parking|garage\s+space|vehicle\s+space --title 46 ctx tenant|lessee|landlord|lease | 8 | 46:8B-35 | control 0 ; parking-all: parking\s+(space|spot|fee|charge|stall)s?\b|garage\s+space|unbundl\w* ctx tenant|lessee|landlord|rental\s+(unit|premises|housing)|dwelling | 12 | 46:8B-35 | control 0 ; parking-tenant / parking-t2A / parking-t55 / parking-t52: positive FAILED (filter mismatch), superseded
- **`utility-submetering-disclosure`**: submeter: sub-?\s*meter\w*|master\s+meter\w*|check\s+meter\w*|ratio\s+utility | 0 | 55:13A-7.8 FAILED (terms absent) | control 0 ; meter-tenant: meter\w* ctx tenant|lessee|landlord|dwelling\s+unit | 36 | 55:13A-7.8 | control 0
- **`veterans-incentive`**: veteran-rent: veteran\w*|armed\s+forces|service\s*members?|military ctx \brent\w*|tenan\w*|landlord|lease\w*|housing\s+accommodation | 208 | 10:5-12 | control 0 ; veteran-landlord: veteran\w* ctx \blandlord|\blessor|rental\s+(housing|unit|dwelling|premises|assistance) | 10 | 2A:18-61.24 FAILED | control 0 ; veteran-landlord2: same | 10 | 46:8-51 | control 0
- **`waiver-by-acceptance`**: accept-rent: (accept|receipt|receiv) (of) (0-3 words) rent, ctx waive|waiver|notice | 13 | 2A:42-10.16a (in hits) | control 0 ; waiver-notice-breach | 3 | 12A:2A-303 | control 0
- **`waterbed`**: waterbed: water\s*-?\s*beds?|flotation|water-?\s*filled|liquid-?\s*filled | 4 | 46:8-21.1 FAILED | control 0 ; waterbed2: same | 4 | 12:7-77 | control 0

## §4 Decisions and questions asked of Taylor
**Questions asked of Taylor**
- *Jury waiver (2026-10-31):* offer an optional NJ jury-waiver clause? **Taylor: no clause** (my recommendation). `edu-jury-waiver-nj` explains the rule and says the library leaves jury waivers out of NJ leases.

**Decisions made without asking (confident; reasons in the rows)**
- *Lock change after a domestic-violence order:* no NJ lock-change fee clause; N.J.S.A. 46:8-9.14 charges the victim only where the victim changes the locks. `edu-dv-lockchange-nj` tells landlords not to charge when they make a court-ordered change.
- *Lease-appointed agent for eviction papers:* R. 4:4-4(a)(1) recognises "a person authorized by appointment", but whether a lease clause is that appointment is case law (not read); no clause offered; `edu-eviction-service-party-nj` states the cautious course (VERIFIED under Part 5 policy).
- *Criminal activity:* `criminal-activity-nj` is an optional clause on the lease-covenant route (N.J.S.A. 2A:18-61.1(e)(1), notice to cease, one month's notice, 2A:18-61.2(b)); `criminal-activity-ky` not tagged (its material-noncompliance and proximity wording doesn't fit the Anti-Eviction Act's exclusive grounds).
- *Cash receipts:* N.J.S.A. 46:8-49.2 says "a landlord", a term 46:8-44(a) defines narrowly (excludes premises of two or fewer units and owner-occupied premises of three or fewer). Treated cautiously: `edu-rent-receipts-nj` tells every landlord to give receipts and names the definition question.
- *Fee list:* tagged `fees-and-charges-vi` (no NJ statute requires a fee list outside mobile home parks; the list carries only the landlord's own figures; fee screen in the tag note). `nonrefundable-fees-wv` not tagged.

**New Jersey items**
1. *Waivers, fees and Truth in Renting:* answered in slice 1 from N.J.S.A. 46:8-45 to -48, 56:12-1 ff. and 2A:18-61.1 ff.; the topics point to `edu-truth-in-renting-lease-provisions-nj` (unchanged) and to `edu-knowing-use-penalty-nj` / `edu-nonwaivable-rights-nj`. 46:8-47 penalty needs no knowledge; 56:12-15 (TCCWNA) excludes residential leases; 2A:18-61.4 voids waivers of the Anti-Eviction Act.
2. *Domestic violence:* seven rows from N.J.S.A. 46:8-9.4 to -9.14 and 2C:25-29, read whole; `edu-statutory-early-termination-nj` unchanged.
3. *Fees, receipts, late fees:* slice 3 rows from 46:8-18.1 (P.L.2025, c.405, s.3: effective first day of the fourth month after the 2026-01-20 approval = 2026-05-01), 2A:42-6.1 to -6.3, 46:8-21.1, 46:8-49.2, 2A:39; library "additional rent" decision kept.
4. *Shared fee clauses:* `keys` — no New Jersey statute caps or bars a re-key charge; N.J.A.C. 5:10-19 sets lock hardware only; the charge can't be deducted from the deposit while the tenant stays (N.J.S.A. 46:8-21.1, 'no deductions shall be made from a security deposit of a tenant who remains in possession') and an unpaid charge isn't rent (library decision). No conflict. `hoa-compliance` — association fines are imposed on unit owners (N.J.S.A. 46:8B-15(f), 'the association may impose reasonable fines upon unit owners'); passing them to a tenant by contract conflicts with no statute read; no conflict.
5. *Central shared edits:* `smoking-policy` — reads correctly: N.J.S.A. 2C:35-10a(c) lets an owner of a multiple dwelling 'prohibit or otherwise regulate' cannabis smoking, vaping or aerosolizing, and the Smoke-Free Air Act (N.J.S.A. 26:3D-57 to -59) already bans smoking in apartment lobbies and other public areas and exempts private homes; nothing limits a lease ban. `no-alterations` — reads correctly: its carve-out keeps any installation 'that applicable law entitles Tenant to perform', which covers P.L.2026, c.82, s.3 (new N.J.S.A. 46:8-65: 'No landlord shall prohibit a tenant who is responsible for payment of the electric service ... from utilizing a portable solar generation device ... within the tenant's leased premises, including any leased balcony or patio', reasonable restrictions allowed; R3 bill print; effective six months after the 2026-09-01 enactment = 2027-03-01). `addendum-precedence` — reads correctly: required NJ riders and notices (flood rider, radiator rider, window-guard notice) control over conflicting terms.
6. *CARES Act:* no NJ eviction row contradicts `edu-cares-act-notice`. NJ's nonpayment route needs no state notice (N.J.S.A. 2A:18-61.2, 'except in the nonpayment of rent'), and `default-by-tenant-nj` gives no notice 'that applicable law does not require', so the federal 30-day notice adds to NJ's notices without conflict. No NJ court rule or form in the corpus asks for a CARES statement (grep of Part VI and Appendix XI: 0 hits).
7. *Currency and vetoes:* bounded corpus claim confirmed for every relied-on section from its history line (no 2024-2026 amendment to 2A:18, 2A:42, 2A:39, 46:8-19 to -26 or 46:8-43 to -64); vetoed bills not relied on.
- *Mitigation (Sommer v. Kridel):* not adopted as an affirmative statutory duty; `edu-abandonment-and-mitigation-nj` states it as case law (not read) with the cautious course (try to re-rent and keep records).
- *Apartment hotels and bed bugs:* no separate row for N.J.S.A. 29:4-14 (hotel bed-bug notice, whose "hotel" includes an apartment hotel with permanent guests); the bed-bug rows name it and its scope.
- *Management website and social-services hotline lease notice:* N.J.S.A. 55:13A-7.19(b) requires it, in boldface and in English and Spanish, in every lease offered in a multiple dwelling, and no NJ row carried it. Added as the required-disclosure clause `social-services-hotline-lease-notice-nj` (topic `emergency-contact`, beside `edu-emergency-contact-nj`). No statute prints the hotline's number, so the dialing instructions are a bracketed prompt.
- *N.J.A.C. 13:13 (DCR housing rules) and N.J.A.C. 14:3 (BPU) are not held:* `edu-disability-accommodation-nj` and `edu-electric-submetering-nj` stay NEEDS_REVIEW and name the unread rule. No NJ submetering or EV-electricity rebilling clause is offered until 14:3 is read, and the shared EV clauses are not tagged.
- *Construction liens and energy data:* `no-liens-nj` was written instead of tagging `no-liens-ar`, whose "reasonable costs" wording could trigger NJ's two-way attorney-fee rule (N.J.S.A. 2A:18-61.66). `energy-data-release-wy` was not tagged: N.J.S.A. 48:3-85(b) limits utility data release.
- *Lead-in-drinking-water disclosure (N.J.S.A. 58:12A-12.3c, P.L.2025, c.144):* the duty starts 90 days after the State publishes its health notice and model statement in the New Jersey Register, which the corpus doesn't hold. `lead-in-drinking-water-disclosure-nj` ships as CONDITIONAL with that start condition stated in the body; Claude Code confirms the publication date and the model text at sync (§6).
- *Municipal rental registration and licensing (N.J.S.A. 40:52):* flagged in `edu-landlord-registration-nj`, not resolved (rule 3).
- *Fire sprinklers and fire code (N.J.A.C. 5:70 not held):* `edu-fire-sprinkler-duty-nj` stays NEEDS_REVIEW and names the unread code. `edu-fire-code-standard-nj` stays VERIFIED because it names no code edition and points to 5:70.
- *Firearms:* education row only. N.J.S.A. 2C:58-4.6(a)(24) makes carrying on private property a crime without the owner's express consent or a posted sign, and that provision faces a federal challenge (case law, not read). No optional consent clause is offered for now. `firearm-rules-la` was not tagged because its parking sentence could be read as the owner's consent.
- *Fair housing and age:* the LAD's housing subsections (N.J.S.A. 10:5-12(g)-(h)) don't list age, so the body leaves age out.
- *Association approval:* `association-approval-la` was not tagged: an association deposit on top of the security deposit risks the N.J.S.A. 46:8-21.2 cap.
- *Pay-and-stay correction:* `edu-forfeiture-redemption-nj` was corrected by erratum after the canvass. The three-business-day right is statutory (N.J.S.A. 2A:42-10.16a, 46:8-49.3), not only in the court forms.
- *Crime-insurance notice (N.J.S.A. 46:8-39, buildings of 10 or more units):* education row only, no rider. The statute names a federal crime-insurance program that no longer operates (NJ log §6), so a clause would point tenants to nothing.
- *Civil Rights housing poster:* the duty to display it and give residents a copy rests on N.J.S.A. 10:5-12(j) and DCR guidance; the implementing rule (N.J.A.C. 13:8) is not held and is named as unread in the row (§6 for sync).
- *Rent escalation and concessions:* tagged `rent-escalation-la`; its bracketed index example (CPI-U South Region) is only a prompt the landlord replaces, and the NJ note says a municipal rent-control ordinance may limit any increase. `rent-increase-midterm-ky` was not tagged: a one-sided mid-term increase conflicts with N.J.S.A. 2A:18-61.1(f) and 2A:18-61.4. `rules-ia` was not tagged: rules added mid-term don't support removal under 2A:18-61.1(d). No NJ-specific rent-concession clause; the tag points to `edu-municipal-rent-control-nj`.
- *Portable solar (P.L.2026, c.82, s.3, new N.J.S.A. 46:8-65; text from the S2368 third-reprint bill print, not the chaptered print):* `edu-portable-solar-nj` plus the optional constrained clause `portable-solar-devices-nj` (landlord's own size and placement limits, devices kept off roofs and common areas, indemnity as s.3 allows), offered now: it only grants a permission, and leases signed now will run past the right's 2027-03-01 start, which both bodies state. `effective_from` is the pass date as the brief requires; Claude Code may set it to 2027-03-01 at sync.
- *Owner move-in:* education row only (`edu-owner-move-in-nj`, N.J.S.A. 2A:18-61.1(l)(2)-(3), 2A:18-61.2(f), 2A:18-61.6). No mid-term owner-occupancy clause, even for owner-occupied premises of two or fewer units outside the Act: only case law could settle it, and the builder can't tell reliably when the exemption applies. `owner-occupancy-termination-ar` was not tagged: it allows ending a lease mid-term, and 2A:18-61.2(f) bars the action until the lease expires.
- *Pest control and pool safety:* `edu-pest-control-notice-nj` and `edu-pool-safety-nj` stay NEEDS_REVIEW because their controlling rules (N.J.A.C. 7:30 and 8:26) are not held.
- *Tenants' Property Tax Rebate Act (N.J.S.A. 54:4-6.2 to -6.12):* written as `edu-tenant-property-tax-rebate-nj` under `property-tax-rent-disclosure` (buildings of five or more units).
- *Code exceptions (N.J.S.A. 55:13A-11(d)):* the slice draft `edu-no-code-variance-notice-nj` claimed no statute requires attaching a variance to the lease. Its battery searched "variance" and missed the statute's own word, "exception". 55:13A-11(d) does require the notice, attached to the lease of each affected unit (to all leases for a common-area exception). The draft was replaced before delivery by the conditional required-disclosure clause `safety-exception-notice-nj` and `edu-code-variance-nj`. Flagged by the s04 and s10 canvasses; I decided it myself because the statute is plain.
- *Seasonal tenancies:* the Anti-Eviction Act's exclusion names a "hotel, motel or other guest house" rented to a seasonal tenant, so `edu-seasonal-tenancy-nj` doesn't extend it to every seasonal house or apartment.
- *Death-termination opt-out (N.J.S.A. 46:8-9.1, which yields to a lease that "explicitly provide[s] otherwise"):* no opt-out clause offered, consistent with the 2026-09-30 retro choice on `early-termination-ks`. `edu-tenant-death-nj` says the library leaves the right in place.
- *Late fees when rental assistance pays (N.J.S.A. 52:27D-287.9(h)):* the provision sits in the COVID act but isn't limited to the COVID period by its words. `edu-subsidy-late-fee-nj` gives the cautious reading: waive late fees for any period that State or federal rental assistance covers.
- *Not tagged:* `tenant-death-contact-nh`, because it points to a property-left-behind lease section NJ doesn't have, and `tenant-portal-mn`, because it lets the landlord require portal payment, which conflicts with N.J.S.A. 46:8-49.1.
- *Interest on unpaid amounts:* `interest-on-unpaid-amounts-nj` is an optional clause whose rate is the landlord's figure, capped at 16% (the written-contract limit in N.J.S.A. 31:1-1). Whether that limit reaches a tenant's unpaid charges is unsettled; the cap is the cautious course.
- *Veteran concessions:* no NJ veteran-only rent concession clause. N.J.S.A. 10:5-12(g) protects "service in the Armed Forces" in housing with no exception for favoring veterans; `edu-veterans-incentive-nj` warns of the risk (case law not read).
- *Tenant Protection Act of 1992:* New Jersey's statute of that name (N.J.S.A. 2A:18-61.40 ff., a conversion protected-tenancy law, with a pre-registration notice under 2A:18-61.46) was added to `edu-tpa-notice-nj` by erratum after the slice canvass. It has no sunset and no exemption notice, so `edu-no-tpa-sunset-nj` and `edu-no-tpa-exemption-notice-nj` stand.
- *Utility rules under N.J.A.C. 14:3 (not held):* `edu-utility-apportionment-nj` and `edu-no-utility-submetering-disclosure-nj` stay NEEDS_REVIEW. Whether the utility must notify each tenant before a building-wide shutoff for the landlord's nonpayment is stated openly as unread in `edu-utility-landlord-account-nj`.

- `abandonment-and-mitigation`: Should the library adopt Sommer v. Kridel (case law, not read) as stating an affirmative NJ duty to mitigate? Recommendation: keep the absence row with the cautious course until someone reads the case.
- `bed-bug-disclosure`: N.J.S.A. 29:4-14 defines 'hotel' to include an 'apartment hotel' serving 'permanent guests'. Should the library add a CONDITIONAL row for landlords operating an apartment hotel? Recommendation: no new row now; the bed-bug absence row names the hotel law and its scope.
- `criminal-activity`: criminal-activity: wrote a new optional NJ clause (criminal-activity-nj) instead of tagging shared criminal-activity-ky (URLTA 'material noncompliance'/'terminate' wording and 'near the property' reach). Recommendation: approve the NJ clause; don't tag the shared row for NJ.
- `disability-accommodation`: N.J.A.C. 13:13 (DCR housing rules) is not in the corpus, so edu-disability-accommodation-nj is NEEDS_REVIEW. Recommendation: obtain the DCR courtesy copy of 13:13 and re-verify this row and the ESA part of assistance-animal-accommodation-nj; no lease clause is offered meanwhile.
- `dv-lockchange`: 46:8-9.14 doesn't say who pays when the landlord changes the locks under the order (only a victim who changes them pays). Recommendation: tell landlords not to charge the victim and to follow the order; no NJ lock-change fee clause.
- `electric-submetering-disclosure`: Electric submetering: BPU rules (N.J.A.C. 14:3) are not in the corpus, so edu-electric-submetering-nj is NEEDS_REVIEW. Recommendation: keep it as education (no clause) and obtain 14:3 before any NJ submetering clause is offered.
- `emergency-contact`: N.J.S.A. 55:13A-7.19(b) requires every multiple-dwelling lease to carry a bold notice with the management company's website and the state social services hotline instructions (English and Spanish); no NJ row has it. Recommendation: add a REQUIRED/CONDITIONAL disclosure clause (wording in findings) after confirming the hotline's current access instructions (believed to be 2-1-1).
- `ev-charging-requirements`: EV charging: shared optional clauses (ev-charger-installation-hi, ev-charging-end-of-tenancy-co, ev-charging-shared-area-co) were not tagged for NJ because the installation clause has the landlord rebill electricity (BPU rules on landlord resale not in the corpus) and the shared-area clause adds a reservation fee. Recommendation: leave NJ on education rows only unless you want an NJ-specific optional consent clause without electricity rebilling.
- `eviction-service-party`: eviction-service-party is NEEDS_REVIEW because R. 4:4-4 (personal service, incl. any agent authorized by appointment) isn't in the corpus. Recommendation: offer no NJ clause appointing a tenant's agent for eviction papers; add R. 4:4-4 to the corpus and re-check.
- `fair-housing`: Age: N.J.S.A. 10:5-12(g)-(h) omit age as a housing ground while 10:5-4 lists age in the general civil right. I left age out of the housing list and said nothing about it in the body. Recommendation: keep it out of the body (the operative housing subsections control), and have counsel confirm if a builder screen ever asks about applicant age.
- `fire-code-standard`: fire-code-standard: N.J.A.C. 5:70 (the Uniform Fire Code, which names the adopted model-code edition and its reach to one- and two-family rentals) is not in the corpus. I kept edu-fire-code-standard-nj VERIFIED because every claim rests on statutes and N.J.A.C. 5:10 read whole, and the body names no edition and points the landlord to 5:70. Recommendation: accept as VERIFIED; if you want the edition stated, add N.J.A.C. 5:70 to the corpus and revise.
- `fire-sprinkler-duty`: fire-sprinkler-duty: whether existing NJ apartment buildings (especially high-rises) carry a sprinkler retrofit duty turns on N.J.A.C. 5:70, which is not in the corpus, so edu-fire-sprinkler-duty-nj is NEEDS_REVIEW. Recommendation: add N.J.A.C. 5:70 (DCA courtesy copy) to the corpus and have one pass confirm or add the retrofit rule; until then ship the row as NEEDS_REVIEW.
- `firearms`: firearms: should the library offer NJ landlords an optional clause stating whether the owner consents to permit holders carrying in common areas and parking (N.J.S.A. 2C:58-4.6(a)(24) makes the owner's consent decisive)? Recommendation: not now — keep the education row only until the federal challenge to (a)(24) is checked by counsel, then add a choice_group clause (consent / no consent).
- `jury-waiver`: Jury waiver: the library has no NJ jury-waiver clause and this row says so. Recommendation: keep it that way (enforceability is case law only, 46:8-48 exposure, and eviction cases are tried without a jury unless transferred).
- `landlord-registration`: Municipal rental registration/licensing ordinances (many NJ towns) are flagged, not resolved. Recommendation: keep as a flag in edu-landlord-registration-nj; do not attempt municipal coverage.
- `lead-state-notices`: 58:12A-12.3c's duty starts 90 days after the DOH notice and DCA model statement are published in the N.J. Register (due ~March 2026); publication could not be checked offline. Recommendation: ship the rider now as CONDITIONAL (harmless before the trigger) and have someone confirm the publication date and swap in the DCA model text.
- `owner-move-in-reservation`: Should the library offer an optional mid-term owner-occupancy clause for owner-occupied premises with not more than two rental units (outside the Anti-Eviction Act)? Recommendation: no. Whether such a clause can end a fixed term early is a contract question only case law could settle, and the builder cannot reliably tell when a property is owner-occupied with two units or fewer.
- `portable-solar`: Should the clause portable-solar-devices-nj be offered before 2027-03-01, or only on leases starting (or running) on or after that date? Recommendation: offer it now as optional with the bracketed use note; it is lawful before the effective date because it only grants a permission, and leases signed now will run past March 1, 2027.
- `rent-concession`: Under municipal rent control, a concession may change the base rent used for future increases (ordinance-specific). Recommendation: no NJ-specific clause; keep the tag and rely on edu-municipal-rent-control-nj.
- `rent-receipts`: Does the Truth-in-Renting 'landlord' exclusion (N.J.S.A. 46:8-44(a): buildings of two or fewer units, owner-occupied of three or fewer) limit the cash-receipt duty in 46:8-49.2? Recommendation: treat the receipt duty as applying to every landlord (row says so as a cautious course), since the text is ambiguous and the cost of a receipt is trivial.
- `renters-insurance-rules`: 46:8-39 crime-insurance notice (10+ units) references a federal program that may no longer exist. Recommendation: keep it in the education row only (done) and add a short optional move-in notice rider for 10+ unit buildings rather than a required lease clause.
- `rights-responsibilities-guide`: DCR housing poster (annual copy to residents): obtain N.J.A.C. 13:8 and add a required-notice row? Recommendation: yes; fetch N.J.A.C. 13:8 from DCR and add an annual-notice reminder row.
- `subsidy-late-fee`: 52:27D-287.9(h) sits in the COVID-19 act but its words are not limited to the covered period. Recommendation: keep the cautious reading (waive late fees whenever State/federal assistance pays past-due rent) as written.
- `tenant-death`: N.J.S.A. 46:8-9.1 lets a lease opt out of the death-termination right ('shall not apply to any lease the terms whereof shall explicitly provide otherwise'). Should the library offer an optional opt-out clause? Recommendation: no; keep the statutory right (it is tenant-friendly, the opt-out is rarely worth the dispute risk), as the row now says.
- `unpaid-damages-interest`: interest-on-unpaid-amounts-nj caps the builder rate at 16% (31:1-1 written-contract ceiling) although it is unsettled whether 31:1-1 reaches a tenant's unpaid charges at all. Recommendation: keep the 16% ceiling (cautious) rather than leaving the rate open up to the 30% criminal-usury line.
- `veterans-incentive`: edu-no-veterans-incentive-nj cautions that a veterans-only rent concession may be LAD discrimination because 10:5-12(g) protects 'service in the Armed Forces' with no benign-preference exception (unsettled; case law not read). Recommendation: keep the caution and do not offer a veteran-concession clause for NJ (unlike veteran-servicemember-concession-ne).

## §5 Independent check
SOP rule 80, scaled to the prompt: two rounds, one checker at a time, each told that earlier findings may be wrong. Every fix was applied as an exact old→new erratum with a once-only assertion (listed below).
- **Round 1** (287 items: 262 new rows and 25 tag notes), in two sequential halves:
  - Checker A covered 143 items: 0 ERROR, 8 FIX, 4 NOTE on 10 rows. It read the core controlling sections whole and relied on the notes' quotes for the rest.
  - Checker B covered 144 items: 0 ERROR, 13 FIX, 3 NOTE on 14 rows. It read about 55 rows' controlling sections whole. For the other ~89, a script matched every quoted phrase against the whole cited section (all matched) and the body claims were checked against targeted excerpts. Those ~89 rows were not read whole by a checker; the authors read them section-open (rule 15 in each row's notes).
  - Fresh absence searches turned up nothing missed: holding deposits, cleaning fees, late fees, cooling, sprinklers, initials and pesticides.
- **Round 2** covered the 24 rows edited in round 1, every one read section-open: 0 ERROR, 6 FIX, 2 NOTE. Every round-1 change held as correct law; the fixes complete or reconcile the edited sentences.
- **Edited after the last round** (round-2 errata applied, not re-checked; for Claude Code to read against the statute at sync): `animal-care-access-vi` (NJ tag note), `edu-expedited-criminal-eviction-nj`, `edu-no-stigmatized-property-rule-nj`, `edu-owner-move-in-nj`, `edu-portfolio-thresholds-nj`, `edu-tenant-property-tax-rebate-nj`, `edu-tenant-repair-remedies-nj`, `lead-service-line-notice-nj`.
- **Edited by me before the check** (so round 1 covered them): `edu-eviction-service-party-nj` (R. 4:4-4 read), `edu-forfeiture-redemption-nj` (2A:42-10.16a, 46:8-49.3), `edu-tpa-notice-nj` (2A:18-61.40, -61.46), the code-exception rows, and `social-services-hotline-lease-notice-nj`.

Errata applied (old → new, once-only):
- `edu-eviction-service-party-nj`.bodyText (author, FIX): post-canvass correction
- `edu-eviction-service-party-nj`.verification_status (author, FIX): post-canvass correction
- `edu-eviction-service-party-nj`.notes (author, FIX): post-canvass correction
- `edu-forfeiture-redemption-nj`.bodyText (author, FIX): post-canvass correction
- `edu-forfeiture-redemption-nj`.notes (author, FIX): post-canvass correction
- `edu-tpa-notice-nj`.bodyText (author, FIX): post-canvass correction
- `edu-tpa-notice-nj`.notes (author, FIX): post-canvass correction
- `edu-notice-to-quit-waiver-nj`.bodyText (r1-A, FIX): 2A:18-61.2 exempts from the written-notice requirement both nonpayment of rent (61.1(a)) and failure to pay a rent increase after a valid notice to quit and notice of increase (61.
- `edu-notice-to-quit-waiver-nj`.bodyText (r1-A, FIX): 2A:18-56 notice-to-quit proof applies only to the holdover cases in 2A:18-53(a), not to every removal of a non-covered tenant (e.g. nonpayment). Body states it unqualified.
- `edu-habitability-waiver-nj`.bodyText (r1-A, NOTE): Rent-deposit act's 'housing space' excludes public housing and hotel/motel/guest-house space (2A:42-86(e)); body says 'every rental except owner-occupied premises with not more tha
- `edu-nonwaivable-rights-nj`.bodyText (r1-A, FIX): 56:12-11 bars a consumer contract from containing a waiver of plain-language rights but does not make such a term void; it also says a violation does not render the contract void. 
- `edu-lease-completeness-nj`.bodyText (r1-A, FIX): Copy-at-signing rule (56:8-2.22) is stated for a sale of merchandise; whether it reaches a real-property lease is unread case law (the pointed-to row says so). Body presents it as 
- `edu-optional-lease-terms-nj`.bodyText (r1-A, FIX): 2A:18-61.1(i) is an eviction ground, not a general rule on when a lease may be changed; parties may still agree to changes. Body overstates it as a limit on all changes.
- `edu-optional-lease-terms-nj`.bodyText (r1-A, FIX): 46:8-49.1 binds a 'landlord' as defined in the Truth-in-Renting Act (46:8-44(a)), which excludes premises of two or fewer units, owner-occupied premises of three or fewer, and tran
- `edu-expedited-criminal-eviction-nj`.bodyText (r1-A, NOTE): Assault/terroristic-threats (o) and theft (q) grounds also reach a juvenile adjudicated delinquent; body mentions juvenile adjudication only for the drug ground.
- `edu-forfeiture-redemption-nj`.bodyText (r1-A, FIX): 2A:42-9 sits in the 2A:42-7 to -9 action, which applies to a landlord owed a full year's rent in arrears who holds a right of reentry; body states it as a general rule for any tena
- `edu-fire-code-standard-nj`.bodyText (r1-A, NOTE): 52:27D-213(a) is a construction rule (the Fire Safety Act does not authorize such a regulation or ordinance), and sits beside 52:27D-202's local power to adopt stricter fire ordina
- `edu-health-district-rental-rules-nj`.bodyText (r1-A, FIX): 26:3-31(m) lists what a local board of health has power to require; the fuel-and-maintenance obligation sits in that enabling paragraph, so it binds an owner only where the board h
- `lead-service-line-notice-nj`.bodyText (r1-A, NOTE): For a renewal or an existing resident, 58:12A-43(c)(1) requires a hard copy to each existing resident, not prior notice before move-in; the bracketed multi-unit sentence is phrased
- `edu-owner-move-in-nj`.bodyText (r1-B, FIX): Paragraph (2) omits the statute's condition that the tenant's initial tenancy began by rental from an owner of three or less units, and omits that (2) also covers a contract to sel
- `edu-owner-move-in-nj`.bodyText (r1-B, FIX): Body omits ground (l)(1): in a building of any size constructed as or being converted to a condominium, cooperative or fee simple ownership, the owner may evict a tenant whose init
- `edu-lease-registration-nj`.bodyText (r1-B, NOTE): 61.3(b) protects against removal, but its last sentence lets a successor not bound by the old lease offer a different lease; the good-cause point does not protect the lease's econo
- `edu-portfolio-thresholds-nj`.bodyText (r1-B, FIX): Item (10) omits 2A:18-61.1(l)(1): an owner of a building of any size constructed as or being converted to a condominium, cooperative or fee simple ownership may evict (tenancy begu
- `edu-tenant-property-tax-rebate-nj`.bodyText (r1-B, FIX): Timing of the first payment is garbled. The statute makes the first payment cumulative to the month following receipt of the collector's notice, and that rule does not apply (no cu
- `edu-protected-class-inquiry-ban-nj`.bodyText (r1-B, FIX): The MDRR 'multiple dwelling' is 25 or more units at one location OR across various locations in NJ under one management or common ownership (incl. scattered single-family units). B
- `edu-protected-class-inquiry-ban-nj`.bodyText (r1-B, FIX): Omits that the Inquiry document must also be given to applicants upon completion of their application process.
- `edu-seasonal-tenancy-nj`.bodyText (r1-B, FIX): Saying the other deposit rules 'still apply' omits the Act's own scope exception: the Rent Security Deposit Act does not apply to owner-occupied premises with not more than two ren
- `edu-rent-increase-notice-nj`.bodyText (r1-B, NOTE): 2A:18-61.1(f) requires a 'valid notice to quit' but the Anti-Eviction Act does not itself set the period; the body imports the 2A:18-56 periods as if they were the rule for covered
- `edu-no-stigmatized-property-rule-nj`.bodyText (r1-B, FIX): The Consumer Fraud Act's omission prong requires knowing concealment, suppression or omission of a material fact WITH INTENT THAT OTHERS RELY on it; the body drops the intent quali
- `edu-stove-refrigerator-nj`.bodyText (r1-B, FIX): Conflates two rules in N.J.A.C. 5:28-1.12(a): the bar on shutting off applies to services, facilities and equipment REQUIRED by the State Housing Code (temporary interruptions only
- `edu-subsidy-late-fee-nj`.bodyText (r1-B, FIX): The three-business-day payment period runs from the posting of the warrant for removal or execution of a lockout, not from the nonpayment judgment.
- `edu-tenant-records-nj`.bodyText (r1-B, FIX): The three-business-day window runs from posting of the warrant for removal or a lockout, not from the nonpayment judgment.
- `edu-tenant-repair-remedies-nj`.bodyText (r1-B, FIX): 46:8-6 makes rent cease 'in default of such repair', i.e. if the landlord does not repair as speedily as possible; the body says rent stops in every case.
- `animal-care-access-vi`.notes (r1-B, FIX): Tag note overstates 4:22-46.2: officers may enter private property and take custody only on a warrant issued on probable cause of an animal cruelty violation, or without one only w
- `edu-no-sprinkler-disclosure-nj`.notes (r1-B, NOTE): Fresh battery found N.J.S.A. 18A:3B-14.1: institutions of higher education must give students fire safety information including sprinkler systems on enrollment. Not a landlord or l
- `edu-expedited-criminal-eviction-nj`.bodyText (r2, FIX): Round 1's own reason said both (o) and (q) reach a juvenile adjudicated delinquent, but only the assault clause was fixed; the theft ground still omits juvenile adjudication.
- `edu-owner-move-in-nj`.bodyText (r2, FIX): After round 1 added the (l)(1) condominium-conversion sale ground in the later parenthetical, the earlier sentence still says owner move-in is good cause 'only in these cases' (1)-
- `edu-portfolio-thresholds-nj`.bodyText (r2, FIX): Round 1's new item (10) clause leaves out two (l)(1) conditions: the tenant's initial tenancy must have begun after recording, and the tenant must have received the 2A:18-61.9 stat
- `edu-tenant-repair-remedies-nj`.bodyText (r2, FIX): This row has the same rent-to-court scope sentence that round 1 corrected in edu-habitability-waiver-nj, and it was left unfixed here. The act's 'housing space' excludes public hou
- `lead-service-line-notice-nj`.bodyText (r2, FIX): The new parenthetical 'before and at the start of Tenant's residence' blurs two separate duties: the tenant must be informed before residence begins, and the hard copy is due when 
- `edu-no-stigmatized-property-rule-nj`.notes (r2, FIX): Round 1 rewrote the body from the text of 56:8-2, but the notes still say the Consumer Fraud Act was 'not re-read here', so the body's quoted elements have no stated source.
- `animal-care-access-vi`.notes (r2, NOTE): Round 1's wording drops the officer's standard in subsection (b), which requires a reasonable basis to believe immediate assistance is needed. It does not require that immediate as
- `edu-tenant-property-tax-rebate-nj`.bodyText (r2, NOTE): Round 1's reason noted that the first payment need not be cumulative when the notice arrives after November 1, but the body does not say so.

## §6 Findings on existing rows
Nothing below was changed in this pass; Claude Code fixes at sync.
**Consolidated list of proposed fixes and new rows** (each quotes its statute; the per-topic findings below hold the detail). Three canvass findings were resolved inside this pass and need nothing at sync: the 55:13A-7.19(b) lease notice (now `social-services-hotline-lease-notice-nj`), the 55:13A-11(d) safety-exception notice (now `safety-exception-notice-nj`, replacing a wrong absence draft), and the "no NJ fair-housing row" note (now `edu-fair-housing-nj`).
1. `edu-property-left-behind-nj` omits N.J.S.A. 2A:18-75 ('shall allow an animal control agency or humane society to remove any abandoned pets or livestock'; perishable food may be discarded promptly) and 2A:18-80 (remit the sale balance to the tenant with an accounting, or deposit it with the Superior Court).
2. `edu-casualty-nj` and the casualty education rows: N.J.S.A. 46:8-6 stops rent only "In default of such repair", after a mandatory duty to repair "as speedily as possible".
3. `edu-payment-rules-nj` omits N.J.S.A. 46:8-49.2(c) (a missing cash receipt is a defense to nonpayment eviction for those months) and the repeat-violation penalties; it and `acceptable-payment-methods-nj` state the EFT ban without the Truth-in-Renting "landlord" scope (46:8-44(a)).
4. `edu-security-deposit-rules-nj` omits the seasonal-rental exemption from the account rules (46:8-19(d)); `pet-policy-nj` should say a pet deposit is security under the cap (46:8-21.2; Reilly v. Weiss, case law, not read).
5. `edu-truth-in-renting-lease-provisions-nj` and `edu-plain-language-act-nj` omit the void-waiver rules in 2A:18-61.66 and 56:12-11 and the court's reformation power (56:12-4.1). `truth-in-renting-statement-nj` omits the 30-day redistribution of each new statement to every current tenant (46:8-46).
6. `edu-statutory-early-termination-nj`: add 46:8-9.2(d) (unit not accessible for a household member with a lasting disability after the landlord declines), that 46:8-9.2 applies to leases of a year or more, and that the surviving-spouse right in 46:8-9.1 is for leases executed jointly by husband and wife.
7. `edu-retaliation-nj` omits the owner-occupied two-or-fewer-units exclusion (2A:42-10.13).
8. `edu-screening-rules-nj`: add N.J.S.A. 52:27D-287.9 (no eviction, credit reporting or refusal to rent over covered-period rent arrears), 2C:7-16(c)(7) (registry information may not be used to deny housing except as another law allows), and remove its stale NEEDS_REVIEW notes on P.L.2025, c.251 (now read; approved 2026-01-12, effective immediately).
9. `edu-heat-and-pest-duties-nj`: add the State Housing Code heat rule for one- and two-unit dwellings (N.J.A.C. 5:28-1.12, 68°F day / 65°F night; season to May 1) and local health board heat powers (26:3-31(m), (p); 26:3-31.5 to -31.7).
10. `edu-foreclosure-tenant-rights-nj` omits the tenant's right of first refusal at a sheriff's sale (2A:50-64(d)).
11. `landlords-access` (NJ note): add the N.J.S.A. 2A:39-1 consent rule. `smoking-policy` (NJ note): the Smoke-Free Air Act already bans smoking in apartment lobbies and other public areas (26:3D-57, -58).
12. `assistance-animal-accommodation-nj` is VERIFIED on its emotional-support-animal part, which rests on N.J.A.C. 13:13 (not held); read 13:13 at sync. Also unread: N.J.A.C. 13:8 (DCR poster), 14:3 (BPU), 5:70 (fire code), 7:30 (pesticides), 8:26 (pools); the rows resting on them say so and are NEEDS_REVIEW where the rule controls.
13. `lead-in-drinking-water-disclosure-nj`: confirm the New Jersey Register publication date of the 58:12A-12.3c model statement and swap in its text.
14. New rows proposed for topics New Jersey already answers (not added; fields in the per-topic findings): senior-building emergency plans and outage reporting (52:27D-224.1, -224.2); the tenants' organization utility takeover (2A:18-61.60, -61.61); accessible parking spaces in multiple dwellings (55:13A-7.3, now noted in `edu-no-unbundled-parking-rule-nj`); the manufactured-home-park 3.5% site-rent cap (P.L.2025, c.85, 52:27D-287.12 ff.) for any mobile-home row.

- (from `abandoned-property`) edu-property-left-behind-nj omits 2A:18-75 ('shall allow an animal control agency or humane society to remove any abandoned pets or livestock'; perishable food may be disposed of promptly) and 2A:18-80 (deduct costs/unpaid rent from sale proceeds, 'remit to the tenant the remaining proceeds ... with an itemized accounting', else deposit in Superior Court). Proposed addition to that row: 'You may promptly dispose of perishable food and must let an animal control agency or humane society remove abandoned pets or livestock. After a sale, you may deduct reasonable costs of notice, storage and sale and unpaid rent and charges not covered by the deposit; send the tenant the rest with an itemized accounting, or deposit it with the Superior Court if the tenant cannot be found.' Also its 2A:18-82 sentence is fine.
- (from `adverse-proceeding-notice`) No NJ row states N.J.S.A. 55:13A-11(d): owner of a multiple dwelling granted an exception to a safety-related regulation 'shall provide to every applicant or occupant ... a written notice citing the specific regulation for which an exception has been granted ... such written notice shall be attached to the lease of each affected dwelling unit' (all leases for common-area exceptions). Proposed CONDITIONAL REQUIRED_DISCLOSURE clause 'regulation-exception-notice-nj' (Disclosures): 'Notice of Regulation Exceptions. [Use only if the Department of Community Affairs has granted this building an exception to a regulation affecting occupant safety.] The Commissioner of Community Affairs has granted the owner the following exception(s) to the Hotel and Multiple Dwelling regulations: [cite each regulation and the exception granted]. A copy of this notice is attached to this Lease.' Applies to multiple dwellings (55:13A-3 definition) only.
- (from `alarm-tampering-fee`) Verdict 'Absent' (no fee law) with a tag of the optional detector-care clause. 52:27D-198.1 heading still says 'portable fire extinguishers' though P.L.2025, c.19 removed the requirement from the text; rows should not cite the heading.
- (from `alt-housing`) No NJ row states the 2A:18-61.1h six-months'-rent relocation payment for illegal-occupancy displacement (now in edu-alt-housing-nj); edu-anti-eviction-act-nj may want a pointer to this row for grounds g and k.
- (from `animal-care-access`) landlords-access (shared, tagged NJ) says 24 hours' notice 'or the notice period required by applicable law if longer'; N.J.A.C. 5:10-5.1(c) sets one day for multiple dwellings, consistent. No change proposed.
- (from `appliances-excluded`) Did not tag appliances-excluded-la: its notes rest on La. Civ. Code art. 2699 and NJ's multiple-dwelling rules make refrigeration and cooking facilities required where cooking is allowed.
- (from `application-fees`) edu-screening-rules-nj still says 'Since May 1, 2026' correctly; no change. Its notes still carry a superseded 'NEEDS_REVIEW: enactment/effective date ... not verified' sentence in the first segment, later resolved; harmless history.
- (from `casualty-and-mitigation-waivable`) edu-casualty-nj body says 'if the property is damaged by fire without the tenant's fault, rent stops until it's fully repaired, and you should repair it as quickly as possible'. N.J.S.A. 46:8-6 says 'the landlord shall repair the same as speedily as possible. In default of such repair the rent shall cease until such time as the building or buildings shall be put in complete repair.' Rent stops only on the landlord's default in speedy repair, and the repair duty is mandatory ('shall'). Proposed wording: 'If the property is damaged by fire without the tenant's fault, you must repair it as quickly as possible; if you don't, rent stops until it is completely repaired.'
- (from `children-occupancy`) No existing NJ row found stating the LAD's housing provisions (10:5-12(g)) generally; edu-screening-rules-nj may cover part. Check whether a general NJ fair-housing education row exists; if not, one is needed.
- (from `condemned-premises-rent-bar`) No NJ row states the illegal-occupancy relocation duty (2A:18-61.1h: owner owes six months' rent, due five days before removal). Consider whether edu-for-cause-eviction-nj or edu-anti-eviction-act-nj mentions it; if not, the new row covers it.
- (from `confirmed-absences-habitability`) Batteries for edu-no-radon-disclosure-nj and edu-no-mold-disclosure-nj re-run on STATUTES.TXT (through P.L.2026, c.50) reproduce the hit lists in those rows; no change needed.
- (from `disability-accommodation`) assistance-animal-accommodation-nj notes say its ESA reliance on N.J.A.C. 13:13-3.4 was 'NOT read section-open' yet the row is VERIFIED; 13:13 is still not held in the corpus. Suggest obtaining N.J.A.C. 13:13 (DCR courtesy copy) to verify both rows.
- (from `disaster-duties`) No existing NJ row mentions the Rent Protection Emergency (N.J.S.A. 2A:18-61.62 to -61.65); edu-municipal-rent-control-nj could point to edu-disaster-duties-nj. 2A:18-61.63(b) says new-lease rent is 'limited to the product of the fair market rental value ... and two times the rate of inflation', which read literally is nonsensical; the row paraphrases it as pre-emergency fair market rent plus no more than twice inflation.
- (from `electric-submetering-disclosure`) No NJ row covers the multiple-dwelling indirect heat-apportionment rules (N.J.S.A. 55:13A-7.8 to -7.11; N.J.A.C. 5:10-25), which include a duty to give prospective occupants written information about the system (5:10-25.2(c)(8)); edu-electric-submetering-nj now covers it. Consider whether utilities-responsibility (shared clause) should carry a conditional pointer for heat billed by apportionment.
- (from `emergency-contact`) MISSING REQUIRED LEASE DISCLOSURE (no NJ row; not in edu-lease-content-requirements-nj's list): N.J.S.A. 55:13A-7.19(b) (L.2021, c.269): 'The following information shall be contained in a printed notice, conspicuously set forth in prominent boldface type, in every lease offered to a tenant in a multiple dwelling: (1) the Internet website address of the management company that manages the multiple dwelling; and (2) instructions on how to access and use the comprehensive social services information toll-free telephone hotline, established pursuant to section 1 of P.L.1991, c.542 (C.30:1-1.1).' (c): 'shall be made available in English and Spanish.' Proposed clause (id social-services-hotline-notice-nj, group Disclosures, REQUIRED/CONDITIONAL, basis REQUIRED_DISCLOSURE: N.J.S.A. 55:13A-7.19(b); render whole in bold, with a Spanish version): '[Use if the Premises are in a multiple dwelling (three or more units).] **Management company website: [website address of the management company that manages the building, or "None - the building is not managed by a management company"]. Help with social services: New Jersey runs a free 24-hour social services information hotline for referrals about rental assistance, emergency shelter, home energy assistance, legal services, food assistance and other help. To use it, [instructions: dial 2-1-1 or the number the State publishes] and tell the operator what kind of help you need.**' Verify the current hotline access instructions (likely NJ 2-1-1; not confirmed in corpus) and the citation's 'P.L.1991, c.542' vs 30:1-1.1's history line 'L.1991, c.524' (statute text cross-reference mismatch). edu-lease-content-requirements-nj should then list it.
- (from `ev-charging-requirements`) edu-no-ev-charging-right-nj notes describe 40:55D-66.20 from a site search through P.L.2026, c.30; P.L.2026, c.51 has since amended 66.20 (rounding/parking-credit details only); its body remains accurate. 45:22A-48.4 confirmed to protect unit owners against associations only, consistent with that row.
- (from `fair-housing`) edu-screening-rules-nj notes still say 'NEEDS_REVIEW: ... c.251 ... not read section-open; LAD pending' in its earlier note layers, though a later layer records the LAD read. STATUTES.TXT shows c.251 and c.307 are carried in 10:5-5 and 10:5-12; the lead may want to clear those stale NEEDS_REVIEW phrases. Also: its body says 'except in qualifying housing for older persons' (correct) but doesn't mention the 10:5-5(n) owner-occupied two-family / rooms exemption for the source-of-income rule; proposed addition: 'These income rules do not apply to renting one unit of a two-family house the owner lives in, or rooms in an owner-occupied one-family home, unless the housing is publicly assisted (N.J.S.A. 10:5-5(n)).'
- (from `fee-unprovided-service`) N.J.S.A. 48:5A-49 (landlord may not bar cable TV, take payment for installation, or vary rent for cable subscribers) has no NJ row that I could find in nj-existing-rows.txt; it may deserve a topic of its own (e.g. a telecom/cable-access topic) — flagged for the lead, not written beyond this row.
- (from `foreclosure-disclosure`) edu-foreclosure-tenant-rights-nj does not mention the tenant right of first refusal at sheriff's sale (N.J.S.A. 2A:50-64(d), (e)(4), added by P.L.2023, c.255) or the 2A:50-70(e) duty of a foreclosing creditor to include the court-rule tenant-rights notice with service on a tenant; proposed addition: 'A foreclosing party must include the court-required tenant-rights notice when it serves or first contacts a tenant. In a sheriff's sale of a home owned by an individual, a tenant who has lived there at least a year and is current on rent may have a right of first refusal to buy it.'
- (from `forfeiture-redemption`) No existing NJ row states the tenant's pay-and-stay right (2A:42-9; court forms: up to the third business day after eviction). default-by-tenant-nj only says 'any right New Jersey law gives Tenant to pay Rent owed before judgment or before removal still applies'. edu-eviction-court-rules-nj could add: 'A tenant sued for nonpayment only may pay all rent due and owing plus proper costs up to the third business day after the eviction; the landlord must accept it or cooperate with a committed rental assistance program or charity (Appendix XI-G(1)).' edu-forfeiture-redemption-nj now carries it. Also: the courtrules/Appendix_XI_G_1 and Appendix_XI_S files in the corpus are 143- and 162-byte stubs (header only); the full text is in courtforms/.
- (from `governmental-fines`) CORRECTION to my earlier saved row edu-forfeiture-redemption-nj (topic forfeiture-redemption, this slice): the three-business-day pay-and-stay is STATUTORY, not only in court forms. N.J.S.A. 2A:42-10.16a(a) ('In an eviction action for nonpayment of rent, pursuant to subsection a. of section 2 of P.L.1974, c.49 (C.2A:18-61.1), the court shall provide a period of three business days after the date on which a warrant for removal is posted to the unit or a lockout is executed due to nonpayment of rent, for the tenant to submit a rent payment'; late fee not to exceed the amount in the warrant application), (b)(1) landlord 'shall accept all payments' and within two business days give the court written notice, (b)(2) court 'shall dismiss with prejudice', (b)(3) tenant motion; N.J.S.A. 46:8-49.3(a) (accept cash, certified check, money order or rental assistance/charity payment; cooperate with committed programs), (b) receipt with date, (c) attorney's-fee limit for rent-controlled property, (d) penalty 'not more than $500 for each offense' (P.L.2019, c.316). Proposed replacement for the body's sentences 3-6: 'By law, in a nonpayment case under the Anti-Eviction Act, the tenant has three business days after the warrant for removal is posted, or after a lockout, to pay all rent due and owing. You must accept the payment, whether made in cash, by certified check or money order, or through a rental assistance program or charity, and cooperate with any program or charity that has committed to pay. Give the tenant a dated receipt, and within two business days tell the court in writing that the rent was paid; the court then dismisses the case with prejudice. You may not add a late fee beyond the amount in your warrant application. A violation can cost up to $500 per offense.' and drop 'The case-law rules behind the court forms were not read here; follow the forms.' Add to notes N.J.S.A. 2A:42-10.16a and 46:8-49.3 quotes above. The edu-forfeiture-redemption-nj row should be corrected before assembly; I did not rewrite the saved line (brief: never redo a saved topic).
- (from `habitability-modifiable`) tenant-supplied-heat-nj and edu-heat-and-pest-duties-nj rest on N.J.A.C. 5:10 (3+ units). For 1-2 unit dwellings, N.J.A.C. 5:28-1.12(o) ('In the absence of a contract or agreement to the contrary') and (n) (68/65 degrees, Oct 1 to May 1 - note May 1, not May 15) govern where the code applies; no row states the 5:28 heat rule. Proposed education sentence for edu-heat-and-pest-duties-nj or a new row (no change made): 'In one- and two-unit dwellings, the State Housing Code requires the owner to provide heat whenever the owner controls the heating facilities or two or more units share one, unless a contract or agreement says otherwise; where the owner supplies heat, the minimum is 68 degrees from 6 a.m. to 11 p.m. and 65 degrees overnight, October 1 to May 1.'
- (from `health-district-rental-rules`) edu-heat-and-pest-duties-nj covers the N.J.A.C. 5:10 heat rule (3+ units) but, as far as its body shows, not N.J.S.A. 26:3-31(m) local-board heat standards or 26:3-31(p) (board may act as landlord's agent for heating repairs, with a lien). Possible addition there: 'A local board of health may also set heat rules and, if heat fails and you don't act within 24 hours of a tenant's complaint to the board when it is below 55 degrees outside, hire repairers as your agent and lien the property (N.J.S.A. 26:3-31(m), (p)).'
- (from `infirmity-termination`) edu-statutory-early-termination-nj body omits the 46:8-9.2(d) inaccessibility ground (only in notes) and does not say 9.2 applies only to leases of one or more years used solely as a dwelling. 46:8-9.2(d): 'the dwelling place is not handicapped accessible ... a statement that the lessor has been asked to make the dwelling unit accessible ... at the lessor's expense and was unable or unwilling to do so.' Proposed addition: 'The same 40-day right applies to a lease of one year or more where the home is not accessible to a household member with a lasting handicap and you were asked, and were unable or unwilling, to make it accessible at your expense.'
- (from `landlord-registration`) landlord-registration-disclosure-nj notes say 46:8-28.5 requires DCA filing for 1-2 family rentals 'with exemptions' (correct), but the clause row is a lease clause only; no NJ row stated the registration duty itself before this one. No error found in the existing row.
- (from `lead-state-notices`) lead-safe-certification-nj is correct as written against 52:27D-437.16(c), (e) as amended by P.L.2024, c.74. No existing NJ row covered 58:12A-43(c) (lead service line: multi-unit resident notice, posting, and lease condition with tenant termination right) or 58:12A-12.3c; both added here.
- (from `lease-type-parity`) P.L.2025, c.85 (N.J.S.A. 52:27D-287.12 ff.) caps rent increases on 'covered dwelling sites' in manufactured home parks at 3.5% per 12 months (52:27D-287.13(a)), with $1,000 penalties, tenant termination petition and $500/$1,000 private action. This act is NOT in the brief's list of 2024-2026 acts touching core chapters (the brief lists only c.362 for 46:8C mobile home communities). Recommend the lead check whether any NJ mobile-home/manufactured-home row needs it.
- (from `nonpayment-notice`) No existing NJ row states N.J.S.A. 52:27D-287.9 (P.L.2021, c.188, s.3): covered-period (COVID-19) rent can't support eviction of very low- to middle-income households; landlord may not report covered-period nonpayment to other landlords or credit/collection agencies or refuse to rent on that basis (subsec. i). Proposed: one sentence in edu-screening-rules-nj: 'Don't refuse to rent, or report a tenant to other landlords or credit agencies, because of rent unpaid during the COVID-19 covered period (N.J.S.A. 52:27D-287.9(i)).' Section 52:27D-287.7 (definition of covered period) not read.
- (from `nuisance`) Municipal nuisance ordinances (e.g., chronic-nuisance or disorderly-house ordinances) are outside the corpus; the row flags them for local review.
- (from `part5-nonwaivable`) edu-truth-in-renting-lease-provisions-nj body lists specific anti-waiver laws but omits the 2A:18-61.66 fee-reciprocity waiver ban and the Plain Language Act's 56:12-11 waiver ban. Proposed addition (no change made): 'Waivers of the tenant's implied right to attorney's fees (N.J.S.A. 2A:18-61.66) and of plain-language rights (N.J.S.A. 56:12-11) are also void or barred.'
- (from `pest-control-notice`) N.J.A.C. 7:30 is not in the corpus; a later pass with that chapter should confirm or replace this row.
- (from `pet-fees`) pet-policy-nj says 'Tenant will pay Landlord a pet deposit, if applicable' with no amount variable and no statement that the pet deposit is part of the Security Deposit under the 1.5x cap. Proposed added sentence (no change made): 'Any pet deposit is part of the Security Deposit, is held and returned on the same terms, and together with the rest of the Security Deposit will not exceed one and one-half months' Rent.' Basis N.J.S.A. 46:8-19, 46:8-21.2; Reilly v. Weiss (case law, not read).
- (from `plain-language-consumer-statement`) edu-plain-language-act-nj omits 56:12-11 (no waiver of Plain Language Act rights) and 56:12-4.1 (court reform of a confusing material term). Proposed addition (no change made): 'A lease may not waive these rights, and a court may reform or limit a confusing material term that is likely to cost the tenant money.'
- (from `pool-safety`) N.J.A.C. 8:26 not in corpus; needed to confirm apartment-pool lifeguard/inspection duties.
- (from `portable-solar`) P.L.2026, c.82 (46:8-65) effective 2027-03-01; both rows carry effective_from 2026-10-31 per the brief, but the tenant right starts 2027-03-01 (stated in bodies). Assembler may wish to set effective_from 2027-03-01 on the education row's duty.
- (from `post-eviction-property`) edu-property-left-behind-nj omits two landlord duties in the statute: N.J.S.A. 2A:18-75 ('shall allow an animal control agency or humane society to remove any abandoned pets or livestock') and N.J.S.A. 2A:18-80 ('shall remit to the tenant the remaining proceeds, if any, together with an itemized accounting'; unlocated tenant's proceeds 'deposited into the Superior Court'). Proposed added sentences: 'Let an animal control agency or humane society remove any abandoned pets or livestock. If you sell the property, you may keep reasonable notice, storage and sale costs and unpaid rent and charges not covered by the security deposit, and must send the rest to the tenant with an itemized accounting (or deposit it with the Superior Court if the tenant can't be found).' Also: 2A:18-76(a) says the tenant may respond 'in writing or orally'; the existing row is silent on the 15-day extension.
- (from `property-tax-rent-disclosure`) Tenants' Property Tax Rebate Act (54:4-6.2 ff.) is a landlord duty for 5+ unit buildings; check that no existing NJ row covers it (none found in nj-existing-rows.txt by name).
- (from `protected-class-inquiry-ban`) No existing NJ row states the Law Against Discrimination housing prohibitions (10:5-12(g)-(h)) generally, nor the source-of-income minimum-income rule in 10:5-12(g)(4) ('any minimum income requirement or financial standard that is not based exclusively on the portion of the rent to be paid by the tenant'); nj-existing-rows has no fair-housing/discrimination row. If no other slice covers a fair-housing or source-of-income topic, a NJ row is needed. Also the N.J.A.C. 13:10 MDRR duty to hand the Tenant/Applicant Inquiry document with the signed lease and each renewal (25+ units) is a lease-time duty with no existing row; included in this row's body, but a separate required-disclosures pointer may be warranted.
- (from `purpose-limitation`) 46:8-8 carries no history line in STATUTES.TXT (pre-1937 Revision). pl-void-lease missed 46:8-8 because the words appear in reverse order; pl-void-reverse caught it.
- (from `rent-escalation`) rent-escalation-la option B's example index region ('South Region') is Louisiana-flavoured; for NJ the bracketed example should read Northeast Region or the New York-Newark-Jersey City area. Cosmetic; no change made.
- (from `rent-increase-notice`) P.L.2025, c.85 (N.J.S.A. 52:27D-287.12 et seq.) caps manufactured-home-park site rent increases at 3.5% per 12 months with penalties; check whether any NJ row (mobile-home scope) covers it.
- (from `rent-receipts`) edu-payment-rules-nj (topic acceptable-payment-methods) states the cash-receipt duty but omits the eviction defense in N.J.S.A. 46:8-49.2(c) ('It shall be a valid defense in any action or proceeding against a tenant to recover possession ... for the nonpayment of rent that the landlord violated this section with respect to the months in which the violation or violations occurred') and the escalating penalty. Proposed added sentence (no change made): 'If you fail to give a required cash receipt, the tenant has a defense to an eviction for nonpayment for the months involved, and penalties rise for repeat violations within five years.'
- (from `rent-reporting`) Check whether the eviction-record-sealing or screening rows mention the 52:27D-287.9(i)(2) bar on refusing to rent based on covered-period rent records; if not, edu-screening-rules-nj may need a sentence.
- (from `renters-insurance-rules`) No existing NJ row covers the crime-insurance information duty of N.J.S.A. 46:8-39 (owners of 10+ unit multiple dwellings: give each new tenant crime-insurance information within 30 days of occupancy; penalty up to $200, 46:8-41). The Federal Crime Insurance Program it names may have ended; needs Taylor's decision whether to carry it as a required disclosure.
- (from `required-disclosures`) Lease-option seller disclosure: 56:8-19.2 PCDS flood questions apply 'before the purchaser becomes obligated'; flagged as unsettled for options.
- (from `rights-responsibilities-guide`) No NJ row covers the LAD poster duty (10:5-12(j); N.J.A.C. 13:8 per DCR FAQ: display housing poster, give residents a copy annually and on request). N.J.A.C. 13:8 not in corpus; rule text should be obtained before a REQUIRED clause or notice row is written.
- (from `scope`) Fair Chance in Housing Act exclusion and P.L.2025, c.362 were taken from the brief, not re-read in this slice.
- (from `security-deposit-holding`) edu-security-deposit-rules-nj (Holding paragraph) says 'keep it in a New Jersey interest-bearing account or fund of the required kind' without the 46:8-19(d) seasonal-rental exception ('shall not apply to any security advanced on a contract, lease or license agreement for the seasonal use or rental', not more than 125 consecutive days, landlord's burden). Proposed added sentence (no change made): 'The account rule does not apply to a seasonal rental of not more than 125 consecutive days to a person with a permanent home elsewhere.' The new edu-security-deposit-holding-nj states it.
- (from `servicemember-rights`) None on existing rows. Note for builder: 38:23C-14 makes the lease-termination right non-penalizable; any NJ early-termination fee clause should carve out servicemember termination.
- (from `sex-offender-disclosure`) edu-screening-rules-nj does not mention (text checked)  that registry (Megan's Law Internet registry) information may not be used to deny housing except as the Fair Chance Act authorizes (N.J.S.A. 2C:7-16(c)(7)); if not, proposed addition: 'Do not use the State Police sex offender Internet registry to deny housing, except to confirm a lifetime registration requirement the Fair Chance in Housing Act lets you consider.'.
- (from `showing-notice-waiver`) landlords-access NJ segment says 5:10-5.1(c) one-day access 'matches' its 24 hours; note 5:10-5.1(c) covers inspection and compliance repairs only, and 2A:39-1 requires the possessor's consent for any entry to a residence. Suggest the NJ segment add the 2A:39-1 consent rule (no change made).
- (from `smoke-drift-waiver`) The shared smoking-policy row is tagged NJ (nj-existing-rows.txt); not re-screened in this slice against 26:3D-57/-58 (lobby/public-area/elevator ban). Recommend the NJ segment of smoking-policy be checked to say common-area smoking is barred by statute, not only by lease.
- (from `student-housing`) N.J.S.A. 55:13A-11(d) (L.1967, c.76, s.11; amended L.1979, c.65) requires the owner of a multiple dwelling granted an exception from a Hotel and Multiple Dwelling regulation 'deemed to affect the safety of the occupants' to give every applicant or occupant written notice citing the regulation and the exception, 'attached to the lease of each affected dwelling unit' (all leases for common-area exceptions). This contradicts the other slice's row edu-no-code-variance-notice-nj (topic sanitary-code-variance), which says 'No New Jersey statute requires you to give tenants a copy of a housing, health or fire code variance or to attach it to the lease.' Proposed: a new CONDITIONAL lease clause/attachment row (e.g. hmd-safety-exception-notice-nj, REQUIRED_DISCLOSURE: N.J.S.A. 55:13A-11(d)): '[Use only if the Commissioner of Community Affairs has granted the owner an exception from a Hotel and Multiple Dwelling regulation affecting occupant safety.] Notice of Safety Exception: The Commissioner of Community Affairs has granted Landlord an exception from N.J.A.C. [regulation] as follows: [state the exception]. A copy of the written notice is attached to this Lease.' and correct edu-no-code-variance-notice-nj to carve out 55:13A-11(d).
- (from `subsidy-late-fee`) N.J.S.A. 52:27D-287.9(h) (landlord must waive late fees as a condition of receiving State or federal rental assistance for rent due) and 46:8-49.3(a) (must accept and cooperate with rental assistance payments in the three-business-day post-judgment window) may not be reflected in late-fee-nj / edu-late-fee-rules-nj; consider a cross-reference.
- (from `tax-escalation`) Tenants' Property Tax Rebate Act (N.J.S.A. 54:4-6.2 to -6.13) imposes a posting and rebate duty on owners of 5+ unit buildings; no existing NJ row appears to state it. Now stated in edu-tax-escalation-nj.
- (from `tenant-death`) Shared contact clause tenant-death-contact-nh not tagged for NJ: it points to 'this Lease's Handling of Property Left Behind Section', and NJ has no such clause (edu-property-left-behind-nj is education; surrender-end-of-term-nj does not handle belongings), so the reference would dangle. edu-statutory-early-termination-nj says the death right applies 'unless the lease expressly provides otherwise' (correct) but says 'the estate or surviving spouse'; the statute limits the surviving spouse's notice to leases 'executed jointly by husband and wife' — consider adding that qualifier.
- (from `tenant-portal`) edu-payment-rules-nj and acceptable-payment-methods-nj state the EFT ban (46:8-49.1) without the Truth-in-Renting 'landlord' exclusion (46:8-44(a): premises of not more than two units, owner-occupied of not more than three, transient/seasonal hotels). Overbroad in the cautious direction; consider adding the scope sentence per the brief's added rule.
- (from `tenant-repair-remedies`) N.J.S.A. 26:3-31(p) and 26:3-31.4 to -31.7 (health officer may restore heat or fuel oil as landlord's agent; lien; $300 per unit penalty) may not be stated in edu-heat-and-pest-duties-nj; now stated in edu-tenant-repair-remedies-nj.
- (from `tenant-right-to-organize`) N.J.S.A. 2A:18-61.60 to -61.61 (tenants' organization may accept utility billing on landlord nonpayment; members deduct from rent, arrearage share capped at 15% of rent) may lack a row on utility-service-continuity; now mentioned in edu-tenant-right-to-organize-nj. edu-retaliation-nj omits the scope (2A:42-10.13 excludes owner-occupied premises with not more than two rental units) and the remedy of judgment for the tenant/damages is stated; consider adding scope.
- (from `tenant-rights-statement`) truth-in-renting-statement-nj omits the 30-day distribution to existing tenants after each new DCA edition (46:8-46 'within 30 days after it has been made available by the department'); stated in edu-tenant-rights-statement-nj.
- (from `tpa-notice`) truth-in-renting-statement-nj (topic truth-in-renting) states only the new-tenant and posting duties. N.J.S.A. 46:8-46 also requires every landlord to 'distribute one copy of the statement ... to each of their tenants within 30 days after it has been made available by the department'. That duty is not a lease term, so an education note or a sentence in edu-truth-in-renting-lease-provisions-nj would carry it: proposed wording 'When the Department publishes a new Truth in Renting statement, give a copy to every current tenant within 30 days.'
- (from `unbundled-parking`) No NJ row found for N.J.S.A. 55:13A-7.3 (L.1985, c.280; amended 2017, c.131): owner of a multiple dwelling that provides occupant parking, where a person with a physical disability resides, must set aside at least 1% (min. one) of occupant spaces as accessible parking nearest the principal accesses, signed 'This space reserved for drivers with physical disabilities.' It is carried in edu-no-unbundled-parking-rule-nj; consider a sentence in the parking or accessibility education rows too (proposed: 'If your multiple dwelling provides parking and a resident has a physical disability, set aside at least 1% of occupant spaces (at least one) as signed accessible spaces nearest the main entrances.').
- (from `utility-interruption-submeter`) Addendum to tpa-notice (already saved, not redone): New Jersey has a statute actually titled the 'Tenant Protection Act of 1992' (N.J.S.A. 2A:18-61.40 to -61.59, L.1991, c.509), a condominium/cooperative conversion law giving qualified low-income, disabled or 75+ tenants in 'qualified counties' a protected tenancy; the owner must notify the municipal administrative agency before filing for registration of conversion, and the agency mails each tenant a statutory notice and application (2A:18-61.46). The Senior Citizens and Disabled Protected Tenancy Act (2A:18-61.22 to -61.39) has a parallel notice (2A:18-61.27). Proposed sentence for edu-tpa-notice-nj: 'If you convert in a county covered by the Tenant Protection Act of 1992 or the Senior Citizens and Disabled Protected Tenancy Act, you must first notify the municipal agency and give it a tenant list, stamped envelopes and copies of the statutory notice and application, which the agency mails to every tenant; qualified tenants get a protected tenancy and cannot be evicted because of the conversion (see conversion-statement-nj).' Neither act has a dated sunset (consistent with edu-no-tpa-sunset-nj) or an exemption notice (consistent with edu-no-tpa-exemption-notice-nj).
- (from `water-heater-temperature`) N.J.S.A. 52:27D-224.1 and -224.2 (L.2001, c.80; 2003, c.53; 2013, c.186): owner of a multiple dwelling of more than 20 units reserved for residents 55+ must annually prepare and file an emergency building evacuation plan and an emergency building operations plan (with the municipal emergency management coordinator and with each serving public utility), and must notify the coordinator in writing and by voice when heat, water, hot water, electricity, gas or telephone service is disrupted for longer than two hours. No NJ row was checked to carry this (grep of answers found none in this slice); if none, proposed education sentence for a senior-housing or disaster row: 'If you own a multiple dwelling of more than 20 units reserved for residents 55 or older, prepare and file yearly emergency evacuation and building-operations plans with the municipal emergency management coordinator (and the operations plan with each utility), and notify the coordinator in writing and by phone whenever heat, water, hot water, electricity, gas or phone service is out for more than two hours.'

## §7 Findings for other states
- `rent-escalation-la` (shared): its bracketed index example names "CPI-U, South Region", a prompt only; a regional default would be better per state (no change made).
- Corpus: the court-rule appendix files for XI-G(1) and XI-S are header-only stubs; the full forms are in `courtforms/`.

- (from `construction-liens`) Shared no-liens-ar (10 states) lets the landlord recover 'reasonable costs caused by it'; in any state with a reciprocal attorney-fee statute (NJ 2A:18-61.66 type) that phrase could be read as a fee right. Not a problem for its listed states unless they have such a statute; flagged for review only.
- (from `energy-data-release`) Shared energy-data-release-wy (WY, SD, NV): clause has the tenant authorize utility release for benchmarking; fine where no use-limit statute, but any state adopting it should be screened for a utility customer-data use limit like N.J.S.A. 48:3-85(b)(3).
- (from `firearms`) firearm-rules-la (LA;MS) says 'Nothing in this Lease prohibits a person who lawfully possesses a firearm from transporting or storing it in a locked, privately owned motor vehicle in the property's parking areas.' Not tagged for NJ: in NJ that sentence could be read as the owner's 'express consent' under N.J.S.A. 2C:58-4.6(a)(24) for carrying in the parking area, which a NJ landlord should decide deliberately.
- (from `hoa`) association-approval-la (12 states) was not tagged for NJ: its sentence 'Any deposit or fee the association requires of Tenant is separate from the Security Deposit under this Lease' would, in NJ, have the lease itself require an extra deposit on top of the tenant's security; N.J.S.A. 46:8-21.2 ('An owner or lessee may not require more than a sum equal to 1 1/2 times 1 month's rental ... as a security') makes that risky for an NJ landlord.
- (from `lease-copy`) lease-copy-receipt-hi (shared, 7 states): 'promptly after all parties sign' - fine for its states; noted only why NJ was not tagged.

## Proposed SOP changes
1. **Rule 19 (absence batteries):** for any "notice of a variance" or "waiver of a regulation" absence, also search the regulator's statute for "exception", "exemption" and "waiver". Reason: a New Jersey slice confirmed no lease-notice duty for code variances from a battery on "variance". N.J.S.A. 55:13A-11(d) requires the notice, attached to the lease, under the word "exception"; two other slices caught it before delivery.
2. **Rule 80 (checker reach):** a checker given about 140 rows can't read every controlling section whole in one session. Size check slices so each checker reads every row section-open (about 70 rows), or have it list the rows it checked only by quote-matching, as New Jersey's checker B did, so the next round or the sync can target them.
3. **Rule 27 (helper saves):** a helper that writes its answers in batches rather than one line per topic loses work to a usage stop. Have the assembler compare each answers file's line count with the topics the helper reports done before accepting the slice (one New Jersey helper saved three batches).


## Proposed topic questions
- `sanitary-code-variance`: does the state's housing-code statute require a notice of an agency exception or waiver to be attached to the lease (search "exception", not only "variance")?
- `portable-solar`: does a new balcony or portable solar right take effect after the lease date, so a clause offered now should state the start date?
- `emergency-contact`: does a multiple-dwelling statute require the lease itself to carry the management website or a social-services hotline notice?


## Gaps-pass sync review (Claude Code, 2026-10-31)

Merged with `merge-delta.py --base f332ca1`: 262 new rows and 25 shared rows tagged (287, matching the log's §5 count), nothing refused. All 275 missing topics are answered. After the merge New Jersey carried 389 active rows (383 VERIFIED, 6 NEEDS_REVIEW); with the override below it has 390. The sync checks (`check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py`, `checkConfigIds.js`) all pass. Statutes were read from the staged corpus (corpus-NJ-20261030, STATUTES.TXT through P.L.2026, c.50).

**Edited after the last round.** All 8 rows the log lists were read against the statute. Each holds, and none was changed: `edu-expedited-criminal-eviction-nj` (2A:18-61.1(n)-(r), 61.2(a); the two-year limits on (n), (o) and (r)), `edu-owner-move-in-nj` and `edu-portfolio-thresholds-nj` (2A:18-61.1(l)(1)-(3), 61.2(f), 61.6), `edu-tenant-repair-remedies-nj` (2A:42-86(d)-(e), 26:3-31(p), 26:3-31.5, -31.7, 46:8-6), `edu-tenant-property-tax-rebate-nj` (54:4-6.7, -6.11), `lead-service-line-notice-nj` (58:12A-43(c)(1) and the lease-condition paragraph), `edu-no-stigmatized-property-rule-nj`, and the NJ note on `animal-care-access-vi` (4:22-46.2(a)-(b)). These serve as the statute spot check, since they cover the eviction grounds, owner move-in and the repair remedies.

**NEEDS_REVIEW closed at sync.** `edu-disability-accommodation-nj` was rewritten on N.J.A.C. 13:13-3.4, read whole from DCR's courtesy copy of its rules (njoag.gov, OAL text, history through R.2012 d.039), and is now VERIFIED. The `assistance-animal-accommodation-nj` note now cites 13:13-3.4(c), (e) and (f)2 as read.

**Still NEEDS_REVIEW (primary source unreachable).** The sources were tried on 2026-10-31. BPU's rules page gives no N.J.A.C. 14:3 text, and its 2022 readoption notice prints only amended sections, none on resale. DCA hosts no 5:70 text, only a 2023 amendment proposal. dep.nj.gov returned empty pages for 7:30, and DOH's 8:26 page returned a 404. The official N.J.A.C. is on LexisNexis only. The open rows:
- `edu-electric-submetering-nj`, `edu-utility-apportionment-nj`, `edu-no-utility-submetering-disclosure-nj` (N.J.A.C. 14:3);
- `edu-fire-sprinkler-duty-nj` (N.J.A.C. 5:70);
- `edu-no-pest-control-notice-statute-nj` (N.J.A.C. 7:30);
- `edu-pool-safety-nj` (N.J.A.C. 8:26).

**§6 findings applied** (items 1-11, each read against the statute or rule first): `edu-property-left-behind-nj` (2A:18-75, -80); `edu-casualty-nj` (46:8-6 stops rent only on default of speedy repair); `edu-payment-rules-nj` (46:8-44(a) scope; 46:8-49.2(b)-(c)) and an NJ note on `acceptable-payment-methods-nj`; `edu-security-deposit-rules-nj` (46:8-19(d) seasonal exemption); `pet-policy-nj` (a pet deposit is security under the 46:8-21.2 cap); `edu-truth-in-renting-lease-provisions-nj` and `edu-plain-language-act-nj` (2A:18-61.66, 56:12-11, 56:12-4.1); `truth-in-renting-statement-nj` (46:8-46 30-day redistribution); `edu-statutory-early-termination-nj` (46:8-9.1 joint lease, 46:8-9.2 one-year term and (d)); `edu-retaliation-nj` (2A:42-10.13); `edu-screening-rules-nj` (52:27D-287.9(i), 2C:7-16(c)(7)); `edu-heat-and-pest-duties-nj` (N.J.A.C. 5:28-1.12(n)-(o), DCA copy through 56 N.J.R. 14); `edu-foreclosure-tenant-rights-nj` (2A:50-64(d)); NJ notes on shared `landlords-access` (2A:39-1) and `smoking-policy` (26:3D-57, -58). That is 30 field changes in 20 rows.

**Not done at this sync.** Item 13 (the New Jersey Register date of the 58:12A-12.3c model statement) needs the Register, which was not reachable. Item 14 (new rows for topics New Jersey already answers) is queued in `docs/backlog.md`. The roughly 89 rows checker B matched only by quote were not re-screened. Round 1's fix rate was about 7% (21 of 287), against Texas's 15%, and the authors read every row section-open. §7 findings for other states are review flags only, and none was changed.

**Early termination (backlog sync note).** New Jersey moves from `early-termination-ks` to a new override, `early-termination-nj`, with a flat one-month fee and release from later Rent, as was done for TX and NV. A search of STATUTES.TXT finds no dwelling-lease liquidated-damages statute (2 hits: goods leases and hotel employers), so the penalty test and the duty to re-let are case law (*Sommer v. Kridel*, not read), and the clause says only "any duty" to re-let. It names the 46:8-9.1, 46:8-9.2, 46:8-9.6 and 46:8-6/-7 rights. NJ was removed from `early-termination-ks`. New Jersey now has 390 active rows: 384 VERIFIED and 6 NEEDS_REVIEW.

**Topic questions and SOP.** The log's 3 proposed topic questions were added to `topic-questions.csv` and `lease-clause-topics.md` was regenerated. The 3 proposed SOP changes were adopted as SOP 1.95 (rules 19, 27, 80). Citations: 287 rows were added to `lease-clause-citations-NJ.csv`, taking their citations from the log's §2 table; the 8 absence rows with no citation are marked CONFIRMED_ABSENT.

## Rule type: early termination (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: `early-termination-nj` is now `rule_type` RECOMMENDED, not REQUIRED, with the shared `early-termination-ks` and every state version that copied its label (OH, NV, TX, NJ, AZ, GA, SC, NC, VA, PA, IL). Under SOP rule 56, REQUIRED means a statute requires the clause in the lease, and no state's does. The label is research metadata only; no clause text changed. Taylor's lesson 2 (flag a lease without an early-termination clause) stays as a builder warning in the backlog.
