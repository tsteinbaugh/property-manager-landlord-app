# CLAUDE.md — Property Manager SaaS App
> This file is the project bible. Read it at the start of every session before writing any code.
> It was built from a full product design session capturing real landlord experience.

---

## 🎯 Current focus
> Update this at the start of every session. One or two lines max.
> Example: "Working on Prisma schema for Tenants + Leases. Backend only, no frontend yet."

Clerk auth is wired into the backend and protecting `/api/properties`. Next: Tenants + Leases schema, or start the frontend (sign-in screens, property list UI) — ask Taylor which.

---

## ✅ What's been built
> Keep a running log of completed work. Add to this at the end of every session.
> Format: `[Date] — What was built / what was confirmed working`

- [x] [Aug 2026] — Local Postgres dev setup: `tsteinbaugh` role + `property_hq_dev` and `property_hq_test` databases created.
- [x] [Aug 2026] — Prisma schema: `User`, `Entity`, `Property` models with the User → Entity → Property ownership hierarchy. First migration applied to both dev and test databases.
- [x] [Aug 2026] — Express app skeleton (`backend/src/app.js`, `backend/index.js`) with `GET /health`.
- [x] [Aug 2026] — `properties.routes.js` — full CRUD (create/list/get/update/delete), mounted at `/api/properties`. `userId` on a property is derived server-side from its Entity, not trusted from the client. 8 Vitest + Supertest tests passing against the real `property_hq_test` Postgres database.
- [x] [Aug 2026] — Clerk authentication wired into the backend. `/api/properties` now requires a valid Clerk session (`clerkMiddleware()` + a custom `getAuth()` check that returns JSON 401s, since Clerk's own `requireAuth()` is built for redirecting browsers, not APIs). First authenticated request from a given Clerk user just-in-time provisions the matching local `User` row (no reachable webhook endpoint in local dev). Routes are now scoped per-user: an Entity/Property belonging to someone else 404s instead of leaking. 12 tests passing (4 new: unauthenticated rejection, JIT provisioning, cross-user entity rejection, cross-user property 404).

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
- [Aug 2026] — `app.js` and `properties.routes.js` are factory functions (`createApp(overrides)`, `createPropertiesRouter({ getAuth, clerkClient })`) that take Clerk's `getAuth`/`clerkClient`/`clerkMiddleware` as injectable dependencies, defaulting to the real `@clerk/express` exports. Reason: `vi.mock()` does not intercept plain CommonJS `require()` calls in this project's Vitest setup (confirmed empirically — the mock factory never ran), so mocking the Clerk SDK module directly doesn't work. Dependency injection sidesteps that entirely and lets `properties.routes.test.js` run against fake auth without touching the real Clerk network. Keep using this pattern for any future route module that depends on Clerk.
- [Aug 2026] — New Clerk users are provisioned into the local `User` table just-in-time, on their first authenticated request (see `resolveCurrentUser` in `backend/src/middleware/auth.js`), rather than via a Clerk webhook. Reason: webhooks need a publicly reachable endpoint, which local dev doesn't have. Revisit this when deploying to Railway — a webhook-based sync may be worth adding then, but JIT provisioning can likely stay as the fallback either way.

---

## 🐛 Known issues / blockers
> Things that are broken, stuck, or need a decision before moving forward.
> Clear these out as they're resolved.

_No known issues yet._

---

## Project overview

A SaaS web app for landlords to manage rental properties end-to-end.
Built from real landlord experience — every feature exists because a real problem was encountered.

**Working name:** Property HQ (placeholder — not final)
**Owner:** Taylor (Steinbaugh Estates LLC) — solo developer
**Business goal:** Use it personally first, then open to other landlords as a paid SaaS product

---

## Tech stack

| Layer | Technology | Notes |
|---|---|---|
| Frontend | React + Vite | Already started |
| Styling | Tailwind CSS | Use carefully — watch for preflight spacing issues |
| Routing | React Router | Already in use |
| Backend | Node + Express | Already started |
| ORM | Prisma | Already in use — prior schema is a draft, review before trusting |
| Database | PostgreSQL | Already in use |
| Auth | Clerk | Not yet added — add early, never build auth from scratch |
| File storage | Cloudflare R2 | For photos, documents, IDs — not yet added |
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

### Finances
- Income: rent (expected vs collected), late fees, pet rent, deposits received
- Expenses: mortgage, utilities, repairs, lawn, insurance premiums, tax, other
- Security deposit: amount held, storage method (escrow account, etc.), deductions
- Expenses flow to the correct Entity's books — do not commingle between entities

### Maintenance
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

*Last updated: 2026-08-12 — Clerk auth session with Claude Code*

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

