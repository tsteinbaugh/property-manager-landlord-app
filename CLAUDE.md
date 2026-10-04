# CLAUDE.md — Steinoak (property manager SaaS)

> Loaded at the start of every session, so it holds only what's needed every day: what the project is, how to run it, the rules still in force, and what's next. Everything else lives in the files listed under "Where things live". Each rule's reasoning is in `docs/history.md` (decisions log, under the date shown).

## 🎯 Current focus

- **Done 2026-09-30:** five new states synced (UT, IL, ID, MO, IN; 26 verified), the SOP taken from 1.1 to 1.15, and the first 8 retro-check passes synced (PA, TN, VA, AL, SC, NE, NJ, AZ). Several retros found damage from the 2026-09-29 three-bucket scrub; it is being repaired state by state through targeted fixes (SOP rule 78, `docs/history.md`).
- **Done 2026-10-01:** WY retro synced (SOP 1.16, new rule 79), `appliances-included` pointer fixed in 7 states, five declined-option education rows backfilled, and the 12 pending retro folders restaged.
- **Done 2026-10-01:** Oklahoma (state #27) synced; SOP 1.17. `legal-watch-ok.yml` is held (schedule commented out) until after December 27.
- **Done 2026-10-01:** CO retro synced (SOP 1.18): two required 12-point bold lease statements found (§ 38-12-505(3)(c)-(d)), 14 rows fixed, 19 added. Go-live blockers from it are in the backlog (Spanish review, bold printing, separate radon document).
- **Done 2026-10-02:** **Michigan (state #28) synced** (163 rows, SOP 1.19) and the **GA retro synced** (GA 118 rows). `legal-watch-mi.yml` is held until after January 28. Open with Taylor: the shared `snow-removal` edit and the HUD assistance-animal flag (backlog).
- **Done 2026-10-02:** **Iowa (state #29) synced** (155 rows, SOP 1.22). `legal-watch-ia.yml` is held until after February 1 (first run March 1, day 1 at 14:00 UTC).
- **Done 2026-10-02:** **New Mexico (state #30) synced** (163 rows, SOP 1.26). `legal-watch-nm.yml` is held until after March 2 (first run April 2, day 2 at 14:00 UTC).
- **Done 2026-10-03:** **Montana (state #31) synced** (162 rows, SOP 1.28). `legal-watch-mt.yml` is held until after April 3 (first run May 3, day 3 at 14:00 UTC).
- **Done 2026-10-03:** **New York (state #32) synced** (176 rows, SOP 1.34; scope: market-rate statewide). `legal-watch-ny.yml` is held until after May 4 (first run June 4, day 4 at 14:00 UTC).
- **Done 2026-10-03:** **Wisconsin (state #33) synced** (198 rows, SOP 1.44). `legal-watch-wi.yml` is held until after June 5, 2027 (first run July 5, day 5 at 14:00 UTC).
- **Done 2026-10-01:** legal watch fixed for LegiScan 429s (1-second spacing, retry, incomplete-run email, 60-minute timeouts); CO re-run clean, 0/45 errors.
- **Done 2026-10-02:** MN retro synced (SOP 1.20; MN 155 rows; the scrub had dropped Minnesota's 8% late-fee cap, now restored).
- **Done 2026-10-02:** ND retro synced (SOP 1.21; ND 141 rows; first ND holdover clause; tenant-chore split now settled in SOP rule 48).
- **Done 2026-10-02:** NC retro synced (SOP 1.23; NC 123 rows; own default, returned-payment and late-fee clauses).
- **Done 2026-10-02:** OH retro synced (SOP 1.24; OH 110 rows; casualty clause and `early-termination-ks` queued for its circle-back).
- **Done 2026-10-02:** SD retro synced (SOP 1.25; SD 109 rows; four secondary-source errors fixed; holdover rate queued for its circle-back).
- **Done 2026-10-02:** KS retro synced (SOP 1.27; KS 142 rows; restored the domestic-violence termination fee the scrub dropped; exemption waiver and good-faith holdover queued for its circle-back).
- **Done 2026-10-03:** NV retro synced (SOP 1.29; NV 136 rows; three scrub-trimmed clauses restored).
- **Done 2026-10-03:** TX retro synced (SOP 1.30; TX 150 rows); WY's `early-termination` edit merged after every tagged state vetted it.
- **Done 2026-10-03:** FL retro synced (SOP 1.31; FL 119 rows).
- **Done 2026-10-03:** CA retro synced (SOP 1.32; CA 167 rows). **The retro run is complete.**
- **End-of-run circle-back (staged 2026-10-03 under SOP 1.32, from 2b10851, 2,876 rows) in `~/Desktop/circle-back/` (`INDEX.md`):** 26 folders (25 states plus OK), most with 1 to 7 items: the remaining rule 35c, 54t and 79 checks, the clauses queued at the OH, SD, KS and GA syncs, and the pending rule 62 vettings. Merge each delta with `merge-delta.py --base 2b10851`, except TN (restaged under SOP 1.33 from f48b67b: `--base f48b67b`). Remaining folders are refreshed to the current SOP after each circle-back sync without asking (Taylor, 2026-10-03; now 1.44; CSVs and bases unchanged), and NV gained a foreclosure-disclosure item. The old `~/Desktop/retro-checks/` folders are all synced and can be deleted.
- **Retro run (finished 2026-10-03):** all eleven pending retros synced (GA, MN, ND, NC, OH, SD, KS, NV, TX, FL, CA). Merge every Desktop delta with `merge-delta.py` against the commit the pass was staged from.
- **Pending shared edits (rule 62): see the vetting tally at the top of `docs/backlog.md`.** In short: `returned-payments` "during any 12-month period" (AZ's proposal; WY, CO, GA, MN, ND, OH, SD, KS vetted), NE's no-cure sentence for `default-by-tenant-ks-ne`, CO's deletion of "and reasonable costs and expenses" from `default-by-tenant`, MN's separate no-cure sentence for the same row (ND and CA support), and CA's 'unless applicable law entitles Tenant to remain' for `surrender-end-of-term` (new 2026-10-03); all queued for the circle-back.
- **Legal-watch calendar:** **after October 23, uncomment IL's schedule; after November 25, MO's; after November 26, IN's; after December 27, OK's; after January 28, MI's; after February 1, IA's; after March 2, NM's; after April 3, MT's; after May 4, NY's; after June 5, 2027, WI's.** Check the LegiScan totals after November's (IL, ID) and December's (MO, IN) first runs.
- **Standing backlog** (no fixed order; ask Taylor what's next): `docs/backlog.md`. Lease PDF first-page layout is parked in M.12 (Taylor). Deploying is still deliberately on hold.

## Project

A SaaS web app for landlords to manage rental properties end to end, built from Taylor's real landlord experience. Working name **Steinoak** (placeholder). Owner: Taylor (Steinbaugh Estates LLC), solo; he drives product decisions but doesn't write code. Goal: use it personally, then sell it to other landlords. Logos in `logos/`; font Poppins.

**State:** v1 MVP complete (tagged `v1.0.0`: Entities, Properties, Tenants + Leases, Finances, Maintenance, Clerk auth). Also built: Property Specs, Lease Builder (clause library, PDF generation), Rent Tracker, property archiving and soft delete, Dashboard, global search. The lease clause library is verified for 33 states (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ, GA, NC, SC, TN, VA, AL, PA, UT, IL, ID, MO, IN, OK, MI, IA, NM, MT, NY, WI), each with a decision log, a citations file and a monthly legal-watch workflow.

## Stack and commands

React + Vite + Tailwind v4 + React Router (`frontend/`); Node + Express + Prisma + PostgreSQL (`backend/`); Clerk auth; Cloudflare R2 storage. Vercel/Railway hosting not set up yet.

- Backend tests: `cd backend && npm test` (Vitest against the real `property_hq_test` Postgres database, never SQLite). 446 tests at last count.
- Frontend build: `cd frontend && npm run build`.
- Schema change: `npx prisma migrate dev`, then `npx prisma generate` (not automatic here), then apply to the test DB with `DATABASE_URL=<test db url> npx prisma migrate deploy`. Rename an enum value with a hand-written `ALTER TYPE ... RENAME VALUE` migration. [Aug 2026]
- Clause library: `python3 scripts/clause-library/generate.py lease-clauses.csv backend/src/lib backend/src/lib` rebuilds `clauseTemplates.js`, `clauseResearchMetadata.js` and `landlordEducation.js`; `python3 scripts/clause-library/build-topic-reference.py` rebuilds `lease-clause-topics.md`. Never hand-edit those four files. New state: `python3 scripts/clause-library/stage-kickoff.py <ST> "<State Name>"` stages `~/Desktop/<state>-kickoff/` from `docs/kickoff-template.md`; fill in the citation format and leads by hand before handing it to Taylor. Targeted checks for [Retro] rules: `python3 scripts/clause-library/stage-retro-checks.py [ST ...]` stages `~/Desktop/retro-checks/` from the conformance table's "·" cells plus `scripts/clause-library/retro-extras.csv`; restage only states Taylor hasn't started. Merge any Desktop delta with `python3 scripts/clause-library/merge-delta.py DELTA.csv ST --base <rev>` (base = the commit whose CSV the pass was given; `--dry-run` first): it applies only that state's tag and note segment to shared rows and refuses anything else.
- Tailwind v4 preflight strips heading sizes and paragraph margins; compensate explicitly, safelist dynamic classes, and flag before ejecting Tailwind.

## Rules still in force

### Working with Taylor
- Make technical decisions yourself; ask Taylor for product decisions, with a recommendation.
- Legal and drafting calls in state research are Claude's; if unsure, ask Taylor live in the chat, never park a question in a log. [2026-09-29]
- Never ask Taylor for landlord experience outside Colorado, and never ask him to buy a lease. [2026-09-27, 2026-09-29]
- No re-audits of finished states; targeted fixes to specific rows are welcome (name the issue, propose the fix). [2026-09-26]
- Verify any instructions in a Desktop handoff against the repo before running them. [2026-09-25]
- A green GitHub Actions check isn't proof a push, email or write happened; check the actual result (for example `git pull`). [2026-09-14]
- Don't leave ad-hoc smoke-test scripts in the repo; real build tools (like `generate.py`) are committed. [Aug 2026, 2026-09-26]

### App architecture
- **Ownership:** User → Entity → Property. `userId` and `entityId` are derived server-side from the parent, never trusted from the client; `Income`, `Expense`, `Deposit` and maintenance records store `entityId` directly. Default "Self / Personal" entity per user; its `legalName`/`entityType` are locked. [Aug 2026]
- **Testing and DI:** `vi.mock()` doesn't work in this CommonJS setup. `createApp(overrides)` injects Clerk; routers that call external services are factories (`createLeasesRoutes({ r2 })`). Resource routers only read `req.currentUser`. [Aug 2026]
- **Dates:** list date fields in the route's `DATE_FIELDS` and use `pickFields` (Prisma 7 rejects bare date strings). [Aug 2026]
- **Roles:** `landlord` (default) and `system_admin`, stored as strings; RBAC via `ROLE_GRANTS`. Multi-user from day one.
- **Auth:** Clerk with just-in-time user provisioning (no webhook in local dev). The Clerk CLI can't run here (needs AVX2); set Clerk up by hand. [Aug 2026]
- **Files:** private R2 bucket, presigned upload and download URLs only, keys prefixed by the owning record (`leases/{leaseId}/`), never a stored public URL. Credentials only in `backend/.env`. Bucket CORS is set in the Cloudflare dashboard (the API token can't); add the production origin at deploy. [Aug 2026]
- **Finances:** a manual ledger, no scheduler. One real payment is one `Income` row; split allocations are `IncomeAllocation` children. Rent Tracker is compute-on-read and rent-first; a late fee is never reported as rent owed, and bookkeeping never decides eviction eligibility. Maintenance costs aren't auto-linked to expenses. [Aug 2026, 2026-09-26]
- **Deleting:** Tenant, Lease, Income, Expense, MaintenanceRequest and MaintenanceSchedule soft-delete (`deleted`/`deletedAt`, `POST /:id/restore`); never reintroduce delete-blocking. Property Specs hard-delete (they have retire/replace). Property archiving is a live flag, and child records are hidden by query-time joins, never a copied flag. `?deleted=all` bypasses every hiding filter. Property Delete shows only when `canDelete`. [Aug 2026]
- **Tenants:** no separate Applicant model (a Tenant applies to one property); moving a tenant copies it with `previousTenantId`, never re-points `propertyId`. Occupants, pets and vehicles belong to the Tenant. [Aug 2026]
- **Pages:** full CRUD for a domain lives in one place; the property page shows a read-only snapshot plus a link. The Dashboard and property page share status computation (`domainStatus.js`), not UI. Back links use `BackLink` (browser history). [Aug 2026]
- **Data-model conventions:**
  - `Deposit` is the held-money ledger (`SECURITY`/`PET`, one of each per lease), separate from the lease's promised amount.
  - Expense categories keep REPAIRS separate from MAINTENANCE, and use LANDSCAPING (not lawn) and LEGAL.
  - A unit in a multi-unit building is its own `Property`, with `address2` holding the unit number; the real multi-unit model is still an open question.
  - `Property.insuranceNotes` is a stopgap until the Insurance module exists; don't add more insurance fields.
  - Vendors are scoped to the user, not a property.
  - A tenant must be APPROVED before joining a lease. [Aug 2026]
- **Property attributes** are free text, except `forCauseEvictionExemption`, which is a validated fixed set because code reads it. [Aug 2026]
- **Search:** `word_similarity()`, a nickname dictionary for first names, no GIN indexes at this scale. [Aug 2026]
- **Lease builder:**
  - `LeaseClause` snapshots the clause at attach time; never make it a live reference.
  - `group` is a string validated against `clauseGroups.js`, and numbering is computed at read time.
  - No single-clause special flags; prefer self-conditional clause text plus the default-clause mechanism.
  - `{{variables}}` resolve only from real linked data; `[bracketed prompts]` are for hand fill-in.
  - Research metadata stays in `clauseResearchMetadata.js`, never on the template objects, which `GET /api/clause-templates` exposes.
  - Blank `states` on a provided template means "verified nowhere" (`treatBlankAsUniversal: false`); personal clauses keep blank = everywhere.
  - `supersedes` hides the parent in a matching state.
  - Choice groups are enforced even on manual attach. The CO for-cause variants are picked by a property-fact filter on the automated paths, and since 2026-10-01 share choice group `co-part13-coverage`. Fact-driven pairs share a choice group (SOP rule 6). [Aug 2026, 2026-09-18/19, 2026-09-24, 2026-10-01]
- **pdfkit landmines** (`generateLeasePdf.js`): restore `_font`/`_fontSize` after drawing the watermark, and pass `{ lineBreak: false }` for footer text. [Aug 2026]

### Clause library and state research
- Research is done by Taylor with Claude Desktop, following `lease-clause-sop.md`; Claude Code syncs each handoff. The sync steps are the SOP's Part 5. Report status item by item, never just "synced". [2026-09-19, 2026-09-27, 2026-09-28]
- `lease-clauses.csv` is canonical, including verification status and dates; the per-state citations files are companions. Every active row has a status. Trust the CSV over a log's prose. [2026-09-13, 2026-09-25]
- Edit the CSV with a byte-exact round trip (`lease-clauses.csv` is CRLF; citations files vary, so preserve each file's line endings). Parallel state chats hand back delta CSVs with all 17 columns. [2026-09-27, 2026-09-29]
- Merge a Desktop delta with `scripts/clause-library/merge-delta.py` against the base it was staged from, never by whole-row replacement; it applies only that state's tag and note segment to shared rows and refuses the rest. [2026-09-30]
- Never restage a Desktop folder Taylor may already be using; restage only unstarted states, and ask if unsure. Staged prompts carry a staged-at time and row count. [2026-09-30]
- A library-wide rewrite (scrub, split, consolidation) is diffed against its sources and must not change what the text claims or drop a condition (SOP rule 78). [2026-09-30]
- A lawful option the library declines still gets an education row saying it exists, why it isn't offered, and that the landlord can add their own clause (SOP rule 54). [2026-10-01]
- Re-read a section before trusting a summary of it, and attach each qualifier to its own sentence (SOP rule 79). [2026-10-01]
- New rows use existing group names: lease clauses only `CLAUSE_GROUPS`, education rows the groups already in use; remap any other at sync. [2026-10-01]
- Desktop may create new `{{variables}}`; the kickoff lists existing ones for reuse, and new ones go to backlog M.14 at sync. [2026-09-30]
- `CLAUSE_GROUPS` is a closed list; remap an outside group at generation rather than growing it. [2026-09-13]
- Every lease clause passes the three-bucket test and records `lease_clause_basis`. [2026-09-29]
- A topic a state's log answers without a row (rule 27) gets its row at sync, drafted from the log's search record with the controlling section read. [2026-10-02]
- One subject per row, keyed by a normalized `topic_key`; a companion clause keeps its own key. [2026-09-29]
- A shared-row edit is either uniform or state-driven, is noted in every tagged state's log, and is checked against each tagged state before merge. [2026-09-24, 2026-09-29]
- One decision log and one citations file per state. [Aug 2026, 2026-09-13]
- Primary official text only; a secondary source is a lead, however many agree. [Aug 2026]
- **Guards run at every sync:**
  - `python3 scripts/clause-library/check-gap-discovery.py --all`
  - `python3 scripts/clause-library/check-checklist-reconciliation.py`
  - `python3 scripts/clause-library/check-clause-basis.py`
  - `python3 scripts/clause-library/check-section-pointers.py` [2026-10-01]
  - `node scripts/legal-watch/checkConfigIds.js`
  - Plus the statute spot-check: about 5 high-stakes rules read against official text. [2026-09-27 to 2026-09-29]

### Legal watch
- One workflow per state (`.github/workflows/legal-watch-<st>.yml`) run by `scripts/legal-watch/checkCitations.js`, configured in `stateConfig.js`. The `extractSections`/`buildQuery` hooks cover multi-code or year-like numbering. [2026-09-18, 2026-09-24]
- LegiScan searches always pass `year=1`. [2026-09-14]
- **Monthly, one state per day:** the Nth state in `SCHEDULE_ORDER` (`stateConfig.js`) runs on day ((N-1) % 28) + 1 at 13:00 UTC, an hour later for each wrap past 28. A new state goes at the end of the list, and its workflow uses `cronFor()`; `checkConfigIds.js` checks every cron. [2026-09-29]
- **Self-seeding:** a state or section with no history records its first run without emailing, so no manual seed is needed; a new section in a seeded state seeds itself too. Pending bills are re-fetched only when LegiScan's change marker moves, until they're enacted, vetoed or dead. [2026-09-29]
- **Budget:** from 2026-10-01 the free tier is 10,000 queries a month and a rate limit tighter than its documented 2 requests a second (CO's 2026-10-01 run got 429s at 600 ms), so the script spaces calls 1 second apart, retries a 429 or 503 with backoff, and emails an "incomplete" notice if checks still fail; jobs time out at 60 minutes. Monthly runs for 21 states cost about 2,500–3,500; a new state's first run costs roughly 300–2,000 more, so add one or two states a month. Don't trigger several state-writing runs at once. [2026-09-28, 2026-09-29, 2026-10-01]
- Failure notices go by Resend to the alert address (a workflow step calls `--notify-failure`); GitHub's own Actions emails are off. Every alert email credits LegiScan (CC BY 4.0). [2026-09-29]
- A section created by a bill can't be found by its own number until a later bill amends it. [2026-09-25]
- Alerts go to steinoakllc@gmail.com through a Resend account on that address; change the recipient and the account together. [2026-09-24]

## Scope boundaries
- No separate landscaping module (Property Specs → Exterior, plus Maintenance). Tenant renter's insurance lives on the Tenant, not in Insurance. No billing/Stripe or tenant-portal UI yet, but keep `userId`/`organizationId` on records and design for a tenant portal. No plant database. Property Specs supports the landlord workflow and mustn't become its own app.
- Backend first: build and test routes before UI. Sensitive files go to R2, and the EIN and similar identifiers are encrypted at rest.
- Legal Tracker is last in the v2 order (legal-accuracy risk) and starts Colorado-only.

## Taylor's real-world lessons
Do not add to this list without Taylor's input.
1. **Lease clause visibility in court:** magistrates want the exact clause text, not a summary. That's why the clause library exists.
2. **Early termination:** tenants abandoned a lease that had no early-termination penalty. Flag leases missing one.
3. **Move-in documentation:** photograph and video everything and get written acknowledgment; the move-out comparison is the deposit defense.
4. **Touch-up paint storage:** always note where leftover paint is stored.
5. **Spare flooring:** keep 2–3 spare boxes per floor type; flag when spare stock hits zero.

## Where things live
| File | What's in it |
|---|---|
| `docs/backlog.md` | All open work: standing backlog, known issues, the October legal-watch checks, Addendum M builder gaps (M.1–M.14) |
| `docs/history.md` | The full build log and decisions log with reasoning (read it before changing something whose reason you don't know) |
| `docs/product-spec.md` | Product design: v2 feature specs, data-model notes, UI principles, AI plan, nationwide coverage plan, Manora research |
| `lease-clause-sop.md` | The state-research procedure (Desktop follows it; Part 5 is Claude Code's sync) |
| `lease-clause-topics.md` | Generated topic reference; questions in `scripts/clause-library/topic-questions.csv` |
| `lease-clause-decision-log-<ST>.md`, `lease-clause-citations-<ST>.csv` | Per-state research record and citations |
| `lease-clause-decision-log-architecture-review.md`, `lease-clause-decision-log-named-topic-checklist.md` | History only (retired 2026-09-29) |

## Session checklists
**Start:** read this file; check `git log --oneline -10`; run the backend tests; ask Taylor what to work on before writing code.

**End** (when Taylor asks to update CLAUDE.md):
1. Update Current focus.
2. Add a dated "what we built" entry to `docs/history.md`, not here.
3. Add each new decision to `docs/history.md`'s decisions log with its reasoning. If it's a rule still in force, add one line here too, with its date.
4. Put new open items in `docs/backlog.md`.
5. Update the date below and remind Taylor to commit.

Keep this file short: if a section grows past a few lines of rules, move the detail to `docs/` and leave a pointer.

*Last updated: 2026-10-03 (MI, IA, NM, MT and NY synced, states #28-32; all eleven pending retros synced; SOP 1.34; end-of-run circle-back in progress, AL done).*
