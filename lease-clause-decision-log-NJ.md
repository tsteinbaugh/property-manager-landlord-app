# New Jersey — lease-clause decision log (state #12)

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ) is closed. **No re-audit of any completed state is planned, now or later.** The only thing that reopens a completed state is an egregious defect found in the course of other work, and then only the affected rows are fixed; the state is not re-audited. The word "re-audit" throughout these files refers to the one-time settings re-run of Aug–Sep 2026, which is finished. Older phrases such as "flag for the X re-audit", "live item for the X re-audit", "when X is next revisited" or "screen the completed states on their next revisit" are historical and dead: they are not a queue. Do not propose, plan or mention a re-audit, and do not park anything "for the re-audit". If something in a completed state looks wrong, say what and why, and let Taylor decide whether it is egregious.

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
