## Decision Log: Clause Library Verification Workflow (Nationwide Coverage Strategy)

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL) is closed. **No re-audit of any completed state is planned, now or later.** "Re-audit" means re-scrubbing everything for a state, and that won't happen. Targeted work is welcome: going back to re-verify or fix a specific row or topic in a completed state (a scalpel, not a hammer) needs no special justification; just say what and why. The word "re-audit" throughout these files refers to the one-time settings re-run of Aug–Sep 2026, which is finished. Older phrases such as "flag for the X re-audit", "live item for the X re-audit", "when X is next revisited" or "screen the completed states on their next revisit" are historical and dead: they are not a queue. Do not propose, plan or mention a re-audit, and do not park anything "for the re-audit". If something specific in a completed state looks wrong or unverified, say what and why and propose the targeted fix.

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


## Propagated from the Nevada pass, 2026-09-24

Two shared rows tagged to this state were edited by the Nevada pass (§5a.1 / instruction 9):

1. `common-area-use` — appended: "Nothing in this Section restricts any display that applicable law entitles Tenant to make, such as the display of the flag of the United States or of religious or cultural items, subject to any lawful limits on its size, placement, and manner." Driven by NRS 118A.325 / 118A.327 (NV). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
2. `parking-vehicle-rules` — inserted "in accordance with applicable law" before the landlord's towing authority. Driven by NRS 487.038 (NV). Classification: UNIFORM — self-limiting. Inherit without override.

`last_checked` on both rows reset to 2026-09-24. No other field changed. Detail: lease-clause-decision-log-NV.md §§3.1, 11.6, 16. (Appended at sync, 2026-09-25.)


## Propagated from the Texas pass, 2026-09-25

Three shared rows tagged to this state were edited by the Texas pass (§5a.1 / instruction 9):

1. `tenant-maintenance` — "...except for ordinary wear and tear" now reads "...except for ordinary wear and tear and any condition that applicable law requires Landlord to repair or remedy." Driven by Tex. Prop. Code §92.006(c) / §92.0563(b) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
2. `no-alterations` — appended: "This Section does not limit any repair, installation, or rekeying that applicable law entitles Tenant to perform." Driven by Tex. Prop. Code §§92.0561, 92.164(a)(1), 92.165(1) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
3. `assigned-parking-space` — reassignment is now "subject to any limits applicable law places on changing parking rules or policies during the Term." Driven by Tex. Prop. Code §92.0131(e) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.

`last_checked` on all three rows reset to 2026-09-25. No other field changed. Detail: lease-clause-decision-log-TX.md §§3.1, 16. (Appended at sync, 2026-09-26.)

---

### Bookkeeping fix — 2026-09-26

`security-deposit-installments-co` (inactive since 2026-09-13; no Colorado deposit-installment right exists) had a blank `verification_status` in `lease-clauses.csv`, because the 2026-09-25 restore copied status back only for active rows. The row now carries `VERIFIED`, dates 2026-08-18 / 2026-09-13, and a do-not-reactivate note, matching `lease-clause-citations-CO.csv`. This is a data-entry fix only; no Colorado research was reopened.


## Propagated at the Florida sync, 2026-09-26

A shared row tagged to this state was edited (§5a.1 / instruction 9), by Taylor's decision at the Florida sync, not by a state pass.

1. `application-of-payments`: payments are now applied **rent first**, oldest unpaid period first, and only then to fees and other charges ("unless Tenant directs otherwise in writing for a particular payment or applicable law requires otherwise"). It was fees first. The cure-preserving sentence is kept. NJ and FL are folded back into this row and `application-of-payments-nj` is retired. Reason: fees first turns an unpaid fee into an apparent rent shortfall. No tagged state's research found a statute requiring fees first, and rent first is lawful on any reading. Classification: UNIFORM. It removes a landlord-favorable ordering and adds no obligation. Inherit without override.

`last_checked` reset to 2026-09-26. No other field changed. This is not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-FL.md §16. (Appended at sync, 2026-09-26.)

2. `default-by-tenant` (second propagated edit at the Florida sync, 2026-09-26): the non-rent cure promise now ends "...does not cure the failure after receiving written notice, except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure." Driven by Florida's finding that promising a cure for every breach can contractually give up a state's no-cure termination grounds (checklist instruction 33). This is a targeted fix Taylor approved, not a re-audit. Classification: UNIFORM. It is self-limiting and adds no landlord right where no such law exists. Inherit without override. `last_checked` reset to 2026-09-26. Detail: lease-clause-decision-log-FL.md §16.

## Propagated from the Arizona pass, 2026-09-27

Not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-AZ.md §14 and §17. (Appended at sync, 2026-09-27.)

1. **Shared-row edit received from Arizona (2026-09-27, Taylor's decision) — `entire-agreement`.** The sentence "may not be changed except in writing signed by all parties" now continues ", or as applicable law permits Landlord to change it by written notice to Tenant." Driver: A.R.S. §33-1342(C), which lets an Arizona landlord amend existing leases by written notice to comply with new laws; the old wording could be read to waive such a right. Recorded as **uniform** under §5a.1: the words are self-limiting and change nothing where this state's law gives no unilateral amendment right, while preserving any right it does give (for example, rules adopted on notice or changes to a periodic tenancy on the notice the law requires). No state-specific override is needed. `last_checked` was reset to 2026-09-27.

2. **2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged CO** (§5a.1; uniform text, no CO override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. Colorado's Rental Application Fairness Act (C.R.S. 38-12-901 to 905, `edu-rental-application-fairness-co`) bars considering rental or credit history over 7 years and most criminal history over 5 years. The last sentence keeps the clause off that information. Remedies run through `default-by-tenant`. **Open (effectiveness):** whether a false application is a for-cause ground under the HB24-1098 overlay for tenancies of 12 months or more. Not researched.

## Gap-discovery status (checklist instruction 36), recorded 2026-09-27

Documentation only: this records work already in this log, and nothing was re-reviewed.

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§8, §8a: C.R.S. Title 38 Article 12) |
| Gap-discovery source 2 — real-lease comparison | Done (§10: Taylor's actual Zillow-drafted Colorado lease) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§11: Taylor's own Colorado landlord experience, the one state where that applies) |
| Gap-discovery source 4 — outside-title search | Done (§8a, Part 15: law outside Title 38, e.g. fair housing in Title 24) |

## Propagated shared-row edits, 2026-09-28 (Taylor's decisions after the gap-discovery backfill)

Uniform under §5a.1: each edit is self-limiting, so this state needs no override. Not a re-audit; nothing else in this state was reviewed.

1. **`no-alterations`** — the carve-out now reads "any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform". It keeps disability modifications that fair-housing law requires the landlord to permit (at the tenant's expense) from reading as subject to unfettered landlord consent. Raised by the NE backfill (NE log §D.1).
2. **`pet-policy`** — "without liability to Tenant" now reads "without liability to Tenant to the extent applicable law permits". A flat disclaimer of the landlord's own entry-and-removal act is void where exculpation is barred (ND §9-08-02). Raised by the ND backfill (ND log §43.7).
3. **`holdover`** — a continued month-to-month tenancy is now "terminable by either party upon the written notice required by applicable law or, where applicable law sets no notice period, by this Lease". Wyoming has no statutory period (`periodic-tenancy-notice-wy` supplies one). Raised by the WY backfill (WY log §20.4).


## Targeted fix, 2026-09-28: fire/casualty (flagged from the Georgia pass)

Not a re-audit; nothing else in this state was reviewed. Source: GA log §9.1, which found Colorado the only one of 15 states with no casualty row.

- **Read:** the official C.R.S. 2024 Title 38 PDF (leg.colorado.gov, OLLS), Article 12, section-open for §§ 38-12-502(4.5), 38-12-503, 38-12-505 and 38-12-507. Part 5's history lines end at SB 24-094 (2024), consistent with §18's 2026-08-27 read of § 38-12-503 and with the CO legal watch, which monitors §§ 38-12-503/505/507 weekly and has reported no later enacted bill.
- **Confirmed absent:** a Colorado casualty or destruction-of-premises statute. Article 12 searched for casualty, fire, destroy, destruction, untenantable and abate; no hit is a casualty rule.
- **Finding:** Part 5 governs instead. A casualty the tenant didn't cause is a habitability condition: remedial action at the landlord's expense on the 24/72-hour clock (§ 38-12-503(2)(b), (7)); a comparable unit or hotel on the tenant's request (§ 38-12-503(4)), with the 60-day hotel cap in (4)(c); the tenant's termination right arises only after a breach, on 10 to 60 days' notice (§ 38-12-507(1)(a)). A tenant-caused condition is not a breach (§ 38-12-503(9)). Part 5 can't be waived or modified by any agreement (§ 38-12-503(5), (10)), so the WY/GA model (either party may terminate) would likely be void as to the landlord. The landlord's only exit is § 38-12-503(11), already `environmental-event-termination-co`; whether a single-house fire is an "environmental public health event" (§ 38-12-502(4.5)) is unsettled.
- **Added:** `edu-casualty-habitability-co` (LANDLORD_EDUCATION, VERIFIED), including how to end a lease by mutual written agreement without an unenforceable release of Part 5 claims.
- **Not added (Taylor's decision):** a casualty lease clause. A tenant-only termination clause was drafted and declined, because it would let the tenant leave without the landlord's agreement; Taylor prefers leaving that to mutual agreement.
- **§5a.1:** new CO-only row, no shared-row change, no propagation owed.

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Colorado changed most of any state, because this log's own §7 test was never applied back to the rows it produced.

- **Switched off, content moved to education (text and citations unchanged):** `late-fee-limit-co` → `edu-late-fee-limit-co`; `nsf-fee-limit-co` → `edu-returned-payment-fee-co`; `dv-stalking-termination-co` → `edu-dv-lease-termination-co`; `ev-charging-rights-co` → `edu-ev-charging-rights-co`; `subsidy-late-fee-co` → `edu-subsidy-late-fee-co`; `subsidy-habitability-proration-co` → `edu-subsidy-habitability-proration-co`; `habitability-timeline-co` → merged into `edu-habitability-operational-duties-co`. Switched off, not deleted, for a possible comprehensive-lease option.
- **Trimmed to what the lease needs:** `utility-submetering-disclosure-co` (method disclosure kept; fee is the landlord's stated choice), `security-deposit-return-co` (30-to-60-day return-period choice kept), `habitability-notice-co` (written-notice channel kept), `rent-increase-notice-co` (notice period kept; the once-a-year cap is in `edu-rent-increase-frequency-co`).
- **Bed bugs (Taylor's pattern 3):** `bed-bug-disclosure-co` is now optional, with `edu-bed-bugs-co`. New finding: C.R.S. § 38-12-1004(1)(a) lets the rental agreement set a different minimum notice than 48 hours for bed-bug entry, so `landlords-access-co` now states the landlord's chosen period. Read through a fetch-tool summary of colorado.public.law; due a direct official read.
- **Termination notice (pattern 2):** both `month-to-month-notice-co-*` clauses now state the landlord's chosen period "or any longer notice Colorado law requires"; the five-tier minimums and notice-content rules moved to `edu-termination-notice-periods-co`. The builder check is Addendum M.13.
- **Source of income:** `source-of-income-statement-co` now tracks the statement § 38-12-801(2.5)(a) prescribes (the paraphrase had dropped "non-exempt"). Read from a host copy of the official 2024 C.R.S. It stays optional because of the (2.5)(b) small-landlord exemption.
- **§5a.1:** only CO-only rows changed; no propagation owed.
- **Legal watch:** `edu-bed-bugs-co` cites § 38-12-1004, which Colorado's watch has never monitored. Run Colorado's `seed-baseline` after the October 1 LegiScan reset and before its October 5 run.

### Verdict for every lease clause

All 23 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `dv-stalking-termination-co` | Education | — | tenant right §38-12-402 |
| `ev-charging-rights-co` | Education | — | tenant right §38-12-601 |
| `habitability-timeline-co` | Education | — | restates §38-12-503 duties |
| `late-fee-limit-co` | Education | — | cap + 7-day floor restated; 180-day notice is a landlord duty; §38-12-105(1)(c) in-lease disclosure met by late-fee |
| `nsf-fee-limit-co` | Education | — | returned-payments sets the fee; not-Rent sentence restates law |
| `subsidy-habitability-proration-co` | Education | — | subsidy protection |
| `subsidy-late-fee-co` | Education | — | subsidy protection |
| `habitability-notice-co` | Split | SERVES_LANDLORD | keep written-notice channel; restated warranty/retaliation to edu |
| `landlords-access-co` | Split | SERVES_LANDLORD | keep access right + 24h written notice; 48h bed-bug rule to edu |
| `rent-increase-notice-co` | Split | CONSTRAINED_TERM | keep notice period; 12-month cap to edu |
| `security-deposit-return-co` | Split | SERVES_LANDLORD | keep 30/60-day lease choice; itemization & wear-tear to edu |
| `utility-submetering-disclosure-co` | Split | REQUIRED_DISCLOSURE: C.R.S. § 6-1-737(4.5)(d) | method must be in lease; fee cap -> landlord chosen fee |
| `month-to-month-notice-co-covered` | Notice-period rewrite | CONSTRAINED_TERM | tiers restated; for-cause restriction to edu |
| `month-to-month-notice-co-exempt` | Notice-period rewrite | SERVES_LANDLORD | tiers are statutory floors; keep exemption statement |
| `bed-bug-disclosure-co` | Optional + education | SERVES_LANDLORD | owed on request to prospective tenant |
| `assistance-animal-accommodation-co` | Keep | SERVES_LANDLORD | documentation procedure, damage duty, required warning |
| `environmental-event-termination-co` | Keep | SERVES_LANDLORD | opt-in right only if lease permits |
| `ev-charging-end-of-tenancy-co` | Keep | SERVES_LANDLORD | weak: adds tenant damage duty |
| `ev-charging-requirements-co` | Keep | SERVES_LANDLORD |  |
| `ev-charging-shared-area-co` | Keep | SERVES_LANDLORD |  |
| `radon-disclosure-co` | Keep | REQUIRED_DISCLOSURE: C.R.S. § 38-12-803 |  |
| `source-of-income-statement-co` | Keep | REQUIRED_DISCLOSURE: C.R.S. § 38-12-801(2.5) | optional (small-landlord exemption); track statutory wording |
| `utility-allowance-cap-co` | Keep | CONSTRAINED_TERM |  |

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Retro checks (SOP 1.16)

**Date:** 2026-10-01. **Settings:** Opus, high effort; research mode not turned on — the rule 9
triggers were not reached, because the official whole-title corpus answered every proof-of-absence
and ambiguity question directly (see Sources below).

**Scope.** The 18 [Retro] rules and 4 targeted fixes in the staged prompt only. Nothing else
reopened (rule 1). Gate check: the attached `lease-clauses.csv` has **2,169 data rows**, matching the
prompt — proceeded. Old output files in this chat deleted first (rule 8): 5 decision-log/checklist
`.md` files and 5 `steinoak_clauses_updated_*.csv` files, listed in the chat.

**Sources and corpus (rules 11, 14, 16, 19).** Official 2026 Colorado Revised Statutes, published by
the Colorado General Assembly's Office of Legislative Legal Services as whole-title HTM downloads
(`content.leg.colorado.gov` → `olls.info/crs/crs2026-title-NN.htm`). Loaded and proved complete
against each file's own article index: **Title 38** 3,614,131 chars / 1,209 distinct sections /
Art. 1–53; **Title 13** 4,470,074 chars / 1,287 sections / Art. 1–100 (Art. 40 complete,
13-40-101…128); **Title 24** 11,996,772 chars; **Title 6** 1,373,494 chars; **Colorado
Constitution** (title-00) 4,512,679 chars. Every section relied on was read section-open with an
extractor anchored on the section's **own header line**, returning each occurrence so the part
table-of-contents entry is distinguishable from the body. A nonsense control term returned 0 on every
battery, so the engine reports true empties.

*Channels tried and why each failed (rule 19).* Workspace shell → `olls.info`,
`content.leg.colorado.gov`, `colorado.public.law`, `law.justia.com` all refused at the egress proxy
(CONNECT tunnel 403). `colorado.public.law` in the browser served one page then a persistent
Cloudflare bot challenge; `law.justia.com` challenged on the first page; neither bypassed. WebFetch
permission prompt went unanswered. Resolved by using the official OLLS whole-title HTM in the browser
pane. *Method note, weaker than prescribed (rule 14):* because the shell cannot reach the host, the
browser-to-disk SHA comparison was not available; the saved record
(`src/CO-2026-CRS-reads.md`) is a transcription of the browser-read text with every relied-on
sentence quoted and every history line captured.

**Standing caveats.** No attorney review. Municipal/local ordinances out of scope (rule 3).
Federal deferred except items already live. Case law was not read in the reporters; every
case-based proposition below is flagged as unread doctrine.

---

### The 18 checks

1. **Rule 40 — formatting and placement. FIXED; the largest finding of this retro.** CO's log had no
layout table and no record of this screen. Battery over Art. 12 of Title 38 and Art. 40 of Title 13
(`conspicuous`, `bold/boldface`, `underlined`, type-size forms, `separate document`, `capital
letters`, `first page`, prescribed-form phrases; control 0). Every "bold-faced type" hit in Title 13
is on a **court summons** (§ 13-40-111(4)) or an unrelated medical-malpractice section — none on
lease text. Title 38 produced three real hits, **two of them mandatory lease content that no CO row
carried**: **§ 38-12-505(3)(c)** and **(3)(d)** (added by SB 24-094, ch. 158, p. 713, § 5, eff.
2024-05-03; lease duty operative **2025-01-01**) require *every* rental agreement to include, in at
least **twelve-point bold-faced type**, (c) a statement that every tenant is entitled to safe and
healthy housing under the warranty of habitability and that the landlord may not retaliate for
reporting unsafe conditions, requesting repairs or asserting that right; and (d) **in English and
Spanish**, a statement giving **both** a mailing/personal-delivery address **and** an email address
or accessible online tenant portal for written notice of an uninhabitable condition. The third hit is
the radon warning statement (check 9). Rows: **new `habitability-rights-statement-co`** (the (3)(c)
statement); **`habitability-notice-co` rewritten** for (3)(d) — it had four defects (rule_type
RECOMMENDED for a REQUIRED statement; no Spanish; one channel where the statute requires two; and the
2026-09-29 three-bucket scrub had removed exactly the warranty/retaliation sentences (3)(c) requires
*in* the lease); **new `edu-habitability-lease-statements-co`** for the type-size, dual-language and
§ 38-12-505(3)(e) portal-posting mechanics. Layout table below.

2. **Rule 41 — just cause. FIXED.** Part 13 read in full. CO **is** a just-cause state and
§ 38-12-1303(2)(c) gives the hold-over-after-expiration ground (§ 13-40-104(1)(c)) **only** for
nonresidential premises and for residential premises exempt under § 38-12-1302(1)(a), (b), (d), (e),
(f) — so for a covered tenancy **expiration of the Term is not cause**, and § 38-12-1305 voids any
lease provision purporting to waive or modify Part 13 (§ 38-12-1306: the court "shall dismiss the
eviction proceeding"). Screened the prompt's seven starting points: `holdover` **passes** (fully
self-limiting — "any remedy allowed by applicable law", "maximum amount permitted by applicable
law"); `keys`, `security-deposit-use`, `no-alterations`, `early-termination`,
`month-to-month-notice-co-exempt`, `month-to-month-notice-co-covered` — no end-of-term-possession
assertion, no change. **`surrender-end-of-term` fails in CO**: its unqualified "Upon the expiration or
earlier termination of this Lease, Tenant will surrender possession" is the provision § 38-12-1305
reaches. Shared text untouched (rule 62): **CO removed from its `states`** and **new
`surrender-end-of-term-co`** written to supersede it, worded to work for both covered and exempt CO
tenancies. Rule 28 note: `surrender-end-of-term-nj` was read and considered (written for NJ's
Anti-Eviction Act) but omits expiration entirely, which understates an exempt CO landlord's rights.
41b is already satisfied — `edu-for-cause-eviction-co` carries `topic_key: for-cause-eviction`.

3. **Rule 42 — required text inside a shared clause. FIXED.** Four statutes force text into a CO
lease: § 38-12-801(2) (landlord/agent name and address), § 38-12-801(2.5)(a) (source-of-income
statement — `source-of-income-statement-co`, already correct), § 38-12-505(3)(c)/(3)(d) (check 1),
and § 38-12-105(1)(c) (the late fee must be disclosed in the rental agreement — met by the shared
`late-fee` clause stating the landlord's amount). § 38-12-801(3)(a)(II) also *forces* mutual
prevailing-party fee wording, which `default-by-tenant` has. **Gap found:** CO had **no row** on the
`owner-identity-disclosure` topic although 24 of the other 25 states do and § 38-12-801(2) plainly
requires the statement in the agreement — the existing `edu-identity-change-notice-co` covers only
the separate one-business-day change-notification duty. Row: **new `owner-identity-disclosure-co`**.
No small-landlord carve-out applies (the § 38-12-801(4) and (8) exemptions reach only subsection (3)).

4. **Rule 43 — cure promises. Checked, no CO issue.** § 13-40-104 read section-open. CO **does**
require pre-suit notice for nonpayment — 10 days (3 nonresidential/employer-provided, **5 for an
"exempt residential agreement"**) — and (1)(d) adds "No such agreement shall contain a waiver by the
tenant of the notice requirement". `default-by-tenant`'s rent limb ties cure to "the time period
specified by applicable law after receiving written notice from Landlord", which tracks the statute
and adds nothing by contract in CO. Its non-rent limb already carries the no-cure carve-out added at
the FL sync, which does reach CO's no-cure routes (§ 13-40-104(1)(d.5) substantial violation per
§ 13-40-107.5, and (1)(e.5)(II) repeat violation of the same covenant, terminable "at any time",
effective 10 days after notice, with no cure right). `application-of-payments` and `early-termination`
screened; no CO cure-promise defect. The structural point AL's retro raised — the carve-out should be
its own sentence reaching every limb — costs CO nothing and is left as a rule 62 proposal below.

5. **Rule 44 — terms the statute turns into landlord duties. PRESENT, one hit, already covered.**
Art. 12 battery for "as provided/specified/agreed in the rental agreement" and "required or permitted
by the rental agreement" returned exactly one: **§ 38-12-503(3)(f)(I)** — a tenant's habitability
notice "is sufficient if the notice is provided to the landlord in a manner that is required or
permitted by the rental agreement or by any property rules or regulations", with (3)(f)(II) waiving
the landlord's right to written notice if the lease designates a verbal method. So every channel the
lease names becomes a channel that counts. This bites harder now that § 38-12-505(3)(d) *mandates*
an email/portal channel; recorded in the rewritten `habitability-notice-co` and the new
`edu-habitability-lease-statements-co`. Existing `edu-written-notice-strictly-required-co` holds.

6. **Rule 45 — electronic notices. FIXED.** Read Colorado's Uniform Electronic Transactions Act
itself, not only the landlord-tenant sections referring to it. **§ 24-71.3-103(3)(b)(II)** excludes
from the Act "Any notice of … Default, acceleration, repossession, foreclosure, or eviction, or the
right to cure, under a credit agreement secured by, or a rental agreement for, a primary residence of
an individual"; (3)(b)(I) excludes utility cancellation/termination notices. Also § 24-71.3-105(2),
(3) (applies only between parties who each agreed; the right to refuse a later electronic transaction
"may not be waived by agreement") and § 24-71.3-108(1), (3), (4) (electronic satisfies a writing
requirement only if retainable at receipt; unenforceable if the sender inhibits printing or storing;
"The requirements of this section may not be varied by agreement"). Clause screen: **no CO-tagged
clause relies on electronic delivery of an excluded notice.** The shared `notices` row is what
protects the library — its closing sentence ("nothing in this Lease designates an alternative method
of delivery for any notice governed by law") is load-bearing in CO and must not be trimmed.
`landlords-access-co`'s "written or electronic" bed-bug notice is **not** an excluded notice and is
expressly authorised by § 38-12-1004(1)(a). CO had no row on `notice-delivery-methods`; row: **new
`edu-electronic-notices-co`**.

7. **Rule 46 — the lease as the required notice. PRESENT, resolved in checks 1 and 9.**
§ 38-12-505(3)(c) and (3)(d) are the clearest instance in the library: the statute names *the rental
agreement* as the vehicle, so the lease clause is mandatory, not an option — handled in check 1.
Radon runs the other way (check 9). No shared clause promises a separate notice that conflicts.

8. **Rule 47 — penalties for knowingly using a prohibited term. PRESENT, and stricter than the rule
assumes.** Three sanction regimes, none conditioned on knowledge: **§ 38-12-801(3)(b)** — any
provision included in violation of subsection (3) "is void and unenforceable"; **§ 38-12-105(2)–(6)**
— a non-complying late-fee provision is void, **$50 per violation** under (3), a 7-day cure from
written notice under (4), then **$150–$1,000 per violation plus costs and reasonable attorney fees**
under (5), and an affirmative defense in an FED under (6); **§ 38-12-1305/1306** — a Part 13 waiver
is void and non-compliance means the court "shall dismiss the eviction proceeding". A "nothing in
this lease limits your rights" sentence saves none of it. Screened the prompt's four starting points:
`late-fee` is the live exposure point because the scrub left it as landlord-supplied `{{variables}}`
with the statutory guardrails only in education — the figures are a builder range check (backlog
M.13) but the surrounding conditions were under-recorded, so **`edu-late-fee-limit-co` extended** with
§ 38-12-105(1)(g), (1)(h), **(1)(i)** and the whole (2)–(6) enforcement structure. **(1)(i) ("Recoup
any amount of a late fee from a rent payment") is the Colorado statutory basis for the shared
`application-of-payments` rent-first ordering, which the citations file had recorded as GENERIC with
no CO citation** — noted. `early-termination`, `notices`, `common-area-use`: no prohibited term.

9. **Rule 48 — separate-document requirements. FIXED, two instances.** (a) **§ 38-12-803(2)(a)**
requires the radon disclosure *before signing*, "in a document that the tenant signs to acknowledge
receipt", comprising (I) a warning statement "in bold-faced type that is clearly legible in
substantially the same form as is specified", (II) all the landlord's radon knowledge including
current records and reports and any mitigation-system documentation, and (III) a copy of the CDPHE
brochure under § 25-11-114(2)(a); (2)(b) requires the tenant to acknowledge by signing it. A lease
clause cannot be that document. **`radon-disclosure-co` rewritten** from a disclosure into an
acknowledgment that the separate pre-signing document and brochure were received — which is lawful
and gives the landlord written proof. This is a **product item**: Steinoak must generate the separate
signed radon document, or § 38-12-803(2) is not discharged and § 38-12-803(3)(a)(I) lets the tenant
void the lease. (b) **§ 13-40-110(1)(b)**: a tenant may voluntarily waive mandatory pre-filing
mediation "but a waiver must not be in any lease agreement or other agreement", reinforced by
§ 38-12-801(3)(a)(III)(E), with a mediation-cost recoupment ban in § 38-12-801(3)(a)(VII) and
dismissal without prejudice under § 13-40-110(1)(d). Row: **new `edu-mandatory-mediation-co`**.

10. **Rule 49 — collection-cost bans. Checked, no CO ban; one phrase flagged.** "costs of collection"
returns 0 across Art. 12; the four "collection" hits are mobile-home utility collection, DV debt
assignment, the habitability affirmative defense and mobile-home water billing. CO's only limits are
§ 38-12-801(3)(a)(I) (no penalty stemming from an eviction notice or action) and (3)(a)(II) (no
one-way award of attorney fees **and court costs**). `default-by-tenant`'s final sentence is mutual
and satisfies (3)(a)(II). Its remedies sentence, however, lets Landlord recover "reasonable costs and
expenses" **one-way**; on CO's text that phrase, if it reaches eviction-related costs, is arguable
under (3)(a)(I)/(3)(a)(II) and would be void under (3)(b) — PLAUSIBLE, not confirmed, and the row is
shared with 17 other states, so it goes below as a rule 62 proposal rather than an edit.

11. **Rule 50 — "the lease controls" wording. Checked; two hits, both chosen on purpose.** Art. 12
battery for "if the lease/rental agreement so provides", "if permitted by the rental agreement",
"unless otherwise agreed" returned exactly one — **§ 38-12-503(11)**, the landlord's
environmental-public-health-event termination, available only "if permitted by the rental agreement";
already `environmental-event-termination-co` (silence forfeits it). The second is
**§ 38-12-1004(1)(a)**'s "except that a rental agreement may provide for a different minimum time for
the notice", which `landlords-access-co` uses. A third, § 13-40-110(1)(b), runs the other way (the
lease may *not* carry the mediation waiver — check 9).

12. **Rule 51 — plain-language and consumer-contract statutes. Confirmed absent; CCPA reach
confirmed.** Title 6 searched in full: "consumer contract" **0 hits**; "plain language"/"readable"
hits are § 6-1-105(1)(m) (sales receipts), § 6-1-203 (collision damage waiver forms) and case-law
annotations using the phrase as a canon — **no plain-language act reaching residential leases**.
"blank space" 1 hit, in the prize-and-sweepstakes provisions, not contracts; the copy-at-signing
duties found are industry-specific (health clubs, dance studios, dating services, assisted living),
not leases — so the CCPA's unfair-practice list does **not** carry the blank-space or
copy-at-signing items. CO's real copy duty is § 38-12-801(1) (`edu-lease-copy-duty-co`). The CCPA
**does** reach leases: § 6-1-102(20) defines "Property" as real or personal property, both,
intangible property and services, and § 6-1-737 is titled "…landlords and tenants". Also recorded:
§ 6-1-105(1)(hhhh) makes a violation of Part 17 (AI Act) a deceptive trade practice. Rows: **new
`edu-no-lease-completeness-rule-co`** (check 17); § 6-1-737 content already in
`edu-total-price-disclosure-co`, `edu-fee-unprovided-service-co`, `edu-fee-free-payment-method-co`,
`edu-rubs-uncertainty-co`.

13. **Rule 52 — exculpation. Checked, no change; CO keeps the base clauses.** Colorado does **not**
void "Landlord is not liable" terms generally. § 38-12-801(3)(a)(III) voids waivers of the implied
covenants of good faith and fair dealing (C) and quiet enjoyment (D) — and (D) **expressly permits**
the opposite of what the rule feared: "a written rental agreement may provide that the landlord is
not responsible for any violation of the implied covenant of quiet enjoyment that is committed by a
third party acting beyond the reasonable control of the landlord". So the shared
`services-utilities-provided` ("…resulting from causes beyond Landlord's reasonable control") sits
inside an express statutory permission. `tenants-property-insurance`, `parking`, `storage-space`,
`pet-policy` screened: none waives a Part 5 right (§ 38-12-503(10)) or a Part 1 deposit benefit
(§ 38-12-103(7)(a)); `pet-policy`'s "without liability to Tenant **to the extent applicable law
permits**" is already self-limiting from the ND pass. **The `-ks-oh-ca` / `-ks-oh` variants are not
needed for CO.** Boundary flagged: Colorado's **common-law** limits on exculpatory clauses (the
*Jones v. Dressel* factors, and *Boles v. Sun Ergoline* on releases of liability for future
negligence) are **unread doctrine** — a flat "Landlord is not liable for any such loss or damage" for
the tenant's own property is a statutory pass here but a case-law question I have not answered.

14. **Rule 54 — optional clauses, general screen.** Found, with verdicts: **mutual prevailing-party
attorney-fee clause** — OFFERED (in `default-by-tenant`); under § 13-40-123 a prevailing residential
party gets no fees "unless the residential rental agreement … contains a provision for either party
to obtain attorney fees", so silence forfeits them, and § 38-12-801(3)(a)(II) voids the one-way
version — the exact "right that exists only if the lease invokes it" shape (`edu-fee-shifting-co`
extended). **Landlord's environmental-event termination**, § 38-12-503(11) — OFFERED
(`environmental-event-termination-co`); silence forfeits it. **Shorter bed-bug entry notice**,
§ 38-12-1004(1)(a) — OFFERED (`landlords-access-co`). **Third-party quiet-enjoyment disclaimer**,
§ 38-12-801(3)(a)(III)(D) — OFFERED in substance via `services-utilities-provided`; a broader
stand-alone disclaimer NOT offered because (D) would void it (`edu-quiet-possession-co`).
**Jury-trial waiver for a possession hearing**, § 38-12-801(3)(a)(III)(A) ("except that the parties
may agree to a waiver of a jury trial in a hearing to determine possession of a dwelling unit") —
**lawful, and now OFFERED** as `jury-waiver-possession-co` on Taylor's decision (Q3 below): drafted
to the carve-out and no further, mutual rather than one-sided, optional per lease and never a
default, and scoped away from mobile-home-park tenancies because the Mobile Home Park Act was not
read. **Actual losses for a tenant's failure to give nonrenewal notice**, § 38-12-801(3)(a)(IV) —
**NOT offered as a clause; the content is education** (Q4 below, resolved on Taylor's call). Two
reasons the clause failed the rule 55 test: the notice duty the carve-out needs already exists in both
CO termination-notice clauses, so a clause adds no hook; and the content itself is a restatement of a
statutory **ceiling** in the tenant's favour, which the restatement check and this project's
statutory-ceiling rule both send to education. Carried in the new `edu-prohibited-lease-terms-co`. **Full waiver of the bed-bug entry notice**, § 38-12-1004(1)(b) — lawful on the text,
NOT offered (the shorter-minimum route reaches the same result without asking the tenant to give up a
right at signing) — recorded in `edu-bed-bugs-co`. **Landlord self-cure / charge-as-rent** — no
statutory basis, and § 38-12-801(3)(a)(V) would bar the "as rent" part (`edu-no-landlord-self-cure-rule-co`).
**Homestead/exemption waiver** — **"n" for CO**: § 38-41-202(2) lets a homestead exemption be
released only by a writing signed by "the party who could convey said property", i.e. the owner, and
treats a waiver in a lien instrument as mere subordination; a tenant has no homestead in the rented
home to waive and a lease is not a lien instrument, so the clause would do nothing. (Boundary: the
personal-property execution exemptions at § 13-54-102 were not screened for waivability.)
**Holdover rate** — "n": no statutory measure to stipulate against, and the shared `holdover` row is
already self-limiting (see `edu-holdover-co`). **Casualty termination** — "n" beyond
§ 38-12-503(11), per the confirmed absence in `edu-casualty-habitability-co`.

15. **Rule 54t — tenant-caused damage. Checked; law covers it, education row added.** Colorado puts
the tenant-fault exception in **one** place that gates all of Part 5 rather than remedy by remedy:
**§ 38-12-503(9)** — a condition "substantially caused by the misconduct of the tenant", a household
member, guest, invitee or person under the tenant's direction or control "does not constitute a basis
for a breach of the warranty of habitability", with a carve-out where the condition resulted from
domestic violence, domestic abuse, unlawful sexual behavior or stalking and the landlord has notice.
Because every § 38-12-507 remedy — (1)(a) 10-to-60-day termination, (1)(b) recurrence termination,
(1)(c) repair-and-deduct and appliance replace-and-deduct, (1)(d) damages including reduction in fair
rental value, (1)(e) injunctive relief — is predicated on a breach of that warranty, tenant fault
switches all of them off at once; and § 38-12-503(7) makes the landlord responsible at the landlord's
expense "except as described in subsection (9)". So checking each provision separately produced no
divergence in CO. No casualty escape: "casualty", "damaged by fire", "fire or other" return **0**
across Art. 12, consistent with `edu-casualty-habitability-co`. **No CO version of
`tenant-caused-damage-tn` offered** (read, not tagged): the law already allocates repair cost and
abatement, and a clause reaching further risks § 38-12-503(10) and the § 38-12-801(3)(a)(I)
eviction-penalty ban. Row: **new `edu-tenant-caused-damage-co`**. Boundary: common-law measures for
lost rent not researched.

16. **Rule 35c — constitution screen. Checked; the verdict is the opposite of Missouri's.** Loaded
the Colorado Constitution (title-00, 4.5M chars) and searched cannabis/marijuana, firearms,
speech/signs and privacy; control 0. The only provision reaching residential leases is
**art. XVIII, § 16(6)(d)**, which *preserves* the clause rather than voiding it: "Nothing in this
section shall prohibit a person, employer, school, hospital, detention facility, corporation or any
other entity who occupies, owns or controls a property from prohibiting or otherwise regulating the
possession, consumption, use, display, transfer, distribution, sale, transportation, or growing of
marijuana on or in that property." So **the shared `smoking-policy`'s marijuana and vaping ban is
constitutionally safe in Colorado** — Missouri's art. XIV problem does not arise. § 16(8) makes the
section self-executing, severable and superior to conflicting state and local provisions.
Art. II, § 13 (right to bear arms) binds the state, not a private landlord, and the annotations
confirm it is not absolute; art. II, § 10 (speech) is likewise state action; the 171 "privacy" hits
are Fourth-Amendment search annotations. No clause fixed or overridden. Boundary: Title 18 was not
searched for a statutory firearms-in-rentals rule, and CO has no firearms row.

17. **Rule 27 — the seven topics. All seven now answered; CO had a row for none of them.**
**`algorithmic-rent-setting` → PRESENT** — not a rent-cartel statute but something broader: the
Colorado AI Act, § 6-1-1701 et seq., regulates systems making or substantially contributing to a
"consequential decision", and § 6-1-1701(3)(f) lists **Housing**; deployer duties at §§ 6-1-1702 to
1705; a Part 17 violation is a deceptive trade practice (§ 6-1-105(1)(hhhh)) with CCPA treble-damages
exposure. **Dual-version, future-dated (rule 16):** the official 2026 compilation prints both the
current § 6-1-1701 ("effective until January 1, 2027") and the **SB 26-189** (ch. 131, L. 2026)
repeal-and-reenactment, whose § 5(3) applies it "to consequential decisions made on or after January
1, 2027" with a narrower "covered domain" structure — both dates stated in the row, flagged for the
legal watch. New `edu-ai-consequential-decisions-co`. **`fees-as-rent` → PRESENT** — see below.
**`landlord-self-cure` → Confirmed absent** (battery: "landlord may cure/perform", "cure the
tenant/violation and", "charge the cost of/as rent" — 0 across Art. 12; boundary: Art. 12 of Title 38
and Art. 40 of Title 13, not case law or local codes). New `edu-no-landlord-self-cure-rule-co`.
**`lease-completeness` → Confirmed absent** as a blank-space rule (see check 12), with CO's real
copy and content duties pointed at. New `edu-no-lease-completeness-rule-co`. **`quiet-possession` →
PRESENT** — no express statutory covenant, but § 38-12-801(3)(a)(III)(D) makes a lease waiver of the
implied covenant void and supplies the one disclaimer CO allows. New `edu-quiet-possession-co`.
**`statutory-forms` → PRESENT** — § 38-12-803(2)(a)(I) radon warning ("in substantially the same
form", bold-faced), § 38-12-801(2.5)(a) SOI statement, § 38-12-505(3)(c)/(d), and
§ 13-40-110(1)(a) the judicial department's standard eviction complaint and affidavit (with (1)(f)
allowing a conforming alternative); no prescribed *lease* form. New `edu-statutory-forms-co`.
**`tenant-security-cameras` → Confirmed absent** (0 across Art. 12 and Art. 40; boundary: not Title
18 wiretap/eavesdropping, not case law). New `edu-no-tenant-camera-rule-co`.

  **`fees-as-rent` deserves its own paragraph, because it corrects a live error.**
  **§ 38-12-801(3)(a)(V)** forbids "A provision that characterizes any amount or fee set forth in the
  rental agreement, with the sole exception of the set monthly payment for occupancy of the premises,
  as 'rent' for which all remedies to collect rent, including eviction, are available. Such amounts
  and fees include any fees for utilities or services and any other charge that is not rent", and
  (3)(b) makes a violating provision void and unenforceable; § 38-12-105(7) says the same for late
  fees. The library uses an **undefined capitalised "Rent"** across `rent-payment`, `due-at-signing`,
  `application-of-payments` and `default-by-tenant`, while `pet-policy` charges "pet rent" — so on CO's
  text a tenant can argue the lease characterises fees as Rent with eviction available. Rows: **new
  `rent-definition-fees-not-rent-co`** (a lease clause narrowing "Rent" for remedy purposes — chosen
  over forking the 8-state shared `pet-policy`, because one CO clause cures the characterisation for
  the whole lease) and **new `edu-fees-not-rent-co`**. This resolves the pet-rent question carried
  open in this project: **§ 38-12-106(2) lets you charge pet rent up to the greater of $35/month or
  1.5% of monthly rent, and § 38-12-801(3)(a)(V) forbids evicting for it.** The widely-copied
  guidance that unpaid CO pet rent supports a 10-day demand and an eviction is wrong on the enacted
  text. Carve-outs recorded (rule 32): § 38-12-801(4) mobile home in a park, § 38-12-801(8)
  owner-occupied duplex/triplex/ADU.

18. **Rule 79 — summaries re-read. 10 candidates screened; 2 confirmed defects, 2 basis upgrades,
1 could not be reached.** The citations file has 118 rows; 10 CITED rows carried a weak-basis marker
("N sources agree", "fetch-tool summary", "not independently re-confirmed", "not isolated",
"moderate", "Justia"). **`edu-holdover-co` — CONFIRMED DEFECT, the start point.** § 13-40-123 read in
full: it is headed "Damages" but sets **no holdover measure at all**; its operative residential rule
is an **attorney-fee precondition** — a prevailing residential landlord or tenant "shall not be
entitled to recover reasonable attorney fees unless the residential rental agreement between the
parties contains a provision for either party to obtain attorney fees". The row's "no multiplier"
finding **holds**, but as a confirmed absence across Art. 40, not on this section's authority. Row
**re-based**, the Justia confidence caveat retired, and *Behr v. Burge* retained but flagged under
rule 21 as a case annotation not read in the reporter. **`edu-radon-lease-length-co` — CONFIRMED
DEFECT** of the exact WY shape (a rule cited to the wrong subdivision): the row cited
§ 38-12-803(3)(b) for the 180-day/void-the-lease rule; **(3)(b) is the carve-out** ("On or after
January 1, 2026, this subsection (3) does not apply to a lease agreement that is one year or less in
duration") and the rule is at **(3)(a)**, with the 180-day limb at **(3)(a)(II)**. Corrected, and the
consequence sharpened — "one year or less" means an ordinary **12-month lease escapes subsection (3)
entirely**, which the row had not said. **`landlords-access-co` — HOLDS, basis upgraded**:
§ 38-12-1004(1)(a) had been read only through a fetch-tool summary; read section-open it confirms a
48-hour floor for written or electronic notice "except that a rental agreement may provide for a
different minimum time", which is the choice the clause makes. **`edu-bed-bugs-co` — the outstanding
"due a direct official read" is discharged**, same section, plus the (1)(b) tenant-waiver verdict.
**`edu-mobile-home-park-carveout-co` — HOLDS**: § 38-12-103(12) read verbatim, subsections (1.5) and
(11) do not apply to a mobile home in a mobile home park; the same history line independently
re-confirms that HB25-1249 added (1.5), (2.5), (3.5), (8)–(12) and **no installment-payment
subsection**, corroborating the earlier removal of `security-deposit-installments-co`, and shows the
**ten-year** carpet rule verbatim. **`edu-ev-charging-rights-co` — HOLDS, subsections now isolated**
(previously "subsections not isolated"): § 38-12-601(1)(b) no fee for placement or use with the three
reimbursement exceptions, (1)(c) no parking restriction based on a plug-in or electric vehicle, (2)
the landlord's permitted safety/registration/aesthetic requirements, (3) shared-area conditions
including the 14-day certificate of insurance, (4) successive-tenant responsibility, (5) the system
is the tenant's property and removable at termination, (7) applies to residential and commercial.
**`bed-bug-disclosure-co` — HOLDS** (the unisolated subsection within § 38-12-1005 is cosmetic).
**`edu-subsidy-habitability-proration-co` — unchanged, caveat stands**: § 38-12-507 was read, but the
row's open point is whether a Senate floor amendment excluding the subsidy-paid portion carried, which
rests on the DRE's post-enactment summary rather than the enrolled text; not resolvable from the
compilation. **`edu-dv-lease-termination-co` — COULD NOT BE REACHED at the pinpoint, left as is and
marked**: § 38-12-402(2)(a) and (2)(a.5)(I)(A)–(B) were read section-open (self-attestation affidavit;
qualified-third-party letter), but the subparagraph carrying the **60-day police-report** figure was
not reached this pass, so the row stands unchanged. **Finding for the file:** 28 of the 118 citation
rows have **no recorded basis at all** (empty `notes`), so rule 79's screen cannot be completed for
them from the citations file — several were independently confirmed as a by-product of this retro
(§ 38-12-106 pet caps, § 38-12-509 retaliation, § 38-12-510 unlawful removal, § 38-12-801(2),
§ 38-12-103(12)), but the rest remain unscreened.

---

### Layout and placement table (rule 40)

| Requirement | Citation | Applies to | Carried by |
|---|---|---|---|
| Statement of right to safe and healthy housing + no-retaliation, **≥12-point bold-faced type**, in every rental agreement, from 2025-01-01 | § 38-12-505(3)(c) | Every residential lease | **`habitability-rights-statement-co`** (new) |
| Uninhabitable-condition notice addresses — mailing/personal **and** email or online portal — **in English and Spanish**, **≥12-point bold-faced type**, from 2025-01-01 | § 38-12-505(3)(d) | Every residential lease | **`habitability-notice-co`** (rewritten) |
| Same statement posted **conspicuously inside the online tenant portal**, English and Spanish | § 38-12-505(3)(e) | Landlords offering a portal | `edu-habitability-lease-statements-co` (new) — operational |
| Radon warning statement, **bold-faced type**, "clearly legible in substantially the same form as is specified", in a **separate pre-signing document the tenant signs**, with the CDPHE brochure | § 38-12-803(2)(a)(I)–(III), (2)(b) | Every residential lease | **`radon-disclosure-co`** (rewritten to an acknowledgment) + product item |
| Source-of-income statement (prescribed content) | § 38-12-801(2.5)(a) | Non-exempt landlords | `source-of-income-statement-co` |
| Landlord/agent name and address statement | § 38-12-801(2) | Every written rental agreement | **`owner-identity-disclosure-co`** (new) |
| Late fee "disclosed in the rental agreement" | § 38-12-105(1)(c) | Any lease charging a late fee | shared `late-fee` |
| Signed copy to tenant within 7 days | § 38-12-801(1) | Every written rental agreement | `edu-lease-copy-duty-co` |
| **No** type-size, underlining, first-page, capital-letters or separate-document rule beyond the above | batteries over Art. 12 / Art. 40, control 0 | — | — |

No two requirements compete for the same place (rule 40's tie-break with Taylor is not needed): the
two § 38-12-505(3) statements are both bold-faced but have no placement rule, and radon is a separate
document.

---

### The 4 targeted fixes

19. **Scrub-trimmed clauses (rule 78 with rule 47).** Verdict per clause.
 - **`rent-increase-notice-co` — RESTORED.** The scrub left only a landlord-supplied notice period.
   § 38-12-702 caps increases at **one per twelve-month period and applies regardless of agreement**
   (unlike § 38-12-701(2)'s 60-day default, which applies only absent a written agreement). A
   landlord entering a lawful-looking "30 days" could satisfy the clause and still breach § 38-12-702
   by raising rent twice in a year — a **frequency** condition no range check on a single
   notice-period field can catch. Frequency condition and a no-mid-term-increase statement restored;
   also widened from month-to-month only, since § 38-12-702 is not limited to periodic tenancies.
 - **`month-to-month-notice-co-exempt` — RESTORED, and a defect the scrub did not cause.**
   § 38-12-1302(1)(e) exempts "a residential tenant who has not been a tenant of a residential
   premises for at least twelve months" — an exemption that **expires mid-tenancy**. A landlord who
   filled the bracket with (1)(e) at signing had a clause true in month one and false from month
   thirteen, at which point acting on it means a no-cause termination § 38-12-1303(1) forbids and
   § 38-12-1306 turns into dismissal. The clause now self-limits to the period the exemption actually
   applies and names the twelve-month trap explicitly.
 - **`month-to-month-notice-co-covered` — checked, no text change**, and **its UNRESOLVED FLAG is now
   RESOLVED.** The flag asked "by what route (if any) may a covered residential landlord terminate
   without cause in months 0–12". Answer: **there is no gap** — months 0–12 *are* exempt under
   § 38-12-1302(1)(e), so the exempt variant governs them; from month twelve the landlord needs cause
   under § 38-12-1303(2) or a no-fault ground under § 38-12-1303(3) with 90 days' notice (45 where
   the landlord is on active military duty or is such a person's spouse). Part 13 was read
   section-open in full. The two clauses were also both active on `termination-notice` with no
   `choice_group`, which the integrity check read as a same-topic pair; they are a **coverage pair
   keyed to a property-and-tenancy fact**, not a legal-strategy choice, so `choice_group:
   co-part13-coverage` was added (matching `ca-tpa-coverage` and the `tn-urlta-*` pairs) with the
   **covered** variant as `is_default TRUE` per rule 32, since it claims no landlord right and is
   safe if the exemption is mis-set.
 - **`utility-submetering-disclosure-co` — no restore needed.** The condition a number check cannot
   catch survived: § 38-12-801(3)(a)(VI) permits ≤2% of the billed amount **or** ≤$10/month "but not
   both", and the bracket reads "[state one: …]". The figures are a builder range check. Boundary
   recorded: the clause carries § 6-1-737(4.5)(d), one of four RUBS safe-harbour conditions;
   (4.5)(a)–(c) are billing-practice conditions, not lease content, and were not read this pass.
 - **`security-deposit-return-co` — no restore needed.** Both uncatchable conditions survived: the
   clock still runs from "the later of the termination of this Lease or Tenant's surrender", and the
   written statement of exact reasons is still promised. The 30/60-day choice is the choice
   § 38-12-103(1) leaves to the lease, and this clause is the instrument providing it.

20. **Scrub-switched-off REQUIRED/CONDITIONAL clauses (rule 78 with rule 46). All three correctly
left as education; nothing restored.** `dv-stalking-termination-co` — § 38-12-402 contains a
**prohibition** on a contrary lease provision and a non-waivable right to call for assistance, but
**no required lease statement**; the clause only restated a right the law gives anyway
(`edu-dv-lease-termination-co`, `edu-police-call-waiver-co`). `ev-charging-rights-co` —
§ 38-12-601 operates "Notwithstanding any provision in the lease to the contrary" and requires no
lease statement; education is correct, and the lease-side pieces the landlord *does* benefit from
(§ 38-12-601(2) requirements, (3)(b) shared-area written undertakings) are already live in
`ev-charging-requirements-co`, `ev-charging-shared-area-co`, `ev-charging-end-of-tenancy-co`.
`subsidy-habitability-proration-co` — § 38-12-507 and § 38-12-503 impose no lease-statement duty;
education is correct. *Contrast with check 1:* `habitability-notice-co` is the clause the scrub
**did** damage, because § 38-12-505(3)(c)/(3)(d) names the rental agreement as the vehicle — the
scrub-switched-off list did not include it, and it was found by the rule 40 battery instead.

21. **Rule 62 vetting — `returned-payments`, "during the Term" → "during any 12-month period".**
**Lawful in Colorado; CO supports the change.** No Colorado statute speaks to how many dishonored
payments may trigger a change of payment method; the dishonored-instrument statute § 13-21-109
governs the charge, not the count, and the clause's fee is already self-limiting to "the maximum
amount permitted by applicable law". The reasoning behind AZ's proposal is if anything stronger here:
Colorado tenancies routinely have no stable "Term" — § 38-12-1302(1)(e) makes the first twelve months
of *every* covered tenancy a distinct regime, and § 13-40-107's notice tiers are keyed to tenancy
length rather than a term — so a rolling 12-month window is the measure that actually works. One CO
note for the merge: the returned-payment charge is **not rent** (§ 38-12-801(3)(a)(V)), which the new
`rent-definition-fees-not-rent-co` states. Shared text not edited.

22. **Rule 62 vetting — `early-termination`, the landlord limb.** **WY's proposed wording is lawful
in Colorado, and yes — the current promise gives up a shorter statutory route that Colorado
provides.** The clause promises "at least 30 days' written notice" plus a "10 days" cure before
terminating for a material breach. Colorado's statutory route for a material lease violation is a
**10-day** notice requiring compliance **or** possession (§ 13-40-104(1)(e)) — **5 days** for an
"exempt residential agreement", 3 for nonresidential or employer-provided housing — and for a
**repeat** violation of the same condition or covenant after such a notice, § 13-40-104(1)(e.5)(II)
lets a residential tenancy be terminated "at any time", effective **10 days** after service of
written notice to terminate, **with no cure right at all**. A bargained 30-day notice plus a 10-day
cure is therefore materially more than Colorado requires and, as a contract promise, binds the
landlord to it. Adding "…or such shorter notice and cure period as applicable law permits" recovers
the statutory route and conflicts with nothing in Colorado law. One caveat for the merge: in Colorado
the shorter route still has to clear Part 13 — a material violation **is** cause
(§ 38-12-1303(2)(f) → § 13-40-104(1)(e)), so the route is available to covered landlords too, but a
no-cause early termination is not. Shared text not edited.

---

### Questions for Taylor (rule 76) — asked and answered in chat, 2026-10-01

**Q1. The Spanish text in `habitability-notice-co`.** § 38-12-505(3)(d) requires the statement "in
English and Spanish" but prescribes no wording, and Colorado publishes no official Spanish form, so I
wrote the Spanish myself. **Taylor: "flag this as a required before shipment/going live, but I want
to think on this more broadly"** — and he raised multi-language support as a possible feature across
the board. **Disposition:** my translation stays in the delta, so no Colorado lease ships without the
Spanish the statute names, and **professional or attorney review of the Spanish is a GO-LIVE
BLOCKER**. The broader multi-language question is parked with Taylor and not decided here. Noted for
that thinking: the library already has a `translation-duty` topic with rows in two states, where the
shapes are a statute prescribing lease text verbatim *with* a conditional translation duty, and a
duty triggered by advertising or negotiating in another language — Colorado's § 38-12-505(3)(d) is
narrower than either, naming Spanish unconditionally for one statement only.

**Q2. The separate radon document.** **Taylor: "Acknowledgment + warning now, builder later".**
**Disposition:** `radon-disclosure-co` stays as the rewritten acknowledgment; **new
`edu-radon-separate-document-co`** warns the landlord that § 38-12-803(2)(a) requires them to produce
the separate document and have the tenant sign it before the lease — with the prescribed bold-faced
warning, all known radon information including current records, reports and mitigation-system
documentation, and a copy of the CDPHE brochure — and warns that the lease acknowledgment is evidence
against them if the document was never given; and the generated document goes to the **builder
backlog**. Open and unread: whether a link rather than "a copy of" the brochure discharges
(2)(a)(III) — no authority found either way, recorded as a caution, not a conclusion.

**Q3. Jury-trial waiver for a possession hearing.** **Taylor: offer the clause, not as a default**
(he corrected a misclick), and he asked for it to be conditional "since it doesn't apply to some
property types". **I corrected that premise in chat, because I had misled him by mentioning
§ 38-12-801(8):** that exemption, and § 38-12-801(4), exempt owner-occupied duplex/triplex/ADU and
mobile-home-park agreements **from** the (3)(a)(III) prohibition — so they would permit a *broader*
waiver, not a narrower one. The narrow possession-hearing waiver rests on the express carve-out
inside (3)(a)(III)(A) itself and is lawful for **every** Colorado residential property type, so under
rule 32 it is one clause and no property-type conditional is needed for lawfulness; a broader
owner-occupied variant is deliberately not offered because it would go void the moment the property
stopped being owner-occupied. **Disposition:** **new `jury-waiver-possession-co`**, `CONSTRAINED`,
mutual, self-limited to a possession hearing with jury rights on damages expressly preserved, and
scoped away from mobile-home-park tenancies — the one real limit, because those run under the Mobile
Home Park Act (§ 38-12-801(5) preserves MHPA rights) which was **not read** this pass. Optional by
design: no `choice_group` and no `is_default`, and since the builder's "add my default clauses"
feature runs off flags the *user* sets at runtime, no library field change is needed to keep it off
by default. Still unread: Colorado's jury-demand rules and practice for FED proceedings, so the
clause's practical value is not established.

**Q4. Nonrenewal-notice actual losses — RESOLVED, and my original call was wrong.** Taylor first
parked it, then came back on the drafted sentence: *"to me that should not be added to a clause, but
rather, should be covered by an education row."* **He is right on the rule 55 three-bucket test, and
I conceded in chat.** The sentence — *"If Tenant fails to give the notice this Section requires,
Tenant is responsible only for the actual losses Landlord incurs as a result of that failure. No fee,
liquidated amount, or other penalty applies, and any amount owed under this sentence is not Rent."* —
is not a required disclosure (§ 38-12-801(3)(a)(IV) requires no lease text), not a constrained term
(there is no landlord figure to state), and does not serve the landlord: "responsible **only** for
actual losses" is a ceiling on the tenant's liability and the second sentence is a list of charges
that do not apply, so both restate a statutory limit in the tenant's favour. That is the restatement
check's definition of education, and it is the same shape as this project's statutory-ceiling rule
(stating a legal maximum in tenant-facing text hands the tenant the ceiling for no landlord upside).
My argument for a clause had rested on creating the carve-out's "notice required pursuant to the
rental agreement" hook — which I had already killed myself by finding that hook in both CO
termination-notice clauses — leaving only a deterrence rationale I had asserted without testing: a
sentence telling the tenant their worst case is capped deters nothing.

  **Where it went, and a bigger finding behind it.** Checking for the right home surfaced that
  **Colorado had no `prohibited-lease-terms` row at all**, while 20 of the other 25 states do — despite
  § 38-12-801(3)(a) being one of the longest such statutes in the country, a closed list every item of
  which is void and unenforceable under (3)(b). Colorado covered it piecemeal across seven rows with
  nothing stating the list as a list, and **two subsections had no CO row whatsoever**: (3)(a)(IV), the
  nonrenewal fee, and **(3)(a)(III)(B)**, the waiver of any joint, class or collective claim — which
  matters practically, because a class-action waiver is boilerplate in form leases from other states
  and a landlord copying a template into Colorado imports a void term unknowingly. Taylor's decision:
  **one `edu-prohibited-lease-terms-co`** carrying the whole list, which puts (3)(a)(IV) in place as an
  item of the list rather than an orphan and closes both gaps. The row also carries two things the
  piecemeal rows did not: the **two subsections both numbered (VII)** in the official 2026 compilation
  (voucher-provider utility possession, and mediation-cost recoupment), shown rather than silently
  renumbered and flagged under rule 21; and the **§ 38-12-801(4) and (8) exemptions**, which switch
  much of the list off for mobile-home-park agreements and owner-occupied duplexes, triplexes and ADUs
  while leaving the eviction-penalty and fee-shifting items applicable to everyone.

**Q5. Two rule 62 shared-row proposals.** **Taylor: file (a) only.** **(a) FILED** — see the
propagation section below. **(b) NOT filed, and I withdrew my own recommendation on reflection and
said so in chat:** § 38-12-106(2) itself says "additional rent", so "pet rent" tracks the statute
rather than fighting it; the real risk was the library-wide undefined "Rent" attaching to eviction
through `default-by-tenant`, which `rent-definition-fees-not-rent-co` now cures; and a rename would
mean changing `{{pet_rent_amount}}` across eight states for no legal gain while putting the lease's
vocabulary out of step with the statute a landlord would be reading.

**Q6. The § 13-40-104(4)(e) DV repayment-plan duty — outside the 18 checks.** It surfaced while
reading § 13-40-104 for the rule 43 cure screen, traces to no rule in this prompt, and was flagged
rather than acted on under rule 1. **Taylor: "Add it now".** **Disposition: new
`edu-dv-repayment-plan-co`** covering the three-business-day offer duty, the affirmative defense, the
$25-a-month / nine-month shape, the bar on any fees, interest or penalties, the non-waivability, and
the two limbs that run in the landlord's favour — the tenant's seven-day waiver of the defense, and
the default route after a missed or three late payments. Taylor chose the option that did **not** also
chase the § 38-12-402(2)(a.5) 60-day police-report pinpoint, so that rule 79 item stands unchanged
and remains marked as unreached.

---

### §9 Propagation notes for shared-row edits (rule 62)

**1. `surrender-end-of-term` — CO tag removed, no text edit.** Tagged
`WY;SD;OH;CA;NV;TX;FL;AZ;GA;NC;TN;VA` after this retro. No other state is affected and no state needs
to vet anything: the shared text is untouched, and Colorado is superseded by
`surrender-end-of-term-co` for the reasons in check 2.

**2. `default-by-tenant` — PROPOSED EDIT, not made (Taylor's decision, Q5(a)).** Tagged
`CO;WY;MN;ND;CA;NV;TX;AZ;GA;SC;TN;VA;PA;UT;IL;ID;MO;IN` (18 states). Proposal: delete "and reasonable
costs and expenses" from the landlord-remedies sentence ("...recovering unpaid Rent, late fees, and
reasonable costs and expenses, less amounts obtained from the Security Deposit"), leaving the mutual
closing sentence to carry costs for both parties. Colorado driver: § 38-12-801(3)(a)(II) bans "a
one-way, fee-shifting clause that awards attorney fees **and court costs** only to one party", and
§ 38-12-801(3)(b) makes a violating provision void; if "costs and expenses" is read to include court
costs, that phrase is one-way. Assessed **PLAUSIBLE, not confirmed** — courts commonly read "costs"
as court costs, which the mutual sentence already handles, so the exposure is the voiding of a phrase
rather than of the clause. I cannot vouch for the edit in the other 17 states, so under rule 62 it
goes to them for vetting before any merge, and Colorado takes no override in the meantime. The
closing sentence of the clause already satisfies (3)(a)(II) as written, so Colorado is compliant
either way.

---

### Rows changed (delta: 33 rows — 14 edited, 19 new)

**Edited (14).** `habitability-notice-co` (rewritten, check 1) · `surrender-end-of-term` (CO removed
from `states`, text untouched, check 2) · `radon-disclosure-co` (rewritten, check 9) ·
`edu-radon-lease-length-co` (citation corrected, check 18) · `edu-holdover-co` (re-based, check 18) ·
`edu-fee-shifting-co` (extended with § 13-40-123, checks 14/18) · `edu-late-fee-limit-co` (extended,
check 8) · `landlords-access-co` (basis upgraded, check 18) · `edu-bed-bugs-co` (read discharged,
check 18) · `rent-increase-notice-co` (condition restored, fix 19) ·
`month-to-month-notice-co-exempt` (condition restored + choice_group, fix 19) ·
`month-to-month-notice-co-covered` (flag resolved + choice_group/default, fix 19) ·
`utility-submetering-disclosure-co` (checked, notes only, fix 19) · `security-deposit-return-co`
(checked, notes only, fix 19).

**New (19).** Lease clauses: `habitability-rights-statement-co` · `surrender-end-of-term-co` ·
`owner-identity-disclosure-co` · `rent-definition-fees-not-rent-co` · **`jury-waiver-possession-co`**
(Q3). Education: `edu-habitability-lease-statements-co` · `edu-fees-not-rent-co` ·
`edu-electronic-notices-co` · `edu-mandatory-mediation-co` · `edu-tenant-caused-damage-co` ·
`edu-ai-consequential-decisions-co` · `edu-no-landlord-self-cure-rule-co` ·
`edu-no-lease-completeness-rule-co` · `edu-quiet-possession-co` · `edu-statutory-forms-co` ·
`edu-no-tenant-camera-rule-co` · **`edu-radon-separate-document-co`** (Q2) ·
**`edu-dv-repayment-plan-co`** (Q6) · **`edu-prohibited-lease-terms-co`** (Q4).

**Integrity checks run on the delta (rule 70, SOP §8).** Header byte-identical to the master and CRLF
line endings throughout (no stray CR, file ends CRLF); 33 rows × 17 columns; 0 duplicate ids; 0
dangling `supersedes`; every active row has a `verification_status`, `rule_type`, `topic_key` and
non-empty `notes`; every `LEASE_CLAUSE` row has a `lease_clause_basis` and every
`LANDLORD_EDUCATION` row has none; all `group` values inside the fixed taxonomy; **no new
`{{variables}}` introduced** (rule 60) and no bracket adjacent to a variable; no master row removed;
the only non-CO row touched is `surrender-end-of-term`, and only its CO tag, its own note segment and
`last_checked`. Merged totals: 2,169 + 19 = **2,188 rows**; CO active rows 125 → **135**;
`surrender-end-of-term` states now `WY;SD;OH;CA;NV;TX;FL;AZ;GA;NC;TN;VA`. CO same-topic
`LEASE_CLAUSE` collisions: **none** after the `co-part13-coverage` choice group. All seven rule 27
topics plus `owner-identity-disclosure`, `notice-delivery-methods`, `tenant-caused-damage`,
`jury-waiver`, `dv-eviction-protection` and `prohibited-lease-terms` now have a CO row.

**Conformance table rows this closes for CO:** 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
54, 54t, 35c, 27, 79; and the "54 e.g." rows — statutory waivers **n**, holdover rate **n** (already),
casualty termination **n** (already), crime-free and eviction-fee not reached by this prompt.

---

### Proposed SOP changes

1. **Rule 40 should say that a type-size or bold-face requirement is usually a REQUIRED lease
statement, not a formatting note, and that the battery must run against the habitability and
disclosure parts, not only the lease-content section.** Colorado's two mandatory 12-point bold-faced
statements live in § 38-12-505, a section about *uninhabitable premises*, not in § 38-12-801, the
prohibited-clauses-and-required-content section where a reader would look. CO had been through a
full statute walk and a re-audit and still missed both, for about twenty months of operative duty,
because nothing told the pass to read a formatting rule as a content rule. [CO retro 2026-10-01]

2. **Rule 78 should add: when a pass moves a clause's content into education, check whether a statute
names the rental agreement as the vehicle for that content — and search the required-content
provisions, not only the clause's own citation.** The 2026-09-29 scrub stripped
`habitability-notice-co` of the warranty and retaliation sentences that § 38-12-505(3)(c) requires
*in the lease*. Rule 78 and fix 20 already catch the case where a switched-off clause was a required
notice; this is the case where a clause that stayed active was *trimmed* of required content, and the
clause was not on either targeted-fix list. [CO retro 2026-10-01]

3. **Rule 79 should add: a row whose `notes` record no basis at all cannot be screened, and the
screen must report the count.** 28 of CO's 118 citation rows have empty `notes`, so there is nothing
to classify as section-open or secondary — they are invisible to rule 79's keyword screen rather than
clean. Suggest the citations file require a basis string on every CITED row, and that each state's
rule 79 check report "N of M rows unscreenable for want of a recorded basis". [CO retro 2026-10-01]

4. **Rule 16 should add: where a topic's governing part has been repealed and reenacted with a future
application date, the education row states both regimes and both dates, and the row is flagged for
the legal watch with the changeover date.** Colorado's AI Act is the case: the official 2026
compilation prints two versions of § 6-1-1701, and SB 26-189 § 5(3) applies the new one to
consequential decisions made on or after 2027-01-01. A row written from either version alone would be
wrong for part of its life. [CO retro 2026-10-01]

5. **Rule 32 (or rule 37) should add: an exemption that turns on elapsed tenancy length expires
mid-tenancy, so a clause that recites it must self-limit.** Colorado's § 38-12-1302(1)(e) exempts a
tenant of under twelve months, which means a lease is exempt when signed and covered from month
thirteen. The existing rules catch figures that differ *by* tenancy type; they do not catch a
scope condition that *changes during* one tenancy. [CO retro 2026-10-01]

6. **Rule 6 should cross-reference `choice_group`.** Rule 6 says ship one version and keep the other
inactive where two versions reflect a legal-strategy choice — but where they reflect a *fact* about
the property or tenancy, the house mechanism is two active rows in one `choice_group` with one
`is_default`, as `ca-tpa-coverage` and the `tn-urlta-*` pairs do. Rule 6 doesn't mention it, and
CO's exempt/covered pair had sat with no `choice_group` since it was written. [CO retro 2026-10-01]

### Sync notes (Claude Code, 2026-10-01)

- **Merge.** `merge-delta.py --base 5b475f0` (the commit the folder was staged from): 14 rows updated, 19 new; the only shared-row change is CO's tag removed from `surrender-end-of-term`. The library had grown to 2,263 rows since the base (Oklahoma), so the merged total is 2,282, not the 2,188 the log computes. CO: 135 active rows (72 lease clauses, 63 education).
- **Two groups remapped** (`CLAUSE_GROUPS` is closed): `rent-definition-fees-not-rent-co` to Rent & Payment and `jury-waiver-possession-co` to Default & Termination, from Compliance & Prohibited Terms, which is an education-only group.
- **One drafting fix.** `habitability-notice-co` ended its English paragraph with "Do not enter a telephone number or any verbal method here.", which would have printed in the lease. It is now part of the bracket prompt: "[insert the mailing address for habitability notices; never a telephone number or other verbal method]".
- **Choice group in code.** `co-part13-coverage` means the builder now refuses a second CO termination-notice variant on a lease that already has one, including on manual attach; the property-fact filter (`forCauseEvictionVariant.js`) still picks which variant the automated paths suggest.
- **Statute spot-check, against the official 2026 C.R.S. (olls.info whole-title HTM, read by Claude Code at sync):** § 38-12-505(3)(c)-(e), § 38-12-801(3)(a)(III)(A)-(E) and (V), § 38-12-1303(2)(c), § 38-12-803(2)(b) and (3)(a)-(b), § 38-12-702, § 24-71.3-103(3)(b)(II), § 13-40-123. All match the log.
- **Not yet supported by the builder:** the 12-point bold type for `habitability-rights-statement-co` and `habitability-notice-co` (backlog M.12), and the separate signed radon document (backlog). The Spanish in `habitability-notice-co` needs professional review before go-live (Taylor).
- **Rule 62 answers recorded:** `returned-payments` "during any 12-month period": lawful in CO, supported. `early-termination` "or such shorter notice and cure period as applicable law permits": lawful in CO, supported (a covered landlord still needs Part 13 cause). The new `default-by-tenant` proposal (drop "and reasonable costs and expenses") goes to its 17 other tagged states.
- **Legal watch:** the new sections come in through the citations file and seed themselves; a manual recheck item covers the AI Act changeover on 2027-01-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Propagated shared-row edit, 2026-10-03 (Wyoming's proposal, merged after every tagged state vetted it)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `early-termination` landlord limb.** Old: 'Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or if Tenant vacates or abandons the property without notifying Landlord.' New: 'Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or on such shorter notice and cure period as applicable law permits, or if Tenant vacates or abandons the property without notifying Landlord.' Why: the 30-day notice and 10-day cure promised in the lease could give up a shorter route the state's law allows for a material breach. Every state tagged on the row (CO, WY, MN, ND, SD, OH) vetted the wording and supported it; "as applicable law permits" means it never permits less than the law requires. This state's existing note on the row still holds.

## Circle-back checks (SOP 1.35), 2026-10-03

**Date:** 2026-10-03. **Settings:** Opus, high effort; research mode not turned on — the rule 9
triggers were not reached (one section-open read of the official corpus answered the question).

**Gate check.** The attached `lease-clauses.csv` has **2,876 data rows**, matching the prompt —
proceeded. Worth recording for the next circle-back: a stale 2,169-row copy of `lease-clauses.csv`
from the 2026-10-01 round was still sitting in the session's upload directory under the same
filename, alongside the current attachment. The row count is what disambiguated them (rule 23's
"derive every count yourself" did its job). All work below is from the files attached today.

**Old output files deleted first (rule 8):** `lease-clause-decision-log-CO-retro.md` and
`lease-clauses-CO-retro-delta.csv` (the 2026-10-01 SOP 1.16 outputs). The files attached now are the
only source of truth; nothing earlier in this chat is relied on.

**Sources (rules 11, 12, 14).** Official 2026 Colorado Revised Statutes, Colorado OLLS whole-title
HTM (`olls.info/crs/crs2026-title-13.htm`, 4,467,670 chars this load), read in the built-in browser
pane with an extractor anchored on each section's own header line. Control term returned 0 over
Article 40. Saved to `src/CO-2026-CRS-reads-1.35.md` with the relied-on sentences verbatim and the
history lines. Method note (weaker than prescribed, rule 14): the workspace shell cannot reach the
host, so no browser-to-disk hash comparison was available; the saved file is a transcription.

---

### The [Retro] rules

**None.** This prompt lists 0 rules — SOP 1.35 added no [Retro] rule that reaches Colorado. Nothing
checked under this heading, and nothing else reopened (rule 1).

---

### Targeted fix 1 — rule 62 vetting, `default-by-tenant` (MN's proposal, 2026-10-02; ND and CA support)

**Proposal:** move the no-cure carve-out ("except where applicable law permits Landlord to proceed
without giving Tenant an opportunity to cure") out of the non-rent limb into its own sentence
reaching both limbs. **Question asked:** is that lawful and accurate in Colorado — specifically, can
it be read to drop a cure or pre-suit notice Colorado law requires for nonpayment?

**Verdict: VOUCHED — lawful and accurate in Colorado, no change needed, and no override wanted.**
Shared text not edited. Recorded here rather than in the row's `notes`, per rule 62 as amended at the
CA retro.

**Already recorded in part.** CO's log §"Retro checks (SOP 1.16)" item 4 (rule 43 — cure promises,
2026-10-01) ran this screen and reached the same conclusion, and item 4's closing line left this
exact structural point as a rule 62 proposal. This answer completes it, and adds a Colorado
authority that pass did not reach.

**Why it is safe here.** The carve-out is conditional on "where applicable law permits," and for
nonpayment Colorado law never permits it — in two independent, separately non-waivable places:

1. **§ 13-40-104(1)(d)** requires, before suit, ten days' written notice "requiring in the
   alternative the payment of the rent or the possession of the premises" (five days for an "exempt
   residential agreement", three for a nonresidential or employer-provided housing agreement), and
   closes with: *"No such agreement shall contain a waiver by the tenant of the notice requirement of
   this subsection (1)(d)."* Colorado's own statute calls that window a cure period —
   § 38-12-1303(3)(f)(III) refers to "the cure period described in section 13-40-104 (1)(d)" (read
   section-open 2026-10-01, saved).
2. **§ 13-40-115(4)** — read section-open this pass, and **new to Colorado's record** — goes
   further: a landlord who has given proper notice of nonpayment *"shall accept payment of the
   tenant's full payment of all amounts lawfully due according to the notice, as well as any rent
   that remains due under the rental agreement or that remains due pursuant to a repayment plan
   established pursuant to section 13-40-104 (4)(e), **at any time until a judge issues a judgment
   for possession**"*, paid to the landlord or the court; on confirmation the court *"shall"* vacate
   any judgment entered and *"dismiss the action with prejudice."* **§ 13-40-115(5):** *"The rights
   provided in subsection (4) of this section may not be waived by any written agreement."* (Added by
   SB 21-173, eff. 2021-10-01; IP(4) amended by HB 25-1168, eff. 2025-08-06.)

So the carve-out can never fire on Colorado's rent limb, and if a lease were read as dropping either
cure right, § 13-40-104(1)(d)'s final sentence and § 13-40-115(5) would void that reading
independently of how the clause is worded. Moving the carve-out into its own sentence changes nothing
in Colorado.

**And the carve-out does real work here, so Colorado wants it to exist.** On the non-rent limb
Colorado has two genuine no-cure routes: § 13-40-104(1)(d.5) (a substantial violation under
§ 13-40-107.5) and § 13-40-104(1)(e.5)(II) (a repeat violation of the same condition or covenant
after a (1)(e) notice — terminable "at any time", effective ten days after service of written notice
to terminate, with no cure right). A clause promising a cure for every breach would contract those
away. Reaching both limbs preserves them without touching the rent limb.

**One Colorado-specific point for the merge, worth carrying to the other 18 tagged states.** The rent
limb's current wording — cure "within the time period specified by applicable law" — is doing more
work than it looks like in Colorado, because Colorado's cure right on nonpayment is not a fixed
window: it runs past the notice period all the way to judgment (§ 13-40-115(4)). A hardcoded figure
would have been wrong here, and so would any future shared-text proposal that *defined* or *capped*
the cure opportunity (for example "the cure period stated in this Lease"), which would collide with
§ 13-40-115(4)–(5). The proposal as written is safe precisely because it only ever subtracts where
law allows and never defines the cure itself. Recommend the merge keep that property explicit.

**Rows changed: none.** No delta file is produced for this fix.

---

### Finding, flagged not fixed (rule 1)

**§ 13-40-115(4)–(5) has no Colorado row at all.** Checked against the attached master (2,876 rows;
CO 143 tagged, 135 active) and `lease-clause-citations-CO.csv`: no CO row cites § 13-40-115, and none
carries the cure-until-judgment right, the mandatory vacatur, or the dismissal with prejudice. It
surfaced only because the "cure period" battery for this vetting question hit § 13-40-115's heading.

It is worth a row on its own merits, because the practical consequence runs against the landlord's
instinct: a Colorado landlord who has served a proper nonpayment notice, filed, and is waiting on
judgment **must accept** a full tender at any point before judgment, including one paid into court;
refusing it does not preserve the case, and once the court confirms payment it must vacate any
judgment and dismiss **with prejudice**. A landlord who turns away a late-but-complete payment to
get possession loses the action and the filing costs. The right cannot be waived by any written
agreement, so no lease term addresses it — which is exactly why education is the only vehicle.

Not added, because it traces to neither the 0 rules nor the single targeted fix in this prompt, and
rule 1 says not to reopen anything else. Recommended: one education row (`topic_key`
`nonpayment-notice`, which Colorado currently has no row on, or `eviction-process` beside
`edu-mandatory-mediation-co`). It is a two-line delta on the word.

---

### Proposed SOP changes

1. **Rule 43's nonpayment question should ask about a cure right that runs past the notice period,
not only about a pre-suit notice.** The rule currently says: "If the rent limb ties its cure to
'written notice from Landlord', check whether the state requires any pre-suit notice for nonpayment;
if not, the clause adds one by contract." Colorado satisfies that test twice over and would pass the
screen on § 13-40-104(1)(d) alone — but the provision that actually constrains how a lease may word a
cure is § 13-40-115(4)–(5), a **post-notice, pre-judgment** right to cure by full payment, with
mandatory vacatur and dismissal with prejudice, non-waivable by any written agreement. A state can
have a short pre-suit notice and a much longer non-waivable cure window behind it, and only the
second one makes a lease-defined or lease-capped cure period unlawful. Suggest rule 43 add: *also
check whether the state gives a cure right that continues after the notice period (up to judgment,
or by payment into court), and whether it is non-waivable; where it does, the lease must leave the
cure period to applicable law rather than stating or capping it.* Found because the "cure period"
battery for a rule 62 vetting question hit a section the rule's own wording would not have sent
anyone to. [CO retro 2026-10-03]

2. **Rule 62's new vouch instruction should say where in the log the vouch goes.** 1.35 added "record
the verdict ('vouched, no change needed') in your log, not in the shared row's notes" — which is the
right call and avoids a many-state row collecting a vouch per state. It doesn't say which log section,
and a vouch is not a propagation note about the state's own edit, so §9 is a slightly awkward home.
Suggest naming the section (either §9 with a "vouches received" subheading, or §6 decisions), so
Claude Code can find them mechanically at merge time. Minor, bookkeeping only. [CO retro 2026-10-03]

## Circle-back sync (Claude Code, 2026-10-03)

- **No delta:** the pass changed no rows, as it reported. Its outputs were checked against base `2b10851` and the current master.
- **Rule 62:** CO vouched for MN's `default-by-tenant` proposal (no-cure carve-out in its own sentence); recorded in the backlog tally. CO's point carries to the merge: the rent limb must keep leaving the cure period to applicable law and never state or cap it, because § 13-40-115(4)-(5) runs the cure to judgment and can't be waived.
- **Flagged finding acted on (targeted fix):** added `edu-cure-until-judgment-co` (topic `redemption`, as Virginia's pay-before-judgment rows), with a citations row. Before drafting, § 13-40-115 was read section-open in the official 2026 C.R.S. (OLLS whole-title HTM): (4) and (5) match the pass's quotes word for word, history SB 21-173 eff. 2021-10-01 and HB 25-1168 eff. 2025-08-06. CO active rows 135 → 136.
- **Guards:** all pass. **Statute spot-check:** § 13-40-115(4) and (5), as above; § 13-40-104(1)(d)'s non-waiver sentence was already read section-open at the 2026-10-01 retro.
- **SOP 1.36:** both proposals adopted (rule 43's cure-past-notice question; rule 62's "Vouches given" subheading in §9).

## Shared-edit outcome (Claude Code, 2026-10-03, at the ID circle-back sync)

- CO's proposed deletion of "and reasonable costs and expenses" from `default-by-tenant` (CO retro, SOP 1.18) went in as a CO override, `default-by-tenant-co`, not a shared edit. ID declined to vouch, because lease authority for costs matters under Idaho Code § 55-305(2)(b) and § 26-2229A(4)(c), and ND had flagged lost collection costs. Rule 62 sends an edit that can't be vouched for in every tagged state to an override.
- CO is untagged from the shared row. The override is identical except for the deleted phrase. C.R.S. § 38-12-801(3)(a)(II) was re-read section-open for it in the official 2026 C.R.S.
- When MN's no-cure-sentence edit merges, it applies to `default-by-tenant-co` as well; CO vouched for it at its circle-back.

## Propagated shared-row edit, 2026-10-04 (at the PA circle-back sync)

- `returned-payments` (CO, WY, KS, NE, MN, ND, SD, OH, AZ, GA, PA): AZ's proposal merged once every tagged state had vetted it, PA last. "If more than two of Tenant's payments during the Term are returned" now reads "during any 12-month period", so the count works for a month-to-month tenancy, which has no Term. Uniform; no CO override. CO's note segment on the row records it.

## Propagated shared-row edit, 2026-10-04 (at the NY circle-back sync)

- `default-by-tenant-co`: MN's proposal merged once every state tagged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY) had vetted it, NY last. The no-cure carve-out moved out of the non-rent limb into its own sentence reaching both limbs, in the wording already merged on `default-by-tenant-ks-ne`: "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." It is self-limiting, so it reaches a breach only where CO law lets Landlord proceed without a cure opportunity. Uniform; no CO override.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for CO. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any CO row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach CO's law; to be confirmed at CO's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.


---

## Topic gaps pass (end-of-run consistency pass, Claude Desktop, 2026-10-24)

**Pass:** the 251 topics Colorado had no row for, plus the five named Colorado items.
**Governed by:** SOP 1.84, as scaled by the staged prompt of 2026-10-24.
**Delivered:** `lease-clauses-CO-gaps-delta.csv` (317 rows: 305 new, 12 existing rows tagged with CO)
and this log.

**Result: 251 of 251 topics answered in one visit — 132 Present, 107 Confirmed absent, 12 answered by
tagging an existing shared row.** 305 new rows: 58 lease clauses and 247 landlord-education rows, plus
the 12 tags. 371 batteries. 57 optional-clause screens under rule 54. No row in the delta is
NEEDS_REVIEW. Three new `{{variables}}` are listed in §4.

> **One caveat, stated once and meant.** No attorney has reviewed any of this. Several rows state a
> doubt and a cautious course because only a court could settle the point, and this pass had no
> case-law corpus. Where that is so, the row says so.

---

## §1 Sources, channel and currency

### 1.1 The channel

**The hash-verified corpus was the only channel.** Every attempt to reach an official Colorado host
from the shell failed: `olls.info`, `content.leg.colorado.gov` and `leg.colorado.gov` all returned
HTTP 000 throughout the pass. No browser was used. Recorded as a rule 19 channel failure, as at the
SOP 1.16 retro.

The corpus tarball's SHA-256 matched the attached `.sha256`
(`61e6bc87b976f9ebe16ff93b0482b27ba69fea0e35b62a5c6b58386643003123`). Rather than execute the check
script shipped inside downloaded data, the pass reproduced its check by hashing every file against the
manifests (GU 3): **1,076 files match, 970 PDFs listed but not shipped, 0 problems.**

**The gate check the prompt set passes on every figure.** The attached
`lease-clauses.csv` is 31,233,794 bytes with SHA-256
`6c1c393ff19d0b9ec2287470777d5d89a3ce69a9eefaba84d40d8b2270046dd6`, and holds **10,756 rows, 10,646
active, 137 active rows carrying CO** — the prompt's figures exactly. The 137 are the rows Colorado
already had; this pass adds 305 and tags 12 more.

What the corpus holds, and what that means:

- **The General Assembly's official C.R.S. 2024 edition**, one text file per title, titles 00 to 44.
  **It does not ship title 26.5** (early childhood), where the child-care licensing regime lives — so
  an "all 45 titles" battery is not quite whole-code, and any row whose subject could reach it says so.
- **Every session law from the 2024 extraordinary session through the 2026 regular session**: 2024b 2
  acts, 2025a 477, 2025b 11, 2026a 437.

**So the title text is 2024 and the session laws are 2025–2026, and the two together are current
law.** This single fact generated more of the pass's method than anything else (class decision C17):
`crs.py grep` reads only the title text, so a battery run over it alone proves an absence **in the
2024 compilation**, never in current law.

### 1.2 Currency, and how it was proved

Every section a row relies on was screened against the session laws with a **broad directive test**
matching `In Colorado Revised Statutes, <sec>`, `amend <sec>`, `add <sec>` and `repeal <sec>` — the
narrow form misses a whole-section amendment, which acts write as "In Colorado Revised Statutes, amend
38-12-402 as follows", and that is exactly how the main pass first mis-cleared § 38-12-402. False
positives from decimal suffixes were read out by hand (`38-12-201\b` matches `38-12-201.5`;
`24-34-502` matches `24-34-502.2`; `5-3-207` matches `26.5-3-207`; a directive search for `13-40-107`
hits only `13-40-107.5`).

`canvass/CURRENCY-LEDGER.md` is the shared record: every amended section with its act and effective
date, every section confirmed clean, two tooling corrections, and three LEDGER CORRECTION sections
where a slice's reading had to be overturned. **The revisory-act screen rule 16 requires was run**:
SB 26-169 (the 2026 general revisory act) touches § 38-12-402(2)(a.5)(I)(A) and (3) but is technical
only — adding "OF THIS SECTION" to a cross-reference and changing "eviction of" to "EVICT" — which
confirms the HB 25-1168 text stands.

**The acts that turned out to matter most, none of them in the 2024 text:**

| act | effective | what it does |
|---|---|---|
| **HB 25-1090** | 2026-01-01 | adds **§ 6-1-737**, ten categories of fee a landlord may not require; amends § 38-12-801(3)(a)(VI) to bar any fee violating it |
| **HB 25-1249** | 2026-01-01 | rewrites **§ 38-12-102(4)** and **§ 38-12-103** — normal wear and tear, the closed list of lawful retentions, carpet and paint, the 125% bad-faith presumption, and **§ 38-12-103(7)(b)** voiding any clause charging for work due to normal wear and tear |
| **HB 25-1168, § 15** | on passage, 2025-05-22 | rewrites **§ 38-12-402** whole — victim-survivor documentation (a 120-day police report, not 60), the lock-change right at (7), and the private action at (8) |
| **HB 25-1108** | 2025-09-01 | adds **§ 38-12-801(3.5)**, voiding death-of-tenant early-termination charges |
| **HB 25-1240, § 2** | 2025 | adds **part 15 of article 12 of title 38**; **§ 38-12-1502(1) enacts the CARES Act 30-day notice into Colorado law**, frozen at the 2020 federal text |
| **HB 26-1013** | 2026-03-26 | adds § 6-1-737(4.5), permitting ratio utility billing on four conditions |
| **HB 26-1007** | 2026-08-12 / 2027-01-01 | adds § 40-2-140; from 2027 a covenant unreasonably prohibiting a portable-scale solar device is void as against public policy |
| **HB 26-1196** | 2027-01-01 | adds § 38-12-904(1.7) and § 13-40-110.2 |
| **SB 25-020** | 2026-01-01 | adds § 38-12-513 receivership; gives the attorney general independent enforcement of parts 4, 8 and 10 of article 12 |

### 1.3 Sections read and saved

Every section a row cites was read **section-open**, not in search context, and saved. The pass
finished with **2,881 single-quoted passages across the fifteen slice files, plus 72 in this log's own
prose — 0 unresolved, 0 unchecked and 0 resolving only in the wider corpus**, so every quoted unit was
opened whole and saved (rule 12, AS 4). That figure is higher than the 2,713 the pass carried for most
of its length because the checker was scanning only row-note fields and not the battery blocks'
`hits:`, `positive:`, `conclusion:` and `heading-screen:` lines; widening it added 153 passages and
found two defects, both now fixed (§5.3, §5.4). The main pass's own saved sections and acts are in
`src/*.txt`; each slice's reads are in `scratch/slice-NN/reads.txt`.

### 1.4 Regulations, court rules, cases and federal law

- **Regulations (CCR):** none fetched. The corpus holds no CCR and the shell could not reach the
  Secretary of State, so no row rests on a Colorado regulation. Where a regulation could bear on a
  topic the row says so and claims nothing.
- **Court rules and forms:** not in the corpus and not read. No row rests on a C.R.C.P. rule or a JDF
  form.
- **Cases are leads only (rule 1).** There is no case-law corpus here. Every row that turns on a point
  only a court could settle says so, names the doubt, and states the cautious course — which is what
  Part 5's NEEDS_REVIEW policy requires, and why **no row in this delta is NEEDS_REVIEW**.
- **Federal law (C12):** the corpus holds no federal text and rule 12 forbids citing federal law from
  general knowledge, so no row restates a federal provision. Federal points are marked `FEDERAL:`,
  stated in one sentence, and cross-referenced to the library's existing federal rows by id. The one
  place this changed is Colorado item 4: **§ 38-12-1502 makes the CARES Act notice a matter of
  Colorado law**, so Colorado's duty no longer depends on the federal text at all.
- **Local ordinances are flagged, not resolved (rule 3, C3).** No city or county code was researched.

---

## §2 Topics answered

251 topics, one line each: the verdict, the row or rows that answer it, and the provisions the
answer rests on. `Tagged` means an existing shared row already stated Colorado's law and was
tagged rather than duplicated (rule 26).

| # | topic | verdict | row(s) | basis |
|---|---|---|---|---|
| 1 | Abandoned property (`abandoned-property`) | Present | `abandoned-property-co`, `edu-abandoned-property-co` | § 38-20-102(3); § 38-20-116(1); § 38-20-107(3) |
| 2 | Abandonment and mitigation (`abandonment-and-mitigation`) | Absent | `edu-no-mitigation-duty-rule-co` | § 38-12-801(3) |
| 3 | Accessory dwelling unit (`accessory-dwelling-unit`) | Present | `accessory-dwelling-unit-term-co`, `edu-accessory-dwelling-unit-co` | §§ 29-35-403(1); § 29-35-403; § 38-33.3-106.5(4) |
| 4 | Actual notice method (`actual-notice-method`) | Present | `edu-actual-notice-method-co` | § 13-40-108(1); § 13-40-108(2); § 13-40-110(3.5) |
| 5 | Adverse proceeding notice (`adverse-proceeding-notice`) | Present | `adverse-proceeding-notice-co`, `edu-adverse-proceeding-notice-co` | § 38-38-100.3(14); § 38-38-305(1.5); § 38-12-217(1) |
| 6 | Alarm duties (`alarm-duties`) | Present | `alarm-duties-co`, `edu-alarm-duties-co` | §§ 38-45-102; § 38-12-505(1) |
| 7 | Alarm tampering fee (`alarm-tampering-fee`) | Absent | `edu-alarm-tampering-fee-co` | §§ 38-45-102(3); § 6-1-737(4) |
| 8 | Animal care access (`animal-care-access`) | Tagged | `edu-no-animal-care-entry-right-co`, `animal-care-access-vi (tagged)` | § 13-40-122; § 13-40-122(2.5); § 35-80-102(10) |
| 9 | Appliances excluded (`appliances-excluded`) | Present | `appliances-excluded-co`, `edu-appliances-excluded-co` | § 38-12-502(1); § 38-12-505(1) |
| 10 | Asbestos hazards (`asbestos-hazards`) | Absent | `edu-no-asbestos-disclosure-rule-co` | § 25-7-502(1) |
| 11 | Association obligations disclosure (`association-obligations-disclosure`) | Absent | `association-documents-provided-co`, `edu-association-obligations-disclosure-co` | §§ 38-33.3-209.4(1); § 38-33.3-310(3) |
| 12 | Automatic renewal (`automatic-renewal`) | Present | `automatic-renewal-co`, `edu-automatic-renewal-co` | § 6-1-732; § 38-12-801(3) |
| 13 | Balcony inspection (`balcony-inspection`) | Absent | `edu-no-balcony-inspection-rule-co` | § 38-12-505(1) |
| 14 | Bed bug cooperation (`bed-bug-cooperation`) | Present | `bed-bug-cooperation-co`, `edu-bed-bug-cooperation-co` | § 38-12-1002(1); § 38-12-1004(1); § 38-12-1004(4) |
| 15 | Binding arbitration (`binding-arbitration`) | Present | `edu-binding-arbitration-co` | § 13-22-206(1); § 13-40-110(1); § 38-12-801(3) |
| 16 | Cannabis (`cannabis`) | Tagged | `edu-cannabis-co`, `cannabis-restrictions-ak (tagged)` | § 25-1.5-106(3); § 38-12-1302(1); § 38-12-1305 |
| 17 | Carpet cleaning (`carpet-cleaning`) | Present | `carpet-condition-at-move-out-co`, `edu-carpet-cleaning-co` | § 38-12-103(7); § 38-12-102(4) |
| 18 | Casualty and mitigation waivable (`casualty-and-mitigation-waivable`) | Present | `edu-casualty-and-mitigation-waivable-co` | § 38-12-503(10); § 38-12-503(11) |
| 19 | Certificate of occupancy disclosure (`certificate-of-occupancy-disclosure`) | Absent | `edu-no-certificate-of-occupancy-disclosure-co` | § 38-12-803; § 38-12-1002 |
| 20 | Children occupancy (`children-occupancy`) | Present | `edu-children-occupancy-co` | § 24-34-502(1); § 24-34-502(8); § 24-34-502(7) |
| 21 | Cold weather vacate notice (`cold-weather-vacate-notice`) | Absent | `edu-no-cold-weather-vacate-notice-co` | § 38-12-510(1) |
| 22 | Collection fee (`collection-fee`) | Present | `edu-collection-fee-co` | § 38-12-801(3); § 6-1-737(4); § 13-21-109 |
| 23 | Common area lighting (`common-area-lighting`) | Present | `edu-common-area-lighting-co` | § 38-12-502(8); § 38-12-505(1); § 38-12-505(2) |
| 24 | Communal land lease approval (`communal-land-lease-approval`) | Absent | `edu-no-communal-land-lease-approval-rule-co` | § 38-36-169; § 38-12-801(1); § 38-12-801 |
| 25 | Condemned premises rent bar (`condemned-premises-rent-bar`) | Absent | `edu-condemned-premises-rent-bar-co` | § 38-12-507(3); § 38-12-507(1) |
| 26 | Confession of judgment (`confession-of-judgment`) | Absent | `edu-confession-of-judgment-co` | § 38-12-801(3); § 38-12-213(5); § 5-3-207 |
| 27 | Confirmed absences habitability (`confirmed-absences-habitability`) | Absent | `edu-confirmed-absences-habitability-co` | § 38-12-502(1) |
| 28 | Confirmed absences misc (`confirmed-absences-misc`) | Absent | `edu-confirmed-absences-misc-co` | § 38-12-105(1) |
| 29 | Confirmed absences outside title (`confirmed-absences-outside-title`) | Present | `edu-confirmed-absences-outside-title-co` | § 13-40.1-101(2); § 38-12-802 |
| 30 | Construction liens (`construction-liens`) | Present | `no-liens-co`, `edu-construction-liens-co` | § 38-22-105(1); § 38-22-105(2); § 38-22-119(1) |
| 31 | Consumer protection act (`consumer-protection-act`) | Present | `edu-consumer-protection-act-co` | § 6-1-105(1); § 6-1-737(5); § 6-1-113(1) |
| 32 | Conversion notice (`conversion-notice`) | Present | `conversion-notice-co`, `edu-conversion-notice-co` | § 38-33-112(1); § 38-33-112(3); § 38-33-112(6) |
| 33 | Criminal activity (`criminal-activity`) | Present | `edu-criminal-activity-co` | § 13-40-107.5(2); § 13-40-107.5(3); § 13-40-107.5(4) |
| 34 | Cure and eviction grounds (`cure-and-eviction-grounds`) | Present | `edu-cure-and-eviction-grounds-co` | § 13-40-104(1); § 13-40-104(5) |
| 35 | Defective drywall disclosure (`defective-drywall-disclosure`) | Absent | `edu-no-drywall-disclosure-rule-co` | § 38-33.3-202; § 38-33.3-202(1); § 13-20-802.5 |
| 36 | Deposit cost schedule (`deposit-cost-schedule`) | Present | `deposit-charge-schedule-co`, `edu-deposit-cost-schedule-co` | § 38-12-103(1); § 38-12-103(7); § 38-12-103(3.5) |
| 37 | Deposit escheat (`deposit-escheat`) | Present | `edu-deposit-escheat-co` | § 38-13-102(24); § 38-13-102(12); § 38-13-201(1) |
| 38 | Deposit installments (`deposit-installments`) | Absent | `edu-no-deposit-installment-right-co` | § 28-3-1405; § 38-33.3-315; § 38-12-102.5 |
| 39 | Deposit last month rent (`deposit-last-month-rent`) | Present | `deposit-not-last-month-rent-co`, `edu-deposit-last-month-rent-co` | § 10-4-110.8; § 16-4-111; § 38-12-103(1) |
| 40 | Deposit surrender notice (`deposit-surrender-notice`) | Present | `deposit-surrender-notice-co`, `edu-deposit-surrender-notice-co` | § 38-12-104; § 38-12-103(1); § 38-12-103(7) |
| 41 | Designated repairer (`designated-repairer`) | Present | `edu-designated-repairer-co` | § 38-12-503(1); § 38-12-503(7); § 38-12-503(10) |
| 42 | Disability accommodation (`disability-accommodation`) | Present | `disability-accommodation-request-co`, `edu-disability-accommodation-co` | § 24-34-502.2(2); § 24-34-502(1); § 24-34-502.2(1) |
| 43 | Disaster displaced guests (`disaster-displaced-guests`) | Absent | `edu-no-disaster-guest-rule-co` | § 24-56-102; § 38-12-503; § 38-12-502(9) |
| 44 | Disaster duties (`disaster-duties`) | Present | `edu-disaster-duties-co` | § 38-12-503(11); § 38-12-502(4.5); § 38-12-503(4) |
| 45 | Double letting (`double-letting`) | Absent | `edu-no-double-letting-rule-co` | § 38-12-510; § 38-12-510(1); § 38-12-510(2) |
| 46 | Drug free housing addendum (`drug-free-housing-addendum`) | Present | `edu-no-drug-free-addendum-rule-co` | § 13-40-107.5(2); § 13-40-107.5(5); § 13-40-104(4) |
| 47 | Dv deposit timing (`dv-deposit-timing`) | Present | `edu-dv-deposit-timing-co` | § 38-12-103(1); § 38-12-402(2); § 38-12-402(8) |
| 48 | Dv lockchange (`dv-lockchange`) | Present | `dv-lock-change-co`, `edu-dv-lock-change-co` | § 38-12-402(7); § 6-1-737(4); § 38-12-801(3) |
| 49 | Dv protection order chapter moved (`dv-protection-order-chapter-moved`) | Present | `edu-dv-protection-order-citations-co` | § 13-14-102 |
| 50 | Dv qualifying documents (`dv-qualifying-documents`) | Present | `dv-qualifying-documents-co`, `edu-dv-qualifying-documents-co` | § 38-12-402(2); § 38-12-401(8); § 38-12-402(4) |
| 51 | Electric submetering disclosure (`electric-submetering-disclosure`) | Present | `electric-submeter-billing-co`, `edu-electric-submetering-disclosure-co` | § 6-1-737(4); § 38-12-801(3); § 6-1-737 |
| 52 | Emergency contact (`emergency-contact`) | Absent | `emergency-contact-co`, `edu-no-emergency-contact-rule-co` | § 38-12-212.3(5); § 38-12-801(3); § 6-1-737(4) |
| 53 | Eminent domain (`eminent-domain`) | Absent | `eminent-domain-co`, `edu-no-eminent-domain-rent-rule-co` | § 38-1-115(3); § 38-1-102(1); § 38-12-1303(1) |
| 54 | Employee screening (`employee-screening`) | Absent | `edu-no-employee-screening-rule-co` | § 18-12-112; § 8-2-130; § 38-12-902(2.5) |
| 55 | Energy data release (`energy-data-release`) | Present | `energy-data-release-co`, `edu-energy-data-release-co`, `edu-benchmarking-data-at-listing-co` | § 25-7-142 |
| 56 | Entity landlord court representation (`entity-landlord-court-representation`) | Present | `edu-entity-landlord-court-representation-co` | § 13-93-101(1); § 13-93-108; § 13-1-127(1) |
| 57 | Eviction hardship stay (`eviction-hardship-stay`) | Present | `edu-eviction-hardship-stay-co` | § 13-40-122(1); § 13-40-117(2); § 13-40-117(3) |
| 58 | Eviction record sealing (`eviction-record-sealing`) | Present | `edu-eviction-record-sealing-co` | § 13-40-110.5(1); § 13-40-110.5(2); § 13-40-110.5(3) |
| 59 | Eviction service party (`eviction-service-party`) | Absent | `edu-eviction-service-party-co` | § 13-40-108; § 13-40-108(2); § 13-40-112(1) |
| 60 | Exculpatory clauses (`exculpatory-clauses`) | Absent | `edu-exculpatory-clauses-co`, `edu-tenant-indemnity-clause-co` | § 15-5-1008; § 38-13-1408; § 38-12-801(3) |
| 61 | Expedited criminal eviction (`expedited-criminal-eviction`) | Present | `edu-expedited-criminal-eviction-co` | § 13-40-107.5 |
| 62 | Expedited deposit disposition (`expedited-deposit-disposition`) | Present | `edu-expedited-deposit-disposition-co`, `deposit-forwarding-address-co` | § 38-12-104 |
| 63 | Extended absence notice (`extended-absence-notice`) | Tagged | `edu-no-extended-absence-notice-co`, `extended-absence-notice-ks (tagged)` | § 38-12-510; § 23-7-103(1); § 38-12-510(1) |
| 64 | Fair housing (`fair-housing`) | Present | `edu-fair-housing-co`, `edu-fair-housing-exemptions-co`, `edu-fair-housing-enforcement-co` | § 24-34-502(1); § 24-34-501(4.5); § 24-34-502(1.5) |
| 65 | Family child care (`family-child-care`) | Absent | `edu-family-child-care-co` | § 38-33.3-106.5; § 38-33.3-106.5(1); § 32-1-1004.5(6) |
| 66 | Farmland hunting rights (`farmland-hunting-rights`) | Absent | `farmland-sporting-rights-co`, `edu-no-farmland-hunting-rights-rule-co` | § 33-6-116(1); § 33-6-116(3); § 33-4-103(2) |
| 67 | Fee in lieu of deposit (`fee-in-lieu-of-deposit`) | Absent | `edu-no-fee-in-lieu-of-deposit-rule-co` | § 11-110-108; § 38-12-102; § 38-12-102(6) |
| 68 | Fire code standard (`fire-code-standard`) | Absent | `edu-fire-code-standard-co` | § 24-33.5-1213; § 24-33.5-1213(1); § 30-28-203 |
| 69 | Fire sprinkler duty (`fire-sprinkler-duty`) | Absent | `edu-no-fire-sprinkler-duty-co` | § 24-33.5-1206.7; § 24-33.5-1202; § 38-35.7-107(1) |
| 70 | Firearms (`firearms`) | Absent | `firearms-co`, `edu-firearms-co` | § 18-12-114(1); § 18-12-114(2); § 18-12-107.5(1) |
| 71 | Flood disclosure (`flood-disclosure`) | Absent | `edu-no-flood-disclosure-rule-co` | § 38-12-502; § 30-30-102; § 38-12-502(4.5) |
| 72 | Foreclosure (`foreclosure`) | Present | `edu-foreclosure-tenants-co`, `edu-foreclosure-leaseback-co` | § 38-38-100.3(14); § 38-38-305(1.5); § 38-38-505(2) |
| 73 | Foreclosure disclosure (`foreclosure-disclosure`) | Absent | `edu-no-foreclosure-disclosure-rule-co` | § 38-38-305; § 38-38-100.3(14); § 38-38-305(1.5) |
| 74 | Foreign ownership (`foreign-ownership`) | Absent | `edu-foreign-ownership-co` | § 10-11-102; § 15-11-111; § 38-12-1203(1) |
| 75 | Forfeiture redemption (`forfeiture-redemption`) | Absent | `edu-no-forfeiture-redemption-rule-co` | § 38-38-305; § 13-40-104(1); § 13-40-104(5) |
| 76 | Frozen standard incorporation (`frozen-standard-incorporation`) | Present | `edu-frozen-standard-incorporation-co` | § 31-16-207; § 31-16-201(2); § 31-16-201(4) |
| 77 | Furnishings included (`furnishings-included`) | Tagged | `edu-furnishings-included-co`, `furnishings-included-la (tagged)` | § 38-12-1004; § 38-12-502(1); § 38-12-505(1) |
| 78 | Good cause notice (`good-cause-notice`) | Present | `edu-good-cause-notice-co` | § 13-40-104 |
| 79 | Government fee reimbursement (`government-fee-reimbursement`) | Present | `edu-government-fee-reimbursement-co` | § 6-1-737(4); § 38-12-801(3); § 6-1-737(4.5) |
| 80 | Governmental fines (`governmental-fines`) | Present | `governmental-fines-co`, `edu-governmental-fines-co` | § 31-15-402(4); § 31-15-402(1); § 31-15-402(2) |
| 81 | Guarantor renewal (`guarantor-renewal`) | Tagged | `edu-guarantor-renewal-co`, `guaranty-as (tagged)` | § 38-38-104; § 38-10-112(1); §§ 4-2-201 |
| 82 | Guest rights (`guest-rights`) | Absent | `edu-guest-rights-co` | § 38-12-502; § 13-40-107.5(3); § 13-40-107.5(5) |
| 83 | Habitability materiality (`habitability-materiality`) | Present | `edu-habitability-materiality-co` | § 38-12-503(2); § 38-12-503(3); § 38-12-505(1) |
| 84 | Habitability modifiable (`habitability-modifiable`) | Present | `edu-habitability-modifiable-co` | § 38-12-503(10); § 38-12-507(5); § 38-12-505(3) |
| 85 | Habitability presumption (`habitability-presumption`) | Present | `edu-habitability-presumption-co` | § 38-12-503(3); § 38-12-505(4); § 38-12-505(5) |
| 86 | Habitability statement (`habitability-statement`) | Present | `edu-habitability-statement-co` | § 38-12-503(1); § 38-12-505(3) |
| 87 | Habitability waiver (`habitability-waiver`) | Present | `edu-habitability-waiver-co` | §§ 38-12-503(10); § 38-12-506 |
| 88 | Hazardous contamination disclosure (`hazardous-contamination-disclosure`) | Present | `environmental-covenant-incorporation-co`, `edu-hazardous-contamination-disclosure-co` | § 25-15-319(1); §§ 25-15-318(2) |
| 89 | Health district rental rules (`health-district-rental-rules`) | Absent | `edu-no-health-district-rule-co` | § 38-12-1003(2); §§ 25-1-516 |
| 90 | Heating (`heating`) | Present | `edu-heating-duty-co`, `heat-freeze-protection-co` | § 38-12-505(1); § 38-12-505(4); § 38-12-503(7) |
| 91 | Hoa (`hoa`) | Present | `association-approval-co`, `edu-hoa-co` | § 6-1-737(4); § 38-12-801(3); § 6-1-737 |
| 92 | Holding deposit (`holding-deposit`) | Absent | `edu-no-holding-deposit-rule-co` | § 38-12-102(6); § 38-12-102.5; § 38-12-903 |
| 93 | Holdover rate (`holdover-rate`) | Absent | `edu-no-holdover-multiplier-rule-co`, `holdover-rate-co` | § 38-12-801(3) |
| 94 | Home business (`home-business`) | Present | `edu-home-business-co`, `home-business-permission-co` | § 38-33.3-106.5(1) |
| 95 | Homestead waiver (`homestead-waiver`) | Present | `edu-homestead-waiver-co` | §§ 38-41-201; §§ 38-35-118(2) |
| 96 | Infirmity termination (`infirmity-termination`) | Absent | `edu-no-infirmity-termination-rule-co` | § 38-12-507(1); § 38-12-503(4); § 38-12-503(11) |
| 97 | Informal dispute resolution (`informal-dispute-resolution`) | Tagged | `edu-informal-dispute-resolution-co`, `informal-dispute-resolution-or (tagged)` | § 13-40-110(1); § 38-12-801(3) |
| 98 | Inspection condemnation disclosure (`inspection-condemnation-disclosure`) | Absent | `edu-no-condemnation-disclosure-rule-co` | § 38-12-503(3); § 38-12-505(3) |
| 99 | Inspection notice penalty (`inspection-notice-penalty`) | Present | `edu-inspection-notice-penalty-co` | §§ 38-12-1004(1); § 38-12-503(6); §§ 38-12-507 |
| 100 | Key control policy (`key-control-policy`) | Absent | `edu-key-control-policy-co` | §§ 38-12-505(1); § 6-1-737(4); § 38-12-801(3) |
| 101 | Knowing use penalty (`knowing-use-penalty`) | Absent | `edu-knowing-use-penalty-co` | § 38-12-801(3); § 24-31-101(1); § 38-12-512(5) |
| 102 | Landlord breach remedy (`landlord-breach-remedy`) | Present | `edu-landlord-breach-remedy-co` | § 38-12-507; § 38-12-507(5) |
| 103 | Landlord liability insurance (`landlord-liability-insurance`) | Absent | `edu-no-landlord-insurance-mandate-co` | § 38-12-601(3); § 38-12-601(4); § 6-1-737(4) |
| 104 | Landlord lien (`landlord-lien`) | Present | `edu-landlord-lien-co` | § 38-20-102; § 38-20-102(3); § 38-20-107(1) |
| 105 | Landlord registration (`landlord-registration`) | Absent | `edu-no-landlord-registration-rule-co` | § 38-12-801(2); § 38-12-801; § 38-12-1106(1) |
| 106 | Landlord remedies termination (`landlord-remedies-termination`) | Present | `edu-landlord-remedies-termination-co` | § 13-40-115(2); § 13-40-109; § 13-40-104(1) |
| 107 | Late fee limit (`late-fee-limit`) | Present | `edu-late-fee-cap-co` | § 38-12-105(1); § 38-12-105(2); § 6-1-737(4) |
| 108 | Law enforcement cooperation (`law-enforcement-cooperation`) | Present | `edu-law-enforcement-cooperation-co` | § 38-12-402(1); § 38-12-402(8); § 38-12-1203(1) |
| 109 | Lead safe certification (`lead-safe-certification`) | Absent | `edu-no-lead-safe-certification-co` | § 25-7-1101(1); § 25-7-1103(1); § 25-7-1103(2) |
| 110 | Lead state notices (`lead-state-notices`) | Absent | `edu-no-lead-state-notices-co` | § 25-7-1103(1); § 25-5-1101(1); § 25-5-1104(1) |
| 111 | Lease content requirements (`lease-content-requirements`) | Present | `edu-lease-content-requirements-co` | § 38-12-801(2); § 38-12-801(2.5); § 38-12-505(3) |
| 112 | Lease notice initial requirement (`lease-notice-initial-requirement`) | Absent | `edu-no-lease-initials-requirement-co` | § 6-1-1104(4); § 38-12-803(2); § 38-12-801(1) |
| 113 | Lease registration (`lease-registration`) | Present | `edu-lease-registration-co` | § 38-35-109(1); § 38-35-109(3); § 38-36-166 |
| 114 | Lease term limitation (`lease-term-limitation`) | Present | `edu-lease-term-limits-co` | § 38-10-106; § 38-10-108; § 38-10-109 |
| 115 | Lease type parity (`lease-type-parity`) | Absent | `edu-no-lease-type-parity-co` | § 38-12-702(1); § 38-12-701(2); § 38-12-1307 |
| 116 | Lease type size (`lease-type-size`) | Absent | `edu-no-lease-type-size-co` | § 38-12-505(3); § 38-12-803(2); § 6-1-1104(2) |
| 117 | Limitation of actions (`limitation-of-actions`) | Present | `edu-limitation-of-actions-co` | § 13-80-103.5(1) |
| 118 | Liquidated damages (`liquidated-damages`) | Present | `edu-liquidated-damages-co` | § 38-12-801(3.5); § 38-12-801(3); § 38-12-103(7) |
| 119 | Lockout for rent delinquency (`lockout-for-rent-delinquency`) | Present | `edu-no-lockout-for-rent-co` | § 38-12-510(1); § 38-12-510(2); § 38-12-510(3) |
| 120 | Maintenance duty shift (`maintenance-duty-shift`) | Present | `edu-maintenance-duty-shift-co` | § 38-12-506(1); § 38-12-506(2); § 38-12-506(3) |
| 121 | Meter conservation charge (`meter-conservation-charge`) | Absent | `edu-no-meter-conservation-charge-rule-co` | § 38-33.3-106.7; § 6-1-737(4); § 38-12-801(3) |
| 122 | Meth disclosure (`meth-disclosure`) | Present | `edu-meth-contamination-co` | § 38-35.7-103; § 38-12-505; § 25-18.5-103(1) |
| 123 | Military air zone disclosure (`military-air-zone-disclosure`) | Absent | `edu-no-military-zone-disclosure-rule-co` | § 24-32-118; § 29-20-105.6(3); § 29-20-105.6(4) |
| 124 | Minor tenant filing (`minor-tenant-filing`) | Present | `edu-minor-tenants-co` | § 13-22-101(1); § 13-81-101(3); § 13-81-103 |
| 125 | Mold disclosure (`mold-disclosure`) | Absent | `edu-no-mold-disclosure-rule-co` | § 38-12-503; § 38-12-505(1); § 38-12-503(12) |
| 126 | Municipal utility lien (`municipal-utility-lien`) | Present | `edu-municipal-utility-lien-co` | § 32-1-1001(1); § 32-1-1001(2); § 31-35-617 |
| 127 | Nonpayment notice (`nonpayment-notice`) | Present | `edu-nonpayment-notice-co`, `exempt-residential-agreement-notice-co` | § 13-40-104(1); § 13-40-104(5); § 13-40-106(1) |
| 128 | Nonrefundable deposit notice (`nonrefundable-deposit-notice`) | Present | `edu-no-nonrefundable-deposits-co` | § 38-12-102(6); § 38-12-103(7); § 38-12-106(1) |
| 129 | Nonrefundable deposit separate notice (`nonrefundable-deposit-separate-notice`) | Absent | `edu-no-nonrefundable-separate-notice-rule-co` | § 38-12-506; § 38-12-902; § 38-12-102(6) |
| 130 | Nonresident owner agent (`nonresident-owner-agent`) | Absent | `edu-no-nonresident-owner-agent-rule-co` | § 38-36-114; § 38-12-801(2); § 38-12-503(3) |
| 131 | Notice service fee (`notice-service-fee`) | Present | `edu-no-notice-service-fee-co` | § 38-12-801(3); § 38-12-801(4); § 38-12-801(8) |
| 132 | Notice to quit waiver (`notice-to-quit-waiver`) | Present | `edu-notice-to-quit-waiver-co` | § 13-40-104(1); § 38-12-1305; § 38-12-1302(1) |
| 133 | Notice to vacate additional terms (`notice-to-vacate-additional-terms`) | Present | `edu-notice-to-vacate-additional-terms-co` | § 13-40-106(1); § 13-40-106(2); § 13-40-106(4) |
| 134 | Nuisance (`nuisance`) | Present | `edu-nuisance-co` | § 31-15-401(1); § 31-15-402(1); § 31-15-402(2) |
| 135 | Optional lease terms (`optional-lease-terms`) | Present | `edu-optional-lease-terms-co` | § 38-12-103(1); § 13-40-123; § 38-12-801(3) |
| 136 | Ordnance demolition meter disclosures (`ordnance-demolition-meter-disclosures`) | Absent | `edu-no-ordnance-demolition-meter-disclosure-co` | § 28-3-106; § 38-12-1303; § 38-12-1303(3) |
| 137 | Other landlord facilities (`other-landlord-facilities`) | Present | `edu-other-landlord-facilities-co`, `shared-facilities-closure-co` | § 38-12-502(1); § 38-12-505(1); § 38-12-505(2) |
| 138 | Owner move in reservation (`owner-move-in-reservation`) | Present | `edu-owner-move-in-reservation-co` | § 38-12-1303(3); § 38-12-1303(2); § 38-12-1305 |
| 139 | Parking rules notice (`parking-rules-notice`) | Present | `edu-parking-rules-notice-co`, `parking-rules-notice-co` | § 40-10.1-805(2); § 40-10.1-806 |
| 140 | Periodic services entry (`periodic-services-entry`) | Tagged | `edu-periodic-services-entry-co`, `scheduled-services-entry-la (tagged)` | § 38-12-503(6); § 38-12-1004(1) |
| 141 | Pest control notice (`pest-control-notice`) | Present | `edu-pest-control-notice-co` | § 35-10-112(1); § 35-10-112(2); § 38-12-1004(1) |
| 142 | Pet eviction fact sheet (`pet-eviction-fact-sheet`) | Absent | `edu-no-pet-eviction-fact-sheet-rule-co` | § 38-12-505; § 38-12-803; § 38-35.7-112 |
| 143 | Plain language (`plain-language`) | Absent | `edu-no-plain-language-rule-co` | § 38-12-212.9(3); § 38-12-505(3) |
| 144 | Plain language consumer statement (`plain-language-consumer-statement`) | Absent | `edu-no-plain-language-statement-rule-co` | § 38-12-212.9; § 24-31-101(1); § 38-12-801(3) |
| 145 | Political access (`political-access`) | Absent | `edu-no-political-access-rule-co` | § 38-12-509(1); § 38-33.3-106.5(1) |
| 146 | Pool safety (`pool-safety`) | Present | `edu-pool-safety-co` | § 25-5-809 |
| 147 | Portable cooling device (`portable-cooling-device`) | Present | `edu-portable-cooling-device-co`, `portable-cooling-restriction-co` | § 38-12-505(7); § 38-12-505(1) |
| 148 | Portable solar (`portable-solar`) | Present | `edu-portable-solar-co`, `portable-solar-device-rules-co` | § 38-30-168(3); § 38-33.3-106.7(3); § 40-2-140(7) |
| 149 | Portfolio thresholds (`portfolio-thresholds`) | Present | `edu-portfolio-thresholds-co` | § 38-12-801(2.5); § 24-34-502(1.7); § 13-40-110(1) |
| 150 | Possession bond (`possession-bond`) | Absent | `edu-no-possession-bond-rule-co` | § 38-12-213(5) |
| 151 | Private well testing (`private-well-testing`) | Absent | `edu-no-private-well-testing-rule-co` | § 25-1.5-201(1); § 25-1.5-206(1); § 38-35.7-104 |
| 152 | Prohibited acts renter (`prohibited-acts-renter`) | Tagged | `edu-prohibited-acts-renter-co`, `prohibited-acts-renter-wy (tagged)` | § 38-12-504 |
| 153 | Promises to repair (`promises-to-repair`) | Absent | `edu-no-promises-to-repair-rule-co` | § 38-12-505(3); § 38-12-506 |
| 154 | Prop65 rental warning (`prop65-rental-warning`) | Absent | `edu-no-chemical-warning-rule-co` | § 27-80-116; § 27-80-116(3); § 38-35.7-103(1) |
| 155 | Property tax rent disclosure (`property-tax-rent-disclosure`) | Absent | `edu-no-property-tax-rent-statement-co` | § 39-5-108.5; § 39-31-101; § 6-1-737(4) |
| 156 | Protected class inquiry ban (`protected-class-inquiry-ban`) | Present | `edu-protected-class-inquiry-co` | § 24-34-502(1); § 24-34-502(10); § 24-34-502(1.5) |
| 157 | Purpose limitation (`purpose-limitation`) | Absent | `edu-purpose-limitation-co` | § 16-13-310; § 16-13-303(1); § 18-10-107(1) |
| 158 | Recycling notice (`recycling-notice`) | Absent | `edu-no-recycling-notice-rule-co` | § 25-17-403; §§ 38-12-504; § 38-12-505(1) |
| 159 | Religious cultural display (`religious-cultural-display`) | Absent | `edu-no-religious-display-rule-co` | § 38-33.3-106.5; § 38-12-801; § 38-33.3-106.5(1) |
| 160 | Rent concession (`rent-concession`) | Tagged | `edu-rent-concession-co`, `rent-concession-wi (tagged)` | § 38-12-104; § 38-12-801(3.5); § 38-12-402(2) |
| 161 | Rent control (`rent-control`) | Present | `edu-rent-control-co` | § 38-12-301; § 38-12-301(1); § 38-12-301(2) |
| 162 | Rent demand bar (`rent-demand-bar`) | Absent | `edu-rent-demand-bar-co` | § 38-12-507; § 38-12-106; § 38-12-507(2) |
| 163 | Rent escalation (`rent-escalation`) | Present | `edu-rent-escalation-co` | §§ 38-12-701; § 38-12-702(1); § 38-12-701(2) |
| 164 | Rent installments (`rent-installments`) | Tagged | `edu-rent-installments-co`, `rent-installments-or (tagged)` | § 38-38-305; § 38-20-107; § 38-12-105(1) |
| 165 | Rent into court counterclaim (`rent-into-court-counterclaim`) | Absent | `edu-rent-into-court-co` | §§ 13-40-118; § 38-12-507(2); § 38-12-507(5) |
| 166 | Rent receipt anti waiver (`rent-receipt-anti-waiver`) | Absent | `edu-rent-receipt-anti-waiver-co` | § 38-12-507; § 11-41-119; § 38-12-502(5) |
| 167 | Rent receipts (`rent-receipts`) | Absent | `edu-no-rent-receipt-rule-co` | § 38-12-208; § 38-12-801(1); § 38-12-103(8) |
| 168 | Rent reporting (`rent-reporting`) | Absent | `edu-no-rent-reporting-rule-co` | §§ 38-12-902; § 24-36-123; § 5-18-103(12) |
| 169 | Rent tax (`rent-tax`) | Present | `edu-rent-tax-co` | §§ 30-11-107.5; § 39-26-104(1); § 39-26-102(11) |
| 170 | Rental inspection (`rental-inspection`) | Absent | `edu-rental-inspection-co` | §§ 30-15-401; §§ 38-12-1004; § 30-28-205(1) |
| 171 | Renters insurance rules (`renters-insurance-rules`) | Absent | `edu-no-renters-insurance-rule-co` | § 38-12-503(13); § 38-12-601(1); § 24-32-735(1) |
| 172 | Repair cost termination (`repair-cost-termination`) | Absent | `edu-no-repair-cost-termination-co` | § 38-12-503(11); § 38-12-508(5); § 38-12-503(4) |
| 173 | Repair escrow exemption notice (`repair-escrow-exemption-notice`) | Absent | `edu-no-repair-escrow-exemption-co` | § 38-12-507(1); § 38-12-507(2); § 13-40-104(5) |
| 174 | Required disclosures (`required-disclosures`) | Present | `edu-required-disclosures-co` | § 38-12-801(2); § 38-12-801(2.5); § 38-12-505(3) |
| 175 | Required fees (`required-fees`) | Present | `required-fees-co`, `edu-required-fees-co` | § 6-1-737(3); § 38-12-103(1); § 6-1-737(4) |
| 176 | Rights responsibilities guide (`rights-responsibilities-guide`) | Absent | `edu-no-rights-guide-co` | § 38-12-803(2); § 25-11-114(2); § 38-12-1104(2) |
| 177 | Rules regulations (`rules-regulations`) | Tagged | `edu-house-rules-co`, `rules-wi (tagged)` | § 38-12-503(3) |
| 178 | Sanitary code variance (`sanitary-code-variance`) | Absent | `edu-no-sanitary-variance-notice-co` | §§ 38-12-503; § 38-12-503(10); § 25-1.5-203 |
| 179 | Seasonal tenancy (`seasonal-tenancy`) | Absent | `edu-no-seasonal-tenancy-rule-co` | § 38-12-1301(12); § 38-12-1302(1); § 38-12-511(1) |
| 180 | Security deposit holding (`security-deposit-holding`) | Absent | `edu-no-deposit-holding-rule-co` | § 38-12-207(3); § 38-12-103(4); § 38-12-103(9) |
| 181 | Security deposit interest (`security-deposit-interest`) | Absent | `edu-no-deposit-interest-rule-co` | § 38-12-207(3) |
| 182 | Security deposit on sale (`security-deposit-on-sale`) | Present | `edu-deposit-on-sale-co` | § 38-12-103(4); § 38-12-103(5); § 38-12-103(6) |
| 183 | Security deposit standards (`security-deposit-standards`) | Absent | `edu-no-deposit-standards-rule-co` | § 38-12-102.5; § 38-12-903(2) |
| 184 | Security devices (`security-devices`) | Present | `edu-security-devices-co` | § 38-12-505(1); § 38-12-505(4); § 38-12-402(7) |
| 185 | Senior housing work card (`senior-housing-work-card`) | Absent | `edu-no-senior-housing-work-card-co` | § 12-10-201(6) |
| 186 | Service animal denial penalty (`service-animal-denial-penalty`) | Present | `edu-service-animal-denial-penalty-co` | § 24-34-803(1); § 24-34-804(1); § 24-34-804(2) |
| 187 | Service animal misrepresentation (`service-animal-misrepresentation`) | Present | `edu-no-service-animal-misrepresentation-co` | § 18-13-107.3; § 18-13-107.7; § 24-34-803 |
| 188 | Servicemember rights (`servicemember-rights`) | Present | `edu-servicemember-rights-co`, `edu-military-status-protected-class-co`, `edu-military-landlord-no-fault-notice-co` | § 28-3-1401; §§ 28-3-1402; §§ 24-34-501(7) |
| 189 | Sex offender disclosure (`sex-offender-disclosure`) | Absent | `edu-no-sex-offender-disclosure-rule-co`, `edu-sex-offender-screening-co` | § 16-22-112(2); § 16-22-110(6); § 16-22-111 |
| 190 | Sex offender occupancy (`sex-offender-occupancy`) | Absent | `edu-no-sex-offender-occupancy-rule-co` | § 18-8-213; § 38-12-904(1) |
| 191 | Sfr occupancy disclosure (`sfr-occupancy-disclosure`) | Absent | `edu-no-sfr-occupancy-disclosure-rule-co` | § 38-12-505(7); § 38-12-803(2); § 38-12-904(1.5) |
| 192 | Shoreline access disclosure (`shoreline-access-disclosure`) | Absent | `edu-no-shoreline-access-disclosure-rule-co` | § 38-35.7-104 |
| 193 | Showing notice waiver (`showing-notice-waiver`) | Tagged | `edu-showing-notice-waiver-co`, `showing-notice-la (tagged)` | §§ 38-12-503(6) |
| 194 | Shutdown rent protection (`shutdown-rent-protection`) | Absent | `edu-no-shutdown-rent-protection-rule-co` | § 24-34-502(1) |
| 195 | Single family zone lease limit (`single-family-zone-lease-limit`) | Absent | `edu-no-single-family-zone-lease-limit-rule-co` | § 29-20-111(3); § 29-35-403(2) |
| 196 | Smart access (`smart-access`) | Absent | `edu-no-smart-access-rule-co` | § 38-12-402(7) |
| 197 | Smoke drift waiver (`smoke-drift-waiver`) | Absent | `edu-smoke-drift-waiver-co` | § 25-14-204(1); § 25-14-205(1) |
| 198 | Social security defense (`social-security-defense`) | Present | `edu-social-security-defense-co` | §§ 13-40-106(2); § 13-40-122(1); §§ 13-40-110(1) |
| 199 | Special district representation (`special-district-representation`) | Absent | `edu-no-special-district-statement-rule-co` | §§ 38-35.7-101; § 32-1-104.8; §§ 1-13.5-202 |
| 200 | Sprinkler disclosure (`sprinkler-disclosure`) | Absent | `edu-no-sprinkler-disclosure-rule-co` | § 38-35.7-107; § 24-33.5-1206.7 |
| 201 | Statute of frauds lease term (`statute-of-frauds-lease-term`) | Present | `edu-statute-of-frauds-lease-term-co` | § 38-10-108; § 38-10-106; § 38-35-109(1) |
| 202 | Statutory caps (`statutory-caps`) | Present | `edu-statutory-caps-co` | § 38-12-102.5; § 38-12-106; § 38-12-105 |
| 203 | Statutory early termination (`statutory-early-termination`) | Present | `edu-statutory-early-termination-co` | § 38-12-507(1); § 38-12-508(5); § 38-12-509(2) |
| 204 | Steam radiator covers (`steam-radiator-covers`) | Absent | `edu-no-steam-radiator-covers-rule-co` | § 9-4-118; § 38-12-505(1) |
| 205 | Stigmatized property (`stigmatized-property`) | Present | `edu-stigmatized-property-co` | § 38-35.5-101 |
| 206 | Stove refrigerator (`stove-refrigerator`) | Present | `edu-stove-refrigerator-co` | §§ 38-12-502(1); § 38-12-507(1) |
| 207 | Student housing (`student-housing`) | Absent | `edu-no-student-housing-rule-co` | § 38-12-511(1); § 29-20-111(3) |
| 208 | Subsidized inspection refusal (`subsidized-inspection-refusal`) | Present | `edu-subsidized-inspection-refusal-co`, `subsidy-inspection-access-co` | § 24-34-502(1); § 24-34-505.6(6) |
| 209 | Substandard property receivership (`substandard-property-receivership`) | Present | `edu-substandard-property-receivership-co` | § 38-12-513 |
| 210 | Tax escalation (`tax-escalation`) | Present | `edu-tax-escalation-co` | § 6-1-737(4); § 6-1-737; § 38-12-801(3) |
| 211 | Telecom access (`telecom-access`) | Present | `edu-telecom-access-co` | §§ 29-27-501; § 29-27-502(6); § 38-12-224 |
| 212 | Tenancy at will (`tenancy-at-will`) | Present | `edu-tenancy-at-will-co` | § 13-40-107(2); §§ 13-40-104(1) |
| 213 | Tenant bankruptcy (`tenant-bankruptcy`) | Absent | `edu-no-tenant-bankruptcy-rule-co` | § 38-12-904(1); § 13-54-107; § 38-31-101(5) |
| 214 | Tenant confidential information (`tenant-confidential-information`) | Present | `edu-tenant-confidential-information-co` | §§ 6-1-713(1); § 6-1-716(2); § 13-40-110.2 |
| 215 | Tenant display rights (`tenant-display-rights`) | Absent | `edu-tenant-display-rights-co`, `tenant-display-rules-co` | § 38-33.3-106.5(1) |
| 216 | Tenant employee housing (`tenant-employee-housing`) | Present | `edu-tenant-employee-housing-co` | § 38-12-511(1); § 38-12-1302(1); § 13-40-104(1) |
| 217 | Tenant forward proceedings (`tenant-forward-proceedings`) | Present | `edu-tenant-forward-proceedings-co` | § 38-38-100.3(14) |
| 218 | Tenant portal (`tenant-portal`) | Present | `edu-tenant-portal-co` | § 38-12-505(3); § 24-71.3-105(3) |
| 219 | Tenant records (`tenant-records`) | Present | `edu-tenant-records-co` | § 38-12-503(5); § 38-12-802; § 38-12-103(8) |
| 220 | Tenant repair agreement (`tenant-repair-agreement`) | Present | `edu-tenant-repair-agreement-co` | § 38-12-506(1); § 38-12-506(3) |
| 221 | Tenant repair remedies (`tenant-repair-remedies`) | Present | `edu-tenant-repair-remedies-co` | § 38-12-507; § 38-12-507(5) |
| 222 | Tenant right to organize (`tenant-right-to-organize`) | Present | `edu-tenant-right-to-organize-co` | § 38-12-509(1) |
| 223 | Tenant screening (`tenant-screening`) | Present | `edu-tenant-screening-co` | § 38-12-904(1) |
| 224 | Tenant statutory duties (`tenant-statutory-duties`) | Present | `tenant-statutory-duties-co`, `edu-tenant-statutory-duties-co` | § 38-12-504 |
| 225 | Term change notice (`term-change-notice`) | Absent | `edu-no-term-change-notice-rule-co` | § 23-41-104; § 38-12-701(2); § 38-12-702(1) |
| 226 | Towing (`towing`) | Present | `edu-towing-co`, `towing-co` | § 40-10.1-405 |
| 227 | Tpa exemption notice (`tpa-exemption-notice`) | Present | `edu-tpa-exemption-notice-co` | § 13-40-104(5); § 38-12-1302(1); § 38-12-801(2.5) |
| 228 | Tpa notice (`tpa-notice`) | Absent | `edu-no-tpa-notice-rule-co` | § 38-7-102; § 38-12-301; § 13-15-101 |
| 229 | Tpa sunset (`tpa-sunset`) | Absent | `edu-no-tpa-sunset-rule-co` | § 38-12-508; § 40-10.1-404; § 40-10.1-405. |
| 230 | Translation duty (`translation-duty`) | Present | `edu-translation-duty-co` | § 38-12-505(3) |
| 231 | Trespass notice (`trespass-notice`) | Present | `edu-trespass-notice-co` | § 18-4-201(3) |
| 232 | Truth in renting (`truth-in-renting`) | Absent | `edu-no-truth-in-renting-act-co` | § 38-12-803; § 2-2-321; § 38-12-803(2) |
| 233 | Unauthorized occupant removal (`unauthorized-occupant-removal`) | Present | `edu-unauthorized-occupant-removal-co` | § 13-40.1-101(2); § 13-40.1-101(1); § 13-40.1-101(4) |
| 234 | Unbundled parking (`unbundled-parking`) | Absent | `edu-unbundled-parking-co`, `unbundled-parking-co` | § 42-4-1102; § 40-10.1-101; § 6-1-737(2) |
| 235 | Unconscionability (`unconscionability`) | Present | `edu-unconscionability-co` | § 38-33.3-112; § 38-12-1307; §§ 4-2-302 |
| 236 | Unpaid damages interest (`unpaid-damages-interest`) | Present | `edu-unpaid-damages-interest-co` | § 5-12-101 |
| 237 | Usufructuary lessor (`usufructuary-lessor`) | Absent | `edu-no-usufructuary-lessor-rule-co` | § 37-92-310; §§ 37-75-102; § 15-1-1201 |
| 238 | Utility apportionment (`utility-apportionment`) | Present | `edu-utility-apportionment-co` | § 6-1-737(4.5); § 6-1-737(4); § 38-12-801(3) |
| 239 | Utility deposit return (`utility-deposit-return`) | Present | `edu-utility-deposit-return-co`, `utility-deposit-co` | § 38-12-102(6); § 38-12-102.5; § 38-12-103 |
| 240 | Utility disclosure attachment (`utility-disclosure-attachment`) | Present | `edu-utility-disclosure-attachment-co` | § 6-1-737(4.5); § 6-1-737(3) |
| 241 | Utility disconnection notice authorization (`utility-disconnection-notice-authorization`) | Absent | `edu-no-utility-notice-authorization-rule-co`, `utility-shutoff-notice-authorization-co` | §§ 29-8-134; § 40-3-103.6(1) |
| 242 | Utility interruption submeter (`utility-interruption-submeter`) | Present | `edu-utility-interruption-submeter-co` | § 38-12-510(1); § 38-12-510(2); § 40-1-103.5 |
| 243 | Utility landlord account (`utility-landlord-account`) | Present | `edu-utility-landlord-account-co` | § 38-12-505(1); § 38-12-507; § 38-12-510(1) |
| 244 | Utility shutoff statute (`utility-shutoff-statute`) | Present | `edu-utility-shutoff-statute-co` | § 38-12-510(1); § 40-3-103.6; § 26-1-109(10) |
| 245 | Utility transfer (`utility-transfer`) | Absent | `edu-no-utility-transfer-cutoff-rule-co`, `utility-transfer-reimbursement-co` | § 38-12-510(1) |
| 246 | Veterans incentive (`veterans-incentive`) | Absent | `edu-no-veterans-incentive-co` | § 24-34-502(1) |
| 247 | Waiver by acceptance (`waiver-by-acceptance`) | Absent | `edu-waiver-by-acceptance-co`, `rent-acceptance-nonwaiver-co` | § 38-12-202(3); § 13-40-104(1) |
| 248 | Water heater temperature (`water-heater-temperature`) | Absent | `edu-no-water-heater-temperature-rule-co` | § 38-12-505(1); § 9-4-104(1) |
| 249 | Waterbed (`waterbed`) | Absent | `edu-no-waterbed-rule-co`, `waterbed-co` | § 38-12-103. |
| 250 | Window guards (`window-guards`) | Absent | `edu-no-window-guard-rule-co` | § 38-12-402(7) |
| 251 | Written notice required (`written-notice-required`) | Present | `edu-written-notices-co` | § 38-12-502(11); § 13-40-107(1); § 13-40-104(1) |

---

## §3 Batteries

**371 batteries across the fifteen slices.** Every one carries a nonsense `zzqqxx` control; every absence battery carries a known positive that contains the term **anchored**, and a `session-laws:` line, because the corpus title text is the 2024 edition and a battery over it alone proves nothing about current law (C17).

One line each: battery, titles searched, hits / control / positive, session-law acts, and the conclusion. The full pattern, context and reasoning for each is in the `=== BATTERY` block of the slice file named in the first column.

**A `[limb R]` or `[limb C]` row is one regex of a battery that originally wrote two or three on a single `pattern:` line** (slices 06 and 09, eleven of them). `battery_sessweep.py` strips the outer quotes and compiles the whole line, so such a line compiled to a valid-but-meaningless regex and was reported `clean` rather than unparsed — the second limb was never actually swept. They were split one regex per line on 2026-10-24 and re-swept; the four limbs that then matched an act carry a `session-law-read` note in the block, and none overtook an absence claim (log §5).

**An empty session-law cell means the battery predates class decision C17**, which was written mid-pass once the defect it guards against was found. Those batteries — in slices 01 to 03, 59 of them — were swept afterwards by the main pass with `bin/battery_sessweep.py`, which ran every one of their patterns over all 927 session-law acts: 59 patterns, 37 matching at least one act, every match read, and **one absence claim overtaken** (log §5, check 0e). From slice 05 on, each slice ran the session-law limb itself and recorded it in the block.

| slice | battery | titles | hits / control / positive | session laws | conclusion |
|---|---|---|---|---|---|
| 01 | `CO-S01-001 abandoned-property-disposal` | 38,13 | 1 (title 38) + 0 (title 13) control: 0 / 0 positive: 38-12-510 PASSED (section opened and saved before the row cited the battery; it is the single hit… |  | In titles 38 and 13 the only provision tying "abandoned" to a tenant's personal property is § 38-12-510, which uses abandonment as a defence to the self-help-eviction ban, not as a disposal procedure. No end-of-tenancy n… |
| 01 | `CO-S01-002 tenant-property-storage-or-disposal` | 38,13 | 0 (title 38) + 3 (title 13) control: 0 / 0 positive: 13-40-122 PASSED (section opened and saved before the row cited the battery; all three hits are i… |  | The only storage-and-disposal rule for a tenant's property in titles 38 and 13 is § 13-40-122(2) to (4), which applies to property removed during or after the execution of a writ of restitution and which itself refers th… |
| 01 | `CO-S01-003 mitigation-duty` | 38,13 | 55 (title 38) + 22 (title 13) control: 0 / 0 positive: 38-12-502 PASSED (opened and saved before the row cited the battery; it contains 'mitigate any … |  | Every hit is a different sense of the word. Title 38: easement erosion (§ 38-1-101.7(2)), mobile home park penalty "mitigating factors" (§ 38-12-1105), habitability "remedial action" (§§ 38-12-502(6.8), 38-12-503), radon… |
| 01 | `CO-S01-004 lease-survives-notice-or-filing` | 38,13 | 4 (title 38) + 0 (title 13) control: 0 / 0 positive: 38-12-701 PASSED (opened and saved before the row cited the battery; it is among the hits and con… |  | The four title 38 hits are the mobile home park termination notice (§ 38-12-202), the rent-increase notice section (§ 38-12-701) and the Condominium Ownership Act (§ 38-33-112). Colorado has no provision preserving a res… |
| 01 | `CO-S01-005 actual-notice-and-agreed-method` | 38,13 | 5 (title 38) + 2 (title 13) control: 0 / 0 positive: 38-22-106 PASSED (one of the hits; a real section, and the phrase is the term of art searched for… |  | In the 2024 title text "actual notice" appears only in the mechanics' lien, certificate-of-title, Torrens and foreclosure contexts (§§ 38-22-106, 38-29-127, 38-29-136, 38-36-131, 38-38-506) and in protection-order and co… |
| 01 | `CO-S01-006 landlord-duty-to-notify-tenant-of-a…` | all 45 corpus titles, 0 … | 2, both in title 38; every other title 0 control: 0 in every title positive: 38-12-217 PASSED (opened and saved before the row cited the battery; it i… |  | In the whole 2024 code only two passages put "tenant" within 150 characters of a foreclosure, condemnation or eminent-domain word: § 38-12-217(12)(e), (f) (mobile home park sale exemptions for transfers between joint ten… |
| 01 | `CO-S01-007 adverse-proceeding-disclosure-to-te…` | all 45 corpus titles, 0 … | 0 in every title [CORRECTED 2026-10-24; superseded figure: "1, in title 13; every other title 0"]. The single recorded hit, § 13-40-127, was the unanc… |  | The one hit is § 13-40-127, the eviction legal assistance fund, which funds advice to indigent tenants in eviction proceedings and imposes nothing on a landlord. Nothing in the code requires a landlord to disclose a pend… |
| 01 | `CO-S01-008 smoke-alarm-statutory-duty` | all 45 corpus titles, 0 … | 2, both in title 38; every other title 0 control: 0 in every title positive: 38-45-101 PASSED (opened and saved before the row cited the battery; both… |  | In the entire 2024 Colorado Revised Statutes the words "smoke alarm" and "smoke detector" occur only twice, both inside the definition of a carbon monoxide alarm, which 'May be combined with a smoke detecting device if t… |
| 01 | `CO-S01-009 alarm-tampering-fee` | all 45 corpus titles, 0 … | 0 in every title control: 0 in every title positive: synthetic only - no section in the corpus contains this pattern, so per rule 19(2) a second batte… |  | Colorado attaches no fee, charge, penalty or fine to tampering with, disabling or removing a smoke or carbon monoxide alarm. |
| 01 | `CO-S01-010 tampering-everyday-words` | all 45 corpus titles, 0 … | 218 across titles 00, 01, 06, 08, 09, 11, 12, 13, 16, 17, 18, 19, 24, 25, 31, 32, 33, 35, 37, 38, 40, 42, 44; title 38 has exactly 3 control: 0 in eve… |  | The engine finds the everyday words in abundance, so the zero in CO-S01-009 is a true empty. In title 38 the only three occurrences are the identical prohibition at §§ 38-45-102(3), 38-45-103(3) and 38-45-104(6). A narro… |
| 01 | `CO-S01-011 animal-care-entry-right` | all 45 corpus titles, 0 … | 2 (title 13) + 2 (title 38) + 2 (title 24); every other title 0 control: 0 in every title positive: 13-40-122 PASSED (opened and saved before the row … |  | In the whole code only three provisions put a landlord near an animal: § 13-40-122(2.5) (what a sheriff and a landlord must do about pet animals when a writ of restitution is executed), § 38-12-106 (pet deposit and pet r… |
| 01 | `CO-S01-012 asbestos-and-tenancy` | all 45 corpus titles, 0 … | 5 in 3 distinct sections, all in title 25 - § 25-7-502 x1, § 25-7-503 x3, § 25-7-504 x1; every other title 0 [CORRECTED 2026-10-24; superseded figure:… |  | Every hit is abatement regulation: the legislative declaration about controlling public exposure to friable asbestos (§ 25-7-501), the "area of public access" definition and its owner-occupier opt-out (§ 25-7-502(1)), co… |
| 01 | `CO-S01-013 asbestos-disclosure` | all 45 corpus titles, 0 … | 1, in title 25; every other title 0 control: 0 in every title positive: 25-7-509.5 PASSED (opened and saved before the row cited the battery; it is th… |  | The only asbestos disclosure Colorado requires is on a building permit application: a local permitting authority 'shall require a property owner applying for either a permit to renovate property or a permit to demolish p… |
| 01 | `CO-S01-014 association-documents-to-tenant` | all 45 corpus titles, 0 … | 16 total, 4 of them in title 38, and in titles 00, 11, 25, 30, 31, 33, 37, 39, 40 control: 0 in every title positive: 38-33.3-310 PASSED (opened and s… |  | Across the whole code only four passages put an association's documents near a tenant or lessee, and only one is operative for a tenancy: § 38-33.3-310(3), under which, if the declaration requires votes on specified matt… |
| 01 | `CO-S01-015 automatic-renewal` | all 45 corpus titles, 0 … | 55 across titles 05, 06, 07, 10, 11, 22, 23, 24, 35, 38 and 44; title 38 has 3 control: 0 in every title positive: 6-1-732 PASSED (opened and saved be… |  | Colorado has no automatic-renewal provision aimed at leases. All three title 38 hits are the Unclaimed Property Act's automatically renewable bank deposits (§§ 38-13-207.5(1), (2), 38-13-603(2)). The only candidate is th… |
| 01 | `CO-S01-016 balcony-inspection-duty` | all 45 corpus titles, 0 … | 0 in every title control: 0 in every title positive: synthetic only - no section in the corpus contains this pattern, so per rule 19(2) the everyday-w… |  | Colorado requires no inspection, survey, certification or engineer's report for a balcony, deck, landing, stair or elevated walkway, and sets no inspection cycle. |
| 01 | `CO-S01-017 balcony-everyday-words` | all 45 corpus titles, 0 … | 16 across titles 09, 18, 24, 25, 32, 33, 38 and 43; title 38 has 6 control: 0 in every title positive: 38-33.3-106.5 PASSED (opened and saved before t… |  | The engine finds the everyday words, so the zero in CO-S01-016 is a true empty. In title 38 the six occurrences are the mobile home park change-of-use and records sections (§§ 38-12-203.5, 38-12-223), the association pub… |
| 01 | `CO-S01-018 lease-arbitration` | all 45 corpus titles, 0 … | 2 - one each in titles 04 and 38 (§ 4-2.5-501 and § 38-12-213) [CORRECTED 2026-10-24; superseded figure: "3 - one each in titles 04, 15 and 38"]. The … |  | Colorado has no statute authorising or regulating arbitration of residential tenancy disputes. The single landlord-tenant hit is the Mobile Home Park Act's prohibited-clause list, which forbids a provision 'That binds a … |
| 01 | `CO-S01-019 cannabis-housing-protection` | all 45 corpus titles, 0 … | 2 - one in title 25, one in title 44; every other title 0, including title 00 (the constitution) control: 0 in every title positive: synthetic for thi… |  | Neither hit protects a tenant. § 25-1.5-106(3)(a) is the state health agency's medical marijuana rulemaking, and § 44-10-103's definition of a controlling beneficial owner refers to 'a lease of real property on which the… |
| 01 | `CO-S01-020 cannabis-everyday-words` | all 45 corpus titles, 0 … | 3430 across titles 00, 06, 09, 10, 11, 12, 13, 16, 18, 19, 22, 23, 24, 25, 26, 27, 28, 29, 32, 35, 39, 42 and 44; title 00 has 231 and title 44 has 21… |  | The engine finds the words everywhere, so the near-empty result in CO-S01-019 is a true empty. Colorado's cannabis law sits in the constitution and in the Colorado Marijuana Code in title 44, and neither reaches resident… |
| 01 | `CO-S01-021 carpet-cleaning-in-the-2024-edition` | all 45 corpus titles, 0 … | 6 - one in title 12, one in title 24, two in title 25, two in title 39; title 38 has 0 and title 13 has 0 control: 0 in every title positive: recorded… |  | The word "carpet" appears nowhere in title 38 or title 13 of the official C.R.S. 2024 edition. Colorado's carpet rules are entirely a 2025 creation and exist only in HB 25-1249, which amends § 38-12-102(4) and § 38-12-10… |
| 02 | `CO-02-001` | 00,01,02,03,04,05,06,07,… | 26 control: 0 positive: 38-12-504(2) PASSED (real section, opened whole) |  | No Colorado statute allocates the risk of casualty loss in a residential lease, declares premises "untenantable" on destruction, or excuses rent on destruction. Title 38's only substantive hits are § 38-5-109's force-maj… |
| 02 | `CO-02-002` | 00 through 44 (all 45 — … | 10 control: 0 positive: 38-12-503(12)(b)(I) PASSED (real section, opened whole) |  | No Colorado statute imposes a landlord duty to mitigate damages or to re-rent after a tenant abandons, and none forbids a lease from addressing it. Title 38's single hit is the positive itself; title 13's two hits are an… |
| 02 | `CO-02-003` | 00 through 44 (all 45 — … | 105 control: 0 positive: 38-35.7-103(4) PASSED (real section, opened whole) |  | Title 38's only certificate-of-occupancy hit is § 38-33.3-303 (a declarant handing an association copies of any certificates of occupancy on turnover of a common interest community) and title 13 has none. The remaining h… |
| 02 | `CO-02-004` | 00 through 44 (all 45 — … | 97 in 60 distinct sections [CORRECTED 2026-10-24; superseded figure: "107"]. This is a plain count error, not a boundary defect: the figure is 97 both… |  | Title 38, which holds all of Colorado's landlord-tenant law, returns zero hits: no Colorado statute requires a lease to state how many children may live in the home, to name the children as occupants, or to carry any chi… |
| 02 | `CO-02-005` | 00 through 44 (all 45 — … | 164 control: 0 positive: 38-12-503(4)(b)(II)(A) PASSED (real section, opened whole — "a refrigerator with a freezer") |  | Title 38's five hits are the positive, two mobile-home-park provisions putting the duty to prevent freezing on whoever has a property interest in the mobile home (C.R.S. § 38-12-208(1)(d)) and treating a likely pipe free… |
| 02 | `CO-02-006` | 00 through 44 (all 45 — … | 94 control: 0 positive: 5-16-111.5(1) PASSED (real section, opened whole — "all fees, costs, and costs of collection") |  | No Colorado statute authorises a landlord to pass a collection cost, collection fee or collection commission to a residential tenant as a lease charge, with one narrow exception the whitespace-tolerant rerun surfaced. Ti… |
| 02 | `CO-02-007` | 00 through 44 (all 45 — … | 208 control: 0 positive: 38-36-169 PASSED (real section, opened whole — "any land held in trust by him") |  | The phrase "communal land" appears nowhere in the Colorado Revised Statutes or the Colorado Constitution. No Colorado statute conditions the validity of a lease of land on a governor's, commissioner's or any other office… |
| 02 | `CO-02-008` | 00 through 44 (all 45 — … | 184 control: 0 positive: 38-12-505(1)(c) PASSED (real section, opened whole — "It is otherwise unfit for human habitation") |  | Colorado has no provision making it unlawful to collect, accept or demand rent for a condemned, closed or placarded dwelling, and no placarding regime in state law. Title 38's single hit is the positive. Title 13 returns… |
| 02 | `CO-02-009` | 00 through 44 (all 45 — … | 16 control: 0 positive: 5-3-207 PASSED (real section, opened whole — "A consumer may not authorize any person to confess judgment") |  | Fifteen hits across the whole code and only two in title 38: the mobile-home-park prohibition at § 38-12-213(5)(d) and the common-interest-ownership rule that 'A unit owner shall not be deemed to have confessed judgment … |
| 02 | `CO-02-010` | 00 through 44 (all 45 — … | 0 control: 0 positive: none real — synthetic only, so a second battery was run on the everyday word (rule 19) |  | Every one of the 45 titles returns 0 hits with a 0 control. The phrase "smoke alarm" and the phrase "smoke detector" appear nowhere in the Colorado Revised Statutes or the Colorado Constitution. Because no real positive … |
| 02 | `CO-02-011` | 00 through 44 (all 45 — … | 248 control: 0 positive: 38-45-104 PASSED (real section, opened whole — "carbon monoxide alarm") |  | The engine finds alarm provisions where they exist, and what exists in Colorado is a carbon monoxide alarm regime only: C.R.S. §§ 38-45-101 to 38-45-106, with § 38-45-104 the rental-property section. Title 38's 47 hits a… |
| 02 | `CO-02-012` | 00 through 44 (all 45 — … | 62 control: 0 positive: 38-12-505(7)(d)(I) PASSED (real section, opened whole — "not higher than eighty degrees Fahrenheit") |  | Rerun of a battery recorded as failed: the first run used a literal space in "degrees Fahrenheit" and returned 0 hits in title 38 even though § 38-12-505(7)(d)(I) contains the phrase, so the positive failed and that run … |
| 02 | `CO-02-013` | 00 through 44 (all 45 — … | 556 control: 0 positive: 38-12-507(2)(g)(I) PASSED (real section, opened whole — "into the court registry") |  | Narrowing the pattern to the rent-specific alternatives leaves exactly one hit in titles 38 and 13 combined — § 38-12-507, where payment into the court registry is a condition of the tenant keeping possession after provi… |
| 02 | `CO-02-014` | 00 through 44 (all 45 — … | 2 control: 0 positive: 38-12-510(1) PASSED (real section, opened whole — "the extended absence of the tenant") |  | Two hits in the whole code, one of which is the positive. "Double letting" appears nowhere, and no Colorado statute addresses letting the same dwelling to two tenants, gives a displaced tenant a remedy for it, or makes i… |
| 02 | `CO-02-015` | 00 through 44 (all 45 — … | 21 control: 0 positive: 38-12-903(1) PASSED (real section, read whole from the main pass's saved extract — "a rental application fee") |  | Title 38's eleven hits are the positive in the Rental Application Fairness Act (§§ 38-12-902 to 38-12-904) plus a mobile-home selling-fee provision (§ 38-12-211); title 13 returns zero. Colorado regulates what a landlord… |
| 02 | `CO-02-016` | 00 through 44 (all 45 — … | 92 control: 0 positive: 38-12-502(5) PASSED (real section, read whole — "sublessor" in the definition of "landlord") |  | Every title 38 hit is incidental: "sublessor" or "sublessee" inside a definition of "landlord" or "tenant" (§§ 38-12-502(5), 38-12-902, 38-12-1001, 38-12-1202), mobile home rent-to-own concurrent leases (§ 38-12-1404), a… |
| 02 | `CO-02-017` | 00 through 44 (all 45 — … | 4 control: 0 positive: 38-12-1106(1) PASSED (real section, opened whole — "Registration of mobile home parks") |  | Four hits in the whole code. Title 38's one hit is the positive, the Division of Housing's annual registration of mobile home parks. Title 30's three hits are a county's limited authority over vacation rental services di… |
| 02 | `CO-02-018` | 00 through 44 (all 45 — … | 20 control: 0 positive: 6-1-105(1)(m) PASSED (real section, opened whole — "Fails to deliver to the customer at the time of an installment sale") |  | Titles 38 and 13 return zero. Title 6's two hits are the positive and a sweepstakes-presentation rule about "excessive blank space" (C.R.S. § 6-1-803). The only Colorado copy-at-signing deceptive practice is confined to … |
| 02 | `CO-02-019` | 00 through 44 (all 45 — … | 68 control: 0 positive: 38-12-217 PASSED (real section, located and read in context; the mobile home park change-of-use and opportunity-to-purchase se… |  | Colorado gives tenants no right of first refusal and no right to purchase on conversion. Title 38's conversion hits for this pattern are confined to the mobile home park regime (§ 38-12-217). A broader "conversion" sweep… |
| 02 | `CO-02-020` | 00 through 44 (all 45 — … | 2 control: 0 positive: 38-12-1303(3)(a) PASSED (real section, read whole from the main pass's saved extract — "convert it to a short-term rental prope… |  | Colorado does not forbid converting rental housing to hotel, short-term rental or other transient use, and does not forbid demolishing it. Instead it regulates the eviction: conversion to a nonresidential use or to a sho… |
| 03 | `co3-addendum-everyday-wholecode` | all 45 corpus titles (00… | 33 across 14 titles, of which **title 38: 2 (§§ 38-12-1404 and 38-21.5-101.5)** and title 13: 0 control: 0 in every one of the 45 titles positive: 28-… |  | the everyday word is well represented, so the zero in article 12's general landlord-tenant provisions is a true empty. Title 38's only addendum provisions are § 38-12-1404 (mobile home rent-to-own, part 14, outside this … |
| 03 | `co3-apply-deposit-to-rent-wholecode` | all 45 corpus titles (00… | 5 (title 15: 2 — §§ 15-15-212, 15-23-105; title 16: 3 — § 16-4-111) — **titles 38 and 13: 0** control: 0 in every one of the 45 titles positive: 16-4-… |  | no provision anywhere in the code gives a tenant a right to apply a security deposit toward rent, and none forbids a lease from saying the tenant may not. The five hits are probate and criminal-bond provisions. Second ba… |
| 03 | `co3-carpet-wholecode` | all 45 corpus titles (00… | 5 (title 24: 1; title 25: 2; title 39: 2) — **titles 38 and 13: 0** control: 0 in every one of the 45 titles positive: 39-3-102 PASSED (real section, … |  | the everyday word returns nothing in the landlord-tenant title of the 2024 edition. This confirms class decision C16: Colorado's whole carpet rule is HB 25-1249's new § 38-12-103(11), which **restricts** retention rather… |
| 03 | `co3-construction-defect-wholecode` | all 45 corpus titles (00… | 82 (title 12: 1; title 13: 41; title 38: 39; title 40: 1) control: 0 in every one of the 45 titles positive: 13-20-802.5 PASSED (real section, opened … |  | every construction-defect provision in the code is either part 8 of article 20 of title 13 (the Construction Defect Action Reform Act, a claimant-versus-construction-professional regime), a CCIOA association-claim provis… |
| 03 | `co3-delivery-of-possession-everyday-wholecode` | all 45 corpus titles (00… | 54 across 7 titles — title 13: 11 (§§ 13-40-101, 104, 106, 107.5, 110.5, 111, 116); title 38: 12 (§§ 38-12-1304, 38-12-510, 38-22.5-106, 38-30-120, 38… |  | the everyday vocabulary is abundant and the engine finds it, so the zero above is a true empty. Every Colorado possession provision is about **recovering** possession (article 40 of title 13 and part 13 of article 12 of … |
| 03 | `co3-deposit-cost-schedule-wholecode` | all 45 corpus titles (00… | 86, of which **title 38 (property and landlord-tenant): 0**; title 13: 3 (§§ 13-21-109.5, 13-21-132, 13-23-103) control: 0 in every one of the 45 titl… |  | nothing in title 38 permits a lease to pre-set a deposit-deduction figure, and no statute anywhere in the code prescribes a tenant notice for a pre-set carpet-cleaning charge. The 86 hits are consumer-credit, insurance, … |
| 03 | `co3-deposit-installment-proximity-wholecode` | all 45 corpus titles (00… | 4 (title 28: 2 — § 28-3-1405; title 39: 1 — § 39-28-305; title 42: 1 — § 42-3-110) — **titles 38 and 13: 0** control: 0 in every one of the 45 titles … |  | both word orders of the proximity pattern return zero in the landlord-tenant title and in title 13. The four hits are a national-guard provision, a tobacco-tax provision and a motor-vehicle provision. Confirmed absent. |
| 03 | `co3-designated-repairer-wholecode` | all 45 corpus titles (00… | 138 in 79 distinct sections with "person" anchored on the right, 141 in 82 sections as the pattern is written, of which **title 38: 6, confined to §§ … |  | the phrase "designated repairer" and its variants appear nowhere in article 12 of title 38. Colorado's rule on who may perform repairs is not framed as a designation but as a default duty on the landlord with one narrow … |
| 03 | `co3-displaced-guests-wholecode` | all 45 corpus titles (00… | 44 — title 12: 1 (§ 12-10-201); title 24: 37 in 10 sections (§§ 24-56-102, 24-56-103, 24-56-104, 24-56-105, 24-56-106, 24-56-108, 24-56-109, 24-56-112… |  | every "displaced person" hit is relocation-assistance or urban-renewal law — article 56 of title 24 compensates people displaced by a government programme or project, and the title 30 and 31 hits are county and municipal… |
| 03 | `co3-double-letting-wholecode` | all 45 corpus titles (00… | **0 in every one of the 45 titles** control: 0 in every one of the 45 titles positive: **synthetic only** — the pattern returns zero code-wide, so no … |  | zero code-wide with a clean control in every title. Because every positive here is synthetic, brief §4.2 requires a second battery on the everyday words, run below. |
| 03 | `co3-drug-free-addendum-wholecode` | all 45 corpus titles (00… | 2 — title 22: 1 (§ 22-14-107); title 28: 1 (§ 28-3-1703) — **titles 38 and 13: 0** control: 0 in every one of the 45 titles positive: 28-3-1703 PASSED… |  | "crime-free" and "one-strike" appear nowhere in the Colorado Revised Statutes, and "drug-free" appears only twice, in a dropout-prevention provision and a military-facility definition. Neither relates to a residential le… |
| 03 | `co3-drywall-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 in every one of the 45 titles positive: 38-33.3-202 PASSED (real section, opened whole; contains "wallboard") |  | "drywall" and "gypsum" return zero code-wide. The single hit is C.R.S. § 38-33.3-202(1)(a), the CCIOA unit-boundary rule listing "wallboard" among finished surfaces that form part of a condominium unit — a boundary-of-ow… |
| 03 | `co3-guest-occupancy-everyday-wholecode` | all 45 corpus titles (00… | 120 across 19 titles, of which **title 38: 16 and title 13: 3**, confined to §§ 38-12-102, 38-12-203, 38-12-214, 38-12-223, 38-12-502, 38-12-503, 38-2… |  | the everyday words are well represented and the engine finds them. Every landlord-tenant hit either makes the tenant answerable for a guest's conduct (§ 38-12-102(4), § 38-12-503(9), § 13-40-107.5(3)) or is a mobile-home… |
| 03 | `co3-installment-everyday-wholecode` | all 45 corpus titles (00… | 718 across 39 titles, including **50 in title 38** confined to §§ 38-20-107, 38-20-205, 38-22-102, 38-22.5-106, 38-33.3-209.5, 38-33.3-315 — **none in… |  | the everyday word is abundant in the code and the engine finds it everywhere, which shows the zero in article 12 is a true empty and not an indexing artefact. Title 38's installment provisions are lien, mechanics'-lien a… |
| 03 | `co3-last-month-rent-wholecode` | all 45 corpus titles (00… | 1 (title 10: § 10-4-110.8) — **titles 38 and 13: 0** control: 0 in every one of the 45 titles positive: 10-4-110.8 PASSED (real section, opened whole;… |  | no Colorado statute uses the phrase "last month's rent", "advance rent" or "prepaid rent" in a landlord-tenant context. The single hit is a homeowner's-insurance practice provision. Session-law screen of the same terms o… |
| 03 | `co3-restoration-and-lease-mandate-wholecode` | all 45 corpus titles (00… | 22 across 11 titles; title 38: 2 (§§ 38-12-505, 38-33.3-106.5); title 24: 1 (§ 24-34-502.2) control: 0 in every one of the 45 titles positive: 24-34-5… |  | the phrase "shall be included in any lease" appears **nowhere in the Colorado Revised Statutes**, so Colorado is not one of the states whose fair housing act forces an accommodation or restoration provision into the leas… |
| 03 | `co3-submetering-wholecode` | all 45 corpus titles (00… | 14 — title 24: 1 (§ 24-32-130); title 25: 2 (§ 25-7-142); title 38: 2 (§§ 38-12-212.7, 38-12-1106); title 40: 9 (§§ 40-1-103, 40-1-103.3, 40-1-103.5, … |  | the word "submeter" does not appear in the 2024 edition's title 38 landlord-tenant provisions at all — it arrives only through HB 26-1013's new § 6-1-737(4.5)(b), a 2026 session law. Title 38's two hits are both mobile-h… |
| 03 | `co3-surrender-notice-wholecode` | all 45 corpus titles (00… | 16 — title 1: 1 (§ 1-2-606); title 5: 2 (§ 5-20-106); title 13: 1 (§ 13-40-108); title 24: 2 (§§ 24-4.1-303, 24-60-2902); **title 38: 10, confined to … |  | the phrase "notice of surrender" appears nowhere in the code. Every title 38 hit is in a section read whole for this slice or already read whole in the main pass (§§ 38-12-1301 and 38-12-1303 are part 13, saved at `src/C… |
| 04 | `co4-abandonment-everyday-wholecode` | all 45 corpus titles (00… | 829 in 393 distinct sections control: 0 in every one of the 45 titles positive: 38-12-510 PASSED (real section, opened whole; "has been abandoned by t… | 19 acts matched (HB 25-1014, HB 25-1084, HB 25-1165, HB 25-1168, HB 25-1201, HB 25-1224, H… | the second battery brief §4.2 requires on the everyday words for the problem. 829 hits code-wide and 134 in title 38 confirm the engine reports real content, and confirm that Colorado legislates the consequence of a tena… |
| 04 | `co4-abatement-everyday-wholecode` | all 45 corpus titles (00… | 1196 in 498 distinct sections control: 0 in every one of the 45 titles positive: 13-58-104 PASSED (real section, opened whole; "Lien of judgment not a… | 28 acts matched, which is expected of a one-word battery on a ubiquitous term (tax abateme… | the everyday words are alive in the code - 1,196 hits - so the proximity battery's zero is a true empty and not an engine failure. Title 38 holds just 9 of them: the single "abat" hit is C.R.S. § 38-1-109, inside the emi… |
| 04 | `co4-background-check-everyday-wholecode` | all 45 corpus titles (00… | 879 in 207 distinct sections control: 0 in every one of the 45 titles positive: 8-2-130 PASSED (real section, opened whole; the "Colorado Chance to Co… | 34 acts matched, as expected of a battery on terms the code uses constantly for licensing,… | the everyday words are heavily used in the code - 879 hits - so the narrow proximity battery's 3 hits are a true result and not an engine failure. Title 38 contributes exactly 1 of the 879. Confirms the first battery. |
| 04 | `co4-condemnation-tenancy-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 6 in 6 distinct sections control: 0 in every one of the 45 titles positive: 38-12-217 PASSED (real section, opened whole; contains both "tenants" and … | 0 acts across all 927 session-law files for 2024b, 2025a, 2025b and 2026a - no 2025 or 202… | both word orders, with a 200-character window written with `[\s\S]` so it crosses the corpus's wrapped lines. The whole code puts a taking and a tenancy within 200 characters of each other six times: § 38-12-217(12)(f) (… |
| 04 | `co4-emergency-contact-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 126 in 74 distinct sections control: 0 in every one of the 45 titles positive: 38-12-212.3 PASSED (real section, opened whole; contains "emergency con… | 12 acts matched, all read and all irrelevant - HB 25-1082 (death certificates and gender i… | title 38 returns exactly 2 hits, both in C.R.S. § 38-12-212.3(5), the Mobile Home Park Act landlord duty. Title 13's 3 hits are "next of kin" in a declaratory-judgment section and a medical-malpractice limitation. Every … |
| 04 | `co4-emergency-number-everyday-wholecode` | all 45 corpus titles (00… | 17 in 15 distinct sections control: 0 in every one of the 45 titles positive: 38-12-212.3 — not matched by this pattern; real positive for this run is… | 0 acts across all 927 session-law files for 2024b, 2025a, 2025b and 2026a. (Class decision… | the second battery required by brief §4.2 on the everyday words. Zero hits in title 38 and zero in title 13. The 17 hits are a veterinary continuity-of-care duty, a car-sharing disclosure, excavation notice, commercial-v… |
| 04 | `co4-employee-screening-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 3 in 3 distinct sections control: 0 in every one of the 45 titles positive: 18-12-112 PASSED (real section, "Private firearms transfers - sale and pur… | 1 act matched - HB 25-1238, read: a firearms act relocating the gun-dealer background-chec… | the only title 38 hit is C.R.S. § 38-12-902(2.5)(e)(I), which is the definition of a portable TENANT screening report - screening of applicants for tenancy, not of employees. The other two hits are firearms sections. No … |
| 04 | `co4-energy-benchmarking-locator` | 0,1,2,3,4,5,6,7,8,9,10,1… | 100 in 43 distinct sections control: 0 in every one of the 45 titles positive: 25-7-142 PASSED (real section, opened whole; "Energy benchmarking - dat… | 10 acts matched, all read at the match - HB 25-1269 (22 hits) and SB 25-039 (3 hits) amend… | a locating battery, not an absence battery. The 49 title 25 hits and 16 title 24 hits concentrate in § 25-7-142 and § 24-38.5-112; every other hit uses "benchmark" in an unrelated sense (pharmacy benefit managers, invest… |
| 04 | `co4-entity-representation-locator` | 0,1,2,3,4,5,6,7,8,9,10,1… | 36 in 18 distinct sections control: 0 in every one of the 45 titles positive: 13-1-127 PASSED (real section, opened whole; "Entities - school district… | 5 acts matched, all read at the match and none altering entity representation - SB 25-240 … | a locating battery, not an absence battery. Colorado's answer is statutory and sits in three places - article 93 of title 13 (the licence requirement and the contempt sanction), § 13-1-127 (the closely held entity except… |
| 04 | `co4-eviction-sealing-proximity-wholecode` | all 45 corpus titles (00… | 0 control: 0 in every one of the 45 titles positive: SYNTHETIC only (four hand-written variants - "sealing of an eviction record", "eviction records m… | 0 acts across all 927 session-law files for 2024b, 2025a, 2025b and 2026a, which is the sa… | Colorado uses neither "sealing" nor "expungement" for eviction records: the statute is built on "suppression" and refers to 'an action pursuant to this article 40' rather than to an "eviction". The proximity battery's ze… |
| 04 | `co4-exculpatory-everyday-wholecode` | all 45 corpus titles (00… | 403 in 205 distinct sections control: 0 in every one of the 45 titles positive: 38-13-1408 PASSED (real section, opened whole; "Indemnification for br… | 15 acts matched (HB 25-1084, HB 25-1152, HB 25-1189, HB 25-1329, SB 25-081, SB 25-264, HB … | the everyday words are everywhere - 403 hits - so the narrow battery's result is real. Title 38's 28 hits fall in 12 sections (§§ 38-13-1408, 38-13-603, 38-13-902, 38-26-105, 38-29-119, 38-30-116.5, 38-33.3-302, 38-38-10… |
| 04 | `co4-exculpatory-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 14 in 8 distinct sections control: 0 in every one of the 45 titles positive: 15-5-1008 PASSED (real section, opened whole; "Exculpation of trustee") | 0 acts across all 927 session-law files for 2024b, 2025a, 2025b and 2026a - the word "excu… | title 38 returns zero and title 13 returns one (§ 13-65-101, a definitions section in the wrongful-conviction compensation article). Colorado's only statutory exculpation rules are fiduciary: a trust term relieving a tru… |
| 04 | `co4-expedited-deposit-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 22 in 19 distinct sections control: 0 in every one of the 45 titles positive: 38-12-104 PASSED (real section, opened whole; contains "seventy-two hour… | 4 acts matched, all read at the match and none a landlord deposit rule - HB 25-1184 (a sev… | title 38 contributes exactly one of the 22 hits, and it is § 38-12-104. Every other hit is bank deposits, election deposits, escrow, decommissioning warranties or authority powers. So the gas-hazard route is the only sta… |
| 04 | `co4-extended-absence-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2 in 2 distinct sections control: 0 in every one of the 45 titles positive: 38-12-510 PASSED (real section, opened whole; contains "the extended absen… | 0 acts across all 927 session-law files for 2024b, 2025a, 2025b and 2026a - no 2025 or 202… | the whole code mentions an occupant absence twice. One is C.R.S. § 23-7-103(1)(b)(III), "Prolonged absence from Colorado" in the in-state tuition residency rules. The other is C.R.S. § 38-12-510(1), where extended absenc… |
| 04 | `co4-fair-housing-locator` | 12 (the real-estate lice… | 0 in title 12 control: 0 in title 12 positive: for the simple term "discriminat\w*" title 12 returns 13 hits in 10 sections, and the real positive ope… | 1 act matched across all 927 session-law files, read: SB 25-035 ('CONCERNING ESTABLISHING … | a locating battery. Colorado's real-estate licensing law contains no separate anti-discrimination ground - the 13 title 12 hits for the simple term are subpoena provisions, crematory and mortuary unlawful acts, social wo… |
| 04 | `co4-family-child-care-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 79 in 23 distinct sections control: 0 in every one of the 45 titles positive: 38-33.3-106.5 PASSED (real section, opened whole; contains "family child… | 6 acts matched, all read at the match and none imposing any duty on a landlord - HB 25-129… | title 38's 8 hits sit in just two sections - C.R.S. § 38-10-111.5 (trusts for public-assistance eligibility) and § 38-33.3-106.5 - and § 32-1-1004.5(6)(h) carries the parallel metropolitan-district rule. Both of the oper… |
| 04 | `co4-farmland-hunting-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 in 3 distinct sections control: 0 in every one of the 45 titles positive: 33-6-208 PASSED (real section; "An owner or lessee seeking to use the exem… | 0 acts across all 927 session-law files for 2024b, 2025a, 2025b and 2026a - no 2025 or 202… | both word orders with a 150-character `[\s\S]` window. The four hits are Colo. Const. art. XVIII, § 12(3) (the trap-and-poison ban, excepting 'the owner or lessee of private property primarily used for commercial livesto… |
| 04 | `co4-fee-in-lieu-of-deposit-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 39 in 28 distinct sections control: 0 in every one of the 45 titles positive: 11-110-108 PASSED (real section, opened whole; 'In lieu of the surety bo… | 2 acts matched, both read at the match and both irrelevant - HB 25-1201 (money transmissio… | **titles 38 and 13 return 0 hits for the entire pattern**, and the sub-pattern "in lieu of a deposit" returns 0 across all 45 titles. Every one of the 39 hits is a licensing, bonding, escrow or banking provision - manufa… |
| 04 | `co4-fire-code-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 283 in 106 distinct sections control: 0 in every one of the 45 titles positive: 24-33.5-1213 PASSED (real section, opened whole; "Fire and building co… | 24 acts matched. Four were read because they bear on this topic and none creates a statewi… | title 38's 17 hits sit in EV-charging, renewable-energy, CCIOA and carbon-monoxide-alarm sections, plus § 38-12-505. The state-adopted fire and building code exists but its enforcement section names only §§ 22-32-124(2),… |
| 04 | `co4-hunting-everyday-wholecode` | all 45 corpus titles (00… | 416 in 111 distinct sections control: 0 in every one of the 45 titles positive: 33-6-116 PASSED (real section, opened whole) | 14 acts matched, as expected of a one-word battery on the state's wildlife vocabulary; the… | the everyday word is alive in the code - 416 hits, 315 of them in title 33 - so the proximity batteries' near-zero is a true result. Title 38 contributes exactly one hit, the § 38-12-511(1)(g) hunting-cabin scope excepti… |
| 04 | `co4-hunting-permission-wholecode` | all 45 corpus titles (00… | 0 control: 0 in every one of the 45 titles positive: SYNTHETIC only (three hand-written variants - "hunting without the written permission of the owne… | 0 acts across all 927 session-law files for 2024b, 2025a, 2025b and 2026a. (Class decision… | Colorado requires no WRITTEN permission to hunt on private land, and the zero here is a wording result that the everyday-word battery below corrects. Because the positives are synthetic, brief §4.2 requires a second batt… |
| 04 | `co4-rent-abatement-proximity-wholecode` | all 45 corpus titles (00… | 0 control: 0 in every one of the 45 titles positive: SYNTHETIC only (four hand-written variants - "rent shall abate", "abatement of the rent", "rent i… | 0 acts across all 927 session-law files for 2024b, 2025a, 2025b and 2026a. (Class decision… | no Colorado statute puts rent abatement or rent apportionment in the same breath, anywhere in the code. Because the only positives are synthetic, brief §4.2 requires a second battery on the everyday word - `co4-abatement… |
| 04 | `co4-security-deposit-everyday-wholecode` | all 45 corpus titles (00… | 88 in 49 distinct sections control: 0 in every one of the 45 titles positive: 38-12-102 PASSED (real section, opened whole) | 9 acts matched, all read at the match - the four landlord acts already in the currency led… | the everyday phrase is alive - 88 hits, 49 of them in title 38 - so the first battery's zero in title 38 is a true result about the subject and not an engine failure. Colorado's deposit regime for ordinary residential re… |
| 04 | `co4-service-agent-lease-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2 in 2 distinct sections - § 5-6-202 and § 38-21.5-103 (superseded figure: 3 in 2 sections, every match a "release" artefact; the reverse limb was als… | 0 acts across all 927 session-law files for 2024b, 2025a, 2025b and 2026a on the anchored … | both word orders with a 250-character `[\s\S]` window and `\b` on every short alternative. 2 hits in 2 sections and neither is a lease-designated agent for service. § 5-6-202(1)(f) (the positive) makes a UCCC creditor ma… |
| 04 | `co4-service-of-process-everyday-wholecode` | all 45 corpus titles (00… | 312 in 183 distinct sections control: 0 in every one of the 45 titles positive: 13-40-112 PASSED (real section, opened whole) | 6 acts matched (HB 25-1084, HB 25-1201, HB 26-1188, HB 26-1237, HB 26-1326, HB 26-1426), a… | the everyday words are heavily used - 312 hits in 183 sections - so the narrow battery's 3 hits are a true result. Title 38's 6 hits are corporate dissolution (§ 38-30-173), CCIOA eminent domain (§ 38-33.3-107), foreclos… |
| 04 | `co4-stay-of-execution-locator` | 0,1,2,3,4,5,6,7,8,9,10,1… | 57 in 24 distinct sections control: 0 in every one of the 45 titles positive: 13-53-105 PASSED (real section, "Stay", the Uniform Enforcement of Forei… | 0 acts across all 927 session-law files for 2024b, 2025a, 2025b and 2026a - no 2025 or 202… | Colorado has no discretionary hardship stay of a writ of restitution and no section headed "hardship". Every "stay of execution" hit is criminal sentencing, bail, foreign-judgment enforcement or administrative-licensing.… |
| 04 | `co4-suppressed-court-record-wholecode` | all 45 corpus titles (00… | 8, all 8 in one section control: 0 in every one of the 45 titles positive: 13-40-110.5 PASSED (real section, opened whole) | 3 acts matched, all read - HB 25-1168, § 7 and SB 25-020, § 1 amend C.R.S. § 13-40-110.5 i… | the statute's own vocabulary finds it immediately, and every one of the 8 hits is in C.R.S. § 13-40-110.5 itself - no other section in any of the 45 titles uses the phrase. This is the whole of Colorado's eviction-record… |
| 05 | `co5-adoption-by-reference-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | present in 16 of the 45 titles for the "incorporate by reference" limb alone (title 24: 12; title 15: 10; titles 11 and 42: 4 each; titles 30, 31: 3 e… | 4 acts matched, every one read - HB 25-1273 (a subject jurisdiction 'MAY INCORPORATE BY RE… | Colorado has an express statutory answer to the frozen-standard question for local codes, so this topic is Present rather than absent. The battery is recorded to fix the scope of the search and to show that the two title… |
| 05 | `co5-fire-suppression-everyday-wholecode` | all 45 corpus titles (00… | 44 in 6 distinct sections control: 0 in every one of the 45 titles positive: 24-33.5-1202 PASSED (real section; contains "fire suppression system" in … | 6 acts matched - HB 25-1077, SB 25-002, SB 25-111, SB 25-312, HB 26-1187 and HB 26-1410 - … | the second battery required by brief §4.2 on the everyday words. The only title 38 hit is again § 38-35.7-107; title 13 returns zero. Title 24's 40 hits are all in article 33.5 part 12 (the fire suppression contractor, s… |
| 05 | `co5-firearms-plainword-wholecode` | all 45 corpus titles (00… | 1,721 in 28 of the 45 titles control: 0 in every one of the 45 titles positive: 18-12-114 PASSED (real section, opened whole; "Secure firearm storage … | 40 acts matched - HB 25-1062, HB 25-1084, HB 25-1098, HB 25-1133, HB 25-1148, HB 25-1168, … | the second battery required by brief §4.2, on the bare everyday words with no proximity requirement. **Title 38 returns zero hits for all four words** - not one occurrence of "firearm", "handgun", "gun" or "weapon" anywh… |
| 05 | `co5-firearms-tenancy-proximity-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 11 in 9 distinct sections control: 0 in every one of the 45 titles positive: 18-12-114.5 PASSED (real section; its (3)(b) puts "firearm" and "leased f… | 2 acts matched, both read and both irrelevant - SB 25-300 (the fire-service and revisor ac… | both word orders with a 180-character `[\s\S]` window so it crosses the corpus's wrapped lines. Titles 38 and 13 return **zero** hits. The 11 hits are a criminal-case bond condition (§ 18-1-1001), the article 12 definiti… |
| 05 | `co5-flood-disclosure-proximity-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 7 in 7 distinct sections control: 0 in every one of the 45 titles positive: 38-12-502 PASSED (real section, opened whole in the main pass; its (4.5) p… | 0 acts across the 2024b, 2025a, 2025b and 2026a session laws - no act puts a flood and a d… | both word orders with a 200-character `[\s\S]` window. The single title 38 hit is the § 38-12-502(4.5) definition; title 13 returns zero. The rest are state risk management and real-property acquisition (§§ 24-30-1305, 2… |
| 05 | `co5-floodplain-terms-wholecode` | all 45 corpus titles (00… | 67 in 10 titles control: 0 in every one of the 45 titles positive: 30-30-102 PASSED (real section heading-screened and opened at the hit; county flood… | 6 acts matched, every one read and none a tenant disclosure - HB 25-1023 (big-game fencing… | the second battery required by brief §4.2, on the technical everyday terms. **Titles 38 and 13 return zero hits for every one of these terms** - Colorado's property and civil-procedure titles never use the words "floodpl… |
| 05 | `co5-foreclosure-tenancy-proximity-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 39 in 20 distinct sections control: 0 in every one of the 45 titles positive: 38-38-305 PASSED (real section, opened whole; its heading and (1.5) carr… | 1 act matched and read - HB 26-1098 ("Concerning modifications to the 'Colorado Public Tru… | Colorado legislates about foreclosure and tenancies, but only about **notice, cure and redemption before and at the sale** - never about what happens to the lease afterwards. No section in titles 38 or 13 preserves a ten… |
| 05 | `co5-foreign-adversary-terms-wholecode` | all 45 corpus titles (00… | 0 in every one of the 45 titles control: 0 in every one of the 45 titles positive: SYNTHETIC only (four hand-written variants - "a foreign adversary m… | 2 acts matched, both read and neither a property restriction - HB 25-1329 (third-party lit… | the second battery required by brief §4.2, run because the first battery's real positive is permissive rather than restrictive. The vocabulary of the 2023-2025 wave of state foreign-ownership statutes is **entirely absen… |
| 05 | `co5-foreign-ownership-proximity-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 5 in 5 distinct sections control: 0 in every one of the 45 titles positive: 10-11-102 PASSED (real section, opened whole; 'any domestic, foreign, or a… | 1 act matched and read - SB 25-276 (immigration data and detention: it bars the release of… | both word orders with a 180-character `[\s\S]` window. The only title 38 hit is an article 30 cross-reference note pointing to § 15-11-111 ('For right of an alien to take real property as an heir, see § 15-11-111'); the … |
| 05 | `co5-furnishings-proximity-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 60 in 21 titles control: 0 in every one of the 45 titles positive: 38-12-1004 PASSED (real section; its (2) puts "upholstered furniture" and "dwelling… | 4 acts matched, every one read and none creating a furnished-rental rule - HB 25-1058 (cri… | **title 13 returns zero hits.** Title 38's 13 hits are the bed bug inspection provisions (C.R.S. § 38-12-1004(2), (5)), a mobile home park landlord duty (§ 38-12-212.3), the habitability requirement that hot water be 'fu… |
| 05 | `co5-governmental-fines-proximity-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 34 in 13 titles control: 0 in every one of the 45 titles positive: 31-15-402 PASSED (real section, opened whole; its (4) puts "fine" and "tenant" with… | 4 acts matched, every one read and none creating or removing a fine pass-through - HB 25-1… | title 13 returns **zero** hits for this pattern, and title 38's twelve are all tenant-protection provisions running the other way (late fees § 38-12-105, immigrant tenant remedies § 38-12-1205, victim-survivor penalties … |
| 05 | `co5-guaranty-proximity-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 119 in 21 titles control: 0 in every one of the 45 titles positive: 38-38-104 PASSED (real section, opened whole; its (1)(c) names 'A surety or guaran… | 3 acts matched, every one read and none a lease-guaranty rule - HB 25-1015 (money bond: a … | the 119 hits are concentrated in consumer credit (title 5: 31), insurance (title 10: 16), higher education (title 23: 13) and the criminal and bail provisions; title 13 returns 2 and title 38 returns 9, and every title 3… |
| 05 | `co5-guest-rights-proximity-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 26 in 9 titles control: 0 in every one of the 45 titles positive: 38-12-502 PASSED (real section, opened whole; its (6.3) puts "guest" and "tenant" wi… | 4 acts matched, every one read and none creating a guest right - HB 25-1090 (the pricing a… | in title 38 the word appears in the part 1 and part 5 definitions (§§ 38-12-102(4), 38-12-502(6.3), 38-12-502(9)), the habitability misconduct exclusion (§ 38-12-503(9)), two Mobile Home Park Act provisions (§§ 38-12-203… |
| 05 | `co5-lease-redemption-proximity-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 11 in 9 distinct sections control: 0 in every one of the 45 titles positive: 38-38-305 PASSED (real section, opened whole; its (1) deems a lessee a li… | 0 acts across the 2024b, 2025a, 2025b and 2026a session laws - no act puts redemption, rei… | the only Colorado redemption right that touches a leasehold is the foreclosure one, where 'a lessee ... shall be considered as a lienor, but without any lien amount' (C.R.S. § 38-38-305(1)) and may redeem under § 38-38-3… |
| 05 | `co5-prospective-tenant-disclosure-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 82 in 8 distinct sections control: 0 in every one of the 45 titles positive: 38-12-505 PASSED (real section, opened whole; its (3)(c) and (3)(d) pre-l… | 2 acts matched, both read - HB 25-1236 (portable tenant screening reports; amends C.R.S. §… | in all 45 titles the statute speaks of a prospective tenant only in the habitability lease-statement duties (C.R.S. § 38-12-505(3)(c), (3)(d)), the mobile home park rule disclosure (§ 38-12-214), the Rental Application F… |
| 05 | `co5-sprinkler-wholecode` | 0,1,2,3,4,5,6,7,8,9,10,1… | 52 in 18 distinct sections control: 0 in every one of the 45 titles positive: 24-33.5-1206.7 PASSED (real section, opened whole; heading and body both… | 8 acts matched, every one read and none creating a landlord duty - HB 25-1077 (backflow-pr… | title 38 returns exactly one hit (§ 38-35.7-107(1)(a)(IV), which only says 'Piping for home fire sprinkler systems shall comply with state and local codes and regulations but are otherwise excluded from this subparagraph… |
| 06 | `B06-01 environmental-covenant / brownfield rea…` | 0,1,2,...,44 (all 45 cor… | 2 forward, 2 reverse (both runs: § 25-15-319 and § 25-15-325, title 25 only; every other title 0) control: 0 in every title positive: § 25-15-325 PASS… | pattern "25-15-31[789]\|25-15-32[0-7]\|amend\s+25-15\|add\s+25-15\|repeal\s+25-15" matched… | the incorporation-into-leases requirement is real and is § 25-15-319(1)(g). The word "brownfield" appears nowhere in the corpus titles, so Colorado has no Mississippi-style requirement that an instrument conveying an int… |
| 06 | `B06-01 environmental-covenant / brownfield rea…` | 0,1,2,...,44 (all 45 cor… | 2 forward, 2 reverse (both runs: § 25-15-319 and § 25-15-325, title 25 only; every other title 0) control: 0 in every title positive: § 25-15-325 PASS… | pattern "25-15-31[789]\|25-15-32[0-7]\|amend\s+25-15\|add\s+25-15\|repeal\s+25-15" matched… |  |
| 06 | `B06-02 health district rental regulations and …` | 0,1,2,...,44 (all 45 cor… | forward 2 (§ 25-1-516, § 38-12-1001), reverse 1 (§ 38-12-1003); every other title 0 control: 0 in every title positive: § 38-12-1003 PASSED (real sect… | 0 acts - the same forward pattern run with `crs.py sess` over the 2024b/2025a/2025b/2026a … | confirmed absent. Colorado gives a county or district public health agency direct nuisance powers over an owner or occupant but places no duty on a landlord to hand the agency's rental regulations to a tenant and no gene… |
| 06 | `B06-02 health district rental regulations and …` | 0,1,2,...,44 (all 45 cor… | forward 2 (§ 25-1-516, § 38-12-1001), reverse 1 (§ 38-12-1003); every other title 0 control: 0 in every title positive: § 38-12-1003 PASSED (real sect… | 0 acts - the same forward pattern run with `crs.py sess` over the 2024b/2025a/2025b/2026a … |  |
| 06 | `B06-03 statutory minimum indoor temperature fo…` | 0,1,2,...,44 (all 45 cor… | forward 11 (§ 8-20-201, §§ 9-4-101, 9-4-116, 9-4-118, § 24-82-601, §§ 25-7-1502, 25-7-1503, § 39-31-101), reverse 3 (§§ 9-4-116, 9-4-118) control: 0 i… | 0 acts - the same forward pattern run with `crs.py sess` over the 2024b/2025a/2025b/2026a … | Colorado's heat requirement is functional, not numerical. Every temperature figure in the corpus belongs to boiler pressure and temperature limits, air-quality and fuel statutes, not to an indoor comfort standard for a r… |
| 06 | `B06-03 statutory minimum indoor temperature fo…` | 0,1,2,...,44 (all 45 cor… | forward 11 (§ 8-20-201, §§ 9-4-101, 9-4-116, 9-4-118, § 24-82-601, §§ 25-7-1502, 25-7-1503, § 39-31-101), reverse 3 (§§ 9-4-116, 9-4-118) control: 0 i… | 0 acts - the same forward pattern run with `crs.py sess` over the 2024b/2025a/2025b/2026a … |  |
| 06 | `B06-04 association restrictions on leasing and…` | 0,1,2,...,44 (all 45 cor… | forward 1 (§ 11-46-101, safe deposit boxes - "lessor means any association"), reverse 8 (§§ 5-1-301, 8-70-114, 12-10-201, 24-82-902, 34-63-102, 36-1-1… | pattern "38-33\.3-[0-9.]+[\s\S]{0,400}(LEASING\|LEASE\|TENANT\|RENTAL)" matched 0 acts; "3… | Colorado regulates associations without regulating what an association may do about renting. The Condominium Ownership Act expressly contemplates bylaw restrictions on leasing a unit and sets no limit on them; CCIOA adds… |
| 06 | `B06-04 association restrictions on leasing and…` | 0,1,2,...,44 (all 45 cor… | forward 1 (§ 11-46-101, safe deposit boxes - "lessor means any association"), reverse 8 (§§ 5-1-301, 8-70-114, 12-10-201, 24-82-902, 34-63-102, 36-1-1… | pattern "38-33\.3-[0-9.]+[\s\S]{0,400}(LEASING\|LEASE\|TENANT\|RENTAL)" matched 0 acts; "3… |  |
| 06 | `B06-05 pre-lease holding deposit, reservation …` | 0,1,2,...,44 (all 45 cor… | 16 in total - title 5 (1), title 11 (1), title 12 (5), title 23 (1), title 25 (2), title 27 (1), title 29 (1), title 36 (3), title 38 (1); every other… | 0 acts - the pattern "holding\s+deposit\|earnest\s+money\|reservation\s+fee\|deposit\s+to\… | confirmed absent. The only title 38 hit is § 38-12-217, the mobile home park owner's notice of sale, which concerns a buyer of the park and not a tenant. The title 12 hits are subdivision-developer registration (§§ 12-10… |
| 06 | `B06-06 holdover rent multiplier or statutory h…` | 0,1,2,...,44 (all 45 cor… | 13 in total - title 2 (3), title 13 (1), title 29 (1), title 35 (1), title 37 (5), title 38 (2); every other title 0 control: 0 in every title positiv… | 1 act matched by "double\s+the\s+rent\|twice\s+the\s+rent\|holdover\|holding\s+over\|per\s… | confirmed absent. The two title 38 hits are § 38-33-112(3) (a condominium-conversion tenant may hold over for the remainder of a ninety-day period on the same lease terms) and § 38-33.3-316(10) (cooperative assessment ev… |
| 06 | `B06-07 waiver or release of the homestead and …` | 0,1,2,...,44 (all 45 cor… | 3 forward and 3 reverse, title 38 only (§ 38-35-118 once, § 38-41-212 twice on each run); every other title 0 control: 0 in every title positive: § 38… | 0 acts for "(waiv\w*\|releas\w*)[\s\S]{0,180}homestead\|homestead[\s\S]{0,180}waiv\w*". A … | Colorado has homestead-waiver law, and it answers the topic in the negative for leases. Every waiver provision is tied to a conveyance or an encumbrance instrument; none reaches a rental agreement, and nothing in article… |
| 06 | `B06-07 waiver or release of the homestead and …` | 0,1,2,...,44 (all 45 cor… | 3 forward and 3 reverse, title 38 only (§ 38-35-118 once, § 38-41-212 twice on each run); every other title 0 control: 0 in every title positive: § 38… | 0 acts for "(waiv\w*\|releas\w*)[\s\S]{0,180}homestead\|homestead[\s\S]{0,180}waiv\w*". A … |  |
| 06 | `B06-08 lease termination for infirmity, incapa…` | 0,1,2,...,44 (all 45 cor… | forward 0 in every title; reverse 0 in every title [CORRECTED 2026-10-24; superseded forward figure: "3 - § 12-240-121 (medical board discipline), § 1… | 0 acts - the reverse-order pattern run with `crs.py sess` over the 2024b/2025a/2025b/2026a… | confirmed absent. No Colorado provision lets a tenant, a family member, a guardian or a personal representative end a residential lease early because of the tenant's health, infirmity, incapacity, or admission to a nursi… |
| 06 | `B06-08 lease termination for infirmity, incapa…` | 0,1,2,...,44 (all 45 cor… | forward 0 in every title; reverse 0 in every title [CORRECTED 2026-10-24; superseded forward figure: "3 - § 12-240-121 (medical board discipline), § 1… | 0 acts - the reverse-order pattern run with `crs.py sess` over the 2024b/2025a/2025b/2026a… |  |
| 06 | `B06-09 disclosure of an outstanding inspection…` | 0,1,2,...,44 (all 45 cor… | forward 1 (§ 30-15-401, a county short-term-rental licensing provision requiring a vacation rental service to remove a listing after a notice of viola… | 0 acts - the pattern "(disclos\w*)[\s\S]{0,250}(condemn\w*\|unfit\s+for\s+occupancy\|notic… | confirmed absent. Colorado has no Minnesota-style duty to disclose outstanding inspection or condemnation orders to a prospective or current tenant, and no placarding-disclosure rule. "Condemnation" in the Colorado statu… |
| 06 | `B06-09 disclosure of an outstanding inspection…` | 0,1,2,...,44 (all 45 cor… | forward 1 (§ 30-15-401, a county short-term-rental licensing provision requiring a vacation rental service to remove a listing after a notice of viola… | 0 acts - the pattern "(disclos\w*)[\s\S]{0,250}(condemn\w*\|unfit\s+for\s+occupancy\|notic… |  |
| 06 | `B06-10 penalty for failing to give inspection …` | 0,1,2,...,44 (all 45 cor… | A 0 in every title; B 0 in every title; C 1, § 38-12-1004 in title 38 and 0 in every other title control: 0 in every title on all three runs positive:… | run A matched 1 act, read: HB 25-1084, § 148 amends § 35-53-132, "Failure to give notice -… | Colorado has no general landlord-entry or inspection-notice statute for site-built residential rentals, so there is no general penalty for entering without notice. Two specific regimes do carry notice duties with consequ… |
| 06 | `B06-10 penalty for failing to give inspection …` | 0,1,2,...,44 (all 45 cor… | A 0 in every title; B 0 in every title; C 1, § 38-12-1004 in title 38 and 0 in every other title control: 0 in every title on all three runs positive:… | run A matched 1 act, read: HB 25-1084, § 148 amends § 35-53-132, "Failure to give notice -… |  |
| 06 | `B06-10 penalty for failing to give inspection …` | 0,1,2,...,44 (all 45 cor… | A 0 in every title; B 0 in every title; C 1, § 38-12-1004 in title 38 and 0 in every other title control: 0 in every title on all three runs positive:… | run A matched 1 act, read: HB 25-1084, § 148 amends § 35-53-132, "Failure to give notice -… |  |
| 06 | `B06-11 key-control policy and employee backgro…` | 0,1,2,...,44 (all 45 cor… | A 2, both in title 24 and both the crime victim compensation fund (§ 24-4.1-102(8.5)(b) and § 24-4.1-109, which make rekeying a lock necessary to a vi… | 0 acts on both runs - pattern A and the capitalised form of pattern B were each run with `… | confirmed absent. Colorado imposes no key-control policy, no master-key accounting, no key-log, and no screening or background-check duty on a landlord's employees or agents, whatever the size of the complex. The only Co… |
| 06 | `B06-11 key-control policy and employee backgro…` | 0,1,2,...,44 (all 45 cor… | A 2, both in title 24 and both the crime victim compensation fund (§ 24-4.1-102(8.5)(b) and § 24-4.1-109, which make rekeying a lock necessary to a vi… | 0 acts on both runs - pattern A and the capitalised form of pattern B were each run with `… |  |
| 06 | `B06-12 penalty for knowingly using a prohibite…` | 0,1,2,...,44 (all 45 cor… | A 0 in every title; B 1, § 29-11.7-103 in title 29 - the local firearm preemption section, where a less restrictive local ordinance is void and unenfo… | 0 acts - the capitalised form of pattern A run with `crs.py sess` over the 2024b/2025a/202… | confirmed absent. Colorado's prohibited-lease-clause regime is voidness only. There is no per-clause fine, no multiple of rent, no statutory damages and no knowing-use offence attached to including a prohibited term in a… |
| 06 | `B06-12 penalty for knowingly using a prohibite…` | 0,1,2,...,44 (all 45 cor… | A 0 in every title; B 1, § 29-11.7-103 in title 29 - the local firearm preemption section, where a less restrictive local ordinance is void and unenfo… | 0 acts - the capitalised form of pattern A run with `crs.py sess` over the 2024b/2025a/202… |  |
| 07 | `CO-S07-B01-landlord-insurance` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 38-12-601 PASSED | 0 acts | The single hit in the whole code is § 38-12-601(3)(b)(III)(A) (tenant's EV-charging certificate of insurance). No provision requires a landlord to carry, maintain or disclose liability insurance on a residential rental. |
| 07 | `CO-S07-B02-renters-insurance` | 0,1,2,3,4,5,6,7,8,9,10,1… | 3 control: 0 positive: 38-12-601 PASSED | 0 acts | Three hits code-wide — § 38-12-601 (EV charging), § 10-4-1503 (portable-electronics insurance brochure) and § 14-10-107 (the domestic-relations automatic injunction). Colorado neither requires nor regulates a renters-ins… |
| 07 | `CO-S07-B03-landlord-lien` | 0,1,2,3,4,5,6,7,8,9,10,1… | 91 control: 0 positive: 38-20-102 PASSED | 3 acts, all read and all irrelevant — HB 25-1154 (limited gaming tax: a commission 'DISTRA… | Present. The landlord lien is § 38-20-102(3), reached through the article 20 part 1 foreclosure machinery. No distress-for-rent procedure survives in Colorado, and the UCC expressly puts a landlord lien outside article 9… |
| 07 | `CO-S07-B04-landlord-registration` | 0,1,2,3,4,5,6,7,8,9,10,1… | 13 control: 0 positive: 38-12-1106 PASSED | 1 act, read — HB 26-1224, § 5 amends § 38-12-1106(8) (mobile home park annual registration… | Confirmed absent. The 13 hits are the mobile home park registry (§ 38-12-1106), the part 13 "primary residence" definition using a voter-registration address (§ 38-12-1301(7)), a court registry for rent (§ 38-12-507(2)),… |
| 07 | `CO-S07-B05-rental-licensing` | 0,1,2,3,4,5,6,7,8,9,10,1… | 39 control: 0 positive: 24-21-602 PASSED | 0 acts | Confirmed absent for residential rentals. All 39 hits are in two places: the bingo and raffles licensing regime in part 6 of article 21 of title 24, which defines a "Landlord licensee" as the holder of a commercial landl… |
| 07 | `CO-S07-B06-rent-acceleration` | 0,1,2,3,4,5,6,7,8,9,10,1… | 5 in 5 distinct sections - §§ 6-1-207, 23-31-901, 24-71.3-103, 38-38-107 and 39-26-104 (superseded figure: 18; the same pattern anchored at the old 12… | 1 act on the anchored pattern — HB 25-1108 ("Letty's Act", effective 2025-09-01), read, ad… | Outside the death-of-tenant rule added by HB 25-1108, Colorado has no statute permitting or regulating the acceleration of rent in a residential lease. The five anchored title-text hits are an adaptive-equipment rental-c… |
| 07 | `CO-S07-B07-duty-to-mitigate` | 0,1,2,3,4,5,6,7,8,9,10,1… | 5 control: 0 positive: 13-24-123 PASSED (read whole; its cross-reference note uses "mitigate damages") | 2 acts, both read and irrelevant — HB 25-1272 (construction-defect actions) and HB 26-1237… | Colorado has no statutory duty for a residential landlord to mitigate damages by reletting, and no statute on reletting at all. All five hits are motor-vehicle, excavation and construction-defect cross-references. The po… |
| 07 | `CO-S07-B08-law-enforcement-landlord` | 0,1,2,3,4,5,6,7,8,9,10,1… | 13 in 11 distinct sections - §§ 13-40-107.5, 13-40-122, 24-4.1-302.5, 24-7-103, 24-7.5-103 x2, 29-5-114, 33-6-115.5, 38-12-402 x2, 38-12-503, 38-12-12… | 10 acts, each read. Relevant: HB 25-1168, § 15 (the whole-section rewrite of § 38-12-402, … | Present but one-directional. In title 38 the pattern returns only § 38-12-402 (emergency calls and victim-survivor confidentiality), § 38-12-1203 (immigration status) and, read in context during the search and not relied… |
| 07 | `CO-S07-B09-crime-free-cooperation` | 0,1,2,3,4,5,6,7,8,9,10,1… | 24 control: 0 positive: 38-12-402 PASSED (the phrase "peace officer assistance" in § 38-12-402(1), saved at src/CO-fee-dv-sections.txt and src/CO-38-1… | 3 acts, each read — HB 25-1168 (relevant, the § 38-12-402 rewrite), SB 25-034 (firearms-de… | Confirmed absent as to any "crime-free" or cooperation mandate. Colorado has no crime-free housing addendum statute, no provision authorising a lease to require a tenant to cooperate with or report to law enforcement, an… |
| 07 | `CO-S07-B10-lead-paint` | 0,1,2,3,4,5,6,7,8,9,10,1… | 49 control: 0 positive: 25-7-1102 PASSED (read whole) | 5 acts, each read and none substantive — SB 25-104, SB 25-206, HB 26-1165 and HB 26-1410 a… | All 49 hits sit in twelve sections of title 25 — part 11 of article 5 (the state lead hazard reduction programme), part 11 of article 7 (lead-based-paint abatement certification), § 25-7-1008 and § 25-16-312. Nothing in … |
| 07 | `CO-S07-B11-lead-lease-notice` | 0,1,2,3,4,5,6,7,8,9,10,1… | 5 control: 0 positive: 25-7-1103 PASSED (read whole) | 0 acts | Confirmed absent. Every hit is inside C.R.S. § 25-7-1103, the rule-making mandate for the abatement certification programme — including § 25-7-1103(1)(f)(I), the only state-required lead document in a dwelling, which a p… |
| 07 | `CO-S07-B12-lease-content` | 0,1,2,3,4,5,6,7,8,9,10,1… | 20 in 16 distinct sections [CORRECTED 2026-10-24; superseded figure: "45", 36 sections]. The leading `(rental\s+agreement\|lease\|rental\s+contract)` … | this pattern matches 5 acts on the whitespace-normalized sweep — HB 25-1058, HB 25-1332, S… | Present. In title 38 the content-requirement sections are § 38-12-801, § 38-12-505, § 38-12-803, § 38-21.5-101.5 (self-service storage, not residential), § 38-33.3-206 and § 38-33.5-105 (common-interest-community declara… |
| 07 | `CO-S07-B13-lease-initials` | 0,1,2,3,4,5,6,7,8,9,10,1… | 45 control: 0 positive: 6-1-1104 PASSED (read whole; § 6-1-1104(4) requires a foreclosure consulting contract to be signed 'with each page being initi… | 2 acts, both read and irrelevant — SB 25-289 (repackaged donated medicine initialed by a p… | Confirmed absent. **There are zero hits in titles 38 and 13** — no lease, rental agreement or tenancy provision anywhere in the code requires initials or a separate signature on a clause. Colorado does impose page-by-pag… |
| 07 | `CO-S07-B14-lease-recording` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2 in 2 distinct sections - § 38-36-166 and § 38-30-137 [CORRECTED 2026-10-24; superseded figure: "8", 7 sections]. The leading bare `lease` matched in… | 0 acts | Present and permissive. The only mandatory lease registration in Colorado is § 38-36-166, for leases of Torrens-registered land for a term of three years or more, and Torrens is closed: § 38-36-101 allows an application … |
| 07 | `CO-S07-B15-lease-term-max` | 0,1,2,3,4,5,6,7,8,9,10,1… | 22 in 21 distinct sections [CORRECTED 2026-10-24; superseded figure: "24", 23 sections]. Two sections drop, both the "release" artefact on the bare `l… | 1 act, read and irrelevant — HB 25-1006 raises the term limits on a school district leasin… | Confirmed absent as to any maximum. Every term cap in the code binds a public lessor — a school district, a college board, a county, a municipality, a special district, the state land board or a transportation entity. Fo… |
| 07 | `CO-S07-B16-spousal-consent-lease` | 0,1,2,3,4,5,6,7,8,9,10,1… | 10 in 8 distinct sections - §§ 1-2-102, 13-21-103, 14-2-207, 16-22-102, 31-10-201, 33-1-102, 38-35-118 x3 and 38-41-202 (superseded figure: 8 in 7 sec… | 0 acts across all 927 session-law files for 2024b, 2025a, 2025b and 2026a on the anchored … | Confirmed absent as to a spousal-consent requirement for leasing, and the anchored run makes the absence stronger rather than weaker. Colorado is not a community-property state and no provision of the 45 titles, and no a… |
| 07 | `CO-S07-B17-lease-type-parity` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 control: 0 positive: 38-12-702 PASSED (read whole) | 1 act, read and irrelevant — SB 25-010 adds § 10-16-170 (electronic delivery of insurance … | Confirmed absent. Only four hits code-wide. § 38-12-702(1)(c) makes the rent-increase frequency limit lease-type-blind; § 13-40-107(1) distinguishes a periodic tenancy from a fixed term only to set which notice applies; … |
| 07 | `CO-S07-B18-lease-type-size` | 0,1,2,3,4,5,6,7,8,9,10,1… | 5 in 4 distinct sections - § 38-12-505 x2, §§ 25-1-120, 25-27-104.5 and 42-4-2402 [CORRECTED 2026-10-24; superseded figure: "7", 6 sections]. The same… | 0 acts | Confirmed absent. No provision sets a minimum type size for a residential lease as a document, and a companion battery for an evidentiary sanction — "(inadmissible\|not admissible\|shall not be received in evidence)" wit… |
| 07 | `CO-S07-B19-liquidated-damages` | 0,1,2,3,4,5,6,7,8,9,10,1… | 47 control: 0 positive: 4-2-718 PASSED (read whole) | 4 acts, each read. Relevant: HB 25-1108 ("Letty's Act", effective 2025-09-01) adds § 38-12… | Present only through the four specific bars. Colorado's only general statement of the penalty doctrine is the sales-article rule that damages 'may be liquidated in the agreement but only at an amount which is reasonable … |
| 07 | `CO-S07-B20-lockout` | 0,1,2,3,4,5,6,7,8,9,10,1… | 32 control: 0 positive: NOT § 38-12-510 — that section contains none of this pattern's five alternatives; the positive is C.R.S. § 8-73-109, read whol… | 3 acts, each read. Relevant: HB 25-1168, § 15 adds § 38-12-402(7), a documented victim-sur… | Confirmed absent as to any opt-in self-help lockout route. **The words "lockout" and "self-help" do not appear anywhere in titles 38 or 13 of the 2024 edition** — all 32 hits are labour-dispute, unemployment-benefit, cri… |
| 08 | `CO-S08-B02-conservation-charge` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: none available - a proximity pattern with 0 code-wide hits has no real positive, so the everyday-term battery CO-S08-B03 was ru… | 0 acts | Nothing in the Colorado Revised Statutes connects an energy-conservation or efficiency measure to a charge on a tenant. The reverse word order was run as a separate pass and also returned 0 hits with a clean control, and… |
| 08 | `CO-S08-B03-energy-terms-simple` | 0,1,2,3,4,5,6,7,8,9,10,1… | 271 control: 0 positive: 38-33.3-106.7 PASSED | 15 acts (2025a HB25-1245, HB25-1269, HB25-1272, HB25-1273, SB25-002, SB25-081, SB25-088, S… | The pattern form is sound and the engine reports real matches - the term appears 271 times across the code, including § 38-33.3-106.7, which was read whole. Colorado regulates energy efficiency through utility programmes… |
| 08 | `CO-S08-B04-meth-tenant-disclosure` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2 control: 0 positive: 38-12-505 PASSED (simple-term run "methamphetamine": 51 hits, control 0, including § 38-12-505(1)(b)(XIV), read whole) | 0 acts for the disclosure proximity pattern in both word orders. The simple term "methamph… | Every hit connecting a drug laboratory to a disclosure duty is in § 38-35.7-103, which runs from seller to buyer on a sale. The reverse word order returned 3 hits, all in the same section. No provision requires a landlor… |
| 08 | `CO-S08-B05-military-zone-disclosure` | 0,1,2,3,4,5,6,7,8,9,10,1… | 53 control: 0 positive: 24-32-118 PASSED (read whole; "military installations") | 2 acts, both read and irrelevant - 2025a HB25-1201 (money transmission; the hit is the def… | Not one of the 53 hits is a disclosure duty owed to a tenant or a buyer. Where the term "military installation" appears it is in local-government planning and notification duties, school and election administration, driv… |
| 08 | `CO-S08-B06-minor-eviction-party` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: none available for the proximity pattern; the everyday-term battery CO-S08-B07 was run per BRIEF §4.2 | 0 acts | No provision of the Colorado Revised Statutes limits who may be named as a defendant in an unlawful-detention action by age, bars an action against a minor tenant, or requires any special step before one. Article 40 of t… |
| 08 | `CO-S08-B07-minor-capacity-terms` | 0,1,2,3,4,5,6,7,8,9,10,1… | 26 control: 0 positive: 13-22-101 PASSED (read whole; the companion run "guardian\s+ad\s+litem" returned 234 hits with a clean control, including § 13… | 1 act for this pattern, 2026a HB26-1058, read and irrelevant (protections for minors featu… | Colorado fixes full age at eighteen for contracting and for litigation and says nothing about a person below eighteen leasing a residence. There is no Colorado equivalent of the statutes in some states that expressly emp… |
| 08 | `CO-S08-B08-mold-disclosure` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: none available for the proximity pattern; the everyday-term battery CO-S08-B09 was run per BRIEF §4.2 | 0 acts | Nothing in the Colorado Revised Statutes ties mold to a disclosure or a tenant notification. The word boundary matters: without it the pattern also catches "molders" and "mould"-type artefacts, which is why the heading s… |
| 08 | `CO-S08-B09-mold-terms-simple` | 0,1,2,3,4,5,6,7,8,9,10,1… | 39 control: 0 positive: 38-12-503 PASSED (read whole; § 38-12-505 also read whole) | 1 act, 2025a HB25-1245, opened and read: it is the public-school facilities act, and the h… | Every mold reference in the code that bears on a tenancy is in part 5 of article 12 of title 38 - the definitions section, the warranty of habitability and the uninhabitability list. The other hits are a school-facilitie… |
| 08 | `CO-S08-B10-utility-lien-owner-exemption` | 0,1,2,3,4,5,6,7,8,9,10,1… | 11 control: 0 positive: 37-85-103 PASSED (read whole; it contains both "water" and "affidavits" within the window; the companion run "affidavit[\s\S]{… | 2 acts across the two patterns, both opened and read at their enacting titles and found no… | Colorado has no statutory counterpart to the owner-protective schemes in other states - no affidavit a non-occupying owner can file with the utility, no exemption for a bill incurred by a tenant, and no provision making … |
| 08 | `CO-S08-B11-nonrefundable-deposit` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 38-12-902 PASSED (read whole; the simple-term run "nonrefundable\|non-refundable" returned 60 hits across 53 sections, control … | 2 acts for this pattern, both opened and read - 2025a SB25-299 (consumer protection in res… | Colorado has no statute authorising a nonrefundable deposit, no notice requirement attached to one and no prescribed wording. The only place the word appears in landlord-tenant law is the definition of a rental applicati… |
| 08 | `CO-S08-B12-nonrefundable-separate-notice` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: none available for the proximity pattern; the everyday-term run "(separate\s+writing\|separate\s+written\s+(notice\|document\|i… | 0 acts for both patterns | Colorado nowhere requires a separate written notice, acknowledgment or addendum about a nonrefundable deposit or fee. The state does use the separate-document device - § 38-12-506(1)(a) requires a tenant repair agreement… |
| 08 | `CO-S08-B13-nonresident-owner-agent` | 0,1,2,3,4,5,6,7,8,9,10,1… | 43 in 33 distinct sections [CORRECTED 2026-10-24; superseded figure: "54", 43 sections]. The defect ran on both sides: the leading `(nonresident\|non-… | 4 acts, each opened and read at its enacting title and none creating a landlord duty - 202… | Of the 54 hits, the overwhelming majority are false positives on "nonresidential" or concern motor vehicles, insurance producers, tax schedules and off-highway vehicles. Not one requires a nonresident or out-of-state lan… |
| 08 | `CO-S08-B14-notice-service-charge` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 16-19-129 PASSED, this forward limb's own single code-wide hit (read whole; an extradition cost provision). § 13-54.5-106 is a … | 0 acts in both word orders | The single hit is § 16-19-129, an extradition cost provision. The reverse word order returned three hits - § 13-54.5-106 (garnishment notice costs), § 16-19-129 and § 38-12-201.5 (the mobile home park definitions, which … |
| 08 | `CO-S08-B15-notice-to-quit-waiver` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 13-40-104 PASSED (read whole; the everyday-term run "(waiv\w+)[\s\S]{0,200}notice" returned 122 hits across 76 sections with a … | 0 acts for the proximity pattern, on which this finding rests. The everyday-term run match… | No Colorado provision permits a lease to waive, shorten or substitute for a statutory notice to quit or demand for possession. The single proximity hit is § 19-5-109, a relinquishment provision in the children's code. Co… |
| 08 | `CO-S08-B16-alterations-during-notice` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: none available for the proximity pattern; the everyday-term run "notice\s+to\s+vacate" returned 4 hits with a clean control in … | 0 acts for the proximity pattern. The everyday-term run matched 2025a HB25-1168, read in t… | Colorado has no provision of the District of Columbia kind expressly forbidding alterations that render a unit uninhabitable while a notice to vacate is pending. It does not need one: the warranty of habitability runs th… |
| 08 | `CO-S08-B17-ordnance-disclosure` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 28-3-106 PASSED (the battery's own hit; saved whole to the slice reads file and read out at (1)(m), where the adjutant general … | 0 acts | The word "ordnance" appears once in the whole Colorado code, in the adjutant general's custody duties. Colorado has no former-ordnance-location disclosure of the California kind, no unexploded-ordnance registry and nothi… |
| 08 | `CO-S08-B18-demolition-disclosure` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 control: 0 positive: 38-12-1303 PASSED (read whole in the main pass and saved at src/CO-38-12-1303.txt) | 0 acts | The hits are § 38-12-1303 (the no-fault eviction grounds), § 24-82-802 (state buildings) and § 25-7-509.5 (air quality). Colorado has no duty to disclose a planned demolition, a demolition permit or a pending demolition … |
| 09 | `CO-S09-B01-scheduled-service` | 0,1,2,3,4,5,6,7,8,9,10,1… | 93 control: 0 positive: 38-12-212.3 PASSED | 16 acts, each read by snippet and none on landlord entry or scheduled services at a rental… | The only title 38 match for scheduled-service language is § 38-12-212.3(4)(b), a Mobile Home Park Act provision about covenants on lot cleanliness and 'routine lawn and yard maintenance' (C7, mobile home parks are a sepa… |
| 09 | `CO-S09-B02-entry-notice` | 0,1,2,3,4,5,6,7,8,9,10,1… | 8 in 6 distinct sections - § 38-12-503 x2, § 38-12-1006, §§ 12-225-103, 16-4-109, 24-32-3327 x2 and 27-64-101 [CORRECTED 2026-10-24; superseded figure… | 0 acts | Code-wide, the only residential-tenancy entry-notice provisions are § 38-12-503(6) (part 5 remedial action) and part 10 of article 12 of title 38 (bed bugs, § 38-12-1004(1)(a), which the pattern reaches through § 38-12-1… |
| 09 | `CO-S09-B03-pesticide-notice` | 0,1,2,3,4,5,6,7,8,9,10,1… | 15 control: 0 positive: 35-10-112 PASSED | 1 act - HB 25-1084 (2025a ch. 24), read: a gender-neutral drafting act that amends § 35-10… | Every pesticide notification duty in the code sits in article 10 of title 35 and binds a licensed or registered applicator, not a landlord as such. The one landlord-facing notice duty for pest work is the part 10 bed-bug… |
| 09 | `CO-S09-B04-fact-sheet` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: § 38-12-505 is NOT a hit of this pattern - CORRECTED 2026-10-24 by bin/positivecheck.py, which runs every block's own pattern o… | 0 acts | The phrase "fact sheet" does not appear anywhere in titles 00 to 44 of the 2024 edition or in any 2024 to 2026 session law. The positive was tested on the same run by adding the alternative "community cooling spaces", a … |
| 09 | `CO-S09-B05-brochure` | 0,1,2,3,4,5,6,7,8,9,10,1… | 60 control: 0 positive: 38-12-803 PASSED | 3 acts, each read by snippet and none a landlord-to-tenant document duty - SB 25-063 (publ… | Of 60 code-wide hits, only two are in title 38: § 38-12-803 (the radon brochure a landlord must give a tenant) and § 38-35.7-112 (the radon brochure a seller must give a buyer). The rest are insurance, workers compensati… |
| 09 | `CO-S09-B06-pet-eviction` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: § 38-12-505 is NOT a hit of this pattern either - CORRECTED 2026-10-24, as for CO-S09-B04, whose block now carries the reasonin… | 0 acts | No provision in the code or the session laws connects a pet to an eviction through any informational document. Colorado's one pet-and-eviction rule is the post-writ animal duty already carried by `edu-writ-pet-animal-dut… |
| 09 | `CO-S09-B07-plain-language` | 0,1,2,3,4,5,6,7,8,9,10,1… | 88 control: 0 positive: 38-12-212.9 PASSED | 14 acts, each read by snippet and none imposing a readability or plain-language standard o… | The only plain-language duty anywhere in article 12 of title 38 is § 38-12-212.9(3), which applies to a mobile home park landlord. The 88 code-wide hits are collision damage waivers (§ 6-1-203(1)(a)), artificial intellig… |
| 09 | `CO-S09-B08-consumer-contract` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: 38-12-212.9 PASSED | 0 acts | Neither "consumer contract" nor any statement of consumer restrictions or rights appears in the 2024 edition or in any 2024 to 2026 session law. The positive was tested on the same run by adding the alternative "clear an… |
| 09 | `CO-S09-B09-political-access` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: § 38-12-509 is 'Prohibition on retaliation' and contains none of this pattern's terms - it is NOT a hit, CORRECTED 2026-10-24. … | 0 acts | No Colorado provision connects political activity, canvassing or candidate access to a tenant, a dwelling unit, an apartment or a residential premises. The positive was tested on the same run by adding the alternative "O… |
| 09 | `CO-S09-B09R-political-access-reverse` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: § 38-12-509 is NOT a hit of this limb either - CORRECTED 2026-10-24, as for CO-S09-B09, whose block carries the reasoning. 0 hi… | 0 acts | The reverse order returns the same empty result over both the 2024 title text and the 2024 to 2026 session laws. Recorded as its own block because a battery line holding two patterns cannot be parsed by battery_sessweep.… |
| 09 | `CO-S09-B10-canvass` | 0,1,2,3,4,5,6,7,8,9,10,1… | 283 control: 0 positive: not applicable - this is a presence battery and its own 283 live hits (124 of them in title 1 alone) prove the engine reports… | 4 acts, each read by snippet and all election administration - HB 25-1225 (election offici… | Every one of the 283 hits is election canvassing - canvassing boards and abstracts of votes in titles 1, 31 and 32, and water, irrigation and drainage district elections in title 37, which alone accounts for 77. Title 38… |
| 09 | `CO-S09-B11-pool` | 0,1,2,3,4,5,6,7,8,9,10,1… | 17 control: 0 positive: 25-5-809 PASSED | 3 acts, each read by snippet and none bearing on a residential pool - HB 25-1165 (nontribu… | Code-wide, every swimming-pool provision sits in part 8 of article 5 of title 25, and § 25-5-809 takes a resident-only pool at a single-family dwelling, condominium or apartment house out of that part. Title 38 contains … |
| 09 | `CO-S09-B12-pool-barrier` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 25-5-809 PASSED (as recorded for CO-S09-B11) | 0 acts | The one hit code-wide is § 24-30-1510.5, the state property insurance coverage list, which excludes swimming pools from ice-and-snow-weight cover. No Colorado statute requires a pool to be fenced, enclosed or guarded, an… |
| 09 | `CO-S09-B13-plug-in-solar` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 38-30-168 PASSED | 1 act - HB 26-1007 (2026a ch. 127, approved 2026-05-07, effective 2026-08-12 if sine die w… | Nothing on portable-scale or plug-in solar appears in the 2024 title text - the only place solar sits within sixty characters of a tenant, lessee or renter is § 40-2-127, the community solar garden provision - but the se… |
| 09 | `CO-S09-B14-solar-title38` | 0,1,2,3,4,5,6,7,8,9,10,1… | 411 control: 0 positive: not applicable - a presence battery whose 411 live hits are themselves proof the engine reports the term; the title 38 hits w… | 19 acts on the bare word "solar". A narrowing run (solar within 200 characters of lease, t… | Title 38 holds 38 solar hits in eight sections: § 38-30-168 (void instrument restrictions, with the leased-property carve-out at (3)(b)), §§ 38-32.5-100.3 to 38-32.5-103 (solar easements created by instrument), § 38-32-1… |
| 09 | `CO-S09-B15-possession-bond` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: § 38-12-503 is the warranty of habitability and contains neither "possession bond" nor "bond for possession" - it is NOT a hit,… | 0 acts | Neither "possession bond" nor "bond for possession" appears in the 2024 edition or in any 2024 to 2026 session law. The positive was tested on the same run by adding the alternative "warranty of habitability", which retu… |
| 09 | `CO-S09-B16-confessed-judgment` | 0,1,2,3,4,5,6,7,8,9,10,1… | 15 control: 0 positive: 38-12-213 PASSED | 1 act - HB 26-1237, read: a revisory act replacing "accident" with "CRASH" in the motor-ve… | Of 15 code-wide hits, two are in title 38: § 38-12-213(5)(d), the mobile home park bar on a third-person confession of judgment, and § 38-33.3-123(1)(e), which provides that a unit owner is not to be deemed to have confe… |
| 09 | `CO-S09-B17-private-well` | 0,1,2,3,4,5,6,7,8,9,10,1… | 33 control: 0 positive: C.R.S. § 30-20-109 PASSED (real section, read whole; it contains 'any public or private water well' anchored). CORRECTED 2026-… | 2 acts, both read by snippet and neither a landlord duty - HB 25-1165 (shallow geothermal … | Of 33 code-wide hits, 16 are in title 37 (water law and well permits), the rest are in titles 24, 25, 30, 34, 35, 36 and 38 (§ 38-30-102, conveyancing). No provision requires any landlord to test a private well or to giv… |
| 09 | `CO-S09-B18-water-testing` | 0,1,2,3,4,5,6,7,8,9,10,1… | 59 control: 0 positive: 25-1.5-206 PASSED (on the same run with the alternative "public water systems" added, which returned 73 title 25 hits includin… | 5 acts, each read by snippet and none imposing a water-testing or disclosure duty on a res… | The code's water-testing duties fall on public water systems (part 2 of article 1.5 of title 25 and article 8 of title 25) and on schools and child care facilities (§ 25-8-903). Title 38 contains no water-testing provisi… |
| 09 | `CO-S09-B19-promises-to-repair` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 control: 0 positive: § 38-12-502 is the part-5 definitions section and is NOT a hit - CORRECTED 2026-10-24. The only anchored match of this pattern … | 0 acts | Four hits code-wide, none in title 38 or 13 on this subject - § 2-2-2102 (legislative drafting), § 6-1-1502 (a consumer-protection definition), § 12-170-102 and § 43-1-1103. Colorado requires no written promise, no compl… |
| 10 | `CO-S10-B01-prop65-chemical-warning` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: C.R.S. § 27-80-116 PASSED (read whole, saved) | 1 act — HB 26-1135 (2026a ch. 228), read: from 2027-07-01 a manufacturer must put a carcin… | Colorado has no general chemical-exposure warning or posting duty for residential rental property, and nothing resembling California's Health and Safety Code Proposition 65 regime. Hazard-specific Colorado duties exist a… |
| 10 | `CO-S10-B02-property-tax-and-rent` | 0,1,2,3,4,5,6,7,8,9,10,1… | 14 control: 0 positive: C.R.S. § 39-5-108.5 PASSED (read whole, saved) | 3 acts, each read. HB 25-1090 (the fee act) — the match is § 6-1-737(4)(c), the bar on a f… | No Colorado provision requires a landlord to tell a tenant what part of the rent is property tax, annually, on a rent change, or at all. The title-text hits are the furnished-rental assessor duty (§ 39-5-108.5), the rent… |
| 10 | `CO-S10-B03-unlawful-use-voids-lease` | 0,1,2,3,4,5,6,7,8,9,10,1… | 7 control: 0 positive: C.R.S. § 16-13-310 PASSED (read whole, saved); §§ 18-10-107 and 16-13-303 also read whole | 1 act — HB 25-1084, § 18 (amends § 35-5-110, public nuisance abatement of noxious weeds, i… | Confirmed absent. Colorado has no statute of the Rhode Island type making a lease void or annulled when the premises are used for a prohibited purpose. The tenant's unlawful use is instead reached by the public-nuisance … |
| 10 | `CO-S10-B03b-unlawful-purpose-simple` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 control: 0 positive: title 7 corporate-purpose provisions and one title 18 provision are the whole return; the everyday-phrase check for CO-S10-B03 | 0 acts | The everyday phrase for the problem returns nothing on leases anywhere in the code, which is the second battery class decision 19 asks for before an absence is recorded. |
| 10 | `CO-S10-B04-recycling-notice` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: C.R.S. § 25-17-403 PASSED (read whole, saved — paint stewardship definitions, "curbside service" reaching single- and multi-fam… | 1 act — HB 25-1273, read: a single-exit-stairway building standard for a subject jurisdict… | Confirmed absent. Colorado has nothing like ORS 90.318. The landlord's waste duty is to supply and service exterior receptacles as a habitability characteristic; the tenant's is to dispose of waste lawfully; and recyclin… |
| 10 | `CO-S10-B05-waste-at-a-rental` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 control: 0 positive: C.R.S. §§ 38-12-504 and 38-12-505 PASSED (both read whole, saved) | 2 acts, both read — HB 25-1273 (the single-exit-stairway building standard described in CO… | The everyday words for the problem return only the two part 5 provisions (the landlord's receptacle duty and the tenant's disposal duty), a theft provision and the municipal nuisance power. No recycling duty anywhere. |
| 10 | `CO-S10-B06-religious-cultural-display` | 0,1,2,3,4,5,6,7,8,9,10,1… | 15 in 8 distinct sections [CORRECTED 2026-10-24; superseded figure: "16", 9 sections]. The alternative "text" inside `religious[\s-]*(?:\w+[\s-]*)?(it… | 1 act — SB 25-276 ("AN ACT CONCERNING MEASURES TO PREVENT THE VIOLATION OF THE CIVIL RIGHT… | Confirmed absent for landlord and tenant. The 16 hits are the common-interest-community provision, school and higher-education provisions (§§ 22-1-142.5, 22-2-117, 22-30.5-104, 22-30.5-507, 23-1-137.7), a corrections pro… |
| 10 | `CO-S10-B07-display-right-near-a-tenancy` | 0,1,2,3,4,5,6,7,8,9,10,1… | 14 control: 0 positive: C.R.S. § 38-12-801 PASSED (read whole in the main pass, saved at src/CO-38-12-801-whole.txt) | 1 act — HB 25-1090, the fee act, already read in full for class decision C15; its match is… | Nothing in the code places a flag, banner, decoration or display right or restriction inside a landlord-tenant relationship. The title 38 hits are §§ 38-12-511 (part 5 scope), 38-12-801 (prohibited lease clauses), 38-12-… |
| 10 | `CO-S10-B08-rent-concession` | 0,1,2,3,4,5,6,7,8,9,10,1… | 64 control: 0 positive: C.R.S. § 38-12-104 PASSED (read whole, saved — 'any rent rebate owed to the tenant for rent paid by the tenant for the period … | 4 acts, each read. HB 25-1108 "Letty's Act" is the one that bites and is carried in the ro… | Colorado has no statute regulating a rent concession, requiring it to be disclosed in the lease, or permitting or forbidding a clawback outside the death-of-tenant case. The subject is left to the lease, inside the three… |
| 10 | `CO-S10-B09-rent-control` | 0,1,2,3,4,5,6,7,8,9,10,1… | 7 control: 0 positive: C.R.S. § 38-12-301 PASSED (read whole, saved) | 1 act — HB 25-1209, read: marijuana business licensing and controlling beneficial owners; … | Present, and the answer is preemption rather than regulation. There is no statewide rent cap, no rent-stabilization scheme and no rent board. The remaining hits are § 38-12-224 (a part-3 heading artifact), §§ 18-3-301, 2… |
| 10 | `CO-S10-B10-substandard-unit-and-rent` | 0,1,2,3,4,5,6,7,8,9,10,1… | 8 control: 0 positive: C.R.S. § 38-12-507 PASSED (read whole, saved) | 0 acts | Confirmed absent as a bar; Present as a defence and a valuation rule. The eight hits are §§ 38-12-503, 38-12-507, 38-12-1402 (rent-to-own) and 24-56-117. Colorado does not forbid the demand; it strips the rent of value f… |
| 10 | `CO-S10-B11-no-collect-rent-prohibition` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: C.R.S. § 38-12-106 PASSED (pet deposit and pet rent limits; a real section containing the construction searched for) | 1 act — HB 25-1168, read (already read in full for class decisions P4, P5 and P7): § 38-12… | The direct construction — a statute telling a landlord not to collect or demand rent — appears once in the whole code, and it is the pet-charge section. Colorado has enacted no rent-demand bar. |
| 10 | `CO-S10-B12-rent-indexing` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: NONE FOUND — no real or synthetic positive exists for this proximity, so this battery is cited only together with the everyday-… | 0 acts | Nothing in Colorado law indexes residential rent, authorises or regulates an escalation clause, or ties a rent adjustment to a published index. Recorded as an absence only on the strength of CO-S10-B13. |
| 10 | `CO-S10-B13-rent-increase-everyday` | 0,1,2,3,4,5,6,7,8,9,10,1… | 31 control: 0 positive: C.R.S. §§ 38-12-701, 38-12-702 and 38-12-509 PASSED (all read whole, saved) | 1 act — HB 26-1224, read: mobile home park registration and opportunity-to-purchase provis… | Full section enumeration with scratch/slice-10/allsecs.py, because crs.py grep caps its own listing at 14 hits per title: 31 hits in 14 sections — §§ 6-1-735, 24-32-718, 24-32-728, 29-4-1201, 38-12-201.5, 38-12-204, 38-1… |
| 10 | `CO-S10-B14-rent-installments` | 0,1,2,3,4,5,6,7,8,9,10,1… | 43 control: 0 positive: C.R.S. § 38-38-305 PASSED (read whole, saved — 'Lessee, easement holder, and installment land contract vendor considered as li… | 3 acts, each read. HB 25-1168 (the victim-survivor act, read in full for class decisions P… | Full section enumeration with scratch/slice-10/allsecs.py: 43 hits in 29 sections, none in a residential landlord-tenant setting — UCC leases of goods (§§ 4-2.5-103, 406, 508, 509, 510, 522, 523), foreclosure (§ 38-38-30… |
| 10 | `CO-S10-B15-partial-payment-of-rent` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: NONE FOUND for this proximity; the everyday-word battery CO-S10-B16 below carries the absence, as brief §4(2) requires | 0 acts | The phrase "partial payment" never appears anywhere in the code within 150 characters of "rent". Colorado has no partial-payment-of-rent rule at all — no waiver rule, no acceptance rule, and nothing characterising an ins… |
| 10 | `CO-S10-B16-partial-payment-everyday` | 0,1,2,3,4,5,6,7,8,9,10,1… | 172 control: 0 positive: C.R.S. § 38-20-107 PASSED (read whole, saved — 'installments or continuing payments shall be deemed to be due after default o… | 8 acts — HB 25-1117, HB 25-1184, SB 25-081, SB 25-162, HB 26-1311, SB 26-150, SB 26-178, S… | The everyday phrase is common in the code but exclusively about taxes, utility charges, consumer credit, bonds and judgments. Nothing applies it to rent, which confirms the absence CO-S10-B15 records. |
| 10 | `CO-S10-B17-rent-into-court` | 0,1,2,3,4,5,6,7,8,9,10,1… | 3 control: 0 positive: C.R.S. §§ 13-40-118 and 38-12-507 PASSED (both read whole, saved) | 0 acts | Confirmed absent as to any pay-to-defend or rent-escrow requirement. The whole of the code places rent in court in exactly two places, both read whole: § 13-40-118 (the deposit that perfects a county-court appeal in a § … |
| 10 | `CO-S10-B18-receipt-of-rent-and-the-repair-duty` | 0,1,2,3,4,5,6,7,8,9,10,1… | 3 control: 0 positive: C.R.S. § 38-12-507 PASSED (read whole, saved) | 0 acts | Confirmed absent. Colorado has nothing like the rule in several other states that whoever receives the rent keeps the repair duty whatever a lease, assignment, deed, trust deed or security instrument says — and nothing t… |
| 10 | `CO-S10-B19-assignment-of-rents` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: C.R.S. § 11-41-119 (savings and loan association powers) — the only section in the code using the phrase; a real section, so th… | 0 acts | Colorado has no general assignment-of-rents statute at all, so there is no statutory vehicle by which an assignment of rents could carry the rent and leave the habitability duty behind. A separate check on the phrase "re… |
| 10 | `CO-S10-B20-rent-receipts` | 0,1,2,3,4,5,6,7,8,9,10,1… | 18 control: 0 positive: C.R.S. § 38-12-208 PASSED (read whole, saved — 'Upon receipt of the writ of restitution' within the window of the pro rata dai… | 0 acts | Confirmed absent. Full section enumeration with scratch/slice-10/allsecs.py: 18 hits in 17 sections — §§ 4-2.5-406, 4-2.5-508, 4-2.5-522 (UCC leases of goods), 12-280-142, 14-10-114, 14-10-115 (maintenance and support), … |
| 10 | `CO-S10-B21-rent-reporting` | 0,1,2,3,4,5,6,7,8,9,10,1… | 13 control: 0 positive: C.R.S. §§ 38-12-902 and 38-12-904 PASSED (both read, saved) | 3 acts, each read and each already in the shared ledger. HB 25-1168 (victim-survivor act) … | Confirmed absent as to any current rent-reporting rule. The only Colorado rent-reporting statute was a Colorado Housing and Finance Authority pilot added by HB 21-1134, and the 2024 edition prints the section as '(Repeal… |
| 10 | `CO-S10-B22-rent-and-lodging-tax` | 0,1,2,3,4,5,6,7,8,9,10,1… | 111 control: 0 positive: C.R.S. §§ 30-11-107.5 and 39-26-802 PASSED (both read, saved) | 3 acts, each read. **HB 25-1247, § 1 (effective 2025-07-01, approved 2025-05-13, safety cl… | Full section enumeration with scratch/slice-10/allsecs.py: 111 hits in 22 sections — §§ 24-32-3706, 24-32-729, 24-32-731, 29-2-116, 29-2-201, 29-2-202, 29-35-208, 29-35-402, 29-35-403, 29-35-404, 30-11-107.5, 30-15-401, … |
| 10 | `CO-S10-B23-rental-inspection-programme` | 0,1,2,3,4,5,6,7,8,9,10,1… | 20 control: 0 positive: C.R.S. § 30-15-401 PASSED (county police powers, including the short-term-rental listing provisions quoted in the hits); § 30-… | 2 acts, read — HB 25-1165 and SB 25-321. Neither creates a rental-inspection, rental-licen… | Confirmed absent at state level. Full section enumeration with scratch/slice-10/allsecs.py: 20 hits in 17 sections — §§ 9-5.5-114, 12-150-101, 24-32-3302, 24-32-3317, 24-60-2202, 25-1.5-103, 25-15-512, 25-5.5-205, 25-5.5… |
| 10 | `CO-S10-B24-inspector-entry` | 0,1,2,3,4,5,6,7,8,9,10,1… | 61 control: 0 positive: C.R.S. § 38-12-1004 PASSED (bed-bug entry notice, already read in the main pass) and § 30-28-205 read whole here | 1 act — HB 25-1084, read: noxious-weed and pest-control district inspection and abatement … | Of the 34 sections returned, the only ones placing an entry right inside a residential tenancy are the bed-bug provisions of part 10 of article 12 of title 38 (§§ 38-12-1002, 38-12-1003, 38-12-1004, 38-12-1006), which ar… |
| 11 | `CO-S11-B01-renters-insurance` | 0,1,2,3,4,5,6,7,8,9,10,1… | 3 (title 10 § 10-4-1503 portable-electronics disclosure; title 14 § 14-10-107 dissolution-injunction; title 38 § 38-12-601 EV charging) control: 0 pos… | 0 acts | No Colorado statute requires, regulates or bars a renter's-insurance requirement in a residential lease. Note the hyphen/apostrophe trap of C19: a first run written "renter'?s?[\s-]*insurance" returned 0 hits in title 38… |
| 11 | `CO-S11-B02-rental-insurance` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 (title 26: 2, public-assistance context; title 38: 2, both § 38-12-503(13)) control: 0 positive: C.R.S. § 38-12-503(13) PASSED | 0 acts | The statute's own term for a tenant's policy is "rental insurance", and the only place it appears in title 38 is the § 38-12-503(13) bar on using it to fund the landlord's own repairs. Nothing requires a tenant to carry … |
| 11 | `CO-S11-B03-tenant-insurance-proximity` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 (title 24 § 24-82-802 state capital construction; title 38: 3, all § 38-12-503(13)) control: 0 positive: C.R.S. § 38-12-503(13) PASSED | 1 act — HB 25-1207 (2025a ch. 224) read whole: it amends § 10-4-110.8(16)(a) and (16)(b) (… | Across all 45 corpus titles and the 2024b–2026a session laws there is no Colorado renter's-insurance requirement, advisory or force-placement rule. |
| 11 | `CO-S11-B04-uneconomic` | 0,1,2,3,4,5,6,7,8,9,10,1… | 8 (§ 10-3-545 insurer liquidation; § 15-5-414 uneconomic trust; § 24-56-117 and § 30-31-106 and § 31-25-105.5 "uneconomic remnant" in eminent domain; … | 0 acts | "Uneconomic" appears nowhere in a landlord-tenant provision. Every hit was read out; none creates a repair-cost termination right. |
| 11 | `CO-S11-B05-economically-feasible` | 0,1,2,3,4,5,6,7,8,9,10,1… | 15 (titles 8, 24, 25, 29, 32, 34, 37, 39, 40; none in title 38 or title 13) control: 0 positive: C.R.S. § 24-82-602 PASSED (read whole; 'economically … | 2 acts — HB 25-1165 (geothermal heat from produced fluids) and HB 25-1273 (single-stairway… | The economic-feasibility vocabulary is absent from titles 38 and 13 entirely, so no Colorado landlord-tenant provision turns on whether a repair is economically feasible. |
| 11 | `CO-S11-B06-repair-cost-termination-proximity` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — no section in the corpus joins cost, repair and termination inside a 60-character window, so the companion bat… | 0 acts | No provision anywhere in the corpus ties a termination right to the cost of a repair. |
| 11 | `CO-S11-B07-repair-termination-proximity` | 0,1,2,3,4,5,6,7,8,9,10,1… | 17 (title 38: 7 — § 38-12-507 x3, § 38-12-508, § 38-12-510, § 38-33.3-313 x2; plus titles 12, 24, 29, 32, 35, 37) control: 0 positive: C.R.S. § 38-12-… | 0 acts | The everyday-word battery finds Colorado's repair-and-termination provisions and confirms what they are: § 38-12-507(1)(a) and (1)(b) are the tenant's termination remedies, § 38-12-508(5) makes termination the tenant's o… |
| 11 | `CO-S11-B08-escrow-landlord-tenant-titles` | 38,13 | 47 total (45 in title 38, 2 in title 13) across 15 distinct sections, re-run with `allsecs.py` after the main pass fixed the 14-hit listing cap in `cr… | 14 acts, every one screened by its own subject line and read at the hit — HB 25-1043 (unit… | Every escrow provision in Colorado's landlord-tenant titles was read in context on the uncapped re-run. None lets a tenant pay rent into escrow or to a court pending repairs, so there is no remedy for an exemption notice… |
| 11 | `CO-S11-B09-escrow-tenant-proximity` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 (title 11, § 11-111-102(10)(a), which lists holding funds 'In escrow' and 'As a security deposit of a tenant' among the permissible purposes of a sp… | 0 acts | Code-wide, escrow and tenancy meet in exactly one place, and it is a banking definition about what a special-purpose deposit account may hold — not a rent-escrow remedy. A method note worth adopting: the word boundary ma… |
| 11 | `CO-S11-B10-landlord-disclosure` | 0,1,2,3,4,5,6,7,8,9,10,1… | 37 (title 38: 24 in nine sections — §§ 38-12-212.9, 38-12-223, 38-12-402, 38-12-803, 38-12-1005, 38-12-204, 38-12-903, 38-12-1105, 38-12-1401; title 1… | 6 acts, each read — HB 25-1090 (adds § 6-1-737, effective 2026-01-01) and HB 26-1013 (adds… | The section enumeration above was made with an uncapped per-section tally and re-confirmed with `allsecs.py` (16 distinct sections, 37 hits, control 0), so it is not affected by the old 14-hit listing cap in `crs.py grep… |
| 11 | `CO-S11-B11-tenant-guide` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 (title 2, § 2-2-321, a "tenant handbook for the capitol complex" provision about access to capitol subbasements) control: 0 positive: § 2-2-321 PASS… | 0 acts | Colorado has no tenant rights-and-responsibilities guide requirement. The only code-wide hit joining a tenancy to a handbook is about the state capitol complex. |
| 11 | `CO-S11-B12-rights-summary` | 38,13 | 1 in title 38 (§ 38-12-1104(2)(a), the mobile home park dispute resolution programme), 0 in title 13 control: 0 positive: C.R.S. § 38-12-1104 PASSED | 0 acts | The single Colorado provision requiring a summary of landlord-tenant rights and responsibilities is in part 11 of article 12 of title 38 and applies to mobile home parks, where the division produces the notice and the fo… |
| 11 | `CO-S11-B12R-rights-summary-reverse` | 38,13 | 0 control: 0 positive: synthetic only — the forward order CO-S11-B12 carries the real positive | 3 acts, each read — SB 25-041 (behavioral health; the department "REVIEWING AND SUMMARIZIN… | Reversing the word order adds nothing; there is no further rights-summary duty in the landlord-tenant titles. |
| 11 | `CO-S11-B13-rules-and-regulations` | 38,13 | 90 in title 38 across 28 sections and 11 in title 13 control: 0 positive: C.R.S. § 38-12-503(3)(f) PASSED | 21 acts, every one screened against its own subject line — HB 25-1027 (disease control), H… | Every article-12 hit was placed by section with an uncapped per-section tally (written in this slice's scratch folder and since confirmed against `allsecs.py`: 38 distinct sections, 101 hits, control 0, title 38's bigges… |
| 11 | `CO-S11-B14-house-rules` | 0,1,2,3,4,5,6,7,8,9,10,1… | 11 (title 4: 10, all in article 4 of the UCC and § 4-3-501, where "rules of the" appears in bank-collection language; title 33: 1, § 33-1-101 wildlife… | 1 act — SB 26-169 (the 2026 revisor's bill) with 16 hits, every one a reference to the leg… | The phrase "house rules" does not appear in Colorado's landlord-tenant law at all. Nothing in the code tells a Colorado landlord when a house rule binds a tenant. |
| 11 | `CO-S11-B15-variance-sanitary` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 (title 25, § 25-1.5-203, the department 'Granting exemptions and variances from the minimum general sanitary standards to allow appropriate time for… | 0 acts | Colorado's one sanitary-standards variance power is the department's, exercised toward a water supplier, with no tenant-facing step. |
| 11 | `CO-S11-B16-variance-tenant` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — no section in the corpus joins a variance to a tenant, so the companion batteries CO-S11-B15 (real positive § … | 0 acts | Code-wide, across the 2024 title text and the 2024b to 2026a session laws, nothing connects a code variance to a tenant. There is no variance to disclose and no attachment duty. |
| 11 | `CO-S11-B17-seasonal-tenancy` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 (title 6, § 6-7.5-105, "seasonally adjusted cooling capacity" of a portable air conditioner) [CORRECTED 2026-10-24; superseded figure: "2", which al… | 1 act — HB 25-1247 (expansion of the county lodging tax), read and irrelevant to the terms… | Colorado's landlord-tenant law contains no seasonal tenancy at all: no shortened notice period for a season, no exemption keyed to a summer or ski let, and no special deposit or habitability rule. |
| 11 | `CO-S11-B18-short-term-transient` | 0,1,2,3,4,5,6,7,8,9,10,1… | 53 (title 38: 13 in six sections — § 38-20-102, § 38-12-1303, § 38-12-511, § 38-12-1301, § 38-12-1302, § 38-33-113; title 30: 23, all § 30-15-401; tit… | 1 act — HB 25-1247 (county lodging tax), the same act CO-S11-B17 returned; read and irrele… | The section enumeration was made with an uncapped per-section tally and re-confirmed with `allsecs.py` (19 distinct sections, 53 hits, control 0; § 30-15-401 x23 is the one title with more than fourteen hits and it is a … |
| 11 | `CO-S11-B19-deposit-interest` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 (title 5, § 5-3-201, where a consumer-lease security deposit is carved out of the security-interest bar; title 38: 3, being § 38-12-101's reference … | 2 acts, both read — HB 25-1207 (pet ownership barriers; its only match is the § 24-32-735(… | No Colorado statute requires a residential landlord to pay or credit interest on a security deposit. The deposit-interest vocabulary is absent from part 1 of article 12 of title 38 entirely. |
| 11 | `CO-S11-B20-deposit-holding-method` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2 (title 38, § 38-12-207(3), the Mobile Home Park Act trust account; title 11, § 11-111-102(10)(a), a special-purpose deposit account's permissible pu… | 0 acts | Across all 45 corpus titles and the 2024b to 2026a session laws, no Colorado provision tells a residential landlord where or how to keep a tenant's security deposit. Banking law permits a dedicated account; nothing requi… |
| 11 | `CO-S11-B21-deposit-accrual` | 0,1,2,3,4,5,6,7,8,9,10,1… | 14 (titles 0, 10, 11, 23, 24, 28, 33, 38, 39; the single title 38 hit is § 38-12-507(2)(c), where a tenant need not 'Deposit a bond' or 'Have accrued … | 1 act — HB 26-1406 ("THE REPEAL OF CERTAIN PROVISIONS REGARDING THE FUNDING OF CAPITAL CON… | The accrual and interest-rate vocabulary never meets a security deposit in Colorado's landlord-tenant law. The only accrual reference in title 38's tenancy provisions is about a tenant's expenses, not deposit interest. |
| 11 | `CO-S11-B22-deposit-standards` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only, so the companion simple-term run was made first — "security[\s-]*deposit" over titles 38 and 13 returns 49 hits… | 0 acts | The companion run's section enumeration was made with an uncapped per-section tally and re-confirmed with `allsecs.py` (19 distinct sections, 54 hits, control 0; § 38-12-104 x14 and § 38-12-103 x13 are the largest), so i… |
| 11 | `CO-S11-B23-rekey` | 0,1,2,3,4,5,6,7,8,9,10,1… | 8 (titles 22, 24, 39, 44; 0 in titles 38 and 13) control: 0 positive: C.R.S. § 24-4.1-102(8.5) PASSED | 1 act — HB 25-1198 (regional planning roundtable commission), read and irrelevant | Colorado imposes no rekeying duty on a landlord at turnover or at any other time. The only rekeying in Colorado statute is a compensable crime-victim expense paid from the state fund, which is not a landlord obligation. |
| 11 | `CO-S11-B24-peephole` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — the term appears nowhere in the corpus, so the companion batteries CO-S11-B23 (positive C.R.S. § 24-4.1-102(8.… | 0 acts | Colorado has no door-viewer or peephole requirement, for any construction date and any number of units. |
| 11 | `CO-S11-B25-deadbolt-devices` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 (title 42, § 42-4-1206, where 'Adequate security measures' for an unattended motor vehicle include 'Using a vehicle that requires a key to put the v… | 0 acts | Colorado specifies no device type. It requires locks that work, and leaves the hardware to the landlord. |
| 11 | `CO-S11-B26-work-card` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — the phrase does not occur in the corpus at all, so the companion batteries CO-S11-B27 and CO-S11-B28 were run … | 0 acts | Colorado has no work-card regime of any kind, for senior housing or otherwise. |
| 11 | `CO-S11-B27-senior-housing` | 0,1,2,3,4,5,6,7,8,9,10,1… | 13 in seven sections — § 24-34-502 x5 (the familial-status exemption for housing for older persons), §§ 24-32-729 and 24-32-731 x1 each (division of h… | 0 acts | Colorado's senior-housing law is an exemption from familial-status discrimination, not a staffing regime. Nothing in it requires any permit, card or registration for anyone working in the housing. |
| 11 | `CO-S11-B28-fifty-five-housing` | 0,1,2,3,4,5,6,7,8,9,10,1… | 20 in ten sections — § 10-4-632 x5 (insurance), § 17-1-102 x1, § 24-20-502 x1, § 24-34-502 x3, §§ 24-51-1710, 24-51-602 and 24-51-605 (PERA retirement… | 4 acts, each read — SB 25-190 (release from custody for offenders with health-service need… | The age-55 vocabulary never meets a landlord-tenant staffing duty. Colorado imposes no screening, carding or registration duty on residential rental staff. |
| 11 | `CO-S11-B29-misrepresentation-animal` | 0,1,2,3,4,5,6,7,8,9,10,1… | 9 in three sections — § 18-13-107.3 x3, § 18-13-107.7 x3 (both read whole) and § 24-72-706 x3 control: 0 positive: C.R.S. § 18-13-107.3 PASSED | 0 acts on a directive check of both sections (`crs.py sess` on "amend 18-13-107.3", "add 1… | Both offences exist, both are scoped by the right being claimed rather than by a list of places, and the assistance-animal one says "in housing" in terms. So the answer to whether Colorado's misrepresentation penalty rea… |
| 11 | `CO-S11-B30-false-service-animal` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — Colorado's drafter uses "intentionally misrepresents", not a falsity or fraud word, so the real positives sit … | 0 acts | There is no second, fraud-worded offence. The two misrepresentation sections are the whole of Colorado's law on the subject, and a battery written on the falsity vocabulary alone would have returned nothing and missed bo… |
| 11 | `CO-S11-B31-assistance-animal` | 0,1,2,3,4,5,6,7,8,9,10,1… | 25 in six sections — § 18-13-107.3 x7 (intentional misrepresentation of entitlement to an assistance animal, read whole), §§ 12-240-144, 12-245-229 an… | 1 act relevant on a directive check — HB 26-1045 ("HOUSING PROTECTIONS FOR INDIVIDUALS WIT… | Colorado's assistance-animal and service-animal provisions are a small closed set and all of them were read whole: §§ 24-34-802, 803 and 804, § 18-13-107.3 and § 18-13-107.7. |
| 12 | `CO-S12-B01-military-status` | 0,1,2,3,4,5,6,7,8,9,10,1… | 25 across 5 sections (§ 19-7-101 x1, § 23-79-102 x6, § 24-34-501 x4, § 24-34-502 x13, § 29-4-1104 x1) control: 0 positive: C.R.S. § 24-34-501(7) PASSE… | 1 act — HB 26-1382 (Colorado disability funding authority), screened by its own subject li… | "Military status" is a Colorado protected characteristic only through part 5 of article 34 of title 24 (unfair housing practices) and the parallel employment and higher-education provisions. Nothing in title 38 or title … |
| 12 | `CO-S12-B02-military-near-lease` | 0,1,2,3,4,5,6,7,8,9,10,1… | 12 across 9 sections (§ 24-34-501 x2, § 24-34-502 x3, § 24-60-3402 x1, § 24-60-4101 x1, § 29-20-105.6 x1, § 33-14.5-101 x1, § 36-1-123.5 x1, § 38-12-1… | 6 acts, each screened by its own "AN ACT CONCERNING" subject line and read at the hit — SB… | The only places Colorado's code puts military service next to a lease, rental agreement or landlord are the fair-housing protected-class provisions and § 38-12-1303(3)(c)(II). There is no Colorado servicemember lease-ter… |
| 12 | `CO-S12-B02R-lease-near-military` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 across 4 sections (§ 28-5-713 x1, § 29-20-105.6 x1, § 36-1-123.5 x1, § 38-12-1303 x1) control: 0 positive: C.R.S. § 38-12-1303(3)(c)(II) PASSED | 6 acts — the same appropriations and capital-construction acts as CO-S12-B02 (SB 25-101, S… | The reverse word order adds only § 28-5-713 (the Grand Junction veterans one-stop center, read out), § 29-20-105.6 (local-government notification of a military installation) and § 36-1-123.5 (state land board leases). It… |
| 12 | `CO-S12-B03-sexoffender-code-wide` | 0,1,2,3,4,5,6,7,8,9,10,1… | 521 across 100 distinct sections, concentrated in titles 16, 17, 18 and 19 (registration, sentencing, treatment, parole and probation); in title 38 th… | 16 acts, every one screened by its own "AN ACT CONCERNING" subject line — ten are appropri… | Colorado's sex-offender law lives in titles 16, 17 and 18 and speaks to courts, corrections, the CBI, law enforcement, schools and colleges. The single point of contact with the landlord-tenant title is a screening permi… |
| 12 | `CO-S12-B04-sexoffender-near-landlord` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 (C.R.S. § 38-12-904) control: 0 positive: C.R.S. § 38-12-904(1)(b)(III) PASSED | 0 acts | In the whole corpus, registration and the landlord-tenant vocabulary sit within 250 characters of one another exactly once, and it is the screening permission at § 38-12-904(1)(b)(III). No Colorado provision requires, pe… |
| 12 | `CO-S12-B04R-landlord-near-sexoffender` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 (C.R.S. § 38-12-904) control: 0 positive: C.R.S. § 38-12-904(1)(b)(III) PASSED | 0 acts | The reverse word order returns the same single section, so the proximity result is not an artefact of word order. |
| 12 | `CO-S12-B05-offender-disclosure-words` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 (C.R.S. § 24-30-2109, opened and read whole) control: 0 positive: C.R.S. § 24-30-2109(1)(c) PASSED | 0 acts | The one place the code joins registration and disclosure is § 24-30-2109, the address confidentiality program, where the point is that a program participant who must register gives the real address to the registry. The r… |
| 12 | `CO-S12-B06-residency-restriction` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — the term of art appears nowhere in the corpus, so the companion batteries CO-S12-B07 and CO-S12-B07R were run … | 0 acts | Colorado's statutes do not use the phrase at all, which is the first sign that the state leaves offender residency to the courts, to parole and probation conditions and to local ordinance. |
| 12 | `CO-S12-B07-offender-reside-proximity` | 0,1,2,3,4,5,6,7,8,9,10,1… | 17 across 13 sections (§§ 16-11.7-103, 16-13-903, 16-22-102, 16-22-108, 16-22-110, 18-1-202, 18-1.3-1004, 18-1.3-1008, 18-3-412.6, 19-3-406, 26-1-132,… | 4 acts, each screened by its own subject line and read at the hit — SB 25-105 and HB 26-11… | Every hit was read in context. They are registration addresses and verification (§§ 16-22-102, 16-22-108, 16-22-110, 18-3-412.6), sentencing, probation and community-corrections placement (§§ 16-11.7-103, 16-13-903, 18-1… |
| 12 | `CO-S12-B07R-reside-offender-proximity` | 0,1,2,3,4,5,6,7,8,9,10,1… | 16 across 10 sections (§§ 16-11.7-103, 16-22-102, 16-22-108, 17-27.1-101, 18-1.3-1004, 18-1.3-1008, 18-3-412.6, 19-3-406, 26-6-910, 26-6-912) control:… | 4 acts, the same appropriations acts as CO-S12-B07, screened and read | The reverse word order adds only § 17-27.1-101 (community corrections residential placement) and confirms the forward run: no residency restriction and no landlord duty anywhere in the corpus. |
| 12 | `CO-S12-B08-knowingly-rent-to-offender` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — no provision in the corpus criminalises or conditions the act of knowingly letting a dwelling to anyone, so th… | 0 acts | Colorado creates no offence of knowingly renting to a registered offender, and so no lease-statement safe harbour for an owner either. |
| 12 | `CO-S12-B09-two-offenders-one-dwelling` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 (C.R.S. § 16-22-102, read whole — the definitions section, where the phrase counts convictions, not occupants) control: 0 positive: C.R.S. § 16-22-1… | 0 acts | Colorado has no co-residence rule. The one hit counts a registrant's own convictions and has nothing to do with how many registrants share a dwelling. |
| 12 | `CO-S12-B10-sfr-near-disclosure` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — the reverse-order battery CO-S12-B10R carries the real positive | 0 acts | Nothing in the corpus ties a single-family residence to a disclosure duty. |
| 12 | `CO-S12-B10R-disclosure-near-sfr` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 (C.R.S. § 38-45-102, read whole) control: 0 positive: C.R.S. § 38-45-102 PASSED | 0 acts | The one hit is the carbon-monoxide-alarm article, where the word is about disclosing an alarm in a sale, not about occupancy of a let single-family home. Colorado has no single-family occupancy disclosure. |
| 12 | `CO-S12-B11-type-size-code-wide` | 0,1,2,3,4,5,6,7,8,9,10,1… | 203 across 113 sections; in the landlord-tenant titles the hits are § 38-12-204.3, § 38-12-505 x2, § 38-12-803, § 38-12-904 x4, § 38-22-105.5, § 38-35… | 8 acts, each screened by its own subject line and read at the hit — HB 25-1117 (vehicle im… | Colorado does regulate the typography of particular lease statements, and every such rule is an absolute minimum point size or a bold-face requirement attached to a named statement. None is expressed relative to the rest… |
| 12 | `CO-S12-B12-first-page-placement` | 0,1,2,3,4,5,6,7,8,9,10,1… | 19 across 18 sections (§§ 1-4-1407, 1-40-110, 6-1-702, 6-1-731, 8-4-126, 10-4-117, 10-7-302, 10-7-403, 10-10-119, 10-16-201, 10-18-107, 10-19-111, 13-… | 0 acts | Every first-page rule in Colorado's code is an insurance-policy, ballot, election-petition, dating-contract, wage-notice, garnishment, recording or agricultural-lien rule. There is no first-page placement requirement for… |
| 12 | `CO-S12-B13-relative-type-size` | 0,1,2,3,4,5,6,7,8,9,10,1… | 7 across 6 sections (§§ 1-46-103, 6-1-720, 6-1-731, 6-1-732, 8-4-126 x2, 8-4-127); none in title 38 or title 13 control: 0 positive: C.R.S. § 6-1-732 … | 1 act — HB 26-1135 (transparency about chemicals in hair products), screened by its own su… | Colorado writes a relative type-size rule only for ticket sales, dating-service contracts, automatic-renewal contracts, wage notices and ballot measures. A residential lease has none, so a landlord sizing the required st… |
| 12 | `CO-S12-B14-shoreline-terms` | 0,1,2,3,4,5,6,7,8,9,10,1… | 20 across 13 sections (§§ 18-4-511 x2, 24-65.1-104, 25-5-804 x3, 25-8-205.1 x2, 25-11-110, 25-15-603 x2, 25-17-703, 30-28-106, 31-12-105, 31-23-206, 3… | 1 act — HB 26-1197 (continuation of the vessel registration program), screened by its own … | Every hit was read in context: littering on the shores or beaches of a watercourse (§ 18-4-511), shorelands of major publicly owned reservoirs as a natural resource of statewide importance (§ 24-65.1-104), the sanded bea… |
| 12 | `CO-S12-B15-waterbody-near-disclosure` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — no section in the corpus puts a named water body within 200 characters of a disclosure duty, so the companion … | 0 acts | Nothing. Note the C19 word-boundary trap: the same pattern written without `\b` returned 75 hits across 44 sections code-wide, every one of them the letters "river" inside "driver" or "deliver". The bounded pattern is th… |
| 12 | `CO-S12-B16-water-near-disclosure-title38` | 38 | 4, all in C.R.S. § 38-35.7-104 control: 0 positive: C.R.S. § 38-35.7-104 PASSED | 1 act — SB 25-275 (the public health reorganization act already in the currency ledger), s… | The one water disclosure in Colorado's property title is the potable-water-source disclosure, and § 38-35.7-104 owes it to a buyer. There is nothing a landlord must tell a tenant about water, a water body or access to on… |
| 12 | `CO-S12-B17-entry-notice-residential` | 0,1,2,3,4,5,6,7,8,9,10,1… | 78 across 66 sections code-wide; in the landlord-tenant titles the sections are, in title 38, §§ 38-12-1004, 38-12-208, 38-12-217, 38-12-503, 38-20-20… | 7 acts, each screened by its own subject line — HB 25-1117 (vehicle immobilization compani… | Colorado has exactly three entry notices and none of them is general: twenty-four hours in writing before entry to carry out habitability remedial action (§ 38-12-503(6)(a)(III)), forty-eight hours written or electronic … |
| 12 | `CO-S12-B18-showings-prospective` | 0,1,2,3,4,5,6,7,8,9,10,1… | 5 across 5 sections (§§ 12-10-405, 12-10-407, 38-12-902, 38-12-904, 42-4-510) control: 0 positive: C.R.S. § 38-12-904 PASSED | 0 acts | The only places Colorado joins a prospective tenant or purchaser to showing or entering are the real-estate broker duties in article 10 of title 12, the rental-application provisions (§§ 38-12-902, 38-12-904) and a motor… |
| 12 | `CO-S12-B19-separate-document-waiver` | 0,1,2,3,4,5,6,7,8,9,10,1… | 10 across 9 sections (§§ 5-10-301, 5-10-603 x2, 6-1-201, 22-44-305, 24-4.2-104, 24-10-105, 24-50-124, 35-41.5-106, 42-9-104); **none in title 38 or ti… | 0 acts | No Colorado provision requires a tenant waiver to be given in a document separate from the lease, in any context. |
| 12 | `CO-S12-B19R-separate-near-waiver` | 0,1,2,3,4,5,6,7,8,9,10,1… | 8 across 8 sections (§§ 4-3-605, 5-10-301, 6-1-201, 11-30-106, 22-44-305, 24-50-124, 35-61-104, 38-33.3-316.5) control: 0 positive: C.R.S. § 38-33.3-3… | 0 acts | The single title 38 hit is the common-interest-community pre-foreclosure notice section, opened and read whole; it is not a tenancy waiver. Colorado's separate-document requirements are the part 5 tenant-repair agreement… |
| 12 | `CO-S12-B20-shutdown` | 0,1,2,3,4,5,6,7,8,9,10,1… | 13 across 11 sections (§§ 9-4-101, 9-4-106.5, 12-150-115, 12-150-116 x2, 24-34-502, 25-7-103, 25-7-109 x2, 25-7-133.5, 25-7-141, 30-15-401.4, 40-3.2-2… | 2 acts — HB 26-1011 (transfer of pet animals) and HB 26-1257 (local regulation of massage … | Every other hit is a boiler, air-quality, gas-utility or massage-facility provision. The only hit touching a tenancy is § 24-34-502(1)(m), and it is an express permission for the landlord rather than a protection for the… |
| 12 | `CO-S12-B21-furlough` | 0,1,2,3,4,5,6,7,8,9,10,1… | 20 across 9 sections (§§ 8-73-108 x2, 18-3-202, 18-3-203, 24-2-103, 24-4.1-302.5, 24-4.1-303 x3, 24-50-109.5 x6, 24-51-101 x4, 42-3-112); **none in ti… | 1 act — SB 26-149 (pathways for individuals with mental health disorders), screened by sub… | Colorado's furlough vocabulary is about inmate furlough, state-employee furlough, PERA service credit and unemployment benefits. Nothing connects a furlough to rent, a lease or an eviction. |
| 12 | `CO-S12-B22-appropriations-lapse-rent` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — companion battery CO-S12-B20 carries the proof | 0 acts on a raw `crs.py sess` run; `battery_sessweep.py`, which collapses whitespace and s… | Colorado has no lapse-in-appropriations trigger bearing on a tenancy anywhere, so no rent, late-fee or eviction rule turns on one. |
| 12 | `CO-S12-B23-single-family-zoning` | 0,1,2,3,4,5,6,7,8,9,10,1… | 9 across 6 sections (§§ 24-32-130 x2, 25-12-102, 30-11-605, 30-28-115 x2, 31-23-301 x2, 31-23-303); the reverse order adds §§ 29-20-104 and 29-35-401;… | 1 act — HB 26-1001, the "Housing Opportunities Made Easier (HOME) Act" (safety clause, app… | Colorado's single-family-zone provisions are land-use enabling and land-use limiting statutes addressed to counties and municipalities (§§ 30-28-115, 31-23-301, 31-23-303, 29-20-104) plus a radon-mitigation and a housing… |
| 12 | `CO-S12-B24-occupancy-limits` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 across 2 sections (§ 29-20-111 x3, § 38-12-214 x1) control: 0 positive: C.R.S. § 29-20-111(3) PASSED | 0 acts | Colorado's only occupancy-limit statute is the HOME Act, and it limits what the local government may do, not what the landlord may do. The other hit is in the Mobile Home Park Act (part 2, class decision C7). |
| 12 | `CO-S12-B25-owner-occupancy-requirement` | 0,1,2,3,4,5,6,7,8,9,10,1… | 91 across 24 sections, mostly § 10-4-110.8 (homeowner's insurance) x15, § 39-1-104.6 x10 and the Colorado Constitution (title 00) x9; in title 38 only… | 1 act — SB 26-116 (taxation of property; qualified-senior primary residence benefit and bu… | Every owner-occupancy provision in Colorado is a tax-assessment, insurance, mechanics-lien or disclosure-on-sale provision, or a limit on what a local government may require. There is no owner-occupancy condition on lett… |
| 12 | `CO-S12-B26-smart-access-terms` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — the term of art appears nowhere in the corpus, so the companion batteries CO-S12-B27 and CO-S12-B28 were run o… | 0 acts | Colorado's statutes do not use "smart lock", "smart access", "smart entry" or "smart device" at all. |
| 12 | `CO-S12-B27-electronic-lock` | 0,1,2,3,4,5,6,7,8,9,10,1… | 16 across 12 sections in titles 10, 13 and 24 — insurance, judicial-database access, notarial, public-records and open-meetings provisions; **none in … | 2 acts — HB 25-1168 (housing protections for victim-survivors), 5 hits, which is the whole… | This is a textbook class decision C17 result. Run over the 2024 title text alone the battery returns nothing in title 38 and would support a flat absence; run over the session laws it returns HB 25-1168 at once. Colorado… |
| 12 | `CO-S12-B28-keyless-fob-access-control` | 0,1,2,3,4,5,6,7,8,9,10,1… | 8 across 6 sections (§§ 1-1-104 x2, 1-5-607, 1-7-513.5, 24-18-309, 42-11-101 x2, 42-4-1206); **none in title 38 or title 13** control: 0 positive: syn… | 0 acts | No Colorado provision regulates a key fob, key card, keyless entry or an access-control system in a dwelling. |
| 12 | `CO-S12-B29-smoke-drift` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — the drift vocabulary appears nowhere, so the companion batteries CO-S12-B30 and CO-S12-B31 were run on the sta… | 0 acts | Colorado has no provision about smoke moving from one unit to another. |
| 12 | `CO-S12-B30-secondhand-smoke` | 0,1,2,3,4,5,6,7,8,9,10,1… | 11 across 9 sections (the Colorado Constitution in title 00, §§ 24-75-1103, 25-14-103.5, 25-14-202, 25-14-203, 25-14-204, 25-3.5-804 x2, 25-3.5-805, 2… | 0 acts | Colorado's secondhand-smoke vocabulary lives entirely in the Clean Indoor Air Act, the tobacco tax provisions and the emergency medical services statutes. None of it creates a duty between a landlord and a tenant. |
| 12 | `CO-S12-B31-smoking-near-tenancy` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2 (§ 38-12-803, § 42-4-407); the reverse order returns 1 (§ 25-14-207) control: 0 positive: C.R.S. § 38-12-803(2)(a)(I) PASSED | 0 acts | Every hit was read in context and none is a smoking rule for a tenancy: the title 38 hit is the word "nonsmokers" inside the prescribed radon warning, the title 42 hit is a motor-vehicle provision, and the § 25-14-207 hi… |
| 12 | `CO-S12-B32-continuance-reinstatement` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — the reverse order ("\brent\b" before "continuance") also returns 0 code-wide, and the companion battery CO-S12… | 0 acts | Colorado has no provision anywhere joining a continuance to rent, and nothing reinstating a tenancy on a late benefit payment. The Colorado analogue is mediation before filing, not a continuance after filing. |
| 12 | `CO-S12-B33-ssi-ssdi-benefits` | 0,1,2,3,4,5,6,7,8,9,10,1… | 76 across 33 sections; the landlord-tenant hits are § 13-40-106 x2, § 13-40-110 x6, § 13-40-122 x4 and § 24-34-502 x2 control: 0 positive: C.R.S. § 13… | 8 acts, each screened by its own subject line — HB 25-1168 (housing protections for victim… | Benefit receipt matters in Colorado landlord-tenant law in exactly four places: the content of the demand or notice, the complaint affidavit and the mandatory-mediation precondition, the writ-execution delay, and the per… |
| 12 | `CO-S12-B34-special-district-near-tenancy` | 0,1,2,3,4,5,6,7,8,9,10,1… | 6 across 6 sections (§§ 30-15-401, 32-1-1001, 32-1-103, 33-45-102, 39-10-107, 39-3-210); the reverse order gives 9 hits across 6 sections (§§ 29-1-203… | 1 act — HB 25-1090 (protections against deceptive pricing practices, the fee act already i… | Where Colorado's special-district law touches a tenancy at all it does so through taxation, service charges and the perpetual lien on the property served, not through any statement in a lease. |
| 12 | `CO-S12-B35-district-disclosure` | 0,1,2,3,4,5,6,7,8,9,10,1… | 13 across 7 sections (§§ 11-59-104, 11-59-108, 32-1-104.8 x4, 32-1-902 x2, 32-1-1101 x2, 38-35.7-110 x2, 38-35.7-111) control: 0 positive: C.R.S. § 32… | 2 acts, both screened by subject line and read — HB 25-1219 ("requirements for metropolita… | Every Colorado district disclosure is owed by a seller to a purchaser, by a district to the county clerk and recorder, or by a bond issuer to investors. None is owed to a tenant and none belongs in a lease. |
| 12 | `CO-S12-B36-sprinkler` | 0,1,2,3,4,5,6,7,8,9,10,1… | 52 across 22 sections (§§ 6-7.5-102 x5, 6-7.5-104, 6-7.5-105 x4, 10-3-102 x2, 12-115-116, 12-120-403, 12-155-103, 12-155-118 x2, 24-33.5-1202 x8, 24-3… | 8 acts, each screened by its own subject line and read at the hit — HB 25-1077 (backflow p… | Colorado's sprinkler law is about who may install and maintain fire-suppression systems and about irrigation equipment. It says nothing to a landlord or a tenant. |
| 12 | `CO-S12-B37-sprinkler-near-tenancy` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0; the reverse word order also returns 0 control: 0 positive: synthetic only — the companion battery CO-S12-B36 carries the real positive | 1 act on the `battery_sessweep.py` whitespace-collapsed run — HB 26-1034 (irrigation equip… | In the whole corpus the sprinkler vocabulary never comes within 250 characters of a lease, a landlord or a tenant in either word order. |
| 12 | `CO-S12-B38-one-year-lease-writing` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2, one in each of the two sections that matter (§ 38-10-108, § 38-10-106) control: 0 positive: C.R.S. § 38-10-108 PASSED | 0 acts | Colorado sets its real-property writing threshold at a lease "for a longer period than one year", and nowhere else in the code is there a different lease-writing threshold for real property. |
| 12 | `CO-S12-B39-long-lease-recording-threshold` | 0,1,2,3,4,5,6,7,8,9,10,1… | 41 across 26 sections, every one a public-entity leasing-power or term-limit provision (school districts at §§ 22-32-110 and 22-32-112, state institut… | 2 acts, both screened by subject line and read at the hit — HB 25-1006 (allowing a school … | Colorado has no long-lease threshold of the Massachusetts kind. No provision makes a lease of more than three, five, seven or ten years recordable-or-void, and the multi-year figures in the code are limits on how long a … |
| 12 | `CO-S12-B40-statutory-termination-rights` | 0,1,2,3,4,5,6,7,8,9,10,1… | 8 across 5 sections, all in title 38 (§ 38-12-402, § 38-12-503 x2, § 38-12-507 x2, § 38-12-509, § 38-33.3-206 x2) control: 0 positive: C.R.S. § 38-12-… | 1 act — HB 25-1168 (housing protections for victim-survivors), which rewrites § 38-12-402 … | Every statutory termination right in Colorado for an ordinary residential tenancy sits in part 4 or part 5 of article 12 of title 38, or in the radon section of part 8. § 38-33.3-206 is leasehold common-interest-communit… |
| 12 | `CO-S12-B41-fraudulent-misrepresentation-termin…` | 0,1,2,3,4,5,6,7,8,9,10,1… | 14 across 13 sections, every one in titles 10 (insurance), 15 (fiduciary and trust) and 16 (criminal procedure) and related; **none in title 38 and no… | 0 acts | Colorado gives a tenant no statutory right to terminate a lease because the landlord misrepresented the property. The tenant's route is the habitability remedies, general contract law and the consumer-protection provisio… |
| 12 | `CO-S12-B42-radiator` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 (C.R.S. § 9-4-118, read whole — the existing heating-boiler and hot-water-supply-boiler installation rules) control: 0 positive: C.R.S. § 9-4-118 PA… | 0 acts | One hit in forty-five titles, and it is a boiler-pressure provision. Colorado has no radiator-cover duty, no request mechanism and no rider. |
| 12 | `CO-S12-B43-steam-heat` | 0,1,2,3,4,5,6,7,8,9,10,1… | 21 across 12 sections (§§ 9-4-101, 9-4-103, 9-4-113, 9-4-116, 9-4-118 and the district-heating provisions at §§ 24-30-2001, 29-12.5-101, 30-20-901, 30… | 0 acts | Colorado's steam-heat vocabulary is boiler inspection and municipal or county heating-utility powers. None of it reaches a landlord or a lease. |
| 12 | `CO-S12-B44-scald-burn-guard` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — the companion batteries CO-S12-B42 and CO-S12-B43 carry the real positives | 0 acts | Colorado has no scald-protection or guard-cover provision of any kind, for a radiator or anything else in a dwelling. |
| 13 | `CO-S13-B01-stigma-disclosure` | 0,1,2,3,4,5,6,7,8,9,10,1… | 7 control: 0 positive: 38-35.5-101 PASSED | 1 act — HB 25-1176 (health-care licensure applications; read, irrelevant to landlord discl… | Colorado's only stigma provision is § 38-35.5-101, which declares such facts immaterial and immunises a broker or salesperson. No landlord-specific disclosure duty exists anywhere in the code for a death, felony or illne… |
| 13 | `CO-S13-B02-appliance-stove-refrigerator` | 0,1,2,3,4,5,6,7,8,9,10,1… | 8 control: 0 positive: 38-12-502 PASSED boundary rerun (C19): the first run was written "(?:refrigerator\|stove\|oven\|cooking)[\s\S]{0,200}(?:\btenan… | 2 acts — HB 25-1273 (Group R-2 occupancy / building-code definitions) and SB 26-109 (acces… | Colorado's whole appliance regime is § 38-12-502(1) (definition plus the express no-duty-to-provide sentence), § 38-12-505(1)(b)(I) (functioning appliances in good working order as a habitability characteristic) and § 38… |
| 13 | `CO-S13-B03-student-dormitory-tenancy` | 0,1,2,3,4,5,6,7,8,9,10,1… | 3 control: 0 positive: 23-41-104 PASSED sections: 23-31.5-110, 23-41-104, 23-71-702 (all in title 23) | 0 acts boundary rerun (C19): the first run was written "(?:student\|dormitor\w*\|fraternit… | No section of titles 38 or 13 — and no section anywhere in the corpus — regulates a private letting to students as such. All three hits are in title 23 and concern higher-education governance and institutional leases of … |
| 13 | `CO-S13-B04-campus-college-tenancy` | 0,1,2,3,4,5,6,7,8,9,10,1… | 11 control: 0 positive: 39-3-124 PASSED sections: 2-2-2305, 25-7-142, 39-3-124 x9 boundary rerun (C19): the unanchored first run returned 12 hits in 4… | 1 act — HB 25-1289 (property-tax exemption for property leased to the state or an institut… | Corroborates CO-S13-B03. The four matching sections are property-tax, higher-education-governance and energy-benchmarking provisions; Colorado has no campus- or college-housing landlord-tenant rule. |
| 13 | `CO-S13-B05-subsidy-then-inspection` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 control: 0 positive: none available — recorded as FAILED, corroborated by CO-S13-B07 | 1 act — SB 25-285 (retail food establishment inspection fees); read, irrelevant | Nothing in the corpus ties a subsidy or voucher to an inspection duty. The two matching sections are § 25-4-1607 (retail food) and § 42-4-309 (vehicle emissions). |
| 13 | `CO-S13-B06-inspection-then-subsidy` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 control: 0 positive: none available — recorded as FAILED, corroborated by CO-S13-B07 | 0 acts | The reverse word order confirms CO-S13-B05. Hits are §§ 2-3-103, 40-27-109 and 42-4-309, none landlord-tenant. |
| 13 | `CO-S13-B07-inspection-landlord-tenant` | 0,1,2,3,4,5,6,7,8,9,10,1… | 27 control: 0 positive: 38-12-1004 PASSED | 1 act — HB 25-1249 (the walk-through inspection and deposit-documentation duties at § 38-1… | The everyday-word battery required by rule 19 where no positive exists for CO-S13-B05 and B06. Colorado's only landlord-tenant inspection-access provisions are §§ 38-12-1002 to 38-12-1006 (bed bugs), § 13-40-122 (executi… |
| 13 | `CO-S13-B08-receiver-landlord-tenant` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 control: 0 positive: 38-12-103 PASSED | 2 acts — HB 25-1249 (rewrites § 38-12-103(4): sixty days to transfer or return the deposit… | The 2024 title text contains no rental-housing receivership at all — a grep-only battery would have reported Colorado silent. The governing section, § 38-12-513, exists only in the session laws (class decision C17), and … |
| 13 | `CO-S13-B09-telecom-access` | 0,1,2,3,4,5,6,7,8,9,10,1… | 5 control: 0 positive: 29-27-502 PASSED | 1 act — HB 25-1249; read, its only match is § 38-12-103(1.5)'s telecommunication-assisted … | The only landlord-tenant telecom provisions in the corpus are §§ 29-27-501 and 29-27-502 (with § 29-27-503 and § 38-12-224 found by reading the article's table of contents out from them). Colorado has a broadband-access … |
| 13 | `CO-S13-B10-tenancy-at-will` | 0,1,2,3,4,5,6,7,8,9,10,1… | 6 control: 0 positive: 13-40-107 PASSED | 0 acts | The phrase appears in exactly six sections — §§ 13-40-104, 13-40-107, 38-12-105, 38-12-204, 38-12-205 and 38-12-1303 — and none of them defines it. Colorado sets the notice period at three days and limits the holdover gr… |
| 13 | `CO-S13-B11-bankruptcy-then-tenancy` | 0,1,2,3,4,5,6,7,8,9,10,1… | 8 control: 0 positive: 38-12-904 PASSED sections: 4-2.5-522 x2, 4-2.5-525, 7-42-105, 7-60-102, 38-12-904, 38-31-101, 42-3-115 | 1 act — SB 25-020, whose 4 hits are the word "receivership" in new § 38-12-513 (read whole… | Colorado has no landlord-tenant bankruptcy provision anywhere in the code. The subject is federal, and the only Colorado mentions near a tenancy are a screening-report item, the exemptions opt-out and a joint-tenancy sev… |
| 13 | `CO-S13-B11R-tenancy-then-bankruptcy` | 0,1,2,3,4,5,6,7,8,9,10,1… | 3 control: 0 positive: 38-12-904 PASSED sections: 4-2.5-522, 38-12-904, 38-31-101 | 0 acts | The reverse word order confirms CO-S13-B11 and adds nothing: no Colorado provision ties a tenancy to a bankruptcy. |
| 13 | `CO-S13-B12-tenant-confidential-information` | 0,1,2,3,4,5,6,7,8,9,10,1… | 36 (0 in title 38) control: 0 positive: C.R.S. § 13-40-128 PASSED, read whole — a real hit of this pattern in the courts title ('plaintiffs or tenants… | 4 acts, each read — HB 25-1168 (address confidentiality programme statement in a rent dema… | The proximity battery found no general landlord confidentiality duty, and would have missed the governing provisions entirely: §§ 6-1-713, 6-1-713.5, 6-1-715 and 6-1-716 reach a landlord through the words "covered entity… |
| 13 | `CO-S13-B13-tenant-display-rights` | 0,1,2,3,4,5,6,7,8,9,10,1… | 13 control: 0 positive: 38-33.3-106.5 PASSED sections: 4-2.5-103, 18-9-108.5, 18-14-102, 24-21-616, 29-27-501, 32-1-1004.5 x2, 38-12-211, 38-12-1303 x… | 1 act — HB 25-1117, whose hit is the parking-signage limb of § 40-10.1-805(3); read, and a… | No Colorado provision gives a tenant a display right against a landlord or limits a landlord's display rules. The only display rights in the code bind a common interest community association, and § 38-33.3-106.5(1)(c)'s … |
| 13 | `CO-S13-B14-employee-housing` | 0,1,2,3,4,5,6,7,8,9,10,1… | 83 control: 0 positive: 13-40-104 PASSED | 8 acts, screened by subject and read where on topic — HB 25-1168 (renumbers § 13-40-104(5)… | Colorado's employee-housing law is three exemptions (§§ 38-12-511(1)(e), 38-12-1302(1)(d) and 13-40-104(1)(e)) plus the agricultural-worker access and posting duties in § 8-13.5-202. There is no migrant or farm labour ca… |
| 13 | `CO-S13-B15-tenant-notify-landlord` | 0,1,2,3,4,5,6,7,8,9,10,1… | 32 control: 0 positive: 38-12-505 PASSED sections: 4-2.5-103, 4-2.5-304, 4-2.5-405, 4-2.5-508, 4-2.5-513, 4-2.5-516 x2, 4-2.5-519, 4-2.5-526 x2, 4-2.5… | 3 acts — HB 25-1168, HB 25-1249 and HB 26-1196, each read in full for other topics in this… | Every Colorado tenant-notification duty found is about something else — a habitability condition (§§ 38-12-503 to 38-12-505), a gas hazard (§ 38-12-104), bed bugs (§ 38-12-1002), a nuisance notice (§ 31-15-402), a paymen… |
| 13 | `CO-S13-B16-attornment` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 23-70-105.5 PASSED sections: 23-70-105.5 | 0 acts | Colorado has no attornment statute. The word appears once in the whole code, in a grant of power to the Auraria board over ground leases of its complementary facilities. The stem is spelled out with its endings so that "… |
| 13 | `CO-S13-B17-tenant-portal` | 0,1,2,3,4,5,6,7,8,9,10,1… | 13 control: 0 positive: 38-12-505 PASSED sections: 13-40-111, 24-32-721, 24-34-309, 29-27-501, 38-12-1001, 38-12-1002, 38-12-1106 x2, 38-12-505 x3, 38… | 1 act — HB 25-1240, read in full for this slice; its hit is the division of housing public… | Nothing in Colorado prohibits or regulates a tenant portal as such; §§ 38-12-505(3)(d) and (3)(e) assume one may exist and require a mailing or personal-delivery address alongside it. The governing limit on compulsion is… |
| 13 | `CO-S13-B18-tenant-records-ledger` | 0,1,2,3,4,5,6,7,8,9,10,1… | 35 control: 0 positive: 38-12-802 PASSED sections: 12-10-408 x2, 14-10-127.5, 16-10-103, 29-4-1106, 34-44-108, 38-12-203.5, 38-12-212.7, 38-12-223 x3,… | 3 acts, each read in full for this slice — HB 25-1168 (§ 13-40-104(4)(e) repayment plan, §… | Colorado's landlord record duties are § 38-12-503(5) (habitability records, three years after the tenancy, ten calendar days to produce), § 38-12-802 (payment receipts) and § 38-12-103(8) (deposit documentation within fo… |
| 13 | `CO-S13-B19-tenant-performs-repairs` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 38-12-506 PASSED sections: 38-12-506 | 0 acts | § 38-12-506 is the only tenant-repair-agreement provision in the Colorado code. There is no separate statutory route for non-habitability chores, which is why ordinary housekeeping duties rest on contract and on § 38-12-… |
| 13 | `CO-S13-B20-repair-and-deduct` | 0,1,2,3,4,5,6,7,8,9,10,1… | 8 control: 0 positive: 38-12-507 PASSED sections: 4-2.5-508, 38-12-507 x6, 39-3-124 | 0 acts | Repair and deduct exists in Colorado in exactly one place, § 38-12-507(1)(c), and there is no rent-escrow or pay-into-court alternative anywhere in the code. The other two hits are a goods-lease provision and a property-… |
| 14 | `CO-S14-B01-tenant-organizing` | 0,1,2,3,4,5,6,7,8,9,10,1… | 29 control: 0 positive: 38-12-509 PASSED | 0 acts | Colorado's tenant-organizing law is the retaliation bar (§ 38-12-509(1)(a)(II)), the part 5 definition (§ 38-12-502(6.3)) and the mobile home park parallels (§§ 38-12-206, 38-12-212.5, 38-12-217, 38-12-218). There is no … |
| 14 | `CO-S14-B01R-organizing-verb` | 0,1,2,3,4,5,6,7,8,9,10,1… | 36 (simple-term form "\bOrganiz(?:e\|es\|ed\|ing)\b" over title 38, 23 sections) control: 0 positive: 38-12-502 PASSED | 0 acts | The verb form adds nothing: the only organizing-and-tenant pairings in title 38 are § 38-12-212.5 (mobile home parks), § 38-12-502 and § 38-12-509. § 38-12-801 contains no reference to organizing at all, so Colorado does… |
| 14 | `CO-S14-B02-criminal-record-negligence-shield` | 0,1,2,3,4,5,6,7,8,9,10,1… | 9 control: 0 positive: 8-2-201 PASSED | 0 acts | Colorado has no statutory negligence shield for a landlord who rents to a person with a criminal record. The 8 matching sections, read off the uncapped ALL block, are §§ 8-2-201 (employer negligent-hiring evidence rule),… |
| 14 | `CO-S14-B02R-criminal-record-negligence-shield-…` | 0,1,2,3,4,5,6,7,8,9,10,1… | 8 control: 0 positive: 24-10-106 PASSED | 0 acts | The reverse word order confirms the absence: §§ 12-300-109, 15-11-803, 16-3-107.5, 24-10-106, 24-60-1101, 29-7.1-104 and 44-20-121, none landlord-facing. |
| 14 | `CO-S14-B03-change-of-terms-notice` | 0,1,2,3,4,5,6,7,8,9,10,1… | 8 control: 0 positive: 23-41-104 PASSED | 0 acts | Read off the uncapped ALL block, the 8 sections are §§ 4-2.5-518, 4-2.5-527 (UCC leases of goods), 23-31.5-110, 23-41-104, 30-11-304, 31-15-714, 35-75-107 and 36-1-115 — public-land, school-land and goods-lease provision… |
| 14 | `CO-S14-B03R-change-of-terms-notice-reverse` | 0,1,2,3,4,5,6,7,8,9,10,1… | 5 control: 0 positive: 23-41-104 PASSED | 0 acts | §§ 23-31.5-110, 23-41-104, 36-1-118, 38-21.5-101 and 38-22.5-102 — two state-land leasing provisions and two title 38 provisions on severed mineral interests and construction. Nothing residential, in either word order, o… |
| 14 | `CO-S14-B04-towing-local-preemption` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2 control: 0 positive: 40-10.1-405 PASSED | 0 acts | Colorado's towing and abandoned-vehicle statutes contain no preemption of local towing ordinances. Both hits are the word "exclusive" used for something else — a taxicab passenger's exclusive use (§ 40-10.1-101(19)) and … |
| 14 | `CO-S14-B05-tenant-protection-act-notice` | 0,1,2,3,4,5,6,7,8,9,10,1… | 68 control: 0 positive: 38-7-102 PASSED (a real title 38 hit of this forward limb; § 38-12-301 carries "rent control" but not the word "notice" at all… | 6 acts, each read out by its own AN ACT CONCERNING subject line and discharged — HB 25-100… | Colorado has no rent cap, no just-cause notice and no tenant-protection-act advisory. In titles 38 and 13 the pattern reaches only 5 sections, none landlord-tenant. "Good cause" and "just cause" appear overwhelmingly in … |
| 14 | `CO-S14-B05R-tenant-protection-act-notice-rever…` | 0,1,2,3,4,5,6,7,8,9,10,1… | 73 control: 0 positive: 13-15-101 PASSED (a real reverse-order hit — 'good cause' within 200 characters of 'publish notice' at (1.5)); this limb retur… | 5 acts, each read out by its own AN ACT CONCERNING subject line and discharged — HB 25-104… | The reverse word order confirms the absence across all 45 corpus titles. |
| 14 | `CO-S14-B06-exemption-notice-to-tenant` | 0,1,2,3,4,5,6,7,8,9,10,1… | 3 control: 0 positive: 13-40-104 PASSED | HB 25-1168 (read: § 2 renumbers § 13-40-104(5)(b) to (5)(d), text unchanged, and the emplo… | Colorado's only exemption that must be claimed in the lease is the 'exempt residential agreement' at § 13-40-104(5)(b), renumbered (5)(d). The other matching section, § 39-3-112.5, is a property-tax exemption whose notic… |
| 14 | `CO-S14-B07-tenant-protection-repeal-clock` | 0,1,2,3,4,5,6,7,8,9,10,1… | 10 control: 0 positive: 38-12-508 PASSED (a real hit from this battery's own ten-section tally; § 40-10.1-404 carries "repeal" five times but neither … | 2 acts, both read out — HB 25-1236 (portable tenant screening reports; its repeal directiv… | Read off the uncapped ALL block, the 10 sections are §§ 6-25-105, 10-1-145, 10-4-608, 13-40-104, 13-40-124, 24-21-630, 38-12-209, 38-12-220, 38-12-508 and 38-33-111. Every landlord-tenant one is a historical repeal in a … |
| 14 | `CO-S14-B07R-tenant-protection-repeal-clock-rev…` | 0,1,2,3,4,5,6,7,8,9,10,1… | 14 control: 0 positive: 40-10.1-405 PASSED | 1 act — HB 26-1295 (AN ACT CONCERNING THE REPEAL OF OBSOLETE STATUTORY REQUIREMENTS RELATE… | 13 sections, §§ 10-1-145, 13-40-111, 13-40-124, 13-40-125, 15-15-408, 24-32-721, 24-34-505.6, 24-75-112, 38-11-101, 38-12-502, 38-12-508, 38-20-104 and 40-10.1-405. All historical repeals of subsections. The reverse orde… |
| 14 | `CO-S14-B08-translation-duty` | 0,1,2,3,4,5,6,7,8,9,10,1… | 19 control: 0 positive: 38-12-505 PASSED | 1 act — SB 25-299 (adds part 18 of article 1 of title 6, residential clean energy systems)… | Read off the uncapped ALL block, the 10 sections are §§ 13-40-106, 24-32-721, 32-1-1005, 38-12-1104, 38-12-1303, 38-12-206, 38-12-212.3, 38-12-212.9, 38-12-217 and 38-12-505. The ordinary-rental translation duties are § … |
| 14 | `CO-S14-B08R-translation-duty-reverse` | 0,1,2,3,4,5,6,7,8,9,10,1… | 20 control: 0 positive: 38-12-505 PASSED | 1 act — HB 26-1224 (AN ACT CONCERNING FINANCIAL PROTECTIONS FOR MOBILE HOME PARK RESIDENTS… | 8 sections, §§ 13-40-106, 38-12-206, 38-12-212.3, 38-12-212.9, 38-12-213, 38-12-217, 38-12-505 and 4-2-725 (a UCC statute-of-limitations false positive on "lease"). The reverse order adds only § 38-12-213, the mobile hom… |
| 14 | `CO-S14-B09-trespass-landlord-tenant` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2 control: 0 positive: 18-4-503 PASSED | 0 acts | Only two sections in the whole code put trespass near a landlord, tenant, apartment or common-area word: § 18-4-503, the second degree offence whose (1)(b) covers apartment common areas, and § 36-1-121, a state-land tres… |
| 14 | `CO-S14-B09R-trespass-landlord-tenant-reverse` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2 control: 0 positive: 18-4-503 PASSED | 0 acts | §§ 18-4-503 and 33-6-115.5 (wildlife, hunting on private land). The reverse order confirms the absence of any landlord-tenant trespass-notice provision. |
| 14 | `CO-S14-B10-tenant-rights-handbook` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2 control: 0 positive: 38-12-803 PASSED | 0 acts | Two sections only: § 38-12-803 (the radon brochure, already carried by the CO radon rows) and § 24-32-721 (a division-of-housing programme). Colorado has no tenant-rights handbook, booklet or statement-of-rights duty. A … |
| 14 | `CO-S14-B10R-tenant-rights-handbook-reverse` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: none of its own — § 38-12-803 is a hit of the forward limb CO-S14-B10 only (0 hits in title 38 at this limb's 250-character win… | 0 acts | One hit, § 2-2-321 (legislative drafting manual). "guide" was dropped from the reverse pattern because unanchored it matches "guidelines" and "guidance" across the code without adding anything; "brochure" and "pamphlet" … |
| 14 | `CO-S14-B11-squatter-term-of-art` | 0,1,2,3,4,5,6,7,8,9,10,1… | 4 control: 0 positive: 8-13.5-203 PASSED | 0 acts | A FALSE ABSENCE if trusted. All 4 hits are in one section, § 8-13.5-203, and every one is "squatting position" in the agricultural short-handled-hoe rules — exactly C19's false-presence trap. Colorado's statute calls the… |
| 14 | `CO-S14-B11R-removal-everyday-words` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 13-40.1-101 PASSED | 0 acts | The single hit is § 13-40.1-101, Colorado's whole unauthorized-person removal route, which the term-of-art battery missed. A companion battery on the affidavit route ("affidavit\|sworn complaint\|sworn statement\|ex part… |
| 14 | `CO-S14-B12-unbundled-parking` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: none of its own — § 40-10.1-101 is a hit of the reverse limb CO-S14-B12R only (0 hits in title 40 for this forward limb; the se… | 0 acts | One hit, § 42-4-1102 (traffic control devices). Colorado has no unbundled-parking statute: nothing requires parking to be bundled into rent, nothing permits unbundling expressly, and nothing caps a parking charge. The wi… |
| 14 | `CO-S14-B12R-unbundled-parking-reverse` | 0,1,2,3,4,5,6,7,8,9,10,1… | 3 control: 0 positive: 40-10.1-101 PASSED | 0 acts | §§ 29-35-202 (transit-oriented communities definitions, read whole and binding local governments on parking minimums, not landlords), 40-10.1-101 (motor carrier definitions) and 42-5-109 (motor vehicle theft). The absenc… |
| 14 | `CO-S14-B13-unconscionability` | 0,1,2,3,4,5,6,7,8,9,10,1… | 142 control: 0 positive: 38-33.3-112 PASSED | 1 act — HB 25-1090 (4 hits), read: it adds § 6-1-737, whose (5) makes a landlord's pricing… | Colorado has no general residential-lease unconscionability statute, but the battery found one landlord-tenant provision that uses the word — § 38-12-1307, the retaliatory-rent-increase bar, which reaches an unconscionab… |
| 14 | `CO-S14-B14-usufruct` | 0,1,2,3,4,5,6,7,8,9,10,1… | 6 control: 0 positive: 37-92-310 PASSED | 0 acts | Colorado has no usufruct. All 6 hits sit in 5 title 37 water-law sections (§§ 37-75-102, 37-75-105, 37-80.5-102, 37-90.5-104, 37-92-310) describing a water right as usufructuary. The word appears nowhere in title 38 or t… |
| 14 | `CO-S14-B14R-life-estate-lessor` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2 control: 0 positive: 38-31-102 PASSED | 0 acts | This is the everyday-word second battery the brief requires where the term of art returns nothing usable. Two hits, §§ 38-31-102 and 38-31-103, both read whole: proof-of-death recording provisions confirming that a life … |
| 14 | `CO-S14-B15-utility-apportionment` | 0,1,2,3,4,5,6,7,8,9,10,1… | 182 control: 0 positive: 38-12-212.7 PASSED | 9 acts, each screened by its own AN ACT CONCERNING subject line and read out — HB 26-1013 … | Outside § 6-1-737(4.5), Colorado has no residential utility-apportionment rule. Restricted to titles 38 and 13 the pattern returns 2 hits in 2 sections — § 38-12-212.7 (mobile home park landlord utilities account, Part 2… |
| 15 | `CO-S15-B01-deposit-then-utility` | 0,1,2,3,4,5,6,7,8,9,10,1… | 23 control: 0 positive: 38-12-103 PASSED (anchored — the 2024 text reads "the security deposit for nonpayment of rent, abandonment of the premises, or… | 4 acts, each read — HB 25-1168 (victim-survivor housing protections; the § 38-12-103(1)(a)… | 18 distinct sections. Colorado has no separate utility-deposit statute for a site-built residential tenancy: the deposit rules in part 1 of article 12 of title 38 do the work, and the only utility-specific deposit provis… |
| 15 | `CO-S15-B01R-utility-then-deposit` | 0,1,2,3,4,5,6,7,8,9,10,1… | 23 control: 0 positive: 38-12-212.7 PASSED (anchored — the heading is "Landlord utilities account" and (2) requires the landlord to "deposit an amount… | same 4 acts as CO-S15-B01, each read; nothing further | 20 distinct sections, the reverse word order adding §§ 13-54.5-106, 24-32-721, 29-4-703, 31-35-411, 38-12-1409, 40-2-127.2, 40-42-104, 40-6-116, 40-8-105, 40-8.5-101 — all utility-regulation, housing-finance or garnishme… |
| 15 | `CO-S15-B02-utility-then-disclosure` | 0,1,2,3,4,5,6,7,8,9,10,1… | 12 control: 0 positive: 38-12-801 PASSED (anchored — § 38-12-801(3)(a)(V) reads "any fees for utilities or services" and (3)(a)(VI) is the third-party… | 11 acts, each screened by its own "AN ACT CONCERNING" line and the relevant ones read — HB… | 11 distinct sections. Outside the RUBS condition in § 6-1-737(4.5)(a)(IV) and the general pricing-disclosure duties in § 6-1-737(2) and (3), the 2024 title text and the 2024b-2026a session laws contain no utility disclos… |
| 15 | `CO-S15-B02R-disclosure-then-utility` | 0,1,2,3,4,5,6,7,8,9,10,1… | 7 control: 0 positive: 38-12-801 PASSED (anchored, as CO-S15-B02) | as CO-S15-B02; the reverse order adds nothing | 7 distinct sections (§§ 24-72-204, 38-12-801, 39-21-113, 40-2-104.5, 40-2-122, 40-20-301, 40-3.3-102) — open-records, tax-confidentiality and utility-regulation provisions. Confirms CO-S15-B02. |
| 15 | `CO-S15-B03-designee-notice-disconnection` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: synthetic only — no Colorado section contains this combination, so the proof of absence rests on the broad-term battery CO-S15-… | 0 acts | the single hit is § 24-4.1-303 (victim rights notifications), nothing to do with utilities. Colorado has no third-party or designee utility-notification statute. |
| 15 | `CO-S15-B03B-broad-disconnection-terms` | 0,1,2,3,4,5,6,7,8,9,10,1… | 159 control: 0 positive: 40-3-103.6 PASSED (anchored — heading "Disconnection due to nonpayment - connection and reconnection fees - deposits - standa… | 6 acts on the broad terms, screened by subject line (HB 25-1168, HB 25-1234, SB 25-321, HB… | 74 distinct sections carry the disconnection vocabulary, so the engine and the vocabulary are sound. The 74 were enumerated off the summary line and every hit in titles 13, 29, 30, 31, 32, 38 and 40 was read in context: … |
| 15 | `CO-S15-B03C-utility-notice-to-owner-everyday` | 0,1,2,3,4,5,6,7,8,9,10,1… | 7 control: 0 positive: 29-8-134 PASSED (anchored — "There shall be included in the notice of the public hearing ... notice that all owners of land wit… | 1 act — HB 25-1117 (regulation of vehicle immobilization companies), screened by its own "… | 5 distinct sections (§§ 9-1.5-103, 29-8-134, 30-15-401, 40-15-601, 40-15-602). This is the everyday-word companion slice 14 asks for, run at a 300-character window, and it changes nothing: the owner-notice provisions it … |
| 15 | `CO-S15-B03R-disconnection-then-notice` | 0,1,2,3,4,5,6,7,8,9,10,1… | 46 control: 0 positive: 29-8-135 PASSED (anchored — heading "Notice of disconnection" and the body reads "Written notice of disconnection shall be giv… | 7 acts, each screened by subject line and the relevant ones read — HB 25-1234 (consumer pr… | 30 distinct sections, and **not one of them is in title 40**: the regulated utilities' disconnection-notice obligations are in Public Utilities Commission rules, not in the statute. The statutory hits are insurance, crim… |
| 15 | `CO-S15-B04-submeter-vocabulary` | 0,1,2,3,4,5,6,7,8,9,10,1… | 13 control: 0 positive: 40-1-103.5 PASSED (anchored — heading "Limited exemption of master meter operators - conditions - rules" and the body defines … | 2 acts, both read — HB 26-1013 (ratio utility billing system; § 6-1-737(4.5), the governin… | 8 distinct sections (§§ 24-32-130, 25-7-142, 38-12-1106, 38-12-212.7, 40-1-103, 40-1-103.5, 40-2-115, 40-2-124). Colorado's whole submetering regime for a rental is § 40-1-103.5 plus § 6-1-737(4.5); nothing in it authori… |
| 15 | `CO-S15-B04b-interruption-for-nonpayment` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 38-12-510 PASSED (anchored — the single hit is the section's own "willful termination of utilities" sentence, which names the t… | 1 act, read — SB 26-002 (energy affordability; adds § 40-3-122, a percentage-of-income pay… | the only Colorado provision connecting utility interruption to a tenant's nonpayment is the prohibition in § 38-12-510(1). There is no authorising provision anywhere in the 2024 title text or the 2024b-2026a session laws… |
| 15 | `CO-S15-B04c-interruption-widened-anchored` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 38-12-510 PASSED (anchored, as CO-S15-B04b) | as CO-S15-B04b (SB 26-002, read) | widening both windows from 200/120 to 300/200 and anchoring "\bwater\b" and "\bheat\b" leaves the result identical — 1 hit, § 38-12-510. The zero-authorisation finding survives the widened window slice 14 asks for. |
| 15 | `CO-S15-B05-landlord-utility-account` | 0,1,2,3,4,5,6,7,8,9,10,1… | 6 control: 0 positive: 38-12-212.7 PASSED (anchored — heading "Landlord utilities account" and the body reads "Whenever a landlord contracts with a ut… | 0 acts | 4 distinct sections (§§ 25-7-142, 38-12-212.7, 39-10-111, 43-1-225). Colorado has no landlord-utility-account statute for a site-built rental; the duties come from part 5 habitability, § 38-12-510 and § 40-1-103.5 instea… |
| 15 | `CO-S15-B05R-utility-lien-then-property` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2 control: 0 positive: FAILED on this pattern — neither § 31-35-617 nor § 30-20-420, the sections that actually impose the lien, contains the word "ut… | 0 acts | 2 distinct sections (§§ 39-10-111, 39-4-103), both property-tax provisions. **The lesson is the pattern, not the law**: a battery built on the word "utility" cannot find Colorado's municipal utility-charge liens at all, … |
| 15 | `CO-S15-B05b-charges-lien-on-property-served` | 0,1,2,3,4,5,6,7,8,9,10,1… | 14 control: 0 positive: 30-20-420 PASSED (anchored — heading "Failure to pay rates and charges - lien" and the body reads "shall become a lien upon th… | 0 acts | 14 distinct sections — §§ 16-13-310, 30-20-420, 30-20-512, 31-25-611, 31-25-1212, 32-1-1001, 32-12-113, 32-20-107, 32-7-117, 38-35-109, 38-35-124, 39-12-104, 39-3-133, 39-3-134. The utility-charge liens that can reach a … |
| 15 | `CO-S15-B05c-charges-lien-widened-anchored` | 0,1,2,3,4,5,6,7,8,9,10,1… | 20 control: 0 positive: 30-20-420 PASSED (anchored, as CO-S15-B05b) | 0 acts | anchoring the alternation and widening the window to 300 raises the count from 14 to 20 distinct sections and adds **§ 31-35-708**, a second municipal sewerage lien provision in the same shape as § 31-35-617 ('the proper… |
| 15 | `CO-S15-B06-winter-extreme-medical-disconnectio…` | 0,1,2,3,4,5,6,7,8,9,10,1… | 6 control: 0 positive: 40-3-103.6 PASSED (anchored — § 40-3-103.6(1)(g) reads "Prohibitions on the disconnection of service during periods of extreme … | 4 acts, each screened by its own "AN ACT CONCERNING" line and discharged — HB 25-1002 and … | 5 distinct sections (§§ 10-16-705.7, 25-49-106, 27-50-403, 38-12-502, 40-3-103.6). Colorado has **no statutory winter disconnection moratorium, no added winter notice period and no medical-certificate statute**; the extr… |
| 15 | `CO-S15-B06C-seasonal-disconnection-everyday` | 0,1,2,3,4,5,6,7,8,9,10,1… | 3 control: 0 positive: 40-3-103.5 PASSED on the pattern but **by artifact** — the match is the word "March" in the section's own Source note ("effecti… | 1 act, screened by subject and discharged | 3 distinct sections (§§ 31-12-118.5, 31-12-703, 40-3-103.5), the first two being territorial disconnection from a municipality. **§ 40-3-103.5 was opened and read whole because the hit looked seasonal: it is a medical ex… |
| 15 | `CO-S15-B06R-disconnection-then-winter-extreme` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 40-3-103.6 PASSED (anchored, as CO-S15-B06) | as CO-S15-B06, all four acts discharged by subject | the single hit is § 40-3-103.6 itself. Confirms CO-S15-B06 in the reverse word order. |
| 15 | `CO-S15-B07-utility-account-in-tenant-name` | 0,1,2,3,4,5,6,7,8,9,10,1… | 9 control: 0 positive: 38-12-510 PASSED (anchored — the body reads "the willful termination of utilities" and "the termination of heat, running water,… | 10 acts, each screened by its own "AN ACT CONCERNING" line — HB 25-1090 (deceptive pricing… | 9 distinct sections (§§ 13-14-105, 24-75-228, 28-5-701, 37-60-123.3, 37-60-134, 37-95-107.8, 37-97-103, 38-12-510, 38-12-801) — water-resources, veterans-cemetery and protection-order provisions apart from the two landlo… |
| 15 | `CO-S15-B07C-utility-account-widened-anchored` | 0,1,2,3,4,5,6,7,8,9,10,1… | 28 control: 0 positive: 38-12-510 PASSED (anchored, as CO-S15-B07) | as CO-S15-B07, all acts screened by subject and discharged | widening both windows to 300 and anchoring "\bwater\b" raises the result from 9 sections to **26**, and the landlord-tenant and utility ones are §§ 13-14-105 (protection-order relief), 38-12-510, 38-12-801, 38-13-102, 38… |
| 15 | `CO-S15-B07R-tenant-name-then-utility` | 0,1,2,3,4,5,6,7,8,9,10,1… | 10 control: 0 positive: 38-12-212.3 PASSED (anchored — the mobile-home-park utility-service section, which names the tenant and the utility service; r… | 8 acts, each screened by its own "AN ACT CONCERNING" line — HB 26-1013 (ratio utility bill… | 10 distinct sections (§§ 25-7-142, 28-5-701, 37-60-123.3, 37-60-134, 37-92-310, 38-12-212.3, 40-2-115, 40-2-127.2, 40-3-104.3, 40-7.5-103). The only landlord-tenant hit is the mobile-home-park utility provision, and § 40… |
| 15 | `CO-S15-B08-veteran-landlord-rent-lease` | 0,1,2,3,4,5,6,7,8,9,10,1… | 15 control: 0 positive: 24-34-502 PASSED (anchored — "veteran or military status" appears seven times in the section, inside the unfair-housing-practi… | 1 act on a raw `crs.py sess` run — HB 25-1240 (protections for tenants who use housing sub… | 7 distinct sections (§§ 24-34-501, 24-34-502, 24-51-310, 26-12-111, 26-12-201, 28-5-713, 29-4-402) — antidiscrimination, PERA, state veterans community living centres, the division of veterans affairs and the municipal v… |
| 15 | `CO-S15-B08C-landlord-incentive-everyday` | 0,1,2,3,4,5,6,7,8,9,10,1… | 216 control: 0 positive: 29-35-209 PASSED (anchored — the "displacement mitigation strategies menu" section, whose heading carries the term; read in c… | 29 acts on these broad programme words, every one screened by its own "AN ACT CONCERNING" … | 69 distinct sections. This is the everyday-word companion for the veterans-incentive absence: it searches for the *thing* other states have — a landlord incentive, a risk-mitigation fund, a damage fund — rather than the … |
| 15 | `CO-S15-B08b-veteran-credit-incentive-preferenc…` | 0,1,2,3,4,5,6,7,8,9,10,1… | 63 control: 0 positive: 29-4-402 PASSED (anchored — "may create veterans' housing authorities ... and give preferences to veterans"; section read whol… | `battery_sessweep.py` returns 10 acts on this broader pattern, every one screened by its o… | 38 distinct sections, concentrated in title 28 (military and veterans affairs), title 26 (veterans community living centres), title 23 (education benefits) and title 24 (state employment preference). The list was enumera… |
| 15 | `CO-S15-B09-acceptance-of-rent` | 0,1,2,3,4,5,6,7,8,9,10,1… | 1 control: 0 positive: 38-12-202 PASSED (anchored — "acceptance of rent by a landlord during this ninety-day period does not constitute a waiver of th… | 0 acts | the only "acceptance of rent" provision in the Colorado code is § 38-12-202(3), and it is mobile-home-park law confined to the ninety-day cure period for § 38-12-203(1)(a) and (1)(c) grounds. No general rule exists in ei… |
| 15 | `CO-S15-B09C-accepting-rent-everyday` | 0,1,2,3,4,5,6,7,8,9,10,1… | 2 control: 0 positive: 38-12-202 PASSED (anchored, as CO-S15-B09) | 0 acts | 2 distinct sections (§§ 25-27-104.3, 38-12-202). The everyday phrasing — accepting or receiving rent, then waiver or forfeiture, at a 300-character window — finds nothing beyond the mobile-home-park provision. The waiver… |
| 15 | `CO-S15-B09R-waiver-then-breach-or-forfeiture` | 0,1,2,3,4,5,6,7,8,9,10,1… | 27 control: 0 positive: 38-12-202 PASSED (anchored — "does not constitute a waiver of the landlord's right to terminate the tenancy"; section read who… | 1 act, screened by subject and discharged — HB 26-1250 (procedures on state action resulti… | 25 distinct sections, enumerated off the summary line — §§ 4-1-306, 4-2.5-107, 4-2.5-303, 4-9-624, 6-1-716, 10-3-805, 10-3.5-109, 10-7-107, 10-7-608, 13-20-807, 13-21-102.5, 13-40-104, 16-3-503, 16-13-307, 16-13-505, 18-… |
| 15 | `CO-S15-B09b-partial-payment` | 0,1,2,3,4,5,6,7,8,9,10,1… | 32 control: 0 positive: 38-7-104 PASSED (anchored — "Any such withdrawal of said deposit shall be a partial payment of the amount of total compensatio… | 1 act, screened by subject and discharged — HB 26-1311 (bond in lieu of retainage in const… | 23 distinct sections, enumerated off the summary line — §§ 5-20-108, 7-56-301, 8-43-406, 10-4-103, 10-6-128, 13-17.5-103, 13-62.1-110, 14-5-607, 24-91-103, 24-91-104, 36-3-118, 38-1-105, 38-1-116, 38-7-104, 38-7-107, 38-… |
| 15 | `CO-S15-B10-water-heater-temperature` | 0,1,2,3,4,5,6,7,8,9,10,1… | 10 control: 0 positive: 9-4-101 PASSED (anchored — § 9-4-101(23) defines '"Service and domestic-type water heater"' and sets a 'Fluid temperature of t… | 0 acts | 6 distinct sections (§§ 6-7.5-102, 9-4-101, 9-4-118, 25-7-1502, 39-22-554, 40-3.2-108) — appliance-efficiency definitions, boiler pressure limits, air-quality and tax-credit provisions. **No Colorado statute sets a water… |
| 15 | `CO-S15-B10b-antiscald-everyday` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — no Colorado section contains any of these words, which is itself the finding; the engine is proved by CO-S15-B… | 0 acts | **"scald", "anti-scald", "tempering valve" and "mixing valve" appear nowhere in the Colorado Revised Statutes or in the 2024b-2026a session laws.** This is the everyday-word companion to CO-S15-B10 and it confirms that t… |
| 15 | `CO-S15-B11-waterbed-term` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic only — the word does not exist in the corpus, which is the finding; the engine is proved by CO-S15-B11b, whose positi… | 0 acts, on "water[\s-]*bed\w*\|flotation\|liquid[\s-]*filled" across the 2024b, 2025a, 202… | **"waterbed" appears nowhere in the Colorado Revised Statutes, and neither "flotation" nor "liquid-filled" appears in any 2024b-2026a session law.** Colorado has no waterbed statute of any kind — no permission, no prohib… |
| 15 | `CO-S15-B11b-bedding-furniture-everyday` | 0,1,2,3,4,5,6,7,8,9,10,1… | 167 control: 0 positive: 13-54-101 PASSED (anchored — § 13-54-101(4) defines "Household goods" to include 'household furniture, furnishings' and 'beds… | 15 acts on this broad vocabulary, every one screened by its own "AN ACT CONCERNING" line —… | 107 distinct sections use the everyday bedding and furniture vocabulary — execution exemptions, consumer protection, assisted living, moving companies and the deposit walk-through — so the engine reports true positives f… |
| 15 | `CO-S15-B12-window-guard-term` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic in the title text; the engine is proved by CO-S15-B12c, whose positive § 38-12-505 passed anchored on 'unbroken windo… | **1 act, read — HB 25-1168**, whose § 15 rewrites § 38-12-402 and names 'INSTALLING WINDOW… | Colorado has **no window-guard requirement, no fall-prevention device requirement and no prescribed window-guard lease notice**, but the session-law sweep is what prevents a wrong row: the only window-attachment rule in … |
| 15 | `CO-S15-B12b-window-proximity-widened` | 0,1,2,3,4,5,6,7,8,9,10,1… | 0 control: 0 positive: synthetic in the title text, as CO-S15-B12 (engine proved by CO-S15-B12c) | as CO-S15-B12 — HB 25-1168, read | widening the window from 150 to 300 characters changed nothing: 0 hits either way, with every alternation word anchored so that "bars" cannot match "barsCO" style artifacts and "fall" cannot match "fallow". No Colorado s… |
| 15 | `CO-S15-B12c-windows-broad` | 0,1,2,3,4,5,6,7,8,9,10,1… | 115 control: 0 positive: 38-12-505 PASSED (anchored — 'including unbroken windows and doors' at § 38-12-505(1)(b)(II) and 'locks or security devices o… | 9 acts on the bare word, every one screened by its own "AN ACT CONCERNING" line — HB 25-11… | 49 distinct sections use the word "window", so the engine and the vocabulary are sound. The landlord-tenant ones are §§ 38-12-505 and 38-12-510 (and § 38-12-513's 'INOPERATIVE DOORS OR WINDOW LOCKS' in the receivership p… |
| 15 | `CO-S15-B13-written-notice-landlord-tenant` | 0,1,2,3,4,5,6,7,8,9,10,1… | 75 control: 0 positive: 13-40-107 PASSED (anchored — "by serving written notice that expires at the end of the period or fixed term"; section read who… | not run as an absence sweep — this row claims no silence; the acts that change these dutie… | 40 distinct sections, of which the landlord-tenant ones are §§ 13-40-104, 13-40-107, 13-40-107.5, 13-40-108, 13-40-110, 38-12-104, 38-12-105, 38-12-202, 38-12-203, 38-12-203.5, 38-12-211, 38-12-212.7, 38-12-212.9, 38-12-… |

---

## §4 Decisions, the five Colorado items, and the questions put to Taylor

Each of the five named items is answered once, with the statute read section-open from the corpus
(official C.R.S. 2024 edition, title text; currency checked against the 2024b, 2025a, 2025b and
2026a session laws). None is a re-audit. The decisions on the 24 questions the slices raised follow.

---

## Item 1 — optional clauses never screened for Colorado (rule 54)

### 1(a) Crime-free / criminal-activity clause — DECLINED, education row only

**Taylor's decision, 2026-10-24, after a three-message exchange.** Asked whether to offer the clause;
he objected on principle to adding a clause the law already covers ("might be more limiting and/or
become unknowingly out of date"), was shown a draft, then pressed the decisive question: "why is this
one an exception? why include this one, when we exclude similar ones? I feel like we are breaking a
rule here."

**The main pass had recommended a narrow optional clause and withdrew that recommendation.** The
reasoning that killed it:

- Rule 55's restatement check puts it on the clause side — it restates a **tenant duty**. That is why
  it first read as the rule applying normally rather than an exception. The C2 exclusions and the
  SOP 1.16 Q4 call are the opposite polarity (a statutory ceiling stated in the tenant's favour).
- But rule 54's optional-clause category is a term the law lets a lease **add or choose**, whose
  paradigm is a right that exists **only if the lease invokes it** — "a right the lease is silent on
  is lost". `jury-waiver-possession-co` is that; § 38-12-801(2)'s owner-identity disclosure is a
  statute requiring the term *in the lease*. The crime-free clause is neither: silence loses nothing,
  because **§ 13-40-107.5(2) declares the no-substantial-violation term an implied term of every
  lease in the state**.
- The one legal gain claimed for it — a material-lease-violation route for tenancies part 13 does not
  cover — **does not exist**. § 13-40-107.5(2) makes the duty an implied term *of the lease itself*,
  so its breach already is a lease violation with or without an express clause; and
  § 13-40-104(1)(d.5) supplies the substantial-violation ground directly for covered and exempt
  tenancies alike (§ 38-12-1303(2)(e) lists it as a cause).
- What remained was **notice value only**, which is not one of rule 55's three buckets nor rule 54's
  category. Admitting it would justify restating most of Colorado's landlord-tenant law as clauses,
  each then needing maintenance against amendment.

**Filed:** a rule 54 education row keyed to `criminal-activity` (slice 02) stating that the option is
lawful, that the library declines it because the duty is already implied into every lease so an
express clause adds no enforceable right, and that a landlord who wants one may add their own and
should take advice first. No clause. The statutory analysis the row must carry — the
§ 13-40-107.5(3) definition and the three limits — is in `canvass/PRE-RESEARCHED.md` P3.

Statute read: § 13-40-107.5 whole; § 38-12-1303 whole; § 38-12-402(1); § 38-12-1302.

### 1(b) Eviction-fee clause (a charge for serving notices or filing) — PROHIBITED, no clause

**§ 38-12-801(3)(a)(I):** a written rental agreement must not include 'A clause that assigns a penalty
to a party stemming from an eviction notice or an eviction action that results from a violation of the
rental agreement'. Any such provision 'is void and unenforceable' (§ 38-12-801(3)(b)).

**The bar is universal — no small-property or mobile-home exemption.** § 38-12-801(8)'s owner-occupied
duplex/triplex/ADU carve-out reaches only (3)(a)(III), (IV), (V), (VI) and (VII); § 38-12-801(4)'s
mobile-home carve-out reaches only (3)(a)(III)(A), (III)(C), (III)(D), (IV), (V), (VI) and (VII).
**(I) and (II) are in neither list.**

Reinforcing: § 6-1-737(4)(f) bars a fee for a good or service 'NECESSARY TO COMPLY WITH THE
RESPONSIBILITIES OR OBLIGATIONS OF A LANDLORD', which is what serving a statutory demand is;
§ 6-1-737(4)(e) bars a charge 'RELATED TO THE OVERDUE PAYMENT OF A FEE, CHARGE, OR AMOUNT THAT IS NOT
RENT'; § 38-12-801(3)(a)(V) bars characterizing a non-rent amount as 'rent' for which eviction is
available; § 38-12-105(7) 'A late fee is distinct from rent, and a rental agreement may not classify a
late fee as rent for the purposes of section 13-40-104 (1)(d).'

Also screened: **§ 38-12-801(3)(a)(II)** prohibits a one-way fee-shifting clause — any fee-shifting
clause must run to the prevailing party, on a court finding that the party prevailed and the fee is
reasonable. § 13-40-123 separately gives a residential prevailing party no attorney fees 'unless the
residential rental agreement between the parties contains a provision for either party to obtain
attorney fees'.

**Filed:** rule 54 education rows on the fee topics owned by slices 02, 04, 05, 07, 08 and 11, per
`canvass/PRE-RESEARCHED.md` P2. No clause.

---

## Item 2 — shared fee clauses `keys` and `hoa-compliance` (2026-10-04 cross-state check)

Both rows are active, tagged CO, `LEASE_CLAUSE`, `SERVES_LANDLORD`, and **neither carries a `CO:`
notes segment** (see §6 finding below).

### Colorado's allowed-fee rules, as they now stand

**C.R.S. § 6-1-737** (added by HB 25-1090, effective 2026-01-01) — not in the corpus's 2024 edition.
§ 6-1-737(4): 'A LANDLORD OR THE LANDLORD'S AGENT SHALL NOT REQUIRE A TENANT TO PAY A FEE, CHARGE, OR
AMOUNT:' … '(e) RELATED TO THE OVERDUE PAYMENT OF A FEE, CHARGE, OR AMOUNT THAT IS NOT RENT;
(f) FOR A GOOD, SERVICE, OR PROPERTY NECESSARY TO COMPLY WITH THE RESPONSIBILITIES OR OBLIGATIONS OF A
LANDLORD OR THE LANDLORD'S AGENT, INCLUDING THE LANDLORD'S RESPONSIBILITY TO PROVIDE A HABITABLE
LIVING ENVIRONMENT IN ACCORDANCE WITH SECTION 38-12-503; (g) ABOVE THE TOTAL PRICE OF THE GOOD,
SERVICE, OR PROPERTY FOR WHICH AN AMOUNT IS CHARGED, EXCEPT AS PROVIDED IN SECTION 38-12-801
(3)(a)(VI); (h) FOR A GOOD, SERVICE, OR PROPERTY NOT ACTUALLY PROVIDED; (i) FOR THE MAINTENANCE OF
COMMON AREAS; OR (j) THAT VIOLATES THIS SECTION.' Violation is 'A DECEPTIVE, UNFAIR, AND
UNCONSCIONABLE ACT OR PRACTICE' (§ 6-1-737(5)(a)), with a 14-day written-demand route and, on refusal,
'ACTUAL DAMAGES PLUS AN INTEREST RATE OF EIGHTEEN PERCENT PER ANNUM COMPOUNDED ANNUALLY'
(§ 6-1-737(5)(b)(II)).

**§ 38-12-801(3)(a)(VI)** as amended by the same act: (A) no markup or fee for a third-party-billed
service, 'except that a written rental agreement may include a provision that requires a tenant to pay
either a markup or fee in an amount that does not exceed two percent of the amount that the landlord
was billed or a markup or fee in an amount that does not exceed a total of ten dollars per month, but
not both'; (B) no 'FEE, CHARGE, OR AMOUNT THAT VIOLATES ANY PART OF SECTION 6-1-737'. Prohibited
provisions are void under § 38-12-801(3)(b).

### Domestic-violence lock-change rule — PRESENT. The main pass first got this wrong.

**Colorado gives a victim-survivor a lock-change right, and the main pass initially recorded the
opposite.** The error and its cause are set out here rather than buried, because the cause became the
pass's most consequential method change.

**What the law is. § 38-12-402(7)(a)** (HB 25-1168, § 15, effective on passage 2025-05-22): where a
tenant gives notice of victim-survivor status with the § 38-12-402(2)(a.5) documentation, the landlord
'SHALL NOT PREVENT THE TENANT FROM CHANGING THE LOCKS, OR IMPOSE FEES ON, TAKE ANY ADVERSE ACTION
AGAINST, OR OTHERWISE RETALIATE AGAINST THE TENANT FOR CHANGING THE LOCKS, INCLUDING ELECTRONIC
LOCKS, OR PREVENT THE TENANT FROM TAKING ANY OTHER REASONABLE SAFETY PRECAUTIONS, INCLUDING, BUT NOT
LIMITED TO, INSTALLING WINDOW BARS, CAMERAS, OR OTHER NON-PERMANENT MODIFICATIONS'. It adds an
affirmative duty — 'A LANDLORD MUST TAKE ALL STEPS REASONABLY NECESSARY TO ENSURE THE SAFETY OF THE
DWELLING UNIT IN RESPONSE TO A TENANT'S SAFETY CONCERNS' — and voids the contrary term: 'ANY PROVISION
… THAT PROHIBITS A TENANT FROM CHANGING A LOCK AS A SAFETY PRECAUTION … IS NULL AND VOID AND
UNENFORCEABLE'. **(7)(b)** makes the change neither a material violation under § 13-40-104(1)(e) nor a
substantial violation under (1)(d.5); **(7)(c)** requires the tenant to give the landlord a key or
code within **fourteen days**, with a carve-out where the landlord is the alleged responsible party;
and **§ 38-12-402(8)** gives a private action with statutory damages of actual damages plus **the
greater of three times the monthly rent or $5,000**.

**What the main pass did, and why it was wrong.** It ran two whole-code batteries —
`co-lock-change-wholecode` (0 hits, control 0 in all 45 titles) and `co-lock-everyday-wholecode`
(37 hits, control 0, **real positive § 38-12-505(1)(XI) passed**) — and recorded a confirmed absence,
writing it into the shared `PRE-RESEARCHED.md` P4 with an instruction to later slices **not to re-run
it**. **Slice 03 found the right anyway.** The patterns were sound: run against the session laws, the
very same pattern returns HB 25-1168 immediately. **Only the corpus was wrong** — `crs.py grep` reads
the 2024 title text, and the right arrives by 2025 session law. P4 was rewritten the same day, and the
cause became **class decision C17**, which now requires every absence battery to be run over the
session laws as well, with a `session-laws:` line in the block. It is proposed SOP change 2.

**What remains true**, and is still in the row: § 38-12-505(1)(XI) and (1)(g) (working locks as a
habitability characteristic), § 38-12-510 (unlawful removal 'includes … the willful removal of doors,
windows, or locks to the premises other than as required for repair or maintenance'), and —
**compensation, not a landlord duty** — § 24-4.1-102(8.5)(b), which makes 'expenses related to the rekeying
of a motor vehicle or other locks necessary to ensure a victim's safety' property damage, and
§ 24-4.1-109(1.5)(a)(III), which lists 'The rekeying of a motor vehicle or other lock that is
necessary to ensure the victim's safety' as a compensable
expense paid by the state crime-victim fund. Outside § 38-12-402(7) there is still **no general tenant
right to change locks and no general landlord re-key duty.**

### Conflicts to report (see §6)

- **`keys`** — "If Tenant fails to return all keys or requires a replacement, Landlord may re-key the
  applicable locks and charge the cost to Tenant." A locksmith's work is 'a service for which the
  landlord is billed by a third party', so § 38-12-801(3)(a)(VI)(A) caps any markup at 2% of the
  billed amount **or** $10 per month, not both; § 6-1-737(4)(g) bars any charge above the service's
  total price, and (4)(h) bars a charge where no re-key is actually performed. The clause's open
  "charge the cost to Tenant" does not say the charge is limited to the actual cost actually incurred.
- **`hoa-compliance`** — "Any fines incurred due to Tenant's violation of association rules will be
  Tenant's responsibility." § 6-1-737(4)(i) bars any fee, charge or amount 'FOR THE MAINTENANCE OF
  COMMON AREAS', and 'common areas' is defined by § 38-12-502(2) as 'the facilities and appurtenances
  to a residential premises, including the grounds, areas, and facilities held out for the use of
  tenants generally'. A fine for the tenant's own rule violation is arguably not a charge for common-
  area maintenance, but an association assessment or a fine levied for a common-area condition would
  be, and the clause's unqualified "any fines" reaches both.

Wording proposed for Claude Code at sync is in §6; the pass does not edit either row (scope fence).

---

## Item 3 — three central shared edits (2026-10-04), one line each

All three are active, tagged CO, and read correctly under Colorado law.

1. **`smoking-policy`** — correct. Remediation cost is limited to "smoking by Tenant, an occupant, or
   a guest or invitee of Tenant in violation of this Section", which is the scope the 2026-10-04 edit
   intended. The marijuana limb is lawful: **Colo. Const. art. XVIII, § 16(6)(d)** — 'Nothing in this
   section shall prohibit a person, employer, school, hospital, detention facility, corporation or any
   other entity who occupies, owns or controls a property from prohibiting or otherwise regulating the
   possession, consumption, use, display, transfer, distribution, sale, transportation, or growing of
   marijuana on or in that property.' Cautious-course note: § 16(7)(a) preserves medical-marijuana
   privileges under art. XVIII, § 14, so § 16 neither grants nor removes an owner's power over medical
   marijuana; a smoking restriction (as against a possession ban) is the safer footing.
2. **`no-alterations`** — correct, and Colorado supplies the instance the savings sentence exists for:
   **§ 38-12-601(5)** 'A charging system installed at the tenant's cost is property of the tenant.
   Upon termination of the lease, if the charging system is removable, the tenant may either remove it
   or sell it to the landlord or another tenant for an agreed price.' The clause's "does not change who
   owns an installation that applicable law makes Tenant's property" preserves that.
3. **`addendum-precedence`** — correct. Its deference to "any disclosure, notice, or addendum that
   applicable law requires, or that applicable law says controls" accommodates § 38-12-801(3)(b)
   (prohibited provisions void), § 38-12-1305 (no waiver of part 13), § 13-40-104(1)(d) (no waiver of
   the notice requirement) and § 13-40-115(5) (no waiver of the pay-before-judgment right).

Note for P1/C15: **§ 38-12-601(1)(b)** 'A landlord shall not assess or charge a tenant any fee for the
placement or use of an electric vehicle charging system', with three exceptions — actual electricity
cost or a reasonable access fee (plus any network fee), installation cost where the landlord installs
at the tenant's request, and a reasonable fee to reserve a specific parking spot in a shared area.

---

## Item 4 — CARES Act mentions — the screen was clean, but the premise was not

> **Read the revision below before the screen.** The screen's own finding stands: no Colorado row
> mentions the federal 30-day notice, and none conflicts with `edu-cares-act-notice`. But the item's
> premise — that the 30-day notice is a purely federal overlay — was overturned by slice 13.
> **§ 38-12-1502(1) enacts it into Colorado law.**

`edu-cares-act-notice` is active and tagged on all 56 jurisdictions, CO included.

Screen run two ways over the decompressed CSV: (a) every active CO-only row's `title`, `bodyText` and
`notes` against `/CARES|30 days|30-day|thirty-day|thirty \(30\) day/i`; (b) the `CO:` segment of every
shared row tagged CO. **Result: no Colorado row mentions the federal 30-day notice.** Segment screen
returned 0 rows. The seven field hits in (a) are unrelated 30-day periods and none conflicts with
`edu-cares-act-notice`: `security-deposit-return-co` (deposit return window),
`ev-charging-requirements-co` (registration within 30 days, § 38-12-601(2)(b)),
`edu-death-of-tenant-co` (§ 38-12-801(3.5)(b)(II)'s 30 days after death),
`environmental-event-termination-co` (30 days' notice of termination), `rent-increase-notice-co`
(discussion of a landlord-supplied notice period), `edu-dv-lease-termination-co` and
`edu-ev-charging-rights-co`.

### Item 4 REVISED (2026-10-24, after slice 13) — there IS something to report

The screen above was accurate about what the Colorado rows **say**, and the conclusion that no
Colorado row mentions the federal 30-day notice stands. But the premise behind the item — that the
30-day notice is a purely federal overlay — **is no longer true for Colorado**, and slice 13 found
why.

**HB 25-1240, § 2 adds part 15 of article 12 of title 38, "PROTECTIONS FOR TENANTS OF SUBSIDIZED
HOUSING" (§§ 38-12-1501, 38-12-1502), and § 38-12-1502(1) enacts the CARES Act notice into Colorado
law:**

> 'A LANDLORD WHO INITIATES AN EVICTION PROCEEDING FOR NONPAYMENT OF RENT AGAINST A TENANT SHALL
> COMPLY WITH THE NOTICE REQUIREMENTS SET FORTH IN 15 U.S.C. SEC. 9058 (c), AS ENACTED INTO LAW ON
> MARCH 27, 2020, NOTWITHSTANDING ANY CHANGES IN FEDERAL LAW THAT MAY OCCUR OR MAY HAVE OCCURRED
> SUBSEQUENT TO THIS DATE.' (C.R.S. § 38-12-1502(1), HB 25-1240, § 2)

"Landlord" for part 15 means any landlord as defined in § 38-12-502(5) **or** mobile home park
management under § 38-12-201.5(3) (§ 38-12-1501(1)); "tenant" takes its § 38-12-502(9) meaning.
§ 38-12-1502(2) encourages the Division of Housing to publish a resource list helping a landlord
'DETERMINE WHETHER ANY OF THE LANDLORD'S PROPERTIES ARE A COVERED DWELLING, AS DEFINED IN 15 U.S.C.
SEC. 9058 (a)(1)'.

**Why this matters to the shared row.** `edu-cares-act-notice` is tagged on all 56 jurisdictions and
tells the landlord that the rule is federal, that "The same law's temporary eviction moratorium ended
in 2020, but the 30-day notice section has no end date", and that "Courts disagree about whether it
still applies, and whether it reaches only evictions for nonpayment". **For Colorado that framing is
now wrong in the landlord's disfavour in one respect and in the tenant's disfavour in another:** the
duty is Colorado's own, it is **frozen as the federal text stood on 2020-03-27**, and it applies
"NOTWITHSTANDING ANY CHANGES IN FEDERAL LAW" — so a later federal repeal, amendment or narrowing
judicial reading does not release a Colorado landlord, and the federal-court disagreement the row
describes does not resolve the Colorado duty either way.

**One point the pass could not settle.** § 38-12-1502(1) is written as a duty on "A LANDLORD" without
an express covered-dwelling limit, while the part is headed subsidized housing and (2)(a) assumes the
landlord needs to work out whether a property is a federally "covered dwelling". The better reading is
that the duty tracks 15 U.S.C. § 9058(c)'s own covered-dwelling scope, frozen at the 2020 text, since
that is what the incorporated notice requirements apply to. **The cautious course for a Colorado
landlord is to give at least thirty days' written notice to vacate before a nonpayment eviction
wherever the property might be federally backed or in a covered program** — which is what
`edu-cares-act-notice` already advises, so no landlord following the row is exposed. No published
Colorado case was searched; there is no case-law corpus here.

**Recorded as a `FINDING-EXISTING` for sync** rather than fixed: `edu-cares-act-notice` carries 56
jurisdictions and this pass may not edit a shared row's text (scope fence). The CO segment needs the
§ 38-12-1502 basis, and Colorado's own rows on nonpayment notice should cross-reference it.

---

## Item 5 — currency of the new rows

Per-topic, carried by each slice under C10: every section a row relies on gets a `crs.py sess` run and
any 2025/2026 amending act read with its effective-date clause. The main pass's own currency work this
session produced C15 and the three fee acts (HB 25-1090, HB 25-1108, HB 26-1013) — see §1 and §6.

---

## Taylor's decisions on slice questions (2026-10-24)

### Decided by Taylor

1. **Builder gate for the five-day nonpayment notice — GATE IT, and reuse the pattern.**
   `exempt-residential-agreement-notice-co` works only where the landlord owns five or fewer
   single-family rental homes and the premises is a single-family home (C.R.S. § 13-40-104(5)(d),
   renumbered from (5)(b) by HB 25-1168, § 2). The builder asks both questions and suppresses the
   clause unless both are yes. Taylor also took the reuse option, so the gate pattern is to be applied
   to Colorado's other small-landlord carve-outs — which use **different** thresholds and must not be
   conflated (§ 38-12-801(2.5)(b), § 38-12-801(8), § 38-12-1302(1)(b), § 38-12-506).
   *For Claude Code: this is a builder change, not a row change.*
2. **Deposit instalments — OFFER an `[Optional.]` clause with the three guardrails.** In a later pass,
   not this canvass. The guardrails are mandatory: (i) the instalments are deposit, not rent, and no
   rent remedy including eviction is available for a missed one; (ii) no fee, charge or interest
   attaches to a late instalment; (iii) the unpaid instalment is itself listed among the lawful
   charges recoverable from the deposit under § 38-12-103(1)(b)(III). Never revive
   `security-deposit-installments-co` as drafted.

### Decided by the main pass, consistent with Taylor's crime-free principle

3. **Confession-of-judgment clause — DECLINED.** Not prohibited by Colorado's closed
   § 38-12-801(3)(a) list, but it cannot deliver possession: removal without court process is
   unlawful under § 38-12-510(1). `edu-confession-of-judgment-co` ships as education.
4. **Narrow clause mirroring the statutory substantial-violation term — DECLINED**, for the same
   reason Taylor declined the crime-free clause: § 13-40-107.5(2) already implies the duty into every
   lease, so the clause adds nothing enforceable and notice value alone is not a basis for a clause.
   `edu-expedited-criminal-eviction-co` is the whole answer.
5. **Firearm possession ban — DECLINED.** Colorado is silent both ways (battery
   `co5-firearms-plainword-wholecode`: zero occurrences of "firearm", "handgun", "gun" or "weapon"
   anywhere in title 38). `firearms-co` ships as an `[Optional.]` clause restricting **discharge** and
   requiring **secure storage** only, both restating duties § 18-12-107.5(1) and § 18-12-114(1)
   already impose on the tenant. A possession ban adds untested constitutional and contractual risk.
6. **Equity-purchaser reconveyance (buy-and-rent-back) — KEPT, education only.**
   `edu-foreclosure-leaseback-co`, keyed to `foreclosure`. Colorado regulates the lease inside the
   transaction (Colorado Foreclosure Protection Act, part 11 of article 1 of title 6, requiring the
   contract to state 'The terms of any rental agreement or lease', § 6-1-1112(1)(g)). The row offers
   no clause and tells the landlord the library's templates are not designed for the transaction.

### Decided by the main pass — slice 01

22. **Optional actual-cost alarm-damage clause — DECLINED.** Colorado has no tampering fee, and
    `alarm-duties-co` already imposes the care and reporting duties and makes disabling an alarm a
    lease breach, while `edu-tenant-caused-damage-co` and `security-deposit-use` already give the
    actual-cost recovery route. An alarm-specific charging sentence adds no recovery the landlord
    lacks and risks being read as a fee for a good or service: § 6-1-737(4)(f) is worded broadly, and
    the landlord's replacement duty under § 38-45-104(3)(a)(III) is triggered by the tenant's own
    report, so the same replacement can be both the tenant's fault and the landlord's statutory
    obligation. Only a court could settle that, there is no case-law corpus here, and being wrong
    costs a void clause plus a deceptive-practice finding with 18 percent interest under
    § 6-1-737(5). `edu-alarm-tampering-fee-co` ships on that basis. **If Taylor wants it anyway**, the
    clause must state the actual documented third-party cost, carry no markup and no late charge, and
    exclude any replacement the landlord is obliged to make.

23. **Arbitration clause for owner-occupied duplex, triplex and ADU properties — DECLINED.**
    § 38-12-801(8) genuinely exempts those properties from the (3)(a)(III) waiver prohibitions, so a
    clause there would not be caught by the prohibited-clause list. It is still declined: the
    exemption is narrow and fact-dependent, so a builder who misapplies it produces a void clause;
    the sexual-harassment carve-out at § 13-22-203.5(2) and the mobile-home ban at § 38-12-213(5)(c)
    still bite; whether arbitration is itself a jury waiver is unresolved; and the Federal
    Arbitration Act overlay cannot be read from this corpus. An arbitration clause's value to the
    landlord depends on enforceability this library cannot promise. `edu-binding-arbitration-co`
    already tells a landlord in that position that the prohibitions do not reach them and that they
    may add their own clause after taking advice.

### Decided by the main pass (continued) — slice 07

8. **Landlord's-lien notice clause — DECLINED.** `landlord-lien` is **Present**: § 38-20-102(3) is a
   live statutory residential landlord lien on the tenant's personal property on the premises,
   enforced through §§ 38-20-107 to 38-20-109 and 38-20-116 — judicial foreclosure only, the lien
   terminating if no action is brought within sixty days, with a long list of excluded items, a $90
   keeping cap, and $100-minimum-plus-fees liability for a non-complying sale. No earlier slice had
   read article 20, part 1. But the lien exists **without** the lease, the statute excludes attorney
   fees and most of what is actually in a rented home, and an overreaching clause risks forfeiting the
   lien under § 38-20-102(3)(c) and colliding with the self-help bar at § 38-12-510.
   `edu-landlord-lien-co` is the whole answer. Any future clause would be `[Optional.]`, a bare notice
   that the statutory lien exists and will be enforced only by court process, with no list of covered
   property and no fee recovery.
9. **Liquidated damages clause — DECLINED, no clause text.** Four statutory bars remove the usual
   uses, and whether a stipulated sum is an enforceable estimate or a void penalty is a common-law
   question rule 1 keeps out of this pass. Under BRIEF §7 a clause that cannot be drafted to work
   under every reading is not offered. `edu-liquidated-damages-co` is the answer, and the library
   keeps its actual-cost approach: charge documented actual losses, listed in the lease so they are
   recoverable from the deposit under § 38-12-103(1)(b)(III).

Also from slice 07, for the record: **`limitation-of-actions` has its own Colorado limb** —
§ 13-80-103.5(1)(b) gives **six years for "All actions for arrears of rent"**.

### Resolved by Taylor's earlier decision — slice 08

10. **Five-day exempt-residential-agreement notice as an optional clause — OFFER IT, GATED.**
    Slice 08 asked whether to offer it at all; Taylor had already answered the gating half on
    2026-10-24 ("Gate it, and reuse the pattern"), which presupposes offering it. So:
    `exempt-residential-agreement-notice-co` ships as the slice's only `LEASE_CLAUSE`, self-limiting
    in its own words, **never a default**, and the builder gates it on both facts — the premises is a
    single-family home, and the landlord owns five or fewer single-family rental homes including this
    one (§ 13-40-104(5)(d), renumbered from (5)(b) by HB 25-1168, § 2, text unchanged; give both
    numbers). It is the only lease-side lever in the topic: the nonpayment demand drops from ten days
    to five **only if the lease says so**. The cautious education row stands beside it.

    Reminder from decision 1: the same gate pattern applies to Colorado's other small-landlord
    carve-outs, which use **different** thresholds — § 38-12-801(2.5)(b), § 38-12-801(8),
    § 38-12-1302(1)(b) and § 38-12-506 — and must not be conflated.

### Decided by the main pass (continued) — slice 09

11. **Exempt-property owner-occupancy termination clause — DECLINED in this pass; the shape a
    later pass should use is recorded.** The mid-term owner move-in right is lawful only where part 13 does not
    reach the tenancy (§ 38-12-1302(1), class decision C5 — and recall (1)(e): part 13 does not apply
    in a tenancy's first twelve months, then begins to apply mid-tenancy). A single default clause
    would be wrong for most tenancies, so the right shape is a covered/exempt `choice_group` with
    exactly one `is_default TRUE`, on the house precedent of `co-part13-coverage`. Not written in this
    canvass; the topic is answered by the cautious education row, which ships.
12. **The exempt-residential-agreement notice was missing from the library entirely.** Slice 09
    shipped `exempt-residential-agreement-notice-co` keyed to `portfolio-thresholds`. Slice 08
    independently shipped a clause of the same name keyed to its own topic — **the two must be merged
    at sync, not shipped twice** (rule 27's duplicate-row merge). Sync also decides whether a twin
    keyed to `termination-notice` is wanted. The underlying point: § 13-40-104(5)(d) (renumbered from
    (5)(b) by HB 25-1168, § 2) cuts the nonpayment demand from ten days to five **only if the lease
    says so**, and no Colorado row mentioned it before this pass.

### Decided by the main pass — slices 06 and 10 to 15

All nine follow the principle Taylor set on 2026-10-24 for the crime-free clause: **notice value alone
is not a basis for a clause**, and a clause that cannot be drafted to work under every reading is not
offered (BRIEF §7). Each slice's full reasoning is in its own `QUESTION` block, and each ships a
cautious row either way, so any of these can be reversed additively without unwinding anything.

13. **Association fine pass-through (slice 06) — DECLINED.** § 6-1-737(4)(f), (g) and (h) are each
    framed as a charge for a *good, service or property*, and an association fine is none of those,
    while (4)(j) is circular — so the lawfulness turns on a reading no one can settle. `edu-hoa-co`
    states the uncertainty, tells the landlord to make association-rule compliance a lease covenant
    and to pursue a real loss as **damages** rather than as a charge, and points at the notice and
    cure route.
14. **Scheduled rent-escalation clause (slice 10) — DECLINED in this pass.** Lawful within
    § 38-12-702(1)'s once-in-twelve-months limit, but the existing `rent-increase-notice-co` promises
    the tenant that rent "will not increase during the fixed Term", and this pass may not edit an
    existing row. The two cannot coexist, so `edu-rent-escalation-co` ships and the clause, if wanted,
    belongs in a `choice_group` beside a revised `rent-increase-notice-co` **at sync**.
15. **Fee-list clause: keep the flat no-increase promise (slice 11).** The flat promise is simple,
    certainly lawful, removes the § 6-1-737(4)(b) two-percent compliance step entirely, and costs a
    one-year landlord at most two percent of a listed fee. A flexible variant would be an `[Optional.]`
    member of a `choice_group` with this as the default.
16. **Showings clause: TAG the shared row (slice 12).** `showing-notice-la` is tagged for Colorado
    rather than duplicated, with the § 38-12-801(3)(a)(III)(D) quiet-enjoyment doubt and the cautious
    course recorded in the tag segment. A Colorado-only clause would carry the same risk with none of
    the maintenance benefit.
17. **Smart-access clause set (slice 12) — DECLINED.** Colorado has not legislated, so
    `edu-no-smart-access-rule-co` tells the landlord what does bind them and what to put in the lease.
    Revisit when Colorado legislates or the library carries a national smart-access addendum.
18. **Insurance-escalation clause (slice 13) — DECLINED.** `edu-tax-escalation-co` tells the landlord
    to build expected costs into the rent and raise it at the next lawful opportunity within
    § 38-12-702's limit — a route lawful under every reading. Note § 6-1-737(4)(c) kills tax
    escalation outright, which is why `tax-insurance-escalation-la` cannot be tagged for Colorado.
19. **Slice 13's two new optional clauses — SHIP BOTH, optional and off by default.** The
    subsidy-access clause earns its place because **§ 24-34-502(1)(r)** now makes a landlord's failure
    to cooperate with a rental-assistance application an unfair housing practice with a **$5,000
    damages floor**, and a landlord who must admit an inspector needs a lease term that secures the
    tenant's cooperation.
20. **Contractual interest on unpaid amounts (slice 14) — DECLINED.** §§ 5-12-101 and 5-12-102 already
    give **eight percent compounded annually** with no lease term at all, even on an unliquidated
    amount, running from when the money became due — so a clause buys only the increment above eight
    percent, while § 6-1-737(4)(e) (no charge related to the overdue payment of a non-rent amount) read
    with § 38-12-801(3)(a)(VI)(B) and (3)(b) makes the clause itself void-risk, with per-violation
    penalties under § 38-12-105.
21. **Veterans discount or preference clause (slice 15) — DECLINED, education only.**
    § 24-34-502(1)(a)(II) permits the **inquiry** for eligibility, but (1)(a)(I) bars discrimination
    in terms, conditions or privileges because of veteran status, and no case could be read.
    `edu-no-veterans-incentive-co` tells the landlord the inquiry is permitted, that the
    favourable-treatment question is unsettled, and to route any preference through a recognised
    veteran housing programme after taking advice.

**Twenty-four questions were raised across the fifteen slices. Three were answered by Taylor
directly** (the builder gate, the deposit-instalment clause, and the crime-free clause, which he
settled on principle), **one is flagged for sync** (the mechanic's-lien notice duty, decision 7), and
**twenty were decided by the main pass** on the reasoning recorded here, in decisions 3 to 6, 8 to
23, and in Item 1(a) for the crime-free clause. Decision 24 is not one of the twenty-four questions:
it is the one finding from the independent check that needs a primary source this pass could not
reach, and it is recorded beside the mechanic's-lien duty because both are for Claude Code at sync.

### Flagged for Claude Code at sync (Taylor, 2026-10-24: "flag it for Claude CLI and we will figure it out on that side")

7. **Mechanic's-lien notice duty — default, optional, or a shared edit?** Not decided in this pass.
   **Nothing changes here: `no-liens-co` ships as slice 02 wrote it, an `[Optional.]` clause carrying
   the tenant's advance-notice duty, and no Colorado row supersedes `no-alterations`.**

   The mechanism, for whoever picks this up. **§ 38-22-101(1)** deems whoever has charge of
   construction work to be the owner's agent, so a tenant who hires a contractor and does not pay can
   expose the landlord's property to a mechanic's lien. A lease term barring liens does not stop it:
   **§ 38-22-119(1)** means a lease waiver binds only the parties, not the contractor. The landlord's
   only escape is **§ 38-22-105(2)**'s written notice of non-liability, given **within five days of
   learning of the work** — and the landlord cannot give it without knowing the work is happening.

   Why it is not the crime-free case. There, § 13-40-107.5(2) already implied the duty into every
   lease, so a clause added nothing enforceable and notice value alone is not a basis for a clause
   (Taylor, 2026-10-24). Here **no Colorado statute imposes any notice duty on the tenant**, so a
   lease sentence requiring advance written notice creates a duty that does not otherwise exist and
   gives the landlord a breach claim. It passes rule 55's restatement check as a tenant duty.

   The three options, with the honest limit on each. (a) A Colorado row superseding `no-alterations`
   (tagged on 55 states) with one sentence requiring written notice before work is ordered or begun —
   every Colorado lease gets it, at the cost of one more state-specific row. (b) Keep it optional — no
   divergence, but most landlords will not have it. (c) **Propose the sentence as a shared edit under
   rule 62**, which diverges nothing if the lien-agency rule exists in other states; whether it does
   is a cross-state question this pass did not investigate and is the obvious thing to settle first.

   The limit on all three: `no-alterations` already requires the landlord's prior written consent, and
   asking for consent *is* notice where the tenant complies. A tenant who ignores the consent
   requirement will ignore a notice sentence too, which is the real bound on what the extra sentence
   buys — though the work most likely to generate a lien is precisely the work done without consent.

24. **HB 25-1239 and § 24-34-802(2)(a) — the one primary source this pass could not reach.**
   **Nothing is left open on a row: both affected rows ship VERIFIED and assert neither direction.**

   What is unsettled. HB 25-1239, § 5 struck one or more of the four sections cross-referenced in
   **§ 24-34-802(2)(a)**, and **which ones cannot be read off the text available here**: in the
   extracted session-law text the enrolled act's strike-through is lost and the section numbers are
   printed as digits, so a deletion and a retention look identical. The rendered PDF of the enrolled
   act is the primary source that would settle it, and it was not reachable in this pass.

   Why no row waits on it. Two rows had stated opposite directions —
   `edu-disability-accommodation-co` (survival) and `edu-service-animal-denial-penalty-co`
   (repeal) — the only place in this pass where two Colorado rows contradicted each other. Round 1 of
   the independent check caught it (§5.1). Both now say the direction cannot be read from the
   available text and rest on provisions that do not depend on it: a housing-discrimination claim on
   **§§ 24-34-505.5 and 24-34-505.6**, whose relief is actual and punitive damages, injunctive and
   affirmative relief and discretionary fees and costs, with no cap; a service-animal denial on
   **§§ 24-34-803 and 24-34-804** with **§ 24-34-602**'s five-thousand-dollar fine. Round 1's own
   erratum had rested the disability row on "the five-thousand-dollar minimum HB 25-1240, § 5 added at
   § 24-34-505.6(6)(a)"; **round 2 found that wrong** — that floor applies only where the court finds
   housing-**subsidy** discrimination under § 24-34-502(1)(h), (1)(l) to (1)(p) or (1)(r), never on a
   disability claim — and it is out of the row and out of this paragraph (§5.5). Against the survival reading stands HB 25-1239, § 3's new
   **§ 24-34-602(1)** list, which names §§ 24-34-601, 24-34-802(1)(b) and 24-34-803 but **not**
   § 24-34-502 — a point worth knowing but not enough to assert on.

   What to do at sync: open the enrolled HB 25-1239 PDF, read § 5 against § 24-34-802(2)(a), and if a
   direction is established, add it to both rows. Until then the rows are right as written, because
   they claim nothing the available text cannot support.

---

## New `{{variables}}` for the builder (rule 60)

Three, declared by the slices after checking that no existing library variable covered the value.
Claude Code adds them to the builder at sync.

| variable | what the landlord supplies | declared by |
|---|---|---|
| `{{inspection_notice_hours}}` | the entry-notice period the lease sets, where Colorado lets the lease set its own (§ 38-12-1004(1)(a) — note that provision sits in part 10 and governs bed-bug entry, not entry generally) | slice 13 |
| `{{display_item_limit}}` | the number of items a tenant may display, where the lease sets a limit | slice 13 |
| `{{parking_fee_amount}}` | the parking fee the lease charges, screened against § 6-1-737(4) | slice 14 |

Every other fill-in in the 305 new rows reuses a name the builder already fills, or is a
`[bracketed prompt]` the landlord completes by hand.

---

## §5 The independent check

The pass prompt scales SOP rule 80 down: **at most two rounds, one agent at a time,
the second re-checking only the rows the first round's errata edited, stopping
early on a clean round.** Both rounds were given the delivered rows and the corpus
and told to find what was wrong with them. The main pass's own mechanical checks
(`out/checks.md`, checks 0 to 0h, with `battery-sessweep-findings.md`,
`gripcap-findings.md` and `boundary-findings.md`) are not counted here; they are
why the rounds had less to find.

### 5.1 Round 1 — all 317 rows

**Findings: 4 ERROR, 19 FIX, 1 QUESTION over 317 rows** (`out/check-round1.md`).

The four ERRORs were misstatements of law:

| row | what was wrong |
|---|---|
| `governmental-fines-co` | missed HB 25-1168, § 2's repeal in § 13-40-104 |
| `edu-governmental-fines-co` | same repeal |
| `edu-disability-accommodation-co` | asserted a direction on § 24-34-802(2)(a) that the available text cannot settle |
| `edu-service-animal-denial-penalty-co` | asserted the opposite direction on the same provision |

The nineteen FIXes were method defects rather than misstatements: three
three-bucket calls, one quotation (C18), two scope statements, twelve positive
controls that were not anchored or not a real section, and one block-form defect.

**All 22 errata applied.** `bin/apply_errata.py` requires each `old:` text to
appear **exactly once across all fifteen slice files** before it writes; dry run
22/22, then applied. Nineteen landed in row text, three in battery blocks
(`CO-S07-B20-lockout`, `CO-S11-B19-deposit-interest`,
`CO-S13-B12-tenant-confidential-information`). The delta CSV was rebuilt from the
slices afterwards.

**The QUESTION is resolved and no row carries NEEDS_REVIEW.** It asked whether the
two § 24-34-802(2)(a) rows should stay open, the enrolled HB 25-1239 PDF being the
one unreachable primary source in this pass and C9 reserving `NEEDS_REVIEW` for
exactly that. Its own recommendation — followed — was to apply both errata and keep
both rows VERIFIED, because neither now rests on that provision: housing's remedies
are §§ 24-34-505.5 and 24-34-505.6 and the service-animal remedy is § 24-34-602 as
rewritten. The gap is reported once, in §4 under "Flagged for Claude Code at sync",
rather than as an open status on rows that no longer depend on it.

### 5.2 What the main pass found after round 1

Round 1's block-form FIX named four battery blocks in slice 06 whose `pattern:`
line held two regexes, citing C19. Checking it showed **the defect was wider than
the finding and worse than its description.**

`battery_sessweep.py` does not report such a line as unparsed. It strips the
outer quotes and compiles the **whole line**, so `"A" and the reverse "B"`
compiles to a valid regex that matches nothing and the block is reported
`clean` — a false negative, not a skipped row. Eleven blocks across slices 06 and
09 were affected, not four: every `(A) … (B) …` form had it too, and so did one
block whose single regex was followed by a parenthetical note.

All eleven were split one regex per `pattern:` line (`bin/split_patterns.py`),
each limb carrying the parent's `titles:`, `hits:` and `session-laws:` lines and a
note naming the parent. The three limbs the blocks had described in prose — "the
same pattern with the two groups reversed" — were generated by swapping the two
capture groups mechanically rather than retyped. The sweep then ran all 23 slice-06
blocks and all of slice 09: **0 unparsed**, and four limbs matched session-law acts
for the first time. Six acts were read:

| battery limb | act | reading |
|---|---|---|
| B06-04 limb R | HB 26-1256 (2026a ch. 338); SB 26-190 (2026a ch. 337) | both match because "leasing" sits inside "RELEASING", paired with "declaration" in a legislative-declaration heading — the same word-boundary artifact this block had already corrected for "parenting". Neither touches associations or leasing. |
| B06-10 limb A | HB 25-1084 (2025a ch. 24) | gender-neutral language throughout title 35; the match is § 35-53-132, "Failure to give notice - penalty", on moving sheep out of a brand-inspection district. |
| B06-11 limb R | HB 25-1238 (2025a ch. 93) | gun shows; matches a firearm background check beside "SALE, RENTAL, OR EXCHANGE AT RETAIL". Imposes nothing on a landlord. |
| B06-12 limb R | HB 25-1108 (2025a ch. 437) | "Letty's Act", read whole — 3,472 characters, three sections: a short title, the addition of § 38-12-801(3.5), and an effective-date section. It makes a death-of-tenant early-termination clause "VOID AND UNENFORCEABLE" but creates **no penalty, no damages remedy and no knowing-violation provision**; "damages" and "penalty" appear only inside the list of charges the clause may not require, and in the landlord's right under (3.5)(c) to retain a deposit for damage caused by the death. |

**No absence claim was overtaken.** Each reading is recorded as a
`session-law-read` line in its block.

### 5.3 A blind spot in the pass's own quote checker

Re-running rule 59 exposed a scope defect in `bin/quotecheck.py`: it scanned only
`notes:`, `segment:`, `statute:` and `act language:` lines. **Battery blocks quote
statute text on their `hits:`, `positive:`, `conclusion:` and `heading-screen:`
lines, and those ship into §3's table, so they had never been checked at all.**
The field set is now configurable and was widened to cover them, and
`bin/savequoted.py` was widened to match.

Three things came out of the widened run.

1. **`bodyText` carries no quoted statute text anywhere** — 0 single-quoted
   passages on every `bodyText:` line in all fifteen slices. The delivered CSV's
   entire quotation exposure is therefore in `notes`, which was already fully
   checked.
2. **A normalizer blind spot of the same class as one already fixed.** The
   corpus's all-caps act text prints a space before a closing double quote
   (`"FOREIGN COUNTRY OF CONCERN "`). The normalizer stripped a space before an
   apostrophe but not before a double quote, so
   `co5-foreign-adversary-terms-wholecode`'s quotation of HB 25-1329 (2025a
   ch. 407) was reported as resolving nowhere when it is verbatim. Both tools were
   patched; the quote resolves.
3. **Widened totals: 2,881 quoted passages across the fifteen slices, plus 72 in the
   log's own prose — 0 unresolved anywhere and 0 unchecked.** Of those, 41 were
   quoted correctly but had never been saved, which is rule 12's saving step
   rather than a quotation defect; `bin/savequoted_batch.py` located and appended
   the 34 containing units (several quotes share a unit) and the check then came
   back clean. That tool was written because `savequoted.py` re-normalizes every
   unit body for every quote — O(quotes x units x length), about a quarter of an
   hour per slice at the widened field set; the batch version normalizes each of
   the 35,274 units once and does all fifteen slices in a few minutes.

### 5.4 Four quotations in the log's own prose

The log's prose had never been quote-checked at all, because the checker reads row
blocks. Checking it found 73 quotations, 67 resolving against the saved sources and
six not — four distinct passages, two of them appearing in both
`out/colorado-items.md` and §4. Two were correct but unsaved; **two were defects,
and both are now fixed:**

- **§ 38-12-801(3)(a)(I)** was quoted with a trailing **period** inside the
  quotation marks where the statute ends the subsection with a semicolon. The
  period is now outside. Reading the section also confirmed the subsection runs on
  through "that results from a violation of the rental agreement", so the log's
  longer rendering is the right one.
- **§ 24-4.1-102(8.5)(b)** was quoted as "rekeying of a motor vehicle or other
  lock **that is** necessary to ensure **the** victim's safety". The statute reads
  "expenses related to the rekeying of a motor vehicle or other **locks**
  necessary to ensure **a** victim's safety". Two words altered and two inserted —
  a C18-class reconstruction, in the pass's own log, of the kind the slices were
  warned about. Corrected to verbatim in both `out/colorado-items.md` and §4.

One further item is a tooling asymmetry rather than a defect in any row: the
checker's strict quote matcher excludes only a letter before an opening
apostrophe, while its unchecked-opener matcher also excludes a backtick, so
`` `crs.py grep`'s `` opened a quotation that ran to the next apostrophe. The
prose was reworded; the asymmetry is proposal 19 under "Proposed SOP changes"
rather than patched mid-check.

### 5.5 Round 2 — only the rows edited after round 1

**Findings: 2 ERROR, 13 FIX, 0 QUESTION over the 19 rows** (`out/check-round2.md`). **The round is
not clean**, so the check ends here at the two rounds the prompt allows.

**Round 2's first finding was against the applier itself, and it was right.** `apply_errata.py` took
the *first* `old:`/`new:` pair in each block with `re.search`, so a block carrying two errata lost
its second in silence — and the run still printed "22 / 22, 0 failed". There were **27 pairs, not
22**. The applier now collects every pair, and reports "already applied" separately from a failure so
it is safe to re-run; all 27 are in. The twenty-seventh had to go in by hand: its `old` text occurs
twice in slice 11, and the second occurrence is a *correct* citation in `edu-no-deposit-holding-rule-co`
(where § 38-12-207(3) genuinely is a hit of CO-S11-B20), so it was applied with the battery name
prefixed and the record annotated **DO NOT RE-APPLY**. Round 2 re-verified its findings against the
post-errata files and withdrew three as cured.

**The two ERRORs were both on the § 24-34-802(2)(a) pair, and one of them was created by round 1.**

- `edu-disability-accommodation-co` — round 1's erratum was written against the notes, so the
  **bodyText still said** the statutory-fine route "was closed in 2025", which is the proposition the
  LEDGER CORRECTION forbids in terms, in the part of the row a landlord actually reads; the notes
  asserted the strike as fact in bold and then disclaimed it in the same sentence. Worse, round 1's
  own replacement **rested the row on a damages floor that does not apply to it**: the
  five-thousand-dollar minimum HB 25-1240, § 5 added at § 24-34-505.6(6)(a) is available only where
  the court finds housing-**subsidy** discrimination under § 24-34-502(1)(h), (1)(l) to (1)(p) or
  (1)(r) — never on a disability claim. Three errata applied; the row now asserts neither direction in
  body or notes, and says plainly that the floor is not available. **The same wrong claim had
  propagated into §4 of this log and is out of it too.**
- `edu-service-animal-denial-penalty-co` — round 1 removed slice 11's conclusion and left its whole
  argument standing ("On the act's own text that is backwards… makes sense only if…"), labelled a
  correction "recorded for the main pass". The row therefore still told a later pass the shared ledger
  was backwards, and contradicted itself two sentences later. Replaced with a statement that sets out
  what the act prints, notes that its structure cuts both ways — "OR" sits between the two housing
  sections, while the new § 24-34-602(1)(a) list names §§ 24-34-601, 24-34-802(1)(b) and 24-34-803 and
  not § 24-34-502 — and adopts neither reading.

**Eleven of the thirteen FIXes were one defect repeated: a `positive:` line certifying a proof of
absence it has not got.** They survived round 1 because round 1 wrote its errata against row notes
while leaving the BATTERY blocks, or named no section in the replacement. Round 2 supplied a real,
section-open-read positive for each. One more is worth recording on its own: **round 2 found that the
rekeying correction in §5.4 had moved the misquotation rather than ended it.** Both wordings are real
and are in the two different sections that one sentence cited together — § 24-4.1-102(8.5)(b) reads
"expenses related to the rekeying of a motor vehicle or other locks necessary to ensure a victim's
safety", and § 24-4.1-109(1.5)(a)(III) reads "The rekeying of a motor vehicle or other lock that is
necessary to ensure the victim's safety". The sentence now quotes each from the section it belongs to,
and the malformed citation "§ 24-4.1-109(III)", a paragraph that does not exist, is now
§ 24-4.1-109(1.5)(a)(III).

Two things round 2 confirmed rather than faulted: every pattern it re-ran returned the recorded
code-wide count with a clean `zzqqxx` control in all 45 titles, so **no absence conclusion in the 19
rows is disturbed**; and the C19 split, the four `session-law-read` notes and the
§ 38-12-801(3)(a)(I) period correction are all right.

### 5.5a The positive-control sweep, and a lesson about the sweeper

Round 2 called the mis-certified `positive:` line the worst defect class on this pass, and neither
round had swept it mechanically — round 1 read rows, round 2 saw only 19 of them. So the main pass
wrote `bin/positivecheck.py`, which runs **every** block's own pattern over the section its positive
line names, across all 371 blocks.

**The first run accused 38 blocks. Seven were real.** The other thirty-one were the sweeper's own
blind spots, and each refinement is worth recording because the same trap caught this pass twice
before: rule 19 permits widening a pattern once before concluding, so a positive may legitimately come
from a loosened or everyday-word run, from a saved act rather than the 2024 title text, from the
constitution in title 00 (which carries no C.R.S. section numbers), from one limb of a split battery,
or from a line that already records the match as an artifact or an honest failure. A line like
"§ 38-12-212.3 — not matched by this pattern; real positive for this run is § 6-1-1210" was being read
as a claim that § 38-12-212.3 matched, because the tool took the first section number on the line.

**The seven real defects were all in slice 09**, which wrote bare `positive: <section> PASSED` lines,
and in each the named section does not contain the searched term at all: `CO-S09-B04-fact-sheet` and
`CO-S09-B06-pet-eviction` named § 38-12-505 for "fact sheet"; `CO-S09-B09-political-access` and its
reverse limb named § 38-12-509, "Prohibition on retaliation", for a canvasser-access pattern;
`CO-S09-B15-possession-bond` named § 38-12-503, the warranty of habitability, for "possession bond";
`CO-S09-B17-private-well` named § 25-1.5-201, a definitions section; and
`CO-S09-B19-promises-to-repair` named § 38-12-502, the part-5 definitions. All seven are corrected.
Where a real positive exists it is named and read whole — `CO-S09-B17` now rests on **§ 30-20-109**
("any public or private water well"), with § 24-1-124 as a second. Where the searched phrase occurs
**nowhere in the 45 titles** — "fact sheet" and "possession bond", both verified anchored and
code-wide — the line now says so and points at the companion battery that does the engine check
(§ 38-12-803 for the brochure run, § 38-12-213 for the confessed-judgment run). **One of the seven
had reached a delivered row**: `edu-no-private-well-testing-rule-co`'s notes named § 25-1.5-201 with
no disclosure, and now name § 30-20-109.

Final state of the sweep: **280 positives match their block's exact pattern, 26 disclose a widened,
per-limb, saved-act or constitutional source, 4 correctly record that there is no real positive, 51
claim none, and 10 name a section that contains the searched term but outside the pattern's proximity
window** — which satisfies what rule 19 actually asks (the term present and anchored in a real
section) even though it fails the sweeper's stricter test, so those are left as written and listed
here rather than changed.

### 5.6 Artefacts edited after the last round

Round 2 read the slice files as they stood after the 19:54 errata wave. Everything below was edited
**after** it finished reading, so nothing here has been through an independent round. It is listed in
full because that is the honest limit of this pass's verification.

**7 rows** — `edu-designated-repairer-co`, `edu-disability-accommodation-co` (slice 03),
`edu-governmental-fines-co` (05), `edu-no-lockout-for-rent-co` (07),
`edu-no-private-well-testing-rule-co` (09), `edu-service-animal-denial-penalty-co` (11),
`edu-no-tpa-notice-rule-co` (14).

**21 battery blocks** — `CO-02-004`; `co3-deposit-installment-proximity-wholecode`,
`co3-designated-repairer-wholecode`; `co5-foreign-ownership-proximity-wholecode`;
`CO-S07-B20-lockout`; `CO-S08-B14-notice-service-charge`; `CO-S09-B04-fact-sheet`,
`CO-S09-B06-pet-eviction`, `CO-S09-B09-political-access`, `CO-S09-B09R-political-access-reverse`,
`CO-S09-B15-possession-bond`, `CO-S09-B17-private-well`, `CO-S09-B19-promises-to-repair`;
`CO-S11-B05-economically-feasible`, `CO-S11-B11-tenant-guide`;
`CO-S13-B12-tenant-confidential-information`; `CO-S14-B05-tenant-protection-act-notice`,
`CO-S14-B05R-tenant-protection-act-notice-reverse`, `CO-S14-B07-tenant-protection-repeal-clock`,
`CO-S14-B10R-tenant-rights-handbook-reverse`, `CO-S14-B12-unbundled-parking`.

**Two files of this log** — `out/colorado-items.md` and §4, for the rekeying quotation and citation,
and §4 again for the damages floor round 2 struck.

Of those, 25 are round 2's own errata applied as written, and three are the main pass's: the seam
where two errata met in `edu-disability-accommodation-co` and left a doubled clause, and the eight
slice-09 positive-control corrections of §5.5a. Every edit was re-verified mechanically afterwards —
the delta against the schema, rule 59 over 2,881 quoted passages with none unsaved and none
unresolved, the cross-slice duplicate check, and the positive sweep.

---

## §6 Findings on existing rows

**Nothing below was fixed.** The scope fence allows this pass to add rows and to tag an existing
shared row; where research showed an existing row wrong, the statute and the row's own words are
recorded here for Claude Code at sync. **25 findings**, which fall into two very different kinds.

### 6.1 Defects in existing rows — eleven, in descending order of consequence

1. **`edu-dv-lease-termination-co` is ACTIVE and wrong in five ways, and a "correction" made it
   worse.** HB 25-1168, § 15 rewrote § 38-12-402 whole (approved 2025-05-22, **effective on
   passage**). (i) **The police-report window is 120 days, not 60** — § 38-12-402(2)(a.5)(I)(C) says
   'A POLICE REPORT FROM THE PRIOR ONE HUNDRED AND TWENTY DAYS', and the row's own notes record that
   it was changed **from 120 to 60 on 2026-08-27**, so the figure was made wrong by an edit made
   against the superseded 2024 text. (ii) It omits the **self-attestation affidavit** route entirely
   ((2)(a.5)(I)(A)). (iii) It omits that 'ADDITIONAL OR OTHER DOCUMENTATION IS NOT REQUIRED TO QUALIFY
   THE TENANT AS A VICTIM-SURVIVOR' and the tenant's **seven days** after a written request
   ((2)(a.5)(II)). (iv) It omits that a **qualified third party may give the notice** on the tenant's
   behalf ((2)(a)). (v) It conflates two thirty-day clocks: (2)(c)'s written statement of damages runs
   from the date the tenant **vacates**, while (2)(b)'s documentation runs from **termination of the
   agreement**. It also predates (2)(b)'s cap at 'AN AMOUNT NOT TO EXCEED one month's rent', the bar
   on collecting anything where another tenant remains on the agreement, the presumption that the
   victim-survivor receives the full deposit, and (2)(d)'s ninety-day limits on assigning the debt.
   **It now contradicts `edu-dv-repayment-plan-co`, which states the correct menu shape.**
2. **`dv-stalking-termination-co`** (inactive) carries the same defects and **must not be reactivated
   as drafted**.
3. **`edu-dv-confidentiality-co` understates the duty on three points and omits two.** Consent must
   now be **express and written** (§ 38-12-402(4)(a)), the duty runs to 'any person, INCLUDING A
   CO-TENANT', and the exception is narrowed. It omits the court-disclosure duty and the
   applicant-screening bar.
4. **`edu-source-of-income-exemption-trap-co` states the law backwards.** It says HB 25-1240 removed
   the small-landlord exemption from § 24-34-502. **It did not** — § 24-34-502(1.5)(a) (three or fewer
   units switches off (1)(l) to (1)(p)) and § 24-34-502(1.7) (five or fewer single-family homes) both
   stand. **The row tells qualifying small landlords to do something Colorado does not require.**
   Note the real trap it misses: **§ 24-34-502(1)(r) sits outside the (1.5)(a) exemption**, which
   covers only (1)(l) to (1)(p), and carries a **$5,000 damages floor** under § 24-34-505.6(6)(a).
5. **`utility-submetering-disclosure-co` cites a subsection that does not exist** — found
   independently by two slices. Its basis reads `REQUIRED_DISCLOSURE: C.R.S. § 6-1-737(4.5)(d)`, and
   its notes claim "four RUBS safe-harbor conditions at (4.5)(a)-(d)". **HB 26-1013 adds only
   (4.5)(a) and (4.5)(b)**; the conditions are **(4.5)(a)(I) to (IV)**. Two further points: (4.5)(a)
   is **permissive** ('THIS SECTION DOES NOT PROHIBIT … IF'), so the basis should be
   `SERVES_LANDLORD`, not `REQUIRED_DISCLOSURE`; and **(4.5)(b) is a mandate no Colorado row carries**
   — from **2027-07-01**, premises built on permits applied for on or after that date must have gas,
   electric and water 'METERED EITHER DIRECTLY BY THE UTILITY PROVIDER OR BY A SUBMETER'.
6. **`edu-security-deposit-cap-co` becomes wrong on 2027-01-01** — found by two slices. **SB 26-054**
   renumbers the two-month cap as § 38-12-102.5(1) and adds (2), switching the cap off for a
   **post-closing occupancy agreement**. The row states the cap as absolute and tells the landlord any
   figure above two months is unenforceable. It also now needs a subsection in its citation.
7. **`edu-cares-act-notice`** (shared, 56 jurisdictions) — **in Colorado this is no longer only a
   federal rule.** § 38-12-1502(1) (HB 25-1240, § 2) requires compliance with the 15 U.S.C. § 9058(c)
   notice 'AS ENACTED INTO LAW ON MARCH 27, 2020, NOTWITHSTANDING ANY CHANGES IN FEDERAL LAW'. The
   row's statement that courts disagree whether the federal rule still applies does not resolve the
   Colorado duty, which is frozen and independent. **The CO segment needs the § 38-12-1502 basis.**
   See the revised Colorado item 4.
8. **`edu-rental-application-fairness-co` is incomplete from 2027-01-01** — HB 26-1196 adds
   § 38-12-904(1.7), a screening-data notice required in **all** rental applications.
9. **`assistance-animal-accommodation-co`** — the clause's substance is now **confirmed by statute
   rather than inferred** (HB 26-1045 adds § 24-34-501(3.5) and § 24-34-502(1)(a)(III)), and its two
   companion rows should cite it.
10. **`edu-mobile-home-park-carveout-co`** — its own notes flag § 38-12-103(12) as "surfaced, not yet
    added anywhere". The text is confirmed from HB 25-1249 and is cited in two new rows, so the loop
    can be closed.
11. **`PRE-RESEARCHED.md` P4, this pass's own working file** — recorded for completeness. It told the
    slices that Colorado had no domestic-violence lock-change rule, on two whole-code batteries with
    clean controls. **The right exists at § 38-12-402(7)**, added by a 2025 act the title text does
    not contain. Corrected in-pass the same day, and the cause became class decision C17.

### 6.2 Tag-first mismatches — fourteen, and none is a defect in the row concerned

These are shared rows screened as tag candidates for Colorado and **declined**. Each is correct for
the states it carries; Colorado was not added, and **no change is proposed to any of them**. They are
recorded because the brief requires the screen to be reported, and because the pattern is uniform and
worth seeing in one place.

`detector-care-la` · `appliances-excluded-la` · `pest-cooperation-la` · `pest-cooperation-pr` ·
`carpet-cleaning-ar` · `no-liens-ar` · `eminent-domain-vi` · `firearm-rules-la` ·
`government-fee-reimbursement-ky` · `tenant-caused-fines-as` · `association-approval-la` ·
`nonrefundable-fees-wv` · `fees-and-charges-vi` · `tax-insurance-escalation-la`

**Twelve of the fourteen failed on the same sentence: the one that makes the tenant pay.** The cause
is almost always that a Colorado statute makes the thing the landlord's own obligation, so
§ 6-1-737(4)(f) or (h) or § 38-12-103(7)(b) voids the charge — a carbon-monoxide alarm the tenant
reported (§ 38-45-104(3)(a)(III)), bed-bug treatment (§ 38-12-1003(4)), carpet cleaning due to normal
wear and tear, an association's own approval obligation, a government fee assessed on the landlord, a
tax (§ 6-1-737(4)(c)). The other two failed on a conduct sentence that collides with
§ 38-12-402(1)'s bar on penalising a tenant for calling for emergency assistance — **a clause need not
mention domestic violence to fall foul of it.**

### 6.3 `edu-dv-lease-termination-co` in full, including two findings the main pass withdrew

**Correction to the main pass's own earlier findings.** On 2026-10-24 the main pass reported two
problems with this row, reading § 38-12-402 from the corpus's **2024** text. Slice 02 caught that
**HB 25-1168, § 15 amends § 38-12-402 whole** (approved 2025-05-22, effective on passage). Both
earlier findings are **withdrawn**; the act is saved at `src/CO-38-12-402-HB25-1168.txt` and the
corrected reading is in `canvass/PRE-RESEARCHED.md` P5.

- **WITHDRAWN:** "the row allows a medical professional's statement for stalking, where (a.5)(II)
  allows only an application assistant." The old (a.5)(I)/(II) split, and with it the stalking-only
  limb, is **struck**. The new menu applies to all four categories and (a.5)(I)(B) expressly lists
  "A MEDICAL PROFESSIONAL" among qualified third parties. **The row is correct on this point.**
- **WITHDRAWN:** "the row's 30-day written statement of damages has no basis in § 38-12-402." It has
  a precise basis: new **§ 38-12-402(2)(c)** requires a "WRITTEN STATEMENT OF ACTUAL DAMAGES …
  WITHIN THIRTY DAYS AFTER THE DATE THE TENANT VACATES THE PROPERTY", and failure "IS A FORFEITURE
  OF THE LANDLORD'S RIGHT TO CHARGE OR COLLECT ANY FUTURE RENT". **The row is substantially right.**

### The findings that stand

1. **The police-report window is wrong, and was made wrong by a "correction".**
   Statute: '(C) A POLICE REPORT FROM THE PRIOR ONE HUNDRED AND TWENTY DAYS THAT STATES THE TENANT
   REPORTED UNLAWFUL SEXUAL BEHAVIOR, STALKING, DOMESTIC VIOLENCE, OR DOMESTIC ABUSE'
   (C.R.S. § 38-12-402(2)(a.5)(I)(C), as amended by HB 25-1168, § 15).
   Row says: "a police report written within the preceding 60 days".
   Row's own notes say: "police-report window 60 days, corrected from 120 on 2026-08-27".
   Problem: the figure was changed from 120 to 60 against the superseded 2024 text, when the act had
   already set it at 120. The row understates the window by half, which costs a landlord nothing but
   wrongly tells them a tenant's documentation is out of time.
2. **The documentation menu is incomplete.** The row lists only a police report, a protection order
   and an advocate's statement. It omits the **self-attestation affidavit** (A) entirely, omits that
   "ADDITIONAL OR OTHER DOCUMENTATION IS NOT REQUIRED", and omits the tenant's **seven days** after a
   landlord's written request ((2)(a.5)(II)). It also omits that a qualified third party may give the
   notice on the tenant's behalf ((2)(a)).
3. **Two Colorado rows now contradict each other.** `edu-dv-repayment-plan-co` already states the
   correct menu shape for § 13-40-104(4) — "a police report, a valid protection or restraining order,
   a self-attestation affidavit, or a letter from a qualified third party such as a victim-service
   worker, attorney, social worker, medical professional, faith leader or mental health provider".
   `edu-dv-lease-termination-co` states a narrower menu for § 38-12-402. The repayment-plan row is the
   accurate one.
4. **The two thirty-day clocks are conflated.** The row says the statement is due "within 30 days of
   the termination date". § 38-12-402(2)(c)'s statement runs thirty days from the date the tenant
   **vacates**; § 38-12-402(2)(b)'s damages documentation runs thirty days from **termination of the
   agreement**.
5. **Substantial new protections no Colorado row carries.** § 38-12-402(1)'s "ANY ADVERSE ACTION" bar
   and its no-waiver sentence; (2)(b)'s cap at "AN AMOUNT NOT TO EXCEED one month's rent", the bar on
   collecting anything where another tenant remains on the agreement, the presumption that the
   victim-survivor receives the full security deposit, and the bar on deducting or charging the
   victim-survivor for damage caused by the abuse (compensation only from the responsible party);
   (2)(d)'s debt-assignment restrictions with ninety days' notice; (3)'s direct prohibition on
   terminating or evicting solely for victim-survivor status; and (4)(a)'s confidentiality extended to
   a co-tenant and requiring express written consent.
   The deposit limb also appears in HB 25-1249 § 3's § 38-12-103(1)(a) — a DV-terminating tenant who
   documents under (2)(a.5) "is not liable for damage to the dwelling unit caused by the responsible
   party or during the course of an incident".

No edit is made to any row (scope fence). `dv-lease-termination` is not among the 251 missing topics,
so no slice owns it; this is for Claude Code at sync.

---

---

## §7 Findings for other states

**None.**

No defect in another state's law or in another state's row was found. This needs one line of
explanation, because §6.2 lists fourteen shared rows that Colorado could not be tagged onto: **every
one of those is correct for the states it carries.** They failed Colorado's fee and conduct rules,
which is a fact about Colorado, not a defect anywhere else, and no change is proposed to any of them.

Two points that are not findings against another state but are worth passing to whoever next works
outside Colorado:

- **The charging sentence is where a shared clause most often fails a new state.** Twelve of the
  fourteen declined tags failed on it, and the cause each time was a statute making the thing the
  landlord's own obligation. A tag-first screen that reads the charging sentence first will reach the
  answer faster than one that reads the clause from the top.
- **§ 38-12-402(1)-style bars reach clauses that never mention domestic violence.** Two shared rows —
  a firearm-rules clause and a tenant-caused-fines clause — failed Colorado on a conduct sentence
  penalising police contact. Any state with an emergency-call protection will produce the same result,
  so it is worth screening conduct and fines clauses against it generally rather than only on
  domestic-violence topics.

---

## Proposed SOP changes

Seventeen, each earned by a defect this pass made and caught. They are ordered by how much damage the
defect did, not by rule number. The first is a drafting principle Taylor settled; the rest are method.

### Adopted in-pass as class decisions, proposed for the SOP

1. **Rule 55 — notice value alone is not a basis for a clause.** Where a statute **implies the term
   into every lease**, the answer is an education row, however much a landlord might like the tenant
   to read the words. *(Taylor, 2026-10-24, on the crime-free clause: § 13-40-107.5(2) implies the
   no-substantial-violation term into every Colorado lease, so a clause adds nothing enforceable, and
   "the tenant sees it" would justify restating most of a state's landlord-tenant law as clauses.)*
2. **Rule 19 — an absence battery must be run over the session laws as well as the compilation.** A
   battery run over the compiled code alone proves an absence **in that edition**, never in current
   law. *This pass recorded Colorado as having no domestic-violence lock-change rule on two whole-code
   batteries with clean controls and a passing real positive. § 38-12-402(7) creates one. The pattern
   was right; only the corpus was wrong — run against the session laws it returns the act
   immediately.* This was the single most consequential method finding of the pass.
3. **Rule 19 — a missing word boundary manufactures false PRESENCE, not only false absence**, and
   **`lease` must never appear bare**. *Across 115 pattern-runs with something to anchor, bare `lease`
   matching inside "re**lease**" was the whole or bulk of 9 of 18 defects; one battery fell from 73
   hits in 56 sections to 13 in 11. Also seen: `oven` in "co**ven**ant", `cable` in "appli**cable**",
   `river` in "d**river**", `ten` in "**ten**ant", `exclusive` in "exclusive use".*
4. **Rule 19 — a positive control that passes only on a spurious substring leaves the absence
   unproved.** Check that the positive contains the term **anchored**, not merely that the run
   reported it as passing. *Three batteries had healthy-looking hit counts and worthless proofs; one
   recorded a section as containing "accept service" when that section does not contain the word
   "accept".*
5. **Rules 16 and 59 — for a section an act has amended, no source holds the amended text as a
   continuous string**, so it cannot be quoted. Quote the act's **added** language (which does appear,
   in capitals) with the act cite, and/or the **compiled text** for the untouched parts, and state the
   amended result in the library's own words outside quotation marks. Editorial elisions use `...` and
   nothing else — a bracketed paraphrase inside a quotation can never match a source. *31 quotations
   across three slices were this defect.*
6. **Rule 19 — the heading screen and an everyday-word companion battery are mandatory before any
   absence, not optional extras.** A term-of-art battery can return hits that look like an answer and
   are not. *A squatter battery returned four hits in one section, every one "squatting **position**",
   while **article 40.1 of title 13 is a complete squatter-removal route**. Separately, two real
   landlord duties phrased as "covered entity" and "person" were reachable only by heading screen, and
   § 38-38-506 hid from both because its heading carries no "foreclos".*

### Tooling and record-keeping

7. **Rule 19 — generate every battery figure in a row or log from the saved battery log; never type
   it.** *Eleven typed figures in this pass do not reproduce from their own recorded patterns.*
8. **Rule 24 — a corpus tool that lists hits must not silently cap the listing** where a row may
   enumerate the sections matched. *A 14-per-title cap made three slices' enumerations wrong and hid
   § 38-38-506 from the slice that needed it; the fix prints an uncapped per-section tally for every
   title with hits.*
9. **Rule 14 — strip running page headers in BOTH orders, and allow a one-to-four-digit page number.**
   *The pass's own saved act files twice left furniture inside a sentence — `WITHOUT SEPARATING THE
   TOTAL 428 Consumer and Commercial Transactions Ch. 94 PRICE` — and each cleanup resolved a
   quotation that had looked like a drafting error and was not.*
10. **Rule 14 — a section-extraction tool must pick the body by span, not by first or last header
    occurrence.** *Taking the last occurrence returned a one-line contents entry for §§ 25-15-319 and
    25-15-322; § 25-15-319's body is occurrence #1 and § 25-15-322's is #2, so neither rule is
    universally right.*
11. **Rule 59 — the quote checker must accept possessives inside a statutory quotation.** Statutes are
    full of them ("one month's rent", "fifteen days' notice"), and a naive opener/closer pairing skips
    the whole passage **silently**. *Fixing this took the checked population from 725 quotes to 856 and
    exposed five further defects, including one in a passage the check was meant to verify.*
12. **Rule 59 — a quote can resolve against the WRONG section.** Anchor each quote on its own nearby
    citation, not on the corpus at large. *One reconstruction coincidentally appeared verbatim in an
    unrelated title and was reported as merely "not saved".*
13. **Rule 24 — index the constitution by article and section.** It carries no code-style section
    numbers, so a tool keyed to them puts every constitutional hit in one bucket and no per-section
    claim about it can be verified.
14. **Rule 19 — a proximity pattern uses `[\s\S]`, never `.` or `[^.]`, and is widened once before a
    zero is trusted.** *One battery was 0 hits at a 200-character window and 1 hit in 3 sections at
    300; another needed 700 characters, which only the heading screen could bridge.* And **a reverse
    limb must carry the same alternatives as its forward limb** — an asymmetric pattern is its own
    defect class.

### Process

15. **Rule 27 — add a cross-slice duplicate-id check, and read the three-bucket calls as a consistency
    set.** *Three slices independently wrote a clause under one id for one statutory lever, with three
    different bodies and **three different `lease_clause_basis` values**; reading the statute showed
    two of the three bases were wrong. The bucket is what diverges most between parallel workers.*
16. **Rule 80 — tell each round's checker that a finding may be wrong by ACCUSING GOOD WORK**, not
    only by missing bad work, and give worked examples. *Two findings on this pass were of that kind: a
    row was said to name neither of two acts when it names both verbatim, and a quotation was called a
    reconstruction when it is verbatim act text that failed only because page furniture split it.*
17. **Rule 8 / deliverables — verify a generated artefact against the schema before delivering it.**
    *The first build of this pass's delta was wrong in every row: a field-boundary lookahead written
    `[a-z_]+:` does not match `bodyText:` because of the capital letter, so the body was swallowed into
    `supersedes`. Three schema checks failed and the corrected file was 700KB smaller.*

18. **Rule 59 — a quote checker must scan every field that can carry a quotation, not only
    `notes:`.** *This pass's checker scanned `notes:`, `segment:`, `statute:` and `act language:`.
    Battery blocks quote statute text on their `hits:`, `positive:`, `conclusion:` and
    `heading-screen:` lines, and those ship into the log's battery table, so 153 quoted passages had
    never been checked at all; widening the field set found one that resolved nowhere and 41 that were
    correct but unsaved. The log's own prose was likewise never checked, and two defects were sitting
    in it, including a C18-class reconstruction of § 24-4.1-102(8.5)(b).*

19. **Rule 59 — the strict quote matcher and the unchecked-opener matcher must exclude the same
    characters before an opening apostrophe.** *Here the strict matcher excluded only a letter while
    the opener matcher also excluded a backtick, so `` `crs.py grep`'s `` opened a quotation that ran
    to the next apostrophe and was then reported as resolving nowhere. A mismatch between the two
    matchers turns prose into phantom findings and can hide a real one.*

20. **Rule 19 — one regex per `pattern:` line, and the sweep must REJECT a line holding more than
    one.** *C19 already required the first half. The second half is what matters: `battery_sessweep.py`
    strips the outer quotes and compiles the whole line, so `"A" and the reverse "B"` compiled to a
    valid-but-meaningless regex and the block was reported `clean` rather than unparsed. Eleven
    blocks in this pass were silently unswept, and four of their limbs matched session-law acts once
    split. A verification tool that cannot parse its input must say so instead of passing it.*

21. **Rule 80 — a checker's finding may be narrower than the defect it names.** *Round 1 named four
    battery blocks with two regexes on a `pattern:` line. There were eleven, and the failure mode was
    a false negative rather than a skipped block. Treat a method finding as a sample and sweep the
    class mechanically before accepting the count.*

22. **Rule 19 — verify every `positive:` line by script at the moment it is written: the block's own
    pattern must match the section the line names.** *A mechanical sweep of all 371 blocks on this
    pass found seven whose named positive section does not contain the searched term at all — a
    `positive:` line is a certification that the search engine finds what it is looking for, and a
    wrong one certifies a proof of absence the battery has not got. All seven were in one slice, which
    had written bare `positive: <section> PASSED` lines; the slices that wrote out how the positive
    was obtained were right. Make the line say how: which run, which pattern, and whether the source
    is the 2024 title text, a saved act or the constitution.*

23. **Rule 80 — validate a checking tool before believing its findings.** *The positive-control sweep
    accused 38 blocks on its first run and seven were real. The thirty-one false accusations were all
    one mistake — the tool took the first section number on the line and tested the strict pattern
    against it, so a line that itself said "not matched by this pattern; real positive for this run
    is § 6-1-1210" was read as a false claim. Rule 19 permits a widened or everyday-word positive, a
    saved-act positive, a constitutional positive and a per-limb positive, and a tool that does not
    know this will accuse good work. Three refinements took the count from 38 to 7. Report a sweep's
    findings only after the sweep has been made to agree with the rule it is enforcing.*

24. **Rule 80 — an errata applier must apply EVERY old/new pair in a block and prove it.** *This
    pass's applier used `re.search` for `old:` and `new:`, so it silently dropped the second erratum
    in each of five blocks — 5 of 27 — while reporting "22 / 22, 0 failed". A false clean from the
    tool that applies corrections is worse than no tool: the round looks closed when a fifth of it is
    not. Count the pairs in the file, assert the count applied equals it, and distinguish "already
    applied" from "failed" so the applier can safely be re-run.*

25. **Rule 80 — an erratum's `old` string must be unique, and the applier must refuse an ambiguous
    one rather than choose.** *One erratum on this pass matched twice in the same slice file, and the
    second occurrence was a CORRECT citation that the erratum itself warned must not be changed. The
    first applier version would have taken whichever came first.*

---

## Proposed topic questions

Fifteen, each from something Colorado turned out to have that the topic list did not think to ask
about. They are written as questions a later state can answer yes or no, with Colorado's provision as
the worked example.

**Fees and charges**
1. Does the state have a **general landlord-fee prohibition outside its landlord-tenant title** — a
   consumer-protection or pricing statute listing fees a landlord may not charge? *(Colorado:
   § 6-1-737(4), ten categories, in title 6 rather than title 38.)*
2. Does the state **cap a markup on a third-party-billed service**, and is the cap a choice between
   two measures rather than both? *(Colorado: § 38-12-801(3)(a)(VI)(A) — 2% of the billed amount **or**
   $10 a month, "but not both".)*
3. Does the state bar a fee **for the maintenance of common areas**, and does its definition of
   "dwelling unit" expressly exclude them? *(Colorado: § 6-1-737(4)(i) with § 6-1-737(1)(d)(II).)*
4. Does the state sweep **any nonrefundable fee collected before the tenancy** into its
   application-fee cap? *(Colorado: § 38-12-902(5) — broader than it looks, and it reaches move-in,
   administrative and holding fees.)*
5. Does the state's statute supply **interest on money owed without any lease term**, and at what
   rate? *(Colorado: §§ 5-12-101 and 5-12-102 — 8% compounded annually, even on an unliquidated
   amount, which leaves a contractual-interest clause buying only the increment.)*

**Deposits, wear and tear**
6. Does the state's definition of **"normal wear and tear" include damage or uncleanliness** arising
   from typical use? *(Colorado: § 38-12-102(4) as amended by HB 25-1249.)*
7. Does the state **void a lease provision that charges the tenant for repairs or cleaning due to
   normal wear and tear** or a pre-existing condition? *(Colorado: § 38-12-103(7)(b) — it voids the
   clause, not just the charge.)*
8. Does the state limit **carpet or paint** deductions by a condition-and-age test? *(Colorado:
   § 38-12-103(11), including a ten-year carpet rule.)*
9. Does the state presume **bad faith above a percentage of actual damages**? *(Colorado:
   § 38-12-103(3.5)(b) — 125%.)*

**Default, notice and process**
10. Does the state **imply a no-criminal-activity term into every lease**, so that a crime-free clause
    adds nothing? *(Colorado: § 13-40-107.5(2).)*
11. Does the state let the lease **shorten the nonpayment notice period**, keyed to the landlord's
    portfolio size or the property type? *(Colorado: § 13-40-104(5)(d) — ten days to five, but only if
    the lease says so and only for a landlord of five or fewer single-family homes.)*
12. Has the state **enacted a federal notice requirement into state law as a frozen reference**, so
    that later federal change does not release the landlord? *(Colorado: § 38-12-1502(1) adopts
    15 U.S.C. § 9058(c) as it stood on 2020-03-27, "notwithstanding any changes in federal law".)*

**Rights that survive, and rights the lease cannot touch**
13. Does the state give a **domestic-violence victim-survivor a lock-change right**, void a contrary
    lease term, and attach a private action with statutory damages? *(Colorado: § 38-12-402(7) and (8)
    — actual damages plus the greater of three times the monthly rent or $5,000.)*
14. Does the state make a **tenant's lease survive foreclosure** as an "omitted party" in actual
    possession, or deem a tenant a lienor with redemption rights? *(Colorado: § 38-38-506(1) and (3),
    § 38-38-305(1), § 38-38-305.5(1)(a)(II) and (1)(c).)*
15. Does the state have a **statutory landlord lien** on the tenant's goods, and is it judicial-only?
    *(Colorado: § 38-20-102(3), enforced through §§ 38-20-107 to 109, judicial foreclosure only, lien
    dying if no action within sixty days.)*

**One more worth asking of every state, because Colorado's answer runs the landlord's way:** does the
state's nuisance statute make the tenant liable to the owner for abatement costs and municipal fines
**"unless the lease provides otherwise"**? *(Colorado: § 31-15-402(4) — a default in the landlord's
favour that a careless conduct or fines clause can give away.)*

## Gaps-pass sync review (Claude Code, 2026-10-24)

Merged with `merge-delta.py --base 9f38860`: 305 new rows, 12 shared rows tagged for CO, nothing refused. Every row VERIFIED; no NEEDS_REVIEW row is open for Colorado.

**Flagged items (§4):**
- **Item 24, HB 25-1239 § 5: settled.** The rendered enrolled act (download 232, page 4) shows "~~subsection (1)~~ SUBSECTION (1)(c) of this section or of section 24-34-502 OR 24-34-502.2 ~~24-34-601, or 24-34-803~~". A disability-based violation of § 24-34-502 therefore keeps § 24-34-802(2)(a)'s remedies (actual damages or the $3,500 fine), and § 24-34-803 left that route; HB 25-1239 § 6 moved § 24-34-804's penalties to § 24-34-602. Added to `edu-disability-accommodation-co`; noted on `edu-service-animal-denial-penalty-co`, whose text was already right.
- **Item 7, mechanic's-lien notice duty:** `no-liens-co` ships as written (optional). Put to Taylor as a product question.

**Findings on existing rows (§6.1), each read against the act:**
1. `edu-dv-lease-termination-co` rewritten to HB 25-1168 § 15 (120-day police report, four documents, third-party notice, one-month cap, remaining-tenant bar, the two thirty-day clocks, (1), (3), (8)); detail left to the pass's new `edu-dv-qualifying-documents-co` and `edu-dv-deposit-timing-co`.
2. `dv-stalking-termination-co` (inactive): noted that it must not be reactivated as drafted.
3. `edu-dv-confidentiality-co` rewritten to § 38-12-402(4)-(5) (express written consent, co-tenant, court order, court-disclosure duty, applicant bar).
4. `edu-source-of-income-exemption-trap-co` rewritten: HB 25-1240 did not remove § 24-34-502(1.5)(a) or (1.7); (1)(r) applies to every landlord; the $5,000 subsidy floor.
5. `utility-submetering-disclosure-co`: basis corrected to CONSTRAINED_TERM | SERVES_LANDLORD ((4.5)(a)(IV) is a condition of a permitted method; "(4.5)(d)" does not exist). The 2027 metering mandate is already in two new rows.
6. `edu-security-deposit-cap-co`: SB 26-054's post-closing-occupancy exception from 2027-01-01.
7. `edu-cares-act-notice`: new companion `edu-cares-act-notice-co` (§ 38-12-1502, frozen 2020 text; scope doubt stated, with the course that works under every reading), after the DC pattern; CO segment added to the shared row.
8. `edu-rental-application-fairness-co`: § 38-12-904(1.7)'s screening notice from 2027-01-01 (HB 26-1196).
9. `assistance-animal-accommodation-co`, `edu-esa-federal-state-divergence-co`: HB 26-1045 cited (notes only).
10. `edu-mobile-home-park-carveout-co`: flag closed (notes only).
11. The pass's own working file: nothing to do.

**Item 2 conflicts:** new `keys-co` (actual cost of work actually done, no markup; no fee for a § 38-12-402(7) lock change) and `hoa-compliance-co` (association fines on Landlord for a rule breach, as damages; no common-area charges, § 6-1-737(4)(i); no fine for an emergency call, § 38-12-402(1)). CO removed from `keys` and `hoa-compliance`, as MD, RI, OR and others were.

**Edited-after rows (§5.6), read against the corpus:** `edu-designated-repairer-co`, `edu-no-lockout-for-rent-co` and `edu-no-private-well-testing-rule-co` correct. `edu-governmental-fines-co`'s last sentence (a seam between two errata, with a stray quotation mark) split into three sentences, content unchanged. `edu-no-tpa-notice-rule-co` asserted the narrow reading of § 38-12-1502; now states the doubt and points to `edu-cares-act-notice-co`. `edu-disability-accommodation-co` and `edu-service-animal-denial-penalty-co` were reworked under item 24.

**Statute spot-check (new clauses):** `dv-lock-change-co` matches § 38-12-402(7)(a)-(c) word for word; `waterbed-co`'s insurance requirement is consistent with HB 25-1207 (which lists requiring tenant liability insurance among permitted pet terms) and no Colorado statute bars it; `rent-acceptance-nonwaiver-co` (no Colorado payment-order statute found in title 38) and `unbundled-parking-co` and `utility-deposit-co` read against § 6-1-737(4) and § 38-12-801(3)(a)(VI): no errors.

**Builder:** `{{inspection_notice_hours}}`, `{{display_item_limit}}`, `{{parking_fee_amount}}` added to backlog M.14. The pass's SOP proposals and topic questions are taken up with Wyoming's in SOP 1.85.


**Decided (Taylor, 2026-10-24):** item 7, the mechanic's-lien notice duty: `no-liens-co` stays optional (Claude Code's recommendation); no Colorado override of `no-alterations` and no shared edit.

## Federal rows: foreclosure tenants, screening-report notice, voucher leases (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12 (Ohio gaps product item P1): three federal education rows are tagged here and in every jurisdiction, each read from the official federal text: `edu-ptfa-foreclosure-tenants` (Protecting Tenants at Foreclosure Act, 12 U.S.C. § 5220 note), `edu-fcra-adverse-action-notice` (Fair Credit Reporting Act adverse-action notice, 15 U.S.C. § 1681m) and `edu-voucher-tenancy-addendum` (Housing Choice Voucher lease and termination rules, 24 C.F.R. §§ 982.308, 982.310). This state's existing rows on these laws stay; no clause text changed.
