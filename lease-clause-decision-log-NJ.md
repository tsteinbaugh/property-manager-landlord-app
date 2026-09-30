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

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Full verdict list: `lease-clause-scrub-verdicts.md`. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows, and checklist mentions of them now point to those rows. Statutory limits that stay useful when filling in a clause are now bracket prompts for the landlord, not lease text.

- **Moved to education:** `security-deposit-interest-nj` → `edu-security-deposit-rules-nj` (which also takes the restated rules from `security-deposit-return-nj`); `casualty-nj` → `edu-casualty-nj`.
- **Trimmed:** `security-deposit-return-nj` (amount and permitted uses), `late-fee-nj` (senior grace rule → `edu-late-fee-rules-nj`), `acceptable-payment-methods-nj` (duties → `edu-payment-rules-nj`), `holdover-nj` (Anti-Eviction sentence → `edu-anti-eviction-act-nj`), `surrender-end-of-term-nj` (property procedure → `edu-property-left-behind-nj`), `private-well-test-results-nj` (testing duty → `edu-private-well-testing-nj`).
- **§5a.1:** only NJ-only rows changed; no propagation owed.
