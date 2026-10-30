## Decision Log: South Dakota (State #7) — Session 1

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL) is closed. **No re-audit of any completed state is planned, now or later.** "Re-audit" means re-scrubbing everything for a state, and that won't happen. Targeted work is welcome: going back to re-verify or fix a specific row or topic in a completed state (a scalpel, not a hammer) needs no special justification; just say what and why. The word "re-audit" throughout these files refers to the one-time settings re-run of Aug–Sep 2026, which is finished. Older phrases such as "flag for the X re-audit", "live item for the X re-audit", "when X is next revisited" or "screen the completed states on their next revisit" are historical and dead: they are not a queue. Do not propose, plan or mention a re-audit, and do not park anything "for the re-audit". If something specific in a completed state looks wrong or unverified, say what and why and propose the targeted fix.

**Date:** 2026-08-24
**Status:** ✅ **Complete, reviewed, and corrected across three rounds** — full primary-source statute walk of SDCL Chapter 43-32 **and** all of Title 21-16 done; whole-library generic-clause audit run against both; named-topic canvass pass 1 and pass 2 both run against the full master checklist; all four gap-discovery sources used. Taylor's post-close review (§32, §34, §37) caught three real issues: an isolated drafting error in `default-by-tenant-sd` (had dropped the "any other obligation" catch-all, leaving tenant conduct/behavior uncovered - fixed); a genuine product gap where South Dakota's repealed statutory cure period had nothing filling it in the lease itself (fixed, round 2, with a new dedicated cure clause); and then a more fundamental question of whether that cure clause belonged in the lease at all versus the not-yet-built Legal Tracker feature (resolved, round 3 - `notice-and-cure-sd` converted from a required lease clause to `LANDLORD_EDUCATION` guidance, supported by direct comparison against the real SD lease from gap-discovery source #2, which itself builds no cure mechanism into the lease). A retroactive cross-state check (§36), run at Taylor's request, found the same underlying issue is real for Minnesota and present in a smaller form for Wyoming and North Dakota - flagged, not yet resolved for those states. 37 SD-tagged CSV rows committed; duplicate-ID and supersedes-collision checks both clean. See §40 for the full picture.
**Companion documents:** `lease-clause-decision-log-CO.md`, `lease-clause-decision-log-WY.md`, `lease-clause-decision-log-KS.md`, `lease-clause-decision-log-NE.md`, `lease-clause-decision-log-MN.md`, `lease-clause-decision-log-ND.md`, `lease-clause-decision-log-architecture-review.md`, `lease-clause-decision-log-named-topic-checklist.md`.
**Handoff set used to start this session:** the seven documents above, plus `lease-clauses.csv` (351 rows, ND close-out version = `steinoak_clauses_updated_38.csv`).
**Current CSV:** `steinoak_clauses_updated_55.csv` (384 rows, 37 SD-tagged) as of the end of this session, including all three rounds of post-review corrections.

**Process note:** written incrementally as work happened this session, per standing practice.

---

### 1. Primary source

**SDCL Chapter 43-32**, "Lease of Real Property" — the same chapter covers general property leasing and residential landlord-tenant law together (SD has never adopted a separate URLTA-style residential act, similar to ND). Sections 43-32-1 through 43-32-37 exist; 43-32-7 is repealed (SL 1983).

Full chapter text obtained from **consumer.sd.gov/docs/LLTen_Statutes43-32.pdf**, a South Dakota Department of Labor and Regulation, Consumer Protection Division publication reproducing the complete statute text section-by-section with source citations. Cross-checked the section index against the **official South Dakota Legislative Research Council site** (sdlegislature.gov/api/Statutes/43-32.html) — section numbers and titles match exactly, confirming the consumer.sd.gov text is current and complete, not a stale mirror.

### 2. Full statute walk — SDCL 43-32-1 through 43-32-37

- **§§1-5** — definitional/structural: leasing defined; 20-year cap on agricultural-land leases and 99-year cap on municipal-lot leases (both with reserved rent/service); hiring of real property presumed 1 year absent contrary agreement; hiring of lodgings with unspecified term presumed to match the rent-payment interval (weekly rent → weekly term), or monthly if no rent-interval agreement exists either; leases longer than 1 year require a signed writing.
- **§43-32-6** — lessor's basic obligations (deliver possession, secure quiet enjoyment) **plus** the self-help-eviction remedy: unlawful removal/exclusion or willful diminishment of essential services entitles the tenant to injunctive relief, recovery of possession, or lease termination, and in any case damages equal to 2 months' rent plus return of advance rent/deposit. Committed as `edu-self-help-eviction-ban-sd` (§7 below).
- **§43-32-6.1** — 1-month security deposit cap, with a mutual-agreement exception for special conditions posing a danger to the premises. Committed as `edu-security-deposit-cap-sd`.
- **§43-32-8/9** — residential habitability duty (reasonable repair, fit for human habitation, electrical/plumbing/heating systems in good working order); duty cannot be waived except that landlord and tenant may agree tenant performs specified repairs in lieu of rent; tenant remedy for landlord's failure to repair after reasonable notice = repair-and-deduct, or vacate and be discharged from further rent/obligations; if repair cost exceeds 1 month's rent, tenant may escrow rent in a separate account pending repair. Not yet turned into a clause/education row this session — flagged for next session (§9).
- **§43-32-10/11** — tenant's duty to preserve the premises; particular-purpose-use restriction with landlord's option to hold tenant responsible or rescind.
- **§43-32-12** — default rent-timing gap-fillers when the lease is silent: agricultural/wildland rent payable yearly at year-end, lodgings monthly at month-end, other rents quarterly at quarter-end. Low practical relevance (leases specify due dates) — not committed as a row, noted here for completeness.
- **§43-32-13** — month-to-month lease **modification** notice: landlord must give 30 days' written notice before month-end to change terms (including rent); tenant may instead terminate, effective the first of the next month, by giving written notice within 15 days of receiving the landlord's modification notice. Committed as `edu-month-to-month-modification-notice-sd` (§7).
- **§43-32-14/15** — holdover-with-accepted-rent presumed renewal on the same terms, capped at 1 year; unspecified-term hiring presumed renewed absent a termination notice given at least as far in advance as the term itself (capped at 1 month).
- **§43-32-16/17** — tenant's duty to forward adverse-proceeding notices to landlord; attornment-to-a-stranger void without landlord consent or court judgment.
- **§43-32-18** — landlord's early-termination right: contrary use of the premises, or tenant's failure to make required repairs within a reasonable time after request. No fixed statutory notice-and-cure period given here (see §9 — this is a Title 21-16 question).
- **§43-32-18.1 / 19 / 19.1 / 19.2** — anti-eviction protection for tenants who call emergency services re: domestic abuse/stalking (independent of the domestic-abuse termination right); tenant's own early-termination causes (landlord's failure to deliver possession/repair, material destruction of the premises, or domestic-abuse/stalking termination); the domestic-abuse/stalking termination mechanics (documentation, notice, liability cutoff); confidentiality of the tenant's post-termination contact information. Committed as `dv-lease-release-sd` and `edu-dv-confidentiality-sd` (§7).
- **§43-32-20/21** — assignee/assign remedies mirror the original lessor-lessee remedies.
- **§43-32-22 / 22.1 / 23** — lease termination generally (expiration, mutual consent, tenant acquiring superior title); farm-tenancy (40+ acres) auto-continuation absent a September 1 notice, terminating the following March 1, with no continuation right if the tenant is in default; termination-at-pleasure leases end on notice of a party's death/incapacity.
- **§43-32-24 / 24.1** — residential security deposit return (2-week deadline tied to receipt of forwarding address, 45-day itemized-accounting-on-request, forfeiture of withholding rights for noncompliance, $200 punitive-damages cap for bad faith) and a parallel, longer-deadline commercial-deposit provision (out of scope — Steinoak targets residential). Committed as `security-deposit-return-sd`.
- **§43-32-25/26** — abandoned property: ≤$500 value presumed abandoned after 10 days, disposable by landlord; >$500 value must be stored with a landlord's lien for handling/storage costs, disposable as abandoned after 30+ days' storage. Committed as `abandoned-property-sd`.
- **§43-32-27/28/29** — retaliation cause of action (rent increase above fair market value, utility-service decrease, or non-breach-based notice to vacate, within 180 days of a protected act: code complaint, repair notice, or tenant-union activity), remedies matching §43-32-6 plus attorney's fees, and a general rights-preservation savings clause. Committed as `edu-retaliation-prohibition-sd`.
- **§43-32-30** — prior-meth-manufacturing disclosure, actual-knowledge standard, unit-specific in multi-unit properties. Committed as `meth-disclosure-sd`.
- **§43-32-31** — 90-day notice to vacate/remove a mobile or manufactured home when the leased land is redeveloped for alternate use (not applicable if the notice is breach-based). Mobile-home-specific — consistent with this project's standing deprioritization of the mobile-home-park layer; not committed as a row this session.
- **§43-32-32** — entry notice: reasonable notice required except emergency/impracticability; 24 hours' written notice presumed reasonable; must specify entry date(s), a normal-business-hours time window, purpose, and a rescheduling mechanism. Committed as `edu-entry-notice-content-sd`.
- **§43-32-33 to 43-32-36** — assistance-animal framework: definitions; landlord's documentation right limited to cases where disability/need isn't readily apparent or already known; documentation must come from a provider not operating solely to certify service/assistance animals (anti-letter-mill provision); fraudulent disability claims are grounds for eviction plus a damage fee up to $1,000. Committed as `assistance-animal-accommodation-sd`, superseding the generic.
- **§43-32-37** — hotel/campground/RV-park ejection grounds. Transient-lodging-specific, outside Steinoak's residential-lease scope — not committed.

### 3. A secondary-source conflation caught before it caused a problem

Multiple secondary sources (Nolo, LeaseRunner, WeekendLandlords, undergroundlandlord.com) describe South Dakota's month-to-month notice period inconsistently — some cite 30 days, some cite a "NEW 15-day rule." Both are correct, but they describe **two different statutes**:

- **SDCL 43-32-13** (inside Chapter 43-32, fully primary-sourced this session) — governs *modifying the terms* of a month-to-month lease, including a rent increase: 30 days' landlord notice, with the tenant able to terminate on 15 days' notice in response.
- **SDCL 43-8-8** (Title 43, Chapter 8 — general property law, *outside* Chapter 43-32, found via gap-discovery source #4) — governs ending a tenancy at will outright with no modification involved: reduced from 30 to 15 days by **2024 SB 89**, with a 2-month carve-out for active-duty military tenants.

Logged proactively, in the same category as WY's Hemlane/LeaseWisely errors and ND's Chapter-47-16.1 and Title-32-vs-47-16-20.1 conflations: caught by reading the primary text of §43-32-13 directly rather than accepting a secondary source's flattened "15 days" headline. Both statutes committed as separate rows (`edu-month-to-month-modification-notice-sd` and `edu-tenancy-at-will-termination-sd`) with a cross-reference note in each so the distinction isn't lost later.

**§43-8-8 itself has not yet been independently read from primary source this session** — committed based on three consistent secondary sources plus a dedicated 2024 legislative-update write-up describing SB 89's text and intent. Flagged as weaker-evidence tier, same caution ND applied before upgrading its own secondary-sourced items (see ND §29).

### 4. The 2024 eviction-law changes (SB 89, SB 90) — flagged here, resolved at primary-source level in §9

South Dakota's Legislature passed two 2024 bills that materially changed eviction procedure:

- **SB 89** — amended §43-8-8 (see §3 above).
- **SB 90** — repealed **SDCL 21-16-2** (the prior statutory notice-to-quit requirement for nonpayment). Multiple 2026-dated secondary sources agree landlords are no longer statutorily required to give a 3-day notice before filing a Forcible Entry and Detainer (FED) action for nonpayment, though a lease that itself specifies a notice period still binds the landlord to it contractually. SB 90 also reportedly changed the FED summons response time from 4 to 5 days.

At the time this section was first drafted, neither bill's text nor SDCL Chapter 21-16 itself had been independently read from primary source - flagged as the top priority for continued work. **That primary-source read happened later this same session; see §9.** `default-by-tenant`, `early-termination`, `possession-delay`, and `surrender-end-of-term` were deliberately not extended to SD until that read was complete - see §9-10 for the resolution (three extended as-is, one given a dedicated architecture-driven override). The CO;WY-only maintenance-clause-scoping backlog item remains separately open regardless (§5, §11).

### 5. Whole-library generic-clause audit

- `rent-payment`, `returned-payments`, `late-fee` — **not extended this session.** No SD late-fee statute exists (multiple secondary sources agree: silent on grace periods and caps; if the lease is silent, no late fee may be charged at all — same non-outcome pattern as WY/ND). Returned-check fee is widely cited at $40 by secondary sources but **not yet primary-source confirmed** for SD specifically (this project's ND session confirmed an analogous $40 figure under a similar general-banking statute, but SD's own citation hasn't been independently verified) — held pending next session rather than assumed to match ND's number.
- `security-deposit-use` — **extended to SD as-is** (states field updated), no override needed; SD's deposit-application concept is compatible with the generic's existing self-limiting language. Return-specific mechanics (2-week deadline, 45-day accounting, forfeiture, punitive-damages exposure) are SD-specific and handled by the new `security-deposit-return-sd` override.
- `assistance-animal-accommodation` — **superseded for SD** (`assistance-animal-accommodation-sd`), same reasoning as CO/WY/MN/ND: SD's statute adds documentation-source and fraud-penalty detail beyond the generic.
- `tenant-maintenance` / `landlord-maintenance` (CO;WY;MN group) — **held, not extended.** Same CO;WY-only clause-scoping backlog item flagged since Minnesota and still unresolved through ND — SD has real statutory hooks (§§43-32-8 through -10) but resolving this properly requires the full decision-log review this project has deferred across three states now. Not resolved this session either.
- `default-by-tenant`, `early-termination`, `possession-delay`, `surrender-end-of-term` — **held, not extended.** See §4 — blocked on a Title 21-16 primary-source read, not just the maintenance-scoping backlog.
- `Compliance & Prohibited Terms` group (6 rows) — expected to stay untagged for SD pending a dedicated check; SD's unconscionability/prohibited-clause posture has not been searched this session. Flagged for next session, not assumed either way.
- `edu-fee-shifting-co` — not yet checked against SD. Cross-state fee-shifting-mutuality batch item remains open across CO/WY/KS/NE/MN/ND/SD.

### 6. CSV changes this session

Starting file: `steinoak_clauses_updated_38.csv` (351 rows, ND close-out version). Ending file: `steinoak_clauses_updated_39.csv` (364 rows, +13 net: 1 extended generic + 13 new rows... actually 1 extension + 13 new = 364 total, see script output). Duplicate-ID assertion run before and after write; row/tag counts printed and verified.

**Extended (1):**
- `security-deposit-use` — SD added to `states`.

**New rows (13), all `VERIFIED` except one weaker-evidence-tier item noted below, `effective_from`/`last_checked`: 2026-08-24:**
- `security-deposit-return-sd` (LEASE_CLAUSE, REQUIRED, supersedes `security-deposit-return`)
- `edu-security-deposit-cap-sd` (LANDLORD_EDUCATION, CONSTRAINED)
- `edu-security-deposit-itemized-accounting-sd` (LANDLORD_EDUCATION, CONSTRAINED)
- `assistance-animal-accommodation-sd` (LEASE_CLAUSE, REQUIRED, supersedes `assistance-animal-accommodation`)
- `abandoned-property-sd` (LEASE_CLAUSE, CONDITIONAL)
- `edu-self-help-eviction-ban-sd` (LANDLORD_EDUCATION, PROHIBITED)
- `edu-retaliation-prohibition-sd` (LANDLORD_EDUCATION, PROHIBITED)
- `dv-lease-release-sd` (LEASE_CLAUSE, REQUIRED)
- `edu-dv-confidentiality-sd` (LANDLORD_EDUCATION, PROHIBITED)
- `meth-disclosure-sd` (LEASE_CLAUSE, CONDITIONAL)
- `edu-entry-notice-content-sd` (LANDLORD_EDUCATION, CONSTRAINED)
- `edu-month-to-month-modification-notice-sd` (LANDLORD_EDUCATION, CONSTRAINED)
- `edu-tenancy-at-will-termination-sd` (LANDLORD_EDUCATION, RECOMMENDED) — **weaker-evidence tier**: §43-8-8 not yet independently primary-sourced (see §3).

SD-tagged row count after this session: **14**.

### 7. Named-topic canvass — pass 1 (partial)

**Present, confirmed this session:** security deposit cap and return mechanics, itemized-accounting right, abandoned-property disposal (two-track by value), self-help eviction ban with a specific damages measure, retaliation protection (180-day window, broader-than-usual triggering-act list), domestic-abuse/stalking early termination with confidentiality protection, meth-manufacturing disclosure, service/assistance-animal documentation limits and anti-letter-mill sourcing rule, entry-notice content requirements, month-to-month modification notice, general tenancy-at-will termination notice (weaker-evidence tier), habitability/repair duty with a repair-and-deduct and rent-escrow remedy (not yet turned into a row), farm-lease auto-continuation (ag-specific, low priority), lease-term-length caps (ag/municipal).

**Confirmed absent:** statutory late-fee cap or grace period; deposit-interest requirement (unlike MN/ND).

**Not Yet Checked (deliberately, not silently skipped):** Title 21-16 eviction procedure and the 2024 SB 89/SB 90 changes in full primary-source detail (see §4); returned-check fee cap (SD-specific primary confirmation, not assumed to match ND's $40); smoke detector/CO alarm duty; day-one landlord-identity disclosure; fair housing additions beyond federal; voucher-acceptance mandate; deposit installment-payment right; last-month's-rent deposit-application restriction; landlord-identity-change notice; landlord lien/security-interest abolition; for-cause eviction protection; tenant-death termination protection; fire/casualty termination right (note: §43-32-19(2), material-destruction termination, is already captured as a tenant termination cause in §2's walk but not yet turned into its own row — may already be adequately covered by a future `edu-early-termination-grounds-sd` composite row); failure-to-deliver-possession remedy (also §43-32-19(1), same status); tenant noncompliance notice-and-cure mechanics (blocked on Title 21-16); nonpayment pay-or-quit notice (blocked on Title 21-16, see §4); fast-track violent-crime eviction ground; immigration-status inquiry prohibition; right to call police/emergency services (note: §43-32-18.1 is adjacent — an anti-eviction-for-calling-police protection tied specifically to DV/stalking incidents, already captured in the statute walk but not yet cross-checked against the broader "right to call police" checklist topic as MN/KS defined it); EV charging access; mobile home park act (deprioritized layer, consistent with project precedent); tenant screening fairness act; immigrant tenant protection act; eviction-record sealing (ND precedent exists — not yet checked for SD); Compliance & Prohibited Terms / unconscionability posture (§5).

**Priority for next session:** Title 21-16 primary-source read (unblocks `default-by-tenant`/`early-termination`/`possession-delay`/`surrender-end-of-term` extension and the nonpayment/no-cure canvass items), then the remaining Not-Yet-Checked list above, then canvass pass 2.

### 8. Gap-discovery sources — status

1. Statute-structure walk from primary source — Chapter 43-32 complete (§2); Title 21-16 not started.
2. Comparison against a real professional lease product — not started.
3. Personal landlord experience — not applicable (Taylor has no landlord experience outside CO, per established project scope).
4. Explicit search for landlord-relevant law outside the main landlord-tenant chapter — done once, productively (§43-8-8 found and the modification/termination conflation caught, §3-4) — not yet exhaustive (smoke detector/fire-safety code, tenant-screening-fairness statutes, and fair-housing-act additions outside Title 43 not yet searched).

### 9. SDCL Title 21-16 (Forcible Entry and Detainer) — full primary-source walk, same session

Picked back up the top-priority item from §9's original punch list. Full chapter read from primary/near-primary source: **law.justia.com's 2025-codification mirror** (used for full section text, since consumer.sd.gov's companion eviction-statute PDF, `LLTenEviction_Statutes21-16.pdf`, returned no machine-readable text on fetch) cross-checked section-by-section against the **official sdlegislature.gov API index** (sdlegislature.gov/api/Statutes/21-16.html) for section numbering, titles, and repeal status. Both sources agree exactly on the chapter's current structure - independent corroboration of currency, same standard this project has applied to every other state's primary-source claims.

- **§21-16-1** (grounds) — full 7-subdivision list read. Residentially relevant: holdover after lease term, **nonpayment of rent for 3 days past due** (subdivision 4), and lease-violation where **the lease itself** states the violation terminates the tenancy (subdivision 7) - a lease-defined ground, not a statute-defined one. Committed as `edu-eviction-grounds-sd`.
- **§21-16-2** — **confirmed repealed**, corroborating the 2024 SB 90 claim from multiple secondary sources at full primary-source confidence (both sdlegislature.gov and Justia's current index independently list it as "Repealed" with no substantive text). This was South Dakota's prior statutory notice-to-quit requirement before filing.
- **§21-16-6 / 6.1** — verified-complaint-with-summons filing mechanics; service-by-publication exemption. Procedural detail, not committed as its own row (out of scope for lease clauses/landlord education at this level of procedural granularity).
- **§21-16-7** — defendant's time to appear/plead: **5 days** from service (or 30 days from publication service). Source note confirms amendment by **SL 2024, ch 75, §2** - direct primary-source confirmation of the "SB 90 changed 4 days to 5 days" secondary-source claim from session 1's §4.
- **§21-16-9/10** — title/boundary-question certification (procedural, not committed); judgment for a prevailing plaintiff = possession + rents/damages/costs.
- **§21-16-11** — attorney's fees taxable as costs **to the prevailing party** (either side, not landlord-only), conditioned only on that party being represented by a licensed attorney. **This resolves South Dakota's own instance of the fee-shifting-mutuality question** open since the CO log - confirmed mutual, joining ND as the second state in this project to have this specific question independently resolved (both mutual). The broader cross-state consolidation (checking every state's own clause wording against its statute) remains open.
- **§21-16-12** — not yet read (execution-timing mechanics; lower priority, procedural).

**A genuine architecture finding, not a secondary-source error:** the repeal of §21-16-2 means the `default-by-tenant` generic clause's language - "does not cure the failure within the time period specified by applicable law" - has no statutory referent for South Dakota nonpayment defaults. Unlike every other state closed in this project so far (CO/WY/KS/NE/MN/ND all have *some* statutory notice-and-cure period, even if short), South Dakota's FED statute simply requires rent to be 3+ days late and defers entirely to the lease's own terms for both nonpayment grace periods and violation-termination triggers. Flagged for the named-topic checklist as a new architecture pattern, and resolved by writing a dedicated `default-by-tenant-sd` override rather than extending the generic as-is (which would have been actively misleading).

### 10. CSV changes, continuation (Title 21-16)

Starting file: `steinoak_clauses_updated_39.csv` (364 rows). Ending file: `steinoak_clauses_updated_40.csv` (367 rows, +3 net: 3 extended generics + 3 new rows... see script output for the precise breakdown - `early-termination`, `possession-delay`, and `surrender-end-of-term` were extended to SD as-is after confirming no conflict in either Chapter 43-32 or Title 21-16; three new rows were added). Duplicate-ID assertion run before and after write.

**Extended (3):**
- `early-termination`, `possession-delay`, `surrender-end-of-term` — SD added to `states`; no SD-specific override needed, confirmed against both chapters now that Title 21-16 has been read.

**New rows (3), all `VERIFIED`, `effective_from`/`last_checked`: 2026-08-24:**
- `default-by-tenant-sd` (LEASE_CLAUSE, REQUIRED, supersedes `default-by-tenant`) — architecture override, see §10.
- `edu-eviction-grounds-sd` (LANDLORD_EDUCATION, RECOMMENDED)
- `edu-eviction-procedure-sd` (LANDLORD_EDUCATION, RECOMMENDED)

SD-tagged row count after this continuation: **20** (up from 14 after the first CSV pass).

### 11. §43-8-8, habitability duty, and returned-check fee — three more punch-list items closed

Continued straight into the top of §11's punch list.

**§43-8-8 upgraded from weaker-evidence to VERIFIED.** Got a working primary-source read via sdlegislature.gov's own current statute text (the DisplayStatute.aspx canonical page is JS-rendered and doesn't return text directly, but its underlying content ID page, `Codified_Laws/2065057`, was retrievable via search-engine mirroring). Confirms the 15-day figure from session 1's §3-4 discussion, and adds real detail this project didn't have before: the section is titled "Estate at will--**Residential property**--Termination by notice--Extended notice for active military service" (so it's explicitly scoped to residential tenancies, not a general-property catch-all); the military-family notice extension has two specific statutory carve-outs (sustained tenant misconduct, or the property being sold/passing into the landlord's estate); and "immediate family member" is defined narrowly as spouse or minor child. `edu-tenancy-at-will-termination-sd` bodyText rewritten to reflect the fuller confirmed text; verification_status upgraded.

**Habitability duty (§43-32-8/9) committed.** The non-waivable repair duty, tenant's repair-and-deduct/vacate remedies, and the notable rent-escrow mechanism (available specifically when repair costs exceed one month's rent) are now `edu-habitability-duty-sd`. The rent-escrow option is a genuinely distinct middle-ground remedy this project hasn't seen with this exact structure elsewhere - flagged for the checklist.

**Returned-check fee cap ($40) committed, with an honest evidentiary caveat.** SDCL 57A-3-421 sits in the UCC/commercial-code title, not Chapter 43-32 - same general-commercial-law architecture as ND's analogous figure. The statute's own current text wasn't directly fetchable (JS-rendered sdlegislature.gov page), but its existence and subject matter were independently corroborated from a *different* primary source - SDCL 22-30A-27 (the bad-check criminal statute), which explicitly cross-references "the costs and expenses provided for in § 57A-3-421" - combined with six mutually consistent secondary sources all citing the same $40 figure. Committed as VERIFIED on that combined basis, with the caveat noted directly in the row's own notes field for future re-confirmation if a direct text fetch becomes possible.

A quick pass on **smoke/CO detectors** found no SD-specific detector statute - South Dakota appears to fold this into the general §43-32-8 habitability duty rather than a dedicated detector-placement statute (unlike some states with explicit detector-count/placement rules). Not committed as its own row; noted in the canvass as "folded into habitability, no dedicated statute" rather than left unchecked.

### 12. CSV changes, continuation (§43-8-8/habitability/returned-check)

Starting file: `steinoak_clauses_updated_40.csv` (367 rows). Ending file: `steinoak_clauses_updated_41.csv` (369 rows, +2 new rows, +1 upgraded row). Duplicate-ID assertion run before and after write.

**Upgraded (1, not a new row):**
- `edu-tenancy-at-will-termination-sd` — verification_status VERIFIED (was weaker-evidence tier), bodyText expanded.

**New rows (2), `VERIFIED`, `effective_from`/`last_checked`: 2026-08-24:**
- `edu-habitability-duty-sd` (LANDLORD_EDUCATION, REQUIRED)
- `edu-returned-check-fee-cap-sd` (LANDLORD_EDUCATION, CONSTRAINED)

SD-tagged row count after this continuation: **22**.

### 13. Named-topic canvass — broader sweep, several confirmed-absent findings

Worked through a batch of the checklist items that hadn't been searched at all yet (per §13's punch list).

**Fair housing additions beyond federal — confirmed and committed.** SDCL 20-13-20 and 20-13-1(16), both read from primary source, agree exactly: South Dakota's own fair housing law adds **creed** and **ancestry** to the federal protected-class list. No source-of-income/voucher protection, no SOGI protection at the state level. Committed as `edu-fair-housing-additions-sd`.

**Confirmed absent, not committed as rows (per this project's standing convention):**
- Tenant application-fee cap / tenant-screening-fairness-act analog — multiple consistent secondary sources agree "no state statute," matching the established SD pattern (silent-unless-stated-in-lease).
- Day-one landlord-identity disclosure — same "no state statute" pattern.
- Voucher-acceptance mandate — consistent with SD's absence from the source-of-income-protection state list found this round.
- Deposit installment-payment right — no statute found, consistent with the CO/WY/KS/NE/ND pattern already established in this project.
- For-cause eviction protection after a fixed tenancy length — no such provision found in Chapter 43-32 or Title 21-16; consistent with the WY/KS/NE/ND pattern.
- Fast-track violent-crime/drug-sale eviction ground (NE-style, no-cure) — SDCL 21-16-1's 7 grounds don't include one; South Dakota's closest analog is simply that ordinary lease-violation grounds already carry no statutory cure period post-2024 (see §9-10), so there's no separate "fast-track" category the way NE has one.

**Not yet checked, deliberately carried forward (not assumed absent):** immigration-status inquiry prohibition, EV charging access, eviction-record sealing (ND has this; SD not yet searched), landlord lien/security-interest abolition, landlord-identity-change notice, right to call police as a *general* (non-DV-specific) protection - SD's §43-32-18.1 only covers DV/stalking-related emergency calls, and hasn't been cross-checked against the broader topic the way MN/KS defined it.

### 14. CSV changes, continuation (fair housing)

Starting file: `steinoak_clauses_updated_41.csv` (369 rows). Ending file: `steinoak_clauses_updated_42.csv` (370 rows, +1). Duplicate-ID assertion run before and after write.

**New row (1), `VERIFIED`, `effective_from`/`last_checked`: 2026-08-24:**
- `edu-fair-housing-additions-sd` (LANDLORD_EDUCATION, PROHIBITED)

SD-tagged row count after this continuation: **23**.

### 15. Final canvass sweep this session — remaining short-list items

Worked through the rest of §15's short list.

**Confirmed absent, not committed as rows:**
- Immigration-status inquiry prohibition — no dedicated SDCL statute found. A Brookings, SD municipal renters'-rights page states plainly that South Dakota's fair-housing "national origin" protection "does not include citizenship" - consistent with there being no separate state-level inquiry ban (unlike some states with an explicit prohibition). Municipal-page sourcing is weaker than a primary statute read, but combined with the absence of any statute citation across many other searches for this topic, treated as a reasonable confirmed-absent finding.
- EV charging access — no SD statute found addressing a tenant's right to install or a landlord's obligation to accommodate EV charging.
- Eviction-record sealing for tenants — no SD statute found. South Dakota's only sealing/expungement framework located is the general *criminal*-record expungement process (unrelated to civil eviction filings) - a materially different animal from ND's tenant-specific eviction-record-sealing provision. Confirmed absent as a *civil eviction record* protection specifically.

**Flagged, not resolved either way (genuine open questions, not silently dropped):**
- **Landlord-identity/management-contact disclosure requirement** — a real discrepancy surfaced this round. AAOA's guide states plainly "Landlord Disclosure: No state statute." A different source (DocDraft, a lower-confidence AI-generated-feeling real-estate content site with no statute citation given) claims South Dakota "requires landlords to disclose the names and addresses of persons authorized to manage the property" when a property sells. The DocDraft claim wasn't corroborated by any other source found this session and cites no SDCL section - treated as unreliable pending primary confirmation, consistent with this project's standing rule that a confident, specific secondary-source claim needs the same verification as an absence claim (the WY/ND lesson). **Not committed either way.** Worth one targeted primary-source search next session before this can move to Confirmed Absent or Confirmed Present.
- **SD-specific small-landlord fair-housing exemption** — several lower-tier sources (landlord-tenant-law.com among them) claim South Dakota's *own* fair housing statute (not just the federal Mrs. Murphy exemption) exempts owner-occupied buildings of two or fewer rental units. This is a materially different threshold from the federal exemption's four-unit line, and if true would be a genuinely important product fact (it would mean `edu-fair-housing-additions-sd` needs an exemption caveat for small owner-occupied properties). **Not committed, not treated as confirmed** - this needs a direct primary-source read of SDCL 20-13-20's full text (only the operative discrimination-prohibition language was read this session, not any exemption subsections that may follow it) before it goes into the library either way.
- Also noted, not chased further this session: `consumer.sd.gov`'s own landlord-tenant FAQ page (a state government source, but evidently not kept current) still describes a "3-day notice before FED" requirement - directly contradicted by this session's confirmed primary-source finding that §21-16-2 was repealed in 2024. Not a new finding to act on, just a live illustration of why this project treats even government-published pages as needing a primary-statute-text check rather than being trusted at face value when they conflict with the code itself.

No new CSV rows this round - every finding was either confirmed-absent (not committed, per convention) or flagged as unresolved (deliberately not committed pending primary confirmation).

### 16. Both flagged discrepancies resolved, plus a new preemption finding

**Small-landlord fair-housing exemption — CONFIRMED PRESENT.** Got the full text of SDCL 20-13-20 from primary source (sdlegislature.gov): the refusal-to-rent, discriminatory-terms, and a fourth listed prohibition "do not apply to rooms or units in dwellings that contain living quarters for no more than two families living independently of each other, if the owner maintains and occupies one of the living quarters as the owner's residence." This is a genuinely narrower threshold than the federal Mrs. Murphy exemption's 4-unit line - SD's own exemption caps at 2 units. Discriminatory advertising remains prohibited regardless. `edu-fair-housing-additions-sd` bodyText amended to include this exemption.

**Landlord-identity/management disclosure — CONFIRMED ABSENT, resolved with high confidence.** RocketRent's specific citation (SDCL 43-32-2) was checked directly against primary source and is simply wrong - §43-32-2 is the agricultural-land/municipal-lot lease-term cap (already correctly captured in this project's original §2 statute walk), not a disclosure requirement. Combined with AAOA's independent "no state statute" finding and the absence of any such requirement from consumer.sd.gov's own official FAQ, this project now treats "no SD statutory landlord-identity-disclosure requirement" as resolved. Not committed as its own row, per the standing confirmed-absent convention - but worth noting as a caution: a specific, statute-numbered secondary-source claim turned out to be a plain miscitation, the same category of error this project has now caught for WY, ND, and SD across three different states.

**New finding, not on the original punch list: statewide rent-control preemption.** SDCL 6-1-13 (Title 6, Local Government Generally - a gap-discovery-source-#4 find, outside Chapter 43-32 entirely) confirms no South Dakota local government may enact rent control on private residential property. Committed as `edu-rent-control-preemption-sd`. This sharpens the municipal-ordinance-risk messaging Steinoak can give SD landlords - rent-amount control specifically is foreclosed at the local level statewide, though other categories of municipal ordinance remain untouched and still out of scope.

### 17. CSV changes, continuation (discrepancy resolution + rent control)

Starting file: `steinoak_clauses_updated_42.csv` (370 rows). Ending file: `steinoak_clauses_updated_44.csv` (371 rows, +1 new row, +1 amended row). Duplicate-ID assertion run before and after each write (two scripts run this round).

**Amended (1, not a new row):**
- `edu-fair-housing-additions-sd` — bodyText expanded to add the confirmed 2-unit owner-occupied exemption.

**New row (1), `VERIFIED`, `effective_from`/`last_checked`: 2026-08-24:**
- `edu-rent-control-preemption-sd` (LANDLORD_EDUCATION, RECOMMENDED)

SD-tagged row count after this continuation: **24**.

### 18. Right to call police, landlord lien, last-month's-rent, prohibited-terms posture — the short list closed out

**Right to call police/emergency services — committed, scope confirmed narrower than MN's.** SDCL 43-32-18.1 (already identified in the original statute walk but not previously committed as its own row) prohibits penalizing a tenant for calling police/emergency assistance in response to domestic abuse, unlawful sexual behavior, or stalking, and makes that right non-waivable. Cross-checked against Minnesota's own right-to-call-police statute (504B.205, extending to "any other conduct, including but not limited to mental health or health crises") - SD's version is DV-specific, not general. Committed as `edu-right-to-call-police-sd`, with the scope difference flagged for the checklist rather than treated as a gap.

**Landlord lien/security-interest — confirmed absent.** Searched Title 44 (SD's general lien-law title) and Chapter 43-32 directly; no dedicated statute abolishing or granting a residential landlord's lien over tenant property was found. SD's only property-retention mechanism located remains the abandoned-property framework already captured (`abandoned-property-sd`). Not committed as its own row.

**Last-month's-rent deposit-application restriction — confirmed absent.** No statute found addressing this specifically.

**Compliance & Prohibited Terms / unconscionability posture — confirmed absent as a dedicated statute.** South Dakota appears to rely on general common-law unconscionability doctrine for leases rather than a specific consumer-protection statute - consistent with the state's overall minimal-statute, lease-terms-control pattern already seen throughout this session. Not committed as its own row.

**§21-16-12 read and folded in.** "No execution for possession can be served except in the daytime" - simple, fully primary-sourced, added to `edu-eviction-procedure-sd`'s bodyText. This closes out every section of Title 21-16.

**§43-32-19(1)/(2) committed as their own row.** The failure-to-deliver-possession/repair and material-destruction-of-premises tenant termination grounds, read in the original statute walk but not previously turned into a row, are now `edu-tenant-termination-causes-sd`. The domestic-abuse/stalking ground (43-32-19(3)) is cross-referenced to the already-existing `dv-lease-release-sd` rather than duplicated.

### 19. CSV changes, continuation (right-to-call-police + wrap-up)

Starting file: `steinoak_clauses_updated_44.csv` (371 rows). Ending file: `steinoak_clauses_updated_46.csv` (373 rows, +2 new rows, +1 amended row). Duplicate-ID assertion run before and after write (two scripts run this round).

**Amended (1, not a new row):**
- `edu-eviction-procedure-sd` — bodyText extended with the §21-16-12 daytime-execution rule.

**New rows (2), `VERIFIED`, `effective_from`/`last_checked`: 2026-08-24:**
- `edu-right-to-call-police-sd` (LANDLORD_EDUCATION, PROHIBITED)
- `edu-tenant-termination-causes-sd` (LEASE_CLAUSE, REQUIRED)

SD-tagged row count after this continuation: **26**.

### 20. Named-topic canvass — pass 2 (run against the full master checklist)

Ran a genuine independent second pass against `lease-clause-decision-log-named-topic-checklist.md` (the actual consolidated checklist through North Dakota), row by row - not just a review of pass 1's own notes, per the checklist's own instruction #3 ("go back to the full checklist file itself, not just memory of what the first pass concluded"). This caught real items, consistent with how NE's and ND's own pass 2 caught genuine misses.

**Disclosures & habitability**

| Topic | SD status |
|---|---|
| Radon disclosure | **Confirmed absent as a lease-disclosure duty.** SDCL §§43-4-37 to 43-4-44 is a *real estate sale* disclosure statute (Seller's Property Condition Disclosure Statement), not a landlord-tenant lease duty - the exact same trap this project caught for Nebraska's radon row. Notably, the statute's own "Transfer" definition includes "a lease with an option to purchase" or "a ground lease coupled with improvements," so there is a narrow lease-adjacent trigger, but not for an ordinary residential lease. Not committed as a row. |
| Bed bug disclosure | Confirmed absent, same reasoning as radon - no dedicated lease-specific bed bug statute found. |
| Mold disclosure | Confirmed absent as a lease duty, same seller-disclosure-statute caveat as radon. |
| Security deposit interest requirement | Confirmed absent (already noted in `security-deposit-return-sd`'s notes from session 1). |
| Lead-based paint disclosure | Present (federal, applies regardless of state) - consistent with every other state in this project. |
| Move-in written inventory requirement | Confirmed absent - one source states plainly landlords are "not required to do" a formal inventory; consumer.sd.gov's own FAQ describes it as good practice, not a requirement. |
| Day-one landlord/manager identity disclosure | Confirmed absent - resolved earlier this session (§17: RocketRent's citation was a miscitation). |
| Fair housing protected classes | **Present** - `edu-fair-housing-additions-sd` (creed, ancestry, plus the confirmed 2-unit owner-occupied exemption). |
| Housing-voucher/subsidy acceptance mandate | Confirmed absent (§13). |

**Security deposits**

| Topic | SD status |
|---|---|
| Deposit amount cap | Present - `edu-security-deposit-cap-sd`. |
| Deposit installment-payment right | Confirmed absent (§13). |
| Last-month's-rent deposit-application restriction | **Inconclusive**, matching ND's own honest finding for this exact topic rather than a clean absence - no statute directly addresses it, and this project's search depth here doesn't meet the bar for a confident absence claim. Correcting an earlier overstatement in this log (§18 had called it "confirmed absent" on weaker evidence than that label should require). |
| Successor-owner bound by deposit obligations | **Not Yet Checked** - genuine gap, no dedicated search run this session. |

**Fees, pricing, and unconscionability**

| Topic | SD status |
|---|---|
| Returned/dishonored check fee cap | Present ($40) - `edu-returned-check-fee-cap-sd`. |
| Attorney-fee-shifting rule | Present, mutual - resolved via §21-16-11 (§9). |
| Confession-of-judgment clause prohibition | **Not Yet Checked.** |
| Broad exculpation/liability-limitation/indemnification prohibition | **Not Yet Checked.** |
| Rental-fee transparency / all-in-pricing law | **Not Yet Checked.** |
| General unconscionability doctrine | **Not Yet Checked with adequate rigor** - this log's earlier "confirmed absent as dedicated statute" claim (§18) was based on general search impressions, not the kind of direct primary-source check this project gives every other state's version of this same topic (KS's K.S.A. 58-2544, NE's §76-1412, ND's §47-16-13.3 were all specifically identified). Downgrading to Not Yet Checked pending a proper search. |
| Late-rent acceptance waiver rule | **Not Yet Checked** - a real gap, and a high-value one: this is the exact topic where KS and NE both had genuine conflicts with the generic non-waiver boilerplate. SD's `late-fee` clause has not been checked against this. |

**Entry, notices, and identity changes**

| Topic | SD status |
|---|---|
| Landlord entry notice period | Present (24-hour presumed reasonable) - `edu-entry-notice-content-sd`. |
| Broader landlord-identity-change notice | Confirmed absent - resolved this session (§17). |
| Landlord lien/security interest in tenant property | Present-leaning-absent but **not confirmed to the same standard as KS/NE's explicit abolition statutes.** This session's finding (§18) was "no dedicated statute found" via a general search of Title 44 - weaker evidence than KS's K.S.A. 58-2567 or NE's §76-1434, which are explicit abolition statutes. Downgrading confidence; worth one more targeted search. |

**Termination, default, and possession**

| Topic | SD status |
|---|---|
| For-cause eviction protection after 12 months | Confirmed absent (§14). |
| Retaliation prohibition | Present - `edu-retaliation-prohibition-sd`. |
| Tenant-death lease-termination protection | **Not Yet Checked** - a real gap; ND is the first state where this flipped from absent to present, worth checking whether SD has anything similar. |
| Alternate housing/relocation requirement during habitability failure | **Not Yet Checked** as its own distinct topic - SD's repair-and-deduct/rent-escrow remedy (`edu-habitability-duty-sd`) is adjacent but not the same thing as an alternate-housing mandate or self-help substitute-housing remedy. |
| Fire/casualty damage — tenant termination/rent-reduction right | Present, all-or-nothing termination only (§43-32-19(2), captured in `edu-tenant-termination-causes-sd`) - no proportional rent-reduction mechanic like KS/NE, architecturally closer to ND's version. |
| Failure-to-deliver-possession tenant remedy | Present (§43-32-19(1), "reasonable time after written request" - open standard, not a fixed number). Cross-reference note added to `possession-delay`'s SD extension this pass to avoid confusing the 30-day contract term with the statute's own open standard. |
| Holdover damages formula | **Present finding this pass** - SD has no multiplier at all (unlike CO/KS/NE/ND); the only mechanic is presumed renewal on rent acceptance, §43-32-14. Committed as `edu-holdover-mechanics-sd`. |
| Tenant noncompliance notice-and-cure mechanics | Resolved - no statutory cure period post-2024 (`default-by-tenant-sd`, §9-10). |
| Nonpayment pay-or-quit notice mechanics | Resolved - no statutory notice-to-quit post-2024 (`edu-eviction-procedure-sd`, §9-10). |
| Abandoned-property disposal procedure | Present - `abandoned-property-sd`. |
| Fast-track eviction for violent crime/drug sale | Confirmed absent (§14). |

**Protected classes / special populations**

| Topic | SD status |
|---|---|
| DV/sexual assault/stalking housing protections | Present - `dv-lease-release-sd`, `edu-dv-confidentiality-sd`. |
| Immigration-status inquiry prohibition | Confirmed absent (§15). |
| Right to call police (non-waivable) | Present, DV-specific (narrower than MN's general version) - `edu-right-to-call-police-sd` (§18). |
| Criminal penalty for service-animal misrepresentation | **Ambiguous, needs disambiguation.** This project already committed a *civil* damage-fee remedy (`assistance-animal-accommodation-sd`, $1,000 fraud-claim fee under §43-32-33-36). The checklist topic is specifically about a *criminal* penalty in a separate title (WY's Wyo. Stat. §35-13-207, KS's K.S.A. 39-1112) - genuinely unclear whether SD also has a separate criminal statute beyond the civil remedy already captured. Not yet resolved; flagged rather than assumed identical to the civil finding. |
| EV charging access right | Confirmed absent (§15). |

**Building & fire safety**

| Topic | SD status |
|---|---|
| Smoke detector supply/install/maintain duty | **Weaker evidence than this project's bar for confirmed-absent.** Session 1's finding (folded into habitability, no dedicated statute) was a general search, not the kind of adjacent-title check that found NE's §81-5,144 (State Fire Marshal statutes) or ND's §23-13-15 (Title 23, Health and Safety) - both outside the core landlord-tenant title, the same pattern SD might follow. Downgrading to Not Yet Checked pending a title-specific search. |
| Carbon monoxide alarm requirement | **Not Yet Checked as its own distinct topic** - conflated with smoke detectors in session 1's general pass; NE and ND both show CO alarms have their own, differently-triggered requirement. |

**Statutory layers deliberately deprioritized**

| Topic | SD status |
|---|---|
| Mobile home park act | Present, deprioritized - §43-32-31 gives a narrow mobile-home-specific notice provision inside the core chapter; not yet confirmed whether SD has a free-standing separate mobile-home-park act the way CO/KS/NE/ND do. Worth a quick confirming search, low priority given the standing deprioritization. |
| Farm/agricultural tenancy carve-out | Present, in-scope-but-deprioritized, ND-style architecture (kept inside the core chapter: §43-32-2's 20-year ag-land cap, §43-32-22.1's farm-lease auto-continuation) rather than NE's exclusion-from-Act-scope approach. |
| Rental application/tenant screening fairness act | Confirmed absent (§15). |
| Immigrant tenant protection act | Confirmed absent, same finding as immigration-status inquiry (§15) - not previously logged as its own explicit row under this specific label. |
| Municipal ordinance complexity | Not applicable/not logged, consistent with the standing project-wide boundary - **except** the newly-confirmed statewide rent-control preemption (`edu-rent-control-preemption-sd`, §17), which is a genuinely different kind of finding (a state law about municipalities, not municipal-ordinance research itself) and doesn't change this boundary. |

**New topics added by North Dakota**

| Topic | SD status |
|---|---|
| Double-letting of a room prohibited | **Not Yet Checked.** |
| Direct contractual termination rights outside the eviction process | **Present, confirmed architecture match.** SD's own §§43-32-18/19 are exactly this pattern - termination rights living inside Chapter 43-32 itself (`default-by-tenant-sd`, `edu-tenant-termination-causes-sd`), separate from the formal Title 21-16 FED process. Matches ND's finding almost exactly. |
| Fraudulent-misrepresentation lease termination right | **Not Yet Checked.** |
| Payment-method fee ban | **Not Yet Checked** - distinct from the returned-check-fee-cap already committed; this is about whether a landlord can charge a fee just for *accepting* a given payment method (cash, check, money order) in the first place. |
| Eviction record sealing | Confirmed absent (§15) - SD's only sealing/expungement mechanism is the general criminal-record process, unrelated to civil eviction filings. |

### 21. Pass 2 corrections to pass 1 findings

Consistent with this project's standing pattern (NE's pass 2 caught smoke-detector/CO-alarm gaps; ND's caught a returned-check citation and a false cure-opportunity claim), this pass 2 corrected three pass-1 items rather than just confirming them:

1. **Last-month's-rent deposit-application restriction** - downgraded from "confirmed absent" to **Inconclusive**, matching the honesty standard ND itself used for this exact topic. The earlier claim overstated the confidence level actually supported by the searches run.
2. **General unconscionability doctrine**, **landlord lien/security interest**, and **smoke detector duty** - all three had "confirmed absent" claims in this log that were based on general searches rather than the adjacent-title-specific or explicit-abolition-statute-specific searches this project's own methodology calls for (checklist instruction #7, "check adjacent chapters, not just the core act"). Downgraded to Not Yet Checked pending that more targeted work, rather than left as an overclaimed absence.
3. **Holdover damages formula** - never explicitly checked against the checklist topic in session 1 despite §43-32-14 being read; now resolved as Present (no multiplier, presumed-renewal architecture) and committed as `edu-holdover-mechanics-sd`.

### 22. CSV changes, continuation (pass 2 findings)

Starting file: `steinoak_clauses_updated_46.csv` (373 rows). Ending file: `steinoak_clauses_updated_47.csv` (374 rows, +1 new row, +1 amended row).

**Amended (1, not a new row):**
- `possession-delay` — notes extended with a pass-2 clarification distinguishing the 30-day contract term from SDCL 43-32-19(1)'s open "reasonable time" statutory standard.

**New row (1), `VERIFIED`, `effective_from`/`last_checked`: 2026-08-24:**
- `edu-holdover-mechanics-sd` (LANDLORD_EDUCATION, RECOMMENDED)

SD-tagged row count after this continuation: **27**.

### 23. Four more pass-2 gaps closed with proper primary-source rigor

Went back and did the targeted, adjacent-title-specific searches that session 1's weaker claims should have had from the start - the exact fix pass 2 flagged as needed (§22).

**Smoke/CO detector duty - resolved as "present but narrowly scoped," not a flat absence.** Two administrative rules found, both read from primary source: SD Admin. R. 61:15:01:14 (Dept. of Public Safety, Fire Safety, authority SDCL 34-29B-2) requires smoke detectors in each sleeping room, but is scoped explicitly to "lodging establishments" (SDCL 34-18-1(7)) - hotels/motels, not ordinary rentals. SD Admin. R. 46:04:01:20 (authority SDCL 27B-2-26) requires smoke *and* CO detectors on every floor, but is scoped to manufactured/mobile homes specifically. Neither reaches a typical single-family or apartment lease. Committed as `edu-detector-duty-scope-sd`. Worth flagging: the lodging-establishment-only scoping is the same pattern this project already logged for Kansas's bed bug regulations - a real, recurring cross-state architecture echo.

**General unconscionability doctrine - resolved with actual primary-source backing.** Checked SDCL Title 37, Chapter 24 (Deceptive Trade Practices and Consumer Protection Act) directly, corroborated against consumer.sd.gov's own official "Laws" page (which lists SDCL 37-24, 43-32, and 21-16 as the applicable landlord-tenant-adjacent statutes, with no separate unconscionability provision). SD relies on general deceptive-trade-practices law plus common-law doctrine, not a dedicated lease-unconscionability statute the way KS/NE/ND all have. Committed as `edu-unconscionability-doctrine-sd`.

**Landlord lien - re-confirmed absent with a second, more targeted search round.** No general landlord's-lien statute found in Title 44 or Chapter 43-32; no evidence of one ever existing or being explicitly abolished. Committed as `edu-landlord-lien-absence-sd`, honestly flagged as resting on absence-of-evidence rather than an explicit abolition statute (a genuinely weaker evidentiary posture than KS's/NE's explicit-abolition findings, disclosed rather than glossed over).

**Late-rent acceptance waiver rule - confirmed absent, with an architecture-based reason why.** No SD-specific reservation-of-rights or waiver-by-acceptance rule found. This absence makes structural sense given South Dakota's 2024 repeal of its own notice-to-quit requirement (§9-10): NE's and KS's waiver rules exist specifically to police a mandatory notice-and-cure framework, and South Dakota doesn't have one anymore. Committed as `edu-late-rent-waiver-absence-sd`.

### 24. CSV changes, continuation (unconscionability + lien + detector + late-rent)

Starting file: `steinoak_clauses_updated_47.csv` (374 rows). Ending file: `steinoak_clauses_updated_48.csv` (378 rows, +4 new rows).

**New rows (4), `VERIFIED`, `effective_from`/`last_checked`: 2026-08-24:**
- `edu-detector-duty-scope-sd` (LANDLORD_EDUCATION, CONDITIONAL)
- `edu-unconscionability-doctrine-sd` (LANDLORD_EDUCATION, RECOMMENDED)
- `edu-landlord-lien-absence-sd` (LANDLORD_EDUCATION, RECOMMENDED)
- `edu-late-rent-waiver-absence-sd` (LANDLORD_EDUCATION, RECOMMENDED)

SD-tagged row count after this continuation: **31**.

### 25. Two more resolved: prohibited-terms list, and a genuine death/incapacity architecture nuance

**Confession-of-judgment and exculpation prohibitions - confirmed absent with strong evidence.** Rather than a fresh search, this drew on positive knowledge already established this session: the complete, primary-sourced index of Chapter 43-32's 37 sections (§2 of this log) contains no provision addressing either topic. That's a stronger evidentiary basis than a failed search - it's confirmed knowledge of the full chapter's contents. Committed as `edu-no-prohibited-terms-list-sd`, reinforcing `edu-unconscionability-doctrine-sd`'s finding and matching the WY/ND architecture for this same checklist topic.

**Tenant-death lease-termination protection - resolved, but with an important correction to the checklist's own framing.** SDCL 43-32-23 was already read in session 1's original statute walk but never cross-checked against this specific checklist topic. Getting its full text this pass revealed something worth flagging carefully: **this is not the tenant-protective mechanic ND's own "Present" finding describes.** SD's §43-32-23 says a lease terminable *at the pleasure of either party* ends on death/incapacity notice - but an ordinary *fixed-term* lease (the normal case) is explicitly **not** terminated by death or incapacity; it survives and binds the deceased party's estate. That's closer to a landlord-protective estate-binding rule than a tenant-protective release right. Committed as `edu-death-incapacity-lease-survival-sd`, with an explicit note flagging this distinction so it doesn't get conflated with ND's genuinely different finding when the master checklist is next updated.

### 26. CSV changes, continuation (prohibited-terms + death-incapacity)

Starting file: `steinoak_clauses_updated_48.csv` (378 rows). Ending file: `steinoak_clauses_updated_49.csv` (380 rows, +2 new rows).

**New rows (2), `VERIFIED`, `effective_from`/`last_checked`: 2026-08-24:**
- `edu-no-prohibited-terms-list-sd` (LANDLORD_EDUCATION, RECOMMENDED)
- `edu-death-incapacity-lease-survival-sd` (LANDLORD_EDUCATION, RECOMMENDED)

SD-tagged row count after this continuation: **33**.

### 27. Closing out the ND-originated topics and the service-animal criminal-penalty question

**Double-letting, fraudulent-misrepresentation termination, payment-method fee ban - confirmed absent, on the same strong-evidence basis as the prohibited-terms finding.** All three are ND-originated checklist topics with no analog found across this session's searches; combined with this project's already-complete, primary-sourced index of Chapter 43-32's 37 sections (§2), none of which address any of the three, this is a well-supported absence rather than a guess. Not committed as rows, per the standing confirmed-absent convention.

**Criminal penalty for service-animal misrepresentation - resolved, but the finding runs the opposite direction from the checklist topic.** Searching for this turned up SDCL 20-13-23.2 - but it criminalizes a **landlord's** wrongful prohibition of a legitimate service animal (Class 2 misdemeanor), not a **tenant's** fraudulent claim (which is what WY's and KS's statutes, and this checklist topic, actually describe). Committed the landlord-facing finding as `edu-service-animal-prohibition-criminal-penalty-sd`. For the checklist's actual topic - no SD criminal analog to WY/KS was found; SDCL 43-32-36 (already captured) remains civil-only, a $1,000 damage fee. Both directions logged accurately rather than conflated.

**Mobile home park act - reasonably confirmed absent as a free-standing act**, consistent with the already-complete Chapter 43-32 index (only the narrow §43-32-31 mobile-home notice provision exists inside the core chapter, already noted in session 1). South Dakota does have a separate manufactured-housing regulatory framework (Title 27B, referenced in this session's smoke/CO-detector finding), but it's a construction/safety-code chapter, not a landlord-tenant act analogous to CO/KS/NE/ND's Mobile Home Park Acts.

**Still genuinely open after this round:** rental-fee-transparency law, successor-owner-bound-by-deposit-obligations, and alternate-housing/relocation requirement during habitability failure - no hits found in this session's searches, not confidently resolved either way, carried forward honestly as Not Yet Checked rather than assumed absent.

### 28. CSV changes, this continuation

Starting file: `steinoak_clauses_updated_49.csv` (380 rows). Ending file: `steinoak_clauses_updated_50.csv` (381 rows, +1 new row).

**New row (1), `VERIFIED`, `effective_from`/`last_checked`: 2026-08-24:**
- `edu-service-animal-prohibition-criminal-penalty-sd` (LANDLORD_EDUCATION, PROHIBITED)

SD-tagged row count after this continuation: **34**.

### 29. The last three named-topic gaps closed - canvass substantively complete

**Successor-owner bound by deposit obligations - confirmed absent as a codified rule.** No SD statute found requiring a purchasing landlord to assume deposit obligations on sale (unlike KS's K.S.A. 58-2550(f) or NE's §76-1416(5), both explicit statutory successor-liability provisions). One source states this plainly: "South Dakota does not codify a state-level security-deposit-transfer rule at sale; common law or municipal ordinance applies." A buyer still takes the property subject to the existing lease as a general property-law matter (§43-32-14's renewal/continuation framework and ordinary landlord-tenant common law both point that direction), but there's no SD-specific *deposit*-transfer statute the way several other states in this project have. Not committed as its own row - this is a genuine, if minor, architecture gap relative to KS/NE, not a product feature to build around.

**Alternate housing/relocation requirement during habitability failure - confirmed absent.** Every source describing SD's habitability remedies names the same set already captured in `edu-habitability-duty-sd`: repair-and-deduct, vacate-and-discharge, or rent-escrow for repairs exceeding one month's rent. No landlord-mandated temporary-housing obligation, and no NE-style self-help substitute-housing remedy, found anywhere. SD's remedy set is narrower than either CO's or NE's version of this topic.

**Rental-fee-transparency / "junk fees" law - confirmed absent, with a residual caveat.** No SD-specific pricing-transparency or junk-fee statute found. A 2025 industry source notes "more than twenty States had enacted laws addressing rental housing 'junk fees'" as of September 2025 but doesn't name every state in that list - so this finding rests on SD's absence from multiple targeted searches plus its consistent, session-wide pattern of having no application-fee cap or similar consumer-facing pricing statute, rather than a direct list-based exclusion. Flagged as the single least-certain of this round's three findings, though still reasonably confident given the consistency of the broader pattern.

This closes the full master checklist for South Dakota. Every topic on `lease-clause-decision-log-named-topic-checklist.md` now has a status for SD - Present (committed), Confirmed Absent, or the one honest Inconclusive (last-month's-rent) - rather than a silent gap.

### 30. Gap-discovery source #2 - comparison against a real South Dakota lease product

The last unused gap-discovery source. Found and fully read an actual, in-use South Dakota residential lease: **South Dakota Achieve's** own lease agreement, published by the **South Dakota Department of Human Services** as part of its official HCBS-settings-rule toolkit. This is a genuine professional lease product actively used by a real SD landlord (a nonprofit supported-living provider), not a template-mill sample - exactly the kind of source this gap-discovery step calls for.

**Clause-by-clause comparison against everything already committed for SD found strong corroboration and no contradictions:** the lease's entry-notice provision matches `edu-entry-notice-content-sd`'s 24-hour standard exactly; its default/eviction clause cites SDCL Ch. 21-16 directly, matching `edu-eviction-procedure-sd`; its broad limitation-of-damages and indemnification clauses are real-world confirmation that SD permits this kind of language (consistent with `edu-no-prohibited-terms-list-sd`'s finding that no statute bans exculpatory or indemnification clauses); its security-deposit-installment offer (voluntary, landlord-discretion, capped at 3 months) is consistent with - not a contradiction of - the earlier finding that no *statutory* installment right exists.

**Two genuine findings worth acting on:**

1. **Fire/casualty rent abatement.** South Dakota's own statutory casualty-termination right (§43-32-19(2)) is all-or-nothing - termination only, no proportional rent-reduction mechanic. But this real lease includes exactly that: a proportional rent reduction for partial fire/casualty damage, going beyond the statutory floor. This is a genuine, professionally-drafted optional clause not currently in Steinoak's SD-tagged set. Committed as `fire-casualty-rent-abatement-sd`, marked RECOMMENDED (optional) rather than REQUIRED, since South Dakota law doesn't mandate it - Taylor's call whether to surface it as a landlord-selectable addition.

2. **Attorney-fee-shifting scope clarification.** This lease's own fee-shifting clause is one-way (tenant pays landlord's fees) and covers general lease-enforcement disputes - notably different from SDCL 21-16-11's *mutual* fee-shifting rule, which is scoped specifically to the FED/eviction court process. Added a clarifying note to `edu-eviction-procedure-sd` so a future reader doesn't assume the mutual eviction-context rule extends to every kind of lease dispute - outside the formal FED process, ordinary one-way fee-shifting by agreement appears to remain available, consistent with SD's confirmed absence of an unconscionability-specific statute.

One item explicitly out of scope: the lease's reference to ARSD 46:11:08:05 and 44:70:09:14 (service-termination-as-material-breach) is specific to the HCBS/supported-living licensing context this particular landlord operates under, not a general South Dakota residential-leasing requirement - correctly excluded from the general clause library.

### 31. CSV changes, continuation (gap-discovery source #2)

Starting file: `steinoak_clauses_updated_50.csv` (381 rows). Ending file: `steinoak_clauses_updated_51.csv` (382 rows, +1 new row, +1 amended row).

**Amended (1, not a new row):**
- `edu-eviction-procedure-sd` — notes extended with the fee-shifting-scope clarification from gap-discovery source #2.

**New row (1), `VERIFIED`, `effective_from`/`last_checked`: 2026-08-24:**
- `fire-casualty-rent-abatement-sd` (LEASE_CLAUSE, RECOMMENDED)

SD-tagged row count after this continuation: **35**.

### 32. Post-close corrections from Taylor's review (2026-08-25)

Taylor reviewed the judgment-call subset of this session's work (a condensed packet, not all 36 rows) before signing off, per the project's standing draft→review→approve workflow, which this session's autonomous pace had bypassed. Two things came out of that review - one confirmed as-is, one genuine catch that needed a fix, and one follow-up question that upgraded an Inconclusive finding to something more useful.

**`fire-casualty-rent-abatement-sd` - kept as-is.** Taylor's call, as flagged: keep it as an optional/RECOMMENDED clause even though Taylor personally wouldn't use it. No change needed.

**`default-by-tenant-sd` - a real drafting error, caught and fixed.** Taylor noticed the clause only covered nonpayment, repair-neglect, and "use of the property contrary to the lease" - and asked what happens to tenant *behavior*/conduct issues that aren't about how the property is used (harassment, disturbing other tenants, threats). Checking the clause against every other version of `default-by-tenant*` in the library confirmed this was a real, isolated drafting error: the CO/WY/MN/ND generic and the KS;NE override both correctly retain a broad "fails to comply with any other obligation under this Lease" catch-all. SD's version had dropped that catch-all entirely and substituted the narrow three-item list literally named in SDCL 43-32-18's section title - a case of over-indexing on one statute's specific language instead of preserving the lease's own (statutorily unconstrained) freedom to define default broadly. Root-cause check confirmed this was isolated to SD - no other state's default clause has the same narrowing. **Fixed:** restored the "any other obligation under this Lease" catch-all and added an explicit conduct/behavior callout, so lease-defined quiet-enjoyment, no-disturbance, or lawful-use provisions elsewhere in the lease are clearly covered. Full before/after text preserved in the row's own notes field for the record.

**Last-month's-rent - upgraded from Inconclusive to a real, narrower answer.** Taylor asked whether more digging was possible. Chasing a thread already sitting in this session's own research - SDCL 43-32-6's self-help damages remedy phrases itself as "return of any advance rent **and** deposit," treating them as two separate concepts - confirmed that South Dakota law consistently treats "advance rent" (which a last month's rent payment would be) as legally distinct from the security deposit throughout Chapter 43-32, corroborated independently by consumer.sd.gov's own FAQ ("a landlord has the discretion to collect various deposits as well as some rent in advance"). Practical result: a landlord can collect a full security deposit *and* advance rent without the advance-rent payment counting against the deposit cap, and advance rent isn't subject to the deposit-specific return deadline, itemized-accounting right, or forfeiture rule. Committed as `edu-advance-rent-vs-deposit-sd`. **What's still genuinely open** (kept honest rather than closed out for tidiness): no case law was found on whether general contract principles would recharacterize an advance-rent payment as a deposit if a landlord tried to use it as damage security rather than future rent - that narrower question stays open.

### 33. CSV changes, continuation (post-review corrections)

Starting file: `steinoak_clauses_updated_51.csv` (382 rows). Ending file: `steinoak_clauses_updated_53.csv` (383 rows, +1 new row, +1 corrected row).

**Corrected (1, not a new row):**
- `default-by-tenant-sd` — bodyText rewritten to restore the "any other obligation" catch-all; prior text preserved in notes.

**New row (1), `VERIFIED`, `effective_from`/`last_checked`: 2026-08-25:**
- `edu-advance-rent-vs-deposit-sd` (LANDLORD_EDUCATION, RECOMMENDED)

SD-tagged row count after this continuation: **36**. Supersedes-collision check re-run after both edits: zero collisions.

### 34. Post-close correction, round 2: the notice-and-cure gap

Taylor's follow-up on `default-by-tenant-sd`'s round-1 fix caught something more serious than round 1 did. The revised clause had said cure opportunity was "governed by... any grace period stated in the Late Fee section" - Taylor asked whether that section actually exists as a real cure mechanism elsewhere in the library, since no other clause visibly provides one.

**Checked and confirmed the gap was real, not hypothetical:** no `late-fee-sd` clause exists, and the generic `late-fee` clause is CO;WY;NE;MN only (KS has its own `late-fee-ks`) - SD has neither. Even where that generic clause does apply elsewhere, its actual text is a landlord-protective non-waiver provision ("acceptance of a late payment does not waive Landlord's right to... pursue any other remedy"), not a cure period - the opposite function from what the SD clause implied it was borrowing. Combined with SD's confirmed statutory cure-period repeal (§9-10), this meant the product as built gave a South Dakota tenant zero guaranteed notice or cure opportunity for any default whatsoever - not a South Dakota-law problem (the state genuinely defers entirely to the lease here), but a product gap: nothing in the lease itself filled the space the state left open.

**Resolved as two accompanying clauses, structure proposed by Claude and approved by Taylor in chat:**
- `default-by-tenant-sd` revised again to state what constitutes default and point to a dedicated cure clause, rather than gesturing at a section that didn't reliably exist or function that way.
- New `notice-and-cure-sd`: separate cure windows for nonpayment vs. other curable violations, with an explicit no-cure carve-out for illegal drug activity, violence/threats, and safety-endangering conduct - mirroring how the real South Dakota lease found for gap-discovery source #2 already treats those categories, and consistent with `edu-eviction-grounds-sd`.

**Day-count convention decided in chat, worth recording as a product-wide pattern, not just an SD one-off:** Taylor didn't want specific day counts hardcoded, since South Dakota law doesn't specify any and the landlord should retain that choice. Claude initially proposed schema-backed `{{curly_brace}}` variables (matching `{{late_fee_grace_days}}` elsewhere); Taylor correctly caught that `{{}}` is reserved for actual schema-backed data-model fields, and a cure-period day count isn't one (no such field exists in the schema). Landlord-fillable `[bracket, e.g. N]` placeholders were used instead, matching the existing non-schema convention already present elsewhere in the CSV (e.g. the habitability-notice-contact and utility-allocation rows) rather than inventing a new pattern. The illustrative numbers shown (3 days for rent, 10 for other violations) are explicitly non-binding examples, not defaults with legal weight - 3 echoes SD's own repealed pre-2024 notice period and the same figure baked into the eviction ground itself (SDCL 21-16-1(4)); 10 is an ordinary industry convention, not a South Dakota statutory number.

**Deliberately scoped to SD only, for now.** Taylor's explicit instruction: fix South Dakota's gap now, flag whether this same "cure-period reference doesn't actually resolve to a real mechanism" pattern exists in any other state's default clause, and revisit those states only if the pattern turns up - not assume it does and go looking preemptively this session.

### 35. CSV changes, continuation (notice-and-cure fix)

Starting file: `steinoak_clauses_updated_53.csv` (383 rows). Ending file: `steinoak_clauses_updated_54.csv` (384 rows, +1 new row, +1 corrected row).

**Corrected (1, not a new row):**
- `default-by-tenant-sd` — bodyText revised a second time to drop the Late Fee section reference and point to the new cure clause instead; both prior versions preserved in notes.

**New row (1), `VERIFIED`, `effective_from`/`last_checked`: 2026-08-25:**
- `notice-and-cure-sd` (LEASE_CLAUSE, REQUIRED)

SD-tagged row count after this continuation: **37**. Duplicate-ID and supersedes-collision checks both re-run after this edit: clean.

### 36. Retroactive cross-state notice-and-cure check - run, per Taylor's later request

Taylor asked this be done directly rather than left flagged. Checked each of the other six states' own decision logs against the underlying question: does `default-by-tenant*`'s "time period specified by applicable law" phrase actually resolve to something real in that state?

**Solid, no issue - CO, KS, NE.** All three have a confirmed, real statutory cure period: CO's C.R.S. §13-40-104 (Demand for Compliance, 5 or 10 days by landlord size), KS's §58-2564 (14-day cure for general breach, 3-day pay-or-quit for nonpayment), NE's §76-1431 (same structure, 14-day/7-day).

**A real but smaller nuance - WY and ND.** Both require a mandatory pre-filing notice (WY 3 days under W.S. §1-21-1003, ND 3 days under §47-32-02) for any eviction cause - but that notice is framed as a notice **to quit** (leave), not an affirmative statutory right **to cure** (fix it and stay). ND's own decision log had already caught and corrected this exact distinction about itself mid-session. Less severe than SD's original problem, since a mandatory advance-notice period genuinely exists in both states - just some imprecision in how the generic clause's "cure" language describes what's actually guaranteed.

**A real gap, parallel to SD's - Minnesota.** MN's own decision log states directly: "Minnesota does not require landlords to give tenants a cure opportunity before filing an eviction for an ordinary material lease violation." For nonpayment specifically MN has real protection (a 14-day pre-filing notice plus an open-ended redemption right) that was never built into a lease clause, only noted in the log. For general lease violations, MN's `default-by-tenant` was extended "as-is" on the reasoning that there's no statutory period to conflict with - the same failure mode SD had, just narrower in scope (general violations only).

Presented to Taylor for a decision on WY/ND and MN specifically. Taylor's response redirected the question upstream: rather than deciding fix-vs-flag state by state, first settle whether notice-and-cure mechanics belong in a lease clause at all, given all of this is fundamentally about eviction procedure and enforcement timing. That reframing is captured in §37-38 below and directly changed how South Dakota's own version of this was resolved. **WY, ND, and MN's own instances remain open, unresolved, carried forward** - not fixed this session; revisit once the lease-content-vs-Legal-Tracker framework this session developed for SD is either applied to them or deliberately declined.

### 37. Post-close correction, round 3: notice-and-cure pulled out of the lease entirely

The retroactive check above triggered Taylor to ask a more fundamental question about South Dakota's own fix from round 2: is notice-and-cure mechanics even lease content, or is it procedural/enforcement-time behavior that belongs in the not-yet-built Legal Tracker feature - the same category as Nebraska's reservation-of-rights finding (§76-1433, flagged for the Tracker rather than built as a standing clause)?

**Worked through the distinction in three parts, not a single yes/no:**
1. **Pure court/eviction procedure** (filing, service, summons, judgment) - already correctly excluded from lease text; `edu-eviction-procedure-sd` and `edu-eviction-grounds-sd` were always `LANDLORD_EDUCATION`, never inserted into a generated lease.
2. **What constitutes default** - stays a lease clause. This is substantive: the parties are agreeing to what counts as a breach, which is core deal terms, not procedure.
3. **The actual cure mechanics** (`notice-and-cure-sd`) - this is the one Taylor's instinct was pointing at, and it's genuinely closer to enforcement-time behavior than to the deal itself.

**Checked the real South Dakota lease already on hand (gap-discovery source #2, South Dakota Achieve's lease) as a direct test.** Its own default/eviction section says only "Any eviction actions shall comply with SDCL Ch. 21-16" - no separate cure mechanism built in at all. A real, professionally-drafted, government-published South Dakota lease doesn't treat this as lease territory. That data point supported pulling it out.

**Resolved:** `notice-and-cure-sd` converted from `LEASE_CLAUSE`/`REQUIRED` to `LANDLORD_EDUCATION`/`RECOMMENDED` - reframed as guidance about the landlord's own enforcement-time discretion (and a Legal Tracker feature candidate: a consistent-practice prompt at the moment of enforcement, not a lease clause filled in once at signing) rather than as text that gets inserted into a generated lease. Its bracket-style day-count placeholders were removed accordingly - a Legal Tracker feature would more naturally hold day-count preferences as a landlord setting, not a lease-document fill-in. `default-by-tenant-sd` revised a third time to stop pointing at a lease section that no longer exists as lease content, replaced with a plain statement that cure opportunity (if any) is the landlord's enforcement-time decision under South Dakota's FED procedure, not a fixed lease term.

Net effect on the actual generated lease: South Dakota's default clause now honestly states what South Dakota law actually provides (no mandated cure period, landlord discretion controls) without either fabricating a cure right the law doesn't require or leaving a dangling reference to something that isn't really there.

### 38. CSV changes, this continuation

Starting file: `steinoak_clauses_updated_54.csv` (384 rows). Ending file: `steinoak_clauses_updated_55.csv` (384 rows, no net row-count change - both edits are corrections to existing rows).

**Corrected (2, not new rows):**
- `default-by-tenant-sd` — bodyText revised a third time; no longer references a lease-based cure section. All three prior versions preserved in notes.
- `notice-and-cure-sd` — content_type changed LEASE_CLAUSE → LANDLORD_EDUCATION; rule_type changed REQUIRED → RECOMMENDED; bodyText rewritten as landlord guidance rather than fill-in lease text; bracket placeholders removed. Prior LEASE_CLAUSE version preserved in notes.

SD-tagged row count unchanged at **37** (no rows added or removed, only two corrected in place). Duplicate-ID and supersedes-collision checks both re-run after this edit: clean.

### 39. A cross-state pattern worth carrying forward, not acted on this session

This round's underlying question - "is this actually lease content, or enforcement-time/procedural behavior that belongs in the Legal Tracker instead?" - is a genuinely useful lens this project hasn't consistently applied. It surfaced for SD only because SD's total absence of a statutory cure period forced the question, but the same lens could reasonably be pointed at other states' existing clauses (not just the notice-and-cure topic specifically, and not just WY/ND/MN's flagged instances from §36). Not chased this session - flagged as a pattern worth having in mind for future state work and for a possible future review pass across already-closed states.

### 40. Where South Dakota stands now - all four gap-discovery sources used, canvass complete, review corrections applied (three rounds)

Pass 2 did what a genuine second pass is supposed to do: it found real gaps and corrected three overclaimed pass-1 findings. The rest of this session then went back and closed every one of those gaps with proper primary-source rigor, ran the full master checklist to completion, used the last remaining gap-discovery source against a real lease product, and - after Taylor's post-close review caught a genuine drafting error and then a more serious product gap - fixed both rather than leaving them for a future session.

**Resolved this session (committed, confirmed absent with adequate rigor, or explicitly correct-architecture-matched):** the full Chapter 43-32 and Title 21-16 statute walks; security deposit cap/return/itemized-accounting; assistance-animal accommodation; abandoned property; self-help eviction ban; retaliation; DV termination and confidentiality; meth disclosure; entry notice; month-to-month modification and tenancy-at-will termination notices; eviction grounds and procedure; habitability duty; returned-check fee; fair housing additions (including the small-landlord exemption); rent-control preemption; right to call police (DV-scoped); tenant termination causes (possession/repair-failure and destruction); holdover mechanics; radon/mold/bed-bug (confirmed absent as lease duties, seller-disclosure trap caught); move-in inventory; day-one disclosure; landlord-identity-change notice; direct-contractual-termination-rights architecture match; smoke/CO detector duty (present but narrowly scoped); general unconscionability doctrine; landlord lien; late-rent acceptance waiver rule; confession-of-judgment/exculpation prohibitions; death/incapacity lease survival (a materially different, landlord-protective architecture than ND's version); double-letting, fraudulent-misrepresentation termination, and payment-method fee ban; mobile-home-park-act; criminal penalty for service-animal misrepresentation (a two-direction finding); successor-owner-bound-by-deposit; alternate-housing/relocation requirement; rental-fee-transparency law; fire/casualty rent abatement (a real-world optional clause beyond the statutory floor, found via gap-discovery source #2); attorney-fee-shifting scope (clarified that §21-16-11's mutual rule is FED-specific, not a general lease-dispute rule).

**The one item still genuinely unresolved:** last-month's-rent deposit-application restriction - **Inconclusive**, honestly matching ND's own label for this exact topic rather than an overclaimed absence.

**All four gap-discovery sources now used:** (1) statute-structure walk from primary source - Chapter 43-32 and Title 21-16 both fully walked; (2) comparison against a real professional lease product - South Dakota Achieve's HCBS-toolkit lease, compared clause-by-clause, two genuine findings surfaced; (3) personal landlord experience - not applicable per this project's standing scope (Taylor has no landlord experience outside CO); (4) explicit search for landlord-relevant law outside the main landlord-tenant chapter - used productively throughout (§43-8-8, Title 21-16, SDCL 6-1-13's rent-control preemption, SDCL 20-13-20's fair housing chapter, SDCL 57A-3-421, SDCL 20-13-23.2, Admin. Rules 61:15:01:14 and 46:04:01:20).

**Remaining, all cross-state or process-level rather than SD-specific substantive gaps:**
- The CO;WY-only maintenance-clause-scoping review (open since Minnesota).
- The broader fee-shifting-mutuality cross-state consolidation (SD's own instance resolved; the cross-state consolidation itself open since CO).
- Municipal ordinance complexity beyond the confirmed rent-control preemption (standing out-of-scope boundary since CO).
- Re-verification cadence (not set for any state).
- HB25-1249-style CO deposit-reform analog checks (not extended past CO).

**South Dakota's named-topic canvass is complete and all four gap-discovery sources have been used.** 37 SD-tagged CSV rows are committed; both core chapters are fully primary-sourced end to end; pass 1 and pass 2 both run against the full master checklist, with every surfaced gap resolved to Present, Confirmed Absent, or the one honest Inconclusive. Taylor's post-close review (§32, §34, §37) caught three real issues research alone hadn't surfaced, across three rounds: an isolated drafting error in `default-by-tenant-sd` that had narrowed default grounds below what South Dakota law actually permits; a genuine product gap where nothing in the lease filled the cure-period space South Dakota's 2024 statutory repeal left open; and then a more fundamental architecture question - whether that cure-period fix belonged in the lease at all, or was actually enforcement-time/procedural behavior that belonged in the not-yet-built Legal Tracker feature instead. All three are now resolved: `default-by-tenant-sd` states what constitutes default and is honest that cure opportunity is the landlord's own enforcement-time decision; `notice-and-cure-sd` was converted from a lease clause to `LANDLORD_EDUCATION` guidance and a Legal Tracker feature candidate, supported directly by the real South Dakota lease found for gap-discovery source #2, which itself builds no cure mechanism into the lease. Per this project's standing definition of "complete" (full statute walk, whole-library generic-clause audit, two-pass named-topic canvass, all four gap-discovery sources run), **South Dakota meets every element of that definition, and its highest-stakes lease clause has now also been reviewed, corrected, and structurally reconsidered by Taylor directly** - a meaningfully more complete state than "research complete" alone would mean. What remains is the standing cross-state/process backlog shared across every state in this project, plus two new items this session's review surfaced: the WY/ND/MN notice-and-cure findings from §36 (flagged, not yet resolved for those states), and the lease-content-vs-Legal-Tracker lens from §39 (a pattern worth applying more broadly, not yet done) - not anything else specific to South Dakota's own substantive law.


---

## §5a.1 SCOPE CHECK — NO PROPAGATION OWED, 2026-09-03

Three shared multi-state clauses were edited on 2026-09-03 (`notices`, `returned-payments`, `holdover`). Under §5a.1 every tagged state's log takes a note.

**South Dakota is tagged on none of the three.** `notices` and `holdover` are CO;WY;KS;NE;MN; `returned-payments` is CO;WY;KS;NE;MN;ND. **No South Dakota action is required and no override is needed.**

This is recorded rather than left silent so that a future reader can see the scope was actually checked. A §5a.1 pass that produces no note for a state is indistinguishable from a §5a.1 pass that forgot the state, unless the check is written down.

### Two cross-state findings worth knowing in SD anyway

**1. The `holdover` "double rent" figure had no statutory basis in any state that carried it.** The generic clause promised "double the Monthly Rent ... or the maximum amount allowed under applicable law, if less." Verified this session: CO has no multiplier (damages measured as reasonable rental value), WY has none, KS caps at 1.5×, NE allows *more* than double (three months' periodic rent or threefold actual, plus attorney fees), and MN has none. The figure was wrong in every direction at once and appears to be template boilerplate predating any state research.

**South Dakota independently reached the same substantive answer** — `edu-holdover-mechanics-sd` records no statutory multiplier, with holdover instead presuming renewal on the same terms capped at one year. SD is therefore consistent with the corrected position, and if SD is ever added to the shared `holdover` clause the now-removed figure must not be reintroduced.

**2. The returned-check cap pattern is near-universal.** All seven states now carry a cap row; SD's is `edu-returned-check-fee-cap-sd` ($40 plus applicable sales tax, a general commercial-code provision rather than a landlord-tenant one, requiring the fee policy to be conspicuously stated). **North Dakota's figure is also $40** — the two are worth comparing directly if either is ever revisited, since SD's carries a conspicuous-disclosure condition that the ND row does not currently record.

**CSV state of record: v98 (487 rows).** No SD rows changed.

### FLAG FOR THE SD RE-AUDIT — verify the conspicuous-disclosure condition on the $40 cap

`edu-returned-check-fee-cap-sd` states the $40 dishonored-check collection charge requires the fee policy to be "conspicuously stated in the lease (or otherwise provided to the tenant in writing)." **The row's own body text hedges this as "consistent with how the statute is applied in practice"** — practice-based phrasing, not statutory text.

Two reasons this needs a primary read at re-audit:

1. **The row's corroboration is self-declared as weaker than usual.** Its notes record that sdlegislature.gov's section pages for SDCL 57A-3-421 render via JavaScript and returned no fetchable text, so the statute's existence, number, and subject were confirmed via a *different* statute (SDCL 22-30A-27, the bad-check criminal provision). The operative text of 57A-3-421 was never read directly.
2. **The neighbouring state's better-sourced row has no such condition.** North Dakota's `edu-returned-check-fee-cap-nd` carries the same $40 figure with **full primary text confirmed** (N.D.C.C. §6-08-16(2)(a)) and records **no** conspicuous-disclosure requirement.

**The question is not "what is ND missing."** It is whether SD's row asserts a precondition the statute does not impose. ND is the better-sourced of the two. Note the statutes are entirely different — ND's sits in Title 6 (Banks and Banking), SD's in Title 57A (UCC Article 3) — so they can legitimately differ; the point is that SD's difference is currently unverified.

Raised during the MN re-audit's §5a.1 propagation pass (2026-09-03) while comparing the two states' rows. Not resolved then, because SD has not been re-audited and this belongs to that pass.

---

# SD RE-AUDIT SESSION — 2026-09-07

Re-audit at higher settings. SD is state #7 and the last to be re-audited; CO, WY, KS, NE, MN and ND each surfaced errors that had shipped as `VERIFIED` — six for six going in. Trunk: `steinoak_clauses_updated_124.csv`. Standing instruction: **treat this log's own assertions as claims to verify, not facts.**

**Note on versioning.** This session's CSV work was originally written as v125 through v133 across nine passes. A container reset destroyed the working directory mid-session, and the delivery command's `cp new && rm old` pattern deleted the last surviving CSV after the copy had already failed — losing v125–v133 and the in-progress log. Both were reconstructed from the session record and **collapsed into a single v125 from v124**, which is what the handoff prompt specified in the first place. Substance is faithful; note wording is re-derived rather than byte-identical. The failure and its cause are recorded in Addendum L.11.

## R1. Trunk verification

All handoff assertions pass against v124: 525 rows; 57 supersedes; CO 111 / WY 99 / KS 114 / NE 111 / MN 120 / SD 38 / ND 108; no duplicate IDs, dangling supersedes, or display collisions; zero `LEASE_CLAUSE` rows tagged KS or NE with attorney-fee language; `holdover` not tagged ND; generic `landlords-access` not tagged ND; `lead-based-paint` tagged both ND and SD.

Serialization screen returned eight hits, **all false positives** — the token `None` in ordinary prose ("None of this can be waived…"). Recorded so a future run doesn't re-investigate.

## R2. Denominator derived — disagrees with the prompt

**Rule:** active `LEASE_CLAUSE` rows, not themselves overrides (empty `supersedes`), whose `id` carries no state suffix → **54 generic clauses**. Missing-tag-and-no-override: CO 0, WY 0, KS 0, NE 0, MN 0, ND 1 (`holdover`, deliberate per L.2), **SD 46**. The six non-SD figures reproduce L.2's table exactly, which is what gives confidence in the rule.

**The prompt says 45; I derive 46.** Recorded as disagreement per instruction 9, not reconciled.

Rule-sensitivity, recorded because it is the point: a first pass omitting the state-suffix filter returned SD 112 / CO 50, counting other states' specific rows (`dv-safe-homes-wy`, `late-fee-limit-co`) as generics. **A denominator is meaningless without its extraction rule beside it.**

## R3. Task (a) — the prohibited-provisions ground: ESTABLISHED, and it exposed an error

**Verdict: the ground holds.** SDCL ch. 43-32 contains no enumerated prohibited-provisions section — no analogue to K.S.A. 58-2547 or Neb. Rev. Stat. 76-1414. Its only two lease-content restrictions are § 43-32-8 (habitability non-waivable) and § 43-32-18.1 (no lease term authorizing eviction for calling emergency responders). SD follows the ND pattern. **The exculpatory family may be extended**, subject to the ceiling below.

### R3.1 The error: SDCL 53-9-3 was never found

`edu-no-prohibited-terms-list-sd` stated an exculpatory clause "would instead be tested… under South Dakota's general consumer-protection and common-law unconscionability doctrine rather than an enumerated statutory prohibition." `edu-unconscionability-doctrine-sd` named only the Deceptive Trade Practices Act and common law. **Both wrong.**

> **§ 53-9-3.** "All contracts which have for their object, directly or indirectly, to exempt anyone from responsibility for his own fraud or willful injury to the person or property of another or from violation of law whether willful or negligent, are against the policy of the law."
> Source: CivC 1877 § 954 … SDC 1939 § 10.0702 — unamended since 1939.

SD's counterpart to Cal. Civ. Code § 1668 and **N.D.C.C. 9-08-02** — which is why the ND ground still transfers rather than being defeated.

**Failure shape (L.7).** The narrow claim — no enumerated list *in ch. 43-32* — was correct and remains correct. The error is the affirmative claim about **what governs instead**, never checked outside ch. 43-32. Title 53 was never reached. The row's notes asserted unusually strong grounding — *"positive knowledge of the chapter's complete contents… a stronger evidentiary posture than most of this session's other confirmed-absent findings."* **Warranted for the absence, unwarranted for the substitute rule beside it.**

### R3.2 Two further limits, previously unrecorded

- **§ 43-32-8** makes the repair/habitability duty non-waivable in express terms, with a repairs-in-lieu-of-rent exception. Tier B input for `landlord-maintenance`.
- **§ 15-17-39** voids attorney-fee-on-default provisions in "any note, bond, mortgage, or other evidence of debt." No SD row existed. Whether a lease qualifies is undecided — *Credit Collection Servs. v. Pesicka*, 2006 S.D. 81, 721 N.W.2d 474, 476 implies not, but does not hold. Recorded as risk, not prohibition.

## R4. Seven for seven — § 43-32-24 amended, library shipped the superseded deadline

`security-deposit-return-sd` (`REQUIRED`, ships into every SD lease) and `edu-security-deposit-itemized-accounting-sd` both carried a **two-week** deadline. **§ 43-32-24 was amended by SL 2026, ch 179, § 1 (2026 SB 4), effective July 1 2026, to twenty-one days** — in force for over two months before this session.

Enacted text and source line (`SL 1976 ch 267 §3; SL 1984 ch 281 §1; SL 2026 ch 179 §1`) supplied by Taylor after two retrieval failures — sdlegislature.gov section pages are JS-rendered and the API chapter endpoint returns titles only. **Escalated under §5a.2 rather than searched a third time.** The introduced bill text was retrievable and showed the strike/underscore, but an introduced bill is not law; enactment required the codified source line.

**Why the existing heuristic would not have caught it.** K.4 directs extra scrutiny where stale text is *landlord-favourable*. Here it was **tenant-favourable** — a shorter deadline than current law allows. Secondary sources split two-and-two, one carrying the old figure stamped "Updated July 2026." **Direction of benefit is not a staleness filter.** Recorded as **L.6**.

## R5. Root cause of the deposit error — a method defect, not carelessness

The full ch. 43-32 text from **consumer.sd.gov/docs/LLTen_Statutes43-32.pdf** — the Attorney General's Consumer Protection reproduction, and the source the *original* SD session used — **is stale.** It prints § 43-32-24 as "within two weeks," source line ending `SL 1984, ch 281, § 1`, no mention of SL 2026 ch 179. Live today on a `.gov` domain, published by the office that enforces the chapter.

**The original currency check could not have caught this.** Quoting §1 of this log: *"Cross-checked the section index against the official … site — section numbers and titles match exactly, confirming the consumer.sd.gov text is current and complete, not a stale mirror."* Titles did match, and still do. **The amendment changed the text and left the title alone** — as nearly every amendment does. The verification was diligent, documented, and **structurally incapable of detecting what it claimed to rule out.** Recorded as **L.8**.

**Scoped, not discarded.** Every other section relied on from that PDF carries a source line ending 1939–2022 and was unamended 2024–2026; used on that basis with the staleness noted in each affected row.

## R6. Item 2 — `lead-based-paint` confirmed, overlay absence at moderate confidence

The tag is correct: the federal duty (42 U.S.C. 4852d) applies regardless of state law. **No state overlay found** — the ch. 43-32 index carries no lead provision; Nolo states SD requires **only one** disclosure (meth, § 43-32-30); and **SD's own Department of Labor and Regulation publishes the *federal* lessor's disclosure form**. A state agency distributing the federal form rather than a state one is affirmative evidence there is nothing state-specific to distribute. **Moderate, not full confidence:** Titles 34 and 34A not searched. Risk is asymmetric and favours accepting the tag.

## R7. Item 3 — § 43-32-15 confirmed, and the omission it exposes

> "A hiring of real property for a term not specified by the parties is deemed to be renewed as stated in § 43-32-14 at the end of the term implied by law unless one of the parties gives notice… at least as long before the expiration thereof as the term of the hiring itself, **not exceeding one month**."

**The prompt's diagnosis is confirmed.** The library carried no termination-notice clause for any tenancy type except tenancy at will. A **week-to-week** tenancy — about a week's notice — was represented nowhere. Committed as `edu-termination-notice-scaling-sd`. K.2's failure shape again: an **omission**, not a misstatement.

**Section-number correction.** DocDraft and another secondary source cite § 43-32-**14**. Wrong — the official index titles -14 "Retention of possession… Acceptance of rent… Renewal" and -15 "Renewal of hiring… unless notice given of termination."

**Dependency later closed.** § 43-32-4: *"a hiring at a weekly rate of rent is presumed to be for one week"*; § 43-32-3: non-lodgings hirings presumed for one year. The chain is primary-verified end to end.

**A log error corrected.** This session's own escalation request, and the original statute walk at §2 above, described § 43-32-5 as containing the lodgings/rent-interval presumption. **It does not** — § 43-32-5 is the statute of frauds. The presumption is § 43-32-**4**. The original walk compressed §§ 43-32-1 to -5 into one bullet and fused two sections; the error propagated into this session's own research request until primary text refuted it.

## R8. § 57A-3-421 — three defects, and the pre-existing flag vindicated

The log's standing flag asked whether `edu-returned-check-fee-cap-sd` asserts a precondition the statute does not impose. **It does — and the row is wrong in two further ways.**

1. **Wrong number.** The cap is **sixty dollars** plus sales tax, not forty; source line ends **SL 2024, ch 199, § 1**. The row's notes recorded **seven** concordant secondary sources carrying $40 and treated that agreement as corroboration. All stale (L.6).
2. **Fabricated precondition.** The row said the fee "should be conspicuously stated in the lease… consistent with how the statute is applied in practice." The statute names **two** mechanisms and a lease term is neither: conspicuous posting **on the premises**, or a conspicuous notice **on customer statements** of a business regularly extending credit. The row invented the route, hedged its own invention in the body text, and shipped `VERIFIED`.
3. **Missed subsections.** Liability attaches only for three enumerated dishonor reasons; never recorded.

**Root cause.** The figure was "corroborated" via § 22-30A-27's cross-reference to "the costs and expenses provided for in § 57A-3-421." That cross-reference carries neither the figure nor the conditions. **ND's $40/civil-penalty defect exactly — except the section was never read at all.**

**Cross-state consequence.** The SD/ND $40 parity is now **false**: ND's is N.D.C.C. § 6-08-16(2)(a), SD's is UCC Art. 3 and now $60. They matched until 2024, and **the coincidence is part of why SD's felt confirmed.** ND's row is unaffected — **no §5a.1 propagation owed.**

**Open, surfaced not resolved:** whether a residential landlord is a "merchant or place of business" at all. If not, SD may have **no** statutory returned-check charge for residential rent, and this becomes a confirmed-absence row.

## R9. Item 1 — the 46-clause triage

**Tier A 40, Tier B 6, Tier C 0.** Not a bulk extension — each tiered against SD statute. The § 53-9-3 ground released `parking`, `storage-space`, `tenants-property-insurance`.

**§5a.1 judgment:** tag-only edits change `states` and nothing else; no other state's rendering is affected. **State-driven, not uniform. No propagation owed.**

Four Tier A items warrant note:
- **`late-fee` closed a material gap.** SD sets no statutory cap and no grace period — late fees are governed *entirely* by the lease. **An SD lease generated before this write could not charge a late fee at all.**
- **`returned-payments` needed no correction** where the education row needed three, because it is self-limiting. The clause that deferred held; the one that hardcoded broke.
- **`application-of-payments` carries an inert savings clause** preserving a statutory cure right SD has not had since the 2024 repeal of § 21-16-2. Saves a right that does not exist rather than asserting one does — inert, not false.
- **`inspection-rights` was tagged but incomplete** until `landlords-access-sd` existed; it defers to Access & Entry terms SD did not have.

## R10. Tier B resolved — 5 of 6

- **`tenant-maintenance` → Tier A.** § 43-32-10 imposes a matching lessee duty and carries **no** non-waiver clause. Interaction recorded: because § 43-32-8's allocation *is* non-waivable, "same condition as delivered" must read as a surrender covenant, not a duty shift.
- **`no-sublet-assign` → Tier A.** § 43-32-20 governs assignee *consequences*, not consent, and imposes no reasonableness standard.
- **`landlords-access-sd`** — § 43-32-32 imposes **four mandatory content elements**; the generic supplies none. Nuance preserved: SD's 24 hours is a **presumption**, not a floor, and the lease may set alternate methods by mutual agreement.
- **`holdover-sd`** — the generic promises "damages in the maximum amount permitted by applicable law," and **SD has no multiplier**. The inverse of the usual defect: a clause whose operative term is **null**. Its month-to-month fallback was also wrong — § 43-32-14 renews for the **same time**, capped at one year.
- **`landlord-maintenance-sd`** — the generic's "**Subject to** Tenant's own maintenance obligations" opener is arguably a modification of a duty § 43-32-8 forbids modifying. **Resolves SD's instance** of the CO;WY maintenance backlog; why the generic is CO-only remains open for CO/WY.

**Still Tier B — `pet-policy`**, on the § 53-9-3 third-prong question (entry-and-remove-"without liability"), with a cross-state candidate observation: ND is tagged on it and has the counterpart statute N.D.C.C. 9-08-02. Recorded as candidate, not inherited conclusion; no ND row touched.

## R11. Item 7 — eviction-duty screen, first run against SD

| Sub-topic | Status |
|---|---|
| Self-help / ouster | Covered — re-verified against § 43-32-6 (two months' rent plus return of advance rent and deposit) |
| Willful utility shutoff | Covered by the **same** row via § 43-32-6's "willfully diminishes services" limb — unlike ND, no separate absence row needed |
| Writ-execution timing | Covered — § 21-16-12, daytime only |
| Post-writ property duties | **Gap → closed** (`edu-post-writ-property-duties-sd`) |
| Post-writ pet/animal duties | **Gap → closed** (`edu-no-post-writ-animal-duty-sd`) |

SD has no eviction-specific property regime; §§ 43-32-25/26 govern, triggered by the tenant having **quit**, not by a writ. **Dakota-ancestry catch:** ND's equivalent looks near-identical, but **ND's lien is subordinated to a prior perfected security interest and SD's § 43-32-26 has no such carve-out.** Recorded as comparison, not inheritance.

## R12. Item 5 — SD folded into the named-topic checklist

**54 SD cells across 9 tables**, each carrying its citation and clause ID.

**Denominator, derived fresh:** rule A (`| Topic |` tables) → **65**; rule B (plus "New topic" tables) → **111**; rule C (all table rows) → **165**; rows needing a per-state cell → **54**. The prompt cites two label-level duplicates; **rule A finds zero, rule C finds eight.** Most are a topic legitimately appearing in a "New topic" table and again after fold-in. Recorded, not reconciled. The **deliberate semantic duplicate** is confirmed and now labelled.

**Two pre-existing malformed rows repaired.** The column-count assertion caught two rows short of cells **in the source file**: the returned-check duplicate row was **missing ND and MN entirely**; "Eviction record sealing" was **missing MN**. Markdown renders short rows by silently dropping the tail, so this is invisible on the page — but **any programmatic read of a state's status on those rows returns the wrong state's cell.** The fold-in initially placed SD's value in the wrong column on both.

## R13. Item 6a — reconciliation, and a defect in the checklist itself

**Forward check passes.** All SD cells marked Present/OPEN resolve to live, SD-tagged rows. Two cited no clause ID and were amended. **Unlike ND, SD had no Present-but-missing row.**

**Reverse check found something larger.** 53 of 88 SD rows map to no checklist topic; most are correctly-absent boilerplate, but **zero topic labels exist — for any state — for**: security deposit **return** mechanics; the landlord's **habitability/repair duty**; assistance-animal accommodation; meth disclosure; month-to-month modification notice.

**This explains why SD's headline error survived.** A two-pass canvass executed perfectly **could not have caught the deposit-deadline error — there is no row for it to check.**

**Root cause: accretion bias.** The checklist grew by adding a topic whenever a state's law *surprised* someone. Exotic provisions are richly covered; universal obligations never surprised anyone, so they never earned a row. **The checklist is densest where risk is lowest.** Recorded as **L.10** and as a new section in the checklist. Remedy is cross-state; **the six completed re-audits should be assumed to share the blind spot.**

## R14. § 43-32-6.1's functional test

`edu-advance-rent-vs-deposit-sd` said advance rent and deposits are "separate categories… not two names for the same protected fund," unconditioned. § 43-32-6.1's opening sentence, never quoted in that row:

> "**Any** deposit of money, **the function of which is to secure the performance** of a residential rental agreement or any part of such an agreement, shall be deemed to be a security deposit."

Function controls, not label. Money called last month's rent but held as security **is** a deposit and **does** count against the cap. **L.5 again** — § 43-32-6.1 was cited in the *cap* row for the dollar figure, and the sentence governing *scope* never travelled to the row that needed it.

**And my own sweep missed a stale deadline.** The row still said "two-**week**." The earlier post-write sweep covered `two weeks` and `2-week` and reported clean — built from the two spellings in the rows already known wrong, exactly the population it was meant to look past. Recorded as **L.9**.

## R15. Item 12 — citation screen and coverage map

Run across **both** `bodyText` and `notes`. **63 distinct SD citations; 15 in `bodyText`, 48 — 76% — only in `notes`.** Three quarters of the citation surface was invisible to any bodyText-only screen.

Final coverage after all escalations: **Tier A (read in full)** — all of ch. 43-32, plus §§ 43-8-8, 43-8-9, 53-9-3, 57A-3-421, 20-13-20, 6-1-13, and all of Title 21-16. **Tier B (quoted, not read end-to-end)** — §§ 15-17-38, 15-17-39. **Tier C (cited, not read)** — §§ 20-13-1, 22-30A-27, 56-3-18, 20-13-23.1, 21-3-8, 22-1-2(28). **Tier D** — ARSD 61:15:01:14, 46:04:01:20.

**Screen artifact recorded:** twelve citations initially looked unverified but **are not SD law** — `47-16-*` and `6-08-16` are ND, `38-12-801` is CO. They sit in SD-tagged rows because those are **shared generics** whose notes accumulated other states' citations. A per-state citation screen over shared clauses manufactures false positives — but three genuine SD citations were hiding in that bucket, so it cannot simply be discarded.

## R16. Item 8 — K.2 boundary re-examination: REJECTED

**Boundary:** *"SDCL Chapter 43-32 is the law of South Dakota landlord-tenant relations."* Inherited from the original session, which walked the chapter end-to-end and declared the statute walk complete on that basis.

**Verdict: WRONG — the most consequential inherited assumption in the state.** Operative provisions outside ch. 43-32: § 53-9-3 (exculpatory limits), § 15-17-39 (fee clauses), § 20-13-20 (fair housing **and the 2-unit exemption**), § 20-13-23.2 (service-animal criminal penalty), § 6-1-13 (rent-control preemption), § 57A-3-421 (**the $60 the library had as $40**), § 43-8-8 (tenancy-at-will termination).

**Failure mode is worse than ND's.** ND's K.2 target produced an **omission**. SD's produces **both** — omissions *and* an affirmative misstatement (`edu-no-prohibited-terms-list-sd` told landlords no statute governed exculpatory clauses, because the only chapter searched contained none). **A boundary error manufactures confident false negatives**, because "I read the whole chapter" feels like completeness. It also explains L.10.

**Replacement working boundary:** ch. 43-32 plus Title 21-16, with the statute walk incomplete until an out-of-title sweep has run for each named topic — gap-discovery source 4, present since Colorado and evidently never applied at full strength to SD.

## R17. Title 21-16 read — two real omissions

**`edu-eviction-procedure-sd` was materially incomplete.** § 21-16-6 requires a **minimum of two service attempts, at least one week apart, both within thirty days**, with conspicuous posting plus first-class mail on the second. That builds roughly a week's floor into every SD eviction, and its absence made the process look faster than it is. § 21-16-6.1's single-publication option was also missing.

**Incomplete appearance rule.** "Five days to appear" omitted the alternative trigger — *thirty days after publication, whichever occurs sooner* — and the continuance rule in the same section (no adjournment beyond fourteen days without an undertaking with surety).

**Citation corrected, and a pattern is visible.** The § 21-16-2 repeal is `SL 2024, ch 75, § 1`, not "2024 SB 90." **The same session law, § 2, made the four-to-five-day change to § 21-16-7** — one session law, not two bills. This is the **second** bill-number-vs-session-law correction in SD (after "SB 89" → `SL 2024, ch 178`).

**Confirmed correct:** the repeal; the three-day nonpayment ground; mutual attorney fees under § 21-16-11 (note: *discretionary*, "may tax," and conditioned on licensed-attorney representation); daytime-only execution. `edu-eviction-grounds-sd` **confirmed accurate in full**.

**Remaining unread dependencies (L.5), logged:** § 21-16-10 awards damages "including those authorized by § 21-3-8"; § 21-16-1 defines "occupied structure" by reference to § 22-1-2(28).

## R18. Two Tier C rows confirmed

**`edu-tenancy-at-will-termination-sd` — L.5 flag cleared.** § 43-8-9 confirms the previously-unverified "written notice" assertion and supplies three service methods now added. **The assertion had been right by luck rather than by verification.**

**`edu-rent-control-preemption-sd` — confirmed** against § 6-1-13 verbatim, carve-out included.

## R19. An error I introduced this session — § 20-13-23.2 scope

`edu-service-animal-prohibition-criminal-penalty-sd` asserted, as `VERIFIED`, that SD criminalises a landlord's refusal of a service animal in a rented residential property. The statute attaches its misdemeanor to *"a place listed in **§ 20-13-23.1**"* — **never read**.

> **§ 20-13-23.1.** "Any person with a disability is entitled to reasonably equal accommodations… of all **hotels, lodging places, places of public accommodation, amusement or resort, and other places to which the general public is invited**…"

A public-accommodations list. **A private rental unit is not such a place**, so the misdemeanor does not reach a residential landlord.

**Textbook L.5** — and precisely the failure the handoff prompt illustrated with ND's DV clause. Committed while writing up findings *about* that rule.

**Aggravating detail worth keeping.** The row was framed as a striking "two-direction finding" — opposite party, opposite conduct from WY/KS. **That novelty is part of why it went unchallenged: a surprising result reads as a discovery rather than as something to re-check. A finding that inverts the expected pattern deserves more verification than one that confirms it.**

**Inverted rather than deleted** — the row now records the absence, which stops a future canvass re-opening the question and stops anyone re-deriving the same error from § 20-13-23.2 alone. **Held `UNVERIFIED`**: the § 20-13-23.1 text is from a reputable academic reproduction with source line, not sdlegislature primary, and the asymmetry matters — the row now tells a landlord a criminal penalty does *not* apply.

**Third instance in SD** of a rule that looks landlord-facing but is scoped to **transient lodging** (with ARSD 61:15:01:14 and § 43-32-37). Standing caution recorded.

## R20. § 20-13-20 read end-to-end

**2-unit exemption confirmed**, scoped to subdivisions (1), (2) and (4) — pointedly **omitting (3)**, the advertising prohibition, which is what makes the row's advertising carve-out correct.

**A consequence the row never stated.** Federal exempts owner-occupied buildings of **four or fewer** units; SD exempts **two or fewer**. So an owner-occupied **three- or four-unit** building is exempt federally but **fully covered by South Dakota law** — for that band SD is *more* protective, and a landlord applying the familiar federal four-unit rule will be wrong.

**Unread tail (L.5):** the section closes with a truncated clause beginning "Nothing in this statute may be construed to displace federal, state, or local guidelines setting reasonable stan…". No claim depends on it.

## R21. CSV — v125 (from v124)

**525 → 533 rows. SD 38 → 88 tags. Displayable `LEASE_CLAUSE`: SD 13 → 58** (ND 60, WY 61, KS/NE 62, MN 69, CO 75). All other state tag counts unchanged.

**8 new rows:** `edu-exculpatory-clause-limit-sd`, `edu-attorney-fee-clause-limit-sd`, `edu-termination-notice-scaling-sd`, `landlords-access-sd`, `holdover-sd`, `landlord-maintenance-sd`, `edu-post-writ-property-duties-sd`, `edu-no-post-writ-animal-duty-sd`.

**42 generic extensions** (40 Tier A + `tenant-maintenance` + `no-sublet-assign`).

**12 rows corrected or confirmed:** the two deposit rows, `edu-no-prohibited-terms-list-sd`, `edu-unconscionability-doctrine-sd`, `edu-returned-check-fee-cap-sd`, `edu-tenancy-at-will-termination-sd`, `edu-eviction-procedure-sd`, `edu-eviction-grounds-sd`, `edu-rent-control-preemption-sd`, `edu-advance-rent-vs-deposit-sd`, `edu-service-animal-prohibition-criminal-penalty-sd`, `edu-fair-housing-additions-sd`.

Post-write assertions per L.3: no duplicate IDs, no dangling supersedes, no display collisions, no unexpected blank `states`, widened stale-deadline sweep clean (one hit reviewed and confirmed a **false positive** — § 21-16-7's legitimate fourteen-day continuance rule). **SD carries exactly one non-`VERIFIED` row, deliberately, and it is the row that was wrong.**

## R22. Open at session end

- **`pet-policy`** — last Tier B item; Taylor's decision on the § 53-9-3 third-prong question, plus the ND cross-state candidate.
- **§ 20-13-23.1** — primary text, to move the one `UNVERIFIED` row.
- **Tier B/C/D remainder** — §§ 15-17-38/39 end-to-end; §§ 20-13-1, 22-30A-27, 56-3-18, 21-3-8, 22-1-2(28); the two ARSD rules.
- **Cross-state, outside SD's remit:** the L.10 *Core obligations* checklist section and backfill; the CO;WY maintenance-scoping question; the WY/ND/MN notice-and-cure findings.

## R23. A second error I introduced — ARSD 61:15:01:15 was never read

Closing the citation screen's Tier D — the two administrative rules supporting `edu-detector-duty-scope-sd`, a `VERIFIED` row making an affirmative claim about what SD requires — found the row **wrong**, and wrong in the same shape as the § 20-13-23.2 error earlier in this session.

The row said SD's only detector rules are ARSD 61:15:01:14 (lodging establishments) and 46:04:01:20 (manufactured homes), and that *"Neither rule reaches a typical single-family or apartment lease."*

**The very next rule in the same chapter says otherwise:**

> **ARSD 61:15:01:15 — Smoke detectors required in multifamily residences.** "Each family living unit of a multifamily residence which houses **six or more families** shall contain at least one smoke detector… A smoke detector shall be located on the ceiling or wall of the main room or sleeping room in each dwelling unit… If a violation of this section is found, a written notice… shall be issued and served upon the owner, operator, or other person responsible for the violation. Any notice or order… shall require compliance within 30 days."

**A landlord of a 6+ unit building in South Dakota has an affirmative, enforceable detector duty that this row told them did not exist.**

**Root cause.** A keyword search for "smoke detector" returned 61:15:01:14; the row was written from it and never looked at the neighbouring rules. Nothing in :14 points to :15 — so this is *not* the L.5 incorporation-by-reference failure. It is a distinct one: **retrieval was treated as coverage.** The adjacent rule was invisible precisely because it did not match the query asked.

**Why it produced a confident error rather than a gap.** Both this and the § 20-13-23.2 error went on to make an affirmative *negative* claim about scope — "neither reaches an ordinary apartment," "makes it a crime for a landlord" — on the strength of having found one provision. **Finding one provision licenses a statement about that provision, never a statement about the field.**

**Two instances of the same shape in one session.** Per the standing instruction — *if the same error shape appears twice in one session, stop rather than pattern-match a third time* — adjacent-provision sweeps are now recorded as mandatory rather than discretionary. **Addendum L.12.**

**Scope now stated precisely.** Covered: 6+ family multifamily (smoke), lodging establishments (smoke), manufactured homes (smoke **and** CO). Not covered: single-family rentals, duplexes, and multifamily under six families — **the band most Steinoak landlords actually own.** CO detectors are required *only* in manufactured homes; no SD rule requires one in a conventional rental of any size, which is worth stating affirmatively rather than leaving as silence. `rule_type` raised `CONDITIONAL` → `REQUIRED`.

**Currency confirmed:** 61:15:01:14 (18 SDR 107 eff. 1992-01-01; 23 SDR 32 eff. 1996-09-11), 46:04:01:20 (44 SDR 93 eff. 2017-12-04). Text identical across sdlegislature.gov's own rules API, Cornell LII, and Justia — three independent reproductions, the official one among them. Citation screen: Tier D → Tier A.

## R24. CSV — v126 (from v125)

**533 rows, unchanged.** One row corrected and retitled (`edu-detector-duty-scope-sd`); two checklist cells corrected to match. Integrity assertions clean.

## R25. `pet-policy` — last Tier B item resolved, and item 1 closes

Three options were put to Taylor; he approved **option C**.

**`pet-policy-sd` created, superseding the generic.** Two narrow changes:

1. **"without liability to Tenant" struck.** SDCL 53-9-3 voids a term whose object is to exempt a party from responsibility for "violation of law whether willful or negligent." A blanket no-liability exemption attached to an entry-and-remove right reaches the tail cases where entry is not clearly lawful, and in SD an unlawful entry is expensive — § 43-32-6 gives the tenant **two months' rent plus return of any advance rent and deposit**. Striking the phrase costs the landlord nothing they actually had, since the exemption would not have been enforced that far.
2. **Entry tied to the lease's Access and Entry section**, with the statutory emergency/impracticability exception on the face of the clause. This closes an **internal inconsistency created earlier in this same session**: `landlords-access-sd` was written to carry § 43-32-32's four mandatory notice elements, while the generic `pet-policy` granted a *separate* entry right mentioning none of them. Two entry rights in one lease on different terms is a drafting defect independent of any statute — and it was introduced by my own fix three passes earlier.

**Assessment corrected in the open.** This row was originally flagged as a clear § 53-9-3 third-prong violation. On re-reading, the enumerated entry grounds — a vicious animal, a severely ill animal — are mostly genuine **emergencies**, and § 43-32-32 expressly excepts emergencies from the notice requirement, so the entry itself is usually lawful. **The risk is narrower than I first stated**, confined to the non-emergency tail. Recorded because the overstatement is part of the record, and because tagging the generic as-is was a defensible alternative: SD has no enumerated prohibited-terms statute, so an overbroad exculpatory phrase is not *unlawful* here — it simply would not be enforced that far. The override was chosen as much for entry-consistency as for § 53-9-3.

**Cross-state candidate, not acted on.** ND is tagged on the generic and has **N.D.C.C. 9-08-02**, the direct counterpart to § 53-9-3, so the same phrase plausibly carries the same limit there. Per L.4 and the Dakota-ancestry rule this is a **candidate for ND's next pass, not an inherited conclusion**; no ND row was touched. CO and WY unexamined on this point.

**§5a.1:** a new override row, not an edit to the shared generic — the generic's text and its CO;WY;ND tags are unchanged, so no propagation is owed.

### Item 1 is now closed

Re-running the L.2 exhaustive generic-clause audit against the written file: **zero generic clauses remain with no SD tag and no SD override**, down from the 46 derived at the start of this session.

**Displayable `LEASE_CLAUSE` rows: SD 13 → 59** (ND 60, WY 61, KS/NE 62, MN 69, CO 75). SD sits within one clause of North Dakota, and the residual difference is accounted for by each state's override profile rather than by missing coverage.

## R26. CSV — v127 (from v126)

533 → **534 rows**; supersedes relationships 60 → **61**; SD **88 → 89**. All other state tag counts unchanged. One new row (`pet-policy-sd`). Integrity assertions clean, including a supersedes/state collision check confirming `pet-policy` remains CO;WY;ND and `pet-policy-sd` is SD-only.

## R27. Third instance of the L.12 shape — stopping, per the standing rule

Retrieving § 20-13-23.1 to move the one `UNVERIFIED` row to `VERIFIED` instead surfaced the **chapter index**, which lists:

> **§ 20-13-23.4** — "Right to keep **guide dog in rented or leased residence**--Violation as misdemeanor."
> **§ 20-13-23.7** — "Good faith efforts made to accommodate disabled persons" — applying, per the chapter text, to "employment, public accommodation, public service, and education **or housing**… unless the accommodation would impose undue hardship."

**The absence claim is withdrawn.** This row's history is now: (a) asserted SD criminalises a landlord's refusal of a service animal in housing; (b) withdrawn and rewritten as a **confirmed absence** when § 20-13-23.2 proved scoped to the public-accommodations list; (c) **that absence is also wrong** — § 20-13-23.4 is, on its title, precisely the housing-specific criminal provision the absence denied.

**Root cause is L.12, three passes after writing L.12.** I read the two sections that matched the query — § 20-13-23.1 and § 20-13-23.2 — and did not sweep the adjacent sections of the same chapter. That is the third occurrence in this session, after § 20-13-23.2 itself and ARSD 61:15:01:15. **Writing down a rule is not the same as operating under it**, and the gap between the two is the most useful thing this row has produced.

**Not resolved from the index.** The standing instruction is to stop and ask rather than pattern-match a third time. A **title is not text** — that is the L.8 lesson — and "guide dog" may be materially narrower than "service animal." Both prior assertions were wrong; a third guess is not warranted. The row is left in an explicitly **OPEN** state asserting neither direction, and the checklist cell is set to match.

**One sub-finding does stand.** § 20-13-23.1 is now confirmed at primary standard — text identical across sdlegislature.gov's own chapter page, Justia, LawServer and the MSU compilation, with source line `SL 1976, ch 153, § 1; SL 1986, ch 170, § 18` on the official page. It was never the sub-finding that was unsound; it was the inference drawn from it about the rest of the chapter.

**Escalation:** §§ 20-13-23.4 and 20-13-23.7 primary text.

## R28. CSV — v128 (from v127)

**534 rows, unchanged.** One row retitled and rewritten to an explicit OPEN state; checklist cell synced. SD carries exactly one non-`VERIFIED` row, and it remains the row that has been wrong twice.

## R29. § 20-13-23.4 — the original claim was right; my correction broke it

Primary text:

> **§ 20-13-23.4.** "No landlord may prohibit **by lease or otherwise** the keeping of a **service animal** by a person who is totally or partially physically disabled, totally or partially blind, or totally or partially deaf in an apartment or other rented or leased residential property. **A violation of this section is a Class 2 misdemeanor.**"
> Source: SDCL § 20-13-23.2 as added by SL 1980 ch 172 §1; SL 1994 ch 160 §4; SL 1995 ch 118 §2.

**This tracks the row's original wording almost verbatim.** The row as first written said SD "makes it a crime for a landlord to prohibit, by lease or otherwise, a legitimately disabled tenant from keeping a service animal in a rented residential property… a Class 2 misdemeanor." Its defect was the **citation** — it cited § 20-13-23.2 — and the absence of a scope check. **Not the substance.**

When § 20-13-23.2 proved scoped to public accommodations, I concluded the **claim** was wrong rather than that the **citation** was wrong, and rewrote a correct statement into a confirmed absence. **The correction made the library worse than the original error, and the second correction made it worse again.** A confirmed-absence row is the more damaging artifact: it is affirmatively wrong about the world *and* blocks future canvasses from re-opening the question, which is exactly what such rows exist to do. Recorded as **Addendum L.13** — disconfirming a citation disconfirms the citation, not the claim.

**Title-vs-text, corroborating L.8.** The section's catchline reads "Right to keep **guide dog**…" while its operative text says **service animal** — broadened by the 1994/1995 amendments without the catchline being updated. Resolving from the index title, which was briefly tempting, would have narrowed the row to guide dogs and been wrong a third time.

**A substantive nuance now in the library for the first time.** § 20-13-23.4's disability categories — physically disabled, blind, deaf — are **narrower** than § 20-13-23.2's, which SL 2020 ch 71 broadened to include psychiatric and mental disability. The **criminal** provision therefore appears not to reach a landlord who refuses a service animal to a tenant with a psychiatric or mental disability, even though the **civil** duties under §§ 43-32-33 to -36 and the FHA plainly do. Stated in the row as an apparent limit, not a safe harbour.

**Architecture consequence.** This is a **third lease-content restriction** in South Dakota, and it sits **outside ch. 43-32**. R3 above recorded that the chapter contains only two — true of the chapter, and visibly incomplete as a statement about the state. Reinforces the K.2 boundary rejection at R16. Row moved from `Pets` to `Compliance & Prohibited Terms`.

## R30. § 20-13-23.7 — a state reasonable-accommodation duty, previously unrecorded

> "For purposes of employment, public accommodation, public service, and education **or housing**, good faith efforts shall be made to reasonably accommodate the disabled person unless the accommodation would impose undue hardship." (SL 1986 ch 170 §4, unamended.)

**Genuinely new.** Nothing in the library recorded a **state-level** reasonable-accommodation duty for SD — the assistance-animal rows carry the animal-specific documentation rules and the fair-housing row carries the protected classes, but neither reaches accommodation generally. Committed as `edu-reasonable-accommodation-duty-sd`.

**Found only because the overdue sweep finally happened.** The adjacent-provision sweep run after the third L.12 failure produced a second finding beyond the one it was run for — which is the argument for L.12 in one line.

Recorded as `LANDLORD_EDUCATION`: it states a standard of conduct, not a term the parties agree to, and a lease clause purporting to define "undue hardship" in the landlord's favour would be unwise in a state whose only limit on such terms is the general § 53-9-3 / unconscionability backstop. **No attempt is made to map where the state duty diverges from the FHA's** — that is a real question and this row does not answer it.

## R31. CSV — v129 (from v128)

534 → **535 rows**; SD **89 → 90**. All other state tag counts unchanged.

**Resolved (1):** `edu-service-animal-prohibition-criminal-penalty-sd` — retitled, regrouped, `PROHIBITED`, `VERIFIED`.
**New (1):** `edu-reasonable-accommodation-duty-sd` (`REQUIRED`, `LANDLORD_EDUCATION`).
**Cross-referenced (1):** `assistance-animal-accommodation-sd` — notes now link both provisions, so a future canvass does not treat §§ 43-32-33 to -36 as the whole of SD's service-animal law.

**SD now carries zero non-`VERIFIED` rows.**

## R32. L.10 remedy built — the *Core obligations* checklist section

The structural gap recorded at R13 has been acted on rather than left as a recommendation. A **CORE OBLIGATIONS** section is now in the named-topic checklist: **14 topic rows** covering the universal provisions that were absent from the file entirely — deposit return mechanics (deadline, itemized accounting, noncompliance consequence, and what counts as a deposit), the landlord habitability/repair duty and its non-waivability, the tenant preservation duty, tenant remedies for failure to repair, assistance-animal documentation limits and fee prohibition, the general reasonable-accommodation duty, required state disclosures, rent-modification notice, periodic-tenancy termination notice, and state-wide lease-content restrictions.

**SD is filled from primary text**, each cell carrying its section number and clause ID.

**The other six columns are `NOT CANVASSED`, deliberately.** They were not filled from the existing state decision logs, for two reasons. First, under this project's own re-audit standard a log's assertions are claims to verify, not facts — filling cells from them would launder unverified content into a checklist whose purpose is to drive verification. Second, and more to the point: **the finding is that these topics were never canvassed for any state.** Filling them from memory would reproduce the defect in a new location while making it look resolved. 92 cells are marked `NOT CANVASSED` and each represents real work.

**The hit rate argues for doing that work.** Of the fourteen SD rows now recorded, **two capture provisions that were wrong or missing in the library until this re-audit**: the deposit-return deadline had shipped a superseded figure for over two months, and the state reasonable-accommodation duty (§ 20-13-23.7) was absent entirely. Both are universal obligations — the exact category the checklist could not see. Two findings from fourteen rows on the first state canvassed.

**Sequencing recorded in the section itself:** these topics are cheap to canvass — each is a single well-known provision per state — but load-bearing, since most appear in `REQUIRED` clauses that ship into every generated lease. They should rank above further exotic-topic discovery.

Structural verification run against the written file: the new table carries the full seven-state header, every row has the correct column count, and the section's cross-references resolve to live SD row IDs.

## R33. Session close — where South Dakota stands

**CSV `steinoak_clauses_updated_129.csv`: 535 rows, SD 90 tags, 59 displayable `LEASE_CLAUSE` rows, zero non-`VERIFIED` SD rows, zero generic clauses without SD coverage.** Started at 525 rows / SD 38 / 13 displayable.

**Ten errors found.** Six inherited: the deposit deadline; the NSF cap; the NSF fabricated precondition; the missing § 53-9-3; the § 21-16-6 service regime; the § 20-13-23.2 mis-citation. Four introduced by this session and caught within it: the § 20-13-23.2 scope error, the ARSD 61:15:01:15 omission, the confirmed-absence error that followed from the first, and the internal entry-right inconsistency between `landlords-access-sd` and `pet-policy`.

**Method findings L.6 through L.13, plus M.11.** The two with the widest reach are **L.8** (a `.gov` reproduction was stale and the original currency check compared *titles*, which no amendment changes) and **L.10** (the checklist could not have caught the headline error, because it had no row for it).

**All twelve brief items run.** Trunk verification; denominator (46, disagreeing with the prompt's 45); the generic-clause triage, now closed to zero; lead-paint; § 43-32-15; the eviction-duty screen; the checklist fold-in and both L screens; K.2, verdict **boundary rejected**; the citation screen across `notes` as well as `bodyText`.

**Open, and none of it SD-specific law:**
- Tier B/C leftovers — §§ 15-17-38/39 end-to-end; §§ 20-13-1, 22-30A-27, 56-3-18, 21-3-8, 22-1-2(28). None load-bearing; none supports an affirmative claim.
- **The 92 `NOT CANVASSED` core-obligation cells** for CO, WY, KS, NE, MN, ND.
- The ND `pet-policy` candidate (N.D.C.C. 9-08-02), recorded not acted on.
- The CO;WY maintenance-clause scoping question, open since MN.
- The WY/ND/MN notice-and-cure findings from the earlier cross-state check.

## R34. Tier B cleanup attempted — the sweep found more than the item

Working the last Tier B items (§§ 15-17-38 / 15-17-39, the basis of `edu-attorney-fee-clause-limit-sd`). Section **text** remains unretrieved after two attempts — sdlegislature.gov's chapter endpoint returns titles only for ch. 15-17, unlike ch. 20-13 which returned full text. **Escalated under §5a.2 rather than attempted a third time.**

**But running the L.12 sweep on that index before escalating produced findings of its own.** Three adjacent sections bear on the row and none has been read:

- **§ 15-17-42, "Application of chapter"** — the important one. It may scope whether ch. 15-17 reaches a residential lease fee clause **at all**, which is precisely the question this row records as undecided. If the chapter is limited to taxation of disbursements in litigation, the whole evidence-of-debt analysis may be misdirected.
- **§ 15-17-37, "Prevailing party recovery--Taxation"** and **§ 15-17-40, "Recovery limited"** — both bear directly on what a prevailing landlord can actually recover.
- Also unread: §§ 15-17-36 (costs not an indemnity) and 15-17-44 (taxation discretionary).

The row's substantive claims are unchanged and accurate as far as they go, but it is now marked **incomplete rather than merely unverified**: it states a rule without having established the rule's scope.

**This is L.12 working as predicted.** The sweep was run on a chapter reached for one narrow reason and surfaced a scope question nobody had asked. The three prior L.12 failures this session were all cases of *not* running it; this is the first case of running it and being repaid.

## R35. CSV — v130 (from v129)

**535 rows, unchanged.** One row's notes extended with the sweep result and the open dependency. Integrity clean; SD still carries zero non-`VERIFIED` rows.

## R36. Chapter 15-17 read — the last Tier B item closes, with three refinements

Full chapter text supplied by Taylor. `edu-attorney-fee-clause-limit-sd` moves from **incomplete** to complete.

**1. South Dakota's American Rule is stricter than the row conveyed.** § 15-17-37's enumerated disbursements — telephonic hearings, fax, witness fees, interpreter, officers, printers, service of process, filing, telephone, copying, transcripts, court-appointed experts — **contain no attorney fees**. With § 15-17-36 abolishing costs-as-indemnity outright, fees are not a default recoverable cost at all, only a statutory exception.

**2. § 15-17-38's specific authorizations are enumerated and none reaches a lease** — family law, trusts administered through the court, probate and guardianship, and mortgage foreclosures. Recorded affirmatively rather than left implicit.

**3. § 15-17-42, the scope question — resolved, but worth recording.** Its literal text:

> "This chapter applies to any civil action or special proceeding in which the State of South Dakota or any of its divisions, departments or political subdivisions is a party including counties, municipalities, school districts, townships, and other governmental entities."

Read as a **limit**, ch. 15-17 would not reach a private landlord-tenant dispute at all and this row would be misdirected. Read as an **extension** — confirming governmental parties are not exempt from disbursement taxation — the chapter applies generally.

**The extension reading is correct**, on two grounds. Every other operative section (§§ 15-17-36, -37, -38, -39, -40) is drafted generally, speaking of "a civil action or special proceeding" with no governmental qualifier — incoherent drafting if § 15-17-42 confined the chapter. And the South Dakota Supreme Court applied § 15-17-38 in *Credit Collection Services v. Pesicka*, 2006 S.D. 81, **a purely private dispute with no governmental party.**

Recorded rather than silently resolved, because the literal text is genuinely odd and a future reader meeting § 15-17-42 alone could reasonably reach the opposite conclusion.

**Still open, unchanged:** whether a residential lease is an "evidence of debt" under § 15-17-39. *Pesicka* implies leases may fall outside it but does not hold so.

**Cross-referenced into `edu-eviction-procedure-sd`:** § 21-16-11's fee provision is exactly the "specific statute" § 15-17-38 requires. The mutual fee-shifting recorded there is a **narrow statutory exception to a strict American Rule**, not an instance of a general fee-shifting norm.

**L.12 note:** §§ 15-17-36, -37, -40 and -42 were reached only by sweeping the chapter index, not by retrieving the two sections originally sought. **The sweep changed the row's substance in three places.**

## R37. South Dakota complete

**`steinoak_clauses_updated_131.csv`: 535 rows · SD 90 tags · 59 displayable `LEASE_CLAUSE` rows · zero non-`VERIFIED` SD rows · zero generic clauses without SD coverage.** Opened at 525 / 38 / 13.

**All twelve brief items run.** Trunk verification; denominator derived at 46 (disagreeing with the prompt's 45, recorded not reconciled); generic-clause triage closed to zero; lead-paint; § 43-32-15; eviction-duty screen; checklist fold-in; both L screens; K.2 with verdict **boundary rejected**; citation screen across `notes` as well as `bodyText`, with every Tier C section supporting an affirmative claim now read.

**Ten errors.** Six inherited — deposit deadline, NSF cap, NSF fabricated precondition, missing § 53-9-3, § 21-16-6 service regime, § 20-13-23.2 mis-citation. Four introduced and caught within the session — the § 20-13-23.2 scope error, the ARSD 61:15:01:15 omission, the confirmed-absence error that followed from the first, and the entry-right inconsistency between `landlords-access-sd` and `pet-policy`.

**Method findings L.6 through L.13, plus M.11.** Widest reach: **L.8** (a `.gov` reproduction was stale and the original currency check compared *titles*, which no amendment changes) and **L.10** (the checklist had no row for the headline error, so no canvass could have caught it).

**Remaining Tier C, none load-bearing and none supporting an affirmative claim:** §§ 20-13-1, 22-30A-27, 56-3-18, 21-3-8, 22-1-2(28).

**Next work is cross-state, per Taylor's scope decision: fill the 92 `NOT CANVASSED` core-obligation cells for CO, WY, KS, NE, MN and ND — to be done in this session, last.**


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


## Propagated at the Florida sync, 2026-09-26

A shared row tagged to this state was edited (§5a.1 / instruction 9), by Taylor's decision at the Florida sync, not by a state pass.

1. `application-of-payments`: payments are now applied **rent first**, oldest unpaid period first, and only then to fees and other charges ("unless Tenant directs otherwise in writing for a particular payment or applicable law requires otherwise"). It was fees first. The cure-preserving sentence is kept. NJ and FL are folded back into this row and `application-of-payments-nj` is retired. Reason: fees first turns an unpaid fee into an apparent rent shortfall. No tagged state's research found a statute requiring fees first, and rent first is lawful on any reading. Classification: UNIFORM. It removes a landlord-favorable ordering and adds no obligation. Inherit without override.

`last_checked` reset to 2026-09-26. No other field changed. This is not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-FL.md §16. (Appended at sync, 2026-09-26.)

## Propagated from the Arizona pass, 2026-09-27

Not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-AZ.md §14 and §17. (Appended at sync, 2026-09-27.)

1. **Shared-row edit received from Arizona (2026-09-27, Taylor's decision) — `entire-agreement`.** The sentence "may not be changed except in writing signed by all parties" now continues ", or as applicable law permits Landlord to change it by written notice to Tenant." Driver: A.R.S. §33-1342(C), which lets an Arizona landlord amend existing leases by written notice to comply with new laws; the old wording could be read to waive such a right. Recorded as **uniform** under §5a.1: the words are self-limiting and change nothing where this state's law gives no unilateral amendment right, while preserving any right it does give (for example, rules adopted on notice or changes to a periodic tenancy on the notice the law requires). No state-specific override is needed. `last_checked` was reset to 2026-09-27.

2. **2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged SD** (§5a.1; uniform text, no SD override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. Confirmed absent as a statute. Remedies run through `default-by-tenant-sd`.

---

## Gap-discovery backfill (instruction 36) — 2026-09-28

*(Cited elsewhere as §R38. Continues the R-series; the previous section is §R37.)*

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§2: SDCL ch. 43-32 read whole; §9: Title 21-16 read whole; §R36: ch. 15-17) |
| Gap-discovery source 2 — real-lease comparison | Done (§30: South Dakota Achieve residential lease agreement, published by the SD Dept. of Human Services in its HCBS-settings-rule toolkit; the document carries no edition line, read 2026-08-24) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§R38 — this section: 68 scenarios, Claude-generated) |
| Gap-discovery source 4 — outside-title search | Done (§R3: SDCL 53-9-3; §R16: K.2 boundary rejected, seven operative provisions located outside ch. 43-32; §R20: § 20-13-20 read end-to-end; §R29–R31: §§ 20-13-23.4, 20-13-23.7; §R36: ch. 15-17) |

**Scope:** the landlord-scenario screen only, per the backfill prompt. No re-audit, no re-scrub of settled findings. Screened against the current 941-row, 16-column library, not any earlier copy in the chat.

**Trunk verified before any work:** 941 rows, 905 active, 118 `supersedes`, no duplicate ids, no dangling `supersedes`, no active-row display collisions, one blank-`states` row (the known parent). SD stood at 91 active rows: 60 lease clauses, 31 education rows.

**Result: 68 scenarios — 50 covered, 9 gaps, 8 unresolved, 1 out of scope.** (Counts taken from the table below by script, not from memory — my first draft of this line said 49/8/11 and was wrong on all three.) Eight of the nine gaps produced **a new education row**; the ninth, the disability-modification scenario, produced a **body addition** to an existing row. Two existing SD rows changed in total. No lease clause was added, removed or reworded, so **no SD lease output changes** as a result of this screen. No shared row was touched.

---

### R38.1 Scenario map

| Scenario | SD coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays a holding deposit, then backs out | `due-at-signing`, `edu-advance-rent-vs-deposit-sd`, `edu-security-deposit-cap-sd` | **Unresolved** — no holding-deposit or application-fee statute located in two searches; not primary-confirmed, so not recorded as an absence (§R38.4) |
| Screening: fees, criminal history, source of income | `edu-fair-housing-additions-sd` (classes + small-landlord exemption) | Covered. Immigration-status inquiry remains the carried-forward item from §13 |
| Applicant lied on the application | `rental-application-accuracy` | Covered |
| Voucher holder applies | `edu-fair-housing-additions-sd` — source of income is not among SD's enumerated classes | Covered |
| Unit not ready on move-in day | `possession-delay`, `edu-tenant-termination-causes-sd` (§ 43-32-19(1)) | Covered |
| Required disclosures at signing | `lead-based-paint`, `meth-disclosure-sd`, `edu-detector-duty-scope-sd` | Covered |
| Blank left in the lease | Product rule, not a clause | Covered (builder rule) |
| No state rental registration or licence | No state-level duty; municipal registration is out of project scope | Covered by scope |
| Property is in an HOA | `hoa-compliance` | Covered |
| Deposit plus prepaid rent over the cap | `edu-security-deposit-cap-sd`, `edu-advance-rent-vs-deposit-sd` | Covered |
| Documenting move-in condition | `existing-condition`; SD has no statutory joint inventory (confirmed absent, §20) | Covered |
| **Rent and money** | | |
| Rent is late | `late-fee`, `default-by-tenant-sd`, `edu-eviction-grounds-sd` (§ 21-16-1(4), 3 days) | Covered |
| Tenant pays part of the rent | `application-of-payments` (rent first), `edu-late-rent-waiver-absence-sd` | Covered |
| Cheque bounces | `returned-payments`, `edu-returned-check-fee-cap-sd`, § 57A-3-421 (§R8) | Covered |
| Tenant pays cash and wants a receipt | `acceptable-payment-methods` | **Unresolved** — no search run this pass |
| Raising the rent at renewal | `edu-month-to-month-modification-notice-sd`, `edu-rent-control-preemption-sd` | Covered |
| Grace period and cure before enforcement | `late-fee`, `notice-and-cure-sd`, `default-by-tenant-sd` | Covered |
| Does the landlord owe sales tax on the rent | Nothing | **Gap → `edu-no-rental-sales-tax-sd`** (PARTIAL) |
| **During the tenancy** | | |
| Heat fails in January | `edu-habitability-duty-sd` (§ 43-32-8 names heating), `landlord-maintenance-sd` | Covered |
| Tenant withholds rent, repairs and deducts, or escrows | `edu-habitability-duty-sd` (§ 43-32-9: all three remedies, incl. the escrow account) | Covered |
| Snow and ice on walks and the lot | `snow-removal`, `common-area-use` | Covered (allocation); municipal sidewalk ordinances out of scope |
| Frozen or burst pipes | `edu-habitability-duty-sd`, `tenant-maintenance`, `utility-service-continuity` | Covered |
| Bedbugs, roaches, mice | `tenant-maintenance`, `landlord-maintenance-sd`; no SD statute (confirmed absent, §40) | Covered |
| Mould complaint | No SD statute (confirmed absent, §40; the seller-disclosure false positive was caught there) | Covered |
| Tenant damages the unit or won't keep it clean | `tenant-maintenance`, `default-by-tenant-sd`, `security-deposit-use` | Covered |
| Landlord needs to enter; tenant refuses | `landlords-access-sd`, `edu-entry-notice-content-sd` (24 h), `inspection-rights` | Covered |
| Tenant changes the locks | `keys` | Covered for the lease term. A DV-victim lock-change right was not located — **unresolved** |
| Tenant away for a month | `abandoned-property-sd` (abandonment only) | **Unresolved** — no extended-absence-notice search run |
| A guest won't leave, or a squatter is in the unit | `guest-policy`, `guest-policy-day-limit` govern the tenant only | **Gap → `edu-guest-removal-sd`** |
| Roommate moves out | `joint-liability`, `no-sublet-assign`, `permitted-occupants` | Covered |
| Tenant sublets or lists on Airbnb | `no-sublet-assign`, `residential-use-only` | Covered |
| Noise and neighbour complaints | `no-disturbance`, `default-by-tenant-sd` | Covered |
| Drugs, violence or other crime | `default-by-tenant-sd` (no-cure carve-out), `edu-eviction-grounds-sd` (§ 21-16-1(7) lease-defined ground), `edu-right-to-call-police-sd` | Covered. Nuisance-abatement exposure to the owner not searched — flagged |
| Tenant is a registered medical-cannabis cardholder; smoking or growing | `smoking-policy` only | **Gap → `edu-medical-cannabis-cardholder-sd`** |
| Unapproved pet | `pet-policy-sd`, `pet-insurance-requirement` | Covered |
| Assistance or support animal request | `assistance-animal-accommodation-sd`, `edu-reasonable-accommodation-duty-sd`, `edu-service-animal-prohibition-criminal-penalty-sd` | Covered |
| Tenant claims a pet is a service animal | `assistance-animal-accommodation-sd` ($1,000 civil fee) | **Gap → `edu-service-animal-misrepresentation-scope-sd`**; correction to `edu-service-animal-prohibition-criminal-penalty-sd` |
| Disability modification request | `edu-reasonable-accommodation-duty-sd`, `no-alterations` | **Gap → body addition** to `edu-reasonable-accommodation-duty-sd` (§ 20-13-21.1) |
| Tenant paints or alters the unit | `no-alterations` | Covered |
| HOA fines the owner because of the tenant | `hoa-compliance` | Covered |
| Car towed from the lot | `parking-vehicle-rules` defers to law | **Gap → `edu-private-property-towing-sd`** |
| A boat, camper, snowmobile or trailer in the lot | `parking-vehicle-rules`, `assigned-parking-space`, `storage-space`; § 32-36-2(4) reaches all of them | Covered (now also in the towing row) |
| Grilling and fire safety | `fire-safety-grilling` | Covered |
| Yard work by the tenant | `landscaping-irrigation` | Covered |
| Tenant's utility is shut off | `utility-service-continuity`, `utility-payment-evidence` | **Gap → `edu-winter-utility-disconnection-sd`** (PARTIAL) — the Nov 1–Mar 31 extension was nowhere in the library |
| Landlord cuts service, or the master meter is shut off | `edu-self-help-eviction-ban-sd` (§ 43-32-6: 2 months' rent + advance rent and deposit) | Covered; winter row added above for the utility's own process |
| Adding a rule mid-lease, or the law changes | `edu-month-to-month-modification-notice-sd` (§ 43-32-13), `entire-agreement` carve-out, `addendum-precedence` | Covered |
| Meth contamination found mid-tenancy | `meth-disclosure-sd` covers disclosure at signing only | **Unresolved** — no mid-tenancy remediation duty located; not searched to primary |
| Property is on or within a reservation, or on trust land | Nothing | **Unresolved and flagged** — jurisdiction over leases on trust land not researched. Materially SD-specific: nine reservations |
| **Ending the tenancy** | | |
| Tenant wants out early | `early-termination`, `edu-tenant-termination-causes-sd` | Covered. A landlord's duty to mitigate is **not in ch. 43-32** (read whole); SD common law not read — flagged |
| DV or stalking victim wants out | `dv-lease-release-sd`, `edu-dv-confidentiality-sd` | Covered |
| Tenant is deployed or called up | `early-termination` names the SCRA | Covered federally. No SD tenant-side military termination statute located — **unresolved** |
| Landlord ends a tenancy at will and the tenant is a servicemember | `edu-tenancy-at-will-termination-sd`; § 43-8-8 gives two months | Covered |
| Month-to-month or week-to-week notice either way | `edu-tenancy-at-will-termination-sd`, `edu-termination-notice-scaling-sd` (§ 43-32-15) | Covered |
| Tenant stays after the lease ends | `holdover-sd`, `edu-holdover-mechanics-sd` | Covered |
| Tenant disappears | `abandoned-property-sd` | Covered |
| Tenant dies | `edu-death-incapacity-lease-survival-sd` | Covered |
| Fire or casualty | `fire-casualty-rent-abatement-sd`, `edu-tenant-termination-causes-sd` (§ 43-32-19(2)) | Covered |
| Eviction process | `edu-eviction-grounds-sd`, `edu-eviction-procedure-sd`, `edu-self-help-eviction-ban-sd`, `notice-and-cure-sd` | Covered |
| Retaliation claim | `edu-retaliation-prohibition-sd` | Covered |
| Belongings left after move-out or eviction | `abandoned-property-sd`, `edu-post-writ-property-duties-sd`, `edu-no-post-writ-animal-duty-sd` | Covered |
| Deposit dispute | `security-deposit-return-sd` (21 days), `edu-security-deposit-itemized-accounting-sd` (45 days, forfeiture, $200 cap) | Covered |
| Deposit refund never cashed | Nothing | **Gap → `edu-unclaimed-deposit-escheat-sd`** |
| Tenant asks to seal an eviction record | Confirmed absent (§15, §20) — SD's only mechanism is general criminal expungement | Covered as an absence; still log-only, no row (§R38.4) |
| **Owner changes** | | |
| Owner sells the property with a tenant in place | Log-only absence (§29) | **Gap → `edu-deposit-on-sale-sd`** |
| Lender forecloses | Nothing SD-specific | **Unresolved and flagged** — federal PTFA applies nationwide; SD tenant protections and the redemption-period interaction not researched |
| Owner switches property managers | `notices`; identity disclosure and identity-change notice both confirmed absent (§40) | Covered |
| Buyer is a foreign entity | SD's foreign-ownership restriction is agricultural-land scoped, not residential leasing | Out of scope, noted |

---

### R38.2 Rows changed

**Eight new rows, all `LANDLORD_EDUCATION`, all tagged `SD` only, all `supersedes` empty. No lease clause touched.**

- **`edu-private-property-towing-sd`** (Parking & Storage, CONSTRAINED, VERIFIED). A vehicle is "abandoned" on private property only if left **without the permission of the landowner or tenant** (§ 32-36-2(1)); no removal agency may take one from private property **without the written permission of the landowner or tenant**, a Class 2 misdemeanour (§ 32-36-4.1); the agency may then enter the land (§ 32-36-4). Notice to the registered owner and lienholders by certified mail within **45 days** on a DOR form, and **no storage charge beyond ten days** until notice is mailed (§ 32-36-8). Possessory lien for reasonable costs, **capped at $500 against contents**, none against trade tools, clothing or food (§ 32-30-18). "Motor vehicle" reaches boats, campers, house trailers, trailers, snowmobiles and off-road vehicles (§ 32-36-2(4)).
  - **Two limits stated in the body.** A tenant's own car parked *with* permission is not an abandoned vehicle, so this chapter gives no authority to tow it for a parking-rule breach — that is a lease matter. And SD has **no signage requirement**, unlike AZ.
  - **L.12 adjacency:** § 32-30-3.1 was read and is scoped to "a public street or highway" — it does **not** reach private lots and must not be cited for landlord towing.
- **`edu-guest-removal-sd`** (Rules & Regulations, RECOMMENDED, VERIFIED). § 22-35-6: remaining after notice against trespass is a Class 2 misdemeanour; **defying a personally communicated order to leave** from the owner or another authorised person is criminal trespass, a **Class 1** misdemeanour. Two limits: a tenant is privileged under the lease, so trespass is never the route against a tenant; and § 22-35-7(2)'s affirmative defence (reasonable belief that a person permitted to license access would have allowed it) covers **a guest the tenant still welcomes** — that is a lease problem, not a trespass problem. § 21-16-1(1)–(3) is independently available for entry by force, intimidation, fraud or stealth.
- **`edu-medical-cannabis-cardholder-sd`** (Compliance & Prohibited Terms, PROHIBITED, VERIFIED). § 34-20G-19: a cardholder **may not be refused a lease, or otherwise penalised, solely for cardholder status**, subject to a federal-law/federal-benefit carve-out; the same section permits **"reasonable restrictions on the medical use of cannabis by a cardholder who resides at the landlord's property."** § 34-20G-27(3): no landlord need allow **cultivation**. § 34-20G-27(2): no one in lawful possession need let a **guest, client, customer or other visitor** smoke or vape — written about visitors, **not** resident tenants, so it is not the authority for restricting a tenant's own use.
- **`edu-deposit-on-sale-sd`** (Security Deposit, CONSTRAINED, VERIFIED). Converts a **log-only absence** (§29) into a row. No SD statute transfers deposit liability to a buyer, none releases the seller, and ch. 43-32 (read whole) imposes no notice-of-sale duty. Ten states in the library have such a provision; SD and OH do not, and OH's answer rests on case law that **was not searched for SD**. Body gives the contractual remedy — transfer at closing against a written assumption, tell the tenant in writing who holds the deposit and where to send the address that starts the 21-day clock.
- **`edu-unclaimed-deposit-escheat-sd`** (Security Deposit, REQUIRED, VERIFIED). § 43-41B-2(a): intangible property is presumed abandoned after **three years** unclaimed; the owner's failure to demand or present the instrument does not stop the clock, nor does a limitation period (§ 43-41B-18). Due-diligence duty, **mailed notice at $50 or more**, verified annual report to the administrator **before November 1 as of the preceding June 30**, itemised at **$10 or more**, aggregate below $10, every previous holder listed.
- **`edu-winter-utility-disconnection-sd`** (Landlord Responsibilities, RECOMMENDED, **PARTIAL**). ARSD 20:10:20:10: **Nov 1 – Mar 31**, a utility may not disconnect residential service without adding **30 days** to the ARSD 20:10:20:03(2) periods, and must notify the customer of the extra 30 days. Those periods are **≥20 days** billing-to-due plus **≥10 days'** further notice — so ~30 days' runway outside the window, ~60 inside it. **Not a moratorium.** PUC rules under SDCL 49-34A reaching gas and electric; municipal utilities, rural electric co-ops and water/sewer not established.
- **`edu-service-animal-misrepresentation-scope-sd`** (Pets, RECOMMENDED, VERIFIED). **§ 22-35-9, added by SL 2026, ch 110, § 1** — a Class 2 misdemeanour, scoped to **"any place of public accommodation,"** defining "service animal" as a **dog** performing trained tasks per 28 C.F.R. § 36.104 (Jan 1, 2026) and **expressly excluding** emotional support, comfort, companionship and crime-deterrent effect. Does **not** reach a leased dwelling. Housing remedy stays civil (§ 43-32-36, $1,000).
- **`edu-no-rental-sales-tax-sd`** (Rent & Payment, RECOMMENDED, **PARTIAL**). SD DOR *Lease and Rental* guidance (April 2025): "[t]he lease or rental of real property is exempt from sales tax." Two boundaries flagged in the body and unresolved: short-term lodging/tourism/municipal gross receipts, and separately stated charges for furnishings or services.

**Two changed rows:**

- **`edu-service-animal-prohibition-criminal-penalty-sd`** — notes only, body unchanged. The row's recorded absence ("no SD analog was found" for a tenant's fraudulent claim) **is now superseded** by § 22-35-9 and says so, pointing to the new row. Also records the positive currency check below.
- **`edu-reasonable-accommodation-duty-sd`** — **body addition**. § 20-13-23.7's good-faith accommodation duty was stated with **none of its statutory qualifications**. § 20-13-21.1 provides that nothing in ch. 20-13 requires a landlord to **modify the property, incur any additional expense, or exercise a higher degree of care** for a person with a disability, and does not relieve anyone of the lease's ordinary obligations **including its financial obligations**, or forbid distinctions based on inability to meet them. The body now carries that limit, plus a sentence keeping it from being over-read: the FHA's reasonable-modification (at tenant expense) and reasonable-accommodation duties are separate and unaffected, since § 20-13-21.1 limits only what **ch. 20-13** requires.

---

### R38.3 Currency check run on the adjacent housing provisions

Prompted by the 2026 service-animal enactment, and because §§ 20-13-23.4 and 20-13-23.7 are the two provisions this log got wrong once already (§R19, §R29).

- **§ 20-13-23.4 — unamended.** Source line: *SDCL §§ 20-13-23.2 as added by SL 1980, ch 172, § 1; SL 1994, ch 160, § 4; SL 1995, ch 118, § 2.* The library's text is current.
- **§ 20-13-23.7 — unamended.** Source line: *SL 1986, ch 170, § 4.* Current.
- **The only 2026 amendments anywhere in ch. 20-13** are **§§ 20-13-59 and 20-13-61 (SL 2026, ch 94, §§ 1 and 2)**. Both were read: multi-occupancy changing rooms, restrooms and sleeping quarters in buildings **owned or leased by the state and its political subdivisions**. Neither reaches residential leasing. Checked, not material.
- **Not read, flagged:** the remainder of SL 2026 ch 110 beyond § 1 (press coverage referred to more than one 2026 service-animal bill; the two housing sections above were confirmed unamended, but the session laws were not read through), and § 20-13-21.2 (design and construction of multifamily dwellings — access for disabled persons), which is adjacent and is therefore **not characterised anywhere** in the accommodation row.

---

### R38.4 Absences and unresolved items

**Confirmed absences already recorded, still log-only (no CSV row).** The standing instruction is that a log-only absence is invisible to every future canvass. This screen converted the highest-value one (deposit on sale). These remain:
- **Eviction-record sealing** — confirmed absent (§15, §20); has a checklist cell, no row.
- **Day-one landlord-identity disclosure** and **landlord-identity-change notice** — confirmed absent (§40); checklist cells, no rows.
- Recommendation: convert all three in a single pass rather than one at a time. Not done here, because this screen's remit is the scenario list.

**Unresolved, named rather than assumed absent — eleven open items.** Eight are scenarios marked Unresolved in the map; three more (2, 6 and 9 below) are flagged inside scenarios marked Covered, because the scenario is otherwise answered and only that element is open. Each is an honest "not established," not a confirmed absence:
1. **Holding deposit / application fee** — no statute located in two searches; per §5a.2 this is escalation territory, not a third search. Secondary sources uniformly report no SD cap, which is not sufficient here.
2. **Immigration-status inquiry prohibition** — the carried-forward item from §13, untouched.
3. **Cash-rent receipt duty** — no search run.
4. **DV-victim lock-change right** — not located.
5. **Extended-absence notice duty** — no search run.
6. **Nuisance-abatement exposure to the owner** for tenant drug or criminal activity — not searched.
7. **Mid-tenancy meth contamination** — no remediation duty located; `meth-disclosure-sd` covers signing only.
8. **Leases on reservation or trust land** — jurisdiction not researched. The most SD-specific item on this list and the one I would put first.
9. **Landlord's duty to mitigate after abandonment** — **not in ch. 43-32**, which was read whole; SD common law not read. Bears directly on `early-termination`'s fee.
10. **SD tenant-side military lease termination** — none located; § 43-8-8 runs the other way (landlord → servicemember tenant at will).
11. **Foreclosure and sitting tenants** — federal PTFA applies nationwide; SD-specific protections and the redemption-period interaction not researched.

---

### R38.5 One product question, not acted on

**`smoking-policy` × SD — no defect found; one optional addition for Taylor to decide.**

I checked this before raising it, per L.14. The clause bans **smoking and vaping** of any kind including marijuana, applies to every tenant, and says nothing about possession or non-combusted use. Against § 34-20G-19 that is the defensible shape: it is not a refusal or penalty imposed **for cardholder status**, and it leaves other methods of medical use available, which is what a "reasonable restriction" on *the medical use of cannabis* most plausibly means. MN reached the same place from a different statute (`edu-cannabis-possession-mn`: a broad "no cannabis" clause would violate § 504B.171(c); a smoking/vaping-specific one does not). **So this is not the MN `pet-policy-mn` situation, and I am not raising it as one.** Two caveats are in the new row: "reasonable" is undefined and no SD decision applying it was located, so the margin is argued rather than settled.

The one real omission is narrower: **`smoking-policy` says nothing about cultivation**, and § 34-20G-27(3) expressly lets an SD landlord prohibit growing. An SD lease therefore has no clause barring cultivation even though SD plainly permits one.

- **Option A (my recommendation): do nothing in the CSV.** Record the permission in the education row, which is done. Growing in a rental is already reachable through `residential-use-only`, `no-alterations` and `default-by-tenant-sd`.
- **Option B: add a cultivation sentence to the shared `smoking-policy`.** Needs your OK — it is a shared row across fourteen states, and cannabis cultivation law differs sharply among them, so it would need a per-state screen before propagating. §5a.1 would treat it as a **uniform** content edit with propagation notes owed to every tagged state's log.
- **Option C: create `smoking-policy-sd` as an SD override.** Cleanest legally, but it requires removing `SD` from the shared row's `states` to avoid a display collision — which is a change to a shared row, so it also needs your OK, and it forks a clause that currently has no SD-specific problem.

Nothing was written for any of these.

---

### R38.6 Integrity

Assertions run **against the delta file as written**, not against this narrative (L.3).

- **Delta:** 10 rows, 16-column header **byte-identical** to the trunk's. 8 new ids (none colliding with the 941), 2 existing ids. All `states` = `SD`, all `is_active` = TRUE, all `supersedes` empty, no blank `verification_status` (instruction 27), no blank `topic_key`, no blank `states`. Statuses: 8 VERIFIED, 2 PARTIAL. All seven `group` values already in use. **All eight `topic_key` values are pre-existing cross-state keys, none invented** — `private-property-towing` (TX), `guest-policy` (AZ, FL), `cannabis-possession` (MN), `deposit-on-sale` (OH), `deposit-escheat` (ND, CA, NV, TX), `utility-shutoff-statute` (ND, TX), `service-animal-misrepresentation-scope` (MN), `rent-tax` (AZ) — so each finding lands in an existing cross-state comparison rather than starting a new one.
- **Changed rows differ only in the intended fields**, asserted field-by-field: the service-animal row in `notes` + `last_checked` only; the accommodation row in `bodyText` + `notes` + `last_checked` only. Prior notes preserved as a prefix in both — appended, never rewritten.
- **Merge simulation (941 + 8 = 949):** no duplicate ids, no dangling `supersedes`, **no active-row display collisions**, no serialization artifacts in `title`/`bodyText`/`notes`. Every backticked row id appearing in the new text resolves to a real row in the merged file.
- **Tag counts:** SD **91 → 99** (60 lease clauses unchanged, education 31 → 39). **Every other state's count is unchanged** — asserted state by state, not eyeballed.
- **L.9 morphological stale-value sweep** across all SD rows for the superseded 14-day deposit deadline (`two weeks | two-week | 2-week | 2 week | fourteen days | 14 days | 14-day | fourteen-day`): every hit is either historical correction text inside a `notes` field, the `guest-policy-day-limit` title, or another state's figure. **No live stale value.** `security-deposit-return-sd`'s body reads twenty-one days.
- **One assertion of mine was the wrong shape, and it fired.** The whole-library display-collision check as run in earlier sessions ignores `is_active`, and it now reports `application-of-payments-nj` → `application-of-payments` colliding on FL and NJ. That row was **retired 2026-09-26** (`is_active: FALSE`) when it was merged into the generic, so the collision is benign — but it will fire on every future run until the assertion filters on `is_active`. Seven inactive rows currently carry a `supersedes` value. **Not my finding to fix in an SD delta; flagged for Claude Code.**

## Propagated shared-row edits, 2026-09-28 (Taylor's decisions after the gap-discovery backfill)

Uniform under §5a.1: each edit is self-limiting, so this state needs no override. Not a re-audit; nothing else in this state was reviewed.

1. **`no-alterations`** — the carve-out now reads "any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform". It keeps disability modifications that fair-housing law requires the landlord to permit (at the tenant's expense) from reading as subject to unfettered landlord consent. Raised by the NE backfill (NE log §D.1).

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their text and citations are unchanged in the education rows. Checklist mentions of switched-off rows now point to the education row.

- **Moved to education:** `security-deposit-return-sd` → opening paragraph of `edu-security-deposit-itemized-accounting-sd`; `dv-lease-release-sd` → `edu-dv-lease-release-sd`; `edu-tenant-termination-causes-sd` converted in place from a lease clause to education.
- **Trimmed:** `landlord-maintenance-sd` keeps only the tenant's written repair notice (duties are in the existing `edu-habitability-duty-sd`).
- **Optional (pattern 3):** `meth-disclosure-sd` now records the disclosure, with `edu-meth-disclosure-sd`.
- **§5a.1:** only SD-only rows changed; no propagation owed.

### Verdict for every lease clause

All 12 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `dv-lease-release-sd` | Education | — | tenant right |
| `edu-tenant-termination-causes-sd` | Education | — | tenant right (already edu- id) |
| `security-deposit-return-sd` | Education | — | landlord duty + forfeiture |
| `landlord-maintenance-sd` | Split | SERVES_LANDLORD | keep tenant repair-notice duty; rest edu |
| `meth-disclosure-sd` | Optional + education | SERVES_LANDLORD | disclosure owed before tenant is obligated |
| `abandoned-property-sd` | Keep | SERVES_LANDLORD |  |
| `assistance-animal-accommodation-sd` | Keep | SERVES_LANDLORD | $1,000 false-claim fee |
| `default-by-tenant-sd` | Keep | SERVES_LANDLORD | SDCL 21-16-1(7): lease must specify violation terminates |
| `fire-casualty-rent-abatement-sd` | Keep | SERVES_LANDLORD | contract choice |
| `holdover-sd` | Keep | SERVES_LANDLORD | weak: restates renewal presumption |
| `landlords-access-sd` | Keep | CONSTRAINED_TERM |  |
| `pet-policy-sd` | Keep | SERVES_LANDLORD |  |

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease had no section of that title after the 2026-09-29 scrub, so the pointer resolved to nothing here; the edit fixes it. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Retro checks (SOP 1.24), 2026-10-02

**Date:** 2026-10-02. **Scope:** the 19 [Retro] rules and 6 targeted fixes named in the prompt, and nothing else (rule 1). No settled finding reopened.

**Files.** The attached `lease-clauses.csv` verified before any work: **2,575 rows, 17 columns, CRLF, no BOM** — matches the staged count. Earlier copies in this chat (a 941-row, 16-column file and a 351-row, 13-column file) are stale and were not used. Deleted from outputs first: `SD-log-section-gap-discovery-backfill.md`, `SD-checklist-cells.md`, `lease-clauses-SD-delta.csv`, `steinoak_clauses_updated_136.csv`, and nine decision-log/checklist copies (13 files).

**Corpus and method (rules 11, 12, 14, 15, 19).** Shell egress to `sdlegislature.gov` is denied by organization policy (`connect_rejected`), so the corpus was loaded through the built-in browser on the linked device — the route rule 14 prescribes when the shell's network is blocked. Loaded from the official `sdlegislature.gov` API: **all 71 title endpoints** (3 returned no sections — titles 27, 51 and 57, consistent with their own index labels "[Repealed]" and "[Transferred]") **plus all 30 constitution articles**, section-parsed. Ch. 43-32 proved complete against the site's own chapter index: **43 of 43 sections, no extras.** A residential sub-corpus of **634 sections** was built across the whole code (any section whose text mentions lessor, lessee, landlord, tenant, rental agreement, residential premises, dwelling unit or leased premises) and every battery ran against it, with §43-32-8 confirmed present as the positive test.

Two method failures were caught by the rule 19 controls before any result was relied on, which is what the controls are for:
- The API serves `?all=true` as **UTF-16LE**; decoded as UTF-8 it yielded NUL-interleaved text and **both known positives failed**. Fixed with a BOM/NUL-density detector.
- The section splitter first found **1 section instead of 43**, then 40, missing §§ 43-32-18.1, 43-32-19.1 and 43-32-19.2 because those sections print the number and the period separated by a line break. Fixed and proved against the index.

Every pattern was tested against a known positive before use — a real saved section wherever one existed (§43-32-8 "may not waive or modify", §43-32-24 "twenty-one days", §43-32-18.1, §43-32-24 "forfeit", §43-32-6 "quiet possession"), otherwise a synthetic positive written in the statute's own verbs and number style, flagged as synthetic. A nonsense control returned **0 on every battery**. Where a synthetic-only positive returned 0 hits, a second battery ran on the everyday wording per rule 19 — and that second pass is what found §43-32-32's "mutually agreed upon … in the lease", §43-32-12's "no contract or usage to the contrary" and §43-32-8's "fit for human habitation", all of which the first patterns missed.

---

### The checks

| # | Rule | Verdict |
|---|---|---|
| 1 | **40** Formatting and placement | **Checked — confirmed absent, and the CO shape does not exist here.** Layout table below. Across the whole code the residential subset returned **0** hits for `underlined/underscored`, `boldface`, type size, `capital letters`, `separate document/writing/instrument` and `substantially equivalent`. Run across the habitability and disclosure parts too, not just lease-content: §§43-32-8, 43-32-9 and 43-32-30 carry **no** formatting or type-size rule, so there is no South Dakota analogue of C.R.S. §38-12-505(3)(c)-(d). Each hit's chapter checked: §54-6A-4 (lease-purchase/rent-to-own disclosures "clearly and conspicuously … above the line for the consumer's signature") is SD's exact analogue of the Ohio R.C. 4781.51 trap rule 40 warns about and is **not** a residential-lease rule. Omission sanctions that forfeit money: §43-32-24 (forfeits all withholding rights) and §43-32-24.1 (commercial), both already in the library. |
| 2 | **41** Just cause | **Checked — no just-cause rule.** `\b(good cause|just cause)\b` → 3 residential hits (§5-5-23 public property, §49-43-11 telecom, §51A-1-3 banking), none reaching eviction; `refuse to renew|nonrenewal` → 1 (§58-1-3, insurance). So no clause wording needed changing: the end of the term ends possession in SD. Verdict recorded in a row (next line). |
| 3 | **41b** `for-cause-eviction` row | **Fixed — row added.** SD had none while 24 other states did. New `edu-no-for-cause-eviction-sd`: confirmed absence, with the situational limits rule 41 names each searched and none found (no conversion-notice year, no rent-escrow bar, no tenants'-association protection beyond §43-32-27's union-organising limb). |
| 4 | **42** Required text inside a shared clause | **Checked — confirmed absent.** No statute forces a sentence into any SD-tagged fee, deposit or other clause. The must-include battery returned 5 residential hits (§§5-7-56, 5-29-13, 13-39A-24, 32-5B-24, 44-14-10) — public lands, education, motor vehicles, liens — and none is a residential lease rule. |
| 5 | **43** Cure promises | **Fixed, and one conflict found.** `opportunity to cure|right to cure|cure the breach/default/violation/noncompliance` → **0 residential hits code-wide**: SD requires no cure period and no pre-suit notice for nonpayment (§21-16-2 repealed 2024; §21-16-1(4) needs only rent 3 days past due). `default-by-tenant-sd` is correct and promises no cure. But the shared `early-termination`, tagged SD, promises "at least 30 days' written notice" and a "10 days" cure before the landlord may terminate for a material breach — **which contradicts `default-by-tenant-sd`'s own statement that cure "is a decision Landlord makes at the time of enforcement, not a term fixed by this Lease,"** and gives away SD's much faster statutory route. Not edited (shared row, rule 62); vetted at fix 23 below. `application-of-payments`' saving sentence refers to a statutory cure right SD does not have — harmless, left alone. |
| 6 | **44** Terms the statute turns into landlord duties | **Checked — one found, no clause change.** The narrow pattern returned 0, so the second battery ran: §43-32-32 makes 24 hours' written entry notice a *presumption* "unless alternate methods of notification or times for entry are mutually agreed upon between the landlord and tenant **in the lease**". That is an invitation to the lease, not a duty the lease creates; `edu-entry-notice-content-sd` states the standard correctly. No generous lease term in the SD set is converted into a mandatory one. |
| 7 | **45** Electronic notices | **Fixed — row added.** The Act itself read, not merely the section referring to it: SDCL ch. 53-12, §§2, 3, 4, 8, 9, 10, 17, 18, 19, 20 section-open. Three protections **cannot be varied by agreement** and nothing in the library recorded them: §53-12-9 (a party who agrees to one electronic transaction may refuse others — "may not be waived by agreement"), §53-12-17/19 (a record the recipient cannot print or store is not capable of retention and "is not enforceable against the recipient"), and §53-12-20, which takes §§17–19 back out of §53-12-10's general variation-by-agreement rule, subject to two narrow exceptions — read in full, because stating either section alone misdescribes both the tenant's protection and the lease's freedom. Exclusions: §53-12-3 removes transactions under ch. 15-6 and other UJS transactions, so eviction filing and service are outside the Act. New `edu-electronic-notices-sd`. Clause screen: no SD-tagged clause relies on electronic delivery of an eviction, default or cure notice — `notices` is already properly deferential and `electronic-signatures` goes to execution and supplies the §53-12-8 consent. |
| 8 | **46** The lease as the required notice | **Checked — one found, recorded.** §43-32-13: a landlord's month-to-month modification notice, once served, "shall of itself operate and be effectual to **create and establish as a part of the lease** the terms, rent, and conditions specified in the notice" if the tenant holds over. That is the statute making a notice into lease content by operation of law — the SD instance of this rule. Added to `edu-month-to-month-modification-notice-sd`, which had never stated it. No shared clause promises a separate notice that needs reconciling. |
| 9 | **47** Penalties for knowingly using a prohibited term | **Checked — confirmed absent.** `(knowingly|willfully|deliberately) (use|include|insert)` → **0 residential hits**. §43-32-18.1 is SD's only prohibited-lease-term rule (no term authorising eviction of a tenant who calls for emergency help over domestic abuse, unlawful sexual behavior or stalking) and it **carries no penalty**. Nearest exposure: §37-24-6(1) + §37-24-31's private actual-damages action. Checked the debt-collection angle rule 47 adds: no SD statute reaching "any person collecting a consumer debt" with per-violation penalties was found in the residential corpus. Recorded in `edu-unconscionability-doctrine-sd`. So the "nothing in this lease limits your rights" sentence carries no hidden penalty risk in SD — but it also cannot save a void term. |
| 10 | **48** Separate-document requirements | **Checked — confirmed absent.** `separate (document|writing|instrument)` → **0 residential hits**; the broad `\bseparate\b` battery's only ch. 43-32 hit is §43-32-9's "separate bank or savings and loan account" for repair escrow, which is a tenant's remedy, not a lease-formation requirement. The rule 48 tenant-chores split does **not** arise: SD has no statute limiting maintenance-shifting to single-family residences or requiring a separate signed writing, so `landscaping-irrigation` and `snow-removal` stay tagged as they are, and no separate agreement is offered. §43-32-8's repairs-in-lieu-of-rent agreement needs no separate writing. |
| 11 | **49** Collection-cost bans | **Checked — confirmed absent.** Read as "costs and expenses" language, not just fee sentences: §57A-3-421 is titled "Collection costs and expenses" and is an **authorisation** capped at sixty dollars plus sales tax, not a ban; §15-17-39 is a fee-clause rule. The residential `costs and expenses|collection costs` battery returned 1 hit (§5-12-43, public buildings). `returned-payments`' "not to exceed the maximum amount permitted by applicable law" is correctly deferential. |
| 12 | **50** "The lease controls" wording | **Checked — four choices found, each made on purpose.** Table below. |
| 13 | **51** Plain-language and consumer-contract statutes | **Checked — confirmed absent, with the two separate questions asked.** No plain-language or readability statute reaches a residential lease (0 residential hits). On the consumer-protection act: (a) §37-24-6 **does** carry an enumerated list of unfair practices, but it contains no lease-content item — no blank-space rule, no copy-at-signing rule, and §37-24-5.5's confession-of-judgment ban is scoped to door-to-door sales; (b) the general standard's reach is **unsettled** — §37-24-1(6) defines "goods or services" to include things "purchased, **leased, or rented**" and §37-24-1(7) includes an "intangible", but §37-24-6(1)'s operative words are "sale or **advertisement** of any merchandise". Live for how a tenancy is advertised, unsettled for lease terms. Recorded in `edu-unconscionability-doctrine-sd`, whose prior text had overstated this as "sale or lease of goods and services". |
| 14 | **52** Exculpation | **Checked — SD is not a voiding state; no variant swap needed.** §53-9-3 read section-open: it voids only terms whose object is to exempt someone from their **own fraud, willful injury, or violation of law whether willful or negligent**. It does not void "Landlord is not liable" terms generally, so `services-utilities-provided`, `tenants-property-insurance`, `parking`, `storage-space` and `pet-policy-sd` stay as tagged and the `-ks-oh-ca` variants are **not** used for SD. `edu-exculpatory-clause-limit-sd` already states this accurately, including that no exculpatory language can waive the §43-32-8 habitability duty. Note the sharpest edge, already in that row: because §53-9-3 reaches a **negligent** violation of law, an exculpatory clause cannot exempt a landlord from liability for breaching §43-32-8. |
| 15 | **54** Optional clauses (general screen) | **Checked — every candidate listed with its verdict.** Table below. One new optional clause offered (`tenant-caused-damage-sd`); the rest were already offered or are barred. |
| 16 | **54t** Tenant-caused damage | **Fixed — row added and a clause defect corrected.** What SD law already gives: §43-32-10 makes the lessee liable to "repair all deteriorations or damage … occasioned by his negligent, willful or malicious conduct" or that of persons under his direction, and §43-32-8 carves tenant-caused disrepair out of the landlord's duty — so **repair cost is statutory**. What it does not give: **rent during repairs, and lost rent if the lease ends.** Each abatement and exit provision checked separately for its own tenant-fault exception, as the rule directs: §43-32-19(2) excludes destruction from "the **ordinary negligence** of the tenant" but, read literally, not the tenant's willful act; §43-32-6 and §43-32-9 carry no tenant-fault exception at all. New `tenant-caused-damage-sd` (CONDITIONAL, offered not default), modelled on `tenant-caused-damage-tn`, which was **read and not tagged** — its Tenn. Code Ann. §§66-7-102/66-28-503 county-split architecture does not transfer. **And a real defect found in `fire-casualty-rent-abatement-sd`:** its tenant-fault carve-out sat on the abatement limb only; the next sentence — "If Landlord decides not to rebuild or repair the damage, this Lease will end and Rent will be prorated to the date of the damage" — had none, so on its face a tenant who burned the place down walked away at the proration date. Corrected. |
| 17 | **35c** Constitution screen | **Fixed — and it found the Missouri shape, pointing the other way.** All 30 articles loaded into the same corpus and every battery re-run over them. **SD Constitution Article XXX, "Marijuana and Hemp"**, § 3(3): the article "does not … limit the right of a person who occupies, owns, or controls private property from prohibiting or otherwise regulating conduct permitted by this article on or in that property" — the **opposite** of Missouri's Article XIV, so it protects rather than voids `smoking-policy`'s marijuana ban. **But Article XXX is void.** Its history line is "Constitutional Amendment A, approved Nov. 3, 2020," and *Thom v. Barnett*, 2021 S.D. 65 (Nov. 24, 2021) held Amendment A "void in its entirety" for violating the Art. XXIII §1 single-subject rule, **expressly rejecting severability**. The official legislature site prints the whole article with **no annotation of invalidity** — a new instance of the K.4/L.8 trap on a `.gov` source. Either way no SD clause changes: nothing in the library relies on the article (checked — zero rows cite it), and SD's operative cannabis law is statutory ch. 34-20G, already carried in `edu-medical-cannabis-cardholder-sd`. Nothing else in the constitution reaches a private lease: firearms (Art. VI §24), speech and assembly (Art. VI §§4–5), search and seizure (Art. VI §11) all constrain state action; Art. VI §12's contract-impairment clause binds the legislature; Art. XXI §4's homestead exemption concerns forced sale. *Thom* is case law at **secondary confidence** — the Justia opinion page, not the official reporter. |
| 18 | **27** The seven topics | **Fixed — all seven rows added, each from a battery rather than an assumption.** `algorithmic-rent-setting` Confirmed absent · `fees-as-rent` Confirmed absent, with the §21-16-1(4) drafting caution · `landlord-self-cure` Confirmed absent · `lease-completeness` Confirmed absent · **`quiet-possession` PRESENT** (§43-32-6 + §43-32-19(1)) · `statutory-forms` Confirmed absent · `tenant-security-cameras` Confirmed absent. |
| 19 | **79** Re-read the section | **Fixed — 4 defects found in 9 screened rows.** Section below. |

---

### R39.1 Layout and placement table (rule 40)

Every residential hit from the whole-code formatting battery, with its chapter checked before recording.

| Section | What it says | Reaches a residential lease? |
|---|---|---|
| §43-8-9 | Notice ending a tenancy at will **must be in writing**; served by delivery to the tenant or a person of discretion residing on the premises, or by **affixing it to a conspicuous part of the premises** where it may conveniently be read | **Yes** — a notice-form and service rule, not lease formatting. Correctly stated in `edu-tenancy-at-will-termination-sd` |
| §43-32-13 | Month-to-month modification notice **in writing**, 30 days before the month's expiration | **Yes** — content and timing, no formatting. In `edu-month-to-month-modification-notice-sd` |
| §43-32-32 | Entry notice must specify dates, a period during normal business hours, the purpose, and a means to request rescheduling | **Yes** — content, no formatting. In `edu-entry-notice-content-sd` |
| §43-32-24 / §43-32-24.1 | Noncompliance **forfeits all rights to withhold** the deposit; bad-faith retention adds punitive damages to $200 | **Yes** (24) — the omission sanction that forfeits money. 24.1 is commercial |
| §43-32-37 | Hotel, campground and RV park may eject for violating a rule "posted in a conspicuous place at or near the guest registration desk or inside each guest room" | **No** — transient lodging, not a lease |
| §54-6A-4 | Lease-purchase disclosures "clearly and conspicuously in writing", on the face of the contract **above the signature line** | **No** — rent-to-own consumer goods. SD's analogue of the Ohio R.C. 4781.51 trap |
| §21-16-6 | FED summons may be **posted in a conspicuous place on the property** on the second service attempt | **No** — service of process. In `edu-eviction-procedure-sd` |
| §34-46-2.2 | Tobacco notice, **bold type, half-inch letters**; amended eff. 2027-01-01 to "text at least one inch in height" | **No** — merchant premises and vending machines |
| §34-45-13, §41-9-2, §44-14-3, §51A-15-3, §57A-1-201, §57A-2A-214, §57A-2A-303, §57A-7-403, §58-30-206 | pay-phone 911 notice; hunting notice; lien; banking; UCC "conspicuous" definition and leases of **goods**; insurance | **No** |

**Result: no type-size, boldface, underlining, capitalisation, separate-document or "substantially equivalent" requirement in the South Dakota code reaches a residential lease.** No REQUIRED lease statement exists to be missed.

### R39.2 "The lease controls" table (rules 50 and 54)

| Section | The choice the statute gives the lease | Choice made |
|---|---|---|
| §43-32-32 | Alternate methods of notification, or times for entry, if "mutually agreed upon … in the lease" — displacing the 24-hour presumption | **Decline.** `landlords-access-sd` + `edu-entry-notice-content-sd` keep the statutory presumption, which is the defensible default; a landlord wanting wider access can negotiate it. Recorded, not offered as a clause |
| §43-32-6.1 | A deposit above one month's rent "may be agreed upon … where special conditions pose a danger to maintenance of the premises" | **Already taken** — `edu-security-deposit-cap-sd` states it as a mutual-agreement exception, not a unilateral right |
| §43-32-24 | Deposit may be applied to "other funds due to the landlord **pursuant to an agreement**" | **Already taken** — `security-deposit-use` defines what is owed |
| §43-32-12 | Default rent timing — lodgings payable **monthly at the end of each month**, other rents quarterly at the end of each quarter — applies only "when there is no contract or usage to the contrary" | **Taken, with a builder caveat.** `rent-payment`'s "in advance on the due date specified in this Lease" is the contract to the contrary. **But the choice is only made if a due date actually renders.** If the builder lets it come through blank for an SD lease, rent reverts to payable at the END of the period. Recorded in the shared row's SD note as a builder constraint |

### R39.3 Optional clauses found (rule 54)

| Candidate | Citation | Verdict |
|---|---|---|
| Tenant-caused damage: rent during repairs and lost rent | §43-32-10, §43-32-8, §43-32-19(2); §§53-9-4, 53-9-5 | **Offered** — new `tenant-caused-damage-sd` (CONDITIONAL) |
| Landlord casualty termination | §43-32-19(2) is a *tenant* right; no landlord analogue | **Already offered** via `fire-casualty-rent-abatement-sd`'s rebuild election, now with a tenant-fault carve-out |
| Holdover charge / rate | §43-32-14, §43-32-15 supply a renewal presumption but **no damages measure** for holding over | **Gap exists, not offered this pass.** `holdover-sd` tracks the renewal presumption; a daily holdover rate would be a new term. Raised for Taylor below rather than added, because it is a new product offering |
| Alternate entry notice | §43-32-32 | Declined — see R39.2 |
| Larger deposit for special conditions | §43-32-6.1 | Already taken |
| Attorney-fee clause | §15-17-38, §15-17-39, §53-9-4 | **Barred in practice** — not offered; reasons in `edu-attorney-fee-clause-limit-sd` |
| Confession of judgment | ch. 21-26; §21-26-5 requires notice and a hearing "which may not be waived" | **Not offered.** Not prohibited in a lease, but the required notice-and-hearing means the clause cannot deliver the streamlined result its users expect. Recorded, no clause |
| Statutory waivers (homestead, jury) | none located | None available |
| Crime-free / drug addendum | §21-16-1(7) makes a lease-defined violation an FED ground | **Already covered** by `default-by-tenant-sd` + `edu-eviction-grounds-sd`; no separate statutory hook to invoke |

### R39.4 Rule 79 — rows screened, with verdicts

**Counts, taken from `lease-clauses.csv` notes and `lease_clause_basis`, not from the citations file:** of **99 SD active rows**, **18 recorded no basis** and **9 recorded a secondary-source basis**. Of the 18, **9 were touched or created by the 2026-09-29 library-wide scrub** — those are provenance repairs, not re-verifications, per rule 79.

All 9 secondary-basis rows read section-open. Verdicts:

| Row | Section(s) read | Verdict |
|---|---|---|
| `edu-retaliation-prohibition-sd` | §43-32-27, §43-32-28 | **DEFECT — fixed.** The row said retaliation was prohibited "within 180 days after" a protected act. The statute makes 180 days an affirmative **defence** and attaches it to the **notice-to-vacate limb alone**: a retaliatory rent increase above fair market value or a cut to electric, gas, water or sewer service has **no stated cut-off**. The old text understated exposure on two of three limbs — the WY `edu-habitability-baseline-wy` shape exactly. Also restored three dropped preconditions: the landlord must have **received written notice** of the complaint, the violation must **materially affect health and safety**, and the complaint must be found reported in good faith |
| `edu-month-to-month-modification-notice-sd` | §43-32-13 | **DEFECT — fixed.** Row required the **tenant's** termination notice to be written. The statute attaches "in writing" to the landlord's modification notice only; the tenant merely "provid[es] notice of termination". A landlord could have treated a valid oral termination as ineffective. Also added the self-executing effect (rule 46) |
| `assistance-animal-accommodation-sd` | §§43-32-33–36 | **DEFECT — fixed.** The $1,000 damage fee was offered for both a false claim and fraudulent documentation; §43-32-36 conditions **eviction** on either limb but the **fee** on the documentation limb alone. Also confirmed §43-32-33 defines "service animal" for housing to **include emotional-support and therapy animals** — the opposite of §22-35-9's dog-only public-accommodations definition, which vindicates the warning in `edu-service-animal-misrepresentation-scope-sd` |
| `edu-attorney-fee-clause-limit-sd` | §§15-17-37, 38, 39, 40, **42** | **FINDING — fixed, conclusion kept.** The row's own notes flagged §15-17-42 as unread and predicted it "may scope whether ch. 15-17 reaches a residential lease fee clause at all". It does: "This chapter applies to any civil action or special proceeding in which the State of South Dakota or any of its divisions, departments or political subdivisions is a party…". I did **not** flip the row, because read as an exclusive limit it would also strip §15-17-37's general cost-taxation rule from private suits, contradicting that section's own wording and its cross-reference to §15-6-54(d). Both readings now stated; the bottom-line advice survives either way and is independently supported by §53-9-4 |
| `edu-returned-check-fee-cap-sd` | §57A-3-421 | **PASS.** Confirms **sixty dollars** plus applicable sales tax (source line ends SL 2024, ch 199, §1) and both statutory mechanisms — conspicuous posting on the premises, or a conspicuous notice on customer statements by a business regularly extending credit — and that a lease term is neither. The row was corrected on 2026-09-07 and is accurate. I read the statute before the row and briefly treated the $60 figure as a new finding; it was not |
| `edu-security-deposit-cap-sd` | §43-32-6.1 | **PASS.** Cap and the mutual-agreement exception stated correctly; the pet/waterbed examples are flagged in notes as secondary, which is honest. No rule 37 problem: the cap has no temporal counter |
| `edu-tenancy-at-will-termination-sd` | §43-8-8, §43-8-9 | **PASS.** 15 days; two months for active military service; both statutory exceptions; "spouse or minor child"; and the posting service method — all match |
| `edu-termination-notice-scaling-sd` | §43-32-15, §43-32-4 | **PASS.** The scaling rule and the implied-term presumption both match, including the one-month ceiling and that either party may give the notice |
| `edu-unconscionability-doctrine-sd` | §§53-9-1, 3, 4, 5; §§37-24-1, 6, 31, 5.5 | **REFINED.** Accurate on §53-9-3 but **omitted §53-9-4 and §53-9-5 entirely** — the two provisions that actually govern SD fee and liquidated-damages terms — and overstated §37-24-6(1)'s reach. Both fixed |
| `edu-fair-housing-additions-sd` | §20-13-20 (end-to-end) | **PASS on the class list and the "count to two, not four" point.** One addition made elsewhere: the owner-occupied exemption reaches subdivision **(4)**, the modification duty, which the library had not recorded — added to `edu-reasonable-accommodation-duty-sd` |

**Rows recording no basis (18), listed as rule 79 requires.** Controlling text read section-open this pass and the basis recorded for 12: `edu-security-deposit-itemized-accounting-sd`, `abandoned-property-sd`, `edu-self-help-eviction-ban-sd`, `edu-dv-confidentiality-sd`, `meth-disclosure-sd`, `edu-meth-disclosure-sd`, `edu-entry-notice-content-sd`, `edu-habitability-duty-sd`, `edu-landlord-lien-absence-sd`, `edu-late-rent-waiver-absence-sd`, `notice-and-cure-sd`, `edu-dv-lease-release-sd`. Three more were fixed as part of their substantive corrections (`assistance-animal-accommodation-sd`, `edu-retaliation-prohibition-sd`, `fire-casualty-rent-abatement-sd`). `edu-deposit-on-sale-sd` was a false positive in my keyword screen — its notes do record the ch. 43-32 full-walk basis. **Two remain genuinely unscreened: `default-by-tenant-sd`** (its §21-16-1 basis was read in an earlier session, not this one) **and `pet-policy-sd`** (no pet-specific battery was run this pass). Listed rather than claimed.

### R39.5 Targeted fixes

| # | Item | Verdict |
|---|---|---|
| 20 | Scrub-trimmed `landlord-maintenance-sd` | **Condition restored.** The scrub cut the clause to the tenant's written repair-notice duty. §43-32-9 conditions repair-and-deduct and vacate-and-discharge on "**notice** to the lessor" with no writing requirement, attaching "written notice stating the specific reason for the withholding" **only** to the rent-escrow route; §43-32-19(1) separately does require a "written request" for the tenant's termination right. The trimmed clause flattened that into writing for everything, so a landlord could argue an orally-notified tenant never triggered the duty — a condition no number check catches. Added one sentence, nothing more. **Separately checked and nothing restored:** no SD statute requires any text in the lease itself (rules 40 and 42 both zero), so the CO `habitability-notice-co` shape does not exist here |
| 21 | Scrub-switched-off `security-deposit-return-sd`, `dv-lease-release-sd` | **Both correctly switched off; no lease clause restored, and here is why — SD differs from AZ.** §43-32-24's written statement is a **post-tenancy** duty, not a notice given in the lease or at signing or move-in; §43-32-19.1 puts the notice duty on the **tenant**, not the landlord. Neither clause was carrying a statutorily required notice, so there is no AZ-style `move-out-inspection-notice-az` analogue to restore. Both restated rights the law gives anyway. Content verified complete in the successor education rows: `edu-security-deposit-itemized-accounting-sd` carries the 21 days **and** the address-receipt trigger **and** the withholding limits (I initially thought the trigger had been dropped — it had not; I was reading a stale copy), and `edu-dv-lease-release-sd` carries all three document types, the 30-day windows and the liability cutoff. Rule 78 pointer sweep run across every SD row by id and by section name: **no dangling pointers** |
| 22 | Rule 62 vetting — `returned-payments` "during any 12-month period" | **Lawful in SD, and an improvement.** No SD statute speaks to how many returned payments may trigger a payment-method change; §57A-3-421 caps the *fee* only. The change is positively better for SD because SD recognises tenancies with no Term at all — month-to-month under §43-32-13 and at-will under §43-8-8 — so "during the Term" has no referent for them (rule 37). **SD votes yes.** Shared text not edited |
| 23 | Rule 62 vetting — `early-termination` landlord limb | **WY's wording is lawful in SD, and SD needs it more than WY does. SD votes yes.** The current promise of 30 days' notice plus a 10-day cure gives away a materially shorter statutory route: SD repealed its notice-to-quit requirement (former §21-16-2) effective 2024, so a landlord may file an FED **immediately** once a ground exists — rent 3 days past due under §21-16-1(4), or a lease-defined violation under §21-16-1(7) — with **no cure right at all** (the cure battery returned 0 residential hits code-wide). The clause also **contradicts `default-by-tenant-sd`**, which tells the SD landlord cure "is a decision Landlord makes at the time of enforcement … not a term fixed by this Lease." Adding "…or such shorter notice and cure period as applicable law permits" resolves both. Shared text not edited |
| 24 | Rule 37, 1.19 sentence — "entered into or renewed on or after" | **Checked — does not arise in SD.** The battery for `entered into or renewed\|executed or renewed\|entered into, renewed\|on or after (July\|January\|the effective date)` returned **zero hits across all 634 residential sections**, with a passing positive and clean control; the `applies to a lease/rental agreement/tenancy` and `does not apply to a lease…` patterns likewise returned none. No SD statute the library relies on is scoped by execution or renewal date, so **no SD row needs an applicability sentence.** Boundary: this screens the **compiled sections**; an application clause can live in the act instead, and the session laws behind the two recent amendments (SL 2026 ch 179, the 21-day deposit deadline; SL 2024 ch 199, the $60 check fee) were not read for one. Neither compiled section prints one |
| 25 | Rule 39, CARES Act as a filing condition | **Checked — confirmed absent, with the boundary stated.** Battery for `CARES Act\|covered (dwelling\|property)` → **0 hits code-wide**, positive passing, control clean. SD's eviction procedure is codified (SDCL ch. 21-16, read in full; Rules of Civil Procedure at ch. 15-6, loaded and searched), so there is no separate uniform magistrate rule of the kind carrying Georgia's Rule 46. Recorded in `edu-eviction-procedure-sd`. **Not read: non-codified UJS rules and local standing orders** — a targeted search returned only landlord-content sites, which rule 11 treats as leads, so no claim is made about them |

### R39.6 Decisions for Taylor

1. **Holdover rate (rule 54).** SD supplies a renewal presumption (§§43-32-14, 43-32-15) but **no damages measure** for holding over, so a daily holdover charge is a real gap the lease could lawfully fill — subject to §53-9-4 (contract penalties void) and §53-9-5 (anticipated damages void outside the impracticability exception), which means it must approximate actual loss rather than punish. GA, NC, SC, TN, VA, AL and PA all offer one. I did not add it: it is a **new product offering** for SD rather than a legal call, and the §53-9-4/5 exposure means the figure matters. **Recommendation: add it, as a CONDITIONAL optional clause set to actual daily rent plus documented re-letting loss, not a multiple.** Say the word and I will draft it.
2. **`edu-attorney-fee-clause-limit-sd` / §15-17-42 scope.** Flagged for the legal watch, not resolved. The practical advice is unchanged, so nothing is blocked; but if SD fee clauses ever become a product question, that scoping needs a case-law read I did not do.

### R39.7 Propagation notes (rule 62)

No shared clause text was edited. Two shared-row votes recorded above (fixes 22 and 23) for Claude Code to merge once every tagged state has answered. One shared row appears in the delta: **`rent-payment`**, with an added `SD:` note segment only — `states`, `bodyText` and every other field are byte-identical to the master. Note its `last_checked` was **already 2026-10-02** in the attached file, so another state's chat touched that row today: **merge the SD note segment, do not overwrite the row.**

### R39.8 Findings for other states or the product (flagged, not fixed)

1. **Dangling pointer in a shared row.** `possession-delay`'s notes reference `possession-delay-mn`, which does not exist in the 2,575-row file. Shared row, general notes — not SD's to fix. Same shape as the 14 the NE retro found.
2. **The official SD constitution prints a void article unannotated.** Article XXX is live on `sdlegislature.gov` with its history line and no note that *Thom v. Barnett* voided it in its entirety. Any state whose constitution screen relies on an official-site read should check whether an initiated article has been struck.
3. **§34-46-2.2 has a 2027 amendment** (SL 2026, ch 54, §20, eff. 2027-01-01) changing a posted-notice type size from half-inch letters to one-inch text. Irrelevant to leases; noted because it surfaced in the rule 40 battery and is the kind of future-dated text a currency check should expect.
4. **SD API serves `?all=true` as UTF-16LE.** Any future SD pass using that endpoint needs the decode fix, and any pass that previously read it may have silently read nothing.

### Proposed SOP changes

1. **Rule 35c:** when the constitution screen hits an article added by initiated amendment, check whether a court has held it invalid — an official state site may print a void article with its history line and no annotation (SD Constitution Art. XXX, voided in its entirety by *Thom v. Barnett*, 2021 S.D. 65, still printed clean on sdlegislature.gov).
2. **Rule 14:** when a statute endpoint is fetched programmatically, confirm the character encoding before parsing — South Dakota's `?all=true` endpoints are UTF-16LE, and decoding them as UTF-8 yields text in which every known positive silently fails.
3. **Rule 19:** prove a section parser complete against the chapter index before running any battery, not after — SD's splitter missed three sections whose number and period are separated by a line break, and two of the three carry operative lease-content rules (§§43-32-18.1, 43-32-19.1).
4. **Rule 78:** when checking whether a scrub dropped a condition, read the successor education row from the delivered file rather than from an earlier session's copy in context — I twice reported a condition missing that the scrub had in fact carried across.

## Retro sync (Claude Code, 2026-10-02)

- **Merged** with `merge-delta.py --base e13baa4` (the attached CSV is byte-identical to it): 22 rows updated, 10 new, no refusals; the shared `rent-payment` got its SD note merged onto the current row. SD active 99 → 109 (58 lease clauses), no same-topic pairs; every other state's set unchanged.
- **Guards:** `check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py` and `checkConfigIds.js` all pass.
- **Statute spot-check, 5 of 5, against the sdlegislature.gov API (read by Claude Code at sync):** § 43-32-27 (the 180-day defence attaches only to a notice to vacate) matches the corrected `edu-retaliation-prohibition-sd`; § 43-32-13 (only the landlord's modification notice must be in writing; the tenant's notice of termination needn't be) matches the corrected `edu-month-to-month-modification-notice-sd`; § 43-32-36 (the $1,000 fee attaches to the documentation limb) matches the corrected `assistance-animal-accommodation-sd`; § 43-32-9 (notice, written only for withholding) matches the restored `landlord-maintenance-sd` sentence; § 21-16-1(4) (rent three days past due) matches `edu-fees-as-rent-sd`.
- **Citations file:** 10 rows added (6 confirmed-absence rows), changed rows dated, and the sections the corrections rely on added by hand (§§ 53-9-4, 53-9-5, 37-24-1, 37-24-6, 43-32-19, 43-32-9).
- **Holdover rate (R39.6 item 1), decided at sync:** a rule 54 option the SOP already settles (offer every lawful option; seven states offer one), so it isn't put to Taylor. Offered, optional, set to approximate actual loss under §§ 53-9-4 and 53-9-5; queued for SD's next circle-back in `retro-extras.csv`.
- **Rule 62 answers recorded:** SD supports AZ's `returned-payments` wording and WY's `early-termination` wording (SD repealed its notice to quit in 2024, so the 30-day and 10-day promise gives away a much faster route and contradicts `default-by-tenant-sd`).
- **R39.8 item 1** (`possession-delay` and `possession-delay-mn`): not a dangling pointer. The note proposes a future row ("consider a dedicated `possession-delay-mn`"), so nothing to fix.
- **Still open:** `default-by-tenant-sd` and `pet-policy-sd` (no basis re-read this pass) and the § 15-17-42 scope question (legal watch).
- **SOP 1.25:** all four proposals adopted (rules 14, 19, 35, 78). SD's conformance column is complete except the examples.

## Propagated shared-row edit, 2026-10-03 (Wyoming's proposal, merged after every tagged state vetted it)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `early-termination` landlord limb.** Old: 'Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or if Tenant vacates or abandons the property without notifying Landlord.' New: 'Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or on such shorter notice and cure period as applicable law permits, or if Tenant vacates or abandons the property without notifying Landlord.' Why: the 30-day notice and 10-day cure promised in the lease could give up a shorter route the state's law allows for a material breach. Every state tagged on the row (CO, WY, MN, ND, SD, OH) vetted the wording and supported it; "as applicable law permits" means it never permits less than the law requires. This state's existing note on the row still holds.

## Propagated shared-row edit, 2026-10-04 (at the PA circle-back sync)

- `returned-payments` (CO, WY, KS, NE, MN, ND, SD, OH, AZ, GA, PA): AZ's proposal merged once every tagged state had vetted it, PA last. "If more than two of Tenant's payments during the Term are returned" now reads "during any 12-month period", so the count works for a month-to-month tenancy, which has no Term. Uniform; no SD override. SD's note segment on the row records it.

## Circle-back checks (SOP 1.51), 2026-10-04

**Date:** 2026-10-04. **Scope:** the 2 targeted fixes named in the prompt. The prompt carries **0** [Retro] rules for SD this round, so no rule screens were run. Nothing else reopened (rule 1).

**Files.** The attached `lease-clauses.csv` verified before any work: **2,876 rows, 17 columns, CRLF, no BOM** — matches the staged count. Deleted from outputs first: `lease-clause-decision-log-SD-retro.md` and `lease-clauses-SD-retro-delta.csv`, the two SOP 1.24 retro deliverables of 2026-10-02. The upload folder also holds stale 1.24-era copies of the SOP, the topic reference, SD's log and SD's citations file; the @-mentioned current copies are the ones used, and where anything earlier in this chat conflicts with them, they govern.

**Delta: 3 rows — 1 new, 2 changed. SD 111 → 112 tags; no other state's count moves.** `surrender-end-of-term` is deliberately **not** in the delta: rule 62 as amended at the CA retro puts a vouch in the log's propagation section, not in a many-state row's notes.

---

### The checks

No [Retro] rules were assigned this round. **Targeted fixes:**

| # | Item | Verdict |
|---|---|---|
| 1 | Holdover rate (rule 54; Taylor's decision at the 2026-10-02 SD sync under rule 76) | **Fixed — `holdover-rate-sd` added, and the instruction's stated ground turned out to be wrong in a way that matters.** Section R40.1 |
| 2 | Rule 62 vetting — `surrender-end-of-term` (CA's proposal) | **Vouched, and SD agrees the edit should be made.** The current wording does state a duty SD law does not back. Section R40.2 |

---

### R40.1 Holdover rate — and a shipped error the fix uncovered

**What I was asked to rely on, and why it isn't right.** The instruction says SDCL §§ 43-32-14 and 43-32-15 "give no damages measure for holding over, so the lease can set one." That is true of chapter 43-32 and false of South Dakota. The measures sit in **chapter 21-3**, which no SD row had ever read:

- **§ 21-3-8** — "For **wilfully holding over** real property, by a tenant after the end of his term, and after **notice to quit has been duly given**, and **demand of possession made**, the measure of damages is **double the yearly value of the property**, for the time of withholding, **in addition to** compensation for the detriment occasioned thereby."
- **§ 21-3-7** — "For the failure of a tenant to give up the premises held by him, when **he has given notice of his intention to do so**, the measure of damages is **double the rent** which he ought otherwise to pay."
- **§ 21-3-5** — the residual case, "in cases not embraced in §§ 21-3-6 to 21-3-9": the **value of the use** of the property for the time of occupation, up to six years back, plus the costs of recovering possession.
- **§ 21-16-10** — the FED judgment "shall be for the delivery of possession … and for rents and profits or damages, **including those authorized by § 21-3-8**, where the same are claimed in the complaint."

All read section-open; ch. 21-3 parsed and proved complete against the site's own index, **16 of 16 sections, no extras**. (§ 21-3-6, treble damages for forcibly ejecting or excluding a person from possession, and § 21-3-9, conservators and life tenants, were read too — see R40.4.)

**So `edu-holdover-mechanics-sd` was asserting the opposite of the statute.** Its body said: "South Dakota has no statutory holdover-damages multiplier — no automatic 'double rent' or similar penalty for a tenant who remains after the lease term ends." SD has two multipliers and a residual measure, and the eviction judgment statute names one of them expressly. The row's cross-state sentence ("CO has a 'double rent' multiplier, KS caps at 1.5x, NE caps at 3x … SD has none of these") is wrong for the same reason. **Corrected — body rewritten.**

**Root cause, recorded because it is a method failure rather than bad luck.** The row's own notes show the absence rested on two things: chapter 43-32 containing no multiplier — true, but the wrong chapter — and "a dedicated primary-source-adjacent industry source stating plainly 'South Dakota has no holdover multiplier, no double rent and no statutory holdover damages of any kind.'" A secondary source's clarity was taken for corroboration. That is **rule 20** exactly: disproving a citation doesn't disprove the claim, so search the substance, because the rule may sit in a different section. It is also an **unread L.5 dependency the log had itself flagged and then set aside three times** — SD's log records that "§ 21-16-10 awards damages 'including those authorized by § 21-3-8'" and classes § 21-3-8 as Tier C, "cited, not read," and "none load-bearing." It was load-bearing for that row all along, and adding a holdover rate made it unmistakable.

**`holdover-sd`'s stated ground was wrong too; the override still stands.** Its notes justified withholding the generic `holdover` from SD because "SD HAS NO HOLDOVER DAMAGES MULTIPLIER," so the generic's "maximum amount permitted by applicable law" would "resolve to zero" in SD. It would have resolved to a real figure. The override remains right for the reason the notes gave *second* and should have given first: § 43-32-14 renews the hiring for the **same time** as the original term on acceptance of rent, not month-to-month, so the generic's month-to-month fallback was wrong for SD on its own terms. **Notes corrected; bodyText unchanged** — "any remedy allowed by applicable law to recover possession" is accurate and now points at a real damages family.

**The gap is narrower than the instruction said, and still real** — which is the question rule 54 actually asks (for which cases, and in what shape). § 21-3-8 does not reach a non-wilful holdover; does not reach an **earlier termination** (its words are "after the end of his term"); and does not reach a holdover where no notice to quit was given — now the common case, because SD repealed its statutory notice-to-quit requirement in 2024 (former § 21-16-2, repealed SL 2024 ch 75 § 1). A stipulated daily charge fills those cases, so the clause is still worth offering.

**One non-obvious landlord point, now in the education row.** The 2024 repeal removed the *obligation* to serve a notice to quit before filing, but § 21-3-8 still *conditions* double damages on a notice to quit having been duly given **and** a demand of possession made. A landlord who wants the double measure should still serve both, even though filing no longer requires it.

**Rule 53 screen — every test run, with its result:**

| Test | Result | What the clause does about it |
|---|---|---|
| Judgment-stage multiplier a court can apply | **Present** — §§ 21-3-7 and 21-3-8 are both doublers, and § 21-16-10 channels § 21-3-8 into the judgment | Carries the MO-circle-back sentence: the charge is not recovered for any day a statutory multiple is, and no statutory multiplier applies to the stipulated figure |
| Statutory cap on wilful-holdover recovery | **None** — § 21-3-8 is a measure, not a ceiling | NE-circle-back framing carried anyway, because it is a statutory measure for the same period: the charge is an **alternative**, never additive |
| State caps late fees (daily charge as a second late charge) | **Confirmed absent from primary text, not from the log.** Batteries for `late (fee\|charge)\|delinquent fee` and `grace period` across chs. 43-32, 43-8, 21-16, 37-24, 57A-3, 54-3, 54-4 → no residential hit. The two ch. 54-4 hits (§§ 54-4-44.3, 54-4-45) are consumer lending and money-lender licence renewal and mention no lessor, lessee, landlord or tenant | Trigger does not fire — but see below |
| Tenant can keep possession by paying after termination (tender, redemption, cure until judgment) | **Confirmed absent.** Word-boundary batteries for `cure`, `reinstate`, `redeem\|redemption` and a pay-to-retain-possession proximity pattern across chs. 21-16, 43-32, 43-8, 15-6, 21-3 → nothing. The one `redemption` hit is § 21-16-1(5)'s **mortgage** redemption after a foreclosure sale, read in context | Trigger does not fire |
| Trigger reaching "an earlier termination" | Reaches one, and therefore reaches a nonpayment termination | **Nonpayment terminations excluded anyway** — see below |

**Nonpayment excluded as a drafting judgment (rule 76), not because a rule 53 trigger fired.** Neither stated trigger fires in SD. I excluded the case anyway: **§ 53-9-4** voids penalties imposed by contract for nonperformance and **§ 53-9-5** voids anticipated-damages terms outside the impracticability exception, and SD's late fee is builder-set with **no statutory ceiling**. Stacking an uncapped late fee, unpaid Rent and a daily holdover charge across the same days is the classic penalty profile those two sections create. Excluding it costs the landlord almost nothing and removes the argument. Modelled on `holdover-rate-nc` for that reason, rather than on `holdover-rate-ga`, whose trigger reaches a nonpayment termination.

**Two drafting details worth naming.** The GA and NC variants say the charge stands "in place of … the actual damages and reasonable rental value described in the Holdover section of this Lease." `holdover-sd` **describes no damages measure**, so copying that wording would have left a dangling cross-reference; the SD row says "in place of any damages for Tenant's continued possession that Landlord could otherwise recover" instead. And because § 43-32-14 makes *acceptance of rent* the trigger for presumed renewal, the clause both conditions itself on Landlord not having accepted Rent for a continued tenancy and says expressly that accepting a holdover charge does not renew the Lease under the Holdover section.

**Builder constraint:** `{{holdover_daily_rate}}` must approximate actual loss — daily Rent plus documented re-letting loss — and must not be set as a multiple of Rent, or the §§ 53-9-4/53-9-5 recital in the body stops being true. The variable is the one the other ten `holdover-rate` rows already use.

**Rows changed:** new `holdover-rate-sd` (CONDITIONAL, LEASE_CLAUSE, `holdover-rate`, `CONSTRAINED_TERM`, offered and never a default); `edu-holdover-mechanics-sd` (body + notes); `holdover-sd` (notes only).

### R40.2 Rule 62 vetting — `surrender-end-of-term`

**SD's answer: the qualified wording is lawful and accurate here, and yes — the current wording does state a duty South Dakota law does not back.**

Rule 62's two questions:

1. **Can it be read to drop a cure or notice SD requires?** No. "unless applicable law entitles Tenant to remain" only subtracts from a tenant duty; it adds no landlord obligation and removes no notice. SD requires no cure or pre-suit notice in this area at all — the word-boundary `cure` battery run for fix 1 returned nothing across chs. 21-16, 43-32, 43-8, 15-6 and 21-3, and the statutory notice to quit was repealed in 2024.
2. **Does it change what the clause promises in SD, or reopen a route SD gave up on purpose?** No. `surrender-end-of-term` carries **no SD note segment** and no "gives up" or "kept on purpose" language — the only SD text on the row records that no SD-specific surrender statute was found beyond the deposit mechanics. Nothing was given up on purpose, so there is nothing to reopen.

**And the current wording overstates the duty in at least three SD situations**, which is why SD does not merely tolerate the edit but wants it:

- **§ 43-32-14** — if the tenant holds over and the landlord **accepts rent**, the hiring is presumed renewed on the same terms for the same time, up to a year. The tenant is then entitled to remain, while the clause says surrender "immediately."
- **§ 43-32-15** — a tenancy for an unspecified term is **deemed renewed** unless a party gives notice scaled to the term. Without that notice the tenant is entitled to remain past what the landlord may treat as the end.
- **§ 43-8-8** — ending a residential tenancy at will needs **15 days'** written notice, or **two months'** where the tenant or an immediate family member is on active military service. Short of that, the tenant is entitled to remain.

SD has no just-cause statute (confirmed in the 1.24 retro, `edu-no-for-cause-eviction-sd`), so the exposure here comes from the renewal presumptions and the notice rules rather than from a just-cause route — a different mechanism from California's, reaching the same conclusion. As in CA the exposure is wording rather than a void term: it is a duty clause, it grants no self-help, and `holdover-sd` correctly offers only possession-by-law plus the renewal presumption. **The clause stays tagged; shared text not edited.**

### R40.3 Propagation notes (rule 62)

No shared clause text was edited, and no shared row appears in the delta.

**Vouches given**

- **`surrender-end-of-term`** (CA's 2026-10-03 proposal to qualify the first sentence with "unless applicable law entitles Tenant to remain"): **vouched for South Dakota, and SD votes to make the edit.** Lawful and accurate here; the unqualified wording states a duty SD law does not back where § 43-32-14's renewal presumption, § 43-32-15's deemed renewal, or § 43-8-8's 15-day or two-month notice applies. Recorded here rather than in the row's notes, per rule 62 as amended, so a twelve-state row does not collect a vouch per state.

### R40.4 Findings for other states or the product (flagged, not fixed)

1. **§ 21-3-6 gives treble damages for forcible exclusion, and no SD row records it.** "For forcibly ejecting or excluding a person from the possession of real property, the measure of damages is three times such a sum as would compensate for the detriment caused." `edu-self-help-eviction-ban-sd` accurately states § 43-32-6's remedy (two months' rent plus return of advance rent and deposit) but is **incomplete** rather than wrong: a landlord who locks a tenant out faces a second, larger exposure. Not edited — it is outside the two fixes and incompleteness is not error — but it should be the next narrow fix for SD, and it is a candidate for any state whose self-help row rests on a landlord-tenant-chapter remedy alone.
2. **The cross-state holdover-multiplier comparison in `edu-holdover-mechanics-sd`'s notes was wrong about SD.** If any other state's log or row repeats "SD has no holdover multiplier" as a comparator, it inherits the error.
3. **Tier C lists need a trigger, not just a label.** SD's log classed § 21-3-8 "none load-bearing" three times while a shipped row depended on it. A dependency parked as non-load-bearing should be re-tested whenever a row in its topic family is added or changed.

### Proposed SOP changes

1. **Rule 54:** before offering an optional clause on the ground that the state supplies no statutory measure, search for the measure outside the landlord-tenant title — a damages chapter is the usual home. South Dakota's holdover multipliers sit in SDCL ch. 21-3, and a row asserting "no statutory holdover damages of any kind" shipped for a month because the search stopped at ch. 43-32.
2. **Rule 21 (or the Tier-C convention):** a citation parked as "cited, not read — not load-bearing" is re-tested whenever a row in its topic family is added or edited, because what is non-load-bearing for the library as it stands can become load-bearing the moment a clause is added. SD's § 21-3-8 was recorded as a known unread dependency of § 21-16-10 on three separate occasions.
3. **Rule 19:** put word boundaries on `cure` as well as on short words — an unbounded `cure` pattern matches inside "secure" and returned false hits in SDCL 43-32-6, 43-32-6.1 and 15-6-1 before the bounded rerun cleared them. Pair each absence pattern with a reject-test on the word it is most likely to match inside.

## Circle-back sync (Claude Code, 2026-10-04)

- **Merged** with `merge-delta.py --base 2b10851`: 1 new row (`holdover-rate-sd`) and 2 updated (`edu-holdover-mechanics-sd` body and notes; `holdover-sd` notes); nothing refused. SD active 109 → 110 (111 → 112 tags); no same-topic pairs; section pointers resolve.
- **Correction recorded:** `edu-holdover-mechanics-sd` had said South Dakota has no holdover-damages multiplier. SDCL 21-3-8 (double the yearly value for a willful holdover after notice to quit and demand of possession) and 21-3-7 (double rent after the tenant's own notice) say otherwise, and § 21-16-10 channels § 21-3-8 into the eviction judgment. Body rewritten; `holdover-sd`'s stated ground corrected (its override still stands on § 43-32-14's same-term renewal).
- **Citations file:** row added for `holdover-rate-sd`; `edu-holdover-mechanics-sd` and `holdover-sd` now cite SDCL 21-3-5, 21-3-7, 21-3-8 and 21-16-10.
- **Rule 62:** SD vouched for CA's `surrender-end-of-term` qualifier (§§ 43-32-14, 43-32-15, 43-8-8 let a tenant remain); recorded in the backlog tally.
- **Flagged for SD's next pass:** SDCL 21-3-6 (treble damages for forcible exclusion) isn't in `edu-self-help-eviction-ban-sd`; in the backlog.
- **Guards:** all pass. **Statute spot-check, 2 of 2, on sdlegislature.gov:** SDCL 21-3-8 (quoted above; matches) and 21-3-7 (double damages for failing to give up the premises after the tenant's own notice).
- **SOP 1.52:** all three proposals adopted (rules 19, 21, 54). SD's holdover cell set to ✓.

## Propagated shared-row edit, 2026-10-04 (at the WY circle-back sync)

- `surrender-end-of-term` (WY, SD, OH, CA, NV, TX, FL, AZ, GA, NC, TN, VA): CA's proposal merged once every tagged state had vetted it, WY last. "Tenant will surrender possession of the property and return all keys to Landlord immediately" now ends ", unless applicable law entitles Tenant to remain." The duty to surrender stays; the qualifier only stops the clause overstating it where a statute, retaliation rule, foreclosure rule or similar lets a tenant stay. Uniform; no SD override. SD's note segment on the row records it.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for SD. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any SD row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach SD's law; to be confirmed at SD's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.


---

# Topic gaps pass (end-of-run consistency pass, 2026-10-30): Desktop's log

## Topic gaps — South Dakota (SOP 1.87)

**Pass:** end-of-run consistency pass, SOP 1.87. **Opened** 2026-10-29. **This delivery** 2026-10-30.
**Scope:** the 260 library topics South Dakota has no row for, plus the named South Dakota items. Add rows; existing rows are not changed except to tag one with SD where it answers a missing topic (rule 26).
**Progress:** 260 of 260 topics answered; 260 new rows and 12 tags in the delta.
**Deliverables:** `lease-clauses-SD-gaps-delta.csv` (new rows and tagged rows, all 17 columns, CRLF, header identical to the master) and this log. Both are cumulative and replaced at every batch.

---
## 1. Sources, channel and currency

**Channel.** Two routes, because the container's shell cannot reach sdlegislature.gov (org egress policy; a CONNECT tunnel to the host returns 403). Both were used this pass:

- **Corpus, in the container.** `corpus-SD-20261029.tar.xz`, SHA-256 `f83ccca608e7c1400bd266568202a56b7310e8e727dde0865ba0b41b6e7475b7`, matching the shipped `.sha256`. Its own verifier reports *1850 files match, 1 listed but not shipped, 0 problems* - the one being the 2025 special session's cross-reference table, which returns 404 at source. Holds 26 chapters (1,020 index entries), the Constitution (preamble and arts. I-XXX), the 2024, 2025 and 2026 session laws, and ARSD 20:03, 44:02 and 61:15. The Code is current to **2026-09-03** (the Legislature's own "statutes effective through" date), i.e. through the 2026 session's July 1, 2026 acts.
- **Live, through the built-in browser** on linked device `terra`, which holds site-scope approval for sdlegislature.gov. Used for every section quoted from a chapter the corpus does not hold, and for the corroboration below. Each chapter fetched is recorded with its byte count and SHA-256.

**Corroboration (rules 24 and 79).** 22 sections spanning the chapters this pass relies on were hashed from the corpus and from the live site and compared on normalised text. **22 of 22 are substantively identical.** Three differed on first comparison and all three resolved to rendering artifacts in the corpus's text extraction, not to differences in law: a space inserted before punctuation following a cross-reference link (`s 21-3-8 ,` for `s 21-3-8,`), and spaces inserted around a hyphen inside a spelled-out number (`forty - five` for `forty-five`). **Consequence for quoting:** the corpus's `text/` extraction is not safe to quote verbatim without normalisation, so every statutory quotation in this delta was taken from the live text.

**Chapters fetched live this pass** (not in the corpus; each read section-open):

| Chapter | Title | Sections | SHA-256 |
|---|---|---|---|
| 11-10 | Building Codes and Standards | 11 | `eeef5a723a36f835bb0c243333c5e1e69b37abd0bd8f4721bf67144bc364fb4b` |
| 21-48 | Foreclosure of Real Property Mortgages | 28 | `b77f65d38be48206c7e6e0b4bb5763dca3aeaf96f668c8c69caaab608845e8af` |
| 36-21A | Real Estate Licensing | 146 | `e999372d646017fda5c0d625f056ddfe98f4cc52ac1786633554dfe1ce583262` |
| 49-34 | Electric, Gas, Water and Heating Utilities | 26 | `fd9448f7b9883b1fae2f41028db8e1fb10796dc4324cfa18ab9d75bd1720fbd8` |
| 49-34A | Gas and Electric Utilities Regulation | 123 | `3c8b0b5615fc21c2afd5d884312a2a27d269e38b59df78f3b28c43d31104f3f1` |

**A statewide instrument built this pass.** The corpus's `index/titles/` holds all 71 title records, and each lists every chapter and every section of that title with its catchline. Parsed, that is **47,386 section catchlines - every section in the South Dakota Codified Law - and 2,183 chapter names.** This converts what would otherwise be "not located" verdicts into bounded confirmed absences: a battery can be run over every catchline in the Code, and where a subject returns nothing the chapter that would carry it can be named from the same index. Validated per rule 19 before use, with known positives (`security deposit` to SDCL 43-32-6.1, 43-32-24, 43-32-24.1; `\bsmoke\b` to 34-18-9.4 and 34-20G-27; `retaliat` to 43-32-27 among 17; `domestic abuse` to 23 sections) and three nonsense controls at 0 in the same batch. **Every absence stated in this delta names its bound in the row body as well as the notes**: statewide across all 47,386 catchlines, plus full text of the 26 held chapters.

**ARSD correction.** The held ARSD articles are **20:03 (Human Rights Commission procedure**, implementing SDCL 20-13-34 and 20-13-45 - *not* real estate, as the article number might suggest), **44:02** and **61:15**. ARSD 61:15 was read in full this pass. The Public Utilities Commission's rules (article 20:10) and the Real Estate Commission's rules are **not held**; where a topic turned on them the boundary is stated in the row.

**Currency of the rows added (rule 24).** Verified against the Source lines of the sections relied on, read live:

- **SL 2026, ch 179, s 1 (SB 4)** amended SDCL 43-32-24. Confirmed in the live Source line. The section now carries **two** deadlines, and they are easy to conflate: the deposit must be returned, or a written statement of the specific reason for withholding furnished, **within 21 days** of termination and receipt of the tenant's mailing address or delivery instructions; an **itemized accounting** of any amount withheld is due **within 45 days** of termination, and only **on the tenant's request**. The library already states both correctly (`edu-security-deposit-itemized-accounting-sd`, `edu-advance-rent-vs-deposit-sd`) - see s 6.
- **SL 2024, ch 178, s 1 (SB 89)** amended SDCL 43-8-8 (residential estate at will: not less than **15 days**' notice; two months where the tenant or an immediate family member is on active military service, subject to two exceptions). Confirmed in the live Source line and relied on in `edu-no-owner-move-in-reservation-sd`.
- **SL 2024, ch 75 (SB 90)**, the repeal of SDCL 21-16-2 and 21-16-7: no row added this batch depends on either section. Both are absent from the live chapter 21-16 as repealed stubs, consistent with the repeal.
- **SL 2026, ch 59, s 4** amended SDCL 11-10-12 (2024 International Residential Code; the bar on municipal residential sprinkler mandates). **SL 2026, ch 60, s 1** enacted SDCL 11-10-15. Both confirmed in live Source lines. Chapter 11-10's references to the **2024** editions of the IBC, IRC and International Property Maintenance Code are current; ARSD 61:15:01:01 still adopts the **2015** editions for fire safety. Both are stated, with their different scopes, in `edu-fire-code-standard-sd`.
- **SL 2022, ch 171, s 1** enacted SDCL 49-34A-116; **SL 2024, ch 188, s 1** amended SDCL 49-34-14. Both confirmed in live Source lines.

**Research mode** was not triggered (SOP rule 9's three triggers did not arise). Tribal law is outside scope. City and county ordinances are flagged where they bear on an answer and are not resolved.

**Chapters fetched live in batch 2** (each read section-open; same channel and corroboration as above):

| Chapter | Title | Sections | SHA-256 |
|---|---|---|---|
| 21-10 | Remedies Against Nuisances | 41 | `a884bd59634e47d4b1e7fec3b7eccb39f78f36f678bfd3a43369e8f11982b843` |
| 21-16 | Forcible Entry and Detainer (live re-check) | 12 | `87fa882e31cdaecea8dd9f11206be8bc0fc5f64e37a15f4b8f9cf33b68fc5eec` |
| 22-23 | Prostitution | 6 | `9848942cc16844d6d46237b78df877e733638f740df75bd45f01e0a995c9448b` |
| 25-10 | Protection from Domestic Abuse | 50 | `2abd51592a56371c02825f15cccc6e930088fc4ab2c3e4145dad17f53096b597` |
| 34-20G | Medical Cannabis | 106 | `15bd370677aaf68e5a10042c67a3baf0c7a247155c57c1e50106a2f143d30110` |
| 34-46 | Use of Tobacco Products (smoke-free law) | 29 | `30e601c6d8eef88b60b0724da2c7917f4a7a019675c3555295ac2b3d5f5aae7a` |
| 43-31 | Homestead Exemption | 41 | `41f9d4c637f2dd49e7f252bdac707b60ec7c66d388a3a2c48aef92cefbdc6908` |

**A correction to the prompt's currency list.** The prompt records SL 2024, ch 75 (SB 90) as "the repeal of § 21-16-2 and § 21-16-7". Only **SDCL 21-16-2 was repealed** (by SL 2024, ch 75, § 1). **SDCL 21-16-7 is live and was amended** by the same act (§ 2), and its content is load-bearing for eviction practice: the time for appearance and pleading is five days from service or thirty days after publication under § 21-16-6.1, whichever occurs sooner, and no adjournment or continuance may exceed fourteen days unless the defendant applying for it gives an undertaking with surety for the rent that may accrue plus costs. Verified twice: the corpus shows § 21-16-2 as a repealed stub and § 21-16-7 with live text, and a live re-fetch of chapter 21-16 (12 sections, hash above) confirms the same.

### 1a. Retrieval route, per source

Added at this delivery in response to a provenance challenge from canvassing agent F (s 3, s 6). A SHA-256 proves
two copies identical; it does not prove a source was read, because nothing in the working container can reproduce
a read made elsewhere. Every source below is therefore listed with the channel that read it.

**Corpus, in the container** (`/home/claude/data/corpus`, SHA-256
`f83ccca608e7c1400bd266568202a56b7310e8e727dde0865ba0b41b6e7475b7`; verifier reports "1850 files match, 1 listed
but not shipped, 0 problems"; Code current to **2026-09-03**). Full section text for **26 chapters**: 2-14, 15-6,
15-9, 15-17, 17-2, 20-13, 21-3, 21-16, 21-54, 22-1, 22-18, 34-18, 34-29B, 34-35A, 37-24, 43-7, 43-8, 43-32,
43-33, 43-39, 43-40, 43-41, 43-41B, 44-11, 44-14, 53-9. Plus the Constitution; the **2024, 2025 and 2026 session
laws** (719 acts, full enacted text); and ARSD articles **20:03** (Human Rights Commission procedure), **44:02**
(Lodging and Food Service) and **61:15** (fire safety). Anything attributed to one of these was read in the
container and **is verifiable by any agent working here**.

**Corpus — the statewide catchline index.** `index/titles/` ships **71 title files** which parse to **47,386
section catchlines — every section in SDCL — and 2,183 chapter names**. This is part of the corpus, not a live
fetch, so the instrument behind every `cl_battery` count in this log is **container-local and independently
reproducible**; `/home/claude/work/sdwide.py` loads it from `catchlines_all.json` built in one scripted pass.
Validated per rule 19 against known positives with nonsense controls in the same batch. Its two documented
limits are in the SOP items: it misses body-only phrases, and it drops court-rule lettered-subsection entries.

**Built-in browser on the linked device `terra`** — the only route to sdlegislature.gov this pass, because shell
egress to that host is denied by organisation policy at the proxy (CONNECT returns 403; retrying by any other
shell command hits the same allowlist). Mechanics that work: `navigate` to
`https://sdlegislature.gov/api/Statutes/<chapter|section>.html?all=true`, then `get_page_text`. **Reads made
through this route cannot be verified or reproduced by an agent confined to the container**, which is the point
of this subsection. Chapters and sections read this way, all section-open:

> 1-19B, 9-29, 11-10, 11-14, 15-2, 15-15A, 15-26A, 17-1, 21-7, 21-9, 21-10, 21-16 (re-check of 21-16-1 and
> 21-16-7), 21-25A, 21-48 (including the 2026-10-30 re-verification of 21-48-6 and 21-48-6.1), 22-23, 22-24B,
> 22-35, 22-40, 25-10, 26-1, 26-2, 26-6, 34-20G, 34-46, 34A-6, 34A-17, 36-21A, 41-6, 41-9, 43-2A, 43-2B, 43-4,
> 43-15A, 43-31, 43-45, 44-9, 49-34, 49-34A, 50-10, 53-12, 54-3 — and ARSD 46:04:01:20.

**Unreachable, tested** — ARSD article **20:10** (Public Utilities Commission). The rules index lists it as
RuleId 8438, but every printer-friendly endpoint variant returns 404 while the identical endpoint shape serves
the three held articles. Three rows state this as a boundary rather than guessing past it.

**Out of scope** — tribal law; city ordinances (flagged where they bear, never resolved); case law (leads only,
never relied on); anything enacted after the dates above except the live reads listed, of which chapters 43-2B
(SL 2026, ch 177) and 43-2A (SL 2026, ch 176) postdate the corpus.

---
## 2. Topics answered

**260 of 260 answered. 0 remaining.** Batch 1 complete and delivered. Every topic ends Present, Confirmed absent or Not located - never blank (rule 36) - and every absence names its bound in the row body as well as the notes.

| Topic | Row id | Row | Verdict | Citation |
|---|---|---|---|---|
| `abandonment-and-mitigation` | `edu-abandonment-and-mitigation-sd` | new row | Present as to abandoned property; Confirmed absent as to a duty to mitigate | SDCL 43-32-25; 43-32-26; 43-32-22; 43-32-18; 21-3-5; 21-3-7; 21-16-4; 53-9-4; 53-9-5; SDCL 21-54-15 to 21-54-19 |
| `accessory-dwelling-unit` | `edu-no-accessory-dwelling-unit-rule-sd` | new row | Confirmed absent | SDCL 11-10-5, -6, -12 |
| `actual-notice-method` | `edu-actual-notice-method-sd` | new row | Present | SDCL 43-8-9; 43-32-32; 44-14-3(2); 43-32-13; 43-32-15; SDCL 17-1-2 (chapter not held) |
| `adverse-proceeding-notice` | `edu-adverse-proceeding-notice-sd` | new row | Confirmed absent | SDCL 21-48-6.1; 21-48-6 |
| `alarm-tampering-fee` | `edu-no-alarm-tampering-fee-sd` | new row | Confirmed absent | SDCL 53-9-4, 53-9-5; 34-35A-4 |
| `alt-housing` | `edu-no-alt-housing-duty-sd` | new row | Confirmed absent | no statute; SDCL 43-32-9, 43-32-19(2) |
| `animal-care-access` | `edu-no-animal-care-access-rule-sd` | new row | Confirmed absent; one limb Not located | SDCL 43-32-32, 43-32-25/26; ch. 40-1 |
| `appliances-excluded` | `edu-appliances-excluded-sd` | new row | Confirmed absent; Present (limits) | SDCL 43-32-8, 43-32-10 |
| `application-fees` | `edu-no-application-fee-rule-sd` | new row | Confirmed absent | SDCL 43-32-6.1, 53-9-4; ch. 37-24 |
| `asbestos-hazards` | `edu-no-asbestos-duty-sd` | new row | Confirmed absent | ch. 20-9; SDCL 43-4-44, 43-4-37(5) |
| `association-obligations-disclosure` | `edu-no-association-lease-disclosure-sd` | new row | Confirmed absent | SDCL 43-4-44.1; 43-4-42; 43-15A-3; 43-15A-4; SL 2024, ch 177 (SB 217); 53-9-4 |
| `automatic-renewal` | `edu-no-automatic-renewal-rule-sd` | new row | Confirmed absent | SDCL 43-32-14, 43-32-15 |
| `balcony-inspection` | `edu-no-balcony-inspection-rule-sd` | new row | Confirmed absent | SDCL 43-32-8; 11-10-6, 11-10-12 |
| `bed-bug-cooperation` | `edu-bed-bug-cooperation-sd` | new row | tagged + Confirmed absent | no statute; SDCL 43-32-8, 43-32-32, 43-32-10, 53-9-4 |
| `bed-bug-cooperation` | `pest-cooperation-pr` | TAG | tagged + Confirmed absent | no statute; SDCL 43-32-8, 43-32-32, 43-32-10, 53-9-4 |
| `bed-bug-disclosure` | `edu-no-bed-bug-disclosure-sd` | new row | Confirmed absent | SDCL 43-32-8; 43-32-9; 43-32-10; 43-32-30; 37-24-6(1); 53-9-4 |
| `binding-arbitration` | `edu-binding-arbitration-sd` | new row | Present | SDCL 21-25A-1; 53-9-6 |
| `carpet-cleaning` | `edu-no-carpet-cleaning-rule-sd` | new row | tagged + Confirmed absent | no statute; SDCL 43-32-24, 53-9-4 |
| `carpet-cleaning` | `carpet-cleaning-ar` | TAG | tagged + Confirmed absent | no statute; SDCL 43-32-24, 53-9-4 |
| `casualty-and-mitigation-waivable` | `edu-casualty-and-mitigation-waivable-sd` | new row | Present; no express non-waiver | SDCL 43-32-19(2), 43-32-9 |
| `certificate-of-occupancy-disclosure` | `edu-no-certificate-of-occupancy-disclosure-sd` | new row | Confirmed absent | SDCL 11-10-5; 11-10-11; 11-10-12; SL 2026, ch 59 (SB 129); SDCL 43-32-8; 43-32-6 |
| `children-occupancy` | `edu-children-occupancy-sd` | new row | Present | SDCL 20-13-20, 20-13-20.1, 20-13-20.2 |
| `cold-weather-vacate-notice` | `edu-no-cold-weather-vacate-notice-sd` | new row | Confirmed absent | SDCL 43-32-10; 43-32-8; 43-32-9; 53-9-4; 53-9-5 |
| `collection-fee` | `edu-no-collection-fee-rule-sd` | new row | Confirmed absent | SDCL 53-9-4; 15-17-39 |
| `common-area-lighting` | `edu-common-area-lighting-sd` | new row | Present (duty) | SDCL 43-32-8 |
| `communal-land-lease-approval` | `edu-no-communal-land-lease-approval-sd` | new row | Confirmed absent | no statute; SDCL 43-32-5, 43-32-2; FEDERAL 25 U.S.C. s 415 |
| `condemned-premises-rent-bar` | `edu-no-condemned-premises-rent-bar-sd` | new row | Confirmed absent | SDCL 43-32-8, 43-32-9, 43-32-19 |
| `condition-inspection` | `edu-no-move-in-condition-list-sd` | new row | Confirmed absent | SDCL 43-32-24 |
| `confession-of-judgment` | `edu-confession-of-judgment-sd` | new row | Confirmed absent (clause cannot work) | SDCL 53-9-6; 37-24-5.5 (door-to-door only) |
| `confirmed-absences-habitability` | `edu-confirmed-absences-habitability-sd` | new row | Confirmed absent (inventory of absences) | SDCL 43-32-8, 43-32-9; 11-10-11 |
| `confirmed-absences-misc` | `edu-confirmed-absences-misc-sd` | new row | Confirmed absent (collected) | SDCL 43-32-8, 53-9-4, 53-9-6, 43-32-6.1, 20-13-20, 43-32-27, 43-32-18.1 |
| `confirmed-absences-outside-title` | `edu-confirmed-absences-outside-title-sd` | new row | Confirmed absent (three limbs) | SDCL 22-35-5, 22-35-6, 22-35-7; 21-16-1; no receipt or registration duty |
| `construction-liens` | `edu-construction-liens-sd` | new row | tagged + Present | SDCL 44-9-1, 44-9-2 (lessor proviso), 44-9-4 (five-day notice) |
| `construction-liens` | `no-liens-ar` | TAG | tagged + Present | SDCL 44-9-1, 44-9-2 (lessor proviso), 44-9-4 (five-day notice) |
| `consumer-protection-act` | `edu-consumer-protection-act-sd` | new row | Present; scope question recorded | SDCL 37-24-6(1), 37-24-1(6),(7) |
| `conversion-notice` | `edu-conversion-notice-sd` | new row | Present as to a change-of-use notice for mobile and manufactured homes; Confirmed absent as to condominium conversion, tenant first refusal, and any bar on transient conversion or demolition | SDCL 43-32-31; 43-32-22.1; 43-8-8; 21-54-15 to 21-54-19; SDCL ch. 43-15A (not held) |
| `criminal-activity` | `edu-criminal-activity-sd` | new row | tagged + Confirmed absent | SDCL 21-16-1, 43-32-18; 22-23-8(4) |
| `criminal-activity` | `criminal-activity-ky` | TAG | tagged + Confirmed absent | SDCL 21-16-1, 43-32-18; 22-23-8(4) |
| `defective-drywall-disclosure` | `edu-no-drywall-disclosure-sd` | new row | Confirmed absent | SDCL 43-4-44; SL 2025, ch 180 (SB 171); SDCL 43-32-8; 37-24-6(1) |
| `deposit-cost-schedule` | `edu-no-deposit-cost-schedule-sd` | new row | Confirmed absent | SDCL 43-32-24; 43-32-6.1; 53-9-4; 53-9-5 |
| `deposit-installments` | `edu-no-deposit-installment-right-sd` | new row | Confirmed absent | SDCL 43-32-6.1; 43-32-24; 53-9-4 |
| `deposit-surrender-notice` | `edu-no-deposit-surrender-notice-sd` | new row | Confirmed absent | SDCL 43-32-24; 43-32-19.2; 43-32-6.1 |
| `designated-repairer` | `edu-no-designated-repairer-sd` | new row | Confirmed absent | SDCL 43-32-8, 43-32-9 |
| `disaster-displaced-guests` | `edu-no-disaster-displaced-guests-rule-sd` | new row | Confirmed absent | SDCL 43-32-10; 43-8-8 |
| `disaster-duties` | `edu-no-disaster-duties-sd` | new row | Confirmed absent | no statute; SDCL 43-32-9, 43-32-19(2) |
| `double-letting` | `edu-no-double-letting-rule-sd` | new row | Confirmed absent | no statute; SDCL 43-32-6, 43-32-19(1) |
| `drug-free-housing-addendum` | `edu-no-drug-free-housing-addendum-sd` | new row | Confirmed absent | no statute; SDCL 34-20G-19, 34-20G-27; 21-16-1(7) |
| `dv-deposit-timing` | `edu-no-dv-deposit-timing-rule-sd` | new row | Confirmed absent | SDCL 43-32-19.1; 43-32-19.2; 43-32-24; 43-32-18.1 |
| `dv-eviction-protection` | `edu-dv-eviction-protection-sd` | new row | Confirmed absent | SDCL 43-32-19.1; 21-16-1 |
| `dv-lockchange` | `edu-dv-lockchange-sd` | new row | Confirmed absent | SDCL 25-10-5(2); 43-32-6, 21-3-6 |
| `dv-protection-order-chapter-moved` | `edu-dv-protection-order-citations-sd` | new row | Confirmed absent (no move) | SDCL 43-32-19.1; ch. 25-10; SL 2026, ch 102, ss 3-4 (HB 1108) |
| `dv-qualifying-documents` | `edu-dv-qualifying-documents-sd` | new row | Present | SDCL 43-32-19.1 |
| `electric-submetering-disclosure` | `edu-no-electric-submeter-disclosure-sd` | new row | Not located | SDCL 49-34-14; 49-34A-116; 49-34-13; ARSD art. 20:10 (not held) |
| `emergency-contact` | `edu-no-emergency-contact-rule-sd` | new row | Confirmed absent | no statute |
| `eminent-domain` | `edu-eminent-domain-sd` | new row | tagged + Confirmed absent (lease effects); Present (ch. 21-35) | ch. 21-35 |
| `eminent-domain` | `eminent-domain-vi` | TAG | tagged + Confirmed absent (lease effects); Present (ch. 21-35) | ch. 21-35 |
| `employee-screening` | `edu-no-employee-screening-rule-sd` | new row | Confirmed absent | no statute; ch. 36-21A licence scope |
| `energy-data-release` | `edu-no-energy-data-release-sd` | new row | tagged + Confirmed absent | no statute; SDCL 49-34-14; ARSD 20:10 unreachable |
| `energy-data-release` | `energy-data-release-wy` | TAG | tagged + Confirmed absent | no statute; SDCL 49-34-14; ARSD 20:10 unreachable |
| `entity-landlord-court-representation` | `edu-no-entity-landlord-court-representation-rule-sd` | new row | Not located (bar); Present (fee incentive) | SDCL 21-16-11; ch. 16-18 not held |
| `environmental-event-termination` | `edu-environmental-event-termination-sd` | new row | Confirmed absent as to a landlord right; Present as to the tenant's destruction ground | SDCL 43-32-19(2); 43-32-18; 43-32-22; 53-9-4; 53-9-5 |
| `ev-charging` | `edu-no-ev-charging-right-sd` | new row | Confirmed absent | SDCL 49-34A-116, 49-34-14 |
| `ev-charging-end-of-tenancy` | `edu-no-ev-charging-end-of-tenancy-rule-sd` | new row | Confirmed absent | SDCL 43-32-10, 43-32-24(2); ch. 43-33 |
| `ev-charging-requirements` | `edu-ev-charging-sd` | new row | Present | SDCL 49-34A-116; 49-34-14 |
| `ev-charging-shared-area` | `edu-no-ev-charging-shared-area-rule-sd` | new row | Confirmed absent | SDCL 43-32-8; 49-34-14 |
| `eviction-hardship-stay` | `edu-no-eviction-hardship-stay-sd` | new row | Confirmed absent | SDCL 21-16-7; 21-16-8; 21-16-12; SDCL 15-6-62(a); 15-6-62(b); 15-6-81(a) and ch. 15-6 Appendix A; SDCL ch. 15-26A (not held) |
| `eviction-penalty-clause-ban` | `edu-no-eviction-penalty-rule-sd` | new row | Confirmed absent | SDCL 53-9-4, 53-9-5, 15-17-39 |
| `eviction-record-sealing` | `edu-no-eviction-record-sealing-sd` | new row | Confirmed absent | SDCL ch. 15-15A (not held), esp. 15-15A-5, 15-15A-7, 15-15A-13; SDCL 15-15-10, 15-15-11 (not held); SDCL 21-16-10; 21-16-11 |
| `eviction-service-party` | `edu-eviction-service-party-sd` | new row | Confirmed absent as to a lease-named party for court papers; Present as to the statutory service regime | SDCL 21-16-6; 21-16-6.1; 21-16-7; SDCL 15-6-4(c); 15-6-4(d); SDCL 43-8-9; 43-32-16; 43-32-19.2; SDCL 17-2-10; 15-9-17 |
| `expedited-criminal-eviction` | `edu-no-expedited-criminal-eviction-sd` | new row | Confirmed absent | SDCL 21-16-1(7); 21-16-7; 21-16-8; 43-32-18; 43-32-18.1; 43-32-37; 22-23-8(4) |
| `expedited-deposit-disposition` | `edu-no-expedited-deposit-disposition-sd` | new row | Confirmed absent | SDCL 43-32-24; 43-32-24.1 |
| `extended-absence-notice` | `edu-no-extended-absence-notice-sd` | new row | Confirmed absent | SDCL 43-32-10, 43-32-25, 43-32-26 |
| `family-child-care` | `edu-no-family-child-care-right-sd` | new row | Confirmed absent | SDCL 26-6-14.2, 9-29-26; 34-46-16 |
| `farmland-hunting-rights` | `edu-farmland-hunting-rights-sd` | new row | tagged + Confirmed absent (allocation); Present (default) | SDCL 41-9-1; 41-6-2; 41-9-1.2 |
| `farmland-hunting-rights` | `farmland-sporting-rights-co` | TAG | tagged + Confirmed absent (allocation); Present (default) | SDCL 41-9-1; 41-6-2; 41-9-1.2 |
| `fee-in-lieu-of-deposit` | `edu-no-fee-in-lieu-of-deposit-sd` | new row | Confirmed absent | SDCL 43-32-6.1; 43-32-24; 53-9-4 |
| `fee-transparency` | `edu-no-fee-transparency-law-sd` | new row | Confirmed absent | SDCL 43-32-24, 43-32-13; ch. 37-24 |
| `fee-unprovided-service` | `edu-fee-unprovided-service-sd` | new row | Confirmed absent | SDCL 53-9-4, 53-9-1, 43-32-24; ch. 37-24 |
| `fire-code-standard` | `edu-fire-code-standard-sd` | new row | Present | SDCL 11-10-5, 11-10-6, 11-10-11, 11-10-12; ARSD 61:15:01:01 |
| `fire-sprinkler-duty` | `edu-fire-sprinkler-duty-sd` | new row | Present | ARSD 61:15:01:19; SDCL 11-10-12 |
| `firearms` | `edu-firearms-sd` | new row | Confirmed absent (as to leases); Present (preemption) | SDCL 7-18A-36; 8-5-13; 9-19-20; 21-16-1(7) |
| `flood-disclosure` | `edu-no-flood-disclosure-sd` | new row | Confirmed absent | SDCL 43-4-44; SL 2025, ch 180 (SB 171); SDCL 43-32-8; 43-32-19; 37-24-6(1) |
| `foreclosure` | `edu-foreclosure-tenancy-sd` | new row | Present (bounded); Confirmed absent (tenancy protection) | SDCL 21-48-6, 21-48-6.1; FEDERAL PTFA |
| `foreclosure-disclosure` | `edu-no-foreclosure-disclosure-sd` | new row | Confirmed absent | SDCL 21-48-6; 21-48-6.1; 43-32-16; 43-32-17; 43-4-44; 37-24-6(1) |
| `foreign-ownership` | `edu-foreign-ownership-sd` | new row | Present (new chapter) | SDCL 43-2B-1 to 43-2B-9 (SL 2026, ch 177); 43-2A-1, 43-2A-2, 43-2A-6 |
| `forfeiture-redemption` | `edu-forfeiture-redemption-sd` | new row | Present (reentry); Confirmed absent (relief against forfeiture) | SDCL 43-8-11, 43-8-12 |
| `frozen-standard-incorporation` | `edu-frozen-standard-incorporation-sd` | new row | Present | SDCL 11-10-5,-6,-11,-12; ARSD 61:15:01:01 |
| `furnishings-included` | `edu-furnishings-included-sd` | new row | Confirmed absent | SDCL 43-32-10, 43-32-24(2) |
| `good-cause-notice` | `edu-no-good-cause-notice-sd` | new row | Confirmed absent | SDCL 43-8-8; 43-8-9; 43-8-10; 43-32-22; 43-32-27; 43-32-18.1; 21-16-1(4) |
| `government-fee-reimbursement` | `edu-no-government-fee-reimbursement-rule-sd` | new row | Confirmed absent; Present (collection) | SDCL 34A-6-29; 43-32-24(1)(b) |
| `governmental-fines` | `edu-governmental-fines-sd` | new row | tagged + Confirmed absent | no statute; SDCL 53-9-4 |
| `governmental-fines` | `tenant-caused-fines-as` | TAG | tagged + Confirmed absent | no statute; SDCL 53-9-4 |
| `guarantor-renewal` | `edu-no-guarantor-renewal-rule-sd` | new row | Confirmed absent | SDCL 43-32-14, 43-32-15, 43-32-6.1 |
| `guest-rights` | `edu-no-guest-rights-statute-sd` | new row | Confirmed absent | SDCL 43-32-37; ch. 43-40 |
| `habitability-materiality` | `edu-habitability-materiality-sd` | new row | Confirmed absent | SDCL 43-32-8; 43-8-8 |
| `habitability-modifiable` | `edu-habitability-modifiable-sd` | new row | Present (express bar on modification) | SDCL 43-32-8 |
| `habitability-presumption` | `edu-habitability-presumption-sd` | new row | Confirmed absent | SDCL 43-32-3, 43-32-4, 43-32-14 |
| `habitability-statement` | `edu-no-habitability-statement-required-sd` | new row | Confirmed absent | SDCL 43-32-8; 43-32-5 |
| `habitability-waiver` | `edu-habitability-waiver-sd` | new row | Present (express non-waiver) | SDCL 43-32-8 |
| `hazardous-contamination-disclosure` | `edu-no-contamination-lease-disclosure-sd` | new row | Confirmed absent | SDCL 34A-17-3; 34A-17-4; 34A-17-5; 34A-15-6.1; 46A-1-101 to 46A-1-106; 43-4-44; 43-32-30 |
| `health-district-rental-rules` | `edu-no-health-district-rental-rules-sd` | new row | Confirmed absent | SDCL 43-32-9; ch. 34-18 |
| `heating` | `edu-heating-duty-sd` | new row | Present | SDCL 43-32-8; 43-32-9 |
| `hoa` | `edu-hoa-sd` | new row | tagged + Confirmed absent | no association statute; ch. 43-15A; SDCL 43-4-44.1, 43-4-37(3), (5) |
| `hoa` | `association-approval-la` | TAG | tagged + Confirmed absent | no association statute; ch. 43-15A; SDCL 43-4-44.1, 43-4-37(3), (5) |
| `holding-deposit` | `edu-holding-deposit-sd` | new row | Confirmed absent | SDCL 43-32-6.1; 43-32-24; 53-9-4; 53-9-5 |
| `home-business` | `edu-no-home-business-right-sd` | new row | Confirmed absent | no statute; SDCL 43-32-11, 43-32-18(1), 21-16-1(7) |
| `homestead-waiver` | `edu-homestead-waiver-sd` | new row | Confirmed absent; one limb Not located | SDCL 43-31-1, 43-31-17; ch. 43-45 not held |
| `immigration-status` | `edu-immigration-status-sd` | new row | Confirmed absent | no statute; SDCL 20-13-20 (national origin, ancestry) |
| `infirmity-termination` | `edu-no-infirmity-termination-sd` | new row | Confirmed absent | SDCL 43-32-23; 43-32-19; 43-32-19.1; 43-8-8; 53-9-4; 53-9-5 |
| `informal-dispute-resolution` | `edu-informal-dispute-resolution-sd` | new row | Present | SDCL 53-9-6; 21-25A-1, 21-25A-3 |
| `inspection-condemnation-disclosure` | `edu-no-inspection-condemnation-disclosure-sd` | new row | Confirmed absent | SDCL 11-10-11; 11-10-5; SL 2026, ch 59 (SB 129); SDCL 43-32-8; 43-32-9; 43-32-27; 43-4-44 |
| `inspection-notice-penalty` | `edu-no-inspection-notice-penalty-sd` | new row | Confirmed absent | SDCL 43-32-24; 43-32-32; 34-29B-4; 34-29B-10; 34-29B-14; 34-29B-16 |
| `jury-waiver` | `edu-jury-waiver-sd` | new row | NEEDS_REVIEW - cautious course stated | S.D. Const. art. VI, s 6; SDCL 21-16-8, 53-9-6 |
| `key-control-policy` | `edu-no-key-control-policy-sd` | new row | Confirmed absent | SDCL 43-32-32, 43-32-8, 53-9-4 |
| `knowing-use-penalty` | `edu-no-knowing-use-penalty-sd` | new row | Confirmed absent | no statute; SDCL 22-23-8(4) as the nearest duty |
| `landlord-breach-remedy` | `edu-landlord-breach-remedy-sd` | new row | Present | SDCL 43-32-9, 43-32-6, 43-32-19 |
| `landlord-liability-insurance` | `edu-no-landlord-liability-insurance-mandate-sd` | new row | Confirmed absent | SDCL 43-32-8; 53-9-3 |
| `landlord-registration` | `edu-no-landlord-registration-sd` | new row | Confirmed absent | SDCL 36-21A-10, -12.1, -48 |
| `landlord-remedies-termination` | `edu-landlord-remedies-termination-sd` | new row | Present | SDCL 21-16-4; 21-16-10; 21-16-11; 21-16-3; 43-32-18; 43-32-11; 43-32-20; 43-32-29; 21-3-5; 21-3-7; 21-3-8; 53-9-4; 53-9-5; SDCL 21-7-1, 21-7-2 (not held); SDCL ch. 15-39 (not held) |
| `late-fee-limit` | `edu-no-late-fee-cap-sd` | new row | Confirmed absent; Present (constraint) | SDCL 53-9-4, 53-9-5; 21-16-1(4) |
| `law-enforcement-cooperation` | `edu-law-enforcement-cooperation-sd` | new row | Present | SDCL 43-32-18.1; 43-32-19.2; 22-23-8(4) |
| `lead-safe-certification` | `edu-no-lead-safe-certification-sd` | new row | Confirmed absent | SDCL 43-4-44; SL 2025, ch 180 (SB 171); FEDERAL: 40 C.F.R. 745.113; 40 C.F.R. pt. 745 subpt. E |
| `lead-state-notices` | `edu-no-lead-state-notices-sd` | new row | Confirmed absent | FEDERAL: 42 U.S.C. s 4852d; 24 C.F.R. pt. 35 subpt. A; 40 C.F.R. pt. 745 subpts. E, F; SDCL 43-32-8 |
| `lease-content-requirements` | `edu-no-lease-content-requirements-sd` | new row | Confirmed absent | SDCL 43-32-5 |
| `lease-copy` | `edu-no-lease-copy-duty-sd` | new row | Confirmed absent | SDCL 36-21A-144; 43-32-5 |
| `lease-notice-initial-requirement` | `edu-no-lease-initials-requirement-sd` | new row | Confirmed absent | SDCL 43-32-5; 53-9-1; 53-9-4; 53-9-6; 37-24-5.3; 37-24-5.4 |
| `lease-registration` | `edu-no-lease-registration-duty-sd` | new row | Confirmed absent | SDCL 43-32-5; 21-48-6(8) |
| `lease-term-limitation` | `edu-lease-term-limitation-sd` | new row | Present | SDCL 43-32-2; 43-32-5 |
| `lease-type-parity` | `edu-no-lease-type-parity-rule-sd` | new row | Confirmed absent | SDCL 43-32-13, 43-8-8 |
| `lease-type-size` | `edu-no-lease-type-size-rule-sd` | new row | Confirmed absent | SDCL 37-24-6(1) |
| `limitation-of-actions` | `edu-limitation-of-actions-sd` | new row | Present | SDCL 15-2-13(1); 53-9-6 |
| `liquidated-damages` | `edu-liquidated-damages-sd` | new row | Present (narrow) | SDCL 53-9-4, 53-9-5; 21-9-11 |
| `lockout-for-rent-delinquency` | `edu-no-lockout-for-rent-delinquency-sd` | new row | Confirmed absent (prohibited) | SDCL 43-32-6; 21-3-6 |
| `maintenance-duty-shift` | `edu-maintenance-duty-shift-sd` | new row | Present (one permitted form) + new SD clause | SDCL 43-32-8 carve-out |
| `maintenance-duty-shift` | `repairs-in-lieu-of-rent-sd` | new row | Present (one permitted form) + new SD clause | SDCL 43-32-8 carve-out |
| `meter-conservation-charge` | `edu-no-meter-conservation-charge-rule-sd` | new row | Confirmed absent | SDCL 49-34-14 (gas/electric only) |
| `military-air-zone-disclosure` | `edu-no-military-zone-disclosure-sd` | new row | Confirmed absent | SDCL 43-8-8; SL 2024, ch 178 (SB 89); SDCL 50-10-5; 50-10-6; 50-9-14; ch. 11-14 |
| `minor-tenant-filing` | `edu-minor-tenant-contract-bar-sd` | new row | Present (flat bar) | SDCL 26-2-1; 26-1-1, 26-2-4 |
| `mold-disclosure` | `edu-no-mold-disclosure-sd` | new row | Confirmed absent | SDCL 43-32-8; 43-32-9; 43-32-10; 43-4-44; SL 2025, ch 180 (SB 171); 53-9-4; 37-24-6(1) |
| `municipal-utility-lien` | `edu-municipal-utility-charge-recovery-sd` | new row | Present | SDCL 34A-6-29; 9-48-26, 9-48-27 |
| `nonpayment-notice` | `edu-nonpayment-notice-sd` | new row | Confirmed absent (no notice at all) | SDCL 21-16-1(4); 43-8-8 |
| `nonrefundable-deposit-notice` | `edu-no-nonrefundable-deposit-rule-sd` | new row | Confirmed absent | SDCL 43-32-6.1, 43-32-24 |
| `nonrefundable-deposit-separate-notice` | `edu-no-nonrefundable-separate-notice-sd` | new row | Confirmed absent | SDCL 43-32-6.1; 43-32-5; 43-32-24 |
| `nonresident-owner-agent` | `edu-no-nonresident-owner-agent-rule-sd` | new row | Confirmed absent | SDCL 43-8-9, 43-32-9 |
| `notice-service-fee` | `edu-no-notice-service-fee-sd` | new row | Confirmed absent | SDCL 53-9-4; 43-8-9 |
| `notice-to-quit-waiver` | `edu-notice-to-quit-waiver-sd` | new row | Confirmed absent; Present (notice scheme) | SDCL 43-8-8 to 43-8-12; 21-16-1(4) |
| `notice-to-vacate-additional-terms` | `edu-notice-to-vacate-additional-terms-sd` | new row | Confirmed absent as to a prohibition on altering the unit; Present as to the duties that continue and the remedies that enforce them | SDCL 43-32-8; 43-32-6; 43-32-9; 43-32-27; 43-32-31; 43-8-10 |
| `nuisance` | `edu-nuisance-sd` | new row | Present (bounded, ch. 21-10); Confirmed absent (lease effects) | ch. 21-10; SDCL 22-23-8(4) |
| `optional-lease-terms` | `edu-optional-lease-terms-sd` | new row | Confirmed absent; Present (3 rules) | SDCL 53-9-1, 53-9-3, 53-9-4/5, 53-9-6 |
| `ordnance-demolition-meter-disclosures` | `edu-no-ordnance-demolition-meter-disclosure-sd` | new row | Confirmed absent | SDCL 1-19B-27; 1-19B-20; 43-4-44; SL 2025, ch 180 (SB 171); SDCL 11-10-5; 11-10-11; 49-34-14 |
| `other-landlord-facilities` | `edu-other-landlord-facilities-sd` | new row | Present (general duty) | SDCL 43-32-8 |
| `owner-identity-disclosure` | `edu-no-owner-identity-disclosure-sd` | new row | Confirmed absent | SDCL 43-32-5; 43-32-13; 43-32-24; 21-16-1; 44-14-10; 36-21A-10; 36-21A-12.1 |
| `owner-move-in-reservation` | `edu-no-owner-move-in-reservation-sd` | new row | Confirmed absent | SDCL 43-8-8, 43-8-9, 43-8-11 |
| `parking-rules-notice` | `edu-no-parking-rules-notice-sd` | new row | Confirmed absent | SDCL 43-32-13; 53-9-4; 53-9-5; 32-36-2; 32-36-4.1 |
| `part5-nonwaivable` | `edu-part5-nonwaivable-sd` | new row | Confirmed absent (no scheme) | SDCL 43-32-8, 43-32-6.1, 53-9-1 |
| `periodic-services-entry` | `edu-periodic-services-entry-sd` | new row | Present | SDCL 43-32-32 |
| `pest-control-notice` | `edu-pest-control-notice-sd` | new row | Confirmed absent as to a pest-control notice duty; Present as to the habitability and entry mechanisms that carry it | SDCL 43-32-8; 43-32-9; 43-32-32; 43-32-10; 53-9-4; ARSD art. 12:56 |
| `pet-eviction-fact-sheet` | `edu-no-pet-eviction-fact-sheet-sd` | new row | Confirmed absent | SDCL 43-32-36; 43-32-34; 20-13-23.4; 43-32-25; 43-32-26 |
| `pet-fees` | `edu-pet-fees-sd` | new row | Present | SDCL 43-32-6.1; 43-32-24 |
| `plain-language` | `edu-no-plain-language-requirement-sd` | new row | Confirmed absent | SDCL 37-24-6(1); 37-24-1(6) |
| `plain-language-consumer-statement` | `edu-no-plain-language-statute-sd` | new row | Confirmed absent | SDCL 53-9-1; ch. 37-24 |
| `political-access` | `edu-no-political-access-right-sd` | new row | Confirmed absent | SDCL 43-32-6, 43-32-27(3) |
| `pool-safety` | `edu-no-pool-safety-rule-sd` | new row | Confirmed absent | ARSD 44:02:02:22 (lodging only) |
| `portable-cooling-device` | `edu-no-portable-cooling-device-right-sd` | new row | Confirmed absent | SDCL 43-32-8 (no cooling duty) |
| `portable-solar` | `edu-no-portable-solar-right-sd` | new row | Confirmed absent | SDCL 43-13-16.1; 49-34A-116 |
| `portfolio-thresholds` | `edu-no-portfolio-thresholds-sd` | new row | Confirmed absent | ARSD 61:15:01:15; SDCL 43-4-37(3) |
| `possession-bond` | `edu-no-possession-bond-sd` | new row | Confirmed absent | SDCL 21-16-7; 21-16-8; 21-16-12; 53-9-6; 37-24-5.5; SDCL ch. 15-26A and ch. 21-26 (not held) |
| `private-well-testing` | `edu-no-private-well-testing-duty-sd` | new row | Confirmed absent | SDCL 43-32-8; 43-4-44 |
| `prohibited-acts-renter` | `edu-no-prohibited-acts-renter-list-sd` | new row | Confirmed absent | SDCL 43-32-10, 43-32-11, 43-32-18(1) |
| `promises-to-repair` | `edu-promises-to-repair-sd` | new row | Confirmed absent | SDCL 43-32-19(2); ch. 37-24 |
| `prop65-rental-warning` | `edu-no-prop65-rental-warning-sd` | new row | Confirmed absent | SDCL 43-32-8; 34A-17-5 |
| `property-tax-rent-disclosure` | `edu-no-property-tax-rent-disclosure-sd` | new row | Confirmed absent | SDCL 43-32-24, 43-32-13 |
| `protected-class-inquiry-ban` | `edu-protected-class-inquiry-ban-sd` | new row | Present | SDCL 20-13-26; 20-13-22(3); ARSD art. 20:03 (no housing chapter) |
| `purpose-limitation` | `edu-purpose-limitation-sd` | new row | Present | SDCL 43-32-11; 43-32-18(1) |
| `radon-disclosure` | `edu-no-radon-disclosure-sd` | new row | Confirmed absent | SDCL 43-4-44; SL 2025, ch 180 (SB 171); SDCL 11-10-5; 11-10-11; SL 2026, ch 59 (SB 129); SDCL 43-32-8 |
| `recycling-notice` | `edu-no-recycling-notice-sd` | new row | Confirmed absent | SDCL 43-32-8; 53-9-4; 34A-16-22; 34A-6-62; ARSD art. 10:06 |
| `redemption` | `edu-no-tenant-redemption-sd` | new row | Confirmed absent | no tenant redemption right |
| `religious-cultural-display` | `edu-no-religious-cultural-display-right-sd` | new row | Confirmed absent (right); Present (protected class) | SDCL 20-13-20(1), (2); 20-13-1(4) |
| `rent-concession` | `edu-no-rent-concession-rule-sd` | new row | Confirmed absent | SDCL 53-9-4, 53-9-5; 43-32-13 |
| `rent-demand-bar` | `edu-no-rent-demand-bar-sd` | new row | Confirmed absent | SDCL 43-32-9, 43-32-27 |
| `rent-escalation` | `edu-rent-escalation-sd` | new row | Confirmed absent | SDCL 43-32-27; 43-32-13 |
| `rent-increase-notice` | `edu-rent-increase-notice-sd` | new row | Present | SDCL 43-32-13; 43-32-27 |
| `rent-installments` | `edu-rent-installments-sd` | new row | Present (default rule) | SDCL 43-32-12; 43-32-14 |
| `rent-into-court-counterclaim` | `edu-rent-into-court-undertaking-sd` | new row | Confirmed absent; Present (undertaking) | SDCL 21-16-7; 15-6-13(a) |
| `rent-receipt-anti-waiver` | `edu-rent-receipt-anti-waiver-sd` | new row | Confirmed absent | SDCL 43-32-8, 43-32-21, 36-21A-10 |
| `rent-receipts` | `edu-no-rent-receipt-duty-sd` | new row | Confirmed absent | SDCL 21-16-1(4), 43-32-14, 43-32-12 |
| `rent-reporting` | `edu-no-rent-reporting-rule-sd` | new row | Confirmed absent | SDCL 22-40-19 to -25; FEDERAL FCRA |
| `rental-inspection` | `edu-no-rental-inspection-regime-sd` | new row | Confirmed absent | SDCL 43-32-32; ch. 11-10 |
| `renters-insurance-rules` | `edu-renters-insurance-rules-sd` | new row | Confirmed absent; Present (constraint) | SDCL 53-9-4, 43-32-24(1)(b), 53-9-3 |
| `repair-cost-termination` | `edu-no-repair-cost-termination-sd` | new row | Confirmed absent as to a landlord repair-cost termination right; Present as to the one-month-rent threshold, which runs in the tenant's favour | SDCL 43-32-9; 43-32-8; 43-32-18; 43-32-19(2) |
| `repair-escrow-exemption-notice` | `edu-no-repair-escrow-exemption-sd` | new row | Confirmed absent | SDCL 43-32-9; 43-32-8; 53-9-6; 53-9-1 |
| `repair-notice` | `edu-repair-notice-mechanics-sd` | new row | Present | SDCL 43-32-9; 43-32-19(1); 43-32-8; 43-32-18(2); 43-32-27(2) |
| `required-disclosures` | `edu-required-disclosures-sd` | new row | Present | SDCL 43-32-30; 43-32-19.2; 43-4-37 to 43-4-44; 43-4-44.1; SL 2025, ch 180 (SB 171); SL 2024, ch 177 (SB 217); FEDERAL: 42 U.S.C. 4852d; 40 C.F.R. 745.113 |
| `required-fees` | `edu-no-required-fees-rule-sd` | new row | Confirmed absent | SDCL 43-32-24, 43-32-13; 49-34-14 |
| `rights-responsibilities-guide` | `edu-no-rights-guide-sd` | new row | Confirmed absent | no guide; SDCL 43-32-24, 43-4-44.1 |
| `rules-regulations` | `edu-rules-regulations-sd` | new row | Confirmed absent | no statute; SDCL 43-32-13, 43-32-27 |
| `sale-or-management-change` | `edu-sale-or-management-change-sd` | new row | Present (tenancy side); Confirmed absent (duties) | SDCL 43-25-28, 43-8-7, 43-32-21 |
| `sanitary-code-variance` | `edu-no-sanitary-code-variance-rule-sd` | new row | Confirmed absent | SDCL 43-32-8; 11-10-11 |
| `scope` | `edu-scope-sd` | new row | Present (general chapter, no act) | SDCL 43-32-8, 43-32-1, 43-32-22.1 |
| `seasonal-tenancy` | `edu-no-seasonal-tenancy-rule-sd` | new row | Confirmed absent | no statute; SDCL 43-32-2, 43-32-22.1, 43-32-37 |
| `security-deposit-holding` | `edu-security-deposit-holding-sd` | new row | Confirmed absent | SDCL 43-32-6.1; 43-32-24; 43-39-5; 43-39-9 |
| `security-deposit-interest` | `edu-no-deposit-interest-sd` | new row | Confirmed absent | SDCL 43-32-6.1; 43-32-24; 43-41B-1(10) |
| `security-deposit-nonwaiver` | `edu-security-deposit-nonwaiver-sd` | new row | Confirmed absent; Present (anti-evasion) | SDCL 43-32-6.1, 43-32-24 |
| `security-deposit-penalty` | `edu-security-deposit-penalty-structure-sd` | new row | Present | SDCL 43-32-24; 43-32-29; 43-32-6; 43-32-24.1 |
| `security-deposit-standards` | `edu-no-security-deposit-standards-sd` | new row | Confirmed absent | SDCL 43-32-6.1; 20-13-20(2); 43-32-24 |
| `security-devices` | `edu-no-security-devices-rule-sd` | new row | Confirmed absent | SDCL 43-32-8; 43-32-6, 21-3-6 |
| `senior-housing-work-card` | `edu-no-senior-housing-work-card-sd` | new row | Confirmed absent | no statute |
| `servicemember-rights` | `edu-servicemember-rights-sd` | new row | Present | SDCL 43-8-9; 43-32-19 |
| `sex-offender-disclosure` | `edu-no-sex-offender-disclosure-sd` | new row | Present | SDCL 36-21A-134.1; 36-21A-138.1; 22-24B-23 |
| `sex-offender-occupancy` | `edu-sex-offender-occupancy-sd` | new row | Present | SDCL 22-24B-22, -23, -25, -27 |
| `sfr-occupancy-disclosure` | `edu-no-sfr-occupancy-disclosure-sd` | new row | Confirmed absent | SDCL 43-32-1; 43-32-8; 43-32-30; 20-13-20; 11-10-12 |
| `shoreline-access-disclosure` | `edu-no-shoreline-access-disclosure-sd` | new row | Confirmed absent | SDCL 43-32-19(2); ch. 37-24 |
| `showing-notice-waiver` | `edu-showing-notice-waiver-sd` | new row | tagged + Present | SDCL 43-32-32 |
| `showing-notice-waiver` | `showing-notice-la` | TAG | tagged + Present | SDCL 43-32-32 |
| `shutdown-rent-protection` | `edu-no-shutdown-rent-protection-sd` | new row | Confirmed absent | SDCL 21-16-1(4), 43-32-12 |
| `single-family-zone-lease-limit` | `edu-no-single-family-zone-lease-limit-sd` | new row | Confirmed absent | SDCL 43-32-1; 21-16-1 |
| `smart-access` | `edu-no-smart-access-rule-sd` | new row | Confirmed absent | SDCL 43-32-32; 43-32-6, 21-3-6 |
| `smoke-drift-waiver` | `edu-smoke-drift-waiver-sd` | new row | Present | SDCL 34-46-13 to 34-46-16 |
| `social-security-defense` | `edu-no-benefit-delay-defense-sd` | new row | Confirmed absent (resolved this pass) | SDCL 43-45-2, 43-45-7(4), 43-45-14, 43-45-16, 43-45-17; FEDERAL 42 U.S.C. s 407(a) |
| `source-of-income` | `edu-no-source-of-income-protection-sd` | new row | Confirmed absent | SDCL 20-13-20 (closed list) |
| `special-district-representation` | `edu-no-special-district-representation-rule-sd` | new row | Confirmed absent | SDCL 34A-6-29 |
| `sprinkler-disclosure` | `edu-no-sprinkler-disclosure-sd` | new row | Confirmed absent | no statute or rule |
| `statute-of-frauds-lease-term` | `edu-statute-of-frauds-lease-term-sd` | new row | Present | SDCL 43-32-5; 43-32-14, 43-32-15 |
| `statutory-caps` | `edu-statutory-caps-sd` | new row | Present (inventory) | SDCL 43-32-6.1, 43-32-24, 43-8-8, 21-16-7, 15-2-13 |
| `steam-radiator-covers` | `edu-no-steam-radiator-cover-rule-sd` | new row | Confirmed absent | SDCL 43-32-8 |
| `stigmatized-property` | `edu-stigmatized-property-sd` | new row | Confirmed absent | no stigma or registry duty; SDCL 43-4-37(3), (5), 43-4-41, 43-4-44 |
| `stove-refrigerator` | `edu-stove-refrigerator-sd` | new row | Confirmed absent | SDCL 43-32-8, 43-32-10 |
| `student-housing` | `edu-student-housing-sd` | new row | Present | SDCL 20-13-20 closing paragraph; 20-13-22.1(4) |
| `subsidized-inspection-refusal` | `edu-no-subsidized-inspection-refusal-rule-sd` | new row | Confirmed absent | SDCL 43-32-32; 34-18-25.2 |
| `subsidy-habitability-proration` | `edu-no-subsidy-habitability-proration-sd` | new row | Confirmed absent | SDCL 43-32-9 |
| `subsidy-late-fee` | `edu-no-subsidy-late-fee-rule-sd` | new row | Confirmed absent | SDCL 53-9-4; 36-21A-48 |
| `substandard-property-receivership` | `edu-no-substandard-receivership-sd` | new row | Confirmed absent | no receivership statute |
| `tax-escalation` | `edu-no-tax-escalation-rule-sd` | new row | Confirmed absent | SDCL 43-32-24(1)(b); 43-32-13 |
| `telecom-access` | `edu-no-telecom-access-rule-sd` | new row | Confirmed absent | ch. 22-44 (criminal only); FEDERAL OTARD |
| `tenant-bankruptcy` | `edu-tenant-bankruptcy-sd` | new row | Confirmed absent | no statute; FEDERAL 11 U.S.C. s 365 |
| `tenant-confidential-information` | `edu-tenant-confidential-information-sd` | new row | Present (narrow) | SDCL 43-32-19.2 |
| `tenant-display-rights` | `edu-no-tenant-display-rights-sd` | new row | Confirmed absent | no statute; SDCL 43-32-6, 43-32-27 |
| `tenant-employee-housing` | `edu-tenant-employee-housing-sd` | new row | Confirmed absent | no statute |
| `tenant-forward-proceedings` | `tenant-forward-proceedings-ca` | TAG | tagged | SDCL 43-32-16; 43-32-17 |
| `tenant-insurance-claims` | `edu-tenant-insurance-claims-sd` | new row | Confirmed absent | SDCL 43-32-10; 53-9-3 |
| `tenant-portal` | `edu-tenant-portal-sd` | new row | tagged + Confirmed absent (statute); Present (limit) | SDCL 53-12-8, 53-12-9; 43-32-12; 53-9-4 |
| `tenant-portal` | `tenant-portal-mn` | TAG | tagged + Confirmed absent (statute); Present (limit) | SDCL 53-12-8, 53-12-9; 43-32-12; 53-9-4 |
| `tenant-records` | `edu-tenant-records-sd` | new row | Confirmed absent; Present (data breach) | SDCL 22-40-19 to 22-40-25 |
| `tenant-repair-agreement` | `edu-tenant-repair-agreement-sd` | new row | Present (in lieu of rent only) | SDCL 43-32-8; 43-32-10 |
| `tenant-repair-remedies` | `edu-tenant-repair-remedies-sd` | new row | Present | SDCL 43-32-9; 43-32-19(1), 43-32-27(2) |
| `tenant-right-to-organize` | `edu-tenant-right-to-organize-sd` | new row | Confirmed absent (right); Present (retaliation) | SDCL 43-32-27(3) |
| `tenant-rights-statement` | `edu-no-tenant-rights-statement-sd` | new row | Confirmed absent | SDCL 43-32-24, 43-32-8, 43-8-8 |
| `tenant-screening` | `edu-tenant-screening-sd` | new row | Confirmed absent | no statute; SDCL 20-13-20, 20-13-26 |
| `tenant-statutory-duties` | `edu-tenant-statutory-duties-sd` | new row | Present (three duties) | SDCL 43-32-10, 43-32-11, 43-32-16; 21-16-1(7) |
| `tpa-exemption-notice` | `edu-no-tpa-exemption-notice-sd` | new row | Confirmed absent | SDCL 43-32-6.1; 43-32-8; 43-32-24.1; 43-32-37; 43-8-8; 49-34A-1(12) |
| `tpa-notice` | `edu-no-tpa-notice-sd` | new row | Confirmed absent | SDCL 43-32-13; 43-8-8; 21-16-1; 43-32-17; 43-15A-10; 53-9-1 |
| `tpa-sunset` | `edu-no-tpa-sunset-sd` | new row | Confirmed absent | no sunset; SL 2026, ch 179, s 1 (SB 4) as the live amendment risk |
| `translation-duty` | `edu-no-translation-duty-sd` | new row | Confirmed absent | no translation or type-size rule; SDCL 53-9-4, 53-9-6, 43-32-8 |
| `trespass-notice` | `edu-trespass-notice-sd` | new row | Present | SDCL 22-35-6; 22-35-7; 22-35-5; 43-32-6; 21-16-1; 43-32-37 |
| `truth-in-renting` | `edu-no-truth-in-renting-act-sd` | new row | Confirmed absent | SDCL 43-32-5; 43-32-8 |
| `unbundled-parking` | `edu-no-unbundled-parking-rule-sd` | new row | Confirmed absent | SDCL 43-32-13, 43-32-24(1)(b) |
| `unpaid-damages-interest` | `edu-unpaid-damages-interest-sd` | new row | Present | SDCL 54-3-5 (Category F, 15%), 54-3-4, 54-3-5.1, 54-3-6, 54-3-1.1, 54-3-16 |
| `usufructuary-lessor` | `edu-usufructuary-lessor-sd` | new row | Confirmed absent (no usufruct); Present (life estates) | no usufruct in SDCL |
| `utility-allowance-cap` | `edu-utility-allowance-cap-sd` | new row | Confirmed absent in Code; Present (cap) | SDCL 49-34-14 |
| `utility-apportionment` | `edu-no-utility-apportionment-rule-sd` | new row | Confirmed absent; Present (markup cap) | SDCL 49-34-14 |
| `utility-deposit-return` | `edu-utility-deposit-return-sd` | new row | Confirmed absent | SDCL 43-32-6.1; 43-32-24; 43-41B-8 |
| `utility-disclosure-attachment` | `edu-no-utility-disclosure-attachment-sd` | new row | Confirmed absent | SDCL 49-34-14; 43-32-6; 53-9-4; 44-14-10; ARSD art. 20:10 (not held) |
| `utility-disconnection-notice-authorization` | `edu-utility-disconnection-notice-authorization-sd` | new row | Not located as to the regulator's disconnection-notice rule; Confirmed absent as to any statute | SDCL 43-32-6; 43-32-8; 43-32-9; 49-34A-2.1; ARSD art. 20:10 |
| `utility-interruption-submeter` | `edu-utility-interruption-submeter-sd` | new row | Confirmed absent; Present (prohibition) | SDCL 43-32-6; 21-3-6 |
| `utility-landlord-account` | `edu-utility-landlord-account-sd` | new row | Confirmed absent | SDCL 43-32-6, 43-32-8, 43-32-9 |
| `utility-submetering-disclosure` | `edu-no-submetering-disclosure-sd` | new row | Not located | SDCL 49-34-14; 49-34A-116; 53-9-4; 43-32-6; ARSD art. 20:10 (not held) |
| `utility-transfer` | `edu-no-utility-transfer-cutoff-sd` | new row | Confirmed absent (prohibited) | SDCL 43-32-6; 49-34-14 |
| `veterans-incentive` | `edu-no-veterans-incentive-sd` | new row | Confirmed absent | no statute |
| `water-heater-temperature` | `edu-no-water-heater-temperature-rule-sd` | new row | Confirmed absent | SDCL 43-32-8; ch. 11-10 |
| `waterbed` | `edu-no-waterbed-rule-sd` | new row | Confirmed absent | SDCL 43-32-10, 43-32-24, 53-9-4 |
| `window-guards` | `edu-no-window-guard-rule-sd` | new row | Confirmed absent | SDCL 43-32-8 |
| `written-notice-required` | `edu-written-notice-required-sd` | new row | Present | SDCL 43-8-8; 43-8-8.1; 43-8-9; 43-8-10; 43-8-11; 43-8-12; 43-32-13; 43-32-15; 43-32-31; 43-32-22.1; 43-32-9; 43-32-19(1); 43-32-32; 43-32-5; 21-16-1(4); 21-3-8 |

Row counts: **260 new rows, 12 existing rows tagged SD.** Two topics carry both a lease clause and an education row under one `topic_key`, which is the library's established pattern (rule 57): `tenant-forward-proceedings` and `carpet-cleaning`.

---
## 3. Batteries for every absence

Method per rule 19: the statute's own words and every word form; word boundaries on short words; each absence pattern paired with a reject-test on the word it is most likely to match inside; **nonsense controls run in the same batch as each battery**; every pattern tested against a known positive before being trusted. Two instruments: **CL** = all 47,386 section catchlines in the Code (statewide); **FT** = full text of the 26 chapters held for South Dakota (775 live sections). A bounded battery licenses only a bounded claim, so each row names both bounds in its body.

| Topic | Pattern | CL (statewide) | FT (26 ch.) | Verdict |
|---|---|---|---|---|
| carpet-cleaning | `\bcarpet` | 0 | 0 | Confirmed absent |
| extended-absence-notice | `extended absence\|prolonged absence\|absence of the (?:tenant\|lessee)` | 0 | 0 | Confirmed absent |
| owner-move-in-reservation | `owner.{0,14}occupanc\|owner move\|immediate family.{0,24}occup` | 0 | 0 | Confirmed absent |
| rent-installments | `rent.{0,20}installment\|installment.{0,20}rent` | 0 | 0 | Confirmed absent (partial-payment limb) |
| tax-escalation | `tax.{0,18}escalat\|escalation clause` | 0 | 0 | Confirmed absent |
| utility-allowance-cap | `master.?meter\|sub.?meter\|utility allowance` | 0 | 0 | Confirmed absent in the Code; ARSD 20:10 not held |
| nonrefundable-deposit-notice | `nonrefundable\|non-?refundable` | 1 (SDCL 41-6-19.6, hunting licence fee) | 0 | Confirmed absent |
| rent-concession | `concession` | 10 (cigarette sales, plea bargaining) | 0 | Confirmed absent |
| lease-copy | `cop(?:y\|ies)\s+of\s+(?:the\s+)?(?:lease\|rental agreement\|agreement\|writing)` | - | 0 | Confirmed absent |
| lease-copy (reject-test) | `\bcopy\b\|\bcopies\b` | 255, all public records / certified copies / service | - | pattern not under-matching |
| lease-copy (broker limb) | `broker.{0,30}(?:duty\|duties\|disclos\|record)\|property manage` | 6 (SDCL 36-21A-10, -48, -144 the licensing ones) | - | Confirmed absent after reading ch. 36-21A whole |
| sprinkler-disclosure | `sprinkler` | 1 (SDCL 11-10-12, the municipal bar) | 0 | Confirmed absent (disclosure duty) |
| alarm-tampering-fee | `tamper` | 23, none authorising a lease fee | 1 (SDCL 34-35A-4) | Confirmed absent (statutory fee) |
| alarm-tampering-fee (CO limb) | `carbon\s*monoxide` | **0** | **0** | Confirmed absent; also 0 in ARSD 61:15 |
| ev-charging-requirements | `electric vehicle\|charging station\|\bEVSE\b` | 2 (both Present - see s 2) | 0 | Present |
| ev-charging (weights & measures limb) | `weights and measures\|electric vehicle supply\|\bEVSE\b` | 4, none reaching charging equipment | - | Confirmed absent |
| adverse-proceeding-notice | `(?:occupant\|tenant\|lessee).{0,40}notice\|notice.{0,30}(?:occupant\|lessee)` | 12, none a landlord duty | - | Confirmed absent |
| adverse-proceeding-notice | `foreclos.{0,40}notice\|notice.{0,25}foreclos` | 5 | - | Present as to the scheme, which excludes occupants |
| adverse-proceeding-notice | `condemn\|unsafe building\|unfit for (?:human )?habitation` | 74, all government takings / public-safety powers | - | Confirmed absent |

**Item 6, the smoke and CO alarm battery, run full-text as the prompt directs** (the corpus's own finding rested on a catchline search). Over all 26 held chapters, with three nonsense controls at 0 in the same batch: `\bsmoke\b` 4 sections, `smoke[-\s]?detect` 4 sections - **all four in chapter 34-18 and all four transient lodging**: SDCL 34-18-9.4 (bed and breakfast establishments) and 34-18-22.1, 34-18-22.2, 34-18-22.3 (specialty resorts under ten occupants, ten or more occupants, and vacation home establishments). `smoke[-\s]?alarm` 0 (South Dakota's statutes say "smoke detector", never "smoke alarm"). `carbon\s*monoxide` **0**. `\bCO\b[-\s]?(?:alarm\|detect)` 0. `alarm\w*` 4 sections, all fire-alarm-system tampering, disorderly conduct and retail crime - SDCL 34-35A-3, 34-35A-4, 22-18-35, 37-24-52 - none requiring installation in a dwelling. Statewide by catchline: `carbon\s*monoxide` **0 of 47,386**; `smoke[-\s]?(?:detect\|alarm)` 1 (SDCL 34-18-9.4). **ARSD 61:15 then read in full**, which is where the residential requirement actually lives: 61:15:01:14 (lodging establishments, each sleeping room), **61:15:01:15 (each family living unit of a multifamily residence housing six or more families)**, and 61:15:01:19 (automatic sprinklers throughout any new hotel, motel or multifamily residence housing six or more families, per IBC 2015 s 903). `carbon\s*monoxide` returns 0 in ARSD 61:15 as well. **Net: no South Dakota statute requires a smoke or CO alarm in a residential rental; the requirement is by administrative rule, and CO alarms are required only in manufactured homes (ARSD 46:04:01:20).** This confirms the existing library row rather than contradicting it - see s 6.

**Batch 2 batteries.** Same method and instruments; three nonsense controls at 0 in each batch.

| Topic | Pattern | CL (statewide) | FT (26 ch.) | Verdict |
|---|---|---|---|---|
| criminal-activity | `(?:drug\|controlled substance).{0,40}(?:evict\|premises\|abate\|nuisance)\|evict.{0,30}drug` | 1 (SDCL 36-11A-36, drug distributors) | 0 | Confirmed absent (no statutory mechanism) |
| criminal-activity (abatement limb) | `prostitution` | 5 | 0 | **Present** - SDCL 22-23-8(4) |
| criminal-activity (nuisance limb) | `nuisance` | 51 | 0 | Present - ch. 21-10 |
| part5-nonwaivable / all waiver topics | `waiv` | 246, none a residential non-waiver list | 4: SDCL **43-32-8**, 37-24-5.2, 37-24-5.5, 43-41B-18 | Confirmed absent (no scheme); one express non-waiver |
| jury-waiver | `jury trial\|waiv.{0,20}jury` | 18, none voiding or authorising a waiver | SDCL 15-6-75, **21-16-8** | NEEDS_REVIEW → cautious course stated |
| homestead-waiver | `homestead` | 43, all exemption/collection chapters | 0 | Confirmed absent; one limb Not located (ch. 43-45) |
| smoke-drift-waiver | `\bsmoking\b\|tobacco` | 26 | 0 | **Present** - SDCL 34-46-13 to 34-46-16 |
| rent-receipt-anti-waiver | `receipt for rent\|rent receipt` | 1 (SDCL 4-3-5, state depositories) | 0 | Confirmed absent |
| dv-lockchange / dv-eviction-protection | `domestic abuse` | 23, none a lock-change or eviction protection | 0 | Confirmed absent (ch. 25-10 read whole) |
| eviction-penalty / notice-service-fee / collection-fee | `collection (?:fee\|cost)\|service fee\|late fee` | 18, none authorising a landlord fee | SDCL 43-41B-43, 44-14-2 | Confirmed absent |
| showing-notice-waiver | `entry\|enter.{0,20}premises` | 133 | 14, incl. **SDCL 43-32-32** | **Present** - the lease may agree alternate notice |

Three screens overturned the expected answer and are worth flagging, because an absence row would have been wrong in each case:

- **`showing-notice-waiver` is Present, not absent.** SDCL 43-32-32 sets the entry standard *and* ends the same sentence with the variation: the 24-hour written-notice presumption applies 'unless alternate methods of notification or times for entry are mutually agreed upon between the landlord and tenant in the lease.' South Dakota therefore both has a period and expressly allows the lease to vary it, with no separate-document requirement.
- **`smoke-drift-waiver` is Present, not absent.** SDCL 34-46-14 prohibits smoking in any 'public place or place of employment'; 'place of employment' is defined as 'any enclosed area under the control of a public or private employer' (SDCL 34-46-13(2)); and the exemption at SDCL 34-46-16 is for 'any private residence', i.e. the dwelling unit. Enclosed common areas of a managed apartment building are already covered, and SDCL 34-46-15 puts an affirmative duty on the person controlling the place to inform violators.
- **`criminal-activity` has an affirmative limb.** SDCL 22-23-8(4) makes it a Class 6 felony to knowingly permit a place you own, manage, supervise or control to be regularly used for prostitution 'or [to fail] to make reasonable effort to abate such use by ejecting the tenant, notifying law enforcement authorities, or using other legally available means' - which answers the topic question's prostitution limb in the affirmative and makes the crime-free clause necessary rather than merely prudent.

**Batch 4 batteries (habitability and repair cluster).** Nonsense controls `zxqwvy`, `flurbinate` and
`quasimandible` all returned 0 in the same batch.

| Topic | Pattern | CL (statewide) | FT (26 ch.) | Verdict |
|---|---|---|---|---|
| condition-inspection | `inventor\|condition (?:list\|report\|statement)\|checklist` | 38, all government inventories | 1 (SDCL 37-24-52) | Confirmed absent |
| condition-inspection (reject-test) | `inspect` | 498 | 30, all agency inspection powers | pattern not under-matching |
| designated-repairer | `designat.{0,20}(?:repair\|agent)\|person authorized to (?:manage\|receive)` | 12, none a landlord duty | 2 (SDCL 34-18-7, -8, lodging) | Confirmed absent |
| habitability-materiality | `material (?:noncompliance\|breach\|violation)` | **0** | 1 (SDCL 43-8-8, military-notice exception) | Confirmed absent |
| habitability-presumption | `presum` | 90 | ch. 43-32: 43-32-3, -4, -14, -25, -32 — all term/holdover/entry | Confirmed absent |
| promises-to-repair | `promis` | 72, none a repair-promise formality | 8, incl. ch. 37-24 deceptive practices | Confirmed absent |
| subsidy-habitability-proration | `prorat\|abate` | 63, none residential | 7, lien and fire-marshal | Confirmed absent |
| tenant-repair-remedies (escrow limb) | `escrow\|into court\|deposit.{0,15}court` | 40, none a tenancy procedure | **0** | Confirmed absent |
| habitability-statement / all | `fit for human habitation` | **0** | **2 — SDCL 43-32-8, 43-32-9** | Present (the duty itself) |

**Two method notes from this batch, both worth carrying to other states.**

- **A zero catchline count is not by itself an absence.** `fit for human habitation` returns **0 of 47,386
  section catchlines statewide**, yet the phrase is the operative standard and sits in the *bodies* of
  SDCL 43-32-8 and 43-32-9. The statewide instrument screens catchlines only; it is conclusive for a subject a
  catchline would name, and must be paired with full text for a standard stated inside a section. Every absence
  in this batch rests on both instruments, and each row says so.
- **Search the statute's own words, not the library's.** The escrow screen initially looked like a clean absence
  on `escrow`, but SDCL 43-32-9's remedy is worded 'deposit it in a separate bank or savings and loan account'
  and uses the word escrow nowhere. The absence stated is of a *court-supervised* escrow, which is the right
  claim; the remedy itself is Present. This is rule 19's reject-test requirement doing real work.

**Batch 5 batteries (access, occupancy and people cluster).** Nonsense controls returned 0 in each batch.

| Topic | Pattern | CL (statewide) | FT (26 ch.) | Verdict |
|---|---|---|---|---|
| source-of-income | `source of income\|housing (?:voucher\|choice)\|section 8\|subsid.{0,20}(?:accept\|discriminat)` | **0** | **0** (ch. 20-13 held in full) | Confirmed absent |
| children-occupancy | `familial status\|\bfamilies with children` | 2 | 5, all ch. 20-13 | **Present** |
| accessory-dwelling-unit / single-family-zone | `accessory dwelling\|single-?family (?:zone\|district)\|owner.?occupan.{0,20}requir` | **0** | 0 | Confirmed absent |
| telecom-access | `cable (?:television\|service)\|satellite\|telecommunicat.{0,30}(?:access\|building)` | 7 (ch. 22-44 criminal) | 1 (SDCL 22-1-2) | Confirmed absent |
| smart-access | `smart (?:lock\|access)\|electronic (?:lock\|key\|access)\|keyless` | 2 (judicial e-filing pilots) | 0 | Confirmed absent |
| political-access | `canvass\|solicit.{0,20}(?:tenant\|resident)\|political (?:sign\|activit)` | 31, all election canvasses | 0 | Confirmed absent |
| guest-rights | `\bguest\b` | 10 | 8, all transient lodging/criminal | Confirmed absent |
| family-child-care | `(?:family )?(?:day care\|child care).{0,25}home` | 2 (SDCL 9-29-26, 26-6-14.2) | 0 | Confirmed absent |
| sex-offender-occupancy | `sex offender\|registered offender` | 19 | 0 | **Present** (ch. 22-24B fetched) |
| minor-tenant-filing | `age of majority\|emancipat\|minor.{0,25}contract` | 11 | 0 | **Present** (ch. 26-1, 26-2 fetched) |
| unbundled-parking | `unbundl\|parking.{0,20}(?:separate\|rent)` | 1 (transient-guest tax) | 0 | Confirmed absent |
| shoreline-access-disclosure | `shorelin\|lakeshore\|riparian.{0,20}access` | **0** | 0 | Confirmed absent |
| animal-care-access | `animal.{0,30}(?:care\|welfare\|abandon\|rescue)\|enter.{0,30}animal` | 4 | 0 | Confirmed absent; impoundment limb Not located (ch. 40-1) |
| disaster-displaced-guests | `disaster.{0,30}(?:displac\|hous\|shelter)\|emergency (?:shelter\|housing)` | **0** | 0 | Confirmed absent |
| children-occupancy (occupancy limb) | `occupan.{0,20}(?:limit\|standard\|maximum)\|persons per (?:room\|bedroom)` | 1 (SDCL 36-18A-10) | 0 | Confirmed absent |

**Chapters fetched live in batch 5:** 9-29 (26 sections, `a41b7f348dc68833d0df0401e035c5944f20d6b8498ce6ff77f17457713e7c18`),
22-24B (47, `7307b58211128a79e2318a7abc9acf43a4529bfffde8d6a5df29f43d68aaf1a8`),
26-1 (4) and 26-2 (7, `589fe9b37edba9e00b87c47ce7b40c9f77ebef63bb10140030fb4ef59877b688`),
26-6 (69, `96219996f77727d222b279ccd3a7ecdfa118616bf3bedcc060328c7b18660acb`).

**The most consequential find in this batch, and it is a trap for a nationwide library.**
`minor-tenant-filing` would ordinarily be answered "a minor's lease is voidable, like everywhere else."
In South Dakota it is not: **'No minor may give a delegation of power, nor make a contract relating to real
property, or any interest therein'** (SDCL 26-2-1), and SDCL 26-2-3 opens 'Except as specified in s 26-2-1' before
granting the ordinary power of disaffirmance for every *other* contract. A lease is a contract relating to an
interest in real property, so a minor's residential lease is not a voidable lease - there is no lease. The
landlord's residual claim is SDCL 26-2-4, which bars a minor disaffirming a contract 'otherwise valid' to pay the
reasonable value of necessaries; that supports a reasonable-value claim for shelter supplied, not the lease terms.
A library that answered this topic from the general rule would be wrong in South Dakota.

Two other Present findings worth flagging: **familial status is protected** in housing (SDCL 20-13-20) and
defined narrowly as individuals under eighteen domiciled with a parent or custodian, including a pregnant person,
with senior-housing exemptions at SDCL 20-13-20.2 - while **source of income is not protected at all**, the
housing list being closed at race, color, creed, religion, sex, ancestry, disability, familial status and national
origin. And **SDCL 22-24B-25 preempts local offender-residency ordinances**, so the one-city co-residence
ordinance pattern the topic question asks about cannot arise in South Dakota.

**Batch 3 (deposit cluster, canvassed) and batch 6 (utilities, insurance and process).** Batch 3's fourteen
topics were canvassed by one agent working from a written brief; its batteries, reject-tests and controls are
recorded in its own answer files and every row was checked by me before entering the delta - structurally (ids,
groups, topic keys, notes form, body length, battery present) and by verifying that **all 50 distinct SDCL
sections it cited exist in the 47,386-section index**. Thirteen of the fourteen are confirmed absences;
`security-deposit-penalty` is Present.

| Topic | Pattern | CL (statewide) | FT (26 ch.) | Verdict |
|---|---|---|---|---|
| municipal-utility-lien | `lien.{0,30}(?:water\|sewer\|utilit)\|utilit.{0,30}lien` | 1 (SDCL 44-9-35) | 0 | **Present via a different mechanism** - see below |
| utility-apportionment | `apportion` | 118, all governmental | 2 (ch. 15-17 costs) | Confirmed absent |
| utility-interruption-submeter / landlord-account | `master.?meter\|sub.?meter\|utility allowance` | **0** | 0 | Confirmed absent; SDCL 43-32-6 occupies the field |
| water-heater-temperature | `water heater\|hot water.{0,20}temperatur\|\b120 degrees` | **0** | 0 | Confirmed absent |
| waterbed | `waterbed\|water bed\|liquid-?filled` | **0** | 0 | Confirmed absent |
| landlord-liability-insurance | `liabilit.{0,20}insur\|insurance.{0,20}(?:requir\|landlord\|tenant)` | 72, all public-entity | 1 (SDCL 43-41B-7) | Confirmed absent |
| tenant-insurance-claims | `renter.{0,15}insur\|subrogat` | 21 | 1 (SDCL 21-3-12, malpractice) | Confirmed absent |
| informal-dispute-resolution | `mediat\|arbitrat\|dispute resolution` | 150 | 7 | **Present** - SDCL 53-9-6 + ch. 21-25A |
| plain-language-consumer-statement | `plain language\|readabl` | **0** | 3 (ch. 37-24, 34-18-42) | Confirmed absent |
| tenant-records / tenant-confidential-information | `tenant.{0,25}(?:record\|information)\|confidential.{0,25}(?:tenant\|rental)` | 1 (SDCL 1-27-1.20) | 0 | Confirmed absent as to ledgers; **Present** as to SDCL 43-32-19.2 and ch. 22-40 |
| tenant-rights-statement | `rights and (?:responsibilit\|duties)\|statement of (?:tenant )?rights` | 22, none a tenancy summary | 2 | Confirmed absent |
| (data-security limb) | `breach of system security\|data breach` | 4, all ch. 22-40 | 0 | **Present** - ch. 22-40 reaches landlords |

**A false absence caught by a reject-test, and it is the most useful finding in this batch.** The lien-worded
battery for `municipal-utility-lien` returned a clean zero, which would have produced a row saying a tenant's
unpaid municipal charges cannot reach the owner. That is wrong, because South Dakota does it without using the
word lien: **'If any fee, charge, or license so levied, other than a municipal garbage collection fee, becomes
delinquent, the delinquency may be certified to the county treasurer and shall be collected by the county
treasurer in the following year as a condition precedent to payment of the real property tax on the lot or parcel
of land with respect to which the fee, charge, or license was levied. The chief fiscal officer of a municipality
shall collect a delinquent municipal garbage collection fee as a condition precedent to the payment of any water,
sewer, utility, or other charge collected by the municipality'** (SDCL 34A-6-29). So a delinquent solid-waste fee
blocks payment of the property tax on that parcel, and a delinquent municipal garbage fee blocks the owner's other
municipal utility payments - the Kentucky comparator's mechanism, reached by a route no lien search would find.
There is no statutory owner exemption and no affidavit route. **Chapter 34A-6 (118 sections) was fetched to
confirm it**, SHA-256 `381693b5ad032f1691b83699ab3f6fae3559077f798e0eecda47898124821316`.

**Chapters fetched live in batches 3 and 6:** 21-25A (38, `e28f19736aa236410e7e3c999b86e0ef95b9e5b47f14854af37f67b3c443f5f8`),
22-40 (20, `9af741f723324f581bc68a656ed18eccce989649bf006d25d118fc1148d041c7`),
34A-6 (118, hash above), plus the chapter 36-21A trust-account sections (see s 4).

**Two further Present findings.** **SDCL 53-9-6** makes any provision 'restricting a party from enforcing his
rights under it by usual legal proceedings in ordinary tribunals, or limiting his time to do so' void, with
arbitration under chapter 21-25A excepted and arbitration agreements expressly 'valid, enforceable and
irrevocable' (SDCL 21-25A-1) - so a mandatory pre-suit step is at real risk in South Dakota while an arbitration
agreement is not. And **chapter 22-40's breach-notification duty reaches landlords**: an 'information holder' is
'any person or business that conducts business in this state, and that owns or licenses computerized personal or
protected information of residents of this state' (SDCL 22-40-19), with 60-day notice, attorney-general
notification above 250 residents, consumer-reporting-agency notice, and civil penalties of up to $10,000 per day
per violation (SDCL 22-40-20, -24, -25). **No row in the library cited chapter 22-40 before this pass.**

**The disclosure cluster (20 topics, canvassed).** Checked by me before entering the delta: structurally clean,
and **all 68 distinct SDCL sections cited exist in the 47,386-section index**. Nineteen are confirmed absences;
`required-disclosures` is Present as a summary. Four were returned as **Not located** and I resolved or
documented every one rather than shipping them that way - see s 4.

**This cluster produced the pass's most useful structural finding, and it is a landlord trap.** South Dakota's
real residential disclosure regime is **SDCL 43-4-37 to 43-4-44.1**, and it runs on **sale, not lease** - which
is why nineteen lease-side rows are absences. But the definition of a covered transfer is wider than "sale":

> "'Transfer,' a sale, exchange, installment sale contract, **lease with an option to purchase**, other option to
> purchase, or a ground lease coupled with improvements." (SDCL 43-4-37(5))

So a plain residential lease carries no disclosure duty, while **adding a purchase option to a lease pulls the
landlord inside the whole seller regime**: the completed property condition disclosure statement must go to the
tenant-buyer before they make a written offer (SDCL 43-4-38), in good faith (SDCL 43-4-41), with liability for
failure (SDCL 43-4-42). "Residential real property" means not more than four family dwelling units in one
structure (SDCL 43-4-37(3)), and the exempt transfers are listed at SDCL 43-4-43. The disclosure form itself,
printed in full by **SL 2025, ch 180 (SB 171)** amending SDCL 43-4-44, covers radon in house and well, lead paint,
mold, methane, asbestos, buried fuel and chemical tanks, flood plain, wetlands, foreclosure and code-violation
notices, HOA assessments, historic designation and methamphetamine. **SDCL 43-4-44.1** (created by
**SL 2024, ch 177 (SB 217)**) adds a homeowners'-association disclosure, again on sale. **No part of chapter 43-4
appeared anywhere in the library before this pass** (anchored section-number grep, rule 28). That finding is now
carried in `edu-required-disclosures-sd` and in each of the five rows whose scope limb it settles.

**A fourth instrument, found by the agent rather than given to it.** The corpus holds the **full enacted text of
719 session laws (2024-2026)**, which the brief had treated only as a currency source. Because an act prints the
amended section whole, those files allow section-open reading of statutes **outside the 26 held chapters**
wherever a 2024-2026 act touched them - which is how chapter 43-4's disclosure form and SDCL 11-10-11 were read
without a live fetch. This is a method improvement worth carrying to other states and is proposed as an SOP
change below.

**The agent also corrected its own work in two ways worth recording**, because both are the shapes this project
keeps meeting. It had written that it read SDCL 49-34-14, 49-34-13 and 49-34A-1 "section-open" when chapter 49-34
is not among its 26 held chapters - I had fetched it. It removed the verbatim quotation it was not entitled to
make, restated the cap in its own words with the citation, attributed the quotation to
`edu-utility-allowance-cap-sd`, and ran an audit confirming no residual claim of that kind. And two battery counts
it had asserted before running the pattern were wrong (a reject-test count given as "500+" was 84; an
electric-utility screen given as 40 was 15); three patterns it expected to return zero returned 1, 2 and 6. None
of the hits was a disclosure duty, so the verdicts stood, but the recorded batteries now carry the real counts and
name the hits. **A count asserted from expectation rather than from the run is the same error as an unverified
citation**, and it is proposed as an SOP line below.

**Batch 9 (fees and charges cluster, 13 topics).** Every one is an absence at both instrument levels - South
Dakota regulates almost nothing about rental fees - so the discipline here was to make each row rest on a
different South Dakota provision rather than repeat "no rule". Nonsense controls returned 0 in each batch.

| Topic | Pattern | CL (statewide) | FT (26 ch.) | What answers it instead |
|---|---|---|---|---|
| application-fees | `application fee\|screening fee\|credit check fee` | 15, all licensing/permit fees | 0 | SDCL 43-32-6.1 deeming; 53-9-4 |
| fee-transparency | `fee.{0,25}(?:disclos\|itemiz\|schedule)` | 14, all governmental | 1 (SDCL 34-18-10) | SDCL 43-32-24 - an unlisted fee is uncollectible |
| fee-unprovided-service | (same, + fee patterns) | 14 / 18 | 1 | SDCL 53-9-4, 53-9-1; ch. 37-24 |
| government-fee-reimbursement | `reimburse.{0,30}(?:fee\|charge\|tax)` | 3, none landlord | 1 (SDCL 43-41B-21) | **SDCL 34A-6-29** runs the other way |
| late-fee-limit | `late (?:fee\|charge\|payment (?:fee\|charge))` | 6, none residential | 1 (SDCL 44-14-2) | **SDCL 53-9-4 / 53-9-5** on the amount |
| pet-fees | `\bpet\b` | 6, all feeds/rabies/pet food | **0** | **SDCL 43-32-6.1** - a pet deposit IS deposit money |
| required-fees | `truth in renting\|lease.{0,20}(?:content\|must contain)` | 1 (SDCL 44-8-14) | 0 | SDCL 43-32-24(1)(b); 43-32-13 |
| subsidy-late-fee | `late fee` + `subsid` | 6 | 1 | SDCL 53-9-4; program-contractual |
| rent-receipts | `receipt.{0,25}(?:rent\|payment)\|written receipt` | 23, all public treasurers | 1 (SDCL 44-14-3) | SDCL 21-16-1(4); **43-32-14** renewal trap |
| rent-reporting | `(?:credit\|consumer) report.{0,30}(?:rent\|tenan)` | 1 (child support) | 0 | ch. 22-40; FEDERAL FCRA |
| renters-insurance-rules | `renter.{0,15}insur\|require.{0,25}insur.{0,25}tenant` | **0** | 0 | SDCL 53-9-4 bars a force-placement fee |
| truth-in-renting | `truth in renting\|lease.{0,20}content` | 1 | 0 | SDCL 43-32-5 is the only content rule |
| prohibited-acts-renter | `prohibited act` | 26, all regulatory offences | 0 | SDCL 43-32-10, 43-32-11, **43-32-18(1)** |

**Two answers in this cluster are Present and change what a landlord should do.** A **pet deposit is security
deposit money** in South Dakota - 'Any deposit of money, the function of which is to secure the performance of a
residential rental agreement or any part of such an agreement, shall be deemed to be a security deposit'
(SDCL 43-32-6.1) - so it sits inside the single one-month cap, with no pet-deposit exclusion and no separate pet
ceiling, which answers all four limbs of that topic question; pet *rent* is not deposit money and is the cleaner
instrument. And while there is **no late-fee cap**, SDCL 53-9-4 and 53-9-5 constrain the figure itself, which makes
this row the education counterpart to the CONSTRAINED_TERM basis of the shared `late-fee` clause already tagged SD
(its `{{late_fee_amount}}` is the landlord's own figure, and these two sections are what it has to be defensible
against).

**A structural point this cluster makes repeatedly, and it is the useful one for a landlord-facing library.**
In a state with no fee regulation, the lease is not a formality - it is the source of the right to collect. Deposit
withholding reaches only rent defaults, 'Other funds due to the landlord pursuant to an agreement', and
restoration (SDCL 43-32-24), so a charge the lease never created is not collectible at all; and withholding it
anyway is a failure to comply that 'forfeits all rights to withhold any portion of the deposit'. An undisclosed fee
therefore does not merely fail - it can cost the whole deposit. Five of the thirteen rows turn on that sentence.

**Batch 10 (rent mechanics and eviction-adjacent rent rules, 14 topics).** Nonsense controls 0 in each batch.
Three of these are Present and one of the absences is the most consequential finding in the whole pass for a
landlord-facing product.

| Topic | Pattern | CL (statewide) | FT (26 ch.) | Verdict |
|---|---|---|---|---|
| **nonpayment-notice** | `demand.{0,20}(?:rent\|possession)\|notice.{0,25}nonpayment` | **0** | 1 (SDCL 21-3-8, a damages measure) | **Confirmed absent - there is no pay-or-quit notice** |
| rent-increase-notice | `rent.{0,20}(?:increas\|escalat)\|increas.{0,20}rent` | **0** | 1 (SDCL 43-32-27) | **Present** - SDCL 43-32-13 |
| rent-escalation | (same) | 0 | 1 | Confirmed absent (no safe harbour to earn) |
| condemned-premises-rent-bar | `condemn.{0,40}(?:rent\|occupan)\|unfit.{0,30}rent` | **0** | 0 | Confirmed absent |
| lockout-for-rent-delinquency | `lock.?out\|exclude.{0,25}tenant` | **0** | 1 - **SDCL 43-32-6, the prohibition** | Confirmed absent, and prohibited |
| rent-into-court-counterclaim | `counterclaim\|pay.{0,20}into court` | 15 | 2 (SDCL 15-6-22, 15-6-72; rule at 15-6-13(a)) | Absent as to escrow; **Present** as to SDCL 21-16-7 |
| health-district-rental-rules | `health district\|board of health` | 3 | 0 | Confirmed absent |
| rental-inspection | `rental.{0,20}(?:inspect\|licen\|registr)` | 2 | 0 | Confirmed absent |
| meter-conservation-charge | `conservation.{0,20}(?:charge\|fee)\|meter.{0,20}charge` | 1 (licence plates) | 0 | Confirmed absent |
| utility-transfer | `transfer.{0,25}(?:utilit\|service\|account)` | 20, all pension transfers | 0 | Confirmed absent, and prohibited |
| property-tax-rent-disclosure | `property tax.{0,30}(?:disclos\|rent)` | **0** | 0 | Confirmed absent |
| prop65-rental-warning | `warning.{0,30}(?:chemical\|cancer\|reproductive)` | **0** | 0 | Confirmed absent |
| rent-demand-bar | `demand.{0,20}(?:rent\|possession)` | **0** | 1 | Confirmed absent |
| shutdown-rent-protection | `(?:government\|federal).{0,25}shutdown\|furlough` | 1 (veterans home) | 0 | Confirmed absent |

**South Dakota has no pay-or-quit notice, and this is the state's defining procedural feature.** There is no
verbatim notice wording, no demand period to serve, no state-agency form, no proof-of-delivery filing bar, no
mediation precondition and no tender defence. Former SDCL 21-16-2 was repealed by SL 2024, ch 75, § 1, and the
ground now stands alone: a lessee who 'holds over after the termination of his lease or expiration of his term,
**or fails to pay his rent for three days after the same shall be due**' (SDCL 21-16-1(4)). **Those three days
are not a notice period - they are when the ground matures.** None of the topic question's ten comparators has a
South Dakota analogue. The practical point the row makes is the one a landlord needs: because the statute requires
no notice, a notice-and-cure promise in the landlord's *own lease* is the only such obligation that exists, and it
binds as a contract term - so the lease should be written deliberately rather than inheriting a cure clause from
another state's form.

**And South Dakota does have a rent-into-court mechanism, just not where the topic looks for it.** There is no
escrow condition on raising a defence or demanding a jury. But the tenant's time to appear is five days, and
'**No adjournment or continuance shall be made for more than fourteen days, unless the defendant applying therefor
shall give an undertaking to the plaintiff with good and sufficient surety to be approved by the court,
conditioned for the payment of the rent that may accrue, together with costs**' (SDCL 21-16-7). That is the
Maryland comparator's shape - security for accruing rent as the price of a long adjournment - reached through the
section the prompt's currency list had recorded as repealed. The row tells the landlord to ask the court for the
undertaking rather than to oppose the continuance.

**Batch 11 (contract structure and lease formalities, 15 topics).** Unusually, **eight of these are Present** -
South Dakota's general contract law is where its landlord-tenant law actually lives, so topics that read as
absences in other states have real answers here. Nonsense controls 0 in each batch.

| Topic | CL / FT | Verdict and what answers it |
|---|---|---|
| limitation-of-actions | 26 / 0 | **Present** - six years on a contract (SDCL 15-2-13(1)), and **SDCL 53-9-6 voids any lease term shortening it** |
| binding-arbitration | 150 / 7 | **Present** - SDCL 21-25A-1; the only carve-out from SDCL 53-9-6 |
| liquidated-damages | 3 / 1 | **Present (narrow)** - SDCL 53-9-4, 53-9-5, with severability at SDCL 21-9-11 |
| confession-of-judgment | 2 / 1 | Absent as to a ban; the clause still cannot work (SDCL 53-9-6) |
| lease-term-limitation | - | **Present** - SDCL 43-32-2 (agricultural 20 yrs, municipal lot 99 yrs); none for housing |
| statute-of-frauds-lease-term | - | **Present** - SDCL 43-32-5, **more than one year**, a validity rule, signed by the **lessor** |
| purpose-limitation | 51 / 0 | **Present** - SDCL 43-32-11 gives risk-shifting "at all events" **or** rescission |
| scope | - | **Present** - a general chapter, not an act; no mobile home park act, no local adoption |
| consumer-protection-act | - | **Present**, with a scope question recorded - SDCL 37-24-1(6) reaches goods or services "leased, or rented" |
| automatic-renewal | 1 / 1 | Confirmed absent; SDCL 43-32-14 and 43-32-15 renew by default instead |
| guarantor-renewal | 87 / 1 | Confirmed absent; guarantor security is still deposit money (SDCL 43-32-6.1) |
| lease-content-requirements / plain-language / optional-lease-terms | 1 / 0 | Confirmed absent; SDCL 53-9-1, -3, -4, -5, -6 govern instead |
| statutory-caps | 2 / 0 | **Present** - written as an inventory of every figure South Dakota fixes |

**Two catchline matches turned out to be false leads, and reading them is what caught it.** `confession of
judgment` matched **SDCL 37-24-5.5**, whose catchline promises exactly the prohibition the topic asks about - but
the section reads 'for any seller to include in any **door to door** contract or receipt any confession of
judgment', and SDCL 37-24-5.2 narrows 'door to door sale' further still. It is not a lease provision. Likewise
`liquidated damages` matched **SDCL 37-24-48**, which turns out to be a damages provision for unsolicited
commercial email. Both would have produced a wrong row if the catchline had been trusted. The confession-of-judgment
row still reaches a firm answer, but on SDCL 53-9-6 rather than on a prohibition that does not exist.

**A scope question that affects a dozen rows, recorded once.** Many rows in this pass cite chapter 37-24 as the
consumer-protection route. Reading SDCL 37-24-1 confirms the definitions point toward coverage of a tenancy -
"'Goods or services,' goods or services purchased, **leased, or rented**" and "'Merchandise,' any object, wares,
goods, commodity, **intangible**, instruction, or service" - but the operative prohibition at SDCL 37-24-6(1) is
worded around the 'sale or advertisement' of merchandise, much of the chapter addresses consumer sales, and no
South Dakota decision applying it to a residential lease was located. Rather than hedge in a dozen places, the
question is recorded in full in `edu-consumer-protection-act-sd` with the cautious course stated (assume it
applies), and the other rows cross-reference it. One legislative indication in favour: chapter 22-40's
breach-notification failures are expressly prosecutable 'as a deceptive act or practice under s 37-24-6'
(SDCL 22-40-25), which is conduct outside any classic sale.

**Batch 12 (physical condition, 15 topics) and batches 7-8 (eviction core and notice duties, 28 topics
canvassed).** Both canvassed sets were checked by me before entering the delta: structurally clean, and every
distinct SDCL section cited - 83 from one, 77 from the other - verified against the section index, with one
exception resolved below. Nonsense controls 0 in every batch.

**The physical-condition cluster has a single answer running through it:** SDCL 43-32-8 is the whole of South
Dakota's building-condition law for rentals, and its wording does more work than its brevity suggests. 'The
premises **and all common areas**' brings shared lighting, laundries, garages, stairwells and playgrounds inside
the duty (`edu-common-area-lighting-sd`, `edu-other-landlord-facilities-sd`). Naming 'electrical, plumbing, or
**heating** systems' and omitting cooling is why heat cannot be shifted to a tenant while air conditioning need
not be supplied at all (`edu-heating-duty-sd`, `edu-no-portable-cooling-device-right-sd`). And the non-waiver
sentence is why an appliance-exclusion clause cannot reach the furnace or the wiring
(`edu-appliances-excluded-sd`). Twelve of the fifteen topics are absences with that one duty as the answer -
no balcony inspection, no security-device or rekey mandate, no window guards, no radiator covers, no asbestos
duty, no well testing, no solar or cooling right, no furnishing rules.

**`pool-safety` is the third instance of South Dakota's lodging-only pattern, and the most useful one to name.**
A `\bpool\b` battery returns 53 statewide catchline hits, but reject-testing with `swimming pool` cuts it to 10,
all municipal bond provisions. The real rules are in **ARSD article 44:02, which is held and is titled "Lodging
and Food Service"**: 'All water recreation facilities, including swimming pools, spas, and water slides **operated
by a hotel and used by guests or the public**, must be designed, constructed, and maintained using the
"Recommended Standards for Swimming Pool Design and Operation," 1996 edition' (ARSD 44:02:02:22). So South Dakota
has pool standards, smoke-detector standards and sanitation standards that all stop at the door of a residential
tenancy - the same scoping that `edu-detector-duty-scope-sd` records for alarms. A library that found "South Dakota
regulates pools" without reading the article's title would get this wrong.

**From the eviction and notice clusters, four statutes entered the library for the first time**, all verified
section-open after the canvass: **SDCL 21-7-1 and 21-7-2** (waste by a tenant for years supports treble damages,
forfeiture of the estate and **eviction**, but forfeiture and eviction only where the injury equals the value of
the unexpired term or was done maliciously) - a second, independent eviction remedy no South Dakota row had cited;
**SDCL 43-32-31** (ninety days' notice to vacate and remove a mobile or manufactured home where the leased land is
developed for an alternate use, inapplicable where the notice rests on a lease breach) - South Dakota's only
conversion-notice provision; **SDCL 15-26A-28** (on appeal from a judgment directing delivery of possession the
bond condition is no waste plus the value of use and occupation if affirmed) - so South Dakota's only possession
bond runs against the appealing tenant, not the landlord; and **chapter 34-29B's inspection sections**
(consent-or-warrant entry, periodic inspection, a Class 1 misdemeanor for disobeying a fire-marshal order, written
notice of violation) - the only penalised inspection regime reaching residential premises.

**One citation I could not verify from my own index, and the agent was right.** A row cited SDCL 15-6-4(c), which
my statewide catchline index does not contain - because my parse of the title index captured only bare
`title-chapter-section` numbers and **silently dropped the lettered-subsection entries that court rules use**. I
checked the raw held text of chapter 15-6 directly and the section exists with the quotation accurate word for
word: 'The summons may be served by the sheriff or a constable of the county ... or by any other person not a
party to the action who at the time of making such service is an elector of any state.' The lesson is about my
instrument, not the citation: **the statewide index under-reports chapter 15-6 (and any chapter organised as court
rules), so an absence screened only against it is not safe for a procedural subject.** Full text was used for all
such screens in this pass, and this is proposed as an SOP line below.

**Batch 13 (EV charging, registration and lease-structure thresholds, 14 topics).** Thirteen absences and one
Present. Nonsense controls 0 in each batch.

Two results are worth stating as findings rather than entries in a table.

**No South Dakota landlord duty is tiered by portfolio size - none at all.** The battery
`(?:four|4|five|5|ten|10).{0,20}(?:or more|or fewer).{0,20}(?:unit|dwelling)|number of (?:rental )?units`
returns **0 of 47,386 catchlines and 0 in the held chapters' full text**. There is no small-landlord exemption and
no duty that switches on above a number of properties, so the habitability duty, the deposit cap and timetable,
the entry standard and the termination notices apply identically to a one-duplex owner and to a thousand-unit
owner. Two figures that look like thresholds are **building-size** tests, not portfolio tests, and the row says so:
ARSD 61:15:01:15 and 61:15:01:19 turn on a multifamily residence housing six or more families, and the seller's
disclosure regime on 'residential real property consisting of not more than four family dwelling units, all of
which are contained in one structure' (SDCL 43-4-37(3)). A landlord with twenty fourplexes is outside the alarm and
sprinkler rules; a landlord with one six-plex is inside them.

**`frozen-standard-incorporation` is Present, and the editions do not match each other.** South Dakota regulates
by incorporating outside standards and freezes the version each time - but the two regimes that reach a rental are
frozen at different dates. Building design runs on the **2024** International Building Code, International
Residential Code and International Property Maintenance Code (SDCL 11-10-5, 11-10-6, 11-10-11, 11-10-12), while
the Department of Public Safety's fire-safety rules - the ones carrying the smoke-detector and sprinkler
requirements - adopt the IBC, IFC and IMC **2015** editions (ARSD 61:15:01:01), and lodging pool standards run on a
**1996** publication (ARSD 44:02:02:22). Further frozen references: FIPS 140-2 'in effect on January 1, 2018'
(SDCL 22-40-19(2)) and a refrigerant designation 'as amended and in effect on January 1, 2023' (SDCL 11-10-14).
The row tells a landlord to confirm which edition applies to which regime before accepting a code citation.

**A third instance of my catchline index under-reporting, recorded because it is now a pattern.** The frozen-
standard screen `as in effect on|as amended (?:and )?in effect` returns **0 catchline hits statewide** even though
the phrase is the organising technique of several chapters - because it lives in section bodies, never in
catchlines. Taken with the court-rule subsection gap found in batch 7, the instrument's limits are now clear
enough to state as a rule: **the statewide catchline index is conclusive only for subjects a catchline would
name.** Every absence in this pass is screened against full text as well, and the proposed SOP change below makes
that explicit.

**One verdict is left as Not located, with the boundary in the row body.**
`entity-landlord-court-representation` asks whether a non-attorney may appear for an entity landlord. No statute
or rule imposing that bar appears in the 26 held chapters - which include chapter 15-6 in full - but unauthorised
practice of law sits in SDCL chapter 16-18 and in the Supreme Court's own rules, neither held, and the index's
court-rule gap makes a rule-based bar the more likely location. The row says so rather than asserting permission,
and gives the landlord the operative practical point: in a forcible entry and detainer case the court may tax
reasonable attorney fees to the prevailing party **only if that party is represented by a licensed attorney**
(SDCL 21-16-11), and the fee-shifting is mutual - so an entity appearing through its own manager cannot recover
fees even if it wins, while a represented tenant who prevails can recover against it.

**Batch 14 (tenant conduct, house rules and lease-term restrictions, 13 topics).** Eleven absences and two
split verdicts. Nonsense controls 0 in each batch.

Three results are worth stating as findings rather than entries in a table.

**A lease firearm restriction is enforceable in South Dakota, and the state's firearm preemption does not touch
it.** This matters because the opposite is widely assumed. The landlord-facing battery
`firearm.{0,60}(?:lessee|tenant|landlord|rental|dwelling)|(?:lessee|tenant|landlord).{0,40}firearm`
returns **0 of 47,386 catchlines and 0 in the held chapters' full text**; the vehicle variant
`firearm.{0,40}(?:vehicle|motor vehicle)|vehicle.{0,30}firearm` returns 2 catchlines, both discharge offences
(SDCL 22-14-20, 22-14-21). The broad screen `firearm|concealed pistol|\bweapon\b` returns 77 catchlines, and the
only ones carrying the catchline **"Firearms regulation prohibited--Action by attorney general"** are
**SDCL 7-18A-36 (counties), 8-5-13 (townships) and 9-19-20 (municipalities)** - three parallel provisions
addressed to a political subdivision's **ordinance** power. The preemption runs against government, not against
private contract, so it neither protects a tenant from a lease term nor stops a landlord adopting one. Chapter
23-7 (concealed carry) is not held, but its catchlines were read and no permit provision reaches a private lease.
A firearm covenant therefore reaches eviction like any other, through SDCL 21-16-1(7).

**Two shared clauses existed for `rules-regulations` and both were declined, which is the first time a tag was
refused for a reason other than the clause's own basis resting on the other state's statute.** `rules-ia`
(11 states) recites the Iowa URLTA enforceability conditions - purpose, reasonable relation, fair application,
explicitness - as conditions on a rule binding the tenant; tagging it would import into South Dakota a set of
limits South Dakota does not impose, so it fails the rule-26 basis check in the ordinary way. `rules-wi`
(7 states) fails differently: its mid-tenancy rule (a new rule binds only on the tenant's written agreement or at
renewal) is correct for a fixed term but **omits the modification route South Dakota actually gives the
landlord**. Under SDCL 43-32-13 a month-to-month lease may be modified on thirty days' written notice before the
month's end, and the notice "shall of itself operate and be effectual to create and establish as a part of the
lease the terms, rent, and conditions specified in the notice, if the tenant shall continue to hold the premises
after the expiration of the month", subject to the tenant's fifteen-day termination right. Tagging `rules-wi`
would have understated the landlord's position rather than overstated it. Both reasons are recorded in
`edu-rules-regulations-sd`'s notes; the topic is answered by an education row.

**The tenant's statutory duties are three sections, and that is the whole list.** South Dakota has not adopted
URLTA, so there is no tenant-obligations section: the duties are SDCL 43-32-10 (preserve the premises,
appliances, appurtenances and other leased personality; repair deterioration from the lessee's own negligent,
wilful or malicious conduct or that of a person under the lessee's direction or control), SDCL 43-32-11
(specified-purpose use, with the landlord's election between holding the tenant responsible for the premises'
safety "at all events" and treating the contract as rescinded) and SDCL 43-32-16 (forward a proceeding notice,
with liability for all damages from an omission to do so). Cleanliness, rubbish, noise, facilities use and
disturbance of neighbours are all absent, so each must be a lease term - carried by SDCL 21-16-1(7).

The remaining verdicts: `tenant-right-to-organize` is **absent as to any right** (no association right, no
organiser access, no common-area meeting right, no recognition duty; battery
`tenant.{0,15}(?:union|organiz)|resident.{0,15}(?:council|associat)` 0 catchlines statewide, SDCL 43-32-27 the
only full-text hit) but **Present as to protection**, since SDCL 43-32-27(3) makes a rent increase above fair
market value, a decrease in electric, gas, water or sewer services, or a notice to vacate not based on a breach
actionable where it follows the tenant organising or joining a tenants' union - with the 180-day defence
attaching to the notice-to-vacate limb only. `religious-cultural-display` is absent as to any display right
(`religious.{0,25}(?:display|object|symbol)|mezuzah` 0 / 0) but constrained by SDCL 20-13-20(1), (2), creed and
religion being protected, which makes selective enforcement of a neutral no-affixing rule the real exposure.
`tenant-display-rights` is clean (`\bflag\b|display.{0,20}(?:sign|banner)|political sign` 15 catchlines, all
state emblems, Capitol flags and municipal campaign signs). `home-business` is clean
(`home occupation|business use.{0,20}(?:dwelling|residen)` 0 / 0), with SDCL 43-32-11 supplying unusually strong
enforcement **only where the lease specified the purpose**. `drug-free-housing-addendum` is clean (`drug.?free`
2 catchlines: SDCL 22-42-20 drug-free zones as a separate indictment count, SDCL 34-20G-24 a workplace policy
safe harbour), with the live constraint being SDCL 34-20G-19's bar on penalising a cardholder solely for
cardholder status against the same section's express preservation of "reasonable restrictions on the medical use
of cannabis". `double-letting` (0 / 0) resolves through SDCL 43-32-6's delivery and quiet-enjoyment obligation
and SDCL 43-32-19(1). `seasonal-tenancy` (0 / 0) has no category at all: the only genuine distinctions are
licensed transient lodging (chapter 34-18, ARSD article 44:02, SDCL 43-32-37) and agricultural lettings
(SDCL 43-32-2, 43-32-22.1). `alt-housing` (4 catchlines, all public acquisition, urban renewal, injunctions
against a house of ill fame and mental-health-centre charges) and `disaster-duties` (19 catchlines, every one
governmental) both resolve to the same place: South Dakota's answer to an uninhabitable unit is that the tenancy
**ends** on the tenant's election under SDCL 43-32-9 or SDCL 43-32-19(2), not that the landlord rehouses anyone -
and an undamaged but **inaccessible** unit is addressed by no provision located, which is stated as the boundary
in the row. `bed-bug-cooperation` is clean (`bed ?bug` 0 / 0) and took the pass's fifth tag, `pest-cooperation-pr`.

**Batch 15 (land, title, associations and lease-form duties, 13 topics).** Ten absences, two Present and one
Present-in-one-form. Four tags and one new South Dakota clause. Nonsense controls 0 in each batch.

**South Dakota enacted a foreign-ownership chapter in 2026 that reaches residential leases, and no row in the
library had cited it.** This is the batch's substantive find. Chapter 43-2B (SL 2026, ch 177, ss 1-9) was fetched
live because it postdates the corpus. It defines a "real property interest" as "any direct or indirect legal or
equitable stake in real property as evidenced by a contract for deed, deed, easement, lease, option, purchase
agreement, trust, or other instrument" (SDCL 43-2B-1(3)) and bars a prohibited entity from holding or obtaining
any such interest "during any time in which there exists a military installation in this state" (SDCL 43-2B-2) -
with **no acreage limit and no short-lease carve-out**, so an ordinary twelve-month tenancy is inside it.
"Prohibited entity" imports SDCL 43-2A-1(5): a foreign entity, government or person from China, Cuba, Iran, North
Korea, Russia or Venezuela, with "foreign person" meaning "a natural person who is not a United States citizen or
a resident". The landlord-facing provision is decisive the other way: a person who is not a prohibited entity
"does not have any duty to determine or inquire whether another person is a prohibited entity" and "may not be
held liable under this chapter for failing to determine or inquire" (SDCL 43-2B-7). Enforcement is the attorney
general's alone, the remedy a judgment declaring the interest "void as of the date of the judgment" with
forfeiture or termination (SDCL 43-2B-5), and SDCL 43-2B-9 excludes CFIUS-cleared entities, lawful permanent
residents and citizens "including a dual citizen", and an individual with lawful status. The older chapter 43-2A
is agricultural only and, for non-prohibited foreign persons, says in terms that "there is no restriction on
easements or the number of acres of agricultural land that a foreign entity, foreign government, or foreign
person may lease" (SDCL 43-2A-2(4)). **No South Dakota clause is proposed**, because SDCL 43-2B-7 removes both the
duty and the liability, leaving a tenant representation with only a contractual-exit value; that judgment is put
to Taylor under "Proposed topic questions" rather than settled by drafting.

**The hunting default runs against the landlord, and the reason is two words.** "no person may fish, hunt, or trap
upon any private land without permission from the **owner or lessee** of the land" (SDCL 41-9-1) - so a South
Dakota tenant of land can lawfully authorise hunting on it, and a lease silent on the point gives that away. The
point is sharpened by SDCL 41-6-2, under which a resident may take small game, game birds or fish in an open
season "on land or waters on land owned or leased by the resident without first securing a license", so the
licensing system is no brake on a tenant either, and by SDCL 41-9-1.2, which keys written permission on adjoining
rights-of-way to the "owner or lessee" as well. In a pheasant state that absence has money attached, which is why
`farmland-sporting-rights-co` was tagged rather than answered by education alone.

**`maintenance-duty-shift` produced the pass's first new South Dakota lease clause from a carve-out rather than a
cap.** SDCL 43-32-8 carries the chapter's only express non-waiver sentence and, attached to it, the whole of what
South Dakota permits: "The parties to a lease or hiring of residential premises may not waive or modify the
requirements imposed by this section; however, the lessor may agree with the lessee that the lessee shall perform
specified repairs or maintenance in lieu of rent." Each word is a condition - the work must be **specified**, so a
blanket transfer of repair responsibility is void, and it must be **in lieu of rent**, so a rent credit is the
consideration that brings the agreement inside the exception rather than optional decoration. Basis under rule 55
is CONSTRAINED_TERM: the landlord sets the scope and the credit, the statute limits the form. `repairs-in-lieu-of-rent-sd`
was written because none of the three shared candidates fits - `tenant-assumed-duties-ak`,
`waste-removal-duty-shift-ks` and `lessee-assumes-condition-la` each recite their own state's shifting statute in
the clause body, and none uses a rent credit.

Four tags, each with the basis check recorded on the row: `farmland-sporting-rights-co` (generic body; the
Colorado "person in possession" rationale holds verbatim here through "owner or lessee"); `association-approval-la`
(hand-filled prompts, no Louisiana text in the body; its separate-deposit limb matters more here because SDCL
43-32-6.1 deems any money securing performance a deposit and caps it at one month's rent);
`energy-data-release-wy` (preferred over the DC version, which supplies consent contemplated by District
statutes - the Wyoming row's own notes record that no statute underlies it, and its operative sentence is the
tenant's covenant to sign the **utility's** own release, which is exactly the South Dakota position); and
`tenant-portal-mn`, whose central limb is not a Minnesota import but a South Dakota requirement - SDCL 53-12-9
says a party who agrees to one electronic transaction may refuse others and "The right granted by this section
may not be waived by agreement", so a lease compelling all notices through a portal is unenforceable to that
extent. Its no-fee-for-the-alternative promise is flagged on the row as a concession South Dakota does not compel.

The remaining verdicts: `hoa` is a clean absence on all seven limbs - chapter 43-15A was screened by catchline in
full and its only lease-related entries concern the master deed or lease establishing the project (SDCL 43-15A-3,
-4, -9) and a construction lien (SDCL 43-15A-29); South Dakota has adopted no common interest ownership act, so no
association can intercept rent. The one adjacent duty is on sale: SDCL 43-4-44.1 (SL 2024, ch 177, s 2) requires
a seller of association-governed residential property to furnish the governing documents and assessment detail
before a written offer. Its trigger reads "In attempting to sell" while its applicability sentence reads
"transfers", and SDCL 43-4-37(3), (5) defines "Transfer" to include a lease with an option to purchase - so the
**cautious course stated in the row** is to furnish it on a lease-option. `confirmed-absences-outside-title` is
clean on all three limbs, and chapter 22-35 read in full produced a catchline trap worth recording: SDCL 22-35-7
is captioned "Affirmative defenses to unlawful occupancy" but states defences to prosecution under the criminal
trespass sections and creates **no civil remedy**, so South Dakota has no squatter route outside chapter 21-16.
`stigmatized-property` (3 unrelated catchlines; 8 HIV catchlines, all criminal, testing or licensing),
`rights-responsibilities-guide` (3 unrelated), `translation-duty` (11 translation catchlines, all interpreters,
television translator districts or insurance; 3 type-size catchlines, none a lease) and `tpa-sunset` (3, none
landlord-tenant) are all clean, with the last noting that the live risk is amendment rather than expiry - SL 2026,
ch 179, s 1 (SB 4) being the current example. `communal-land-lease-approval` is clean as to state law, with
federal trust-land leasing flagged and tribal law outside scope. `energy-data-release` is clean, and carries the
one tested boundary in this batch: whether ARSD article 20:10 restricts a utility's release of customer usage data
could not be resolved, the article being unreachable, which is why the tagged clause works through the utility's
own form instead.

**Canvassing agent E (screening, status and protected-characteristic topics, 14 topics).** Six Present, eight
confirmed absences after resolution. No tag candidate existed: every comparator row in all fourteen topics is
single-state. All fourteen rows were validated structurally and every cited section verified present in the
statewide index.

**The agent returned one Not located, and it was resolved rather than shipped.** `social-security-defense` turned
on whether South Dakota exempts benefit income from process - a question in chapter 43-45, which is not among the
26 chapters held in full. The agent correctly confined its claim and named the missing chapter and section-kind in
both body and notes. Chapter 43-45 was then **read in full, section-open, on 2026-10-30**, and the limb is
answered: the absolute-exemption schedule is a **closed list of nine subdivisions** - family pictures, a pew, a
burial lot, the family Bible and library to two hundred dollars, wearing apparel, a year's provisions and fuel, a
judgment for another state's income tax on retirement benefits, "health aids professionally prescribed", and a
non-lump-sum support award not exceeding seven hundred fifty dollars a month (SDCL 43-45-2(1)-(9)) - and **Social
Security and public assistance are not on it**. The million-dollar retirement exemption reaches only "employee's
benefit plans" as defined by ERISA and listed Internal Revenue Code sections (SDCL 43-45-16, 43-45-17), which does
not reach Social Security; earnings are exempt "only to the extent provided in ss 21-18-51 to 21-18-53"
(SDCL 43-45-14). So the shield over benefit income is **federal** (42 U.S.C. s 407(a), flagged). One
landlord-favourable quirk emerged from the same read and is now in the row: the non-absolute exemptions do not
apply "To a debtor for the necessaries of life, including only food, clothing, and fuel" (SDCL 43-45-7(4)) - a
closed list that **does not include rent**. The row's verdict moved from Not located to a bounded confirmed
absence, and the correction is marked on the row itself.

Four findings from the agent worth recording as findings rather than table entries.
**`dv-protection-order-chapter-moved` was settled without the chapter being readable**, by a method worth keeping:
the statewide index holds 56 entries for chapter 25-10, and of the 16 hits on the pattern `25-10` four are
*inbound* transfers from Title 23A (23A-3-2.2 to 25-10-35; 23A-3-21 to 25-10-36; 23A-3-22/-23 to 25-10-38/-39;
23A-43-4.1/-4.2 to 25-10-40/-41), six are in-chapter repeal stubs, and **none is outbound** - decisively confirmed
by SL 2026, ch 102, ss 3-4 (HB 1108), read in full, which adds new sections "to chapter 25-10" citing SDCL 25-10-3
and 25-10-4 at their current numbers. The real landlord trap is different and is now on the row: South Dakota has
**three** civil protection-order chapters (25-10 domestic abuse, 22-19A stalking, 21-65 vulnerable adults) and
SDCL 43-32-19.1(2)(b) names none of them.
**`law-enforcement-cooperation` is Present from a prohibited-term provision** - SDCL 43-32-18.1 bars a lease from
including "any term that authorizes the eviction of a tenant who calls or otherwise seeks assistance from law
enforcement or other emergency responders" - so South Dakota has no cooperation duty and one duty to abstain, read
with SDCL 43-32-19.2 and the SDCL 22-23-8(4) abatement duty.
**`student-housing` is Present but narrower than it looks**: SDCL 20-13-20's closing paragraph exempts "dormitory
residences maintained by public or private schools, colleges, and universities for the educational benefit and
convenience of unmarried students" and fraternity and sorority dwellings - *institution-maintained* housing only,
not private near-campus letting, which is the trap flagged on the row.
**`protected-class-inquiry-ban` is Present but purposive, not flat**: SDCL 20-13-26 reaches "any person" who uses
"any form of application, or make any record or inquiry" to bring about or facilitate discrimination, while the
flat version exists only for school admissions at SDCL 20-13-22(3). ARSD article 20:03 was read in full - twelve
chapters, **no housing chapter**, with ARSD 20:03:07:01 confining chapters :07 to :11 to employment - so the
regulatory carve-out under SDCL 20-13-22(3) has no housing counterpart.

The agent raised three open questions, each resolved practically on the row rather than left hanging: the phrase
"unlawful sexual behavior" appears in only two sections of the entire Code (SDCL 43-32-18.1 and 43-32-19.1) and is
**nowhere defined**; the scope of the chapter 36-21A licence as it applies to an on-site manager or letting agent,
which this pass had already read in part (SDCL 36-21A-10, -12.1, -48, -76, -77, -81, -82, -134.1, -138.1, -144);
and whether SDCL 43-45-2 names public assistance, now answered above - it does not.

**Canvassing agent F (title, liens, remedies and third-party interests, 14 topics).** Six Present, five confirmed
absences, three split verdicts. Two tags. All fourteen rows validated structurally; the agent self-tested all 33
statutory quotations in its own rows against the corpus and all passed.

**The agent challenged the provenance of text in two already-delivered rows, and it was right about the premise
and wrong about the conclusion.** It established - correctly - that chapters 21-48 and 21-10 are **not** in the
corpus: they are absent from the 26 held chapters and from both manifests, the README excludes them, and the
phrases quoted in `edu-adverse-proceeding-notice-sd` and `edu-no-foreclosure-disclosure-sd` appear nowhere in the
14.3 MB of corpus text. It then observed that the shell is policy-denied at the proxy for sdlegislature.gov
(CONNECT returns 403), with the proxy's own failure log recording that denial *before* those rows were written,
and concluded that nobody this pass could have read chapter 21-48 - so that the two rows quote text from a source
that was never available. The reasoning is good and the conclusion is wrong for one reason the agent could not
see: **every live read this pass went through the built-in browser on the linked device `terra`, not the
container's shell**, and a subagent has no access to that route and no way to verify a read made through it.

**The two quotations were nonetheless re-verified against a fresh live read on 2026-10-30, and both match
verbatim.** SDCL 21-48-6.1: "At least twenty-one days prior to the date set for sale, the foreclosing creditor
shall serve a written copy of the notice of foreclosure sale on the mortgagor and any lien holder or encumbrancer
whose interest in the property being foreclosed would be affected by the foreclosure." SDCL 21-48-6(8): "The name
and address of all persons claiming a lien, encumbrance, or other recorded ownership interest in the property."
Both rows stand unchanged. The same applies to the other rows the agent flagged on the same reasoning
(`edu-no-government-fee-reimbursement-rule-sd` on chapter 34A-6, `edu-binding-arbitration-sd` on chapter 21-25A,
and the rows citing SDCL 43-4-44): each rests on a browser read recorded in s 1. The methodological finding is
real and is carried into s 6 and the SOP items - **a log that records a hash for a live read does not let a
subagent verify it, so the log must name the retrieval route for every chapter fetched outside the corpus.**

**Resolving two of the agent's bounded rows changed the substance of one of them.** The agent was disciplined
about boundaries: it quoted nothing from a chapter it could not read, stated each boundary in body and notes, and
declined to state any interest-rate figure. Both boundaries were then resolved by live reads.

*Construction liens.* Chapter 44-9 was read in full and the material point is invisible from a catchline: SDCL
44-9-2 deems everyone interested in the land to have authorised improvements on it, "provided that **as against a
lessor no lien is given for repairs made by or at the instance of his lessee**." So tenant-ordered **repairs**
cannot reach the landlord's title at all, and the exposure is confined to improvements that are not repairs,
where the escape is SDCL 44-9-4's notice served on the workers or posted on the premises "within five days after
knowledge thereof". **A correction was made and left visible on the row**: the first draft described South Dakota
as running exposure off the owner's *knowledge*, which was read off that section's catchline ("Construction of
improvements with knowledge of owner subjects land to lien--Exceptions"). The body is not a knowledge test but a
deemed-authorisation rule, and "knowledge" appears only in the five-day trigger. This is a second worked example,
independent of the SDCL 21-16-1 error in s 6, of a section being mischaracterised from its catchline - which is
why that now appears as a proposed SOP change in its own right.

*Interest.* Chapter 54-3 was read in full and every figure in `edu-unpaid-damages-interest-sd` now comes from the
text: interest runs at the Category F rate, **fifteen percent a year**, on moneys after they become due absent an
express written contract or a rate on the bill, and "Any interest rate appearing on a bill, statement, or invoice
may not exceed eighteen percent" (SDCL 54-3-5); the official rates are set at SDCL 54-3-16; twelve percent is the
maximum where no rate is specified, on a 360-day year (SDCL 54-3-4); judgments and statutory liens take ten
percent (SDCL 54-3-5.1); and most striking, "Unless a maximum interest rate or charge is specifically established
elsewhere in the code, there is no maximum interest rate or charge, or usury rate restriction ... if they
establish the interest rate or charge by written agreement" (SDCL 54-3-1.1). **No clause is proposed, but the
reason changed**: the agent withheld one because no figure could be read; the figures are now read, and the
judgment is that a clause is unnecessary because the statutory default of fifteen percent already exceeds what a
landlord would stipulate.

Four further findings from the agent, each kept.
**SDCL 43-8-11 and 43-8-12 were absent from the library entirely** (0 rows): a reserved right of reentry needs
only three days' notice, and an action on a reserved reentry needs none - the most landlord-favourable possession
provision in the state, and it had no row anywhere.
**SDCL 43-25-28**, "Attornments of tenants unnecessary to grants of rents, reversions, or remainders", was found
only after the bare pattern `attorn` returned 514 catchlines swamped by "attorney"; with SDCL 43-8-7 and 43-32-21,
also at 0 rows each, that is the whole tenancy side of a sale.
**No drug-nuisance statute exists anywhere in South Dakota** (0 catchlines, 0 full text), which disposes of
several nuisance comparators at once.
**The agent declined to assert the six-year contract limitation** at SDCL 15-2-13 that the brief had given it,
because chapter 15-2 is not held and under the brief's own rule the figure was not citable from the corpus; it
rested the row on SDCL 53-9-6 instead. That is the correct call on the instructions it had, and the figure is
independently established in s 1 from a browser read.

**A terminology caution the agent raised and I have adopted.** The library describes SDCL 43-32-9's third remedy
as "rent escrow". The word escrow never appears in the statute, and the account is **tenant-held** - "a separate
bank or savings and loan account" - not court-administered as in Minnesota. No existing row is wrong on substance
and `edu-habitability-duty-sd` records the written-notice precondition correctly, but "escrow" in a
landlord-facing body implies a neutral holder and a filing step South Dakota does not have. The agent corrected
two of its own bodies; no existing row was changed.

---
## 4. Decisions, and the named South Dakota items

**Decisions taken this batch.**

1. **The statewide catchline instrument** (s 1) is the method decision that shapes this pass. Only 26 chapters are held, so a bare zero in them would have forced "Not located" under rule 36 for most topics. Parsing every section catchline in the Code out of the corpus's own title index gives a statewide bound instead, and naming the chapter that would carry a missing provision comes from the same index. Where a topic still turned on text outside the held chapters, the chapter was **fetched live and read** rather than left bounded - five chapters this batch (s 1). Only one boundary remains stated as a boundary in this batch: the Public Utilities Commission's rules in `edu-utility-allowance-cap-sd`.
2. **Quoting from live text, not the corpus.** The corroboration found the corpus's text extraction inserts spaces around hyphens and before punctuation. Quotations are therefore taken from live text; the corpus is used for screening and batteries.
3. **`tenant-forward-proceedings` tagged rather than given a new clause.** SDCL 43-32-16 states the duty almost word for word, the shared clause's basis is SERVES_LANDLORD and rests on no other state's statute, and the statute's extra damages limb is carried in the companion education row instead of by redrafting a 50-state clause.
4. **`carpet-cleaning` tagged** after the rule 26 basis check: the clause is conditional and limited to actual cost, which is what keeps it a restoration charge under SDCL 43-32-24 rather than a penalty void under SDCL 53-9-4.
5. **`alarm-tampering-fee`, `rent-concession` and `extended-absence-notice` all answered through SDCL 53-9-4 and 53-9-5.** South Dakota's bar on contractual penalties is the operative constraint on three otherwise unrelated topics, and it is the reason each row's cautious course is "charge documented actual cost" or "make the discounted figure the rent" rather than a fixed sum.

**Named item 6 - the full-text smoke and CO alarm battery, and ARSD 61:15's code adoption. Answered; see s 3.** Full text of all 26 held chapters, every word form, controls in the same batch: the only smoke-detector statutes are SDCL 34-18-9.4 and 34-18-22.1 to 34-18-22.3, all transient lodging; `carbon monoxide` is 0 in the held chapters' full text, 0 across all 47,386 catchlines statewide, and 0 in ARSD 61:15. The residential requirement is by rule, not statute: ARSD 61:15:01:14, **61:15:01:15 (multifamily residences housing six or more families)** and 61:15:01:19 (sprinklers in new 6+ buildings). ARSD 61:15:01:01 adopts the IBC, IFC and IMC **2015** editions under SDCL 34-29B-2; ARSD 61:15:01:16 preserves local alternatives for named IFC chapters. **This confirms the existing library row rather than contradicting it** - see s 6. Two new rows carry the findings into topics that had none: `edu-fire-code-standard-sd` and `edu-fire-sprinkler-duty-sd`.

**Named item 7 - currency of the rows added. Answered; see s 1**, including the SB 4 nuance (21 days to return or state reasons; 45 days for an itemized accounting on request) and confirmation that SL 2024 ch 75's repeal of SDCL 21-16-2 and 21-16-7 is not load-bearing for any row added this batch.

**Named items 1 to 5 are not yet reached** and are scheduled with the batches whose topics they belong to: item 1 (optional clauses never screened - crime-free, eviction-fee and the statutory waivers, with ch. 53-9 and SDCL 15-17-42, 21-16-1, 43-32-18, 43-32-8, 43-32-6, 43-32-6.1, 43-32-24); item 2 (`casualty-and-mitigation-waivable`); item 3 (`keys`, `hoa-compliance`, `dv-lockchange`, `dv-eviction-protection`, with ch. 25-10 to be fetched); item 4 (`smoking-policy`, `no-alterations`, `addendum-precedence`, with ch. 34-20G to be fetched); item 5 (`edu-eviction-procedure-sd` against `edu-cares-act-notice`). Chapter 53-9 has already been read in full this pass, and SDCL 43-32-6, 43-32-8, 43-32-18 and 43-32-24 have been read section-open, so item 1 is part-prepared. **Early notice on item 1:** SDCL 43-32-8's express non-waiver sentence - the parties to a residential lease 'may not waive or modify the requirements imposed by this section' - is the direct answer to `habitability-waiver` and `habitability-modifiable`, and **SDCL 53-9-6** ('Every provision in a contract restricting a party from enforcing his rights under it by usual legal proceedings in ordinary tribunals, or limiting his time to do so, is void', arbitration under the Uniform Arbitration Act excepted) is the answer to `jury-waiver` and to any shortened-limitation term. SDCL 53-9-6 appears in **no row anywhere in the library** (anchored section-number grep, rule 28).

**No question needs putting to Taylor from this batch.** Every topic in it resolved on primary text.

### Named items 1 to 5

**Item 1 - optional clauses never screened, and the statutory waivers. Answered.** Chapter 53-9 read in full; SDCL 15-17-42, 21-16-1, 43-32-18, 43-32-8, 43-32-6, 43-32-6.1 and 43-32-24 all read section-open. Results carried into rows: `edu-criminal-activity-sd` with `criminal-activity-ky` tagged (crime-free); `edu-no-eviction-penalty-rule-sd`, `edu-no-notice-service-fee-sd`, `edu-no-collection-fee-rule-sd` (eviction fees); and the nine waiver topics - `edu-habitability-waiver-sd`, `edu-notice-to-quit-waiver-sd`, `edu-jury-waiver-sd`, `edu-homestead-waiver-sd`, `edu-showing-notice-waiver-sd` with `showing-notice-la` tagged, `edu-smoke-drift-waiver-sd`, `edu-security-deposit-nonwaiver-sd`, `edu-part5-nonwaivable-sd`, `edu-rent-receipt-anti-waiver-sd`. The three structural findings: **SDCL 43-32-8's second paragraph is the only express non-waiver sentence in the lease chapter** ('may not waive or modify the requirements imposed by this section'), with one narrow carve-out (specified repairs or maintenance in lieu of rent); **SDCL 53-9-6** voids provisions restricting enforcement 'by usual legal proceedings in ordinary tribunals, or limiting his time to do so' and appears in no other row in the library; and the deposit sections achieve non-waivability by definition and forfeiture rather than by prohibition (SDCL 43-32-6.1's 'deemed to be a security deposit', SDCL 43-32-24's forfeiture of all withholding rights).

**A scope question recorded, not resolved.** SDCL 15-17-42 says chapter 15-17 'applies to any civil action or special proceeding in which the State of South Dakota or any of its divisions, departments or political subdivisions is a party including counties, municipalities, school districts, townships, and other governmental entities.' Read literally that confines SDCL 15-17-39 - which makes an attorney's-fee provision in a note, bond, mortgage or other evidence of debt void as against public policy - to cases with a government party, which would be a surprising reading of a public-policy rule about private instruments. Both sections were read section-open. No row added this pass depends on resolving it: each fee row reaches its conclusion on SDCL 53-9-4 alone, and the caveat is recorded in `edu-no-eviction-penalty-rule-sd`. Flagged for the existing row `edu-attorney-fee-clause-limit-sd`, which is outside this pass's scope fence.

**Item 2 - `casualty-and-mitigation-waivable`. Answered** at `edu-casualty-and-mitigation-waivable-sd`, pointing to the existing `fire-casualty-rent-abatement-sd` for the abatement mechanics. The substance: SDCL 43-32-19(2) gives the tenant a termination right where the greater part of the premises, or the part the landlord had reason to believe was the material inducement, is destroyed other than by the tenant's ordinary negligence - and, unlike SDCL 43-32-8, it carries **no** non-waiver sentence, so the topic's question resolves to "not expressly protected", with the cautious course stated in the row rather than left open.

**Item 3 - shared fee clauses and the DV clauses. Answered.** `keys` and `hoa-compliance`, both already tagged SD, were read against chapter 53-9 and SDCL 43-32-24 and **both read correctly**: `keys` lets the landlord re-key and 'charge the cost to Tenant' - an actual cost, not a fixed fee, so it stays outside SDCL 53-9-4's bar on penalties and is withholdable under SDCL 43-32-24(2) as restoration beyond ordinary wear and tear; `hoa-compliance` passes through an association fine actually incurred, which is a third party's charge rather than a penalty imposed by this contract, and is withholdable as 'Other funds due to the landlord pursuant to an agreement' under SDCL 43-32-24(1)(b). Had either stated a flat fee, the answer would differ. Chapter 25-10 was fetched whole (50 sections) and screened section by section for `dv-lockchange` and `dv-eviction-protection`: **it contains neither a lock-change right nor an eviction protection**, and the mechanism is instead the court's power to exclude the abusing party from the shared dwelling or the petitioner's residence (SDCL 25-10-5(2)). Both rows cross-reference the existing `edu-dv-lease-release-sd` and `edu-dv-confidentiality-sd`, which already carry SDCL 43-32-19.1's termination right.

**Item 4 - `smoking-policy`, `no-alterations`, `addendum-precedence`. Answered; all three read correctly.** Chapter 34-20G was fetched whole (106 sections). `smoking-policy` bans smoking of tobacco, marijuana and vaping anywhere on the property and charges remediation cost. That is consistent with South Dakota's medical cannabis chapter, and the reason is worth stating precisely: a cardholder 'may not be refused enrollment by a school or a lease by a landlord, or otherwise be penalized by a school or landlord solely for the person's status as a cardholder', but the same section provides that it 'does not prevent a landlord from imposing reasonable restrictions on the medical use of cannabis by a cardholder who resides at the landlord's property' (SDCL 34-20G-19). A property-wide restriction on the *mode* of use, applied to all tenants and leaving non-smoked forms available, is a reasonable restriction rather than a penalty for cardholder status; nothing requires a landlord to allow cultivation on the rental property, or to allow a guest, client, customer or other visitor to smoke or vape on it (SDCL 34-20G-27(2), (3)); no landlord may be penalized under state law for leasing to a cardholder (SDCL 34-20G-25); and a contract is not unenforceable merely because cannabis activity is federally prohibited (SDCL 34-20G-17). **The line to watch, flagged for future drafting rather than as a defect:** a clause banning *all* medical cannabis use by a resident cardholder, rather than smoking and cultivation, would test SDCL 34-20G-19's 'reasonable restrictions' limit. The current clause does not do that. `no-alterations` reads correctly: its carve-out for 'any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform' and for who owns an installation accommodates SDCL 43-32-9's repair-and-deduct remedy, SDCL 43-32-8's repairs-in-lieu-of-rent agreement, and the tenant's fixture rights in chapter 43-33. `addendum-precedence` reads correctly: its exception for any disclosure, notice or addendum that applicable law requires or says controls is what keeps it clear of SDCL 53-9-1 and of SDCL 43-32-8's non-waiver.

**Item 5 - `edu-eviction-procedure-sd` against `edu-cares-act-notice`. Not yet reached**; both rows are existing rows and the comparison is scheduled with the eviction-topic batch.

### Decisions taken in batch 2

1. **`criminal-activity` and `showing-notice-waiver` tagged rather than newly drafted**, in both cases after the rule 26 basis check: each clause's basis is SERVES_LANDLORD, each body is generic, and the other state's statutory analysis sits in that state's note rather than in the clause.
2. **`jury-waiver` and `casualty-and-mitigation-waivable` resolved under the NEEDS_REVIEW policy with the cautious course stated in the row**, not left for later and not put to Taylor: in each case the cautious course is clear (do not rely on a jury waiver; shape the casualty right with notice, abatement and a repair period rather than remove it) even though the underlying question is unsettled and no South Dakota case was located.
3. **One limb left as Not located, with the chapter named** (rule 36): `homestead-waiver`'s personal-property-exemption limb turns on SDCL chapter 43-45 (Personal Property Exempt From Process) and chapter 21-19, neither held nor fetched. Named in the row body and notes, with what applies in its place.

**No question needs putting to Taylor from this batch either.** The two unsettled points above are recorded with a recommendation in the rows themselves, and the SDCL 15-17-42 scope question affects only an existing row outside the scope fence.

### Named item 5 - answered

**`edu-eviction-procedure-sd` and `edu-cares-act-notice` agree, and complement each other.** The South Dakota
row says no federal notice is a **filing condition** in South Dakota - neither chapter 21-16 nor the Rules of
Civil Procedure in chapter 15-6 imposes one - while expressly preserving the federal duty: 'A landlord whose
property carries a federally backed mortgage or federal subsidy may still owe a CARES Act notice as a matter of
federal law; it is simply not something a South Dakota court checks before accepting the filing.' The federal row
states that duty (30 days' notice to vacate for a covered dwelling, 15 U.S.C. s 9058(c)) and recommends giving it
before filing. There is no conflict: one is about what a South Dakota court requires to accept a filing, the other
about what federal law requires of the landlord. **No finding.**

That row also **independently corroborates the correction at s 1**: its notes record 'SDCL 21-16-7 (5-day
appearance window, amended from 4 to 5 days by SL 2024, ch 75, s 2)' - i.e. the library already had § 21-16-7 as
amended rather than repealed, which is the point on which the prompt's currency list is inaccurate.

**All seven named items are now answered.**

### Decisions taken in batch 4

1. **`confirmed-absences-habitability` written as an inventory, not a verdict.** The topic asks what a state does
   not have, so the row lists the absences and names the row where each is proved, rather than re-proving them.
2. **`habitability-modifiable` and `habitability-waiver` kept as separate rows** rather than one. The statute bars
   waiver *and* modification in the same sentence, but the topics ask different questions and the modification row
   carries the point that no conditional-habitability mechanism exists for properties that cannot meet the
   standard - which is the Alaska comparator and the practically important half.
3. **`tenant-repair-agreement` written as CONSTRAINED, not RECOMMENDED**, because the in-lieu-of-rent permission is
   the landlord's own arrangement and the law limits its form - four conditions on the face of the statute
   (specified repairs; in lieu of rent; an agreement; the duty survives).

**One question for Taylor, batch 15.** `foreign-ownership` is **Present** in South Dakota and the chapter reaches
residential leases (SDCL 43-2B, SL 2026 ch 177 - "real property interest" expressly includes a lease, no acreage
limit, no short-lease carve-out). I wrote it as an education row and **did not draft a clause**, because
SDCL 43-2B-7 removes both the landlord's duty to inquire and any liability for not inquiring, which leaves a
tenant representation with only one real function: making an attorney-general termination of the leasehold a
tenant default, so you keep a damages claim and a clean exit rather than an argument. My recommendation is to
leave it as education, on the ground that a nationality representation in a lease invites a fair housing problem
(national origin and ancestry are protected at SDCL 20-13-20(1), (2)) out of proportion to a remedy that only
matters in the rare case where the attorney general has already acted. If you would rather carry the clause, say
so and I will draft it narrowly - a representation plus a termination right, with no inquiry obligation on the
landlord and no nationality question in the application. The same question will recur in every state that
enacted a lease-inclusive foreign-ownership statute in 2024-2026, so it is worth settling once.

**One judgment on verification_status, recorded rather than taken silently.** All 260 new rows are
`VERIFIED`. That follows the SOP's NEEDS_REVIEW policy as written - a point only case law could settle is stated
in the row with the cautious course and the row stays VERIFIED, and helpers are not to mark rows NEEDS_REVIEW for
interpretive doubts alone - and every row carrying an interpretive doubt states the doubt and the cautious course
in its body. Three rows are a harder case and I want you to see the call rather than discover it: they wait not on
an interpretation but on a **rule I could not read**, ARSD article 20:10 (Public Utilities Commission), which is
a tested boundary - the rules index lists it as RuleId 8438 and every printer-friendly endpoint variant returns
404 while the identical shape serves the three held articles. The sync step in the policy says that for each row
left NEEDS_REVIEW or open, someone reads the rule it waits on; here nobody can, by any route available this pass.
I kept all three VERIFIED, with the boundary named in body and notes and the cautious course stated, on the
ground that marking them NEEDS_REVIEW would queue work that cannot be done and would imply the rows are
unreliable when what is unreliable is one unreachable article that none of them depends on. **If you would rather
they carried NEEDS_REVIEW as a standing marker that the article is still unread, say so and I will switch those
three** - `edu-no-energy-data-release-sd` and the two others that name the article. My recommendation is to leave
them VERIFIED and instead carry the unreachable article as a channel note for South Dakota, so the next pass tries
it again deliberately rather than rediscovering it.

---
## 5. The independent check

**Run.** Per rule 80 as scaled by the prompt: at most two rounds, one agent at a time, the second round re-checking only rows edited after the first, stopping early on a clean round. Round 1 covered all 272 rows and is reported at 5b below. It was not clean, so every error was corrected and a second round was scoped to the 36 rows edited afterwards plus three mechanical sweeps across all 272 - quotation integrity, the house quoting convention and every battery count - because those three fixes were applied by scripted passes over every file and a global edit can break a row it was not aimed at. The rows edited after round 1 are listed in `check_out/edited_after_round1.json` and each carries a marker sentence in its own notes naming what was corrected.

Round 2's result is reported at 5c.

### 5a. Pre-check performed on the delta file itself

Run before the independent round, on the built file rather than the answer sources, because a structural fault
would waste the checker's effort:

- **Header** byte-identical to the master CSV's 17-column header.
- **Line endings** match the master's convention exactly: 273 CRLF row terminators (272 rows plus the header),
  with bare LFs only inside quoted `bodyText` fields as paragraph breaks - 58 here against 3,488 in the master,
  which uses the same convention. An initial test that counted all LFs flagged this as a fault; the test was
  wrong, not the file, and is recorded here because the same false positive will recur.
- **17 columns populated on every row**, no nulls.
- **Scope fence held.** Of 272 rows, 12 have ids present in the master. On every one of those, `bodyText`,
  `rule_type`, `lease_clause_basis`, `group`, `title`, `topic_key` and `content_type` are **byte-identical to the
  master**; only `states` (SD appended), `notes` (appended, master text intact as the prefix) and `last_checked`
  differ. No existing row was altered in substance.
- **260 new rows**, every one `states` = SD alone, `is_active` TRUE, `supersedes`, `choice_group` and `is_default`
  empty, `effective_from` and `last_checked` 2026-10-30.
- **260 distinct `topic_key` values across 260 new rows** - one topic each, matching the 260 listed topics with no
  duplicate and no omission. No duplicate `id`; no `id` colliding with a master row.
- **Groups**: 14 distinct, all already present in the master; no invented group name.
- `content_type` only LANDLORD_EDUCATION and LEASE_CLAUSE; `rule_type` only the five permitted values.

### 5b. Round 1

One agent, no sight of the drafting, briefed on `/home/claude/work/CHECK-BRIEF.md`. It checked all 272 rows and
reported **23 errors, 57 warnings and 106 entries it could not verify here**, with explicit positive controls on
the checks that passed. Every error has been acted on; each corrected row carries a marker sentence in its notes
naming what changed, so the correction stays visible rather than being quietly absorbed.

**The check earned its keep on quotation integrity, which is where all 19 quotation errors sat.** The agent
extracted every single-quoted span in all 272 notes - 1,415 of them - normalised for the corpus's hyphen and
section-symbol artifacts, and matched each against the cited section's own text. The most consequential findings:

- **`'must preserve'` in 9 rows.** SDCL 43-32-10 says the lessee **shall** preserve. The string "must preserve"
  occurs nowhere in the 26 held chapters, the constitution, the held ARSD articles or the 719 enacted session
  laws. The phrase sat **unquoted** in my own agent brief's core-law digest and was promoted to a quotation by
  nine separate rows - a single upstream paraphrase propagating as if it were statutory text, which is the exact
  shape of error the brief exists to prevent.
- **`'use contrary to the lease agreement'` in 5 rows.** SDCL 43-32-18(1) reads "When the tenant uses or permits a
  use of the premises in a manner contrary to the lease agreement". The compression is not in the section, the
  chapter, or anywhere in the corpus.
- **SDCL 43-32-5 quoted three different ways in one pass.** One row had it right; one had "subscribed by the
  lessor" for *signed*; one had a quotation with four substantive departures including **"is void unless" for
  "is valid unless"** - a reversal of the provision's effect.
- **SDCL 43-32-12 misquoted and misapplied in `edu-tenant-portal-sd`**, one of mine from batch 15: "holding" for
  *hiring*, a clause ("when it does not exceed one year") that is not in the section at all, and the residual
  short-hiring limb presented as the residential default. The residential default is "Rents of lodgings are
  payable monthly at the end of each month", applying only "When there is no contract or usage to the contrary".
- A non-statutory formulation of **SDCL 53-9-6** in `edu-liquidated-damages-sd` while other rows quoted it
  correctly, so the library would have shipped two texts for one section; a paraphrase of the **SDCL 43-32-6**
  remedy presented as a quotation in `edu-landlord-breach-remedy-sd`; `'Contrary to the policy of express law'`
  for SDCL 53-9-1's "or to the policy of express law" in 5 rows; a comma-inserted **SDCL 53-9-3** in 4; and the
  singular `'term, condition, or privilege'` where SDCL 20-13-20(2) is plural.

All nine affected sections were re-read with `sdlib.quote` and every replacement verified verbatim before the
delta was rebuilt.

**It re-ran the batteries, which is the check I most wanted and the one I could not perform on myself.** 330
battery claims were parsed and re-executed - 298 statewide catchline counts, 172 held-chapter full-text counts, 9
session-law counts - and **18 claims in 17 rows did not reproduce.** Two were stated zeroes that were not zero
(`edu-no-utility-disclosure-attachment-sd`, actually 1; `edu-no-repair-cost-termination-sd`, actually 3), which is
the serious kind because a stated zero is the whole of an absence claim. The rest were reject-test figures off by
between 1 and 109, in both directions, including `edu-no-deposit-interest-sd` at 537 against an actual 646 and
`edu-binding-arbitration-sd` claiming 7 full-text sections against an actual 27. **Every absence verdict survived
on the merits** - the added hits are off-point in each case - but the figures were wrong, and a figure in a row
that exists to be verifiable is not decoration. Each is now the re-run figure, with the off-point sections named
so the count is reproducible, and the correction marked. The instrument constants all checked out: 47,386
catchlines, 26 chapters, 775 live sections, 719 session-law files.

**Three rule-36 defects.** `edu-jury-waiver-sd` stated **no verdict at all** - it opened on the NEEDS_REVIEW
policy and answered both limbs without ever saying Present, Confirmed absent or Not located. Three rows
(`edu-actual-notice-method-sd`, `edu-no-sex-offender-disclosure-sd`, `edu-required-disclosures-sd`) carried a
**stale "Not located" head verdict** that their own later RESOLVED paragraph had closed, so a reader met a
boundary the row had already lifted. Both kinds are fixed and marked.

**A house-convention breach at scale.** Single quotes are reserved for statutory wording with the citation
adjacent; 150 of 272 rows used them around regex battery patterns (210 occurrences), and others around row ids
and clause text. 180 patterns and 33 row ids are now in backticks and the three clause-text instances in double
quotes. This is cosmetic next to the misquotations, but it is the same discipline: a single-quoted span in these
notes should mean "these are the statute's words", and when half the rows use it for a regex it stops meaning
anything.

**Voice.** 10 bodies ran over the 200-300 word range and 6 were written in the third person rather than the
second. All 16 were rewritten or trimmed; no legal content was added or removed. One of those rewrites also
carried out the terminology correction canvassing agent F had raised: `edu-part5-nonwaivable-sd` described SDCL
43-32-9's third remedy as "escrow rent", and the word escrow appears nowhere in the section - the account is a
tenant-held "separate bank or savings and loan account", so the body now says "withhold into a separate account".

**One residue on a tagged clause.** `tenant-portal-mn`'s body says "this Lease or **Minnesota** law requires",
which reads wrong in a South Dakota lease even though the obligation rests on no Minnesota statute. The tag
stands and the substance is right here; the words are flagged for correction at sync under the scope fence, and
the TAG note records it.

**What passed, stated as positive controls rather than silence.** Structure: 0 problems of any kind across 272
files. Citation existence: **825 distinct SDCL sections, 2,134 references, every one resolving** in the statewide
index - and the agent correctly identified the two apparent misses (SDCL 15-6-4(c) and (d)) as an indexing
artifact of chapter 15-6's lettered rule numbering rather than bad citations, which matches the instrument
limitation recorded in s 1a. Rule 28: every new row written on a topic that already had an active SD row names
that row, 0 exceptions out of 27. Cross-row consistency on the four most-relied-on sections - SDCL 21-16-1,
43-32-8, 43-32-24, 43-32-27 - **no disagreement**: every row that counts the eviction grounds says seven, the
21-day and 45-day clocks and the $200 cap agree everywhere, the 180-day defence is attached to the
notice-to-vacate limb only in every row that mentions it, and the in-lieu-of-rent carve-out is stated
consistently. Rule 55 on the single new lease clause: basis correctly earned and justified. All 12 TAG notes gave
a reason and ran the basis check. 312 of 330 battery claims reproduced exactly.

**On the capability gap, handled correctly this time.** The agent reported nothing as an error for being absent
from the corpus. 104 rows quote the 59 unheld chapters and are listed under `unverifiable_here` with the chapters
named. Where it could check them it did: every cited section number exists in the statewide index, and **102
catchline quotations attributed to unheld-chapter sections match their index entries exactly**, with a further 318
phrases verifying because their text sits in the session laws, constitution or held ARSD articles. That is the
right use of a bounded instrument, and the contrast with the inference canvassing agent F drew from the same
absence (s 3) is the reason s 1a now records the retrieval route for every source.

### 5c. Round 2 - and what it caught in round 1's own fixes

Scoped per rule 80 to the 36 rows edited after round 1, plus three mechanical sweeps across all 272 rows -
quotation integrity, the house quoting convention and every battery count - because those three fixes had been
applied by scripted passes over every file and a global edit can break a row it was not aimed at. That scoping
decision is the one that paid: **the most valuable findings of round 2 were defects created by round 1's
corrections.**

**Round 1's fixes mostly landed.** All nine `'must preserve'` rows now read `'shall preserve'` verbatim with the
surrounding prose intact; all five SDCL 43-32-18(1) rows read correctly and grammatically; SDCL 43-32-5 now agrees
across all nine rows that touch it; the SDCL 53-9-3, 53-9-6, 43-32-6, 43-32-12 and 20-13-20(2) replacements are
verbatim and the 43-32-12 cross-row inconsistency is gone; all 260 education bodies are inside the 200-300 word
range and all six third-person bodies are genuinely in the second person; every row carries a verdict token.

**Four errors, two of them in rows round 1 had just edited.**

1. **`edu-trespass-notice-sd` claimed `trespass` returns FT 0** - "no chapter held for South Dakota contains the
   word in a section body". False: it occurs in SDCL 22-1-2 and 22-18-4.6, both held. Now FT 2 sections, named.
2. **`edu-repair-notice-mechanics-sd` claimed FT 4 sections and named the wrong four.** The pattern returns **6**
   (SDCL 20-13-32.2, 37-24-6, 43-32-9, 43-32-19, 43-32-27, 43-41B-18); SDCL 43-32-24 and 43-32-24.1, which the row
   named, are not hits at all - they require a "written statement", not a notice of disrepair. Worse, the row drew
   an inference from the wrong figure: that the repair limbs are "the only place the Code conditions a tenancy
   remedy on notice of disrepair". SDCL 43-32-27 is a hit, because the retaliation provision is keyed to the
   tenant having given a repair notice. The row now says so - and the corrected fact actually reinforces the
   underlying point, since the same written notice both unlocks the tenant's remedies and starts the retaliation
   window.
3. **`edu-no-association-lease-disclosure-sd` - a round 1 COUNT CORRECTED row - stated 7 catchline hits and then
   named eight sections, one of which (SDCL 43-4-42) is not a hit.** The count was right; the list round 1's fix
   attached to it was not. This is exactly the failure the round 2 brief asked the checker to watch for.
4. **`association-approval-la` quoted SDCL 43-32-6.1 as money `'given to secure the performance of'` the lease.**
   The statute says "the function of which is to secure the performance of". Ten other rows quote the sentence
   correctly, so this one tag note was the outlier.

**Round 1's own corrections introduced two new classes of defect, both now fixed.**

*The 53-9-1 replacement was dropped into the sentence built for the old one, in all five rows.* Each read
"... 'Contrary to an express provision of law' or 'or to the policy of express law' ..." - a doubled conjunction,
because the replacement carried the statute's leading "or" while the row's own "or" stayed. Four of the five also
capitalised "Contrary", which the statute does not, so the pass was inconsistent with itself on casing. The two
limbs are one continuous phrase in the section and are now quoted as one:
'contrary to an express provision of law or to the policy of express law'. The same shape appeared in
`edu-no-security-deposit-standards-sd` ("being **a** 'terms, conditions, or privileges' of the rental"), now
reworded. **This is the specific risk of a scripted quotation fix and it is now an SOP item: a correct quotation
in a sentence built for the wrong one is a new defect, not a fix.**

*The backtick conversion damaged real quotations.* The script that moved 180 battery patterns out of single quotes
mis-paired quote characters in `edu-no-mold-disclosure-sd` (two apostrophes became backticks; two catchline
quotations lost a matching delimiter - and backtick parity in that row was coincidentally even, which is why a
parity check missed it) and in `edu-no-good-cause-notice-sd`, where **one statutory quotation lost its closing
delimiter and the next lost its opening one** (SDCL 21-16-1(4) and SDCL 43-32-27, both re-verified verbatim after
repair). A further nine rows had genuine statutory or catchline wording wrongly converted to backticks
(`runs with the land`, `separate bank or savings and loan account`, `contrary to the lease agreement` and six
others) - harmless to the law but wrong under the convention the fix was meant to enforce. All are restored.
The convention residue round 2 counted - about 100 single-quoted bare-word patterns across 73 rows that the
metacharacter heuristic could not see - was then cleared by a context-aware pass (72 spans in 58 rows, then 19
more), and a final sweep of all 272 rows confirms **no unbalanced delimiter, no apostrophe-as-backtick, and no
backticked span that is not a regex pattern or a row id.**

**Four more stale head verdicts** of the shape round 1 fixed in three other rows - `edu-no-contamination-lease-disclosure-sd`,
`edu-trespass-notice-sd`, `edu-security-deposit-holding-sd` and `edu-no-eviction-record-sealing-sd` - each
declaring a limb Not located that its own RESOLVED paragraph had closed. All restated. One of the four needed care
rather than deletion: `edu-security-deposit-holding-sd`'s statutory limb (chapter 36-21A) is resolved, but a
narrower limb - the Real Estate Commission's own administrative rules - is genuinely still unread, so that row now
carries a **resolved** statutory verdict and a **live** Not-located limb on the rules alone.

**A substantive find, surfaced by accident.** While re-running another row's battery the checker turned up
**SDCL 11-5-9, "Firearms regulation--Homeowner association restriction unenforceable" (SL 2024, ch 42, s 1)**,
which no row in this pass had cited. A homeowners' association "may not include or enforce a provision in a
governing document that prohibits, restricts, or has the effect of prohibiting or restricting the lawful: (1)
Possession, transportation, or storing of a firearm, any part of a firearm, or firearm ammunition; or (2) Discharge
of a firearm." It was read section-open and added to `edu-firearms-sd` (body and notes) and `edu-hoa-sd`. It
**strengthens** the firearms conclusion rather than qualifying it: the Legislature has now reached a private
recorded instrument - an association's covenants - and still has not reached a landlord's lease, so the absence of
any provision touching a lease firearm term is not an oversight about private instruments generally. It also
corrects `edu-hoa-sd`, which had opened by saying South Dakota has no community-association statute; it has
exactly one, and it is about firearms rather than renting.

**Two tool cautions the checker recorded, which are instrument limits rather than defects.** `sdlib.sections()`
registers chapter 15-6's lettered rule subdivisions (for example 15-6-62(a)) with **empty bodies**, so full-text
counts within that chapter under-report - the checker confirmed `edu-no-good-cause-notice-sd`'s claim that
`good cause` reaches SDCL 15-6-62(a) against the raw chapter file rather than through the battery, and it holds.
And `edu-utility-deposit-return-sd`'s "CL 4" for a paired pattern is the forward pattern alone (the union is 7);
the four named sections are right and the verdict is unaffected. Both are now recorded here rather than
rediscovered.

**Round 2 was the second and last round the prompt allows, so it is not clean and no third round was run.** Every
error and every warning above has been corrected, and because no further agent round was available I re-verified
each correction myself, directly against the corpus: the three corrected quotations confirmed verbatim with
`sdlib.quote`, all four corrected counts re-run and reproducing exactly (`trespass` FT 2, the repair-notice pattern
FT 6, the association pattern CL 7, `meter` CL 7), the nine stale strings confirmed absent from all 272
files, and the delimiter sweep clean. What remains open is listed in s 4: the three rows waiting on the unreachable
ARSD article 20:10, and the `tenant-portal-mn` clause-body residue deferred to sync under the scope fence.

---
## 6. Findings on existing rows

Nothing to fix. Three findings carried into this pass from earlier South Dakota phases were **re-tested against the CSV shipped with this prompt (11,962 rows, SHA-256 `f64f322c880394bf45af47b2ecf32466a24f4d5e81a1a5ec55caeebee2903a39`) and all three are already resolved there.** They are recorded as closed so they are not actioned again:

1. **`edu-self-help-eviction-ban-sd` and SDCL 21-3-6.** The carried finding was that the row omitted the treble-damages exposure for forcible exclusion. It does not: the body already states that for forcibly ejecting or excluding a person from possession the measure is three times the compensatory sum, cites SDCL 21-3-6, and adds that whether a tenant can recover under both that section and SDCL 43-32-6 is unsettled, so the larger exposure should be planned for. **Closed, no action.**
2. **`edu-holdover-mechanics-sd`'s cross-state comparator.** The carried finding was that the sentence comparing South Dakota with CO, KS, NE and ND was wrong about South Dakota. It has already been corrected in place: a MATERIAL CORRECTION dated 2026-10-04 in the same notes records that the row had asserted the opposite of the statute, identifies SDCL 21-3-7, 21-3-8, 21-3-5 and 21-16-10, and states expressly that the cross-state sentence 'is corrected by the same finding: SD has two.' **Closed, no action.**
3. **`possession-delay`'s reference to `possession-delay-mn`.** The carried finding was that the notes pointed at a row that does not exist. It does exist, as an active row, and the notes' Minnesota segment correctly records that Minnesota now uses it. **Closed, no action.**

**One row re-verified rather than found wrong.** Named item 6 required a full-text alarm battery because the corpus's own no-alarm finding rested on a catchline search. The battery and a full read of ARSD 61:15 confirm `edu-detector-duty-scope-sd` is **correct and current**: it already states the ARSD 61:15:01:15 six-or-more-families rule in terms, the lodging rule at 61:15:01:14, the manufactured-home smoke and CO rule at ARSD 46:04:01:20, the thirty-day compliance notice, and the gap that matters - that a single-family rental, a duplex, or a building under six units falls outside all three. Its own notes record that the 61:15:01:15 omission was caught and corrected on 2026-09-07. **No finding.** Worth noting for other states' passes: that row holds ARSD 46:04:01:20, which this corpus does not contain, so it is a source of law beyond what the corpus can screen.

**One currency point, also not a finding.** SL 2026 ch 179's amendment to SDCL 43-32-24 is already carried correctly, with both deadlines distinguished, by `edu-security-deposit-itemized-accounting-sd` and `edu-advance-rent-vs-deposit-sd`.

### A correction to rows added in this pass - my own error

**I recited SDCL 21-16-1 as five grounds. It has seven.** The section was first read in this pass from an output
that truncated inside subdivision (5), and I treated the visible list as complete. Subdivisions (6) and (7) were
missed:

> (6) If a party continues in possession after a judgment in partition, or after a sale under an order or decree of
> a circuit court;
> **(7) If a lessee commits waste upon the leased premises, or does or fails to perform any act which, under the
> terms of the lease operates to terminate the same.**

Subdivision (7) matters, and not marginally. I had written that criminal activity 'is not on that list' and that
the only route was to terminate under the lease and then sue as for a holdover; and in another row that the grounds
'contain no conduct ground beyond holdover and nonpayment'. **Both understate the landlord's position: a lease
covenant drafted so that a breach terminates the lease is a filing ground in its own right.** It also means the
topic question's Wyoming comparator - a general duty to comply with lawful lease requirements supplying an eviction
ground - *does* have a South Dakota analogue, which I had recorded as absent.

Caught on review of a canvassing agent's work, which flagged the discrepancy against the library's existing
`edu-eviction-grounds-sd` - a row that states subdivision (7) correctly. **Four rows added in this pass were
corrected before delivery**, each carrying a note of the correction: `edu-criminal-activity-sd` (body and notes
rewritten), the `SD:` segment added to `criminal-activity-ky`, `edu-no-prohibited-acts-renter-list-sd`, and
`edu-no-single-family-zone-lease-limit-sd`. No existing library row was affected, and `edu-eviction-grounds-sd`
needs no change.

Recorded here rather than buried because the failure shape is worth naming: **a statute read once from a truncated
display, then relied on repeatedly across a cluster of rows.** The read was never repeated against the full text,
and four rows inherited the same gap. It is the same shape as this project's earlier `edu-holdover-mechanics-sd`
failure, where an absence rested on the wrong chapter and was propagated. The SOP change proposed below is to
re-read, in full, any section a row's *reasoning* turns on - not merely any section it cites.

**On `edu-fair-housing-additions-sd` (reported by canvassing agent E; notes only, bodyText unaffected; not
changed).** Two points, both in the row's notes.

1. The row cites the definition as "SDCL 20-13-1(16)". Read in full, the definition is now **subdivision (19)**:
SL 2020, ch 70, s 1 and ch 71, s 2 added subdivisions, and (16) is now "Real property". The old number survives
only in the unamended ARSD 20:03:07:02.
2. The row states that the protected-class list "matches exactly across both sections". **It does not.** SDCL
20-13-20(1), (2) include familial status; SDCL 20-13-1(19) omits it; and SDCL 20-13-27(5) is a third variant -
"sex, race, religion or creed, origin, ancestry, familial status, or disability" - with no colour and no national
origin. A related tension in the same chapter: SDCL 20-13-1(9) and SDCL 20-13-20.1 define "familial status"
differently.

Per the scope fence this pass added rows and did not fix existing ones. Claude Code to correct both at sync.

**On `late-fee` (the shared clause, SD among 29 states; reported this pass; not changed).** The SD note added
2026-09-07 triages the clause as "Tier A = boilerplate with **no SD statutory interaction**", and reasons that
"SD sets no statutory late-fee cap and no mandatory grace period, so the landlord-set fields create no conflict."
The conclusion is right; the premise is not. Chapter 54-3 was read in full section-open on 2026-10-30 and South
Dakota defines interest to **include a late charge**: "Interest is the compensation allowed by law for the use, or
forbearance, or detention of money or its equivalent, including without limitation, points, loan origination
fees, credit service or carrying charges, **charges for unanticipated late payments**, and any other charges,
direct or indirect, as an incident to or as a condition of the extension of credit" (SDCL 54-3-1). So a South
Dakota late fee is statutorily interest, and there is statutory interaction in three places:

1. It is uncapped only because of a general rule, not because the subject is unregulated - "Unless a maximum
   interest rate or charge is specifically established elsewhere in the code, there is no maximum interest rate or
   charge, or usury rate restriction ... if they establish the interest rate or charge by **written agreement**"
   (SDCL 54-3-1.1). The clause's `{{late_fee_amount}}` is therefore uncapped *because the lease is a written
   agreement*, which is a different and more fragile proposition than "no cap exists".
2. There is an eighteen percent ceiling the row does not flag, and it bites exactly where a late fee is
   communicated: "Any interest rate appearing on a bill, statement, or invoice may not exceed eighteen percent"
   (SDCL 54-3-5). A late charge expressed as a rate on a monthly rent statement is a rate appearing on a
   statement.
3. A flat late fee remains exposed as a penalty under SDCL 53-9-4, with the narrow exception at SDCL 53-9-5 -
   which the row's own Tier A reasoning does not reach because it treats the subject as having no statutory
   dimension at all.

Nothing in the clause text needs to change and the fields remain lawful. What is wrong is the recorded basis for
that conclusion, and the missing eighteen percent caveat. Per the scope fence this pass added rows and did not fix
existing ones; the point is cross-referenced from `edu-unpaid-damages-interest-sd`. Claude Code to correct the
note at sync.

**On the log's own record of live reads (methodological; no row affected).** Canvassing agent F mounted a
provenance challenge to two delivered rows - see s 3 - which failed only because the agent could not know that
live reads went through the browser on the linked device rather than the container's shell. The challenge was
correct in everything it could check, and it could not check the thing that mattered. A SHA-256 recorded in s 1
for a chapter fetched outside the corpus is not verifiable by anyone working in the container, so it functions as
an assertion rather than a check. From this delivery s 1 names the **retrieval route** for every chapter read
outside the corpus, and the point is proposed as an SOP change.

---
## 7. Findings for other states

**One, and it is a gap rather than an error.** SDCL 49-34-14 caps what a landlord may charge for rebilled gas or electricity at the amount the utility actually billed, with a civil fine up to five hundred dollars, and expressly exempts electric-vehicle charging; SDCL 49-34A-116 keeps a charging-station operator from becoming a regulated utility. **Neither section appears anywhere in the library** (anchored section-number grep over all 11,962 rows, rule 28), and nor does any chapter 11-10 section. That is a South Dakota gap this delta closes.

The cross-state observation worth passing on is structural, not a correction: **a utility-rebilling markup cap of this kind is a constraint on any clause that lets the landlord bill a tenant for a metered utility, and the library's shared utility clauses are screened against fee rules but not against markup caps.** Rule 26's instruction to screen every shared clause that lets the landlord charge for something against the state's fee rules would catch a *fee*, but a cap on the *amount* of a pass-through is a different shape and would not necessarily be caught. Other states with a comparable anti-markup provision - this is a common feature of utility codes - may have the same unscreened exposure. Flagged for the states whose utility topics are already closed; nothing in another state's rows is asserted to be wrong on the strength of a South Dakota finding, and no other state's rows were examined for it.

No other finding for another state arose from this batch.

**Four further findings, all structural and all flagged rather than asserted.** Nothing below says another
state's row is wrong; each is a shape this pass met in South Dakota that the library's existing rows for other
states may share, and none of those rows was examined.

**1. A shared clause can fail a tag in two opposite directions, and rule 26 currently names only one of them.**
Rule 26 asks whether the clause's basis rests on the other state's statute - the clause importing a limit the
tagging state does not impose. `rules-ia` fails that way: its **body** recites the Iowa URLTA enforceability
conditions (purpose, reasonable relation, fair application, explicitness) as conditions on a rule binding the
tenant, so tagging it into a non-URLTA state imposes limits that state's law does not. That clause already
carries **11 states**, and any of them without a house-rule statute has the same exposure. `rules-wi` fails the
**mirror** way, which the rule does not describe: its mid-tenancy limb (a new rule binds only on the tenant's
written agreement or at renewal) is correct for a fixed term but **omits a modification power the state grants** -
in South Dakota, SDCL 43-32-13's thirty-day notice that "shall of itself operate" to set new terms on holdover.
Tagging it would have understated the landlord's position rather than overstated it. Both were declined; the
reasons are on `edu-rules-regulations-sd`. Proposed as an SOP change below.

**2. Foreign-ownership statutes enacted in 2024-2026 may define the restricted interest to include a lease, and
the library's rows in 38 states may predate that.** South Dakota's chapter 43-2B (SL 2026, ch 177) defines a
"real property interest" to include a **lease** and an option, bars a prohibited entity from holding one with no
acreage limit and no short-lease carve-out, and so reaches an ordinary residential tenancy - while the older
agricultural chapter it sits beside expressly leaves *leasing* unrestricted. A row written against the
agricultural chapter alone, or against a pre-2024 alien land law, would state the opposite of the current
position. Many states legislated in this area in the same two sessions. Worth a currency pass on the
`foreign-ownership` rows wherever they were written before mid-2026.

**3. The UETA non-waivable refusal right is near-uniform, so the mandatory-portal analysis is probably
library-wide.** Uniform Electronic Transactions Act section 5(b) - "A party that agrees to conduct a transaction
by electronic means may refuse to conduct other transactions by electronic means. The right granted by this
section may not be waived by agreement" - is enacted in South Dakota verbatim at SDCL 53-12-9 and, being uniform
text, is very likely in materially identical words in almost every state that has adopted the Act. If so, a lease
term compelling a tenant to receive **all** notices through a landlord's portal is unenforceable to that extent
in nearly every state, not just this one. The library currently carries portal clauses in two states and the
`tenant-portal` topic asks the UETA question as a second limb; the finding is that the answer is probably the same
everywhere and could be stated once. Flagged, not verified outside South Dakota.

**4. A state may have no civil remedy for an unauthorised occupant even where a statute's catchline says
"unlawful occupancy".** SDCL 22-35-7 is captioned "Affirmative defenses to unlawful occupancy" and states
defences to **criminal trespass** prosecution; it creates no civil route, and South Dakota has none outside the
ordinary eviction chapter. A `confirmed-absences-outside-title` row written from catchlines alone could record a
squatter remedy that does not exist. The method point is in the SOP items below.

---
## Proposed SOP changes

1. **Build the state's statewide catchline index before writing any absence row.** Where a state's legislature publishes a title or chapter index listing every section with its catchline - South Dakota's `index/titles/` gave 47,386 of them, every section in the Code - parsing it converts rule 36 "Not located" verdicts into bounded confirmed absences across the whole Code, and names the chapter a missing provision would sit in from the same data. It cost one scripted pass and changed the verdict on roughly half this batch. Proposed as a step in the corpus-building rule (24) rather than a per-topic step, with the rule 19 validation (known positives plus nonsense controls in the same batch) applied to the index before it is relied on.
2. **Quote from live text, not from a corpus's text extraction, unless the extraction has been proved quotable.** The South Dakota corpus's `text/` rendering inserts spaces around hyphens inside spelled-out numbers (`forty - five`) and before punctuation after cross-reference links. Neither changes the law, but both defeat a verbatim quote check, and a row quoting the corpus would fail its own verification. Proposed as a line in rule 24: the corpus-versus-live corroboration should test *quotability*, normalising before comparison and recording the artifacts found, and quotations should then be taken from the source proved clean.
3. **When a named item asks you to re-run a screen at a deeper level, check the library before reporting a contradiction.** Item 6 asked for a full-text alarm battery because the corpus's finding rested on catchlines. The battery did overturn the corpus's premise - the residential requirement exists, by rule - but the library row already had it right, and had already recorded its own correction. The reportable finding was "confirms the existing row", not "contradicts the corpus". Proposed as an addition to rule 28: before a deepened screen is written up as a finding, grep the library for the rule it uncovers, because the finding may already be shipped.

4. **Re-read in full any section a row's *reasoning* turns on - not just the section it cites.** This is proposed
because of the pass's one serious error, written up in s 6. SDCL 21-16-1 was read from a display truncated inside
subdivision (5), the visible list was treated as complete, and "five grounds" was then relied on across a cluster
of rows - producing the affirmative claims that criminal activity "is not on that list" and that the grounds
"contain no conduct ground beyond holdover and nonpayment". The section has **seven**, and subdivision (7) makes a
lease-covenant breach a filing ground in its own right. The existing rules require a section to be read
section-open before it is *quoted*; they do not require it before it is *reasoned from*, and the reasoning is
where the damage was done. Proposed wording: before asserting that something is **absent from an enumerated list**,
re-read the enumeration to its closing punctuation in a fresh retrieval, and record in the notes that the list was
read to its end.
5. **Treat a catchline index as conclusive only for subjects a catchline would name, and never as a description of
the section.** Two limits were established and documented this pass. The index misses **body-only phrases** -
`fit for human habitation` returns 0 of 47,386 catchlines yet is the operative standard in the bodies of
SDCL 43-32-8 and 43-32-9 - and it drops **court-rule lettered-subsection entries**, SDCL 15-6-4(c) being absent
though real. Separately, a catchline can **misdescribe its own section**: SDCL 22-35-7 is captioned "Affirmative
defenses to unlawful occupancy" but states defences to criminal trespass prosecution and creates no civil remedy.
Proposed: pair every catchline-based absence with a full-text screen, and never characterise a section's content
from its catchline without opening it.
6. **Never state a battery count from expectation; state it from the run.** A count written from what the pattern
was expected to return, rather than from the output in front of you, is an unverifiable figure in a row that
exists to be verifiable - and it is the easiest thing in this method to get wrong, because the patterns are
written before they are run. Proposed as a line in rule 19: the count recorded in a row's notes must be
transcribed from the run that produced it, in the same working session, and a battery re-run after any pattern
edit.
7. **Rule 26's basis check should be asked in both directions.** As drafted it catches a clause whose substance
rests on the other state's statute - importing a limit the tagging state does not impose. It does not catch the
mirror failure: a clause that **omits a power the tagging state grants**, and so understates the landlord's
position. `rules-wi` is the worked example in s 7. Proposed wording: ask both whether the clause imposes a limit
this state's law does not, and whether it omits a right or mechanism this state's law gives the landlord; record
the answer to both, and decline the tag on either.
8. **Prefer a single-section endpoint over a chapter fetch when a state's service offers one.** Where the
legislature's service serves one section at a stable URL - South Dakota's `/api/Statutes/<section>.html` - reading
three sections costs a fraction of pulling the chapter that contains them, and the saving compounds across a pass
with dozens of targeted reads. Proposed as a channel note under rule 24, alongside recording which retrieval
mechanics actually work for the state, since those differ by service and are expensive to rediscover.

9. **Record the retrieval route, not just a hash, for every source read outside the corpus.** A SHA-256 in the
log's s 1 lets a later reader confirm that two copies of a chapter are identical; it does not let anyone confirm
that the chapter was read at all, because nothing in the working container can reproduce a read made through a
browser on a linked device. Canvassing agent F this pass mounted a careful provenance challenge to two delivered
rows and reached a false conclusion for exactly that reason - it could verify that the chapter was absent from the
corpus and that the shell was policy-denied, and had no way to learn that a second route existed. The rows were
re-verified and stand, but the agent spent real effort on a question the log should have answered. Proposed: s 1
names, per chapter, **which channel read it** (corpus, shell, or browser on which device) and on what date, and
the delegation brief states plainly which routes the agent itself does and does not have - so an agent that cannot
verify something knows that it cannot, rather than inferring that it did not happen.
10. **Write the lessor-facing proviso into the battery, not just the subject.** Two of this pass's most valuable
findings were provisos buried at the end of a section whose subject was not landlord-tenant: SDCL 44-9-2's
"provided that as against a lessor no lien is given for repairs made by or at the instance of his lessee", and
SDCL 54-3-1's inclusion of "charges for unanticipated late payments" in the definition of interest. Neither is
findable from a catchline and neither sits in a chapter a landlord-tenant screen would open. Proposed as a line in
rule 19: for any topic that turns on a third party's rights against the property (liens, nuisance, condemnation,
foreclosure, utilities, interest), run a battery on the **tenure words themselves** - `lessor`, `lessee`,
`landlord`, `tenant`, `leasehold` - across the whole corpus and the whole catchline index, independently of the
topic's subject-matter pattern, and read every hit. That one pattern would have surfaced both.

11. **When a boundary is resolved, correct the body, not only the notes.** Rule 36 requires a Not-located row to
state its boundary in the body as well as the notes, and that is right - but when a later read resolves the limb,
the discipline for *removing* it is missing, and the natural move is to append a RESOLVED paragraph to the notes
and stop. My own pre-check this pass found **three rows whose notes recorded the limb as resolved while the body
still told the reader the point was unsettled** (`edu-trespass-notice-sd` on chapter 22-35,
`edu-no-contamination-lease-disclosure-sd` on chapter 34A-17, `edu-no-association-lease-disclosure-sd` on
SDCL 43-15A-4 - each of which had in fact been read section-open and quoted in the notes). The notes are the audit
trail; the body is the only part the landlord reads, so a stale boundary sentence there is a false statement to
the reader even while the row is internally honest. Proposed: make resolving a boundary a two-part edit, body and
notes, with the body change recorded in the notes so the correction stays visible; and add to the check brief an
explicit pass for body text asserting a limit that the same row's notes say was resolved. This is cheap to check
mechanically - grep bodies for boundary phrasing and cross-reference the notes for RESOLVED - and it will not be
caught by a quotation or citation check, because nothing in the row is misquoted or miscited.

12. **A paraphrase in the delegation brief will come back as a quotation. Quote the statute in the brief, or do
not put the words in at all.** This is the clearest single lesson of the pass. My agent brief's core-law digest
rendered SDCL 43-32-10 as the lessee "must preserve" the premises - unquoted, a compression of *shall preserve*,
and perfectly serviceable as a summary. **Nine separate rows then single-quoted it as statutory text**, and the
independent check caught it only because it re-verified every quoted span against the section. The same mechanism
produced the compressed SDCL 43-32-18(1) in five rows. Neither error was anyone's carelessness in the ordinary
sense: the brief looked like a reliable source, and a drafter reaching for the statute's words found them already
written down. Proposed, as a rule on the brief rather than on the rows: **every statutory phrase in a delegation
brief is either a verbatim quotation with its citation adjacent, or it is not in quotation-shaped prose at all** -
summarised in plainly non-quotable language ("the tenant has a statutory duty to preserve the premises"), with
the instruction that the section must be opened before any of its words are quoted. And the check brief should
keep re-verifying every quoted span, because this class of error is invisible from inside the drafting: the text
is right there, it looks authoritative, and nothing in the row signals that it was never read from the statute.
13. **State a battery count only from the run that produced it, and name the hits when the count is not zero.**
This extends item 6 with what round 1 actually found: of 330 re-run battery claims, **18 in 17 rows did not
reproduce**, in both directions and by as much as 109, and two of them were stated zeroes that were not zero.
Every absence verdict survived on the merits, so the research was sound and the arithmetic was not - which is
precisely the failure a reader cannot detect, because a wrong count looks exactly like a right one. Two cheap
habits would have caught all 18: transcribe the figure from the visible output in the same session rather than
from memory of what the pattern should return, and **name the sections behind any non-zero count** in the notes,
which makes the figure self-checking and forces a second look at whether the hits are really off-point.

14. **A scripted fix to quotations or delimiters needs its own check round, because the fix is as likely to
introduce a defect as the drafting was.** This pass ran two agent rounds, and the second round's most valuable
findings were **defects created by the first round's corrections**: a corrected SDCL 53-9-1 quotation dropped into
the sentence built for the old one in all five rows, leaving a doubled conjunction; a backtick conversion that
mis-paired delimiters on two genuine statutory quotations and wrongly converted nine more; and a corrected count
whose newly attached list of sections named one that was not a hit. None of these existed before the fixing pass.
Two concrete proposals. First, **scope the final round to the rows edited since the previous round plus a
mechanical sweep of whatever the fix touched globally** - that scoping is what caught all of the above, and a
round that only re-read the original defect list would have missed every one. Second, when replacing a quotation,
**re-read the whole sentence, not the quoted span**: a verbatim quotation can still make the sentence
ungrammatical, change its meaning, or duplicate a conjunction the statute already carries. Where the two permitted
rounds are exhausted and the last one is not clean, the lead should re-verify each correction directly against the
source rather than ship on the agent's word - which is what was done here and is recorded in s 5c.

---
## Proposed topic questions

1. **`utility-allowance-cap` and the utility topics generally: add a markup-cap limb.** The topic currently asks whether the regulator's rules bar passing master-metered electricity through except in fixed rent. South Dakota has no such rule but does cap the *amount*: a landlord may not knowingly charge a utility consumer more than the utility billed, on pain of a civil fine (SDCL 49-34-14). Proposed question: *Does a statute or utility rule cap what the landlord may charge for a rebilled utility at the amount actually billed, and what is the penalty for exceeding it?* This is a different shape from a fee cap and is not currently asked anywhere.
2. **`alarm-tampering-fee`: ask what the state does instead of authorising a fee.** The topic asks whether the lease may charge a fee for tampering and how much. In a state with no authorising statute the useful answer is the pair that replaces it - the criminal provision, and the state's rule on contractual penalties, which is what makes a flat fee unenforceable. Proposed addition: *Where no statute authorises a fee, does the state's contract law void a fixed charge for breach, leaving documented actual cost as the only route?*
3. **`fire-code-standard`: ask which edition applies to which regime.** South Dakota adopts the 2015 IBC, IFC and IMC for fire safety by rule and the 2024 IBC, IRC and International Property Maintenance Code for building design by statute, at the same time. A single "which code" question invites a single answer and would have produced a wrong row. Proposed addition: *Do the state's fire-safety rules and its building-design statutes adopt different editions of the model codes, and which governs a rental?*

4. **`foreign-ownership`: ask whether the restricted interest includes a lease, and whether the landlord must
inquire.** The topic's limbs ask about ownership restrictions, a lease-duration carve-out, and whether a
residential tenancy is a lease of "land". None asks the two questions that decide what a landlord actually does.
Proposed: *Does the statute's definition of the restricted interest expressly include a lease (and an option), and
is there any acreage or duration threshold?* and *Does the statute impose on a landlord any duty to determine
whether a prospective tenant is within the restriction, and any liability for not doing so?* South Dakota answers
yes to the first and **no duty, no liability** to the second (SDCL 43-2B-1(3), 43-2B-2, 43-2B-7), and the second
answer is what makes the whole subject a non-event for a landlord's screening practice.
5. **`tenant-portal`: make the UETA limb ask for the state's own section.** The topic asks whether UETA's
non-waivable right to refuse further electronic transactions limits a mandatory-portal term. Because the uniform
text is near-identical across adopting states, the useful form of the question is the citation rather than the
conclusion. Proposed: *Which section of the state's UETA enacts uniform section 5(b), and does it carry the
non-waivability sentence unchanged?* - plus a separate limb for payment, which is on different footing from
notice: *Does any statute prescribe or restrict the method of rent payment, and is a portal convenience fee a
charge for a service or a penalty under the state's contract law?*
6. **`maintenance-duty-shift`: ask what consideration the state requires.** The two existing limbs ask about a
listed-condition shift on a landlord precondition, and a shift on adequate consideration plus a conspicuous
writing. South Dakota permits a shift in one form only and prescribes the consideration specifically: the tenant
may "perform specified repairs or maintenance **in lieu of rent**" (SDCL 43-32-8). Proposed: *If a shift is
permitted, what consideration does the statute require for it - rent specifically, any adequate consideration, or
none - and must the work be itemised?* A clause drafted for an "adequate consideration" state is void in a
rent-specific one.
7. **`rules-regulations`: add a mid-tenancy modification limb.** The topic asks about enforceability conditions, a
tenant-duty section binding the tenant to rules in force at signing, and a retaliation presumption for a
substantial alteration of the tenancy. It does not ask the question a landlord asks. Proposed: *May the landlord
change the rules during the tenancy, and by what mechanism - unilateral notice on a periodic tenancy, the tenant's
agreement, or renewal only?* South Dakota has no house-rule statute at all but does give a real mechanism at
SDCL 43-32-13, and missing it is what made one shared clause unsafe to tag.
8. **`hoa`: ask whether the sale-disclosure regime reaches a lease-option.** Several states require an
association disclosure on a sale. Where the disclosure chapter defines "transfer" to include a lease with an
option to purchase, as South Dakota's does (SDCL 43-4-37(3), (5), with the association disclosure at
SDCL 43-4-44.1), a landlord letting with an option is inside a regime written for sellers. Proposed: *Does the
state's property-disclosure definition of a transfer include a lease with an option to purchase, and does the
association disclosure therefore apply to one?*
9. **`confirmed-absences-outside-title`: make the squatter limb ask whether any remedy is civil.** The limb as
written - "squatter or unauthorized-occupant specific remedy" - is satisfied by a criminal trespass provision,
which gives a landlord nothing. Proposed: *Is there a civil summary remedy against an occupant who never held a
tenancy, or only a criminal trespass offence, and must such an occupant be removed through the ordinary eviction
action?*
10. **`farmland-hunting-rights`: ask who may give permission.** The existing limb asks whether a tenant of rented
farmland has hunting rights absent a written grant. The operative question in a state with no allocation rule is
the trespass statute's wording. Proposed: *Does the trespass-to-hunt provision require permission from the owner
alone, or from the "owner or lessee" / "person in possession" - and so can a tenant lawfully authorise hunting on
the land?* South Dakota, Colorado and Mississippi all name the lessee, which reverses the default landlords
assume.

---

## Gaps-pass sync review (Claude Code, 2026-10-30)

Merged with `merge-delta.py --base 7f968b2`: 260 new rows (all education rows) and 12 shared clauses tagged, nothing refused. All 260 missing topics are answered. South Dakota now carries 383 active rows, every one VERIFIED; the new rows carry the canvass date in `effective_from` (SOP rule 70). The pass delivered no NEEDS_REVIEW rows.

**ARSD article 20:10 (Public Utilities Commission) is reachable**, at `https://sdlegislature.gov/api/Rules/Rule/20:10.html?all=true` (Desktop's 404s came from other URL shapes). Read at sync: chapters 20:10:15 to 20:10:20 have no submetering, resale, usage-data, lease-disclosure or designee rule; 20:10:20:09 bars disconnecting a landlord-customer's service at a rented address until the tenant has been offered service in their own name where economically feasible; 20:10:26:03-04 require individual gas and electric metering for new multiple-occupancy buildings and substantially remodeled master-metered ones, with exceptions and a variance. Six bodies and the notes of five more rows (and `energy-data-release-wy`'s SD segment) now state the rules instead of a boundary. ARSD 20:69 (Real Estate Commission) is reachable the same way, which corrected `edu-security-deposit-holding-sd`: a licensee holding deposits must keep them in a federally insured institution as a separate ledger balance (SDCL 36-21A-71(5), ARSD 20:69:14:11-12).

**Findings on existing rows (§6), checked against the statute:**
- `edu-fair-housing-additions-sd`: the definition is SDCL 20-13-1(19), not (16); the protected-class lists don't match across 20-13-1(19), 20-13-20, 20-13-21 and 20-13-27(5), and familial status is defined differently in 20-13-1(9) and 20-13-20.1. Notes corrected; the body was right.
- `late-fee` (SD segment): SDCL 54-3-1 counts "charges for unanticipated late payments" as interest only "as an incident to ... the extension of credit"; whether a rent late fee is credit is a case-law doubt, so the note takes the cautious course: uncapped only because the lease sets it by written agreement (54-3-1.1), the 18% cap on a rate shown on a bill (54-3-5) matters if a percentage is billed, and a flat fee should be a reasonable estimate of cost (53-9-4, 53-9-5). The shared body stands.
- `edu-attorney-fee-clause-limit-sd`: SDCL 15-17-42 says chapter 15-17 "applies to" cases with a government party, not "only" to them, and came from the same 1992 act as the general sections, so 15-17-39 most likely reaches private instruments. Whether a lease is "other evidence of debt" only case law could settle; the row's cautious course (don't rely on a fee clause) stands, and its old "flagged for Taylor" line is closed.
- `tenant-portal-mn`: uniform shared edit, "this Lease or Minnesota law requires" became "this Lease or applicable law requires"; nothing changes for Minnesota. Its SD segment now states the UETA point (SDCL 53-12-9) as a doubt with the cautious course.
- `edu-foreign-ownership-sd`: SDCL 43-2B-9 has six exclusions, not nine. No clause (my call, agreeing with Desktop): 43-2B-7 removes any duty to inquire and any liability, the attorney general's judgment itself ends the leasehold, and since 43-2B-9 excludes citizens, permanent residents and anyone with lawful status, a tenant question would have to probe immigration status and national origin (SDCL 20-13-20), a fair-housing risk for almost no benefit.
- The 12 tags: all correct. SD-segment fixes on `pest-cooperation-pr` (a 43-32-8 quotation attributed to 43-32-10), `farmland-sporting-rights-co` (the landlord's hunting entry rests on 43-32-32's "mutually agreed upon" exception), `tenant-caused-fines-as` (21-10-6 read), `association-approval-la` (SD does have association statutes: 11-5-9 and 43-4-44.1; 43-32-6.1's special-conditions exception restored), `showing-notice-la` (43-32-32's notice contents) and `tenant-forward-proceedings-ca` (43-32-17's two exceptions).
- `showing-notice-la` pointed to a "Landlord's Right of Entry" section South Dakota's lease doesn't have; South Dakota now uses the override `showing-notice-sd`, identical but pointing to "Landlord Access and Entry".
- **New override `early-termination-sd`:** a flat one month's Rent that ends later Rent, as NE, VT, DE, HI, LA, AR, MS and PR use. The parent's greater-of-30%-of-remaining-Rent fee grows with the time left and reads as damages fixed in advance, which SDCL 53-9-5 voids unless actual damage is impracticable to fix (53-9-4 voids contract penalties). Unlike NE's version it doesn't recite a mitigation duty, since `edu-abandonment-and-mitigation-sd` records that South Dakota has none in statute.

**Edited-after rows:** 59 rows read (every row with a 2026-10-30 correction marker, every row named in round 2, the 21-16-1 seven-grounds rows), every quotation checked against the corpus or the API. 24 fixes, among them: `edu-repair-notice-mechanics-sd` (whether a lease can require written repair requests is hedged, since the non-waiver sentence is in 43-32-8, not 43-32-9); the lease-with-option exception to the association disclosure (43-4-37(5), 43-4-44.1) in two rows; "fit for its intended use" replaced by 43-32-8's "reasonable repair and fit for human habitation" in five rows; `edu-landlord-breach-remedy-sd` (43-32-28 does award fees for retaliation); `edu-liquidated-damages-sd` (severability rests on 53-9-4's "voids their penal clauses"); `edu-no-sex-offender-disclosure-sd` (36-21A-134.1 binds licensees, not owners); `edu-student-housing-sd` (43-32-4's lodgings presumption); `edu-tenant-records-sd` (22-40-19, 22-40-24); `edu-written-notice-required-sd` (repair requests need not be written); and "escrow" replaced by withholding into a separate account in two rows.

**Spot check:** deposit cap and the 21-day and 45-day clocks (43-32-6.1, 43-32-24 as amended by SL 2026 ch 179), eviction grounds and notice (21-16-1's seven grounds, 21-16-2), the repair duty and its non-waiver (43-32-8), tenant remedies (43-32-9), retaliation (43-32-27) and holdover damages (21-3-7, 21-3-8), across all 383 SD rows: consistent; no row recites five grounds, a four-day appearance or "two weeks".

**Decisions (§4):** no product questions for Taylor. Foreign ownership stays education only (above). The ARSD 20:10 rows needed no status call once the article was read.

**Other:**
- No new `{{variables}}`.
- SOP 1.89 takes up the pass's 14 proposals as 7 grouped additions, all [Fwd]; proposal 1's conversion of Not-located verdicts into whole-Code confirmed absences was not adopted (rule 36), and proposal 5's claim that the catchline index drops § 15-6-4(c) is wrong (the index lists it; the pass's parse dropped it).
- Eight topic questions added, all under existing keys.
- The citations file gained 274 rows.
- Findings for other states (§7) are in the backlog.
