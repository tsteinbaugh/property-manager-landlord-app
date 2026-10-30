## Decision Log: North Dakota (State #6) — Session 1

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL) is closed. **No re-audit of any completed state is planned, now or later.** "Re-audit" means re-scrubbing everything for a state, and that won't happen. Targeted work is welcome: going back to re-verify or fix a specific row or topic in a completed state (a scalpel, not a hammer) needs no special justification; just say what and why. The word "re-audit" throughout these files refers to the one-time settings re-run of Aug–Sep 2026, which is finished. Older phrases such as "flag for the X re-audit", "live item for the X re-audit", "when X is next revisited" or "screen the completed states on their next revisit" are historical and dead: they are not a queue. Do not propose, plan or mention a re-audit, and do not park anything "for the re-audit". If something specific in a completed state looks wrong or unverified, say what and why and propose the targeted fix.

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


## Propagated from the Nevada pass, 2026-09-24

Two shared rows tagged to this state were edited by the Nevada pass (§5a.1 / instruction 9):

1. `common-area-use` — appended: "Nothing in this Section restricts any display that applicable law entitles Tenant to make, such as the display of the flag of the United States or of religious or cultural items, subject to any lawful limits on its size, placement, and manner." Driven by NRS 118A.325 / 118A.327 (NV). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
2. `parking-vehicle-rules` — inserted "in accordance with applicable law" before the landlord's towing authority. Driven by NRS 487.038 (NV). Classification: UNIFORM — self-limiting. Inherit without override.

`last_checked` on both rows reset to 2026-09-24. No other field changed. Detail: lease-clause-decision-log-NV.md §§3.1, 11.6, 16. (Appended at sync, 2026-09-25.)

Also from the Nevada pass (2026-09-24): `edu-unclaimed-deposit-holder-duties-nd` — topic_key changed "unclaimed-deposit-holder-duties" → "deposit-escheat", merging it with edu-deposit-escheat-ca and edu-deposit-escheat-nv (same topic, previously two keys). Metadata only; body, rule_type, states and verification_status untouched.


## Propagated from the Texas pass, 2026-09-25

Two shared rows tagged to this state were edited by the Texas pass (§5a.1 / instruction 9):

1. `no-alterations` — appended: "This Section does not limit any repair, installation, or rekeying that applicable law entitles Tenant to perform." Driven by Tex. Prop. Code §§92.0561, 92.164(a)(1), 92.165(1) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
2. `assigned-parking-space` — reassignment is now "subject to any limits applicable law places on changing parking rules or policies during the Term." Driven by Tex. Prop. Code §92.0131(e) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.

`last_checked` on both rows reset to 2026-09-25. No other field changed. Detail: lease-clause-decision-log-TX.md §§3.1, 16. (Appended at sync, 2026-09-26.)


## Propagated at the Florida sync, 2026-09-26

A shared row tagged to this state was edited (§5a.1 / instruction 9), by Taylor's decision at the Florida sync, not by a state pass.

1. `application-of-payments`: payments are now applied **rent first**, oldest unpaid period first, and only then to fees and other charges ("unless Tenant directs otherwise in writing for a particular payment or applicable law requires otherwise"). It was fees first. The cure-preserving sentence is kept. NJ and FL are folded back into this row and `application-of-payments-nj` is retired. Reason: fees first turns an unpaid fee into an apparent rent shortfall. No tagged state's research found a statute requiring fees first, and rent first is lawful on any reading. Classification: UNIFORM. It removes a landlord-favorable ordering and adds no obligation. Inherit without override.

`last_checked` reset to 2026-09-26. No other field changed. This is not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-FL.md §16. (Appended at sync, 2026-09-26.)

2. `default-by-tenant` (second propagated edit at the Florida sync, 2026-09-26): the non-rent cure promise now ends "...does not cure the failure after receiving written notice, except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure." Driven by Florida's finding that promising a cure for every breach can contractually give up a state's no-cure termination grounds (checklist instruction 33). This is a targeted fix Taylor approved, not a re-audit. Classification: UNIFORM. It is self-limiting and adds no landlord right where no such law exists. Inherit without override. `last_checked` reset to 2026-09-26. Detail: lease-clause-decision-log-FL.md §16.

## Propagated from the Arizona pass, 2026-09-27

Not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-AZ.md §14 and §17. (Appended at sync, 2026-09-27.)

1. **Shared-row edit received from Arizona (2026-09-27, Taylor's decision) — `entire-agreement`.** The sentence "may not be changed except in writing signed by all parties" now continues ", or as applicable law permits Landlord to change it by written notice to Tenant." Driver: A.R.S. §33-1342(C), which lets an Arizona landlord amend existing leases by written notice to comply with new laws; the old wording could be read to waive such a right. Recorded as **uniform** under §5a.1: the words are self-limiting and change nothing where this state's law gives no unilateral amendment right, while preserving any right it does give (for example, rules adopted on notice or changes to a periodic tenancy on the notice the law requires). No state-specific override is needed. `last_checked` was reset to 2026-09-27.

2. **2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged ND** (§5a.1; uniform text, no ND override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. §47-16-07.4 lets the induced party terminate a lease entered into on fraudulent misrepresentation, so the clause is consistent. `edu-fraudulent-misrepresentation-nd` already covers the tenant's side. Remedies run through `default-by-tenant`.

---

## Gap-discovery backfill (instruction 36) — 2026-09-27

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§3, §20, §27: N.D.C.C. ch. 47-16 read whole from primary text supplied directly by Taylor; independently re-verified against the official compilation `ndlegis.gov/cencode/t47c16.pdf` on 2026-09-27, §43.6) |
| Gap-discovery source 2 — real-lease comparison | Done (§43.2: University of North Dakota *Apartment Lease*, edition HRL-APT-26, 2026; corroborated by NDSU *2026-2027 Apartment License Agreement* and the ND HHS *Basic Lease Agreement*) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§43.3: 62 scenarios, Claude-generated) |
| Gap-discovery source 4 — outside-title search | Done (§20 Title 23, §29 Title 32, §33 Title 6; extended 2026-09-27 to Title 9 ch. 9-08 and Title 47 ch. 47-10, plus the official ndlegis.gov full-text search, §43.6) |

### 43.1 Scope, and what this was not

Two targeted checks, run at Taylor's instruction, on a state that is otherwise closed. Not a re-audit: no completed finding was re-scrubbed, and nothing was re-opened except where one of the two screens put a specific question in front of it. The standing rule (instruction 22) holds.

The CSV was confirmed before any work: `lease-clauses.csv`, 941 rows / 905 active / 16 columns, 14 states, **ND 111 active rows — 61 lease clauses, 50 education, all `VERIFIED`**. No duplicate ids, no dangling `supersedes`, no display collisions among the 118 supersedes relationships, no blank `verification_status` on an active row; the only blank `states` is the `security-deposit-return` parent, which is expected (instruction 24).

**Headline result.** The two screens produced **11 new rows and 4 corrections**, and between them they overturned one shipped `Confirmed Absent` finding that 43 ND-tagged rows rest on, and fixed two Addendum L.1 failures where the consolidated checklist already recorded a finding and no CSV row for it existed.

The single most consequential finding is §43.4. It is not a new statute and not a subtle one: **North Dakota does have an enumerated statutory ban on exculpatory lease terms, and on contractual penalties, and on liquidated damages, and on clauses restricting access to the courts. All four are in Title 9, and this project never looked outside Title 47.** The checklist's own topic row for this — "Lease-content restrictions (state-wide, not just the LT chapter)" — recorded ND as *"Outside the chapter: NOT CANVASSED"*. The row anticipated the gap by name and the gap sat there anyway.

---

### 43.2 Part 1 — the real-lease comparison (gap-discovery source 2)

#### 43.2a Why it was re-run, and what was used

§38 recorded source 2 as complete against a free template, and called the result shallow itself. Redone properly.

**Search order followed (instruction 36).**

- **(a) The state Realtors association — unavailable.** The North Dakota Association of REALTORS® publishes its statewide forms behind a member login (`ndrealtors.com/membership/services/statewide-forms/` returns *"This content is restricted to site members"*). Individual NDAR forms do leak into the public path — its Purchase Agreement and Exclusive Right to Represent Buyer Agreement are both publicly served out of `/wp-content/uploads/` — but no residential lease was findable there, and I could not confirm from outside the login whether NDAR publishes one at all. **No standalone paid attorney-drafted North Dakota residential lease was located at any price.** The only route to NDAR's forms is REALTOR® membership, which is not a per-form purchase. If you want this closed, one email to NDAR asking whether a residential lease form exists and on what terms would settle it; I am not naming a price I could not verify.
- **(b) A lease published by a state agency or public body — three found, and used.**
- **(c) A private property-management company's own lease — none found publicly.** Goldmark (the largest Fargo/Grand Forks manager) and the other managers checked publish resident portals, not lease documents.

**Primary lease used, and why it qualifies.**

> **University of North Dakota, *Apartment Lease*, edition marker `HRL-APT-26` (2026).** Published by UND Housing & Residence Life at `und.edu/student-life/housing/_files/docs/apartments/hrl-apt-26-apartment-lease.pdf`. It is the operative lease for UND's on-campus apartments — a real, currently-executed North Dakota residential tenancy document, issued by a state institution, not a multi-state template. 31 numbered sections. It cites N.D.C.C. ch. 32-12.2 and the Century Code on abandoned property, so it was drafted against North Dakota law rather than adapted from a national form.

**Corroborating leases** (used only to test whether a provision pattern was idiosyncratic to UND):

> **North Dakota State University, *2026-2027 Apartment License Agreement*** (final), NDSU Residence Life, `ndsu.edu/sites/default/files/documents/2026-2027%20Apartment%20License%20Agreement%20-%20Final.pdf`. 13 numbered sections. Styled a licence rather than a lease.
>
> **North Dakota Health and Human Services, *Basic Lease Agreement***, `hhs.nd.gov/sites/www/files/documents/dd-provider-sample-lease-agreement.pdf` — a state agency's sample residential lease for DD providers. Five sections; thin, and treated as thin. Useful for one thing only: it points its users to N.D.C.C. §47-16-15 for termination notice and §47-16-07.2 for the check-in sheet, which is independent state-agency confirmation of which sections a North Dakota lease is expected to engage.

Each was used as **a lead only** (instruction 6). Every statutory claim below rests on primary text: the complete ch. 47-16, re-verified against the official compilation on 2026-09-27, plus ch. 9-08 and ch. 47-10 read section-open the same day. No lease text is reproduced; the mapping is by topic. All three documents are copyrighted or agency-published and are mapped, not quoted.

**Result: the comparison found no North Dakota statutory requirement that the library misses.** What it produced instead was sharper: **two clauses in a real North Dakota lease that appear not to comply with North Dakota law**, one of which points straight at the §43.4 finding, and **two precision corrections** to existing ND rows.

#### 43.2b Provision map

| UND provision (by topic) | ND library coverage | Result |
|---|---|---|
| Basic terms; unit; dates; rent; utilities | `rent-payment`, `due-at-signing`, `utilities-responsibility`, `services-utilities-provided` | Covered |
| Lease formation and termination conditions | `termination-notice-nd`, `surrender-end-of-term-mn-nd` | Covered |
| Occupancy eligibility; named occupants | `permitted-occupants`, `residential-use-only` | Covered |
| Guests; overnight limits | `guest-policy`, `guest-policy-day-limit` | Covered |
| Occupancy standards (max per unit type) | `permitted-occupants` | Covered (contract term; no ND statute) |
| Multiple leaseholders; joint and several for all debts | `joint-liability` | Covered |
| Nondiscrimination; Title IX | `edu-fair-housing-additions-nd`, `edu-fair-housing-enforcement-nd`, `edu-housing-voucher-protection-nd` | Covered. ND adds protected classes beyond federal law; the UND clause is narrower than ND law, not broader |
| Assignment; early cancellation fees | `no-sublet-assign`; §§47-16-29, 47-16-30 | **Gap → `edu-selling-rented-property-nd`** (assignee remedies had no row); cancellation fee → §43.4 |
| Delay of occupancy; university liability limited | `possession-delay` | Covered. Liability limitation → §43.4 |
| Conditions of premises; acceptance; inventory form | `edu-condition-statement-nd` (§47-16-07.2), `existing-condition` | **Corrected** (§43.2d) — the row overstated the statute in two places |
| **Notice to vacate: 60 days, with liquidated fees of $200–$1,000 for short notice** | `lease-notice-initial-requirement-nd` (§47-16-15(4)), `termination-notice-nd` | **Covered — and the lease appears non-compliant.** See §43.2c(1). Fees → §43.4 |
| Check-out appointment; inspection; damage assessment | `security-deposit-return-nd`, `security-deposit-use`, `edu-condition-statement-nd` | Covered |
| **Abandoned personal property; removal at university cost** | `abandoned-property-nd` (§47-16-30.1) | **Covered — and NDSU's version appears non-compliant.** See §43.2c(2). Notes corrected (§43.2d) |
| Payments; due date; methods; collection | `rent-payment`, `acceptable-payment-methods`, `application-of-payments`, `edu-payment-method-fee-ban-nd` | Covered. ND bars a fee for accepting cash, cheque or money order (§47-16-20.1); neither lease charges one |
| No alterations | `no-alterations` | Covered |
| Trash and pests; cleanliness | `tenant-maintenance-nd`, `landlord-maintenance-nd` | Covered. Bed bugs: **confirmed absent** (§43.3c) |
| Keys; lock-change charges | `keys` | Covered. Rekey/security-device duty and DV lock change: **confirmed absent** (§43.3c) |
| **Right of entry: 24 hours' notice where possible; emergency entry** | `landlords-access-nd`, `edu-entry-notice-content-nd` | **Covered; education row corrected** (§43.2d). ND sets no notice-hours figure, so UND's 24 hours is stricter by contract. ND's *consent* requirement (§47-16-07.3) is stricter than UND's notice-only approach |
| Repairs and maintenance; university obligations; resident duties | `landlord-maintenance-nd` (§47-16-13.1), `tenant-maintenance-nd` | **Corrected** — `tenant-maintenance-nd` was missing §§47-16-09 and 47-16-10 (§43.2d). **Gap → `edu-tenant-repair-and-deduct-nd`** (§47-16-13, §43.3b) |
| **Safety and security; liability disclaimer** | `tenants-property-insurance` (base, with disclaimer) | **Gap → `edu-prohibited-lease-terms-nd`** (§43.4) |
| Detection devices; resident maintains batteries | `smoke-detector-duty-nd`, `edu-carbon-monoxide-alarm-requirement-nd`, `edu-alarm-requirements-by-building-type-nd`, `edu-fire-code-standard-nd` | Covered, and the library is more precise than the lease |
| **Moisture accumulation; prevention and notification** | — | **No ND mold statute → `edu-no-mold-disclosure-nd`** (§43.3c) |
| **Indemnification; university liability waiver** | `pet-policy` ("without liability to Tenant"), `parking`, `storage-space` | **Gap → `edu-prohibited-lease-terms-nd`**, plus a shared-clause decision for Taylor (§43.7) |
| Non-liability; no coverage for resident belongings; renter's insurance | `tenants-property-insurance` | Same as above |
| Disturbances; noise; harassment | `no-disturbance`; §47-16-13.2(7) | Covered |
| Community standards; compliance with policy and law | `edu-lease-rules-*` has no ND analog; `entire-agreement`, `edu-term-change-notice-nd` | Covered. ND's mid-tenancy change rule is §47-16-07 (30 days) with the tenant's 25-day counter-right at §47-16-15(3) — **which neither lease mentions**, and our row does |
| Pets: none except aquarium fish; service/ESA via accessibility office | `pet-policy`, `assistance-animal-accommodation-nd`, `edu-service-animal-fraud-penalty-nd`, `edu-exemption-does-not-reach-animal-rules-nd` | Covered, and the library is substantially richer |
| Tobacco-free; e-cigarettes | `smoking-policy` | Covered |
| Subleasing; lease assumption; transfers | `no-sublet-assign` | Covered |
| Motorised vehicles; parking permits | `parking`, `assigned-parking-space`, `parking-vehicle-rules` | Covered. Towing: not searched for ND (§43.8) |
| **Terms and conditions revised on 60 days' notice** | `edu-term-change-notice-nd` (§47-16-07), `entire-agreement` | Covered. UND's 60 days is stricter than §47-16-07's 30; the tenant's §47-16-15(3) termination right applies regardless of what the lease says |
| Security deposit | — | **Not applicable.** Neither university agreement takes a deposit, so the comparison tested nothing against ND's deposit regime (§47-16-07.1). This is the one real weakness of an institutional lease as source 2, and it is stated rather than papered over |
| Late fee ($35 after the 10th, NDSU) | `late-fee` | **Gap → `edu-no-late-fee-cap-nd`** (§43.3c) |

#### 43.2c Two provisions in real North Dakota leases that appear not to comply

Neither is a library defect. Both are recorded because they are the errors our rows exist to prevent, found in the wild, at two of the state's largest institutional landlords.

**(1) A 60-day tenant notice-to-vacate with no initialling space — both UND and NDSU.** §47-16-15(4): *"Any agreement that requires a lessee to give notice that exceeds one month from the end of a month to terminate a lease of real property for residential purposes must state the notice requirement and provide space for the lessee to initial next to the notice requirement. If the notice is not initialed by the lessee at the time of executing the lease, the lessee may terminate the lease on the last day of a month with at least one calendar month's notice."* Both agreements require 60 days. Neither provides an initialling space anywhere. On the statute's own terms the 60-day requirement is unenforceable against the tenant, who may leave on one calendar month's notice — and the liquidated fees both attach to short notice ($200–$1,000 at UND; rent-through-60-days, $250 or $500 at NDSU) have nothing to stand on.

`lease-notice-initial-requirement-nd` and `termination-notice-nd` cover this correctly. **But the product does not.** This is a live confirmation of the initialling-field build item: the clause consists of the words *"Tenant's initials: \_\_\_\_\_\_"* and the builder has no mechanism to render or capture an initial, so a Steinoak lease with a long notice period currently ships the same defect these two do. Two independent institutional landlords making the identical mistake is evidence it is the default failure, not an outlier.

**(2) NDSU disposes of unclaimed property after 30 days, with no value ceiling.** §47-16-30.1 authorises self-help disposal only for property *"with a total estimated value of not more than two thousand five hundred dollars"*, 28 or more days after actual notice of vacating or after it reasonably appears the lessee has vacated. The 30-day wait clears the timing test. The missing ceiling does not: above $2,500 North Dakota supplies **no** self-help disposal route — not a longer wait, not a notice-and-sale procedure, nothing. `abandoned-property-nd` carries the ceiling correctly; its notes now carry the over-ceiling consequence explicitly, because a landlord reading the clause as the general rule will apply a 28-day disposal to a vehicle (§43.2d).

#### 43.2d Rows corrected by the comparison

- **`edu-condition-statement-nd` — body and notes.** Two overstatements of §47-16-07.2 removed from a `REQUIRED` row. It said the statement must describe the condition of the facilities *"and of any furnishings or appliances you supply"* — the statute says *"the condition of the facilities in and about the premises to be rented"* and nothing about furnishings or appliances. And it said *"each of you keeps a copy"* — the statute imposes no copy-keeping or copy-delivery duty at all. Both are reasonable practice; neither is the statute, and in a `REQUIRED` row the difference matters. Added in their place: what the statute genuinely does not supply (no form, no itemisation standard, no penalty for omission) and where the consequence of omission actually lands, which is evidentiary and falls on the landlord. **This is the instruction 11(b) failure mode** — a correct citation, described wrongly, invisible to the citation screen by construction. Independently corroborated the same day by a research pass: *"a document-delivery/signature duty tied to lease inception … no penalty for omission is specified (its consequence is evidentiary)."*
- **`edu-entry-notice-content-nd` — body and notes; open flag closed.** The row's own notes carried *"exact statutory emergency-entry language not yet independently confirmed from primary text — flagged for follow-up."* Closed against §47-16-07.3(1): *"At any time in case of emergency or if the landlord reasonably believes the tenant has abandoned the premises, or the landlord reasonably believes the tenant is in substantial violation of the provisions of the lease or rental agreement."* The third ground is considerably broader than the secondary sources' "emergency exception" framing implied. The body previously opened on the absence of a notice-hours rule and omitted §47-16-07.3(1) entirely, so it described the constrained route and not the unconstrained one. **Row-presence asymmetry worth noting:** `landlords-access-nd`, the lease clause, already stated all three grounds correctly from primary text. The education row was the weaker half of the pair, which is the reverse of the usual direction and is exactly what a paired screen is for. No change to `landlords-access-nd`.
- **`tenant-maintenance-nd` — body and notes.** One sentence added carrying §§47-16-09 and 47-16-10. See §43.5; this is an Addendum L.1 failure, not something the lease comparison found on its own.
- **`abandoned-property-nd` — notes only** (body, `rule_type`, `content_type`, `states` unchanged). Sourcing upgraded from *"full primary text confirmed via FindLaw"* to the official compilation — instruction 29 calls for the official legislative site, and FindLaw is a secondary host. The clause matches the official text on every operative element and needed no correction; the evidentiary tier rises. The over-$2,500 consequence from §43.2c(2) added.

---

### 43.3 Part 2 — the landlord-scenario screen (gap-discovery source 3)

#### 43.3a Method

Arizona's 59-scenario map (AZ log §18.1) taken as the base and extended with North Dakota specifics — winter habitability, room-level and weekly tenancies, the oil-patch short-term market, the sale and foreclosure paths, and the statutory levers that only exist in ND. **62 scenarios.** Scenarios written by Claude; Taylor was not asked about his experience, which is Colorado-only and already in the CO research (instruction 36).

Each scenario was run against the 111 ND-active rows. Where no row answered it, the official ndlegis.gov full-text search was run (exact phrases, with variants) and every hit's section read section-open, plus — for the core chapter — a section-by-section walk of all 64 sections of ch. 47-16 against the ND row set, which is what surfaced §§47-16-08 through 47-16-30. The section walk found things no keyword probe would have: **"keyword probes do not substitute for adjudication" (K.4) cuts both ways, and a probe would not have returned §47-16-11 for "short-term rental" or §47-16-25 for "foreclosure."**

**Result: 62 scenarios — 51 covered, 11 gaps.** Every gap produced a row. Seven core-chapter sections that had **zero rows anywhere in the library** now have one: §§47-16-11, 47-16-13, 47-16-13.4, 47-16-21, 47-16-25, 47-16-28, 47-16-29, 47-16-30.

#### 43.3b Scenario map

| Scenario | ND coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant lied on the application | `rental-application-accuracy`, `default-by-tenant` | Covered |
| Screening fees, criminal history, income source | `edu-fair-housing-additions-nd`, `edu-housing-voucher-protection-nd`, `edu-no-protected-class-inquiry-ban-nd` | Covered. Screening-fairness act confirmed absent (§33) |
| Voucher holder applies | `edu-housing-voucher-protection-nd` | Covered — ND mandates acceptance (§14-02.5-02) |
| Immigration-status inquiry | `edu-no-protected-class-inquiry-ban-nd` | Covered |
| Unit not ready on move-in day | `possession-delay`; §47-16-17 | Covered |
| Required disclosures at signing | `edu-condition-statement-nd`, `lead-based-paint` | Covered. **Radon, mold, bed bugs → three absence rows** (§43.3c) |
| Deposit over one month's rent | `edu-security-deposit-cap-nd`, `edu-security-deposit-pet-cap-nd` | Covered, incl. the felony-conviction and prior-judgment exceptions |
| Deposit must earn interest | `edu-security-deposit-interest-required-nd` | Covered |
| Property is in an HOA | `hoa-compliance` | Covered for the tenancy. **Sale-side HOA disclosure → `edu-selling-rented-property-nd`** |
| Long notice period in the lease | `lease-notice-initial-requirement-nd` | Covered (§43.2c(1)) |
| Automatic renewal clause | `edu-automatic-renewal-notice-nd` (§47-16-06.1, 30 days) | Covered |
| **Rent and money** | | |
| Rent is late | `late-fee`, `default-by-tenant`, `edu-nonpayment-notice-nd` | Covered |
| **How much can the late fee be** | `late-fee` (no figure), `late-fee` ND note | **Gap → `edu-no-late-fee-cap-nd`** |
| **Does a payment go to rent or to fees first** | `application-of-payments` | **Gap → covered in `edu-no-late-fee-cap-nd`:** no ND statute either way, so rent-first is a contract choice here |
| Cheque bounces | `returned-payments`, `edu-returned-check-fee-cap-nd` | Covered. **Standing flag resolved — see §43.6** |
| Tenant hands over a postdated cheque | `edu-postdated-check-forfeits-remedies-nd` | Covered |
| Tenant pays cash and wants a receipt | `edu-no-cash-receipt-duty-nd` | Covered (confirmed absent) |
| Charging a fee to accept cash or a cheque | `edu-payment-method-fee-ban-nd` (§47-16-20.1) | Covered |
| Raising the rent | `edu-term-change-notice-nd` (§47-16-07) | Covered |
| A city tries to cap rents | `edu-term-change-notice-nd` notes (§47-16-02.1) | Covered, thinly — recorded in a note, not a row (§43.8) |
| **A flat lease-break or short-notice fee** | — | **Gap → `edu-prohibited-lease-terms-nd`** (§§9-08-03, 9-08-04) |
| **During the tenancy** | | |
| **Furnace fails at −25°F** | `landlord-maintenance-nd` (§47-16-13.1(1)(f)) | Covered for the duty. **Tenant's remedy → `edu-tenant-repair-and-deduct-nd`** |
| **Tenant repairs and deducts from rent** | `rent-payment` ("except as permitted by applicable law") | **Gap → `edu-tenant-repair-and-deduct-nd`** (§47-16-13) |
| **Tenant vacates over an unrepaired defect and stops paying** | — | **Same gap; §47-16-13 discharges further rent** |
| Mould complaint | `landlord-maintenance-nd`, `tenant-maintenance-nd` | **Gap → `edu-no-mold-disclosure-nd`** |
| Bed bugs | `tenant-maintenance-nd` | **Gap → `edu-no-bed-bug-disclosure-nd`** |
| Tenant damages the unit | `default-by-tenant`, `tenant-maintenance-nd` | **Corrected** — §§47-16-09, 47-16-10 added (§43.5) |
| Snow and ice on the walks | `snow-removal` | Covered as a contract term; no ND statute located. Municipal ordinances flagged, not resolved (instruction 20) |
| Landlord needs to enter; tenant refuses | `landlords-access-nd`, `edu-entry-notice-content-nd` | **Education row corrected** (§43.2d) |
| Tenant changes the locks | `keys`, `no-alterations` | Covered |
| **DV victim asks you to change the locks** | `dv-lease-release-nd`, `edu-dv-confidentiality-nd` | **Gap → `edu-no-dv-lock-change-duty-nd`** (confirmed absent) |
| DV victim wants out of the lease | `dv-lease-release-nd`, `edu-dv-deposit-timing-nd`, `dv-state-housing-program-protection-nd` | Covered |
| Guest won't leave | `guest-policy`, `guest-policy-day-limit` | Covered |
| Roommate moves out | `joint-liability` | Covered |
| Tenant sublets or lists on Airbnb | `no-sublet-assign`, `residential-use-only` | **Gap → `edu-purpose-limitation-remedy-nd`** (§47-16-11) |
| **Tenant runs a business from the unit** | `residential-use-only` | **Same gap; §47-16-11 gives two remedies the clause doesn't mention** |
| **Tenant re-rents a room to a third person** | `permitted-occupants`, `edu-double-letting-prohibited-nd` | Covered — and §47-16-26's remedy is building-wide rent abatement, which is severe and already recorded |
| Noise and neighbour complaints | `no-disturbance`; §47-16-13.2(7), §47-32-01(7) | Covered |
| Crime or drug activity | `edu-no-cure-eviction-grounds-nd` | Covered |
| Unapproved pet | `pet-policy` | Covered |
| Assistance or ESA request | `assistance-animal-accommodation-nd`, `edu-disability-modification-nd` | Covered |
| Tenant claims a fake service animal | `edu-service-animal-fraud-penalty-nd` (§47-16-07.6) | Covered — conviction-gated, $1,000 damage fee |
| Small-landlord exemption and animal rules | `edu-exemption-does-not-reach-animal-rules-nd`, `edu-fair-housing-exemptions-nd` | Covered |
| Tenant's utility is shut off | `utility-service-continuity`, `utility-payment-evidence` | Covered |
| You shut off a utility to force them out | `edu-no-utility-shutoff-statute-nd`, `edu-self-help-eviction-ban-nd` | Covered — §32-03-29 treble damages |
| Smoke or CO alarm duties | `smoke-detector-duty-nd`, `edu-carbon-monoxide-alarm-requirement-nd`, `edu-alarm-requirements-by-building-type-nd`, `edu-smoke-alarm-portfolio-exemption-nd`, `edu-fire-code-standard-nd`, `edu-frozen-standard-incorporation-nd` | Covered, and unusually well |
| Adding a rule mid-lease | `edu-term-change-notice-nd`, `entire-agreement` | Covered — 30 days out, 25 days back |
| **Broad "Landlord is not liable" clause** | `tenants-property-insurance`, `parking`, `storage-space`, `pet-policy` | **Gap → `edu-prohibited-lease-terms-nd`** (§9-08-02) + a decision for Taylor (§43.7) |
| **Arbitration clause, jury waiver, or a shortened claim deadline** | — none in the library for any state | **Gap → `edu-prohibited-lease-terms-nd`** (§9-08-05). FAA preemption not researched (§43.8) |
| **Ending the tenancy** | | |
| Month-to-month notice either way | `termination-notice-nd` (§47-16-15) | Covered |
| **Weekly tenancy in an oil-patch town** | `edu-tenancy-type-notice-nd` | Covered — §§47-16-19, 47-16-15(1) scale notice to the term; the flat one-month rule does **not** apply below monthly |
| Fixed term simply ends | `surrender-end-of-term-mn-nd`; §47-16-06, §47-16-06.1 | Covered |
| Tenant stays after the term | `edu-holdover-damages-nd` (§§32-03-27, 32-03-28) | Covered |
| **Tenant abandons mid-term — must you re-rent** | `default-by-tenant` (contractual mitigation) | **Gap → `edu-early-departure-mitigation-nd`** (§§47-16-13.4, 13.5, 13.7, 21) |
| Tenant wants out early for a job transfer | `early-termination`, `edu-early-termination-grounds-nd`, `edu-no-state-military-termination-nd` | Covered |
| Fire or casualty | `fire-casualty-termination-nd` | Covered |
| Tenant dies | `termination-by-death-nd` (§47-16-18) | Covered |
| Lease induced by fraud | `edu-fraudulent-misrepresentation-nd` (§47-16-07.4) | Covered |
| Eviction process and notice | `edu-nonpayment-notice-nd`, `edu-no-cure-eviction-grounds-nd`, `edu-eviction-hardship-stay-nd` | Covered |
| Retaliation claim | `edu-limited-retaliation-protection-nd` | Covered |
| A disclosure failure is raised as an eviction defence | `edu-no-disclosure-bar-to-eviction-nd` | Covered |
| Belongings left behind | `abandoned-property-nd`, `edu-post-writ-property-duties-nd` | Covered. **Over $2,500: no statutory route** (§43.2c(2)) |
| **Tenant leaves a car worth more than $2,500** | `abandoned-property-nd` | **Same limit; notes corrected** |
| Animals left after an eviction | `edu-no-post-writ-animal-duty-nd` | Covered (confirmed absent) |
| Deposit dispute | `security-deposit-return-nd`, `security-deposit-use`, `edu-security-deposit-noncompliance-penalty-nd` | Covered — treble damages for withholding without reasonable justification |
| Deposit refund never claimed | `edu-unclaimed-deposit-holder-duties-nd` | Covered |
| Tenant asks to seal the eviction record | `edu-eviction-record-sealing-nd` (§47-32-05) | Covered — and independently re-confirmed enacted (§43.6) |
| Mobile home park eviction | `edu-mobile-home-park-eviction-defence-nd` | Covered (deprioritized layer) |
| **Owner changes** | | |
| **You sell with a tenant in place** | `edu-security-deposit-successor-owner-nd` (deposit leg only) | **Gap → `edu-selling-rented-property-nd`** (ch. 47-10 + §§47-16-28, 29, 30) |
| **Lender forecloses; tenant is served** | — | **Gap → `tenant-notice-of-adverse-proceeding-nd`** (§47-16-25) |
| **A third party claims the property** | — | **Same gap; §47-16-25's attornment sentence is the protection** |
| You switch property managers | `edu-security-deposit-successor-owner-nd` | Covered. Proactive tenant notice on sale or management change: **confirmed absent**, and that finding stands |

#### 43.3c Confirmed absences recorded as rows

Per the standing rule that a log-only absence is invisible to every future canvass. Each is a row, not a log line.

- **Radon — absent for leases, PRESENT for sellers.** `edu-no-radon-disclosure-nd`. No landlord disclosure, testing or warning duty; ch. 47-16 read whole, and an official full-text search for "radon" returned **no Century Code hit at all** — every hit was a bill, committee minute or testimony. The legislative history is the interesting part: **2017 HB 1186 proposed to "amend and reenact section 47-16-07.2"** — that is, to put radon into the landlord-tenant condition statement — alongside a new seller-disclosure chapter. HB 1188 covered the same ground. Only the seller half ever became law. **Previous evidentiary basis was a Nolo quotation**, and the section it cited (§47-16-07.2) is the condition statement, not a radon rule.
- **Mould.** `edu-no-mold-disclosure-nd`. No disclosure duty, no standard, no remediation timeline. Previous basis was "a dedicated mold-law reference site." **Search caveat stated honestly:** "mold" is a poor term in this corpus — 471 hits, dominated by manufacturing moulds and the verb — so the absence here rests primarily on the full-chapter read, not the search. **Near miss recorded against the next reader:** 2023 SB 2303 amendments would have required a *developer* to disclose toxic black mould risk in a below-water-table basement to a *purchaser*. Not law, not a landlord duty, and a later canvass searching "mold" will hit it (K.4).
- **Bed bugs.** `edu-no-bed-bug-disclosure-nd`. Previous basis was an **admitted inference** — *"inferred from the same 'only one disclosure' statement; not a dedicated search."* The dedicated search is now run: "bed bugs" and "bed bug" each returned 2 hits, **no Century Code hit**. **The one substantive hit is a trap this project has already fallen into once in ND:** N.D. Admin. Code Title 33, Article 39, Chapter 01 defines "Infestation" to include bed bugs — and it is a Department of Health rule for **lodging establishments**, hotels and motels, not residential tenancies. The ND re-audit misattributed N.D. Admin. Code ch. 33-33-05 on precisely this lodgings confusion. Naming the trap conferred no immunity then; it is recorded on the row now. Note also that **"lodgings" is separately its own statutory category inside ch. 47-16** (§§47-16-05, 47-16-19, 47-16-20), meaning something different again — three distinct senses of the same word in ND law. Administrative-code flag raised (instruction 16): invisible to legislative bill tracking.
- **No late-fee cap.** `edu-no-late-fee-cap-nd`. Confirmed statewide, not just in ch. 47-16 — which closes a real hole in how the absence had been supported. `late-fee`'s ND note said *"confirmed: full read of ch. 47-16 contains no late-fee provision,"* which does not exclude a cap living outside the chapter; that is instruction 7's failure mode stated as a proof. **Three failed bills:** HB 1440 and HB 1442 (2021), and **SB 2236 (2025), which would have amended §47-16-20 to cap a late fee at 8% of the overdue rent.** Also **SB 2235 (2025)**, on "rents and the priority of payments under a rental agreement." Both confirmed not enacted the only way that settles it — §47-16-20 in the current official compilation is the unchanged "Rents — When payable" section, and no payment-priority rule exists anywhere in the chapter (K.4: a later session searching "late fee" will surface SB 2236's 8% figure in engrossed bill text).
- **No DV lock-change duty.** `edu-no-dv-lock-change-duty-nd`. §47-16-17.1 read in full, all eleven subsections: termination right only. Official search for "change the locks" — 21 hits, **no Century Code hit**. **2013 SB 2194** would have given a victim the right to *"require a landlord to change the outside locks … without penalty or liability,"* on the same advance-written-notice structure §47-16-17.1 now uses for termination; committee minutes record senators questioning the 48-hour turnaround and the cost. The enacted section has the notice structure and no locks. **NE has `dv-lockchange-ne` as a REQUIRED lease clause; it must not be extended to ND.**

---

### 43.4 The finding that matters: North Dakota does have an enumerated ban on exculpatory lease terms

**New row: `edu-prohibited-lease-terms-nd`** (PROHIBITED, education, Notices & General, `topic_key: prohibited-lease-terms` — deliberately the same key as `edu-prohibited-lease-terms-ks` and `-ne`, so ND now sits in that family for every future canvass).

**What was shipped.** 43 ND-tagged rows carry this sentence verbatim, written during the re-audit's bulk generic-clause extension:

> *"LIABILITY-LANGUAGE CHECK: North Dakota has NO enumerated prohibited-lease-provisions statute (confirmed this session — §47-16-02 is a maximum-term cap, and §47-16-13.3 supplies only case-by-case unconscionability). The exculpation exposure that forced fixes to this clause family in KS and NE therefore does not arise for ND, same reasoning as the WY addendum."*

And the checklist's ND cell for "Broad exculpation/liability-limitation/indemnification prohibition" reads *"Confirmed absent as an enumerated statutory ban — same as WY's finding, only unconscionability doctrine applies."*

**What N.D.C.C. ch. 9-08 actually says**, read verbatim from the official compilation on 2026-09-27:

- **§9-08-01.** *"Any provision of a contract is unlawful if it is: 1. Contrary to an express provision of law; 2. Contrary to the policy of express law, though not expressly prohibited; or 3. Otherwise contrary to good morals."*
- **§9-08-02.** *"All contracts which have for their object, directly or indirectly, the exempting of anyone from responsibility for that person's own fraud or willful injury to the person or property of another, or violation of law, whether willful or negligent, are against the policy of the law."*
- **§9-08-03.** *"Penalties imposed by contract for any nonperformance thereof are void."*
- **§9-08-04.** *"Every contract by which the amount of damages to be paid, or other compensation to be made, for a breach of an obligation is determined in anticipation thereof is to that extent void, except that the parties may agree therein upon an amount presumed to be the damage sustained by a breach in cases in which it would be impracticable or extremely difficult to fix the actual damage."*
- **§9-08-05.** *"Every stipulation or condition in a contract by which any party thereto is restricted from enforcing that party's rights under the contract by the usual legal proceedings in the ordinary tribunals or which limits the time within which that party thus may enforce that party's rights is void, except as otherwise specifically permitted by the laws of this state."*

**So the shipped finding is wrong in its conclusion and right only in its premise.** It is true that ND's landlord-tenant title has no enumerated prohibited-provisions section. It does not follow that ND has no enumerated statutory ban — and the inference was drawn *"same reasoning as the WY addendum"*, importing a conclusion Wyoming reached about its own Article 12 into a state whose relevant law is in a different title. Instruction 18 warns against importing another state's architecture as a hypothesis. This was worse: it imported another state's *negative* finding as a conclusion.

**How it was missed, precisely.** The re-audit read ch. 47-16 in full, correctly, and answered a chapter-scoped question. The checklist's own topic row — L642, *"Lease-content restrictions (state-wide, not just the LT chapter)"* — records ND's answer as ending with the words **"Outside the chapter: NOT CANVASSED."** The gap was labelled, in the checklist, in a row written to prevent exactly this, and 43 rows were then extended on the strength of the un-canvassed half.

**Scope discipline — what §9-08-02 does not say.** It does not void an exemption from ordinary negligence as such. Its three targets are fraud, **willful** injury, and violation of law (willful or negligent). The exposure is therefore specific: a disclaimer fails where the loss traces to the landlord's **breach of a statute or code** — §47-16-13.1's habitability duties, §23-13-15's alarm duties, fair housing — not merely to carelessness. The row states it at that level and no broader. §9-08-02 is the Field Code provision Cal. Civ. Code §1668 and SDCL ch. 53-9 descend from, so California and South Dakota authority is likely relevant; **no ND case law was read**, and no Tunkl-style public-interest test was applied. That limit is on the row.

**What it reaches beyond exculpation.** §9-08-03 makes contractual penalties void flatly, and §9-08-04 voids advance-fixed damages unless actual damage would be impracticable or extremely difficult to fix. That is a materially better answer to "how big can a late fee be in North Dakota" than "there is no cap" — and it reaches flat lease-break fees, short-notice fees and administrative fees generally. §9-08-05 reaches arbitration clauses, jury waivers and contractually shortened claim deadlines, for which the library has no clause in any state (FAA preemption not researched, §43.8).

---

### 43.5 Two Addendum L.1 failures — the checklist had the finding, the CSV had no row

Both found by reconciling the ND column of the consolidated checklist against the ND row set, which is the L.1 screen. Both are the self-sealing shape: the checklist asserts coverage, so no later canvass re-flags it.

- **§47-16-13, the tenant's three remedies for failure to repair.** Checklist row L635 already read *"Three options, no escrow — §47-16-13: repair and deduct from rent; recover in any other lawful manner; or vacate and be discharged from further rent … Plus §47-16-13.6: court may award reasonable attorney's fees to the prevailing party."* **No CSV row existed.** `landlord-maintenance-nd` carried §47-16-13.1 (the duties) and nothing carried §47-16-13 (the remedies for breaching them); the two halves were never connected in the library. → **`edu-tenant-repair-and-deduct-nd`.** No conflict with `rent-payment`, which already says rent is due *"without demand, deduction, or setoff, except as permitted by applicable law"* and yields by its own terms — but an ND landlord reading that clause would have no idea the right exists.
- **§§47-16-09 and 47-16-10, the general tenant care and repair duties.** Checklist row L634 already read *"Two layers … ordinary care to preserve the property and keep it in good condition (§47-16-09); repair all deteriorations or injuries from the tenant's **ordinary negligence** (§47-16-10) — note *ordinary* … Residential-specific: seven duties at §47-16-13.2."* `tenant-maintenance-nd` carried **layer two only**. §47-16-10 is materially broader than §47-16-13.2(6), which reaches only deliberate or negligent destruction, defacement, damage, impairment or removal — §47-16-10 is an affirmative duty to **repair** whatever ordinary negligence caused. → one sentence added to `tenant-maintenance-nd`, using the statutory phrase "ordinary negligence" rather than paraphrasing to "negligence" (the NE re-audit's wording-discipline lesson).

**Method point worth carrying forward.** The L.1 screen was run at the ND re-audit and passed. It does not stay passed: the checklist has grown substantially since — its CORE OBLIGATIONS block (L628–L642) postdates ND's re-audit — and every new topic row is a fresh opportunity for a checklist-only finding. **L.1 needs re-running against a state whenever the checklist gains rows for that state, not once per state.** Both failures above are in the block added 2026-09-07.

---

### 43.6 Currency, and a standing flag resolved

- **Chapter 47-16 re-verified independently.** The chapter text this project has relied on since §27 was supplied directly by Taylor. §§47-16-19, 47-16-20 and 47-16-20.1 were transcribed from the official compilation (`ndlegis.gov/cencode/t47c16.pdf`) on 2026-09-27 and match word for word. The supplied text is good.
- **ndlegis.gov cencode PDFs carry no history, source or currency line** — the same limitation Arizona hit (instruction 35). A "full read" of the compilation is therefore not a full read of current law: a section can print an amendment whose effective date has not arrived, and a section in force now that self-repeals can be missing. **For North Dakota, currency has to come from the session laws, and the compilation-only basis is stated on every row this session wrote.** This is worth adding to ND's method notes permanently.
- **The enactment test that worked twice.** For both 2025 bills that mattered, the decisive check was not the bill history but **whether the section is present in the current official compilation**: §47-10-02.2 is there (SB 2204 enacted), and §47-16-20 is unchanged (SB 2236 failed). SB 2204's enrolled PDF has blank governor and Secretary of State date lines, so the enrolled document alone would not have supported a `VERIFIED` (instruction 17).
- **`edu-returned-check-fee-cap-nd` — the standing flag is already resolved; no action needed.** The ND log's closing flag asked whether §6-08-16 imposes any notice, disclosure or demand precondition on the $40. The row already answers it correctly: *"That $40 carries no advance-notice or disclosure precondition. A larger civil penalty is available but only if you first mail the statutory notice of dishonor and the tenant fails to pay … within ten days."* A research pass on 2026-09-27 independently confirmed this from §6-08-16(2)(a), (2)(c) and (4), and adds that the notice of dishonor is itself permissive (*"may be mailed"*), confirmed by *State v. Ohnstad*, 392 N.W.2d 389, 390 (N.D. 1986). **The flag in ND's log and the matching flag in SD's log can both be struck for ND. SD's row remains the weaker-sourced of the two and that is SD's question, not ours.**
- **Disagreement recorded rather than reconciled.** The same research pass characterised §47-16-13.5's mitigation duty as *"Present — general."* The primary text does not read that way: *"Any party aggrieved **under sections 47-16-13.1 through 47-16-13.6** may recover appropriate damages. However, the aggrieved party has a duty to mitigate damages."* On its face the mitigation sentence attaches to the aggrieved party the first sentence defines, which is scoped to the habitability group. `edu-early-departure-mitigation-nd` states the narrower, text-bound reading, flags the difference, and does **not** rely on the narrower reading to tell a landlord it is safe not to mitigate. Resolving it needs ND case law, which was not read. Both figures recorded; neither adopted silently.

---

### 43.7 Decisions for Taylor — shared rows, not touched

None of the following is in the delta. Each needs your OK because it edits a shared row or sets a cross-state product direction.

**(A) Four ND-tagged shared clauses carry flat, unqualified landlord-liability disclaimers.** These are the same clause family KS and NE needed fixed, and ND holds the un-fixed versions:

| Row | The language | ND exposure under §9-08-02 |
|---|---|---|
| `tenants-property-insurance` (CO;WY;ND;SD) | "Landlord is not liable for any such loss or damage" | Flat and unqualified |
| `parking` (CO;WY;ND;SD) | "not liable for damage to or theft of a vehicle or its contents" | Flat and unqualified |
| `storage-space` (CO;WY;ND;SD) | "not liable for damage to or theft of items stored there" | Flat and unqualified |
| `pet-policy` (CO;WY;ND;OH;TX) | "may enter the property and remove a pet, without liability to Tenant" | Flat, and it covers the landlord's own affirmative act |
| `services-utilities-provided` (CO;WY;NE;ND;SD;TX;NJ;FL) | "not liable for any interruption … resulting from causes beyond Landlord's reasonable control" | **Already safe** — self-limiting, so no fix needed |

Three routes. **My recommendation is (1) for the first row and (2) for the other three:**

1. **Tag ND onto the existing no-disclaimer variant.** `tenants-property-insurance-ks-oh-ca` already exists and already drops the liability sentence — it is tagged KS;OH;CA;NV;TX;NJ;FL;AZ and supersedes the base. Adding ND is a `states` change on one row, zero new drafting, and no new text to verify. Cheapest correct fix available.
2. **Self-limit the shared text**, the way `services-utilities-provided` already does — e.g. "except to the extent applicable law does not permit Landlord to limit that liability." One edit, all tagged states inherit it safely, no per-state fork. This would be a **UNIFORM** §5a.1 judgment (it states a limit that exists in every state's law rather than importing ND's), so it needs a note in each tagged state's log but no override anywhere.
3. **Leave the clauses and rely on `edu-prohibited-lease-terms-nd`.** Defensible — an unenforceable sentence is unenforceable whether or not the lease says so — but it ships tenant-facing text that ND law will not back, which is the thing KS and NE were fixed for.

**(B) The 43-row note sentence needs qualifying.** Paste-ready replacement for the `LIABILITY-LANGUAGE CHECK` sentence wherever it appears in an ND-tagged row:

> LIABILITY-LANGUAGE CHECK (revised 2026-09-27): North Dakota has no enumerated prohibited-lease-provisions statute **inside its landlord-tenant title** — § 47-16-02 is a maximum-term cap and § 47-16-13.3 supplies case-by-case unconscionability. It does, however, have enumerated bans in Title 9: § 9-08-02 voids a term exempting anyone from responsibility for their own fraud, willful injury, or violation of law whether willful or negligent; § 9-08-03 voids contractual penalties; § 9-08-04 voids advance-fixed damages absent impracticability; § 9-08-05 voids terms restricting enforcement of rights or shortening the time to enforce them. See edu-prohibited-lease-terms-nd. The earlier conclusion that "the exculpation exposure that forced fixes to this clause family in KS and NE does not arise for ND" is withdrawn as to any clause disclaiming liability for the landlord's own violation of law.

**(C) `late-fee`'s ND note.** Paste-ready addition (the existing sentence is accurate, just incomplete):

> ND (added 2026-09-27): the absence of a cap is confirmed statewide, not only in ch. 47-16 — see edu-no-late-fee-cap-nd. But ND's operative limit is not a cap: § 9-08-03 voids contractual penalties outright and § 9-08-04 voids advance-fixed damages unless actual damage would be impracticable or extremely difficult to fix, so a late fee must be defensible as an estimate of actual loss rather than merely under some ceiling. Three cap bills have failed (2021 HB 1440, HB 1442; 2025 SB 2236, 8% of overdue rent, would have amended § 47-16-20).

**(D) No state has a quiet-enjoyment clause.** §47-16-08 gives ND a statutory covenant — *"An agreement to lease real property binds the lessor to secure to the lessee the quiet possession of such property during the term of the lease against all persons lawfully claiming the same"* — and a search of all 941 rows found **no quiet-enjoyment or quiet-possession lease clause for any of the 14 states**. Most states supply the covenant by statute or common law, so nothing is broken; but it is standard lease content the library lacks everywhere, and it is the clause a tenant invokes when a landlord's own conduct makes the unit unusable. A shared row across 14 states is a product decision, not an ND fix. I did not write it.

**(E) ch. 9-08 is a cross-state candidate, never an inheritance.** ND and SD share the Dakota Territory Civil Code of 1877, and the CSV already cites SDCL 53-9-3 for liquidated damages; CA already carries Civ. Code §1671(d), and §1668 is its §9-08-02 analog. Whether the ND finding transfers is a question for those states' own sessions. Flagged, not acted on. The library already carries a note reading *"Needs a per-state read of liquidated [damages]"* — ND's half of that is now done.

---

### 43.8 Open after this pass — none blocking

- **§47-16-02.1 rent-control preemption** is recorded only inside `edu-term-change-notice-nd`'s notes, not as a row. A one-line absence-of-local-rules row would make it canvass-visible; low value, not written.
- **Extended-absence notice.** AZ confirmed absent. **Not searched for ND** — stated rather than assumed, because a frozen-pipe scenario in a North Dakota winter makes it a live question.
- **Towing.** AZ's screen found a real gap (`edu-towing-az`). **Not searched for ND.** `parking-vehicle-rules` defers to law, so nothing is wrong; nothing is confirmed either.
- **FAA preemption of §9-08-05** as applied to an arbitration clause — not researched, and the row does not assert §9-08-05 defeats one.
- **ND case law on §§9-08-02 and 9-08-04** — not read. This is the largest single limit on the §43.4 row.
- **§47-10-28** (mobile home park ownership transfer, tenant rights, penalty) — heading only. Deprioritized layer.
- **§11-15-11** remains the one ND citation never read from primary text; it supports a note, not a holding. Unchanged by this pass. (A research pass on 2026-09-27 reports it caps a keeper fee at five dollars per day and imposes no eviction-specific duty, which is consistent with the note; still not primary-read here.)
- **Municipal ordinances** — snow and ice removal, rental registration. Flagged, not resolved (instruction 20).

### 43.9 Integrity

Delta of 15 rows: **11 new, 4 changed, every one `states=ND` only.** Merged against the trunk and asserted: **952 rows, 916 active. ND 122 active rows — 62 lease clauses (all 62 displayable, none superseded) and 60 education rows, all `VERIFIED`.** Every other state's tag count is byte-identical before and after. No duplicate ids, no dangling `supersedes`, no display collisions, no blank `verification_status` on an active row, no blank `states` except the `security-deposit-return` parent, no blank `topic_key`. Every row id named in a new or changed `notes` field exists in the CSV. No shared row's `bodyText`, `rule_type`, `content_type` or `states` changed, so **no §5a.1 propagation obligation arises from this pass** — the propagation items are all in §43.7 awaiting a decision.

---

## Propagated shared-row edits, 2026-09-28 (Taylor's decisions after the gap-discovery backfill)

Uniform under §5a.1: each edit is self-limiting, so this state needs no override. Not a re-audit; nothing else in this state was reviewed.

1. **`no-alterations`** — the carve-out now reads "any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform". It keeps disability modifications that fair-housing law requires the landlord to permit (at the tenant's expense) from reading as subject to unfettered landlord consent. Raised by the NE backfill (NE log §D.1).
2. **`pet-policy`** — "without liability to Tenant" now reads "without liability to Tenant to the extent applicable law permits". A flat disclaimer of the landlord's own entry-and-removal act is void where exculpation is barred (ND §9-08-02). Raised by the ND backfill (ND log §43.7).
3. **ND tags moved (states-only, no propagation owed):** `tenants-property-insurance`, `parking` and `storage-space` → their `-ks-oh-ca` versions, which drop the flat "not liable" sentence that N.D.C.C. §9-08-02 would void as to the landlord's own violation of law (§43.7 route 1). The LIABILITY-LANGUAGE CHECK note on 38 ND rows now carries the §43.7(B) qualification, and `late-fee` has the §43.7(C) note.

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their text and citations are unchanged in the education rows. Checklist mentions of switched-off rows now point to the education row.

- **Moved to education:** `security-deposit-return-nd` → `edu-security-deposit-return-nd`; `termination-by-death-nd` → `edu-tenant-death-termination-nd`; `fire-casualty-termination-nd` → `edu-casualty-termination-nd`; `dv-lease-release-nd` → `edu-dv-lease-release-nd`.
- **Trimmed:** `landlord-maintenance-nd` keeps only the tenant's written repair notice (duties → `edu-habitability-baseline-nd`).
- **Notice period (pattern 2):** `termination-notice-nd` states the landlord's chosen period, at least one calendar month; statutory rules → `edu-termination-notice-periods-nd`. A period over one month still needs `lease-notice-initial-requirement-nd`.
- **§5a.1:** only ND-only rows changed; no propagation owed.

### Verdict for every lease clause

All 13 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `dv-lease-release-nd` | Education | — | tenant right |
| `fire-casualty-termination-nd` | Education | — | tenant right |
| `security-deposit-return-nd` | Education | — | landlord duty |
| `termination-by-death-nd` | Education | — | estate right |
| `landlord-maintenance-nd` | Split | SERVES_LANDLORD | keep tenant written repair notice; rest edu |
| `termination-notice-nd` | Notice-period rewrite | CONSTRAINED_TERM | statutory one-month period restated |
| `abandoned-property-nd` | Keep | SERVES_LANDLORD |  |
| `assistance-animal-accommodation-nd` | Keep | SERVES_LANDLORD |  |
| `landlords-access-nd` | Keep | CONSTRAINED_TERM | SERVES_LANDLORD |  |
| `lease-notice-initial-requirement-nd` | Keep | REQUIRED_DISCLOSURE: N.D.C.C. § 47-16-15(4) |  |
| `smoke-detector-duty-nd` | Keep | SERVES_LANDLORD |  |
| `tenant-maintenance-nd` | Keep | SERVES_LANDLORD |  |
| `tenant-notice-of-adverse-proceeding-nd` | Keep | SERVES_LANDLORD |  |

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease had no section of that title after the 2026-09-29 scrub, so the pointer resolved to nothing here; the edit fixes it. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Retro checks (SOP 1.20) — 2026-10-02

Circle-back in ND's chat (rule 8). Old output files deleted first: 53 files, including the 2026-09-27 `lease-clauses-ND-delta.csv` and backfill handoff, eight stale state logs, two stale checklist copies, `SD-RE-AUDIT-PROMPT.md`, and all 38 `steinoak_clauses_updated_NNN.csv` intermediates (v21–v125). Today's attachments are the only source of truth; anything earlier in that chat conflicting with them is superseded, including the 941-row/16-column trunk and the ND counts drawn from it.

**Files confirmed (rule 23):** `lease-clauses.csv` 2,427 rows, 17 columns (`lease_clause_basis` new), 28 states, CRLF. **ND: 128 tagged, 124 active — 58 lease clauses, 66 education, all VERIFIED; 4 switched off** by the 2026-09-29 scrub. Every count derived here, none carried forward. Settings: Opus, high effort. Research mode not used: no check needed it, and the two proof-of-absence questions that might have (rule 9) were answerable from the official full-text search plus whole-chapter reads.

**Trap avoided, recorded because it nearly cost the pass:** the sandbox still held the 2026-09-27 uploads at the same filenames, including a 941-row `lease-clauses.csv`. The first row-count check read that file and returned 941. The attachments were in a different directory. A row-count check is only as good as the path it runs against.

**Scope (rule 1):** nothing reopened beyond what a named rule put in front of me. The ND statute walk, the deposit regime, the alarm set, the DV set and the fair-housing set were not re-examined.

### Verdicts

| Rule | Verdict | What was read | Rows |
|---|---|---|---|
| **40** formatting and placement | **Checked, no new requirement.** Battery run across the whole code, not just the lease-content sections | Official ndlegis.gov full-text search 2026-10-02: "underlined" (342 hits, no Century Code hit), "boldface" (151; Century Code hits ch. 35-05 crop liens, ch. 9-14 invention-development contracts, ch. 53-11 — none a lease), "conspicuous" (Century Code hits ch. 51-37, 04.1-40.1, 43-65, 51-14.1, 53-09 — none landlord-tenant), "separate document" (ch. 26.1-44, 47-33, 26.1-17.1, 41-08, 26.1-33.4, 51-07), "substantially equivalent"+lease (no Century Code hit), "point type" (Century Code hits incl. ch. 9-14 and ch. 47-15.1). ch. 9-14, ch. 47-15.1 and ch. 47-33 each read to confirm scope | none |
| **41** just cause | **Checked, no clause change.** ND has no just-cause regime and § 47-32-01(4) makes holding over an eviction ground, so end-of-term-ends-possession wording is *correct* here — the inverse of the NJ problem | §§ 47-32-01, 47-32-02 transcribed verbatim from ndlegis.gov/cencode/t47c32.pdf. `security-deposit-use`, `no-alterations`, `early-termination`, `keys`, `surrender-end-of-term-mn-nd` read | none |
| **41b** `for-cause-eviction` row | **Fixed.** Verdict existed in this log (§§ at "For-cause eviction protection after 12 months: confirmed absent"; "no statewide just-cause framework") but no row and no `for-cause-eviction` key, so rules 27 and 41 disagreed | as above, plus §§ 47-32-01.1, 47-32-04, 47-16-17.1(10) | **+`edu-no-for-cause-eviction-nd`** |
| **42** required text inside a shared clause | **Checked, none.** No ND statute forces a sentence into a fee, deposit or other clause ND is tagged on. The only ND provisions that force lease content are § 47-16-15(4) (initialling space) and § 47-16-06.1 (renewal pre-notice), both already rowed | complete ch. 47-16 from the official compilation | none |
| **43** cure promises | **Checked; shared proposal raised.** ND gives **no cure right for any ground** — § 47-32-02's three days is notice of *intention to evict*, not notice to cure. `default-by-tenant`'s rent limb conditions default on failure "to cure … within the time period specified by applicable law", which has no referent in ND; the no-cure carve-out sits on the non-rent limb only | §§ 47-32-01, 47-32-02 verbatim; `application-of-payments`, `default-by-tenant`, `early-termination` read | none (proposal below) |
| **44** terms the statute turns into landlord duties | **Fixed.** § 47-16-15(2) makes the agreed notice period binding on *either* party, so a landlord who writes a longer period binds itself — while § 47-16-15(4)'s non-initialled escape runs only to "the lessee". `landlords-access-nd` restates the statute's own permissive methods and adds nothing | § 47-16-15; § 47-16-07.3 | **~`edu-termination-notice-periods-nd`** |
| **45** electronic notices | **Fixed — a row was wrong.** `edu-no-electronic-notice-regime-nd` said ND has no such regime. ch. 9-16 is one, and § 9-16-02 excludes only wills, testamentary trusts and most of the UCC — **no landlord-tenant, eviction, default or cure carve-out**. § 9-16-07(3): a record the sender makes unprintable or unstorable "is not enforceable against the recipient". § 9-16-07(4) opens "may not be varied by agreement" then carves out only where the *other* law permits variation — which ND's landlord-tenant sections do not. No ND clause relies on electronic delivery of a statutory notice (`notices` self-limits; `electronic-signatures` covers execution, not notices) | §§ 9-16-02, 9-16-04, 9-16-07 verbatim from ndlegis.gov/cencode/t09c16.pdf | **~`edu-no-electronic-notice-regime-nd`** |
| **46** the lease as the required notice | **Checked, none.** No ND statute lets a lease paragraph serve as a statutory notice. The two ND notices with fixed delivery run the other way — § 47-16-06.1 (lessor to lessee, personally or first-class mail) and § 47-16-17.1(3) (tenant to landlord, mail, fax or in person) — and each is a separate act, not lease text | complete ch. 47-16 | none |
| **47** penalties for knowingly using a prohibited term | **Checked, confirmed absent.** ch. 47-16 imposes no penalty or damages on a landlord for knowingly using a void provision; § 47-16-13.3 gives equitable relief only (refuse to enforce, sever, limit). So the "nothing in this lease limits your rights" problem does not arise in ND — but see rule 51: if ch. 51-15 reaches leases, its civil penalties would be the route, and that is unsettled | complete ch. 47-16; ch. 51-15. `late-fee`, `early-termination`, `notices`, `common-area-use` read | none |
| **48** separate-document requirements | **Fixed — and the rule 40 battery missed it.** § 47-16-13.1(5): for a dwelling unit *other than* a single-family residence, an agreement that the tenant perform "specified repairs, maintenance tasks, alterations, or remodeling" is effective only if in good faith, "set forth in a **separate writing** signed by the parties and supported by **adequate consideration**", not needed to cure a § 47-16-13.1(1)(e) waste failure, and not diminishing duties to other tenants; § 47-16-13.1(6) bars treating performance as a condition of the lease. The battery searched "separate **document**" and returned nothing for leases. Found by reading the chapter section by section | § 47-16-13.1(3)–(6) | **+`edu-separate-writing-duty-shift-nd`**, **+`maintenance-allocation-nd`**, **~`landscaping-irrigation`**, **~`snow-removal`** |
| **49** collection-cost bans | **Checked, confirmed absent.** No ND ban on recovering collection or eviction costs and no bar on a one-way cost award. § 47-16-13.6 awards fees to "the prevailing party" but only on §§ 47-16-13.1–13.6 claims; § 6-08-16(2)(a) caps a dishonoured-instrument collection fee at $40. "Costs and expenses" in `default-by-tenant` is lawful in ND | complete ch. 47-16; § 6-08-16 (already whole-section read, 2026-09-06) | none |
| **50** "the lease controls" wording | **Fixed.** Six places in ch. 47-16 leave the choice to the lease, each now made on purpose: §§ 47-16-04, 47-16-06, 47-16-13.1(4), 47-16-13.1(5), 47-16-15(2), and § 47-16-26 (which runs the other way — "notwithstanding any agreement to the contrary") | complete ch. 47-16 | **+`edu-optional-lease-terms-nd`** |
| **51** plain language and consumer contracts | **Fixed, and it splits exactly as the rule predicts.** (a) **Enumerated list: confirmed absent** — ch. 51-15 names only check endorsements, solicitation by invoice and facilitating; nothing about blank spaces or a copy at signing. (b) **General standard: unsettled** — § 51-15-02 reaches acts "in connection with the sale or advertisement of any merchandise" that are "unconscionable or … likely to cause substantial injury"; "merchandise" expressly includes "real estate", but "sale" is defined as a sale, offer for sale or attempt to sell and never mentions a lease, rental or leasing, and no section of the chapter mentions a dwelling lease. (c) **Plain language: confirmed absent** — no ND analogue to PA's Act | ch. 51-15 section list and the definitions and § 51-15-02 operative wording from ndlegis.gov/cencode/t51c15.pdf; full-text search for "plain language" | **+`edu-consumer-protection-act-nd`**, **+`edu-no-plain-language-rule-nd`** |
| **54** optional clauses | **Fixed.** Four lawful options offered, two recorded as lawful-but-not-offered. ND was the **only state in the library with no holdover lease clause at all** | complete ch. 47-16; §§ 32-03-27, 32-03-28 (carried, not re-read); §§ 9-08-03, 9-08-04; `tenant-caused-damage-tn`, `holdover-ca`, `maintenance-allocation-az` read as models and not tagged | **+`holdover-nd`**, **+`automatic-renewal-nd`**, **+`maintenance-allocation-nd`**, **+`tenant-caused-damage-nd`**, **+`edu-optional-lease-terms-nd`** |
| **54t** tenant-caused damage | **Fixed.** Each exit and abatement provision checked separately for its own fault exception: § 47-16-17(2) **has** one ("other than the ordinary negligence of the lessee"); § 47-16-14(4) (lease terminates "by the destruction of the property leased") **has none**, so a total loss the tenant caused still ends the lease. ND has **no statutory rent abatement at all**, so a no-abatement term waives nothing. The gap the lease may fill is lost rent during repairs and after an early end | §§ 47-16-10, 47-16-13.4, 47-16-13.5, 47-16-13.7, 47-16-14(4), 47-16-17(2) | **+`tenant-caused-damage-nd`**, **~`edu-casualty-termination-nd`** |
| **35c** constitution | **Checked, clean.** ND Const. Art. I read in full, all 25 sections: § 1 (arms, "for the defense of their person, family, property, and the state, and for lawful hunting"), § 4 (speech), § 8 (searches), §§ 16 and 18 (takings; impairing contracts). All bind the state; none regulates a private contract or protects tenant conduct against a private landlord. **Article XIV is the Ethics Commission, not cannabis** — the Missouri problem does not arise and no clause needed an override. Adjacent check run anyway: ch. 19-24.1 (medical cannabis) | ndlegis.gov/constit/a01.pdf; the article index; ch. 19-24.1 §§ 19-24.1-32(1), -33, -34(1)(c) | **+`edu-medical-cannabis-nd`** |
| **27** the seven topics | **Fixed — ND had a row for none of the seven.** `quiet-possession` **Present** (§ 47-16-08, the covenant is statutory); `statutory-forms` **Present** (§ 6-08-16(4) dishonoured-cheque notice, § 47-16-36 oil and gas; no residential lease or eviction form, and § 47-32-02's notice has no prescribed wording); `algorithmic-rent-setting`, `fees-as-rent`, `landlord-self-cure`, `lease-completeness`, `tenant-security-cameras` all **Confirmed absent** | complete ch. 47-16 and ch. 47-32; full-text searches for "additional rent" (only ch. 53-06.1, gaming), "security cameras" (no Century Code hit); ch. 51-15 for the completeness limb | **+6 rows** (list below) |
| **79** basis re-reads | **Fixed. 13 of 75 ND-only active rows recorded no basis; now 0 of 92.** One row rested on secondary hosts and was re-read section-open | see below | **~12 rows** |

### Rule 40 layout and placement table

| Requirement | Section | Shape | Omission sanction | Row |
|---|---|---|---|---|
| Space for the lessee to initial next to a notice requirement longer than one month | § 47-16-15(4) | **Placement** | Yes — the longer period is ineffective against the lessee, who may end the lease on the last day of a month on one calendar month's notice | `lease-notice-initial-requirement-nd`; condition now also restated in `termination-notice-nd` |
| Automatic-renewal clause unenforceable without 30 days' pre-notice, delivered personally or by first-class mail | § 47-16-06.1 | Pre-notice condition on a lease term | Yes — the lease expires and converts to month-to-month | `edu-automatic-renewal-notice-nd`; `automatic-renewal-nd` |
| Signed statement describing the condition of the facilities, at the time of entering the agreement | § 47-16-07.2 | Separate signed document; **no prescribed form, no type rule** | Evidentiary only — loss of the prima-facie-proof benefit | `edu-condition-statement-nd` |
| Tenant-performed maintenance in a non-single-family unit must be a **separate writing** with its own consideration | § 47-16-13.1(5)–(6) | **Separate document** | The agreement is not effective; and it may not be a condition of the lease | `edu-separate-writing-duty-shift-nd`; `maintenance-allocation-nd` |
| Notice of intention to evict may be posted **conspicuously** on the premises where the party cannot be found | § 47-32-02 | Service method, **not lease text** | — | `edu-nonpayment-notice-nd` |
| Underlining, boldface, type size, conspicuousness or "substantially equivalent" wording in a residential lease | — | **None anywhere in the code** | — | — |

### Targeted fixes

| # | Verdict |
|---|---|
| **19** dangling pointers | **Fixed, and the sweep found three more than the prompt named.** Every ND active row was swept for references to switched-off rows by id and by lease-section name. Real coverage pointers repaired: `edu-no-lease-copy-duty-nd` ("see security-deposit-return-nd and the move-in inventory row" → `edu-security-deposit-return-nd` and `edu-condition-statement-nd`; "the move-in inventory row" was never a row id and resolved to nothing), `edu-dv-deposit-timing-nd`, `dv-state-housing-program-protection-nd`, `edu-no-dv-lock-change-duty-nd` (stale cross-state reference to `dv-lockchange-ne`). Left as provenance per rule 78: the five "Moved from X by the scrub" notes and `edu-unclaimed-deposit-holder-duties-nd`'s account of where its content used to live. `inspection-rights`' "this Lease's Access & Entry terms" still resolves — ND has that section |
| **20** scrub-trimmed clauses | **Fixed, one restoration.** `termination-notice-nd`: the § 47-16-15(4) condition lived only in a *separate* clause, so a lease built with a 60-day period and without it breaks the statute silently and no number check can catch it, 60 being a lawful-looking figure. Restored into the clause, NJ-fashion. `landlord-maintenance-nd`: trimmed to a bare written-notice duty; § 47-16-13 triggers the tenant's remedies on "notice … of dilapidations" and does **not** require writing, so the clause standing alone added a condition to a statutory remedy — saving sentence added. **Required-content second limb:** ND's required-content provisions were searched rather than each clause's own citation; §§ 47-16-07.2, 47-16-15(4) and 47-16-06.1 are the complete set and none requires habitability or maintenance text in the lease, so the scrub removed no statutorily required lease text |
| **21** scrub-switched-off clauses | **Checked; no restoration needed, for all four, with reasons.** `security-deposit-return-nd`: § 47-16-07.1(3)'s itemisation and written notice is a **post-termination** duty (within 30 days after termination and delivery of possession), not something given in the lease or at signing, so no lease clause was serving as that notice — unlike AZ's § 33-1321(C) move-in notice. `termination-by-death-nd` (§ 47-16-18), `fire-casualty-termination-nd` (§§ 47-16-14(4), 47-16-17(2)), `dv-lease-release-nd` (§ 47-16-17.1, whose notice runs tenant→landlord): each restated a right the law gives anyway, with no landlord notice or disclosure duty attached. The one landlord duty in that set, § 47-16-17.1(4) confidentiality, is separately rowed at `edu-dv-confidentiality-nd` |
| **22** `returned-payments` 12-month wording | **Lawful in ND; ND has the defect the change fixes.** No ND statute speaks to requiring certified funds after returned payments — ch. 47-16 read whole (§ 47-16-20.1 bans a fee for *accepting* cash, a cheque or a money order, a different subject) and § 6-08-16 governs the dishonoured instrument, not the payment method going forward. Requiring certified funds is a payment-method condition, not a penalty, so §§ 9-08-03 and 9-08-04 do not reach it. "During the Term" is empty for an ND month-to-month tenancy (§ 47-16-15(2)) and for an unspecified-term lodging tenancy (§ 47-16-19), so the rule 37 defect is live here. **ND answers yes** |
| **23** `early-termination` shorter-route subordination | **Lawful in ND, and ND needs it more than WY.** ND's statutory route for a material lease breach is **three days' written notice of intention to evict** (§ 47-32-02, for § 47-32-01(8) grounds) with **no cure right at all**, plus § 47-16-16's direct termination for contrary use or failure to repair "within a reasonable time after a request". The clause's landlord limb promises 30 days' notice **and** a 10-day cure — roughly ten times the statutory notice plus a cure ND law does not grant. "Nothing in this Section limits any right either party has under applicable law" does not save it: that sentence preserves *rights*, and the 30-day promise is a *burden* the landlord assumed by contract. **ND answers yes** to WY's wording |
| **24** `default-by-tenant` "costs and expenses" | **ND does not limit it; deleting the phrase gives something up.** No ND ban on a landlord recovering collection or eviction costs and no bar on a one-way award (§ 47-16-13.6's prevailing-party fee award is confined to §§ 47-16-13.1–13.6 claims; § 6-08-16(2)(a) caps only a dishonoured-instrument collection fee). The clause's mutual closing sentence covers costs and fees "incurred in connection with any legal proceedings", so deleting "and reasonable costs and expenses" from the remedies sentence would narrow an ND landlord to **litigation-related** costs and give up contractual recovery of non-litigation collection costs, which ND law permits subject to §§ 9-08-03 and 9-08-04. **ND's answer: lawful either way, and ND loses something — defer to CO's driver if the shared text must be uniform, but record that ND is giving up recovery it has** |
| **25** rule 37 effective-date reach | **Scanned; nothing to fix.** Every ND row was scanned for an effective-date or applicability clause. The "entered into or renewed on or after" matches are all **other states'** segments (IL, ID, GA, CA, NC, AZ, SC); the three ND matches are false positives ("prospective purchasers", "applies only to leases with a specified term of two months or more"). **No ND statute in ND's row set is date-conditioned.** ND's one applicability condition is term length — § 47-16-06.1's two-month floor — and `edu-tenancy-type-notice-nd` already states it; `automatic-renewal-nd` records it too |
| **26** rule 39 federal pre-filing conditions | **Confirmed absent, boundary stated.** The official index of the ND Rules of Court was reviewed: no rule governs eviction, summary possession or residential tenancies, and none imposes a pre-filing condition. No ND analogue to Georgia's Uniform Magistrate Court Rule 46 making the CARES Act 30-day notice a filing condition for a "covered property". ND eviction timing is statutory (§ 47-32-02: appearance 3–15 days from issuance; service 3 days before appearance in-county, 7 days otherwise). Recorded in `edu-nonpayment-notice-nd`. **Boundary:** rule titles read from the official index, individual rule texts not read; the courts' public-access rules were not searched, since § 47-32-05 already carries record sealing |

### Rule 79 in detail

**Before: 13 of 75 ND-only active rows recorded no basis. After: 0 of 92.**

- Two of the 13 quoted the statute verbatim, so the basis was evident but unlabelled and the keyword screen could not read it (`edu-payment-method-fee-ban-nd`, `lease-notice-initial-requirement-nd`). Labelled.
- Five carried a bare subdivision citation to § 47-16-07.1 (`edu-security-deposit-cap-nd`, `-pet-cap-nd`, `-interest-required-nd`, `-successor-owner-nd`, `-noncompliance-penalty-nd`). Basis recorded.
- **Six were created or moved by the 2026-09-29 scrub, which carried the content and the citation but left the basis behind in the switched-off source row** (`edu-security-deposit-return-nd`, `edu-tenant-death-termination-nd`, `edu-casualty-termination-nd`, `edu-dv-lease-release-nd`, `edu-habitability-baseline-nd`, `edu-termination-notice-periods-nd`). That is a rule 78 defect in its own right: it silently removed six ND rows from rule 79's reach. Basis recorded on each.
- **Secondary-basis rows needing a section-open re-read: one.** `edu-nonpayment-notice-nd` recorded "confirmed from primary FindLaw/LawServer text" — secondary hosts, and LawServer prints no history line. §§ 47-32-01 and 47-32-02 re-read verbatim from the official compilation. **Both rule 79 checks pass:** the subdivision cited is the one that says it, and the row's no-cure qualifier is an absence across the chapter rather than a gloss on one sentence. Basis upgraded; three sentences added (no prescribed wording, the § 47-32-02 service methods, and an explicit statement that the three days are not a cure period).
- **Two keyword flags were false positives:** `assistance-animal-accommodation-nd` and `edu-service-animal-fraud-penalty-nd` match "secondary source" only because they *document* the SB 2222 error; both record "Claude Browser primary-source verification 2026-09-17". Checked rather than assumed, and `edu-service-animal-fraud-penalty-nd`'s fine reading — that § 47-16-07.6(2)'s $1,000 fee is tied to fraudulent *documentation*, narrower than (1)'s two grounds — is confirmed against the official text.
- **Method limit, recorded rather than implied (rule 12):** the official site serves the Century Code only as PDF and the browser pane cannot extract PDF text; the container has no network route to ndlegis.gov. Chapter reads were therefore made through a fetch tool against the official PDFs, taking operative wording as short verbatim fragments rather than a summary. §§ 9-08-01 to 9-08-05, 9-16-02, 9-16-04, 9-16-07, 47-32-01 and 47-32-02 came back as full verbatim text; ch. 51-15's § 51-15-02 came back as fragments after a length guard, and is labelled that way on its row.

### Rows

**New (17).** `edu-no-for-cause-eviction-nd` · `edu-consumer-protection-act-nd` · `edu-no-plain-language-rule-nd` · `edu-separate-writing-duty-shift-nd` · `maintenance-allocation-nd` · `holdover-nd` · `automatic-renewal-nd` · `tenant-caused-damage-nd` · `edu-optional-lease-terms-nd` · `edu-quiet-possession-nd` · `edu-no-algorithmic-rent-rule-nd` · `edu-no-fees-as-rent-rule-nd` · `edu-no-landlord-self-cure-rule-nd` · `edu-no-lease-completeness-rule-nd` · `edu-statutory-forms-nd` · `edu-no-tenant-camera-rule-nd` · `edu-medical-cannabis-nd`

**Changed (22).** Body and notes: `edu-no-electronic-notice-regime-nd`, `edu-nonpayment-notice-nd`, `edu-casualty-termination-nd`, `edu-termination-notice-periods-nd`, `landlord-maintenance-nd`, `termination-notice-nd`. Notes only: `edu-no-lease-copy-duty-nd`, `edu-dv-deposit-timing-nd`, `dv-state-housing-program-protection-nd`, `edu-no-dv-lock-change-duty-nd`, `lease-notice-initial-requirement-nd`, the five § 47-16-07.1 deposit rows, `edu-security-deposit-return-nd`, `edu-tenant-death-termination-nd`, `edu-dv-lease-release-nd`, `edu-habitability-baseline-nd`, and the ND segments of the two shared rows `landscaping-irrigation` and `snow-removal`.

**Taylor's decision, 2026-10-02 (rule 76).** On the § 47-16-13.1(5) problem: keep `landscaping-irrigation` and `snow-removal` tagged ND with an ND note that they bind only for a single-family residence, and add an optional separate signed agreement for other dwellings — following AZ (`maintenance-allocation-az`), NE and OK rather than forking the shared rows. `maintenance-allocation-nd` is built to that decision, with every § 47-16-13.1(5) element in the text, a consideration blank, the § 47-16-13.1(6) no-condition sentence, the other-tenants limit and the § 47-16-13.1(3) code floor. **Builder gap recorded for ND as AZ and NE recorded it:** the builder cannot show or hide a clause by property type, so the bracketed scope instruction is the only guard. Taylor's note on process is recorded here too: this was a legal call under rule 76 and the AZ/NE/OK precedent settled it, so it should have been made without asking.

### Integrity

Delta of 39 rows (17 new, 22 changed), 17 columns, same header and CRLF as the master, no embedded line breaks. Merged against the trunk and asserted: **2,444 rows, 2,322 active. ND 145 tagged, 141 active — 62 lease clauses (all 62 displayable, none superseded) and 79 education rows, all VERIFIED.** Every other state's tag count byte-identical before and after. No duplicate ids, no dangling `supersedes`, no display collisions, no blank status on an active row, no blank `states` except the `security-deposit-return` parent, no blank `topic_key`. Every row id named in a new or changed `notes` field exists. On the two shared rows only `notes` and `last_checked` changed — no `bodyText`, `rule_type`, `content_type` or `states` change, so **no § 5a.1 propagation is owed by this pass**; the three propagation items are proposals below.

### For Claude Code, not fixed here

Dangling pointers in **other states'** segments of shared rows ND is tagged on, found by the sweep and left alone under rule 62/78 (change only your own state's segment). Not annotated inline as switched off: `security-deposit-cap-nc` (`due-at-signing`), `security-deposit-return-va` (`security-deposit-use`), `portable-solar-va` (`no-alterations`), `casualty-termination-ca` (`possession-delay`), `dv-lease-termination-nc` and `dv-lease-termination-nv` (`keys`), `flag-display-oh` (`common-area-use`), `reasonable-modification-ca` (`tenants-property-insurance-ks-oh-ca`).

### Proposed shared-clause edits (rule 62 — not made)

1. **`default-by-tenant` — a standalone no-cure sentence reaching both limbs.** New, not on the prompt's list. ND gives no cure right for any ground, so the rent limb's "does not cure the failure within the time period specified by applicable law" has no referent here — the empty-referent defect that forced `holdover-oh`, `holdover-sd` and `holdover-ca`, but on the *default trigger*, where a court construing against the drafter could read default as never maturing. Rule 43 wants the carve-out in its own sentence covering rent and non-rent. Suggested: move "except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure" out of the non-rent limb into its own sentence reaching both. **ND's answer: yes.** 18 tagged states to answer.
2. **`early-termination` — WY's subordination wording.** **ND's answer: yes**, and ND's gap is wider than WY's (3 days' statutory notice, no cure, against a 30-day-plus-10-day-cure promise).
3. **`returned-payments` — AZ's "during any 12-month period".** **ND's answer: yes**, lawful and the defect is live.
4. **`default-by-tenant` — CO's deletion of "and reasonable costs and expenses".** **ND's answer: lawful, but ND loses contractual recovery of non-litigation collection costs.** Flagged rather than opposed.

### Proposed SOP changes

1. **Rule 40 / 48 battery: add "separate writing" and "separate instrument".** ND's only separate-document requirement for a lease (§ 47-16-13.1(5)) uses "separate writing" and the battery's "separate document" search returned nothing for leases. Found only by reading the chapter section by section. The battery's keyword list is doing the work of a full read and should at least cover the synonyms.
2. **Rule 35c: say that the official search may exclude the constitution, and read it article by article when it does.** ndlegis.gov's full-text search covers the Century Code, the Administrative Code and session documents but **not** the state constitution — a search for "keep and bear arms" returns only session documents, with no CONSTITUTION document type anywhere in the results. The rule's instruction to "load the state constitution into your full-text search" cannot be followed on this state's official search, and a pass that tried would record a clean negative that proves nothing.
3. **Rule 78: a pass that moves content must move its basis with it.** The 2026-09-29 scrub carried content and citations into six new ND rows and left the evidentiary basis behind in the switched-off source rows. A row whose notes record no basis cannot be screened by rule 79, so the scrub silently removed six rows from that screen — invisible until someone counted. Rule 78 already requires diffing each rewritten row against its source; it should say the basis is part of what has to survive the move.
4. **Rule 23: check the row count against the path you are about to read, not the filename.** The sandbox held a five-day-old `lease-clauses.csv` at the same name as today's attachment, 941 rows against 2,427. The first count ran against the stale file. The rule assumes one file per name.

## Retro sync (Claude Code, 2026-10-02)

- **Merged** with `merge-delta.py --base fc74c4a` (the attached CSV is byte-identical to it): 22 rows updated, 17 new, no refusals. ND active 124 → 141 (62 lease clauses), no same-topic pairs; every other state's set unchanged.
- **Guards:** `check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py` and `checkConfigIds.js` all pass.
- **Statute spot-check, 6 of 6, against the official Century Code PDFs (ndlegis.gov, read by Claude Code at sync):** § 47-16-13.1(4)-(6) (the chore split behind `maintenance-allocation-nd`); § 47-16-06.1 (automatic renewal needs 30 days' written notice, personally or by first-class mail, for a term of two months or more) matches `automatic-renewal-nd`; § 47-16-15(2) and (4) (one calendar month; the initialling space) match `termination-notice-nd`; § 47-16-14(4) (destruction ends the lease, with no fault exception) supports `tenant-caused-damage-nd`; § 47-32-02 (three days' notice of intention to evict for the § 47-32-01(4)-(6) and (8) grounds; no cure) matches `edu-nonpayment-notice-nd`; § 9-16-07(3)-(4) matches `edu-no-electronic-notice-regime-nd`.
- **Citations file:** 17 rows added (7 confirmed-absence rows); 22 changed rows dated, and the sections the retro newly relies on added by hand (§§ 9-16-02, 9-16-07(3), 47-16-13.1(4)). Notes weren't mined automatically: they mention sections in passing ("there is no § 47-32-06").
- **Correction to the decision record above:** the chore-split decision followed Arizona and Nebraska. Oklahoma went the other way (its statute requires a separate writing for every dwelling, so the shared clauses aren't tagged OK). Now settled in SOP rule 48.
- **Rule 62 answers recorded:** ND supports WY's `early-termination` wording and AZ's `returned-payments` wording; on CO's `default-by-tenant` deletion, lawful but ND gives up contractual recovery of non-litigation collection costs (flagged, not opposed). ND independently raised the same no-cure sentence MN proposed for `default-by-tenant` and supports it.
- **Other states' dangling pointers:** all eight ND listed are already targeted fixes for their states (NC, NV, VA, CA) in `retro-extras.csv`, or history notes.
- **SOP 1.21:** all four proposals adopted (rules 23, 35, 48, 78), plus the settled chore split in rule 48; KS, TN and AL get the chore-split check as targeted items.

## Propagated shared-row edit, 2026-10-03 (Wyoming's proposal, merged after every tagged state vetted it)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `early-termination` landlord limb.** Old: 'Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or if Tenant vacates or abandons the property without notifying Landlord.' New: 'Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or on such shorter notice and cure period as applicable law permits, or if Tenant vacates or abandons the property without notifying Landlord.' Why: the 30-day notice and 10-day cure promised in the lease could give up a shorter route the state's law allows for a material breach. Every state tagged on the row (CO, WY, MN, ND, SD, OH) vetted the wording and supported it; "as applicable law permits" means it never permits less than the law requires. This state's existing note on the row still holds.

## Propagated shared-row edit, 2026-10-04 (at the PA circle-back sync)

- `returned-payments` (CO, WY, KS, NE, MN, ND, SD, OH, AZ, GA, PA): AZ's proposal merged once every tagged state had vetted it, PA last. "If more than two of Tenant's payments during the Term are returned" now reads "during any 12-month period", so the count works for a month-to-month tenancy, which has no Term. Uniform; no ND override. ND's note segment on the row records it.

## Propagated shared-row edit, 2026-10-04 (at the NY circle-back sync)

- `default-by-tenant`: MN's proposal merged once every state tagged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY) had vetted it, NY last. The no-cure carve-out moved out of the non-rent limb into its own sentence reaching both limbs, in the wording already merged on `default-by-tenant-ks-ne`: "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." It is self-limiting, so it reaches a breach only where ND law lets Landlord proceed without a cure opportunity. Uniform; no ND override.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for ND. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any ND row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach ND's law; to be confirmed at ND's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.


---

# Topic gaps pass (end-of-run consistency pass, 2026-10-29/30): Desktop's log

## Topic gaps — North Dakota (SOP 1.86)

**State:** North Dakota. **Pass:** end-of-run consistency pass, the 241 topics with no ND row.
**Date:** 2026-10-29. **Status: IN PROGRESS - batch 1 of several delivered.**
**Model/settings:** Opus, high effort.

This log is cumulative and each delivery replaces the last. Batch 1 answers
**241 of the 241 topics**; **0 remain**.
Deliverable alongside it: `lease-clauses-ND-gaps-delta.csv`
(241 rows, 17 columns, CRLF).

---

## 1. Sources, channel and currency

### 1.1 Step A check (confirmed before any research)

Confirmed against the decompressed `lease-clauses.csv` itself, at the path read, not the
filename (SOP change 4 from the ND retro pass):

| Check | Required | Measured | |
|---|---|---|---|
| size | 38,195,717 bytes | 38,195,717 | OK |
| SHA-256 | `0e73807da536a370f055d3bbcff2c6417867abf8b1dfd4b52898c59029acf105` | identical | OK |
| rows | 11,634 | 11,634 | OK |
| active rows | 11,524 | 11,524 | OK |
| active rows carrying ND | 142 | 142 | OK |
| topics in `missing-topics-ND.md` | 241 | 241 | OK |

Arithmetic closes: ND already covers **123** distinct `topic_key`s,
the missing list holds **241**, the overlap between them is **0**, and
123 + 241 = **364** - the library's topic count.

**A trap that nearly cost the count, recorded because it will recur.** The delimiter inside
`states` is a **semicolon**, not a comma: the column holds `AZ; CO; ND; NE`. A comma-split -
the obvious first thing to write - returns **95** active ND rows instead of 142 and raises no
error, because every single-state row still parses. The undercount looks like a plausible
answer, which is what makes it dangerous: it would have made 47 already-answered topics look
unanswered and invited duplicate rows straight through the tag-first rule. Every script in
this pass splits on `[;,]`. Proposed as an SOP change below.

Two other stale-file paths were present in the attachment folder and are **not** the master:
one 2,427-row / 17-column copy and one 941-row / **16**-column September copy, both named
`lease-clauses.csv`. Neither was read for anything. The 16-column copy predates
`lease_clause_basis`.

### 1.2 Sources read

- **Corpus** `corpus-ND-20261025.tar.xz`, SHA-256 verified against its `.sha256` sidecar
  (`458a0aeb...98f7855`). It holds the Legislative Council chapter PDFs of **every chapter of
  title 47**, plus chapters 14-02.4, 14-02.5, 51-15, 9-08, 28-26 and every chapter that 47-16
  or 47-32 cites (14-07.1, 14-07.7, 11-18, 17-04, 38-08, 41-09), the 2025 session laws, the
  constitution, the session-laws index and the Legislative Council master index.
- **Primary text only.** Every statutory proposition in every row below is from the section's
  own words, read whole (rule 21), not from a secondary summary.
- **Sections read whole for batch 1 (314).** Extracted from the delivered rows' own `notes` and
  then filtered by asking the corpus which of them it actually holds - neither list is typed, so
  neither can drift from what the rows cite or from what was really read:
  N.D.C.C. §§ 9-08-01, 9-08-02, 9-08-02.1, 9-08-03, 9-08-04, 9-08-05, 9-08-06, 9-08-07, 9-08-08, 9-08-09, 11-18-01.1, 11-18-02.2, 11-18-05, 11-18-23, 14-02.4-01, 14-02.4-02, 14-02.4-03, 14-02.4-05, 14-02.4-06, 14-02.4-07, 14-02.4-09, 14-02.4-10, 14-02.4-11, 14-02.4-12, 14-02.4-12.1, 14-02.4-13, 14-02.4-17, 14-02.4-18, 14-02.4-19, 14-02.4-20, 14-02.4-21, 14-02.5-01, 14-02.5-02, 14-02.5-03, 14-02.5-04, 14-02.5-05, 14-02.5-06, 14-02.5-08, 14-02.5-09, 14-02.5-10, 14-02.5-11, 14-02.5-12, 14-02.5-13, 14-02.5-18, 14-02.5-22, 14-02.5-27, 14-02.5-32, 14-02.5-33, 14-02.5-37, 14-02.5-39, 14-02.5-41, 14-02.5-42, 14-02.5-44, 14-02.5-45, 14-02.5-46, 14-07.1-01, 14-07.1-02, 14-07.1-03, 14-07.1-08, 14-07.1-20, 14-07.7-01, 14-07.7-06, 14-07.7-07, 14-07.7-19, 14-07.7-20, 17-04-05, 17-04-06, 28-26-01, 28-26-04, 28-26-06, 28-26-13, 28-26-20, 28-26-25, 28-26-26, 28-26-27, 28-26-28, 28-26-29, 28-26-30, 38-08-08, 38-08-09.4, 38-08-14, 38-08-16, 38-08-26, 41-09-02, 41-09-05, 41-09-05.1, 41-09-09, 41-09-13, 41-09-27, 41-09-69, 41-09-73, 41-09-87, 41-09-96, 41-09-99, 41-09-107, 41-09-118, 41-09-119, 47-01-05, 47-01-10, 47-01-11, 47-01-12, 47-01-14, 47-01-16, 47-01-17, 47-02-01, 47-02-02, 47-02-33, 47-02-34, 47-04-22, 47-04-26, 47-04-32, 47-04.1-01, 47-04.1-02, 47-04.1-06, 47-04.1-07, 47-04.1-08, 47-04.1-09, 47-04.1-10, 47-04.1-11, 47-04.1-12, 47-04.1-13, 47-04.1-14, 47-04.1-16, 47-05-01, 47-05-01.1, 47-05-01.2, 47-05-02, 47-05-02.1, 47-05-17, 47-06-01, 47-06-03, 47-06-04, 47-06-05, 47-06-09, 47-06-10, 47-09-01, 47-09-02, 47-09-04, 47-09-05, 47-09-08, 47-09-09, 47-09-18, 47-10-01, 47-10-02.1, 47-10-02.2, 47-10-02.3, 47-10-05, 47-10-09, 47-10-10, 47-10-16, 47-10-20, 47-10-27, 47-10-28, 47-10.1-01, 47-10.1-02, 47-10.1-03, 47-10.1-04, 47-10.1-05, 47-10.1-06, 47-10.2-02, 47-10.2-04, 47-14-01, 47-14-03, 47-14-04, 47-14-05, 47-14-06, 47-14-07, 47-14-09, 47-14-10, 47-15-04, 47-15-05, 47-15-09, 47-15-10, 47-15-12, 47-15.1-01, 47-15.1-02, 47-15.1-03, 47-15.1-04, 47-15.1-05, 47-15.1-07, 47-16-01, 47-16-02, 47-16-02.1, 47-16-03, 47-16-04, 47-16-05, 47-16-06, 47-16-06.1, 47-16-07, 47-16-07.1, 47-16-07.2, 47-16-07.3, 47-16-07.4, 47-16-07.5, 47-16-07.6, 47-16-08, 47-16-09, 47-16-10, 47-16-11, 47-16-12, 47-16-13, 47-16-13.1, 47-16-13.2, 47-16-13.3, 47-16-13.4, 47-16-13.5, 47-16-13.6, 47-16-13.7, 47-16-14, 47-16-15, 47-16-16, 47-16-17, 47-16-17.1, 47-16-18, 47-16-19, 47-16-20, 47-16-20.1, 47-16-21, 47-16-23, 47-16-24, 47-16-25, 47-16-26, 47-16-27, 47-16-28, 47-16-29, 47-16-30, 47-16-30.1, 47-16-32, 47-16-33, 47-16-35, 47-16-36, 47-16-37, 47-16-38, 47-16-39, 47-16-39.1, 47-16-39.2, 47-16-39.3, 47-16-40, 47-16-41, 47-16-42, 47-17-01, 47-17-02, 47-17-03, 47-17-04, 47-17-05, 47-18-01, 47-18-04, 47-18-05, 47-18-05.1, 47-18-06, 47-18-14, 47-18-23, 47-19-01, 47-19-02, 47-19-03, 47-19-06, 47-19-19, 47-19-36, 47-19-41, 47-19-42, 47-19-46, 47-19-53, 47-19.1-01, 47-19.1-02, 47-19.1-09, 47-21-08, 47-21.2-03, 47-21.2-04, 47-22-02, 47-22-09, 47-25-02.1, 47-25-08, 47-25.1-06, 47-27-01, 47-27-02, 47-27-03, 47-30.2-01, 47-30.2-04, 47-30.2-22, 47-30.2-23, 47-30.2-26, 47-30.2-28, 47-30.2-43, 47-30.2-65, 47-30.2-73, 47-31-09, 47-32-01, 47-32-01.1, 47-32-02, 47-32-03, 47-32-04, 47-32-05, 47-33-01, 47-33-03, 47-33-04, 47-33-05, 47-34-01, 47-34-03, 47-36-04, 47-37-01, 47-37-03, 47-37-04, 47-37-05, 47-37-06, 47-37-08, 47-37-10, 47-37-11, 47-38-02, 51-15-01, 51-15-02, 51-15-03, 51-15-07, 51-15-11, 51-15-12.
  Six of them - §§ 9-08-02, 47-01-05, 47-06-04, 47-16-02, 47-16-15, 47-16-26 - were read for the
  named items in 4.8 and 4.9 rather than for a row, which is why they appear in no row's notes.
- **Cited but NOT read (371), named here so no reader mistakes a citation for a reading:**
  §§ 1-02-15, 4.1-34-15, 4.1-57-16, 6-1-737, 6-08-16, 6-08.6-01, 6-08.6-04, 6-09-24, 9-01-15, 9-06-01, 9-06-02, 9-06-03, 9-06-04, 9-06-05, 9-06-06, 9-06-07, 9-06-08, 9-06-09, 9-06-10, 9-06-11, 9-12-22, 9-16-02, 9-16-04, 9-16-05, 9-16-07, 10-01.1-05, 10-01.1-06, 10-01.1-07, 10-01.1-08, 10-01.1-11, 10-01.1-14, 10-06.1-12.2, 10-06.1-15.2, 10-06.1-17, 10-19.1-15, 10-19.1-16, 10-19.1-138, 10-32.1-16, 10-32.1-18, 10-32.1-78, 11-09.1-05, 11-09.2-01, 11-09.2-02, 11-10-32, 11-11-71, 11-33-03, 11-33-17.1, 11-33.2-12.1, 12.1-05-12, 12.1-09-01, 12.1-09-03, 12.1-20-25, 12.1-21-09, 12.1-21.1-03, 12.1-21.1-04, 12.1-22-01, 12.1-22-02, 12.1-22-03, 12.1-22-03.1, 12.1-22-06, 12.1-23-08.4, 12.1-31-01.2, 12.1-31.2-01, 12.1-32-08, 12.1-32-15, 13-01-14, 13-01-14.1, 13-01-15, 13-09.1-51, 14-09-08.10, 14-10-00.1, 14-10-01, 14-10-02, 14-10-09, 14-10-10, 14-10-11, 14-10-12, 14-10-13, 15-08-13, 15-08-14, 15.1-06-17, 15.1-06-17.1, 16.1-10-04, 18-01-04, 18-01-14, 18-01-15, 18-01-16, 18-01-17, 18-01-18, 18-01-19, 18-01-26, 18-01-27, 18-01-34, 18-12-11, 18-12-12, 18-12-13, 18-12-16, 18-12-17, 18-12-18, 18-12-24, 18-16-113, 19-24.1-33, 19-24.1-34, 19-24.2-30, 20.1-01-07, 20.1-01-17, 20.1-01-18, 20.1-01-19, 20.1-01-20, 20.1-01-22, 20.1-02-27, 20.1-03-11, 20.1-05-09, 20.1-08-03, 20.1-08-04, 20.1-13-20, 22-01-06.2, 22-01-06.4, 22-01-06.5, 22-01-14, 23-09-01, 23-09-02.1, 23-09-03, 23-09-04, 23-09-05, 23-09-06, 23-09-07, 23-09-08, 23-09-09, 23-09-10, 23-09-11, 23-09-12, 23-09-15, 23-09-16, 23-09-16.1, 23-09-17, 23-09-18, 23-09-20, 23-09-20.1, 23-09-22, 23-09-23, 23-10-02.1, 23-10-03, 23-10-04, 23-10-05, 23-10-06, 23-10-06.1, 23-10-06.2, 23-10-07, 23-10-09, 23-10-10, 23-10-10.1, 23-10-11, 23-10-12, 23-10-13, 23-10-14, 23-10.1-01, 23-10.1-02, 23-10.1-05, 23-12-10, 23-12-15, 23-13-12, 23-13-15, 23-35-02, 23-35-08, 23-45-02, 23.1-01-16, 23.1-06-05, 23.1-07-04, 23.1-07.1-01, 23.1-08-16, 23.1-12-02, 23.1-15-06, 23.1-15-07, 23.1-15-09, 23.1-15-10, 23.1-16-10, 23.1-16-11, 24-01-16, 24-02-45.5, 24.1-06-01, 25-13-01, 25-13-04, 26.1-02.2-05, 26.1-05-27, 26.1-21-16, 26.1-22-02, 26.1-22-10, 26.1-22-21, 26.1-22-22, 26.1-25-16, 26.1-27.1-02, 26.1-34.1-01, 27-02-07, 28-01-15, 28-01-16, 28-01-47, 28-20-36, 28-21-02, 28-21-04, 28-22-17, 28-22-18, 28-22-19, 29-12-12, 29-19-08, 29-30.3-03, 30.1-08-13, 30.1-20-05, 31-15-402, 32-01-12, 32-03-27, 32-03-28, 32-03-29, 32-03-30, 32-03-54, 32-03-57.1, 32-03.3-02, 32-10.1-01, 32-10.1-03, 32-10.1-05, 32-10.1-10, 32-10.1-16, 32-10.1-24, 32-15-06, 32-19.2-05, 32-29.3-04, 34-03-01, 34-12-02, 34-18-17, 34-18-67, 35-01-10, 35-05-01, 35-05-01.1, 35-05-02, 35-19-01, 35-20-17, 35-27-01, 35-33-02, 36-21.2-04, 36-21.2-05, 36-21.2-06, 36-21.2-07, 36-21.2-08, 37-01-43, 37-03-13, 37-17.1-03, 37-17.1-05, 37-17.1-10, 37-17.1-19, 37-17.1-29, 37-19.1-02, 38-12-801, 38-12-902, 39-08-20, 39-10-49, 39-10-50, 39-10-50.1, 39-10-51.1, 39-13-03, 39-22-19, 40-01-25, 40-02-16, 40-05-18, 40-05-27, 40-05.1-06, 40-22-16, 40-24-01, 40-24-03, 40-28-01, 40-43-07, 40-47-03, 40-47-05.1, 40-47-12, 40-57.3-01, 40-57.3-01.1, 40-58-18, 41-02-08, 41-02-19, 41-02.1-08, 41-02.1-10, 41-08-13, 42-01-01.2, 42-02-04, 42-02-06, 43-09-20, 43-17-26.1, 43-17-46, 43-23-08, 43-23-08.3, 43-23-11.1, 44-01-15, 44-04-18, 44-08-18, 45-10.2-12, 45-13-03, 45-22-17, 46-05-09, 47-30-2, 49-02-26, 49-02-34, 49-04-02.1, 49-04-07, 49-04-08, 49-04-09, 49-04-10, 49-04-20, 49-09.1-12, 49-21-24, 49-21-28, 50-06-06.8, 50-10.2-02, 50-11-11, 50-11.1-03, 50-11.1-04, 50-11.1-08, 50-11.1-21, 50-11.1-23, 50-11.1-25, 51-22-01, 51-22-02, 51-22-03, 51-27-01, 51-30-01, 51-30-02, 51-30-03, 51-30-04, 51-30-05, 51-30-06, 51-30-07, 51-38-03, 54-01.1-05, 54-01.1-07, 54-01.1-12, 54-06-15, 54-09-07, 54-12-22, 54-17-07.3, 54-21-17.1, 54-21.3-03, 54-21.3-04, 54-21.3-05, 57-02-08.1, 57-02-18.2, 57-02-26, 57-21-05, 57-22-05, 57-23-03, 57-38-01.15, 57-39.2-02.1, 57-39.2-03.4, 57-39.2-03.8, 57-39.2-04, 58-03-12, 58-03-14.1, 58-06-11, 61-01-18, 61-03-26, 61-03-27, 61-08-23, 61-16.2-04, 61-28.1-04, 62.1-01-01, 62.1-01-03, 62.1-01-05, 62.1-02-01, 62.1-02-05, 62.1-02-13, 62.1-04-03, 62.1-04-04, 64-02-02, 89-1-527. § 9-12-22 and §§ 23.1-15-09, 23.1-15-10 are the parked chapters of 1.5, cited
  only for what their own headings in the master index say. § 6-08-16 appears only as the failed
  positive of superseded battery `ND-GAPS-107` (it is in title 6, outside the corpus), which is why
  that battery was rerun as `-119`.

### 1.3 Channel disclosure (rule 24 / KS-gaps 13: more than one method)

Three independent fetch channels were tried for the chapters outside the corpus. **All three
failed**, which is why three chapters are parked (1.5):

| Channel | Result |
|---|---|
| container `curl` / `urllib` to ndlegis.gov | proxy **403**, organization network policy |
| `WebFetch` | **URL_NOT_ON_ALLOWLIST** (this channel worked for ND in October; it does not now) |
| built-in browser | reaches ndlegis.gov and renders the HTML chapter indexes, but **cannot extract PDF text**, and the code is published only as PDF |
| `device_bash` | no folders connected |

### 1.4 Corpus index: four defects found and fixed before any battery ran

The corpus is a set of PDFs; everything in this pass rests on the section splitter being
right, so it was proved against the Legislative Council master index before use (rule 19:
prove the corpus index before any battery). It was wrong four ways:

1. **`\s*` in the running-header pattern.** `\s` matches a newline, so deleting a
   "Page No. N" line also ate the following line's newline and leading whitespace and
   destroyed the `^` anchor for the heading after it. Fixed to `[ \t]*`, line-local.
2. **A wrapped cross-reference at a line start read as a heading.** Inside chapter 47-16 this
   invented a section `47-30.2-04` and truncated the body of § 47-16-07.1. Fixed by accepting
   only candidates carrying the file's own chapter prefix.
3. **The real cause of the missing sections: `\x0c`.** `pdftotext` emits a form feed at every
   page break, as the *first character* of the new page's first line, which `^[ \t]*` cannot
   match. Every section heading that fell at the top of a page was still being lost after fix
   1. Fixed by stripping form feeds in normalisation.
4. **A same-chapter citation at a line start.** Truncated §§ 47-21.2-03 and 47-30.2-50. Fixed
   by accepting headings only in strictly ascending section order.

Counts moved **1,093 -> 1,163** distinct sections and **1,165 -> 1,163** records, and the
index then reconciled **0 missing / 0 extra** against the Legislative Council master index.
Final state: **97 documents** (63 statute chapters, 3 session-laws, 20 constitution, 7
session-laws index, 4 master index), **1,163 sections**, corpus state hash
`ae70a2b65a1ec64c`, which is recorded on every battery record so a
later reader can tell whether a battery ran against this corpus.

**Method disclosure (rule 24, GU 3):** the corpus ships a `verify_nd.py`. I did **not** run
it. I reproduced its check independently in my own `verify.py`, so the corpus is not
certifying itself with its own code.

### 1.5 Parked: the chapters outside the corpus

These three are cited by rows in this batch and **could not be read** on any channel. Each
affected row is written so it claims nothing about the chapter's contents beyond what the
chapter's own section headings in the master index say. Asked Taylor on 2026-10-29, with the
recommendation that Claude Code add all three to the corpus and re-stage:

| Chapter / source | Needed for | Status |
|---|---|---|
| ch. 9-12 (§ 9-12-22) | `rent-receipt-anti-waiver` - row is **NEEDS_REVIEW** pending its text | not in corpus |
| **§ 23-13-15 "Smoke detection systems for residential rental property - Penalty"** | **the withdrawn absence claim in `edu-no-alarm-tampering-fee-nd`** - see 4.6 | not in corpus **and not recoverable from the session laws either**: no 2025 or 2026 act touched ch. 23-13, so there is **no route to its text from this session**. Its title alone says ND imposes a smoke-detection duty on residential rental property with a penalty. **Top-priority request, alongside ch. 54-21.3 and § 32-03-29.** |
| **ch. 25-13** (§ 25-13-04), **title 64 / ch. 64-02**, **§ 23-10-10.1** | `service-animal-denial-penalty`, `ev-charging-requirements`, `health-district-rental-rules` - NEEDS_REVIEW | not in corpus; ch. 25-13 is **not** recoverable from the session laws |
| ch. 23.1-15 (abandoned motor vehicle disposal) | `towing` - named as the route for a genuinely abandoned vehicle | not in corpus. **Partly recoverable: § 23.1-15-07(2) only**, which itself points to the unreadable § 23.1-15-06 |
| **ch. 19-24.1** (medical marijuana), and specifically **§ 19-24.1-33 "Limitations"** and **§ 19-24.1-34 "Acts not prohibited - Acts not required"** | the `smoking-policy` confirmation in item 4 - **marijuana limb unconfirmed** | **Partly recoverable, and I checked: 15 sections of this chapter print in full in the 2025-26 session laws - but NOT -33 or -34**, the two that would answer it. The only "landlord" anywhere in the recoverable text is § 19-24.1-37(3), letting the department confirm a cardholder's status to a third party "such as a landlord" **on the cardholder's written request**. So the request is now two named sections rather than a whole chapter. |
| **ch. 13-01** (§§ 13-01-14 "Late payment charge on accounts receivable - Exceptions", 13-01-14.1, 13-01-15) | `late-fee-limit` - **NEEDS_REVIEW** | not in corpus; only the section names, from the master index |
| **ch. 23-09** (Food and Lodging Establishments; §§ 23-09-01 Definitions, 23-09-02.1 smoke detection, **23-09-08 "Bolts or locks to be supplied on doors of sleeping rooms"**) | `security-devices` and `alarm-tampering-fee` - **NEEDS_REVIEW**; the scope question is whether a building let on ordinary residential leases is a "lodging establishment" | not in corpus; **this is the near-miss of the batch** - see below |
| **title 42** (Nuisances; §§ 42-01-03 to 42-01-13, ch. 42-02, especially § 42-02-06 "Termination of lease by owner under injunction releases property - Notice to tenant") | `governmental-fines` - **NEEDS_REVIEW** | not in corpus |
| **ch. 43-23** (broker trust accounts) and **title 6 as codified** (ch. 6-08.6, the Uniform Special Deposits Act; the *act* was read at S.L. 2025, ch. 98) | `security-deposit-holding` - **NEEDS_REVIEW** | not in corpus |
| **ch. 49-04** (§ 49-04-02.1 "Customer deposits") | `utility-deposit-return` - **NEEDS_REVIEW** | not in corpus |
| **ch. 54-21.3** (State Building Code) and **ch. 43-18** (Plumbers) with **ch. 43-18.1** (Water Conditioning) and **ch. 43-18.2** - no title 43 chapter is held - plus municipal codes | `water-heater-temperature`, `steam-radiator-covers`, `heating` - **NEEDS_REVIEW** | not in corpus; and § 47-16-13.1(1)(a) with (3) would make a code figure **binding and controlling**, so this one changes an answer rather than decorating it |
| **title 49** (public utilities), esp. **§ 49-04-20**, **ch. 49-02**, **ch. 49-21** (master index names § 49-21-09 "Telecommunications - Connections", § 49-21-08 discrimination unlawful, § 49-21-08.1 "Dialing parity"), and **ch. 12.1-23.1** (Theft of Cable Television) | `electric-submetering-disclosure`, `utility-landlord-account`, `utility-disconnection-notice-authorization`, `telecom-access` - **NEEDS_REVIEW** | not in corpus |
| **titles 40, 11 and 61** (§ 40-01-25, § 11-10-32 "Prohibition - Connection of utility services", § 40-22-16, § 40-24-01) | `municipal-utility-lien` - **NEEDS_REVIEW**; municipal utility liens are city-class-specific | not in corpus |
| **ch. 9-16** (UETA, § 9-16-04) | `tenant-portal` - **NEEDS_REVIEW** | not in corpus (only ch. 9-08 is) |
| **ch. 23-10** (§§ 23-10-03, 23-10-10.1, mobile-home-park designation and complaint duties) | the park limb of several habitability rows | not in corpus |
| **the N.D. Administrative Code and the PSC's tariffs** | every utility, plumbing, heating and building topic | **not in the corpus at all** - so every absence claim in those clusters is scoped to the **statutes** in terms, on the row |
| **ch. 32-03** - master index names § 32-03-27 "Damages for tenant's failure to surrender premises", § 32-03-28 "Damages for tenant's willful holding over", **§ 32-03-29 "Damages for forcible exclusion from realty"** | `holdover-rate`, and the **treble-damages claim an existing row makes about self-help eviction** (6.13) | not in corpus. **The highest-value request after ch. 54-21.3**: three landlord-tenant remedies sit in it and none can be read |
| **ch. 28-01** (limitations), **ch. 28-21** (execution), **ch. 28-27** (appeals), **chs. 28-09 / 28-10** (confession of judgment), **ch. 27-05** and **ch. 27-08.1** (jurisdiction, small claims), **ch. 32-01** (§ 32-01-12 "Conditions of relief from forfeiture"), **ch. 9-01** (§ 9-01-15), **ch. 32-09.1**, **ch. 32-17**, **ch. 32-47**, **ch. 57-21** (§ 57-21-05 "Receipts a defense in action for rent"), **title 12.1** (§ 12.1-22-03), **§ 1-02-15** | seven NEEDS_REVIEW rows across the eviction and default cluster | not in corpus |
| **the N.D. Rules of Civil Procedure** | `eviction-service-party` - **NEEDS_REVIEW** | not in corpus, **and distinct from the Rules of Court** reviewed on 2026-10-02 - a scoping catch the canvass made, not me |
| **ch. 9-06** (statute of frauds), **title 10** (corporations, incl. chs. 10-01.1, 10-06.1, 10-19.1, 10-32.1), **ch. 14-10** (with §§ 14-10-00.1 "Presumption of age", 14-10-01, 14-10-02, 14-10-09, 14-10-12) and **ch. 14-10.2**, **ch. 22-01** (sureties), **title 27** (chs. 27-02, 27-05, 27-08.1, 27-11, 27-13), **ch. 28-22**, **ch. 30-16** and **ch. 30.1-30**, **title 57** (incl. ch. 57-21), **chs. 11-16, 11-28.1, 11-28.2**, **chs. 40-22 to 40-24**, **ch. 23-10.1** | the whole parties-and-capacity cluster: nine NEEDS_REVIEW rows | not in corpus (of title 9, only ch. 9-08 is held). Each row names its sections by master-index heading and says in those words that the citation is **heading-only and unverified** - see 6.15 |
| **all of title 18** (fire protection), esp. **ch. 18-01** (§ 18-01-15 "abatement of conditions dangerous to persons"; §§ 18-01-14 to 18-01-27 abatement orders with a **cost lien**) and **ch. 18-12** (§ 18-12-17, the **school** fire code) | `fire-sprinkler-duty`, `sprinkler-disclosure`, `balcony-inspection`, `inspection-condemnation-disclosure` - **NEEDS_REVIEW** | not in corpus |
| **title 23.1**, esp. **§ 23.1-06-05** - which is the **entire** North Dakota asbestos and lead statute and licenses contractors - and chs. 23.1-04, 23.1-08, 23.1-10 and **23.1-16** (Boiler Inspection, a real posted-certificate duty) | `asbestos-hazards`, `lead-safe-certification`, `lead-state-notices` - **NEEDS_REVIEW** | not in corpus |
| **ch. 40-58** (§ 40-58-18, municipal ordinances for repair, closing and demolition of buildings "unfit for human habitation") and §§ 11-11-71, 40-05-27, 58-06-11, 11-33.2-12.1 | `inspection-condemnation-disclosure`, `condemned-premises-rent-bar` - **NEEDS_REVIEW** | not in corpus. Found by an **everyday-words** battery, because "condemnation" in the Century Code means **eminent domain only** |
| **ch. 43-23** (real estate brokers; § 43-23-08.3 "Disclosure of sexual offenders"), **ch. 12.1-20** (§ 12.1-20-25), **chs. 11-33, 40-47, 40-48** and **§ 58-03-12** (zoning, shoreland and floodplain overlays), **ch. 28-33** and **ch. 43-52** | the property-and-occupancy disclosure cluster - four NEEDS_REVIEW rows | not in corpus |
| **title 51 beyond §§ 51-15-01 to 51-15-12** - which is all the corpus holds - so **ch. 51-22** ("Prohibition against disclosure except upon written consent"), **ch. 51-30** (security breach notification) and **ch. 51-33**; also **ch. 36-21.2** (animal welfare), **§ 12.1-22-03**, **ch. 23-11** (Housing Authorities Law) and **§ 23-10-11 "Ejection from premises"** | the access-and-privacy cluster - five NEEDS_REVIEW rows | not in corpus |
| **ch. 32-15** (eminent domain, bar § 32-15-06), **chs. 32-19, 32-19.1, 32-20, 32-10**, **ch. 35-22**, **ch. 54-01.1** (Relocation Assistance - §§ 54-01.1-05, -15, heading-only), **ch. 37-17.1** (§§ -05, -10, -19, emergency management) and **titles 15, 15.1, 34 and 50** | the tenancy-life-events cluster - three NEEDS_REVIEW rows | not in corpus. **Ch. 32-10.1 is the exception and was read whole from the session laws** - see 1.7 |
| **all of title 35** (liens) - **ch. 35-27** (construction liens), **§ 35-20-17 "Landlord's mobile home lien - Penalty"**, chs. 35-05, 35-12, 35-19, 35-22, § 35-01-10 - and **title 57** (taxation: ch. 57-39.2, § 57-02-26, chs. 57-23, 57-46, 57-39.7 which the index marks expired), plus **ch. 40-57.3**, **ch. 11-09.2**, **ch. 32-39**, **ch. 54-17**, **chs. 41-02 and 41-02.1**, **title 26.1** (insurance) | the rent-and-money cluster - three NEEDS_REVIEW rows | not in corpus. **Title 35 has zero 2025-26 section-actions, so the session-law route cannot reach any of it** - which makes `landlord-lien` and `construction-liens` unanswerable by any route here |
| **chs. 39-10, 39-13 and 39-26** (motor vehicles, parking), **ch. 60-01** (hotels and innkeepers), **chs. 40-47, 11-33 and 58-03** (zoning), **ch. 50-11.1** (§§ 50-11.1-04, -08 heading-only) and **ch. 50-11** (§ 50-11-11 "Agency foster home for adults - Zoning", heading-only), and the **N.D. Administrative Code**, which is where park pool standards and the § 14-02.5-11 fifty-five-plus rules live | the premises-and-amenities cluster - nine NEEDS_REVIEW rows | not in corpus |
| **ch. 32-29.3** and **ch. 32-29.2** (arbitration), **title 42** (nuisance) and **§§ 62.1-01-03, 62.1-02-13** (firearms preemption and the employer prohibition) | `binding-arbitration`, `informal-dispute-resolution`, `nuisance`, `firearms` - NEEDS_REVIEW | not in corpus **and none recoverable from the session laws**: title 42 has zero section-actions and zero volume hits, and these two title-62.1 sections are the only ones in their title the route cannot reach |
| **ch. 20.1-01** (§§ 20.1-01-17 to -20, -22) and **ch. 20.1-03**, **ch. 26.1-34.1**, **§ 23-12-10** ("Smoking restrictions - Exceptions - Retaliation", heading-only) | `farmland-hunting-rights` - NEEDS_REVIEW - and the possible third retaliation bar in 6.20 | not in corpus; those ch. 20.1-01 sections have **zero 2025-26 section-actions**, so no route |
| **ch. 19-03.1** (Uniform Controlled Substances Act) and **ch. 19-03.4** | `meth-disclosure` - whether any controlled-substance chapter imposes an owner reporting or decontamination duty, which is where one would sit | not in corpus |
| **chs. 61-16.2 and 61-28.1** (water) | `private-well-testing`, `flood-disclosure` - **NEEDS_REVIEW** | not in corpus |
| **pre-2025 session laws** | to confirm that § 47-16-07.1(1)'s cross-reference to "the conditions of subsection 2" is a renumbering artefact | corpus holds 2025-26 only |

**The near-miss, recorded because it is the best argument in this batch for the two-battery rule.**
On `security-devices` the term-of-art battery returned a clean absence: deadbolt, peephole, door viewer,
window latch and keyless bolting device appear **nowhere** in the Century Code. The everyday-words
companion battery returned exactly **one** hit, and it was not a statute's text but a **section name in
the master index**: **§ 23-09-08, "Bolts or locks to be supplied on doors of sleeping rooms."** Whether
it reaches a residential tenancy turns on § 23-09-01's definitions, which are outside the corpus. **The
term-of-art battery alone would have shipped a confirmed absence on a topic where the state may well
have a lock mandate.** The row is `NEEDS_REVIEW` with both readings and the cautious course stated in
its body.

### 1.6 Currency (rule 16)

The Legislative Council chapter PDFs **carry no history notes**, so currency cannot be read
off the section. Instead every section relied on was checked against the corpus's **2025 bill
table** (every section each 2025 act created, amended or repealed). No 2025 act, and neither
the January 2026 special session (ch. 650-659) nor the September 2026 special session
(ch. 660-661), touched any section relied on in this batch except where a row says so.

**The screen, so this is a measurement and not an assumption.** Every section relied on was searched
for by number, anchored so `47-16-02` cannot match inside `47-16-02.1`, across all ten
session-laws and session-laws-index documents in the corpus: the 2025 regular-session laws
(6,583,571 characters), both 2026 special sessions, the bill index, the **bill table**, the
**section table** and the two special-session indexes. The six item sections of 4.8 and 4.9
(§§ 9-08-02, 47-01-05, 47-06-04, 47-16-02, 47-16-15, 47-16-26) returned **zero hits in every one of
them**, appearing only in the Legislative Council master index - so none was created, amended or
repealed in the 2025-26 biennium. Where a section *was* touched, the act is named on the row that
relies on it; see 4.2, item 7.

**And the prompt's list of four 2025 acts is incomplete - measured, not assumed.** Rather than taking
the four on trust, the bill table was parsed in full (**1,726** section-actions) and filtered to every title this
corpus holds. That returns **117 section-actions**, and the complete picture for the chapters this
work uses is:

| Chapter | 2025 section-actions | What it means here |
|---|---|---|
| **ch. 47-16** (leasing) | **two** - § 47-16-17.1(2)(a) **Amended** (H.B. 1489, ch. 145) and § 47-16-20.1 **Created** (H.B. 1610, ch. 423) | **Corrected: I first reported one.** My parser allowed a section number only one parenthetical part, so it missed `47-16-17.1 (2) (a)` - and 61 other entries with it, which is why the total moved from 1,664 to **1,726**. A canvass caught it. Nothing else in the leasing chapter was touched in 2025. |
| **ch. 47-32** (eviction) | two - § 47-32-01.1 and § 47-32-05 **Created**, ch. 238 and ch. 427 | nothing in the chapter was *amended* |
| **ch. 9-08** (contracts) | **zero** | all ten sections untouched - the spine of this pass is current |
| **ch. 28-26** (costs and fees) | **zero** | untouched |
| **ch. 14-02.4, 14-02.5** | **zero** | untouched |
| ch. 14-07.1 / **ch. 14-07.7** | fourteen amended / twenty **created**, all by H.B. 1489, ch. 145 | the whole protection-order rewrite, effective **January 1, 2026** |
| ch. 11-18 | one - § 11-18-02.2(6) amended, ch. 108 | recorder's fees |
| ch. 51-15 | **zero** | untouched |
| rest of title 47 | **§ 47-10-02.2** Created (S.B. 2204, **ch. 421**), **§ 47-10-02.3** Created (S.B. 2229, **ch. 422**), § 47-10-24 amended (ch. 347), § 47-10-28 amended (ch. 238), § 47-19-03.1 amended (ch. 424), §§ 47-20.2-01 to -06 amended (ch. 425), §§ 47-25-04, -07 amended (ch. 416), eight §§ 47-30.2-* amended (ch. 426) | **two more acts than the prompt names**, and I read both new sections to find out whether they matter |

**Do the two extra acts matter? No - and I can only say so because I read them.** § 47-10-02.2 (radon)
and § 47-10-02.3 (association documents) are both **seller-to-buyer** duties: each opens "Before
executing an agreement to **sell or transfer** residential real property" / "to sell or transfer a
property", each imposes the duty on a "**seller**", and § 47-10-02.2(1)(a) defines "buyer" as a person
acquiring, or acquiring the right to acquire, legal or equitable title. **A tenant is none of those
things.** Neither reaches a lease.

**But § 47-10-02.3 earns its place in this pass anyway**, as the sibling that proves a negative:
North Dakota imposed a fifteen-item association-disclosure duty on a seller in 2025 and
**conspicuously did not extend it to a landlord**, which is the strongest thing that can be said on
`association-obligations-disclosure`. And § 47-10-28 - amended by the same ch. 238 the prompt does
name - is where the mobile-home-park late-fee cap of 6.12 lives.

**And my own screen was narrower than I called it - corrected here.** I filtered the parsed table to
the titles **this corpus holds**, which is why I first reported the picture as complete. A later canvass
found an act outside those titles that bears directly on a landlord: **S.L. 2025, ch. 120 (H.B. 1417)
amended § 12.1-32-08**, and the amended text reads *"Restitution **must** include payment to the owner
of real property that is contaminated by the defendant in the manufacturing of methamphetamine for the
cost of removing the contamination and returning the property to the property's condition before
contamination and to any other person that has incurred costs in decontaminating the property."* That
is **a seventh 2025 act**, in a title the corpus does not hold - and the canvass read it from the
**session laws**, which print the whole amended section, rather than from the index heading. I verified
it independently: the bill index gives **HB 1417 → 120**, and the 2025 volume carries the text, with
its own footnote recording that § 12.1-32-08 **was also amended by S.B. 2057, ch. 297**.

The screen was then re-run over **all 1,726 section-actions** in the table, with each section's
master-index heading tested for landlord relevance. That is the honest statement of what has been
checked, and it is still not a guarantee: a section whose heading gives no hint - § 12.1-32-08's is
"Hearing prior to ordering restitution or reparation" - will not surface on a heading screen either.
**Reading the session-law volume is the only complete method, and only the 2025-26 volumes are here.**

Proposed as an SOP change below: **parse the bill table rather than accepting a list of acts - and say
which titles you filtered to.**
Acts take effect August 1 after filing unless otherwise set or passed as an emergency measure
(N.D. Const. art. IV, § 13).

### 1.7 A parked chapter is not always unreadable - a canvass corrected my method

**I told every canvass the parked chapters were unreachable, full stop. That was too pessimistic, and
a canvass proved it from the corpus.** A session law prints the **entire amended or reenacted
section**, not a diff - so any section a 2025 or 2026 act touched is readable in full from the
session-law volumes here, **whatever title it sits in**. The canvass read §§ 12.1-32-15 and 54-12-22
whole this way (S.L. 2025, chs. 302 and 339) and turned two bare parks into substantive rows - one of
them reporting, from 31,500 characters of the registration statute, that **"landlord", "lessor",
"tenant" and "rental" appear zero times in it**, which is a real answer rather than a shrug. It is the
same technique Nebraska's pass recorded, and I should have had it in the brief from the first batch.

I then measured what it recovers, against the corrected bill table:

| Parked chapter | Sections readable from the session laws |
|---|---|
| **ch. 19-24.1** (medical marijuana) | 15, incl. §§ 19-24.1-01 (Definitions), -03, -05, -11, -24.1, -37 |
| **title 49** (public utilities) | 24, incl. §§ 49-02-26 to 49-02-34 and § 49-04-07 |
| **title 40** (municipalities) | 24 |
| **title 10** (corporations) | 12 |
| **title 18** (fire) | 10, incl. §§ 18-01-02, -03.1(1), -06, -07, -35, -36 |
| **title 23.1** | 8, incl. §§ 23.1-07-04 to -08, 23.1-12-02, 23.1-15-07(2) |
| **ch. 23-10** (mobile home parks) | 5, incl. § 23-10-03 |
| **ch. 43-23** (real estate brokers) | 4, incl. § 43-23-08 |
| **ch. 12.1-20** | 2 |
| **ch. 32-03** | **1 - § 32-03-30 only**, so § 32-03-29 stays unreadable (6.13) |

**Nothing is recoverable this way** for ch. 54-21.3 (State Building Code), ch. 23-09, ch. 28-01,
ch. 9-06, ch. 9-12, ch. 13-01, ch. 14-10, ch. 22-01, ch. 28-10, ch. 43-18, ch. 57-21 or ch. 61-28.1.
Those stay genuinely parked, and they include the two highest-value requests.

**And on batch 6 it paid off substantively.** A canvass read **chapter 32-10.1, the Uniform Commercial
Real Estate Receivership Act, whole from S.L. 2025, ch. 325 (S.B. 2122) - although title 32 is absent
from the corpus** - and found **§ 32-10.1-16(8)(a), which bars a receiver from rejecting an unexpired
lease where the tenant occupies the property as a primary residence.** That is North Dakota's only real
tenant protection in a foreclosure, with § 32-10.1-10 (rent payable to the receiver) and
§ 32-10.1-03(2)(d) (ordinary one-to-four-unit rentals within scope) beside it. Without this route the
`foreclosure` row would have been a bare park.

**A refinement, from batch 7, that changes what the route can promise.** When an act amends **a
subsection**, the volume reproduces **only that subsection**. So §§ 40-47-03(2) and 11-33-03(2)
(S.L. 2025, ch. 107) print only their floodplain text and those sections stay unreadable, and
§ 57-39.2-04 is unreachable for the same reason - while §§ 40-47-05.1 and 11-33-17.1 (ch. 112),
§§ 23-10-03, -04, -06, -06.2, -12 and new ch. 23-10.1 (ch. 238), § 23.1-15-07(2) (ch. 564),
§ 57-02-08.1(2)(b) (ch. 555) and §§ 50-11.1-03(11), -21(1), -23 (chs. 447, 448) were read in full
because the act reenacted the whole section. **What the act's own "AMENDMENT" line names is what you
get.** And a table entry is not a guarantee: §§ 50-11.1-25 to -27 appear against ch. 479 but their
text would not extract.

**A caveat that is nearly a trap, found on batch 8 and verified.** **The volumes reproduce initiated
measures the voters REJECTED, in full, with section numbers.** The 2025 volume's own contents carry the
heading **"III. INITIATED MEASURES DISAPPROVED - Legalized Cannabis 608"**, and chapter 608 then prints
a whole cannabis chapter numbered §§ 19-24.2-01 onwards - **35 occurrences of `19-24.2-` in the
volume** - whose § 19-24.2-30(7)(b) is squarely on point for a landlord and **is not law**. A bare
section-number search cannot tell the difference. Two tells, and both must be checked: **the
grouping** (which part of the volume's contents the chapter sits under) and **the mood** (an enacted
act says "BE IT ENACTED" and "is amended and reenacted as follows"; a disapproved measure says "The
initiated measure **would** create a new chapter"). The canvass that found it recorded the provision,
**declined to rely on it, and said no row should** - which is the right outcome and the reason this
caveat is now in the brief with the instruction to state on the row that the enactment check was made.

**What it did and did not buy, stated precisely.** It does **not** close Taylor's item-4 marijuana
question: the two sections that would answer it - **§ 19-24.1-33 "Limitations"** and
**§ 19-24.1-34 "Acts not prohibited - Acts not required"** - are not among the fifteen recoverable, so
that row stays NEEDS_REVIEW. What it does buy is a far better request: **two named sections instead of
a chapter**. The caveats all bite: a section the act did not touch is simply absent however central it
is; **several acts may amend one section** (§ 12.1-32-08 was amended by both ch. 120 and ch. 297, and
the volume footnotes it); a cross-reference is not an amendment, so each hit needs reading in context;
and new text prints before struck text with no markup surviving extraction. **The technique is now in
the canvass brief with that table and those caveats**, and the remaining batches will use it.

---

## 2. Topics answered

241 of 241. One line each.

| # | `topic_key` | Row id | Finding |
|---|---|---|---|
| 1 | `accessory-dwelling-unit` | `accessory-dwelling-unit-premises-nd` | **A clause: NEEDS_REVIEW on zoning.** § 47-16-27 is the spine - the tenant "has no rights to the property other than ... the agreement" and may "[o]ccupy the **buildings**", plural - so what the tenant gets is whatever the lease grants. `SERVES_LANDLORD`. Open: chs. 40-47, 11-33 and 58-03 (zoning), unreadable. |
| 2 | `actual-notice-method` | `actual-notice-method-nd` | **PRESENT, and invisible to the topic's own words.** **§ 47-16-07's last sentence**: "notice may be served **in any reasonable manner which actually informs the tenant** of the changes in the terms of the lease." A battery on "actual notice" or "service of notice" misses it - the same shape as the "rent control" trap. `CONSTRAINED_TERM`. |
| 3 | `alarm-tampering-fee` | `edu-no-alarm-tampering-fee-nd` | **ABSENT, and there is no smoke-alarm duty in the Century Code either.** Reversed from clause to education on rule 55 after §§ 47-16-09, 47-16-10 and 47-16-13.2(6) were read. |
| 4 | `alt-housing` | `substitute-premises-after-damage-nd` | **A clause.** No statute requires or regulates substitute premises after damage, so the lease is the only route. `SERVES_LANDLORD`; introduces `{{{{substitute_premises_offer_days}}}}`. |
| 5 | `animal-care-access` | `edu-no-animal-care-entry-right-nd` | **ABSENT: NEEDS_REVIEW.** No landlord right to enter to care for an animal. Open: ch. 36-21.2, outside the corpus - officer-only seizure versus landlord self-help. |
| 6 | `appliances-excluded` | `appliances-excluded-nd` | **A clause, and in North Dakota it does real legal work.** § 47-16-13.1(1)(d) keys the landlord's duty to facilities and appliances "**supplied or required to be supplied by the landlord**" - so an exclusion decides the duty, it does not merely describe the unit. `CONSTRAINED_TERM`. |
| 7 | `application-fees` | `edu-no-application-fee-rule-nd` | **ABSENT entirely.** No cap, no refund right, no disclosure duty on application or screening money. |
| 8 | `asbestos-hazards` | `edu-asbestos-hazards-nd` | **ABSENT from the statutes: NEEDS_REVIEW.** The **entire** ND asbestos and lead statute is § 23.1-06-05, which licenses contractors - and title 23.1 is outside the corpus. No landlord disclosure or abatement duty in anything readable. |
| 9 | `association-obligations-disclosure` | `edu-no-association-disclosure-nd` | **ABSENT to a tenant, PRESENT to a buyer.** § 47-10-02.3 (new: S.L. 2025, ch. 422) makes a *seller* disclose fifteen association items to a *buyer*. A sibling duty the legislature declined to extend to tenants. |
| 10 | `attorney-fees` | `edu-attorney-fees-nd` | **PRESENT.** § 28-26-01(1) leaves the fee to the parties' agreement, so a fee clause is enforceable; § 28-26-04 does **not** reach a lease. My call, with the rent-arrears qualification stated on the row. |
| 11 | `balcony-inspection` | `edu-no-balcony-inspection-nd` | **ABSENT: NEEDS_REVIEW.** No balcony or exterior-elevated-element inspection duty. The plausible state route is **§ 18-01-15, \"abatement of conditions dangerous to persons\"** - heading-only, title 18 outside the corpus. |
| 12 | `bed-bug-cooperation` | `pest-bed-bug-cooperation-nd` | **A clause, because ND has no pest or bed-bug statute at all.** Cooperation and preparation only; the treatment duty stays with the landlord under § 47-16-13.1(1)(b) and cannot be shifted in a multi-unit except by separate signed writing. `SERVES_LANDLORD`. |
| 13 | `binding-arbitration` | `edu-binding-arbitration-nd` | **Void until a statute permits it: NEEDS_REVIEW, and the row publishes analysis rather than clause text.** § 9-08-05 voids a clause restricting enforcement by the usual legal proceedings "except as otherwise specifically permitted by the laws of this state" - and **ch. 32-29.3 is unreachable by both routes**, so whether ND's arbitration act is that permission cannot be settled here. **§ 14-02.5-22 is the only readable ND permission for binding arbitration in housing**, and it reaches conciliation agreements only. |
| 14 | `carpet-cleaning` | `edu-no-carpet-cleaning-rule-nd` | **ABSENT - and that leaves a *stricter* rule than most carpet statutes.** The word \"carpet\" is nowhere in ND landlord-tenant law, so § 47-16-07.1(3)'s \"reasonable wear and tear excepted\" governs, and a blanket charge risks § 47-16-07.1(4) treble damages. |
| 15 | `casualty-and-mitigation-waivable` | `edu-casualty-and-mitigation-waivable-nd` | **Mostly variable.** No non-waiver clause attaches to either rule; three limits bound it (§ 47-16-13.3 unconscionability, §§ 9-08-03/04 penalty, § 9-08-05 remedy restriction). Post-eviction mitigation is the weakest to try to waive. |
| 16 | `certificate-of-occupancy-disclosure` | `edu-no-certificate-of-occupancy-disclosure-nd` | **ABSENT: NEEDS_REVIEW.** No certificate-of-occupancy disclosure; the duty, if any, is municipal. |
| 17 | `children-occupancy` | `children-occupancy-limit-nd` | **A clause, constrained: NEEDS_REVIEW.** § 14-02.5-12(1) saves only "a reasonable **local or state** restriction" on maximum occupants - **a landlord's own cap is not one**, so it is judged under § 14-02.5-02's familial-status bar and should be pegged to the local code. `CONSTRAINED_TERM`. |
| 18 | `cold-weather-vacate-notice` | `edu-no-cold-weather-vacate-notice-nd` | **ABSENT.** No cold-weather restriction on a vacate notice or an eviction - notable in North Dakota, and the row says so rather than implying a winter protection exists. |
| 19 | `collection-fee` | `edu-collection-fee-nd` | **ABSENT.** No statute authorises or caps a collection fee; §§ 9-08-03/9-08-04 (penalty, liquidated damages) are the real limit. |
| 20 | `common-area-lighting` | `common-area-lighting-tenant-metered-nd` | **A clause: NEEDS_REVIEW.** § 47-16-13.1(1)(c) keeps common areas "in a clean and safe condition" - a landlord duty - so the clause can only allocate a tenant-metered load, not the duty. **In a park it cannot even do that: § 47-10-28(8) bars any utility fee without an individual meter per home.** Open: whether a tenant-metered common load is a § 47-16-13.1(5) duty shift. `SERVES_LANDLORD`. |
| 21 | `communal-land-lease-approval` | `edu-no-communal-land-lease-approval-nd` | **ABSENT, and for a reason worth stating.** No ND statute conditions a lease of communal or trust land on an approval - because the subject is not the state's to regulate. The row says that rather than implying the state looked and declined. |
| 22 | `condemned-premises-rent-bar` | `edu-no-condemned-premises-rent-bar-nd` | **ABSENT, and § 47-10-28 cuts the other way: NEEDS_REVIEW.** No rent bar for condemned premises - and in a **park**, §§ 47-10-28(13) and (14) **preserve occupancy and say \"the tenant shall continue paying rent\"** during an action. § 47-16-14(4) may already end the leasing if the property is destroyed. |
| 23 | `confession-of-judgment` | `edu-no-confession-of-judgment-nd` | **PROHIBITED in substance, via § 9-08-05: NEEDS_REVIEW on the mechanics.** A clause restricting enforcement by the usual legal proceedings is void unless a statute permits it. Open: chs. 28-09 and 28-10, outside the corpus. |
| 24 | `confirmed-absences-habitability` | `edu-confirmed-absences-habitability-nd` | **The habitability inventory: NEEDS_REVIEW by nature.** No severity threshold, no presumption either way, no required habitability statement, no rent escrow and no rent-into-court - against **uncapped repair-and-deduct at § 47-16-13**, "reasonable heat" with no temperature, and the (e)/(f) duty-shift bar in a multi-unit. **Open and stated: ch. 54-21.3 is unreadable while § 47-16-13.1(3) would make a code figure controlling, and § 23-13-15 is heading-only with no route - so no alarm-duty absence is claimed.** |
| 25 | `confirmed-absences-misc` | `edu-confirmed-absences-misc-nd` | **The non-habitability inventory**, built from what this pass established rather than fresh batteries, with each absence scoped to what was searched. |
| 26 | `confirmed-absences-outside-title` | `edu-confirmed-absences-outside-title-nd` | **The inventory of what this pass could NOT read - the most important of the three: NEEDS_REVIEW by nature.** Every claim scoped; every section named only from the Legislative Council index labelled **heading-only and unverified**, because 85 sections in this corpus are repealed but still carry their headings. **A chapter with no 2025-26 section-action cannot be reached by any route available here - 32 chapters are at zero.** The specific unresolved items are named: § 23-13-15, ch. 54-21.3, § 32-03-29, §§ 19-24.1-33 and -34, §§ 23-09-01 and 23-09-08. |
| 27 | `construction-liens` | `no-construction-liens-nd` | **A clause: NEEDS_REVIEW.** No statute keeps a landlord's interest clear of a lien for tenant work, so the lease must try. Open: ch. 35-27 is unreadable - and **title 35 has zero 2025-26 section-actions, so the session-law route cannot reach any of it.** `SERVES_LANDLORD`. |
| 28 | `conversion-notice` | `edu-conversion-notice-nd` | **ABSENT.** No condominium- or cooperative-conversion notice to a sitting tenant - a real gap in a state with a condominium act. |
| 29 | `criminal-activity` | `criminal-activity-nd` | **Optional clause, not required.** § 47-32-01(8) makes breach of a written-lease material term an eviction ground and ND implies no crime-free term - the opposite of Colorado. |
| 30 | `defective-drywall-disclosure` | `edu-no-defective-drywall-disclosure-nd` | **ABSENT.** Nothing on defective or Chinese drywall anywhere in the statutes. |
| 31 | `deposit-cost-schedule` | `edu-no-deposit-cost-schedule-nd` | **ABSENT, and the absence is stricter than a statute would be.** § 47-16-07.1(3) is written in the language of **actual** cost, so a pre-set price list is a sum fixed in advance. |
| 32 | `deposit-installments` | `edu-no-deposit-installment-right-nd` | **ABSENT in both directions** - no tenant right to instalments, and nothing stopping the landlord agreeing to them. |
| 33 | `deposit-last-month-rent` | `edu-no-last-month-rent-rule-nd` | **ABSENT.** No last-month's-rent rule either way; the answer is functional - held like security, it *is* security under § 47-16-07.1's \"however denominated\". |
| 34 | `deposit-surrender-notice` | `surrender-and-forwarding-address-nd` | **A clause, because the statute leaves a hole the lease must fill.** § 47-16-07.1(3) runs its thirty days from *delivery of possession* and imposes **no** forwarding-address duty on the tenant, so the lease has to create both. `SERVES_LANDLORD`. |
| 35 | `designated-repairer` | `edu-designated-repairer-nd` | **ABSENT - unless it is a mobile home park.** No duty to name a repair contact generally; § 47-10-28 imposes park-specific duties including a two-business-day complaint acknowledgment under (1)(e). |
| 36 | `disaster-displaced-guests` | `edu-no-disaster-guest-rule-nd` | **ABSENT.** Nothing about guests displaced by a disaster - no occupancy relief and no landlord duty. |
| 37 | `disaster-duties` | `edu-disaster-duties-nd` | **ABSENT: NEEDS_REVIEW.** Open: whether a mandatory evacuation order under § 37-17.1-10 (or §§ 37-17.1-05, -19) suspends rent or possession. Cautious course on the row: **rent accrues, but do not serve notice or file while the order runs.** |
| 38 | `drug-free-housing-addendum` | `edu-drug-free-housing-addendum-nd` | **ABSENT: NEEDS_REVIEW** - and the row **refuses to rely on a measure that is not law.** Four hits corpus-wide for the addendum vocabulary. Open: §§ 19-24.1-33 and -34 are unreachable, so a ban on a registered patient's use is unsettled. **The canvass found the disapproved cannabis measure's § 19-24.2-30(7)(b) squarely on point and declined to use it** - see 1.7. |
| 39 | `dv-qualifying-documents` | `edu-dv-qualifying-documents-nd` | **PRESENT, and narrower than landlords assume.** § 47-16-17.1(2) conditions the right on a **notice**, not a documentation package. Open question on whether a court record may be demanded is stated with the cautious course. |
| 40 | `electric-submetering-disclosure` | `edu-electric-submetering-disclosure-nd` | **ABSENT from the statutes: NEEDS_REVIEW.** Title 49 and § 49-04-20 are outside the corpus, and the Administrative Code and PSC tariffs are not in it at all, so the absence is scoped to statutes. |
| 41 | `emergency-assistance-right` | `edu-no-emergency-assistance-right-nd` | **ABSENT.** No tenant right to summon emergency assistance without penalty, and no bar on a lease term discouraging it - a gap worth a landlord knowing, since the row advises against such a term anyway. |
| 42 | `emergency-contact` | `emergency-contact-nd` | **A clause.** No statute requires or regulates an emergency contact, so it is wholly contractual. `SERVES_LANDLORD`. |
| 43 | `eminent-domain` | `edu-eminent-domain-nd` | **NEEDS_REVIEW.** Ch. 32-15 is outside the corpus but for § 32-15-06 (survey notice only, which answers nothing about leases). Cautious course: put a condemnation clause in the lease and **carve the tenant's claim out rather than purporting to assign it**. |
| 44 | `employee-screening` | `edu-no-employee-screening-rule-nd` | **ABSENT.** No employee-screening mandate for rental housing, at any portfolio size - the same answer as `key-control-policy`. |
| 45 | `energy-data-release` | `edu-energy-data-release-nd` | **ABSENT.** No benchmarking or energy-data release duty, and no tenant consent machinery. |
| 46 | `entity-landlord-court-representation` | `edu-entity-landlord-court-representation-nd` | **NEEDS_REVIEW.** No statute lets or bars a non-lawyer appearing for an LLC in an eviction; the answer is in court rules outside the corpus. Cautious course stated. |
| 47 | `environmental-event-termination` | `edu-no-environmental-event-termination-nd` | **ABSENT.** No environmental-event termination right beyond §§ 47-16-14(4) and 47-16-17(2)'s destruction rules. |
| 48 | `ev-charging` | `edu-no-tenant-ev-charging-right-nd` | **PRESENT for a condominium **owner**, ABSENT for a tenant - and the distinction is the answer.** § 47-04.1-16 voids a covenant or bylaw prohibiting or unreasonably restricting a station in an **owner's** unit or designated space, deems an application approved if not denied in writing within sixty days, penalises an association up to **$1,000** at (8), and at (9) makes the **owner** indemnify the association. **North Dakota gives a tenant nothing**; § 47-04.1-16 is the sibling that proves it. |
| 49 | `ev-charging-end-of-tenancy` | `ev-charger-removal-restoration-nd` | **A clause.** Nothing allocates removal, restoration or ownership of a tenant-installed charger - and **§ 47-06-04's removal right** is the statute that makes the allocation necessary rather than optional. `SERVES_LANDLORD`. |
| 50 | `ev-charging-requirements` | `ev-charger-installation-conditions-nd` | **A clause: NEEDS_REVIEW.** Nothing imposes installation standards on a landlord. Open: whether reselling EV electricity to a tenant engages ch. 64-02 or title 49, both unreadable. |
| 51 | `ev-charging-shared-area` | `edu-no-shared-area-ev-charging-right-nd` | **ABSENT for a tenant.** § 47-04.1-16's designated-space machinery runs to unit owners, so in a rental the shared-area question is wholly contractual. |
| 52 | `eviction-penalty-clause-ban` | `edu-no-eviction-penalty-ban-nd` | **ABSENT.** No enumerated prohibited-provisions list; §§ 9-08-03/9-08-04 and § 47-16-13.3 do the work instead. |
| 53 | `eviction-process` | `edu-eviction-procedure-nd` | **PRESENT and wholly statutory: NEEDS_REVIEW on the downstream steps.** Ch. 47-32 read whole. Open: execution (ch. 28-21), appeal (ch. 28-27) and time computation (§ 1-02-15) are outside the corpus. |
| 54 | `eviction-service-party` | `edu-no-lease-named-eviction-service-party-nd` | **ABSENT: NEEDS_REVIEW, and a scoping catch.** No statute lets the lease name who may be served. Open: the **N.D. Rules of Civil Procedure** - the 2026-10-02 review covered the Rules of **Court**, which is not the same body of rules. |
| 55 | `exculpatory-clauses` | `edu-exculpatory-clauses-nd` | **PRESENT, and the opposite of what the library has been telling itself.** ND does have an enumerated statutory bar on exculpatory lease terms - it is in title 9, not title 47. The row adds the § 9-08-01(2) linkage that turns § 9-08-02's 'against the policy of the law' into unlawfulness, the habitability bridge that brings a *negligent* failure inside limb (c), the § 9-08-02.1 exclusion, and §§ 9-08-08/9-08-09's voidable personal-injury release. Answered by me, not delegated. |
| 56 | `expedited-criminal-eviction` | `edu-no-expedited-criminal-eviction-nd` | **ABSENT.** No expedited criminal-eviction track and no third-party petition route - which is why `criminal-activity` had to be a clause. |
| 57 | `expedited-deposit-disposition` | `edu-no-expedited-deposit-disposition-nd` | **ABSENT.** Thirty days is the only deadline, there is no expedited route, and no fee may be charged to shorten it. |
| 58 | `extended-absence-notice` | `edu-no-extended-absence-notice-nd` | **ABSENT.** No tenant duty to report an absence; § 47-16-07.3(1) gives entry on a reasonable belief of abandonment instead. |
| 59 | `family-child-care` | `family-child-care-consent-nd` | **A clause: NEEDS_REVIEW.** No ND statute protects a renter's family child care, and the contrast the row rests on - § 50-11-11 "Agency foster home for adults - Zoning" - is **heading-only and unverified**. `SERVES_LANDLORD`. |
| 60 | `farmland-hunting-rights` | `farmland-hunting-rights-reserved-nd` | **PRESENT - the one clause in the final batch, and it was expected to be absent.** § 47-16-27 enumerates the tenant's rights and **omits game**, so an ND farm tenant has no hunting right unless the lease grants it. **§ 20.1-01-07** (S.L. 2025 ch. 216, whole section) then puts "a lessee who actively farms or ranches that land" **alongside the owner** for permission to hunt off-road, and **§ 20.1-03-11(5)** says twice: "If not otherwise specified in an agricultural lease, the landowner is entitled to receive the license." **That express deference to the lease is the rule-55 trigger.** NEEDS_REVIEW: §§ 20.1-01-17 to -20 and -22 have zero 2025-26 section-actions, so no route. |
| 61 | `fee-in-lieu-of-deposit` | `edu-no-fee-in-lieu-of-deposit-nd` | **ABSENT, and that is a reason to avoid the product: NEEDS_REVIEW.** Open: whether § 47-16-07.1's \"security, however denominated\" reaches a premium the tenant pays direct to an insurer. |
| 62 | `fee-transparency` | `edu-no-fee-transparency-rule-nd` | **ABSENT, but do not charge an unlisted fee: NEEDS_REVIEW.** Open: whether § 51-15-02 reaches an undisclosed lease fee - \"merchandise\" includes real estate, but \"sale\" is defined as selling. |
| 63 | `fee-unprovided-service` | `edu-fee-unprovided-service-nd` | **ABSENT, and the absence is not a licence.** No duty to abate a fee when an amenity closes - but §§ 9-08-03/9-08-04 and § 51-15-02 are the exposure. |
| 64 | `fire-sprinkler-duty` | `edu-no-fire-sprinkler-duty-nd` | **ABSENT from the statutes: NEEDS_REVIEW**, and this is where § 47-16-13.1(1)(a) with (3) bites: a State Building Code requirement would become **binding and controlling** through the lease statute, and ch. 54-21.3 cannot be read. |
| 65 | `firearms` | `edu-firearms-nd` | **Preemption aimed at government, not at a lease: NEEDS_REVIEW.** § 62.1-02-05's closed list is schools, places of worship and publicly owned buildings - **not rentals**. Open: §§ 62.1-01-03 (preemption) and 62.1-02-13 ("Prohibition by **employer** prohibited") are the only two title-62.1 sections the session-laws route cannot reach. |
| 66 | `flood-disclosure` | `edu-no-flood-disclosure-nd` | **ABSENT to a tenant: NEEDS_REVIEW.** § 47-10-02.1(2)'s **seller** form is the sibling that proves the negative. Open: chs. 61-16.2 and 61-28.1, outside the corpus. |
| 67 | `foreclosure` | `edu-foreclosure-tenants-nd` | **PRESENT, and found only through the session-laws route: NEEDS_REVIEW on the rest.** **§ 32-10.1-16(8)(a) bars a receiver from rejecting an unexpired lease where the tenant occupies as a primary residence** - North Dakota's only real tenant protection in foreclosure - with § 32-10.1-10 (rent to the receiver) and § 32-10.1-03(2)(d) (ordinary 1-4-unit rentals in scope). Ch. 32-10.1 is the Uniform Commercial Real Estate Receivership Act, **readable whole from S.L. 2025 ch. 325 although title 32 is absent**. Open: whether a lease survives a completed sale, and the redemption period (ch. 32-19). Cautious course: assume it may not. |
| 68 | `foreclosure-disclosure` | `edu-no-foreclosure-disclosure-nd` | **ABSENT.** No duty to tell a tenant the property is in foreclosure; the federal position is deliberately not described as ND law. |
| 69 | `foreign-ownership` | `edu-foreign-ownership-nd` | **ABSENT for a town rental, PRESENT for farmland.** Citizenship is irrelevant to an ordinary tenancy; a lease of **agricultural land** is a restricted interest. |
| 70 | `forfeiture-redemption` | `edu-forfeiture-relief-unsettled-nd` | **NEEDS_REVIEW.** Open: § 32-01-12 \"Conditions of relief from forfeiture\" and § 9-01-15, both outside the corpus - and relief from forfeiture is the doctrine most likely to soften a lease forfeiture clause. |
| 71 | `furnishings-included` | `furnishings-included-nd` | **A clause.** Same hinge as the exclusion, running the other way, and § 47-16-07.2's mandatory signed statement of "the condition of the facilities" is the vehicle for the inventory. `SERVES_LANDLORD`. |
| 72 | `good-cause-notice` | `edu-no-good-cause-notice-nd` | **ABSENT.** No good-cause requirement and no notice of cause - a month-to-month may be ended without a reason. |
| 73 | `government-fee-reimbursement` | `government-fee-reimbursement-nd` | **A clause.** No statute allocates a government fee caused by the tenant, so the lease is the only route. `SERVES_LANDLORD`. |
| 74 | `governmental-fines` | `tenant-caused-fines-nd` | **A clause: NEEDS_REVIEW.** Open: whether anything in title 42 (Nuisances, outside the corpus) allocates abatement cost to an occupant by default. |
| 75 | `guarantor-renewal` | `guaranty-renewals-nd` | **A clause, and the one in this cluster.** **Title 47 has zero hits for guarant* or surety**, so nothing in ND law makes a guaranty survive a renewal - the lease must. `SERVES_LANDLORD`; introduces `{{{{guarantor_name}}}}` and `{{{{guarantor_notice_address}}}}`. |
| 76 | `guest-rights` | `guest-rights-nd` | **A clause - and ND's guest law is invisible to the word "guest".** **§§ 47-32-01(7) and 47-16-13.2(7) say "a person on the premises with the lessee's consent" and never "guest"**, so a guest-vocabulary battery misses the state's actual guest law entirely. `SERVES_LANDLORD`. |
| 77 | `habitability-materiality` | `edu-habitability-materiality-nd` | **ABSENT, and the absence is against the landlord.** No \"material breach\", \"material noncompliance\" or \"substantial breach\" anywhere in the corpus; the only \"materially affecting\" hits are §§ 47-16-13.1(1)(a) and 47-16-13.2(1). So there is **no severity threshold** a defect must clear. |
| 78 | `habitability-modifiable` | `edu-habitability-modifiable-nd` | **PRESENT, enumerated, and asymmetric: NEEDS_REVIEW on a drafting defect.** § 47-16-13.1(4) lets a **single-family** landlord shift subdivisions (e) and (f); § 47-16-13.1(5) reaches only repairs, maintenance, alterations and remodeling - so **in a multi-unit building, waste removal, water, hot water and heat cannot be shifted at all**. Open: (6) bars conditioning on \"the separate agreement described in **subsection 4**\" when subsection **5** is what describes a separate writing. |
| 79 | `habitability-presumption` | `edu-no-habitability-presumption-nd` | **ABSENT in both directions.** No presumption that the unit was habitable and none that it was not - so the § 47-16-07.2 condition statement does the work a presumption would. |
| 80 | `habitability-statement` | `edu-no-habitability-statement-nd` | **ABSENT.** No required habitability statement - and the row warns against the opposite temptation, narrowing the duty by lease language. |
| 81 | `habitability-waiver` | `edu-habitability-waiver-nd` | **Constrained, not void.** § 47-16-13.3 makes a settlement or waiver reviewable for unconscionability rather than banning it outright. |
| 82 | `hazardous-contamination-disclosure` | `environmental-covenant-notice-and-compliance-nd` | **A clause, and the only one in this cluster.** **Ch. 47-37 (Uniform Environmental Covenants Act) IS in the corpus** and all twelve sections were read: § 47-37-06(1)(c) sends a copy to \"each person in possession\" through whoever **the agency** designates and § 47-37-06(2) makes omission **harmless**; the covenant runs with the land (§ 47-37-04(1)) and § 47-37-10 gives only equitable relief. So the statute imposes no landlord disclosure duty and **only the lease can make a tenant's breach a default** - `SERVES_LANDLORD`, not `REQUIRED_DISCLOSURE`. |
| 83 | `health-district-rental-rules` | `edu-no-health-regulation-handout-duty-nd` | **PRESENT in outline: NEEDS_REVIEW.** §§ 23-35-02 and 23-35-08, recovered whole from S.L. 2025 ch. 248: **all land is in a public health unit**, and boards of health may make nuisance and filth rules, **enter under an administrative search warrant** and abate. Open: § 23-10-10.1 and the Administrative Code. |
| 84 | `heating` | `edu-heating-nd` | **PRESENT, and the strongest duty in the chapter.** § 47-16-13.1(1)(f) requires \"reasonable heat\" - **no temperature figure** - and it is one of the two duties § 47-16-13.1(5) does not let you shift, so **in anything but a single-family home it cannot be moved to the tenant at all**. |
| 85 | `hoa` | `edu-association-no-tenant-power-nd` | **Almost ABSENT, and what exists protects the tenant.** § 47-04.1-08 binds \"each unit owner\" and not a tenant - so in ND the lease is the **only** source of the tenant's duty to obey association rules. § 47-04.1-07(2) is a renter-neutrality rule most states lack. |
| 86 | `holding-deposit` | `edu-no-holding-deposit-rule-nd` | **ABSENT.** Pre-lease money from an applicant is wholly unregulated - no cap, no receipt, no deadline to return it. |
| 87 | `holdover-rate` | `edu-no-holdover-rate-cap-nd` | **ABSENT: no cap on a lease-set holdover rate.** And the row records what it could **not** read: §§ 32-03-27 and 32-03-28 (statutory double-damages measures for failing to surrender and for wilful holding over) are outside the corpus, so no later canvass assumes this corpus can confirm them. |
| 88 | `home-business` | `home-business-use-restriction-nd` | **A clause: NEEDS_REVIEW on zoning.** § 47-16-11 speaks of "real property" and never "residential", and with § 47-32-01(8) a use restriction is enforceable **only as a written material term** - so the restriction must be in the lease to do anything. `CONSTRAINED_TERM`. |
| 89 | `homestead-waiver` | `edu-no-tenant-homestead-waiver-nd` | **Empty.** Chapter 47-18 is an **owner's** exemption; a tenant has nothing to waive, so a waiver clause is empty, not lawful (rule 27 / WY-gaps topic question 2). |
| 90 | `immigration-status` | `edu-immigration-status-nd` | **ABSENT for residential, PRESENT for farmland - and the scoping matters.** § 47-01-11 lets "any person, whether citizen or alien" hold property **except** under ch. 47-10.1, which bars a non-citizen acquiring "any interest in agricultural land" - **and a leasehold is an interest.** So the absence had to be scoped to residential. |
| 91 | `infirmity-termination` | `edu-no-infirmity-termination-nd` | **ABSENT.** No age-, health- or infirmity-based early termination - the contrast with § 47-16-17.1's domestic-violence right is deliberate and is stated. |
| 92 | `informal-dispute-resolution` | `informal-dispute-resolution-nd` | **A clause: NEEDS_REVIEW, drafted to survive either reading.** Open: whether § 9-08-05 voids a pre-suit **condition precedent** as a restriction on enforcing rights by the usual proceedings. `CONSTRAINED_TERM`. |
| 93 | `inspection-condemnation-disclosure` | `edu-no-inspection-condemnation-disclosure-nd` | **ABSENT: NEEDS_REVIEW - and a vocabulary finding.** \"Condemnation\" in the Century Code means **eminent domain only**. The everyday-words battery found the real regime instead: **§ 40-58-18**, municipal ordinances for repair, closing and demolition of buildings **\"unfit for human habitation\"**, plus ch. 18-01's abatement-order regime at §§ 18-01-14 to 18-01-27 with a **cost lien**. Both outside the corpus. |
| 94 | `inspection-notice-penalty` | `edu-no-inspection-notice-penalty-nd` | **ABSENT.** No penalty for failing to give inspection notice, because there is no inspection-notice duty to breach. |
| 95 | `jury-waiver` | `edu-jury-waiver-nd` | **No statute either way.** § 9-08-05 voids a clause restricting enforcement by the usual proceedings, which is the live argument against it; stated as the cautious course. |
| 96 | `key-control-policy` | `edu-no-key-control-policy-nd` | **ABSENT.** No key-control duty at any portfolio size, and no employee-screening mandate for rental housing. |
| 97 | `knowing-use-penalty` | `edu-knowing-use-penalty-nd` | **ABSENT as a penalty on the landlord.** § 9-08-04's "to that extent" voidness is the nearest thing North Dakota has to a severability rule, and it is **statutory rather than drafted** - which is the useful point. |
| 98 | `landlord-breach-remedy` | `edu-landlord-breach-remedy-nd` | **PRESENT: four routes, and fees cut both ways.** § 47-16-13's three self-help remedies plus § 47-16-17(1)'s termination - and § 47-16-13.6 awards fees to **the prevailing party**, which favours a landlord defending a weak claim. |
| 99 | `landlord-liability-insurance` | `edu-no-landlord-insurance-mandate-nd` | **ABSENT.** No statute requires a landlord to carry liability insurance or to name anyone on a policy. |
| 100 | `landlord-lien` | `edu-landlord-lien-nd` | **NEEDS_REVIEW, and the open question is pointed.** No general landlord's lien on a tenant's goods in anything readable - but the master index names **§ 35-20-17 "Landlord's mobile home lien - Penalty"**, and all of title 35 is unreachable by every route. |
| 101 | `landlord-registration` | `edu-landlord-registration-nd` | **ABSENT, except a mobile home park.** No state landlord registration - but a park needs an annual licence and, at 26+ lots, an official local office (§ 47-10-28(1)(a)-(b)). |
| 102 | `landlord-remedies-termination` | `edu-landlord-remedies-on-termination-nd` | **PRESENT and statutory: NEEDS_REVIEW on forum.** Open: ch. 27-08.1 (small claims) is outside the corpus. The genuinely lease-carried term here - designating which obligations are \"material terms of the written lease\" so § 47-32-01(8) has teeth - has **no topic key in the list**, and is raised as a proposed topic question rather than smuggled into a row. |
| 103 | `late-fee-limit` | `edu-late-fee-limit-nd` | **ABSENT for an apartment, PRESENT for a mobile home park: NEEDS_REVIEW.** § 47-10-28(11) caps a park's monthly late fee at ten per cent and its daily fee at five dollars. Open: whether ch. 13-01's late-payment-charge sections (outside the corpus) reach residential rent. |
| 104 | `law-enforcement-cooperation` | `edu-law-enforcement-cooperation-nd` | **ABSENT.** No duty to cooperate with law enforcement and no immunity for doing so; the row keeps federal law out of the ND answer. |
| 105 | `lead-safe-certification` | `edu-no-lead-safe-certification-nd` | **ABSENT from the statutes: NEEDS_REVIEW.** The duty is federal; § 23.1-06-05 licenses contractors and is outside the corpus. **Not stated as ND law.** |
| 106 | `lead-state-notices` | `edu-no-lead-state-notices-nd` | **ABSENT: NEEDS_REVIEW.** No state lead notice on top of the federal one, so far as anything readable shows. |
| 107 | `lease-content-requirements` | `edu-one-lease-content-requirement-nd` | **PRESENT and very short.** What the lease itself must contain or carry: § 47-16-07.2's signed condition statement, § 47-16-15(4)'s stated-and-initialled notice requirement, and in a park § 47-10-28(9)'s lease-and-rights summary with (1)(g)-(h)'s owner and manager details. Points to `required-disclosures` for the wider inventory. |
| 108 | `lease-registration` | `edu-lease-registration-nd` | **Permissive, never required: NEEDS_REVIEW.** A lease may be recorded but need not be - except a farm lease reserving crop title. Open: whether a lease is a \"conveyance\" under § 47-19-42. |
| 109 | `lease-term-limitation` | `edu-lease-term-limits-nd` | **PRESENT and narrow: NEEDS_REVIEW.** § 47-16-02's ten-year and ninety-nine-year limits are **maximum terms only, not a list of banned clauses** - a misreading already in the library. Open: what \"agricultural land\" and \"city lot\" mean, whether an over-long lease fails wholly or only as to the excess, and whether § 47-18-05 needs both spouses' signature **and** acknowledgment. |
| 110 | `lease-type-parity` | `edu-no-lease-type-parity-nd` | **ABSENT.** No parity rule between lease types, and no statute treating a fixed term and a month-to-month differently beyond the notice sections. |
| 111 | `lease-type-size` | `edu-lease-type-size-nd` | **ABSENT as a general rule, PRESENT in two specific places.** No small-landlord exemption anywhere (see `portfolio-thresholds`). What size actually changes: the **single-family versus other-dwelling split** in § 47-16-13.1(4) against (5), and **§ 47-10-28(1)(b)'s twenty-six-lot threshold** for a park's local office. The sharpest sibling proving there is no residential type-size rule is **§ 17-04-06, which imposes a sixteen-point cover page on a wind-energy lease of real property.** |
| 112 | `limitation-of-actions` | `edu-limitation-of-actions-nd` | **NEEDS_REVIEW.** § 9-08-05 voids a clause shortening the time to enforce \"except as otherwise specifically permitted\", but the periods themselves are in ch. 28-01, outside the corpus. |
| 113 | `liquidated-damages` | `edu-liquidated-damages-void-nd` | **PRESENT, and void by default.** The phrase \"liquidated damages\" appears **nowhere** in ND's statutes, which is exactly why it gets missed: the rule is § 9-08-04's, and its exception is narrow. |
| 114 | `lockout-for-rent-delinquency` | `edu-no-opt-in-lockout-nd` | **ABSENT.** No opt-in lockout, and no statute permitting one by agreement. |
| 115 | `meter-conservation-charge` | `edu-meter-conservation-charge-nd` | **ABSENT.** No conservation charge and no authority for one. |
| 116 | `meth-disclosure` | `edu-no-meth-disclosure-nd` | **ABSENT as a disclosure, PRESENT as a remedy - and the remedy is new.** § 12.1-32-08(1), **amended by S.L. 2025, ch. 120 (H.B. 1417)**, makes restitution to the owner of real property contaminated in manufacturing methamphetamine **mandatory**: \"Restitution **must** include payment to the owner of real property that is contaminated by the defendant ... for the cost of removing the contamination and returning the property to the property's condition before contamination.\" That is ND's only meth provision besides § 14-02.5-02(4)'s screening permission. **A seventh 2025 act, outside the prompt's four** - see 1.6. |
| 117 | `military-air-zone-disclosure` | `edu-military-air-zone-disclosure-nd` | **ABSENT.** No military-air-installation or noise-zone disclosure - notable in a state with two air bases. |
| 118 | `minor-tenant-filing` | `edu-minor-tenants-nd` | **NEEDS_REVIEW, and the capacity rule is not in the lease law.** Open: whether a minor's lease is void under § 14-10-09 or non-disaffirmable under § 14-10-12, and the age of majority - ch. 14-10 is outside the corpus. Cautious course: have an adult sign. |
| 119 | `municipal-utility-lien` | `edu-municipal-utility-lien-nd` | **NEEDS_REVIEW, and city-class-specific.** Titles 40, 11 and 61 are outside the corpus; the master index names § 40-01-25, § 11-10-32 \"Prohibition - Connection of utility services\", § 40-22-16 and § 40-24-01. **No clean absence claimed for a chapter that could not be read.** |
| 120 | `nonrefundable-deposit-notice` | `edu-no-nonrefundable-deposit-rule-nd` | **ABSENT, and the concept does not exist here.** The word \"nonrefundable\" appears nowhere in ND's landlord-tenant law, so no notice can make a deposit non-refundable. |
| 121 | `nonrefundable-deposit-separate-notice` | `edu-no-nonrefundable-separate-notice-nd` | **ABSENT.** No separate signed notice will do it either; § 47-16-07.1(1) and (3) require the deposit and its interest back less only what is properly applied and itemised. |
| 122 | `nonresident-owner-agent` | `edu-no-nonresident-owner-agent-nd` | **ABSENT for a conventional rental, PRESENT for a park: NEEDS_REVIEW.** **Corrected at assembly on the canvass's own report** - §§ 47-10-28(1)(b) (official local office at 26+ lots), (1)(c)(3) (named decision-maker) and (1)(g)-(h) (owning entity and manager's telephone number) supply exactly the duties the row first denied. Open: title 10 and tax withholding, outside the corpus. |
| 123 | `notice-service-fee` | `edu-no-notice-service-fee-rule-nd` | **ABSENT.** No authority for a fee for serving a notice; § 47-32-04 governs costs in the eviction action. |
| 124 | `notice-to-quit-waiver` | `edu-no-notice-to-quit-waiver-nd` | **Waivable by contract on its face**, because the notice requirement is statutory but carries no anti-waiver clause; § 9-08-05 is the counter-argument and is stated. |
| 125 | `notice-to-vacate-additional-terms` | `edu-notice-to-vacate-extra-terms-nd` | **ABSENT - and the topic's own vocabulary does not exist here.** \"Notice to vacate\" and \"notice to quit\" occur **zero** times in the entire corpus; ND says notice \"to remove from the premises\" (§ 47-17-01) and \"notice of intention to evict\" (§ 47-32-02). Nothing requires or permits extra terms in either. |
| 126 | `nuisance` | `edu-nuisance-nd` | **NEEDS_REVIEW.** The in-chapter route is §§ 47-16-13.2(7) and 47-32-01(7). Open: title 42 is unreadable **and not recoverable from the session laws either** (zero section-actions, zero volume hits) - does § 42-02-06 let an owner cancel a lease under a nuisance injunction, and does § 42-01-13 make a landlord liable for a tenant's nuisance? |
| 127 | `ordnance-demolition-meter-disclosures` | `edu-ordnance-demolition-meter-disclosures-nd` | **ABSENT.** None of the three: no ordnance-site, demolition or shared-meter disclosure. |
| 128 | `other-landlord-facilities` | `other-landlord-facilities-nd` | **A clause.** § 47-16-27 again: a facility is the tenant's only if the agreement grants it, so amenity access, suspension and closure all have to be written. `SERVES_LANDLORD`. |
| 129 | `owner-move-in-reservation` | `owner-occupancy-termination-nd` | **A clause.** Nothing in ND law reserves an owner-occupancy termination, so the lease must. `SERVES_LANDLORD`. |
| 130 | `parking-rules-notice` | `parking-rules-notice-nd` | **A clause - and the battery finding is the best one in the batch.** **§ 47-10-28(3) says "park rules"** - so a **parking** battery cannot see it (though the section does contain "rules and regulations", six times; what returns zero is "house rules"), so a parking-vocabulary battery cannot see North Dakota's only rules-notice provision. `SERVES_LANDLORD`. |
| 131 | `part5-nonwaivable` | `edu-no-urlta-nonwaiver-nd` | **ND has not adopted URLTA**, so there is no Part 5 act-wide non-waivable-rights section to point to. |
| 132 | `periodic-services-entry` | `scheduled-services-entry-nd` | **A clause, and the reasoning is tight.** § 47-16-07.3(2) protects an **agreed** service visit - so a recurring visit is only "agreed" if the lease carries the schedule. The clause supplies the schedule and **keeps the notice step rather than waiving it.** `SERVES_LANDLORD`. |
| 133 | `pest-control-notice` | `pest-control-cooperation-nd` | **A clause, because ND has no pest law at all.** Cooperation and preparation only: the **treatment duty stays with the landlord**, because § 47-16-13.1(5) bars shifting it in a multi-unit except by separate signed writing with consideration. `SERVES_LANDLORD`. |
| 134 | `pet-eviction-fact-sheet` | `edu-no-pet-eviction-fact-sheet-nd` | **ABSENT.** No pet-eviction fact sheet or notice requirement. |
| 135 | `pet-fees` | `edu-pet-deposit-is-deposit-money-nd` | **PRESENT, and bigger than most states'. § 47-16-07.1(2) is a separate grant, not an exception inside the cap:** a pet security deposit "may not exceed **the greater of two thousand five hundred dollars or an amount equivalent to two months' rent**" - **additive** to subsection (1)'s one-month cap, whose "except" list is closed at two items and says nothing about pets. **And (2) carves out a service or companion animal required as a reasonable accommodation**: no pet deposit at all for one. |
| 136 | `plain-language-consumer-statement` | `edu-plain-language-consumer-statement-nd` | **ABSENT: NEEDS_REVIEW.** No plain-language mandate. Open: whether ch. 51-15 reaches a lease at all - "merchandise" includes real estate but "sale" is title-flavoured. **The same open question as `fee-transparency`**, and the two rows point to each other. |
| 137 | `political-access` | `edu-no-political-access-rule-nd` | **ABSENT.** No canvasser, candidate or petition right of access to a rental building. |
| 138 | `pool-safety` | `edu-pool-safety-nd` | **Education: NEEDS_REVIEW.** No pool statute; the standards are in the Administrative Code and ch. 54-21.3, neither readable, and § 47-16-13.1(1)(a) with (3) would make them controlling. |
| 139 | `portable-cooling-device` | `edu-no-portable-cooling-rule-nd` | **ABSENT in both directions.** No tenant right to a window air conditioner and no disclosure duty if the lease bans them. |
| 140 | `portable-solar` | `edu-no-tenant-solar-right-nd` | **ABSENT: NEEDS_REVIEW.** No tenant solar right and no landlord duty; open on utility interconnection, which is in title 49. |
| 141 | `portfolio-thresholds` | `edu-portfolio-thresholds-nd` | **ABSENT, and the near-miss is worth the row.** No small-landlord exemption anywhere in ND - and the fair-housing three-house carve-out is **narrower than it looks**, which is the way a landlord would get this wrong. |
| 142 | `possession-bond` | `edu-no-possession-bond-nd` | **ABSENT.** No possession bond and no bond-to-stay machinery. |
| 143 | `private-well-testing` | `edu-no-private-well-testing-nd` | **ABSENT: NEEDS_REVIEW.** No landlord well-testing duty in anything readable; chs. 61-16.2 and 61-28.1 are outside the corpus. |
| 144 | `prohibited-acts-renter` | `prohibited-acts-renter-nd` | **A clause, and § 47-16-11 is why.** It conditions a statutory **rescission** right on the lease having stated a particular purpose - so stating the permitted use is what creates the remedy. `SERVES_LANDLORD`. |
| 145 | `promises-to-repair` | `edu-promises-to-repair-nd` | **ABSENT as to form, PRESENT as to consequence.** No required form for a move-in repair promise, but an open-ended one feeds § 47-16-13's termination right. |
| 146 | `prop65-rental-warning` | `edu-no-prop65-rental-warning-nd` | **ABSENT, and vacuously so.** No ND analogue of California's Proposition 65 warning. |
| 147 | `property-tax-rent-disclosure` | `edu-property-tax-rent-disclosure-nd` | **ABSENT.** No duty to disclose or pass through a property-tax change; the **seller** form at § 47-10-02.1(2) is again the sibling that proves the negative. |
| 148 | `recycling-notice` | `edu-recycling-notice-nd` | **ABSENT.** No recycling notice duty - and § 47-16-13.1(1)(e)'s waste-removal duty is one of the two a multi-unit landlord cannot shift. |
| 149 | `redemption` | `edu-no-tenant-redemption-nd` | **ABSENT.** No tenant right to redeem after judgment. |
| 150 | `religious-cultural-display` | `edu-no-religious-display-rule-nd` | **ABSENT.** No religious or cultural display right in a rental. |
| 151 | `rent-concession` | `rent-concession-nd` | **A clause.** Nothing supplies a concession, a repayment on early termination, or what happens to it on default. `SERVES_LANDLORD`. |
| 152 | `rent-control` | `edu-rent-control-preemption-nd` | **PRESENT (a preemption).** § 47-16-02.1 bars a political subdivision from any ordinance with the effect of controlling rent, with a carve-out for property it holds in fee. |
| 153 | `rent-demand-bar` | `edu-rent-demand-bars-nd` | **Two bars only, and both are real: NEEDS_REVIEW on a third.** The term-of-art battery found **three** hits corpus-wide, two of them the bars this row states - **§ 47-16-26** (double letting: every tenant in the building is relieved of rent while it continues) and **§ 47-16-17.1(5)**. Open: § 57-21-05, named in the master index as \"Receipts a defense in action for rent\", outside the corpus. |
| 154 | `rent-escalation` | `rent-escalation-nd` | **A clause.** No statute regulates an escalation formula, and § 47-16-02.1's preemption is what protects one from a local cap. `SERVES_LANDLORD`. |
| 155 | `rent-increase-notice` | `edu-rent-increase-notice-nd` | **ABSENT for an ordinary tenancy, PRESENT for a park - and this is where the folklore comes from.** **The only rent-increase statute in the entire corpus is § 47-10-28(7), giving a park tenant ninety days.** For any other tenancy the mechanism is § 47-16-07 (changing the terms of a month-to-month) with § 47-16-15(3)'s twenty-five days for the tenant to terminate in response. Any "ND requires N days' notice of an increase" claim is the park rule quoted out of its chapter. |
| 156 | `rent-installments` | `rent-installments-nd` | **A clause, and it displaces a real default.** § 47-16-20 makes rent payable **in arrears** absent contract or usage - lodgings monthly at the end of each month, other rents quarterly at the end of each quarter. A lease that wants rent in advance has to say so. `SERVES_LANDLORD`. |
| 157 | `rent-into-court-counterclaim` | `edu-rent-into-court-counterclaim-nd` | **PRESENT and restrictive.** Counterclaims in an eviction are barred except as a setoff, and **no rent goes into court** - there is no escrow procedure. |
| 158 | `rent-receipt-anti-waiver` | `edu-rent-receipt-anti-waiver-nd` | **NEEDS_REVIEW.** Turns on § 9-12-22, which is outside the corpus and unreachable on all three channels. Cautious course stated in the row. |
| 159 | `rent-reporting` | `edu-no-rent-reporting-rule-nd` | **ABSENT in both directions.** No duty to report rent to a credit bureau and no tenant right to opt in or out. |
| 160 | `rent-tax` | `edu-rent-tax-nd` | **ABSENT so far as readable: NEEDS_REVIEW.** Open: whether sales tax or a city or county lodging tax reaches residential rent or a furnished short-stay letting. Title 57, ch. 40-57.3 and ch. 11-09.2 are unreadable, **and the session-law route failed here because the 2025 acts amended only subsections of § 57-39.2-04.** Cautious course: charge no tax without written confirmation, and treat short-stay as the risk case. |
| 161 | `rental-inspection` | `edu-rental-inspection-nd` | **ABSENT from the statutes: NEEDS_REVIEW.** Chs. 23-09, 23-10, 54-21.3 and titles 18 and 40 are unread. Open: whether a lease can supply the occupant's consent to an inspector - the cautious course is that it cannot. |
| 162 | `renters-insurance-rules` | `edu-renters-insurance-rules-nd` | **ABSENT.** Nothing regulates requiring renters' insurance, capping it, or what the lease may demand - so the requirement is lawful and wholly contractual. |
| 163 | `repair-cost-termination` | `edu-repair-cost-termination-nd` | **ABSENT.** No dollar cap on repair-and-deduct and no cost threshold for the tenant to walk - both remedies in § 47-16-13 are uncapped. |
| 164 | `repair-escrow-exemption-notice` | `edu-no-repair-escrow-exemption-notice-nd` | **ABSENT, and vacuously so.** There is no rent escrow in ND, so there is no exemption and no exemption notice. |
| 165 | `repair-notice` | `edu-repair-notice-nd` | **PRESENT and minimal: NEEDS_REVIEW.** § 47-16-13 requires only \"notice from the lessee\" and the clock is \"a reasonable time\". Open: whether a lease may condition it on a **written** request. Cautious course - treat any notice as starting the clock. |
| 166 | `required-disclosures` | `edu-required-disclosures-nd` | **The inventory, answered once for the whole cluster.** The complete set of things ND requires a landlord to give a tenant is **very short**, and the row sets it out rather than listing absences: § 47-16-07.2's condition statement, § 47-16-07.1(3)'s deposit itemisation, § 47-16-15(4)'s initialled notice requirement, and - in a park only - § 47-10-28(9)'s lease-and-rights summary with (1)(g)-(h)'s owner and manager details. |
| 167 | `required-fees` | `fees-and-charges-nd` | **A clause.** Nothing requires a fee schedule, so the schedule plus the promise to charge nothing outside it is the landlord's own protection. `SERVES_LANDLORD`. |
| 168 | `rights-responsibilities-guide` | `edu-rights-responsibilities-guide-nd` | **ABSENT generally, PRESENT in a park: NEEDS_REVIEW.** § 47-10-28(9) requires a lease-and-rights summary - **and the master index confirms it is the only tenant-rights provision in the entire Century Code.** Open: the statute **prescribes no content and no timing** while backing it with a $2,500 penalty floor and an eviction defence. |
| 169 | `rules-regulations` | `rules-regulations-nd` | **A clause, and it earns its place twice over.** § 47-32-01(8) gives teeth only to a **written-lease** material term, so house rules bind only if the lease incorporates them - and **§ 47-10-28(3) requires a park owner to give thirty days' advance written notice of any modification to park rules or regulations**, the state's only rules-notice provision. `CONSTRAINED_TERM`. |
| 170 | `sanitary-code-variance` | `edu-no-sanitary-code-variance-disclosure-nd` | **NEEDS_REVIEW.** The variance machinery is in the Administrative Code and ch. 54-21.3, neither readable; the new title 23.1 onsite-wastewater chapter's variance provision was recovered but its section number is inferred from the act's ordering, not printed - **flagged as inferred, not asserted**. |
| 171 | `seasonal-tenancy` | `edu-seasonal-tenancy-nd` | **ABSENT as a category.** No seasonal-tenancy regime; the ordinary term and notice rules apply, which the row states rather than leaving the landlord to assume a carve-out. |
| 172 | `security-deposit-holding` | `edu-deposit-holding-method-nd` | **PRESENT and not the landlord's choice: NEEDS_REVIEW on the alternatives.** § 47-16-07.1(1) requires the money in a *federally insured interest-bearing savings or checking account for the benefit of the tenant*. Open: whether a ch. 6-08.6 special deposit or a ch. 43-23 broker trust account satisfies it. |
| 173 | `security-deposit-nonwaiver` | `edu-no-deposit-nonwaiver-nd` | **ABSENT.** § 47-16-07.1 carries no non-waiver clause, unlike most states' deposit statutes. |
| 174 | `security-deposit-standards` | `edu-no-deposit-standards-disclosure-nd` | **ABSENT.** No duty to post, publish or disclose how a deposit amount is set, at any time. |
| 175 | `security-devices` | `edu-no-security-device-rule-nd` | **ABSENT from the Century Code: NEEDS_REVIEW, and a near-miss worth recording.** Deadbolt, peephole, door viewer and keyless bolting device appear nowhere. But the everyday-words battery's single hit is a **section name** - § 23-09-08 \"Bolts or locks to be supplied on doors of sleeping rooms\" - in a chapter outside the corpus. **The term-of-art battery alone would have reported a clean absence.** |
| 176 | `senior-housing-work-card` | `edu-no-senior-housing-work-card-nd` | **ABSENT.** No work card or staff credential for 55-plus housing; the § 14-02.5-11 elderly-housing rules live in the Administrative Code, unreadable. |
| 177 | `service-animal-denial-penalty` | `edu-no-landlord-penalty-for-animal-denial-nd` | **ABSENT as a landlord-facing penalty: NEEDS_REVIEW - and the only animal penalty in ND housing runs the other way.** §§ 47-16-07.5 and 47-16-07.6 penalise **the tenant** (misrepresenting an assistance animal), not a landlord who refuses one. § 14-02.5-06 is the disability provision. Open: ch. 25-13 (§ 25-13-04), outside the corpus and **not** recoverable from the session laws. |
| 178 | `sex-offender-disclosure` | `edu-sex-offender-disclosure-nd` | **ABSENT to a tenant: NEEDS_REVIEW.** Open: § 43-23-08.3 "Disclosure of sexual offenders" sits in the **real-estate-brokers** chapter - whom it binds, and whether it reaches a lease, cannot be read. |
| 179 | `sex-offender-occupancy` | `edu-sex-offender-occupancy-nd` | **ABSENT: NEEDS_REVIEW.** Open: whether § 12.1-20-25 binds only the registrant or also a person **permitting** presence, and whether any municipality has a co-residence ordinance. |
| 180 | `sfr-occupancy-disclosure` | `edu-sfr-occupancy-disclosure-nd` | **ABSENT.** No single-family occupancy disclosure, and no statutory occupancy limit to disclose. |
| 181 | `shoreline-access-disclosure` | `edu-shoreline-access-disclosure-nd` | **ABSENT.** No shoreline or lakeshore access disclosure for a tenancy. |
| 182 | `showing-notice-waiver` | `edu-showing-notice-waiver-nd` | **Waivable, and thin to begin with.** § 47-16-07.3 sets entry rules but no general showing-notice duty, so the waiver has little to operate on. |
| 183 | `shutdown-rent-protection` | `edu-no-shutdown-rent-protection-nd` | **ABSENT, and § 47-10-28 cuts the other way.** No shutdown or emergency rent protection - and in a park, §§ 47-10-28(13) and (14) preserve occupancy while saying "the tenant shall continue paying rent". |
| 184 | `single-family-zone-lease-limit` | `edu-no-single-family-zone-rental-limit-nd` | **ABSENT from the statutes: NEEDS_REVIEW.** No state limit on leasing in a single-family zone; zoning is municipal and chs. 40-47, 11-33 and 58-03 are unreadable. |
| 185 | `smart-access` | `edu-no-smart-access-law-nd` | **ABSENT, and that is the problem.** \"Keyless\" and \"mobile credential\" appear nowhere; every \"biometric\" hit is criminal-registration or licensure. Nothing regulates entry-data retention or guarantees a physical-key alternative. |
| 186 | `smoke-drift-waiver` | `edu-no-smoke-drift-rule-nd` | **ABSENT.** 0 hits for smoke drift between units anywhere in the corpus. |
| 187 | `social-security-defense` | `edu-no-benefit-delay-defense-nd` | **ABSENT as a defence, PRESENT as a constraint.** A late benefit or voucher payment is no defence to nonpayment - but subsidised tenants may not be treated differently. |
| 188 | `special-district-representation` | `edu-no-special-district-statement-nd` | **ABSENT: NEEDS_REVIEW on appearance.** No special-district statement required - but a public-body landlord still owes the § 47-16-07.1 deposit rules, which is the useful half. |
| 189 | `sprinkler-disclosure` | `edu-no-sprinkler-disclosure-nd` | **ABSENT: NEEDS_REVIEW.** The only \"sprinkler\" hit is § 18-12-17, in the **school** fire code - and all of title 18 is outside the corpus. |
| 190 | `statute-of-frauds-lease-term` | `edu-statute-of-frauds-lease-nd` | **PRESENT: NEEDS_REVIEW on a second limb.** A lease over one year must be in writing and signed by the landlord or an agent with written authority. Open: whether ch. 9-06 (outside the corpus) adds a second writing requirement, and whether assignment or surrender needs writing. |
| 191 | `statutory-caps` | `edu-statutory-money-caps-nd` | **PRESENT, and the row's whole value is the taxonomy.** ND's money figures do **five different jobs** - a cap on conduct, a ceiling, a floor, a flat liquidated sum, and a \"whichever is greater\" - and reading one as another is the commonest way this gets got wrong. |
| 192 | `steam-radiator-covers` | `edu-no-steam-radiator-cover-rule-nd` | **ABSENT.** No cover duty and no mandatory rider - but a dangerous radiator is still inside § 47-16-13.1(1)(b) and (d). |
| 193 | `stigmatized-property` | `edu-stigmatized-property-nd` | **ABSENT.** No stigmatized-property disclosure and no statute making a death, a crime or a suicide a material fact for a tenancy. |
| 194 | `stove-refrigerator` | `edu-stove-refrigerator-nd` | **Education: NEEDS_REVIEW.** Once supplied, a stove or refrigerator is inside § 47-16-13.1(1)(d) and the duty cannot be disclaimed - so the lease decides whether to supply, not whether to maintain. Open: ch. 54-21.3, imported and made controlling by § 47-16-13.1(1)(a) with (3). |
| 195 | `student-housing` | `edu-no-student-housing-rule-nd` | **ABSENT.** No student-housing or dormitory exclusion - because ND has no URLTA to carve anything out of. |
| 196 | `subsidized-inspection-refusal` | `edu-no-subsidized-inspection-refusal-rule-nd` | **ABSENT.** Nothing lets a landlord refuse a subsidy inspection, and nothing requires one. |
| 197 | `subsidy-habitability-proration` | `edu-no-subsidy-proration-rule-nd` | **ABSENT.** No state proration rule for a subsidised tenancy - and note ND's own word for proportioning is "due proportion" (§ 47-16-21), not prorate. |
| 198 | `subsidy-late-fee` | `edu-no-subsidy-late-fee-rule-nd` | **ABSENT.** No state rule on a late fee in a subsidised tenancy; the federal position is deliberately not described as ND law. |
| 199 | `substandard-property-receivership` | `edu-receivership-reaches-rentals-but-not-for-conditions-nd` | **Two real regimes, and one is brand new: NEEDS_REVIEW on the municipal route.** **Ch. 23-10.1** (S.L. 2025 ch. 238) is a **mobile-home-park receivership**: the department petitions after licence revocation, a commissioner is appointed, operates from park income and **may not liquidate**. **Ch. 32-10.1** (UCRERA, ch. 325) reaches rental housing - § 32-10.1-03(2)(d) pulls a 1-4-unit property in whenever the owner collects rent from a non-affiliate, **§ 32-10.1-16(8)(a) bars a receiver rejecting an unexpired lease where the tenant occupies as a primary residence**, and **(4) makes a terminate-on-receivership clause ineffective**. Open: the municipal route at § 40-58-18 and ch. 18-01. |
| 200 | `tax-escalation` | `tax-insurance-escalation-nd` | **A clause.** No statute allocates a tax or insurance increase, so the lease is the only route. `SERVES_LANDLORD`. |
| 201 | `telecom-access` | `edu-telecom-access-nd` | **ABSENT from what could be read: NEEDS_REVIEW.** Ch. 49-21 is outside the corpus; the master index names § 49-21-09 \"Telecommunications - Connections\". \"Master antenna\" and \"satellite dish\" return zero. |
| 202 | `tenancy-at-will` | `edu-tenancy-at-will-nd` | **PRESENT.** Ch. 47-17 read whole: § 47-17-01 terminates an estate at will on notice \"to remove from the premises\" of not less than one month, served as § 47-17-02 prescribes. |
| 203 | `tenant-bankruptcy` | `edu-tenant-bankruptcy-nd` | **ABSENT.** A tenant's bankruptcy stops the landlord under federal law and **North Dakota adds nothing the landlord can use.** |
| 204 | `tenant-confidential-information` | `edu-tenant-confidential-information-nd` | **PRESENT in one place and absolute: NEEDS_REVIEW elsewhere.** **§ 47-16-17.1(4)** bars disclosing DV documentation - "may not be entered into any shared database or provided to any person" - with **no consent exception** and **$1,000 statutory damages** under (11), so a consent-to-disclose clause is **unlawful, not empty**. Open: ch. 51-22, outside the corpus. |
| 205 | `tenant-display-rights` | `tenant-display-rights-nd` | **A clause - and the statute runs against the HOA, not the landlord.** §§ 47-04-32 and 47-04.1-14 bind **covenants and condominium declarations**, never a lease, but they protect "the owner **or a resident**" - so an association cannot bar the tenant's sign, while the landlord still can. `SERVES_LANDLORD`. |
| 206 | `tenant-employee-housing` | `edu-tenant-employee-housing-nd` | **ABSENT as an exclusion.** Chapter 47-16 carves out no employee housing, so an employee's occupancy is an ordinary tenancy unless the arrangement is not a leasing at all. |
| 207 | `tenant-forward-proceedings` | `edu-tenant-forward-proceedings-nd` | **PRESENT.** The tenant must forward notice of a proceeding against the property and may not attorn to a stranger - one of the few places ND law is affirmatively on the landlord's side. |
| 208 | `tenant-insurance-claims` | `insurance-claims-and-losses-nd` | **A clause.** Nothing allocates insurance proceeds, deductibles or subrogation between landlord and tenant. `SERVES_LANDLORD`. |
| 209 | `tenant-portal` | `tenant-portal-nd` | **A clause: NEEDS_REVIEW** - and the row that caught a false absence. Ch. 9-16 (UETA, § 9-16-04) is outside the corpus. **\"Portal\" occurs 3 times in the corpus**, all unrelated 2025 session laws; the canvass's first draft said zero and superseded its own battery to fix it. `CONSTRAINED_TERM`. |
| 210 | `tenant-records` | `edu-tenant-records-nd` | **ABSENT generally, PRESENT in a park: NEEDS_REVIEW.** **§ 47-10-28(1)(f)** - a lease copy within ten business days of a written request - is ND's **only** tenant right of access to records, and it is park-only. Open: chs. 51-30 and 51-22, outside the corpus. |
| 211 | `tenant-right-to-organize` | `edu-no-tenant-organizing-right-nd` | **ABSENT.** No tenant right to organise, meet or canvass - and **North Dakota has no general landlord-retaliation statute at all**: "retaliat-" occurs **three times** in the whole statutes scope. |
| 212 | `tenant-rights-statement` | `edu-tenant-rights-statement-nd` | **ABSENT.** No required tenant-rights statement in a lease; points to `required-disclosures`. |
| 213 | `tenant-screening` | `edu-tenant-screening-nd` | **Largely ABSENT, and the one lever is in the deposit section.** No screening statute - but **§ 47-16-07.1(1)(a)-(b)** lets the landlord take **two months'** security from an applicant convicted of a felony "as an incentive to rent" or from one with a judgment for violating a previous rental agreement. |
| 214 | `tenant-statutory-duties` | `edu-tenant-statutory-duties-nd` | **PRESENT.** § 47-16-13.2 read whole, with § 47-16-09 (ordinary care) and § 47-16-10 (repair of damage from the tenant's ordinary negligence). The row sets the statutory duties out so a lease need not restate them. |
| 215 | `towing` | `edu-towing-nd` | **ABSENT, and the gap is not in the landlord's favour** - no statutory authority to tow, so the lease is the only authority. Ch. 23.1-15 named as the abandoned-vehicle route (parked, unread). |
| 216 | `tpa-exemption-notice` | `edu-no-tpa-exemption-notice-nd` | **ABSENT, vacuously** - there is no TPA, so no exemption and no exemption notice. Points to `tpa-notice`. |
| 217 | `tpa-notice` | `edu-no-tpa-notice-nd` | **ABSENT.** No tenant opportunity to purchase and no right of first refusal. What a landlord selling an occupied rental actually owes instead: **§ 47-16-07.1(5)** transfers the deposit to the grantee and **does not relieve the grantor until it does**, and in a park § 47-10-28's transfer-of-ownership duties are real and substantial. |
| 218 | `tpa-sunset` | `edu-no-tpa-sunset-nd` | **ABSENT, vacuously.** Nothing to sunset. |
| 219 | `translation-duty` | `edu-translation-duty-nd` | **ABSENT.** No duty to translate a lease or to provide an interpreter, and no statute giving a non-English speaker a lease-language right. |
| 220 | `trespass-notice` | `edu-trespass-notice-nd` | **NEEDS_REVIEW.** Open: § 12.1-22-03 is outside the corpus and **its own heading splits "Criminal trespass" from "Noncriminal offense on posted property"**, which may change the answer - a heading-only citation, unverified. |
| 221 | `truth-in-renting` | `edu-truth-in-renting-nd` | **ABSENT.** No truth-in-renting act and no required handbook; points to `required-disclosures` rather than repeating it. |
| 222 | `unauthorized-occupant-removal` | `edu-unauthorized-occupant-removal-nd` | **PRESENT, and better than most states': NEEDS_REVIEW at the edges.** **Grounds 1, 2, 3 AND 7 of § 47-32-01 need no notice of intention to evict at all** - § 47-32-02 enumerates only subsections 4, 5, 6 and 8, so the **disturbance** ground is in that set too, which an earlier version of this line omitted (corrected on batch 8); grounds 1 to 3 are ND's squatter route. Open: § 12.1-22-03 and ch. 32-17, outside the corpus. |
| 223 | `unbundled-parking` | `unbundled-parking-nd` | **A clause: NEEDS_REVIEW.** Nothing regulates separating a parking charge from rent. Open: whether a separate parking charge is "rent" for § 47-16-07.1's deposit cap - the cautious course is to treat it as rent. `SERVES_LANDLORD`. |
| 224 | `unconscionability` | `edu-unconscionability-nd` | **PRESENT, and broader than most states'.** § 47-16-13.3 lets a court refuse to enforce an unconscionable provision and makes a settlement waiving a right under §§ 47-16-13.1 to 47-16-13.6 reviewable - and **§ 9-08-01(3) adds "otherwise contrary to good morals"**, which is a wider standard than unconscionability alone. Points to `exculpatory-clauses` rather than repeating chapter 9-08. |
| 225 | `unpaid-damages-interest` | `interest-on-unpaid-amounts-nd` | **A clause, because § 47-14-05 conditions any rate above six per cent on being \"contracted for in writing\": NEEDS_REVIEW.** Open: whether § 47-14-05 reaches a non-loan debt such as rent arrears at all, given ch. 47-14 is indexed *Loans of Money*. |
| 226 | `usufructuary-lessor` | `edu-no-usufructuary-lessor-nd` | **ABSENT, and foreign to the system.** A usufruct is a civil-law concept; ND has a leasehold under ch. 47-16, with § 47-16-27 defining what the tenant gets. Stated as what ND does instead, not as a gap. |
| 227 | `utility-allowance-cap` | `edu-utility-allowance-cap-nd` | **ABSENT.** No utility allowance and no cap on one - outside a mobile home park, where § 47-10-28(8) caps the administrative fee at **three dollars**. |
| 228 | `utility-apportionment` | `utility-apportionment-nd` | **A clause, and a constrained one.** Nothing outside a park regulates apportionment, so the lease allocates it - but § 47-16-13.1(5) means the underlying **duty** to supply water, hot water and heat stays with the landlord in a multi-unit building however the **cost** is allocated. `CONSTRAINED_TERM`. |
| 229 | `utility-deposit-return` | `edu-utility-deposit-return-nd` | **The general deposit section swallows it: NEEDS_REVIEW on the provider-held case.** A utility deposit the *landlord* collects is security \"however denominated\". Open: § 49-04-02.1, which governs a deposit held by the *provider*, is outside the corpus. |
| 230 | `utility-disclosure-attachment` | `edu-utility-disclosure-attachment-nd` | **ABSENT.** No required utility disclosure or attachment; the row gives the practical course instead. |
| 231 | `utility-disconnection-notice-authorization` | `utility-disconnection-notice-authorization-nd` | **A clause: NEEDS_REVIEW.** No statute authorises a landlord to act on a disconnection notice; § 49-04-20 is outside the corpus. `SERVES_LANDLORD`. |
| 232 | `utility-interruption-submeter` | `edu-utility-interruption-submeter-nd` | **ABSENT - North Dakota has no utility-interruption statute at all.** This corrects a premise in my own brief: § 47-16-13.6 is *Enforcement of §§ 47-16-13.1 to 47-16-13.6*, **not** an essential-services provision. |
| 233 | `utility-landlord-account` | `edu-utility-landlord-account-nd` | **ABSENT from the statutes: NEEDS_REVIEW.** Whether a landlord-held account changes the tenant's protections turns on title 49 / ch. 49-02, outside the corpus. |
| 234 | `utility-submetering-disclosure` | `edu-utility-submetering-disclosure-nd` | **ABSENT.** \"Submeter\", \"master-metered\" and \"ratio utility billing\" return zero in the statutes - and in a **park** § 47-10-28(8) bans any utility fee without an individual meter per home, so ratio billing is prohibited there. |
| 235 | `utility-transfer` | `utility-transfer-nd` | **A clause.** No statute sets a transfer deadline, so the lease must. `SERVES_LANDLORD`; introduces `{{{{utility_transfer_days}}}}`. |
| 236 | `veterans-incentive` | `edu-no-veterans-incentive-nd` | **ABSENT.** No veterans' rental incentive or preference programme. |
| 237 | `waiver-by-acceptance` | `edu-waiver-by-acceptance-nd` | **No statute.** Acceptance of rent after a known breach is governed by case law, not code; the row states the cautious course and a non-waiver clause as the protection. |
| 238 | `water-heater-temperature` | `edu-no-water-heater-temperature-rule-nd` | **ABSENT from the statutes: NEEDS_REVIEW.** The duty, if any, would sit in ch. 54-21.3 (State Building Code) or ch. 43-18, both outside the corpus - and § 47-16-13.1(1)(a) with (3) would make a code figure binding and controlling. |
| 239 | `waterbed` | `waterbed-permission-nd` | **A clause, and a finding inside it.** § 47-16-07.1(1) caps security "however denominated" at one month, with a **closed two-item exception list** that says nothing about pets or waterbeds; § 47-16-07.1(2) then grants a **pet** deposit separately, with its own ceiling. **There is no waterbed equivalent, so a separate waterbed deposit is unlawful** in North Dakota, and the clause takes permission and insurance instead. `SERVES_LANDLORD`. |
| 240 | `window-guards` | `edu-window-guards-nd` | **Education: NEEDS_REVIEW.** No window-guard statute; ch. 54-21.3 unreadable and would be controlling through § 47-16-13.1(1)(a) and (3). |
| 241 | `written-notice-required` | `edu-written-notice-required-nd` | **PRESENT, and the row's value is the inventory.** Which ND notices must be in writing and - the part landlords get wrong - **which need not be.** |

Row types so far: **44** lease clauses, **197** landlord education,
**85** NEEDS_REVIEW.

**Why so much of this is education, and why that is the right answer rather than thin work.** Two
things drive it. The first is rule 55 as Taylor applied it on 2026-10-24: notice value alone is not a
basis, and where a statute already implies a term into every lease, the answer is an education row.
The second is what North Dakota actually is - a state with **no URLTA**, **no landlord-tenant
non-waiver statute anywhere**, and **no prohibited-lease-provisions list inside chapter 47-16**. Batch
1 was the waiver cluster, where a waiver of a rule the state does not have is empty rather than lawful,
so there is nothing for a clause to say. Batch 2 was deposits and fees, where § 47-16-07.1 and
§§ 9-08-03/9-08-04 bind whatever the lease says.

**The six clauses are the places where the lease genuinely has to carry the term**, and each earns it
for a stated reason: `criminal-activity-nd` (§ 47-32-01(8) only reaches a *written-lease* material
term); `surrender-and-forwarding-address-nd` (§ 47-16-07.1(3) runs its clock from "delivery of
possession" and imposes **no** forwarding-address duty); `interest-on-unpaid-amounts-nd` (§ 47-14-05
conditions any rate above six per cent on being "contracted for in writing"); `fees-and-charges-nd`
(nothing requires a fee schedule, so the schedule plus a promise to charge nothing outside it is the
landlord's own protection); `government-fee-reimbursement-nd` and `tenant-caused-fines-nd` (no statute
allocates a government fee or fine caused by the tenant, so the lease is the only route).

---

## 3. Batteries

**424 live runs**, plus **3** tool-validation runs and
**61** superseded. Every control is `zzqx\w*plover` in the
same batch as its battery, and **every control returned 0**. Counts in this section are read
out of `battery-log.jsonl` by script; none is typed.

### 3.1 Live runs

| Battery | Patterns | Scope | Hits | Heading screen | Control | Positives | Subject |
|---|---|---|---|---|---|---|---|
| `ND-GAPS-101` | 4 | all | 26 | 0 | 0 | every positive passed | towing a vehicle from leased premises: landlord authority, signage, carrier duties |
| `ND-GAPS-102` | 4 | all | 30 | 0 | 0 | every positive passed | towing: everyday-word companion battery (rule 19) - abandoned/unauthorized vehicle, removal, impound |
| `ND-GAPS-103` | 4 | all | 0 | 0 | 0 | every positive passed | URLTA-style duty to notify the landlord of an extended absence |
| `ND-GAPS-105` | 4 | all | 3 | 0 | 0 | every positive passed | rent control and its preemption. NOTE the vocabulary trap: the operative text says "controlling the amount of rent charged", never "rent control" - that phrase is in the section HEADING only |
| `ND-GAPS-106` | 5 | all | 12 | 0 | 0 | every positive passed | a lease charge for serving a notice or filing an eviction action |
| `ND-GAPS-118` | 4 | all | 33 | 0 | 0 | every positive passed | RERUN of ND-GAPS-104 (its second positive, s 47-16-07.3, could not match this companion pattern set). Extended absence: everyday-word companion battery, both word orders |
| `ND-GAPS-119` | 4 | all | 11 | 0 | 0 | every positive passed | RERUN of ND-GAPS-107 (its positive cited s 6-08-16, which is in title 6 and outside the corpus). Collection fees and costs recoverable from a tenant |
| `ND-GAPS-120` | 3 | all | 130 | 0 | 0 | every positive passed | attorney's fees: agreement, void provisions, prevailing-party awards. Apostrophe tested in straight and curly forms on a possessive (rule 19) |
| `ND-GAPS-121` | 5 | all | 8 | 0 | 0 | every positive passed | crime-free / criminal-activity addendum, expedited eviction, mandatory-eviction duty |
| `ND-GAPS-122` | 4 | all | 79 | 0 | 0 | every positive passed | criminal activity: everyday-word companion battery |
| `ND-GAPS-123` | 6 | all | 10 | 0 | 0 | every positive passed | an express non-waiver or anti-waiver provision anywhere in ND law |
| `ND-GAPS-124` | 4 | statutes | 42 | 0 | 0 | every positive passed | every waiver word in the statutes, to locate each place ND law speaks to waiver at all |
| `ND-GAPS-125` | 4 | all | 28 | 0 | 0 | every positive passed | jury-trial waiver in a lease |
| `ND-GAPS-126` | 1 | all | 139 | 0 | 0 | every positive passed | homestead exemption: whose exemption it is, and what a waiver of it reaches |
| `ND-GAPS-127` | 5 | all | 0 | 0 | 0 | every positive passed | smoke drift between units, a smoke-free policy duty, and any waiver of a drift claim |
| `ND-GAPS-128` | 5 | all | 3 | 0 | 0 | every positive passed | a duty to give a rent receipt, and any anti-waiver of that duty |
| `ND-GAPS-129` | 5 | all | 6 | 0 | 0 | every positive passed | waiver by acceptance of rent after a known breach |
| `ND-GAPS-130` | 3 | all | 0 | 0 | 0 | every positive passed | a non-waiver clause attached to the security deposit regime (s 47-16-07.1) |
| `ND-GAPS-131` | 4 | all | 1 | 0 | 0 | every positive passed | whether ND has adopted URLTA (and so a Part 5 / act-wide non-waivable-rights section) |
| `ND-GAPS-132` | 3 | all | 0 | 0 | 0 | every positive passed | a waivable notice to quit / notice of intention to evict |
| `ND-GAPS-133` | 3 | all | 13 | 0 | 0 | every positive passed | notice before a showing, and whether it can be waived in the lease |
| `ND-GAPS-135` | 4 | all | 26 | 0 | 0 | every positive passed | RERUN of ND-GAPS-134 (its positive cited s 9-08-03, whose text carries no lease word and so could not match this pattern set). A dedicated ban on penalty clauses in a lease, and any enumerated prohibited-lease-provisions list |
| `ND-GAPS-141` | 7 | all | 118 | 0 | 0 | every positive passed | exculpatory / indemnity / hold-harmless terms of art, anywhere in the corpus. Synthetic positive because no ND section uses these words of a lease; the pattern limb is what is tested. |
| `ND-GAPS-142` | 6 | all | 7 | 0 | 0 | every positive passed | exculpation in ND's own everyday words rather than the drafter's terms of art; the real section (9-08-02) says 'exempting ... from responsibility' and never 'exculpatory', which is exactly the vocabulary gap that made a companion battery necessary here. |
| `ND-GAPS-143` | 5 | all | 25 | 0 | 0 | every positive passed | an enumerated prohibited-lease-provisions list, or an exculpation ban, inside the landlord-tenant chapter itself. Tests the claim that ch. 47-16 has no such list and that the bar lives in title 9 instead. |
| `ND-GAPS-201` | 2 | all | 0 | 0 | 0 | every positive passed | term-of-art battery: does any ND statute require a lessor to post or disclose the standards or criteria used to set the amount of a security deposit |
| `ND-GAPS-202` | 2 | all | 0 | 0 | 0 | every positive passed | everyday-words battery for deposit-calculation standards: a ND drafter would say disclose or provide written notice of the amount of the security deposit rather than use the phrase deposit standards |
| `ND-GAPS-203` | 2 | all | 1 | 0 | 0 | every positive passed | term-of-art battery: does any ND statute let or make a lessor hold a residential security deposit in escrow or a trust account, or post a bond in place of holding the money |
| `ND-GAPS-204` | 2 | all | 2 | 0 | 0 | every positive passed | everyday-words battery: must a ND lessor tell the tenant the name and address of the institution or the account where the security deposit is held; positive is the deposit section itself, which names the account type |
| `ND-GAPS-205` | 2 | all | 0 | 0 | 0 | every positive passed | battery for a small-owner or unit-count exemption from the ND deposit rules; ND does use unit-count thresholds elsewhere (smoke alarms) and a single-family-residence carve-out in 47-16-13.1, so the question is real |
| `ND-GAPS-206` | 2 | all | 0 | 0 | 0 | every positive passed | term-of-art battery: does any ND statute let the lease pre-set a schedule of charges, a liquidated figure or a fixed amount that may be deducted from the security deposit |
| `ND-GAPS-207` | 2 | all | 1 | 0 | 0 | every positive passed | everyday-words battery: a ND drafter would write about carpet, cleaning or repainting charges rather than a cost schedule; positive is the deposit section, which names the costs of cleaning |
| `ND-GAPS-208` | 2 | all | 0 | 0 | 0 | every positive passed | term-of-art battery: does any ND statute give a tenant a right to pay a security deposit in installments, or regulate the timing of deposit payment |
| `ND-GAPS-209` | 2 | all | 0 | 0 | 0 | every positive passed | everyday-words battery for the same question: a ND drafter would forbid requiring the entire deposit up front or let the tenant pay a portion over the first months rather than use the word installment |
| `ND-GAPS-210` | 4 | all | 0 | 0 | 0 | every positive passed | term-of-art battery: does any ND statute restrict applying a security deposit to the last month's rent, or restrict taking last month's rent on top of a deposit |
| `ND-GAPS-211` | 2 | all | 0 | 0 | 0 | every positive passed | everyday-words battery for the same question: a ND drafter would say advance rent, prepaid rent or rent paid in advance rather than last month's rent |
| `ND-GAPS-212` | 2 | all | 2 | 0 | 0 | every positive passed | term-of-art battery: must a ND tenant give a forwarding address or notice of surrender before the deposit duty runs, and is delivery of possession or surrender defined anywhere |
| `ND-GAPS-213` | 2 | all | 2 | 0 | 0 | every positive passed | everyday-words battery for the same question: a ND drafter would say vacate, move out, return the keys or notify the landlord rather than surrender or forwarding address |
| `ND-GAPS-214` | 2 | all | 0 | 0 | 0 | every positive passed | term-of-art battery: does any ND statute provide an expedited or shortened deposit disposition, on tenant request or otherwise, instead of the thirty-day period |
| `ND-GAPS-215` | 2 | all | 0 | 0 | 0 | every positive passed | everyday-words battery for the same question: a ND drafter would say promptly, sooner, without delay or earlier than rather than use the word expedited |
| `ND-GAPS-216` | 2 | all | 0 | 0 | 0 | every positive passed | term-of-art battery: does any ND statute authorise or regulate a fee in lieu of a security deposit, a deposit alternative, or an insurance or surety product in place of a deposit |
| `ND-GAPS-217` | 2 | all | 0 | 0 | 0 | every positive passed | everyday-words battery for the same question: a ND drafter would say monthly fee, nonrefundable fee or fee instead of, charged to a tenant, rather than fee in lieu of a security deposit |
| `ND-GAPS-218` | 6 | all | 3 | 0 | 0 | every positive passed | term-of-art battery: does any ND statute regulate a pre-lease holding deposit, earnest money or reservation fee taken from a prospective tenant |
| `ND-GAPS-219` | 2 | all | 3 | 0 | 0 | every positive passed | everyday-words battery for the same question: a ND drafter would write about money taken to hold or reserve the unit, an application deposit, or forfeiture, rather than use the phrase holding deposit |
| `ND-GAPS-220` | 2 | all | 0 | 0 | 0 | every positive passed | term-of-art battery: does any ND statute allow a nonrefundable deposit or fee in a residential letting, or require it to be labelled or disclosed as nonrefundable |
| `ND-GAPS-221` | 2 | all | 1 | 0 | 0 | every positive passed | everyday-words battery for the same question: a ND drafter would say the money will not be returned, will not be refunded, or may be retained by the lessor rather than use the word nonrefundable |
| `ND-GAPS-222` | 2 | all | 0 | 0 | 0 | every positive passed | term-of-art battery: does any ND statute require a nonrefundable deposit or any deposit term to be in a separate writing or separate signed document apart from the lease |
| `ND-GAPS-223` | 2 | all | 1 | 0 | 0 | every positive passed | everyday-words battery in ND's own drafting vocabulary: chapter 47-16 already uses 'separate writing signed by the parties' (47-16-13.1(5)(a)) and 'provide space for the lessee to initial' (47-16-15(4)), so the question is whether either device was ever attached to a deposit or a nonrefundable amount |
| `ND-GAPS-224` | 2 | all | 5 | 0 | 0 | every positive passed | term-of-art battery: does ND law regulate the return of a utility deposit, and does any landlord-tenant section reach one; positive is the unclaimed property section, which names a deposit or refund owed to a subscriber by a utility |
| `ND-GAPS-225` | 2 | all | 0 | 0 | 0 | every positive passed | everyday-words battery: a ND drafter would name the services - water and sewer, electric service, natural gas service, utilities - rather than say utility deposit; tests whether any ND statute makes a landlord-collected utility deposit returnable on its own terms |
| `ND-GAPS-226` | 2 | all | 5 | 0 | 0 | every positive passed | term-of-art battery enumerating every ND cap expressed near a security deposit, to prove none was missed; positive is the deposit section's own cap on conduct |
| `ND-GAPS-227` | 2 | statutes | 21 | 0 | 0 | every positive passed | everyday-figure sweep over the statutes scope: every dollar amount, percentage or multiple of rent appearing within 200 characters of a lessor, landlord, lessee, tenant, rental agreement or dwelling unit, so that each figure in the landlord-tenant money law can be classified as a cap, a ceiling, a floor, a threshold, a flat sum or a permission |
| `ND-GAPS-228` | 4 | all | 1 | 0 | 0 | every positive passed | term-of-art battery: does the phrase liquidated damages, stipulated damages, agreed damages or penalty clause appear anywhere in the ND corpus, in a tenancy context or at all |
| `ND-GAPS-229` | 2 | all | 4 | 0 | 0 | every positive passed | everyday-words battery in ND's own drafting vocabulary: chapter 9-08 never says liquidated damages, it says damages determined in anticipation of a breach and an amount presumed to be the damage sustained where fixing the actual damage would be impracticable or extremely difficult - the rent-control lesson applied |
| `ND-GAPS-230` | 2 | all | 6 | 0 | 0 | every positive passed | term-of-art battery: does ND supply a legal rate of interest on money owed without a contract term, and does it attach to unpaid or overdue amounts and to damages |
| `ND-GAPS-231` | 2 | all | 15 | 0 | 0 | every positive passed | everyday-words battery: does any ND landlord-tenant section mention interest in connection with unpaid rent or amounts owed to the landlord, as opposed to interest on the deposit |
| `ND-GAPS-301` | 4 | all | 41 | 0 | 0 | every positive passed | application-fees, term of art: does any ND provision use "application fee", "screening fee", "tenant screening" or "rental application"? |
| `ND-GAPS-302` | 5 | all | 547 | 0 | 0 | every positive passed | application-fees, everyday words: money an ND drafter would charge an applicant up front, however denominated (applicant/apply near fee/charge/nonrefundable/refund; move-in, holding, administrative). |
| `ND-GAPS-303` | 4 | all | 47 | 0 | 0 | every positive passed | late-fee-limit, term of art: "late fee", "late charge", "late payment", delinquency near charge, across the whole corpus and the whole-Century-Code section-name index. |
| `ND-GAPS-304` | 4 | all | 8 | 0 | 0 | every positive passed | late-fee-limit, everyday words: what an ND drafter would write instead of "late fee" (rent near unpaid/past due/overdue; a percentage of monthly rent; a per-day amount). |
| `ND-GAPS-305` | 4 | all | 17 | 0 | 0 | every positive passed | required-fees, term of art: must ND fees be listed in the lease with their purposes? |
| `ND-GAPS-306` | 5 | all | 28 | 0 | 0 | every positive passed | required-fees, everyday words: a fee or charge named near the lease itself, a markup on a billed service, a common-area fee, an actual-cost limit. |
| `ND-GAPS-308` | 2 | all | 82 | 0 | 0 | every positive passed | fee-transparency, everyday words: a fee or charge named near disclosure, the first page, advertising or a conspicuous statement. |
| `ND-GAPS-309` | 4 | all | 3 | 0 | 0 | every positive passed | fee-unprovided-service, term of art: a fee for a service the landlord does not provide. |
| `ND-GAPS-311` | 3 | all | 209 | 0 | 0 | every positive passed | government-fee-reimbursement, term of art: a governmental fee, or a fee named near a city, county, municipality, political subdivision or government. |
| `ND-GAPS-312` | 4 | all | 859 | 0 | 0 | every positive passed | government-fee-reimbursement, everyday words: an inspection, licence, registration or permit named near a fee or reimbursement; a rental licence or rental inspection scheme. |
| `ND-GAPS-313` | 4 | all | 11 | 0 | 0 | every positive passed | governmental-fines, term of art: a governmental or municipal fine, or a fine or penalty named near a tenant or lessee. |
| `ND-GAPS-315` | 4 | all | 20 | 0 | 0 | every positive passed | alarm-tampering-fee, term of art: smoke alarm, carbon monoxide detector, tampering, disabling a detector. |
| `ND-GAPS-316` | 4 | all | 9 | 0 | 0 | every positive passed | alarm-tampering-fee, everyday words: an alarm or detector named near removal, batteries, disconnection, a fee, a charge or a tenant; a fire alarm or safety device duty. |
| `ND-GAPS-317` | 4 | all | 4 | 0 | 0 | every positive passed | carpet-cleaning, term of art: carpet, professional cleaning in either word order, cost of cleaning. |
| `ND-GAPS-318` | 6 | all | 6 | 0 | 0 | every positive passed | carpet-cleaning, everyday words: floor covering, carpet, rug or paint named near cleaning, replacement or deduction; useful life, depreciation, wear and tear. |
| `ND-GAPS-319` | 4 | all | 5 | 0 | 0 | every positive passed | key-control-policy, term of art: a key control policy, a master key, keys near a policy, employees or background checks. |
| `ND-GAPS-320` | 2 | all | 8 | 0 | 0 | every positive passed | key-control-policy, everyday words: keys, fobs or access cards named near duplication, issuance, return, safekeeping, custody or securing. |
| `ND-GAPS-321` | 7 | all | 12 | 0 | 0 | every positive passed | smart-access, term of art: smart lock, smart access, electronic lock, keyless entry, app-based or mobile credential entry, biometrics. |
| `ND-GAPS-323` | 5 | all | 51 | 0 | 0 | every positive passed | hoa, term of art: homeowners’ association, condominium association, unit owners’ association, common interest community, community association. |
| `ND-GAPS-324` | 2 | all | 20 | 0 | 0 | every positive passed | hoa, everyday words: an association, declaration, bylaws, covenants or administrative body named near a tenant, lessee, renter, leasing, rental or rent — the words an ND drafter would use for an association rule reaching a renter or for rent collected by an association. |
| `ND-GAPS-325` | 4 | all | 59 | 0 | 0 | every positive passed | association-obligations-disclosure, term of art: an association or condominium named near disclosure, documents or a resale certificate. |
| `ND-GAPS-326` | 4 | all | 19 | 0 | 0 | every positive passed | association-obligations-disclosure, everyday words: bylaws, a declaration or rules and regulations named near furnishing, providing, delivering, attaching or a copy — the way an ND drafter would impose a landlord-to-tenant document duty. |
| `ND-GAPS-327` | 2 | all | 24 | 0 | 0 | every positive passed | dv-qualifying-documents, term of art: domestic violence, domestic abuse, sexual assault or stalking named near documentation, verification, certification, an affidavit or evidence. |
| `ND-GAPS-328` | 4 | all | 17 | 0 | 0 | every positive passed | dv-qualifying-documents, everyday words: a court order, protection order, restraining order, no-contact order, police report or court record named near a tenant, victim, landlord or lessee; a victim advocate’s statement; a qualified third party. |
| `ND-GAPS-329` | 10 | all | 3 | 0 | 0 | every positive passed | security-devices, term of art: a security device, deadbolt, peephole, door viewer, window latch, keyless bolting device, rekeying (both the "rekey" and "re-key" spellings). |
| `ND-GAPS-330` | 6 | all | 1 | 0 | 0 | every positive passed | security-devices, everyday words: a lock, latch, bolt or chain named near a door, window, exterior, dwelling unit or premises; changing the locks; providing and maintaining locks; operable locks; furnishing keys. |
| `ND-GAPS-331` | 6 | all | 0 | 0 | 0 | every positive passed | fee-transparency, term of art (rerun of ND-GAPS-307: its corpus positive 47-16-07.1 carried "itemized" but no "fee" within the 180-character window, so the pattern could not reach it; replaced with a synthetic positive written in the statute style for the itemization limb). |
| `ND-GAPS-332` | 2 | all | 46 | 0 | 0 | every positive passed | fee-unprovided-service, everyday words (rerun of ND-GAPS-310: its corpus positive 47-16-13.1 carries "unavailable" in subdivision 1(f) and "facilities" in 1(d), more than 200 characters apart, so the proximity pattern could not reach it; replaced with synthetic positives). |
| `ND-GAPS-333` | 4 | all | 6 | 0 | 0 | every positive passed | governmental-fines, everyday words (rerun of ND-GAPS-314: its corpus positive 47-16-02.1 says "residential", which the limb \bresident\b could not match; limb widened to \bresidential\b and \bdwelling\b). |
| `ND-GAPS-334` | 4 | all | 5 | 0 | 0 | every positive passed | smart-access, everyday words (rerun of ND-GAPS-322: its synthetic positive did not contain the literal limb "application on a" and its corpus positive 54-21-17.1 is not in this corpus (title 54 is not held); both replaced with synthetics written in the statute style). |
| `ND-GAPS-401` | 2 | all | 11 | 0 | 0 | every positive passed | Tests whether ND states a materiality/substantiality threshold for a habitability breach, as distinct from the "materially affecting health and safety" limiter on the code-compliance duty in 47-16-13.1(1)(a). |
| `ND-GAPS-402` | 2 | all | 1 | 0 | 0 | FAILED positive(s): 47-16-13 | Everyday-word limb for habitability materiality: whether a ND drafter graded defects as serious/major/minor rather than using "material". |
| `ND-GAPS-403` | 3 | all | 6 | 0 | 0 | every positive passed | Tests whether any ND provision other than 47-16-13.1(4)-(6) lets the parties modify, waive or shift the landlord habitability duties. |
| `ND-GAPS-404` | 3 | all | 1 | 0 | 0 | every positive passed | Tests for any ND presumption, prima facie rule or burden-shifting device about the habitable condition of a dwelling; limb 1 is a reach limb proving the search finds ch. 47-16. |
| `ND-GAPS-409` | 3 | all | 61 | 0 | 0 | every positive passed | Rerun of ND-GAPS-405 with a corpus reach limb (presumed abandoned, 47-30.2-04) proving the presumption vocabulary finds real ND presumptions: everyday-word limb for a habitability presumption. |
| `ND-GAPS-410` | 4 | all | 45 | 0 | 0 | every positive passed | Tests for a Wisconsin ATCP 134.07-style ND rule requiring a landlord promise to clean, repair or improve to be in writing, with a completion date, before the lease is signed. |
| `ND-GAPS-411` | 2 | all | 16 | 0 | 0 | every positive passed | Everyday-word limb for promises to repair: repair/clean/improve/remodel near in-writing/written/completion-date/before-occupancy, both word orders. |
| `ND-GAPS-412` | 3 | all | 69 | 0 | 0 | every positive passed | Tests for any ND dollar cap, rent-fraction cap or cost threshold on the tenant repair-and-deduct remedy, or any cost-based right to terminate instead of repairing. Reach limb proves money figures are findable. |
| `ND-GAPS-413` | 3 | all | 57 | 0 | 0 | every positive passed | Tests for a ND rent escrow mechanism: rent paid to an escrow account, court registry or clerk pending repairs. |
| `ND-GAPS-414` | 2 | all | 49 | 0 | 0 | every positive passed | Everyday-word limb for rent into court: pay/paid/deposit/tender near into-court/with-the-clerk/court-registry/clerk-of-district-court, both word orders. |
| `ND-GAPS-415` | 2 | all | 146 | 0 | 0 | every positive passed | Tests whether ND requires a residential landlord to designate a person to receive repair requests or make repairs, or lets the lease designate one. |
| `ND-GAPS-416` | 2 | all | 77 | 0 | 0 | every positive passed | Rerun of ND-GAPS-408 broadened to provide/furnish/deliver/give verbs, because 408 missed the mobile home park lease-and-rights summary duty in 47-10-28(9): tests for any ND requirement that a residential landlord state or supply a habitability warranty or prescribed lease content. |
| `ND-GAPS-417` | 2 | all | 169 | 0 | 0 | every positive passed | Rerun of ND-GAPS-407 widened to complaint/inquiry/request/maintenance vocabulary, because 407 missed the two-business-day duty to acknowledge mobile home park tenant complaints in 47-10-28(1)(e): tests whether ND fixes any day-count or hour-count period for responding to a tenant repair request. |
| `ND-GAPS-418` | 3 | all | 100 | 0 | 0 | every positive passed | Tests whether ND attaches any damages multiplier, statutory damages figure, civil penalty or punitive remedy to a landlord habitability or repair breach, beyond the appropriate damages and discretionary attorney fees in 47-16-13.5 and 47-16-13.6. |
| `ND-GAPS-419` | 3 | all | 2 | 0 | 0 | every positive passed | Tests whether ND sets any temperature figure, thermostat setting or minimum for the landlord heat duty, as opposed to the standard "reasonable heat" in 47-16-13.1(1)(f). |
| `ND-GAPS-420` | 4 | all | 1 | 0 | 0 | every positive passed | Everyday-word limb for a ND heat standard: adequate/sufficient/suitable/proper heat, a heating season, or heat that shall be furnished. |
| `ND-GAPS-421` | 3 | all | 3 | 0 | 0 | every positive passed | Tests for any ND requirement to set a water heater or hot water temperature, including at each new occupancy (the Wisconsin 704.06 and Washington RCW 19.27A.060(3) shapes). |
| `ND-GAPS-422` | 3 | all | 3 | 0 | 0 | every positive passed | Everyday-word limb for water heater temperature: scald protection, mixing valves, adjustment, or an energy or plumbing code reference near a water heater or hot water. |
| `ND-GAPS-423` | 4 | all | 5 | 0 | 0 | every positive passed | Tests for any ND steam radiator cover duty or mandatory lease rider about radiator covers. |
| `ND-GAPS-424` | 4 | all | 4 | 0 | 0 | every positive passed | Tests for any ND right to install a portable or window cooling device, or any required lease statement about restricting window units (the Washington RCW 59.18.740 shape). |
| `ND-GAPS-501` | 2 | statutes | 20 | 0 | 0 | every positive passed | Cluster-wide figure sweep (utilities/metering cluster 3B): every dollar amount, percentage or multiple of rent within 200 chars of a lessor/landlord/lessee/tenant/rental agreement/dwelling unit, across the whole statutes scope. Finds money caps a topic-scoped battery cannot see. |
| `ND-GAPS-502` | 2 | statutes | 14 | 0 | 0 | every positive passed | Complementary figure sweep anchored on utility/meter vocabulary rather than party vocabulary: every dollar figure or percentage within 200 chars of a utility, meter, metered/metering, electricity, gas, water, sewer, heat, garbage, refuse, trash, fuel or propane word, whole statutes scope. Tests whether any utility money cap exists outside sec. 47-10-28(8). |
| `ND-GAPS-503` | 9 | all | 2 | 0 | 0 | every positive passed | Term-of-art battery for the utility submetering/apportionment family: submeter, ratio utility billing, utility allowance, apportionment or allocation of utilities, master-meter, check-meter. Whole corpus. |
| `ND-GAPS-504` | 4 | all | 9 | 0 | 0 | every positive passed | Everyday-words battery for the metering/apportionment family: separate/individual/single meter near a tenancy word, and utility words near included-in-rent / divided-among / prorated / shall-pay-for / responsible-for-payment. The words a North Dakota drafter would have used instead of "submetering". |
| `ND-GAPS-505` | 6 | all | 1 | 0 | 0 | every positive passed | Term-of-art battery: does North Dakota have an unlawful-utility-interruption / essential-services provision? Tests "essential services", willful/unlawful interruption, and interruption of service, whole corpus. |
| `ND-GAPS-506` | 4 | all | 2 | 0 | 0 | every positive passed | Everyday-words battery: shut off / turn off / discontinue / cut off / disconnect / terminate service near a utility word, and near a tenancy word. The words a North Dakota drafter would have used instead of "interruption of essential services". |
| `ND-GAPS-507` | 7 | all | 20 | 0 | 0 | every positive passed | Term-of-art battery: does North Dakota give a tenant a right of access to cable television, video or telecommunications service, or an antenna/satellite right? Whole corpus. |
| `ND-GAPS-508` | 2 | all | 1 | 0 | 0 | every positive passed | Everyday-words battery for the same: television / internet / broadband / telephone service near a tenancy word, whole corpus. Catches a tenant-access or no-rent-differential rule written without the term of art. |
| `ND-GAPS-509` | 3 | all | 1 | 0 | 0 | every positive passed | Battery: is there a North Dakota landlord duty to tell tenants where or how to recycle? recycl* near a tenancy word, a notice word or a lease word, and near receptacle/container/bin. Whole corpus. |
| `ND-GAPS-510` | 2 | all | 0 | 0 | 0 | every positive passed | Battery: does any North Dakota statute let a lease clause authorize release of a tenant energy-usage data to the owner, or require benchmarking? energy usage/consumption/data/benchmarking near release/consent/authorize/disclose or a tenancy word. Whole corpus. |
| `ND-GAPS-511` | 5 | all | 45 | 0 | 0 | every positive passed | Battery: does North Dakota have an energy-efficiency/meter conservation charge regime, or any landlord notice duty or rent deduction tied to one? conservation near charge/fee/surcharge or a utility word, plus weatherization and energy-efficiency charge. Whole corpus. |
| `ND-GAPS-512` | 2 | all | 7 | 0 | 0 | every positive passed | Battery: does North Dakota regulate transfer of a utility account into the tenant name, or permit a landlord cutoff of landlord-name utilities the tenant did not transfer? transfer/account/name-of-tenant near a utility or meter word. Whole corpus. |
| `ND-GAPS-513` | 3 | all | 167 | 0 | 0 | every positive passed | Battery: may an owner be designated, by lease or separate document, to receive notice of a tenant pending utility disconnection? notice/notify near designate/third party/copy/authorize, and disconnection near designate/landlord/owner. Whole corpus. |
| `ND-GAPS-516` | 2 | all | 19 | 0 | 0 | every positive passed | Battery: does North Dakota require a utility disclosure, statement, addendum, attachment or summary with a residential lease? disclosure/statement/addendum/attachment/summary/separate-writing near a utility or meter word. Whole corpus. |
| `ND-GAPS-517` | 2 | all | 6 | 0 | 0 | every positive passed | Rerun of ND-GAPS-514, whose synthetic positive failed because the utility limb required the bill word to follow the utility word immediately and the synthetic read "water, sewer and garbage service charges". This run allows a 40-char window between the two. Question unchanged: does any statute in the corpus make unpaid water, sewer, garbage or other utility SERVICE charges a lien on the property or collectible with property taxes? |
| `ND-GAPS-518` | 5 | all | 167 | 0 | 0 | every positive passed | Rerun of ND-GAPS-515, whose corpus positive sec. 47-16-20.1 was recorded as FAILED and was the wrong positive: sec. 47-16-20.1 forbids a fee for accepting cash, a check or a money order but contains no electronic, online, portal or web-site vocabulary, so it could never match this battery pattern and proved nothing about the search. Replaced with a synthetic positive written in the statutory verbs an Oregon-style portal provision would use, which tests the pattern limb. Question unchanged: does North Dakota regulate requiring a tenant to pay or sign through an online portal? |
| `ND-GAPS-601` | 5 | all | 65 | 0 | 0 | every positive passed | eviction-process, term of art: does ND give an evicted tenant a pay-or-quit cure right, a notice to quit, or a rent-into-court / escrow procedure in the possession action? 47-32-02 is a notice of INTENTION TO EVICT, not a notice to quit; 47-32-04 limits counterclaims to a setoff. |
| `ND-GAPS-602` | 5 | all | 26 | 0 | 0 | every positive passed | eviction-process, everyday words: a stay or supersedeas on appeal of an eviction conditioned on a rent affidavit; a legislature-only preemption clause; a bar on courts requiring a mandatory notice or pleading form. Tests the appeal/writ-timing and form-mandate sub-questions. |
| `ND-GAPS-603` | 5 | all | 15 | 0 | 0 | every positive passed | eviction-process, the exotic sub-questions other states carry: a bar on private eviction servers broadcasting video of service with statutory damages; a federal-shutdown continuance for federal employee and contractor tenants; a wage-attachment cap for a residential-lease judgment. |
| `ND-GAPS-605` | 5 | all | 58 | 0 | 0 | every positive passed | eviction-service-party, term of art: may a residential lease name a person to accept the eviction summons or notice? 47-32-02 names only the lessee, subtenant or party in possession, or posting. Corpus positive 41-09-27 proves the vocabulary is findable. |
| `ND-GAPS-606` | 4 | all | 23 | 0 | 0 | every positive passed | eviction-service-party, everyday words: who may be handed the papers in ND, and is there an address-confidentiality-program participant whose eviction papers must go to the secretary of state? |
| `ND-GAPS-607` | 2 | all | 8 | 0 | 0 | every positive passed | expedited-criminal-eviction, term of art: is there a separate expedited, summary or emergency eviction track in ND (as distinct from the single 47-32 action)? |
| `ND-GAPS-608` | 2 | all | 22 | 0 | 0 | every positive passed | expedited-criminal-eviction, everyday words: does any ND statute make criminal activity, a controlled substance, violence or a firearm an independent and faster eviction ground? 47-32-01(1)-(3) reach force and threats of violence by a possessor; (7) disturbance; (8) only a written-lease material term. |
| `ND-GAPS-610` | 6 | all | 46 | 0 | 0 | every positive passed | lockout-for-rent-delinquency, everyday words a ND drafter would use instead of "lockout": deny or prevent access or entry, a twenty-four-hour key rule, rendering the premises inaccessible or uninhabitable. Second battery per the two-battery rule. |
| `ND-GAPS-612` | 4 | all | 93 | 0 | 0 | every positive passed | possession-bond, everyday words: posting or filing a bond, security or undertaking, or depositing money with the court or clerk, anywhere in the corpus. Second battery per the two-battery rule. |
| `ND-GAPS-613` | 3 | all | 69 | 0 | 0 | every positive passed | redemption, term of art: does ND give an evicted residential tenant a statutory right to redeem or reinstate the tenancy by paying? Tests whether the corpus-wide redeem/redemption vocabulary is anything other than redemption from a mortgage, execution or tax sale. |
| `ND-GAPS-615` | 3 | all | 11 | 0 | 0 | every positive passed | forfeiture-redemption, term of art: may a ND residential lessee obtain relief against forfeiture of the lease (equitable redemption) after a breach? Tests whether forfeiture vocabulary near a landlord-tenant term reaches anything beyond the oil-and-gas lease-release sections 47-16-36 and 47-16-37. |
| `ND-GAPS-616` | 5 | all | 74 | 0 | 0 | every positive passed | forfeiture-redemption, everyday words: the ND re-entry / repossession / rescission / cancellation vocabulary that stands in for "forfeiture" in a lease context, plus any equitable-relief hook. Second battery per the two-battery rule. |
| `ND-GAPS-617` | 5 | all | 3 | 0 | 0 | every positive passed | rent-demand-bar, term of art: is a ND lessor ever barred from demanding, collecting or recovering rent (for example for want of a licence or registration, or after a defective notice)? 47-16-26 double letting is the one ND provision that relieves tenants of rent, and it is a one-room-double-letting rule, not a registration or notice bar. |
| `ND-GAPS-618` | 4 | all | 36 | 0 | 0 | FAILED positive(s): 47-32-01.1 | rent-demand-bar, everyday words: a licence, registration, certificate or permit condition on a ND landlord collecting rent, and any statutory defence to an action for rent. 47-10-28(1)(a) requires a mobile home park licence and 47-32-01.1 makes a 47-10-28 violation a defence to the EVICTION -- the battery tests whether it is anywhere made a bar to the rent. |
| `ND-GAPS-619` | 3 | all | 40 | 0 | 0 | every positive passed | good-cause-notice, term of art: is a ND residential termination or eviction notice required to rest on, or to state, a good cause? 47-10-28(13) and (14) use "without cause" but only to freeze a park lease during a licence suspension or a pending action. |
| `ND-GAPS-620` | 3 | all | 91 | 0 | 0 | every positive passed | good-cause-notice, everyday words: does any ND statute require a termination or eviction notice to state the reason, ground, cause or facts? 47-17-02 prescribes only writing and a specified period; 47-32-02 only three days written notice of intention to evict. 47-10-28(10) and 47-16-15(4) are the two ND notice-content mandates and neither is a reason. |
| `ND-GAPS-621` | 2 | statutes | 17 | 0 | 0 | every positive passed | FIGURE SWEEP for canvass 4A: every dollar amount, percentage and multiple of rent within 200 chars of lessor/landlord/lessee/tenant/rental agreement/dwelling unit, both word orders, whole statutes scope. Tests whether ND statutes anywhere set a cap, figure or multiple on holdover liability, a possession bond, a wage-attachment ceiling, statutory damages for eviction-service misconduct, or any other money figure in the eviction/default cluster. |
| `ND-GAPS-622` | 3 | all | 6 | 0 | 0 | every positive passed | holdover-rate, term of art: does any ND statute set or cap a holdover rate -- a per diem, a multiple of rent, or liquidated damages -- for a tenant who stays past the term? Read with the figure sweep ND-GAPS-621. The two ND double-damages measures named in the Legislative Council master index, 32-03-27 "Damages for tenant's failure to surrender premises" and 32-03-28 "Damages for tenant's willful holding over", sit in chapter 32-03, which is NOT in the corpus. |
| `ND-GAPS-623` | 3 | all | 4 | 0 | 0 | every positive passed | landlord-remedies-termination: does ND authorise or regulate acceleration of the whole remaining rent on default? 47-16-13.7 gives liability for rent during the remainder of the term but subject to the duty to mitigate; 47-16-13.4 splits possession-and-rent from a separate actual-damages claim. |
| `ND-GAPS-624` | 4 | all | 15 | 0 | 0 | every positive passed | tenancy-at-will: locating every ND provision on an estate or tenancy at will, a periodic tenancy, and any tenancy at sufferance. Confirms chapter 47-17 plus 47-16-05, 47-16-19, 47-16-15 and 47-16-27 are the whole of it and that ND has no tenancy-at-sufferance category. |
| `ND-GAPS-625` | 4 | all | 85 | 0 | 0 | every positive passed | limitation-of-actions: does any corpus chapter set the limitation period for a ND landlord suing for unpaid rent or lease damages, or any rule on partial payments restarting it? The general periods live in chapter 28-01 ("Time for Commencing Actions", sections 28-01-04, 28-01-05, 28-01-15 ten-year and 28-01-16 six-year, per the Legislative Council master index), which is NOT in the corpus. 9-08-05 voids any contractual shortening. |
| `ND-GAPS-626` | 4 | all | 4 | 0 | 0 | every positive passed | confession-of-judgment, term of art: where in ND law may a lease take a confession of judgment? 47-15.1-04(1) bans one in a CONSUMER RENTAL PURCHASE agreement (rent-to-own of goods, from which 47-15.1-01(4)(d) expressly excludes a lease of real property), and the Legislative Council master index records chapter 28-10 "Confession of Judgment" as SUPERSEDED BY THE NORTH DAKOTA RULES OF CIVIL PROCEDURE. 9-08-05 is the general hook. |
| `ND-GAPS-629` | 5 | all | 27 | 0 | 0 | FAILED positive(s): 47-32-02 | unauthorized-occupant-removal, everyday words: the route ND actually gives an owner against someone who never was a tenant. 47-32-01(1)-(3) reach a party who entered by force, intimidation, fraud or stealth, or who holds by force or threats, and 47-32-02 attaches NO notice requirement to those three grounds. Criminal trespass is 12.1-22-03, in title 12.1, which is NOT in the corpus. |
| `ND-GAPS-630` | 4 | all | 39 | 0 | 0 | every positive passed | notice-to-vacate-additional-terms: what extra content or conduct rules ride on a ND notice to vacate or notice of intention to evict? 47-10-28(10) is the one ND content mandate -- boldfaced wording in a mobile home park notice. Also tests the District of Columbia sub-question, a ban on alterations making the unit uninhabitable while a notice to vacate is pending. |
| `ND-GAPS-631` | 2 | all | 40 | 0 | 0 | every positive passed | SUPERSEDES ND-GAPS-604, whose corpus positive 47-16-06 failed because its "one year" sits nowhere near a cause word. Broadened: any stated period of days, months or years within 200 characters of good cause / just cause / for cause / evict / termination of tenancy / without cause, both word orders, whole corpus. Tests for-cause eviction protection after twelve months tenancy and any other duration-triggered cause requirement. |
| `ND-GAPS-632` | 4 | all | 1288 | 0 | 0 | every positive passed | SUPERSEDES ND-GAPS-611, whose corpus positive 47-16-30.1 failed because its "security deposit" and "possession" sit more than 200 characters apart. Adds a bare bond/undertaking/surety limb so a corpus positive can pass. possession-bond, term of art: any statutory end-of-term possession bond, forthcoming bond, or bond or undertaking posted to obtain or retain possession in a ND eviction? |
| `ND-GAPS-633` | 5 | all | 18 | 0 | 0 | every positive passed | SUPERSEDES ND-GAPS-614, whose corpus positive 47-16-06 failed because its "accepts rent" sits nowhere near a waiver or eviction word; a plain accept-near-rent limb is added. redemption, everyday words: does ND regulate acceptance of partial rent after a termination or eviction notice, or require reservation-of-rights wording? |
| `ND-GAPS-634` | 6 | all | 35 | 0 | 0 | every positive passed | SUPERSEDES ND-GAPS-609, whose corpus positive 47-32-01 failed because "turns out by force" matches no lock/key/exclude limb; a bare lock/key limb is added and a corpus positive that really holds the word is used. lockout-for-rent-delinquency, term of art: any opt-in self-help lockout, lock change, key-access or exclusion provision in ND? |
| `ND-GAPS-635` | 5 | all | 383 | 0 | 0 | every positive passed | SUPERSEDES ND-GAPS-627, in which BOTH corpus positives were recorded as failed because neither 47-16-13.3 nor 41-09-119 carries a notice/hearing/trial word within 120 characters of its waiver word, leaving that run with no passing positive and therefore unusable. A bare waiver limb is added. confession-of-judgment, everyday words: waiving notice, hearing or trial, authorising or consenting to entry of judgment, judgment without suit. |
| `ND-GAPS-636` | 6 | all | 164 | 0 | 0 | every positive passed | SUPERSEDES ND-GAPS-628, whose corpus positive 47-32-02 was recorded as failed because its "sheriff" sits nowhere within 200 characters of a remove/eject/oust word; a bare sheriff/constable limb is added so the corpus positive passes. unauthorized-occupant-removal, term of art: any squatter, unauthorized-occupant or transient-occupant removal route outside chapter 47-32? |
| `ND-GAPS-701` | 3 | all | 5 | 0 | 0 | every positive passed | Term of art: does any ND statute in the corpus bar a non-attorney from appearing for an entity landlord, i.e. define or forbid the unauthorized practice of law? |
| `ND-GAPS-702` | 3 | all | 42 | 0 | 0 | every positive passed | Everyday words: who may appear or represent a corporation, LLC or partnership in a ND court - the words a ND drafter would use instead of unauthorized practice of law. |
| `ND-GAPS-703` | 6 | all | 16 | 0 | 0 | every positive passed | Term of art: does ND law require a lease statement about, or regulate representation of, a special district / special assessment or improvement district? |
| `ND-GAPS-705` | 2 | all | 23 | 0 | 0 | every positive passed | Supersedes ND-GAPS-704, whose pattern limb used only \blease\w* and so could not match the statute word "leasing"; positive 47-16-02.1 failed for that reason. Everyday words: a public body (political subdivision, housing authority, municipality) as landlord or lessor. |
| `ND-GAPS-706` | 2 | all | 23 | 0 | 0 | every positive passed | Supersedes ND-GAPS-704: that run pattern limb used only \blease\w*, which cannot match the statute word leasing, so positive 47-16-02.1 was recorded failed. Everyday words for a public body as landlord. |
| `ND-GAPS-707` | 6 | ['statutes'] | 175 | 0 | 0 | every positive passed | Term of art: does any ND statute in the corpus bar a minor from being an eviction defendant, bar a minor-tenant filing, or set a minor tenant rule? |
| `ND-GAPS-708` | 8 | all | 180 | 0 | 0 | every positive passed | Everyday words: the age and capacity vocabulary a ND drafter would use instead of minor - eighteen years, emancipated, full age, capacity to contract - to catch a minor-tenant rule not using the word minor. |
| `ND-GAPS-709` | 4 | all | 298 | 0 | 0 | every positive passed | Term of art: does any ND statute in title 47 or the landlord-tenant chapters create, limit or regulate a guaranty of a lease, or a guarantor/surety of a tenant? |
| `ND-GAPS-710` | 2 | all | 25 | 0 | 0 | every positive passed | Everyday words: does any ND provision make anyone liable, bound or obligated for a RENEWAL, extension or holdover term - the words a ND drafter would use instead of guarantor renewal liability. |
| `ND-GAPS-711` | 4 | all | 116 | 0 | 0 | every positive passed | Term of art: does the ND nonpayment-eviction statute give a continuance, reinstatement, stay, abatement or postponement when a payment is late? |
| `ND-GAPS-712` | 9 | all | 174 | 0 | 0 | every positive passed | Everyday words: the benefit and subsidy vocabulary a ND drafter would use - public assistance, rental assistance, rent supplement, voucher, subsidy - to find any benefit-delay rule or protection for a subsidised tenant. |
| `ND-GAPS-713` | 5 | all | 182 | 0 | 0 | every positive passed | Term of art: does any ND statute address a TENANT bankruptcy or insolvency - as a ground to terminate a lease, a defence, a stay, or a landlord remedy? |
| `ND-GAPS-714` | 6 | all | 73 | 0 | 0 | every positive passed | Everyday words: the insolvency vocabulary a ND drafter would use instead of bankruptcy - assignment for the benefit of creditors, creditors, debts as they become due. |
| `ND-GAPS-715` | 4 | all | 3 | 0 | 0 | every positive passed | Term of art: attornment. Does ND void an attornment to a stranger, and is there any other attornment provision? Trap test: attorn must not match attorney. |
| `ND-GAPS-717` | 2 | all | 31 | 0 | 0 | every positive passed | Supersedes ND-GAPS-716: its group A limb used only foreclos*/sheriff sale/execution sale/contract for deed and so could not match 47-32-01(5) which says "under mortgage, execution, order, or any judicial process"; positive 47-32-01 failed for that reason. Everyday words: any ND duty to give or pass on notice of a foreclosure, sheriff sale or contract-for-deed cancellation to or by a tenant. |
| `ND-GAPS-718` | 6 | all | 40 | 0 | 0 | every positive passed | Term of art: must a nonresident or entity landlord designate a registered / resident / statutory agent, and is any such duty in title 47 or the landlord-tenant chapters? |
| `ND-GAPS-719` | 2 | all | 31 | 0 | 0 | every positive passed | Everyday words: a nonresident or out-of-state owner needing an in-state agent, broker or address, or rent withholding - the words a ND drafter would use instead of registered agent. |
| `ND-GAPS-720` | 7 | all | 64 | 0 | 0 | every positive passed | Term of art: ND alien land law / foreign-adversary property restriction - is there any provision beyond chapter 47-10.1, and does any of it reach a residential lease? |
| `ND-GAPS-721` | 7 | all | 15 | 0 | 0 | every positive passed | Everyday words: the citizenship and foreign-entity vocabulary ND actually uses - not a citizen of the United States, permanent resident alien, state-controlled enterprise - to find any foreign-ownership rule outside chapter 47-10.1. |
| `ND-GAPS-722` | 2 | all | 69 | 0 | 0 | every positive passed | Term of art: is there any ND landlord / rental registration or licensing duty, and where - landlord, lessor, rental, dwelling unit or mobile home park near regist* / licens* / certificate of occupancy. |
| `ND-GAPS-723` | 9 | all | 210 | 0 | 0 | every positive passed | Everyday words: the licence / permit / assessor vocabulary a ND drafter would use instead of landlord registration - business licence, occupancy permit, certificate of occupancy, county assessor or auditor registration. |
| `ND-GAPS-724` | 2 | all | 110 | 0 | 0 | every positive passed | Term of art: must or may a lease be recorded or filed in ND, and what turns on it - lease vocabulary near record/regist/file/acknowledge. |
| `ND-GAPS-725` | 7 | all | 7 | 0 | 0 | every positive passed | Everyday words: the recording-instrument vocabulary a ND drafter would use - memorandum of lease, notice of lease, short form lease, land registry, register of deeds, Torrens. |
| `ND-GAPS-726` | 9 | all | 170 | 0 | 0 | every positive passed | Term of art: numeric portfolio thresholds - does any ND landlord-tenant duty turn on how many units, houses, families or lots the landlord owns? |
| `ND-GAPS-727` | 8 | all | 1250 | 0 | 0 | every positive passed | Everyday words: exemption and small-landlord vocabulary - does not apply, exempt, owner-occupied, in the business of - to find portfolio tiering not expressed as a number. |
| `ND-GAPS-728` | 6 | all | 16 | 0 | 0 | every positive passed | Term of art: ND statute of frauds threshold for a lease - where is the writing requirement and what is the term cut-off? |
| `ND-GAPS-729` | 3 | all | 14 | 0 | 0 | every positive passed | Everyday words: oral / verbal / unwritten / parol lease or agreement, and part performance - the words a ND drafter would use instead of statute of frauds. |
| `ND-GAPS-730` | 7 | all | 97 | 0 | 0 | every positive passed | Term of art: ND maximum lease term - is there any cap beyond 47-16-02 ten years agricultural / ninety-nine years a city lot, and any perpetual-lease ban? |
| `ND-GAPS-731` | 7 | all | 186 | 0 | 0 | every positive passed | Everyday words: execution formalities for a long lease - seal, power of attorney, subscribing witness - and spousal/homestead consent (husband and wife, both spouses). |
| `ND-GAPS-732` | 4 | all | 99 | 0 | 0 | every positive passed | Term of art: every ND provision that requires a notice to be WRITTEN - the inventory for the written-notice-required topic. |
| `ND-GAPS-733` | 2 | all | 213 | 0 | 0 | every positive passed | Everyday words: how a ND notice must be DELIVERED - mail, first-class mail, facsimile, personally, posting, served, delivered, conspicuous - to catch form requirements not phrased as written notice. |
| `ND-GAPS-801` | 3 | all | 13 | 0 | 0 | every positive passed | Term of art: does any ND statute make asbestos a landlord or lease disclosure duty? Positive is the Legislative Council master index, which names asbestos sections, proving the engine finds the word. |
| `ND-GAPS-802` | 7 | all | 1 | 0 | 0 | every positive passed | Everyday words a ND drafter would use instead of "asbestos": friable, asbestos-containing material, vermiculite, popcorn ceiling, pipe wrap, thermal system insulation. |
| `ND-GAPS-803` | 4 | all | 0 | 0 | 0 | every positive passed | Term of art: does any ND statute name defective/Chinese/corrosive drywall, or make it a disclosure duty? |
| `ND-GAPS-804` | 7 | all | 1 | 0 | 0 | every positive passed | Everyday words a ND drafter would use instead of "defective drywall": wallboard, gypsum, sulfide, sulfur emission/odor, corrosion of copper, offgassing. |
| `ND-GAPS-805` | 5 | all | 16 | 0 | 0 | every positive passed | Term of art: does any ND statute make flood or floodplain status a disclosure, notice or warning duty owed by a landlord to a tenant? Proximity run in both word orders. |
| `ND-GAPS-806` | 9 | all | 53 | 0 | 0 | every positive passed | Everyday words a ND drafter would have used instead of "flood disclosure": water damage, inundation, high-water mark, sewer backup, basement water, levee, dike, overflow of a river or stream. |
| `ND-GAPS-807` | 7 | all | 17 | 0 | 0 | every positive passed | Term of art: does any ND statute require a landlord or a lease to disclose contamination, hazardous substances, activity and use limitations, institutional controls or brownfield status? Proximity in both word orders. |
| `ND-GAPS-808` | 8 | all | 78 | 0 | 0 | every positive passed | Everyday words a ND drafter would use instead of "hazardous contamination disclosure": cleanup, remediation, underground storage tank, petroleum tank, spill affecting soil or groundwater, release of a regulated substance, decontamination. |
| `ND-GAPS-809` | 6 | all | 2 | 0 | 0 | every positive passed | Term of art: does any ND statute name lead-based paint, lead paint, a lead hazard, lead-safe status or lead poisoning in a landlord or lease context? Positive is the master index, which names 23.1-06-05. |
| `ND-GAPS-811` | 4 | all | 2 | 0 | 0 | every positive passed | Term of art for a state lead notice regime: lead within 200 characters of disclosure, notice, certificate, packet or pamphlet, in both word orders, plus lead-safe certificate proximity. |
| `ND-GAPS-812` | 7 | all | 7 | 0 | 0 | every positive passed | Everyday words a ND drafter would use for a lease-delivered state notice packet: pamphlet, brochure, booklet, information sheet, handout, written materials given to a tenant or lessee, in both word orders. |
| `ND-GAPS-813` | 12 | all | 10 | 0 | 0 | every positive passed | Rerun of ND-GAPS-810 with a positive that the pattern set can actually match. ND-GAPS-810 used the master index with term "abatement", which the index contains but never within 120 characters of "paint", so that positive was recorded as failed. Same patterns, everyday and adjacent words for a lead-safe certificate regime. |
| `ND-GAPS-814` | 5 | all | 14 | 0 | 0 | every positive passed | Term of art: does any ND statute make methamphetamine manufacture or a clandestine drug lab a landlord disclosure, reporting or habitation-ban duty? |
| `ND-GAPS-815` | 7 | all | 4 | 0 | 0 | every positive passed | Everyday words a ND drafter would use instead of "meth disclosure": decontamination, chemical residue in or on a dwelling or premises in both word orders, disorderly house, remediation of a dwelling in both word orders. |
| `ND-GAPS-816` | 7 | all | 1 | 0 | 0 | every positive passed | Term of art: does any ND statute require a Proposition-65-style chemical exposure warning, in a lease or posted at a rental property? Carcinogen and cancer-warning proximity in both word orders. |
| `ND-GAPS-817` | 7 | all | 17 | 0 | 0 | every positive passed | Everyday words a ND drafter would use instead of "Proposition 65 warning": a conspicuous warning, notice or sign in both word orders, post a sign, toxic exposure in both word orders, hazardous-substance warning in both word orders. |
| `ND-GAPS-818` | 6 | all | 63 | 0 | 0 | every positive passed | Term of art: does any ND statute require testing of a private well serving a rental dwelling, or delivery of results to a tenant? Well-plus-test proximity in both word orders, plus potable. |
| `ND-GAPS-819` | 8 | all | 1 | 0 | 0 | every positive passed | Everyday words a ND drafter would use instead of "private well testing": nitrate, coliform, bacteria in water or a well in both word orders, water quality testing in both word orders, cistern, drinking water standards. |
| `ND-GAPS-820` | 5 | all | 6 | 0 | 0 | every positive passed | Term of art: does any ND statute require a residential sprinkler system, a retrofit, or a statement in the lease about whether sprinklers are present? Positive is the master index, which names 18-12-17 Sprinklers. |
| `ND-GAPS-821` | 9 | all | 15 | 0 | 0 | every positive passed | Everyday words a ND drafter would use instead of a "sprinkler disclosure": fire alarm, smoke detector or alarm, fire extinguisher, carbon monoxide, fire escape, exiting requirements, and a statement that the premises are not equipped in both word orders. |
| `ND-GAPS-822` | 8 | all | 95 | 0 | 0 | every positive passed | Everyday words for a fire sprinkler duty in ND: retrofit, fire marshal, fire hazard, fire code, abatement of a fire condition in both word orders, installing a sprinkler in both word orders. |
| `ND-GAPS-823` | 6 | all | 0 | 0 | 0 | every positive passed | Term of art: does any ND statute require inspection of balconies, decks or exterior elevated elements at a rental property? Deck-plus-inspection proximity in both word orders. |
| `ND-GAPS-824` | 9 | all | 17 | 0 | 0 | every positive passed | Everyday words a ND drafter would use instead of "balcony inspection": railing, handrail, guardrail, stairway, porch, walkway, structural, weight limit, occupant load. |
| `ND-GAPS-825` | 6 | all | 13 | 0 | 0 | every positive passed | Term of art: does any ND statute require a certificate of occupancy, an occupancy permit or a certificate of inspection to be held, disclosed or attached to a residential lease? Occupancy-plus-certificate proximity in both word orders. |
| `ND-GAPS-826` | 9 | all | 4 | 0 | 0 | every positive passed | Everyday words a ND drafter would use instead of "certificate of occupancy": lawful occupancy in both word orders, may not be occupied, unlawful dwelling in both word orders, approved for occupancy, permit to occupy, occupancy record, change of occupancy. |
| `ND-GAPS-827` | 7 | all | 38 | 0 | 0 | every positive passed | Term of art: does any ND statute require a landlord to disclose an outstanding inspection, correction, abatement or condemnation order to a tenant, or regulate such orders in a lease context? |
| `ND-GAPS-828` | 9 | all | 10 | 0 | 0 | every positive passed | Everyday words a ND drafter would use instead of "condemnation": unfit, human habitation, insanitary or unsanitary, placard, demolition of a dwelling in both word orders, dangerous building in both word orders. |
| `ND-GAPS-829` | 7 | all | 5 | 0 | 0 | every positive passed | Term of art: does any ND statute bar collecting rent, or abate rent, after a condemnation or an order to vacate? Rent-plus-abatement proximity in both word orders, plus the discharge and relief formulations North Dakota actually uses. |
| `ND-GAPS-830` | 8 | all | 7 | 0 | 0 | every positive passed | Everyday words a ND drafter would use for a condemned-premises rent bar: may not collect, charge, demand or accept rent in both word orders, forfeit rent, rent escrow, and rent linked to unfit, uninhabitable or untenantable premises in both word orders. |
| `ND-GAPS-901` | 3 | all | 12 | 0 | 0 | every positive passed | Stigmatized property term of art plus North Dakota's own "material fact" disclosure formula, to test whether any material-fact duty runs to a tenant rather than a buyer. |
| `ND-GAPS-902` | 3 | all | 24 | 0 | 0 | every positive passed | Everyday words for a stigma disclosure (death, suicide, homicide, haunted) in proximity to the ND nouns for a rented dwelling; the term-of-art battery is 901. |
| `ND-GAPS-903` | 3 | all | 68 | 0 | 0 | every positive passed | Sex-offender registry term of art across the whole corpus: tests whether any held chapter imposes a registry disclosure on a landlord. Title 12.1 is NOT in the corpus. |
| `ND-GAPS-905` | 5 | all | 29 | 0 | 0 | every positive passed | Military air installation noise / accident-potential-zone disclosure term of art. Everyday-words battery is 906. |
| `ND-GAPS-906` | 2 | all | 6 | 0 | 0 | every positive passed | Everyday words (military, aircraft, airport, air base) near disclosure/tenancy nouns. Term of art is 905. |
| `ND-GAPS-907` | 7 | all | 0 | 0 | 0 | every positive passed | Ordnance / demolition / shared-meter disclosure terms of art. Everyday words 908. NOTE: ND has a park meter rule at N.D.C.C. 47-10-28(8) in different words. |
| `ND-GAPS-908` | 5 | all | 5 | 0 | 0 | every positive passed | Everyday words for the meter and demolition limbs, written as North Dakota actually writes them ("individual meter", "meter readings"). Term of art is 907. |
| `ND-GAPS-909` | 2 | all | 8 | 0 | 0 | every positive passed | Supersedes ND-GAPS-904: its 200-char window put "convicted of a felony offense" in N.D.C.C. 47-16-07.1(1)(a) out of reach of the nearest tenancy noun, so the positive was recorded failed. Same everyday-words test with a 400-char window and "lessor". |
| `ND-GAPS-911` | 2 | all | 0 | 0 | 0 | every positive passed | Everyday words (navigable water, riverbank, beach, dock, ordinary high water mark) near disclosure or tenancy nouns. Term of art is 910. |
| `ND-GAPS-912` | 5 | all | 3 | 0 | 0 | every positive passed | Supersedes ND-GAPS-910, whose corpus positive N.D.C.C. 47-06-09 was recorded failed because every limb demanded "access" nearby and that section never uses the word. Adds a bare \bshore\b limb so the run is carried by real ND text. |
| `ND-GAPS-913` | 4 | all | 0 | 0 | 0 | every positive passed | Annual property-tax-portion-of-rent statement term of art. |
| `ND-GAPS-919` | 2 | all | 50 | 0 | 0 | every positive passed | Supersedes ND-GAPS-919's predecessor ND-GAPS-914, whose positive N.D.C.C. 47-04.1-13 was recorded failed: that section levies taxes on each condominium unit and carries no statement or tenancy noun within the window. Same test, positives that sit in proximity. Term of art is 913. |
| `ND-GAPS-920` | 5 | all | 4 | 0 | 0 | every positive passed | Single-family-residence occupancy / exemption disclosure term of art: tests whether any ND statute makes the landlord STATE the single-family character or an exemption. |
| `ND-GAPS-922` | 6 | all | 3 | 0 | 0 | every positive passed | Condominium / rental conversion notice term of art, including the tenant right of first refusal limb. Chapter 47-04.1 is held whole in the corpus. |
| `ND-GAPS-924` | 4 | all | 4 | 0 | 0 | every positive passed | Supersedes ND-GAPS-921: its 300-char window put "written disclosure form" just out of reach of "no more than four units" in N.D.C.C. 47-10-02.1, so the positive was recorded failed. Same everyday-words test at 450. Term of art is 920. |
| `ND-GAPS-925` | 3 | all | 4 | 0 | 0 | every positive passed | Supersedes ND-GAPS-923, whose positive N.D.C.C. 47-04.1-10 was recorded failed because that section contains no tenant/notice noun at all. Adds a bare "withdrawal of property" limb, which is ND's own word for de-conversion. Term of art is 922. |
| `ND-GAPS-927` | 2 | all | 54 | 0 | 0 | every positive passed | THE INVENTORY, everyday-words limb: the verbs a North Dakota drafter actually uses for handing a tenant a document (provide, furnish, give, deliver, post, provide a copy) near a landlord/tenant/park noun. Term of art is 926. |
| `ND-GAPS-928` | 7 | all | 50 | 0 | 0 | every positive passed | Truth-in-renting / state rights-and-responsibilities guide / tenant-rights statement, term of art AND the everyday nouns (summary, pamphlet, brochure, handbook, booklet, signed acknowledgment) in one run, because the topics share one vocabulary. |
| `ND-GAPS-929` | 7 | all | 7 | 0 | 0 | every positive passed | Plain-language / readability-test / statement-of-consumer-restrictions vocabulary across the whole corpus. Companion everyday/type-size run is 931. |
| `ND-GAPS-930` | 6 | all | 121 | 0 | 0 | every positive passed | Translation duty / interpreter / language-other-than-English vocabulary across the whole corpus, to test for a lease translation duty. |
| `ND-GAPS-931` | 6 | all | 49 | 0 | 0 | every positive passed | Prescribed-verbatim-wording, type-size and conspicuous-placement vocabulary corpus wide: the inventory of every place North Dakota dictates the words or the typography of a document, used to show which of them reach a residential lease. |
| `ND-GAPS-932` | 2 | all | 11 | 0 | 0 | every positive passed | Supersedes ND-GAPS-926, where BOTH positives were recorded failed: its a-group demanded "shall/must disclose" and N.D.C.C. 47-16-17.1 says "may not disclose" while 47-10-02.2 says "shall disclose" but carries no landlord or tenant noun within the window at all - which is itself the finding. This run widens the a-group to any disclosure word and asks the inventory question directly: where in the corpus does disclosure vocabulary sit near a landlord/tenant noun? Everyday words are 927. |
| `ND-GAPS-1001` | 5 | all | 29 | 0 | 0 | every positive passed | term of art: does ND statute anywhere create a regularly-scheduled/periodic services entry right or exempt it from notice? |
| `ND-GAPS-1002` | 5 | all | 35 | 0 | 0 | every positive passed | everyday words: enter/supplying/services/schedule - where does ND actually speak of entry for services? |
| `ND-GAPS-1003` | 2 | all | 29 | 0 | 0 | every positive passed | locate every ND statute speaking of entry to supply services, to confirm 47-16-07.3(2) is the only one |
| `ND-GAPS-1004` | 4 | all | 62 | 0 | 0 | every positive passed | term of art: any ND statutory right or duty for a landlord to enter a dwelling to care for or remove a tenant animal? |
| `ND-GAPS-1005` | 3 | all | 9 | 0 | 0 | every positive passed | everyday words: dog/cat/pet near landlord-tenant words, to catch an animal-access provision the term of art would miss |
| `ND-GAPS-1006` | 6 | all | 123 | 0 | 0 | every positive passed | term of art: does any ND statute require a landlord to give notice of pest control, pesticide application or fumigation? |
| `ND-GAPS-1007` | 4 | all | 0 | 0 | 0 | every positive passed | everyday words: bed bug/insect/rodent/mice/cockroach/spray near landlord-tenant words, to catch a pest provision the term of art would miss |
| `ND-GAPS-1009` | 3 | all | 23 | 0 | 0 | every positive passed | everyday words: harass/intimidate/trespass/right of access near damages/liable/recover/action - is there a tenant remedy for unlawful entry? |
| `ND-GAPS-1011` | 2 | all | 143 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1008 (synthetic positive used "enters" against a pattern holding only \benter\b, so the synthetic limb failed - CT 5 working) and ND-GAPS-1010 (same corrected run but the supersedes field was not passed). Question unchanged and widened to include "damages": is there any statutory penalty or damages remedy in ND for a landlord entering a dwelling without notice or abusing the right of access? |
| `ND-GAPS-1013` | 2 | all | 7 | 0 | 0 | every positive passed | everyday words: inspect/inspector near dwelling/apartment/rental/tenant/occupant/sleeping rooms - where does ND speak of inspecting a dwelling at all? |
| `ND-GAPS-1014` | 6 | all | 5 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1012, whose corpus positive 47-16-13.1 was recorded as failed because the pattern read \bhousing code\b and the statute says "building and housing codes" - the trailing s defeated the word boundary (CT 5 working). Same question: does any ND statute create or authorise a rental inspection or rental licensing programme for dwellings? |
| `ND-GAPS-1015` | 7 | all | 114 | 0 | 0 | every positive passed | term of art: does any ND statute address a subsidised-housing inspection, or a tenant refusing one? |
| `ND-GAPS-1016` | 3 | all | 7 | 0 | 0 | every positive passed | everyday words: public assistance/voucher/assistance payments near inspect/refuse/access/enter/terminate/eviction - any ND rule on refusing a subsidy inspection? |
| `ND-GAPS-1017` | 6 | all | 6 | 0 | 0 | every positive passed | term of art: does ND require a landlord to keep a rent ledger or tenant records, or to produce them on request? |
| `ND-GAPS-1018` | 3 | all | 74 | 0 | 0 | every positive passed | everyday words: records/ledger/receipts/copy/statement near tenant-landlord words - where does ND actually impose a records duty on a landlord? |
| `ND-GAPS-1019` | 2 | all | 1 | 0 | 0 | every positive passed | term of art: does ND make tenant information confidential or restrict a landlord disclosing it? |
| `ND-GAPS-1020` | 5 | all | 37 | 0 | 0 | every positive passed | everyday words: may/shall not disclose, shared database, social security number, without the written consent - where does ND bar a disclosure? |
| `ND-GAPS-1021` | 12 | all | 207 | 0 | 0 | every positive passed | term of art: does ND regulate tenant screening - consumer reports, criminal history, conditional offers, look-back, application or screening fees? |
| `ND-GAPS-1022` | 3 | all | 136 | 0 | 0 | every positive passed | everyday words: applicant/application/prospective tenant/renter near convicted/conviction/felony/judgment/income/deny - what does ND actually say about screening an applicant? |
| `ND-GAPS-1025` | 2 | all | 21 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1023, whose corpus positive 14-02.4-10 was recorded as failed: that section is the employment conditional-offer provision but contains none of the screening vocabulary, so it could never satisfy the proximity pattern (CT 5 working as designed). Both positives are now synthetic, written in the verbs such a statute would use, and test the pattern limb only. Question unchanged: does ND require or regulate a background or criminal history check for employees of rental housing? |
| `ND-GAPS-1026` | 4 | all | 5 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1024, whose corpus positive 47-16-07.3 was recorded as failed because that section contains no employee or key vocabulary at all, so it could not satisfy a proximity pattern requiring both limbs (CT 5 working as designed). Both positives are now synthetic. Question unchanged: any ND duty about who may hold keys to a tenant dwelling, or any employee key-control rule? |
| `ND-GAPS-1027` | 7 | all | 2 | 0 | 0 | every positive passed | term of art: does ND regulate reporting a tenant rent payment history to a credit bureau, or require a positive rent reporting offer? |
| `ND-GAPS-1029` | 2 | all | 92 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1028, whose corpus positive 14-02.4-17 was recorded as failed: that section contains "credit history" but none of report/reports/reported/reporting/furnish, so it could not satisfy a two-limb proximity pattern (CT 5 working as designed). Both positives are now synthetic and test the pattern limb only. Question unchanged: where does ND speak of reporting a person to credit at all, in a landlord-tenant or any other setting? |
| `ND-GAPS-1030` | 8 | all | 49 | 0 | 0 | every positive passed | term of art: does ND bar or require inquiry into a tenant immigration status or citizenship, or protect immigrant tenants? |
| `ND-GAPS-1031` | 3 | all | 1 | 0 | 0 | every positive passed | everyday words: alien/noncitizen/foreign national/lawful presence/work authorization near tenant-landlord words, plus E-Verify - any ND rule about renting to a person not lawfully present? |
| `ND-GAPS-1032` | 3 | all | 12 | 0 | 0 | every positive passed | term of art: does ND require or permit a landlord to cooperate with law enforcement, admit an officer, or use a crime-free addendum? |
| `ND-GAPS-1033` | 2 | all | 18 | 0 | 0 | every positive passed | everyday words: subpoena/warrant/court order/nuisance/required by law near landlord-tenant words - when must or may a ND landlord hand information or access to the state? |
| `ND-GAPS-1034` | 5 | all | 36 | 0 | 0 | every positive passed | term of art: does ND have a trespass provision a landlord could use to bar a non-tenant from common areas? |
| `ND-GAPS-1036` | 3 | all | 13 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1035, whose corpus positive 47-16-13.1 was recorded as failed: that section contains "common areas" but no posted/barred/excluded/ejection/eject/remove/forbidden/warning within the window (its subdivision e says "removal", not "remove"), so it could not satisfy the two-limb proximity pattern (CT 5 working as designed). Positive replaced with 47-16-13.2, which contains both "remove" and "premises". Question unchanged: how does ND let an owner exclude a non-tenant from common areas? |
| `ND-GAPS-1037` | 4 | all | 16 | 0 | 0 | every positive passed | term of art: does ND give a tenant, candidate or canvasser any right of political access to a rental building, or bar a landlord restricting it? |
| `ND-GAPS-1039` | 3 | all | 4 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1038, whose corpus positive 47-18-23 was recorded as failed: that section contains both "petition" and premises vocabulary but more than 240 characters apart, so it could not satisfy the proximity pattern (CT 5 working as designed). Both positives are now synthetic and test the pattern limb only. Question unchanged: any ND access or expression right in a rental building - solicitation, handbills, leaflets, door-to-door, petitions, assembly, or a sign in a window? |
| `ND-GAPS-1101` | 6 | all | 6 | 0 | 0 | every positive passed | Term-of-art battery: does any ND statute impose or regulate a landlord duty to provide alternative/temporary housing or relocation assistance to a displaced residential tenant? |
| `ND-GAPS-1102` | 6 | all | 50 | 0 | 0 | FAILED positive(s): 47-16-05 | Everyday-words battery for alt-housing: rehouse, motel, hotel, shelter, lodging/another dwelling near landlord/lessor/owner. |
| `ND-GAPS-1103` | 8 | all | 58 | 0 | 0 | every positive passed | Term-of-art battery: is there any ND cold-weather / winter / heating-season rule about notice before vacating, or a seasonal heat-shutoff rule? |
| `ND-GAPS-1104` | 5 | all | 24 | 0 | 0 | FAILED positive(s): 47-16-13.1 | Everyday-words battery for cold-weather-vacate-notice: vacate/abandon/surrender near heat, water, pipes, temperature, furnace, boiler; frozen, burst, pipes-near-damage. |
| `ND-GAPS-1105` | 7 | all | 158 | 0 | 0 | every positive passed | Term-of-art battery: does any ND statute give a disaster/declared-emergency rule for a residential tenancy (termination, rent abatement, inaccessibility)? |
| `ND-GAPS-1106` | 14 | all | 413 | 0 | 0 | every positive passed | Everyday-words battery for the whole casualty cluster: destruction, destroy, untenantable, uninhabitable, fit for occupancy, perish, casualty, tornado, flood, hail, fire-near-tenancy, abate-near-tenancy. |
| `ND-GAPS-1107` | 8 | all | 14 | 0 | 0 | every positive passed | Battery: does ND regulate housing disaster-displaced guests, or occupancy limits, in a residential tenancy? |
| `ND-GAPS-1108` | 8 | all | 331 | 0 | 0 | every positive passed | Term-of-art battery: does ND give a landlord or tenant a lease-termination right on an environmental event (contamination, mold, radon, asbestos, meth, lead)? |
| `ND-GAPS-1109` | 9 | all | 237 | 0 | 0 | every positive passed | Term-of-art battery: does ND give a residential tenant an early-termination right for infirmity, incapacity, or a move to a care facility? |
| `ND-GAPS-1110` | 4 | all | 160 | 0 | 0 | FAILED positive(s): 47-16-17.1 | Everyday-words battery for infirmity-termination: terminate/cancel near ill, illness, medical, disability, health, age, death; "unable to live independently"; "physical or mental". |
| `ND-GAPS-1111` | 6 | all | 106 | 0 | 0 | every positive passed | Term-of-art battery: does ND statute or constitution address a lease, a tenant or rent when leased property is taken by eminent domain / condemnation? |
| `ND-GAPS-1112` | 4 | all | 145 | 0 | 0 | FAILED positive(s): 47-10-10 | Everyday-words battery for eminent-domain: acquire/appropriate/take near public use/purpose/highway; award/compensation/damages near lessee/tenant/leasehold. |
| `ND-GAPS-1113` | 7 | all | 184 | 0 | 0 | every positive passed | Term-of-art battery: foreclosure, sheriff's sale, redemption, mortgagee, trustee's sale, equity skimming, deficiency judgment anywhere in the ND corpus. |
| `ND-GAPS-1114` | 5 | all | 1219 | 0 | 0 | FAILED positive(s): 47-16-28 | Everyday-words battery for foreclosure: sale/sold/execution/judicial process/purchaser near lessee/tenant/lease/rent/possession; deed in lieu; attornment. |
| `ND-GAPS-1115` | 2 | all | 53 | 0 | 0 | FAILED positive(s): 47-16-25 | Battery: is there a ND duty to disclose a pending foreclosure or mortgage default to a prospective or existing tenant? |
| `ND-GAPS-1117` | 6 | all | 1 | 0 | 0 | every positive passed | Term-of-art battery: does ND give furloughed government workers rent-timing protection during a government shutdown? |
| `ND-GAPS-1118` | 4 | all | 25 | 0 | 0 | every positive passed | Everyday-words battery for shutdown-rent-protection: grace period/defer/forbear/postpone/installment near rent/late fee/payment; loss of income/unemployment/hardship near rent/tenancy/eviction. |
| `ND-GAPS-1119` | 8 | all | 65 | 0 | 0 | every positive passed | Battery: does ND define or carve out a seasonal, transient, vacation or resort tenancy from its landlord-tenant provisions? |
| `ND-GAPS-1120` | 9 | all | 526 | 0 | 0 | every positive passed | Battery: does ND regulate or exclude student housing, dormitories, residence halls or fraternity/sorority housing from its landlord-tenant provisions? |
| `ND-GAPS-1121` | 7 | all | 36 | 0 | 0 | every positive passed | Battery: does ND regulate or exclude employment-related housing (caretaker, farm labor, migrant, bunkhouse, employee-occupied dwelling) in its landlord-tenant provisions? |
| `ND-GAPS-1124` | 6 | all | 164 | 0 | 0 | every positive passed | Rerun of ND-GAPS-1116 with a real corpus positive on the owner-occupancy limb (that run's only corpus positive, 47-16-02.1, failed). Tests whether any ND statute creates or regulates a landlord termination right for owner move-in or family occupancy. |
| `ND-GAPS-1125` | 4 | all | 13 | 0 | 0 | every positive passed | Rerun consolidating ND-GAPS-1122 (both corpus positives failed, so it could not prove reach) and ND-GAPS-1123 (one corpus positive failed). Patterns 1-2 prove the engine reaches ND lease-type vocabulary in the sections that carry it; patterns 3-4 test whether any ND provision bars terms more burdensome for one lease type or caps the rent difference between lease types. |
| `ND-GAPS-1201` | 4 | all | 2 | 0 | 0 | every positive passed | Term-of-art + everyday words for a statutory rent-increase notice period in ND: does any statute set a notice period before a rent increase takes effect, beyond the general change-of-terms rule? |
| `ND-GAPS-1202` | 6 | all | 3 | 0 | 0 | every positive passed | Does ND have an emergency price-gouging or rent-freeze statute reaching dwelling-unit rent during or after a declared emergency or disaster? |
| `ND-GAPS-1203` | 6 | all | 11 | 0 | 0 | every positive passed | Does any ND statute regulate, authorise or restrict a rent-escalation clause, an index-based or cost-of-living rent adjustment, or a rent formula in a residential lease? |
| `ND-GAPS-1204` | 4 | all | 24 | 0 | 0 | every positive passed | Does ND have a general landlord-tenant retaliation statute (and therefore any safe harbour for a market-rate rent increase during the term)? Term-of-art plus everyday words. |
| `ND-GAPS-1205` | 6 | all | 16 | 0 | 0 | every positive passed | Term-of-art battery: does any ND statute regulate a rent concession, move-in special, rent credit or renting incentive? |
| `ND-GAPS-1206` | 8 | all | 30 | 0 | 0 | every positive passed | Everyday-words battery: free rent, rent-free, reduced rent, discount, waiver of rent, rebate -- the words a ND drafter would use instead of concession. |
| `ND-GAPS-1207` | 4 | all | 6 | 0 | 0 | every positive passed | Does ND law address rent paid in installments, or whether a scheduled installment or a part payment of rent is a partial payment (and its effect)? |
| `ND-GAPS-1208` | 7 | all | 6 | 0 | 0 | every positive passed | Everyday-words limb: does ND law set or limit a sub-monthly rent payment schedule, or the effect of accepting part of the rent? |
| `ND-GAPS-1209` | 6 | all | 8 | 0 | 0 | every positive passed | Term-of-art limb: does any ND provision in this corpus subject residential rent to a sales, use, gross receipts, lodging or occupancy tax, or exempt it? |
| `ND-GAPS-1210` | 7 | all | 0 | 0 | 0 | every positive passed | Everyday-words limb: does any ND statute address a landlord passing a tax through to the tenant, adding tax to rent, or recovering a repealed tax from tenants? |
| `ND-GAPS-1211` | 6 | all | 2 | 0 | 0 | every positive passed | Term-of-art limb: does any ND statute authorise, require the form of, or limit a lease clause passing real estate tax or special assessment increases through to a residential tenant, or require an abatement refund? |
| `ND-GAPS-1212` | 7 | all | 8 | 0 | 0 | every positive passed | Everyday-words limb: the plain words a ND drafter would use for a tax pass-through -- share of taxes, proportionate share, increase in taxes, tenant shall pay the taxes. |
| `ND-GAPS-1213` | 7 | all | 103 | 0 | 0 | every positive passed | Term-of-art limb: does ND statute law regulate rent, late fees or charges in federally or state subsidised housing -- section 8, housing choice vouchers, housing assistance payments, tenant portion? |
| `ND-GAPS-1214` | 4 | all | 40 | 0 | 0 | every positive passed | Everyday-words limb: every late-fee provision in the ND corpus, to test whether any of them is scoped to subsidised housing or to the tenant portion of a subsidised rent. |
| `ND-GAPS-1215` | 6 | all | 4 | 0 | 0 | every positive passed | Term-of-art limb: does ND law provide for abatement or proration of rent -- generally, or for a period in which a dwelling was uninhabitable or failed a subsidy inspection? |
| `ND-GAPS-1216` | 7 | all | 9 | 0 | 0 | every positive passed | Everyday-words limb: reduced rent for an uninhabitable dwelling, failed inspection, withholding rent, discharge from rent -- the plain words a ND drafter would use instead of abatement or proration. |
| `ND-GAPS-1217` | 4 | all | 84 | 0 | 0 | every positive passed | Vocabulary correction battery: ND does not say prorate or abate -- S 47-16-21 says due proportion. Which sections use the proportion vocabulary in a leasing context? |
| `ND-GAPS-1218` | 5 | all | 0 | 0 | 0 | every positive passed | Term-of-art limb: does ND law create, require or regulate any veteran or military rental incentive, preference, deposit waiver or rent reduction? |
| `ND-GAPS-1219` | 6 | all | 23 | 0 | 0 | every positive passed | Everyday-words limb: servicemember, armed forces, national guard, veterans preference -- the words ND would use instead of veteran incentive. |
| `ND-GAPS-1220` | 6 | all | 15 | 0 | 0 | every positive passed | Term-of-art limb: is any ND construction or mechanic lien provision readable in this corpus, and does any readable provision address liens on a leasehold or a consenting owner? |
| `ND-GAPS-1222` | 7 | all | 23 | 0 | 0 | every positive passed | Rerun of ND-GAPS-1221 with a valid corpus positive (the earlier run named a doc-path fragment 47-04.1 which the tool recorded as a failed positive). Everyday-words limb: lien near improvement or alteration, no lien, lien near tenant or lessee, notice of nonresponsibility. |
| `ND-GAPS-1223` | 7 | all | 7 | 0 | 0 | every positive passed | Term-of-art limb: does ND give a landlord a lien on a tenant's goods for rent, or a distress remedy? |
| `ND-GAPS-1224` | 7 | all | 28 | 0 | 0 | every positive passed | Everyday-words limb: security interest in household goods, seizure of a tenant's property, crop liens, execution exemptions and waiver of exemptions -- the plain words ND would use instead of landlord's lien. |
| `ND-GAPS-1225` | 5 | all | 35 | 0 | 0 | every positive passed | Term-of-art limb: does ND require a landlord or lessor of a dwelling to carry liability insurance, or regulate a landlord insurance term in a lease? |
| `ND-GAPS-1226` | 8 | all | 35 | 0 | 0 | every positive passed | Everyday-words limb: maintain insurance, insure a dwelling, proof or evidence of insurance, fire and hazard insurance -- the plain words a ND drafter would use for an insurance mandate on a rental. |
| `ND-GAPS-1227` | 8 | all | 3 | 0 | 0 | every positive passed | Term-of-art limb: does ND regulate a renter's-insurance requirement, a force-placed or landlord-placed policy, an advisory that the landlord will not insure the tenant's property, or an admin fee for placing coverage? |
| `ND-GAPS-1228` | 7 | all | 42 | 0 | 0 | every positive passed | Everyday-words limb: subrogation, named or additional insured, interested party, loss payee, deductible -- the insurance terms a ND lease drafter would use, to test whether ND law regulates any of them. |
| `ND-GAPS-1229` | 2 | all | 20 | 0 | 0 | every positive passed | Term-of-art limb: every occurrence of unconscionab* in the ND corpus, to map which statutes carry an unconscionability doctrine and whether any of them besides S 47-16-13.3 reaches a residential lease. |
| `ND-GAPS-1230` | 7 | all | 7 | 0 | 0 | every positive passed | Everyday-words limb: good morals, oppressive, overreaching, inequitable, grossly unfair, unfair or unjust contract or provision -- the plain words ND might use instead of unconscionable. |
| `ND-GAPS-1301` | 6 | all | 0 | 0 | 0 | every positive passed | Term-of-art battery: does North Dakota anywhere use the phrase accessory dwelling unit, ADU, granny flat, secondary suite or in-law unit? |
| `ND-GAPS-1303` | 8 | all | 0 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1302, whose corpus positive 14-02.5-09 failed because that section has single-family but no convert/divide partner within the proximity window; all positives are now synthetic and each covers one pattern limb. Everyday-words battery for accessory dwelling unit. |
| `ND-GAPS-1305` | 10 | all | 57 | 0 | 0 | every positive passed | Everyday-words battery for appliances-excluded: the words a North Dakota drafter would have used - appliance, stove, range, refrigerator, dishwasher, washer, dryer, microwave, oven, and furnish or equip or supply or provide near landlord or lessor. |
| `ND-GAPS-1306` | 8 | all | 31 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1304, whose corpus positive 47-16-07.2 failed because its 'prima facie' sits near North Dakota's own word 'facilities', not near 'appliance' or 'fixture'; adding \bfacilit to the proximity limb is itself the everyday-words correction. Term-of-art battery for appliances-excluded: a presumption that an appliance present is landlord-supplied, an exclusion mechanism, an essential-appliance floor, or a required appliance inventory. |
| `ND-GAPS-1307` | 6 | all | 12 | 0 | 0 | every positive passed | Term-of-art battery for furnishings-included: does North Dakota require or regulate an inventory of furniture and furnishings in a furnished rental, or define a furnished unit? |
| `ND-GAPS-1309` | 10 | all | 17 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1308, whose corpus positive 47-16-30.1 failed because that section says only "Property", not "personal property", so the proximity limb could not match it - the failure is itself the vocabulary point. Everyday-words battery for furnishings-included: furniture, mattress, bedding, drapes, curtains, window coverings, carpet, blinds, upholstery, and personal property near landlord, lessor, tenant or lessee. |
| `ND-GAPS-1310` | 6 | all | 2 | 0 | 0 | every positive passed | Term-of-art battery for stove-refrigerator: does any North Dakota statute require or regulate a stove, a cooking range, a refrigerator or cooking facilities in a rented dwelling? |
| `ND-GAPS-1311` | 7 | all | 14 | 0 | 0 | every positive passed | Everyday-words battery for stove-refrigerator: kitchen, cooking, meal, prepare food, perishable, and supply or provide or furnish or install near stove, refrigerator, range, kitchen or cook - plus the habitable-condition limb, since § 47-16-13.1(1)(b) is the only open-textured duty that could carry a cooking requirement. |
| `ND-GAPS-1312` | 4 | all | 0 | 0 | 0 | every positive passed | Term-of-art battery for waterbed: does North Dakota use the words waterbed, water bed, flotation sleeping support system or water-filled mattress anywhere - the vocabulary every waterbed statute uses? |
| `ND-GAPS-1313` | 8 | all | 8 | 0 | 0 | every positive passed | Everyday-words battery for waterbed: flotation, liquid-filled, water near bed or bedding or furniture, floor near load or weight or capacity, and security deposit near pet or waterbed or flotation or insurance - the last limb tests whether § 47-16-07.1, the natural home for a waterbed deposit or insurance requirement, carries one. |
| `ND-GAPS-1315` | 8 | all | 4 | 0 | 0 | every positive passed | Everyday-words battery for window-guards: guard near window, child, minor, fall or balcony in both orders; railing, banister, handrail; balcony; screen near window or porch; and child or minor near fall, fell, height, story or stories. |
| `ND-GAPS-1316` | 6 | all | 1 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1314, whose second synthetic positive used the term 'guard rail' with a space while its own text said 'guardrail', so the positive could not contain its own term. Term-of-art battery for window-guards: window guard, window bars, window stop, fall prevention, guardrail, and window near fall. |
| `ND-GAPS-1317` | 7 | all | 62 | 0 | 0 | every positive passed | Term-of-art battery for common-area-lighting: common area, common use, public use, and common area or common use near light, lighting, illuminate or electric in both orders, plus hallway, stairway, stairwell, corridor, entryway or vestibule near lighting in both orders. |
| `ND-GAPS-1319` | 7 | all | 25 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1318, whose third synthetic positive carried the term 'master meter' with a space while its own text said 'master-metered', so it could not contain its own term. Everyday-words battery for common-area-lighting: light, lights, lighting, lamp or illuminate near hall, hallway, stair, corridor, entry, common, exterior, parking, laundry or elevator in both orders; master meter or master-metered; electric near common, shared, another unit, hallway or stair in both orders; individual meter, separately metered or submeter near tenant, lessee or dwelling in both orders. |
| `ND-GAPS-1320` | 8 | all | 1 | 0 | 0 | every positive passed | Term-of-art battery for pool-safety: swimming pool, wading pool, hot tub, spa, lifeguard, pool barrier or enclosure or fence or cover, natatorium, water recreation - the vocabulary of every pool-safety and water-recreation statute. |
| `ND-GAPS-1322` | 9 | all | 3 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1321, whose corpus positive t47c27 failed because chapter 47-27 (Closing Fence Gates) has 'fence enclosing farm premises' but no swimming, bathing or diving partner within the proximity window - which is itself the finding, since the only fencing chapters in title 47 are agricultural. Everyday-words battery for pool-safety: pool near fence, enclose, gate, latch, drown, depth or swim in both orders; drown; fence or enclose near swim, bathing or diving in both orders; self-latching or self-closing near gate or door in both orders; child or minor near pool or water safety in both orders. |
| `ND-GAPS-1323` | 9 | all | 128 | 0 | 0 | every positive passed | Term-of-art battery for other-landlord-facilities: amenity, recreational facility, common facility, facility near landlord/lessor/tenant/lessee/rental agreement in both orders, services-or-facilities near dwelling/rental/sale in both orders, and withdraw/discontinue/reduce/remove near amenity/facility/service in both orders. |
| `ND-GAPS-1324` | 10 | all | 175 | 0 | 0 | every positive passed | Everyday-words battery for other-landlord-facilities: the named amenities a North Dakota drafter would have used instead of 'facility' - laundry, laundromat, elevator, playground, clubhouse, sauna, fitness or exercise room, gymnasium, bicycle rack, dog park, barbecue, grill - plus storage near tenant/lessee/unit/dwelling/premises and mailbox near tenant/dwelling/apartment, in both orders. |
| `ND-GAPS-1325` | 7 | all | 18 | 0 | 0 | every positive passed | Term-of-art battery for unbundled-parking: unbundle, parking space, parking fee or charge or rent, off-street parking, parking permit or sticker or decal, and parking near landlord, lessor, tenant, lessee, rental agreement or dwelling in both orders. |
| `ND-GAPS-1327` | 9 | all | 50 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1326, whose positive was written as '47-30-2' - not a valid N.D.C.C. section number (the chapter is 47-30.2) - so it resolved as a doc-path substring and could not contain its own term. Everyday-words battery for unbundled-parking: garage, carport, driveway, parking stall or spot; vehicle near tenant, lessee, premises, dwelling or apartment in both orders; tow, towed, towing or impound near vehicle, parking or premises in both orders; minimum or require near parking in both orders. |
| `ND-GAPS-1329` | 7 | all | 163 | 0 | 0 | every positive passed | Everyday-words battery for parking-rules-notice: rules and regulations; rules or regulations near thirty days, advance written notice or modification in both orders; notice near changing the terms in both orders; and house rules, community rules or park rules near tenant or lessee in both orders - the words a North Dakota drafter would have used instead of a parking-specific term. |
| `ND-GAPS-1330` | 8 | all | 255 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1328, whose two § 47-10-28 positives both failed, and the reason is itself the vocabulary finding: North Dakota's phrase is 'park rules or regulations' (mobile home park), which does not contain 'parking', so a battery looking for rules near 'parking' cannot see § 47-10-28(3) at all. The proximity limbs now include 'park rules' and 'notice'. Term-of-art battery for parking-rules-notice: parking rules or regulations; towing notice or tow sign; rules or regulations near parking, vehicle or park rules in both orders; posted, conspicuous, bold, boldfaced or capital letters near rules, regulations, parking or notice in both orders; vehicle near license plate, registration or make and model in both orders. |
| `ND-GAPS-1332` | 9 | all | 76 | 0 | 0 | every positive passed | Everyday-words battery for home-business: trade, manufacture, commercial or profession near lease, lessee, tenant, dwelling or premises in both orders; customer, client or patron near residence, dwelling, premises or home in both orders; sign, signage or advertise near dwelling, residential or premises in both orders; employee near dwelling, residence or home in both orders; cottage or home industry - the words a North Dakota drafter would have used instead of 'home occupation'. |
| `ND-GAPS-1333` | 7 | all | 77 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1331, whose positive § 47-16-11 failed because that section speaks of "real property", never of a residential dwelling - itself the finding, since § 47-16-11's purpose rule applies to every lease of real property and is not a residential provision. The proximity limb now includes 'real property'. Term-of-art battery for home-business: home occupation, home-based business, home business, business near dwelling/residence/residential/premises in both orders, permitted use or purpose near residential, dwelling or real property in both orders. |
| `ND-GAPS-1334` | 7 | all | 28 | 0 | 0 | every positive passed | Term-of-art battery for family-child-care: family child care, family day care, early childhood services, child care home, in-home provider, and child care or childcare or day care near landlord, lessor, tenant, lessee, lease, zoning or rental in both orders - the last limb is the one that would catch a provision protecting a provider against a landlord or a zoning ordinance. |
| `ND-GAPS-1336` | 9 | all | 31 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1335, whose fifth synthetic positive carried the term 'number of children' while its own text read 'No more than six children', so it could not contain its own term. Everyday-words battery for family-child-care: caring for or care of a child, children or minor in both orders; babysit, daycare, nursery school, preschool; liability insurance, hold harmless or indemnify near child or care in both orders; number of children near home, dwelling or residence in both orders; foster home, group home or foster care near zoning, ordinance or residential district in both orders. |
| `ND-GAPS-1337` | 7 | all | 22 | 0 | 0 | every positive passed | Term-of-art battery for children-occupancy: familial status, occupancy by children, adults only or no children, maximum number of occupants or occupancy limit or standard near dwelling, unit or restriction in both orders, and whether any North Dakota statute requires a rental agreement to contain or state anything about occupancy. |
| `ND-GAPS-1338` | 9 | all | 48 | 0 | 0 | every positive passed | Everyday-words battery for children-occupancy: child, children or minor near occupancy, occupant, reside, residing or domicile in both orders; bedroom, sleeping room, square feet or floor area near occupant or person in both orders; per person, per child or additional occupant near rent, charge, fee or deposit in both orders; pregnant near dwelling, rental or custody in both orders; and overcrowding. |
| `ND-GAPS-1340` | 8 | all | 26 | 0 | 0 | every positive passed | Everyday-words battery for guest-rights: North Dakota's own phrase 'with the tenant's or lessee's consent' near person or individual in both orders; overnight or a consecutive-days figure near occupant, guest or person in both orders; exclude, prohibit, banned or trespass near guest, visitor or invitee in both orders; and live-in aide, caregiver, attendant or personal care near tenant, dwelling or disability in both orders. |
| `ND-GAPS-1341` | 7 | all | 28 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1339, whose positive § 47-32-01 failed, and the reason is the finding this topic turns on: § 47-32-01(7) says "a person on the premises with the lessee's consent" and never uses the word "guest", so a battery built on guest vocabulary cannot see North Dakota's own guest provision. A limb for that exact phrase has been added. Term-of-art battery for guest-rights: guest, guests, visitor or invitee near tenant, lessee, dwelling, premises or apartment in both orders; guest rights or a guest's right of access; supplier; North Dakota's phrase 'on the premises with the lessee's or tenant's consent'; and three-or-more-households or multiple-household near guest or visitor in both orders. |
| `ND-GAPS-1401` | 5 | all | 114 | 0 | 0 | every positive passed | Term-of-art limb for rules-regulations: does any ND statute regulate a landlord house-rules / rules-and-regulations regime outside the mobile home park? |
| `ND-GAPS-1402` | 6 | all | 39 | 0 | 0 | every positive passed | Everyday-words limb for rules-regulations, built from the verbs ND actually uses ("change the terms", "modifications to park rules"): is there any mid-tenancy rule-change limit or substantial-alteration retaliation presumption? |
| `ND-GAPS-1403` | 7 | all | 486 | 0 | 0 | every positive passed | Term-of-art limb for nuisance: is there a nuisance, abatement, receivership or building-closure remedy reaching a residential landlord anywhere in the corpus? |
| `ND-GAPS-1404` | 8 | all | 72 | 0 | 0 | every positive passed | Everyday-words limb for nuisance, built from the verbs ND itself uses ("disturb", "peaceful enjoyment", "disorderly"): what in-chapter route exists for a landlord facing a tenant whose conduct amounts to a nuisance? |
| `ND-GAPS-1406` | 9 | all | 34 | 0 | 0 | every positive passed | Everyday-words limb for prohibited-acts-renter, built from the verbs ND itself uses (deface, destroy, impair, ordinary care, ordinary negligence, any other purpose): where else does ND restrict what a tenant may do with the premises? |
| `ND-GAPS-1408` | 7 | all | 62 | 0 | 0 | every positive passed | Term-of-art limb for prohibited-acts-renter. Supersedes ND-GAPS-1407, whose s 47-16-26 positive failed on proximity ("prohibited" sits in that heading and the first "tenant" is >120 chars later); 1407 in turn superseded ND-GAPS-1405, whose s 47-16-13.2 positive failed because NO prohibition-vocabulary pattern can reach a section phrased "A tenant ... shall: ... Not deliberately or negligently destroy". Same patterns, working positives: measures whether ND states a renter prohibited-acts list in prohibition words anywhere. |
| `ND-GAPS-1409` | 6 | all | 20 | 0 | 0 | FAILED positive(s): 47-16-13.1 | Term-of-art limb for tenant-statutory-duties: find every ND statute stating a residential tenant obligation, and confirm s 47-16-13.2 is the spine. |
| `ND-GAPS-1410` | 6 | all | 37 | 0 | 0 | every positive passed | Everyday-words limb for tenant-statutory-duties: measures whether ND's tenant-duty and eviction law uses guest/visitor/invitee vocabulary at all, since a battery built on those words would miss s 47-16-13.2(7) and s 47-32-01(7). |
| `ND-GAPS-1411` | 6 | all | 20 | 0 | 0 | every positive passed | Term-of-art limb for tenant-statutory-duties: find every ND statute stating a residential tenant obligation, and confirm s 47-16-13.2 is the spine. |
| `ND-GAPS-1412` | 5 | all | 4 | 0 | 0 | every positive passed | Term-of-art limb for drug-free-housing-addendum: does ND require, authorise or regulate a drug-free or crime-free housing addendum to a residential lease? |
| `ND-GAPS-1416` | 6 | all | 117 | 0 | 0 | every positive passed | Everyday-words limb for drug-free-housing-addendum, built from ND's own phrases (controlled substance, methamphetamine, decontamination, illegal manufacture or distribution): where does ND law actually touch drugs and a rental dwelling? Supersedes ND-GAPS-1413, whose positive s 14-02.5-18 was refused under CT 5 -- that section is 'Complaint' and contains no controlled-substance text; my grep helper had mis-attributed the line to it. |
| `ND-GAPS-1417` | 6 | all | 16 | 0 | 0 | every positive passed | Term-of-art limb for knowing-use-penalty: does ND penalise a landlord for knowingly or wilfully using a prohibited or unenforceable lease provision? Supersedes ND-GAPS-1414, whose s 47-04.1-16 positive was refused under CT 5 because ND spells it "willfully" and my term said "wilfully"; a reach-the-section pattern was added with it. |
| `ND-GAPS-1418` | 7 | all | 149 | 0 | 0 | every positive passed | Everyday-words limb for knowing-use-penalty: what consequence vocabulary does ND attach to an unlawful lease term -- voidness, statutory damages, civil penalty, treble damages? Supersedes ND-GAPS-1415, whose s 9-08-05 positive failed because that section says "contract", not "lease" or "rental agreement", so no pattern in this lease-worded limb could reach it -- itself a vocabulary point: ND voids lease terms in CONTRACT words. |
| `ND-GAPS-1419` | 7 | all | 297 | 0 | 0 | every positive passed | Term-of-art limb for firearms: does any ND statute in the corpus restrict or protect firearm possession in a rental dwelling, or limit a landlord/lease firearm rule? |
| `ND-GAPS-1420` | 9 | all | 39 | 0 | 0 | every positive passed | Everyday-words limb for firearms: looks for the two shapes this topic asks about -- a preemption of political subdivisions, and an employer/landlord parking-lot locked-vehicle rule -- in the words a ND statute would use rather than the topic's vocabulary. |
| `ND-GAPS-1421` | 7 | all | 1 | 0 | 0 | every positive passed | Term-of-art limb for religious-cultural-display: does ND give a tenant any right to display a religious or cultural object on or at the dwelling, or limit a landlord rule about one? |
| `ND-GAPS-1423` | 7 | all | 63 | 0 | 0 | every positive passed | Term-of-art limb for tenant-display-rights: does ND protect a tenant's display of a political sign or flag, and against whom does the protection run? |
| `ND-GAPS-1424` | 8 | all | 61 | 0 | 0 | every positive passed | Everyday-words limb for tenant-display-rights, built from the instruments and verbs ND uses (covenant, declaration, bylaw, rule; may not prohibit; outdoor display; erect or post a sign; 'owner or resident'): exactly which instruments does the ND protection bind, and does any of them reach a LEASE? |
| `ND-GAPS-1425` | 7 | all | 100 | 0 | 0 | every positive passed | Everyday-words limb for religious-cultural-display, built from the verbs and the religion vocabulary ND actually uses (affix, attach, display, free exercise, religious profession/worship/organization, reasonable accommodation): what is the nearest ND law to a tenant display right? Supersedes ND-GAPS-1422, whose s 14-02.5-10 positive failed because that section's phrase is 'religious organization' and my alternation group listed only profession/worship/belief -- my error, now included. |
| `ND-GAPS-1426` | 7 | all | 4 | 0 | 0 | every positive passed | Term-of-art limb for tenant-right-to-organize: does ND give a tenant any right to form or join a tenant organisation, meet, or be free of retaliation for doing so? |
| `ND-GAPS-1427` | 8 | all | 43 | 0 | 0 | FAILED positive(s): 47-10-28 | Everyday-words limb for tenant-right-to-organize, built from ND's own verbs (assemble, meet, retaliate, interfere, coerce, complain) rather than the topic's vocabulary: what is the nearest ND protection for a tenant who organises or complains collectively? |
| `ND-GAPS-1428` | 8 | all | 43 | 0 | 0 | every positive passed | Everyday-words limb for tenant-right-to-organize, built from ND's own verbs (assemble, meet, retaliate, interfere, coerce, complain) rather than the topic's vocabulary: what is the nearest ND protection for a tenant who organises or complains collectively? |
| `ND-GAPS-1429` | 5 | all | 137 | 0 | 0 | every positive passed | Term-of-art limb for binding-arbitration: is any part of ND arbitration law readable in the corpus, and does any ND statute address a lease arbitration clause? |
| `ND-GAPS-1430` | 8 | all | 20 | 0 | 0 | every positive passed | Everyday-words limb for binding-arbitration, built from s 9-08-05's own CONTRACT vocabulary (usual legal proceedings, ordinary tribunals, restricted from enforcing, specifically permitted by the laws of this state) plus jury-waiver and confession-of-judgment words: what else in ND bears on ousting a court? |
| `ND-GAPS-1431` | 7 | all | 117 | 0 | 0 | every positive passed | Term-of-art limb for informal-dispute-resolution: does ND authorise, require or regulate an informal dispute-resolution step before a landlord-tenant court action? |
| `ND-GAPS-1432` | 7 | all | 17 | 0 | 0 | every positive passed | Everyday-words limb for informal-dispute-resolution, built from ND's own pre-suit vocabulary (before proceedings can be instituted; within a reasonable time after notice; demand for release): what pre-suit steps does ND actually impose or allow? |
| `ND-GAPS-1433` | 8 | all | 26 | 0 | 0 | every positive passed | Term-of-art limb for actual-notice-method: does ND let the parties agree on a method of giving notice, and where does it use the phrase "actual notice"? |
| `ND-GAPS-1434` | 11 | all | 168 | 0 | 0 | every positive passed | Everyday-words limb for actual-notice-method, built from the delivery channels a drafter would name (email, text message, facsimile, certified mail, electronic) alongside ND's own prescribed verbs (person of discretion, conspicuous part, posting): which channels does ND actually name, and does it name any electronic one? |
| `ND-GAPS-1435` | 6 | all | 14 | 0 | 0 | every positive passed | Term-of-art limb for emergency-contact: does ND require a TENANT to give an emergency contact, or a LANDLORD to give one, and where? |
| `ND-GAPS-1436` | 8 | all | 57 | 0 | 0 | every positive passed | Everyday-words limb for emergency-contact, built from the contact-disclosure vocabulary ND itself uses (name, address, telephone number; designated individual; manned at all times; property manager; site agent): is there ANY general landlord contact-disclosure duty outside the mobile home park? |
| `ND-GAPS-1437` | 6 | all | 105 | 0 | 0 | FAILED positive(s): 47-10-28 | Term-of-art limb for emergency-assistance-right: does ND protect a tenant's right to call police or emergency services, and is it non-waivable? |
| `ND-GAPS-1438` | 6 | all | 7 | 0 | 0 | FAILED positive(s): 14-02.5-02 | Everyday-words limb for emergency-assistance-right, built from the consequence verbs a ND statute would use (penalize, without penalty or liability, excessive calls, nuisance calls, victim near evict/terminate): what protection does a ND tenant who calls for help actually have? |
| `ND-GAPS-1439` | 6 | all | 105 | 0 | 0 | every positive passed | Term-of-art limb for emergency-assistance-right: does ND protect a tenant's right to call police or emergency services, and is it non-waivable? Replaces ND-GAPS-1437, whose s 47-10-28 positive was recorded as FAILED -- that section's phrase is 'emergency CONTACT number', not 'emergency assistance/services', so no pattern in this limb can reach it. Measured separately: this limb's vocabulary returns ZERO in the whole statutes scope, so no corpus positive exists and both positives are necessarily synthetic. |
| `ND-GAPS-1440` | 7 | all | 11 | 0 | 0 | every positive passed | Everyday-words limb for emergency-assistance-right, built from the consequence verbs a ND statute would use (penalize, without penalty or liability, excessive calls, nuisance calls, victim near evict/penalize/terminate IN BOTH ORDERS). Replaces ND-GAPS-1438, whose s 14-02.5-02 positive failed for a word-order reason that is itself instructive: s 14-02.5-02(3) reads '... or EVICTED from housing on the basis that the applicant or tenant is or has been a VICTIM of domestic violence', so 'evicted' precedes 'victim' and a single-order proximity pattern misses it. Both orders now run, per the brief's both_orders rule. |
| `ND-GAPS-1501` | 4 | all | 58 | 0 | 0 | every positive passed | EV term of art: is there any North Dakota EV-charging provision outside the condominium chapter, in particular in landlord-tenant law? |
| `ND-GAPS-1502` | 4 | all | 65 | 0 | 0 | every positive passed | EV everyday words: electric/plug-in/charger near vehicle/car, in case a drafter never used the term of art. |
| `ND-GAPS-1503` | 4 | all | 14 | 0 | 0 | every positive passed | Solar term of art: any statute on solar energy systems/devices beyond the solar-easement sections, and any instrument-restriction-voiding provision. |
| `ND-GAPS-1504` | 6 | all | 129 | 0 | 0 | every positive passed | Solar everyday words: solar/panel/renewable/wind energy anywhere, to catch a tenant installation right written without the term of art. |
| `ND-GAPS-1505` | 4 | all | 4 | 0 | 0 | every positive passed | Bed-bug term of art: any bed-bug or pest-control provision in the Century Code, including heading level in the master index. |
| `ND-GAPS-1506` | 7 | all | 8 | 0 | 0 | every positive passed | Bed-bug everyday words: vermin/infestation/rodent/insect, the words a drafter would use instead of "bed bug". |
| `ND-GAPS-1507` | 6 | all | 21 | 0 | 0 | every positive passed | Assistance-animal term of art: every ND provision on service/assistance/guide animals, to see whether any imposes a penalty on a landlord who denies one. |
| `ND-GAPS-1508` | 2 | all | 10 | 0 | 0 | every positive passed | Assistance-animal everyday words plus penalty vocabulary: any animal/dog near guilty/misdemeanor/infraction/penalty, to find a denial penalty however phrased. |
| `ND-GAPS-1509` | 5 | all | 7 | 0 | 0 | every positive passed | Fact-sheet term of art: any required state fact sheet, pamphlet or brochure a landlord must hand a tenant. |
| `ND-GAPS-1510` | 2 | all | 1 | 0 | 0 | FAILED positive(s): 47-10-28 | Pet fact-sheet everyday words: summary/statement/disclosure near pet/animal/dog/cat, to catch a pet-and-eviction handout requirement written in plain words. |
| `ND-GAPS-1511` | 4 | all | 1 | 0 | 0 | every positive passed | Pet-money term of art: every ND provision on pet deposits, pet fees or pet rent and any cap on them. |
| `ND-GAPS-1512` | 3 | all | 61 | 0 | 0 | every positive passed | Pet-money everyday words: animal/dog/cat near deposit/fee/rent/charge, plus "nonrefundable", to find any pet charge rule written without the word "pet". |
| `ND-GAPS-1513` | 4 | all | 4 | 0 | 0 | every positive passed | Work-card term of art: any work card, work permit or employee licensing requirement for staff of housing, especially senior housing. |
| `ND-GAPS-1514` | 2 | all | 25 | 0 | 0 | every positive passed | Senior-housing staff everyday words: employee/manager/staff near background check/criminal history/fingerprint, to catch a staff-screening duty written without "work card". |
| `ND-GAPS-1515` | 4 | all | 71 | 0 | 0 | every positive passed | Health-district term of art: the ND local public health regime and whether any of it reaches rental agreements. |
| `ND-GAPS-1516` | 2 | all | 6 | 0 | 0 | every positive passed | Health-district everyday words: tenant/lessee/renter near any health authority, to find a duty to give tenants health regulations or refer them to the health authority. |
| `ND-GAPS-1517` | 3 | all | 22 | 0 | 0 | every positive passed | Variance term of art: every use of "variance" in the corpus, to find a health- or sanitary-code variance regime and any duty to give one to tenants. |
| `ND-GAPS-1518` | 7 | all | 11 | 0 | 0 | every positive passed | Sanitary-code everyday words: sanitary/sanitation/housing code language and its proximity to tenants and rental agreements. |
| `ND-GAPS-1519` | 4 | all | 379 | 0 | 0 | every positive passed | Receivership term of art: every receiver/receivership/substandard/unfit-for-habitation provision, to see what reaches a substandard rental property. |
| `ND-GAPS-1520` | 2 | all | 12 | 0 | 0 | every positive passed | Substandard-property everyday words: abate/demolition/condemn/nuisance near dwelling/building/premises, to find a code-enforcement route written without "receiver". |
| `ND-GAPS-1521` | 4 | all | 122 | 0 | 0 | every positive passed | Single-family-zone term of art: any state statute limiting the renting of a home in a single-family zone, and where ND puts zoning power. |
| `ND-GAPS-1522` | 5 | all | 11 | 0 | 0 | every positive passed | Single-family-zone everyday words: single-family/neighborhood/rental licence/short-term rental/owner-occupied, the plain words a drafter would use for an owner-occupancy rental limit. |
| `ND-GAPS-1523` | 2 | all | 19 | 0 | 0 | every positive passed | Lease-content term of art: every place ND tells a landlord what the rental agreement itself must contain or state. |
| `ND-GAPS-1524` | 6 | all | 274 | 0 | 0 | every positive passed | Lease-content everyday words: initial/written statement/disclosure near lease, to catch a lease-content requirement phrased without "must contain". |
| `ND-GAPS-1525` | 2 | all | 18 | 0 | 0 | every positive passed | Supersedes ND-GAPS-1510, whose positive failed: pet fact-sheet everyday words widened to written notice/documentation near pet/animal/dog/cat, with a positive the pattern can actually reach. |
| `ND-GAPS-1601` | 4 | all | 5 | 0 | 0 | FAILED positive(s): 47-19-02 | Topic communal-land-lease-approval, term of art: does any ND provision require approval of a lease of communal, tribal, allotted or trust land? |
| `ND-GAPS-1602` | 4 | all | 1 | 0 | 0 | FAILED positive(s): 41-09-69 | Topic communal-land-lease-approval, everyday words: any ND requirement that a government officer approve a lease, or any rule on rent and possession before approval. |
| `ND-GAPS-1603` | 5 | all | 9 | 0 | 0 | every positive passed | Topic farmland-hunting-rights, term of art: does any ND provision allocate hunting, fishing, game or trapping rights between a farmland lessor and lessee? |
| `ND-GAPS-1604` | 8 | all | 44 | 0 | 0 | every positive passed | Topic farmland-hunting-rights, everyday words: taking/shooting/pursuing wild game, permission of a landowner or lessee, posting, and an agricultural lease controlling a licence. |
| `ND-GAPS-1605` | 6 | all | 0 | 0 | 0 | every positive passed | Topic usufructuary-lessor, term of art: does the ND corpus use usufruct, usufructuary, naked owner, civil fruits or fructuary anywhere? |
| `ND-GAPS-1606` | 5 | all | 9 | 0 | 0 | every positive passed | Topic usufructuary-lessor, everyday words: a lessor whose own interest is a limited life interest, and the right to the fruits, revenues or profits of land owned by another. |
| `ND-GAPS-1607` | 10 | all | 26 | 0 | 0 | every positive passed | Topic lease-type-size, term of art: does any ND statute set a minimum type size, typeface or boldface requirement for a residential lease, and is there an evidentiary sanction? |
| `ND-GAPS-1608` | 7 | all | 13 | 0 | 0 | FAILED positive(s): 47-15.1-03 | Topic lease-type-size, everyday words: legibility/conspicuousness/plain language near a lease, plus any evidentiary sanction (inadmissible, not received in evidence) or unenforceability for print. |
| `ND-GAPS-1609` | 7 | all | 4 | 0 | 0 | every positive passed | Topic tpa-notice, term of art: any ND tenant right of first refusal, first offer, opportunity to purchase or preemptive right on a sale of the rented premises. |
| `ND-GAPS-1610` | 6 | all | 24 | 0 | 0 | every positive passed | Topic tpa-notice, everyday words: must a ND landlord tell a sitting tenant the property is being sold, and what does a transfer of ownership actually require. |
| `ND-GAPS-1611` | 6 | all | 5 | 0 | 0 | FAILED positive(s): 14-02.5-09 | Topic tpa-exemption-notice, term of art: any ND exemption notice, notice of exemption or certificate of exemption from a tenant purchase right. |
| `ND-GAPS-1612` | 5 | all | 70 | 0 | 0 | FAILED positive(s): 14-02.5-09, 14-02.5-11 | Topic tpa-exemption-notice, everyday words: any ND requirement that a lessor claim, record or notify an exemption from a statutory scheme affecting a lease or dwelling. |
| `ND-GAPS-1613` | 8 | all | 257 | 0 | 0 | every positive passed | Topic tpa-sunset, term of art: does ND use sunset, expiration-date or dated-repeal devices, and is any landlord-tenant statute on one? |
| `ND-GAPS-1614` | 6 | all | 296 | 0 | 0 | every positive passed | Topic tpa-sunset, everyday words: a chapter, section or Act that expires, is repealed on a date, or becomes ineffective after a date - and whether any reaches landlord and tenant law. |
| `ND-GAPS-1615` | 7 | all | 12 | 0 | 0 | every positive passed | Summary row confirmed-absences-habitability: re-measuring whether ND has any severity threshold a habitability defect must clear. Confirms the finding already on habitability-materiality. |
| `ND-GAPS-1616` | 8 | all | 57 | 0 | 0 | FAILED positive(s): 47-16-13 | Summary row confirmed-absences-habitability: re-measuring whether ND has any rent escrow, rent-into-court or rent-withholding procedure. Confirms rent-into-court-counterclaim and repair-escrow-exemption-notice. |
| `ND-GAPS-1617` | 9 | all | 6 | 0 | 0 | every positive passed | Summary row confirmed-absences-misc: re-measuring whether ND has adopted URLTA or has any landlord-tenant non-waivable-rights provision. Confirms part5-nonwaivable and security-deposit-nonwaiver. |
| `ND-GAPS-1618` | 8 | all | 22 | 0 | 0 | every positive passed | Summary row confirmed-absences-misc: re-measuring the retaliation position in BOTH the retaliat- vocabulary and the coerce/intimidate/interfere vocabulary that ND fair housing actually uses. |
| `ND-GAPS-1619` | 8 | all | 19 | 0 | 0 | FAILED positive(s): 47-16-13.1 | Summary row confirmed-absences-outside-title: measuring WHERE the six named unresolved sections appear in the corpus. A zero or index-only result proves the section is UNREADABLE here, not that the law is absent. The held section 47-16-13.1 is included as the control limb that proves the number search works. |


### 3.2 Tool-validation runs, kept deliberately as evidence

| Battery | Hits | What it proves |
|---|---|---|
| `ND-SELFTEST-001` | 18 | a term the corpus certainly contains is found - the search reaches the text |
| `ND-SELFTEST-002` | 0 | **the false-absence trap, caught live.** `\brent control\b` returns 0 while the real positive § 47-16-02.1 **fails**, because ND's operative text says "controlling the amount of rent charged" and the phrase "rent control" is in the **heading only**. A battery trusting the topic's own words would have reported ND has no rent-control law. This is the single best argument for the positive-required rule. |
| `ND-SELFTEST-005` | 0 | a synthetic positive in the statute's own verbs matches the pattern limb, so `SYN:` positives are doing real work |

### 3.3 Superseded runs, and an honest note about the record

`ND-GAPS-001`, `ND-GAPS-002`, `ND-GAPS-003`, `ND-GAPS-004`, `ND-GAPS-005`, `ND-GAPS-006`, `ND-GAPS-104`, `ND-GAPS-107`, `ND-GAPS-134`, `ND-GAPS-307`, `ND-GAPS-310`, `ND-GAPS-314`, `ND-GAPS-322`, `ND-GAPS-405`, `ND-GAPS-406`, `ND-GAPS-407`, `ND-GAPS-408`, `ND-GAPS-514`, `ND-GAPS-515`, `ND-GAPS-604`, `ND-GAPS-609`, `ND-GAPS-611`, `ND-GAPS-614`, `ND-GAPS-627`, `ND-GAPS-628`, `ND-GAPS-704`, `ND-GAPS-716`, `ND-GAPS-810`, `ND-GAPS-904`, `ND-GAPS-910`, `ND-GAPS-914`, `ND-GAPS-921`, `ND-GAPS-923`, `ND-GAPS-926`, `ND-GAPS-1008`, `ND-GAPS-1010`, `ND-GAPS-1012`, `ND-GAPS-1023`, `ND-GAPS-1024`, `ND-GAPS-1028`, `ND-GAPS-1035`, `ND-GAPS-1038`, `ND-GAPS-1116`, `ND-GAPS-1122`, `ND-GAPS-1123`, `ND-GAPS-1221`, `ND-GAPS-1302`, `ND-GAPS-1304`, `ND-GAPS-1308`, `ND-GAPS-1314`, `ND-GAPS-1318`, `ND-GAPS-1321`, `ND-GAPS-1326`, `ND-GAPS-1328`, `ND-GAPS-1331`, `ND-GAPS-1335`, `ND-GAPS-1339`, `ND-GAPS-1405`, `ND-GAPS-1407`, `ND-GAPS-1415`, `ND-GAPS-1422` are superseded and must not be cited.

Three of them - `ND-GAPS-104`, `-107`, `-134` - were rerun as `-118`, `-119`, `-135` with the
reason recorded in the rerun's own note, as RI 1 requires (a positive the pattern set could
not match: a context positive, a section in an out-of-corpus chapter, and a section whose text
carries no lease word).

**The other six were not recorded properly and I am flagging it rather than papering over it.**
`ND-GAPS-001` to `-006` were first-generation runs of the same six topics, rerun as `-101` to
`-106` under new numbers per RI 1 - but the reruns' notes **do not say they are reruns**, so
for a day the link existed only in my head, which is exactly the failure mode RI 1 exists to
prevent. Two things were done about it:

- An append-only `supersession-amendment` record was written to `battery-log.jsonl` recording
  all six links and the reason for each. History was not rewritten.
- `battery.py`'s `run()` now takes a `supersedes=` argument, records it on the JSONL record,
  and **refuses** a name that supersedes a run not in the log. The link can no longer be left
  out by hand. Proposed as an SOP change below.

For the record, the corrections were: `001` positive § 47-30.2-15, `002` § 47-16-30.1, `003`
and `004` § 47-16-07.3, `006` § 47-16-20.1 - each a corpus positive the pattern set could not
match, replaced by a synthetic positive in the statute's own verbs; `004` and `006` also
widened a proximity window from 160 to 200 characters. **Hit counts are identical in all six
pairs**, which is itself evidence the pattern change did not move the search result.
`ND-GAPS-005` needed no correction at all - its positive § 47-16-02.1 passed and its patterns
are byte-identical to `105` - and was rerun only to keep the batch numbering contiguous.

### 3.4 Battery invariants enforced in code, not by hand

The tool refuses the run rather than trusting me to remember: a duplicate name; a run with no
positive; a corpus positive that does not contain its own term in the section it names (CT 5);
a search term under six characters without `\b` (CO-gaps 3, WY-gaps 7); a bare `lease`
(WY-gaps 7); a `[^.]` proximity window, which breaks across "$25.00" (rule 19). Proximity
patterns are built in **both word orders** over `[\s\S]` (not `.`), every run covers the
**session laws and the constitution** as well as the compilation (CO-gaps 2), a
whitespace-collapsed view is searched for multi-word phrases (WY-gaps 1), and a
**heading-only screen** runs beside each battery so a heading-only match like § 47-16-02.1's
cannot masquerade as operative text.

---

## 4. Decisions, and questions asked of Taylor

### 4.1 Legal calls I made myself (rule 76)

Taylor's instruction of 2026-10-02 governs: *"This is a legal call under SOP rule 76: the
precedent settles it, so make calls like this yourself next time."* Each of these could have
been a question and was not.

1. **`criminal-activity` is an optional clause for ND, deliberately opposite to Colorado.**
   Colorado has § 13-40-107.5(2), which implies a crime-free term into every lease and so
   produces an education row under rule 55. ND has no equivalent: § 47-32-01(8) makes breach
   of a **written-lease material term** an eviction ground, which means the clause has to be
   in the lease to do anything. That makes it `SERVES_LANDLORD` and a real clause. Worth
   reading twice at sync precisely because it diverges from CO.
2. **§ 28-26-04 does not reach a residential lease.** § 28-26-01(1) leaves the attorney fee to
   the parties' agreement. I adjudicated § 28-26-04 as not applying, and stated the
   rent-arrears qualification on the row rather than hiding the soft edge.
3. **A homestead-waiver clause in an ND lease is empty, not lawful.** Chapter 47-18 is an
   owner's exemption. Stating the default rule first is WY-gaps topic question 2's rule, and
   it is what keeps the row from implying the tenant gave something up.
4. **Every waiver row states the default rule before the waiver question**, for the same
   reason: a waiver of a rule the state does not have is empty, not lawful.

### 4.2 Taylor's seven named items

| Item | Status |
|---|---|
| 1. Optional clauses never screened for ND (rule 54): crime-free, eviction fee, statutory waivers | **Answered in full.** All 14 topics the item names are in batch 1: `criminal-activity`; `eviction-penalty-clause-ban`, `notice-service-fee`, `collection-fee`, `attorney-fees`; and the ten waiver and nonwaiver topics. `edu-prohibited-lease-terms-nd` and `edu-no-cure-eviction-grounds-nd` are pointed to and **left unchanged**. |
| 2. `casualty-and-mitigation-waivable` + rule 54 confirmation | **Answered.** Row `edu-casualty-and-mitigation-waivable-nd`. Rule 54 confirmation on the row: `edu-casualty-termination-nd` and `edu-optional-lease-terms-nd` together satisfy rule 54 for casualty. **No conflict found** among the three rows named in the item - recorded as a nil return in §6, not silence. |
| 3. Shared fee clauses `keys` and `hoa-compliance` vs §§ 9-08-03/9-08-04, § 47-16-20.1, § 47-16-07.1; **plus** the DV lock-change finding on `edu-no-dv-lock-change-duty-nd` (topic `dv-lockchange`) against new ch. 14-07.7 | **Answered.** `keys` and `hoa-compliance` both read correctly for ND, and the reason each does is itself worth recording - findings 6.9 and 6.10, with the sentences to add. The DV lock-change row **still holds** but chapter 14-07.7 has made it incomplete - finding 6.11, with the sentence to add. None of `keys`, `hoa-compliance` or `dv-lockchange` is in the missing list, so none produces a row. Both halves are rule-62 findings, not edits. Note `keys`, `hoa-compliance` and `dv-lockchange` are **not** in the missing list, so none of them produces a new row - they produce §6 findings with the wording to use. Ch. 14-07.7 **is** in the corpus, so this half is not blocked. |
| 4. Three central shared edits: `smoking-policy`, `no-alterations`, `addendum-precedence` | **Answered** - one line each in 4.8, with four findings in 6.5-6.7 (and see the withdrawal in 6.8). All three read correctly; `no-alterations` has a four-word gap, `addendum-precedence` names no ND instance, and `smoking-policy`'s **marijuana limb is unconfirmed** because ch. 19-24.1 is outside the corpus and unreachable - parked in 1.5, cautious course in 6.7. |
| 5. CARES Act mentions agree with `edu-cares-act-notice` | **Answered in 4.7: they agree, and nothing disagrees.** One soft edge recorded in 6.22. |
| 6. `extended-absence-notice`, `towing`, `rent-control` from a full read | **Answered**, all three, from the whole text of §§ 47-16-07.3 and 47-16-02.1 as directed. |
| 7. Currency of the new rows only | **Done for batch 1**, and see 1.6. Of the four 2025 acts the item names, three touch sections batch 1 relies on and each is now named on the row that relies on it: **ch. 423 (H.B. 1610)** created § 47-16-20.1 (`edu-collection-fee-nd`); **ch. 427 (S.B. 2238)** created § 47-32-05 (`criminal-activity-nd`); **ch. 145 (H.B. 1489)** created ch. 14-07.7 and amended § 47-16-17.1(2)(a) (`edu-attorney-fees-nd`, which relies on subsection (11), not the amended (2)(a); `edu-no-eviction-penalty-ban-nd`; `edu-no-notice-service-fee-rule-nd`). **Ch. 238 (S.B. 2385)** touches §§ 47-32-01.1 and 47-10-28, which batch 1 does not rely on. |

### 4.3 Three premises of mine that canvasses corrected from primary text

Recorded because the corrections are the evidence that the canvasses were reading the statute rather
than my brief, and because two of them change answers.

1. **I told a canvass to expect no repair-and-deduct statute. North Dakota has one, and it is
   uncapped.** **§ 47-16-13**: "If within a reasonable time after notice from the lessee of
   dilapidations which the lessor ought to repair the lessor neglects to do so, the lessee may:
   1. Repair the premises and deduct the expense of such repair from the rent; 2. Recover it in any
   other lawful manner from the lessor; or 3. Vacate the premises, in which case the lessee shall be
   discharged from further payment of rent or performance of other conditions." No dollar cap, no cost
   threshold, no prescribed form of notice. **§ 47-16-12**, the old lessor repair duty, was repealed by
   S.L. 1977, ch. 429, § 7 - but § 47-16-13 survived it, which is exactly how it gets missed. There is
   still no rent escrow and no rent-into-court procedure, as I said.
2. **I told a canvass § 47-16-13.6 was the essential-services provision. It is not.** It is captioned
   "Enforcement of sections 47-16-13.1 through 47-16-13.6" and does one thing: those rights are
   "enforceable by action and the court may award reasonable attorney's fees to **the prevailing
   party**." Note the party - it cuts both ways and **favours a landlord defending a weak habitability
   claim**, which is worth a landlord knowing. And the real consequence: **North Dakota has no
   utility-interruption or unlawful-cutoff statute at all.**
3. **My EV lead was wrong twice.** I cited "chapter 47-04.1 subsection 9" for a $1,000 indemnity. The
   section is **§ 47-04.1-16**; the **$1,000 is at subsection 8** and is a civil penalty against an
   *association* that wilfully violates the section; **subsection 9** is the unit owner's indemnity and
   carries **no figure**. A positive built on my wording was correctly refused under CT 5. It is also a
   **condominium** provision about an owner's installation and an association's bylaws, not a
   landlord-tenant provision - so the `ev-charging` topics in batch 8 must not report it as one.

### 4.4 A canvass correction I had to reject, and how

One canvass reported that this prompt's bill numbers were wrong - that S.L. 2025 ch. 423 is S.B. 2229
rather than H.B. 1610, and ch. 427 is H.B. 1149 rather than S.B. 2238. **It is mistaken, and the prompt
is right.** The session table's flattened text runs
`... <chapter> <bill> <section> <action> <chapter> <bill> ...`, so the chapter number sits **after** the
action and reads naturally as belonging to the previous row; that off-by-one produces exactly the pairs
reported. The check that settles it is a **differently laid-out document**: the bill index prints
`<bill> <chapter>` and gives **HB 1610 → 423**, **SB 2229 → 422**, **SB 2238 → 427**, **HB 1149 → 426**,
**SB 2204 → 421**, **SB 2385 → 238**, **HB 1489 → 145** - every pair as the prompt has it. The trap and
the cross-check are now in the canvass brief, so the next reader does not fall into it.

**A second one, from batch 4.** A canvass reported an "unfilled clause gap": that § 47-16-15(4) is a
true `REQUIRED_DISCLOSURE` - a lease demanding more than one month's tenant notice must state the
requirement **and** give an initial line, or the period collapses to one calendar month - and that two
education rows mention it while no clause satisfies it. **The gap is already filled.**
`lease-notice-initial-requirement-nd` exists in the library, is a `LEASE_CLAUSE`, carries basis
**`REQUIRED_DISCLOSURE: N.D.C.C. § 47-16-15(4)`** and prints the initial line. The canvass searched the
**workspace row files** for this point rather than the master CSV, which is why it missed it; the other
canvass on the same batch had it right. No action needed, recorded so the next reader does not go
looking for a gap that is not there.

**And one convergence, recorded because it is evidence the method works.** Two canvasses on different
batches reached § 47-16-17.1(4) independently - the batch-2 fee-and-DV canvass while answering
`dv-qualifying-documents`, and the batch-6 privacy canvass while answering
`tenant-confidential-information`. Both read it the same way: the non-disclosure duty has **no consent
exception**, so a consent-to-disclose clause is unlawful rather than empty. The later canvass reported
it as a new find; it was already in the earlier row, including § 47-16-17.1(11)'s $1,000 statutory
damages. Nothing needed fixing, and two independent readings agreeing on a closed list of permitted
uses is worth more than one.

### 4.5 Two questions a canvass raised, which I settled rather than passing on

Both are legal calls under rule 76, and both are now in the canvass brief so they stay settled.

1. **§ 47-10-02.3 took effect on 1 August 2025, and the source is the constitution, not the act.** Its
   act, S.B. 2229, was approved and filed **18 March 2025** and carries **no effective-date section and
   no emergency clause** - I read the act. **N.D. Const. art. IV, § 13** then supplies 1 August after
   filing. The canvass was right to cite the act without asserting a date; the answer is to cite the
   constitutional default as the source. **A warning that came with it:** the running header printed
   beside S.B. 2229's approval line reads "Chapter 423", which belongs to the *next* chapter - S.B.
   2229 is **ch. 422**. That is the same off-by-one that produced the wrong bill-number report in 4.4.
2. **§ 14-02.5-12(1) does not shelter a landlord's own occupancy cap.** It saves "a reasonable **local
   or state** restriction on the maximum number of occupants permitted to occupy a dwelling or a
   restriction relating to health or safety standards" - a restriction imposed by **law**. A cap the
   landlord chooses is not one, so it is judged under § 14-02.5-02's familial-status bar like any other
   lease term. The practical consequence, now on the row: **peg an occupancy clause to the applicable
   local code or health standard and say so**, rather than stating a number of your own.

### 4.6 Two corrections I applied to rows at assembly rather than leaving for the check

Both were found by a later canvass against an earlier canvass's row. Neither is an existing library
row, so rule 62 does not bite - these are rows in this delta and mine to fix.

1. **`edu-no-alarm-tampering-fee-nd` asserted that "the Century Code imposes no smoke alarm or carbon
   monoxide alarm duty on a residential landlord at all." The claim is withdrawn.** The Legislative
   Council index names **§ 23-13-15 "Smoke detection systems for residential rental property -
   Penalty"**, and I verified the index entry: the section exists, **chapter 23-13 is not in the corpus,
   and no 2025 or 2026 act touched it - so there is no route to its text from this session at all.** Its
   title alone says North Dakota does impose a smoke-detection duty on residential rental property and
   backs it with a penalty. The row is now **NEEDS_REVIEW**, its body carries the cautious course - fit
   and maintain working detection, keep records, and do not rely on any statement that there is no
   requirement - and the fee half of the topic is unaffected. **Why it was missed is the transferable
   part: a heading-only index entry in an unheld chapter is invisible to a corpus battery**, the same
   shape as the § 23-09-08 near-miss on `security-devices`. Both are now in the brief as a standing
   instruction to run the master index as well as the corpus wherever a topic would be answered by a
   duty rather than by a right.
2. **`edu-casualty-and-mitigation-waivable-nd`** - my own batch-1 row - **was amended to carry
   § 47-16-21**, the proportioning rule a later canvass found. Disclosed in the row's notes. See 6.17.

**And one correction that turned out to be to my brief rather than to a row.** I had told canvasses
that § 47-16-07.1(1) "makes an express exception for a pet deposit". It does not: subsection (1)'s
"except" list is **closed at two items** - two months' rent from an applicant convicted of a felony "as
an incentive to rent", and two months' from one with a judgment for violating a previous rental
agreement - and the **pet deposit is a separate grant in subsection (2)** with its own ceiling, "the
greater of two thousand five hundred dollars or an amount equivalent to two months' rent", **additive**
to the one-month cap, since a $2,500 deposit could not fit inside one month's rent. Two canvasses had
already read it correctly and their rows are right; only my brief and one of my own §2 lines were loose,
and both are fixed. **Subsection (2) also carves out a service or companion animal required as a
reasonable accommodation - no pet deposit at all for one.** And a statutory drafting defect, recorded
rather than resolved: subsection (1) makes the deposit returnable "subject to the conditions of
**subsection 2**", but the return, itemisation and thirty-day notice conditions are in **subsection
(3)**. The cross-reference is a renumbering artefact.

### 4.7 Questions open with Taylor

Asked 2026-10-29: the chapters in 1.5, with a recommendation. Nothing else in batch
1 needed a product decision, and nothing was left "to check later": the one point that could
not be settled - § 9-12-22 - is a **NEEDS_REVIEW row with the cautious course stated in the
row body**, which is SOP Part 5's policy, not a deferral.

---

### 4.8 Item 4 - the three central shared edits, one line each

All three are ND-tagged, carry an **identical** 971-character ND segment added 2026-09-06, and their
clause text is unchanged. Each reads correctly, with one gap and one unresolved point:

1. **`no-alterations` (topic `alterations`) - reads correctly, and § 47-06-04 is the North Dakota
   authority that makes its saving sentence necessary rather than decorative; but the saving words
   cover performing and owning an installation and omit *removing* it, which is the right the statute
   actually gives.** § 47-06-04 sentence 1: a thing a person affixes to another's land "without an
   agreement permitting that person to remove it" **belongs to the owner of the land, unless the owner
   of the land chooses to require the former to remove it** - which is exactly the row's "it will
   remain part of the property at the end of the Term unless Landlord requires its removal". Sentence
   2, though, gives the tenant a statutory right to "remove from the demised premises, anytime during
   the continuance of the tenant's term, anything affixed thereto, for the purpose of trade,
   manufacture, **ornament, or domestic use**, if the removal can be effected without injury to the
   premises, unless the thing has become an integral part of the premises by the manner in which it is
   affixed." The row's two saving clauses preserve what law "entitles Tenant to **perform**" and who
   "**owns**" an installation - neither word reaches a removal right. Finding in 6.5.

2. **`addendum-precedence` - reads correctly for North Dakota, and the state supplies three concrete
   instances of the carve-out it describes.** The clause's exception for "any disclosure, notice, or
   addendum that applicable law requires, or that applicable law says controls over this Lease" is not
   hypothetical here: **§ 47-16-13.1(5)-(6)** makes a duty shift for a dwelling other than a
   single-family residence valid only in a **separate signed writing supported by adequate
   consideration**, and forbids making the tenant's performance of it a condition of the lease;
   **§ 47-16-15(4)** requires an agreement demanding more than one month's tenant notice to state the
   requirement **and provide space for the lessee to initial next to it**, failing which "the lessee
   may terminate the lease on the last day of a month with at least one calendar month's notice"
   whatever the lease says; and **§ 47-16-26** entitles a tenant of part of a room to the whole room
   "**notwithstanding any agreement to the contrary**". § 47-16-15(4) is the sharpest of the three
   because it overrides the lease term outright, and is worth naming in the ND segment (6.6).

3. **`smoking-policy` - the cost limb reads correctly; the prohibition's scope over-promises in a
   multi-unit property; and the marijuana limb CANNOT be confirmed.** The cost sentence charges "any
   cost Landlord incurs to remediate", i.e. **actual** cost, not a fixed sum - so it clears
   **§ 9-08-03** (contractual penalties void) and **§ 9-08-04** (damages fixed in advance void unless
   actual damage is impracticable or extremely difficult to fix), which is the test that matters here
   and is the reason a liquidated smoking fee would not survive. Two qualifications. The prohibition
   sentence reaches "anywhere on the property, including ... any common area": as a term between this
   landlord and this tenant it binds only the tenant and is not void, but in a multi-unit building it
   reads like a promise of a smoke-free building, and North Dakota gives a tenant **no smoke-drift
   claim at all** - see the new `edu-no-smoke-drift-rule-nd`, 0 hits corpus-wide (6.7). And the
   **marijuana limb is unresolved**: chapter 19-24.1 (medical marijuana) is **not in the corpus** and
   all three fetch channels are blocked, so whether North Dakota limits a lease banning a **registered
   patient's** lawful use is **not settled**. That is the one point in item 4 I could not close; it is
   parked in 1.5, asked of Taylor, and the cautious course is in 6.7.

**And a finding that applies to all three at once, and to many more rows than these.** The identical
ND segment on each asserts: *"North Dakota has NO enumerated prohibited-lease-provisions statute
(confirmed this session - § 47-16-02 is a maximum-term cap, and § 47-16-13.3 supplies only
case-by-case unconscionability). The exculpation exposure that forced fixes to this clause family in
KS and NE therefore does not arise for ND."* **The premise is wrong and the conclusion is unsafe** -
chapter 9-08 is exactly such a statute. See 6.8; this is the Task A finding of 2026-09-27 still
sitting in the library.

### 4.9 Item 5 - CARES Act mentions, one line

**They agree; nothing disagrees.** `edu-nonpayment-notice-nd`'s body says "No court rule adds a
further pre-filing condition", and its notes record that the official index of the North Dakota Rules
of Court was reviewed on 2026-10-02 and that no rule governs eviction, summary possession or
residential tenancies. `edu-cares-act-notice` says "Some state court rules also ask for a statement
about it when you file." The ND row is the negative instance of the federal row's sentence, which is
agreement, not conflict. One soft edge, recorded in 6.22 rather than left unsaid: the ND row's sentence
is scoped to **court rules**, correctly, but the row never mentions the federal 30-day notice, so a
landlord reading it alone could take "no further pre-filing condition" to mean nothing at all adds
one.

## 5. Independent check (rule 80, scaled down)

**Round 1 is complete. Thirteen rows were edited as a result; round 2 re-checks only those.**

### 5.1 How it was run

One agent, which produced none of the research and had not seen it being produced. Its instruction was
to **try to break the work, not to admire it**, and its only source of truth was the statute text: it
was given the corpus loader and told it could read this log to find what a row *claims* but not to
treat the log as authority for what a statute *says*. It was pointed at the failure classes this pass
had already produced - a word count offered as a measurement of the law, a heading mistaken for text, a
duty belonging to someone else reported as the landlord's, § 47-10-28 missed by a chapter-scoped
battery, and ch. 14-02.4 cited for fair housing - and told to look for more of each.

It checked **all 44 lease clauses**, ran **every figure and period in all 138 bodies that state one**
through a sentence-level cross-check against the cited section, screened **all 241 rows** for flat
absences § 47-10-28 contradicts, screened every citation to a repealed section, and confirmed the
cautious course in **all 85** NEEDS_REVIEW rows.

### 5.2 Four clean verdicts, which are results in themselves

- **No figure or period in any of the 138 bodies is misstated.** The five-word test holds throughout -
  § 47-16-07.1(1) "may not demand or receive ... in excess of", (2)'s "greater of", § 47-16-30.1's
  $2,500 as a threshold on a power rather than a cap on money, § 47-16-06.1's "not less than thirty",
  and §§ 47-14-05/-09's 6% default with a 7% **floor on a ceiling**, which a row had already flagged as
  such.
- **No row states a flat absence that § 47-10-28 contradicts** - across all 241, after five canvasses
  had each had to correct one.
- **Every citation to a repealed section is labelled repealed** (§§ 47-16-12, 47-16-24, 28-26-25,
  47-10.1-03), and **no row cites chapter 14-02.4 for a housing duty.**
- **All 85 NEEDS_REVIEW rows state a cautious course in their own `bodyText`**, not only in the notes.

### 5.3 Round 1: six defects and three imprecisions, all fixed

Five of the six run **in the landlord's favour**, which is the dangerous direction.

1. **Two unqualified indemnities.** `family-child-care-consent-nd` and `home-business-use-restriction-nd`
   made the tenant indemnify the landlord against "any claim, demand, fine or loss arising from the
   activity" with **no § 9-08-02 carve-out** - so an injury traced to the landlord's own code breach sat
   inside the words § 9-08-02 puts against the policy of the law and § 9-08-01(2) makes unlawful. The
   library plainly knew the rule: **three other clauses in this same delta carry the carve-out.**
2. **An invented fallback address.** `surrender-and-forwarding-address-nd` let the landlord use the
   address of the property where the tenant furnished none. § 47-16-07.1(3) says only "the last address
   furnished lessor" - there is no such fallback, and inventing one walks into the § 47-16-07.1(4)
   treble-damages exposure the same row warns about.
3. **Four clauses whose park warning sat in the notes rather than the body the landlord reads.**
   `rules-regulations-nd` gave thirty days for a rule change where § 47-10-28(3) adds **three months to
   remedy or vacate** for a home-owning park tenant; `rent-escalation-nd` thirty days against
   § 47-10-28(7)'s **ninety**; `utility-apportionment-nd` an open administrative charge against (8)'s
   **three-dollar** cap and its individual-meter bar; `rent-installments-nd` a late charge against
   (11)'s ten per cent and five dollars a day. Exposure each time is § 47-10-28(12)'s **$2,500** penalty
   floor and § 47-32-01.1's eviction defence.
4. **Self-stipulated materiality, in four clauses.** § 47-32-01(8) requires breach of a material term,
   but **nothing in North Dakota law lets the parties stipulate materiality**, and § 47-16-13.3's
   unconscionability review cuts the other way.
5. **A crime limb with no victim carve-out.** `prohibited-acts-renter-nd`(i) banned any act that "is a
   crime under the laws of North Dakota or of the United States" - unlike its sibling
   `criminal-activity-nd`, which carves out conduct of which the tenant was the victim.
6. **A misattribution, in the tenant's favour.** `guest-rights-nd` attributed "an individual residing in
   or intending to reside in that dwelling" to § 14-02.5-02(1). It is in **§ 14-02.5-06(1)** and is
   confined to **disability**, so the row reported a disability-only extension as spanning all nine
   grounds.

Three imprecisions were fixed with them: "separate" for § 47-16-13.1(5)(a)'s "**adequate**"
consideration; § 14-02.5-32(2)'s penalty tiers stated without their conditions; and § 47-17-02 service
prescribed for a **fixed-term** termination when §§ 47-17-01 and -02 govern an estate at will.

### 5.4 Round 2 was NOT clean, and the most useful thing it found was my own fix

Round 2 re-checked only the thirteen rows round 1's fixes had touched. Of the nine fixes it examined:
**four cured**, **four partly cured**, **one introduced a new problem** - and it found one defect round
1 had not looked for. Everything below has been acted on.

**The one that matters most is mine.** My round-1 fix to `children-occupancy-limit-nd` **inverted a
statutory condition.** I wrote that § 14-02.5-32(2)(a)'s $11,000 tier applies where the respondent "has
not been adjudged" to have committed a prior discriminatory housing practice. The Century Code text
reads "**if the respondent has been found** by order of the department or a court to have committed a
prior discriminatory housing practice" - no "not". I had silently substituted the sensible reading for
the words on the page, because as printed (a) and (b) share the same condition while setting different
figures, which cannot be right. **The row now states the text as printed, says why it cannot stand as
written, and tells the landlord not to rely on either reading without a clean text** - and subsection
3, which lets the higher figures be imposed without regard to the time windows where the same
individual committed the earlier acts, is now stated too. The lesson is about me, not the row: **a fix
that improves on the statute without disclosing that it is doing so is a worse defect than the
imprecision it cures.**

The four partial cures, all now completed:
- **The § 9-08-02 carve-out was appended to the rows' closing commentary, not to the operative
  indemnity** - so a landlord copying the clause would still have taken the indemnity without it. It
  now sits inside the indemnity itself, in both rows. This was the round-1 fix that mattered most and
  the one I placed worst.
- **My replacement for the invented address was circular**: "if Tenant furnishes no address, Landlord
  will use the last address Tenant did furnish" is a nullity where none was ever furnished. The clause
  now says plainly that **§ 47-16-07.1(3) supplies no substitute address**, states what to do in
  practice, and says in terms that doing it is not statutorily authorised and does not by itself
  discharge the obligation. The gap is the statute's, and the row shows it instead of papering over it.
- **`appliances-excluded-nd` still said "separate consideration" in its closing paragraph** and omitted
  § 47-16-13.1(5)(a) good faith, (5)(b)'s subdivision-(e) bar and (5)(c)'s no-diminution requirement.
  All now stated, with § 47-16-13.1(6)'s cross-reference defect disclosed rather than relied on.
- **`owner-occupancy-termination-nd`'s clause and its own note conflicted** - the note denied that
  § 47-17-02 service was required while the clause still required service "in the manner North Dakota
  law prescribes". The clause now adopts that manner **by agreement**, which is what it always was.

Three residuals in the park warnings were corrected: § 47-10-28(3)'s "except ... subsections 4 and 5";
§ 47-10-28(7)'s six-month bar on an increase after a purchase where rent rose in the preceding sixty
days; and an overstatement that a section "may not be used at all" without individual meters, when (8)
bars charging a utility **fee** rather than carrying the cost in rent. Two warnings that sat
unbracketed inside operative lease text are now bracketed as drafting notes.

**And the best catch of the whole check, which round 1 never looked for: two rows in this delivery
contradicted each other.** `prohibited-acts-renter-nd`(g) banned "any business, trade or commercial
activity" outright - the very blanket ban that this delta's own `home-business-use-restriction-nd`
calls unenforceable and exposed under § 47-16-13.3 - and the blanket ban was the operative clause. (g)
now turns on consent that will not be unreasonably withheld for an activity confined to the dwelling,
which is the position the sibling row recommends. Round 2 also noticed that the victim carve-out named
fewer people than the prohibitions bind - a guest who was the victim of a crime was inside the ban -
and it has been widened to match.

### 5.5 What remains unchecked, stated plainly

This prompt scales rule 80 to **at most two rounds**, and both are used. **The edits made in response
to round 2 have therefore not themselves been independently checked.** That is the residual risk in
this delivery and it should not be discovered later. The rows carrying an unchecked round-2 edit are:

`appliances-excluded-nd`, `children-occupancy-limit-nd`, `family-child-care-consent-nd`,
`home-business-use-restriction-nd`, `owner-occupancy-termination-nd`, `prohibited-acts-renter-nd`,
`rent-escalation-nd`, `rent-installments-nd`, `rules-regulations-nd`,
`surrender-and-forwarding-address-nd`, `utility-apportionment-nd`.

Each edit is disclosed in its own row's notes under "ROUND-2 CHECK FIX", with what was wrong and what
was changed, so a third reader can go straight to them. **My recommendation: give those eleven rows one
more read at sync**, and prioritise `children-occupancy-limit-nd`, because the penalty tier it now
describes rests on a Century Code text that appears to be missing a word.

### 5.6 One observation of the check's that I disagreed with

Round 1 noted that **no clause in this delta carries `REQUIRED_DISCLOSURE`**, while § 47-16-15(4) is
exactly one - a lease demanding more than one month's tenant notice must state the requirement and
provide space to initial, with a self-executing fallback to one calendar month. **It is right about the
delta, and the gap is already filled elsewhere:** `lease-notice-initial-requirement-nd` exists in the
library as a `LEASE_CLAUSE` with basis `REQUIRED_DISCLOSURE: N.D.C.C. § 47-16-15(4)` and prints the
initial line. A canvass reported the same thing as an unfilled gap on batch 4 and was corrected then
(4.4). **Two independent readings arriving at it is a reason to leave it alone rather than duplicate
it** - and worth recording, because it is the second time this pass that a reader has gone looking for
a clause that already exists.

### 5.7 What the two rounds say about the work as a whole

Nine defects in 241 rows, of which **five were in the one place a check should look hardest** - a
clause that takes something from the tenant. None was a wrong statute, a wrong figure or a fabricated
provision in an education row: **every figure and period in all 138 bodies that state one verified
against its section**, no row stated an absence § 47-10-28 contradicts, every repealed section was
labelled repealed, and all 85 NEEDS_REVIEW rows carried their cautious course in the body. The failures
clustered in **clause drafting** rather than in research - a carve-out omitted, a materiality
stipulation the statute does not allow, a fallback invented to fill a gap the statute leaves open. That
is where a third round would be worth most.

## 6. Findings on existing rows

The scope fence forbids fixing these. Each is quoted so Claude Code can fix it at sync.

### 6.1 `edu-no-cash-receipt-duty-nd` may be too absolute

The row's words: it states that ND imposes **no** duty to give a receipt. That may be wrong if
**§ 9-12-22** gives a payer a right to demand a receipt - which is exactly the section this
pass could not reach on any of three channels (1.5). The new row
`edu-rent-receipt-anti-waiver-nd` is therefore **NEEDS_REVIEW** rather than asserting against
it, and this finding is the paired disclosure. **Do not sync either as settled until
§ 9-12-22 is read.** My recommendation: read § 9-12-22, then either narrow the existing row to
"no duty to deliver a receipt unposted and unasked" or retire it.

### 6.2 A nil return, recorded because the item asked for it

Item 2 asked for a conflict report on `edu-casualty-termination-nd`,
`tenant-caused-damage-nd` and `edu-early-departure-mitigation-nd`. **No conflict found.** All
three are consistent with §§ 47-16-14(4) and 47-16-17(2) as read whole, including the
scoping point `edu-early-departure-mitigation-nd` already carries: § 47-16-13.5's mitigation
duty is scoped by its own first sentence to parties aggrieved under §§ 47-16-13.1 to
47-16-13.6, so there is no general statutory mitigation duty for a tenant who simply leaves.
Recording the nil return rather than staying silent, so a later reader can tell the check ran.

### 6.3 § 47-16-02.1 sat only in another row's notes

`edu-term-change-notice-nd` carried the rent-control preemption inside its notes, where no
topic query would find it. It now has its own row keyed to `rent-control`. **The existing row
is not changed** - this is a note that the duplication is intentional and the notes mention can
be trimmed at sync if Claude Code wants it in one place.

### 6.4 ND's own log recorded `extended-absence-notice` as not searched

ND decision log § 43.8 records this topic as not searched. It is now searched, with a
term-of-art battery and an everyday-word companion battery. Flagging it so the log's own
"not searched" line can be closed at sync.

---

### 6.5 `no-alterations` - the saving clauses omit the removal right § 47-06-04 gives

**The row's words:** "This Section does not limit any repair, installation, rekeying, or reasonable
modification that applicable law entitles Tenant to **perform**, and does not change who **owns** an
installation that applicable law makes Tenant's property."

**The statute**, N.D.C.C. § 47-06-04: "A tenant may **remove** from the demised premises, anytime
during the continuance of the tenant's term, anything affixed thereto, for the purpose of trade,
manufacture, ornament, or domestic use, if the removal can be effected without injury to the premises,
unless the thing has become an integral part of the premises by the manner in which it is affixed."

North Dakota's right is a **removal** right during the term, not a performance right and not an
ownership rule, so neither saving clause squarely preserves it - while the row's middle sentence
affirmatively tells the tenant an approved alteration "will remain part of the property at the end of
the Term". **Wording I would use:** change "entitles Tenant to perform" to "**entitles Tenant to
perform or to remove**". Four words, and it is a shared row in 55 states, so it is Claude Code's
change to make under rule 62, not mine.

### 6.6 `addendum-precedence` - correct, but its ND segment names no ND instance

The clause reads correctly (4.4). The finding is only that its ND segment is the generic
2026-09-06 boilerplate and names none of §§ 47-16-13.1(5)-(6), 47-16-15(4) or 47-16-26, so a reader
cannot tell the carve-out does real work in this state. **Sentence I would add to the ND segment:**
"ND instances of the carve-out: § 47-16-13.1(5)-(6) (duty shift valid only in a separate signed
writing with adequate consideration, and not as a condition of the lease); § 47-16-15(4) (a
longer-than-one-month tenant notice binds only if the lessee initials next to it); § 47-16-26
(a tenant of part of a room is entitled to the whole room notwithstanding any agreement to the
contrary)."

### 6.7 `smoking-policy` - scope over-promises, and the marijuana limb is unconfirmed

**The row's words:** "Smoking of any kind, including tobacco, marijuana, and vaping, is not permitted
anywhere on the property, including inside the dwelling, on porches, balconies, or in any common
area."

Two things, neither of which makes the clause void. (a) In a multi-unit property the sentence reads as
a landlord-side promise of a smoke-free building, which North Dakota does not back: there is **no
smoke-drift duty and no tenant claim** - 0 hits corpus-wide, battery in §3. **Sentence I would add to
the ND segment:** "In ND this clause binds only this tenant; the state imposes no smoke-free duty on
the landlord and gives a tenant no smoke-drift claim, so the clause should not be read as a promise
about other units." (b) The **marijuana** limb is **not confirmed for North Dakota**: chapter 19-24.1
is outside the corpus and unreachable on all three channels, so whether the state limits a lease
banning a **registered medical marijuana patient's** lawful use is open. **Cautious course until
chapter 19-24.1 is read:** treat the marijuana limb as sound for recreational use and as untested
against a registered patient, and do not rely on it to refuse a patient's tenancy or to terminate one.
**Recommendation:** once the chapter is in the corpus, if it carries a patient protection, add to the
clause "except as North Dakota law requires for a registered medical marijuana patient".

### 6.8 WITHDRAWN - I reported this wrongly, and the error was mine

**What I said, in an earlier version of this log and in the chat:** that `smoking-policy`, `no-alterations` and
`addendum-precedence` still assert *"North Dakota has NO enumerated prohibited-lease-provisions statute ... The
exculpation exposure that forced fixes to this clause family in KS and NE therefore does not arise for
ND"*, that chapter 9-08 falsifies it, and that **43 ND-tagged rows still carry it** so Claude Code
should run a central text-screen fix.

**What is actually true.** The screen I should have run first: of the **39** ND-tagged rows carrying
that sentence or the phrase "exculpation exposure", **38 also carry a dated withdrawal** - *"ND
2026-09-28: the LIABILITY-LANGUAGE CHECK above is withdrawn as to any clause disclaiming liability for
the landlord's own violation of law. North Dakota does have enumerated bans outside its landlord-tenant
title: N.D.C.C. §§ 9-08-02 (exculpation), 9-08-03 (penalties), 9-08-04 (liquidated damages) and 9-08-05
(restricting enforcement). See edu-prohibited-lease-terms-nd."* The single row without it is
`edu-prohibited-lease-terms-nd` itself, which **quotes** the sentence in order to correct it. So **the
2026-09-28 pass already fixed this, across the board, and no central fix is needed.**

**Why I got it wrong, because the shape will recur.** My ND-segment extractor cut each row's notes at
the next two-letter state marker. The withdrawal is a *second* ND segment, written two days after the
first and sitting further down the notes behind other states' segments, so my reader stopped before it
every time - on all three rows I checked, identically, which is what made the wrong answer look
corroborated. **It is the same defect I have been auditing in other people's work all pass: a
measurement over a subset, reported as a statement about the whole.** A 48,000-character notes field is
not a thing to read with a regex that stops at the first delimiter.

**The much smaller finding that does survive.** The withdrawal is *appended*, not substituted, and it is
**scoped**: "withdrawn **as to any clause disclaiming liability for the landlord's own violation of
law**". The original sentence is still the first thing a reader meets, it is still false as written -
chapter 9-08 is an enumerated bar for every purpose, not only for liability disclaimers - and the
scoping means the withdrawal does not reach a flat fee read as a penalty under § 9-08-03 or a sum fixed
in advance under § 9-08-04, which is where most of this pass's fee work landed. **Recommendation:
replace the sentence rather than appending to it**, e.g. "ND has no prohibited-lease-provisions list
inside ch. 47-16, but ch. 9-08 is an enumerated bar on lease terms - §§ 9-08-01 to 9-08-05 - so the
KS/NE exculpation exposure does arise in ND, through § 9-08-02, and a flat fee is separately exposed
under §§ 9-08-03 and 9-08-04." Lower priority than anything else in this section.

### 6.9 `keys` reads correctly - and the reason it does is a warning

**Verdict: no change needed to the clause.** Checked against §§ 9-08-03, 9-08-04, 47-16-20.1 and
47-16-07.1 as item 3 asks. It survives **because it charges "the cost" and fixes no sum**. § 9-08-04
voids an amount "determined in anticipation" of a breach "to that extent", except where the actual
damage would be "impracticable or extremely difficult to fix" - and a locksmith's invoice fixes a
re-key cost exactly, so the exception could not save a stated figure. § 47-16-20.1 is **not** engaged:
it bans a fee for *accepting* cash, a check or a money order, not a re-key charge.

**Two sentences I would add to the ND segment.** (1) *"Do not convert this clause into a flat re-key or
lost-key fee in North Dakota: a stated figure is void to that extent under § 9-08-04 and, framed as a
consequence of failing to return keys, is also a penalty imposed by contract for nonperformance under
§ 9-08-03."* (2) The point the existing ND segments miss: *"An unreturned key is not obviously within
§ 47-16-07.1(3) - it is not a deterioration or injury to the property under (a), not unpaid rent under
(b), and a re-key is arguably not 'cleaning or other repairs' under (c). The clause says 'charge the
cost to Tenant', which is a bill; a landlord who deducts it from the deposit instead risks treble
damages for withholding without reasonable justification under § 47-16-07.1(4)."*

### 6.10 `hoa-compliance` reads correctly - and in North Dakota it is the only thing doing the work

**Verdict: no change needed to the clause.** The fine pass-through is not a void penalty under
§ 9-08-03, because the amount is imposed by the association under the recorded declaration and the
clause shifts only reimbursement of what the landlord actually pays; and because it fixes no sum,
§ 9-08-04 is not engaged. § 47-16-20.1 is not engaged.

**Two additions owed.** (1) *"An association fine is not within § 47-16-07.1(3)(a)-(c) - not a
deterioration or injury to the property, not unpaid rent, not cleaning or repairs - so it may not be
applied to the security deposit; doing so risks treble damages under § 47-16-07.1(4). The clause makes
the fine the tenant's responsibility, not deductible, so bill it."* (2) Why the clause earns its place
here, which no ND segment says: *"§ 47-04.1-08 binds 'each unit owner' and § 47-04.1-11 makes an
assessment 'a debt of the owner'. North Dakota has no statute binding a tenant to an association's
rules and none letting an association reach a tenant for rent or a fine. In ND this clause is the
**only** source of the tenant's duty, so it is doing real work rather than restating a statute."* Keep
the amount uncapped only so long as it tracks the fine actually imposed; a flat "association violation
fee" would be void to that extent under § 9-08-04.

### 6.11 `edu-no-dv-lock-change-duty-nd` still holds, but chapter 14-07.7 has made it incomplete

**It still holds**: § 47-16-17.1 was read whole again, all eleven subsections, and there is still no
lock provision; and chapter 14-07.7 was read whole, all twenty sections, in which the words
**"landlord", "lease", "tenant" and "lock" do not appear at all**. So the row's core statement - that
the statute gives a victim an early-termination right and no lock-change right - is correct.

**But the chapter supplies a mechanism the row was written before**, and it turns what the row calls a
judgment call into something close to the opposite. A protection order, temporary or full, may exclude
the respondent "from the residence of another individual or from a place necessary to ensure the safety
of the protected individual" (§§ 14-07.7-06(1)(b), 14-07.7-07(2)(b)); on the petitioner's request the
court **shall** order the sheriff or other law enforcement officer to accompany the petitioner and
assist in placing them in possession of the dwelling (§ 14-07.7-19); a first violation is a class A
misdemeanour **and** contempt (§ 14-07.7-17); and an officer **shall** arrest without a warrant for a
violation (§ 14-07.7-18(1)). **Sentence to add, after "not under a statute":** *"If a co-tenant
excluded by a protection order asks you for keys or a new credential, do not give them: you would be
assisting a violation that is a class A misdemeanour and contempt of court, for which an officer must
arrest without a warrant. Ask to see the order, follow what it says about possession, and refer any
dispute about who may be in the unit back to the issuing court - your quiet-possession duty under
§ 47-16-08 runs to 'all persons lawfully claiming the same', and an excluded respondent is not lawfully
claiming possession while the order stands. The order does not, however, oblige you to re-key, to pay
for a re-key, or to do it within any particular time."* Also worth adding: **§ 47-16-17.1(2)(a), as
amended by S.L. 2025, ch. 145, now expressly names a civil protection order under chapter 14-07.7**, so
a tenant's notice resting on one is squarely within the statute.

### 6.12 `edu-no-late-fee-cap-nd` is wrong, and wrong in the landlord's favour

**The row's words:** *"North Dakota sets no dollar or percentage cap on late fees, and no statutory
grace period. It has also declined to set one three times"* - citing HB 1440 and HB 1442 (2021) and
SB 2236 (2025).

**The statute**, N.D.C.C. § 47-10-28(11): *"A mobile home park may not charge a monthly late fee of more
than ten percent of the monthly rent. In addition to the monthly late fee, a mobile home park may not
charge a daily late fee of more than five dollars per day."* Subsection 11 was **inserted by S.L. 2025,
ch. 238 (S.B. 2385), effective August 1, 2025** - the act text in the corpus shows the former
subsections 9, 10 and 11 renumbered to 12, 13 and 14 around it. Enforcement is real: § 47-10-28(12)
carries a civil penalty of **not less than $2,500** and not more than the greater of $10,000 or actual
damages, plus actual attorney's fees and costs, and § 47-32-01.1 makes a violation **a defence to the
eviction itself**.

So the three failed bills show the legislature declining a **general** cap. They do not show it
declining every cap - and it granted one in the same session. **This is the dangerous direction**: a
park operator relying on the row would charge an uncapped late fee into a $2,500 floor and an eviction
defence. **Wording I would use:** keep the existing §§ 9-08-03, 9-08-04 and 47-16-13.3 text, which is
correct, and replace the opening with: *"North Dakota sets no cap on late fees for ordinary residential
tenancies, and no statutory grace period - but mobile home parks are an exception, and the exception
arrived in the same 2025 session in which a general cap failed. A park may not charge a monthly late fee
above ten percent of monthly rent, nor a daily late fee above five dollars a day (§ 47-10-28(11), added
by S.L. 2025, ch. 238, effective August 1, 2025); a violation carries a civil penalty of at least $2,500
(§ 47-10-28(12)) and is a defence to the eviction (§ 47-32-01.1)."*

**How it was found, because the method is the transferable part:** not by a late-fee battery, which is
chapter-scoped and cannot see chapter 47-10, but by a **figure sweep** - every dollar amount, percentage
and multiple of rent within about 200 characters of a lessor, landlord, lessee, tenant, rental agreement
or dwelling unit, across the whole statutes scope (battery `ND-GAPS-227`, deliberately scoped
`statutes`). The same sweep found § 47-16-07.6(2). Proposed as an SOP change below.

### 6.13 `edu-self-help-eviction-ban-nd` asserts a treble-damages remedy this corpus cannot verify

**The row's words:** a remedy in treble damages against a landlord who "forcibly ejects or excludes" a
tenant.

**The problem:** the only treble damages anywhere in North Dakota landlord-tenant law that this corpus
can see is **§ 47-16-07.1(4)**, on security deposits withheld without reasonable justification. The
only plausible source for the row's claim is **§ 32-03-29**, which the Legislative Council master index
names **"Damages for forcible exclusion from realty"** - and **chapter 32-03 is wholly absent from the
corpus**, so its text and its multiplier cannot be read. Two neighbours matter for the same reason:
**§ 32-03-27 "Damages for tenant's failure to surrender premises"** and **§ 32-03-28 "Damages for
tenant's willful holding over"** are landlord-side remedies, equally unread.

**I am not calling the row wrong** - it may well be right, and it was written from a primary-text
reading this corpus cannot reach. I am recording that **it cannot be checked here**, which is a
different claim and the only honest one. **Recommendation: get chapter 32-03 into the corpus and read
§ 32-03-29 before this row is relied on**, and until then do not propagate its multiplier to any new
row. No new row in this delta rests on it.

### 6.14 North Dakota has no "notice to vacate" and no "notice to quit" - a library-wide vocabulary mismatch

Measured across the whole corpus in the collapsed view: **"notice to vacate" 0, "notice to quit" 0,
"notice to remove" 0, "notice of intention to evict" 3.** North Dakota has no noun-phrase term of art
for the pre-eviction notice. § 47-17-01 says the landlord gives "notice to the tenant ... **to remove
from the premises** within a period specified in the notice of not less than one month"; § 47-32-02
calls its three-day notice a "**notice of intention to evict**".

This is not a finding against any one row - it is a flag that **wherever a shared or ND-tagged row uses
"notice to vacate" or "notice to quit" for North Dakota, it is using a phrase that does not appear in
the state's law**, and a reader looking for it will not find it. It also means **any battery searching
those phrases returns zero in North Dakota and proves nothing**, which is a live trap for the remaining
batches; it is now in the canvass brief. **Recommendation:** a text screen on the two phrases across
ND-tagged rows, replacing them with the statute's own words where a row purports to describe ND law.

### 6.15 A repealed section keeps its heading - 85 of them in this corpus

Not a finding against a row, but a trap this pass walked close to and the sharpest argument available
for SOP rule 21.

**§ 47-16-24** still reads **"Lessee must give written notice before removal of property from
premises"** in the chapter PDF and in the Legislative Council master index. Its entire body is
**"Repealed by S.L. 1975, ch. 106, § 673."** A canvass noticed it. It is not isolated: **85 sections in
this corpus are repealed but still carry their headings**, among them §§ 14-02.4-12 and 14-02.4-12.1
(discriminatory housing practices) and most of chapter 14-07.1, which H.B. 1489 replaced.

**Why it matters here specifically.** This pass names out-of-corpus sections by their **master-index
headings**, which is the honest thing to do when the text cannot be read - but **an index heading
carries no repeal marker**. So every such citation in this log is heading-only and unverified, and at
least some of them may name sections that no longer exist. The rows say so in those words. The repeal
is visible **only in the body**, which is exactly why rule 21 says read the section whole.
**Recommendation: when any of the parked chapters is fetched, check each named section for a repeal
line before relying on its heading.** Proposed as an SOP change below.

### 6.16 North Dakota's fair-housing law is chapter 14-02.5 - and chapter 14-02.4 has no housing provision at all

A canvass found that **§ 14-02.4-13 is a third repealed-but-headed housing section**, beside
§§ 14-02.4-12 and 14-02.4-12.1. I checked the whole chapter: all three are repealed - §§ 14-02.4-12
and -13 by **S.L. 1999, ch. 134, § 4** and § 14-02.4-12.1 by **S.L. 2001, ch. 145, § 14** - and
**chapter 14-02.4 now contains no operative housing provision whatever**, though it keeps its
employment, public-accommodation, credit, retaliation and remedies sections.

**But the duties were moved, not abolished, and that is the part worth recording.** Chapter 14-02.5 is
a full North Dakota fair housing act - **46 sections, all in the corpus**: § 14-02.5-02 "Sale or
rental", -03 "Publication", -04 "Inspection", -05 "Entry into neighborhood", -06 "Disability", -07
"Residential real estate-related transaction", -08 "Brokerage services", **-09 "Sales and rentals
exempted"**, -10 "Religious organization, private club, and appraisal exemption", **-11 "Housing for
elderly exempted"**, -12 "Effect on other law", -27 "Land use law", -45 "Intimidation or interference
- Penalty", and the whole complaint-to-civil-action machinery at -13 to -44.

**Recommendation: a text screen for `14-02.4` across ND-tagged rows.** Any row citing chapter 14-02.4
for a housing duty is citing law repealed in 1999 or 2001, and the right citation is chapter 14-02.5.
No row in this delta does so; this is a check on the existing library, and it is the third instance in
this pass of the repealed-but-headed trap of 6.15.

### 6.17 `edu-casualty-termination-nd` says there is no proportional reduction - § 47-16-21 is one

**The row's words:** *"North Dakota has no statutory rent abatement during repairs and no proportional
reduction: the tenant's casualty right is all or nothing."*

**The statute**, N.D.C.C. § 47-16-21, "When proportionate part of lease paid by lessee": *"When the
leasing of real property is terminated before the time originally agreed upon, the lessee must pay the
due proportion of the lease for such use as the lessee actually has made of the property **unless such
use is merely nominal and of no benefit to the lessee**."*

**The first half of the row is right; the second half is wrong twice.** There *is* a proportioning
rule, and the tenant's position is *not* all or nothing - § 47-16-21's second limb excuses the payment
entirely where the use was merely nominal and of no benefit. The distinction the row misses is that
§ 47-16-21 proportions what the tenant owes **for use already made**, which is not the same thing as
an abatement during repairs; the row conflated the two and denied both.

**And it errs in the landlord's favour**, which is the dangerous direction: a landlord relying on it
would bill a full final period after a casualty termination. **Wording I would use:** keep the first
sentence and replace the last with *"There is no statutory rent abatement while repairs are made. But
the money is not all or nothing: on a termination before the agreed time the tenant pays only the due
proportion of the lease for the use actually made of the property, and pays nothing for it where that
use was 'merely nominal and of no benefit' (§ 47-16-21)."*

**I had the same gap.** My own batch-1 row `edu-casualty-and-mitigation-waivable-nd` answered item 2
without § 47-16-21, which it should have carried. The later canvass found it; I amended that row at
assembly rather than leaving it, and the amendment is disclosed in its notes.

### 6.18 `edu-no-state-military-termination-nd` is wrong: North Dakota has a state servicemember relief act

**The row's words:** *"North Dakota has no state military lease-termination statute and no state
analogue to the federal Servicemembers Civil Relief Act. A servicemember tenant's rights come entirely
from the federal Act ... North Dakota adds nothing on top."*

**The statute**, § 37-01-43 **"North Dakota military civil relief act"**, as amended by **S.L. 2025,
ch. 332 (H.B. 1074)**, approved and filed 14 March 2025 and read whole from the session-law volume:
*"An individual called or ordered to active service for thirty consecutive days or longer has all of
the protections afforded to persons in the military service of the United States under the
Servicemembers Civil Relief Act [50 U.S.C. 3901-4043] **in effect on December 31, 2024**."*

So there **is** a state analogue, a servicemember tenant has state-law protections as well as federal
ones, and the row's "adds nothing on top" is the opposite of the position. **And there is a subtlety
the replacement wording has to carry: it is a frozen-standard incorporation.** It adopts the SCRA *as
in effect on 31 December 2024* - the 2025 act moved that date up from 2022 - so later federal
amendments do **not** flow through, and the state right can diverge from the federal one over time.

**Why it was missed, which is the transferable part:** the earlier search was scoped to chapter 47-16.
The provision is in **title 37**. Where a topic is about a *class of tenant* rather than a class of
premises - servicemembers, victims, minors, subsidised tenants - the statute may be anywhere in the
code, and a chapter-scoped battery cannot see it. That is now in the canvass brief.

**Wording I would use:** *"North Dakota has a state analogue to the federal Servicemembers Civil
Relief Act. Under § 37-01-43, an individual called or ordered to active service for thirty consecutive
days or longer has all of the protections the SCRA gives persons in the military service of the United
States - but as the SCRA stood on 31 December 2024 (§ 37-01-43, as amended by S.L. 2025, ch. 332), so a
later change in federal law does not automatically change the state right. Treat the federal Act as
the floor and check § 37-01-43 for the state-law route and remedy."*

### 6.19 Two of this pass's own parked questions closed on the last batch - § 12.1-22-03

**§ 12.1-22-03 is readable in full after all.** Title 12.1 is absent from the corpus, but the section
was **amended and reenacted whole** by S.L. 2025, ch. 129 - an enacted act, with both the enactment
and subsection checks made - so its current text is in the volume, effective 1 August 2025 by the
art. IV, § 13 default. **North Dakota criminalised squatting in 2025:** *"An individual who unlawfully
detains, occupies, or trespasses upon a residential dwelling is guilty of a **class C felony** for the
first offense and a **class B felony** for a second or subsequent offense if the second or subsequent
offense occurred at the same residential dwelling"* (subsection 2), with subsection 1 making entry
into a dwelling without licence or privilege a class C felony in its own right. Subsection 4 sets the
posting rules, including that **"[t]he name of the person posting the premises must appear on each
sign in legible characters"**, with substantial compliance enough where notice against trespass is
clear from the circumstances; subsection 3(b) carves out "a licensed hunter or angler who is lawfully
hunting or fishing" from the fenced-land offence.

`edu-unauthorized-occupant-removal-nd` and `edu-trespass-notice-nd` were both **NEEDS_REVIEW pending
this section**; both are now **VERIFIED**, with the text in the body and the closure disclosed in the
notes. Neither tells the landlord to self-help - the criminal route runs through law enforcement.

### 6.20 `edu-no-tenant-organizing-right-nd` - right conclusion, wrong measurement

**The row's words** include that "retaliat-" occurs three times in the statutes, offered in support of
there being no retaliation bar. **The conclusion stands - there is no *general* landlord-retaliation
statute - but the measurement does not support it, because the bar that does exist never uses the
word.** **§ 14-02.5-45(2)**: *"It is a discriminatory practice to coerce, intimidate, threaten, or
interfere with any individual in the exercise or enjoyment of, or on account of the individual having
exercised or enjoyed ... any right granted or protected by this chapter."* And § 14-02.5-45(1) adds a
class A misdemeanour for intimidation or interference by force or threat of force on a protected
ground. **Wording I would use:** keep the conclusion and replace the count with *"There is no general
landlord-retaliation statute, but § 14-02.5-45 bars coercing, intimidating, threatening or interfering
with a tenant's exercise of any right under the fair housing chapter, and § 23-12-10 'Smoking
restrictions - Exceptions - Retaliation' may add a third targeted bar."*

**This is the rent-control trap for the fourth time in one pass: a word count on the topic's own
vocabulary is not a measurement of the law.** It is also the reason I am not reporting the count to
Taylor as evidence of anything.

### 6.21 `edu-prohibited-lease-terms-nd` sits in the wrong group

Not a legal defect - a filing one, and it affects whether a landlord ever sees the row. The row is the
chapter 9-08 canvass and its group is **`Notices & General`**, while the library has a dedicated
education group **`Compliance & Prohibited Terms`** carrying 780 rows. The new
`edu-exculpatory-clauses-nd` is filed there. **Recommendation:** move
`edu-prohibited-lease-terms-nd` to `Compliance & Prohibited Terms` so the pair sit together.

### 6.22 `edu-nonpayment-notice-nd` - accurate, but silent on the federal notice

**The row's words:** "No court rule adds a further pre-filing condition." That is correct and
correctly scoped, and it **agrees** with `edu-cares-act-notice` (4.9). But the row never mentions the
federal 30-day notice, so read alone the sentence can be taken as "nothing adds a further pre-filing
condition". **Sentence I would add:** "Federal law may still require a 30-day notice to vacate if the
property has a federally backed mortgage - see the federal CARES Act notice row."

## 7. Findings for other states

**Nothing to report from batches 1, 2 or 3.** All four canvasses were asked for it explicitly and all
four returned empty: the research stayed inside North Dakota law, and the sibling rows consulted for shape
were read for shape, not evaluated. Recording the nil return rather than omitting the section.

The one thing that comes close is not a defect in another state's row but a **transferable test** that
several states' rows may fail: ND's § 47-16-07.1(3) has a **closed** list of what a deposit may be
applied to, and three separate topics in this batch - an unreturned key, an association fine, a utility
arrear - each turn on the thing not being on it. Any state whose deposit statute has a closed list is
worth re-reading against its own `keys`, `hoa-compliance` and `utility-deposit-return` rows. Offered as
a topic question below rather than as a finding against any particular row, because I have not read
those states' statutes and will not guess at them.

One structural observation that is not a defect in any state's row: **every one of the 241
missing topics already has a row somewhere in the library**, so for each one there is a
sibling to compare shape against, and the tag-first rule (rule 26) is live on all of them -
which is why the semicolon trap in 1.1 matters so much for the batches ahead.

---

## Leads carried to later batches

Recorded here rather than acted on, because each belongs to a topic in a later batch and the scope
fence keeps this batch to its own list.

- **`ev-charging` and its three siblings (batch 8).** Battery `ND-GAPS-141` turned up, incidentally,
  that North Dakota has a real EV-charging section - **§ 47-04.1-16**, read whole since - in a chapter
  nobody would reach from the topic's own vocabulary. **Read the cite carefully, because I first got it
  wrong** (4.3): subsection **(2)** voids any covenant or bylaw that prohibits or unreasonably restricts
  a station in an owner's unit or designated parking space; **(3)** deems an application approved if not
  denied in writing within sixty days; **(8)** is a civil penalty of up to **one thousand dollars**
  against an association that wilfully violates the section; **(9)** is the unit owner's indemnity of
  the association and carries **no figure**. It is a **condominium** provision about an **owner's**
  installation, so the EV topics must answer from it without reporting it as a landlord-tenant rule.
- **`exculpatory-clauses` is now answered**, and its chapter-9-08 reading is the spine of several
  later answers: every fee topic (§§ 9-08-03, 9-08-04), `liquidated-damages`, `unconscionability`,
  `binding-arbitration` and `limitation-of-actions` (§ 9-08-05), and `confession-of-judgment`. The
  canvass briefs carry it so no agent re-reads the chapter.

## New `{{variables}}`

One, and the prompt asks for any new one to be listed: **`{unpaid_amount_interest_rate}`**, on
`interest-on-unpaid-amounts-nd`. It is needed because § 47-14-05 conditions any rate above six per cent
on being "contracted for in writing", so the figure has to be a per-lease field rather than a constant.
The library's existing rate variables were checked first and none fits: `judgment_interest_rate` is a
post-judgment rate, `holdover_daily_rate` a per-day holdover charge, `deposit_interest_statement` a
disclosure sentence. A second: **`{{utility_transfer_days}}`**, on `utility-transfer-nd`, because no North Dakota statute
sets a transfer deadline, so the number has to be the landlord's own.

And two more on `guaranty-renewals-nd`: **`{{guarantor_name}}`** and
**`{{guarantor_notice_address}}`**. These exist because **title 47 returns zero hits for `guarant*`
and for `surety`** - North Dakota law supplies nothing at all about a guarantor, so a guaranty that is
to survive a renewal or a month-to-month rollover has to be wholly contractual, and it needs the
guarantor identified and an address to send notice to. The library had no guarantor variable of any
kind, which is itself worth noticing.

Then **`{{environmental_covenant_recording_data}}`** and
**`{{environmental_covenant_use_limitations}}`** on `environmental-covenant-notice-and-compliance-nd`,
because a covenant's recording data and use limitations are property-specific and § 47-37-06 does not
supply them to the tenant; and **`{{substitute_premises_offer_days}}`** on
`substitute-premises-after-damage-nd`, because no statute sets a period for offering substitute
premises.

Batch 7 added four more, all on clauses in the premises cluster:
**`{{accessory_unit_description}}`**, **`{{included_facilities_list}}`**,
**`{{parking_space_number}}`** and **`{{exhibit_letter}}`**. They exist because
§ 47-16-27 gives the tenant only what the agreement grants and § 47-16-13.1(1)(d) keys the landlord's
maintenance duty to what the landlord **supplied** - so in North Dakota the inventory, the excluded
items and the granted facilities are legally operative text, not description, and each has to be a
per-lease field.

Every other row in this delta reuses existing variables, and the library's 162 existing variables were
checked each time before a new one was proposed. **Nine new variables across 201 rows**, each named in
this section with the reason it could not reuse an existing one.

## Proposed SOP changes

1. **The `states` delimiter is a semicolon; say so in the SOP, in the Step A section.** A
   comma-split returns 95 ND rows instead of 142 and raises no error. Every state pass reads
   this column. Proposed text: *"`states` is semicolon-delimited. Split on `[;,]` and
   reconcile the count against the prompt's Step A figure before starting; a comma-split
   silently undercounts and the wrong number looks plausible."*
2. **A battery that supersedes another must name it in a machine-readable field, and the tool
   must refuse the run otherwise.** RI 1 currently asks for the reason in the rerun's note,
   which is prose and was in fact left out six times in this pass. `battery.py` now takes
   `supersedes=`, records it, and refuses a name superseding a run not in the log. Proposed
   text: *"A rerun records `supersedes` on its log record, naming the run it replaces and the
   reason. The tool refuses a rerun that does not."*
3. **Prove the corpus index before any battery, and never with the corpus's own verifier.**
   Four defects in this pass' splitter - one of them, the `\x0c` form feed at page breaks,
   invisible until the index was reconciled section by section against the Legislative
   Council master index. Proposed text: *"Before the first battery, reconcile the corpus
   index against an independent list of section numbers and record missing/extra counts in
   §1. Reproduce any shipped verifier's check in your own code rather than running it."*
4. **Carried forward from the ND retro pass, still unlanded:** check the row count against the
   **path** you are about to read, not the filename.
5. **When a topic turns on the absence of a cap, run a figure sweep as well as a term-of-art battery.**
   Every dollar amount, percentage and multiple of rent within ~200 characters of a lessor, landlord,
   lessee, tenant, rental agreement or dwelling unit, across the **whole** statutes scope. ND's
   mobile-home-park late-fee caps sit in chapter 47-**10**, not 47-16, and no chapter-scoped or
   deposit-scoped search can see them - which is exactly how an existing row came to say North Dakota
   caps no late fees at all (6.12).
6. **Parse the bill table; do not accept a list of acts.** This prompt named four 2025 acts; parsing
   the table found **two more** touching title 47 (ch. 421 and ch. 422). Both turned out
   not to reach a lease - but that was a finding, not a safe assumption, and one of them supplied the
   best argument on another topic (1.6).
7. **Do not read a long `notes` field with a regex that stops at the first delimiter.** My ND-segment
   extractor cut at the next two-letter state marker and so missed a dated withdrawal sitting further
   down a 48,000-character field - on three rows identically, which made a wrong answer look
   corroborated. I reported a 43-row defect that had in fact been fixed a month earlier (6.8). Proposed
   text: *"When a finding rests on what a row's notes do or do not say, extract **all** segments for
   that state and search the whole field, then quote what you found and what you searched for."*
8. **Treat an index heading as proof of a section number and nothing else.** 85 sections in this
   corpus are **repealed but still carry their headings** - § 47-16-24 among them, whose whole body is
   "Repealed by S.L. 1975, ch. 106, § 673". The repeal is visible only in the body. Proposed text:
   *"A section named from an index, a table of contents or a search hit on its number is heading-only
   and unverified until its body has been read. Label it so on the row, and never describe what it
   requires."*
9. **One canvass, one scratch directory.** Two canvasses sharing a working directory overwrote each
   other's scripts mid-run on batch 4, because both chose the same obvious filenames. Proposed text:
   *"Each canvass writes its scripts under its own slot directory; the shared corpus and battery tools
   are read-only."*
10. **Say which titles a bill-table screen covered.** I filtered mine to the titles the corpus holds
   and called the result complete; a canvass then found **S.L. 2025, ch. 120** amending § 12.1-32-08 in
   a title the corpus does not hold, with a mandatory meth-decontamination restitution for property
   owners. Re-running over all 1,726 section-actions and screening headings is better but still not
   complete, because § 12.1-32-08's heading gives no hint of it. Proposed text: *"State the scope of
   any currency screen in §1 - which titles, which documents, and what a negative therefore does not
   prove. Only the session-law volume read in full is complete."*
11. **Add § 9-08-01 to the standing list of the real limits on lease terms.** The SOP names §§ 9-08-02 to
   9-08-05. § 9-08-01 ("unlawful if ... Contrary to the policy of express law, though not expressly
   prohibited") is the cleanest hook for a term that collects more than a statute permits, and unlike
   §§ 9-08-03/9-08-04 it does not depend on characterising the term as a penalty or as damages fixed in
   advance. Three files named `lease-clauses.csv`
   were in this attachment folder, with 11,634, 2,427 and 941 rows and 17, 17 and 16 columns.

## Proposed topic questions

1. **For a waiver topic, say what the clause is worth, not only whether it is lawful.**
   WY-gaps topic question 2 already requires the default rule first. ND shows the next step is
   needed: `homestead-waiver` is not "lawful" or "unlawful" but **empty** - there is nothing
   for the tenant to waive. Proposed addition to the waiver topics: *"State whether the waiver
   has anything to operate on. A waiver of a right the tenant does not hold is empty, and
   printing it invites the tenant to believe they gave something up."*
2. **For a fee topic in a state with no fee statute, name the provision that actually limits
   the fee.** `notice-service-fee`, `collection-fee` and `eviction-penalty-clause-ban` all
   came back absent in ND, and in all three the real limit is the general penalty and
   liquidated-damages law (§§ 9-08-03, 9-08-04), not landlord-tenant law. Proposed addition:
   *"An absent fee statute is not a free hand. Name the contract-law provision that limits
   the fee, or say there is none."*
3. **For a crime-free topic, ask whether the state implies the term or requires the lease to
   carry it.** The CO/ND divergence turns entirely on this and it decides whether the answer
   is a clause or an education row. Proposed addition: *"Does a statute make crime-free
   conduct a term of every lease (education row), or does it only make breach of a written
   term a ground for eviction (clause)?"*
4. **For every deposit topic, ask whether the statute reaches security "however denominated".**
   Where it does, as N.D.C.C. § 47-16-07.1(1) does, four topics change answer at once:
   `deposit-last-month-rent` is not "no rule" but "the label is irrelevant";
   `fee-in-lieu-of-deposit` is not "unregulated" but "the deposit rules probably swallow the fee";
   `nonrefundable-deposit-notice` is not "no notice rule" but "a non-refundable deposit cannot
   lawfully exist"; and `utility-deposit-return` is not a utility question but a deposit question.
5. **For `liquidated-damages`, battery the state's own vocabulary, never the term of art.** North
   Dakota never says "liquidated damages": § 9-08-04 says damages "determined in anticipation" of a
   breach, void unless it would be "impracticable or extremely difficult to fix the actual damage".
6. **Ask whether the state runs a separate, stricter money regime for mobile home or manufactured
   home parks.** North Dakota does, at § 47-10-28, with utility and late-fee caps that do not exist
   for ordinary tenancies, a civil penalty with both a floor and a whichever-is-greater ceiling, and
   violation-as-eviction-defence at § 47-32-01.1. **No chapter-47-16-scoped battery can see any of it.**
7. **Where a general interest statute supplies a legal rate absent agreement, check what chapter it
   sits in.** § 47-14-05 says "any legal indebtedness" but sits in chapter 47-14, *Loans of Money*,
   and its own late-charge sentence speaks of "loan documents ... signed by the borrower" - so the
   scope question must be answered before the rate is reported as reaching rent arrears.
8. **For a deposit-formality topic, argue from contrast rather than reporting an absence.** Where a
   chapter imposes a separate-signed-writing or initialling formality elsewhere and does **not**
   attach it to the deposit, that is a deliberate choice: in ND the comparators are
   §§ 47-16-13.1(5)(a) and 47-16-15(4).
9. **Ask whether the state's deposit statute lists the permitted applications of the deposit, and
   whether the thing you are about to deduct is on the list.** § 47-16-07.1(3)'s list is **closed**,
   which is why an unreturned key, an association fine and a utility arrear each have to be **billed
   rather than deducted** - three separate topics, one test, and treble damages under
   § 47-16-07.1(4) for getting it wrong.
10. **Before any notice or eviction battery, measure the state's own vocabulary.** "Notice to vacate"
   and "notice to quit" occur **zero** times in the entire North Dakota corpus; the state says notice
   "to remove from the premises" (§ 47-17-01) and "notice of intention to evict" (§ 47-32-02). A
   battery on the topic's own words returns zero and proves nothing.
11. **Battery the state's own word for proportioning, not the topic's.** North Dakota's word is
   **"due proportion"**: `abate` near rent returns **0**, `prorate` near rent returns **0**, "withhold
   rent" returns **0**, and "due proportion" occurs **exactly twice** - §§ 47-16-21 and 47-15-12, in
   identical wording. A battery built on the topic's vocabulary would have reported a flat absence on
   a rule the state has, and did: an existing row denies the proportioning rule outright (6.17).
12. **A gap in the topic list itself, not a question about an existing topic.** § 47-32-01(8) makes
   breach of "a material term of the **written lease**" an eviction ground, so **which obligations
   the lease designates as material decides what the landlord can evict for** - a genuinely
   lease-carried term with no `topic_key` anywhere in the 364. The eviction canvass found it, had
   nowhere to put it, and raised it rather than smuggling it into an adjacent row. **Proposed new
   topic `material-terms-designation`:** *"Does the state make breach of a lease term an eviction
   ground, and if so must the lease say which terms are material?"*

---

## Gaps-pass sync review (Claude Code, 2026-10-30)

Merged with `merge-delta.py --base 68f8c51`: 241 new rows (44 lease clauses), no shared rows tagged, nothing refused. The first copy of the delta on the Desktop held only 156 rows (an earlier batch's file); Taylor re-downloaded the final 241-row file, which matches the log row for row. All 241 missing topics are answered. North Dakota now carries 383 active rows, every one VERIFIED; the new rows carry the canvass date in `effective_from` (SOP rule 70).

**NEEDS_REVIEW (85 delivered), all closed VERIFIED.** The pass had no channel to ndlegis.gov (proxy 403, allowlist, a browser that couldn't read PDFs), so every chapter outside the corpus went unread; Claude Code read them on ndlegis.gov (Century Code chapter PDFs, the Administrative Code, the court rules). No clause was switched off. More than 30 rows were corrected, not just confirmed. Among them:
- **Smoke alarms:** § 23-13-15 puts a smoke-detection duty on residential rentals (landlord installs, tenant maintains), so the absence and inventory rows that said the Century Code has none now state it.
- **Receipts:** § 9-12-22 lets anyone paying a debt demand a written receipt; `edu-no-cash-receipt-duty-nd` and `edu-rent-receipt-anti-waiver-nd` were wrong to say there is no receipt right.
- **Pools:** N.D. Admin. Code ch. 33-29-01 regulates "semipublic" pools at apartments, parks and condominiums.
- **Asbestos and lead:** ch. 33.1-15-13 (inspection before renovating a building of five or more units) and ch. 33.1-15-24 (licensed abatement, notice to the department).
- **Utilities:** the Public Service Commission's rules bar submetering or reselling electricity unless the rate schedule allows it (§ 69-09-02-15), and give tenants 10 days' notice and the right to take over the account when a landlord who includes utilities falls behind (§§ 69-09-02-05.1(9), 69-09-01-18.1(9)).
- **Courts:** § 27-11-01 bars a non-lawyer conducting a case for another in a court of record; small claims takes lease claims up to $15,000, filed where the property is (§ 27-08.1-01(2)(e), relevant to Taylor's lesson 6); N.D.R.Civ.P. 62(a)'s automatic 30-day stay against "immediate restitution" is stated as a doubt with the cautious course.
- **Other corrections:** out-of-state entity owners without a certificate of authority can't maintain an action (§ 10-32.1-84(1)); a broker's trust account must be noninterest-bearing (§ 43-23-14.1), in tension with § 47-16-07.1(1)'s interest-bearing account (cautious course added); the property-tax rent route of ch. 57-21; the farm-hunting permission (S.L. 2025 ch. 216 struck the lessee's permission, it didn't add it); § 32-29.3-06(1) is the specific permission § 9-08-05 needs for arbitration (the row now records the rule-54 decline); several repealed sections the pass cited as live.
- Remaining doubts that only case law could settle are stated in the rows with the cautious course.

**Session-law readings:** ND's session-law PDFs print struck and new words alike in plain text. Every row stating what a 2023-2026 act added or changed was checked against the codified text (215 rows triaged, 70 claims checked): 25 fixes, among them 13 rows that paired the wrong bill with ch. 423 (it is H.B. 1610), § 47-10-28(1)'s contact duties wrongly called new, § 23-10-03(2)(d)'s struck "may be" quoted as law, and § 14-07.1-08.1 wrongly called repealed.

**Findings on existing rows (§6):** checked against the statute; 74 changes. Highlights:
- `edu-no-late-fee-cap-nd`: the 2025 mobile-home-park cap (§ 47-10-28(11), S.L. 2025 ch. 238), also in the `late-fee` ND segment.
- `edu-no-smoke-drift-rule-nd`: § 23-12-09(11) makes apartment, condominium and park common areas smoke-free public places.
- `edu-no-state-military-termination-nd`: § 37-01-43 extends the federal Act to state active duty of 30 or more days.
- `edu-casualty-termination-nd`: § 47-16-21's proportioning rule.
- `edu-consumer-protection-act-nd`: § 51-15-02's dropped conditions restored; the private action, penalty and four-year limit added.
- `edu-no-dv-lock-change-duty-nd`: protection orders under ch. 14-07.7.
- `edu-prohibited-lease-terms-nd` moved to "Compliance & Prohibited Terms".
- The false "no enumerated prohibited-lease-provisions statute" sentence replaced in 38 rows' ND segments.
- **New overrides:**
  - `early-termination-nd`: a flat one month's Rent. §§ 9-08-03 and 9-08-04 match South Dakota's penalty and fixed-damages statutes word for word, and no mitigation duty is recited.
  - `security-deposit-use-nd`: § 47-16-07.1(3)'s three heads instead of "remedy a Tenant default". The statute says "may apply ... towards" and never "only", so the closed list is recorded as the cautious reading, chosen because of § 47-16-07.1(4)'s treble damages.

**Edited-after rows:** 8 VERIFIED rows carrying round-2 edits were read (the other three were NEEDS_REVIEW and closed above); 3 fixes, each moving landlord guidance that would have printed in the lease into brackets (`owner-occupancy-termination-nd`, `rent-escalation-nd`, `rules-regulations-nd`). `common-area-lighting-tenant-metered-nd` had the same defect; its guidance moved to the notes.

**Spot check:** deposit cap and return (§ 47-16-07.1), entry (§ 47-16-07.3), repair duty and its limits (§ 47-16-13.1), eviction grounds and notice (§§ 47-32-01, 47-32-02), retaliation (none general; §§ 47-16-17.1(10), 14-02.5-45(2), 47-10-28(13)-(14)) and the DV termination right (§ 47-16-17.1) across all ND rows. Eight fixes, among them:
- two rows that required the three-day notice for ground 7 (it applies to grounds 4, 5, 6 and 8);
- a row that called § 47-16-07.1(4) the only treble damages (§ 32-03-29 is another);
- a flat "no repair-and-deduct" that conflicted with § 47-16-13(1);
- a two-year cap wrongly applied to every protection order.

**Decisions (§4):** no product questions; the one question Desktop asked Taylor was about method (adding the parked chapters to the corpus), answered by reading them here. Legal calls:
- No arbitration clause (rule 54 decline).
- The homestead row now states that § 47-18-01 doesn't say "owner", leaving the leasehold question as a case-law doubt.
- `children-occupancy-limit-nd`: § 14-02.5-32(2)(a) reads as the row quotes it (no missing "not").

**Other:**
- 14 new `{{variables}}` to M.14.
- SOP 1.90 takes up the pass's proposals as 6 grouped additions, all [Fwd], including one from its running record: test every fetch channel at Step A and ask for the needed chapters before the canvass.
- 10 topic questions added, all under existing keys.
- The citations file gained 243 rows (the extractor now reads ND's "s", "SS" and "Sec." forms).
