# CLAUDE.md — Property Manager SaaS App
> This file is the project bible. Read it at the start of every session before writing any code.
> It was built from a full product design session capturing real landlord experience.

---

## 🎯 Current focus
> Update this at the start of every session. One or two lines max.
> Example: "Working on Prisma schema for Tenants + Leases. Backend only, no frontend yet."

All six v1 MVP scope items (Entities, Properties, Tenants + Leases, Finances, Maintenance, User auth) are built end-to-end, tagged `v1.0.0`. Since then: global fuzzy/phonetic search, a real architectural fix (Occupant/Pet/Vehicle follow the Tenant instead of the Lease), full add/edit parity on every top-level nav page, **Property Specs (v2)** — 7 categories, By Room / By Category dual view, expense linking, maintenance linking, retire/replace lifecycle — and **Lease Builder (v2) is built, reworked, reviewed against the real signed lease clause-by-clause, and now backed by verified multi-state legal research**: a unified provided+personal clause library — **112 clauses across 28 states**, up from the original 30 — with `{{variable}}` placeholders resolved from the lease's own linked data (including linked Occupant/Appliance/Deposit records, not just Lease/Property/Entity/Tenant fields directly), attaching clauses to a lease as an immutable snapshot, grouped/auto-numbered clauses (e.g. `"3.2"`, never manually assigned), default clauses (mark any clause to auto-attach to every new lease in one click, state-aware), clauses taggable to one or more states (`Clause.states String[]`) with state-specific clauses superseding a redundant universal one when filtered, lease attachments (HOA rules/addenda uploads), and generating a real PDF — DRAFT watermark + logo + a liability disclaimer, flows into the existing document-storage/download UI. Also fixed app-wide: "Back to X" links on detail pages now use real browser history (`BackLink` component) instead of a hardcoded destination, since several pages (Tenant, Lease, Property) are reachable from more than one place. Backend is at 347 tests. **Deploying is deliberately on hold** — Taylor's choice, no forcing function while still using the app locally.

**⚠️ Immediately next session: re-check Finances Automation (Rent Tracker) in the browser before starting anything else.** It's built and all 381 backend tests pass, but Taylor hasn't had a chance to actually click through it live yet — the mid-build architecture fix (see "What's been built") means what's live now is meaningfully different from what was first tested. Committed locally but **deliberately not pushed** — Taylor's call, until it's verified. Push once confirmed good, or report back what's off.

**Table of contents with page numbers on the generated lease PDF — done.** See "What's been built" for the technical detail, including two real rendering bugs it surfaced and fixed in the same file.

**Expanding lease clause state coverage is tabled for now** — Taylor judges the Lease Builder's *functionality* (clause library, snapshotting, numbering, PDF generation) solid, and is going to work on clause *content* (more states, more clauses) themselves, on the side, rather than have this be an active Claude Code work item. The research trail is still there whenever it's picked back up: the state-law research memory (`project_state_law_research_aug2026`) has a whole "explicitly dropped" list of candidates that couldn't be verified against a primary source yet, and "Nationwide jurisdictional coverage plan" below has the full research methodology.

**Current priority order (set 2026-08-18), replacing the old one below until Taylor says otherwise:**
1. **Automate Finances — built 2026-08-19, needs Taylor's browser verification before moving on (see the ⚠️ note above).** Rent Tracker: per-property, compute-on-read, one row per lease-month, status pills, a payment-logging flow with an auto-computed fees-first split, late fee waivers. See "What's been built" for full detail and the real mid-build fix (ledger rows were briefly wrong before being corrected the same session).
2. **Dashboard cleanup/expansion** — `frontend/src/pages/DashboardPage.jsx` is currently minimal (~60 lines). No specific direction captured yet from Taylor beyond "needs work" — ask what it should actually surface before building.
3. **Cleanup of other pages that have gotten cluttered** — Taylor specifically flagged the property page. `PropertyDetailPage.jsx` was already extracted down once this session cycle (see the "reversed read-mostly nav" entry in What's been built) but has apparently accumulated clutter again as more sections (Specs, Income/Expenses, Maintenance) landed on it — look at what's crowding it before assuming the same extraction pattern is the fix.

**Deferred note for whenever real property attributes get built (not urgent, don't act on this yet):** Taylor wants bedroom/bathroom counts on `Property` to actually drive Property Specs — e.g. a property listed with 3 bedrooms and 3 bathrooms should have Specs reflect that (3 bedroom-tagged rooms, 3 bathroom-tagged rooms), not just be a free-floating number elsewhere in the app. This is a real design constraint on the property-attributes feature (memory-worthy on its own, not just a CLAUDE.md line — see `project_property_attributes_specs_linkage`), not a decision to build now.

**Standing backlog, lower priority than the above:** Move-in/Move-out Inspections, Legal Tracker (Colorado-only first, per "Nationwide jurisdictional coverage plan" below), a maintenance-supplies inventory idea (memory `project_maintenance_supplies_inventory_idea`), expanding lease clause state coverage (tabled, see above), and **property archiving** (surfaced 2026-08-19 while seeding Rent Tracker demo data — see Known issues below for the underlying bug this was found alongside). Full original v2 roadmap reasoning still in memory `project_v2_roadmap_priority` for reference, though the ordering above supersedes it for now.

---

## ✅ What's been built
> Keep a running log of completed work. Add to this at the end of every session.
> Format: `[Date] — What was built / what was confirmed working`

- [x] [Aug 2026] — Local Postgres dev setup: `tsteinbaugh` role + `property_hq_dev` and `property_hq_test` databases created.
- [x] [Aug 2026] — Prisma schema: `User`, `Entity`, `Property` models with the User → Entity → Property ownership hierarchy. First migration applied to both dev and test databases.
- [x] [Aug 2026] — Express app skeleton (`backend/src/app.js`, `backend/index.js`) with `GET /health`.
- [x] [Aug 2026] — `properties.routes.js` — full CRUD (create/list/get/update/delete), mounted at `/api/properties`. `userId` on a property is derived server-side from its Entity, not trusted from the client. 8 Vitest + Supertest tests passing against the real `property_hq_test` Postgres database.
- [x] [Aug 2026] — Clerk authentication wired into the backend. `/api/properties` now requires a valid Clerk session (`clerkMiddleware()` + a custom `getAuth()` check that returns JSON 401s, since Clerk's own `requireAuth()` is built for redirecting browsers, not APIs). First authenticated request from a given Clerk user just-in-time provisions the matching local `User` row (no reachable webhook endpoint in local dev). Routes are now scoped per-user: an Entity/Property belonging to someone else 404s instead of leaking. 12 tests passing (4 new: unauthenticated rejection, JIT provisioning, cross-user entity rejection, cross-user property 404).
- [x] [Aug 2026] — Auth middleware (`requireAuth` + `resolveCurrentUser`) moved from per-router wiring into global middleware mounted on `/api` in `app.js`. Resource routers (`properties.routes.js`, `tenants.routes.js`, `leases.routes.js`) no longer need their own Clerk dependency injection — they just read `req.currentUser`.
- [x] [Aug 2026] — Prisma schema: `Tenant`, `Lease`, `LeaseTenant` (join table with `role`: `PRIMARY` / `CO_TENANT` / `GUARANTOR`, unique per lease+tenant). A `Tenant` applies to a specific `Property` (`propertyId` required, `applicationStatus`: `PENDING`/`APPROVED`/`REJECTED`) — only approved tenants get linked to a `Lease`. Leases carry all v1 key fields (dates, rent, deposit, late fee, pet policy, renewal cap, occupant count, notes, status) plus a `documentUrl` field that nothing writes to yet — waiting on Cloudflare R2. `LeaseTenant` cascade-deletes when either the lease or the tenant is deleted, but deleting one never deletes the other.
- [x] [Aug 2026] — `tenants.routes.js` — full CRUD scoped to the authenticated user; creating a tenant validates the named property belongs to you; `applicationStatus` is updatable (validated against the enum) so Taylor can approve/reject applicants. Mounted at `/api/tenants`. 11 tests passing.
- [x] [Aug 2026] — `leases.routes.js` — full CRUD scoped via property ownership, plus `POST /api/leases/:id/tenants` and `DELETE /api/leases/:id/tenants/:tenantId` to attach/detach tenants with a role, mounted at `/api/leases`. 15 tests passing. 38 tests total across the backend.
- [x] [Aug 2026] — Finances v1: `Income`, `Expense`, `Deposit`, `DepositDeduction` Prisma models. `Income`/`Expense`/`Deposit` carry `entityId` derived server-side from `property.entityId` (never trusted from the client) so records can be scoped per-Entity's books. `income.routes.js` (`/api/income`) and `expenses.routes.js` (`/api/expenses`) are full CRUD scoped to the current user, with category enums matching CLAUDE.md's Finances section. `deposits.routes.js` (`/api/deposits`) is full CRUD for a lease's deposits — `Deposit` has a `type` field (`SECURITY` or `PET`, `@@unique([leaseId, type])`) so a lease can hold one of each, tracked independently — plus `POST /:id/deductions` / `DELETE /:id/deductions/:deductionId` for itemized deductions per deposit. Rent tracking is a simple ledger for v1 — no recurring-charge/scheduler engine; "expected vs collected" is meant to be computed against `Lease.monthlyRent`, not stored. 41 new tests passing (income 12, expenses 12, deposits 17). 79 tests total across the backend.
- [x] [Aug 2026] — Maintenance v1: `Vendor`, `MaintenanceRequest`, `MaintenanceStatusChange`, `MaintenanceSchedule` Prisma models. `Vendor` is scoped by `userId` only (not property/entity) — one vendor can service properties across multiple entities; no stored cost-history field, it's derived by querying `MaintenanceRequest` rows for that vendor. `MaintenanceRequest` (`/api/maintenance-requests`) is a repair/ad-hoc ticket — `OPEN`/`IN_PROGRESS`/`CLOSED`, linked to property (required), tenant and vendor (both optional) — with `entityId` derived server-side. Every create and every status-changing update auto-inserts a `MaintenanceStatusChange` row (full audit trail per the Manora research — timestamped, surfaced in every GET response, not a client-writable sub-resource). `MaintenanceSchedule` (`/api/maintenance-schedules`) is the preventive side — `intervalDays`/`lastDoneDate`/`nextDueDate`, with `nextDueDate` auto-computed from the other two when not given, a `POST /:id/mark-done` action that advances both, and a computed `overdue` boolean on every response (no real alerting system — just a flag a future UI can badge). Landscaping recurring service is just a `MaintenanceSchedule` row with a `vendorId` set, no special modeling. Maintenance costs are deliberately NOT auto-linked to Finances `Expense` records — Taylor's call, matches the manual-ledger stance. 34 new tests passing (vendors 8, maintenance requests 13, maintenance schedules 13). 113 tests total across the backend.
- [x] [Aug 2026] — Cloudflare R2 wired up for lease PDF upload, closing the last v1 blocker. `Lease.documentUrl` renamed to `documentKey` (holds an R2 object key, not a URL — bucket `steinoak-documents` is private since lease PDFs are sensitive documents). `backend/src/lib/r2.js` wraps the S3-compatible R2 client (`@aws-sdk/client-s3` + `@aws-sdk/s3-request-presigner`) with `getUploadUrl`/`getDownloadUrl` (presigned, 15min/5min expiry) and `deleteObject`. `leases.routes.js` converted to an injectable factory (`createLeasesRoutes({ r2 })`, defaulting to the real client) — same DI pattern as Clerk in `app.js` — so R2 calls are mockable in tests without hitting the network. Four new endpoints on `/api/leases`: `POST /:id/document-upload-url` (returns a presigned PUT URL; file bytes go straight from client to R2, never through the backend), `POST /:id/document-confirm` (attaches the key to the lease after verifying it's prefixed with that lease's id; deletes the old object if replacing one), `GET /:id/document-url` (presigned download URL, generated on demand — never a stored public link), `DELETE /:id/document`. Verified with a real round-trip smoke test against the live bucket (upload → download → delete), not just mocked tests. 10 new tests passing. 123 tests total across the backend.
- [x] [Aug 2026] — Frontend scaffolded from scratch at `frontend/` (Vite + React; `chatGPT_version/frontend` is a prior-session draft only, same call already made on the backend — not built on). Clerk auth (sign-in/sign-up, protected routes, session token attached to every API call via `useApi()`), Tailwind v4 + Poppins, React Router, app shell with nav + account menu. `backend/src/app.js` gained `cors` middleware (scoped to `FRONTEND_URL`, default `http://localhost:5173`) since the frontend is a separate origin — without it, browser fetches from the frontend to the backend fail with a generic `NetworkError`, no useful message.
- [x] [Aug 2026] — `entities.routes.js` added — `Entity` had a Prisma model since the very first session but no API at all, a real gap that blocked property creation entirely. Full CRUD, plus: every new user gets an auto-provisioned default "Self / Personal" `Entity` at signup (`isDefault: true`) so property creation never blocks on manually setting one up first; the default entity's `legalName`/`entityType` are locked from direct edit (can't be silently converted into an LLC, which would drag along every other property still using it — the correct flow is creating a separate LLC entity, then reassigning just that property to it via `PUT /api/properties/:id`'s now-supported `entityId` field). `POST /api/me/sync-profile` keeps the default entity's name mirroring the Clerk account name (called once per app load from `AppLayout`). `Entity` also gained `contactEmail`/`contactPhone`/`mailingAddress` (a business email for an LLC, separate from the landlord's own Clerk account contact info) and `ein` is encrypted at rest (`backend/src/lib/crypto.js`, AES-256-GCM) per CLAUDE.md's sensitive-identifier rule, which nothing had enforced until this.
- [x] [Aug 2026] — `Tenant.name` split into required `firstName`/`lastName` (hand-written migration, not prisma-generated, so the one existing dev row's data was preserved instead of dropped). Added `backgroundCheckStatus`/`backgroundCheckDate` (mirrors the existing credit check fields) and `monthlyIncome`. Added `TenantDocument` — credit report / background check / income verification / ID uploads, one bucket per category since a tenant can reasonably have more than one file per category (e.g. two pay stubs), same private-bucket/presigned-URL R2 pattern as lease documents. `tenants.routes.js` converted to an injectable factory (`createTenantsRoutes({ r2 })`) for the same DI-testing reason `leases.routes.js` already is. Attaching a tenant to a lease now requires `applicationStatus === APPROVED` — a pending or rejected applicant can't be put on a lease.
- [x] [Aug 2026] — Finances gained parity/depth: `Expense` gained `method` (parity with `Income`) and `paid` (defaults `true` since most entries are logged at the moment of payment; uncheck to log a bill before it's paid — `Income` has no equivalent, it's only ever logged once money is actually received, per the existing manual-ledger stance). `IncomeDocument`/`ExpenseDocument` — receipts and proof-of-payment screenshots, same R2 pattern, no categories needed (a flat list per ledger entry, unlike `TenantDocument`).
- [x] [Aug 2026] — Maintenance gained an audit trail on the preventive side too: `MaintenanceRequest` gained `notes` (had `description` but nothing for ongoing free-text updates, unlike `MaintenanceSchedule` which already had `notes`). `MaintenanceScheduleCompletion` — one row per "mark done" action, mirroring `MaintenanceStatusChange`'s audit-trail idea for requests; previously `mark-done` only overwrote `lastDoneDate`/`nextDueDate`, silently losing every prior completion date.
- [x] [Aug 2026] — `Occupant` (name\*, age, phone, email), `Pet` (type\*, breed, name, license, age), `Vehicle` (make, model, year, color, licensePlate, state, vin, parkingSpot — nothing required) added, each scoped to a `Lease` via `leaseId` with full CRUD (`/api/occupants`, `/api/pets`, `/api/vehicles`). These replace the old `Lease.nonLeaseOccupantCount` bare integer entirely (dropped via a hand-written migration, same reasoning as the tenant name-split migration) — Taylor wanted individual records, not just a headcount. Unlike `Income`/`Expense`/`Deposit`, these don't denormalize `userId`/`entityId`/`propertyId` — ownership is checked by loading the parent `Lease` and comparing `lease.userId`, since they're not financial records needing entity-scoped cross-cutting queries.
- [x] [Aug 2026] — Frontend build-out completed for all remaining v1 MVP modules (Tenants, Leases, Finances, Maintenance). Properties/Tenants/Leases/Vendors follow a click-into-detail pattern (card list → dedicated detail page), matching Entities. Tenant and Lease detail pages surface the full field set including document upload UI — contextual per-category upload buttons live next to their related field (e.g. "Upload credit report" next to Credit check status, "Upload ID" next to ID verified), with a consolidated read-only Documents section below for browsing/removing everything — no category dropdown needed since the button's location *is* the category. Lease detail page also has Deposits (Security/Pet as independent slots, each with itemized deductions), Occupants, Pets, and Vehicles sections. Property detail page has Income/Expenses (with a "Receipts" toggle per entry) and Maintenance requests/Preventive schedules (each with a "History" toggle showing the full audit trail) sections. Maintenance request's Tenant dropdown auto-fills and locks "Reported by" with the selected tenant's name, since having both a tenant link and a free-text reporter field was confusing on its own.
- [x] [Aug 2026] — Side nav restructured. Tenants, Leases, and Finances are now top-level items showing a flat cross-property view — same data as the property-scoped sections, just a different entry point, no backend changes needed since the list endpoints already return everything unfiltered for the current user. Finances specifically is a property picker leading to a dedicated ledger page (`PropertyLedgerPage`) — a merged, chronological Income + Expense table with a running balance and income/expense/net totals, distinct from the property page's raw CRUD sections. "Vendors" nav item renamed to "Maintenance" — a read-only hub (open tickets + upcoming/overdue preventive schedules across all properties + the vendor directory, including the "Add vendor" form that used to live on its own page) linking back to property/vendor pages for actual management rather than a second place to edit things. General pattern going forward: property/lease-scoped pages are where records get created and edited; top-level cross-property pages are read-mostly indexes that link back — don't duplicate full CRUD forms in both places.
- [x] [Aug 2026] — Direct-to-R2 browser uploads (lease PDFs, tenant/income/expense documents) needed the R2 **bucket's own CORS policy** — Express's `cors` middleware only covers requests to the backend; it has no effect on the browser's direct `PUT` to Cloudflare. The scoped "Object Read & Write" R2 API token can't read or set bucket CORS via the S3 API (`AccessDenied` on both `GetBucketCorsCommand` and `PutBucketCorsCommand`) — it was set manually via the Cloudflare dashboard (R2 → bucket → Settings → CORS Policy), which Claude Code can't automate here. The production frontend origin will need to be added to that policy too once deployed.

**v1 MVP complete as of this entry** — all six scope items from CLAUDE.md's MVP list are built and working end-to-end. 201 backend tests passing. Tagged `v1.0.0`.

- [Aug 2026] — Global fuzzy/phonetic search: persistent search box in the header (`frontend/src/components/GlobalSearch.jsx`), `Cmd/Ctrl+K` to focus, dropdown grouped by type. Backend `GET /api/search` (`backend/src/routes/search.routes.js`) searches Entities, Properties, Tenants, Occupants, Pets, Vehicles, Vendors — not Income/Expense/Maintenance rows, which are transactional rather than "who/what" lookups. Combines three independent match signals (`backend/src/lib/search.js`): Postgres trigram `word_similarity()` for typos/partial matches, `ILIKE` substring, and `soundex()` for sound-alikes — plus a nickname dictionary (`backend/src/lib/nicknames.js`, ~60 clusters) since "Bob" finding "Robert" is neither fuzzy-close nor phonetic, it's a nickname relationship a dictionary lookup solves. `pg_trgm`/`fuzzystrmatch` Postgres extensions enabled via a hand-written migration. 7 new backend tests.
- [Aug 2026] — Occupant/Pet/Vehicle re-scoped from `Lease` to `Tenant` (hand-written migration, backfilled via each lease's Primary tenant — moot in practice since dev had zero rows at the time). Fixes a real workflow gap: a `Lease` is per-term paperwork that ends when a tenant moves, but a `Tenant` persists — so attaching an existing tenant to a new lease now brings their pets/occupants/vehicles along automatically instead of requiring them to be recreated. With co-tenants, each record anchors to one tenant (defaults to whoever's Primary on the lease, still re-editable later if it turns out to matter, e.g. one co-tenant moves out and the other keeps the pet). The **Tenant page** is now the primary place to add these — works immediately on a `PENDING` applicant, before any lease exists, matching how Taylor actually works (fill in pets/occupants/vehicles/screening at application time, approve, create the lease, attach the tenant, everything already entered shows up automatically). The **Lease page** shows a read-only rollup instead, linking back to the owning tenant. `frontend/src/components/SimpleRecordSection.jsx` is the shared add/edit/delete component both pages use. Also fixed: attaching a tenant to a lease wasn't refreshing that lease's linked records without a manual page refresh; the lease's tenant-role picker now defaults to Primary for the first tenant attached and Co-Tenant after that (still overridable, never silently defaults a Guarantor into the Primary slot).
- [Aug 2026] — Property Specs (v2) built, breadth-first (Taylor's call): 7 new Prisma models (`PaintSpec`, `FlooringSpec`, `CountertopSpec`, `Fixture`, `Appliance`, `BacksplashSpec`, `ExteriorFeature`), each `propertyId`/server-derived `entityId`/`userId`-scoped like `Income`/`MaintenanceSchedule`. `Fixture` collapses CLAUDE.md's 5 sub-types (sinks, faucets, showers/tubs, toilets, hardware) into one model with a `fixtureType` enum rather than 5 separate models. One shared backend factory (`backend/src/lib/createPropertySpecRoutes.js`) since the CRUD shape is identical across all 7 — each route file is just a field-list config; a `computeExtra` hook gives `FlooringSpec.lowStock` (boxes hit zero) and `Appliance.warrantyExpiringSoon` (within 90 days) their computed flags, same "compute on read, don't store" pattern as `MaintenanceSchedule.overdue`. Frontend: new page at `/properties/:id/specs`, linked from the property page — **By Room** (default, per CLAUDE.md's own UI principle) is a read-only grouped browse view, each item its own card matching Category view's exact row format, click to expand full details (reusing the same field configs the edit forms use, so it can't drift); **By Category** is where add/edit/delete happens, one shared `PropertySpecSection` component reused 7 times. 66 new backend tests, 283 total.
- [Aug 2026] — Property Specs refinements from a walkthrough: `ExteriorFeature`'s duplicate service fields removed (landscaping service already lives in `MaintenanceSchedule`/`Expense`); `FlooringSpec`/`CountertopSpec`/`BacksplashSpec`'s standalone `cost` replaced with an `expenseId` link to the real `Expense` (new `ExpenseCategory.IMPROVEMENT` — the actual IRS repair-vs-capital-improvement distinction), one Expense linkable from several spec items (e.g. one remodel invoice covering flooring + countertop + backsplash); "Appliances" relabeled "Appliances & Systems" in the UI (house systems fit the existing fields, no new model); Maintenance linking and the retire/replace lifecycle both generalized to **all 7 categories**, not just Appliance/Fixture — touch-up paint, resealing a countertop, and servicing a furnace are all real trackable upkeep, so the only defensible line was all-or-nothing (Taylor's call after discussing scope). `createPropertySpecRoutes.js` gained `include` (embeds linked Expense/maintenance in every response) and a generic `POST /:id/replace` action every category gets for free — creates a new active row, marks the old one retired, so prior maintenance history stays attached to whichever physical unit it actually happened to. `MaintenanceRequest`/`MaintenanceSchedule` each gained 7 nullable FK columns (real typed relations, not a generic linkedType+linkedId pointer) plus a combined "Linked item" dropdown (`frontend/src/lib/specLinks.js`) spanning all 7. 8 new backend tests, 291 total.
- [Aug 2026] — Reversed the "top-level nav pages are read-mostly" decision (see decisions log) for Tenants/Leases/Finances/Maintenance: all four now support full add/edit, not just the property page. No data-model change was needed — these records already stored `propertyId`/`entityId` directly, so viewing was already in sync across pages; the actual gap was that add/edit UI only existed once, inlined in `PropertyDetailPage.jsx` (1630 lines). Extracted into reusable components — `IncomeSection`, `ExpenseSection`, `MaintenanceRequestSection`, `MaintenanceScheduleSection`, `TenantSection`, `LeaseSection`, plus a shared `ReceiptsPanel` (all in `frontend/src/components/`) — that render in "fixed property" mode on `PropertyDetailPage`/`PropertyLedgerPage` (already property-scoped) and in "picker" mode on the Maintenance/Tenants/Leases hub pages (cross-property, so they get an inline Property selector instead). `PropertyDetailPage.jsx` dropped from 1630 to ~480 lines as a result. Bonus fix while rewriting: `MaintenanceSchedule`'s `description` field was wired into state/payload but never actually rendered as a form input.
- [Aug 2026] — Fixed a real app-wide bug: "Back to X" links at the top of detail pages were hardcoded to a single destination, which lies whenever a page has more than one real entry point (a Tenant is reachable from the property page, the top-level Tenants list, *and* a lease's tenant list). New `BackLink` component (`frontend/src/components/BackLink.jsx`) uses `navigate(-1)` — real browser history, always correct about where the user actually came from — falling back to a fixed destination only when there's no in-app history to unwind (a fresh page load/refresh, detected via React Router's location `key` being `"default"`). Applied to all seven detail pages with a "Back to X" link, even the ones with a single entry point today, for consistency.
- [Aug 2026] — ~~Lease Builder (v2) built — clause library, template starter set, attaching clauses to a lease, a missing-early-termination-clause warning, and generating a real lease PDF. `Clause`/`LeaseClause` carried `sectionNumber`, `category`, and an `isEarlyTermination` flag driving a compute-on-read `missingEarlyTerminationClause` warning.~~ **Reworked the same day** after Taylor checked the first pass against a real signed lease — see the entry directly below. Left here so the history of the original build is visible; the snapshot-at-attach-time architecture (below) is unchanged, only the field shape and numbering scheme changed.
- [Aug 2026] — **Lease Builder (v2) reworked**: grouped/numbered clauses, `{{variable}}` substitution, unified provided+personal library, a much bigger starter set sourced from a real signed lease Taylor provided. `Clause`/`LeaseClause` dropped `sectionNumber`/`category`/`isEarlyTermination` entirely — no special early-termination flag, checkbox, or badge anywhere; that concept is now just "this clause lives in the recommended/provided set," not app-tracked. Both gained a required `group String`, validated against a fixed ordered list (`backend/src/lib/clauseGroups.js` — Rent & Payment, Security Deposit, Tenant Responsibilities, Landlord Responsibilities, Access & Entry, Default & Termination, Notices & General, Pets, Parking, Rules & Regulations, Disclosures, Other / Miscellaneous), kept as a plain array rather than a Prisma enum specifically so renaming/reordering never needs a migration. Numbering (e.g. `"3.2"`) is never typed by anyone — it's computed at read time from `(group's position in the list, attach order)` via `backend/src/lib/leaseClauseOrdering.js`, compacted to skip groups a given lease doesn't use, and shared by both the JSON API and PDF generation so the two can never show different numbers. `LeaseClause` also gained `sourceTemplateId` (no FK, templates aren't DB rows) so attaching directly from the provided set — not just the personal library — still shows a "Provided" badge; `POST /api/leases/:id/clauses` now accepts `clauseId`, `templateId`, or a custom body, all three still snapshotting rather than referencing live. New `backend/src/lib/clauseVariables.js`: clause `bodyText` can contain `{{monthly_rent}}`, `{{tenant_names}}`, `{{property_address}}`, `{{state}}`, etc. — resolved from the lease's own linked Property/Entity/Tenant data (fields already on those models, no new structured fields added) into a `resolvedBodyText` returned alongside the raw text on every lease `GET`, and used identically by the PDF generator. `clauseTemplates.js` grew from ~11 generic clauses to 30, genericized clause-by-clause from a real Zillow-drafted Colorado lease Taylor shared (dates/amounts/names stripped in favor of `{{variables}}`), covering every group — including an Early Termination clause adapted from language Taylor had to hand-add via a Rules Addendum in real life, since the Zillow template itself can't be edited (the actual reason this feature exists). Frontend: `ClauseLibraryPage` now shows Provided (locked, "Copy to customize") and Your Clauses (editable) together instead of a separate template-browsing panel; `LeaseBuilderSection`'s attach picker spans both pools in one searchable dropdown, renders attached clauses with group headings and computed numbers, and shows `resolvedBodyText` instead of raw text. Verified against the real dev DB and live R2 bucket — attached clauses across 5 groups, confirmed variables resolved in the API response, and actually read the generated PDF back page-by-page to visually confirm group headings/numbering/substitution all render correctly. 322 backend tests total.
- [Aug 2026] — **Default clauses**: a landlord can mark any clause — their own or a provided one — as "include by default," then attach every default in one click on a new lease instead of adding them one at a time. `Clause.isDefault` (boolean) covers personal library entries; a new `DefaultClauseTemplate` (`userId` + `templateId`, no FK since templates aren't DB rows) covers provided ones, specifically so toggling a provided clause as default never requires copying or risks drifting from its shipped wording — `GET /api/clause-templates` now annotates each entry with `isDefault` for the current user, and `POST`/`DELETE /api/clause-templates/:templateId/default` toggle it. `POST /api/leases/:id/clauses/add-defaults` attaches every default clause and default template in one action (still resolving templates fresh from the static list, same snapshot mechanic as attaching one by hand), skipping anything already attached so it's safe to click more than once. Frontend: a checkbox on every clause card in `ClauseLibraryPage` (both Provided and Your Clauses sections), and an "Add my default clauses" button on `LeaseBuilderSection`. 12 new backend tests, 334 total.
- [Aug 2026] — Generated lease PDFs now carry a translucent, diagonal "DRAFT" watermark on every page and the Steinoak logo in the header. The watermark exists because nothing else distinguishes an auto-generated PDF from an actually-signed lease — the real signed copy replaces it later via the existing upload flow — so it's there until that happens. The logo is rendered directly from SVG via the new `svg-to-pdfkit` dependency rather than rasterized to PNG first — pure JS, no native-binary install risk (this sandbox has hit that before with the Clerk CLI), and `frontend/src/assets/logo.svg` has no gradients/clip-paths so it renders cleanly as-is. `backend/src/assets/logo.svg` is a duplicated copy (backend and frontend are otherwise fully independent here) — keep the two in sync if the logo changes.
- [Aug 2026] — **Clause library review pass**: Taylor read all 30 provided starter clauses against the real signed lease clause-by-clause, then a background pass re-read the full source document (all 26 pages of lease + addenda, not just the body already used to build the first pass) specifically hunting for boilerplate that had been dropped. Result: 20 real gaps found and fixed, library grew from 33 to 53 clauses. New: Amounts Due Upfront (rewritten mid-session to be a flexible fill-in-the-blank after Taylor pointed out "due at signing" doesn't cover day-1/last-month-rent scenarios), Existing Condition, Possession Delay, Severability (pulled out of Governing Law into its own clause), Addendum Precedence, Electronic Signatures, Application of Payments, split Utilities (Utilities Paid by Landlord / Utilities Paid by Tenant / Utility Service Continuity — the continuity duty now correctly scoped to only water/gas/electric/sewer/trash, not cable/phone/internet, per Taylor's real-world utility split), Evidence of Utility Payment, Appliances & Equipment Included, Acceptable Forms of Payment, Smoking Policy, Snow Removal, Fire Safety & Grilling, Pet Insurance Requirement, and Parking split into Assigned Parking Space(s) / Parking & Vehicle Requirements / Storage Space (group renamed "Parking" → "Parking & Storage", including a data migration for Taylor's one existing custom clause and lease clause using the old name). Strengthened with real teeth from the source lease: Holdover now claims double rent; Default by Tenant gained a mitigation-of-damages duty and attorneys'-fees recovery; Tenant's Property & Renter's Insurance changed from encouraged to required, backed by a new `Lease.tenantInsuranceMinimumCoverage` field; No Subletting gained a short-term-rental (Airbnb/VRBO) prohibition; Use of Property & Common Areas gained concrete prohibitions (waterbeds, heavy furniture, candles, exterior signage) pulled from the source Rules Addendum. A Colorado guest-policy clause (14-day/6-month rule) was added, then edited per Taylor's explicit instruction to state only the operative restriction — not the underlying "why" (Taylor doesn't want tenants reading the lease to learn the tenancy-rights mechanism they're being restricted from triggering).
- [Aug 2026] — **New `{{variables}}`**: `occupant_names` (resolves from the lease's tenants' actual linked `Occupant` records — first real use of non-Lease/Property/Entity/Tenant data in a variable — falling back to a plain "no additional occupants identified" phrase rather than a raw unresolved placeholder when there are none, since that's the normal case for most leases, not an oversight to flag; every other variable, including the new ones below, keeps the original "leave the raw placeholder visible if unset" behavior since an unset dollar amount or empty appliance list usually *is* something worth the landlord noticing), `appliance_list` (from the property's active `Appliance` records — Property Specs data feeding into a lease clause for the first time), `pet_deposit` (from the lease's PET-type `Deposit`, not `Lease.securityDepositAmount` — deposits stay a separate ledger per the existing decision), `tenant_insurance_minimum`.
- [Aug 2026] — ~~**Clause state tagging**: `Clause`/`LeaseClause`-template both gained an optional two-letter `state` field (null = universal)~~ **Superseded later in Aug 2026** — Taylor pointed out that some clauses genuinely apply identically to more than one state (a landlord shouldn't need a separate near-duplicate clause per state when the underlying rule is the same), so `Clause.state String?` became `Clause.states String[] @default([])`. Filters both `ClauseLibraryPage` and `LeaseBuilderSection`'s attach picker the same way as before (defaulting to the lease's own property state, overridable, "All states" option; `[]` = universal, always matches), and `POST /api/leases/:id/clauses/add-defaults` auto-attaches a default when its `states` array is empty or includes the lease's property state. Visible as one badge per tagged state on each clause card — the clause's title text (e.g. "Guest Policy — Colorado") was never the actual tag, just prose; Taylor asked directly and this was worth clarifying explicitly in the UI, not just in conversation. The states-array form also let two genuinely-identical multi-state clauses get merged instead of duplicated: a 48-hour entry-notice clause (`states: ["HI","KY","RI","DC"]`) and a 14-day deposit-return clause (`states: ["NY","HI"]`) — see the state-law-research memory for why most other same-topic clauses across states could NOT be merged this way (the actual numbers/mechanisms differ state to state even when the general topic is the same).
- [Aug 2026] — **Lease attachments**: new `LeaseAttachment` model + routes (`/api/leases/:id/attachments/...`) + `LeaseAttachmentsPanel` component — HOA rules, a rules addendum, or any other supporting document can be uploaded directly to a lease, same presigned-R2 pattern as every other document type in this app. Sits in `LeaseBuilderSection` between "Add Clause" and "Generate Lease PDF" per Taylor's specific placement request. Deliberately no category-picker UI (the backend model still has a `category` field for future use, always sent as `"Addendum"` by this panel) — Taylor just wants files appended in upload order with their titles visible, not a filing system yet. Listed oldest-first (`createdAt asc`), unlike `TenantDocument`'s newest-first browsing convenience — Taylor's mental model here is "appended in the order uploaded," a sequence that matters, not a browse list.
- [Aug 2026] — Generated lease PDFs now open with a Steinoak liability disclaimer ("generated by Steinoak from clause language... may not reflect every legal requirement... consult an attorney... Steinoak disclaims liability"), mirroring the equivalent disclaimer on the real Zillow-drafted source lease's first page. Static PDF text, not a clause — lives in `generateLeasePdf.js`, not `clauseTemplates.js`.
- [Aug 2026] — Considered and explicitly rejected during the review pass: auto-attaching the Lead-Based Paint Disclosure clause based on the property's construction year. The source lease's Zillow template does this unconditionally (includes it even for Taylor's own post-2000 property), but building year-conditional attach logic for one specific clause would have reintroduced exactly the single-clause special-casing pattern already rejected once for `isEarlyTermination`. The clause's own body text is already self-conditional ("if the property was built before 1978..."), so it's harmless either way — the existing "mark as default" mechanism already gets a landlord the "attached to every new lease automatically" behavior with no new code. `Property.yearBuilt` was still added (a real, independently useful field), but the property-attributes feature it's part of was deferred as a whole — see Current Focus.
- [Aug 2026] — Considered and rejected: bespoke toggle/checkbox UI per clause type for filling in per-lease specifics (amounts due, utilities paid, parking/storage space numbers, accepted payment methods). `LeaseBuilderSection` already has a free-text "Edit" control on every attached clause (pre-existing, scoped to that lease's copy only) plus a live `resolvedBodyText` preview — together these already handle every case Taylor described generically, without new per-clause-type UI code that would need to grow every time a new bracketed clause is added. New clauses needing lease-specific fill-in use a `[bracketed prompt]` convention in their body text as the cue.
- [Aug 2026] — **Generated lease PDF gained a table of contents with page numbers**, plus per-page "Page X of Y" footers. `backend/src/lib/generateLeasePdf.js` now creates the document with `bufferPages: true`, reserves a blank page for the TOC right after the cover info (`doc.addPage()`, its index remembered), then renders the rest of the document as before while every section heading (Key Terms, each clause group, Signatures) records its own label + real page number (`doc.bufferedPageRange().count`) into a running list. Once the whole document is written, `doc.switchToPage()` jumps back to the reserved page and writes the TOC in for real — pdfkit's standard two-pass pattern for a problem where the page numbers you need to print aren't known until everything after them has already been laid out. TOC entries are hand-dot-leadered (`label ......... N`); bounded by design to one page, since the entry count is capped at Key Terms + one row per `CLAUSE_GROUPS` entry (12) + Signatures — not built to handle a TOC long enough to need a second page itself. Verified by generating real PDFs (both a realistic 3-clause lease and a stress-test lease touching all 12 clause groups) and reading them back page-by-page, not just via the existing route-level tests (which only check the HTTP response, not PDF internals) — no new backend tests were added for this reason, same visual-verification approach as the original PDF generation work.
- [Aug 2026] — **Two real pdfkit rendering bugs found and fixed while building the above**, both by actually reading a generated multi-page PDF back rather than trusting tests: (1) `drawWatermark()`'s `doc.save()`/`doc.restore()` around the "DRAFT" watermark only covers pdfkit's PDF graphics state (fill color, transforms) — it does **not** restore pdfkit's own font-selection state (`this._font`/`this._fontSize`), which live outside that stack. Since the watermark redraws on every `pageAdded` event — including one firing *mid-render* whenever a clause body is long enough to overflow onto a new page — the remaining wrapped lines of that clause were silently rendering in the watermark's Helvetica-Bold 80pt instead of the clause's actual font. Fixed by capturing and manually restoring `_font`/`_fontSize` alongside the x/y restore already there. (2) The new page-number footer, drawn near the bottom margin (`page.height - 40`), kept silently appending a spurious blank page per footer instead of drawing on the intended page — because pdfkit's `_initOptions` defaults `width` on *any* `text()` call unless `lineBreak: false` is passed explicitly, so even a call with no visible `width`/`align` option still runs through the line-wrapper's automatic-pagination check, which treats a y-position below the content area as an overflow. Fixed by passing `{ lineBreak: false }` on the footer's `text()` call. Both bugs are noted in code comments at their fix site as a landmine for any future pdfkit work in this file — the same watermark/footer patterns will resurface the same failure modes if copied elsewhere without the same fix.
- [Aug 2026] — **Guest Policy clause corrected, then multi-state legal research expanded the library to 116 clauses.** Taylor asked to drop the "— Colorado" suffix from the Guest Policy clause title (rely on the `state` tag instead) and asked for research into which other states share its 14-day/6-month guest rule. That research (a forked agent checking the actual Colorado statute, § 13-40-104, against the primary text) found the rule doesn't exist in Colorado law at all — the same "14 days/6 months" figure is copy-pasted identically across CO/CA/FL landlord-content sites, a sign of unverified marketing content, not real law. The clause was renamed "Guest Policy (14-Day Limit)" and untagged (`state: null`) rather than left falsely implying it reflects Colorado's actual law. Taylor then asked to "add anything you find required by actual state statutes" — two more rounds of forked research followed, the second one specifically re-verifying round-1's secondary-sourced candidates against primary statute text (a state's own .gov site, law.justia.com, or casetext.com) given how wrong the guest-policy number turned out to be. Result: 55 new state-tagged clauses across 28 states (up from the original 8 CO/CA clauses), covering security deposit caps/return deadlines/interest requirements, late fee + NSF fee caps, entry-notice periods, habitability/repair timelines, month-to-month termination notice, and required disclosures (bed bug, methamphetamine, mold, flood, utility submetering, foreclosure, sex offender registry). Verification caught and corrected real errors from the secondary-sourced round 1 (Virginia's mold disclosure has no "10 sq ft" threshold — a content site invented it; California's flood-disclosure statute citation was wrong; Nevada's foreclosure-disclosure violation isn't literally a misdemeanor as first reported) and explicitly dropped several candidates that couldn't be verified or didn't fit the app's state-only tagging granularity (a New York City–specific bed bug law, a Chicago-specific deposit-cap ordinance, asbestos disclosure, a rumored 2026 Colorado mold-disclosure law, Arkansas's deposit-return deadline — which turned out to only apply to landlords with 6+ units, not this app's audience). Full research findings, including what was verified vs. explicitly dropped, are saved in memory (`project_state_law_research_aug2026`) so a future session doesn't redo the work. Statute citations live in code comments near each clause, never inline in the clause body text itself — a generated lease shouldn't contain a citation hedge. 345 backend tests still passing (no new tests needed — these are static data additions, covered by the existing template-integrity checks).
- [Aug 2026] — Dropped the "(State)" suffix from all 63 state-tagged clause titles (e.g. "Late Fee Limit (Colorado)" → "Late Fee Limit") — Taylor's call: redundant with the state badge already shown in the UI, and not something that belongs in the generated lease document itself. Several clause types (e.g. "Late Fee Limit," "Landlord's Right of Entry") now intentionally share an identical title across different states, differentiated by the state badge alone — same pattern already established for the untagged "Guest Policy" clauses.
- [Aug 2026] — **`Clause.state` (single, nullable) changed to `Clause.states` (`String[]`, default `[]`)**. Taylor's follow-up: some clauses genuinely apply identically across more than one state, and a single-state field couldn't represent that without duplicating the clause per state. Went back through all 63 state-tagged clauses checking for genuine overlaps (identical body text, not just the same topic) and found exactly two: entry-notice for `["HI","KY","RI","DC"]` and deposit-return-deadline for `["NY","HI"]`, both merged into one clause entry each (112 clause templates total, down from 116). Everything else stayed single-state — same-topic clauses across states (e.g. every state's late-fee cap) turned out to have genuinely different numbers/mechanisms once compared side by side, so merging them would have meant averaging away real differences. `leases.routes.js`'s default-clause state filter now checks `states.length === 0 || states.includes(propertyState)` instead of exact equality; frontend state inputs (`ClauseLibraryPage`, `LeaseBuilderSection`) now take a comma-separated text field parsed into an array, and badge display renders one badge per tagged state. No dev data existed with a real `state` value at migration time, so this was a clean column-type swap, not a backfill.
- [Aug 2026] — **State-specific clauses supersede their universal counterpart when the library/attach picker is filtered to a matching state.** Taylor's ask: don't show both a generic and a more-specific version of the same clause once a state is selected. New optional `supersedes: "<universal-clause-id>"` field on `clauseTemplates.js` entries, deliberately scoped narrow — only added where a state clause is a genuine full replacement of the universal one's content, not just a number swapped in. That turned out to be exactly the same 7 clauses from the states-array merge above: the 5 Landlord's Right of Entry state variants (already full paragraph restatements) and the 2 Security Deposit Return Deadline variants (which needed their body text rewritten first to add the itemized-statement/forwarding-address language the universal clause has and they were missing — they weren't actually full replacements until that fix). Every other same-topic state clause (late fee caps, NSF caps, security deposit caps, repair timelines) stayed unmarked on purpose — those only state a constraint on top of the universal clause's other content, so attaching both is the intended use, not redundancy. `ClauseLibraryPage`/`LeaseBuilderSection` hide a superseded universal template only when viewing a specific state (not "All states") and only among provided templates — personal "Your Clauses" copies have no link back to a template, so nothing to supersede there.
- [Aug 2026] — **Finances Automation (Rent Tracker) built**, scoped down from a full "vibe coding" design conversation with Taylor before any code was written (see decisions log for the shape that was deliberately rejected: no scheduler, no auto-written ledger rows, bookkeeping kept strictly separate from any future legal/eviction determination — memory `project_late_fees_not_eviction_basis`). New `backend/src/lib/rentTracker.js` (`buildRentTracker`, pure/no-DB, same compute-on-read pattern as `MaintenanceSchedule.overdue`) computes one row per calendar month of a lease's term — expected rent/pet rent/late fee, collected, balance, and a status (`UPCOMING`/`DUE`/`PARTIAL`/`OVERDUE`/`PAID`/`PAID_LATE`) — for a fixed-term lease the whole term up front (future months show `UPCOMING`), for `MONTH_TO_MONTH` growing one row at a time up to today regardless of `endDate` (a lease that rolled over past its fixed term behaves identically to one that was month-to-month from day one). A late fee triggers permanently once a period's rent+pet rent isn't fully collected by its grace deadline (based on `date`, separately from the running balance, which any later payment still pays down) and can be waived per-period (new `LateFeeWaiver` model) — waiving doesn't retroactively fix the bookkeeping, it just excludes that fee from what's expected going forward. New endpoints on `/api/leases/:id/`: `GET rent-tracker`, `POST rent-payments/preview` (suggests a fees-first, oldest-period-first split per the lease's own "Application of Payments" clause — writes nothing), `POST rent-payments` (commits it, rejects an overpayment that doesn't match anything owed rather than silently dropping the extra), `GET/POST/DELETE late-fee-waivers`. A new `/api/rent-status` endpoint rolls every property's active lease up into one worst-case-wins status, so the property list and a new "Needs attention" Dashboard section don't each have to fetch every property's full tracker (N+1). Frontend: property Finances page gained a Ledger/Rent Tracker tab split; property cards and the Dashboard show a status pill (hidden when paid up, to avoid clutter Taylor's already flagged elsewhere). 23 new backend tests initially (14 unit, 9 route-level).
- [Aug 2026] — **Real architecture fix, same session, after Taylor caught it live**: the first pass logged a split payment (e.g. $1,150 covering $1,000 rent + $150 late fee) as *multiple* `Income` rows — one per category. Taylor's catch: a landlord's ledger should show one row per real transaction (it's what actually happened, and it's the only sane place to attach one receipt to). Fixed by adding `IncomeAllocation` (period, category, amount, cascade-deleted with its parent) as line items *underneath* a single `Income` row — a plain single-category payment still has zero allocation children and works exactly as before; only a payment that genuinely spans more than one category/period gets them. The parent row's own top-level `category` becomes whichever bucket got the most dollars (`dominantCategory()`), and the Ledger/`IncomeSection` show the itemized breakdown as text under that one row. `buildRentTracker` didn't need to change shape — the route layer just flattens plain rows + exploded allocation rows into the same input list it already expected, tagging each unit with the shared parent `Income` id so the Rent Tracker's "Collected" column can link to the one real ledger row a given dollar lives on (`PropertyLedgerPage`'s new tab-switch-and-scroll-and-highlight jump, driven by that id). Also cut the payment form's "Preview split" button — Taylor's read (which the app agreed with, not just deferred to): the split is a deterministic function of amount + what's owed, so making the landlord click to ask for math the app already knows was friction with no decision behind it. It's now auto-computed (debounced) as soon as an amount is entered, still fully editable before confirming. **Not yet verified by Taylor in the browser — see the ⚠️ note in Current Focus. Committed locally, deliberately not pushed until confirmed.**

---

## 🗳 Decisions log
> Every time a real choice is made between two approaches, log it here with the reason.
> This prevents relitigating settled decisions in future sessions.
> Format: `[Date] — Decision made — why — do not revisit`

- [Aug 2026] — LLC/Entity layer sits between User and Property. Properties are not owned directly by a user — always through an Entity. "Self / Personal" is a valid entity for landlords without an LLC. Entity is editable over time (e.g. personal → LLC after property transfer).
- [Aug 2026] — Lease builder (clause library, generate lease from scratch) is v2. v1 is upload PDF + enter key fields only.
- [Aug 2026] — Payment responsibility (joint vs individual, primary payer) removed from tenant model. Rent is due in full. If it's late, all tenants are late. Tracking individual splits is the tenants' problem, not the landlord's.
- [Aug 2026] — Prisma schema from prior ChatGPT sessions is a starting point only — treat as a draft, review with Claude Code before using. Do not treat it as settled architecture.
- [Aug 2026] — Dye lot / run number on flooring is optional, not flagged or required. Nice to have if noted at install time. Matching dye lots when buying replacement planks later is nearly impossible anyway.
- [Aug 2026] — Prisma generator set to `prisma-client-js` (the classic/legacy generator), not the new v7-default `prisma-client` generator. The new default outputs TypeScript-only client code (even in CommonJS mode, files are `.cts` with type annotations), which would force a TypeScript build step onto a stack that's plain JS everywhere else. `prisma-client-js` avoids that. Note: Prisma 7 requires a driver adapter regardless of generator choice — `@prisma/adapter-pg` + `pg` are installed and `PrismaClient` is constructed with `new PrismaPg({ connectionString })` in `backend/src/lib/prisma.js`. Do not revisit unless the project adopts TypeScript.
- [Aug 2026] — On a `Property`, `userId` is derived server-side from its `Entity` (`entity.userId`) at creation time, never trusted from the request body. Prevents a client from claiming a property under someone else's user id.
- [Aug 2026] — Clerk CLI (`clerk init`, the flow Clerk's dashboard now pushes you toward) doesn't work in this dev environment — its native binary needs AVX2, which this sandboxed CPU doesn't expose, so it crashes with an illegal-instruction error on every platform variant tried. Set up Clerk manually instead: `@clerk/express` installed directly, keys pasted into `.env`/`.env.example` by hand. Do not retry the CLI here; if a future environment has real hardware, it may work fine there.
- [Aug 2026] — No separate Applicant model. A `Tenant` record is created the moment someone applies for a specific property (`Tenant.propertyId`, required) with `applicationStatus` defaulting to `PENDING`. Taylor decides `APPROVED` or `REJECTED`; only on approval does the landlord link them to a `Lease` via `LeaseTenant`. Rejected applicants keep their record for history — they just never get a lease link. Do not build a separate Applicant→Tenant conversion flow; this was an explicit choice over that alternative (single model won out for simplicity, matches the credit-check/screening fields already living on Tenant).
- [Aug 2026] — ~~Non-lease occupants (children, aging parent) are a single `nonLeaseOccupantCount` integer on Lease, not a separate model.~~ **Superseded later in Aug 2026** — Taylor asked for individual occupant records (name, age, contact info), so this became a real `Occupant` model instead. See the later entry in What's been built. Left here so the history of the original call is visible.
- [Aug 2026] — Route bodies coerce known date fields (e.g. `startDate`, `dateOfBirth`) from plain strings to JS `Date` objects via `backend/src/lib/pickFields.js` before handing them to Prisma. Reason: Prisma 7 rejects bare date strings like `"2026-09-01"` (what an HTML date input sends) and wants a full ISO-8601 datetime or a `Date` object. Any new route accepting a date field should list it in that route's `DATE_FIELDS` array and use `pickFields`, not hand-roll its own picking logic.
- [Aug 2026] — `app.js` is a factory function (`createApp(overrides)`) that takes Clerk's `getAuth`/`clerkClient`/`clerkMiddleware` as injectable dependencies, defaulting to the real `@clerk/express` exports, and feeds them into global `requireAuth`/`resolveCurrentUser` middleware mounted on `/api`. Reason: `vi.mock()` does not intercept plain CommonJS `require()` calls in this project's Vitest setup (confirmed empirically — the mock factory never ran), so mocking the Clerk SDK module directly doesn't work. Dependency injection sidesteps that entirely — tests call `createApp({ getAuth: fakeGetAuth, ... })` to run against fake auth without touching the real Clerk network. Resource routers themselves (`properties.routes.js`, `tenants.routes.js`, `leases.routes.js`) are plain `express.Router()`s that just read `req.currentUser` — they don't know Clerk exists. Keep this pattern (auth deps only in `app.js`, resource routers stay Clerk-agnostic) for any future route module.
- [Aug 2026] — New Clerk users are provisioned into the local `User` table just-in-time, on their first authenticated request (see `resolveCurrentUser` in `backend/src/middleware/auth.js`), rather than via a Clerk webhook. Reason: webhooks need a publicly reachable endpoint, which local dev doesn't have. Revisit this when deploying to Railway — a webhook-based sync may be worth adding then, but JIT provisioning can likely stay as the fallback either way.
- [Aug 2026] — Finances v1 rent tracking is a simple ledger, not an auto-generated charge schedule. Taylor's explicit call: log payments as received (`Income` rows with `category: RENT`); "expected vs collected" is a comparison computed on the fly against `Lease.monthlyRent`, not a stored due-date/charge model. A recurring-charge scheduler (auto-generate a due charge each period, apply payments against it) is v2-territory — do not build it into v1 without Taylor asking.
- [Aug 2026] — `Income` and `Expense` store `entityId` directly (not just derived via `property.entityId` on read), same server-derived-never-trusted pattern as `Property.userId`. Reason: CLAUDE.md requires expenses/income "flow to the correct Entity's books" and stay un-commingled between entities — storing `entityId` directly on the record makes entity-scoped financial reporting a direct filter instead of a join through Property every time.
- [Aug 2026] — `Deposit` is a separate model from `Lease.securityDepositAmount`, not an extension of it. `Lease.securityDepositAmount` is the lease-term promise (what the lease says the security deposit is); `Deposit` is the actual ledger of what's held, where (`storageMethod`), and what happened to it at move-out (`status`, `returnedAmount`, itemized `DepositDeduction` rows). Taylor charges a pet deposit separate from the security deposit, refundable independently — so `Deposit` has a `type` field (`SECURITY` / `PET`) rather than being 1:1 with `Lease`; `@@unique([leaseId, type])` allows at most one of each type per lease, each tracked (held/returned/deducted) on its own. Originally built as a `SecurityDeposit` model 1:1 with `Lease` before this came up — renamed/generalized same session, no separate `PetDeposit` model, to avoid duplicating identical CRUD logic. If a third deposit type ever comes up (e.g. key deposit), extend the enum rather than adding another model.
- [Aug 2026] — `ExpenseCategory.LEGAL` added in v1, ahead of the v2 Legal Tracker module. Taylor's call: legal costs (attorney consult, court filing fees, process server) are real cash outflows landlords track for taxes now, independent of whether the full case-timeline/notice-generation Legal Tracker feature exists yet. This is scaffolding for expense tracking only — it does not pull in any v2 Legal Tracker functionality (case linking, notice periods, clause violations), so it doesn't violate "no v2 scope creep into v1."
- [Aug 2026] — `ExpenseCategory.LANDSCAPING`, not `LAWN`. Taylor's call: "lawn" is too narrow — landscaping covers trees, bushes, etc. too, not just the grass, matching the broader "Exterior / Grounds" framing already used in Property Specs. Applied via a hand-written `ALTER TYPE ... RENAME VALUE` migration rather than a Prisma-generated drop/recreate, since `prisma migrate dev` refuses to run non-interactively on a change it flags as data-losing (even though nothing used the old value yet) — renaming the enum value in place is also just safer in general for any future case where rows do exist. Use the same manual-migration approach for any future enum *value* rename (schema-level renames like table/column names can still go through `migrate dev` as usual).
- [Aug 2026] — `ExpenseCategory` has separate `REPAIRS` and `MAINTENANCE` values, not one lumped category. Taylor's call: repairs (fixing something broken) and maintenance (routine/preventive upkeep) are two different things in real landlord bookkeeping, even though they weren't distinguished in CLAUDE.md's original Finances list. Keep them separate in any future expense reporting/categorization (e.g. Schedule E tax flagging in v3) — don't re-merge them.
- [Aug 2026] — A "repair" is not a separate model — it's just a `MaintenanceRequest` (Taylor's call, confirmed after asking). Reactive/ad-hoc work (something's broken) flows through `MaintenanceRequest`'s `OPEN → IN_PROGRESS → CLOSED` lifecycle; recurring/preventive work lives in `MaintenanceSchedule` instead. `ExpenseCategory.REPAIRS` (Finances) is a separate, unrelated concern — how a dollar gets tagged in the books, independent of whether a `MaintenanceRequest` ticket exists for it. Nothing links a `MaintenanceRequest` to an `Expense` automatically — Taylor confirmed maintenance costs stay fully separate from Finances, matching the manual-ledger/no-automation stance; log a matching `Expense` by hand if you want a repair's cost to show up in your books too.
- [Aug 2026] — `MaintenanceStatusChange` has no `changedBy` field yet. v1 has exactly one possible actor (the landlord), so it'd just duplicate the parent request's `userId`. Add `changedBy` once v2's contractor/tenant portals (per the Manora research — zero-friction links, role-scoped views) introduce other actors who can change status.
- [Aug 2026] — `Vendor` is scoped by `userId` only, not property or entity — one vendor (e.g. a plumber) can reasonably service properties under different entities, and CLAUDE.md's vendor directory spec doesn't tie it to a single property.
- [Aug 2026] — After adding new Prisma models, `npx prisma migrate dev` alone does not regenerate the client in this project's setup — run `npx prisma generate` explicitly afterward, and separately apply the migration to the test database (`DATABASE_URL=<test db url> npx prisma migrate deploy`, since there's no dedicated test-migrate script). Discovered when new `Income`/`Expense`/`SecurityDeposit` routes threw "Cannot read properties of undefined" (client not regenerated) and then "table does not exist" (migration only applied to dev db) before tests passed. Do this two-step dance for any future schema change.
- [Aug 2026] — Lease document storage uses a presigned-URL pattern, not a proxy upload through the backend. Reason: `documentUrl` was renamed to `documentKey` and the R2 bucket is private (lease PDFs, IDs, inspection photos are sensitive per CLAUDE.md's file-storage rule) — client PUTs bytes directly to a presigned R2 URL, and downloads always go through a freshly generated short-lived presigned GET URL, never a stored/public URL. Do not switch to a public bucket or store a permanent public `documentUrl` — that would leak sensitive documents. `POST /:id/document-confirm` requires the key to be prefixed `leases/{leaseId}/` before attaching it, so one lease can't claim another lease's uploaded object.
- [Aug 2026] — R2 credentials (`R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET_NAME=steinoak-documents`) live in `backend/.env` only (gitignored), same as Clerk keys — never commit them. Verified working with a real round-trip script (upload/download/delete against the live bucket) run once during setup and then deleted; do not leave ad-hoc smoke-test scripts checked into the repo.
- [Aug 2026] — Any resource router that needs to call an external service (R2, and previously Clerk in `app.js`) should take it as an injectable dependency via a factory function (e.g. `createLeasesRoutes({ r2 })`), defaulting to the real client, so tests can pass a mock without hitting the network — `vi.mock()` doesn't work in this project's CommonJS setup (see the `app.js` factory decision above). `leases.routes.js` is the first resource router (beyond `app.js` itself) to follow this pattern; use it as the template for any future route module that talks to an external API.
- [Aug 2026] — R2 bucket CORS policy has to be set manually via the Cloudflare dashboard (R2 → bucket → Settings → CORS Policy) — the scoped "Object Read & Write" API token this project uses cannot read or write bucket-level CORS config via the S3 API (`AccessDenied` on `GetBucketCorsCommand`/`PutBucketCorsCommand`). Do not retry automating this via a script; it needs either dashboard access or a broader API token, and dashboard access is simpler. Remember to add the production frontend origin to that policy when deploying, alongside `http://localhost:5173`.
- [Aug 2026] — ~~Top-level nav pages for cross-property data (Tenants, Leases, Finances, Maintenance) are read-mostly indexes that link back into the property/lease/vendor detail pages for actual create/edit/delete — they are not a second place to manage the same records.~~ **Superseded later in Aug 2026** — Taylor wanted full add/edit parity on these pages too, not just links back, so all four now support it (see What's been built). The Vendors section's "Add vendor" form (vendors aren't scoped to any single property) was the original exception and needed no change. Left here so the history of the original call is visible — do not resurrect the read-only-top-level-pages rule without Taylor asking.
- [Aug 2026] — Global search's fuzzy match uses Postgres `word_similarity()`, not plain `similarity()`. `similarity()` compares whole-string trigram sets on both sides, so a short typo'd query scores too low against a long concatenated field (address + city + zip, etc.) — diluted by the field's length, not the query's. `word_similarity()` finds the best-matching extent within the longer text instead, which is the actual shape of "does this short query fuzzy-match part of a longer string." Caught by a failing test during development, not by inspection — worth remembering if search's match quality is ever revisited.
- [Aug 2026] — Global search deliberately does not build trigram GIN indexes on the searched columns. They'd need to be functional indexes over `concat_ws(...)` expressions (multiple fields searched together), but `concat_ws` is Postgres-STABLE, not IMMUTABLE, and functional indexes require IMMUTABLE — confirmed via `pg_proc`. Building a custom IMMUTABLE wrapper function was considered and rejected: this app's real scale (one landlord, dozens of records per table) makes a sequential similarity/soundex scan already sub-millisecond, so the added schema complexity has no current payoff. Revisit only if this becomes genuine multi-tenant SaaS traffic.
- [Aug 2026] — "Bob" finding "Robert" in search is a nickname/alias relationship, not a phonetic or fuzzy-match one — Soundex("Bob") ≠ Soundex("Robert"), and they aren't trigram-similar either. Solved with a small hardcoded nickname dictionary (`backend/src/lib/nicknames.js`, ~60 clusters covering common English first names), expanding a single-word query to its cluster-mates before matching. Not attempted for multi-word queries (full names, addresses) — nicknames only make sense for a bare first name. Extend the array directly for any gap that comes up; do not try to derive this from a phonetic algorithm.
- [Aug 2026] — `Occupant`/`Pet`/`Vehicle` link to `Tenant`, not `Lease`. Originally modeled on `Lease` (see the `nonLeaseOccupantCount` → `Occupant` entry above), which meant every pet/occupant/vehicle had to be manually recreated every time a tenant moved to a new unit/lease, since a `Lease` is per-term paperwork that ends while the `Tenant` record persists. Re-pointing at `Tenant` means attaching an existing tenant to a new lease (via the existing `LeaseTenant` join) brings their records along automatically. With co-tenants, one tenant is picked as the anchor (defaults to Primary, per `LeaseTenant.role`) — a technical pointer only, not a claim about real-world "ownership" of a pet or a person. Known limitation, accepted deliberately: if a co-tenant who owns the anchor moves out and another stays, the record follows the one who left and needs a manual one-time re-link (still just an edit, not a recreation) — better than the status quo, not a promise to handle every household-split scenario automatically.
- [Aug 2026] — `Entity`'s locked-default-entity rule only covers `legalName`/`entityType` — every other field (contact info, EIN, registered agent, bank account, formation dates) stays editable on the default entity via `PUT /api/entities/:id`. Reason: those fields don't risk the "silently converted into an LLC, dragging along other properties" problem the lock exists to prevent; Taylor may reasonably want a dedicated business email even on the default Self / Personal entity. Only reject the request if `legalName` or `entityType` is present in the body when `isDefault` is true.
- [Aug 2026] — `LeaseClause` snapshots a `Clause`'s (or template's) fields at attach time rather than referencing it live. Reason: once a lease has been generated (and potentially signed, potentially the document Taylor relies on in court), editing the master library clause afterward — or us shipping a change to the provided template set — must never silently rewrite what that past lease says. `sourceClauseId`/`sourceTemplateId` are kept only for traceability (a "Provided" badge), `sourceClauseId` is `onDelete: SetNull` — deleting a library clause never touches leases it's already attached to. Same instinct as Property Specs' retire/replace lifecycle and the immutable `MaintenanceStatusChange`/`MaintenanceScheduleCompletion` audit rows. Do not switch `LeaseClause` to a live join/reference — that would be a legal-accuracy regression, not a simplification.
- [Aug 2026] — Lease Builder's violation builder and clause→legal-action linking (both in CLAUDE.md's v2 Lease Builder spec) were deliberately not built alongside the clause library/PDF generation. Reason: both depend on Legal Tracker's own data shape, and Legal Tracker is last in the v2 roadmap specifically because of its legal-accuracy risk (memory `project_v2_roadmap_priority`) — building violation-linking now would mean guessing at a module that hasn't been designed yet. Revisit when Legal Tracker is actually being built, not before.
- [Aug 2026] — `Clause.group`/`LeaseClause.group` is a plain string validated against a fixed list in code (`backend/src/lib/clauseGroups.js`), not a Prisma enum. Reason: Taylor wants to rename/reorder the group list freely over time, and an enum value rename already needed a hand-written migration once (`ExpenseCategory.LANDSCAPING`) — a plain array is a one-line code edit instead. Clause section numbering (e.g. `"3.2"`) is likewise never a stored field on either model — always computed at read time from a clause's group position + attach order (`leaseClauseOrdering.js`), specifically because Taylor pointed out numbering is "assigned when the lease is built, not prior."
- [Aug 2026] — `isEarlyTermination` was removed from `Clause`/`LeaseClause` entirely (it existed for one day). Taylor's call after using the first pass: no special checkbox/badge/automated "missing clause" warning for this one specific clause — the concept is instead handled by it simply living in the recommended/provided template set. Do not reintroduce a single-clause special-case flag; if a future "make sure you've covered the basics" nudge is wanted, it should work off the recommended/provided set generally, not one hardcoded clause type.
- [Aug 2026] — ~~Clause `bodyText` can contain `{{variable}}` placeholders (`backend/src/lib/clauseVariables.js`), resolved only from fields already on `Lease`/`Property`/`Entity`/`Tenant` — never from new structured fields invented just to back a variable. Anything Taylor's real lease captures that isn't already modeled here (smoking policy, per-utility responsibility, guest-day limits) stays as plain clause text a landlord edits per lease.~~ **Partially superseded during the clause library review pass**: Taylor did ask for several of these as real things (per-utility responsibility split into its own clauses, a tenant-insurance minimum as a real `Lease` field), so variables now also resolve from linked `Occupant`/`Appliance`/`Deposit` records, not just direct `Lease`/`Property`/`Entity`/`Tenant` fields. The underlying rule stands, just widened: resolve only from data that's already real and linked somewhere — still never invent a field solely to back a variable nobody asked for as a real feature in its own right. Smoking policy and guest-day limits (Colorado's 14-day/6-month rule) are now real clauses too, but deliberately still plain text, not variables — they're binary/one-off enough that a clause with the number baked into its prose reads better than `{{guest_day_limit}}` would.
- [Aug 2026] — Considered and rejected during the clause library review pass: auto-attaching the Lead-Based Paint Disclosure clause based on the property's construction year (the source Zillow lease does this unconditionally, including on Taylor's own post-2000 property). Building year-conditional attach logic for one specific clause would reintroduce exactly the single-clause special-casing already rejected once for `isEarlyTermination` (see above). The clause's own body text is already self-conditional ("if the property was built before 1978..."), so including it regardless of year is harmless — the existing "mark as default" mechanism already delivers "attached to every new lease automatically" with zero new code. Keep this the pattern for any future clause whose applicability depends on a fact the app happens to store: prefer self-conditional clause text + the existing default-clause mechanism over new per-clause logic.
- [Aug 2026] — Considered and rejected during the clause library review pass: bespoke toggle/checkbox UI per clause type (separate custom controls for "amounts due," "utilities paid," "parking/storage space," etc.) for filling in per-lease specifics. `LeaseBuilderSection` already has a free-text "Edit" control on every attached clause (scoped to that lease's own copy, pre-existing) plus a live `resolvedBodyText` preview — together these already handle every case generically. New clauses needing lease-specific fill-in use a `[bracketed prompt]` convention in their body text as the cue; landlords fill it in via the existing Edit control. Do not build per-clause-type structured field UI — it doesn't scale as the library grows, and the generic edit-and-preview flow already does the job.
- [Aug 2026] — Tenant's Property & Renter's Insurance changed from "encouraged" to "required," backed by a new `Lease.tenantInsuranceMinimumCoverage` field (nullable — a landlord who doesn't want to require a minimum just leaves it unset, in which case `{{tenant_insurance_minimum}}` shows as a raw placeholder in that clause, same "notice the unset value" behavior as every other dollar-amount variable). Taylor's call, matching what the real Zillow-drafted lease already required.
- [Aug 2026] — ~~The Colorado guest-policy clause (14-day/6-month rule) states only the operative restriction on Tenant, not the underlying reason (Colorado tenancy-rights law) — Taylor's explicit instruction: tenants shouldn't be handed the legal mechanism they're being restricted from triggering.~~ **Superseded later in Aug 2026** — the flagged "confirm against actual Colorado statute" turned out to matter: verification found no such provision in the statute usually cited (§ 13-40-104), and the same number is copy-pasted identically across CO/CA/FL landlord-content sites — a sign of unverified marketing content, not real law in any of the three. The clause was renamed "Guest Policy (14-Day Limit)" and untagged (`state: null`) rather than kept as a Colorado-specific clause implying legal backing it doesn't have. The underlying instinct (state the rule, not the "why," for a state-specific restriction) still stands and applies to the real state-tagged clauses added afterward — see the entry below. Left here so the history is visible; do not re-tag this clause to a specific state without fresh primary-source verification.
- [Aug 2026] — **Any state-specific clause claim must be verified against a primary source (a state's own statute text via .gov, law.justia.com, or casetext.com) before shipping it in `clauseTemplates.js` — never trust a secondary landlord-content site's number, even when multiple such sites agree.** Established by the guest-policy episode above: the "14 days/6 months" figure was repeated identically across several sites for three different states, which reads as confidence but is actually evidence of copied content, not independent verification. Confirmed again during the subsequent 28-state research pass — several secondary-sourced round-1 claims turned out to be wrong or overstated when checked against primary text (Virginia's mold disclosure has no "10 sq ft" threshold — invented by a content site; a California flood-disclosure statute citation was wrong; Nevada's foreclosure-disclosure violation isn't literally a misdemeanor). When a primary source can't be found after a real attempt, say so and don't ship the clause rather than presenting a secondary-sourced guess as fact — see memory `project_state_law_research_aug2026` for the full list of what was verified vs. explicitly dropped for this reason.
- [Aug 2026] — Maintenance request's Tenant dropdown and "Reported by" free-text field looked redundant since you'd naturally want to type the tenant's name in both. Resolved by having the Tenant select auto-fill and disable "Reported by" with the selected tenant's name; "Reported by" only opens for manual entry when no tenant is linked (landlord noticed it themselves, a neighbor called, etc.). Keep this auto-fill/lock pattern for any similar "structured link + free-text fallback" field pairing in the future.
- [Aug 2026] — Taylor got outside research from ChatGPT on how to architect nationwide jurisdictional coverage for both lease clauses and Legal Tracker (full exchange captured in "Nationwide jurisdictional coverage plan" below). Considered adopting its proposed formal rules-database model (typed REQUIRED/CONDITIONAL/PROHIBITED/CONSTRAINED/RECOMMENDED rule objects, decoupled from clauses, plus a municipal-overlay layer and an automated legal-change-monitoring pipeline) — **decided not to, for now.** Reason: the existing lightweight `Clause.states[]` + `supersedes` mechanism already captures the same REQUIRED/CONSTRAINED/supersede intent at far lower cost, the app has zero real multi-municipality usage yet to justify a city-overlay layer, and an automated monitoring pipeline is solving a maintenance problem the library doesn't have at its current size. Do not build the separate rules-database/municipal-layer/monitoring-pipeline machinery unless the app actually reaches multi-state, multi-landlord, or multi-municipality real usage — revisit then, not preemptively.
- [Aug 2026] — **Finances Automation (Rent Tracker) was designed collaboratively before any code was written** ("let's vibe code that for a bit before touching code," Taylor's framing) — several real scope decisions came out of that conversation worth recording since they shaped the whole build: (1) compute-on-read only, no scheduler/cron and no auto-written `Income` rows — landlord still confirms every dollar, matching the manual-ledger stance held everywhere else in Finances; (2) the Rent Tracker is per-property (not a portfolio-wide page) — the "which properties need attention" need is served by the property list's status pill + a new Dashboard section instead; (3) bookkeeping payment-categorization (fees-first waterfall, per the lease's own Application of Payments clause) must never be reused to decide legal eviction eligibility — Colorado (at least) doesn't allow evicting over unpaid late fees alone, only unpaid rent, and the two calculations can legitimately disagree on the same set of payments (see memory `project_late_fees_not_eviction_basis`); (4) any property-level status pill can safely assume one active lease per property (Taylor confirmed the existing 1-property-1-active-lease rule holds; a genuine multi-unit model is a separate, not-yet-designed question — memory `project_multiunit_property_model_question`). Do not revisit any of these without Taylor raising it again.
- [Aug 2026] — **A payment is always exactly one `Income` row, never split into several — even when it covers more than one category or period.** The first Rent Tracker build got this wrong (see "What's been built"): it created one row per rent/fee bucket, which desynced the ledger from what actually happened and made receipt-attachment nonsensical (which of the split rows does one receipt belong to?). Fixed same session, caught live by Taylor. The category/period breakdown for a split payment now lives on `IncomeAllocation` child rows instead — the Ledger still shows one line per real transaction, with the breakdown as descriptive text underneath. Keep this the rule for any future feature that logs a financial transaction on the landlord's behalf: one row per real-world event, full stop; decompose into child records if you need finer-grained data, never by multiplying the top-level ledger entry.

## 🐛 Known issues / blockers
> Things that are broken, stuck, or need a decision before moving forward.
> Clear these out as they're resolved.

- **Deleting a `Property` with any Tenant/Lease/Income (etc.) attached fails.** Found 2026-08-19 while seeding Rent Tracker demo data. None of those relations have `onDelete: Cascade` back to `Property` in the schema, and `DELETE /api/properties/:id` doesn't clean up dependents first either — it's a raw `prisma.property.delete()`. Not fixing this by adding cascade deletes, though — Taylor's call: properties should never be hard-deleted at all, only archived (locked down, hidden from normal views, recoverable, visible via some kind of history view). That's real net-new backlog work, not a quick fix — see "Standing backlog" above. Until that's built, a property with anything attached can't be removed through the app.

---

## Project overview

A SaaS web app for landlords to manage rental properties end-to-end.
Built from real landlord experience — every feature exists because a real problem was encountered.

**Working name:** Steinoak (placeholder — not final)
**Owner:** Taylor (Steinbaugh Estates LLC) — solo developer
**Business goal:** Use it personally first, then open to other landlords as a paid SaaS product

**Branding:** Logo files live in `logos/` (seasonal oak variants — acorn, spring, summer, fall, winter). Font: **Poppins**.

---

## Tech stack

| Layer | Technology | Notes |
|---|---|---|
| Frontend | React + Vite | Built — full v1 UI across all modules |
| Styling | Tailwind CSS v4 | In use — watch for preflight spacing issues |
| Routing | React Router | In use |
| Backend | Node + Express | Built — full v1 API across all modules |
| ORM | Prisma | In use — `prisma-client-js` generator, see decisions log |
| Database | PostgreSQL | In use — local dev + test databases |
| Auth | Clerk | Wired up — sign-in/sign-up, JIT user provisioning, dev keys only so far |
| File storage | Cloudflare R2 | Wired up — presigned-URL uploads for lease/tenant/income/expense documents |
| Frontend hosting | Vercel | Not yet set up |
| Backend hosting | Railway | Not yet set up |

### Tailwind notes
- Tailwind preflight resets browser defaults — headings lose size, paragraphs lose margin. Compensate explicitly.
- Do not let Tailwind purge classes unexpectedly in production. Safelist dynamic classes.
- If Tailwind becomes unmanageable, flag it before removing — do not silently eject.

---

## Architecture decisions

### Backend-first development
Build and test backend routes/models before building frontend UI.
Frontend test files are examples only — do not update them until backend is solid.

### Testing
- Use Vitest for both frontend and backend (consistent toolchain)
- Use real Postgres test database — not in-memory SQLite
- First backend module to test: `properties.routes.js`

### Auth approach
- Use Clerk for authentication — do not build auth from scratch
- Roles: `landlord` (default), `system_admin`
- RBAC via `ROLE_GRANTS` — landlord has VIEW, CREATE, UPDATE, ARCHIVE on tenant permissions
- Roles stored as strings e.g. `"landlord"`, `"system_admin"`
- Tenant portal: design for it from day one, but do NOT build tenant-facing UI until v2
- Multi-user ready from day one — other landlords will eventually sign up

### Billing
- Skip for MVP — add Stripe later when ready to charge
- Do not paint the data model into a corner — keep `userId` / `organizationId` on all records

---

## MVP scope (v1 — build this first)

1. **Entities / LLCs** — the legal owner of each property (Self or an LLC)
2. **Properties** — add and manage properties, each assigned to an entity
3. **Tenants + Leases (basic)** — profiles, IDs, upload lease PDF, enter key lease fields
4. **Finances** — rent tracking, expenses, security deposits
5. **Maintenance** — requests, vendors, preventive schedules
6. **User auth** — Clerk, multi-user ready

Everything else is **v2**. Do not scope creep into v2 during v1.

---

## Full feature set (v2 and beyond)

### Lease builder (v2)
- Build a lease from scratch inside the app using a clause library
- Clause library: store verbatim lease language per clause, tagged by section number
- Mark clauses as violated and link to legal actions
- Violation builder: select clause → describe what happened → generate court-ready summary
- Key lesson (Taylor): magistrates want exact lease language, not summaries. Store verbatim.
- Key lesson (Taylor): early termination clause is critical — tenants abandoned lease and stopped paying rent. The lease only stated the term, not an explicit early termination penalty. App should flag if a lease is missing this clause.
- Template library: common clauses pre-populated, landlord edits to match their lease

### Legal tracker (v2)
- State-specific notice periods and delivery rules (all 50 US states)
- Action types: demand for payment, cure or quit, eviction complaint, summons, certified mail, court hearing, judgment, writ of restitution
- Full chronological timeline per case — date, delivery method, document attached
- Deadline calculator based on state rules
- State dropdown updates rules dynamically
- Links to lease clauses violated (from clause library)
- Court summary generator — clause text + violation description + evidence checklist

### Move-in / Move-out inspections (v2)
- Organized by room
- Per-room: photo/video uploads, condition ratings (Good / Fair / Poor) per item
- Move-out: damage notes with estimated repair cost per item
- Compare tab: side-by-side move-in vs move-out photo for every item that changed condition
- Signatures tab: tenant acknowledgment (email confirmation counts) with timestamp
- Deposit deduction letter generator: auto-generates the formal written notice to tenant
  itemizing damage deductions from deposit — required by Colorado law within 30 days of move-out
- Key lesson (Taylor): document everything before handing over keys, get tenant acknowledgment in writing

### Insurance (v2)
- Landlord policy: insurer, policy type, policy number, effective/expiration dates, named insured (LLC — pulls from Entity), agent contact, claims phone, annual premium, payment schedule
- Coverage details: dwelling, other structures, liability, medical payments, loss of rents, perils covered vs excluded
- Coverage adequacy check: compares coverage to estimated replacement cost, flags if underinsured
- Payment tracking: monthly log with paid/upcoming, premium history year over year
- Claims: full timeline per claim (damage → photos → filed → adjuster → settlement), estimated payout after deductible, effect on premium, repair linkage to maintenance record
- Documents: policy docs, declarations pages, claim photos, settlement letters
- Tenant renter's insurance: tracked in Tenant profile, NOT here

### Property specs (v2) — dual view (by room AND by category)
Two ways to view the same data:
- **By room** — see everything about one room (paint, flooring, fixtures, appliances, countertops)
- **By category** — see all paint across every room, all flooring across every room, etc.
Same data, two lenses. User toggles between views.

All of the following live INSIDE Property Specs — they are not separate modules:

#### Property Specs → Paint
Per location (e.g. "Exterior body", "Kitchen cabinets", "Master bedroom walls"):
- Brand, color name, color code, sheen, base, formula (critical for touch-ups — flag if not saved)
- Gallons used, date painted, painted by, touch-up paint storage location
- Key lesson (Taylor): always note where leftover paint is stored — saves you at tenant turnover

#### Property Specs → Flooring
- Location / area covered
- Brand, product name, type (LVP, tile, carpet, hardwood)
- SKU/item number, plank/tile size, thickness, wear layer (LVP)
- Sq ft per box, boxes installed, sq ft covered, boxes leftover and where stored
- Dye lot / run number — optional, nice to have if noted at install, but not required or flagged
- Install method, underlayment, installed by, install date, price per box, total cost, warranty
- Leftover inventory summary card: flag when spare stock hits zero
- Key lesson (Taylor): keep 2-3 spare boxes of each floor type on hand

#### Property Specs → Countertops
- Location, brand, product name, material (quartz, granite, cultured marble, laminate)
- Thickness, edge profile, sq ft, installed by, date, cost, warranty, sealer info if applicable

#### Property Specs → Fixtures (per room)
- Sinks: brand, model, type, size, material, finish, warranty
- Faucets: brand, collection, model #, finish (store finish — critical for matching replacements),
  holes required, warranty, cartridge part number
- Showers/tubs: brand, model, type, size, drain location, surround, caulk color, recaulk schedule
- Toilets: brand, model, GPF, height, rough-in, flapper part #, fill valve part #, color
- Hardware: brand, style, finish, center-to-center (pulls), quantity, spare count

#### Property Specs → Appliances
- Make, model, year of manufacture, serial number
- Warranty expiration — alert 60-90 days before expiry
- Maintenance interval and last service date
- Filter sizes and part numbers
- Parts replaced: date, part, cost
- Service history: date, vendor, cost
- Preferred vendor contact
- Estimated remaining lifespan

#### Property Specs → Backsplash
- Brand, product, material, tile size
- Grout color and brand, grout type, joint size, spare tiles on hand

#### Property Specs → Exterior / Grounds
Landscaping lives here — NOT a separate module:
- What's on the property: trees, bushes, lawn (type, approximate age, size if known — all optional)
- Last trimmed / treated / fertilized: date, by whom, cost
- Landscaping service: contractor, contract type (monthly/seasonal), cost
- Recurring landscaping service also tracked in Maintenance as a scheduled item

---

## Nationwide jurisdictional coverage plan (lease clauses + Legal Tracker)

> Captured Aug 2026 from outside research Taylor did with ChatGPT on how to scale both the
> Lease Builder clause library and the not-yet-built Legal Tracker to cover all 50 states (+
> municipalities) without re-researching everything from scratch per state. This is the one
> place this research is recorded — Taylor is not saving it anywhere else. See the decisions
> log entry (Aug 2026, "outside research from ChatGPT") for what was and wasn't adopted.

### The core model: jurisdiction as inherited layers, not a flat per-state matrix

Don't model "a Colorado lease" / "a Texas lease" / "a Denver lease" as separate documents, and
don't model eviction process as "one procedure per county." Both are actually a stack of layers,
where each layer only needs to store what it adds or overrides on top of the layer above it:

- **Lease content:** `Federal → State → Municipality → Property/tenancy type → Landlord preference`
  (e.g. Denver would store only what Denver adds on top of Colorado's baseline, not restate it).
- **Eviction process:** `State → judicial district/circuit → county/courthouse → municipality`,
  plus a property/tenancy-type branch (subsidized housing, mobile homes, tenancy-at-will, etc.,
  since those can add their own procedural branches regardless of location).

For lease content specifically, ChatGPT proposed classifying each rule as one of five types —
useful vocabulary even though we're not building a separate rules-database object for this
(see decisions log):
- `REQUIRED` — must be in the lease
- `CONDITIONAL` — required only if some property/tenancy fact is true (e.g. built pre-1978 →
  lead paint disclosure)
- `PROHIBITED` — lease cannot contain this provision at all
- `CONSTRAINED` — allowed, but only within a statutory limit (late fees, deposit caps, entry
  notice periods, etc.)
- `RECOMMENDED` — not legally required, but risk-management advisable (this is exactly Taylor's
  own early-termination lesson: not government-mandated, but materially affects enforceability)

**What we're actually doing with this**: our existing `Clause.states` (`String[]`) + `supersedes`
fields already cover the practical intent of REQUIRED/CONSTRAINED/supersede without a separate
rules table — a state-tagged clause *is* a CONSTRAINED or REQUIRED rule, a `supersedes` link *is*
the "this fully replaces the universal version" case. Keep using that mechanism for future clause
research passes. Do not build a formal decoupled rules-database layer, and do not build a
municipal-overlay layer, unless the app reaches real multi-municipality usage that actually needs
it — see the decisions log entry for why this was deferred rather than adopted outright.

### How to research it, state by state (same discipline already proven out)

This matches the primary-source-or-don't-ship discipline already established in
`project_state_law_research_aug2026` (the fabricated Colorado guest-policy episode) — ChatGPT's
research independently arrived at the same rule:

- **Canonical sources are government primary sources only**: each state's own legislature/code
  publisher for statutes, the state's judiciary for court rules/forms/procedure, and the
  municipality's own code for city overlays. Never a landlord-content site, even when several
  agree — that's a sign of copied content, not independent verification.
- **Cornell Legal Information Institute (Cornell LII)** — state law collection + landlord-tenant
  topic area — is a good *discovery/index* tool for finding where a state's law lives, but treat
  it as a pointer only; always trace through to the actual primary source it names.
- Some states publish their own curated landlord-tenant guides, which are a great starting index
  (someone in the legislature already did partial research for you) — Colorado's Legislative
  Council publishes "Laws Regulating Landlords and Tenants" covering residential leases, federal
  law interplay, and examples of stricter local law. Look for the equivalent in each new state.
- Useful search patterns per state: `site:[state legislature domain] landlord tenant`,
  `site:[state court domain] eviction`, `site:[state court domain] landlord tenant forms`,
  `"[state] residential landlord tenant act"`, `"[state] required lease disclosures"`,
  `"[state] eviction court forms"`.
- **Build a "source registry" before researching individual rules**: one row per state naming
  where its statutes, courts, eviction guide, forms, and municipal-code portal live. Do this once
  per state as the first step of any future research pass — it turns "research this state's law"
  into a repeatable pipeline instead of starting from zero each time.
- No single database (commercial or government) covers this nationally — don't adopt a licensed
  commercial dataset as the canonical source (licensing/redistribution/update-guarantee/vendor-
  lock risk). Keep building our own normalized, primary-source-cited data on top of government
  sources, the same way `clauseTemplates.js` already does.
- Municipal overlays are the hardest layer (no national repository of municipal codes) — when
  they're ever tackled, do it selectively for cities with real, substantial landlord-tenant
  ordinances (Denver, Boulder, NYC, Chicago, LA, etc. were the examples raised), not
  exhaustively across ~19,000 incorporated places. Several real candidates were already
  identified and explicitly dropped for this exact reason — see
  `project_state_law_research_aug2026`'s "explicitly dropped" list (NYC's bed bug disclosure
  ordinance, Chicago's local deposit cap) for what's waiting once a city-level tagging mechanism
  exists.
- A future idea, explicitly not being built now: an AI pipeline that periodically re-checks state
  legislature/judiciary/municipal sources for changes and flags a suggested diff for a human to
  review — never auto-applies a change to a live legal rule. Revisit only as a v3+ idea if the
  clause library's maintenance burden ever actually becomes a problem at the current manual pace.

### Rollout order

1. **Lease clauses**: continue expanding via the existing lightweight tagging model (no
   architecture change). Next batch is the "explicitly dropped" list in
   `project_state_law_research_aug2026` — those already have partial research done, just need
   either a primary source found or a permanent pass.
2. **Legal Tracker**: build Colorado-only first (matches the existing v2 roadmap ordering —
   `project_v2_roadmap_priority` — where Legal Tracker is deliberately last due to legal-accuracy
   risk, and Taylor already has real Colorado eviction experience/documents to test the model
   against). A second state is what actually reveals whether the jurisdictional model is genuinely
   general or accidentally Colorado-shaped — don't build for 50 states up front. Colorado-specific
   pointers ChatGPT surfaced for when this starts: the CO Judicial Branch's residential eviction
   packet (JDF forms 99–109; JDF 100 is the instructions form) and the same CO Legislative Council
   "Laws Regulating Landlords and Tenants" guide mentioned above.
3. **Eviction-rule field sketch** (from ChatGPT, not yet a committed schema — a starting point
   when Legal Tracker's actual data model gets designed): jurisdiction, eviction reason, required
   notice, notice period, required form, service method, waiting period, court, complaint/form,
   filing fee, service requirements, hearing process, judgment, writ, sheriff process, appeal/stay
   rules, authority (statute citation), source URL, effective date, last-verified date — mirrors
   the citation/effective-date/source-URL discipline `clauseTemplates.js` already uses per clause.
4. Only after Colorado's model is proven out for both features: expand state by state, following
   the same primary-source discipline, and only add municipal granularity where a real need shows
   up (see above).

---

## Data model notes

### Ownership hierarchy
```
User (Taylor)
  └── Entity (Steinbaugh Estates LLC — or "Self / Personal")
        └── Property (123 Maple St, Frederick CO)
```

### Entity / LLC
- Every property is owned by an Entity
- Entity can be "Self / Personal" for landlords without an LLC — this is valid and common
- Entity is editable — landlords often buy personally then transfer to an LLC later
- Fields: legalName, entityType (LLC / S-Corp / Personal / Other), stateOfFormation,
  ein (encrypted), registeredAgent, formationDate, annualReportDueDate (reminder 60 days out),
  bankAccount (which account rent flows into)
- annualReportDueDate reminder is important — missing this can dissolve the LLC and wipe out liability protection
- Named insured on insurance policy pulls from Entity, not from User
- Landlord name on lease is the Entity name, not the user's personal name
- Current entities (Taylor): Steinbaugh Estates LLC → 123 Maple St, Frederick CO

### Multi-property / multi-landlord
- Every record has a `propertyId`
- Every record has an `entityId` (which entity/LLC owns the property)
- Every record has a `userId` (ultimate owner — for dashboard access across all entities)
- Dashboard shows all properties across all entities for the logged-in user

### Tenants
- Multiple tenants per lease (married couple, roommates, guarantors)
- Roles: Primary (main contact, signs first), Co-tenant, Guarantor (legally responsible, not an occupant)
- Non-lease occupants tracked separately (children, aging parent) — occupancy count only
- Fields: name, phone, email, date of birth, ID verified, credit check status/date, employment
- Emergency contact per tenant
- Rent is always due in full — do NOT track individual payment splits between tenants
  If rent is late, ALL tenants are late regardless of who paid what
- Renter's insurance (tracked here, NOT in Insurance module):
  insurer, policy number, coverage amount, expiration date,
  landlord listed as additional insured Y/N, certificate on file,
  auto-reminder 60 days before expiration
- ID documents: type, state, uploaded date, expiration date, alert before expiry
- Additional documents: pay stubs, SSN verification, pet vaccination records

### Leases — v1 (basic)
v1 is upload + key fields only. Full lease builder is v2.
- Upload signed lease PDF
- Key fields: tenants (linked), start date, end date, monthly rent, security deposit amount,
  late fee amount, late fee grace period (days), pet policy (Y/N), pet rent amount,
  renewal rent increase cap (e.g. "3% max annually" — what the lease promises tenants),
  notes / special terms (free text)
- Lease status: Active, Expired, Month-to-month, Terminated

### Leases — v2 (full)
- Clause library (verbatim text, section number, category tag)
- Clauses linkable to legal actions
- Violation builder
- Lease generator from clause templates

### Finances — v1 (basics only, no automation)
v1 is manual entry only. You log income and expenses by hand as they happen — there is no
automation yet: no auto-generated recurring rent charges, no automatic late-fee calculation,
no payment/due-date reminders, no recurring-expense scheduling, no reporting or analytics
beyond raw CRUD + filtering. "Rent expected vs collected" is a comparison a future UI computes
on the fly against `Lease.monthlyRent` — it is not a stored due-date/charge schedule. Any of
that automation is a deliberate later add, not an oversight — see the decisions log.
- Income: rent (expected vs collected), late fees, pet rent, deposits received
- Expenses: mortgage, utilities, repairs, maintenance, landscaping, insurance premiums, tax, legal, other — repairs (fixing something broken) and maintenance (routine/preventive upkeep) are tracked as separate categories, per Taylor's real-world distinction. "Landscaping" (not "lawn") since it covers more than just the lawn — trees, bushes, etc., matching the Property Specs → Exterior/Grounds section. "Legal" is scaffolded into v1 ahead of the full v2 Legal Tracker module — see decisions log
- Deposits: security deposit and pet deposit, each tracked independently — amount held, storage method (escrow account, etc.), deductions, return status
- Expenses flow to the correct Entity's books — do not commingle between entities

### Maintenance
> Before building this module, re-read "Competitive research: Manora" above — its
> property-centric-history and zero-friction-link design choices should shape this schema.

- Request: title, description, reported by, reported date, status, estimated cost, actual cost
- Status flow: Open → In Progress → Closed
- Linked to: property, tenant (if reported by tenant), vendor
- Preventive schedule: interval, last done, next due — auto-alert when overdue
- Vendor directory: name, trade, phone, preferred Y/N, cost history
- Landscaping service lives here as a recurring scheduled item

### Legal (v2)
- Case linked to: property, tenant(s), lease
- Actions linked to: lease clauses violated
- Documents attached per action
- State stored per property — drives notice period calculations

---

## Taylor's real-world lessons
> These are lessons from Taylor's actual landlord experience — not generic tips.
> Each one shaped a specific feature. Do not add to this list without Taylor's input.

1. **Lease clause visibility in court** — in a hearing, Taylor couldn't quickly show the magistrate which exact clause the tenant broke, or the verbatim language. The clause library in v2 exists specifically because of this. Magistrates want the exact words, not a summary.

2. **Early termination** — tenants abandoned the lease mid-term and stopped paying rent. The lease stated the term dates but had no explicit early termination penalty clause. Taylor has since added one. The app should flag leases missing an early termination clause.

3. **Move-in documentation** — photograph and video everything before handing keys. Get tenant acknowledgment in writing (email reply counts). Side-by-side comparison at move-out is your deposit dispute defense.

4. **Touch-up paint storage** — always note where leftover paint is stored (e.g. "labeled quart, garage shelf"). Critical at tenant turnover when you need to touch up walls.

5. **Spare flooring** — keep 2-3 spare boxes of each floor type. If a floor gets damaged and the product is discontinued, you'll need those spares. Flag when spare stock hits zero.

---

## Competitive research: Manora

> Discovered while brainstorming names with Claude Desktop. Not a landlord lesson from Taylor —
> external research to inform the Maintenance module's design when it's built.

Manora (manora.io) is an early-access, maintenance-only app for landlords — no rent, leases, or accounting. Core flow: tenant reports an issue via a unique link (no login/app required) → landlord classifies urgency/category and assigns a contractor → contractor gets a dedicated portal (invite-only, no account needed) to accept, upload photos, log costs → landlord reviews and closes. Every property automatically builds a searchable maintenance history.

Design choices worth incorporating into our maintenance module:
- **Property-centric history, not task-centric** — repairs, visits, and photos roll up into a permanent per-property timeline. Build the data model around "property → full history," not "list of requests."
- **Zero-friction entry points** — tenants and contractors interact via unique, revocable links with no account required.
- **Role-based access separation** — landlord/property manager, contractor, and tenant each see only their own scoped view; contractor sees only assigned jobs; tenant links are per-property and revocable.
- **Full audit trail as a selling point** — every status change is timestamped and attributed, surfaced to the user, not just logged internally.
- **Sharp problem framing in positioning** — built around a concrete pain point ("repairs coordinated over WhatsApp get lost"), not generic "manage your properties" messaging.
- **Reporting layer** — cost per property/contractor, average resolution time, portfolio-level view.

**Differentiation angle:** Manora doesn't do rent, leases, or accounting — so "everything Manora does for maintenance, plus the rest of property management" is a clean positioning story once our maintenance module is built.

---

## UI/UX principles

- **Room-by-room** is the primary navigation for property specs — that's how landlords think
- **Category view** is a secondary lens — "show me all my paint" when planning a project
- Dual-view toggle (By Room / By Category) on the same data — not duplicate data
- Condition ratings: Good / Fair / Poor — simple, tappable, not a text field
- Badges for status: green = good, amber = warning, red = urgent/overdue/damage
- Expand/collapse for detail — keep list views clean, details on demand
- Every legal action has a timeline — date, method, document, outcome
- State selector on legal module drives all notice period calculations dynamically
- Warnings surface proactively: overdue maintenance, expiring warranties, upcoming deadlines, expiring IDs

---

## What NOT to build (scope boundaries)

- **No separate landscaping module** — lives in Property Specs (Exterior) + Maintenance
- **No tenant renter's insurance in the Insurance module** — lives in Tenant profile
- **No billing/Stripe in MVP** — add later
- **No tenant portal UI in MVP** — design data model for it, build UI in v2
- **No full plant database** — just name, age, size, last treated. Keep it simple.
- **Do not let Property Specs become its own app** — it supports the landlord workflow

---

## File/folder conventions

- Backend first — build and test routes before building frontend
- `properties.routes.js` is the first backend module to test
- Frontend test file is an example only — do not update until backend is solid
- All sensitive files (IDs, lease docs, inspection photos) go to Cloudflare R2, not local storage
- EIN and other sensitive financial identifiers stored encrypted at rest

---

## Session startup checklist

At the start of every Claude Code session:
1. Read this entire file
2. Check current focus section above — that's what we're working on
3. Check what was last built (`git log --oneline -10`)
4. Run tests to confirm current state (`npm test`)
5. Ask Taylor what to work on today before writing any code

---

## Session end checklist

At the end of every Claude Code session — Taylor, tell Claude Code:
> *"Update CLAUDE.md to reflect what we built today and any decisions we made."*

Claude Code should:
1. Update **Current focus** to reflect what's next
2. Add completed work to **What's been built**
3. Log any architectural or approach decisions to **Decisions log**
4. Add any new blockers to **Known issues**
5. Update the *Last updated* date at the bottom
6. Remind Taylor to `git commit` before closing

---

*Last updated: 2026-08-19 — Finances Automation (Rent Tracker) built end-to-end: designed collaboratively with Taylor before any code ("vibe coding" session) landing on compute-on-read only (no scheduler), per-property scope, and a hard separation between bookkeeping payment-categorization and any future legal eviction-eligibility logic (Colorado doesn't allow evicting over late fees alone — memory `project_late_fees_not_eviction_basis`). Built: `rentTracker.js` (per-month table, fees-first/oldest-first payment waterfall), late fee waivers, a portfolio-wide status rollup feeding a property-list pill + a new Dashboard "Needs attention" section, and a per-property Ledger/Rent Tracker tab split. **Real fix mid-session**: the first pass split one payment into multiple top-level `Income` rows — Taylor caught, live, that this desynced the ledger from reality and broke receipt-attachment; fixed by moving the category/period breakdown onto new `IncomeAllocation` child rows so a payment is always exactly one ledger row. Also dropped the payment form's "Preview split" button in favor of auto-computing it — no decision was actually being deferred by requiring a click. Seeded demo data (a "DEMO - Rent Tracker Example" property) so Taylor could see every status without manually building each one up; also found and fixed a real pre-existing bug while seeding (`123 asdf` property had two simultaneously-`ACTIVE` leases — the older one's status corrected to `EXPIRED`), and flagged (but didn't fix) that `Property` can't currently be deleted once anything is attached to it — Taylor's call: build proper archiving later, don't add cascade deletes now (memory `project_property_archiving_not_delete`). 381 backend tests passing. **Committed locally, deliberately not pushed — Taylor hasn't verified it in the browser yet. See the ⚠️ note in Current Focus: re-check this before starting anything else next session.**

*Prior update (2026-08-18): Reprioritized: expanding lease clause state coverage is tabled (Taylor is handling clause content on the side; functionality is considered solid), replaced in the active queue by Automate Finances (bumped up from "follows deploy"), Dashboard cleanup/expansion, and cleanup of cluttered pages (property page named specifically). Also logged a deferred design note for whenever real property attributes get built: bedroom/bathroom counts should drive Property Specs' room list, not just sit as a standalone field (memory `project_property_attributes_specs_linkage`). See Current Focus for the full current priority order. Earlier the same day: table of contents with page numbers added to the generated lease PDF (`bufferPages` two-pass pattern), plus per-page footers. Found and fixed two real pdfkit rendering bugs surfaced by generating and actually reading back a multi-page test PDF: the DRAFT watermark's font state leaking into subsequent clause text after a mid-clause page break, and the new footer silently doubling the page count via unwanted auto-pagination. See "What's been built" for full detail. 347 backend tests still passing (no new tests — verified visually against real generated PDFs, same approach as the original PDF work). Not yet committed — Taylor's call on when to commit/push. Earlier still, the same day: documented a "Nationwide jurisdictional coverage plan" (see above, right before Data model notes) capturing outside research Taylor got from ChatGPT on scaling lease clauses and the future Legal Tracker to all 50 states + municipalities via an inherited-layers model. Decided not to adopt ChatGPT's proposed formal rules-database/municipal-overlay/AI-monitoring machinery for now — the existing lightweight `Clause.states`/`supersedes` mechanism already covers the practical intent at lower cost — but kept its research methodology (primary-source-only, source registry, Colorado-first for Legal Tracker) since it matches and extends the discipline already proven out. See the decisions log entry for the full reasoning.

*Prior update (2026-08-17): Clause library review pass complete (53 clauses, 20 real gaps fixed against the real signed lease), then expanded further same day: clause state tagging, lease attachments (HOA rules/addenda uploads), a liability disclaimer on generated PDFs, and — after the Colorado guest-policy clause's "14 days/6 months" rule turned out to be fabricated marketing content, not real law — two rounds of primary-source-verified state-law research growing the library to 116 clauses across 28 states. `Clause.state` (single) was then changed to `Clause.states` (array) after Taylor pointed out some clauses genuinely apply identically across multiple states, merging 2 pairs down to **112 clause templates total**; those same 7 state-specific clauses also gained a `supersedes` link so a matching state filter hides the redundant universal version instead of showing both. Full research findings — verified and explicitly-dropped alike — saved in memory (`project_state_law_research_aug2026`). Two things deliberately deferred, not forgotten: table of contents with page numbers, and real property attributes (year built, bedrooms, bathrooms, sq ft, amenities — `Property.yearBuilt` exists as an unused column). 347 backend tests passing, no open blockers. Next session: pick up the TOC, expand state coverage further (see the memory's "explicitly dropped" list for what still needs primary-source work), or move to small computed-status automation per the v2 roadmap — Taylor's call.*

---

## AI integration plan

### Philosophy
AI earns its place when it saves the landlord real time or catches something they'd otherwise miss.
It's gimmicky when it summarizes things the landlord already knows or answers questions Google could answer faster.
**AI should make the landlord feel like they have a knowledgeable friend in their pocket — not a chatbot.**

### Hard rules
- Never give legal *advice* — only legal *information*. "Colorado law requires 10 days notice" is fine. "You'll win this case" is not.
- Never make tenant screening recommendations — Fair Housing Act liability risk. Avoid entirely.
- Never predict rent prices — dedicated tools do this better. Integrate with Rentometer/Zillow if needed, don't compete.
- Always make AI output reviewable and editable before it's sent or saved — the landlord is always in control.
- AI is a suggestion engine, not an autopilot.

### How it works technically
- Use the Anthropic API (Claude) — same model Taylor is talking to right now
- Backend calls the API with relevant context (state, tenant name, amount owed, etc.)
- Response streams back into the UI
- Cost: cents per call — absorb into subscription price or add a small AI usage tier in v3+
- Model to use: claude-sonnet-4-6 (fast, cost-effective for in-app features)

### Roadmap

#### v1 — No AI
Get the core app solid first. AI on a broken foundation is expensive noise.

#### v2 — Two features that clearly earn their place

**1. Legal notice drafter**
Highest value AI feature in the entire app. Legal language is intimidating, state-specific, and time-sensitive.
- Landlord selects: state, notice type, tenant name, amount owed, days late
- AI generates the correct notice with proper statutory language for that state
- Landlord reviews and edits before printing/sending
- Also: plain-English translation of court documents — landlord pastes in a document, AI explains what it means
- Warning system: "You served a 3-day notice but Colorado requires 10 days for non-payment — this may not hold up in court"

**2. Maintenance triage**
Tenant submits a request in plain language ("water coming out from under the sink").
AI reads it and surfaces:
- Likely cause
- Urgency level (low / medium / high / emergency)
- Suggested vendor type (plumber, electrician, HVAC, general handyman)
- Estimated cost range
Saves the landlord a Google search and helps them prioritize the queue.

#### v3 — Expanded AI features

**Lease clause reviewer**
When building a lease (v2 feature), AI reviews the draft and flags:
- Missing clauses based on state requirements
- Missing clauses based on Taylor's own lesson learned (e.g. no early termination clause)
- Clauses that may exceed state statutory limits (e.g. late fees)
- Suggests additions based on property type

**Inspection photo comparison**
- Landlord uploads move-out photo alongside the stored move-in photo
- AI flags potential damage differences
- Draft deposit deduction letter automatically from damage notes already in the system

**Expense categorization & tax flagging**
- Flag likely Schedule E deductions the landlord may be missing
- Flag unusual expense spikes: "Repairs this month are 3x your average — want to review?"
- Year-end summary formatted for accountant handoff

**Smart data entry (property specs)**
- Landlord types "painted kitchen with Sherwin-Williams Agreeable Gray eggshell" → AI parses into correct fields
- Photo of paint can label or appliance data plate → AI reads it and populates the record
- Reduces friction for filling out property specs

### Features to never build with AI
- General "chat with your property" chatbot — sounds cool, rarely used after week one
- Tenant approval recommendations — Fair Housing Act risk
- Rent price predictions — better tools exist for this
- Anything that sends to a tenant without landlord review first

