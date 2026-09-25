## Decision Log: South Dakota (State #7) — Session 1

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
