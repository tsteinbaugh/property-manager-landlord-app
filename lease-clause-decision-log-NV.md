# Nevada — lease-clause decision log (state #10)

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
