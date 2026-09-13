## Decision Log: Clause Library Verification Workflow (Nationwide Coverage Strategy)

**Date:** 2026-08-18
**Status:** Approved — Colorado is the proof-of-concept state
**Context:** Steinoak's clause library (112 starter clauses across 11 groups) needs to expand toward genuine nationwide coverage without creating false confidence or product liability. This entry captures the verification workflow, data model, and screening rules agreed on before implementation begins.

---

### ⚠️ SCOPE BOUNDARY — READ BEFORE ASSUMING "COLORADO IS DONE"

Everything in this log covers **Colorado state law only** — C.R.S. Title 38, Article 12 in full, plus several other state statutes found along the way that touch leases but live elsewhere (the anti-discrimination/voucher-acceptance law in Title 24, the Consumer Protection Act's Honest Pricing law in Title 6, the criminal misrepresentation statutes for assistance animals in Title 18).

**This does NOT cover municipal or local ordinances — not Denver, not Boulder, not Frederick (Taylor's own property's city), not any city.** This gap was explicitly flagged in the very first research conversation that kicked off this whole project (see the ChatGPT-sourced context at the start of this effort): *"Denver, for example, can have requirements that don't apply to a property elsewhere in Colorado."* Zero research has been done into any city's own landlord-tenant rules. State law preempting rent control specifically (Part 3) does not mean cities can't regulate other things — occupancy limits, extra disclosures, licensing requirements, and more are real possibilities that remain completely unresearched.

**Also deliberately deferred, not fully researched, marked N/A because they didn't apply to Taylor's situation — not because they were checked and found clean:** the mobile home park provisions (Parts 2, 11, 14), the Rental Application Fairness Act (Part 9, pre-lease/application stage), and the full nuance of the Immigrant Tenant Protection Act beyond what became a standing rule.

**No attorney has reviewed any of this.** This process is genuinely rigorous and well-sourced — more so than most landlord content available publicly — but it is not a substitute for professional legal review before any of this ships to other landlords as a live product feature.

**Correct framing: "Colorado state law, thoroughly verified" — not "all law applicable to a Colorado rental property."** This distinction should be reflected in the product itself, not just this log — the app's own coverage claims to users should not overstate what's actually been verified.

---

### 1. Strategic approach: depth-first, not breadth-first

Rejected: racing to cover all 50 states at once. A gap in coverage is a known, honest limitation. A generic clause that looks authoritative but is subtly wrong for a given state is a false sense of protection — that's the actual liability trap, not incompleteness.

Approach: go deep on one state at a time, starting with **Colorado**, and treat "nationwide" as a visible roadmap rather than a day-one claim. Within each state, prioritize the topics where state variance is highest-stakes: security deposits, notice/entry, termination, habitability, and required disclosures. Lower-stakes topics (pets, parking, guest policy) carry less prescriptive state law and are lower priority for deep verification.

Liability posture: the app already carries a persistent disclaimer at the top of every generated lease ("not legal advice... consult a licensed attorney..."), and will have Terms & Conditions reinforcing the same. This is a standard, accepted posture in this product category (Zillow, TurboTenant, RocketLawyer, LawDepot all operate this way) — not a red flag.

---

### 2. Redefinition of "universal"

**Old model:** no state tag = universal (implicit, unverified default).

**New model:** a clause is only "universal" once it has been individually verified against all 50 states (tagged with all 50, not left blank). Blank/no-tag now means **unverified default** — generic language that has not yet been confirmed to hold up anywhere, shown to the landlord as such.

This makes "universal" an earned status, not an assumption, and supports a visible coverage indicator per clause in the product UI later (verified / generic-unverified / not yet available for this state).

Two different kinds of verification exist and both need a proof record, but they're not the same research question:
- **State-specific override clause:** confirming "the law says X" — a positive citation.
- **Universal clause, per state:** confirming "no state law contradicts this" — proving an absence. The proof record for this case may cite the section(s) reviewed rather than a specific requirement, since there's no requirement to cite.

Not all 53 currently-universal clauses carry equal verification weight. Sort into:
- **Mechanics clauses** (severability, entire agreement, e-signatures) — largely governed by uniform federal/state frameworks (e.g., e-signatures sit on the federal ESIGN Act + near-universal state UETA adoption) and can be verified in efficient batches.
- **Substantive clauses** (deposits, fees, entry, habitability, termination) — need genuine individual per-state research.

**Critical clarification, 2026-08-20 — display behavior, not just labeling.** An earlier working assumption (during initial CSV construction) incorrectly treated blank `states` as "displays for every state as a generic fallback, unverified." **This is wrong and has been corrected.** The actual model: `states` is the single source of truth for both *where a clause displays* and *which states it has been verified for* — these are the same list, not two separate concepts. **Blank `states` means the clause displays for no state currently**, not "displays everywhere." A clause only becomes visible for a given state once that state has been explicitly added to its `states` field after real verification. A clause only becomes genuinely universal once all 50 states have been added — at that point it displays everywhere because the list is complete, not because of any special "blank" behavior.

**Practical consequence, stated explicitly so it's a known tradeoff, not a surprise:** every clause verified during the Colorado pass — including generic contract-mechanics clauses like `late-fee`, `security-deposit-use`, `keys`, `severability`, `default-by-tenant` — now has `states: CO` and will display **only** for Colorado properties, not for any other state, until each additional state is independently verified and added. A non-Colorado property (e.g. Wyoming, or any state not yet reached) will see an empty or near-empty Provided Clauses pool until its state gets its own pass. This is Taylor's deliberate, explicit choice (2026-08-20), not a bug — worth confirming there are no live non-CO users who'd be negatively affected by this before deploying the corrected CSV.

**`is_active` field added, 2026-08-20 — for one specific purpose: suppressing legacy pre-project state tags.** The original 112 included ~51 state-specific clauses (NY, GA, TX, CA, MD, etc.) tagged before this verification project existed, generated from an earlier general/high-level pass rather than the statute-walk-and-proof-record process. These clauses already carry a state code in `states`, which would make them display normally under the model above — but they were never run through real verification, so `is_active: FALSE` suppresses them regardless of their tag, until each one goes through an actual pass (same treatment Colorado just received). Once a legacy clause is properly verified, flip `is_active` to `TRUE` — no other change needed, since its existing state tag already positions it correctly for display.

---

### 3. Schema additions

**On each clause** (in addition to existing `id`, `group`, `title`, `states`, `supersedes`, `bodyText`):
| Field | Purpose |
|---|---|
| `content_type` | LEASE_CLAUSE / LANDLORD_EDUCATION / OUT_OF_SCOPE — output of the three-bucket screening test (see §7). Only LEASE_CLAUSE items are eligible to attach to a lease; LANDLORD_EDUCATION items live outside the tenant-facing clause library (compliance guardrails, future landlord-guide content); OUT_OF_SCOPE items are logged as researched-and-rejected so we don't re-research them later. |
| `rule_type` | REQUIRED / CONDITIONAL / PROHIBITED / CONSTRAINED / RECOMMENDED. CONSTRAINED specifically means: the landlord sets their own term/number, but statute puts a ceiling or floor on what that term can be (e.g. late fee amount is the landlord's choice, but CO law caps it at the greater of $50 or 5%, and requires at least a 7-day grace period). This is distinct from REQUIRED (the term must exist, full stop) and RECOMMENDED (no statute involved, just good practice). |
| `verification_status` | UNVERIFIED / VERIFIED / NEEDS_REVIEW |
| `is_active` | Added 2026-08-20 (see §2). Suppresses display for clauses that carry a legacy pre-project state tag never run through real verification, independent of what `states` says. `TRUE` once `verification_status` = VERIFIED. |
| `last_verified_date` | date the clause was last confirmed against current statute |
| `next_review_date` | when it's due for re-verification |

**New linked table: `clause_legal_proof`** (many-to-many with clauses, since one statute can support multiple clauses and one clause can draw on multiple statutes):
| Field | Purpose |
|---|---|
| `citation` | statutory reference, e.g. "C.R.S. § 38-12-103" |
| `source_url` | link to the primary government source (not a landlord blog) |
| `verified_excerpt` | verbatim controlling statutory text (government edicts are not copyrighted, so verbatim statutory text is safe to store — unlike a law firm's summary of it) |
| `verified_date` | when this excerpt was pulled and confirmed |
| `verified_by` | who verified it (Taylor initially; placeholder for attorney review later) |
| `clause_ids[]` | which clause(s) this proof supports |
| `superseded_by` | if the law changes, points to the new proof record — old record stays in history rather than being deleted, preserving a full audit trail (what was true, and when) |

---

### 4. Re-verification cadence

Colorado's legislative session runs roughly January–May; most non-emergency laws take effect ~90 days after adjournment, typically early August (exact pattern to be confirmed during the first verification pass, not assumed). Proposed cadence: **re-verify all CO-linked clauses annually in late summer**, after that year's session has taken effect.

---

### 5. Per-clause verification workflow

1. Does this clause touch CO law at all, or is it pure contract mechanics?
2. If it touches CO law: find the actual statute (Colorado Revised Statutes via the General Assembly, cross-checked against the CO Legislative Council's "Laws Regulating Landlords and Tenants" guide as an index only, never as the source of truth).
3. Compare clause wording against the statute for accuracy as of today.
4. Write the proof record (citation, source URL, verbatim excerpt, date).
5. Classify `rule_type`.
6. Mark VERIFIED, set `next_review_date`.

---

### 5a. Cross-cutting process rules — added 2026-08-27

Two rules that apply to every state, added after the Colorado re-audit surfaced both as real gaps. Placed here, in the methodology, rather than in a state's findings — both were previously buried as one-off observations inside CO-specific sections (§18 and §17 respectively) where a new state's pass would never encounter them.

#### 5a.1 Shared-clause edits must propagate to every tagged state

**The problem this solves.** During the CO re-audit, `lead-based-paint` was materially corrected — 40 CFR 745.113(b)(1) requires the Lead Warning Statement verbatim and our text paraphrased it. That clause is tagged **CO;WY;KS;NE;MN**. A single state's audit silently changed the operative lease text for four other states, whose decision logs still describe the old wording and whose `last_checked` dates still assert a verification that no longer matches the clause. Nothing in the process caught this; it was noticed by hand. As the state count grows, shared clauses accumulate tags and this failure mode compounds — a correction made during State 12's pass can quietly rewrite States 1–11.

**The rule.** Any edit to the `bodyText`, `rule_type`, or `content_type` of a clause tagged with **more than one state** triggers all of the following, in the same session as the edit:
1. A written note in **every** tagged state's decision log recording what changed, why, and which state's work prompted it.
2. `last_checked` reset to the edit date for the clause — it is no longer verified as of any earlier date for any state.
3. An explicit judgment, recorded, on whether the change is **uniform** (federal law, or generic contract mechanics — benefits all tagged states equally) or **state-driven** (one state's law forced it, in which case the other states may need a state-specific override instead of inheriting the edited text).

That third step matters most. A federal fix like the lead-paint correction is safe to propagate. A change driven by one state's statute is **not** — inheriting it silently is how a clause becomes wrong for four states in order to be right for one.

**Programmatic check to run before any commit:** list every clause where `states` contains more than one state and `last_checked` post-dates the earliest tagged state's completion date. Each hit needs a log note in the lagging states or an explanation of why none is required.

#### 5a.2 Ask for primary statutory text early, not after two failed rounds

**The evidence.** Twice on Colorado, search returned conflicting or incomplete secondary summaries and the item sat at NEEDS_REVIEW across multiple sessions. Both times, Taylor pasting the actual statutory text resolved it immediately — and in the case of C.R.S. 38-12-503, the primary text turned up substantially more than the original question: a materially wrong request-trigger in `edu-alt-housing-co`, an invented duty in `habitability-timeline-co`, a drafting trap in shipped tenant-facing text, an opt-in landlord right we were forfeiting, and a fifth non-waiver standing rule. None of that was reachable from summaries.

**The rule.** When a specific statutory section is identified as controlling and two search attempts have not produced its actual text — or have produced conflicting versions of it — **ask Taylor to paste the section directly** rather than continuing to search or shipping the item at NEEDS_REVIEW. Do not treat a third and fourth search as the cheaper option; the evidence says it isn't.

**Corollary:** an item may not be marked VERIFIED on the strength of secondary summaries alone where the specific controlling section was identified but never actually read. Marking it NEEDS_REVIEW and moving on is acceptable; marking it VERIFIED is not. (See §17's finding on `nsf-fee-limit-co`, which was shipped VERIFIED with an unresolved citation ambiguity recorded in its own notes.)

---

### 6. Gap discovery: three independent sources, not one

A single checklist (even a good one) can't be trusted alone — "it's hard to know what you don't know." Triangulate:

1. **Statute structure walk** — Colorado's landlord-tenant law (C.R.S. Title 38, Article 12) is organized into numbered Parts by topic. Walking every Part against the clause library is the most rigorous check, since it's the state's own organization of what it chose to regulate, not our guess. First pass already surfaced real gaps: retaliation prohibition (Part 5), victims of domestic violence/stalking protections (Part 4), EV charging systems (Part 6), notice of rent increase (Part 7), required documentation/payment receipts (Part 8), immigrant tenant protections (Part 12), for-cause eviction policy as it affects lease termination language (Part 13). Also flagged: security deposit treble-damages provision under the separate Security Deposit Act.
2. **Topic-list comparison against established CO-specific lease products** (e.g. Colorado Real Estate Commission forms) — compare headings/structure only, never copy language — as an independent cross-check for professional best-practices the statute walk might not surface.
3. **Taylor's own landlord experience** — real gaps that caused real problems (e.g. early termination) aren't always visible from statute text alone.

---

### 7. Screening test: does a legal topic belong in the lease at all?

Not every real, verified statute belongs in tenant-facing lease text. Before a statute-walk finding gets classified with a `rule_type`, it passes through a three-bucket test:

- **Lease clause candidate** — passes at least one of:
  1. It's a legally required disclosure/notice (law requires the tenant be told, in writing)
  2. It's a contract term the landlord needs to state, where law constrains what it can say (rent, late fees, entry notice)
  3. It genuinely serves the landlord to have the tenant agree to it in writing
- **Landlord-education only** — real, verified law, useful for the landlord to know, but doesn't belong in tenant-facing lease text (e.g. security deposit treble-damages penalty for bad-faith withholding — not a disclosure requirement, gives the tenant "ammunition" with no contractual upside to the landlord). Candidate for a future landlord-facing guide/notes feature, not the clause library.
- **Out of scope** — belongs to the (separate, notes-only, not-yet-built) legal tracker feature: eviction procedure, court process, service/summons.

**Default bias: over-include with stated reasoning, never silently omit.** Every statute-walk finding gets surfaced with its proposed bucket and a one-line reason — Taylor makes the final call on borderline items, especially the "lease clause candidate" vs. "landlord-education only" line, which depends on landlord judgment/risk tolerance as much as law.

**Sub-rule: statutory ceilings/caps default to LANDLORD_EDUCATION, not LEASE_CLAUSE.** A clause that merely states the legal maximum/minimum for something (e.g. "security deposit will not exceed two months' rent") tells the tenant what the landlord *could* legally do, without benefiting the landlord — it's information with zero contractual upside and real downside (it hands the tenant a number to hold the landlord to, i.e. "ammunition"). The lease should state the landlord's *actual* chosen term (the real deposit amount, the real late fee), constrained behind the scenes by the statutory ceiling for validation purposes — not recite the ceiling itself to the tenant. **Exception:** if the state's statute specifically requires written notice of the policy/limit to the tenant, that requirement makes it a real disclosure and it stays LEASE_CLAUSE (e.g. Maine's late fee clause, which the statute requires be disclosed in writing at signing). This default reclassifies a number of existing "cap" clauses in the current 112 and should be applied as its own audit pass across the whole library, not just new Colorado findings.

---

### 8. Colorado statute walk — progress log

**Full Part map, C.R.S. Title 38, Article 12**, with first-pass `content_type` calls:

| Part | Topic | Sections | First-pass call |
|---|---|---|---|
| 1 | Security Deposits — Wrongful Withholding | 101–106 | Covered by existing library; 1 error found (see below) |
| 2 | Mobile Home Park Act | 200.1–224 | N/A unless a mobile home park is ever added to the portfolio |
| 3 | Local Control of Rents Prohibited | 301–302 | **OUT_OF_SCOPE.** This is state-vs-local-government law (preempts cities from passing rent control), not a landlord-tenant right, obligation, or disclosure. No clause candidates possible — logged as researched-and-rejected. |
| 4 | Victims of Sexual Behavior/Stalking/DV/Domestic Abuse | 401–402 | **Resolved.** Two findings, two buckets — see §8a below. |
| 5 | Warranty of Habitability / Retaliation | 501–513 | **Resolved.** Retaliation prohibition (§509) = LANDLORD_EDUCATION. See §8a below. |
| 6 | Electric Vehicle Charging Systems | 601 | **Resolved — approved as LEASE_CLAUSE.** See §8a below. |
| 7 | Notice of Rent Increase | 701–702 | **Resolved — reclassified to LANDLORD_EDUCATION + new standing cross-check rule.** See §8a below. |
| 8 | Required Documentation | 801–803 | **Resolved — much larger than originally scoped.** Contains a prohibited-clauses list, a currently-void clause found in the existing library, 2 new REQUIRED clauses, and a radon disclosure requirement. See §8a below. |
| 9 | Rental Application Fairness Act | 901–905 | OUT_OF_SCOPE for the clause library — governs the pre-lease application stage, not lease content. Could matter for a future standalone application feature. |
| 10 | Bed Bugs | 1001–1007 | Covered by existing library. |
| 11 | Mobile Home Park Dispute Resolution | 1101–1110 | N/A unless applicable |
| 12 | Immigrant Tenant Protection Act | 1201–1205 | **Resolved — third standing validation rule.** See §8a below. |
| 13 | For-Cause Eviction Policy | 1301–1307 | **Resolved — LANDLORD_EDUCATION for the policy itself, plus required revision to 2 existing clauses.** See §8a below. |
| 14 | Rent-to-Own Mobile Home Contracts | 1400.3–1409 | N/A unless applicable |
| 15 | Protections for Tenants of Subsidized Housing | 1501–1502 | **Resolved — narrower than expected; see §8a below.** |

**Method finding from Part 15 research:** the statute-structure-walk (gap-discovery source #1) is bounded by whichever Title/Article it walks — it will not surface landlord-relevant law codified elsewhere in Colorado statutes (e.g. anti-discrimination/fair housing law lives in Title 24, not Title 38 Article 12). **Added as a 4th gap-discovery source, alongside the original three:** explicitly search for CO landlord-relevant statutes outside Title 38 (fair housing/anti-discrimination, building/health code habitability standards, etc.) rather than assuming Article 12 is a complete container for everything landlord-tenant.

**First verified correction found — `security-deposit-cap-co`:**

| Field | Value |
|---|---|
| `citation` | C.R.S. § 38-12-102.5 |
| `source_url` | law.justia.com/codes/colorado/title-38/tenants-and-landlords/article-12/part-1/section-38-12-102-5/ |
| `verified_excerpt` | "On and after August 7, 2023, a landlord shall not require a tenant to submit a security deposit in an amount that exceeds the amount of two monthly rent payments under the rental agreement." |
| `verified_date` | 2026-08-18 |
| `rule_type` | CONSTRAINED |
| `content_type` | **LANDLORD_EDUCATION** (reclassified per §7 sub-rule above — this clause stated the legal ceiling to the tenant, which gives the tenant "ammunition" with no benefit to the landlord; the actual chosen deposit amount is already handled by the `{{security_deposit}}` variable in `security-deposit-use`) |
| Prior clause text was also substantively wrong | said "one month's Monthly Rent," current law allows up to two |

Also flagged for a closer read (not yet resolved): HB 25-1249 (effective Jan 1, 2026) adds new bad-faith-withholding rules and a wear-and-tear/preexisting-condition fee-shifting prohibition. `security-deposit-use`'s existing "beyond ordinary wear and tear" language is likely already compliant but needs a direct check against the new statutory language rather than an assumption.

**Next up:** Part 15, then Part 12, then draft actual clause text for everything approved below.

---

### 8a. Resolved findings — Parts 4, 6, 7, 12, 13, 15

**Part 4 — two separate findings, two separate buckets:**

1. **Standing validation rule (applies to every clause, present and future):** C.R.S. § 38-12-402 prohibits any lease from containing a waiver of a tenant's right to call for police or other emergency assistance. Not a clause candidate — a cross-cutting rule the review process checks every clause against. **Also logged as LANDLORD_EDUCATION content in its own right** (per Taylor's 2026-08-18 direction: standing rules get logged both as an enforced check *and* as visible educational content explaining why, rather than living only as invisible process). None of the existing 112 violate it. Relevant if Taylor or any future custom-clause author is ever tempted to write a "crime-free housing" / repeated-nuisance-call style clause — that pattern is what this statute targets.
2. **Approved LEASE_CLAUSE candidate:** a documented victim of unlawful sexual behavior, stalking, domestic violence, or domestic abuse (police report within 120 days, valid protective order, or qualified advocate letter) may terminate the lease in writing without further obligation. Landlord may seek documented actual damages **capped at one month's rent**, via written statement within 30 days. Taylor approved this as CONDITIONAL / LEASE_CLAUSE on 2026-08-18. **Important interaction:** this cap is more restrictive than the standard `early-termination` clause's landlord-compensation formula (greater of one month's rent or 30% of remaining rent) — when this provision applies, it governs instead of the standard formula, not in addition to it. Clause drafting needs to make this precedence explicit.

Drafted 2026-08-18:
```
id: dv-stalking-termination-co
group: Default & Termination
title: Early Termination — Victim of Unlawful Sexual Behavior, Stalking, or Domestic Violence
states: CO
bodyText: "A Tenant who is a victim of unlawful sexual behavior, stalking, domestic violence, or domestic abuse may terminate this Lease and vacate the property without further obligation, upon providing Landlord written notice and the documentation required under Colorado law (a police report from the preceding 120 days, a valid protective or restraining order, or a qualifying advocate's written statement). Notwithstanding this Lease's Early Termination Section, Landlord's compensation for actual damages resulting from a termination under this Section is limited to no more than one month's Rent ({{monthly_rent}}), and Landlord must provide Tenant a written statement of those damages within 30 days of the termination date."
rule_type: CONDITIONAL
content_type: LEASE_CLAUSE
```

**Addition, 2026-08-18 (Taylor's direction):** the statute's landlord confidentiality duty (not disclosing the tenant's victim status or new address to others without consent, except as legally required) is **also logged as LANDLORD_EDUCATION content, in addition to** the LEASE_CLAUSE above — not folded into the tenant-facing clause text itself, since it's a landlord conduct obligation that exists regardless of the lease, but surfaced as background knowledge rather than omitted. Same dual-logging pattern used for the standing validation rules.

**Part 6 — Electric Vehicle Charging Systems: approved as LEASE_CLAUSE, 2026-08-18.** Tenant may install a personal Level 1/2 charger at their own expense (landlord can't restrict parking based on vehicle being an EV/plug-in hybrid); landlord can't charge a placement/use fee beyond actual electricity cost or a reasonable access fee; landlord may require registration within 30 days, safety-standard compliance, and reasonable aesthetic rules; shared-area installations may carry a reasonable spot-reservation fee. Drafted as 4 clauses (mirroring how `parking` already splits into `parking` / `assigned-parking-space` / `parking-vehicle-rules`), finalized 2026-08-18 after two follow-up questions:

- **End-of-tenancy handling (resolved):** per C.R.S. § 38-12-601(5), the charger is tenant property. At lease end, tenant may remove it or sell it to the landlord/another tenant at an agreed price — landlord is never obligated to buy it. If removed, tenant is responsible for any resulting damage (subsection 4(a)), consistent with the library's existing damage/wear-and-tear logic. Statute doesn't address a tenant who neither removes nor sells — treated the same as other abandoned personal property under `surrender-end-of-term`, not as a new case.
- **Existing charger / capacity (resolved, with a caveat):** this statute is a tenant's right to *self-install*, not a mandate that a landlord provide or expand charging infrastructure. It doesn't require a minimum number of chargers, and nothing found supports a tenant demanding expanded shared capacity. If a landlord already provides a charger as an amenity, that's governed by the landlord's own policy, not this statute. Caveat: no explicit statutory language was found addressing the interaction with an already-provided landlord amenity directly — this is a reasoned scope read, not a direct citation, and worth a second look before relying on it in an actual dispute.
- **Missed in the first draft, added:** subsection 4(c) requires the tenant to maintain insurance covering these obligations for as long as the system is installed, naming the landlord as an additional insured — folded into the requirements clause below.

```
id: ev-charging-rights-co
group: Parking & Storage
title: Electric Vehicle Charging Systems
states: CO
bodyText: "Notwithstanding any other provision of this Lease, Tenant may install a Level 1 or Level 2 electric vehicle charging system at the property, at Tenant's own expense, for Tenant's own use, subject to the registration and safety requirements below. Landlord will not charge Tenant a fee for the placement or use of the charging system, other than reimbursement for the actual cost of electricity used or a reasonable access fee in place of metering, except as provided below for shared-area installations. Landlord will not restrict Tenant's parking based on Tenant's vehicle being a plug-in hybrid or electric vehicle, as required by Colorado law."
rule_type: REQUIRED / PROHIBITED (mixed)
content_type: LEASE_CLAUSE
```

```
id: ev-charging-requirements-co
group: Parking & Storage
title: Electric Vehicle Charging System Requirements
states: CO
bodyText: "Tenant will register any electric vehicle charging system with Landlord within 30 days after installation, and will comply with Landlord's bona fide safety requirements consistent with applicable building codes, and with Landlord's reasonable requirements governing the dimensions, placement, and external appearance of the system: [describe any specific safety or aesthetic requirements here]. Tenant will maintain, for as long as the charging system remains installed, an insurance policy covering Tenant's obligations under this Section, naming Landlord as an additional insured. If Landlord places or causes the charging system to be installed at Tenant's request, Landlord may require Tenant to reimburse the cost of installation, including any necessary wiring upgrades."
rule_type: CONSTRAINED
content_type: LEASE_CLAUSE
```

```
id: ev-charging-shared-area-co
group: Parking & Storage
title: Electric Vehicle Charging System in a Shared Area
states: CO
bodyText: "If Tenant wishes to install a charging system in a parking area accessible to other tenants, Landlord may charge Tenant a reasonable fee to reserve the specific parking spot where the system is installed. Unless otherwise agreed in writing, Tenant, and any tenant who later has exclusive rights to that space, is responsible for any damage to the charging system or other property resulting from its installation, maintenance, repair, removal, or replacement."
rule_type: CONSTRAINED
content_type: LEASE_CLAUSE
```

```
id: ev-charging-end-of-tenancy-co
group: Parking & Storage
title: Electric Vehicle Charging System — End of Tenancy
states: CO
bodyText: "A charging system installed at Tenant's expense remains Tenant's property. Upon termination of this Lease, if the charging system is removable, Tenant may remove it, or sell it to Landlord or another tenant at an agreed price — Landlord is under no obligation to purchase it. Tenant is responsible for any damage to the property or the charging system resulting from its removal, consistent with this Lease's Surrender at End of Term Section."
rule_type: REQUIRED
content_type: LEASE_CLAUSE
```


**Part 7 — Notice of Rent Increase: reclassified to LANDLORD_EDUCATION, 2026-08-18, same logic as Part 4's standing rule.** Two components:
1. §701 (60 days' notice) only applies where there's no written lease at all — largely moot for Steinoak, since the app always generates a written lease.
2. §702 (rent cannot be increased more than once per 12 months, regardless of what the lease says) applies unconditionally.

Neither passes the three-bucket test as tenant-facing text (no disclosure requirement, no landlord upside to stating it). **New standing cross-check rule, parallel to the Part 4 police-call rule:** every rent-related clause in the library (current and future — this includes any future month-to-month rent-adjustment or escalation clause) must be checked to confirm it does not permit or imply a rent increase more frequently than once per 12 months. Logged as LANDLORD_EDUCATION content and as an enforced check, per the same dual-logging pattern as Part 4. **Rollover question resolved, 2026-08-20** (previously open): confirmed via the statute's actual text that §701's 60-day rule applies only to a tenancy with *no written agreement at all* — a purely verbal/informal arrangement. A lease that rolls into month-to-month per its own terms (as `holdover` already provides — "continue on a month-to-month basis on the same terms and conditions") remains governed by that written agreement; the written agreement doesn't cease to exist just because the fixed term ended. §701 was never actually a risk for Steinoak-generated leases specifically, since they're never truly unwritten. Related, smaller finding: no separate statute specifies the required notice period for a rent increase on an already-written month-to-month tenancy — that's left to the lease itself, bounded only by §702's 12-month frequency cap — worth knowing if a rent-escalation clause is ever drafted, but not itself an open question.

**Part 15 — split finding, 2026-08-18. Note: original scoping decision to "cover Part 15" was based on the label "Protections for Tenants of Subsidized Housing," which turned out to describe something narrower than what Taylor actually meant by the topic — see below.**

1. **As literally codified in Article 12, Part 15 (§§1501–1502):** just one rule — a landlord initiating an eviction against a subsidized-housing tenant for nonpayment must give **30 days' notice** (not the standard 10 days), per a federal CARES Act provision the state adopted. This is a court-filing procedural requirement. **Bucket: OUT_OF_SCOPE** — legal tracker territory (eviction/court process), consistent with how eviction procedure is handled everywhere else in this project.

2. **What Taylor actually meant — mandatory housing voucher acceptance — lives in a different statute entirely (Colorado Anti-Discrimination Act, Title 24, not Title 38 Article 12).** This is the real, high-stakes item: as of **HB25-1240 (2025)**, every Colorado residential landlord must accept applicants using a housing voucher — the prior exemption for landlords with 5 or fewer units was repealed; there is no small-landlord carve-out. Violations run **$5,000–$50,000 per incident**. Correction to an initial mischaracterization during discussion, confirmed by research: a landlord does **not** have discretion to decline participation because a property isn't "Section 8 qualified" — cooperating in good faith with the housing authority's process (screening, Housing Quality Standards inspection, HAP contract paperwork) is itself mandatory, and stalling or refusing to engage with that process is treated as a form of discrimination, not a valid opt-out. The only legitimate ways to decline a voucher applicant are the same ones that apply to any applicant, applied consistently: legitimate non-discriminatory screening criteria (credit, income, rental history, prior evictions) — never the voucher itself. (One unverified thread not yet run down: a passing reference to mortgage-type-based restrictions in some sources — flagged as needing confirmation, not asserted.)

   **Bucket: mostly OUT_OF_SCOPE for the clause library** (the acceptance mandate operates at the application stage, before a lease exists — parallel to the Rental Application Fairness Act call in Part 9) — **but the terms that follow a voucher tenant into an active lease are LEASE_CLAUSE candidates**, approved 2026-08-18:
   - **Late fee cap for subsidy tenants:** $20 flat, overriding the general CO late fee formula (greater of $50 or 5%) for any tenant whose rent is paid in whole or in part by a housing subsidy — `rule_type: CONSTRAINED`
   - **Habitability proration for subsidy tenants:** when a unit becomes partially uninhabitable, rent (and any paid subsidy) must be prorated based on the affected area/time, calculated on the **total** rent (tenant-paid + subsidy-paid portions combined), not just the tenant's own share — `rule_type: REQUIRED`
   - Awareness of the 30-day nonpayment eviction notice (from finding #1 above) is relevant context for these clauses even though the notice mechanic itself stays OUT_OF_SCOPE

   These would likely be drafted as conditional add-on clauses (triggered by "tenant's rent is paid in whole or in part by a housing subsidy program") rather than folded into the base `late-fee-limit-co` and habitability clauses, since they only apply to a subset of tenancies.

**Drafted 2026-08-18:**

```
id: subsidy-late-fee-co
group: Rent & Payment
title: Late Fee — Tenant Receiving a Housing Subsidy
states: CO
bodyText: "If Tenant's Rent is paid in whole or in part by a housing subsidy program, any late fee assessed under this Lease against Tenant will not exceed $20.00, regardless of the late fee amount otherwise stated in this Lease, as required by Colorado law."
rule_type: CONSTRAINED
content_type: LEASE_CLAUSE
```

```
id: subsidy-habitability-proration-co
group: Landlord Responsibilities
title: Habitability Proration — Tenant Receiving a Housing Subsidy
states: CO
bodyText: "If Tenant's Rent is paid in whole or in part by a housing subsidy program and the property becomes partially uninhabitable, Rent will be proportionally reduced based on the portion of the property affected, calculated on the total Rent for the property including both the tenant-paid and subsidy-paid portions. If Rent has already been paid for the affected period, Tenant will receive a prorated refund, as required by Colorado law."
rule_type: REQUIRED
content_type: LEASE_CLAUSE
```

**Confirmed, 2026-08-18:** raised and resolved a question of whether `subsidy-late-fee-co` should itself be LANDLORD_EDUCATION rather than tenant-facing, given the general sub-rule that statutory caps default to LANDLORD_EDUCATION (§7). Conclusion: this one stays **LEASE_CLAUSE** — unlike a cap the landlord chooses whether to disclose, this clause only gets attached at all when the tenant is already a known subsidy recipient, so it's not "extra ammunition" being handed over; it's a term that only becomes relevant, and gets included, in the exact situation it applies to. No change made.

3. **Follow-up clarification, 2026-08-18 — approval mechanics and landlord exposure during processing.** Raised as a concern: since the mandatory-acceptance duty means a landlord can't decline participation, is a landlord exposed to holding worthless "IOU" vouchers for years while a unit sits in approval limbo? Researched and clarified — **not accurate as feared:**
   - The standard national process (Request for Tenancy Approval → PHA rent-reasonableness check → HQS inspection → lease and HAP contract signed simultaneously → **then** move-in) sequences approval *before* occupancy, not after. A landlord is not obligated to let a tenant move in on the strength of a voucher alone before that sequence completes.
   - If a tenant does move in early, before the HAP contract is signed, standard PHA guidance puts the tenant on the hook for the **full, unsubsidized rent** themselves until approval is authorized — the landlord is not left absorbing a shortfall.
   - The multi-year timeline that's real is the *tenant's* wait to be issued a voucher in the first place (PHA waitlists) — a phase that happens before the tenant even applies to a specific unit and doesn't involve the landlord at all. The per-unit approval process itself, once a voucher holder applies to a specific property, is typically days to a few weeks (rent review ~5-10 days, inspection scheduling ~1-2 weeks, HAP contract processing similar), not years.
   - Net effect for Steinoak's purposes: the realistic landlord-facing risk is ordinary processing delay of a few weeks, not indefinite exposure — worth stating plainly as LANDLORD_EDUCATION content alongside the mandatory-acceptance finding, since it's the natural follow-up question a landlord will have upon learning acceptance is mandatory.


**Part 12 — Immigrant Tenant Protection Act: resolved, 2026-08-18. Third standing validation rule, same shape as Parts 4 and 7.**

C.R.S. § 38-12-1201–1205 (enacted by SB 20-224, in effect since Jan 1, 2021) prohibits a landlord from, unless required by law or court order:
1. Demanding, requesting, or collecting a tenant's immigration/citizenship status information
2. Disclosing or threatening to disclose that information to any person, entity, or immigration/law enforcement agency
3. Harassing, intimidating, or retaliating against a tenant for exercising rights under this Act
4. Interfering with a tenant's rights — including pressuring someone to give up or not seek possession — based on immigration/citizenship status
5. Refusing to lease, or otherwise blocking occupancy, based on immigration/citizenship status
6. Bringing an eviction action based on immigration/citizenship status

Confirmed exceptions (§1204): doesn't bar a landlord from giving a normal notice about a lease or legal violation; doesn't expand or shrink existing termination rights under other law; doesn't authorize violating a separate employment-verification statute (§8-2-130, not relevant to a standard landlord relationship). **Any tenant waiver of these rights is void as a matter of public policy** — no lease may ever contain language attempting to waive this protection. This is the second confirmed example (after Part 4's police-call-waiver rule) of a Colorado statute that voids waiver attempts outright, reinforcing the value of tracking these as standing rules rather than one-off clause checks.

No content requires disclosure to the tenant — this is entirely a set of conduct prohibitions on the landlord plus a non-waiver rule. **Bucket: standing validation rule** (checked against every clause, present and future) **+ LANDLORD_EDUCATION** (dual-logged per the established pattern from Parts 4 and 7). None of the existing 112 violate it.



**Part 13 — For-Cause Eviction Policy: split resolution, 2026-08-18.**

- The policy itself (what for-cause/no-fault eviction reform is, why it exists, the property-type and tenancy-length exemptions, no-fault notice mechanics) is **LANDLORD_EDUCATION** — Taylor already knew of it; knowing it and checking exemption status is background knowledge, not lease text.
- **However**, the existing `holdover` and `month-to-month-notice-co` clauses currently assert an unqualified right (either party ends month-to-month with 21 days' notice) that may not be accurate once a tenancy is 12+ months old and not property-exempt — this is a **correctness problem in existing LEASE_CLAUSE content**, not just missing education, and needs revision. On review, `holdover` itself doesn't need changes (it's about the overstay penalty, already hedged with "as required by applicable law," not about a right to decline renewal) — only `month-to-month-notice-co` needs the split.
- **Approved approach (Taylor, 2026-08-18):** split into two clause variants rather than one — drafted 2026-08-18:

```
id: month-to-month-notice-co-exempt
group: Default & Termination
title: Month-to-Month Termination Notice (Property Exempt from For-Cause Requirements)
states: CO
bodyText: "Either Landlord or Tenant may terminate a month-to-month tenancy under this Lease by providing at least 21 days' written notice to the other party, as required by Colorado law, ending on the last day of a rental period. Because [describe the applicable exemption here — e.g. the property is Landlord's primary residence / a short-term rental / an accessory dwelling unit meeting the criteria of C.R.S. § 38-12-1302], this tenancy is not subject to Colorado's for-cause eviction requirements under C.R.S. § 38-12-1301 et seq."
rule_type: CONSTRAINED
content_type: LEASE_CLAUSE
```

```
id: month-to-month-notice-co-covered
group: Default & Termination
title: Month-to-Month Termination Notice (Subject to For-Cause Requirements)
states: CO
bodyText: "For the first 12 months of Tenant's occupancy, either Landlord or Tenant may terminate a month-to-month tenancy under this Lease by providing at least 21 days' written notice to the other party, ending on the last day of a rental period. After Tenant has occupied the property for 12 months or more, Landlord may terminate this tenancy or decline to renew it only for cause, or for a qualifying no-fault reason, as defined under C.R.S. § 38-12-1301 et seq., and will provide the notice and statement of legal and factual basis that law requires."
rule_type: CONSTRAINED
content_type: LEASE_CLAUSE
```

- **Exemption categories, confirmed via C.R.S. § 38-12-1302 (Applicability), 2026-08-18:** the statute exempts (a) short-term rentals, (b) owner-occupied or owner-adjacent single-family homes/duplexes/triplexes — **specifically requiring the landlord or a family member to actually live in or directly next door to the unit as their own primary residence, not merely that the property is small or a duplex/triplex**, (c) mobile home lots, (d) employer-provided housing, plus two tenancy-level exemptions that apply regardless of property type: (e) tenant under 12 months, (f) unknown/unauthorized occupant. Note: (e) already means every property gets the "first 12 months, no cause needed" treatment automatically — it's not something a property has to separately qualify for. The real fork between Variant A and Variant B is only whether the *property itself* permanently falls into (a)/(b)/(c)/(d), not about the 12-month point, which both variants already handle correctly.
- **Product scoping decision, 2026-08-18:** of the four property-type exemption categories, Taylor expects only two to be realistically relevant to Steinoak's user base — **owner-occupied/owner-adjacent** and **short-term rental**. Mobile home park and employer-provided housing are not expected use cases for this app's target landlords and are deprioritized (not removed — just not a near-term UX priority).
- **UX approach for exemption determination, approved 2026-08-18:** the exemption status is a **property-level fact, not a lease-level one** (it doesn't change lease to lease), so it belongs on the existing Property entity, asked once at property setup and editable later if circumstances change. Proposed as a single plain-language multi-choice question at property setup:
  - *"I (or a family member) live in this property, or in a property directly next door to it, as my own home"*
  - *"This is a short-term rental (Airbnb/VRBO-style), not a long-term residential lease"*
  - *"Neither — this is a standard long-term rental"* (expected default for most users)

  The Lease Builder then uses this property-level answer automatically to select Variant A or Variant B when attaching the clause — the landlord never has to consciously choose between the two variants or understand the underlying statute. A short "why we're asking" tooltip/link should accompany the question, in the app's existing disclaimer tone, given the stakes of a lease asserting a termination right the landlord may not actually have.
  - **Deferred, not solved now:** if a property's exemption status changes mid-tenancy (e.g. landlord moves out, or a long-term rental gets converted to a short-term listing), an already-attached clause snapshot won't update automatically — same snapshot-vs-live tension already logged as a decision elsewhere in this project. For now, the expectation is the landlord re-runs the Lease Builder if a property's status changes, rather than building active change-detection.
- **Noted, deferred:** determining *which* variant a given property/lease should use requires Steinoak to know whether a property qualifies for an exemption — this is a data-model/product-functionality question, not a content question. **Now partially resolved by the UX approach above**; remaining open item is the actual data-model implementation (adding the field to the Property entity, wiring it into the Lease Builder's clause selection logic), which is an engineering task for a future session.

**Part 5 — Warranty of Habitability / Retaliation: resolved, 2026-08-18.**

`habitability-timeline-co` already covers the repair-timeline portion of this Part. The remaining piece, retaliation prohibition (§38-12-509), is confirmed **LANDLORD_EDUCATION**, same logic as the earlier treble-damages call — real, enforceable law, no lease-facing disclosure requirement. Key content for the record:
- A landlord cannot retaliate — by raising rent, cutting services, non-renewal without tenant's written consent, or bringing/threatening a possession action — against a tenant for making a good-faith habitability complaint (to the landlord, a third party, or a government agency), joining a tenants' association, or exercising rights under § 38-12-507.
- Remedies are real: a tenant can terminate the lease and recover up to 3 months' rent or 3x actual damages (whichever is greater), plus attorney fees. Retaliation can also be raised as a defense to an eviction action.
- **Useful protective detail for Taylor specifically:** the statute gives the landlord a rebuttable presumption of *non*-retaliation when exercising an independent, pre-existing right (e.g. raising rent or ending a tenancy at a natural term end) — and that presumption can't be defeated by timing alone. Practical takeaway: if a legitimate, independent reason exists for an action that happens to follow a tenant complaint, documenting that reason is what protects the presumption.

**Part 8 — Required Documentation: resolved, 2026-08-18. Far larger in scope than the original "give a lease copy, give receipts" description — contains a prohibited-clauses list that directly affects the existing library, not just new content.**

1. **Urgent finding — an existing CO clause contained legally void language.** `default-by-tenant`'s attorney-fee language read "Landlord may also recover from Tenant Landlord's court costs and reasonable attorneys' fees" — a **one-way** fee-shifting clause. C.R.S. § 38-12-801(3)(a)(II) prohibits this: fee-shifting must go to whichever party actually prevails in court, and a violating clause is **"null and void and unenforceable."** Notable: Taylor's original Zillow-sourced boilerplate already had the correct mutual language ("the prevailing party may recover...") — it appears to have been flattened into one-way language at some point during earlier drafting in Claude CLI, with nothing catching the change since no citation was attached to it. Real example of why this whole verification project exists — a clause silently drifted from correct to void with no visible signal.

   **Correction, 2026-08-18 — final, correct state after two wrong attempts.** First attempt fixed `default-by-tenant` in place (fee language merged in) — wrong, mixed two legally distinct concepts into one clause. Second attempt split it but then got reverted back into `default-by-tenant` — also wrong, went the opposite direction from what Taylor actually wanted. **Taylor's explicit, final direction:** `default-by-tenant` gets no fee language at all, reverted to its original form; the corrected mutual fee-shifting language lives in its own separate clause, `attorney-fees-prevailing-party-co`. This is the state to build from going forward.
   ```
   id: default-by-tenant
   bodyText: "Tenant will be in default under this Lease if Tenant fails to pay Rent when due and does not cure the failure within the time period specified by applicable law after receiving written notice from Landlord, or fails to comply with any other obligation under this Lease and does not cure the failure after receiving written notice. If Tenant is in default, Landlord may exercise all rights and remedies available under applicable law, including terminating this Lease, regaining possession of the property, and recovering unpaid Rent, late fees, and reasonable costs and expenses, less amounts obtained from the Security Deposit. Landlord will use reasonable efforts to mitigate damages resulting from Tenant's default to the extent required by applicable law."
   ```
   ```
   id: attorney-fees-prevailing-party-co
   group: Notices & General
   title: Attorney Fees and Costs
   states: CO
   bodyText: "To the extent permitted under applicable law, the prevailing party in any legal proceeding related to this Lease may recover from the other party reasonable court costs and attorneys' fees and expenses incurred in that proceeding."
   rule_type: REQUIRED
   content_type: LEASE_CLAUSE
   ```

2. **New standing validation rule (4th, same shape as Parts 4/7/12): no clause anywhere in the library, present or future, may shift attorney fees/court costs to only one party — must be prevailing-party/mutual.** Dual-logged as an enforced check (run against all 112, not just the one found so far — this one violation may not be the only instance) + LANDLORD_EDUCATION content, per the established pattern.

3. **Full prohibited-clause list found in §801(3)(a)**, beyond the fee-shifting item above — each becomes a standing validation rule unless noted otherwise: cannot assign a penalty tied to an eviction notice/action arising from a lease violation; cannot waive the right to a jury trial (except a possession-hearing waiver, which is allowed); cannot waive the right to join a class/collective legal action; cannot waive the implied covenant of good faith and fair dealing; cannot waive the implied covenant of quiet enjoyment (except a carve-out already consistent with existing library language: landlord not responsible for third-party acts beyond reasonable control); cannot charge a fee/penalty for insufficient notice of nonrenewal beyond the landlord's actual losses; cannot characterize any fee (other than the actual periodic rent) as "Rent" in order to use rent-collection remedies like eviction against it; cannot require a tenant to pay a markup/fee on a third-party-billed service beyond a capped amount (see #4 below); cannot let a voucher/subsidy provider pursue a possession action based solely on nonpayment of utilities (ties directly to the Part 15 voucher findings). None of the existing 112, aside from the fee-shifting item above, appear to violate these on first read — full audit against all 112 still pending.
   - **Exemption scope corrected, 2026-08-18 (broader than originally logged) — confirmed via current statute text.** §801(4) exempts mobile home park agreements, and §801(8) exempts owner-occupied duplex/triplex/ADU situations, from **all** of subsections (3)(a)(III) [jury trial, class-action waiver, good faith, quiet enjoyment, **and mandatory mediation** — not just the three originally logged], (IV) [nonrenewal-notice fee], (V) [mislabeling fees as rent], (VI) [third-party markup cap], and (VII) [voucher-utility-eviction ban]. Original entry undersold this — it only listed jury-trial/good-faith/quiet-enjoyment as exempted; class-action-waiver and mandatory-mediation prohibitions are exempted for these situations too. Same property-level exemption shape as Part 13, same reusable UX flag.

4. **Existing clause corrected, 2026-08-18 — confirmed via current statute text.** `utility-submetering-disclosure-co` capped the admin fee at "the greater of $10.00 per month or 2% of the utility charge." Current text of §801(3)(a)(VI) (as amended by HB 25-1090, effective for conduct on/after Jan 1, 2026) confirms this was backwards: a landlord must pick **one** pricing method — up to 2% of the billed amount, **or** up to $10 flat per month — **"but not both."** "Greater of" is not the correct standard. Corrected clause:
   ```
   id: utility-submetering-disclosure-co
   bodyText: "If utilities at the property are not individually metered and Tenant's utility charges are calculated using a ratio or formula rather than a dedicated meter, Landlord will clearly disclose the calculation method in this Lease, as required by Colorado law: [describe the utility allocation method used]. Landlord may charge an administrative fee for this billing method, not to exceed either 2% of the utility charge or a flat $10.00 per month — Landlord may use only one of these two methods, not both. Landlord will not add any markup to the utility cost itself."
   rule_type: CONSTRAINED
   ```
   Also newly found in the same subsection: (VI)(B) prohibits any fee/charge/amount that violates C.R.S. § 6-1-737. **Resolved — see item 11 below**, where this statute (the "Honest Pricing" law, HB 25-1090) was researched in full. This cross-reference means a violation of § 6-1-737 has two layered consequences, not just one: it's a Consumer Protection Act violation in its own right (treble-damages exposure, per item 11), **and** it separately makes the offending lease clause void and unenforceable under Article 12's own prohibited-clause framework (§801(3)(a)), same as every other item in that list. No additional substantive content beyond what's already captured in item 11 — this was a stale cross-reference, not a genuinely separate open item.

5. **New REQUIRED clause needed — landlord/agent name and address.** §801(2): every written rental agreement must state the name and address of the landlord or the landlord's authorized agent, for the purpose of receiving notices and service of process. **Product decision, 2026-08-18 (Taylor):** this is generation-time system content, not clause-library content — same treatment as `{{monthly_rent}}` and other lease facts, auto-populated when the lease PDF is generated, not something added via the Clause Library. **Two linked TODOs surfaced by this finding, logged for engineering/product follow-up:** (a) the system currently outputs an entity name (e.g. "Steinbaugh Estates LLC") rather than an actual person's name — needs a real name captured somewhere; (b) the address currently used was only intended for mailing rent checks, not necessarily one that legally serves the notice/service-of-process purpose the statute requires — needs review of what address is actually being populated and whether it's fit for that purpose.

6. **Resolved, 2026-08-18, confirmed via current statute text — new REQUIRED clause needed for larger landlords, source-of-income non-discrimination statement.** §801(2.5): a written rental agreement must include a statement that C.R.S. § 24-34-502(1) prohibits source-of-income discrimination and requires accepting any lawful, verifiable income source, **except** for landlords with 5 or fewer single-family rental homes and no more than 5 total units. **Exemption confirmed still current** — this is a completely separate statute from the one HB25-1240 amended (which only removed the small-landlord exemption from the voucher-*acceptance* mandate in the anti-discrimination act itself, per the Part 15 findings). No conflict between the two; this exemption stands as written.

7. **New REQUIRED clause — radon disclosure**, from §803 (added by SB 23-206), same shape as the existing `lead-based-paint` and `bed-bug-disclosure-co` clauses (disclosure + tenant signs acknowledgment):
   ```
   id: radon-disclosure-co
   group: Disclosures
   title: Radon Disclosure
   states: CO
   bodyText: "Residential real property may present exposure to dangerous levels of indoor radon gas, which may place occupants at risk of developing radon-induced lung cancer. The Colorado Department of Public Health and Environment strongly recommends that all tenants have an indoor radon test performed before leasing residential real property, and recommends having radon levels mitigated if elevated concentrations are found. Elevated radon concentrations can be reduced by a radon mitigation professional. Landlord discloses the following regarding radon testing, concentrations, or mitigation systems at the property, if known: [describe any known radon testing results, concentrations, or mitigation systems, or state 'none known']. Tenant acknowledges receipt of this disclosure and the Colorado Department of Public Health and Environment's radon brochure, attached to this Lease, as required by Colorado law."
   rule_type: REQUIRED
   content_type: LEASE_CLAUSE
   ```
   - The actual CDPHE radon brochure needs to be sourced and attached the same way the lead-paint pamphlet is handled — product TODO, not clause text.
   - **Lease-length nuance, resolved 2026-08-18:** the disclosure obligation itself applies to every residential lease regardless of length. What changes at the 1-year mark is only the tenant's *remedy* if the landlord gets it wrong — as of Jan 1, 2026, a tenant cannot use the specific "void the lease" remedy tied to radon on a lease of 1 year or less; that remedy becomes available on anything longer than 1 year (directly relevant to Taylor's practice of offering 2-year renewals to good tenants). No second clause needed — same `radon-disclosure-co` clause applies either way — but this raises the real-world stakes of getting the disclosure right on a longer renewal, worth surfacing as LANDLORD_EDUCATION content alongside the clause.

8. **New gap discovered, researched and closed, 2026-08-18 — Colorado meth-lab disclosure does NOT apply here.** Flagged as an open item in the previous session; now resolved the opposite direction. C.R.S. § 38-35.7-103 is titled "Disclosures Required in Connection with Conveyances of Residential Real Property," and its actual text uses "buyer" and "seller" throughout — it is a **property-sale disclosure statute**, not a landlord-tenant lease statute. A secondary source (Landager) claimed it applies to landlords/leases; that claim doesn't hold up against the primary statutory text and is not being relied on. **No clause needed** — correctly excluded after verification, which is itself a useful outcome of the process (not every flagged possibility turns out to be real).

9. **"Letty's Act" (§801(3.5)), death of a tenant during the lease term — reclassified 2026-08-18, after Taylor's devil's-advocate question.** Added by HB 25-1108, effective for agreements entered on or after September 1, 2025. If a lease terminates early due to a tenant's death, several things become void: liquidated damages, rent acceleration beyond end-of-month (or 10 business days after notice of death and vacancy, whichever is later), clawback of move-in concessions/discounts, or any other early-termination fee/penalty. Landlord may retain enough of the security deposit to cover death-related property damage, and may take possession without filing an eviction action once the estate's personal representative surrenders the unit, or automatically 30 days after death if rent is unpaid or the unit has been substantially cleared out.

   **Original call (LEASE_CLAUSE) reversed.** Reasoning: unlike the Part 4-B DV/stalking clause — which is genuinely bilateral, requiring the tenant to actively invoke it with documentation and triggering a real procedural response from the landlord (30-day damages statement) — these death provisions apply automatically the moment the situation occurs, regardless of whether the lease says anything at all. No tenant action is needed to invoke them, same shape as retaliation and the security deposit penalty. **Reclassified to LANDLORD_EDUCATION.**

   **5th standing validation rule (same shape as Parts 4/7/12 and the fee-shifting rule from item 2 above):** the `early-termination` clause's standard fee formula (one month's rent or 30% of remaining rent) must not be read as applying to a termination triggered by the tenant's death. Resolved not with a new standalone clause, but with a short qualifier added to the existing clause:
   ```
   id: early-termination
   bodyText: "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay an early termination fee equal to one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater, and remains responsible for Rent and other obligations up to the termination date. Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or if Tenant vacates or abandons the property without notifying Landlord. Nothing in this Section limits any right either party has under applicable law, including a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act, or due to the property becoming uninhabitable through no fault of Tenant, or, except as prohibited by law in the case of a Tenant's death, any other termination right or limitation provided by applicable law."
   rule_type: CONSTRAINED
   content_type: LEASE_CLAUSE
   ```

10. **New operational item found, not yet fully resolved — landlord/agent identity-change notice duty.** §801(2): if the landlord's or authorized agent's identity changes (e.g. a property changes management, or the entity on file changes), the new landlord/agent must, within 1 business day, either give each tenant written/electronic notice, or conspicuously post the new identity at the property. This is an ongoing operational duty, not lease-drafting content — logged as LANDLORD_EDUCATION, and as a possible future product feature (an "ownership/management change" notification workflow), not something for this pass to build.

11. **Resolved, 2026-08-18 — C.R.S. § 6-1-737, "Honest Pricing" law (HB 25-1090), effective January 1, 2026.** Larger and more consequential than expected for a follow-up item; not a minor cross-reference.

    - **Advertised "total price" disclosure** (must show one all-in number, not itemized fees, most prominent price shown) — **OUT_OF_SCOPE** for the clause library, same bucket as the Rental Application Fairness Act call (Part 9): this is a marketing/listing-stage requirement, not lease content. Relevant only if Steinoak ever builds a listing/marketing feature.
    - **Can't charge a fee for a service not actually provided** — **6th standing validation rule**, dual-logged (enforced check + LANDLORD_EDUCATION), same pattern as the others.
    - **Can't charge a rent payment processing fee unless at least one fee-free payment method is also offered** — see reclassification below (Taylor's follow-up question changed this from a clause correction to LANDLORD_EDUCATION).
    - **Late fees may only apply to actual rent, not other charges** — see resolution below.
    - **Reclassified, 2026-08-18, after Taylor's question — "at least one fee-free payment method" is LANDLORD_EDUCATION, not a clause change.** Original call (a CO-specific override of `acceptable-payment-methods`) reversed. Reasoning: the generic clause already functionally must list real payment methods regardless of any law — that's unavoidable content. The only question was whether to *also state* that one is legally required to be fee-free, which fails the three-bucket test the same way the deposit cap did (not a required disclosure, doesn't serve the landlord to volunteer it). **No clause change — the generic `acceptable-payment-methods` clause stays exactly as originally written, no CO override needed.** The actual obligation is operational: whatever methods a landlord fills into that clause's bracketed placeholder must include at least one with no processing fee. Logged as LANDLORD_EDUCATION.
    - **Late fee scope — resolved, 2026-08-19. Approach changed from a CO-specific override to a direct edit of the universal default clause.** `late-fee` (blank `states`, the unclassified fallback used until a state override exists) read "fails to pay Monthly Rent **or any other Rent**," which is exactly the ambiguity this law's "late fees only on rent itself" rule creates risk around — and connects to an already-logged standing rule (§801(3)(a)(V), prohibiting labeling other charges as "Rent" to use rent-remedies against them). Original fix (a separate `late-fee-co` clause superseding the generic one) was scrapped in favor of editing `late-fee` itself, per Taylor's direction — reasoning confirmed sound: the blank-`states` default was never "verified universal" under the all-50-tagged model to begin with, so tightening it doesn't misrepresent anything, and the change only *narrows* what a late fee can attach to, which can't create new legal exposure in any state — worst case a landlord in a more permissive state loses a little flexibility until that state gets its own override. Corrected universal clause:
      ```
      id: late-fee
      group: Rent & Payment
      title: Late Fee
      bodyText: "If Tenant fails to pay Monthly Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease."
      rule_type: CONSTRAINED
      content_type: LEASE_CLAUSE
      ```
      `rule_type` set to `CONSTRAINED` alone rather than the originally-drafted "PROHIBITED / CONSTRAINED (mixed)" — since this version no longer cites a specific state's law, "PROHIBITED" read oddly for a generic default; the fee amount remains the landlord's own choice, generically bounded by whatever state law applies, which is what CONSTRAINED means. `late-fee-limit-co` (the existing CO dollar-cap clause) is unaffected — it only caps the amount, not the scope, and continues to layer on top of this clause for CO as before. No separate `late-fee-co` clause exists.
    - **Reinforces and adds enforcement weight** to the §801(3)(a)(VI) markup cap already corrected — a violation here is treated as a deceptive trade practice under the Colorado Consumer Protection Act, exposing a landlord to treble damages, not just a voided clause.
    - **Genuinely unsettled, not resolved — flagged for the annual re-verification cadence rather than settled now.** The Colorado AG issued guidance in November 2025 saying enforcement will be flexible for properties using shared/master utility meters, explicitly citing "significant uncertainty" in how the law applies to them, and anticipating a legislative fix in the 2026 session. Worth actively monitoring at the next scheduled CO review rather than treating as settled today.

    **Confirmed already fully covered, no further action:** the mandatory-mediation cost-shifting prohibition raised as a possible loose end is already captured under §801(3)(a)(VIII) in the standing-rules list above — no gap there.

    **Product note, 2026-08-18 (Taylor's direction):** the "total price" advertising/listing requirement above is explicitly flagged as informational for whenever Steinoak eventually builds a marketing/listing feature — not scoped or actioned now, but logged so it isn't rediscovered from scratch later.

---

### 9. Full-library audit against the standing validation rules — 2026-08-19

**Purpose:** every standing rule established during the CO statute walk (police-call waiver, immigration status, rent-increase frequency, one-way fee-shifting, death-of-tenant early-termination overreach, fee-for-service-not-provided, plus the fuller §801(3)(a) prohibited-clause list — eviction-notice penalty, jury trial waiver, class-action waiver, good-faith/fair-dealing waiver, quiet-enjoyment waiver, mandatory-mediation waiver, nonrenewal-notice fee, mislabeling a fee as "Rent," third-party markup cap, voucher-utility-eviction ban, mediation-cost recoupment ban) had only been checked against clauses discovered *while researching that specific rule*. This was a deliberate pass checking all 112 original clauses against all of them at once, since a violation could plausibly exist in a clause nobody had reason to look at closely.

**Method:** keyword-scanned every clause's title and body text against terms tied to each rule, then manually read every hit in full to separate genuine matches from false positives (broad terms like "fee," "emergency," and short substrings like "jury"/"police" produced a lot of noise — e.g. "injury" contains "jury," the right-of-entry clauses' emergency-entry exception is unrelated to a tenant's right to call police).

**Results — no new violations found.** Every hit that survived manual review was either a false positive or one of the three already-known, already-fixed issues (`default-by-tenant` fee-shifting, `utility-submetering-disclosure-co` markup cap, the late-fee scope correction) — confirmed present and already resolved, not a new discovery.

**One new open item surfaced, not resolved — flagged for a future close read, same category as the late-fee "Rent" ambiguity.** `pet-policy` names its charge **"pet rent."** §801(3)(a)(V) prohibits characterizing anything other than the actual periodic rent payment as "Rent" in a way that invokes rent-collection remedies (including eviction) against it. Whether "pet rent" being named that way creates real risk depends on how broadly the lease's own "Rent" definition reads elsewhere — not a confirmed violation, but worth the same kind of scrutiny the late-fee clause already got. Not fixed in this pass.

---

### 10. Real-world lease comparison — Taylor's actual Zillow lease, 2026-08-19

**Purpose:** the second of the three original gap-discovery sources (§6) — comparing the clause library's topic coverage against an independently-drafted, professionally-produced lease already in real use, as a cross-check the statute walk alone can't provide. Taylor's actual lease (property: 6148 Shamrock Cir, Frederick, CO — the same source document the original 112 clauses were substantially drawn from via Claude CLI) was used, rather than a generic CO template, since it's a document Taylor has direct lived experience with.

**Method:** full text extraction (140 pages — includes an attached HOA architectural-standards addendum unrelated to this comparison), section-by-section topic mapping, diffed against the clause library's current coverage. Comparing topics/structure only — no Zillow wording reproduced or incorporated, consistent with copyright limits.

**Result: strong overall match, confirming the original extraction work was thorough.** Notices, tenant's insurance, governing law, entire-agreement, e-signatures, radon disclosure, lead paint disclosure, parking, keys, and general use-of-property rules all matched closely with no material gaps.

**Two genuine findings:**

1. **Significant, flagged for research (not yet actioned) — a habitability/retaliation notice embedded directly in tenant-facing lease text, including a bilingual (English/Spanish) requirement.** Taylor's lease states, inside the Maintenance & Repairs section: tenants are entitled to safe housing under Colorado's warranty of habitability, landlords are prohibited from retaliating for reporting unsafe conditions, and gives the specific notice contact method for reporting a habitability issue — in both English and Spanish. This directly contradicts the earlier classification of retaliation content as LANDLORD_EDUCATION-only (Part 5 finding) — that call was based on a review of §509 (retaliation) alone, not a full read of the rest of Part 5. Two live possibilities, not yet resolved: either a real CO requirement exists (possibly in §503 or elsewhere in Part 5, not yet researched) mandating written notice of habitability rights, how to report issues, and a language-access requirement — or this is Zillow's own best practice, not a legal mandate (their own lease carries a disclaimer that they don't guarantee legal currency either). **Not added to the library yet — needs the underlying statute found before being copied, not just replicated because a major platform includes it.**

2. **Confirmed real gap, drafted and resolved same session.** Taylor's lease explicitly separates **service/assistance animals** from general pet policy, tied to disability accommodation law — the existing `pet-policy` clause made no such distinction. Confirmed as a genuine miss, not just a stylistic difference — and confirmed as a **federal** requirement (Fair Housing Act reasonable-accommodation rules), not CO-specific, meaning this gap likely exists for every state's coverage, not just Colorado's. Drafted:
   ```
   id: assistance-animal-accommodation
   group: Pets
   title: Service and Assistance Animals
   bodyText: "A service animal or other assistance animal that Tenant or an Occupant needs as a reasonable accommodation for a disability is not considered a pet under this Lease, regardless of any pet policy, breed, weight, or size restriction stated elsewhere in this Lease. Landlord will not charge a pet deposit, pet rent, or other pet-related fee for an assistance animal. If the disability and the disability-related need for the animal are not readily apparent, Landlord may request reliable documentation confirming the need for the accommodation, to the extent permitted by applicable law; if the disability and need are readily apparent, Landlord will not require such documentation. Tenant remains responsible for any damage to the property caused by an assistance animal. Landlord may deny or withdraw this accommodation if the specific animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property, that cannot be reduced or eliminated by another reasonable accommodation."
   rule_type: REQUIRED
   content_type: LEASE_CLAUSE
   ```
   **Colorado-specific version, researched and drafted same session** — CO layers real protections beyond the federal baseline via HB 21-1271 and two criminal statutes (C.R.S. §§ 18-13-107.3, 18-13-107.7):
   - CO specifically bars requiring documentation detailing the *nature or severity* of the disability itself — only what's necessary to confirm accommodation need, narrower than the generic federal draft above.
   - CO makes intentionally misrepresenting an assistance/service animal a criminal petty offense (escalating fines: $25 / $50–200 / $100–500) — but enforcement requires the person have **already received a written or verbal warning** first. Including the warning in the lease itself isn't just informational — it satisfies that legal prerequisite, making it genuinely useful to the landlord (deterrence + enforceability), unlike the deposit-cap "ammunition" pattern.
   ```
   id: assistance-animal-accommodation-co
   group: Pets
   title: Service and Assistance Animals
   states: CO
   bodyText: "A service animal or other assistance animal that Tenant or an Occupant needs as a reasonable accommodation for a disability is not considered a pet under this Lease, regardless of any pet policy, breed, weight, or size restriction stated elsewhere in this Lease. Landlord will not charge a pet deposit, pet rent, or other pet-related fee for an assistance animal. If the disability and the disability-related need for the animal are not readily apparent, Landlord may request reliable documentation confirming the need for the accommodation, but will not require details about the nature or severity of Tenant's disability beyond what is necessary to verify the need for the accommodation, as required by Colorado law. If the disability and need are readily apparent, Landlord will not require such documentation. Tenant remains responsible for any damage to the property caused by an assistance animal. Landlord may deny or withdraw this accommodation if the specific animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property, that cannot be reduced or eliminated by another reasonable accommodation. Tenant is hereby warned, as required for enforcement under Colorado law, that intentionally misrepresenting an animal as a service animal or assistance animal to obtain a right or privilege under this Section is a criminal offense under C.R.S. §§ 18-13-107.3 and 18-13-107.7, punishable by escalating fines."
   rule_type: REQUIRED
   content_type: LEASE_CLAUSE
   ```

**Minor, not actioned:** Taylor's smoking policy specifies a $250 fee for repeat violations — a landlord preference, not a legal requirement, noted for completeness only.

**Third gap-discovery source (Taylor's own lived landlord experience, distinct from the professional-document comparison above) — not yet run as its own dedicated pass.**

**Follow-up, 2026-08-19 — Finding #1 (habitability/retaliation notice) researched and resolved.** Read the remainder of Part 5 in full (§503 substantive warranty, §505 uninhabitable-conditions definition, §507 tenant remedies including a hire-and-deduct-from-rent option, §508 landlord defenses, §509 retaliation, §511 exemptions). **No statutory requirement found** mandating that the lease itself proactively disclose habitability/retaliation rights to the tenant, and no bilingual-notice requirement found for this content specifically — everything in Part 5 governs the *process* once a condition arises (how a tenant reports it, cure timelines), not an up-front lease disclosure. Conclusion: this appears to be Zillow's own risk-management practice, not a legal mandate (consistent with their own lease's disclaimer that they don't guarantee legal currency).

**Decision (Taylor, 2026-08-19): draft as an optional clause rather than adding to LANDLORD_EDUCATION or omitting.** Unlike the deposit-cap "ammunition" pattern, this content plausibly benefits the landlord too — it establishes a clear reporting channel, reducing later "I didn't know how to report it" disputes — so it's a genuine judgment call rather than a clean bucket assignment, resolved by making it available but not mandatory, consistent with how the clause library already lets landlords choose what to attach.

```
id: habitability-notice-co
group: Landlord Responsibilities
title: Notice of Habitability Rights
states: CO
bodyText: "Every tenant is entitled to safe and habitable housing under Colorado's warranty of habitability, as described in this Lease's Maintenance & Repairs Section. Colorado law prohibits Landlord from retaliating against Tenant in any manner for reporting an unsafe or uninhabitable condition, exercising any right under this Lease, or participating in a tenant organization. To report a condition that may affect the habitability of the property, Tenant should contact Landlord at: [insert landlord's designated habitability-notice contact method, e.g. phone, email, or mailing address]."
rule_type: RECOMMENDED
content_type: LEASE_CLAUSE
```

**Deliberately not included: a Spanish translation.** No legal mandate for bilingual notice was confirmed, and generating an ad hoc translation of legal notice text risks introducing inaccuracy into a document where precision matters — a bad translation could plausibly be worse than none. If a bilingual version is wanted later, source it from a verified translation or an official CO agency's own Spanish-language habitability materials, not a generated one. Logged as a separate open follow-up, not resolved here.

**New standing validation rule found while researching this — security deposit rights cannot be waived.** C.R.S. § 38-12-103(7): a tenant cannot waive their rights regarding return of a security deposit, orally or in writing — a lease provision purporting to do so is unenforceable. This is a **third confirmed example** of a Colorado "cannot waive, even in writing" rule, alongside the police-call-right waiver (Part 4) and the immigrant-tenant-protection waiver (Part 12). Added to the standing rule set — checked against the existing security deposit clauses (`security-deposit-use`, `security-deposit-return`, `security-deposit-cap-co`, and related state variants); none currently attempt anything resembling a waiver, so no correction needed, but the rule is now tracked for all future security-deposit-related drafting.

---

### 11. Third gap-discovery source — Taylor's own observation, 2026-08-19

**Purpose:** the third of the three original gap-discovery sources (§6) — real-world landlord experience, distinct from the statute walk and the professional-lease comparison. Taylor doesn't personally know other landlords and hasn't personally hit a dispute beyond the early-termination gap already reflected in the DV/stalking and general early-termination clauses — but flagged a pattern observed secondhand (via landlord-focused YouTube content): tenants running up utility bills the landlord is contractually obligated to pay, with the landlord having no recourse until the lease ends. Taylor already has a dollar-cap provision addressing this in the real-world lease (Finding, confirmed present in the source document reviewed in §10).

**Initial instinct (Taylor) — treat as a custom, one-off clause or LANDLORD_EDUCATION only.** Reconsidered: this is a widely-shared landlord pain point, not an idiosyncratic one, and it intersects directly with content already verified this session (the submetering-disclosure clause, the "Rent" mischaracterization rule, the late-fee-scope fix) — a strong candidate for the actual Provided Clauses library rather than custom/education-only content.

**Researched, 2026-08-19.** Confirmed: Colorado does not restrict how landlord and tenant allocate utility payment responsibility — this is freely negotiable. However, two real constraints apply: (1) any capped/overage charge must be tied to actual documented utility cost, clearly disclosed — an arbitrary or vaguely-calculated charge risks being challenged as unreasonable; (2) current CO guidance on the 2026 pricing-transparency law explicitly warns landlords to apply late fees only to actual rent, not utilities or ancillary services — directly connecting to the already-fixed `late-fee` scope issue and the still-open `pet-policy` "pet rent" question. The clause is drafted to avoid this by making the utility overage an explicitly separate obligation from Rent, not late-fee-eligible, and not a basis for rent-nonpayment remedies — enforceable instead through the general "breach of any other obligation" path already in `default-by-tenant`.

**Drafted and corrected same session — design note on variables vs. bracketed prompts.** First draft used `{{utility_allowance_amount}}` and `{{utility_overage_reimbursement_days}}` as true variables. Corrected after Taylor's question: true variables (`{{like_this}}`) are for structured data every lease already has (rent, tenant names, deposit) — building two new Lease-entity fields to support one narrow, optional clause would be exactly the bespoke-field sprawl the original bracketed-prompt convention (from the initial Lease Builder design) was meant to avoid. Both values converted to bracketed prompts, filled in via the standard per-lease Edit flow instead.

```
id: utility-allowance-cap-co
group: Landlord Responsibilities
title: Utility Allowance with Tenant-Paid Overage
states: CO
bodyText: "Landlord's obligation to pay for [specify utility, e.g. water and sewer] under this Lease's Utilities Paid by Landlord Section is limited to [insert monthly utility allowance amount] per month. If the actual utility cost for a given month exceeds this amount, Tenant will reimburse Landlord for the excess within [insert number of days, e.g. 15] days of receiving a copy of the utility provider's bill showing the actual charges for that month. This reimbursement is a separate obligation from Rent: it is not subject to any late fee applicable to Rent under this Lease, will not be characterized as Rent for purposes of any remedy available for nonpayment of Rent, and Landlord's remedies for Tenant's failure to pay it are limited to those otherwise available under this Lease for breach of an obligation other than Rent."
rule_type: CONSTRAINED
content_type: LEASE_CLAUSE
```

Attaches alongside `utilities-paid-by-landlord` (doesn't supersede it) — that clause lists which utilities are included; this one adds the cap mechanism on top, only for landlords who choose it. Scoped as CO-verified only for now; the underlying cap-plus-overage concept is likely reasonable more broadly, but hasn't been checked against other states.

**Result of running this gap-discovery source:** one real, substantive finding (this clause) plus confirmation that Taylor has no other unresolved personal pain points beyond what's already in the library — a legitimate outcome for this source, not an incomplete pass.

---

### 12. Pet rent / pet deposit caps — C.R.S. § 38-12-106, 2026-08-20

**Origin:** surfaced by Taylor from a Google AI Overview search result, not from any of the three formal gap-discovery sources — but genuinely closes an item flagged and never finished during the original Part 1 statute walk (§38-12-106 was noted as needing a closer look early in this project and was never followed up on).

**Verified against primary/official sources, including Colorado's own Division of Real Estate legislative summary.** C.R.S. § 38-12-106, added by HB 23-1068 (effective January 1, 2024):
- Pet security deposit capped at **$300**, and must be **refundable** — landlords can no longer charge a non-refundable "pet fee," only a refundable deposit
- Pet rent capped at **$35/month or 1.5% of monthly rent, whichever is greater**

**Explicitly not verified and not included — flagging the same overconfidence pattern this project has been designed to catch.** The pasted Google AI Overview result confidently claimed unpaid pet rent is grounds for eviction the same as unpaid base rent. No official or primary source found supports that specific conclusion — the DRE summary and every other source found describe the caps and refundability rule only, not collection/enforcement remedies. Not relied on.

**Partial resolution of the previously-flagged "pet rent" naming ambiguity (§9 audit).** The statute itself uses the phrase "additional rent" for this charge (per the DRE's own summary), suggesting the landlord calling it "pet rent" isn't a unilateral mischaracterization of the kind §801(3)(a)(V) prohibits — the legislature itself uses rent-adjacent language for this charge type. This does not, however, confirm that unpaid pet rent carries the *same collection remedies* as unpaid base rent — that remains a separate, unresolved question. Audit item downgraded from "open" to "partially resolved," not closed.

**Corrected classification, 2026-08-20 — final, correct state after two wrong attempts.** First draft merged the caps directly into a superseding `pet-policy-co`, breaking the established pattern (every other CO cap — `security-deposit-cap-co`, `late-fee-limit-co`, `nsf-fee-limit-co` — is a standalone add-on, not a supersede). Second draft split the caps into two standalone clauses (`pet-deposit-cap-co`, `pet-rent-cap-co`) — correct shape, but Taylor caught that both still stated the *ceiling* to the tenant, repeating the exact §7 sub-rule mistake from the original security deposit cap conversation (statutory ceilings default to LANDLORD_EDUCATION unless the state requires disclosing the limit itself — nothing in §38-12-106 requires that). **Both drafted clauses withdrawn. No new CO-specific pet clause exists.**

**Final resolution:** `pet-policy` (the universal base clause) already states the actual chosen amounts via `{{pet_deposit}}` and `{{pet_rent_amount}}` — that's the correct tenant-facing content, and it requires no change and no CO override. The caps themselves ($300 refundable deposit, $35/1.5%-greater-of rent) become **LANDLORD_EDUCATION**, plus a validation-rule note for whenever input validation is built: don't allow a CO lease's `{{pet_deposit}}` or `{{pet_rent_amount}}` values to exceed these limits at data-entry time. Never stated to the tenant.

**Remaining open sub-question resolved, 2026-08-20 — whether unpaid pet rent carries the same collection remedies as unpaid base rent.** Researched via Colorado's actual eviction mechanics (C.R.S. § 13-40-104, the Demand for Compliance process). Finding: this concern doesn't materialize in practice. Colorado's eviction process does not create two separate remedy tracks for "unpaid rent" versus "lease violation" — both go through the same notice mechanism (Demand for Compliance, JDF 99A), the same general cure-period structure (5 or 10 days depending on landlord size), and the same Eviction Complaint (JDF 101) pathway if uncured. Unpaid pet rent, as a lease obligation, already qualifies as a default under the existing `default-by-tenant` clause ("fails to comply with any other obligation under this Lease") regardless of whether it's formally characterized as "Rent" — so there is no enforcement gap. The real (and only) risk was never a remedies gap; it's the narrower §801(3)(a)(V) compliance question — don't *label* a charge "Rent" specifically to invoke rent-collection remedies. Since pet rent is already treated as a defined, disclosed lease term and enforcement runs through the general default/violation path either way, this fully closes the pet rent/deposit gap — no further action needed.

---

### 13. HB 25-1249, Tenant Security Deposit Protections — wear and tear, installments, walkthrough, 2026-08-20

**Origin:** Taylor's original open item was the unresolved HB 25-1249 wear-and-tear check flagged back during the initial security-deposit-cap correction, early in this project.

**Deposit cap amount — confirmed unchanged, urgent conflict resolved.** A secondary source claimed HB 25-1249 reduced the deposit cap from 2 months back to 1 month, which would have reversed an earlier correction in this log. Verified against the actual amended bill text (leg.colorado.gov): HB 25-1249 only amends §38-12-102 (Definitions) and §38-12-103 (Return of security deposit) — it does not touch §38-12-102.5 (Maximum amount). The claim was a likely error, probably confusing the *return-timeline* change (from "one month" to "thirty days" — a real change) with the cap *amount* (unchanged). The 2-month cap correction already in this log stands as-is.

**4th confirmed "void against public policy" standing rule.** Per the official bill text: a lease provision assigning a tenant a fee or charge for repairs, cleaning, or other work due to normal wear and tear, or for damage/defective conditions that preexisted the tenancy, is void — joining the police-call-waiver, immigration-status, and security-deposit-waiver rules already logged.

**`security-deposit-use` corrected** — the "cleaning costs to return to Start-of-Term condition" language was broader than the new statutory standard (which limits chargeable cleaning to a unit being *substantially* less clean than at move-in) and didn't explicitly exclude preexisting conditions:
```diff
  Tenant shall pay Landlord a security deposit of {{security_deposit}} (Security Deposit)
  prior to occupancy. Landlord may apply the Security Deposit to remedy a Tenant default
- under this Lease, including past due Rent, to repair damage to the property caused by
- Tenant or Tenant's guests beyond ordinary wear and tear, and to pay cleaning costs
- required to return the property to the condition it was in at the start of the Term.
+ under this Lease, including past due Rent, and to repair damage to the property caused
+ by Tenant or Tenant's guests beyond ordinary wear and tear.
+
+ Landlord will not apply the Security Deposit to normal wear and tear or to any damage
+ or defective condition that preexisted the tenancy.
+
+ Landlord may apply the Security Deposit to cleaning costs only if the property is
+ substantially less clean at the end of the Term than it was at the start of the Term.
+
  The Security Deposit will not relieve Tenant of any obligation to pay Rent due under
  this Lease prior to its termination.
```

**New finding — security deposit installment-payment right.** Tenants may elect to pay the deposit in installments over at least 6 months; a landlord who refuses violates a separate statute (the Rental Application Fairness Act, previously marked entirely OUT_OF_SCOPE in Part 9 — this is the one place it actually touches the clause library). A missed installment can be pursued civilly but cannot be used as grounds for termination or eviction. **Approach (Taylor, 2026-08-20):** leave `due-at-signing` completely unchanged; add a new standalone clause used only when a tenant elects installments — same pattern as swapping in `late-fee-co` or any other situational clause, no special software mechanism needed beyond normal per-lease clause selection.
```
id: security-deposit-installments-co
group: Security Deposit
title: Security Deposit Paid in Installments
states: CO
bodyText: "In lieu of paying the Security Deposit in full prior to occupancy, Tenant has elected to pay the Security Deposit in installments of [specify installment amount] due [specify schedule, e.g. on the 1st of each month], over a period of at least six months, as permitted by Colorado law. If Tenant fails to pay an installment when due, Landlord may pursue a civil action to recover the unpaid amount, but Landlord may not terminate this Lease or pursue eviction based solely on a missed installment payment."
rule_type: REQUIRED / CONSTRAINED (mixed)
content_type: LEASE_CLAUSE
```

**Two items caught as missing from the log entirely, 2026-08-20 — discussed in conversation but never actually written down.** Both are from the same HB 25-1249 research pass as the items above:
- **Carpet-specific damage rule:** carpet cannot be deemed "substantially and irreparably damaged" for deposit-deduction purposes unless it has not been replaced with new carpet in the preceding 5 years — and even then, only the minimum amount necessary may be retained. LANDLORD_EDUCATION — governs the landlord's own deduction math at move-out, not something the lease needs to state.
- **Bad-faith presumption threshold:** retaining a security deposit amount that "unreasonably exceeds" actual damages is defined by statute — retaining 125% or more of actual documented damages creates a *presumption* of bad faith (in addition to the other bad-faith triggers: retaining without cause, or for an unlawful/retaliatory/discriminatory purpose). LANDLORD_EDUCATION — same reasoning as the treble-damages call from early in this project: real, consequential law, no lease-facing disclosure benefit.

**Walkthrough-inspection right — confirmed LANDLORD_EDUCATION, 2026-08-20.** Either party may request a walkthrough near lease end (in person or by video) to document damage beyond normal wear and tear before move-out. Same three-bucket logic as the habitability notice — not required to be in the lease, doesn't clearly serve the landlord to state it. Taylor concurred.

**Follow-up question resolved — does a completed walkthrough cap what can later be charged for undocumented damage found afterward?** A conflict surfaced between two secondary sources on this exact point; resolved against the actual statutory definition of "wrongfully withheld" (an exhaustive four-item list: failing to timely provide the written statement/documentation, providing a statement that omits exact reasons, failing to return the undisputed difference within the required window, or retaining in bad faith). **Nothing in that list ties wrongful withholding to walkthrough completeness.** Conclusion: a completed walkthrough does not legally bar a landlord from later charging for genuine, non-preexisting, beyond-wear-and-tear damage discovered afterward, provided the actual return-process requirements are followed. One non-legal caveat noted: missing something during a walkthrough could still work against a landlord evidentially in a dispute, even without a categorical legal bar. Confirmed by Taylor's own real experience — a walkthrough where a tenant kept a ceiling fan running to hide a snapped blade, discovered later and included in an active small claims case — a concrete, real-world example of exactly this scenario.

---

### 14. CSV export, display model correction, and rule_type backfill — 2026-08-20

**CSV exported to Claude CLI.** All findings from this entire log translated into an actual working file (`steinoak_clauses_updated.csv`) — 126 rows: 110 from the original 112 (2 restructured, see below), plus 16 new clauses drafted this session.

**Display model corrected after two wrong attempts, per Taylor's direction (see also §2 above, updated in place).** Final model: `states` is the single source of truth for both display and verification — blank means shows for no state currently, not "shows everywhere." A clause only displays for a state once explicitly verified and tagged for it. Every clause verified during the CO pass — including universal mechanics clauses like `late-fee`, `security-deposit-use`, `keys`, `default-by-tenant` — now carries `states: CO` and displays only for Colorado until each additional state gets its own pass. `is_active` field added specifically to suppress the 51 legacy pre-project state-tagged clauses (NY, GA, TX, CA, etc.) that were never run through real verification, regardless of their existing tag — same treatment CO just received, applied going forward to every other state.

**`default-by-tenant` corrected — caught by Claude CLI review, not this process.** The clause defined default as failing to pay Rent **or** failing to comply with "any other obligation" — and an assessed late fee is technically such an obligation. Combined with the very next sentence (default entitles Landlord to terminate/evict), this technically permitted eviction over an unpaid late fee alone, directly contradicting an already-logged finding (§13/late-fee work: a late fee is distinct from rent and cannot independently support eviction under Colorado law). Fixed with an explicit carve-out:
```diff
  Tenant will be in default under this Lease if Tenant fails to pay Rent when due and
  does not cure the failure within the time period specified by applicable law after
  receiving written notice from Landlord, or fails to comply with any other obligation
  under this Lease and does not cure the failure after receiving written notice.
+ Except as required by applicable law, Tenant's failure to pay an assessed late fee,
+ apart from the underlying Rent itself, will not by itself entitle Landlord to
+ terminate this Lease or pursue eviction.
  If Tenant is in default, Landlord may exercise all rights and remedies available
  under applicable law, including terminating this Lease, regaining possession of
  the property, and recovering unpaid Rent, late fees, and reasonable costs and
  expenses, less amounts obtained from the Security Deposit. Landlord will use
  reasonable efforts to mitigate damages resulting from Tenant's default to the
  extent required by applicable law. To the extent permitted under applicable law,
  the prevailing party may recover from the other party court costs and reasonable
  attorneys' fees and expenses incurred in connection with any legal proceedings
  related to this Lease.
```
Kept hedged ("except as required by applicable law") rather than absolute, consistent with how the rest of the universal clauses are written — safe to keep shared across states even before each one gets its own verification pass, without asserting the exact rule is identical everywhere. Worth noting: this was caught by an external review (Claude CLI), not by this project's own process — a useful reminder that a second reviewer catches things a single process can miss, even a rigorous one.

**`rule_type` backfilled across all 110 originally-missing rows.** Original CSV construction only assigned `rule_type` to newly-drafted or freshly-corrected clauses this session; the rest — including pre-existing CO clauses like `late-fee-limit-co` and `bed-bug-disclosure-co` — were left blank despite being re-verified. Backfilled using the same REQUIRED/CONDITIONAL/PROHIBITED/CONSTRAINED/RECOMMENDED framework used throughout this log.

**Consistency correction, same session.** The initial backfill pass drifted `REQUIRED` from its actual definition ("the law mandates this term exist") toward also covering "functionally necessary for the lease to work" — a different, broader category. Caught by Taylor. 17 rows corrected:
- **14 rows moved REQUIRED → RECOMMENDED** (functionally standard, not legally mandated): `rent-payment`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `utilities-responsibility`, `acceptable-payment-methods`, `tenant-maintenance`, `services-utilities-provided`, `utilities-paid-by-landlord`, `appliances-included`, `landlord-maintenance`, `surrender-end-of-term`, `notices`, `governing-law`
- **`holdover`: CONSTRAINED → RECOMMENDED** — for consistency with `early-termination` (same "or the maximum allowed under applicable law, if less" hedge pattern, previously classified differently between the two)
- **`application-of-payments`: RECOMMENDED → CONSTRAINED** — reflects that payment-application ordering is a live, unresolved legal question for CO (investigated, not confirmed — see the payment-priority research earlier in this log), not settled landlord discretion
- **`security-deposit-use`: REQUIRED → REQUIRED/PROHIBITED** — mixed type, same pattern as `ev-charging-rights-co`; the clause both requires deposit terms exist and prohibits misuse (wear-and-tear, preexisting conditions)

Final distribution across all 126 rows: 48 RECOMMENDED, 45 CONSTRAINED, 21 REQUIRED, 9 CONDITIONAL, 3 mixed-type. Zero rows remain without a `rule_type`.

---

### 15. LANDLORD_EDUCATION registry — consolidated list, built 2026-08-20

**Purpose:** every LANDLORD_EDUCATION item from this entire log, pulled into one place. Previously scattered across 14 sections with no single index — building this consolidated list caught 2 items that were discussed in conversation but never actually written into the log at all (marked below). This section should be maintained going forward as new items are found, rather than left to accumulate unindexed again.

**Structural decision, 2026-08-20 (Taylor's direction):** these are now tracked with the exact same schema as lease clauses — `id`, `group`, `states`, `rule_type`, `content_type: LANDLORD_EDUCATION`, `verification_status` — written into the actual CSV (`steinoak_clauses_updated.csv`) as 24 new rows, not just narrative text in this log. Two benefits: (1) tagged and trackable the same way as everything else, (2) if a statute changes and something here becomes an actual disclosure requirement, promotion is just `content_type: LANDLORD_EDUCATION → LEASE_CLAUSE` plus `is_active` toggling — no rebuild from scratch, no separate system to migrate from. Prose is written for a landlord to actually read, not lease-strict contract language, since these never touch a tenant.

None of these are lease clauses. They're background knowledge, compliance guardrails for future input validation, or product-feature candidates — real, legally consequential, but deliberately excluded from tenant-facing text per the three-bucket test (§7).

**1. `edu-security-deposit-cap-co`** — Security Deposit Maximum (Landlord Reference)
> Colorado law caps the security deposit you can charge at two months' rent (C.R.S. § 38-12-102.5). This is a ceiling on what you're allowed to collect — it's not something your lease needs to tell the tenant, since stating the legal maximum only gives them a number to hold you to. The actual deposit amount you're charging this specific tenant is already captured in your lease through the Security Deposit clause. Use this as a guardrail when entering the deposit amount for a Colorado lease: if you type in more than two months' rent, that number is not enforceable.

**2. `edu-retaliation-co`** — Retaliation Is Prohibited
> Colorado law prohibits taking action against a tenant — raising rent, cutting services, declining to renew, or starting an eviction — because they reported an unsafe condition, exercised a right under the lease, or joined a tenant organization (C.R.S. § 38-12-509). This applies whether or not your lease mentions it, so there's no need to include it in tenant-facing text. What matters practically: if you have an independent, legitimate reason to raise rent or not renew (the lease naturally ending, a real violation, etc.), document that reason — having a clear paper trail is what protects you if a tenant later claims a decision was retaliatory.

**3. `edu-rent-increase-frequency-co`** — Rent Can't Be Raised More Than Once a Year
> No matter what your lease says, you cannot raise a tenant's rent more than once every 12 months in Colorado (C.R.S. § 38-12-702). This applies to month-to-month tenancies as much as fixed terms. Keep this in mind if you ever build a rent-escalation or annual-increase clause — the 12-month floor overrides anything the lease tries to specify.

**4. `edu-for-cause-eviction-co`** — For-Cause Eviction Rules (After 12 Months)
> Once a tenant has lived in a property for 12 months or more, Colorado generally requires you to have a specific legal reason — "cause" (like nonpayment or a lease violation) or a defined "no-fault" reason (such as selling the property or doing major renovations, with 90 days' notice) — before you can end the tenancy or decline to renew (C.R.S. § 38-12-1301 et seq.). This does NOT apply if the property is your own primary residence or directly adjacent to it, a short-term rental, a mobile home lot, or employer-provided housing. Check which of your properties fall into an exempt category — this determines which version of the month-to-month termination clause applies.

**5. `edu-police-call-waiver-co`** — Never Waive a Tenant's Right to Call Police
> Colorado law makes it void for any lease to contain language that waives, discourages, or penalizes a tenant for calling police or emergency services (C.R.S. § 38-12-402). This mainly matters if you're ever tempted to add a "crime-free housing" or repeated-nuisance-call type clause — that pattern is exactly what this law targets, and any such clause would be unenforceable.

**6. `edu-dv-confidentiality-co`** — Confidentiality Duty for a Tenant Who Is a DV/Stalking Victim
> If a tenant qualifies for early termination as a victim of domestic violence, stalking, or sexual assault, you have a legal duty not to disclose their status or new address to anyone without their consent, except where the law specifically requires it (C.R.S. § 38-12-401/402). This obligation exists regardless of whether the lease mentions it.

**7. `edu-immigration-status-co`** — Never Ask About Immigration or Citizenship Status
> Colorado's Immigrant Tenant Protection Act prohibits asking a tenant about their immigration or citizenship status, disclosing or threatening to disclose it, or using it to harass, intimidate, or deny housing (C.R.S. § 38-12-1201 et seq.). Violations carry real penalties — up to $2,000 per violation plus attorney's fees. Any lease provision attempting to waive these protections is void, even if the tenant agrees to it in writing.

**8. `edu-fee-shifting-co`** — Attorney Fee Clauses Must Work Both Ways
> A lease clause that only lets the landlord recover attorney's fees and court costs — but not the tenant, if the tenant wins — is void under Colorado law (C.R.S. § 38-12-801(3)(a)(II)). Any attorney-fee provision needs to say the prevailing party recovers fees, not just the landlord. This was actually found and fixed in the Default by Tenant clause during this review — worth double-checking any custom clause you write yourself for the same issue.

**9. `edu-death-of-tenant-co`** — If a Tenant Dies During the Lease
> Colorado's "Letty's Act" (C.R.S. § 38-12-801(3.5)) prohibits charging liquidated damages, accelerating rent beyond the end of the month (or 10 business days after the unit is vacated, whichever is later), clawing back move-in concessions, or any other early-termination penalty when a lease ends because a tenant died. You can retain enough of the security deposit to cover any damage related to the death, and you can take possession without filing an eviction once the estate's representative surrenders the unit, or automatically 30 days after death if rent is unpaid or the unit has been cleared out.

**10. `edu-identity-change-notice-co`** — Notify Tenants If Your Identity or Agent Changes
> If you (or your authorized agent) change — for example, a property changes management companies, or ownership transfers — Colorado law requires the new landlord or agent to notify each tenant within 1 business day, either in writing/electronically or by posting the new information conspicuously at the property (C.R.S. § 38-12-801(2)). This is an ongoing operational duty, not something that needs to be in the lease itself.

**11. `edu-fee-unprovided-service-co`** — Don't Charge for a Service You Don't Actually Provide
> Colorado's Honest Pricing law prohibits charging a fee for any service you don't actually provide (C.R.S. § 6-1-737). This is a good general check for any fee-based clause you write yourself: make sure the fee corresponds to something real.

**12. `edu-fee-free-payment-method-co`** — Offer at Least One Fee-Free Way to Pay Rent
> You can't charge a rent payment processing fee unless you also offer at least one payment method with no fee attached (C.R.S. § 6-1-737). When you list your accepted payment methods in the lease, make sure at least one of them is genuinely free to the tenant.

**13. `edu-total-price-disclosure-co`** — Advertised Rent Must Show the Full Price
> When you advertise or list a property, Colorado's Honest Pricing law requires showing a single all-in price including mandatory fees, displayed more prominently than any broken-out fee amounts — not itemized separately (C.R.S. § 6-1-737). This applies to marketing and listings, not lease text, and becomes relevant if Steinoak ever adds a listing/marketing feature.

**14. `edu-rubs-uncertainty-co`** — Utility Billing Rules Are Still Being Clarified *(verification_status: NEEDS_REVIEW)*
> If you use a shared or master utility meter and bill tenants a proportional share (RUBS), be aware that Colorado's Attorney General issued guidance in November 2025 acknowledging real uncertainty in how the Honest Pricing law's fee rules apply to this billing method, and said enforcement will be flexible in the meantime. The legislature is expected to pass a clarifying fix in the 2026 session — worth revisiting this note once that happens.

**15. `edu-radon-lease-length-co`** — Radon Disclosure Risk Changes With Lease Length
> The radon disclosure itself is required on every lease regardless of term length. But if you don't make a reasonable effort to fix elevated radon within 180 days of being notified, the consequence is different depending on the lease term: a tenant can void the lease over it if the term is longer than one year, but that specific remedy doesn't apply to a lease of one year or less (effective for leases signed on or after January 1, 2026). If you're offering a tenant a renewal longer than a year, this is a real new exposure to be aware of.

**16. `edu-voucher-acceptance-co`** — You Must Accept Housing Vouchers
> Colorado law requires every residential landlord to accept applicants using a housing voucher — there is no exemption for small landlords anymore (HB25-1240 removed it). Refusing an applicant solely because they use a voucher is source-of-income discrimination and can carry penalties of $5,000 to $50,000 per violation. You can still decline a voucher applicant for legitimate, consistently-applied reasons — credit, income, rental history — just never because of the voucher itself. You also can't refuse to cooperate with the approval process (inspection, paperwork) as a way of avoiding this duty.

**17. `edu-voucher-process-mechanics-co`** — How the Voucher Approval Process Actually Works
> A voucher applicant doesn't move in until the unit is inspected and the Housing Assistance Payment contract is signed — you're not required to let someone occupy the unit before that happens. If a tenant does move in early anyway, standard guidance puts them on the hook for full, unsubsidized rent until the contract is finalized — you're not left holding the shortfall. The multi-year wait some landlords worry about is the tenant's wait to be issued a voucher in the first place; once a voucher holder actually applies to your specific unit, the approval process itself typically takes days to a few weeks, not years.

**18. `edu-deposit-nonwaiver-co`** — Security Deposit Rights Can Never Be Waived
> A tenant cannot waive their rights regarding return of the security deposit, whether orally or in writing — any lease provision attempting this is unenforceable (C.R.S. § 38-12-103(7)). Keep this in mind for any custom security deposit language you write yourself.

**19. `edu-alt-housing-co`** — Alternate Housing May Be Required During Major Repairs *(verification_status: NEEDS_REVIEW)*
> If a condition materially interferes with a tenant's health, life, or safety, you may be required to provide comparable alternate housing or a hotel room within 24 hours, at your own cost, until the condition is fixed. If the displacement runs past 48 hours, you may also need to provide full kitchen access or cover meal costs (part of the 2024 habitability law overhaul, C.R.S. § 38-12-503). This isn't currently reflected in the Repair Timeline clause — worth knowing as a real cost/logistics exposure separate from the repair deadline itself.

**20. `edu-pet-caps-co`** — Pet Deposit and Pet Rent Limits
> Colorado caps what you can charge for a pet: the pet security deposit can't exceed $300 and must be fully refundable — you can no longer charge a non-refundable "pet fee." Pet rent can't exceed $35 per month or 1.5% of the monthly rent, whichever is greater (C.R.S. § 38-12-106, HB 23-1068). The actual amounts you charge a specific tenant are entered in your lease's Pets clause — use these numbers as the ceiling when entering them for a Colorado property.

**21. `edu-carpet-damage-co`** — Carpet Damage Has a Special Rule *(missed from the log entirely until caught 2026-08-20, see §13)*
> You can't deduct from a security deposit for carpet being "substantially and irreparably damaged" unless the carpet hasn't been replaced with new carpet in the past 5 years — and even then, you can only retain the minimum amount actually necessary, not the full replacement cost (HB 25-1249). Keep this in mind at move-out before assuming worn or stained carpet automatically justifies a deduction.

**22. `edu-bad-faith-deposit-co`** — What Counts as "Bad Faith" When Withholding a Deposit *(missed from the log entirely until caught 2026-08-20, see §13)*
> If you retain 125% or more of a tenant's actual documented damages from their security deposit, Colorado law presumes you did so in bad faith (HB 25-1249). Bad-faith withholding also includes retaining a deposit without cause, or for an unlawful, retaliatory, or discriminatory reason. Bad-faith withholding exposes you to treble damages — document your actual costs carefully before making a deduction.

**23. `edu-walkthrough-co`** — Either Party Can Request a Move-Out Walkthrough
> Either you or the tenant can request a walkthrough inspection near the end of the lease (in person or by video) to identify anything beyond normal wear and tear before move-out (HB 25-1249). Doing a walkthrough does not legally lock you out of charging for genuine damage discovered afterward — the law's definition of "wrongfully withheld" doesn't reference walkthrough completeness at all. That said, missing something during a walkthrough could still work against you if a dispute goes to court, since a tenant could argue you'd have caught it if it were real damage.

**24. `edu-wear-tear-void-co`** — Never Charge a Tenant for Normal Wear and Tear or Preexisting Issues
> Any lease provision assigning a tenant a fee or charge for repairs, cleaning, or other work due to normal wear and tear, or for damage/defective conditions that existed before their tenancy began, is void under Colorado law (HB 25-1249). This was actually the reason the Use of Security Deposit clause got corrected during this review — worth keeping in mind for any custom deposit-related language you write yourself.

**24 items total, all now live in `steinoak_clauses_updated.csv` as `content_type: LANDLORD_EDUCATION` rows.** 8 are also standing validation rules (dual-logged as both an enforced check and background knowledge, per the pattern established in §8a). 2 (`edu-rubs-uncertainty-co`, `edu-alt-housing-co`) carry `verification_status: NEEDS_REVIEW` rather than `VERIFIED`, since they're genuinely unsettled or were never independently confirmed on their own.

---

### 17. Re-audit of Colorado under higher research settings — 2026-08-27

**Why:** the entire original CO pass was run on default settings (Sonnet, medium effort, plain web search). That produced a consistent failure pattern — working from search-result snippets rather than reading primary authority end to end — which surfaced repeatedly as confidently-wrong secondary sources (the "HB25-1249 cut the deposit cap to one month" claim, the "walkthrough bars later damage claims" claim, the meth-disclosure statute that actually governs sales, the "unpaid pet rent = eviction grounds" claim) and as material law found only incidentally (voucher acceptance in Title 24, Honest Pricing in Title 6, assistance-animal criminal statutes in Title 18). Re-run under Opus/high/research as an audit, treating the existing log and CSV as a **preliminary research record, not authoritative conclusions**.

**Scope:** Colorado state law only. Municipal deferred by decision (unchanged). Federal deferred by decision, with a deliberate exception: a spot-check of the three federal-derived items already live and CO-tagged in production (lead paint, FHA assistance animals, SCRA) — reasoning that deferring those means sitting on a live error for however long the remaining 49 states take, which is a different risk profile from "we haven't swept federal yet."

**Overall audit status: CONFIRMED WITH MODIFICATIONS.** The original record got the statutory architecture, the major 2023–2025 legislation, and most figures right. Failures clustered narrowly: numeric values copied from secondary sources, and one miscited statute.

#### Material corrections applied to the CSV (v38 → v39)

**1. Carpet damage lookback — 5 years → 10 years.** `edu-carpet-damage-co`
- *Original:* carpet cannot be deemed substantially/irreparably damaged unless not replaced within the preceding **5 years**.
- *New:* the period is **10 years**, and retention is limited to the minimum necessary to replace carpet or repaint **in the damaged area only** (C.R.S. 38-12-104).
- *Reason:* the 5-year figure appears in the reengrossed/rerevised drafts of HB25-1249; the **enrolled** text raised it to 10. Prior research froze on a superseded draft.
- *Authority:* HB25-1249 enrolled text; C.R.S. 38-12-103, -104 as amended, eff. 2026-01-01.
- *Impact:* any deduction logic keyed to 5-year carpet age is wrong in the landlord's favor — it would have told landlords they could charge in year 6–10 when they cannot.

**2. DV/stalking early termination — police report 120 days → 60 days.** `dv-stalking-termination-co`
- *Original:* qualifying documentation includes a police report from the preceding **120 days**.
- *New:* the report must be **written within the prior 60 days**.
- *Reason:* the 120-day figure traced to a victim-advocacy summary, not the statute.
- *Authority:* C.R.S. 38-12-402(2)(a.5).
- *Impact:* this error ran **against the landlord** — the clause promised tenants a broader documentation window than the statute requires, and as tenant-facing lease text a landlord could be held to it.

**3. NSF/returned payment — wrong citation, and no statutory $20 cap exists.** `nsf-fee-limit-co`
- *Original:* "will not exceed $20.00 per occurrence, as required by Colorado law," citing C.R.S. 13-40-107(4) (with 13-21-109(1)(b) noted as an unresolved alternative).
- *New:* clause rewritten to a reasonable returned-payment charge consistent with **C.R.S. 13-21-109** (dishonored instruments), plus actual bank charges, expressly marked non-Rent.
- *Reason:* 13-40-107 is the **notice-to-quit statute** and has nothing to do with returned checks. No Colorado statute sets a flat $20 landlord NSF cap; $20 is a widely repeated industry figure. The original entry's own flagged "citation ambiguity" was the tell and should have been chased rather than shipped.
- *Impact:* the clause asserted a legal requirement that does not exist, in tenant-facing text.

**4. RUBS utility billing — uncertainty resolved by statute.** `edu-rubs-uncertainty-co`
- *Original:* flagged NEEDS_REVIEW; described the AG's Nov 2025 flexible-enforcement guidance and an expected 2026 legislative fix.
- *New:* the fix passed. **HB26-1013** codifies a RUBS safe harbor at C.R.S. 6-1-737(4.5): aggregate billed may not exceed the provider's total charge for the premises; no markup beyond the 38-12-801(3)(a)(VI) allowance; common-area costs excluded; allocation method clearly disclosed in the lease or addendum. Status NEEDS_REVIEW → VERIFIED.
- *Impact:* RUBS is now affirmatively permitted on stated conditions rather than a gray area. A disclosure addendum should recite the allocation method.

#### Material omissions found and added

**5. `source-of-income-statement-co` (NEW, LEASE_CLAUSE, CONDITIONAL).** C.R.S. 38-12-801(2.5) requires a source-of-income non-discrimination statement **in the written rental agreement**. The original pass identified this section but never produced a clause for it. Exempt: landlords with ≤5 single-family rental homes and ≤5 total units.

**6. `edu-source-of-income-exemption-trap-co` (NEW, LANDLORD_EDUCATION).** The original pass confirmed the 801(2.5) small-landlord exemption "still stands" and treated that as closing the question. It does stand — but HB25-1240 removed the small-landlord exemption from the **acceptance mandate** in C.R.S. 24-34-502 (eff. 2025-05-29). Net: a small landlord can be exempt from *printing the statement* while fully bound to *accept vouchers*. Two provisions, two different exemptions; the original record blurred them.

**7. `rent-increase-notice-co` (NEW, LEASE_CLAUSE, CONSTRAINED).** Closes a genuine statutory gap. §14 of this log resolved that 38-12-701(2)'s 60-day notice applies only where there is **no written agreement** — correct, but the original pass stopped there. The consequence it missed: a *written* month-to-month lease silent on rent-increase notice has **no statutory default at all**. Stating a period in the lease removes the ambiguity. (The 38-12-702 once-per-12-months cap applies regardless and is restated because it constrains the landlord's own term.)

**8. `edu-rental-application-fairness-co` (NEW, LANDLORD_EDUCATION).** Article 12 Part 9 was marked OUT_OF_SCOPE in the original Part map as "pre-lease only." That was half right: it is pre-lease, but it constrains landlord conduct materially (application fee must equal actual cost and be uniform; portable tenant screening reports; 7-year lookback on rental/credit history, 5-year on criminal history with enumerated exceptions). Added as education, not lease text.

#### Federal spot-check (the three live CO-tagged items)

**9. Assistance animals — currency flag, no text change.** HUD **withdrew FHEO-2020-01** effective **2025-09-17** (Fed. Reg. Docket FR-6571-N-01), stating it "should not be relied upon." Both `assistance-animal-accommodation` and `assistance-animal-accommodation-co` were moved to **NEEDS_REVIEW**. The clause bodies never cited FHEO-2020-01 — they rest on the Fair Housing Act itself (42 U.S.C. 3601 et seq.; 24 CFR 100.204), which is unchanged, so the operative language stands. Flagged rather than rewritten because the federal posture is genuinely in flux (including post-*Loper Bright* litigation over the ESA no-fee rule). The Colorado layer (documentation limits; misrepresentation warning, which the audit **re-confirmed** requires a prior written or verbal warning as a statutory element under C.R.S. 18-13-107.3(1)(b)) is unaffected.

**10. Lead paint and SCRA — confirmed applicable, not yet fully reconciled to clause text.** The federal lead-paint regime (42 U.S.C. 4852d; 40 CFR 745 subpart F) requires the EPA pamphlet, disclosure of known hazards/records, the statutory **Lead Warning Statement** (40 CFR 745.113(b)(1)), a signed acknowledgment attachment, and 3-year record retention; penalty exposure is inflation-adjusted to **$22,263 per violation** (24 CFR 30.65(b)) plus treble damages and fees. Note the 10-day inspection opportunity is a **sale/purchaser** requirement, not a lease requirement. SCRA (50 U.S.C. 3955) confirmed: termination effective 30 days after the next rent due date following delivery of notice + orders. Whether the existing `lead-based-paint` clause carries the exact statutory Lead Warning Statement text was **not** verified — see open items.

#### Confirmed correct — no change (explicitly preserved)

Two-month security deposit cap (38-12-102.5) — the "HB25-1249 cut it to one month" claim is **wrong**; that language was introduced but struck before enactment, and the act never amended 102.5. Late fee rules (38-12-105) in full, including that a late fee is not rent and cannot alone support eviction. **No Colorado payment-application ordering rule exists** — the original pass's refusal to assert one was correct, and the source suggesting otherwise was describing another state. No general statewide entry-notice statute (only the 48-hour bed-bug notice, 38-12-1004) — the original correction was right. Meth disclosure (38-35.7-103) is a **seller-to-buyer** duty, not a landlord duty. Utility admin fee is "2% **or** $10 flat, **not both**" — the original correction was right. Letty's Act, EV charging, Immigrant Tenant Protection Act, radon (including the ≤1-year lease carve-out on the *void remedy* only), pet caps, rent-increase frequency, prohibited-clause list and its 801(4)/(8) exemptions — all confirmed against primary text.

#### Still open — attorney verification required

- **SB24-094 relocation mechanics.** The framework is confirmed (24hr/72hr commencement; 7/14-day rebuttable presumptions). The specifics in `edu-alt-housing-co` are **not** confirmed against primary text, and a secondary source describing "a comparable dwelling unit or hotel room for up to 60 days" conflicts with how the entry is currently worded. Remains NEEDS_REVIEW. Needs a line-by-line read of 38-12-503(4)–(6).
- **Walkthrough effect on later-discovered damage.** §13 concluded a completed walkthrough does not bar later charges, reasoning from the exhaustive "wrongfully withheld" definition. The audit confirms the walkthrough right exists but could **not** confirm the no-limitation conclusion from the statutory text. The §13 reasoning is sound but is inference, not verified text.
- **Pet rent and eviction.** Genuine tension between 38-12-106 (capping "pet rent") and 38-12-801(3)(a)(V) (only "the set monthly payment for occupancy" is Rent for rent remedies). Better reading: unpaid pet rent supports a general lease-violation action, not a nonpayment-of-rent eviction. Not settled by case law.
- **Colorado appellate case law post-2023 was not exhaustively searched.** Nothing construing HB24-1098, SB24-094, HB23-1095, or HB25-1249 was located — expected given recency, but this is a research gap, not a finding of "no case law."

#### Process lesson

The two hard numeric errors (carpet, DV window) share a root cause the original methodology already had a rule for and didn't apply: *confident, specific secondary-source claims need the same primary-source verification as absence claims.* Both errors came from summaries, and both survived because the number "looked right." The NSF error is worse — the original entry **explicitly flagged** an unresolved citation ambiguity and shipped anyway. Flagged-but-shipped is the failure mode to watch; a flag should block VERIFIED status, not accompany it.

---

### 18. C.R.S. 38-12-503 primary-text read — Part 5 habitability — 2026-08-27

**How this happened:** the re-audit (§17) left `edu-alt-housing-co` at NEEDS_REVIEW for the second time, because search kept returning conflicting secondary summaries. Taylor supplied the full statutory text of C.R.S. 38-12-503 directly. That resolved it immediately and turned up substantially more than the one open question — including a drafting trap in a clause already shipped. **Process note: Taylor supplying primary text directly has now outperformed continued searching twice. Ask earlier.**

#### Corrections to shipped clauses

**1. `edu-alt-housing-co` — RESOLVED, and it was materially wrong.**
- *Original:* relocation owed "within 24 hours," with vague "full kitchen access or cover meal costs."
- *New:* the duty is **request-triggered** — 38-12-503(4)(a)(II) requires the unit or hotel room "at the request of the tenant and within twenty-four hours after the tenant's request." No request, no duty; and the 24 hours runs from the request, not from notice of the condition. The >48-hour rule is an either/or: fridge-with-freezer **and** range/oven, **or** a per-diem for each tenant at the Colorado state employee intrastate rate, paid every 24 hours.
- *Omitted entirely before:* bed count; habitability/accessibility; the 5-mile radius (10 if substantially cheaper, else nearest available); that the landlord pays only per diem plus reasonable relocation costs; that **the tenant still owes rent** throughout; and the whole 60-day hotel cap with its escape hatch (written notice + full deposit returned on or before that notice + tenant may terminate penalty-free).
- The "up to 60 days" figure a secondary source raised during §17 is real but attaches **only to hotel rooms** under (4)(c) — not to comparable dwelling units. The §17 flag that it conflicted with our entry was right to raise.

**2. `habitability-timeline-co` — the 60-day sentence was invented.** The clause promised written notice of the expected timeline for repairs exceeding 60 consecutive days. No such duty exists in 38-12-503; the statute's 60-day figure is the hotel cap in (4)(c), misattributed. Replaced with duties that actually exist: 24-hour contact stating intentions and estimated start/finish (6)(a)(I); the duty to affirmatively **inform the tenant of the relocation obligation** (6)(a)(II); and 24-hour advance written entry notice for remedial action (6)(a)(III). The 72-hour trigger was also retracked to the statute's language ("uninhabitable as described in 38-12-505 or otherwise") rather than our looser "any other condition Landlord is responsible to repair."

**3. `habitability-notice-co` — drafting trap in shipped tenant-facing text.** 38-12-503(3)(f)(II): a lease or property rule stating a tenant **may or must** give notice of an uninhabitable condition verbally **waives the landlord's right to written notice**. Our bracket prompt read "e.g. phone, email, or mailing address" — designating a phone number would have surrendered that right. This matters because written notice is a strict element: *Anderson v. Shorter Arms Inv'rs, LLC*, 2023 COA 71, 537 P.3d 831 holds substantial compliance does not apply and oral notice is insufficient as a matter of law. Bracket rewritten to written-only with an explicit warning.

**4. `lead-based-paint` — paraphrase where the regulation demands verbatim (federal spot-check).** 40 CFR 745.113(b)(1) requires the Lead Warning Statement to appear **verbatim**; ours paraphrased it. Replaced with exact regulatory text and the other required elements of 745.113(b): landlord disclosure or statement of no knowledge, records/reports list or statement of none, tenant acknowledgment, and the accuracy certification. **Cross-state impact:** this clause is tagged CO;WY;KS;NE;MN — the fix is federal and uniform so all five benefit, but each of those states' logs should record that this clause changed.

**5. `landlords-access-co` — refinement, not correction.** The §17 conclusion that Colorado has no *general* statewide entry-notice statute stands. But 38-12-503(6)(a)(III) does require 24 hours' advance **written** notice for entry to commence or maintain habitability remedial action (except imminent threat to life/health/safety or active threat of substantial property damage). So the 24-hour figure is statutorily grounded for repair entry while remaining landlord policy for showings and general entry.

#### Additions

**6. `environmental-event-termination-co` (NEW, LEASE_CLAUSE) — an opt-in right we were forfeiting.** 38-12-503(11) grants the landlord a right to terminate after a sudden environmental public health event or government action rendering occupancy impossible or unlawful — but **only "if permitted by the rental agreement."** A silent lease forfeits it entirely. This inverts the usual Part 5 pattern, where provisions bind the landlord regardless of lease text; here, omission costs the landlord a statutory right. Clause states all conditions in (11)(a)-(f) so it cannot be invoked improperly.

**7. `edu-part5-nonwaivable-co` (NEW) — 5th standing "void against public policy" rule, and the broadest.** 38-12-503(10) voids any agreement waiving or modifying **any** right, remedy, obligation, or prohibition in Part 5 — an entire Part, not a single right. Joins the police-call waiver (38-12-402), immigrant-tenant protections (38-12-1201 et seq.), security-deposit rights (38-12-103(7)), and the wear-and-tear fee rule (HB25-1249).

**8. `edu-habitability-operational-duties-co` (NEW) — MATERIAL OMISSION.** The original pass took only the 24/72-hour commencement windows from Part 5 and none of the surrounding duties, several of which are **independent breach triggers** under (2)(b): the 24-hour contact-and-estimate duty and the affirmative duty to tell the tenant about relocation rights (6)(a); records kept for the tenancy plus 3 years and produced within 10 calendar days of request (5); the 72-hour mold containment/HEPA/water-stop sequence and full remediation protocol (12)(b); and the requirement to hire a professional for gas hazards (14). Also captures the rebuttable presumptions at 7 days (life/health/safety) and 14 days (uninhabitable) under (3)(a)(II).

**9. `edu-tenant-insurance-claims-co` (NEW).** 38-12-503(13): a landlord may not require a tenant to claim on their renter's insurance for landlord-responsible remedial costs, and may not file against the tenant's policy without express written permission given at the time of the claim. Checked `tenants-property-insurance` — it requires coverage and proof only, so no clause change needed; logged as a constraint on conduct and on future custom language.

**10. `edu-written-notice-strictly-required-co` (NEW).** Captures the *Anderson* holdings (strict compliance; oral notice insufficient; mold/dampness notice must include permission to enter) plus the breadth of what counts as written notice under (3)(e) — government entities, third parties, other tenants, maintenance correspondence, and the landlord's own written observations all qualify. **First Colorado appellate authority captured in this project**, partially filling the case-law gap §17 flagged.

#### Status

Part 5 is now read against primary text rather than summaries. `edu-alt-housing-co` moves NEEDS_REVIEW → VERIFIED. The only remaining NEEDS_REVIEW rows in the library are the two assistance-animal clauses, held open deliberately while the federal posture moves (§17.9).

---

### 19. ESA federal/state divergence — the last CO open item — 2026-08-27

**Trigger:** §17 flagged both assistance-animal clauses NEEDS_REVIEW after HUD's 2025-09-17 withdrawal of FHEO-2020-01. On follow-up the picture turned out to be more developed than the audit captured, and the remaining question — whether the CO clause was leaning on federal law for the ESA piece — needed a real answer before CO could close.

**Federal has moved twice, not once.** Beyond the 2025-09-17 withdrawal of FHEO-2020-01 and FHEO-2013-01, HUD's FHEO issued a memorandum on **2026-05-22** permanently rescinding the 2020 notice and adopting a new enforcement standard: it will find reasonable cause and recommend charges only for animals **individually trained** to provide disability-related assistance — the ADA service-animal standard — and will no longer expect housing providers to categorically grant accommodations or fee waivers for untrained assistance animals (ESAs). HUD has stated it intends notice-and-comment rulemaking to harmonize its regulations.

**Decision: no clause text changes.** The reasoning, recorded so it isn't relitigated:
1. This is an **enforcement posture, not a change in law.** 42 U.S.C. 3601 et seq. and 24 CFR 100.204 are unchanged. HUD declining to charge does not bind courts, private FHA plaintiffs, or DOJ.
2. **Colorado has an independent basis.** C.R.S. 24-34-502 (CADA) makes it a discriminatory housing practice to refuse a reasonable accommodation necessary for a person with a disability to use and enjoy a dwelling, and that covers assistance animals including ESAs. HB 21-1271 supplies the documentation limits and misrepresentation penalties already captured in the clause. None of it depends on HUD guidance.
3. **The risk is asymmetric.** Narrowing the clause trades an uncollectable pet fee against a discrimination claim.

**Status split applied:**
- `assistance-animal-accommodation-co` → **VERIFIED.** Independent CADA basis confirmed; federal movement does not disturb it.
- `assistance-animal-accommodation` (generic, federal-baseline only) → **remains NEEDS_REVIEW, deliberately.** Not because the text is wrong, but because any *future* state adopting it without its own ESA protection inherits an unsettled federal picture. Each new state must confirm its own basis the way CO just did. This is now the only NEEDS_REVIEW row in the library.
- `edu-esa-federal-state-divergence-co` — **NEW.** Added because the federal change is high-profile and a landlord reading headlines could reasonably conclude ESA obligations had ended. They have not, in Colorado.

**Source-quality note, worth carrying into other states.** Most available commentary on this question comes from **ESA-certification vendors** — companies that sell ESA letters and have a direct commercial interest in maximally broad ESA protection. That is precisely the confident-but-interested secondary source this project has repeatedly been burned by (Hemlane, LeaseWisely, the "deposit cap cut to one month" claim). It was discounted; reliance is on the CADA statutory structure plus Colorado practitioner commentary. One source cited **C.R.S. 24-34-803** as a housing-specific assistance-animal provision — **not confirmed, not relied on**, flagged for the next CO review.

**Cross-state implication for the Wyoming pass and beyond:** the ESA question is now a required per-state check, not a settled federal given. For each new state, determine whether that state has its own disability-accommodation statute reaching assistance animals, or whether the clause would rest on the federal baseline alone. If the latter, tag it NEEDS_REVIEW rather than VERIFIED.

---

### 20. Explicitly out of scope for this workstream

The Legal Tracker feature (evictions, service/summons, court process, notice-to-quit workflows) is a separate, future feature. It is being tracked in notes only because it touches the clause library conceptually (e.g. for-cause eviction policy affects lease termination language) — it is not being designed or built as part of this effort.
---

## §5a.1 PROPAGATION NOTE — incoming from the Nebraska re-audit, 2026-08-31 (v62 → v63)

Two shared clauses tagged to CO were touched by the Nebraska re-audit.

### 1. `services-utilities-provided` (CO;WY;NE) — bodyText REWORDED, judged UNIFORM

**Old:** "Tenant waives all liability of Landlord for any interruption or insufficiency of a service or utility resulting from causes beyond Landlord's reasonable control."
**New:** "Landlord is not liable for any interruption or insufficiency of a service or utility resulting from causes beyond Landlord's reasonable control."

**Why.** Neb. §76-1415(1)(d) bars exculpation or limitation of landlord liability "arising due to **active and actionable negligence**." Because the clause is already self-limited to causes beyond the landlord's reasonable control — which by definition is not the landlord's active negligence — the original Nebraska reasoning on (d) was **correct**, and no negligence carve-out was needed. The real exposure was **§76-1415(1)(a)**, which bars the tenant agreeing to "waive or forego rights or remedies under the Act": the clause opened with a tenant-side *waiver*, which invites that argument for free. Recast as an allocation. **Substance unchanged in every state.**

**Beneficial for Colorado, not merely neutral.** C.R.S. §38-12-801(3) voids waivers of the covenant of quiet enjoyment and of good faith and fair dealing. A sentence framed as `Tenant waives all liability of Landlord` sits closer to that prohibited family than an allocation does, even though the clause's practical scope is limited by its own `beyond Landlord's reasonable control` qualifier. The reword reduces Colorado exposure at no cost.

**§5a.1 judgment: UNIFORM, not state-driven.** No state is disadvantaged and no state needs an override. A Nebraska-only override was deliberately **not** created, because the improvement is not Nebraska-specific.

### 2. `late-fee` (was CO;WY;NE;MN) — NE REMOVED, no text change

Nebraska took its own `late-fee-ne`. Neb. §76-1433 waives the landlord's right to terminate for a breach on accepting rent with knowledge of it, "unless otherwise agreed **after the breach has occurred**" — an express timing rule the shared clause's unqualified "or to pursue any other remedy available under this Lease" collides with.

**§5a.1 judgment: STATE-DRIVEN. Deliberately NOT propagated to CO.** A non-waiver clause preserving termination is genuinely valuable where contract can preserve it, and CO has not been shown to carry Nebraska's express timing rule. Narrowing every tagged state to solve one state's problem would surrender real protection in the others. **CO keeps the clause unchanged.**

**Worth checking when CO is next revisited:** whether CO's own late-rent waiver rule is statutory or common-law, and whether it reaches *termination only* (as Nebraska's does) or other remedies too. Nebraska's narrowness was the surprise of that analysis — the prior conclusion had been wrong in both directions, overstating what the landlord loses and understating the clause's exposure.


---

## §5a.1 PROPAGATION NOTE — Shared-clause pass, 2026-09-03 (v93 → v94)

Three shared multi-state clauses were edited. Per §5a.1, this note is recorded in **every tagged state's log**, with the uniform-vs-state-driven judgment for each.

### 1. `notices` — EDIT — judgment: **UNIFORM**

Added a saving clause: where applicable law requires a particular method, form, timing, or content for a notice, that requirement controls over the clause, and the lease does not designate an alternative delivery method for any notice governed by law.

**Uniform**, therefore safe to inherit with no per-state override. Every tagged state specifies notice delivery per-statute, so deferring is correct in all of them.

**Trigger:** the Minnesota re-audit found MN specifies delivery section by section with conflicting requirements — the 14-day pre-eviction notice is personal or first class mail **only** and failure means dismissal plus expungement; abandoned-property sale needs personal service **or** first class **and** certified mail **plus** posting; post-writ notice needs mail **plus** a telephone attempt. The prior text named only *where* notices go and was silent on *how*.

**Correction to the original flag:** the concern as first raised (that the clause designated email or a portal) was overstated — the clause never designated anything. It was silent, not wrong. The edit closes a silence rather than fixing an assertion.

### 2. `returned-payments` — EDIT — judgment: **UNIFORM**

"may charge Tenant **any** fee associated with the failed payment" → "may charge Tenant **a** fee ... **not to exceed the maximum amount permitted by applicable law**."

**Uniform**, safe to inherit, no per-state override. The self-limiting formulation is correct in every tagged state regardless of each state's figure.

**Trigger:** all six tagged states have a cap and already carry a row recording it — CO `nsf-fee-limit-co`, WY `edu-returned-check-fee-cap-wy`, KS `edu-nsf-fee-cap-ks`, NE `edu-bad-check-restitution-vs-nsf-fee-ne`, ND `edu-returned-check-fee-cap-nd`, MN `edu-returned-check-fee-cap-mn` ($30, Minn. Stat. §604.113). The unbounded word "any" was therefore wrong in **all six states simultaneously** — the clause promised landlords something no tagged state permits.

### 3. `holdover` — EDIT — judgment: **STATE-DRIVEN figure, uniform-safe edit**

Removed the hardcoded "double the Monthly Rent ... or the maximum amount allowed under applicable law, if less" and replaced it with a pure deferral to the statutory maximum.

The figure is genuinely state-driven, but no per-state override is needed because each state's figure is already carried by its own education row.

**The old text was wrong in BOTH directions, which is why leaving it was not an option:**

- **Over-promised in MN.** Minnesota has **no holdover multiplier at all**. "Double the Monthly Rent" described a remedy that does not exist. The self-limiting tail kept it lawful but misleading.
- **Under-claimed in NE.** Nebraska allows **three months' periodic rent or threefold actual damages, whichever is greater, plus statutory attorney fees** (§76-1437(3)) — all of which **exceed** double monthly rent. The old "or the maximum allowed ... if less" language could only cap **downward**, so a Nebraska landlord relying on the clause would recover materially less than the statute allows.

**The general lesson worth carrying:** a ceiling-only formulation silently forfeits recovery in any state whose statutory figure is *higher* than the hardcoded one. Self-limiting language protects against unlawfulness but not against under-claiming.

KS is unaffected either way — its 1.5× cap (K.S.A. 58-2570(c)) already sits below double.

**GAP SURFACED, NOT CLOSED:** **CO and WY have no holdover-damages education row**, and their statutory figures have never been verified in this project. The "double" figure appears to have originated as Colorado's, but that has not been confirmed against C.R.S. Recommend verifying both and adding `edu-holdover-co` / `edu-holdover-wy` to match KS, NE, and MN.

**Relevance to Colorado:** all three clauses are CO-tagged. `holdover` matters most here — the removed "double" figure is believed to be Colorado's own, but it has never been verified against C.R.S. in this project, and CO has no holdover education row. **Colorado is now the only state where the removed number may have been correct and we cannot confirm it.**

**CSV: v93 → v94 (484 rows, unchanged count — body text and notes only).** No new rows; no display collisions introduced.


---

## HOLDOVER FIGURE — PROVENANCE FINDING, 2026-09-03 (v96 → v97)

Follow-up to the shared-clause pass, which removed "double the Monthly Rent" from the generic `holdover` clause and flagged that CO's and WY's figures had never been verified.

**Both are now checked. The result: the "double" figure had no statutory basis in ANY of the five tagged states.**

| State | Actual rule | vs. "double" |
|---|---|---|
| **CO** | No multiplier. C.R.S. §13-40-123 — damages, costs, and attorney fees (residential only if the lease provides). Damages measured as **reasonable rental value** (*Behr v. Burge*, 940 P.2d 1084 (Colo. App. 1996)) | Too high |
| **WY** | No multiplier. Actual damages plus 10% annual interest (§1-21-1211(b), **provisional — see caveat**) | Too high |
| **KS** | 1.5× cap (K.S.A. 58-2570(c)) | Too high |
| **NE** | Three months' periodic rent or threefold actual damages, whichever greater, **plus attorney fees** (§76-1437(3)) | Too **low** |
| **MN** | No multiplier at all | Baseless |

**Wrong in every direction at once** — too high in three states, too low in one, and baseless in the two where it was assumed to have originated.

**The shared-clause pass hypothesized the figure "appears to have originated as Colorado's." That hypothesis is disproved.** Colorado has no multiplier. The number appears to be generic template boilerplate that entered the library before any state-specific research and was never questioned — and it survived four state re-audits.

**Why this one is worth recording as a pattern, not just a fix:** nothing in the library ever asserted a source for "double." Each state's own research quietly contradicted it — KS logged a 1.5× cap, NE logged a higher ceiling, MN logged none — and no pass ever compared the state findings back against the shared clause they were supposed to be qualifying. The self-limiting tail ("or the maximum allowed under applicable law, if less") made the clause lawful everywhere, which is exactly what stopped anyone from looking.

**Also corrected:** `edu-holdover-ne` described double monthly rent as "Colorado's double-rent figure." That attribution was wrong and is now flagged in the row.

New rows: `edu-holdover-co`, `edu-holdover-wy`.

### Confidence caveats, stated plainly

- **CO** — statute text and case annotation both from the Justia codification rather than the Colorado Revisor directly. Sound, but a single source family, and the "no multiplier" conclusion is an **absence finding across Article 40** rather than an express statutory statement. Confirm on the next CO pass.
- **WY — lower confidence, flagged.** The §1-21-1211(b) actual-damages-plus-10%-interest figure comes from **one secondary source last updated in 2022** and was not confirmed against the Wyoming statute. The surrounding negative rests on absence across secondary overviews, not a primary read of Article 10. **This project has already recorded Wyoming secondary sources as unreliable specifically** (the WY log flags Hemlane and LeaseWisely). Primary-verify §1-21-1211 before relying on this row; treat the 10% figure as provisional.

### [RESOLVED 2026-09-03 — see the resolution section appended below. Original flag retained for traceability.] PRIOR FLAG — post-writ tenant property, and a fabricated citation

The eviction-duty screen (2026-09-03) flagged **C.R.S. § 38-12-126** as reportedly governing a landlord's handling of tenant personal property after a writ is executed, and deliberately did **not** write a row because the claim was sourced only to a commercial junk-removal site and a case-annotation PDF.

**That caution was warranted: there is no active statutory section numbered § 38-12-126.** Article 12 of Title 38 governs residential landlords and tenants — security deposits, application fees, the warranty of habitability — but the cited section does not exist. **This is a fabricated citation, the same class of error this project has recorded for Wyoming (Hemlane, LeaseWisely) and Nebraska (the misattributed $15 payday-loan fee).** It is logged here so the number is not resurrected by a future search returning the same source.

**The real open question for the CO re-audit is different and broader:** does Colorado impose **any** statutory duty on a landlord handling a tenant's possessions after an eviction — storage period, inventory, care standard, or notice before disposal?

The comparison across the screened states makes this worth answering rather than assuming:

- **MN** — highly prescriptive. Two tracks keyed to storage location: on-premises property goes to §504B.271's 28-day hold with 14-day sale notice and conspicuous posting, off-premises property goes to a lien with a 60-day public sale. Plus a mandatory signed inventory prepared in the officer's presence, dual-channel notice before the officer acts, and a care standard with liability for loss.
- **WY** — nothing. §1-21-1211(a) lets the sheriff remove possessions and bar reentry "without further action by the court," with no storage, inventory, care, or notice duty anywhere in Article 12 (primary-verified 2026-09-03).
- **CO** — unknown.

Colorado may legitimately look like Wyoming here. But it is state #1, it has already been re-audited once, and the eviction-duty screen established that this whole area was under-covered library-wide because a scope decision made in the first Colorado session propagated silently through six states and four re-audits.

### RESOLVED 2026-09-03 — Colorado's post-writ regime, and the correct citation

Resolved immediately rather than deferred, because Colorado's re-audit has already run and the flag had no future session to land in.

**The citation was fabricated. The real provision is C.R.S. § 13-40-122**, in Title 13 Article 40 (Forcible Entry and Detainer) — not the "§ 38-12-126" a commercial junk-removal site supplied, which does not exist. Same error class as WY's Hemlane/LeaseWisely incidents and NE's misattributed $15 payday-loan fee. Declining to ship a row on that source was correct.

**Colorado is the polar opposite of Minnesota.** § 13-40-122(3) expressly negates every duty Minnesota imposes: no duty to store or maintain, no duty to inventory, no duty to determine ownership or condition, no express or implied bailment, and statutory immunity from liability for loss or damage. A landlord who follows the executing officer's lawful directions is immune from civil **and** criminal liability. Subsection (4) permits charging reasonable storage costs if the landlord elects to store, recoverable through title 38 lien rights or by requiring payment before the tenant reclaims. If not stored, the property must remain available for reclaim from the public right-of-way.

**Three screened states, three genuinely different architectures** — which is itself the answer to whether this area deserved a screen:

| State | Post-writ property regime |
|---|---|
| **MN** | Highly prescriptive — signed inventory in the officer's presence, dual-channel notice, care standard with liability, two disposal tracks (28-day vs 60-day) keyed to storage location |
| **CO** | Duties expressly negated, plus statutory immunity; storage optional and chargeable |
| **WY** | Silence — sheriff removes, no duties stated anywhere in Article 12 |

**But Colorado does impose one affirmative duty, and the screen nearly missed it.** § 13-40-122 requires the landlord to give animal control access to remove or secure **pet animals**, supply the tenant's contact information, post visible notice at the premises naming the organization the animals were taken to, and provide that information to the tenant on request. No pet animal may be removed and left unattended on public or private property.

**This is the strongest single vindication of the eviction-duty screen.** Colorado's regime reads at first glance as pure landlord immunity. A screen that stopped at "CO imposes no post-writ duties" — the natural conclusion from subsection (3) alone — would have recorded the exact opposite of the truth for the one category where being wrong produces an animal-cruelty referral rather than a damages claim.

New rows: `edu-post-writ-possessions-co`, `edu-writ-pet-animal-duties-co`.

**Timing rules recorded** (they bind the officer but govern a landlord's turnover schedule): writs execute in daylight only, no earlier than **10 days** after judgment, extended to **30 days** where the tenant receives SSI or Social Security disability benefits.

**Not fully characterized, flagged:** the enclosing subsection number for the pet-animal provisions was not isolated (FindLaw renders those paragraphs without the subsection label), and the definition of "pet animal" — likely cross-referenced to another title — was not read. Confirm both before operational reliance.

**CSV: v99 (487) → v100 (489). CO 108 → 110.**


---

## § 5a.1 PROPAGATION NOTE — received from the ND re-audit session, 2026-09-06

**Shared clause edited: `lead-based-paint`.** Its `states` field changed from `CO;WY;KS;NE;MN` to `CO;WY;KS;NE;MN;ND;SD`. **The clause TEXT did not change.** No re-review is owed on this state's existing tag and this state's `last_checked` is unaffected.

**Why the edit happened.** A checklist-to-CSV reconciliation screen — built and first run during the ND re-audit — found that this `REQUIRED` / `LEASE_CLAUSE` row was never tagged ND or SD, even though the consolidated named-topic checklist recorded lead-paint disclosure as "Present (federal)" for ND. Because the `states` field is the display source of truth, a Steinoak-generated ND or SD lease for pre-1978 target housing was **omitting the federally mandated Lead Warning Statement entirely**. Exposure per this row's own record: 42 U.S.C. § 4852d(b)(5), inflation-adjusted to **$22,263 per violation** (24 CFR 30.65(b)), plus treble damages and fees.

**§ 5a.1 judgment: UNIFORM, safe to inherit.** The requirement is federal (40 CFR 745.113(b)) with no state-specific variation — the same judgment already recorded for the KS propagation when the Lead Warning Statement was corrected to verbatim text.

**The transferable lesson, not the tag change, is the reason this note is here.** The checklist asserted coverage the library did not have. That assertion was true about the *law* and false about the *library*, and nothing in the process compared the two. Two new standing screens were earned from it:

1. **Checklist-to-CSV reconciliation** — for every topic marked Present, assert a matching CSV row exists.
2. **Exhaustive generic-clause audit by group** — enumerate every generic clause and test each state's tag, adjudicating misses rather than trusting a keyword probe.

**This state's result on screen 2, run 2026-09-06 across all seven states:** every generic lease clause not tagged to this state has a state-specific override in place. **No defect found here.** The defect was confined to ND (43 clauses, since fixed) and SD (45 clauses, outstanding — flagged for the SD session).

---

# CORE-OBLIGATIONS CANVASS — 2026-09-07 (PARTIAL — one cell, and a flag)

Appended during the **South Dakota** re-audit session. Context: SD's re-audit found the consolidated named-topic checklist had **no topic row** for several universal landlord obligations — **Addendum L.10**, accretion bias. A `CORE OBLIGATIONS` section was added; SD, ND, MN and KS have been canvassed. **Colorado is the fifth state, and this pass covers one cell** — because the first section read produced a discrepancy that should not be papered over.

## § 38-12-103(3)(a) — the treble-damages trigger may have changed from "willful" to "wrongful"

| Edition | Text |
|---|---|
| 2020, 2021, 2022 (Justia) | "The **willful** retention of a security deposit … **shall render** a landlord liable for treble the amount …" |
| **2024 CRS edition** (colorado.public.law, citing `leg.colorado.gov/sites/default/files/images/olls/crs2024-title-38.pdf`) | "The **willful** retention …" |
| **2025** (Justia) | "The **wrongful** retention of a security deposit … **renders** a landlord liable for treble the amount …" |

**This is not a trivial edit.** *Turner v. Lyon*, 189 Colo. 234, 539 P.2d 1241 (1975) construes **"willful" to mean "deliberate."** A landlord who withheld a deposit wrongly but not deliberately escapes treble damages under the older text. Under "wrongful," that landlord does not. The change would materially expand exposure — treble damages plus reasonable attorney fees and court costs — for exactly the ordinary, non-deliberate withholding that most disputes involve.

**Not resolved, and deliberately not asserted.** A single reproduction differing from four others is a flag, not a finding. This is the shape of both **L.6** (a stale or divergent secondary text on a hard rule) and **K.4** — and the SD session's own headline error was precisely a superseded deposit deadline that four sources disagreed about. **Escalated: the current § 38-12-103 text with its source/history line.**

**A second observation worth recording independently.** Justia's 2025 page carries the *amended* operative text while its **case annotations still discuss "willful"** and still cite *Turner v. Lyon* for that construction. **Annotations lag amended text.** Any future pass that reads a Colorado section's annotations to interpret its operative language risks reading a construction of words the statute no longer uses.

## Confirmed regardless of which text governs

- **Tenant must give 7 days' written notice of intent to file** before suing — § 38-12-103(3)(a). *Mishkin v. Young*, 107 P.3d 393 (Colo. 2005): the landlord **cannot avoid treble damages by accounting during that seven-day window**, because the period sits beyond the statutory deadline and the right to retain is already forfeited.
- **The landlord bears the burden of proving the withholding was not wrongful** — § 38-12-103(3)(b). *Only Colorado and Minnesota place the burden on the landlord; ND, SD and KS do not.*
- **Treble damages plus reasonable attorney fees and court costs**, where triggered. Against the others: ND treble (no fees provision found), MN double plus $500 punitive, KS 1½×, SD forfeiture plus a $200 cap. **Colorado is the most exposed of the five.**
- **Limitations split** — *Carlson v. McCoy*, 193 Colo. 391: the treble-damages provision is **penal** and carries a **one-year** limitation, while recovery of the deposit itself and attorney fees are **remedial** and carry **six years**. No other canvassed state splits its limitation period this way.

## Colorado status

**One of fourteen cells filled**, and that one carries an unresolved flag. Thirteen remain `NOT CANVASSED`.

**Section leads for the next pass:** §§ 38-12-102 to 38-12-104 (deposits; § 38-12-104 is the gas-appliance hazardous-condition variant with a **72-hour/7-day** track), §§ 38-12-503 to 38-12-511 (warranty of habitability and tenant remedies), § 38-12-702 (rent-increase notice), § 38-12-801 et seq. (bed bugs), § 38-12-901 et seq. (fees), § 38-12-1101 et seq. (unreasonable lease terms).

**No CSV changes.** Canvass and record only; **no §5a.1 propagation owed.**

## FLAG RESOLVED — HB 25-1249 is enacted, and Colorado's deposit law was substantially rewritten

**The willful/wrongful discrepancy flagged above is resolved, and the divergent 2025 reproduction was the correct one.** History line, § 38-12-103:

> `L. 2025: (1) amended, (HB 25-1168), ch. 229, p. 1056, § 13, effective May 22; (1), (2), (3), IP(4), and (7) amended and (1.5), (2.5), (3.5), (8), (9), (10), (11), and (12) added, (HB 25-1249), ch. 401, pp. 2273, 2277, §§ 2, 3, effective January 1, 2026.`

Editor's note: the act **"applies to conduct occurring on or after January 1, 2026."** Today is 2026-09-07, so **the amended text governs.**

**This is the statute the project already had on its backlog.** The architecture review's standing cross-state item — *"HB25-1249-style Colorado deposit-reform analog (pet caps, carpet damage, bad-faith-deposit definition, wear-and-tear-void rule, walkthrough-inspection right) — confirmed only for CO … not yet checked against WY, KS, or NE"* — is this act. **Its primary text is now read**, which is the precondition for ever running that cross-state check properly.

### What changed

- **§ 38-12-103(3)(a): "willful" → "wrongful."** *Turner v. Lyon*, 189 Colo. 234, construes "willful" as **"deliberate."** A landlord who withheld wrongly but not deliberately escaped treble damages before; not now.
- **§ 38-12-103(2.5) is new and deems a withholding wrongful** on four triggers: missing the written statement, giving one that fails to list *exact* reasons, failing to return the balance in time, or bad-faith retention.
- **§ 38-12-103(3.5) is new and defines bad faith**, including retention that unreasonably exceeds actual damages — with a **rebuttable presumption of unreasonableness at 125% or more** of actual damages. The landlord bears the burden of proving the amount of actual damages.
- **A good-faith safe harbour** at (3.5)(d): a landlord who acts in good faith and otherwise fully complies is liable **only for the excess retained plus court costs** — no trebling.
- **§ 38-12-103(1)(b) closes the list of permissible retentions** to four categories, and bars retention for normal wear and tear or **preexisting** conditions.
- **§ 38-12-103(1.5) creates a walk-through inspection right** on either party's request, before termination and after the tenant can remove furniture.
- **§ 38-12-103(8), from January 1, 2026, adds a documentation duty**: on 14 days' written request the landlord must supply **photographs, inspection forms or reports, receipts, invoices or estimates** relevant to the retention. **No other canvassed state requires supporting evidence rather than mere reasons.**
- **§ 38-12-103(11) constrains carpet and paint deductions** — and notably, **carpet cannot be deemed substantially and irreparably damaged if it has not been replaced within the preceding ten years.**
- **§ 38-12-103(7) is a double non-waiver**: any provision waiving or modifying Part 1 for the tenant's benefit is void, **and** any provision assigning the tenant a fee for repairs, cleaning or other work due to **normal wear and tear or preexisting damage** is void.

### Two method points worth carrying

**The annotations lag the amended text, and they are still on the page.** Justia's 2025 § 38-12-103 carries the amended operative language while its annotation block still defines **"willful"** and cites *Turner v. Lyon* for it. A reader consulting the annotations to construe the section would be interpreting **words the statute no longer uses.** Recorded as a general caution for Colorado, where the 2025 reforms were extensive.

**The divergent source was right.** Four reproductions said "willful"; one said "wrongful"; the outlier was correct because it alone reflected an amendment effective 2026-01-01. **Majority agreement among reproductions is not evidence of currency** — the same lesson as L.6, now demonstrated in the opposite direction: there, six stale sources agreed on $40; here, four stale sources agreed on "willful."

## Colorado status

**Four of fourteen cells filled**, all from § 38-12-103. Ten remain `NOT CANVASSED`.

**Leads:** §§ 38-12-102 / 102.5 / 104 (deposit amount, pet deposits, gas-appliance hazard track), §§ 38-12-503 to 38-12-511 (warranty of habitability; tenant remedies), § 38-12-702 (rent-increase notice), §§ 38-12-801 et seq. (bed bugs), §§ 38-12-901 et seq. (fees), §§ 38-12-1101 et seq. (unreasonable lease terms), § 38-12-402 (DV/stalking termination, cross-referenced from (1)).

**No CSV changes.** Canvass and record only; **no §5a.1 propagation owed.**

## Part 5 — habitability, waivability, tenant duty, tenant remedy

**Colorado's habitability regime is the most elaborate of the five states canvassed**, and two features have no counterpart anywhere else in the set.

**A response clock measured in hours.** § 38-12-503(2)(b)(I): the landlord breaches by failing to **commence** remedial action within **24 hours** where the condition materially interferes with the tenant's life, health or safety, or **72 hours** where the premises is uninhabitable — and separately by commencing and then failing to continue, or failing to complete within a reasonable time. ND, MN, KS and SD all use "reasonable time" or a multi-day notice period. **Colorado is the only one of the five that starts counting in hours.**

**Displacement obligations.** § 38-12-503(4) requires the landlord to provide a comparable alternative dwelling or hotel, subject to stated distance limits, with **per diems for meals where no full-use kitchen is provided after 48 hours**, and reimbursement of reasonable storage and travel costs; the hotel obligation ends after 60 days, and the tenant continues paying rent.

**This is directly relevant to a South Dakota finding.** The SD re-audit recorded *"Alternate housing/relocation requirement during habitability failure — Confirmed absent"* for South Dakota, noting that SD's repair-and-deduct/vacate/escrow set is adjacent but not the same thing. **Colorado has exactly the requirement SD lacks**, in detail. The topic is live in at least one state in the footprint rather than theoretical.

**Waivability: a clean 3–2 split emerges across the five states.** § 38-12-503(5) makes any agreement waiving or modifying the warranty **void as contrary to public policy**, and § 38-12-507 extends the bar to the **remedies** for agreements entered on or after **May 3, 2024**. So:

| Non-waivable | Structured delegation permitted |
|---|---|
| **CO** (§ 38-12-503(5), § 38-12-507) · **MN** (§ 504B.161(1)(b)) · **SD** (§ 43-32-8) | **ND** (§ 47-16-13.1(4)–(5)) · **KS** (§ 58-2553(b)–(d)) |

Colorado has a narrow statutory exception at **§ 38-12-506 for certain single-family residences** — the same axis on which ND draws its single-family distinction, reached from the opposite direction.

**Tenant remedies: the widest set of the five, and the only one with punitive damages.** § 38-12-507 gives the tenant termination **without any liability or financial penalty** on 10–60 days' notice; or a claim or counterclaim for actual damages **including reduction in fair rental value**, plus court costs, reasonable attorney fees, **punitive damages**, and any other damages ordered; or **preliminary or permanent injunctive relief including specific performance**, with the court retaining **continuing jurisdiction**.

Beyond the tenant's own hands: **§ 38-12-512 gives the attorney general enforcement authority with penalties**, and **§ 38-12-513 provides for receivership of residential housing.** Only MN's tenant-remedies action is comparable, and MN has no AG enforcement provision in ch. 504B.

Five states, five architectures — now complete: ND repair-and-deduct · SD repair-and-deduct, vacate, own-account escrow · MN court-administered escrow with receivership · KS terminate-or-sue · **CO terminate, sue for punitive damages, injunctive relief, plus AG enforcement and receivership.**

**Recorded as partially sourced:** § 38-12-504 ("Tenant's maintenance of premises") is confirmed to exist as a dedicated section from the official Part 5 index, but **its text was not read in this pass**. The tenant-attribution rule stated in the checklist cell comes from § 38-12-503's misconduct carve-out, which reaches the tenant, household members, guests, invitees, and persons under the tenant's direction or control.

## Colorado status

**Eight of fourteen cells filled.** Remaining `NOT CANVASSED`: both assistance-animal rows; general reasonable-accommodation duty; required state disclosures; rent-modification notice; periodic-tenancy termination notice.

**Leads:** § 38-12-702 (rent-increase notice), § 38-12-1105 (late fees), §§ 38-12-901 et seq. (fees), §§ 38-12-1101 et seq. (unreasonable lease terms), §§ 38-12-801 et seq. (bed bugs — a disclosure candidate), § 38-12-402 (DV/stalking termination), § 24-34-502 (CADA housing discrimination — the reasonable-accommodation lead), § 13-40-107 (notice to quit / periodic tenancy termination, which sits in Title 13 not Title 38).

**No CSV changes.** Canvass and record only; **no §5a.1 propagation owed.**

## Parts 1, 7, 8 and Title 13 — Colorado canvass complete, 15 of 15

**Rent increases: Colorado is the only canvassed state that limits FREQUENCY.** § 38-12-702 — *"a landlord shall not increase rent more than one time in any twelve-month period of consecutive occupancy by the tenant"* — **regardless of whether there is a written agreement, and regardless of whether the tenancy is fixed, month-to-month or indefinite.** § 38-12-701(2)(a) separately requires **60 days' written notice** where there is no written agreement, and (2)(b) bars terminating such a tenancy with the primary purpose of raising rent. ND, SD, MN and KS regulate notice only; none limits how often rent may rise.

**Radon is a mandatory lease disclosure — and only here.** § 38-12-803 requires written disclosure of whether radon tests have been conducted, any concentration detected, and any mitigation performed. **The SD re-audit confirmed radon absent as a lease duty in South Dakota and caught the trap that SD's apparent radon statute (§§ 43-4-37 to -44) is a real-estate *sale* disclosure.** ND and MN likewise have none. Colorado is the exception that makes those three absences meaningful rather than merely unexamined. Bed bugs at §§ 38-12-801 et seq.

**§ 13-40-107 was entirely rewritten by HB 24-1098, and residential landlords largely lost the section.** The notice tiers remain — 91 days for a year or longer, 28 days for six-to-twelve months, 21 days for one-to-six months, 3 days week-to-week or at will, 1 day under a week — **the longest periodic-tenancy notice of the five states by a wide margin.** But as amended, the section is available to *a landlord of nonresidential property or of a residential premises exempted under § 38-12-1302(1)(a),(b),(d),(e),(f), or a tenant of any property.* **An ordinary residential landlord must instead proceed under the just-cause regime at §§ 38-12-1301 et seq. — enumerated cause, or a no-fault ground with 90 days' written notice.** HB 24-1098 also eliminated the tenant-at-will presumption and the condominium carve-out.

**No other canvassed state has a just-cause requirement.** ND, SD, MN and KS all permit no-cause termination on notice. This is the single largest structural divergence in the whole core-obligations table.

### Assistance animals — Colorado regulates the provider, not the landlord

Nothing in Title 38 art. 12 sets documentation limits. ND § 47-16-07.5, MN § 504B.113 and SD § 43-32-35 each constrain **what the landlord may demand**. Colorado instead constrains **what the provider may issue**: the **Mental Health Practice Act, § 12-245-229**, requires a licensed provider to establish a genuine provider-patient relationship and evaluate the patient before issuing an assistance-animal document. A letter written without clinical evaluation fails the standard.

**Same anti-letter-mill policy, reached from the opposite end of the transaction.** Worth recording precisely because a canvass looking only in the landlord-tenant title would report Colorado as having no rule at all.

**§ 38-12-106 (HB 23-1068, effective 2024-01-01) is the only statutory cap on ordinary pet charges in the five states**: pet security deposit **capped at $300 and required to be refundable** — non-refundable pet deposits were previously lawful — and **pet rent capped at $35/month or 1.5% of monthly rent, whichever is greater.** Service and assistance animals remain exempt from pet fees entirely.

**The penalty structure runs the opposite way from the Dakotas.** § 24-34-309 provides a statutory fine of **$3,500 payable to each plaintiff for each violation** of §§ 24-34-502, 502.2, 601 or 803, plus a compliance order. **Colorado's assistance-animal penalties run against the landlord; ND's and SD's run against the tenant** (criminal infraction plus $1,000, and a $1,000 civil fee respectively). MN sits between, permitting only denial of the application.

**Reasonable accommodation: CADA, and the most enforceable of the five.** § 24-34-502 makes refusal to accommodate a discriminatory housing practice, enforced by the Colorado Civil Rights Division alongside the FHA, with the § 24-34-309 fine and a private right of action. Exemptions reported as narrow — owner-occupied buildings of four or fewer units, and single-family homes sold or rented without a broker.

### Source tiering, stated rather than implied

Primary text read this pass: **§ 38-12-103** (in full), **§ 38-12-106**, **§ 38-12-701**, **§ 13-40-107** (tiers and the HB 24-1098 session-law amendment text), and §§ 38-12-503/505/507 substantially.

**Identified but NOT read in this pass**, and marked as such in the checklist cells: § 38-12-504, §§ 38-12-801 et seq., § 38-12-803, §§ 38-12-1101 et seq., § 38-12-105, §§ 38-12-1301 et seq., §§ 24-34-502 / 502.2 / 803 / 309, § 12-245-229.

**One flagged consequence.** §§ 38-12-1101 et seq., as expanded by HB 24-1098, reportedly void **unilateral (one-way) fee-shifting clauses** in residential leases, along with jury-trial waivers, class-action waivers, and waivers of good faith or quiet enjoyment. **If so, any one-way attorney-fee clause rendered for CO in the library would be void** — the same issue KS § 58-2547(a)(3) raises, which the CSV already guards against for KS and NE but not for CO. **Flagged for CO's next clause review; not actioned, this being an SD session.**

## Colorado status — canvass complete

**Fifteen of fifteen cells carry a status.** No cell left `NOT CANVASSED`.

**No CSV changes.** Canvass and record only; **no §5a.1 propagation owed.**

## HB 25-1249 coverage audit — CO's re-audit largely caught it; two gaps found

Prompted by the canvass finding that § 38-12-103 was substantially rewritten effective 2026-01-01, the CO clause rows were checked against the act. **The concern that Colorado might be shipping superseded deposit law was largely unfounded, and that is worth stating plainly.** CO's re-audit of 2026-08-20 captured five HB 25-1249 elements:

| Element | Row |
|---|---|
| 125% bad-faith presumption | `edu-bad-faith-deposit-co` — cites HB 25-1249 by name |
| Walkthrough inspection right | `edu-walkthrough-co` |
| Ten-year carpet rule | `edu-carpet-damage-co` — cites the act and its effective date |
| § 38-12-103(7) non-waiver | `edu-deposit-nonwaiver-co`, `edu-part5-nonwaivable-co` |
| Pet caps | `edu-pet-caps-co` |

**Two gaps remained, and both are now fixed in v132.**

### 1. `security-deposit-return-co` ran the clock from the wrong event

The clause read: *"within 30 days after Tenant vacates the property, or within 60 days if this Lease so provides."*

§ 38-12-103(1) runs the period from **"the termination of the lease or surrender of the premises, whichever occurs last."** Those diverge whenever a tenant surrenders early. A tenant who moves out two months before the term ends starts the clock on the clause's reading but not on the statute's — **understating the landlord's own time and inviting a premature wrongful-retention claim against a landlord who relied on the lease text.**

The clause also omitted the **written statement of exact reasons** and the bar on retaining for **normal wear and tear or preexisting conditions**. Both are express in § 38-12-103(1), and both are material now that § 38-12-103(2.5) **deems** a withholding wrongful where the statement is missing or fails to list exact reasons, and § 38-12-103(2) **forfeits the right to withhold any portion** for non-compliance. Rewritten.

**The shape of this gap is the inverse of South Dakota's.** In SD the `LANDLORD_EDUCATION` row hardcoded a stale figure while the self-limiting `LEASE_CLAUSE` survived unharmed. Here the education rows were correct and **the defect sat in the clause that actually ships into leases.** Neither direction is safe to assume; both need checking.

### 2. § 38-12-103(8)'s documentation duty had no row at all

Added as `edu-deposit-documentation-co`. From **January 1, 2026**, on a tenant's written request the landlord must within **14 days** provide documentation in its possession relevant to the retention — **photographs, inspection forms or reports, receipts, invoices, or estimates.**

**This compounds with the burden provisions rather than standing alone.** §§ 38-12-103(3)(b) and (3.5)(c) put the burden on the landlord to prove both that a retention was not wrongful and the amount of actual damages. A landlord who has not kept photographs and invoices faces a production duty they cannot satisfy *and* an evidentiary burden they cannot discharge — with treble damages plus attorney fees and costs exposed.

**Cross-state significance:** **no other canvassed state requires supporting evidence rather than a statement of reasons.** ND § 47-16-07.1(3) and NE § 76-1416(2) require mandatory itemization; SD § 43-32-24 an itemized accounting on request within 45 days; KS § 58-2550(b) written itemized notice; MN § 504B.178 subd. 3 only specific reasons, with the burden on the landlord. **Colorado alone requires the underlying documents.** That distinction was invisible until the seven states were run against the same row.

## CSV — v132 (from v131)

535 → **536 rows**; CO **111 → 112**. All other state tag counts unchanged. One row corrected (`security-deposit-return-co`), one added (`edu-deposit-documentation-co`). Integrity assertions clean.

**§5a.1:** both rows are CO-only; no shared clause was touched; **no propagation owed.**

## CORRECTION to this log's waivability finding — the 3–2 split was wrong

The Part 5 entry above recorded a **"clean 3–2 split"** on habitability waivability: CO/MN/SD non-waivable against ND/KS delegating. **That grouping was built on a Wyoming cell sourced from secondary material, and the official Wyoming text refutes it.**

**Wyo. Stat. § 1-21-1202(d)**, read from wyoleg.gov: *"Any duty or obligation in this article may be assigned to a different party or modified by explicit written agreement signed by the parties."* Wyoming has **no non-waivable floor at all** — the opposite of what the earlier entry recorded.

**Corrected picture — three groups, not two:**

| Non-waivable | Structured delegation permitted | Fully modifiable |
|---|---|---|
| **CO** § 38-12-503(5), § 38-12-507 · **MN** § 504B.161(1)(b) · **SD** § 43-32-8 | **ND** § 47-16-13.1(4)–(5) · **KS** § 58-2553(b)–(d) · **NE** § 76-1419 (narrowest, but paired with § 76-1415(1)(a)'s anti-waiver rule) | **WY** § 1-21-1202(d) |

**Colorado's own position is unchanged and remains correctly recorded** — § 38-12-503(5) voids any agreement waiving or modifying the warranty, and § 38-12-507 extends that to the remedies for agreements entered on or after May 3, 2024. Only the comparative framing was wrong, and only because Wyoming was mis-sourced.

**Recorded here rather than silently amended**, because the incorrect split was written into this log as a finding and would otherwise stand.

## Fee-shifting flag — FALSE POSITIVE as to exposure, but my citation was wrong

**My citation was wrong.** Earlier entries in this log and in the checklist cell cited **§§ 38-12-1101 et seq.** for Colorado's prohibited-lease-terms regime. **§ 38-12-1101 is the short title of the "Mobile Home Park Act Dispute Resolution and Enforcement Program"** (Part 11, added by HB 19-1309) and has nothing to do with lease terms.

**The correct provision is C.R.S. § 38-12-801, Part 8** — *"Written rental agreement — prohibited clauses — copy — tenant — applicability — definitions"* — as substantially amended by **HB 23-1095** (ch. 372, p. 2229, § 1, effective **2023-08-07**).

This is the **sixth miscitation** recorded in this canvass and **the second I committed myself**, after the § 20-13-23.2 scope error in the SD session. Both have the same cause: a section number carried forward from a secondary description without being opened. **L.8's rule — a title is not text — extends to a part number: a part number is not a subject.**

### What § 38-12-801 actually prohibits

Void if included: a clause assigning a **penalty** stemming from an eviction notice or action; a **one-way fee-shifting clause** — any fee-shifting clause must award fees to the **prevailing party**, and only after a determination that the party prevailed **and that the fee is reasonable**; **waivers** of the right to a jury trial (except in a possession hearing), of class or collective claims, of the implied covenant of **good faith and fair dealing**, of the implied covenant of **quiet enjoyment** (except third-party acts beyond the landlord's reasonable control), and of **mandatory mediation** under § 13-40-110(1); any fee, damages or penalty for a tenant's **failure to give notice of nonrenewal**, beyond actual losses; and characterising any amount other than the set monthly occupancy payment as **"rent"** for eviction purposes.

**Carve-outs:** the § 38-12-801(3)(a)(III) waiver prohibitions do not reach mobile-home rental agreements, nor duplex, triplex or accessory-dwelling-unit agreements where the owner resides in one unit or on the same lot.

### The exposure the flag was raised about is nil

**Zero `LEASE_CLAUSE` rows tagged CO contain attorney-fee language.** The CSV's standing integrity assertion covers KS and NE explicitly; Colorado turns out to be clean as well, and **`edu-fee-shifting-co` already exists and already cites § 38-12-801.** The concern that a one-way CO fee clause might be shipping and void was unfounded.

**That makes four false positives in five clause-level flags checked** — ND × 2, KS, and now CO, against one real defect (MN `pet-policy-mn`). All five were raised the same way: by reading a statute, noting the checklist had no dedicated row, and inferring the CSV had a gap, **without querying the CSV.** Recorded as **Addendum L.14** during this session; this instance is further confirmation.

### One genuine open item, which the correct citation surfaces

§ 38-12-801's history line carries **two amendments this project has not read**:

- **HB 25-1108**, ch. 437, p. 2522, § 2 — added subsection **(3.5)**, effective **2025-09-01**
- **HB 25-1090**, ch. 94, p. 432, § 4 — amended **(3)(a)(VI)**, effective **2026-01-01**, and applying to conduct on or after that date

Both are **in force now**. Neither subsection's content is known, and neither is reflected anywhere in the CO rows. Given that this is the statute voiding lease clauses outright, **an unread amendment to it is the highest-value remaining CO item** — the same profile as HB 25-1249, which this canvass found had rewritten the deposit statute.

**Escalated:** the current text of § 38-12-801(3.5) and (3)(a)(VI).

**No CSV changes this pass.** Citation corrected in this log and in the checklist cell; no clause was wrong.

## § 38-12-801 read in full — escalation was a false positive, but the sweep found two real gaps (v136)

Taylor supplied the complete text of § 38-12-801 (CRS Annotated, current through July 1 2026). **The two amendments the escalation was raised about are already fully covered**, and the library is more current on Colorado than this canvass was:

- **(3.5), "Letty's Act"** (HB 25-1108, eff. 2025-09-01) — `edu-death-of-tenant-co` carries it precisely: liquidated damages, rent acceleration beyond the end of the month **or ten business days after the unit is vacated, whichever is later**, move-in concession clawback, any other early-termination penalty, the deposit-retention allowance for death-related damage, and the possession route without an eviction action.
- **(3)(a)(VI)** (HB 25-1090, eff. 2026-01-01) — `edu-rubs-uncertainty-co` carries the markup cap exactly: *"either 2% of the billed amount or a flat $10 per month, not both."* It also cites **C.R.S. 6-1-737(4.5), added by HB26-1013**, a 2026 development this canvass did not know existed.

**That is the sixth false-positive escalation of this session**, and the second time the CO re-audit has proved ahead of the canvass.

### But the L.12 sweep found two subsections with no coverage

Rather than stopping at the two amendments, every subsection of § 38-12-801 was checked against the CO rows. Two had no home.

**§ 38-12-801(1) — the seven-day signed-copy duty.** No CO row cited or covered it. Added as `edu-lease-copy-duty-co`: a copy signed by both parties no later than the seventh day after the tenant signs, electronic sufficient **unless the tenant requests paper**.

**Cross-state context makes this more than housekeeping.** The core-obligations canvass established three different postures on the same duty: **ND has none** (`edu-no-lease-copy-duty-nd` records that failure to deliver is not a defence); **MN § 504B.115 requires it and makes failure a defence in eviction**; **CO requires it within seven days.** Exactly the kind of universal obligation L.10 identified as systematically missing.

**§ 38-12-801(3)(a)(I) — the eviction-penalty clause ban.** Added as `edu-eviction-penalty-clause-ban-co`. The library carried **(3)(a)(II)** fee-shifting, **(3)(a)(V)** rent-mischaracterisation, **(3)(a)(VI)** markups and **(3)(a)(VII)** voucher/utility evictions — and **skipped the first item on the list.** Several rows cite "38-12-801(3)(a)" generally; none reaches (I).

**An asymmetry in the carve-outs, recorded because it is easy to misread.** § 38-12-801(4) disapplies (3)(a)(III)(A),(C),(D),(IV),(V),(VI),(VII) to mobile homes in mobile home parks, and § 38-12-801(8) disapplies (3)(a)(III),(IV),(V),(VI),(VII) to owner-occupied duplexes, triplexes and ADUs. **Neither carve-out lists (3)(a)(I) or (3)(a)(II).** So the eviction-penalty ban and the one-way fee-shifting ban apply to **every** Colorado residential rental agreement, including the owner-occupied small properties that escape most of the rest of subsection (3). Both new rows state this explicitly.

## CSV — v136 (from v135)

537 → **539 rows**; CO **112 → 114**. All other state tag counts unchanged. Two new CO-only `LANDLORD_EDUCATION` rows; **no shared clause touched, no §5a.1 propagation owed.** Integrity assertions clean.
