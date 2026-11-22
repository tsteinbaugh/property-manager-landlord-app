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

## Federal row: HUD assistance-animal enforcement change (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: the assistance-animal clause stays as written (an animal a tenant needs for a disability, trained or not, is an accommodation, not a pet), and a new federal education row, `edu-assistance-animals-federal-enforcement`, is tagged here and in every jurisdiction but CO. It explains HUD's September 17, 2025 withdrawal of its assistance-animal guidance (91 Fed. Reg. 17291) and FHEO's May 22, 2026 memorandum limiting Fair Housing Act charges to trained animals, and what neither changes: the Act, 24 C.F.R. § 100.204, private suits, Section 504 and ADA complaints, and state law. No clause text changed.

## Federal rows: foreclosure tenants, screening-report notice, voucher leases (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12 (Ohio gaps product item P1): three federal education rows are tagged here and in every jurisdiction, each read from the official federal text: `edu-ptfa-foreclosure-tenants` (Protecting Tenants at Foreclosure Act, 12 U.S.C. § 5220 note), `edu-fcra-adverse-action-notice` (Fair Credit Reporting Act adverse-action notice, 15 U.S.C. § 1681m) and `edu-voucher-tenancy-addendum` (Housing Choice Voucher lease and termination rules, 24 C.F.R. §§ 982.308, 982.310). This state's existing rows on these laws stay; no clause text changed.

## WI topic gaps: end-of-run consistency pass (2026-11-15)

Pass date 2026-11-15 (work ran into 2026-11-16 UTC). SOP 2.13. Final delivery 2026-11-16 (cumulative; replaces all earlier batches). Topics answered so far: 181 of 181; new rows 184; tagged shared rows 14.


### §1 Sources, channel and currency

**Step A (done first).** `lease-clauses.csv` (from the attached `lease-clauses.csv.xz`): 73,353,243 bytes, SHA-256 `903498ba08f429ac6b3bdb3d024d52b586ad32b7fa8139d2afd3de5d699acf98`; 18,439 rows as staged (2026-11-14 18:53), 18,327 active, 203 active rows carrying WI (183 WI topics). `missing-topics-WI.md`: 181 topics, all unique, none already keyed to an active WI row. `lease-clause-decision-log-WI.md` (the 2026-10-03 record) and `lease-clause-sop.md` (2.13) attached. Old output copies deleted before work began: `lease-clauses-WI-delta.csv`, `lease-clause-decision-log-WI.md` in the outputs folder. The attached files were the only source of truth for existing rows.

**Wisconsin law: the attached corpus.** `corpus-WI-20261114`, six parts, unpacked into one folder; `python3 -I verify_wi.py corpus-WI-20261114`: ok=325, mismatches=0, missing=0. Built into 40,005 searchable units: Wisconsin Statutes 18,134 sections (`code/STATUTES.TXT`, every section in the corpus's `SECTIONS.tsv` found), Administrative Code 21,569 sections (`admin-code/ADMIN-CODE.TXT`, every section found; the PDF text's font artifacts, curly quotes printed as `X…Y`, possessives printed as `[s` and page-header lines, are cleaned and a de-hyphenated copy is searched too), the annotated Constitution (one unit), all 247 2025 Wisconsin Acts, SCR chapter 72 (6 rules, cited as a court rule) and rule petition 22-03 (5 files). The README's KNOWN GAPS (41 table-of-contents entries whose text sits in the preceding section's block; none in chs. 704 or 799 or ATCP 134) were handled by searching by section number. One corpus gap was found during the pass and is not in the README's KNOWN GAPS: the Administrative Code text holds no Department of Financial Institutions chapters (the corpus fetched the DFI agency index, `raw/admin/_idx_DFI.html`, listed in `manifest-not-shipped.jsonl`, but none of its chapters; the other 76 agencies' chapters are present). Rows that would turn on DFI rules (the collection-agency rules for `collection-fee`) say those rules were not read and state the cautious course. Case law and local ordinances are not held: cases appear only as statute annotations and are labelled 'as summarized in the annotation to Wis. Stat. § …; opinion not read'; Milwaukee, Madison and other local rules are flagged, not researched (rule 3).

**Currency (rules 16, 21, 24).** Statutes: every chapter is certified under Wis. Stat. § 35.18 as of November 4, 2026 and updated through 2025 Wis. Act 247, the last act of the 2025-26 session; delayed-effective changes print as NOTEs beside the current text (for ch. 799 small-claims amounts, 2025 Wis. Act 105 from January 1, 2027; rows state both figures with the date). Administrative Code: as served November 15, 2026 (latest history line Register October 2026 No. 850). Each relied-on section was opened whole with `show.py` (read log kept) and its history line read; an act's effective-date section was read before relying on it (Wis. Stat. § 991.11).

**Channel.** This workspace's shell has no route to docs.legis.wisconsin.gov, wicourts.gov, uscode.house.gov or ecfr.gov (the proxy refuses them), so Wisconsin law came only from the corpus; no cross-check against the live site was possible. Federal law (rule 12; approved, not asked) was read in the built-in browser on Taylor's computer: each section was fetched same-origin on uscode.house.gov (`/us/usc/t<title>/s<section>/`, "laws in effect through Public Law 119-142 (November 10, 2026)") or through the eCFR renderer API (current as of the fetch, 2026-11-16 UTC), its SHA-256 computed in the browser, the text saved to the workspace and the hash matched (all MATCH). No block or CAPTCHA was met. Saved: FEDERAL: 50 U.S.C. § 3911, 50 U.S.C. § 3931, 50 U.S.C. § 3951, 50 U.S.C. § 3955; 34 U.S.C. § 12491; 42 U.S.C. § 3602 to § 3607 and § 3617; 42 U.S.C. § 4852d; 15 U.S.C. § 9058, § 1681a, § 1681b, § 1681m, § 7001, § 7003, § 7006; 11 U.S.C. § 362, § 365, § 525; 9 U.S.C. § 2; 12 U.S.C. § 5220 (with the Protecting Tenants at Foreclosure Act note); 24 C.F.R. § 100.202, § 100.203, § 100.204, § 100.301, § 100.304, § 100.305, § 982.308, § 982.310, § 982.404, § 982.405, § 5.2005, § 5.2007, § 5.2009; 47 C.F.R. § 1.4000; 40 C.F.R. § 745.84, § 745.103, § 745.113; 16 C.F.R. § 682.3. 42 U.S.C. § 1437f was loaded but not saved (its excerpt failed) and is not relied on. The link to Taylor's computer later dropped, so no further federal text could be fetched after these.

**How rows were checked before delivery.** Every new row and tag segment passed `val.py` (fields, groups, rule types, basis, topic in the missing list, citation format: "Wis. Stat." before every section, FEDERAL: on every federal cite, no "s." form outside quotes, ranges only with `§§ … to …`) and the quote checker (`qc.py`: every single-quoted span is statute text and must be found, after whitespace and quote folding, inside the unit cited next to it; the row's own words are double-quoted). Batteries are cited from the log, never typed.

**Tool problems found during the pass.** The section reader (`show.py`) could not open the saved federal sections until it was fixed partway through; slices A and B read seven federal sections with their own readers instead (FEDERAL: 11 U.S.C. § 362, 11 U.S.C. § 365, 15 U.S.C. § 7003, 34 U.S.C. § 12491, 42 U.S.C. § 3603, 42 U.S.C. § 3607 and 24 C.F.R. § 982.310), and those reads were added to the read log afterwards. The fix applier's round-1 fault is described in §5.


### §2 Topics answered

One line each, in the order of `missing-topics-WI.md`: topic — row id — Present / Absent / tagged — main citation.

- `accessory-dwelling-unit` — `edu-accessory-dwelling-unit-wi` — Present — Wis. Stat. § 66.1014
- `accessory-dwelling-unit` — `accessory-dwelling-unit-term-co` — tagged — Wis. Admin. Code ATCP § 134.04(3)
- `actual-notice-method` — `edu-actual-notice-method-wi` — Present — Wis. Stat. § 704.21
- `adverse-proceeding-notice` — `edu-adverse-proceeding-notice-wi` — Absent — Wis. Stat. § 704.13
- `alarm-tampering-fee` — `edu-alarm-tampering-fee-wi` — Absent — Wis. Stat. § 101.149
- `alt-housing` — `edu-alt-housing-wi` — Absent — Wis. Stat. § 704.07
- `animal-care-access` — `edu-animal-care-access-wi` — Absent — Wis. Stat. § 173.23
- `appliances-excluded` — `edu-appliances-excluded-wi` — Absent — Wis. Stat. § 704.07
- `asbestos-hazards` — `edu-asbestos-hazards-wi` — Absent — Wis. Admin. Code DHS § 159.21
- `association-obligations-disclosure` — `edu-association-obligations-disclosure-wi` — Absent — Wis. Stat. § 182.01)
- `balcony-inspection` — `edu-balcony-inspection-wi` — Absent — Wis. Admin. Code SPS § 320.02
- `bed-bug-cooperation` — `pest-cooperation-wi` — Present — Wis. Stat. § 704.07(3)(a))
- `bed-bug-cooperation` — `edu-bed-bug-cooperation-wi` — Absent — Wis. Stat. § 704.07
- `binding-arbitration` — `edu-binding-arbitration-wi` — Present — Wis. Stat. ch. 788
- `carpet-cleaning` — `edu-carpet-cleaning-wi` — Present — Wis. Admin. Code ATCP § 134.06(3)(c)
- `casualty-and-mitigation-waivable` — `edu-casualty-and-mitigation-waivable-wi` — Absent — Wis. Stat. § 704.44(3m)
- `certificate-of-occupancy-disclosure` — `edu-certificate-of-occupancy-disclosure-wi` — Absent — Wis. Stat. § 66.0104
- `cold-weather-vacate-notice` — `cold-weather-vacate-notice-wy` — tagged — Wis. Admin. Code PSC § 113.0304
- `collection-fee` — `edu-collection-fee-wi` — Present — Wis. Stat. § 704.44(4m)
- `common-area-lighting` — `edu-common-area-lighting-wi` — Present — Wis. Admin. Code PSC § 113.0802
- `communal-land-lease-approval` — `edu-no-communal-land-lease-approval-wi` — Absent — Wis. Stat. § 20.540
- `confession-of-judgment` — `edu-confession-of-judgment-wi` — Present — Wis. Stat. § 704.44(5m)
- `confirmed-absences-habitability` — `edu-confirmed-absences-habitability-wi` — Present — Wis. Stat. § 704.07
- `confirmed-absences-misc` — `edu-confirmed-absences-misc-wi` — Present — Wis. Admin. Code ATCP § 134.09
- `confirmed-absences-outside-title` — `edu-confirmed-absences-outside-title-wi` — Absent — Wis. Stat. § 799.40
- `construction-liens` — `construction-liens-wi` — Present — Wis. Stat. § 779.01(3))
- `construction-liens` — `edu-construction-liens-wi` — Absent — Wis. Stat. § 779.01
- `defective-drywall-disclosure` — `edu-defective-drywall-disclosure-wi` — Absent — Wis. Admin. Code ATCP § 134.04
- `deposit-surrender-notice` — `edu-deposit-surrender-notice-wi` — Absent — Wis. Stat. § 704.28(4)(a)
- `designated-repairer` — `edu-designated-repairer-wi` — Absent — Wis. Admin. Code ATCP § 134.04(1)
- `disaster-displaced-guests` — `edu-disaster-displaced-guests-wi` — Absent — Wis. Stat. § 106.50
- `disaster-duties` — `edu-disaster-duties-wi` — Absent — Wis. Stat. § 704.07
- `double-letting` — `edu-double-letting-wi` — Absent — Wis. Admin. Code ATCP § 134.09
- `drug-free-housing-addendum` — `edu-drug-free-housing-addendum-wi` — Absent — Wis. Stat. § 704.17
- `dv-confidentiality` — `edu-dv-confidentiality-wi` — Absent — Wis. Stat. § 165.68
- `dv-deposit-timing` — `edu-dv-deposit-timing-wi` — Present — Wis. Stat. § 704.16
- `dv-lockchange` — `edu-dv-lockchange-wi` — Present — Wis. Stat. § 704.16
- `dv-protection-order-chapter-moved` — `edu-dv-protection-order-chapter-moved-wi` — Present — Wis. Stat. § 813.12
- `dv-qualifying-documents` — `edu-dv-qualifying-documents-wi` — Present — Wis. Stat. § 704.16
- `emergency-contact` — `edu-emergency-contact-wi` — Absent — Wis. Admin. Code PSC § 113.0301
- `emergency-contact` — `emergency-contact-co` — tagged — Wis. Stat. § 704.44
- `eminent-domain` — `eminent-domain-vi` — tagged — Wis. Stat. § 32.28
- `employee-screening` — `edu-employee-screening-wi` — Absent — Wis. Admin. Code DCF § 58.06
- `energy-data-release` — `edu-energy-data-release-wi` — Absent — Wis. Admin. Code PSC § 113.0501
- `energy-data-release` — `energy-data-release-wy` — tagged — Wis. Stat. § 196.137(2)
- `entity-landlord-court-representation` — `edu-entity-landlord-court-representation-wi` — Absent — Wis. Stat. § 799.06
- `environmental-event-termination` — `edu-environmental-event-termination-wi` — Absent — Wis. Stat. § 704.07
- `ev-charging-end-of-tenancy` — `edu-ev-charging-end-of-tenancy-wi` — Absent — Wis. Stat. § 16.9565
- `ev-charging-requirements` — `edu-ev-charging-requirements-wi` — Present — Wis. Stat. § 196.01
- `ev-charging-shared-area` — `edu-ev-charging-shared-area-wi` — Absent — Wis. Stat. § 196.01
- `eviction-penalty-clause-ban` — `edu-eviction-penalty-clause-ban-wi` — Absent — Wis. Stat. § 704.44(4m)
- `eviction-service-party` — `edu-eviction-service-party-wi` — Absent — Wis. Stat. § 799.12
- `exculpatory-clauses` — `edu-exculpatory-clauses-wi` — Present — Wis. Stat. § 704.44(6)
- `expedited-deposit-disposition` — `edu-no-expedited-deposit-disposition-wi` — Absent — Wis. Stat. § 704.10
- `family-child-care` — `edu-family-child-care-wi` — Absent — Wis. Stat. § 66.1017
- `farmland-hunting-rights` — `edu-farmland-hunting-rights-wi` — Absent — Wis. Stat. § 29.229
- `farmland-hunting-rights` — `farmland-sporting-rights-co` — tagged — Wis. Stat. § 943.13(1m)(a))
- `fee-unprovided-service` — `edu-fee-unprovided-service-wi` — Absent — Wis. Stat. § 136.001)
- `fire-code-standard` — `edu-fire-code-standard-wi` — Present — Wis. Stat. § 101.01
- `foreclosure-disclosure` — `foreclosure-disclosure-nv` — tagged — Wis. Admin. Code ATCP § 134.09(9)(a)
- `forfeiture-redemption` — `edu-forfeiture-redemption-wi` — Absent — Wis. Stat. § 704.17
- `frozen-standard-incorporation` — `edu-frozen-standard-incorporation-wi` — Present — Wis. Admin. Code SPS § 314.001
- `furnishings-included` — `furnishings-included-wi` — Present — Wis. Stat. § 704.01(3)
- `good-cause-notice` — `edu-good-cause-notice-wi` — Absent — Wis. Stat. § 704.19
- `government-fee-reimbursement` — `edu-government-fee-reimbursement-wi` — Present — Wis. Stat. § 66.0104(2)(e)2
- `governmental-fines` — `tenant-caused-fines-wi` — Present — Wis. Stat. § 704.44(7)(b)
- `governmental-fines` — `edu-governmental-fines-wi` — Absent — Wis. Stat. § 174.02)
- `guarantor-renewal` — `guarantor-renewal-wi` — Present — Wis. Stat. § 241.02(1)(b))
- `guarantor-renewal` — `edu-guarantor-renewal-wi` — Absent — Wis. Stat. § 241.02
- `guest-rights` — `edu-guest-rights-wi` — Absent — Wis. Stat. § 704.14
- `habitability-materiality` — `edu-habitability-materiality-wi` — Present — Wis. Stat. § 704.07(4)
- `habitability-modifiable` — `edu-habitability-modifiable-wi` — Present — Wis. Stat. § 704.07(1)
- `habitability-presumption` — `edu-no-habitability-presumption-wi` — Absent — Wis. Stat. § 66.0413
- `habitability-statement` — `edu-no-habitability-statement-wi` — Absent — Wis. Stat. § 704.44(8)
- `hazardous-contamination-disclosure` — `continuing-obligation-wi` — Present — Wis. Admin. Code NR § 727.05
- `hazardous-contamination-disclosure` — `edu-hazardous-contamination-disclosure-wi` — Present — Wis. Admin. Code NR § 727.05
- `health-district-rental-rules` — `edu-health-district-rental-rules-wi` — Absent — Wis. Stat. § 254.59
- `home-business` — `edu-home-business-wi` — Absent — Wis. Stat. § 101.01
- `infirmity-termination` — `edu-infirmity-termination-wi` — Absent — Wis. Stat. § 704.165
- `informal-dispute-resolution` — `informal-dispute-resolution-or` — tagged — Wis. Stat. § 802.12
- `inspection-notice-penalty` — `edu-inspection-notice-penalty-wi` — Present — Wis. Admin. Code ATCP § 134.06(1)(a)
- `key-control-policy` — `edu-key-control-policy-wi` — Absent — Wis. Admin. Code ATCP § 134.09
- `knowing-use-penalty` — `edu-knowing-use-penalty-wi` — Absent — Wis. Stat. § 704.44
- `landlord-breach-remedy` — `edu-landlord-breach-remedy-wi` — Present — Wis. Stat. § 704.07(4)
- `landlord-liability-insurance` — `edu-no-landlord-insurance-mandate-wi` — Absent — Wis. Stat. § 344.51
- `landlord-remedies-termination` — `edu-landlord-remedies-termination-wi` — Present — Wis. Stat. § 799.01
- `late-fee-limit` — `edu-late-fee-limit-wi` — Absent — Wis. Stat. § 704.17
- `law-enforcement-cooperation` — `edu-law-enforcement-cooperation-wi` — Absent — Wis. Stat. § 704.17
- `lead-state-notices` — `edu-lead-state-notices-wi` — Present — Wis. Admin. Code DHS § 163.42
- `lease-notice-initial-requirement` — `edu-lease-notice-initial-requirement-wi` — Absent — Wis. Stat. § 704.28
- `lease-registration` — `edu-lease-registration-wi` — Absent — Wis. Stat. § 706.001
- `lease-term-limitation` — `edu-lease-term-limitation-wi` — Present — Wis. Stat. § 704.03
- `lease-type-parity` — `edu-no-lease-type-parity-wi` — Absent — Wis. Stat. § 631.36
- `lease-type-size` — `edu-no-lease-type-size-wi` — Absent — Wis. Stat. § 704.90
- `limitation-of-actions` — `edu-limitation-of-actions-wi` — Present — Wis. Stat. § 893.43
- `liquidated-damages` — `edu-liquidated-damages-wi` — Absent — Wis. Admin. Code ATCP § 134.09(8)
- `lockout-for-rent-delinquency` — `edu-no-lockout-for-rent-wi` — Present — Wis. Admin. Code ATCP § 134.09(7)
- `maintenance-duty-shift` — `edu-maintenance-duty-shift-wi` — Present — Wis. Stat. § 704.07(1)
- `meter-conservation-charge` — `electric-account-charge-notice-wi` — Present — Wis. Stat. § 185.995
- `meter-conservation-charge` — `edu-meter-conservation-charge-wi` — Absent — Wis. Stat. § 185.995
- `minor-tenant-filing` — `edu-minor-tenant-filing-wi` — Absent — Wis. Stat. § 990.01
- `mold-disclosure` — `edu-mold-disclosure-wi` — Absent — Wis. Admin. Code ATCP § 134.04
- `nonrefundable-deposit-separate-notice` — `edu-no-nonrefundable-separate-notice-wi` — Absent — Wis. Stat. § 71.07)
- `notice-service-fee` — `edu-notice-service-fee-wi` — Present — Wis. Stat. § 704.44(4m)
- `notice-to-quit-waiver` — `edu-notice-to-quit-waiver-wi` — Present — Wis. Stat. § 704.17(5)(a)
- `notice-to-vacate-additional-terms` — `edu-notice-to-vacate-additional-terms-wi` — Absent — Wis. Stat. § 704.19
- `nuisance` — `edu-nuisance-wi` — Present — Wis. Stat. § 823.015
- `nuisance` — `edu-nuisance-receivership-wi` — Present — Wis. Stat. § 823.23
- `optional-lease-terms` — `edu-optional-lease-terms-wi` — Absent — Wis. Stat. § 709.02
- `ordnance-demolition-meter-disclosures` — `edu-ordnance-demolition-meter-disclosures-wi` — Absent — Wis. Admin. Code ATCP § 134.09
- `other-landlord-facilities` — `edu-other-landlord-facilities-wi` — Absent — Wis. Stat. § 704.07
- `owner-move-in-reservation` — `owner-occupancy-termination-ar` — tagged — Wis. Admin. Code ATCP § 134.04(1)(c)
- `parking-rules-notice` — `edu-parking-rules-notice-wi` — Absent — Wis. Stat. § 349.06)
- `part5-nonwaivable` — `edu-part5-nonwaivable-wi` — Absent — Wis. Stat. § 704.05(1)
- `pest-control-notice` — `edu-pest-control-notice-wi` — Present — Wis. Admin. Code ATCP § 29.55
- `pet-eviction-fact-sheet` — `edu-no-pet-eviction-fact-sheet-wi` — Absent — Wis. Stat. § 106.50
- `plain-language` — `edu-no-plain-language-rule-wi` — Present — Wis. Stat. § 100.18
- `plain-language-consumer-statement` — `edu-no-plain-language-statement-wi` — Absent — Wis. Stat. § 403.106
- `political-access` — `edu-political-access-wi` — Absent — Wis. Stat. § 12.04
- `portable-cooling-device` — `portable-cooling-device-wi` — Present — Wis. Stat. § 704.05(3))
- `portable-cooling-device` — `edu-portable-cooling-device-wi` — Absent — Wis. Stat. § 704.05
- `portfolio-thresholds` — `edu-portfolio-thresholds-wi` — Absent — Wis. Stat. § 106.50
- `possession-bond` — `edu-possession-bond-wi` — Absent — Wis. Stat. § 704.44
- `private-well-testing` — `edu-private-well-testing-wi` — Absent — Wis. Admin. Code NR § 809.04
- `prohibited-acts-renter` — `edu-prohibited-acts-renter-wi` — Absent — Wis. Stat. § 704.05
- `prop65-rental-warning` — `edu-prop65-rental-warning-wi` — Absent — Wis. Admin. Code ATCP § 134.04
- `property-tax-rent-disclosure` — `edu-property-tax-rent-disclosure-wi` — Present — Wis. Stat. § 71.52(8)
- `purpose-limitation` — `edu-purpose-limitation-wi` — Present — Wis. Stat. § 823.16
- `recycling-notice` — `edu-recycling-notice-wi` — Present — Wis. Stat. § 287.11
- `redemption` — `edu-redemption-wi` — Absent — Wis. Stat. § 704.17
- `religious-cultural-display` — `edu-religious-cultural-display-wi` — Absent — Wis. Stat. § 704.05
- `rent-demand-bar` — `edu-rent-demand-bar-wi` — Absent — Wis. Admin. Code ATCP § 134.09
- `rent-escalation` — `edu-rent-escalation-wi` — Present — Wis. Stat. § 62.15)
- `rent-escalation` — `rent-escalation-la` — tagged — Wis. Stat. § 704.45(1))
- `rent-escalation` — `rent-increase-midterm-ky` — tagged — Wis. Stat. § 704.45(1))
- `rent-installments` — `edu-rent-installments-wi` — Present — Wis. Stat. § 704.01(2)
- `rent-installments` — `rent-installments-or` — tagged — Wis. Admin. Code ATCP § 134.09(8)(a))
- `rent-into-court-counterclaim` — `edu-rent-into-court-counterclaim-wi` — Present — Wis. Stat. § 799.43
- `rent-receipt-anti-waiver` — `edu-rent-receipt-anti-waiver-wi` — Absent — Wis. Stat. § 708.11
- `rent-reporting` — `edu-no-rent-reporting-rule-wi` — Absent — Wis. Stat. § 427.104
- `repair-cost-termination` — `edu-no-repair-cost-termination-wi` — Absent — Wis. Stat. § 218.0122)
- `repair-escrow-exemption-notice` — `edu-no-repair-escrow-exemption-wi` — Absent — Wis. Stat. § 254.30
- `repair-notice` — `edu-repair-notice-wi` — Absent — Wis. Stat. § 33.45
- `required-fees` — `edu-required-fees-wi` — Absent — Wis. Admin. Code DCF § 56.23)
- `required-fees` — `fees-and-charges-vi` — tagged — Wis. Admin. Code ATCP § 134.09(9)(a)2
- `rights-responsibilities-guide` — `edu-rights-guide-wi` — Absent — Wis. Stat. § 66.0104
- `sanitary-code-variance` — `edu-sanitary-code-variance-wi` — Absent — Wis. Admin. Code SPS § 320.19
- `seasonal-tenancy` — `edu-seasonal-tenancy-wi` — Absent — Wis. Stat. § 704.01
- `security-deposit-nonwaiver` — `edu-security-deposit-nonwaiver-wi` — Absent — Wis. Stat. § 704.28(1)
- `security-deposit-standards` — `edu-no-security-deposit-standards-wi` — Absent — Wis. Stat. § 40.02)
- `senior-housing-work-card` — `edu-no-senior-housing-work-card-wi` — Absent — Wis. Stat. § 103.70
- `service-animal-denial-penalty` — `edu-service-animal-denial-penalty-wi` — Present — Wis. Stat. § 106.50
- `sex-offender-occupancy` — `edu-sex-offender-occupancy-wi` — Absent — Wis. Stat. § 704.50
- `sfr-occupancy-disclosure` — `edu-sfr-occupancy-disclosure-wi` — Absent — Wis. Stat. § 704.03
- `shoreline-access-disclosure` — `edu-shoreline-access-disclosure-wi` — Absent — Wis. Stat. § 30.134
- `showing-notice-waiver` — `edu-showing-notice-waiver-wi` — Present — Wis. Admin. Code ATCP § 134.09(2)(a)2
- `single-family-zone-lease-limit` — `edu-single-family-zone-lease-limit-wi` — Absent — Wis. Stat. § 66.1014
- `smart-access` — `edu-smart-access-wi` — Absent — Wis. Admin. Code ATCP § 134.09
- `social-security-defense` — `edu-social-security-defense-wi` — Absent — Wis. Stat. § 799.40
- `special-district-representation` — `edu-special-district-representation-wi` — Absent — Wis. Admin. Code ATCP § 134.09
- `sprinkler-disclosure` — `edu-sprinkler-disclosure-wi` — Absent — Wis. Admin. Code SPS § 362.0903
- `statutory-caps` — `edu-statutory-caps-wi` — Present — Wis. Stat. § 704.085(1)(a)
- `steam-radiator-covers` — `edu-steam-radiator-covers-wi` — Absent — Wis. Stat. § 704.07
- `stove-refrigerator` — `edu-stove-refrigerator-wi` — Absent — Wis. Stat. § 704.07
- `student-housing` — `edu-student-housing-wi` — Absent — Wis. Admin. Code ATCP § 134.01
- `subsidized-inspection-refusal` — `edu-subsidized-inspection-refusal-wi` — Absent — Wis. Stat. § 106.50
- `subsidy-habitability-proration` — `edu-no-subsidy-proration-rule-wi` — Absent — Wis. Stat. § 20.540
- `subsidy-late-fee` — `edu-subsidy-late-fee-wi` — Absent — Wis. Admin. Code NR § 146.04
- `substandard-property-receivership` — `edu-substandard-property-receivership-wi` — Present — Wis. Stat. § 254.595
- `tax-escalation` — `edu-tax-escalation-wi` — Absent — Wis. Stat. § 71.07
- `tax-escalation` — `tax-insurance-escalation-la` — tagged — Wis. Admin. Code ATCP § 134.09(9)(a)3
- `tenant-bankruptcy` — `edu-tenant-bankruptcy-wi` — Absent — FEDERAL: 11 U.S.C. § 362
- `tenant-confidential-information` — `edu-tenant-confidential-information-wi` — Present — Wis. Admin. Code DHS § 89.11
- `tenant-employee-housing` — `edu-tenant-employee-housing-wi` — Absent — Wis. Stat. § 704.01
- `tenant-insurance-claims` — `edu-tenant-insurance-claims-wi` — Absent — Wis. Stat. § 704.07
- `tenant-portal` — `edu-tenant-portal-wi` — Absent — Wis. Stat. § 704.10
- `tenant-records` — `edu-tenant-records-wi` — Absent — Wis. Stat. § 895.489
- `tenant-repair-agreement` — `edu-tenant-repair-agreement-wi` — Present — Wis. Stat. § 704.44(6)
- `tenant-right-to-organize` — `edu-tenant-right-to-organize-wi` — Absent — Wis. Admin. Code ATCP § 134.09
- `tenant-rights-statement` — `edu-tenant-rights-statement-wi` — Absent — Wis. Stat. § 704.14
- `term-change-notice` — `edu-term-change-notice-wi` — Absent — Wis. Stat. § 704.19
- `tpa-exemption-notice` — `edu-no-tpa-exemption-notice-wi` — Present — Wis. Stat. § 66.1015
- `tpa-notice` — `edu-no-tpa-notice-wi` — Present — Wis. Stat. § 703.08
- `tpa-sunset` — `edu-no-tpa-sunset-wi` — Present — Wis. Stat. § 321.62)
- `translation-duty` — `edu-no-translation-duty-wi` — Absent — Wis. Stat. § 100.313
- `trespass-notice` — `edu-trespass-notice-wi` — Present — Wis. Stat. § 943.13
- `truth-in-renting` — `edu-no-truth-in-renting-wi` — Present — Wis. Stat. § 32.28
- `unbundled-parking` — `edu-no-unbundled-parking-rule-wi` — Absent — Wis. Stat. § 100.207
- `unconscionability` — `edu-unconscionability-wi` — Present — Wis. Stat. § 402.302(1)
- `usufructuary-lessor` — `edu-usufructuary-lessor-wi` — Present — Wis. Stat. § 704.40
- `utility-apportionment` — `edu-utility-apportionment-wi` — Present — Wis. Admin. Code ATCP § 134.04
- `utility-deposit-return` — `edu-utility-deposit-return-wi` — Absent — Wis. Admin. Code ATCP § 134.02
- `utility-disclosure-attachment` — `edu-utility-disclosure-attachment-wi` — Present — Wis. Admin. Code ATCP § 134.04
- `utility-interruption-submeter` — `edu-utility-interruption-submeter-wi` — Absent — Wis. Admin. Code PSC § 113.0803
- `utility-shutoff-statute` — `edu-utility-shutoff-statute-wi` — Present — Wis. Admin. Code PSC § 113.0301
- `utility-transfer` — `edu-utility-transfer-wi` — Absent — Wis. Stat. § 196.643
- `veterans-incentive` — `edu-no-veterans-incentive-wi` — Absent — Wis. Stat. § 59.52)
- `written-notice-required` — `edu-written-notice-required-wi` — Present — Wis. Stat. § 704.17

Not yet answered in this batch (0): none


### §3 Batteries (rule 19)

Every absence row cites a battery by id; the citation in the row is generated from the log by `bat.py cite`. Each battery runs over the held Wisconsin law (statutes, Administrative Code, Constitution, 2025 Acts, SCR ch. 72 unless the scope says otherwise), matching on whitespace-collapsed, quote-folded text and on a de-hyphenated copy; two-word terms run in both orders inside a 1,200-character window and as a section-wide AND; plain terms get a heading-only screen and an inflection probe; the control term `zqxjvwpl` runs every time; every term has a known positive (a real unit with the quoted words, or a synthetic sentence), and a battery whose positive fails is recorded as failed and superseded by a rerun under a new id.

Re-run before final delivery (`rerun2.py`, 2026-11-16, after the independent check): every term of all 178 logged batteries re-executed over the same corpus build (unit-set hashes unchanged; AND and near terms evaluated component by component, which gives the same hits as the logged patterns); 178 identical to the log; 0 differing.


#### WIG-A-001 — knowing or deliberate use of prohibited lease provisions (penalty)

- Run 2026-11-16T06:01:35+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: knowing-use-penalty: whether any Wisconsin law adds a penalty for knowingly or deliberately using a lease that contains a prohibited term (URLTA 1.403(b) analogue); D is the general criminal penalty for disobeying a 100.20 order.
- Cited by: `edu-knowing-use-penalty-wi`
- Term A.main `\bprovisions? known (?:by (?:him|her|it|the landlord) )?to be (?:prohibited|void|unenforceable|unlawful)`: 0 units
- Term B.near `(?:\b(?:deliberately|knowingly|willfully|wilfully|intentionally) (?:us|includ|insert|enforc)\w*)[\s\S]{0,1200}(?:\b(?:rental agreements?|lea…`: 7 units: 19.45, 19.59, 943.20, 943.81, DHS 13.03, ER-MRS 24.04, UWS 8.03
- Term B.and `\A(?=[\s\S]*?(?:\b(?:deliberately|knowingly|willfully|wilfully|intentionally) (?:us|includ|insert|enforc)\w*))(?=[\s\S]*?(?:\b(?:rental agre…`: 10 units: 19.45, 19.59, 440.52, 939.48, 943.20, 943.81, DHS 13.03, ER-MRS 24.04, UWS 18.11, UWS 8.03
- Term C.near `(?:\b(?:prohibited|void|unlawful|illegal|unenforceable) (?:lease |rental agreement )?(?:provisions?|terms?|clauses?)\b)[\s\S]{0,1200}(?:\b(?…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:prohibited|void|unlawful|illegal|unenforceable) (?:lease |rental agreement )?(?:provisions?|terms?|clauses?)\b))(?=[\s\…`: 3 units: 134.49, 218.0116, 971.08
- Term D.main `\bintentionally refuses, neglects or fails to obey\b`: 1 units: 100.26
- Positive A: synthetic ('If a landlord deliberately uses a rental agreement containing provisions known by the landlord to be prohibited, the tenant may recover actual damages.') passed
- Positive B: synthetic ('A landlord who knowingly includes in a rental agreement a provision prohibited under s. 704.44 shall forfeit not more than $500.') passed
- Positive C: synthetic ('Any landlord who enforces a prohibited lease provision is subject to a penalty of twice the tenant's damages.') passed
- Positive D: 100.26 ('intentionally refuses, neglects or fails to obey any regulation or order made or issued under s. 100.19 or 100.20') passed

#### WIG-A-002 — general non-waiver of tenant rights; sale-leaseback non-waiver

- Run 2026-11-16T06:04:34+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; superseded by WIG-A-015; rerun identical.
- Question: part5-nonwaivable: whether Wisconsin has a general rule that tenant rights cannot be waived (beyond 704.07(1), 704.17(5), 704.44), and the Missouri-type sale-leaseback non-waiver rule.
- Cited by: `edu-part5-nonwaivable-wi`
- Term A.main `\bsale[- ](?:and[- ])?lease[- ]?back\b|\blease[- ]?backs?\b`: 3 units: 292.01, Adm 92.68, Tax 11.29
- Term B.near `(?:\b(?:may not|cannot|shall not) (?:be )?waive[ds]?\b|\bnon-?waivable\b|\bagreement to waive\b|\bwaiver of (?:any )?(?:rights?|protections?…`: 8 units: 101.025, 107.25, 231.20, 704.07, 939.03, Adm 92.12, DHS 89.27, DHS 89.28
- Term B.and `\A(?=[\s\S]*?(?:\b(?:may not|cannot|shall not) (?:be )?waive[ds]?\b|\bnon-?waivable\b|\bagreement to waive\b|\bwaiver of (?:any )?(?:rights?…`: 15 units: 101.025, 107.25, 196.52, 231.20, 343.31, 704.07, 893.80, 939.03, Adm 92.12, DHS 89.27, DHS 89.28, PSC 113.0406 …
- Term C.near `(?:\bsells? (?:the |his |her |its |a )?(?:home|dwelling|residence|house|property)\b)[\s\S]{0,1200}(?:\b(?:rents?|leases?) (?:it|the (?:home|…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\bsells? (?:the |his |her |its |a )?(?:home|dwelling|residence|house|property)\b))(?=[\s\S]*?(?:\b(?:rents?|leases?) (?:it|t…`: 0 units
- Positive A: synthetic ('In a sale-leaseback transaction the seller may not waive any right under this section.') passed
- Positive B: 704.07 ('An agreement to waive the requirements of this section in a residential tenancy, including an agreement in a rental agreement, is void') passed
- Positive C: synthetic ('A homeowner who sells the home to an investor and rents it back from the investor may not waive these protections.') passed

#### WIG-A-003 — presumptions about habitability, repair delay or retaliation

- Run 2026-11-16T06:07:22+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: habitability-presumption: whether Wisconsin creates any presumption that a unit is uninhabitable, that a repair delay is bad faith, or that an action after a complaint is retaliatory.
- Cited by: `edu-no-habitability-presumption-wi`, `edu-confirmed-absences-habitability-wi`
- Term A.main `\bpresum\w* (?:to be |that the (?:premises|dwelling|unit) (?:is|are) )?(?:uninhabitab\w*|untenantab\w*|unfit for (?:human )?habitation)|\bpr…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bpresum\w*))(?=[\s\S]*?(?:\b(?:untenantab\w*|uninhabitab\w*|habitab\w*|unfit for (?:human )?habitation|housing codes?)\b))(…`: 3 units: 66.0413, 704.07, ATCP 134.09
- Term C.near `(?:\bpresum\w*)[\s\S]{0,1200}(?:\b(?:retaliat\w*|fails? to (?:make )?repairs?|failure to (?:make )?repairs?|bad faith)\b)|(?:\b(?:retaliat\w…`: 11 units: 46.90, 50.06, 55.043, 102.18, 230.85, 631.83, 973.01, 995.50, DHS 127.07, Wis. Const., 2025 Wis. Act 115
- Term C.and `\A(?=[\s\S]*?(?:\bpresum\w*))(?=[\s\S]*?(?:\b(?:retaliat\w*|fails? to (?:make )?repairs?|failure to (?:make )?repairs?|bad faith)\b))`: 25 units: 46.90, 50.06, 51.20, 55.043, 102.17, 102.18, 134.90, 135.02, 146.37, 218.0116, 218.0133, 230.85 …
- Positive A: synthetic ('A dwelling unit with an uncorrected housing code violation is presumed to be uninhabitable.') passed
- Positive B: synthetic ('If the landlord fails to repair within 14 days, it is presumed that the premises are not habitable and that the tenant may withhold rent.') passed
- Positive C: synthetic ('An eviction action begun within 6 months after a tenant's complaint is presumed to be retaliatory.') passed

#### WIG-A-004 — lease must state habitability / fitness for habitation

- Run 2026-11-16T06:09:25+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: habitability-statement: whether the lease itself must state that the landlord will deliver or keep the unit fit for habitation (Maryland-type rule).
- Cited by: `edu-no-habitability-statement-wi`
- Term A.main `\bfit (?:and|or) habitable\b|\bcondition permitting habitation\b|\bwarranty of habitability\b|\bcovenant of habitability\b`: 3 units: 704.07, 704.44, ATCP 134.08
- Term B.and `\A(?=[\s\S]*?(?:\b(?:rental agreements?|leases?) (?:shall|must) (?:state|contain|include|provide|specify|set forth)\b))(?=[\s\S]*?(?:\b(?:ha…`: 2 units: 13.48, 45.72
- Term C.near `(?:\b(?:written|in writing|the lease|rental agreement)\b)[\s\S]{0,1200}(?:\b(?:safe and (?:sanitary|decent|clean)|decent, safe|good repair a…`: 10 units: 32.25, 66.1331, 66.1333, 120.12, 893.38, Adm 92.01, Adm 92.68, DHS 132.72, DHS 89.23, NR 845.06
- Term C.and `\A(?=[\s\S]*?(?:\b(?:written|in writing|the lease|rental agreement)\b))(?=[\s\S]*?(?:\b(?:safe and (?:sanitary|decent|clean)|decent, safe|go…`: 20 units: 32.19, 32.25, 66.0413, 66.1201, 66.1331, 66.1333, 120.12, 234.01, 234.661, 893.38, ATCP 65.24, ATCP 78.32 …
- Positive A: 704.44 ('deliver the premises in a fit or habitable condition') passed
- Positive B: synthetic ('Each rental agreement shall state that the landlord will deliver the dwelling unit in a condition fit for habitation and will make repairs required by the tenan') passed
- Positive C: synthetic ('The lease must say in writing that the landlord will keep the unit safe and sanitary.') passed

#### WIG-A-005 — statutory immunity or exculpation for landlords

- Run 2026-11-16T06:12:29+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: exculpatory-clauses: statutes giving a landlord immunity (property removal, writ execution, reliance on police notices) besides the lease-term bars in 704.44(6), (7).
- Cited by: `edu-exculpatory-clauses-wi`
- Term A.main `\b(?:landlord|lessor)s?(?: or (?:his or her |its |the landlord’s |the landlord's )?agents?)? (?:is|are|shall be) (?:immune|not liable|not ci…`: 6 units: 344.51, 704.16, 704.44, 704.50, 995.55, ATCP 134.08
- Term B.near `(?:\bimmun\w*|\bnot (?:be )?(?:civilly )?liable\b|\bno (?:civil )?liability\b|\bexempt from (?:civil )?liability\b)[\s\S]{0,1200}(?:\b(?:lan…`: 37 units: 27.014, 32.10, 48.52, 101.11, 101.647, 102.03, 102.29, 119.60, 182.24, 190.06, 344.51, 346.175 …
- Term B.and `\A(?=[\s\S]*?(?:\bimmun\w*|\bnot (?:be )?(?:civilly )?liable\b|\bno (?:civil )?liability\b|\bexempt from (?:civil )?liability\b))(?=[\s\S]*?…`: 65 units: 13.48, 23.33, 23.335, 27.014, 29.885, 32.05, 32.10, 32.19, 48.52, 48.627, 66.0304, 66.0823 …
- Term C.near `(?:\bnot responsible for\b|\bhold (?:the )?(?:landlord|lessor|owner) harmless\b|\bindemnif\w*)[\s\S]{0,1200}(?:\b(?:landlords?|lessors?|tena…`: 5 units: 182.0175, 214.04, 407.504, 616.50, 632.32
- Term C.and `\A(?=[\s\S]*?(?:\bnot responsible for\b|\bhold (?:the )?(?:landlord|lessor|owner) harmless\b|\bindemnif\w*))(?=[\s\S]*?(?:\b(?:landlords?|le…`: 21 units: 66.0217, 77.29, 102.03, 102.29, 182.0175, 214.04, 321.62, 407.504, 616.50, 632.32, 632.977, 701.0816 …
- Positive A: synthetic ('A landlord is not liable for any loss of property removed under this section.') passed
- Positive B: 704.50 ('the landlord or agent is immune from liability for any act or omission related to the disclosure of information') passed
- Positive C: synthetic ('The tenant shall indemnify the landlord for any claim arising from the tenant's use of the premises.') passed

#### WIG-A-006 — liquidated damages and contract penalties (general and lease)

- Run 2026-11-16T06:15:56+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; superseded by WIG-A-007; rerun identical.
- Question: liquidated-damages, eviction-penalty-clause-ban, alarm-tampering-fee, notice-service-fee: whether any Wisconsin statute or rule voids or permits agreed damages or contract penalties for a lease breach (ND 9-08-03/04 analogue).
- Cited by: `edu-eviction-penalty-clause-ban-wi`, `edu-liquidated-damages-wi`
- Term A.main `\bliquidated damages\b`: 36 units: 30.32, 62.15, 66.0901, 84.063, 100.23, 103.29, 103.34, 103.465, 103.82, 105.01, 178.0105, 179.0105 …
- Term B.near `(?:\b(?:liquidated|agreed|stipulated|predetermined) damages\b|\bpenalty (?:clause|provision|term)s?\b|\bpenalt(?:y|ies) (?:for|upon|on) (?:a…`: 8 units: 27.01, 30.32, 229.461, 411.103, 854.03, NR 162.04, NR 162.23, NR 166.07
- Term B.and `\A(?=[\s\S]*?(?:\b(?:liquidated|agreed|stipulated|predetermined) damages\b|\bpenalty (?:clause|provision|term)s?\b|\bpenalt(?:y|ies) (?:for|…`: 13 units: 23.33, 23.335, 27.01, 30.32, 66.0901, 200.47, 229.461, 411.103, 854.03, NR 13.04, NR 162.04, NR 162.23 …
- Term C.near `(?:\bdetermined in anticipation\b|\bfixed in advance\b|\bagreed (?:amount|sum) (?:of|as) damages\b|\bstipulated damages\b|\bpenalties impose…`: 1 units: 402.718
- Term C.and `\A(?=[\s\S]*?(?:\bdetermined in anticipation\b|\bfixed in advance\b|\bagreed (?:amount|sum) (?:of|as) damages\b|\bstipulated damages\b|\bpen…`: 1 units: 402.718
- Positive A: 402.718 ('Damages for breach by either party may be liquidated in the agreement') passed
- Positive B: synthetic ('A rental agreement may not impose a penalty on a tenant for breach of the lease; liquidated damages are void unless reasonable.') passed
- Positive C: synthetic ('Every contract by which the amount of damages for a breach is determined in anticipation thereof is void.') passed

#### WIG-A-007 — liquidated damages and contract penalties (general and lease)

- Run 2026-11-16T06:17:01+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-A-006 (term A missed the inflected form 'may be liquidated' / 'Liquidation of damages' (Wis. Stat. 411.504); widened); rerun identical.
- Question: liquidated-damages, eviction-penalty-clause-ban, alarm-tampering-fee, notice-service-fee: whether any Wisconsin statute or rule voids or permits agreed damages or contract penalties for a lease breach (ND 9-08-03/04 analogue).
- Cited by: `edu-eviction-penalty-clause-ban-wi`, `edu-eviction-penalty-clause-ban-wi`, `edu-liquidated-damages-wi`
- Term A.main `\bliquidat(?:ed|ion of) damages\b|\bmay be liquidated\b`: 40 units: 30.32, 62.15, 66.0901, 66.1331, 84.063, 100.23, 103.29, 103.34, 103.465, 103.82, 105.01, 178.0105 …
- Term B.near `(?:\b(?:liquidated|agreed|stipulated|predetermined) damages\b|\bpenalty (?:clause|provision|term)s?\b|\bpenalt(?:y|ies) (?:for|upon|on) (?:a…`: 8 units: 27.01, 30.32, 229.461, 411.103, 854.03, NR 162.04, NR 162.23, NR 166.07
- Term B.and `\A(?=[\s\S]*?(?:\b(?:liquidated|agreed|stipulated|predetermined) damages\b|\bpenalty (?:clause|provision|term)s?\b|\bpenalt(?:y|ies) (?:for|…`: 13 units: 23.33, 23.335, 27.01, 30.32, 66.0901, 200.47, 229.461, 411.103, 854.03, NR 13.04, NR 162.04, NR 162.23 …
- Term C.near `(?:\bdetermined in anticipation\b|\bfixed in advance\b|\bagreed (?:amount|sum) (?:of|as) damages\b|\bstipulated damages\b|\bpenalties impose…`: 1 units: 402.718
- Term C.and `\A(?=[\s\S]*?(?:\bdetermined in anticipation\b|\bfixed in advance\b|\bagreed (?:amount|sum) (?:of|as) damages\b|\bstipulated damages\b|\bpen…`: 1 units: 402.718
- Positive A: 402.718 ('Damages for breach by either party may be liquidated in the agreement') passed
- Positive B: synthetic ('A rental agreement may not impose a penalty on a tenant for breach of the lease; liquidated damages are void unless reasonable.') passed
- Positive C: synthetic ('Every contract by which the amount of damages for a breach is determined in anticipation thereof is void.') passed
- Positive A: 411.504 ('may be liquidated in the lease agreement but only at an amount or by a formula that is reasonable') passed

#### WIG-A-008 — confession of judgment / cognovit / warrant of attorney

- Run 2026-11-16T06:18:41+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: confession-of-judgment: every Wisconsin rule on confessed judgments, including any general bar (TN/CA question) and any court-rule procedure.
- Cited by: `edu-confession-of-judgment-wi`
- Term A.main `\bconfess(?:es|ed|ing|ion)? (?:of )?judgments?\b|\bjudgments? (?:by|on) confession\b|\bcognovit\b`: 11 units: 185.995, 244.52, 403.104, 422.201, 422.405, 704.44, 799.01, 806.25, 895.70, ATCP 134.08, DWD 277.10
- Term B.near `(?:\bconfess\w*)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|lessors?|owners?|debtors?|creditors?)\b)|(…`: 6 units: 185.995, 421.301, 422.405, 704.44, 806.25, ATCP 134.08
- Term B.and `\A(?=[\s\S]*?(?:\bconfess\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|lessors?|owners?|debtors?|credi…`: 9 units: 62.50, 185.995, 421.301, 422.201, 422.405, 704.44, 806.25, ATCP 134.08, Wis. Const.
- Term C.main `\bjudgment without (?:an? )?(?:action|suit|lawsuit|trial|hearing)\b|\bwarrants? of attorney\b|\bno judgment without action\b`: 3 units: 801.15, 806.01, 806.25
- Positive A: 704.44 ('confess judgment against the tenant in any action arising under the rental agreement') passed
- Positive B: ATCP 134.08 ('Authorizes the landlord or an agent of the landlord to confess judgment against the tenant') passed
- Positive C: 806.25 ('No judgment without action') passed

#### WIG-A-009 — waiver or forfeiture of security deposit rights

- Run 2026-11-16T06:19:52+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: security-deposit-nonwaiver: whether Wisconsin states that deposit rights cannot be waived, or bars a forfeiture clause, beyond 704.28 and ATCP 134.06.
- Cited by: `edu-security-deposit-nonwaiver-wi`
- Term A.main `\bwaive[sd]? (?:the |any |a )?(?:right to (?:the |a )?)?(?:return of (?:the |a |any )?)?(?:security )?deposits?\b|\bwaiver of (?:the |any )?…`: 0 units
- Term B.near `(?:\bsecurity deposits?\b)[\s\S]{0,1200}(?:\b(?:waive[sd]?|waiver|non-?waivable|may not be waived)\b)|(?:\b(?:waive[sd]?|waiver|non-?waivabl…`: 5 units: ATCP 134.05, DHS 83.29, DOC 327.15, DOC 333.12, Tax 11.925
- Term B.and `\A(?=[\s\S]*?(?:\bsecurity deposits?\b))(?=[\s\S]*?(?:\b(?:waive[sd]?|waiver|non-?waivable|may not be waived)\b))`: 11 units: 100.20, 704.07, ATCP 134.05, Adm 86.04, DHS 83.29, DOC 327.15, DOC 333.12, PSC 113.0403, PSC 134.0615, PSC 185.361, Tax 11.925
- Term C.and `\A(?=[\s\S]*?(?:\bforfeit\w* (?:the |his |her |its |their |any )?(?:security )?deposits?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|re…`: 0 units
- Positive A: synthetic ('A tenant may not waive the right to the return of the security deposit.') passed
- Positive B: synthetic ('Any provision of a rental agreement by which a tenant agrees to waive any right relating to a security deposit is void.') passed
- Positive C: synthetic ('A lease may not provide that the tenant forfeits the security deposit if the tenant moves out early.') passed

#### WIG-A-010 — tenant self-help remedies: repair and deduct, rent withholding or escrow

- Run 2026-11-16T06:22:11+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: landlord-breach-remedy: tenant remedies beyond 704.07(4) (repair and deduct, withholding, escrow, lead-hazard withholding with eviction bar, IL 410 ILCS 45/10 analogue).
- Cited by: `edu-landlord-breach-remedy-wi`, `edu-confirmed-absences-habitability-wi`
- Term A.main `\brepair[- ]and[- ]deduct\b|\brent escrow\b|\bescrow (?:of |the )?rents?\b|\brents? (?:shall be |may be |are )?(?:paid|deposited) (?:into|wi…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bwithh(?:old|eld|olding)\b|\bescrow\w*|\bdeduct\w*))(?=[\s\S]*?(?:\brents?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?…`: 22 units: 66.0413, 66.0823, 66.0825, 66.1201, 70.375, 71.07, 71.28, 254.30, 254.595, 287.17, 421.301, 704.07 …
- Term C.near `(?:\b(?:make|have) the repairs? (?:made )?and (?:deduct|subtract|charge|bill)\b|\bpay (?:the )?rent to (?:the )?(?:court|clerk|city|county|d…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:make|have) the repairs? (?:made )?and (?:deduct|subtract|charge|bill)\b|\bpay (?:the )?rent to (?:the )?(?:court|clerk|…`: 0 units
- Positive A: synthetic ('The tenant may repair and deduct the cost from the rent.') passed
- Positive B: synthetic ('If the owner fails to correct the lead hazard, the tenant may withhold rent and deposit it in escrow until the repairs are made.') passed
- Positive C: synthetic ('The tenant may have the repair made and deduct the cost from the next payment owed to the landlord.') passed

#### WIG-A-011 — tenant repair request: form, method or notice requirement

- Run 2026-11-16T06:24:33+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-A-012; rerun identical.
- Question: repair-notice: whether Wisconsin sets a form or method for a tenant's repair request, or ties a tenant remedy to written notice.
- Cited by: `edu-repair-notice-wi`
- Term A.main `\brepair requests?\b|\brequests? for (?:a )?repairs?\b|\bnotice of (?:the )?(?:need for |needed |required )?repairs?\b|\bmaintenance request…`: 4 units: 33.45, 33.57, DHS 252.15, NR 700.11
- Term B.and `\A(?=[\s\S]*?(?:\b(?:notif\w*|written notice|notice in writing)\b))(?=[\s\S]*?(?:\brepairs?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?…`: 88 units: 13.48, 20.385, 20.875, 23.0917, 23.33, 30.67, 32.19, 49.45, 59.69, 60.23, 60.85, 62.17 …
- Term C.near `(?:\b(?:tell|inform|report to|notify) the (?:landlord|owner)\b)[\s\S]{0,1200}(?:\b(?:defects?|problems?|conditions?|repairs?)\b)|(?:\b(?:def…`: 41 units: 29.924, 32.05, 59.69, 60.64, 62.23, 86.074, 100.37, 157.70, 182.0175, 196.643, 198.17, 281.41 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:tell|inform|report to|notify) the (?:landlord|owner)\b))(?=[\s\S]*?(?:\b(?:defects?|problems?|conditions?|repairs?)\b))`: 78 units: 29.924, 32.05, 32.06, 32.22, 59.69, 60.64, 62.23, 70.47, 86.074, 94.72, 95.21, 100.37 …
- Positive A: synthetic ('A tenant's request for repairs shall be made in writing and delivered to the landlord.') passed
- Positive B: 101.145 ('gives written notice to the owner that a smoke detector in the unit is not functional') FAILED (and pattern does not match unit)
- Positive C: synthetic ('The tenant must tell the landlord about any defect that needs repair.') passed

#### WIG-A-012 — tenant repair request: form, method or notice requirement

- Run 2026-11-16T06:25:19+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-A-011 (term B positive failed: Wis. Stat. 101.145 says 'maintenance', not 'repair'; widened B); rerun identical.
- Question: repair-notice: whether Wisconsin sets a form or method for a tenant's repair request, or ties a tenant remedy to written notice.
- Cited by: `edu-repair-notice-wi`, `edu-repair-notice-wi`
- Term A.main `\brepair requests?\b|\brequests? for (?:a )?repairs?\b|\bnotice of (?:the )?(?:need for |needed |required )?repairs?\b|\bmaintenance request…`: 4 units: 33.45, 33.57, DHS 252.15, NR 700.11
- Term B.and `\A(?=[\s\S]*?(?:\b(?:notif\w*|written notice|notice in writing)\b))(?=[\s\S]*?(?:\b(?:repairs?|maintenance|defects?|not functional)\b))(?=[\…`: 151 units: 13.48, 20.385, 20.875, 23.0917, 23.33, 23.335, 26.30, 27.01, 30.67, 32.05, 32.19, 36.11 …
- Term C.near `(?:\b(?:tell|inform|report to|notify) the (?:landlord|owner)\b)[\s\S]{0,1200}(?:\b(?:defects?|problems?|conditions?|repairs?)\b)|(?:\b(?:def…`: 41 units: 29.924, 32.05, 59.69, 60.64, 62.23, 86.074, 100.37, 157.70, 182.0175, 196.643, 198.17, 281.41 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:tell|inform|report to|notify) the (?:landlord|owner)\b))(?=[\s\S]*?(?:\b(?:defects?|problems?|conditions?|repairs?)\b))`: 78 units: 29.924, 32.05, 32.06, 32.22, 59.69, 60.64, 62.23, 70.47, 86.074, 94.72, 95.21, 100.37 …
- Positive A: synthetic ('A tenant's request for repairs shall be made in writing and delivered to the landlord.') passed
- Positive B: 101.145 ('gives written notice to the owner that a smoke detector in the unit is not functional') passed
- Positive C: synthetic ('The tenant must tell the landlord about any defect that needs repair.') passed

#### WIG-A-013 — termination because repair cost is excessive

- Run 2026-11-16T06:26:36+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-A-014; rerun identical.
- Question: repair-cost-termination: any landlord (or tenant) right to end a lease because repairs would cost too much, and repair-cost thresholds elsewhere.
- Cited by: `edu-no-repair-cost-termination-wi`
- Term A.main `\buneconomical (?:to repair|repairs?)\b|\bcost of (?:the )?repairs? (?:would )?exceeds?\b|\brepair costs? (?:would )?exceeds?\b`: 2 units: 218.0122, 973.20
- Term B.and `\A(?=[\s\S]*?(?:\bterminat\w*))(?=[\s\S]*?(?:\b(?:cost of (?:the )?repairs?|repair costs?|cost to repair)\b))(?=[\s\S]*?(?:\b(?:tenants?|les…`: 7 units: 49.45, 411.309, 411.310, 429.208, 973.20, ATCP 134.06, Ins 6.76
- Term C.near `(?:\b(?:not worth|too (?:costly|expensive)) (?:to )?(?:repair|fix|rebuild)\b|\bpercent of the (?:assessed |market |fair market )?value\b)[\s…`: 9 units: 60.23, 66.0413, 66.1105, 67.03, 100.23, 185.41, 710.02, 814.66, 2025 Wis. Act 179
- Term C.and `\A(?=[\s\S]*?(?:\b(?:not worth|too (?:costly|expensive)) (?:to )?(?:repair|fix|rebuild)\b|\bpercent of the (?:assessed |market |fair market …`: 15 units: 25.17, 40.02, 60.23, 62.23, 66.0413, 66.1105, 67.03, 73.03, 100.23, 185.41, 198.14, 710.02 …
- Positive A: 66.0413 ('determines that the cost of repairs of a building described in par. (b) 1. would exceed 50 percent') FAILED (main pattern does not match unit)
- Positive B: synthetic ('If the cost of repairs exceeds the annual rent, the landlord may terminate the rental agreement by notice to the tenant.') passed
- Positive C: synthetic ('If the building is too costly to repair, either party may terminate the lease.') passed

#### WIG-A-014 — termination because repair cost is excessive

- Run 2026-11-16T06:27:14+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-A-013 (term A positive failed (the 66.0413 snippet separates 'cost of repairs' from 'would exceed'); real positive replaced with Wis. Stat. 218.0122); rerun identical.
- Question: repair-cost-termination: any landlord (or tenant) right to end a lease because repairs would cost too much, and repair-cost thresholds elsewhere.
- Cited by: `edu-no-repair-cost-termination-wi`, `edu-no-repair-cost-termination-wi`
- Term A.main `\buneconomical (?:to repair|repairs?)\b|\bcost of (?:the )?repairs? (?:would )?exceeds?\b|\brepair costs? (?:would )?exceeds?\b`: 2 units: 218.0122, 973.20
- Term B.and `\A(?=[\s\S]*?(?:\bterminat\w*))(?=[\s\S]*?(?:\b(?:cost of (?:the )?repairs?|repair costs?|cost to repair)\b))(?=[\s\S]*?(?:\b(?:tenants?|les…`: 7 units: 49.45, 411.309, 411.310, 429.208, 973.20, ATCP 134.06, Ins 6.76
- Term C.near `(?:\b(?:not worth|too (?:costly|expensive)) (?:to )?(?:repair|fix|rebuild)\b|\bpercent of the (?:assessed |market |fair market )?value\b)[\s…`: 9 units: 60.23, 66.0413, 66.1105, 67.03, 100.23, 185.41, 710.02, 814.66, 2025 Wis. Act 179
- Term C.and `\A(?=[\s\S]*?(?:\b(?:not worth|too (?:costly|expensive)) (?:to )?(?:repair|fix|rebuild)\b|\bpercent of the (?:assessed |market |fair market …`: 15 units: 25.17, 40.02, 60.23, 62.23, 66.0413, 66.1105, 67.03, 73.03, 100.23, 185.41, 198.14, 710.02 …
- Positive A: 218.0122 ('if the cost of the repair exceeds 6 percent') passed
- Positive B: synthetic ('If the cost of repairs exceeds the annual rent, the landlord may terminate the rental agreement by notice to the tenant.') passed
- Positive C: synthetic ('If the building is too costly to repair, either party may terminate the lease.') passed

#### WIG-A-015 — general non-waiver of tenant rights; sale-leaseback non-waiver

- Run 2026-11-16T06:28:18+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-A-002 (term A and C missed the foreclosure reconveyance statute (Wis. Stat. 846.40), found by WIG-A-013 term C; added reconveyance wording); rerun identical.
- Question: part5-nonwaivable: whether Wisconsin has a general rule that tenant rights cannot be waived (beyond 704.07(1), 704.17(5), 704.44), and the Missouri-type sale-leaseback non-waiver rule. Rerun adds the foreclosure reconveyance (sale and lease back to a homeowner in foreclosure) wording.
- Cited by: `edu-part5-nonwaivable-wi`, `edu-part5-nonwaivable-wi`
- Term A.main `\bsale[- ](?:and[- ])?lease[- ]?back\b|\blease[- ]?backs?\b|\breconveyances?\b|\binterest back to the (?:foreclosed )?(?:homeowner|seller|ow…`: 8 units: 292.01, 765.001, 846.02, 846.40, 846.45, 895.01, Adm 92.68, Tax 11.29
- Term B.near `(?:\b(?:may not|cannot|shall not) (?:be )?waive[ds]?\b|\bnon-?waivable\b|\bagreement to waive\b|\bwaiver of (?:any )?(?:rights?|protections?…`: 8 units: 101.025, 107.25, 231.20, 704.07, 939.03, Adm 92.12, DHS 89.27, DHS 89.28
- Term B.and `\A(?=[\s\S]*?(?:\b(?:may not|cannot|shall not) (?:be )?waive[ds]?\b|\bnon-?waivable\b|\bagreement to waive\b|\bwaiver of (?:any )?(?:rights?…`: 15 units: 101.025, 107.25, 196.52, 231.20, 343.31, 704.07, 893.80, 939.03, Adm 92.12, DHS 89.27, DHS 89.28, PSC 113.0406 …
- Term C.near `(?:\bsells? (?:the |his |her |its |a )?(?:home|dwelling|residence|house|property)\b)[\s\S]{0,1200}(?:\b(?:rents?|leases?) (?:it|the (?:home|…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\bsells? (?:the |his |her |its |a )?(?:home|dwelling|residence|house|property)\b))(?=[\s\S]*?(?:\b(?:rents?|leases?) (?:it|t…`: 0 units
- Positive A: synthetic ('In a sale-leaseback transaction the seller may not waive any right under this section.') passed
- Positive B: 704.07 ('An agreement to waive the requirements of this section in a residential tenancy, including an agreement in a rental agreement, is void') passed
- Positive C: synthetic ('A homeowner who sells the home to an investor and rents it back from the investor may not waive these protections.') passed
- Positive A: 846.40 ('Any waiver of the provisions of this section is void and unenforceable as contrary to public policy') passed

#### WIG-A-016 — tenant-performed repairs or maintenance by agreement: formalities (separate writing, consideration, good faith)

- Run 2026-11-16T06:29:36+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: maintenance-duty-shift and tenant-repair-agreement: whether Wisconsin conditions a tenant's agreed repairs or chores on a separate writing, consideration or good faith (URLTA 2.104(c)-(d) analogue), or lets a listed landlord duty be shifted.
- Cited by: `edu-maintenance-duty-shift-wi`, `edu-tenant-repair-agreement-wi`
- Term A.main `\bspecified repairs\b|\bmaintenance tasks\b|\brepairs? (?:or maintenance )?in lieu of rent\b|\bminor remodeling\b`: 8 units: 38.04, 49.136, 49.137, ATCP 132.04, NR 208.05, NR 419.045, TCS 5.04, TCS 5.09
- Term B.and `\A(?=[\s\S]*?(?:\bperform\w*))(?=[\s\S]*?(?:\b(?:repairs?|maintenance)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants…`: 21 units: 49.19, 49.45, 50.04, 59.69, 66.1103, 77.29, 77.52, 157.062, 218.0116, 218.0171, 287.175, 349.13 …
- Term C.near `(?:\bordinary maintenance\b|\bassumed by (?:a |the )?tenant\b)[\s\S]{0,1200}(?:\b(?:agreement|writing|written|lease)\b)|(?:\b(?:agreement|wr…`: 4 units: 66.1331, 66.1333, 704.44, ATCP 134.08
- Term C.and `\A(?=[\s\S]*?(?:\bordinary maintenance\b|\bassumed by (?:a |the )?tenant\b))(?=[\s\S]*?(?:\b(?:agreement|writing|written|lease)\b))`: 4 units: 66.1331, 66.1333, 704.44, ATCP 134.08
- Positive A: synthetic ('The landlord and tenant may agree that the tenant perform specified repairs, maintenance tasks, and minor remodeling.') passed
- Positive B: synthetic ('The landlord and tenant may agree that the tenant will perform repairs only if the agreement is in good faith, set forth in a separate written agreement and sup') passed
- Positive C: 704.44 ('ordinary maintenance obligations of a tenant under s. 704.07 or assumed by a tenant under a rental agreement or other written agreement') passed

#### WIG-A-017 — unconscionability and supervening hardship

- Run 2026-11-16T06:30:58+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: unconscionability: Wisconsin unconscionability statutes and whether any reaches a residential lease; supervening-onerousness revision (PR question).
- Cited by: `edu-unconscionability-wi`
- Term A.main `\bunconscionab\w*`: 33 units: 101.951, 103.465, 177.0602, 203.08, 218.0116, 218.11, 218.22, 218.32, 402.302, 402.309, 402.719, 411.108 …
- Term B.near `(?:\bunconscionab\w*|\bunfair (?:term|provision|clause)s?\b)[\s\S]{0,1200}(?:\b(?:rental agreements?|leases?|tenants?|lessees?|renters?|land…`: 5 units: 218.0116, 411.108, 411.503, 425.103, 707.32
- Term B.and `\A(?=[\s\S]*?(?:\bunconscionab\w*|\bunfair (?:term|provision|clause)s?\b))(?=[\s\S]*?(?:\b(?:rental agreements?|leases?|tenants?|lessees?|re…`: 6 units: 218.0116, 411.108, 411.503, 425.103, 427.104, 707.32
- Term C.near `(?:\b(?:excessively onerous|undue hardship|change[sd]? (?:of|in) circumstances|unforeseen (?:events?|circumstances))\b)[\s\S]{0,1200}(?:\b(?…`: 8 units: 49.453, 77.22, 77.58, 106.50, 321.62, 704.07, Tax 11.30, Tax 11.92
- Term C.and `\A(?=[\s\S]*?(?:\b(?:excessively onerous|undue hardship|change[sd]? (?:of|in) circumstances|unforeseen (?:events?|circumstances))\b))(?=[\s\…`: 13 units: 13.48, 49.453, 49.849, 62.23, 77.22, 77.58, 106.50, 321.62, 704.07, 946.93, 973.20, Tax 11.30 …
- Positive A: 402.302 ('If the court as a matter of law finds the contract or any clause of the contract to have been unconscionable') passed
- Positive B: synthetic ('If the court finds a rental agreement or any provision of it unconscionable, the court may refuse to enforce it.') passed
- Positive C: synthetic ('A court may revise a lease that has become excessively onerous for the tenant because of unforeseen events.') passed

#### WIG-A-018 — deposit return conditioned on surrender notice or forwarding address

- Run 2026-11-16T06:32:37+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: deposit-surrender-notice: whether the deposit deadline turns on a tenant's surrender notice, key return or forwarding address.
- Cited by: `edu-deposit-surrender-notice-wi`
- Term A.main `\bforwarding address(?:es)?\b`: 7 units: 6.50, 66.0809, 943.215, ATCP 134.06, DHS 104.01, DOC 347.32, HS 1.03
- Term B.and `\A(?=[\s\S]*?(?:\bsecurity deposits?\b))(?=[\s\S]*?(?:\b(?:surrender\w*|vacat\w*|move[sd]? out|moving out)\b))(?=[\s\S]*?(?:\b(?:written not…`: 3 units: 704.07, 943.215, ATCP 134.06
- Term C.near `(?:\b(?:returns? (?:the )?keys|turns? in (?:the )?keys|surrenders? possession|delivers? possession)\b)[\s\S]{0,1200}(?:\bdeposits?\b)|(?:\bd…`: 1 units: 66.1201
- Term C.and `\A(?=[\s\S]*?(?:\b(?:returns? (?:the )?keys|turns? in (?:the )?keys|surrenders? possession|delivers? possession)\b))(?=[\s\S]*?(?:\bdeposits…`: 1 units: 66.1201
- Positive A: synthetic ('The landlord need not return the deposit until the tenant provides a forwarding address.') passed
- Positive B: ATCP 134.06 ('A landlord who has otherwise complied with this section shall not be considered in violation solely because the postal service has been unable to complete mail ') passed
- Positive C: synthetic ('The deposit is due 21 days after the tenant returns the keys and surrenders possession.') passed

#### WIG-A-019 — posted or disclosed standards for setting security deposits

- Run 2026-11-16T06:34:00+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: security-deposit-standards: whether Wisconsin requires posting or disclosing the standards used to set deposits, or limits differing deposits.
- Cited by: `edu-no-security-deposit-standards-wi`
- Term A.main `\bdeposit (?:calculation )?standards\b|\bstandards? (?:used )?(?:for|to|in) (?:set|setting|determin\w*|calculat\w*) (?:the )?(?:amount of )?…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bsecurity deposits?\b))(?=[\s\S]*?(?:\b(?:amount|calculat\w*|determin\w*)\b))(?=[\s\S]*?(?:\b(?:post(?:ed|s|ing)?|written s…`: 9 units: 100.20, 106.50, 429.203, 452.13, 704.07, 943.20, ATCP 134.05, ATCP 134.06, DHS 163.42
- Term C.near `(?:\b(?:different|differing|higher|additional) (?:security )?deposits?\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|renters?|applicants?)\b)|(?…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:different|differing|higher|additional) (?:security )?deposits?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|applica…`: 1 units: 40.02
- Positive A: synthetic ('A landlord who uses different standards to calculate the amount of security deposits shall post the deposit calculation standards.') passed
- Positive B: synthetic ('A landlord of more than four units shall post a written statement of the standards used to determine the amount of each tenant's security deposit.') passed
- Positive C: synthetic ('A landlord may not require a higher deposit from a tenant because of the tenant's military service.') passed

#### WIG-A-020 — expedited or early security deposit disposition

- Run 2026-11-16T06:35:02+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: expedited-deposit-disposition: any fast-track or early deposit settlement procedure, including on abandonment.
- Cited by: `edu-no-expedited-deposit-disposition-wi`
- Term A.main `\b(?:expedited|summary|early|accelerated) (?:security )?deposit (?:disposition|return|hearing|procedure|accounting)s?\b|\bdisposition of (?:…`: 2 units: 704.10, Trans 100.08
- Term B.and `\A(?=[\s\S]*?(?:\bsecurity deposits?\b))(?=[\s\S]*?(?:\b(?:abandon\w*|expedit\w*|dispute\w*|early|before the (?:end|expiration))\b))(?=[\s\S…`: 5 units: 100.20, 106.50, 429.203, 943.20, REEB 25.023
- Term C.near `(?:\bdeposits?\b)[\s\S]{0,1200}(?:\b(?:mediat\w*|arbitrat\w*|small claims)\b)|(?:\b(?:mediat\w*|arbitrat\w*|small claims)\b)[\s\S]{0,1200}(?…`: 13 units: 16.11, 66.0901, 292.63, 632.10, 655.27, 655.68, 707.49, 814.615, 814.62, Ins 52.05, Wis. Const., 2025 Wis. Act 33 …
- Term C.and `\A(?=[\s\S]*?(?:\bdeposits?\b))(?=[\s\S]*?(?:\b(?:mediat\w*|arbitrat\w*|small claims)\b))`: 37 units: 16.11, 20.438, 20.540, 20.875, 36.11, 66.0901, 71.10, 73.01, 196.497, 218.04, 292.63, 293.13 …
- Positive A: synthetic ('The landlord may request an expedited deposit disposition when the tenant has abandoned the premises.') passed
- Positive B: synthetic ('If the tenant abandons the dwelling, the landlord may apply the security deposit early to unpaid rent, and the tenant may dispute the deduction.') passed
- Positive C: synthetic ('A dispute over the deposit may be submitted to mediation.') passed

#### WIG-A-021 — nonrefundable fees or deposits: separate notice or disclosure

- Run 2026-11-16T06:35:55+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: nonrefundable-deposit-separate-notice: whether Wisconsin requires a nonrefundable fee or deposit to be disclosed in a separate notice.
- Cited by: `edu-no-nonrefundable-separate-notice-wi`
- Term A.main `\bnon-?refundable\b`: 141 units: 29.553, 71.07, 76.633, 77.81, 77.88, 77.875, 94.64, 94.65, 94.681, 94.705, 98.16, 100.173 …
- Term B.and `\A(?=[\s\S]*?(?:\bnon-?refundable\b|\bnot refundable\b))(?=[\s\S]*?(?:\b(?:fees?|deposits?|charges?)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?…`: 93 units: 29.553, 71.07, 76.633, 77.81, 94.64, 94.65, 94.681, 94.705, 98.16, 118.60, 119.23, 126.11 …
- Term C.near `(?:\bnot (?:be )?refund(?:able|ed)\b|\bwill not be returned\b|\bkept by the (?:landlord|lessor|owner)\b)[\s\S]{0,1200}(?:\b(?:deposits?|fees…`: 26 units: 138.09, 217.05, 218.04, 943.62, ATCP 65.04, ATCP 93.240, DHS 157.10, DHS 163.10, Game 7.06, Ins 17.01, NR 114.06, NR 114.34 …
- Term C.and `\A(?=[\s\S]*?(?:\bnot (?:be )?refund(?:able|ed)\b|\bwill not be returned\b|\bkept by the (?:landlord|lessor|owner)\b))(?=[\s\S]*?(?:\b(?:dep…`: 30 units: 138.09, 138.12, 217.05, 218.04, 943.62, ATCP 65.04, ATCP 93.240, DHS 157.10, DHS 163.10, Game 7.06, Ins 17.01, NR 114.06 …
- Positive A: synthetic ('Any nonrefundable fee shall be disclosed in a separate written notice signed by the tenant.') passed
- Positive B: synthetic ('A landlord who charges a tenant a nonrefundable cleaning fee shall state that the fee is not refundable in a separate document.') passed
- Positive C: synthetic ('If the fee will not be returned, the rental agreement must say so.') passed

#### WIG-A-022 — penalty for missing move-in inspection / check-in notice

- Run 2026-11-16T06:37:00+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: inspection-notice-penalty: whether a missing check-in notice carries its own penalty (forfeiture of the right to withhold, multiple of the deposit).
- Cited by: `edu-inspection-notice-penalty-wi`
- Term A.main `\bforfeits? (?:the |any |all |his or her |its )?(?:right )?to (?:withhold|retain|keep)\b|\bmay not (?:withhold|retain) any (?:portion|part) …`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:check-?in|inspect\w*|preexisting damages?|pre-existing damages?)\b))(?=[\s\S]*?(?:\bsecurity deposits?\b))(?=[\s\S]*?(?…`: 2 units: 66.0104, 106.50
- Term C.near `(?:\b(?:double|twice|treble|triple|two times|three times) the (?:amount of (?:the )?)?(?:security )?deposit\b)[\s\S]{0,1200}(?:\b(?:tenants?…`: 1 units: 100.20
- Term C.and `\A(?=[\s\S]*?(?:\b(?:double|twice|treble|triple|two times|three times) the (?:amount of (?:the )?)?(?:security )?deposit\b))(?=[\s\S]*?(?:\b…`: 1 units: 100.20
- Positive A: synthetic ('A landlord who fails to give the move-in inspection notice forfeits the right to withhold any amount from the security deposit.') passed
- Positive B: synthetic ('If the landlord does not offer the tenant a check-in inspection, the landlord is subject to a penalty of twice the security deposit.') passed
- Positive C: synthetic ('The tenant may recover twice the amount of the security deposit from the landlord.') passed

#### WIG-A-023 — fees for services not provided

- Run 2026-11-16T06:38:11+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: fee-unprovided-service: whether Wisconsin bars a fee for a service, amenity or utility not provided.
- Cited by: `edu-fee-unprovided-service-wi`
- Term A.main `\b(?:services?|amenit(?:y|ies)|goods) (?:that (?:are|were|is|was) )?(?:not|never) (?:actually )?(?:provided|rendered|performed|furnished|del…`: 17 units: 49.45, 51.437, 100.51, 136.001, 302.386, 447.07, 448.08, 448.56, 448.67, Accy 1.401, Chir 6.02, DCF 52.12 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:fees?|charges?)\b))(?=[\s\S]*?(?:\b(?:not|never) (?:actually )?(?:provided|rendered|furnished|performed)\b))(?=[\s\S]*?…`: 14 units: 49.45, 49.498, 101.11, 175.60, 218.0171, 562.05, 632.69, 704.05, DHS 107.13, DHS 163.10, DHS 163.14, Tax 11.84 …
- Term C.near `(?:\bcharg\w* (?:a |any )?(?:tenant |lessee )?(?:for|a fee for) (?:a |any )?(?:service|amenit\w*|utilit\w*))[\s\S]{0,1200}(?:\b(?:not|never)…`: 8 units: 115.52, 115.525, DHS 105.16, DHS 105.17, DHS 105.19, DHS 107.22, DHS 107.23, DHS 82.06
- Term C.and `\A(?=[\s\S]*?(?:\bcharg\w* (?:a |any )?(?:tenant |lessee )?(?:for|a fee for) (?:a |any )?(?:service|amenit\w*|utilit\w*)))(?=[\s\S]*?(?:\b(?…`: 18 units: 46.03, 49.45, 49.498, 50.09, 115.52, 115.525, DHS 104.01, DHS 105.16, DHS 105.17, DHS 105.19, DHS 107.13, DHS 107.22 …
- Positive A: synthetic ('A landlord may not charge a fee for services not provided to the tenant.') passed
- Positive B: synthetic ('No landlord may charge a tenant any fee for a service that is not actually provided.') passed
- Positive C: synthetic ('A landlord may not charge for a utility service the tenant has not received.') passed

#### WIG-A-024 — late fee caps or limits for residential rent

- Run 2026-11-16T06:39:07+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: late-fee-limit: any cap on residential late fees, including manufactured home communities and non-dwelling analogues.
- Cited by: `edu-late-fee-limit-wi`
- Term A.main `\blate (?:rent )?(?:fees?|charges?|penalt(?:y|ies))\b`: 85 units: 23.33, 23.335, 89.063, 94.55, 97.605, 97.613, 97.67, 101.935, 105.01, 105.16, 138.05, 169.31 …
- Term B.and `\A(?=[\s\S]*?(?:\blate (?:rent )?(?:fees?|charges?|penalt(?:y|ies))\b|\bdelinquency charges?\b))(?=[\s\S]*?(?:\b(?:may not exceed|not to exc…`: 5 units: 23.33, 23.335, 185.995, 421.301, 704.90
- Term C.near `(?:\b(?:charges? for (?:paying )?late|paying (?:the )?rent late|rent (?:is|was) late)\b)[\s\S]{0,1200}(?:\b(?:limit\w*|reasonable|exceed\w*|…`: 3 units: 422.202, 707.30, PSC 185.21
- Term C.and `\A(?=[\s\S]*?(?:\b(?:charges? for (?:paying )?late|paying (?:the )?rent late|rent (?:is|was) late)\b))(?=[\s\S]*?(?:\b(?:limit\w*|reasonable…`: 3 units: 422.202, 707.30, PSC 185.21
- Positive A: ATCP 134.09 ('No landlord may charge a late rent fee or late rent penalty to a tenant, except as specifically provided under the rental agreement') passed
- Positive B: synthetic ('A late fee may not exceed 5 percent of the monthly rent payable by the tenant under the rental agreement.') passed
- Positive C: synthetic ('Any charge for paying the rent late must be reasonable and may not exceed $50.') passed

#### WIG-A-025 — statutory caps on residential landlord charges (deposits, fees)

- Run 2026-11-16T06:40:30+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-A-026; rerun identical.
- Question: statutory-caps: every Wisconsin cap on what a residential landlord may charge.
- Cited by: `edu-statutory-caps-wi`
- Term A.main `\b(?:security )?deposits? (?:may|shall|can) not exceed\b|\bmaximum (?:security )?deposits?\b|\bdeposits? (?:of|in an amount) (?:more|greater…`: 16 units: DHS 83.29, DHS 83.34, NR 270.052, NR 270.053, NR 270.054, NR 270.102, NR 270.103, NR 270.104, NR 270.113, PSC 113.0402, PSC 113.0403, PSC 134.061 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:fees?|deposits?|charges?)\b))(?=[\s\S]*?(?:\b(?:may not exceed|not to exceed|shall not exceed|not more than \$|up to \$…`: 21 units: 60.85, 66.0104, 66.0304, 66.0915, 66.1105, 66.1201, 70.11, 71.07, 77.29, 106.50, 134.87, 218.0171 …
- Term C.near `(?:\bpet (?:deposits?|fees?|rent)\b|\bapplication fees?\b|\bkey (?:fees?|deposits?)\b|\bmove-?in fees?\b|\bamenity fees?\b)[\s\S]{0,1200}(?:…`: 51 units: 20.875, 36.11, 51.043, 66.0414, 76.633, 196.504, 214.772, 215.33, 281.34, 281.36, 283.35, 350.138 …
- Term C.and `\A(?=[\s\S]*?(?:\bpet (?:deposits?|fees?|rent)\b|\bapplication fees?\b|\bkey (?:fees?|deposits?)\b|\bmove-?in fees?\b|\bamenity fees?\b))(?=…`: 79 units: 20.875, 23.321, 30.28, 36.11, 51.043, 66.0414, 76.633, 102.75, 170.12, 196.504, 214.772, 215.33 …
- Positive A: synthetic ('A security deposit may not exceed one month's rent.') passed
- Positive B: 704.085 ('a landlord may require a prospective tenant to pay the landlord’s actual cost, up to $25, to obtain a consumer credit report') FAILED (and pattern does not match unit)
- Positive C: synthetic ('A pet deposit may not exceed $300.') passed

#### WIG-A-026 — statutory caps on residential landlord charges (deposits, fees)

- Run 2026-11-16T06:41:16+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-A-025 (term B positive failed (Wis. Stat. 704.085 has no lease or premises word; element dropped); term A widened to 'not exceeding' after it missed Wis. Admin. Code ATCP 125.04(1)(b)); rerun identical.
- Question: statutory-caps: every Wisconsin cap on what a residential landlord may charge.
- Cited by: `edu-statutory-caps-wi`, `edu-statutory-caps-wi`
- Term A.main `\b(?:security )?deposits? (?:may|shall|can) not exceed\b|\b(?:security )?deposits? not exceeding\b|\bmaximum (?:security )?deposits?\b|\bdep…`: 17 units: ATCP 125.04, DHS 83.29, DHS 83.34, NR 270.052, NR 270.053, NR 270.054, NR 270.102, NR 270.103, NR 270.104, NR 270.113, PSC 113.0402, PSC 113.0403 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:fees?|deposits?|charges?)\b))(?=[\s\S]*?(?:\b(?:may not exceed|not to exceed|shall not exceed|not more than \$|up to \$…`: 26 units: 60.85, 66.0104, 66.0304, 66.0915, 66.1105, 66.1201, 70.11, 71.07, 77.29, 100.26, 106.50, 134.87 …
- Term C.near `(?:\bpet (?:deposits?|fees?|rent)\b|\bapplication fees?\b|\bkey (?:fees?|deposits?)\b|\bmove-?in fees?\b|\bamenity fees?\b)[\s\S]{0,1200}(?:…`: 51 units: 20.875, 36.11, 51.043, 66.0414, 76.633, 196.504, 214.772, 215.33, 281.34, 281.36, 283.35, 350.138 …
- Term C.and `\A(?=[\s\S]*?(?:\bpet (?:deposits?|fees?|rent)\b|\bapplication fees?\b|\bkey (?:fees?|deposits?)\b|\bmove-?in fees?\b|\bamenity fees?\b))(?=…`: 79 units: 20.875, 23.321, 30.28, 36.11, 51.043, 66.0414, 76.633, 102.75, 170.12, 196.504, 214.772, 215.33 …
- Positive A: synthetic ('A security deposit may not exceed one month's rent.') passed
- Positive B: 704.085 ('a landlord may require a prospective tenant to pay the landlord’s actual cost, up to $25, to obtain a consumer credit report') passed
- Positive C: synthetic ('A pet deposit may not exceed $300.') passed
- Positive A: ATCP 125.04 ('A security deposit not exceeding the amount of 2') passed

#### WIG-A-027 — lease must list every fee; total monthly payment; markup and common-area fee limits

- Run 2026-11-16T06:42:37+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: required-fees: whether Wisconsin requires the lease to list all fees, a total monthly payment, or limits markups or common-area fees.
- Cited by: `edu-required-fees-wi`
- Term A.main `\btotal monthly payment\b|\ball-in (?:price|rent|pricing)\b|\bjunk fees?\b|\bhidden fees?\b`: 1 units: DCF 56.23
- Term B.and `\A(?=[\s\S]*?(?:\b(?:rental agreements?|leases?) (?:shall|must) (?:state|list|include|disclose|set forth|specify|contain)\b))(?=[\s\S]*?(?:\…`: 5 units: 66.0915, 429.203, 704.90, 710.15, ATCP 125.03
- Term C.near `(?:\b(?:common area|amenity|administrative|service|markup|mark-up|convenience) fees?\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|renters?|resi…`: 9 units: 218.14, 345.09, 345.28, 823.23, ATCP 118.12, Ins 10.10, SPS 408.05, Tax 2.48, Trans 139.05
- Term C.and `\A(?=[\s\S]*?(?:\b(?:common area|amenity|administrative|service|markup|mark-up|convenience) fees?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|re…`: 27 units: 20.385, 20.875, 60.85, 66.0420, 66.1105, 70.375, 218.0101, 218.0116, 218.14, 281.61, 345.09, 345.28 …
- Positive A: synthetic ('The lease must state the rent and all nonoptional fees as a single Total Monthly Payment.') passed
- Positive B: synthetic ('Each rental agreement shall list every fee or charge the tenant may be required to pay.') passed
- Positive C: synthetic ('A landlord may not charge a tenant a common area fee for maintenance of common areas.') passed

#### WIG-A-028 — government fines or abatement costs passed from owner to tenant

- Run 2026-11-16T06:44:46+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: governmental-fines: whether Wisconsin bars or allows passing government fines or nuisance abatement costs from the owner to a tenant.
- Cited by: `tenant-caused-fines-wi`, `edu-governmental-fines-wi`, `edu-government-fee-reimbursement-wi`
- Term A.main `\b(?:fines?|forfeitures?|penalt(?:y|ies)) (?:imposed|assessed|levied) (?:on|against|upon) (?:the |a )?(?:owner|landlord|lessor|property owne…`: 1 units: 174.02
- Term B.and `\A(?=[\s\S]*?(?:\b(?:fines?|forfeitures?|abatement costs?|cost of abat\w*)\b))(?=[\s\S]*?(?:\b(?:pass\w* (?:on|through)|reimburs\w*|charg\w*…`: 13 units: 23.33, 23.335, 29.889, 59.70, 66.0435, 101.02, 340.01, 562.02, 893.80, 973.20, Adm 2.14, Ins 17.25 …
- Term C.near `(?:\breimburs\w* (?:the )?(?:landlord|owner|lessor)\b|\b(?:tenant|occupant|lessee) (?:is|shall be) liable (?:to the (?:owner|landlord) )?for…`: 2 units: 32.195, 703.24
- Term C.and `\A(?=[\s\S]*?(?:\breimburs\w* (?:the )?(?:landlord|owner|lessor)\b|\b(?:tenant|occupant|lessee) (?:is|shall be) liable (?:to the (?:owner|la…`: 8 units: 32.195, 49.19, 84.063, 292.63, 292.65, 703.24, 704.07, NR 169.25
- Positive A: synthetic ('A municipality may collect a forfeiture imposed on the owner for a nuisance.') passed
- Positive B: synthetic ('An owner may recover from the tenant any fine or abatement cost caused by the tenant, and the tenant shall reimburse the landlord.') passed
- Positive C: 703.24 ('the tenant is liable for the charge, fine, or assessment') passed

#### WIG-A-029 — fee or charge for tampering with smoke or carbon monoxide detectors

- Run 2026-11-16T06:46:50+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: alarm-tampering-fee: whether any Wisconsin law sets or permits a tenant fee for tampering with a smoke or CO detector.
- Cited by: `edu-alarm-tampering-fee-wi`
- Term A.main `\btamper(?:s|ed|ing)? with,? (?:remove|or remov\w*)|\btamper\w* (?:with )?(?:an? |any |the )?(?:installed )?(?:smoke|carbon monoxide) (?:det…`: 9 units: 101.149, 101.647, 154.19, 941.12, ATCP 73.145, DHS 125.05, SPS 321.097, SPS 328.04, UWS 18.10
- Term B.and `\A(?=[\s\S]*?(?:\b(?:tamper\w*|disabl\w*|disconnect\w*)\b))(?=[\s\S]*?(?:\b(?:smoke|carbon monoxide) (?:detectors?|alarms?)\b))(?=[\s\S]*?(?…`: 2 units: ATCP 72.03, ATCP 73.145
- Term C.near `(?:\b(?:smoke|carbon monoxide|fire) (?:detectors?|alarms?)\b)[\s\S]{0,1200}(?:\b(?:fees?|charges?)\b)|(?:\b(?:fees?|charges?)\b)[\s\S]{0,120…`: 7 units: 77.52, 709.03, SPS 302.31, SPS 302.33, SPS 302.34, Tax 11.68, Tax 11.84
- Term C.and `\A(?=[\s\S]*?(?:\b(?:smoke|carbon monoxide|fire) (?:detectors?|alarms?)\b))(?=[\s\S]*?(?:\b(?:fees?|charges?)\b))`: 17 units: 66.0104, 77.52, 101.648, 443.01, 709.03, ATCP 72.03, DCF 202.08, DHS 105.14, SFP 7.02, SPS 302.31, SPS 302.33, SPS 302.34 …
- Positive A: 101.149 ('No person may tamper with, remove, destroy, disconnect, or remove batteries from an installed') passed
- Positive B: synthetic ('A landlord may charge a tenant a fee of up to $250 for tampering with or disabling a smoke detector, plus the cost of repair.') passed
- Positive C: synthetic ('The rental agreement may require the tenant to pay a fee for removing a smoke alarm.') passed

#### WIG-A-030 — collection fees or costs added to a tenant's debt

- Run 2026-11-16T06:47:55+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: collection-fee: whether Wisconsin allows or bars collection fees on a tenant's debt (lease term or collection-agency rule).
- Cited by: `edu-collection-fee-wi`
- Term A.main `\bcollection (?:fees?|costs?|charges?|expenses?)\b|\bcosts? of collection\b`: 50 units: 20.905, 49.854, 49.89, 59.40, 71.93, 93.06, 94.72, 94.76, 102.22, 102.29, 138.05, 146.905 …
- Term B.and `\A(?=[\s\S]*?(?:\bcollection agenc\w*|\bdebt collectors?\b|\bcollector\b))(?=[\s\S]*?(?:\b(?:fees?|charges?|costs?|expenses?)\b))(?=[\s\S]*?…`: 51 units: 16.11, 29.563, 49.195, 49.22, 59.40, 59.52, 62.69, 66.0401, 66.0403, 86.31, 95.72, 100.171 …
- Term C.near `(?:\b(?:collect\w*|past[- ]due|unpaid rent|delinquen\w*)\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b)|(?:\b(?:…`: 90 units: 20.924, 33.32, 49.849, 66.0304, 66.0627, 66.0809, 66.0901, 66.1103, 66.1331, 71.07, 71.52, 71.58 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:collect\w*|past[- ]due|unpaid rent|delinquen\w*)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\…`: 196 units: 13.48, 16.84, 20.924, 23.33, 23.335, 26.30, 27.09, 32.05, 32.06, 32.09, 33.32, 45.03 …
- Positive A: synthetic ('A rental agreement may provide for collection costs if the tenant fails to pay rent.') passed
- Positive B: synthetic ('A collection agency may not collect any fee or charge unless expressly authorized by the agreement creating the debt.') passed
- Positive C: synthetic ('A landlord may charge a fee to collect past-due rent from a tenant.') passed

#### WIG-A-031 — fee for preparing or serving notices on tenants

- Run 2026-11-16T06:49:46+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: notice-service-fee: whether Wisconsin authorizes or bars a lease charge for preparing or serving a notice.
- Cited by: `edu-notice-service-fee-wi`
- Term A.main `\bfees? for (?:preparing|serving|posting|delivering|giving) (?:a |the |any )?notices?\b|\bnotice (?:preparation|service|posting) (?:fees?|ch…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bnotices?\b))(?=[\s\S]*?(?:\b(?:fees?|charges?|costs?)\b))(?=[\s\S]*?(?:\b(?:prepar\w*|serv(?:e|ed|ing|ice)|post(?:ed|ing))…`: 40 units: 32.05, 32.06, 32.19, 60.85, 66.0809, 66.0823, 66.1105, 77.29, 106.50, 108.02, 134.49, 196.52 …
- Term C.near `(?:\bcosts? of (?:serving|preparing|giving|posting) (?:the |a |any )?notices?\b|\bcharg\w* (?:the )?tenant for (?:a |the |any )?notices?\b)[…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\bcosts? of (?:serving|preparing|giving|posting) (?:the |a |any )?notices?\b|\bcharg\w* (?:the )?tenant for (?:a |the |any )…`: 0 units
- Positive A: synthetic ('A landlord may not charge a tenant a notice preparation fee.') passed
- Positive B: synthetic ('The rental agreement may require the tenant to pay a fee of $25 for each notice the landlord prepares and serves to terminate the tenancy.') passed
- Positive C: synthetic ('The landlord may charge the tenant for the notice to pay rent or vacate.') passed

#### WIG-A-032 — late fees on the subsidy or voucher portion of rent

- Run 2026-11-16T06:51:08+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: subsidy-late-fee: Wisconsin rules on late fees for subsidized or voucher tenants.
- Cited by: `edu-subsidy-late-fee-wi`
- Term A.main `\bhousing assistance payments?\b|\b(?:subsidy|voucher|assistance) (?:portion|share) of (?:the )?rent\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\blate (?:rent )?(?:fees?|charges?|penalt(?:y|ies))\b))(?=[\s\S]*?(?:\b(?:subsid\w*|vouchers?|housing assistance|section 8|r…`: 2 units: NR 146.04, NR 162.04
- Term C.near `(?:\b(?:housing choice|section 8|rent subsid\w*|subsidized housing|rental assistance)\b)[\s\S]{0,1200}(?:\b(?:late|penalt\w*|nonpayment)\b)|…`: 8 units: 71.05, 71.26, SPS 343.03, Wis. Const., 2025 Wis. Act 122, 2025 Wis. Act 149, 2025 Wis. Act 195, 2025 Wis. Act 201
- Term C.and `\A(?=[\s\S]*?(?:\b(?:housing choice|section 8|rent subsid\w*|subsidized housing|rental assistance)\b))(?=[\s\S]*?(?:\b(?:late|penalt\w*|nonp…`: 36 units: 71.05, 71.26, 71.45, 805.06, 972.08, NR 661.0151, NR 664.0151, SPS 343.03, Wis. Const., 2025 Wis. Act 15, 2025 Wis. Act 17, 2025 Wis. Act 24 …
- Positive A: synthetic ('The tenant is not responsible for the subsidy portion of the rent.') passed
- Positive B: synthetic ('A landlord may not charge a late fee to a tenant when the voucher payment is late.') passed
- Positive C: synthetic ('A landlord may not charge a penalty for late payment of a rent subsidy.') passed

#### WIG-A-033 — passing property tax or insurance increases to residential tenants

- Run 2026-11-16T06:52:28+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: tax-escalation: rules on lease clauses passing tax or insurance increases to residential tenants (MA 186 s15C, NH 540-A:7 analogues).
- Cited by: `edu-tax-escalation-wi`, `edu-property-tax-rent-disclosure-wi`, `tax-insurance-escalation-la`
- Term A.main `\btax escalation\b|\btax (?:pass-?through|increase) (?:clause|provision)s?\b|\bescalation clauses?\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:real (?:estate|property) tax\w*|property tax(?:es)?)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?)\b))(?=[\s\S]*?(?…`: 15 units: 13.48, 60.85, 66.0413, 66.1105, 70.11, 70.32, 71.07, 71.52, 700.23, 707.02, 823.23, Adm 92.01 …
- Term C.near `(?:\b(?:pays?|paid|paying) (?:the )?(?:real (?:estate|property) )?taxes\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|occupants?)\b)|(?:\b(?:ten…`: 5 units: 74.01, 74.73, 401.203, 710.15, ATCP 125.08
- Term C.and `\A(?=[\s\S]*?(?:\b(?:pays?|paid|paying) (?:the )?(?:real (?:estate|property) )?taxes\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|occupants?)\b))`: 11 units: 74.01, 74.73, 77.52, 196.37, 321.61, 401.203, 701.0816, 710.15, ATCP 125.08, Ins 4.10, 2025 Wis. Act 191
- Positive A: synthetic ('A lease may contain a tax escalation clause requiring the tenant to pay a share of any increase.') passed
- Positive B: synthetic ('A rental agreement may require the tenant to pay a proportionate share of any increase in real estate taxes, as additional rent.') passed
- Positive C: 74.73 ('An occupant or tenant of property who pays real property taxes') passed

#### WIG-A-034 — incentives for landlords renting to veterans

- Run 2026-11-16T06:53:25+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: veterans-incentive: whether Wisconsin offers landlords a credit, fee waiver or other incentive for renting to veterans, or regulates veteran rent discounts.
- Cited by: `edu-no-veterans-incentive-wi`
- Term A.main `\bveterans? (?:rental|housing|rent|landlord) (?:incentives?|credits?|discounts?|preferences?|assistance|programs?)\b`: 2 units: 59.52, 234.40
- Term B.and `\A(?=[\s\S]*?(?:\bveterans?\b))(?=[\s\S]*?(?:\b(?:landlords?|lessors?|rental (?:units?|housing|property|dwellings?)|tenants?)\b))(?=[\s\S]*?…`: 15 units: 20.875, 45.03, 49.19, 66.1201, 70.11, 71.07, 71.47, 71.52, 77.54, 421.301, 767.61, 815.18 …
- Term C.near `(?:\b(?:military|service ?members?|armed forces|veterans?)\b)[\s\S]{0,1200}(?:\b(?:rent discounts?|rental incentives?|landlord incentives?|r…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:military|service ?members?|armed forces|veterans?)\b))(?=[\s\S]*?(?:\b(?:rent discounts?|rental incentives?|landlord in…`: 0 units
- Positive A: synthetic ('The department shall administer a veterans rental incentive program for landlords.') passed
- Positive B: synthetic ('A landlord who rents a dwelling unit to a veteran may claim a tax credit equal to 10 percent of the rent.') passed
- Positive C: synthetic ('A landlord may offer veterans a rent discount.') passed

#### WIG-A-035 — right to receive rent inseparable from landlord obligations (URLTA 1.404 analogue)

- Run 2026-11-16T06:54:23+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: rent-receipt-anti-waiver: whether Wisconsin ties the right to receive rent to the landlord's maintenance duties regardless of lease, assignment, deed or security instrument.
- Cited by: `edu-rent-receipt-anti-waiver-wi`
- Term A.main `\bright to (?:receive|collect) (?:the )?rents?\b|\brights? (?:to rent|of the landlord to receive)\b`: 1 units: 708.11
- Term B.and `\A(?=[\s\S]*?(?:\b(?:receiv\w*|collect\w*) (?:the )?rents?\b))(?=[\s\S]*?(?:\b(?:obligations?|duties|duty|repairs?|maintain\w*|habitab\w*)\b…`: 4 units: 231.03, 321.62, 704.90, 823.23
- Term C.near `(?:\b(?:may not|cannot|shall not) be (?:separated|severed)\b|\bwithout (?:also )?assuming\b)[\s\S]{0,1200}(?:\b(?:rents?|obligations?)\b)|(?…`: 2 units: 198.14, DHS 120.12
- Term C.and `\A(?=[\s\S]*?(?:\b(?:may not|cannot|shall not) be (?:separated|severed)\b|\bwithout (?:also )?assuming\b))(?=[\s\S]*?(?:\b(?:rents?|obligati…`: 3 units: 198.14, 703.13, DHS 120.12
- Positive A: synthetic ('The obligations of the landlord may not be separated from the right to receive rent by any lease, assignment, deed or security instrument.') passed
- Positive B: synthetic ('Any person who collects the rent under an assignment or mortgage assumes the landlord's duty to maintain the premises for the tenant.') passed
- Positive C: synthetic ('The landlord's obligations cannot be severed from the rents.') passed

#### WIG-A-036 — rent payable in installments; installments as partial payments

- Run 2026-11-16T06:55:36+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: rent-installments: any Wisconsin rule on paying monthly rent in installments.
- Cited by: `edu-rent-installments-wi`
- Term A.main `\brent (?:shall be |may be |is )?(?:paid|payable) in (?:regular )?installments\b|\binstallment (?:rent )?payments? of rent\b|\bpartial payme…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\binstallments?\b))(?=[\s\S]*?(?:\brents?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?)\b))(?=[\s\S]*?(?:\b(?:landlords?…`: 11 units: 32.05, 185.995, 321.62, 411.103, 411.406, 411.508, 411.522, 411.523, 421.301, 429.104, 704.17
- Term C.near `(?:\b(?:weekly|biweekly|twice a month|semimonthly) (?:rent|payments?)\b|\bsplit (?:the )?rent\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|land…`: 1 units: ETF 52.02
- Term C.and `\A(?=[\s\S]*?(?:\b(?:weekly|biweekly|twice a month|semimonthly) (?:rent|payments?)\b|\bsplit (?:the )?rent\b))(?=[\s\S]*?(?:\b(?:tenants?|le…`: 2 units: 46.18, ETF 52.02
- Positive A: synthetic ('Monthly rent may be paid in installments under a written schedule, and installment payments of rent are not partial payments of rent.') passed
- Positive B: 704.17 ('fails to pay any installment of rent when due') passed
- Positive C: synthetic ('The landlord may accept weekly payments of the monthly rent.') passed

#### WIG-A-037 — mid-term rent increases and escalation clauses; retaliation safe harbours

- Run 2026-11-16T06:56:20+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: rent-escalation: Wisconsin rules on rent changes during a lease term and any retaliation safe harbour tied to a lease clause.
- Cited by: `edu-rent-escalation-wi`, `rent-escalation-la`, `rent-increase-midterm-ky`
- Term A.main `\b(?:rent )?escalation (?:clauses?|provisions?)\b|\bescalator clauses?\b`: 1 units: 62.15
- Term B.and `\A(?=[\s\S]*?(?:\bincreas\w* (?:the |in )?rents?\b|\brent increases?\b))(?=[\s\S]*?(?:\bretaliat\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|re…`: 1 units: 704.45
- Term C.near `(?:\bscheduled (?:rent )?increases?\b|\bconsumer price index\b|\bduring the term of the (?:lease|rental agreement)\b)[\s\S]{0,1200}(?:\brent…`: 4 units: 49.455, ATCP 125.01, ATCP 125.03, ATCP 125.05
- Term C.and `\A(?=[\s\S]*?(?:\bscheduled (?:rent )?increases?\b|\bconsumer price index\b|\bduring the term of the (?:lease|rental agreement)\b))(?=[\s\S]…`: 9 units: 49.455, 71.07, 71.28, ATCP 125.01, ATCP 125.03, ATCP 125.05, DCF 201.04, 2025 Wis. Act 15, 2025 Wis. Act 118
- Positive A: synthetic ('A landlord is not liable for retaliation for increasing rent under an escalation clause in a written lease.') passed
- Positive B: 704.45 ('a landlord in a residential tenancy may not increase rent, decrease services') passed
- Positive C: ATCP 125.03 ('may not be increased during the term of the rental agreement') passed

#### WIG-A-038 — rent payment reporting to consumer reporting agencies

- Run 2026-11-16T06:57:20+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-A-039; rerun identical.
- Question: rent-reporting: any Wisconsin rule on reporting rent payments to credit bureaus (offer, opt-in, notice).
- Cited by: `edu-no-rent-reporting-rule-wi`
- Term A.main `\brent(?:al)? (?:payment )?reporting\b|\bpositive rent(?:al)? (?:payment )?(?:history|reporting)\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:consumer reporting agenc\w*|credit bureaus?|credit reporting agenc\w*)\b))(?=[\s\S]*?(?:\brent(?:s|al)?\b))(?=[\s\S]*?(…`: 1 units: ATCP 134.02
- Term C.near `(?:\breport\w* (?:the |a )?(?:late|unpaid|on-time|timely) (?:rent|payments?)\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|renters?|landlords?)\…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\breport\w* (?:the |a )?(?:late|unpaid|on-time|timely) (?:rent|payments?)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|l…`: 0 units
- Positive A: synthetic ('A landlord of 5 or more units shall offer positive rent reporting to each tenant.') passed
- Positive B: synthetic ('A landlord who reports a tenant's rent payments to a consumer reporting agency shall notify the tenant in writing.') FAILED (and pattern does not match synthetic)
- Positive C: synthetic ('Before a landlord reports late rent, the tenant must be notified.') passed

#### WIG-A-039 — rent payment reporting to consumer reporting agencies

- Run 2026-11-16T06:57:47+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-A-038 (term B synthetic positive failed ('reports a' did not match 'report... to|of'); report word widened); rerun identical.
- Question: rent-reporting: any Wisconsin rule on reporting rent payments to credit bureaus (offer, opt-in, notice).
- Cited by: `edu-no-rent-reporting-rule-wi`, `edu-no-rent-reporting-rule-wi`
- Term A.main `\brent(?:al)? (?:payment )?reporting\b|\bpositive rent(?:al)? (?:payment )?(?:history|reporting)\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:consumer reporting agenc\w*|credit bureaus?|credit reporting agenc\w*)\b))(?=[\s\S]*?(?:\brent(?:s|al)?\b))(?=[\s\S]*?(…`: 3 units: 427.104, ATCP 134.02, ATCP 134.05
- Term C.near `(?:\breport\w* (?:the |a )?(?:late|unpaid|on-time|timely) (?:rent|payments?)\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|renters?|landlords?)\…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\breport\w* (?:the |a )?(?:late|unpaid|on-time|timely) (?:rent|payments?)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|l…`: 0 units
- Positive A: synthetic ('A landlord of 5 or more units shall offer positive rent reporting to each tenant.') passed
- Positive B: synthetic ('A landlord who reports a tenant's rent payments to a consumer reporting agency shall notify the tenant in writing.') passed
- Positive C: synthetic ('Before a landlord reports late rent, the tenant must be notified.') passed

#### WIG-A-040 — rent paid into court in eviction actions; mandatory counterclaims

- Run 2026-11-16T06:58:47+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: rent-into-court-counterclaim: Wisconsin rules requiring rent paid into court or counterclaims in eviction (possession) actions.
- Cited by: `edu-rent-into-court-counterclaim-wi`
- Term A.main `\b(?:pay|deposit)\w* (?:the |all )?(?:accrued |accruing )?rents? (?:into|with) (?:the )?(?:court|clerk|registry)\b|\bcourt registry\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:into court|with the clerk(?: of (?:circuit )?court)?|court registry|in escrow)\b))(?=[\s\S]*?(?:\brents?\b))(?=[\s\S]*?…`: 7 units: 32.05, 32.06, 66.1201, 254.595, 799.445, 801.05, 813.16
- Term C.near `(?:\bas a condition of (?:raising|asserting|presenting|filing) (?:a |any )?(?:defen[cs]es?|counterclaims?|jury)\b|\bcompulsory counterclaims…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\bas a condition of (?:raising|asserting|presenting|filing) (?:a |any )?(?:defen[cs]es?|counterclaims?|jury)\b|\bcompulsory …`: 0 units
- Positive A: synthetic ('The tenant shall pay the rent into court as it comes due while the eviction action is pending.') passed
- Positive B: synthetic ('In an eviction action the court may order the tenant to deposit accruing rent with the clerk of court as a condition of a jury trial.') passed
- Positive C: synthetic ('As a condition of raising any defense other than payment, the tenant must deposit the rent alleged due.') passed

#### WIG-A-041 — landlord statement of property tax share of rent; rent certificates

- Run 2026-11-16T07:00:33+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: property-tax-rent-disclosure: any landlord duty to state the property-tax share of rent or certify rent for a tax credit.
- Cited by: `edu-property-tax-rent-disclosure-wi`
- Term A.main `\brent certificates?\b`: 3 units: Tax 14.01, Tax 14.04, Tax 14.05
- Term B.and `\A(?=[\s\S]*?(?:\bproperty tax(?:es)?\b))(?=[\s\S]*?(?:\brents?\b))(?=[\s\S]*?(?:\b(?:statements?|disclos\w*|notif\w*|certif\w*)\b))(?=[\s\S…`: 8 units: 70.11, 71.07, 71.52, 71.55, 823.23, Tax 14.04, Tax 14.05, Wis. Const.
- Term C.near `(?:\b(?:portion|share|part|percentage) of (?:the |each )?rents?\b)[\s\S]{0,1200}(?:\b(?:property tax\w*|taxes)\b)|(?:\b(?:property tax\w*|ta…`: 1 units: Tax 14.05
- Term C.and `\A(?=[\s\S]*?(?:\b(?:portion|share|part|percentage) of (?:the |each )?rents?\b))(?=[\s\S]*?(?:\b(?:property tax\w*|taxes)\b))`: 2 units: 59.52, Tax 14.05
- Positive A: Tax 14.05 ('Rent Certificate') passed
- Positive B: synthetic ('Each landlord shall give each tenant an annual statement of the portion of the rent attributable to property taxes.') passed
- Positive C: synthetic ('The landlord shall disclose the share of the rent that pays property taxes.') passed

#### WIG-B-001 — rent demand bar (no rent demand or collection while unit is condemned/unfit/in violation)

- Run 2026-11-16T06:00:06+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any bar on demanding or collecting rent, or on serving a rent notice, while premises are placarded, unfit or in code violation. A = verb+rent term of art; B = condition + role word + rent (section-wide AND); C = everyday words (unsafe/unfit) near rent.
- Cited by: `edu-rent-demand-bar-wi`
- Term A.main `\b(?:demand|collect|charge|accept|receive|recover)(?:s|ed|ing)?\s+(?:any\s+|the\s+)?rents?\b`: 14 units: 74.53, 85.09, 107.04, 231.03, 231.13, 321.04, 411.523, 704.25, 704.29, 704.31, 704.90, 708.11 …
- Term B.and `\A(?=[\s\S]*?(?:\bplacard\w*|\bunfit for human habitation|\bcode violations?\b|\buntenantab\w*|\buninhabitab\w*))(?=[\s\S]*?(?:\b(?:tenants?…`: 10 units: 32.19, 66.0413, 340.01, 703.33, 704.07, 704.45, ATCP 134.04, ATCP 134.09, DCF 120.05, Trans 178.02
- Term C.near `(?:\b(?:unsafe|unfit|dangerous|unsanitary|uninhabitable|untenantable)\b)[\s\S]{0,1200}(?:\b(?:rents?|rented|renting)\b)|(?:\b(?:rents?|rente…`: 15 units: 32.19, 49.138, 66.0413, 66.1201, 101.11, 704.05, 704.07, 709.03, 799.40, 895.481, 895.519, 895.523 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:unsafe|unfit|dangerous|unsanitary|uninhabitable|untenantable)\b))(?=[\s\S]*?(?:\b(?:rents?|rented|renting)\b))`: 29 units: 32.05, 32.19, 49.138, 49.19, 59.52, 66.0413, 66.1201, 66.1333, 85.09, 97.01, 101.11, 120.12 …
- Positive A: 823.23 ('charge and collect rents derived from the residential property') passed
- Positive B: 704.07 ('rent abates to the extent the tenant is deprived of the full normal use of the premises') passed
- Positive C: 66.0413 ('Any person who rents, leases or occupies a building which has been condemned for human habitation') passed

#### WIG-B-002 — eviction service party (lease or tenant appoints agent to accept summons/notices)

- Run 2026-11-16T06:02:43+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any rule letting a lease or tenant name a person to accept eviction notices or the summons for the tenant. A = appointment term of art; B = service + tenant role word + lease (section-wide AND); C = everyday words (on the tenant's behalf) near summons/service.
- Cited by: `edu-eviction-service-party-wi`
- Term A.main `\bauthorized by appointment\b|\bdesignated agent for service\b|\bagents? for (?:the )?service of (?:process|summons)\b`: 36 units: 100.203, 101.985, 125.30, 125.535, 125.58, 139.34, 165.68, 180.1510, 184.13, 186.45, 202.17, 440.42 …
- Term B.and `\A(?=[\s\S]*?(?:\baccept(?:s|ed|ing)? service\b|\bservice of (?:legal )?(?:process|the summons|summons)\b))(?=[\s\S]*?(?:\b(?:tenants?|lesse…`: 15 units: 32.22, 48.99, 50.03, 66.0413, 226.025, 304.16, 441.51, 457.50, 457.70, 551.102, 704.02, 801.05 …
- Term C.near `(?:\bon (?:the |a )?(?:tenant|lessee|renter|defendant)'?s? behalf\b|\bfor the (?:tenant|lessee|defendant)\b)[\s\S]{0,1200}(?:\bsummons\b|\bs…`: 23 units: 23.55, 23.75, 66.0113, 66.0809, 102.87, 704.28, 778.25, 778.26, 799.25, 800.02, 800.035, 801.05 …
- Term C.and `\A(?=[\s\S]*?(?:\bon (?:the |a )?(?:tenant|lessee|renter|defendant)'?s? behalf\b|\bfor the (?:tenant|lessee|defendant)\b))(?=[\s\S]*?(?:\bsu…`: 40 units: 23.55, 23.75, 66.0113, 66.0809, 102.87, 106.50, 218.0171, 220.04, 304.06, 304.072, 421.301, 704.28 …
- Positive A: 801.11 ('upon an agent authorized by appointment or by law to accept service of the summons for the defendant') passed
- Positive A: 165.68 ('certifies the department to be the program participant’s designated agent for service of process') passed
- Positive B: ATCP 134.04 ('authorized to accept service of legal process') passed
- Positive C: synthetic ('A tenant may name in the lease a person to accept service of the summons on the tenant's behalf.') passed

#### WIG-B-003 — possession bond (bond to deliver possession; prejudgment possession on bond; confessed judgment for possession)

- Run 2026-11-16T06:04:15+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for an end-of-term possession bond, a bond giving the landlord possession before judgment, or a confessed judgment for possession. A = term of art; B = bond/undertaking + role words (incl. ch. 799 plaintiff/defendant) + possession/restitution (section-wide AND); C = confessed judgment near possession/premises.
- Cited by: `edu-possession-bond-wi`
- Term A.main `\bpossession bond\b|\bbond (?:for|to deliver|to surrender) (?:the )?possession\b|\bbond\w* (?:to|for) (?:deliver|surrender)\w* (?:up )?(?:th…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:bonds?|undertakings?|surety|sureties)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?|plaintiffs?|…`: 51 units: 5.05, 19.49, 27.065, 32.06, 49.849, 66.0114, 66.1201, 71.52, 71.80, 78.70, 84.41, 165.25 …
- Term C.near `(?:\bconfess\w* judgment\b|\bcognovit\b)[\s\S]{0,1200}(?:\bpossession\b|\bpremises\b)|(?:\bpossession\b|\bpremises\b)[\s\S]{0,1200}(?:\bconf…`: 3 units: 403.104, 704.44, ATCP 134.08
- Term C.and `\A(?=[\s\S]*?(?:\bconfess\w* judgment\b|\bcognovit\b))(?=[\s\S]*?(?:\bpossession\b|\bpremises\b))`: 3 units: 403.104, 704.44, ATCP 134.08
- Positive A: synthetic ('The tenant shall give a bond to deliver possession of the premises at the end of the term.') passed
- Positive B: 799.44 ('to give a bond in such amount and with such sureties as the court directs') passed
- Positive C: 704.44 ('confess judgment against the tenant') passed

#### WIG-B-004 — redemption / reinstatement of a terminated tenancy by paying rent

- Run 2026-11-16T06:05:38+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a tenant right to redeem or reinstate a terminated tenancy, or stop an eviction, by paying what is due. A = term of art; B = redeem/reinstate + role words (incl. ch. 799 plaintiff/defendant) + rent (AND); C = everyday pay-the-rent words with eviction/restitution (AND).
- Cited by: `edu-redemption-wi`
- Term A.main `\bredeem(?:s|ed|ing)? (?:the |a )?(?:tenancy|lease|leasehold|premises)\b|\bright to redeem\b|\breinstat\w* (?:the |a |his or her |its )?(?:t…`: 15 units: 49.854, 71.91, 75.19, 75.521, 409.623, 409.624, 425.103, 425.109, 425.208, 645.35, 645.81, 704.05 …
- Term B.and `\A(?=[\s\S]*?(?:\bredeem\w*|\bredemption\b|\breinstat\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|plaintiffs?|defendants?)\b))(?=[\s\S…`: 20 units: 20.438, 32.05, 32.06, 32.19, 59.52, 66.0823, 66.0825, 66.1201, 66.1333, 71.07, 71.25, 231.08 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:pa(?:y|ys|id|ying)|tender(?:s|ed|ing)?) (?:all |the |any )?(?:rent|amounts?|arrears)\b))(?=[\s\S]*?(?:\beviction\b|\bre…`: 18 units: 71.935, 234.01, 551.509, 704.05, 704.17, 799.40, 799.44, 799.445, 800.09, 814.29, 938.245, 938.32 …
- Positive A: 704.05 ('The tenant or any secured party has the right to redeem the property') passed
- Positive B: 704.90 ('a lessee may redeem personal property by paying') passed
- Positive C: 799.44 ('conditioned upon the defendant paying all rent or other charges due and unpaid at the entry of judgment') passed

#### WIG-B-005 — forfeiture of a lease and relief from forfeiture

- Run 2026-11-16T06:06:26+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; superseded by WIG-B-006; rerun identical.
- Question: Searches for a forfeiture-of-lease rule or relief from forfeiture. A = term of art; B = forfeit + role word + lease (section-wide AND); C = everyday words (excuse/relieve/restore) near forfeit.
- Cited by: `edu-forfeiture-redemption-wi`
- Term A.main `\brelie(?:f|ve[sd]?) (?:the (?:tenant|lessee) )?(?:against|from) (?:a |the )?forfeiture\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bforfeit\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))(?=[\s\S]*?(?:\bleases?\b|\brental agree…`: 28 units: 16.84, 23.33, 23.335, 29.889, 70.11, 100.195, 106.50, 107.01, 107.04, 114.40, 321.62, 341.04 …
- Term C.near `(?:\b(?:excus\w*|forgiv\w*|reliev\w*|restor\w*|undo\w*))[\s\S]{0,1200}(?:\bforfeit\w*)|(?:\bforfeit\w*)[\s\S]{0,1200}(?:\b(?:excus\w*|forgiv…`: 90 units: 5.05, 19.49, 20.875, 23.22, 23.24, 23.33, 23.75, 23.79, 24.33, 25.46, 29.03, 30.15 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:excus\w*|forgiv\w*|reliev\w*|restor\w*|undo\w*)))(?=[\s\S]*?(?:\bforfeit\w*))`: 157 units: 5.05, 19.49, 20.438, 20.540, 20.875, 23.09, 23.22, 23.24, 23.33, 23.335, 23.75, 23.79 …
- Positive A: synthetic ('The court may relieve the tenant from forfeiture of the lease upon payment of the rent due.') passed
- Positive B: 107.04 ('shall forfeit all right to his or her mines, diggings or range') passed
- Positive C: synthetic ('A tenant who pays all rent due may be restored and the forfeiture excused.') passed

#### WIG-B-006 — forfeiture of a lease and relief from forfeiture (C narrowed to tenancy words)

- Run 2026-11-16T06:07:23+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-B-005 (term C (excuse/relieve near forfeit) hit 157 units, nearly all civil-penalty forfeitures; replaced by an everyday 'lose the lease/tenancy' term so the hits can be read); rerun identical.
- Question: Rerun of WIG-B-005 with C as everyday words (lose/forfeit) near the lease/tenancy.
- Cited by: `edu-forfeiture-redemption-wi`
- Term A.main `\brelie(?:f|ve[sd]?) (?:the (?:tenant|lessee) )?(?:against|from) (?:a |the )?forfeiture\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bforfeit\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))(?=[\s\S]*?(?:\bleases?\b|\brental agree…`: 28 units: 16.84, 23.33, 23.335, 29.889, 70.11, 100.195, 106.50, 107.01, 107.04, 114.40, 321.62, 341.04 …
- Term C.near `(?:\blos(?:e|es|t|ing)\b|\bforfeit(?:s|ed|ing|ure)?\b)[\s\S]{0,1200}(?:\b(?:the |a |its |his or her |their )(?:lease|tenancy|leasehold)\b)|(…`: 9 units: 50.05, 100.18, 100.20, 107.04, 114.20, 411.529, 616.50, 704.05, 704.17
- Term C.and `\A(?=[\s\S]*?(?:\blos(?:e|es|t|ing)\b|\bforfeit(?:s|ed|ing|ure)?\b))(?=[\s\S]*?(?:\b(?:the |a |its |his or her |their )(?:lease|tenancy|leas…`: 34 units: 16.84, 20.438, 20.875, 32.05, 45.72, 50.05, 59.70, 59.84, 62.23, 66.1201, 70.11, 77.29 …
- Positive A: synthetic ('The court may relieve the tenant from forfeiture of the lease upon payment of the rent due.') passed
- Positive B: 107.04 ('shall forfeit all right to his or her mines, diggings or range') passed
- Positive C: synthetic ('A tenant who misses a payment does not lose the lease if the tenant pays within the time allowed.') passed

#### WIG-B-007 — benefit-delay defense / continuance (late social security, voucher or assistance payment) in eviction

- Run 2026-11-16T06:09:27+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for an eviction defense or continuance when a government benefit, voucher or assistance payment toward rent is late. A = term of art; B = benefit/assistance + role word + eviction (AND); C = everyday words (check was late) near rent/eviction.
- Cited by: `edu-social-security-defense-wi`
- Term A.main `\b(?:delay(?:s|ed)?|late) (?:in )?(?:the )?(?:receipt|payment|issuance|delivery) of (?:public assistance|benefits?|social security|supplemen…`: 3 units: 40.03, 40.08, Ins 3.46
- Term B.and `\A(?=[\s\S]*?(?:\bsocial security\b|\bsupplemental security income\b|\b(?:public|housing|rent|rental|emergency) assistance\b|\bvouchers?\b|\…`: 9 units: 20.438, 106.50, 799.40, DCF 120.05, PSC 113.0301, PSC 134.062, PSC 185.37, Wis. Const., SCR 72.01
- Term C.near `(?:\b(?:checks?|payments?|benefits?) (?:is |was |are |were )?(?:late|delayed|not received)\b)[\s\S]{0,1200}(?:\brent\b|\beviction\b)|(?:\bre…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:checks?|payments?|benefits?) (?:is |was |are |were )?(?:late|delayed|not received)\b))(?=[\s\S]*?(?:\brent\b|\beviction…`: 0 units
- Positive A: synthetic ('If the tenant shows that nonpayment resulted from a delay in the receipt of public assistance, the court shall continue the case.') passed
- Positive B: 799.40 ('if the tenant applies for emergency assistance under s. 49.138') passed
- Positive C: synthetic ('The tenant's benefit check was late, so the rent was not paid on time and the eviction was continued.') passed

#### WIG-B-008 — cold-weather vacate / absence notice (tenant notice before vacating in winter; freeze protection)

- Run 2026-11-16T06:11:16+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a tenant duty to warn the landlord before vacating or leaving a unit in cold weather, or any freeze-protection duty. A = term of art; B = vacate/abandon + tenant role word + freeze/cold weather (AND); C = everyday pipes near freeze.
- Cited by: `cold-weather-vacate-notice-wy`
- Term A.main `\bcold weather\b|\bfrozen pipes?\b|\bfreez\w* (?:of )?(?:the )?(?:pipes|plumbing|water (?:lines|pipes))\b|\bwinteriz\w*`: 22 units: 16.09, 295.51, ATCP 65.22, NR 110.255, NR 182.109, NR 19.78, NR 214.15, NR 243.14, NR 502.05, NR 503.10, NR 506.135, NR 514.06 …
- Term B.and `\A(?=[\s\S]*?(?:\bvacat\w*|\babandon\w*|\bmov(?:e|es|ing) out\b|\bremov(?:e|es|ing) from\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|re…`: 14 units: 62.23, 77.52, 108.02, 167.25, 895.52, ATCP 72.03, ATCP 93.050, DHS 83.46, Ins 4.10, NR 503.10, NR 809.545, PSC 113.0304 …
- Term C.near `(?:\bpipes?\b|\bplumbing\b)[\s\S]{0,1200}(?:\bfreez\w*|\bfrozen\b)|(?:\bfreez\w*|\bfrozen\b)[\s\S]{0,1200}(?:\bpipes?\b|\bplumbing\b)`: 42 units: 29.001, 196.595, 341.305, ATCP 70.24, ATCP 71.03, ATCP 79.14, ATCP 93.350, DCF 251.06, NR 110.13, NR 110.19, NR 123.21, NR 320.04 …
- Term C.and `\A(?=[\s\S]*?(?:\bpipes?\b|\bplumbing\b))(?=[\s\S]*?(?:\bfreez\w*|\bfrozen\b))`: 77 units: 29.001, 29.733, 77.29, 182.017, 196.595, 295.51, 341.305, 893.80, ATCP 29.54, ATCP 65.24, ATCP 70.24, ATCP 71.03 …
- Positive A: PSC 113.0304 ('need protection from cold weather disconnections') passed
- Positive B: synthetic ('During the heating season a tenant who intends to vacate or abandon the premises shall give the landlord notice so the pipes do not freeze.') passed
- Positive C: synthetic ('The plumbing pipes may freeze if the unit is left without heat.') passed

#### WIG-B-009 — notice to vacate: added terms, move-out forms, alterations while notice pending

- Run 2026-11-16T06:12:36+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for rules on what a notice to vacate or move-out form may add, and for a bar on alterations while a notice is pending. A = term of art; B = notice + role word + alteration/uninhabitable (AND); C = everyday notice near added terms.
- Cited by: `edu-notice-to-vacate-additional-terms-wi`
- Term A.main `\bmove[- ]out (?:forms?|agreements?|checklists?|notices?)\b|\bintent to vacate\b`: 1 units: DHS 157.32
- Term B.and `\A(?=[\s\S]*?(?:\bnotice to vacate\b|\bnotice terminating (?:the |a )?tenancy\b|\bnotice of termination\b))(?=[\s\S]*?(?:\b(?:tenants?|lesse…`: 6 units: 218.162, 707.50, 766.588, 766.589, DCF 120.05, NR 216.002
- Term C.near `(?:\bnotices?\b)[\s\S]{0,1200}(?:\b(?:extra|additional|new|added) (?:terms?|conditions?|obligations?|requirements?)\b)|(?:\b(?:extra|additio…`: 38 units: 16.855, 59.694, 66.1007, 66.1109, 66.1110, 70.75, 106.57, 134.49, 170.12, 224.72, 281.35, 281.36 …
- Term C.and `\A(?=[\s\S]*?(?:\bnotices?\b))(?=[\s\S]*?(?:\b(?:extra|additional|new|added) (?:terms?|conditions?|obligations?|requirements?)\b))`: 70 units: 16.855, 48.99, 49.45, 59.10, 59.694, 62.23, 66.0621, 66.1007, 66.1109, 66.1110, 66.1201, 70.75 …
- Positive A: synthetic ('The tenant signed a move-out form stating an intent to vacate on the last day of the month.') passed
- Positive B: synthetic ('While a notice to vacate is pending, the landlord may not alter the unit so that it becomes uninhabitable for the tenant.') passed
- Positive C: synthetic ('A notice may not impose additional terms on the tenant.') passed

#### WIG-B-010 — minors as tenants or eviction defendants (capacity to lease; naming minors in eviction)

- Run 2026-11-16T06:13:58+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for rules on minors' capacity to lease and on naming minors in eviction. A = terms of art for minors' contracts; B = minor + role word + eviction (AND); C = everyday child near named as defendant.
- Cited by: `edu-minor-tenant-filing-wi`
- Term A.main `\bdefense of infancy\b|\bdisaffirm\w*|\bemancipat\w*`: 21 units: 29.024, 45.03, 48.375, 48.9875, 54.46, 54.92, 54.93, 71.03, 71.10, 125.07, 157.06, 324.02 …
- Term B.and `\A(?=[\s\S]*?(?:\bminors?\b|\bunder (?:the age of )?18\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|defendants?)\b))(?=[\s\S]*?(?:\bevic…`: 5 units: 20.438, 106.50, 254.595, DCF 120.05, Wis. Const.
- Term C.near `(?:\bminors?\b|\bchild(?:ren)?\b|\bkids?\b)[\s\S]{0,1200}(?:\b(?:named?|naming|list(?:s|ed|ing)?) (?:as )?(?:a |the )?(?:defendants?|part(?:…`: 2 units: 32.06, 705.04
- Term C.and `\A(?=[\s\S]*?(?:\bminors?\b|\bchild(?:ren)?\b|\bkids?\b))(?=[\s\S]*?(?:\b(?:named?|naming|list(?:s|ed|ing)?) (?:as )?(?:a |the )?(?:defendan…`: 7 units: 32.05, 32.06, 102.17, 705.04, 812.11, 977.05, 2025 Wis. Act 33
- Positive A: 48.9875 ('The defense of infancy does not apply to any contract with a minor') passed
- Positive B: synthetic ('A landlord may not name a minor as a defendant in an eviction action against the tenant.') passed
- Positive C: synthetic ('The child of a tenant may not be named as a defendant.') passed

#### WIG-B-011 — tenant bankruptcy and eviction/writ (state rule)

- Run 2026-11-16T06:15:49+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any Wisconsin rule on how a tenant's bankruptcy affects an eviction, writ of restitution or the lease. A = term of art; B = bankruptcy + role word + eviction/writ (AND); C = bankrupt near rent/lease/tenant.
- Cited by: `edu-tenant-bankruptcy-wi`
- Term A.main `\bautomatic stay\b|\bstay in bankruptcy\b`: 11 units: 50.05, 66.0809, 103.06, 808.07, 809.109, 812.41, ATCP 162.04, ATCP 162.05, Trans 100.12, Trans 100.18, Trans 128.10
- Term B.and `\A(?=[\s\S]*?(?:\bbankrupt\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?|plaintiffs?|defendants?)\b))(?=[\s\S]*?(?:\…`: 1 units: 427.104
- Term C.near `(?:\bbankrupt\w*)[\s\S]{0,1200}(?:\b(?:rents?|leases?|tenancy|tenants?)\b)|(?:\b(?:rents?|leases?|tenancy|tenants?)\b)[\s\S]{0,1200}(?:\bban…`: 13 units: 66.0809, 100.18, 100.20, 100.30, 214.04, 293.37, 295.47, 551.201, DWD 115.01, Game 5.06, NR 132.107, Tax 11.91 …
- Term C.and `\A(?=[\s\S]*?(?:\bbankrupt\w*))(?=[\s\S]*?(?:\b(?:rents?|leases?|tenancy|tenants?)\b))`: 29 units: 66.0809, 100.18, 100.20, 100.30, 108.02, 125.33, 178.0102, 179.0102, 183.0102, 214.04, 218.0133, 292.11 …
- Positive A: 66.0809 ('was subject to the automatic stay in bankruptcy court') passed
- Positive B: synthetic ('If the defendant tenant files a bankruptcy petition, the sheriff shall suspend execution of the writ of restitution in the eviction.') passed
- Positive C: synthetic ('A tenant who files for bankruptcy remains liable for rent.') passed

#### WIG-B-012 — owner move-in / owner-occupancy termination of a tenancy

- Run 2026-11-16T06:17:57+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a statute giving or limiting a landlord's right to end a tenancy so the owner or a relative can move in. A = term of art; B = own use/family + role word + terminate (AND); C = everyday move in near end/terminate.
- Cited by: `owner-occupancy-termination-ar`
- Term A.main `\bowner[- ]occup\w*|\bowner move[- ]in\b|\bpersonal (?:use|occupancy) of the (?:owner|landlord)\b`: 52 units: 29.336, 32.19, 32.197, 62.17, 62.237, 66.0628, 66.1105, 66.1107, 66.1333, 71.07, 74.21, 75.35 …
- Term B.and `\A(?=[\s\S]*?(?:\bown (?:use|occupancy)\b|\boccupy the (?:premises|dwelling|unit|property) (?:as|for) (?:his|her|its|their|a) (?:own )?(?:re…`: 3 units: 218.0116, NR 670.001, Wis. Const.
- Term C.near `(?:\b(?:move|moves|moving) (?:in|into)\b|\blive (?:in|there)\b)[\s\S]{0,1200}(?:\bterminat\w*|\bend (?:the|a) (?:lease|tenancy)\b)|(?:\bterm…`: 8 units: 46.287, 49.453, 55.18, 108.04, DCF 59.04, DHS 10.13, DHS 10.55, PI 36.09
- Term C.and `\A(?=[\s\S]*?(?:\b(?:move|moves|moving) (?:in|into)\b|\blive (?:in|there)\b))(?=[\s\S]*?(?:\bterminat\w*|\bend (?:the|a) (?:lease|tenancy)\b…`: 18 units: 41.11, 46.287, 49.19, 49.453, 55.18, 59.69, 62.23, 108.04, 304.16, 767.41, 822.21, DCF 120.05 …
- Positive A: ATCP 134.04 ('This subsection does not apply to an owner-occupied structure containing no more than 4 dwelling units') passed
- Positive B: synthetic ('A landlord may terminate the tenancy if a member of the landlord's immediate family will occupy the dwelling as a residence.') passed
- Positive C: synthetic ('The owner may end the lease so the owner can move into the home.') passed

#### WIG-B-013 — assumed business name: filing duty and bar on suing

- Run 2026-11-16T06:19:32+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Item 12 (general-statute topics): whether Wisconsin requires filing an assumed or trade name and bars suit without it. A = term of art; B = name + may-not-maintain (no tenancy word); C = name + role word + file/register (AND); D = everyday business name near register/file.
- Cited by: `edu-entity-landlord-court-representation-wi`, `edu-confirmed-absences-outside-title-wi`
- Term A.main `\bassumed (?:business )?names?\b|\bfictitious (?:business )?names?\b|\bdoing business as\b|\bd/b/a\b`: 79 units: 11.1303, 13.48, 19.55, 49.32, 71.78, 78.73, 94.67, 100.12, 178.0121, 178.0902, 178.0906, 178.0907 …
- Term B.and `\A(?=[\s\S]*?(?:\bassumed (?:business )?names?\b|\bfictitious (?:business )?names?\b|\btrade names?\b|\bdoing business as\b))(?=[\s\S]*?(?:\…`: 1 units: 218.0116
- Term C.and `\A(?=[\s\S]*?(?:\bassumed (?:business )?names?\b|\bfictitious (?:business )?names?\b|\btrade names?\b|\bbusiness names?\b))(?=[\s\S]*?(?:\b(…`: 43 units: 71.01, 71.22, 73.03, 98.16, 100.18, 125.04, 126.56, 132.01, 218.0101, 218.0116, 218.10, 341.14 …
- Term D.near `(?:\bbusiness names?\b|\bnames? under which\b)[\s\S]{0,1200}(?:\bregist\w*|\bfil(?:e|es|ed|ing)\b)|(?:\bregist\w*|\bfil(?:e|es|ed|ing)\b)[\s…`: 71 units: 59.08, 73.03, 77.52, 77.997, 77.9971, 95.51, 100.203, 102.315, 126.11, 126.26, 126.41, 126.56 …
- Term D.and `\A(?=[\s\S]*?(?:\bbusiness names?\b|\bnames? under which\b))(?=[\s\S]*?(?:\bregist\w*|\bfil(?:e|es|ed|ing)\b))`: 90 units: 59.08, 73.03, 77.52, 77.997, 77.9971, 84.072, 95.51, 98.16, 100.203, 102.315, 126.11, 126.26 …
- Positive A: 183.0903 ('a fictitious name adopted pursuant to s. 183.0906') passed
- Positive B: synthetic ('A person doing business under an assumed name may not maintain an action until it files a certificate of assumed name.') passed
- Positive C: synthetic ('A landlord who uses a trade name shall file a registration of the name.') passed
- Positive D: synthetic ('Anyone using a business name must register it before filing suit.') passed

#### WIG-B-014 — tenant duty to notify landlord of adverse proceedings / claims against the property

- Run 2026-11-16T06:23:13+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a tenant duty to tell the landlord of proceedings or adverse claims against the property. A = term of art; B = tenant must notify near proceeding/summons; C = everyday papers near forward to the landlord.
- Cited by: `edu-adverse-proceeding-notice-wi`
- Term A.main `\badverse (?:claims?|proceedings?)\b|\bproceedings? to recover (?:the )?(?:possession|premises|property)\b`: 22 units: 54.852, 244.52, 407.603, 408.102, 408.105, 408.108, 408.109, 408.110, 408.115, 408.302, 408.303, 408.304 …
- Term B.near `(?:\b(?:tenants?|lessees?|renters?|occupants?) (?:shall|must) (?:promptly |immediately )?(?:notify|inform|forward|deliver|give notice)\w*)[\…`: 3 units: 411.516, 799.40, DCF 120.05
- Term B.and `\A(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|occupants?) (?:shall|must) (?:promptly |immediately )?(?:notify|inform|forward|deliver|give …`: 3 units: 411.516, 799.40, DCF 120.05
- Term C.near `(?:\b(?:papers?|summons|lawsuits?|court documents?)\b)[\s\S]{0,1200}(?:\b(?:pass|send|give|forward|deliver)\w* (?:it |them |the \w+ )?(?:on …`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:papers?|summons|lawsuits?|court documents?)\b))(?=[\s\S]*?(?:\b(?:pass|send|give|forward|deliver)\w* (?:it |them |the \…`: 4 units: 32.05, 84.30, 93.07, 632.69
- Positive A: synthetic ('If the tenant receives notice of any proceeding to recover the premises, the tenant shall inform the landlord.') passed
- Positive B: synthetic ('The tenant shall promptly notify the landlord of any summons or proceeding affecting the property.') passed
- Positive C: synthetic ('A tenant who receives court papers about the building must forward them to the landlord.') passed

#### WIG-B-015 — landlord duty to cooperate with law enforcement (crime-free programs, information to police)

- Run 2026-11-16T06:24:21+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any duty on a landlord to cooperate with law enforcement or join a crime-free program. A = term of art; B = police + landlord + tenant + cooperate/provide information (AND); C = everyday help near police.
- Cited by: `edu-law-enforcement-cooperation-wi`
- Term A.main `\bcrime[- ]free (?:housing|multi-?housing|leases?|addend\w*|programs?)\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\blaw enforcement (?:agency|agencies|officers?)\b|\bpolice\b|\bsheriffs?\b))(?=[\s\S]*?(?:\b(?:landlords?|lessors?|property …`: 6 units: 66.1105, 106.50, 632.977, 973.20, Wis. Const., 2025 Wis. Act 90
- Term C.near `(?:\b(?:help|helps|assist|assists|cooperat\w*|work with)\b)[\s\S]{0,1200}(?:\bpolice\b)|(?:\bpolice\b)[\s\S]{0,1200}(?:\b(?:help|helps|assis…`: 59 units: 13.48, 19.32, 19.35, 23.33, 27.01, 29.921, 36.11, 46.90, 48.981, 51.30, 51.45, 55.043 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:help|helps|assist|assists|cooperat\w*|work with)\b))(?=[\s\S]*?(?:\bpolice\b))`: 134 units: 13.48, 16.84, 19.32, 19.35, 20.438, 20.540, 23.33, 23.335, 27.01, 29.604, 29.921, 36.11 …
- Positive A: synthetic ('A municipality may require landlords to join a crime-free housing program.') passed
- Positive B: synthetic ('A landlord shall cooperate with a law enforcement agency and provide information about a tenant on request.') passed
- Positive C: synthetic ('Owners must help the police when a crime is reported in a rental building.') passed

#### WIG-B-016 — eminent domain: lease termination, rent abatement or award allocation on a taking

- Run 2026-11-16T06:25:46+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a statute that ends a lease, abates rent or allocates the award when leased property is condemned. A = term of art; B = condemnation + role word + rent + terminate/abate/apportion (AND); C = everyday taken for public use near lease/rent.
- Cited by: `eminent-domain-vi`
- Term A.main `\bcondemnation awards?\b|\bapportion\w* (?:of )?(?:the )?(?:award|compensation)\b`: 12 units: 32.05, 32.06, 32.075, 32.28, 59.40, 84.30, 703.19, 801.18, 854.08, 893.80, Jus 11.05, Tax 2.31
- Term B.and `\A(?=[\s\S]*?(?:\bcondemn\w*|\beminent domain\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|lessors?|landlords?)\b))(?=[\s\S]*?(?:\brents?\b))(?=[…`: 12 units: 32.05, 32.06, 32.19, 66.0413, 66.0823, 66.0825, 66.1201, 182.71, ATCP 134.09, Adm 92.68, Adm 92.90, Wis. Const.
- Term C.near `(?:\btaken (?:for|by) (?:a )?(?:public (?:use|purpose)|the (?:government|state|city|county))\b|\bpublic taking\b)[\s\S]{0,1200}(?:\b(?:lease…`: 3 units: 32.19, 66.1209, Wis. Const.
- Term C.and `\A(?=[\s\S]*?(?:\btaken (?:for|by) (?:a )?(?:public (?:use|purpose)|the (?:government|state|city|county))\b|\bpublic taking\b))(?=[\s\S]*?(?…`: 3 units: 32.19, 66.1209, Wis. Const.
- Positive A: synthetic ('The lease provided that the lessor would receive the entire condemnation award.') passed
- Positive B: 32.19 ('tenant-occupant of a dwelling') passed
- Positive C: synthetic ('If the premises are taken for public use, the lease ends and the rent is apportioned.') passed

#### WIG-B-017 — construction liens for tenant improvements (landlord interest, notice of nonresponsibility, lease no-lien terms)

- Run 2026-11-16T06:27:20+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for rules on whether a tenant's construction work can lien the landlord's interest and whether a lease can prevent it. A = term of art; B = lien + role word + lease (AND); C = contractor near tenant work.
- Cited by: `edu-construction-liens-wi`
- Term A.main `\bnon-?responsibility\b`: 1 units: 628.46
- Term B.and `\A(?=[\s\S]*?(?:\bconstruction liens?\b|\bmechanic'?s liens?\b|\bliens? (?:for|on|upon) (?:the |an )?improvement))(?=[\s\S]*?(?:\b(?:tenants…`: 1 units: 66.1103
- Term C.near `(?:\b(?:contractors?|suppliers?|subcontractors?)\b)[\s\S]{0,1200}(?:\b(?:tenant|lessee)'?s? (?:work|improvements?|alterations?)\b|\bwork (?:…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:contractors?|suppliers?|subcontractors?)\b))(?=[\s\S]*?(?:\b(?:tenant|lessee)'?s? (?:work|improvements?|alterations?)\b…`: 0 units
- Positive A: synthetic ('An owner who did not contract for the improvement may record a notice of nonresponsibility.') passed
- Positive B: synthetic ('A construction lien for work ordered by a lessee attaches only to the leasehold unless the lessor consented.') passed
- Positive C: synthetic ('Contractors performing tenant improvements must be told the landlord will not pay.') passed

#### WIG-B-018 — special district disclosure or representation to tenants

- Run 2026-11-16T06:28:46+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a duty to tell a tenant that property lies in a special district or to have the tenant acknowledge it. A = district terms of art; B = district/assessment + tenant role word + disclose/notify (AND); C = everyday district near tell the tenant.
- Cited by: `edu-special-district-representation-wi`
- Term A.main `\bbusiness improvement districts?\b|\bneighborhood improvement districts?\b|\bspecial (?:taxing|assessment|purpose|service) (?:districts?|ar…`: 123 units: 5.02, 6.97, 8.55, 10.01, 16.97, 19.32, 19.42, 20.540, 20.931, 20.932, 23.17, 23.24 …
- Term B.and `\A(?=[\s\S]*?(?:\bbusiness improvement districts?\b|\bneighborhood improvement districts?\b|\bspecial (?:taxing|assessment|purpose|service) …`: 36 units: 5.02, 13.48, 33.32, 33.46, 60.23, 60.85, 62.71, 65.90, 66.0101, 66.0435, 66.0617, 66.0627 …
- Term C.near `(?:\bdistricts?\b)[\s\S]{0,1200}(?:\b(?:tell|told|inform\w*|notif\w*|disclos\w*) (?:the |a |any |each )?(?:tenants?|renters?|lessees?|reside…`: 5 units: 62.23, 118.51, 118.52, PI 36.08, PI 36.17
- Term C.and `\A(?=[\s\S]*?(?:\bdistricts?\b))(?=[\s\S]*?(?:\b(?:tell|told|inform\w*|notif\w*|disclos\w*) (?:the |a |any |each )?(?:tenants?|renters?|less…`: 10 units: 23.0917, 59.69, 60.61, 62.23, 66.0104, 66.1001, 118.51, 118.52, PI 36.08, PI 36.17
- Positive A: 66.1109 ('business improvement district') passed
- Positive B: synthetic ('Before leasing, the landlord shall disclose to the tenant that the property is in a business improvement district subject to special assessments.') passed
- Positive C: synthetic ('An owner must tell each tenant that the building lies in a special district.') passed

#### WIG-B-019 — term change / rent increase notice for periodic tenancies

- Run 2026-11-16T06:30:03+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a notice period to change rent or other terms of a periodic tenancy. A = term of art; B = increase/change + role word + periodic tenancy (AND); C = everyday raise near rent.
- Cited by: `edu-term-change-notice-wi`
- Term A.main `\bnotice of (?:a |any )?(?:rent increase|change in (?:the )?terms?|increase in (?:the )?rent|modification)\b|\brent increases?\b`: 6 units: 293.55, 349.11, 704.45, Adm 92.01, NR 131.120, NR 132.120
- Term B.and `\A(?=[\s\S]*?(?:\bincreas\w* (?:the |in )?rent\b|\brent increase\w*|\bchang\w* (?:in |to |of )?(?:the )?(?:terms?|rules?|conditions?) of (?:…`: 0 units
- Term C.near `(?:\b(?:raise|raises|raising|raised|go up|goes up|higher)\b)[\s\S]{0,1200}(?:\brents?\b)|(?:\brents?\b)[\s\S]{0,1200}(?:\b(?:raise|raises|ra…`: 23 units: 66.1201, 66.1331, 66.1333, 106.52, 107.03, 107.04, 120.10, 182.71, 227.53, 632.32, 704.17, 704.29 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:raise|raises|raising|raised|go up|goes up|higher)\b))(?=[\s\S]*?(?:\brents?\b))`: 55 units: 20.540, 23.335, 32.05, 32.06, 36.25, 38.04, 42.01, 49.455, 66.1201, 66.1331, 66.1333, 70.11 …
- Positive A: synthetic ('The landlord shall give 30 days' notice of a rent increase to a month-to-month tenant.') passed
- Positive B: synthetic ('A landlord may increase the rent of a month-to-month tenant only after written notice to the tenant.') passed
- Positive C: synthetic ('The landlord may not raise the rent without notice.') passed

#### WIG-B-020 — seasonal tenancy (seasonal rentals, vacation rentals, season-limited occupancy)

- Run 2026-11-16T06:31:39+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-B-021; rerun identical.
- Question: Searches for any rule on seasonal tenancies. A = term of art; B = season word + role word + lease/tenancy (AND); C = everyday season near rent/lease.
- Cited by: `edu-seasonal-tenancy-wi`
- Term A.main `\bseasonal (?:tenan\w*|rentals?|occupan\w*|leases?|dwellings?|basis|residents?)\b|\bvacation rentals?\b`: 21 units: 23.335, 30.01, 30.12, 86.195, 86.196, 125.09, ATCP 125.01, Adm 92.54, Ins 4.01, NR 10.22, NR 219.04, NR 320.03 …
- Term B.and `\A(?=[\s\S]*?(?:\bseasonal\w*|\bsummer\b|\bwinter\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?|occupants?)\b))(?=[\s…`: 10 units: 23.33, 23.335, 70.11, 71.07, 100.20, 108.02, ATCP 125.01, KB 1.03, NR 12.10, NR 487.02
- Term C.near `(?:\b(?:summer|winter|season|seasons)\b)[\s\S]{0,1200}(?:\b(?:rents?|rental|tenancy|leases?)\b)|(?:\b(?:rents?|rental|tenancy|leases?)\b)[\s…`: 25 units: 29.164, 29.889, 66.0104, 108.02, 118.05, 121.004, 706.11, ATCP 134.04, ATCP 160.02, ATCP 35.04, ATCP 78.03, NR 1.17 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:summer|winter|season|seasons)\b))(?=[\s\S]*?(?:\b(?:rents?|rental|tenancy|leases?)\b))`: 63 units: 20.360, 20.438, 20.875, 23.09, 23.321, 23.33, 23.335, 27.05, 29.164, 29.889, 36.29, 66.0104 …
- Positive A: ATCP 125.01 ('Occupied on a strictly seasonal basis') passed
- Positive B: synthetic ('A seasonal tenancy for the summer ends without notice when the lease term expires, and the tenant must vacate.') passed
- Positive C: synthetic ('The cabin is rented for the summer season only.') FAILED (near pattern does not match synthetic)

#### WIG-B-021 — seasonal tenancy (seasonal rentals, vacation rentals, season-limited occupancy)

- Run 2026-11-16T06:32:19+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-B-020 (term C positive failed: 'rented' not matched by rents?/rental; pattern widened to rent(?:s|ed|ing|als?)?); rerun identical.
- Question: Searches for any rule on seasonal tenancies. A = term of art; B = season word + role word + lease/tenancy (AND); C = everyday season near rent/lease.
- Cited by: `edu-seasonal-tenancy-wi`
- Term A.main `\bseasonal (?:tenan\w*|rentals?|occupan\w*|leases?|dwellings?|basis|residents?)\b|\bvacation rentals?\b`: 21 units: 23.335, 30.01, 30.12, 86.195, 86.196, 125.09, ATCP 125.01, Adm 92.54, Ins 4.01, NR 10.22, NR 219.04, NR 320.03 …
- Term B.and `\A(?=[\s\S]*?(?:\bseasonal\w*|\bsummer\b|\bwinter\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?|occupants?)\b))(?=[\s…`: 10 units: 23.33, 23.335, 70.11, 71.07, 100.20, 108.02, ATCP 125.01, KB 1.03, NR 12.10, NR 487.02
- Term C.near `(?:\b(?:summer|winter|season|seasons)\b)[\s\S]{0,1200}(?:\b(?:rent(?:s|ed|ing|als?)?|tenancy|leases?|leased)\b)|(?:\b(?:rent(?:s|ed|ing|als?…`: 33 units: 29.164, 29.312, 29.889, 66.0104, 108.02, 118.05, 121.004, 706.11, ATCP 134.04, ATCP 160.02, ATCP 35.04, ATCP 78.03 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:summer|winter|season|seasons)\b))(?=[\s\S]*?(?:\b(?:rent(?:s|ed|ing|als?)?|tenancy|leases?|leased)\b))`: 75 units: 20.360, 20.438, 20.875, 23.09, 23.321, 23.33, 23.335, 27.05, 29.164, 29.312, 29.889, 31.02 …
- Positive A: ATCP 125.01 ('Occupied on a strictly seasonal basis') passed
- Positive B: synthetic ('A seasonal tenancy for the summer ends without notice when the lease term expires, and the tenant must vacate.') passed
- Positive C: synthetic ('The cabin is rented for the summer season only.') passed

#### WIG-B-022 — portfolio thresholds (duties or exemptions by number of units a landlord owns; large-investor limits)

- Run 2026-11-16T06:34:21+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for duties or exemptions keyed to how many units a landlord owns, and limits on large-investor home purchases. A = term of art; B = units owned + role word + rent/lease/tenant (AND); C = everyday large investor near homes.
- Cited by: `edu-portfolio-thresholds-wi`, `edu-confirmed-absences-habitability-wi`
- Term A.main `\b(?:owns?|owning|owned) (?:more than |fewer than |at least |no more than |not more than )?(?:\d+|one|two|three|four|five|six|ten) (?:or (?:…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:number|total) of (?:dwelling|rental|residential) units (?:owned|managed|held)\b|\bunits? (?:owned|managed) by (?:the|a|…`: 0 units
- Term C.near `(?:\b(?:large|institutional|corporate) (?:investors?|landlords?|owners?|buyers?)\b)[\s\S]{0,1200}(?:\b(?:homes?|houses?|dwellings?|single-fa…`: 1 units: 108.02
- Term C.and `\A(?=[\s\S]*?(?:\b(?:large|institutional|corporate) (?:investors?|landlords?|owners?|buyers?)\b))(?=[\s\S]*?(?:\b(?:homes?|houses?|dwellings…`: 2 units: 108.02, 632.69
- Positive A: synthetic ('A landlord who owns more than 4 dwelling units shall register with the department.') passed
- Positive B: synthetic ('If the total number of rental units owned by the landlord exceeds 10, the landlord shall give each tenant the notice.') passed
- Positive C: synthetic ('Large investors may not buy more single-family homes in the county.') passed

#### WIG-B-023 — penalty for denying a service or assistance animal (housing)

- Run 2026-11-16T06:35:28+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a civil or criminal penalty on denying a person with a disability a service or assistance animal, in housing or public accommodations. A = terms of art; B = animal + housing role word + penalty (AND); C = everyday refuse near guide/service animal.
- Cited by: `edu-service-animal-denial-penalty-wi`
- Term A.main `\bservice animals?\b|\bguide dogs?\b|\bsignal dogs?\b|\bhearing dogs?\b|\bassistance animals?\b|\bemotional support animals?\b`: 11 units: 106.50, 106.52, 174.055, 346.26, 440.45, Cos 3.01, DCF 251.07, DCF 252.08, KB 1.05, NR 45.06, UWS 18.08
- Term B.and `\A(?=[\s\S]*?(?:\bservice animals?\b|\bguide dogs?\b|\bsignal dogs?\b|\bhearing dogs?\b|\bassistance animals?\b|\bemotional support animals?…`: 2 units: 106.50, 106.52
- Term C.near `(?:\b(?:refus\w*|den(?:y|ies|ied|ying))\b)[\s\S]{0,1200}(?:\b(?:guide|service|helper|assistance|support) (?:dogs?|animals?)\b)|(?:\b(?:guide…`: 2 units: 106.50, 106.52
- Term C.and `\A(?=[\s\S]*?(?:\b(?:refus\w*|den(?:y|ies|ied|ying))\b))(?=[\s\S]*?(?:\b(?:guide|service|helper|assistance|support) (?:dogs?|animals?)\b))`: 2 units: 106.50, 106.52
- Positive A: 106.52 ('“Service animal” means a guide dog, signal dog, or other animal') passed
- Positive B: 106.50 ('An individual shall forfeit not less than $500 if he or she, for the purpose of obtaining housing, intentionally misrepresents') passed
- Positive C: synthetic ('No landlord may refuse to rent to a person who uses a guide dog.') passed

#### WIG-B-024 — student housing rules (dormitories, student tenants, institution-operated housing)

- Run 2026-11-16T06:36:34+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for rules specific to student housing. A = terms of art; B = student + role word + lease (AND); C = everyday campus near apartment/rent.
- Cited by: `edu-student-housing-wi`
- Term A.main `\bstudent (?:housing|tenants?|renters?|rentals?|apartments?)\b|\bdormitor(?:y|ies)\b|\bresidence halls?\b`: 58 units: 6.34, 13.48, 13.484, 36.09, 36.11, 36.25, 36.35, 38.14, 38.15, 38.23, 45.03, 46.035 …
- Term B.and `\A(?=[\s\S]*?(?:\bstudents?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))(?=[\s\S]*?(?:\bleases?\b|\brental agre…`: 10 units: 13.48, 70.11, 77.54, 108.02, 895.52, 995.55, Adm 92.68, Adm 92.70, Tax 14.05, Wis. Const.
- Term C.near `(?:\b(?:college|university|campus|school)\b)[\s\S]{0,1200}(?:\b(?:apartments?|rent(?:s|ed|al)?|leases?)\b)|(?:\b(?:apartments?|rent(?:s|ed|a…`: 142 units: 6.34, 13.48, 16.004, 16.54, 16.848, 16.85, 16.973, 16.993, 20.438, 20.540, 20.865, 20.901 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:college|university|campus|school)\b))(?=[\s\S]*?(?:\b(?:apartments?|rent(?:s|ed|al)?|leases?)\b))`: 267 units: 6.34, 11.0804, 13.48, 16.004, 16.40, 16.54, 16.705, 16.84, 16.848, 16.85, 16.973, 16.993 …
- Positive A: synthetic ('Student housing operated by a university is exempt from the rental rules.') passed
- Positive B: synthetic ('A landlord who leases to students shall give each student tenant a copy of the rental agreement.') passed
- Positive C: synthetic ('Apartments near the university are rented by the semester.') passed

#### WIG-B-025 — family child care in rental housing (landlord must allow; conditions)

- Run 2026-11-16T06:37:38+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a rule requiring or limiting a landlord's consent to a tenant's family child care home. A = term of art; B = child care + role word + lease/rental (AND); C = everyday babysitting near apartment/tenant.
- Cited by: `edu-family-child-care-wi`
- Term A.main `\bfamily child care homes?\b|\bin-home child care\b`: 7 units: 66.0101, 66.1017, 121.54, 121.545, DCF 202.02, DCF 202.04, DCF 202.08
- Term B.and `\A(?=[\s\S]*?(?:\bchild care\b|\bday care\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))(?=[\s\S]*?(?:\bleases?\b…`: 6 units: 66.0101, 70.11, 71.07, 980.08, DCF 120.05, Wis. Const.
- Term C.near `(?:\bbabysit\w*|\bwatch(?:es|ing)? (?:other )?(?:people'?s )?(?:children|kids)\b)[\s\S]{0,1200}(?:\b(?:apartments?|tenants?|landlords?|rent(…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\bbabysit\w*|\bwatch(?:es|ing)? (?:other )?(?:people'?s )?(?:children|kids)\b))(?=[\s\S]*?(?:\b(?:apartments?|tenants?|landl…`: 0 units
- Positive A: 66.1017 ('“Family child care home” means a dwelling licensed as a child care center') passed
- Positive B: synthetic ('A landlord may not prohibit a tenant from operating a licensed child care business in a rental unit under the lease.') passed
- Positive C: synthetic ('The tenant babysits neighbors' kids in the apartment.') passed

#### WIG-B-026 — domestic violence confidentiality (landlord duty to keep victim information or address private)

- Run 2026-11-16T06:38:44+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-B-027; rerun identical.
- Question: Searches for a landlord duty to keep a victim tenant's information or address confidential. A = terms of art; B = confidential/disclose + role word + abuse terms (AND); C = everyday keep private near victim.
- Cited by: `edu-dv-confidentiality-wi`
- Term A.main `\baddress confidentiality\b|\bassigned address\b`: 7 units: 66.0504, 165.68, 971.23, DCF 201.036, DHS 75.24, Trans 102.15, 2025 Wis. Act 150
- Term B.and `\A(?=[\s\S]*?(?:\bconfidential\w*|\bdisclos\w*))(?=[\s\S]*?(?:\b(?:landlords?|lessors?|property managers?|tenants?)\b))(?=[\s\S]*?(?:\bdomes…`: 4 units: 66.1201, 106.50, Wis. Const., 2025 Wis. Act 90
- Term C.near `(?:\b(?:keep|keeps|kept|keeping) (?:\w+ )?(?:private|secret|confidential)\b|\bshar(?:e|es|ed|ing)\b)[\s\S]{0,1200}(?:\bvictims?\b)|(?:\bvict…`: 21 units: 20.432, 84.10217, 106.50, 165.015, 165.29, 301.095, 343.237, 906.15, 940.45, 940.62, 943.017, 947.016 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:keep|keeps|kept|keeping) (?:\w+ )?(?:private|secret|confidential)\b|\bshar(?:e|es|ed|ing)\b))(?=[\s\S]*?(?:\bvictims?\b…`: 44 units: 13.48, 20.432, 20.438, 20.455, 20.875, 23.33, 36.11, 38.12, 49.89, 66.1333, 71.05, 84.10217 …
- Positive A: 165.68 ('may not refuse to use the assigned address for the program participant') FAILED (snippet not in unit text)
- Positive B: synthetic ('A landlord shall keep confidential any information a tenant provides about domestic abuse, sexual assault or stalking and may not disclose it.') passed
- Positive C: synthetic ('The landlord must keep the victim's information private and not share it.') passed

#### WIG-B-027 — domestic violence confidentiality (landlord duty to keep victim information or address private)

- Run 2026-11-16T06:39:15+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-B-026 (term A positive snippet mistyped ('may not refuse'); corrected to the statute's words); rerun identical.
- Question: Searches for a landlord duty to keep a victim tenant's information or address confidential. A = terms of art; B = confidential/disclose + role word + abuse terms (AND); C = everyday keep private near victim.
- Cited by: `edu-dv-confidentiality-wi`
- Term A.main `\baddress confidentiality\b|\bassigned address\b`: 7 units: 66.0504, 165.68, 971.23, DCF 201.036, DHS 75.24, Trans 102.15, 2025 Wis. Act 150
- Term B.and `\A(?=[\s\S]*?(?:\bconfidential\w*|\bdisclos\w*))(?=[\s\S]*?(?:\b(?:landlords?|lessors?|property managers?|tenants?)\b))(?=[\s\S]*?(?:\bdomes…`: 4 units: 66.1201, 106.50, Wis. Const., 2025 Wis. Act 90
- Term C.near `(?:\b(?:keep|keeps|kept|keeping) (?:\w+ )?(?:private|secret|confidential)\b|\bshar(?:e|es|ed|ing)\b)[\s\S]{0,1200}(?:\bvictims?\b)|(?:\bvict…`: 21 units: 20.432, 84.10217, 106.50, 165.015, 165.29, 301.095, 343.237, 906.15, 940.45, 940.62, 943.017, 947.016 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:keep|keeps|kept|keeping) (?:\w+ )?(?:private|secret|confidential)\b|\bshar(?:e|es|ed|ing)\b))(?=[\s\S]*?(?:\bvictims?\b…`: 44 units: 13.48, 20.432, 20.438, 20.455, 20.875, 23.33, 36.11, 38.12, 49.89, 66.1333, 71.05, 84.10217 …
- Positive A: 165.68 ('may refuse to use the assigned address for the program participant') passed
- Positive B: synthetic ('A landlord shall keep confidential any information a tenant provides about domestic abuse, sexual assault or stalking and may not disclose it.') passed
- Positive C: synthetic ('The landlord must keep the victim's information private and not share it.') passed

#### WIG-B-028 — deposit timing after a domestic abuse / sexual assault termination

- Run 2026-11-16T06:40:33+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; superseded by WIG-B-029; rerun identical.
- Question: Searches for a deposit-return rule tied to a domestic abuse, sexual assault or stalking termination. A = section cross-reference near deposit (window 1200, both orders); B = deposit + role word + abuse terms (AND); C = everyday victim near deposit/refund.
- Cited by: `edu-dv-deposit-timing-wi`
- Term A.main `\bs\. 704\.16\b[\s\S]{0,1200}\bdeposits?\b|\bdeposits?\b[\s\S]{0,1200}\bs\. 704\.16\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bsecurity deposits?\b|\bdeposits?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))(?=[\s\S]*?(?:\b…`: 5 units: 13.48, 66.1201, 106.50, 973.20, Wis. Const.
- Term C.near `(?:\b(?:victims?|abuse|abuser)\b)[\s\S]{0,1200}(?:\b(?:deposit|refund)s?\b)|(?:\b(?:deposit|refund)s?\b)[\s\S]{0,1200}(?:\b(?:victims?|abuse…`: 43 units: 20.432, 20.433, 20.875, 46.07, 46.49, 48.982, 71.05, 71.935, 100.20, 100.54, 102.85, 217.09 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:victims?|abuse|abuser)\b))(?=[\s\S]*?(?:\b(?:deposit|refund)s?\b))`: 85 units: 13.48, 20.385, 20.432, 20.433, 20.438, 20.540, 20.875, 36.11, 38.12, 38.24, 46.036, 46.07 …
- Positive A: synthetic ('If a tenant terminates under s. 704.16, the landlord shall return the security deposit within 21 days.') passed
- Positive B: synthetic ('A landlord shall return the security deposit of a tenant who ends the lease because of domestic abuse within 21 days after the tenant moves out.') passed
- Positive C: synthetic ('A victim who leaves early gets the deposit refund within three weeks.') passed

#### WIG-B-029 — deposit timing after a domestic abuse / sexual assault termination

- Run 2026-11-16T06:41:12+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-B-028 (term A used an inner length window inside a plain pattern; rewritten as a near term (both orders, window 1200)); rerun identical.
- Question: Searches for a deposit-return rule tied to a domestic abuse, sexual assault or stalking termination. A = section cross-reference near deposit (window 1200, both orders); B = deposit + role word + abuse terms (AND); C = everyday victim near deposit/refund.
- Cited by: `edu-dv-deposit-timing-wi`
- Term A.near `(?:\bs\. 704\.16\b)[\s\S]{0,1200}(?:\bdeposits?\b)|(?:\bdeposits?\b)[\s\S]{0,1200}(?:\bs\. 704\.16\b)`: 0 units
- Term A.and `\A(?=[\s\S]*?(?:\bs\. 704\.16\b))(?=[\s\S]*?(?:\bdeposits?\b))`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bsecurity deposits?\b|\bdeposits?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))(?=[\s\S]*?(?:\b…`: 5 units: 13.48, 66.1201, 106.50, 973.20, Wis. Const.
- Term C.near `(?:\b(?:victims?|abuse|abuser)\b)[\s\S]{0,1200}(?:\b(?:deposit|refund)s?\b)|(?:\b(?:deposit|refund)s?\b)[\s\S]{0,1200}(?:\b(?:victims?|abuse…`: 43 units: 20.432, 20.433, 20.875, 46.07, 46.49, 48.982, 71.05, 71.935, 100.20, 100.54, 102.85, 217.09 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:victims?|abuse|abuser)\b))(?=[\s\S]*?(?:\b(?:deposit|refund)s?\b))`: 85 units: 13.48, 20.385, 20.432, 20.433, 20.438, 20.540, 20.875, 36.11, 38.12, 38.24, 46.036, 46.07 …
- Positive A: synthetic ('If a tenant terminates under s. 704.16, the landlord shall return the security deposit within 21 days.') passed
- Positive B: synthetic ('A landlord shall return the security deposit of a tenant who ends the lease because of domestic abuse within 21 days after the tenant moves out.') passed
- Positive C: synthetic ('A victim who leaves early gets the deposit refund within three weeks.') passed

#### WIG-B-030 — infirmity termination (tenant incapacity, move to care facility ends tenancy)

- Run 2026-11-16T06:43:43+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a rule ending a tenancy, or letting a tenant end it, on the tenant's incapacity or admission to a care facility. A = term of art; B = care facility + tenant + terminate + lease (AND); C = everyday move to a nursing home near lease/rent.
- Cited by: `edu-infirmity-termination-wi`
- Term A.main `\bincapacity to contract\b|\b(?:physical|mental) (?:infirmity|incapacity)\b`: 14 units: 46.001, 46.03, 49.19, 54.852, 105.115, 111.32, 757.81, 767.313, 978.045, DOC 373.22, DWD 272.06, UWS 11.015 …
- Term B.and `\A(?=[\s\S]*?(?:\bnursing homes?\b|\bassisted living\b|\bcare facilit\w*|\bcommunity-based residential facilit\w*|\bresidential care apartme…`: 3 units: 13.48, 77.54, Wis. Const.
- Term C.near `(?:\b(?:move|moves|moving|moved|admitted|admission) (?:in)?to (?:a |an )?(?:nursing home|care facility|assisted living|hospital)\b)[\s\S]{0,…`: 2 units: Tax 14.05, Tax 14.06
- Term C.and `\A(?=[\s\S]*?(?:\b(?:move|moves|moving|moved|admitted|admission) (?:in)?to (?:a |an )?(?:nursing home|care facility|assisted living|hospital…`: 2 units: Tax 14.05, Tax 14.06
- Positive A: synthetic ('A tenancy at will ends on notice of a party's incapacity to contract.') passed
- Positive B: synthetic ('A tenant admitted to a nursing home may terminate the lease or rental agreement on 30 days' notice and the tenancy ends.') passed
- Positive C: synthetic ('If the tenant moves into a nursing home, the lease ends and no further rent is due.') passed

#### WIG-B-031 — environmental event / natural disaster termination of a residential tenancy

- Run 2026-11-16T06:44:52+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a rule letting a landlord or tenant end a residential tenancy because of an environmental event or declared disaster. A = term of art; B = event + role word + terminate + lease (AND); C = everyday flood/fire near end the lease.
- Cited by: `edu-environmental-event-termination-wi`
- Term A.main `\benvironmental (?:events?|emergenc\w*|hazards?)\b|\bnatural disasters?\b|\bdeclared (?:state of )?(?:emergency|disaster)\b`: 133 units: 20.438, 20.875, 36.25, 45.40, 45.50, 48.651, 49.138, 49.79, 59.11, 66.0420, 66.1105, 67.05 …
- Term B.and `\A(?=[\s\S]*?(?:\bnatural disasters?\b|\bflood\w*|\btornado\w*|\bcontaminat\w*|\benvironmental (?:events?|emergenc\w*|hazards?)\b|\bstate of…`: 15 units: 24.39, 32.09, 60.85, 66.0823, 66.1105, 77.54, 108.02, 218.0171, 704.44, ATCP 134.08, DCF 120.05, NR 12.001 …
- Term C.near `(?:\b(?:storms?|floods?|fires?|tornado\w*|spills?|disasters?)\b)[\s\S]{0,1200}(?:\b(?:end|ends|ended|cancel\w*) (?:the |a )?(?:lease|tenancy…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:storms?|floods?|fires?|tornado\w*|spills?|disasters?)\b))(?=[\s\S]*?(?:\b(?:end|ends|ended|cancel\w*) (?:the |a )?(?:le…`: 0 units
- Positive A: 704.44 ('Property damage caused by natural disasters') passed
- Positive B: synthetic ('If a natural disaster makes the premises unusable, the landlord or tenant may terminate the lease and the tenancy ends.') passed
- Positive C: synthetic ('After the flood the landlord may end the lease.') passed

#### WIG-B-032 — foreclosure disclosure to prospective or current tenants

- Run 2026-11-16T06:45:51+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-B-033; rerun identical.
- Question: Searches for a duty to disclose a foreclosure to prospective or current tenants. A = term of art; B = foreclosure + tenant role word + disclose/notify/inform (AND); C = everyday foreclosure near tell tenants.
- Cited by: `foreclosure-disclosure-nv`
- Term A.main `\b(?:pending|commenced) foreclosure\b|\bforeclosure (?:proceedings?|action) (?:is|has been) (?:pending|commenced|filed)\b|\bnotice of (?:the…`: 2 units: 707.28, DCF 120.05
- Term B.and `\A(?=[\s\S]*?(?:\bforeclos\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|prospective tenants?)\b))(?=[\s\S]*?(?:\bdisclos\w*|\bnotif\w*|…`: 19 units: 13.48, 49.849, 66.0413, 66.0627, 66.1103, 66.1201, 66.1331, 77.22, 321.62, 757.30, 779.01, 779.15 …
- Term C.near `(?:\bforeclos\w*|\bbank (?:is )?taking\b)[\s\S]{0,1200}(?:\b(?:tell|told|warn\w*) (?:the |a |any |each )?(?:tenants?|renters?|applicants?)\b…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\bforeclos\w*|\bbank (?:is )?taking\b))(?=[\s\S]*?(?:\b(?:tell|told|warn\w*) (?:the |a |any |each )?(?:tenants?|renters?|app…`: 0 units
- Positive A: synthetic ('Before entering a lease, the landlord shall tell the prospective tenant of any pending foreclosure.') passed
- Positive B: 799.41 ('the complaint shall identify the action as an eviction of the tenant due to a foreclosure action') FAILED (and pattern does not match unit)
- Positive C: synthetic ('The owner must tell each tenant when foreclosure starts.') passed

#### WIG-B-033 — foreclosure disclosure to prospective or current tenants

- Run 2026-11-16T06:46:22+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-B-032 (term B positive (Wis. Stat. § 799.41) lacks a disclose/notify/inform word, so the AND could not match it; replaced by a synthetic positive); rerun identical.
- Question: Searches for a duty to disclose a foreclosure to prospective or current tenants. A = term of art; B = foreclosure + tenant role word + disclose/notify/inform (AND); C = everyday foreclosure near tell tenants.
- Cited by: `foreclosure-disclosure-nv`
- Term A.main `\b(?:pending|commenced) foreclosure\b|\bforeclosure (?:proceedings?|action) (?:is|has been) (?:pending|commenced|filed)\b|\bnotice of (?:the…`: 2 units: 707.28, DCF 120.05
- Term B.and `\A(?=[\s\S]*?(?:\bforeclos\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|prospective tenants?)\b))(?=[\s\S]*?(?:\bdisclos\w*|\bnotif\w*|…`: 19 units: 13.48, 49.849, 66.0413, 66.0627, 66.1103, 66.1201, 66.1331, 77.22, 321.62, 757.30, 779.01, 779.15 …
- Term C.near `(?:\bforeclos\w*|\bbank (?:is )?taking\b)[\s\S]{0,1200}(?:\b(?:tell|told|warn\w*) (?:the |a |any |each )?(?:tenants?|renters?|applicants?)\b…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\bforeclos\w*|\bbank (?:is )?taking\b))(?=[\s\S]*?(?:\b(?:tell|told|warn\w*) (?:the |a |any |each )?(?:tenants?|renters?|app…`: 0 units
- Positive A: synthetic ('Before entering a lease, the landlord shall tell the prospective tenant of any pending foreclosure.') passed
- Positive B: synthetic ('A landlord shall disclose to a prospective tenant that a foreclosure has been filed against the property.') passed
- Positive C: synthetic ('The owner must tell each tenant when foreclosure starts.') passed

#### WIG-B-034 — lease guarantor rules (guaranty of a residential lease; renewal; cosigners)

- Run 2026-11-16T06:47:27+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for rules on guaranties of residential leases, including renewal coverage and cosigners. A = term of art; B = guaranty/surety + tenant + rent/lease (AND); C = everyday cosigner near lease.
- Cited by: `edu-guarantor-renewal-wi`
- Term A.main `\bguarantors? of (?:a |the )?(?:lease|tenant|rent)\b|\blease guarant(?:y|ies)\b|\bguarant(?:y|ies) of (?:a |the )?lease\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bguarant(?:y|ies|ors?)\b|\bsurety\b|\bsureties\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?)\b))(?=[\s\S]*?(?:\brent\b|…`: 17 units: 32.06, 66.0304, 229.44, 229.68, 229.824, 229.844, 231.03, 321.62, 344.51, 409.102, 632.32, 645.675 …
- Term C.near `(?:\bco-?signers?\b|\bco-?sign(?:s|ed|ing)?\b)[\s\S]{0,1200}(?:\b(?:leases?|rent|apartments?|tenants?)\b)|(?:\b(?:leases?|rent|apartments?|t…`: 1 units: 422.201
- Term C.and `\A(?=[\s\S]*?(?:\bco-?signers?\b|\bco-?sign(?:s|ed|ing)?\b))(?=[\s\S]*?(?:\b(?:leases?|rent|apartments?|tenants?)\b))`: 2 units: 422.201, SPS 85.120
- Positive A: synthetic ('The guarantor of a lease is not liable for a renewal term unless the guaranty so states.') passed
- Positive B: 799.445 ('an undertaking to the plaintiff, in an amount and with surety approved by the judge') passed
- Positive C: synthetic ('A parent may cosign the apartment lease.') passed

#### WIG-B-035 — lease term limits (maximum residential lease term; spousal joinder for leases)

- Run 2026-11-16T06:48:41+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a maximum term for residential leases and for spousal-joinder rules reaching leases. A = term of art; B = lease + residential/tenant + years limit (AND); C = everyday spouse near lease.
- Cited by: `edu-lease-term-limitation-wi`
- Term A.main `\b(?:maximum|longest) (?:lease )?terms?\b|\blease for (?:a term of )?more than \d+ years\b`: 47 units: 45.42, 66.0301, 66.0304, 107.02, 107.20, 115.31, 215.21, 234.07, 551.508, 611.55, 756.28, 939.32 …
- Term B.and `\A(?=[\s\S]*?(?:\bleases?\b))(?=[\s\S]*?(?:\b(?:residential|dwelling units?|tenants?)\b))(?=[\s\S]*?(?:\bmay not exceed \d+ years\b|\bexceed…`: 3 units: 66.1105, 240.10, Wis. Const.
- Term C.near `(?:\b(?:spouses?|husband|wife)\b)[\s\S]{0,1200}(?:\bleases?\b)|(?:\bleases?\b)[\s\S]{0,1200}(?:\b(?:spouses?|husband|wife)\b)`: 25 units: 6.34, 29.164, 32.03, 45.51, 49.453, 71.01, 108.02, 125.20, 180.1130, 182.004, 218.0101, 242.01 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:spouses?|husband|wife)\b))(?=[\s\S]*?(?:\bleases?\b))`: 73 units: 6.34, 20.540, 23.33, 23.335, 29.164, 32.03, 45.03, 45.51, 46.03, 49.453, 54.20, 66.1105 …
- Positive A: synthetic ('No residential lease may be made for a maximum term longer than 20 years, and a lease for more than 20 years is void as to the excess.') passed
- Positive B: synthetic ('A residential lease to a tenant may not exceed 20 years.') passed
- Positive C: 706.02 ('Is signed, or joined in by separate conveyance, by or on behalf of each spouse') passed

#### WIG-B-036 — lease notice initial requirement (tenant must initial lease provisions or notices)

- Run 2026-11-16T06:50:01+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any requirement that a tenant initial lease provisions or notices. A = term of art; B = initial + tenant + lease (AND); C = everyday initials next to a provision.
- Cited by: `edu-lease-notice-initial-requirement-wi`
- Term A.main `\bsign(?:s|ed)? or initial(?:s|ed)?\b|\binitials? or sign(?:s|ed)?\b|\bwrites his or her initials\b|\binitialed by the (?:tenant|lessee)\b`: 10 units: 224.79, 704.28, ATCP 134.06, ATCP 134.09, ATCP 55.07, ATCP 65.30, ATCP 70.14, DCF 250.07, DCF 251.07, DCF 252.44
- Term B.and `\A(?=[\s\S]*?(?:\binitial(?:s|ed|ing)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?)\b))(?=[\s\S]*?(?:\bleases?\b|\brental agreements?\b)…`: 8 units: 23.33, 134.49, 452.1355, 704.28, 706.09, ATCP 134.06, ATCP 134.09, 2025 Wis. Act 69
- Term C.near `(?:\binitial(?:s|ed|ing)?\b)[\s\S]{0,1200}(?:\b(?:next to|beside|by) (?:the|each|a|that) (?:nonstandard )?(?:provision|clause|paragraph|sect…`: 10 units: 985.075, DWD 218.07, DWD 221.09, DWD 223.07, DWD 224.08, DWD 225.11, DWD 226.11, NR 809.952, NR 809.953, Trans 112.03
- Term C.and `\A(?=[\s\S]*?(?:\binitial(?:s|ed|ing)?\b))(?=[\s\S]*?(?:\b(?:next to|beside|by) (?:the|each|a|that) (?:nonstandard )?(?:provision|clause|par…`: 18 units: 71.91, 106.50, 138.09, 601.58, 801.02, 938.999, 985.075, DHS 75.59, DWD 218.07, DWD 221.09, DWD 223.07, DWD 224.08 …
- Positive A: 704.28 ('If the tenant signs his or her name, or writes his or her initials, by a nonstandard rental provision') passed
- Positive B: ATCP 134.09 ('The agreement is not effective unless signed or initialed by the tenant') passed
- Positive C: synthetic ('The tenant must write initials next to each provision of the lease.') passed

#### WIG-B-037 — informal dispute resolution / pre-suit mediation in residential leases

- Run 2026-11-16T06:51:05+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for rules allowing, requiring or barring a lease term for informal dispute resolution or pre-suit mediation. A = terms of art; B = mediation + role word + lease/eviction (AND); C = everyday meet/resolve near before filing.
- Cited by: `informal-dispute-resolution-or`
- Term A.main `\binformal dispute resolution\b|\bpre-?suit (?:notice|mediation)\b|\balternative dispute resolution\b`: 35 units: 16.9675, 66.0203, 66.0217, 184.07, 196.219, 244.43, 244.46, 244.49, 244.51, 244.52, 244.54, 281.343 …
- Term B.and `\A(?=[\s\S]*?(?:\bmediat(?:e|es|ed|ion|or|ors)\b|\bdispute resolution\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|landlords?|lessors?)\b))(?=[\s…`: 7 units: 66.1105, 218.0101, 218.0116, 701.0816, DCF 120.05, REEB 25.023, Wis. Const.
- Term C.near `(?:\b(?:meet|talk|work (?:it|things) out|resolve)\b)[\s\S]{0,1200}(?:\b(?:before|prior to) (?:filing|suing|bringing|commencing)\b)|(?:\b(?:b…`: 16 units: 66.0420, 74.35, 217.06, 218.167, 285.63, 895.07, ATCP 10.07, ATCP 93.545, DOC 310.07, NR 406.04, NR 406.16, NR 407.10 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:meet|talk|work (?:it|things) out|resolve)\b))(?=[\s\S]*?(?:\b(?:before|prior to) (?:filing|suing|bringing|commencing)\b…`: 55 units: 30.025, 30.206, 32.05, 48.415, 51.20, 51.30, 59.265, 62.23, 66.0420, 70.47, 71.07, 71.28 …
- Positive A: synthetic ('A rental agreement may include a provision for informal dispute resolution.') passed
- Positive B: synthetic ('Before filing an eviction, the landlord and tenant shall attempt mediation of any dispute under the lease.') passed
- Positive C: synthetic ('The parties must meet to resolve the dispute before filing suit.') passed

#### WIG-B-038 — sex offender occupancy duties for landlords (residency restrictions, co-residence, leasing bans)

- Run 2026-11-16T06:52:31+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for landlord duties or penalties about renting to or housing registered sex offenders. A = terms of art; B = sex offender near role words; C = everyday registered persons living together.
- Cited by: `edu-sex-offender-occupancy-wi`
- Term A.main `\bprovid(?:es|ing) housing to (?:a |the )?(?:sex offenders?|individual)\b|\bresidency (?:restrictions?|requirements?)\b`: 27 units: 8.28, 17.03, 33.27, 33.28, 45.02, 45.20, 49.015, 49.825, 49.826, 50.04, 59.10, 59.26 …
- Term B.near `(?:\bsex offenders?\b|\brequired to register\b)[\s\S]{0,1200}(?:\b(?:landlords?|lessors?|owners?|tenants?|lessees?)\b)|(?:\b(?:landlords?|le…`: 12 units: 23.33, 23.335, 77.52, 95.55, 443.14, 704.02, 704.50, 706.01, 706.20, 757.07, SPS 390.05, 2025 Wis. Act 25
- Term B.and `\A(?=[\s\S]*?(?:\bsex offenders?\b|\brequired to register\b))(?=[\s\S]*?(?:\b(?:landlords?|lessors?|owners?|tenants?|lessees?)\b))`: 23 units: 20.385, 20.875, 23.33, 23.335, 66.0615, 73.03, 77.29, 77.52, 77.53, 95.55, 443.14, 452.01 …
- Term C.near `(?:\b(?:registered|registrants?)\b)[\s\S]{0,1200}(?:\b(?:live|lives|living|reside|resides|residing) (?:together|with)\b)|(?:\b(?:live|lives|…`: 2 units: DCF 101.25, DHS 103.075
- Term C.and `\A(?=[\s\S]*?(?:\b(?:registered|registrants?)\b))(?=[\s\S]*?(?:\b(?:live|lives|living|reside|resides|residing) (?:together|with)\b))`: 13 units: 46.90, 49.45, 55.043, 108.04, 301.03, 632.895, DCF 101.25, DHS 103.075, DHS 105.16, DHS 105.19, DHS 75.59, Wis. Const. …
- Positive A: 980.135 ('restricts or prohibits a person from providing housing to a sex offender') passed
- Positive B: 704.50 ('a landlord or his or her agent has no duty to disclose to any person in connection with the rental of real property') passed
- Positive C: synthetic ('No owner may knowingly lease a dwelling where two registered offenders reside together.') passed

#### WIG-B-039 — tenant-employee housing (employer housing disclosures, vacating on end of employment)

- Run 2026-11-16T06:53:47+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-B-040; rerun identical.
- Question: Searches for rules on housing a landlord provides to an employee: required disclosures, vacating when employment ends, offers of a rental agreement. A = terms of art; B = employee/employer + role word + vacate + dwelling (AND); C = everyday job ends near move out.
- Cited by: `edu-tenant-employee-housing-wi`
- Term A.main `\bemployer-provided housing\b|\bemployee housing\b|\bhousing (?:provided|furnished) (?:by|to) (?:an |the )?employe(?:r|e)s?\b|\bcaretakers?\…`: 67 units: 48.48, 48.57, 48.623, 48.645, 48.685, 48.981, 48.986, 49.155, 49.19, 49.197, 49.26, 49.46 …
- Term B.and `\A(?=[\s\S]*?(?:\bemploy(?:ee|er|ment)s?\b))(?=[\s\S]*?(?:\b(?:tenants?|landlords?|lessees?|occupants?)\b))(?=[\s\S]*?(?:\bvacat\w*))(?=[\s\…`: 17 units: 32.19, 66.0809, 101.02, 102.03, 103.001, 108.02, 340.01, 973.20, ATCP 72.03, Adm 92.01, DCF 120.05, DCF 59.04 …
- Term C.near `(?:\b(?:job|work|employment) (?:ends?|ended|is terminated)\b|\b(?:fired|quits?)\b)[\s\S]{0,1200}(?:\b(?:move out|vacate|leave)\b)|(?:\b(?:mo…`: 2 units: 108.04, 322.085
- Term C.and `\A(?=[\s\S]*?(?:\b(?:job|work|employment) (?:ends?|ended|is terminated)\b|\b(?:fired|quits?)\b))(?=[\s\S]*?(?:\b(?:move out|vacate|leave)\b)…`: 7 units: 66.0509, 108.04, 111.39, 322.085, DHS 103.03, NR 440.216, Wis. Const.
- Positive A: 943.13 ('Any authorized occupant of employer-provided housing shall have the right to decide who may enter') passed
- Positive B: 103.926 ('the employer may require a worker to vacate residence at the migrant labor camp') FAILED (and pattern does not match unit)
- Positive C: synthetic ('When the job ends, the worker must move out within 30 days.') passed

#### WIG-B-040 — tenant-employee housing (employer housing disclosures, vacating on end of employment)

- Run 2026-11-16T06:54:27+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-B-039 (term B positive failed because ch. 103's role word is 'worker'; role words widened to include workers; 'caretakers' dropped from term A (child-caretaker noise)); rerun identical.
- Question: Searches for rules on housing a landlord provides to an employee: required disclosures, vacating when employment ends, offers of a rental agreement. A = terms of art; B = employee/employer + role word + vacate + dwelling (AND); C = everyday job ends near move out.
- Cited by: `edu-tenant-employee-housing-wi`
- Term A.main `\bemployer-provided housing\b|\bemployee housing\b|\bhousing (?:provided|furnished) (?:by|to) (?:an |the )?employe(?:r|e)s?\b`: 1 units: 943.13
- Term B.and `\A(?=[\s\S]*?(?:\bemploy(?:ee|er|ment)s?\b))(?=[\s\S]*?(?:\b(?:tenants?|landlords?|lessees?|occupants?|workers?)\b))(?=[\s\S]*?(?:\bvacat\w*…`: 25 units: 32.19, 46.275, 49.155, 66.0809, 101.02, 102.03, 103.001, 103.10, 103.926, 108.02, 108.04, 340.01 …
- Term C.near `(?:\b(?:job|work|employment) (?:ends?|ended|is terminated)\b|\b(?:fired|quits?)\b)[\s\S]{0,1200}(?:\b(?:move out|vacate|leave)\b)|(?:\b(?:mo…`: 2 units: 108.04, 322.085
- Term C.and `\A(?=[\s\S]*?(?:\b(?:job|work|employment) (?:ends?|ended|is terminated)\b|\b(?:fired|quits?)\b))(?=[\s\S]*?(?:\b(?:move out|vacate|leave)\b)…`: 7 units: 66.0509, 108.04, 111.39, 322.085, DHS 103.03, NR 440.216, Wis. Const.
- Positive A: 943.13 ('Any authorized occupant of employer-provided housing shall have the right to decide who may enter') passed
- Positive B: 103.926 ('the employer may require a worker to vacate residence at the migrant labor camp') passed
- Positive C: synthetic ('When the job ends, the worker must move out within 30 days.') passed

#### WIG-B-041 — double-letting (same unit rented to two tenants)

- Run 2026-11-16T06:55:27+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a rule on renting the same unit to two tenants. A = term of art; B = same unit near two tenants; C = everyday already rented near another tenant.
- Cited by: `edu-double-letting-wi`, `edu-confirmed-absences-misc-wi`
- Term A.main `\bdouble[- ]?lett\w*|\blet (?:the same|a) (?:room|dwelling|unit|premises) to (?:more than one|two|another)\b`: 0 units
- Term B.near `(?:\b(?:same|identical) (?:room|dwelling units?|units?|premises|apartment)\b)[\s\S]{0,1200}(?:\b(?:two|2|more than one|another|second|differ…`: 2 units: ATCP 10.01, ATCP 10.87
- Term B.and `\A(?=[\s\S]*?(?:\b(?:same|identical) (?:room|dwelling units?|units?|premises|apartment)\b))(?=[\s\S]*?(?:\b(?:two|2|more than one|another|se…`: 4 units: ATCP 10.01, ATCP 10.87, Adm 92.04, Wis. Const.
- Term C.near `(?:\b(?:already|previously) (?:rented|leased|let)\b)[\s\S]{0,1200}(?:\bsomeone else\b|\banother (?:person|tenant|renter)\b)|(?:\bsomeone els…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:already|previously) (?:rented|leased|let)\b))(?=[\s\S]*?(?:\bsomeone else\b|\banother (?:person|tenant|renter)\b))`: 0 units
- Positive A: synthetic ('No landlord may engage in double-letting of a dwelling unit.') passed
- Positive B: synthetic ('A landlord may not rent the same dwelling unit to two tenants for the same period.') passed
- Positive C: synthetic ('The unit was already rented to another tenant when the lease was signed.') passed

#### WIG-B-042 — disaster-displaced guests (tenant may house displaced persons despite guest/occupancy limits)

- Run 2026-11-16T06:56:22+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a rule letting tenants shelter disaster-displaced people despite lease guest or occupancy limits. A = term of art; B = disaster + role word + guest/occupancy (AND); C = everyday flood near take in/host.
- Cited by: `edu-disaster-displaced-guests-wi`
- Term A.main `\bdisplaced (?:persons?|individuals?|residents?|households?|families|tenants?)\b|\bevacuees?\b`: 41 units: 32.05, 32.06, 32.185, 32.19, 32.22, 32.25, 32.26, 32.29, 66.1201, 66.1331, 66.1333, 85.09 …
- Term B.and `\A(?=[\s\S]*?(?:\bdisasters?\b|\bstate of emergency\b|\bevacuat\w*))(?=[\s\S]*?(?:\b(?:tenants?|landlords?|lessees?|lessors?)\b))(?=[\s\S]*?…`: 8 units: 70.11, 71.07, 77.52, 632.977, 704.44, ATCP 134.08, NR 51.005, Wis. Const.
- Term C.near `(?:\b(?:fires?|floods?|storms?|tornado\w*|disasters?)\b)[\s\S]{0,1200}(?:\bstay(?:s|ing)? with\b|\btak(?:e|es|ing) in\b|\btook in\b|\bhost(?…`: 5 units: 49.79, 70.32, NR 44.07, NR 45.075, PSC 128.18
- Term C.and `\A(?=[\s\S]*?(?:\b(?:fires?|floods?|storms?|tornado\w*|disasters?)\b))(?=[\s\S]*?(?:\bstay(?:s|ing)? with\b|\btak(?:e|es|ing) in\b|\btook in…`: 14 units: 20.438, 46.537, 49.79, 70.32, 100.305, 252.15, 893.80, NR 44.07, NR 45.075, NR 700.03, PSC 111.53, PSC 128.18 …
- Positive A: 32.19 ('“Displaced person” does not include') passed
- Positive B: synthetic ('During a declared disaster a tenant may house guests displaced by the disaster notwithstanding any occupancy limit, and the landlord may not terminate the tenan') passed
- Positive C: synthetic ('After the flood, the tenant may host relatives whose home was destroyed.') passed

#### WIG-B-043 — landlord duties after a declared disaster (rent while inaccessible, tenancy ending, repairs, price limits)

- Run 2026-11-16T06:57:39+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for landlord or tenancy rules triggered by a declared disaster or emergency. A = terms of art; B = disaster + role word + rent (AND); C = everyday disaster near rent/lease.
- Cited by: `edu-disaster-duties-wi`
- Term A.main `\bdeclared (?:state of )?(?:emergency|disaster)\b|\bstate of emergency\b|\bemergency declaration\b|\bperiod of abnormal economic disruption\…`: 77 units: 11.1205, 16.61, 23.097, 23.114, 40.26, 45.50, 50.36, 59.11, 66.0312, 66.03125, 66.0314, 71.03 …
- Term B.and `\A(?=[\s\S]*?(?:\bdisasters?\b|\bstate of emergency\b|\bemergency declaration\b))(?=[\s\S]*?(?:\b(?:tenants?|landlords?|lessees?|lessors?)\b…`: 6 units: 70.11, 71.07, 704.44, ATCP 134.08, DCF 120.05, Wis. Const.
- Term C.near `(?:\b(?:disasters?|emergenc(?:y|ies))\b)[\s\S]{0,1200}(?:\b(?:rents?|leases?|tenancy|tenancies)\b)|(?:\b(?:rents?|leases?|tenancy|tenancies)…`: 74 units: 5.92, 13.48, 16.27, 20.220, 20.433, 20.438, 20.475, 20.875, 30.32, 38.04, 49.138, 59.70 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:disasters?|emergenc(?:y|ies))\b))(?=[\s\S]*?(?:\b(?:rents?|leases?|tenancy|tenancies)\b))`: 169 units: 5.92, 13.48, 16.27, 16.54, 20.220, 20.360, 20.385, 20.432, 20.433, 20.438, 20.475, 20.540 …
- Positive A: 100.305 ('is in a period of abnormal economic disruption') passed
- Positive B: synthetic ('After a declared disaster, a tenant owes no rent for any period the unit is inaccessible, and the landlord shall notify the tenant.') passed
- Positive C: synthetic ('During the emergency, the rent is suspended.') passed

#### WIG-B-044 — alternate housing / relocation duty of landlords during repairs or untenantability

- Run 2026-11-16T06:58:51+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a landlord duty to provide or pay for alternate housing or relocation during repairs or untenantability. A = terms of art; B = relocation/hotel + landlord + tenant + repair/untenantable (AND); C = everyday pay for a hotel.
- Cited by: `edu-alt-housing-wi`, `edu-confirmed-absences-habitability-wi`
- Term A.main `\balternat(?:e|ive) (?:housing|accommodations?|lodging|dwellings?)\b|\btemporary (?:housing|lodging|accommodations?|relocation)\b`: 23 units: 20.001, 20.917, 48.487, 49.138, 49.165, 66.1331, 66.1333, 125.09, 302.01, 302.27, 823.113, Adm 86.02 …
- Term B.and `\A(?=[\s\S]*?(?:\brelocat\w*|\btemporary (?:housing|lodging)\b|\bhotels?\b|\bmotels?\b))(?=[\s\S]*?(?:\b(?:landlords?|lessors?|owners?)\b))(…`: 29 units: 32.19, 32.22, 59.69, 60.85, 66.1103, 66.1105, 66.1201, 66.1333, 70.375, 71.07, 77.52, 83.01 …
- Term C.near `(?:\b(?:pay for|provide|find|furnish)\b)[\s\S]{0,1200}(?:\b(?:hotels?|motels?|place to stay|somewhere to stay|other housing)\b)|(?:\b(?:hote…`: 28 units: 44.47, 46.03, 66.1103, 66.1201, 77.52, 97.01, 97.615, 97.623, 103.155, 125.26, 125.51, 165.505 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:pay for|provide|find|furnish)\b))(?=[\s\S]*?(?:\b(?:hotels?|motels?|place to stay|somewhere to stay|other housing)\b))`: 77 units: 44.47, 46.03, 59.69, 60.85, 66.0615, 66.1103, 66.1113, 66.1201, 76.80, 77.52, 77.991, 93.07 …
- Positive A: synthetic ('The landlord shall provide alternate housing while the unit is untenantable.') passed
- Positive B: 32.19 ('tenant-occupant of a dwelling') passed
- Positive C: synthetic ('The landlord must pay for a hotel while repairs are made.') passed

#### WIG-C-001 — lease registration or recording duty (residential lease must be recorded, registered or filed)

- Run 2026-11-16T07:02:36+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-C-002; rerun identical.
- Question: Searches for any Wisconsin duty to record, register or file a residential lease (or a copy) with a public office. A = term of art (no role word); B = lease + recorded/registered + role word + residential (section-wide AND); C = everyday words (file a copy of the lease).
- Cited by: `edu-lease-registration-wi`
- Term A.main `\b(?:leases?|rental agreements?)\s+(?:shall|must)\s+be\s+(?:recorded|registered|filed)\b|\b(?:record|register|file|recording|registration|fi…`: 1 units: 66.0915
- Term B.and `\A(?=[\s\S]*?(?:\b(?:leases?|rental agreements?)\b))(?=[\s\S]*?(?:\b(?:recorded|registered)\b|\bregister of deeds\b))(?=[\s\S]*?(?:\b(?:tena…`: 54 units: 6.34, 19.59, 23.33, 23.335, 32.05, 32.09, 32.22, 46.03, 50.03, 62.23, 66.0101, 66.0104 …
- Term C.near `(?:\bcop(?:y|ies)\s+of\s+(?:the|a|each|every|any)\s+(?:written\s+)?(?:leases?|rental agreements?)\b)[\s\S]{0,1200}(?:\b(?:file|filed|filing|…`: 6 units: 26.08, RB 2.07, REEB 15.02, Trans 150.03, Trans 150.05, Trans 177.07
- Term C.and `\A(?=[\s\S]*?(?:\bcop(?:y|ies)\s+of\s+(?:the|a|each|every|any)\s+(?:written\s+)?(?:leases?|rental agreements?)\b))(?=[\s\S]*?(?:\b(?:file|fi…`: 9 units: 26.08, ATCP 118.02, ATCP 125.03, RB 2.07, REEB 15.02, Trans 138.03, Trans 150.03, Trans 150.05, Trans 177.07
- Positive A: 66.0915 ('the lease shall be recorded in the office of the register of deeds') passed
- Positive B: 706.001 ('instruments relating to such excluded transactions, if in recordable form, shall be entitled to record') FAILED (and pattern does not match unit)
- Positive B: synthetic ('Each landlord of a residential dwelling shall ensure that the lease is recorded with the register of deeds before the tenant takes possession.') passed
- Positive C: synthetic ('The landlord shall file a copy of the lease with the department within 10 days.') passed

#### WIG-C-002 — lease registration or recording duty (residential lease must be recorded, registered or filed)

- Run 2026-11-16T07:03:22+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-C-001 (term B real positive (Wis. Stat. § 706.001) lacks the residential/dwelling word, so the AND could not match it; positive replaced by a real unit that carries all four words); rerun identical.
- Question: Searches for any Wisconsin duty to record, register or file a residential lease (or a copy) with a public office. A = term of art (no role word); B = lease + recorded/registered + role word + residential (section-wide AND); C = everyday words (file a copy of the lease).
- Cited by: `edu-lease-registration-wi`
- Term A.main `\b(?:leases?|rental agreements?)\s+(?:shall|must)\s+be\s+(?:recorded|registered|filed)\b|\b(?:record|register|file|recording|registration|fi…`: 1 units: 66.0915
- Term B.and `\A(?=[\s\S]*?(?:\b(?:leases?|rental agreements?)\b))(?=[\s\S]*?(?:\b(?:recorded|registered)\b|\bregister of deeds\b))(?=[\s\S]*?(?:\b(?:tena…`: 54 units: 6.34, 19.59, 23.33, 23.335, 32.05, 32.09, 32.22, 46.03, 50.03, 62.23, 66.0101, 66.0104 …
- Term C.near `(?:\bcop(?:y|ies)\s+of\s+(?:the|a|each|every|any)\s+(?:written\s+)?(?:leases?|rental agreements?)\b)[\s\S]{0,1200}(?:\b(?:file|filed|filing|…`: 6 units: 26.08, RB 2.07, REEB 15.02, Trans 150.03, Trans 150.05, Trans 177.07
- Term C.and `\A(?=[\s\S]*?(?:\bcop(?:y|ies)\s+of\s+(?:the|a|each|every|any)\s+(?:written\s+)?(?:leases?|rental agreements?)\b))(?=[\s\S]*?(?:\b(?:file|fi…`: 9 units: 26.08, ATCP 118.02, ATCP 125.03, RB 2.07, REEB 15.02, Trans 138.03, Trans 150.03, Trans 150.05, Trans 177.07
- Positive A: 66.0915 ('the lease shall be recorded in the office of the register of deeds') passed
- Positive B: 823.23 ('if the contract was recorded prior to the issuance of the notice') passed
- Positive B: synthetic ('Each landlord of a residential dwelling shall ensure that the lease is recorded with the register of deeds before the tenant takes possession.') passed
- Positive C: synthetic ('The landlord shall file a copy of the lease with the department within 10 days.') passed

#### WIG-C-003 — good cause for termination or nonrenewal, or a notice stating the cause

- Run 2026-11-16T07:05:35+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any good-cause (just-cause) eviction or nonrenewal rule, or a duty to state the cause in a notice. A = term of art; B = good/just cause + termination word + role word (section-wide AND); C = everyday words (reason for termination/nonrenewal) near role words.
- Cited by: `edu-good-cause-notice-wi`
- Term A.main `\b(?:good|just)\s+cause\s+(?:for\s+)?(?:an\s+)?(?:eviction|termination|nonrenewal|evicting)\b|\b(?:good|just)[ -]cause\s+eviction\b`: 4 units: 50.065, 135.03, 254.595, NR 60.11
- Term B.and `\A(?=[\s\S]*?(?:\b(?:good|just)\s+cause\b))(?=[\s\S]*?(?:\b(?:terminat\w*|nonrenew\w*|evict\w*|renewal)\b))(?=[\s\S]*?(?:\b(?:tenants?|lesse…`: 71 units: 5.05, 19.49, 32.19, 44.47, 48.41, 48.57, 48.623, 48.686, 48.839, 48.979, 49.19, 49.45 …
- Term C.near `(?:\b(?:reasons?|grounds?)\s+for\s+(?:the\s+)?(?:termination|terminating|nonrenewal|eviction|evicting|not renewing|refusing to renew|refusal…`: 3 units: 101.953, DHS 89.27, DHS 89.29
- Term C.and `\A(?=[\s\S]*?(?:\b(?:reasons?|grounds?)\s+for\s+(?:the\s+)?(?:termination|terminating|nonrenewal|eviction|evicting|not renewing|refusing to …`: 4 units: 101.953, 224.48, DHS 89.27, DHS 89.29
- Positive A: 254.595 ('is not just cause for eviction') passed
- Positive B: 710.15 ('may not be terminated, nor may the renewal of the lease be denied by the community operator') passed
- Positive C: synthetic ('The landlord shall state in the notice the reason for the nonrenewal of the tenant's lease.') passed

#### WIG-C-004 — state rights guide, statement, summary or brochure given to tenants (with acknowledgment)

- Run 2026-11-16T07:07:48+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any duty to give tenants a state-published rights guide, statement, summary or brochure, with or without a signed acknowledgment. A = term of art (no role word); B = guide/statement + rights + role word + lease word (section-wide AND); C = everyday words (brochure/pamphlet/guide) near role words; D = acknowledgment of receipt + tenant + rights + lease.
- Cited by: `edu-rights-guide-wi`, `edu-tenant-rights-statement-wi`
- Term A.main `\b(?:statement|summary|bill|guide|handbook|notice|notification)\s+of\s+(?:\w+\s+)?rights\b|\brights and responsibilities\b|\bbill of rights\…`: 130 units: 12.035, 13.55, 46.056, 46.284, 46.2895, 48.02, 48.023, 48.686, 49.498, 49.81, 50.07, 50.09 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:guide|brochure|pamphlet|handbook|booklet|summary|statement)s?\b))(?=[\s\S]*?(?:\brights\b))(?=[\s\S]*?(?:\b(?:tenants?|…`: 97 units: 6.34, 19.59, 20.438, 20.875, 23.09, 25.17, 28.11, 29.889, 30.20, 32.05, 32.09, 32.19 …
- Term C.near `(?:\b(?:brochure|pamphlet|handbook|booklet|guide)s?\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|less…`: 35 units: 29.512, 29.563, 32.19, 32.28, 44.02, 49.45, 50.04, 66.1001, 140.02, 346.94, 452.1355, 632.975 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:brochure|pamphlet|handbook|booklet|guide)s?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|land…`: 92 units: 16.84, 20.875, 23.09, 23.33, 23.335, 29.024, 29.512, 29.563, 32.05, 32.06, 32.09, 32.19 …
- Term D.and `\A(?=[\s\S]*?(?:\backnowledg\w*))(?=[\s\S]*?(?:\b(?:receipt|received|receiving)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?)\b))(?=[\s\…`: 5 units: 106.50, 190.11, 409.102, 429.208, Wis. Const.
- Positive A: DHS 10.51 ('statement of client rights and responsibilities') passed
- Positive B: synthetic ('The department shall prepare a statement of the rights of tenants under a residential lease, and each landlord shall give a copy of the statement to the tenant.') passed
- Positive C: 452.1355 ('make publicly available a consumer brochure') passed
- Positive D: synthetic ('Each tenant shall sign an acknowledgment of receipt of the statement of tenant rights before signing the lease.') passed

#### WIG-C-005 — rental limits in single-family zones; owner-occupancy conditions on renting

- Run 2026-11-16T07:10:15+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any state limit on renting homes in single-family zones, or an owner-occupancy condition on renting. A = term of art (no role word); B = single-family + zoning + rent/lease + role word (section-wide AND); C = everyday words (owner lives on the lot) near rent.
- Cited by: `edu-single-family-zone-lease-limit-wi`
- Term A.main `\bowner[- ]occup(?:ied|ant|ants|ancy|y|ies)\b`: 52 units: 29.336, 32.19, 32.197, 62.17, 62.237, 66.0628, 66.1105, 66.1107, 66.1333, 71.07, 74.21, 75.35 …
- Term B.and `\A(?=[\s\S]*?(?:\bsingle[- ]family\b|\bone[- ]family\b))(?=[\s\S]*?(?:\bzon(?:e|es|ed|ing)\b))(?=[\s\S]*?(?:\b(?:rent|rents|rental|rentals|r…`: 16 units: 46.03, 59.694, 62.23, 66.1105, 106.50, 125.51, 182.001, 234.66, 234.661, 234.662, Adm 92.01, NR 118.03 …
- Term C.near `(?:\b(?:live|lives|living|reside|resides|residing|occupy|occupies)\s+(?:on|at|in)\s+(?:the\s+)?(?:same\s+)?(?:lot|property|premises|parcel|d…`: 3 units: 632.05, DHS 163.03, Tax 14.04
- Term C.and `\A(?=[\s\S]*?(?:\b(?:live|lives|living|reside|resides|residing|occupy|occupies)\s+(?:on|at|in)\s+(?:the\s+)?(?:same\s+)?(?:lot|property|prem…`: 4 units: 632.05, DHS 163.03, SPS 305.003, Tax 14.04
- Positive A: 32.197 ('An owner-occupant of property being acquired may waive') passed
- Positive B: synthetic ('No owner may rent or lease a dwelling in a single-family zoning district to a tenant unless the owner resides on the lot.') passed
- Positive C: synthetic ('A home in the district may be rented only if the owner lives on the same lot.') passed

#### WIG-C-006 — accessory dwelling unit statute (by-right ADUs, owner occupancy, minimum rental term)

- Run 2026-11-16T07:10:52+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any statewide accessory dwelling unit statute (by-right ADUs, owner-occupancy rules, minimum rental terms). A = terms of art; B = accessory + dwelling unit + role word (section-wide AND); C = everyday words (second/backyard/detached dwelling unit) near lot/zoning.
- Cited by: `edu-accessory-dwelling-unit-wi`, `accessory-dwelling-unit-term-co`
- Term A.main `\baccessory\s+(?:dwelling|living|residential|housing)\s+units?\b|\bADUs?\b|\bgranny\s+flats?\b|\bin-law\s+(?:suites?|apartments?|units?)\b|\…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\baccessory\b))(?=[\s\S]*?(?:\b(?:dwelling|residential|living|housing)\s+units?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|rent…`: 11 units: 70.11, 91.46, 101.01, Adm 92.04, SPS 314.01, SPS 316.006, SPS 320.05, SPS 320.07, SPS 321.08, SPS 341.04, SPS 381.01
- Term C.near `(?:\b(?:second|secondary|additional|backyard|detached|accessory)\s+(?:dwelling|residential|living|housing)\s+units?\b|\b(?:second|secondary|…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:second|secondary|additional|backyard|detached|accessory)\s+(?:dwelling|residential|living|housing)\s+units?\b|\b(?:seco…`: 0 units
- Positive A: synthetic ('A city may not prohibit an accessory dwelling unit on a lot zoned for single-family use.') passed
- Positive B: synthetic ('An owner may build one accessory structure containing a dwelling unit for a tenant.') passed
- Positive C: synthetic ('Each lot may contain one detached dwelling unit in addition to the principal dwelling, and the zoning ordinance shall allow a second dwelling unit.') passed

#### WIG-C-007 — landlord to provide health-district or housing regulations to tenants (on request); tenant referral to health authority

- Run 2026-11-16T07:12:48+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a Nevada-style duty to provide health-district rental regulations to tenants on request, or a tenant-referral rule. A = term of art (no role word); B = local health authority + regulations + role word + rental word (section-wide AND); C = everyday words (on request) near health/housing regulations.
- Cited by: `edu-health-district-rental-rules-wi`
- Term A.main `\b(?:copy|copies)\s+of\s+(?:the\s+)?(?:applicable\s+)?(?:local\s+)?(?:health|housing|sanitary|sanitation)\s+(?:regulations?|rules?|codes?|or…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\blocal\s+board\s+of\s+health\b|\blocal\s+health\s+(?:department|officer)s?\b|\bhealth\s+districts?\b))(?=[\s\S]*?(?:\b(?:re…`: 17 units: 20.432, 20.438, 36.25, 46.03, 66.0435, 66.1337, 101.01, 101.02, 102.29, 120.12, 120.13, 254.11 …
- Term C.near `(?:\b(?:on|upon)\s+(?:the\s+)?(?:written\s+)?(?:tenant['’]s\s+)?request\b)[\s\S]{0,1200}(?:\b(?:health|sanitary|sanitation|housing)\s+(?:reg…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:on|upon)\s+(?:the\s+)?(?:written\s+)?(?:tenant['’]s\s+)?request\b))(?=[\s\S]*?(?:\b(?:health|sanitary|sanitation|housin…`: 1 units: ATCP 134.09
- Positive A: synthetic ('Each landlord shall make available a copy of the health regulations governing rental housing.') passed
- Positive B: 254.595 ('A tenant or class of tenants of property that is in violation of the municipal building code') passed
- Positive C: synthetic ('The landlord shall provide the tenant, upon request, the health regulations that apply to the dwelling.') passed

#### WIG-C-008 — state lead notices, certificates or packets delivered with a lease (beyond the federal disclosure)

- Run 2026-11-16T07:14:25+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any Wisconsin lead notice, certificate or packet the landlord must deliver with a lease beyond the federal disclosure. A = terms of art (no role word); B = lead hazard term + role word + lease word + notice/delivery word (section-wide AND); C = everyday words (lead paint/pipes) near lease words.
- Cited by: `edu-lead-state-notices-wi`
- Term A.main `\blead[- ]safe\s+information\s+pamphlets?\b|\blead\s+(?:poisoning|hazards?|paint)\s+(?:information|notices?|disclosures?|packets?)\b|\blead[…`: 3 units: 709.03, DHS 163.03, DHS 163.42
- Term B.and `\A(?=[\s\S]*?(?:\blead[- ]based\s+paint\b|\blead\s+hazards?\b|\blead[- ]safe\b|\blead\s+poisoning\b|\blead\s+service\s+lines?\b))(?=[\s\S]*?…`: 4 units: DHS 163.03, DHS 163.14, DHS 163.42, REEB 25.023
- Term C.near `(?:\blead\s+(?:paint|dust|pipes?|hazards?|levels?|exposure|poisoning|service\s+lines?|plumbing)\b)[\s\S]{0,1200}(?:\b(?:rental\s+agreements?…`: 4 units: 234.661, 254.11, DHS 163.03, DHS 163.42
- Term C.and `\A(?=[\s\S]*?(?:\blead\s+(?:paint|dust|pipes?|hazards?|levels?|exposure|poisoning|service\s+lines?|plumbing)\b))(?=[\s\S]*?(?:\b(?:rental\s+…`: 8 units: 234.661, 234.662, 254.11, 709.03, DHS 163.03, DHS 163.14, DHS 163.42, NR 166.07
- Positive A: DHS 163.42 ('lead-safe information pamphlet') passed
- Positive B: DHS 163.42 ('For tenancy of a dwelling unit under a rental agreement, the property owner shall ensure that a lead-safe information pamphlet') passed
- Positive C: synthetic ('Before entering into a lease, the landlord shall give the tenant the state notice on lead paint hazards.') passed

#### WIG-C-009 — notice to tenants of a code variance or exception (attach to lease)

- Run 2026-11-16T07:16:02+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any duty to give tenants notice of, or attach to the lease, a code variance, exception or waiver. A = terms of art (no role word); B = variance + role word + notice word + dwelling word (section-wide AND); C = everyday words (variance/exception granted) near tenant words.
- Cited by: `edu-sanitary-code-variance-wi`
- Term A.main `\b(?:variance|exception|waiver)s?\s+(?:from|to|of)\s+(?:the\s+)?(?:\w+\s+)?(?:sanitary|housing|building|safety|health|fire)\s+(?:codes?|regu…`: 54 units: 101.055, 145.24, ATCP 93.115, ATCP 93.170, ATCP 93.190, ATCP 94.110, DHS 124.31, DHS 131.42, SPS 301.10, SPS 302.02, SPS 302.07, SPS 302.44 …
- Term B.and `\A(?=[\s\S]*?(?:\bvariances?\b|\bpetitions?\s+for\s+(?:a\s+)?variance\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?…`: 40 units: 50.02, 50.03, 59.69, 59.692, 59.694, 60.61, 60.63, 62.23, 66.1337, 84.30, 87.30, 101.11 …
- Term C.near `(?:\bvariances?\b|\bexceptions?\s+granted\b|\bgranted\s+(?:an?\s+)?(?:variance|exception|waiver)\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|r…`: 11 units: 48.627, 101.132, 106.50, ATCP 79.11, Adm 92.01, DCF 56.05, DHS 163.14, DHS 89.22, DHS 89.295, NR 738.03, SPS 390.03
- Term C.and `\A(?=[\s\S]*?(?:\bvariances?\b|\bexceptions?\s+granted\b|\bgranted\s+(?:an?\s+)?(?:variance|exception|waiver)\b))(?=[\s\S]*?(?:\b(?:tenants?…`: 27 units: 48.627, 59.69, 60.61, 101.11, 101.121, 101.132, 106.50, 287.11, 292.31, 706.09, ATCP 79.11, Adm 92.01 …
- Positive A: synthetic ('The owner shall attach to each lease a copy of any variance from the housing code granted for the dwelling.') passed
- Positive B: synthetic ('If a variance is granted for a rental dwelling, the owner shall give notice of the variance to each tenant.') passed
- Positive C: synthetic ('The landlord shall give each tenant a copy of the variance granted for the building.') passed

#### WIG-C-010 — certificate of occupancy (or rental certificate) disclosure to tenants

- Run 2026-11-16T07:17:13+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any duty to disclose a certificate of occupancy, occupancy permit or rental certificate to tenants. A = terms of art (no role word); B = permit/certified + role word + disclosure word + tenancy word (section-wide AND); C = everyday words near rent/tenant words.
- Cited by: `edu-certificate-of-occupancy-disclosure-wi`
- Term A.main `\boccupancy\s+permits?\b|\bcertificates?\s+of\s+(?:occupancy|compliance|habitability)\b|\brental\s+(?:licen[sc]es?|certificates?|permits?)\b`: 36 units: 59.69, 66.0602, 110.20, 115.7915, 118.60, 119.23, 214.27, 215.40, 215.60, 236.21, 614.73, 616.56 …
- Term B.and `\A(?=[\s\S]*?(?:\boccupancy\s+permits?\b|\bcertificates?\s+of\s+(?:occupancy|compliance|habitability)\b|\bcertified\b))(?=[\s\S]*?(?:\b(?:te…`: 112 units: 20.432, 20.875, 23.09, 23.33, 30.30, 30.32, 32.05, 32.22, 32.57, 36.25, 48.57, 48.99 …
- Term C.near `(?:\boccupancy\s+permits?\b|\bcertificates?\s+of\s+occupancy\b)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|rent|rental|rented)\b)|(?:\b…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\boccupancy\s+permits?\b|\bcertificates?\s+of\s+occupancy\b))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|rent|rental|rente…`: 1 units: SPS 314.01
- Positive A: 823.114 ('a new certificate of occupancy is issued') passed
- Positive B: 66.0104 ('requires that a rental property or rental unit be certified, registered, or licensed') passed
- Positive C: synthetic ('Before renting the unit, the landlord shall give the tenant a copy of the certificate of occupancy.') passed

#### WIG-C-011 — single-family residence occupancy presumption and lease first-page / font-size disclosure (Nevada-style)

- Run 2026-11-16T07:18:14+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a Nevada-style presumption against a tenant's lawful occupancy unless the lease is notarized or agent-signed, and a first-page font-size lease disclosure. A = terms of art; B = notarized + lease + role word + occupancy (section-wide AND); C = everyday words (font size, first page) near lease words.
- Cited by: `edu-sfr-occupancy-disclosure-wi`
- Term A.main `\blawful\s+occupan(?:cy|ts?)\b|\bpresum(?:ed|ption|ptions)\s+(?:that\s+)?(?:a|the)\s+(?:tenant|occupant|person)\s+(?:does\s+not\s+have|has\s…`: 5 units: 32.22, 895.529, 943.13, 943.15, SPS 320.10
- Term B.and `\A(?=[\s\S]*?(?:\bnotariz\w*|\bnotary\b))(?=[\s\S]*?(?:\b(?:rental\s+agreements?|leases?)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|r…`: 5 units: 48.99, 846.40, Adm 92.68, Wis. Const., 2025 Wis. Act 25
- Term C.near `(?:\b(?:font|type|print)\s+size\b|\bpoint\s+(?:bold(?:face)?\s+)?type\b|\b(?:boldface|bold\s+face|capital)\s+(?:type|letters)\b|\bfirst\s+pa…`: 13 units: 107.25, 218.0144, 344.576, 345.28, 429.104, 429.203, 703.33, 704.90, 846.40, 943.62, ATCP 118.02, ATCP 118.12 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:font|type|print)\s+size\b|\bpoint\s+(?:bold(?:face)?\s+)?type\b|\b(?:boldface|bold\s+face|capital)\s+(?:type|letters)\b…`: 18 units: 107.25, 134.49, 218.0144, 344.576, 345.28, 429.104, 429.203, 703.33, 704.90, 706.11, 707.41, 846.40 …
- Positive A: synthetic ('It is presumed that a tenant does not have lawful occupancy of the dwelling unless the rental agreement is notarized.') passed
- Positive B: synthetic ('A rental agreement for a single-family residence shall be notarized, and a tenant under an agreement that is not notarized is presumed not to have lawful occupa') passed
- Positive C: synthetic ('The notice shall appear on the first page of the lease in a font size at least two times larger than any other font size.') passed

#### WIG-C-012 — tenant transfer of utility accounts into own name; landlord cutoff of untransferred service

- Run 2026-11-16T07:22:17+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a deadline for a tenant to transfer utility accounts and any landlord cutoff right for untransferred service. A = term of art; B = account + in-name + utility + role word (section-wide AND); C = everyday words (shut off ... failed to transfer).
- Cited by: `edu-utility-transfer-wi`
- Term A.main `\b(?:transfer|place|put|open|establish)(?:s|ed|ing)?\s+(?:the\s+|an?\s+|each\s+)?(?:utility\s+)?(?:service|account)s?\s+(?:in|into)\s+(?:the…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\baccounts?\b))(?=[\s\S]*?(?:\b(?:in|into)\s+(?:the\s+)?[\w’']+\s+name\b|\bin\s+(?:his|her|their|its)\s+(?:own\s+)?name\b))(…`: 21 units: 25.17, 27.065, 30.30, 59.84, 66.0617, 66.0713, 66.1201, 66.1333, 77.54, 77.61, 94.73, 177.01 …
- Term C.near `(?:\b(?:shut\s+off|shutoff|disconnect\w*|discontinu\w*|cut\s+off)\b)[\s\S]{0,1200}(?:\b(?:fail\w*|refus\w*)\s+to\s+(?:transfer|place|put|ope…`: 5 units: 78.48, 78.57, 196.219, ATCP 50.705, ATCP 65.02
- Term C.and `\A(?=[\s\S]*?(?:\b(?:shut\s+off|shutoff|disconnect\w*|discontinu\w*|cut\s+off)\b))(?=[\s\S]*?(?:\b(?:fail\w*|refus\w*)\s+to\s+(?:transfer|pl…`: 8 units: 20.875, 77.61, 78.48, 78.57, 196.219, ATCP 50.705, ATCP 65.02, DHS 132.65
- Positive A: synthetic ('The tenant shall transfer the utility accounts into the tenant's own name within 3 days.') passed
- Positive B: 196.643 ('the owner shall maintain the account for gas, electric or water service in the name of the owner') passed
- Positive C: synthetic ('The landlord may have the service shut off if the tenant fails to transfer the account within 3 days.') passed

#### WIG-C-013 — release of tenant energy usage data to owner (benchmarking) by lease or consent

- Run 2026-11-16T07:22:46+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any rule on releasing a tenant's utility usage data to the owner (lease consent, benchmarking). A = terms of art (no role word); B = customer information/usage data + release/consent + role word (section-wide AND); C = everyday words (usage/consumption) near tenant/landlord words.
- Cited by: `edu-energy-data-release-wi`, `energy-data-release-wy`
- Term A.main `\benergy\s+(?:usage|use|consumption)\s+(?:data|information)\b|\b(?:energy|water)\s+benchmarking\b|\bbenchmark\w*\s+(?:of\s+)?(?:energy|water…`: 6 units: NR 465.05, NR 810.32, PSC 113.0501, PSC 117.03, PSC 134.05, Tax 11.71
- Term B.and `\A(?=[\s\S]*?(?:\bcustomer\s+information\b|\busage\s+data\b|\bconsumption\s+(?:information|data)\b))(?=[\s\S]*?(?:\b(?:release|disclos\w*|co…`: 5 units: 29.024, 134.90, 138.14, 196.137, 218.0116
- Term C.near `(?:\b(?:usage|consumption)\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b)|(?:\b(?:tenants?|lessees?|renters?|lan…`: 21 units: 77.53, 77.54, 107.01, 125.02, 125.09, 218.0101, 411.103, 411.212, 411.214, ATCP 79.03, NR 123.03, NR 812.07 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:usage|consumption)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))`: 50 units: 66.0627, 70.11, 71.07, 71.47, 71.63, 77.29, 77.53, 77.54, 77.585, 97.01, 107.01, 108.02 …
- Positive A: PSC 113.0501 ('residential energy consumption information') passed
- Positive B: 196.137 ('An owner of real property provided with municipal utility service') passed
- Positive C: PSC 113.0501 ('current or prospective customers, tenants or property owners residential energy consumption information') passed

#### WIG-C-014 — utility deposits held by landlords and their return; utility charges in deposit withholding

- Run 2026-11-16T07:23:10+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for rules on utility deposits a landlord holds and on utility charges in deposit withholding. A = term of art (no role word); B = deposit + utility + tenant/landlord + return/withhold (section-wide AND); C = everyday words (deposit near water/electric bills).
- Cited by: `edu-utility-deposit-return-wi`
- Term A.main `\butility\s+deposits?\b|\bdeposits?\s+for\s+(?:utility|utilities|electric|gas|water)\s+service\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bdeposits?\b))(?=[\s\S]*?(?:\b(?:utility|utilities)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b…`: 20 units: 13.48, 30.35, 60.85, 66.0809, 66.0823, 66.0825, 66.0901, 66.1105, 77.29, 196.37, 704.28, 801.18 …
- Term C.near `(?:\bdeposits?\b)[\s\S]{0,1200}(?:\b(?:water|electric\w*|gas|heat|sewer)\s+(?:bills?|service|charges?)\b)|(?:\b(?:water|electric\w*|gas|heat…`: 11 units: 45.50, 66.0809, 185.995, Ins 6.30, PSC 113.012, PSC 113.0402, PSC 185.12, SPS 326.05, SPS 326.28, SPS 326.33, SPS 326.34
- Term C.and `\A(?=[\s\S]*?(?:\bdeposits?\b))(?=[\s\S]*?(?:\b(?:water|electric\w*|gas|heat|sewer)\s+(?:bills?|service|charges?)\b))`: 24 units: 16.957, 45.50, 49.45, 66.0703, 66.0809, 66.0901, 66.1001, 100.20, 185.995, 234.66, Ins 6.30, NR 422.02 …
- Positive A: synthetic ('A landlord who holds a utility deposit shall return it within 30 days.') passed
- Positive B: 704.28 ('for utility service provided by the landlord but not included in the rent') passed
- Positive C: synthetic ('The landlord shall return the deposit held for water bills within 30 days.') passed

#### WIG-C-015 — meter conservation / on-bill efficiency charge following the meter; submetered water rate rules; notice to next tenant

- Run 2026-11-16T07:23:54+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a meter-attached energy-efficiency or conservation charge that passes to later customers (with notice to new tenants) and for submetered water rules. A = terms of art; B = charge + meter + successor customer + efficiency + role word (section-wide AND); C = everyday words (charge paid by the next customer); D = submeter near water.
- Cited by: `edu-meter-conservation-charge-wi`
- Term A.main `\bon-bill\s+(?:financing|repayment|tariffs?|charges?)\b|\bmeter\s+conservation\s+charges?\b|\bpay\s+as\s+you\s+save\b|\b(?:energy\s+efficien…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:charges?|surcharges?|repayments?|financing)\b))(?=[\s\S]*?(?:\b(?:meters?|premises|location)\b))(?=[\s\S]*?(?:\b(?:subs…`: 4 units: 70.32, 709.03, 709.033, ATCP 50.40
- Term C.near `(?:\b(?:charges?|loans?|repayments?)\b)[\s\S]{0,1200}(?:\b(?:next|later|future|subsequent)\s+(?:customers?|occupants?|tenants?)\b)|(?:\b(?:n…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:charges?|loans?|repayments?)\b))(?=[\s\S]*?(?:\b(?:next|later|future|subsequent)\s+(?:customers?|occupants?|tenants?)\b…`: 2 units: 709.03, 709.033
- Term D.near `(?:\bsub-?meter\w*)[\s\S]{0,1200}(?:\b(?:water|sewer)\b)|(?:\b(?:water|sewer)\b)[\s\S]{0,1200}(?:\bsub-?meter\w*)`: 1 units: NR 852.05
- Term D.and `\A(?=[\s\S]*?(?:\bsub-?meter\w*))(?=[\s\S]*?(?:\b(?:water|sewer)\b))`: 1 units: NR 852.05
- Positive A: synthetic ('The utility may recover the cost through an on-bill repayment charge on the meter.') passed
- Positive B: synthetic ('The energy efficiency charge stays with the meter at the premises and the owner shall notify each new tenant of the charge.') passed
- Positive C: synthetic ('The repayment charge remains on the meter and is paid by the next customer at the premises.') passed
- Positive D: NR 852.05 ('installation of sub-meters to the cooling tower makeup water line') passed

#### WIG-C-016 — interruption of landlord-submetered or allocated electric service (Texas-style regime)

- Run 2026-11-16T07:24:25+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-C-018; rerun identical.
- Question: Searches for a regime governing a landlord's interruption of submetered or allocated electric service. A = term of art; B = submeter/allocation/joint metering + interruption + role word + electric (section-wide AND); C = everyday words (landlord cuts off service).
- Cited by: `edu-utility-interruption-submeter-wi`
- Term A.main `\bsub-?meter\w*`: 1 units: NR 852.05
- Term B.and `\A(?=[\s\S]*?(?:\bsub-?meter\w*|\ballocat\w*|\bmaster[- ]meter\w*|\bjointly[- ]metered\b))(?=[\s\S]*?(?:\b(?:interrupt\w*|disconnect\w*|shut…`: 5 units: 196.491, ATCP 93.050, NR 440.642, PSC 113.012, Wis. Const.
- Term C.near `(?:\b(?:landlords?|owners?|lessors?)\b)[\s\S]{0,1200}(?:\b(?:interrupt\w*|cut\w*\s+off|shut\w*\s+off|terminat\w*)\s+(?:the\s+)?(?:tenant['’]…`: 2 units: 66.0809, 196.643
- Term C.and `\A(?=[\s\S]*?(?:\b(?:landlords?|owners?|lessors?)\b))(?=[\s\S]*?(?:\b(?:interrupt\w*|cut\w*\s+off|shut\w*\s+off|terminat\w*)\s+(?:the\s+)?(?…`: 4 units: 66.0809, 196.643, NR 526.10, Wis. Const.
- Positive A: NR 852.05 ('installation of sub-meters to the cooling tower makeup water line') passed
- Positive B: PSC 113.0301 ('Prior to disconnecting a jointly-metered property') FAILED (and pattern does not match unit)
- Positive C: synthetic ('A landlord who submeters electricity may not interrupt the tenant's electric service for nonpayment except as provided by commission rule.') passed

#### WIG-C-017 — utility disclosure attachment or form for leases (cost, tariff, availability, allocation)

- Run 2026-11-16T07:24:53+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any prescribed utility disclosure form or attachment to a lease (costs, tariffs, availability, allocation). A = terms of art (no role word); B = disclose + utility + role word + lease (section-wide AND); C = everyday words (average monthly utility costs) near tenant words.
- Cited by: `edu-utility-disclosure-attachment-wi`
- Term A.main `\butility\s+(?:disclosure|information)\s+(?:forms?|statements?|addend(?:um|a)|attachments?)\b|\b(?:energy|utility)\s+(?:cost|usage)\s+disclo…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bdisclos\w*))(?=[\s\S]*?(?:\b(?:utility|utilities|electric\w*|heat|water)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|…`: 18 units: 32.05, 66.0809, 66.1201, 100.20, 134.49, 704.07, 706.09, 707.02, 943.20, ATCP 125.03, ATCP 134.04, ATCP 134.06 …
- Term C.near `(?:\b(?:average|monthly|annual)\s+(?:utility|energy|electric|heating|gas)\s+(?:costs?|bills?|charges?|consumption)\b)[\s\S]{0,1200}(?:\b(?:t…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:average|monthly|annual)\s+(?:utility|energy|electric|heating|gas)\s+(?:costs?|bills?|charges?|consumption)\b))(?=[\s\S]…`: 0 units
- Positive A: synthetic ('The landlord shall attach a utility disclosure form to the lease.') passed
- Positive B: ATCP 134.04 ('the landlord shall disclose the basis on which charges for utility services will be allocated') passed
- Positive C: synthetic ('The landlord shall give each prospective tenant the average monthly utility costs for the unit.') passed

#### WIG-C-018 — interruption of landlord-submetered or allocated electric service (Texas-style regime)

- Run 2026-11-16T07:25:37+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-C-016 (term B real positive (Wis. Admin. Code PSC § 113.0301) has no electric word, so the AND could not match it; replaced by Wis. Admin. Code PSC § 113.012); rerun identical.
- Question: Searches for a regime governing a landlord's interruption of submetered or allocated electric service. A = term of art; B = submeter/allocation/joint metering + interruption + role word + electric (section-wide AND); C = everyday words (landlord cuts off service).
- Cited by: `edu-utility-interruption-submeter-wi`
- Term A.main `\bsub-?meter\w*`: 1 units: NR 852.05
- Term B.and `\A(?=[\s\S]*?(?:\bsub-?meter\w*|\ballocat\w*|\bmaster[- ]meter\w*|\bjointly[- ]metered\b))(?=[\s\S]*?(?:\b(?:interrupt\w*|disconnect\w*|shut…`: 5 units: 196.491, ATCP 93.050, NR 440.642, PSC 113.012, Wis. Const.
- Term C.near `(?:\b(?:landlords?|owners?|lessors?)\b)[\s\S]{0,1200}(?:\b(?:interrupt\w*|cut\w*\s+off|shut\w*\s+off|terminat\w*)\s+(?:the\s+)?(?:tenant['’]…`: 2 units: 66.0809, 196.643
- Term C.and `\A(?=[\s\S]*?(?:\b(?:landlords?|owners?|lessors?)\b))(?=[\s\S]*?(?:\b(?:interrupt\w*|cut\w*\s+off|shut\w*\s+off|terminat\w*)\s+(?:the\s+)?(?…`: 4 units: 66.0809, 196.643, NR 526.10, Wis. Const.
- Positive A: NR 852.05 ('installation of sub-meters to the cooling tower makeup water line') passed
- Positive B: PSC 113.012 ('means a premises where electric service is measured jointly for 2 or more rental dwelling units') passed
- Positive C: synthetic ('A landlord who submeters electricity may not interrupt the tenant's electric service for nonpayment except as provided by commission rule.') passed

#### WIG-C-019 — limits on apportioning or ratio-billing unmetered utilities to tenants (bar, cap, formula rules)

- Run 2026-11-16T07:27:12+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any bar, cap or formula rule on apportioning jointly metered utilities to tenants (Connecticut and Oklahoma questions). A = terms of art (no role word); B = allocation + utility + role word + bar word + lease word (section-wide AND); C = everyday words (not separately metered / jointly metered) near tenant/landlord words.
- Cited by: `edu-utility-apportionment-wi`, `edu-ordnance-demolition-meter-disclosures-wi`
- Term A.main `\bratio\s+utility\s+billing\b|\b(?:allocat|apportion)\w*\s+(?:of\s+)?(?:the\s+)?(?:utility|utilities|water|gas|electric\w*|heat(?:ing)?)\s+(…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:allocat|apportion)\w*))(?=[\s\S]*?(?:\b(?:utility|utilities|water|gas|electric\w*|heat)\b))(?=[\s\S]*?(?:\b(?:tenants?|…`: 39 units: 13.48, 20.432, 20.438, 20.875, 23.09, 30.20, 32.05, 36.11, 36.25, 59.52, 59.70, 59.84 …
- Term C.near `(?:\bnot\s+separately\s+metered\b|\bmeasured\s+jointly\b|\bjointly[- ]metered\b|\bmaster[- ]meter\w*)[\s\S]{0,1200}(?:\b(?:tenants?|renters?…`: 3 units: 196.643, ATCP 134.04, PSC 113.0802
- Term C.and `\A(?=[\s\S]*?(?:\bnot\s+separately\s+metered\b|\bmeasured\s+jointly\b|\bjointly[- ]metered\b|\bmaster[- ]meter\w*))(?=[\s\S]*?(?:\b(?:tenant…`: 5 units: 196.643, ATCP 134.04, PSC 113.0301, PSC 113.0802, PSC 185.37
- Positive A: synthetic ('A landlord may use a ratio utility billing system only if the lease states the formula.') passed
- Positive B: synthetic ('A provision in a rental agreement that requires the tenant to pay for utility charges allocated from a master meter is void and unenforceable.') passed
- Positive C: ATCP 134.04 ('If individual dwelling units and common areas are not separately metered') passed

#### WIG-C-020 — sprinkler disclosure to tenants; sprinkler retrofit grants, loans or tax credits

- Run 2026-11-16T07:31:59+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-C-021; rerun identical.
- Question: Searches for any sprinkler disclosure to tenants and any grant, loan or tax credit for sprinkler retrofits (Minnesota and South Carolina questions). A = terms of art (no role word); B = sprinkler + role word + disclosure/grant word + dwelling word (section-wide AND); C = everyday words (sprinkler near tenant/lease).
- Cited by: `edu-sprinkler-disclosure-wi`
- Term A.main `\b(?:automatic\s+)?(?:fire\s+)?sprinkler\s+(?:system\s+)?(?:disclosures?|notices?|statements?)\b|\bsprinkler\s+retrofit\w*|\bretrofit\w*\s+(…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bsprinkler\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|lessors?|owners?)\b))(?=[\s\S…`: 9 units: 101.14, 709.03, DHS 105.14, DHS 163.10, DHS 83.48, SPS 314.01, Tax 11.68, Wis. Const., 2025 Wis. Act 15
- Term C.near `(?:\bsprinkler\w*)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|leases?|rental\s+agreements?)\b)|(?:\b(?:tenants?|renters?|lessees?|lease…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\bsprinkler\w*))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|leases?|rental\s+agreements?)\b))`: 9 units: 101.14, 709.03, ATCP 72.03, SPS 305.003, SPS 361.30, SPS 381.01, Tax 11.68, Wis. Const., 2025 Wis. Act 15
- Positive A: synthetic ('The landlord shall give each tenant a sprinkler disclosure stating whether the unit has an automatic fire sprinkler system.') passed
- Positive B: SPS 362.0903 ('Sprinkler protection complying with NFPA 13 shall be provided for exterior balconies') FAILED (and pattern does not match unit)
- Positive C: synthetic ('Before signing the lease, the tenant shall be told whether the building has a working sprinkler system.') passed

#### WIG-C-021 — sprinkler disclosure to tenants; sprinkler retrofit grants, loans or tax credits

- Run 2026-11-16T07:32:39+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-C-020 (term B real positive (Wis. Admin. Code SPS § 362.0903) lacks a role or notice word, so the AND could not match it; replaced by Wis. Stat. § 101.14); rerun identical.
- Question: Searches for any sprinkler disclosure to tenants and any grant, loan or tax credit for sprinkler retrofits (Minnesota and South Carolina questions). A = terms of art (no role word); B = sprinkler + role word + disclosure/grant word + dwelling word (section-wide AND); C = everyday words (sprinkler near tenant/lease).
- Cited by: `edu-sprinkler-disclosure-wi`
- Term A.main `\b(?:automatic\s+)?(?:fire\s+)?sprinkler\s+(?:system\s+)?(?:disclosures?|notices?|statements?)\b|\bsprinkler\s+retrofit\w*|\bretrofit\w*\s+(…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bsprinkler\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|lessors?|owners?)\b))(?=[\s\S…`: 9 units: 101.14, 709.03, DHS 105.14, DHS 163.10, DHS 83.48, SPS 314.01, Tax 11.68, Wis. Const., 2025 Wis. Act 15
- Term C.near `(?:\bsprinkler\w*)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|leases?|rental\s+agreements?)\b)|(?:\b(?:tenants?|renters?|lessees?|lease…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\bsprinkler\w*))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|leases?|rental\s+agreements?)\b))`: 9 units: 101.14, 709.03, ATCP 72.03, SPS 305.003, SPS 361.30, SPS 381.01, Tax 11.68, Wis. Const., 2025 Wis. Act 15
- Positive A: synthetic ('The landlord shall give each tenant a sprinkler disclosure stating whether the unit has an automatic fire sprinkler system.') passed
- Positive B: 101.14 ('that require an automatic fire sprinkler system or 2-hour fire resistance in every multifamily dwelling') passed
- Positive C: synthetic ('Before signing the lease, the tenant shall be told whether the building has a working sprinkler system.') passed

#### WIG-C-022 — duty to supply a stove, range or refrigerator in a rental unit

- Run 2026-11-16T07:35:38+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any duty to supply a stove, range or refrigerator in a rental. A = terms of art (no role word); B = appliance + role word + unit word + duty word (section-wide AND); C = everyday words (refrigerator/stove near tenant/landlord).
- Cited by: `edu-stove-refrigerator-wi`
- Term A.main `\b(?:provide|supply|furnish)(?:s|ed|ing)?\s+(?:a\s+|an\s+|the\s+)?(?:\w+\s+)?(?:refrigerators?|stoves?|cooking\s+(?:appliances?|ranges?|stov…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\brefrigerat\w*|\bstoves?\b|\bcooking\s+(?:appliances?|facilities|equipment)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters…`: 10 units: 60.85, 77.52, 125.51, 287.17, 709.03, DCF 59.06, DHS 105.14, SPS 314.01, SPS 321.097, SPS 362.0903
- Term C.near `(?:\brefrigerators?\b|\bstoves?\b)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|landlords?|lessors?)\b)|(?:\b(?:tenants?|renters?|lessees…`: 6 units: 167.25, 422.417, 814.035, DCF 56.04, DHS 89.13, DHS 89.22
- Term C.and `\A(?=[\s\S]*?(?:\brefrigerators?\b|\bstoves?\b))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|landlords?|lessors?)\b))`: 12 units: 77.52, 167.25, 422.417, 814.035, DCF 56.04, DHS 89.13, DHS 89.22, Ins 4.10, SPS 305.003, SPS 321.097, Tax 11.48, Tax 11.68
- Positive A: synthetic ('The landlord shall provide a working refrigerator and stove in each dwelling unit.') passed
- Positive B: synthetic ('Each dwelling unit offered for rent shall be provided with a stove and refrigerator, and the landlord shall maintain them.') passed
- Positive C: synthetic ('The landlord must give the tenant a refrigerator in good working order.') passed

#### WIG-C-023 — balcony, deck or exterior elevated element inspection for rental buildings

- Run 2026-11-16T07:36:09+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any periodic inspection duty for balconies, decks or exterior elevated elements of rental buildings. A = terms of art (no role word); B = balcony + inspect + role word + residential word (section-wide AND); C = everyday words (balcony/porch/deck near inspect/engineer).
- Cited by: `edu-balcony-inspection-wi`
- Term A.main `\b(?:balcony|balconies|decks?|exterior\s+elevated\s+elements?|elevated\s+elements?)\s+inspections?\b|\binspect(?:s|ed|ing|ion|ions)?\s+(?:of…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bbalcon(?:y|ies)\b|\bdecks?\b|\belevated\s+elements?\b))(?=[\s\S]*?(?:\binspect\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|re…`: 20 units: 59.692, 59.694, 62.23, 709.03, ATCP 72.03, ATCP 76.03, ATCP 79.13, ATCP 93.050, DCF 202.08, DCF 250.06, DCF 251.06, DHS 157.03 …
- Term C.near `(?:\bbalcon(?:y|ies)\b|\bporch(?:es)?\b|\bdecks?\b)[\s\S]{0,1200}(?:\b(?:inspect\w*|engineers?|load\s+tests?|structural\s+evaluation)\b)|(?:…`: 28 units: ATCP 72.03, ATCP 76.03, ATCP 79.13, DCF 52.56, DHS 163.03, DHS 163.14, Ins 4.10, NR 661.1084, NR 664.1084, NR 665.1081, NR 665.1085, SPS 131.32 …
- Term C.and `\A(?=[\s\S]*?(?:\bbalcon(?:y|ies)\b|\bporch(?:es)?\b|\bdecks?\b))(?=[\s\S]*?(?:\b(?:inspect\w*|engineers?|load\s+tests?|structural\s+evaluat…`: 70 units: 59.692, 59.694, 62.23, 66.0435, 101.01, 103.001, 443.01, 709.03, 801.05, 895.07, ATCP 72.03, ATCP 72.18 …
- Positive A: synthetic ('The owner shall have a balcony inspection performed every 6 years.') passed
- Positive B: synthetic ('The owner of a residential building with 3 or more dwelling units shall have each balcony inspected by a licensed engineer.') passed
- Positive C: synthetic ('Each deck shall be examined by an engineer, who shall report its condition.') passed

#### WIG-C-024 — private well testing for rentals; well test results to tenants

- Run 2026-11-16T07:36:32+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any duty to test a private well serving rental housing or give results to tenants. A = terms of art (no role word); B = well + tenant/landlord + test word + rental word (section-wide AND); C = everyday words (well near tenant/landlord). The well/'as well as' trap is handled by reading the hits.
- Cited by: `edu-private-well-testing-wi`
- Term A.main `\b(?:private|potable)\s+wells?\s+(?:testing|tests?|sampl\w*)\b|\bwell\s+water\s+(?:testing|tests?|sampl\w*)\b|\btest(?:ing)?\s+(?:of\s+)?(?:…`: 9 units: ATCP 72.16, DCF 251.095, DCF 56.04, DHS 105.14, DHS 75.29, DHS 83.13, NR 140.24, NR 140.26, NR 812.43
- Term B.and `\A(?=[\s\S]*?(?:\bwells?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))(?=[\s\S]*?(?:\b(?:test\w*|sampl\w*|result…`: 30 units: 13.48, 66.1103, 66.1201, 66.1333, 70.32, 77.29, 77.52, 102.03, 106.50, 281.75, 632.32, 632.977 …
- Term C.near `(?:\bwells?\b)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|landlords?|lessors?)\b)|(?:\b(?:tenants?|renters?|lessees?|landlords?|lessors…`: 33 units: 77.52, 101.01, 101.953, 103.001, 106.50, 107.01, 128.17, 254.595, 281.75, 344.01, 345.28, 411.405 …
- Term C.and `\A(?=[\s\S]*?(?:\bwells?\b))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|landlords?|lessors?)\b))`: 68 units: 13.48, 16.84, 29.889, 66.1103, 66.1201, 66.1333, 70.32, 77.29, 77.52, 77.53, 101.01, 101.02 …
- Positive A: synthetic ('The landlord shall have private well testing done for coliform bacteria and nitrate every year.') passed
- Positive B: synthetic ('A landlord of a dwelling unit served by a private well shall test the well and give the results to each tenant before the lease is signed.') passed
- Positive C: NR 812.27 ('The pump installer may designate the owner, the property lessee, or any other person to flush the system') passed

#### WIG-C-025 — landlord duties for other building facilities (garage door openers, laundry, intercoms, trash chutes)

- Run 2026-11-16T07:37:02+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for landlord duties for building facilities other than the core repair duties (Minnesota garage-door question). A = terms of art (no role word); B = facility + role word + rental word + duty word (section-wide AND); C = everyday words (facility near tenant/landlord).
- Cited by: `edu-other-landlord-facilities-wi`
- Term A.main `\bgarage\s+door\s+(?:openers?|operators?)\b|\bautomatic\s+garage\s+doors?\b`: 3 units: 111.32, 709.03, SPS 131.32
- Term B.and `\A(?=[\s\S]*?(?:\bgarage\s+doors?\b|\blaundry\s+(?:facilities|rooms?|equipment)\b|\bintercoms?\b|\btrash\s+chutes?\b))(?=[\s\S]*?(?:\b(?:ten…`: 9 units: 77.52, 101.14, 709.03, Adm 92.04, DCF 59.06, DHS 163.03, DHS 83.48, SPS 131.32, Tax 11.68
- Term C.near `(?:\bgarage\s+doors?\b|\blaundry\b|\bintercoms?\b)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|landlords?|lessors?)\b)|(?:\b(?:tenants?|…`: 10 units: 71.52, 77.52, DHS 107.13, DHS 63.11, DHS 89.13, DHS 89.23, DHS 89.24, Tax 11.52, Tax 11.72, Tax 14.05
- Term C.and `\A(?=[\s\S]*?(?:\bgarage\s+doors?\b|\blaundry\b|\bintercoms?\b))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|landlords?|lessors?)\b))`: 14 units: 71.52, 77.52, 101.14, ATCP 79.03, DHS 107.13, DHS 63.11, DHS 89.13, DHS 89.23, DHS 89.24, SPS 381.01, Tax 11.52, Tax 11.68 …
- Positive A: SPS 131.32 ('Garage door operators, including whether any garage door operator automatically reverses') passed
- Positive B: synthetic ('A landlord who provides an automatic garage door opener in a rental dwelling unit shall maintain the garage door so that it reverses on contact.') passed
- Positive C: synthetic ('The landlord shall keep the laundry room open to tenants.') passed

#### WIG-C-026 — steam radiator covers on request; lease rider

- Run 2026-11-16T07:37:54+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a New Jersey-style steam radiator cover duty with a lease rider. A = terms of art (no role word); B = radiator + role word + cover word + rental word (section-wide AND); C = everyday words (radiator/steam heat near tenant/landlord/children).
- Cited by: `edu-steam-radiator-covers-wi`
- Term A.main `\bradiator\s+(?:covers?|guards?|shields?|enclosures?)\b|\bsteam\s+radiators?\b`: 4 units: ATCP 78.24, DCF 250.06, DCF 251.06, DCF 52.56
- Term B.and `\A(?=[\s\S]*?(?:\bradiators?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|lessors?|owners?)\b))(?=[\s\S…`: 1 units: DHS 163.03
- Term C.near `(?:\bradiators?\b|\bsteam\s+heat\w*)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|landlords?|children)\b)|(?:\b(?:tenants?|renters?|lesse…`: 3 units: ATCP 139.08, DCF 250.06, DCF 251.06
- Term C.and `\A(?=[\s\S]*?(?:\bradiators?\b|\bsteam\s+heat\w*))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|landlords?|children)\b))`: 9 units: 16.27, ATCP 139.08, DCF 250.06, DCF 251.06, DCF 52.56, DHS 163.03, NR 812.07, SPS 381.01, Trans 131.03
- Positive A: synthetic ('On request of a tenant with a child under 6, the owner shall install radiator covers on each steam radiator.') passed
- Positive B: synthetic ('The owner of a dwelling unit heated by steam shall install a cover on each radiator at the request of a tenant, and the lease shall include a notice of this rig') passed
- Positive C: synthetic ('A landlord shall protect tenants and children from hot radiators.') passed

#### WIG-C-027 — asbestos notice or disclosure to tenants

- Run 2026-11-16T07:43:05+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any duty to notify or disclose asbestos to residential tenants. A = terms of art; B = asbestos + role word + notice word + rental word (section-wide AND); C = everyday words (asbestos near tenant/landlord).
- Cited by: `edu-asbestos-hazards-wi`
- Term A.main `\basbestos\s+(?:notices?|disclosures?|notifications?|surveys?)\b|\basbestos[- ]containing\s+(?:material|building\s+material)s?\b`: 27 units: 254.11, 254.20, 254.21, 285.69, 709.03, DHS 159.02, DHS 159.04, DHS 159.06, DHS 159.19, DHS 159.20, DHS 159.29, DHS 159.30 …
- Term B.and `\A(?=[\s\S]*?(?:\basbestos\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|lessors?|owners?)\b))(?=[\s\S]*…`: 16 units: 20.875, 66.0627, 101.11, 234.661, 234.662, 709.03, 709.033, DHS 163.10, DHS 163.12, DHS 163.13, DHS 163.14, DHS 163.42 …
- Term C.near `(?:\basbestos\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b)|(?:\b(?:tenants?|lessees?|renters?|landlords?|lesso…`: 1 units: REEB 25.023
- Term C.and `\A(?=[\s\S]*?(?:\basbestos\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))`: 5 units: 66.0627, 101.11, DHS 163.10, DHS 163.42, REEB 25.023
- Positive A: synthetic ('The owner shall give each tenant an asbestos notice describing any asbestos-containing material in the building.') passed
- Positive B: synthetic ('The landlord of a rental dwelling unit shall notify each tenant of asbestos in the building.') passed
- Positive C: synthetic ('The landlord shall tell the tenant where asbestos is located.') passed

#### WIG-C-028 — bed bug or pest cooperation, reporting or treatment duties between landlord and tenant

- Run 2026-11-16T07:43:40+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any bed bug or pest statute on reporting, cooperation, access or treatment between landlord and tenant. A = terms of art (no role word); B = infestation + tenant/landlord + treatment/report word + rental word (section-wide AND); C = everyday words (pests near tenant/landlord).
- Cited by: `pest-cooperation-wi`, `edu-bed-bug-cooperation-wi`
- Term A.main `\bbed\s?bugs?\b|\bcimex\b`: 5 units: ATCP 72.03, ATCP 72.19, ATCP 72.26, ATCP 78.03, ATCP 79.21
- Term B.and `\A(?=[\s\S]*?(?:\b(?:infest\w*|pests?|vermin|insects?|rodents?)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))(?=…`: 5 units: 66.0104, 704.07, ATCP 72.03, ATCP 78.03, SPS 381.01
- Term C.near `(?:\b(?:bed\s?bugs?|infest\w*|vermin|pests?)\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b)|(?:\b(?:tenants?|les…`: 7 units: 26.30, 27.09, 66.0104, 704.07, ATCP 72.03, ATCP 78.03, NR 812.27
- Term C.and `\A(?=[\s\S]*?(?:\b(?:bed\s?bugs?|infest\w*|vermin|pests?)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))`: 7 units: 26.30, 27.09, 66.0104, 704.07, ATCP 72.03, ATCP 78.03, NR 812.27
- Positive A: synthetic ('A tenant who suspects bed bugs shall notify the landlord.') passed
- Positive B: 704.07 ('If the premises are damaged, including by an infestation of insects or other pests, due to the acts or inaction of the tenant') passed
- Positive C: 704.07 ('including by an infestation of insects or other pests, due to the acts or inaction of the tenant') passed

#### WIG-C-029 — notice to tenants or occupants before pesticide application

- Run 2026-11-16T07:44:07+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any pesticide-application notice to tenants or occupants. A = terms of art (no role word); B = pesticide + role word + notice word + residential word (section-wide AND); C = everyday words (pesticide/exterminator near tenant/occupant).
- Cited by: `edu-pest-control-notice-wi`
- Term A.main `\bpesticide\s+(?:application\s+)?(?:notices?|notifications?|postings?|signs?)\b|\b(?:prior|advance)\s+notice\s+of\s+(?:the\s+)?(?:pesticide|…`: 3 units: ATCP 29.01, ATCP 29.51, ATCP 29.53
- Term B.and `\A(?=[\s\S]*?(?:\bpesticides?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|lessors?|owners?)\b))(?=[\s\…`: 16 units: 59.70, 70.11, 77.54, 97.01, 292.11, 709.033, ATCP 29.22, ATCP 29.52, ATCP 29.55, ATCP 29.56, ATCP 30.22, ATCP 35.14 …
- Term C.near `(?:\b(?:pesticides?|extermin\w*|fumigat\w*)\b)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|occupants?)\b)|(?:\b(?:tenants?|renters?|less…`: 5 units: 292.11, ATCP 29.55, ATCP 29.56, NR 12.10, NR 47.914
- Term C.and `\A(?=[\s\S]*?(?:\b(?:pesticides?|extermin\w*|fumigat\w*)\b))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|occupants?)\b))`: 15 units: 59.70, 70.11, 77.54, 97.01, 292.11, 340.01, 709.033, ATCP 29.55, ATCP 29.56, ATCP 78.03, ATCP 78.24, DCF 252.43 …
- Positive A: synthetic ('The applicator shall give a pesticide application notice to each occupant.') passed
- Positive B: synthetic ('Before a pesticide is applied in a residential building, the owner shall notify each tenant and post notice.') passed
- Positive C: synthetic ('The landlord shall warn the tenants before the exterminator sprays.') passed

#### WIG-C-030 — mold disclosure, notice or pamphlet for rentals

- Run 2026-11-16T07:44:34+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any mold disclosure, notice or pamphlet duty for rentals. A = terms of art (no role word); B = mold + role word + disclosure word + rental word (section-wide AND); C = everyday words (mold near tenant/landlord). The mold/molding trap is handled by \b.
- Cited by: `edu-mold-disclosure-wi`
- Term A.main `\bmold\s+(?:disclosures?|notices?|pamphlets?|booklets?|inspections?|remediation)\b|\b(?:visible|excessive|toxic)\s+mold\b`: 1 units: 66.0104
- Term B.and `\A(?=[\s\S]*?(?:\bmold\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|lessors?|owners?)\b))(?=[\s\S]*?(?:…`: 8 units: 62.23, 66.0104, 234.661, 234.662, 709.03, DHS 107.24, DHS 163.42, NR 113.03
- Term C.near `(?:\bmold\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b)|(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)…`: 1 units: 66.0104
- Term C.and `\A(?=[\s\S]*?(?:\bmold\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))`: 3 units: 66.0104, 102.03, DHS 163.42
- Positive A: 66.0104 ('contains excessive mold') passed
- Positive B: synthetic ('Before signing a lease for a dwelling unit, the landlord shall disclose any visible mold to the tenant.') passed
- Positive C: synthetic ('The landlord shall tell the tenant about mold in the unit.') passed

#### WIG-C-031 — defective (Chinese) drywall disclosure

- Run 2026-11-16T07:45:07+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any defective-drywall disclosure. A = terms of art (no role word); B = drywall + role word + disclosure word (section-wide AND); C = everyday words (drywall near defect/corrosion).
- Cited by: `edu-defective-drywall-disclosure-wi`
- Term A.main `\b(?:defective|corrosive|contaminated|chinese|imported)\s+drywall\b|\bdrywall\s+(?:disclosures?|remediation)\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\bdrywall\b|\bgypsum\s+board\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|lessors?|owne…`: 3 units: DHS 163.14, DHS 83.51, NR 500.03
- Term C.near `(?:\bdrywall\b|\bgypsum\s+(?:board|wallboard)\b)[\s\S]{0,1200}(?:\b(?:defect\w*|corros\w*|sulfur|contaminat\w*|hazard\w*)\b)|(?:\b(?:defect\…`: 3 units: DHS 163.14, NR 422.02, NR 500.03
- Term C.and `\A(?=[\s\S]*?(?:\bdrywall\b|\bgypsum\s+(?:board|wallboard)\b))(?=[\s\S]*?(?:\b(?:defect\w*|corros\w*|sulfur|contaminat\w*|hazard\w*)\b))`: 3 units: DHS 163.14, NR 422.02, NR 500.03
- Positive A: synthetic ('The seller or landlord shall disclose any defective drywall in the dwelling.') passed
- Positive B: synthetic ('An owner who knows of corrosive drywall in a residence shall disclose it to the tenant.') passed
- Positive C: synthetic ('Drywall that emits sulfur gases is a hazard the owner must disclose.') passed

#### WIG-C-032 — chemical exposure warning for rental property (Proposition 65-style; formaldehyde notice)

- Run 2026-11-16T07:45:38+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any chemical-exposure warning duty that reaches rental property (California Proposition 65; Minnesota formaldehyde notice). A = terms of art; B = chemical + role word + warning word + rental word (section-wide AND); C = everyday words (cancer/formaldehyde near tenant/rental).
- Cited by: `edu-prop65-rental-warning-wi`
- Term A.main `\bclearly\s+and\s+reasonable\s+warnings?\b|\b(?:known\s+to\s+the\s+state\s+to\s+cause\s+cancer)\b|\bformaldehyde\s+(?:notices?|warnings?|dis…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:carcinogen\w*|formaldehyde|chemicals?\s+known|toxic\s+substances?)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|res…`: 3 units: 709.03, 709.033, NR 811.12
- Term C.near `(?:\b(?:cancer|carcinogen\w*|formaldehyde|reproductive\s+(?:harm|toxicity))\b)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|landlords?|le…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:cancer|carcinogen\w*|formaldehyde|reproductive\s+(?:harm|toxicity))\b))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|la…`: 10 units: 13.48, 20.385, 20.432, 20.433, 20.540, 20.875, DHS 107.09, NR 169.05, NR 700.03, 2025 Wis. Act 15
- Positive A: synthetic ('No person shall expose any individual to a chemical known to the state to cause cancer without first giving clearly and reasonable warning.') passed
- Positive B: synthetic ('The landlord of a dwelling unit with formaldehyde-emitting materials shall give each tenant a warning notice.') passed
- Positive C: synthetic ('A landlord must warn renters about chemicals that cause cancer.') passed

#### WIG-C-033 — military ordnance location, demolition permit or shared-meter disclosure to tenants (California-style)

- Run 2026-11-16T07:46:14+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for California-style disclosures of former military ordnance locations, pending demolition permits and shared meters (shared meters are covered by WIG-C-019). A = terms of art; B = ordnance/demolition + role word + notice word + rental word (section-wide AND); C = everyday words near tenant words.
- Cited by: `edu-ordnance-demolition-meter-disclosures-wi`
- Term A.main `\b(?:former\s+(?:federal\s+or\s+state\s+)?)?ordnance\s+locations?\b|\bmunitions\b|\bunexploded\s+(?:ordnance|munitions)\b`: 35 units: 283.01, 299.80, NR 200.02, NR 205.03, NR 299.02, NR 465.31, NR 465.41, NR 660.10, NR 662.010, NR 663.10, NR 664.0001, NR 664.0070 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:ordnance|munitions|demolition\s+permits?|application\s+for\s+(?:a\s+)?demolition)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessee…`: 1 units: 340.01
- Term C.near `(?:\b(?:ordnance|munitions|demolition\s+permits?)\b)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|prospective)\b)|(?:\b(?:tenants?|renter…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:ordnance|munitions|demolition\s+permits?)\b))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|prospective)\b))`: 0 units
- Positive A: synthetic ('The landlord shall disclose any former ordnance location within one mile of the unit.') passed
- Positive B: synthetic ('A landlord who has applied for a demolition permit shall give notice to the prospective tenant before the lease is signed.') passed
- Positive C: synthetic ('Prospective tenants must be told of a pending demolition permit.') passed

#### WIG-C-034 — shoreline, coastal or public access disclosure to tenants

- Run 2026-11-16T07:46:54+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any disclosure to tenants of shoreline or public water access (Rhode Island and Guam questions). A = terms of art (no role word); B = shoreline word + tenant/landlord + notice word + lease word (section-wide AND); C = everyday words near tenant/lease words.
- Cited by: `edu-shoreline-access-disclosure-wi`
- Term A.main `\b(?:public\s+)?(?:shoreline|shore|coastal|beach)\s+access\b|\b(?:right|rights)\s+of\s+(?:public\s+)?access\s+to\s+(?:the\s+)?(?:shore|shore…`: 2 units: NR 320.04, NR 51.934
- Term B.and `\A(?=[\s\S]*?(?:\b(?:shoreline|shore|beach|navigable\s+waters?|riparian)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors…`: 8 units: 66.0823, 70.11, 101.11, 182.70, 182.71, 703.02, NR 45.12, Wis. Const.
- Term C.near `(?:\b(?:shoreline|shore|beach|riparian)\b)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|leases?)\b)|(?:\b(?:tenants?|renters?|lessees?|le…`: 19 units: 1.11, 24.39, 30.11, 30.134, 30.2039, 30.21, 60.782, 62.22, 70.32, 182.71, 240.10, 295.605 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:shoreline|shore|beach|riparian)\b))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|leases?)\b))`: 50 units: 1.11, 20.360, 20.540, 20.875, 24.39, 27.01, 30.11, 30.134, 30.20, 30.2039, 30.21, 30.30 …
- Positive A: synthetic ('The lease shall disclose any public shoreline access across the property.') passed
- Positive B: synthetic ('A landlord of a dwelling unit on a beach shall give notice to the tenant of public rights to the shoreline before the lease is signed.') passed
- Positive C: synthetic ('Tenants of shoreline property must be told of public access.') passed

#### WIG-C-035 — key control policy and employee background checks for apartment complexes

- Run 2026-11-16T07:47:20+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for a key-control policy or employee background-check duty for rental complexes. A = terms of art (no role word); B = keys + role word + background/employee + rental word (section-wide AND); C = everyday words (keys near employees/staff).
- Cited by: `edu-key-control-policy-wi`
- Term A.main `\bkey\s+control\b|\bmaster\s+keys?\b|\bkey\s+(?:management|log)s?\b`: 4 units: 632.69, DOC 346.38, DOC 347.47, DOC 350.18
- Term B.and `\A(?=[\s\S]*?(?:\bkeys?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|lessors?|owners?)\b))(?=[\s\S]*?(?…`: 4 units: ATCP 72.03, DHS 163.03, Wis. Const., 2025 Wis. Act 15
- Term C.near `(?:\bkeys?\b)[\s\S]{0,1200}(?:\b(?:employees?|staff|agents?|maintenance\s+workers?)\b)|(?:\b(?:employees?|staff|agents?|maintenance\s+worker…`: 62 units: 20.923, 102.03, 103.465, 125.26, 125.51, 217.05, 238.399, 251.05, 299.83, 601.952, 616.50, ATCP 93.050 …
- Term C.and `\A(?=[\s\S]*?(?:\bkeys?\b))(?=[\s\S]*?(?:\b(?:employees?|staff|agents?|maintenance\s+workers?)\b))`: 98 units: 20.923, 36.65, 102.03, 103.465, 119.23, 125.26, 125.51, 217.05, 238.399, 251.05, 299.83, 349.13 …
- Positive A: synthetic ('The owner of an apartment complex shall adopt a key control policy for master keys.') passed
- Positive B: synthetic ('The owner of an apartment complex shall conduct a background check on each employee who has access to keys to dwelling units of tenants.') passed
- Positive C: synthetic ('Employees with keys to the units must pass a background check.') passed

#### WIG-C-036 — smart access systems (smart locks, app or electronic entry) in residential rentals; connected-device access cutoff

- Run 2026-11-16T07:48:00+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any regulation of smart locks, app-based or electronic entry, or connected-device access in rentals. A = terms of art (no role word); B = device term + role word + rental word (section-wide AND); C = everyday words (lock/entry near app/electronic).
- Cited by: `edu-smart-access-wi`
- Term A.main `\bsmart\s+(?:access|locks?|home)\b|\b(?:keyless|electronic|digital|biometric)\s+(?:entry|access|locks?)\b|\bconnected\s+devices?\b|\baccess\…`: 19 units: 6.33, 35.18, 35.93, 101.055, 134.98, 153.81, 165.8287, 182.01, 227.21, 253.06, 343.03, 343.14 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:smart\s+locks?|keyless|electronic\s+(?:entry|locks?|access)|biometric|access\s+codes?|connected\s+devices?)\b))(?=[\s\S…`: 6 units: 441.51, 457.50, 457.70, 459.70, ATCP 10.01, 2025 Wis. Act 232
- Term C.near `(?:\b(?:locks?|entry|access)\b)[\s\S]{0,1200}(?:\b(?:app|application|smartphone|electronic|software|digital)\b)|(?:\b(?:app|application|smar…`: 810 units: 5.05, 5.905, 6.33, 6.36, 6.50, 7.10, 7.15, 7.37, 7.51, 9.01, 11.0101, 12.13 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:locks?|entry|access)\b))(?=[\s\S]*?(?:\b(?:app|application|smartphone|electronic|software|digital)\b))`: 1371 units: 5.05, 5.35, 5.905, 6.33, 6.36, 6.50, 7.10, 7.15, 7.37, 7.51, 7.52, 9.01 …
- Positive A: synthetic ('A landlord who installs a smart access system shall give tenants a physical key on request.') passed
- Positive B: synthetic ('The landlord may not require a tenant to use a smart lock or keyless entry system to enter the dwelling unit.') passed
- Positive C: synthetic ('Entry to the unit by a smartphone app requires the tenant's consent.') passed

#### WIG-C-037 — tenant right to install portable or window air conditioning (cooling devices)

- Run 2026-11-16T07:48:29+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any tenant right to install portable or window cooling devices, or limits on lease restrictions. A = terms of art (no role word); B = cooling + tenant/landlord + install/restrict + lease word (section-wide AND); C = everyday words (air conditioning near tenant/landlord).
- Cited by: `portable-cooling-device-wi`, `edu-portable-cooling-device-wi`, `edu-confirmed-absences-habitability-wi`
- Term A.main `\b(?:portable|window)\s+(?:air\s+condition\w*|cooling\s+(?:devices?|units?))\b|\bcooling\s+devices?\b|\bair\s+conditioning\s+units?\b`: 4 units: ATCP 65.16, NR 290.03, Tax 11.68, Trans 300.81
- Term B.and `\A(?=[\s\S]*?(?:\b(?:air\s+condition\w*|cooling)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))(?=[\s\S]*?(?:\b(?…`: 18 units: 13.48, 16.84, 16.848, 66.1103, 71.07, 71.47, 77.52, 77.54, 704.07, DHS 163.10, DHS 163.42, Ins 4.10 …
- Term C.near `(?:\b(?:air\s+condition\w*|cooling\s+(?:devices?|units?|systems?))\b)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|landlords?|lessors?)\b…`: 8 units: 704.07, ATCP 110.01, ATCP 79.03, DHS 132.815, DHS 134.815, Ins 4.10, PSC 113.0803, SPS 361.60
- Term C.and `\A(?=[\s\S]*?(?:\b(?:air\s+condition\w*|cooling\s+(?:devices?|units?|systems?))\b))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|landlords?|…`: 19 units: 66.1103, 77.52, 77.54, 341.10, 704.07, ATCP 110.01, ATCP 79.03, DHS 132.815, DHS 134.815, DHS 163.10, DHS 163.42, Ins 4.10 …
- Positive A: synthetic ('A landlord may not prohibit a tenant from installing a portable cooling device.') passed
- Positive B: synthetic ('A landlord may not prohibit a tenant from installing a window air conditioning unit in the dwelling unit, except as provided in the lease.') passed
- Positive C: 704.07 ('such as heat, water, elevator, or air conditioning') passed

#### WIG-C-038 — landlord duty to give tenants recycling information or provide recycling

- Run 2026-11-16T07:49:04+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any landlord recycling-notice or recycling-service duty (Oregon question). A = terms of art (no role word); B = recycling + role word + multifamily word + duty word (section-wide AND); C = everyday words (recycling near tenant/landlord/occupant).
- Cited by: `edu-recycling-notice-wi`
- Term A.main `\brecycl\w*\s+(?:notices?|information|containers?|services?|facilities)\b|\bsource[- ]separat\w*`: 27 units: 16.15, 66.0617, 66.1001, 289.24, 291.01, ATCP 137.05, ATCP 79.20, ATCP 93.300, NR 151.124, NR 185.03, NR 185.07, NR 500.03 …
- Term B.and `\A(?=[\s\S]*?(?:\brecycl\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|lessors?|owners?)\b))(?=[\s\S]*?…`: 28 units: 20.875, 36.25, 59.70, 66.0617, 66.0627, 77.54, 177.01, 287.11, 287.13, 287.17, 287.24, 340.01 …
- Term C.near `(?:\brecycl\w*)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|landlords?|lessors?|occupants?)\b)|(?:\b(?:tenants?|renters?|lessees?|landlo…`: 14 units: 101.126, 287.11, 287.13, 287.24, 347.475, 704.90, ATCP 125.03, ATCP 137.07, NR 544.06, SPS 362.0400, SPS 366.0100, Tax 11.29 …
- Term C.and `\A(?=[\s\S]*?(?:\brecycl\w*))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|landlords?|lessors?|occupants?)\b))`: 32 units: 36.25, 59.70, 66.0627, 77.54, 101.126, 287.11, 287.13, 287.24, 292.11, 340.01, 347.475, 704.90 …
- Positive A: synthetic ('The owner shall provide recycling containers and recycling information to occupants.') passed
- Positive B: synthetic ('The owner of a multifamily dwelling shall provide recycling containers for tenants and shall inform each occupant of the program.') passed
- Positive C: synthetic ('The landlord must tell tenants how to recycle.') passed

#### WIG-C-039 — access to rental buildings for political candidates, canvassers or petitioners

- Run 2026-11-16T07:49:40+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any right of candidates, canvassers or petitioners to enter rental buildings, or tenant political rights against landlords. A = terms of art (no role word); B = political word + role word + access word + building word (section-wide AND); C = everyday words near tenant/landlord/apartment.
- Cited by: `edu-political-access-wi`
- Term A.main `\bcanvass\w*|\bdoor[- ]to[- ]door\b|\bcampaign\s+literature\b`: 92 units: 5.01, 5.061, 5.10, 5.60, 5.85, 5.89, 5.90, 6.15, 6.21, 6.36, 6.79, 6.80 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:candidates?|canvass\w*|campaign\w*|petition\w*|political)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|o…`: 46 units: 13.48, 20.432, 20.875, 23.33, 32.22, 36.11, 36.25, 49.45, 50.034, 59.54, 59.694, 59.70 …
- Term C.near `(?:\b(?:candidates?|canvass\w*|campaign\w*|political)\b)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|landlords?|lessors?|apartments?)\b)|(?:\b(?:…`: 19 units: 12.04, 66.0304, 66.1010, 106.50, 114.002, 182.0175, 893.04, 893.80, 943.13, ATCP 76.03, ATCP 76.05, Adm 2.03 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:candidates?|canvass\w*|campaign\w*|political)\b))(?=[\s\S]*?(?:\b(?:tenants?|renters?|landlords?|lessors?|apartments?)\…`: 43 units: 6.875, 12.04, 23.33, 36.25, 46.284, 66.0217, 66.0304, 66.0823, 66.0825, 66.1010, 66.1201, 71.63 …
- Positive A: synthetic ('A landlord may not prohibit canvassing in an apartment building by a candidate.') passed
- Positive B: synthetic ('The owner of an apartment building shall permit a candidate for public office to enter the building to campaign door to door to tenants.') passed
- Positive C: 12.04 ('The renter of residential property may exercise the same right as the owner to place a sign') passed

#### WIG-C-040 — tenant religious or cultural display rights (door, mezuzah, decorations)

- Run 2026-11-16T07:50:13+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Searches for any tenant right to display religious or cultural items. A = terms of art (no role word); B = religious + tenant/landlord + display word + lease word (section-wide AND); C = everyday words (religious near tenant/landlord). Fair housing (religion as a protected class) is covered by `edu-fair-housing-wi`.
- Cited by: `edu-religious-cultural-display-wi`
- Term A.main `\breligious\s+(?:items?|symbols?|displays?|objects?)\b|\bmezuzah\b|\b(?:cultural|holiday)\s+(?:displays?|decorations?)\b`: 2 units: Adm 2.08, DOC 350.32
- Term B.and `\A(?=[\s\S]*?(?:\breligio\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))(?=[\s\S]*?(?:\b(?:display\w*|symbols?|i…`: 17 units: 13.48, 32.19, 70.11, 77.52, 77.54, 97.01, 106.50, 108.02, 632.977, ATCP 76.03, ATCP 78.03, Adm 92.01 …
- Term C.near `(?:\breligio\w*|\bmezuzah\b)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|lessees?|landlords?|lessors?)\b)|(?:\b(?:tenants?|renters?|lessees?|land…`: 14 units: 32.19, 70.11, 106.50, 632.977, ATCP 134.01, ATCP 76.03, ATCP 78.03, Adm 92.40, Adm 92.68, DHS 89.34, KB 1.03, NR 12.41 …
- Term C.and `\A(?=[\s\S]*?(?:\breligio\w*|\bmezuzah\b))(?=[\s\S]*?(?:\b(?:tenants?|renters?|lessees?|landlords?|lessors?)\b))`: 32 units: 13.48, 32.19, 70.11, 70.337, 71.63, 77.52, 77.54, 97.01, 106.50, 108.02, 121.52, 125.02 …
- Positive A: synthetic ('A landlord may not prohibit a tenant from displaying a religious item on the entry door.') passed
- Positive B: synthetic ('A lease may not prohibit a tenant from displaying a religious symbol on the door of the dwelling unit.') passed
- Positive C: synthetic ('The landlord shall allow the tenant to keep religious decorations on the door.') passed

#### WIG-C-041 — smart access everyday words (keypads, key fobs, app-based locks) near tenancy words; narrower companion to WIG-C-036

- Run 2026-11-16T07:49:13+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: Narrower everyday-word companion to WIG-C-036, whose term C (app/electronic near entry/access) hit 810 units and could not be read unit by unit. A = devices (no role word); B = lock + device + tenancy word (section-wide AND); C = lock near app/smartphone/keypad/fob.
- Cited by: `edu-smart-access-wi`
- Term A.main `\b(?:keypad|key\s?fob|key\s?card|electronic\s+key)s?\b`: 2 units: 616.50, NR 666.510
- Term B.and `\A(?=[\s\S]*?(?:\blocks?\b))(?=[\s\S]*?(?:\b(?:keypads?|key\s?fobs?|key\s?cards?|electronic\s+(?:keys?|locks?|entry|access)|smartphones?|mob…`: 1 units: Wis. Const.
- Term C.near `(?:\b(?:locks?|door\s+locks?)\b)[\s\S]{0,1200}(?:\b(?:apps?|smartphones?|keypads?|key\s?fobs?)\b)|(?:\b(?:apps?|smartphones?|keypads?|key\s?…`: 6 units: 30.133, 703.02, 815.20, 939.22, 943.10, Wis. Const.
- Term C.and `\A(?=[\s\S]*?(?:\b(?:locks?|door\s+locks?)\b))(?=[\s\S]*?(?:\b(?:apps?|smartphones?|keypads?|key\s?fobs?)\b))`: 10 units: 7.37, 7.51, 30.133, 31.02, 125.51, 703.02, 815.20, 939.22, 943.10, Wis. Const.
- Positive A: synthetic ('The landlord shall give each tenant a key fob for the building entrance.') passed
- Positive B: synthetic ('A landlord who installs electronic locks on a dwelling unit shall give the tenant a physical key on request.') passed
- Positive C: synthetic ('The door locks may be opened with a smartphone app.') passed

#### WIG-D-001 — landlord entry or custody for a tenant's animal; owner-by-keeping day rule

- Run 2026-11-16T07:04:48+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: animal-care-access: whether Wisconsin gives a landlord a right to enter or take custody of a tenant's animal, or makes a person who feeds or shelters an animal for a set number of days its owner.
- Cited by: `edu-animal-care-access-wi`
- Term A.main `\b(?:abandoned|unattended)\s+(?:pets?|animals?|dogs?|cats?)\b|\b(?:pets?|animals?|dogs?|cats?)\s+(?:left|abandoned)\s+(?:behind|by|in|on)\b`: 2 units: 173.23, 174.13
- Term B.near `(?:\b(?:pets?|animals?|dogs?|cats?)\b)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b)|(?:\b(?:tenants?|lessees?|ren…`: 34 units: 23.33, 29.885, 70.11, 71.63, 77.29, 97.01, 106.50, 108.02, 174.02, 346.66, 411.103, 411.217 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:pets?|animals?|dogs?|cats?)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))`: 67 units: 13.48, 23.33, 23.335, 29.885, 29.889, 60.85, 66.0627, 66.1103, 70.11, 71.07, 71.47, 71.63 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:feed|feeding|water|watering|care for|caring for|look after)\b))(?=[\s\S]*?(?:\b(?:pets?|animals?|dogs?|cats?)\b))(?=[\s…`: 207 units: 13.48, 20.867, 20.875, 23.09, 23.33, 27.01, 29.083, 29.336, 30.20, 30.45, 31.02, 36.25 …
- Term D.main `\b(?:harbou?rs?|keeps?|shelters?|feeds?|cares? for)\s+(?:or\s+(?:harbou?rs?|keeps?|shelters?|feeds?)\s+)?(?:an?\s+|the\s+)?(?:animals?|dogs?…`: 0 units
- Positive A: 173.23 ('a stray or abandoned dog') passed
- Positive B: 174.02 ('A landlord does not become a harborer') passed
- Positive C: synthetic ('The landlord may enter the dwelling unit to feed or care for an animal left by the tenant.') passed
- Positive D: synthetic ('Owner includes any person who harbors or keeps an animal for 3 or more consecutive days.') passed

#### WIG-D-002 — association documents or obligations disclosed to a tenant; long lessee as purchaser

- Run 2026-11-16T07:07:18+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: association-obligations-disclosure: whether Wisconsin requires a lease of a unit in a condominium or homeowners' association to disclose association obligations or documents, or treats a long lessee as a purchaser owed resale disclosures.
- Cited by: `edu-association-obligations-disclosure-wi`
- Term A.main `\bhomeowners\W{0,2}\s?associations?\b|\bresidential planned communit(?:y|ies)\b|\bcommon interest communit(?:y|ies)\b`: 11 units: 182.01, 709.03, 709.033, 710.02, 710.17, 710.18, 710.27, 815.18, ATCP 76.03, ATCP 76.05, 2025 Wis. Act 32
- Term B.and `\A(?=[\s\S]*?(?:\b(?:homeowners\W{0,2}\s?associations?|residential planned communit(?:y|ies)|common interest communit(?:y|ies)|condominium)\…`: 21 units: 62.23, 106.50, 703.02, 703.08, 703.09, 703.15, 703.245, 703.315, 706.09, 709.03, 709.033, 710.02 …
- Term C.near `(?:\b(?:HOA|association rules|community rules|covenants)\b)[\s\S]{0,1200}(?:\b(?:leases?|rental agreements?)\b)|(?:\b(?:leases?|rental agree…`: 21 units: 23.09, 23.305, 24.37, 25.17, 26.08, 28.11, 61.34, 62.22, 66.1201, 66.1331, 66.1333, 244.44 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:HOA|association rules|community rules|covenants)\b))(?=[\s\S]*?(?:\b(?:leases?|rental agreements?)\b))`: 38 units: 13.48, 23.09, 23.305, 24.37, 25.17, 26.08, 28.11, 46.03, 60.85, 61.34, 62.22, 62.23 …
- Term D.and `\A(?=[\s\S]*?(?:\b(?:purchasers?|buyers?)\W+(?:includes?|means)\b))(?=[\s\S]*?(?:\b(?:leases?|lessees?)\b))(?=[\s\S]*?(?:\b(?:condominium|as…`: 7 units: 66.1331, 77.29, 218.0101, 340.01, 401.201, 707.02, 846.40
- Positive A: 710.18 ('residential planned community') passed
- Positive B: 703.315 ('the unit owner shall provide a copy of the declaration') passed
- Positive C: synthetic ('The rental agreement shall include a copy of the HOA covenants that apply to the unit.') passed
- Positive D: synthetic ('Purchaser means a person who acquires a condominium unit, and includes a lessee under a lease of 20 years or more.') passed

#### WIG-D-003 — government approval of a lease of communal, tribal or trust land

- Run 2026-11-16T07:08:32+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: communal-land-lease-approval: whether Wisconsin law requires a government officer to approve a lease of communal, tribal or trust land before it is valid (a territory topic).
- Cited by: `edu-no-communal-land-lease-approval-wi`
- Term A.main `\b(?:communal|tribal|native|trust)\s+lands?\b`: 45 units: 1.01, 15.103, 15.347, 20.490, 20.507, 20.540, 20.835, 24.79, 36.60, 46.56, 66.0414, 70.01 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:communal|tribal|native|trust|reservation)\s+lands?\b))(?=[\s\S]*?(?:\b(?:leases?|lessees?|tenants?|lessors?|landlords?)…`: 3 units: 20.540, NR 13.04, 2025 Wis. Act 15
- Term C.near `(?:\b(?:reservation|tribes?|tribal)\b)[\s\S]{0,1200}(?:\b(?:leases?|rental agreements?)\b)|(?:\b(?:leases?|rental agreements?)\b)[\s\S]{0,12…`: 26 units: 23.33, 38.14, 49.89, 51.437, 66.0304, 77.53, 115.52, 115.525, 157.70, 343.245, 401.106, 401.201 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:reservation|tribes?|tribal)\b))(?=[\s\S]*?(?:\b(?:leases?|rental agreements?)\b))`: 94 units: 6.34, 13.48, 16.54, 20.360, 20.385, 20.432, 20.433, 20.438, 20.475, 20.490, 20.540, 20.875 …
- Positive A: 70.395 ('tribal lands within a municipality') passed
- Positive B: synthetic ('A lease of tribal land to a tenant is not valid until approved by the secretary.') passed
- Positive C: synthetic ('No rental agreement for a home on the reservation is valid unless the tribe approves it.') passed

#### WIG-D-004 — designated repairer; repair and deduct; tenant-arranged repairs at landlord cost

- Run 2026-11-16T07:09:44+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: designated-repairer: whether Wisconsin gives tenants a repair-and-deduct or similar self-help remedy, or regulates a lease term naming the repairer or repair contact.
- Cited by: `edu-designated-repairer-wi`, `edu-no-repair-escrow-exemption-wi`
- Term A.main `\brepair\s+and\s+deduct\b|\bdeduct\w*\s+(?:the\s+)?(?:cost|expense)s?\s+of\s+(?:the\s+|such\s+)?repairs?\b|\bdesignated\s+repair\w*|\brepair…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:deduct\w*|withh[eo]ld\w*|escrow\w*)\b))(?=[\s\S]*?(?:\brepair\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residen…`: 12 units: 66.1201, 71.07, 106.50, 287.17, 429.104, 704.07, ATCP 134.06, Adm 92.01, Tax 2.39, Tax 2.48, VA 2.01, 2025 Wis. Act 15
- Term C.near `(?:\b(?:pay for|hire|hires|hired|have (?:the )?repairs? made|fix|fixes|fixing)\b)[\s\S]{0,1200}(?:\b(?:take|takes|subtract\w*|deduct\w*)\s+(…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:pay for|hire|hires|hired|have (?:the )?repairs? made|fix|fixes|fixing)\b))(?=[\s\S]*?(?:\b(?:take|takes|subtract\w*|ded…`: 0 units
- Positive A: synthetic ('The tenant may repair and deduct the cost from the next rent payment.') passed
- Positive B: 704.07 ('does not authorize rent to be withheld in full') passed
- Positive C: synthetic ('If the landlord does not fix the furnace, the tenant may hire a contractor and take the cost out of the rent.') passed

#### WIG-D-005 — drug-free or crime-free housing addendum requirement

- Run 2026-11-16T07:11:02+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: drug-free-housing-addendum: whether Wisconsin requires or regulates a drug-free or crime-free lease addendum.
- Cited by: `edu-drug-free-housing-addendum-wi`
- Term A.main `\bdrug[- ]free\s+(?:housing|leases?|addend\w*|premises|rental)\b|\bcrime[- ]free\s+(?:housing|leases?|addend\w*|multi\w*|rental)\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:addend\w*|lease provisions?|rental agreements?)\b))(?=[\s\S]*?(?:\b(?:controlled substances?|drug-related|drugs?)\b))(?…`: 6 units: 36.11, 106.50, 344.576, 704.17, ATCP 118.02, Wis. Const.
- Term C.near `(?:\b(?:no drugs|illegal drugs?|drug activity|drug use)\b)[\s\S]{0,1200}(?:\b(?:leases?|rental agreements?|addend\w*)\b)|(?:\b(?:leases?|ren…`: 1 units: 704.17
- Term C.and `\A(?=[\s\S]*?(?:\b(?:no drugs|illegal drugs?|drug activity|drug use)\b))(?=[\s\S]*?(?:\b(?:leases?|rental agreements?|addend\w*)\b))`: 3 units: 704.17, Ins 8.49, Wis. Const.
- Positive A: synthetic ('The landlord shall attach a drug-free housing addendum to each lease.') passed
- Positive B: 704.17 ('Provisions in any lease or rental agreement for termination') passed
- Positive C: synthetic ('Every lease shall state that illegal drug activity on the premises is grounds for eviction.') passed

#### WIG-D-006 — emergency contact or emergency number in a lease; management website or hotline notice

- Run 2026-11-16T07:12:41+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: emergency-contact: whether Wisconsin requires a lease to carry an emergency contact or number, a management website or a social-services hotline notice, or regulates a tenant emergency-contact term.
- Cited by: `edu-emergency-contact-wi`, `emergency-contact-co`
- Term A.main `\bemergency\s+(?:contacts?|telephone\s+numbers?|phone\s+numbers?)\b`: 40 units: 15.315, 66.0414, 118.294, 165.25, 182.0175, 256.35, 343.177, 968.373, ATCP 76.12, ATCP 76.26, DCF 202.08, DCF 250.05 …
- Term B.and `\A(?=[\s\S]*?(?:\bemergency\b))(?=[\s\S]*?(?:\b(?:contacts?|telephone|phone)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|les…`: 13 units: 45.03, 108.02, 616.50, ATCP 125.03, ATCP 72.03, ATCP 76.03, DHS 89.23, NR 400.02, PSC 113.0301, PSC 134.062, PSC 185.37, SPS 381.01 …
- Term C.near `(?:\b(?:websites?|web sites?|hotlines?|social services)\b)[\s\S]{0,1200}(?:\b(?:leases?|rental agreements?)\b)|(?:\b(?:leases?|rental agreem…`: 24 units: 30.2034, 30.2039, 59.52, 77.52, 234.03, 448.988, 448.9887, 448.9889, 452.1355, 457.70, ATCP 10.01, ATCP 12.045 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:websites?|web sites?|hotlines?|social services)\b))(?=[\s\S]*?(?:\b(?:leases?|rental agreements?)\b))`: 76 units: 20.432, 20.438, 23.09, 23.321, 30.2034, 30.2039, 45.03, 46.03, 48.57, 48.99, 59.52, 60.77 …
- Positive A: 343.177 ('Emergency contact information') passed
- Positive B: synthetic ('The landlord shall state in the lease an emergency telephone number at which the tenant can reach the landlord at any time.') passed
- Positive C: synthetic ('Every lease shall include the management website and the social services hotline number.') passed

#### WIG-D-007 — background screening of apartment or landlord employees

- Run 2026-11-16T07:14:05+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: employee-screening: whether Wisconsin requires or regulates background screening of a landlord's or apartment building's employees.
- Cited by: `edu-employee-screening-wi`
- Term A.main `\bbackground\s+(?:checks?|investigations?|screening)\b`: 236 units: 16.314, 16.705, 20.432, 20.437, 20.438, 20.455, 48.07, 48.57, 48.623, 48.651, 48.685, 48.686 …
- Term B.and `\A(?=[\s\S]*?(?:\bbackground\s+(?:checks?|investigations?|screening)\b|\bcriminal\s+(?:history|record|background)\s+(?:checks?|search\w*|scr…`: 4 units: DCF 58.06, DHS 105.14, DHS 89.23, 2025 Wis. Act 15
- Term C.near `(?:\b(?:maintenance\s+(?:workers?|staff|personnel|employees?)|property\s+managers?|building\s+(?:staff|employees?|superintendents?)|resident…`: 3 units: NR 19.025, NR 524.07, NR 811.47
- Term C.and `\A(?=[\s\S]*?(?:\b(?:maintenance\s+(?:workers?|staff|personnel|employees?)|property\s+managers?|building\s+(?:staff|employees?|superintenden…`: 5 units: DHS 105.01, NR 110.14, NR 19.025, NR 524.07, NR 811.47
- Positive A: 16.705 ('a background check shall be performed') passed
- Positive B: synthetic ('A landlord shall conduct a criminal background check of each employee who has access to a tenant's apartment.') passed
- Positive C: synthetic ('An owner may not hire a building superintendent or maintenance worker without a criminal history screening.') passed

#### WIG-D-008 — hunting, fishing or trapping rights between landlord and tenant of rented land

- Run 2026-11-16T07:15:49+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: farmland-hunting-rights: whether Wisconsin allocates hunting, fishing or trapping rights between a landlord and the tenant of rented land, or whose permission hunting on rented land needs.
- Cited by: `edu-farmland-hunting-rights-wi`, `farmland-sporting-rights-co`
- Term A.main `\bhunting\s+(?:and\s+fishing\s+|or\s+fishing\s+)?rights\b|\bsporting\s+rights\b|\bright\s+to\s+(?:hunt|fish|trap)\b`: 8 units: 23.33, 29.229, 29.2295, 29.889, 350.122, 893.31, 941.29, Wis. Const.
- Term B.and `\A(?=[\s\S]*?(?:\bhunt\w*|\btrap\w*\b|\bfishing\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|landlords?|lessors?)\b))(?=[\s\S]*?(?:\b(?:…`: 29 units: 13.097, 23.33, 23.335, 29.885, 29.889, 77.29, 77.54, 108.02, 167.31, 632.32, 893.31, 895.52 …
- Term C.near `(?:\b(?:hunt|hunting|fish|fishing|trapping)\b)[\s\S]{0,1200}(?:\b(?:leased|rented|renting|tenant\W?s?)\s+(?:land|lands|farm\w*|property|acre…`: 5 units: 348.27, KB 1.03, NR 11.17, Tax 11.39, Tax 11.85
- Term C.and `\A(?=[\s\S]*?(?:\b(?:hunt|hunting|fish|fishing|trapping)\b))(?=[\s\S]*?(?:\b(?:leased|rented|renting|tenant\W?s?)\s+(?:land|lands|farm\w*|pr…`: 15 units: 29.604, 77.54, 348.27, KB 1.03, NR 11.17, Tax 11.05, Tax 11.12, Tax 11.14, Tax 11.15, Tax 11.16, Tax 11.39, Tax 11.50 …
- Positive A: synthetic ('A tenant of farm land has no hunting or fishing rights unless the owner grants them in writing.') passed
- Positive B: 29.889 ('An owner or lessee of land') passed
- Positive C: synthetic ('No person may hunt on rented land without the permission of the landowner.') passed

#### WIG-D-009 — tenant guest rights; limits or fees on guests and visitors

- Run 2026-11-16T07:17:06+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: guest-rights: whether Wisconsin gives tenants a right to have guests or suppliers, or limits lease terms restricting or charging for guests.
- Cited by: `edu-guest-rights-wi`
- Term A.main `\bguest\s+(?:rights|polic(?:y|ies)|limits?)\b|\bright\s+to\s+(?:have|receive|invite)\s+(?:guests|visitors)\b|\bguests?\s+fees?\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:guests?|visitors?)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?)\b))(?=[\s\S]*?(?:\b(?:landlo…`: 12 units: 77.52, 101.11, 106.50, 632.977, 704.02, 704.14, 704.17, 704.44, ATCP 134.08, Tax 11.48, Trans 102.15, Wis. Const.
- Term C.near `(?:\bovernight\s+(?:guests?|visitors?|stays?)\b)[\s\S]{0,1200}(?:\b(?:fees?|charges?|limit\w*|restrict\w*)\b)|(?:\b(?:fees?|charges?|limit\w…`: 3 units: ATCP 125.05, DCF 56.21, DHS 101.03
- Term C.and `\A(?=[\s\S]*?(?:\bovernight\s+(?:guests?|visitors?|stays?)\b))(?=[\s\S]*?(?:\b(?:fees?|charges?|limit\w*|restrict\w*)\b))`: 7 units: 66.0615, ATCP 125.05, DCF 56.21, DHS 101.03, DHS 82.06, DHS 88.06, Wis. Const.
- Positive A: synthetic ('A tenant has the right to have guests, and a landlord may not charge a guest fee.') passed
- Positive B: 704.44 ('the tenant’s guests or invitees') passed
- Positive C: ATCP 125.05 ('Rules restricting or regulating overnight guests') passed

#### WIG-D-010 — home business as permitted residential use; lease restriction

- Run 2026-11-16T07:18:22+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: home-business: whether Wisconsin makes a home business a permitted use of a dwelling, and whether a lease may restrict it.
- Cited by: `edu-home-business-wi`
- Term A.main `\bhome[- ]based\s+business\w*|\bhome\s+occupations?\b|\bbusiness\s+(?:use|activit(?:y|ies))\s+(?:in|of)\s+(?:a|the)\s+(?:dwelling|residence|…`: 8 units: 101.01, NR 118.05, NR 118.07, NR 118.09, SPS 314.01, SPS 320.02, SPS 361.02, SPS 361.04
- Term B.and `\A(?=[\s\S]*?(?:\bhome[- ]based\s+business\w*|\bhome\s+occupations?\b|\bhome\s+business\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|la…`: 3 units: 101.01, NR 118.07, SPS 314.01
- Term C.near `(?:\b(?:work(?:ing)?\s+from\s+home|run(?:ning)?\s+a\s+business|business\s+out\s+of)\b)[\s\S]{0,1200}(?:\b(?:home|house|apartment|dwelling|re…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:work(?:ing)?\s+from\s+home|run(?:ning)?\s+a\s+business|business\s+out\s+of)\b))(?=[\s\S]*?(?:\b(?:home|house|apartment|…`: 0 units
- Positive A: SPS 361.04 ('means any business, profession, trade, or employment conducted in a person') passed
- Positive B: synthetic ('A tenant may operate a home-based business unless the lease restricts it.') passed
- Positive C: synthetic ('No landlord may prohibit a tenant from running a business out of the apartment.') passed

#### WIG-D-011 — mandatory landlord liability insurance; insurance as a condition of rental registration

- Run 2026-11-16T07:19:43+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: landlord-liability-insurance: whether Wisconsin requires a landlord to carry liability insurance, alone or as a condition of municipal registration.
- Cited by: `edu-no-landlord-insurance-mandate-wi`
- Term A.main `\bliability\s+insurance\b`: 269 units: 19.36, 20.916, 23.09, 23.33, 23.335, 36.11, 46.2895, 46.85, 48.627, 49.147, 54.972, 59.70 …
- Term B.and `\A(?=[\s\S]*?(?:\bliability\s+insurance\b|\binsurance\s+coverage\b|\bproof\s+of\s+insurance\b))(?=[\s\S]*?(?:\b(?:landlords?|lessors?|rental…`: 16 units: 108.02, 114.62, 321.62, 344.51, 344.52, 422.202, 429.104, 429.203, 632.32, 632.977, 806.04, Ins 17.25 …
- Term C.near `(?:\b(?:proof|certificate|evidence)\s+of\s+(?:liability\s+)?insurance\b)[\s\S]{0,1200}(?:\b(?:rental|landlords?|apartments?|tenants?)\b)|(?:…`: 2 units: 344.01, Trans 102.15
- Term C.and `\A(?=[\s\S]*?(?:\b(?:proof|certificate|evidence)\s+of\s+(?:liability\s+)?insurance\b))(?=[\s\S]*?(?:\b(?:rental|landlords?|apartments?|tenan…`: 4 units: 344.01, 632.977, Trans 102.15, Wis. Const.
- Positive A: 23.09 ('The purchase of liability insurance') passed
- Positive B: synthetic ('Each landlord shall maintain liability insurance on the rental property and file proof with the municipality.') passed
- Positive C: synthetic ('An owner of rental units must provide a certificate of insurance when registering the apartments.') passed

#### WIG-D-012 — parity of terms or rent between month-to-month and fixed-term tenancies

- Run 2026-11-16T07:20:48+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: lease-type-parity: whether Wisconsin bars more burdensome terms or caps the rent difference between month-to-month and fixed-term tenancies.
- Cited by: `edu-no-lease-type-parity-wi`
- Term A.main `\b(?:more\s+burdensome|less\s+favorable|more\s+onerous)\s+(?:terms?|conditions?|provisions?)\b`: 1 units: 631.36
- Term B.and `\A(?=[\s\S]*?(?:\b(?:month-to-month|periodic\s+tenan\w*)\b))(?=[\s\S]*?(?:\b(?:fixed[- ]term|lease\s+for\s+a\s+(?:definite\s+)?term|term\s+l…`: 1 units: 704.17
- Term C.near `(?:\b(?:month-to-month|monthly|periodic)\s+(?:tenants?|leases?|rentals?|tenanc\w*)\b)[\s\S]{0,1200}(?:\b(?:higher|more|premium|surcharge|ext…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:month-to-month|monthly|periodic)\s+(?:tenants?|leases?|rentals?|tenanc\w*)\b))(?=[\s\S]*?(?:\b(?:higher|more|premium|su…`: 2 units: 704.29, 704.90
- Positive A: synthetic ('A landlord may not impose more burdensome terms on a month-to-month tenant than on a tenant under a lease.') passed
- Positive B: synthetic ('A landlord shall not charge a periodic tenant rent that exceeds the rent for a fixed-term lease of the same unit by more than ten percent.') passed
- Positive C: synthetic ('The landlord may charge a month-to-month tenant a premium rent of no more than 10 percent.') passed

#### WIG-D-013 — minimum type size or legibility for a lease

- Run 2026-11-16T07:21:56+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: lease-type-size: whether Wisconsin sets a minimum type size for the printed lease, with any sanction.
- Cited by: `edu-no-lease-type-size-wi`
- Term A.main `\b\d+[- ]point\s+(?:type|font|bold\w*|print)\b|\b(?:type|font|print)\s+size\b|\b(?:type|font)\s+(?:of|no\s+smaller\s+than)\s+(?:at\s+least\s…`: 115 units: 5.53, 6.33, 10.02, 30.574, 38.10, 66.0438, 75.144, 97.57, 100.171, 100.178, 100.183, 100.184 …
- Term B.and `\A(?=[\s\S]*?(?:\b\d+[- ]point\b|\btype\s+size\b|\bfont\s+size\b|\bboldface\b|\bbold\s+(?:type|print|face)\b|\bconspicuous\w*))(?=[\s\S]*?(?…`: 28 units: 66.1333, 77.52, 100.195, 100.20, 107.25, 134.49, 218.0144, 218.0148, 344.576, 345.28, 401.201, 411.214 …
- Term C.near `(?:\b(?:large|readable|legible|small)\s+(?:print|type|letters)\b|\bfine\s+print\b|\blegibl\w*)[\s\S]{0,1200}(?:\b(?:leases?|rental agreement…`: 4 units: 107.25, 115.525, NR 146.08, SPS 387.40
- Term C.and `\A(?=[\s\S]*?(?:\b(?:large|readable|legible|small)\s+(?:print|type|letters)\b|\bfine\s+print\b|\blegibl\w*))(?=[\s\S]*?(?:\b(?:leases?|renta…`: 20 units: 23.33, 23.335, 85.09, 100.18, 107.25, 115.525, 350.12, ATCP 12.045, ATCP 123.01, ATCP 127.01, NR 146.08, NR 811.12 …
- Positive A: synthetic ('Every residential lease shall be printed in type size of at least 10 points.') passed
- Positive B: synthetic ('The rental agreement shall be printed in 8-point type, and a lease in smaller type may not be admitted against the tenant.') passed
- Positive C: synthetic ('A lease printed in small print that is not legible is unenforceable.') passed

#### WIG-D-014 — nuisance: lease summary of nuisance law; tenant or neighbor rent escrow; nuisance abatement against rentals

- Run 2026-11-16T07:23:23+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: nuisance: Wisconsin's nuisance abatement against rental property; whether a lease must summarize nuisance or criminal law; whether tenants or neighbors may sue for rent escrow or subsidy suspension.
- Cited by: `edu-nuisance-wi`, `edu-nuisance-receivership-wi`
- Term A.main `\bnuisance\s+abatement\b|\babate\w*\s+(?:the\s+|a\s+|any\s+)?(?:alleged\s+)?nuisance\b`: 19 units: 23.22, 23.24, 30.03, 254.595, 281.344, 281.346, 281.36, 281.98, 289.55, 823.015, 823.10, 823.113 …
- Term B.and `\A(?=[\s\S]*?(?:\bnuisance\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?)\b))(?=[\s\S]*?(?:\b(?:leases?|rental agr…`: 0 units
- Term C.near `(?:\bnuisance\w*)[\s\S]{0,1200}(?:\b(?:escrow\w*|withh[eo]ld\w*\s+(?:the\s+)?rent|rent\s+(?:into|in)\s+escrow|suspend\w*\s+(?:the\s+)?(?:sub…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\bnuisance\w*))(?=[\s\S]*?(?:\b(?:escrow\w*|withh[eo]ld\w*\s+(?:the\s+)?rent|rent\s+(?:into|in)\s+escrow|suspend\w*\s+(?:the…`: 0 units
- Positive A: 823.23 ('apply to the circuit court for the appointment of a receiver to abate the nuisance') passed
- Positive B: synthetic ('Every lease shall include a summary of the nuisance law, and the tenant shall acknowledge it.') passed
- Positive C: synthetic ('In an action to abate a drug nuisance, the court may order the tenants to pay rent into escrow.') passed

#### WIG-D-015 — lease with option to purchase; rent-to-own of a dwelling; seller disclosure

- Run 2026-11-16T07:25:04+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: optional-lease-terms: whether a lease with an option to purchase triggers Wisconsin's seller disclosure, and whether a separate statute governs lease-option or rent-to-own contracts for a home.
- Cited by: `edu-optional-lease-terms-wi`
- Term A.main `\blease[- ](?:with\s+(?:an\s+)?)?option\b|\boption\s+to\s+(?:purchase|buy)\b|\boption\s+contracts?\b|\brent[- ]to[- ]own\b|\blease[- ]purcha…`: 71 units: 1.025, 13.48, 16.993, 20.438, 31.05, 31.14, 32.25, 49.38, 66.0133, 66.0304, 67.03, 70.11 …
- Term B.and `\A(?=[\s\S]*?(?:\boption\s+to\s+(?:purchase|buy)\b|\boption\s+contracts?\b|\brent[- ]to[- ]own\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|rente…`: 11 units: 13.48, 32.25, 70.11, 218.0171, 421.301, 429.203, 767.61, Adm 92.01, REEB 24.07, Wis. Const., 2025 Wis. Act 69
- Term C.near `(?:\b(?:rent\s+credits?|option\s+(?:fees?|money|payments?|consideration))\b)[\s\S]{0,1200}(?:\b(?:forfeit\w*|refund\w*|lose|lost|return\w*)\…`: 4 units: 13.48, 709.02, 709.05, 710.13
- Term C.and `\A(?=[\s\S]*?(?:\b(?:rent\s+credits?|option\s+(?:fees?|money|payments?|consideration))\b))(?=[\s\S]*?(?:\b(?:forfeit\w*|refund\w*|lose|lost|…`: 4 units: 13.48, 709.02, 709.05, 710.13
- Positive A: 709.02 ('acceptance of a contract of sale or option contract') passed
- Positive B: synthetic ('A tenant who holds an option to purchase the dwelling may exercise it early without penalty.') passed
- Positive C: 709.02 ('deposits or option fees paid in the transaction') passed

#### WIG-D-016 — parking rules delivery, lease parking terms and fees, towing waiting period for expired registration

- Run 2026-11-16T07:26:32+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: parking-rules-notice: whether Wisconsin requires parking rules to be delivered before signing, regulates parking fees or vehicle data in a lease, or sets a waiting period before towing a resident's vehicle for expired registration.
- Cited by: `edu-parking-rules-notice-wi`
- Term A.main `\bparking\s+(?:rules|regulations|polic(?:y|ies)|permits?)\b`: 18 units: 16.843, 36.11, 38.14, 44.015, 44.21, 349.06, 349.13, ATCP 125.05, DHS 60.01, HS 10.01, NR 486.06, Tax 14.04 …
- Term B.and `\A(?=[\s\S]*?(?:\bparking\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?)\b))(?=[\s\S]*?(?:\b(?:leases?|rental agreements?)\b))…`: 38 units: 13.097, 13.48, 23.09, 23.33, 23.335, 27.01, 32.05, 32.19, 36.11, 59.58, 59.79, 62.23 …
- Term C.near `(?:\b(?:expired|lapsed|unexpired)\s+(?:registration|plates?|tags?|inspection)\b)[\s\S]{0,1200}(?:\b(?:tow(?:ed|ing|s)?|remov\w*)\b)|(?:\b(?:…`: 4 units: 341.27, 341.295, 344.09, Trans 152.124
- Term C.and `\A(?=[\s\S]*?(?:\b(?:expired|lapsed|unexpired)\s+(?:registration|plates?|tags?|inspection)\b))(?=[\s\S]*?(?:\b(?:tow(?:ed|ing|s)?|remov\w*)\…`: 5 units: 341.27, 341.295, 344.09, Trans 131.03, Trans 152.124
- Positive A: synthetic ('The landlord shall deliver the parking rules to the tenant in a separate document before the lease is signed.') passed
- Positive B: synthetic ('The lease shall state whether parking is provided to the tenant and the amount of any parking fee.') passed
- Positive C: synthetic ('A vehicle with expired registration may not be towed from a residential lot until 48 hours after notice is posted.') passed

#### WIG-D-017 — state fact sheet on pets and eviction given with a lease

- Run 2026-11-16T07:27:24+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: pet-eviction-fact-sheet: whether Wisconsin requires a landlord to give a state fact sheet on pets and eviction with the lease.
- Cited by: `edu-no-pet-eviction-fact-sheet-wi`
- Term A.main `\bfact\s+sheets?\b`: 41 units: 283.001, 283.43, 283.45, 283.47, 299.80, DHS 105.14, NR 106.06, NR 106.08, NR 106.89, NR 107.03, NR 107.05, NR 107.06 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:pets?|dogs?|cats?|animals?)\b))(?=[\s\S]*?(?:\b(?:evict\w*|writ\s+of\s+restitution)\b))(?=[\s\S]*?(?:\b(?:tenants?|less…`: 4 units: 106.50, Adm 92.01, KB 1.03, Wis. Const.
- Term C.near `(?:\b(?:pets?|dogs?|cats?)\b)[\s\S]{0,1200}(?:\b(?:eviction|evicted|evicts?)\b)|(?:\b(?:eviction|evicted|evicts?)\b)[\s\S]{0,1200}(?:\b(?:pe…`: 1 units: KB 1.03
- Term C.and `\A(?=[\s\S]*?(?:\b(?:pets?|dogs?|cats?)\b))(?=[\s\S]*?(?:\b(?:eviction|evicted|evicts?)\b))`: 5 units: Adm 92.01, KB 1.03, NR 45.04, Wis. Const., 2025 Wis. Act 15
- Positive A: synthetic ('The department shall prepare a fact sheet on pets and eviction.') passed
- Positive B: synthetic ('A landlord who knows the tenant has a dog or cat shall give the tenant the state notice on what happens to pets in an eviction.') passed
- Positive C: synthetic ('If a tenant is evicted, the sheriff shall contact animal control about any pet left in the unit.') passed

#### WIG-D-018 — plain-language or readability requirement for leases or consumer contracts; captioned sections

- Run 2026-11-16T07:28:32+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: plain-language: whether Wisconsin has a plain-language, readability or captioning statute reaching residential leases or consumer contracts.
- Cited by: `edu-no-plain-language-rule-wi`, `edu-no-plain-language-statement-wi`
- Term A.main `\bplain\s+(?:language|English)\b|\breadabili\w*|\bFlesch\b`: 104 units: 8.15, 13.92, 19.356, 19.85, 26.21, 30.025, 30.206, 30.208, 46.977, 48.356, 48.415, 48.977 …
- Term B.and `\A(?=[\s\S]*?(?:\bplain\s+(?:language|English)\b|\breadab\w*|\bunderstandable\b|\beasily\s+understood\b|\bclear\s+and\s+(?:coherent|understa…`: 10 units: 66.1105, 70.32, 77.61, 100.18, 218.0171, Tax 11.71, Tax 11.82, Trans 139.04, Wis. Const., 2025 Wis. Act 15
- Term C.near `(?:\b(?:captions?|captioned|headings?|divided\s+into\s+(?:sections|paragraphs))\b)[\s\S]{0,1200}(?:\b(?:leases?|rental agreements?|consumer\…`: 2 units: 77.71, ATCP 118.02
- Term C.and `\A(?=[\s\S]*?(?:\b(?:captions?|captioned|headings?|divided\s+into\s+(?:sections|paragraphs))\b))(?=[\s\S]*?(?:\b(?:leases?|rental agreements…`: 9 units: 48.99, 77.51, 77.71, 77.88, 77.994, 401.201, 846.40, ATCP 118.02, NR 440.02
- Positive A: synthetic ('Every residential lease shall be written in plain language and meet a readability test.') passed
- Positive B: synthetic ('A consumer contract, including a lease of a dwelling to a tenant, shall be written in a clear and coherent manner using words with common and everyday meanings ') passed
- Positive C: synthetic ('A residential lease shall be divided into sections with captions.') passed

#### WIG-D-019 — statement of consumer restrictions or waivers in a lease; attorney general preapproval of lease forms

- Run 2026-11-16T07:28:58+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: plain-language-consumer-statement: whether Wisconsin requires a statement of consumer restrictions listing waivers, offers attorney general preapproval of lease forms, or sets a dollar exclusion.
- Cited by: `edu-no-plain-language-statement-wi`
- Term A.main `\bstatement\s+of\s+(?:consumer\s+)?(?:restrictions|waivers|rights)\b|\bconsumer\s+restrictions\b`: 1 units: 403.106
- Term B.and `\A(?=[\s\S]*?(?:\bwaive\w*|\bwaivers?\b))(?=[\s\S]*?(?:\b(?:leases?|rental agreements?)\b))(?=[\s\S]*?(?:\b(?:front\s+page|first\s+page|prea…`: 3 units: 32.05, 100.20, Wis. Const.
- Term C.near `(?:\b(?:attorney\s+general|department)\b)[\s\S]{0,1200}(?:\bapprov\w*\s+(?:the\s+|a\s+|its\s+)?(?:form|lease|rental\s+agreement)s?\b)|(?:\ba…`: 43 units: 28.11, 29.229, 30.11, 71.80, 77.61, 190.06, 601.415, A-E 7.08, DHS 82.03, DHS 88.03, DWD 80.60, NR 108.06 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:attorney\s+general|department)\b))(?=[\s\S]*?(?:\bapprov\w*\s+(?:the\s+|a\s+|its\s+)?(?:form|lease|rental\s+agreement)s…`: 49 units: 28.11, 29.229, 30.11, 70.47, 71.80, 77.61, 190.06, 452.05, 601.415, 632.69, A-E 7.08, DHS 82.03 …
- Positive A: synthetic ('The lease shall contain a statement of consumer restrictions listing each right the tenant waives.') passed
- Positive B: synthetic ('A landlord may submit the lease to the attorney general for preapproval, and a lease that lists each waiver on its first page complies.') passed
- Positive C: synthetic ('The attorney general may approve a lease form submitted by a landlord.') passed

#### WIG-D-020 — lease void or forfeited when premises are used for a prohibited purpose

- Run 2026-11-16T07:31:03+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-D-021; rerun identical.
- Question: purpose-limitation: whether a Wisconsin criminal or nuisance statute voids or annuls a lease when the premises are used for a prohibited purpose.
- Cited by: `edu-purpose-limitation-wi`
- Term A.main `\b(?:lease|tenancy|rental agreement)\b[\s\S]{0,0}(?:\s+(?:by\s+which\s+such\s+place\s+is\s+held\s+)?(?:is|shall\s+be(?:come)?)\s+(?:void|for…`: 13 units: 107.25, 182.004, 429.203, 429.206, 429.207, 704.165, 704.17, 704.19, 704.44, 799.41, 823.16, 823.20 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:void|forfeit\w*|annul\w*)\b))(?=[\s\S]*?(?:\b(?:leases?|tenanc(?:y|ies)|rental agreements?)\b))(?=[\s\S]*?(?:\b(?:unlaw…`: 20 units: 20.432, 20.438, 20.875, 23.33, 23.335, 36.11, 46.03, 106.50, 340.01, 343.44, 448.980, 448.988 …
- Term C.near `(?:\b(?:used|using|use)\s+(?:the\s+)?(?:premises|property|place|building)\s+(?:for|as)\b)[\s\S]{0,1200}(?:\b(?:lease|tenancy)\s+(?:is|become…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:used|using|use)\s+(?:the\s+)?(?:premises|property|place|building)\s+(?:for|as)\b))(?=[\s\S]*?(?:\b(?:lease|tenancy)\s+(…`: 0 units
- Positive A: 823.16 ('the lease by which such place is held is void') passed
- Positive B: 823.16 ('keeping that place as a place of prostitution') passed
- Positive C: synthetic ('If a tenant uses the premises for unlawful gambling, the lease is void.') FAILED (near pattern does not match synthetic)

#### WIG-D-021 — lease void or forfeited when premises are used for a prohibited purpose

- Run 2026-11-16T07:31:35+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-D-020 (term C positive failed (verb form 'uses' not covered); term A pattern simplified); rerun identical.
- Question: purpose-limitation: whether a Wisconsin criminal or nuisance statute voids or annuls a lease when the premises are used for a prohibited purpose.
- Cited by: `edu-purpose-limitation-wi`
- Term A.main `\b(?:lease|tenancy|rental agreement)\b(?:\s+(?:by\s+which\s+such\s+place\s+is\s+held\s+)?(?:is|shall\s+be(?:come)?)\s+(?:void|forfeited|annu…`: 13 units: 107.25, 182.004, 429.203, 429.206, 429.207, 704.165, 704.17, 704.19, 704.44, 799.41, 823.16, 823.20 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:void|forfeit\w*|annul\w*)\b))(?=[\s\S]*?(?:\b(?:leases?|tenanc(?:y|ies)|rental agreements?)\b))(?=[\s\S]*?(?:\b(?:unlaw…`: 20 units: 20.432, 20.438, 20.875, 23.33, 23.335, 36.11, 46.03, 106.50, 340.01, 343.44, 448.980, 448.988 …
- Term C.near `(?:\b(?:used|using|uses|use)\s+(?:the\s+)?(?:premises|property|place|building)\s+(?:for|as)\b)[\s\S]{0,1200}(?:\b(?:lease|tenancy)\s+(?:is|b…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:used|using|uses|use)\s+(?:the\s+)?(?:premises|property|place|building)\s+(?:for|as)\b))(?=[\s\S]*?(?:\b(?:lease|tenancy…`: 0 units
- Positive A: 823.16 ('the lease by which such place is held is void') passed
- Positive B: 823.16 ('keeping that place as a place of prostitution') passed
- Positive C: synthetic ('If a tenant uses the premises for unlawful gambling, the lease is void.') passed

#### WIG-D-022 — rent escrow remedy and small-landlord exemption notice

- Run 2026-11-16T07:32:33+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: repair-escrow-exemption-notice: whether Wisconsin has a rent-escrow repair remedy and a notice that exempts small landlords from it.
- Cited by: `edu-no-repair-escrow-exemption-wi`, `edu-confirmed-absences-habitability-wi`
- Term A.main `\brent\s+(?:into|in)\s+escrow\b|\bescrow\w*\s+(?:of\s+)?(?:the\s+)?rent\b|\bwithhold\s+rent\s+in\s+escrow\b`: 1 units: 254.30
- Term B.and `\A(?=[\s\S]*?(?:\bescrow\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|occupants?)\b))(?=[\s\S]*?(?:\b(?:exempt\w*|does\s+not\s+apply|in…`: 8 units: 13.48, 66.0825, 66.1201, 106.50, 224.71, 452.13, 707.02, NR 500.03
- Term C.near `(?:\b(?:3|three|4|four)\s+or\s+fewer\s+(?:dwelling\s+|rental\s+)?units\b|\bsmall\s+landlords?\b)[\s\S]{0,1200}(?:\b(?:notice|notif\w*)\b)|(?…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:3|three|4|four)\s+or\s+fewer\s+(?:dwelling\s+|rental\s+)?units\b|\bsmall\s+landlords?\b))(?=[\s\S]*?(?:\b(?:notice|noti…`: 1 units: 703.33
- Positive A: 254.30 ('to withhold rent in escrow until the owner') passed
- Positive B: synthetic ('The rent escrow remedy does not apply to a landlord who owns three or fewer units and gives the tenant written notice of the exemption; the landlord is exempt.') passed
- Positive C: synthetic ('A landlord who rents three or fewer dwelling units must give notice of that fact in the lease.') passed

#### WIG-D-023 — work cards or screening for staff of senior (55+) housing

- Run 2026-11-16T07:33:18+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: senior-housing-work-card: whether Wisconsin requires work cards or background screening for staff of housing for persons 55 or older.
- Cited by: `edu-no-senior-housing-work-card-wi`
- Term A.main `\bwork\s+cards?\b|\bwork\s+permits?\b`: 5 units: 66.0414, 103.70, DWD 270.05, DWD 272.09, Game 13.09
- Term B.and `\A(?=[\s\S]*?(?:\bhousing\s+for\s+older\s+persons\b|\bsenior\s+(?:housing|citizens?\s+housing|apartments?)\b|\belderly\s+housing\b))(?=[\s\S…`: 2 units: 71.26, 106.50
- Term C.near `(?:\b(?:55|62)\s+(?:years\s+of\s+age\s+)?(?:or|and)\s+(?:older|over)\b)[\s\S]{0,1200}(?:\b(?:employees?|staff)\b)|(?:\b(?:employees?|staff)\…`: 3 units: 40.23, 973.017, DWD 220.03
- Term C.and `\A(?=[\s\S]*?(?:\b(?:55|62)\s+(?:years\s+of\s+age\s+)?(?:or|and)\s+(?:older|over)\b))(?=[\s\S]*?(?:\b(?:employees?|staff)\b))`: 6 units: 40.23, 40.63, 59.53, 973.017, DWD 220.03, Tax 14.03
- Positive A: synthetic ('Each employee of a senior apartment complex shall obtain a work card from the sheriff.') passed
- Positive B: synthetic ('An employee of housing for older persons must hold a work card issued after a background check.') passed
- Positive C: synthetic ('A person employed at an apartment complex for residents 55 or older shall be screened by the sheriff before starting work, and staff must carry a card.') passed

#### WIG-D-024 — tenant refusal of a subsidized-housing inspection as an eviction ground

- Run 2026-11-16T07:34:35+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: subsidized-inspection-refusal: whether Wisconsin makes a tenant's refusal of a subsidized-housing inspection a ground for (expedited) eviction.
- Cited by: `edu-subsidized-inspection-refusal-wi`
- Term A.main `\b(?:refus\w*|den(?:y|ies|ied))\s+(?:to\s+(?:allow|permit)\s+)?(?:access\s+for\s+)?(?:an?\s+|the\s+)?inspections?\b`: 22 units: 19.35, 19.85, 106.50, 110.20, 167.10, 180.1604, 181.0720, 181.1604, 186.70, 193.501, 221.0103, 221.0518 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:subsidi[sz]ed\s+housing|section\s+8|housing\s+choice\s+vouchers?|housing\s+assistance\s+payments?|rent\s+assistance|ren…`: 6 units: Adm 92.68, Wis. Const., 2025 Wis. Act 11, 2025 Wis. Act 15, 2025 Wis. Act 17, 2025 Wis. Act 33
- Term C.near `(?:\b(?:will\s+not|does\s+not|did\s+not|refuses?\s+to|refused\s+to)\s+(?:let|allow|permit)\b)[\s\S]{0,1200}(?:\binspect\w*)|(?:\binspect\w*)…`: 41 units: 5.25, 19.35, 19.88, 66.0104, 101.055, 125.11, 139.44, 180.0720, 181.0720, 181.1604, 193.245, 193.501 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:will\s+not|does\s+not|did\s+not|refuses?\s+to|refused\s+to)\s+(?:let|allow|permit)\b))(?=[\s\S]*?(?:\binspect\w*))`: 82 units: 5.25, 6.87, 19.35, 19.356, 19.85, 19.88, 30.12, 38.12, 51.20, 62.23, 66.0104, 66.0703 …
- Positive A: synthetic ('If the tenant refuses to allow an inspection twice within 30 days, the landlord may evict.') passed
- Positive B: synthetic ('In subsidized housing, a tenant who refuses an inspection required by the housing authority may be evicted on 30 days' notice.') passed
- Positive C: synthetic ('A tenant who will not let the inspector in may be evicted.') passed

#### WIG-D-025 — proration of habitability rent abatement between tenant share and subsidy

- Run 2026-11-16T07:35:47+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: subsidy-habitability-proration: whether Wisconsin prorates a habitability rent abatement between the tenant's share and a subsidy.
- Cited by: `edu-no-subsidy-proration-rule-wi`
- Term A.main `\bprorat\w*\s+(?:the\s+)?abatement\b|\babatement\s+of\s+(?:the\s+)?(?:subsid\w*|assistance|housing\s+assistance)\b|\bhousing\s+assistance\s+…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:subsid\w*|vouchers?|housing\s+assistance|rent\s+assistance|rental\s+assistance)\b))(?=[\s\S]*?(?:\babat\w*))(?=[\s\S]*?…`: 5 units: 20.540, 66.1201, 70.11, Wis. Const., 2025 Wis. Act 15
- Term C.near `(?:\b(?:tenant|family)\W{0,2}s?\s+(?:portion|share)\b)[\s\S]{0,1200}(?:\b(?:abat\w*|reduc\w*)\b)|(?:\b(?:abat\w*|reduc\w*)\b)[\s\S]{0,1200}(…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:tenant|family)\W{0,2}s?\s+(?:portion|share)\b))(?=[\s\S]*?(?:\b(?:abat\w*|reduc\w*)\b))`: 0 units
- Positive A: synthetic ('When rent abates for a subsidized tenant, the court shall prorate the abatement between the tenant share and the housing assistance payment.') passed
- Positive B: synthetic ('If the unit is subsidized, rent abates only as to the tenant's portion of the rent.') passed
- Positive C: synthetic ('Any abatement applies first to the tenant's share of the rent.') passed

#### WIG-D-026 — landlord disclosure of tenant or applicant information; tenant privacy

- Run 2026-11-16T07:36:46+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: tenant-confidential-information: whether Wisconsin bars a landlord from disclosing tenant or applicant information, and with what consent.
- Cited by: `edu-tenant-confidential-information-wi`
- Term A.main `\b(?:personal|confidential|private)\s+information\s+(?:of|about|concerning)\s+(?:a|an|the|any)\s+(?:tenants?|applicants?|lessees?|residents?…`: 2 units: DHS 89.11, DHS 89.23
- Term B.and `\A(?=[\s\S]*?(?:\b(?:may\s+not|shall\s+not|no\s+\w+\s+may)\s+(?:disclose|release|share|sell|divulge)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?…`: 5 units: 32.05, 32.06, 66.0823, 66.0825, 429.202
- Term C.near `(?:\b(?:share|sell|give\s+out|release|disclose)\w*\b)[\s\S]{0,1200}(?:\b(?:tenant|renter|resident|applicant)\W{0,2}s?\s+(?:information|data|…`: 37 units: 48.66, 49.48, 73.09, 101.952, 102.17, 103.275, 103.34, 103.91, 103.92, 104.07, 105.06, 108.227 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:share|sell|give\s+out|release|disclose)\w*\b))(?=[\s\S]*?(?:\b(?:tenant|renter|resident|applicant)\W{0,2}s?\s+(?:inform…`: 52 units: 48.66, 49.45, 49.48, 50.035, 73.09, 93.135, 101.952, 102.17, 103.275, 103.34, 103.91, 103.92 …
- Positive A: synthetic ('A landlord shall keep personal information about a tenant confidential.') passed
- Positive B: synthetic ('A landlord may not disclose a tenant's personal information to a third party without the tenant's written consent.') passed
- Positive C: synthetic ('No landlord shall sell or give out a renter's information without written consent.') passed

#### WIG-D-027 — accidental fire immunity of tenant; landlord insurer subrogation; mutual waiver of insured losses

- Run 2026-11-16T07:38:07+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: tenant-insurance-claims: whether Wisconsin bars a landlord or its insurer from suing a tenant for an accidental fire, and whether a lease may set a mutual waiver of insured losses.
- Cited by: `edu-tenant-insurance-claims-wi`
- Term A.main `\bwaivers?\s+of\s+subrogation\b|\bmutual\s+waivers?\b|\baccidental(?:ly)?\s+(?:fires?|begin|began)\b`: 4 units: NR 502.07, NR 502.08, NR 503.10, NR 506.07
- Term B.and `\A(?=[\s\S]*?(?:\bsubrogat\w*|\binsurers?\b|\binsurance\s+(?:proceeds|claims?|carriers?)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?)\b…`: 7 units: 70.11, 632.32, 632.977, 704.07, 973.20, Ins 17.25, Wis. Const.
- Term C.near `(?:\b(?:accident\w*|by\s+accident)\b)[\s\S]{0,1200}(?:\b(?:fire|burn\w*)\b[\s\S]{0,0})|(?:\b(?:fire|burn\w*)\b[\s\S]{0,0})[\s\S]{0,1200}(?:\…`: 100 units: 16.865, 62.13, 66.0137, 66.1201, 66.1331, 66.1337, 71.45, 78.19, 84.15, 97.01, 101.055, 102.01 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:accident\w*|by\s+accident)\b))(?=[\s\S]*?(?:\b(?:fire|burn\w*)\b[\s\S]{0,0}))`: 149 units: 16.865, 19.35, 20.875, 30.62, 38.24, 48.02, 59.54, 62.13, 66.0137, 66.1201, 66.1331, 66.1337 …
- Positive A: synthetic ('No action shall be maintained against a tenant in whose house any fire shall accidentally begin.') passed
- Positive B: 704.07 ('regardless of whether the landlord or landlord') passed
- Positive C: synthetic ('A renter is not liable to the landlord for a fire started by accident.') passed

#### WIG-D-028 — tenant portals; required online payment or electronic signing

- Run 2026-11-16T07:39:43+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-D-029; rerun identical.
- Question: tenant-portal: whether Wisconsin limits a landlord's requiring rent payment, notices or signatures through an online portal.
- Cited by: `edu-tenant-portal-wi`
- Term A.main `\b(?:online|web|electronic|resident|tenant)\s+portals?\b`: 4 units: 165.29, 961.235, VA 2.02, VA 2.08
- Term B.and `\A(?=[\s\S]*?(?:\b(?:electronic(?:ally)?|online|internet)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?)\b))(?=[\s\S]*?(?:\b(?:landlords?…`: 34 units: 32.28, 60.85, 66.0104, 66.1105, 66.1201, 70.11, 71.07, 77.29, 77.52, 77.522, 77.54, 108.02 …
- Term C.near `(?:\b(?:pay\s+(?:the\s+)?rent\s+online|online\s+(?:rent\s+)?payments?|app\b|website)\b)[\s\S]{0,1200}(?:\b(?:rent|tenants?|landlords?)\b)|(?…`: 67 units: 32.19, 32.28, 66.0104, 66.0413, 66.0617, 66.1015, 70.11, 70.32, 77.22, 84.30, 100.20, 100.26 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:pay\s+(?:the\s+)?rent\s+online|online\s+(?:rent\s+)?payments?|app\b|website)\b))(?=[\s\S]*?(?:\b(?:rent|tenants?|landlo…`: 111 units: 23.33, 32.05, 32.06, 32.19, 32.28, 49.455, 59.52, 61.34, 66.0101, 66.0104, 66.0217, 66.0413 …
- Positive A: synthetic ('A landlord may not require a tenant to use an online portal to pay rent.') passed
- Positive B: 704.10 ('permits the landlord to provide and indicate agreement by electronic means') FAILED (and pattern does not match unit)
- Positive C: synthetic ('The landlord shall offer a way to pay the rent other than online payments through a website.') passed

#### WIG-D-029 — tenant portals; required online payment or electronic signing

- Run 2026-11-16T07:40:20+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-D-028 (term B real positive (Wis. Stat. § 704.10) lacks a payment or requirement word; replaced by a synthetic; term C narrowed (website matched unrelated rent sections)); rerun identical.
- Question: tenant-portal: whether Wisconsin limits a landlord's requiring rent payment, notices or signatures through an online portal.
- Cited by: `edu-tenant-portal-wi`
- Term A.main `\b(?:online|web|electronic|resident|tenant)\s+portals?\b`: 4 units: 165.29, 961.235, VA 2.02, VA 2.08
- Term B.and `\A(?=[\s\S]*?(?:\b(?:electronic(?:ally)?|online|internet)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?)\b))(?=[\s\S]*?(?:\b(?:landlords?…`: 34 units: 32.28, 60.85, 66.0104, 66.1105, 66.1201, 70.11, 71.07, 77.29, 77.52, 77.522, 77.54, 108.02 …
- Term C.near `(?:\b(?:pay\w*\s+(?:the\s+)?rent\s+(?:online|electronically)|online\s+(?:rent\s+)?payments?|electronic\s+(?:rent\s+)?payments?)\b)[\s\S]{0,1…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:pay\w*\s+(?:the\s+)?rent\s+(?:online|electronically)|online\s+(?:rent\s+)?payments?|electronic\s+(?:rent\s+)?payments?)…`: 0 units
- Positive A: synthetic ('A landlord may not require a tenant to use an online portal to pay rent.') passed
- Positive B: synthetic ('A landlord may not require a tenant to pay rent or sign the lease by electronic means.') passed
- Positive C: synthetic ('A landlord who accepts online rent payments shall offer the tenant another way to pay.') passed

#### WIG-D-030 — rent ledger or payment records for tenants; data-security program for personal information

- Run 2026-11-16T07:41:41+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: tenant-records: whether Wisconsin requires a landlord to keep or produce a rent ledger, and whether a data-security statute requiring a security program or breach notice reaches landlords.
- Cited by: `edu-tenant-confidential-information-wi`, `edu-tenant-records-wi`
- Term A.main `\brent\s+(?:ledgers?|records?|payment\s+histor(?:y|ies)|statements?)\b|\bledgers?\s+of\s+(?:rent|payments?)\b`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:ledgers?|records?\s+of\s+(?:rent|payments?)|account(?:ing)?\s+of\s+(?:rent|payments?)|payment\s+histor(?:y|ies))\b))(?=…`: 3 units: 895.489, REEB 18.13, Wis. Const.
- Term C.near `(?:\binformation\s+security\s+programs?\b|\bsecurity\s+(?:programs?|procedures?|safeguards?|measures)\b)[\s\S]{0,1200}(?:\bpersonal\s+inform…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\binformation\s+security\s+programs?\b|\bsecurity\s+(?:programs?|procedures?|safeguards?|measures)\b))(?=[\s\S]*?(?:\bperson…`: 0 units
- Positive A: synthetic ('On request, the landlord shall give the tenant a copy of the rent ledger.') passed
- Positive B: synthetic ('A landlord shall keep a record of rent payments and give the tenant a payment history upon request.') passed
- Positive C: synthetic ('A business that holds personal information shall maintain a written information security program.') passed

#### WIG-D-031 — tenant right to organize, meet or distribute literature

- Run 2026-11-16T07:42:53+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: tenant-right-to-organize: whether Wisconsin protects tenants' organizing, meetings or literature distribution beyond the retaliation rule.
- Cited by: `edu-tenant-right-to-organize-wi`
- Term A.main `\btenants?(?:\W?s)?\s+(?:unions?|associations?|organizations?|councils?)\b`: 4 units: 757.30, ATCP 125.08, ATCP 134.09, Wis. Const.
- Term B.and `\A(?=[\s\S]*?(?:\borganiz\w*))(?=[\s\S]*?(?:\b(?:tenants?|renters?|residents?)\b))(?=[\s\S]*?(?:\b(?:landlords?|lessors?)\b))(?=[\s\S]*?(?:\…`: 18 units: 45.03, 70.11, 71.07, 77.29, 77.54, 100.20, 108.02, 224.71, 421.301, 452.01, 632.32, 632.977 …
- Term C.near `(?:\b(?:tenant|renter)s?\s+(?:meetings?|groups?)\b)[\s\S]{0,1200}(?:\b(?:common\s+areas?|community\s+rooms?|building|landlords?)\b)|(?:\b(?:…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:tenant|renter)s?\s+(?:meetings?|groups?)\b))(?=[\s\S]*?(?:\b(?:common\s+areas?|community\s+rooms?|building|landlords?)\…`: 0 units
- Positive A: ATCP 134.09 ('organize a tenant') passed
- Positive B: synthetic ('Tenants have the right to organize and to meet in common areas, and a landlord may not prohibit the distribution of literature.') passed
- Positive C: synthetic ('A landlord shall allow tenant meetings in the community room of the building.') passed

#### WIG-D-032 — statewide rent cap or just-cause statute; lease notice of coverage or exemption

- Run 2026-11-16T07:44:11+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: tpa-notice, tpa-exemption-notice: whether Wisconsin has a statewide rent cap or just-cause statute, and a required lease notice of coverage or exemption.
- Cited by: `edu-no-tpa-exemption-notice-wi`, `edu-no-tpa-notice-wi`
- Term A.main `\bjust\s+cause\b|\brent\s+(?:cap|caps|stabiliz\w*|control)\b|\btenant\s+protection\s+act\b`: 82 units: 11.0804, 29.604, 36.15, 50.065, 50.35, 59.15, 59.26, 59.265, 59.52, 61.34, 62.13, 62.50 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:just\s+cause|good\s+cause|rent\s+(?:cap|increase\s+limit\w*|stabiliz\w*))\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|rente…`: 8 units: 32.19, 66.0104, 66.1201, 182.0175, 710.15, Adm 92.08, Adm 92.68, Ins 4.10
- Term C.near `(?:\b(?:not\s+subject\s+to|exempt\s+from)\s+(?:the\s+)?(?:rent|just|limits?)\b)[\s\S]{0,1200}(?:\b(?:leases?|rental\s+agreements?)\b)|(?:\b(…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:not\s+subject\s+to|exempt\s+from)\s+(?:the\s+)?(?:rent|just|limits?)\b))(?=[\s\S]*?(?:\b(?:leases?|rental\s+agreements?…`: 0 units
- Positive A: synthetic ('A landlord may terminate a tenancy only for just cause.') passed
- Positive B: synthetic ('An owner of residential property exempt from the just cause and rent cap rules shall give the tenant notice of the exemption in the lease.') passed
- Positive C: synthetic ('The lease shall state that the property is exempt from the rent limits.') passed

#### WIG-D-033 — tenant opportunity or right to purchase on sale of a rental building

- Run 2026-11-16T07:44:41+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: tpa-notice: whether Wisconsin gives tenants a right or opportunity to purchase when a rental building is sold.
- Cited by: `edu-no-tpa-notice-wi`
- Term A.main `\b(?:right|opportunity)\s+(?:of\s+first\s+refusal\s+)?to\s+(?:purchase|buy)\b|\bfirst\s+right\s+to\s+purchase\b|\bright\s+of\s+first\s+refus…`: 38 units: 13.48, 16.848, 19.45, 66.0803, 70.32, 75.35, 77.54, 125.02, 136.01, 165.40, 175.35, 185.21 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:right|opportunity|offer)\s+to\s+(?:purchase|buy)\b|\bright\s+of\s+first\s+refusal\b))(?=[\s\S]*?(?:\b(?:tenants?|lessee…`: 16 units: 13.48, 16.848, 32.05, 66.1103, 70.32, 77.54, 125.02, 218.0116, 703.08, 893.80, Adm 92.01, Adm 92.20 …
- Term C.near `(?:\b(?:tenants?|renters?)\b)[\s\S]{0,1200}(?:\b(?:chance|option|first\s+chance)\s+to\s+(?:buy|purchase)\b)|(?:\b(?:chance|option|first\s+ch…`: 2 units: Adm 92.12, Trans 175.04
- Term C.and `\A(?=[\s\S]*?(?:\b(?:tenants?|renters?)\b))(?=[\s\S]*?(?:\b(?:chance|option|first\s+chance)\s+to\s+(?:buy|purchase)\b))`: 9 units: 32.25, 70.11, 421.301, Adm 92.01, Adm 92.12, REEB 24.07, Trans 175.04, Wis. Const., 2025 Wis. Act 69
- Positive A: 703.08 ('first right to purchase the unit') passed
- Positive B: 703.08 ('a tenant has the first right to purchase the unit') passed
- Positive C: synthetic ('Before selling the building, the owner must give the tenants the first chance to buy it.') passed

#### WIG-D-034 — repeal date or sunset of a core tenant-protection statute

- Run 2026-11-16T07:45:11+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: tpa-sunset: whether a Wisconsin tenant-protection statute is on a dated repeal clock.
- Cited by: `edu-no-tpa-sunset-wi`
- Term A.main `\bsunset\w*\b`: 80 units: 16.047, 16.956, 29.301, 29.405, 29.516, 29.885, 30.207, 30.61, 30.69, 39.437, 59.605, 66.02162 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:is\s+repealed|repeal\w*|ceases?\s+to\s+apply|does\s+not\s+apply\s+after|expires?\s+on)\b))(?=[\s\S]*?(?:\b(?:tenants?|l…`: 7 units: 32.06, 66.1201, 71.07, 321.62, 632.32, Tax 2.39, Wis. Const.
- Term C.near `(?:\b(?:this\s+(?:section|subsection|chapter)\s+is\s+repealed|remains?\s+in\s+effect\s+only\s+until)\b)[\s\S]{0,1200}(?:\b(?:tenants?|landlo…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:this\s+(?:section|subsection|chapter)\s+is\s+repealed|remains?\s+in\s+effect\s+only\s+until)\b))(?=[\s\S]*?(?:\b(?:tena…`: 0 units
- Positive A: synthetic ('The rent cap sunsets on January 1, 2030.') passed
- Positive B: synthetic ('This section is repealed on January 1, 2030, and after that date a landlord may terminate a tenancy without cause and the tenant protections in this section no ') passed
- Positive C: synthetic ('This section remains in effect only until January 1, 2030, and limits rent increases by a landlord.') passed

#### WIG-D-035 — lease translation duty; language other than English

- Run 2026-11-16T07:46:54+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: translation-duty: whether Wisconsin requires a lease or lease notice to be translated or given in another language.
- Cited by: `edu-no-translation-duty-wi`
- Term A.main `\b(?:languages?\s+other\s+than\s+English|translat(?:ed|ion|ions|e)\s+(?:in)?to\s+(?:the\s+)?(?:\w+\s+)?language|certified\s+translations?)\b`: 32 units: 5.25, 48.97, 140.02, 244.19, 423.203, 551.304, 609.22, 622.09, 885.38, 901.03, 901.09, AB 1.05 …
- Term B.and `\A(?=[\s\S]*?(?:\btranslat\w*|\bSpanish\b|\blanguage\s+other\s+than\s+English\b|\bprimary\s+language\b))(?=[\s\S]*?(?:\b(?:leases?|rental\s+…`: 1 units: Wis. Const.
- Term C.near `(?:\b(?:negotiat\w*|advertis\w*)\b)[\s\S]{0,1200}(?:\b(?:in\s+(?:Spanish|Hmong|Chinese|another\s+language)|other\s+language)\b)|(?:\b(?:in\s…`: 4 units: 100.313, 423.203, Ins 2.16, Ins 3.27
- Term C.and `\A(?=[\s\S]*?(?:\b(?:negotiat\w*|advertis\w*)\b))(?=[\s\S]*?(?:\b(?:in\s+(?:Spanish|Hmong|Chinese|another\s+language)|other\s+language)\b))`: 4 units: 100.313, 423.203, Ins 2.16, Ins 3.27
- Positive A: synthetic ('The landlord shall provide a certified translation of the lease into the tenant's primary language when the lease was negotiated in a language other than Englis') passed
- Positive B: synthetic ('If a lease is negotiated in Spanish, the landlord shall give the tenant a translation of the rental agreement.') passed
- Positive C: synthetic ('A landlord who advertises in Spanish must provide the lease in that other language.') passed

#### WIG-D-036 — truth in renting; statement of tenant rights distributed with a lease

- Run 2026-11-16T07:48:02+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: truth-in-renting: whether Wisconsin requires a truth-in-renting statement or a state statement of tenant rights with the lease.
- Cited by: `edu-no-truth-in-renting-wi`
- Term A.main `\btruth\s+in\s+renting\b|\bstatement\s+of\s+(?:the\s+)?(?:legal\s+)?rights\s+and\s+responsibilities\s+of\s+(?:residential\s+)?tenants\b|\bte…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:rights\s+and\s+responsibilities|tenant\s+rights|rights\s+of\s+tenants)\b))(?=[\s\S]*?(?:\b(?:distribut\w*|furnish\w*|pr…`: 0 units
- Term C.near `(?:\b(?:guide|handbook|booklet|pamphlet|brochure)\b)[\s\S]{0,1200}(?:\b(?:tenants?|renters?|landlord-tenant)\b)|(?:\b(?:tenants?|renters?|la…`: 5 units: 32.28, 452.1355, Adm 92.06, Adm 92.20, 2025 Wis. Act 69
- Term C.and `\A(?=[\s\S]*?(?:\b(?:guide|handbook|booklet|pamphlet|brochure)\b))(?=[\s\S]*?(?:\b(?:tenants?|renters?|landlord-tenant)\b))`: 15 units: 23.33, 32.28, 66.1331, 66.1333, 321.62, 452.1355, 632.975, 893.80, 895.07, 995.55, Adm 92.06, Adm 92.20 …
- Positive A: synthetic ('The department shall prepare a statement of the legal rights and responsibilities of tenants, and every landlord shall distribute it.') passed
- Positive B: synthetic ('Each landlord shall furnish the tenant rights and responsibilities statement with every lease.') passed
- Positive C: synthetic ('The landlord shall give the tenant a copy of the state landlord-tenant guide.') passed

#### WIG-D-037 — unbundled parking: parking rented separately from the dwelling

- Run 2026-11-16T07:49:07+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: unbundled-parking: whether Wisconsin requires or regulates parking rented separately from residential units.
- Cited by: `edu-no-unbundled-parking-rule-wi`
- Term A.main `\bunbundl\w*|\bparking\s+(?:separately|apart)\s+from\b|\bseparate(?:ly)?\s+(?:from\s+the\s+)?(?:rent|lease)\w*\s+(?:for\s+)?parking\b`: 5 units: 100.207, 196.01, 196.197, 196.219, 196.50
- Term B.and `\A(?=[\s\S]*?(?:\bparking\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?)\b))(?=[\s\S]*?(?:\b(?:separate\w*|opt\s+out|decline|n…`: 11 units: 70.32, 77.52, 101.132, 101.14, ATCP 72.03, Adm 92.68, SPS 362.0903, Tax 11.57, Tax 11.68, Tax 14.04, Wis. Const.
- Term C.near `(?:\b(?:parking\s+(?:spaces?|fees?|charges?)|garage\s+(?:spaces?|rent))\b)[\s\S]{0,1200}(?:\b(?:included\s+in\s+(?:the\s+)?rent|in\s+additio…`: 1 units: Tax 11.48
- Term C.and `\A(?=[\s\S]*?(?:\b(?:parking\s+(?:spaces?|fees?|charges?)|garage\s+(?:spaces?|rent))\b))(?=[\s\S]*?(?:\b(?:included\s+in\s+(?:the\s+)?rent|i…`: 2 units: Tax 11.48, Tax 14.05
- Positive A: synthetic ('The owner shall unbundle the cost of parking from the rent for each unit.') passed
- Positive B: synthetic ('A tenant of a residential rental apartment may decline a parking space and is not required to pay for it separately.') passed
- Positive C: synthetic ('The parking fee shall be a separate charge, not included in the rent.') passed

#### WIG-D-038 — EV charging: tenant rights, landlord duties, shared chargers, removal at end of tenancy, EV-ready building requirements

- Run 2026-11-16T07:51:14+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: ev-charging-end-of-tenancy, ev-charging-requirements, ev-charging-shared-area: Wisconsin law on EV charging that touches landlords and tenants (installation rights, removal, shared chargers, utility status, tax, weights and measures, building codes).
- Cited by: `edu-ev-charging-end-of-tenancy-wi`, `edu-ev-charging-requirements-wi`, `edu-ev-charging-shared-area-wi`
- Term A.main `\belectric\s+vehicle\s+(?:charging|supply)\w*|\bEVSE\b|\bEV[- ](?:ready|capable|charg\w*)\b|\bcharging\s+stations?\b`: 15 units: 16.9565, 25.40, 66.0442, 77.54, 77.707, 77.9961, 77.997, 77.9971, 77.9972, 196.01, ATCP 92.01, ATCP 92.60 …
- Term B.and `\A(?=[\s\S]*?(?:\belectric\s+vehicles?\b|\bEVSE\b|\bcharging\s+stations?\b|\bchargers?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|resi…`: 8 units: 20.385, 20.875, 71.07, 71.28, 71.47, 77.54, 2025 Wis. Act 15, 2025 Wis. Act 118
- Term C.near `(?:\b(?:plug\s+in|charge\s+(?:a|an|the|their|his|her)\s+(?:car|vehicle)|car\s+charger)\b)[\s\S]{0,1200}(?:\b(?:apartment|tenant|parking|gara…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:plug\s+in|charge\s+(?:a|an|the|their|his|her)\s+(?:car|vehicle)|car\s+charger)\b))(?=[\s\S]*?(?:\b(?:apartment|tenant|p…`: 1 units: 349.13
- Positive A: 77.9971 ('electric vehicle charging station registration') passed
- Positive B: synthetic ('A landlord may not prohibit a tenant from installing an electric vehicle charging station at the tenant's parking space.') passed
- Positive C: synthetic ('A tenant may plug in a car charger in the apartment garage.') passed

#### WIG-D-039 — appliances excluded from the lease; presumption that appliances present are landlord-supplied

- Run 2026-11-16T07:53:51+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: appliances-excluded: whether Wisconsin presumes appliances present are landlord-supplied unless the lease excludes them, or regulates excluding appliances.
- Cited by: `edu-appliances-excluded-wi`
- Term A.main `\bappliances?\b`: 271 units: 7.25, 12.13, 16.15, 16.87, 35.85, 45.01, 49.496, 49.682, 49.849, 50.01, 50.49, 62.50 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:appliances?|refrigerators?|stoves?|ranges?|dishwashers?|washers?|dryers?)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|rente…`: 9 units: 32.05, 77.29, 77.52, 77.54, 108.02, 421.301, 422.202, 704.07, Wis. Const.
- Term C.near `(?:\b(?:fridge|refrigerator|stove|washer|dryer|dishwasher|microwave)s?\b)[\s\S]{0,1200}(?:\b(?:leases?|rental\s+agreements?|tenants?|landlor…`: 7 units: 77.29, 77.52, 422.417, DHS 89.13, DHS 89.22, Tax 11.48, Trans 301.03
- Term C.and `\A(?=[\s\S]*?(?:\b(?:fridge|refrigerator|stove|washer|dryer|dishwasher|microwave)s?\b))(?=[\s\S]*?(?:\b(?:leases?|rental\s+agreements?|tenan…`: 21 units: 77.29, 77.52, 77.54, 125.26, 125.51, 422.417, 709.03, DHS 101.03, DHS 89.13, DHS 89.22, Ins 4.10, NR 400.02 …
- Positive A: 704.07 ('repair or replace any plumbing, electrical wiring, machinery, or equipment furnished with the premises') passed
- Positive B: synthetic ('Appliances present in the dwelling unit are presumed furnished by the landlord unless the rental agreement expressly excludes them from the tenant's lease.') passed
- Positive C: synthetic ('If the lease excludes the refrigerator, the landlord need not repair it.') passed

#### WIG-D-040 — furnished rentals: furniture inventory, furniture deposits, tenant duties for furnishings

- Run 2026-11-16T07:54:51+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: furnishings-included: whether Wisconsin has rules for furnished rentals (inventory, furniture deposits, tenant duties for furnishings).
- Cited by: `furnishings-included-wi`
- Term A.main `\bfurnished\s+(?:units?|apartments?|dwellings?|premises|rentals?|rooms?|houses?)\b|\bfurniture\s+(?:deposits?|inventor(?:y|ies))\b`: 1 units: DHS 134.84
- Term B.and `\A(?=[\s\S]*?(?:\b(?:furniture|furnishings)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?)\b))(?=[\s\S]*?(?:\b(?:landlords?|lessors?)\b))…`: 9 units: 77.29, 77.52, 77.54, 224.71, 321.62, 411.103, 704.90, ATCP 134.07, Tax 11.48
- Term C.near `(?:\b(?:couch|sofa|bed|beds|table|chairs?|furniture)\b)[\s\S]{0,1200}(?:\b(?:apartment|rented|rental|tenant)\b)|(?:\b(?:apartment|rented|ren…`: 68 units: 16.009, 20.432, 20.433, 46.277, 50.034, 59.26, 59.27, 70.111, 71.55, 77.29, 77.52, 77.996 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:couch|sofa|bed|beds|table|chairs?|furniture)\b))(?=[\s\S]*?(?:\b(?:apartment|rented|rental|tenant)\b))`: 130 units: 13.48, 16.009, 20.432, 20.433, 20.540, 36.25, 46.277, 49.19, 49.45, 50.02, 50.034, 59.26 …
- Positive A: synthetic ('A landlord who rents a furnished unit shall give the tenant a furniture inventory.') passed
- Positive B: synthetic ('If the lease includes furniture, the landlord shall list the furnishings and the tenant shall return them.') passed
- Positive C: synthetic ('The tenant of a rented apartment must return the landlord's sofa and chairs.') passed

#### WIG-M-001 — arbitration of residential lease or tenancy disputes

- Run 2026-11-16T05:58:36+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives FAILED; superseded by WIG-M-002; rerun identical.
- Question: binding-arbitration (main pass): is any Wisconsin rule specific to arbitration in residential tenancies? A = arbitration near tenancy/lease words both orders + section-wide AND; B = three-way AND; C = everyday companion (mediation, dispute resolution); D = plain term of art.
- Cited by: `edu-binding-arbitration-wi`
- Term A.near `(?:\barbitrat\w*)[\s\S]{0,1200}(?:\b(?:tenant|tenants|tenancy|lessee|lessees|renter|renters|rental agreement|residential lease|leases?|landl…`: 10 units: 59.58, 93.50, 135.02, 197.10, 218.0171, 411.501, 425.301, 703.245, 895.07, REEB 25.023
- Term A.and `\A(?=[\s\S]*?(?:\barbitrat\w*))(?=[\s\S]*?(?:\b(?:tenant|tenants|tenancy|lessee|lessees|renter|renters|rental agreement|residential lease|le…`: 37 units: 19.35, 19.59, 20.438, 20.490, 20.875, 48.99, 59.52, 59.58, 66.0901, 93.50, 102.03, 125.33 …
- Term B.and `\A(?=[\s\S]*?(?:\barbitrat\w*))(?=[\s\S]*?(?:\b(?:tenant|tenants|tenancy|lessee)\b))(?=[\s\S]*?(?:\b(?:landlord|lessor|owner)s?\b))`: 12 units: 66.0901, 218.0116, 218.0171, 411.501, 632.32, 701.0816, 703.245, 779.32, 895.07, 973.20, REEB 25.023, Wis. Const.
- Term C.main `\b(?:dispute resolution|alternative dispute|mediation|mediator)\b[\s\S]{0,1200}\b(?:tenant|tenants|landlord)s?\b|\b(?:tenant|tenants|landlor…`: 3 units: 703.245, DCF 120.05, REEB 25.023
- Term D.main `\barbitration (?:clause|agreement|provision)s?\b`: 22 units: 66.0901, 72.35, 111.70, 135.02, 135.025, 135.05, 218.0114, 218.0116, 421.106, 425.301, 426.110, 631.20 …
- Positive A: 788.015 ('to submit to arbitration any controversy between them arising out of the real estate transaction') FAILED (near pattern does not match unit)
- Positive B: synthetic ('No rental agreement may require a tenant to arbitrate a dispute with the landlord before an owner files an eviction action.') passed
- Positive C: synthetic ('The landlord and tenant may agree to mediation of any dispute arising under the lease.') passed
- Positive D: synthetic ('An arbitration clause in a residential lease is void.') passed

#### WIG-M-002 — arbitration of residential lease or tenancy disputes

- Run 2026-11-16T05:59:23+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; supersedes WIG-M-001 (positive A named Wis. Stat. § 788.015, which has no tenancy word; replaced by a real unit carrying both limbs); rerun identical.
- Question: binding-arbitration (main pass): is any Wisconsin rule specific to arbitration in residential tenancies? A = arbitration near tenancy/lease words both orders + section-wide AND; B = three-way AND; C = everyday companion (mediation, dispute resolution); D = plain term of art.
- Cited by: `edu-binding-arbitration-wi`
- Term A.near `(?:\barbitrat\w*)[\s\S]{0,1200}(?:\b(?:tenant|tenants|tenancy|lessee|lessees|renter|renters|rental agreement|residential lease|leases?|landl…`: 10 units: 59.58, 93.50, 135.02, 197.10, 218.0171, 411.501, 425.301, 703.245, 895.07, REEB 25.023
- Term A.and `\A(?=[\s\S]*?(?:\barbitrat\w*))(?=[\s\S]*?(?:\b(?:tenant|tenants|tenancy|lessee|lessees|renter|renters|rental agreement|residential lease|le…`: 37 units: 19.35, 19.59, 20.438, 20.490, 20.875, 48.99, 59.52, 59.58, 66.0901, 93.50, 102.03, 125.33 …
- Term B.and `\A(?=[\s\S]*?(?:\barbitrat\w*))(?=[\s\S]*?(?:\b(?:tenant|tenants|tenancy|lessee)\b))(?=[\s\S]*?(?:\b(?:landlord|lessor|owner)s?\b))`: 12 units: 66.0901, 218.0116, 218.0171, 411.501, 632.32, 701.0816, 703.245, 779.32, 895.07, 973.20, REEB 25.023, Wis. Const.
- Term C.main `\b(?:dispute resolution|alternative dispute|mediation|mediator)\b[\s\S]{0,1200}\b(?:tenant|tenants|landlord)s?\b|\b(?:tenant|tenants|landlor…`: 3 units: 703.245, DCF 120.05, REEB 25.023
- Term D.main `\barbitration (?:clause|agreement|provision)s?\b`: 22 units: 66.0901, 72.35, 111.70, 135.02, 135.025, 135.05, 218.0114, 218.0116, 421.106, 425.301, 426.110, 631.20 …
- Positive A: 411.501 ('nonjudicial procedure, including administrative proceeding, arbitration or the like') passed
- Positive B: synthetic ('No rental agreement may require a tenant to arbitrate a dispute with the landlord before an owner files an eviction action.') passed
- Positive C: synthetic ('The landlord and tenant may agree to mediation of any dispute arising under the lease.') passed
- Positive D: synthetic ('An arbitration clause in a residential lease is void.') passed

#### WIG-N-001 — statutory list of imminently dangerous conditions in rental housing

- Run 2026-11-16T08:08:49+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: confirmed-absences-habitability item 1: whether Wisconsin lists imminently dangerous conditions that trigger special tenant remedies or landlord duties (other states' 'imminently dangerous conditions' lists). Term A plain term of art; B pairs it with role words; C everyday wording.
- Cited by: `edu-confirmed-absences-habitability-wi`
- Term A.main `\bimminent(?:ly)?\s+(?:danger\w*|hazard\w*|threat\w*|peril\w*)`: 179 units: 13.42, 16.61, 16.84, 30.45, 48.20, 48.21, 48.255, 48.33, 48.355, 48.396, 48.78, 48.981 …
- Term B.near `(?:\bimminent\w*)[\s\S]{0,1200}(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|lessors?|owners?)\b)|(?:\b(?:tenants?|les…`: 67 units: 50.03, 50.05, 50.085, 66.0104, 66.0413, 94.71, 97.42, 100.37, 101.15, 114.04, 173.07, 173.23 …
- Term B.and `\A(?=[\s\S]*?(?:\bimminent\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|landlords?|lessors?|owners?)\b))`: 127 units: 16.84, 46.277, 46.90, 48.99, 50.03, 50.05, 50.085, 55.043, 59.694, 62.23, 66.0104, 66.0413 …
- Term C.near `(?:\b(?:dangerous|hazardous|unsafe|life-threatening)\s+conditions?\b|\bconditions?\s+hazardous\s+to\s+(?:health|life)\b)[\s\S]{0,1200}(?:\b(…`: 16 units: 27.09, 32.03, 101.11, 704.07, 893.89, ATCP 93.020, Ins 4.10, PSC 113.012, PSC 113.0301, PSC 113.0302, PSC 134.02, PSC 134.062 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:dangerous|hazardous|unsafe|life-threatening)\s+conditions?\b|\bconditions?\s+hazardous\s+to\s+(?:health|life)\b))(?=[\s…`: 23 units: 27.09, 32.03, 66.1333, 101.11, 704.07, 709.03, 709.033, 893.89, 895.52, ATCP 93.020, Ins 4.10, PSC 113.012 …
- Positive A: 66.0104 ('exposes a tenant to imminent danger') passed
- Positive B: 66.0104 ('if the violation exposes a tenant to imminent danger') passed
- Positive C: 704.07 ('because of any condition hazardous to health') passed

#### WIG-N-002 — landlord duty to provide air conditioning or cooling

- Run 2026-11-16T08:09:28+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: confirmed-absences-habitability item 2: whether Wisconsin requires a landlord to provide cooling or air conditioning or sets a maximum indoor temperature. B is the role-word AND; C everyday wording (heat emergency, too hot).
- Cited by: `edu-confirmed-absences-habitability-wi`
- Term A.main `\b(?:provide|provides|supply|supplies|furnish|furnishes|install|installs)\s+(?:\w+\s+){0,3}(?:air[- ]condition\w*|cooling)\b|\bmaximum\s+(?:…`: 16 units: 100.45, DHS 157.13, NR 102.04, NR 102.22, NR 106.59, NR 111.03, NR 111.31, NR 440.76, NR 811.54, NR 852.05, Phar 6.075, SPS 322.30 …
- Term B.and `\A(?=[\s\S]*?(?:\bair[- ]condition\w*|\bcooling\b))(?=[\s\S]*?(?:\b(?:shall|must)\b))(?=[\s\S]*?(?:\b(?:dwelling\s+units?|rental\s+units?|ap…`: 12 units: 77.52, 704.07, 709.03, DHS 163.03, DHS 163.10, DHS 163.42, Ins 4.10, NR 812.07, PSC 113.0803, SPS 381.01, Tax 11.57, Tax 11.68
- Term C.near `(?:\b(?:too\s+hot|excessive\s+heat|extreme\s+heat|heat\s+emergenc\w*|heat\s+index|cool\s+enough)\b)[\s\S]{0,1200}(?:\b(?:dwellings?|apartmen…`: 6 units: DCF 250.06, DCF 251.06, DCF 252.43, PSC 113.0301, PSC 113.0302, PSC 185.37
- Term C.and `\A(?=[\s\S]*?(?:\b(?:too\s+hot|excessive\s+heat|extreme\s+heat|heat\s+emergenc\w*|heat\s+index|cool\s+enough)\b))(?=[\s\S]*?(?:\b(?:dwelling…`: 6 units: DCF 250.06, DCF 251.06, DCF 252.43, PSC 113.0301, PSC 113.0302, PSC 185.37
- Positive A: synthetic ('The landlord shall provide air conditioning in each dwelling unit from June 1 to September 15.') passed
- Positive B: 704.07 ('necessary to supply services that the landlord has expressly or impliedly agreed to furnish to the tenant') passed
- Positive C: synthetic ('During a heat emergency the owner shall keep each dwelling unit cool enough for occupants.') passed

#### WIG-N-003 — numeric indoor heat standard binding a landlord

- Run 2026-11-16T08:09:56+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: confirmed-absences-habitability item 3: whether Wisconsin sets a minimum indoor temperature a landlord must maintain (not merely a disclosure or local-inspection definition). A catches numeric degree forms including the corpus artifact 'n F'; B role-word AND; C everyday wording.
- Cited by: `edu-confirmed-absences-habitability-wi`
- Term A.main `\b(?:[5-7][0-9])\s*(?:degrees|°|n)\s*(?:F\b|Fahrenheit)|\b(?:[1-2][0-9])\s*(?:degrees|°|n)\s*(?:C\b|Celsius)`: 157 units: 66.0104, 97.27, 98.245, 100.186, 100.21, 192.15, ATCP 134.04, ATCP 155.22, ATCP 16.22, ATCP 30.22, ATCP 65.01, ATCP 65.16 …
- Term B.and `\A(?=[\s\S]*?(?:\bheat\b|\bheating\b))(?=[\s\S]*?(?:\btemperatures?\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|residents?|occupants?|l…`: 20 units: 66.0104, ATCP 134.04, ATCP 72.03, DCF 52.52, DCF 59.06, DHS 131.37, DHS 134.83, DHS 163.14, DHS 163.42, DHS 88.05, NR 440.64, NR 809.04 …
- Term C.near `(?:\bminimum\s+(?:indoor\s+|inside\s+|room\s+)?temperatures?\b|\btemperatures?\s+of\s+(?:at\s+least|not\s+less\s+than)\b|\b(?:keep|kept|keep…`: 9 units: 192.15, DHS 105.14, DHS 134.83, DHS 83.55, DOC 350.05, DOC 350.06, SPS 364.0309, SPS 371.10, SPS 371.22
- Term C.and `\A(?=[\s\S]*?(?:\bminimum\s+(?:indoor\s+|inside\s+|room\s+)?temperatures?\b|\btemperatures?\s+of\s+(?:at\s+least|not\s+less\s+than)\b|\b(?:k…`: 13 units: 192.15, ATCP 93.050, DHS 105.14, DHS 131.37, DHS 134.83, DHS 83.55, DOC 350.05, DOC 350.06, NR 502.12, SPS 364.0309, SPS 371.10, SPS 371.22 …
- Positive A: 66.0104 ('at least 67 degrees Fahrenheit') passed
- Positive B: ATCP 134.04 ('Heating facilities serving the dwelling unit') passed
- Positive C: synthetic ('The landlord shall maintain a minimum temperature of 68 degrees in each dwelling unit.') passed

#### WIG-N-004 — fixed deadline for a landlord's repairs

- Run 2026-11-16T08:10:30+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: confirmed-absences-habitability item 6: whether Wisconsin sets a general deadline (days or hours) for a landlord's repairs. Known positives: the 5-day detector repair rules. B is a section-wide AND with both role words and a premises word; C everyday wording.
- Cited by: `edu-confirmed-absences-habitability-wi`
- Term A.main `\b(?:repair|correct|remedy|fix)\w*\s+(?:\S+\s+){0,8}within\s+(?:\d+|one|two|three|five|seven|ten|fourteen|thirty)\s+(?:business\s+|calendar\…`: 124 units: 9.10, 43.54, 43.57, 50.04, 51.20, 51.45, 66.0413, 69.09, 69.14, 71.76, 71.80, 76.10 …
- Term B.and `\A(?=[\s\S]*?(?:\brepairs?\b|\bremed(?:y|ied)\b|\bcorrect(?:ed)?\b))(?=[\s\S]*?(?:\bwithin\s+(?:\d+|one|two|three|five|seven|ten|fourteen|th…`: 83 units: 19.59, 20.875, 23.0917, 23.33, 32.05, 32.06, 32.22, 49.45, 50.03, 59.69, 59.694, 60.61 …
- Term C.near `(?:\b(?:make|complete|begin|commence|start)\s+(?:the\s+|all\s+|any\s+)?repairs?\b|\bfix\s+(?:it|the\s+problem|the\s+defect)\b)[\s\S]{0,1200}…`: 9 units: 31.23, 66.0413, 254.595, ATCP 132.04, ATCP 33.20, NR 664.1086, NR 665.1087, SPS 321.125, SPS 360.22
- Term C.and `\A(?=[\s\S]*?(?:\b(?:make|complete|begin|commence|start)\s+(?:the\s+|all\s+|any\s+)?repairs?\b|\bfix\s+(?:it|the\s+problem|the\s+defect)\b))…`: 18 units: 31.23, 62.17, 66.0413, 88.82, 100.201, 254.595, 632.103, 779.41, ATCP 132.04, ATCP 33.20, ATCP 33.32, NR 463.15 …
- Positive A: 101.149 ('shall repair or replace the nonfunctional or missing carbon monoxide detector within 5 days') passed
- Positive B: 101.149 ('An occupant of a unit in a residential building may give the owner') passed
- Positive C: synthetic ('The landlord shall begin repairs within 7 days after receiving the tenant's notice.') passed

#### WIG-N-005 — small-landlord exemption from tenant remedies

- Run 2026-11-16T08:11:02+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: confirmed-absences-habitability item 10: whether Wisconsin exempts small landlords (by number of units owned) from tenant repair remedies. Complements WIG-B-022 (portfolio thresholds) and WIG-D-022 (escrow exemption notice). B catches building-based exemptions (owner-occupied, N or fewer units) so they can be named.
- Cited by: `edu-confirmed-absences-habitability-wi`
- Term A.main `\bsmall\s+landlords?\b|\bsmall\s+(?:rental\s+)?property\s+owners?\b|\b(?:owns?|owning)\s+(?:no\s+more\s+than|not\s+more\s+than|fewer\s+than|…`: 0 units
- Term B.and `\A(?=[\s\S]*?(?:\b(?:does|shall)\s+not\s+apply\b|\binapplicable\b|\bexempt\w*))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?)\b))(?=[\s\S]*?…`: 9 units: 66.1105, 66.1333, 71.07, 106.50, 254.595, 281.75, 703.02, ATCP 134.04, NR 19.60
- Term C.near `(?:\b(?:landlords?|owners?)\s+(?:who|that)\s+(?:owns?|rents?|leases?)\s+(?:only\s+)?(?:one|two|three|four|a\s+single|\d+)\b)[\s\S]{0,1200}(?…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:landlords?|owners?)\s+(?:who|that)\s+(?:owns?|rents?|leases?)\s+(?:only\s+)?(?:one|two|three|four|a\s+single|\d+)\b))(?…`: 0 units
- Positive A: synthetic ('This section does not apply to a small landlord who owns no more than 3 dwelling units.') passed
- Positive B: 254.595 ('This section shall not apply to owner-occupied one or 2-') passed
- Positive C: synthetic ('A landlord who owns only one rental home is not subject to this section.') passed

#### WIG-N-006 — smoke or CO detector compliance inadmissible; limits on insurers

- Run 2026-11-16T08:11:46+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: confirmed-absences-misc item 2: whether Wisconsin makes detector compliance or noncompliance inadmissible, or limits what an insurer may do (Kansas, Delaware type rules). The CO liability exemptions (Wis. Stat. 101.149(3)(c), 101.647(5)) are the expected real hits.
- Cited by: `edu-confirmed-absences-misc-wi`
- Term A.near `(?:\b(?:smoke|carbon\s+monoxide)\s+(?:detectors?|alarms?)\b)[\s\S]{0,1200}(?:\b(?:inadmissib\w*|admissib\w*|evidence\s+of\s+(?:comparative\s…`: 1 units: DCF 52.13
- Term A.and `\A(?=[\s\S]*?(?:\b(?:smoke|carbon\s+monoxide)\s+(?:detectors?|alarms?)\b))(?=[\s\S]*?(?:\b(?:inadmissib\w*|admissib\w*|evidence\s+of\s+(?:co…`: 3 units: 709.03, DCF 202.08, DCF 52.13
- Term B.and `\A(?=[\s\S]*?(?:\b(?:smoke|carbon\s+monoxide)\s+(?:detectors?|alarms?)\b))(?=[\s\S]*?(?:\b(?:tenants?|lessees?|renters?|occupants?|landlords…`: 12 units: 66.0104, 101.149, 101.645, 101.647, 709.03, ATCP 72.03, DCF 202.08, DHS 105.14, SPS 305.63, SPS 314.01, SPS 321.097, Tax 11.84
- Term C.near `(?:\b(?:fire|smoke)\s+alarms?\b|\bdetectors?\b)[\s\S]{0,1200}(?:\b(?:in\s+court|lawsuits?|civil\s+actions?|insurance\s+payments?|reduce\s+(?…`: 0 units
- Term C.and `\A(?=[\s\S]*?(?:\b(?:fire|smoke)\s+alarms?\b|\bdetectors?\b))(?=[\s\S]*?(?:\b(?:in\s+court|lawsuits?|civil\s+actions?|insurance\s+payments?|…`: 4 units: 20.432, KB 1.03, NR 45.04, Wis. Const.
- Positive A: synthetic ('Compliance with the smoke detector requirements is not admissible as evidence of negligence in any civil action, and no insurer may reduce payment because of it') passed
- Positive B: 101.647 ('The owner of a dwelling is not liable for damages resulting from any of the following') passed
- Positive C: synthetic ('Whether a smoke alarm was installed may not be considered in a lawsuit for damages.') passed

#### WIG-N-007 — special right to end a lease for a false rental application

- Run 2026-11-16T08:13:43+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: confirmed-absences-misc item 3: whether Wisconsin gives a landlord a statutory right to end a tenancy because the rental application was false (North Dakota type rule). B is the role-word AND.
- Cited by: `edu-confirmed-absences-misc-wi`
- Term A.main `\b(?:false|fraudulent|misleading|untrue|falsified)\s+(?:rental\s+|lease\s+|housing\s+|tenancy\s+)?applications?\b|\bmisrepresent\w*\s+(?:\w+…`: 42 units: 94.73, 102.125, 103.34, 125.04, 202.06, 292.65, 341.01, 341.60, 631.11, 632.32, 632.69, 710.15 …
- Term B.and `\A(?=[\s\S]*?(?:\b(?:false|fraudulent\w*|misrepresent\w*|untrue|falsif\w*)\b))(?=[\s\S]*?(?:\bapplica(?:nt|nts|tion|tions)\b))(?=[\s\S]*?(?:…`: 6 units: 106.50, 108.02, 321.62, 895.489, REEB 25.023, Wis. Const.
- Term C.near `(?:\b(?:lied|lying)\s+(?:on|in|about)\b|\bfalse\s+(?:information|statements?)\b)[\s\S]{0,1200}(?:\b(?:rental\s+applica\w*|applications?\s+fo…`: 7 units: 23.335, 29.889, 342.155, 425.103, 895.489, 946.91, Trans 128.09
- Term C.and `\A(?=[\s\S]*?(?:\b(?:lied|lying)\s+(?:on|in|about)\b|\bfalse\s+(?:information|statements?)\b))(?=[\s\S]*?(?:\b(?:rental\s+applica\w*|applica…`: 26 units: 23.33, 23.335, 29.889, 49.49, 84.30, 108.02, 108.14, 116.02, 120.13, 218.0114, 218.0133, 342.155 …
- Positive A: synthetic ('A landlord may terminate a tenancy if the tenant submitted a false rental application.') passed
- Positive B: synthetic ('If a tenant made a material false statement in an application, the landlord may terminate the tenancy on 5 days' notice.') passed
- Positive C: synthetic ('The tenant lied on the rental application, so the landlord ended the lease.') passed

#### WIG-N-008 — payment-method or convenience fee ban for rent

- Run 2026-11-16T08:14:14+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: confirmed-absences-misc item 4: whether Wisconsin bans or caps a fee for a particular rent payment method. A has no tenancy word (a fee rule can be stated without one); B role-word AND; C everyday wording (pay rent by card, plus a fee word).
- Cited by: `edu-confirmed-absences-misc-wi`
- Term A.main `\bconvenience\s+fees?\b|\bpayment\s+processing\s+fees?\b|\b(?:credit|debit)\s+card\s+(?:surcharges?|fees?|processing\s+fees?)\b`: 10 units: 20.385, 20.875, 85.14, Game 13.05, Trans 198.01, Trans 198.04, Trans 198.05, Trans 198.06, Trans 198.07, 2025 Wis. Act 15
- Term B.and `\A(?=[\s\S]*?(?:\bconvenience\s+fees?\b|\b(?:processing|transaction)\s+fees?\b|\bsurcharges?\b|\bcredit\s+cards?\b))(?=[\s\S]*?(?:\brent\b))…`: 2 units: 421.301, Wis. Const.
- Term C.near `(?:\b(?:pay|pays|paying|paid)\s+(?:the\s+)?rent\s+(?:by|with|online|through|using)\b|\brent\s+payments?\s+(?:made\s+)?(?:by|with|online|thro…`: 1 units: 704.90
- Term C.and `\A(?=[\s\S]*?(?:\b(?:pay|pays|paying|paid)\s+(?:the\s+)?rent\s+(?:by|with|online|through|using)\b|\brent\s+payments?\s+(?:made\s+)?(?:by|wit…`: 1 units: 704.90
- Positive A: synthetic ('No landlord may charge a convenience fee for rent paid by credit card.') passed
- Positive B: synthetic ('A landlord may not impose a surcharge on a tenant who pays rent by credit card.') passed
- Positive C: synthetic ('A tenant who pays rent by credit card may not be charged an extra fee.') passed

#### WIG-N-009 — squatter or unauthorized-occupant specific removal remedy

- Run 2026-11-16T08:12:18+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: confirmed-absences-outside-title item 1: whether any Wisconsin law (all held law, not only ch. 704) gives a squatter- or unauthorized-occupant-specific removal procedure. B is broad by design; its rental-relevant hits are named.
- Cited by: `edu-confirmed-absences-outside-title-wi`
- Term A.main `\bsquat\w*|\bunauthorized\s+(?:occupants?|occupancy|persons?\s+in\s+possession)\b|\bunlawful(?:ly)?\s+(?:occupants?|occupying|occupation|occ…`: 3 units: 32.19, Adm 92.01, DCF 52.42
- Term B.and `\A(?=[\s\S]*?(?:\bunauthorized\b|\bwithout\s+(?:the\s+)?(?:\w+\s+)?(?:consent|permission|authority|right)\b|\bnot\s+entitled\s+to\b))(?=[\s\…`: 47 units: 12.13, 23.33, 23.335, 29.519, 48.99, 59.84, 62.23, 66.0413, 66.1201, 66.1331, 66.1333, 70.11 …
- Term C.near `(?:\b(?:trespass\w*|intruders?|break-ins?)\b)[\s\S]{0,1200}(?:\b(?:dwellings?|homes?|houses?|residences?|apartments?|rental)\b)|(?:\b(?:dwel…`: 15 units: 59.54, 101.01, 175.403, 704.055, 704.17, 895.043, 939.48, 943.13, 943.14, 995.50, Cos 3.01, SPS 371.21 …
- Term C.and `\A(?=[\s\S]*?(?:\b(?:trespass\w*|intruders?|break-ins?)\b))(?=[\s\S]*?(?:\b(?:dwellings?|homes?|houses?|residences?|apartments?|rental)\b))`: 23 units: 28.11, 59.54, 101.01, 103.001, 106.52, 118.07, 175.403, 704.055, 704.17, 893.52, 895.043, 905.04 …
- Positive A: synthetic ('An owner may remove a squatter by filing an affidavit with the sheriff.') passed
- Positive B: 799.40 ('any person who is not entitled to either the possession or occupancy') passed
- Positive C: 943.14 ('Criminal trespass to dwellings') passed

#### WIG-N-010 — landlord registration or license as a precondition to a possession judgment

- Run 2026-11-16T08:13:06+00:00; scope Wisconsin Statutes, Administrative Code, Constitution, 2025 Wis. Acts, SCR ch. 72 (39957 units, unit-set hash 23be0fbd5b69dd24); control 0; positives all passed; rerun identical.
- Question: confirmed-absences-outside-title item 3 (and the bar-on-suing check for item 4): whether any Wisconsin law makes landlord registration or a rental license a condition of filing or winning an eviction. C has no tenancy word and is meant to catch every registration-based bar on suing (foreign entities, licences), so the hits can be named.
- Cited by: `edu-confirmed-absences-outside-title-wi`
- Term A.main `\brental\s+(?:registration|licens\w*|permits?|certificates?\s+of\s+(?:occupancy|compliance))\b|\b(?:landlord|rental\s+property|rental\s+unit…`: 1 units: 66.0104
- Term B.and `\A(?=[\s\S]*?(?:\bregist\w*|\blicens\w*))(?=[\s\S]*?(?:\b(?:evict\w*|possession|restitution|unlawful\s+detainer)\b))(?=[\s\S]*?(?:\b(?:landl…`: 3 units: 108.02, 218.0171, 893.31
- Term C.near `(?:\b(?:may|shall)\s+not\s+(?:maintain|commence|bring|file)\s+(?:an?\s+|any\s+)?(?:action|proceeding|suit|civil\s+action)\b|\bcannot\s+(?:ma…`: 8 units: 16.11, 125.07, 178.1002, 179.1002, 180.1502, 181.1502, 183.0902, 193.931
- Term C.and `\A(?=[\s\S]*?(?:\b(?:may|shall)\s+not\s+(?:maintain|commence|bring|file)\s+(?:an?\s+|any\s+)?(?:action|proceeding|suit|civil\s+action)\b|\bc…`: 16 units: 16.11, 125.07, 134.49, 178.1002, 179.1002, 180.1502, 180.1833, 181.1502, 183.0902, 193.931, 200.35, 218.0171 …
- Positive A: 66.0104 ('residential rental property owner be registered') passed
- Positive B: synthetic ('A landlord may not maintain an action for possession against a tenant unless the landlord is registered with the city.') passed
- Positive C: 183.0902 ('may not maintain an action or proceeding in this state unless it has registered') passed

### §4 Decisions and questions asked of Taylor

No question was asked of Taylor in this pass (rule 76: each point below was worked out from the text; the item 10 rule is Taylor's own decision of 2026-11-07).

- Item 9(a): Early termination: `early-termination-wi` should state one month's Rent ({{monthly_rent}}) instead of a hand-filled amount, because a blank lets a landlord fill a figure that works as the acceleration Wis. Stat. § 704.44(3m) voids; rule_type stays RECOMMENDED. It already reserves the statutory terminations; the proposed row adds a sentence that no fee applies when the tenancy or rent liability ends under Wis. Stat. § 704.16, Wis. Stat. § 704.165, Wis. Stat. § 321.62 or FEDERAL: 50 U.S.C. § 3955 ('The lessor may not impose an early termination charge', FEDERAL: 50 U.S.C. § 3955(e)(1)). Proposed row in §6.
- Item 10: Arbitration: not offered (Taylor's rule of 2026-11-07). Wisconsin's Arbitration Act makes a written pre-dispute arbitration clause enforceable (Wis. Stat. § 788.01), but whether a lease arbitration clause, or one making the tenant share arbitration costs, is a void-list term under Wis. Stat. § 704.44(2m) or Wis. Stat. § 704.44(4m) turns on case law not read, and a void-list term voids the whole lease and can expose the landlord to double damages for a pecuniary loss (Wis. Stat. § 100.20(5)); `arbitration-agreement` is not tagged and `edu-binding-arbitration-wi` says so.
- Item 9(b): Casualty fault persons: `casualty-termination-wi` and `tenant-caused-damage-wi` agree on who is at fault for each consequence (Landlord fault is the Wis. Stat. § 704.07(2)(c) line; Tenant-only for no abatement and no move-out, Wis. Stat. § 704.07(4); Tenant, guests or invitees for repair cost, Wis. Stat. § 704.07(3)(a) and Wis. Stat. § 704.44(7)(b)), but they give two answers on rent when Tenant's negligence caused the casualty and Landlord ends the Lease: they do not fit together on that point. Proposed wording for `casualty-termination-wi` is in §6; `tenant-caused-damage-wi` needs no change.
- Item 9(c): CARES: none of `edu-nonpayment-notice-wi`, `edu-cure-wi`, `edu-termination-notice-wi`, `edu-for-cause-wi`, `edu-criminal-eviction-wi`, `edu-eviction-process-wi`, `edu-eviction-stays-wi`, `default-by-tenant-wi`, `periodic-tenancy-notice-wi` or `criminal-activity-wi` contradicts `edu-cares-act-notice` (tagged WI). Each states Wisconsin's own notice as a minimum ("at least 5 days", "as Wisconsin law requires", "applicable law") and none says the state notice is the only one, or that a landlord may require a tenant to vacate before a federal notice period runs; a covered landlord giving the federal notice that the tenant need not vacate 'before the date that is 30 days after the date on which the lessor provides the tenant with a notice to vacate' (FEDERAL: 15 U.S.C. § 9058(c)(1)) still complies with each. The closest is `edu-eviction-process-wi` ("After the notice period ends, you file"), which describes the state sequence and is read with `edu-cares-act-notice`. New eviction rows in this pass point to `edu-cares-act-notice` where they state a notice period.
- Item 8: `smoking-policy`: confirmed still not tagged WI; Wisconsin uses `smoking-policy-wi`.
- Item 8: `no-alterations` (tagged WI): fits. Its consent rule restates Wis. Stat. § 704.05(3) ('without prior consent of the landlord'); its last sentence keeps the disability modifications a landlord must permit 'at the expense of a person with a disability' with restoration conditioned only 'where it is reasonable to do so' (Wis. Stat. § 106.50(2r)(b)3.; FEDERAL: 24 C.F.R. § 100.203(a)), and so also keeps the restoration limits; it keeps the federal antenna rule (FEDERAL: 47 C.F.R. § 1.4000), the video-provider access rule (`edu-video-service-wi`) and the political-sign right (`edu-signs-flags-wi`). Wisconsin gives tenants no solar or EV installation right (`edu-solar-wi`, `edu-ev-charging-wi`), so nothing there conflicts. No override.
- Item 8: `addendum-precedence`: confirmed still not tagged WI; `addendum-precedence-wi` lets any disclosure, notice or addendum "required by law" and a signed NONSTANDARD RENTAL PROVISIONS document control, so `dv-protections-notice-wi`, `landlord-disclosure-wi`, `condition-disclosure-wi`, `utility-allocation-wi` and the federal lead disclosure (`lead-based-paint`) still control.
- Item 8: `default-by-tenant-wi`: fits. Remedies are rent and damages less lawful deposit withholdings with mitigation under Wis. Stat. § 704.29 (no acceleration or mitigation waiver, Wis. Stat. § 704.44(3m)); no attorney fees or costs except as a court awards under ch. 799 or 814 (Wis. Stat. § 704.44(4m)); no liability for damage beyond what Wis. Stat. § 704.44(7)(b) allows.
- Item 8: `keys` (tagged WI): fits. "charge the cost to Tenant" is the actual cost of rekeying after Tenant's own failure to return keys or request for a replacement, a cost Tenant causes, not property damage by others (Wis. Stat. § 704.44(7)(b)); it is a contingent charge stated in the Lease, not a recurring non-rent charge that must be disclosed with the rent amount (Wis. Admin. Code ATCP § 134.09(9)(a)3.). The existing WI segment already says deducting it from the deposit needs a nonstandard rental provision (Wis. Stat. § 704.28(1), Wis. Stat. § 704.28(2)). No stated amount is needed; the parking-tag precedent concerns a fixed price, not a cost pass-through. No override.
- Item 8: `hoa-compliance` (tagged WI): fits. For a condominium 'the tenant is liable for the charge, fine, or assessment' imposed for the tenant's violation (Wis. Stat. § 703.24(3)(a)); for a non-condominium association the clause itself is the basis and reaches only fines for Tenant's own violation, so Wis. Stat. § 704.44(7)(b) is not engaged; association fines are not on the deposit list (Wis. Stat. § 704.28(1)) and need a nonstandard rental provision to be withheld. No override.
- Item 11: Wis. Stat. § 704.05 as it read in the 2009-10 statutes is not held (the corpus has the current text and its history line only); no row in this pass relies on the old text, and any row on left-behind property states that boundary rather than the old rule.
- Item 11: The automatic-renewal reminder windows (Wis. Stat. § 704.15; Wis. Admin. Code ATCP § 134.09(3)) are relied on by `edu-term-change-notice-wi` and `edu-seasonal-tenancy-wi`, each of which cites both.
- Item 11: The FHA exemptions (FEDERAL: 42 U.S.C. § 3603(b), saved) and Wisconsin's (Wis. Stat. § 106.50(5m)) were read where a topic needed them: `edu-portfolio-thresholds-wi` relies on both; `edu-student-housing-wi` and `edu-family-child-care-wi` rely on Wis. Stat. § 106.50(5m); `edu-service-animal-denial-penalty-wi` turns on the penalty provisions, not the exemptions.
- Item 11: Manufactured home community site rentals (Wis. Stat. § 710.15; Wis. Admin. Code ch. ATCP 125) are named as a boundary in the rows, not drafted for (class decision 10), except where a topic turns on them.
- Item 11: Legal-watch items, not rows: the Wis. Stat. § 704.44(10) question after Koble, 2026 WI 19, ¶ 25; the delayed effective dates of 2025 Wis. Act 105, 2025 Wis. Act 179 and 2025 Wis. Act 196; the eviction-record rules (SCR ch. 72, a court rule). Eviction rows that state small-claims amounts give the current figure and the one from January 1, 2027 (2025 Wis. Act 105).
- Item 2: `utility-transfer` (slice C question): kept as the education row `edu-utility-transfer-wi`, with no WI clause. The 2026-10-03 pass declined this option on drafting grounds, and item 2 turns a declined option into an education row. A WI copy of `utility-transfer-nj` would have to be limited to separately metered service, because a jointly metered gas, electric or water account must stay 'in the name of the owner or in the name of the agent responsible for the collection of rent and the management of the rental dwelling units' (Wis. Stat. § 196.643(2)). The education row describes that option and says the landlord may add their own clause. If Taylor wants it offered, the limited wording is in the slice C question.
- Item 13: `smart-access` (slice C question): keep the cautious course in `edu-smart-access-wi`. Wis. Stat. § 704.16(4)(a) says 'a landlord shall change the locks to the tenant’s premises' and does not address keypad codes or app credentials, so the landlord changes codes, credentials and any physical key within the 48-hour period. A pointer from `edu-security-devices-wi` would be an edit to an existing row, which this pass does not make.
- Item 5: `carpet-cleaning` (slice A question): kept declined, with the education row `edu-carpet-cleaning-wi`. DATCP's note to Wis. Admin. Code ATCP § 134.06 lets a lease require routine carpet cleaning, but the cost can't be collected in advance or withheld from the deposit, and a clause filled in to route it through the deposit would break the rule.
- Item 2: `eviction-service-party` / `dv-confidentiality` (slice B question): keep the cautious course and offer no clause; the rows tell the landlord to ask the clerk of court how to file the property description (Wis. Stat. § 799.41(1); Wis. Stat. § 165.68(5)(c); Wis. Stat. § 66.0504(2)(a)).
- Item 2: `furnishings-included` (slice D question): offered as the optional clause `furnishings-included-wi` (CONDITIONAL; used only when the unit is rented furnished). The 2026-10-03 pass had declined the shared Kansas clause only on drafting grounds (its builder note concerns the Kansas deposit limit). The Wisconsin clause charges only for damage 'due to the acts or inaction of the tenant' (Wis. Stat. § 704.07(3)(a)) or the tenant's guests or invitees (Wis. Stat. § 704.44(7)(b)), excludes normal wear and tear, and says repairs Tenant pays for belong to Landlord (class decision 13). `appliances-excluded` stays declined, with an education row: excluding an appliance actually furnished would waive Wis. Stat. § 704.07(2)(a)4.
- Item 9(c), slice B check: WI gaps item 9(c) (CARES): checked the bodies and WI notes of `edu-nonpayment-notice-wi`, `edu-cure-wi`, `edu-termination-notice-wi`, `edu-for-cause-wi`, `edu-criminal-eviction-wi`, `edu-eviction-process-wi`, `edu-eviction-stays-wi`, `default-by-tenant-wi`, `periodic-tenancy-notice-wi` and `criminal-activity-wi` against `edu-cares-act-notice` (tagged WI). None contradicts it: each states the Wisconsin notice periods (5, 14, 28 and 30 days under Wis. Stat. § 704.17 and Wis. Stat. § 704.19) without saying they are the only notice that can apply, and `default-by-tenant-wi` defers to the notice "Wisconsin law requires". On a property covered by the federal 30-day notice to vacate, the federal row adds to the Wisconsin notice; no WI row needs a change. The new slice-B eviction rows (`edu-redemption-wi`, `edu-landlord-remedies-termination-wi`, `edu-possession-bond-wi`, `edu-forfeiture-redemption-wi`, `edu-social-security-defense-wi`) are consistent with it; `edu-redemption-wi` points to it.
- Decided without asking (slice A): carpet-cleaning (WI): DATCP's Note to Wis. Admin. Code ATCP § 134.06 says a lease may require the tenant to pay for routine carpet cleaning but the cost may not be collected in advance or deducted from the deposit. I declined to offer a WI carpet-cleaning clause (education row `edu-carpet-cleaning-wi` explains), since it could be enforced only by a separate claim and a mis-filled version routing the cost through the deposit would be a DATCP violation. Recommendation: keep it declined. If Taylor wants an optional clause, it would say only that Tenant will have the carpets professionally cleaned at move-out and that Landlord will not deduct routine cleaning from the Security Deposit or collect it in advance.
- Decided without asking (slice B): WI eviction-service-party / dv-confidentiality: an eviction complaint must identify the real property (Wis. Stat. § 799.41(1)), but a person who received an address-confidentiality participant's notification form may not intentionally disclose the actual address (Wis. Stat. § 165.68(5)(c)). No statute reconciles them. Rows state the cautious course (ask the clerk of court how to file the description so the address is not public; a participant may ask the clerk under Wis. Stat. § 66.0504(2)(a)). Recommendation: keep the cautious course; no clause.
- Decided without asking (slice C): WI utility-transfer: `utility-transfer-nj` (no cutoff; reimbursement of the provider's actual charge, not rent, no late fee) would fit Wisconsin except that it requires every tenant-responsible utility to be moved into Tenant's name, while Wis. Stat. § 196.643(2) keeps jointly metered gas, electric or water accounts in the owner's or managing agent's name. Slice C declined the tag and wrote `edu-utility-transfer-wi` (option described, landlord may add own clause). Recommendation: either leave it as an education row, or add a WI clause copying `utility-transfer-nj` with its first sentence limited to 'each utility that is separately metered to the Premises and that this Lease makes Tenant's responsibility'; the main pass decides.
- Decided without asking (slice C): WI smart-access / dv-lockchange: Wis. Stat. § 704.16(4)(a) requires a landlord to 'change the locks to the tenant’s premises' within 48 hours of a qualifying request. No Wisconsin text says whether, for a keypad or app-based lock, reprogramming codes and revoking the other person's credentials counts as changing the lock. `edu-smart-access-wi` states the cautious course (change codes and credentials and any physical key within 48 hours). Recommendation: keep that course; consider a one-line pointer from `edu-security-devices-wi` in a later pass.
- Decided without asking (slice D): furnishings-included (WI): gaps item 2 lists this as a declined option that should get an education row "unless you can write a lawful optional clause". I wrote the optional clause `furnishings-included-wi` (CONDITIONAL, SERVES_LANDLORD) instead of an education row: it limits Tenant's cost to damage due to the acts or inaction of Tenant or Tenant's guests or invitees (Wis. Stat. § 704.07(3)(a); Wis. Stat. § 704.44(7)(b)), excludes normal wear and tear, and says paid-for repairs belong to Landlord (class decision 13). Recommendation: offer it. If the main pass prefers to keep the 2026-10-03 decline (list furniture under `appliances-included`), convert the row to an education row saying the clause exists and is not offered.

### §5 Independent check (rule 80, scaled)

Two rounds, one checker agent at a time, each working only from CHECK.md, the snapshot of the answers and the corpus (it had not seen the rows being written). The checker opened every cited section whole, re-tested each absence with its own searches, and checked clauses and tags both ways against Wis. Stat. § 704.44, Wis. Admin. Code ATCP § 134.08, Wis. Stat. § 704.28 and Wis. Stat. § 704.44(7)(b).

- **Round 1** (every new row and tag, 198 objects, in three parts of 65, 65 and 68): 130 OK, 55 FIX, 13 ERROR. ERRORs: `edu-exculpatory-clauses-wi` (missed the apartment-building carbon monoxide immunity in Wis. Stat. § 101.149(3)(c) and the personal Internet account rule in Wis. Stat. § 995.55); `edu-liquidated-damages-wi` (absence contradicted by the late-rent-fee rule, Wis. Admin. Code ATCP § 134.09(8)); `edu-law-enforcement-cooperation-wi` (Wis. Stat. § 968.37 court-ordered assistance; nuisance trigger too wide); `edu-service-animal-denial-penalty-wi` (penalty tiers for individuals); `edu-guarantor-renewal-wi` (a drafting choice stated as law); `edu-tenant-employee-housing-wi` (migrant work agreement, Wis. Stat. § 103.915); `edu-alt-housing-wi` (relocation payments by a displacing agency, Wis. Stat. § 32.185); `edu-sanitary-code-variance-wi` (drinking-water variance notices until January 1, 2027); `edu-utility-disclosure-attachment-wi` (Wis. Admin. Code ATCP § 134.04(2)(b) service conditions); `edu-sprinkler-disclosure-wi` (small buildings use NFPA 13D, not an exception); `edu-designated-repairer-wi` (managing-agent disclosure, Wis. Admin. Code ATCP § 134.04(1)); `edu-no-lease-type-parity-wi` (agreed termination methods and leases over one year); `edu-tenant-confidential-information-wi` (right of privacy, Wis. Stat. § 995.50). All 68 FIX/ERROR objects were corrected with the checker's replacement wording.
- **Round 2** (the 68 rows edited after round 1): 43 OK, 19 FIX, 6 ERROR. Four ERRORs were caused by the fix applier: in round 1 it carried the checker's instruction text ("Also add to notes: …") into the bodies of `edu-law-enforcement-cooperation-wi`, `edu-student-housing-wi`, `edu-designated-repairer-wi` and `edu-tenant-confidential-information-wi`; round 2 caught all four, the text was removed, the notes got the intended sentences, and a scan of every answer confirms no instruction text remains. The other two: `edu-rent-escalation-wi` (the round-1 sentence on Wis. Stat. § 823.23(4)(b) stated the tenant's defences too narrowly) and `edu-binding-arbitration-wi` (a foreclosure leaseback contract's arbitration term is voidable at the homeowner's option, Wis. Stat. § 846.40(7); the battery missed it because the corpus splits "arbitration" across a line). All were corrected with the checker's wording; the arbitration conclusion (clause not offered) is unchanged.
- Where a checker found a section that a cited battery had missed, the row now names the section, says the battery did not reach it, and narrows the absence claim ("found no other …"); the battery citation is kept, not rerun.

**Rows edited after the last round (25; not re-checked by an independent agent):** `edu-no-habitability-presumption-wi`, `edu-liquidated-damages-wi`, `rent-installments-or`, `edu-construction-liens-wi`, `edu-service-animal-denial-penalty-wi`, `edu-dv-lockchange-wi`, `edu-dv-qualifying-documents-wi`, `edu-environmental-event-termination-wi`, `edu-disaster-duties-wi`, `edu-steam-radiator-covers-wi`, `edu-alt-housing-wi`, `edu-sanitary-code-variance-wi`, `edu-association-obligations-disclosure-wi`, `edu-home-business-wi`, `edu-binding-arbitration-wi`, `edu-law-enforcement-cooperation-wi`, `edu-student-housing-wi`, `edu-designated-repairer-wi`, `edu-tenant-confidential-information-wi`, `edu-confession-of-judgment-wi`, `edu-rent-installments-wi`, `edu-rent-escalation-wi`, `edu-limitation-of-actions-wi`, `edu-ordnance-demolition-meter-disclosures-wi`, `edu-smart-access-wi`. Each edit is the round-2 checker's own replacement wording, applied after round 2, or (for `edu-student-housing-wi`, `edu-alt-housing-wi`, `edu-association-obligations-disclosure-wi`, `edu-binding-arbitration-wi`, `edu-law-enforcement-cooperation-wi`) a citation moved next to a quote or a search term changed from single to double quotes so the quote checker could verify it. All passed the validator and the quote checker; the full edit record is `check/edits.jsonl` in the workspace.


### §6 Findings on existing rows


#### 6.1 `early-termination-wi` (item 9(a))

Item 9(a). `early-termination-wi` should state one month's Rent instead of "[fixed dollar amount]": a blank lets a landlord fill an amount that works as the acceleration Wis. Stat. § 704.44(3m) voids ('Provides for an acceleration of rent payments in the event of tenant default ... or otherwise waives the landlord’s obligation to mitigate damages', Wis. Stat. § 704.44(3m)), and a void term voids the whole agreement (Wis. Stat. § 704.44). The row's words: "an early termination fee of [fixed dollar amount]". Proposed fix: "an early termination fee equal to one month's Rent ({{monthly_rent}})", plus a last sentence making explicit that no fee applies on a termination the law gives the tenant. Confirmed no fee on statutory terminations: the current row's reservation sentence ("Nothing in this Section limits any right ...") already keeps Wis. Stat. § 704.16, Wis. Stat. § 704.165 and the servicemember rights; the added sentence states it outright because 'The lessor may not impose an early termination charge' (FEDERAL: 50 U.S.C. § 3955(e)(1)) and Wis. Stat. § 704.165(2) and Wis. Stat. § 704.16(2) end rent liability on their own terms.

Proposed row:

- id: `early-termination-wi`
- group: `Default & Termination`
- title: `Early Termination`
- rule_type: `RECOMMENDED`
- content_type: `LEASE_CLAUSE`
- lease_clause_basis: `SERVES_LANDLORD`
- topic_key: `early-termination`
- supersedes: `early-termination-ks`
- bodyText: If this Lease has a fixed Term, Tenant may end this Lease before the end of the Term by giving Landlord at least [number] days' written notice and paying Landlord, on or before the termination date stated in the notice, an early termination fee equal to one month's Rent ({{monthly_rent}}). Tenant remains responsible for Rent and other obligations up to that termination date. If Tenant gives the notice and pays the fee as this Section requires, Landlord accepts Tenant's surrender of the property as of the termination date, and Tenant will owe no Rent for any later period. This option does not apply to a month-to-month or other periodic tenancy, which ends on the notice Wisconsin law and this Lease provide. Nothing in this Section limits any right either party has under applicable law, including Tenant's rights under Wis. Stat. § 704.16 (domestic abuse, sexual assault, stalking, and threats of serious physical harm), Wis. Stat. § 704.165 (death of a tenant), Wis. Stat. § 321.62 and the Servicemembers Civil Relief Act (military service), and Wis. Stat. § 704.07(4) (untenantable premises). The early termination fee does not apply when Tenant's tenancy or liability for Rent ends under any of those rights, and Tenant owes no fee under this Section in that case.
- notes: WI: Replaces `early-termination-ks` and the base (unchanged reasoning: a fee scaled to the remaining Rent works as the acceleration or mitigation waiver that voids a rental agreement under Wis. Stat. § 704.44(3m)). Fee now stated as one month's Rent, the flat sum the library uses in `early-termination-mo`, `early-termination-id`, `early-termination-in` and `early-termination-nm`: a hand-filled "[fixed dollar amount]" lets a landlord fill a figure near the remaining Rent, which is the acceleration Wis. Stat. § 704.44(3m) voids; one rental period does not scale with the remaining term. The fee buys the landlord's advance agreement to accept surrender, the route Wis. Stat. § 704.29(1) recognizes ('unless the landlord has expressly agreed to accept a surrender of the premises and end the tenant’s liability'). No Wisconsin statute caps or sets an early-termination fee; whether a court would treat a fixed fee as a penalty is case law, not read (WI log §1.4). No fee on statutory terminations (new last sentence): under Wis. Stat. § 704.16(2) and (2m) the tenant 'shall not be liable for any rent after the end of the month following the month in which he or she provides the notice or removes from the premises, whichever is later' (Wis. Stat. § 704.16(2)); a deceased tenant or the estate 'is not liable for any rent after the termination of his or her tenancy' (Wis. Stat. § 704.165(2)); for state active duty, Wis. Stat. § 704.29 'does not apply to the termination of a lease as provided in this subsection' (Wis. Stat. § 321.62(14)(f)); and under the federal servicemember right 'The lessor may not impose an early termination charge' (FEDERAL: 50 U.S.C. § 3955(e)(1)). The fee is not on the closed deposit list (Wis. Stat. § 704.28(1)); withholding it from the deposit needs a nonstandard rental provision (Wis. Stat. § 704.28(2); `nrp-deposit-withholding-wi`). rule_type stays RECOMMENDED (Taylor, 2026-11-12). Read section-open 2026-11-15 from corpus-WI-20261114; federal text saved from uscode.house.gov on 2026-11-15 (WI gaps log §1).


#### 6.2 `casualty-termination-wi` (item 9(b))

Item 9(b). `casualty-termination-wi` and `tenant-caused-damage-wi` do not fit together when Tenant caused the casualty. The casualty clause reaches any casualty "that is not the result of the negligence or intentional act of Landlord", which includes one caused by Tenant (mirroring Wis. Stat. § 704.07(2)(c)), and then says "Rent is apportioned to the date the property became untenantable or the date the Lease ends, whichever is earlier"; `tenant-caused-damage-wi` says that for damage caused by Tenant's negligence or improper use "Rent will not abate because of the damage". Both are lawful separately; together they give two answers on rent for a tenant-caused fire. Proposed fix (casualty clause only, `tenant-caused-damage-wi` unchanged): Rent does not abate before the Lease ends where Tenant's own negligence or improper use caused the damage (Wis. Stat. § 704.07(4), last sentence), and ending the Lease does not release the repair-cost reimbursement for damage caused by the acts or inaction of Tenant or the negligence or improper use of Tenant's guests or invitees (Wis. Stat. § 704.07(3)(a); Wis. Stat. § 704.44(7)(b)). The fault persons otherwise line up: Landlord fault is the Wis. Stat. § 704.07(2)(c) line; Tenant-only for the rent and move-out consequences (Wis. Stat. § 704.07(4)); Tenant, guests and invitees for repair cost.

Proposed row:

- id: `casualty-termination-wi`
- group: `Default & Termination`
- title: `Landlord Termination After Casualty`
- rule_type: `CONDITIONAL`
- content_type: `LEASE_CLAUSE`
- lease_clause_basis: `SERVES_LANDLORD`
- topic_key: `casualty-termination`
- supersedes: ``
- bodyText: If the property is damaged by fire, water, or other casualty that is not the result of the negligence or intentional act of Landlord, and the damage makes the property untenantable or Landlord reasonably determines that the repairs cannot be completed within [number] days, Landlord may end this Lease by written notice to Tenant, given by a method Wis. Stat. § 704.21 allows, within [number] days after the casualty. The Lease ends on the date stated in the notice, which will be at least [number] days after the notice is given, or on the date the notice is given if the property is untenantable. Rent is apportioned to the date the property became untenantable or the date the Lease ends, whichever is earlier, except that if the damage was caused by the negligence or improper use of the property by Tenant, Rent does not abate before the date the Lease ends. Landlord will return any Rent paid in advance for a period after the date to which Rent is apportioned, and the Security Deposit as this Lease provides. Ending the Lease under this Section does not release Tenant from reimbursing Landlord's reasonable cost of repairing damage caused by the acts or inaction of Tenant, or by the negligence or improper use of the property by Tenant's guests or invitees, as the Section of this Lease on tenant-caused damage provides. This Section does not limit Tenant's rights under Wis. Stat. § 704.07(4).
- notes: WI: As before (rule 54 option; Wis. Stat. § 704.07(2)(c) sends casualty not caused by the landlord to Wis. Stat. § 704.07(3) or (4); no statute gives or bars a landlord casualty termination). Changed third sentence and new fifth sentence so the clause fits `tenant-caused-damage-wi`: a casualty 'not the result of the negligence or intentional act of the landlord' (Wis. Stat. § 704.07(2)(c)) includes one the tenant caused, and the current clause then apportions Rent to the untenantable date while `tenant-caused-damage-wi` says Rent will not abate; two conflicting rent sentences would likely be read against the landlord (rule 46). The no-abatement exception is limited to Tenant's own negligence or improper use because the untenantability remedies are 'inapplicable if the damage or condition is caused by negligence or improper use by the tenant' (Wis. Stat. § 704.07(4)) and extending it to guests would waive a Wis. Stat. § 704.07 right, which is void (Wis. Stat. § 704.07(1)). Repair cost follows 'due to the acts or inaction of the tenant' (Wis. Stat. § 704.07(3)(a)) and liability for damage by 'the tenant or the tenant’s guests or invitees' (Wis. Stat. § 704.44(7)(b)). Read section-open 2026-11-15 from corpus-WI-20261114 (WI gaps log §1).


#### 6.3 `(existing WI rows, citation format)`

Existing WI rows from the 2026-10-03 pass write continuation citations without the code name (for example `tenant-caused-damage-wi`: "(§ 704.07(1))"; `early-termination-wi`: "(§ 704.17(5)(a))"). The gaps prompt's citation format asks for "Wis. Stat." before every section because the legal watch reads only parts that start with it. Not changed here (scope fence: existing rows are not edited). Proposed fix: a format-only sweep of active WI rows at sync, prefixing each bare continuation section with "Wis. Stat." and leaving the words unchanged; the rows in this delta already use the full form.


#### 6.4 `edu-tenant-remedies-wi`

The row's notes say "No repair-and-deduct or rent-escrow statute". Wis. Stat. § 254.30(1)(b) lets a circuit court that finds an owner of a rented dwelling has not complied with a lead hazard order 'order the occupants of the affected dwelling or premises to withhold rent in escrow until the owner of the dwelling or premises complies with the order' (Wis. Stat. § 254.30). The body ("Wisconsin has no repair-and-deduct statute") is accurate. Proposed fix (notes only): replace "No repair-and-deduct or rent-escrow statute" with "No repair-and-deduct or general rent-escrow statute; a court may order rent paid into escrow when an owner fails to comply with a state lead hazard order (Wis. Stat. § 254.30(1)(b); `edu-landlord-breach-remedy-wi`)".


#### 6.5 `edu-required-disclosures-wi`

The checklist omits five conditional notices found in this slice. (1) 'For cases where occupants are responsible for maintenance of a continuing obligation under either s. NR 708.17 or 722.15 or ch. NR 726, the property owner shall include the continuing obligation in the lease agreement' (Wis. Admin. Code NR § 727.05(3)); new rows `continuing-obligation-wi`, `edu-hazardous-contamination-disclosure-wi`. (2) For registered lead-safe property, 'For tenancy of a dwelling unit under a rental agreement, the property owner shall ensure that a lead-safe information pamphlet under subd. 3. and a form under subd. 4. is delivered by personal, postal or delivery service to an adult occupant or other responsible occupant entering into a tenancy under a rental agreement' (Wis. Admin. Code DHS § 163.42(3)(b)2.a.), before the tenancy, lease or deposit (Wis. Admin. Code DHS § 163.42(3)(b)6.a.); new row `edu-lead-state-notices-wi`. (3) For an electric cooperative account carrying a project electric account charge, 'the property owner shall provide notice of the written agreement and a copy of the notice of electric account charge to the purchaser or each subsequent lessee of the property responsible for paying the electric bills' (Wis. Stat. § 185.995(6)), with a right to void the lease if not given before it is entered into; new rows `electric-account-charge-notice-wi`, `edu-meter-conservation-charge-wi`. (4) For buildings of 5 or more units, the required local recycling ordinance makes owners 'Notify tenants in writing at the time of renting or leasing the dwelling and at least semi-annually thereafter of how to appropriately recycle' (Wis. Admin. Code NR § 544.06(2)(b)2.); new row `edu-recycling-notice-wi`. (5) At the time of any pesticide application by the landlord or its contractor, written notice to residents (Wis. Admin. Code ATCP § 29.55(3)); new row `edu-pest-control-notice-wi`. The row's words are "Before signing and before taking any deposit: give the lease and written rules to review; ..." and "Federal lead disclosure for pre-1978 housing." with none of the five. Proposed fix (republish `edu-required-disclosures-wi` with one added sentence before its last sentence): "Where they apply: an environmental continuing obligation that tenants must maintain goes in the lease (`continuing-obligation-wi`); for registered lead-safe property, the lead-safe pamphlet and hazard-reporting form before the tenancy starts (`edu-lead-state-notices-wi`); for an electric cooperative account with a project charge, the agreement notice and recorded notice before signing (`electric-account-charge-notice-wi`); in buildings of 5 or more units, the local recycling notice at signing and every six months (`edu-recycling-notice-wi`); and notice to residents whenever pesticide is applied (`edu-pest-control-notice-wi`)." Notes addition: cite the five sections as above. Also note for the main pass: WI log §18.2 entries for `hazardous-contamination-disclosure` (confirmed absent) and `meter-conservation-charge` (not applicable) are superseded by these sections.


#### 6.6 `edu-unauthorized-occupants-wi`

The row says a non-tenant "can be removed through police if the circumstances meet the criminal-trespass standard" but does not cite the police-removal statute. 'By July 1, 2018, each law enforcement agency shall have a written policy regarding the investigation of complaints alleging a violation of s. 943.14. The policy shall require a law enforcement officer who has probable cause to arrest a person for a violation of s. 943.14 to remove the person from a dwelling' (Wis. Stat. § 175.403(2)). Proposed fix (notes only): add "Wis. Stat. § 175.403(2) (each law enforcement agency's written policy must require an officer with probable cause to arrest for criminal trespass to a dwelling to remove the person from the dwelling; history ends 2017 a. 317)".


### §7 Findings for other states

- `ev-charging-end-of-tenancy-co` (shared: CO, IL, KS, MN, NE, NC) carries rule_type REQUIRED although its own Colorado notes call it "GENERIC. Generic mechanics, not asserted as statute-derived", and it only makes sense where a tenant has installed a charger. As REQUIRED it would print in every lease of those states, including leases where no charger is allowed. Proposed fix for the main pass to check state by state: rule_type CONDITIONAL with a bracketed use-condition ("[Use only if Tenant has installed, or is allowed to install, a charging system at Tenant's expense.]"), keeping REQUIRED only where a state's statute requires the term in the lease.


### Proposed SOP changes

- Rule 19 (batteries): add a required term that searches the subject words alone, without a tenant/landlord limb, and read its hits when there are 150 or fewer. Seven of the 13 round-1 ERRORs in this pass were absences contradicted by a held section the battery had not surfaced; in several the battery's terms all required a tenancy word the answering section doesn't use (Wis. Stat. § 968.37, which names landlords only in a list of persons who must assist; Wis. Admin. Code ATCP § 134.09(8), which says "late rent fee" rather than "liquidated damages").
- Rule 19 (corpus text): search a copy of each unit with every end-of-line hyphen joined, not only dictionary-confirmed joins. Battery WIG-M-002 missed Wis. Stat. § 846.40(7) because the corpus prints "arbitra- tion" across a line break; the WI corpus README says joins are dictionary-based, so rare words can stay split.
- Rule 80 (applying checker fixes): checkers give each fix as structured old/new pairs with the target field, never as prose containing pairs. In this pass a regex applier took instruction text ("Also add to notes: …") into four bodies in round 1; round 2 caught and removed all four, and the applier now refuses any replacement containing instruction words or unbalanced quotes.


### Proposed topic questions

None.

## Sync record (Claude Code, 2026-11-16)

- **Merge:** `merge-delta.py --base e64bd46`: 184 new rows and 14 shared rows tagged or updated (198, matching the delta and the log's status line). Wisconsin has 401 active rows, all VERIFIED, and answers all 364 topic keys.
- **§6 applied (8 edits on 5 rows; last_checked 2026-11-16):** `early-termination-wi` (§6.1: fee of one month's Rent, `{{monthly_rent}}`, and no fee where Tenant ends the tenancy under a statute); `casualty-termination-wi` (§6.2: no abatement where the Tenant's own negligence caused the damage; the repair-cost sentence points to the Section on tenant-caused damage); `edu-tenant-remedies-wi` ("general" rent-escrow, with the Wis. Stat. § 254.30(1)(b) escrow quoted); `edu-required-disclosures-wi` (the five where-they-apply notices: NR § 727.05(3), DHS § 163.42(3)(b), Wis. Stat. § 185.995(6), NR § 544.06(2)(b)2., ATCP § 29.55(3)); `edu-unauthorized-occupants-wi` (Wis. Stat. § 175.403(2)). **Declined:** §6.3, adding 'Wis. Stat.' to bare continuation citations in October rows; the legal watch reads the citations file, which already writes the full form.
- **§4 questions for Taylor:** none. **§7:** `ev-charging-end-of-tenancy-co` REQUIRED-to-CONDITIONAL, a shared edit; in the backlog for Taylor's approval after a check of every tagged state (rule 62). **NEEDS_REVIEW:** none delivered.
- **Rows edited after the last check round (25, §5):** all read against the corpus; the clauses they point to (`rent-escalation-la`, `rent-increase-midterm-ky`, `rent-installments-or`, `residential-use-only`, `condo-documents-wi`, `hoa-compliance`) are tagged WI. No errors.
- **Rule 80 re-check:** all 713 single-quoted passages in the delivered rows and all 27 in §4-§7 matched the corpus (statutes, Administrative Code, Constitution, Acts, SCR ch. 72) or the federal text fetched at sync, after normalizing the Administrative Code PDF's artifacts (possessives printed as `[s`, curly quotes as `X...Y`, page-header lines).
- **Statute spot-check (corpus, official text):** 21 days to return the deposit (Wis. Stat. § 704.28(4); `security-deposit-return-wi`); 12 hours' advance notice of entry (ATCP § 134.09(2); `edu-landlord-entry-wi`); the 5-day nonpayment notice (Wis. Stat. § 704.17(2)(a); `edu-nonpayment-notice-wi`); 5 and 14 days for a month-to-month tenant (Wis. Stat. § 704.17(1p)); 28 days to end a periodic tenancy (Wis. Stat. § 704.19(3); `periodic-tenancy-notice-wi`). No errors.
- **Citations:** 198 new lines (80 cited, 118 confirmed absent) and 5 updated. The legal watch now monitors 240 Wisconsin Statutes sections (107 before); new manual item `wi-admin-code-gaps-rows` (Administrative Code chapters first relied on here, and the unread DFI collection-agency rules: the corpus held no DFI chapters).
- **SOP 2.15:** all three proposals adopted as [Fwd] text (rule 19 twice, rule 80). **Topic questions:** none proposed. **New `{{variables}}`:** none.
- **Checks:** guards (`check-gap-discovery.py --all`, checklist reconciliation, clause basis, section pointers, `checkConfigIds.js`) pass; backend tests 446 of 446.

## Federal row: disposing of screening reports (Claude Code, 2026-11-20)

Taylor's decision 2026-11-20 (Washington gaps log §7, backlog item 9): one federal education row, `edu-fcra-disposal-rule`, is tagged here and in every jurisdiction, read from the official text (16 C.F.R. part 682 on eCFR; 15 U.S.C. § 1681w on govinfo.gov). It says that anyone who keeps a screening, credit or background report, or a record taken from one, for a business purpose must dispose of it with reasonable measures against unauthorized access (16 C.F.R. § 682.3), with the rule's examples, and that the rule sets no retention period (§ 682.4). This state's existing rows stay; no clause text changed.

## Shared edit: lead-based paint agent's statement (Claude Code, 2026-11-20)

From the West Virginia gaps sync (WV gaps log §6 item 21 and §7; backlog items from the Nevada and Puerto Rico syncs): the shared `lead-based-paint` clause gained a bracketed agent's statement and a sentence requiring each person who makes a statement to sign and date it, the two elements the federal rule requires in every lease of pre-1978 housing (40 C.F.R. § 745.113(b)(5)-(6); HUD's twin rule, 24 C.F.R. § 35.92(b)(5)-(6); both read on eCFR 2026-11-20). Uniform federal edit under rule 62: the same in every jurisdiction, no state term changed; it applies only where an agent acts for the landlord.

## Federal rows: the federal pass (Claude Code, 2026-11-20)

Taylor's decision 2026-11-20 (backlog item 13; scope: private rentals and voucher tenancies, not federally assisted or tax-credit properties): nine federal education rows are tagged here and in every jurisdiction, each read from the official text (eCFR, govinfo.gov, the Federal Register; 109 quotations matched): `edu-scra-eviction-protections` (50 U.S.C. §§ 3951, 3931, 3958; the 2026 rent limit of $10,542.60), `edu-bankruptcy-eviction-federal` (11 U.S.C. § 362(a), (b)(22)-(23), (k), (l), (m)), `edu-fair-housing-coverage-federal` (42 U.S.C. §§ 3602(k), 3603(b), 3604(c), 3607(b)(1), 1982), `edu-fair-housing-harassment-federal` (24 C.F.R. §§ 100.600, 100.7; 42 U.S.C. § 3617), `edu-accessible-design-federal` (42 U.S.C. § 3604(f)(3)(C), (f)(4), (f)(7)), `edu-debt-collectors-federal` (15 U.S.C. § 1692a(5)-(6)), `edu-asbestos-demolition-renovation-federal` (40 C.F.R. §§ 61.141, 61.145), `edu-antenna-rights-federal` (47 C.F.R. § 1.4000) and `edu-voucher-repairs-and-rent` (24 C.F.R. §§ 982.404, 982.451, 982.453, 982.507, 982.510). A tenth, `edu-credit-reporting-furnisher-duties` (15 U.S.C. §§ 1681s-2, 1681i(a)(1); 12 C.F.R. §§ 1022.40-1022.43), was added the same day at Taylor's request. This state's existing rows on the same subjects stay, since they carry state detail; no clause changed.

## Model-law comparison: two new topics (Claude Code, 2026-11-21)

Taylor's decision 2026-11-20: compare the library's topic list with the uniform model laws (the 1972 Uniform Residential Landlord and Tenant Act, the Revised URLTA of 2015, and UCC § 3-311) and answer any topic they raise that the library lacked. Two did: checks marked 'paid in full' (`paid-in-full-payments`) and a general duty of good faith (`good-faith-obligation`). This jurisdiction's rows are `edu-paid-in-full-checks-wi` (VERIFIED; Wis. Stat. § 403.311; Wis. Stat. § 401.308(2)) and `edu-no-good-faith-obligation-wi` (VERIFIED; Absence: Wis. Stat. ch. 704). Each was researched from official text by an independent agent; every quotation was machine-checked against the saved page and the quotes are in each row's notes. 

### Declined option, 2026-11-21 (Taylor's decision)

- `edu-no-subordination-clause` tagged here and in every jurisdiction: the library offers no clause subordinating the lease to a mortgage (rule 54 row); the tenant's foreclosure protection is the federal PTFA (`edu-ptfa-foreclosure-tenants`).
