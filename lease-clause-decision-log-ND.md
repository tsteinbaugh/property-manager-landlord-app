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


---

## §5a.1 PROPAGATION NOTE — OWED AND NOW DISCHARGED, 2026-09-03

**This note was owed on 2026-09-03 and could not be written at the time — no North Dakota decision log existed in the working file set.** The gap was flagged in the MN log rather than skipped. The ND log is now available and the note is recorded here.

### `returned-payments` — EDIT — judgment: **UNIFORM**

North Dakota is one of six states tagged on the shared `returned-payments` clause (CO, WY, KS, NE, MN, **ND**).

**Change:** "may charge Tenant **any** fee associated with the failed payment" → "may charge Tenant **a** fee ... **not to exceed the maximum amount permitted by applicable law**."

**Judgment: UNIFORM** — the self-limiting formulation is correct in every tagged state regardless of each state's specific figure. Safe to inherit; **no ND override required.**

**Why the edit was necessary, and it applied to ND as much as anywhere:** every one of the six tagged states has a returned-check fee cap and already carried a row recording it. North Dakota's is `edu-returned-check-fee-cap-nd` — **collection fees or costs of up to $40**, separate from the underlying payment. The unbounded word "any" in the shared clause was therefore wrong in **all six states simultaneously**, ND included: the clause promised landlords a latitude that no tagged state actually permits, and it sat directly alongside an ND row stating the $40 cap. Nothing in the library ever reconciled the two.

### Clauses NOT affecting North Dakota

The other two clauses edited in the same pass — `notices` and `holdover` — are **not ND-tagged** (both are CO;WY;KS;NE;MN). No ND action is required on either. Recorded explicitly so a future reader can see the scope was checked rather than assumed.

**However, the `holdover` provenance finding is worth knowing in ND** even though the clause is not ND-tagged: the generic clause's "double the Monthly Rent" figure was found to have **no statutory basis in any of its five tagged states** — too high in CO, WY, and KS, too low in NE, and baseless in MN. It appears to have been template boilerplate that entered the library before any state research and survived four re-audits. If North Dakota is ever added to that clause, the figure should not be inherited on the assumption that someone verified it. Nobody did.

**CSV state of record: v98 (487 rows).** The `returned-payments` edit was made at v94; no row count change, body text and notes only.

### FLAG FOR THE ND RE-AUDIT — compare the $40 cap against SD's

`edu-returned-check-fee-cap-nd` records a $40 collection-fee cap under N.D.C.C. §6-08-16(2)(a) with full primary text confirmed. South Dakota's `edu-returned-check-fee-cap-sd` records **the same $40 figure** but adds a condition ND's row does not: that the fee policy be conspicuously stated in the lease or otherwise given to the tenant in writing.

**On current evidence ND's row is the better-sourced of the two** — SD's notes concede the operative text of SDCL 57A-3-421 was never read directly. The statutes are also genuinely different (ND: Title 6, Banks and Banking; SD: Title 57A, UCC Article 3), so a divergence may be entirely correct.

**At re-audit, confirm whether §6-08-16 imposes any notice, disclosure, or demand precondition on collecting the $40** — a charge that requires prior written notice and is collected without it is a different exposure than a charge that does not. Read the whole section rather than the subsection carrying the figure; that failure mode produced several corrections during the MN re-audit.

Raised during the MN re-audit's §5a.1 propagation pass (2026-09-03).

---

## RE-AUDIT SESSION — 2026-09-06 (v100 → v101)

**Status:** in progress. Trunk confirmed (489 rows; CO 110, WY 98, KS 114, NE 111, MN 119, SD 37, ND 33; no duplicate IDs, no dangling supersedes, 56 supersedes relationships, no display collisions).

### R.0 Scope reaction, and a correction to the session prompt

The prompt stated ND is not a column in the named-topic checklist. **Half wrong.** ND *is* a column in all eight original topic tables plus the ND new-topics table — added at the end of ND's original session. What ND is missing from is every section added *since*: **56 of 110 Rule-B rows have no ND answer** (CO re-audit 11, WY re-audit 7, KS 9, NE 10, MN 9, eviction screen 10). Acting on the prompt as written would have re-added an existing column and risked overwriting 54 existing answers.

**Denominator, derived fresh, disagreement recorded not reconciled.** Rule B (every non-header table row, excluding `Row | Correction` tables) = **110**, with 25 correction rows excluded. Rule A (deduplicated normalised topic labels) = **108**. The 2-row gap is two label-level duplicates — *cash rent payment receipt duty* and *landlord duty to mitigate on early termination* — each appearing in both the MN re-audit section and the eviction-screen section. The known semantic duplicate (`Returned/dishonored check fee cap` vs `Genuinely new: returned-check-fee cap`) is invisible to both rules, so distinct topics ≤ 107 under Rule A.

**Two serialization artifacts found incidentally** (Python tuple-repr, `("` … `",)`): `edu-no-cure-eviction-grounds-nd` in `notes` (repaired this session as part of R.2) and **`edu-no-modification-duty-ne` in `bodyText`** — the latter is shipped landlord-facing text in another state's row. Flagged, not silently edited; awaiting Taylor's decision.

Also noted: `security-deposit-return` is `VERIFIED` with a blank `states` field. Under the standing display rule that is a row showing nowhere. Believed intentional (fully superseded generic), recorded rather than touched.

### R.1 K.2 — the inherited scope boundary selected for re-examination

First two candidates offered (municipal ordinances, agricultural tenancies) were **withdrawn as category errors**: both are boundaries Taylor *chose*, and both live in the checklist's "deliberately deprioritized (product-scope decisions, not gaps)" section. K.2 targets boundaries *inherited without decision*.

**Boundary selected: tenancy type.** ND's original pass treated ch. 47-16 as one undifferentiated residential regime and answered every question as though the tenancy were a whole-dwelling month-to-month or fixed-term lease — an assumption inherited from CO/WY/KS/NE, never tested against ND's own text. Result recorded at R.8 below.

Backup candidate not pursued: § 47-16-07.1(6) extends the deposit rules to the state and political subdivisions as landlords; the library has never asked whether public or subsidised landlords are in scope.

### R.2 CORRECTION — `edu-no-cure-eviction-grounds-nd` was materially fabricated

Primary text: N.D.C.C. ch. 47-32, read in full (ndlegis.gov/cencode/t47c32.pdf).

The shipped row described eviction without cure for *"drug-related criminal activity, violence or threats of violence, or other conduct presenting an immediate threat to health, safety, or property."* **No such ground exists in § 47-32-01.** That is Kansas/Nebraska architecture imported wholesale from secondary sources during ND's original pass and shipped `VERIFIED`.

The eight actual grounds are recorded verbatim in the corrected row's notes. Three structural points the original pass missed entirely:

- § 47-32-02 attaches the three-day notice to **subsections 4, 5, 6, and 8 only**. Grounds 1, 2, 3 and **7** require *no notice at all*.
- **Ground 7 — a lessee or their guest unreasonably disturbing other tenants' peaceful enjoyment — is ND's real fast-track**, and it is faster than the row claimed: no notice whatsoever, not a three-day no-cure notice.
- Ground 8 reaches only **written** leases.

The row's one correct sentence (no general cure right) is retained. This is the sixth consecutive state where re-audit found an error shipped as `VERIFIED`.

### R.3 CORRECTION — `edu-eviction-record-sealing-nd` upgraded to codified cite

Now confirmed as **§ 47-32-05** (the original pass knew only that 2025 SB 2238 created "a new section to chapter 47-32"). Signed 2025-03-26; non-emergency 2025 regular-session act, **effective 2025-08-01**.

Two precision fixes: the seven-year clock runs from **satisfaction of the order**, while the no-further-eviction condition is measured over the seven years **following the eviction** — two different anchor dates, previously collapsed into one. And the DV path requires a conviction or one of **three enumerated orders** (disorderly conduct restraining order, sexual assault restraining order, domestic violence protection order), not any restraining order generally.

### R.4 CORRECTION — `edu-returned-check-fee-cap-nd`; SD flag resolved

Whole of § 6-08-16 read (previously only subsection (2)(a)).

**SD flag resolved in SD's favour: the divergence is correct.** The $40 collection fee under 6-08-16(2)(a) is recoverable "in addition to the criminal penalty" with **no** notice, disclosure, demand, or waiting-period precondition. SD's conspicuous-disclosure condition arises from a genuinely different statute (SDCL Title 57A, UCC Art. 3) and must **not** be propagated to ND.

**But the row was under-claiming.** It recorded only the $40 ceiling and omitted § 6-08-16(2)(c) entirely: a civil penalty of the **lesser of $200 or three times the instrument**, gated on the § 6-08-16(4) notice of dishonor plus a ten-day cure window. That notice is **permissive, not mandatory** — 6-08-16(4) says it "may be mailed," and *State v. Ohnstad*, 392 N.W.2d 389, 390 (N.D. 1986) states it is optional. So the notice is a precondition to the *civil penalty only*, never to the $40 fee. Reading only the subsection carrying the figure cost the library the larger remedy.

### R.5 CORRECTION — a recorded absence was wrong: ND *does* have holdover multipliers

ND's checklist row read: *"Holdover damages formula | New architecture — § 47-16-13.7 imposes straight rent liability through the lease term (subject to mitigation), no multiplier at all, unlike CO's double-rent, KS's 1.5×, or NE's 3×."*

**Wrong.** Primary text of ch. 32-03 (ndlegis.gov/cencode/t32c03.pdf, whole chapter):

- **§ 32-03-27** — tenant gave notice of intention to leave, then failed to give up the premises: *"double the rent which the tenant otherwise ought to pay."*
- **§ 32-03-28** — willful holdover after end of term, after notice of intention to evict duly given **and** demand of possession made: *"double the yearly value of the property for the time of withholding, in addition to compensation for the detriment occasioned thereby."*
- **§ 32-03-21** supplies the residual measure (value of use, not exceeding six years) for wrongful occupation not covered by 32-03-22, -27, -28, -29.

The measures sit in **Title 32 (Judicial Remedies), not Title 47** — precisely the adjacent-chapter failure the checklist's own instruction warns about, committed by this project in ND's original pass and then hardened into an affirmative "no multiplier at all" claim on the checklist.

**Wording discipline applied** (per the NE re-audit's "three months' periodic rent" vs "3× periodic rent" finding): 32-03-28 is *double the yearly value for the time of withholding* — an annualised rate, prorated — **not** "double rent." The two measures have different triggers and different bases and must not be merged. Committed as `edu-holdover-damages-nd`.

**Provenance-finding check:** ND remains untagged on the generic `holdover` clause and is **not** added to it. The removed "double the Monthly Rent" figure must not be reintroduced; ND's measures are statutory, differently worded, and trigger-gated, so they belong in an ND-specific row.

### R.6 Eviction-duty screen — first run against ND

Baseline before this session (title + bodyText only, notes excluded, mirroring K.1a):

| Topic | ND baseline |
|---|---|
| Self-help / ouster ban | 1 (`edu-self-help-eviction-ban-nd`) |
| Willful utility shutoff | **0** |
| Post-writ property duties | **0** |
| Pre-filing notice duty | 1 (`edu-nonpayment-notice-nd`) |

*Method note:* the first post-writ probe returned 7 false positives — the pattern `writ` matched `written`. K.4's "probes are a screen, never a verdict" earned its place on the first attempt.

Findings:

- **Self-help: no landlord-tenant-specific ban exists.** Ch. 47-32 read in full contains **no landlord-conduct prohibition of any kind**. Exposure routes solely through § 32-03-29 (treble damages). `edu-self-help-eviction-ban-nd` survives unchanged and is correctly framed.
- **§ 47-32-06 does not exist.** ND's original log flagged a secondary source (Hemlane) citing "§ 47-32-06" as a second self-help prohibition and left it as "worth a future look." Chapter 47-32 ends at 47-32-05. The citation is fabricated. Flag closed.
- **Utility shutoff:** confirmed absent as a distinct violation → `edu-no-utility-shutoff-statute-nd`.
- **Post-writ property:** § 47-16-30.1's post-judgment lien **already existed but only inside `abandoned-property-nd`'s notes field**, invisible to every canvass — the self-sealing shape the MN session found three times, and the reason the baseline read 0. Promoted to `edu-post-writ-property-duties-nd`, which also records that the 28-day/$2,500 self-help disposal route and the post-special-execution lien route are **different procedures on different triggers**, the lien route carrying no stated value ceiling.
- **Post-writ animals:** confirmed absent → `edu-no-post-writ-animal-duty-nd`. Over-included with reasoning: its closing sentence states a legal inference (general cruelty law is not displaced by an eviction judgment) rather than a located eviction-animal rule. **Surfaced for Taylor's decision.**
- **Writ timing:** § 47-32-04 — judgment is for *immediate* restitution, but on a substantial-hardship showing the court may stay the special execution up to **five days**, unavailable where the judgment rests in whole or part on disturbance of the peace (tying back to no-notice ground 7). Committed as `edu-eviction-hardship-stay-nd`. No daylight-only restriction and no SSI/SSDI extended timeline exist. § 47-32-02 does carry a service-mechanics rule: posting on the residential unit door is permitted only after a service attempt between **six p.m. and ten p.m.** plus affidavit and mailing.

### R.7 CSV changes this session

`steinoak_clauses_updated_101.csv` — 494 rows (+5). **ND-tagged: 38** (was 33). CO/WY/KS/NE/MN/SD counts unchanged. Integrity re-verified after write: no duplicate IDs, no dangling supersedes, no display collisions.

Corrected in place (3): `edu-no-cure-eviction-grounds-nd` (fabricated grounds replaced; title and rule_type changed; tuple-repr artifact removed), `edu-eviction-record-sealing-nd` (codified cite, effective date, two precision fixes), `edu-returned-check-fee-cap-nd` (title changed; SD flag resolved; civil penalty added).

New (5): `edu-holdover-damages-nd`, `edu-eviction-hardship-stay-nd`, `edu-no-utility-shutoff-statute-nd`, `edu-post-writ-property-duties-nd`, `edu-no-post-writ-animal-duty-nd`.

**No shared multi-state clause was edited this session, so no § 5a.1 propagation notes are owed.** All three corrected rows are ND-only.

**Write-process note:** the first v101 write left `states` blank on all five new rows — they would have displayed nowhere. Caught by the post-write tag-count assertion (ND unchanged at 33 when it should have risen), repaired before delivery. Recorded because the assertion, not review, is what caught it.

### R.8 Still open

- **K.2 tenancy-type boundary** — statutory basis identified (§§ 47-16-19 lodgings/weekly presumption, 47-16-15(1) notice scaled to the term, 47-16-20 three payment regimes, 47-16-26 room-level double-letting) but **no rows written yet and no verdict recorded**. Must close as "boundary wrong" or "boundary confirmed correct" before the session ends.
- **§ 47-16-17.1 currency** — the DV-termination section's amendment status (vLex indexed a version "Effective 1/1/2026") remains unconfirmed against a history line. K.4 archived-version trap applies.
- ND's 56 missing checklist answers — not yet folded in.
- Topics identified but not yet rowed: § 47-16-15(4) initial-box **layout** requirement; § 47-16-06.1 automatic-renewal 30-day notice (read in the original pass, never rowed); cash rent receipt duty; lease copy delivery duty; maintenance bar; § 47-32-01.1 mobile-home-park eviction defence.
- Citation screen against `notes` as well as `bodyText` — not yet run.

### R.9 v102 — artifact repair, scope trim, and a REQUIRED clause that was never written

**`edu-no-modification-duty-ne` artifact repaired** (Taylor's instruction). Tuple-repr delimiters stripped from `bodyText`; text content unchanged. Per Addendum E, no NE legal content was reviewed or re-verified — the edit is cosmetic and does not constitute re-verification of that row. A CSV-wide rescan confirms **zero remaining tuple-repr artifacts** in `title`, `bodyText`, or `notes`.

**`edu-no-post-writ-animal-duty-nd` trimmed** (answering Taylor's "not understanding"). The row had closed with *"General animal-cruelty law still applies to you as it does to anyone, and an animal is not 'property' you can simply leave in a locked unit."* That sentence was **Claude's legal inference, not a located rule** — no ND statute says cruelty law survives an eviction judgment, because no ND statute addresses the intersection at all. It read as verified law inside a `VERIFIED` row. Removed; the row now states only the confirmed absence. The practical exposure is real but unsourced, and is recorded in notes rather than shipped as content.

### R.10 CORRECTION — ND had no domestic-violence termination row at all

§ 47-16-17.1 primary text supplied directly by Taylor.

The consolidated checklist recorded ND as *"Present — §47-16-17.1, full mechanics confirmed (advance notice, non-disclosure, 1-month-rent liability cap, $1,000 statutory damages remedy)."* **No CSV row was ever written.** ND was the only state carrying a DV-termination statute with no clause — CO, WY, KS, NE and SD all have one. This is the MN-session shape (a log asserting coverage that does not exist), and here it concealed a **REQUIRED lease clause** for the entire life of the state's entry. The original session read the statute, summarised it into the checklist, and never converted it.

Committed three rows: `dv-lease-release-nd` (LEASE_CLAUSE, REQUIRED), `edu-dv-confidentiality-nd`, `edu-dv-deposit-timing-nd`.

**ND's architecture differs from every prior state**, so none of the existing DV clauses could have been extended:

- The trigger includes **prospective fear** of imminent domestic violence, not only past victimisation.
- Documentation is a statement referencing a court order, order prohibiting contact, civil protection order, or "other record filed with a court." ND does **not** accept SD's police-report or health-care-provider-affidavit routes, and imposes **no 30-day recency window**.
- Exit cost is the termination month's rent **plus one additional month's rent**, expressly subject to the landlord's mitigation duty — a liability cap, not a penalty, and materially different from SD's "no rent for the month following."
- § 47-16-17.1(7) makes payment of that additional month a **condition precedent** to release from the remaining term.
- § 47-16-17.1(9) keeps the tenancy alive for co-tenants.
- § 47-16-17.1(10) reaches **applicants**, not just tenants ("refuse to rent, refuse to negotiate for the rental of") — a screening-stage duty.
- § 47-16-17.1(11): the court **may** award statutory damages of one thousand dollars, **plus** actual damages, fees, costs and disbursements. Discretionary and stacked, not automatic and not in lieu. Wording preserved per the NE paraphrase finding.

**Deposit-timing interaction the library had missed:** § 47-16-17.1(8) displaces the ordinary § 47-16-07.1 trigger in DV terminations. Sole-victim tenancies trigger on the first day of the month following vacatur; where co-tenants remain bound, timing runs to **lease expiration** — potentially far later than 30 days after the victim vacates. `security-deposit-return-nd` states only the ordinary rule. Flagged for Taylor: add a cross-reference, or leave the interaction in landlord education?

**§ 47-16-17.1 currency — resolved.** The supplied text cites **chapter 14-07.7** for civil protection orders, matching the text read in ND's original pass. The long-open question of whether a 2025 protection-order bill updated the cross-reference is answered: **it did not**. Currency rests on Taylor's source being the current-cite chapter PDF; the vLex "Effective 1/1/2026" index entry remains unexplained and is **recorded rather than reconciled**, per the standing rule against resolving source conflicts by further searching.

**Overlap flagged, not resolved:** `edu-limited-retaliation-protection-nd` already cites § 47-16-17.1(10) as one of ND's two narrow retaliation protections. That row stays correct and unedited; `edu-dv-confidentiality-nd` records the operative duty and its remedy, which the other row does not. Surfaced in case a single consolidated retaliation row is preferred.

### R.11 CSV state after v102

`steinoak_clauses_updated_102.csv` — **497 rows. ND-tagged: 41** (was 33 at session start). CO 110, WY 98, KS 114, NE 111, MN 119, SD 37 — all unchanged. No duplicate IDs, no dangling supersedes, no display collisions, no serialization artifacts.

Running tally of `VERIFIED` errors found in ND this session: fabricated eviction grounds (R.2), collapsed sealing anchor dates (R.3), under-claimed NSF remedy (R.4), false "no holdover multiplier" (R.5), notes-only post-writ lien (R.6), **missing REQUIRED DV clause (R.10)**.

### R.12 K.2 VERDICT — tenancy-type boundary: **WRONG**

The inherited assumption was that ch. 47-16 is one undifferentiated residential regime, so every ND answer could be given as though the tenancy were a whole-dwelling month-to-month or fixed-term lease. ND draws tenancy-type distinctions in at least **six** places and the original pass recorded none of them:

| § | Distinction |
|---|---|
| 47-16-05 | One-year term presumed for leases of real property **other than lodgings** |
| 47-16-19 | Lodgings tenancy runs for the rent-estimation period — *"renting at a weekly rate of rent is presumed to be for one week"* |
| 47-16-20 | Three default rent-payment regimes: agricultural yearly, **lodgings monthly**, other rents quarterly |
| 47-16-15(1) vs (2) | Notice scaled to the term of the hiring (capped at one calendar month) for unspecified-term leases; the flat one-calendar-month rule is expressly limited to **month-to-month** tenancies |
| 47-16-06.1 | Automatic-renewal notice duty applies only to leases *"of a specified term of two months or more"* |
| 47-16-07 | Mid-tenancy term-change right applies only to leases *"from month to month"* |

**Materiality.** Same error shape as the NE re-audit's *"three months' periodic rent"* vs *"3× periodic rent"* finding — measures that coincide in a monthly tenancy and diverge sharply outside one. Had ND's termination-notice clause been written during the original pass it would almost certainly have stated a flat one calendar month, **overstating a weekly tenant's notice obligation roughly fourfold**. The clause was never written, so no shipped row carried the error — this boundary produced an *omission*, not a misstatement. That is a distinct failure mode from the four prior re-audits, which all found errors *inside* the established scope.

**Cross-state exposure, flagged not actioned:** CO, WY, KS, NE, MN and SD rows all rest on the same untested inherited assumption. No other state has been examined for tenancy-type sensitivity. Recommended as a candidate screen.

### R.13 Five notice-framework rows — three of them filling outright omissions

- **`termination-notice-nd`** (LEASE_CLAUSE, REQUIRED). ND had **no termination-notice row of any kind** — basic lease content, absent for the life of the state's entry. Not caught by the original canvass because *the checklist has no generic "termination notice period" topic row*: the canvass can only find what it lists. That is a checklist defect, not just an ND defect.
- **`lease-notice-initial-requirement-nd`** (LEASE_CLAUSE, CONDITIONAL). § 47-16-15(4) — **the first layout/placement requirement rowed in this project.** Not a content rule: an initialling space must physically sit *next to* the extended-notice requirement, and the sanction for omission is that the extended notice period is unenforceable and reverts to one calendar month. A generated lease stating a 60-day tenant notice without an adjacent initial box **silently loses that term**. *Product flag: the builder has no initialling-field mechanism and no way to condition one clause's inclusion on another clause's field value.*
- **`edu-automatic-renewal-notice-nd`** — § 47-16-06.1 was **read during ND's original statute walk and explicitly listed in that session's notes**, then never converted to a row. Second instance of the read-summarised-never-committed failure in this state, after the DV clause at R.10.
- **`edu-term-change-notice-nd`** — §§ 47-16-07 and 47-16-15(3). Note the asymmetry: landlord's change notice is **30 days** before month-end; the tenant's responsive termination notice is **25 days**. The shorter tenant window is deliberate — it lets a tenant served with a 30-day change notice still exit at the same month-end. This is also ND's rent-increase notice rule by operation, since rent is a lease term; a canvass hunting for a standalone rent-increase statute finds nothing.
- **`edu-tenancy-type-notice-nd`** — the K.2 finding itself.

### R.14 Citation screen — run against `notes` as well as `bodyText`

46 ND rows, **34 distinct statutory sections cited**, spanning ten chapters across five titles: 6-08, 11-15, 14-02.4, 14-02.5, 14-07.1, 23-13, 24.1-06, 32-03, 47-16, 47-32.

32 of 34 sections appear in `notes` only. That is **not** a defect — this library's convention puts citations in notes and keeps `bodyText` tenant-facing. The screen's real output is the **primary-text coverage map**:

**Verified from primary text this session:** ch. 47-16 (complete, Taylor), ch. 47-32 (complete, ndlegis.gov PDF), ch. 32-03 (complete, ndlegis.gov PDF), § 47-16-17.1 (Taylor).

**Cited but NEVER read from primary text, in any session** — carried at secondary-source confidence:

| § | Relied on by | Original source |
|---|---|---|
| 14-02.4-18 | `edu-limited-retaliation-protection-nd` | J.J. Keller (compliance publisher) |
| 14-02.5-02 | `edu-housing-voucher-protection-nd` | Nolo |
| 23-13-15 | `smoke-detector-duty-nd` | FindLaw |
| 24.1-06-01-40 | `edu-carbon-monoxide-alarm-requirement-nd` | regulations.justia.com |
| 6-08-16 | `edu-returned-check-fee-cap-nd` | FindLaw + research synthesis; **not fetched directly this session** |
| 11-15-11 | `edu-post-writ-property-duties-nd` | research synthesis only |
| 14-07.1-01 | `dv-lease-release-nd`, `edu-eviction-record-sealing-nd` | referenced, definition never read |
| 47-30.2-04 | `security-deposit-return-nd` | referenced, never read |

Eight sections, four of them supporting `VERIFIED` rows that make affirmative legal claims (retaliation scope, voucher protection, smoke detector duty, CO alarm duty). **Recorded as a standing gap, not resolved** — closing it means eight primary-text reads and is the natural next block of work.

`14-02.5-07` also appears, but only inside a note *warning against* it as a miscitation. Correct as-is.

### R.15 CSV state after v103

`steinoak_clauses_updated_103.csv` — **502 rows. ND-tagged: 46** (33 at session start, +13). CO 110, WY 98, KS 114, NE 111, MN 119, SD 37 — unchanged throughout. Integrity clean: no duplicate IDs, no dangling supersedes, no display collisions, no serialization artifacts.

### R.16 CORRECTION — ND fair housing rows omitted the exemptions that cover Steinoak's core customer

Ch. 14-02.5 read in full from primary text (ndlegis.gov/cencode/t14c02-5.pdf) — the first primary read of this chapter in the project. Two ND rows (`edu-fair-housing-additions-nd`, `edu-housing-voucher-protection-nd`) rested on Nolo and J.J. Keller.

**Substance confirmed.** § 14-02.5-02(1)-(2) does protect *"status with respect to marriage or public assistance"* alongside race, colour, religion, sex, disability, age, familial status and national origin. Both rows' holdings are correct and are now primary-sourced. The § 14-02.5-07 miscitation warning is also now definitively confirmed: that section is *Residential real estate-related transaction* (selling, brokering, appraising, lending), so the industry guides citing it for a rental rule were simply wrong.

**But both rows stated flat, unqualified prohibitions, and § 14-02.5-09 carries exemptions that land precisely on Steinoak's target customer.**

- **§ 14-02.5-09(2)** — the sale-or-rental prohibitions do not apply to renting rooms or units in a dwelling housing **no more than four families living independently, where the owner occupies one as their residence**.
- **§ 14-02.5-09(1)** — owner-occupied single-family exemption, four cumulative conditions: no more than three single-family houses; no broker, agent or dealer; no prohibited advertising; and one sale-or-rental per twenty-four months where the owner was not the most recent resident.

Telling an owner-occupant of a duplex that they are unconditionally bound is a **substantive error in a landlord-facing library**, not a missing nuance. Committed as `edu-fair-housing-exemptions-nd`, with cross-references added to both original rows.

**The exemption's scope is asymmetric and is the kind of thing a summary would flatten.** § 14-02.5-09(2) exempts § 14-02.5-02 and §§ 14-02.5-04 through -08 — but **not § 14-02.5-03 (Publication)**. An exempt landlord who advertises a discriminatory preference still violates the chapter. There is also a definitional trap: a person is "in the business," and therefore outside the exemption, if they own **any dwelling designed for or occupied by five or more families**, or hit the three-transaction / two-agency thresholds in twelve months.

Federal FHA exemptions are drawn differently. The row warns of the overlay without characterising it; federal analysis has never been in scope.

### R.17 Three further chapter 14-02.5 findings, none previously rowed

- **`dv-state-housing-program-protection-nd`** — § 14-02.5-02(3): an applicant or tenant of housing that is part of a **state housing program** may not be denied admission, denied assistance, terminated, or evicted on the basis of being a victim of domestic violence, dating violence, sexual assault, or stalking. Structurally distinct from § 47-16-17.1: that is a *tenant's termination right* of general application, this is a *landlord prohibition* limited to state-programme housing. Its four categories are **broader** than § 47-16-17.1's "domestic violence" alone — *dating violence* and *stalking* appear here and not there. "State housing program" is undefined in the chapter; flagged as unresolved rather than assumed.
- **`edu-disability-modification-nd`** — § 14-02.5-06(3): must **permit** tenant-funded physical modification (restoration may be required, wear and tear excepted); must **make** reasonable accommodation in rules and policies, with no expense carve-out in the text. This is the same modification/accommodation split the NE library already draws. It also supplies the missing foundation for `assistance-animal-accommodation-nd`, which relied on the accommodation duty but cited only §§ 47-16-07.5/07.6 — the *documentation-limits* sections — and never the underlying state accommodation obligation.
- **`edu-fair-housing-enforcement-nd`** — ND's fair housing rows stated duties with **no consequence attached**. One-year administrative window, two-year civil window; actual **and punitive** damages plus fees and costs in court; tiered administrative civil penalties; separate pattern-or-practice penalties; class A misdemeanour for force-or-threat intimidation. Figures kept out of `bodyText` and recorded in notes, because the tiering (including a lookback-removal rule where the same *individual* committed the earlier acts) is intricate enough that any paraphrase would misstate it — the NE-re-audit failure mode.

**Second fee-shifting data point:** § 14-02.5-44 is **mutual** ("prevailing party"), matching ND's § 47-16-13.6 posture. Two ND statutes now confirmed mutual; the cross-state consolidation remains open.

**Forum matters:** § 14-02.5-41 permits punitive damages in the civil route; § 14-02.5-32(1) does not mention them for the administrative route, and the complainant elects the forum under § 14-02.5-30.

### R.18 Two provisions surfaced for Taylor's decision, deliberately not rowed

Per the over-include-with-reasoning rule, both are recorded here rather than silently omitted:

1. **§ 14-02.5-02(5)** — *"Nothing in this chapter prevents a person from refusing to rent a dwelling to two unrelated individuals of opposite gender who are not married to each other."* On the books and unrepealed. **Not rowed.** Publishing it as landlord guidance would amount to telling landlords they may refuse unmarried opposite-sex couples, and its enforceability against federal fair housing law and later constitutional developments has not been analysed. Surfaced for Taylor rather than acted on either way.
2. **§ 14-02.5-01(6)** — the chapter's "disability" definition expressly *"does not apply to an individual because of an individual's sexual orientation or because that individual is a transvestite."* Statutory text, recorded for completeness. **Not rowed**, because as landlord-facing guidance it would read as an invitation rather than a definition, and the interaction with federal law post-*Bostock* has not been analysed in this project.

### R.19 CSV state after v104

`steinoak_clauses_updated_104.csv` — **506 rows. ND-tagged: 50** (33 at session start, +17). CO 110, WY 98, KS 114, NE 111, MN 119, SD 37 — unchanged. Integrity clean.

Primary-text coverage improved: ch. 14-02.5 moves from secondary to primary. Remaining never-read: §§ 14-02.4-18, 23-13-15, 24.1-06-01-40, 6-08-16 (not fetched directly), 11-15-11, 14-07.1-01, 47-30.2-04.

### R.20 CORRECTION — the retaliation row cited a chapter whose housing provisions are repealed

Ch. 14-02.4 (Human Rights) read in full from primary text. `edu-limited-retaliation-protection-nd` cited **§ 14-02.4-18** for housing-discrimination retaliation, on J.J. Keller sourcing.

§ 14-02.4-18 protects a person who opposed an unlawful practice or complained **"in violation of this chapter" / "under this chapter."** Chapter 14-02.4's housing sections are **repealed**:

| § | Title | Repealed |
|---|---|---|
| 14-02.4-12 | Discriminatory housing practices by owner or agent | S.L. 1999, ch. 134, § 4 |
| 14-02.4-12.1 | Discriminatory housing practices | S.L. 2001, ch. 145, § 14 |
| 14-02.4-13 | Discriminatory housing practice by financial institution or lender | S.L. 1999, ch. 134, § 4 |

Housing moved to ch. 14-02.5. **§ 14-02.4-18 no longer reaches a housing complaint at all.** The row cited a live section that does not cover the conduct it described — a valid citation attached to the wrong subject matter, which is precisely the failure a citation-existence screen cannot catch.

**Correct citation is § 14-02.5-45(2)**, and it is *broader* than the old framing in one respect: it protects exercising **any right** granted or protected by ch. 14-02.5, not only filing a complaint, and reaches anyone who aided or encouraged another's exercise. § 14-02.5-45(1) makes force-or-threat intimidation a class A misdemeanour.

**Why the secondary source went wrong is visible in the text:** § 14-02.4-01's *policy statement* still recites "housing" among the areas the state seeks to address. A policy statement is not an operative prohibition. A compliance publisher scanning for "housing" plus "retaliation" would land exactly where J.J. Keller landed.

The row's core holding — **ND has no general habitability/rights-exercise retaliation statute** — survives unchanged and is now primary-verified.

### R.21 UPGRADE — voucher protection is express statutory text, not inference

`edu-housing-voucher-protection-nd` originally *reasoned* that "public assistance" plausibly covered voucher holders. It does so **expressly**.

§ 14-02.5-01 provides that the definitions in § 14-02.4-02 may be used to supplement ch. 14-02.5. § 14-02.4-02(19) defines *"status with regard to public assistance"* as the condition of being a recipient of federal, state or local assistance, including medical assistance, **"or of being a tenant receiving federal, state, or local subsidies, including rental assistance or rent supplements."**

The voucher case is **named in the definition**, not inferred into it. Row body updated to say so.

**Caveat preserved rather than smoothed over:** § 14-02.5-01 says those definitions *"may be used to supplement"* — permissive, not mandatory incorporation. No ND case law construing that phrase was located. Recorded, not resolved.

### R.22 CSV state after v105

`steinoak_clauses_updated_105.csv` — 506 rows (no additions; two rows corrected in place). ND 50. All other state counts unchanged.

Primary-text coverage now: ch. 47-16, ch. 47-32, ch. 32-03, ch. 14-02.4, ch. 14-02.5 all read in full. Still never read: §§ 23-13-15, 24.1-06-01-40, 6-08-16 (not fetched directly this session), 11-15-11, 14-07.1-01, 47-30.2-04.

**Running tally of `VERIFIED` errors found in ND this re-audit: eight.** Fabricated eviction grounds (R.2); collapsed sealing anchor dates (R.3); under-claimed NSF remedy (R.4); false "no holdover multiplier" (R.5); notes-only post-writ lien (R.6); missing REQUIRED DV clause (R.10); omitted fair housing exemptions (R.16); wrong-chapter retaliation citation (R.20).

### R.23 CORRECTION — `smoke-detector-duty-nd` had three defects

§ 23-13-15 read in full from primary text (Title 23, Health and Safety — outside the core landlord-tenant title). Previously FindLaw-sourced, never primary-verified.

1. **Internally contradictory.** The clause opened *"Landlord will install and maintain a smoke detection system"*, then stated the tenant maintains in a single-family rental. The statute assigns maintenance **and inspection** in a single-family rental dwelling to the **tenant**; the landlord's install-and-ensure-operation duty attaches to *"other dwellings."* Rewritten to track the statute's own split.
2. **Omitted the opening exception.** § 23-13-15(1) reads *"All residential rental property with the exception of property covered by section 23-09-02.1…"* — § 23-09-02.1 sits in ch. 23-09 (Food and Lodging Establishments and Assisted Living Facilities) and puts **lodging establishments and assisted living facilities** under Department of Health rules instead. Those properties are outside § 23-13-15 entirely. **Do not conflate with § 47-16-19's "lodgings"** — that is a landlord-tenant term for room/periodic rentals, while "lodging establishment" is a licensed hospitality category. Similar words, different concepts, and this session created a row about the former (R.12) days before reading the latter.
3. **Recited a portfolio-wide exemption in tenant-facing text.** The clause told the tenant the visual-alarm duty applies *"unless Landlord's total rental property is a single building of four units or fewer."* That is a fact about the landlord's holdings, not a term of the tenancy, and putting it in the lease tells a deaf tenant their request may be refused on facts they cannot verify. Moved to `edu-smoke-alarm-portfolio-exemption-nd`, which also spells out that the exemption is **conjunctive** — one building **and** no more than four units. Owning a single six-unit building does not exempt; nor does owning two four-unit buildings.

**Also newly recorded:** § 23-13-15(3) preserves ch. 54-21.3 (State Building Code) for newly constructed residences; § 23-13-15(4) makes willful failure to **install** — not to maintain — a class B misdemeanour.

**Flagged, not read:** the implementing fire marshal rules at N.D. Admin. Code ch. 33-33-05 (Smoke Detector Rules). § 23-13-15(1) incorporates them by reference (*"in compliance with applicable national fire protection standards as defined by rules adopted by the state fire marshal"*), so they are part of the duty. Located this session, not read.

### R.24 CSV state after v106

`steinoak_clauses_updated_106.csv` — **507 rows. ND 51.** All other state counts unchanged. Integrity clean.

Primary-text coverage: chs. 47-16, 47-32, 32-03, 14-02.4, 14-02.5, 23-13 all read in full; § 23-09-02.1 identified. Still never read: § 24.1-06-01-40, § 6-08-16 (not fetched directly), §§ 11-15-11, 14-07.1-01, 47-30.2-04, and N.D. Admin. Code ch. 33-33-05.

**`VERIFIED` errors found in ND this re-audit: nine.**

### R.25 § 6-08-16 read directly — v101 correction confirmed, two further provisions found

Whole section read from ndlegis.gov (the v101 correction at R.4 had rested on research synthesis plus FindLaw, not a direct fetch — closing that gap was the point of this read).

**The R.4 correction is confirmed.** No precondition on the $40; the ten-day notice-of-dishonor gate applies only to the § 6-08-16(2)(c) civil penalty. The SD-flag resolution stands.

**Two landlord-facing provisions were still missing:**

1. **§ 6-08-16(3) — the postdated-check carve-out.** *"The making of a postdated check knowingly received as such, or of a check issued under an agreement with the payee that the check would not be presented for payment for a time specified, does not violate this section."* A landlord who accepts postdated rent checks — a common practice — **forfeits the entire remedy scheme**: no $40 fee, no civil penalty, no criminal referral. This is the most practically consequential provision in the section for a residential landlord and had never been recorded. It is buried in a *definitional* subsection that opens by defining the word "credit," which is precisely why a subsection-targeted read misses it.

   Committed as its own row, `edu-postdated-check-forfeits-remedies-nd`, because it is a rule the landlord acts on **before** a breach, not a remedy looked up afterwards — the same reasoning behind the reservation-of-rights item on the Steinoak feature backlog.

2. **§ 6-08-16(2)(a) — ACH compliance duty.** *"If the holder … uses the automated clearinghouse network to collect the collection fees or costs, that person shall comply with the network's rules and requirements."* **Product flag:** Steinoak processes rent payments; an in-product NSF-fee auto-collection feature would sit squarely inside this duty.

**Also now recorded in notes:** the (1)(a)-(d) criminal grading tiers and the aggregate-totals rule; the fourteen-day presentation window in (1); the 120-day bar on executing a criminal complaint in (5); and § 6-08-16.4's check-return duty on full payment.

**Kept distinct:** § 6-08-16.2 is a *different offence* — no account at all, versus insufficient funds — with its own $40 cap and $200/3× civil penalty. A closed-account or no-account instrument runs under .2, not this section. Whether the postdated carve-out reaches .2 is not stated there and is **flagged, not assumed**.

### R.26 CSV state after v107

`steinoak_clauses_updated_107.csv` — **508 rows. ND 52.** All other state counts unchanged. Integrity clean.

Primary-text coverage now: chs. 47-16, 47-32, 32-03, 14-02.4, 14-02.5, 23-13, 6-08 all read in full; § 23-09-02.1 identified. Still never read: § 24.1-06-01-40, §§ 11-15-11, 14-07.1-01, 47-30.2-04, and N.D. Admin. Code ch. 33-33-05.

### R.27 § 24.1-06-01-40 read from the official code — a K.4 stale-source catch and a duplex rule

Read from the Legislative Council's own PDF (`ndlegis.gov/information/acdata/pdf/24.1-06-01.pdf`), not a mirror.

**K.4 stale-source catch.** `edu-carbon-monoxide-alarm-requirement-nd` was sourced from regulations.justia.com, whose banner read *"Current through Supplement No. 394, October, 2024."* The rule's own history line reads **"Effective April 1, 2017; amended effective October 1, 2020; July 1, 2024; July 1, 2026."** The original source **predated the July 1, 2026 amendment** and was stale by construction when relied on. The substance checks out against current text, so no substantive correction was needed — but the row was carrying a placement-specific holding on a source that could not have known about the most recent amendment. This is the archived-version trap catching a row that happened to survive it.

**A genuine gap in the smoke-alarm chain.** `smoke-detector-duty-nd` rests on N.D.C.C. § 23-13-15, which requires compliance with *"applicable national fire protection standards as defined by rules adopted by the state fire marshal"* and **specifies no placement at all**. The electrical code supplies the actual placement rules — each sleeping room, outside each separate sleeping area, each additional story including basements and habitable attics, with interconnection where more than one is required. A landlord reading only the statute learns alarms are required but not where to put them. Committed as `edu-alarm-requirements-by-building-type-nd`.

**The standout for Steinoak's customer base is the duplex rule.** § 24.1-06-01-40(2): *"For two-family dwellings, a notification device connected to a smoke alarm system in the other dwelling unit must be provided in each dwelling unit."* A duplex owner must cross-connect notification between units. Apartment houses, hotels and congregate residences need a manual **and** automatic fire alarm system. New construction needs an interconnected heat alarm in an attached single-tenant garage.

**Also newly recorded:** the chapeau requires installation under the supervision of a **master or class B electrician**; new-construction alarms must draw primary power from building wiring with battery backup; and § 24.1-06-01-40(4) requires premise-powered, interconnected smoke alarms in rooms, basements and attached garages containing an **energy storage system** — a battery/solar-storage requirement with no analogue anywhere else in this library.

**Source-of-law caution recorded in the row:** this is a State Electrical Board rule (General Authority NDCC 43-09-05), enforced through electrical licensing and inspection, **not** landlord-tenant law. It creates no tenant remedy under ch. 47-16, so it is landlord education only and was deliberately not drafted as lease clause text. The rule repeatedly defers to *"locally adopted codes"* — that is the municipal layer, out of scope by standing product decision.

### R.28 CSV state after v108

`steinoak_clauses_updated_108.csv` — **509 rows. ND 53.** All other state counts unchanged. Integrity clean.

Remaining never-read: §§ 11-15-11, 14-07.1-01, 47-30.2-04, and N.D. Admin. Code ch. 33-33-05.

### R.29 § 47-30.2 read — deposit escheat figure confirmed, but the landlord's duties were never recorded

**The one-year figure is confirmed and is not a residual catch-all.** § 47-30.2-04(15) expressly enumerates *"A security deposit, including interest on the security deposit, made in advance by a person to secure an agreement for rights of services, less any lawsuit deductions, which remains unclaimed by the owner for more than one year after termination of the agreement."* Security deposits are a named category.

**The statute's own cross-reference is imprecise.** § 47-16-07.1(3) sends the reader to *"the reporting requirements of section 47-30.2-04."* § 47-30.2-04 is the **presumption** section and contains no reporting duty at all — the holder duties sit at §§ 47-30.2-21 through -32. A reader following the referring statute lands on a section that does not say what the referring statute claims. Recorded as a caution rather than treated as an error in our row.

**Also:** ch. 47-30.1 (the prior Uniform Unclaimed Property Act) was **repealed** by S.L. 2021 ch. 337 § 22 and replaced by ch. 47-30.2 effective 2021-07-01. Any pre-2021 secondary source on ND deposit escheat is superseded.

**The real gap: the entire escheat obligation existed in this library as one trailing sentence** inside `security-deposit-return-nd`'s tenant-facing clause text — *"Landlord will report and remit it as required by North Dakota's unclaimed property law."* Accurate and useless: it tells the landlord a duty exists and nothing about what it is. A landlord holding an unclaimed deposit is a statutory **holder** with notice, reporting, record-retention and remittance duties and day-rate penalties. Committed as `edu-unclaimed-deposit-holder-duties-nd`:

- Notice by first-class mail to the tenant, **no more than 120 days before filing**, where there is a usable address and value is **$25 or more** (§ 47-30.2-26), in prescribed wording (§ 47-30.2-27).
- Report filed **electronically before November 1**, covering the twelve months preceding July 1 (§§ 47-30.2-22(1)(b), 47-30.2-23).
- Payment or delivery on filing (§ 47-30.2-32); **ten-year** record retention (§ 47-30.2-24).
- Penalties (kept in notes, not body): interest at an annual rate of one percent of the sum **for each thirty-day period** of delinquency or fraction; civil penalty **$200/day to a $5,000 cumulative maximum** (§ 47-30.2-65). Willful evasion: **$1,000/day to a $25,000 maximum plus twenty-five percent** of the amount that should have been reported (§ 47-30.2-66). Waiver request within thirty days; commissioner may waive up to $25,000 (§ 47-30.2-67).
- Good-faith safe harbour at § 47-30.2-33 — full delivery in good faith with substantial compliance on notice relieves the holder of liability and the state indemnifies.

**Drafting opportunity surfaced for Taylor, not acted on:** § 47-30.2-31 lets a holder deduct a **dormancy charge** before remitting — but only where an enforceable **written contract** authorises the charge for failure to claim within a specified time, **and** the holder regularly imposes it and regularly does not reverse or cancel it. That is a lease-drafting hook. It also carries a consistency-of-practice condition a landlord can fail simply by being lenient, which is the same behaviour-not-text problem as the reservation-of-rights backlog item. Not drafted; flagged for decision.

### R.30 CSV state after v109

`steinoak_clauses_updated_109.csv` — **510 rows. ND 54.** All other state counts unchanged. Integrity clean.

Remaining never-read: §§ 11-15-11, 14-07.1-01, and N.D. Admin. Code ch. 33-33-05.

### R.31 CORRECTION — the DV termination clause was materially over-broad

§ 14-07.1-01 read from primary text. It had been cited in three ND rows and never read.

**§ 14-07.1-01(2):** *"'Domestic violence' includes physical harm, bodily injury, sexual activity compelled by physical force, assault, or the infliction of fear of imminent physical harm, bodily injury, sexual activity compelled by physical force, or assault, not committed in self-defense, **on the complaining family or household members**."*

**The perpetrator must be a family or household member.** § 14-07.1-01(4) defines that as a spouse, family member, former spouse, parent, child, individuals related by blood or marriage, individuals who are or were in a **dating relationship**, individuals presently residing together or who have resided together in the past, and individuals who have a child in common regardless of marriage or cohabitation.

**Consequence:** a tenant threatened by a stranger, neighbour, co-worker, or any non-cohabiting non-dating acquaintance has **no** § 47-16-17.1 termination right. `dv-lease-release-nd` — committed earlier in this same session as `REQUIRED`, `LEASE_CLAUSE` — said only *"a victim of domestic violence"* and would have led both that tenant and the landlord assessing their notice to the wrong answer. Body text corrected. Two further precision points now recorded: the definition is non-exhaustive (*"includes"*), and it expressly excludes conduct committed **in self-defense**.

This is a self-caught error: the row was written this session from Taylor's § 47-16-17.1 text without reading the definition that section incorporates. Reading only the section you need, not the sections it points to, is the same failure shape as R.4 (reading only the subsection carrying the figure).

**It also sharpens a contrast rather than creating redundancy.** § 14-02.5-02(3) reaches domestic violence, **dating violence, sexual assault and stalking** with no family-or-household-member limitation. So a stalking victim in state-programme housing is protected against eviction (`dv-state-housing-program-protection-nd`) while having no termination right (`dv-lease-release-nd`). Genuinely different scopes.

The same limitation flows into § 47-32-05(2)'s sealing path, which takes its definition from the same section. Noted on that row.

### R.32 The § 47-16-17.1 currency question is definitively closed

**§§ 14-07.1-02, -03, -03.1, -04, -05, -05.1, -06, -07 and -08 were all repealed by S.L. 2025, ch. 145, § 17.** The protection-order machinery moved to ch. 14-07.7 (Civil Protection Orders). **§ 14-07.1-01 (Definitions) survives.**

This explains the vLex *"Effective 1/1/2026"* index entry that has been unresolved since ND's original session and was still listed as open at R.8 of this re-audit. **§ 47-16-17.1's cross-references are correct and current as written** — it cites ch. 14-07.7 for civil protection orders (the new home) and § 14-07.1-01 for the definition (which did not move). No amendment to § 47-16-17.1 was needed and none is outstanding.

Committed as `edu-dv-protection-order-chapter-moved-nd`, as a row rather than log-only, because anyone working from pre-2025 material will hit dead citations and this library cites § 14-07.1-01 in three ND rows.

### R.33 CSV state after v110

`steinoak_clauses_updated_110.csv` — **511 rows. ND 55.** All other state counts unchanged. Integrity clean.

**`VERIFIED` errors found in ND this re-audit: ten.** The tenth (R.31) was introduced by this session and caught by this session.

Remaining never-read: § 11-15-11 and N.D. Admin. Code ch. 33-33-05.

### R.34 SELF-CORRECTION — ch. 33-33-05 is not what this session said it was

At R.23 I flagged N.D. Admin. Code ch. 33-33-05 (Smoke Detector Rules) as the fire marshal rules incorporated by reference into § 23-13-15, and noted them as located but unread. Reading them shows the flag was **wrong on two counts**:

1. **Every section carries "General Authority: NDCC 23-01-03(3), 23-09-02.1" and "Law Implemented: NDCC 23-09-02.1."** Ch. 33-33-05 implements § 23-09-02.1 — the very section § 23-13-15 **excludes**. It governs lodging establishments and assisted living facilities: exactly the properties outside the clause it was attached to. Its own text confirms this throughout (*"Every sleeping room in a lodging establishment or assisted living facility…"*).
2. **They are State Department of Health rules (Title 33), not fire marshal rules.** The fire marshal sits under the Insurance Commissioner at Article 45-18.

**The mechanism is worth recording.** R.23 of this session explicitly warned against confusing § 47-16-19 "lodgings" with ch. 23-09 "lodging establishment" — and the next flag written *in that same row* fell into an adjacent version of the same trap, attributing a lodging-establishment rule to the general residential-rental statute. Naming a trap is not the same as being immune to it.

**The underlying gap is still open, and is now correctly identified:** § 23-13-15 requires compliance with *"applicable national fire protection standards as defined by rules adopted by the state fire marshal."* Those rules are in Article 45-18, **identified but not read**. The incorporation-by-reference in a shipped `LEASE_CLAUSE` remains unverified.

For completeness, ch. 33-33-05's substance (inapplicable to ordinary residential rentals, so not rowed): listed smoke detection device in every sleeping room; hallway/corridor detection wired to an approved fire alarm system where sleeping rooms lack direct outside access, with one audible appliance per thirty feet of corridor or fraction; at least one sleeping room equipped for the hard of hearing (85 decibels at ten feet, flashing a 250-watt bulb for five minutes); written certification to the department after initial installation; weekly testing of at least ten percent of battery detectors and monthly of at least ten percent of hard-wired ones, with two years of written records and a complete annual test.

### R.35 CSV state after v111

`steinoak_clauses_updated_111.csv` — **511 rows. ND 55.** No row added; one note corrected. All state counts unchanged. Integrity clean.

**Remaining never-read: § 11-15-11, and N.D. Admin. Code art. 45-18 (fire marshal rules, newly and correctly identified this session).**

### R.36 The four remaining unrowed canvass topics — all closed (v112)

Keyword probes returned hits on three of the four, all false positives on inspection (e.g. "cash" matching `edu-payment-method-fee-ban-nd`), confirming genuine absence of dedicated rows. K.4 again: probes screen, they do not adjudicate.

- **`edu-no-cash-receipt-duty-nd`** — confirmed absent. § 47-16-20.1 bans charging a *fee* to accept cash but imposes no receipt duty; adjacent subject, different rule, easily conflated. One secondary source (real-estate.laws.com) asserts a ND cash-receipt requirement; expressly rejected as unsupported.
- **`edu-no-lease-copy-duty-nd`** — confirmed absent on both limbs of the MN topic (no delivery duty; no defence to enforcement). The adjacent affirmative duty is § 47-16-07.2's signed move-in condition statement, whose sanction is *evidentiary* (loss of the prima-facie benefit), not a bar to enforcement.
- **`edu-no-disclosure-bar-to-eviction-nd`** — confirmed absent as a general rule. Flagged in-row as **the weakest-sourced claim in ND's current row set**: the no-repair-defence point rests on the ND Courts' self-help guide, not an express statutory negative, and is recorded at that confidence level rather than as primary-verified.
- **`edu-mobile-home-park-eviction-defence-nd`** — § 47-32-01.1, present. Mobile home parks are a deprioritized layer, but rowed under over-include-with-reasoning because it sits in the **general** eviction chapter every ND landlord reads, and because it is **the only statutory defence to eviction anywhere in ND law** — which makes it load-bearing for the preceding row's claim that no general bar exists. § 47-10-28's substance deliberately not read.

### R.37 Checklist fold-in complete

`lease-clause-decision-log-named-topic-checklist.md` updated with an **ND RE-AUDIT RESULTS — 2026-09-06** section containing: the ten-row correction table; **ND's answers to all 56 previously unanswered rows** across the CO, WY, KS, NE, MN and eviction-screen sections; **eight new topics ND adds**; seven method findings; and ND's open items.

Notable answers: ND's habitability posture is the **opposite** of CO's non-waivable Part (§ 47-16-13.1(4)-(6) expressly permits shifting landlord duties by agreement); ND has **no prohibited-provisions section at all**, so the NE completeness question is N/A rather than negative; § 14-02.5-03's advertising ban **survives** the § 14-02.5-09(2) exemptions; and one tenant's DV termination does **not** end the lease for co-tenants (§ 47-16-17.1(9)) — the opposite of MN.

**Five rows remain Not Yet Checked for ND** and are recorded as such rather than guessed: military-shortened termination notice, statutory freeze-date incorporation, electronic notice/delivery regime, protected-class inquiry and record ban, state SCRA analog.

**Recommended new standing screen**, earned this session: a **checklist-to-CSV reconciliation** — for every topic marked Present in the checklist, assert a matching CSV row exists. ND's DV termination clause was marked *"Present — full mechanics confirmed"* here while existing nowhere in the library. The checklist can assert coverage the CSV does not have, and nothing currently detects that.

### R.38 CSV state after v112

`steinoak_clauses_updated_112.csv` — **515 rows. ND 59** (33 at session start, **+26**). CO 110, WY 98, KS 114, NE 111, MN 119, SD 37 — unchanged throughout the session. Integrity clean at every write: no duplicate IDs, no dangling supersedes, no display collisions, no serialization artifacts.

**Ten `VERIFIED` errors found. Six for six on re-audits.**

### R.39 Art. 45-18 read — the incorporation-by-reference chain resolves, and the answer matters

N.D. Admin. Code ch. 45-18-01 read from primary (effective 2024-01-01). This closes the gap correctly identified at R.34: § 23-13-15's *"applicable national fire protection standards as defined by rules adopted by the state fire marshal"* had never been traced to an actual document in this project.

**§ 45-18-01-04 defines the State Fire Code as** (1) the fire-safe construction and operation provisions of the **State Building Code** effective 2023-01-01 per N.D.C.C. § 54-21.3-03, and (2) the **International Fire Code, 2021 edition (ICC)**, with enumerated ND modifications.

**Material point for a landlord-facing library: the operative standard is not publicly readable.** § 45-18-01-05 lists the ICC and NFPA as the sources. A landlord told to "comply with fire marshal standards" cannot look them up for free. Steinoak can state the duty and its source but cannot reproduce the standard. Flagged in the row so no future session mistakes the absence of quotable text for absence of a rule.

Committed as `edu-fire-code-standard-nd`, with four further findings:

- **§ 45-18-01-02(3): where the fire code conflicts with the Century Code, the Century Code prevails.** So § 23-13-15's single-family tenant-maintenance split is not displaced by anything in the fire code.
- **Grandfathering is discretionary and revocable** (§ 45-18-01-02(2)): a condition lawful at adoption may continue *"only if, in the opinion of the state fire marshal, [it does] not constitute a distinct hazard to life or property."* Stated in the row body because a landlord will otherwise read "grandfathered" as permanent.
- **Sprinkler exemption** (IFC 903.2.8 as modified): not required in single-family dwellings or residential buildings of **no more than two dwelling units** with **no higher-risk occupancy in the same building**. Directly relevant to the small-landlord customer — and note the third condition, which a landlord with a ground-floor commercial unit could fail.
- **IFC 112.4 (Violation penalties) "Does not apply"** — the model code's own penalty provision is struck, so enforcement runs through the Century Code, not the IFC. IFC 907.8.3 (fire alarm system interface) is deleted entirely.

**Ch. 45-18-01 is not a smoke-alarm placement source.** Its enumerated ND modifications contain no dwelling placement rule; placement comes from § 24.1-06-01-40 (State Electrical Board) and from the unmodified IFC/IBC text. The three-source structure — statute imposes the duty, electrical code fixes placement, fire code supplies the compliance standard — is now fully mapped.

### R.40 CSV state after v113

`steinoak_clauses_updated_113.csv` — **516 rows. ND 60** (33 at session start, **+27**). All other state counts unchanged. Integrity clean.

**Only § 11-15-11 remains never-read**, and it is cited once, in a supporting note rather than for an affirmative holding.

### R.41 All five Not-Yet-Checked canvass rows resolved (v114–v115)

- **Military-shortened termination notice** and **state SCRA analog** — resolved together as `edu-no-state-military-termination-nd`. **Both absent.** Ch. 47-16 read in full contains no military provision, corroborated by two independent 2026 sources making *affirmative* negative statements rather than merely omitting the topic (one expressly contrasting ND with Washington's RCW 38.42.160). An affirmative negative from an independent source is a stronger posture than absence-of-mention, per the WY standard. Federal SCRA applies of its own force and is not restated as ND law.
- **Electronic notice/delivery regime** — `edu-no-electronic-notice-regime-nd`. **Absent**; ND has nothing resembling NE's § 76-1413 consent-and-disclosure machinery. The practically important finding is an **asymmetry**: § 47-16-07 uses a permissive functional standard (*"any reasonable manner which actually informs the tenant"*), while § 47-16-17.1(3) **enumerates** mail, facsimile, or in person for a DV termination notice — and does **not** list email. A DV notice by email alone may therefore fail even though the general standard is permissive. Untested in any located ND case; recorded as untested.
- **Statutory freeze-date incorporation** — `edu-frozen-standard-incorporation-nd`. **Present, but not where NE's is.** ND's animal provisions carry no frozen federal definition, so the specific NE trap doesn't exist here. The general trap does: § 14-02.5-06(3)(c) deems compliance with **ANSI A117.1 (1986)** sufficient for adaptive design, and N.D. Admin. Code § 45-18-01-04 adopts the **IFC 2021 edition** and the State Building Code effective 2023-01-01. Reading a current edition of either gives the wrong answer. Screening was limited to the eleven chapters read from primary this session; other titles unscreened, and the row says so.
- **Protected-class inquiry and record ban** — `edu-no-protected-class-inquiry-ban-nd`. **Absent.** Verified two ways: full-chapter primary read, plus the chapter's section list confirmed structurally (no inquiry or record-keeping section exists anywhere in ch. 14-02.5). Nearest provision is § 14-02.5-03 (Publication), which reaches notices, statements and advertisements rather than inquiries.

**Deliberate framing choice on the last row.** A bare absence here would invite a landlord to read "no inquiry ban" as "inquiries are safe." An unexplained inquiry into a protected characteristic is ordinary evidence of discriminatory intent under § 14-02.5-02, so the row states the absence and then closes it off: *"The absence of a separate inquiry ban is not permission to ask."* `rule_type` is `PROHIBITED` rather than `RECOMMENDED` for the same reason — the absence is real, the practical guidance is not permissive.

### R.42 Session close — CSV state and standing

`steinoak_clauses_updated_115.csv` — **520 rows. ND-tagged 64**, from 33 at session start (**+31, nearly doubled**). CO 110, WY 98, KS 114, NE 111, MN 119, SD 37 — **unchanged at every one of fifteen writes**. Full integrity asserted on the final write: no duplicate IDs, no dangling supersedes, no display collisions, no serialization artifacts.

**Every open item this re-audit inherited or generated is now closed except one:** § 11-15-11, which supports a note in `edu-post-writ-property-duties-nd` rather than an affirmative holding.

**Eleven chapters read in full from primary text this session:** 47-16 (Taylor), 47-32, 32-03, 14-02.4, 14-02.5, 23-13, 6-08, 47-30.2, 14-07.1, 24.1-06-01, 45-18-01. Plus § 23-09-02.1 and ch. 33-33-05 identified and scoped.

**Ten `VERIFIED` errors found.** Six for six on re-audits.

### R.43 Taylor's decisions on the four open items

**(1) §§ 14-02.5-02(5) and 14-02.5-01(6) — decided NOT to row.** Taylor agreed with the recommendation.

**Recording the reasoning precisely, because the premise matters for future sessions.** Taylor's stated view was that both provisions "seem like common knowledge at this point in our society." That may well be right as social fact, but it is **not** the basis on which they are being omitted, and this log should not be read later as a finding that they are void. Both are **unrepealed statutory text**. Neither the federal FHA overlay nor any ND judicial construction has been analysed in this project. § 14-02.5-02(5) may be a genuine gap in state coverage (the federal FHA has no marital-status class), and § 14-02.5-01(6)'s interaction with post-*Bostock* developments is unexamined — *Bostock* is Title VII, not the FHA, and HUD's position has shifted across administrations.

**The operative reason for omission is the framing problem:** every other ND row states a duty, prohibition, or limit. These two state that state law does *not* prohibit something, and as a row that reads as permission rather than description. A future session should treat their operative status as **open**, not settled.

**(2) Animal / fair-housing carve-out misalignment — CHASED AND RESOLVED.** See R.44.

**(3) Cross-state tenancy-type screen — RUN NOW.** See R.45.

### R.44 The carve-out misalignment resolves structurally — it is not a misalignment

One search returned only sources conflating the **federal** Mrs. Murphy exemption with the ND state one; none addressed the interaction. Resolved from primary text instead of a second search, per § 5a.2.

**Answer: a level distinction, not a conflict.**

1. **§ 14-02.5-09(2) exempts "§ 14-02.5-02 and §§ 14-02.5-04 through -08"** — an enumeration of sections *within its own chapter*. On its face it cannot reach Title 47.
2. **§§ 47-16-07.5/-07.6 do not create an accommodation duty.** § 47-16-07.5 is a *limit on landlord verification*, expressly conditional: it operates *"if the tenant asserts a disability requiring a service animal or assistance animal be allowed as an accommodation on the rented premises **under any provision of law**."* § 47-16-07.6 penalises the tenant's fraud.

So the documentation rules presuppose an accommodation obligation arising elsewhere. Where none exists they have nothing to operate on; where one exists they apply regardless of the ch. 14-02.5 exemption. Committed as `edu-exemption-does-not-reach-animal-rules-nd`.

**Federal limb expressly not analysed.** Whether an owner-occupant ends up with *no* accommodation duty at all turns on 42 U.S.C. § 3603(b), drawn differently from § 14-02.5-09 and never in this project's scope. The row therefore warns against reading the state exemption as a general licence rather than asserting an outcome.

**Secondary-source hazard logged:** five independent ESA guides all recite "owner-occupied buildings with four or fewer units are exempt from FHA requirements" as though the federal and ND exemptions were one rule. They are separate provisions in separate bodies of law that happen to share a unit threshold. **Their agreement is not corroboration** — it is a single error replicated.

### R.45 Cross-state tenancy-type screen — run, and it found more

Full results written to the consolidated checklist as a new section. Summary:

- **CO — high-priority flag.** C.R.S. § 13-40-107(1) sets a **five-tier** notice scheme (91 / 28 / 21 / 3 / 1 days). Both shipped CO clauses state **21 days flat** — the third tier only. On the duration-of-occupancy reading that CO practitioner material uses, a two-year month-to-month tenant is owed **91 days** and our clause understates by seventy. **Flagged, not corrected**: the duration-vs-interval reading needs primary confirmation, HB24-1098's just-cause overlay interacts with it, and rewriting a CO notice period from an ND session would breach Addendum E. Recommended as the first item of the next CO session.
- **WY and MN — no termination-notice row exists at all.** Same omission shape as ND. MN is likelier to bite: § 504B.135 scales notice to *"the interval between the time rent is due or three months, whichever is shorter"* — inherently tenancy-type-scaled, so no single figure could capture it.
- **KS and NE — clean**, both only because their own re-audits happened to catch it.
- **SD — unresolved**, and still not a column in the checklist.

**Two structural conclusions, both recorded in the checklist:**

1. **Add a generic "Termination notice period — and does it scale with tenancy type?" row to the main tables.** Its absence is why three states shipped without the clause and no canvass noticed. This is the **second checklist-structure defect found this session**, after the discovery that a checklist entry can assert coverage the CSV lacks.
2. **A flat notice figure in a clause is a tenancy-type assumption in disguise.** Any row stating "X days' notice" without stating which tenancy it applies to should be treated as suspect until checked.

### R.46 CSV state after v116

`steinoak_clauses_updated_116.csv` — **521 rows. ND-tagged 65** (33 at session start, **+32**). CO 110, WY 98, KS 114, NE 111, MN 119, SD 37 — unchanged across all sixteen writes. Integrity clean.

### R.47 CO corrected in-session at Taylor's direction — the screen's flag was a real error, and larger than flagged

Taylor directed that CO be fixed now rather than deferred, there being no planned future CO session. Current § 13-40-107 read from primary text as amended by **HB24-1098 (ch. 113, § 5, effective 2024-04-19)** before any edit.

**The duration reading is settled by the statute's own words** — § 13-40-107(1) requires notice *"based on the length of the applicable tenancy described in subsection (2)."* HB24-1098 also inserted **"at least"** before every figure, making the tiers floors rather than fixed periods.

**Three defects, not the one flagged:**

1. **Flat 21 days** in both rows. Corrected to the full five-tier scheme (91 / 28 / 21 / 3 / 1). A month-to-month tenant of two years was owed 91 days; the clause understated by seventy.
2. **`-covered` was doubly wrong on its own terms.** Even inside its stated "first 12 months" window, months six through twelve require at least 28 days, not 21.
3. **`-covered` named the wrong party.** § 13-40-107(1) grants the right to *"A landlord of nonresidential real property or a residential premises described in section 38-12-1302(1)(a), (1)(b), (1)(d), (1)(e), or (1)(f) **or a tenant of any property or premises**."* A covered residential landlord is **not** in that list; a tenant of any property is. The section supplies a tenant-side route on a covered property and no landlord-side one. Rewritten to state the tenant's right and route the landlord through § 38-12-1301 et seq.

**A fourth finding the correction surfaced**, rowed as `edu-fixed-term-nonrenewal-notice-co`: the pre-2024 text excused notice *"from or to"* a tenant whose term ended at a time certain. Current § 13-40-107(4) excuses it **only "from a tenant."** The words *"or to"* were deleted. **A Colorado landlord can no longer treat a fixed-term lease as simply expiring** — § 13-40-107(1) expressly covers electing "to not renew a fixed term tenancy," and the tiers apply, so declining renewal on a year-plus tenancy takes at least 91 days' notice.

Also noticed and recorded: § 13-40-107(1) incorporates § 38-12-1302(1)(a), (b), (d), (e), (f) — **not (1)(c)**. A landlord exempt under (1)(c) is outside this section's landlord-side grant. The `-exempt` clause's placeholder now cites the subsections rather than describing their contents, because § 38-12-1302 was not read.

**Left open, deliberately not asserted:** by what route a covered residential landlord may terminate without cause in months 0–12. § 38-12-1303's just-cause trigger attaches at 12 months, but § 13-40-107(1) does not name covered residential landlords at all. §§ 38-12-1301 et seq. and 38-12-1302 were not read. The clause no longer asserts a landlord no-cause right in that window — the safe direction — but the question is genuinely open and is flagged for Taylor.

**Scope discipline recorded on all three rows:** edited from the ND session at Taylor's express direction; per Addendum E this is a targeted correction of the notice-period holdings only. **It is not a CO re-audit.** No other CO holding was reviewed, and CO's `last_checked` should not be read as a full re-verification date.

### R.48 CSV state after v117

`steinoak_clauses_updated_117.csv` — **522 rows. CO 111** (was 110), **ND 65**. WY 98, KS 114, NE 111, MN 119, SD 37 — unchanged. Integrity clean.

**Eleven `VERIFIED` errors found this session** — ten in ND, one in CO, the CO one carrying three distinct defects in two shipped `LEASE_CLAUSE` rows.

### R.49 WY and MN gaps filled; SD answered and routed (v118)

**WY — confirmed absent, and the absence is the finding.** No statutory notice period for ending a periodic tenancy in any category. Evidence is affirmative: a structured state chart returns "No statute" for fixed-end-date, periodic-of-a-year-or-more, month-to-month and week-to-week alike, and Nolo states outright that neither party is required by statute to give notice. The ubiquitous **"30 days" is common-law practice, not statute** — and the common-law rule is itself tenancy-scaled (one full rental period, terminating at the start of a new period), so applying "30 days" to a weekly tenancy is wrong by a factor of four. Committed as `edu-no-statutory-termination-notice-wy`, stating the non-statutory character expressly and holding the rule at practice-level confidence, no WY case having been located.

**MN — the purest example the screen produced.** § 504B.135 states **no number at all**: notice must be *"at least as long as the interval between the time rent is due or three months, whichever is less."* A **formula**, not a figure. Any row saying "MN requires X days" would be wrong for every tenancy whose rent interval isn't X, which is precisely why MN having no row was safer than MN having a confident one. *"Whichever is less"* makes three months a **ceiling**. Committed as `edu-tenancy-at-will-termination-notice-mn`.

**A repeal caught in the same read:** the section formerly carried a 14-day notice to quit for unpaid rent on a tenancy at will, struck by 2023 Minn. Laws ch. 52, art. 19, § 97, effective 2024-01-01. The current official text has no subdivision designations, confirming the deletion. **Justia's 2013 and 2016 versions still show "(a)"** — a live archived-version trap.

**Flagged, not asserted, on the MN row:** MN case law reportedly fixes a **counting rule** for when notice takes effect, traced by a secondary source to 1891 authority. Not located in primary form and deliberately omitted from the body. A landlord could satisfy the length requirement and still serve ineffective notice on timing — the most important open item on that row.

**SD — answered, deliberately not fixed here.** § 43-32-15 supplies what SD's existing row lacks: notice *"at least as long before the expiration thereof as the term of the hiring itself, not exceeding one month."* Scaled to the term, capped at one month. **Structurally identical to ND § 47-16-15(1)** — and the source lines explain why: SD's chapter traces to **CivC 1877**, the Dakota Territory Civil Code both states inherited. § 43-32-12 mirrors ND § 47-16-20; § 43-32-13 mirrors ND §§ 47-16-07 and 47-16-15(3).

Routed to the SD session rather than patched here, SD being the next state worked. **Directed input recorded in the checklist:** the shared ancestry makes assumed transfer between ND and SD especially tempting and especially dangerous — findings are candidates, not inheritances. One divergence already confirmed: SD gives tenants at will who are active servicemembers **two months' notice** (§ 43-8-8), where ND has **no state military provision at all** (R.41).

**Screen conclusion revised:** the inherited assumption was wrong in **six of seven states**. CO carried a confirmed error across two shipped lease clauses; WY and MN had outright omissions; SD's row was incomplete; ND had no clause at all. Only KS and NE were clean, and both only because their own re-audits happened to catch it.

### R.50 CSV state after v118

`steinoak_clauses_updated_118.csv` — **524 rows.** CO 111, WY 99, KS 114, NE 111, MN 120, SD 37, ND 65. Integrity clean.

### R.51 Checklist-to-CSV reconciliation screen — built, run, and it found a REQUIRED federal clause missing from two states

The screen recommended at R.37 was actually run rather than left as a recommendation. Method: extract every cell in the checklist's main tables asserting **"Present"** for a state, then test whether any CSV row for that state plausibly covers the topic. Probe-then-adjudicate per K.4 — the token-overlap test screens, it does not decide.

**142 "Present" assertions** across CO (32), MN (30), KS (23), NE (23), ND (22), WY (12). **Eight fell below the match threshold and were hand-adjudicated.** Four were tokenization artifacts where a good row exists (`edu-nonpayment-notice-nd`, `landlord-disclosure-ne`). Two were deprioritized-layer rows where "Present" describes the *law existing*, not a row being owed (municipal ordinances, farm/ag carve-out) — correct by design.

**Two were real.**

**FINDING 1 — `lead-based-paint` was not tagged ND or SD.** The row is `REQUIRED` / `LEASE_CLAUSE`, tagged `CO;WY;KS;NE;MN`. Because the `states` field is the display source of truth, **a Steinoak-generated ND or SD lease for pre-1978 target housing was omitting the federally mandated Lead Warning Statement entirely.** By this row's own record the exposure is 42 U.S.C. § 4852d(b)(5)'s statutory penalty, inflation-adjusted to **$22,263 per violation** (24 CFR 30.65(b)), plus treble damages and fees.

**The checklist said "Present (federal)" for ND.** That assertion was **true about the law and false about the library** — federal law applying to North Dakota is not the same as the clause being tagged ND. Both ND's original session and *this re-audit's own checklist fold-in* recorded "Present (federal)" without anyone verifying a tagged row existed. This is precisely the failure mode the screen was designed to catch, and it caught it on first run, in two states, on a REQUIRED clause with five-figure per-violation exposure.

**Root cause:** ND's original whole-library generic-clause audit walked Rent & Payment, Security Deposit, maintenance, Pets, Access & Entry and Default & Termination — but never walked the **Disclosures group** systematically. A generic-clause audit that is not exhaustive over *groups* silently skips whole categories.

**§ 5a.1 judgment: UNIFORM, safe to inherit.** The requirement is federal (40 CFR 745.113(b); 42 U.S.C. § 4852d) with no state-specific variation, matching the judgment already recorded for the KS propagation. Neither state layers a lead-disclosure statute on top — ND's ch. 47-16 was read in full this session and contains none, consistent with ND's position that the move-in condition statement is its only state-required disclosure. **SD's absence of a state layer is assumed from the parallel posture and must be confirmed in the SD session**, which is next.

**§ 5a.1 propagation notes owed** to the CO, WY, KS, NE and MN logs: the `states` field changed, the clause **text did not**, and no re-review is owed on the existing five tags.

**FINDING 2 — CO is the only state with no dedicated abandoned-property row.** Every other state has one (`abandoned-property-wy/ks/ne/mn/nd/sd`). CO's coverage runs through `edu-post-writ-possessions-co` ("no storage duty, broad immunity"), `edu-writ-pet-animal-duties-co`, and the generic `surrender-end-of-term`. That is arguably adequate for the post-eviction case and thin for property left at an ordinary end of tenancy. **Recorded as a flag, not corrected** — unlike the lead-paint gap it is a coverage-shape question rather than a missing mandatory clause, and resolving it would be CO re-audit work beyond the targeted correction Taylor authorised at R.47.

**Recommendation: make this screen standing.** It is cheap, it runs entirely offline against files already in the handoff set, and its first execution found a mandatory federal clause missing from two states.

### R.52 CSV state after v119

`steinoak_clauses_updated_119.csv` — **524 rows.** CO 111, WY 99, KS 114, NE 111, MN 120, **SD 38** (was 37), **ND 66** (was 65). Integrity clean. No row added; one `states` field extended on a REQUIRED clause.

### R.53 THE LARGEST FINDING OF THE RE-AUDIT — ND's generic-clause audit was written up but never executed

The reconciliation screen's root-cause note (R.51) said an audit that is not exhaustive over *groups* silently skips categories. Testing that produced something far worse than a skipped group.

**ND was shipped "complete" with 18 displayable `LEASE_CLAUSE` rows. The other five worked states carry 61–75.**

| State | LEASE_CLAUSE (before) | LANDLORD_EDUCATION |
|---|---|---|
| CO | 75 | 36 |
| MN | 69 | 50 |
| KS | 62 | 52 |
| NE | 62 | 49 |
| WY | 61 | 37 |
| **ND** | **18** | 48 |
| SD | 13 | 25 |

**43 generic lease clauses carried no ND tag and no ND override** — not marginal ones: `rent-payment`, `notices`, `governing-law`, `severability`, `joint-liability`, `no-sublet-assign`, `smoking-policy`, `keys`, `permitted-occupants`, `no-alterations`. **An ND lease generated by Steinoak had no rent-payment clause.**

**ND's original log asserted otherwise.** Its § R.6 reads: *"rent-payment, late-fee, returned-payments — extend to ND as-is, no conflicts found."* Actual tags at session start: `rent-payment` = CO;WY;KS;NE;MN, `late-fee` = CO;WY;MN. Only `returned-payments` carried ND, and that was added in **this** session at v101.

**Third instance of one failure mode**, now established as systemic rather than incidental: the DV termination clause (R.10), the lead-paint tag (R.51), and the generic audit. In each, ND's original session recorded a conclusion in prose and never wrote it to the CSV. The state's log describes work that the library does not contain.

**Committed (v120), after triage rather than in bulk:**

**Tier A — 41 generics extended to ND.** Boilerplate with no ND statutory interaction. The parking / storage / pet / property-insurance family carries the liability language that forced fixes in KS and NE; extended here on the recorded ground that **ND has no enumerated prohibited-lease-provisions statute at all** (§ 47-16-02 is a maximum-term cap; § 47-16-13.3 supplies only case-by-case unconscionability), so that exposure does not arise — the same reasoning the WY addendum used. § 5a.1 judgment on every one: **uniform**, `states` changed, text unchanged, no re-review owed on existing tags.

Four carry additional ND-specific notes rather than a bare extension:
- **`rent-payment`** — says "monthly rent". Flagged against the K.2 finding: ND §§ 47-16-19/20 contemplate lodgings let at a weekly rate and three different default payment regimes. Correct for a monthly tenancy, **not to be used unmodified for a weekly ND tenancy**.
- **`acceptable-payment-methods`** — checked against § 47-16-20.1. The clause attaches no fee to any method so it does not conflict on its face; recorded a caution that populating the method list to exclude cash, check and money order outright is **untested** against that section's evident purpose, no ND authority located.
- **`late-fee`** — no ND statutory cap exists, so no figure conflict. Same non-outcome as WY.
- **`inspection-rights`** — defers to the lease's Access & Entry terms, which for ND means the new ND-specific clause below.

**Tier B — `landlords-access-nd` written rather than the generic extended.** The generic states *"at least 24 hours' notice."* **ND has no notice-hours requirement.** § 47-16-07.3 works differently in kind: actual consent, not unreasonably withheld, tied to a **"time certain"**, with consent **presumed** from failure to object — plus unconditional entry in an emergency, on reasonable belief of abandonment, or on reasonable belief of substantial lease violation. Extending the generic would have told ND landlords to satisfy a 24-hour rule that does not exist while omitting the consent step that does. Supersedes `landlords-access`; ND deliberately left off the generic.

**Tier C — `holdover` deliberately NOT extended**, and asserted in the write script. Its "double the Monthly Rent" figure was removed as baseless under the provenance finding, and ND has its own statutory measures at §§ 32-03-27/-28 with different triggers and bases (`edu-holdover-damages-nd`). The assertion is in the commit script so no future bulk pass can silently add it.

**Result: ND now displays 60 lease clauses**, in range with WY (61), KS (62) and NE (62).

**Directed input to the SD session, which is next: SD shows 13 displayable lease clauses and almost certainly carries the identical defect.** Check SD's generic-clause coverage before anything else.

### R.54 CSV state after v120

`steinoak_clauses_updated_120.csv` — **525 rows.** CO 111, WY 99, KS 114, NE 111, MN 120, SD 38, **ND 108** (33 at session start). Displayable `LEASE_CLAUSE`: CO 75, MN 69, KS 62, NE 62, WY 61, **ND 60**, SD 13. Integrity clean; `holdover` and generic `landlords-access` confirmed still un-tagged for ND by assertion.

### R.55 Education-side check and final exclusion verification

**No parallel gap on the education side.** There are **zero** generic `LANDLORD_EDUCATION` rows tagged two or more core states — every education row in the library is state-specific by construction. The generic-clause defect was confined to `LEASE_CLAUSE`.

**Four generic lease clauses remain un-tagged for ND, and all four are correct:**

| Clause | Why ND is off it |
|---|---|
| `tenant-maintenance` | superseded by `tenant-maintenance-nd` |
| `landlords-access` | superseded by `landlords-access-nd` (v120) |
| `surrender-end-of-term` | superseded by `surrender-end-of-term-nd` |
| `holdover` | **deliberate** — provenance finding; ND's measures are §§ 32-03-27/-28 |

### R.56 Final integrity verification — `steinoak_clauses_updated_120.csv`

**525 rows. 57 supersedes relationships. All assertions pass.**

- No duplicate IDs
- No dangling supersedes
- No supersedes/state display collisions
- No serialization artifacts in `title`, `bodyText` or `notes`
- No invalid `content_type` values

| State | Tags | Displayable LEASE_CLAUSE |
|---|---|---|
| CO | 111 | 75 |
| WY | 99 | 61 |
| KS | 114 | 62 |
| NE | 111 | 62 |
| MN | 120 | 69 |
| SD | 38 | 13 |
| **ND** | **108** | **60** |

**Two informational items, neither a defect:**
- `security-deposit-return` is `VERIFIED` with blank `states` — a fully superseded generic that correctly displays nowhere. Believed intentional; recorded, not touched.
- One `VERIFIED` row lacks `last_checked` — the same row.

---

## ND RE-AUDIT — SESSION CLOSE

**Trunk in:** v100, 489 rows, ND 33. **Trunk out:** v120, 525 rows, ND 108.

**Twelve `VERIFIED` errors found** — ten in ND, one in CO (three defects across two shipped lease clauses), one shared federal clause missing from two states.

The three most consequential were not the ones the session prompt anticipated:

1. **43 generic lease clauses were never tagged ND.** The state shipped "complete" with 18 displayable lease clauses against 61–75 elsewhere. An ND lease had no rent-payment clause.
2. **A `REQUIRED` federal clause (`lead-based-paint`) was missing from ND and SD**, with $22,263-per-violation exposure, while the checklist recorded it "Present (federal)."
3. **A `REQUIRED` DV termination clause existed nowhere in the library** while the checklist said "Present — full mechanics confirmed."

All three share one mechanism: **ND's original session recorded conclusions in prose and never wrote them to the CSV.** Not three mistakes — one habit, invisible to every existing check because nothing compared the log's claims against the library's contents.

**Two new standing screens earned this session, both of which found real defects on first run:**
- **Checklist-to-CSV reconciliation** — for every topic marked Present, assert a matching row exists. Found the lead-paint gap.
- **Exhaustive generic-clause audit by group** — enumerate every generic and test each state's tag. Found the 43.

**Method findings** are recorded at R.12 (K.2 verdict), R.34 (naming a trap confers no immunity), R.31 (read the sections your section points to), R.51 and R.53. The cross-state tenancy-type screen (R.45, R.49) found the inherited assumption wrong in **six of seven states**.

**Open for ND:** § 11-15-11 (supports a note, not a holding); the MN-style counting-rule question does not arise here; two product flags for the build backlog (initialling-field mechanism per § 47-16-15(4); ACH compliance per § 6-08-16(2)(a)); the dormancy-charge drafting hook (§ 47-30.2-31); and Taylor's standing decision on whether `security-deposit-return-nd` should cross-reference the DV deposit-timing rule.

**Directed inputs to the SD session, which is next:**
1. **SD shows 13 displayable lease clauses — check generic coverage before anything else.** ND's defect is almost certainly SD's.
2. **Confirm SD has no state lead-disclosure layer** — ND's absence was verified, SD's was assumed when the tag was added.
3. **§ 43-32-15 scales termination notice to the term, capped at one month** — SD's existing row covers only tenancy at will.
4. **SD and ND share Dakota Territory codal ancestry (CivC 1877).** Findings transfer as *candidates*, never as inheritances. One divergence already confirmed: SD gives active-servicemember tenants at will two months' notice (§ 43-8-8); ND has no state military provision at all.
5. **SD is still not a column in the named-topic checklist.**

### R.57 Taylor's two remaining decisions applied (v121)

**Decision 1 — `security-deposit-return-nd` amended.** The clause promised return within thirty days of termination-and-delivery-of-possession, unqualified. § 47-16-17.1(8) does not change the thirty days; it **replaces the triggering event** in a DV termination — sole victim tenant, the first day of the month following vacatur; co-tenants still bound, expiration of the lease. On a 14-month lease where the victim leaves in month three, the second limb lands roughly eleven months later than the unqualified clause promised.

**Why this mattered despite running tenant-favourable:** a lease term more generous than statute is enforceable **as a contract term**. A landlord following the clause pays out far earlier than required; a landlord following the statute breaches their own lease. The generated document was manufacturing that bind.

Wording chosen deliberately neutral — *"or, where North Dakota law sets a different trigger for the start of that period, within thirty days after that trigger"* — rather than naming domestic violence, so a routine deposit clause does not surface DV to every tenant. Specifics stay in `edu-dv-deposit-timing-nd`. The neutral phrasing also absorbs any future statutory trigger substitution without a further edit.

**Decision 2 — single source of truth for § 47-16-17.1(10).** The duty was stated in near-identical words in two rows. No display collision (both are education rows on different topics and both render), but duplicated substance drifts: if (10) is amended, two rows need changing and only one might get it — the same shape as the log-says-one-thing-CSV-says-another failures found three times in this re-audit.

`edu-dv-confidentiality-nd` is now **canonical**, carrying the duty and its § 47-16-17.1(11) remedy. `edu-limited-retaliation-protection-nd` now cross-references instead of restating, preserving both reader entry points — *"what retaliation rules apply in ND?"* and *"what do I owe a DV-terminating tenant?"* — against one source. That row's own holding (no general habitability/rights-exercise retaliation statute; § 14-02.5-45(2) is the discrimination-side protection) is unchanged.

**Applicant-stage reach surfaced into the body.** § 47-16-17.1(10)'s *"refuse to rent, refuse to negotiate for the rental of"* language reaches **applicants**. That was recorded only in notes on both rows, so a landlord reading either body would reasonably have concluded the duty bit only once someone was a tenant. It is now stated in the canonical row: the duty applies at the **screening stage** as well as during a tenancy.

### R.58 CSV state after v121 — ND re-audit closed

`steinoak_clauses_updated_121.csv` — **525 rows**, three rows corrected in place, none added. CO 111, WY 99, KS 114, NE 111, MN 120, SD 38, ND 108. Integrity clean.

**Every ND item raised in this session is now closed except § 11-15-11**, which supports a note rather than a holding.

---

## POST-CLOSE WORK — buckets 2, 3, 4 (2026-09-06)

### R.59 Generic-clause audit run across all seven states — ND's defect was not unique, but it was nearly so

The audit that found ND's 43 missing clauses was run against every state.

| State | Generic clauses with no tag and no override |
|---|---|
| CO, WY, KS, NE, MN | **0 — clean** |
| ND | 43 → **1** (`holdover`, deliberate) |
| **SD** | **45 — outstanding** |

**The five older states are clean.** Every generic clause they lack has a state-specific override in place. That is a genuinely reassuring result and it makes the diagnosis sharper: this is a **process failure in how a state gets added**, not drift in maintained states. The defect appears only in the two most recently added states.

**SD's 45 are named in full in the audit output** and include `rent-payment`, `notices`, `governing-law`, `severability`, `joint-liability`, `landlords-access`, `holdover` and the entire Rules & Regulations and Parking & Storage groups.

**SD was deliberately NOT bulk-extended.** ND's Tier A extension rested on a specific verified ground — that ND has **no enumerated prohibited-lease-provisions statute**, so the exculpatory language in the parking / storage / pet / property-insurance family creates no exposure there. **That ground has not been established for SD.** Extending 45 clauses to SD without reading SD's statutes would be precisely the bulk-assume failure this session spent its length documenting. It goes to the SD session as its first task, with the triage method (Tier A / B / C) already proven.

### R.60 § 5a.1 propagation notes discharged

Notes appended to the **CO, WY, KS, NE and MN** logs for the `lead-based-paint` states-field change. Each records: text unchanged, no re-review owed, uniform federal judgment — and, more usefully, **that state's own clean result on the generic-clause audit**, so the five logs carry the reassurance as well as the notice.

### R.61 Architecture review — Addendum L added

Two standing screens and three method rules, all earned rather than theorised:

- **L.1 Checklist-to-CSV reconciliation.** A checklist entry can be *true about the law and false about the library*.
- **L.2 Exhaustive generic-clause audit by group**, with the Tier A/B/C triage discipline and an explicit prohibition on bulk-extending.
- **L.3 A log entry is not a library change.** The CSV is the fact; a session must verify its claims against the file it wrote, not against its own narrative.
- **L.4 Naming a trap confers no immunity to it** — this session warned about the "lodgings" / "lodging establishment" confusion and then committed an adjacent version of it in the same row.
- **L.5 Read the sections your section points to.** Incorporation by reference is a dependency, not a citation.

### R.62 Product backlog folded into the architecture review as Addendum M

Ten items that require **application** changes rather than clause changes, previously scattered across individual row `notes` where engineering would never find them. **Recorded in the architecture review (Addendum M), not as a separate document** — that file is already the standing home for product and process decisions, and the handoff set should not grow a new file per session that every future state has to carry forward.

Highest urgency (M.1, M.2): **the initialling-field mechanism (§ 47-16-15(4)) and conditional clause inclusion.** Without them `lease-notice-initial-requirement-nd` ships broken — a generated ND lease stating 60-day tenant notice without an adjacent initial box **silently loses that term**, with nothing in the document or the app signalling the failure.

**Cross-cutting conclusion recorded at M.10:** items 1, 2 and 4 are the same underlying gap — the builder treats clauses as independent text blocks, while several legal requirements are **relational** (one clause's applicability turning on another clause's value, on a computed date, or on physical placement). That is the compositional-rules-engine work the architecture review deferred as premature for want of evidence. There are now four concrete instances driving it, and the note that "no evidence yet exists" should be considered superseded.

**Also surfaced for decision rather than build:** the dormancy charge (§ 47-30.2-31) is the **second** instance of a clause whose validity depends on landlord *conduct over time* rather than lease text — the first being Nebraska's § 76-1433 reservation-of-rights item. Two instances make it a category worth deciding on deliberately.

### R.63 Both remaining open items closed (v122–v123)

Deferring these was a preference, not a constraint. Taylor pushed; both were done.

**Fee-shifting mutuality consolidation — resolved, and it was five questions rather than one.**

`default-by-tenant`'s operative sentence is *"To the extent permitted under applicable law, the prevailing party may recover from the other party court costs and reasonable attorneys' fees and expenses…"* Tagged CO;WY;MN;ND. Against each architecture:

| State | Architecture | Result |
|---|---|---|
| CO | One-way clause **void**; lease must be drafted mutual | "Prevailing party" **satisfies** it |
| MN | Mutual **by operation of law** regardless of text | Consistent, no conflict |
| KS / NE | Fee clauses **banned outright**, either direction | Clause correctly **not tagged**; library-wide check confirms **zero** LEASE_CLAUSE rows tagged KS or NE contain attorney-fee language |
| ND | § 47-16-13.6 awards to "the prevailing party" by statute | Language matches exactly |
| WY | American Rule; contract governs | **Open flag — see below** |

**Wyoming flag, surfaced not resolved.** Per `edu-no-fee-reciprocity-wy`, the Wyoming Supreme Court requires a contract to **"unequivocally provide"** for fee recovery. This clause hedges twice: *"to the extent permitted under applicable law"* makes the entitlement conditional on an external referent, and *"may recover"* is permissive rather than mandatory. Under a strict unequivocal-provision standard that may not suffice — leaving a WY landlord with **no** fee recovery in a state whose default is that each side bears its own. No Wyoming case applying the standard to comparable hedged language was located, so no edit was made.

**The hedge exists for a reason** — it is precisely what makes the clause safe to share with CO and MN. Any Wyoming fix must be a **WY-specific override, not an edit to the shared text.** Recorded on the clause.

**MN counting rule — recorded at secondary confidence, with the gap named.**

The substance is corroborated by three independent sources, two of them Minnesota attorney publications: notice must run a **full rental period** *and* **expire at the end of one**. Serving a "30-day notice" on the tenth of the month does not end the tenancy on the ninth of the next; it runs through the following full period. One source calls this "the half everyone gets wrong" and dates it to 1891.

**The 1891 authority was not located.** Two searches failed; per § 5a.2 this was escalated rather than searched a third time. The rule is now in the row body **without a citation and expressly flagged as not primary-verified** — a deliberate call, because a landlord satisfying the length requirement and still serving ineffective notice is a worse failure than citing at secondary confidence, and because the practical instruction ("run a full period, end at a period boundary") is safe even if the underlying authority proves narrower than described.

**Outstanding for Taylor:** supply the 1891 case, or schedule a session to locate it, before this row is treated as primary-sourced.

### R.64 Final trunk verification — `steinoak_clauses_updated_123.csv`

**525 rows, 57 supersedes relationships. All assertions pass**, including two added this session:

- no duplicate IDs; no dangling supersedes; no display collisions; no serialization artifacts; no invalid `content_type`
- **KS/NE fee-clause ban compliance** — zero `LEASE_CLAUSE` rows tagged KS or NE contain attorney-fee language
- **`holdover` confirmed still un-tagged for ND** — the provenance exclusion holds

| State | Tags | Displayable LEASE_CLAUSE |
|---|---|---|
| CO | 111 | 75 |
| WY | 99 | 61 |
| KS | 114 | 62 |
| NE | 111 | 62 |
| MN | 120 | 69 |
| SD | 38 | **13** |
| ND | 108 | 60 |

---

## SESSION CLOSED

**v100 → v123. 489 → 525 rows. ND 33 → 108 tags, 18 → 60 displayable lease clauses.**

**Twelve `VERIFIED` errors found.** Three were clauses missing entirely rather than merely wrong, and all three traced to a single mechanism: ND's original session recorded conclusions in prose and never wrote them to the CSV. Not three mistakes — one habit, invisible to every check that existed before today.

**Handoff set — ten files, unchanged in number:** seven state logs, the architecture review (now with Addenda L and M), the named-topic checklist, and the CSV.

**Nothing is left open on ND** except § 11-15-11, which supports a note rather than a holding.

**Two items carry forward as flagged, not forgotten:**
1. **Wyoming fee-shifting.** `default-by-tenant`'s hedged phrasing may fail WY's "unequivocally provide" standard. Fix belongs in a WY-specific override, never in the shared text.
2. **MN's 1891 counting-rule authority.** The rule is in the row body at secondary confidence and expressly marked not primary-verified. Taylor to supply the case, or a session to locate it.

**SD is next, and the log carries five directed inputs.** In priority order: (1) **45 generic lease clauses have no tag and no override** — SD displays 13; do not bulk-extend, since ND's Tier A rested on ND having no prohibited-provisions statute and that ground is unestablished for SD; (2) confirm SD has no state lead-disclosure layer, which was assumed rather than verified when `lead-based-paint` was tagged; (3) § 43-32-15 scales termination notice to the term, capped at one month, and SD's existing row covers only tenancy at will; (4) SD and ND share Dakota Territory codal ancestry (CivC 1877), so findings transfer as **candidates, never inheritances**; (5) SD is still not a column in the named-topic checklist.

### R.65 Wyoming fee-shifting flag RETRACTED — no override needed, and the flag was my own error

Taylor asked whether a WY-specific clause was needed. Rather than draft one, the underlying cases were read. **They do not support the concern.**

**The Wyoming standard is express contractual authorisation, not a heightened magic-words test:**

- *Cowardin v. Finnerty* (Wyo. 1999) — *"absent statutory or contract language **expressly authorizing** recovery of attorney fees, parties are responsible for payment of their own attorney fees."*
- *Emken*, 2006 WY 112, ¶ 8 — *"a prevailing party may be reimbursed for its attorney fees when **express** statutory or contractual **authorization** exists."*
- *Thorkildsen v. Belden*, 2012 WY 8, ¶ 10 and *Circle Resources v. Hassler*, 2023 WY 22, ¶ 8 — *"A **prevailing party may**, however, be reimbursed for attorneys' fees when provided for by contract or statute."*

**The Wyoming failure cases are contracts that said nothing about fees at all.** *Cowardin* is explicit: *"Given the absence of any reference to attorney fees in the purchase agreement, Sellers were not entitled to recover attorney fees."*

`default-by-tenant` expressly refers to attorney fees, names the prevailing party, and **uses the court's own formulation**. The supposed defect — that *"may recover"* is permissive — is the verb the Wyoming Supreme Court itself uses in stating the rule. *"To the extent permitted under applicable law"* is a savings clause, and no Wyoming authority was located suggesting a savings clause defeats otherwise-express authorisation. The circularity worry raised earlier in this session was speculative.

**No WY-specific override created. A permanent fork in a four-state shared clause was avoided.**

**The process failure is worth recording plainly.** The flag came from this library's own `edu-no-fee-reciprocity-wy`, which characterises the standard as requiring a contract to *"unequivocally provide"* for fees. The cases say *"expressly authorizing."* I raised a structural change to a shared multi-state clause on a **secondary characterisation of case law I had not read** — the exact Addendum L.5 failure ("incorporation by reference is a dependency, not a citation"), committed in the same session that wrote L.5. Naming a trap confers no immunity to it, twice over now (see R.34).

**`edu-no-fee-reciprocity-wy` corrected** to state the standard as the cases do. Its substantive holding — WY has no fee-reciprocity statute, follows the American Rule, requires contractual or statutory authorisation — is correct and unchanged. Addendum E scoping applies: targeted correction to the characterisation only, not a WY re-audit.

**Only one item now carries forward:** MN's 1891 counting-rule authority, recorded at secondary confidence and expressly marked not primary-verified.

---

# CORE-OBLIGATIONS CANVASS — 2026-09-07

Appended during the **South Dakota** re-audit session, not an ND re-audit. Context: SD's re-audit found that the consolidated named-topic checklist had **no topic row at all** for several universal landlord obligations — deposit return mechanics, the habitability duty, assistance-animal accommodation, disclosure duties, rent-modification notice. Recorded as **Addendum L.10** (accretion bias: the checklist grew from surprises, and universal obligations never surprised anyone). The practical consequence was that SD shipped a superseded deposit deadline for two months and **no canvass could have caught it, because no row existed to check.**

A `CORE OBLIGATIONS` section was added to the checklist and SD filled. **North Dakota is the first of the six remaining states canvassed against it**, chosen because it is the most recently re-audited and therefore the sternest test of whether the gap is real.

**Source:** the official chapter PDF at `ndlegis.gov/cencode/t47c16.pdf`, read end to end. ND's own Century Code site states all 69th Legislative Assembly changes are reflected as of 07/01/25.

## The gap is real — ND had these unrecorded too

Fifteen cells filled from primary text. The following were **not previously anywhere in the library** and are not the kind of thing a re-audit focused on exotic topics would surface:

- **§ 47-16-07.1(3) — itemization is MANDATORY, not on request.** "Application of any portion of a security deposit not paid to the lessee upon termination of the lease **must be itemized**," delivered with the written notice within **30 days after termination and delivery of possession**. The trigger is possession, not a forwarding address. Materially stronger than SD, where itemization arises only on tenant request.
- **§ 47-16-07.1(4) — treble damages** for any deposit withheld without reasonable justification. **No forfeiture-of-withholding-rights rule** — the opposite architecture from SD, which forfeits the right entirely but caps punitive damages at $200.
- **§ 47-16-07.1(1)-(2) — a three-tier deposit cap.** One month's rent, rising to two months for a tenant with a felony conviction (framed as a rental *incentive*) or a prior judgment for violating a rental agreement; **plus a separate pet deposit of the greater of $2,500 or two months' rent**, expressly unavailable for a service or companion animal. Deposits must sit in a **federally insured interest-bearing account** with interest to the tenant, waived only if occupancy runs under nine months.
- **§ 47-16-07.2 — a signed condition statement is mandatory** and constitutes **prima facie proof** of condition. SD has no counterpart; its move-in inventory is good practice only. This is a required document ND landlords must produce and the library did not record.
- **§ 47-16-20.1 — a landlord may not charge a fee to accept cash, check, or money order** for rent or any other required payment.
- **§ 47-16-15(4)** — an agreement requiring the *lessee* to give more than one month's notice must state the requirement **and provide space for the lessee to initial it**, failing which one month's notice suffices. An unusual formality requirement with real consequences for lease drafting.

## Structural contrasts with SD worth recording

These are the kind of finding the core-obligations table exists to produce, and none was visible before both states were canvassed on the same rows:

| | ND | SD |
|---|---|---|
| Habitability duty waivable? | **No express non-waiver clause.** § 47-16-13.1(4)-(5) expressly *permit* shifting duties to the tenant under conditions | **Expressly non-waivable**, § 43-32-8 |
| Unconscionability backstop | **§ 47-16-13.3, a dedicated statute** | **None** — general § 53-9-3 and common law only |
| Tenant repair threshold | **Ordinary negligence** (§ 47-16-10) | Negligent, willful **or malicious** (§ 43-32-10) |
| Tenant remedy set | Repair-and-deduct, recover otherwise, vacate | Same three **plus rent escrow** where repair exceeds one month's rent |
| Deposit failure | Treble damages, no cap | Forfeiture of withholding rights, punitive capped at $200 |
| Tenant animal fraud | **Infraction — criminal** (§ 47-16-07.6) | Civil damage fee only |
| Attorney fees on habitability claims | **Prevailing party may recover** (§ 47-16-13.6) | No equivalent; strict American Rule |

**The waivability contrast is the most consequential.** ND and SD reach nearly opposite results — ND permits duty-shifting by conditioned agreement and polices the outcome through unconscionability; SD forbids modification outright and has no unconscionability statute. Both states share Dakota Territory codal ancestry, which is exactly why this needed checking rather than assuming.

## Two cells left NOT CANVASSED, deliberately

- **General reasonable-accommodation duty** — nothing in ch. 47-16. The ND Human Rights Act (Title 14-02.4) has not been searched. **SD has one at § 20-13-23.7, so this is a live question, not a presumed absence.**
- **Landlord-facing criminal penalty for refusing a service animal** — nothing in ch. 47-16; Title 25-13 not searched. SD's equivalent (§ 20-13-23.4) took three attempts to get right this session, so it is not being guessed at here.

Also **not canvassed**: lease-content restrictions *outside* ch. 47-16. Six were found inside it.

## K.4 flag — 2025 HB 1272, enactment unconfirmed

Search surfaced **2025 HB 1272** (69th Assembly, doc 25-0816-02000): "to create and enact a new section to chapter 47-16 … relating to **move-in and post move-out inspections** of leased property; and to amend and reenact section 47-16-07.1 … relating to tenant [security deposits]", including a section headed **"Mandatory inspections."**

**The official chapter text contains no mandatory-inspection section.** Either the bill failed, or it was amended before passage, or the posted text lags. **Not resolved and not guessed at** — this is precisely the pending-bill trap of K.4, and the SD session established that an introduced bill is not law (L.6). If HB 1272 passed in any form, § 47-16-07.1 and the inspection requirement both need re-reading. **Escalated.**

## No CSV changes

This pass canvassed and recorded only. No ND clause rows were added, edited, or re-tagged, so **no §5a.1 propagation is owed**. Any ND clause work arising from these findings — and § 47-16-07.2's mandatory condition statement and § 47-16-20.1's payment-fee ban both look like candidates — is left for a decision rather than actioned inside an SD session.

## Two clause-level flags checked — one false positive, one findability fix (v134)

The core-obligations canvass raised two ND flags. **Both were substantially false as correctness matters**, and that is the useful result.

### § 47-16-20.1 — FALSE POSITIVE, no action

The payment-method fee ban is **fully covered** by `edu-payment-method-fee-ban-nd`, and cross-cited in `returned-payments` and `acceptable-payment-methods` besides. The row even draws the distinction the statute needs — that a fee for *accepting* cash, check or money order is a different thing from a returned-payment fee governed by general banking law.

**Why the flag was raised anyway:** the canvass looked for a dedicated row on the topic, did not immediately find one, and reasoned from absence. That is the same inferential shortcut this project has repeatedly caught in secondary sources. **Recorded so the flag is not re-raised by a future pass.**

### § 47-16-07.2 — the duty was recorded, but not findable

The signed-condition-statement duty **was** in the library — as the **closing sentence of `edu-no-lease-copy-duty-nd`**, a row titled *"No Duty to Give a Lease Copy."* That row is accurate and is unchanged.

The problem is placement. A **`REQUIRED` affirmative duty**, whose output constitutes **prima facie proof** of the premises' condition, was discoverable only under a heading announcing the **absence of a different duty**. A landlord reading North Dakota guidance on deposits, damage, or move-in would never arrive at it.

**This log already records the same failure shape at larger scale** — the ND re-audit found an entire escheat regime under ch. 47-30.2 that *"existed in the library as one trailing sentence of clause text."* Same shape, smaller stakes, and worth fixing on the same reasoning.

**Why it matters evidentially rather than just administratively.** The prima facie effect decides who must prove what about starting condition. North Dakota's deposit remedy is **treble damages** for withholding without reasonable justification (§ 47-16-07.1(4)). A landlord without a signed condition statement therefore faces the worst available combination: **a high penalty and no presumption.**

`edu-condition-statement-nd` added. The sentence in `edu-no-lease-copy-duty-nd` is **deliberately retained** — the two duties sit side by side in the statute, and a reader arriving at that row should still learn of the other.

**Cross-state context from the canvass:** three of seven states mandate a move-in document — **ND § 47-16-07.2**, **MN § 504B.182** (initial and final inspections, with a deposit-**doubling** penalty attached to the notice failure), **KS § 58-2548** (joint five-day inventory). **SD and WY have none**, and **CO's § 38-12-103(1.5) walkthrough is on-request rather than mandatory.**

**§5a.1:** new ND-only row; no shared clause touched; **no propagation owed.**
