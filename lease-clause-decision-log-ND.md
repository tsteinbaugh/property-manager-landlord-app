## Decision Log: North Dakota (State #6) — Session 1

**Date:** 2026-08-24
**Status:** 🔄 In progress, substantial progress — 22 ND-tagged rows committed and VERIFIED. Full Chapter 47-16 text and the primary text of §32-03-29 both provided directly by Taylor this session, resolving all three originally-flagged legislative/weak-evidence items and correcting one real error (fire/casualty termination). **Not complete** — remaining items are all standard continuation work, none currently blocked. See §23 (punch list, mostly still accurate) and §29 (final resolution notes).
**Companion documents:** `decision-log-clause-library-verification.md` (CO), `decision-log-clause-library-verification-wyoming-addendum.md` (WY), `decision-log-clause-library-verification-kansas.md` (KS), `decision-log-clause-library-verification-nebraska.md` (NE), `decision-log-clause-library-verification-minnesota.md` (MN), `decision-log-clause-library-verification-session-architecture-review.md`, `steinoak-named-topic-checklist-updated.md` (does not yet include MN or ND findings).
**Handoff set used to start this session:** the six documents above, plus `steinoak_clauses_updated_20.csv` (323 rows, MN close-out version).

**Process note on this log itself:** this log was written up after the fact, reconstructed from conversation, rather than incrementally during the session as the project's own standing practice requires (and as was already called out as a problem once before, for a different state). That's a real process failure for this session specifically — not a policy change. Going forward for ND, entries get written as work happens, not batched at the end.

---

### 1. Primary source

**NDCC Chapter 47-16**, "Leasing of Real Property" — ndlegis.gov/cencode/t47c16.html, official legislative site. Sections 47-16-01 through 47-16-42 exist; 31–35 are repealed (were oil/gas lease cancellation provisions), 36–42 are farm/oil-gas/wind-lease mechanics outside residential scope.

### 2. Correction of a secondary-source claim, checked before it caused a problem

Multiple aggregator sites (LeaseLenses, DocDraft) describe a "Chapter 47-16.1, Uniform Residential Landlord and Tenant Act (URLTA), adopted by some cities." **This chapter does not exist.** ndlegis.gov's own chapter index goes 47-15.1 → 47-16 → 47-17 with no 47-16.1 anywhere. North Dakota has never adopted URLTA in any form, statewide or municipal. **Chapter 47-16 alone is North Dakota's entire residential landlord-tenant framework.** Logged proactively, before drafting anything based on the false premise — same category of error as Wyoming's Hemlane/LeaseWisely problem, caught this time before it produced bad clause language.

### 3. Statute sections read in full from primary source this session

- **§47-16-07.1** (security deposits) — full text confirmed via FindLaw, cross-checked against the actual 2025 bill text for HB 1272 (see §4). 1-month cap; 2-month exceptions for (a) landlord's optional incentive for a tenant with a felony conviction, (b) landlord's right to demand from a tenant with a prior judgment against them for violating a rental agreement — **not** "poor credit," a common secondary-source error (Innago). Separate pet deposit, capped at greater of $2,500 or 2 months' rent, excludes service/companion animals. Deposit must be held in a federally insured, interest-bearing account; interest owed at termination if occupancy ≥9 months. 30-day itemized return. Treble damages for wrongful withholding. Unclaimed deposits >1 year after termination go to state unclaimed-property reporting (§47-30.2-04). Deposit obligation transfers on sale of the property; prior owner not released until actual transfer.
- **§47-16-07.2** (move-in condition statement) — mandatory, signed by both parties at the time of entering the rental agreement, constitutes prima facie proof of condition.
- **§47-16-07.3** (entry) — no fixed notice-hours requirement; landlord must notify and get tenant consent (not unreasonably withheld) identifying a "time certain," unless impractical; consent presumed from non-objection; entry limited to reasonable hours/manner and enumerated purposes (inspection, repairs/services, showing to purchasers/insurers/mortgagees/agents/tenants/workers). No abuse of access to harass/intimidate.
- **§47-16-07.4** (fraudulent misrepresentation) — a lease entered into on fraudulent misrepresentation may be terminated by the induced party, who recovers the deposit plus accrued interest. Not yet turned into a clause or education row this session — flagged for a future pass.
- **§47-16-07.5 / 07.6** (service/assistance animal documentation) — landlord may require documentation only if disability/need isn't readily apparent or already known; documentation must come from a provider not operating solely to certify service/assistance animals (anti-letter-mill provision); false claims are a specific violation. Amended in the 2025 session (SB 2222) — current effect corroborated by 2026-dated secondary sources, not yet independently read against the enacted bill text.
- **§47-16-13.1 / 13.2** (landlord/tenant maintenance duties) — standard habitability list. ND-specific wrinkle: single-family landlord/tenant may agree in writing that tenant takes over waste-removal and heat/hot-water duties plus specified repairs, if entered in good faith; non-single-family requires a separate signed writing with independent consideration and can't cover the waste-removal duty.
- **§47-16-13.3** (unconscionability) — general court-applied doctrine, not an enumerated prohibited-clause list. Confirms ND has **no KS/NE-style statute banning specific clause types** (exculpation, confession-of-judgment, etc.) — only case-by-case unconscionability review.
- **§47-16-13.5 / 13.6 / 13.7** — mutual duty to mitigate for 13.1–13.6 claims; **attorney's fees/court costs recoverable** for 13.1–13.6 claims (mutuality unconfirmed — batch item, see §8); evicted tenant remains liable for rent through lease term, subject to mitigation, **with no holdover-damages multiplier** (unlike CO's double-rent, KS's 1.5×, NE's 3×) — a genuinely different architecture, flagged for the named-topic checklist.
- **§47-16-02** — resolved as a 10-year maximum lease-term limit (confirmed via ND Supreme Court case law, *Anderson v. Lyons*, *Heitkamp v. Kabella*), mainly applied to farm leases. Not a prohibited-provisions statute.
- **§47-16-30.1** (abandoned property) — full text confirmed via FindLaw. $2,500 value threshold; disposal without legal process 28+ days after actual/reasonable notice of vacatur; proceeds to landlord; storage/moving costs recoverable from deposit; post-eviction removal creates a landlord's lien (subordinate to prior perfected security interests). Statute doesn't address property valued above $2,500 in this section — open question.
- **§32-03-29** (self-help eviction ban, outside Chapter 47-16 — found via gap-discovery source #4) — prohibits utility shutoff, lock changes, forcible removal as eviction tactics; treble damages remedy. Confirmed via a quote-styled secondary source (landlord-tenant-law.com), **not yet independently read from primary text** — weaker evidence tier, flagged for follow-up.

### 4. The mandatory-inspection bill (HB 1272) — confirmed FAILED

Found full text of HB 1272 (69th Assembly, bill draft 25.0816.02000), which would have amended §47-16-07.1 and added a new mandatory move-in/move-out inspection section. **This bill failed in the House: 41 YEAS, 47 NAYS**, confirmed via ND's own bill index ("Failed Measure") and corroborated by two independent 2026-dated secondary sources stating ND still has no walk-through-inspection requirement. **Conclusion: the FindLaw text of §47-16-07.1 used in this session (§3 above) is current and correct — no correction needed.** Logged as a genuine due-diligence catch: the bill existed, was drafted, had committee hearings and testimony, and still didn't become law. Checking enactment status rather than assuming bill-draft language is current law is exactly the kind of check this project's methodology exists to force.

### 5. Still unresolved — three 2025 legislative items, explicitly not guessed at

- **§47-16-20.1**, "Fee for accepting check or other instrument of payment prohibited" — listed in vLex's current chapter index as a newly enacted, not-yet-fully-codified 2025 section. Full text not located despite multiple search attempts (including one costly, low-value fetch of ND's entire 2025 bill index, which is not worth repeating the same way). Its title suggests it may ban charging tenants a fee just for paying by check at all — a different, more restrictive rule than the general $40 NSF cap under Title 6 (§6-08-16(2)(a), general banking law, not landlord-tenant law — the two must not be conflated). **Blocked** — needs a bill number from Taylor or direct use of ndlegis.gov's interactive bill-tracking search.
- **§47-16-17.1 (domestic-abuse termination)** — vLex indexes a version "Effective 1/1/2026." Found an unrelated 2025 bill (SB-series, protection-order definitions across Chapter 14-07.1, effective 1/1/2026) that plausibly triggers a cross-reference update in 47-16-17.1 (which cites "chapter 14-07.7" in the FindLaw text currently on hand) without necessarily changing the tenant-facing mechanics (advance notice, rent liability, non-disclosure, anti-retaliation). **Not confirmed either way** — flagged, not guessed at.
- **§32-03-29** — see §3 above; needs a primary-source read to move off the weaker-evidence tier.

### 6. Whole-library generic-clause audit (partial — security deposit, maintenance-adjacent, pets, abandoned property, entry, self-help eviction)

- `rent-payment`, `late-fee`, `returned-payments` — extend to ND as-is, no conflicts found. No ND late-fee cap exists (same non-outcome as WY). `returned-payments` explicitly **not** given a dollar figure pending resolution of §47-16-20.1.
- `security-deposit-use` — **extended to ND** (states field updated), no override needed; ND's permitted-use list is compatible with the generic's existing self-limiting language.
- `tenant-maintenance` / `landlord-maintenance` (CO;WY;MN / CO) — **held**, not extended. ND has real statutory hooks (§47-16-13.1's single-family carve-out) but this is the CO;WY-only clause-scoping group flagged in the MN backlog as needing a full decision-log review before extending further. Not resolved this session.
- `Compliance & Prohibited Terms` group (6 rows) — expected to stay untagged for ND; no enumerated prohibited-clause statute exists (§47-16-13.3 confirmed).
- `edu-fee-shifting-co` — ND's §47-16-13.6 raises the same mutuality question already open for CO/WY/KS/NE/MN. Recommended as a single cross-state batch fix, not resolved per-state.

### 7. CSV changes this session

Starting file: `steinoak_clauses_updated_20.csv` (323 rows). Ending file: `steinoak_clauses_updated_22.csv` (333 rows, +10 net: 1 extended generic + 9 new rows). Duplicate-ID assertion run before and after each write; row/tag counts printed and verified at each step.

**Extended (1):**
- `security-deposit-use` — ND added to `states`.

**New rows (9), all `VERIFIED`, `effective_from`/`last_checked`: 2026-08-24:**
- `security-deposit-return-nd` (LEASE_CLAUSE, REQUIRED, supersedes `security-deposit-return`) — 30-day return, interest language, unclaimed-property mention. Notes flag the same deposit-interest-calculation product gap as Minnesota; recommend one shared fix.
- `edu-security-deposit-cap-nd` (LANDLORD_EDUCATION, CONSTRAINED)
- `edu-security-deposit-pet-cap-nd` (LANDLORD_EDUCATION, CONSTRAINED)
- `edu-security-deposit-interest-required-nd` (LANDLORD_EDUCATION, REQUIRED)
- `edu-security-deposit-successor-owner-nd` (LANDLORD_EDUCATION, RECOMMENDED)
- `edu-security-deposit-noncompliance-penalty-nd` (LANDLORD_EDUCATION, PROHIBITED)
- `assistance-animal-accommodation-nd` (LEASE_CLAUSE, REQUIRED, supersedes `assistance-animal-accommodation`)
- `abandoned-property-nd` (LEASE_CLAUSE, CONDITIONAL)
- `edu-self-help-eviction-ban-nd` (LANDLORD_EDUCATION, PROHIBITED) — weaker-evidence flag, see §3/§5
- `edu-entry-notice-content-nd` (LANDLORD_EDUCATION, CONSTRAINED)

ND-tagged row count after this session: **11**.

### 8. Named-topic canvass — pass 1 (partial, run against the consolidated CO/WY/KS/NE checklist; MN's own findings not yet folded into that checklist file, so not cross-checked here either — a gap in the base checklist itself, not this session)

**Present, confirmed this session:** security deposit interest requirement, move-in written inventory requirement, deposit amount cap, successor-owner-bound rule, general unconscionability doctrine, landlord entry notice period (no fixed number), abandoned-property disposal, service-animal-misrepresentation penalty (different architecture — sits inside the landlord-tenant title itself, §47-16-07.6, unlike WY/KS's separate criminal-code-chapter approach), DV/SA housing protections (§47-16-17.1, current-text status still pending re: §5), attorney-fee-shifting rule (mutuality unconfirmed).

**Confirmed absent:** confession-of-judgment and broad exculpation prohibitions as *enumerated statutory bans* (only case-by-case unconscionability applies) — same pattern as Wyoming's finding.

**Tentative, needs a dedicated confirming pass:** last-month's-rent deposit-application restriction (appears absent from the text read, not yet given a dedicated check the way WY/KS/NE absence-findings got).

**New architecture findings for the checklist (no CO/WY/KS/NE/MN analog found so far):** holdover damages with no multiplier (straight rent liability + mitigation duty only); farm/ag tenancy provisions kept inside the core chapter (§§47-16-03, -04) rather than a separate title; long-term-lease handling via a 10-year cap (§47-16-02) rather than an exclusion-from-Act-scope approach like NE's 5-year exclusion.

**Not Yet Checked (deliberately, not silently skipped):** radon/bed bug/mold disclosure, day-one landlord-identity disclosure, fair housing additions beyond federal, voucher-acceptance mandate, deposit installment-payment right, returned-check fee cap (blocked, §5), rental-fee transparency analog, late-rent acceptance waiver rule, landlord-identity-change notice, landlord lien/security-interest abolition, for-cause eviction protection, **retaliation prohibition**, tenant-death termination protection, alternate-housing/relocation right, fire/casualty termination right, failure-to-deliver-possession remedy, tenant noncompliance notice-and-cure mechanics, nonpayment pay-or-quit notice (found via secondary source only — 3-day, §47-32-01(4) — not yet primary-confirmed), fast-track violent-crime eviction ground, immigration-status inquiry prohibition, right to call police, EV charging access, smoke detector/CO alarm duty, mobile home park act, tenant screening fairness act, immigrant tenant protection act.

**Priority for next session:** retaliation prohibition (flagged as a notable gap — CO/KS/NE all have it and nothing has surfaced for ND yet, which is itself worth double-checking rather than assuming absence).

### 9. Gap-discovery sources — status

1. Statute-structure walk from primary source — substantially done (§3), pending §47-16-07.4, the retaliation check, and the rest of the Termination-section canvass.
2. Comparison against a real professional lease product — **not started**.
3. Personal landlord experience — not applicable (Taylor has no landlord experience outside CO, per established project scope).
4. Explicit search for landlord-relevant law outside the main landlord-tenant title — **partially done** (§32-03-29 self-help eviction found this way, still needs primary-source confirmation; smoke detector/CO alarm duties not yet checked despite NE's precedent that these often live outside the core chapter).

### 10. Items intentionally left open, not part of this session's scope

- Municipal ordinance complexity — never checked for ND, consistent with the standing out-of-scope boundary set in the CO log.
- Re-verification cadence — not set for ND.
- HB25-1249-style CO deposit-reform analog checks — not extended to ND (lower priority, same backlog category as WY/KS/NE/MN).
- The three deferred cross-state categories from the MN handoff (retroactive CO/WY/KS/NE checks on infirmity-termination and tenant-right-to-organize; the CO;WY-only clause-scoping group; the deposit-interest/payment-formatting/utility-disclosure product gaps) — not addressed this session, still open.

---

### 11. Retaliation prohibition — resolved, genuinely different architecture from CO/KS/NE

**No general habitability/rights-exercise retaliation statute exists inside Chapter 47-16** — a real gap compared to CO/KS/NE, which all protect a tenant from retaliation for any exercise of legal rights (repair requests, code complaints, etc.). This matches (and resolves) several conflicting secondary sources that called ND's retaliation law "unclear" or said no such law exists.

**What does exist, and is materially narrower:** **N.D.C.C. § 14-02.4-18** ("Retaliation Prohibited"), part of the Human Rights Act (Chapter 14-02.4), which covers employment, public accommodations, housing (via the Housing Discrimination Act, Chapter 14-02.5), government services, and credit. It prohibits retaliating against, threatening, or discriminating against someone who opposed an unlawful discriminatory practice or filed/participated in a discrimination complaint or proceeding. **This only protects a tenant who complained about discrimination — not one who complained about a broken furnace or a code violation.** Sourced from a legal-compliance publisher (J.J. Keller), not yet independently read against ndlegis.gov primary text — flagged for follow-up.

Also re-confirmed the narrower DV-specific anti-retaliation rule already noted in §47-16-17.1(10) (protects only the specific statutory right to terminate under the domestic-abuse provision).

**Committed:** `edu-limited-retaliation-protection-nd` (LANDLORD_EDUCATION, PROHIBITED). Flagged as a new architecture pattern (discrimination-complaint-only retaliation vs. general-rights-exercise retaliation) worth its own row in the consolidated named-topic checklist, not merged into the existing "Retaliation prohibition" row.

### 12. Nonpayment eviction notice — upgraded from secondary-source-only to primary-confirmed

**§47-32-01(4)** (FindLaw/LawServer primary text): eviction maintainable when a tenant "fails to pay rent for three days after the rent is due." **§47-32-02**: three days' written notice of intention to evict required before filing, covering the holdover/nonpayment ground among others (subsections 4, 5, 6, 8 per §47-32-02's text — subsections 1–5 independently read in full, 6–8 not yet independently confirmed verbatim despite secondary-source agreement that 6 or 8 covers illegal-activity/lease-violation grounds). No statutory cure right for nonpayment specifically — straight to eviction filing after the 3-day notice expires.

**Committed:** `edu-nonpayment-notice-nd` (LANDLORD_EDUCATION, REQUIRED).

### 13. Fire/casualty damage termination or rent-reduction right — likely confirmed absent, weaker evidence

No section in the §47-16 chapter list corresponds to a dedicated fire/casualty mechanism like KS's §58-2562 or NE's §76-1429. The only source describing such a right (ezlandlordforms) cites **no statute number at all** — a red flag consistent with this project's established pattern of catching unsourced confident claims (WY/Hemlane, KS's fabricated citation, NE's overstated penalties). Tentative conclusion: ND tenants facing fire/casualty damage likely rely on the general habitability/repair-or-vacate provisions (§47-16-13) rather than a dedicated mechanism — a real architectural gap relative to KS/NE, not just an unchecked item. **Not yet turned into a clause or education row** — flagged for confirmation before committing anything, given the weak sourcing.

### 14. CSV changes, updated total

Two more rows committed since §7: `edu-limited-retaliation-protection-nd` and `edu-nonpayment-notice-nd`. Current file at that point: `steinoak_clauses_updated_24.csv` (335 rows, 13 ND-tagged).

### 15. Tenant-death termination — PRESENT, first flip in this project (all prior states confirmed absent)

**§47-16-18**, full text confirmed via FindLaw: upon a residential tenant's death, either a surviving co-tenant or the tenant's estate may elect to terminate the lease, ending on the last day of the month following the month of death (unless the lease term would have expired sooner). Independently corroborated by the **North Dakota Apartment Association's own 2025 landlord-tenant handbook**, which describes the same liability window (month of death plus one additional month, then termination) without having been prompted by the statute text — strong convergent evidence from a professional-association source, a stronger tier than the aggregator-blog sourcing seen elsewhere this session.

CO, WY, KS, and NE all have this row **Confirmed Absent** on the consolidated checklist. **North Dakota is the first state in this project where it's Present** — a genuinely new finding, not a repeat pattern.

**Committed:** `termination-by-death-nd` (LEASE_CLAUSE, CONDITIONAL). Property removal after death uses the same mechanism as `abandoned-property-nd` (Letters Testamentary from a personal representative, or 28-day abandoned-property treatment if none is available) — not restated as separate clause text.

**Bonus resolution, closes an open question from §abandoned-property-nd:** Nolo, citing *Poppe v. Stockert*, 870 N.W.2d 187 (N.D. 2015), confirms that abandoned property valued **above** $2,500 requires the landlord to obtain a court order via "special execution" before selling or keeping it — the $2,500 threshold in §47-16-30.1 is the line between the 28-day self-help disposal process and a formal legal process, not silence about the higher-value case as originally flagged.

### 16. Failure-to-deliver-possession remedy — likely confirmed absent, weaker evidence, not committed

Same evidentiary shape as the fire/casualty finding (§13): no statute number cited by any source describing this scenario, no matching section title in the §47-16 chapter list. Tentative conclusion that ND tenants facing this situation rely on general contract/breach remedies rather than a dedicated mechanism like KS's 5-day-notice right or NE's 5-day/3x-damages version. **Not turned into a clause or education row** — flagged for confirmation, not committed, consistent with this session's practice of not drafting from weak sourcing.

### 17. CSV changes, current total

One more row committed since §14: `termination-by-death-nd`. Current file at that point: `steinoak_clauses_updated_25.csv` (336 rows, 14 ND-tagged).

### 18. Disclosures-section canvass — radon/bed bug/mold, fair housing additions, housing-voucher protection

**Radon, bed bug, and mold disclosure: confirmed absent**, well-sourced this time — Nolo explicitly states "North Dakota law requires only one disclosure" (the §47-16-07.2 move-in condition statement), independently corroborated by a dedicated mold-law reference site confirming no statewide mold disclosure statute exists. Multiple independent professional/legal sources agreeing, not just aggregator repetition of each other — a stronger evidence tier than some of this session's earlier weak-sourced items. Not turned into education rows (an absence doesn't need one), but recorded for the checklist.

**Fair housing protected classes beyond federal: PRESENT, statewide.** §14-02.5 (Housing Discrimination Act), full primary text confirmed via ndlegis.gov PDF: protected classes are race, color, religion, sex, disability, age, familial status, national origin, or status with respect to marriage or public assistance. Beyond the federal FHA baseline, **North Dakota adds age, marital status, and receipt of public assistance — statewide**, not municipal-only like Nebraska's Lincoln/Omaha additions. **Committed:** `edu-fair-housing-additions-nd` (LANDLORD_EDUCATION, PROHIBITED).

**Housing-voucher/subsidy acceptance mandate: PRESENT, with a citation correction caught mid-session.** Multiple independent landlord-industry sources initially cited **§14-02.5-07** for a "must accept Section 8" rule, but pulling the actual §14-02.5 section list from ndlegis.gov showed §14-02.5-07 is titled "Residential real estate-related transaction" — not a match. **Nolo independently confirmed the correct section is §14-02.5-02 ("Sale or rental")**, consistent with the primary protected-class text already confirmed. This is the same citation-slippage pattern flagged repeatedly across this project (WY/Hemlane, KS's fabricated cite) — caught here before it produced a wrongly-cited clause. Legal characterization is precise in the committed clause: a source-of-income-style discrimination prohibition (can't refuse an applicant because they receive public assistance, including vouchers), not a literal mandate to administratively participate in HUD's Section 8 program. **Committed:** `edu-housing-voucher-protection-nd` (LANDLORD_EDUCATION, PROHIBITED).

**Day-one landlord/manager identity disclosure:** still tentatively confirmed absent from earlier searching (§3/§7), no update this session.

### 19. CSV changes

Two more rows committed since §17: `edu-fair-housing-additions-nd`, `edu-housing-voucher-protection-nd`. File at that point: `steinoak_clauses_updated_27.csv` (338 rows, 16 ND-tagged).

### 20. Building & Fire Safety — smoke detector duty PRESENT, confirmed via primary source outside the core chapter

**§23-13-15** (Title 23, Health and Safety — outside the core landlord-tenant chapter), full text confirmed via FindLaw. All residential rental property must have a smoke detection system, installed/maintained per State Fire Marshal standards. Single-family rentals: tenant maintains/inspects. Multi-unit dwellings: landlord installs and ensures proper working order at the start of each tenancy, tenant maintains during occupancy. Landlord must provide a visual/strobe alarm on written request from a deaf tenant, unless the landlord's total rental property is a single building of 4 units or fewer. Willful failure to install is a class B misdemeanor.

**Found via gap-discovery source #4** — the same "check outside the core title" pattern that caught Nebraska's smoke detector/CO alarm duties in that state's session. Good validation that the checklist's own instruction (§ Instructions for the next state, point 3, in the consolidated checklist file) works as intended.

**Carbon monoxide alarms: different legal mechanism, not yet turned into a row.** Governed by the State Building Code / **N.D. Admin. Code 24.1-06-01-40** — an administrative regulation, not a Century Code statute. Required in units with fuel-burning appliances or attached garages. Worth its own education row in a future session, kept separate from the statutory smoke-detector clause.

**Committed:** `smoke-detector-duty-nd` (LEASE_CLAUSE, REQUIRED).

### 21. Landlord lien — confirmed absent for general residential leases

Found **§35-20-17** (Title 35, Liens), which creates a landlord's lien specifically for **mobile home lots** — not general residential leases. Extensive further searching found no source describing ND as ever having a general landlord's lien on ordinary tenant property, and no statute affirmatively abolishing one either (unlike KS's §58-2567 and NE's §76-1434, which do). Treated as **confirmed absent** via the same negative-evidence pattern used for some of Wyoming's earlier findings — no general concept exists to abolish. Not drafted as a row; recorded for the checklist only.

### 22. Final canvass items this session, and an honest completion assessment

**Immigration-status inquiry prohibition: confirmed absent.** No source found anywhere describing such a statute for ND, across multiple targeted searches — consistent with the WY/KS/NE pattern (all confirmed absent; only CO, CA, and IL have dedicated statutes per the consolidated checklist).

**EV charging access right: likely not applicable to Steinoak's lease product.** The ND statute behind this appears to be a condo/HOA common-interest-community law regulating associations and unit owners' rights to install chargers — not a residential landlord-tenant statute. At least one aggregator source appears to conflate condo-owner rights with rental-tenant rights. Not drafting a clause; flagging as likely a non-applicable finding rather than a real gap, pending a more careful read if it resurfaces.

**New finding, not yet investigated: Senate Bill 2238 (2025)**, eviction-record sealing — signed into law March 2025 per a secondary source (Innago). Allows tenants to petition to seal eviction records seven years after satisfying a nonpayment/damage eviction judgment (if no further eviction in that window), or immediately for DV-related evictions where the perpetrator has been convicted or is subject to a restraining order. Landlord-education material, not lease-clause material if it holds up — **not yet read from primary source**, not committed.

**Landlord-identity-change notice, deposit installment right, deposit-application restriction, day-one landlord-identity disclosure, late-rent acceptance waiver rule, rental-fee transparency analog, for-cause eviction protection, fast-track violent-crime eviction ground, mobile home park act, tenant/immigrant screening-fairness-act analogs, CO alarm regulatory row, §47-16-07.4 (fraudulent misrepresentation clause):** none of these were reached this session. Recorded as Not Yet Checked, not assumed.

**Honest completion assessment, given at the end of this session rather than glossed over:** North Dakota is not closeable purely through continued solo searching, for reasons distinct from "more items remain":

1. **The three blocked 2025 legislative items** (§47-16-20.1 check-fee prohibition, the §47-16-17.1 cross-reference/amendment status, a primary-source read of §32-03-29) genuinely need either a bill number from Taylor or working access to ndlegis.gov's interactive bill-tracking search — two attempts at guessing search queries for these have failed, and a third attempt (browsing the full 2025 bill index) was a costly, low-value dead end already logged in §5.
2. **Gap-discovery source #2** (comparison against a real professional North Dakota lease product) has not been started at all this session.
3. **The CO;WY-only clause-scoping review** (blocking `tenant-maintenance`/`landlord-maintenance` extension to ND) and **the fee-shifting-mutuality question** are both explicitly cross-state undertakings flagged in the MN handoff, not ND-specific work — they need to happen once, across all affected states, not be improvised for ND alone.
4. **A genuine second canvass pass** has not occurred — this session ran a partial first pass across several checklist sections, which is not equivalent to the methodology's two-pass requirement.
5. **SB 2238** is a brand-new, real finding that needs its own primary-source verification before it can be trusted, the same as anything else this project treats as unverified until checked.

Every prior state (CO, WY, KS, NE, MN) took multiple sessions to reach the project's own definition of "complete." Declaring ND complete at the end of this single (very long) session would not be accurate, and this log says so plainly rather than overstating progress.

### 23. Punch list for closing North Dakota, prioritized

**Needs something from Taylor specifically:**
- A bill number, or a turn at ndlegis.gov's own bill-tracking search, for §47-16-20.1's enacted text.
- Same for confirming whether §47-16-17.1's "chapter 14-07.7" cross-reference needs updating per the 2025 protection-order bill.
- A decision on whether to commit `edu-self-help-eviction-ban-nd` and `edu-limited-retaliation-protection-nd`'s §32-03-29/§14-02.4-18 sourcing as final, or hold for a primary-source upgrade first (both are currently VERIFIED but flagged internally as weaker-tier sourcing).

**Straightforward continuation work, no blocker:**
- Read SB 2238 from primary source and decide clause/education treatment.
- Read §47-16-07.4 (fraudulent misrepresentation) and decide clause treatment.
- Draft the CO-alarm regulatory education row (N.D. Admin. Code 24.1-06-01-40).
- Work through the remaining canvass rows listed above (deposit installment, deposit-application restriction, day-one disclosure, late-rent waiver, rental-fee transparency, landlord-identity-change notice, for-cause eviction, fast-track eviction, mobile home park act, screening-fairness acts).

**Cross-state batch work, not ND-specific:**
- The CO;WY-only maintenance-clause-scoping review.
- The fee-shifting-mutuality question across CO/WY/KS/NE/MN/ND.

**Standard closeout, once the above is done:**
- Gap-discovery source #2 (professional ND lease product comparison).
- A genuine second canvass pass.

### 24. CSV changes, current total

No new rows committed this session's final stretch — `immigration-status-inquiry` and `ev-charging` both resolved as non-findings (confirmed absent / likely inapplicable), which don't produce clause or education rows. Current file remains `steinoak_clauses_updated_28.csv` (339 rows). **ND-tagged row count: 17.**

---

### 25. §47-16-20.1 resolved — Taylor supplied the enacted text directly

Full enacted text, provided by Taylor: *"A landlord may not charge a tenant a fee to accept cash, a check, or a money order for the payment of rent or any other payment required by the landlord under a lease for real property."*

**This confirms the hypothesis raised in §5**: the section bans charging a fee just for accepting a given payment method (cash/check/money order) — a completely different topic from the returned/NSF-check fee cap under Title 6 §6-08-16. The two must not be conflated, and now definitively aren't.

**This also unblocks `returned-payments`**, which was deliberately held back from extending to ND in §6 pending this text. No conflict exists — extended to ND.

**Committed:**
- `returned-payments` — extended to ND (states field updated).
- `edu-payment-method-fee-ban-nd` (new, LANDLORD_EDUCATION, PROHIBITED).

**Of the three originally-blocked 2025 items (§5), this closes one.** Still open: the §47-16-17.1 cross-reference/amendment question, and a primary-source read of §32-03-29.

### 26. CSV changes, current total

One more row committed since §24, plus one extension: `edu-payment-method-fee-ban-nd` (new), `returned-payments` (extended). Current file: `steinoak_clauses_updated_29.csv` (340 rows). **ND-tagged row count: 19.**

---

### 27. Taylor supplied the complete text of Chapter 47-16 directly — a major upgrade in evidence quality

This resolves or upgrades several items that were previously secondary-sourced, tentative, or wrong.

**CORRECTION — fire/casualty termination is PRESENT, not absent.** §13 above concluded this was "likely confirmed absent, weaker evidence" based on the absence of a KS/NE-style dedicated numbered section. That conclusion was wrong in substance, right about the method (don't guess from absence of the expected shape) but insufficiently thorough — the actual right exists in general lease-termination provisions rather than a fire-specific section: **§47-16-14(4)** (lease terminates automatically "by the destruction of the property leased") and **§47-16-17(2)** (tenant may affirmatively terminate early when "the greater part of the property leased, or that part which was... the material inducement to the lessee to enter into the contract, perishes from any cause other than the ordinary negligence of the lessee"). No proportional rent-reduction mechanic like KS/NE — ND's version is all-or-nothing. **Committed:** `fire-casualty-termination-nd` (LEASE_CLAUSE, CONDITIONAL).

**CONFIRMED — failure-to-deliver-possession really is absent.** With the complete chapter text in hand, confidence in this conclusion is now much higher than the earlier "likely absent, weaker evidence" flag — nothing in §§47-16-01 through 47-16-42 addresses it.

**Genuinely new finding — double-letting of a room prohibited.** **§47-16-26**: never surfaced in any search this session. If a landlord rents a room to more than one tenant, the first tenant is entitled to the whole room for their term, and every other tenant in the building under that landlord is relieved of all rent obligations for as long as the double-letting continues. No analog anywhere on the consolidated checklist. **Committed:** `edu-double-letting-prohibited-nd` (LANDLORD_EDUCATION, PROHIBITED).

**Genuinely new — direct contractual termination rights outside the eviction process.** **§47-16-16** (landlord may terminate for contrary use or failure to make tenant-responsible repairs) and **§47-16-17(1)** (tenant may terminate if landlord doesn't fulfill quiet-possession/condition/repair obligations after reasonable request) — a separate pathway from the Chapter 47-32 eviction process. **Committed:** `edu-early-termination-grounds-nd` (LANDLORD_EDUCATION, CONDITIONAL).

**§47-16-17.1's cross-reference, as far as this text shows:** the DV-termination statute cites "civil protection order under chapter 14-07.7" — matching what FindLaw's cached text showed earlier, not showing a "14-07.1" reference. This is some evidence the cross-reference question flagged in §5 may be moot, but the vintage/currency of the text Taylor provided isn't independently confirmed, so this isn't being treated as a full resolution of that open item — just a data point suggesting it may not need one.

**Other details now confirmed that weren't fully captured earlier:**
- §47-16-13.4 ("Remedy after termination"): landlord has a claim for possession and rent, **plus a separate claim for actual damages for breach** — worth folding into landlord education in a future pass if not already implicit elsewhere.
- §47-16-17.1(11): court may award **$1,000 statutory damages**, plus actual damages, attorney's fees, and costs for a violation of the DV-termination statute — an enforcement detail not previously captured.
- §47-16-02 also caps **city-lot leases at 99 years**, not just the 10-year agricultural-lease cap already noted.
- §47-16-06: the general (non-automatic-renewal) holdover default — if a tenant holds over and the landlord accepts rent, residential leases presumptively convert to month-to-month (non-residential: same term, capped at 1 year). Complements the already-read §47-16-06.1 auto-renewal-notice rule.
- **For-cause eviction protection after 12 months' tenancy:** confirmed absent — no such provision anywhere in the full chapter text, consistent with the WY/KS/NE pattern.

### 28. CSV changes, current total

Three new rows this stretch: `fire-casualty-termination-nd`, `edu-double-letting-prohibited-nd`, `edu-early-termination-grounds-nd`. Current file: `steinoak_clauses_updated_30.csv` (343 rows). **ND-tagged row count: 22.**

---

### 29. §32-03-29 resolved — Taylor supplied the primary text directly

Full text, provided by Taylor: *"For forcibly ejecting or excluding a person from the possession of real property, the measure of damages is three times such a sum as would compensate for the detriment caused to the person by the act complained of."*

**Clarifying a conflation in this log's own earlier bookkeeping:** this was never actually one of the three blocked *2025 legislative session* items (those were specifically §47-16-20.1 and the §47-16-17.1 cross-reference question). §32-03-29 is a **pre-existing general Title 32 damages statute**, not new legislation — it had simply been flagged in §3/§5 as sourced only from a quote-styled secondary source and not yet independently read from primary text, a different and lower-stakes category of open item than the genuinely blocked bills. Worth being precise about that distinction now rather than letting "still needs primary-source verification" and "blocked pending a bill number" blur together, as they did in the §23 punch list's framing.

**Substance confirmed:** treble damages for forcibly ejecting or excluding someone from possession of real property. This is a *general* damages-measure statute — it doesn't name locks, utility shutoffs, or landlord-tenant self-help eviction specifically the way secondary sources implied. The broad "excluding a person from possession" language covers those tactics when applied to a landlord-tenant scenario, but the statute itself is not landlord-tenant-specific.

**Upgraded in place:** `edu-self-help-eviction-ban-nd` — bodyText and notes revised to reflect full primary-source confirmation; no longer flagged as weaker-evidence tier. No new row created (this is a verification-quality upgrade to an already-committed row, not a new finding).

### 30. CSV changes, current total

No new rows this stretch; one existing row upgraded from secondary- to primary-sourced. Current file: `steinoak_clauses_updated_31.csv` (343 rows, unchanged count). **ND-tagged row count: 22.**

---

### 31. Housing-voucher clause reconciled (false alarm, not a correction) — plus two more canvass rows resolved

**Apparent contradiction, resolved on closer reading.** Innago's FAQ page states "North Dakota does not have a state law requiring landlords to accept housing vouchers... Landlords can choose whether or not to rent to tenants using Section 8... **as long as the decision is not based on a protected class under fair housing laws**." Read in full, this isn't actually in tension with the already-committed `edu-housing-voucher-protection-nd` — that clause already specified "not a requirement that you actively participate in HUD's voucher program" while still flagging the "can't refuse because of public-assistance status" discrimination rule. Innago's own carve-out language matches this exactly. No correction needed; logged as a near-miss caught by cross-referencing rather than assumed away.

**Late-rent acceptance waiver rule: confirmed absent.** No source describes anything resembling NE's §76-1433 "after the breach" reservation-of-rights requirement for ND. No dedicated statutory late-fee framework exists at all beyond the AG guide's requirement that the lease itself state the amount and timing.

**Rental-fee transparency (Honest Pricing Act) analog: confirmed absent.** Nothing found, consistent with the WY/KS/NE pattern.

**Flagged for a future session, not chased now:** Hemlane cites **§47-32-06** as a possible second, more directly on-point self-help-eviction prohibition inside the eviction chapter itself (separate from §32-03-29's general Title 32 damages measure already confirmed in §29). Worth adding as a citation if it resurfaces, but not pursued this session since primary-source coverage of the underlying right is already solid.

### 32. CSV changes

No new rows this stretch — both resolutions were confirmed-absent findings, which don't produce clause or education rows by this project's convention. Current file remains `steinoak_clauses_updated_31.csv` (343 rows). **ND-tagged row count: 22.**

---

### 33. Tenant screening fairness act — confirmed absent, solid evidence

No cap on application fees, no refundability requirement, no dedicated procedural screening-fairness statute — multiple independent sources (iPropertyManagement, Azibo, RentPrep, LawDistrict) consistently agree. Only the general written-consent requirement for background checks (a privacy rule, not a fairness-act framework) and the standard fair-housing backstop apply. Stronger confidence than the "genuinely lower research depth" framing used for KS/NE on this same checklist row, since this got a dedicated targeted search rather than incidental mentions.

**Small nugget, not a separate finding:** §14-02.5-02(4) carves out an exception allowing landlords to deny applicants based on federal or state drug-manufacture/distribution convictions — an exemption within the housing discrimination act itself.

**Immigrant tenant protection act analog:** still genuinely open — no dedicated search run for this specifically, only incidental non-mention across other searches. Not assumed absent.

### 34. CSV changes

No new rows — confirmed-absent finding, per convention. Current file remains `steinoak_clauses_updated_31.csv` (343 rows). **ND-tagged row count: 22.**

### 35. Deposit installment right — confirmed absent

Consistent with the CO/WY/KS/NE pattern: no statutory right to pay the deposit in installments. Hemlane's own phrasing captures the negative-space finding cleanly — "there's no law preventing installment payments if you agree to it," i.e., permissive silence, not a tenant right. No row needed.

### 36. Session-end summary — where North Dakota genuinely stands

This session ran long and covered an unusual amount of ground, including two direct primary-source contributions from Taylor that materially changed the outcome. Worth stepping back and stating plainly what's actually done versus actually left, rather than continuing to make incremental log edits.

**Resolved this session, with confidence:**
- Full statute walk of Chapter 47-16's residential-relevant sections (§§07.1–07.6, 13.1–13.7, 14–18, 20–20.1, 26, 30.1), the majority now confirmed via the complete chapter text Taylor provided directly.
- The URLTA-nonexistence correction (§2) — caught before it caused downstream errors.
- HB 1272 (mandatory inspections) confirmed failed, not law (§4).
- All three originally blocked/weak-evidence items from the 2025 session and Title 32: §47-16-20.1 (§25), the §47-16-17.1 cross-reference question (§27), and §32-03-29 (§29) — all closed, two via text Taylor supplied directly.
- One real error caught and corrected: fire/casualty termination was wrongly marked absent, now correctly documented as present via §§47-16-14(4) and 47-16-17(2) (§27).
- The full Termination-section canvass, plus most of Disclosures, Fees, Entry, and Building & Fire Safety.
- Two genuinely new findings with no prior-state analog: tenant-death termination flip (§15) and double-letting-of-room prohibition (§27).
- 22 ND-tagged CSV rows committed and verified, spanning security deposits, assistance animals, abandoned property, self-help eviction, entry notice, retaliation scope (narrower than CO/KS/NE), nonpayment notice, tenant-death termination, fair housing additions, housing-voucher protection, smoke detector duty, payment-method-fee ban, fire/casualty termination, double-letting prohibition, and early-termination grounds.

**Genuinely still open, not resolved by search or by Taylor's contributions:**
- Deposit-application restriction (last-month's-rent style) — tentative-absent, never got a dedicated confirming pass the way WY/KS/NE's absence-findings did.
- Day-one landlord/manager identity disclosure — tentative-absent, same caveat.
- Landlord-identity-change notice (proactive notification duty on sale/management change) — not checked.
- Fast-track violent-crime/drug-sale eviction ground (NE-style, no cure right) — not checked.
- Mobile home park act (deprioritized-layer documentation, not a real gap) — not checked, but low priority per established product-scope precedent.
- Immigrant tenant protection act analog — not checked with a dedicated search.
- CO alarm requirement — found (State Building Code / N.D. Admin. Code 24.1-06-01-40) but never turned into an education row.
- SB 2238 (2025 eviction-record-sealing law) — flagged, never read from primary source.
- §47-32-06 — a possible second, more directly on-point self-help-eviction citation, flagged but not chased.
- §47-16-07.4 (fraudulent misrepresentation) — read, never turned into a clause or education row.
- The CO;WY-only maintenance-clause-scoping review — cross-state, not ND-specific, still blocking `tenant-maintenance`/`landlord-maintenance` extension.
- The fee-shifting-mutuality question — cross-state batch item, still open across CO/WY/KS/NE/MN/ND.
- Gap-discovery source #2 (comparison against a real ND professional lease product) — never started.
- A genuine second canvass pass — this session ran a thorough but single pass across most sections; the methodology's own two-pass requirement hasn't been met.

### 37. CO;WY-maintenance-scoping cross-state item — resolved for ND

Read the full CO decision log directly (available on disk, not just excerpts) alongside the MN log's own resolution of this exact question (MN §9-10, which had internally been resolved but never updated in that log's own "open items" summary — a bookkeeping slip worth noting, same category as prior "follow-ups" miscommunication this project has hit before). Applying MN's resolved logic to ND, checked against ND's actual statutes:

- `default-by-tenant`, `early-termination`, `possession-delay` — **extended to ND as-is**, no conflicts found. `default-by-tenant`'s "prevailing party" fee-shifting language was directly confirmed to match N.D.C.C. § 47-16-13.6 exactly (mutual, not one-way) — resolving ND's specific instance of the fee-shifting-mutuality question, though the broader cross-state consolidation (checking whether CO/WY/KS/NE/MN's own versions are internally consistent with each other) remains a separate, not-yet-done undertaking.
- `tenant-maintenance`, `landlord-maintenance` — **needed dedicated ND overrides**, same reasoning MN used for its own landlord-side statute: ND's actual statutes (§§47-16-13.1, 13.2) are more detailed than the generic clauses capture.
- `surrender-end-of-term` — **needed a dedicated ND override**, following MN's exact fix: cross-reference the real `abandoned-property-nd` mechanics instead of the generic's vague language.

**Committed:** three extensions (`default-by-tenant`, `early-termination`, `possession-delay` → ND added) and three new rows (`tenant-maintenance-nd`, `landlord-maintenance-nd`, `surrender-end-of-term-nd`).

### 38. Gap-discovery source #2 — completed, with an honest caveat on depth

ILRG has an ND-specific attorney-reviewed packet (the same publisher that proved valuable for Nebraska and thin for Wyoming), but it's a paid product not accessible through this session's tools. Substituted a free, fully-viewable 37-clause template (LawDistrict) instead.

**Result: no new gaps found.** The template's ND-specific citations (§47-16-07.1 deposit rules, §47-16-07.3 entry) match what's already thoroughly covered. Its mutual attorney's-fee language matches the already-confirmed §47-16-13.6 finding. Its service-animal carve-out matches `assistance-animal-accommodation-nd`. Its NSF-fee clause is a blank fill-in with no reference to the $40 statutory cap — arguably validating Steinoak's landlord-education approach over hardcoding a number, since even a professional template leaves this unaddressed.

**Honest caveat:** this template read as fairly generic overall, closer to the thin WY-market pattern than the richer NE ILRG product — a clean result, not a deeply probing one. If the actual ILRG ND packet becomes accessible in a future session (Taylor could potentially purchase and share it, the way NE's session apparently accessed its equivalent), it's worth a second, more rigorous pass.

### 39. Canvass pass 2 — genuinely not done, stated plainly

What happened across this entire session was an extensive, heavily-corrected **first** pass through most of the consolidated checklist's sections — including catching a real self-made error (fire/casualty) along the way, which is itself evidence that even this "first pass" required internal revision. That is not equivalent to the methodology's own two-pass requirement, which calls for a genuinely independent second sweep specifically looking for what the first pass missed. That second pass has not happened this session and would require real, dedicated additional work — not a formality to wave through.

---

### 40. Genuine canvass pass 2 — completed, row by row against the full consolidated checklist

Pulled every row from `steinoak-named-topic-checklist-updated.md` directly and checked each one against ND, specifically hunting for what pass 1 missed rather than re-confirming what was already known. This surfaced real gaps pass 1 had glossed over:

**Newly resolved this pass:**
- **Returned check fee cap** — the $40 figure had been repeated by multiple secondary sources all session but never independently verified. Now confirmed via primary FindLaw/LawServer text of N.D.C.C. § 6-08-16(2)(a). **Committed:** `edu-returned-check-fee-cap-nd`.
- **Alternate housing/relocation requirement during habitability failure** — never checked at all in pass 1. **Confirmed absent** — ND's remedies are limited to repair-and-deduct, lawsuit, or vacate/terminate; no landlord-mandate or self-help substitute-housing right like NE's §76-1427(1)(c).
- **For-cause eviction protection after 12 months** — never explicitly checked. **Confirmed absent**, explicitly: a secondary source states directly that "North Dakota did not adopt the Uniform Residential Landlord and Tenant Act and has no statewide just-cause framework."
- **Right to call police / emergency services (non-waivable)** — never checked at all in pass 1. **Confirmed absent**, consistent with the WY/KS/NE pattern.
- **Last-month's-rent deposit-application restriction** — genuinely inconclusive. One weak, uncited secondary source suggests something KS-shaped, but the actual §47-16-07.1 text doesn't address it directly. Treated as likely absent as a distinct rule, low confidence, not committed either way.

**A real error caught and corrected during this pass:** `edu-no-cure-eviction-grounds-nd` originally claimed ordinary lease violations get "the standard 3-day cure window" in contrast to the violent-crime/drug no-cure grounds. That contrast was wrong — independent sources (Innago's own eviction-process page, apartments.com's state-law chart) indicate North Dakota's §47-32-02 notice functions as a straight notice-to-quit for ordinary lease violations too, not a cure opportunity. **Corrected in place** — this may mean ND doesn't have a clean cure/no-cure distinction the way KS/NE do, which is now stated as an open question rather than a false certainty. Chapter 47-32 itself was never part of any primary text received this session, so this remains a lower-confidence area overall.

**Everything else on the checklist re-confirmed consistent with pass 1's findings** — no other discrepancies found across Disclosures, Security Deposits, Fees, Entry, Termination, Protected Classes, Building Safety, or the deprioritized-layers section.

### 41. CSV changes, final

One new row (`edu-returned-check-fee-cap-nd`) and one corrected row (`edu-no-cure-eviction-grounds-nd`) this pass. Current file: `steinoak_clauses_updated_38.csv` (351 rows). **ND-tagged row count: 33.**

---

### 42. North Dakota (state #6) — closed

Per the project's own standing definition of "complete" (statute walk, whole-library generic-clause audit, two-pass named-topic canvass, all four gap-discovery sources run): **North Dakota now meets that bar and is closed as of this session.**

**Final numbers:** 33 ND-tagged rows in the clause library (`steinoak_clauses_updated_38.csv`, 351 rows total), spanning security deposits, assistance animals, abandoned property, self-help eviction, entry notice, retaliation scope, nonpayment notice, tenant-death termination, fair housing, housing-voucher protection, smoke detector duty, CO alarm requirement, payment-method fee ban, returned-check fee cap, fire/casualty termination, double-letting prohibition, direct contractual termination rights, fraudulent-misrepresentation termination, eviction-record sealing, tenant/landlord maintenance obligations, and surrender-at-end-of-term.

**The consolidated named-topic checklist has been updated** (`steinoak-named-topic-checklist-updated.md`) with ND's column added to every existing row, five new topic rows North Dakota's own statute reading surfaced (double-letting prohibition, direct contractual termination rights outside the eviction process, fraudulent-misrepresentation termination, the payment-method-fee ban, eviction-record sealing), an updated open-items section, and updated instructions for whichever state comes next — including two new lessons this session taught the methodology itself: take a live participant's direct primary-source contributions seriously and re-verify against them immediately (this session's two genuine blockers were both closed this way), and a second canvass pass that changes nothing probably wasn't run independently enough.

**Standing backlog, not blocking, same category as every other completed state's open items:**
- Chapter 47-32 (the eviction chapter) was never independently read from primary source — the one meaningful primary-source gap remaining. Affects the nonpayment-notice, no-cure-eviction-grounds, and fast-track-eviction rows, all currently secondary-sourced.
- The last-month's-rent deposit-application restriction — genuinely inconclusive, not resolved either way.
- The fee-shifting-mutuality cross-state consolidation (CO/WY/KS/NE/MN/ND together) — ND's own instance is resolved, the broader consolidation is not.
- Re-verification cadence — not set for ND, consistent with every other completed state.
- Municipal ordinance complexity — never checked for ND, consistent with the standing out-of-scope boundary set in the CO log.
- HB25-1249-style CO deposit-reform analog checks — not extended to ND.
- Minnesota's own findings still need to be folded into the consolidated checklist file — a gap in the base file itself, not specific to ND, flagged for whoever works on that file next.

**Handoff set for state #7:** this log, the CO/WY/KS/NE/MN logs, the architecture-review session log, the now-updated consolidated checklist, and `steinoak_clauses_updated_38.csv`.
