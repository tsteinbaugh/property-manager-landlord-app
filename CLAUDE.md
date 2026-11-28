# CLAUDE.md — Steinoak (property manager SaaS)

> Loaded at the start of every session, so it holds only what's needed every day: what the project is, how to run it, the rules still in force, and what's next. Everything else lives in the files listed under "Where things live". Each rule's reasoning is in `docs/history.md` (decisions log, under the date shown).

## 🎯 Current focus

- **Where things stand (2026-11-27):** the lease clause library covers all 50 states, DC, Puerto Rico, Guam, the U.S. Virgin Islands, American Samoa and the Northern Mariana Islands. Every jurisdiction has a VERIFIED row for each of the 370 topics; the one open row is `edu-paid-in-full-checks-pr`. SOP 2.18. Every jurisdiction has a monthly legal watch; the five territories' watches read official sites (days 24-28, from December 2026). Each state's research history is in `docs/history.md`; open items are in `docs/backlog.md`. Landlord-facing text carries no research or team notes (2026-11-27 pass); its leftovers are in `docs/backlog.md` ("After the 2026-11-27 team-notes pass").
- **Legal-watch calendar:** **IL's schedule is on (2026-11-12), MO's (2026-11-26; first run December 25), IN's (2026-11-27; first run December 26); after December 27, OK's; after January 28, MI's; after February 1, IA's; after March 2, NM's; after April 3, MT's; after May 4, NY's; after June 5, 2027, WI's; after July 6, 2027, WA's; after August 7, 2027, OR's; after September 8, 2027, KY's; after October 9, 2027, WV's; after November 10, 2027, MD's; after December 11, 2027, MA's; after January 12, 2028, CT's; after February 13, 2028, RI's; after March 14, 2028, NH's; after April 15, 2028, ME's; after May 16, 2028, VT's; after June 17, 2028, DE's; after July 18, 2028, AK's; after August 19, 2028, HI's; after September 20, 2028, LA's; after October 21, 2028, AR's; after November 22, 2028, MS's; after December 23, 2028, DC's.** Missouri's December 25 run is the first from the moved `lease-clause-library/citations/`; check its result, and Indiana's on December 26.
- **Other dated checks:** LegiScan totals after November's (IL, ID) and December's (MO, IN) first runs; the subject watch (on in CO, WY, KS) after two monthly runs: cost and noise, then add two or three states a month; Oregon's first manual item, December 18, 2026; DC's 2027 checks (backlog item 33); the SCRA rent limit each January (backlog item 13); retry Puerto Rico's OGP library (bvirtualogp.pr.gov) now and then for Ley 208-1995 and Ley 210-2015.
- **Parked for Taylor:** Lease PDF formatting (`docs/pdf-formatting.md`; Colorado's two habitability statements need 12-point bold and print 11-point); the LegiScan budget question (backlog item 10); the Virgin Islands plain-language front page (M.15); a land-status attribute for American Samoa and Northern Mariana Islands properties (M.16); Spanish leases (multi-language support); before shipping, if local and court research aren't done, bring back a line on what the education covers (backlog, "Before shipping"). Deploying is deliberately on hold.
- **Desktop staging:** don't stage further Desktop folders until Taylor says (usage, 2026-10-31).
- **Next focus: the clause `[bracketed prompts]` are out of every clause (bracket sweep, 2026-11-27):** notes removed or moved to "About this clause", blanks and choices asked under the clause, 60 legal limits enforced, every state and the shared clauses (`~/bracket-sweep/`). Left (`docs/backlog.md`, "Bracket sweep leftovers" and "Questions that may belong on a page"): Taylor's decisions on the 247 page-question candidates; five limits behind Lexis and SUTRA; a browse page for education with no clause. Formatting and placement is its own effort, not scheduled: `docs/pdf-formatting.md` (Taylor, 2026-11-26).
- **Research day, Tuesday evening to Wednesday 10 PM only (Taylor, 2026-11-24, 2026-11-26):** when Taylor says "research day" (or "local day"), or starts it from the Research Day app, run two tracks: local law (`docs/local-law.md`; finish the Colorado pilot first) and court research for the Legal Tracker (`docs/court-research.md`, approved 2026-11-26; Weld County Court in the pilot). On main, up to four agents, each message tagged with its track; the routine is in `docs/local-law.md`. Overnight, log what needs Taylor and work on something else. Other days stay on the focus above; Taylor works on the app all week.
- **Standing backlog** (no fixed order; ask Taylor what's next): `docs/backlog.md`.

## Project

A SaaS web app for landlords to manage rental properties end to end, built from Taylor's real landlord experience. Working name **Steinoak** (placeholder). Owner: Taylor (Steinbaugh Estates LLC), solo; he drives product decisions but doesn't write code. Goal: use it personally, then sell it to other landlords. Logos in `logos/`; font Poppins.

**State:** v1 MVP complete (tagged `v1.0.0`: Entities, Properties, Tenants + Leases, Finances, Maintenance, Clerk auth). Also built: Property Specs, Lease Builder (clause library, PDF generation), Rent Tracker, property archiving and soft delete, Dashboard, global search. The lease clause library is verified for all 50 states, DC, Puerto Rico, Guam, the U.S. Virgin Islands, American Samoa and the Northern Mariana Islands (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ, GA, NC, SC, TN, VA, AL, PA, UT, IL, ID, MO, IN, OK, MI, IA, NM, MT, NY, WI, WA, OR, KY, WV, MD, MA, CT, RI, NH, ME, VT, DE, AK, HI, LA, AR, MS, DC, PR, GU, VI, AS, MP), each with a decision log and a citations file, and every one with a monthly legal-watch workflow (the territories' read official sites instead of LegiScan).

## Stack and commands

React + Vite + Tailwind v4 + React Router (`frontend/`); Node + Express + Prisma + PostgreSQL (`backend/`); Clerk auth; Cloudflare R2 storage. Vercel/Railway hosting not set up yet.

- Backend tests: `cd backend && npm test` (Vitest against the real `property_hq_test` Postgres database, never SQLite). 552 tests at last count.
- Frontend build: `cd frontend && npm run build`.
- Schema change: `npx prisma migrate dev`, then `npx prisma generate` (not automatic here), then apply to the test DB with `DATABASE_URL=<test db url> npx prisma migrate deploy`. Rename an enum value with a hand-written `ALTER TYPE ... RENAME VALUE` migration. [Aug 2026]
- Clause library (files in `lease-clause-library/`; scripts run from the repo root): `python3 scripts/clause-library/generate.py lease-clause-library/lease-clauses.csv backend/src/lib backend/src/lib` rebuilds `clauseTemplates.js`, `clauseResearchMetadata.js`, `clauseGuidance.js` and `education/<ST>.json` (it also reads `clause-guidance.csv`: each clause's "Use when" line and its education links); `python3 scripts/clause-library/build-topic-reference.py` rebuilds `lease-clause-topics.md`. Never hand-edit those files. New state: `python3 scripts/clause-library/stage-kickoff.py <ST> "<State Name>"` stages `~/Desktop/<state>-kickoff/` from `docs/kickoff-template.md`; fill in the citation format and leads by hand before handing it to Taylor. Targeted checks for [Retro] rules: `python3 scripts/clause-library/stage-retro-checks.py [ST ...]` stages `~/Desktop/retro-checks/` from the conformance table's "·" cells plus `scripts/clause-library/retro-extras.csv`; restage only states Taylor hasn't started. Merge any Desktop delta with `python3 scripts/clause-library/merge-delta.py DELTA.csv ST --base <rev>` (base = the commit whose CSV the pass was given; `--dry-run` first): it applies only that state's tag and note segment to shared rows and refuses anything else.
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
- **Ownership:** User → Entity → Property. An Entity is a property's owner (the user personally or an LLC), shown on screen as Owners. Facts about where the owner is live on the owner (a person's home, a business's principal office); Your account holds only facts about the user. [2026-11-26] `userId` and `entityId` are derived server-side from the parent, never trusted from the client; `Income`, `Expense`, `Deposit` and maintenance records store `entityId` directly. Default "Self / Personal" entity per user; its `legalName`/`entityType` are locked. [Aug 2026]
- **Testing and DI:** `vi.mock()` doesn't work in this CommonJS setup. `createApp(overrides)` injects Clerk; routers that call external services are factories (`createLeasesRoutes({ r2 })`). Resource routers only read `req.currentUser`. [Aug 2026]
- **Dates:** list date fields in the route's `DATE_FIELDS` and use `pickFields` (Prisma 7 rejects bare date strings). [Aug 2026]
- **Roles:** `landlord` (default) and `system_admin`, stored as strings; RBAC via `ROLE_GRANTS`. Multi-user from day one.
- **Auth:** Clerk with just-in-time user provisioning (no webhook in local dev). The Clerk CLI can't run here (needs AVX2); set Clerk up by hand. [Aug 2026]
- **Files:** private R2 bucket, presigned upload and download URLs only, keys prefixed by the owning record (`leases/{leaseId}/`), never a stored public URL. Credentials only in `backend/.env`. Bucket CORS is set in the Cloudflare dashboard (the API token can't); add the production origin at deploy. [Aug 2026]
- **Finances:** a manual ledger, no scheduler. One real payment is one `Income` row; split allocations are `IncomeAllocation` children. Rent Tracker is compute-on-read and rent-first; a late fee is never reported as rent owed, and bookkeeping never decides eviction eligibility. Maintenance costs aren't auto-linked to expenses. [Aug 2026, 2026-09-26]
- **Deleting:** Tenant, Lease, Income, Expense, MaintenanceRequest and MaintenanceSchedule soft-delete (`deleted`/`deletedAt`, `POST /:id/restore`); never reintroduce delete-blocking. Property Specs hard-delete (they have retire/replace). Property archiving is a live flag, and child records are hidden by query-time joins, never a copied flag. `?deleted=all` bypasses every hiding filter. Property Delete shows only when `canDelete`. [Aug 2026]
- **Tenants:** no separate Applicant model (a Tenant applies to one property); moving a tenant copies it with `previousTenantId`, never re-points `propertyId`. Occupants, pets and vehicles belong to the Tenant. [Aug 2026]
- **Pages:** full CRUD for a domain lives in one place; the property page shows a read-only snapshot plus a link. The Dashboard and property page share status computation (`domainStatus.js`), not UI. Back links use `BackLink` (browser history). [Aug 2026]
- **Page sections:** the property and lease pages use one headed card per section, each with its own Edit; the property page's top Edit opens every section. [2026-11-23]
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
  - Parking: what's physically there is on the property; spaces assigned, charge and fee are on the lease, which can't assign more spaces than the property has. [2026-11-23]
  - `LeaseClause` snapshots the clause at attach time; never make it a live reference. (To be replaced by drafts that stay current and a lock at signing, built together: `docs/backlog.md`, "Draft leases stay current". In force until then.) [Aug 2026, 2026-11-24]
  - A provided clause on a lease can't be edited; "Copy to customize" is the way to change one. [2026-11-24]
  - **Bracketed prompts:** a note to the landlord never prints. A blank or choice becomes a `{{variable}}` in `clauseFields.js`: filled from stored data if it exists, else asked under the clause (place `lease.clause`), with no new property-page fields. An unpicked `choice` holds the PDF, and so does a blank in a Required clause; other blanks only warn, in every state (Arizona too: filling blanks is the landlord's job, Taylor). [2026-11-27] A legal limit (`limits`, by state) is refused with its reason, only after reading its statute. A passage that prints for one answer is `{{#name:value}}...{{/name}}`. [2026-11-24]
  - "About this clause" (the "When to use this clause" line and the state's linked education, from `clause-guidance.csv`; a state joins `REVIEWED` in `generate.py` once its notes and links are reviewed) shows in the picker, on attached clauses and in the Clause Library, never in the PDF. [2026-11-24]
  - Education text carries no "not legal advice" or "not reviewed by a lawyer" lines, and nothing in the app may imply a provided clause meets the law. The Clause Library page's one line stays. [2026-11-24]
  - `group` is a string validated against `clauseGroups.js`, and numbering is computed at read time.
  - No single-clause special flags; prefer self-conditional clause text plus the default-clause mechanism.
  - `{{variables}}` resolve only from real linked data or an answer asked under the clause.
  - Outside a Required clause, a blank `{{variable}}` only warns, in the builder's blanks box, and prints as a line; a hidden question never lists or holds a blank. Every variable in the library needs a field in `clauseFields.js` or a `SOURCE` entry in `clauseVariables.js`, and one name means one thing in every state. [2026-11-23]
  - Research metadata stays in `clauseResearchMetadata.js`, never on the template objects, which `GET /api/clause-templates` exposes. The exception is the display tag `generate.py` derives from rule_type (`tag`: REQUIRED, LEGAL_DUTY, RECOMMENDED or OPTIONAL; every clause has one, a conditional clause the one it has when it applies), `alwaysDefault` and `defaultOn`. [2026-11-21, 2026-11-22]
  - A shared clause that is a duty in only some of its states is listed in `backend/src/lib/stateScopedTags.js` (elsewhere it counts as Recommended); a sync that tags such a clause in a new state checks it. [2026-11-23]
  - Tags show only in the Clause Library, never in the picker or the PDF. Clause titles never name a jurisdiction or say "(Optional)"; the tags carry that. [2026-11-21]
  - Tags follow SOP rule 56's test, "if the landlord left this clause out, would they be breaking the law?": Required = the law requires the text in the lease itself; Legal duty = the law requires giving the tenant the information, but not in the lease; text required only if the landlord uses a term (a late fee) is Optional. The basis bucket (rule 55) decides whether a row is a clause, never its tag. Tag explanations never say a clause protects the landlord (liability). [2026-11-22]
  - A Required clause that applies to a lease can't be removed from it. The lease PDF waits until every fill-in-the-gaps question that decides a Required clause is answered, then for every Required clause that applies to be on the lease; Legal duty questions and clauses only warn. [2026-11-22]
  - Student and servicemember are blank-start Yes/No questions on every tenant and occupant, asked in the builder only where a clause depends on them; the nonresident-alien question is Alaska-only (asking about immigration or citizenship status is restricted in some states, e.g. California). [2026-11-22]
  - A Legal duty clause that always applies (`defaultOn`) is included by default but can be unticked; the opt-out is a `DefaultClauseTemplate` row with `excluded: true`. [2026-11-22]
  - A clause the law requires is always included by "Add my default clauses" and can't be unticked: `alwaysDefault` (required, not conditional, not a pick-one alternative), or a Required clause whose applicability rule in `clauseApplicability.js` says this lease needs it. A Legal duty clause whose rule applies is included unless unticked, like `defaultOn`. Rules read stored facts (year built, deposit, pets, dates); a missing fact counts as "applies", except where the clause would be wrong in a lease that doesn't need it (NC's short-stay tax). Any fact a rule reads (including a hiding rule) uses a Yes/No that starts blank, never a plain checkbox; every Yes/No in the app is the shared `YesNo` radio control (`frontend/src/components/YesNo.jsx`). [2026-11-21, 2026-11-22, 2026-11-23]
  - The lease builder's picker lists only the lease's own state, grouped by section. The Clause Library offers only the landlord's property states; "All states" and other states are development-only (`import.meta.env.DEV`). [2026-11-21]
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
- Where Claude Code can reach a state's official site, stage the kickoff with the code downloaded as a dated zip plus SHA-256 manifest (SOP rule 24), including the session laws, constitution, agency and court rules and any official model lease it can reach; Desktop uses it only if its own tools can't reach the site. One worker, a pause between requests, back-off on errors. [2026-10-09, 2026-10-15]
- Where an official site blocks Claude Code's shell, read it in Taylor's Chrome through Claude in Chrome (`/chrome`), one page at a time; never change the user agent to get past a block. Known blocks: mass.gov, nysenate.gov, Lexis (the AR, MS and VI codes). Puerto Rico's Department of State registry is at `app.estado.pr.gov`; Mississippi's bill site needs the GlobalSign intermediate added to curl's CA bundle. [2026-11-13]
- Corpora are built from the official site in a durable `~/<state>-corpus-build/` folder (never the scratchpad), with resumable crawls and the build scripts in its `tools/` (SOP rule 24). Keep `~/kentucky-corpus-build/` and `~/west-virginia-corpus-build/`. [2026-11-19]
- The independent check runs at most 3 rounds and stops early on a clean round; rows edited after the last check are listed in the log's §13, and Claude Code reads them against the statute at sync (SOP rule 80). [2026-10-08]
- A sync merges only a state's final delta, and never one whose row count doesn't match its own log (the chat re-delivers). [2026-10-24]
- Federal education rows are tagged in every jurisdiction (a new jurisdiction tags them at research). When reading a statute, keep its exceptions: the 2026-11-21 accuracy check found rows that dropped them. [2026-10-04, 2026-11-20, 2026-11-21]
- A library-wide rewrite (scrub, split, consolidation) is diffed against its sources and must not change what the text claims or drop a condition (SOP rule 78). [2026-09-30]
- A lawful option the library declines still gets an education row saying it exists, why it isn't offered, and that the landlord can add their own clause (SOP rule 54). [2026-10-01]
- Local law never overrides state law: a local row only adds, and the "Exception due to local rule" note marks where the two don't easily mesh; never write that a local rule makes a state row untrue. [2026-11-26]
- Research and team notes (what was searched, sourcing, process words, rule numbers, row ids) go in `notes`, never in `bodyText` or a title; a moved finding is restated plainly and no wider than the sources read, and a question only case law could settle reads "is for the courts". [2026-11-27]
- The `scope` topic is backend only (`BACKEND_ONLY_TOPICS` in `generate.py`), except the rental-situation rows in `SHOWN_ANYWAY`; what a landlord needed from it is decided by the app (Tennessee's county picks, Kentucky's both-regime clauses, `warnWhen` warnings on catalog questions). [2026-11-27]
- Read the statute itself before changing a legal row, even to correct one that looks unsupported (a right penalty was removed on 2026-11-24). [2026-11-24]
- Re-read a section before trusting a summary of it, and attach each qualifier to its own sentence (SOP rule 79). [2026-10-01]
- New rows use existing group names: lease clauses only `CLAUSE_GROUPS`, education rows the groups already in use; remap any other at sync. [2026-10-01]
- Desktop may create new `{{variables}}`; the kickoff lists existing ones for reuse, and new ones go to backlog M.14 at sync. [2026-09-30]
- `CLAUSE_GROUPS` is a closed list; remap an outside group at generation rather than growing it. [2026-09-13]
- Every lease clause passes the three-bucket test and records `lease_clause_basis`. [2026-09-29]
- Close every NEEDS_REVIEW row at sync: read the rule or statute it waits on; a doubt that only case law could settle is stated in the row with the cautious course and the row is VERIFIED; a lease clause is redrafted to work under every reading or switched off. Only an unreachable primary source keeps a row open. [2026-10-15]
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
  - `python3 scripts/clause-library/check-topic-coverage.py` (every jurisdiction has a row for every topic) [2026-11-21]
  - `python3 scripts/clause-library/check-clause-titles.py` (no title names a jurisdiction or says "(Optional)"; `--fix` cleans them) [2026-11-21]
  - `python3 scripts/clause-library/check-brackets.py` (no `[bracketed prompt]` or note to the landlord in clause text) [2026-11-27]
  - `node scripts/legal-watch/checkConfigIds.js`
  - Plus the statute spot-check: about 5 high-stakes rules read against official text. [2026-09-27 to 2026-09-29]

### Legal watch
- One workflow per state (`.github/workflows/legal-watch-<st>.yml`) run by `scripts/legal-watch/checkCitations.js`, configured in `stateConfig.js`. The `extractSections`/`buildQuery` hooks cover multi-code or year-like numbering. [2026-09-18, 2026-09-24]
- LegiScan searches always pass `year=1`, except the subject watch's `getSearch`, which passes `year=3` so a law enacted in a recent session isn't missed; it seeds on its first run, keeps relevance of 50 or more and alerts only on enacted bills. [2026-09-14, 2026-11-21]
- A state's watch must be able to query every law its citations file cites (New York's `NY_LAW_NAMES`); a sync that cites a new law adds it. [2026-11-16]
- **Monthly, one state per day:** the Nth state in `SCHEDULE_ORDER` (`stateConfig.js`) runs on day ((N-1) % 28) + 1 at 13:00 UTC, an hour later for each wrap past 28. A new state goes at the end of the list, and its workflow uses `cronFor()`; `checkConfigIds.js` checks every cron. [2026-09-29]
- **Self-seeding:** a state or section with no history records its first run without emailing, so no manual seed is needed; a new section in a seeded state seeds itself too. Pending bills are re-fetched only when LegiScan's change marker moves, until they're enacted, vetoed or dead. [2026-09-29]
- **Budget:** from 2026-10-01 the free tier is 10,000 queries a month and a rate limit tighter than its documented 2 requests a second (CO's 2026-10-01 run got 429s at 600 ms), so the script spaces calls 1 second apart, retries a 429 or 503 with backoff, and emails an "incomplete" notice if checks still fail; jobs time out at 60 minutes. A month's runs cost about 2,500–3,500 queries (21 states, October 2026; recheck as the held states start); a new state's first run costs roughly 300–2,000 more, so add one or two states a month. Don't trigger several state-writing runs at once. [2026-09-28, 2026-09-29, 2026-10-01]
- Failure notices go by Resend to the alert address (a workflow step calls `--notify-failure`); GitHub's own Actions emails are off. Every alert email credits LegiScan (CC BY 4.0). [2026-09-29]
- A section created by a bill can't be found by its own number until a later bill amends it. [2026-09-25]
- **Territories (no LegiScan):** `sourceChecks` read each territory's legislature and code compiler with plain page reads, seeded on the first run, new items emailed; never a site's internal data endpoints, a changed user agent or a workaround, so an unreadable source becomes a manual item. Guam's `GU_CITED_CHAPTERS` and American Samoa's `AS_LAW_PAGES` need updating when a sync cites a new chapter or a new Legislature starts. [2026-11-21]
- Alerts go to steinoakllc@gmail.com through a Resend account on that address; change the recipient and the account together. [2026-09-24]

## Scope boundaries
- No separate landscaping module (Property Specs → Exterior, plus Maintenance). Tenant renter's insurance lives on the Tenant, not in Insurance. No billing/Stripe or tenant-portal UI yet, but keep `userId`/`organizationId` on records and design for a tenant portal. No plant database. Property Specs supports the landlord workflow and mustn't become its own app.
- Manufactured-home park lot (site) rentals are permanently out of scope; renting out a manufactured home the landlord owns is an ordinary lease and is covered. Landlord text says park lots "have their own rules", never that the library doesn't cover them. [2026-11-27]
- Backend first: build and test routes before UI. Sensitive files go to R2, and the EIN and similar identifiers are encrypted at rest.
- Legal Tracker is last in the v2 order (legal-accuracy risk) and starts Colorado-only.

## Taylor's real-world lessons
Do not add to this list without Taylor's input.
1. **Lease clause visibility in court:** magistrates want the exact clause text, not a summary. That's why the clause library exists.
2. **Early termination:** tenants abandoned a lease that had no early-termination penalty. Flag leases missing one.
3. **Move-in documentation:** photograph and video everything and get written acknowledgment; the move-out comparison is the deposit defense.
4. **Touch-up paint storage:** always note where leftover paint is stored.
5. **Spare flooring:** keep 2–3 spare boxes per floor type; flag when spare stock hits zero.
6. **Small-claims venue when tenants move out of state (2026-10):** a Colorado small-claims magistrate ended Taylor's claim for unpaid rent and damages because the former tenants had moved to Florida, even though the property is in Colorado. She said a security deposit dispute is an exception, but a claim for amounts beyond the deposit is not. Legal Tracker must check where a former tenant can be sued before a case is filed, and keep the tenant's current state and forwarding address on file. Taylor is deciding his next steps separately (Florida small claims, a Colorado civil case or collections) and will report back.

## Where things live
| File | What's in it |
|---|---|
| `docs/backlog.md` | All open work: standing backlog, known issues, legal-watch run checks, Addendum M builder gaps (M.1–M.16) |
| `docs/history.md` | The full build log and decisions log with reasoning (read it before changing something whose reason you don't know) |
| `docs/product-spec.md` | Product design: v2 feature specs, data-model notes, UI principles, AI plan, nationwide coverage plan, Manora research |
| `lease-clause-library/` | The lease clause library: `lease-clauses.csv` (every lease clause and landlord-education row), `lease-clause-sop.md` (the state-research procedure; Part 5 is Claude Code's sync) and `lease-clause-topics.md` (generated topic reference; questions in `scripts/clause-library/topic-questions.csv`) |
| `lease-clause-library/decision-logs/`, `lease-clause-library/citations/` | Per-state research record (`lease-clause-decision-log-<ST>.md`) and citations (`lease-clause-citations-<ST>.csv`); the architecture-review and named-topic-checklist logs there are history only (retired 2026-09-29) |

## Session checklists
**Start:** read this file; check `git log --oneline -10`; run the backend tests; ask Taylor what to work on before writing code.

**End** (when Taylor asks to update CLAUDE.md):
1. Update Current focus.
2. Add a dated "what we built" entry to `docs/history.md`, not here.
3. Add each new decision to `docs/history.md`'s decisions log with its reasoning. If it's a rule still in force, add one line here too, with its date.
4. Put new open items in `docs/backlog.md`.
5. Update the date below and remind Taylor to commit.

Keep this file short: if a section grows past a few lines of rules, move the detail to `docs/` and leave a pointer.

*Last updated: 2026-11-27 (bracket sweep finished; research notes out of landlord text; scope topic backend only; four statute fixes; NY rent-stabilized warning; TN county picks; Indiana's watch on).*
