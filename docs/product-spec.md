# Product spec

The product design reference, moved out of CLAUDE.md on 2026-09-29 so it isn't loaded every session. Read the relevant section before building or changing a feature. Unchanged text.

## MVP scope (v1 — build this first)

1. **Entities / LLCs** — the legal owner of each property (Self or an LLC)
2. **Properties** — add and manage properties, each assigned to an entity
3. **Tenants + Leases (basic)** — profiles, IDs, upload lease PDF, enter key lease fields
4. **Finances** — rent tracking, expenses, security deposits
5. **Maintenance** — requests, vendors, preventive schedules
6. **User auth** — Clerk, multi-user ready

Everything else is **v2**. Do not scope creep into v2 during v1.

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

## Original foundation sections (verbatim, as they stood in CLAUDE.md until 2026-09-29)

CLAUDE.md now carries a condensed form of these; the original wording is kept here.

### Project overview

A SaaS web app for landlords to manage rental properties end-to-end.
Built from real landlord experience — every feature exists because a real problem was encountered.

**Working name:** Steinoak (placeholder — not final)
**Owner:** Taylor (Steinbaugh Estates LLC) — solo developer
**Business goal:** Use it personally first, then open to other landlords as a paid SaaS product

**Branding:** Logo files live in `logos/` (seasonal oak variants — acorn, spring, summer, fall, winter). Font: **Poppins**.

### Tech stack

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

### Architecture decisions

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

### Taylor's real-world lessons
> These are lessons from Taylor's actual landlord experience — not generic tips.
> Each one shaped a specific feature. Do not add to this list without Taylor's input.

1. **Lease clause visibility in court** — in a hearing, Taylor couldn't quickly show the magistrate which exact clause the tenant broke, or the verbatim language. The clause library in v2 exists specifically because of this. Magistrates want the exact words, not a summary.

2. **Early termination** — tenants abandoned the lease mid-term and stopped paying rent. The lease stated the term dates but had no explicit early termination penalty clause. Taylor has since added one. The app should flag leases missing an early termination clause.

3. **Move-in documentation** — photograph and video everything before handing keys. Get tenant acknowledgment in writing (email reply counts). Side-by-side comparison at move-out is your deposit dispute defense.

4. **Touch-up paint storage** — always note where leftover paint is stored (e.g. "labeled quart, garage shelf"). Critical at tenant turnover when you need to touch up walls.

5. **Spare flooring** — keep 2-3 spare boxes of each floor type. If a floor gets damaged and the product is discontinued, you'll need those spares. Flag when spare stock hits zero.

### What NOT to build (scope boundaries)

- **No separate landscaping module** — lives in Property Specs (Exterior) + Maintenance
- **No tenant renter's insurance in the Insurance module** — lives in Tenant profile
- **No billing/Stripe in MVP** — add later
- **No tenant portal UI in MVP** — design data model for it, build UI in v2
- **No full plant database** — just name, age, size, last treated. Keep it simple.
- **Do not let Property Specs become its own app** — it supports the landlord workflow

### File/folder conventions

- Backend first — build and test routes before building frontend
- `properties.routes.js` is the first backend module to test
- Frontend test file is an example only — do not update until backend is solid
- All sensitive files (IDs, lease docs, inspection photos) go to Cloudflare R2, not local storage
- EIN and other sensitive financial identifiers stored encrypted at rest
