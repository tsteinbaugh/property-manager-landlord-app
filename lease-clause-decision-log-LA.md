# Lease clause decision log — Louisiana (LA, state #48)
- **Pass:** staged 2026-10-19 09:21 (kickoff); run 2026-10-19 in one chat, Louisiana's only Desktop chat (rule 8). No earlier output files existed in this chat, so none were deleted. SOP v1.75. Files Taylor uploaded: `KICKOFF-PROMPT.md`, `lease-clause-sop.md`, `lease-clause-topics.md`, `log-format-example.md`, `lease-clauses.csv`, `corpus-LA-20261019.tar.xz` and its `.sha256`. They are the only source of truth for this pass.
- **Settings:** Opus, high effort. Research mode was not turned on: it can't be toggled from this session, and none of the three rule 9 triggers needed it. The proof of absence and the cross-title gap search were done instead by logged batteries over the full hash-verified corpus (§1.5). Ambiguous or conflicting statute language was settled by reading the sections whole; where a point needs case law, the row says so and gives the cautious course.
- **Output:** `lease-clauses-LA-delta.csv` (new and changed rows, all 17 columns) and this log.
- **Citation forms (kickoff):**
  - In rows: "La. Civ. Code art. 2699", "La. R.S. 9:3251(A)", "La. Code Civ. Proc. art. 4701", "La. Const. art. I, § 4", "La. C.Cr.P. art.", "La. Ch.C. art.", "La. C.E. art.".
  - Site labels in working files: CC 2699, RS 9:3251, CCP 4701.
  - An uncompiled 2026 act is cited "2026 La. Acts No. N, § 1 (enacting R.S. ...; compiled number pending)" where its number is not final (rule 16).

## §0 Completion table
| Step | Status | Where |
|---|---|---|
| Step A: file and counts (rule 23) | Done | §1.1 |
| Source registry, corpus, live match (rule 24) | Done | §1.1 |
| Currency (rule 16) | Done | §1.2 |
| Dormant and existing LA rows (rule 25) | Done (none) | §5 |
| Tag-first screen (rules 26-28) | Done | §2 |
| Topic canvass (rule 27) | Done | §18 |
| Gap-discovery source 1 — statute walk | Done | §14 |
| Gap-discovery source 2 — real-lease comparison | Done | §15 |
| Gap-discovery source 3 — landlord-scenario screen | Done | §16 |
| Gap-discovery source 4 — outside-title search | Done | §17 |
| Formatting and placement (rule 40) | Done | §4 |
| Step D screens (rules 41-53) | Done | §11 |
| Other Step C screens (rules 30-39) | Done | §12 |
| Optional clauses (rule 54) | Done | §6.1 |
| Classification and drafting (rules 55-64) | Done | §3, §8 |
| Independent check (rule 80) | Done | §13 |
| Delta CSV and log delivered and checked (rules 70-75) | Done | §8 |

## §1 Sources, currency and corpus (rules 16, 19, 24)
### §1.1 Channel
- **Step A (rule 23):** the attached `lease-clauses.csv` (SHA-256 3ce5f532ef788901a843a6c628b2e1853051ed78d1a36ba085b3a2583e007eca, 18,817,581 bytes, CRLF row ends, no BOM, 17 columns) has 7,288 rows, 7,179 active (1,182 lease clauses, 5,997 education rows); all 47 per-state active counts match the kickoff (script comparison, 0 mismatches); no row is tagged LA and no id carries an `-la` suffix, matching the kickoff's "Rows already in the library for Louisiana: None" (rule 25). One active row has blank `states` (`security-deposit-return`, the blank-states parent).
- **Own-tools request first (kickoff):** WebFetch reached legis.la.gov (CC 2699 page) but returns only a model summary, which can't be saved or quoted (rule 12); the shell's network is blocked by the egress proxy (CONNECT 403). So the research used Claude Code's corpus, with Taylor's built-in browser for the checks below (Taylor approved browser use in the chat, §6.2).
- **Corpus:** `corpus-LA-20261019.tar.xz` (SHA-256 911cd8f6c7b43468145b09e3dc215ce232e383c499323a3468115a7f9f6204bb, matching its `.sha256`; 55,188,216 bytes), opened with Python's tarfile (data filter) into its own folder. `manifest.jsonl`: 52,800 lines, all HTTP 200; 52,800 files, 0 missing, 0 hash or size mismatches, 0 files outside the manifest (script `verify_manifest.py`).
- **Completeness (rule 19):** the tables of contents in the corpus (LawsContents, eight body pages, 54 Revised Statutes title pages, 14 Constitution article pages) list 52,723 unique section pages (`Law.aspx?d=`); all 52,723 are saved, each page's LabelName matches `doc-list.json` (0 mismatches); the RS index lists 54 titles and 54 title pages are saved. Body counts: RS 46,442; CC 2,517; CCP 1,260; CHC 1,212; CCRP 795; CONST 337; CA 54; CE 106. Ten pages are empty on the site itself (CCP 1067, CCRP 1021, R.S. 13:2589.1, 40:1042-1049 (five), 46:2598, 46:2599: the LabelDocument element is empty), contrary to the README's "each with text"; none is a lease section.
- **Index:** `build_index.py` extracts each page's section text from the LabelDocument element to the end of `<main>` (so nested markup can't truncate it), one paragraph per line; the constitution is in the same index from the start (rule 35).
- **Live match (rule 24, AK 1):** in Taylor's built-in browser, ten whole section pages were fetched in-page from legis.la.gov and their byte SHA-256 compared with the manifest: CC 2699, CC 2713, R.S. 9:3251, 9:3252, CCP 4701, CCP 4731, R.S. 9:3261.1, Const. art. I, § 4, R.S. 51:2606, CC 2004: 10 of 10 identical (bytes and SHA-256), which proves every section on those pages.
- **Fetched outside the zip (README's missing list and others, for the next staging):** 2026 Regular Session acts Nos. 63, 64, 187, 240, 440, 751, 830 (enrolled PDFs via ViewDocument.aspx, text by pdf.js 3.11.174, hashes in `src/acts/SHA256SUMS`, strike-through checked on rendered page images for Acts 63, 64 and 240); the legislature's Citator Index to Acts (2026 RS, 2025 RS, 2025 1st ES; every RS title page plus CC, CCP, CONST, CHC, CE, CCRP, CA, ACT), Effective Dates of Acts and Bill Information pages; the Louisiana State Police sex-offender registry page (lsp.org); the NOMAR Residential Lease (8/08) hosted by eForms (§15). the Attorney General's landlord-tenant guide "Moving In, Moving Out" (aglizmurrill.com, §15); the 2026 acts Nos. 26, 451, 575, 684, 708, 724, 752 and 891 (read in the enrolled acts for the currency checks below). Not fetched: the Louisiana Administrative Code, the District Court Rules and local court rules and forms (§7).


### §1.2 Currency and dated versions (rule 16)
- **Currency statement:** legis.la.gov prints none, so currency comes from each section's history line and the 2026 acts' effective-date clauses (rule 16). Regular-session acts take effect August 1 unless the act says otherwise (La. Const. art. III, § 19). Each effective date was read from the legislature's "Effective Dates of Acts" page and the act's own text.
- **Which titles are compiled:** I compared the 2026 Regular Session Citator Index (5,026 entries, crawled in Taylor's browser, §1.1) with the corpus's history lines, book by book.
  - **Compiled for 2026:** the Civil Code, the Code of Civil Procedure, the Constitution, and R.S. Titles 1-4, 9, 10, 12-16, 19, 24, 25, 27-29, 41 and 45. Their history lines cite 2026 acts.
  - **Not compiled for 2026:** R.S. Titles 17, 18, 22, 23, 26, 30, 32-34, 36-40, 42-44, 46-49, 51 and 56. The citator lists 2026 changes there that the corpus does not show.
  - Titles 20 and 21 have no 2026 citator entries.
  - The 2025 Regular Session and the 2025 First Extraordinary Session citators were crawled too; their relevant changes are compiled (e.g. 2025 Act 488, La. Civ. Code art. 2701; 2025 Act 100, La. R.S. 51:2602-2608).
  - No 2026 extraordinary session exists on the site: the citator answers "invalid Session ID" for 261ES-263ES, while 251ES works.
- **Future-dated text printed now:** the corpus prints some sections as amended by acts effective January 1, 2027. These are 2026 Act 891 (La. R.S. 9:153, 9:154, 9:159: unclaimed property) and Act 708 (La. R.S. 9:3196-3199, 9:3198.1: sale disclosures).
  - Rows relying on them state the rule in force now: the catch-all dormancy period is (A)(19) until December 31, 2026 and (A)(20) after; the notice conditions are (E)(1)-(3), becoming (E)(1)(a)-(c).
  - The definitions in R.S. 9:153 are cited by name, because Act 891 re-sorts them.
  - Act 708 only adds "vacant residential property" (its résumé digest, read), so the relied-on wording is in force now.
- **2026 acts read in the enrolled text** (pdf.js extraction in Taylor's browser; strike-through and underlining read from the rendered page images where a row turns on them, rule 16 [MD 4]):

  | Act | What it does | Effective | Strike-through read? |
  |---|---|---|---|
  | 63 | R.S. 9:3251(A): adds the 15-day itemized-statement limb | Aug. 1, 2026 | Yes |
  | 64 | R.S. 9:3261.1: adds stalking and cyberstalking | Aug. 1, 2026 | Yes |
  | 240 | La. Civ. Code arts. 2674, 2681, 2681.1, 2681.2, 2711-2713.1 | Aug. 1, 2026 | Yes |
  | 187 | R.S. 40:1581(F): appraisers only | Aug. 1, 2026 | No |
  | 440 | R.S. 32:1736: towing signage; subsections redesignated | Aug. 1, 2026 | No |
  | 751 | Debit-card surcharge ban, R.S. 51:3081-3082 (numbers pending) | Aug. 1, 2026 | No |
  | 830 | Click-to-Cancel Act, R.S. 51:3301-3305 (numbers pending) | Jan. 1, 2027 | No |
  | 891 | Unclaimed property; renumbering only | Jan. 1, 2027 | Yes |
  | 708 | R.S. 9:3196-3199; 37:1432, 1455 | Jan. 1, 2027 | No |
  | 575 | R.S. 33:4887: privilege extended to parishes and districts | Aug. 1, 2026 | No |
  | 451 | R.S. 33:4169.1(A)(1) only | Aug. 1, 2026 | No |
  | 26 | R.S. 46:2135: TRO evidence | Aug. 1, 2026 | No |
  | 684 and 724 | R.S. 46:1842 definitions | Aug. 1 and June 3, 2026 | No |
  | 752 | R.S. 46:2136.2(H): online portal | Aug. 1, 2026 | No |
  | 881 | Uniform Construction Code moved to R.S. 37:3727-3750 | Aug. 1, 2026; one paragraph Jan. 1, 2027 | No |

  The enrolled texts are saved with hashes in the working sources folder; Acts 708, 830, 881 and 891 are saved as extracts of the relied-on sections.
- **Number collisions:** two other 2026 acts enact sections numbered like the new statutes, so those compiled numbers are pending, and the rows say so.
  - Act 750 also enacts R.S. 51:3081-3082 (the debit-card surcharge ban).
  - Acts 553, 841 and 886 also use R.S. 51:3301 et seq. (the Click-to-Cancel Act).
- **Pending constitutional amendment:** 2026 Act 277 proposes amending La. Const. art. I, § 4(B)(4) (foreign-adversary expropriation). It is pending election and not relied on.

#### Currency check of every uncompiled section relied on (rule 16)
Every Revised Statutes section cited in an LA row (new rows and LA note segments) from a title the corpus has not compiled for 2026 (166 sections) was checked against the 2026 Regular Session Citator Index in Taylor's browser (`citq`). 27 sections show a 2026 entry. Substantive reliance and the result:
- R.S. 33:4887 (Act 575, eff. 8/1/26): privilege extended to parishes, sewerage and waterworks districts; `edu-municipal-utility-lien-la` corrected (errata).
- R.S. 33:4169.1 (Act 451): only (A)(1) amended; the relied-on (B) and (C) unchanged.
- R.S. 37:1455 (Act 708, eff. 1/1/27): only (A) intro and (A)(33); relied-on (A)(4), (A)(6) unchanged; `edu-no-deposit-holding-rule-la` VERIFIED.
- R.S. 9:153, 9:154, 9:159 (compiled title; corpus already prints Act 891, eff. 1/1/27): renumbering only; `edu-unclaimed-deposit-la` cites both numberings and is VERIFIED with the cautious three-year course.
- R.S. 51:3081-3082 (Acts 750 and 751 both enact these numbers): rows say the compiled number may change.
- R.S. 40:1581 (Act 187), R.S. 32:1736 (Act 440): read in the enrolled acts (§1.1), reflected in the rows.
- The other 20 (R.S. 17:81, 22:1213 (repealed), 22:1311, 22:1828, 23:1017.1, 23:1201, 23:543 (repealed), 32:1252, 32:1420, 32:863.2, 36:104, 36:254, 37:1431, 38:2212, 38:2212.1, 39:198, 40:1563, 40:4.9, 42:1123, 46:51, 46:56, 47:1508, 48:197) are cited only as non-lease battery hits; the change does not touch any row's statement.
- Second run (after slice C3 and part of C4; 81 more sections): 2026 entries for R.S. 17:407.101, 17:416, 17:416.16, 17:416.16.1, 18:1303, 18:1505.2, 23:1601, 26:90, 30:4, 32:410, 37:1432, 40:1664.3, 40:1730.22 (repealed by Act 881), 46:1842, 46:2135, 46:2136.2, 51:3301-3305. Substantive reliance: R.S. 46:2135 (Act 26, eff. 8/1/26, read in the enrolled act) changes only the TRO intro paragraph's evidence rules and (B), (D); the relied-on (A)(3) and (A)(6) are unchanged. R.S. 46:2136.2 (Act 752) adds only (H), an online application portal. R.S. 46:1842 (Acts 684, 724) is cited only for the victim definition, which the row reports as amended. R.S. 51:3301-3305: Acts 553, 830, 841 and 886 all use these numbers, so the Click-to-Cancel rows' "compiled numbers pending" is right. The rest are cited only as non-lease battery hits.
- Code of Civil Procedure: the 2026 citator lists 48 CCP entries; of the articles outside arts. 4701-4736 that rows rely on (327, 328, 683, 732, 1061, 1920, 2293, 2372, 2376, 2592-2594, 2631-2632, 2724, 3421, 3431-3434, 3571-3576, 3651), only art. 3421(1) (Act 293) is amended, and the corpus prints it with Act 293 in its history line (compiled). No entry touches arts. 4701-4736.
- R.S. 46:1842 (Acts 684, 724, read in the enrolled acts): only the intro paragraph and Paragraphs (9) and (14) are amended and (20)-(21) enacted with an alphabetical renumbering; the victim definition relied on in `edu-dv-law-citations-la` is unchanged, so the row is VERIFIED.
- Third run (slice C5; 96 sections): 2026 entries for R.S. 17:3351, 30:21.1, 32:1736 (Act 440: (A), (C)-(E) amended, (F)-(G) enacted; (B) unchanged), 32:1741 (Act 808, (K) only), 37:1377, 37:2150.1, 37:2156.1, 37:2157, 38:90.2 (repealed), 40:964, 40:2009.24. None changes a statement a row relies on; `edu-towing-la` and `edu-tenant-data-security-la` (no 2026 change to R.S. 51:3071-3077) are VERIFIED.
- Fourth run (slice C6 and part of C7; 80 sections, plus Titles 20 and 21, which have no 2026 citator entries at all, so R.S. 20:1 and 21:61 are unchanged). 2026 entries for R.S. 17:3092, 30:29, 32:408, 33:4720.151, 34:851.20, 40:1203.1, 40:1574.1, 40:1730.23 and 40:1730.28. Substantive: 2026 La. Acts No. 881 (eff. Aug. 1, 2026, read in the enrolled act, extract saved) repeals the whole Uniform Construction Code Part, R.S. 40:1730.21-1730.40.2, and re-enacts it as R.S. 37:3727-3750. The one- and two-family sprinkler ban becomes R.S. 37:3733(A)(3), and fire-marshal enforcement becomes R.S. 37:3735(C). The C7 helper was told to cite the new numbers in the fire-code and sprinkler rows. Rows that cite R.S. 40:1730.2x only as non-lease battery hits are left as recorded. The rest are battery hits only.
- R.S. 9:3196-3199 and 9:3198.1 (compiled title; the corpus prints the Act 708 text, eff. Jan. 1, 2027): Act 708's résumé digest (legis.la.gov ViewDocument d=1486824, read) says the Act only adds "vacant residential property" to the definitions, applicability, seller duties and meth-lab listing, so the relied-on wording (lease with option to purchase, the methamphetamine statement, delivery timing) is in force now. `edu-no-meth-disclosure-la` and `edu-required-disclosures-la` are VERIFIED. The same digest shows Act 708 rewords only R.S. 37:1455(A)'s intro and (A)(33), so the erratum on `edu-no-deposit-holding-rule-la` was corrected.
- Fifth run (slice C7; 55 sections plus the fire-code sections): 2026 entries for R.S. 17:3399.12, 17:3996, 23:42 (repealed), 30:2011, 40:1563 ((C)(1), (C)(4), Act 166), 40:1581 ((F), Act 187, read), 40:981.3, 44:4, 46:233.4. All are cited only as battery hits or, for 40:1563, inside a quoted cross-reference, so no row's statement changes. R.S. 40:1578.6, 1578.7, 1643, 1646 and 1722 have no 2026 entry. `edu-code-editions-la` is VERIFIED: the re-enacted R.S. 37:3733(A)(3), read in the full enrolled Act 881, no longer states the former new-construction limit, and the row now says so.
- After check round 1: 2026 Act 166 (R.S. 40:1563(C)(1), (4); day-care fire inspections) and Act 553 (new R.S. 51:3301, utility-overcharge refunds by regulated utilities; no landlord or tenant term) were read in the enrolled acts. Neither changes a row's statement. The Title 9 part of Act 708 and its résumé digest were added to the saved Act 708 file. The citator-pending phrases left in 42 rows by slices C6-C7 were resolved against the five citator runs above.


### §1.3 Constitution, court rules and administrative rules (rules 21, 35, 39)
- **Constitution:** the corpus carries all 337 constitution pages. They were loaded into the same index before the first battery, as label CONST (rule 35), and proved by their own control: LA-K-CONSTCTRL-01, "legislature", 142 constitutional hits out of 143 pages carrying the word. The screen is in §17.
- **Court rules:**
  - The Rules for Louisiana District Courts and the city-court and justice-of-the-peace practices are not in the corpus and were not read (§7).
  - Orleans Parish First City Court's "Eviction Procedure Guidelines" (2022) were read only through WebFetch's summary, as a lead; no row relies on it.
  - `edu-notice-to-vacate-la` tells landlords to check local filing practice (rule 39 boundary, §7).
- **Counting short periods:** La. Code Civ. Proc. art. 5059(C)(3) leaves legal holidays out of any period under seven days, and La. R.S. 1:55(E)(3) makes every Saturday and Sunday a legal holiday for that article. The five-day notice to vacate therefore runs five business days, and the rows say so. The Attorney General's guide and the Orleans guidelines agree.
- **Administrative rules:** the Louisiana Administrative Code was not read: Real Estate Commission escrow rules, the fire marshal and Uniform Construction Code rules, the State Police towing unit's signage rules, and the Attorney General's data-breach rules. Every row that touches them names the gap.

### §1.4 Agents and usage
- **Triage of single-state clauses (rule 26):** two helpers, TA (270 clauses) and TB (271), ran together. They were briefed with `LA-BRIEF` (the Louisiana law map, checked against the sections before sending) and `TRIAGE-BRIEF`, and each saved one verdict line per clause.
- **Topic canvass (rule 27):** seven slices of 48 topics each (C1-C7). Never more than two agents ran at once: C1 with C2; C3 with C4; C5 started when C3 finished, C6 when C4 finished, and C7 when C5 finished. Each saved one JSON line per topic, and none was stopped by a usage limit. The main pass appended three rounds of rulings to the canvass brief between slices (§18).
- **Independent check (rule 80):** one agent per round, at most three rounds (§13).
- Helpers kept scratch files in their own folders. The canvass helpers could not write SUMMARY.md (the tool refuses report files for helpers), so each reported in its reply, and the main pass saved C4's summary.

### §1.5 Batteries (rule 19)
556 battery runs (`scripts/battery.py`), each logged in `work/batteries.jsonl` before any hit was read. Index: "CA 54 ; CC 2517 ; CCP 1260 ; CCRP 795 ; CE 106 ; CHC 1212 ; CONST 337 ; RS 46442 ; total 52723". 483 runs covered the whole index; the rest were scoped to the lease and procedure parts or to the constitution.
- **Controls:**
  - Every run carries a nonsense control: 0 hits in all 556.
  - Every run carries a "legislature" control generated in the same call: whole index 3,266; scoped runs 75 to 364; constitution 143.
  - Two runs returned 0 on that control (LA-TA-ASSOCLEASE-01, LA-C5-ECONSENT-01). Both were treated as failed and are cited nowhere.
- **Positives:** every run carried at least one positive: a real snippet from a named section, or, for an absence, a synthetic sentence tested against the pattern only.
  - 134 runs had a positive that failed, mostly because the snippet didn't match the pattern's exact form or the first formatting runs' context limb.
  - Each was rerun under a new name. No row cites a failed run: `checks.py` enforces this, and the earlier mentions were removed by errata.
- **Runs by origin:**

  | Origin | Runs |
  |---|---|
  | Triage | 62 |
  | Main pass | 40 |
  | Formatting | 22 |
  | Constitution | 4 |
  | Canvass slices C1-C7 | 64, 71, 46, 54, 49, 70, 55 |
  | Independent check (rounds 1-3) | 16, 1, 2 |

- **Scanning:** all names are unique (the tool refuses reuse), and soft hyphens (U+00AD) are stripped before matching.


## §2 Tag-first results (rules 26-28)
- **Scope:** all 1,182 active lease clauses were screened.
  - The shared and blank-states clauses were read one by one in the main pass.
  - The single-state clauses were triaged (§2.3).
- **Result:** Louisiana is tagged on 54 existing rows: 53 shared clauses and `edu-cares-act-notice`.
  - 57 tags were planned. Three were withdrawn after a canvass helper's objection, and a Louisiana override was written for each: `rental-application-accuracy`, `governing-law` and `assistance-animal-accommodation` (§2.2).
  - Each tag note opens "LA: Tagged as written (tag-first screen, rules 26-28, LA log §2.1)", gives the Louisiana basis with quotes, and ends with the section-open line.

### §2.1 Tagged LA as written (54)
`acceptable-payment-methods`, `addendum-precedence`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `common-area-use`, `due-at-signing`, `early-termination-ks`, `electronic-notice-ma`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `extended-absence-notice-ks`, `fire-safety-grilling`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `inspection-rights`, `keys`, `landlord-maintenance`, `landlords-access`, `landscaping-irrigation`, `lead-based-paint`, `no-alterations`, `no-disturbance`, `no-sublet-assign`, `notices`, `parking-ks-oh-ca`, `parking-vehicle-rules`, `permitted-occupants`, `pet-insurance-requirement`, `pet-policy-or`, `possession-delay-ca`, `rent-payment`, `residential-use-only`, `security-deposit-use`, `services-utilities-provided-ks-oh`, `severability`, `smoking-policy`, `snow-removal`, `storage-space-ks-oh-ca`, `tenant-forward-proceedings-ca`, `tenant-maintenance`, `tenants-property-insurance-ks-oh-ca`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity`, `rules-wi`, `rent-concession-wi`, `rent-installments-or`, `utility-allowance-cap-co`, `late-fee`, `edu-cares-act-notice`.
- **Fee screens (kickoff):** Louisiana has no upfront-fee ban, no deposit cap and no payment-method rule for residential lessors (`edu-no-upfront-payment-limit-la`, `edu-no-security-deposit-cap-la`, `edu-no-payment-method-rule-la`).
  - From August 1, 2026, a retail business may not surcharge a debit card (2026 Act 751). Whether a residential lessor is a "retail business" is unsettled, so `acceptable-payment-methods` carries an LA note advising against a surcharge (`edu-debit-card-surcharge-la`).
  - `keys` (replacement charge at cost) and `hoa-compliance` (the tenant pays only fines it causes) were screened against Louisiana's fee rules and the rules on "stipulated damages" (a pre-agreed amount the court may reduce), La. Civ. Code arts. 2005-2012. Both are lawful as written.
  - Every shared clause that lets the landlord charge for something or change a term on its own was checked the same way. That covers `late-fee`, `due-at-signing`, `application-of-payments`, `utility-payment-evidence`, `rent-installments-or` and `rent-concession-wi`; the result is in each tag note.
- **Art. 7 ruling (rule 50):** the lease title's allocation articles may be varied by the lease, because they are not laws "enacted for the protection of the public interest" (La. Civ. Code art. 7). That covers taxes and charges (art. 2689) and repairs (arts. 2691-2694). `utilities-responsibility` and `tenant-maintenance` rest on this.

### §2.2 Clauses read in the main pass and not tagged, with reasons
- **Class decision (rule 52): "Landlord is not liable" disclaimers.**
  - A clause is null that "in advance, excludes or limits the liability of one party for causing physical injury to the other party" (La. Civ. Code art. 2004). A waiver of the warranty against vices and defects works only if it is "clear and unambiguous" and brought to the lessee's attention, and never for health-and-safety defects in a residential lease (art. 2699).
  - Shared clauses carrying a blanket disclaimer are therefore not tagged: `parking`, `storage-space`, `tenants-property-insurance`, `services-utilities-provided`. Louisiana takes the variants without the disclaimer instead (`parking-ks-oh-ca`, `storage-space-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca`, `services-utilities-provided-ks-oh`).
  - The narrow release a canvass helper floated for parking and storage was not drafted (§6.3).
- **Overridden by a Louisiana clause:**
  - `security-deposit-return` → `security-deposit-return-la`
  - `default-by-tenant` → `default-by-tenant-la` (express dissolution clause, notice to perform, no statutory cure)
  - `holdover`/`holdover-ca` → `holdover-la`: the "reconduction" rules, under which a tenant who stays a week after the term with no objection gets a month-to-month lease (arts. 2721-2724)
  - `joint-liability` → `joint-liability-la`: "solidary" liability, meaning each tenant can be held for the whole amount (art. 1796: solidarity is not presumed)
  - `returned-payments` → `returned-payments-la` (La. R.S. 9:2782 measure)
  - `rental-application-accuracy` → `rental-application-accuracy-la` (expunged records, La. C.Cr.P. art. 973(C))
  - `governing-law` → `governing-law-la` (parishes)
  - `assistance-animal-accommodation` → `assistance-animal-accommodation-la` (service-dog access, La. R.S. 46:1954(C))
- **Not tagged, answered otherwise:**
  - `pet-policy` (`pet-policy-or` tagged instead).
  - `possession-delay` (`possession-delay-ca` tagged).
  - The base `early-termination` clause, whose fee is measured on "the remaining Rent due under the Term" (`early-termination-ks` tagged).
  - `surrender-end-of-term` and its variants: their disposal sentence assumes an abandoned-property procedure Louisiana lacks, so `surrender-end-of-term-la` and the optional `abandoned-property-la` were written instead.
  - `tenant-caused-damage-nm`: the Civil Code already covers this (arts. 2687, 2692; `edu-tenant-caused-damage-la`).
  - `maintenance-allocation-ks`: no separate-writing rule exists, and the art. 7 ruling and `tenant-repairs-la` cover it.
  - `rent-increase-midterm-ky`: a unilateral reset is doubtful under art. 2676, so `rent-escalation-la` was written instead.
  - `rules-ia`: unilateral rule changes; `rules-wi` was tagged.
  - `tenant-death-contact-nh`: authority ends at death (art. 3024), so `tenant-death-contact-la` only notifies.

### §2.3 Single-state clauses (rule 26 triage)
- **Screened:** 1,090 single-state clauses. 549 name another state or its statute in the title or body, so they can't be tagged as written. The other 541 were read in full by the two helpers.
- **Verdicts:**

  | Verdict | Count |
  |---|---|
  | RESTS_ON_OWN_STATE | 348 |
  | NEEDS_LA_VERSION | 134 |
  | CONFLICT | 28 |
  | NEEDS_MAIN_PASS | 19 |
  | TAGGABLE | 12 |

  The NEEDS_LA_VERSION and CONFLICT leads went to the canvass slices by topic (`canvass/triage_leads.json`).
- **The 12 TAGGABLE leads.** None was tagged. Each failed the basis check (rule 26 [OR 5]) or was answered by a Louisiana row:

  | Lead | How Louisiana is answered |
  |---|---|
  | `criminal-activity-ky` | `criminal-activity-la` |
  | `electronic-notice-nm` | `electronic-notice-ma` (tagged) |
  | `pet-policy-hi`, `pet-policy-nm` | `pet-policy-or` (tagged), `edu-pet-policy-la` |
  | `rent-concession-ma` | `rent-concession-wi` (tagged) |
  | `tenant-caused-damage-tn`, `-in`, `-wy`, `-mn` | `edu-tenant-caused-damage-la` (the Civil Code supplies the rule) |
  | `tenant-death-contact-mt` | `tenant-death-contact-la` |
  | `periodic-tenancy-notice-wy` | `edu-termination-notice-la` |
  | `unpaid-amounts-interest-hi` | `unpaid-amounts-interest-la` |

- **The 19 NEEDS_MAIN_PASS questions** were answered in the canvass brief's main-pass rulings:
  - The holdover-rate leads → `holdover-rate-la`. The library's shared rate clause starts on its own trigger, which doesn't match Louisiana's one-week reconduction.
  - The rent-reset leads → `rent-escalation-la`.
  - `government-fee-reimbursement-ky` → `government-fee-reimbursement-la` (art. 2689 can be varied).
  - `association-approval-fl` → `association-approval-la`. The Florida clause rests on Florida statutes and variables the builder doesn't fill for Louisiana.
  - `deposit-carpet-cleaning-mo` → `carpet-cleaning-la`.
  - `ev-charging-requirements-co` → `ev-charger-installation-la`.
  - `landlord-self-cure-nm` → `landlord-self-cure-la`.
  - `nonrefundable-fees-wv` → declined (`edu-no-nonrefundable-deposit-la`).
  - `partial-payment-nonwaiver-mn` → `nonwaiver-acceptance-la`.

## §3 New rows (rule_type, basis, citation)
### §3.1 LA lease clauses (51 new)
`lease_clause_basis`: SERVES_LANDLORD 43, CONSTRAINED_TERM 6, REQUIRED_DISCLOSURE 2. Overrides (`supersedes`): 8.

| Row | rule_type | basis | topic_key | supersedes | source | key citations |
|---|---|---|---|---|---|---|
| `security-deposit-return-la` | RECOMMENDED | SERVES_LANDLORD | `security-deposit-return` | `security-deposit-return` | main | R.S. 9:3251; 2026 Acts No. 63 |
| `default-by-tenant-la` | RECOMMENDED | SERVES_LANDLORD | `default-by-tenant` | `default-by-tenant` | main | CC art. 2704; CC art. 1990; CC art. 2017; CC art. 2015 |
| `notice-to-vacate-waiver-la` | CONDITIONAL | SERVES_LANDLORD | `notice-to-quit-waiver` |  | main | CCP art. 4701; CCP art. 4731; CC art. 2727; CC art. 2718 |
| `holdover-la` | RECOMMENDED | SERVES_LANDLORD | `holdover` | `holdover` | main | CC art. 2721; CC art. 2723; CC art. 2724; CC art. 2728 |
| `holdover-rate-la` | CONDITIONAL | CONSTRAINED_TERM | `holdover-rate` |  | main | CC art. 2005; CC art. 2012; CC art. 2007; CC art. 2721 |
| `joint-liability-la` | RECOMMENDED | SERVES_LANDLORD | `joint-liability` | `joint-liability` | main | CC art. 1796; CC art. 1794 |
| `returned-payments-la` | CONSTRAINED | CONSTRAINED_TERM | `returned-payments` | `returned-payments` | main | R.S. 9:2782; CC arts. 2005, 2012 |
| `sex-offender-registry-notice-la` | CONDITIONAL | REQUIRED_DISCLOSURE | `sex-offender-disclosure` |  | main | R.S. 15:540; R.S. 37:1469 |
| `foreclosure-disclosure-la` | CONDITIONAL | REQUIRED_DISCLOSURE | `foreclosure-disclosure` |  | main | R.S. 9:3260.1 |
| `casualty-termination-la` | CONDITIONAL | SERVES_LANDLORD | `casualty-termination` |  | main | CC art. 2714; CC art. 2715; CC art. 2691; CC art. 2718 |
| `criminal-activity-la` | CONDITIONAL | SERVES_LANDLORD | `criminal-activity` |  | main | R.S. 40:506; R.S. 13:4711; R.S. 33:9097.2; CC art. 2017 |
| `lessee-assumes-condition-la` | CONDITIONAL | SERVES_LANDLORD | `maintenance-duty-shift` |  | main | R.S. 9:3221; CC arts. 2696-2699; CC art. 2004; CC arts. 2682, 2691 |
| `warranty-waiver-la` | CONDITIONAL | CONSTRAINED_TERM | `habitability-waiver` |  | main | CC art. 2699; CC art. 2004; CC art. 2696 |
| `government-fee-reimbursement-la` | CONDITIONAL | SERVES_LANDLORD | `government-fee-reimbursement` |  | C1 | CC art. 2689; CC art. 1971; CC art. 2676; R.S. 33:9701 |
| `rent-escalation-la` | CONDITIONAL | SERVES_LANDLORD | `rent-escalation` |  | C1 | CC art. 2676; CC art. 1971; CC art. 2724 |
| `tax-insurance-escalation-la` | CONDITIONAL | SERVES_LANDLORD | `tax-escalation` |  | C1 | CC art. 2689; CC art. 1971; CC art. 2676; CC art. 2056 |
| `unpaid-amounts-interest-la` | CONDITIONAL | SERVES_LANDLORD | `unpaid-damages-interest` |  | C1 | CC art. 2000; R.S. 9:3500; R.S. 13:4202; CC art. 1989 |
| `move-out-notice-la` | CONDITIONAL | SERVES_LANDLORD | `deposit-surrender-notice` |  | C1 | R.S. 9:3251; CC art. 2720; CC art. 1971; R.S. 9:3254 |
| `furnishings-included-la` | CONDITIONAL | SERVES_LANDLORD | `furnishings-included` |  | C1 | CC art. 2683; CC art. 2687; CC art. 2688; R.S. 9:3251 |
| `prompt-payment-discount-la` | CONDITIONAL | SERVES_LANDLORD | `late-fee` |  | C1 | CC art. 2676; CC art. 1971; CC art. 2012 |
| `improvements-ownership-la` | CONDITIONAL | SERVES_LANDLORD | `alterations` |  | C2 | CC art. 2695; CC art. 1971; R.S. 51:2606 |
| `pest-cooperation-la` | CONDITIONAL | SERVES_LANDLORD | `bed-bug-cooperation` |  | C2 | CC art. 2688; CC art. 2692; CC art. 2691; CC art. 1971 |
| `carpet-cleaning-la` | CONDITIONAL | SERVES_LANDLORD | `carpet-cleaning` |  | C2 | CC art. 1971; CC art. 2683; R.S. 9:3251; R.S. 9:3254 |
| `no-liens-la` | CONDITIONAL | SERVES_LANDLORD | `construction-liens` |  | C2 | R.S. 9:4806; CC art. 1971 |
| `tenant-repairs-la` | CONDITIONAL | SERVES_LANDLORD | `tenant-repair-agreement` |  | C2 | CC art. 2691; CC art. 1971; CC art. 2699; CC art. 2688 |
| `appliances-excluded-la` | CONDITIONAL | SERVES_LANDLORD | `appliances-excluded` |  | C2 | CC art. 2668; CC art. 2699; CC art. 2004 |
| `scheduled-services-entry-la` | CONDITIONAL | SERVES_LANDLORD | `periodic-services-entry` |  | C3 | CC art. 1983; CC art. 2682 |
| `showing-notice-la` | CONDITIONAL | SERVES_LANDLORD | `showing-notice-waiver` |  | C3 | CC art. 1983; CC art. 2682 |
| `abandoned-property-la` | CONDITIONAL | SERVES_LANDLORD | `abandoned-property` |  | C3 | CCP art. 4731; CC art. 3418; CCP arts. 3571, 3575; CC art. 2004 |
| `attorney-fees-fixed-la` | CONDITIONAL | CONSTRAINED_TERM | `attorney-fees` |  | C3 | CC art. 2000; R.S. 9:3253; CCP art. 4731 |
| `rent-acceleration-la` | CONDITIONAL | SERVES_LANDLORD | `landlord-remedies-termination` |  | C4 | CC art. 1983; CC art. 2007; R.S. 9:3318; R.S. 9:3319 |
| `landlord-self-cure-la` | CONDITIONAL | SERVES_LANDLORD | `landlord-self-cure` |  | C4 | CC art. 2692; CC art. 1971; CC art. 1994; CC art. 2693 |
| `owner-move-in-reservation-la` | CONDITIONAL | SERVES_LANDLORD | `owner-move-in-reservation` |  | C4 | CC art. 2718; CC art. 2728; CC art. 2729; CCP arts. 4701, 4731 |
| `rental-application-accuracy-la` | RECOMMENDED | SERVES_LANDLORD | `rental-application-accuracy` | `rental-application-accuracy` | C4 | C.Cr.P. art. 973; CC art. 1953; CC art. 1958; CC arts. 2013, 2719 |
| `surrender-end-of-term-la` | RECOMMENDED | SERVES_LANDLORD | `surrender-end-of-term` |  | C4 | CC art. 2683; CC art. 2720; CC art. 2721; CC art. 3418 |
| `tenant-death-termination-la` | CONDITIONAL | SERVES_LANDLORD | `tenant-death` |  | C4 | CC art. 2717; CC art. 2678; CC art. 2718; CC art. 935 |
| `tenant-death-contact-la` | CONDITIONAL | SERVES_LANDLORD | `tenant-death` |  | C4 | CC art. 3024; CC art. 935; CC art. 2717 |
| `nonwaiver-acceptance-la` | CONDITIONAL | SERVES_LANDLORD | `waiver-by-acceptance` |  | C4 | CC art. 1971; CC art. 2721; CC art. 1861; CC art. 1864 |
| `automatic-renewal-la` | CONDITIONAL | CONSTRAINED_TERM | `automatic-renewal` |  | C4 | R.S. 9:2716; CC art. 2676; CC art. 2720; 2026 Acts No. 830 |
| `governing-law-la` | RECOMMENDED | SERVES_LANDLORD | `governing-law` | `governing-law` | C4 | Const. art. VI, § 1; Const. art. VI, § 44 |
| `animal-care-access-la` | CONDITIONAL | SERVES_LANDLORD | `animal-care-access` |  | C5 | R.S. 14:102.1; CC art. 3024 |
| `assistance-animal-accommodation-la` | REQUIRED | SERVES_LANDLORD | `assistance-animal-accommodation` | `assistance-animal-accommodation` | C5 | R.S. 46:1954; R.S. 46:1952; R.S. 46:1956; R.S. 46:1953 |
| `ev-charger-installation-la` | CONDITIONAL | SERVES_LANDLORD | `ev-charging` |  | C5 | CC art. 2695; CC art. 2683; CC art. 2692; R.S. 45:1623 |
| `firearm-rules-la` | CONDITIONAL | SERVES_LANDLORD | `firearms` |  | C5 | R.S. 32:292.1; Const. art. I, § 11 |
| `us-flag-display-la` | CONSTRAINED | CONSTRAINED_TERM | `tenant-display-rights` |  | C6 | R.S. 9:1114 |
| `association-approval-la` | CONDITIONAL | SERVES_LANDLORD | `hoa` |  | C6 | CC art. 1767; R.S. 9:1122.105; R.S. 9:1141.20; CC art. 2684 |
| `mold-pamphlet-la` | CONDITIONAL | SERVES_LANDLORD | `mold-disclosure` |  | C6 | R.S. 37:1470; CC art. 2699 |
| `employee-housing-la` | CONDITIONAL | SERVES_LANDLORD | `tenant-employee-housing` |  | C7 | CC art. 2678; CC art. 2675; CCP art. 4701 |
| `detector-care-la` | CONDITIONAL | SERVES_LANDLORD | `alarm-tampering-fee` |  | C7 | CC art. 2683; CC art. 2688; CC art. 2687; CC art. 2692 |
| `government-fines-reimbursement-la` | CONDITIONAL | SERVES_LANDLORD | `governmental-fines` |  | C7 | CC art. 2689; CC art. 1971; CC art. 2687; CC arts. 2682, 2691, 2699 |
| `usufructuary-lessor-la` | CONDITIONAL | SERVES_LANDLORD | `usufructuary-lessor` |  | extra | CC art. 2716; CC art. 567; CC art. 568.2; CC art. 568 |

### §3.2 LA education rows (320 new)
By source: C1 49, C2 43, C3 39, C4 36, C5 42, C6 41, C7 48, extra 10, main 12. By opening of the notes: Confirmed absent 202, Present 115, Not applicable 3. Every row is VERIFIED.

| Row | rule_type | topic_key | source | key citations |
|---|---|---|---|---|
| `edu-security-deposit-return-la` | REQUIRED | `security-deposit-return` | main | R.S. 9:3251; R.S. 9:3252; R.S. 9:3253; R.S. 9:3254; 2026 Acts No. 63 |
| `edu-notice-to-vacate-la` | REQUIRED | `eviction-process` | main | R.S. 44:57; CCP art. 4701; CCP art. 4703; CCP art. 5059 |
| `edu-for-cause-eviction-la` | RECOMMENDED | `for-cause-eviction` | main | CC art. 2720; CC art. 2728; R.S. 9:3261.1; R.S. 33:9701 |
| `edu-returned-check-la` | CONSTRAINED | `returned-payments` | main | R.S. 9:2782 |
| `edu-foreclosure-disclosure-la` | REQUIRED | `foreclosure-disclosure` | main | R.S. 9:3260.1 |
| `edu-smoke-co-detectors-la` | REQUIRED | `alarm-duties` | main | R.S. 40:1581; 2026 Acts No. 187 |
| `edu-holdover-la` | RECOMMENDED | `holdover` | main | CC art. 2721; CC art. 2723; CC art. 2724; CCP art. 4701 |
| `edu-warranty-waiver-la` | CONSTRAINED | `habitability-waiver` | main | CC art. 2696; CC art. 2697; CC art. 2698; CC art. 2699 |
| `edu-late-fee-la` | CONSTRAINED | `late-fee-limit` | main | CC art. 2005; CC art. 2009; CC art. 2010; CC art. 1990 |
| `edu-termination-notice-la` | REQUIRED | `termination-notice` | main | CC art. 2680; CC art. 2727; CC art. 2728; CC art. 2729 |
| `edu-lessor-privilege-la` | CONSTRAINED | `landlord-lien` | main | CC art. 2707; CC art. 2708; CC art. 2709; CC art. 2710; 2026 Acts No. 55 |
| `edu-tenant-caused-damage-la` | RECOMMENDED | `tenant-caused-damage` | main | CC art. 2687; CC art. 2692; CC art. 2715; CC art. 2714 |
| `edu-no-payment-method-rule-la` | RECOMMENDED | `acceptable-payment-methods` | C1 | CC art. 2703; CC art. 1862; 2026 Acts No. 751 |
| `edu-debit-card-surcharge-la` | CONDITIONAL | `acceptable-payment-methods` | C1 | CC art. 2668; 2026 Acts No. 751 |
| `edu-no-algorithmic-rent-rule-la` | RECOMMENDED | `algorithmic-rent-setting` | C1 | R.S. 51:122; R.S. 51:1405; R.S. 51:137; R.S. 51:129 |
| `edu-application-fee-notice-la` | CONDITIONAL | `application-fees` | C1 | R.S. 9:3258.1 |
| `edu-no-application-fee-cap-la` | RECOMMENDED | `application-fees` | C1 | R.S. 9:3258.1 |
| `edu-application-of-payments-la` | RECOMMENDED | `application-of-payments` | C1 | CC art. 1864; CC art. 1865; CC art. 1866; CC art. 1867 |
| `edu-no-collection-fee-la` | RECOMMENDED | `collection-fee` | C1 | CC art. 2000; R.S. 9:3534.1; CC art. 2005; CC art. 2012 |
| `edu-no-upfront-payment-limit-la` | RECOMMENDED | `due-at-signing` | C1 | CC art. 2703; R.S. 9:3251 |
| `edu-no-fee-unprovided-service-la` | RECOMMENDED | `fee-unprovided-service` | C1 | CC arts. 1966-1967; CC arts. 1994, 2013, 2022; R.S. 51:1405; CC art. 1966 |
| `edu-fees-as-rent-la` | RECOMMENDED | `fees-as-rent` | C1 | CC arts. 2675-2676; CC art. 2719; CCP art. 4701; CC art. 2707 |
| `edu-government-fee-passthrough-la` | RECOMMENDED | `government-fee-reimbursement` | C1 | CC art. 2689; R.S. 33:9701 |
| `edu-no-lease-type-parity-la` | RECOMMENDED | `lease-type-parity` | C1 | CC arts. 2720-2724; CC arts. 2680, 2727-2729; CC art. 2678; CC art. 2680 |
| `edu-rent-concession-la` | RECOMMENDED | `rent-concession` | C1 | CC arts. 2676, 2683; CC arts. 2005, 2011, 2012; CC art. 2724; CC art. 2676 |
| `edu-no-rent-control-la` | RECOMMENDED | `rent-control` | C1 | CC art. 2676; R.S. 9:3258; Const. art. I, § 4; R.S. 40:439 |
| `edu-no-rent-demand-bar-la` | RECOMMENDED | `rent-demand-bar` | C1 | CC arts. 2682, 2691; R.S. 9:3260; CC art. 2682; CC art. 2691 |
| `edu-rent-escalation-la` | RECOMMENDED | `rent-escalation` | C1 | CC arts. 1983, 2676, 2726; CC art. 2676; CC art. 1983; CC art. 2683 |
| `edu-rent-increase-notice-la` | RECOMMENDED | `rent-increase-notice` | C1 | CC arts. 2676, 2728-2729; CC arts. 2720-2724; CCP art. 4701; R.S. 29:732 |
| `edu-rent-payment-la` | RECOMMENDED | `rent-payment` | C1 | CC art. 2703; CC art. 2694; CC art. 1893; CC art. 1899 |
| `edu-no-rent-receipt-duty-la` | RECOMMENDED | `rent-receipts` | C1 | CC art. 1867; R.S. 9:3358; R.S. 9:3352 |
| `edu-no-rent-reporting-rule-la` | RECOMMENDED | `rent-reporting` | C1 | R.S. 9:3571.1 |
| `edu-rent-tax-la` | RECOMMENDED | `rent-tax` | C1 | R.S. 47:301; R.S. 47:301.3; R.S. 47:338.221 |
| `edu-no-fee-listing-rule-la` | RECOMMENDED | `required-fees` | C1 | CC art. 1983; CC art. 2726; CC art. 2683; CC art. 2056 |
| `edu-no-shutdown-protection-la` | RECOMMENDED | `shutdown-rent-protection` | C1 | R.S. 9:3261; CC art. 2703; CC art. 2704 |
| `edu-money-limits-la` | CONSTRAINED | `statutory-caps` | C1 | R.S. 9:3251; CC art. 2012; R.S. 9:3258.1; R.S. 9:2782 |
| `edu-no-subsidy-proration-rule-la` | RECOMMENDED | `subsidy-habitability-proration` | C1 | CC art. 2715; CC art. 2693; R.S. 9:3259.2 |
| `edu-no-subsidy-late-fee-la` | RECOMMENDED | `subsidy-late-fee` | C1 | CC arts. 2008, 2012; R.S. 9:3259.2; CC arts. 2005-2012; CC art. 2008 |
| `edu-tax-escalation-la` | RECOMMENDED | `tax-escalation` | C1 | CC art. 2689; R.S. 9:3251; R.S. 33:130.865.1 |
| `edu-interest-on-unpaid-amounts-la` | RECOMMENDED | `unpaid-damages-interest` | C1 | CC art. 2000; R.S. 9:3500; R.S. 13:4202; CC arts. 1989-1991 |
| `edu-no-move-in-inspection-rule-la` | RECOMMENDED | `condition-inspection` | C1 | CC art. 2683; R.S. 9:3251; CC art. 2692 |
| `edu-no-inspection-notice-penalty-la` | RECOMMENDED | `inspection-notice-penalty` | C1 | R.S. 9:3252 |
| `edu-unclaimed-deposit-la` | REQUIRED | `deposit-escheat` | C1 | R.S. 9:153; R.S. 9:154; R.S. 9:159; R.S. 9:176; 2026 Acts No. 891 |
| `edu-no-deposit-cost-schedule-la` | CONSTRAINED | `deposit-cost-schedule` | C1 | R.S. 9:3251; R.S. 9:3254; CC art. 2683; CC arts. 2005-2012 |
| `edu-no-deposit-installment-right-la` | RECOMMENDED | `deposit-installments` | C1 | R.S. 9:3251; CC art. 1971 |
| `edu-deposit-last-month-rent-la` | RECOMMENDED | `deposit-last-month-rent` | C1 | R.S. 9:3251; CC art. 2683; R.S. 9:3254; CC art. 1893 |
| `edu-deposit-abandonment-notice-la` | CONDITIONAL | `deposit-surrender-notice` | C1 | R.S. 9:3251; CC arts. 2728-2729; CC art. 2728; CC art. 2729 |
| `edu-dv-deposit-timing-la` | CONDITIONAL | `dv-deposit-timing` | C1 | R.S. 9:3251; R.S. 9:3261.1; R.S. 9:3261.2; 2026 Acts No. 64 |
| `edu-no-expedited-deposit-la` | RECOMMENDED | `expedited-deposit-disposition` | C1 | R.S. 9:3251; R.S. 9:3254; 2026 Acts No. 63 |
| `edu-no-fee-in-lieu-of-deposit-la` | RECOMMENDED | `fee-in-lieu-of-deposit` | C1 | R.S. 9:3251; R.S. 9:3254; CC art. 1994 |
| `edu-no-furnished-rental-rule-la` | RECOMMENDED | `furnishings-included` | C1 | CC arts. 2683, 2687; R.S. 9:3251; CC art. 2683; CC art. 2687 |
| `edu-no-holding-deposit-rule-la` | RECOMMENDED | `holding-deposit` | C1 | CC art. 2670; R.S. 9:3251; R.S. 9:3258.1; CC art. 1933 |
| `edu-no-nonrefundable-deposit-la` | PROHIBITED | `nonrefundable-deposit-notice` | C1 | R.S. 9:3251; R.S. 9:3254 |
| `edu-no-nonrefundable-deposit-notice-la` | PROHIBITED | `nonrefundable-deposit-separate-notice` | C1 | R.S. 9:3251; R.S. 9:3254 |
| `edu-no-security-deposit-cap-la` | RECOMMENDED | `security-deposit-cap` | C1 | R.S. 9:3251; R.S. 9:3252; R.S. 9:3253; R.S. 9:3254 |
| `edu-no-deposit-holding-rule-la` | RECOMMENDED | `security-deposit-holding` | C1 | R.S. 9:3251; R.S. 37:1435; R.S. 37:1455; R.S. 37:1438; 2026 Acts No. 708 |
| `edu-no-deposit-interest-la` | RECOMMENDED | `security-deposit-interest` | C1 | CC art. 2000; R.S. 9:3252; R.S. 9:3251; CC art. 1971 |
| `edu-deposit-nonwaiver-la` | PROHIBITED | `security-deposit-nonwaiver` | C1 | R.S. 9:3254; R.S. 9:3251; R.S. 9:3252; R.S. 9:3253 |
| `edu-deposit-on-sale-la` | CONDITIONAL | `security-deposit-on-sale` | C1 | R.S. 9:3251; R.S. 9:3252; CC arts. 2681.1, 2712; R.S. 9:3254; 2026 Acts No. 240 |
| `edu-no-fee-transparency-rule-la` | RECOMMENDED | `fee-transparency` | C1 | CC art. 1983; CC art. 2056; R.S. 51:1405; R.S. 9:3258.1; 2026 Acts No. 830 |
| `edu-late-payment-acceptance-la` | RECOMMENDED | `late-fee` | C1 | CC art. 1861; CC art. 2007 |
| `edu-no-deposit-standards-rule-la` | RECOMMENDED | `security-deposit-standards` | C2 | R.S. 9:3251; R.S. 51:2606; R.S. 51:2604 |
| `edu-no-utility-deposit-rule-la` | CONSTRAINED | `utility-deposit-return` | C2 | R.S. 9:3251; R.S. 9:3252; R.S. 45:848; R.S. 45:850 |
| `edu-improvements-la` | RECOMMENDED | `alterations` | C2 | CC art. 2695; CC art. 2686; CC art. 2690; R.S. 9:1255 |
| `edu-disability-modifications-la` | REQUIRED | `alterations` | C2 | R.S. 51:2606; R.S. 51:2604; R.S. 51:2605 |
| `edu-no-bed-bug-rule-la` | RECOMMENDED | `bed-bug-cooperation` | C2 | CC arts. 2682, 2684, 2691; CC art. 2696; CC art. 2688; CC arts. 2687, 2692 |
| `edu-no-carpet-cleaning-rule-la` | RECOMMENDED | `carpet-cleaning` | C2 | CC art. 2683; R.S. 9:3251; R.S. 9:3254 |
| `edu-no-cold-weather-notice-rule-la` | RECOMMENDED | `cold-weather-vacate-notice` | C2 | CC art. 2683; CC art. 2688; CC art. 2687; CC art. 2355.1 |
| `edu-construction-liens-la` | RECOMMENDED | `construction-liens` | C2 | R.S. 9:4801; R.S. 9:4806; R.S. 9:4802 |
| `edu-disturbance-la` | RECOMMENDED | `disturbance` | C2 | CC art. 2683; CC art. 2700; CC art. 2701; CC art. 2702 |
| `edu-existing-condition-la` | RECOMMENDED | `existing-condition` | C2 | CC art. 2683; R.S. 9:3251; CC art. 2684; CC arts. 2696, 2697 |
| `edu-absence-notice-la` | RECOMMENDED | `extended-absence-notice` | C2 | CC art. 1994; CCP art. 4731; CC art. 1971 |
| `edu-no-family-child-care-rule-la` | RECOMMENDED | `family-child-care` | C2 | R.S. 17:407.62; CC arts. 2683, 2686; R.S. 51:2606; R.S. 17:407.63 |
| `edu-no-home-business-rule-la` | RECOMMENDED | `home-business` | C2 | CC arts. 2683, 2686; CC art. 2671; CC art. 2699; CC art. 2683 |
| `edu-no-chore-writing-rule-la` | RECOMMENDED | `landscaping-irrigation` | C2 | CC art. 2691; CC art. 2683; CC art. 2699; R.S. 9:3221 |
| `edu-municipal-utility-lien-la` | RECOMMENDED | `municipal-utility-lien` | C2 | R.S. 33:4169.1; R.S. 33:4887; 2026 Acts No. 575 |
| `edu-no-occupancy-limit-la` | CONSTRAINED | `permitted-occupants` | C2 | R.S. 51:2605; R.S. 51:2603; R.S. 51:2606 |
| `edu-no-prohibited-acts-list-la` | RECOMMENDED | `prohibited-acts-renter` | C2 | CC art. 2683; CC arts. 2687, 2692; CC art. 2688; CC art. 2686 |
| `edu-illegal-use-nuisance-la` | RECOMMENDED | `purpose-limitation` | C2 | CC art. 2686; CC art. 2719; R.S. 13:4711; R.S. 13:4713 |
| `edu-residential-use-remedy-la` | RECOMMENDED | `residential-use-only` | C2 | CC art. 2686; CC art. 2683; CC art. 2719; CCP art. 4701 |
| `edu-smoking-law-la` | RECOMMENDED | `smoking-policy` | C2 | R.S. 40:1291.11; R.S. 40:1291.3; C.Cr.P. art. 162.4; CC art. 2726 |
| `edu-sublet-assign-la` | RECOMMENDED | `sublet-assign` | C2 | CC art. 2713; CC art. 2713.1; CC arts. 1821, 1823; CC art. 1821; 2026 Acts No. 240 |
| `edu-third-party-claims-la` | RECOMMENDED | `tenant-forward-proceedings` | C2 | CC art. 2688; CC art. 2701; CC arts. 2700, 2701; CC art. 2700 |
| `edu-no-tenant-insurance-claim-rule-la` | RECOMMENDED | `tenant-insurance-claims` | C2 | CC arts. 2691, 2692; CC art. 2004; CC art. 2699; CC art. 2687 |
| `edu-no-well-septic-rule-la` | RECOMMENDED | `tenant-maintenance` | C2 | CC art. 2691; CC art. 2692; CC art. 2688; CC art. 2699 |
| `edu-repair-allocation-la` | CONSTRAINED | `tenant-repair-agreement` | C2 | CC art. 2691; CC art. 2692; CC art. 2699; CC art. 2004 |
| `edu-tenant-duties-la` | REQUIRED | `tenant-statutory-duties` | C2 | CC arts. 2683, 2703; CC art. 2683; CC art. 2688; CC arts. 2687, 2692 |
| `edu-utility-money-held-la` | PROHIBITED | `utilities-responsibility` | C2 | R.S. 14:71.5 |
| `edu-no-submeter-regime-la` | PROHIBITED | `utility-interruption-submeter` | C2 | R.S. 29:317; CC art. 2682; R.S. 14:71.5; R.S. 30:503 |
| `edu-no-alt-housing-duty-la` | RECOMMENDED | `alt-housing` | C2 | CC art. 2693; CC art. 2715; CC art. 2714; R.S. 9:3260 |
| `edu-appliances-la` | CONSTRAINED | `appliances-excluded` | C2 | CC art. 2668; CC arts. 2682, 2684, 2691, 2692; CC art. 2696; CC art. 2699 |
| `edu-no-common-area-lighting-rule-la` | RECOMMENDED | `common-area-lighting` | C2 | CC art. 2682; CC arts. 2696, 2698, 2699; CC art. 2696; CC art. 2698 |
| `edu-no-condemned-rent-bar-la` | CONSTRAINED | `condemned-premises-rent-bar` | C2 | CC art. 2715; CC art. 2714; CC art. 2696; R.S. 9:3260 |
| `edu-confirmed-absences-habitability-la` | RECOMMENDED | `confirmed-absences-habitability` | C2 | CC art. 2694; CC art. 2715; CC art. 2719; CC art. 2696 |
| `edu-no-designated-repairer-rule-la` | RECOMMENDED | `designated-repairer` | C2 | CC art. 2694; CC art. 2056 |
| `edu-disability-accommodation-la` | REQUIRED | `disability-accommodation` | C2 | R.S. 51:2606; R.S. 51:2604; R.S. 46:1954; R.S. 46:1952 |
| `edu-no-double-letting-rule-la` | RECOMMENDED | `double-letting` | C2 | CC arts. 2682, 2684; CC art. 2670; CC art. 2719; CC art. 1994; 2026 Acts No. 240 |
| `edu-no-employee-screening-la` | RECOMMENDED | `employee-screening` | C2 | CC art. 2700; CC art. 2701; CC art. 2004 |
| `edu-defect-materiality-la` | CONSTRAINED | `habitability-materiality` | C2 | CC arts. 2696, 2697; CC art. 2691; CC art. 2694; CC art. 2715 |
| `edu-no-habitability-presumption-la` | RECOMMENDED | `habitability-presumption` | C2 | CC art. 2697; CC arts. 2697, 2699; CC art. 2694; CC art. 2699 |
| `edu-no-fitness-statement-la` | RECOMMENDED | `habitability-statement` | C2 | CC arts. 2682, 2684, 2691; CC art. 2696; CC art. 2698; CC art. 2684 |
| `edu-no-health-district-rules-la` | RECOMMENDED | `health-district-rental-rules` | C2 | CC arts. 2682, 2696; R.S. 40:1285.4 |
| `edu-no-heat-statute-la` | RECOMMENDED | `heating` | C2 | CC arts. 2682, 2684, 2691, 2692; CC art. 2696; CC art. 2699; CC art. 2694 |
| `edu-landlord-breach-remedy-la` | RECOMMENDED | `landlord-breach-remedy` | C2 | CC art. 2694; CC art. 2715; CC art. 2693; CC arts. 2719, 2013 |
| `edu-landlord-maintenance-la` | REQUIRED | `landlord-maintenance` | C3 | CC art. 2684; CC art. 2682; CC art. 2691; CC arts. 2696, 2697 |
| `edu-no-supplied-facilities-rule-la` | RECOMMENDED | `other-landlord-facilities` | C3 | CC arts. 2682, 2684, 2691, 2696; CC art. 2691; R.S. 33:4770.1; CC art. 2682 |
| `edu-no-promises-to-repair-rule-la` | RECOMMENDED | `promises-to-repair` | C3 | CC art. 2681; CC art. 1983; CC art. 2684; CC art. 2719 |
| `edu-no-rent-receipt-anti-waiver-la` | RECOMMENDED | `rent-receipt-anti-waiver` | C3 | CC arts. 2711, 2712; R.S. 9:3251; CC arts. 3161, 3162, 3169; CC art. 2699 |
| `edu-rental-inspection-la` | CONDITIONAL | `rental-inspection` | C3 | R.S. 40:580.4; R.S. 3:3391.9; Const. art. I, § 5; R.S. 40:580.7 |
| `edu-repair-notice-la` | CONSTRAINED | `repair-notice` | C3 | CC art. 2688; CC art. 2697; CC art. 2694; CC art. 1991 |
| `edu-no-security-devices-la` | RECOMMENDED | `security-devices` | C3 | CC arts. 2682, 2684; CC arts. 2691, 2692; CC art. 2700; CC art. 2004 |
| `edu-no-senior-housing-work-card-la` | RECOMMENDED | `senior-housing-work-card` | C3 | R.S. 51:2605; R.S. 51:2172; CC art. 2700; R.S. 51:2173 |
| `edu-no-utility-apportionment-rule-la` | RECOMMENDED | `utility-apportionment` | C3 | CC art. 1973; CC art. 2676; CC art. 2689; R.S. 14:71.5 |
| `edu-no-utility-notice-authorization-la` | RECOMMENDED | `utility-disconnection-notice-authorization` | C3 | Const. art. IV, § 21; CC art. 2683 |
| `edu-no-utility-account-protection-la` | RECOMMENDED | `utility-landlord-account` | C3 | CC arts. 2719, 1994; CC art. 2715; R.S. 14:71.5; CC art. 2719 |
| `edu-no-utility-transfer-cutoff-la` | PROHIBITED | `utility-transfer` | C3 | CC art. 2682; CCP arts. 4701, 4731; CCP art. 4731 |
| `edu-tenant-bill-transparency-la` | CONDITIONAL | `utility-submetering-disclosure` | C3 | R.S. 51:3271; R.S. 51:3273; R.S. 51:3274; R.S. 51:3272 |
| `edu-blight-receivership-la` | CONDITIONAL | `substandard-property-receivership` | C3 | R.S. 40:600.33; R.S. 13:2575; R.S. 40:600.31; R.S. 40:600.34 |
| `edu-no-telecom-access-la` | RECOMMENDED | `telecom-access` | C3 | R.S. 45:1362; R.S. 45:1375; R.S. 45:1374 |
| `edu-repair-and-deduct-la` | CONSTRAINED | `tenant-repair-remedies` | C3 | CC arts. 2691, 2692, 2694; CC art. 2694; CC art. 2693; CC art. 2715 |
| `edu-landlord-entry-la` | RECOMMENDED | `landlord-entry` | C3 | CC art. 2682; CC art. 2700; CC art. 2693; CC art. 2690 |
| `edu-no-dv-lockchange-la` | RECOMMENDED | `dv-lockchange` | C3 | R.S. 46:2135; R.S. 9:3261.1 |
| `edu-no-smart-access-law-la` | RECOMMENDED | `smart-access` | C3 | CC art. 2682; CC art. 2700; CC arts. 2691, 2692; CCP art. 3191 |
| `edu-no-key-control-rule-la` | RECOMMENDED | `key-control-policy` | C3 | R.S. 40:1582; R.S. 40:1664.3; CC art. 2700; CC art. 2701 |
| `edu-abandoned-property-la` | CONSTRAINED | `abandoned-property` | C3 | R.S. 9:3259.3; R.S. 9:4759.2; CCP art. 4731; CCP art. 4734; 2026 Acts No. 468 |
| `edu-attorney-fees-la` | CONSTRAINED | `attorney-fees` | C3 | CC art. 2000; CC art. 1983; R.S. 9:3259; R.S. 9:3253 |
| `edu-no-conversion-protections-la` | RECOMMENDED | `conversion-notice` | C3 | R.S. 9:1124.104; CC arts. 2711, 2712, 2681.1; R.S. 9:3251; CC art. 2711 |
| `edu-disaster-tenancy-la` | CONSTRAINED | `disaster-duties` | C3 | CC art. 2714; CC art. 2715; CC art. 2693; CCP art. 4731 |
| `edu-dv-lease-termination-la` | REQUIRED | `dv-lease-termination` | C3 | R.S. 9:3261.1; R.S. 9:3261.2; 2026 Acts No. 64 |
| `edu-dv-qualifying-documents-la` | CONSTRAINED | `dv-qualifying-documents` | C3 | R.S. 9:3261.1; R.S. 9:3261.2 |
| `edu-dv-eviction-protection-la` | PROHIBITED | `dv-eviction-protection` | C3 | R.S. 9:3261.1; R.S. 9:3261.2; R.S. 33:9701 |
| `edu-eminent-domain-la` | RECOMMENDED | `eminent-domain` | C3 | CC art. 2714; CC art. 2715; R.S. 19:148; Const. art. I, § 4 |
| `edu-utility-shutoff-rules-la` | RECOMMENDED | `utility-shutoff-statute` | C3 | Const. art. IV, § 21; R.S. 45:1221; R.S. 33:4169.1; R.S. 45:1604; 2026 Acts No. 451 |
| `edu-entity-landlord-representation-la` | CONDITIONAL | `entity-landlord-court-representation` | C3 | R.S. 37:212; CCP arts. 4701, 4731; R.S. 37:213; CCP art. 4701; 2026 Acts No. 708 |
| `edu-no-environmental-event-termination-la` | RECOMMENDED | `environmental-event-termination` | C3 | CC art. 2714; CC art. 2715; R.S. 9:3260; CC art. 2693 |
| `edu-eviction-stays-la` | CONDITIONAL | `eviction-hardship-stay` | C3 | CCP arts. 4732, 4733; CCP art. 4735; R.S. 29:311; CCP art. 4731 |
| `edu-no-eviction-record-sealing-la` | RECOMMENDED | `eviction-record-sealing` | C3 | R.S. 9:3258.1 |
| `edu-no-eviction-service-party-la` | RECOMMENDED | `eviction-service-party` | C3 | CCP art. 4701; R.S. 9:2603; CCP arts. 1231, 1232, 1234; CCP art. 4703 |
| `edu-peaceful-possession-la` | REQUIRED | `quiet-possession` | C3 | CC art. 2682; CC art. 2700; CC art. 2701; CC art. 2702 |
| `edu-abandonment-la` | CONSTRAINED | `abandonment-and-mitigation` | C3 | CC art. 2720; CC art. 2729; CCP art. 4731; CC arts. 1995, 2002 |
| `edu-early-termination-la` | CONSTRAINED | `early-termination` | C3 | CC arts. 2718, 2728, 2729; CC arts. 2005, 2012; R.S. 9:3261; R.S. 9:3261.1 |
| `edu-no-small-landlord-remedy-exemption-la` | RECOMMENDED | `repair-escrow-exemption-notice` | C3 | CC art. 2694; CC art. 2715; CC art. 2719; R.S. 9:3258.1 |
| `edu-criminal-activity-eviction-la` | RECOMMENDED | `expedited-criminal-eviction` | C3 | CCP arts. 4701, 4731-4733; R.S. 9:3261.1; R.S. 15:1405; CCP art. 4701 |
| `edu-foreclosure-tenants-la` | CONDITIONAL | `foreclosure` | C4 | CCP art. 2372; R.S. 9:2721; CC arts. 2681.1, 2712; CCP art. 327 |
| `edu-lease-guaranty-la` | RECOMMENDED | `guarantor-renewal` | C4 | CC art. 3038; CC arts. 3042, 3044; CC arts. 2724, 2725; CC art. 3062 |
| `edu-homestead-waiver-la` | PROHIBITED | `homestead-waiver` | C4 | R.S. 20:1; R.S. 13:3881; Const. art. XII, § 9; R.S. 13:3851.1 |
| `edu-no-infirmity-termination-la` | RECOMMENDED | `infirmity-termination` | C4 | CC art. 2717; R.S. 9:3261; R.S. 9:3261.1; R.S. 9:3261.2 |
| `edu-landlord-remedies-la` | RECOMMENDED | `landlord-remedies-termination` | C4 | CC arts. 2704, 2013-2017; CCP arts. 4701-4735; CC arts. 1995, 2002; CC art. 2000 |
| `edu-no-forfeiture-relief-la` | RECOMMENDED | `forfeiture-redemption` | C4 | CC art. 2704; CC art. 1861; CC arts. 2013, 2014; CCP art. 4732 |
| `edu-no-redemption-right-la` | RECOMMENDED | `redemption` | C4 | CCP art. 4733; CCP art. 4735; CCP art. 4732; CC art. 1861 |
| `edu-stipulated-damages-la` | CONSTRAINED | `liquidated-damages` | C4 | CC arts. 2005, 2012; CC art. 2009; CC art. 2007; CC art. 2010 |
| `edu-no-landlord-self-cure-la` | RECOMMENDED | `landlord-self-cure` | C4 | CC arts. 2687, 2692; CC arts. 1986, 2686; CC art. 2693; CC art. 2692 |
| `edu-self-help-eviction-la` | PROHIBITED | `self-help-eviction` | C4 | CCP arts. 4701-4734; CC art. 2682; CC art. 2700; CCP art. 4731 |
| `edu-no-notice-fee-la` | RECOMMENDED | `notice-service-fee` | C4 | CCP art. 4701; CCP art. 1920; CC art. 2000; R.S. 9:3259 |
| `edu-nuisance-abatement-la` | CONDITIONAL | `nuisance` | C4 | R.S. 13:4711; R.S. 15:1405; CC arts. 2686, 2719; R.S. 9:3261.1 |
| `edu-post-eviction-property-la` | RECOMMENDED | `post-eviction-property` | C4 | CCP art. 4734; CC art. 3418; CC art. 3417; CC arts. 2707, 2710 |
| `edu-no-rent-into-court-la` | RECOMMENDED | `rent-into-court-counterclaim` | C4 | CCP art. 4732; CCP art. 4735; CCP art. 1061; CC arts. 1869-1871 |
| `edu-no-repair-cost-termination-la` | RECOMMENDED | `repair-cost-termination` | C4 | CC art. 2691; CC art. 2714; CC art. 2715; CC art. 2693 |
| `edu-no-retaliation-statute-la` | RECOMMENDED | `retaliation` | C4 | R.S. 51:2609; R.S. 9:3261.1; R.S. 33:9701; CC art. 2694 |
| `edu-no-seasonal-tenancy-rule-la` | RECOMMENDED | `seasonal-tenancy` | C4 | CC arts. 2678, 2720; CC arts. 2721, 2723; R.S. 21:61; CC art. 2678 |
| `edu-servicemember-rights-la` | REQUIRED | `servicemember-rights` | C4 | R.S. 9:3261; R.S. 29:315; R.S. 29:311; R.S. 37:3021 |
| `edu-no-benefit-delay-defense-la` | RECOMMENDED | `social-security-defense` | C4 | R.S. 9:3259.2; CCP art. 4732; CC art. 2013; R.S. 29:315 |
| `edu-statutory-early-termination-la` | CONSTRAINED | `statutory-early-termination` | C4 | R.S. 9:3261; R.S. 9:3261.1; R.S. 9:3261.2; CC arts. 2714, 2715 |
| `edu-no-tenancy-at-will-la` | RECOMMENDED | `tenancy-at-will` | C4 | CC arts. 2678-2681; CC arts. 2728-2729; CCP arts. 4702, 4704; CC art. 2678 |
| `edu-no-tenant-bankruptcy-rule-la` | RECOMMENDED | `tenant-bankruptcy` | C4 | R.S. 13:3881; CC art. 3046; CC art. 1782; R.S. 9:3241 |
| `edu-tenant-death-la` | RECOMMENDED | `tenant-death` | C4 | CC art. 2717; CC arts. 935, 1415; CC art. 3024; CCP arts. 3421, 3431-3434; 2026 Acts No. 293 |
| `edu-unauthorized-occupant-la` | CONDITIONAL | `unauthorized-occupant-removal` | C4 | CCP arts. 4702-4704, 4731-4734; R.S. 14:63; CCP art. 4702; CCP art. 4704 |
| `edu-waiver-by-acceptance-la` | RECOMMENDED | `waiver-by-acceptance` | C4 | CC art. 1888; CC art. 2721; CC art. 1861; CC arts. 1864-1868 |
| `edu-no-minor-eviction-rule-la` | RECOMMENDED | `minor-tenant-filing` | C4 | CCP arts. 4731, 4734; CCP art. 732; CC art. 29; CC arts. 1918, 1923, 1924 |
| `edu-no-actual-notice-rule-la` | RECOMMENDED | `actual-notice-method` | C4 | CC art. 2729; CCP arts. 4701, 4703; R.S. 9:2603; CCP art. 4701 |
| `edu-automatic-renewal-la` | CONDITIONAL | `automatic-renewal` | C4 | CC arts. 2720-2724; CC art. 2725; R.S. 9:2716; CC art. 2720; 2026 Acts No. 830 |
| `edu-lease-arbitration-la` | RECOMMENDED | `binding-arbitration` | C4 | R.S. 9:4201; R.S. 9:4202; CCP arts. 4701-4736; R.S. 56:700.12 |
| `edu-dv-law-citations-la` | RECOMMENDED | `dv-protection-order-chapter-moved` | C4 | R.S. 9:3261.1; R.S. 9:3261.2; R.S. 14:35.3; R.S. 14:40.2; 2026 Acts No. 724 |
| `edu-no-emergency-contact-la` | RECOMMENDED | `emergency-contact` | C4 | CC art. 2688; CC art. 2693; CC art. 2703; R.S. 33:9102 |
| `edu-no-energy-data-rule-la` | RECOMMENDED | `energy-data-release` | C4 | R.S. 33:4091; R.S. 17:407.101; R.S. 39:15.3; R.S. 12:430.1 |
| `edu-no-informal-dispute-rule-la` | RECOMMENDED | `informal-dispute-resolution` | C4 | R.S. 9:4103; CC arts. 2688, 2694; CC art. 1971; R.S. 51:1944 |
| `edu-no-landlord-registration-la` | RECOMMENDED | `landlord-registration` | C4 | R.S. 37:1438; R.S. 37:1437; CCP arts. 4701-4736; R.S. 9:3891; 2026 Acts No. 708 |
| `edu-no-lockout-statute-la` | PROHIBITED | `lockout-for-rent-delinquency` | C4 | CC art. 2704; CCP arts. 4701-4734; CC art. 2682; CCP art. 4731 |
| `edu-no-possession-bond-la` | PROHIBITED | `possession-bond` | C4 | CCP arts. 4701, 4731-4734; CCP art. 4735; CCP arts. 2631-2632; CCP art. 2631 |
| `edu-no-lease-completeness-rule-la` | RECOMMENDED | `lease-completeness` | C5 | CC arts. 2668, 2676; CC art. 2680; CC art. 2056; R.S. 9:3260.1 |
| `edu-no-lease-copy-rule-la` | RECOMMENDED | `lease-copy` | C5 | CC art. 2681; CC art. 2056; R.S. 9:2608; R.S. 2:135.1 |
| `edu-no-initials-requirement-la` | RECOMMENDED | `lease-notice-initial-requirement` | C5 | CC art. 2699; CC arts. 2718, 2728; R.S. 9:4758.1; CC art. 2718 |
| `edu-lease-term-limits-la` | CONSTRAINED | `lease-term-limitation` | C5 | CC art. 2679; CC art. 2678; CC arts. 2679, 2680; CC art. 2681.1 |
| `edu-no-lease-type-size-la` | RECOMMENDED | `lease-type-size` | C5 | CC art. 2699; R.S. 9:2716; CC art. 2056; R.S. 9:4758.1 |
| `edu-no-nonresident-agent-rule-la` | RECOMMENDED | `nonresident-owner-agent` | C5 | R.S. 13:3201; CCP art. 5091; R.S. 33:4765; R.S. 13:4724 |
| `edu-notice-delivery-la` | REQUIRED | `notice-delivery-methods` | C5 | CCP art. 4701; CCP art. 4703; CC art. 2729; R.S. 9:2605 |
| `edu-no-move-out-form-rule-la` | RECOMMENDED | `notice-to-vacate-additional-terms` | C5 | R.S. 9:3251; CC art. 2729; CC arts. 1927, 2726; CC art. 2056 |
| `edu-optional-lease-terms-la` | CONDITIONAL | `optional-lease-terms` | C5 | CC art. 2703; CC art. 2680; CC art. 2689; CC art. 2691 |
| `edu-no-plain-language-lease-law-la` | RECOMMENDED | `plain-language-consumer-statement` | C5 | CC arts. 2056, 2057; CC art. 2699; CC art. 2056; CC art. 2057 |
| `edu-no-renters-insurance-rules-la` | RECOMMENDED | `renters-insurance-rules` | C5 | CC art. 2004; CC art. 2687; R.S. 22:1550.1; R.S. 22:1894 |
| `edu-tenant-property-insurance-la` | RECOMMENDED | `tenants-property-insurance` | C5 | CC arts. 2691, 2692; CC art. 2004; CC art. 2699; CC art. 2691 |
| `edu-sale-or-management-change-la` | CONDITIONAL | `sale-or-management-change` | C5 | CC art. 2711; CC art. 2712; CC art. 2681.1; R.S. 9:2721; 2026 Acts No. 240 |
| `edu-portfolio-thresholds-la` | CONDITIONAL | `portfolio-thresholds` | C5 | R.S. 9:3261.1; R.S. 9:3258.1; R.S. 51:2604; R.S. 29:315; 2026 Acts No. 830 |
| `edu-lease-law-scope-la` | CONDITIONAL | `scope` | C5 | CC art. 2671; CC arts. 2672, 2680; R.S. 9:3251; CCP arts. 4701, 4702 |
| `edu-lease-writing-recording-la` | CONDITIONAL | `statute-of-frauds-lease-term` | C5 | CC arts. 2679, 2681; CC arts. 2681.1, 3338; R.S. 9:2742; CCP art. 4701 |
| `edu-statutory-forms-la` | CONDITIONAL | `statutory-forms` | C5 | R.S. 9:3260.1; R.S. 9:3261.1; R.S. 9:3261.2; R.S. 37:1469 |
| `edu-no-tenant-portal-rule-la` | RECOMMENDED | `tenant-portal` | C5 | R.S. 9:2605; R.S. 9:2608; R.S. 9:2603; CC art. 2703 |
| `edu-no-rent-ledger-duty-la` | RECOMMENDED | `tenant-records` | C5 | R.S. 9:3251; R.S. 9:3259; R.S. 10:9 |
| `edu-tenant-data-security-la` | REQUIRED | `tenant-records` | C5 | R.S. 51:3073; R.S. 51:3074; R.S. 51:3077; R.S. 51:3075 |
| `edu-no-term-change-notice-la` | RECOMMENDED | `term-change-notice` | C5 | CC arts. 1927, 2726; CC arts. 2728, 2729; CC art. 2726; CC art. 1927 |
| `edu-no-tenant-law-sunset-la` | RECOMMENDED | `tpa-sunset` | C5 | CC arts. 2668-2729; R.S. 9:3201; CCP arts. 4701-4736; R.S. 9:3261.1; 2026 Acts No. 63 |
| `edu-no-translation-duty-la` | RECOMMENDED | `translation-duty` | C5 | CC arts. 2056, 2057; CC arts. 1948, 1949; CC art. 2056; CC art. 2057 |
| `edu-written-notices-la` | REQUIRED | `written-notice-required` | C5 | CC art. 2729; CCP art. 4701; R.S. 9:3251; R.S. 9:3252 |
| `edu-no-animal-care-entry-right-la` | RECOMMENDED | `animal-care-access` | C5 | R.S. 14:102; CC art. 3024; R.S. 14:102.1; R.S. 3:2452 |
| `edu-no-pet-eviction-fact-sheet-la` | RECOMMENDED | `pet-eviction-fact-sheet` | C5 | R.S. 13:3881; R.S. 14:102.1; R.S. 56:6; R.S. 46:1972 |
| `edu-pet-fees-la` | CONSTRAINED | `pet-fees` | C5 | R.S. 9:3251; CC arts. 2675, 2676; R.S. 46:1954; R.S. 9:3254 |
| `edu-pet-policy-la` | RECOMMENDED | `pet-policy` | C5 | R.S. 13:3881; CC art. 2682; CCP arts. 4701-4734; R.S. 29:726 |
| `edu-service-dog-denial-penalty-la` | PROHIBITED | `service-animal-denial-penalty` | C5 | R.S. 46:1954; R.S. 46:1952; R.S. 46:1956; R.S. 46:1955 |
| `edu-service-animal-misrepresentation-la` | CONDITIONAL | `service-animal-misrepresentation` | C5 | R.S. 46:1974; R.S. 46:1977; R.S. 46:1978; R.S. 46:1975 |
| `edu-towing-la` | CONDITIONAL | `towing` | C5 | R.S. 32:1736; R.S. 32:1733; R.S. 32:1741; 2026 Acts No. 440 |
| `edu-parking-liability-la` | RECOMMENDED | `parking` | C5 | CC art. 2702; CC art. 2700; CC art. 2004; CC art. 2699 |
| `edu-storage-space-la` | RECOMMENDED | `storage-space` | C5 | R.S. 9:4757; CC arts. 2707, 2710; R.S. 13:3881; CC arts. 2004, 2699 |
| `edu-no-ev-charging-right-la` | RECOMMENDED | `ev-charging` | C5 | CC art. 2695; CC art. 2683; R.S. 45:1621; R.S. 32:461 |
| `edu-no-ev-charger-removal-rule-la` | RECOMMENDED | `ev-charging-end-of-tenancy` | C5 | CC art. 2695; R.S. 45:1621; R.S. 32:461; R.S. 51:3042 |
| `edu-no-ev-charging-requirements-la` | RECOMMENDED | `ev-charging-requirements` | C5 | CC art. 2683; R.S. 45:1621; R.S. 32:461; R.S. 51:3042 |
| `edu-no-ev-charging-shared-area-la` | RECOMMENDED | `ev-charging-shared-area` | C5 | CC art. 2690; R.S. 45:1621; R.S. 32:461; R.S. 51:3042 |
| `edu-no-parking-rules-notice-la` | RECOMMENDED | `parking-rules-notice` | C5 | R.S. 32:1736; 2026 Acts No. 440 |
| `edu-no-unbundled-parking-rule-la` | RECOMMENDED | `unbundled-parking` | C5 | R.S. 47:301.3; CC art. 2676 |
| `edu-no-cannabis-tenant-protection-la` | RECOMMENDED | `cannabis` | C5 | R.S. 40:1046; R.S. 40:966; R.S. 49:1016; R.S. 40:1046.2 |
| `edu-no-disaster-guest-rule-la` | RECOMMENDED | `disaster-displaced-guests` | C5 | CCP art. 4702; R.S. 33:4625; R.S. 40:600.32; R.S. 40:501 |
| `edu-firearms-la` | CONDITIONAL | `firearms` | C5 | R.S. 32:292.1; R.S. 40:1379.3; R.S. 17:3351; Const. art. I, § 11 |
| `edu-no-guest-rights-la` | RECOMMENDED | `guest-rights` | C6 | CC art. 2687; CC art. 2698; CCP arts. 4702, 4704; R.S. 9:3261.1 |
| `edu-law-enforcement-cooperation-la` | CONSTRAINED | `law-enforcement-cooperation` | C6 | R.S. 15:1312.1; R.S. 9:3261.1; R.S. 33:9701; R.S. 15:1316 |
| `edu-no-political-access-la` | RECOMMENDED | `political-access` | C6 | R.S. 18:1462 |
| `edu-no-portable-solar-right-la` | RECOMMENDED | `portable-solar` | C6 | R.S. 9:1255; CC art. 2695; R.S. 30:1161 |
| `edu-no-recycling-notice-la` | RECOMMENDED | `recycling-notice` | C6 | R.S. 30:2411; R.S. 30:2413 |
| `edu-us-flag-display-la` | CONSTRAINED | `tenant-display-rights` | C6 | R.S. 9:1114; R.S. 18:1462; R.S. 9:1141.37 |
| `edu-no-religious-display-la` | RECOMMENDED | `religious-cultural-display` | C6 | R.S. 51:2606; R.S. 51:2604 |
| `edu-property-rules-la` | RECOMMENDED | `rules-regulations` | C6 | CC art. 1983; CC art. 2683; CC art. 2686; CC art. 2726 |
| `edu-no-smoke-drift-waiver-la` | RECOMMENDED | `smoke-drift-waiver` | C6 | CC art. 2700; CC art. 2699; CC art. 2004; R.S. 40:1291.3 |
| `edu-no-tenant-camera-rule-la` | RECOMMENDED | `tenant-security-cameras` | C6 | R.S. 14:283; R.S. 15:1303; R.S. 21:61 |
| `edu-no-waterbed-rule-la` | RECOMMENDED | `waterbed` | C6 | CC arts. 2687, 2692; CC art. 2686 |
| `edu-association-rules-la` | RECOMMENDED | `hoa` | C6 | R.S. 9:1124.115; R.S. 9:1141.3; R.S. 9:1141.14; R.S. 9:1122.105 |
| `edu-no-association-disclosure-la` | RECOMMENDED | `association-obligations-disclosure` | C6 | R.S. 9:1124.107; R.S. 9:1141.20 |
| `edu-no-bed-bug-disclosure-la` | RECOMMENDED | `bed-bug-disclosure` | C6 | CC arts. 2682, 2684; CC art. 2699 |
| `edu-no-pest-control-notice-la` | RECOMMENDED | `pest-control-notice` | C6 | R.S. 3:3391.9 |
| `edu-lead-state-law-la` | CONDITIONAL | `lead-state-notices` | C6 | R.S. 40:1285.7; R.S. 40:1285.10; R.S. 40:1285.9; R.S. 40:1285.4 |
| `edu-no-lead-safe-certificate-la` | RECOMMENDED | `lead-safe-certification` | C6 | R.S. 40:1285.7 |
| `edu-no-meth-disclosure-la` | RECOMMENDED | `meth-disclosure` | C6 | R.S. 9:3198.1; R.S. 9:3198; CC art. 2699; R.S. 9:3197; 2026 Acts No. 708 |
| `edu-no-mold-disclosure-la` | RECOMMENDED | `mold-disclosure` | C6 | R.S. 37:1470; CC art. 2699; R.S. 37:2156.1 |
| `edu-no-radon-disclosure-la` | RECOMMENDED | `radon-disclosure` | C6 | CC art. 2699 |
| `edu-no-flood-disclosure-la` | RECOMMENDED | `flood-disclosure` | C6 | CC art. 2699; R.S. 22:1341 |
| `edu-no-owner-identity-disclosure-la` | RECOMMENDED | `owner-identity-disclosure` | C6 |  |
| `edu-no-occupancy-certificate-disclosure-la` | RECOMMENDED | `certificate-of-occupancy-disclosure` | C6 | CC art. 2684 |
| `edu-no-drywall-disclosure-la` | RECOMMENDED | `defective-drywall-disclosure` | C6 | CC art. 2699 |
| `edu-no-military-zone-disclosure-la` | RECOMMENDED | `military-air-zone-disclosure` | C6 | R.S. 33:4734; R.S. 33:4780.52 |
| `edu-no-ordnance-demolition-meter-disclosure-la` | RECOMMENDED | `ordnance-demolition-meter-disclosures` | C6 | Const. art. VI, § 21 |
| `edu-no-chemical-warning-la` | RECOMMENDED | `prop65-rental-warning` | C6 | CC art. 2699 |
| `edu-no-shoreline-disclosure-la` | RECOMMENDED | `shoreline-access-disclosure` | C6 |  |
| `edu-no-well-testing-la` | RECOMMENDED | `private-well-testing` | C6 | R.S. 40:5.4; CC art. 2699 |
| `edu-no-good-cause-notice-la` | RECOMMENDED | `good-cause-notice` | C6 |  |
| `edu-no-landlord-insurance-mandate-la` | RECOMMENDED | `landlord-liability-insurance` | C6 | CC art. 2004 |
| `edu-no-contamination-disclosure-la` | RECOMMENDED | `hazardous-contamination-disclosure` | C6 | R.S. 30:2286; CC art. 2699 |
| `edu-no-code-variance-notice-la` | RECOMMENDED | `sanitary-code-variance` | C6 |  |
| `edu-no-rights-guide-la` | RECOMMENDED | `rights-responsibilities-guide` | C6 |  |
| `edu-no-property-tax-statement-la` | RECOMMENDED | `property-tax-rent-disclosure` | C6 | Const. art. VII, § 20; R.S. 47:1710 |
| `edu-no-code-order-disclosure-la` | RECOMMENDED | `inspection-condemnation-disclosure` | C6 | R.S. 33:4762; R.S. 33:4770.9; CC art. 2699 |
| `edu-no-meter-conservation-charge-la` | RECOMMENDED | `meter-conservation-charge` | C6 |  |
| `edu-no-electric-submeter-disclosure-la` | RECOMMENDED | `electric-submetering-disclosure` | C6 |  |
| `edu-no-occupancy-presumption-notice-la` | RECOMMENDED | `sfr-occupancy-disclosure` | C6 |  |
| `edu-required-disclosures-la` | REQUIRED | `required-disclosures` | C6 | R.S. 9:3260.1; R.S. 37:1469; R.S. 9:3258.1; CC art. 2699; 2026 Acts No. 708 |
| `edu-no-portable-cooling-right-la` | RECOMMENDED | `portable-cooling-device` | C6 | CC arts. 2682, 2691, 2692; CC art. 2695; CC art. 2682; CC art. 2691 |
| `edu-stigmatized-property-la` | RECOMMENDED | `stigmatized-property` | C7 | R.S. 37:1468; R.S. 37:1431; CC arts. 1953, 1958; CC art. 1953; 2026 Acts No. 708 |
| `edu-employee-housing-la` | RECOMMENDED | `tenant-employee-housing` | C7 | CC arts. 2668, 2675; CC art. 2678; CCP art. 4701; CCP arts. 4702, 4704 |
| `edu-no-tenant-rights-statement-la` | RECOMMENDED | `tenant-rights-statement` | C7 |  |
| `edu-no-tpa-notice-la` | RECOMMENDED | `tpa-notice` | C7 |  |
| `edu-no-tpa-exemption-notice-la` | RECOMMENDED | `tpa-exemption-notice` | C7 |  |
| `edu-no-truth-in-renting-la` | RECOMMENDED | `truth-in-renting` | C7 | CC art. 7; R.S. 9:3254; R.S. 9:3261.1; CC art. 2056 |
| `edu-no-utility-disclosure-attachment-la` | RECOMMENDED | `utility-disclosure-attachment` | C7 |  |
| `edu-no-alarm-tampering-fee-la` | RECOMMENDED | `alarm-tampering-fee` | C7 | CC arts. 2687, 2692; CC arts. 2005, 2012; CC art. 2007; CC art. 2687 |
| `edu-no-asbestos-rule-la` | RECOMMENDED | `asbestos-hazards` | C7 | R.S. 40:1749.1; R.S. 30:2341; CC art. 2696; CC art. 2699 |
| `edu-no-sprinkler-disclosure-la` | RECOMMENDED | `sprinkler-disclosure` | C7 | R.S. 40:1646; R.S. 40:1646.2; 2026 Acts No. 881 |
| `edu-fire-sprinklers-la` | CONDITIONAL | `fire-sprinkler-duty` | C7 | R.S. 40:1642; R.S. 40:1646; R.S. 40:1730.28; R.S. 40:1578.6; 2026 Acts No. 881 |
| `edu-fire-code-la` | REQUIRED | `fire-code-standard` | C7 | R.S. 40:1578.7; R.S. 40:1578.6; R.S. 40:1730.28; R.S. 40:1563; 2026 Acts No. 881 |
| `edu-no-adu-rule-la` | RECOMMENDED | `accessory-dwelling-unit` | C7 | R.S. 33:4721; R.S. 33:4722; 2026 Acts No. 881 |
| `edu-no-balcony-inspection-la` | RECOMMENDED | `balcony-inspection` | C7 | CC arts. 2682, 2691; CC art. 2696; CC art. 2699; CC arts. 2317.1, 2322 |
| `edu-casualty-mitigation-waiver-la` | RECOMMENDED | `casualty-and-mitigation-waivable` | C7 | CC art. 2714; CC art. 2715; CC art. 2002; R.S. 9:3260 |
| `edu-children-occupancy-la` | PROHIBITED | `children-occupancy` | C7 | R.S. 51:2606; R.S. 51:2603; R.S. 51:2605; R.S. 51:2604 |
| `edu-no-confession-of-judgment-la` | PROHIBITED | `confession-of-judgment` | C7 | R.S. 9:3590; CCP arts. 2631, 2632, 2635; CCP art. 2631; CCP art. 2632 |
| `edu-consumer-protection-act-la` | PROHIBITED | `consumer-protection-act` | C7 | R.S. 51:1405; R.S. 51:1402; R.S. 51:1409; R.S. 51:1407 |
| `edu-no-dv-confidentiality-rule-la` | RECOMMENDED | `dv-confidentiality` | C7 | R.S. 9:3261.1; R.S. 9:3261.2; R.S. 44:52; R.S. 44:57 |
| `edu-emergency-assistance-right-la` | PROHIBITED | `emergency-assistance-right` | C7 | R.S. 9:3261.1; R.S. 33:9701 |
| `edu-no-eviction-penalty-rule-la` | RECOMMENDED | `eviction-penalty-clause-ban` | C7 | CC art. 2000; R.S. 9:3259; CC arts. 2005, 2007, 2012; CC art. 2056 |
| `edu-exculpatory-clauses-la` | PROHIBITED | `exculpatory-clauses` | C7 | CC art. 2004; CC art. 2699; R.S. 9:3221; CC art. 2056 |
| `edu-fair-housing-la` | PROHIBITED | `fair-housing` | C7 | R.S. 51:2601; R.S. 51:2603; R.S. 51:2606; R.S. 51:2609 |
| `edu-foreign-adversary-leasing-la` | CONDITIONAL | `foreign-ownership` | C7 | R.S. 9:2717.1; R.S. 9:2717.1.2; R.S. 9:2717.1.3; R.S. 9:2717.1.4; 2026 Acts No. 845 |
| `edu-code-editions-la` | RECOMMENDED | `frozen-standard-incorporation` | C7 | R.S. 40:1730.28; R.S. 40:1578.7; R.S. 40:1578.6; R.S. 40:1643; 2026 Acts No. 881 |
| `edu-government-fines-la` | CONSTRAINED | `governmental-fines` | C7 | CC art. 2689; CC art. 2687; CC arts. 2682, 2691; CC art. 2699 |
| `edu-immigration-status-la` | RECOMMENDED | `immigration-status` | C7 | R.S. 14:112.11; R.S. 51:2606; R.S. 51:2604; CC art. 2315.12 |
| `edu-no-jury-waiver-rule-la` | RECOMMENDED | `jury-waiver` | C7 | CCP arts. 1732, 4871; CCP art. 1733; CC art. 2056; CCP art. 1732 |
| `edu-no-knowing-use-penalty-la` | RECOMMENDED | `knowing-use-penalty` | C7 | CC art. 7; R.S. 9:3254; R.S. 9:3261.1; R.S. 9:3252 |
| `edu-prohibited-lease-terms-la` | PROHIBITED | `prohibited-lease-terms` | C7 | CC art. 7; R.S. 9:3254; R.S. 9:3261; R.S. 9:3261.1 |
| `edu-no-source-of-income-protection-la` | RECOMMENDED | `source-of-income` | C7 | R.S. 51:2606; R.S. 9:3259.2; R.S. 51:2236; R.S. 51:2604 |
| `edu-lease-content-requirements-la` | RECOMMENDED | `lease-content-requirements` | C7 | CC art. 2681; CC art. 2668; CC art. 2680; R.S. 9:3259; 2026 Acts No. 240 |
| `edu-no-general-nonwaiver-rule-la` | RECOMMENDED | `part5-nonwaivable` | C7 | CC art. 7; R.S. 9:3254; R.S. 9:3261; CC art. 2718 |
| `edu-no-pool-safety-rule-la` | RECOMMENDED | `pool-safety` | C7 | R.S. 33:4875.1; CC arts. 2682, 2696; CC art. 2317.1; CC art. 2004 |
| `edu-no-protected-class-inquiry-ban-la` | RECOMMENDED | `protected-class-inquiry-ban` | C7 | R.S. 51:2606; R.S. 51:2604 |
| `edu-severability-la` | RECOMMENDED | `severability` | C7 | CC art. 2034; R.S. 9:3254; R.S. 9:3261.1; CC art. 2006 |
| `edu-sex-offender-occupancy-la` | RECOMMENDED | `sex-offender-occupancy` | C7 | R.S. 14:91.1; R.S. 14:91.2; R.S. 15:542.1; R.S. 9:3258.1 |
| `edu-no-single-family-zone-lease-limit-la` | RECOMMENDED | `single-family-zone-lease-limit` | C7 | R.S. 33:4721; R.S. 9:3258; R.S. 33:4722 |
| `edu-no-radiator-cover-rule-la` | RECOMMENDED | `steam-radiator-covers` | C7 | CC arts. 2682, 2691, 2696; CC art. 2699; CC arts. 2682, 2691, 2696, 2699 |
| `edu-no-subsidy-inspection-rule-la` | RECOMMENDED | `subsidized-inspection-refusal` | C7 | R.S. 9:3259.2; R.S. 51:2606; R.S. 51:2604 |
| `edu-no-tenant-info-disclosure-rule-la` | RECOMMENDED | `tenant-confidential-information` | C7 | R.S. 40:526 |
| `edu-no-tenant-organizing-right-la` | RECOMMENDED | `tenant-right-to-organize` | C7 | R.S. 40:457; R.S. 51:2609 |
| `edu-tenant-screening-la` | CONSTRAINED | `tenant-screening` | C7 | R.S. 9:3258.1; C.Cr.P. art. 973; R.S. 51:2606; R.S. 9:3571.1 |
| `edu-no-unconscionability-statute-la` | RECOMMENDED | `unconscionability` | C7 | R.S. 9:3551; CC arts. 1759, 1983; CC art. 7; CC art. 2004 |
| `edu-no-veterans-incentive-la` | RECOMMENDED | `veterans-incentive` | C7 | R.S. 51:2603; R.S. 46:122 |
| `edu-no-water-heater-rule-la` | RECOMMENDED | `water-heater-temperature` | C7 | CC arts. 2682, 2691, 2696; CC art. 2699; CC arts. 2682, 2691, 2696, 2699 |
| `edu-no-window-guard-rule-la` | RECOMMENDED | `window-guards` | C7 | CC arts. 2682, 2691, 2696; CC art. 2699; CC arts. 2682, 2691, 2696, 2699 |
| `edu-plain-language-la` | RECOMMENDED | `plain-language` | C7 | CC arts. 2056, 2057; CC art. 2056; CC art. 2057; CC art. 2699 |
| `edu-usufructuary-lessor-la` | RECOMMENDED | `usufructuary-lessor` | extra | CC arts. 567, 2716; CC art. 2716; CC arts. 568, 568.2; CC art. 567 |
| `edu-no-stove-refrigerator-la` | RECOMMENDED | `stove-refrigerator` | extra | CC arts. 2682, 2691, 2696; CC art. 2696 |
| `edu-no-drug-free-addendum-la` | RECOMMENDED | `drug-free-housing-addendum` | extra | R.S. 9:3261.1; R.S. 33:9701; C.Cr.P. art. 320 |
| `edu-cure-and-eviction-grounds-la` | RECOMMENDED | `cure-and-eviction-grounds` | extra | CC art. 2704; CC art. 2017; CC arts. 2015, 2719; CCP art. 4701 |
| `edu-confirmed-absences-misc-la` | RECOMMENDED | `confirmed-absences-misc` | extra | CC art. 2682; CC art. 2681.1; CC art. 2699; R.S. 40:1581; 2026 Acts No. 240 |
| `edu-confirmed-absences-outside-title-la` | RECOMMENDED | `confirmed-absences-outside-title` | extra | CCP art. 4702 |
| `edu-security-deposit-penalty-la` | RECOMMENDED | `security-deposit-penalty` | extra | R.S. 9:3252; R.S. 9:3251; R.S. 9:3253; R.S. 9:3254 |
| `edu-habitability-modifiable-la` | RECOMMENDED | `habitability-modifiable` | extra | CC art. 2699; R.S. 9:3221; CC art. 2004 |
| `edu-nonpayment-notice-la` | RECOMMENDED | `nonpayment-notice` | extra | CC art. 2704; CCP art. 4701; R.S. 9:2603 |
| `edu-adverse-proceeding-notice-la` | RECOMMENDED | `adverse-proceeding-notice` | extra | CC art. 2688; CC art. 2700 |

### §3.3 Shared rows changed (54)
Each changed only in `states` (";LA" appended), `notes` (an " | LA: ..." segment appended) and `last_checked` (2026-10-19); checked by script against the master (§8).

## §4 Layout and placement table (rule 40)
**Batteries.** The second-run formatting batteries were run in Step C over the whole corpus. Where the first run's positive failed on the context limb (rule 19), they were rerun without a tenancy limb and with one. The summary lines are in the battery log:

| Battery | Hits |
|---|---|
| LA-F-BOLD-02 | 66 |
| LA-F-BOLD-03 (lease-word context) | 8 |
| LA-F-UNDERLINE-02 | 3 |
| LA-F-UNDERLINE-03 | 0 |
| LA-F-CAPS-02 | 20 |
| LA-F-CAPS-03 | 4 |
| LA-F-CONSPIC-02 | 287 |
| LA-F-CONSPIC-03 | 51 |
| LA-F-TYPESIZE-02 | 95 |
| LA-F-TYPESIZE-03 | 14 |
| LA-F-SEPDOC-02 | 44 |
| LA-F-SEPDOC-03 | 9 |
| LA-F-FORM-02 | 114 |
| LA-F-FORM-03 | 24 |
| LA-F-FORM-04 | 14 |

Every lease-context hit was read by chapter (rule 40).

| Rule | Where | Applies to residential leases? | Library handling |
|---|---|---|---|
| Waiver of the warranty against vices or defects must be "clear and unambiguous" and "brought to the attention of the lessee" | La. Civ. Code art. 2699 | Yes (placement and emphasis, no type size) | `warranty-waiver-la` and `appliances-excluded-la` are separate sections, and each carries a tenant-initials line |
| Automatic-renewal term "clear and conspicuous"; Click-to-Cancel disclosure next to the signature from 1/1/27 (businesses with 50+ employees and $5M+) | La. R.S. 9:2716; 2026 Act 830 (R.S. 51:3302) | Unsettled whether a lease is covered; rows advise compliance | `automatic-renewal-la` is a separate section, set off; `edu-automatic-renewal-la` |
| Sex-offender database notice "shall contain" in leases a licensee executes | La. R.S. 37:1469 | Yes (content only; no format) | `sex-offender-registry-notice-la` |
| Waiver of the notice to vacate must be a "written waiver contained in the lease" | La. Code Civ. Proc. art. 4701 | Yes (content and place: inside the lease) | `notice-to-vacate-waiver-la` |
| Domestic-abuse termination forms set out in full | La. R.S. 9:3261.1, 9:3261.2 | Forms are the tenant's notice, not lease text | `edu-dv-lease-termination-la`, `edu-dv-qualifying-documents-la` |
| Bold, capitals and type-size rules in insurance, timeshare, consumer-credit, self-storage and lead-paint labelling | La. R.S. 22:1346, 9:1131.2, 9:3136, 9:4758.1, 40:1285.6 and others | No: other chapters | none |

No rule gives a residential lease a type size, a bold or capitals requirement, or a separate-document requirement for any of its terms. Nothing competes for the first page or the signature block except the Click-to-Cancel disclosure (from 1/1/27, covered businesses only), so no ordering question arose for Taylor.

## §5 Dormant rows resolved (rule 25)
None. No row in the library was tagged LA or carried an `-la` id before this pass, dormant or active (Step A, §1.1).

## §6 Decisions
### §6.1 Optional clauses (rule 54)
Every offered clause opens "[Optional.]" (with a use note where it applies only to some properties) and is never a default. Every lawful option the library declines has an education row saying it is lawful or unsettled, why it is not offered, and that a landlord may add its own clause after taking advice (rule 54). Before the independent check, `edu-optional-lease-terms-la` was re-read item by item against this list ([NH 2]).

**Offered (39):**

| Clause | Found by | Why lawful |
|---|---|---|
| `notice-to-vacate-waiver-la` | main pass | Written waiver of the notice to vacate inside the lease (La. Code Civ. Proc. art. 4701); keeps federally required notice. |
| `holdover-rate-la` | main pass | Stipulated holdover charge (La. Civ. Code arts. 2005-2012), not stacked with rent or after a nonpayment dissolution. |
| `casualty-termination-la` | main pass | Landlord termination after casualty reserved under La. Civ. Code art. 2718, with art. 2728 notice. |
| `criminal-activity-la` | main pass | Express dissolution for listed criminal activity (La. Civ. Code art. 2017), with La. R.S. 9:3261.1 and 33:9701 carve-outs. |
| `lessee-assumes-condition-la` | main pass | Lessee assumes responsibility for the premises (La. R.S. 9:3221). |
| `warranty-waiver-la` | main pass | Limited waiver of the warranty against vices for listed conditions (La. Civ. Code art. 2699). |
| `usufructuary-lessor-la` | main pass | Disclosure of the lessor's usufructuary status (La. Civ. Code arts. 567, 568.2, 2716); statute walk. |
| `government-fee-reimbursement-la` | C1 / `government-fee-reimbursement` | CC 2689 is a default rule with no bar on contrary agreement; CC 1971 freedom of contract; reimbursement of a stated fee is determinable (CC 2676; main-pass ruling on pass-throughs); excludes property tax, fines and emergency-response fees (R.S. 33:9701(E)). |
| `rent-escalation-la` | C1 / `rent-escalation` | Fixed schedule (certain) or published-index formula (determinable) under CC 2676/1971 and main-pass ruling. |
| `tax-insurance-escalation-la` | C1 / `tax-escalation` | Objective pass-through formula is determinable (CC 2676, main-pass ruling); CC 2689 suppletive on Claude reading; stated share, documentation, refund of reductions. |
| `unpaid-amounts-interest-la` | C1 / `unpaid-damages-interest` | CC 2000 allows agreed interest; R.S. 9:3500(C)(1) caps written conventional interest at 12%; excludes rent to avoid stacking with late fee. |
| `move-out-notice-la` | C1 / `deposit-surrender-notice` | Lease may require move-out notice (CC 1971); R.S. 9:3251(C) turns on notice as required; no deposit right waived. |
| `furnishings-included-la` | C1 / `furnishings-included` | Records lessor-provided furnishings and restates Civil Code return/damage/notice duties; no separate deposit. |
| `prompt-payment-discount-la` | C1 / `late-fee` | Lawful agreed rent reduction for early payment (CC 2676, 1971); no stacking with late fee; modest amount advised (CC 2012). |
| `improvements-ownership-la` | C2 / `alterations` | CC 2695 applies only 'In the absence of contrary agreement'; the lease may provide that improvements pass to the lessor without reimbursement or certified-mail appropriation notice. |
| `pest-cooperation-la` | C2 / `bed-bug-cooperation` | No statute governs pests or entry; reporting and fault-based cost allocation track CC 2688, 2691, 2692; entry by agreement under CC 1971. |
| `carpet-cleaning-la` | C2 / `carpet-cleaning` | No statute bars a lease obligation to clean carpets (CC 1971); conditioned on pre-tenancy cleaning so it matches the return-in-same-condition duty (CC 2683); deposit retention limited to reasonable cost under R.S. 9:3251(A). Flagged that a court could see it as charging for normal wear (case law not searched). |
| `no-liens-la` | C2 / `construction-liens` | R.S. 9:4806(B)-(C) already protects the lessor; the clause keeps alteration consent from being read as an express written agreement to be liable and makes the tenant clear filings (CC 1971). |
| `tenant-repairs-la` | C2 / `tenant-repair-agreement` | CC 2691 lets the lessee be responsible for repairs by agreement (CC 1971); clause excludes structural, major-system and health-or-safety items and preserves the warranty, so CC 2699 is not engaged. |
| `appliances-excluded-la` | C2 / `appliances-excluded` | Parties define the leased thing (CC 2668); exclusion drafted to meet CC 2699's clear-language and attention requirements and carve out known, health-or-safety and CC 2004 matters. |
| `scheduled-services-entry-la` | C3 / `periodic-services-entry` | No Louisiana entry statute; contractual entry for scheduled services is binding (art. 1983) and the stated schedule and notice respect art. 2682. |
| `showing-notice-la` | C3 / `showing-notice-waiver` | No Louisiana entry statute; the lease may set a shorter showing notice (art. 1983) limited in time and hours (art. 2682). |
| `abandoned-property-la` | C3 / `abandoned-property` | No statute governs property left behind in a home; clause applies only after lawful possession (CCP 4731), gives notice and claim period, no self-help sale for rent, keeps CC 2004 liability; agreed abandonment satisfies CC 3418. |
| `attorney-fees-fixed-la` | C3 / `attorney-fees` | CC 2000 enforces a written, express fee 'in a fixed or determinable amount' for money obligations; no statutory cap found; landlord-chosen figure; limited to money claims so the default clause's two-way rule governs evictions. |
| `rent-acceleration-la` | C4 / `landlord-remedies-termination` | Lawful on the statutes as an alternative to dissolution (CC 1983, 2007, 2018); structured on the non-cumulation model of R.S. 9:3318(A)(2)/9:3319(C); paper notice per R.S. 9:2603(B)(4)(b)(ii); fixed term only; case-law questions stated in notes. |
| `landlord-self-cure-la` | C4 / `landlord-self-cure` | Contract term enforcing the lessee duty of CC 2692 (CC 1971, 1994); cost not rent; entry via the access clause. |
| `owner-move-in-reservation-la` | C4 / `owner-move-in-reservation` | Reserved termination right lawful under CC 2718; notice the longer of the lease or CC 2727-2729; fixed term only. |
| `tenant-death-termination-la` | C4 / `tenant-death` | Reserved termination on a sole tenant's death, lawful under CC 2678/2718; mutual; fixed term only. |
| `tenant-death-contact-la` | C4 / `tenant-death` | Notice-only contact; CC 3024 bars post-death authority. |
| `nonwaiver-acceptance-la` | C4 / `waiver-by-acceptance` | Lawful contract term (CC 1971); keeps CC 1861 exception and CC 1864 imputation; supports opposition under CC 2721. |
| `automatic-renewal-la` | C4 / `automatic-renewal` | Meets R.S. 9:2716 disclosure and Act 830 (term <= 12 months, conspicuous, e-mail cancel, reminder); rent fixed per CC 2676. |
| `animal-care-access-la` | C5 / `animal-care-access` | No entry statute; lease sets entry; consent to limited entry by a named caretaker while tenant alive; ends at death (CC 3024). |
| `ev-charger-installation-la` | C5 / `ev-charging` | No EV statute; CC 2695 lets the lease set the end-of-lease outcome; consent under CC 2690/2683; electricity resale left to PSC rules (not searched). |
| `firearm-rules-la` | C5 / `firearms` | No statute limits discharge/storage terms; preserves R.S. 32:292.1 vehicle storage. |
| `us-flag-display-la` | C6 / `tenant-display-rights` | R.S. 9:1114(B) lets the lessor set reasonable size, time, place and manner rules; clause states the landlord's rules and disclaims other restrictions. |
| `mold-pamphlet-la` | C6 / `mold-disclosure` | R.S. 37:1470(A)(2) times optional licensee delivery at or before lease signing; acknowledgment records it; no limit on owner warranty. |
| `employee-housing-la` | C7 / `tenant-employee-housing` | A lease term may end on a designated event (CC 2678) and rent may be services (CC 2675); the clause keeps the CCP 4701 notice to vacate. |
| `detector-care-la` | C7 / `alarm-tampering-fee` | Actual-cost recovery and care duties rest on CC 2683, 2687, 2688, 2692. |
| `government-fines-reimbursement-la` | C7 / `governmental-fines` | CC 2689 is suppletive; CC 1971 freedom of contract; scope limited to tenant-caused violations with lessor-duty and emergency-call carve-outs. |

**Declined (50):**

| Option | Found by | Why not offered |
|---|---|---|
| `edu-no-nonrefundable-deposit-la` | main pass | Nonrefundable deposit (La. R.S. 9:3251(A), 9:3254). |
| `edu-rent-escalation-la` | main pass | Unilateral mid-term market rent reset (La. Civ. Code art. 2676). |
| collection-fee-la (not drafted) | C1 / `collection-fee` | CC 2000 measures delay damages on money by interest only (plus written fixed/determinable attorney fees); enforceability of a stipulated collection fee is a case-law question not searched. |
| additional-rent-la (not drafted) | C1 / `fees-as-rent` | Not needed for eviction/dissolution in LA (CCP 4701, CC 2719) and would conflict with default-by-tenant-la's late-fee carve-out; federal subsidy rules restrict. |
| rent-concession-recapture-la (not drafted) | C1 / `rent-concession` | Full clawback on default is stipulated damages reducible in proportion to partial performance (CC 2011) and modifiable if manifestly unreasonable (CC 2012); case law not searched. |
| midterm-market-rent-increase-la (not drafted) | C1 / `rent-escalation` | Main-pass ruling: lessor-reset market rent doubtful under CC 2676 (and CC 1770). |
| deposit-forfeiture-unclaimed-la (not drafted) | C1 / `deposit-escheat` | R.S. 9:3254 voids waivers; UUPA requires reporting; dormancy charge only per R.S. 9:157. |
| deposit-cost-schedule-la (not drafted) | C1 / `deposit-cost-schedule` | Flat preset deductions exceed what is reasonably necessary (R.S. 9:3251(A)); waiver null (R.S. 9:3254). |
| deposit-forfeiture-on-abandonment-la (not drafted) | C1 / `deposit-surrender-notice` | Stipulated-damages forfeiture reducible (CC 2011-2012); conflicts with main-pass nonrefundable-deposit ruling; pending main-pass decision. |
| nonrefundable-fee-la (not drafted) | C1 / `nonrefundable-deposit-notice` | Main-pass ruling: nonrefundable deposits unavailable (R.S. 9:3251/3254); disguised-deposit risk for nonrefundable fees is unsearched case law. |
| (pre-set deposit charge schedule) | C2 / `security-deposit-use` | Retention is limited to what is 'reasonably necessary' (La. R.S. 9:3251(A)) and waiver is null (La. R.S. 9:3254); whether stipulated damages (arts. 2005-2012) can override that is case law not searched. Recorded in `edu-no-deposit-cost-schedule-la` (merged). |
| (child care permission and conditions) | C2 / `family-child-care` | No statute frames it; a lessor who allows child care can consent in writing with its own conditions. Recorded in `edu-no-family-child-care-rule-la`. |
| (designated repairer for tenant repairs under CC 2694) | C2 / `designated-repairer` | Whether a lease may limit the CC 2694 remedy is case law not searched; a narrowing term is construed against the drafter (CC 2056). Recorded in `edu-no-designated-repairer-rule-la`. |
| (disability-modification restoration condition clause) | C2 / `disability-accommodation` | R.S. 51:2606(A)(6)(c)(i) allows the condition only 'where it is reasonable to do so', a case-by-case judgment made when a modification is requested; stated in `edu-disability-modifications-la` and this row. |
| (lease authorization for housing-inspector entry) | C3 / `rental-inspection` | No Louisiana statute gives a lease-granted consent to government inspector entry legal effect; R.S. 3:3391.9 ties entry to the lessee's consent or a court order; La. Const. art. I, § 5 and case law on advance consent not researched. |
| (opt-in landlord cutoff of untransferred utilities) | C3 / `utility-transfer` | No Louisiana statute permits a landlord to interrupt service to a tenant in possession; conflicts with La. Civ. Code art. 2682; self-help case law not searched. |
| (environmental-event landlord termination) | C3 / `environmental-event-termination` | Lawful if reserved with art. 2718 notice, but overlaps casualty-termination-la; main pass may widen that clause's trigger. |
| (lease-designated agent to accept eviction papers) | C3 / `eviction-service-party` | Only possible as a mandate (CCP 1235), revocable at any time (CC 3025) and ended by death (CC 3024); risk of defective service. |
| (deposit forfeiture on early vacating) | C3 / `abandonment-and-mitigation` | Stipulated damages cannot stack with rent (CC 2007), reducible for partial performance (CC 2011); deposit waivers null (R.S. 9:3254); main-pass ruling round 2. |
| (guarantor renewal coverage clause) | C4 / `guarantor-renewal` | A lease term between lessor and lessee cannot extend a surety's undertaking, which must be express and in the surety's own writing (CC 3038); recorded in edu-lease-guaranty-la. |
| (homestead waiver clause) | C4 / `homestead-waiver` | Homestead covers only an owner-occupied home; waiver needs a signed writing, spouse signature and recordation (R.S. 20:1(D)). |
| (movable exemption waiver clause) | C4 / `homestead-waiver` | R.S. 13:3881 provides no waiver; exemptions apply under any writ. |
| (care-facility early termination clause) | C4 / `infirmity-termination` | Lawful under CC 2718 but a tenant concession, not landlord-serving; early-termination-ks (planned LA tag) gives a paid exit. |
| (liquidated damages on default clause) | C4 / `liquidated-damages` | Overlaps rent/damages and acceleration; CC 2007 bars stacking; reasonableness under CC 2012 is case law. |
| (notice-service fee clause) | C4 / `notice-service-fee` | Rent-delay damages limited to interest and written attorney fees (CC 2000); no officer service needed (CCP 4701); consistent with edu-no-collection-fee-la. |
| (post-eviction or abandoned-property disposal clause) | C4 / `post-eviction-property` | No statutory basis; abandonment needs the owner's intent (CC 3418); exempt property and pets (R.S. 13:3881, CC 3417). |
| (bankruptcy as default clause) | C4 / `tenant-bankruptcy` | Federal enforceability of ipso facto default clauses not reviewed. |
| (contact with post-death removal/deposit authority: NM, TX, OK, HI, IN, VA leads) | C4 / `tenant-death` | Mandate ends at death (CC 3024); succession controls (CC 935); lease survives (CC 2717). |
| (no-attornment sentence from tenant-notice-of-adverse-proceeding-nd) | C4 / `adverse-proceeding-notice` | No Louisiana attornment statute; after a transfer or sheriff's sale the transferee may become the lessor (CCP 4704 "Lessor" includes transferee; CC 2711-2712; R.S. 9:2721(B)), so barring the tenant from recognizing anyone but Landlord without consent could mislead. |
| (binding arbitration clause) | C4 / `binding-arbitration` | Lawful (R.S. 9:4201) but could stay a summary eviction (9:4202); enforceability against residential tenants unsettled. |
| (energy data release consent clause) | C4 / `energy-data-release` | No Louisiana benchmarking duty or release statute; utility consent forms govern. |
| (informal dispute resolution clause) | C4 / `informal-dispute-resolution` | No statutory basis or carve-out; would delay summary eviction. |
| (opt-in lockout for delinquent rent) | C4 / `lockout-for-rent-delinquency` | Possession may be regained only in the manner provided by law (CC 2704; CCP 4701-4734); lockout breaches CC 2682(3). |
| (possession bond / confessed judgment clause) | C4 / `possession-bond` | No statutory basis; eviction procedure not replaceable by contract beyond the CCP 4701 waiver. |
| (LA version of tenants-property-insurance-mn exculpation) | C5 / `tenants-property-insurance` | CC 2004 and 2699 allow only a narrow release (not intentional/gross fault, physical injury, known/should-have-known defects, residential health-or-safety defects); overlaps warranty-waiver-la; exculpation case law not searched. |
| (termination-on-sale clause) | C5 / `sale-or-management-change` | Act 240 struck art. 2711's 'unless the contrary had been agreed'; the comment calls the rule suppletive, but the right would be an art. 2718 reserved termination; case law not searched. |
| (LA version of parking-mn exculpation) | C5 / `parking` | Lawful only within CC 2004/2699 limits; overlaps warranty-waiver-la; exculpation case law not searched; CC 2702 already allocates third-party theft. |
| (LA version of storage-space-mn exculpation) | C5 / `storage-space` | Same as parking: CC 2004/2699 limits, overlap with warranty-waiver-la, case law not searched. |
| (in-home firearm possession ban) | C5 / `firearms` | No statute bars it, but Const. art. I, sec. 11 strict-scrutiny effect on private leases and case law not searched. |
| (unilateral rule-change clause, as in rules-ia) | C6 / `rules-regulations` | No Louisiana statute authorizes a lessor-reserved rule change; enforceability under CC 1770, 1983 and 2056 is a case-law question not searched; the planned rules-wi tag (consent-based) is the LA clause. |
| (smoke-drift waiver, as in smoke-drift-waiver-ut) | C6 / `smoke-drift-waiver` | CC 2700 (residential warranty covers co-tenant disturbance), CC 2699(3) (health/safety defects not waivable) and CC 2004 (physical-injury exclusions null) would void much of it; no statute authorizes it. |
| (waterbed insurance clause, as in flotation-bedding-fl) | C6 / `waterbed` | Lawful contract term, but the consent rule in the planned common-area-use tag already lets the landlord condition consent on insurance. |
| (fixed detector-tampering fee) | C7 / `alarm-tampering-fee` | Lawful in principle as stipulated damages (CC 2005, 2012), but no figure is fixed by law or searched authority and CC 2007 bars demanding both the fee and the repair cost. |
| (waiver of tenant casualty rights, CC 2715) | C7 / `casualty-and-mitigation-waivable` | No express bar, but enforceability turns on unsearched case law under CC 7 and the CC 2699 limits. |
| (waiver of lessor mitigation duty) | C7 / `casualty-and-mitigation-waivable` | CC 2002 and the mandatory wording of R.S. 9:3260; enforceability is a case-law question not searched. |
| (authentic-act lease with confession of judgment for executory process) | C7 / `confession-of-judgment` | Executory process is designed for mortgages and privileges; its use for a residential lessor privilege is a case-law question not searched; sequestration is the established route. |
| (flat eviction fee) | C7 / `eviction-penalty-clause-ban` | Stipulated damages that cannot stack with performance (CC 2007) and may be cut if manifestly unreasonable (CC 2012); fees recoverable only under CC 2000. |
| (general release / tenant indemnity for lessor fault) | C7 / `exculpatory-clauses` | CC 2004 and 2699 leave room only for a narrow release that overlaps warranty-waiver-la; case law not searched. |
| (tenant certification of non-adversary status) | C7 / `foreign-ownership` | No lessor duty or liability (R.S. 9:2717.1(A)(5), (E); 9:2717.1.7); reliance rule is for an affidavit; national-origin discrimination risk. |
| (jury-waiver clause) | C7 / `jury-waiver` | Juries are rarely available in lease disputes (CCP 1732, 4871); enforceability in a standard form is a case-law question not searched. |

**Item-by-item check of `edu-optional-lease-terms-la` ([NH 2]).** Each right the row says the lease decides has a clause that uses it for the landlord:

| Right the lease decides | Clause that uses it |
|---|---|
| Rent time and place (art. 2703) | `rent-payment` |
| Term (art. 2680) | The builder's start and end dates |
| Taxes and charges (art. 2689) | `government-fee-reimbursement-la`, `tax-insurance-escalation-la`, `government-fines-reimbursement-la` |
| Repairs and condition (art. 2691; R.S. 9:3221) | `tenant-repairs-la`, `lessee-assumes-condition-la` |
| Improvements (art. 2695) | `improvements-ownership-la` |
| Sublease (art. 2713) | `no-sublet-assign` |
| Solidarity (art. 1796) | `joint-liability-la` |
| Interest and fees (art. 2000) | `unpaid-amounts-interest-la`, `attorney-fees-fixed-la` |
| Express dissolution (art. 2017) | `default-by-tenant-la`, `criminal-activity-la` |
| Waiver of the notice to vacate (art. 4701) | `notice-to-vacate-waiver-la` |
| Warranty limits (art. 2699) | `warranty-waiver-la`, `appliances-excluded-la` |
| Early termination (art. 2718) | `early-termination-ks`, `owner-move-in-reservation-la`, `tenant-death-termination-la`, `casualty-termination-la`, `employee-housing-la` |

No right was left without a clause.

### §6.2 Questions asked of Taylor (rule 76)
1. **Browser use** (Step A, recommendation "Yes"): Taylor chose "Yes (Recommended)". That approved:
   - the live match (§1.1);
   - reading the 2025-26 acts and the citator (§1.2);
   - fetching court rules, administrative code, Attorney General guides or a real lease where a row depends on one (the NOMAR lease and the Attorney General's guide, §15; Orleans First City Court guidelines read by summary only, §1.3).

No other question was needed. The remaining calls were legal or drafting judgments (§6.3), or decisions the SOP and earlier library decisions settle (one curated answer per topic, rule 6; caps and statutory duties are education rows, rule 55).

### §6.3 Legal and drafting judgments (rule 76; made, not asked)
- **Notice-to-vacate counting:** five days excluding weekends and legal holidays (La. Code Civ. Proc. art. 5059(C)(3); La. R.S. 1:55(E)(3)). This is the cautious course; case law was not searched.
- **CCP art. 4731(C)(2) penalty** ($500 or twice the rent): it sits in the disaster-parish paragraph but says "this Article", so rows tell landlords to assume it applies anywhere.
- **Suppletive lease articles:** the allocation articles (arts. 2689, 2691-2694) and the casualty articles (arts. 2714-2715) may be varied by the lease, because they are not public-order laws under art. 7. The lessor's casualty termination is a right reserved under art. 2718 with art. 2728 notice. `casualty-termination-la` was re-based on that after the C7 helper noted that art. 2669 doesn't show it.
- **Rent:** a fixed schedule or an objective index is "determinable" (art. 2676). A rent the lessor alone may reset is not offered.
- **Deposits:**
  - A "nonrefundable deposit" is still a deposit under La. R.S. 9:3251(A).
  - Deposit forfeiture on abandonment is stipulated damages that can't stack with rent (art. 2007), so it is not offered.
  - Preset deposit charges are not offered (`edu-no-deposit-cost-schedule-la`).
- **Attorney fees:** "reasonable attorney fees" stay in `default-by-tenant-la` for every proceeding. The optional `attorney-fees-fixed-la` gives the art. 2000 "fixed or determinable amount" for money claims. Whether "reasonable" is "determinable" is an open case-law question (§7).
- **Acceleration:** offered only as an election instead of dissolution, never both, on the non-cumulation model of La. R.S. 9:3318(A)(2) and 9:3319(C).
- **Unclaimed deposit refunds:** report after three years (the shorter candidate period, La. R.S. 9:154(A)(5)), because good-faith delivery to the state relieves the holder (La. R.S. 9:162(B)).
- **Usufructuary lessor:** choice B, a lease running past the usufruct, requires an express right to dispose (arts. 568, 568.2). Art. 568.2 (2010) is read as governing over art. 2716 (2004) where that right exists.
- **Sale of the property:** no termination-on-sale clause. Act 240 removed art. 2711's "unless the contrary had been agreed", so a reserved right is unsettled.
- **Firearms:** only a discharge-and-storage clause is offered. La. Const. art. I, § 11's effect on private leases was not searched.
- **Exculpation:** no narrow release was drafted for parking, storage or tenant property. It would overlap `warranty-waiver-la`, and art. 2004 case law was not searched (§2.2 class decision).

### §6.4 Canvass helpers' questions and the main pass's answers
- C3-1 (CCP 4731(C)(2) reach): the penalty sentence sits in the disaster paragraph but says "this Article"; rows tell landlords to assume it can apply anywhere (cautious course); `edu-money-limits-la` corrected by erratum.
- C3-2 (topics answered by rows keyed elsewhere): topic rows added so the coverage script sees them: `edu-no-stove-refrigerator-la`, `edu-no-drug-free-addendum-la`, `edu-cure-and-eviction-grounds-la`.
- C3-3 (R.S. 29:317-319 and submetering): `edu-no-submeter-regime-la` now tells landlords never to cut service to a tenant on active duty and points to `edu-utility-shutoff-rules-la`.
- C3-4 ("reasonable attorney fees" and art. 2000's "fixed or determinable amount"): the reasonable-fee sentence in `default-by-tenant-la` stays for every proceeding; the optional `attorney-fees-fixed-la` gives a fixed amount for money claims. Whether a "reasonable" fee is "determinable" under art. 2000 is a case-law question (open item, §7). The LA default clause is titled "Default by Tenant", matching the cross-reference.
- C3-5 (R.S. 9:3261.2(C) refers to "Subsection D"): the rows describe Subsection B and note the cross-reference slip; flagged for the legal watch (§10).
- C3-6 (military termination topic): servicemember-rights and statutory-early-termination are in slice C4; pointers checked at the merge.
- C3-7 (widen `casualty-termination-la`): not widened, because an abatement for an area-wide order would promise more than art. 2715 gives; `edu-no-environmental-event-termination-la` now says what the clause does and doesn't reach.
- C4-1 (acceleration): `rent-acceleration-la` accepted. It is an election instead of dissolution, so it reads consistently with `default-by-tenant-la`, which dissolves only on Landlord's written notice. The case-law questions C4 listed (election of remedies, present value, art. 2012 reduction, abandonment after acceleration) are open items (§7).
- C4-2 (stale pointers): every "canvass row on `topic`" pointer in the tag notes and main-pass rows is replaced with the LA row ids at the merge (§8).
- C4-3 (Code of Civil Procedure currency): checked against the 2026 citator; only art. 3421(1) is amended (Act 293), and the corpus prints it compiled (§1).
- C4-4 (art. 2718 on a fixed term): the clauses require at least 30 days' notice ending on the last day of a monthly rental period, which meets the art. 2728 period on either reading (rent period or term); accepted.
- C4-5 (automatic renewal reach): rows advise compliance; open item (§7).
- C4-6 (CCP 4731(C)(2)): aligned, as for C3-1.
- C4-7 (catch-all topics): `edu-confirmed-absences-misc-la` and `edu-confirmed-absences-outside-title-la` added by the main pass (new battery LA-M-DOUBLELEASE-01; R.S. 40:1581(D) insurance rule found and also added to `edu-smoke-co-detectors-la`).
- C4-8 (surrender): `surrender-end-of-term-la` accepted; the shared surrender clauses stay untagged.
- C4-9 (checker): checks.py now resolves La. C.Cr.P., Ch.C., C.E. and bare "R.S." citations.
- Tag objections accepted: the planned LA tags on `rental-application-accuracy` (expungement silence, La. C.Cr.P. art. 973(C)) and `governing-law` ("city or county"; Louisiana has parishes) were withdrawn; `rental-application-accuracy-la` and `governing-law-la` supersede them.
- C5-1 (Click-to-Cancel threshold): corrected to "both 50+ employees and $5M+ revenue" in `edu-automatic-renewal-la`, `automatic-renewal-la` and `edu-no-fee-transparency-rule-la` (R.S. 51:3305 as enacted exempts a person failing either limb).
- C5-2, C5-3 (currency): R.S. 32:1736(B) is unchanged by Act 440 and R.S. 51:3071-3077 has no 2026 entry; `edu-towing-la` and `edu-tenant-data-security-la` are VERIFIED.
- C5-4 (termination on sale): not offered; `edu-sale-or-management-change-la` now says why (art. 2718 allows a reserved termination right, but Act 240 removed "unless the contrary had been agreed" from art. 2711) and that a landlord wanting one should take advice.
- C5-5 (narrow exculpation release): not drafted; the art. 2004/2699 class decision stands (§2.2).
- C5-6 (in-home firearm ban): not offered (La. Const. art. I, § 11; case law not searched); `edu-firearms-la` records the declined option.
- C5-7 (plain-language overlap): the C7 helper was told to point to `edu-no-plain-language-lease-law-la`.
- Tag objection accepted: the planned LA tag on `assistance-animal-accommodation` was withdrawn (La. R.S. 46:1954(C) gives service-dog users access without the shared clause's direct-threat exception); `assistance-animal-accommodation-la` supersedes it.
- C6-1 (pre-2027 text of R.S. 9:3196-3199): answered from the Act 708 résumé digest (the Act adds only vacant residential property); both C6 rows VERIFIED.
- C6-2 (R.S. 21:61): Titles 20 and 21 have no 2026 citator entries; unchanged.
- C6 declined options accepted: unilateral rule changes (arts. 1770, 2056), smoke-drift waiver (arts. 2004, 2699(3)); `association-approval-la` written instead of tagging `association-approval-fl` (Florida variables and statutes).
- C7-1 (`casualty-termination-la` relied on art. 2669): accepted. The clause now rests on art. 2718 (reserved termination), with art. 2728 notice ending on the last day of a rental period, art. 1971 and art. 7.
- C7-2 (`edu-code-editions-la`): the full Act 881 was read. The re-enacted R.S. 37:3733(A)(3) no longer states the former new-construction limit, and the row now says so. The citator shows Act 881 makes no other Title 40 change. VERIFIED.
- C7-3 (address confidentiality): added to `edu-notice-to-vacate-la` (La. R.S. 44:57).



## §7 Open items, each with its search boundary
1. **Case law was not searched** (there is no case-law corpus). Each row that turns on one of these points states the cautious course:
   - whether La. Code Civ. Proc. art. 5059 governs the art. 4701 notice period;
   - how far the art. 4731(C)(2) penalty reaches outside disaster parishes;
   - whether "reasonable attorney fees" are "determinable" under La. Civ. Code art. 2000;
   - acceleration: election of remedies, present-value discount, art. 2012 reduction, and abandonment after the election;
   - whether La. R.S. 9:2716 and the Click-to-Cancel Act reach residential leases, and whether a residential lessor is a "retail business" under the debit-card surcharge ban;
   - which dormancy period applies to deposit refunds (La. R.S. 9:154(A)(5) or the catch-all);
   - whether a sale-termination clause survives Act 240's change to art. 2711;
   - La. Const. art. I, §§ 5, 11 and 12 against private lease terms;
   - stipulated damages under arts. 2005-2012 (holdover rate, prompt-payment discount, detector fees);
   - dissolution for a minor breach;
   - whether a notice to vacate is "other process" under La. R.S. 44:57.
2. **Administrative rules not read (Louisiana Administrative Code).** Each row names the one it touches:
   - Real Estate Commission escrow and forms rules;
   - fire marshal and Uniform Construction Code Commission rules;
   - the State Police Towing and Recovery Unit's signage rules;
   - Attorney General data-breach rules;
   - Public Service Commission submetering and resale rules;
   - the Department of Health's sanitary code and lead rules.
3. **Court rules and forms not read:** the Rules for Louisiana District Courts; city-court and justice-of-the-peace eviction practices and forms (Orleans First City Court guidelines read by summary only, §1.3). `edu-notice-to-vacate-la` tells landlords to check the filing court's practice.
4. **Parish and city ordinances not read:** rental registration and inspection programs (e.g. New Orleans), fair-housing ordinances, smoking and noise ordinances. Every absence row says so.
5. **Federal law** beyond the CARES Act notice, the lead disclosure rule and fair housing was not reviewed. Rows name the federal rule they leave aside.
6. **Legal watch dates:**
   - January 1, 2027: Act 830 (Click-to-Cancel), Act 891 (unclaimed-property renumbering) and Act 708 (sale disclosures for vacant lots).
   - Compiled numbers for La. R.S. 51:3081-3082 (Act 751) and 51:3301-3305 (Act 830), which collide with other 2026 acts.
   - The alphabetical renumbering of La. R.S. 46:1842 (Act 724).
   - The election on the proposed amendment to La. Const. art. I, § 4(B)(4) (Act 277).
   - The Uniform Construction Code now at La. R.S. 37:3727-3750 (Act 881, Aug. 1, 2026).

## §8 Integrity checks on the delta
Run by script on the final delta (`checks.py`, `assemble.py`) and on this log. The quote check was rerun after every errata round.

| Check | Result | Detail |
|---|---|---|
| Rows | 425 | 371 new (51 lease clauses, 320 education rows) and 54 shared rows changed; 0 duplicate ids; no new id clashes with the master |
| Columns and format | 17 columns, CRLF, UTF-8 without BOM | written with Python csv DictWriter, which round-trips the master byte for byte |
| `states`, `is_active`, dates | all new rows "LA", "TRUE", 2026-10-19 | blank required fields: 0 |
| `verification_status` (rule 64) | VERIFIED 371; none blank | |
| `supersedes` (rule 22) | 8 overrides, each with an "Overrides `x`" note | mismatches 0 |
| Basis (rule 55) | every clause has `lease_clause_basis`; no education row has one | |
| Groups and `topic_key` (rule 58) | existing groups only; existing topic keys plus one new key (`usufructuary-lessor`) | |
| Shared rows (rule 62) | master notes a verbatim prefix of every LA note: yes | other fields changed: 0 |
| Quote check (rule 59) | quotes ok 1622; NOT FOUND 0; found only elsewhere 1 | the one "elsewhere" quote ('stated in the rental agreement') is in La. R.S. 9:4759(13), which the row cites in a form the checker doesn't parse (verified by eye); matched only via row fallback: 18 |
| Citations exist (rule 19) | not in corpus 0; empty or repealed 0 | uncompiled-title sections were checked against the 2026 citator (§1.2) |
| Batteries cited (rule 19) | not in log 0; failed positive cited 0; hit-count mismatches 0 | |
| Pointers (rule 63) | backticked ids pointing to a missing or inactive row: 0 | the log's own ids were checked by the same script: 0 unresolved |
| Working-file citations (rule 61) | 0 | |
| Variables (rule 60) | only builder variables used (property_address, state); no bracket next to a variable | |
| Topic coverage (rule 27) | topics without an LA row: 0 of 356 | |
| Scope conditions (rule 27 [AK 3]) | 4 flags, all reviewed: the cited articles are mentioned for a different point (`edu-entity-landlord-representation-la`, `edu-notice-delivery-la`, `edu-pet-policy-la` cite art. 4701 for the notice itself; `edu-abandonment-la` cites art. 2729 for surrender as notice) | |
| Cross-slice duplicates ([HI 8]) | 0 | one merge before the check (§18) |
| LA clause topics with 2+ clauses | late-fee (`late-fee`, `prompt-payment-discount-la`), alterations (`no-alterations`, `improvements-ownership-la`), tenant-death (`tenant-death-termination-la`, `tenant-death-contact-la`) | each pair covers different subjects; no `choice_group` needed |


## §9 Propagation notes for shared-row edits (rule 62)
- **No shared row's text changed.** The 54 tagged rows changed only in `states` (";LA" appended), `notes` (an " | LA: ..." segment appended) and `last_checked` (2026-10-19). The assembler checks that each master row's notes are a verbatim prefix of the delta row's notes, and that no other field changed (§8). No propagation note is owed to any other state's log.
- **Vouches given:** none requested.

## §10 Findings for other states or the product (flagged, not fixed)
- **Shared `assistance-animal-accommodation`:** its sentence letting the landlord withdraw approval for a "direct threat ... or substantial physical damage" covers every assistance animal. States that give trained service-dog users unqualified housing access (Louisiana, La. R.S. 46:1954(C); compare the Delaware guide-dog override) need an override. Worth a library-wide look.
- **Shared `rental-application-accuracy`:** its carve-out covers only information the landlord "was not permitted by law to request or consider". In states where an applicant may lawfully stay silent about an expunged record (Louisiana, La. C.Cr.P. art. 973(C); Vermont), the clause can treat that silence as a breach.
- **Shared `governing-law`:** says "city or county". A library-wide "city, county or parish" (or "local government") wording would let Louisiana drop `governing-law-la`. This would be a shared edit, so it was not made here (rule 62).
- **La. R.S. 9:3261.2(C)** refers to "Subsection D" for the termination requirements, which are in Subsection B. The rows describe B and note the slip (canvass C3).
- **Attorney General's "Moving In, Moving Out" guide** (undated): its deposit penalty ($200) predates 2018 Act 416 ($300 since January 1, 2019), and its fair-housing list leaves out military status (La. R.S. 51:2602). Rows follow the statutes.
- **NOMAR Residential Lease (rev. 8/08):** it predates five statutes (§15). Its short-absence abandonment presumption conflicts with La. Code Civ. Proc. art. 4731(B)-(C), and its deposit forfeiture is doubtful under art. 2007.
- **New topic (rule 72):** `usufructuary-lessor` (`usufructuary-lessor-la`, `edu-usufructuary-lessor-la`). It is civil-law specific; no other state has a usufruct.
- **Builder variables (§10, kickoff):** no new `{{variable}}`. New rows use only `property_address` and `state`. `association-approval-la` avoids Florida's `{{association_fee_payer}}` and `{{association_approval_deadline}}` with bracketed prompts.
- **Tooling:** a canvass helper cannot write SUMMARY.md (the harness refuses report files from helpers), so briefs should ask for the summary in the final reply.

## §11 Step D screens (rules 40-53), one line each
- **40 Formatting and placement:** see §4. Only art. 2699's "clear and unambiguous ... brought to the attention" and the auto-renewal "clear and conspicuous" rule (La. R.S. 9:2716; Act 830 from 1/1/27) reach lease text. The batteries ran in Step C, before drafting, with lessor and lessee words in the context limb ([HI 1]).
- **41 Just-cause:** none (`edu-for-cause-eviction-la`, with its retaliation absence `edu-no-retaliation-statute-la`).
  - A fixed term ends at its end without notice (art. 2720), unless it is reconducted (arts. 2721-2724).
  - Month-to-month leases end on ten calendar days' written notice before the end of the month (arts. 2727-2729).
  - Situational limits: the domestic-abuse protections (La. R.S. 9:3261.1), the military termination and stay (La. R.S. 9:3261, 29:315) and the disaster-parish abandonment rule (La. Code Civ. Proc. art. 4731(C)).
- **42 Required text inside a shared clause:** none. No statute forces a sentence into a fee or deposit clause. The licensee sex-offender notice is its own required clause (`sex-offender-registry-notice-la`).
- **43 Cure promises:**
  - `default-by-tenant-la` gives no cure for nonpayment (express dissolution, art. 2017).
  - Other breaches get a notice to perform within a reasonable time (art. 2015), with a carve-out for defaults the lease says allow dissolution without time to cure; the carve-out reaches every limb.
  - No statutory cure or tender right survives the notice (`edu-no-forfeiture-relief-la`, `edu-no-redemption-right-la`).
- **44 Terms the statute turns into landlord duties:** the Civil Code makes included appliances and services part of the leased thing (arts. 2682, 2691, 2696). `appliances-included` is tagged with that note, and `appliances-excluded-la` lets the landlord exclude items. Louisiana has no "material provisions of the rental agreement" remedy beyond ordinary dissolution (art. 2719).
- **45 Electronic notices:** read in the Uniform Electronic Transactions Act itself. It excludes notices of default, acceleration, foreclosure, eviction or the right to cure under a rental agreement for a primary residence (La. R.S. 9:2603(B)(4)(b)(ii)). `electronic-notice-ma` and `notices` carry the LA note; `rent-acceleration-la` and `edu-nonpayment-notice-la` require paper.
- **46 The lease as the required notice:** a written waiver of the notice to vacate must be "contained in the lease" (art. 4701; `notice-to-vacate-waiver-la`). For an indeterminate lease, the termination notice serves as the notice to vacate. There is no statutory addendum needing a control sentence, so `addendum-precedence` was tagged as written.
- **47 Penalties for knowingly using a prohibited term:** none in the lease title. Using a void term can be an unfair trade practice under La. R.S. 51:1405 (`edu-consumer-protection-act-la`); no per-violation debt-collection penalty reaches a lessor collecting its own rent (`edu-no-knowing-use-penalty-la`).
- **48 Separate-document requirements:** none. No "separate writing" or "separate instrument" rule reaches a residential lease (LA-F-SEPDOC-03: 9 hits, none on residential leases). Chores and repairs may be shifted in the lease itself under the art. 7 ruling (`tenant-repairs-la`, `snow-removal`, `landscaping-irrigation` tagged).
- **49 Collection-cost bans:**
  - Damages for delay on money are limited to interest plus written attorney fees "in a fixed or determinable amount" (art. 2000), so collection, notice-service and flat eviction fees are not offered (`edu-no-collection-fee-la`, `edu-no-notice-fee-la`, `edu-no-eviction-penalty-rule-la`).
  - No statute makes a one-way fee clause reciprocal. `default-by-tenant-la` uses a prevailing-party fee anyway.
- **50 "The lease controls" wording:** every "in the absence of contrary agreement" choice point is listed in `edu-optional-lease-terms-la` and was made on purpose (§6.1 table): arts. 2678, 2680, 2689, 2691, 2695, 2703, 2713 and 2718; La. R.S. 9:3221; La. Code Civ. Proc. art. 4701. The deposit section has no uplift that depends on the lease.
- **51 Plain-language and consumer-contract statutes:**
  - Louisiana has no plain-language lease statute (`edu-no-plain-language-lease-law-la`, `edu-plain-language-la`).
  - The Unfair Trade Practices Act's general standard (La. R.S. 51:1405) is not limited to goods; whether it reaches a lease is unsettled (`edu-consumer-protection-act-la`).
  - It has no enumerated list of unfair lease practices.
  - Ambiguities in a standard form are construed against the drafter (arts. 2056-2057).
- **52 Exculpation:** see the §2.2 class decision (arts. 2004, 2699); the variants without the disclaimer are tagged.
- **53 A figure that contradicts a shared clause:** none.
  - The `late-fee` tag carries the art. 2012 note.
  - The holdover charge (`holdover-rate-la`) starts only after the landlord's written notice to vacate or other opposition, which is what prevents reconduction (art. 2721). It stops if the lease is reconducted, and it is never recovered with rent for the same day.
  - Louisiana gives no right to stay by paying after dissolution (`edu-no-redemption-right-la`) and no late-fee cap, so the rule 53 nonpayment exclusion has nothing to protect.
  - `early-termination-ks` was screened for a fixed-term-only figure.

## §12 Other Step C screens
- **30 Read beyond the section:**
  - Read whole in the main pass: the lease title (arts. 2668-2729), La. R.S. 9:3201-3261.2, the eviction title (La. Code Civ. Proc. arts. 4701-4736), and the obligations articles cited in rows.
  - The canvass read the neighbouring sections for every absence.
  - The statute walk led to two further findings: the usufruct articles (arts. 567-568.2) and art. 5059 counting.
- **31 Enacted twice:**
  - The deposit rule is enacted once (La. R.S. 9:3251-3254).
  - The notice to vacate (art. 4701) and the termination notice (arts. 2727-2729) are different notices; rows state both and how the termination notice serves as the notice to vacate.
  - The lessor's privilege appears in arts. 2707-2710 and in sequestration (La. Code Civ. Proc. arts. 3571-3576); `edu-lessor-privilege-la` states both.
- **32 Place or size:**
  - Scopes carried into the row bodies, and flagged by the assembler when missing (§8):
    - La. R.S. 9:3261.1: six or more dwellings, except owner-occupied buildings of ten or fewer;
    - La. R.S. 9:3258.1: primary residence, except owner-occupied buildings of up to four units;
    - La. R.S. 40:1581: one- or two-family dwellings;
    - La. R.S. 51:2604(B) fair-housing exemptions;
    - La. R.S. 33:4887: more than four units, master meter;
    - La. R.S. 29:315: landlords operating four or more premises;
    - La. Code Civ. Proc. art. 4731(C): disaster parishes.
  - No scope expires during a tenancy.
- **37 Tenancy type:** every row says how it applies to fixed-term and month-to-month leases. Reconduction, the art. 2728 periods and the art. 2718 reserved-termination notice are worked through in `edu-termination-notice-la`, `holdover-la`, `owner-move-in-reservation-la`, `tenant-death-termination-la` and `casualty-termination-la`.
- **38 Imported structure:** none assumed. Louisiana's dissolution, reconduction, solidarity, lessor's privilege and usufruct rules were each drafted from the Civil Code text.
- **39 Eviction procedure:** screened for landlord duties and prohibitions:
  - the notice-to-vacate timing and counting;
  - the abandonment self-help limit and penalty;
  - the 24-hour suspensive-appeal rule;
  - the subsidy no-defense rule (La. R.S. 9:3259.2);
  - the military stay (La. R.S. 29:315);
  - occupant and squatter removal (art. 4702; La. R.S. 14:63);
  - post-eviction property (art. 4734);
  - the address-confidentiality service rule (La. R.S. 44:57).

  Court rules: §1.3 and §7.

## §13 Independent check (rule 80)
Brief: `check/CHECK-BRIEF.md`. It told each checker:
- check against the statute, not the notes, since earlier findings may be wrong;
- print and read whole sections, and parse each subsection sentence by sentence (rule 79);
- test every absence against the batteries' ability to match;
- give exact old/new errata, touching only the LA segment of a shared row;
- save after every row.

It also listed the rulings already made. One agent ran at a time; each round after the first re-checked only the rows edited since the round before.

| Round | Rows checked | ERROR | FIX | NOTE | Errata applied | Result |
|---|---|---|---|---|---|---|
| 1 | 425 (all new rows and all 54 LA segments) | 0 | 28 | 53 | 40 from the checker; 56 from the main pass | 28 FIX rows corrected; every pattern grepped across the delta (below) |
| 2 | 91 (every row edited after round 1) | 0 | 8 | 16 | 9 from the checker; 8 from the main pass | 8 FIX rows corrected; battery summary lines completed in five rows |
| 3 | 14 (every row edited after round 2) | 0 | 7 | 7 | 13 from the checker | 7 FIX rows corrected after the last round (listed below) |

**Round 1 patterns:** the main pass grepped the delta for each and fixed every instance, not only the rows flagged.
- Reconduction stated without the tenant's own notice or opposition (art. 2721): four rows, plus `surrender-end-of-term-la`'s notes.
- "Attorney fees only if the lease is in writing", ignoring La. R.S. 9:3259 for oral leases: five rows.
- The art. 4731(C)(2) cautious ruling not applied: four rows.
- La. R.S. 9:3260 cited without its constructive-eviction condition: three rows.
- La. R.S. 9:3261.1 called non-waivable although it has no anti-waiver text: two rows, one of them the `early-termination-ks` LA segment.
- Art. 2690 miscited as protecting the landlord against tenant alterations: three rows; the notes now cite arts. 2683(2) and 2692.
- Absence batteries scoped narrower than the body's "statutes, codes and constitution": seven rows. Whole-index reruns held, and the K1 batteries are now cited.
- 42 rows from slices C6-C7 still carried "citator check pending"; each was resolved from the citator runs (§1.2).
- Three clauses opened "LA: Confirmed absent."; two optional clauses carried RECOMMENDED instead of CONDITIONAL.

The checker also named 2026 acts not yet read: Acts 166 and 553 were read, and the Act 708 Title 9 text and digest were saved (§1.2).

**Round 2 patterns:**
- **Bulk-pasted citator sentence:** in two rows (`edu-stigmatized-property-la`, `edu-no-mold-disclosure-la`), a relied-on section does have a 2026 entry. Both now name the entry and say why it doesn't change the row (La. R.S. 37:1431(35)-(37), enacted by Act 807; La. R.S. 37:2156.1, amended by Acts 757 and 908).
- **An edit to one sentence left a neighbouring sentence inconsistent:** `edu-no-deposit-cost-schedule-la`, `edu-no-eviction-service-party-la`, `edu-warranty-waiver-la`, `edu-no-drug-free-addendum-la`, `edu-disaster-tenancy-la`.
- **Battery summaries without heading-only and control counts:** five rows. The main pass completed them from the battery log.
- **Notes only:**
  - The 9:3261.1(A) exemption is stated as "owner-occupied" where the statute says "occupied by the owner or lessor". This errs toward applying the protections, so it was left.
  - Reconduction to "month to month" assumes a term of a month or longer (art. 2723(1)); the library's leases are monthly.
  - `edu-dv-deposit-timing-la` keeps the stricter single one-month deadline.
- The checker could not see the live citator: Act 166 is now saved, the Act 881 extract carries R.S. 37:3733 and 37:3735, and the Title 40 repeal list is in §1.2.

**Round 3 notes not acted on:** each was judged harmless or already the cautious course.
- "affirmative defense" shortened to "a defense" in two eviction rows.
- La. R.S. 13:3881(B)(1)'s non-bankruptcy federal exemptions.
- The reverse limb of the stigmatized-property battery leaves out three words; the forward limb carries them.
- La. R.S. 9:3221's "failed to remedy" read the way that gives the owner less protection.
- `edu-disaster-tenancy-la` could repeat the COVID-19 and hurricane mention required by R.S. 9:3258.1(A)(4); that rule is stated in `edu-application-fee-notice-la`.

### Edited after the last check
Round 3 still found fixes. They were applied, and the rows are listed here for Claude Code to read against the statute at sync (kickoff). The main pass made three further changes after round 3 (the last three rows).

| Row | Last checked | Changed after | What changed |
|---|---|---|---|
| `edu-money-limits-la` | round 3 | round 3 errata (bodyText) | Three changes. The art. 4731(C)(3) fee rule now reaches "actions brought pursuant to this Article", eviction rules included, so landlords should assume fees either way. The deposit line gains R.S. 9:3251(A)'s reasonably-necessary retention and the (C) abandonment exception. The application-fee exception now reads "owner-occupied building of no more than four units". |
| `edu-no-actual-notice-rule-la` | round 3 | round 3 errata (bodyText, notes) | Agreed e-mail can meet a writing requirement under the electronic-transactions act (R.S. 9:2605(B)(1), 9:2607(C), 9:2608(A)(1)), except the 9:2603(B)(4)(b)(ii) notices. Paper advice for default and eviction notices kept. |
| `edu-no-deposit-cost-schedule-la` | round 3 | round 3 errata (bodyText) | Adds the R.S. 9:3251(C) abandonment exception. |
| `edu-no-drug-free-addendum-la` | round 3 | round 3 errata (bodyText) | Adds "or activity directly related to domestic abuse" from R.S. 9:3261.1(D)(1)(b). |
| `edu-no-eviction-service-party-la` | round 3 | round 3 errata (notes) | Cites the new whole-index battery LA-K3-SVCAGENT-02 for the absence. |
| `edu-no-mold-disclosure-la` | round 3 | round 3 errata (bodyText) | The licensee's protection from pamphlet errors now carries the R.S. 37:1470(C) conditions. |
| `edu-post-eviction-property-la` | round 3 | round 3 errata (bodyText, notes) | Corrects the LA-K1-POSTEVICT-03 description to the logged pattern. The art. 2710 15-day window now carries its conditions (items still the tenant's and identifiable). |
| `edu-attorney-fees-la` | round 1 | main pass after round 3 (bodyText) | The same art. 4731(C)(3) fee-scope correction as `edu-money-limits-la`. |
| `edu-no-minor-eviction-rule-la` | round 3 | main pass after round 3 (notes) | "1 hits" corrected to "1 hit" (round 3 note). |
| `edu-no-tenant-bankruptcy-rule-la` | round 3 | main pass after round 3 (notes) | "1 hits" corrected to "1 hit" (round 3 note). |

## §14 Gap-discovery source 1 — statute walk (rule 29)
**What was read.** In the main pass I read whole:
- the lease title of the Civil Code (arts. 2668-2729, as amended by Act 240);
- La. R.S. 9:3201-3261.2;
- the eviction title (La. Code Civ. Proc. arts. 4701-4736).

**The diff.** Each core part's section index was diffed by script (`scripts/walk.py`) against every section number cited in the delta's new rows and LA note segments. The script was rerun on the final delta. A range counts as citing its sections only when it spans ten or fewer, so "arts. 2668-2729" does not mark the whole title as cited.

| Part | Sections | Repealed or empty | Live | Uncited live sections |
|---|---|---|---|---|
| Civil Code lease title (arts. 2668-2729) | 65 | 0 | 65 | 6: 2673 (chapter heading only), 2674, 2677, 2681.2, 2685, 2706 |
| La. R.S. 9:3201-3261.2 | 21 | 0 | 21 | 4: 9:3202, 9:3203, 9:3204, 9:3259.1 |
| Code Civ. Proc. arts. 4701-4736 | 11 | 0 | 11 | 0 |
| Civil Code obligations (arts. 1756-2057) | 302 | 3 | 299 | 226 (general contract law; dispositions below) |

**Dispositions:**

| Section | Disposition |
|---|---|
| Art. 2674 (lease of another's thing binds the parties; movables against the owner; amended by Act 240) | No landlord action turns on it. It is noted with the usufruct rows. |
| Arts. 2677, 2706; La. R.S. 9:3202-3204 | Crop rent and crops: not residential. |
| Art. 2681.2 | Leases of movables: out of scope. |
| Art. 2685 (a difference between the agreed and delivered extent of an immovable is governed by the Sale title) | No row. A residential lease rarely states area, and the library's property description is the landlord's own. Proposed as a topic question (end of log). |
| La. R.S. 9:3259.1 | Unpaid lot rent for factory-built homes on rented lots: a lot lease, outside the dwelling-lease scope (`edu-lease-law-scope-la`). |
| Obligations articles | Read by chapter heading. The lease-relevant ones are cited in rows: 1759, 1767-1776 (conditions, by C6), 1796 (solidarity), 1864-1871 (imputation, tender and deposit), 1873-1878 (fortuitous event; the lease-specific arts. 2714-2715 govern), 1971 and 1983 (freedom of contract), 1994-2004 (damages, mitigation, art. 2004), 2005-2012 (stipulated damages), 2013-2024 (dissolution), 2030-2034 (nullity, severability) and 2045-2057 (interpretation, art. 2056 standard forms). The rest (natural obligations, alternative and divisible obligations, subrogation, proof, novation, remission, compensation, confusion, offer and acceptance, vices of consent, simulation, the revocatory action) state no rule a residential lease must or usefully can address. |

**Rows the walk produced:**
- The walk turned up arts. 567-568.2 and 2716: a lease by a "usufructuary" ends when the usufruct ends, and the lessor owes damages if it did not disclose that status. A usufructuary is someone who holds a right to use and draw income from property that someone else owns, commonly a surviving spouse. Two rows: `usufructuary-lessor-la` (optional clause) and `edu-usufructuary-lessor-la` (new topic `usufructuary-lessor`).
- Reading the eviction title's neighbours turned up art. 5059 counting (§1.3).

**Partly cited sections, one level down (rule 29):** the multi-subsection sections the rows rest on were read subsection by subsection when drafting: arts. 2699, 2721, 2728 and 4731, and La. R.S. 9:3251, 9:3252 and 9:3261.1. The independent check reread every section a row relies on (§13).

## §15 Gap-discovery source 2 — real-lease comparison (rule 33)

**Lease used.** New Orleans Metropolitan Association of REALTORS® Residential Lease, the standard form revised 8/08: 6 pages and 284 numbered lines, marked "For exclusive use of REALTORS®". It was retrieved free from eForms' copy on 2026-10-19.
- PDF SHA-256: 37f4715f54cd6ea77d17c667d1e26babdebd354045cdff214d4e6ddcdfcfaaec.
- The text was extracted and saved in the working source folder (`src/lease/`). It is copyrighted, so it is used as a lead only and is never reproduced in rows.
- **Not a relabelled template.** It carries NOMAR's own header and line numbering and uses Louisiana-specific terms (art. 4701 waiver, *in solido*, the lessor's privilege, the State Police registry notice, the R.S. 9:3221 assumption).
- **Why it is weaker than a current form:** the 2008 revision predates R.S. 9:3258.1 (2021), 9:3260.1 (2013), 9:3261.1 (2015), 9:3261.2 (2021) and the 2026 deposit amendment. No current Louisiana REALTORS® or apartment-association lease is published free; Taylor is never asked to buy one (rule 33).
- **Official handbook (AK 5).** The Attorney General's guide, "Moving In, Moving Out" (Louisiana Department of Justice, Attorney General Liz Murrill, undated, 38 pages), was saved as a lead: PDF SHA-256 77f43095ebf2490f67f24ee2324fd927c71292b83acb861005fc682800bfb3c3; pages 6-34 saved in the working web folder.
  - **What it led to:** it describes the notice to vacate as "five (5) business days". That led to La. Code Civ. Proc. art. 5059(C)(3) and La. R.S. 1:55(E)(3): periods under seven days don't count Saturdays, Sundays or legal holidays. `edu-notice-to-vacate-la` now says so, as do six related rows.
  - **Where it is out of date:** its deposit penalty ("$200.00") predates the 2019 amendment of R.S. 9:3252 ($300 or twice the amount kept), so the rows follow the statute.
  - **Where it agrees with the rows:** ten-day month-to-month notice, reconduction after one week, no late-fee cap but unreasonable fees contestable, pet fees outside the deposit act, automatic cleaning deductions possibly invalid, military termination, and the hairstyle protection in fair housing (checked by canvass slice C7).

**Mapping, by topic (term in NOMAR → LA row or verdict):**
| NOMAR term (paraphrased) | LA answer |
|---|---|
| Rent payable in advance, monthly, at lessor's address | `rent-payment` (tagged) |
| Late charge; returned-check charge | `late-fee` (tagged), `edu-late-fee-la`; `returned-payments-la` (La. R.S. 9:2782 measure) |
| Prompt-payment discount | `prompt-payment-discount-la` (optional) |
| Security deposit; forfeiture if lessee vacates early or abandons | `security-deposit-return-la`; forfeiture declined (rule 54), recorded in `edu-abandonment-la` |
| Abandonment presumption after a short absence | Conflicts with La. Code Civ. Proc. art. 4731(B)-(C) "reasonable belief" and the disaster-parish rule; `edu-abandonment-la`, `abandoned-property-la` |
| Automatic month-to-month continuation unless notice | Reconduction (arts. 2721-2724): `holdover-la`, `edu-holdover-la`; `automatic-renewal-la` for a fixed-term renewal |
| Holdover damages of five times the daily rent | Stipulated damages subject to art. 2012: `holdover-rate-la` (lessor-chosen figure, not NOMAR's) |
| Default makes the whole unexpired rent due; cancellation and eviction | `rent-acceleration-la` (election instead of dissolution, never both); `default-by-tenant-la` |
| Attorney fee fixed at 25% of the claim, minimum $300 | `attorney-fees-fixed-la` (optional, CONSTRAINED; La. Civ. Code art. 2000) |
| Waiver of notice to vacate | `notice-to-vacate-waiver-la` (La. Code Civ. Proc. art. 4701) |
| Lessee assumes responsibility for the premises' condition (R.S. 9:3221) | `lessee-assumes-condition-la` |
| Waiver of warranty against vices and defects | `warranty-waiver-la` (art. 2699 limits and attention requirement) |
| Lessee solidarily liable (*in solido*) | `joint-liability-la` |
| Lessor's privilege on the lessee's movables | `edu-lessor-privilege-la` (no self-help seizure) |
| Entry for inspection, sale or leasing between set daytime hours | `landlords-access` (tagged), `showing-notice-la` (optional), `edu-landlord-entry-la` |
| Alterations, painting, nails need consent; improvements | `no-alterations` (tagged), `improvements-ownership-la` (art. 2695) |
| Pets need written consent | `pet-policy-or` (tagged), `edu-pet-policy-la` |
| Occupants and guests limited | `permitted-occupants`, `guest-policy` (tagged) |
| No sublease or assignment without consent | `no-sublet-assign` (tagged), `edu-sublet-assign-la` (art. 2713 as amended by Act 240) |
| Fire or casualty: termination and refund of prepaid rent | `casualty-termination-la` (optional) |
| Lessee carries insurance; lessor not liable | `tenants-property-insurance-ks-oh-ca` (tagged), `edu-tenant-property-insurance-la`; disclaimer class decision (art. 2004) |
| Mold notice | `edu-no-mold-disclosure-la` and the optional mold pamphlet acknowledgment (canvass slice C6) |
| Sex-offender registry notice | `sex-offender-registry-notice-la` (La. R.S. 37:1469; current State Police number and URL) |
| Lead-based paint disclosure | `lead-based-paint` (tagged) |
| Utilities paid by lessee | `utilities-responsibility` (tagged) |
| Surrender, cleaning, return of keys | `surrender-end-of-term-la`, `keys` (tagged) |
| Association rules | `hoa-compliance` (tagged) |
| Parking | `parking-ks-oh-ca` (tagged), `edu-parking-liability-la` |

**What NOMAR led to.** The comparison confirmed or prompted these rows: prompt-payment discount, rent acceleration, the fixed attorney fee, the holdover rate, and the declined deposit forfeiture. It found two NOMAR terms that may be unlawful: the short-absence abandonment presumption, and deposit forfeiture stacked on rent (art. 2007).

No change to a shared row was made from the lease (rule 33).


## §16 Gap-discovery source 3 — landlord-scenario screen (rule 34)
- **Scenarios:** 145, in `work/scenarios.tsv`, built on the Arizona §18.1 model plus Louisiana-specific situations. They run from advertising and screening through signing, move-in, rent, deposits, maintenance, entry, use, disasters, default, termination and sale or foreclosure.
- **Louisiana-specific scenarios:** hurricane damage and evacuation, a federally declared disaster parish, the lessor's privilege seizure, the licensee sex-offender notice, a NOMAR-style waiver of notice, a flood-zone property, a condo association approval, and a 99-year term.
- **Result:** each scenario maps by script (`scripts/scen.py`, rerun on the final delta) to one or more active LA rows on its topics. No scenario is left without a row.
- **Rows added from the screen:** none. The screen ran after the canvass, and every scenario was already answered. The table maps every scenario to its rows; it is generated, so it is attached below in compact form.

| # | Stage | Scenario | LA rows | Topics without an LA row |
|---|---|---|---|---|
| 1 | Advertising | Landlord advertises "no Section 8" in a New Orleans listing | `edu-no-source-of-income-protection-la`, `edu-fair-housing-la` |  |
| 2 | Advertising | Ad says "perfect for a single professional" | `edu-fair-housing-la` |  |
| 3 | Advertising | Landlord lists the unit on a short-term rental site between leases | `no-sublet-assign`, `edu-sublet-assign-la`, `edu-lease-law-scope-la` |  |
| 4 | Advertising | Landlord uses an algorithmic pricing tool to set rent | `edu-no-algorithmic-rent-rule-la` |  |
| 5 | Advertising | Landlord wants to advertise rent without listing mandatory fees | `edu-no-fee-transparency-rule-la` |  |
| 6 | Screening | Applicant asks what the application fee covers before paying | `edu-application-fee-notice-la`, `edu-no-application-fee-cap-la` |  |
| 7 | Screening | Landlord wants to reject an applicant for an old eviction record | `edu-tenant-screening-la`, `edu-no-eviction-record-sealing-la` |  |
| 8 | Screening | Applicant has a criminal record that was expunged | `edu-tenant-screening-la` |  |
| 9 | Screening | Applicant offers a statement about hurricane-related credit damage | `edu-application-fee-notice-la`, `edu-no-application-fee-cap-la` |  |
| 10 | Screening | Applicant is in the National Guard and may be deployed | `edu-fair-housing-la`, `edu-servicemember-rights-la` |  |
| 11 | Screening | Applicant with a disability asks to keep an emotional support animal | `assistance-animal-accommodation-la`, `edu-service-animal-misrepresentation-la` |  |
| 12 | Screening | Applicant presents an online ESA certificate bought the same day | `edu-service-animal-misrepresentation-la` |  |
| 13 | Screening | Applicant wears locs and landlord's manager comments on it | `edu-fair-housing-la` |  |
| 14 | Screening | Applicant is a domestic-abuse victim with a protective order | `edu-dv-eviction-protection-la`, `edu-fair-housing-la` |  |
| 15 | Screening | Landlord wants a co-signer for a student | `edu-lease-guaranty-la` |  |
| 16 | Screening | Landlord asks applicants about immigration status | `edu-immigration-status-la` |  |
| 17 | Screening | Landlord takes a holding deposit to reserve the unit | `edu-no-holding-deposit-rule-la` |  |
| 18 | Signing | Landlord's agent (a licensee) prepares the lease | `sex-offender-registry-notice-la`, `edu-required-disclosures-la` |  |
| 19 | Signing | Property is under a pending foreclosure | `foreclosure-disclosure-la`, `edu-foreclosure-disclosure-la` |  |
| 20 | Signing | House built in 1965 | `lead-based-paint` |  |
| 21 | Signing | One- or two-family house: what detectors must be in place | `edu-smoke-co-detectors-la` |  |
| 22 | Signing | Landlord wants the tenant to take the property "as is" | `warranty-waiver-la`, `edu-warranty-waiver-la` |  |
| 23 | Signing | Landlord wants the tenant to assume responsibility for the property's condition | `lessee-assumes-condition-la` |  |
| 24 | Signing | Lease includes a waiver of the notice to vacate | `notice-to-vacate-waiver-la` |  |
| 25 | Signing | Lease signed electronically | `electronic-signatures` |  |
| 26 | Signing | Lease is oral | `edu-lease-writing-recording-la`, `edu-attorney-fees-la`, `attorney-fees-fixed-la` |  |
| 27 | Signing | Tenant asks for a copy of the signed lease | `edu-no-lease-copy-rule-la` |  |
| 28 | Signing | Lease term of 99+ years requested | `edu-lease-term-limits-la` |  |
| 29 | Signing | Landlord wants the lease to auto-renew for another year | `edu-automatic-renewal-la`, `automatic-renewal-la` |  |
| 30 | Signing | Landlord wants to record the lease | `edu-sale-or-management-change-la` |  |
| 31 | Signing | Landlord collects first month, deposit and pet deposit | `due-at-signing`, `edu-no-upfront-payment-limit-la`, `edu-no-security-deposit-cap-la`, `edu-pet-fees-la` |  |
| 32 | Signing | Landlord wants a nonrefundable cleaning fee | `edu-no-nonrefundable-deposit-la`, `edu-no-fee-listing-rule-la` |  |
| 33 | Signing | Property is in a flood zone or flooded before | `edu-no-flood-disclosure-la` |  |
| 34 | Signing | Property had mold remediation | `edu-no-mold-disclosure-la`, `mold-pamphlet-la` |  |
| 35 | Signing | Property is in a homeowners association | `hoa-compliance`, `edu-association-rules-la`, `association-approval-la` |  |
| 36 | Signing | Condo unit lease needs association approval | `edu-association-rules-la`, `association-approval-la` |  |
| 37 | Signing | Unit has known meth contamination history | `edu-no-meth-disclosure-la` |  |
| 38 | Signing | Landlord lives out of state and needs a local agent | `edu-no-nonresident-agent-rule-la` |  |
| 39 | Signing | Landlord must say who the owner/manager is | `edu-no-owner-identity-disclosure-la` |  |
| 40 | Move-in | Tenant can't move in because prior tenant held over | `possession-delay-ca` |  |
| 41 | Move-in | Move-in condition checklist | `edu-no-move-in-inspection-rule-la`, `existing-condition`, `edu-existing-condition-la` |  |
| 42 | Move-in | Keys and re-keying between tenants | `keys`, `edu-no-dv-lockchange-la` |  |
| 43 | Move-in | Utilities to be transferred to the tenant's name | `utilities-responsibility`, `edu-utility-money-held-la`, `edu-no-utility-transfer-cutoff-la` |  |
| 44 | Move-in | Landlord bills tenant for submetered water | `edu-tenant-bill-transparency-la`, `edu-no-utility-apportionment-rule-la` |  |
| 45 | Rent | Rent paid on the 5th; landlord charges a late fee | `late-fee`, `edu-late-payment-acceptance-la`, `prompt-payment-discount-la`, `edu-late-fee-la` |  |
| 46 | Rent | Tenant pays by debit card; landlord adds a surcharge | `acceptable-payment-methods`, `edu-no-payment-method-rule-la`, `edu-debit-card-surcharge-la` |  |
| 47 | Rent | Tenant's check bounces | `returned-payments-la`, `edu-returned-check-la` |  |
| 48 | Rent | Tenant pays part of the rent | `application-of-payments`, `edu-application-of-payments-la`, `edu-waiver-by-acceptance-la`, `nonwaiver-acceptance-la` |  |
| 49 | Rent | Tenant asks for a receipt for cash rent | `edu-no-rent-receipt-duty-la` |  |
| 50 | Rent | Landlord wants to raise rent mid-term | `rent-escalation-la`, `edu-rent-escalation-la`, `edu-rent-increase-notice-la` |  |
| 51 | Rent | Landlord wants to raise rent at renewal | `edu-rent-increase-notice-la` |  |
| 52 | Rent | Property taxes go up; landlord wants to pass them on | `tax-insurance-escalation-la`, `edu-tax-escalation-la` |  |
| 53 | Rent | City wants to cap rents | `edu-no-rent-control-la` |  |
| 54 | Rent | Tenant on Section 8 and HAP payments stop | `edu-no-subsidy-late-fee-la`, `edu-no-subsidy-proration-rule-la` |  |
| 55 | Rent | Tenant pays rent through an online portal | `edu-no-tenant-portal-rule-la` |  |
| 56 | Rent | Landlord reports rent to credit bureaus | `edu-no-rent-reporting-rule-la` |  |
| 57 | Rent | Interest on unpaid amounts | `unpaid-amounts-interest-la`, `edu-interest-on-unpaid-amounts-la` |  |
| 58 | Rent | Landlord charges a collection fee | `edu-no-collection-fee-la` |  |
| 59 | Deposit | How much deposit can I take | `edu-no-security-deposit-cap-la` |  |
| 60 | Deposit | Must deposit be held in a separate account or earn interest | `edu-no-deposit-holding-rule-la`, `edu-no-deposit-interest-la` |  |
| 61 | Deposit | Return of deposit after move-out | `security-deposit-return-la`, `edu-security-deposit-return-la` |  |
| 62 | Deposit | Deductions for carpet cleaning | `edu-no-carpet-cleaning-rule-la`, `carpet-cleaning-la`, `security-deposit-use` |  |
| 63 | Deposit | Tenant abandons without notice | `security-deposit-return-la`, `edu-security-deposit-return-la`, `edu-abandonment-la` |  |
| 64 | Deposit | Landlord sells building with deposits | `edu-deposit-on-sale-la` |  |
| 65 | Deposit | Tenant uses deposit as last month's rent | `edu-deposit-last-month-rent-la` |  |
| 66 | Deposit | Deposit penalty claim | `edu-security-deposit-penalty-la` |  |
| 67 | Maintenance | AC fails in July | `landlord-maintenance`, `edu-landlord-maintenance-la`, `edu-repair-and-deduct-la`, `edu-no-heat-statute-la` |  |
| 68 | Maintenance | Tenant repairs and deducts | `edu-repair-and-deduct-la` |  |
| 69 | Maintenance | Roof leak damages tenant's belongings | `edu-exculpatory-clauses-la`, `tenants-property-insurance-ks-oh-ca`, `edu-tenant-property-insurance-la` |  |
| 70 | Maintenance | Tenant's guest breaks a window | `edu-tenant-caused-damage-la` |  |
| 71 | Maintenance | Bed bugs reported | `edu-no-bed-bug-rule-la`, `pest-cooperation-la`, `edu-no-bed-bug-disclosure-la` |  |
| 72 | Maintenance | Pest control treatment schedule | `edu-no-pest-control-notice-la` |  |
| 73 | Maintenance | Mold appears after a storm | `edu-no-mold-disclosure-la`, `mold-pamphlet-la`, `landlord-maintenance`, `edu-landlord-maintenance-la` |  |
| 74 | Maintenance | Smoke detector chirping | `edu-smoke-co-detectors-la` |  |
| 75 | Maintenance | Landlord needs to do urgent repairs that disrupt the tenant | `edu-peaceful-possession-la`, `landlord-maintenance`, `edu-landlord-maintenance-la` |  |
| 76 | Maintenance | Tenant asks to install grab bars | `no-alterations`, `edu-improvements-la`, `improvements-ownership-la`, `edu-disability-modifications-la`, `edu-disability-accommodation-la` |  |
| 77 | Maintenance | Tenant wants to install an EV charger | `edu-no-ev-charging-right-la`, `ev-charger-installation-la` |  |
| 78 | Maintenance | Tenant wants a satellite dish | `edu-no-telecom-access-la` |  |
| 79 | Maintenance | Code inspector cites the property | `edu-rental-inspection-la`, `edu-government-fines-la`, `government-fines-reimbursement-la` |  |
| 80 | Maintenance | Property condemned | `edu-no-condemned-rent-bar-la` |  |
| 81 | Maintenance | Water heater temperature | `edu-no-water-heater-rule-la` |  |
| 82 | Maintenance | Pool on the property | `edu-no-pool-safety-rule-la` |  |
| 83 | Entry | Landlord wants to show the unit | `landlords-access`, `edu-landlord-entry-la` |  |
| 84 | Entry | Emergency entry for a burst pipe | `landlords-access`, `edu-landlord-entry-la` |  |
| 85 | Entry | Tenant installs cameras | `edu-no-tenant-camera-rule-la` |  |
| 86 | Entry | Landlord installs smart locks | `edu-no-smart-access-law-la` |  |
| 87 | Use | Tenant runs a hair salon from the unit | `edu-no-home-business-rule-la`, `residential-use-only`, `edu-residential-use-remedy-la` |  |
| 88 | Use | Tenant subleases on Airbnb | `no-sublet-assign`, `edu-sublet-assign-la` |  |
| 89 | Use | Tenant's boyfriend moves in | `permitted-occupants`, `edu-no-occupancy-limit-la`, `guest-policy` |  |
| 90 | Use | Tenant smokes marijuana | `smoking-policy`, `edu-smoking-law-la`, `edu-no-cannabis-tenant-protection-la` |  |
| 91 | Use | Tenant keeps a firearm | `edu-firearms-la`, `firearm-rules-la` |  |
| 92 | Use | Tenant gets a dog | `pet-policy-or`, `edu-pet-policy-la`, `edu-pet-fees-la` |  |
| 93 | Use | Tenant's dog bites a neighbor | `pet-insurance-requirement` |  |
| 94 | Use | Tenant displays political signs | `edu-us-flag-display-la`, `us-flag-display-la`, `edu-no-political-access-la` |  |
| 95 | Use | Tenant displays religious items on door | `edu-no-religious-display-la` |  |
| 96 | Use | Tenant grills on balcony | `fire-safety-grilling` |  |
| 97 | Use | Tenant keeps a waterbed | `edu-no-waterbed-rule-la` |  |
| 98 | Use | Loud parties | `no-disturbance`, `edu-disturbance-la`, `edu-nuisance-abatement-la` |  |
| 99 | Use | Drug dealing from the unit | `criminal-activity-la`, `edu-criminal-activity-eviction-la`, `edu-nuisance-abatement-la` |  |
| 100 | Use | Tenant calls police repeatedly | `edu-emergency-assistance-right-la`, `edu-law-enforcement-cooperation-la` |  |
| 101 | Use | Vehicle abandoned in the lot | `edu-towing-la`, `parking-vehicle-rules` |  |
| 102 | Use | Tenant leaves for a month | `extended-absence-notice-ks`, `edu-absence-notice-la` |  |
| 103 | Use | Tenant organizes a tenants' association | `edu-no-tenant-organizing-right-la` |  |
| 104 | Disaster | Hurricane damages the unit | `casualty-termination-la`, `edu-disaster-tenancy-la` |  |
| 105 | Disaster | Parish declared a federal disaster; tenant evacuated | `edu-disaster-tenancy-la`, `edu-abandoned-property-la`, `abandoned-property-la` |  |
| 106 | Disaster | Tenant hosts displaced family | `edu-no-disaster-guest-rule-la` |  |
| 107 | Disaster | Power out for a week after a storm | `edu-no-shutdown-protection-la`, `services-utilities-provided-ks-oh` |  |
| 108 | Default | Tenant doesn't pay rent | `default-by-tenant-la`, `edu-nonpayment-notice-la` |  |
| 109 | Default | Landlord changes the locks | `edu-self-help-eviction-la`, `edu-no-lockout-statute-la` |  |
| 110 | Default | Landlord shuts off utilities | `edu-utility-shutoff-rules-la`, `edu-self-help-eviction-la` |  |
| 111 | Default | Landlord seizes tenant's furniture | `edu-lessor-privilege-la` |  |
| 112 | Default | Tenant files bankruptcy | `edu-no-tenant-bankruptcy-rule-la` |  |
| 113 | Default | Landlord wants accelerated rent | `edu-landlord-remedies-la`, `rent-acceleration-la`, `edu-stipulated-damages-la` |  |
| 114 | Default | Landlord wants attorney fees | `edu-attorney-fees-la`, `attorney-fees-fixed-la` |  |
| 115 | Default | Eviction filing and timeline | `edu-notice-to-vacate-la`, `edu-cares-act-notice` |  |
| 116 | Default | Tenant appeals the eviction | `edu-no-possession-bond-la` |  |
| 117 | Default | Tenant pays after notice | `edu-no-redemption-right-la`, `edu-waiver-by-acceptance-la`, `nonwaiver-acceptance-la` |  |
| 118 | Default | Eviction record shows up later | `edu-no-eviction-record-sealing-la` |  |
| 119 | Default | Tenant claims retaliation for a code complaint | `edu-no-retaliation-statute-la` |  |
| 120 | Termination | Month-to-month termination | `edu-termination-notice-la` |  |
| 121 | Termination | Fixed term ends and tenant stays | `holdover-la`, `edu-holdover-la`, `holdover-rate-la` |  |
| 122 | Termination | Tenant breaks lease to buy a house | `early-termination-ks`, `edu-early-termination-la` |  |
| 123 | Termination | Tenant gets PCS orders | `edu-servicemember-rights-la`, `edu-statutory-early-termination-la` |  |
| 124 | Termination | Tenant is a stalking victim | `edu-dv-lease-termination-la`, `edu-dv-qualifying-documents-la` |  |
| 125 | Termination | Tenant is a sexual assault victim | `edu-dv-lease-termination-la` |  |
| 126 | Termination | Tenant dies | `edu-tenant-death-la`, `tenant-death-termination-la`, `tenant-death-contact-la` |  |
| 127 | Termination | Tenant moves to a nursing home | `edu-no-infirmity-termination-la` |  |
| 128 | Termination | Landlord wants to move in | `owner-move-in-reservation-la` |  |
| 129 | Termination | Landlord converts to condos | `edu-no-conversion-protections-la` |  |
| 130 | Termination | Building sold to a new owner | `edu-sale-or-management-change-la`, `edu-deposit-on-sale-la` |  |
| 131 | Termination | Building foreclosed | `edu-foreclosure-tenants-la` |  |
| 132 | Termination | Property taken by expropriation | `edu-eminent-domain-la` |  |
| 133 | Termination | Tenant moves out and leaves belongings | `edu-abandoned-property-la`, `abandoned-property-la`, `edu-post-eviction-property-la` |  |
| 134 | Termination | Tenant moves out and leaves a car | `edu-towing-la`, `edu-abandoned-property-la`, `abandoned-property-la` |  |
| 135 | Termination | End of lease cleaning and keys | `surrender-end-of-term-la` |  |
| 136 | Other | Lease says disputes go to arbitration | `edu-lease-arbitration-la` |  |
| 137 | Other | Lease includes a jury waiver | `edu-no-jury-waiver-rule-la` |  |
| 138 | Other | Lease includes a confession of judgment | `edu-no-confession-of-judgment-la` |  |
| 139 | Other | Tenant asks for lease in Spanish or Vietnamese | `edu-no-translation-duty-la` |  |
| 140 | Other | Landlord is an LLC appearing in eviction court | `edu-entity-landlord-representation-la` |  |
| 141 | Other | Minor signs the lease | `edu-no-minor-eviction-rule-la` |  |
| 142 | Other | Unfair lease term challenged under consumer law | `edu-consumer-protection-act-la`, `edu-no-unconscionability-statute-la` |  |
| 143 | Other | Accessory dwelling unit rental | `edu-no-adu-rule-la` |  |
| 144 | Other | Rental registration with the city | `edu-no-landlord-registration-la` |  |
| 145 | Other | Short-term rental in the same building | `edu-lease-law-scope-la` |  |


## §17 Gap-discovery source 4 — outside-title search (rule 35)
- **Corpus:** the whole index (§1.1): all R.S. titles, all codes and the constitution, loaded before the first battery.
  - Every whole-index run's "legislature" control returned 3,266 hits; constitution-scoped runs returned 143.
  - The nonsense control returned 0 in all 537 runs (§1.5).
- **Constitution, read hit by hit:**

  | Battery | What it searched | Hits |
  |---|---|---|
  | LA-K-CONSTCTRL-01 | control | 142 |
  | LA-K-TENANCY-01 | landlord, tenant, lessor, lessee, lease, rent, rental, housing, dwelling, residence, residential | 13 |
  | LA-K-RIGHTS-02 | privacy, arms, speech, discrimination, impairment of contracts, searches, seizures, religion, assembly | 19 |

  - **What binds only the State:**
    - § 3 (equal protection);
    - § 7 (expression: "No law shall curtail");
    - § 8 (religion: "No law shall be enacted");
    - § 9 (assembly: "No law shall impair");
    - § 23 (impairment of contracts);
    - § 4(B) (expropriation by the state and its subdivisions; `edu-eminent-domain-la`).
  - **What could reach private parties:**
    - § 4(A) (the owner's right to "control, use, enjoy" property, "subject to reasonable statutory restrictions": the landlord's side);
    - § 5 (privacy, "invasions of privacy": private reach a case-law question; `edu-no-tenant-camera-rule-la`, `edu-landlord-entry-la`);
    - § 11 (arms "fundamental", strict scrutiny: private reach unsettled; `edu-firearms-la`);
    - § 12 ("access to public areas, accommodations, and facilities": not housing; fair housing is statutory, `edu-fair-housing-la`).
  - The tenancy hits are taxation, homestead exemption, local finance, mineral leases and juvenile procedure. None reaches residential leases.
  - No provision added by initiative needed a validity check (Louisiana amends only by legislative proposal).
- **Outside-title statutes found by the canvass and main pass:**
  - unclaimed property (La. R.S. 9:151 et seq.);
  - criminal trespass and squatters (La. R.S. 14:63);
  - the crime of keeping tenants' utility money without paying the utility (La. R.S. 14:71.5);
  - the address confidentiality program (La. R.S. 44:52, 44:57);
  - the military relief act: utility shutoffs and the eviction stay (La. R.S. 29:315-319);
  - service dogs and support animals (La. R.S. 46:1951-1956, 46:1971-1978);
  - the foreign-adversary leasing ban (La. R.S. 9:2717.1 et seq.);
  - the US flag display rule (La. R.S. 9:1114);
  - planned-community leasing rules (La. R.S. 9:1141.14, 9:1141.20);
  - the state lead program (La. R.S. 40:1285.1-1285.10);
  - smoke and CO detectors (La. R.S. 40:1581);
  - the Smokefree Air Act's hallways (La. R.S. 40:1291.3);
  - towing (La. R.S. 32:1736);
  - utility privileges (La. R.S. 33:4169.1, 33:4887);
  - the data-breach law (La. R.S. 51:3071-3077);
  - Unfair Trade Practices (La. R.S. 51:1401 et seq.);
  - Equal Housing Opportunity (La. R.S. 51:2601 et seq., including hairstyle and military status);
  - the debit-card surcharge ban and Click-to-Cancel (2026 Acts 751, 830);
  - the Uniform Construction Code (La. R.S. 37:3727-3750);
  - the licensee mold pamphlet (La. R.S. 37:1470);
  - the Residential Property Disclosure Act for lease-options (La. R.S. 9:3196 et seq.).

  Each has a row.
- **Conduct a shared clause restricts:**
  - cannabis: no tenant protection (`edu-no-cannabis-tenant-protection-la`);
  - firearms: vehicle storage protected (La. R.S. 32:292.1, `firearm-rules-la`);
  - signs and flags: the US flag is protected (La. R.S. 9:1114); political signs are not (`edu-no-political-access-la`);
  - religious displays: none (`edu-no-religious-display-la`);
  - privacy and cameras: none (`edu-no-tenant-camera-rule-la`).

  The tagged `common-area-use` and `smoking-policy` notes reflect these.

## §18 Topic canvass (rules 27, 36)
- **Method:**
  - Seven slices (C1-C7, 48 topics each), two agents at a time at most, each saving one JSON line per topic.
  - Briefed with `LA-BRIEF` and `CANVASS-BRIEF`. Three rounds of main-pass rulings were appended between slices:
    - round 1: rent resets, nonrefundable deposits, death contacts;
    - round 2: the state lead program, art. 7, deposit forfeiture, 2027 acts, failed batteries;
    - round 3: new act texts, future-dated sections, the scope flags, towing, construction-code renumbering, notice counting, the Attorney General's guide.
  - Triage leads were passed by topic. `topicrows.py` listed LA rows already drafted, to prevent duplicates.
- **Answers (336 canvassed topics; the other 20 topics were settled by main-pass rows):**

  | Answer | Topics |
  |---|---|
  | Confirmed absent | 183 |
  | Present | 92 |
  | Answered by planned tag | 51 |
  | Answered by main-pass row | 7 |
  | Not applicable | 3 |

- **Every topic keyed:** every one of the 356 topics in the reference has an active LA row keyed to it (§8). The main pass added 9 topic rows where a helper had pointed to a row keyed elsewhere: stove-refrigerator, drug-free-housing-addendum, cure-and-eviction-grounds, the two confirmed-absence catch-alls, security-deposit-penalty, habitability-modifiable, nonpayment-notice and adverse-proceeding-notice.
- **Duplicates merged before the check (rule 27 [MD 5]):** the C2 row edu-deposit-preset-charges-la (not delivered) was merged into `edu-no-deposit-cost-schedule-la` (C1). The script flagged no other cross-slice near-duplicates ([HI 8]: same statute, body similarity above 0.5).
- **Rows drafted:**

  | Source | New rows |
  |---|---|
  | Canvass | 335 |
  | Main pass | 36 |

## §19 Conformance-table entry
LA (2026-10-19), drawn from this log's §§ 4, 6.1, 11, 12 and 14-18. Proposed column (Claude Code sets it at sync):

| Rule | LA | Where |
|---|---|---|
| 37 tenancy type | ✓ | §12 |
| 39 eviction duties | ✓ | §12; court rules boundary in §1.3 and §7 |
| 40 formatting | ✓ | §4 |
| 41 just-cause | ✓ | §11 |
| 41b `for-cause-eviction` row | ✓ | `edu-for-cause-eviction-la` |
| 42 required text in shared clause | ✓ | §11 |
| 43 cure promises | ✓ | §11 |
| 44 terms turned into duties | ✓ | §11 |
| 45 electronic notices | ✓ | §11 |
| 46 lease as the notice | ✓ | §11 |
| 47 knowing-use penalties | ✓ | §11 |
| 48 separate documents | ✓ | §11 |
| 49 collection costs | ✓ | §11 |
| 50 "lease controls" | ✓ | §11, §6.1 |
| 51 plain language | ✓ | §11 |
| 52 exculpation | ✓ | §2.2 |
| 53 figure vs shared clause | ✓ | §11 |
| 54 optional clauses (general screen) | ✓ | §6.1 |
| 54t tenant-caused damage | ✓ | `edu-tenant-caused-damage-la`: the Civil Code supplies the rule, with the casualty clause's fault exception matching art. 2687's persons |
| 35c constitution screen | ✓ | §17 |
| 27 seven topics with no row | ✓ | every topic keyed, §8 |
| 55 three-bucket test | ✓ | §3 |
| 57 one subject per row | ✓ | §3 |
| 79 summaries re-read | ✓ | every row was read section-open and the independent check reread every section relied on |
| 54 e.g. holdover charge | ✓ | `holdover-rate-la` |
| 54 e.g. casualty termination | ✓ | `casualty-termination-la` |
| 54 e.g. statutory waivers | ✓ | `notice-to-vacate-waiver-la` (art. 4701) |
| 54 e.g. crime-free clause | ✓ | `criminal-activity-la` |
| 54 e.g. eviction-fee clause | n | a flat eviction fee is stipulated damages that can't be recovered alongside the rent or performance it stands in for (art. 2007), and fees are limited to art. 2000's fixed or determinable attorney fees (`edu-no-eviction-penalty-rule-la`); not offered |

It ran on SOP 1.75 under the usage budget.


## Proposed SOP changes
- **Rule 16:** when the official site publishes a citator or "sections affected" index, crawl it once and run every cited section from an uncompiled title through it after each canvass slice, not only at the end. Louisiana's Act 881 (the whole Uniform Construction Code moved to Title 37) and Act 575 (a privilege extended to parishes) were found only by that per-slice run.
- **Rule 16:** a résumé digest or bill digest saved from the official site can settle what an act changes when the rendered page can't be screenshotted. Louisiana's Act 708 digest showed the 2027 text adds only vacant lots, which let two rows be verified. Allow it as currency evidence beside the enrolled act, never instead of it.
- **Rule 39:** check the state's procedure code for a computation-of-time article before stating any short statutory period. Louisiana's five-day notice to vacate excludes weekends and holidays through La. Code Civ. Proc. art. 5059(C)(3) and La. R.S. 1:55(E)(3); neither is in the eviction title. The official handbook's "five business days" was the only lead.
- **Rule 29:** in a civil-law state, walk the property-law titles the lease title points to (usufruct, ownership), not only the lease and obligations titles. The usufructuary-lessor rule (arts. 567-568.2, 2716) sits outside the lease title's index.
- **Rule 27:** canvass briefs should tell helpers that a topic answered by a row keyed to another topic still needs a short row keyed to its own topic. Louisiana's main pass had to add nine such rows after the slices.
- **Rule 80 / briefs:** helpers can't write SUMMARY.md in this harness. Briefs should ask for the summary in the final reply, and the main pass should save it if the log needs the file.

- **Rule 16:** never resolve a helper's "citator check pending" marker with one bulk replacement sentence. Check each row's relied-on sections against the citator results and name any entry that exists. Louisiana's bulk sentence was wrong in two rows that round 2 caught.

## Proposed topic questions
- `security-deposit-return`: Does a deposit statute amendment add a second deadline for the itemized statement (Louisiana: within one month or within fifteen days after that month, La. R.S. 9:3251(A) as amended by 2026 Act 63)?
- `eviction-process`: Does the procedure code's computation-of-time article exclude weekends and holidays from the eviction notice period (Louisiana, La. Code Civ. Proc. art. 5059(C)(3); La. R.S. 1:55(E)(3))?
- `sale-or-management-change`: Does a lease end, or may it be ended, when the lessor's limited right in the property ends (Louisiana usufruct, La. Civ. Code arts. 567, 568.2, 2716)?
- `scope`: Is a discrepancy between the area stated in the lease and the area delivered governed by the sale rules (Louisiana, La. Civ. Code art. 2685)?
- `assistance-animal-accommodation`: Does a service-dog access statute give trained service-dog users housing access without a direct-threat exception (Louisiana, La. R.S. 46:1954(C))?
- `fire-code-standard`: Has the state moved its construction code to a new title this session (Louisiana 2026 Act 881: La. R.S. 40:1730.21 et seq. to 37:3727 et seq.)?
- `eviction-service-party`: Must papers for an address-confidentiality program participant be served on the Secretary of State (Louisiana, La. R.S. 44:57)?

## Sync review (Claude Code, 2026-10-19)
- **Merge:** `merge-delta.py` against base 9ab06a1: 371 new rows and 54 existing rows changed only in their LA tag and note segment; 7,659 rows, byte-exact CRLF round trip. The delta's SHA-256 is c767a031...89d5 (the log states none).
- **Edited after the last check (§13):** the ten rows read against the corpus text: La. Code Civ. Proc. art. 4731(C)(2)-(3) (`edu-money-limits-la`, `edu-attorney-fees-la`: fees "for actions brought pursuant to this Article"), La. R.S. 9:3251(C) (`edu-no-deposit-cost-schedule-la`), 9:3261.1(D)(1)(b) (`edu-no-drug-free-addendum-la`), 37:1470(C) (`edu-no-mold-disclosure-la`), La. Civ. Code art. 2710 and La. R.S. 13:3881(A) (`edu-post-eviction-property-la`: 15 days, identifiable, household pets exempt), and 9:2603(B)(4)(b)(ii) (`edu-no-actual-notice-rule-la`); the three notes-only rows checked as described. No errors.
- **Statute spot-check:** La. R.S. 9:3251-3252 against `security-deposit-return-la` (one month, statement "within the time Louisiana law allows", which works under both deadlines of Act 63's wording); La. Civ. Code art. 2699 against `warranty-waiver-la` (specific conditions, initials, the three ineffective cases excluded); La. Code Civ. Proc. arts. 4701 and 5059(C)(3) against `notice-to-vacate-waiver-la` and the five-day counting; La. Civ. Code arts. 2005, 2007 and 2012 against the shared `late-fee` tag, `holdover-rate-la` (charge in place of damages, never with Rent for the same day) and `rent-acceleration-la` (an election instead of dissolution): the clauses match.
- **One clause change (every-reading rule, SOP Part 5):** Louisiana was tagged on the shared `early-termination-ks`, whose fee is "one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater". That is stipulated damages a court may modify if "manifestly unreasonable" (art. 2012), and art. 2007 bars demanding both stipulated damages and performance. Louisiana now has its own `early-termination-la` (supersedes `early-termination-ks`; LA untagged from it): a flat one-month fee, no Rent after the termination date once the tenant gives notice, pays and leaves, notice of at least 30 days "or any longer notice Louisiana law requires" (art. 2718's longer-period rule, which can't be renounced in advance), and the statutory exits (La. R.S. 9:3261, 9:3261.1, 9:3261.2) kept. The row count is unchanged at 425 LA rows.
- **Section pointers:** `surrender-end-of-term-la` pointed to "the Holdover Section"; `holdover-la` is titled "Holdover and Reconduction", so the pointer now names it.
- **Same-topic pairs:** three, each explained in §8 (`late-fee` and `prompt-payment-discount-la`; `no-alterations` and `improvements-ownership-la`; the two tenant-death rows): different subjects, no choice group needed.
- **Open items (§7):** no row is NEEDS_REVIEW; the case-law questions are stated in their rows with the cautious course. The Administrative Code, court rules and parish ordinances are the stated boundary, and the dated items (the January 1, 2027 acts, compiled-number collisions, the Act 277 election) are in the legal watch.
- **Citations file:** `lease-clause-citations-LA.csv`, 425 rows (208 CITED: 95 lease clauses and 113 education rows; 208 CONFIRMED_ABSENT; 9 GENERIC: shared contract terms whose LA note says no Louisiana statute governs). One citation not in the corpus listing (a La. R.S. 10:9 UCC section in the 10:9-xxx form) was dropped from the file and stays in the row's notes.
- **Legal watch:** `legal-watch-la.yml`, held until after September 20, 2028 (first run October 20, 2028, day 20 at 14:00 UTC); 626 sections keyed by site label (`CC 2713`, `RS 9:3251`, `CCP 4701`), queried in the bill form (`"Civil Code Article 2713" AND "Louisiana"`); manual items for the dated law and for the rules, forms, guide and Administrative Code.
- **SOP 1.76:** all seven proposals adopted. Seven topic questions added (357 topics, including the new `usufructuary-lessor`). No new `{{variables}}`. §10's shared-row findings (`assistance-animal-accommodation`, `rental-application-accuracy`, `governing-law`) are in the backlog for the end-of-run consistency pass.
