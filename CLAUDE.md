# CLAUDE.md — Steinoak (property manager SaaS)

> Loaded at the start of every session, so it holds only what's needed every day: what the project is, how to run it, the rules still in force, and what's next. Everything else lives in the files listed under "Where things live". Each rule's reasoning is in `docs/history.md` (decisions log, under the date shown).

## 🎯 Current focus

- **Where things stand (2026-10-09):** 40 states verified; the retro run finished 2026-10-03; SOP 1.66. Every synced state's history is in `docs/history.md`; per-state open items are in `docs/backlog.md`.
- **Done 2026-10-04:** **Washington (state #34) synced** (196 rows, SOP 1.54). `legal-watch-wa.yml` is held until after July 6, 2027 (first run August 6, day 6 at 14:00 UTC). 
- **Done 2026-10-04:** **Oregon (state #35) synced** (223 rows, SOP 1.58). `legal-watch-or.yml` is held until after August 7, 2027 (first run September 7, day 7 at 14:00 UTC); its first manual item is due December 18, 2026.
- **Done 2026-10-05:** **Kentucky (state #36) synced** (219 rows, SOP 1.61; two tiers: default clauses lawful whether or not a locality adopted the uniform act, Taylor's decision). `legal-watch-ky.yml` is held until after September 8, 2027 (first run October 8, day 8 at 14:00 UTC).
- **Done 2026-10-08:** **West Virginia (state #37) synced** (238 rows, SOP 1.62). `legal-watch-wv.yml` is held until after October 9, 2027 (first run November 9, day 9 at 14:00 UTC). 
- **Usage budget (Taylor, 2026-10-08):** SOP rule 80 caps the independent check at 3 rounds and stops early on a clean round; rows edited after the last check are listed in §13 and **Claude Code reads them against the statute at sync**. Kickoffs carry a usage budget section, and `stage-kickoff.py` attaches `log-format-example.md` (a short extract) instead of two full logs.
- **Done 2026-10-08:** **Maryland (state #38) synced** (386 rows, SOP 1.64), the first state under the usage budget (3 check rounds). The extra review against WI, WA, OR, KY and WV found it complete and consistent: it has more rows because it answered all 337 topics (133 confirmed-absence rows). One fix: the federal Fair Housing Act sentence in `edu-fair-housing-exemptions-md`. `legal-watch-md.yml` is held until after November 10, 2027 (first run December 10, day 10 at 14:00 UTC).
- **Done 2026-10-09:** **Massachusetts (state #39) synced** (394 rows, SOP 1.65). The Maryland-style review found no errors (11 edited-after rows and 13 rules read on malegislature.gov; mass.gov blocks Claude Code, so regulation text rests on the pass's quote check). Three companion clauses re-keyed; its 42 NEEDS_REVIEW rows are left for the consistency pass. `legal-watch-ma.yml` is held until after December 11, 2027 (first run January 11, 2028, day 11 at 14:00 UTC). Canvasses now run at most two agents and save after every topic (rule 27).
- **Done 2026-10-09:** **Connecticut (state #40) synced** (339 rows, SOP 1.66). Sync review read the 21 edited-after rows, the § 47a-25 notice-to-quit waiver Taylor flagged (offered narrowly; Missouri's stays declined, since § 441.070 already needs no notice at a fixed term's end) and the core rules on cga.ct.gov; three targeted fixes. 70 NEEDS_REVIEW rows queued with MA's for the consistency pass. `legal-watch-ct.yml` is held until after January 12, 2028 (first run February 12, 2028, day 12 at 14:00 UTC).
- **In progress (Taylor, Claude Desktop):** **Rhode Island (state #41) research** (kickoff staged 2026-10-09 in `~/Desktop/rhode-island-kickoff/`, from ce0534b, 4,863 rows). At the sync, hold `legal-watch-ri.yml` until after February 13, 2028 (state #41 runs on day 13 at 14:00 UTC; first run March 13, 2028), and give it the Maryland review. Remaining after RI: AK, AR, DE, HI, LA, ME, MS, NH, VT; then DC and the five territories (backlog).
- **End-of-run circle-back: complete (2026-10-04),** including NY's one-item pass. `~/Desktop/circle-back/`, `~/Desktop/ny-circle-back/` and the old `~/Desktop/retro-checks/` can be deleted. `retro-extras.csv` is empty.
- **Open for Taylor (backlog):** whether `early-termination-ks` should be REQUIRED while its parent is RECOMMENDED.
- **Pending shared edits (rule 62): none.** All six merged or resolved by 2026-10-04 (WY's `early-termination` wording, NE's `default-by-tenant-ks-ne` sentence, CO's cost-phrase deletion as the override `default-by-tenant-co` (now CO and NY), AZ's `returned-payments` wording, CA's `surrender-end-of-term` qualifier, MN's `default-by-tenant` no-cure sentence). The vetting tally is at the top of `docs/backlog.md` for the next one.
- **Cross-state decisions (Taylor, 2026-10-04):** one federal row, `edu-cares-act-notice`, is tagged in every verified state (new states tag it at research; Kentucky was tagged and screened at its sync). Three shared edits merged centrally: `smoking-policy` (only Tenant's, an occupant's or a guest's smoking), `no-alterations` (doesn't change who owns an installation the law makes the tenant's), `addendum-precedence` (a document the law says controls, controls).
- **End-of-run consistency pass (after the remaining states):** planned in `docs/backlog.md` (basis gaps, queued fixes, later SOP refinements, the 2026-10-04 cross-state checks). Don't start it before every state is researched.
- **Legal-watch calendar:** **after October 23, uncomment IL's schedule; after November 25, MO's; after November 26, IN's; after December 27, OK's; after January 28, MI's; after February 1, IA's; after March 2, NM's; after April 3, MT's; after May 4, NY's; after June 5, 2027, WI's; after July 6, 2027, WA's; after August 7, 2027, OR's; after September 8, 2027, KY's; after October 9, 2027, WV's; after November 10, 2027, MD's; after December 11, 2027, MA's; after January 12, 2028, CT's.** Check the LegiScan totals after November's (IL, ID) and December's (MO, IN) first runs. The LegiScan budget question is parked for Taylor (backlog item 10).
- **Standing backlog** (no fixed order; ask Taylor what's next): `docs/backlog.md`. Lease PDF first-page layout is parked in M.12 (Taylor). Deploying is still deliberately on hold.

## Project

A SaaS web app for landlords to manage rental properties end to end, built from Taylor's real landlord experience. Working name **Steinoak** (placeholder). Owner: Taylor (Steinbaugh Estates LLC), solo; he drives product decisions but doesn't write code. Goal: use it personally, then sell it to other landlords. Logos in `logos/`; font Poppins.

**State:** v1 MVP complete (tagged `v1.0.0`: Entities, Properties, Tenants + Leases, Finances, Maintenance, Clerk auth). Also built: Property Specs, Lease Builder (clause library, PDF generation), Rent Tracker, property archiving and soft delete, Dashboard, global search. The lease clause library is verified for 40 states (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ, GA, NC, SC, TN, VA, AL, PA, UT, IL, ID, MO, IN, OK, MI, IA, NM, MT, NY, WI, WA, OR, KY, WV, MD, MA, CT), each with a decision log, a citations file and a monthly legal-watch workflow.

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

*Last updated: 2026-10-09 (CT synced, state #40; SOP 1.66).*
