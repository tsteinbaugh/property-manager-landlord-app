# Wisconsin — lease-clause decision log (state #33)

**Date:** 2026-10-03 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** none of the three rule-9 triggers needed it, because the whole Wisconsin Statutes, the whole Wisconsin Administrative Code and the Wisconsin Constitution were loaded, saved and hash-matched before the first battery, giving full-text proof of absence and cross-chapter search directly (rule 9). Claude can't switch research mode on or off; only Taylor can.
**Kickoff vs SOP:** no conflict found. Citation formats are the kickoff's (`Wis. Stat. § 704.28(4)(a)`, `Wis. Stat. §§ 704.17, 704.19`, `Wis. Admin. Code ATCP § 134.06(2)`, `2025 Wis. Act 29`, `Wis. Const. art. I, § 5`, `Koble Investments v. Marquardt, 2026 WI 19, ¶ 4`), checked by script (§8). The kickoff gives no format for supreme court rules; the one row that cites them writes `SCR 72.01(8)`-style references by their own name (flagged §10). Short forms such as '§ 704.28' appear inside a row only after the full `Wis. Stat.` or `Wis. Admin. Code` form of the same source in that note, and freely in this log.
**Scope:** Wisconsin state law only. Milwaukee and Madison ordinances (and any other local rule) are flagged, not resolved (rule 3); state law limits what localities may do (Wis. Stat. §§ 66.0104, 66.1010, 66.1015; Wis. Admin. Code ATCP § 134.10). Named and out of scope: manufactured home community site rentals (Wis. Stat. § 710.15; Wis. Admin. Code ch. ATCP 125; flagged in the rows where they differ), the ATCP ch. 134 exclusions (Wis. Admin. Code ATCP § 134.01, including government-owned units and housing provided free or as pay to an employee who operates or maintains the premises), self-service storage (Wis. Stat. § 704.90), campgrounds (Wis. Stat. § 704.96), commercial and agricultural leases.
**Input CSV:** `lease-clauses.csv`, **3,013 rows, 17 columns, 2,892 active (698 lease clauses, 2,194 education)**, sha256 cb47720aba5e106948e650bacbb137270d5dbe0ce25ca2d85ccd48930fe06800; every per-state active count matched the kickoff exactly (rule 23). No WI rows existed (rule 25). This is Wisconsin's only Desktop chat and its first work, so there were no earlier output files to delete (rule 8).
**Output CSV:** `lease-clauses-WI-delta.csv`, **196 rows, 17 columns, CRLF** (sha256 aad4ea5f1d027aba5d0b7276c61ba8fc6cacef80efd6e1886de178c533cde559): 47 existing rows with `WI` added to `states`, a `WI:` note appended and `last_checked` 2026-10-03, and 149 new WI rows. **WI 196 active: 82 lease clauses (47 tagged + 35 new), 114 education; all VERIFIED.** Merged with the master: 3,162 rows, 3,041 active; every other state's active count unchanged. **No shared row's text changed.**

---

## 0. Completion status

| | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§14: Wis. Stat. ch. 704 (34 sections) and Wis. Admin. Code ch. ATCP 134 (10 sections) read whole; the eviction sections of Wis. Stat. ch. 799 read whole; both chapters' section lists diffed against every citation in the WI rows; every uncited section listed with its reason) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: University of Wisconsin–Madison, "University Apartments Lease, Terms and Conditions: July 1, 2026–June 30, 2027", 31 numbered items mapped provision by provision; weaker lead, reasons given) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 62 scenarios, Claude-generated on the MT §16 model plus Wisconsin-specific ones, run against the final rows; every scenario answered by a row) |
| Gap-discovery source 4 — outside-title search | Done (§17: the whole Wisconsin Statutes (18,153 sections), the whole Wisconsin Administrative Code (21,437 sections) and the Wisconsin Constitution (174 sections) loaded before the first battery and searched with 226 batteries; control 0 hits in every battery; every absence pattern tested against known positives; 7 battery records with a failed or missing known positive, all recorded and rerun; relied-on hits read whole) |
| Primary text read | **Read whole and saved, browser SHA-256 equal to file SHA-256 (`sources/registry.tsv`):** the whole Wisconsin Statutes (2023-24, updated through 2025 Wis. Act 247) with history lines, notes and annotations; the whole Wisconsin Administrative Code (current through Register September 2026, No. 849) with notes; the Wisconsin Constitution; ch. ATCP 134 and ch. ATCP 125 as a separate check copy; the 2025 acts that touch ch. 704 or tenant rights (§1.2); SCR ch. 72 and the 2024 orders on eviction-record retention (wicourts.gov); the supreme court's opinion in *Koble Investments v. Marquardt*, 2026 WI 19 (wicourts.gov); the real lease. **Cases otherwise:** read only as the site's statute annotations, labelled so in the rows (§1.4). |
| Step B — tag first | **Done.** 47 existing rows tagged WI (§2.1), including the ks-oh-ca / ks-oh variants, `surrender-end-of-term-ks-ne`, `tenant-forward-proceedings-ca`, `extended-absence-notice-ks` and the single-state `utility-allowance-cap-co`. 27 shared rows (26 multi-state plus the blank-states `security-deposit-return` parent) screened and not tagged (§2.2). All 625 single-state clauses screened as a triage (§2.3). No shared text edited. |
| Step E — new WI rows | 35 lease clauses (17 of them options under rule 54, §6.1) and 114 education rows; 26 education rows carry a CONFIRMED ABSENT search record (§3). |
| Rule 25 family | `security-deposit-return-wi` (21 days from the § 704.28(4) trigger dates; withholding statement; ATCP § 134.06(2), (4)). |
| Step D screens | All run (§19). The § 704.44 / ATCP § 134.08 void-agreement list was the decisive screen: it turned `default-by-tenant`, `pet-policy`, `landlord-maintenance`, `smoking-policy`, `early-termination`/`-ks`, the 'not liable' bases and `rent-concession-az` (§2.2, §6.1). |
| Optional clauses (rule 54) | 17 new optional clauses plus statutory options carried by tagged rows; 5 lawful options declined, each with an education row; barred options listed (§6.1). |
| Questions to Taylor (rule 76) | None needed (§6.2). Every call was legal or drafting and is recorded in §6.3. |
| Proof of absence | 26 education rows carry a CONFIRMED ABSENT record (battery, hit count, known-positive result); every topic in the reference ends Present, Confirmed absent, Answered elsewhere, Not offered or Not applicable (§18). 7 battery records carry a failed or missing known positive; each is recorded and rerun (§1.3). |
| Independent check | Separate agents checked all 196 rows against the saved sources in six rounds: round 1, 4 ERROR (1 rejected on the source text), 44 FIX, 45 NOTE; round 2 re-checked the 98 rows edited (1 ERROR, 7 FIX, 21 NOTE); round 3 the 27 rows edited after round 2 (0 ERROR, 1 FIX, 11 NOTE); round 4 the 14 rows edited after round 3 (0 ERROR, 1 FIX, 2 NOTE); round 5 the 3 rows edited after round 4 (0 ERROR, 2 FIX, 1 NOTE); round 6 the 2 rows edited after round 5 (0 ERROR, 0 FIX, 3 optional NOTE) (§13, rule 80). |
| Case law that changed rows | *Koble Investments v. Marquardt*, 2026 WI 19 (decided June 5, 2026) reversed the court of appeals decision the statute annotations still report; it was saved and read, and eleven rows were corrected (§1.4, §10). |
| Currency | Wisconsin Statutes updated through 2025 Wis. Act 247; Administrative Code through Register No. 849 (September 2026). Every cited statute's history line overlaid for 2023 and 2025 acts; the acts touching ch. 704 or tenant rights read as enrolled, with delayed effective dates recorded (§1.2). |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Statutes, Administrative Code and Constitution:** docs.legis.wisconsin.gov (Legislative Reference Bureau). **Channel:** the built-in browser loaded each chapter's document pages in one corpus tab and saved JSON to Taylor's Downloads folder; the files were staged into the workspace and hash-matched (browser SHA-256 = file SHA-256). Files and hashes (`sources/registry.tsv`): `wi-statutes-corpus-20261003.json` (f7afefbd756b3270968bd5736ed66077cddb5bad2be9a91e52a5c635c54621ed; statutes and Constitution), `wi-admin-code-corpus-20261003.json` (c971b4b8afe449e22895a64b5bbcd8aa1bd070619aa77e04b2bd08316f0d5f9b), `wi-atcp134-125.json` (9037d135…2013; check copy of ATCP chs. 134 and 125).
- **Session laws:** the site's 2025 act pages (`wi-acts-2025.json`, bd5772c8…98c; Acts 29, 90, 105, 129, 151) and the enrolled PDF of 2025 Wis. Act 129 read with pdf.js 3.11.174 from cdnjs (`wi-act-2025-129.txt`, 23b75b1e…5ca; PDF sha 063dcbc2…).
- **Court rules and orders:** wicourts.gov, SCR ch. 72 (PDF last modified 2026-05-19, sha 087dc91e…) and the 2024 WI 24 orders on Rule Petition 22-03 (amended order filed July 31, 2024, sha 486086a1…; June 18, 2024 order, sha 2e87212f…), saved as `wi-court-rules-20261003.json` (99f93f55613291e04fe50820ea9608a8ef5c34fe49d56fae1223281fa8b339c9). Taylor's browser granted wicourts.gov access for this. The local circuit court rules page (`localrules.htm`) returned 404 (§7).
- **Case:** wicourts.gov, *Koble Investments v. Marquardt*, 2026 WI 19, No. 2022AP182, decided June 5, 2026; opinion PDF (sha 7f73da51…) read with pdf.js and saved as `wi-case-koble-2026wi19.json` (dddebfa328b268210a762e2925435eeaa02f38405083eb89fe954c20591cde1d).
- **Real lease:** University of Wisconsin–Madison, Division of University Housing (§15), `wi-real-lease-uw-ua-2026-27.pdf` (8b6206515b907b1197d41f0f0dff86e4ea9eac1db254b5703bfe2a57a5d2eff5) and its pdf.js text.
- **Citation format:** the kickoff's; log references written 'WI log §N'.

### 1.2 Currency (rule 16)
- **Compiled text:** the Wisconsin Statutes as published on 2026-10-03, '2023-24 Wis. Stats.' updated through 2025 Wis. Act 247; the Administrative Code current through Register September 2026, No. 849. The site prints delayed-effective versions as notes beside the current text; every row that cites such a section was checked against both versions.
- **Overlay:** the history line of every statute the WI rows cite (129 sections) was scanned for 2023 and 2025 acts. Acts touching ch. 704, ch. 799 or tenant rights, read as enrolled (act page or PDF) with their effective dates:
  - **2025 Wis. Act 29** (SB 235): created Wis. Stat. § 704.96 (ch. 704 does not apply to campground occupants and guests) and amended § 943.13; enacted August 8, 2025, published August 9, 2025; no delayed date, so effective the day after publication (Wis. Stat. § 991.11). `edu-scope-wi`.
  - **2025 Wis. Act 90** (SB 413): amended Wis. Stat. § 704.16 (sexual-assault grounds, new sub. (1m) and (2m), lock-change documents); enacted March 6, 2026, published March 7, 2026. `edu-dv-termination-wi`, `edu-security-devices-wi`, `edu-statutory-termination-wi`.
  - **2025 Wis. Act 105** (SB 787): raises small-claims amounts (Wis. Stat. §§ 799.01(1)(c)-(d), 421.202(6)), **effective January 1, 2027** (the site's effective-date notes); `edu-eviction-process-wi` states the change and date.
  - **2025 Wis. Act 129** (AB 926, correction bill): nonsubstantive corrections, including in Wis. Stat. § 106.50; read as enrolled; no row's wording depends on it.
  - **2025 Wis. Act 151** (AB 238): public accommodations for search-and-rescue dog handlers (Wis. Stat. § 106.52); not housing; screened only.
  - Other 2025 acts in the history lines of cited sections, relied on through the compiled text (not read as enrolled): Act 67 (Wis. Stat. § 710.15, manufactured home communities), Act 100 and Act 129 (§ 961.41), Act 117 (§ 66.0435), Acts 124, 127, 129 (§ 77.52), Act 127 (§§ 125.04, 66.0442), Act 173 (§ 59.69, **par. (a) amended effective January 1, 2028**), Act 179 (§ 814.61, **par. (1)(a) amended effective November 1, 2026**; the row cites § 814.61(4), unchanged), Act 196 (§ 342.40, **par. (3)(c) amended effective January 4, 2027**; the row cites § 342.40(1m), unchanged). None changes the provision a row relies on.
- **Administrative Code:** the latest ch. ATCP 134 changes are CR 14-038 (Register August 2015, effective 11-1-15) and a correction in ATCP § 134.05(4)(a) (Register October 2021, No. 790); PSC § 113.0803 was amended by CR 25-010 (Register November 2025, effective 12-1-25), which `edu-meters-wi` reflects.
- **Stale annotations (rule 77 extended):** the site's annotations to Wis. Stat. §§ 421.301, 427.104 and 704.44 still describe *Koble Investments v. Marquardt*, 2024 WI App 26, which the supreme court reversed in 2026 WI 19 (§1.4, §10).

### 1.3 Corpus and method (rule 19)
- **Loaded:** the whole statutes corpus (18,153 sections plus the Constitution's 174 sections) and the whole Administrative Code (21,437 sections), each with history lines and notes, before the first battery. **Completeness (proved from the saved files):** the statutes corpus holds all 470 chapters on the site's chapter list (each fetched with HTTP 200), and its 18,153 parsed sections equal the 18,153 table-of-contents entries in those chapters; the Administrative Code corpus holds all 1,778 chapters on the site's 69 group indexes, and its 21,437 parsed sections equal its table-of-contents entries except one empty entry in ch. N 9, which has no section text. Text the site shows only as a PDF image (42 statute paragraphs and 5,011 code paragraphs, mostly tables and forms, marked 'see PDF') was not searchable; no row relies on such a passage.
- **Engine:** Python over the saved, hash-matched corpus (`work/engine.py`): normalized text, headings reported separately as heading-only hits, an optional section-wide context filter and scope recorded with each battery; index size 39,764 searchable sections. Control term in every battery: 0 hits.
- **Batteries:** 226 (ids 1 to 227; 210 unused), saved as `batteries/wi-batteries-1.jsonl` (1-164), `-2.jsonl` (165-178), `-3.jsonl` (179-186), `-4.jsonl` (187-205), `-5.jsonl` (206-216), `-6.jsonl` (217-219), `-7.jsonl` (220-222), `-8.jsonl` (223) and `-9.jsonl` (224-227). A dry run (`wi-batteries-dry.jsonl`) was a pattern test only; no row cites it.
- **Known positives:** every absence battery ran with real saved sections, synthetic statute-style sentences or both, in the same step. **Failures and reruns, all recorded:** 36 → 165 (smoking in dwellings); 74 → 166 (abandoned property); 148 (unconscionability, no known positive) → 167; 207 → 217 (rent due date; the synthetic positive lacked a context word); 209 → 218 (tenant duty to notify; window widened); 214 → 219 (tenant termination rights; passive wording added; 220 adds 'tenancy is terminated' wording); 222 → 223 (parking rules; window widened). Every row and §18 entry cites a failed battery only as 'recorded as failed, rerun as N'.
- **Zero-hit batteries with only synthetic positives (rule 19):** each was followed by an everyday-word rerun: 18 → 168; 30 → 169; 33 → 170; 38 → 171 (171 repeats 37's pattern; 221 searches both word orders, 1 irrelevant hit); 72 → 172; 128 → 173; 135 → 174; 137 → 175; 149 → 176; 152 → 177; 154 → 178 (and 205); 187 → 224; 191 → 225; 197 → 226; 203 → 227; 115 → 204 (204 is the narrower check); 193 sits beside 153 (1 hit).
- **Narrowed views without known positives (179-186):** reruns of high-hit whole-code batteries narrowed to passages near tenancy words, to make their hits readable; rows cite them as 'no known positive (narrowed view; see WI log §17)' only beside the full-code battery.
- **Boundary:** the batteries searched the Wisconsin Statutes, the Wisconsin Administrative Code and the Wisconsin Constitution. Case law (beyond the one opinion read), local ordinances, federal law beyond the provisions named and the local circuit court rules were not searched, and nothing is claimed about them.
- **Saved:** batteries 1-227 with pattern, scope, context filter, positives, hits, heading-only hits and control count; the corpora; the acts; the court rules; the opinion; the real lease; the registry. Every battery citation in the rows and in §18 was generated from the saved logs by `work/build.py`, which refuses to cite a battery with a failed positive (163 batteries cited in the rows).

### 1.4 Section-open vs recall; case law (rule 15, rule 21)
Every row was drafted with the saved primary text open (each WI note ends 'Rule 15: written section-open'); the recall subset is empty. Every single-quoted passage in a WI note (335) was checked by script against the saved statutes, code, notes, annotations, court rules, opinion, real lease and master bodies: 0 mismatches. The § 704.14 notice in `dv-protections-notice-wi` matches the statute line for line.

**Case law read:** *Koble Investments v. Marquardt*, 2026 WI 19. The court held that Wis. Stat. § 427.104 'does not govern a residential lease under which rent is payable on a monthly basis' (¶ 4), because such a lease is not an agreement to defer payment (¶¶ 12-16), and that 'Chapter 704 of the Wisconsin Statutes governs residential leases' (¶ 22). It did not decide whether a lease barring unlawful use without the § 704.14 notice is void under § 704.44(10): 'We do not need to resolve this issue' (¶ 25), because the tenant showed no pecuniary loss for § 100.20(5) damages (¶¶ 25-26). Rows changed: `edu-consumer-protection-wi`, `late-fee` tag, `residential-use-only` tag, `dv-protections-notice-wi`, `criminal-activity-wi`, `edu-prohibited-terms-wi`, `edu-criminal-eviction-wi`, `edu-deposit-penalty-wi`, `returned-payments-wi`, `default-by-tenant-wi`, `edu-late-fee-wi`.

**Read only as the site's annotations (labelled so in the rows):** Johnson v. Blackburn, 220 Wis. 2d 260 (Ct. App. 1998) (guests); State v. Lasecki, 2020 WI App 36 (deposit statement); Pierce v. Norwick, 202 Wis. 2d 588 (1996) (deposit damages, via the ATCP § 134.06 note); Parsons v. Associated Banc-Corp, 2017 WI 37 (jury waiver 'prescribed by law'); Koble, 2024 WI App 26 (reported, then reversed).

**Case-law questions and outcomes (rule 21):**
- Whether § 422.203's delinquency-charge cap or § 422.202's dishonored-check cap reaches residential rent after Koble: **answered by reasoning from Koble ¶¶ 15-16, labelled Claude's reading**; no later case searched.
- Whether a lease barring unlawful use without the § 704.14 notice is void: **open after Koble ¶ 25**; the library prints the notice in every lease.
- Penalty doctrine for late fees; whether late fees are 'Unpaid rent' deductible under § 704.28(1)(b); enforceability of a pre-dispute lease jury waiver; whether the price-gouging statute (§ 100.305) reaches rent; whether a housing choice voucher is a 'lawful source of income'; whether § 990.001(4)(b)'s Sunday and holiday rule moves a § 704.19 notice date; rent-increase notice for month-to-month tenancies: **not searched.** Each row that depends on one says so.

**Federal law:** 42 U.S.C. § 4852d (lead, shared row) only; the Fair Housing Act, HUD assistance-animal guidance, the Servicemembers Civil Relief Act, the Protecting Tenants at Foreclosure Act, VAWA and federal antitrust law were not read, and the rows say so.

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged WI as written (47)
| Row | Wisconsin basis (from the WI note) |
|---|---|
| `rent-payment` | WI: Applies as written. No Wisconsin statute requires a particular payment method (WI battery 6 (rent payment method / electronic payment): 8 hits, control 0; known positives passed (1 real section, 1 synthetic)) or sets the day rent is due (WI battery 217 … |
| `late-fee` | WI: Applies as written, with builder conditions. A landlord may not charge a late rent fee 'except as specifically provided under the rental agreement'; before charging one the landlord 'shall apply all rent prepayments received from that tenant to offset the … |
| `due-at-signing` | WI: Applies as written, with a builder note: rent paid in advance beyond one month's prepaid rent is a 'security deposit' (Wis. Admin. Code ATCP § 134.02(11)), so a last month's rent collected with the first month's rent must be returned or accounted for … |
| `application-of-payments` | WI: Applies as written. No Wisconsin statute fixes the order of applying payments; ATCP § 134.09(8)(b) requires rent prepayments to be applied to rent owed before a late fee is charged, which this clause's rent-first order respects (Wis. Admin. Code ATCP § … |
| `residential-use-only` | WI: Applies as written, but only alongside `dv-protections-notice-wi`: the court of appeals held void under Wis. Stat. § 704.44(10) a lease that lacked the Wis. Stat. § 704.14 notice and barred knowingly permitting use of the premises for an unlawful purpose, … |
| `permitted-occupants` | WI: Applies as written. Occupancy limits may not discriminate on the grounds in Wis. Stat. § 106.50(1m)(h), including family status; complying with reasonable government occupancy limits is not family-status discrimination (Wis. Stat. § 106.50(5m)(e)). No … |
| `no-disturbance` | WI: Applies as written; it tracks the tenant's statutory duty not to use the premises 'in such manner as to interfere unreasonably with use by another occupant of the same building or group of buildings' (Wis. Stat. § 704.05(3)). |
| `utilities-responsibility` | WI: Applies as written. Where charges for water, heat or electricity are not included in the rent, the landlord must disclose that fact before entering into the rental agreement or accepting earnest money or a security deposit (Wis. Admin. Code ATCP § … |
| `utility-service-continuity` | WI: Applies as written. |
| `utility-payment-evidence` | WI: Applies as written. A landlord may withhold from the security deposit payment the tenant owes for direct utility service by a government-owned utility only to the extent the landlord becomes liable for the tenant's nonpayment (Wis. Stat. § 704.28(1)(d)). |
| `acceptable-payment-methods` | WI: Applies as written. No Wisconsin statute requires or bars electronic rent payment (WI battery 6 (rent payment method / electronic payment): 8 hits, control 0; known positives passed (1 real section, 1 synthetic)). If rent is paid in cash, the landlord … |
| `tenant-maintenance` | WI: Applies as written. It does not shift any landlord duty under Wis. Stat. § 704.07(2), which cannot be waived (Wis. Stat. § 704.07(1); § 704.44(8)); the carve-out for conditions the law requires Landlord to repair keeps it inside that line. Tenant duties: … |
| `no-sublet-assign` | WI: Applies as written. A tenant at will or a periodic tenant for less than year-to-year may not assign or sublease without the landlord's consent; any other tenant may transfer 'except as the lease expressly restricts power to transfer' (Wis. Stat. § … |
| `no-alterations` | WI: Applies as written. Wis. Stat. § 704.05(3) bars physical changes 'without prior consent of the landlord' unless the lease provides otherwise. Its last sentence preserves the reasonable modifications a tenant with a disability may make at the tenant's … |
| `joint-liability` | WI: Applies as written. A notice given to one of several cotenants is deemed given to all (Wis. Stat. § 704.21(4)). |
| `utilities-paid-by-landlord` | WI: Applies as written. Rule 44: services the landlord 'has expressly or impliedly agreed to furnish to the tenant, such as heat, water, elevator, or air conditioning' become a landlord repair duty for the equipment that supplies them (Wis. Stat. § … |
| `appliances-included` | WI: Applies as written. Equipment 'furnished with the premises' must be repaired or replaced when no longer in reasonable working condition, except for residential premises subject to a local housing code and except minor repairs the tenant must make (Wis. … |
| `landlords-access` | WI: Applies as written; it promises more notice than the 12-hour minimum (Wis. Admin. Code ATCP § 134.09(2)(a)2.) and its purposes are within Wis. Stat. § 704.05(2). Wisconsin also allows entry without notice in a health or safety emergency or when the tenant … |
| `possession-delay` | WI: Applies as written. A landlord may not fail to deliver possession at the agreed time 'except where the landlord is unable to deliver possession because of circumstances beyond the landlord’s control' (Wis. Admin. Code ATCP § 134.09(6)); no Wisconsin … |
| `notices` | WI: Applies as written. Notices under ch. 704 must be given by a method in Wis. Stat. § 704.21; Wisconsin's electronic-transactions act does not apply to a notice of default, eviction or the right to cure under a rental agreement for a primary residence, to … |
| `governing-law` | WI: Applies as written. Local ordinances are limited by Wis. Stat. §§ 66.0104, 66.1010 and 66.1015 and Wis. Admin. Code ATCP § 134.10 (rule 3; not resolved). |
| `severability` | WI: Applies as written, but it does not save a lease that contains a provision listed in Wis. Stat. § 704.44 or Wis. Admin. Code ATCP § 134.08: those sections make the whole rental agreement 'void and unenforceable' 'Notwithstanding s. 704.02', the … |
| `entire-agreement` | WI: Applies as written. No Wisconsin statute lets a landlord raise rent during a fixed term by notice (WI battery 8 (rent increase notice): 12 hits, control 0; known positives passed (1 real section, 1 synthetic)); a periodic tenancy can be ended by the … |
| `electronic-signatures` | WI: Applies as written. Wis. Stat. ch. 137 gives electronic records and signatures legal effect between parties that have agreed to transact electronically (Wis. Stat. §§ 137.13(2), 137.15); a party may refuse further electronic transactions and 'The right … |
| `pet-insurance-requirement` | WI: Applies as written; no Wisconsin statute bars a renter's insurance requirement (WI battery 118 (renters insurance requirement / advisory): 4 hits, control 0; known positives passed (0 real sections, 1 synthetic)). It excludes assistance animals; a tenant … |
| `assigned-parking-space` | WI: Applies as written. The owner or lessee of a parking facility ancillary to a building and restricted wholly or in part to its tenants must, at a physically disabled tenant's request, reserve an accessible space for that tenant (Wis. Stat. § … |
| `parking-vehicle-rules` | WI: Applies as written. A vehicle parked on private property without authorization may be removed at the owner's expense; if the property is 'properly posted' it may be removed immediately, otherwise only after a citation or repossession judgment, and only by … |
| `keys` | WI: Applies as written. Rekeying costs are not among the standard security-deposit withholdings (Wis. Stat. § 704.28(1)); to deduct them from the deposit the landlord needs a nonstandard rental provision (`nrp-deposit-withholding-wi`). A tenant who obtains a … |
| `guest-policy` | WI: Applies as written. No Wisconsin statute limits a residential landlord's guest rules (WI battery 211 (guests and guest stays, whole code (unscoped rerun of 106)): 10 hits, control 0; known positives passed (2 real sections, 0 synthetic)) (a manufactured … |
| `guest-policy-day-limit` | WI: Applies as written; no Wisconsin statute limits guest stays or guest fees (WI battery 211 (guests and guest stays, whole code (unscoped rerun of 106)): 10 hits, control 0; known positives passed (2 real sections, 0 synthetic)). |
| `common-area-use` | WI: Applies as written. Wisconsin's flag-display right binds homeowners' associations and housing cooperatives, not landlords (Wis. Stat. § 710.17(2)), and the condominium flag and sign rule protects unit owners only (Wis. Stat. § 703.105) (WI battery 131 … |
| `fire-safety-grilling` | WI: Applies as written; no Wisconsin statute gives tenants a grilling right (WI battery 139 (grills / open flame): 3 hits, control 0; known positives passed (0 real sections, 1 synthetic)). The state fire code bars storing fuel for a grill on a balcony in … |
| `landscaping-irrigation` | WI: Applies as written for every dwelling. Wisconsin has no separate-writing rule for tenant chores (WI battery 113 (separate document / writing / instrument (rule 48)): 53 hits, control 0; known positives passed (3 real sections, 0 synthetic)); Wis. Stat. § … |
| `snow-removal` | WI: Applies as written for every dwelling (rule 48; Wis. Stat. § 704.44(6), (7)(b)). Local sidewalk snow ordinances may place duties on the owner (rule 3; not resolved). |
| `inspection-rights` | WI: Applies as written. Inspection is a statutory purpose for entry 'upon advance notice and at reasonable times' (Wis. Stat. § 704.05(2)); advance notice means at least 12 hours unless the tenant consents to less (Wis. Admin. Code ATCP § 134.09(2)(a)2.). |
| `lead-based-paint` | WI: Applies as written (federal: 42 U.S.C. § 4852d; 40 C.F.R. § 745.113). Wisconsin adds no lead disclosure for residential leases (WI battery 64 (lead paint / lead hazards): 69 hits, control 0; known positives passed (0 real sections, 1 synthetic)); its lead … |
| `hoa-compliance` | WI: Applies as written. Entering into a condominium rental agreement 'constitutes an agreement by the tenant ... to comply with this chapter, the rules and bylaws of the association, and the provisions of the declaration' (Wis. Stat. § 703.315(2)); the tenant … |
| `assistance-animal-accommodation` | WI: Applies as written. Wisconsin's housing law covers trained animals and emotional support animals separately (Wis. Stat. § 106.50(2r)(bg), (br)). For an emotional support animal the documentation may be requested 'from a licensed health professional', … |
| `utility-allowance-cap-co` | WI: Applies as written. No Wisconsin statute bars a utility allowance with tenant-paid overage; the overage is a utility charge 'not included in the rent', so it must be disclosed before signing (Wis. Admin. Code ATCP § 134.04(3)) and may be withheld from the … |
| `extended-absence-notice-ks` | WI: Applies as written as a contract term; no Wisconsin statute requires notice of an extended absence (WI battery 40 (tenant duty to report extended absence): 13 hits, control 0; known positives passed (0 real sections, 1 synthetic)). If the tenant is absent … |
| `tenant-forward-proceedings-ca` | WI: Applies as written as a contract term; no Wisconsin statute imposes or bars the duty (WI battery 218 (tenant duty to notify landlord (rerun of 209, wider window)): 8 hits, control 0; known positives passed (0 real sections, 1 synthetic)). |
| `storage-space-ks-oh-ca` | WI: Applies as written in place of the base, whose 'not liable' sentence would make the whole Lease void if read to cover the landlord's negligence (Wis. Stat. § 704.44(6); Wis. Admin. Code ATCP § 134.08(6); rule 52). Wis. Stat. § 704.90 does not reach … |
| `parking-ks-oh-ca` | WI: Applies as written in place of the base `parking`, whose 'not liable' sentence risks voiding the whole Lease (Wis. Stat. § 704.44(6); Wis. Admin. Code ATCP § 134.08(6); rule 52). |
| `tenants-property-insurance-ks-oh-ca` | WI: Applies as written in place of the base, whose 'Landlord is not liable for any such loss or damage' sentence risks voiding the whole Lease (Wis. Stat. § 704.44(6); Wis. Admin. Code ATCP § 134.08(6); rule 52). |
| `services-utilities-provided-ks-oh` | WI: Applies as written in place of the base, whose 'Landlord is not liable' sentence the library replaces where exculpation is barred (rule 52; Wis. Stat. § 704.44(6)). Services the landlord agrees to furnish trigger the repair duty in Wis. Stat. § … |
| `surrender-end-of-term-ks-ne` | WI: Applies as written; its 'Handling of Property Left Behind Section' is `abandoned-property-wi`, the Wis. Stat. § 704.05(5)(bf) notice. [BUILDER: in Wisconsin use this row only together with `abandoned-property-wi`; if Landlord will store property, replace … |
| `rental-application-accuracy` | WI: Applies as written; a materially false application is a breach handled under the notice rules of Wis. Stat. § 704.17. Its last sentence respects the limits on what a landlord may ask (Wis. Stat. § 106.50(5m)(f); § 995.55(4)). |

### 2.2 Screened and not tagged (27)
| Row | Why not tagged for Wisconsin |
|---|---|
| `security-deposit-use` | Lets Landlord apply the deposit to 'remedy a Tenant default' and to cleaning; Wisconsin's withholding list is closed (Wis. Stat. § 704.28(1); nonstandard provisions only by separate document, § 704.28(2)); replaced by `security-deposit-use-wi` |
| `security-deposit-return` | Blank-states parent (rule 25 family); replaced by `security-deposit-return-wi` (RECOMMENDED: Wisconsin requires no lease text, rule 56) |
| `existing-condition` | Its 'good order and repair' acknowledgment at signing cuts across the tenant's 7-day right to report preexisting damage (ATCP § 134.06(1)(a); § 704.08); replaced by `existing-condition-wi` |
| `returned-payments` | Ceiling-only fee wording hides that Wisconsin sets no figure (rule 53); replaced by `returned-payments-wi` |
| `smoking-policy` | Cost sentence reaches smoking by anyone anywhere on the property; § 704.44(7)(b) / ATCP § 134.08(7)(b) void a lease that makes the tenant liable for damage by persons other than the tenant and the tenant's guests or invitees; replaced by `smoking-policy-wi` (after independent check round 1) |
| `addendum-precedence` | Ranks the Lease above every addendum not required by law, which conflicts with the control sentence of the optional NONSTANDARD RENTAL PROVISIONS documents (rule 46); replaced by `addendum-precedence-wi` (after round 1) |
| `landlord-maintenance` | Excuses repairs needed through a guest's misuse; Wisconsin excuses only the tenant's own negligence or improper use (§ 704.07(2)(a)), and waiver of the duty voids the lease (§ 704.44(8)); replaced by `landlord-maintenance-wi` |
| `default-by-tenant` | 'reasonable costs and expenses' and prevailing-party fees: § 704.44(4m) / ATCP § 134.08(4) void a lease requiring the tenant to pay the landlord's fees or costs (rule 49); replaced by `default-by-tenant-wi` |
| `default-by-tenant-ks-ne` | Same fee sentence (§ 704.44(4m)); one default clause per state |
| `pet-policy` | Entry and removal 'without liability to Tenant' and a negligence-reaching indemnity (§ 704.44(6)); removal of the pet would also seize tenant property (ATCP § 134.09(4)); replaced by `pet-policy-wi` |
| `holdover` | 'maximum amount permitted by applicable law' is ceiling-only (rule 53); replaced by `holdover-wi` (§ 704.27 minimum twice rental value) |
| `holdover-ca` | 'actual damages' understates § 704.27; one holdover clause per state |
| `early-termination` | Fee 'one month's Rent ... or 30% of the remaining Rent ... whichever is greater' scales with the remaining term (§ 704.44(3m) acceleration and mitigation risk); landlord limb with a 10-day cure for any breach sits outside § 704.17, which a lease of one year or less cannot vary (§ 704.17(5)(a)); replaced by `early-termination-wi` |
| `early-termination-ks` | Same fee and a landlord limb for vacating 'without notifying Landlord'; replaced by `early-termination-wi` |
| `services-utilities-provided` | 'Landlord is not liable' (§ 704.44(6); rule 52); `services-utilities-provided-ks-oh` tagged |
| `tenants-property-insurance` | Same; `tenants-property-insurance-ks-oh-ca` tagged |
| `parking` | Same; `parking-ks-oh-ca` tagged |
| `storage-space` | Same; `storage-space-ks-oh-ca` tagged |
| `surrender-end-of-term` | 'treated as abandoned and disposed of at Tenant's cost' without the § 704.05(5)(bf) written notice at signing and renewal; without that notice the 2009 statute governs; `surrender-end-of-term-ks-ne` tagged with `abandoned-property-wi` |
| `surrender-end-of-term-mn-nd` | Points to a provision by description; one surrender clause per state, `surrender-end-of-term-ks-ne` tagged |
| `late-fee-ne` | Same text as the base `late-fee` (tagged) with a broader non-waiver sentence; one late-fee clause per state |
| `possession-delay-ca` | Promises a termination 'as the law permits' that Wisconsin law does not give (battery 208); the base `possession-delay` (tagged) gives the tenant a contractual 30-day termination right instead |
| `landlords-access-mi` | Requires the tenant's permission before every entry; the base `landlords-access` (tagged) states Wisconsin's notice structure more closely (ATCP § 134.09(2)); one entry clause per state |
| `acceptable-payment-methods-nj` | New Jersey/Illinois non-EFT rule; Wisconsin has none (battery 6); base tagged |
| `parking-vehicle-rules-id` | Adds booting; Wisconsin allows booting only where a municipal ordinance permits it (§ 349.137(2)); base tagged |
| `ev-charging-shared-area-co` | Colorado/Illinois EV statute; no Wisconsin tenant EV right (batteries 128, 173; `edu-ev-charging-wi`) |
| `ev-charging-end-of-tenancy-co` | Same |

**Void-list screen (kickoff lead 2):** every shared clause was read against Wis. Stat. § 704.44(1m)-(10) and Wis. Admin. Code ATCP § 134.08(1)-(10). Items that decided a row: (3m) acceleration / mitigation (`early-termination`, `-ks`; `rent-concession-az`, §6.1); (4m) fees and costs (`default-by-tenant`, `-ks-ne`; collection and notice-service fees, §6.1); (6) exculpation (`pet-policy`, the four 'not liable' bases); (7)(b) liability for others' damage (`smoking-policy`; the 'occupant' wording in `landlord-maintenance-wi` and `tenant-caused-damage-wi`); (8) waiver of maintenance (`landlord-maintenance`); (9) and (10) crime terminations (`criminal-activity-wi`, `dv-protections-notice-wi` in every lease); (2m) self-help and (5m) confession of judgment: no shared clause contains them. Tagged clauses carrying an 'applicable law' saving phrase were checked for whether the phrase would be read to cure a void term; none relies on it to.

### 2.3 Single-state clauses screened (625)
Triage (rule 26; `work/triage.py`, `work/triage.json`): **625** active clauses tagged to one state. **284** name another state or its statute in the clause text (not taggable as written; their topics are answered in §18). The other **341** were read: **160** sit on a topic a WI clause already answers with Wisconsin's own wording (for example `late-fee-*`, `security-deposit-return-*`, `holdover-*`, `periodic-tenancy-notice-*`, `landlord-disclosure-*`, `rules-*`, `abandoned-property-*`, `casualty-termination-*`, `criminal-activity-*`); **177** were read in full (`work/triage-read.txt`); **4** were provisionally tagged at triage. Final result: **1 tagged**, `utility-allowance-cap-co` (no Wisconsin statute bars a utility allowance with tenant-paid overage; disclosure under ATCP § 134.04(3)). The other three provisional tags were withdrawn: `rent-concessions-il` rests on the Illinois concession statute (Wisconsin gets `rent-concession-wi`); `prohibited-acts-renter-wy` rests on W.S. 1-21-1205 (the duties are in Wis. Stat. §§ 704.05, 704.07(3); §18); `tenant-notice-of-adverse-proceeding-nd` rests on N.D.C.C. § 47-16-25 (no Wisconsin duty, battery 218; §18). The 177 read in full rest on their own state's statute (alarm duties, bed bug and flood disclosures, submetering, holdover rates, deposit schedules, nonrefundable fees, display rights) or fill a gap Wisconsin's statute already fills (`landlord-self-cure-*`, Wis. Stat. § 704.07(3)(a)). Three shaped WI rows: `lease-copy-receipt-mn` (fits in wording but rests on Minnesota's statute) led to `lease-copy-receipt-wi`; `deceased-resident-contact-nm` and `tenant-death-contact-ok` to the narrower `tenant-death-contact-wi`; `rent-concession-az` was considered and declined (§6.1).

## 3. New WI rows
Every new row: `verification_status` VERIFIED, `effective_from` and `last_checked` 2026-10-03, notes ending with the source line and 'Rule 15: written section-open'. Battery citations were generated from the saved battery records by `work/build.py`.

### 3.1 New WI lease clauses (35)
| Row | Group | Topic | rule_type | Basis | Controlling text |
|---|---|---|---|---|---|
| `dv-protections-notice-wi` | Disclosures | `dv-lease-termination` | REQUIRED | REQUIRED_DISCLOSURE: Wis. Stat. § 704.14 | Wis. Stat. § 704.14 |
| `landlord-disclosure-wi` | Disclosures | `owner-identity-disclosure` | CONDITIONAL | REQUIRED_DISCLOSURE: Wis. Admin. Code ATCP § 134.04(1) | Wis. Admin. Code ATCP § 134.04(1) |
| `condition-disclosure-wi` | Disclosures | `inspection-condemnation-disclosure` | CONDITIONAL | REQUIRED_DISCLOSURE: Wis. Admin. Code ATCP § 134.04(2) | Wis. Admin. Code ATCP § 134.04(2) |
| `utility-allocation-wi` | Landlord Responsibilities | `utility-submetering-disclosure` | CONDITIONAL | REQUIRED_DISCLOSURE: Wis. Admin. Code ATCP § 134.04(3) | Wis. Admin. Code ATCP § 134.04(3) |
| `check-in-wi` | Security Deposit | `condition-inspection` | REQUIRED | REQUIRED_DISCLOSURE: Wis. Admin. Code ATCP § 134.06(1)(a); Wis. Stat. § 704.08 | Wis. Admin. Code ATCP § 134.06(1)(a); Wis. Stat. § 704.08 |
| `existing-condition-wi` | Tenant Responsibilities | `existing-condition` | RECOMMENDED | SERVES_LANDLORD | Wis. Admin. Code ATCP § 134.06(1)(a) |
| `security-deposit-use-wi` | Security Deposit | `security-deposit-use` | CONSTRAINED | CONSTRAINED_TERM | Wis. Stat. § 704.28(1) |
| `security-deposit-return-wi` | Security Deposit | `security-deposit-return` | RECOMMENDED | SERVES_LANDLORD | Wis. Stat. § 704.28(4)(a) |
| `nrp-deposit-withholding-wi` | Security Deposit | `deposit-cost-schedule` | CONDITIONAL | SERVES_LANDLORD | Wis. Stat. § 704.28(2) |
| `nrp-entry-wi` | Access & Entry | `periodic-services-entry` | CONDITIONAL | SERVES_LANDLORD | Wis. Admin. Code ATCP § 134.09(2)(c) |
| `returned-payments-wi` | Rent & Payment | `returned-payments` | RECOMMENDED | SERVES_LANDLORD | Wis. Stat. § 943.245 |
| `abandoned-property-wi` | Default & Termination | `abandoned-property` | CONDITIONAL | REQUIRED_DISCLOSURE: Wis. Stat. § 704.05(5)(bf) | Wis. Stat. § 704.05(5)(bf) |
| `electronic-delivery-wi` | Notices & General | `notice-delivery-methods` | CONDITIONAL | SERVES_LANDLORD | Wis. Stat. § 704.10(1) |
| `auto-renewal-wi` | Notices & General | `automatic-renewal` | CONDITIONAL | SERVES_LANDLORD | Wis. Stat. § 704.15 |
| `holdover-wi` | Default & Termination | `holdover` | RECOMMENDED | SERVES_LANDLORD | Wis. Stat. § 704.27 |
| `default-by-tenant-wi` | Default & Termination | `default-by-tenant` | RECOMMENDED | SERVES_LANDLORD | Wis. Stat. § 704.44(4m) |
| `early-termination-wi` | Default & Termination | `early-termination` | RECOMMENDED | SERVES_LANDLORD | Wis. Stat. § 704.44(3m) |
| `landlord-maintenance-wi` | Landlord Responsibilities | `landlord-maintenance` | RECOMMENDED | SERVES_LANDLORD | Wis. Stat. § 704.07(2)(a) |
| `pet-policy-wi` | Pets | `pet-policy` | RECOMMENDED | SERVES_LANDLORD | Wis. Stat. § 704.44(6) |
| `tenant-caused-damage-wi` | Default & Termination | `tenant-caused-damage` | CONDITIONAL | SERVES_LANDLORD | Wis. Stat. § 704.07(4) |
| `casualty-termination-wi` | Default & Termination | `casualty-termination` | CONDITIONAL | SERVES_LANDLORD | Wis. Stat. § 704.07(2) |
| `criminal-activity-wi` | Tenant Responsibilities | `criminal-activity` | CONDITIONAL | SERVES_LANDLORD | Wis. Stat. § 704.17(3m)(b)1. |
| `alarm-maintenance-wi` | Tenant Responsibilities | `alarm-duties` | RECOMMENDED | SERVES_LANDLORD | Wis. Stat. § 101.645(3) |
| `sex-offender-registry-notice-wi` | Disclosures | `sex-offender-disclosure` | CONDITIONAL | SERVES_LANDLORD | Wis. Stat. § 704.50(1) |
| `tenant-death-contact-wi` | Default & Termination | `tenant-death` | CONDITIONAL | SERVES_LANDLORD | Wis. Stat. § 704.165(1) |
| `condo-documents-wi` | Disclosures | `hoa` | CONDITIONAL | SERVES_LANDLORD | Wis. Stat. § 703.315(5) |
| `promised-repairs-wi` | Landlord Responsibilities | `promises-to-repair` | CONDITIONAL | REQUIRED_DISCLOSURE: Wis. Admin. Code ATCP § 134.07(1)-(2) | Wis. Admin. Code ATCP § 134.07(1)-(2) |
| `utility-notice-authorization-wi` | Landlord Responsibilities | `utility-disconnection-notice-authorization` | CONDITIONAL | SERVES_LANDLORD | Wis. Stat. § 196.643(3)(a) |
| `deposit-account-licensee-wi` | Security Deposit | `security-deposit-holding` | CONDITIONAL | REQUIRED_DISCLOSURE: Wis. Admin. Code REEB § 18.031(4) | Wis. Admin. Code REEB § 18.031(4) |
| `periodic-tenancy-notice-wi` | Default & Termination | `termination-notice` | CONSTRAINED | CONSTRAINED_TERM | Wis. Stat. § 704.19(2)(b)1. |
| `rules-wi` | Rules & Regulations | `rules-regulations` | CONDITIONAL | SERVES_LANDLORD | Wis. Admin. Code ATCP § 134.03(1) |
| `lease-copy-receipt-wi` | Notices & General | `lease-copy` | RECOMMENDED | SERVES_LANDLORD | Wis. Admin. Code ATCP § 134.03(1) |
| `rent-concession-wi` | Rent & Payment | `rent-concession` | CONDITIONAL | SERVES_LANDLORD | Wis. Admin. Code ATCP § 134.09(9)(a)2. |
| `addendum-precedence-wi` | Notices & General | `addendum-precedence` | RECOMMENDED | SERVES_LANDLORD | Wis. Stat. § 704.28(2) |
| `smoking-policy-wi` | Tenant Responsibilities | `smoking-policy` | RECOMMENDED | SERVES_LANDLORD | Wis. Stat. § 704.44(7)(b) |

### 3.2 New WI education rows (114)
| Row | Group | Topic | rule_type | Basis | Controlling text |
|---|---|---|---|---|---|
| `edu-late-fee-wi` | Rent & Payment | `late-fee` | CONSTRAINED | — | CONFIRMED ABSENT; Wis. Admin. Code ATCP § 134.09(8)(a) |
| `edu-fees-as-rent-wi` | Rent & Payment | `fees-as-rent` | RECOMMENDED | — | Wis. Stat. § 704.17(1g) |
| `edu-application-fees-wi` | Rent & Payment | `application-fees` | CONSTRAINED | — | Wis. Stat. § 704.085(1)(a) |
| `edu-holding-deposit-wi` | Security Deposit | `holding-deposit` | CONSTRAINED | — | Wis. Admin. Code ATCP § 134.05(1) |
| `edu-rent-control-wi` | Rent & Payment | `rent-control` | RECOMMENDED | — | Wis. Stat. § 66.1015(1) |
| `edu-rent-increase-wi` | Rent & Payment | `rent-increase-notice` | RECOMMENDED | — | Wis. Stat. § 704.44(1m)(a) |
| `edu-algorithmic-rent-wi` | Rent & Payment | `algorithmic-rent-setting` | RECOMMENDED | — | Wis. Admin. Code DCF § 56.03 |
| `edu-fee-disclosure-wi` | Rent & Payment | `fee-transparency` | PROHIBITED | — | Wis. Admin. Code ATCP § 134.09(9)(a) |
| `edu-rent-receipts-wi` | Rent & Payment | `rent-receipts` | REQUIRED | — | Wis. Admin. Code ATCP § 134.03(2)(a) |
| `edu-rent-tax-wi` | Rent & Payment | `rent-tax` | RECOMMENDED | — | Wis. Stat. § 77.52(2)(a)1. |
| `edu-nonresident-agent-wi` | Notices & General | `nonresident-owner-agent` | REQUIRED | — | Wis. Stat. § 704.22(1) |
| `edu-waiver-by-acceptance-wi` | Rent & Payment | `waiver-by-acceptance` | RECOMMENDED | — | Wis. Stat. § 799.40(1m) |
| `edu-interest-on-debts-wi` | Rent & Payment | `unpaid-damages-interest` | RECOMMENDED | — | Wis. Stat. § 138.04 |
| `edu-shutdown-rent-wi` | Rent & Payment | `shutdown-rent-protection` | RECOMMENDED | — | CONFIRMED ABSENT;  |
| `edu-deposit-cap-wi` | Security Deposit | `security-deposit-cap` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Admin. Code ATCP § 125.04(1)(b) |
| `edu-deposit-interest-wi` | Security Deposit | `security-deposit-interest` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Admin. Code Trans § 100.08 |
| `edu-deposit-holding-wi` | Security Deposit | `security-deposit-holding` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Admin. Code DHS § 83.34(6)(a) |
| `edu-deposit-on-sale-wi` | Security Deposit | `security-deposit-on-sale` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Stat. § 704.09(3) |
| `edu-deposit-escheat-wi` | Security Deposit | `deposit-escheat` | RECOMMENDED | — | Wis. Admin. Code ATCP § 134.06(5) |
| `edu-deposit-penalty-wi` | Security Deposit | `security-deposit-penalty` | RECOMMENDED | — | Wis. Stat. § 704.28 |
| `edu-deposit-nrp-wi` | Security Deposit | `deposit-cost-schedule` | CONSTRAINED | — | Wis. Stat. § 704.28(1) |
| `edu-deposit-installments-wi` | Security Deposit | `deposit-installments` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Admin. Code ATCP § 134.03(2)(a) |
| `edu-deposit-alternatives-wi` | Security Deposit | `fee-in-lieu-of-deposit` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Admin. Code ATCP § 134.02(11) |
| `edu-nonrefundable-fees-wi` | Security Deposit | `nonrefundable-deposit-notice` | CONSTRAINED | — | Wis. Admin. Code ATCP § 134.02(3) |
| `edu-last-month-rent-wi` | Security Deposit | `deposit-last-month-rent` | CONSTRAINED | — | Wis. Admin. Code ATCP § 134.02(11) |
| `edu-check-in-wi` | Security Deposit | `condition-inspection` | REQUIRED | — | Wis. Admin. Code ATCP § 134.06(1)(a) |
| `edu-deposit-return-wi` | Security Deposit | `security-deposit-return` | REQUIRED | — | Wis. Stat. § 704.28(4)(a) |
| `edu-tenant-duties-wi` | Tenant Responsibilities | `tenant-statutory-duties` | RECOMMENDED | — | Wis. Stat. § 704.05(3) |
| `edu-occupancy-wi` | Tenant Responsibilities | `children-occupancy` | CONSTRAINED | — | CONFIRMED ABSENT; Wis. Stat. § 106.50(1) |
| `edu-smoking-wi` | Rules & Regulations | `smoke-drift-waiver` | RECOMMENDED | — | Wis. Stat. § 101.123(1)(h) |
| `edu-cannabis-wi` | Rules & Regulations | `cannabis` | RECOMMENDED | — | Wis. Stat. § 961.41(3g)(e) |
| `edu-municipal-utility-lien-wi` | Tenant Responsibilities | `municipal-utility-lien` | CONDITIONAL | — | Wis. Stat. § 66.0809(3)(a) |
| `edu-utility-accounts-wi` | Landlord Responsibilities | `utility-landlord-account` | CONSTRAINED | — | Wis. Stat. § 196.643(1) |
| `edu-meters-wi` | Disclosures | `electric-submetering-disclosure` | CONDITIONAL | — | Wis. Admin. Code PSC § 113.0803(1) |
| `edu-waterbed-wi` | Rules & Regulations | `waterbed` | RECOMMENDED | — | CONFIRMED ABSENT;  |
| `edu-habitability-wi` | Landlord Responsibilities | `habitability-waiver` | PROHIBITED | — | Wis. Stat. § 704.07(1) |
| `edu-tenant-remedies-wi` | Landlord Responsibilities | `tenant-repair-remedies` | RECOMMENDED | — | Wis. Stat. § 704.07(4) |
| `edu-smoke-co-detectors-wi` | Building & Safety | `alarm-duties` | REQUIRED | — | Wis. Stat. § 101.61(1) |
| `edu-security-devices-wi` | Building & Safety | `security-devices` | CONDITIONAL | — | CONFIRMED ABSENT; Wis. Stat. § 704.16(4)(a) |
| `edu-water-heater-wi` | Building & Safety | `water-heater-temperature` | REQUIRED | — | Wis. Stat. § 704.06 |
| `edu-heating-wi` | Landlord Responsibilities | `heating` | CONDITIONAL | — | Wis. Admin. Code ATCP § 134.04(2)(b)2. |
| `edu-pests-mold-wi` | Disclosures | `bed-bug-disclosure` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Admin. Code ATCP § 134.04(2)(b)4. |
| `edu-radon-wi` | Disclosures | `radon-disclosure` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Stat. § 254.34 |
| `edu-lead-wi` | Disclosures | `lead-safe-certification` | CONDITIONAL | — | Wis. Stat. § 254.166 |
| `edu-meth-wi` | Disclosures | `meth-disclosure` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Stat. § 66.0104(2)(d)1. |
| `edu-flood-wi` | Disclosures | `flood-disclosure` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Admin. Code REEB § 25.023 |
| `edu-sex-offender-wi` | Disclosures | `sex-offender-disclosure` | CONDITIONAL | — | Wis. Stat. § 704.50(1) |
| `edu-stigmatized-wi` | Disclosures | `stigmatized-property` | RECOMMENDED | — | CONFIRMED ABSENT;  |
| `edu-condemned-wi` | Disclosures | `condemned-premises-rent-bar` | PROHIBITED | — | Wis. Admin. Code ATCP § 134.09(1) |
| `edu-military-zone-wi` | Disclosures | `military-air-zone-disclosure` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Stat. § 59.69 |
| `edu-video-service-wi` | Landlord Responsibilities | `telecom-access` | PROHIBITED | — | Wis. Stat. § 66.0421(2) |
| `edu-disability-wi` | Compliance & Prohibited Terms | `disability-accommodation` | REQUIRED | — | Wis. Stat. § 106.50(2r)(b)3. |
| `edu-quiet-possession-wi` | Landlord Responsibilities | `quiet-possession` | RECOMMENDED | — | Wis. Stat. § 704.05(2) |
| `edu-landlord-entry-wi` | Access & Entry | `landlord-entry` | CONSTRAINED | — | Wis. Admin. Code ATCP § 134.09(2)(a) |
| `edu-fire-safety-wi` | Building & Safety | `fire-sprinkler-duty` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Admin. Code SPS § 314.10(2r) |
| `edu-pools-wi` | Building & Safety | `pool-safety` | CONDITIONAL | — | Wis. Admin. Code ATCP § 76.03(61) |
| `edu-window-guards-wi` | Building & Safety | `window-guards` | RECOMMENDED | — | CONFIRMED ABSENT;  |
| `edu-required-disclosures-wi` | Disclosures | `required-disclosures` | REQUIRED | — | Wis. Admin. Code ATCP § 134.03(1) |
| `edu-nonpayment-notice-wi` | Default & Termination | `nonpayment-notice` | REQUIRED | — | Wis. Stat. § 704.17(1p)(a) |
| `edu-cure-wi` | Default & Termination | `cure-and-eviction-grounds` | REQUIRED | — | Wis. Stat. § 704.17(1p)(b)1. |
| `edu-termination-notice-wi` | Default & Termination | `termination-notice` | REQUIRED | — | Wis. Stat. § 704.19(2)(a) |
| `edu-notice-service-wi` | Notices & General | `notice-delivery-methods` | REQUIRED | — | Wis. Stat. § 704.21(1)(a) |
| `edu-for-cause-wi` | Default & Termination | `for-cause-eviction` | CONSTRAINED | — | Wis. Stat. § 254.595(8) |
| `edu-eviction-process-wi` | Default & Termination | `eviction-process` | REQUIRED | — | Wis. Stat. § 799.05(3)(b) |
| `edu-eviction-records-wi` | Default & Termination | `eviction-record-sealing` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Stat. § 758.20(2)(a) |
| `edu-eviction-stays-wi` | Default & Termination | `eviction-hardship-stay` | CONDITIONAL | — | Wis. Stat. § 799.40(4)(a) |
| `edu-self-help-wi` | Default & Termination | `self-help-eviction` | PROHIBITED | — | Wis. Admin. Code ATCP § 134.09(7) |
| `edu-retaliation-wi` | Default & Termination | `retaliation` | PROHIBITED | — | Wis. Stat. § 704.45(1) |
| `edu-abandoned-property-wi` | Default & Termination | `abandoned-property` | CONDITIONAL | — | Wis. Stat. § 704.05(5)(a)1. |
| `edu-post-eviction-property-wi` | Default & Termination | `post-eviction-property` | CONDITIONAL | — | Wis. Stat. § 799.45(2) |
| `edu-holdover-rate-wi` | Default & Termination | `holdover-rate` | RECOMMENDED | — | Wis. Stat. § 704.27 |
| `edu-mitigation-wi` | Default & Termination | `abandonment-and-mitigation` | REQUIRED | — | Wis. Stat. § 704.29(1) |
| `edu-attorney-fees-wi` | Default & Termination | `attorney-fees` | PROHIBITED | — | Wis. Stat. § 704.44(4m) |
| `edu-prohibited-terms-wi` | Compliance & Prohibited Terms | `prohibited-lease-terms` | PROHIBITED | — | Wis. Stat. § 704.44(1m) |
| `edu-consumer-protection-wi` | Compliance & Prohibited Terms | `consumer-protection-act` | REQUIRED | — | Wis. Stat. § 100.20(5) |
| `edu-jury-waiver-wi` | Compliance & Prohibited Terms | `jury-waiver` | RECOMMENDED | — | Wis. Stat. § 799.21(3)(a) |
| `edu-landlord-lien-wi` | Default & Termination | `landlord-lien` | CONSTRAINED | — | Wis. Stat. § 704.11 |
| `edu-dv-termination-wi` | Default & Termination | `dv-lease-termination` | REQUIRED | — | Wis. Stat. § 704.16(1)(a) |
| `edu-dv-eviction-defense-wi` | Default & Termination | `dv-eviction-protection` | PROHIBITED | — | Wis. Stat. § 106.50(1) |
| `edu-tenant-death-wi` | Default & Termination | `tenant-death` | REQUIRED | — | Wis. Stat. § 704.165(1) |
| `edu-servicemember-wi` | Default & Termination | `servicemember-rights` | REQUIRED | — | Wis. Stat. § 321.62(1)(c) |
| `edu-statutory-termination-wi` | Default & Termination | `statutory-early-termination` | REQUIRED | — | Wis. Stat. § 704.16 |
| `edu-criminal-eviction-wi` | Default & Termination | `expedited-criminal-eviction` | CONDITIONAL | — | Wis. Stat. § 704.17(3m)(b)1. |
| `edu-condo-conversion-wi` | Default & Termination | `conversion-notice` | REQUIRED | — | Wis. Stat. § 703.08(1) |
| `edu-foreclosure-wi` | Default & Termination | `foreclosure` | RECOMMENDED | — | Wis. Stat. § 802.03(9) |
| `edu-unauthorized-occupants-wi` | Default & Termination | `unauthorized-occupant-removal` | RECOMMENDED | — | Wis. Stat. § 943.14(2) |
| `edu-auto-renewal-wi` | Notices & General | `automatic-renewal` | CONDITIONAL | — | Wis. Stat. § 704.15 |
| `edu-tenancy-at-will-wi` | Default & Termination | `tenancy-at-will` | RECOMMENDED | — | Wis. Stat. § 704.01(5) |
| `edu-sublet-assign-wi` | Default & Termination | `sublet-assign` | RECOMMENDED | — | Wis. Stat. § 704.09(1) |
| `edu-exemption-waiver-wi` | Compliance & Prohibited Terms | `homestead-waiver` | PROHIBITED | — | Wis. Stat. § 815.18(6)(a) |
| `edu-lease-copy-wi` | Notices & General | `lease-copy` | REQUIRED | — | Wis. Admin. Code ATCP § 134.03(1) |
| `edu-lease-writing-wi` | Notices & General | `statute-of-frauds-lease-term` | REQUIRED | — | Wis. Stat. § 704.03(1) |
| `edu-sale-management-wi` | Notices & General | `sale-or-management-change` | REQUIRED | — | Wis. Admin. Code ATCP § 134.04(1)(b) |
| `edu-rental-inspections-wi` | Notices & General | `rental-inspection` | CONSTRAINED | — | Wis. Stat. § 66.0104(2)(e)1. |
| `edu-landlord-registration-wi` | Notices & General | `landlord-registration` | CONSTRAINED | — | Wis. Stat. § 66.0104(2)(e)4. |
| `edu-calling-for-help-wi` | Compliance & Prohibited Terms | `emergency-assistance-right` | PROHIBITED | — | Wis. Stat. § 704.44(1m)(a) |
| `edu-scope-wi` | Notices & General | `scope` | CONDITIONAL | — | Wis. Admin. Code ATCP § 134.01(1) |
| `edu-statutory-forms-wi` | Notices & General | `statutory-forms` | RECOMMENDED | — | Wis. Stat. § 704.14. |
| `edu-renters-insurance-wi` | Notices & General | `renters-insurance-rules` | RECOMMENDED | — | CONFIRMED ABSENT;  |
| `edu-fair-housing-wi` | Compliance & Prohibited Terms | `fair-housing` | PROHIBITED | — | Wis. Stat. § 106.50(1) |
| `edu-source-of-income-wi` | Compliance & Prohibited Terms | `source-of-income` | PROHIBITED | — | Wis. Stat. § 106.50(1) |
| `edu-applicant-questions-wi` | Compliance & Prohibited Terms | `protected-class-inquiry-ban` | CONSTRAINED | — | Wis. Stat. § 106.50(5m)(f)1. |
| `edu-screening-wi` | Compliance & Prohibited Terms | `tenant-screening` | RECOMMENDED | — | Wis. Stat. § 66.0104(2)(a)1. |
| `edu-immigration-wi` | Compliance & Prohibited Terms | `immigration-status` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Stat. § 49.84 |
| `edu-foreign-ownership-wi` | Compliance & Prohibited Terms | `foreign-ownership` | CONDITIONAL | — | Wis. Stat. § 710.02(1) |
| `edu-assistance-animals-wi` | Pets | `assistance-animal-accommodation` | REQUIRED | — | Wis. Stat. § 106.50(2r)(bg)1. |
| `edu-esa-misrepresentation-wi` | Pets | `service-animal-misrepresentation` | RECOMMENDED | — | Wis. Stat. § 106.50(2r)(br)5. |
| `edu-pet-fees-wi` | Pets | `pet-fees` | CONSTRAINED | — | CONFIRMED ABSENT; Wis. Admin. Code ATCP § 134.02(11) |
| `edu-towing-wi` | Parking & Storage | `towing` | CONSTRAINED | — | Wis. Stat. § 349.13(3m)(a)2. |
| `edu-ev-charging-wi` | Parking & Storage | `ev-charging` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Stat. § 66.0442 |
| `edu-firearms-wi` | Rules & Regulations | `firearms` | CONDITIONAL | — | Wis. Stat. § 943.13(1m)(c)1. |
| `edu-signs-flags-wi` | Rules & Regulations | `tenant-display-rights` | RECOMMENDED | — | Wis. Stat. § 710.17(2) |
| `edu-solar-wi` | Rules & Regulations | `portable-solar` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Stat. § 66.0401(1m) |
| `edu-security-cameras-wi` | Rules & Regulations | `tenant-security-cameras` | RECOMMENDED | — | CONFIRMED ABSENT; Wis. Stat. § 942.08(1)(c) |

## 4. Layout and placement (rule 40)
Batteries 112 and 179 (type size, bold, capitals, conspicuous) and 114 and 180 (prescribed forms and separate documents) ran over the whole code, and their ch. 704 / ATCP 134 narrowed views before drafting. No type-size, boldface, capitals or first-page rule reaches a residential lease (the bold-type hit is the self-storage value limit, Wis. Stat. § 704.90; a manufactured home community agreement must set out its terms 'conspicuously', Wis. Admin. Code ATCP § 125.03(1), out of scope). Nothing competes for the same place.

| Item | Rule | Where it goes |
|---|---|---|
| Notice of Domestic Abuse Protections | Wis. Stat. § 704.14: 'shall include the following notice in the agreement or in an addendum to the agreement'; wording prescribed | Lease clause `dv-protections-notice-wi` (verbatim; every lease) |
| Lease and written rules shown before signing and before any deposit | Wis. Admin. Code ATCP § 134.03(1) | Pre-signing step; `lease-copy-receipt-wi` records it; `edu-lease-copy-wi` |
| Manager and owner identification | ATCP § 134.04(1)(a): 'at or before the time a rental agreement is entered into' | Lease clause `landlord-disclosure-wi` |
| Code violations and habitability conditions | ATCP § 134.04(2): before entering into the agreement or accepting a deposit | Pre-signing disclosure; `condition-disclosure-wi` |
| Utility charges not in rent; allocation of shared meters | ATCP § 134.04(3): before entering into the agreement or accepting a deposit | `utility-allocation-wi`; `utilities-responsibility` tag note |
| Check-in notice and previous-damage request | ATCP § 134.06(1)(a): before accepting a security deposit | `check-in-wi` (must reach the tenant before the deposit) |
| Check-in sheet | Wis. Stat. § 704.08: at the start of occupancy | Separate form; `check-in-wi`, `edu-check-in-wi` |
| Deposit-withholding nonstandard provisions | Wis. Stat. § 704.28(2); ATCP § 134.06(3)(b): 'separate written document entitled “NONSTANDARD RENTAL PROVISIONS”' | Separate titled document; `nrp-deposit-withholding-wi` |
| Entry nonstandard provisions | ATCP § 134.09(2)(c): same separate titled document; Wis. Stat. § 704.05(1): signed by both | Separate titled document; `nrp-entry-wi` |
| Lien or right to hold tenant property | ATCP § 134.09(4)(b): separate document entitled 'NONSTANDARD RENTAL PROVISION', signed or initialed | Not offered (§6.1); `edu-landlord-lien-wi` |
| Will-not-store notice for property left behind | Wis. Stat. § 704.05(5)(bf): written notice when the tenant enters into or renews | Lease clause `abandoned-property-wi` (repeat at renewal) |
| Automatic renewal reminder | Wis. Stat. § 704.15; ATCP § 134.09(3): separate written notice 15-30 days before | Separate notice before renewal; `auto-renewal-wi` |
| Owner notice of electric disconnection | Wis. Stat. § 196.643(3)(b): 'in a separate written document' | Separate signed document; `utility-notice-authorization-wi` |
| Promises to repair | ATCP § 134.07(1)-(2): every promise states a completion date; promises before the initial agreement in writing, copy to the tenant | `promised-repairs-wi` |
| Sex offender registry notice | Wis. Stat. § 704.50(3): written notice when asked | Optional lease clause `sex-offender-registry-notice-wi` |
| Federal lead disclosure | 42 U.S.C. § 4852d | Shared `lead-based-paint` (tagged) |

## 5. Dormant rows resolved (rule 25)
No WI rows existed. The blank-states parent `security-deposit-return` is resolved by `security-deposit-return-wi` (rule 25 family).

## 6. Decisions

### 6.1 Optional clauses found (rule 54)
**Offered as new WI clauses (17):**
1. `nrp-deposit-withholding-wi`: deposit withholding beyond § 704.28(1)(a)-(e) by NONSTANDARD RENTAL PROVISIONS (Wis. Stat. § 704.28(2); ATCP § 134.06(3)(b)).
2. `nrp-entry-wi`: entry beyond ATCP § 134.09(2)(a)-(b) by NONSTANDARD RENTAL PROVISIONS (ATCP § 134.09(2)(c)), signed by both (§ 704.05(1)).
3. `abandoned-property-wi`: the § 704.05(5)(bf) will-not-store notice (CONDITIONAL: only if Landlord will not store).
4. `electronic-delivery-wi`: the four § 704.10 items by electronic means.
5. `auto-renewal-wi`: automatic renewal, enforceable only with the § 704.15 / ATCP § 134.09(3) reminder.
6. `criminal-activity-wi`: the § 704.17(3m) no-cure ground and notice, never without `dv-protections-notice-wi`.
7. `casualty-termination-wi`: landlord termination after casualty, left to contract (§ 704.07(2)(c), (4) give only tenant rights).
8. `tenant-caused-damage-wi` (rule 54t): each untenantability remedy has its own fault exception (§ 704.07(4)); repair cost under § 704.07(3)(a); guests or invitees only (§ 704.44(7)(b)).
9. `early-termination-wi`: an advance agreement to accept surrender for a fixed fee chosen by the landlord, not scaled to the remaining term (§ 704.44(3m)).
10. `rules-wi`: rules furnished before signing (ATCP § 134.03(1)); mid-term changes only with the tenant's written agreement.
11. `tenant-death-contact-wi`: notification contact only (§ 704.165).
12. `utility-notice-authorization-wi`: § 196.643(3) owner notice of pending electric disconnection, separate document.
13. `rent-concession-wi`: concessions stated in the lease (ATCP § 134.09(9)(a)2.).
14. `sex-offender-registry-notice-wi`: the § 704.50(3) notice that gives the landlord immunity.
15. `condo-documents-wi`: condominium units only (§ 703.315(5)).
16. `promised-repairs-wi`: only when the landlord promises cleaning or repairs (ATCP § 134.07).
17. `deposit-account-licensee-wi`: only for a landlord who is a Wisconsin real estate licensee (Wis. Admin. Code REEB § 18.031(4)).

**Statutory options carried by tagged rows:** a late fee only 'as specifically provided under the rental agreement' (ATCP § 134.09(8)(a), `late-fee`); tenant ordinary maintenance by agreement (§ 704.44(6), (7)(b); `landscaping-irrigation`, `snow-removal`, `tenant-maintenance`); a utility allowance (`utility-allowance-cap-co`); guest limits (`guest-policy`, `guest-policy-day-limit`); extended-absence notice (`extended-absence-notice-ks`); § 704.05's rules 'in the absence of any inconsistent provision in writing signed by both' (§ 704.05(1)) — no tagged clause displaces them except `nrp-entry-wi`.

**Lawful but not offered, each with an education row:**
- A contract interest rate on unpaid amounts (Wis. Stat. § 138.04): `edu-interest-on-debts-wi` (a fee on a late fee is barred, ATCP § 134.09(8)(c), and interest on overdue rent could be read the same way).
- A stipulated holdover rate: `edu-holdover-rate-wi` (§ 704.27 already gives at least twice rental value; `holdover-wi`).
- A lease jury waiver: `edu-jury-waiver-wi` (no statute addresses it; enforceability unsettled; Parsons annotation).
- A landlord lien by NONSTANDARD RENTAL PROVISION (ATCP § 134.09(4)(b)): `edu-landlord-lien-wi`.
- A rent-concession clawback on default (`rent-concession-az`): risks § 704.44(3m); `rent-concession-wi` offered without it.

**Not tagged on drafting grounds (shared options):** `utility-transfer-tn` (cutting service to an occupied unit risks constructive eviction, ATCP § 134.09(7)); `appliances-excluded-sc` (would waive § 704.07(2)(a)4. for furnished appliances); `furnishings-included-ks` (its builder note is the Kansas deposit limit; list furniture under `appliances-included`); `government-fee-reimbursement-in` (low value; §18).

**Barred or unsupported (no clause):** attorney fees or costs (§ 704.44(4m)); collection or notice-service fees (same; `edu-attorney-fees-wi`, battery 194); acceleration or waiver of mitigation (§ 704.44(3m)); confession of judgment (§ 704.44(5m)); exculpation (§ 704.44(6)); waiver of habitability (§§ 704.07(1), 704.44(8)); self-help (§ 704.44(2m); ATCP § 134.09(7)); waiver of exemptions (§ 815.18(6)); nonrefundable deposits (ATCP § 134.02(11); `edu-nonrefundable-fees-wi`); a fixed cleaning or painting charge from the deposit (ATCP § 134.06 notes); termination notices shorter than ch. 704 in a lease of one year or less (§ 704.17(5)(a)); seizure or care of a tenant's pet (ATCP § 134.09(4)).

### 6.2 Questions asked of Taylor (rule 76)
None. Every call was legal or drafting and within Claude's remit (rule 76); the reasoning is in §6.3.

### 6.3 Drafting and legal decisions made by Claude (recorded, not asked)
1. **Koble 2026 WI 19 and the Consumer Act.** The court of appeals' 2024 holding (still in the annotations) was reversed; the rows follow the supreme court: § 427.104 does not govern a monthly-rent residential lease, and by the same reasoning (no deferral of payment, ¶¶ 15-16) the ch. 422 delinquency-charge and dishonored-check caps do not reach rent (labelled Claude's reading in `late-fee`, `returned-payments-wi`, `edu-late-fee-wi`).
2. **The § 704.14 notice in every lease.** Whether an unlawful-use clause without the notice voids the lease is open after Koble ¶ 25; the library prints `dv-protections-notice-wi` in every Wisconsin lease, and `residential-use-only` and `criminal-activity-wi` are tied to it.
3. **NONSTANDARD RENTAL PROVISIONS and precedence.** Both NRP documents say they control over the Lease; `addendum-precedence` would say the opposite, so `addendum-precedence-wi` excepts signed NRP documents (rule 46).
4. **Late fees from the deposit.** Whether late fees are 'Unpaid rent' under § 704.28(1)(b) is not settled by the text (§ 704.17(1g) defines rent only 'In this section'); the library routes them through `nrp-deposit-withholding-wi` as the safe course.
5. **'Occupant' vs 'guests or invitees'.** § 704.44(7)(b) allows tenant liability only for the tenant and 'the tenant’s guests or invitees'; WI clauses use those words (`landlord-maintenance-wi`, `tenant-caused-damage-wi`, `smoking-policy-wi`).
6. **Pets.** A pet is the tenant's property, and ATCP § 134.09(4) bars seizing or holding it without a signed NONSTANDARD RENTAL PROVISION; `pet-policy-wi` lets the landlord notify animal control, a humane officer or police instead.
7. **Early termination.** Drafted as an advance agreement to accept surrender for a fixed fee, not a damages formula scaled to the remaining rent (§ 704.44(3m)); rent stops at the agreed date.
8. **Periodic notices.** `periodic-tenancy-notice-wi` keeps the § 704.21 methods: an agreed other method must be proved by clear and convincing evidence (§ 704.19(2)(a)1.), which a builder cannot guarantee.
9. **Rent increases on month-to-month tenancies.** No statute sets a notice period; the safe course stated is the 28-day periodic-termination notice (§ 704.19(3)); labelled Claude's recommendation.
10. **Assistance animals.** Round 1's ERROR (that § 106.50(2r)(bg)4. lacks a substantial-damage ground) was rejected on the saved text, which has (bg)4.d.; two later checkers confirmed the rejection.
11. **Smoke and CO detectors.** The statutes split by building size (§ 101.61(1) dwellings of 1-2 units; § 101.01(12) public buildings used by 3 or more tenants); `alarm-maintenance-wi` limits the tenant's CO maintenance to 1-2 unit buildings, where the occupant maintains them (§ 101.647(3)(a)); in larger buildings the owner does (§ 101.149(3)(a)).
12. **Manufactured home communities.** Flagged where their rules differ (ATCP §§ 125.03-125.05; § 710.15(5m) good cause) but not drafted for; site rentals are out of the clause library's scope.

## 7. Open items (none blocking)
1. **Local circuit court rules:** wicourts.gov's local-rules page returned 404; county eviction practices not read. Boundary: SCR ch. 72 and the 2024 WI 24 orders only (`edu-eviction-records-wi`).
2. **Milwaukee and Madison ordinances** (and any other local rule): flagged, not read (rule 3); state preemption limits recorded (`edu-rent-control-wi`, `edu-landlord-registration-wi`, `edu-rental-inspections-wi`, `governing-law`).
3. **Wis. Stat. § 704.05 (2009 stats.)**, which governs left-behind property when the will-not-store notice is not given: not read (`edu-abandoned-property-wi`, `abandoned-property-wi`). Boundary: the current statute and its history line.
4. **Department of Corrections registry telephone number and website** for `sex-offender-registry-notice-wi`: left as builder blanks; not fetched (the statute requires 'the appropriate telephone number and Internet site').
5. **ATCP § 134.09(3) vs Wis. Stat. § 704.15** on the automatic-renewal reminder window (different reference dates): `auto-renewal-wi` meets both; no case searched.
6. **Case-law questions** listed in §1.4 as not searched.
7. **Optional round-6 notes** (§13) not applied.

## 8. Integrity checks on the delta
Run by `work/integrity.py` and `work/quotecheck.py` on the delivered file:
- PASS  header identical to master
- PASS  file ends with CRLF
- PASS  no bare LF record terminators  [0]
- PASS  17 columns every row
- PASS  ids unique in delta
- PASS  new ids not in master  [149]
- PASS  groups valid
- PASS  clause groups exclude education-only groups
- PASS  rule_type valid
- PASS  basis valid (clauses three-bucket, education blank)
- PASS  topic keys known or listed as new in §10
- PASS  supersedes points at existing rows
- PASS  supersedes targets not tagged WI
- PASS  new rows: states WI, active, VERIFIED, dates
- PASS  new notes start WI:
- PASS  tagged rows: states = master + ;WI
- PASS  tagged rows: only states/notes/last_checked changed
- PASS  tagged notes: master notes kept, WI addition appended
- PASS  rule 15 statement on every WI note
- PASS  no unresolved battery placeholders
- PASS  every `row` pointer resolves
- PASS  variables are existing builder variables  [nsf_fee, pet_deposit, pet_rent_amount, property_address, security_deposit]
- PASS  no bracket next to a variable
- PASS  citation formats (statutes, ATCP, no s. cites outside quotes)
- Counts: 196 rows (47 tagged, 149 new); merged with the master 3,162 rows, 3,041 active; WI active 82 lease clauses and 114 education rows; variables used: `{{nsf_fee}}`, `{{pet_deposit}}`, `{{pet_rent_amount}}`, `{{property_address}}`, `{{security_deposit}}` (all already in the builder or library).
- Quotes: 335 single-quoted passages checked, 0 mismatches; the § 704.14 notice verbatim line for line.
- Backtick references to rows not tagged WI are provenance or model pointers (for example "Replaces the base `holdover`"), not coverage claims; every coverage pointer names a WI row (rule 63).
- Basis (rule 79): 0 of 149 new rows record no basis; every tagged row's WI note names its controlling text or absence battery.

## 9. Propagation notes (rule 62)
None. No shared row's text was edited; the 47 tagged rows changed only by adding `WI` to `states`, an appended `WI:` note and `last_checked`.

## 10. Findings for other states or the product (flagged, not fixed)
1. **Stale annotations (legal watch):** the site's annotations to Wis. Stat. §§ 421.301, 427.104 and 704.44 describe *Koble Investments v. Marquardt*, 2024 WI App 26, as law; the supreme court reversed it (2026 WI 19). Any future pass reading annotations as authority should check for a later supreme court opinion.
2. **Separate-document rows:** `nrp-deposit-withholding-wi`, `nrp-entry-wi` and `utility-notice-authorization-wi` are LEASE_CLAUSE rows whose instruction says they are not part of the lease body; please confirm the builder prints them as separately signed documents with their statutory titles (rule 10). `check-in-wi`, `condition-disclosure-wi`, `utility-allocation-wi` and `lease-copy-receipt-wi` must reach the tenant before signing and before any deposit.
3. **Builder inputs:** `{{nsf_fee}}` has no Wisconsin cap; `early-termination-wi`'s fee is hand-filled; `sex-offender-registry-notice-wi` needs the DOC registry telephone number and website filled in.
4. **New topic keys:** `promises-to-repair` (`promised-repairs-wi`), `utility-disconnection-notice-authorization` (`utility-notice-authorization-wi`), `water-heater-temperature` (`edu-water-heater-wi`). **No new `{{variables}}`.**
5. **Citation format gap:** the kickoff has no format for supreme court rules; `edu-eviction-records-wi` writes 'SCR 72.01(8)'.
6. **Cross-state flag (shared `smoking-policy`):** its cost sentence makes the tenant liable for smoking damage by anyone, anywhere on the property. Wisconsin voids a lease that imposes liability for damage by persons other than the tenant and the tenant's guests or invitees (§ 704.44(7)(b)); states with a similar void-term list may need the same check.
7. **Cross-state flag (shared `addendum-precedence`):** in states with optional separate documents that must control (Wisconsin's NONSTANDARD RENTAL PROVISIONS), the base's 'Lease controls' sentence collides with the document's own control sentence.
8. **Legal watch:** 2025 Wis. Act 105 small-claims amounts effective January 1, 2027; § 342.40(3)(c) amended effective January 4, 2027 (2025 Wis. Act 196); § 814.61(1)(a) amended effective November 1, 2026 (2025 Wis. Act 179); the open § 704.44(10) question after Koble.
9. **University housing:** ATCP ch. 134 does not apply to government-owned units (ATCP § 134.01), so the real lease (§15) is a weaker lead.

## 11. Deliverables
- `lease-clauses-WI-delta.csv` (196 rows, sha256 aad4ea5f1d027aba5d0b7276c61ba8fc6cacef80efd6e1886de178c533cde559) and this log, sent to Taylor in this chat.
- Saved in Taylor's Downloads folder (approved earlier in this chat): the statutes and code corpora, the act pages, Act 129, the court rules, the Koble opinion and the real lease; hashes in `sources/registry.tsv`.

## 12. Kickoff leads — what each turned out to be
1. **Ch. 704, ATCP ch. 134, ch. 799 eviction sections:** read whole (§14); every ATCP 134 section is cited.
2. **Void agreements (§ 704.44; ATCP § 134.08):** both lists read whole; every shared clause screened, with the list item that decided each recorded (§2.2); `edu-prohibited-terms-wi`, `edu-consumer-protection-wi`.
3. **Prohibited practices and disclosures:** ATCP § 134.09 (`edu-landlord-entry-wi`, `edu-self-help-wi`, `edu-fee-disclosure-wi`, `late-fee`), § 134.04 (`landlord-disclosure-wi`, `condition-disclosure-wi`, `utility-allocation-wi`), § 134.05 (`edu-holding-deposit-wi`, `edu-application-fees-wi`), § 134.07 (`promised-repairs-wi`), § 134.03 (`lease-copy-receipt-wi`, `edu-rent-receipts-wi`); placement in §4.
4. **Required notices:** § 704.14 is prescribed text, in the agreement or an addendum (`dv-protections-notice-wi`); § 704.15 is a separate reminder before renewal (`auto-renewal-wi`); § 704.50 is optional and gives immunity (`sex-offender-registry-notice-wi`); § 704.08 is a check-in sheet at occupancy (`check-in-wi`). None prescribes type size or placement beyond §4.
5. **Deposits:** closed withholding list, 21 days, statement, NRP document, no cap, no interest; pet deposits are security deposits (ATCP § 134.02(11); `edu-pet-fees-wi`); prepaid rent beyond one month is a security deposit (`edu-last-month-rent-wi`, `due-at-signing` note).
6. **Notices and termination:** § 704.17 (5-day and 14-day notices by tenancy type, 30-day for leases over a year; `edu-nonpayment-notice-wi`, `edu-cure-wi`), § 704.19 (`periodic-tenancy-notice-wi`, `edu-termination-notice-wi`), § 704.21 (`edu-notice-service-wi`), § 704.10 (`electronic-delivery-wi`; ch. 137 excludes default and eviction notices).
7. **Holdover and mitigation:** § 704.27 sets a statutory minimum of twice rental value (`holdover-wi`, `edu-holdover-rate-wi`); § 704.25 (`edu-waiver-by-acceptance-wi`); § 704.29 (`edu-mitigation-wi`).
8. **Repairs and chores:** § 704.07(1) bars waiver of the landlord's duties; tenants may assume ordinary maintenance by agreement (§ 704.44(6), (7)(b)); no single-family or separate-writing rule (battery 113); `landscaping-irrigation` and `snow-removal` tagged.
9. **Domestic abuse, death, threats:** § 704.16 as amended by 2025 Wis. Act 90 (`edu-dv-termination-wi`, `edu-security-devices-wi`); § 704.165 (`edu-tenant-death-wi`, `tenant-death-contact-wi`).
10. **Retaliation, screening, liens:** § 704.45 (`edu-retaliation-wi`), § 704.085 (`edu-application-fees-wi`, `edu-screening-wi`), § 704.11 (`edu-landlord-lien-wi`).
11. **Local preemption:** § 66.0104 (`edu-rental-inspections-wi`, `edu-landlord-registration-wi`, `edu-required-disclosures-wi`), § 66.1015 (`edu-rent-control-wi`), § 66.1010 (`edu-for-cause-wi`), ATCP § 134.10 (`governing-law`); Milwaukee and Madison flagged (§7).
12. **Eviction procedure and records:** ch. 799 (`edu-eviction-process-wi`, `edu-eviction-stays-wi`, `edu-post-eviction-property-wi`); no pre-filing condition found (battery 101); eviction-record access under SCR 72.01(8) and the 2024 WI 24 order (`edu-eviction-records-wi`); circuit court forms not read (§7).
13. **2023-2026 acts:** §1.2 (Acts 29, 90, 105, 129, 151 read; others through the compiled text).

## 13. Independent check
Separate general-purpose agents, which had not seen the drafting, checked the rows against the saved sources only (`check/check-round1-A.md`, `-B.md`, `-C.md`, `check-round2-A.md`, `-B.md`, `check-round3.md` to `check-round6.md`; instructions in `check/INSTRUCTIONS.md`). Each verified every single-quoted passage and pinpoint by script and each battery citation against the logs, and asked whether each battery could have found what the row says is absent.
- **Round 1 (all 196 rows, in three sets):** 4 ERROR, 44 FIX, 45 NOTE. ERRORs: `edu-smoke-co-detectors-wi` applied the 1-2 unit dwelling rules to apartment buildings (§§ 101.145, 101.149 found); `edu-signs-flags-wi` missed the renter's political-sign right (§ 12.04(5)); `edu-consumer-protection-wi` stated the Consumer Act's reach too flatly (resolved by reading Koble, 2026 WI 19, which the check's annotations predated); `assistance-animal-accommodation` (**rejected**: the saved § 106.50(2r)(bg)4.d. has the substantial-damage ground the checker said was missing; rounds 2A and 2B confirmed the rejection). FIXes included battery citations that could not have found the absence claimed (rent due date, delivery of possession, duty to notify, guests, parking, tenant termination rights, renter's insurance, deposit caps), each answered by a new battery (206-219); the `pet-policy-wi` removal right (ATCP § 134.09(4)); the `nrp-entry-wi` landlord signature and precedence conflict (`addendum-precedence-wi`); the `smoking-policy` cost sentence (`smoking-policy-wi`); 'occupant' wording against § 704.44(7)(b); wrong pinpoints (§ 799.21(3)(a), ATCP § 76.03(65)(b), § 704.19(7) day counting); overstatements in `edu-for-cause-wi`, `edu-calling-for-help-wi`, `edu-attorney-fees-wi`, `edu-exemption-waiver-wi`, `edu-post-eviction-property-wi`. All applied; NOTEs applied.
- **Round 2 (98 rows edited):** 1 ERROR (`edu-smoke-co-detectors-wi` omitted § 101.149(2)(ap), CO detectors in units of buildings with a central fuel-burning appliance; fixed), 7 FIX (`due-at-signing` prepaid rent and ATCP § 134.09(8)(b); `edu-disability-wi` pinpoint; `edu-eviction-process-wi` bond; `returned-payments-wi` § 422.202(1)(d) $15 and § 185.995 $30 caps, a round-1 misreading; `edu-statutory-termination-wi` § 182.004 and 'is terminated' wording, battery 220; `edu-prohibited-terms-wi` 'in relation to'; `edu-utility-accounts-wi` gas and electric rules), 21 NOTE; all applied.
- **Round 3 (27 rows edited after round 2):** 0 ERROR, 1 FIX (`edu-for-cause-wi`: manufactured home communities need good cause, § 710.15(5m), a hit of the row's own battery 85), 11 NOTE; all applied.
- **Round 4 (14 rows edited after round 3, including the five that carry the shared Koble sentence):** 0 ERROR, 1 FIX (battery 85 hit description), 2 NOTE; applied.
- **Round 5 (3 rows):** 0 ERROR, 2 FIX (§ 823.23(4)(b) 'but for' condition; nuisance-notice owner, place and contents), 1 NOTE (§ 704.17(5)(a) vs (5)(b)); applied.
- **Round 6 (2 rows):** 0 ERROR, 0 FIX, 3 optional NOTE (wording: 'law enforcement agency' for 'police'; the owner's burden if the tenant contests; the receivership label in § 823.23). Not applied; the rows are accurate as written (§7).
- **After round 6:** the build script's generated battery citations were changed from '1 hits' to '1 hit'; no other text changed, so no further round was run.

## 14. Statute walk (gap-discovery source 1)
**Wis. Stat. ch. 704 (34 sections)** diffed against every citation in the WI rows: cited except § 704.13 (a tenant's attornment to another does not prejudice the landlord; no lease consequence, recorded in §18 `adverse-proceeding-notice`), § 704.31 (30-year leases; not residential), § 704.40 (life estates; not a tenancy). § 704.02 (severability) is cited in the `severability` tag, which records that § 704.44 applies 'Notwithstanding s. 704.02'. Found by the walk and now cited: § 704.23 (removal after termination, `holdover-wi`), § 704.96 (campgrounds, 2025 Wis. Act 29, `edu-scope-wi`). **Wis. Admin. Code ch. ATCP 134 (10 sections):** every section cited. **Wis. Stat. ch. 799:** the eviction sections (§§ 799.05(3), 799.206, 799.21(3), 799.25(10), 799.40-799.45) read whole and cited; the general small-claims sections not cited (§§ 799.01-799.04, 799.06-799.30 other than those named, 799.42) govern procedure common to all small claims, with no lease or landlord-duty consequence beyond what `edu-eviction-process-wi` states. **One level down:** each cited ch. 704 and ATCP 134 section was read whole and its subsections checked against the rows; the uncited subsections are definitions or procedure with no lease consequence. **Related chapters read whole beside ch. 704:** ch. 703 condominium rental sections (§ 703.315), ch. 710 (§§ 710.15, 710.17), ch. 106 (§ 106.50).

## 15. Real-lease comparison (gap-discovery source 2)
**Lease:** University of Wisconsin–Madison, Division of University Housing, "University Apartments Lease, Terms and Conditions: July 1, 2026–June 30, 2027" (Eagle Heights, Harvey Street and University Houses), saved PDF and text (§1.1). **Why weaker:** no Wisconsin realtor or apartment-association form is free; this is a state agency's own lease for faculty, staff and student families, and ATCP ch. 134 does not reach government-owned units (Wis. Admin. Code ATCP § 134.01), though ch. 704 does. It is a lead about wording only. It is UW–Madison's own document, not a relabelled template. No copyrighted text is reproduced here.

### 15.1 Provision map
| Item | UW provision (paraphrased) | Library answer for Wisconsin | Lead? |
|---|---|---|---|
| 1 | Assignment; reassignment to a like unit on 60 days' notice | `possession-delay` tag; no Wisconsin rule on relocation within a complex (not offered) | No |
| 2 | No oral representations; whole agreement in writing | `entire-agreement` tag; `promised-repairs-wi` (ATCP § 134.07 written promises) | Confirms the written-promise rule |
| 3 | Eligibility and definitions (family, roommate, guest, sublessee) | `permitted-occupants`, `guest-policy` tags | No |
| 4 | Occupancy limits by unit size | `edu-occupancy-wi` (family status; § 106.50(5m)(e)) | No |
| 5 | Joint and several liability of co-lessees | `joint-liability` tag | No |
| 6 | Status warranties; misrepresentation | `rental-application-accuracy` tag | No |
| 7 | $10 a day liquidated damages for late status notices | Not adopted: a penalty-like charge outside rent; penalty doctrine not searched (§1.4) | No |
| 8 | Guests 30 nights a year; registration after 10 days | `guest-policy`, `guest-policy-day-limit` tags | No |
| 9 | $500 deposit offset against university debts and damage | `security-deposit-use-wi` (closed § 704.28(1) list; offsets for other debts need NRP) | Difference noted |
| 10 | Rate changes at any time on 90 days' notice | `edu-rent-increase-wi` (fixed term: only as the lease provides) | Not adopted |
| 11 | Utilities: heat and hot water supplied; tenant electric accounts | `utilities-paid-by-landlord`, `utilities-responsibility` tags; `utility-allocation-wi` | No |
| 12 | Renewals offered to eligible lessees by a deadline | `auto-renewal-wi` (§ 704.15 reminder if automatic); otherwise ordinary renewal | No |
| 13 | Breach notice to remedy or vacate in at least five days | `default-by-tenant-wi`, `edu-cure-wi` (§ 704.17) | Confirms the 5-day notice |
| 14 | Notice of Domestic Abuse Protections, verbatim | `dv-protections-notice-wi` | Confirms placement in the lease body |
| 15 | Renovation relocation on 90 days' notice | Not offered; entry and repair under § 704.05(2) | No |
| 16 | No assignment or sublet without consent | `no-sublet-assign` tag; `edu-sublet-assign-wi` (§ 704.09) | No |
| 17 | Transfers between units, service charge | Not a lease topic for private landlords | No |
| 18 | Window treatments and appliances provided | `appliances-included` tag (§ 704.07(2)(a)4.) | No |
| 19 | No tenant painting; repainting charged | `no-alterations` tag; routine painting not deductible (ATCP § 134.06 note; `edu-deposit-nrp-wi`) | Difference noted |
| 20 | Structural repairs by the landlord; no tenant repairs without permission | `landlord-maintenance-wi`, `tenant-maintenance` tag | No |
| 21 | Conduct; responsibility for guests; termination for others' acts | `no-disturbance` tag; `criminal-activity-wi` (victim exception, § 704.17(3m)(c)) | Difference noted |
| 22 | Entry for sanitation and pest control, 24 hours' notice where feasible | `landlords-access` tag (12-hour floor, ATCP § 134.09(2)); `nrp-entry-wi` for scheduled entries | Confirms `nrp-entry-wi` |
| 23 | Parking assigned; disability accommodation by request | `assigned-parking-space` tag (§ 346.503(1m)(f)) | Confirms the disability-parking note |
| 24 | Small caged pets only; service animals and ESAs by accommodation | `pet-policy-wi`, `assistance-animal-accommodation` tag | No |
| 25 | No smoking or vaping in buildings; 25-foot rule | `smoking-policy-wi`, `edu-smoking-wi` | No |
| 26 | No commercial activity | `residential-use-only` tag | No |
| 27 | Compliance with laws and campus rules | `residential-use-only` tag | No |
| 28 | University not liable for tenant property; indemnity | Not used: a 'not liable' sentence reaching the landlord's negligence voids a private lease (§ 704.44(6)); state immunity differs | Difference noted |
| 29 | Tenant pays damage by household, roommates and guests | `tenant-caused-damage-wi` (§ 704.44(7)(b) guests or invitees) | No |
| 30 | Move-out inspection report signed by the Division | `check-in-wi`, `security-deposit-return-wi` | No |
| 31 | Property left behind removed and disposed of on 30 days' notice, 'without liability' | `abandoned-property-wi` (§ 704.05(5)(bf) will-not-store notice; prescription items 7 days) | Difference noted |

### 15.2 What it produced
No new row; it confirmed the § 704.14 notice in the lease body, written promises, the 5-day breach notice, and the disability-parking point. Four UW terms would be risky in a private Wisconsin lease (the 'not liable' and indemnity sentence, deposit offsets for unrelated debts, mid-term rate changes, and the liquidated status-notice charge) and are not used.

## 16. Landlord-scenario screen (gap-discovery source 3)
62 scenarios, Claude-generated from application to move-out, sale and foreclosure (MT §16 model) plus Wisconsin-specific ones (NONSTANDARD RENTAL PROVISIONS, the § 704.14 notice, DATCP double damages, the will-not-store notice, the sex offender registry notice, municipal utility liens). Each was run against the final rows:
1. Applicant charged a $40 screening fee → `edu-application-fees-wi` ($25 credit-report cap; the rest is earnest money)
2. Out-of-state applicant; background check charge → `edu-application-fees-wi` (§ 704.085(2))
3. Holding deposit to take the unit off the market → `edu-holding-deposit-wi`
4. Applicant with a housing voucher → `edu-source-of-income-wi`
5. Landlord asks about immigration status → `edu-immigration-wi`, `edu-fair-housing-wi`
6. Applicant with an eviction record or criminal record → `edu-screening-wi`, `edu-eviction-records-wi`
7. Landlord asks for an applicant's social media login → `edu-applicant-questions-wi`
8. ESA request with online documentation → `edu-assistance-animals-wi`, `edu-esa-misrepresentation-wi`, `assistance-animal-accommodation` tag
9. Owner lives in another state → `edu-nonresident-agent-wi`, `landlord-disclosure-wi`
10. What must be disclosed before signing → `edu-required-disclosures-wi`, `condition-disclosure-wi`, `utility-allocation-wi`
11. Lease signed electronically; deposit statement by e-mail → `electronic-signatures` tag, `electronic-delivery-wi`
12. Tenant asks for a copy of the lease and rules → `lease-copy-receipt-wi`, `edu-lease-copy-wi`
13. Deposit of two months' rent plus a pet deposit → `edu-deposit-cap-wi`, `edu-pet-fees-wi`
14. Nonrefundable cleaning fee in the lease → `edu-nonrefundable-fees-wi`, `edu-deposit-nrp-wi`
15. Last month's rent collected at signing → `edu-last-month-rent-wi`, `due-at-signing` tag
16. Deposit paid in installments; deposit alternative product → `edu-deposit-installments-wi`, `edu-deposit-alternatives-wi`
17. Where to keep the deposit; interest → `edu-deposit-holding-wi`, `edu-deposit-interest-wi`, `deposit-account-licensee-wi`
18. Pre-1978 house → `lead-based-paint` tag, `edu-lead-wi`
19. Unit not ready on the start date → `possession-delay` tag
20. Move-in condition checklist → `check-in-wi`, `existing-condition-wi`, `edu-check-in-wi`
21. Rent paid in cash → `edu-rent-receipts-wi`
22. Rent five days late; late fee → `late-fee` tag, `edu-late-fee-wi`
23. Rent check bounces → `returned-payments-wi`
24. Pay-or-vacate notice including late fees → `edu-fees-as-rent-wi`, `edu-nonpayment-notice-wi`
25. Rent increase on a month-to-month tenancy → `edu-rent-increase-wi`
26. City considering rent control or a rental license → `edu-rent-control-wi`, `edu-landlord-registration-wi`, `edu-rental-inspections-wi`
27. Entry to fix a leak tomorrow; tenant refuses → `landlords-access` tag, `edu-landlord-entry-wi`
28. Monthly furnace-filter entries without notice → `nrp-entry-wi`
29. Burst pipe while the tenant is away → `edu-landlord-entry-wi` (ATCP § 134.09(2)(b))
30. Heat fails in January → `edu-heating-wi`, `edu-tenant-remedies-wi`, `edu-habitability-wi`
31. Tenant withholds rent for repairs → `edu-tenant-remedies-wi`
32. Tenant's guest breaks the dishwasher → `landlord-maintenance-wi`, `tenant-caused-damage-wi`
33. Single-family tenant to mow and shovel → `landscaping-irrigation`, `snow-removal` tags
34. Mold or bed bugs → `edu-pests-mold-wi`
35. Smoke and CO detectors in a duplex vs a 12-unit building → `edu-smoke-co-detectors-wi`, `alarm-maintenance-wi`
36. Rekeying; DV victim asks for a lock change → `edu-security-devices-wi`
37. Shared electric meter → `utility-allocation-wi`, `edu-meters-wi`
38. Tenant's unpaid city water bill → `edu-municipal-utility-lien-wi`
39. Landlord wants notice before the tenant's electric is shut off → `utility-notice-authorization-wi`
40. Tenant smokes marijuana → `edu-cannabis-wi`, `smoking-policy-wi`
41. Guest staying three weeks → `guest-policy`, `guest-policy-day-limit` tags
42. Tenant wants to sublet for the summer → `no-sublet-assign` tag, `edu-sublet-assign-wi`
43. Car parked in a tenant's space; towing → `edu-towing-wi`, `parking-vehicle-rules` tag
44. Tenant installs a doorbell camera or a political sign → `edu-security-cameras-wi`, `edu-signs-flags-wi`
45. Landlord wants to ban firearms → `edu-firearms-wi`
46. Drug dealing at the unit; police nuisance letter → `criminal-activity-wi`, `edu-criminal-eviction-wi`
47. Victim of domestic abuse wants to leave early → `edu-dv-termination-wi`, `dv-protections-notice-wi`
48. National Guard member on state active duty → `edu-servicemember-wi`
49. Tenant wants to break the lease early → `early-termination-wi`, `edu-statutory-termination-wi`, `edu-mitigation-wi`
50. Unauthorized pet or occupant found → `pet-policy-wi`, `edu-cure-wi`, `edu-unauthorized-occupants-wi`
51. Tenant breaches a rule (noise) → `edu-cure-wi`, `default-by-tenant-wi`
52. Serving a notice → `edu-notice-service-wi`
53. Tenant gone; property left behind → `abandoned-property-wi`, `edu-abandoned-property-wi`
54. Ending a month-to-month without a reason → `periodic-tenancy-notice-wi`, `edu-for-cause-wi`
55. Tenant stays after the lease ends → `holdover-wi`, `edu-holdover-rate-wi`, `edu-waiver-by-acceptance-wi`
56. Tenant complained to the building inspector; landlord raises rent → `edu-retaliation-wi`
57. Landlord changes the locks to get the tenant out → `edu-self-help-wi`
58. Eviction filed; court, jury and timing; property after the writ → `edu-eviction-process-wi`, `edu-jury-waiver-wi`, `edu-eviction-stays-wi`, `edu-post-eviction-property-wi`
59. Deposit return and deductions → `security-deposit-use-wi`, `security-deposit-return-wi`, `nrp-deposit-withholding-wi`, `edu-deposit-return-wi`
60. Sole tenant dies → `edu-tenant-death-wi`, `tenant-death-contact-wi`
61. Property sold or foreclosed; condo conversion → `edu-sale-management-wi`, `edu-deposit-on-sale-wi`, `edu-foreclosure-wi`, `edu-condo-conversion-wi`
62. Tenant asks whether a sex offender lives nearby → `sex-offender-registry-notice-wi`, `edu-sex-offender-wi`

Every scenario was answered by an existing row; the screen added none.

## 17. Outside-title search and proof of absence (gap-discovery source 4)
The whole Wisconsin Statutes, the whole Administrative Code and the Constitution were loaded before the first battery (rule 35) and searched with 226 batteries (§1.3). Findings outside ch. 704, ch. 799 and ATCP ch. 134 that reached rows:
- **Local preemption:** Wis. Stat. §§ 66.0104, 66.0119, 66.1010, 66.1015; ATCP § 134.10.
- **Consumer protection and trade practices:** §§ 100.20, 100.26, 100.305; §§ 421.301, 422.202, 422.203, 427.104 (with Koble, 2026 WI 19); § 133.03 (antitrust); § 402.302.
- **Fair housing and animals:** § 106.50; Wis. Admin. Code DWD § 220.02; § 346.503 (disabled parking); § 173.13 (animal custody).
- **Building and safety:** §§ 101.01, 101.123, 101.145, 101.149, 101.61, 101.645, 101.647; ATCP §§ 76.03, 76.05 (pools); SPS § 314.10 (sprinklers); DHS ch. 163 (lead renovation); § 254.166 (lead orders); § 254.595 (health hazards).
- **Utilities:** § 66.0809 (municipal utility liens); § 196.643; PSC §§ 113.0301, 113.0803, 134.062.
- **Vehicles:** §§ 342.40, 349.13, 349.137; Trans § 319.03.
- **Eviction records and courts:** § 758.20; SCR 72.01; §§ 806.25, 813.122, 814.61, 815.05, 815.18, 815.20.
- **Property and associations:** §§ 703.08, 703.105, 703.24, 703.315; §§ 710.02, 710.15, 710.17; § 706.02; § 177.01 (unclaimed property); § 846.40.
- **Crime and nuisance:** §§ 823.113, 823.23, 943.13, 943.14, 943.245, 961.41, 942.08 (privacy); § 895.489.
- **Military and public bodies:** § 321.62 (state active duty); § 182.004 (housing corporations, found by battery 219 and the independent check).
- **Political signs:** § 12.04.
- **Real estate licensees:** REEB §§ 18.031, 25.023.
- **Facility rules distinguished:** DHS § 83.34 (CBRF deposits); ATCP chs. 125 (manufactured home communities).
- **Constitution:** art. I, § 5 (jury trial, Parsons annotation); no provision addresses leases directly.
**Narrowed views (batteries 179-186):** reruns of high-hit whole-code batteries (112, 114, 92, 145, 7, 17, 88, 178) narrowed to passages near tenancy words, run only to make their hits readable; they have no known positive of their own, and rows cite them as 'no known positive (narrowed view; see WI log §17)' only beside the whole-code battery whose positives passed.
Absence records are carried by the rows and §18; every one cites its battery, hit count and positive result.

## 18. Topic reference canvass (rules 27, 36)

### 18.1 Topics answered by a WI row (214)
- `acceptable-payment-methods` (32 states): Present: `acceptable-payment-methods`
- `algorithmic-rent-setting` (26 states): Present: `edu-algorithmic-rent-wi`
- `application-fees` (23 states): Present: `edu-application-fees-wi`
- `application-of-payments` (32 states): Present: `application-of-payments`
- `due-at-signing` (32 states): Present: `due-at-signing`
- `fee-transparency` (12 states): Present: `edu-fee-disclosure-wi`
- `fees-as-rent` (29 states): Present: `edu-fees-as-rent-wi`
- `late-fee` (32 states): Present: `late-fee`, `edu-late-fee-wi`
- `nonresident-owner-agent` (4 states): Present: `edu-nonresident-agent-wi`
- `rent-concession` (2 states): Present: `rent-concession-wi`
- `rent-control` (27 states): Present: `edu-rent-control-wi`
- `rent-escalation` (3 states): Answered by: `edu-rent-increase-wi`
- `rent-increase-notice` (25 states): Present: `edu-rent-increase-wi`
- `rent-payment` (32 states): Present: `rent-payment`
- `rent-receipts` (18 states): Present: `edu-rent-receipts-wi`
- `rent-tax` (12 states): Present: `edu-rent-tax-wi`
- `required-fees` (3 states): Answered by: `edu-fee-disclosure-wi`
- `returned-payments` (32 states): Present: `returned-payments-wi`
- `shutdown-rent-protection` (1 states): Present: `edu-shutdown-rent-wi`
- `term-change-notice` (5 states): Answered by: `edu-rent-increase-wi`
- `unpaid-damages-interest` (13 states): Present: `edu-interest-on-debts-wi`
- `waiver-by-acceptance` (16 states): Present: `edu-waiver-by-acceptance-wi`
- `condition-inspection` (24 states): Present: `check-in-wi`, `edu-check-in-wi`
- `deposit-cost-schedule` (2 states): Present: `nrp-deposit-withholding-wi`, `edu-deposit-nrp-wi`
- `deposit-escheat` (18 states): Present: `edu-deposit-escheat-wi`
- `deposit-installments` (5 states): Present: `edu-deposit-installments-wi`
- `deposit-last-month-rent` (9 states): Present: `edu-last-month-rent-wi`
- `fee-in-lieu-of-deposit` (3 states): Present: `edu-deposit-alternatives-wi`
- `holding-deposit` (9 states): Present: `edu-holding-deposit-wi`
- `nonrefundable-deposit-notice` (4 states): Present: `edu-nonrefundable-fees-wi`
- `nonrefundable-deposit-separate-notice` (1 states): Answered by: `edu-nonrefundable-fees-wi`
- `security-deposit-cap` (26 states): Present: `edu-deposit-cap-wi`
- `security-deposit-holding` (12 states): Present: `deposit-account-licensee-wi`, `edu-deposit-holding-wi`
- `security-deposit-interest` (26 states): Present: `edu-deposit-interest-wi`
- `security-deposit-on-sale` (17 states): Present: `edu-deposit-on-sale-wi`
- `security-deposit-penalty` (16 states): Present: `edu-deposit-penalty-wi`
- `security-deposit-return` (32 states): Present: `security-deposit-return-wi`, `edu-deposit-return-wi`
- `security-deposit-use` (31 states): Present: `security-deposit-use-wi`
- `alterations` (32 states): Present: `no-alterations`
- `bed-bug-cooperation` (1 states): Answered by: `edu-tenant-duties-wi`
- `children-occupancy` (1 states): Present: `edu-occupancy-wi`
- `criminal-activity` (17 states): Present: `criminal-activity-wi`
- `disturbance` (32 states): Present: `no-disturbance`
- `existing-condition` (32 states): Present: `existing-condition-wi`
- `extended-absence-notice` (8 states): Present: `extended-absence-notice-ks`
- `joint-liability` (32 states): Present: `joint-liability`
- `municipal-utility-lien` (7 states): Present: `edu-municipal-utility-lien-wi`
- `permitted-occupants` (32 states): Present: `permitted-occupants`
- `residential-use-only` (32 states): Present: `residential-use-only`
- `smoking-policy` (32 states): Present: `smoking-policy-wi`
- `sublet-assign` (32 states): Present: `no-sublet-assign`, `edu-sublet-assign-wi`
- `tenant-forward-proceedings` (22 states): Present: `tenant-forward-proceedings-ca`
- `tenant-maintenance` (32 states): Present: `tenant-maintenance`
- `tenant-statutory-duties` (9 states): Present: `edu-tenant-duties-wi`
- `utilities-responsibility` (32 states): Present: `utilities-responsibility`
- `utility-payment-evidence` (32 states): Present: `utility-payment-evidence`
- `utility-service-continuity` (32 states): Present: `utility-service-continuity`
- `waterbed` (2 states): Present: `edu-waterbed-wi`
- `alarm-duties` (31 states): Present: `alarm-maintenance-wi`, `edu-smoke-co-detectors-wi`
- `appliances-included` (32 states): Present: `appliances-included`
- `disability-accommodation` (9 states): Present: `edu-disability-wi`
- `fire-code-standard` (1 states): Answered by: `edu-fire-safety-wi`
- `habitability-waiver` (1 states): Present: `edu-habitability-wi`
- `heating` (3 states): Present: `edu-heating-wi`
- `landlord-breach-remedy` (1 states): Answered by: `edu-tenant-remedies-wi`
- `landlord-maintenance` (32 states): Present: `landlord-maintenance-wi`
- `pool-safety` (3 states): Present: `edu-pools-wi`
- `quiet-possession` (25 states): Present: `edu-quiet-possession-wi`
- `security-devices` (9 states): Present: `edu-security-devices-wi`
- `services-utilities-provided` (32 states): Present: `services-utilities-provided-ks-oh`
- `telecom-access` (4 states): Present: `edu-video-service-wi`
- `tenant-repair-remedies` (17 states): Present: `edu-tenant-remedies-wi`
- `utilities-paid-by-landlord` (32 states): Present: `utilities-paid-by-landlord`
- `utility-allowance-cap` (1 states): Present: `utility-allowance-cap-co`
- `utility-landlord-account` (5 states): Present: `edu-utility-accounts-wi`
- `utility-shutoff-statute` (4 states): Answered by: `edu-utility-accounts-wi`
- `utility-submetering-disclosure` (15 states): Present: `utility-allocation-wi`
- `landlord-entry` (32 states): Present: `landlords-access`, `edu-landlord-entry-wi`
- `periodic-services-entry` (1 states): Present: `nrp-entry-wi`
- `abandoned-property` (30 states): Present: `abandoned-property-wi`, `edu-abandoned-property-wi`
- `abandonment-and-mitigation` (18 states): Present: `edu-mitigation-wi`
- `attorney-fees` (19 states): Present: `edu-attorney-fees-wi`
- `casualty-termination` (31 states): Present: `casualty-termination-wi`
- `conversion-notice` (15 states): Present: `edu-condo-conversion-wi`
- `cure-and-eviction-grounds` (13 states): Present: `edu-cure-wi`
- `default-by-tenant` (32 states): Present: `default-by-tenant-wi`
- `dv-eviction-protection` (6 states): Present: `edu-dv-eviction-defense-wi`
- `dv-lease-termination` (30 states): Present: `dv-protections-notice-wi`, `edu-dv-termination-wi`
- `dv-lockchange` (5 states): Answered by: `edu-security-devices-wi`
- `early-termination` (32 states): Present: `early-termination-wi`
- `eviction-hardship-stay` (2 states): Present: `edu-eviction-stays-wi`
- `eviction-process` (27 states): Present: `edu-eviction-process-wi`
- `eviction-record-sealing` (28 states): Present: `edu-eviction-records-wi`
- `eviction-service-party` (1 states): Answered by: `edu-notice-service-wi`
- `expedited-criminal-eviction` (14 states): Present: `edu-criminal-eviction-wi`
- `for-cause-eviction` (32 states): Present: `edu-for-cause-wi`
- `foreclosure` (19 states): Present: `edu-foreclosure-wi`
- `forfeiture-redemption` (1 states): Answered by: `edu-nonpayment-notice-wi`
- `holdover` (32 states): Present: `holdover-wi`
- `holdover-rate` (14 states): Present: `edu-holdover-rate-wi`
- `homestead-waiver` (4 states): Present: `edu-exemption-waiver-wi`
- `landlord-lien` (20 states): Present: `edu-landlord-lien-wi`
- `landlord-remedies-termination` (1 states): Answered by: `edu-prohibited-terms-wi`
- `liquidated-damages` (1 states): Answered by: `edu-prohibited-terms-wi`
- `lockout-for-rent-delinquency` (1 states): Answered by: `edu-self-help-wi`
- `nonpayment-notice` (18 states): Present: `edu-nonpayment-notice-wi`
- `owner-move-in-reservation` (1 states): Answered by: `edu-for-cause-wi`
- `possession-bond` (1 states): Answered by: `edu-eviction-process-wi`
- `possession-delay` (32 states): Present: `possession-delay`
- `post-eviction-property` (21 states): Present: `edu-post-eviction-property-wi`
- `redemption` (1 states): Answered by: `edu-nonpayment-notice-wi`
- `rent-into-court-counterclaim` (3 states): Answered by: `edu-eviction-process-wi`
- `rental-application-accuracy` (32 states): Present: `rental-application-accuracy`
- `retaliation` (32 states): Present: `edu-retaliation-wi`
- `self-help-eviction` (27 states): Present: `edu-self-help-wi`
- `servicemember-rights` (26 states): Present: `edu-servicemember-wi`
- `statutory-early-termination` (5 states): Present: `edu-statutory-termination-wi`
- `surrender-end-of-term` (32 states): Present: `surrender-end-of-term-ks-ne`
- `tenancy-at-will` (2 states): Present: `edu-tenancy-at-will-wi`
- `tenant-caused-damage` (27 states): Present: `tenant-caused-damage-wi`
- `tenant-death` (28 states): Present: `tenant-death-contact-wi`, `edu-tenant-death-wi`
- `termination-notice` (30 states): Present: `periodic-tenancy-notice-wi`, `edu-termination-notice-wi`
- `unauthorized-occupant-removal` (23 states): Present: `edu-unauthorized-occupants-wi`
- `addendum-precedence` (32 states): Present: `addendum-precedence-wi`
- `automatic-renewal` (4 states): Present: `auto-renewal-wi`, `edu-auto-renewal-wi`
- `dv-confidentiality` (8 states): Answered by: `edu-dv-eviction-defense-wi`
- `electronic-signatures` (32 states): Present: `electronic-signatures`
- `emergency-assistance-right` (27 states): Present: `edu-calling-for-help-wi`
- `entire-agreement` (32 states): Present: `entire-agreement`
- `governing-law` (32 states): Present: `governing-law`
- `lease-copy` (14 states): Present: `lease-copy-receipt-wi`, `edu-lease-copy-wi`
- `notice-delivery-methods` (29 states): Present: `electronic-delivery-wi`, `edu-notice-service-wi`
- `notices` (32 states): Present: `notices`
- `rental-inspection` (7 states): Present: `edu-rental-inspections-wi`
- `renters-insurance-rules` (7 states): Present: `edu-renters-insurance-wi`
- `sale-or-management-change` (22 states): Present: `edu-sale-management-wi`
- `scope` (23 states): Present: `edu-scope-wi`
- `severability` (32 states): Present: `severability`
- `statute-of-frauds-lease-term` (10 states): Present: `edu-lease-writing-wi`
- `statutory-forms` (27 states): Present: `edu-statutory-forms-wi`
- `tenant-records` (1 states): Answered by: `edu-screening-wi`
- `tenants-property-insurance` (32 states): Present: `tenants-property-insurance-ks-oh-ca`
- `assistance-animal-accommodation` (32 states): Present: `assistance-animal-accommodation`, `edu-assistance-animals-wi`
- `pet-fees` (12 states): Present: `edu-pet-fees-wi`
- `pet-insurance-requirement` (32 states): Present: `pet-insurance-requirement`
- `pet-policy` (32 states): Present: `pet-policy-wi`
- `service-animal-denial-penalty` (11 states): Answered by: `edu-esa-misrepresentation-wi`
- `service-animal-misrepresentation` (19 states): Present: `edu-esa-misrepresentation-wi`
- `assigned-parking-space` (32 states): Present: `assigned-parking-space`
- `ev-charging` (29 states): Present: `edu-ev-charging-wi`
- `parking` (32 states): Present: `parking-ks-oh-ca`
- `parking-vehicle-rules` (31 states): Present: `parking-vehicle-rules`
- `storage-space` (32 states): Present: `storage-space-ks-oh-ca`
- `towing` (29 states): Present: `edu-towing-wi`
- `cannabis` (15 states): Present: `edu-cannabis-wi`
- `common-area-use` (32 states): Present: `common-area-use`
- `fire-safety-grilling` (32 states): Present: `fire-safety-grilling`
- `firearms` (13 states): Present: `edu-firearms-wi`
- `guest-policy` (32 states): Present: `guest-policy`
- `guest-policy-day-limit` (31 states): Present: `guest-policy-day-limit`
- `inspection-rights` (31 states): Present: `inspection-rights`
- `keys` (32 states): Present: `keys`
- `landscaping-irrigation` (31 states): Present: `landscaping-irrigation`
- `political-access` (1 states): Answered by: `edu-signs-flags-wi`
- `portable-solar` (1 states): Present: `edu-solar-wi`
- `religious-cultural-display` (1 states): Answered by: `edu-signs-flags-wi`
- `rules-regulations` (15 states): Present: `rules-wi`
- `smoke-drift-waiver` (1 states): Present: `edu-smoking-wi`
- `snow-removal` (30 states): Present: `snow-removal`
- `tenant-display-rights` (11 states): Present: `edu-signs-flags-wi`
- `tenant-security-cameras` (25 states): Present: `edu-security-cameras-wi`
- `bed-bug-disclosure` (30 states): Present: `edu-pests-mold-wi`
- `electric-submetering-disclosure` (1 states): Present: `edu-meters-wi`
- `fair-housing` (29 states): Present: `edu-fair-housing-wi`
- `flood-disclosure` (22 states): Present: `edu-flood-wi`
- `foreclosure-disclosure` (4 states): Answered by: `edu-foreclosure-wi`
- `good-cause-notice` (1 states): Answered by: `edu-for-cause-wi`
- `hoa-compliance` (32 states): Present: `hoa-compliance`
- `inspection-condemnation-disclosure` (1 states): Present: `condition-disclosure-wi`
- `lead-based-paint` (32 states): Present: `lead-based-paint`
- `lead-safe-certification` (1 states): Present: `edu-lead-wi`
- `meth-disclosure` (26 states): Present: `edu-meth-wi`
- `military-air-zone-disclosure` (2 states): Present: `edu-military-zone-wi`
- `mold-disclosure` (29 states): Answered by: `edu-pests-mold-wi`
- `owner-identity-disclosure` (31 states): Present: `landlord-disclosure-wi`
- `pest-control-notice` (1 states): Answered by: `edu-pests-mold-wi`
- `protected-class-inquiry-ban` (5 states): Present: `edu-applicant-questions-wi`
- `radon-disclosure` (31 states): Present: `edu-radon-wi`
- `required-disclosures` (1 states): Present: `edu-required-disclosures-wi`
- `sex-offender-disclosure` (3 states): Present: `sex-offender-registry-notice-wi`, `edu-sex-offender-wi`
- `source-of-income` (26 states): Present: `edu-source-of-income-wi`
- `sprinkler-disclosure` (1 states): Answered by: `edu-fire-safety-wi`
- `stigmatized-property` (17 states): Present: `edu-stigmatized-wi`
- `window-guards` (1 states): Present: `edu-window-guards-wi`
- `condemned-premises-rent-bar` (1 states): Present: `edu-condemned-wi`
- `confession-of-judgment` (2 states): Answered by: `edu-prohibited-terms-wi`
- `consumer-protection-act` (20 states): Present: `edu-consumer-protection-wi`
- `employee-screening` (1 states): Answered by: `edu-screening-wi`
- `eviction-penalty-clause-ban` (1 states): Answered by: `edu-prohibited-terms-wi`
- `exculpatory-clauses` (5 states): Answered by: `edu-prohibited-terms-wi`
- `fire-sprinkler-duty` (1 states): Present: `edu-fire-safety-wi`
- `foreign-ownership` (11 states): Present: `edu-foreign-ownership-wi`
- `hoa` (6 states): Present: `condo-documents-wi`
- `immigration-status` (25 states): Present: `edu-immigration-wi`
- `jury-waiver` (4 states): Present: `edu-jury-waiver-wi`
- `knowing-use-penalty` (4 states): Answered by: `edu-consumer-protection-wi`
- `landlord-registration` (6 states): Present: `edu-landlord-registration-wi`
- `lease-content-requirements` (1 states): Answered by: `edu-statutory-forms-wi`
- `lease-type-size` (1 states): Answered by: `edu-statutory-forms-wi`
- `plain-language` (12 states): Answered by: `edu-statutory-forms-wi`
- `prohibited-lease-terms` (27 states): Present: `edu-prohibited-terms-wi`
- `tenant-right-to-organize` (3 states): Answered by: `edu-retaliation-wi`
- `tenant-screening` (15 states): Present: `edu-screening-wi`
- `unconscionability` (9 states): Answered by: `edu-consumer-protection-wi`

### 18.2 Topics with no WI row (status and reason) (104)
Status labels: Confirmed absent (battery cited), Answered elsewhere, Not offered (lawful option declined, §6.1), Not applicable (another state's rule).
- `collection-fee` (2 states): Not offered: No Wisconsin authority (WI battery 194 (collection / notice-preparation fees charged to tenants): 5 hits, control 0; known positives passed (0 real sections, 1 synthetic)); a collection fee is a cost of a dispute that Wis. Stat. § 704.44(4m) bars, voiding the lease. `edu-attorney-fees-wi`.
- `fee-unprovided-service` (1 states): Answered elsewhere: No fee-for-unprovided-service statute (WI battery 11 (fee transparency / nonrent charges disclosure): 8 hits, control 0; known positives passed (1 real section, 0 synthetic)); misrepresenting non-rent charges is barred by Wis. Admin. Code ATCP § 134.09(9)(a)2. `edu-fee-disclosure-wi`.
- `government-fee-reimbursement` (1 states): Not offered: Local rental fees are limited to a one-time registration fee and violation-based inspection fees (Wis. Stat. § 66.0104(2)(e)); passing one to a tenant would be a disclosed non-rent charge (ATCP § 134.09(9)(a)3.). `government-fee-reimbursement-in` not tagged: low value, and inspection fees arise only from the landlord's own uncorrected violations.
- `late-fee-limit` (1 states): Answered elsewhere: No cap in Wis. Stat. ch. 704 or Wis. Admin. Code ch. ATCP 134 (WI battery 2 (late fee cap / limit (amount or percent)): 21 hits, control 0; known positives passed (1 real section, 1 synthetic)) (WI battery 3 (late fee cap everyday rerun (reasonable late fee; dwelling)): 1 hit, control 0; known positives passed (1 real section, 1 synthetic)); the Consumer Act's delinquency-charge cap (Wis. Stat. § 422.203) reaches consumer credit transactions, and on the reasoning of Koble Investments v. Marquardt, 2026 WI 19, ¶¶ 15-16 not a lease with monthly rent (WI battery 206 (delinquency / late charge caps in consumer law (wider rerun for late fee)): 38 hits, control 0; known positives passed (2 real sections, 0 synthetic)) (Claude's reading). `edu-late-fee-wi`, `late-fee` tagged.
- `notice-service-fee` (2 states): Not offered: Same reason as `collection-fee` (Wis. Stat. § 704.44(4m)) (WI battery 194 (collection / notice-preparation fees charged to tenants): 5 hits, control 0; known positives passed (0 real sections, 1 synthetic)). `edu-attorney-fees-wi`.
- `statutory-caps` (1 states): Answered elsewhere: Wisconsin caps: credit report and nonresident background check $25 each (Wis. Stat. § 704.085); towing $150 (Wis. Admin. Code Trans § 319.03); no caps on deposits, late fees, returned-payment fees or pet fees for ordinary residential rentals (WI battery 2 (late fee cap / limit (amount or percent)): 21 hits, control 0; known positives passed (1 real section, 1 synthetic)) (WI battery 4 (returned / dishonored payment fee): 26 hits, control 0; known positives passed (1 real section, 1 synthetic)) (WI battery 21 (security deposit cap): 4 hits, control 0; known positives passed (0 real sections, 2 synthetic)) (WI battery 33 (pet deposit): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (the Consumer Act's credit-transaction caps and the manufactured home community deposit limit, Wis. Admin. Code ATCP § 125.04(1)(b), aside). Rows: `edu-application-fees-wi`, `edu-late-fee-wi`, `edu-deposit-cap-wi`, `edu-pet-fees-wi`, `returned-payments-wi`.
- `subsidy-late-fee` (1 states): Confirmed absent: No rule on late fees for the subsidy portion (WI battery 196 (subsidy / voucher portion of rent): 7 hits, control 0; known positives passed (0 real sections, 1 synthetic)); the hits are public-assistance and tax rules.
- `veterans-incentive` (1 states): Not applicable: Florida pilot program; no Wisconsin landlord incentive found (WI battery 196 (subsidy / voucher portion of rent): 7 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `deposit-surrender-notice` (1 states): Confirmed absent: No Wisconsin rule conditioning deposit return on a surrender notice (WI battery 20 (security deposit (any)): 49 hits, control 0; known positives passed (2 real sections, 0 synthetic)); the return deadline runs from the triggers in Wis. Stat. § 704.28(4). `edu-deposit-return-wi`.
- `dv-deposit-timing` (1 states): Answered elsewhere: No special deposit timing after a Wis. Stat. § 704.16 termination; the general triggers in § 704.28(4)(b) apply (Claude's reading). `edu-deposit-return-wi`.
- `expedited-deposit-disposition` (1 states): Confirmed absent: No early-disposition procedure (WI battery 20 (security deposit (any)): 49 hits, control 0; known positives passed (2 real sections, 0 synthetic)).
- `inspection-notice-penalty` (1 states): Answered elsewhere: No separate penalty; failure to give the check-in notice is a violation of Wis. Admin. Code ATCP § 134.06(1), enforceable with double damages under Wis. Stat. § 100.20(5). `edu-deposit-penalty-wi`.
- `security-deposit-nonwaiver` (2 states): Answered elsewhere: No deposit-specific nonwaiver statute (WI battery 198 (waiver of deposit rights / tenant rights nonwaivable): 10 hits, control 0; known positives passed (1 real section, 0 synthetic)); ATCP ch. 134 duties are DATCP orders a lease cannot vary, and Wis. Stat. § 704.28 is enforceable under § 704.95. `edu-deposit-penalty-wi`.
- `security-deposit-standards` (1 states): Confirmed absent: No rule on differing deposit standards (WI battery 20 (security deposit (any)): 49 hits, control 0; known positives passed (2 real sections, 0 synthetic)); fair housing law still applies (`edu-fair-housing-wi`).
- `utility-deposit-return` (1 states): Confirmed absent: No separate rule on utility deposits held by landlords (WI battery 197 (utility deposit held by landlord): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (WI battery 226 (utility deposits everyday words (rerun of 197)): 8 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (municipal utilities may adopt deposit rules for their own customers, Wis. Stat. §§ 66.0809(10), 196.37(5)); any deposit held as security is a security deposit (Wis. Admin. Code ATCP § 134.02(11)).
- `cold-weather-vacate-notice` (1 states): Not applicable: Minnesota rule; Wisconsin has none (WI battery 40 (tenant duty to report extended absence): 13 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `construction-liens` (1 states): Confirmed absent: No landlord-tenant construction-lien rule found (WI battery 42 (construction liens and tenant improvements): 11 hits, control 0; known positives passed (0 real sections, 1 synthetic)); Wis. Stat. ch. 779 not read for lessee improvements (rule 21). Tenant alterations need consent (Wis. Stat. § 704.05(3); `no-alterations` tagged).
- `dv-qualifying-documents` (2 states): Answered elsewhere: Qualifying documents are listed in Wis. Stat. § 704.16(1)(b)1.-7. and (1m)(a)-(b) (certified copies). `edu-dv-termination-wi`.
- `prohibited-acts-renter` (2 states): Answered elsewhere: `prohibited-acts-renter-wy` not tagged (it rests on W.S. 1-21-1205); the same duties are in Wis. Stat. §§ 704.05(2)-(3), 704.07(3) (`edu-tenant-duties-wi`; `no-disturbance`, `tenant-maintenance` tagged). Absconding without paying rent is a misdemeanor unless the deposit covers it or the tenant pays or gives a forwarding address within 5 days (Wis. Stat. § 943.215).
- `purpose-limitation` (1 states): Not applicable: North Dakota remedy; Wisconsin's use limits are in Wis. Stat. § 704.05(3) (`residential-use-only` tagged).
- `utility-interruption-submeter` (1 states): Not applicable: Texas submetering regime; Wisconsin requires individual electric meters in post-1980 buildings (Wis. Admin. Code PSC § 113.0803) and bars constructive eviction by utility cutoff (ATCP § 134.09(5), (7)). `edu-meters-wi`.
- `utility-transfer` (1 states): Not offered: `utility-transfer-tn` not tagged: cutting service to an occupied unit risks constructive eviction (Wis. Admin. Code ATCP § 134.09(7)); Wis. Stat. § 196.643(1) lets an owner ask for termination only on affirming it 'will not endanger human health or life or cause damage to property'.
- `alt-housing` (5 states): Confirmed absent: No relocation or alternate-housing duty for landlords (WI battery 57 (alternate housing / relocation duty): 9 hits, control 0; known positives passed (0 real sections, 1 synthetic)); the tenant's remedy is to move out or abate rent (Wis. Stat. § 704.07(4)). `edu-tenant-remedies-wi`.
- `appliances-excluded` (1 states): Not offered: `appliances-excluded-sc` not tagged: excluding an appliance actually furnished would waive Wis. Stat. § 704.07(2)(a)4. and risk voiding the lease (§ 704.44(8)); `appliances-included` (tagged) already defines what is furnished (rule 44).
- `balcony-inspection` (1 states): Confirmed absent: No balcony or elevated-element inspection rule (WI battery 201 (balcony / deck / elevated element inspection): 4 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `confirmed-absences-habitability` (1 states): Answered elsewhere: Wisconsin absences are recorded as their own rows: `edu-tenant-remedies-wi` (no repair-and-deduct), `edu-pests-mold-wi`, `edu-radon-wi`, `edu-window-guards-wi`.
- `designated-repairer` (1 states): Not applicable: Wisconsin has no repair-and-deduct remedy to designate a repairer for (WI battery 51 (repair and deduct / rent withholding / escrow): 4 hits, control 0; known positives passed (1 real section, 1 synthetic)).
- `disaster-duties` (1 states): Confirmed absent: No post-disaster landlord duty (WI battery 158 (disaster / emergency displaced tenants): 9 hits, control 0; known positives passed (0 real sections, 1 synthetic)); casualty rules in Wis. Stat. § 704.07(2)(c), (4). `casualty-termination-wi`.
- `double-letting` (6 states): Confirmed absent: No double-letting statute (WI battery 187 (double-letting (same unit rented to two tenants)): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (WI battery 224 (double-letting everyday words (rerun of 187)): 5 hits, control 0; known positives passed (0 real sections, 1 synthetic)); failing to deliver possession at the agreed time is barred except for causes beyond the landlord's control (Wis. Admin. Code ATCP § 134.09(6); `possession-delay` tagged).
- `emergency-contact` (2 states): Answered elsewhere: No emergency-phone requirement (WI battery 199 (emergency contact / emergency repair phone number): 6 hits, control 0; known positives passed (0 real sections, 1 synthetic)); the manager's contact disclosure is `landlord-disclosure-wi`; the tenant-side contact is `tenant-death-contact-wi`.
- `frozen-standard-incorporation` (1 states): Not applicable: North Dakota drafting point; Wisconsin's rental rules do not incorporate dated outside standards (the fire code's NFPA incorporation was not read; rule 21).
- `furnishings-included` (1 states): Not offered: `furnishings-included-ks` not tagged: its builder note refers to the Kansas deposit limit. Furniture supplied with the unit is part of the 'premises' (Wis. Stat. § 704.01(3)) and within the repair duty (§ 704.07(2)(a)4.); list it under `appliances-included`.
- `habitability-materiality` (1 states): Answered elsewhere: Untenantability remedies require a condition that materially affects health or safety or substantially affects use (Wis. Stat. § 704.07(4)-(5)). `edu-tenant-remedies-wi`.
- `habitability-modifiable` (2 states): Answered elsewhere: Not modifiable: Wis. Stat. § 704.07(1). `edu-habitability-wi`.
- `habitability-presumption` (1 states): Confirmed absent: No eviction presumption of habitability breach (WI battery 48 (habitability / fit for habitation): 64 hits, control 0; known positives passed (1 real section, 0 synthetic)).
- `health-district-rental-rules` (1 states): Not applicable: Nevada rule; local health officers act under Wis. Stat. ch. 254 (e.g. § 254.59 human health hazards; lead orders, `edu-lead-wi`).
- `landlord-self-cure` (26 states): Answered elsewhere: Wisconsin lets the landlord repair tenant-caused damage and be reimbursed, cost presumed reasonable (Wis. Stat. § 704.07(3)(a)); no statute makes the cost rent (WI battery 52 (landlord right to cure tenant breach and bill as rent): 1 hit, control 0; known positives passed (0 real sections, 1 synthetic)). `landlord-self-cure-tn` not tagged (bills the cost as rent). `edu-tenant-duties-wi`, `tenant-caused-damage-wi`.
- `maintenance-duty-shift` (1 states): Answered elsewhere: Landlord duties under Wis. Stat. § 704.07(2) cannot be shifted (§ 704.07(1)); tenants may assume ordinary maintenance by agreement (§ 704.44(6), (7)(b)); no separate-writing rule (WI battery 113 (separate document / writing / instrument (rule 48)): 53 hits, control 0; known positives passed (3 real sections, 0 synthetic)). `edu-habitability-wi`; `landscaping-irrigation`, `snow-removal` tagged.
- `other-landlord-facilities` (1 states): Confirmed absent: No list of further landlord-supplied facilities beyond Wis. Stat. § 704.07(2) and local codes (WI battery 200 (stove / refrigerator / appliances landlord must provide): 33 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `part5-nonwaivable` (1 states): Answered elsewhere: Colorado-specific; Wisconsin's nonwaiver provisions are Wis. Stat. §§ 704.07(1), 704.44 and Wis. Admin. Code ATCP § 134.08. `edu-prohibited-terms-wi`.
- `portfolio-thresholds` (3 states): Answered elsewhere: Wisconsin thresholds: owner-occupied buildings of 4 or fewer units are exempt from ATCP § 134.04(1) identification; public pools at 3+ unit complexes (ATCP § 76.03(61)); meters in post-1980 multi-unit buildings (PSC § 113.0803); smoke and carbon monoxide detector rules differ for one- and two-unit dwellings (Wis. Stat. §§ 101.645, 101.647) and buildings of 3 or more units (§§ 101.145, 101.149; `edu-smoke-co-detectors-wi`); no portfolio-size rules.
- `rent-demand-bar` (1 states): Answered elsewhere: California rule; Wisconsin bars renting or advertising condemned premises (ATCP § 134.09(1)). `edu-condemned-wi`.
- `rent-reporting` (2 states): Confirmed absent: No rent-reporting statute (WI battery 193 (rent payment reporting to credit agencies): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (WI battery 153 (rent reporting to credit bureaus): 1 hit, control 0; known positives passed (0 real sections, 1 synthetic)).
- `repair-cost-termination` (1 states): Confirmed absent: No landlord right to terminate instead of making an uneconomical repair; for casualty see `casualty-termination-wi` (Wis. Stat. § 704.07(2)(c)).
- `repair-escrow-exemption-notice` (1 states): Not applicable: Ohio notice; Wisconsin has no rent-escrow remedy (WI battery 51 (repair and deduct / rent withholding / escrow): 4 hits, control 0; known positives passed (1 real section, 1 synthetic)).
- `repair-notice` (3 states): Confirmed absent: No statutory form or method for a tenant's repair request; the landlord must repair within a reasonable time under Wis. Stat. § 704.07(2) (`landlord-maintenance-wi` asks for written notice). Detector notices must be written (§§ 101.145(3)(c), 101.149(3)(b), 101.645(3), 101.647(3)(b)).
- `senior-housing-work-card` (1 states): Not applicable: Nevada rule; no Wisconsin equivalent found (WI battery 150 (housing for older persons / senior pets): 2 hits, control 0; known positives passed (1 real section, 0 synthetic)).
- `stove-refrigerator` (1 states): Confirmed absent: No duty to supply a stove or refrigerator (WI battery 200 (stove / refrigerator / appliances landlord must provide): 33 hits, control 0; known positives passed (0 real sections, 1 synthetic)); furnished appliances must be repaired (Wis. Stat. § 704.07(2)(a)4.).
- `subsidy-habitability-proration` (1 states): Answered elsewhere: Rent abates 'to the extent the tenant is deprived of the full normal use' (Wis. Stat. § 704.07(4)); no subsidy-specific rule (WI battery 196 (subsidy / voucher portion of rent): 7 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `substandard-property-receivership` (2 states): Answered elsewhere: Receivership for public-nuisance buildings: Wis. Stat. § 823.23 (read; its tenant-retaliation limit in sub. (4) noted). Not a lease term.
- `tenant-repair-agreement` (18 states): Answered elsewhere: Same as `maintenance-duty-shift`.
- `utility-apportionment` (2 states): Answered elsewhere: `utility-allocation-wi` (Wis. Admin. Code ATCP § 134.04(3)).
- `utility-disclosure-attachment` (1 states): Answered elsewhere: `utility-allocation-wi`; no prescribed attachment form.
- `key-control-policy` (1 states): Confirmed absent: No key-control or staff background-check duty for complexes (WI battery 46 (security devices / locks / rekey): 2 hits, control 0; known positives passed (1 real section, 0 synthetic)) (WI battery 181 (lockout / exclusion near tenancy words (narrowed view of 92)): 34 hits, control 0; known positives passed (2 real sections, 0 synthetic)).
- `casualty-and-mitigation-waivable` (1 states): Answered elsewhere: Mitigation cannot be waived (Wis. Stat. § 704.44(3m)); casualty rules in § 704.07 cannot be waived (§ 704.07(1)); a landlord casualty-termination right is `casualty-termination-wi`.
- `drug-free-housing-addendum` (1 states): Not applicable: Illinois Class X rule; Wisconsin's criminal-activity termination is `criminal-activity-wi`.
- `environmental-event-termination` (2 states): Answered elsewhere: `casualty-termination-wi` covers 'fire, water, or other casualty'; no separate environmental-event statute (WI battery 158 (disaster / emergency displaced tenants): 9 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `guarantor-renewal` (1 states): Confirmed absent: No guarantor statute for residential leases (WI battery 188 (guarantor / surety for a tenant): 5 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `infirmity-termination` (5 states): Confirmed absent: No early-termination right for moving to a care facility (WI battery 189 (tenant moving to care facility / infirmity termination): 1 hit, control 0; known positives passed (0 real sections, 1 synthetic)). `edu-statutory-termination-wi`.
- `minor-tenant-filing` (4 states): Confirmed absent: No rule on naming minors in an eviction (WI battery 103 (minor as eviction defendant / minors tenancy): 10 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `notice-to-quit-waiver` (1 states): Answered elsewhere: A lease of one year or less cannot vary the termination notices (Wis. Stat. § 704.17(5)(a)); periodic tenancies may agree another method only by clear and convincing proof (§ 704.19(2)(a)1.). `edu-cure-wi`, `edu-termination-notice-wi`.
- `nuisance` (17 states): Answered elsewhere: Drug and gang houses are public nuisances; owners and tenants may be enjoined and the property closed (Wis. Stat. § 823.113(1)-(4)). `edu-criminal-eviction-wi`.
- `social-security-defense` (1 states): Not applicable: California defense; none in Wisconsin (WI battery 100 (eviction stay / hardship / emergency assistance): 5 hits, control 0; known positives passed (2 real sections, 0 synthetic)).
- `subsidized-inspection-refusal` (1 states): Not applicable: Illinois subsidized-housing rule; no Wisconsin equivalent (WI battery 196 (subsidy / voucher portion of rent): 7 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `adverse-proceeding-notice` (1 states): Not applicable: `tenant-notice-of-adverse-proceeding-nd` rests on N.D.C.C. § 47-16-25; Wisconsin has no tenant duty to forward notices (WI battery 218 (tenant duty to notify landlord (rerun of 209, wider window)): 8 hits, control 0; known positives passed (0 real sections, 1 synthetic)), and Wis. Stat. § 704.13 already provides that a tenant's acknowledging another landlord cannot prejudice the original landlord's possession; residential tenants are not named in foreclosures (Wis. Stat. § 802.03(9)). No row.
- `confirmed-absences-misc` (1 states): Answered elsewhere: Wisconsin absences are each recorded as their own rows (see WI log §18 statuses).
- `confirmed-absences-outside-title` (1 states): Answered elsewhere: Batteries ran over the whole Wisconsin Statutes, Administrative Code and Constitution; absences are recorded per topic.
- `disaster-displaced-guests` (1 states): Confirmed absent: No disaster-displaced guest rule (WI battery 158 (disaster / emergency displaced tenants): 9 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `dv-protection-order-chapter-moved` (1 states): Not applicable: North Dakota recodification; Wisconsin's injunction statutes are Wis. Stat. §§ 813.12, 813.122, 813.125, cited in § 704.16.
- `landlord-liability-insurance` (1 states): Confirmed absent: No landlord liability-insurance requirement (WI battery 192 (landlord liability insurance requirement): 1 hit, control 0; known positives passed (0 real sections, 1 synthetic)).
- `law-enforcement-cooperation` (1 states): Answered elsewhere: No landlord cooperation duty found; tenants' calls for help are protected (`edu-calling-for-help-wi`).
- `lease-completeness` (25 states): Confirmed absent: No blank-spaces rule for residential leases (WI battery 110 (lease blanks / completeness): 17 hits, control 0; known positives passed (0 real sections, 1 synthetic)); the hits are consumer-credit and motor-vehicle lease notices. Noted in `edu-statutory-forms-wi`'s canvass.
- `lease-notice-initial-requirement` (1 states): Not applicable: North Dakota rule; no Wisconsin equivalent.
- `lease-term-limitation` (1 states): Answered elsewhere: A lease for more than one year must be in writing (Wis. Stat. § 704.03(1)-(2)). `edu-lease-writing-wi`.
- `notice-to-vacate-additional-terms` (1 states): Not applicable: Kansas rule; no Wisconsin equivalent.
- `optional-lease-terms` (1 states): Answered elsewhere: Wisconsin's lease-decides options are recorded in WI log §6.1 (rule 54 table).
- `plain-language-consumer-statement` (1 states): Confirmed absent: No plain-language statute for leases (WI battery 111 (plain language requirement): 109 hits, control 0; known positives passed (0 real sections, 1 synthetic)); Wis. Stat. § 427.104 does not govern a residential lease with monthly rent (Koble Investments v. Marquardt, 2026 WI 19, ¶ 4; `edu-consumer-protection-wi`).
- `rent-receipt-anti-waiver` (1 states): Answered elsewhere: Habitability duties cannot be waived by any rental agreement (Wis. Stat. § 704.07(1)); transferees take subject to lease covenants (§ 704.09(3)).
- `tenant-insurance-claims` (1 states): Confirmed absent: No rule on requiring renter's insurance claims (WI battery 203 (tenant renter's insurance claims for landlord repairs): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (WI battery 227 (tenant insurance claims everyday words (rerun of 203)): 9 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `tpa-sunset` (1 states): Not applicable: California statute.
- `ev-charging-end-of-tenancy` (2 states): Confirmed absent: No tenant EV-charging right (WI battery 173 (electric vehicle charging (everyday words, rerun of 128)): 26 hits, control 0; known positives passed (0 real sections, 1 synthetic)). `edu-ev-charging-wi`.
- `ev-charging-requirements` (2 states): Confirmed absent: Same as `ev-charging-end-of-tenancy`.
- `ev-charging-shared-area` (2 states): Confirmed absent: Same as `ev-charging-end-of-tenancy`.
- `parking-rules-notice` (1 states): Answered elsewhere: Written rules must be shown before signing (Wis. Admin. Code ATCP § 134.03(1)); towing needs posting (Wis. Stat. § 349.13(3m)). `edu-lease-copy-wi`, `edu-towing-wi`.
- `unbundled-parking` (1 states): Confirmed absent: No unbundled-parking rule (WI battery 126 (towing from private property): 15 hits, control 0; known positives passed (1 real section, 0 synthetic)).
- `guest-rights` (3 states): Confirmed absent: No tenant guest-rights statute (WI battery 106 (guest limits / guest rights): 4 hits, control 0; known positives passed (1 real section, 0 synthetic)); `guest-policy` tagged.
- `certificate-of-occupancy-disclosure` (1 states): Confirmed absent: No certificate-of-occupancy disclosure (WI battery 69 (code violation disclosure): 6 hits, control 0; known positives passed (2 real sections, 0 synthetic)).
- `defective-drywall-disclosure` (1 states): Confirmed absent: No defective-drywall disclosure (WI battery 146 (hazardous / environmental contamination disclosure): 40 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `hazardous-contamination-disclosure` (2 states): Confirmed absent: No contamination disclosure to tenants (WI battery 146 (hazardous / environmental contamination disclosure): 40 hits, control 0; known positives passed (0 real sections, 1 synthetic)); a known substantial hazard must be disclosed (Wis. Admin. Code ATCP § 134.04(2)(b)4.).
- `meter-conservation-charge` (1 states): Not applicable: South Carolina rule.
- `ordnance-demolition-meter-disclosures` (1 states): Not applicable: California rule; shared-meter allocation is `utility-allocation-wi`.
- `private-well-testing` (1 states): Confirmed absent: No private-well test disclosure to tenants (WI battery 191 (private well testing for rental property): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (WI battery 225 (private wells everyday words (rerun of 191)): 19 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `prop65-rental-warning` (1 states): Not applicable: California rule.
- `property-tax-rent-disclosure` (1 states): Confirmed absent: No property-tax-in-rent statement; a tenant who pays the owner's property taxes may recover them with 1% monthly interest or deduct them from rent (Wis. Stat. § 74.73).
- `sex-offender-occupancy` (9 states): Confirmed absent: No registrant occupancy duty for landlords (WI battery 67 (sex offender registry notice): 8 hits, control 0; known positives passed (1 real section, 0 synthetic)). `edu-sex-offender-wi`.
- `sfr-occupancy-disclosure` (1 states): Not applicable: Nevada rule.
- `steam-radiator-covers` (1 states): Not applicable: New Jersey rule.
- `tenant-rights-statement` (3 states): Confirmed absent: No state tenant-rights statement or brochure must be given (WI battery 154 (tenant rights statement / landlord-tenant guide): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (WI battery 178 (tenant guides / brochures (everyday words, rerun of 154)): 90 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (WI battery 186 (guides or brochures for tenants (narrowed view of 178)): 19 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (WI battery 205 (truth in renting / statement of tenant rights): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `tpa-exemption-notice` (1 states): Not applicable: California statute.
- `tpa-notice` (1 states): Not applicable: California statute.
- `truth-in-renting` (2 states): Confirmed absent: No truth-in-renting statute (WI battery 205 (truth in renting / statement of tenant rights): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `governmental-fines` (1 states): Confirmed absent: No rule on passing government fines to tenants (WI battery 190 (government fines passed to tenants): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic)); condominium association fines for a tenant's violation fall on the tenant (Wis. Stat. § 703.24(3)(a)).
- `translation-duty` (2 states): Confirmed absent: No lease translation duty (WI battery 115 (translation / language other than English): 21 hits, control 0; known positives passed (0 real sections, 1 synthetic)) (WI battery 204 (translation of lease / language negotiated): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)).
- `written-notice-required` (1 states): Answered elsewhere: Notices under ch. 704 must be written and served under Wis. Stat. § 704.21 (§§ 704.17(4), 704.19(4)); agreements to end a tenancy early may be oral except as § 704.03(4) requires (WI battery 202 (oral notice / verbal notice in place of written): 13 hits, control 0; known positives passed (0 real sections, 1 synthetic)). `edu-notice-service-wi`.

### 18.3 'Topics no state has a row for yet'
The reference (318 topics) carries no such list; every topic has rows in at least one state and is answered in §18.1 or §18.2. Three new topic keys come from Wisconsin (§10 item 4).

## 19. Step D screens (rules 40-53), one line each
- **35c constitution:** loaded before the first battery; art. I, § 5 (jury waiver) is the only provision reaching a row.
- **37 tenancy type:** notices differ by tenancy (week-to-week and month-to-month 5/14 days, lease of one year or less and year-to-year 5/14 days, lease over one year 30 days, § 704.17; periodic termination 28 days or one rental period, § 704.19(3)); holdover becomes month-to-month or the rent period (§ 704.25(2)(b)); sublet consent for tenancies shorter than year-to-year (§ 704.09(1)).
- **39 eviction duties:** sheriff executes writs only (§ 799.44, 799.45); writ void if received more than 30 days after issue; removal cost advanced, storage the tenant's (§ 799.45(1), (3)(b)); property disposal after eviction only via § 799.45(3m); emergency-assistance stay (§ 799.40(4)(a)); no pre-filing condition (battery 101); record retention under SCR 72.01(8) and § 758.20.
- **40 formatting and placement:** batteries 112, 114, 179, 180; no type-size or bold rule; layout table §4.
- **41 just cause:** none for ordinary rentals (battery 85); manufactured home communities need good cause (§ 710.15(5m)); limits in `edu-for-cause-wi` (retaliation, § 704.44(1m) void terms, DV defense, moratorium preemption).
- **42 required text in a shared clause:** the § 704.14 notice is its own clause; the will-not-store notice is `abandoned-property-wi`, tied to `surrender-end-of-term-ks-ne`; the check-in notice is `check-in-wi`.
- **43 cure promises:** `default-by-tenant-wi` promises nothing beyond § 704.17's notices; `early-termination` (10-day cure for any breach) not tagged.
- **44 terms turned into duties:** furnished appliances (§ 704.07(2)(a)4.; `appliances-included`); services agreed to (§ 704.07(2)(a)2.; `services-utilities-provided-ks-oh`); late fees only as the lease provides (ATCP § 134.09(8)(a)); promises to repair (ATCP § 134.07).
- **45 electronic notices:** ch. 137 read (§§ 137.12(2r)(b), 137.13, 137.16); § 704.10 items only; termination and default notices by § 704.21 methods (`electronic-delivery-wi`, `notices` tag).
- **46 lease as the notice:** the § 704.14 notice, the § 704.05(5)(bf) will-not-store notice, the ATCP § 134.04(1) identification and the ATCP § 134.06(1)(a) check-in notice can be lease paragraphs; the § 704.15 reminder, the § 196.643(3)(b) authorization and the NRP documents cannot.
- **47 knowing-use penalties:** void-lease consequence (§ 704.44) and DATCP double damages for pecuniary loss (§ 100.20(5); Koble ¶ 26); no WI clause contains a § 704.44 term (independent check).
- **48 separate documents:** NONSTANDARD RENTAL PROVISIONS (§ 704.28(2); ATCP §§ 134.06(3)(b), 134.09(2)(c)), NONSTANDARD RENTAL PROVISION (ATCP § 134.09(4)(b)), § 196.643(3)(b); no separate-writing rule for tenant chores (battery 113); builder question §10.
- **49 collection costs:** § 704.44(4m) bars landlord fees and costs; collection and notice-service fees not offered; `default-by-tenant` and `-ks-ne` not tagged.
- **50 'the lease controls':** each choice made on purpose: § 704.05(1) (entry by signed writing: `nrp-entry-wi`); § 704.25(4) (holdover by agreement: `holdover-wi` keeps the statute); § 704.19(2)(a)1. (other notice method: not used); ATCP § 134.09(8)(a) (late fee as provided: `late-fee`); § 704.28(2) (NRP withholding: `nrp-deposit-withholding-wi`); § 704.10 (electronic delivery: `electronic-delivery-wi`).
- **51 plain language and consumer contracts:** no plain-language lease statute (battery 111); Consumer Act per Koble; DATCP enforcement in `edu-consumer-protection-wi`.
- **52 exculpation:** § 704.44(6); ks-oh-ca and ks-oh variants tagged; `pet-policy-wi` without 'without liability'; indemnity excludes Landlord's negligence.
- **53 figures vs shared clauses:** `returned-payments` and `holdover` (ceiling-only), `early-termination`/`-ks` (scaled fee), `security-deposit-use` (closed list), `landlord-maintenance` (guest misuse), `smoking-policy` (others' damage) replaced; `late-fee`, `due-at-signing`, `landlords-access` (24 hours vs the 12-hour floor), `possession-delay`, `keys` checked with no Wisconsin figure in conflict.
- **54t tenant-caused damage:** answered provision by provision (`tenant-caused-damage-wi`, §6.1 item 8).
- **79 summaries re-read:** every row written section-open; qualifiers attached to their own sentences (for example § 704.17(1g)'s 'In this section', § 704.05(1)'s signed-writing condition, ATCP § 134.04(1)(c)'s owner-occupied exemption, § 101.149(2)(ap)'s exceptions); six independent-check rounds (§13). No row records no basis.

## Proposed SOP changes
1. Rule 21: when a row relies on a court of appeals decision known only from a statute annotation, search the supreme court's docket for a later opinion before relying on it; Wisconsin's annotations to §§ 421.301, 427.104 and 704.44 still describe Koble, 2024 WI App 26, which 2026 WI 19 reversed.
2. Rule 19: a battery cited for an absence must be able to match the absent thing's own vocabulary; Wisconsin's round-1 check found seven citations whose patterns could not have found what the row said was missing (rent due dates, delivery of possession, duty to notify, guest limits, parking reassignment, tenant termination rights, deposit-limit wording), each fixed with a new battery.
3. Rule 40: where safety statutes split by building size (Wisconsin's 1-2 unit 'dwelling' rules vs the 3-or-more-unit 'public building' rules for smoke and CO detectors), state both regimes in the education row; one checker's suggested fix also missed a sub-rule (§ 101.149(2)(ap)).
4. Rule 46: when a state's optional separate document must control over the lease (Wisconsin's NONSTANDARD RENTAL PROVISIONS), check the shared `addendum-precedence` for a conflicting control sentence and supersede it if needed.

## Proposed topic questions
1. `consumer-protection-act`: Has the state's highest court decided whether its consumer or debt-collection act governs residential leases, and do the statute annotations reflect the latest decision?
2. `alarm-duties`: Do the smoke and carbon monoxide detector duties differ between one- or two-unit dwellings and larger buildings, and who maintains which detectors?
3. `addendum-precedence`: Does the state require an optional separate document (such as nonstandard provisions) that must control over the lease?
4. `pet-policy`: Does a ban on seizing or holding tenant property stop a lease from letting the landlord remove or board a pet?
5. `tenant-caused-damage`: Does a void-term list limit tenant liability to damage by the tenant and the tenant's guests or invitees, so "occupant" wording needs checking?
6. `for-cause-eviction`: Does a good-cause rule apply to a subset of tenancies (such as manufactured home communities) even though ordinary rentals need no cause?

## Sync (Claude Code, 2026-10-03)

- **Merged** with `merge-delta.py --base c4d2e47` (the 3,013-row library the kickoff was staged from), after the circle-back syncs that ran meanwhile: 47 rows tagged (the WI tag and note merged onto the current rows; most had moved since the base) and 149 new; nothing refused. Library 3,175 rows with the two rule 27 rows below; WI 198 active (82 lease clauses, 116 education); no same-topic pairs; every other state's set unchanged.
- **Rule 27, two rows added at sync.** §18.2 answered `landlord-self-cure` ("Answered elsewhere") and `lease-completeness` (confirmed absent) without rows, while every state that has run rule 27 carries rows for the seven topics. Added, each RECOMMENDED education, with the controlling sections read at sync on docs.legis.wisconsin.gov: `edu-landlord-self-cure-wi` (present: Wis. Stat. § 704.07(3)(a) lets the landlord do the repair and requires the tenant to reimburse the reasonable cost, presumed reasonable; § 704.07(1); § 704.28(1)(a), (3)) and `edu-no-lease-completeness-rule-wi` (WI battery 110; ATCP §§ 134.03(1), 134.04(1); Wis. Stat. § 704.14).
- **Citations file:** `lease-clause-citations-WI.csv` built from each row's WI note segment (198 rows: 171 cited, 24 confirmed absent with their batteries, 3 generic). The note's currency line ("updated through 2025 Wis. Act 247") is excluded as a citation.
- **Legal watch:** WI config in `stateConfig.js` (statute sections only, query paired with "statutes"; 116 sections), federal lead checks, and four manual items (ATCP ch. 134 rule changes, the open Koble § 704.44(10) question, the 2026-27 delayed effective dates, SCR ch. 72). `legal-watch-wi.yml` committed held until after 2027-06-05; first run 2027-07-05, day 5 at 14:00 UTC.
- **Topic questions:** the six proposed above plus one for each new topic key (`promises-to-repair`, `utility-disconnection-notice-authorization`, `water-heater-temperature`).
- **Guards:** all pass. **Statute spot-check, 6 of 6, on docs.legis.wisconsin.gov:** § 704.14 (the notice in `dv-protections-notice-wi` matches word for word); § 704.17(2)(a) (5-day pay-or-vacate, 14-day notice after a repeat default within a year); § 704.27 (at least twice the rental value, apportioned daily); § 704.07(3)(a); § 704.28(4) (21 days); § 704.44(4m) (fees and costs void).
- **SOP 1.44:** all four proposals adopted (rules 19, 21, 40, 46); WI column added to the conformance table. The §10 flags are in the backlog.
- **Rule 62:** no shared text changed and no pending shared edit reaches a WI-tagged row (WI is not tagged on `default-by-tenant`, `returned-payments` or `surrender-end-of-term`), so nothing is queued for a WI vetting.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for WI. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any WI row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach WI's law; to be confirmed at WI's end-of-run consistency pass):
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
