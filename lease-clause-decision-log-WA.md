# Washington — lease-clause decision log (state #34)

**Date:** 2026-10-04 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** none of the three rule 9 triggers needed it, because the whole Revised Code of Washington, the whole Washington Administrative Code and the Washington Constitution were loaded, saved and hash-matched before the first battery, giving full-text proof of absence and cross-chapter search directly (rule 9). Claude can't switch research mode on or off; only Taylor can.
**Kickoff vs SOP:** no conflict found. Citation formats are the kickoff's (`RCW 59.18.280(1)(a)`, `RCW 59.18.260, 59.18.280`, `WAC 246-260-010`, `Laws of 2025, ch. 209, § 102`, `Wash. Const. art. I, § 21`), checked by script (§8). No case is cited. The kickoff gives no format for court rules; the rows that cite them use the rules' own names (`SPR 98.24W`, `King County LCR 40`, `SCLCR 8`; §10).
**Scope:** Washington state law only. Seattle, Tacoma, Spokane and other local ordinances are flagged, not resolved (rule 3); the state preempts local regulation of the amount of rent (`edu-rent-increase-limit-wa`). Named and out of scope: mobile and manufactured home lots (chapter 59.20 RCW; flagged where they differ, for example `edu-pet-fees-wa` and the `guest-policy` note), the exclusions in RCW 59.18.040 (`edu-scope-wa`), short-term rentals (chapter 64.37 RCW), commercial and agricultural leases.
**Input CSV:** `lease-clauses.csv`, **3,175 rows, 17 columns, 3,054 active (740 lease clauses, 2,314 education)**, sha256 efbdffe60e7b42b40ea7ef2bc971ce534bd8a6e8aec5645de65f537f06308b24; every per-state active count matched the kickoff exactly (rule 23). Two dormant WA rows existed (rule 25, §5). This is Washington's only Desktop chat (rule 8).
**Output CSV:** `lease-clauses-WA-delta.csv`, **196 rows, 17 columns, CRLF** (sha256 9c74db792580694adfe122d45ceddef56fcc07e2684c56e56c4421fb24ac182b): 40 existing rows with `WA` added to `states`, a `WA:` note appended and `last_checked` 2026-10-03; the 2 dormant WA rows rewritten and activated; and 154 new WA rows. **WA 196 active: 68 lease clauses (40 tagged + 28 WA clauses), 128 education; all VERIFIED.** Merged with the master: 3,329 rows, 3,210 active; every other state's active count unchanged. **No shared row's text changed.**

---

## 0. Completion status

| | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§14: chapter 59.18 RCW (98 sections and dated versions) and chapter 59.12 RCW (27 sections) read whole; both chapters' section lists diffed against every citation in the WA rows; every uncited section listed with its reason; chapters 59.04, 59.20 and 59.28 RCW read beside them) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Seattle Housing Authority, Subsidized Housing Dwelling Lease (SHA-50, revised 2024), mapped section by section; weaker lead, reasons given) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 75 scenarios, Claude-generated on the AZ §18.1 model plus Washington-specific ones, run against the final rows; every scenario answered by a row; one row, `edu-water-heater-wa`, came from the topic canvass that ran beside it) |
| Gap-discovery source 4 — outside-title search | Done (§17: the whole RCW (52,061 sections plus 482 dated versions), the whole WAC (51,570 sections) and the Constitution (273 entries plus 3 versions) loaded before the first battery and searched with 211 battery records; control 0 hits in every battery; every absence pattern tested against known positives; 8 records with a failed positive, all recorded and rerun; relied-on hits read whole) |
| Primary text read | **Read whole and saved, browser SHA-256 equal to file SHA-256 (`sources/registry.tsv`):** the whole RCW and WAC as published 2026-10-03, with history lines and dated versions; the Constitution; a title 59 check copy (identical to the corpus for all 11 chapters); 18 session laws as enrolled; a 2025 budget excerpt; the state court rules (443 rule PDFs) and 28 local superior court rule PDFs; the real lease. **Cases:** none read (§1.4). |
| Step B — tag first | **Done.** 40 existing rows tagged WA (§2.1). 34 shared clauses (33 multi-state plus the blank-states `security-deposit-return` parent) screened and not tagged (§2.2): 17 replaced by WA rows (16 overrides plus the rewritten dormant entry row) with their 8 same-topic variants, 4 'not liable' bases by tagged variants, and 5 others answered by tagged or WA rows. All 666 single-state clauses screened as a triage (§2.3). No shared text edited. |
| Step E — new WA rows | 28 WA lease clauses (2 rewritten dormant rows, 16 overrides of shared clauses, 5 required or conditional disclosures, 5 options under rule 54) and 128 education rows (§3). |
| Rule 25 | `landlords-access-wa` and `mold-disclosure-wa` re-verified, rewritten and activated (§5); the blank-states parent `security-deposit-return` answered by `security-deposit-return-wa`. |
| Step D screens | All run (§19). RCW 59.18.230 (waiver and prohibited terms) and the just-cause statute (RCW 59.18.650) were the decisive screens: they turned the default, early-termination, holdover, surrender, late-fee, payment-method, pet and 'not liable' clauses (§2.2). |
| Optional clauses (rule 54) | 5 offered (§6.1); 8 lawful or doubtful options declined, each with an education row; 1 placed outside the lease because the statute requires a separate writing. |
| Questions to Taylor (rule 76) | None needed (§6.2). Every call was legal or drafting and is recorded in §6.3. |
| Proof of absence | Absence rows cite their battery, hit count and known-positive result; every topic in the reference ends Present, Answered elsewhere, Confirmed absent, Not located, Not offered or Not applicable (§18). 8 battery records carry a failed positive; each is recorded and rerun (§1.3). |
| Independent check | Separate agents checked every row against the saved sources in 15 rounds (§13): round 1 all 195 rows then in the delta (4 ERROR, 63 FIX, 48 NOTE), then each round the rows edited after the last, through round 15, plus a separate check of this log (§13). |
| Currency | RCW and WAC as published 2026-10-03; dated versions of RCW 59.18.030 (2027), 59.18.200 and 59.18.650 (2028) read beside the current text; 18 recent session laws read as enrolled (§1.2). |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Channel:** the built-in browser loaded each official page and saved JSON to Taylor's Downloads folder (approved in this chat); the files were staged into the workspace and hash-matched (browser SHA-256 = file SHA-256). Files and hashes (`sources/registry.tsv`):
  - `wa-rcw-corpus-20261003.json` (101,815,759 bytes, sha256 8e02ecd2bc8514cd2bb74402124cecacf378068c91904a4f73745cd626b5f6c1): https://app.leg.wa.gov/RCW/ every chapter default.aspx?cite=<ch>&full=true (2,785 chapters).
  - `wa-wac-corpus-20261003.json` (135,627,362 bytes, sha256 685547a3ec9ecc3e58663f089bb43464a1cc823e19a0b916b411494294f042d8): https://app.leg.wa.gov/WAC/ every chapter default.aspx?cite=<ch>&full=true (2,856 chapters).
  - `wa-constitution-20261003.json` (865,284 bytes, sha256 e49ae4f969d4259ac7c73d460af62406ae4b09518e5d4a33d377e52af69847d6): https://leg.wa.gov/state-laws-and-rules/washington-state-constitution/?showall=true.
  - `wa-rcw-title59-check-20261003.json` (677,831 bytes, sha256 cf1e41c8a1bf34ffc89f7d2cb847f13e83075e8dfb5aa8077498e29639f60bab): check copy of RCW title 59 chapters exported mid-crawl.
  - `wa-court-rules-20261003.json` (1,206,241 bytes, sha256 b70a8747c461f588212c188f03dff75f391852c964c320b94708a7a69f0ecb9a): https://www.courts.wa.gov/court_rules/ GR, CR, CRLJ, ARLJ, AR, SPR, SCCAR, CCR, ER, RALJ (443 rule PDFs, pdf.js 3.11.174).
  - `wa-local-sup-rules-20261003.json` (3,486,614 bytes, sha256 3ecdc2588c8322e10bf1055e5ab73f7da192530a6a975ff6f63d1c7262aff41d): https://www.courts.wa.gov/court_rules/?fa=court_rules.localsupbycrt (28 PDFs; 6 county sets hosted off-site not fetched).
  - `wa-session-laws-20261003.json` (1,993,604 bytes, sha256 4c3bfa7c8bd92e918d17c27565e717f3980c9f2ad885d297bfb3f02ce3d4c5dd): lawfilesext.leg.wa.gov session-law HTM (18 acts, strike/underline marked).
  - `wa-2025c424-budget-excerpts.json` (5,460 bytes, sha256 0bda1bdd6ffc65d9be90f91a0891c722fbedcd2ef317aa77eb0d35417cb0a7cd): lawfilesext.leg.wa.gov 5167-S.SL.htm (2025 c 424) excerpts; whole-HTM sha b4072310....
  - `wa-real-lease-sha-2024.json` (44,891 bytes, sha256 8acb062038167314382fc026754339557bfb13ff1bd47d9e0567ad3ee9a94cd4): https://www.seattlehousing.org/sites/default/files/SHA_Subsidized_Housing_Dwelling_Lease_Draft_March_2024.pdf (PDF sha 2c486339...).
- **Citation format:** the kickoff's; log references written 'WA log §N'.

### 1.2 Currency (rule 16)
- **Compiled text:** RCW and WAC as published on app.leg.wa.gov on 2026-10-03. The site prints dated versions separately; the corpus keeps both (482 dated RCW versions). Kickoff lead 1: RCW 59.18.030's version effective January 1, 2027 comes from Laws of 2026, ch. 55, § 1 (smart access definitions); RCW 59.18.200 and 59.18.650's versions effective January 1, 2028 come from Laws of 2024, ch. 321, §§ 408-409 (common interest communities: references to chapters 64.34 and 64.38 RCW give way to chapter 64.90 RCW; the RCW 59.18.200 change is in (2)(b), the RCW 59.18.650 change in (2)(g)). Every row citing these sections states the version it relies on where the difference matters, and §10 lists the dates.
- **Session laws read as enrolled** (lawfilesext.leg.wa.gov, strike and underline marked; effective dates from each act's own page):
  - Laws of 2025, ch. 209 (rent and fee increase limits, increase notice, fee and deposit limits; effective May 7, 2025; its § 303 made the act null and void unless funded, and the 2025 budget, Laws of 2025, ch. 424, § 130(30), funds it; budget excerpt saved): `edu-rent-increase-limit-wa`, `edu-rent-increase-notice-wa`, `edu-lease-type-parity-wa`, `edu-pet-fees-wa`, `edu-term-change-notice-wa`.
  - Laws of 2025, ch. 206 (adds class-action and nondisclosure terms to RCW 59.18.230(2); effective July 27, 2025; applies to leases entered into or renewed on or after that date): `edu-prohibited-lease-terms-wa`, `edu-rent-concession-wa`.
  - Laws of 2025, ch. 44 and Laws of 2026, ch. 144 (service of notices by mail under RCW 59.12.040; effective July 27, 2025 and June 11, 2026): `edu-notice-delivery-wa`, `edu-nonpayment-notice-wa`.
  - Laws of 2025, ch. 268 (housing court commissioners, RCW 59.18.368-59.18.369; effective May 13, 2025): §14.
  - Laws of 2026, ch. 234 (flood disclosure, RCW 59.18.060(13); effective June 11, 2026, for leases entered into after December 31, 2026): `flood-disclosure-wa`.
  - Laws of 2026, ch. 184 (portable cooling devices, RCW 59.18.740; effective June 11, 2026): `portable-cooling-device-wa`, `common-area-use-wa`.
  - Laws of 2026, ch. 55 (smart access systems, RCW 59.18.750-59.18.760; effective January 1, 2027): `edu-smart-access-wa`.
  - Laws of 2024, ch. 321 (common interest communities; sections 401-432 effective January 1, 2028): `edu-hoa-wa`, `edu-no-display-rule-wa`, `edu-for-cause-eviction-wa`.
  - Laws of 2025, ch. 58 (the latest general technical corrections act): screened for the sections the rows rely on; none changed in substance.
  - Screened only, no row depends on them: Laws of 2026, ch. 15 (domestic workers, RCW 49.60.230; effective July 1, 2027), Laws of 2026, ch. 99 (vehicle removal by cities), Laws of 2025, ch. 355 (captioning), Laws of 2025, ch. 47 (isolated employees), Laws of 2026, ch. 77 (Labor and Industries notices), Laws of 2025, ch. 417 (transportation), Laws of 2025, ch. 205 and Laws of 2026, ch. 118 (mobile home community notices).
- **Other recent acts** in the history lines of cited sections (for example Laws of 2023, ch. 331; Laws of 2024, ch. 27; Laws of 2026, chs. 238 and 250) were relied on through the compiled text, not read as enrolled.

### 1.3 Corpus and method (rule 19)
- **Loaded before the first battery:** the RCW corpus (2,785 chapters; 52,061 sections plus 482 dated versions), the WAC corpus (2,856 chapters; 51,570 sections) and the Constitution (273 entries plus 3 versions): 104,389 searchable entries, the `scope_size` recorded in every whole-corpus battery. The battery records' corpus label reads 'RCW (52,036 sections)'; the saved corpus and index hold 52,061 RCW sections, so the label is a typing error and the search scope is unaffected (§10). The title 59 check copy matched the corpus text for all 11 chapters.
- **Engine:** Python over the saved, hash-matched corpus (`work/engine.py`): normalized text, headings reported separately as heading-only hits, optional section-wide context filter recorded with each battery. Control term `zqxjvwk` in every battery: 0 hits.
- **Batteries:** 211 records (ids 1-260, unused numbers skipped), saved as `batteries/wa-batteries-1.jsonl` (1-193), `-2.jsonl` (200-213), `-3.jsonl` (220-237), `-4.jsonl` (240-248) and `-5.jsonl` (250-260, the topic-canvass reruns). 165 batteries are cited in the rows; §18 cites more.
- **Failures and reruns, all recorded:** 47 → 230 (lead-based paint; the pattern needed the term of art without a tenancy context to reach chapter 70A.420 RCW); 122 → 232 (tenant rights statement; window widened); 149 → 233 (municipal utility liens; both word orders); 220 → 227 (fee transparency; corrected synthetic positive); 221 → 228 (algorithmic rent setting; corrected synthetic positive); 225 → 229 (lease copy; the statute's own wording, 'executed copy'); 246 → 248 (pet fee caps; RCW 59.18.200 was a wrong positive); 257 → 259 (minors in evictions; the synthetic positive lacked a tenancy word). Rows and §18 cite a failed battery only as 'recorded as failed, rerun as N'; the citation script refuses a failed battery. **Lesson (proposed below):** the first 'all positives passed' check ran on a partial log and missed seven of these; the full log was re-checked after the run.
- **Zero-hit batteries with only synthetic positives (rule 19):** each cited one has an everyday-word rerun: 5 sits beside 4; 13 → 227; 14 → 228; 15 → 222; 155 → 223 (itself an everyday rerun, also 0 hits, cited beside 155); 236 → 237; 46 → 252; 56 → 251; 153 → 253; 259 → 260. Batteries 96, 159 and 164 returned no hits and are not cited as proof.
- **Boundary:** the batteries searched the RCW, the WAC and the Constitution. Case law, local ordinances, federal law and court rules other than those read (§1.1) were not searched, and nothing is claimed about them.
- **Tools:** every battery citation in the rows and in §18 is generated from the saved logs (`work/rowlib.py`); every single-quoted passage is registered with its full citation and checked against the cited section by script (§8). The section-printing tool used by the checkers cut sections at 6,000 characters until round 7 found it; it was fixed and the 38 rows whose cited text lay past that point were re-checked (§13).

### 1.4 Section-open vs recall; case law (rules 15, 21)
- Every WA note ends 'Rule 15: written section-open'; no row was written from recall.
- **Case law: not searched.** Each question the statutes leave open is labelled in its row as not searched: the penalty doctrine as applied to late fees, early-termination fees and holdover charges (`edu-late-fee-wa`, `early-termination-wa`, `edu-holdover-rate-wa`); whether unpaid rent is a 'forbearance' under the usury statute (`edu-unpaid-damages-interest-wa`); how RCW 61.24.146 meets RCW 59.18.650 for a purchaser at a trustee's sale (`edu-foreclosure-wa`); waiver by acceptance of rent (`edu-waiver-by-acceptance-wa`); pre-dispute jury waivers (`edu-jury-waiver-wa`); the implied covenant of quiet enjoyment (`edu-no-quiet-possession-statute-wa`); common-law unconscionability (`edu-no-unconscionability-statute-wa`); the Consumer Protection Act's reach to leases (`edu-consumer-protection-act-wa`); cure and eviction grounds (`edu-cure-and-eviction-grounds-wa`); firearms and heat-alert questions (`edu-firearms-wa`, `edu-heat-alert-utility-wa`).

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged WA as written (40)
| Row | Washington basis (from the WA note) |
|---|---|
| `possession-delay` | WA: Applies as written. No Washington statute addresses delayed delivery of possession at the start of a residential tenancy ((WA battery 240 (delivery of possession at the start of a tenancy): 21 hits, control 0; known positives … |
| `hoa-compliance` | WA: Applies as written. In a community governed by RCW 64.90 (created on or after July 1, 2018 or electing in; every community from January 1, 2028, RCW 64.90.360(2)), an association may fine a tenant directly after notice and an … |
| `lead-based-paint` | WA: Applies as written (federal disclosure). Washington adds no lease disclosure; its renovation, repair and painting program requires certified firms for renovation of pre-1978 housing (RCW 70A.420.100; … |
| `appliances-included` | WA: Applies as written. Rule 44: a landlord duty 'required by RCW 59.18.060 or by the rental agreement' is a trigger for the tenant's notice remedy (RCW 59.18.070) and the termination remedy that follows it (RCW 59.18.090); this … |
| `landlord-maintenance` | WA: Applies as written. It promises no less than RCW 59.18.060 and defers repair timing to 'applicable law' (RCW 59.18.070's 24-hour, 72-hour and 10-day deadlines to start remedial action); the tenant-fault carve-out is narrower … |
| `services-utilities-provided-ks-oh` | WA: Applies as written. Rule 44: services 'expressly specified' are rental-agreement duties under RCW 59.18.070; heat, water and hot water facilities are statutory (RCW 59.18.060(11)). The base `services-utilities-provided` is … |
| `utilities-paid-by-landlord` | WA: Applies as written. Rule 44 and rule 54t (IL 3): if the landlord fails to pay a city or town for electricity or water, a tenant who puts the service in the tenant's name may deduct the charges from rent (RCW 35.21.217(5)(a)), … |
| `addendum-precedence` | WA: Applies as written. Rule 46: documents Washington requires once a choice is made, such as the fee-in-lieu disclosure (RCW 59.18.670(1)(f)(iii)), a signed installment schedule (RCW 59.18.610(3)), the signed move-in checklist … |
| `electronic-signatures` | WA: Applies as written. Electronic signatures are effective between parties who agree to transact electronically (RCW 1.80.040(2), 1.80.060); the right to refuse other electronic transactions can't be waived (RCW 1.80.040(3)). … |
| `entire-agreement` | WA: Applies as written. Changes by written notice that Washington allows include new rules on 30 days' notice at the end of the term (RCW 59.18.140(2)), rent increases under RCW 59.18.140(3) and 59.18.700-59.18.720, discontinuing … |
| `governing-law` | WA: Applies as written ({{state}} fills as Washington). Local ordinances (Seattle, Tacoma, Spokane and others) are flagged, not resolved (rule 3). Read section-open 2026-10-03 from the whole Revised Code of Washington and the … |
| `notices` | WA: Applies as written. Rule 46: Washington lets no lease paragraph serve as a statutory termination notice; RCW 59.12.040 methods control eviction and just-cause notices, and the clause defers to them (`edu-notice-delivery-wa`). … |
| `severability` | WA: Applies as written. Unenforceability of a waiver 'shall not affect other provisions of the agreement which can be given effect without them' (RCW 59.18.230(1)(a)); a prohibited term is unenforceable and knowing use carries … |
| `tenants-property-insurance-ks-oh-ca` | WA: Applies as written (rule 52: Washington voids exculpation of the landlord's liability under law, RCW 59.18.230(2)(f), so the variant without 'not liable' is used; the base `tenants-property-insurance` is not tagged). No … |
| `assigned-parking-space` | WA: Applies as written. Changes to parking rules during the term follow RCW 59.18.140(2) (30 days' notice, effective at the end of the term unless agreed), which the clause's 'limits applicable law places' sentence preserves. … |
| `parking-ks-oh-ca` | WA: Applies as written (rule 52: the base `parking` is not tagged because of its 'not liable' sentence, RCW 59.18.230(2)(f)). Read section-open 2026-10-03 from the whole Revised Code of Washington and the whole Washington … |
| `parking-vehicle-rules` | WA: Applies as written. Towing from residential property needs the owner's written authorization with the statutory statement (RCW 46.55.070(2), 46.55.080(2)-(3)); the clause mentions no booting, which is a gross misdemeanor (RCW … |
| `storage-space-ks-oh-ca` | WA: Applies as written (rule 52: the base `storage-space` is not tagged because of its 'not liable' sentence, RCW 59.18.230(2)(f)). Read section-open 2026-10-03 from the whole Revised Code of Washington and the whole Washington … |
| `pet-insurance-requirement` | WA: Applies as written. No Washington statute bars requiring pet liability coverage; the assistance-animal exclusion is consistent with (and broader than) WAC 162-38-100(3), (5). Read section-open 2026-10-03 from the whole … |
| `rent-payment` | WA: Applies as written. 'Except as permitted by applicable law' preserves repair-and-deduct (RCW 59.18.100) and the city-utility deduction (RCW 35.21.217(5)(a)); a benefit recipient's right to move the due date up to five days is … |
| `fire-safety-grilling` | WA: Applies as written, as a lease rule stricter than the state fire code: the state code does not adopt the open-flame cooking section (WAC 51-54A-0308, 308.1.4) and allows listed propane grills on R-2 decks and balconies within … |
| `guest-policy` | WA: Applies as written, except at mobile home lots for live-in care providers (below). No provision of chapter 59.18 RCW regulates guest stays; RCW 49.60.222(4) preserves the landlord's right to post and enforce reasonable rules … |
| `guest-policy-day-limit` | WA: Applies as written (see `guest-policy`; no Washington guest statute). Read section-open 2026-10-03 from the whole Revised Code of Washington and the whole Washington Administrative Code (app.leg.wa.gov, every chapter page … |
| `inspection-rights` | WA: Applies as written: inspection is a lawful purpose of entry (RCW 59.18.150(1)) and the clause defers to the Access & Entry terms, which for WA are `landlords-access-wa` (two days' written notice with the RCW 59.18.150(6) … |
| `keys` | WA: Applies as written. Rule 26 fee screen: no upfront-fee ban; rekeying cost for unreturned keys is damages, chargeable to the deposit only with the documentation in RCW 59.18.280(1)(b). Landlord must provide adequate locks and … |
| `landscaping-irrigation` | WA: Applies as written, read with RCW 59.18.060(3): in a multi-unit property, shared or common areas are the landlord's to keep 'reasonably clean, sanitary, and safe', and an agreement shifting a RCW 59.18.060 duty needs the RCW … |
| `snow-removal` | WA: Applies as written: it already excludes 'areas shared with other residents', which keeps it outside the landlord's RCW 59.18.060(3) shared-area duty (rule 48; RCW 59.18.360 for any wider shift). Read section-open 2026-10-03 … |
| `extended-absence-notice-ks` | WA: Applies as written: no Washington statute on absence notices; the willful-failure damages limb is ordinary contract damages. Abandonment is separately defined by RCW 59.18.310(1) (default in rent plus intent not to return). … |
| `joint-liability` | WA: Applies as written. Victim co-tenants' release (RCW 59.18.575(2)(c)) and remaining-occupant rules (RCW 59.18.650(3)) operate by statute. Read section-open 2026-10-03 from the whole Revised Code of Washington and the whole … |
| `no-alterations` | WA: Applies as written: its last sentence preserves reasonable disability modifications (RCW 49.60.222(2)(a)), portable cooling devices (RCW 59.18.740) and lock repairs under repair-and-deduct (RCW 59.18.100(1)) and lock changes … |
| `no-disturbance` | WA: Applies as written; tracks the tenant duties not to permit a nuisance (RCW 59.18.130(5)) and the no-cure cause in RCW 59.18.650(2)(c). Read section-open 2026-10-03 from the whole Revised Code of Washington and the whole … |
| `no-sublet-assign` | WA: Applies as written. A breach is cured or ended through the 10-day notice for a 'covenant not to assign or sublet' (RCW 59.12.030(4); RCW 59.18.650(2)(b)); 'cause for termination' does not bypass that notice. Short-term rental … |
| `permitted-occupants` | WA: Applies as written. Occupancy rules must not discriminate on families with children status (RCW 49.60.222(1)); no statewide occupancy standard was found (WA battery 142 (occupancy limits / overcrowding): 46 hits, control 0; … |
| `residential-use-only` | WA: Applies as written (`residential-use-only-mt` answers the same topic and is not tagged). Read section-open 2026-10-03 from the whole Revised Code of Washington and the whole Washington Administrative Code (app.leg.wa.gov, … |
| `smoking-policy` | WA: Applies as written. No Washington statute bars a lease from banning tobacco or cannabis smoking or vaping ((WA battery 133 (cannabis in rental housing): 32 hits, control 0; known positives passed (0 real sections, 1 … |
| `tenant-forward-proceedings-ca` | WA: Applies as written (no Washington rule; a contractual duty only). Read section-open 2026-10-03 from the whole Revised Code of Washington and the whole Washington Administrative Code (app.leg.wa.gov, every chapter page loaded … |
| `tenant-maintenance` | WA: Applies as written; tracks RCW 59.18.130(1)-(4), (10) and keeps the landlord's repair duties ('any condition that applicable law requires Landlord to repair'). Read section-open 2026-10-03 from the whole Revised Code of … |
| `utilities-responsibility` | WA: Applies as written. City utilities must notify an owner who asks of a tenant's delinquency (RCW 35.21.217(2)); the owner must notify the city within 14 days after an account-holder tenant leaves (RCW 35.21.217(4); … |
| `utility-payment-evidence` | WA: Applies as written (no Washington rule against it). Read section-open 2026-10-03 from the whole Revised Code of Washington and the whole Washington Administrative Code (app.leg.wa.gov, every chapter page loaded in the … |
| `utility-service-continuity` | WA: Applies as written; tracks RCW 59.18.300 ('It shall be unlawful for a tenant to intentionally cause the loss of utility services provided by the landlord'). Read section-open 2026-10-03 from the whole Revised Code of … |

### 2.2 Screened and not tagged (34)
| Row | Why not tagged for Washington |
|---|---|
| `late-fee` | Grace period left to the builder: a figure under five days would be a prohibited term (RCW 59.18.230(2)(i); RCW 59.18.170(2)); replaced by `late-fee-wa` |
| `late-fee-ne` | Same text with a broader non-waiver sentence; one late-fee clause per state (`late-fee-wa`) |
| `returned-payments` | Lets Landlord demand certified funds indefinitely after 'more than two' returned payments and states the fee only as a ceiling (rule 53); Washington's nine-month personal-check rule and its forms of payment (RCW 59.18.063) differ; replaced by `returned-payments-wa` |
| `due-at-signing` | Fixes upfront amounts without the tenant's installment right (RCW 59.18.610(1)(a)); replaced by `due-at-signing-wa` |
| `application-of-payments` | Lets Tenant redirect a payment; Washington requires payments to go to rent first (RCW 59.18.283(1)); replaced by `application-of-payments-wa` |
| `security-deposit-use` | Lawful but omits the carpet, checklist and partial-damage limits of RCW 59.18.280(1)(c) and lets the deposit be applied to a default during the tenancy; the lease must state the withholding terms (RCW 59.18.260(1)); replaced by `security-deposit-use-wa` |
| `security-deposit-return` | Blank-states parent (rule 25 family); replaced by `security-deposit-return-wa` (RECOMMENDED: no deposit-return text is required in the lease, rule 56) |
| `existing-condition` | Its 'good order and repair' acknowledgment at signing cuts against the signed checklist required before any deposit (RCW 59.18.260); replaced by `existing-condition-wa` |
| `acceptable-payment-methods` | Lets Landlord choose and change methods freely, including electronic-only (RCW 59.18.230(2)(j); RCW 59.18.063); replaced by `acceptable-payment-methods-wa` |
| `acceptable-payment-methods-nj` | Same; New Jersey/Illinois wording; `acceptable-payment-methods-wa` |
| `services-utilities-provided` | 'Landlord is not liable' (RCW 59.18.230(2)(f); rule 52); `services-utilities-provided-ks-oh` tagged |
| `tenants-property-insurance` | Same; `tenants-property-insurance-ks-oh-ca` tagged |
| `parking` | Same; `parking-ks-oh-ca` tagged |
| `storage-space` | Same; `storage-space-ks-oh-ca` tagged |
| `landlords-access` | 24 hours' notice without the date, time window and telephone number RCW 59.18.150(6) requires; replaced by the rewritten dormant row `landlords-access-wa` (§5) |
| `landlords-access-mi` | Same 24-hour notice; one entry clause per state (`landlords-access-wa`) |
| `default-by-tenant` | Its 'reasonable costs and expenses' and prevailing-party fee sentences run into RCW 59.18.230(2)(e) and the eviction fee limits (RCW 59.18.290(3)-(4); RCW 59.18.410(1)); replaced by `default-by-tenant-wa` |
| `default-by-tenant-ks-ne` | Same fee sentence; `default-by-tenant-wa` |
| `surrender-end-of-term` | Possession surrendered 'Upon the expiration' of the Lease, which in Washington does not by itself end a tenancy (RCW 59.18.650(1)); replaced by `surrender-end-of-term-wa` |
| `surrender-end-of-term-mn-nd` | Same; one surrender clause per state (`surrender-end-of-term-wa`) |
| `surrender-end-of-term-ks-ne` | Same; `surrender-end-of-term-wa` |
| `early-termination` | Its landlord limb ends the Lease after any breach not cured in 10 days, or if Tenant vacates or abandons without notice; Washington needs a substantial breach of a material term (RCW 59.18.650(2)(b)) and treats abandonment as default in rent plus intent not to return (RCW 59.18.310(1)); replaced by `early-termination-wa` |
| `early-termination-ks` | Same landlord limb; `early-termination-wa` |
| `holdover` | Assumes the tenancy ends with the Term and promises damages 'in the maximum amount permitted by applicable law' (rule 53); a Washington fixed term becomes month-to-month unless the lease uses an RCW 59.18.650(1)(b)-(c) option (RCW 59.18.650(1)(d)); replaced by `holdover-wa` |
| `holdover-ca` | Same; `holdover-wa` |
| `pet-policy` | Indemnity reaching the landlord's own liability (RCW 59.18.230(2)(f)); replaced by `pet-policy-wa` |
| `common-area-use` | Blanket ban on fastening anything to surfaces would restrict portable cooling devices beyond RCW 59.18.740; replaced by `common-area-use-wa` |
| `rental-application-accuracy` | Makes any 'materially false or misleading' information a material breach, wider than Washington's cause for intentional, knowing and material misrepresentations (RCW 59.18.650(2)(l)); replaced by `rental-application-accuracy-wa` |
| `assistance-animal-accommodation` | Its withdrawal standard can be applied as a prediction, while Washington's rule for a dog guide or service animal turns on an actual failed attempt to reduce the risk (WAC 162-38-105; RCW 49.60.222); replaced by `assistance-animal-accommodation-wa` |
| `possession-delay-ca` | Promises a termination 'as the law permits' that no Washington statute gives (battery 240); the base `possession-delay` (tagged) gives the tenant the contractual right instead |
| `parking-vehicle-rules-id` | Adds booting; Washington bars immobilizing a vehicle owned by someone else (`edu-towing-wa`); base `parking-vehicle-rules` tagged |
| `ev-charging-shared-area-co` | Rests on the Colorado and Illinois EV statutes; Washington gives tenants no EV-charging right (`edu-no-ev-charging-rule-wa`) |
| `ev-charging-end-of-tenancy-co` | Same |
| `utility-allowance-cap-co` | Says the tenant's monthly overage reimbursement 'will not be characterized as Rent'; in Washington recurring charges for utilities in the rental agreement are rent (RCW 59.18.030), which also brings a variable overage under the increase notice and limit (Claude's reading); not offered (`edu-fees-as-rent-wa`, `edu-no-submetering-statute-wa`) |

**Void-term screen (kickoff lead 7):** every shared clause was read against RCW 59.18.230(1)-(4). Items that decided a row: (2)(e) attorneys' fees (`default-by-tenant`, `-ks-ne`); (2)(f) exculpation and indemnity (`pet-policy`, the four 'not liable' bases); (2)(i) late fees within five days (`late-fee`, `-ne`); (2)(j) electronic-only payment (`acceptable-payment-methods`, `-nj`); (4) liens on tenant property (`edu-landlord-lien-wa`). The class-action and nondisclosure items ((2)(b), (c)) and confession of judgment ((2)(d)): no shared clause contains them. Clauses carrying an 'applicable law' saving phrase were checked for whether the phrase is relied on to cure a void term; none is.

### 2.3 Single-state clauses screened (666)
Triage (rule 26; `work/triage.py`, `work/triage.json`): **666** active clauses tagged to one state. **300** name another state or its statute in the clause text (not taggable as written; their topics are answered in §18). The other **366** were read in full by a separate agent (`work/triage-rest.txt`; summary `work/agents/triage-agent.md`) and each verdict reviewed: **331** sit on a topic a WA row answers; **1** was taggable as written (`residential-use-only-mt`; not tagged because the shared `residential-use-only` is tagged and answers the topic); **20** pointed to WA rows that were then written (casualty termination, rent concessions, the rent due date, tenant repair agreements, interest on unpaid amounts: `edu-casualty-termination-wa`, `edu-rent-concession-wa`, `edu-rent-due-date-change-wa`, `edu-tenant-repair-agreement-wa`, `edu-unpaid-damages-interest-wa`); **14** have no Washington analogue (other states' disclosures and forms; answered in §18). The agent also flagged other states' texts that would be void in Washington (exculpation in `parking-mn`, `storage-space-mn`, `tenants-property-insurance-mn`; `smoke-drift-waiver-ut`; `utility-transfer-tn`; `casualty-termination-nv`); none is tagged WA.

## 3. New WA rows
Every WA row: `verification_status` VERIFIED, `effective_from` and `last_checked` 2026-10-03, notes ending with the source line and 'Rule 15: written section-open'. Battery citations generated from the saved records.

### 3.1 WA lease clauses (28)
| Row | Group | Topic | rule_type | Basis | Supersedes |
|---|---|---|---|---|---|
| `landlords-access-wa` | Access & Entry | `landlord-entry` | CONSTRAINED | CONSTRAINED_TERM | SERVES_LANDLORD | `landlords-access` |
| `mold-disclosure-wa` | Disclosures | `mold-disclosure` | RECOMMENDED | SERVES_LANDLORD |  |
| `default-by-tenant-wa` | Default & Termination | `default-by-tenant` | RECOMMENDED | SERVES_LANDLORD | `default-by-tenant` |
| `early-termination-wa` | Default & Termination | `early-termination` | RECOMMENDED | SERVES_LANDLORD | `early-termination` |
| `holdover-wa` | Default & Termination | `holdover` | RECOMMENDED | SERVES_LANDLORD | `holdover` |
| `surrender-end-of-term-wa` | Default & Termination | `surrender-end-of-term` | RECOMMENDED | SERVES_LANDLORD | `surrender-end-of-term` |
| `rental-application-accuracy-wa` | Default & Termination | `rental-application-accuracy` | RECOMMENDED | SERVES_LANDLORD | `rental-application-accuracy` |
| `pet-policy-wa` | Pets | `pet-policy` | RECOMMENDED | SERVES_LANDLORD | `pet-policy` |
| `application-of-payments-wa` | Rent & Payment | `application-of-payments` | CONSTRAINED | CONSTRAINED_TERM | `application-of-payments` |
| `due-at-signing-wa` | Rent & Payment | `due-at-signing` | CONSTRAINED | CONSTRAINED_TERM | SERVES_LANDLORD | `due-at-signing` |
| `late-fee-wa` | Rent & Payment | `late-fee` | CONSTRAINED | CONSTRAINED_TERM | `late-fee` |
| `returned-payments-wa` | Rent & Payment | `returned-payments` | CONSTRAINED | CONSTRAINED_TERM | `returned-payments` |
| `acceptable-payment-methods-wa` | Tenant Responsibilities | `acceptable-payment-methods` | CONSTRAINED | CONSTRAINED_TERM | SERVES_LANDLORD | `acceptable-payment-methods` |
| `common-area-use-wa` | Rules & Regulations | `common-area-use` | RECOMMENDED | SERVES_LANDLORD | `common-area-use` |
| `existing-condition-wa` | Tenant Responsibilities | `existing-condition` | RECOMMENDED | SERVES_LANDLORD | `existing-condition` |
| `security-deposit-use-wa` | Security Deposit | `security-deposit-use` | CONDITIONAL | REQUIRED_DISCLOSURE: RCW 59.18.260(1) | `security-deposit-use` |
| `security-deposit-return-wa` | Security Deposit | `security-deposit-return` | RECOMMENDED | SERVES_LANDLORD | `security-deposit-return` |
| `deposit-depository-wa` | Security Deposit | `security-deposit-holding` | CONDITIONAL | REQUIRED_DISCLOSURE: RCW 59.18.270 |  |
| `nonrefundable-fees-wa` | Security Deposit | `nonrefundable-deposit-notice` | CONDITIONAL | REQUIRED_DISCLOSURE: RCW 59.18.285 |  |
| `landlord-disclosure-wa` | Disclosures | `owner-identity-disclosure` | REQUIRED | REQUIRED_DISCLOSURE: RCW 59.18.060(16) |  |
| `fire-safety-notice-wa` | Disclosures | `alarm-duties` | REQUIRED | REQUIRED_DISCLOSURE: RCW 59.18.060(12) | SERVES_LANDLORD |  |
| `flood-disclosure-wa` | Disclosures | `flood-disclosure` | CONDITIONAL | REQUIRED_DISCLOSURE: RCW 59.18.060(13) |  |
| `portable-cooling-device-wa` | Rules & Regulations | `portable-cooling-device` | CONDITIONAL | REQUIRED_DISCLOSURE: RCW 59.18.740(8) | SERVES_LANDLORD |  |
| `fee-in-lieu-of-deposit-wa` | Security Deposit | `fee-in-lieu-of-deposit` | CONDITIONAL | REQUIRED_DISCLOSURE: RCW 59.18.670(1)(f)(ii), (2)(a) | SERVES_LANDLORD |  |
| `tenant-caused-damage-wa` | Tenant Responsibilities | `tenant-caused-damage` | RECOMMENDED | SERVES_LANDLORD |  |
| `lease-end-continuation-wa` | Default & Termination | `automatic-renewal` | RECOMMENDED | SERVES_LANDLORD |  |
| `fixed-term-end-without-cause-wa` | Default & Termination | `automatic-renewal` | RECOMMENDED | SERVES_LANDLORD |  |
| `assistance-animal-accommodation-wa` | Pets | `assistance-animal-accommodation` | CONSTRAINED | CONSTRAINED_TERM | SERVES_LANDLORD | `assistance-animal-accommodation` |

### 3.2 WA education rows (128)
The last column shows the first text the row cites (or its absence battery); the row's notes give every pinpoint it relies on.

| Row | Group | Topic | rule_type | First cited text |
|---|---|---|---|---|
| `edu-rent-increase-notice-wa` | Rent & Payment | `rent-increase-notice` | CONSTRAINED | RCW 59.18.140(3)(a) |
| `edu-rent-increase-limit-wa` | Rent & Payment | `rent-control` | CONSTRAINED | RCW 59.18.700(1)(a) |
| `edu-lease-type-parity-wa` | Rent & Payment | `lease-type-parity` | CONSTRAINED | RCW 59.18.700(4)(a) |
| `edu-late-fee-wa` | Rent & Payment | `late-fee` | CONSTRAINED | Confirmed absent (WA battery 2) |
| `edu-rent-due-date-change-wa` | Rent & Payment | `rent-payment` | CONSTRAINED | RCW 59.18.170(3) |
| `edu-fees-as-rent-wa` | Rent & Payment | `fees-as-rent` | RECOMMENDED | RCW 59.18.030 |
| `edu-rent-receipts-wa` | Rent & Payment | `rent-receipts` | CONSTRAINED | RCW 59.18.063(2) |
| `edu-returned-payments-wa` | Rent & Payment | `returned-payments` | CONSTRAINED | RCW 59.18.063(1) |
| `edu-application-fees-wa` | Rent & Payment | `application-fees` | CONSTRAINED | RCW 59.18.257(1)(b)(i) |
| `edu-tenant-screening-wa` | Rent & Payment | `tenant-screening` | CONSTRAINED | RCW 59.18.257(1)(a) |
| `edu-holding-deposit-wa` | Security Deposit | `holding-deposit` | CONSTRAINED | RCW 59.18.253(3) |
| `edu-source-of-income-wa` | Compliance & Prohibited Terms | `source-of-income` | PROHIBITED | RCW 59.18.255(1)(a) |
| `edu-rent-concession-wa` | Rent & Payment | `rent-concession` | RECOMMENDED | RCW 59.18.230(2)(c) |
| `edu-unpaid-damages-interest-wa` | Rent & Payment | `unpaid-damages-interest` | RECOMMENDED | RCW 19.52.010(1) |
| `edu-rent-tax-wa` | Rent & Payment | `rent-tax` | RECOMMENDED | RCW 82.04.050 |
| `edu-no-algorithmic-rent-rule-wa` | Rent & Payment | `algorithmic-rent-setting` | RECOMMENDED | Confirmed absent (WA battery 14) |
| `edu-no-fee-transparency-rule-wa` | Rent & Payment | `fee-transparency` | RECOMMENDED | Confirmed absent (WA battery 13) |
| `edu-no-rent-reporting-rule-wa` | Rent & Payment | `rent-reporting` | RECOMMENDED | Confirmed absent (WA battery 155) |
| `edu-pet-fees-wa` | Pets | `pet-fees` | CONSTRAINED | Confirmed absent (WA battery 26) |
| `edu-emergency-assistance-right-wa` | Default & Termination | `emergency-assistance-right` | CONSTRAINED | RCW 59.18.410(2) |
| `edu-no-security-deposit-cap-wa` | Security Deposit | `security-deposit-cap` | RECOMMENDED | Confirmed absent (WA battery 4) |
| `edu-security-deposit-interest-wa` | Security Deposit | `security-deposit-interest` | CONSTRAINED | RCW 59.18.270 |
| `edu-security-deposit-on-sale-wa` | Security Deposit | `security-deposit-on-sale` | CONSTRAINED | RCW 59.18.270 |
| `edu-security-deposit-penalty-wa` | Security Deposit | `security-deposit-penalty` | CONSTRAINED | RCW 59.18.280(2) |
| `edu-condition-checklist-wa` | Security Deposit | `condition-inspection` | REQUIRED | RCW 59.18.260(2)(a) |
| `edu-deposit-installments-wa` | Security Deposit | `deposit-installments` | CONSTRAINED | RCW 59.18.610(2) |
| `edu-last-month-rent-wa` | Security Deposit | `deposit-last-month-rent` | RECOMMENDED | RCW 59.18.610(1) |
| `edu-deposit-escheat-wa` | Security Deposit | `deposit-escheat` | RECOMMENDED | RCW 59.18.312 |
| `edu-deposit-damage-claims-wa` | Security Deposit | `security-deposit-return` | CONSTRAINED | RCW 59.18.280(1)(b) |
| `edu-fee-in-lieu-of-deposit-wa` | Security Deposit | `fee-in-lieu-of-deposit` | CONSTRAINED | RCW 59.18.670(1)(a) |
| `edu-for-cause-eviction-wa` | Default & Termination | `for-cause-eviction` | CONSTRAINED | RCW 59.18.650(1)(a) |
| `edu-termination-notice-wa` | Default & Termination | `termination-notice` | CONSTRAINED | RCW 59.18.200(1)(a) |
| `edu-nonpayment-notice-wa` | Default & Termination | `nonpayment-notice` | CONSTRAINED | RCW 59.12.030(3) |
| `edu-cure-and-eviction-grounds-wa` | Default & Termination | `cure-and-eviction-grounds` | CONSTRAINED | RCW 59.18.650(2)(b) |
| `edu-eviction-process-wa` | Default & Termination | `eviction-process` | CONSTRAINED | RCW 59.18.365(3) |
| `edu-eviction-hardship-stay-wa` | Default & Termination | `eviction-hardship-stay` | CONSTRAINED | RCW 59.18.410(2) |
| `edu-eviction-record-sealing-wa` | Default & Termination | `eviction-record-sealing` | RECOMMENDED | RCW 59.18.410 |
| `edu-self-help-eviction-wa` | Default & Termination | `self-help-eviction` | PROHIBITED | RCW 59.18.290(1) |
| `edu-landlord-lien-wa` | Compliance & Prohibited Terms | `landlord-lien` | PROHIBITED | RCW 59.18.230(4) |
| `edu-retaliation-wa` | Compliance & Prohibited Terms | `retaliation` | PROHIBITED | RCW 59.18.240 |
| `edu-abandoned-property-wa` | Default & Termination | `abandoned-property` | CONSTRAINED | RCW 59.18.310(1) |
| `edu-abandonment-mitigation-wa` | Default & Termination | `abandonment-and-mitigation` | CONSTRAINED | RCW 59.18.310(1)(a) |
| `edu-post-eviction-property-wa` | Default & Termination | `post-eviction-property` | CONSTRAINED | RCW 59.18.312(1) |
| `edu-tenant-death-wa` | Default & Termination | `tenant-death` | CONSTRAINED | RCW 59.18.590(1)(b) |
| `edu-dv-lease-termination-wa` | Default & Termination | `dv-lease-termination` | CONSTRAINED | RCW 59.18.575(1)(a) |
| `edu-dv-eviction-protection-wa` | Compliance & Prohibited Terms | `dv-eviction-protection` | PROHIBITED | RCW 59.18.580(2) |
| `edu-dv-lockchange-wa` | Access & Entry | `dv-lockchange` | CONSTRAINED | RCW 59.18.585(1) |
| `edu-servicemember-rights-wa` | Default & Termination | `servicemember-rights` | CONSTRAINED | RCW 59.18.220(2) |
| `edu-statutory-early-termination-wa` | Default & Termination | `statutory-early-termination` | CONSTRAINED | RCW 59.18.090(1) |
| `edu-holdover-rate-wa` | Default & Termination | `holdover-rate` | RECOMMENDED | RCW 59.12.090 |
| `edu-casualty-termination-wa` | Default & Termination | `casualty-termination` | RECOMMENDED | Confirmed absent (WA battery 33) |
| `edu-criminal-activity-wa` | Default & Termination | `criminal-activity` | RECOMMENDED | RCW 59.18.130(6) |
| `edu-nuisance-wa` | Default & Termination | `nuisance` | RECOMMENDED | RCW 7.43.010(1) |
| `edu-unauthorized-occupants-wa` | Default & Termination | `unauthorized-occupant-removal` | CONSTRAINED | RCW 9A.52.105(1) |
| `edu-drug-free-housing-wa` | Default & Termination | `drug-free-housing-addendum` | CONDITIONAL | RCW 59.18.550(1) |
| `edu-foreclosure-wa` | Default & Termination | `foreclosure` | CONSTRAINED | RCW 61.24.146(1) |
| `edu-conversion-notice-wa` | Default & Termination | `conversion-notice` | CONSTRAINED | RCW 64.90.655(1)(a) |
| `edu-condemned-premises-wa` | Landlord Responsibilities | `condemned-premises-rent-bar` | CONSTRAINED | RCW 59.18.085(3)(b) |
| `edu-sale-or-management-change-wa` | Notices & General | `sale-or-management-change` | CONSTRAINED | RCW 59.18.060(16) |
| `edu-waiver-by-acceptance-wa` | Default & Termination | `waiver-by-acceptance` | RECOMMENDED | Confirmed absent (WA battery 241) |
| `edu-landlord-maintenance-wa` | Landlord Responsibilities | `landlord-maintenance` | CONSTRAINED | RCW 59.18.060(1) |
| `edu-tenant-repair-remedies-wa` | Landlord Responsibilities | `tenant-repair-remedies` | CONSTRAINED | RCW 59.18.070(1) |
| `edu-landlord-self-cure-wa` | Tenant Responsibilities | `landlord-self-cure` | CONSTRAINED | RCW 59.18.180(1) |
| `edu-tenant-statutory-duties-wa` | Tenant Responsibilities | `tenant-statutory-duties` | CONSTRAINED | RCW 59.18.130(1) |
| `edu-rules-regulations-wa` | Rules & Regulations | `rules-regulations` | CONSTRAINED | RCW 59.18.140(1) |
| `edu-tenant-repair-agreement-wa` | Landlord Responsibilities | `tenant-repair-agreement` | CONSTRAINED | RCW 59.18.060 |
| `edu-heating-wa` | Landlord Responsibilities | `heating` | CONSTRAINED | Confirmed absent (WA battery 39) |
| `edu-heat-alert-utility-wa` | Landlord Responsibilities | `utility-shutoff-statute` | PROHIBITED | RCW 59.18.060(11)(a) |
| `edu-utility-landlord-account-wa` | Landlord Responsibilities | `utility-landlord-account` | RECOMMENDED | RCW 35.21.217(2) |
| `edu-security-devices-wa` | Landlord Responsibilities | `security-devices` | CONSTRAINED | Confirmed absent (WA battery 36) |
| `edu-smart-access-wa` | Access & Entry | `smart-access` | CONSTRAINED | RCW 59.18.750 |
| `edu-alarm-duties-wa` | Building & Safety | `alarm-duties` | CONSTRAINED | RCW 43.44.110(3) |
| `edu-pest-control-wa` | Landlord Responsibilities | `bed-bug-disclosure` | CONSTRAINED | Confirmed absent (WA battery 38) |
| `edu-no-radon-disclosure-wa` | Disclosures | `radon-disclosure` | RECOMMENDED | Confirmed absent (WA battery 49) |
| `edu-lead-based-paint-wa` | Disclosures | `lead-based-paint` | CONDITIONAL | Confirmed absent (WA battery 230) |
| `edu-meth-contamination-wa` | Disclosures | `meth-disclosure` | CONSTRAINED | RCW 64.44.020 |
| `edu-no-stigma-disclosure-rule-wa` | Disclosures | `stigmatized-property` | RECOMMENDED | Confirmed absent (WA battery 54) |
| `edu-sex-offender-wa` | Default & Termination | `sex-offender-occupancy` | CONSTRAINED | Confirmed absent (WA battery 53) |
| `edu-rental-inspection-wa` | Landlord Responsibilities | `rental-inspection` | CONSTRAINED | RCW 59.18.125(1) |
| `edu-no-landlord-registration-wa` | Notices & General | `landlord-registration` | RECOMMENDED | Confirmed absent (WA battery 120) |
| `edu-no-quiet-possession-statute-wa` | Landlord Responsibilities | `quiet-possession` | RECOMMENDED | RCW 59.20.130 |
| `edu-no-camera-rule-wa` | Rules & Regulations | `tenant-security-cameras` | RECOMMENDED | Confirmed absent (WA battery 61) |
| `edu-no-ev-charging-rule-wa` | Parking & Storage | `ev-charging` | RECOMMENDED | Confirmed absent (WA battery 137) |
| `edu-no-portable-solar-rule-wa` | Rules & Regulations | `portable-solar` | RECOMMENDED | Confirmed absent (WA battery 139) |
| `edu-no-telecom-access-rule-wa` | Landlord Responsibilities | `telecom-access` | RECOMMENDED | Confirmed absent (WA battery 145) |
| `edu-towing-wa` | Parking & Storage | `towing` | CONSTRAINED | RCW 46.55.070(2) |
| `edu-water-heater-wa` | Building & Safety | `water-heater-temperature` | REQUIRED | RCW 19.27A.060(3) |
| `edu-prohibited-lease-terms-wa` | Compliance & Prohibited Terms | `prohibited-lease-terms` | PROHIBITED | RCW 59.18.230(1)(a) |
| `edu-knowing-use-penalty-wa` | Compliance & Prohibited Terms | `knowing-use-penalty` | PROHIBITED | RCW 59.18.230(3) |
| `edu-attorney-fees-wa` | Compliance & Prohibited Terms | `attorney-fees` | CONSTRAINED | RCW 4.84.330 |
| `edu-jury-waiver-wa` | Compliance & Prohibited Terms | `jury-waiver` | RECOMMENDED | RCW 59.18.230(2)(a) |
| `edu-exemption-waiver-wa` | Compliance & Prohibited Terms | `homestead-waiver` | RECOMMENDED | RCW 6.15.010 |
| `edu-no-unconscionability-statute-wa` | Compliance & Prohibited Terms | `unconscionability` | RECOMMENDED | Confirmed absent (WA battery 97) |
| `edu-consumer-protection-act-wa` | Compliance & Prohibited Terms | `consumer-protection-act` | RECOMMENDED | RCW 19.86.020 |
| `edu-no-plain-language-rule-wa` | Notices & General | `plain-language` | RECOMMENDED | Confirmed absent (WA battery 117) |
| `edu-translation-wa` | Notices & General | `translation-duty` | RECOMMENDED | RCW 59.18.057 |
| `edu-no-lease-completeness-rule-wa` | Notices & General | `lease-completeness` | RECOMMENDED | Confirmed absent (WA battery 115) |
| `edu-statute-of-frauds-wa` | Notices & General | `statute-of-frauds-lease-term` | RECOMMENDED | RCW 59.18.210 |
| `edu-lease-copy-wa` | Notices & General | `lease-copy` | CONSTRAINED | RCW 59.18.065 |
| `edu-notice-delivery-wa` | Notices & General | `notice-delivery-methods` | CONSTRAINED | RCW 59.12.040 |
| `edu-statutory-forms-wa` | Notices & General | `statutory-forms` | RECOMMENDED | RCW 59.18.057(1) |
| `edu-scope-wa` | Notices & General | `scope` | RECOMMENDED | RCW 59.18.040(1) |
| `edu-fair-housing-wa` | Compliance & Prohibited Terms | `fair-housing` | PROHIBITED | RCW 49.60.222(1) |
| `edu-immigration-status-wa` | Compliance & Prohibited Terms | `immigration-status` | PROHIBITED | RCW 49.60.222(1) |
| `edu-children-occupancy-wa` | Compliance & Prohibited Terms | `children-occupancy` | CONSTRAINED | RCW 49.60.040 |
| `edu-disability-accommodation-wa` | Compliance & Prohibited Terms | `disability-accommodation` | PROHIBITED | RCW 49.60.222(2)(b) |
| `edu-assistance-animals-wa` | Pets | `assistance-animal-accommodation` | PROHIBITED | WAC 162-38-100(3) |
| `edu-service-animal-misrepresentation-wa` | Pets | `service-animal-misrepresentation` | RECOMMENDED | RCW 49.60.214(1) |
| `edu-cannabis-wa` | Rules & Regulations | `cannabis` | RECOMMENDED | Confirmed absent (WA battery 133) |
| `edu-firearms-wa` | Rules & Regulations | `firearms` | RECOMMENDED | Confirmed absent (WA battery 134) |
| `edu-smoking-wa` | Rules & Regulations | `smoking-policy` | RECOMMENDED | RCW 70.160.020(2) |
| `edu-renters-insurance-wa` | Notices & General | `renters-insurance-rules` | RECOMMENDED | Confirmed absent (WA battery 119) |
| `edu-hoa-wa` | Rules & Regulations | `hoa` | CONSTRAINED | RCW 64.90.405 |
| `edu-subsidized-housing-notice-wa` | Notices & General | `conversion-notice` | CONDITIONAL | RCW 59.28.040 |
| `edu-no-shutdown-protection-wa` | Rent & Payment | `shutdown-rent-protection` | RECOMMENDED | Confirmed absent (WA battery 156) |
| `edu-no-tenant-organizing-rule-wa` | Compliance & Prohibited Terms | `tenant-right-to-organize` | RECOMMENDED | Confirmed absent (WA battery 143) |
| `edu-no-display-rule-wa` | Rules & Regulations | `tenant-display-rights` | RECOMMENDED | Confirmed absent (WA battery 136) |
| `edu-no-military-zone-disclosure-wa` | Disclosures | `military-air-zone-disclosure` | RECOMMENDED | Confirmed absent (WA battery 52) |
| `edu-no-tenant-rights-statement-wa` | Notices & General | `tenant-rights-statement` | RECOMMENDED | Confirmed absent (WA battery 232) |
| `edu-expedited-criminal-eviction-wa` | Default & Termination | `expedited-criminal-eviction` | CONSTRAINED | RCW 59.18.130(6) |
| `edu-no-submetering-statute-wa` | Landlord Responsibilities | `utility-submetering-disclosure` | RECOMMENDED | Confirmed absent (WA battery 146) |
| `edu-fair-housing-remedies-wa` | Compliance & Prohibited Terms | `service-animal-denial-penalty` | PROHIBITED | RCW 49.60.225(1)(a) |
| `edu-no-foreign-ownership-limit-wa` | Notices & General | `foreign-ownership` | RECOMMENDED | Confirmed absent (WA battery 123) |
| `edu-victim-confidentiality-wa` | Compliance & Prohibited Terms | `dv-confidentiality` | RECOMMENDED | RCW 59.18.575 |
| `edu-protected-class-inquiries-wa` | Compliance & Prohibited Terms | `protected-class-inquiry-ban` | PROHIBITED | RCW 49.60.222(1)(g) |
| `edu-term-change-notice-wa` | Notices & General | `term-change-notice` | CONSTRAINED | RCW 59.18.140(2) |
| `edu-no-infirmity-termination-wa` | Default & Termination | `infirmity-termination` | RECOMMENDED | Confirmed absent (WA battery 235) |
| `edu-pool-rules-wa` | Building & Safety | `pool-safety` | RECOMMENDED | WAC 246-260-010(46)(a) |
## 4. Layout and placement (rule 40)
Batteries 117 and 180-187 (plain language, type size, bold, capitals, conspicuous, separate document, prescribed forms, first page, separately acknowledged, notarized) ran over the whole corpus before drafting. No type-size, boldface, capitals or first-page rule reaches a residential lease under chapter 59.18 RCW (`edu-no-plain-language-rule-wa`): the bold-type hits are the mobile home lot park-closure statement (RCW 59.20.060(1)(g), out of scope) and procedure; the one 'separately acknowledged' rule is the fee-in-lieu nonrefundability line (RCW 59.18.670(2)(a)); the one 'notarized' rule is the arbitration condition in RCW 59.18.230(2)(h); the separate-writing rule is the tenant-death designation (RCW 59.18.590(1)(b)). Nothing competes for the same place.

| Item | Rule | Where it goes |
|---|---|---|
| Fire safety and protection notice | RCW 59.18.060(12)(a)-(c): written notice, signed by the landlord or agent and the tenant, copies to both, given when the lease is signed; items (i)-(vii) except for a single-family residence; checklist alternative for multifamily | Lease clause `fire-safety-notice-wa`, signed with the lease |
| Landlord's name and address; out-of-state landlord's county agent | RCW 59.18.060(16): a statement on the rental agreement or a notice conspicuously posted | Lease clause `landlord-disclosure-wa` |
| Indoor mold information | RCW 59.18.060(14): Department of Health information at signing, given individually or posted | Separate handout; `mold-disclosure-wa` acknowledges delivery |
| Flood and insurance disclosure | RCW 59.18.060(13): leases entered into after December 31, 2026; no vehicle named | Lease clause `flood-disclosure-wa` (Claude's choice of vehicle, §6.3) |
| Deposit withholding terms | RCW 59.18.260(1): lease in writing, stating the withholding terms | Lease clause `security-deposit-use-wa` |
| Move-in condition checklist | RCW 59.18.260(2)-(3): before any deposit, signed and dated by both, copy to the tenant | Separate checklist; `existing-condition-wa`, `edu-condition-checklist-wa` |
| Deposit receipt and depository | RCW 59.18.270: written receipt and written notice of the depository | Lease clause `deposit-depository-wa` (or a separate notice) |
| Nonrefundable fees | RCW 59.18.285: lease in writing, clearly specifying that the fee is nonrefundable | Lease clause `nonrefundable-fees-wa` |
| Fee in lieu of a deposit | RCW 59.18.670(1)(f): the disclosure 'in substantially the following form' with any lease and renewal offering the option; a nonrefundable part disclosed in the lease and separately acknowledged (RCW 59.18.670(2)(a)) | Lease clause `fee-in-lieu-of-deposit-wa`, ending with its own initial line |
| Window-unit restrictions | RCW 59.18.740(8): notify tenants in their leases | Lease clause `portable-cooling-device-wa` |
| Screening criteria and costs | RCW 59.18.257(1): before obtaining any information, in writing or by posting | Before the application; `edu-tenant-screening-wa`, `edu-application-fees-wa` |
| Rent and fee increase notice | RCW 59.18.720 form, served like an eviction notice | Separate notice; `edu-rent-increase-notice-wa` |
| Smart access privacy policy (from 2027) | RCW 59.18.755(1)-(2): made available; plain-language policy at lease signing or within five days of installation | Separate document; `edu-smart-access-wa` |
| Tenant-death designation | RCW 59.18.590(1)(b): in writing, separate from the rental agreement | Separate document; no clause (§6.1) |
| Exemption from repair duties | RCW 59.18.360: not in a standard-form lease, approved | Not offered (`edu-tenant-repair-agreement-wa`) |
| Opt-out of chapter 59.18 RCW | RCW 59.18.415: tenant's attorney approves on the face of the lease | Not offered (`edu-scope-wa`) |
| Lead-based paint (pre-1978 housing) | Federal disclosure; state renovation rules | `lead-based-paint` (tagged); `edu-lead-based-paint-wa` |

## 5. Dormant rows resolved (rule 25)
- `landlords-access-wa` (dormant, UNVERIFIED): its text allowed entry 'during normal business hours' without the date, time window and telephone number that RCW 59.18.150(6) requires, and used its own topic key. **Rewritten and activated:** two days' written notice with the statutory contents, one day for showings, emergency and abandonment entries (RCW 59.18.150); topic `landlord-entry`; supersedes `landlords-access`; CONSTRAINED; basis CONSTRAINED_TERM | SERVES_LANDLORD.
- `mold-disclosure-wa` (dormant, REQUIRED, UNVERIFIED): described a Department of Health notice of 'respective responsibilities' that the statute doesn't require and used its own topic key. **Rewritten and activated** as an acknowledgment that the Department of Health's mold information was given at signing (RCW 59.18.060(14)); RECOMMENDED, because the information may instead be posted; topic `mold-disclosure`; basis SERVES_LANDLORD.
- The blank-states parent `security-deposit-return` is answered by `security-deposit-return-wa` (rule 25 family).

## 6. Decisions

### 6.1 Optional clauses found (rule 54)
**Offered as new WA clauses (5):**
1. `fee-in-lieu-of-deposit-wa`: a monthly fee instead of a deposit, with the RCW 59.18.670 disclosure form verbatim and the separate acknowledgment of any nonrefundable part.
2. `tenant-caused-damage-wa`: the rule 54t answer; it restates RCW 59.18.060's final paragraph (no landlord repair duty and no tenant remedy for a condition the tenant, family, invitee or person under the tenant's control caused) and keeps rent running, so it waives nothing.
3. `lease-end-continuation-wa`: the RCW 59.18.650(1)(b) option for a first term of six to 12 months (month-to-month afterward unless the landlord gives at least 60 days' notice before the first term ends).
4. `fixed-term-end-without-cause-wa`: the RCW 59.18.650(1)(c) option for a first term of 12 months or more, or every term at least six months, never month-to-month (ends at the term on at least 60 days' notice).
5. `portable-cooling-device-wa`: the lease notice RCW 59.18.740(8) requires if the landlord restricts window-mounted units (CONDITIONAL).
**Lawful or doubtful options declined, each with an education row (8):** a premium holdover rate (`edu-holdover-rate-wa`: a holdover arises only after a just-cause ending, often for nonpayment where the tenant can still be reinstated and late fees in judgment are capped, so a premium could be read as a penalty or a second late charge); a crime-free lease clause (`edu-criminal-activity-wa`: the statute already makes the conduct a tenant duty and a cause, a broader lease definition could reach conduct the statute protects, and city programs may not bar renting solely for criminal history); landlord termination after a casualty (`edu-casualty-termination-wa`: it would add a cause RCW 59.18.650 doesn't list); a jury waiver (`edu-jury-waiver-wa`); a waiver of exemptions or homestead (`edu-exemption-waiver-wa`); the RCW 59.18.415 opt-out (`edu-scope-wa`: needs the tenant's attorney's approval on the face of the lease); an RCW 59.18.360 exemption agreement (`edu-tenant-repair-agreement-wa`: can't be in a standard-form lease); a contractual interest rate on unpaid amounts (`edu-unpaid-damages-interest-wa`: not settled by statute, and a charge working like a late fee within five days is void).
**Outside the lease by statute (1):** the tenant-death designation must be separate from the rental agreement (RCW 59.18.590(1)(b)), so the library offers no designation clause (`edu-tenant-death-wa`).
**Barred:** lockout or utility cutoff for unpaid rent (`edu-self-help-eviction-wa`), liens or distress (`edu-landlord-lien-wa`), every RCW 59.18.230(2) term (`edu-prohibited-lease-terms-wa`), late fees within five days, electronic-only payment.

### 6.2 Questions asked of Taylor (rule 76)
None. Every call was legal or drafting and within Claude's remit; the reasoning is in §6.3.

### 6.3 Drafting and legal decisions made by Claude (recorded, not asked)
1. **Fixed terms and just cause.** A fixed term becomes month-to-month unless the lease uses one of the two RCW 59.18.650(1)(b)-(c) options; the library offers each as its own optional clause under the shared `automatic-renewal` topic, and the shared holdover, surrender and early-termination clauses are replaced (§2.2).
2. **Holdover.** `holdover-wa` charges daily rent at the Monthly Rent for a tenant who stays after a lawful end; no premium (§6.1).
3. **Flood disclosure in the lease.** RCW 59.18.060(13) names no vehicle; the lease carries the three prescribed items so the signed lease records delivery.
4. **Mold.** The acknowledgment is RECOMMENDED, not REQUIRED: the information may be posted instead.
5. **Deposit interest.** `deposit-depository-wa` keeps the statutory default (interest to the landlord unless agreed otherwise in writing) on purpose (rule 50).
6. **Late-fee grace period.** `late-fee-wa` states the five-day bar in its own sentence, so a builder grace period below five days can't make the clause a prohibited term; the builder should still enforce a minimum of five (§10).
7. **Laws of 2025, ch. 206.** The class-action and nondisclosure bans apply by their terms to leases entered into or renewed on or after July 27, 2025; how a month-to-month tenancy 'renews' is not stated, so the rows apply them to every tenancy.
8. **Purchasers at trustee's sales.** How RCW 61.24.146's 60-day notice meets the just-cause rule is not settled by the sections read; `edu-foreclosure-wa` says so and tells landlords to get advice.
9. **Recurring fees are rent.** RCW 59.18.030 makes recurring charges for use and occupancy rent, so a new or higher recurring fee needs the increase notice and counts against the limit (`edu-term-change-notice-wa`, `edu-fees-as-rent-wa`).
10. **Pet fees.** No cap for chapter 59.18 tenancies; the mobile home lot cap (RCW 59.20.170) is stated as an exception (`edu-pet-fees-wa`), after round 1 found that the first battery could not have found it.
11. **Assistance animals.** `assistance-animal-accommodation-wa` replaces the shared clause with Washington's standards (WAC 162-38-105; RCW 49.60.222).
12. **Guests.** The shared `guest-policy` is tagged; its WA note separates chapter 59.18 tenancies from mobile home lots, where the live-in care provider rule (RCW 59.20.145) limits the clause.
13. **Entry.** `landlords-access-wa` follows RCW 59.18.150(6) closely (two days' notice with the date, time window and telephone number; one day for showings).
14. **Unsettled points labelled as Claude's reading** in the rows: deposit escheat timing (`edu-deposit-escheat-wa`), consumer-debt judgment interest applied to rent (`edu-unpaid-damages-interest-wa`), lost rent after tenant-caused damage (`tenant-caused-damage-wa`), a raised existing fee needing the 90-day notice (`edu-term-change-notice-wa`).

## 7. Open items (none blocking)
1. **Local court rules:** six rule sets hosted off the courts site were not fetched: Benton and Franklin (shared), Lewis, Spokane, Thurston, Whatcom and Whitman. Boundary: the state court rules and the 28 local rule PDFs on courts.wa.gov (`edu-eviction-process-wa`).
2. **Municipal ordinances** (Seattle, Tacoma, Spokane and others): flagged, not read (rule 3).
3. **Case law:** not searched; each question is labelled in its row (§1.4).
4. **Federal law:** the CARES Act 30-day notice, the Protecting Tenants at Foreclosure Act, the federal lead rule text (42 U.S.C. 4852d; 40 CFR 745), FCC rules and federal fair housing were not read; rows say so where they matter.
5. **State sections named but not read:** RCW 35.21.290 and 35.67.200 (municipal utility liens), RCW 19.16.250 (collection agency practices), RCW 6.01.060, chapter 162-36 WAC (older persons), chapter 64.37 RCW (short-term rentals) beyond the battery hits, chapter 9.73 RCW (recording) beyond the battery hits, RCW 69.51A.210 (home grow) beyond the battery, chapter 19.182 RCW beyond its screening references, chapter 246-260 WAC beyond the cited sections.
6. **Canvass boundaries (§18.2):** chapter 60.04 RCW (construction liens and tenant improvements), chapter 35.80 RCW (unfit dwellings and receivership) and the drinking water system rules (chapters 246-290 and 246-291 WAC, for a well serving several rental connections) were not read; topics marked 'Not applicable' that say 'not searched for Washington' rest on another state's own law and were not searched here (`subsidy-late-fee`, `utility-deposit-return`, `senior-housing-work-card`, `law-enforcement-cooperation`, `unbundled-parking`, `certificate-of-occupancy-disclosure`, `defective-drywall-disclosure`, `employee-screening`).
7. **RCW 59.12.190** (relief against forfeiture on a petition within 30 days after judgment) applies to residential tenancies through RCW 59.18.420 as far as consistent; how it adds to the RCW 59.18.410 reinstatement and stay rules was not resolved (`edu-eviction-hardship-stay-wa` states the RCW 59.18.410 rules).
8. **Penalty doctrine** for late fees, early-termination fees and holdover charges: not read (§1.4).

## 8. Integrity checks on the delta
Run by `work/checks.py`, `work/assemble.py` and the log builder on the delivered file:
- PASS  header identical to master
- PASS  file ends with CRLF
- PASS  17 columns every row
- PASS  ids unique in delta
- PASS  new ids not in master [154]
- PASS  groups valid
- PASS  clause groups exclude education-only groups
- PASS  rule_type valid
- PASS  basis: WA clauses carry a basis, education blank
- PASS  supersedes points at existing rows
- PASS  supersedes targets not tagged WA
- PASS  WA rows: states WA, active, VERIFIED, dates 2026-10-03
- PASS  WA notes start WA:
- PASS  tagged rows: states = master + ;WA
- PASS  tagged rows: only states/notes/last_checked changed
- PASS  tagged notes: master notes kept, WA addition appended
- PASS  rule 15 statement on every WA note
- PASS  no unresolved battery placeholders
- PASS  no § sign with RCW or WAC
- PASS  every backtick pointer in WA text resolves to a row or topic key
- PASS  variables are builder variables or listed in §10 [new: deposit_bank_address, deposit_bank_name]
- Counts: 196 rows (40 tagged, 2 dormant rewritten, 154 new); merged with the master 3,329 rows, 3,210 active; WA active 68 lease clauses and 128 education rows; every other state's active count unchanged.
- Quotes: every single-quoted passage registered through `Q()` (245) is checked against the saved text of its cited section and carries its full citation within the preceding 160 characters; 0 mismatches. A generic scan of all single-quoted text flags 4 passages, all false positives from apostrophe pairing (a possessive opening a span), each read by hand.
- Citations: every cited RCW and WAC section exists in the saved corpus except RCW 30.22.041, which RCW 59.18.270 still cites with a reviser's asterisk (recodified; §10).
- Coverage pointers (rule 63): every backtick reference in this log to a row is checked against the merged library; references to rows not tagged WA are provenance (for example 'replaced by'), not coverage claims.
- Basis (rule 79): every WA lease clause records a basis; every tagged row's WA note names its controlling text or absence battery.

## 9. Propagation notes (rule 62)
None. No shared row's text was edited; the 40 tagged rows changed only by adding `WA` to `states`, an appended `WA:` note and `last_checked`.

## 10. Findings for other states or the product (flagged, not fixed)
1. **Stale pointers in the compiled RCW (legal watch, revisor):** RCW 59.18.070 points to '*RCW 59.18.060(14)', now (16); RCW 59.18.100 points to RCW 59.18.060 subsections (9) and (14) that moved when the section was renumbered, and to '**RCW 60.04.010 and 60.04.040' (repealed); RCW 59.18.270 points to '*RCW 30.22.041', recodified (RCW 30A.22.041); RCW 59.18.320 points to '*RCW 59.18.230(2)(e)', now (2)(g) after Laws of 2025, ch. 206; RCW 59.18.085 and 59.18.440 point to '*RCW 59.18.040(3)', now (4); RCW 59.18.435 points to '*RCW 64.90.095', recodified (RCW 64.90.370); RCW 59.18.610(6) points to '*RCW 43.31.605(1)(c)', now (1)(b); RCW 59.18.630 points to '*RCW 59.18.660' (expired July 1, 2023) and '**RCW 43.31.605(1)(d)', now (1)(c); RCW 59.18.570(4) prints '59.l8.030' (a typo). The rows cite the current subsections.
2. **Carbon monoxide alarms:** RCW 19.27.530(4) directs the building code council to make CO alarm maintenance the tenant's responsibility, but no WAC 51 rule for ordinary dwellings states it (WAC 296-150M-0306(8)(b) does, for manufactured homes); `fire-safety-notice-wa` and `edu-alarm-duties-wa` rely on the statute.
3. **Builder inputs:** `{{renewal_rent_increase_cap}}` must stay within RCW 59.18.700 (no increase in the first 12 months; the annual limit); `{{late_fee_grace_days}}` must be at least 5 (RCW 59.18.170(2), 59.18.230(2)(i)). **New variables:** `{{deposit_bank_name}}` and `{{deposit_bank_address}}` (`deposit-depository-wa`).
4. **Builder layout:** `fee-in-lieu-of-deposit-wa` ends with a separate initial line for the nonrefundable part (RCW 59.18.670(2)(a)); `fire-safety-notice-wa` must be signed by both parties (signing the lease does it); the checklist, screening notice, increase notice, smart access policy and death designation are separate documents (§4).
5. **Same-topic options:** `lease-end-continuation-wa` and `fixed-term-end-without-cause-wa` share `automatic-renewal` with no `choice_group`; their eligibility differs, but a lease should use at most one. Consider a choice group at sync.
6. **New topic keys:** `portable-cooling-device` (`portable-cooling-device-wa`), `lease-type-parity` (`edu-lease-type-parity-wa`), `smart-access` (`edu-smart-access-wa`).
7. **Legal watch dates:** 2027-01-01 (smart access, RCW 59.18.750-59.18.760, and the RCW 59.18.030 version; flood disclosure for leases entered into after 2026-12-31); 2028-01-01 (RCW 59.18.200 and 59.18.650 versions; chapters 64.34 and 64.38 RCW give way to chapter 64.90 RCW for older communities, including the association display rules in RCW 64.38.033-64.38.034); 2040-07-01 (RCW 59.18.700-59.18.720 expire, RCW 59.18.700(8)).
8. **Battery label:** the WA battery records' corpus label says 52,036 RCW sections; the corpus holds 52,061 (§1.3). Labels should be generated from the index.
9. **Citation format gap:** the kickoff has no format for court rules; rows write `SPR 98.24W`, `King County LCR 40`, `SCLCR 8(a)(1)(ix)`.
10. **Real lease:** the Seattle Housing Authority lease (§15) is HUD-governed public housing and a weaker lead; its 'landlord liable only for gross negligence' term would be void under RCW 59.18.230(2)(f) for a private landlord.
11. **Mobile home lots:** several shared clauses tagged WA work differently on mobile home lots under chapter 59.20 RCW (guests, pet fees, rules, termination); the notes flag where; lots are out of the library's scope.

## 11. Deliverables
- `lease-clauses-WA-delta.csv` (196 rows, sha256 9c74db792580694adfe122d45ceddef56fcc07e2684c56e56c4421fb24ac182b) and this log, sent to Taylor in this chat.
- Saved in Taylor's Downloads folder (approved earlier in this chat): the RCW, WAC and Constitution corpora, the title 59 check copy, the session laws, the budget excerpt, the court rules and the real lease; hashes in `sources/registry.tsv`.

## 12. Kickoff leads — what each turned out to be
1. **Dated versions:** RCW 59.18.030 (2027, Laws of 2026, ch. 55: smart access definitions), RCW 59.18.200 and 59.18.650 (2028, Laws of 2024, ch. 321: common interest community references only). Rows state the current text and flag the dates (§1.2, §10).
2. **Rent-increase limit:** RCW 59.18.700-59.18.720 (`edu-rent-increase-limit-wa`, `edu-rent-increase-notice-wa`, `edu-lease-type-parity-wa`, `edu-term-change-notice-wa`); recurring fees count as rent; exemptions claimed in the notice; RCW 59.18.140(3) notice periods; expires July 1, 2040.
3. **Just cause:** RCW 59.18.650 (`edu-for-cause-eviction-wa`); a fixed term becomes month-to-month unless one of the two (1)(b)-(c) options is in the lease (`lease-end-continuation-wa`, `fixed-term-end-without-cause-wa`); the shared end-of-term, holdover, surrender and early-termination clauses were replaced (§2.2).
4. **Fees and payments:** RCW 59.18.170(2) and 59.18.230(2)(i) (`late-fee-wa`, `edu-late-fee-wa`; no other late-fee limit for chapter 59.18 tenancies); RCW 59.18.283 (`application-of-payments-wa`, `default-by-tenant-wa`, `edu-fees-as-rent-wa`); RCW 59.18.063 (`acceptable-payment-methods-wa`, `returned-payments-wa`, `edu-rent-receipts-wa`).
5. **Deposits:** RCW 59.18.260 (`security-deposit-use-wa`, `edu-condition-checklist-wa`), 59.18.270 (`deposit-depository-wa`), 59.18.280 (`security-deposit-return-wa`, `edu-deposit-damage-claims-wa`, `edu-security-deposit-penalty-wa`), 59.18.285 (`nonrefundable-fees-wa`), 59.18.253 (`edu-holding-deposit-wa`), 59.18.610 (`edu-deposit-installments-wa`), 59.18.670 (`fee-in-lieu-of-deposit-wa`, `edu-fee-in-lieu-of-deposit-wa`).
6. **Notices and forms:** RCW 59.18.057 (`edu-nonpayment-notice-wa`), 59.18.055 and 59.12.040 (`edu-notice-delivery-wa`), 59.18.150(6) (`landlords-access-wa`, which replaces both the shared clause and the dormant row's text).
7. **Void terms:** RCW 59.18.230 read whole and every shared clause screened (§2.2); `edu-prohibited-lease-terms-wa`, `edu-knowing-use-penalty-wa`.
8. **Scope:** RCW 59.18.040 (`edu-scope-wa`); the RCW 59.18.415 opt-out is education only, because the library can't supply the tenant's attorney's approval (§6.1).
9. **Disclosures:** RCW 59.18.060(14) mold (`mold-disclosure-wa`), 59.18.257 screening (`edu-tenant-screening-wa`, `edu-application-fees-wa`), 59.18.255 source of income (`edu-source-of-income-wa`); also the fire safety notice, landlord identity and flood disclosure (§4).
10. **Newer sections:** smart access (`edu-smart-access-wa`), portable cooling (`portable-cooling-device-wa`, `common-area-use-wa`), victim protections (`edu-dv-lease-termination-wa`, `edu-dv-eviction-protection-wa`, `edu-dv-lockchange-wa`, `edu-victim-confidentiality-wa`), tenant death (`edu-tenant-death-wa`), right to counsel (`edu-eviction-process-wa`).
11. **Eviction procedure:** chapter 59.12 RCW and RCW 59.18.363-59.18.412 read whole (§14); reinstatement and stays (`edu-eviction-hardship-stay-wa`); no statewide pre-filing step, but Skagit County's local rule requires a pre-filing certification to Skagit Legal Aid and translated notices (`edu-eviction-process-wa`); SPR 98.24W is the only state court rule on unlawful detainer.
12. **Local rules:** flagged, not resolved; the state bars local regulation of the amount of rent (`edu-rent-increase-limit-wa`) and limits rental inspection programs (`edu-rental-inspection-wa`).
## 13. Independent check
Separate general-purpose agents, which had not seen the drafting, checked the rows against the saved sources only (instructions `check/HOWTO.md`; batch files `check/batch-1.md` to `-5.md`, `check/round2-*.md`, `check/round3.md` to `round14.md`; reports saved in `check/reports/`). Each verified every quote, pinpoint, number and qualifier against the full section, and asked whether each cited battery could have found what the row says is absent.
- **First launch (2026-10-03):** the three round-1 agents stopped at the account's session limit before reporting; nothing from them was used. Relaunched as five batches after Taylor's 'Resume' (2026-10-04).
- **Round 1 (all 195 rows then in the delta, five batches of 39):** 4 ERROR, 63 FIX, 48 NOTE. ERRORs: `edu-heat-alert-utility-wa` implied a lease could authorize a landlord's shutoff for nonpayment (RCW 59.18.300 has no such exception); `edu-pet-fees-wa` claimed no pet-fee cap anywhere, but battery 26 could not have found the mobile home lot cap (RCW 59.20.170), so batteries 246 and 248 were run and the row limited to chapter 59.18 tenancies; `pet-policy-wa` cited RCW 49.60.222(2)(c) (design and construction) for assistance animals, corrected to (1) and (2)(b); `edu-termination-notice-wa` said a landlord may end a tenancy only for a just cause, wrong for the fixed-term options in RCW 59.18.650(1)(b)-(c). FIXes included absence batteries that could not match the rule's own vocabulary (rent due date, delivery of possession, acceptance and waiver, locks, foreign ownership, jury waiver, blanks; batteries 240-245), the service conditions in RCW 59.12.040, the weatherization exception to the CPA (RCW 70A.35.060), deposit escheat (RCW 63.30.040), the federally assisted housing notice (RCW 59.28.030-59.28.090), the COVID-period screening bars (RCW 59.18.625), the utility commission resale rules (WAC 480-90-108(5), 480-100-108(5)) and the victim lock-change rules (RCW 59.18.575(3)-(4)). All ERRORs and FIXes applied.
- **Round 2 (99 rows edited, three parts of 33):** 0 ERROR, 17 FIX, 15 NOTE; applied.
- **Round 3 (28 rows):** 0 ERROR, 6 FIX, 3 NOTE; applied.
- **Round 4 (10 rows):** 0 ERROR, 2 FIX (wrongful-eviction damages trigger and noneconomic element; the no-children policy cites), 5 NOTE; applied.
- **Round 5 (5 rows):** 0 ERROR, 2 FIX (the fixed-term bar also covers change of use; the servicemember rule's orders and family members), 2 NOTE; applied.
- **Round 6 (4 rows):** 0 ERROR, 1 FIX (`guest-policy`: RCW 49.60.222(4) does address guest rules); applied.
- **Round 7 (1 row, `guest-policy`):** 3 FIX, 1 NOTE. The NOTE found that the checkers' section tool cut every section at 6,000 characters; the tool was fixed and round 8 re-checked every row whose cited text lay past that point.
- **Round 8 (tail-text check of 38 rows, plus `guest-policy`):** 7 findings marked ERROR|FIX, treated as FIX: the substantial-breach wording and the landlord-ended exception in `guest-policy`; the RCW 59.18.575(4) lock-change right overstated in `keys`, `no-alterations` and `edu-dv-lease-termination-wa`; the pool rule's definition and partial exemption in `edu-pool-rules-wa`. Applied.
- **Round 9 (5 rows):** 1 ERROR (`edu-pool-rules-wa` left out the single-family and owner-occupied duplex exclusions, RCW 70.90.250(1), WAC 246-260-001(2)), 6 FIX; applied.
- **Round 10 (4 rows):** 0 ERROR, 2 FIX (entry limit after a lock-change notice; the care provider's conditions under RCW 59.20.145); applied.
- **Round 11 (2 rows):** 0 ERROR, 6 FIX, 5 NOTE (rent for the month of quitting and the RCW 59.18.200(1) exception; lawful deductions; the mitigation-program bar limited to property damage; rent continuing after a lock-change notice; the care provider's duties); FIXes and most NOTEs applied.
- **Round 12 (2 rows):** 0 ERROR, 2 FIX (`guest-policy`: chapter 59.18 rules don't reach mobile home lots, which follow RCW 59.20.040, 59.20.045(6) and 59.20.080(1)(a); the RCW 59.18.650(2)(n) timing); applied. No findings for `edu-dv-lease-termination-wa`.
- **Round 13 (1 row, `guest-policy`):** 0 ERROR, 1 FIX (mandatory mediation under RCW 59.20.080(2)), 1 NOTE (fair housing exemptions); both applied.
- **Round 14 (2 rows: `guest-policy` and the new `edu-water-heater-wa`):** 0 ERROR, 0 FIX, 1 NOTE (the mediation defense belongs to the landlord's failure to take part in good faith only); applied. A separate agent checked this log the same day against the saved sources (statements of law, counts, §18.2 absences and pointers): 0 ERROR, 14 FIX, 5 NOTE, all applied, including one row NOTE (`edu-no-security-deposit-cap-wa` now flags the mobile home lot cap, RCW 59.20.170(1)).
- **Round 15 (2 rows: the two edits after round 14):** 0 ERROR, 1 FIX (the deposit-cap absence in `edu-no-security-deposit-cap-wa`, its title, and the same absence line in `security-deposit-use-wa` needed the chapter 59.18 RCW scope); applied in the checker's own suggested wording, which adds only that scope, so no further round was run.
- **Battery citations** are generated from the saved logs; the checkers verified battery numbers and could see each battery's pattern (`work/bh.py`).

## 14. Statute walk (gap-discovery source 1)
**Chapter 59.18 RCW (98 sections, with the dated versions of RCW 59.18.030, 59.18.200 and 59.18.650)** read whole and diffed against every citation in the WA rows (ranges counted): cited except the following, each with its reason:
- RCW 59.18.010: short title.
- RCW 59.18.020: good-faith obligation on every duty and remedy (no lease consequence beyond what every row assumes).
- RCW 59.18.050: court jurisdiction.
- RCW 59.18.363: unlawful detainer after a distressed-home conveyance (procedure, former owner-occupants).
- RCW 59.18.368: housing court commissioners (Laws of 2025, ch. 268; court administration).
- RCW 59.18.369: housing court commissioner duties (court administration).
- RCW 59.18.412: remote hearings in unlawful detainer (court procedure).
- RCW 59.18.430: applicability to prior and existing leases (historical).
- RCW 59.18.435: proprietary leases (cooperatives; out of scope).
- RCW 59.18.450: relocation payments not counted as income (no landlord duty).
- RCW 59.18.500: gang-activity findings (the operative sections .510 and .180(5) are cited).
- RCW 59.18.620: definitions for the COVID-period sections .625 and .630.
- RCW 59.18.630: COVID-period repayment plans (historical; stale pointer, §10).
- RCW 59.18.900: severability.
- RCW 59.18.911: effective date, 1989.
- RCW 59.18.912: domestic partnership construction.

**Chapter 59.12 RCW (27 sections)** read whole; cited where it governs residential tenancies through RCW 59.18.420 (RCW 59.12.030, 59.12.040, 59.12.130; RCW 59.12.090, 59.12.100, 59.12.121 and 59.12.170 cited as the sections RCW 59.18.420 excludes). Uncited, procedure with no lease or landlord-duty consequence beyond what `edu-eviction-process-wa` states: RCW 59.12.010, .020 (definitions of forcible entry and detainer), .032 (deed-of-trust purchasers), .035 (agricultural land), .050 (jurisdiction), .060 (parties defendant), .070, .080, .085 (complaint and summons, replaced for residential tenancies by RCW 59.18.365), .110 (bond), .120 (default), .140-.160 (proof and amendments), .180 (rules of practice), .190 (relief against forfeiture, §7), .200-.220 (appeal and stay bonds), .230 (forcible entry penalty).
**Chapter 59.04 RCW** read whole: it does not apply to rental agreements under chapter 59.18 RCW (RCW 59.04.900; `edu-scope-wa`). **Chapter 59.28 RCW** (federally assisted housing) read and cited in `edu-subsidized-housing-notice-wa`. **Chapter 59.20 RCW** (mobile home lots) read only where a shared clause or row flags a difference (RCW 59.20.040, 59.20.045, 59.20.060, 59.20.070, 59.20.080, 59.20.130, 59.20.145, 59.20.170). **Chapter 59.24 RCW** (security deposit guarantee program) appeared in battery 258's hits; no lease consequence.
**One level down:** each cited chapter 59.18 section was read whole and its subsections checked against the rows (the round-8 tail check covered the long sections); uncited subsections are definitions, procedure or historical text. **Corrected during the work:** an early draft recorded no landlord self-cure rule; RCW 59.18.180 provides one (`edu-landlord-self-cure-wa`).

## 15. Real-lease comparison (gap-discovery source 2)
**Lease:** Seattle Housing Authority, Subsidized Housing Dwelling Lease (form SHA-50, revised 2024; published as 'Draft_March_2024'), saved PDF and text (§1.1); mapped section by section by a separate agent (`work/agents/sha-lease-agent.md`) and reviewed. **Why weaker:** no free Washington realtor or apartment-association form was found; this is a single housing authority's lease for HUD-governed public and subsidized housing, so many terms come from federal rules (24 CFR 966.4, grievance procedures, income reporting, community service), and the document shows editing (broken internal cross-references). It is a lead about wording only; no text is reproduced here.

### 15.1 Provision map
| SHA section (paraphrased) | Library answer for Washington | Lead? |
|---|---|---|
| Preamble: term, renewal and rent changes | HUD rules; `edu-rent-increase-notice-wa` for private landlords | No |
| I: residence only; no subletting; guests 14 days within 3 months; absences | `residential-use-only`, `no-sublet-assign`, `guest-policy`, `extended-absence-notice-ks` (tagged) | No |
| II: condition checklist; no promises to repair | `existing-condition-wa`, `edu-condition-checklist-wa` (RCW 59.18.260) | Confirms the checklist |
| III: rent due on the 1st; order of payments; late fee after the 7th; NSF fee and certified funds; prior-lease balances | `rent-payment`, `application-of-payments-wa` (RCW 59.18.283(1)), `late-fee-wa`, `returned-payments-wa`; prior balances can't condition possession (`edu-fees-as-rent-wa`) | Prior-balance term checked; no new row |
| IV-VI: other charges; utilities as rent; deposit, installments, depository; utility allowance | `edu-fees-as-rent-wa`, `security-deposit-use-wa`, `edu-deposit-installments-wa`, `deposit-depository-wa` | No |
| VIII.A: photo identification; trespass of guests | No Washington rule on identifying guests (battery 212); trespass `edu-unauthorized-occupants-wa` | Searched; no row |
| VIII: tenant duties; plumbing, fire doors, sprinklers, false-alarm fees; no smoking; garbage; alterations; pets and assistance animals | `edu-tenant-statutory-duties-wa`, `fire-safety-notice-wa`, `smoking-policy`, `no-alterations`, `pet-policy-wa`, `assistance-animal-accommodation-wa` | No |
| IX-X: notices; entry on 2 days' notice; locks | `notices`, `landlords-access-wa` (RCW 59.18.150(6)), `keys` | Confirms two days |
| XI-XII: maintenance; casualty, disposal of contaminated contents | `edu-landlord-maintenance-wa`, `edu-casualty-termination-wa`; no rule on disposing of contaminated contents (battery 208) | Searched; no row |
| XIII: termination: tenant 20 days; grounds; abandonment and a 45-day property notice; death of tenant; uninhabitable over 30 days | `edu-termination-notice-wa`, `edu-for-cause-eviction-wa`, `edu-abandoned-property-wa`, `edu-tenant-death-wa` (the lease's '14 days' differs from RCW 59.18.595's 15) | Currency probe: the lease predates the 2023 tenant-death amendments |
| XIV: VAWA lease bifurcation | Federal; no Washington bifurcation statute (battery 206; `edu-dv-eviction-protection-wa`) | Searched; no row |
| XVI-XVIII: bans and trespass; every term material | `edu-cure-and-eviction-grounds-wa` (a breach must be substantial and of a material term) | No |
| XX: landlord liable only for gross negligence | Void for a private landlord (RCW 59.18.230(2)(f)); `edu-prohibited-lease-terms-wa` | Not used |
| Attachments: checklist, house rules, Seattle renter handout, mold pamphlet, voter registration | `edu-rules-regulations-wa`, `mold-disclosure-wa`; Seattle handout local (flagged); voter registration (battery 207, no state lease rule) | No |

### 15.2 What it produced
No new row. It confirmed the two-day entry notice, the checklist, rent-first payment application and the mold pamphlet at signing, and prompted the guest-identification, contaminated-contents and lease-bifurcation searches (all absent). Its gross-negligence liability term would be void for a private Washington landlord.

## 16. Landlord-scenario screen (gap-discovery source 3)
75 scenarios, Claude-generated from application to move-out, sale and foreclosure (the AZ §18.1 model) plus Washington-specific ones (the rent-increase limit, fee in lieu, smart access, portable cooling, the just-cause options, reinstatement), run against the final rows:
1. Applicant asked for a screening fee → `edu-application-fees-wa`, `edu-tenant-screening-wa`
2. Landlord wants a holding deposit to take the unit off the market → `edu-holding-deposit-wa`
3. Applicant pays with a housing voucher or other assistance → `edu-source-of-income-wa`
4. Landlord asks about immigration status or citizenship → `edu-immigration-status-wa`, `edu-protected-class-inquiries-wa`
5. Applicant has an eviction or criminal record → `edu-tenant-screening-wa`, `edu-eviction-record-sealing-wa`
6. Application denied or approved with conditions (higher deposit, guarantor) → `edu-tenant-screening-wa`, `edu-statutory-forms-wa`
7. Family with children applies; landlord wants an adults-only building → `edu-children-occupancy-wa`, `edu-fair-housing-wa`
8. ESA or service-animal request with a no-pet policy → `assistance-animal-accommodation-wa`, `edu-assistance-animals-wa`, `edu-service-animal-misrepresentation-wa`
9. Disabled tenant asks to install grab bars → `edu-disability-accommodation-wa`
10. Owner lives out of state → `landlord-disclosure-wa`
11. What must be given or disclosed at signing → `fire-safety-notice-wa`, `mold-disclosure-wa`, `flood-disclosure-wa`, `security-deposit-use-wa`, `deposit-depository-wa`, `nonrefundable-fees-wa`, `edu-condition-checklist-wa` (§4)
12. Lease signed electronically → `electronic-signatures` (tagged)
13. Tenant asks for a copy of the signed lease → `edu-lease-copy-wa`
14. Deposit of two months' rent plus a pet deposit → `edu-no-security-deposit-cap-wa`, `edu-pet-fees-wa`, `pet-policy-wa`
15. Tenant asks to pay the deposit in installments → `edu-deposit-installments-wa`, `due-at-signing-wa`
16. Landlord offers a monthly fee instead of a deposit → `fee-in-lieu-of-deposit-wa`, `edu-fee-in-lieu-of-deposit-wa`
17. Nonrefundable cleaning fee → `nonrefundable-fees-wa`
18. Last month's rent collected up front → `edu-last-month-rent-wa`
19. Where to hold the deposit; who keeps the interest → `deposit-depository-wa`, `edu-security-deposit-interest-wa`
20. Move-in condition checklist → `existing-condition-wa`, `edu-condition-checklist-wa`
21. Rent due date; tenant on a monthly benefit asks to move it → `rent-payment` (tagged), `edu-rent-due-date-change-wa`
22. Late fee amount and grace period → `late-fee-wa`, `edu-late-fee-wa`
23. Tenant pays in cash; wants a receipt → `edu-rent-receipts-wa`
24. Rent check bounces → `returned-payments-wa`, `edu-returned-payments-wa`
25. Landlord wants rent by electronic payment only → `acceptable-payment-methods-wa`, `edu-prohibited-lease-terms-wa`
26. Partial payment: what gets paid first → `application-of-payments-wa`, `edu-fees-as-rent-wa`
27. Raising the rent at renewal or mid-tenancy → `edu-rent-increase-limit-wa`, `edu-rent-increase-notice-wa`, `edu-term-change-notice-wa`
28. Adding or raising a parking or pet fee mid-lease → `edu-term-change-notice-wa`, `edu-fees-as-rent-wa`
29. Offering a free month (concession) → `edu-rent-concession-wa`
30. Different rent for month-to-month and fixed-term leases → `edu-lease-type-parity-wa`
31. Charging interest on unpaid rent or damages → `edu-unpaid-damages-interest-wa`
32. Entering to show the unit or do repairs → `landlords-access-wa`
33. Tenant reports no heat or hot water → `edu-heating-wa`, `edu-tenant-repair-remedies-wa`
34. Tenant wants to repair and deduct → `edu-tenant-repair-remedies-wa`
35. Tenant-caused damage makes the unit unlivable → `tenant-caused-damage-wa`, `edu-landlord-self-cure-wa`
36. Fire or casualty damage → `edu-casualty-termination-wa`
37. Mold, pests or bed bugs → `mold-disclosure-wa`, `edu-pest-control-wa`
38. Smoke and CO alarms; who replaces batteries → `fire-safety-notice-wa`, `edu-alarm-duties-wa`
39. Setting the water heater before a new tenant moves in → `edu-water-heater-wa` (found by this canvass, §18)
40. Tenant wants a window air conditioner → `portable-cooling-device-wa`, `common-area-use-wa`
41. Smart lock or app entry → `edu-smart-access-wa`
42. Tenant changes the locks → `keys` (tagged), `edu-security-devices-wa`, `edu-dv-lockchange-wa`
43. Guest staying for weeks; unauthorized occupant → `guest-policy` (tagged), `permitted-occupants` (tagged), `edu-unauthorized-occupants-wa`
44. Tenant wants to sublet or list the unit short-term → `no-sublet-assign` (tagged)
45. Smoking or cannabis in the unit → `smoking-policy` (tagged), `edu-smoking-wa`, `edu-cannabis-wa`
46. Firearms in the unit → `edu-firearms-wa`
47. Tenant parks a vehicle in someone else's space; towing → `edu-towing-wa`, `parking-vehicle-rules` (tagged)
48. HOA fines the owner for the tenant's conduct → `hoa-compliance` (tagged), `edu-hoa-wa`
49. New house rules mid-lease → `edu-rules-regulations-wa`
50. Tenant complains to the city, then the landlord raises rent → `edu-retaliation-wa`
51. Rent unpaid: the notice to serve → `edu-nonpayment-notice-wa`, `edu-notice-delivery-wa`, `edu-statutory-forms-wa`
52. Rental assistance pledge arrives → `edu-emergency-assistance-right-wa`
53. Lease breach other than rent → `default-by-tenant-wa`, `edu-cure-and-eviction-grounds-wa`
54. Drug or gang activity at the unit → `edu-expedited-criminal-eviction-wa`, `edu-criminal-activity-wa`, `edu-nuisance-wa`
55. Filing an eviction; tenant asks for a lawyer or more time → `edu-eviction-process-wa`, `edu-eviction-hardship-stay-wa`
56. Landlord changes the locks or shuts off utilities → `edu-self-help-eviction-wa`, `edu-heat-alert-utility-wa`
57. Ending a month-to-month tenancy; fixed term ends → `edu-for-cause-eviction-wa`, `lease-end-continuation-wa`, `fixed-term-end-without-cause-wa`, `holdover-wa`
58. Tenant wants out early (job move) → `early-termination-wa`, `edu-statutory-early-termination-wa`
59. Servicemember gets orders → `edu-servicemember-rights-wa`
60. Domestic violence victim wants to leave or change locks → `edu-dv-lease-termination-wa`, `edu-dv-eviction-protection-wa`, `edu-dv-lockchange-wa`, `edu-victim-confidentiality-wa`
61. Tenant moves to assisted living → `edu-no-infirmity-termination-wa`
62. Tenant abandons the unit; belongings left behind → `edu-abandonment-mitigation-wa`, `edu-abandoned-property-wa`
63. Property left after the sheriff executes a writ → `edu-post-eviction-property-wa`
64. Sole tenant dies → `edu-tenant-death-wa`
65. Deposit return and deductions → `security-deposit-return-wa`, `edu-deposit-damage-claims-wa`, `edu-security-deposit-penalty-wa`
66. Uncashed deposit refund → `edu-deposit-escheat-wa`
67. Selling the property with a tenant in place → `edu-sale-or-management-change-wa`, `edu-security-deposit-on-sale-wa`
68. Foreclosure on the rental → `edu-foreclosure-wa`
69. Converting to condominiums → `edu-conversion-notice-wa`
70. Unit condemned by the city → `edu-condemned-premises-wa`
71. Meth contamination found after move-out → `edu-meth-contamination-wa`
72. Pool at an apartment complex → `edu-pool-rules-wa`
73. City rental inspection or registration → `edu-rental-inspection-wa`, `edu-no-landlord-registration-wa`
74. Lease opt-out for a long single-family lease → `edu-scope-wa`
75. Federally assisted building leaving the program → `edu-subsidized-housing-notice-wa`

Every scenario is answered by a row. The water-heater scenario was answered only after the topic canvass (§18) surfaced RCW 19.27A.060, which battery 40 had hit but no row had used; `edu-water-heater-wa` was added and checked in round 14.

## 17. Outside-title search and proof of absence (gap-discovery source 4)
The whole RCW, the whole WAC and the Constitution were loaded before the first battery (rule 35) and searched with 211 battery records (§1.3). Findings outside chapters 59.12 and 59.18 RCW that reached rows:
- **Fair housing and animals:** RCW 49.60.040, 49.60.214, 49.60.222, 49.60.225; WAC 162-38-035 to 162-38-120.
- **Consumer protection, interest and collection:** RCW 19.86.020, 19.86.030, 19.86.090, 19.86.140; RCW 19.52.010, 19.52.020; RCW 4.56.110; RCW 4.84.330; RCW 19.16.100; RCW 70A.35.060 (weatherization).
- **Building and safety:** RCW 43.44.110 and WAC 212-10-045, 212-10-050 (smoke detection); RCW 19.27.530, WAC 51-51-0315, 51-54A-0308, 51-54A-1103, 51-54A-6108 (CO alarms); RCW 19.27A.060 (water heaters); RCW 70.90.110, 70.90.120, 70.90.250 and WAC 246-260-001, 246-260-010 (pools); RCW 70A.420.080, 70A.420.100 (lead renovation); RCW 64.44.020, 64.44.030 (contaminated property); RCW 70.160 (smoking in public places).
- **Utilities:** RCW 35.21.217 (city utilities and tenant accounts); RCW 80.28.370 (community solar definitions); WAC 480-90-108, 480-100-108, 480-100-123 (resale and master meters).
- **Vehicles:** RCW 46.55.010, 46.55.070, 46.55.080, 46.55.300 (impounds and immobilization).
- **Courts, debts and property:** RCW 6.15.010, 6.15.050, chapter 6.13 RCW (exemptions and homestead); RCW 6.01.060 (named, not read, §7); RCW 61.24.143, 61.24.146 (foreclosure); RCW 63.30.040 (unclaimed property); RCW 64.04.010, 64.04.020 (leases over a year); RCW 64.06.020 (seller disclosure, not leases); RCW 64.16.005 (noncitizen ownership); RCW 7.43.010, 7.43.020 (drug nuisance); RCW 9A.52.105 (trespass declaration); RCW 9.96.060 (vacated records).
- **Associations:** RCW 64.32.300, 64.34.397, 64.34.440, 64.38.033, 64.38.034, 64.38.130, 64.90.360, 64.90.405, 64.90.510, 64.90.565, 64.90.655.
- **Drugs and cannabis:** RCW 69.50.445, 69.50.510, 69.51A.060, 69.51A.210, 69.53.010.
- **Local powers and programs:** RCW 35.21.830 and 36.01.130 (no local rent control); RCW 35.106.030 (crime-free programs); RCW 43.31.605 (landlord mitigation program); RCW 59.30.050 (mobile home community registration).
- **Other tenancy chapters:** RCW 59.08.010 (summons as notice; acceptance of rent after default).
- **Tax and records:** RCW 82.04.050 (rent and lodging); RCW 1.80.040, 1.80.060, 1.80.070 (electronic records).
- **Constitution:** art. I, § 21 (jury, waivable with consent; `edu-jury-waiver-wa`); art. I, § 24 (arms; `edu-firearms-wa`); art. I, § 7 (privacy); art. XIX (homestead); no cannabis article (batteries 190-193).
Absence records are carried by the rows and §18; each cites its battery, hit count and positive result.

## 18. Topic reference canvass (rules 27, 36)
The reference lists 321 topics. Three new topic keys come from Washington (§10), so the WA rows sit on 184 topics.

### 18.1 Topics answered by a WA row (181 reference topics + 3 new)
- `acceptable-payment-methods` (33 states): Present: `acceptable-payment-methods-wa`
- `algorithmic-rent-setting` (27 states): Present: `edu-no-algorithmic-rent-rule-wa`
- `application-fees` (24 states): Present: `edu-application-fees-wa`
- `application-of-payments` (33 states): Present: `application-of-payments-wa`
- `due-at-signing` (33 states): Present: `due-at-signing-wa`
- `fee-transparency` (13 states): Present: `edu-no-fee-transparency-rule-wa`
- `fees-as-rent` (30 states): Present: `edu-fees-as-rent-wa`
- `late-fee` (33 states): Present: `edu-late-fee-wa`, `late-fee-wa`
- `rent-concession` (3 states): Present: `edu-rent-concession-wa`
- `rent-control` (28 states): Present: `edu-rent-increase-limit-wa`
- `rent-increase-notice` (26 states): Present: `edu-rent-increase-notice-wa`
- `rent-payment` (33 states): Present: `edu-rent-due-date-change-wa`, `rent-payment`
- `rent-receipts` (19 states): Present: `edu-rent-receipts-wa`
- `rent-tax` (13 states): Present: `edu-rent-tax-wa`
- `returned-payments` (33 states): Present: `edu-returned-payments-wa`, `returned-payments-wa`
- `shutdown-rent-protection` (2 states): Present: `edu-no-shutdown-protection-wa`
- `term-change-notice` (5 states): Present: `edu-term-change-notice-wa`
- `unpaid-damages-interest` (14 states): Present: `edu-unpaid-damages-interest-wa`
- `waiver-by-acceptance` (17 states): Present: `edu-waiver-by-acceptance-wa`
- `condition-inspection` (25 states): Present: `edu-condition-checklist-wa`
- `deposit-escheat` (19 states): Present: `edu-deposit-escheat-wa`
- `deposit-installments` (6 states): Present: `edu-deposit-installments-wa`
- `deposit-last-month-rent` (10 states): Present: `edu-last-month-rent-wa`
- `fee-in-lieu-of-deposit` (4 states): Present: `edu-fee-in-lieu-of-deposit-wa`, `fee-in-lieu-of-deposit-wa`
- `holding-deposit` (10 states): Present: `edu-holding-deposit-wa`
- `nonrefundable-deposit-notice` (5 states): Present: `nonrefundable-fees-wa`
- `security-deposit-cap` (27 states): Present: `edu-no-security-deposit-cap-wa`
- `security-deposit-holding` (13 states): Present: `deposit-depository-wa`
- `security-deposit-interest` (27 states): Present: `edu-security-deposit-interest-wa`
- `security-deposit-on-sale` (18 states): Present: `edu-security-deposit-on-sale-wa`
- `security-deposit-penalty` (17 states): Present: `edu-security-deposit-penalty-wa`
- `security-deposit-return` (33 states): Present: `edu-deposit-damage-claims-wa`, `security-deposit-return-wa`
- `security-deposit-use` (32 states): Present: `security-deposit-use-wa`
- `alterations` (33 states): Present: `no-alterations`
- `children-occupancy` (2 states): Present: `edu-children-occupancy-wa`
- `criminal-activity` (18 states): Present: `edu-criminal-activity-wa`
- `disturbance` (33 states): Present: `no-disturbance`
- `existing-condition` (33 states): Present: `existing-condition-wa`
- `extended-absence-notice` (9 states): Present: `extended-absence-notice-ks`
- `joint-liability` (33 states): Present: `joint-liability`
- `permitted-occupants` (33 states): Present: `permitted-occupants`
- `residential-use-only` (33 states): Present: `residential-use-only`
- `smoking-policy` (33 states): Present: `edu-smoking-wa`, `smoking-policy`
- `sublet-assign` (33 states): Present: `no-sublet-assign`
- `tenant-forward-proceedings` (23 states): Present: `tenant-forward-proceedings-ca`
- `tenant-maintenance` (33 states): Present: `tenant-maintenance`
- `tenant-statutory-duties` (10 states): Present: `edu-tenant-statutory-duties-wa`
- `utilities-responsibility` (33 states): Present: `utilities-responsibility`
- `utility-payment-evidence` (33 states): Present: `utility-payment-evidence`
- `utility-service-continuity` (33 states): Present: `utility-service-continuity`
- `alarm-duties` (32 states): Present: `edu-alarm-duties-wa`, `fire-safety-notice-wa`
- `appliances-included` (33 states): Present: `appliances-included`
- `disability-accommodation` (10 states): Present: `edu-disability-accommodation-wa`
- `heating` (4 states): Present: `edu-heating-wa`
- `landlord-maintenance` (33 states): Present: `edu-landlord-maintenance-wa`, `landlord-maintenance`
- `landlord-self-cure` (27 states): Present: `edu-landlord-self-cure-wa`
- `pool-safety` (4 states): Present: `edu-pool-rules-wa`
- `quiet-possession` (26 states): Present: `edu-no-quiet-possession-statute-wa`
- `rent-reporting` (2 states): Present: `edu-no-rent-reporting-rule-wa`
- `security-devices` (10 states): Present: `edu-security-devices-wa`
- `services-utilities-provided` (33 states): Present: `services-utilities-provided-ks-oh`
- `telecom-access` (5 states): Present: `edu-no-telecom-access-rule-wa`
- `tenant-repair-agreement` (18 states): Present: `edu-tenant-repair-agreement-wa`
- `tenant-repair-remedies` (18 states): Present: `edu-tenant-repair-remedies-wa`
- `utilities-paid-by-landlord` (33 states): Present: `utilities-paid-by-landlord`
- `utility-landlord-account` (6 states): Present: `edu-utility-landlord-account-wa`
- `utility-shutoff-statute` (4 states): Present: `edu-heat-alert-utility-wa`
- `utility-submetering-disclosure` (16 states): Present: `edu-no-submetering-statute-wa`
- `landlord-entry` (33 states): Present: `landlords-access-wa`
- `abandoned-property` (31 states): Present: `edu-abandoned-property-wa`
- `abandonment-and-mitigation` (19 states): Present: `edu-abandonment-mitigation-wa`
- `attorney-fees` (20 states): Present: `edu-attorney-fees-wa`
- `casualty-termination` (32 states): Present: `edu-casualty-termination-wa`
- `conversion-notice` (16 states): Present: `edu-conversion-notice-wa`, `edu-subsidized-housing-notice-wa`
- `cure-and-eviction-grounds` (14 states): Present: `edu-cure-and-eviction-grounds-wa`
- `default-by-tenant` (33 states): Present: `default-by-tenant-wa`
- `drug-free-housing-addendum` (1 states): Present: `edu-drug-free-housing-wa`
- `dv-eviction-protection` (7 states): Present: `edu-dv-eviction-protection-wa`
- `dv-lease-termination` (31 states): Present: `edu-dv-lease-termination-wa`
- `dv-lockchange` (5 states): Present: `edu-dv-lockchange-wa`
- `early-termination` (33 states): Present: `early-termination-wa`
- `eviction-hardship-stay` (3 states): Present: `edu-eviction-hardship-stay-wa`
- `eviction-process` (28 states): Present: `edu-eviction-process-wa`
- `eviction-record-sealing` (29 states): Present: `edu-eviction-record-sealing-wa`
- `expedited-criminal-eviction` (15 states): Present: `edu-expedited-criminal-eviction-wa`
- `for-cause-eviction` (33 states): Present: `edu-for-cause-eviction-wa`
- `foreclosure` (20 states): Present: `edu-foreclosure-wa`
- `holdover` (33 states): Present: `holdover-wa`
- `holdover-rate` (18 states): Present: `edu-holdover-rate-wa`
- `homestead-waiver` (6 states): Present: `edu-exemption-waiver-wa`
- `infirmity-termination` (5 states): Present: `edu-no-infirmity-termination-wa`
- `landlord-lien` (21 states): Present: `edu-landlord-lien-wa`
- `nonpayment-notice` (19 states): Present: `edu-nonpayment-notice-wa`
- `nuisance` (17 states): Present: `edu-nuisance-wa`
- `possession-delay` (33 states): Present: `possession-delay`
- `post-eviction-property` (22 states): Present: `edu-post-eviction-property-wa`
- `rental-application-accuracy` (33 states): Present: `rental-application-accuracy-wa`
- `retaliation` (33 states): Present: `edu-retaliation-wa`
- `self-help-eviction` (28 states): Present: `edu-self-help-eviction-wa`
- `servicemember-rights` (27 states): Present: `edu-servicemember-rights-wa`
- `statutory-early-termination` (6 states): Present: `edu-statutory-early-termination-wa`
- `surrender-end-of-term` (33 states): Present: `surrender-end-of-term-wa`
- `tenant-caused-damage` (30 states): Present: `tenant-caused-damage-wa`
- `tenant-death` (29 states): Present: `edu-tenant-death-wa`
- `termination-notice` (31 states): Present: `edu-termination-notice-wa`
- `unauthorized-occupant-removal` (24 states): Present: `edu-unauthorized-occupants-wa`
- `addendum-precedence` (33 states): Present: `addendum-precedence`
- `automatic-renewal` (5 states): Present: `fixed-term-end-without-cause-wa`, `lease-end-continuation-wa`
- `dv-confidentiality` (8 states): Present: `edu-victim-confidentiality-wa`
- `electronic-signatures` (33 states): Present: `electronic-signatures`
- `emergency-assistance-right` (28 states): Present: `edu-emergency-assistance-right-wa`
- `entire-agreement` (33 states): Present: `entire-agreement`
- `governing-law` (33 states): Present: `governing-law`
- `lease-completeness` (26 states): Present: `edu-no-lease-completeness-rule-wa`
- `lease-copy` (15 states): Present: `edu-lease-copy-wa`
- `notice-delivery-methods` (30 states): Present: `edu-notice-delivery-wa`
- `notices` (33 states): Present: `notices`
- `rental-inspection` (8 states): Present: `edu-rental-inspection-wa`
- `renters-insurance-rules` (8 states): Present: `edu-renters-insurance-wa`
- `sale-or-management-change` (23 states): Present: `edu-sale-or-management-change-wa`
- `scope` (24 states): Present: `edu-scope-wa`
- `severability` (33 states): Present: `severability`
- `statute-of-frauds-lease-term` (11 states): Present: `edu-statute-of-frauds-wa`
- `statutory-forms` (28 states): Present: `edu-statutory-forms-wa`
- `tenants-property-insurance` (33 states): Present: `tenants-property-insurance-ks-oh-ca`
- `assistance-animal-accommodation` (33 states): Present: `assistance-animal-accommodation-wa`, `edu-assistance-animals-wa`
- `pet-fees` (13 states): Present: `edu-pet-fees-wa`
- `pet-insurance-requirement` (33 states): Present: `pet-insurance-requirement`
- `pet-policy` (33 states): Present: `pet-policy-wa`
- `service-animal-denial-penalty` (11 states): Present: `edu-fair-housing-remedies-wa`
- `service-animal-misrepresentation` (20 states): Present: `edu-service-animal-misrepresentation-wa`
- `assigned-parking-space` (33 states): Present: `assigned-parking-space`
- `ev-charging` (30 states): Present: `edu-no-ev-charging-rule-wa`
- `parking` (33 states): Present: `parking-ks-oh-ca`
- `parking-vehicle-rules` (32 states): Present: `parking-vehicle-rules`
- `storage-space` (33 states): Present: `storage-space-ks-oh-ca`
- `towing` (30 states): Present: `edu-towing-wa`
- `cannabis` (16 states): Present: `edu-cannabis-wa`
- `common-area-use` (33 states): Present: `common-area-use-wa`
- `fire-safety-grilling` (33 states): Present: `fire-safety-grilling`
- `firearms` (14 states): Present: `edu-firearms-wa`
- `guest-policy` (33 states): Present: `guest-policy`
- `guest-policy-day-limit` (32 states): Present: `guest-policy-day-limit`
- `inspection-rights` (32 states): Present: `inspection-rights`
- `keys` (33 states): Present: `keys`
- `landscaping-irrigation` (32 states): Present: `landscaping-irrigation`
- `portable-solar` (2 states): Present: `edu-no-portable-solar-rule-wa`
- `rules-regulations` (16 states): Present: `edu-rules-regulations-wa`
- `snow-removal` (31 states): Present: `snow-removal`
- `tenant-display-rights` (12 states): Present: `edu-no-display-rule-wa`
- `tenant-security-cameras` (26 states): Present: `edu-no-camera-rule-wa`
- `bed-bug-disclosure` (31 states): Present: `edu-pest-control-wa`
- `fair-housing` (30 states): Present: `edu-fair-housing-wa`
- `flood-disclosure` (23 states): Present: `flood-disclosure-wa`
- `hoa` (7 states): Present: `edu-hoa-wa`
- `hoa-compliance` (33 states): Present: `hoa-compliance`
- `lead-based-paint` (33 states): Present: `edu-lead-based-paint-wa`, `lead-based-paint`
- `meth-disclosure` (27 states): Present: `edu-meth-contamination-wa`
- `military-air-zone-disclosure` (3 states): Present: `edu-no-military-zone-disclosure-wa`
- `mold-disclosure` (29 states): Present: `mold-disclosure-wa`
- `owner-identity-disclosure` (32 states): Present: `landlord-disclosure-wa`
- `protected-class-inquiry-ban` (6 states): Present: `edu-protected-class-inquiries-wa`
- `radon-disclosure` (32 states): Present: `edu-no-radon-disclosure-wa`
- `sex-offender-occupancy` (9 states): Present: `edu-sex-offender-wa`
- `source-of-income` (27 states): Present: `edu-source-of-income-wa`
- `stigmatized-property` (18 states): Present: `edu-no-stigma-disclosure-rule-wa`
- `tenant-rights-statement` (3 states): Present: `edu-no-tenant-rights-statement-wa`
- `condemned-premises-rent-bar` (2 states): Present: `edu-condemned-premises-wa`
- `consumer-protection-act` (21 states): Present: `edu-consumer-protection-act-wa`
- `foreign-ownership` (12 states): Present: `edu-no-foreign-ownership-limit-wa`
- `immigration-status` (26 states): Present: `edu-immigration-status-wa`
- `jury-waiver` (5 states): Present: `edu-jury-waiver-wa`
- `knowing-use-penalty` (4 states): Present: `edu-knowing-use-penalty-wa`
- `landlord-registration` (7 states): Present: `edu-no-landlord-registration-wa`
- `plain-language` (12 states): Present: `edu-no-plain-language-rule-wa`
- `prohibited-lease-terms` (28 states): Present: `edu-prohibited-lease-terms-wa`
- `tenant-right-to-organize` (3 states): Present: `edu-no-tenant-organizing-rule-wa`
- `tenant-screening` (16 states): Present: `edu-tenant-screening-wa`
- `translation-duty` (2 states): Present: `edu-translation-wa`
- `unconscionability` (9 states): Present: `edu-no-unconscionability-statute-wa`
- `water-heater-temperature` (1 states): Present: `edu-water-heater-wa`
- `lease-type-parity` (new): Present: `edu-lease-type-parity-wa`
- `portable-cooling-device` (new): Present: `portable-cooling-device-wa`
- `smart-access` (new): Present: `edu-smart-access-wa`

### 18.2 Topics with no WA row (status and reason) (140)
Status labels: Answered elsewhere (a WA row covers it under another key), Confirmed absent (battery cited), Not located (boundary stated), Not offered (a lawful or barred option declined), Not applicable (another state's own law or a summary row).
- `collection-fee` (2 states): Not offered: No Washington statute authorizes a landlord's collection fee. A lease may not make the tenant pay the landlord's attorneys' fees except as chapter 59.18 RCW authorizes and a court awards (RCW 59.18.230(2)(e); `edu-attorney-fees-wa`), and continued tenancy can't be conditioned on non-rent charges, except the amounts paid to reinstate under RCW 59.18.410 (RCW 59.18.283(2); `edu-fees-as-rent-wa`). The Collection Agency Act's own fee limits (RCW 19.16.250) were not read (§7).
- `fee-unprovided-service` (1 states): Answered elsewhere: No statute written for it; a charge for a service not provided would be an unfair or deceptive practice question under the Consumer Protection Act (`edu-consumer-protection-act-wa`), and fees belong in the lease (`edu-no-fee-transparency-rule-wa`).
- `government-fee-reimbursement` (1 states): Not applicable: Indiana clause resting on Indiana law. A recurring charge passed through to the tenant is rent in Washington, subject to the increase notice and limit (`edu-fees-as-rent-wa`, `edu-rent-increase-limit-wa`); no Washington pass-through rule was searched for separately.
- `late-fee-limit` (1 states): Answered elsewhere: No cap on late fees for chapter 59.18 tenancies (WA battery 2 (late fee cap / limit (amount or percent)): 7 hits, control 0; known positives passed (1 real section, 1 synthetic)) (WA battery 3 (late fee cap everyday rerun (charge for late payment; penalty for late rent)): 5 hits, control 0; known positives passed (0 real sections, 2 synthetic)); the five-day bar and the $75 limit on late fees in an eviction judgment and in reinstatement (RCW 59.18.410(1)-(2)) are in `edu-late-fee-wa` and `late-fee-wa`.
- `nonresident-owner-agent` (5 states): Answered elsewhere: A landlord who doesn't live in Washington must name an agent in the county for service of notices and process (RCW 59.18.060(16); `landlord-disclosure-wa`) (WA battery 121 (nonresident owner agent / in-state agent): 4 hits, control 0; known positives passed (1 real section, 0 synthetic)). Tax withholding on rent paid to nonresident owners: battery 164 returned no hits with a synthetic positive only and had no rerun, so no absence is claimed (§7).
- `notice-service-fee` (2 states): Not offered: Same reasons as `collection-fee` (RCW 59.18.230(2)(e); `edu-attorney-fees-wa`).
- `rent-escalation` (3 states): Answered elsewhere: No increase during the first 12 months, none before a fixed term ends, 90 days' notice on the state form and the statewide limit (`edu-rent-increase-limit-wa`, `edu-rent-increase-notice-wa`, `edu-term-change-notice-wa`); an escalation clause can't get around them.
- `required-fees` (3 states): Answered elsewhere: Nonrefundable fees must be in a written lease (`nonrefundable-fees-wa`); obligations bind the tenant only if brought to the tenant's attention at initial occupancy, and new ones need notice (`edu-rules-regulations-wa`, `edu-no-fee-transparency-rule-wa`); upfront amounts are listed in `due-at-signing-wa`.
- `statutory-caps` (1 states): Answered elsewhere: Washington's caps: holding deposit 25% of the first month's rent (`edu-holding-deposit-wa`); screening charges limited to the report or actual cost (`edu-application-fees-wa`); the rent increase limit (`edu-rent-increase-limit-wa`); $75 in late fees and $50 per prior reinstatement in a nonpayment reinstatement (`edu-eviction-hardship-stay-wa`). No cap on deposits (WA battery 4 (security deposit cap (amount limited by rent)): 7 hits, control 0; known positives passed (1 real section, 2 synthetic)) (WA battery 5 (security deposit cap everyday rerun (limit on deposit; maximum deposit)): 0 hits, control 0; known positives passed (0 real sections, 2 synthetic)), late fees (WA battery 2 (late fee cap / limit (amount or percent)): 7 hits, control 0; known positives passed (1 real section, 1 synthetic)) or pet fees for chapter 59.18 tenancies (WA battery 248 (pet deposit or fee caps, rerun of 246 without the failed positive (RCW 59.18.200 has no pet wording)): 2 hits, control 0; known positives passed (1 real section, 1 synthetic)).
- `subsidy-late-fee` (1 states): Not applicable: Colorado statute. Not searched separately for Washington; late fees generally are in `edu-late-fee-wa` (§7).
- `veterans-incentive` (1 states): Not applicable: Florida pilot program. Washington's nearest program is the landlord mitigation program (RCW 43.31.605), which is not a veterans incentive; not searched further.
- `deposit-cost-schedule` (3 states): Answered elsewhere: Deductions must be documented by estimates, invoices or the statutory time-and-rate record (`edu-deposit-damage-claims-wa`); no pre-set cost schedule is authorized.
- `deposit-surrender-notice` (1 states): Not applicable: Texas rule. Washington's 30-day statement and refund run from the end of the tenancy and vacating, or from learning of an abandonment (RCW 59.18.280(1); `security-deposit-return-wa`); no surrender-notice condition appears in RCW 59.18.280 (read whole).
- `dv-deposit-timing` (1 states): Answered elsewhere: Deposit after a victim's termination: RCW 59.18.575(2)(b) (`edu-dv-lease-termination-wa`); timing follows RCW 59.18.280 (`security-deposit-return-wa`).
- `expedited-deposit-disposition` (1 states): Not applicable: Virginia option. Washington's deposit statute has no expedited disposition (RCW 59.18.280, read whole).
- `inspection-notice-penalty` (1 states): Answered elsewhere: No deposit may be collected without a written lease and a signed checklist (`edu-condition-checklist-wa`); the penalties for the statement and refund are in `edu-security-deposit-penalty-wa`.
- `nonrefundable-deposit-separate-notice` (1 states): Answered elsewhere: Nonrefundable fees must be stated as nonrefundable in a written lease (RCW 59.18.285; `nonrefundable-fees-wa`); a nonrefundable part of a fee in lieu of a deposit must be disclosed in the lease and separately acknowledged (`fee-in-lieu-of-deposit-wa`).
- `security-deposit-nonwaiver` (2 states): Answered elsewhere: Any lease term waiving a section of chapter 59.18 RCW is unenforceable (RCW 59.18.230(1)(a); `edu-prohibited-lease-terms-wa`).
- `security-deposit-standards` (1 states): Not applicable: South Carolina rule. No Washington counterpart in RCW 59.18.260-59.18.285 (read whole).
- `utility-deposit-return` (1 states): Not applicable: Wyoming rule on a separately identified utility deposit; not searched separately for Washington (§7).
- `bed-bug-cooperation` (1 states): Answered elsewhere: Tenant duties and the extermination cost for an infestation the tenant caused, and entry on two days' notice, cover it (`edu-pest-control-wa`, `edu-tenant-statutory-duties-wa`, `landlords-access-wa`); Washington has no bed-bug statute (WA battery 38 (bed bugs (term of art)): 8 hits, control 0; known positives passed (0 real sections, 2 synthetic)).
- `cold-weather-vacate-notice` (1 states): Confirmed absent: No cold-weather limit on vacating or eviction for chapter 59.18 tenancies (WA battery 254 (cold weather or winter limits on vacating or eviction): 14 hits, control 0; known positives passed (0 real sections, 1 synthetic)); the hits are utility winter payment programs, building codes and camp rules.
- `construction-liens` (1 states): Not applicable: Florida rule. Washington's construction lien chapter (chapter 60.04 RCW) was not read for tenant improvements (§7); alterations need consent under `no-alterations`.
- `dv-qualifying-documents` (2 states): Answered elsewhere: A protection order or a qualified third party's signed report (RCW 59.18.575(1); `edu-dv-lease-termination-wa`).
- `municipal-utility-lien` (8 states): Answered elsewhere: RCW 35.21.217 (`edu-utility-landlord-account-wa`, whose notes record that it answers this topic) (WA battery 233 (municipal utility liens on rental property, rerun of 149 (both word orders)): 3 hits, control 0; known positives passed (1 real section, 1 synthetic)); the lien sections RCW 35.21.290 and 35.67.200 were not read (§7).
- `prohibited-acts-renter` (2 states): Answered elsewhere: Tenant duties RCW 59.18.130 (`edu-tenant-statutory-duties-wa`, `edu-criminal-activity-wa`).
- `purpose-limitation` (1 states): Answered elsewhere: `residential-use-only` (tagged).
- `utility-interruption-submeter` (1 states): Answered elsewhere: `edu-no-submetering-statute-wa` (its notes record that it answers this topic) and the shutoff rules in `edu-heat-alert-utility-wa`.
- `utility-transfer` (1 states): Not offered: A landlord-initiated cutoff would run into the ban on intentionally causing a tenant's utilities to be shut off (RCW 59.18.300; `edu-self-help-eviction-wa`, `edu-heat-alert-utility-wa`).
- `waterbed` (3 states): Confirmed absent: No waterbed rule for rentals (WA battery 140 (waterbeds / flotation furniture): 2 hits, control 0; known positives passed (0 real sections, 2 synthetic)); the hits are an industrial insurance rule and an assisted living rule.
- `alt-housing` (5 states): Answered elsewhere: No general alternate-housing duty during repairs; relocation assistance for condemned or unlawful-to-occupy units (`edu-condemned-premises-wa`) (WA battery 90 (relocation assistance): 52 hits, control 0; known positives passed (2 real sections, 0 synthetic)).
- `appliances-excluded` (1 states): Answered elsewhere: The landlord maintains appliances it supplies (`edu-landlord-maintenance-wa`; `appliances-included` tagged with `{{appliance_list}}`); no presumption that appliances present are landlord-supplied appears in RCW 59.18.060 (read whole).
- `balcony-inspection` (1 states): Confirmed absent: No balcony or elevated-element inspection duty for rentals (WA battery 45 (balcony / deck / elevated structure inspection): 12 hits, control 0; known positives passed (0 real sections, 1 synthetic)); the hits are building code, safety and home-inspector rules.
- `confirmed-absences-habitability` (1 states): Not applicable: A Nebraska summary row. Washington's habitability rules are present (`edu-landlord-maintenance-wa`, `edu-tenant-repair-remedies-wa`).
- `designated-repairer` (1 states): Answered elsewhere: Washington's repair-and-deduct route has the tenant hire a licensed or registered person (`edu-tenant-repair-remedies-wa`); RCW 59.18.100 (read whole) has no landlord-designated repairer.
- `disaster-duties` (1 states): Answered elsewhere: No disaster statute for rentals; defects follow the repair remedies (`edu-casualty-termination-wa`) (WA battery 33 (casualty / fire termination right (statutory)): 1 hit, control 0; known positives passed (0 real sections, 1 synthetic)) (WA battery 34 (casualty everyday rerun (untenantable / uninhabitable)): 11 hits, control 0; known positives passed (1 real section, 1 synthetic)).
- `double-letting` (6 states): Confirmed absent: (WA battery 236 (double letting / renting the same unit to two tenants): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (WA battery 237 (double letting everyday rerun (already rented, rented to another person)): 1 hit, control 0; known positives passed (0 real sections, 1 synthetic)); the one rerun hit is a tax rule.
- `emergency-contact` (2 states): Confirmed absent: No duty to give tenants an emergency telephone number (WA battery 255 (emergency telephone number or contact for tenants): 9 hits, control 0; known positives passed (0 real sections, 1 synthetic)); the hits are the tenant-death notice (RCW 59.18.595, `edu-tenant-death-wa`), short-term rental postings and unrelated rules. The landlord's name and address for notices: `landlord-disclosure-wa`.
- `fire-code-standard` (1 states): Not applicable: A North Dakota reading of its fire-marshal standard. Washington's code duties: `edu-landlord-maintenance-wa`, `edu-alarm-duties-wa`.
- `frozen-standard-incorporation` (1 states): Not applicable: North Dakota row. No frozen edition of an outside standard was noted in the statute walk (§14).
- `furnishings-included` (1 states): Answered elsewhere: Furnishings are listed on the move-in checklist (`existing-condition-wa`) and maintained by the landlord if supplied (`edu-landlord-maintenance-wa`).
- `habitability-materiality` (1 states): Answered elsewhere: Code compliance is required where a violation endangers health or safety (`edu-landlord-maintenance-wa`).
- `habitability-modifiable` (2 states): Answered elsewhere: Only by a written agreement outside a standard-form lease, approved as RCW 59.18.360 requires (`edu-tenant-repair-agreement-wa`); ordinary tenant chores by agreement: `tenant-maintenance` (tagged).
- `habitability-presumption` (1 states): Not applicable: California rule. Washington's presumption runs the other way, against the landlord on retaliation within 90 days of a complaint (`edu-retaliation-wa`).
- `habitability-waiver` (2 states): Answered elsewhere: `edu-tenant-repair-agreement-wa`, `edu-prohibited-lease-terms-wa`.
- `health-district-rental-rules` (1 states): Not applicable: Nevada health district rule. Washington's local health officers act on contaminated property (`edu-meth-contamination-wa`) and cities run rental inspections (`edu-rental-inspection-wa`).
- `landlord-breach-remedy` (1 states): Answered elsewhere: `edu-tenant-repair-remedies-wa`, `edu-statutory-early-termination-wa`.
- `maintenance-duty-shift` (1 states): Answered elsewhere: `edu-tenant-repair-agreement-wa` (the RCW 59.18.360 exemption agreement must be outside a standard-form lease and approved).
- `other-landlord-facilities` (1 states): Answered elsewhere: `edu-landlord-maintenance-wa`.
- `part5-nonwaivable` (1 states): Answered elsewhere: RCW 59.18.230(1)(a) (`edu-prohibited-lease-terms-wa`).
- `portfolio-thresholds` (3 states): Answered elsewhere: Washington's thresholds turn on the building or owner type, not portfolio size: single-family exceptions (`edu-pest-control-wa`, `fire-safety-notice-wa`), rent-limit exemptions (`edu-rent-increase-limit-wa`), inspection samples (`edu-rental-inspection-wa`) and the pools' partial exemption from design review, routine inspection and permits or fees for apartment complexes and groups of fewer than 15 rental units (RCW 70.90.120; `edu-pool-rules-wa`). The statute walk (§14) found no portfolio-size exemption from chapter 59.18 RCW.
- `promises-to-repair` (1 states): Not applicable: Wisconsin administrative rule. Chapter 59.18 RCW (read whole, §14) has no written-promise rule; `entire-agreement` (tagged).
- `rent-demand-bar` (1 states): Answered elsewhere: No renting of condemned or unlawful-to-occupy units (`edu-condemned-premises-wa`).
- `repair-cost-termination` (1 states): Answered elsewhere: A court or arbitrator may end a tenancy for a defect too substantial to remedy in time (RCW 59.18.120), and the tenant may end it after an unremedied defect (RCW 59.18.090(1)) (`edu-statutory-early-termination-wa`, `edu-casualty-termination-wa`); no landlord election to terminate instead of repairing.
- `repair-escrow-exemption-notice` (1 states): Not applicable: Ohio rule. Washington's rent escrow is in `edu-tenant-repair-remedies-wa`.
- `repair-notice` (3 states): Answered elsewhere: The tenant's written notice starts the repair periods (`edu-tenant-repair-remedies-wa`).
- `senior-housing-work-card` (1 states): Not applicable: Nevada rule; not searched for Washington.
- `stove-refrigerator` (1 states): Answered elsewhere: No duty to supply them; supplied ones must be kept working, with 72 hours to start repairs (`edu-tenant-repair-remedies-wa`, `edu-landlord-maintenance-wa`).
- `subsidy-habitability-proration` (1 states): Not applicable: Colorado rule. Washington's reduced-rent and escrow remedies are in `edu-tenant-repair-remedies-wa`.
- `substandard-property-receivership` (2 states): Not applicable: Nevada and Missouri rules. Washington's unfit-dwelling ordinances under chapter 35.80 RCW were not read (§7).
- `utility-allowance-cap` (2 states): Answered elsewhere: Recurring utility charges are rent (`edu-fees-as-rent-wa`); allocation `edu-no-submetering-statute-wa`. `utility-allowance-cap-co` not tagged (§2.2).
- `utility-apportionment` (2 states): Answered elsewhere: `edu-no-submetering-statute-wa` (its notes record that it answers this topic).
- `utility-disclosure-attachment` (1 states): Answered elsewhere: `edu-no-submetering-statute-wa`.
- `utility-disconnection-notice-authorization` (1 states): Answered elsewhere: Washington's counterpart: the owner asks a city or town utility in writing to be told of a tenant's delinquency (RCW 35.21.217; `edu-utility-landlord-account-wa`).
- `key-control-policy` (1 states): Answered elsewhere: Maintain and safeguard master and duplicate keys with reasonable care (`edu-security-devices-wa`).
- `periodic-services-entry` (2 states): Answered elsewhere: Two days' written notice except in an emergency or where impracticable (`landlords-access-wa`); no no-notice entry for scheduled services.
- `casualty-and-mitigation-waivable` (1 states): Not applicable: Ohio row. In Washington the mitigation duty (RCW 59.18.310) can't be waived (RCW 59.18.230(1)(a)); casualty `edu-casualty-termination-wa`.
- `environmental-event-termination` (2 states): Not applicable: Colorado option. Chapter 59.18 RCW has no counterpart (§14).
- `eviction-service-party` (1 states): Not offered: Service methods are statutory (`edu-notice-delivery-wa`); the out-of-state landlord's agent for service is in `landlord-disclosure-wa`.
- `forfeiture-redemption` (1 states): Answered elsewhere: Reinstatement in a nonpayment case (`edu-eviction-hardship-stay-wa`); the general relief-against-forfeiture section RCW 59.12.190 is listed in §7.
- `guarantor-renewal` (1 states): Confirmed absent: No Washington rule on how long a guarantor is bound (WA battery 258 (guarantors of a lease): 30 hits, control 0; known positives passed (1 real section, 1 synthetic)); the only chapter 59.18 hit is the screening notice's 'qualified guarantor' option (RCW 59.18.257). General suretyship case law not searched.
- `landlord-remedies-termination` (1 states): Answered elsewhere: `edu-abandonment-mitigation-wa`, `edu-eviction-process-wa`, `edu-holdover-rate-wa`.
- `liquidated-damages` (1 states): Answered elsewhere: `early-termination-wa` (fixed fee as an agreed price for early surrender) and `edu-holdover-rate-wa`; the penalty doctrine was not read (§7).
- `lockout-for-rent-delinquency` (1 states): Not offered: Barred: `edu-self-help-eviction-wa`.
- `minor-tenant-filing` (4 states): Confirmed absent: No statute or rule in the RCW or WAC on naming minors in an eviction (WA battery 259 (minors named as defendants in an eviction, rerun of 257 with a positive that carries a tenancy word): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (WA battery 260 (minors in evictions, everyday rerun of 259 (child, children, under eighteen)): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic)); court rules other than those read (§1.1, §7) not searched.
- `notice-to-quit-waiver` (1 states): Answered elsewhere: Barred by RCW 59.18.230(1)(a) (`edu-prohibited-lease-terms-wa`).
- `owner-move-in-reservation` (1 states): Answered elsewhere: Owner occupancy is a statutory cause on at least 90 days' notice (RCW 59.18.650(2)(d)) and can't end a fixed term early without the tenant's written consent and at least 60 days to vacate (RCW 59.18.650(5); `edu-for-cause-eviction-wa`); no lease reservation is needed or offered.
- `possession-bond` (1 states): Not applicable: Tennessee rule.
- `redemption` (2 states): Answered elsewhere: `edu-eviction-hardship-stay-wa`.
- `rent-into-court-counterclaim` (3 states): Confirmed absent: No rule requiring a tenant to pay rent into the court registry to defend (WA battery 256 (rent paid into the court registry in an eviction): 4 hits, control 0; known positives passed (0 real sections, 1 synthetic)); the hits are the reinstatement payment (RCW 59.18.410, `edu-eviction-hardship-stay-wa`), the general unlawful detainer judgment section and the mitigation-program reimbursement.
- `social-security-defense` (1 states): Not applicable: California rule. Washington's hardship stay: `edu-eviction-hardship-stay-wa`.
- `subsidized-inspection-refusal` (1 states): Not applicable: Illinois rule.
- `tenancy-at-will` (3 states): Not applicable: Chapter 59.04 RCW (periodic tenancies, tenancy by sufferance) does not apply to rental agreements under chapter 59.18 RCW (RCW 59.04.900; `edu-scope-wa`); periodic tenancies end only as `edu-for-cause-eviction-wa` and `edu-termination-notice-wa` describe.
- `adverse-proceeding-notice` (1 states): Not applicable: North Dakota rule. Chapter 59.18 RCW (read whole, §14) has no counterpart.
- `confirmed-absences-misc` (1 states): Not applicable: A Nebraska summary row; Washington's absences are recorded topic by topic.
- `confirmed-absences-outside-title` (1 states): Not applicable: As above (§17).
- `disaster-displaced-guests` (1 states): Not applicable: California rule.
- `dv-protection-order-chapter-moved` (1 states): Not applicable: North Dakota recodification note; Washington's victim rows use the definitions in RCW 59.18.570.
- `landlord-liability-insurance` (1 states): Confirmed absent: No requirement that a residential landlord carry liability insurance (WA battery 153 (landlord liability insurance): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (WA battery 253 (landlord duty to carry insurance (everyday rerun of 153)): 7 hits, control 0; known positives passed (0 real sections, 1 synthetic)); the hits are housing authorities, fire protection charges, the fee-in-lieu form, association insurance and short-term rental operators (RCW 64.37.050, out of scope).
- `law-enforcement-cooperation` (1 states): Not applicable: Tennessee rule; not searched for Washington.
- `lease-notice-initial-requirement` (1 states): Not applicable: North Dakota rule. Washington's only separate-acknowledgment rule for a lease is the fee-in-lieu nonrefundability line (§4) (WA battery 186 (formatting: "separately acknowledged" / "separately signed"): 12 hits, control 0; known positives passed (1 real section, 0 synthetic)).
- `lease-term-limitation` (1 states): Answered elsewhere: `edu-statute-of-frauds-wa`.
- `notice-to-vacate-additional-terms` (1 states): Not applicable: Kansas rule. Washington's notices are statutory forms (`edu-statutory-forms-wa`).
- `optional-lease-terms` (1 states): Not applicable: A North Dakota summary row. Washington's lease-dependent choices are recorded in §6 and §19 (rule 50).
- `plain-language-consumer-statement` (1 states): Answered elsewhere: `edu-no-plain-language-rule-wa` (WA battery 117 (plain language / readability statute): 68 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `rent-receipt-anti-waiver` (1 states): Answered elsewhere: The landlord's duties can't be waived except by an approved RCW 59.18.360 agreement (`edu-prohibited-lease-terms-wa`, `edu-tenant-repair-agreement-wa`).
- `tenant-insurance-claims` (1 states): Answered elsewhere: A lease may not exculpate the landlord or shift its liability (`edu-renters-insurance-wa`, `edu-prohibited-lease-terms-wa`) (WA battery 166 (tenant insurance claims / landlord repairs pushed to renter insurance): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `tenant-records` (1 states): Answered elsewhere: Receipts on request and for cash (`edu-rent-receipts-wa`); no rent-ledger statute beyond the 14-day notice's itemization (`edu-nonpayment-notice-wa`).
- `tpa-sunset` (1 states): Answered elsewhere: Washington's counterpart: RCW 59.18.700 expires July 1, 2040 (RCW 59.18.700(8); `edu-rent-increase-limit-wa`; §10).
- `ev-charging-end-of-tenancy` (2 states): Answered elsewhere: `edu-no-ev-charging-rule-wa` (WA battery 137 (electric vehicle charging by tenants): 9 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `ev-charging-requirements` (2 states): Answered elsewhere: `edu-no-ev-charging-rule-wa`.
- `ev-charging-shared-area` (2 states): Answered elsewhere: `edu-no-ev-charging-rule-wa`.
- `parking-rules-notice` (1 states): Answered elsewhere: Rules bind if brought to the tenant's attention at initial occupancy; new rules need 30 days' notice (`edu-rules-regulations-wa`); towing `edu-towing-wa`; `parking-vehicle-rules` tagged.
- `unbundled-parking` (1 states): Not applicable: California rule; not searched for Washington.
- `guest-rights` (3 states): Answered elsewhere: `guest-policy` (tagged; its WA note covers RCW 49.60.222(4), 59.18.140 and the mobile home care-provider rule).
- `political-access` (1 states): Answered elsewhere: `edu-no-tenant-organizing-rule-wa` (its notes record that it answers this topic) (WA battery 144 (political canvassing / candidate access to multifamily housing): 1 hit, control 0; known positives passed (0 real sections, 1 synthetic)).
- `religious-cultural-display` (1 states): Answered elsewhere: `edu-no-display-rule-wa`.
- `smoke-drift-waiver` (2 states): Answered elsewhere: `smoking-policy` (tagged), `edu-smoking-wa`; a waiver of a chapter 59.18 remedy would be void (RCW 59.18.230).
- `certificate-of-occupancy-disclosure` (1 states): Not applicable: New York rule; not searched for Washington.
- `defective-drywall-disclosure` (1 states): Not applicable: Virginia rule; not searched for Washington.
- `electric-submetering-disclosure` (2 states): Answered elsewhere: `edu-no-submetering-statute-wa` (its notes record that it answers this topic) (WA battery 247 (landlord electricity, gas or water resale / submetering in utility commission rules): 104 hits, control 0; known positives passed (1 real section, 0 synthetic)).
- `foreclosure-disclosure` (4 states): Not located: No pre-lease duty located: the foreclosure sections read (RCW 61.24.143, 61.24.146) give residents notice once a sale is noticed or held (`edu-foreclosure-wa`) (WA battery 88 (foreclosure tenant protections): 85 hits, control 0; known positives passed (2 real sections, 0 synthetic)); no pre-lease disclosure of a pending foreclosure was identified.
- `good-cause-notice` (1 states): Answered elsewhere: `edu-for-cause-eviction-wa`; no statute requires the lease to state just-cause coverage (§14).
- `hazardous-contamination-disclosure` (2 states): Answered elsewhere: Contaminated property under chapter 64.44 RCW (`edu-meth-contamination-wa`); no general contamination disclosure to tenants (WA battery 251 (contamination or hazardous substances near tenancy words (everyday rerun of 56)): 62 hits, control 0; known positives passed (1 real section, 1 synthetic)); hits screened by snippet, none a tenant disclosure duty.
- `inspection-condemnation-disclosure` (2 states): Answered elsewhere: `edu-condemned-premises-wa`.
- `lead-safe-certification` (2 states): Answered elsewhere: `edu-lead-based-paint-wa`; no state certificate attached to leases.
- `meter-conservation-charge` (1 states): Not applicable: South Carolina rule.
- `ordnance-demolition-meter-disclosures` (1 states): Answered elsewhere: Military zones `edu-no-military-zone-disclosure-wa`; demolition, substantial rehabilitation or change of use needs at least 120 days' notice (RCW 59.18.200(2)(c)(i), 59.18.650(2)(f); not in jurisdictions with an RCW 59.18.440 relocation program that otherwise give 120 days' notice; `edu-for-cause-eviction-wa`); shared meters `edu-no-submetering-statute-wa`.
- `pest-control-notice` (1 states): Answered elsewhere: `edu-pest-control-wa` (its notes record that it answers this topic).
- `private-well-testing` (1 states): Confirmed absent: No landlord well-testing or disclosure duty to tenants (WA battery 46 (private well testing for tenants): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (WA battery 252 (private well water testing near tenancy words (everyday rerun of 46)): 43 hits, control 0; known positives passed (0 real sections, 1 synthetic)); the rerun's hits include the drinking water system rules (chapters 246-290 and 246-291 WAC), which can reach a well serving several connections and were not read for rentals (§7).
- `prop65-rental-warning` (1 states): Not applicable: California rule.
- `property-tax-rent-disclosure` (1 states): Not applicable: Nevada rule.
- `required-disclosures` (2 states): Answered elsewhere: Washington's list: `landlord-disclosure-wa`, `fire-safety-notice-wa`, `mold-disclosure-wa`, `flood-disclosure-wa` (from 2027), `deposit-depository-wa`, `security-deposit-use-wa`, `nonrefundable-fees-wa`, `portable-cooling-device-wa` (if window units are restricted), `edu-tenant-screening-wa`, `edu-smart-access-wa` (from 2027), `lead-based-paint` (tagged); layout in §4.
- `sex-offender-disclosure` (4 states): Answered elsewhere: `edu-sex-offender-wa` (no landlord disclosure duty) (WA battery 53 (sex offender and rental housing): 15 hits, control 0; known positives passed (1 real section, 0 synthetic)).
- `sfr-occupancy-disclosure` (1 states): Not applicable: Nevada rule.
- `sprinkler-disclosure` (1 states): Answered elsewhere: The fire safety notice states whether the building has a sprinkler system, except for a single-family residence (RCW 59.18.060(12)(a)(ii); `fire-safety-notice-wa`).
- `steam-radiator-covers` (1 states): Not applicable: New Jersey rule.
- `tpa-exemption-notice` (1 states): Not applicable: California rule. Washington's rent-limit exemptions are claimed in the increase notice (`edu-rent-increase-limit-wa`).
- `tpa-notice` (1 states): Not applicable: California rule. `edu-for-cause-eviction-wa`.
- `truth-in-renting` (2 states): Answered elsewhere: `edu-no-tenant-rights-statement-wa` (WA battery 232 (tenant rights statement / landlord-tenant information, rerun of 122 (wider window, website form)): 4 hits, control 0; known positives passed (1 real section, 0 synthetic)).
- `window-guards` (2 states): Confirmed absent: No window-guard duty for rentals (WA battery 44 (window guards / window fall prevention): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic)); the hits are residential building code provisions for construction.
- `confession-of-judgment` (2 states): Answered elsewhere: `edu-prohibited-lease-terms-wa` (RCW 59.18.230(2)(d)) (WA battery 94 (confession of judgment): 9 hits, control 0; known positives passed (1 real section, 0 synthetic)).
- `employee-screening` (1 states): Not applicable: Florida rule; not searched for Washington.
- `eviction-penalty-clause-ban` (1 states): Answered elsewhere: `edu-prohibited-lease-terms-wa` (eviction agreements, RCW 59.18.230(1)(b); fees, (2)(e)).
- `exculpatory-clauses` (5 states): Answered elsewhere: `edu-prohibited-lease-terms-wa` (RCW 59.18.230(2)(f)) (WA battery 170 (liability limitation / exculpation / indemnity): 55 hits, control 0; known positives passed (1 real section, 0 synthetic)).
- `fire-sprinkler-duty` (2 states): Answered elsewhere: No retrofit duty for rentals (WA battery 42 (fire sprinklers (residential rental)): 12 hits, control 0; known positives passed (1 real section, 0 synthetic)); disclosure in `fire-safety-notice-wa`.
- `governmental-fines` (1 states): Answered elsewhere: Association fines reach tenants after notice and a hearing (`edu-hoa-wa`) (WA battery 213 (association fines and rules reaching tenants): 1 hit, control 0; known positives passed (1 real section, 0 synthetic)); no rule on passing other government fines through (not searched).
- `lease-content-requirements` (1 states): Answered elsewhere: `edu-no-lease-completeness-rule-wa` lists what must be in the lease; `edu-lease-copy-wa`.
- `lease-type-size` (1 states): Answered elsewhere: `edu-no-plain-language-rule-wa` (WA battery 180 (formatting: type size / point type): 229 hits, control 0; known positives passed (1 real section, 0 synthetic)).
- `written-notice-required` (1 states): Answered elsewhere: `edu-tenant-repair-remedies-wa` (written repair notice), `edu-notice-delivery-wa`.

Tally: Answered elsewhere 79, Confirmed absent 11, Not applicable 44, Not located 1, Not offered 5.

### 18.3 'Topics no state has a row for yet'
The reference carries no such list; every topic has rows in at least one state and is answered in §18.1 or §18.2.

## 19. Step D screens (rules 40-53), one line each
- **35 constitution:** loaded before the first battery; art. I, §§ 7, 21, 24 and art. XIX screened; only § 21 (jury) reaches a row as a decision (`edu-jury-waiver-wa`).
- **37 tenancy type:** notices and rights differ for month-to-month, fixed-term under (1)(b), fixed-term under (1)(c) and other fixed terms (RCW 59.18.650(1)); tenant notice 20 days (RCW 59.18.200(1), 59.18.650(1)(f)); rent limit applies to every tenancy type; mobile home lots flagged where they differ.
- **39 eviction duties:** post-writ property and storage requests (`edu-post-eviction-property-wa`); no self-help (`edu-self-help-eviction-wa`); limited dissemination of records (`edu-eviction-record-sealing-wa`); right to counsel, reinstatement and hardship stays (`edu-eviction-process-wa`, `edu-eviction-hardship-stay-wa`); state and local court rules read (§1.1, §7).
- **40 formatting and placement:** batteries 117, 180-187; no type-size or bold rule for leases; layout table §4.
- **41 just cause:** RCW 59.18.650, recorded in `edu-for-cause-eviction-wa`; shared end-of-term wording replaced (§2.2).
- **42 required text in a shared clause:** deposit withholding terms (`security-deposit-use-wa`), nonrefundable fees (`nonrefundable-fees-wa`), the fee-in-lieu form, the window-unit notice; each is its own clause.
- **43 cure promises:** `default-by-tenant-wa` promises no cure beyond the statutory 14-day and 10-day notices and keeps the 3-day no-cure ground; `early-termination` (10-day cure for any breach) not tagged.
- **44 terms turned into duties:** landlord-supplied appliances and facilities must be maintained (RCW 59.18.060(8); `appliances-included`); agreed services; agreed utilities (`edu-heat-alert-utility-wa`); the repair remedies reach defects in what the landlord supplies.
- **45 electronic notices:** the electronic records chapter (RCW 1.80.040, 1.80.060, 1.80.070) read for the notice and signature rows; termination and eviction notices follow RCW 59.12.040 and 59.18.055 (`edu-notice-delivery-wa`); electronic-only rent payment barred.
- **46 lease as the notice:** the fire safety notice, landlord identity, flood disclosure, deposit terms, depository notice and window-unit notice can be lease paragraphs; the checklist, screening notice, increase notice, smart access policy and death designation cannot (§4).
- **47 knowing-use penalties:** RCW 59.18.230(3) (actual damages, up to twice the monthly rent, fees; `edu-knowing-use-penalty-wa`); no WA clause contains an RCW 59.18.230(2) term (independent check); Collection Agency Act definition read, its prohibited practices not (§7).
- **48 separate documents:** RCW 59.18.590(1)(b) (death designation), RCW 59.18.360 (exemption agreement), RCW 59.18.670(2)(a) (separate acknowledgment inside the lease); no separate-writing rule for tenant chores.
- **49 collection costs:** RCW 59.18.230(2)(e) and 59.18.410(1); RCW 4.84.330 makes a one-way fee clause reciprocal (`edu-attorney-fees-wa`); collection and notice-service fees not offered.
- **50 'the lease controls':** each choice made on purpose: deposit interest (RCW 59.18.270: statutory default kept), the fixed-term options (RCW 59.18.650(1)(b)-(c): offered as options), late fees only as the lease provides (`late-fee-wa`), rules brought to the tenant's attention at move-in (RCW 59.18.140(1)), the due-date change only where the lease allows late fees (`edu-rent-due-date-change-wa`).
- **51 plain language and consumer contracts:** no plain-language statute for leases (battery 117); CPA in `edu-consumer-protection-act-wa`.
- **52 exculpation:** RCW 59.18.230(2)(f); the ks-oh and ks-oh-ca variants tagged; `pet-policy-wa` without the indemnity.
- **53 figures vs shared clauses:** `late-fee` (grace period), `returned-payments` and `holdover` (ceiling-only), `due-at-signing` (installments), `landlords-access` (24 hours vs two days) replaced; `security-deposit-use` (statutory limits) replaced.
- **54t tenant-caused damage:** answered exit by exit in `tenant-caused-damage-wa` (§6.1).
- **79 summaries re-read:** every row written section-open; qualifiers attached to their own sentences; 15 independent-check rounds and a check of this log (§13). No WA clause lacks a basis.

## Proposed SOP changes
1. Rule 19: run the 'all known positives passed' check over the whole battery log after a run finishes, never on a partial log; Washington's early check read the first records only and missed seven failed batteries, found on the full log and rerun.
2. Rule 80: the tool checkers use to print a section must print the whole section; Washington's cut sections at 6,000 characters, which round 7 found, and 38 rows had to be re-checked against the tail text.
3. Rule 59: the helper that registers a quote should require the quote's full citation next to it in the row; Washington added a script that fails a quote without its full citation within the preceding 160 characters.
4. Rule 19: a battery with a tenancy-word context filter can miss rules written in another regime's vocabulary (Washington's pool rules in chapter 246-260 WAC, the CPA weatherization exception); before citing it for an absence, rerun without the filter or with the regime's own term of art.
5. Rule 30: before writing an absence, read the neighbouring sections of the act; Washington first recorded no landlord self-cure rule while RCW 59.18.180 provides one.
6. Rule 27: run the topic canvass before the independent check, not while writing the log; Washington's water-heater rule (RCW 19.27A.060) sat in battery 40's hits until the canvass, so its row was checked only in the last round.
7. Rule 14: generate a battery record's corpus label from the loaded index; Washington's records say 52,036 RCW sections where the index holds 52,061.

## Proposed topic questions
1. `water-heater-temperature`: Does a statute outside the landlord-tenant act (an energy or building chapter) require the owner to set an individual water heater's temperature at each new occupancy? (Washington, RCW 19.27A.060(3).)
2. `for-cause-eviction`: Does the just-cause statute let a fixed term end without cause only if the lease uses specified options, so that without them the tenancy becomes month-to-month? (Washington, RCW 59.18.650(1)(b)-(d).)
3. `rent-control`: Does a statewide rent-increase limit count recurring fees as rent, and does it expire on a set date? (Washington, RCW 59.18.030, 59.18.700(8).)
4. `security-deposit-holding`: Must the landlord give written notice of the depository, and who keeps trust-account interest unless the lease says otherwise? (Washington, RCW 59.18.270.)
5. `guest-policy`: On mobile home lots, does a live-in care provider statute limit a guest-stay or consent clause, and do lot rules need their own notice and grace period? (Washington, RCW 59.20.145, 59.20.045(6).)
6. `dv-lease-termination`: Does a victim of the landlord have a separate route (leave first, or change locks with the lease ending automatically unless the tenant opts to stay)? (Washington, RCW 59.18.575(3)-(4).)
7. `pool-safety`: Do health-department water recreation rules reach pools at apartments and rental housing, with exclusions for single-family homes and owner-occupied duplexes? (Washington, chapter 246-260 WAC; RCW 70.90.250.)

## Sync (Claude Code, 2026-10-04)

- **Merged** with `merge-delta.py --base 97cfed4` (the 3,175-row library the kickoff was staged from), after the circle-back syncs that ran meanwhile: 40 rows tagged, the 2 dormant WA rows rewritten and activated, 154 new; nothing refused. Library 3,336 rows; WA 196 active (68 lease clauses, 128 education); every other state's set unchanged.
- **Fixed at sync:**
  - `lease-end-continuation-wa` and `fixed-term-end-without-cause-wa` share `automatic-renewal` (§10 item 5). A choice group was tried and taken out: the app requires every choice group to have one default (a backend test enforces it), and neither option may be a default. The eligibility brackets limit each, the notes say a lease uses at most one, and an "at most one, or none" control is a builder gap in the backlog.
  - `pet-policy-wa` pointed to "the Security Deposit section of this Lease", but WA's deposit clauses are titled "Use of Security Deposit" and "Return of Security Deposit"; reworded to "this Lease's provisions on the use and return of the Security Deposit".
  - `assistance-animal-accommodation-wa` was titled "Assistance Animals", which the section-pointer guard matched inside other states' pointers to their "Service and Assistance Animals Section"; retitled "Service and Assistance Animals", the title most states use.
- **Rule 27:** all seven topics have WA rows; no rows added at sync.
- **Citations file:** `lease-clause-citations-WA.csv` built from each row's WA note segment (196 rows: 165 cited, 25 confirmed absent with their batteries, 6 generic).
- **Legal watch:** WA config in `stateConfig.js` (RCW sections only, query paired with "RCW"; 179 sections), federal lead checks, and four manual items (the 2027 and 2028 dated versions, the 2040 rent-limit expiry and yearly maximum, the WAC and court rules). `legal-watch-wa.yml` committed held until after 2027-07-06; first run 2027-08-06, day 6 at 14:00 UTC.
- **Topic questions:** the seven proposed above plus one for each new topic key (`portable-cooling-device`, `lease-type-parity`, `smart-access`).
- **Guards:** all pass. **Statute spot-check, 5 of 5, against the official RCW 59.18 text fetched from app.leg.wa.gov on 2026-10-03:** § 59.18.650(1)(b) (initial term of six to 12 months, notice before the end) and (1)(c) (12 months or more, or successive terms of six months or more); § 59.18.170(2) (no late fee for rent paid within five days of its due date); § 59.18.150(6) (at least two days' written notice of entry, with the date and time window); § 59.18.280(1)(a) (full and specific statement within 30 days).
- **SOP 1.54:** all seven proposals adopted (rules 14, 19, 27, 30, 59, 80); WA column added. The §10 flags are in the backlog (builder inputs, two new variables for M.14, separate documents).
- **Rule 62:** no shared text changed. WA is not tagged on `default-by-tenant` or `surrender-end-of-term`, so no pending vetting reaches it.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for WA. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any WA row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach WA's law; to be confirmed at WA's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.
