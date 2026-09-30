# Nevada — lease-clause decision log (state #10)

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL) is closed. **No re-audit of any completed state is planned, now or later.** "Re-audit" means re-scrubbing everything for a state, and that won't happen. Targeted work is welcome: going back to re-verify or fix a specific row or topic in a completed state (a scalpel, not a hammer) needs no special justification; just say what and why. The word "re-audit" throughout these files refers to the one-time settings re-run of Aug–Sep 2026, which is finished. Older phrases such as "flag for the X re-audit", "live item for the X re-audit", "when X is next revisited" or "screen the completed states on their next revisit" are historical and dead: they are not a queue. Do not propose, plan or mention a re-audit, and do not park anything "for the re-audit". If something specific in a completed state looks wrong or unverified, say what and why and propose the targeted fix.

> ## ▶ PENDING SYNC TASKS — for Claude Code (or any session with the full repo)
>
> **Why this block exists.** The Nevada pass ran in a chat session that had only four files: the library CSV, the named-topic checklist, the CA log and the architecture review. It changed shared rows and one ND row. Instruction 9 requires a note in every affected state's log, but those logs were not in the session. These tasks close that gap. **Do them in order. After each one, change its `[ ]` to `[x]` and add the date, then save this file.** Do not re-run or re-verify the Nevada pass. The Nevada rows in `lease-clauses.csv` are final.
>
> **Files assumed** (adjust if your repo names differ): `lease-clause-decision-log-{CO,WY,KS,NE,MN,ND,SD,OH}.md`, `lease-clauses.csv`, `lease-clause-citations.csv`.
>
> - [x] **T1 — Propagation note → 8 state logs.** *(Done 2026-09-25.)*
>   - **Where:** append the block below as a new dated section at the end of each of `lease-clause-decision-log-CO.md`, `-WY.md`, `-KS.md`, `-NE.md`, `-MN.md`, `-ND.md`, `-SD.md` and `-OH.md`.
>   - **Verify:** `grep -l "Propagated from the Nevada pass, 2026-09-24" lease-clause-decision-log-*.md` lists all 8 files, plus this one.
>
>   ```
>   ## Propagated from the Nevada pass, 2026-09-24
>
>   Two shared rows tagged to this state were edited by the Nevada pass (§5a.1 / instruction 9):
>
>   1. `common-area-use` — appended: "Nothing in this Section restricts any display that applicable law entitles Tenant to make, such as the display of the flag of the United States or of religious or cultural items, subject to any lawful limits on its size, placement, and manner." Driven by NRS 118A.325 / 118A.327 (NV). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
>   2. `parking-vehicle-rules` — inserted "in accordance with applicable law" before the landlord's towing authority. Driven by NRS 487.038 (NV). Classification: UNIFORM — self-limiting. Inherit without override.
>
>   `last_checked` on both rows reset to 2026-09-24. No other field changed. Detail: lease-clause-decision-log-NV.md §§3.1, 11.6, 16.
>   ```
>
> - [x] **T2 — ND only: topic-key note.** *(Done 2026-09-25.)*
>   - **Where:** append to `lease-clause-decision-log-ND.md`, directly under the T1 section.
>   - **Verify:** `grep -c "deposit-escheat" lease-clause-decision-log-ND.md` is at least 1.
>
>   ```
>   Also from the Nevada pass (2026-09-24): `edu-unclaimed-deposit-holder-duties-nd` — topic_key changed "unclaimed-deposit-holder-duties" → "deposit-escheat", merging it with edu-deposit-escheat-ca and edu-deposit-escheat-nv (same topic, previously two keys). Metadata only; body, rule_type, states and verification_status untouched.
>   ```
>
> - [x] **T3 — `landlord-maintenance` status: backfill from the citations file.** *(Superseded 2026-09-25 — see "Sync outcome" below.)*
>   - **The problem:** the row is tagged CO;NV. Its `verification_status` and `effective_from` are blank because Colorado keeps that data in `lease-clause-citations.csv`, not in the row. The Nevada side of the row was verified in this pass; see its `NV:` note.
>   - **Do:** open `lease-clause-citations.csv` and find the entry for `landlord-maintenance`.
>     - If the entry records a verification date and status, write them into the row: `verification_status` = that status (e.g. VERIFIED), and `effective_from` if one is recorded. Append to `notes`: "| Status backfilled from lease-clause-citations.csv on <date> (sync task T3 from NV log)."
>     - If the entry is missing, or shows the row as unverified, **leave the row alone and report to Taylor.**
>   - **Integrity checks after the edit:** no duplicate ids, no dangling `supersedes`, and the row count is unchanged (726 as of the NV pass).
>
> - [x] **T4 — Report only, do NOT bulk-edit: the other 62 blank-status CO rows.** *(Superseded 2026-09-25 — see "Sync outcome" below.)* 62 more active rows (all CO-only) have a blank `verification_status` and point to `lease-clause-citations.csv`. Count how many have a recorded verification in the citations file, and report the numbers to Taylor with a proposal to backfill them the same way as T3. **Backfilling these is Taylor's call:** it changes CO metadata across the library and affects anything in the app that filters on `verification_status`.
>   - **Exclusion to build into the proposal:** Colorado's deposit law was substantially rewritten by **HB 25-1249 (effective 2026-01-01)**, and the full CO update pass is still an open backlog item.
>     - Do **not** propose backfilling VERIFIED onto any CO row that HB 25-1249 may affect — deposit amount/caps, deposit return, deposit penalties, move-in/move-out documentation and similar. Example ids: `security-deposit-return-co`, `edu-security-deposit-cap-co`, `edu-bad-faith-deposit-co`, `edu-deposit-nonwaiver-co`, `edu-deposit-documentation-co`, `edu-walkthrough-co`, `edu-wear-tear-void-co`, `edu-carpet-damage-co`.
>     - List those rows separately in the report as "hold for the CO update pass".
>
> When all four boxes are ticked, add "Sync complete <date>" under this heading.
>
> **Sync complete 2026-09-25.**
>
> **Sync outcome for T3/T4 (Claude Code, with Taylor's sign-off).** The blank Colorado status was not missing data. On 2026-09-13 the status, dates and notes for the 63 CO-only rows were *moved* out of `lease-clauses.csv` into `lease-clause-citations-CO.csv`. (The file is `-CO.csv`; there is no `lease-clause-citations.csv`.) All 63 were recorded VERIFIED there. Every later state kept its status in the main CSV, so CO was the only state that looked unverified to a session holding only the CSV. Taylor's decision: undo the move. All 63 rows had `verification_status`, `effective_from`, `last_checked` and their CO research notes (prefixed `CO:`) copied back from `lease-clause-citations-CO.csv`, which keeps the same data. There are now **zero** active rows with a blank `verification_status`, and blank status should be treated as an error from here on.
>
> **The HB 25-1249 exclusion in T4 was not applied, on purpose.** HB 25-1249 is already incorporated in the CO library (CO log §13 and the 2026-09-07 correction to `security-deposit-return-co`). The architecture-review log's open "HB25-1249-analog sweep" is about checking *other* states for similar laws, not a pending CO update. The restore also re-asserts nothing new; it puts back the status those rows already had.
>
> **The app never filtered on `verification_status`.** That field is kept off the API and never reached a lease, so `landlord-maintenance` was never missing from Nevada leases.

**Date:** 2026-09-24 · **Settings:** Opus, high effort, ordinary search/fetch. Research mode **not** requested — see §9 for the three points where it will be.
**Scope:** Nevada, state-level only. Clark County / Las Vegas and Washoe County / Reno flagged where met, not resolved (instruction 20).
**Input CSV:** `lease-clauses.csv`, **672 rows** — confirmed at session start against the stated counts (CO 114, WY 98, KS 114, NE 111, MN 119, ND 110, SD 90, OH 73, CA 150, NV 0 active; 626 active / 46 inactive). Instruction 13 satisfied.
**Output CSV:** `lease-clauses.csv`, **721 rows** (+49 new across two text batches, 1 dormant row rewritten and activated). No ids removed, no duplicates, no dangling `supersedes`, no NV display collisions, active counts for the other nine states **unchanged**.

---

## 0. Completion status — read this first

**Nevada is substantially complete at state level. §16 is the latest state; §§12–16 supersede §§0 and 11 where they differ.** §§0–10 record the first batch (NRS 118A read from the revisor); **§11 records the second batch** (118A tail, NRS ch. 40, ch. 118, 202.450–.480, 487.038–.039) and **supersedes this table where they differ**. What is still open is six canvass rows that need research mode to locate, plus the candidate-topic tables (§11.7).

| | Status |
|---|---|
| Primary text read | **NRS 118A.010–118A.490(4), section-open, from the revisor** (`leg.state.nv.us/nrs/nrs-118a.html`, header `[Rev. 4/15/2026 — 2025]`). The page truncated mid-§118A.490; **§§118A.490(4)–118A.530 are known by title only.** Plus NRS 202.2483 (smoking, revisor). |
| Step 1 — tag first (instruction 26.1) | **Done.** Every active vetted-state row screened: 58 shared rows and 138 uncited single-state rows **read in full**; 429 single-state rows screened out because their body text cites another state's statute (method in §2.3). **45 existing rows now tagged `NV`** (43 of the 58 shared rows, plus 2 single-state rows). |
| Step 2 — write only what's new, overlap-checked | **34 new NV rows** (20 lease clauses, 14 education) + the dormant row rewritten and activated. Every one checked against its `topic_key` group first; 7 supersede a base row, each with the reason the base could not be tagged or massaged. **1 shared row edited** (`common-area-use`, uniform). |
| NV active rows / shared | **80 active; 45 shared (56%)**; 66 are lease clauses. Zero-shared check passes. |
| `NEEDS_REVIEW` | **0** after §11 (`nuisance-reporting-nv` cleared — and the flag was my error, §11.2). |
| Instruction 24 families | `security-deposit-return` — **closed** (`security-deposit-return-nv`). `assistance-animal-accommodation` — **closed in §11.3** (NRS 118.105 read; base row tagged NV). |
| Dormant row | `foreclosure-disclosure-nv` — **rewritten, verified, activated.** It was defective in four ways (§6). |
| Named-topic canvass (core 69) | **44 answered** from primary text (9 of them as "not located within 118A", boundary stated); **8 answered in part**; **17 `Not Yet Checked`** — every open item tied to a named unread range (§8). |
| Candidate-topic tables | **Not started** — recorded explicitly in the checklist, not left blank. |
| Chapter 40, Chapter 118, adjacent chapters | **Not read.** One consolidated text request in §9. |

**Superseded by §11:** both blockers named in the first batch (the assistance-animal family and Chapter 40) are closed, and every `PROVISIONAL pending NRS Ch. 40` note is cleared in the rows themselves.

## 1. Process notes

**Source quality.** Everything marked `VERIFIED` was written with the section open in the revisor's own text, whose section history lines show the 2025 amendments (e.g. §118A.200 "A … 2025, 1413, 1990"). That is the L.8 source-line standard met directly, not through a host. Nothing here rests on a landlord-industry secondary source. **Section-open vs recall (instruction 22):** every row was drafted with the section open; the recall subset is empty.

**2025 session (instruction 17).** Rather than chase bill numbers, enactment is evidenced by **codification**: the revisor's history lines cite *Statutes of Nevada 2025* pages for §§118A.200, .235, .303, .306, .327, .332, .335 and .405. An introduced or failed bill cannot appear there. **What codification does *not* give is the operative date.** The session-law effective-date sections were not read, so `effective_from` is left **blank** on every 2025-derived row and says so. This matters: if any of these took effect after 2025-10-01 (the Nevada default), a lease signed before the operative date is governed by the old text.

**Retrieval limits, recorded because they cost rounds.** The revisor serves each chapter as one page, and the fetch truncates at roughly the same size every time — it cut 118A at §118A.490 and cut Chapter 202 long before §202.470. **Fetching Chapter 40 whole will fail the same way.** That is why §9 asks for text rather than attempting a third retrieval (instructions 10, 25).

**One search that should not have been run.** I fetched all of Chapter 202 to reach one section and got only the first third. The Justia host copy of §202.470 had already been retrieved; the revisor fetch added nothing but confirmed the truncation pattern.

## 2. Step 1 — tag first

### 2.1 The 58 shared rows (read in full)

**Tagged `NV` — 43 of the 58:** `rent-payment`, `due-at-signing`, `application-of-payments`, `security-deposit-use`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `utilities-paid-by-landlord`, `appliances-included`, `landlords-access`, `default-by-tenant`, `surrender-end-of-term`, `early-termination`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-insurance-requirement`, `assigned-parking-space`, `keys`, `guest-policy`, `guest-policy-day-limit`, `common-area-use` (after edit, §3.1), `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `lead-based-paint`, `hoa-compliance`, plus the consolidated variants `storage-space-ks-oh-ca`, `parking-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca`, `services-utilities-provided-ks-oh`.

Each carries an `NV:` note with the controlling section. The load-bearing ones:
- **`rent-payment`** — correct only if `{{monthly_rent}}` is the **single all-in figure** §118A.200(6) now requires. Dependency recorded; the rule itself is `rent-single-figure-nv`.
- **`landlords-access`** — exact fit for §118A.330(3): 24 hours, business hours, emergency and consent exceptions. §118A.330(4) adds that the landlord has **no other** right of access — which is what disqualifies every existing pet-policy row (§3.3).
- **`default-by-tenant`** — promises a cure for every non-rent breach, more generous than §118A.430 (5 days if remediable, none otherwise). Lawful. Provisional on Chapter 40.
- **`early-termination`** — the 30%-of-remaining-rent fee is **lawful-but-exposed** under §118A.230, the same posture CA §5.41 recorded for KS/NE/OH. No per se liquidated-damages bar in 118A. Checked the rows' own notes first, per §5.41's lesson.

**Chosen over their bases (base not tagged `NV`):**

| Base not tagged | Used instead | Why |
|---|---|---|
| `storage-space`, `parking`, `tenants-property-insurance` | the `-ks-oh-ca` variants | Base exculpatory sentence is void under §118A.220(1)(d) as to liability for the landlord's own act or omission |
| `services-utilities-provided` | `-ks-oh` | Base force-majeure disclaimer is *probably* outside §118A.220(1)(d), not certainly; the ks-oh row is right everywhere. Its `REQUIRED` rule type fits NV: §118A.200(3)(d) makes services a mandatory lease subject |
| `holdover` | `holdover-ca` | No NV referent located for "maximum amount permitted by law" — the empty-referent defect `holdover-ca` exists to cure. `holdover-ca` tracks §118A.470 almost exactly |
| `default-by-tenant-ks-ne` | base `default-by-tenant` | Base carries the prevailing-party fee sentence §118A.220(1)(c) expressly permits |
| `surrender-end-of-term-mn-nd`, `-ks-ne` | base | Both cross-reference lease sections that don't exist in an NV lease |

**Held, not tagged: `parking-vehicle-rules`** — authorizes towing; Nevada's private-property towing law is outside 118A and unread. Same hold CA applied.

**Not tagged, NV override written instead (§3):** `late-fee`, `acceptable-payment-methods`, `returned-payments`, `tenant-maintenance`, `possession-delay`, `pet-policy`, `security-deposit-return` (blank-states REQUIRED base).

### 2.2 The 138 single-state rows without a foreign citation (read in full)

Most encode another state's statute even without citing it (7-day abandoned-property notices, ND's double-letting rule, CO's EV charging). **Two apply to NV as written and are tagged:**
- **`landlord-maintenance`** [CO] → CO;NV. Consistent with §118A.290, and its written-notice requirement matches NV, where every tenant repair remedy runs from written notice. **Metadata flag:** this CO row has blank `verification_status` and `effective_from`; not altered here.
- **`holdover-ca`** → CA;NV (above).

**"Almost applies" — noted for step 2 and resolved there:** `move-in-inventory-ks`, `possession-delay-ks`/`-ne`, `fire-casualty-termination-ks`, `landlord-identity-oh`, `flag-display-oh`, `pet-policy-ks`/`-sd`/`-ca`, `tenant-maintenance-obligations-ca`, `payment-methods-ca`, `lease-copy-receipt-mn`. Each was read against NV and rejected for a stated reason (§3).

### 2.3 The 429 single-state rows that cite another state's statute

Screened out mechanically: each body contains a citation or name of a non-NV state's code (C.R.S., K.S.A., N.D.C.C., SDCL, R.C., Civ. Code, etc.), so none can apply to Nevada *as written*. A regex check confirmed that **no** row in this set cites only federal law. They were then grouped by `topic_key` (328 topics) and scanned for NV counterparts; every topic NV has a statute on is picked up in step 2. **Honest scope note:** this set was screened by its citations, not read row by row. That is the correct test for "applies as written"; it is weaker for "almost applies", which is why step 2 went through `topic_key` rather than relying on this screen.

## 3. Step 2 — new rows, and what was consolidated instead

### 3.1 The one shared-row edit — `common-area-use` (uniform)

Appended: *"Nothing in this Section restricts any display that applicable law entitles Tenant to make, such as the display of the flag of the United States or of religious or cultural items, subject to any lawful limits on its size, placement, and manner."*

**Why:** the clause's fastener and sign bans would prohibit displays §118A.325 (flag) and §118A.327 (religious or cultural items on the door or doorframe, 2025) protect, and §118A.327(1) says the rental agreement "must not" prohibit them. **Uniform, not state-driven:** a self-limiting savings sentence adds no obligation where no such law exists, and is consistent with Ohio's R.C. 5321.131 (`flag-display-oh`). `last_checked` reset.

> **Propagation notice (instruction 9) — owed to the CO, WY, KS, NE, MN, ND, SD and OH logs:** `common-area-use` body text amended 2026-09-24 by the Nevada pass (savings sentence for lawful flag and religious/cultural displays). Classified **uniform** — inherit without override. Recorded in the row's `notes`; the eight state logs were not in this session's files and need the note appended at sync.

Programmatic check run: the only multi-state row whose `bodyText`, `rule_type` or `content_type` changed is `common-area-use`.

### 3.2 Consolidation achieved

Beyond the edit: `landlord-maintenance` extended CO→CO;NV; `holdover-ca` CA→CA;NV; four `-ks-oh(-ca)` rows extended. **Six Nevada twins not written**, and 39 base rows tagged rather than re-drafted.

### 3.3 New NV rows — 20 lease clauses, plus the rewritten dormant row

| Row | Rule | Supersedes | Why a new row rather than an existing one |
|---|---|---|---|
| `rent-single-figure-nv` | REQUIRED | — | §118A.200(6)–(8) (2025): rent must appear as **one figure including all mandatory fees**; the only carve-outs are two utility cases, each needing an asterisk ≥ half the figure's font size tied to a statement on the same page. §118A.405: $250 statutory damages per deceptive violation. No library row states this; NE's row records the *absence* of such a law |
| `late-fee-nv` | CONSTRAINED | `late-fee` | §118A.210(4): ≥3 calendar days, ≤5% of periodic rent, no compounding. Hard numbers the base doesn't carry |
| `security-deposit-cap-nv` | CONSTRAINED | — | §118A.242(1): 3 months' rent across all deposits **plus** surety bond **plus** prepaid last month. Does *not* supersede `security-deposit-use` (CA's cap row did; here that would strip the use clause) |
| `security-deposit-return-nv` | REQUIRED | `security-deposit-return` | §118A.242(4): 30 days after termination; personal delivery where rent is paid or mail. Closes the instruction-24 family |
| `move-in-inventory-nv` | REQUIRED | — | §118A.200(3)(k): signed inventory is **lease content**. `move-in-inventory-ks`'s 5-day post-start window would put it outside the executed lease |
| `owner-identity-disclosure-nv` | REQUIRED | — | §118A.260: in-state process agent + emergency contact within the county or 60 miles. No existing row carries either |
| `possession-delay-nv` | RECOMMENDED | `possession-delay` | Base conflicts: holds lease "in full force" and allows termination only after 30 days; §118A.370 gives termination on **5 days' notice**. KS/NE twins carry penalties NV lacks |
| `tenant-maintenance-nv` | RECOMMENDED | `tenant-maintenance` | Base's "maintain in the same condition as delivered" imposes a no-fault repair duty, colliding with §118A.290(4)'s ban on charging for landlord-duty repairs (2023, including home-warranty deductibles) |
| `pet-policy-nv` | RECOMMENDED | `pet-policy` | **Every** existing pet row fails: indemnity for landlord negligence, "without liability" exculpation, non-emergency entry to remove a pet (§118A.330(4)), and pet rent priced **outside** the rent figure (§118A.200(6)) |
| `payment-methods-nv` | REQUIRED | `acceptable-payment-methods` | §118A.303 (2025): one fee-free, no-bank-info method; portal fee ≤ operator's fee **and stated in the lease**. **Consolidation considered and rejected:** writing this into the base would impose a new obligation on eight states — a product change, not a clarification |
| `returned-payments-nv` | RECOMMENDED | `returned-payments` | §118A.200(3)(g) needs the charge stated; base's cashier's/certified/money-order restriction risks removing the §118A.303 fee-free method |
| `rent-increase-notice-nv` | CONSTRAINED | — | §118A.300: 60 days (30 for < monthly) |
| `casualty-termination-nv` | RECOMMENDED | — | §118A.400: 7-day notice (KS 5) and a landlord termination right KS lacks |
| `abandoned-property-nv` | CONDITIONAL | — | §§118A.450, .460: 30-day storage, 14-day notice, 5-day essential-effects retrieval |
| `dv-lease-termination-nv` | REQUIRED | — | §§118A.345, .347. Household member is **narrow** (blood or marriage, residing) — stated in the clause (L.5). Incorporated definitions unread; the clause defers to them rather than paraphrasing scope |
| `infirmity-death-termination-nv` | RECOMMENDED | — | §118A.340 — 60+ or disabled, relocation for care or death of spouse/cotenant |
| `flag-display-nv` | REQUIRED | — | §118A.325; §118A.200(3)(n) makes it mandatory lease content. OH row protects four flags plus a bracket-consultation duty |
| `religious-display-nv` | REQUIRED | — | §118A.327 + §118A.200(3)(o) (2025). **Statute's own ambiguity flagged:** "36 by 12 square inches" rendered as 36 × 12 inches |
| `nuisance-reporting-nv` | REQUIRED | — | §118A.200(3)(l)–(m): lease must **summarize NRS 202.470** and give reporting procedures. **NEEDS_REVIEW** (§4.4) |
| `sfr-occupancy-disclosure-nv` | CONDITIONAL | — | §118A.200(4): ≤4-unit property, no licensed-manager signature → disclosure **at the top of page one in a font ≥2× any other**. §§205.0813/.0817 unread; content is fixed by (4) itself |
| `foreclosure-disclosure-nv` | REQUIRED | — | Rewritten dormant row (§6) |

### 3.4 New NV rows — 14 landlord education

`edu-lease-content-requirements-nv`, `edu-application-fees-nv` (§118A.306, 2025: refund if unused; **no fee for a minor household member**), `edu-security-deposit-rules-nv`, **`edu-no-deposit-interest-nv`** (confirmed-absence row — see §4.2), `edu-habitability-duty-nv`, `edu-tenant-repair-remedies-nv`, `edu-self-help-eviction-ban-nv` (§§118A.480, .390 — up to $2,500), `edu-rules-regulations-nv`, `edu-sale-new-owner-notice-nv` (§118A.349, 2023), `edu-shutdown-worker-protection-nv`, `edu-key-control-policy-nv` (§118A.332, 2025), `edu-senior-housing-work-card-nv`, `edu-prohibited-lease-terms-nv`, `edu-dv-termination-documentation-nv`.

### 3.5 Integrity checks (CA's three, run)

- **Share of NV rows that are shared:** 45 of 80 (56%). Not zero.
- **Topical overlap scan — NV vs tagged, NV vs NV:** two `topic_key` groups hold two NV rows each (`landlord-maintenance` + `edu-habitability-duty-nv`; `dv-lease-termination-nv` + its documentation row) — both a clause and its landlord-facing companion, complementary. Keyword scan across deposit, late fee, entry, pet, abandonment, termination, insurance, repair, keys, display and possession found no duplicates. **One tension adjudicated:** `security-deposit-use` limits cleaning deductions to a "substantially less clean" unit; `security-deposit-return-nv` states the statutory ceiling ("reasonable costs of cleaning"). A ceiling and a narrower contractual promise — consistent.
- **Opposite-fact pairs:** none. No `choice_group` needed. `foreclosure-disclosure-nv` carries its either/or inside one row.
- **Groups:** all 12 canonical. **No state name in any title or NV body. `topic_key` filled on every new row.** Four new topic keys: `sfr-occupancy-disclosure`, `nuisance-reporting-disclosure`, `religious-cultural-display`, `key-control-policy` (plus `application-fees`, `shutdown-rent-protection`, `senior-housing-work-card`, `lease-content-requirements`, `security-deposit-rules`).

## 4. Findings worth Taylor's attention

### 4.1 Nevada's 2025 session rewrote lease *form*, not just substance

Seven of 118A's sections were added or amended in 2025, and three change what a lease must look like on the page: the single all-in rent figure with a half-size asterisk on the same page (§118A.200(6)–(8), AB 121); the portal-fee line (§118A.303(2)(b), AB 121); and a new mandatory information item on religious and cultural displays (§118A.200(3)(o), SB 201). **Correction (§11.2):** I originally listed the double-font top-of-page disclosure (§118A.200(4)) and the flag item (3)(n) as 2025 changes. Both enrolled 2025 bills show them as existing text; (4) dates from 2017. **Schema gap, sharper than California's:** CA had absolute type-size floors; NV has a **relative** one (2× the largest other font) and a **same-page placement** rule. Neither is expressible in the current schema.

### 4.2 Confirmed absences — honest boundaries

Recorded as a CSV row: **deposit interest** — full primary read of §§118A.240–.250, where every NV deposit rule lives. Boundary stated in the row (L.7).

**Not converted to rows** (not located within 118A; the rest of NRS not searched — the proof-of-absence standard is not met): radon, bed bugs, mold, deposit installments, double letting, EV charging, immigration-status inquiry, fraudulent-misrepresentation termination, long-term-lease exclusion. These are exactly CA's "not located" category.

### 4.3 Where Nevada's exculpation rule is narrower than it looks — and why I didn't rely on it

§118A.220(1)(d) voids exculpation only for liability "based upon an act or omission of the landlord or any agent or employee". A force-majeure disclaimer may survive it. I nonetheless used the library's exculpation-free variants throughout: they are correct in every state, and "probably survives" is not the standard.

### 4.4 NRS 202.470 — a currency flag (withdrawn, §11.2)

The lease must summarize §202.470. Its text is available only from a host copy (source line 1911, no amendments). **But the revisor's current Chapter 202 index titles §202.480 "Abatement of nuisance; civil penalty"**, where older copies say "Abatement of nuisance" — a 2025 change in the same four-section subchapter. §202.470's currency therefore can't be assumed. Row shipped `NEEDS_REVIEW`. **Withdrawn in §11.2 — the inference was wrong.**

### 4.5 Two drafting ambiguities in the statute itself

§118A.327's "36 by 12 square inches" (an area stated as dimensions); and whether a money order's issuer fee is a "fee or charge for using the method" under §118A.303(1)(a). Both clauses are drafted to be lawful on either reading. The second is a **research-mode trigger** (ambiguous statute language) if you want it resolved rather than drafted around.

## 5. Instruction 24 — the two invisible `REQUIRED` families (both closed; see §11.3)

- **`security-deposit-return`** — **closed** by `security-deposit-return-nv`.
- **`assistance-animal-accommodation`** — **OPEN, and it blocks lease generation.** NV has no row. The KS base row rests on federal guidance whose basis the library has already recorded as unsettled (HUD's 2025 withdrawal). Nevada appears to have its own basis: the revisor's Chapter 118 index lists **NRS 118.105**, *"Landlord may not refuse to rent dwelling because person with disability will reside with animal that provides assistance, support or service"* — "support" in a state title is itself a signal. **Title only; nothing drafted from it.** `pet-policy-nv` carries a generic carve-out in the meantime.

## 6. The dormant row — `foreclosure-disclosure-nv`

**NRS 118A.275** (added 2009, unamended): a landlord must disclose in writing **to a prospective tenant** if the property is the subject of any foreclosure proceedings; a **willful** violation is a **deceptive trade practice** under NRS 598.0903–598.0999. **The old note was right:** that is not a stated misdemeanor.

**Four defects in the old row**, same pattern as CA's dormant set: it narrowed "any foreclosure proceedings" to "a pending" one; it inserted "none known", a knowledge qualifier the duty lacks (willfulness only gates the penalty); it framed the disclosure as happening at signing rather than to a prospective tenant; and it named the state in the body. **Rewritten, `VERIFIED`, activated, `REQUIRED`.**

**Open interpretive point, not decided by the clause:** whether a recorded notice of default in a nonjudicial trustee's sale (NRS ch. 107, unread) is a "foreclosure proceeding".

## 7. Municipal layer — flagged, not resolved

- **Clark County / Las Vegas and Washoe County / Reno** — any rental registration, rent, or code ordinances: not examined.
- **`nuisance-reporting-nv`'s agency blanks** are inherently local.
- **§118A.332's key-control duty** is keyed to **county population** (100,000), which in practice splits Clark and Washoe from the rest of the state. That is state law with a geographic trigger, not a municipal ordinance — the same category CA's checklist created ("state law geographically confined").

## 8. Named-topic canvass — where it stands

Core tables: **44 of 69 answered** from primary text (9 as "not located within 118A" with the boundary stated — not confirmed absences), **8 answered in part**, **17 Not Yet Checked**. The 25 open or partial rows cluster in four places:
- **NRS Chapter 40**: pay-or-quit, no-cause termination / 12-month for-cause, periodic-termination notice, crime/drug fast-track, eviction-record sealing, late-rent waiver beyond 118A, holdover multipliers, noncompliance procedure beyond §118A.430.
- **NRS Chapter 118**: fair-housing classes, voucher/source of income, all three assistance-animal rows, reasonable-accommodation duty, immigration-status inquiry.
- **Tail of 118A (§§118A.490–.530)**: retaliation (official text), right to call police (§118A.515), landlord lien (§118A.520).
- **Adjacent chapters, location unknown**: smoke detectors, CO alarms, dishonored-check fee cap, service-animal misrepresentation penalty, immigrant-tenant protections, radon/bed bug/mold outside 118A.

Candidate-topic tables (70 rows added by CO/WY/KS/NE/MN/ND/OH/CA): **not started**, marked as such in the checklist. New NV-surfaced topics added to the checklist: 9 (see its NV section).

## 9. What I need to finish — one consolidated request (fulfilled; see §11)

Per instruction 25, ranges rather than sections. **One paste of each is enough.**

1. **NRS 118A.490 through 118A.530** — the tail of 118A that the revisor page truncated (retaliation, emergency assistance, landlord lien, rent-reporting program, saving clause).
2. **NRS 40.0025 through 40.0045, and NRS 40.215 through 40.425** — the definitions and the whole summary-eviction / unlawful-detainer block. This is the biggest dependency; nine canvass rows and three provisional tags wait on it.
3. **NRS Chapter 118 in full** (118.010 onward) — fair housing, assistance animals (§118.105), and whatever sits between.
4. **NRS 202.450 through 202.480** — to clear `nuisance-reporting-nv`.
5. **The effective-date sections** of the 2025 session laws codified at *Statutes of Nevada 2025* pp. 970, 1412–1413, 1989–1990 and 2079 — or the bill numbers, if you have them to hand. This fills `effective_from` on every 2025 row.
6. **Optional:** NRS 487.038–487.039 (towing from private property), to release `parking-vehicle-rules`.

**Research mode — telling you before, not after.** Three items are genuine research-mode triggers and I'll need it switched on when we reach them:
- **Cross-chapter gap discovery:** where Nevada puts smoke-detector, carbon-monoxide, dishonored-check-fee and service-animal-misrepresentation law (I don't know which chapters to ask you for).
- **Proof-of-absence:** converting the §4.2 "not located" list into confirmed absences outside 118A.
- **Ambiguous statute language:** §118A.303(1)(a) and issuer fees, if you want it resolved rather than drafted around.

## 10. Deliverables

| File | State |
|---|---|
| `lease-clauses.csv` | 721 rows after §11. 97 active NV rows (47 shared), 0 `NEEDS_REVIEW` among NV rows. Integrity checks passed |
| `lease-clause-decision-log-NV.md` | This document. No separate extend manifest — the tag-first screen is §2 |
| `lease-clause-decision-log-named-topic-checklist.md` | `NV` column across all ten shared tables (69 + 7 layer rows); NV new-topic section; candidate tables marked not started |

---

## 11. Second text batch — 2026-09-24

**Source.** Taylor supplied NRS 118A.490–.530, 40.0025–.0045, 40.215–.425, ch. 118 in full (118.010–.205), 202.450–.480 and 487.038–.039 from the Justia 2025 reproduction, with source lines. That is a host copy, one notch below the revisor. It is the same basis CA accepted. Each row built from it says so. Separately, I read the **enrolled** AB 121 and SB 201 on the Legislature's own archive for their effective dates.

**What changed in the CSV:** 15 new NV rows (1 lease clause, 14 education), 2 existing rows newly tagged NV, 1 more uniform shared-row edit, 7 of batch 1's NV rows corrected or extended, and every provisional note cleared. **721 rows; 97 active NV rows, 47 shared (48%), 69 lease clauses. `NEEDS_REVIEW`: 0** among NV rows. The one non-`VERIFIED` NV row is `landlord-maintenance`, whose blank status is CO's pre-existing metadata (§2.2). The other nine states' active counts are unchanged. No duplicates, no dangling `supersedes`, no NV display collisions.

### 11.1 Effective dates (your item 5)

What I was asking for was the date each 2025 change took effect. I found it myself from the enrolled bills.
- **AB 121** added the single-figure rent rule, the payment-method rules, the application-fee rules and the prospective-tenant copy. The enrolled text has **no effective-date section**, so Nevada's October 1 default applies. `effective_from` is now **2025-10-01** on `rent-single-figure-nv`, `payment-methods-nv` and `edu-application-fees-nv`. The basis is stated in each row: the default statute (NRS 218D.330) wasn't itself read, and the chapter note is corroborating secondary.
- **SB 201** covers religious and cultural displays. Its Sec. 3 says **"effective on July 1, 2025"** — primary. Its **uncodified Sec. 2** matters to the library: any contrary lease or policy provision in effect on July 1, 2025 is **void**, and landlords must remove it on or before renewal. That independently confirms the `common-area-use` edit was needed.
- **Still blank:** §118A.332 (key control; secondary sources attribute it to SB 114, not confirmed) and the §118A.335 amendment.

### 11.2 Two of my own errors, corrected

**The NRS 202.470 currency flag was wrong.** In batch 1 I inferred a 2025 change from §202.480's longer revisor title. Its source line shows its only amendment was **2009**. The "older" title I compared it against was a host site's abbreviated index, not an official prior title. §202.470 itself is unchanged since 1911. `nuisance-reporting-nv` is now `VERIFIED`, and its body points to the §202.450 definition rather than paraphrasing it. **Lesson:** L.8 says compare source lines, and I compared titles instead — two sources that weren't the same kind of thing.

**`edu-no-deposit-interest-nv` overstated its boundary in its body text.** The notes said "within 118A"; the body said "state landlord-tenant law". **NRS 118.101(4)** is a deposit rule outside 118A. It **does** require an interest-bearing account, with interest paid to the tenant, for an extra deposit securing restoration after a disability modification. The body is rewritten with the exception. This is L.7 exactly: the boundary was right in the notes and wrong in the text a landlord reads.

**Also corrected:** §118A.200(4), the double-font top-of-page disclosure, is **not** a 2025 change. Both enrolled bills reproduce it as existing text; it dates from 2017. §4.1 and the row notes are amended.

### 11.3 Instruction 24 — assistance animals, closed

**NRS 118.105** bars refusing to rent a 118A dwelling to a person with a disability solely because an animal that **"assists, supports or provides service"** will live there. The landlord may require proof, and a health-care provider's statement suffices.

That gives Nevada an **independent state basis that expressly reaches support animals**. The HUD-guidance uncertainty recorded on the KS base row therefore doesn't reach Nevada's core rule. **`assistance-animal-accommodation` tagged NV.** Its "readily apparent" documentation limit is more protective than §118.105(2), and lawful.

**Honest limit:** chapter 118 contains **no express pet-fee ban**. The clause's no-fee promise rests on the reasonable-accommodation duty (§118.101(1)(b)) and federal law. The Commission's regulations (NAC ch. 118) weren't read — flagged per instruction 16. `edu-assistance-animal-nv` says this plainly rather than overstating it.

### 11.4 Chapter 40 — what it settled

- **No just-cause rule.** NRS 40.251 allows no-cause termination of a periodic tenancy on 7 days' notice (week to week) or 30 days' (other periodic). A tenant 60 or older, or with a disability, may request 30 more days. **The notice itself must tell tenants about that and about the shutdown-worker right** (§40.251(5)) — a content rule for notices, not leases.
- **Pay-or-quit:** 7 judicial days (§§40.2512, 40.253), with prescribed notice content. **§40.253(11): after serving it, the landlord may not refuse rent because fees, costs or the deposit are unpaid.** That is why `application-of-payments`' cure-preserving sentence is load-bearing in Nevada; its note now says not to remove it.
- **No-cure grounds (§40.2514):** drugs (other than simple possession), nuisance, unlawful business, waste and unauthorized sublet, on a 3-day notice. `default-by-tenant` promises a cure for everything — more than Nevada requires. Lawful, but a product choice you should know about.
- **§40.252:** a lease may not shorten statutory notice periods. Added to the prohibited-terms row.
- **§40.360(2): treble damages** in an unlawful-detainer judgment. As in CA, it is a court measure, not a per-day lease figure; `holdover-ca` stands.
- **Eviction sealing (§40.2545)** and **tenants after a foreclosure sale (§40.255)** — education rows added.

### 11.5 Three statute ambiguities — research-mode triggers, drafted around meanwhile

1. **Who serves an ordinary 118A notice?** §118A.190(2) says notices are served "in the manner provided by NRS 40.280", and §40.280(1) (2019) requires a sheriff, constable, licensed process server or attorney's agent. Whether "manner" carries the *who* as well as the *how* decides whether a rent-increase notice can be handed over by the landlord. `edu-notice-service-nv` gives the conservative course without asserting the answer.
2. **Lockout after an uncontested pay-or-quit.** §40.253(5)(b) permits a peaceable lockout "except when … prohibited pursuant to NRS 118A.480". §118A.480 requires a proceeding "in which the issue of right of possession is determined". `edu-self-help-eviction-ban-nv` takes the conservative reading: no lockout without a court order.
3. **§118A.303(1)(a) and money-order fees** — unchanged from §4.5.

### 11.6 Other new findings

- **NRS 118.165 — a duty nobody would look for.** Every landlord must deliver, **in July each year and whenever rent changes**, a statement splitting each rent payment into the property-tax portion and the remainder. A lease that "provides for calculation and notice" is exempt. `property-tax-rent-disclosure-nv` (REQUIRED) performs the duty and invokes the exemption at once. It is outside 118A, so batch 1 could not have seen it. Flagged in the checklist as worth checking in every state.
- **Towing — uniform edit to `parking-vehicle-rules`.** Inserted "in accordance with applicable law", then tagged NV. NRS 487.038 requires oral notice to police and, except on single-family property, a posted sign. In a single-family rental the *tenant* may be the person in lawful possession of the driveway. **Propagation notice owed to CO, WY, KS, NE, MN, ND, SD and OH** (uniform — inherit). CA stays held on its own Vehicle Code question; I did not tag CA.
- **Fair housing:** Nevada adds sexual orientation, gender identity or expression, and ancestry. There is **no source-of-income class** (confirmed absent within ch. 118).
- **`emergency-assistance-right-ca` deliberately not shared:** it drops Nevada's "reasonable belief" and "solely" limits, so tagging it would overstate Nevada law.
- **An oddity recorded, not relied on:** NRS 118.120 says an action may be brought "not less than 1 year after" a violation. That reads like a drafting error for "not more than".

### 11.7 What is left

- **Core canvass: 60 of 69 answered, 3 in part, 6 Not Yet Checked.** The six are the dishonored-check fee cap (two rows), smoke detectors, CO alarms, service-animal misrepresentation and immigrant-tenant protections. Each needs its chapter located first — **cross-chapter gap discovery, a research-mode trigger.** The three partials are criminal-history screening, NAC ch. 118, and disclosures outside the chapters read.
- **Candidate-topic tables** (~70 rows from earlier states): still not started. Chapters 40 and 118 answer some; I haven't run them.
- **Not needed:** 118B (mobile-home parks — excluded from 118A by §118A.180(2)(a), a deprioritized layer) and 118C (commercial).
- **Propagation notes** for `common-area-use` and `parking-vehicle-rules` still need appending to the eight other state logs at sync.

**When you're ready, I'd like research mode on for one pass** covering three things: locating the six chapters above; confirming the §4.2 "not located" list as absences outside the chapters read; and the three ambiguities in §11.5.

---

## 12. Research-mode pass — 2026-09-24

Run on Taylor's go-ahead, covering the three gated triggers: cross-chapter gap discovery, proof-of-absence, and ambiguous statute language. The full research report is a separate artifact in the conversation. This section records only what changed in the library and why.

**CSV:** 725 rows. **101 active NV rows (47 shared), 70 lease clauses.** The other nine states are unchanged. No duplicates, dangling `supersedes` or NV collisions. **Non-`VERIFIED` NV rows: 2** — `landlord-maintenance` (CO's blank metadata) and `edu-returned-check-remedies-nv` (below).

### 12.1 Gap discovery — four findings, four rows

- **Smoke detectors, NRS 477.140(1)** — the text was read on the revisor's current chapter 477 page.
  - The duty covers **apartment buildings with three or more units only**. It does not reach single-family homes, duplexes or a condo rented on its own.
  - No state rule covers testing or batteries.
  - A 2020 Fire Marshal regulation (R132-18) removed the old NAC misdemeanor for disabling a detector, so the lease is now the only source of a no-disable duty.
  - In Clark County, and wherever the local authority governs, local fire codes control (flagged).
  - New rows: `smoke-detector-duty-nv` (lease clause) and `edu-smoke-detector-scope-nv`.
- **Returned checks, NRS 41.620 and NRS 597.960.**
  - §41.620 is a civil remedy: a certified-mail demand, 30 days, then treble damages with a $100 floor and $500 ceiling.
  - §597.960 caps a *seller's* fee at $25 for "goods or services"; whether it reaches rent is unsettled.
  - `returned-payments-nv` now steers the landlord to $25 or less.
  - `edu-returned-check-remedies-nv` ships **`NEEDS_REVIEW`**. Both sections came from host copies current to 2025-01-01, before the 2025 session. One revisor check clears it.
- **Service-animal misrepresentation, NRS 426.805** — a misdemeanor with a fine of up to $500. It covers **service animals only, not ESAs**, and gives the landlord no civil remedy. New row: `edu-service-animal-misrepresentation-nv`.
- **Criminal-history screening — no state restriction.**
  - SB 254 (2021) was vetoed; the veto letter is primary.
  - SB 143 (2023) died.
  - The 2025 session wasn't fully checked, so **no confirmed-absence row was written**.

### 12.2 Assistance animals — the honest answer is now on the rows

- Nevada has **no statute or regulation expressly banning a pet fee for an assistance or support animal**. The Commission's regulations (NAC 233) are procedural, and there is no NAC chapter 118.
- **Federal update:** HUD's assistance-animal guidance (FHEO-2020-01, 2013-01) was withdrawn effective 2025-09-17. Federal Register notice 2026-06624 (published 2026-04-06) says not to rely on it.
- `edu-assistance-animal-nv`'s body said fair-housing law "require[s]" the fee waiver. It is **softened to say what is true**: the waiver is generally treated as an accommodation, and the lease's promise is partly a product choice.
- The KS base row stays tagged NV. Its core rule has a state basis (§118.105), and its no-fee promise is lawful.

### 12.3 Proof-of-absence — recorded as "Not located", no rows written

Radon, bed bugs, mold, deposit installments, double-letting, EV charging, fraud-based termination, long-term-lease exclusion, CO alarms, immigration status and meth disclosure all came back **Not located**. None came back **Confirmed absent**.

The research pass didn't finish dedicated per-term searches of NRS 278, 439, 461, 461A, 489 or the subject index, and says so. Per the proof-of-absence standard, **no confirmed-absence CSV rows were written**. The boundary is recorded in the checklist's NV research section.

Meth has one nuance worth keeping. NRS 40.770 (host text) deliberately leaves methamphetamine manufacture *out* of the list of facts it declares immaterial. That points toward disclosure without imposing a duty.

### 12.4 The three ambiguities — none resolved, all drafted safe

1. **Who serves an ordinary 118A notice.** SB 151 (2019) amended §40.280 but **not §118A.190**, and its rule on who serves is expressly limited to eviction notices (§§40.251–40.260). That makes the narrower reading more plausible, but it is still unresolved. `edu-notice-service-nv` keeps the conservative course.
2. **Lockout after an uncontested pay-or-quit.** No appellate holding. Practice evidence (Nevada Legal Services, the Las Vegas Township Constable) is consistently court order plus constable. Two guardrails:
   - **Do not cite *Hernandez v. Bennett-Haron* (2012)** — it is a coroner's-inquest case.
   - *Anvui v. G.L. Dragon* (2007) sets summary-eviction standards, not this point.
3. **Money orders under §118A.303(1)(a).** Secondary sources conflict: landlord-side counsel versus legal-aid material. One practical signal: courts have reportedly added a §118A.303 noncompliance checkbox to the tenant eviction affidavit. **Product default recorded:** always offer a fee-free personal-check method.

### 12.5 Where Nevada stands

**All 69 core canvass rows have an NV answer.** Some answers are "Not located" with the search boundary stated rather than confirmed absences. **Still open:**
- Revisor check of NRS 41.620 and 597.960 (clears the one `NEEDS_REVIEW`).
- The candidate-topic tables from earlier states (~70 rows), not yet run.
- Converting the "Not located" list to confirmed absences, if wanted — this needs the per-term searches the research pass didn't finish.
- Propagation notes for `common-area-use` and `parking-vehicle-rules` in the eight other state logs.
- Municipal layer (Clark County / Las Vegas, Washoe County / Reno) — out of scope by decision.

---

## 13. Revisor check and candidate-topic tables — 2026-09-24

**NRS 41.620 and 597.960 (revisor text supplied by Taylor).** The source lines end in 2005 and 1995, so the host copies were current. `edu-returned-check-remedies-nv` is now **`VERIFIED`**. Two precision fixes came from reading the official text:
- A §41.620 demand must be paid **in cash** within 30 days.
- §597.960 is also triggered by a **stopped** payment.

Both are now in the row body. **The only non-`VERIFIED` NV row is `landlord-maintenance`**, and that is CO's blank metadata.

**Citation-existence screen (candidate row 134.1), run on NV's own rows.** There are 78 distinct section citations. All of them were read, except five that are cited expressly as *not read*: 205.0813, 33.018, 598.0903, 218D.330 and ch. 107. **One slip:** NRS 426.097 was cited as the service-animal definition without saying I hadn't read it; the definition came from the research report. It is now labelled. No fabricated citations.

**Candidate-topic tables — done.** The checklist now has a "Nevada against the candidate-topic tables" section covering 86 refs:
- 67 answered from text read;
- 15 not located;
- 3 not checked (escheat, dormancy charges, fair-housing respondent election — each needs a chapter not yet read);
- 1 not a state-law question.

It also answers California's own new-topic tables, which CA's section had not covered.

**Two findings worth carrying to other states:**
- **294.7 — the animal rule and the fair-housing exemptions don't align.** NRS 118.105 reaches any dwelling "subject to the provisions of chapter 118A", not the ch. 118 "dwelling" with its small-owner exemptions. So a landlord exempt from §118.100 is still bound by the assistance-animal rule. The rows already agree with this reading; the question is new for every other state.
- **694.1 — an opt-in landlord right.** §118A.360(2) lets the lease name who must do repair-and-deduct work, and a silent lease forfeits that. Recorded in `edu-tenant-repair-remedies-nv`; not built as a clause. That is a product decision.

**Nevada status:** every core row and every candidate topic has an answer. What remains open:
- the "not located" topics, if they are to become confirmed absences (per-term searches);
- escheat and respondent election (NRS 120A and 233);
- propagation notes for the two uniform edits (`common-area-use`, `parking-vehicle-rules`), which are owed to the eight other state logs;
- the municipal layer, out of scope by decision.

---

## 14. Gap searches — 2026-09-24 (research mode on)

These were targeted searches on the three "not checked" candidate rows and two of the "not located" topics.

- **Escheat.** NRS 120A.500(1)(q) is a catch-all: property not listed elsewhere is presumed abandoned 3 years after the owner's right to demand it arises. An unclaimed deposit refund falls under it, which makes the landlord a holder. §120A.570(1) requires delivery to the State Administrator.
  - **New row:** `edu-deposit-escheat-nv` (`VERIFIED`).
  - It states no report deadline and no dormancy limit, because §§120A.560 and 120A.540 were not read.
  - **Library flag:** ND files this topic as `unclaimed-deposit-holder-duties` and CA as `deposit-escheat`. One topic has two keys. NV follows CA. The ND key should be merged at your convenience.
- **Fair-housing respondent election.** There isn't one in force. NRS 233.160 exists in two versions. The housing-specific version, together with §§233.165–.170, takes effect only when the Governor declares Nevada substantially equivalent to federal law, which hasn't happened. The version currently in force gives one year to file a housing complaint and 10 days for the respondent to answer. The Commission says a pending complaint does not pause the court deadline.
  - This is a new candidate topic for every state: **statute versions contingent on a federal certification.**
- **CO alarms.** Still "Not located", but now better corroborated. Two unrelated 2026 sources describe CO alarms as governed by local code (IRC R315 as each jurisdiction adopts it). A tenant-rights site's statewide claim cites "NRS 477.310", which I couldn't confirm exists. That is exactly what the citation-existence screen is for, so nothing rests on it.
- **Immigration status.** Still "Not located". Neither the 2025 chapter 118A index nor the Clark County Bar's summary of the four main 2025 housing bills (AB 121, AB 241, AB 540, SB 114) contains an immigration-status provision.

**CSV:** 726 rows; 102 active NV rows. **Candidate tables:** 70 answered, 15 not located, 0 not checked, 1 not a state-law question.

**What remains is genuinely optional:**
1. Converting the 15 "not located" topics into confirmed absences. That needs per-term searches of the full NRS index, with diminishing returns.
2. Reading NRS 120A.540 and 120A.560, to add a dormancy limit and report deadline to the escheat row.
3. Propagation notes in the eight other state logs.
4. Merging the ND/CA escheat topic keys.

---

## 15. Escheat completed — 2026-09-24

Taylor supplied the revisor text of NRS 120A.540–120A.560. `edu-deposit-escheat-nv` now states the full holder duty:
- The report is due **before November 1**, covering the 12 months to July 1.
- A **written notice to the former tenant** must go out 60–120 days before filing, if there is a usable address and the amount is $50 or more. It goes by email as well if the tenant consented to email delivery.
- An affidavit of compliance is filed with the report.
- Filing and payment are **electronic**, through the Administrator's portal.
- A **dormancy charge** is allowed only under a written contract plus a regularly imposed charge, and **never more than $5 a month**.
- §120A.550: the landlord's own record of issuing the refund check is prima facie evidence of the debt.

The one piece still unread is the penalty section, NRS 120A.730, so the row states no penalty amount.

**Candidate row 427.3 is confirmed as a real drafting hook.** A lease clause could supply §120A.540's written-contract limb for a dormancy charge. It is noted, not built: a landlord that doesn't *regularly* impose the charge can't use it anyway, and building it is a product decision.

**Nevada is now closed at state level.** Every open item left is optional or belongs to another state's file:
- the 15 "not located" topics (per-term searches to confirm absence);
- propagation notes for `common-area-use` and `parking-vehicle-rules` in the eight other state logs;
- merging ND's `unclaimed-deposit-holder-duties` topic key into CA's `deposit-escheat`;
- the municipal layer, out of scope.

---

## 16. Propagation notes — paste-ready for the other state logs (2026-09-24)

Instruction 9 requires a note in every tagged state's log when another state's pass edits a shared row. Those logs were not in this session, so the notes are drafted below for pasting at sync. An audit of every pre-existing row this pass changed (any field except `notes`, `last_checked` and the added `NV` tag) found **exactly four**:
- `common-area-use` — body edit;
- `parking-vehicle-rules` — body edit;
- `foreclosure-disclosure-nv` — Nevada's own dormant row;
- `edu-unclaimed-deposit-holder-duties-nd` — topic key only.

**The two body edits (identical note for CO, WY, KS, NE, MN, ND, SD, OH):**

> **Propagated from the Nevada pass, 2026-09-24.** (1) `common-area-use`: appended a savings sentence — nothing in the section restricts a display applicable law entitles the tenant to make, such as the U.S. flag or religious or cultural items, subject to lawful limits on size, placement and manner. Driven by NRS 118A.325/.327 (NV); **uniform**, self-limiting, inherit without override. (2) `parking-vehicle-rules`: inserted "in accordance with applicable law" before the landlord's towing authority. Driven by NRS 487.038 (NV); **uniform**, self-limiting, inherit without override. `last_checked` reset to 2026-09-24 on both.

**ND only, additionally:**

> **Propagated from the Nevada pass, 2026-09-24.** `edu-unclaimed-deposit-holder-duties-nd`: `topic_key` changed from `unclaimed-deposit-holder-duties` to `deposit-escheat`, merging it with the CA and NV rows on the same topic. Metadata only — body, rule type, states and status untouched.

**CA:** no CA row was edited. CA gains an entry only in the roster below.

### Rows each state now shares with Nevada

This is for the next pass that edits any of these rows: the change now reaches Nevada, and Nevada's notes on the row say which NRS section it rests on.

| State | Its rows now also tagged NV |
|---|---|
| CO (40) | `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `common-area-use`, `default-by-tenant`, `due-at-signing`, `early-termination`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `inspection-rights`, `joint-liability`, `keys`, `landlord-maintenance`, `landscaping-irrigation`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `rent-payment`, `residential-use-only`, `security-deposit-use`, `severability`, `smoking-policy`, `snow-removal`, `surrender-end-of-term`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity` |
| WY (40) | `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `common-area-use`, `default-by-tenant`, `due-at-signing`, `early-termination`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `inspection-rights`, `joint-liability`, `keys`, `landlords-access`, `landscaping-irrigation`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `rent-payment`, `residential-use-only`, `security-deposit-use`, `severability`, `smoking-policy`, `snow-removal`, `surrender-end-of-term`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity` |
| KS (41) | `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `assistance-animal-accommodation`, `common-area-use`, `due-at-signing`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `inspection-rights`, `joint-liability`, `keys`, `landlords-access`, `landscaping-irrigation`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking-ks-oh-ca`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `rent-payment`, `residential-use-only`, `services-utilities-provided-ks-oh`, `severability`, `smoking-policy`, `snow-removal`, `storage-space-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity` |
| NE (37) | `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `common-area-use`, `due-at-signing`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `inspection-rights`, `joint-liability`, `keys`, `landlords-access`, `landscaping-irrigation`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `rent-payment`, `residential-use-only`, `security-deposit-use`, `severability`, `smoking-policy`, `snow-removal`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity` |
| MN (38) | `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `common-area-use`, `default-by-tenant`, `due-at-signing`, `early-termination`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `inspection-rights`, `joint-liability`, `keys`, `landscaping-irrigation`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `rent-payment`, `residential-use-only`, `security-deposit-use`, `severability`, `smoking-policy`, `snow-removal`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity` |
| ND (38) | `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `common-area-use`, `default-by-tenant`, `due-at-signing`, `early-termination`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `inspection-rights`, `joint-liability`, `keys`, `landscaping-irrigation`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `rent-payment`, `residential-use-only`, `security-deposit-use`, `severability`, `smoking-policy`, `snow-removal`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity` |
| SD (38) | `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `common-area-use`, `due-at-signing`, `early-termination`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `inspection-rights`, `joint-liability`, `keys`, `landscaping-irrigation`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `rent-payment`, `residential-use-only`, `security-deposit-use`, `severability`, `smoking-policy`, `snow-removal`, `surrender-end-of-term`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity` |
| OH (43) | `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `common-area-use`, `due-at-signing`, `early-termination`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `inspection-rights`, `joint-liability`, `keys`, `landlords-access`, `landscaping-irrigation`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking-ks-oh-ca`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `rent-payment`, `residential-use-only`, `security-deposit-use`, `services-utilities-provided-ks-oh`, `severability`, `smoking-policy`, `snow-removal`, `storage-space-ks-oh-ca`, `surrender-end-of-term`, `tenants-property-insurance-ks-oh-ca`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity` |
| CA (34) | `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `default-by-tenant`, `electronic-signatures`, `entire-agreement`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `holdover-ca`, `joint-liability`, `keys`, `landscaping-irrigation`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `notices`, `parking-ks-oh-ca`, `permitted-occupants`, `pet-insurance-requirement`, `residential-use-only`, `severability`, `smoking-policy`, `snow-removal`, `storage-space-ks-oh-ca`, `surrender-end-of-term`, `tenants-property-insurance-ks-oh-ca`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity` |

### Also in this step

- **`edu-key-control-policy-nv`:** `effective_from` set to **2025-10-01** (SB 114, signed 2025-08-04). The basis is secondary: three independent sources, and I did not read the enrolled bill. Legislative history shows the unit threshold fell from more than 200 to more than 100 to the enacted 50/30-by-county test, matching the codified text. One industry summary says "50 or more"; the statute says "more than 50".
- **The 15 "not located" topics:** not pursued further. A web search cannot prove a negative across the whole NRS. Confirming these would mean walking the official NRS subject index term by term. The effort is disproportionate unless a specific topic matters to the product, so it is left as a per-topic option.

**Nevada: closed.** Nothing in this file is waiting on Taylor.


## Propagated from the Texas pass, 2026-09-25

Two shared rows tagged to this state were edited by the Texas pass (§5a.1 / instruction 9):

1. `no-alterations` — appended: "This Section does not limit any repair, installation, or rekeying that applicable law entitles Tenant to perform." Driven by Tex. Prop. Code §§92.0561, 92.164(a)(1), 92.165(1) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
2. `assigned-parking-space` — reassignment is now "subject to any limits applicable law places on changing parking rules or policies during the Term." Driven by Tex. Prop. Code §92.0131(e) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.

`last_checked` on both rows reset to 2026-09-25. No other field changed. Detail: lease-clause-decision-log-TX.md §§3.1, 16. (Appended at sync, 2026-09-26.)


## Propagated at the Florida sync, 2026-09-26

A shared row tagged to this state was edited (§5a.1 / instruction 9), by Taylor's decision at the Florida sync, not by a state pass.

1. `application-of-payments`: payments are now applied **rent first**, oldest unpaid period first, and only then to fees and other charges ("unless Tenant directs otherwise in writing for a particular payment or applicable law requires otherwise"). It was fees first. The cure-preserving sentence is kept. NJ and FL are folded back into this row and `application-of-payments-nj` is retired. Reason: fees first turns an unpaid fee into an apparent rent shortfall. No tagged state's research found a statute requiring fees first, and rent first is lawful on any reading. Classification: UNIFORM. It removes a landlord-favorable ordering and adds no obligation. Inherit without override.

`last_checked` reset to 2026-09-26. No other field changed. This is not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-FL.md §16. (Appended at sync, 2026-09-26.)

2. `default-by-tenant` (second propagated edit at the Florida sync, 2026-09-26): the non-rent cure promise now ends "...does not cure the failure after receiving written notice, except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure." Driven by Florida's finding that promising a cure for every breach can contractually give up a state's no-cure termination grounds (checklist instruction 33). This is a targeted fix Taylor approved, not a re-audit. Classification: UNIFORM. It is self-limiting and adds no landlord right where no such law exists. Inherit without override. `last_checked` reset to 2026-09-26. Detail: lease-clause-decision-log-FL.md §16.

## Propagated from the Arizona pass, 2026-09-27

Not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-AZ.md §14 and §17. (Appended at sync, 2026-09-27.)

1. **Shared-row edit received from Arizona (2026-09-27, Taylor's decision) — `entire-agreement`.** The sentence "may not be changed except in writing signed by all parties" now continues ", or as applicable law permits Landlord to change it by written notice to Tenant." Driver: A.R.S. §33-1342(C), which lets an Arizona landlord amend existing leases by written notice to comply with new laws; the old wording could be read to waive such a right. Recorded as **uniform** under §5a.1: the words are self-limiting and change nothing where this state's law gives no unilateral amendment right, while preserving any right it does give (for example, rules adopted on notice or changes to a periodic tenancy on the notice the law requires). No state-specific override is needed. `last_checked` was reset to 2026-09-27.

2. **2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged NV** (§5a.1; uniform text, no NV override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. Not located in NRS 118A (full read). Remedies run through `default-by-tenant`.

---

## Gap-discovery backfill (instruction 36) — 2026-09-27

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§§0–2 and §11: NRS 118A read whole, section-open from the revisor, with NRS ch. 40, ch. 118, 202.450–.480 and 487.038–.039; the one residual section, 118A.525, is closed in §17.2) |
| Gap-discovery source 2 — real-lease comparison | Done (§17.1: GLVAR Residential Lease Agreement, Rev. 11.19) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§17.2: 73 scenarios, Claude-generated) |
| Gap-discovery source 4 — outside-title search | Done (§17.3: official NRS full-text search of all 835 chapter pages, run in Taylor's browser) |

*(Section 17 of this log; subsections are numbered 17.x.)*

**Scope.** This section runs three targeted checks. It is not a re-audit. Base file: `lease-clauses.csv`, 941 rows, 905 active, 14 states, NV 103 active. Output: `lease-clauses-NV-delta.csv`, with 25 rows: 18 new NV rows and 7 changed NV-only rows. After the delta is applied there are 959 rows, 923 active, and NV has 121 active rows (75 lease clauses and 46 education rows, all VERIFIED). No shared row was added or edited. Other states' counts are unchanged.

**Research mode:** not used. Every statutory point was settled from primary text on leg.state.nv.us.

**Primary-text basis.** All sections read in this backfill come from the revisor's compilation, header `[Rev. 4/15/2026 — 2025]`, and were read section-open. The browser pages load whole chapters, so the truncation that limited the NV pass (§1) did not recur. **Currency (instruction 29):** the compilation's history lines print amendments made at the 2025 36th Special Session (e.g. NRS 268.425 and 617.455), so that special session is incorporated. §17.3.6 records which relied-on sections it touched.

---

### 17.1 Source 2 — real-lease comparison

**The lease.** Greater Las Vegas Association of REALTORS® (GLVAR), *Residential Lease Agreement*, Rev. 11.19 (form no. 1515214v.1, © 2019 GLVAR). The copy used was posted by a brokerage: Kenneth C. Ravago, RE/MAX Advantage, Las Vegas, at `https://www.kenravago.com/files/Lease.pdf`. For cross-reference, Rev. 05/12 is posted by First Serve Realty at `https://u.realgeeks.media/firstserverealty/documents/RLA.pdf`.

**Why it qualifies.** It is a Realtors-association residential lease, posted by a brokerage: route (a). Nevada REALTORS® (the state association) does not post its form publicly. GLVAR is the Realtors association for Southern Nevada, where most of the state's rentals are, so its form is the working professional lease there. No generic multi-state form site was used.

**Edition caveat.** Rev. 11.19 predates the 2025 session. It lacks:
- the single all-in rent figure (118A.200(6)–(8));
- the fee-free payment method (118A.303);
- the (3)(l)–(o) disclosures;
- the single-family top-of-page disclosure (118A.200(4));
- DV and 60+/disability termination (118A.345, .340);
- shutdown-worker protection.

The library already covers every one of these. No newer edition is publicly posted. The form was used as a **lead only** (instruction 6), and every statutory point below rests on revisor text. The lease is copyrighted, so it is mapped by topic, not quoted.

**Result.**
- **Two missing required clauses** found: 118A.200(3)(c) and (3)(e)/(g). New rows `children-occupancy-nv` and `required-fees-nv`.
- **One opt-in landlord right**, unbuilt until now: 118A.290(2). New row `tenant-repair-agreement-nv`.
- **One new education row** from an outside-title citation in the form: `edu-political-signs-cic-nv` (NRS 116.325).
- **No corrections** to existing rows from this part.
- **No cross-state question.**

#### 17.1.1 Provision map

| GLVAR provision (by topic) | Library coverage for NV | Result |
|---|---|---|
| Parties; premises; mailbox, parking and storage included | `appliances-included`, `assigned-parking-space`, `parking-ks-oh-ca`, `storage-space-ks-oh-ca` | Covered |
| Term; month-to-month holdover with 30-day notice | `edu-termination-notice-nv` (40.251), `surrender-end-of-term`; duration (118A.200(3)(a)) is a lease core field | Covered |
| Rent amount, due date, place of payment | `rent-payment`, `rent-single-figure-nv`, `payment-methods-nv` | Covered, and more current than the form (the form predates 118A.200(6) and 118A.303) |
| Summary of monies: named fees (key, administrative/application, pet, cleaning), some labelled nonrefundable | No NV row listed required fees with their purposes | **Gap → `required-fees-nv`** (118A.200(3)(e)). Nonrefundable labels are limited by 118A.240 and 118A.242(8), already in `security-deposit-return-nv` and `edu-security-deposit-rules-nv` |
| Late fee (fixed or %); dishonored-check charge; certified funds after a return | `late-fee-nv`, `returned-payments-nv`, `edu-returned-check-remedies-nv` | Covered. **Partial-payment charges: gap** (118A.200(3)(g)), closed in `required-fees-nv` |
| Notice fees, eviction costs, attorney fees, utility and landscaping bills and HOA fines treated as "additional rent" | No NV row does this | Not needed. The library correctly avoids it: rent is the periodic payment for occupancy plus reasonable late fees in the agreement (118A.150); periodic rent may not exceed the single figure (118A.200(6)–(7)); the tenant may not be made to pay the landlord's attorney fees except under a prevailing-party clause (118A.220(1)(c)) |
| Security deposit: statute cited; 30-day accounting; not usable as last month's rent; professional cleaning with receipts | `security-deposit-return-nv`, `security-deposit-use`, `security-deposit-cap-nv` | Covered. No statute on applying the deposit to last month's rent (contract choice) |
| Deposit forfeited on default | `security-deposit-return-nv` (118A.242(4): only amounts reasonably necessary) | Covered. A forfeiture term would be void (118A.242(8)) |
| Tenant accepts condition; addendum: report defects within 5 days or accept "as is" | `existing-condition`, `move-in-inventory-nv` (118A.200(3)(k): signed inventory is lease content at signing) | Covered. Ours applies the statute, and the form's 5-day window does not meet (3)(k) |
| Trust account; broker keeps deposit interest | `edu-no-deposit-interest-nv` | Covered |
| Administrative fee per eviction attempt, plus service costs | — | Not needed. It collides with 118A.220(1)(c), and the library has no such fee |
| Keys and cards; key deposit | `keys`; a key deposit is security under 118A.240 (`security-deposit-cap-nv`) | Covered |
| No sublet; residential use; comply with health laws | `no-sublet-assign`, `residential-use-only`, `tenant-maintenance-nv` | Covered |
| Occupants (number and names) | `permitted-occupants` (118A.200(3)(i)) | Covered. **Children: gap → `children-occupancy-nv`** (118A.200(3)(c)); the form is silent on children too |
| Guests: daily charge after X days; maximum stay | `guest-policy`, `guest-policy-day-limit` | Covered. Guest charges: no statute; no row |
| Utilities (who pays each) | `utilities-responsibility`, `utilities-paid-by-landlord`, `services-utilities-provided-ks-oh` | Covered |
| Pest control: initial treatment on request, tenant pays monthly; Division of Agriculture notice | `edu-habitability-duty-nv` (vermin-free at move-in, 118A.290(1)) | Covered. No landlord pest-control or pesticide-notice statute (confirmed absent, §17.3.3). A required monthly pest charge is a mandatory fee: it goes in the single figure and is listed in `required-fees-nv` |
| Pets: permission, deposit or fee, liability insurance naming landlord, fine for unauthorized pet | `pet-policy-nv`, `pet-insurance-requirement` | Covered. A pet fee meant to cover damage is security (118A.240), noted in `required-fees-nv` |
| Restrictions: waterbeds, boats, RVs, commercial vehicles, vehicle repair | `common-area-use`, `parking-vehicle-rules` | Covered. Waterbeds: no statute (0 hits, §17.3.3) |
| Alterations | `no-alterations` | Covered |
| Default; 5-day cure; release of tenant information to collectors | `default-by-tenant`, `edu-no-cure-eviction-grounds-nv` (40.2516) | Covered. Release to collectors is a contract term; no row |
| Non-waiver, including accepting late rent | `late-fee-nv` (acceptance sentence); library decision: no general non-waiver clause | Covered. No NV acceptance-waiver statute (§17.3.3) |
| Abandonment (118A.450) and disposal of property | `edu-abandonment-notice-nv`, `abandoned-property-nv` | Covered |
| Notice to vacate; holdover rent raised by a percentage | `edu-termination-notice-nv`; `holdover-ca` (118A.470); `rent-increase-notice-nv` (118A.300, 60 days) | Covered. The form's automatic percentage increase would still need 60 days' written notice |
| Surrender | `surrender-end-of-term` | Covered |
| Emergency contact | `owner-identity-disclosure-nv` (118A.260 emergency telephone number) | Covered |
| Maintenance split: tenant minor repairs up to $X, HVAC filters, all broken glass "regardless of cause", landscaping, pool; landlord major systems | `landlord-maintenance`, `tenant-maintenance-nv`, `landscaping-irrigation`, `smoking-policy` | **Gap (opt-in right) → `tenant-repair-agreement-nv`** (118A.290(2)–(3)). The form's glass-regardless-of-cause term collides with 118A.290(4)–(5); ours charges only for tenant-caused conditions |
| Smoke-detector agreement (tenant tests and replaces batteries) | `smoke-detector-duty-nv` | Covered |
| Access with 24 hours' notice; tenant pays for missed vendor visits; signs and lockbox in the last 30 days | `landlords-access`, `edu-access-remedies-nv` (118A.330) | Covered. Missed-visit charges: not needed |
| HOA: fines passed through; landlord may adopt rules on 30 days' notice | `hoa-compliance`, `edu-rules-regulations-nv` (118A.320(2)) | Covered |
| Appliances as-is; landlord not liable for appliance failure | `appliances-included` (landlord maintains), `edu-prohibited-lease-terms-nv` (118A.220(1)(d)) | Covered. Ours has no disclaimer |
| Insurance: renter's may be required, landlord as additional insured; landlord not liable; tenant indemnity; rent abatement after casualty | `tenants-property-insurance-ks-oh-ca`, `edu-prohibited-lease-terms-nv`, `casualty-termination-nv` (118A.400) | Covered. The form's exculpation and indemnity would be void to the extent of 118A.220(1)(d) |
| Drug-free housing; one violation is a material breach | `edu-no-cure-eviction-grounds-nv` (40.2514), `residential-use-only`, `default-by-tenant` carve-out | Covered |
| Screens, grill distances, painting, tenant rekeying at own cost, lead-paint risk-assessment option, U.S. flag, political signs "per NRS 116" | `fire-safety-grilling`, `no-alterations`, `keys`, `lead-based-paint`, `flag-display-nv`, `religious-display-nv` | Covered, except **political signs → new `edu-political-signs-cic-nv`** (NRS 116.325, read). Rekey: no general statute (§17.3.3). The risk-assessment option is a federal purchaser right, not a lessor duty (federal text not re-read this session); no row |
| Changes in writing on 30 days' notice; entire agreement | `entire-agreement`, `edu-rules-regulations-nv` | Covered |
| Addendum governs | `addendum-precedence` | Covered |
| Prevailing-party attorney fees | `default-by-tenant` (118A.220(1)(c)) | Covered |
| Nevada law; no waiver of statutory rights; partial invalidity | `governing-law`, `severability`, `edu-prohibited-lease-terms-nv` (118A.220(1)(a)) | Covered |
| E-signatures (NRS 719) and counterparts | `electronic-signatures` | Covered |
| Licensee disclosure (NAC 645.640); confirmation of representation | — | Not needed. These are broker duties, and a self-managing landlord is not a licensee |
| Notice addresses | `notices`, `edu-notice-service-nv` | Covered |
| Military: termination on orders with 30 days' notice | `early-termination` (SCRA preserved); new `edu-no-servicemember-lease-rule-nv` (§17.3.3) | Covered. Taylor's AZ decision (AZ log §16.4) stands: no SCRA clause |
| Foreclosure: tenant keeps paying; deposits returned | `foreclosure-disclosure-nv` (118A.275), `edu-foreclosure-sale-tenants-nv` (40.255) | Covered |
| Addendum: lease renewal fee; automatic percentage increase at renewal; repair response times; carpet cleaning | `required-fees-nv` (renewal fee is a required fee to list), `rent-increase-notice-nv`, `edu-tenant-repair-remedies-nv` (14 days / 48 hours by statute), `security-deposit-return-nv` | Covered |
| Addendum: no-show fines; per-infraction penalties | — | Not needed. Enforceability of lease penalties was not researched; if one were a recurring mandatory charge, the single-figure rule would reach it |
| Addendum: flat early-termination fee "regardless of reason" | `early-termination`, `dv-lease-termination-nv`, `infirmity-death-termination-nv` | Covered. A flat fee regardless of reason would override 118A.340 and 118A.345; ours preserves them |
| Assistance-animal addendum | `assistance-animal-accommodation`, `edu-assistance-animal-nv` | Covered |

#### 17.1.2 Rows changed (Part 1)

- **`children-occupancy-nv`** (new; REQUIRED lease clause; Tenant Responsibilities)
  - **Why:** 118A.200(3)(c) makes "occupancy by children or pets" a required lease subject. `pet-policy-nv` covered pets, and nothing covered children. Using a nonconforming lease is unlawful (118A.200(9)).
  - **Drafting:** the clause states no child-specific limit, because familial status is protected (NRS 118.100). A bracket covers qualifying housing for older persons.
- **`required-fees-nv`** (new; REQUIRED lease clause; Rent & Payment)
  - **118A.200(3)(e):** the lease must list required fees and their purposes.
  - **118A.200(3)(g):** the lease must address charges for late *or partial* payment and dishonored checks. `late-fee-nv` and `returned-payments-nv` are optional, and no NV row mentioned partial payment. The last sentence closes (3)(g) in every lease.
  - **Also:** it gives `security-deposit-return-nv`'s reference to a "nonrefundable cleaning charge ... stated in this Lease" a place in the lease. It carries a builder guard: a fee for rent default, damage or cleaning is security (118A.240).
- **`tenant-repair-agreement-nv`** (new; CONDITIONAL lease clause; Tenant Responsibilities)
  - **Basis:** 118A.290(2)–(5), an opt-in landlord right under instruction 30.
  - **Drafting:** conservative. Specified tasks only, good-faith recitals matching (2)–(3), habitability stays with the landlord, and there is no charge for landlord-duty work (118A.290(4)).
- **`edu-political-signs-cic-nv`** (new; CONDITIONAL education; Rules & Regulations)
  - **Basis:** NRS 116.325, read section-open (2005, A. 2009).
  - **Content:** the HOA may not bar an owner's or occupant's political signs (24×36 in., one per candidate, party or question). The owner may not post a political sign in a tenant-occupied unit without the tenant's written consent.
  - **Result for NV:** no landlord-tenant political-sign rule exists (§17.3.3), so `common-area-use` applies as written.

#### 17.1.3 Confirmed absences and cross-state questions (Part 1)

- **Absences** raised by the form's topics (pest control, waterbeds, rekeying, renter's insurance, deposit applied to last month's rent, late-rent acceptance waiver, servicemember termination) were run in the full-text search. Results are in §17.3.3.
- **Cross-state questions:** none. Every gap was Nevada-specific (118A.200(3), 118A.290(2), NRS 116.325).

---

### 17.2 Source 3 — landlord-scenario screen

**Method.** The scenarios were written by Claude, not taken from Taylor's experience. The model is AZ log §18.1's 59-scenario map, with its Arizona-only items dropped (city rental tax, assessor registration, foreign-adversary buyers) and Nevada-specific scenarios added. Each scenario was run against the NV-active library. Where no row answered it, the scenario went to the §17.3 full-text search, and any statute found was read section-open.

**Result.**
- **73 scenarios.** 52 were answered by rows that existed before this backfill, and 4 more by Part 1's new rows.
- **17 gaps** or unconfirmed boundaries, now resolved:
  - 11 by new rows (this section and §17.3);
  - 2 by changed rows;
  - 4 as confirmed absences with no row: holding deposits, criminal-history screening, extended absence and pools.
- **One opt-in right built:** `designated-repairer-nv`.
- **One source-1 residual found:** NRS 118A.525 (2025), the rent-reporting program, which had no row.

#### 17.2.1 Scenario map

| Scenario | NV coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays a holding deposit, then backs out | — | Confirmed absent: no holding-deposit rule (§17.3.3). A holding deposit credited to rent or damage is subject to 118A.240's definition of security. Noted on `edu-no-deposit-interest-nv`. No new row |
| Application fee; minor household members; refund if never processed | `edu-application-fees-nv` | Covered. **Changed:** "no cap" confirmed code-wide and added to the body |
| Screening: criminal history | `edu-fair-housing-nv` | Confirmed absent as a state rule (§17.3.3); noted on the row |
| Screening: source of income or voucher | `edu-fair-housing-nv` (not a protected class) | **Gap → `edu-no-source-of-income-rule-nv`** |
| Screening: immigration status | — | **Gap → `edu-no-immigration-inquiry-rule-nv`** |
| Applicant lied on the application | `rental-application-accuracy` | Covered |
| Landlord advertised and negotiated in Spanish | — | **Gap → `edu-translation-duty-nv`** (NRS 598.9733) |
| Unit not ready on move-in day | `possession-delay-nv` (118A.370) | Covered |
| Required disclosures and lease contents at signing | `edu-lease-content-requirements-nv`, `owner-identity-disclosure-nv`, `foreclosure-disclosure-nv`, `sfr-occupancy-disclosure-nv`, `nuisance-reporting-nv`, `flag-display-nv`, `religious-display-nv`, `move-in-inventory-nv`, `rent-single-figure-nv`, `lead-based-paint` | Covered after Part 1 adds `children-occupancy-nv` and `required-fees-nv` |
| Property-tax share of rent statement | `property-tax-rent-disclosure-nv` (118.165) | Covered |
| Property is in an HOA | `hoa-compliance`, `edu-political-signs-cic-nv` | Covered |
| Deposit plus prepaid rent over the cap | `security-deposit-cap-nv` | Covered |
| Former drug lab being rented out | — | **Gap → `edu-meth-lab-rental-nv`** (202.450(4), 439.4797) |
| **Rent and money** | | |
| Rent is late | `late-fee-nv`, `default-by-tenant`, `edu-nonpayment-eviction-nv` | Covered |
| Tenant pays part of the rent | `required-fees-nv` (no partial-payment charge unless stated); `edu-nonpayment-eviction-nv` (rent may not be refused after notice over non-rent charges) | Covered after Part 1 |
| Check bounces | `returned-payments-nv`, `edu-returned-check-remedies-nv` | Covered |
| Tenant pays cash and wants a receipt | `edu-security-deposit-rules-nv` (118A.250) | Covered |
| Online-portal fee; tenant wants a fee-free method | `payment-methods-nv` | Covered |
| Mandatory fees on top of rent | `rent-single-figure-nv`, `required-fees-nv` | Covered |
| Raising the rent | `rent-increase-notice-nv` | Covered. Rent control: confirmed absent statewide (§17.3.3) |
| Landlord wants to report rent to credit bureaus | — | **Gap (source-1 residual) → `edu-rent-reporting-program-nv`** (118A.525, AB 540 (2025) sec. 19, effective 2025-07-01) |
| Tenant is a furloughed government worker | `edu-shutdown-worker-protection-nv` | Covered |
| **During the tenancy** | | |
| AC fails in July | `edu-habitability-duty-nv` (AC in good repair if supplied), `edu-tenant-repair-remedies-nv` (air-conditioning is an essential service, 118A.380) | Covered. No duty to supply AC in the first place (§17.3.3) |
| Tenant withholds rent or repairs and deducts | `edu-tenant-repair-remedies-nv` | Covered. **Opt-in right built:** `designated-repairer-nv` (118A.360(2)) |
| Tenant complains to the health district | — | **Gap → `edu-health-district-rental-rules-nv`** (NRS 439.479) |
| County or city orders repairs at a multi-unit building | — | **Gap → `edu-substandard-multifamily-nv`** (AB 211 (2025)) |
| Roaches, scorpions, bed bugs | `edu-habitability-duty-nv` | Covered. **Gap closed:** `edu-no-bed-bug-disclosure-nv` |
| Mold complaint | `tenant-maintenance-nv`, `landlord-maintenance` | **Gap closed:** `edu-no-mold-disclosure-nv` |
| Tenant causes damage | `tenant-maintenance-nv`, `default-by-tenant`, `edu-no-cure-eviction-grounds-nv` (waste) | Covered |
| Landlord needs to enter; tenant refuses | `landlords-access`, `edu-access-remedies-nv` | Covered |
| Tenant changes the locks | `keys`, `dv-lease-termination-nv` (118A.345 lock change) | Covered |
| Tenant away for a month | `edu-abandonment-notice-nv` (118A.450 presumption) | Confirmed absent: no extended-absence notice rule (§17.3.3) |
| Guest won't leave | `guest-policy`, `guest-policy-day-limit` | Covered as a lease matter. The statutory route is limited, as stated in the new row below |
| Squatter in a vacant rental | `sfr-occupancy-disclosure-nv` (presumption notice only) | **Gap → `edu-unauthorized-occupant-removal-nv`** (40.230, 40.240, 40.412, 40.414) |
| Roommate moves out | `joint-liability`, `no-sublet-assign` | Covered |
| Tenant lists the unit on Airbnb | `no-sublet-assign`, `residential-use-only` | Covered. Transient-lodging authorizations (244.35356, 268.09797) are recorded in §17.3.4; no row |
| Noise and neighbor complaints | `no-disturbance`, `tenant-maintenance-nv` | Covered |
| Drugs or other crime on the premises | `edu-no-cure-eviction-grounds-nv`, `nuisance-reporting-nv` | Covered |
| Tenant calls police or 911 repeatedly | `edu-emergency-assistance-nv` (118A.515) | Covered |
| Marijuana smoking | `smoking-policy` (NV note: 202.2483) | Covered |
| Unapproved pet | `pet-policy-nv`, `pet-insurance-requirement` | Covered |
| Assistance-animal request; fake service animal | `assistance-animal-accommodation`, `edu-assistance-animal-nv`, `edu-service-animal-misrepresentation-nv` | Covered |
| Disability modification request | `edu-fair-housing-nv` (118.101) | Covered |
| Tenant paints or alters the unit | `no-alterations` | Covered |
| Tenant wants to do yard or pool work, or minor repairs, instead | `landscaping-irrigation`, new `tenant-repair-agreement-nv` | Covered after Part 1 |
| Tenant flies a flag or displays a religious item | `flag-display-nv`, `religious-display-nv`, `common-area-use` carve-out | Covered |
| Tenant puts up a political sign in an HOA | `edu-political-signs-cic-nv` | Covered after Part 1 |
| Car towed from the lot | `edu-towing-nv`, `parking-vehicle-rules` | Covered |
| Pool at the property | — | Confirmed absent in NRS (§17.3.3; NAC not searched). No row |
| Smoke alarm or CO alarm | `smoke-detector-duty-nv`, `edu-smoke-detector-scope-nv` | Covered. **Changed:** CO confirmed absent for long-term rentals; condominium correction |
| Tenant's utility is shut off | `utility-service-continuity`, `utility-payment-evidence` | Covered |
| Landlord's master-metered utility is shut off for nonpayment | `edu-tenant-repair-remedies-nv` (118A.380, .390) | Covered for tenant remedies. The utility's posting duty (704.1835(2), PUC regulations) is recorded in §17.3.4; no landlord duty, no row |
| Adding a new rule mid-lease | `edu-rules-regulations-nv`, `entire-agreement` | Covered |
| Large complex: key control and staff background checks | `edu-key-control-policy-nv` | Covered |
| 55+ community staff work cards | `edu-senior-housing-work-card-nv` | Covered |
| **Ending the tenancy** | | |
| Tenant wants out early | `early-termination`, `default-by-tenant` | Covered |
| Domestic-violence victim wants out | `dv-lease-termination-nv`, `edu-dv-termination-documentation-nv` | Covered |
| Tenant aged 60+ or disabled moves to care; spouse dies | `infirmity-death-termination-nv` | Covered |
| Tenant is deployed | `early-termination` | **Gap closed:** `edu-no-servicemember-lease-rule-nv` |
| Tenant dies | `infirmity-death-termination-nv` (a tenant's death gives the landlord no right to terminate) | Covered. Confirmed absent otherwise (§17.3.3) |
| Month-to-month notice either way | `edu-termination-notice-nv` | Covered |
| Weekly tenant under 45 days, fast pay-or-quit | `edu-nonpayment-eviction-nv` | Covered as education. Opt-in acknowledgment not built; **reason now recorded on the row** (instruction 30) |
| Tenant stays after the lease ends | `holdover-ca` (118A.470) | Covered |
| Tenant disappears | `edu-abandonment-notice-nv`, `abandoned-property-nv` | Covered |
| Fire or casualty | `casualty-termination-nv` | Covered |
| Eviction process; lockout | `edu-nonpayment-eviction-nv`, `edu-no-cure-eviction-grounds-nv`, `edu-self-help-eviction-ban-nv`, `edu-termination-notice-nv` | Covered |
| Retaliation claim | `edu-retaliation-nv` | Covered |
| Deposit dispute | `security-deposit-return-nv`, `edu-security-deposit-rules-nv` | Covered |
| Deposit refund never cashed | `edu-deposit-escheat-nv` | Covered |
| Tenant asks to seal an eviction record | `edu-eviction-record-sealing-nv` | Covered |
| **Owner changes** | | |
| Owner sells with a tenant in place | `edu-sale-new-owner-notice-nv` (118A.349), `edu-security-deposit-rules-nv` (118A.244) | Covered |
| Lender forecloses | `foreclosure-disclosure-nv`, `edu-foreclosure-sale-tenants-nv` | Covered |
| Owner changes managers | `owner-identity-disclosure-nv` (118A.260, .410) | Covered |

#### 17.2.2 Opt-in landlord rights (instruction 30), as they stand

| Right | Statute | Row |
|---|---|---|
| Late fee (only if in the agreement) | 118A.210(4) | `late-fee-nv` |
| Dishonored-check charge | 118A.200(3)(g) | `returned-payments-nv` |
| Prevailing-party attorney fees | 118A.220(1)(c) | `default-by-tenant` |
| Nonrefundable cleaning charge | 118A.242(8) | `required-fees-nv` (new) |
| Tenant-performed repairs and maintenance | 118A.290(2) | `tenant-repair-agreement-nv` (new) |
| Named repairer for repair-and-deduct and essential-services work | 118A.360(2) | `designated-repairer-nv` (new) |
| Rules and regulations | 118A.320 | `edu-rules-regulations-nv` (education); rules come in by notice |
| Online-portal fee (must be stated in the lease) | 118A.303(2) | `payment-methods-nv` |
| Short-term 4-day pay-or-quit acknowledgment | 40.253(1)(b), (2)(b) | **Not built.** Reason on `edu-nonpayment-eviction-nv`: weekly-rent tenancies of 45 days or less only; Steinoak leases are monthly |
| Unclaimed-property dormancy charge by written contract | 120A.540 | **Not built** (§15): usable only by a landlord who regularly imposes the charge |

#### 17.2.3 Rows changed (Part 2)

- **`designated-repairer-nv`** (new; CONDITIONAL lease clause; Landlord Responsibilities)
  - **Basis:** 118A.360(2), read section-open.
  - **History:** the NV pass recorded this as "noted, not built" (§13). Instruction 30 now calls for the row.
- **`edu-unauthorized-occupant-removal-nv`** (new; CONSTRAINED education; Rules & Regulations; topic `guest-policy`, following `edu-guest-removal-az`)
  - **Basis:** 40.230, 40.240, 40.412 and 40.414, read section-open.
  - **History:** 40.414 was supplied in text batch 2, but no row cited it.
  - **Statutory inconsistency:** 40.414(3)(b)(3) tells the occupant 14 days, while 40.414(7) requires 21 days' storage. The row says wait 21 days.
  - **Guests:** 40.240(1)(b) reaches only a person who entered *without* authority, so the row does not promise the process against an ordinary overstaying guest.
- **`edu-rent-reporting-program-nv`** (new; PROHIBITED education; Rent & Payment; effective 2025-07-01)
  - **Rule:** NRS 118A.525. The landlord may not require a tenant to join the Housing Division's rent-reporting program, or penalize a tenant for not joining.
  - **Session law:** AB 540 (2025), ch. 432, sec. 19. Sec. 53(2), read on the official Statutes page, gives July 1, 2025.
  - **Source-1 residual:** §0 recorded 118A.490(4)–.530 as "known by title only". The revisor's section index was re-listed against every NV row and this log. Every other 118A section is cited by a row or answered here; 118A.420 (landlord damages and injunction) is generic and covered by `default-by-tenant`.
- **`edu-nonpayment-eviction-nv`** (changed, notes only): the instruction-30 reason for not building the short-term acknowledgment.
- **`edu-tenant-repair-remedies-nv`** (changed, notes only): points to the two new opt-in rows.

---

### 17.3 Source 4 — outside-title search

#### 17.3.1 How the search works

**Why a script.** leg.state.nv.us has no NRS full-text search a tool can call, and it refuses the workspace's network. With Taylor's permission, the search ran in the built-in browser, read-only.
- **Pages:** a script loaded **every chapter page in the NRS table of titles and chapters (835 pages)** from the revisor.
- **Matching:** it split each page at the section anchors and matched each section against the terms, case-insensitive, with the variants listed.
- **Filter:** for each term, it recorded whether the section also uses tenant, landlord, lessee, lessor, "rental agreement" or "dwelling unit" wording.

**Review.**
- Every hit's section number and heading was reviewed.
- Every hit in a housing section was read.
- Every landlord-relevant hit was read section-open.

**Boundary.** Statutes only. NAC, local ordinances and case law were not searched.

**Proof-of-absence standard (L.12/L.13).** "Confirmed absent" below means the listed terms, run code-wide, returned no rule for residential landlords. The first matching term per section was recorded, and a second pass re-ran topics where a single match could hide another. The search does not see statutes that use none of the terms. That is why each topic ran several variants.

#### 17.3.2 Present — with rows

| Topic | Found | Row |
|---|---|---|
| Lease translation when advertising and negotiating in another language | NRS 598.9731–.9739, 598.09227 (AB 359, 2021): full translation before signing for residential tenancies of 1 month or more; rescission; a knowing violation is a deceptive trade practice | **New `edu-translation-duty-nv`**. **Corrects** checklist 659.1 ("translation not located") |
| Local repair orders and receivership for 2+-unit rentals | NRS 244.36901–.36909 (counties) and 268.428–.4288 (cities), AB 211 (2025), ch. 237, no effective-date section → October 1, 2025 | **New `edu-substandard-multifamily-nv`** |
| Health-district regulation of rental units; landlord must provide the regulations on request | NRS 439.479 (2009) | **New `edu-health-district-rental-rules-nv`** |
| Former drug lab: owner's public-nuisance duty | NRS 202.450(4), 439.4797 | **New `edu-meth-lab-rental-nv`** (no disclosure duty; the nuisance duty is real) |
| Political signs in common-interest communities | NRS 116.325 | **New `edu-political-signs-cic-nv`** (§17.1) |
| Squatter removal; lock change after arrest | NRS 40.230, 40.240, 40.412, 40.414 | **New `edu-unauthorized-occupant-removal-nv`** (§17.2) |
| Rent-reporting program participation | NRS 118A.525 | **New `edu-rent-reporting-program-nv`** (§17.2) |
| CO alarm in short-term rentals | NRS 244.35356, 268.09797 (2021): a transient-lodging authorization holder must equip the unit with a fire extinguisher, a smoke alarm and a CO alarm | **Changed `edu-smoke-detector-scope-nv`** (with the condominium correction to 477.140(2)) |

#### 17.3.3 Confirmed absent (statutes)

Each topic below had been "Not located", "Not yet checked" or bounded to the core chapter.

| Topic | Terms run (all variants) | Housing hits reviewed | Row |
|---|---|---|---|
| Radon | radon | none (459.300 mill tailings; 617.453 firefighters) | **New `edu-no-radon-disclosure-nv`** |
| Mold | mold, molds, mildew, fungus, fungi | none (23 sections: agriculture, food, pesticide, HOA) | **New `edu-no-mold-disclosure-nv`** |
| Bed bugs | bed bug(s), bedbug(s) | 447.030 (hotel rooms only; "hotel" per 447.010) | **New `edu-no-bed-bug-disclosure-nv`** |
| Carbon-monoxide alarms (long-term rentals) | carbon monoxide; smoke detector(s), smoke alarm(s) | 244.35356, 268.09797 (transient lodging only); 477.140 | **Changed `edu-smoke-detector-scope-nv`** |
| EV charging right | electric vehicle, vehicle charging, charging station(s) | none (utility, energy and parking sections) | **New `edu-no-ev-charging-right-nv`** |
| Immigration or citizenship status | immigration status, citizenship status, immigration or citizenship status | none (courts, jails, schools, agencies) | **New `edu-no-immigration-inquiry-rule-nv`** |
| Source of income or vouchers | source of income, housing voucher, housing choice voucher, section 8, rental assistance | 315.007 (public housing authorities); false positives | **New `edu-no-source-of-income-rule-nv`**; `edu-fair-housing-nv` notes |
| Servicemember lease termination | servicemember(s), service member(s), military orders, permanent change of station, reassignment orders, Servicemembers Civil Relief; active duty, military service, national guard, armed forces | 107.500 (foreclosure notice), 482.308 (vehicle leases) | **New `edu-no-servicemember-lease-rule-nv`** |
| Application-fee cap | late fee(s), late charge(s), application fee(s), screening fee(s) | 118A.150, .210, .306, .355, .380; other fee rules cover storage, mobile-home parks, commercial premises and vehicles only | **Changed `edu-application-fees-nv`** (body) |
| Deposit interest (ordinary deposits) | interest on (the/any) (security) deposit(s), interest-bearing, security deposit(s) | 118.101(4) (already stated), 118B.150 (mobile-home parks) | **Changed `edu-no-deposit-interest-nv`** (notes) |
| Deposit installments | installment(s), co-occurring with deposit wording | none: installment hits are HOA assessments, UCC and consumer credit | Recorded on `edu-no-deposit-interest-nv`; no new row |
| Holding deposit / earnest money | holding deposit(s), earnest money, application deposit(s), reservation deposit(s) | 645.310, 645.630 (broker trust duties), 489.401, 489.724 (manufactured-home dealers) | Recorded on `edu-no-deposit-interest-nv`; no new row |
| Criminal-history screening | criminal history, criminal record, arrest record, conviction record, convict* | 118A.335 (work cards), 205.0813/.0817, 315.* (public housing), 319.600 | Recorded on `edu-fair-housing-nv` |
| Protected-class inquiry | inquire/inquiry about/into/regarding | none | Recorded on `edu-fair-housing-nv` |
| Meth-lab disclosure to tenants | methamphetamine, clandestine laborator* | 40.770 only (sale) | No disclosure duty; the nuisance duty is on `edu-meth-lab-rental-nv` |
| Rent control / state preemption of local rent control | rent control, rent stabilization, control of/over rent, regulate (the amount of) rent, cap/limit on rent; preempt* | 319.410 (tax-credit affordability restrictions), 118B.* (mobile-home parks); preempt* hits are UCC and HOA only | No row. Checklist 248.8/294.9 updated |
| Tenant death (beyond 118A.340) | death of the/a tenant, tenant dies, deceased tenant, estate of the tenant | none (598.9811 solar leases) | No row. `infirmity-death-termination-nv` already states the 118A.340 rule |
| Extended-absence notice | extended absence, absence of the tenant | none (284.355 state employees) | No row; 118A.450's abandonment presumption only |
| Double-letting | double-let*, more than one tenant | 0 hits | No row |
| Fraud-based lease termination | fraudulent(ly) misrepresent*, fraudulent inducement | none (426.805 service animals; licensing) | No row. `rental-application-accuracy` covers the landlord side |
| Long-term (5+ yr) lease exclusion | five years or more, term of 5 years, more than 5 years | 118B.060 (mobile-home parks), 205.380 | No row. 118A.180 read earlier |
| Waterbeds | water bed(s), waterbed(s), water-filled | 0 hits | No row; `common-area-use` stands |
| Pest control / pesticide notice to tenants | pesticide(s), pest control, structural pest | 719.250 (UETA) only | No row |
| Swimming pools at rentals | swimming pool(s), spa(s) | 118B.150 (mobile-home parks) | No row (NAC 444 not searched) |
| Renter's insurance | renter's/renters insurance, tenant's insurance, liability insurance | none for dwellings | No row; `tenants-property-insurance-ks-oh-ca` stands |
| Rekey at turnover | rekey(ed/ing), re-key, change the lock(s), deadbolt(s), dead bolt | 118A.345 (DV), 40.412 (after arrest) | No row; `keys` stands |
| Duty to supply air conditioning or cooling | air-condition*, cooling, extreme heat, cooling center, maximum temperature | 118A.290, .310, .380 (AC if supplied; essential service) | No row |
| Late-rent acceptance waiver | accept* rent, acceptance of (partial) rent, waive* | 118A.220, .310, .345, .390, 40.253, 40.2542: none is a waiver-by-acceptance rule | Checklist row 50 updated |
| Electronic notice regime | electronic mail, e-mail, email, electronic means/transmission/delivery/notice | none for 118A notices (UETA 719.250 general only) | Checklist 294.3 updated |
| Notice-service fee ban | fee for serving/service of/preparing a notice, charge(s) for notice | 118A.355, .380 (no notice charges while rent is lawfully withheld) only | Checklist 659.3 updated |
| Typography (instruction 28), code-wide | underlined, boldface, bold type/print, conspicuous(ly), separate document/writing, substantially equivalent / the following form, point type, capital letters, font size, same page, top of the first page, one-half | Dwelling leases: only 118A.200(4) (2× font, top of page one) and 118A.200(8) (asterisk at least half the font size, same page), both already rows, and 118A.347 (affidavit "in substantially the following form", already on `edu-dv-termination-documentation-nv`). "Conspicuous place" hits are notice-posting rules (40.253, 40.2542, 40.280, 118A.270) | **No bold, underline or capitals rule for NV residential leases.** Omission sanctions that forfeit money: none found beyond 118A.405 ($250 statutory damages, on `rent-single-figure-nv`) |

#### 17.3.4 Other results (no row)

- **NRS 10.195:** a settlement of a claim of sex discrimination by a landlord, or retaliation for reporting it, may not bar disclosure of the facts. Litigation-level, not a lease matter.
- **NRS 704.1835(2):** the PUC must require a utility to try to post notice before cutting service because a landlord hasn't paid for resold service. The duty is the utility's.
- **NRS 244.35356 and 268.09797:** a county or city transient-lodging authorization (short-term rentals) carries fees, insurance, a local representative and safety equipment. This matters to a tenant subletting on Airbnb, which `no-sublet-assign` already controls.
- **NRS 118.175–118.205** (abandonment of real property): already read in text batch 2.
- **NRS 319.530 (2019):** tenants of housing acquired, built or rehabilitated with money from the state Account for Affordable Housing must be allowed to keep pets, subject to ordinary pet policies. Found through the "pet(s)" term. No row: it reaches only state-funded affordable housing, and a landlord with that funding learns the terms from the Housing Division. If Steinoak ever serves such properties, the pet builder would need a flag.
- **NRS 118A.420:** the landlord may recover damages and get an injunction for tenant noncompliance. Generic; covered by `default-by-tenant`.

#### 17.3.5 Rows changed (Part 3)

- **New (11):**
  - `edu-translation-duty-nv`
  - `edu-substandard-multifamily-nv`
  - `edu-health-district-rental-rules-nv`
  - `edu-meth-lab-rental-nv`
  - `edu-no-mold-disclosure-nv`
  - `edu-no-radon-disclosure-nv`
  - `edu-no-bed-bug-disclosure-nv`
  - `edu-no-ev-charging-right-nv`
  - `edu-no-immigration-inquiry-rule-nv`
  - `edu-no-source-of-income-rule-nv`
  - `edu-no-servicemember-lease-rule-nv`
- **Changed (5):**
  - `edu-smoke-detector-scope-nv` (body and notes). **Correction:** 477.140(2)'s corridor rule also covers condominiums with 3+ units. The body now also states the CO position.
  - `edu-application-fees-nv` (body and notes)
  - `edu-no-deposit-interest-nv` (notes)
  - `edu-fair-housing-nv` (notes)
  - `edu-lease-content-requirements-nv` (notes: pointers to the new (3)(c)/(e)/(g) rows, and the core-field note for (3)(a)–(b))

#### 17.3.6 Currency

Every section relied on in this backfill was read in the revisor compilation dated 4/15/2026.
- **2025 regular session:** incorporated. The history lines cite 2025 Statutes pages.
- **2025 36th Special Session:** incorporated. A second pass over all 835 chapter pages listed every section whose history line cites the 36th Special Session: 189 sections. **None is a section an NV row relies on,** except two definitions that rows incorporate by reference:
  - NRS 33.018 (domestic violence) and 200.575 (stalking), both cited by 118A.345;
  - `dv-lease-termination-nv` and `edu-dv-termination-documentation-nv` defer to them ("as defined by applicable law") and don't paraphrase them, so no row text changes;
  - flagged for the CLI statute watch.
- **Session-law dates read:**
  - AB 540 sec. 53: July 1, 2025.
  - AB 211: no effective-date section, so October 1, 2025.
  - AB 359 (2021): no effective-date section, so October 1, 2021 (inferred).
- **Instruction 34:** no relied-on section prints an amendment with a future effective date.

---

### 17.4 Integrity checks

- **Rows:** 941 + 18 new = **959**, 923 active. Delta: 25 rows (18 new, 7 changed), same 16-column header, Python `csv` only.
- **Clean:** no duplicate ids, no dangling `supersedes`, no blank `verification_status` on an active row.
- **No collisions:** no NV display collision (state + group + title), and no NV lease-clause `topic_key` duplicate.
- **NV active:** 103 → **121** (75 lease clauses, 46 education), all VERIFIED.
- **Other states:** active counts unchanged (CO 115, WY 99, KS 115, NE 112, MN 120, ND 111, SD 91, OH 74, CA 151, TX 129, NJ 80, FL 99, AZ 109).
- **Shared rows:** none added and none edited. All 7 changed rows are tagged NV only.
- **Notes and titles:** every new row's notes start with "NV:". No state name appears in any title.
- **References:** every row id named in the delta's notes and bodies exists in the merged CSV.
- **Cross-state questions for Taylor:** none.

## Propagated shared-row edits, 2026-09-28 (Taylor's decisions after the gap-discovery backfill)

Uniform under §5a.1: each edit is self-limiting, so this state needs no override. Not a re-audit; nothing else in this state was reviewed.

1. **`no-alterations`** — the carve-out now reads "any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform". It keeps disability modifications that fair-housing law requires the landlord to permit (at the tenant's expense) from reading as subject to unfettered landlord consent. Raised by the NE backfill (NE log §D.1).

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows, and checklist mentions of them now point to those rows. Statutory limits that stay useful when filling in a clause are now bracket prompts for the landlord, not lease text.

- **Moved to education:** `possession-delay-nv` → `edu-possession-delay-nv`; `infirmity-death-termination-nv` → `edu-infirmity-death-termination-nv`; `property-tax-rent-disclosure-nv` → `edu-property-tax-rent-disclosure-nv`; `dv-lease-termination-nv` → opening of `edu-dv-termination-documentation-nv`.
- **Trimmed:** `late-fee-nv` (fee and grace period kept; rules → `edu-late-fee-rules-nv`), `security-deposit-cap-nv` (now only the surety-bond option), `security-deposit-return-nv` (nonrefundable cleaning charge and forwarding-address request), `rent-increase-notice-nv` (no mid-term increase; notice rule → `edu-rent-increase-notice-nv`), `casualty-termination-nv` (landlord's termination right; tenant options → `edu-casualty-termination-nv`). Deposit rules were already in `edu-security-deposit-rules-nv`.
- **Optional (pattern 3):** `foreclosure-disclosure-nv`, with `edu-foreclosure-disclosure-nv`.
- **§5a.1:** only NV-only rows changed; no propagation owed.

### Verdict for every lease clause

All 27 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `dv-lease-termination-nv` | Education | — | tenant right |
| `infirmity-death-termination-nv` | Education | — | tenant right |
| `possession-delay-nv` | Education | — | tenant remedies |
| `property-tax-rent-disclosure-nv` | Education | — | annual landlord statement duty |
| `casualty-termination-nv` | Split | SERVES_LANDLORD | keep landlord termination right; tenant rights to edu |
| `late-fee-nv` | Split | CONSTRAINED_TERM | REQUIRED_DISCLOSURE: NRS 118A.200(3) | keep fee; 3-day floor and 5% cap to edu |
| `rent-increase-notice-nv` | Split | SERVES_LANDLORD | keep no-increase-during-term; notice period to edu |
| `security-deposit-cap-nv` | Split | SERVES_LANDLORD | keep surety-bond option; cap to edu |
| `security-deposit-return-nv` | Split | SERVES_LANDLORD | keep nonrefundable cleaning charge statement and forwarding address; rest edu |
| `foreclosure-disclosure-nv` | Optional + education | SERVES_LANDLORD | written disclosure before entering lease |
| `abandoned-property-nv` | Keep | SERVES_LANDLORD |  |
| `children-occupancy-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(3)(c) |  |
| `designated-repairer-nv` | Keep | SERVES_LANDLORD | opt-in |
| `flag-display-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(3)(n) |  |
| `move-in-inventory-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(3)(k) |  |
| `nuisance-reporting-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(3)(l)-(m) |  |
| `owner-identity-disclosure-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.260 |  |
| `payment-methods-nv` | Keep | CONSTRAINED_TERM | REQUIRED_DISCLOSURE: NRS 118A.200 |  |
| `pet-policy-nv` | Keep | SERVES_LANDLORD | REQUIRED_DISCLOSURE: NRS 118A.200(3)(c) |  |
| `religious-display-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(3)(o) |  |
| `rent-single-figure-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200 |  |
| `required-fees-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(3) |  |
| `returned-payments-nv` | Keep | CONSTRAINED_TERM | REQUIRED_DISCLOSURE: NRS 118A.200(3)(g) |  |
| `sfr-occupancy-disclosure-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(4) |  |
| `smoke-detector-duty-nv` | Keep | SERVES_LANDLORD |  |
| `tenant-maintenance-nv` | Keep | SERVES_LANDLORD |  |
| `tenant-repair-agreement-nv` | Keep | SERVES_LANDLORD | opt-in |
