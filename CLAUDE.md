# CLAUDE.md — Property Manager SaaS App
> This file is the project bible. Read it at the start of every session before writing any code.
> It was built from a full product design session capturing real landlord experience.

---

## 🎯 Current focus
> Update this at the start of every session. One or two lines max.
> Example: "Working on Prisma schema for Tenants + Leases. Backend only, no frontend yet."

All six v1 MVP scope items (Entities, Properties, Tenants + Leases, Finances, Maintenance, User auth) are built end-to-end, tagged `v1.0.0`. Since then: global fuzzy/phonetic search, a real architectural fix (Occupant/Pet/Vehicle follow the Tenant instead of the Lease), full add/edit parity on every top-level nav page, **Property Specs (v2)** — 7 categories, By Room / By Category dual view, expense linking, maintenance linking, retire/replace lifecycle — and **Lease Builder (v2) is built and reworked**: a unified provided+personal clause library (30 starter clauses genericized from a real signed lease Taylor shared, `{{variable}}` placeholders resolved from the lease's own linked data), attaching clauses to a lease as an immutable snapshot, grouped/auto-numbered clauses (e.g. `"3.2"`, never manually assigned), and generating a real PDF that flows into the existing document-storage/download UI. Also fixed app-wide: "Back to X" links on detail pages now use real browser history (`BackLink` component) instead of a hardcoded destination, since several pages (Tenant, Lease, Property) are reachable from more than one place. Backend is at 322 tests. **Deploying is deliberately on hold** — Taylor's choice, no forcing function while still using the app locally.

**Next up: small computed-status automation** — see the v2 roadmap priority order (memory `project_v2_roadmap_priority`): Property Specs (done) → Lease Builder (done) → small computed-status automation → Inspections → the real rent/late-fee automation engine (follows deploy) → Legal Tracker last, deliberately, given its legal-accuracy risk. Also on record but explicitly low priority: a maintenance-supplies inventory idea (memory `project_maintenance_supplies_inventory_idea`).

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
- [Aug 2026] — Clause `bodyText` can contain `{{variable}}` placeholders (`backend/src/lib/clauseVariables.js`), resolved only from fields already on `Lease`/`Property`/`Entity`/`Tenant` — never from new structured fields invented just to back a variable. Anything Taylor's real lease captures that isn't already modeled here (smoking policy, per-utility responsibility, guest-day limits) stays as plain clause text a landlord edits per lease. Revisit only if Taylor asks for one of those as a real structured field in its own right, not as a side effect of wanting it as a variable.
- [Aug 2026] — Maintenance request's Tenant dropdown and "Reported by" free-text field looked redundant since you'd naturally want to type the tenant's name in both. Resolved by having the Tenant select auto-fill and disable "Reported by" with the selected tenant's name; "Reported by" only opens for manual entry when no tenant is linked (landlord noticed it themselves, a neighbor called, etc.). Keep this auto-fill/lock pattern for any similar "structured link + free-text fallback" field pairing in the future.

---

## 🐛 Known issues / blockers
> Things that are broken, stuck, or need a decision before moving forward.
> Clear these out as they're resolved.

- None currently. (Lease PDF upload via R2 — the last v1 blocker — was resolved Aug 2026.)

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

*Last updated: 2026-08-17 — Lease Builder (v2) built, then reworked the same day after review against a real signed lease: grouped/auto-numbered clauses, `{{variable}}` substitution, unified provided+personal library, 30-clause starter set, no early-termination special-casing — then extended with default clauses (mark any clause to auto-attach to every new lease in one click) and a DRAFT watermark + logo on the generated PDF. App-wide "Back to X" navigation bug also fixed. No open blockers, next up is small computed-status automation per the v2 roadmap.*

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

