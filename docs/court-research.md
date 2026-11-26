# Court research: Legal Tracker groundwork, Colorado first

*Approved by Taylor 2026-11-26. Nothing started yet.*

## Context
The Legal Tracker (v2, last in the build order because of legal-accuracy risk; `docs/product-spec.md`) needs to know, for each place a landlord rents, how a case actually runs: notices, filing, service, hearing, judgment, possession, appeal, money claims, and where a former tenant can be sued (lesson 6). That isn't only state law. Taylor's Colorado case went to his county courthouse, which has its own rules and practices. So this research covers every layer a case passes through, the same way the lease library covers every rule a lease must meet.

This is research only. No app or schema work; the Legal Tracker build stays last, Colorado-only first, as decided. The research is a token-heavy track for research days that doesn't wait on Taylor's downloads the way local law does.

## Layers (each checked; an upper layer is never overridden by a lower one)
1. **Federal:** e.g. the CARES Act 30-day notice, the Servicemembers Civil Relief Act affidavit, and federally assisted housing rules.
2. **State statutes:** eviction (Colorado's forcible entry and detainer article), small claims, venue, service, judgments and collection, record sealing.
3. **Statewide court rules and forms:** the Colorado county court and small claims rules, Chief Justice directives, and the Judicial Branch's eviction packet (the JDF forms).
4. **The court itself:** each judicial district's local rules and chief judge orders, and each county court's own practices: filing (in person or e-filing), fees, hearing days, mediation, interpreters, what the clerk requires. Denver County Court sits outside the state court system and has its own rules (to confirm in the state step).
5. **Where a court's practice doesn't easily mesh with a rule above,** the row says so, quotes both, and states that the rule above controls. As with local law, a lower layer never switches off a duty from a higher one.

## Topics
Start from the Legal Tracker spec's action types and the eviction-rule field list (`docs/product-spec.md`), plus:
- Notices before filing: kinds, periods, contents, delivery, and which ones a court checks.
- Filing: which court, forms, fees, filing method, what must be attached (lease, notice, ledger).
- Service: who may serve, how, deadlines, proof.
- The tenant's answer and the hearing: deadlines, continuances, mediation, jury, an LLC landlord appearing without a lawyer.
- Judgment, the writ of restitution, the sheriff, the tenant's property afterwards.
- Appeal and stays.
- Money claims: rent, damages, deposit disputes; small claims limits and who may file there; **venue and jurisdiction over a former tenant who has moved, including out of state** (lesson 6; the backlog's venue item).
- Collecting a judgment: garnishment, liens, how long a judgment lasts.
- Record sealing and anything else the court does with the case afterwards.

The lease library already has Colorado eviction rows (`eviction-process`, `for-cause-eviction`, `cure-and-eviction-grounds`, `eviction-record-sealing`, `entity-landlord-court-representation`, `post-eviction-property` and others). Court research reuses them and points to them, never rewrites them, and reports any it finds wrong as a targeted fix.

## Sources
Official text only, as in the SOP: statutes from the state's official code; court rules, directives, forms and local rules from the Judicial Branch's own site; a court's practices from that court's own pages and published orders. Secondary sources (legal aid guides, practice blogs) are leads only. Court websites are expected to be reachable without Taylor's downloads; where one blocks the shell, read it in Taylor's Chrome one page at a time (CLAUDE.md), never working around a block.

## Files
`legal-tracker/research/`, separate from the lease library so its files and guards are untouched:
- `courts-CO.csv`: the queue. Court, type (district, county, Denver County, small claims division), counties served, judicial district, source URLs, status (`NOT_STARTED`, `CHECKING`, `RESEARCHED`, `COULD_NOT_CHECK`), checked date, next step.
- `court-rules-CO.csv`: one row per rule per layer: topic, layer, court (blank for statewide), the rule in plain words, quoted text, citation, source URL, effective date, last checked, verification status, and the lease-library row it relates to.
- `decision-log-CO.md` (a section per court) and `needs-taylor.md` (this track's own list).
- A check script (`scripts/legal-tracker/check-court-research.py`): valid statuses and layers, every row cited and quoted, every pointer to a lease-library row exists.

## Phase 1: set up (small)
The files above, the topic list with search terms, and the Colorado court queue from the Judicial Branch's own court list.

## Phase 2: Colorado state step
Read federal, statute and statewide-rule layers in full and draft their rows. List every kind of court that hears landlord cases and what each can hear. Settle which statewide forms are required and which optional.

## Phase 3: pilot
**Taylor's own court, Weld County Court** (Weld County is in the 19th Judicial District; confirm in the state step), **Denver County Court** (the outlier), and **one rural county court**. For each: read every local rule, order and court page; draft rows; independent check by a fresh agent (at most 3 rounds, SOP rule 80); spot-check about five high-stakes rules.

Then compare the pilot against **Taylor's real case** (his Colorado experience, so asking is allowed): walk the steps he went through and check that the research gets each one right, including the small-claims venue ruling. Report misses, usage and time per court, and a projection. **Stop for Taylor's go-ahead.**

## Phase 4: rest of Colorado
Every county court and judicial district, busiest first (court case counts if the Judicial Branch publishes them, else renter-occupied homes by county). One court per resumable unit.

## Phase 5: other states
After Colorado, report lessons and pace to Taylor. Then other states in the library's research order (the same state's corpus, decision log and citations are already there), each starting with its state step. Order to revisit with Taylor at that point.

## Research-day routine (shared with local law)
- Runs Tuesday evening to Wednesday 10 PM, alongside local law, in the same session. Up to 4 agents at a time across both tracks. Each agent saves to files as it goes; commit after each unit; one agent per official site.
- Every question or report starts with **[Court research]** or **[Local law]**; each track has its own `needs-taylor.md`, shown as its own panel in the Research Day app.
- Commits name only this track's folders. No writes to `docs/backlog.md`, `CLAUDE.md` or `docs/history.md` during the day; notes move there at wrap-up. Backend tests are never run (Taylor may be using the test database).
- Usage: record weekly usage at the start and end of each research day, and each track's agent token counts, to measure cost per court.
- Overnight rules are the local-law plan's (`docs/local-law.md`, "Evening and overnight").

## Not in this plan (decide later, with Taylor)
The Legal Tracker's data model and screens; how a property finds its court (county, and Denver's special case); deadline calculation; watching court rules and forms for changes (LegiScan doesn't cover courts).

## Verification
The check script passes; every pilot row is quoted from official text and independently checked; the pilot matches Taylor's case step by step, or each difference is explained.
