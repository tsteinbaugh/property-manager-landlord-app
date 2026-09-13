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

---

## Addendum — 2026-08-27: Colorado re-audit, and what it changes about this session's conclusions

Appended rather than edited in place; the session record above stands as written on 2026-08-24. Two of its conclusions need qualifying and one schema decision gets a new rule.

### A. §3's "don't loosen verification rigor to go faster" was right, and there's now direct evidence

This session recommended against relaxing primary-source-first rigor. Colorado was subsequently re-audited at Opus/high/research (the original pass, like all states to date, ran at Sonnet/medium/plain-search). It found **three hard errors that had shipped as VERIFIED**: a carpet-damage lookback of 5 years taken from a superseded bill draft when the enrolled text says 10; a documentation window stated as 120 days against a statutory 60; and a returned-payment clause citing the notice-to-quit statute while asserting a "$20 statutory cap" that appears in no statute at all. It also found a **live drafting trap** in shipped tenant-facing text (a bracket prompt inviting a phone number as the habitability-notice method, which under C.R.S. 38-12-503(3)(f)(II) would waive the landlord's right to written notice) and an **opt-in landlord right the library was silently forfeiting** (38-12-503(11) termination after an environmental public health event, which exists only "if permitted by the rental agreement").

The relevant implication for this session's framing: the bottleneck identified here was research *methodology*, and that remains true — but the errors above were not methodology failures. Two were numbers copied from secondary sources, and one was a citation the row's own notes flagged as ambiguous and shipped VERIFIED anyway. Those are **verification-depth** failures, and they are not fixed by a better runtime engine or a faster canvass. **All six other completed states were built under the same conditions.** Not a claim any of them is wrong — a claim that none has been tested.

### B. §5's per-row date limitation now has a companion rule

§5 correctly flagged that `effective_from`/`last_checked` are per-*row*, not per-*state*, and that a row tagged `CO;WY;KS;NE` can hold only one date pair. The re-audit surfaced the consequence: when `lead-based-paint` (tagged CO;WY;KS;NE;MN) was corrected during CO's pass, a single state's work silently changed the operative lease text for four other states, whose logs still described the old wording and whose dates still asserted a verification that no longer matched the clause. Nothing caught it; it was noticed by hand.

**New standing rule (recorded in full at CO log §5a.1):** any edit to `bodyText`, `rule_type`, or `content_type` of a clause tagged with more than one state requires, in the same session — a written note in every tagged state's log; `last_checked` reset for the row; and an explicit recorded judgment on whether the change is **uniform** (federal or generic mechanics, safe to inherit) or **state-driven** (one state's law forced it, and the others may need their own override instead). A state-driven edit inherited silently is how a clause becomes wrong for five states in order to be right for one.

This does not resolve §5's underlying observation that true per-state date precision needs `states` unpivoted into one row per clause-per-state. That remains undone and is now a somewhat stronger candidate, since the propagation rule is a manual compensating control for a schema that can't represent the fact it's tracking.

### C. §6's "what complete means" — one addition

§6's definition stands unchanged. Its list of standing cross-state backlog items (municipal ordinances, re-verification cadence, the HB25-1249-analog sweep) gains one entry:

- **Re-audit at higher research settings.** CO has now had one; no other state has. This is a distinct category from the backlog items already listed — those are *known unexamined scope*, whereas this is *examined scope, unexamined confidence*. A state remains correctly "complete" without it, on the §6 definition. But "complete" now carries an implicit asterisk for the six states verified at default settings.

Two live items from the re-audit affecting already-complete states, both minor but real: the `lead-based-paint` propagation note is owed to WY, KS, NE, and MN; and KS and NE are currently carrying `assistance-animal-accommodation` at NEEDS_REVIEW, because the federal ESA basis is unsettled (HUD withdrew its guidance 2025-09-17 and narrowed enforcement to individually-trained animals on 2026-05-22) and neither state has been checked for an independent state-law basis the way CO was via CADA. That check is one question per state.

### D. §7 is superseded by events

§7 recorded Minnesota as the next state. Since then MN (#5), ND (#6), and SD (#7) have been completed, and the current queue is a **Wyoming re-audit** at higher settings rather than a new state — reversing, for now, the "keep adding states" direction this session assumed. Recorded for accuracy; §7 is left as written as a record of what was decided that day.

---

## Addendum — 2026-08-31: Nebraska re-audit, and what it changes

Appended, not edited in place, per the pattern set by the 2026-08-27 addendum. This session touches more of this document than prior re-audits did, including two amendments to definitions §6 recorded as permanent.

### E. §6's definition of "complete" needs amending — the core-act statute walk is demonstrably insufficient

§6 defines a complete state as requiring, among other things, "a full primary-source statute walk of **the core landlord-tenant act**." The Nebraska re-audit found real, shipping-relevant law in **six chapters outside the URLTA**:

| Chapter | What it held |
|---|---|
| Ch. 20 (civil rights / fair housing) | The entire service-animal **housing** scheme (§§20-131.01–.04), including a no-additional-deposit rule; the landlord-facing denial penalty (§20-129); the protected-class **inquiry and record** ban (§20-318(5)); a protected class (military/veteran status) missing from a shipped `VERIFIED` row |
| Ch. 81 (State Fire Marshal) | Smoke detector duty allocation (§§81-5,142, 81-5,144) |
| Ch. 76, outside the URLTA article | The Carbon Monoxide Safety Act (§§76-601–606), whose §76-606 is written specifically for landlords |
| Ch. 28 (criminal code) | Bad-check restitution (§28-611) |
| Ch. 55 (military) | Servicemember lease termination (§55-702) |
| Ch. 13 (political subdivisions) | Rent-control preemption (§13-331, 2025) |

This is not a Nebraska quirk. Kansas's service-animal-fraud statute sits in Ch. 39; North Dakota's smoke detector duty in Title 23. Three states running, now four.

**Proposed amendment to §6** (flagged for Taylor, not adopted unilaterally, since §6 is recorded as a permanent definition): the statute-walk requirement should read *"a full primary-source statute walk of the core landlord-tenant act, plus a deliberate sweep of adjacent chapters — at minimum: fair housing/civil rights, fire/building safety, criminal code, military/veterans, and political-subdivision preemption."* Every state completed to date was verified under the narrower definition.

### F. §5a.1 has a gap: it governs edits, not inherited reasoning

§5a.1 (recorded at Addendum B) requires propagation notes when a multi-state clause's `bodyText`, `rule_type`, or `content_type` changes. That rule worked exactly as designed this session for `services-utilities-provided` (uniform) and `late-fee` (state-driven).

**But it did not cover the most consequential propagation this session found.** Minnesota's log §25 resolved MN's late-fee question by applying Nebraska's *reasoning* directly — "Applied Taylor's already-established resolution from the NE session directly" — while MN §16 recorded that Minnesota's own rule was never independently confirmed. The Nebraska re-audit then overturned that reasoning in both directions. No clause text ever changed, so **§5a.1 never fired**. A conclusion propagated across states through the logs rather than through the CSV, and nothing in the architecture tracked it.

**Proposed extension to §5a.1:** where a state's log resolves an open question by adopting another state's conclusion rather than by independent primary-source work, that adoption must be recorded in **both** logs, and the borrowing state's entry must be revisited whenever the source state is re-audited. Inherited reasoning is a dependency; the schema currently records dependencies between *clauses* but not between *conclusions*.

### G. Direct evidence for §26's auto-generated coverage matrix — a two-sources-of-truth failure

§26 identified an auto-generated topic-by-state coverage matrix as one of three genuinely worthwhile additions from the ChatGPT proposal, justified then on cost grounds (cutting the compounding two-pass canvass). This session supplies a **correctness** justification, which is stronger.

The 49-row re-verification found **four checklist entries still carrying errors this session had already corrected in the CSV** — the holdover and possession-delay `3×` figures, the "tracks federal only" protected-class entry, and the carbon-monoxide "only new construction" scope. The library was right; the checklist was wrong. Because the checklist *is* the canvass instrument the next state reads, four wrong Nebraska benchmarks would have propagated outward from a document already superseded by the CSV.

A hand-maintained checklist and a CSV are two sources of truth for the same facts, and they drifted within a single session. A generated matrix cannot drift from the library because it *is* the library. Recommend promoting this from "worthwhile" to "the next architectural change worth making," ahead of the compositional rules engine.

The same pass also found a **genuine duplicate topic row** in the checklist ("Returned/dishonored check fee cap" and "Genuinely new: returned-check-fee cap"), which structurally explains why row-counting and distinct-label-counting produce different denominators — deduplication legitimately returns a smaller number. Left in place deliberately; merging would silently move the denominator again.

### H. §C's asterisk, updated — and it is no longer an asterisk

Addendum §C introduced "re-audit at higher research settings" as a backlog category, noting CO had one and no other state did, and framing it as *examined scope, unexamined confidence*.

**Status now: four states re-audited (CO, WY, KS, NE). All four surfaced errors that had shipped as `VERIFIED`. Four for four.** Three states remain at default settings: **MN, ND, SD**.

Nebraska's were the most severe to date: a row whose central reassurance was backwards on a lethal hazard (carbon monoxide — telling landlords they were outside a mandate that reaches essentially all of them); a numeric error understating landlord recovery roughly fourfold in week-to-week tenancies, propagated across two rows by paraphrase reuse; an entire statutory scheme absent from the library; a 2025 statute absent; and a protected class missing from a fair-housing row.

The framing should harden. §C said this was "not a claim any of them is wrong — a claim that none has been tested." Four tests, four failures. **The reasonable prior is now that an un-re-audited state contains at least one shipped `VERIFIED` error**, not that it might. MN, ND and SD should be treated accordingly.

Four of Nebraska's findings share a single mechanical root — **reading part of a multi-section statute and generalizing**. The re-audit committed the same error itself (inventing a smoke-detector coverage gap from an NCSL summary quoting only §81-5,142(1)), and caught it only because the row was parked at `NEEDS_REVIEW` rather than shipped. That is the strongest available argument for keeping over-include-and-flag strict: it caught the auditor, not just the audited.

### I. Live items from §112, reconciled

- **`assistance-animal-accommodation` at `NEEDS_REVIEW` for KS and NE — RESOLVED.** Nebraska has an independent state-law basis (category 1: independent, animal-specific, housing-express) and took its own override; the row is now KS-only and `VERIFIED`. The federal question is resolved too: the two HUD dates are **sequential events**, not conflicting accounts of one — 2025-09-17 withdrawal, then a separate 2026-05-22 enforcement narrowing. Neither amended the FHA.
- **The `lead-based-paint` propagation note owed to WY, KS, NE, MN — still not confirmed for NE.** Flagged at the start of this session and not resolved; the NE log carries no record of it landing. Remains open.
- **§5's per-row date limitation** — still undone. This session did nothing to reduce it and one thing to increase its cost: NE now has 111 rows across two verification epochs (2026-08-23 original, 2026-08-31 re-audit) with no way to represent that a given row's NE tag was re-verified while its CO tag was not.

### J. §7 / §D, updated

§D recorded the queue as a Wyoming re-audit. Since then WY, KS and NE re-audits have all completed. **Current state: CO, WY, KS, NE re-audited; MN, ND, SD not.** Minnesota is the strongest candidate to go next — not merely because it is unaudited, but because §F above identifies a specific, known-unsupported conclusion sitting in its log.

---

## ADDENDUM K — THREE METHOD CHANGES, ADOPTED 2026-09-03

All three were earned during the Minnesota re-audit and the eviction-duty screen. Each is stated with the evidence that produced it, because the failure these rules address is precisely that a methodological decision gets made once and then inherited without its reasoning.

### K.1 — Narrow the eviction-scope boundary

**Old rule (implicit, set in the first CO session and inherited by every state since):** eviction sections are out of scope — "procedural, not clause-relevant."

**New rule:** *Eviction sections are out of scope for `LEASE_CLAUSE` purposes, but are screened for affirmative landlord duties, prohibitions, and immunities.*

**Evidence.** The eviction-duty screen across CO, WY, KS, NE, MN found:
- **CO** had **zero** rows on self-help eviction despite C.R.S. §38-12-510 imposing actual damages **plus the greater of 3× monthly rent or $5,000**, plus fees, with possible restoration of possession.
- **KS** had **zero** rows despite K.S.A. 58-2563 giving the greater of **1.5 months' periodic rent or actual damages**, plus punitive damages where wanton, with **no** 30-day notice precondition.
- Post-writ property duties were unscreened in **six of seven states**. The three since examined turned out to have three completely different architectures: MN highly prescriptive, CO duties expressly negated with immunity, WY silent.
- CO's §13-40-122 contains an affirmative **pet-animal** duty set sitting inside an otherwise immunity-granting section — invisible to any screen that stopped at the section's general rule.

**Both CO and KS had already been re-audited at higher effort and both still missed this.** A scope decision made once, in state #1, propagated silently through six states and four re-audits.

#### K.1a — Screen results of record (absorbed from the standalone screen file, 2026-09-03)

The eviction-duty screen produced a standalone file. It has been absorbed here and deleted, so it does not travel as a separate document to every future state.

**Scope:** CO, WY, KS, NE, MN. SD and ND deliberately excluded, to be covered by their own re-audits.

**Question asked of each state:** does the eviction / unlawful-removal area impose affirmative landlord duties, prohibitions, or immunities, as distinct from court procedure?

**Baseline before the screen** (title/body matches only; notes excluded, since a topic discussed only in notes is not a shipped finding):

| Topic | CO | WY | KS | NE | MN |
|---|---|---|---|---|---|
| Self-help / ouster ban | **0** | 2 | **0** | 3 | 2 |
| Post-writ property duties | 0 | 0 | 0 | 0 | 3 |
| Utility shutoff ban | **0** | 0 | **0** | 0 | 1 |
| Pre-filing notice duty | 0 | 0 | 0 | 0 | 4 |

MN's coverage existed only because of the MN session itself. **CO and KS were zero across every column.**

**Self-help / utility-shutoff remedy, cross-state:**

| State | Remedy |
|---|---|
| **CO** | Actual damages **plus** greater of 3× monthly rent or **$5,000**, plus fees; possession may be restored (§38-12-510, amended SB 24-094, violations filed on/after 2024-05-03) |
| **KS** | Greater of **1.5 months'** periodic rent or actual damages, plus deposit return; punitive if wanton and malicious (*Geiger v. Wallace*); **no 30-day notice precondition**; §58-2572(b) routes the retaliation remedy through the same section |
| **MN** | **Treble damages or $500**, whichever greater, plus fees; intentional ouster a **misdemeanor** (§§504B.221/.225/.231) |
| **WY, NE** | Previously rowed; figures not re-derived in the screen |

**Post-writ property regimes — three states, three architectures:**

| State | Regime |
|---|---|
| **MN** | Prescriptive — signed inventory in the officer's presence, dual-channel notice, care standard with liability, two disposal tracks (28-day on-premises vs 60-day lien-and-sale off-premises) keyed to storage location |
| **CO** | Duties **expressly negated** — no storage, inventory, ownership or condition determination, no bailment, statutory immunity for loss or damage (§13-40-122(3)); storage optional and chargeable. **But an affirmative pet-animal duty set sits inside the same section** |
| **WY** | Silence — sheriff removes and bars reentry "without further action by the court," no duties stated in Article 12 (§1-21-1211(a)) |

**Open carryover from the screen, not yet resolved:**
- Whether WY's and NE's existing ouster rows capture their statutes' full remedy structure — the screen accepted them at row level without re-deriving the figures.
- Whether KS's and NE's `landlord-disclosure-*` rows carry the eviction-**maintenance-bar** equivalent found in MN §504B.181 subd. 4, where a disclosure failure defeats an action for rent or possession outright.
- **KS, NE, ND and SD remain unscreened on post-writ property duties.**

### K.2 — Re-audits must re-examine an inherited scope boundary

**New rule:** *Every re-audit re-examines at least one scope boundary the original pass inherited rather than chose, and records the result — including "boundary confirmed correct."*

**Evidence.** Four re-audits (CO, WY, KS, NE) all ran at higher effort, all found real errors, and **none questioned the eviction-scope boundary.** A re-audit by default re-examines findings *within* the established scope; the scope itself is invisible to it. That is a structural blind spot, not an effort problem — which is why raising effort four times did not surface it.

### K.3 — When a state row contradicts a shared clause's number, check the shared clause

**New rule:** *Whenever a state-specific row records a figure that differs from a hardcoded number in a shared multi-state clause the state is tagged on, the shared clause must be checked in the same pass. Self-limiting language ("or the maximum allowed by law, if less") does not discharge this.*

**Evidence — the strongest in the project.** The generic `holdover` clause promised "double the Monthly Rent ... or the maximum amount allowed under applicable law, if less." Verification found the figure had **no statutory basis in any tagged state**: CO no multiplier (reasonable rental value), WY no multiplier, KS 1.5× cap, NE *higher* than double (three months' periodic rent or threefold actual **plus** attorney fees), MN none at all.

Wrong in every direction simultaneously — too high in three states, too low in one, baseless in the rest. It appears to be template boilerplate that entered the library before any state research.

**Five of seven states had independently written down answers that contradicted it** — KS, NE, MN, SD, and by extension CO and WY once verified. Five separate passes each recorded a state-level figure conflicting with the shared clause sitting beside it, and **no pass ever looked up.**

**Two sub-rules follow:**
- **A ceiling-only formulation is not safe.** It protects against unlawfulness but silently forfeits recovery wherever the statutory figure is *higher* — Nebraska landlords were under-claiming by lease design.
- **Self-limiting language is what hides these.** Because the clause remained lawful everywhere, nothing ever forced a look.

### K.4 — Supporting screens adopted alongside the above

Recorded here because none are caught by the existing citation-existence or notes-field screens:

- **Archived-version trap.** Treat any revisor URL containing a year path or version timestamp as **historical** until confirmed against the current-cite URL. Three instances in one session: a pre-2014 §504B.206 delivery method, a §504B.135(b) paragraph repealed in 2023, and §484.014's expungement test repealed effective 2024. **Apply extra scrutiny where the stale text is landlord-favorable** — that is the direction least likely to be questioned in a landlord-facing library.
- **Pending-bill trap.** A bill is not evidence of enactment, and overlap between bill text and current statutory text is **not** partial enactment — bills reproduce existing language alongside additions. **Check the history line.** (2025 HF 1648 was not enacted; the overlap that suggested otherwise came from a 2019 amendment.)
- **Section-title trap.** Minn. Stat. §504B.120 is titled "Prohibited Fees" and prohibits nothing. Never resolve a topic from a section title.
- **Row-presence asymmetry check.** Ask of each canvass topic: *does another state have a row here that this state lacks?* This would have caught the MN §504B.181 and §504B.182 gaps for free, and it runs both ways — MN now has a disclosure-maintenance-bar finding that KS and NE may be missing.
- **Keyword probes do not substitute for adjudication.** A programmatic keyword-overlap probe of canvass topics against MN rows returned near-total apparent coverage; hand adjudication then found a systemic proof-of-absence failure. The probe is a screen, never a verdict.

---

## ADDENDUM L — Screens earned by the ND re-audit (2026-09-06)

Two new standing screens and three method rules. All were earned by defects found in this session, not proposed in the abstract. Both screens found real errors on their first execution, and one of them found the largest defect in the project's history.

### L.1 STANDING SCREEN — checklist-to-CSV reconciliation

**Rule: for every topic the consolidated named-topic checklist marks "Present" for a state, assert that a matching CSV row exists for that state.**

**Why.** ND's checklist entry for domestic-violence lease termination read *"Present — §47-16-17.1, full mechanics confirmed (advance notice, non-disclosure, 1-month-rent liability cap, $1,000 statutory damages remedy)."* **No CSV row existed.** ND was the only state carrying a DV-termination statute with no clause; CO, WY, KS, NE and SD all had one. A `REQUIRED` lease clause was concealed for the entire life of the state's entry by a checklist entry asserting it was there.

The same screen then found `lead-based-paint` untagged for ND and SD while the checklist recorded it "Present (federal)" — a `REQUIRED` federal clause with **$22,263 per-violation** exposure missing from two states' leases.

**The distinction that makes this screen necessary:** a checklist entry can be *true about the law and false about the library*. "Federal lead-paint law applies to North Dakota" is correct; "the lead-paint clause is tagged ND" was not. Nothing in the process compared the two.

**Method.** Extract every "Present" cell from the checklist's main tables, token-match against that state's rows, then **hand-adjudicate every miss**. On first run: 142 assertions, 8 below threshold, 4 tokenization artifacts, 2 correct-by-design (deprioritized layers), **2 real defects**.

### L.2 STANDING SCREEN — exhaustive generic-clause audit by group

**Rule: enumerate every generic clause in the library and test each state's tag. A generic-clause audit that is not exhaustive over GROUPS silently skips whole categories.**

**Why.** ND was declared complete and shipped with **18 displayable `LEASE_CLAUSE` rows against 61–75 for CO/WY/KS/NE/MN**. Forty-three generic lease clauses carried no ND tag and no ND override — `rent-payment`, `notices`, `governing-law`, `severability`, `joint-liability`, `no-sublet-assign`, `smoking-policy`, `keys`. **An ND lease had no rent-payment clause.**

ND's original log stated the opposite: *"rent-payment, late-fee, returned-payments — extend to ND as-is, no conflicts found."* Only `returned-payments` was ever written. The original audit walked Rent & Payment, Security Deposit, maintenance, Pets, Access & Entry and Default & Termination — and never walked **Disclosures**, **Notices & General**, **Rules & Regulations** or **Parking & Storage** at all.

**Result of the first full run, across all seven states:**

| State | Generic clauses with no tag and no override |
|---|---|
| CO, WY, KS, NE, MN | **0 — clean** |
| ND | 43 → **1** (`holdover`, deliberate) |
| SD | **45 — outstanding** |

The five older states are clean. The defect is confined to the two most recently added states, which is itself diagnostic: it is a *process* failure in how a state gets added, not a drift in maintained states.

**Triage discipline when the screen fires — do not bulk-extend.** Sort into: (A) boilerplate with no state statutory interaction; (B) clauses whose text encodes a rule the state does differently, which need a state-specific override rather than a tag; (C) clauses that must stay excluded. ND's Tier B was `landlords-access`, whose *"at least 24 hours' notice"* is wrong for a state whose entry statute uses consent tied to a "time certain" and no hour count at all. Tier C was `holdover`, where the provenance finding had removed a baseless figure.

### L.3 METHOD RULE — a log entry is not a library change

Three findings this session shared one mechanism: ND's original session **recorded a conclusion in prose and never wrote it to the CSV**. The DV clause, the lead-paint tag, and the bulk of the generic audit. Not three mistakes — one habit, invisible to every existing check.

**Rule: a state's log describes what was decided. Only the CSV describes what exists. When they disagree, the CSV is the fact.** Any session closing a state must verify its own claims against the file it wrote, not against its own narrative. The post-write tag-count assertion is the cheapest form of this and caught a real error in this session (five new rows written with blank `states` would have displayed nowhere).

### L.4 METHOD RULE — naming a trap confers no immunity to it

This session explicitly warned, in a row's own notes, against confusing § 47-16-19 "lodgings" (a landlord-tenant term) with ch. 23-09 "lodging establishment" (a licensed hospitality category) — and then the **next flag written in that same row** misattributed a lodging-establishment regulation (N.D. Admin. Code ch. 33-33-05, "Law Implemented: NDCC 23-09-02.1") to the general residential smoke-detector statute.

**Rule: a trap identified in a session is not thereby avoided in that session.** Where a session records a confusion risk, every adjacent finding made afterward in the same area should be re-checked against it before close.

### L.5 METHOD RULE — read the sections your section points to

`dv-lease-release-nd` was drafted this session from correct primary text of § 47-16-17.1 and was still materially over-broad, because § 14-07.1-01 — the definition that section incorporates — went unread. ND's "domestic violence" is confined to conduct **by a family or household member**, so a tenant threatened by a stranger or neighbour has no termination right. The clause said only "a victim of domestic violence."

**Rule: incorporation by reference is not a citation, it is a dependency.** Same shape as reading only the subsection carrying a figure (which cost this project § 6-08-16(2)(c) entirely). Applies equally to administrative incorporations — § 23-13-15's "standards as defined by rules adopted by the state fire marshal" resolves to the International Fire Code 2021, a **privately published model code not freely readable**, which is itself a finding a landlord-facing library must record.

---


### L.6 METHOD RULE — direction of benefit is not a staleness filter (refines K.4)

**Rule: when re-verifying a hard number, check the section's source line regardless of which party the recorded figure favours. Do not triage staleness checks by whose interest the stale text serves.**

**Why.** K.4 directs *"extra scrutiny where stale text is landlord-favourable"* — sound where stale law is being relied on to justify landlord conduct. The SD re-audit found the inverse. `security-deposit-return-sd` and `edu-security-deposit-itemized-accounting-sd` both carried a **two-week** deposit-return deadline; SDCL 43-32-24 had been amended by **SL 2026, ch 179, § 1**, effective **July 1, 2026**, to **twenty-one days**. The stale figure was **tenant-favourable** — it gave the landlord *less* time than current law allows, over-constraining rather than over-permitting. K.4's heuristic, applied as a triage filter, would have deprioritized exactly the row that was wrong.

A `REQUIRED` `LEASE_CLAUSE` shipped the superseded deadline into every generated SD lease for over two months.

**Corollary — secondary-source consensus is not a currency check.** At the time of verification, secondary sources were split two-and-two, and one source still carrying the superseded figure was stamped *"Updated July 2026"* — after the amendment took effect. Recency of the *source* says nothing about currency of the *rule*. Only the source line does.

**Corollary — an introduced bill is not law.** The strike/underscore text of 2026 SB 4 was retrievable from the Legislature's document server and showed the amendment plainly, but enactment was the actual open question. Resolving it required the codified source line (`SL 1976, ch 267, § 3; SL 1984, ch 281, § 1; SL 2026, ch 179, § 1`), which was obtained by **§5a.2 escalation to Taylor after two failed retrievals**, not a third search.

### L.7 METHOD RULE — a verified absence licenses no claim about what lies outside its boundary

**Rule: when recording a confirmed absence within a searched boundary, state the boundary. Do not pair the absence with an affirmative claim about what governs instead unless that claim was independently verified outside the boundary.**

**Why.** SD's `edu-no-prohibited-terms-list-sd` correctly recorded that ch. 43-32 contains no enumerated prohibited-lease-provisions statute — verified by a complete section-by-section read, and still correct today. In the same breath it asserted that an exculpatory clause "would instead be tested… under South Dakota's general consumer-protection and common-law unconscionability doctrine rather than an enumerated statutory prohibition." **SDCL 53-9-3 voids contracts exempting a party from responsibility for its own fraud, willful injury, or violation of law.** Title 53 was never reached. `edu-unconscionability-doctrine-sd` carried the same omission.

**The diagnostic detail:** the row's notes asserted unusually *strong* grounding — *"positive knowledge of the chapter's complete contents… a stronger evidentiary posture than most of this session's other confirmed-absent findings."* That confidence was **warranted for the absence and unwarranted for the substitute rule stated beside it**, and the stated strength of the former disguised the unverified status of the latter. This is L.5's incorporation-by-reference failure operating at chapter scale: the boundary was searched exhaustively and never itself questioned.

**Practical form:** "No enumerated prohibition exists *in ch. 43-32*" is a finding. "Therefore only common-law doctrine applies" is a second, separate research question.


### L.8 METHOD RULE — a section index is not a currency check; verify text against the SOURCE LINE

**Rule: to confirm a reproduction of a statute is current, compare its SOURCE/HISTORY LINE against the official codified section. Comparing section numbers and titles proves nothing about the text, because an amendment changes the text and leaves the title alone.**

**Why.** The SD re-audit traced its deposit-deadline error (L.6) to a specific, reasonable-looking verification step taken in the original SD session. That session obtained full chapter text from **consumer.sd.gov/docs/LLTen_Statutes43-32.pdf** — a South Dakota Attorney General, Division of Consumer Protection publication — and validated it as follows, quoting the original log:

> "Cross-checked the section index against the official South Dakota Legislative Research Council site (sdlegislature.gov/api/Statutes/43-32.html) — section numbers and titles match exactly, **confirming the consumer.sd.gov text is current and complete, not a stale mirror.**"

The section numbers and titles did match, and still do. **The conclusion drawn from that match was structurally impossible.** SL 2026, ch 179, § 1 amended § 43-32-24 from "two weeks" to "twenty-one days" without touching the section number or its title. A title-level comparison cannot detect a text-level amendment — it will return a clean match for every amendment that does not rename a section, which is nearly all of them.

The PDF remains live on a `.gov` domain and, verified against the codified section during this re-audit, still prints "within two weeks" with a source line ending `SL 1984, ch 281, § 1` — **omitting SL 2026, ch 179, § 1 entirely.** The staleness is detectable in one place only: the source line.

**Corollary — government publication is not currency.** This is a state Attorney General's own reproduction of the chapter it enforces, and it is out of date. Domain authority, publisher, and format (a formal section-by-section reproduction with source citations) all pointed toward reliability. None of them is evidence of currency.

**Corollary — staleness is section-specific, so a stale source is not a useless one.** Every other section relied on from this same PDF during the SD re-audit carries a source line ending 1939–2022 and was unamended in 2024–2026. The document was used for §§ 43-32-3, -4, -10, -20 and -32 on that basis, with the staleness recorded in each row's notes. **Discard the currency claim, not the document** — but only after checking each section's source line individually.

**Practical form:** when relying on any reproduction, quote its source line alongside the text. If the reproduction omits source lines, it cannot be used to establish currency for any section.


### L.9 METHOD RULE — a stale-value sweep must enumerate morphological variants

**Rule: when sweeping for a superseded figure, search every form the figure can take — cardinal, hyphenated-adjectival, numeral, and the unit spelled out — not only the form that appeared in the row which triggered the sweep.**

**Why.** The SD re-audit's v125 write corrected two rows carrying a superseded fourteen-day deposit deadline and ran a post-write sweep over all SD rows for `two weeks` and `2-week`. It reported **clean**. Two writes later, `edu-advance-rent-vs-deposit-sd` was found still describing "the **two-week** return deadline" — the hyphenated adjectival form, a third variant the pattern did not cover. The sweep was constructed from the two spellings that happened to appear in the rows already known to be wrong, which is precisely the population it was supposed to look beyond.

**Practical form:** for a deadline, sweep `two weeks | two-week | 2-week | 14 days | 14-day | fourteen days | fourteen-day`. For a dollar figure, sweep `$40 | 40 dollars | forty dollars`. Run the sweep over `bodyText` for correctness and over `notes` separately, expecting legitimate historical mentions in the latter (correction records must retain the superseded figure to be intelligible).

### L.10 STRUCTURAL FINDING — the named-topic checklist is blind to universal obligations (accretion bias)

**Finding: the consolidated named-topic checklist has no topic row for several core, universal landlord obligations, so a perfectly-executed two-pass canvass cannot detect an error in them.**

The SD re-audit's item-6a reconciliation was run in reverse — every SD-tagged CSV row must map to a topic in the checklist. 53 of 88 SD rows mapped to nothing. Most were Tier A boilerplate and correctly absent. But the check also showed **zero topic labels** for: security deposit **return** mechanics (deadline, itemized accounting, forfeiture, bad-faith penalty); the landlord's **habitability/repair duty**; **assistance-animal accommodation**; **meth/contamination disclosure**; and general **month-to-month modification notice**.

**The consequence is concrete.** SD's headline error was a `REQUIRED` lease clause shipping a superseded two-week deposit-return deadline for two months after SL 2026, ch 179 changed it to twenty-one days. **No canvass could have caught it. There is no row for the deposit-return deadline.**

**Root cause — accretion bias.** The checklist grew by adding a topic whenever a state's law *surprised* the researcher. Exotic provisions are therefore richly covered — double-letting, EV charging, eviction-record sealing, immigrant tenant protection acts. Universal obligations never surprised anyone, so they never earned a row. **The checklist is densest exactly where risk is lowest, and blank where every state has a provision that gets amended and ships into every lease.**

**Remedy (cross-state, not done in the SD session):** add a *Core obligations* section — deposit return mechanics, habitability/repair duty, assistance-animal accommodation, disclosure duties, rent-modification notice — and backfill all seven state columns. Until then every state carries the same blind spot, and the six completed re-audits should be assumed to share it.

**Generalisable form:** a checklist built from discovered exceptions will not cover the rule. Periodically derive topics **top-down** from each state's statutory table of contents, not only bottom-up from findings.


### L.11 METHOD RULE — never chain cleanup to an unverified write; assume the working directory is ephemeral

**Rule: deliver first, verify the delivered file exists and is the expected size, and only then remove a superseded version. Never combine `copy new` and `remove old` in one chained command.**

**Why.** During the SD re-audit the container reset between turns and wiped the working directory. The next delivery command was of the form `cat >> log.md; cp log.md csv.csv outputs/; rm outputs/old.csv`. Three failures compounded:

1. The `cat >>` **created** a new log file rather than appending to the existing one, because the original was gone. The result was a 2.4 KB fragment containing only the newest section.
2. The `cp` then **overwrote the good copy in outputs** with that fragment, destroying the only surviving full log.
3. The `cp` of the CSV failed — the file no longer existed — but because the commands were chained with `;`, the **`rm` still executed and deleted the last surviving CSV.**

Nine CSV versions and an in-progress decision log were lost. Both were reconstructible from the session record, but the reconstruction is substance-faithful rather than byte-identical, and it cost a full working pass.

**Three corollaries.**

- **`cat >>` is not safe as an append when the target may not exist.** It silently creates. Assert the file exists and has plausible size *before* appending, or the append becomes a truncation.
- **Cleanup must be conditional on delivery succeeding.** `cp X out/ && rm out/old` at minimum; better, verify `out/X` exists and is non-trivial in size, then remove.
- **The outputs directory is the only durable store.** Anything that exists solely in the working directory should be treated as already lost. Where a session produces intermediate versions, either keep every version in outputs or accept that a reset collapses them.

**Recorded here rather than quietly fixed** because the failure mode is invisible in the success case — the identical command pattern had worked in eight consecutive prior passes, which is exactly why it was still being used when the conditions changed.


### L.12 METHOD RULE — sweep adjacent provisions, not just the one that answers the question

**Rule: after locating the provision that answers a query, read the provisions immediately around it — the neighbouring sections of the chapter, or the neighbouring rules of the administrative chapter — before recording a scope conclusion. Finding the answer is the trigger to widen, not to stop.**

**Why.** The SD re-audit produced **two instances of this failure in a single session**, both self-inflicted:

1. **SDCL 20-13-23.2.** A search for a service-animal criminal penalty returned the section, which was recorded as making it a crime for a landlord to refuse a service animal. Its scope lives entirely in a cross-reference — "a place listed in § 20-13-23.1" — which was not followed. § 20-13-23.1 is a public-accommodations list and does not reach residential rentals. The row asserted a criminal penalty that does not exist for landlords.
2. **ARSD 61:15:01:14.** A search for a smoke-detector requirement returned the lodging-establishment rule, and the row concluded SD's only detector rules cover lodging establishments and manufactured homes, so "neither reaches a typical single-family or apartment lease." **The very next rule in the same chapter — 61:15:01:15, "Smoke detectors required in multifamily residences" — requires a detector in each family living unit of any multifamily residence housing six or more families, enforceable by written notice with thirty days to comply.** The row told landlords of 6+ unit buildings that no duty existed.

**Both failures share a shape distinct from L.5.** L.5 concerns a dependency the text *names* — an incorporated definition, a cross-referenced section. This is different: nothing in 61:15:01:14 points to 61:15:01:15. The defect is that **a keyword search returns the provision matching the keyword, and the researcher treats retrieval as coverage.** The adjacent provision is invisible precisely because it did not match the query that was asked.

**Why it produces confident errors rather than gaps.** In both cases the row went on to make an affirmative *negative* claim about scope — "does not reach an ordinary apartment," "makes it a crime for a landlord" — on the strength of having found one provision. **Finding one provision licenses a statement about that provision, never a statement about the field.**

**Practical form:** having found § X or rule X:Y:Z:N, list the chapter's full section index and read the titles either side before writing any scope sentence. For administrative rules this is cheap — chapters are short. Two instances in one session is the point at which the standing instruction says to stop pattern-matching and make the sweep mandatory rather than discretionary.


### L.13 METHOD RULE — disconfirming a citation disconfirms the citation, not the claim

**Rule: when the authority cited for a claim turns out not to support it, the next question is whether a *different* authority supports the claim. Do not treat a failed citation as having falsified the proposition.**

**Why.** The SD re-audit recorded that South Dakota "makes it a crime for a landlord to prohibit, by lease or otherwise, a legitimately disabled tenant from keeping a service animal in a rented residential property… a Class 2 misdemeanor," citing **SDCL 20-13-23.2**. Checking that section showed its offence is scoped to "a place listed in § 20-13-23.1" — a public-accommodations list that does not reach residential rentals. The row was therefore withdrawn and **rewritten as a confirmed-absence row** stating South Dakota has no such criminal penalty in housing.

**Both the original citation and the correction were wrong, and the correction was worse.** The claim tracks **SDCL 20-13-23.4** almost verbatim: *"No landlord may prohibit by lease or otherwise the keeping of a service animal by a person who is totally or partially physically disabled, totally or partially blind, or totally or partially deaf in an apartment or other rented or leased residential property. A violation of this section is a Class 2 misdemeanor."* The defect was the **citation**, not the substance. Disconfirming § 20-13-23.2 disconfirmed § 20-13-23.2.

**Why the failure mode is dangerous.** A confirmed-absence row is *more* damaging than a mis-cited correct row: the mis-cited row is right about the world and wrong about its footnote, while the absence row is affirmatively wrong about the world **and** blocks future canvasses from re-opening the question — that is precisely what confirmed-absence rows are for. The "correction" converted a citation error into a substantive one and then armoured it.

**Practical form:** before converting a claim into a confirmed absence, run a targeted search for the claim's *substance* independent of its stated citation, and sweep the surrounding sections of whatever chapter the failed citation sits in. In this instance the correct section was **two entries below the cited one in the same chapter index.**

**Interaction with L.12.** These compound: the adjacent-provision sweep L.12 requires would have surfaced § 20-13-23.4 immediately, and L.13's error could not have survived it. Where a claim is being *withdrawn* rather than added, the sweep is not optional — the cost of a wrong absence is higher than the cost of a wrong presence.


### L.14 METHOD RULE — a clause-level flag must be checked against the CSV before it is raised, not after

**Rule: when a statute-reading pass suspects the clause library is missing or misstating something, query the CSV for state-specific overrides of the relevant clause BEFORE recording the flag. A flag inferred from the checklist alone is an argument from absence about a file that was not consulted.**

**Why.** The cross-state core-obligations canvass (run during the SD re-audit, 2026-09-07) raised nine clause-level flags. Four were checked against the CSV in the same session:

| Flag | Outcome |
|---|---|
| MN § 504B.113 subd. 3(b) pet-fee disclosure vs `pet-policy-mn` | **REAL** — clause was non-compliant with a mandatory lease-content rule; fixed in v133 |
| ND § 47-16-20.1 payment-method fee ban | **FALSE** — fully covered by `edu-payment-method-fee-ban-nd` and cross-cited in two clauses |
| ND § 47-16-07.2 condition statement | **FALSE as to correctness** — duty was recorded, though poorly placed; findability fix only, v134 |
| KS § 58-2555(f)/(g) vs `tenant-maintenance` et al. | **FALSE** — `tenant-duties-ks` already carries both subsections nearly verbatim |

**Three of four were false.** Each was raised by reading a statute, observing that the *checklist* had no dedicated row on the point, and inferring the *CSV* had no coverage. **The CSV was not queried.** In every false case a state-specific override already existed and already said the right thing.

**This is the mirror image of L.10.** There, the checklist lacked rows for universal obligations and a canvass could not find what was not listed. Here, the checklist was used as a proxy for the CSV's contents, and absence in one was read as absence in the other. **The two files answer different questions and neither substitutes for the other.**

**Cost of getting this wrong is asymmetric but real.** A false flag wastes a verification cycle and, worse, invites a "fix" to a clause that was already correct — the L.13 hazard, where a correction is more damaging than the thing it corrects. The MN case shows the flags are worth raising; the ND and KS cases show they are cheap to pre-check.

**Practical form:** before recording a clause-level flag, run the override query — for clause `X` in state `S`, list rows where `supersedes == X` or where `id` matches `X-{s}`, and read them. It is one query and it resolved three of four flags here in seconds.

## ADDENDUM M — Product & build backlog arising from the clause library (2026-09-06)

Findings that surfaced during legal verification but require **application** changes rather than clause changes. Previously scattered across individual row `notes` fields where engineering work would never encounter them. This addendum is the standing home for them — new items get appended here, not to a new file.

### M.1 Initialling-field mechanism — **a clause currently ships broken**

**Driver:** N.D.C.C. § 47-16-15(4). Any agreement requiring a residential tenant to give termination notice **exceeding one month from the end of a month** must state the requirement **and provide space for the lessee to initial next to it**. Not initialled at signing → the extended period is unenforceable and reverts to one calendar month.

**What breaks:** a generated ND lease stating a 60-day tenant notice requirement, without an adjacent initial box, **silently loses that term**. The landlord believes they have 60 days; they have 30. Nothing in the document or the app signals the failure.

**Needed:** a field type that renders an initialling space, plus placement control so it sits *adjacent to* specific clause text rather than at the end of the document.

**Status:** `lease-notice-initial-requirement-nd` is committed as `CONDITIONAL` and is the library's first **layout/placement** requirement. It cannot function as intended without this. **Urgency: high.**

### M.2 Conditional clause inclusion keyed to another clause's field value

Same section. The initialling requirement applies **only when** the tenant-side notice period exceeds one month — an applicability condition turning on a value entered in a *different* clause. The builder has no mechanism for this; today it is a manual judgment the landlord must make correctly and unprompted. **Urgency: high** — the other half of M.1.

This is the first concrete instance of the conditional/applicability rules §3 of this review anticipated but found no evidence for. See M.10.

### M.3 Security deposit interest calculation and disclosure

**Driver:** N.D.C.C. § 47-16-07.1(1) — deposit must be held in a federally insured **interest-bearing** account, interest paid at termination where occupancy was nine months or longer. Minnesota carries an equivalent requirement.

**What breaks:** Steinoak cannot calculate, track or disclose a deposit-interest figure anywhere. The clause promises interest the product cannot compute. **Urgency: medium-high.** Two states, `REQUIRED` in both — build once, not per state.

### M.4 Deposit return timing is a computed trigger, not a fixed offset

**Driver:** N.D.C.C. § 47-16-17.1(8) **replaces the triggering event** for the 30-day return in a DV termination — sole victim tenant: first day of the month following vacatur; co-tenants still bound: **expiration of the lease**, potentially many months later.

**What breaks:** any deposit-deadline reminder keyed to "termination + 30 days" fires wrong in these cases. The *document* was corrected at v121 to a neutral formulation; the *automation* is still wrong. **Urgency: medium.**

### M.5 ACH network compliance on fee collection

**Driver:** N.D.C.C. § 6-08-16(2)(a) — a holder using the **automated clearinghouse network** to collect returned-instrument fees "shall comply with the network's rules and requirements." Forward-looking: if Steinoak ever auto-collects NSF fees via ACH, the feature inherits Nacha obligations. **Urgency: low now, blocking later** — record before the feature is scoped.

### M.6 Unclaimed deposit escheat — a compliance calendar, not a clause

**Driver:** N.D.C.C. ch. 47-30.2. A deposit unclaimed more than one year makes the landlord a statutory **holder**: notice by first-class mail **no more than 120 days before filing** where value is $25+; **electronic filing before November 1** covering the twelve months to July 1; payment on filing; **ten-year** retention. Penalties: 1% interest per 30-day period, $200/day to a $5,000 cap; willful evasion $1,000/day to $25,000 **plus 25%**.

**What breaks:** an annual, date-driven obligation with day-rate penalties and no prompt anywhere in the product. **Urgency: medium.**

### M.7 Dormancy charge — decision needed, not a build task

**Driver:** N.D.C.C. § 47-30.2-31 permits deducting a **dormancy charge** before remitting an unclaimed deposit, but only where (a) an enforceable **written contract** authorises it **and** (b) the holder **regularly imposes it and regularly does not reverse it**.

Limb (a) is a drafting hook. **Limb (b) cannot be satisfied by any document** — a landlord who is occasionally lenient destroys their own clause. Same shape as M.8. **Two instances now make this a category**, not a one-off: does Steinoak want to offer clauses whose validity it cannot protect, and if so does the legal tracker need a "consistency of practice" concept?

### M.8 After-the-fact reservation of rights (pre-existing, reinforced)

Nebraska § 76-1433 — waiver-avoidance on accepting late rent requires a **post-breach** agreement; no standing lease clause satisfies it. Already on the backlog for the legal tracker. M.7 is a second instance of the same category, strengthening the case for the general mechanism over a one-off.

### M.9 "Default clauses" feature — prior flag, now stronger

§4 of this review flagged that the user-selectable "default clauses" feature may become obsolete once `REQUIRED`/`PROHIBITED` enforcement is automated, since a landlord should not be able to default away something legally required.

**The ND re-audit strengthens this.** ND alone carries multiple `REQUIRED` `LEASE_CLAUSE` rows — including `lead-based-paint`, found **missing entirely** from ND and SD leases with $22,263-per-violation exposure. A landlord able to omit `REQUIRED` clauses *by preference* is the same failure mode as the library omitting them *by defect*.

### M.10 Cross-cutting — the deferred rules engine now has evidence

M.1, M.2 and M.4 are the same underlying gap: **the builder treats clauses as independent text blocks, while several legal requirements are relational** — applicability turning on another clause's value, on a computed date, or on physical placement within the document.

§3 of this review recommended deferring the compositional rules engine, on the reasoning that "no evidence yet exists that the library needs this, since findings so far have mostly been flat state-level rules." **That reasoning is now superseded.** There are four concrete instances, one of which ships a broken clause today. The deferral was correct when made and should be revisited.

### M.11 `REQUIRED` parent clauses with blank `states` silently omit on new-state onboarding

**Found:** `security-deposit-return` is `REQUIRED`, `is_active TRUE`, and carries a **blank `states` field**. This is correct today — all nine jurisdictions using it (NY;HI, WV, CO, WY, KS, NE, MN, ND, SD) have their own override superseding it, and `states` was progressively emptied as each override was written, to clear display collisions. Blank correctly means "displays nowhere."

**The latent defect:** because `states` is the single source of truth for display, **any state added to the library in future without its own deposit-return override receives no deposit-return clause at all.** The parent cannot act as a fallback — it has no tags. The omission is silent: no collision, no dangling reference, no failed assertion. Nothing surfaces it.

**This is the project's recurring failure shape, pre-positioned.** It is the same class as ND's 43 untagged generics and SD's 46: an *omission* rather than a misstatement, invisible to every integrity check the library currently runs. Here it is latent rather than live, which is the only reason it hasn't caused harm yet.

**Needed, in order of cost:** (1) an onboarding assertion — for each `REQUIRED` parent, every tagged state in the library must resolve to either the parent or exactly one override; (2) a decision on whether fully-overridden parents should remain `REQUIRED`/active or be marked as templates with a distinct status, so "blank because superseded everywhere" is distinguishable in the data from "blank by mistake."

**Note on why this took until now to surface:** the standing blank-`states` assertion is written to catch *newly written* rows (the L.3 lesson, after five ND rows were written with blank tags). A pre-existing blank parent passes that check by construction. **Urgency: medium — latent, but it fires the moment state #8 is onboarded.**
