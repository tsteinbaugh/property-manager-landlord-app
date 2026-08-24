## Decision Log: Architecture Review & Status Reconciliation Session

**Date:** 2026-08-24 (approximate — session date not independently confirmed, follows directly from the Wyoming addendum session)
**Status:** ✅ Closed — no clause-library research performed this session; product-architecture questions resolved, CSV schema extended, cross-state status reconciled.
**Companion documents:** `decision-log-clause-library-verification.md` (CO), `decision-log-clause-library-verification-wyoming-addendum.md` (WY), `decision-log-clause-library-verification-kansas.md` (KS), `decision-log-clause-library-verification-nebraska.md` (NE), `steinoak-named-topic-checklist-updated.md`. This file records session-level product/process decisions that don't belong in a state-specific log.

---

### 1. Why this session happened

Taylor had a separate conversation with ChatGPT questioning whether the state-by-state clause-verification approach was the right way to build toward Steinoak's lease builder. ChatGPT produced a long architecture proposal (not saved anywhere outside that conversation) arguing for a fundamentally different system design. Taylor brought the four completed state decision logs, the named-topic checklist, and the clause-library CSV into this chat and asked for an honest reaction before doing any more legal research.

### 2. Summary of the ChatGPT proposal (source material not preserved elsewhere — captured here since Taylor does not plan to keep that ChatGPT session)

The proposal argued the current mental model — "generic lease → find differences by state → create state-specific lease" — is insufficient for a genuinely nationwide product, and should be replaced with a layered architecture:

- **Layer 1 — Legal knowledge base:** atomic legal findings (not whole leases), each tagged with jurisdiction, topic, classification (REQUIRED/RECOMMENDED/CONDITIONAL/CONSTRAINED/PROHIBITED), output type (LEASE_CLAUSE vs LANDLORD_EDUCATION), source, and verification status. A finding does not automatically become a lease clause.
- **Layer 2 — Lease rules:** translates legal findings into what the lease should actually contain — override an existing clause, add a new one, or educate only, with no lease change.
- **Layer 3 — User-facing builder:** landlord configures the lease (pets, fees, term, etc.); the system asks only relevant questions based on jurisdiction and prior answers, and composes the final lease from base clauses + jurisdiction rules + landlord choices, enforcing (not just communicating) required/prohibited/conditional status.
- Additional concepts: clause IDs with stable identifiers and jurisdiction-specific variants only where truly needed (avoid duplicating whole clauses); generic clauses that self-limit to applicable law where possible, to avoid unnecessary state overrides; explicit conflict detection between generic and jurisdiction-specific provisions; effective dates / versioning on legal findings, since law changes over time; a national topic-coverage matrix (topic × state) as a research-management view, separate from the runtime data model; traceability from generated clause → rule → legal finding → statute; and an explicit two-pass audit standard (existing-lease compliance audit + full statutory topic audit), since a section-by-section compliance check alone misses things the statute requires but the lease never addressed at all.

The proposal's closing framing: the project is not "make a lease that works in 50 states," it's "build a legal-rule-driven lease composition engine, with a continuously-verified legal knowledge base powering it" — two related but separate projects.

### 3. Claude's assessment, given to Taylor before any further research

Much of the proposal was already substantively true of Steinoak's existing schema — `rule_type`, `content_type`, `states` as the display source of truth, `supersedes`, per-clause proof records, and the named-topic checklist already implement the core ideas (atomic findings, clause vs. education split, self-limiting generics, a topic-coverage view). The genuinely new, worthwhile pieces were: (1) effective-date/versioning tracking, not yet present; (2) a queryable, auto-generated coverage matrix rather than a hand-maintained checklist, to cut the compounding cost of the two-pass canvass; (3) eventually, conditional/applicability rules (property type, tenancy type) — but no evidence yet that the library needs this, since findings so far have mostly been flat state-level rules.

Pushback given: building the full compositional rules engine now would be premature — the product hasn't reached the lease-builder phase yet (MVP schema for Entities/Properties/Tenants/Leases/Finances/Maintenance/Auth isn't built), and the actual bottleneck Taylor is feeling is research methodology (the compounding two-pass canvass), which a fancier runtime engine doesn't fix. Recommended not loosening primary-source-first verification rigor to go faster — CO's Colorado meth-lab-disclosure false lead, WY's unreliable Hemlane/LeaseWisely sources, and other logged corrections are direct evidence that would cost more time in corrections than it would save.

### 4. Clarification of current lease-builder state (Taylor's description)

The lease builder currently in place is intentionally simple — not the compositional engine from the ChatGPT proposal, and not yet automated beyond state filtering:

- Clause library, filterable by state.
- Where a state-specific clause exists for a topic, it supersedes and is the only version shown (already reads the `states`/`supersedes` fields directly — no state logic hardcoded elsewhere in the application).
- User manually selects which clauses to include; the lease is generated from that selection.
- One added feature: clauses can be flagged as "default" by the user, and "add my default clauses" auto-includes them so the user doesn't have to hunt for the same clauses every time.

**Decision:** because the builder already reads state applicability directly from the clause library (not duplicated in app code), continuing the state-by-state research now and migrating the builder to the fuller compositional-rules-engine model later is safe — the research data doesn't need to be redone or reconciled against a second source of truth when that migration happens.

**Flagged for later, not decided now:** the "default clauses" feature may get replaced once REQUIRED/PROHIBITED enforcement is automated — a landlord shouldn't be able to default away something legally required. Revisit when the engine work actually starts.

### 5. Schema addition: `effective_from` / `last_checked`

Two columns added to the clause library CSV (`steinoak_clauses_updated_13.csv`, supersedes `steinoak_clauses_updated_12.csv`).

**What they mean:**
- `last_checked` — most recent date this row's content or state-tagging was verified, per available source material.
- `effective_from` — earliest date this row entered verified status, per available source material.

**Important — this is NOT the underlying statute's legal effective date.** That's a separate, unresearched concept (when a law itself took effect / was amended) that would require its own research pass per state per finding. What's captured here is *when Steinoak verified it*, not when the law took effect.

**How they were backfilled (approximate, not exact):**
- Explicit dates found in a row's `notes` text were used directly (min = `effective_from`, max = `last_checked`).
- Where no explicit date existed in a row's notes, state-level fallback dates were used: CO → 2026-08-18 (first)/2026-08-20 (last), WY → 2026-08-21 (main pass close)/2026-08-24 (addendum items only), KS → 2026-08-22 (single-day pass), NE → 2026-08-23 (single-day pass, sessions 1–7).
- **Known limitation:** these are per-*row* values, not per-*state* values. A row tagged `CO;WY;KS;NE` can only hold one date pair, even though each state tag was actually verified on a different real date. Where a row's notes happened to mention only one state's date explicitly, that date was used for both `effective_from` and `last_checked` even though the row's true first-verified date may be earlier (tied to an earlier state). True per-state date precision would require unpivoting `states` into one row per clause-per-state — a bigger schema change, not done here.
- **Wyoming's dates are the least certain of the four.** Only the WY addendum was available in this project (not WY's main decision log), so WY's main-pass dates are approximated using the addendum's own stated close date (2026-08-21) rather than pulled from the original session-by-session record.
- 51 rows were left with blank `effective_from`/`last_checked` on purpose: these are `late-fee-limit-{state}` rows tagged with non-CO/WY/KS/NE states (NY, MD, TN, CA, etc.), all `verification_status: UNVERIFIED`. **Flagged as a separate, real finding, not fixed:** these rows have non-blank `states` despite being unverified, meaning per Steinoak's own display rule (states = source of truth for display) they are currently displaying on leases for those states without ever having been verified. Taylor's explicit instruction: leave these alone for now, don't worry about non-CO/WY/KS/NE states.

### 6. Clarified, permanent definition: what "a state is complete" actually means

This needed writing down because a miscommunication this session (Claude loosely using the word "follow-ups" for WY and NE) caused legitimate confusion about whether all four states were actually done. They are. The standing definition, going forward:

**A state is complete once it has:** a full primary-source statute walk of the core landlord-tenant act, a whole-library generic-clause audit (extend/leave/flag every existing generic clause), a two-pass named-topic canvass (checked against everything every prior state has surfaced, run twice), and gap-discovery sources 1–4 run per the established methodology.

**Complete does NOT mean:** every conceivable adjacent legal question has been resolved. There is a standing, cross-state backlog category — present for all four completed states, not a sign any one of them is unfinished:

- **Municipal/local ordinances** — never covered for any state (Denver/Boulder for CO, Lincoln/Omaha for NE, none checked for WY or KS). This was declared out of scope in the very first line of the very first (CO) decision log, not discovered as a gap later.
- **Re-verification cadence** — not formally scheduled for any of the four states yet.
- **HB25-1249-style Colorado deposit-reform analog** (pet caps, carpet damage, bad-faith-deposit definition, wear-and-tear-void rule, walkthrough-inspection right) — confirmed only for CO (that's where the finding originated). Not yet checked against WY, KS, or NE. Available depth to pursue, not a gap in what's already been verified for those states.

None of the above are blocking. All four states (CO, WY, KS, NE) are correctly considered done for the purpose of moving to the next state.

**One apparent gap that turned out to be false:** Nebraska's session 6 flagged "Wyoming has no security-deposit-use-type clause" as a genuine miss. The Wyoming addendum (§ "Correction to a claim made earlier") retracted this after re-reading the actual clause text — `security-deposit-return-wy` already folds deposit-application language into itself, combining "use" and "return" into one clause by design rather than following CO's two-clause pattern. No fix was needed.

**Two display-collision bugs found during Nebraska's work are both already fixed.** Session 7 of the NE log ran a full programmatic check of all 36 `supersedes` relationships in the library and confirmed zero collisions remain anywhere.

### 7. Next state

Taylor is starting **Minnesota** as state #5, in a new chat. This log, the four state logs, the named-topic checklist, and `steinoak_clauses_updated_13.csv` are the intended handoff set.

---

**CSV changes this session:** `effective_from` and `last_checked` columns added to all 298 rows (`steinoak_clauses_updated_13.csv`). No clause content, `states`, `rule_type`, `content_type`, or `verification_status` values changed. No new rows.
