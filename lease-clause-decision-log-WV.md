# West Virginia — lease-clause decision log (state #37)

**Dates:** research pass 2026-10-05; final checks, two effective-date reads and delivery 2026-10-08. **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser on Taylor's computer. **Research mode not used.** None of the three rule 9 triggers needed it: the whole West Virginia Code and the Constitution were loaded, saved and hash-matched before the first battery, which gave full-text proof of absence and cross-chapter search directly (§1.3). Only Taylor can switch research mode on or off.
**Kickoff vs SOP:** one stale lead, no conflict. Kickoff lead 8 cites the Fair Housing Act at "W. Va. Code ch. 5, art. 11A"; every section of art. 5-11A now prints [Repealed.]. The Act moved to art. 16B-18 under S.B. 300 (2024), effective from passage February 8, 2024, per the 2024 code-affected list. Rows cite art. 16B-18. Citation formats are the kickoff's (`W. Va. Code § 37-6A-2(b)(1)`, `W. Va. Code §§ 37-6-5, 37-6-30`, `2024 W. Va. Acts ch. N` or `Enr. Com. Sub. for H.B. 4940 (2024)`, `W. Va. Const. art. III, § 1`) and were checked by script (§8). No case is cited. No legislative rule was read (§7).
**Scope:** West Virginia state law only. Charleston, Morgantown, Huntington and other municipal ordinances are flagged, not resolved (rule 3). The municipal rental-regulation limit in W. Va. Code § 8-1-5a(k) is stated in the rental-registration, inspection and rent-control rows, and its reach is called unsettled. Named and out of scope: factory-built (manufactured) home rental communities (arts. 37-15 and 55-3B; flagged where they differ), residential care communities (art. 16B-9), nursing homes, commercial and agricultural leases, and self-storage (`edu-scope-wv`).
**Input CSV:** `lease-clauses.csv`, **3,704 rows, 17 columns, 3,587 active (848 lease clauses, 2,739 education)**, sha256 61a53793…. Every per-state active count matched the kickoff exactly (rule 23). One dormant WV row existed (§5). This is West Virginia's only Desktop chat (rule 8).
**Output CSV:** `lease-clauses-WV-delta.csv`, **238 rows, 17 columns, CRLF**, sha256 b607270603c74995002ab4f299bae0839cf251eb755b7e0b047074c9e011be82. It holds:
- 53 existing rows with `WV` added to `states`, a `WV:` note appended and `last_checked` set;
- the dormant `security-deposit-return-wv`, rewritten and activated;
- 184 new WV rows: 13 lease clauses and 171 education rows.

**WV active after merge: 238 rows, all VERIFIED.** They are 66 lease clauses (52 tagged and 14 WV clauses) and 172 education rows (171 WV and the federal `edu-cares-act-notice`). Merged with the master, the library has 3,888 rows, 3,772 of them active. Every other state's active count is unchanged. **No shared row's text changed.**

---

## 0. Completion status

| | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§14: W. Va. Code arts. 37-6 (31 sections), 37-6A (6), 55-3A (3), 55-3 (6) and 55-3C (6) read whole, with art. 36-4 (22, lease and deed covenants) and art. 16B-18 (21, Fair Housing Act). Each section list was diffed by script against every citation in the WV rows, and every uncited section is listed with its reason. Subsection-level diff for the core sections: every subsection is cited except two savings clauses.) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Fairmont-Morgantown Housing Authority Public Housing Lease (rev. 2023-12-04, 21 pages), mapped provision by provision. It is a weaker lead because it is a HUD public-housing lease; no free professional West Virginia private-market lease was found. Reasons given.) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 88 Claude-generated scenarios on the AZ §18.1 model plus West Virginia-specific ones, run against the rows. 8 scenarios had gaps and 9 cross-row inconsistencies were found; all were filled or fixed before the independent check.) |
| Gap-discovery source 4 — outside-title search | Done (§17: the whole West Virginia Code (2,374 articles; 31,329 searchable entries) and the Constitution (205 entries) were loaded and hash-matched before the first battery, then searched with 581 battery records. Control 0 in every battery. Every failed known positive was recorded and either rerun or left uncited. Relied-on hits were read section-open.) |
| Primary text read | **Saved and hash-matched (browser SHA-256 equal to file SHA-256; `sources/REGISTRY.md`):** the whole Code (five part files), two section-page check copies (230 distinct sections), the Constitution, bill-status pages and enrolled acts for six bills, the magistrate wrongful-occupation forms, the Rules of Civil Procedure for Magistrate Courts, the Trial Court Rules, the Administrative Rules for the Magistrate Courts, and the real lease. **Read whole:** arts. 37-6, 37-6A, 55-3, 55-3A, 55-3C, 36-4 and 16B-18, and the lease. Every other cited section was read section-open. **Cases:** none read (§1.4). |
| Step B — tag first | **Done.** 53 existing rows tagged WV (§2.1). 23 shared clauses were screened and not tagged (§2.2). All 773 single-state clauses were screened as a triage; none was tagged (§2.3). No shared text was edited. |
| Step E — new WV rows | 14 WV lease clauses (§3.1): 5 overrides of shared clauses, including the rewritten dormant row; 9 options and conditional clauses under rule 54. Also 171 education rows (§3.2). |
| Rule 25 | `security-deposit-return-wv` verified, rewritten and activated (§5). |
| Step D screens | All run (§19). The decisive West Virginia rules: § 37-6A-2(b), the closed list of deposit uses; § 37-6A-4, no waiver of the deposit article; § 37-6-30(b)-(c), a greater lease repair duty controls, and the arrears excuse; § 61-3-39e, the $25 dishonored-check fee; the debt-collection limit on incidental charges in § 46A-2-128(d) (library-wide reading, §6.3); and § 39A-2-11(2)(B), which bars electronic default, eviction and cure notices for a primary residence. |
| Optional clauses (rule 54) | 10 offered (§6.1). Every declined option has an education row. |
| Questions to Taylor (rule 76) | One legal question, on an effective date (§6.2). Every other call was legal or drafting and is recorded in §6.3. |
| Proof of absence | Absence rows cite their battery, hit count and known-positive result, generated from the saved log. Every topic in the reference ends Present, Confirmed absent, Answered elsewhere, Not offered or Not applicable (§18). None is left Not located. |
| Independent check | Separate agents checked every row against the saved sources: round 1 covered all 238 rows (8 ERROR, 39 FIX, 58 NOTE), and twelve later rounds each covered only the rows edited since the last (§13). A provenance clean-up of note pointers, which made no legal changes, was checked by script and by Claude reading every changed sentence (§13). |
| Currency | No currency statement on the site; currency comes from each section page's Bill History and Signed Bills lists and the 2024-2026 code-affected lists. The 2026 regular session's tenancy bills were read: HB 4570 and SB 799 died; four enacted bills since 2024 were read as enrolled (§1.2). |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Channel:** the built-in browser on Taylor's computer loaded each official page and saved JSON or PDF to his Downloads folder, approved in this chat. Each download landed under a temporary `.tmp` name; it was identified by size and SHA-256, renamed, staged into the workspace and hash-matched (browser SHA-256 equal to file SHA-256). The registry is `sources/REGISTRY.md`. Files:
  - `wv-code-corpus-20261005-part1.json` (19,859,966 bytes, sha256 7b1d6a4691f42942b410066005b2d0d6cf7406c4454056d1d9bda673aa2c7ccb): chapters 1-16 (714 articles). https://code.wvlegislature.gov (wp-admin/admin-ajax.php `get_all_sections` per article; section pages `https://code.wvlegislature.gov/<section>/` for index entries the article payload did not head).
  - `wv-code-corpus-20261005-part2.json` (15,190,988 bytes, sha256 541964d3fcab3267b670951247d082a43651f6fd511ae782b08e17fd94385e04): chapters 16A-24A (638 articles). same.
  - `wv-code-corpus-20261005-part3.json` (13,144,946 bytes, sha256 b11be41d6fc1d9afccab7da02b69f39e851bc489f4c1786f84c3330025bbc8af): chapters 24B-36B (531 articles). same.
  - `wv-code-corpus-20261005-part4.json` (5,706,884 bytes, sha256 b5ad5c3db452dbd94cf69a47f9652d1fcae673e4073b72a9bb1b62361b80c161): chapters 37-48 (270 articles), re-exported after chapter 37 was recrawled with section pages. same.
  - `wv-code-corpus-20261005-part5.json` (5,433,337 bytes, sha256 6bba2bac8743f6247afbbe5bcfb10f3bd032c2adfbb91d0d9aa9b4ffae800ec4): chapters 49-64 (221 articles). same.
  - `superseded/wv-code-corpus-20261005-part4-chapter37-without-section-pages.json` (5,705,409 bytes, sha256 65cd5d3bd837c2ada4dc5e6cff87f66eeeb433ff28f574d0440858bca6af4bdf): first part-4 export; chapter 37 lacked section pages (§ 37-13-1a missing). Never used for a row.. same.
  - `wv-code-checkcopy-20261005.json` (737,075 bytes, sha256 bae95ee3d03739da03244a1441c755b39bd1c0b2ec44d37c814ca01fff1e4351): check copy: 210 relied-on section pages fetched separately, with Bill History and Signed Bills blocks. https://code.wvlegislature.gov/<section>/.
  - `wv-code-checkcopy-20261005-b.json` (104,373 bytes, sha256 4ae78bf28fef6b5e4716979b7c1cc36ff66f941a0290f829a64f4658ab8d0ea2): check copy b: 23 sections flagged by the canvass agents. same.
  - `wv-constitution-20261005.json` (208,517 bytes, sha256 28abda4e00ff2fa5c737e58b81383bb6e0cb82f39480616f241a71d9c9c245b0): Constitution of West Virginia, whole page (preamble and 204 sections). https://www.wvlegislature.gov/WVCODE/WV_CON.cfm.
  - `wv-session-laws-20261005.json` (5,647,858 bytes, sha256 1624b33f1a4c761b424e979a1b3f7ed00cb091fcbf66d1a854cc407a38e0bf35): bill status, enrolled acts, code-affected lists. https://www.wvlegislature.gov/Bill_Status/bills_history.cfm (HB 4570 2026, SB 799 2026, HB 3272 2025, HB 4940 2024); Bill_Text_HTML enrolled prints of HB 3272 (2025) and Com. Sub. for HB 4940 (2024); Bills_Code_Affected.cfm for 2024, 2025 and 2026, regular and 1X-3X sessions.
  - `wv-session-laws-20261005-b.json` (109,930 bytes, sha256 4b9a848021449ee2fe089d1a7441ab8af04cc3bde84574728c87cc79aee9baaa): Stop Squatters Act (Com. Sub. for HB 2434, 2025) status and enrolled text. bills_history.cfm?input=2434&year=2025; Bill_Text_HTML/2025_SESSIONS/RS/bills/hb2434 sub enr.htm.
  - `wv-session-laws-20261008-c.json` (51,093 bytes, sha256 91569807f03cca346efe335122131844961a2b2d6b7e05e48a84dd5ac709fb85): accessory dwelling units (2026 W. Va. Acts ch. 241) and foreign-ownership (2025 W. Va. Acts ch. 120) status pages and enrolled acts, read to settle effective dates. bills_history.cfm for SB 659 (2026) and HB 2961 (2025); Bill_Text_HTML/2026_SESSIONS/RS/bills/sb659 sub1 enr.htm; Bill_Text_HTML/2025_SESSIONS/RS/bills/hb2961 sub1 enr.htm (retrieved 2026-10-08).
  - `wv-court-forms-rules-20261005.json` (48,251 bytes, sha256 58d7bf207bab00d02756f776a0960941f8ccd84f08e7d5fb4e43362ed936cbf7): magistrate wrongful-occupation forms; Rules of Civil Procedure for Magistrate Courts. https://www.courtswv.gov/sites/default/pubfilesmnt/ (MLTPTWR, MLTPTWF, MLTSMWO, MLTAWWO PDFs, each with its own PDF SHA-256 inside the file); https://www.courtswv.gov/legal-community/court-rules/rules-of-civil-procedure-for-magistrate-court.
  - `wv-court-rules-tcr-mar-20261005.json` (251,119 bytes, sha256 5ebe9488762a51532d2dff029374db3b38840a9e8ee9fd2ceb670a496051a923): West Virginia Trial Court Rules; Administrative Rules for the Magistrate Courts. https://www.courtswv.gov/legal-community/court-rules/wv-trial-court-rules-contents; .../magistrate-court-proceedings-administrative-rules.
  - `wv-real-lease-fmha-2023.pdf` (331,346 bytes, sha256 4a8c580a2b802a7c64e4b0ed5d1e65b80b966483fe234be620f8c58fd62cd148): real lease (gap-discovery source 2), 21 pages, PDF modified 2023-12-04. Fairmont-Morgantown Housing Authority document center, https://fmhousing.com/document_center.php ("Public Housing Lease", file "Public Housing Lease 20231204.pdf").
  - `wv-real-lease-fmha-2023.txt` (75,442 bytes, sha256 c3229d8ec28efbc64083d7239d46c731a993304e462b79d4d787c8c863895d94): extracted text. pdftotext of the PDF above.
- **Citation format:** the kickoff's. Log references in notes are written "WV log §N". Session laws are cited by enrolled bill and Acts chapter.

### 1.2 Currency (rule 16)
- **Compiled text:** code.wvlegislature.gov as served on 2026-10-05. The site prints no currency statement. Each section page carries a "Bill History" (code-affected) list and a "Signed Bills" list. The Legislature's code-affected lists for the 2024, 2025 and 2026 regular sessions, and for every special session in those years, were saved: the 2024 1X-3X sessions met; no 2025 or 2026 special session list exists. Every section a row relies on was compared with those lists.
- **Bills read (status page and enrolled act saved):**
  - **Enr. Com. Sub. for H.B. 4940 (2024)** (2024 W. Va. Acts ch. 251; approved March 22, 2024; effective June 4, 2024). Adds § 37-6-31 (squatters are outside art. 37-6; no eviction required). It also created the first two sections of art. 55-3C, which the 2025 Act below rewrote. Rows: `edu-unauthorized-occupants-wv`, `edu-holdover-wv`, `edu-self-help-eviction-wv`.
  - **Enr. H.B. 3272 (2025)** (2025 W. Va. Acts ch. 1; approved April 28, 2025; effective July 11, 2025). Amends § 55-3A-1: the summary-relief hearing is set 5 to 10 judicial days after filing. Rows: `edu-eviction-process-wv`, `edu-eviction-grounds-wv`.
  - **Enr. Com. Sub. for H.B. 2434 (2025)**, the Stop Squatters Act (2025 W. Va. Acts ch. 219; approved April 29, 2025; effective July 10, 2025). It amends §§ 55-3C-1 and -2 and adds §§ 55-3C-3 to -6. The status page's code-affected list still names the introduced bill's §§ 55-3D-1 to -4; the enrolled act and the compiled code use art. 55-3C (§10). Rows: `edu-unauthorized-occupants-wv`.
  - **Enr. Com. Sub. for S.B. 659 (2026)**, accessory dwelling units (2026 W. Va. Acts ch. 241; passed March 6, 2026; approved March 14, 2026; effective June 4, 2026, per both the enrolled heading and the status page; read 2026-10-08). The act numbers the article 8-40; the code prints it as art. 8-42, since art. 8-40 is the home-business article. The 06/25/26 date on the code-affected list is the date of the status action recording the Acts chapter, not the approval date. Row: `edu-accessory-dwelling-unit-wv` (new topic `accessory-dwelling-unit`).
  - **Enr. Com. Sub. for H.B. 2961 (2025)**, foreign-adversary ownership (2025 W. Va. Acts ch. 120; passed April 12, 2025; approved April 28, 2025; read 2026-10-08). It adds §§ 37-3A-1 to -5; the status page's code-affected list names only -1 and -2. **Effective date conflict:** the enrolled heading says July 10, 2025, and the status page says July 11, 2025 (a 90-day count from April 12 also gives July 11). Taylor decided the row states July 10 (§6.2). July 11 is recorded in the notes and flagged for the legal watch (§7). Row: `edu-foreign-ownership-wv`.
  - **S.B. 300 (2024)**: Fair Housing Act and Human Rights Act moved from arts. 5-11A and 5-11 to arts. 16B-18 and 16B-17, effective from passage February 8, 2024, per the 2024 code-affected list. The enrolled act was not read; the move is evidenced by the repealed sections and the code-affected list, and no row depends on its date.
- **2026 regular session, not enacted:** H.B. 4570 (amending § 37-6-5) passed the House February 6, 2026; its last action was reference to Senate Judiciary on February 9, 2026. S.B. 799 (amending § 55-3A-1) passed the Senate February 20, 2026; its last action was reference to House Judiciary on February 23, 2026. Neither appears on the 2026 signed-bills list (kickoff lead 1, §12).
- **Dated or contingent versions:** two sections carry a second printed version ("#v2"), §§ 11-2-5 and 11-2-5a (tax), and neither is cited. § 24A-2-2b prints an empty current text plus an earlier-act note; it is not cited (§10).

### 1.3 Corpus and method (rule 19)
- **Crawl:** for each article, the site's own `wp-admin/admin-ajax.php` action `get_all_sections`. Wherever the article payload did not head an index entry, the crawler fetched that section's own page (`https://code.wvlegislature.gov/<section>/`). Records were kept in the browser's IndexedDB and exported in five parts. Sleeps used a Web Worker timer (rule 19, OR 1).
- **Proof of completeness, before the first battery:**
  - All 2,374 articles in the chapter indexes were exported, with 31,326 index entries (31,324 unique section numbers).
  - The parser (`work/corpus.py`, v2) found every one: 0 missing.
  - It produced 31,329 code entries (31,327 sections and 2 second versions) and 205 Constitution entries (preamble and 204 sections).
  - 23 sections have no text; all are "Reserved".
  - 658 unnamed heading blocks in the payloads were merged into the preceding section, and 13 were covered by section pages.
  - Check copy: 230 distinct relied-on sections were fetched again as separate section pages, and all matched the corpus text.
- **Crawl note:** an early chapter 37 export lacked section pages and missed § 37-13-1a. Chapter 37 was recrawled and part 4 replaced; the first file is kept under `sources/superseded/` and was never used. Three crawler tabs ran concurrently against code.wvlegislature.gov, against rule 19's sequential rule for a throttled site. The site never throttled (0 non-OK responses across the crawl), and the completeness proof above covers every article (Proposed SOP changes).
- **Parser fix and replay:** a first parser dropped heading-only text and second versions of two-version sections, and missed headings printed with an en dash ("§46-2A–501"). Parser v2 fixed all three, and every battery was replayed on the final corpus (`batteries/replay-v3-*.jsonl`). No battery's known-positive result changed. Twelve hit counts moved by one or two (listed in `batteries/replay-v3-changes.json`), none of them in a zero-hit absence. Every row citation is generated from the final log.
- **Engine:** Python over the saved corpus (`work/engine.py`). Whitespace is collapsed (U+FEFF and U+00A0 included) and apostrophes are normalized. Heading-only hits are reported separately and never counted. An optional tenancy-context limb is recorded with each battery, and most batteries also have a no-context rerun (`-nc`). The control term `zqxjvwk` ran in every battery and returned 0 hits in all of them. Synthetic positives test the pattern limb, and real saved sections test pattern and context together.
- **Batteries:** 581 battery names: 177 by the main pass (`batteries/wv-batteries.jsonl`) and 404 by six canvass agents (`agent-a` to `agent-f`). 579 were replayed on parser v2; `d-ssn` and `d-ssn-ev` ran after the replay. In all, 1,160 records. Of these, 400 batteries are cited in rows.
- **Failed known positives (recorded, never cited as passing):** 44 batteries. Each is either rerun under a new name or not cited; where a note names a failed battery, it says "failed … and is not cited" or "superseded".
  - Reruns: a-tenant-repair-agree → -r3; a-emergency-phone → -r2; a-health-rental → -r2; b-attorney-fees → -r2; b-lockout → -r2; b-servicemember-lease → -r2; b-utility-tenant-shutoff → -r2; c-contamination, c-pesticide-notice, c-rights-statement → -r2; d-exculp-lease, d-ins-claim-ev, d-gov-fines, d-lien, d-mgmt-change → -r2; e-sprinkler → -r2; double-let → a-double-let-r2; extended-absence → e-extended-absence; payment-method → e-payment-method; key-fee → e-key-control; repair-deduct → a-repair-deduct-r2; just-cause-ev → b-just-cause-ev; holdover-double → b-holdover-rate and b-holdover-ev.
  - Not rerun and not cited: fraud-lodging, hoa, lawn, manufactured-home, owner-disclosure, rental-registration, a-promise-repair (each subject was answered by a section read directly).
- **Zero-hit batteries with only synthetic positives (rule 19):** most have an everyday or no-context companion, for example a-locks-ev-nc (5 hits), b-hardship-ev (8), b-nonpayment-ev (1), c-dv-ev (4), c-window-ev (9), d-inspection-ev (14) and f-nonresident-landlord-ev (34). The following stand on their own patterns, each already written in the everyday vocabulary with no context limb: waterbed, water-heater, renters-insurance, police-call, d-mgmt-change-r2 and a-alarm-tamper-nc.
- **Boundary:** the West Virginia Code and Constitution as served on 2026-10-05, the magistrate forms and court rules listed in §1.1, and the six bills in §1.2. Not searched, and nothing is claimed about them: the Code of State Rules (legislative rules, including the State Building and Fire Codes, Department of Health rules, Public Service Commission rules and Real Estate Commission rules), the Rules of Civil Procedure for trial courts, case law, federal law and local ordinances.
- **Tools:** battery citations in rows are generated from the saved log (`work/engine.py` `cite()`, which refuses a failed battery). Every single-quoted passage is checked word for word against the cited section, the saved forms or the saved rules; 672 quotes pass and 0 fail (§8).

### 1.4 Section-open vs recall; case law (rules 15, 21)
- Every WV row and every WV segment was written with its sections open from the saved corpus, and each ends "Rule 15: written section-open". The check script found no row without it (§8). No row was written from recall.
- **Case law:** none read or searched. Rows that turn on a judicial question say "case law not searched". Questions left to case law:
  - whether the debt-collection article (§§ 46A-2-122 to -129a) reaches residential rent (`edu-consumer-protection-wv`, §6.3);
  - unconscionability of residential lease terms (`edu-unconscionability-wv`);
  - exculpatory and indemnity clauses (`edu-exculpatory-clauses-wv`);
  - waiver by accepting rent (`edu-no-waiver-by-acceptance-rule-wv`);
  - the reach of § 37-6-11(b)(4)'s void-longer-notice sentence (`termination-notice-wv`);
  - pre-dispute jury waivers, arbitration and confession of judgment (`edu-jury-waiver-wv`, `edu-dispute-resolution-wv`, `edu-confession-of-judgment-wv`);
  - the penalty doctrine for holdover premiums (`edu-holdover-rate-wv`);
  - retaliation as a defense (`edu-retaliation-wv`);
  - the reach of § 8-1-5a(k) (`edu-no-landlord-registration-wv`);
  - whether job-tied occupancy is a tenancy (`edu-scope-wv`).
- **Not plain state-code citations (rule 21):** Magistrate Court Civil Rules 1, 6A and 18 to 18A (court rules, from the saved compilation); the four magistrate court forms (MLTPTWR, MLTPTWF, MLTSMWO, MLTAWWO); federal statutes named but not read (15 U.S.C. § 9058 in the shared CARES Act row; 42 U.S.C. § 4852d; 34 U.S.C. § 12491; the SCRA). Legislative rules are named as unread wherever a statute delegates to them (meth-lab disclosure under § 60A-11-3(a)(6); State Fire Code; State Building Code).

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged WV as written (53)
Each tag note starts "WV: Tagged as written (tag-first screen, rules 26-28, WV log §2.1)" and gives the full reason. The assembler refuses an empty reason (KY 2). Fee clauses were screened against the closed deposit-use list in § 37-6A-2(b) and the library-wide § 46A-2-128(d) reading (§6.3). `keys` and `hoa-compliance` were screened as the kickoff asked: West Virginia has no closed list of allowed fees outside the deposit article and no domestic-violence lock-change rule (`edu-no-dv-lockchange-wv`). A rekey charge the lease sets is part of the tenant's obligation, and § 36B-3-102(a)(11) authorizes association fines, so both are tagged. One-line reasons:

- `rent-payment` (clause): No West Virginia statute sets when or where rent is paid or a weekend or holiday rule; a summary-relief petition may rest on the tenant being 'in arrears in the payment of rent' with no demand first (W. Va. Code § 55-3A-1(a)(3); `edu-no-nonpayment-notice-wv`), which 'without demand' matches.
- `due-at-signing` (clause): No statute limits what may be collected at signing or caps a deposit; 'A security deposit does not include prepaid rent' (W. Va. Code § 37-6A-1(14)), so last month's rent collected in advance is prepaid rent, and a pet deposit is a security deposit unless the parties agree in writing that a pet fee is nonrefundable (same subdivision; `nonrefundable-fees-wv`).
- `application-of-payments` (clause): No West Virginia statute orders how a residential tenant's payments are applied; the clause's last sentence keeps the tenant's statutory tender right, under which payment or tender of 'all the rents and arrears, with interest and costs' before trial ends an ejectment or unlawful detainer for rent (W. Va. Code § 37-6-23; `edu-redemption-wv`).
- `acceptable-payment-methods` (clause): No statute requires a residential landlord to accept cash or any method, or bars electronic-only payment (`edu-no-payment-method-rule-wv`).
- `late-fee` (clause): No statute caps a residential late fee or sets a grace period; the deposit may be applied to 'the reasonable charges for late payment of rent specified in the rental agreement' (W. Va. Code § 37-6A-2(b)(1)), which the clause's stated fee satisfies; the landlord's figure must be reasonable.
- `residential-use-only` (clause): No statute limits a residential-use covenant; the home-business statute makes a home-based business a permitted use but does not override 'Any deed restriction, covenant, or agreement restricting the use of land' (W. Va. Code § 8-40-2(a)(1); `edu-home-business-wv`); a breach of a lease covenant is a ground for summary relief (W. Va. Code § 55-3A-1(a)(3)).
- `permitted-occupants` (clause): Occupancy terms may not discriminate because of familial status or another protected class (W. Va. Code § 16B-18-5(a)-(b); `edu-children-occupancy-wv`); the clause names occupants and asks for notice of new ones, which no statute bars.
- `no-disturbance` (clause): No statute limits the covenant; its breach is a 'leasehold covenant' ground for summary relief (W. Va. Code § 55-3A-1(a)(3)).
- `joint-liability` (clause): No West Virginia statute addresses co-tenants' liability for rent; joint and several liability is a contract term.
- `no-alterations` (clause): No statute gives a residential tenant a right to alter; the savings sentence keeps a disabled tenant's right to reasonable modifications at the tenant's expense, with a reasonable restoration condition (W. Va. Code § 16B-18-5(f)(3)(A); `edu-disability-accommodation-wv`), and cable installation rights in buildings of three or more households (W. Va. Code art. 24D-2; `edu-telecom-access-wv`).
- `no-sublet-assign` (clause): A covenant 'that he will not assign or sublet without leave' means 'without the consent in writing of the lessor' (W. Va. Code § 36-4-11), matching the clause's written consent; no statute requires consent to be reasonable or regulates short-term rentals by tenants; with an assignee or sublessee the landlord may hold only one deposit (W. Va. Code § 37-6A-2(f)).
- `tenant-maintenance` (clause): The clause excepts 'any condition that applicable law requires Landlord to repair or remedy', which keeps the landlord's duties in W. Va. Code § 37-6-30(a)(1)-(7); the statute's own exceptions are conditions caused by the fault or lack of reasonable care of the tenant, family or a person on the premises with consent (W. Va. Code § 37-6-30(a)(2), (4)).
- `utility-service-continuity` (clause): No statute addresses a tenant interrupting utility service; for units on direct public utility connections the landlord must supply water, hot water and heat (W. Va. Code § 37-6-30(a)(7)), which the clause does not shift (`utilities-responsibility-wv`).
- `utility-payment-evidence` (clause): No statute bars asking for evidence of payment; it supports `utilities-responsibility-wv` and the owner-liability rules for tenant utility bills (`edu-utility-liens-wv`).
- `existing-condition` (clause): The landlord must 'At the commencement of a tenancy, deliver the dwelling unit and surrounding premises in a fit and habitable condition' (W. Va. Code § 37-6-30(a)(1)); the tenant's acknowledgment records the condition and the landlord's delivery promise matches the duty; whether an acknowledgment could waive the duty is case law not searched, and the clause doesn't claim it.
- `extended-absence-notice-ks` (clause): No West Virginia statute requires notice of an absence or gives an entry right during one (`edu-no-extended-absence-rule-wv`); the covenant and its actual-damages remedy are contract terms (canvass proposal E-2).
- `tenant-forward-proceedings-ca` (clause): No statute requires a tenant to forward notice of proceedings, so the duty is contractual; 'The attornment of a tenant to any stranger shall be void, unless it be with the consent of the landlord' (W. Va. Code § 37-6-4; `edu-attornment-wv`).
- `rental-application-accuracy` (clause): The clause's last sentence keeps out information the Fair Housing Act bars landlords from using (W. Va. Code § 16B-18-5(a)-(c); `edu-protected-class-inquiry-wv`).
- `guest-policy` (clause): No statute gives guests rights against a lease's guest terms; a person the tenant authorized is not a 'squatter' (W. Va. Code § 55-3C-2(a)), so an overstaying guest is handled under the lease (`edu-no-guest-rights-rule-wv`).
- `guest-policy-day-limit` (clause): No statute limits guest stays or bars a day limit; fair housing applies to how it is enforced (W. Va. Code § 16B-18-5(b)); `edu-no-guest-rights-rule-wv`.
- `inspection-rights` (clause): No West Virginia statute sets entry or inspection notice; the clause's 'reasonable notice consistent with this Lease's Access & Entry terms' points to the tagged `landlords-access` (`edu-no-entry-statute-wv`).
- `common-area-use` (clause): No statute gives tenants display rights against a lease (`edu-no-display-rights-rule-wv`) or regulates waterbeds (`edu-no-waterbed-rule-wv`); the savings sentence keeps any display the law protects, and religious items are protected against discriminatory terms (W. Va. Code § 16B-18-5(b)).
- `fire-safety-grilling` (clause): No West Virginia statute governs grills or open flames at residences; the State Fire Code is a legislative rule, not read (`edu-applicable-codes-wv`); the clause is a lease rule.
- `keys` (clause): No West Virginia statute requires rekeying, sets lock standards or gives a domestic-violence lock-change right (`edu-no-security-device-rule-wv`, `edu-no-dv-lockchange-wv`).
- `landscaping-irrigation` (clause): No West Virginia statute limits assigning routine yard upkeep to a tenant or requires a separate writing (West Virginia has no uniform residential landlord-tenant act, so rule 48's single-family split does not arise); the landlord keeps the statutory duties, including common areas in multiple housing units (W. Va. Code § 37-6-30(a)(3); `edu-tenant-repair-agreement-wv`).
- `snow-removal` (clause): No West Virginia statute governs snow removal by tenants or requires a separate writing for tenant chores (no uniform act; rule 48 does not arise); the clause excludes shared areas, which in multiple housing units the landlord must keep 'clean, safe and in repair' (W. Va. Code § 37-6-30(a)(3)).
- `hoa-compliance` (clause): A unit owners' association may 'impose charges for late payment of assessments and, after notice and an opportunity to be heard, levy reasonable fines for violations of the declaration, bylaws, rules, and regulations of the association' (W. Va. Code § 36B-3-102(a)(11)); `edu-hoa-wv`.
- `lead-based-paint` (clause): The federal disclosure; West Virginia adds no lead disclosure of its own (its lead law licenses abatement and requires notice to the state before an abatement project, `edu-lead-abatement-wv`).
- `assigned-parking-space` (clause): No statute regulates assigned residential parking; the clause's limit on changing parking rules refers to any law that applies (none found in West Virginia statutes; whether the accessible-parking statute reaches residential lots is Claude's reading, see `parking-ks-oh-ca`).
- `parking-ks-oh-ca` (clause): Chosen over `parking` (rule 52): no West Virginia statute voids a landlord liability disclaimer, but the Constitution guarantees a remedy for injury (W. Va. Const. art. III, § 17) and enforceability is case law not searched, so the variant without 'not liable' is lawful either way (`edu-exculpatory-clauses-wv`).
- `storage-space-ks-oh-ca` (clause): Chosen over `storage-space` (rule 52, as `parking-ks-oh-ca`).
- `parking-vehicle-rules` (clause): West Virginia has no statute on towing from a private residential lot; a vehicle left on private property without the owner's consent 'for any period over five days' is an 'abandoned motor vehicle' (W. Va. Code § 17-24A-1(3)), removed by an enforcement agency after 30 days' notice by registered or certified mail (W. Va. Code § 17-24A-3); 'in accordance with applicable law' keeps local ordinances and those rules …
- `pet-insurance-requirement` (clause): No statute regulates renter's insurance requirements (`edu-no-renters-insurance-rule-wv`); the assistance-animal sentence matches the rule that a request may not be conditioned on 'terms and conditions applied to applicants or residents with pets' (W. Va. Code § 16B-18-5(f)(10)(D)).
- `pet-policy` (clause): No West Virginia statute caps pet deposits or pet rent (`edu-pet-fees-wv`); a refundable pet deposit is a security deposit and pet rent is rent (W. Va. Code § 37-6A-1(11), (14); that pet rent is rent rather than a nonrefundable fee is Claude's reading); no entry statute limits the removal sentence, which is qualified 'to the extent applicable law permits' (`edu-no-entry-statute-wv`); assistance animals are not pets …
- `assistance-animal-accommodation` (clause): Consistent with the West Virginia Fair Housing Act: documentation may be required only 'from a professional treatment provider' and never medical records (W. Va. Code § 16B-18-5(f)(10)(A)); no fee or deposit (§ 16B-18-5(f)(10)(D)); denial only for a direct threat or substantial physical damage on 'an individualized assessment' (§ 16B-18-5(f)(10)(B)-(C)).
- `smoking-policy` (clause): No statute regulates smoking in private rental housing; smoking medical cannabis is itself unlawful under the Medical Cannabis Act, which says nothing about leases (`edu-smoking-cannabis-wv`, `edu-cannabis-wv`).
- `tenants-property-insurance-ks-oh-ca` (clause): Chosen over `tenants-property-insurance` (rule 52, as `parking-ks-oh-ca`); no statute regulates a renter's insurance requirement (`edu-no-renters-insurance-rule-wv`).
- `services-utilities-provided-ks-oh` (clause): Chosen over `services-utilities-provided`, whose 'not liable' sentence meets the rule 52 screen; 'as otherwise required by applicable law' keeps the water, hot water and heat duty for units on direct public utility connections (W. Va. Code § 37-6-30(a)(7)).
- `utilities-paid-by-landlord` (clause): Rule 44: a lease duty greater than the statute's controls (W. Va. Code § 37-6-30(b)), so the landlord's list binds as written; the statute requires water, hot water and heat for units on direct public utility connections (W. Va. Code § 37-6-30(a)(7); `edu-heating-wv`).
- `appliances-included` (clause): Rule 44: the landlord must maintain 'facilities and appliances ... supplied or required to be supplied by him by written or oral agreement or by law' (W. Va. Code § 37-6-30(a)(5)), so every listed appliance becomes a statutory maintenance duty, which the clause states; `appliances-excluded-wv` lists ones not supplied.
- `landlord-maintenance` (clause): Rule 44 (canvass open question A-1): the clause promises more than W. Va. Code § 37-6-30 requires (no exception for repairs while the tenant is in arrears, § 37-6-30(c); a fault exception only for 'improper use by Tenant or a guest', narrower than the statute's tenant, family member or person on the premises with consent, § 37-6-30(a)(2), (4)); 'If a landlord's duty under the rental agreement exceeds a duty imposed …
- `notices` (clause): West Virginia sets methods statute by statute (notice to quit, W. Va. Code § 37-6-5; abandonment posting and mailing, § 37-6-6(c); deposit delivery, § 37-6A-2(g); hearing notice, § 55-3A-1(c)); the deference sentence keeps them.
- `governing-law` (clause): No statute bars a West Virginia choice of law in a lease of West Virginia property; local ordinances apply where valid (rule 3).
- `severability` (clause): No West Virginia statute bars a severability clause; void terms are unenforceable on their own (for example W. Va. Code § 37-6A-4).
- `entire-agreement` (clause): No statute bars an integration clause; no West Virginia statute lets a landlord change a lease by notice; in a periodic tenancy the landlord's lever is the notice to end it (W. Va. Code § 37-6-5), so a change takes effect only if the tenant stays on (Claude's reading; `edu-term-change-notice-wv`), and in a fixed term 'as applicable law permits Landlord to change it by written notice' adds nothing; a written lease …
- `addendum-precedence` (clause): Rule 46: West Virginia has no optional statutory addendum that must control over the lease, so the exception for addenda 'that applicable law requires' suffices.
- `electronic-signatures` (clause): West Virginia's electronic transactions act 'applies only to transactions between parties, each of which has agreed to conduct transactions by electronic means' (W. Va. Code § 39A-1-5(b)), which the consent sentence supplies; an electronic signature satisfies a law requiring a signature (W. Va. Code § 39A-1-7(d)); the right to refuse later electronic transactions 'may not be waived by agreement' (W. Va. Code § …
- `surrender-end-of-term` (clause): 'to the extent permitted by applicable law' covers the statutory routes for belongings left behind: the abandonment notice for a tenant in arrears (W. Va. Code § 37-6-6(c)-(e); `edu-abandoned-property-wv`) and the post-order rules after summary relief (W. Va. Code § 55-3A-3(h)-(i); `edu-post-eviction-property-wv`); the wear-and-tear return standard matches the statutory meaning of a covenant to leave the premises in …
- `early-termination-ks` (clause): The savings sentence keeps the death termination right, which may not be waived (W. Va. Code § 37-6-11(b)(4)), the casualty surrender right (W. Va. Code § 37-6-28) and the National Guard SCRA extension (W. Va. Code § 15-1F-11); West Virginia has no domestic-violence or illness exit (`edu-statutory-early-termination-wv`).
- `possession-delay` (clause): The landlord must deliver the unit fit and habitable 'At the commencement of a tenancy' (W. Va. Code § 37-6-30(a)(1)); no statute sets a remedy for late delivery, so the clause's rent abatement and 30-day exit are contract terms that favor the tenant.
- `holdover-ca` (clause): A tenant who stays after the right has expired is in unlawful detainer, with damages including mesne profits (W. Va. Code §§ 55-3-1, 55-3-2; `edu-holdover-wv`), which 'actual damages ... including the reasonable rental value' matches; no statutory multiple.
- `landlords-access` (clause): No West Virginia statute sets entry notice, hours or purposes (`edu-no-entry-statute-wv`); the lease is the landlord's source of an entry right (Claude's reading; case law on the tenant's right to possession not searched), and the clause's 24 hours' notice, emergency exception and business-hours limit are contract terms.
- `edu-cares-act-notice` (education): West Virginia law does not make the federal row read wrongly: no state statute requires a notice before filing for unpaid rent (`edu-no-nonpayment-notice-wv`), so on a covered property the federal 30-day notice to vacate is the only notice; the summary-relief hearing is 5 to 10 judicial days after filing (W. Va. Code § 55-3A-1(b)).

### 2.2 Screened and not tagged (23)
- **Replaced by WV overrides (5):**
  - `security-deposit-use` → `security-deposit-use-wv` (closed list, § 37-6A-2(b)).
  - `security-deposit-return` (blank-states parent) → `security-deposit-return-wv`.
  - `utilities-responsibility` → `utilities-responsibility-wv` (§ 37-6-30(a)(7) heat and water duty; owner-liability provisos).
  - `default-by-tenant` → `default-by-tenant-wv`. Collection costs and contractual attorney fees were dropped under §§ 46A-2-127(g), -128(c)-(d). The no-cure sentence excepts the § 37-6-6 abandonment posting, and the § 37-6-23 tender right is kept.
  - `returned-payments` → `returned-payments-wv`. The shared clause's "maximum amount permitted by applicable law" names no figure (rule 53); § 61-3-39e sets $25 for a dishonored check, and the fee stops once a warrant complaint is delivered.
- **Answered by tagged variants (6):**
  - `services-utilities-provided`, `tenants-property-insurance`, `parking` and `storage-space` carry "not liable" sentences, so the variants without them were tagged (rule 52; `edu-exculpatory-clauses-wv`).
  - `holdover` states only a ceiling ("maximum amount permitted by applicable law"; rule 53), so `holdover-ca` (actual damages and rental value, matching § 55-3-2) was tagged.
  - `early-termination`: its landlord-termination limb promises a 10-day cure for any material breach, which would give away West Virginia's no-notice summary relief (rule 43), and it has no periodic-tenancy limit (rule 37). `early-termination-ks` routes landlord termination through the default clause and is limited to a fixed term.
- **Resting on another state's statute (12):** `default-by-tenant-co`, `default-by-tenant-ks-ne`, `late-fee-ne`, `possession-delay-ca`, `surrender-end-of-term-mn-nd`, `surrender-end-of-term-ks-ne`, `acceptable-payment-methods-nj`, `parking-vehicle-rules-id`, `landlords-access-mi`, `ev-charging-shared-area-co`, `ev-charging-end-of-tenancy-co` and `utility-allowance-cap-co`. Each rests on its own state's statute; the base clauses (`possession-delay`, `surrender-end-of-term`, `acceptable-payment-methods`, `parking-vehicle-rules`, `landlords-access`, `late-fee`) are tagged.

### 2.3 Single-state clauses screened (773; rule 26 triage)
The library has 848 active clauses. 52 are in the delta (tagged or overridden), leaving 796: 773 single-state, 22 multi-state (§2.2) and 1 blank-states (§2.2). The 773 single-state clauses split three ways:
- **345** name another state or its statute in `bodyText`. Not tagged.
- **384** have a `topic_key` already answered by a WV row. Not tagged, since the WV row answers the topic.
- **44** were read in full. None was tagged: each rests on its own state's statute or program, or restates a rule West Virginia doesn't have.

Clause, basis and WV answer for the 44:

| Clause | Rests on | WV answer |
|---|---|---|
| late-fee-limit-mn | Minn. Stat. 8% cap | no WV cap; `edu-late-fee-wv` |
| utility-submetering-disclosure-co | C.R.S. § 6-1-737(4.5)(d) | `utility-billing-wv` |
| ev-charging-requirements-co | Colorado EV-charging statute | `edu-no-ev-charging-right-wv` |
| habitability-notice-co | C.R.S. § 38-12-505(3)(d) | `edu-tenant-repair-remedies-wv` |
| prohibited-acts-renter-wy | Wyoming renter-duty statute | shared `no-disturbance`, `tenant-maintenance`, `landlords-access` tagged; `edu-tenant-statutory-duties-wv` |
| lease-notice-initial-requirement-nd | N.D.C.C. § 47-16-15(4) | `termination-notice-wv` (no initials rule) |
| tpa-exemption-notice-ca | Cal. Civ. Code § 1946.2 | no just-cause or rent cap; `edu-no-for-cause-eviction-wv`, `edu-rent-control-wv` |
| owner-move-in-reservation-ca | Cal. Civ. Code § 1946.2 | not applicable |
| bed-bug-cooperation-ca | California program | not applicable (hotel-only statute, § 16-6-16) |
| stove-refrigerator-ca | Cal. Civ. Code § 1941.1 | `appliances-included` tagged; `edu-landlord-repair-duties-wv` |
| pest-control-notice-ca | Cal. Civ. Code §§ 1940.8, 1940.8.5 | not applicable |
| ordnance-demolition-meter-disclosures-ca | California disclosures | `edu-required-disclosures-wv` |
| unbundled-parking-ca | Cal. Civ. Code § 1947.1 | `parking-ks-oh-ca` tagged |
| religious-display-nv | NRS 118A.200(3)(o) | `edu-no-display-rights-rule-wv` |
| sfr-occupancy-disclosure-nv | NRS 118A.200(4) | not applicable |
| utility-billing-disclosure-az | A.R.S. § 33-1314.01 | `utility-billing-wv` |
| water-submeter-disclosure-ca | California submeter statute | `utility-billing-wv` |
| utility-billing-schedule-mn | Minn. Stat. § 216B.023 | `utility-billing-wv` |
| steam-radiator-cover-notice-nj | N.J.S.A. 52:27D-198.20 | not applicable (no radiator statute) |
| security-deposit-standards-sc | South Carolina deposit-standards statute | not applicable (art. 37-6A has none) |
| periodic-services-entry-sc | South Carolina entry statute | `edu-no-entry-statute-wv`; `landlords-access` tagged |
| utility-transfer-tn | Tennessee utility-transfer statute | `utilities-responsibility-wv` |
| eviction-service-party-tn | Tennessee service statute | not applicable (§ 55-3A-1(c) service) |
| utility-billing-va | Virginia utility-billing statute | `utility-billing-wv` |
| smoke-drift-waiver-ut | Utah tobacco-nuisance statute | `smoking-policy` tagged; `edu-smoking-cannabis-wv` |
| ev-charging-requirements-il | Illinois EV-charging statute | `edu-no-ev-charging-right-wv` |
| tenant-records-copy-charge-va | Virginia tenant-records statute | `edu-security-deposit-holding-wv` (§ 37-6A-3) |
| contamination-disclosure-mo | Mo. Rev. Stat. § 442.055 | `edu-required-disclosures-wv` |
| superfund-disclosure-ia | Iowa Code § 562A.13(6) | `edu-required-disclosures-wv` |
| utility-charges-disclosure-ia | Iowa utility statute | `utility-billing-wv` |
| utility-bill-copies-nm | New Mexico utility statute | `utility-billing-wv` |
| sprinkler-disclosure-ny | N.Y. Real Prop. Law § 231-a | `edu-no-sprinkler-duty-wv` |
| certificate-of-occupancy-notice-ny | N.Y. Real Prop. Law § 235-bb | not applicable |
| emergency-contact-consent-ny | N.Y. Mult. Dwell. Law § 15 | not applicable |
| condition-disclosure-wi | Wis. Admin. Code ATCP § 134.04(2) | `edu-required-disclosures-wv` |
| utility-allocation-wi | Wis. Admin. Code ATCP § 134.04(3) | `utility-billing-wv` |
| promised-repairs-wi | Wis. Admin. Code ATCP § 134.07 | `edu-landlord-repair-duties-wv` (§ 37-6-30(a)(5), (b)) |
| utility-notice-authorization-wi | Wisconsin utility rule | not applicable |
| rent-installments-or | Oregon installment-rent rule | not applicable |
| yard-maintenance-entry-or | Oregon yard-entry statute | `edu-no-entry-statute-wv` |
| family-child-care-or | Oregon child-care rule | not applicable |
| utility-billing-or | ORS 90.315(4) | `utility-billing-wv` |
| recycling-notice-or | Oregon recycling program | not applicable (municipal duty, § 22-15A-18) |
| alarm-tampering-fee-or | Oregon alarm-tampering statute | `edu-alarm-duties-wv` |

## 3. New WV rows

### 3.1 WV lease clauses (14)
`lease_clause_basis` is SERVES_LANDLORD for 12 and CONSTRAINED_TERM for 2 (`security-deposit-use-wv`, `returned-payments-wv`). The overrides are `default-by-tenant-wv`, `utilities-responsibility-wv`, `security-deposit-use-wv`, `security-deposit-return-wv` and `returned-payments-wv`; the rest are options or conditional clauses under rule 54 (§6.1). No new `{{variable}}`: landlord-filled values use hand brackets.

| Row | rule_type | lease_clause_basis | topic_key | supersedes | Main citations |
|---|---|---|---|---|---|
| `default-by-tenant-wv` | RECOMMENDED | SERVES_LANDLORD | default-by-tenant | `default-by-tenant` | W. Va. Code § 55-3A-1(a)(3); W. Va. Code § 37-6-6(a); W. Va. Code § 37-6-23 |
| `utilities-responsibility-wv` | RECOMMENDED | SERVES_LANDLORD | utilities-responsibility | `utilities-responsibility` | W. Va. Code § 37-6-30(a)(7); W. Va. Code §§ 8-19-12a(b), 8-18-23(c); W. Va. Code §§ 8-20-10(c), 16-13A-9(f) |
| `casualty-wv` | RECOMMENDED | SERVES_LANDLORD | casualty-termination |  | W. Va. Code § 37-6-28; W. Va. Code § 37-6-30(a)(2); W. Va. Code § 37-6-29 |
| `tenant-caused-damage-wv` | CONDITIONAL | SERVES_LANDLORD | tenant-caused-damage |  | W. Va. Code § 37-6-30(a)(4); W. Va. Code § 37-6-30(a)(2); W. Va. Code § 37-6-28 |
| `termination-notice-wv` | CONDITIONAL | SERVES_LANDLORD | termination-notice |  | W. Va. Code § 37-6-5; W. Va. Code § 37-6-11(b)(4) |
| `criminal-activity-wv` | CONDITIONAL | SERVES_LANDLORD | criminal-activity |  | W. Va. Code § 55-3A-1(a)(3); W. Va. Code § 16-15-17(b); W. Va. Code § 60A-7-703(a)(8) |
| `rent-increase-midterm-wv` | CONDITIONAL | SERVES_LANDLORD | rent-escalation |  | W. Va. Code §§ 46A-6J-2, 46A-6J-3; W. Va. Code § 16B-18-5(b) |
| `utility-billing-wv` | CONDITIONAL | SERVES_LANDLORD | utility-apportionment |  | W. Va. Code § 37-6A-1(17); W. Va. Code § 37-6A-2(b)(3); W. Va. Code § 46A-2-128(d), but whether a fee for reselling utility service |
| `returned-payments-wv` | CONSTRAINED | CONSTRAINED_TERM | returned-payments | `returned-payments` | W. Va. Code § 61-3-39e; W. Va. Code § 46A-2-128(d); W. Va. Code § 46-4A-103(a)(1) |
| `smoke-detectors-wv` | RECOMMENDED | SERVES_LANDLORD | alarm-duties |  | W. Va. Code § 15A-10-12(b); W. Va. Code § 15A-10-12(c); W. Va. Code § 15A-10-12(f)-(g) |
| `appliances-excluded-wv` | CONDITIONAL | SERVES_LANDLORD | appliances-excluded |  | W. Va. Code § 37-6-30(a)(5); W. Va. Code § 37-6-30(b); W. Va. Code § 37-6-30(a)(7) |
| `security-deposit-use-wv` | CONSTRAINED | CONSTRAINED_TERM | security-deposit-use | `security-deposit-use` | W. Va. Code § 37-6A-2(b)(1)-(5); W. Va. Code § 37-6A-2(d); W. Va. Code § 37-6A-1(14) |
| `security-deposit-return-wv` | RECOMMENDED | SERVES_LANDLORD | security-deposit-return | `security-deposit-return` | W. Va. Code § 37-6A-1(7); W. Va. Code § 37-6A-2(c); W. Va. Code § 37-6A-2(g) |
| `nonrefundable-fees-wv` | CONDITIONAL | SERVES_LANDLORD | nonrefundable-deposit-notice |  | W. Va. Code § 37-6A-1(14); W. Va. Code § 37-6A-2. A statute that turns on the agreement; W. Va. Code § 16B-18-5(f)(10)(D) |

### 3.2 WV education rows (171)
All are RECOMMENDED unless shown, all VERIFIED, and each cites its sections or batteries in `notes`. New topic keys (rule 58): `accessory-dwelling-unit`, `eminent-domain`, `home-business`.

| Row | group | topic_key | rule_type | Main citations |
|---|---|---|---|---|
| `edu-no-dv-lockchange-wv` | Access & Entry | dv-lockchange | RECOMMENDED | W. Va. Code § 48-27-503(1) |
| `edu-no-entry-statute-wv` | Access & Entry | landlord-entry | RECOMMENDED | W. Va. Code § 37-6-6(a); W. Va. Code § 24D-2-6 |
| `edu-no-sprinkler-duty-wv` | Building & Safety | fire-sprinkler-duty | RECOMMENDED | W. Va. Code § 15A-10-12(d); W. Va. Code § 15A-11-3(a) |
| `edu-no-water-heater-rule-wv` | Building & Safety | water-heater-temperature | RECOMMENDED | W. Va. Code § 37-6-30(a)(7) |
| `edu-no-window-guard-rule-wv` | Building & Safety | window-guards | RECOMMENDED | W. Va. Code §§ 15A-11-3, 15A-11-5 |
| `edu-children-occupancy-wv` | Compliance & Prohibited Terms | children-occupancy | CONSTRAINED | W. Va. Code § 16B-18-3(j); W. Va. Code § 16B-18-4(a) |
| `edu-confession-of-judgment-wv` | Compliance & Prohibited Terms | confession-of-judgment | RECOMMENDED | W. Va. Code § 46A-2-117; W. Va. Code § 46A-1-102(14)(a) |
| `edu-consumer-protection-wv` | Compliance & Prohibited Terms | consumer-protection-act | CONSTRAINED | W. Va. Code § 46A-6-104; W. Va. Code § 46A-2-128(d), case law not searched |
| `edu-disability-accommodation-wv` | Compliance & Prohibited Terms | disability-accommodation | PROHIBITED | W. Va. Code § 16B-18-5(f)(3)(A); W. Va. Code § 16B-18-3(p) |
| `edu-dv-confidentiality-wv` | Compliance & Prohibited Terms | dv-confidentiality | RECOMMENDED | W. Va. Code §§ 48-28A-101, 48-28A-105(a); W. Va. Code § 48-27-503(1) |
| `edu-exculpatory-clauses-wv` | Compliance & Prohibited Terms | exculpatory-clauses | RECOMMENDED | W. Va. Code § 37-6-30(a)-(b); W. Va. Const. art. III, § 17 |
| `edu-exemption-waiver-wv` | Compliance & Prohibited Terms | homestead-waiver | CONSTRAINED | W. Va. Code § 38-8-15; W. Va. Code § 38-9-6 |
| `edu-fair-housing-wv` | Compliance & Prohibited Terms | fair-housing | PROHIBITED | W. Va. Code § 16B-18-5(a)-(e); W. Va. Code § 16B-18-4(a) |
| `edu-immigration-status-wv` | Compliance & Prohibited Terms | immigration-status | RECOMMENDED | W. Va. Code § 16B-18-5(a)-(c); W. Va. Code § 36-1-21 |
| `edu-jury-waiver-wv` | Compliance & Prohibited Terms | jury-waiver | RECOMMENDED | W. Va. Const. art. III, § 13; W. Va. Code § 50-5-8(a) |
| `edu-knowing-use-penalty-wv` | Compliance & Prohibited Terms | knowing-use-penalty | CONSTRAINED | W. Va. Code § 37-6A-4; W. Va. Code § 46A-5-101(1) |
| `edu-no-dv-eviction-protection-wv` | Compliance & Prohibited Terms | dv-eviction-protection | RECOMMENDED | W. Va. Code § 48-27-503(1)-(2); W. Va. Code § 48-27-506 |
| `edu-no-emergency-assistance-rule-wv` | Compliance & Prohibited Terms | emergency-assistance-right | RECOMMENDED | absence (battery-cited) |
| `edu-no-lease-content-list-wv` | Compliance & Prohibited Terms | lease-content-requirements | RECOMMENDED | W. Va. Code § 46A-6-109(a) |
| `edu-no-source-of-income-wv` | Compliance & Prohibited Terms | source-of-income | RECOMMENDED | W. Va. Code § 16B-18-5(a)-(c). Confirmed absent; W. Va. Code § 16B-18-18 |
| `edu-prohibited-lease-terms-wv` | Compliance & Prohibited Terms | prohibited-lease-terms | PROHIBITED | W. Va. Code § 37-6A-4; W. Va. Code § 37-6-11(b)(4) |
| `edu-protected-class-inquiry-wv` | Compliance & Prohibited Terms | protected-class-inquiry-ban | PROHIBITED | W. Va. Code § 16B-18-5(c); W. Va. Code § 16B-17-9(2)(A) |
| `edu-self-help-eviction-wv` | Compliance & Prohibited Terms | self-help-eviction | CONSTRAINED | W. Va. Code § 37-15-6(d); W. Va. Code § 55-3A-3(f) |
| `edu-sex-offender-occupancy-wv` | Compliance & Prohibited Terms | sex-offender-occupancy | RECOMMENDED | W. Va. Code § 62-12-26(a); W. Va. Code § 62-12-26(b)(1) |
| `edu-tenant-data-breach-wv` | Compliance & Prohibited Terms | tenant-confidential-information | REQUIRED | W. Va. Code § 46A-2A-101(1) |
| `edu-tenant-organizing-wv` | Compliance & Prohibited Terms | tenant-right-to-organize | RECOMMENDED | W. Va. Code § 37-15-7(a)(3); W. Va. Code § 55-3A-3(g) |
| `edu-tenant-screening-wv` | Compliance & Prohibited Terms | tenant-screening | CONSTRAINED | W. Va. Code § 16B-18-5(a)-(d); W. Va. Code § 46A-2A-101(6)(A) |
| `edu-unconscionability-wv` | Compliance & Prohibited Terms | unconscionability | RECOMMENDED | W. Va. Code § 46A-2-121(a); W. Va. Code § 46A-1-102(14)(a) |
| `edu-abandoned-property-wv` | Default & Termination | abandoned-property | CONSTRAINED | W. Va. Code § 37-6-6(a); W. Va. Code § 37-6-6(c) |
| `edu-abandonment-mitigation-wv` | Default & Termination | abandonment-and-mitigation | CONSTRAINED | W. Va. Code § 37-6-6(a); W. Va. Code § 37-6-7 |
| `edu-attorney-fees-wv` | Default & Termination | attorney-fees | CONSTRAINED | W. Va. Code § 55-3C-5(b); W. Va. Code § 46A-2-122(b) |
| `edu-dv-qualifying-documents-wv` | Default & Termination | dv-qualifying-documents | RECOMMENDED | W. Va. Code §§ 11-15-9; W. Va. Code § 48-27-503(1) |
| `edu-eminent-domain-wv` | Default & Termination | eminent-domain | RECOMMENDED | W. Va. Code § 37-6-29 |
| `edu-eviction-grounds-wv` | Default & Termination | cure-and-eviction-grounds | CONSTRAINED | W. Va. Code § 55-3A-1(a)(3); W. Va. Code § 46A-1-102(14)(a) |
| `edu-eviction-hardship-stay-wv` | Default & Termination | eviction-hardship-stay | RECOMMENDED | W. Va. Code § 55-3A-3(f); W. Va. Code § 55-3A-3(d). Appeal |
| `edu-eviction-process-wv` | Default & Termination | eviction-process | CONSTRAINED | W. Va. Code § 55-3A-1(a); W. Va. Code § 55-3A-2. Default, hearing, continuance, order |
| `edu-foreclosure-tenants-wv` | Default & Termination | foreclosure | CONSTRAINED | W. Va. Code § 38-1-16(a) |
| `edu-guaranty-wv` | Default & Termination | guarantor-renewal | CONSTRAINED | W. Va. Code § 55-1-1(d); W. Va. Code §§ 45-1-1, 45-1-2 |
| `edu-holdover-rate-wv` | Default & Termination | holdover-rate | RECOMMENDED | W. Va. Code § 55-3-2. Use; W. Va. Code § 37-6-9 |
| `edu-holdover-wv` | Default & Termination | holdover | CONSTRAINED | W. Va. Code § 37-6-5; W. Va. Code § 55-3-1 |
| `edu-minor-defendants-wv` | Default & Termination | minor-tenant-filing | CONSTRAINED | W. Va. Code § 50-4-10(a)(2)(A); W. Va. Code § 2-2-10(a)(7) |
| `edu-no-drug-free-addendum-wv` | Default & Termination | drug-free-housing-addendum | RECOMMENDED | W. Va. Code § 55-3A-1(a)(3) |
| `edu-no-dv-lease-termination-wv` | Default & Termination | dv-lease-termination | RECOMMENDED | absence (battery-cited) |
| `edu-no-eviction-record-sealing-wv` | Default & Termination | eviction-record-sealing | RECOMMENDED | absence (battery-cited) |
| `edu-no-expedited-criminal-eviction-wv` | Default & Termination | expedited-criminal-eviction | RECOMMENDED | W. Va. Code § 55-3A-1(a)(3); W. Va. Code § 60A-7-703(a)(8) |
| `edu-no-for-cause-eviction-wv` | Default & Termination | for-cause-eviction | RECOMMENDED | W. Va. Code §§ 37-15-6, 37-15-7; W. Va. Code § 37-6-5 |
| `edu-no-infirmity-termination-wv` | Default & Termination | infirmity-termination | RECOMMENDED | W. Va. Code § 16B-18-5(f)(3)(B). Death; W. Va. Code § 37-6-11(b). Case law not searched. Boundary |
| `edu-no-nonpayment-notice-wv` | Default & Termination | nonpayment-notice | RECOMMENDED | W. Va. Code § 37-6-6(a); W. Va. Code § 55-3A-1(a)(3) |
| `edu-no-waiver-by-acceptance-rule-wv` | Default & Termination | waiver-by-acceptance | RECOMMENDED | W. Va. Code § 55-3B-4(a)(3)(A); W. Va. Code § 37-6-23 |
| `edu-nuisance-wv` | Default & Termination | nuisance | RECOMMENDED | W. Va. Code § 61-9-1; W. Va. Code §§ 60-6-16, 60-6-17. Organized criminal enterprise |
| `edu-post-eviction-property-wv` | Default & Termination | post-eviction-property | CONSTRAINED | W. Va. Code § 55-3A-3(h)(1)-(3); W. Va. Code § 37-6A-2(b)(4) |
| `edu-redemption-wv` | Default & Termination | redemption | CONSTRAINED | W. Va. Code § 37-6-23; W. Va. Code § 37-6-19. Twelve months after execution |
| `edu-rent-into-court-wv` | Default & Termination | rent-into-court-counterclaim | CONSTRAINED | W. Va. Code § 55-3A-3(b); W. Va. Code § 37-6-30(c) |
| `edu-retaliation-wv` | Default & Termination | retaliation | RECOMMENDED | W. Va. Code § 55-3A-3(g); W. Va. Code § 16B-18-16 |
| `edu-servicemember-rights-wv` | Default & Termination | servicemember-rights | RECOMMENDED | W. Va. Code § 15-1F-11(b); W. Va. Code § 50-4-10(a)(2)(B) |
| `edu-statutory-early-termination-wv` | Default & Termination | statutory-early-termination | CONSTRAINED | W. Va. Code § 37-6-11(b); W. Va. Code § 37-6-28 |
| `edu-statutory-forms-wv` | Default & Termination | statutory-forms | RECOMMENDED | W. Va. Code § 36-3-8; W. Va. Code § 37-6-17 |
| `edu-tenancy-at-will-wv` | Default & Termination | tenancy-at-will | RECOMMENDED | W. Va. Code § 37-6-5. Case law not searched. Boundary |
| `edu-tenant-death-wv` | Default & Termination | tenant-death | CONSTRAINED | W. Va. Code § 37-6-11(b)(1); W. Va. Code § 37-6-11(a) |
| `edu-termination-notice-wv` | Default & Termination | termination-notice | CONSTRAINED | W. Va. Code § 37-6-5 |
| `edu-unauthorized-occupants-wv` | Default & Termination | unauthorized-occupant-removal | CONSTRAINED | W. Va. Code § 55-3C-2(a); W. Va. Code § 55-3C-3(a)(1)-(8) |
| `edu-hoa-wv` | Disclosures | hoa | RECOMMENDED | W. Va. Code § 36B-2-117(d) |
| `edu-lead-abatement-wv` | Disclosures | lead-based-paint | CONSTRAINED | W. Va. Code § 16-35-5(a); W. Va. Code § 16-35-9 |
| `edu-meth-lab-wv` | Disclosures | meth-disclosure | REQUIRED | W. Va. Code § 60A-11-5(a); W. Va. Code § 60A-11-4 |
| `edu-no-bed-bug-disclosure-wv` | Disclosures | bed-bug-disclosure | RECOMMENDED | W. Va. Code § 16-6-16; W. Va. Code § 16-6-3 |
| `edu-no-flood-disclosure-wv` | Disclosures | flood-disclosure | RECOMMENDED | absence (battery-cited) |
| `edu-no-foreclosure-disclosure-wv` | Disclosures | foreclosure-disclosure | RECOMMENDED | W. Va. Code § 38-1-16(a) |
| `edu-no-military-zone-disclosure-wv` | Disclosures | military-air-zone-disclosure | RECOMMENDED | absence (battery-cited) |
| `edu-no-mold-disclosure-wv` | Disclosures | mold-disclosure | RECOMMENDED | W. Va. Code § 37-6-30(a)(1)-(2). Boundary |
| `edu-no-radon-disclosure-wv` | Disclosures | radon-disclosure | RECOMMENDED | W. Va. Code § 16-34-3(a)(1)-(5); W. Va. Code § 16-34-5(l)(1) |
| `edu-no-sex-offender-disclosure-wv` | Disclosures | sex-offender-disclosure | RECOMMENDED | W. Va. Code § 15-12-5(b) |
| `edu-no-stigmatized-property-rule-wv` | Disclosures | stigmatized-property | RECOMMENDED | absence (battery-cited) |
| `edu-owner-identity-wv` | Disclosures | owner-identity-disclosure | RECOMMENDED | W. Va. Code § 37-6A-1(5); W. Va. Code § 46A-2-127(c) |
| `edu-required-disclosures-wv` | Disclosures | required-disclosures | RECOMMENDED | W. Va. Code § 46A-6-109(a)(1)-(3); W. Va. Code § 60A-11-3(a)(6) |
| `edu-senior-rent-statement-wv` | Disclosures | property-tax-rent-disclosure | REQUIRED | W. Va. Code § 11-25-5; W. Va. Code § 11-25-2(1) |
| `edu-alarm-duties-wv` | Landlord Responsibilities | alarm-duties | REQUIRED | W. Va. Code § 15A-10-12(a); W. Va. Code § 46A-2-128(d) bars collecting unless |
| `edu-applicable-codes-wv` | Landlord Responsibilities | fire-code-standard | REQUIRED | W. Va. Code § 37-6-30(a)(2); W. Va. Code § 15A-11-3(a) |
| `edu-condemned-premises-wv` | Landlord Responsibilities | condemned-premises-rent-bar | RECOMMENDED | W. Va. Code § 37-6-30(a)(1)-(2); W. Va. Code § 37-6-28 |
| `edu-disaster-rent-limits-wv` | Landlord Responsibilities | disaster-duties | CONSTRAINED | W. Va. Code § 46A-6J-2(g); W. Va. Code § 46A-6J-3(a) |
| `edu-heating-wv` | Landlord Responsibilities | heating | CONSTRAINED | W. Va. Code § 37-6-30(a)(7) |
| `edu-landlord-repair-duties-wv` | Landlord Responsibilities | landlord-maintenance | CONSTRAINED | W. Va. Code § 37-6-30(a)(1)-(6) |
| `edu-no-alt-housing-wv` | Landlord Responsibilities | alt-housing | RECOMMENDED | W. Va. Code § 37-6-28 |
| `edu-no-landlord-self-cure-wv` | Landlord Responsibilities | landlord-self-cure | RECOMMENDED | W. Va. Code § 37-6A-2(b)(2); W. Va. Code § 55-3A-1(a)(3). Repair exception |
| `edu-no-security-device-rule-wv` | Landlord Responsibilities | security-devices | RECOMMENDED | W. Va. Code § 48-27-503(1); W. Va. Code § 8-12-16(a)(4)(A) |
| `edu-pool-safety-wv` | Landlord Responsibilities | pool-safety | RECOMMENDED | W. Va. Code § 16-1-4(a)(3) |
| `edu-quiet-possession-wv` | Landlord Responsibilities | quiet-possession | RECOMMENDED | W. Va. Code § 36-4-14; W. Va. Code § 36-4-17 |
| `edu-receivership-wv` | Landlord Responsibilities | substandard-property-receivership | RECOMMENDED | W. Va. Code § 8-12-16(a)(4)(I); W. Va. Code § 7-1-3ff(a) |
| `edu-rental-inspection-wv` | Landlord Responsibilities | rental-inspection | RECOMMENDED | W. Va. Code § 7-1-3n(a); W. Va. Code § 8-12-16(b) |
| `edu-telecom-access-wv` | Landlord Responsibilities | telecom-access | PROHIBITED | W. Va. Code § 24D-2-3(a)(1)-(3); W. Va. Code § 24D-2-2(f) |
| `edu-tenant-repair-agreement-wv` | Landlord Responsibilities | tenant-repair-agreement | RECOMMENDED | W. Va. Code § 37-6-30(a)(2); W. Va. Code § 36-4-12 |
| `edu-tenant-repair-remedies-wv` | Landlord Responsibilities | tenant-repair-remedies | CONSTRAINED | W. Va. Code § 55-3A-3(b); W. Va. Code § 55-3A-2 |
| `edu-utility-apportionment-wv` | Landlord Responsibilities | utility-apportionment | CONSTRAINED | W. Va. Code § 37-6A-1(17); W. Va. Code § 37-6A-2(b)(3). No allocation method, fee |
| `edu-utility-landlord-account-wv` | Landlord Responsibilities | utility-landlord-account | RECOMMENDED | W. Va. Code § 37-6-30(a)(7); W. Va. Code § 37-6A-2(b)(3) |
| `edu-utility-liens-wv` | Landlord Responsibilities | municipal-utility-lien | RECOMMENDED | W. Va. Code § 8-19-12a(b); W. Va. Code § 8-18-23(a) |
| `edu-utility-shutoff-wv` | Landlord Responsibilities | utility-shutoff-statute | RECOMMENDED | W. Va. Code § 8-19-12a(a)(2); W. Va. Code § 16-13A-9(a)(3) |
| `edu-accessory-dwelling-unit-wv` | Notices & General | accessory-dwelling-unit | RECOMMENDED | W. Va. Code § 8-42-1(a); W. Va. Code § 8-1-5a(k) |
| `edu-attornment-wv` | Notices & General | adverse-proceeding-notice | RECOMMENDED | W. Va. Code § 37-6-4; W. Va. Code § 37-6-3 |
| `edu-automatic-renewal-wv` | Notices & General | automatic-renewal | RECOMMENDED | W. Va. Code § 37-6-5; W. Va. Code § 46A-2-138(a). Confirmed absent |
| `edu-condo-conversion-wv` | Notices & General | conversion-notice | REQUIRED | W. Va. Code § 36B-4-112(a); W. Va. Code § 36B-1-103(9) |
| `edu-dispute-resolution-wv` | Notices & General | informal-dispute-resolution | RECOMMENDED | W. Va. Code § 55-10-8(a); W. Va. Code § 55-3A-1(b) |
| `edu-electronic-records-wv` | Notices & General | electronic-signatures | CONSTRAINED | W. Va. Code § 39A-1-5(a)-(e); W. Va. Code § 37-6A-1(12) |
| `edu-foreign-ownership-wv` | Notices & General | foreign-ownership | CONSTRAINED | W. Va. Code § 37-3A-3(a)-(c) |
| `edu-lease-copy-wv` | Notices & General | lease-copy | RECOMMENDED | W. Va. Code § 30-40-26(g); W. Va. Code § 30-40-4 |
| `edu-no-double-letting-wv` | Notices & General | double-letting | RECOMMENDED | W. Va. Code § 37-6-30(a)(1); W. Va. Code §§ 37-6-6(a), 37-6-7, 37-6-8 |
| `edu-no-landlord-registration-wv` | Notices & General | landlord-registration | RECOMMENDED | W. Va. Code § 8-12-16a(a); W. Va. Code § 8-1-5a(k) |
| `edu-no-lease-completeness-rule-wv` | Notices & General | lease-completeness | RECOMMENDED | W. Va. Code § 30-40-26(g)-(h) for licensees; W. Va. Code § 37-6A-2(b)(1) |
| `edu-no-renters-insurance-rule-wv` | Notices & General | renters-insurance-rules | RECOMMENDED | absence (battery-cited) |
| `edu-no-tenant-rights-statement-wv` | Notices & General | tenant-rights-statement | RECOMMENDED | W. Va. Code § 37-15-3(a) |
| `edu-no-translation-rule-wv` | Notices & General | translation-duty | RECOMMENDED | W. Va. Code § 36B-1-111(b)(2); W. Va. Code § 46A-6-109(a). Boundary |
| `edu-nonresident-owner-agent-wv` | Notices & General | nonresident-owner-agent | RECOMMENDED | W. Va. Code § 56-3-33(a)(6); W. Va. Code § 37-6A-5(b) |
| `edu-notice-delivery-wv` | Notices & General | notice-delivery-methods | CONSTRAINED | W. Va. Code § 37-6-5; W. Va. Code § 55-3A-1(c) |
| `edu-optional-lease-terms-wv` | Notices & General | optional-lease-terms | RECOMMENDED | W. Va. Code § 37-6A-2(b)(1); W. Va. Code § 37-6-28 |
| `edu-plain-language-wv` | Notices & General | plain-language | REQUIRED | W. Va. Code § 46A-6-109(a) |
| `edu-portfolio-thresholds-wv` | Notices & General | portfolio-thresholds | RECOMMENDED | W. Va. Code § 16B-18-4(a); W. Va. Code § 37-6-30(a)(3) |
| `edu-sale-or-management-change-wv` | Notices & General | sale-or-management-change | CONSTRAINED | W. Va. Code §§ 37-6-1, 37-6-2; W. Va. Code § 36B-4-112(a)-(b) |
| `edu-scope-wv` | Notices & General | scope | RECOMMENDED | W. Va. Code § 37-6-30; W. Va. Code § 37-6A-6(a) |
| `edu-statute-of-frauds-wv` | Notices & General | statute-of-frauds-lease-term | RECOMMENDED | W. Va. Code § 36-1-3; W. Va. Code § 55-1-1(f) |
| `edu-term-change-notice-wv` | Notices & General | term-change-notice | RECOMMENDED | W. Va. Code § 37-6-5 |
| `edu-cannabis-wv` | Other / Miscellaneous | cannabis | RECOMMENDED | W. Va. Code § 16A-3-2(a)(1)-(3); W. Va. Code § 60A-2-204 |
| `edu-no-ev-charging-right-wv` | Parking & Storage | ev-charging | RECOMMENDED | absence (battery-cited) |
| `edu-self-storage-act-scope-wv` | Parking & Storage | storage-space | RECOMMENDED | W. Va. Code § 38-14-2(8); W. Va. Code § 38-14-7(c) |
| `edu-towing-wv` | Parking & Storage | towing | RECOMMENDED | W. Va. Code § 17-24A-1(3); W. Va. Code § 17-24A-2(a) |
| `edu-assistance-animal-definition-wv` | Pets | assistance-animal-accommodation | CONSTRAINED | W. Va. Code § 16B-18-3(p); W. Va. Code § 16B-18-5(f)(10) |
| `edu-pet-fees-wv` | Pets | pet-fees | RECOMMENDED | W. Va. Code § 37-6A-1(11); W. Va. Code § 16B-18-5(f)(10)(D) |
| `edu-service-animal-denial-wv` | Pets | service-animal-denial-penalty | PROHIBITED | W. Va. Code § 16B-18-3(p); W. Va. Code § 5-15-9(b) |
| `edu-service-animal-misrepresentation-wv` | Pets | service-animal-misrepresentation | RECOMMENDED | W. Va. Code § 5-15-9(a)-(c); W. Va. Code § 5-15-9 |
| `edu-algorithmic-rent-wv` | Rent & Payment | algorithmic-rent-setting | RECOMMENDED | W. Va. Code § 47-18-3(a); W. Va. Code § 47-18-3(b)(1)(A) |
| `edu-application-fees-wv` | Rent & Payment | application-fees | RECOMMENDED | W. Va. Code § 37-6A-1(2); W. Va. Code § 37-6A-1(14) |
| `edu-collection-fee-wv` | Rent & Payment | collection-fee | CONSTRAINED | W. Va. Code § 46A-2-128(c); W. Va. Code § 46A-2-127(g) |
| `edu-fees-as-rent-wv` | Rent & Payment | fees-as-rent | RECOMMENDED | W. Va. Code § 37-6A-1; W. Va. Code § 37-6A-1(11) |
| `edu-government-fees-wv` | Rent & Payment | government-fee-reimbursement | RECOMMENDED | W. Va. Code § 8-13-13(a); W. Va. Code § 8-13-13(d) |
| `edu-landlord-lien-wv` | Rent & Payment | landlord-lien | CONSTRAINED | W. Va. Code § 37-6-12; W. Va. Code § 55-7-3 |
| `edu-late-fee-wv` | Rent & Payment | late-fee | CONSTRAINED | W. Va. Code §§ 46A-3-112, 46A-3-113, 46A-2-115, which reach only consumer credit sales; W. Va. Code § 38-14-4 |
| `edu-no-fee-transparency-wv` | Rent & Payment | fee-transparency | RECOMMENDED | W. Va. Code § 46A-6-109(a); W. Va. Code § 37-6A-1(14) |
| `edu-no-payment-method-rule-wv` | Rent & Payment | acceptable-payment-methods | RECOMMENDED | W. Va. Code § 11-25-5 |
| `edu-no-rent-concession-rule-wv` | Rent & Payment | rent-concession | RECOMMENDED | absence (battery-cited) |
| `edu-no-rent-grace-period-wv` | Rent & Payment | rent-payment | RECOMMENDED | W. Va. Code § 37-6A-2(b)(1) |
| `edu-no-rent-receipt-rule-wv` | Rent & Payment | rent-receipts | RECOMMENDED | W. Va. Code § 46A-2-114(1); W. Va. Code § 46A-1-102(14)(a) |
| `edu-no-rent-reporting-rule-wv` | Rent & Payment | rent-reporting | RECOMMENDED | W. Va. Code § 46A-2-124(c); W. Va. Code § 46A-2-122(b) |
| `edu-no-shutdown-protection-wv` | Rent & Payment | shutdown-rent-protection | RECOMMENDED | absence (battery-cited) |
| `edu-rent-control-wv` | Rent & Payment | rent-control | RECOMMENDED | W. Va. Code § 16-15-18(a)(1); W. Va. Code § 8-1-5a(k) |
| `edu-rent-escalation-wv` | Rent & Payment | rent-escalation | RECOMMENDED | W. Va. Code § 47-6-5(c) |
| `edu-rent-increase-notice-wv` | Rent & Payment | rent-increase-notice | RECOMMENDED | W. Va. Code § 37-15-7(a), which bars selectively increasing rent in retaliation at factory-built home sites; W. Va. Code § 37-6-5 |
| `edu-rent-tax-wv` | Rent & Payment | rent-tax | RECOMMENDED | W. Va. Code § 7-18-1(a); W. Va. Code § 11-15-8 |
| `edu-required-fees-wv` | Rent & Payment | required-fees | RECOMMENDED | W. Va. Code § 37-15-5(a)(1); W. Va. Code § 37-6A-2(b)(1) |
| `edu-returned-check-fee-wv` | Rent & Payment | returned-payments | CONSTRAINED | W. Va. Code § 61-3-39e; W. Va. Code § 46A-2-122(b)-(d) |
| `edu-unpaid-damages-interest-wv` | Rent & Payment | unpaid-damages-interest | RECOMMENDED | W. Va. Code § 37-6-9; W. Va. Code § 56-6-31(b) |
| `edu-firearms-wv` | Rules & Regulations | firearms | RECOMMENDED | W. Va. Const. art. III, § 22; W. Va. Code § 61-7-14(b) |
| `edu-no-display-rights-rule-wv` | Rules & Regulations | tenant-display-rights | RECOMMENDED | W. Va. Code § 16B-18-5(b). Shared |
| `edu-no-guest-rights-rule-wv` | Rules & Regulations | guest-rights | RECOMMENDED | W. Va. Code § 55-3C-2(a); W. Va. Code § 55-3C-3(a)(3) |
| `edu-no-tenant-camera-rule-wv` | Rules & Regulations | tenant-security-cameras | RECOMMENDED | W. Va. Code § 21-3-20; W. Va. Code § 62-1A-12(a) bars a law-enforcement officer from installing a surveillance camera on private land without an owner |
| `edu-no-waterbed-rule-wv` | Rules & Regulations | waterbed | RECOMMENDED | absence (battery-cited) |
| `edu-portable-solar-wv` | Rules & Regulations | portable-solar | RECOMMENDED | W. Va. Code § 36-4-19(a); W. Va. Code § 36-4-19(b)(1) |
| `edu-rules-regulations-wv` | Rules & Regulations | rules-regulations | RECOMMENDED | W. Va. Code § 37-15-3a, factory-built home rental communities, out of scope; W. Va. Code § 46A-6-109(a) |
| `edu-smoking-cannabis-wv` | Rules & Regulations | smoking-policy | RECOMMENDED | W. Va. Code § 21-3-8, factories, mercantile establishments, mills; W. Va. Code § 21-3-19 |
| `edu-deposit-cost-schedule-wv` | Security Deposit | deposit-cost-schedule | RECOMMENDED | W. Va. Code § 37-6A-2(b)(2); W. Va. Code § 37-6A-2(b)(5) |
| `edu-deposit-escheat-wv` | Security Deposit | deposit-escheat | CONSTRAINED | W. Va. Code § 36-8-1; W. Va. Code § 37-6A-2(g) |
| `edu-deposit-last-month-rent-wv` | Security Deposit | deposit-last-month-rent | RECOMMENDED | W. Va. Code § 37-6A-1(14) |
| `edu-deposit-on-sale-wv` | Security Deposit | security-deposit-on-sale | CONSTRAINED | W. Va. Code § 37-6A-2(e) |
| `edu-holding-deposit-wv` | Security Deposit | holding-deposit | RECOMMENDED | W. Va. Code § 37-6A-1(2); W. Va. Code § 37-6A-1(14) |
| `edu-no-condition-checklist-wv` | Security Deposit | condition-inspection | RECOMMENDED | W. Va. Code § 37-6A-2(b)(2) |
| `edu-no-deposit-installments-wv` | Security Deposit | deposit-installments | RECOMMENDED | W. Va. Code § 37-6A-1(14). The lead |
| `edu-no-deposit-interest-wv` | Security Deposit | security-deposit-interest | RECOMMENDED | W. Va. Code § 30-40-18(e) |
| `edu-no-fee-in-lieu-of-deposit-wv` | Security Deposit | fee-in-lieu-of-deposit | RECOMMENDED | W. Va. Code § 37-6A-1(14); W. Va. Code § 37-6A-1(11) |
| `edu-no-security-deposit-cap-wv` | Security Deposit | security-deposit-cap | RECOMMENDED | W. Va. Code § 37-6A-1(14); W. Va. Code § 16B-18-5(f)(10)(D). Boundary |
| `edu-security-deposit-holding-wv` | Security Deposit | security-deposit-holding | CONSTRAINED | W. Va. Code § 37-6A-3(1)-(2); W. Va. Code § 30-40-18(a) |
| `edu-security-deposit-penalty-wv` | Security Deposit | security-deposit-penalty | CONSTRAINED | W. Va. Code § 37-6A-5(a)(1)-(2); W. Va. Code § 37-6A-4 |
| `edu-construction-liens-wv` | Tenant Responsibilities | construction-liens | RECOMMENDED | W. Va. Code § 38-2-1; W. Va. Code §§ 38-2-3, 38-2-5 |
| `edu-home-business-wv` | Tenant Responsibilities | home-business | RECOMMENDED | W. Va. Code § 8-40-1(b); W. Va. Code § 8-40-2(a) |
| `edu-no-extended-absence-rule-wv` | Tenant Responsibilities | extended-absence-notice | RECOMMENDED | W. Va. Code § 55-3A-3; W. Va. Code § 37-6-6(a) |
| `edu-tenant-statutory-duties-wv` | Tenant Responsibilities | tenant-statutory-duties | RECOMMENDED | W. Va. Code § 37-7-1; W. Va. Code § 15A-10-12(b) |

## 4. Layout and placement (rule 40)
The formatting batteries ran over the whole Code and Constitution in Step C, before drafting: the main pass's `fmt` plus eleven pairs, each run with and without the tenancy limb (c-fmt-underlined, -bold, -conspicuous, -separate, -subst-equiv, -subst-asfollows, -asfollows, -formfollows, -subst-form, -point, -typesize). All passed their positives, with control 0. The union of hits is 1,138 sections. Every hit in a section that also contains a tenancy word was read, as were the non-tenancy hits in chs. 7, 8, 15A, 16, 16B, 29, 36, 36B, 37, 38, 39A, 46A, 47 and 55.

| Section | Term | Reaches residential leases? | Library effect |
|---|---|---|---|
| W. Va. Code § 46A-6-109 | 'type of an easily readable size' | **Yes.** Every written agreement 'for the rental of space to be occupied for residential purposes': clear and coherent, everyday words, readable type, organized and captioned. Not void; the tenant may demand a conforming lease and sue to reform it. Not waivable. No point size. | The only general rule. The builder's output should keep captions and readable type (`edu-plain-language-wv`). No clause needed. |
| W. Va. Code § 16B-9-1 | bold type, 'NOTICE TO RESIDENT' | Residential care community contracts only | Out of scope (`edu-scope-wv`) |
| W. Va. Code § 36-3-8 | 'in the following form or to the same effect' | Optional statutory deed-of-lease form | No mandatory text (`edu-statutory-forms-wv`) |
| W. Va. Code §§ 37-6-6, 37-6-16, 37-6-19 | 'conspicuous' | Posting of abandonment, distress and reentry notices on the premises | Procedure, not lease format |
| W. Va. Code § 46A-2-104 | cosigner notice, 12-point bold | No: 'Consumer lease' means 'a lease of goods' (§ 46A-1-102(14)) | `edu-guaranty-wv` |
| W. Va. Code § 39A-2-1 | 'clear and conspicuous statement' | Consumer consent before electronic delivery of information the law requires in writing | `edu-electronic-records-wv`; shared `electronic-signatures` |
| W. Va. Code §§ 38-14-5, 33-12-38 | bold, conspicuous | Self-storage | Out of scope (`edu-self-storage-act-scope-wv`) |
| UCC art. 2A, time-share and common-interest-community sale sections | conspicuous, bold, separate instrument | Goods leases and sales | None |

No statute prescribes 'substantially as follows' lease text, a separate document, underlining or a point size for a residential lease. No omission sanction forfeits money. No two rules claim the same place in the lease, so there was no placement order to settle with Taylor.

## 5. Dormant rows resolved (rule 25)
- **`security-deposit-return-wv`** (dormant, UNVERIFIED, CONSTRAINED, topic key `security-deposit-return-wv`, basis blank): **verified, rewritten, activated.**
  - Its 60 and 45 days are West Virginia's, but it counted from when "Tenant vacates". The statute counts 60 days from the termination of the tenancy or 45 days from occupation by a subsequent tenant, whichever is shorter (§ 37-6A-1(7)).
  - It omitted the 15-day contractor extension (§ 37-6A-2(c)) and the delivery and six-month hold rules (§ 37-6A-2(g)).
  - Rewritten as RECOMMENDED / SERVES_LANDLORD. West Virginia requires no deposit-return text in the lease, so it is not REQUIRED (rule 56, NM 5).
  - Topic key corrected to `security-deposit-return` (rule 58). It supersedes the blank-states parent `security-deposit-return`.

## 6. Decisions

### 6.1 Optional clauses found (rule 54)
Proposal ids are the canvass agents' (A to F = the six slices of the topic reference). Rows cite them as "canvass proposal X-n" or "WV log §6.1".

**Offered (10, never default):**
- `termination-notice-wv` (B-1): § 37-6-5 lets a "special agreement" fix another notice period. Mutual, with a bracketed figure capped at what the statute would otherwise require, because § 37-6-11(b)(4) voids a longer-notice provision.
- `criminal-activity-wv` (B-2): a leasehold covenant makes criminal or drug activity a § 55-3A-1(a)(3) ground. It carves out victims and emergency calls, as a drafting choice (no police-call statute). It also notes housing authorities' § 16-15-17 rule and the § 60A-7-703(a)(8) forfeiture.
- `rent-increase-midterm-wv` (F-2): no statute permits or bars a mid-term increase, so the right exists only if the lease grants it. 30 days' written notice; the tenant may leave instead, without a fee.
- `utility-billing-wv` (A-1, C-2): § 37-6A-1(17) allows submetering, allocation or ratio billing only "if the rental agreement so provides". No administrative fee, and the deposit applies only to utilities the landlord paid. Public Service Commission rules were not read.
- `returned-payments-wv` (F-1, override): § 61-3-39e allows $25 for a dishonored check. No fee for a failed electronic payment. Certified-funds replacement, which yields once a warrant complaint is presented.
- `smoke-detectors-wv` (A-4): § 15A-10-12's owner and tenant split for one- and two-family dwellings, carbon monoxide detectors, and a light-signal detector on written request. No tampering fee (no statute).
- `appliances-excluded-wv` (A-2): § 37-6-30(a)(5) attaches the repair duty to appliances "supplied or required to be supplied … by written or oral agreement", so listing appliances the landlord does not supply has real effect. It never reaches the § 37-6-30(a)(7) water and heat duty.
- `casualty-wv`: § 37-6-28 lets the lease vary the casualty rent rule ("unless the lease otherwise provides"). It keeps the tenant's surrender right and the no-fault limit.
- `tenant-caused-damage-wv` (rule 54t): the habitability and code duties exclude conditions caused by "the tenant, a member of his family or other person on the premises with his consent" (§ 37-6-30(a)(2), (4)), and § 37-6-28's abatement and surrender run only "without fault or negligence" of the tenant. The clause uses the same fault list as `casualty-wv`, and its repair sentence applies only where a landlord claiming lost rent chooses to restore.
- `nonrefundable-fees-wv`: § 37-6A-1(14) makes a pet fee or application fee nonrefundable only where "the parties expressly agree, in writing". This is an identification trigger, so the clause is offered. It says a label cannot take a charge that secures damages out of the deposit article.

Shared clauses kept as the option for proposals: `extended-absence-notice-ks` tagged (E-2); `tenant-forward-proceedings-ca` tagged in place of a separate notice-of-claims clause (D-P1; `edu-attornment-wv`).

**Declined, each with an education row saying it is lawful (or void) and why it isn't offered:**
- premium holdover rate (B-3): `edu-holdover-rate-wv`;
- contractual attorney fees and collection or notice-service fees (B-4, F-5): `edu-attorney-fees-wv`, `edu-collection-fee-wv`;
- exemption waiver (B-5, D-P5; void, §§ 38-8-15, 38-9-6): `edu-exemption-waiver-wv`;
- guaranty clause (B-6): `edu-guaranty-wv`;
- no-notice periodic term (B-7): `edu-termination-notice-wv`;
- abandoned-property procedure clause (B-8): `edu-abandoned-property-wv`;
- quiet-enjoyment covenant, whose statutory meaning reaches "any person whatever" (A-3; § 36-4-14): `edu-quiet-possession-wv`;
- tenant rebuilding covenant (A-5; § 36-4-13) and shifting statutory repair duties to the tenant (A-6): `edu-tenant-repair-agreement-wv`;
- former drug-laboratory disclosure clause (C-1; content and form are set by an unread legislative rule): `edu-meth-lab-wv`;
- jury waiver (D-P2): `edu-jury-waiver-wv`;
- arbitration or mediation (D-P3): `edu-dispute-resolution-wv`;
- confession of judgment (D-P4): `edu-confession-of-judgment-wv`;
- e-mail notice opt-in (D-P5a; § 39A-2-11(2)(B) excludes default, eviction and cure notices, and § 39A-2-1 consent disclosures apply). The shared `notices` stays (`edu-notice-delivery-wv`, `edu-electronic-records-wv`);
- construction-lien clause (E-1): `edu-construction-liens-wv`;
- firearms ban (E-5; § 61-7-14): `edu-firearms-wv`;
- government-fee reimbursement (F-3): `edu-government-fees-wv`;
- contractual interest rate (F-4): `edu-unpaid-damages-interest-wv`;
- fee in lieu of a deposit (F-6): `edu-no-fee-in-lieu-of-deposit-wv`;
- preset deposit cost schedule (F-7): `edu-deposit-cost-schedule-wv`;
- self-storage lien statements (F-8): `edu-self-storage-act-scope-wv`;
- holding-deposit terms, which are pre-lease money (F-9): `edu-holding-deposit-wv`;
- utility allowance with tenant-paid overage: `edu-utility-apportionment-wv`.

**Never offered (void):** waiver of the deposit article (§ 37-6A-4); longer notice for a deceased tenant's estate (§ 37-6-11(b)(4)); waiver of the plain-language right (§ 46A-6-109(b)).

**Considered, no change:** E-3, using § 36-4-15's reentry words in the default clause, was not needed, since the clause works through the court process. E-4: `no-sublet-assign` matches § 36-4-11. F-10: `parking-vehicle-rules` tagged as written (`edu-towing-wv`).

### 6.2 Questions asked of Taylor (rule 76)
1. 2026-10-05, approval to download the corpus exports, Constitution, enrolled bills, court forms and rules, and the real lease to the Downloads folder and read them. **Answer:** "Yes, download and read." The same approval covered the bill pages saved on 2026-10-08.
2. 2026-10-08, the H.B. 2961 (2025) effective date: the enrolled heading says July 10, 2025; the status page says July 11, 2025 (rule 16). Recommendation: state both dates. **Answer:** "Use July 10 only." The row's body states July 10, 2025; the notes record July 11 and flag it for the legal watch.

### 6.3 Drafting and legal decisions made by Claude (recorded, not asked)
- **§ 46A-2-128(d), applied library-wide (Claude's reading; case law not searched).** If the debt-collection article reaches residential rent, an incidental charge needs both the agreement and a statute or regulation. Read this way:
  - A charge that is the tenant's own contractual obligation, such as rent, reimbursement of an actual cost the lease assigns, or the price of an option the tenant chooses (an early-termination fee), is part of the obligation.
  - A default or collection charge (late fee, returned-check fee, collection costs, attorney fees, holdover premium, interest beyond statute) is incidental and needs a statute. § 37-6A-2(b)(1) supplies one for late fees "specified in the rental agreement", and § 61-3-39e for dishonored checks.
  - Applied in `default-by-tenant-wv`, `returned-payments-wv`, `early-termination-ks` (WV note), `edu-government-fees-wv`, `edu-attorney-fees-wv`, `edu-collection-fee-wv`, `edu-holdover-rate-wv`, `edu-late-fee-wv` and the tag notes for `keys`, `hoa-compliance`, `parking-vehicle-rules` and `smoking-policy`.
- **`landlord-maintenance` tagged although it promises more than § 37-6-30** (rule 44; canvass question A-1). The clause has no arrears exception, and its fault exception is narrower than the statute's. A greater lease duty controls (§ 37-6-30(b)), so the landlord loses the § 37-6-30(c) arrears excuse. That is lawful and favours the tenant. `edu-landlord-repair-duties-wv`, `edu-rent-into-court-wv` and `edu-condemned-premises-wv` tell landlords so in their bodies.
- **Termination-notice ceiling:** the bracket is capped at "the period the law would otherwise require" (examples 28, 7 and 89 days). § 37-6-11(b)(4) voids "Any lease provision or agreement requiring a longer notice period than that provided by this article"; its place in the death subsection suggests a narrow reach, but the cap avoids the risk.
- **Pet rent is rent** rather than an excluded "nonrefundable fee" (§ 37-6A-1(11)); labelled Claude's reading in `pet-policy`, `edu-pet-fees-wv` and `edu-fees-as-rent-wv`.
- **Jury election:** rows state Magistrate Court Civil Rule 6A's 5 days, which the court's forms follow, not § 50-5-8's 20 days (rule 31; flagged in §10).
- **Squatter law:** a tenant-authorized guest and a holding-over tenant are outside the Stop Squatters Act (§§ 55-3C-2(a), 55-3C-3(a)(3), (6), 37-6-31(a)); `edu-unauthorized-occupants-wv`.
- **Housing authorities and broker trust accounts** are named where a row would otherwise mislead (§ 16-15-17 in `criminal-activity-wv`; § 30-40-18 in `edu-security-deposit-holding-wv`).
- **Distress for rent** is said to be executed by a sheriff or deputy sheriff, since constables were abolished (§ 50-1-17), although §§ 37-6-12 to -17 still say "constable" (§10).

## 7. Open items (none blocking)
- **Legislative rules not read:** the meth-lab disclosure rule under § 60A-11-3(a)(6), the State Fire Code and State Building Code, Department of Health housing and sanitation rules, Public Service Commission rules (utility resale by landlords, termination of service), and Real Estate Commission trust-account rules. Search boundary: the Code delegates to each, and the rows say each is unread.
- **Case law:** not searched (the list is in §1.4). Each row says so where it matters.
- **Federal law:** not read (CARES Act, HUD rules, VAWA, the federal Fair Housing Act, the SCRA, FCRA, lead disclosure).
- **Local ordinances:** not searched (rule 3); the § 8-1-5a(k) limit is stated as unsettled.
- **Legal watch:** H.B. 2961 (2025) effective date, July 10 (enrolled heading, used in the row) or July 11, 2025 (status page and 90-day count). § 61-13-4's saved text has only (a) and (b) although its heading promises exceptions; possibly a parse truncation, and it is not cited. § 24A-2-2b's current text is empty in the corpus, with only an earlier-act note; not cited.
- **Process:** the provenance clean-up on 2026-10-08 (67 rows, `notes` only, §13) was checked by script and by Claude reading every changed sentence. The separate checker round planned for it was stopped by Taylor.

## 8. Integrity checks on the delta
Run by `work/checks.py` on the delivered file (`out/checks-report.json`):
- Rows: 238; header identical to the master: yes; CRLF line endings: 239 lines (header plus 238 rows).
- Duplicate ids: none. New ids clashing with the master: none. Existing rows: 54 (53 tagged; `security-deposit-return-wv` rewritten). New rows: 184.
- On existing rows, fields changed other than `states`, `notes` and `last_checked`: only `security-deposit-return-wv`, the rule 25 rewrite (§5).
- Every row carries WV in `states`; inactive rows: none; blank `verification_status`: none; every row VERIFIED.
- `supersedes` generated from each "Overrides `x`" note and checked: no mismatch, no dangling target (5 overrides, the dormant row's included).
- Groups: all in the app's list; no clause in an education-only group. Blank `topic_key`: none. New topic keys: accessory-dwelling-unit, eminent-domain, home-business.
- `lease_clause_basis`: present on every lease clause, blank on every education row.
- Battery placeholders unexpanded: none; battery citation errors: 0 (no failed battery cited).
- Row pointers: every backticked `-wv` row id in a WV row or segment exists; other backticked names are battery names or topic keys (11 such names, all checked).
- Citation format (kickoff formats, `§`/`§§` spacing): 8 flags, all inside quoted statutory text ("§37-6-5 of this code") or battery hit lists, none in the library's own citations.
- Cited sections that are not in the corpus: § 46A-1-1 (edu-consumer-protection-wv), § 46A-1-2 (edu-consumer-protection-wv), § 8-40-6 (edu-home-business-wv): each is named as nonexistent in the row (a dead cross-reference or 'no § 8-40-6').
- Quotes: 672 single-quoted passages checked word for word against their cited sections, the saved forms or the saved rules; failures: 0.
- Rule 15 line present on every row: yes (missing: 0).
- Variables used: {{monthly_rent}}, {{security_deposit}}, {{pet_deposit}}, {{late_fee_grace_days}}, {{late_fee_amount}}, {{tenant_names}}, {{occupant_names}}, {{pet_rent_amount}}, {{tenant_insurance_minimum}}, {{appliance_list}}, {{state}}, all already filled by the builder; no new variable. Bracket next to a variable: only shared `due-at-signing`, unchanged shared text (§10).
- Merge test: master plus delta gives 3,888 rows (3,772 active); every state's active count other than WV's is unchanged; WV 238.
- Log pointers: every "WV log §N" in the rows names a section of this log that says what the row points to (§1, §1.2, §2.1, §4, §6.1, §6.2, §6.3, §7, §10).

## 9. Propagation notes (rule 62)
- **No shared row's text was edited.** On the 53 tagged rows, only `states` (WV appended), `notes` (a `WV:` segment appended) and `last_checked` changed. On `rental-application-accuracy` the date is 2026-10-08, the day its WV segment was last edited; on the other 52 it is 2026-10-05.
- **Vouches given:** none requested in this pass.
- **Shared edits proposed:** none. The real lease (§15) suggested no change to a shared row.

## 10. Findings for other states or the product (flagged, not fixed)
- **New `{{variable}}`s:** none.
- **Stale cross-references in the Code (rule 77):**
  - § 16B-18-3(f) defines "Discriminatory housing practice" by reference to § 16B-18-19, the severability section (interference is § 16B-18-16).
  - § 16B-18-4(a) exempts owner-occupied rooming houses from § 16B-18-5 "other than subsection (b) of this section". Subsection (b) of § 16B-18-4 is the "in the business" definition; the federal model keeps the advertising ban (§ 16B-18-5(c)). This is Claude's reading, and `edu-fair-housing-wv` advises never advertising a preference.
  - § 16B-18-13(o)(3) cites § 16B-18-12 (subpoenas) for civil actions (§ 16B-18-14), and § 16B-18-15(b)(2) cites "subsection (c), §16B-18-12" for a referral in § 16B-18-11(c).
  - § 16B-18-5(f)(3)(C) and § 16B-18-8(b)(3)(A) key dates to "the date of enactment" after the 2024 move.
  - § 16B-9-1 still refers to "§5-11A-1 et seq."
  - §§ 7-1-3n(b), 8-12-13(b), 8-12-16(c) and 37-15-2(j) cite § 29-3-5b (State Building Code), and § 8-12-16(g)(1) cites § 29-3-12; both are repealed (now §§ 15A-11-5 and art. 15A-10). Former § 29-3-16a (smoke detectors) is now § 15A-10-12.
  - § 46A-6-106(a) cites "§46A-1-1 and §46A-1-2", which do not exist (`edu-consumer-protection-wv`).
  - § 55-16-1(e) refers to the demand "required in subsection (a)"; it is in (b) (`edu-returned-check-fee-wv`).
  - § 17-24A-5(b) cites "section seven" for custody; it is § 17-24A-3 (`edu-towing-wv`).
  - § 60A-11-2(h) points to subsection (f) for a definition in (g).
  - § 11-25-3(a)(5)(i) reads "in excess of $5,000 but not in excess of $1,000" (drafting error).
  - § 15-1F-11(b) and § 50-4-10(a)(2)(B) cite the pre-2016 federal SCRA numbering ("50 U.S.C. App."; `edu-servicemember-rights-wv`).
  - §§ 37-6-12, -14 and -17 still say "justice" and "constable" (construed as magistrate and deputy sheriff, § 50-1-17); § 37-6-17 cites an article of chapter 50 that no longer exists; § 37-6-24 says "clerk of the county court".
  - § 39A-1-3(c), § 39A-1-10(4) and § 39A-2-5 carry internal reference slips.
- **Conflicts (rule 31):**
  - Jury election in magistrate eviction cases: § 50-5-8(a) allows 20 days after the first answer; Magistrate Court Civil Rule 6A(b)(2) and the forms require 5 days after service. Rows use 5 days.
  - Appeal bond: § 50-5-12(a) says not more than judgment plus costs; Rule 18(b) says not less (`edu-eviction-process-wv`).
  - Possession during appeal: § 50-5-12(a) and Rule 18A stay enforcement, while § 55-3A-3(g) says a tenant whose tenancy has expired is not entitled to remain (`edu-eviction-hardship-stay-wv`).
  - § 8-19-12a(a)(1) makes owner, user and property liable for unpaid water charges, while (b) exempts an owner who did not contract directly; the same pattern appears in §§ 16-13A-9(f), (j). Several utility lien statutes have no tenant proviso at all (§§ 16-13-16(a), 16-13-16a(e), 8-16-18, 24-3-10(h)). See `edu-utility-liens-wv`.
- **Bill status pages carry stale section numbers:** H.B. 2434's status page lists §§ 55-3D-1 to -4 (introduced bill) for an act codified at art. 55-3C. H.B. 2961's lists only §§ 37-3A-1 and -2 for an act that adds five sections. A code-affected list's date column is the last action, not approval (S.B. 659, S.B. 300).
- **Corpus oddities:** § 61-13-4 may be truncated; § 24A-2-2b has empty current text; § 61-3-39l prints a heading with no text. None is cited.
- **For other states:** West Virginia's UETA excludes default, eviction and cure notices for a primary residence (§ 39A-2-11(2)(B)), so e-mail cannot carry them. The antitrust act expressly covers rental of real property (§ 47-18-2(c)-(d); `edu-algorithmic-rent-wv`). Art. 46A-6J caps month-to-month rent increases during a declared emergency (`edu-disaster-rent-limits-wv`). The White Cane misrepresentation penalty (§ 5-15-9) does not reach housing.
- **Library text noticed, not changed:** the shared `due-at-signing` puts `{{monthly_rent}}`, `{{security_deposit}}` and `{{pet_deposit}}` inside a hand-filled bracketed prompt. Rule 60 says not to put a bracket next to a self-filling variable. Here the variables sit inside example text the landlord replaces, so this is probably harmless; it is flagged for Claude Code.
- **The real lease** (§15) applies forfeiture of the deposit for early move-out, which § 37-6A-2(b) does not list as a deposit use. `security-deposit-use-wv` applies the deposit only to listed uses.

## 11. Deliverables
- `lease-clauses-WV-delta.csv` (238 rows; sha256 b607270603c74995002ab4f299bae0839cf251eb755b7e0b047074c9e011be82).
- `lease-clause-decision-log-WV.md` (this file).
- Working files kept for the record (not deliverables): `sources/` with `REGISTRY.md`, `batteries/`, `work/` (row sources, engine, checks, canvass slices and results, check rounds).

## 12. Kickoff leads — what each turned out to be
1. **Recent and pending amendments.** H.B. 4570 (§ 37-6-5) and S.B. 799 (§ 55-3A-1) passed one chamber each and died in the other chamber's Judiciary committee; neither is on the 2026 signed list. H.B. 3272 (2025) is law: the summary-relief hearing is set 5 to 10 judicial days after filing, effective July 11, 2025. Enr. Com. Sub. for H.B. 4940 (2024) added § 37-6-31 and the first squatter sections, effective June 4, 2024; H.B. 2434 (2025) rewrote and extended art. 55-3C (§1.2).
2. **Termination notices (§ 37-6-5).** The "special agreement" sentence lets the lease fix another notice period or none. The library offers `termination-notice-wv` (capped; §6.1) and declines a no-notice term. A fixed term needs no notice. The tagged `holdover-ca`'s "terminable only as provided by law" fits, since the law lets the special agreement fix the period.
3. **Habitability (§ 37-6-30).** No anti-waiver sentence and no statute on waiver (case law not searched; `edu-tenant-repair-agreement-wv`). A greater lease duty controls (b); no repairs are owed while the tenant is in arrears (c); fault exceptions cover the tenant, family or a person present with consent. Rows: `edu-landlord-repair-duties-wv`, `edu-heating-wv`, `edu-tenant-repair-remedies-wv` (no repair-and-deduct), `tenant-caused-damage-wv`, `casualty-wv`, and the `landlord-maintenance` decision (§6.3).
4. **Security deposits (art. 37-6A).** No cap and no interest; a closed list of uses (b)(1)-(5); return within the notice period plus 15 days for a contractor; no immediate credit; successor liability; records kept one year and inspectable within 72 hours; no waiver; willful or bad-faith withholding costs the deposit plus 1.5 times the amount wrongfully withheld. Rows: `security-deposit-use-wv`, `security-deposit-return-wv`, `nonrefundable-fees-wv` and the deposit education rows. The dormant row is §5.
5. **Eviction.** Summary relief (§§ 55-3A-1 to -3: grounds, hearing timing, defenses, continuance with rent paid into court, possession, the property rules after an order) sits beside unlawful detainer and ejectment (§§ 37-6-19, 55-3-1 to -3) and relief against forfeiture (§§ 37-6-20, 37-6-23, 37-6-26). Rows: `edu-eviction-process-wv`, `edu-eviction-grounds-wv`, `edu-redemption-wv`, `edu-post-eviction-property-wv`, `edu-eviction-hardship-stay-wv`, `edu-no-nonpayment-notice-wv`.
6. **Older remedies.** Distress and attachment for rent are still law (§§ 37-6-12 to -18; by warrant through an officer) and get an education row only (`edu-landlord-lien-wv`). Interest on rent "as on other contracts" (§ 37-6-9; `edu-unpaid-damages-interest-wv`). Abandonment with rent in arrears (§ 37-6-6; `edu-abandoned-property-wv`), reletting (§ 37-6-7; `edu-abandonment-mitigation-wv`), casualty (§ 37-6-28; `casualty-wv`), and death of a tenant (§ 37-6-11; `edu-tenant-death-wv`). The library's lease touches § 37-6-6 (default clause carve-out), § 37-6-28 (casualty clause) and § 37-6-11 (savings sentence in `early-termination-ks`).
7. **Squatters.** § 37-6-31 (2024) and the Stop Squatters Act (art. 55-3C, 2025): removal by law enforcement on a verified complaint, never against current or former lawful tenants. It is a felony to list a property for rent without authority. Education only (`edu-unauthorized-occupants-wv`).
8. **Outside chapter 37.**
   - No domestic-violence lease rights (`edu-no-dv-lease-termination-wv`, `edu-no-dv-lockchange-wv`, `edu-no-dv-eviction-protection-wv`).
   - Fair housing is now art. 16B-18, not ch. 5, art. 11A (stale lead; `edu-fair-housing-wv`, `edu-disability-accommodation-wv`, `edu-assistance-animal-definition-wv`).
   - Lead: abatement licensing only (`edu-lead-abatement-wv`). Mold: no statute (`edu-no-mold-disclosure-wv`). Smoke and carbon monoxide detectors: § 15A-10-12 (`smoke-detectors-wv`, `edu-alarm-duties-wv`). Late fees: no cap (`edu-late-fee-wv`).
   - Consumer protection (ch. 46A): § 46A-6-109 reaches residential leases. Whether the debt-collection article does is case law; the library adopts a reading (§6.3).
9. **Local rules.** Flagged, not resolved. § 8-1-5a(k) is stated in the registration, inspection and rent-control rows.

## 13. Independent check
Separate agents, none of which drafted rows, checked every row against the saved sources. The brief is `work/check/CHECK-BRIEF.md`. Each later round received the previous version of each edited row to diff against (rule 80, OR 9). The section printer (`work/sec.py`) never truncates (WA 2).

| Round | Rows | ERROR | FIX | NOTE | Notes |
|---|---|---|---|---|---|
| 1 | 238 (5 batches of 46-48) | 8 | 39 | 58 | The errors were false or incomplete absences: housing authorities' criminal-activity rule (§ 16-15-17), the lease-purchase reach of ch. 46A (§ 46A-1-102(13)(a), (42)) in three rows, § 8-1-5a(k), the White Cane misdemeanor (§ 5-15-8), broker trust accounts (§ 30-40-18) and the senior rent statement (§ 11-25-5). All were applied. |
| 2 | 85 edited after round 1 | 0 | 13 | 10 | Applied |
| 3 | 16 | 0 | 2 | 4 | Applied (broker trust account; pet rent labelled as a reading) |
| 4 | 4 | 0 | 0 | 1 | NOTE applied in round 5 |
| 5 | 1 (`returned-payments-wv`, fee narrowed to a check) | 0 | 2 | 3 | Applied |
| 6 | 1 | 0 | 0 | 2 | Applied (credit line; companion row aligned) |
| 7 | 2 | 0 | 0 | 1 | Clean |
| 8 | 2 (round 3 optional notes applied) | 1 | 0 | 1 | The ERROR was a widened absence ("no statute addresses rental applications") contradicted by § 37-15-3(e). Fixed |
| 9 | 1 | 1 | 1 | 1 | The fix's "only statute" claim was false (§§ 37-15-4(a)(1), 37-6A-1(2), (14)). Narrowed to accuracy of applications |
| 10 | 1 | 0 | 0 | 1 | Clean |
| 11 | 2 (effective dates from the 2026-10-08 bill reads) | 0 | 1 | 3 | Applied (06/25/26 is a last-action date, not publication) |
| 12 | 1 | 0 | 0 | 3 | Clean |
| 13 | 1 (Taylor's July 10 decision) | 0 | 0 | 3 | Clean |

**Provenance clean-up (2026-10-08, after round 13):** the WV notes on 67 rows carried pointers to working files that are not delivered ("slice B", "proposals-D", "result-C", "the lead's …", "coordinator"). `work/provenance.py` replaced each with the delivered row id, a log section, or nothing. One substantive sentence was inserted: S.B. 300 (2024) in `edu-fair-housing-wv`, sourced in §1.2.
- Checked by script: only `notes` changed; no dangling `-wv` pointer; every quote still passes; no working-file pointer remains.
- Checked by Claude, who read every changed sentence against its previous version (`work/check/provenance-diff.txt`).
- A separate agent round on this clean-up was started and stopped by Taylor, so it was not run (§7).

Rows edited on 2026-10-08 carry `last_checked` 2026-10-08: `returned-payments-wv`, `edu-returned-check-fee-wv`, `termination-notice-wv`, `rental-application-accuracy`, `edu-foreign-ownership-wv` and `edu-accessory-dwelling-unit-wv`.

## 14. Statute walk (gap-discovery source 1)
Each article was read whole from the saved corpus, and its section list was diffed by script against every citation in the WV rows (bodies, notes and basis).
- **Art. 37-6 (31 sections), 25 cited.** Uncited:
  - § 37-6-10 (who may recover rent: heirs and assignees of the reversion; no lease term);
  - §§ 37-6-15, -16, -18 (distress details: unlawful acts after distress, crop-share rent, removal by third parties; distress is covered at the level of `edu-landlord-lien-wv`);
  - § 37-6-25 (clerk's fees);
  - § 37-6-27 (defects in entry proceedings).
- **Art. 37-6A (6), all cited.** At subsection level, every subsection is cited except § 37-6A-5(c), a savings clause.
- **Art. 55-3A (3), all cited,** every subsection of §§ 55-3A-1 and -3 included.
- **Art. 55-3 (6), 3 cited.** Uncited: §§ 55-3-4 to -6 (limitation and verdict, judgment no bar to ejectment, equitable defenses). These are procedure, with no landlord duty.
- **Art. 55-3C (6), 5 cited.** Uncited: § 55-3C-1 (short title and findings). At subsection level, § 55-3C-3(e), a savings clause, is uncited.
- **Art. 36-4 (22), 8 cited** (§§ 36-4-5, -9a, -11, -12, -13, -14, -17, -19). Uncited: deed covenants (§§ 36-4-1 to -4, -6 to -8), oil and gas royalty sections (§§ 36-4-9b, -9c), the recorded disclaimer of unlawful restrictions (§ 36-4-18), and the short-form lease covenants to pay rent and taxes, for reentry and running with the land (§§ 36-4-9, -10, -15, -16). The library's clauses don't use the short-form words, so the statutory meanings aren't triggered; using § 36-4-15's reentry words was considered and not needed (§6.1, E-3).
- **Art. 16B-18 (21), 10 cited.** Uncited: short title and policy (§§ 16B-18-1, -2), volunteer construction (-3a), real-estate lending and brokerage (-6, -7), and commission administration and procedure (-9, -10, -12, -17, -19, -20).
- **Sections read beyond the act (rule 30):** art. 37-6 was read with art. 36-4 (general lease covenants) and arts. 55-3 and 55-3A (the two possession procedures). Each general section was checked for whether it reaches residential tenancies: § 37-6-30 is residential only; § 37-6-5 applies to all tenancies; § 37-6-6(b) is for housing authorities only.

## 15. Real-lease comparison (gap-discovery source 2)
- **Lease:** Fairmont-Morgantown Housing Authority, Public Housing Lease (Appendix B), revision 2023-12-04, 21 pages. It is linked from the authority's document center (https://fmhousing.com/document_center.php, "Public Housing Lease"). Saved as `sources/wv-real-lease-fmha-2023.pdf` (sha256 4a8c580a…) with extracted text.
- **Why it is a weaker lead:** it is a HUD public-housing lease, so 24 C.F.R. 966.4 drives most of its terms, and only one provision cites state law. No free professional West Virginia private-market lease was found: the template sites are generic multi-state forms, the WVU apartments lease is not public, and the Huntington housing authority's is not online. It is the authority's own lease (its name, office and policies throughout), not a multi-state form-site template. No text is reproduced here. The provision map is kept as `work/real-lease-map.md`.
- **Map (by topic, as a lead about wording):** 54 provisions or provision groups were mapped. 49 are answered by tagged or WV rows (the items the working map left for later screens were all settled by the rows named in §2, §6 and §18), and 5 are federal-program terms out of scope (income reporting, recertification and interim rent, transfers, grievance procedure, community service). Three produced findings:
  - deposit forfeiture for early move-out conflicts with § 37-6A-2(b) (§10; the WV clause applies only listed uses);
  - the lease's 30-day death termination is shorter than § 37-6-11(b)'s two-month estate right. That is lawful for the tenant side, but a lease requiring longer notice would be void (`edu-tenant-death-wv`);
  - abandonment storage and sale follow § 37-6-6(b)'s housing-authority variant (`edu-abandoned-property-wv`).
- **What it produced:** no change to a shared row. It confirmed the tag decisions for `guest-policy`, `guest-policy-day-limit`, `no-sublet-assign`, `snow-removal`, `fire-safety-grilling`, `common-area-use` and `smoking-policy`. Its 30-day notice to vacate at the end of a term is the kind of term `termination-notice-wv` (§ 37-6-5 special agreement) lets a West Virginia lease set.

## 16. Landlord-scenario screen (gap-discovery source 3)
Claude generated 88 scenarios on the AZ §18.1 model (application to move-out, sale and foreclosure) plus West Virginia-specific ones: the § 46A-6-109 plain-language demand, distress for rent, the Stop Squatters Act, accessory dwelling units, § 8-1-5a(k) and the senior rent statement. All were run against the final rows. Eight scenarios had gaps, and nine inconsistencies between rows were found; all were fixed before the independent check:
- distress officer wording;
- repairs while in arrears;
- uneven § 46A-2-128(d) treatment, which led to the library-wide reading (§6.3);
- `utilities-responsibility-wv` utility provisos;
- the writing requirement for periodic notice;
- a duplicate utility-billing education row, retired;
- a stale pointer in `edu-returned-check-fee-wv`;
- the answer-form retaliation defense;
- the § 8-1-5a(k) proviso.

1. Application or screening fee; is it refundable?: `edu-application-fees-wv`, `nonrefundable-fees-wv` — no cap and no refund rule; the fee falls outside the deposit rules only on an express written nonrefundable agreement, which belongs in the signed application.
2. Holding deposit before signing: `edu-holding-deposit-wv` — no holding-deposit statute; treat it as a refundable security deposit unless it is agreed in writing to be a nonrefundable application fee.
3. Housing voucher / source of income: `edu-no-source-of-income-wv`, `edu-tenant-screening-wv` — not a protected class and no duty to accept vouchers; check local ordinances.
4. Immigration status or SSN on the application: Gap found (SSN part); filled: `edu-tenant-screening-wv` now says no statute bars or requires asking for a Social Security number, to ask every applicant the same way (national origin is protected), and that stored numbers fall under the data-breach duties; immigration status: `edu-immigration-status-wv`.
5. Eviction or criminal record in screening: `edu-tenant-screening-wv`, `edu-sex-offender-occupancy-wv`, `edu-fair-housing-wv` — no look-back or report rules; a drug manufacture/distribution conviction may be refused (§ 16B-18-8(b)(4)); the landlord must prove a direct threat.
6. Applicant who is a domestic-violence victim: `edu-no-dv-eviction-protection-wv`, `edu-dv-qualifying-documents-wv`, `edu-dv-confidentiality-wv` — no statute bars refusing to rent; protective orders may grant possession; federal law may apply.
7. Children; occupancy limits: `edu-children-occupancy-wv`, `permitted-occupants`, `edu-fair-housing-wv` — familial status is protected; reasonable occupancy limits apply; small-owner familial-status exemptions.
8. Assistance animal with a no-pet policy (WV 150-pound definition): `assistance-animal-accommodation`, `edu-assistance-animal-definition-wv`, `edu-disability-accommodation-wv`, `edu-service-animal-denial-wv`, `pet-insurance-requirement` — under 150 lb; documentation only from a treatment provider; no fee, deposit or pet terms; denial only on an individualized direct-threat or damage assessment; the clause is more generous than the state definition, which is lawful.
9. Disability modification: `edu-disability-accommodation-wv`, `no-alterations` — modifications at the tenant's expense, with a reasonable interior-restoration condition; the clause's savings sentence keeps the right.
10. Out-of-state owner; who is the landlord for notices: `edu-nonresident-owner-agent-wv`, `edu-owner-identity-wv`, `notices` — no in-state agent requirement; the Secretary of State takes service for nonresidents (§ 56-3-33); an undisclosed managing agent is treated as the landlord (§ 37-6A-1(5)).
11. What to give at signing (disclosures): `edu-required-disclosures-wv`, `lead-based-paint`, `edu-meth-lab-wv`, `edu-lease-copy-wv`, `edu-no-tenant-rights-statement-wv`, `edu-plain-language-wv` — the federal lead disclosure, a former meth lab (by legislative rule), plain language and licensee agency disclosure; no state tenant-rights summary.
12. Electronic signing: `electronic-signatures`, `edu-electronic-records-wv` — UETA applies on agreement; the right to refuse later electronic dealings cannot be waived; default and eviction notices for a primary residence are excluded.
13. Copy of the lease; plain-language demand (WV §46A-6-109): `edu-lease-copy-wv`, `edu-plain-language-wv`, `edu-no-lease-completeness-rule-wv` — no copy statute for owners (licensees must give copies); the tenant may demand a conforming lease and sue to reform it; that right cannot be waived.
14. Deposit cap; pet deposit vs pet fee (WV written nonrefundable agreement): `edu-no-security-deposit-cap-wv`, `edu-pet-fees-wv`, `nonrefundable-fees-wv`, `security-deposit-use-wv`, `pet-policy` — no cap; a refundable pet deposit is a security deposit; a pet fee is nonrefundable only by express written agreement; pet rent is rent.
15. Where to hold the deposit; interest; records (WV 1-year records, 72-hour inspection): `edu-security-deposit-holding-wv`, `edu-no-deposit-interest-wv` — no account or interest rule; itemized deduction records kept 1 year; inspection or copy within 72 hours of a written request (§ 37-6A-3, verified).
16. Nonrefundable fees: `nonrefundable-fees-wv`, `edu-no-fee-in-lieu-of-deposit-wv`, `edu-no-fee-transparency-wv` — the written agreement controls pet and application fees; no cap; a fee in lieu of a deposit is unregulated.
17. Last month's rent up front (prepaid rent): `edu-deposit-last-month-rent-wv`, `due-at-signing` — prepaid rent is not a security deposit; the tenant cannot demand that the deposit be credited against rent (§ 37-6A-2(d)).
18. Move-in condition checklist: `edu-no-condition-checklist-wv`, `existing-condition` — not required; a dated record with photos is recommended.
19. Due date; where payable; grace period: `rent-payment`, `acceptable-payment-methods`, `edu-no-rent-grace-period-wv` — the lease sets the due date, place and method; no statutory grace period.
20. Late fee amount; collecting it (WV debt-collection rules): `late-fee`, `edu-late-fee-wv`, `edu-collection-fee-wv`, `default-by-tenant-wv`, `edu-knowing-use-penalty-wv` — no cap; the fee must be reasonable and specified in the lease (§ 37-6A-2(b)(1)); the § 46A-2-128(d) risk is flagged; no termination for an unpaid late fee alone.
21. Cash rent; receipts: `edu-no-rent-receipt-rule-wv`, `edu-no-payment-method-rule-wv` — no duty to accept cash and no receipt rule (the § 46A-2-114 receipt rule covers goods only); receipts recommended.
22. Bounced check; returned-payment fee: `returned-payments-wv`, `edu-returned-check-fee-wv` — up to $25 per dishonored check, none after a warrant complaint (§ 61-3-39e); civil remedy after a 30-day written demand (§ 55-16-1).
23. Electronic-only payment: `edu-no-payment-method-rule-wv`, `acceptable-payment-methods` — no statute bars requiring electronic payment.
24. Partial payment; waiver by acceptance: `edu-no-waiver-by-acceptance-rule-wv`, `late-fee`, `application-of-payments` — no statute; case law; reserve rights in writing when accepting.
25. Interest on unpaid rent (WV §37-6-9): `edu-unpaid-damages-interest-wv`, `default-by-tenant-wv` — interest 'as on other contracts'; prejudgment and post-judgment rates under § 56-6-31; the lease sets no rate.
26. Rent increase mid-term or at renewal: `rent-increase-midterm-wv`, `edu-rent-escalation-wv`, `edu-rent-increase-notice-wv`, `edu-disaster-rent-limits-wv` — a fixed term needs a lease term to allow an increase; for periodic tenancies, give at least the termination notice; emergency price limit for month-to-month rentals.
27. New fee or rule mid-lease: `edu-required-fees-wv`, `edu-rules-regulations-wv`, `edu-term-change-notice-wv`, `entire-agreement` — no statute; add a fee mid-term only with written agreement; changes to a periodic tenancy take the termination-notice lead time.
28. Entry for repairs or showings: `landlords-access`, `inspection-rights`, `edu-no-entry-statute-wv` — no entry statute; the lease's 24-hour notice and business-hours terms govern.
29. Tenant refuses entry: `edu-no-entry-statute-wv`, `landlords-access`, `default-by-tenant-wv`, `edu-eviction-grounds-wv` — answered only indirectly: refusal breaches the lease's access covenant (notice and cure, then summary relief under § 55-3A-1(a)(3)). No row says so directly or warns against forcing entry; consider one sentence in `edu-no-entry-statute-wv`.
30. No heat or hot water (WV Oct 1 - Apr 30 heat): `edu-heating-wv`, `utilities-responsibility-wv`, `edu-landlord-repair-duties-wv`, `edu-tenant-repair-remedies-wv` — direct-connection units need running water, hot water at all times and reasonable heat Oct 1 to Apr 30 (§ 37-6-30(a)(7)); no tenant self-help remedy.
31. Repairs while tenant behind on rent (WV §37-6-30(c)): Gap found (inconsistent rows); filled: `edu-landlord-repair-duties-wv`, `edu-rent-into-court-wv` and `edu-condemned-premises-wv` now say in the body that the § 37-6-30(c) arrears excuse yields to a greater lease duty (§ 37-6-30(b)) and that the tagged `landlord-maintenance` clause has no arrears exception.
32. Tenant withholds rent or repairs and deducts: `edu-tenant-repair-remedies-wv`, `rent-payment`, `edu-rent-into-court-wv` — no repair-and-deduct or withholding right; there is a dependent-covenant defense, and rent is paid into court on a continuance.
33. Tenant-caused damage: `tenant-caused-damage-wv`, `edu-no-landlord-self-cure-wv`, `security-deposit-use-wv`, `edu-tenant-statutory-duties-wv`, `default-by-tenant-wv` — no abatement for the tenant's own fault; deposit deductions; waste liability; damage is a summary-relief ground.
34. Fire or casualty; rent abatement (WV §37-6-28): `casualty-wv`, `edu-no-alt-housing-wv`, `edu-tenant-repair-remedies-wv` — proportional abatement unless fault; the tenant may surrender if the landlord doesn't rebuild in a reasonable time; no substitute-housing duty.
35. Land taken by eminent domain (WV §37-6-29): `edu-eminent-domain-wv`, `edu-statutory-early-termination-wv` — a whole taking ends rent and a partial taking reduces it, unless the lease expressly provides otherwise; the library leaves the statute in place.
36. Mold, pests, bed bugs, radon, meth, lead: `edu-no-mold-disclosure-wv`, `edu-no-bed-bug-disclosure-wv`, `edu-no-radon-disclosure-wv`, `edu-meth-lab-wv`, `edu-lead-abatement-wv`, `lead-based-paint`, `edu-nuisance-wv` — no state mold, bed bug or radon disclosure (habitability still applies); meth-lab vacancy and remediation plus a rule-based disclosure; lead abatement licensing.
37. Smoke and CO detectors; deaf tenant (WV §15A-10-12): `smoke-detectors-wv`, `edu-alarm-duties-wv` — owner installs and replaces; tenant does routine maintenance in a non-owner-occupied 1-2 family dwelling; light-signal detector on written request; CO rules in (f)-(g) (verified).
38. Tenant changes the locks: `keys`, `no-alterations`, `edu-no-security-device-rule-wv`, `edu-no-dv-lockchange-wv` — no statute; answered only indirectly. No WV clause expressly bars rekeying or requires the tenant to hand over new keys (`keys` bars only duplication; `no-alterations` covers fixtures). Consider one sentence in `keys`, or note the point in `edu-no-security-device-rule-wv`.
39. Long-staying guest; squatter (WV Stop Squatters Act): `guest-policy`, `guest-policy-day-limit`, `edu-no-guest-rights-rule-wv`, `edu-unauthorized-occupants-wv` — the lease governs guests; the Act's police removal doesn't reach a tenant-authorized guest or a current or former tenant.
40. Sublet or short-term rental: `no-sublet-assign`, `edu-rent-tax-wv`, `edu-deposit-on-sale-wv` — written consent (§ 36-4-11); short-term rentals barred by the clause; occupancy tax for stays under 30 days; one deposit with a sublessee (§ 37-6A-2(f)).
41. Home business: Gap found; filled: new topic `home-business`, `edu-home-business-wv` (W. Va. Code §§ 8-40-1 to 8-40-5: a permitted use against zoning, but a lease or deed covenant still binds); `residential-use-only` WV note cites § 8-40-2(a)(1).
42. Smoking; medical cannabis vaping: `smoking-policy`, `edu-smoking-cannabis-wv`, `edu-cannabis-wv` — no rental smoking statute; smoking medical cannabis is unlawful (§ 16A-3-3(b)(1)); a lease ban on vaporized medical cannabis is unsettled.
43. Firearms: `edu-firearms-wv` — the Constitution protects arms; § 61-7-14 lets an owner or lessee bar carrying on property it controls, but its reach inside a leased unit is unsettled; the parking-lot vehicle rule.
44. Parking and towing; abandoned vehicles: `parking-ks-oh-ca`, `parking-vehicle-rules`, `assigned-parking-space`, `edu-towing-wv` — no private-lot towing statute; abandoned after 5 days; agency removal after 30 days' registered or certified notice.
45. HOA or condo fines: `hoa-compliance`, `edu-hoa-wv` — association fines after notice and hearing (§ 36B-3-102(a)(11)); the lease passes them to the tenant.
46. EV charging, solar, satellite dish: `edu-no-ev-charging-right-wv`, `edu-portable-solar-wv`, `edu-telecom-access-wv` — no tenant EV or solar right; cable access in buildings of 3 or more households; the broadband-antenna statute's reach to leases is unsettled; the federal OTARD rule was not read.
47. New house rules: `edu-rules-regulations-wv`, `edu-term-change-notice-wv`, `entire-agreement` — rules bind as lease terms; mid-term changes depend on the lease and contract law.
48. Code complaint; retaliation (defense on the Answer form): `edu-retaliation-wv`, `edu-no-for-cause-eviction-wv`, `edu-tenant-organizing-wv`, `edu-receivership-wv` — no general retaliation statute; § 55-3A-3(g) appeal exception; the MLTAWWO answer form lists retaliation (stated in `edu-no-for-cause-eviction-wv` and `edu-tenant-organizing-wv` but not in `edu-retaliation-wv`, the row on point; add it there).
49. Police or emergency calls: `edu-no-emergency-assistance-rule-wv`, `criminal-activity-wv` — no statute; the library adds no penalty term, and the criminal-activity clause carves out victims and emergency calls.
50. Nonpayment: what notice before filing? (WV none required): `edu-no-nonpayment-notice-wv`, `edu-eviction-grounds-wv`, `default-by-tenant-wv`, `edu-cares-act-notice` — no pre-filing notice; the CARES Act 30 days on covered properties; honor any lease period.
51. Other lease violation: notice and cure: `edu-eviction-grounds-wv`, `default-by-tenant-wv` — no statutory cure; the lease gives a [number]-day cure for curable breaches; § 37-6-19 delays ejectment and unlawful detainer until a lease-fixed time has passed.
52. Drugs or violence at the unit: `criminal-activity-wv`, `edu-no-expedited-criminal-eviction-wv`, `edu-nuisance-wv`, `edu-no-drug-free-addendum-wv` — an incurable covenant breach; no expedited track; forfeiture and nuisance exposure.
53. Filing summary relief; forms; hearing 5-10 judicial days; jury election (WV): `edu-eviction-process-wv`, `edu-statutory-forms-wv`, `edu-jury-waiver-wv` — verified petition; MLTPTWR, MLTSMWO and MLTAWWO forms; hearing in 5-10 judicial days; jury election within 5 days by rule (statute conflict noted).
54. Tenant appeals; stay of the possession order (WV Rule 18A vs §55-3A-3(g)): `edu-eviction-hardship-stay-wv`, `edu-eviction-process-wv` — 20-day appeal with bond; automatic stay (§ 50-5-12(a), Rules 17-18A) vs no possession pending appeal after the tenancy expires (§ 55-3A-3(g), verified); the conflict is flagged.
55. Lockout or utility shutoff by landlord: `edu-self-help-eviction-wv`, `edu-utility-shutoff-wv`, `edu-heating-wv` — no express dwelling ban, but court process only; § 55-3-1 forcible-entry action; the water and heat duty.
56. Ending a month-to-month / year-to-year (WV §37-6-5): `edu-termination-notice-wv`, `termination-notice-wv`, `edu-tenancy-at-will-wv` — written notice 3 months before the year ends; one full period otherwise; a special agreement may change it (§ 37-6-5, verified).
57. Fixed term ends; holdover: `edu-holdover-wv`, `edu-holdover-rate-wv`, `holdover-ca`, `surrender-end-of-term` — no notice needed; unlawful detainer with mesne profits; no statutory double rent; not a squatter.
58. Tenant wants out early; mitigation: `early-termination-ks`, `edu-abandonment-mitigation-wv`, `edu-statutory-early-termination-wv`, `default-by-tenant-wv` — a contractual exit fee; the reletting notice keeps the tenant liable for the difference; general mitigation is case law.
59. Servicemember orders: `edu-servicemember-rights-wv`, `early-termination-ks` — federal SCRA; Guard on state active duty for 30 days or more; default-judgment limits; 60-day abandoned-property notice.
60. Domestic-violence victim leaving: `edu-no-dv-lease-termination-wv`, `edu-dv-qualifying-documents-wv`, `edu-statutory-early-termination-wv` — no statutory DV exit; protective orders may grant possession.
61. Tenant dies (WV §37-6-11(b) two-month termination): `edu-tenant-death-wv`, `early-termination-ks`, `edu-prohibited-lease-terms-wv` — heir or personal representative notice; effective the last day of the month two months after; cannot be waived; follow it for every tenancy.
62. Tenant moves to care facility / incapacity: `edu-no-infirmity-termination-wv` — no statutory exit; consider it as a reasonable accommodation; get advice.
63. Abandonment with rent owed (WV §37-6-6 one-month posted notice): `edu-abandoned-property-wv`, `edu-abandonment-mitigation-wv`, `edu-no-extended-absence-rule-wv` — posted notice to pay within one month, then possession and entry (§ 37-6-6(a), verified).
64. Belongings left after abandonment (WV §37-6-6 notice and 30/60 days): `edu-abandoned-property-wv`, `surrender-end-of-term` — posted and first-class-mail 'Please Forward' notice; 30 days (60 for active duty); over $300, up to 30 more days on paid costs (§ 37-6-6(c)-(e), verified).
65. Belongings left after the possession order (WV §55-3A-3(h)-(i)): `edu-post-eviction-property-wv`, `security-deposit-use-wv` — dispose, store or leave for 30 days; over $300, 30 more days; removal and storage costs come off the deposit (§ 55-3A-3(h)-(i), verified).
66. Reletting after abandonment; tenant stays liable (WV §37-6-7): `edu-abandonment-mitigation-wv`, `edu-no-double-letting-wv` — the reletting notice in the same posting keeps the tenant liable for the rent difference; the tenant's resumption right under § 37-6-8.
67. Tenant pays everything before trial / after judgment (WV §§37-6-20, -23, -26): `edu-redemption-wv`, `default-by-tenant-wv`, `edu-rent-into-court-wv` — tender before trial ends ejectment or unlawful detainer; 12 months after execution; 1 year after a recorded reentry; reach to summary relief unsettled.
68. Distress for rent (WV §§37-6-12 to -18): `edu-landlord-lien-wv`, `edu-exemption-waiver-wv`, `edu-self-help-eviction-wv` — only by officer under a magistrate's warrant within 1 year; property subject; exemptions. Answered, but the three rows disagree on the officer and on exemptions (see Inconsistencies 1).
69. Deposit return; itemization; contractor extension (WV 60/45/+15 days): `security-deposit-return-wv`, `edu-security-deposit-penalty-wv`, `edu-deposit-cost-schedule-wv` — the earlier of 60 days after termination or 45 days after a new tenant moves in; written itemization; contractor notice plus 15 days; 1.5x penalty for willful or bad-faith withholding (§§ 37-6A-1(7), 37-6A-2(a), (c), 37-6A-5, verified).
70. Deposit returned as undeliverable; unclaimed: `security-deposit-return-wv`, `edu-deposit-escheat-wv` — hold six months for pickup within 72 hours of a request (§ 37-6A-2(g), verified; the statute is silent after six months); unclaimed property reporting after 3 years.
71. Sale with a tenant in place; deposit follows (WV §37-6A-2(e)): `edu-deposit-on-sale-wv`, `edu-sale-or-management-change-wv` — the holder at termination owes the deposit whether or not it was transferred; the lease runs with the reversion; no attornment needed.
72. Foreclosure of the landlord's mortgage: `edu-foreclosure-tenants-wv`, `edu-no-foreclosure-disclosure-wv`, `edu-cares-act-notice`, `tenant-forward-proceedings-ca` — a trustee's-sale purchaser ends unrecorded or later-recorded leases on 90 days' notice, or 30 days before expiry if shorter, and month-to-month tenancies on 30 days (§ 38-1-16); no disclosure duty.
73. Condominium conversion: `edu-condo-conversion-wv` — 120-day notice with the public offering statement; 60-day purchase offer; 180-day price restriction; cannot be waived (§ 36B-4-112).
74. Condemned or unfit dwelling (municipal unsafe-building ordinances, WV §8-12-16): `edu-condemned-premises-wv`, `edu-receivership-wv`, `edu-applicable-codes-wv`, `edu-rental-inspection-wv` — no statute bars rent or requires relocation; habitability and casualty rules; municipal close and demolish orders, liens and receivership. (Its arrears sentence lacks the greater-duty caveat; see 31.)
75. Municipal water/sewer bill unpaid by tenant; lien (WV §§8-19-12a, 8-18-23, 16-13A-9): `edu-utility-liens-wv`, `utilities-responsibility-wv`, `edu-utility-landlord-account-wv`, `edu-utility-shutoff-wv` — no owner liability or lien for a tenant's bill under §§ 8-19-12a(b), 8-18-23(c), 8-20-10(c), 16-13A-9(f) unless the owner contracted; other statutes do create a lien. (A notes inconsistency is listed below.)
76. Renter's property tax credit statement (WV §11-25-5): `edu-senior-rent-statement-wv` — sign a gross-rent statement on request of a 65+ claimant with income of $5,000 or less (§ 11-25-2(1), verified); fine up to $50 per violation.
77. Rental registration or inspection; local ordinances (Charleston, Morgantown): Gap found (incomplete); filled: both sentences of W. Va. Code § 8-1-5a(k) added to `edu-no-landlord-registration-wv`, `edu-rental-inspection-wv` and `edu-rent-control-wv`, with its reach called unsettled (case law and ordinances not searched).
78. Local rent control: `edu-rent-control-wv`, `edu-disaster-rent-limits-wv` — no statewide cap or express preemption; § 8-1-5a(k)'s reach to rent amounts is unsettled; emergency price limit.
79. Attorney fees and collection costs in the lease (WV §46A-2): `edu-attorney-fees-wv`, `edu-collection-fee-wv`, `default-by-tenant-wv`, `edu-knowing-use-penalty-wv` — no authorizing statute; the § 46A-2-127(g) and -128(c)-(d) risk; the library lease disclaims these fees.
80. Jury or exemption waiver; confession of judgment: `edu-jury-waiver-wv`, `edu-exemption-waiver-wv`, `edu-confession-of-judgment-wv`, `edu-prohibited-lease-terms-wv` — exemption waiver void (§ 38-8-15); no statute on lease jury waivers or confessions (§ 46A-2-117 reaches goods only); none offered.
81. Farm dwelling, employee housing, room in the owner's home, mobile home lot (scope): Gap found (farm and employee housing); filled: `edu-scope-wv` says the landlord-tenant and deposit articles have no farm or employer-housing exclusion and that whether job-tied occupancy is a tenancy is case law not searched; room in the owner's home and mobile home lots were already answered (`edu-scope-wv`, `edu-fair-housing-wv`).
82. Eviction record sealing: `edu-no-eviction-record-sealing-wv` — no sealing statute; court rules not reviewed.
83. Renter's insurance: `tenants-property-insurance-ks-oh-ca`, `edu-no-renters-insurance-rule-wv`, `pet-insurance-requirement` — no statute; a contract term; no insurance tied to an assistance animal.
84. Water heater, pool, window guards: Gap found (window guards); filled: `edu-no-window-guard-rule-wv` (batteries c-window, c-window-ev); water heater `edu-no-water-heater-rule-wv`; pool `edu-pool-safety-wv`.
85. Notices by e-mail: `edu-notice-delivery-wv`, `edu-electronic-records-wv`, `notices` — e-mail only for notices outside the § 39A-2-11(2)(B) exclusion and only with agreement; statutory methods control.
86. Accessory dwelling unit rental (WV §8-42): Gap found; filled: new topic `accessory-dwelling-unit`, `edu-accessory-dwelling-unit-wv` (W. Va. Code art. 8-42; both dates for SB 659 stated, §7).
87. Listing or advertising a rental without authority (WV §55-3C-6): Gap found; filled: `edu-unauthorized-occupants-wv` body now states the W. Va. Code § 55-3C-6 felony for listing or advertising a property for rent without title or authority.
88. Utility billing by submeter or ratio (WV §37-6A-1(17)): `utility-billing-wv`, `edu-utility-apportionment-wv`, `security-deposit-use-wv` — allowed only if the lease provides; no disclosure, cap or procedure; PSC status not read. (A duplicate education row on utility billing was retired before delivery.)

## 17. Outside-title search and proof of absence (gap-discovery source 4)
- **Loaded before the first battery:** the whole Code (all 2,374 articles, 31,329 entries) and the Constitution (205 entries) in one corpus. The Constitution was proven by a section count against the official page (preamble and 204 sections), by a direct count of entries containing "Legislature" (97) and "Governor" (29), and by real constitutional positives in batteries `const-property` (art. III, §§ 13, 17) and `firearms` (art. III, § 22), both passed. Every absence battery's scope reads "CODE 31329, CONST 205".
- **Provisions addressed to the State (SC circle-back 3):** art. III, § 17 (courts open; every person injured shall have remedy by due course of law) is a guarantee about the courts and bears on exculpatory clauses only through case law (`parking-ks-oh-ca` WV note). Art. III, § 13 (jury trial) binds courts. Art. III, § 22 (right to bear arms) binds the State, while § 61-7-14 lets owners and lessees restrict firearms on their property, except locked vehicles of customers, employees and invitees (`edu-firearms-wv`). Art. III, § 23 (2024, assisted suicide) is not relevant.
- **What the outside-title search found that the core chapters lack:**
  - ch. 46A: plain language, debt collection, emergency price caps (art. 46A-6J) and data-breach notice (art. 46A-2A);
  - ch. 16B: the Fair Housing Act, the 150-pound assistance-animal definition, and the White Cane misdemeanor for refusing a guide or service animal;
  - § 15A-10-12: detectors;
  - ch. 60A: the meth-lab occupancy bar and forfeiture of property used for drug offenses;
  - art. 61-9: nuisance abatement;
  - § 61-3-39e and § 55-16-1: worthless checks;
  - arts. 8-40 and 8-42: home business and ADUs;
  - § 8-1-5a(k): municipal rental-regulation limit;
  - art. 24D-2: cable access in multiple dwellings (`edu-telecom-access-wv`);
  - art. 37-3A: foreign-adversary ownership;
  - § 30-40-18: broker trust accounts;
  - § 11-25-5: the senior renter's rent statement;
  - art. 36-8: unclaimed deposits;
  - art. 39A: electronic transactions, including the eviction-notice exclusion;
  - § 16-15-17: housing authorities' criminal-activity rule;
  - § 38-1-16: a trustee's-sale purchaser may end a later lease;
  - § 36B-4-112: condominium conversion notice.
- **Protected conduct a shared clause restricts:** cannabis (the Medical Cannabis Act bars smoking; `smoking-policy` lawful), firearms (above), signs and displays (no statute; `edu-no-display-rights-rule-wv`), and cameras and privacy (no statute; `edu-no-tenant-camera-rule-wv`).

## 18. Topic reference canvass (rules 27, 36)
Six agents canvassed the 334 topics in `lease-clause-topics.md` in slices A to F, with the main pass's rows. Every topic ends with a status, and the WV rows that answer it are named. Three new keys came from West Virginia law: `accessory-dwelling-unit`, `eminent-domain` and `home-business`. Totals: Present 143, Confirmed absent 71, Answered elsewhere 47, Not applicable 72, Not offered 1. Every for-cause verdict is in `for-cause-eviction` (`edu-no-for-cause-eviction-wv`; rule 41). In these lines, "lead" means the main research pass, as distinct from the canvass agents; both are this pass. Battery names in parentheses are cited in the rows named.

### 18.1 Topics answered by a WV row or by a row on another topic (261)

- `abandoned-property` (34 states): Present: § 37-6-6(a), (c)-(e) posted one-month pay notice, then a posted and mailed ("Please Forward") disposal notice with a 30-day (60 if active duty) removal date, forfeiture, and 30 more days of storage for property over $300; the statute reaches only a tenant who abandons owing rent (gap for others) (`abandoned-property`, `-nc`, `b-left-property-ev`, `-nc`); rows: `edu-abandoned-property-wv`
- `abandonment-and-mitigation` (22 states): Present: §§ 37-6-6(a), 37-6-7, 37-6-8 (rent only to the date of possession unless the notice adds a reletting notice, which keeps the tenant liable for the difference; tenant's right to resume before reletting); a general mitigation duty is case law (`mitigation`, `mitigation-nc`); rows: `edu-abandonment-mitigation-wv`
- `acceptable-payment-methods` (36 states): Present: shared clause tagged by the lead, plus a confirmed absence of any payment-method statute; rows: `acceptable-payment-methods`, `edu-no-payment-method-rule-wv` (e-payment-method, e-payment-method-nc).
- `actual-notice-method` (1 state): Answered elsewhere: Oregon's "actual notice" device has no West Virginia counterpart; delivery methods are statute-by-statute (§§ 37-6-5, 37-6-6, 37-6A-2(g), 55-3A-1(c), 39A-2-11); rows: `edu-notice-delivery-wv`
- `addendum-precedence` (36 states): Present: shared clause, lead tags; nothing in West Virginia law conflicts (generic mechanics); rows: `addendum-precedence` (lead)
- `adverse-proceeding-notice` (1 state): Present: attornment to a stranger void without landlord consent or court order (§ 37-6-4); no tenant duty to report proceedings (d-proceeding-notice, d-attorn-r2); optional clause proposed; rows: `edu-attornment-wv`
- `alarm-duties` (35 states): Present: § 15A-10-12 (owner installs smoke detectors in 1-2 family dwellings, tenant does routine maintenance where owner not in residence; light-signal detector on written request; CO detectors in new units and in rented 1-2 family dwellings, apartment buildings, boarding houses; misdemeanor fines); rows: `edu-alarm-duties-wv` (batteries smoke-detector, a-alarm-ev, a-alarm-tamper). [WV rows with this key: `smoke-detectors-wv`, `edu-alarm-duties-wv`]
- `alarm-tampering-fee` (1 state): Answered elsewhere: no tampering fee or tampering statute (a-alarm-tamper, -nc: 0 hits); rows: `edu-alarm-duties-wv`.
- `algorithmic-rent-setting` (30 states): Present: no algorithm-specific statute (f-algorithm, f-algorithm-ev, both with -nc), but the antitrust act (§§ 47-18-2(c)-(d), 47-18-3, 47-18-9) reaches real property and rentals; rows: `edu-algorithmic-rent-wv`
- `alt-housing` (6 states): Confirmed absent: no substitute-housing duty; § 37-6-28 casualty abatement and surrender only; rows: `edu-no-alt-housing-wv` (alt-housing, alt-housing-nc, a-alt-housing-ev, -nc).
- `alterations` (36 states): Present: shared clause; its carve-out preserves the fair housing reasonable-modification right (W. Va. Code § 16B-18-5(f)(3)(A)); rows: `no-alterations`, related `edu-construction-liens-wv`.
- `appliances-excluded` (1 state): Present: § 37-6-30(a)(5) attaches the repair duty to appliances 'supplied or required to be supplied by him by written or oral agreement', so an excluded-appliances list has real effect in West Virginia; offered as optional `appliances-excluded-wv` (proposal A-2; WV variant, not the SC text).
- `appliances-included` (36 states): Present: shared `appliances-included` (tagged); the duty it triggers is in `edu-landlord-repair-duties-wv`.
- `application-fees` (27 states): Present: `edu-application-fees-wv`.
- `application-of-payments` (36 states): Present: no West Virginia rule on the order payments are applied (`payment-order` battery; hits not on point); rows: shared `application-of-payments` (tagged)
- `assigned-parking-space` (36 states): Present: no statute engaged; rows: shared `assigned-parking-space` (tagged)
- `assistance-animal-accommodation` (36 states): Present: § 16B-18-3(p) (under 150 pounds, with or without training, emotional support) and § 16B-18-5(f)(10); rows: shared `assistance-animal-accommodation` (tagged), `edu-assistance-animal-definition-wv` (definition, no pet terms, coverage), `edu-disability-accommodation-wv` (slice C: documentation, denial grounds)
- `attorney-fees` (23 states): Present: no statute gives a residential landlord fees (`b-attorney-fees-r2`, `-r2-nc`); WVCCPA §§ 46A-2-122, -127(g), -128(d), 46A-5-101(1) risk; tenant fee statutes §§ 37-6A-4, 16B-18-14(c)(2), 55-3C-5(b); rows: `edu-attorney-fees-wv` (exact id requested)
- `automatic-renewal` (7 states): Confirmed absent: no auto-renewal statute (term-renewal, d-renewal-ev); § 37-6-5 defaults and § 37-6-11(b)(5) renewal date explained; rows: `edu-automatic-renewal-wv`
- `bed-bug-disclosure` (34 states): Confirmed absent: the only bed bug statute is for hotels with ten or more bed chambers (§§ 16-6-16, 16-6-3); habitability duties noted; rows: `edu-no-bed-bug-disclosure-wv` (bedbug, c-pest, c-pest-nc)
- `cannabis` (19 states): Present: medical only (art. 16A-3); smoking and home growing unlawful; no housing provision; marihuana Schedule I (§ 60A-2-204); rows: `edu-cannabis-wv`
- `cares-act-notice` (36 states): Present: federal row `edu-cares-act-notice` (lead tags WV); West Virginia law does not make it read wrongly: WV has no statutory pre-filing nonpayment notice (`edu-no-nonpayment-notice-wv`), so on a covered property the federal 30 days is the only notice; its "your state's longer notice" limb reaches the § 37-6-5 notices for periodic tenancies; WV's saved petition and summons forms carry no CARES statement, which the row's "some state court rules" wording tolerates; rows: `edu-cares-act-notice` (federal)
- `casualty-and-mitigation-waivable` (1 state): Answered elsewhere: § 37-6-28's rent reduction applies 'unless the lease otherwise provides' (`casualty-wv` uses it); mitigation is case law; rows: `casualty-wv`, `edu-abandonment-mitigation-wv`
- `casualty-termination` (36 states): Present: `casualty-wv` (§ 37-6-28); no separate education row needed.
- `children-occupancy` (5 states): Present: Fair Housing Act familial status, exemptions and occupancy-limit savings clause; rows: `edu-children-occupancy-wv`.
- `collection-fee` (4 states): Present: §§ 46A-2-122, -127(g), -128(c)-(d), 46A-5-101; no statute authorizes a landlord collection fee (f-collection-fee); rows: `edu-collection-fee-wv`
- `common-area-use` (36 states): Present: shared clause tagged by the lead; rows: `common-area-use`.
- `condemned-premises-rent-bar` (5 states): Confirmed absent: no rent bar or relocation duty (d-condemned-rent, alt-housing, alt-housing-nc); habitability, casualty and municipal/county closing powers explained (§§ 37-6-30, 37-6-28, 8-12-16, 7-1-3ff); rows: `edu-condemned-premises-wv`
- `condition-inspection` (28 states): Present: lead row; rows: `edu-no-condition-checklist-wv`
- `confession-of-judgment` (2 states): Present (gap documented): § 46A-2-117 voids confessions only in consumer credit sales, consumer leases of goods and consumer loans; § 46B-6-2 rent-to-own; a lease-purchase where rent is applied to the price can be a consumer credit sale (§ 46A-1-102(13)(a), (42)); none for ordinary leases of homes (confession); in-court confession § 50-4-10(c); rows: `edu-confession-of-judgment-wv`
- `construction-liens` (3 states): Present: the mechanics' lien statute and the absence of any lessee/lessor rule are explained; rows: `edu-construction-liens-wv` (e-lessee-lien, e-lessee-lien-ev); proposal E-1.
- `consumer-protection-act` (24 states): Present: art. 46A-6 UDAP; § 46A-6-109 names residential rentals; private action limited to "goods or services" (reach unsettled, case law not searched); 45-day cure notice § 46A-5-108; rows: `edu-consumer-protection-wv`
- `conversion-notice` (19 states): Present: UCIOA § 36B-4-112 (120-day notice with public offering statement, 60-day purchase offer, 180-day price protection, defense to possession, no waiver § 36B-1-104); rows: `edu-condo-conversion-wv` (c-conversion)
- `criminal-activity` (21 states): Answered elsewhere: the candidate clause `criminal-activity-wv` (a lease covenant makes criminal activity a § 55-3A-1(a)(3) 'leasehold covenant' ground); education on speed, forfeiture and nuisance exposure; rows: `edu-no-expedited-criminal-eviction-wv`, `edu-nuisance-wv` (clause pending with the lead; see proposals-B)
- `cure-and-eviction-grounds` (17 states): Present: § 55-3A-1(a)(3) grounds; no pre-filing notice or cure statute (`nonpayment-notice`, `-nc`, `b-nonpayment-ev`, `-nc`, `b-cure-period`, `-nc`); § 37-6-19 bars ejectment or unlawful detainer until a lease-specified reentry time elapses; rows: `edu-eviction-grounds-wv`
- `default-by-tenant` (36 states): Present: clause; rows: `default-by-tenant-wv`
- `deposit-cost-schedule` (5 states): Confirmed absent: no statute sets or forbids preset charges (f-cost-schedule, -nc, f-cost-schedule-ev); § 37-6A-2(b)(2), (b)(5) and § 37-6A-4 frame the risk; rows: `edu-deposit-cost-schedule-wv`
- `deposit-escheat` (22 states): Present: art. 36-8 lists a security deposit as property (§ 36-8-1), three-year presumption (§ 36-8-2(a)(6), (18)), report and notice (§ 36-8-7), interest and penalties (§ 36-8-24); § 37-6A-2(g) six-month hold; rows: `edu-deposit-escheat-wv`
- `deposit-installments` (9 states): Confirmed absent (f-deposit-installments, -nc, f-deposit-installments-ev, -nc; `deposit-installments`); rows: `edu-no-deposit-installments-wv`
- `deposit-last-month-rent` (13 states): Present: lead row; rows: `edu-deposit-last-month-rent-wv`
- `disability-accommodation` (13 states): Present: § 16B-18-5(f)(3), (7), (9), (10); § 16B-18-3(g), (p); rows: `edu-disability-accommodation-wv`
- `disaster-duties` (2 states): Present: § 46A-6J-3 caps prices of month-to-month rental housing during a declared state of emergency (10 percent rule); no other post-disaster landlord duty (a-disaster); rows: `edu-disaster-rent-limits-wv`.
- `disturbance` (36 states): Present: shared clause; rows: `no-disturbance`.
- `double-letting` (7 states): Confirmed absent: no double-letting statute; § 37-6-30(a)(1) delivery and § 37-6-8 reletting priority noted; rows: `edu-no-double-letting-wv` (a-double-let-r2, -nc, a-double-let-ev, -nc; the `double-let` failed its positive and is superseded).
- `drug-free-housing-addendum` (4 states): Confirmed absent: `b-drug-free`, `-nc`, `b-drug-free-ev`; rows: `edu-no-drug-free-addendum-wv`
- `due-at-signing` (36 states): Present: no statute engaged (prepaid rent is not a deposit, § 37-6A-1(14)); rows: shared `due-at-signing` (tagged)
- `dv-confidentiality` (11 states): Confirmed absent: no landlord confidentiality duty and no landlord-tenant DV statute (d-dv-tenancy, dv); Address Confidentiality Program binds agencies and courts only (§ 48-28A-105); rows: `edu-dv-confidentiality-wv`
- `dv-eviction-protection` (10 states): Confirmed absent: no WV statute bars eviction or refusal because of domestic violence; protective orders may grant possession of the shared residence (§ 48-27-503(1)-(2)), effect on lease unsettled; rows: `edu-no-dv-eviction-protection-wv` (c-dv, c-dv-nc, c-dv-ev, c-dv-ev-nc)
- `dv-lease-termination` (34 states): Confirmed absent: no early-termination or lock-change right for victims; rows: `edu-no-dv-lease-termination-wv` (c-dv, c-dv-nc, c-dv-ev, c-dv-ev-nc, c-dv-lock, c-dv-lock-nc)
- `dv-lockchange` (8 states): Confirmed absent: `b-dv-lock`, `security-devices`, `security-devices-nc`, `dv`; protective orders may grant possession of the shared residence (§ 48-27-503(1)-(2)); rows: `edu-no-dv-lockchange-wv`
- `dv-qualifying-documents` (2 states): Confirmed absent: no WV statute gives tenants domestic-violence rights, so no qualifying-documents list; protective and personal safety orders explained; rows: `edu-dv-qualifying-documents-wv` (dv, dv-nc, e-dv-tenancy, e-dv-tenancy-nc, e-lock-change, e-lock-change-nc, e-lock-ev, e-lock-ev-nc, security-devices).
- `early-termination` (36 states): Present: shared `early-termination-ks` (tagged); WV statutory rights in `edu-statutory-early-termination-wv`; rows: `early-termination-ks`
- `electric-submetering-disclosure` (2 states): Answered elsewhere: `edu-utility-apportionment-wv`, `utility-billing-wv` (§ 37-6A-1(17); c-utility-resale)
- `electronic-signatures` (36 states): Present: shared clause (tagged) plus education row on art. 39A (agreement needed, unwaivable refusal right, retention, § 39A-2-11 eviction-notice exclusion, consumer consent); rows: `electronic-signatures` (lead), `edu-electronic-records-wv`
- `emergency-assistance-right` (31 states): Confirmed absent: no police-call protection or nuisance-call penalty (police-call, d-police-ev); rows: `edu-no-emergency-assistance-rule-wv`
- `entire-agreement` (36 states): Present: shared clause, lead tags; no conflict; rows: `entire-agreement` (lead)
- `ev-charging` (33 states): Confirmed absent (f-ev-charging, -nc; `ev-charging`); rows: `edu-no-ev-charging-right-wv`
- `ev-charging-end-of-tenancy` (2 states): Answered elsewhere: Colorado/Illinois program, no West Virginia counterpart; rows: `edu-no-ev-charging-right-wv`
- `ev-charging-requirements` (2 states): Answered elsewhere: same; rows: `edu-no-ev-charging-right-wv`
- `ev-charging-shared-area` (2 states): Answered elsewhere: same; rows: `edu-no-ev-charging-right-wv`
- `eviction-hardship-stay` (6 states): Confirmed absent: `b-hardship-stay`, `-nc`, `b-hardship-ev`, `-nc`; the vacate time weighs furnished/unfurnished and relative harm (§ 55-3A-3(f)); appeal stay (§ 50-5-12(a); Rules 17, 18A) against § 55-3A-3(g); rows: `edu-eviction-hardship-stay-wv`
- `eviction-process` (31 states): Present: summary relief arts. 55-3A, 50-2, 50-4, 50-5, Magistrate Court Civil Rules 4, 6A, 10, 17, 18, 18A and forms MLTPTWR, MLTSMWO, MLTAWWO; rule 39 screen done (duties: verified petition, immediate service, proof of service, default affidavit; no prohibition on landlord conduct beyond the court process; only immunity § 55-3A-3(h)); rows: `edu-eviction-process-wv`
- `eviction-record-sealing` (32 states): Confirmed absent: `sealing`, `b-sealing-ev`; court rules on record access not reviewed; rows: `edu-no-eviction-record-sealing-wv`
- `exculpatory-clauses` (6 states): Confirmed absent: no statute voids or permits liability waivers (exculpation, d-exculp-lease-r2); Const. art. III, § 17 noted, case law not searched; -ks-oh-ca clause variants explained; rows: `edu-exculpatory-clauses-wv`
- `existing-condition` (36 states): Present: shared clause tagged by the lead, with the `edu-no-condition-checklist-wv`; rows: `existing-condition`.
- `expedited-criminal-eviction` (18 states): Confirmed absent: `b-expedited`, `-nc`, `criminal-activity`, `-nc`; summary relief is already 5-10 judicial days; drug forfeiture of real property with an innocent-owner exception (§ 60A-7-703(a)(8)); rows: `edu-no-expedited-criminal-eviction-wv`
- `extended-absence-notice` (12 states): Confirmed absent: no notice-of-absence or entry-during-absence statute; rows: `edu-no-extended-absence-rule-wv` (e-extended-absence, e-extended-absence-nc, e-absence-ev, e-absence-ev-nc); proposal E-2 (tag `extended-absence-notice-ks`).
- `fair-housing` (33 states): Present: art. 16B-18 (classes, narrow exemptions, interference § 16B-18-16, remedies and penalties); rows: `edu-fair-housing-wv`
- `fee-in-lieu-of-deposit` (7 states): Confirmed absent (f-fee-in-lieu, -nc, f-fee-in-lieu-ev, -nc); rows: `edu-no-fee-in-lieu-of-deposit-wv`
- `fee-transparency` (16 states): Confirmed absent: no all-in pricing or fee-disclosure statute; plain-language rule § 46A-6-109 and written nonrefundable-fee agreement § 37-6A-1(14) noted; rows: `edu-no-fee-transparency-wv` (c-fee-transparency, c-fee-transparency-nc)
- `fees-as-rent` (33 states): Present: § 37-6A-1(11) defines rent for the deposit article only; no general definition (f-rent-definition); rows: `edu-fees-as-rent-wv`
- `fire-code-standard` (1 state): Present: State Fire Code statewide (§ 15A-11-3), State Building Code where adopted (§ 15A-11-5), local codes and health rules; rows: `edu-applicable-codes-wv`.
- `fire-safety-grilling` (36 states): Present: shared clause; no statute on residential grills (grill battery: 4 hits, none on point); State Fire Code not read; rows: `fire-safety-grilling`.
- `fire-sprinkler-duty` (2 states): Confirmed absent: no retrofit duty; sprinklers may replace smoke detectors in one- and two-family dwellings; rows: `edu-no-sprinkler-duty-wv` (e-sprinkler-r2, e-sprinkler-r2-nc).
- `firearms` (18 states): Present: constitutional right, owner/lessee power to prohibit carrying, parking-lot vehicle rule (reach to tenants unsettled), discharge near dwellings, municipal preemption; rows: `edu-firearms-wv` (firearms, e-firearms-lease).
- `flood-disclosure` (26 states): Confirmed absent: rows: `edu-no-flood-disclosure-wv` (flood, c-flood-ev, c-flood-ev-nc)
- `for-cause-eviction` (36 states): Confirmed absent (rule 41 verdict row): no just-cause rule for dwellings (`just-cause`, `-nc`, `b-just-cause-ev`, `-nc`); situational limits: fair housing (§§ 16B-18-5, -16), retaliatory eviction named in § 55-3A-3(g) and the answer form (no dwelling retaliation statute: `retaliation`, `-nc`), lot rentals out of scope (§ 37-15-6); rows: `edu-no-for-cause-eviction-wv`
- `foreclosure` (23 states): Present: § 38-1-16 (purchaser at trustee's sale: 90 days or 30 days before lease end, whichever shorter, for unrecorded or later-recorded written leases; 30 days for month-to-month or other tenancies; contents and service of notice); rows: `edu-foreclosure-tenants-wv` (foreclosure-tenant, c-foreclosure-tenant)
- `foreclosure-disclosure` (6 states): Confirmed absent: rows: `edu-no-foreclosure-disclosure-wv` (c-foreclosure-disc, c-foreclosure-disc-nc, c-foreclosure-tenant)
- `foreign-ownership` (15 states): Present: art. 37-3A (2025) bars prohibited foreign-party-controlled businesses from owning any interest in real estate; reach to leases unsettled; rows: `edu-foreign-ownership-wv`
- `forfeiture-redemption` (1 state): Answered elsewhere: §§ 37-6-20 to -23, -26 (tender before trial; twelve months after execution); rows: `edu-redemption-wv`
- `frozen-standard-incorporation` (1 state): Answered elsewhere: § 15A-10-12 uses the 'current edition' of the State Fire Code and § 16B-18-5(f)(4) cites ANSI A117.1 without an edition; rows: `edu-applicable-codes-wv` (notes). See Findings on the fair housing 'date of enactment'.
- `governing-law` (36 states): Present: shared clause, lead tags; no conflict; rows: `governing-law` (lead)
- `government-fee-reimbursement` (2 states): Answered elsewhere: declined a reimbursement clause and wrote `edu-government-fees-wv` (substance § 8-13-13; proposals-F item 3).
- `guarantor-renewal` (2 states): Present: guaranty in writing (§ 55-1-1(d)); demand-to-sue discharge (§§ 45-1-1, -2); judgment not binding on an unserved guarantor (§ 45-1-3); no renewal rule (`b-guaranty-renewal`, `-nc`, `b-guaranty-ev`); WVCCPA cosigner notice reaches leases of goods only; rows: `edu-guaranty-wv`
- `guest-policy` (36 states): Present: shared clause; rows: `guest-policy`.
- `guest-policy-day-limit` (35 states): Present: shared clause; rows: `guest-policy-day-limit`.
- `guest-rights` (4 states): Confirmed absent: no guest-rights statute; a tenant-authorized guest is not a squatter; rows: `edu-no-guest-rights-rule-wv` (guest, guest-nc, e-guest-ev, e-guest-ev-nc).
- `habitability-materiality` (1 state): Answered elsewhere: § 37-6-30 has no materiality carve-out; rows: `edu-landlord-repair-duties-wv` (notes).
- `habitability-modifiable` (2 states): Answered elsewhere: no statute lets a lease modify or reassign § 37-6-30 duties, none forbids it; § 37-6-30(b) only makes a greater lease duty control; rows: `edu-tenant-repair-agreement-wv` (a-tenant-repair-agree-r3, habitability-waiver).
- `habitability-presumption` (1 state): Answered elsewhere: no presumption; tenant's § 55-3A-3(b) defense; rows: `edu-tenant-repair-remedies-wv`.
- `habitability-waiver` (2 states): Answered elsewhere: no waiver statute either way (habitability-waiver, -nc); case law not searched; rows: `edu-tenant-repair-agreement-wv`.
- `health-district-rental-rules` (1 state): Answered elsewhere: local boards of health administer 'the sanitation of housing' and adopt local rules with county approval (§ 16-2-11); rows: `edu-applicable-codes-wv` (a-health-rental-r2).
- `heating` (7 states): Present: § 37-6-30(a)(7); rows: `edu-heating-wv` (heat, heat-nc).
- `hoa` (10 states): Present: UCIOA (ch. 36B) amendment, fines, lessee-voting and conversion rules; no leasing fee or rent-collection provision (d-hoa-lease); rows: `edu-hoa-wv`
- `hoa-compliance` (36 states): Present: shared `hoa-compliance` clause (tagged); association may levy reasonable fines after notice and an opportunity to be heard (§ 36B-3-102(a)(11)); lessee voting only if the declaration so requires (§ 36B-3-110(c)); no extra row needed
- `holding-deposit` (13 states): Confirmed absent (f-holding-deposit, -nc); § 37-6A-1(2), (12), (14) classify the money; rows: `edu-holding-deposit-wv`
- `holdover` (36 states): Present: shared `holdover-ca` (tagged) plus WV procedure: no notice at the end of a fixed term (§ 37-6-5), unlawful detainer (§§ 55-3-1 to -3), holdover not a listed summary-relief ground (Claude's reading), not a squatter (§ 55-3C-2(a)); rows: `holdover-ca`, `edu-holdover-wv`
- `holdover-rate` (24 states): Confirmed absent: `b-holdover-rate`, `-nc`, `b-holdover-ev`, `-nc` (the `holdover-double` failed and is not cited); premium-rate clause declined; rows: `edu-holdover-rate-wv`
- `homestead-waiver` (9 states): Present: waiver of personal-property exemptions void (§ 38-8-15), homestead waiver void with one security-interest exception (§ 38-9-6), amounts (§ 38-8-1); distress is by the sheriff or a deputy sheriff under a magistrate's warrant (§§ 37-6-12, 50-1-17); § 38-4-12 refers to property 'exempt from distress and levy', so the row reads the exemptions as reaching distress (Claude's reading); rows: `edu-exemption-waiver-wv`
- `immigration-status` (29 states): Confirmed absent: no status-inquiry rule (d-immigration-rn); national origin and ancestry protected (§ 16B-18-5); rows: `edu-immigration-status-wv`
- `infirmity-termination` (8 states): Confirmed absent: `b-infirmity`, `-nc`, `medical-termination`, `elder-tenant`; rows: `edu-no-infirmity-termination-wv`
- `informal-dispute-resolution` (2 states): Present: Revised Uniform Arbitration Act (art. 55-10) makes arbitration agreements enforceable; no landlord-tenant ADR statute (d-arbitration); library declines; rows: `edu-dispute-resolution-wv`
- `inspection-rights` (35 states): Present: shared clause; no WV entry statute limits it; rows: `inspection-rights`, `edu-no-entry-statute-wv`.
- `joint-liability` (36 states): Present: shared clause; rows: `joint-liability`.
- `jury-waiver` (8 states): Present: Const. art. III, § 13; § 50-5-8; Magistrate Rule 6A(b)(2) 5-day election; no lease jury-waiver statute (jury-waiver, d-jury-lease); library declines; rows: `edu-jury-waiver-wv`
- `keys` (36 states): Present: shared clause; slice A's `edu-no-security-device-rule-wv` covers locks; rows: `keys`.
- `knowing-use-penalty` (7 states): Present: § 37-6A-4 damages and fees when a landlord sues on a deposit waiver; § 46A-5-101 $1,000 per violation for unauthorized charges if debt collection rules reach rent; no general knowing-use penalty (d-knowing-use); rows: `edu-knowing-use-penalty-wv`
- `landlord-breach-remedy` (1 state): Answered elsewhere: no tenant lien or general landlord-breach damages statute (Texas-specific); rows: `edu-tenant-repair-remedies-wv`.
- `landlord-entry` (36 states): Confirmed absent: no entry-notice statute; only abandonment entry (§ 37-6-6) and cable-operator entry (§§ 24D-2-6, -7); rows: `edu-no-entry-statute-wv`, shared `landlords-access` (entry, entry-nc, e-entry, e-entry-nc, e-entry-ev, e-entry-ev-nc).
- `landlord-lien` (24 states): Present: distress for rent within one year by officer under warrant (§§ 37-6-12 to -18), attachment for rent, exemptions; no separate landlord's lien (d-lien-r2, d-distress-exempt); rows: `edu-landlord-lien-wv`
- `landlord-maintenance` (36 states): Present: shared `landlord-maintenance` (tagged) plus `edu-landlord-repair-duties-wv` (§ 37-6-30(a)-(d)).
- `landlord-registration` (10 states): Confirmed absent: no statewide registration (d-registration); municipal uninhabitable and vacant building registries (§§ 8-12-16a, 8-12-16c) flagged; § 8-1-5a(k) bar on municipalities limiting rentals (reach to rental-only registration unsettled); rows: `edu-no-landlord-registration-wv`
- `landlord-remedies-termination` (1 state): Answered elsewhere: possession and rent judgment together (§ 50-4-5; § 55-3A-3(e)), use and occupation (§ 37-6-9), detention damages (§ 55-3-2); rows: `edu-eviction-process-wv`, `edu-holdover-wv`, `default-by-tenant-wv`
- `landlord-self-cure` (30 states): Confirmed absent: `b-self-cure`, `-nc`, `b-self-cure-ev`, `-nc`, `b-self-cure-r2`; rows: `edu-no-landlord-self-cure-wv`
- `landscaping-irrigation` (33 states): Present: shared clause; no state statute on tenant yard care (the `lawn` battery failed its synthetic positive and was not rerun; municipal weed ordinances not read); rows: `landscaping-irrigation`.
- `late-fee` (36 states): Present: lead writes `edu-late-fee-wv`; shared `late-fee` tagged. Grace periods: `edu-no-rent-grace-period-wv` (filed under `rent-payment`).
- `late-fee-limit` (1 state): Answered elsewhere: Minnesota's cap; `edu-late-fee-wv` (lead).
- `lead-based-paint` (36 states): Present: shared `lead-based-paint` clause (federal; lead tags) plus WV abatement licensing; rows: `edu-lead-abatement-wv` (lead)
- `lead-safe-certification` (2 states): Answered elsewhere: `edu-lead-abatement-wv` (no WV lead-safe certificate; art. 16-35 licenses abatement)
- `lease-completeness` (29 states): Confirmed absent: no blank-space rule (blank-spaces); copies of the signed lease are slice C's `edu-lease-copy-wv` (§ 30-40-26(g)-(h) licensees; § 37-15-3 factory-built home sites); rows: `edu-no-lease-completeness-rule-wv`
- `lease-content-requirements` (2 states): Confirmed absent: no required-contents list (d-lease-contents); rows: `edu-no-lease-content-list-wv`
- `lease-copy` (18 states): Confirmed absent for landlords; licensee copy duties § 30-40-26(g)-(h); rows: `edu-lease-copy-wv` (copy-lease, c-copy-ev, c-copy-ev-nc)
- `lease-term-limitation` (1 state): Answered elsewhere: no maximum residential term (d-lease-max); terms over five years need a deed (§ 36-1-1) and can be recorded (§ 40-1-8); rows: `edu-statute-of-frauds-wv`
- `lease-type-size` (1 state): Answered elsewhere: "type of an easily readable size", no point minimum (§ 46A-6-109(a)(2); d-type-size); rows: `edu-plain-language-wv`
- `lockout-for-rent-delinquency` (1 state): Answered elsewhere: no statutory lockout right in WV; rows: `edu-self-help-eviction-wv`
- `maintenance-duty-shift` (1 state): Answered elsewhere: no separate-writing rule (a-tenant-repair-agree-r3 includes 'separate writing'); rows: `edu-tenant-repair-agreement-wv`.
- `meth-disclosure` (30 states): Present: § 60A-11-5 (keep unoccupied until certified remediation), § 60A-11-3(a)(6) (disclosure to potential occupants set by legislative rule, not read); rows: `edu-meth-lab-wv` (meth, c-meth-disc); proposal C-1. Lead decision: no disclosure clause is offered, because the disclosure content and form are set by a Department of Health legislative rule that was not read; `edu-meth-lab-wv` stays as the answer (proposal C-1 declined).
- `military-air-zone-disclosure` (6 states): Confirmed absent: rows: `edu-no-military-zone-disclosure-wv` (c-military)
- `minor-tenant-filing` (6 states): Present: no bar on naming minors (`b-minor`, `-nc`); default judgment against an infant needs a guardian ad litem or similar (§ 50-4-10(a)(2)(A); Rule 10(d)); rows: `edu-minor-defendants-wv`
- `mold-disclosure` (32 states): Confirmed absent: rows: `edu-no-mold-disclosure-wv` (mold, c-mold-ev, c-mold-ev-nc)
- `municipal-utility-lien` (9 states): Present: owner protection for city waterworks, sewer, combined systems and PSDs unless the owner contracted; no tenant exception for art. 16-13 sewerage/stormwater works, art. 8-16 works and private/HOA utilities; garbage fees no lien; rows: `edu-utility-liens-wv` (utility-liens, e-utility-lien).
- `nonpayment-notice` (22 states): Confirmed absent: `nonpayment-notice`, `-nc`, `b-nonpayment-ev`, `-nc`; rows: `edu-no-nonpayment-notice-wv`
- `nonrefundable-deposit-notice` (7 states): Present: lead clause; rows: `nonrefundable-fees-wv`
- `nonrefundable-deposit-separate-notice` (1 state): Answered elsewhere: West Virginia's rule is an express written agreement, not a separate notice (§ 37-6A-1(14)); rows: `nonrefundable-fees-wv`
- `nonresident-owner-agent` (6 states): Present: § 56-3-33(a)(6) (Secretary of State as agent for circuit-court process); § 37-6A-1(5); no agent requirement (f-nonresident-landlord, -nc, -ev, -ev-nc); rows: `edu-nonresident-owner-agent-wv`
- `notice-delivery-methods` (33 states): Present: statute-by-statute methods, § 39A-2-11 paper-only default and eviction notices, art. 46A-6I redelivery; rows: `edu-notice-delivery-wv`
- `notice-service-fee` (2 states): Answered elsewhere: no statute authorizes a notice fee (f-notice-fee, -nc, -ev, -ev-nc); rows: `edu-collection-fee-wv`
- `notice-to-quit-waiver` (1 state): Answered elsewhere: § 37-6-5 lets a 'special agreement' fix another notice period or none; rows: `edu-termination-notice-wv`, which now says the library offers the optional `termination-notice-wv` clause and declines a no-notice term
- `notices` (36 states): Present: shared clause, lead tags; its deferral to statutory methods fits West Virginia; rows: `notices` (lead), `edu-notice-delivery-wv`
- `nuisance` (20 states): Present: §§ 61-9-1 to -6 (lewdness; owner/lessee enjoined; one-year closing; innocent-owner release), 60-6-16, -17 (alcohol), 61-13-4(b) (court-ordered eviction for criminal enterprise), 60A-11-5 (drug lab vacancy); rows: `edu-nuisance-wv`
- `optional-lease-terms` (1 state): Present: rule 50 inventory of the lease-decides phrases (§§ 37-6A-1(14), (17), 37-6A-2(b)(1), (5), 37-6-5, 37-6-28, 37-6-29, 37-6-30(b)); rows: `edu-optional-lease-terms-wv`
- `other-landlord-facilities` (1 state): Answered elsewhere: § 37-6-30(a)(3), (5), (6) are WV's facilities list; rows: `edu-landlord-repair-duties-wv`.
- `owner-identity-disclosure` (35 states): Confirmed absent: no disclosure duty (d-owner-disclosure-rn; owner-disclosure battery failed and is not cited); § 37-6A-1(5) undisclosed manager is the landlord; § 46A-2-127(c) reading; rows: `edu-owner-identity-wv`
- `parking` (36 states): Present: no statute engaged; rows: shared `parking-ks-oh-ca` (tagged)
- `parking-rules-notice` (1 state): Answered elsewhere: Texas parking-rule notice; West Virginia has no private-lot parking or towing-sign statute (f-towing-sign-r2, f-parking-rules: 1 hit, state-owned Charleston lots); rows: `edu-towing-wv`
- `parking-vehicle-rules` (35 states): Present: rows: shared `parking-vehicle-rules` (tagged), `edu-towing-wv`
- `part5-nonwaivable` (1 state): Answered elsewhere: no WV non-waiver clause for § 37-6-30 (contrast § 37-6A-4 for deposits, § 37-6-11(b)(4) for death terminations); rows: `edu-tenant-repair-agreement-wv`.
- `periodic-services-entry` (4 states): Answered elsewhere: no entry statute, so no services-entry rule; rows: `edu-no-entry-statute-wv`.
- `permitted-occupants` (36 states): Present: shared clause; occupancy limits preserved by W. Va. Code § 16B-18-8(b)(1); rows: `permitted-occupants`, `edu-children-occupancy-wv`.
- `pet-fees` (16 states): Present: lead row; rows: `edu-pet-fees-wv`
- `pet-insurance-requirement` (36 states): Present: no statute engaged (f-pet: 2 hits, §§ 16B-18-5, 37-6A-1); no fee or pet terms for assistance animals (§ 16B-18-5(f)(10)(D)), which the shared clause already exempts; rows: shared `pet-insurance-requirement` (tagged)
- `pet-policy` (36 states): Present: f-pet, -nc (19 hits: animal feed, dog, wildlife, stalking and professional-licensing sections; none restricts rental pet rules); rows: shared `pet-policy` (tagged)
- `plain-language` (15 states): Present: § 46A-6-109 expressly covers residential rental agreements (REQUIRED); rows: `edu-plain-language-wv`
- `plain-language-consumer-statement` (1 state): Answered elsewhere: no Pennsylvania-style statement of waived rights; § 46A-6-109 explained; rows: `edu-plain-language-wv`
- `pool-safety` (7 states): Confirmed absent (statute): no pool barrier or notice statute; health secretary's pool design rules (§ 16-1-4(a)(3)) not read; rows: `edu-pool-safety-wv` (c-pool)
- `portable-solar` (5 states): Confirmed absent: no tenant right; § 36-4-19 voids only housing-association restrictions on affixed systems; rows: `edu-portable-solar-wv` (solar, e-solar-r2).
- `portfolio-thresholds` (4 states): Present: no portfolio threshold in tenancy statutes; building-type rules and fair housing familial-status exemptions (§ 16B-18-4); rows: `edu-portfolio-thresholds-wv` (a-portfolio, -nc).
- `possession-delay` (36 states): Present: shared `possession-delay` (tagged); rows: `possession-delay`
- `post-eviction-property` (25 states): Present: § 55-3A-3(h)-(i) (three options, 30 days, $300 rule, no liability), deposit may pay removal and storage (§ 37-6A-2(b)(4)); no animal rule (`b-eviction-animals`, `-nc`, `-ev`); (h) does not reach unlawful detainer judgments (Claude's reading); rows: `edu-post-eviction-property-wv` (exact id requested)
- `prohibited-acts-renter` (2 states): Answered elsewhere: no renter-specific crime statute (lodging fraud, W. Va. Code § 61-3-40, reaches hotels, inns, lodging and boarding houses only; squatter damage, § 55-3C-4); civil waste and damage in `edu-tenant-statutory-duties-wv`, conduct in shared `no-disturbance` (e-prohibited-acts: 13 hits, none on tenants).
- `prohibited-lease-terms` (31 states): Present: rule 47 screen (void, penalized, case law not searched) across chs. 37, 37-6A, 38, 39A, 46A, 16B-18 and the Constitution (d-prohibited-terms); rows: `edu-prohibited-lease-terms-wv`
- `promises-to-repair` (1 state): Answered elsewhere: no written-promise rule (Wisconsin's is administrative code); WV counts facilities promised 'by written or oral agreement' (§ 37-6-30(a)(5)) and makes a greater lease duty control (§ 37-6-30(b)); rows: `edu-landlord-repair-duties-wv`.
- `property-tax-rent-disclosure` (1 state): Present: § 11-25-5 (landlord must sign a gross-rent statement on request of a senior property-tax-relief claimant; misdemeanor, fine up to $50); no general property-tax share disclosure; rows: `edu-senior-rent-statement-wv` (c-proptax-rent)
- `protected-class-inquiry-ban` (9 states): Present (as an advertising and statement rule): § 16B-18-5(c); no separate housing application-form rule (the inquiry ban in § 16B-17-9(2)(A) is employment only); rows: `edu-protected-class-inquiry-wv` (c-inquiry, c-inquiry-nc)
- `quiet-possession` (29 states): Present: § 36-4-14 gives an express covenant of quiet enjoyment a fixed meaning; no implied covenant by statute; rows: `edu-quiet-possession-wv` (a-quiet, -nc); proposal A-3 (decline a covenant clause).
- `radon-disclosure` (35 states): Confirmed absent: rows: `edu-no-radon-disclosure-wv` (c-radon, radon)
- `redemption` (2 states): Present: §§ 37-6-20 to -23, -26; reach into summary relief via § 55-3A-2 is case law; rows: `edu-redemption-wv`
- `religious-cultural-display` (1 state): Answered elsewhere: no display statute; rows: `edu-no-display-rights-rule-wv` (e-religious).
- `rent-concession` (6 states): Confirmed absent (f-concession, -nc); rows: `edu-no-rent-concession-rule-wv`
- `rent-control` (31 states): Present: no cap and no express preemption (f-rent-control, -nc; `rent-control`); § 8-1-5a(k) limits municipal rental regulation (reach unsettled); rows: `edu-rent-control-wv`
- `rent-demand-bar` (1 state): Answered elsewhere: no bar on demanding rent for uninhabitable units; the only statutory link runs the other way (§ 37-6-30(c), no repairs owed while the tenant is in arrears); rows: `edu-tenant-repair-remedies-wv`. Slice D's `condemned-premises-rent-bar` covers the condemned-unit question (lead battery `condemned`).
- `rent-escalation` (4 states): Confirmed absent (f-rent-midterm; f-rent-increase, -nc); rows: `edu-rent-escalation-wv`, and the optional `rent-increase-midterm-wv` (30 days' written notice; tenant may leave without a fee instead)
- `rent-increase-notice` (29 states): Confirmed absent (f-rent-increase, -nc; `rent-increase`); only § 37-15-7 (lot rentals, out of scope); § 37-6-5 used as the floor; rows: `edu-rent-increase-notice-wv` (mentions the optional `rent-increase-midterm-wv`)
- `rent-into-court-counterclaim` (5 states): Present: §§ 55-3A-3(b), (d), (e), 37-6-30(b)-(c) (the arrears excuse yields to a greater lease duty, and the tagged `landlord-maintenance` clause has none), 50-4-9, 37-6-22, 50-5-12(a) (`b-rent-into-court`, `-nc`); rows: `edu-rent-into-court-wv`
- `rent-payment` (36 states): Present: shared `rent-payment` (tagged); rows: `edu-no-rent-grace-period-wv` (f-grace, -nc, f-grace-ev, -nc, control f-grace-real). Payment methods are slice E's `edu-no-payment-method-rule-wv` (topic `acceptable-payment-methods`), so I wrote no payment-method row.
- `rent-receipts` (22 states): Confirmed absent (f-rent-receipt, -nc; `rent-receipt`); § 46A-2-114 reaches only consumer leases of goods (§ 46A-1-102(14)(a)); one exception added after the independent check: the landlord's signed gross-rent statement for a senior homestead-relief claimant (§ 11-25-5); rows: `edu-no-rent-receipt-rule-wv`
- `rent-reporting` (5 states): Confirmed absent; rows: `edu-no-rent-reporting-rule-wv` (a-rent-reporting, -nc, a-rent-reporting-ev, -nc).
- `rent-tax` (16 states): Present: hotel occupancy tax art. 7-18 (excludes 30-day-plus and month-to-month rentals of apartments and homes, § 7-18-3(e)(2)); § 8-13-3; sales tax rules not searched (f-rent-tax; `rent-tax`); rows: `edu-rent-tax-wv`
- `rental-application-accuracy` (36 states): Present: shared `rental-application-accuracy` (tagged); rows: `rental-application-accuracy`
- `rental-inspection` (11 states): Confirmed absent: no state rental inspection program (d-inspection, d-inspection-ev); county and municipal code powers, § 8-12-16(e) warrant/notice rules and § 8-1-5a(k) uniformity proviso explained; rows: `edu-rental-inspection-wv`
- `renters-insurance-rules` (11 states): Confirmed absent: rows: `edu-no-renters-insurance-rule-wv` (renters-insurance, e-renters-insurance-ev, e-renters-insurance-ev-nc).
- `repair-notice` (4 states): Answered elsewhere: no statutory repair-notice procedure or deadline (a-repair-timeline, -nc); rows: `edu-tenant-repair-remedies-wv`, `edu-landlord-repair-duties-wv`.
- `required-disclosures` (4 states): Present (summary): rows: `edu-required-disclosures-wv` (c-landlord-duty-sweep, c-prospective, c-owner-id, c-owner-id-nc, c-fmt-typesize, c-fmt-typesize-nc)
- `required-fees` (5 states): Confirmed absent (listing rule; f-required-fees, -nc); the listed-fee rule exists only for factory-built home sites (§ 37-15-5(a)(1)); rows: `edu-required-fees-wv`
- `residential-use-only` (36 states): Present: shared clause; rows: `residential-use-only`.
- `retaliation` (36 states): Present: no general statute; § 55-3A-3(g) and § 16B-18-16 only; § 37-15-7 is manufactured-home lots (out of scope); rows: `edu-retaliation-wv` (retaliation, retaliation-nc).
- `returned-payments` (36 states): Present: § 61-3-39e ($25 fee), § 55-16-1 (civil remedy), §§ 61-3-39, -39a, -39g, -39h (criminal); rows: `edu-returned-check-fee-wv`, lead clause `returned-payments-wv` (overrides `returned-payments`: fee bracket not more than $25, only for a check, draft or order dishonored for insufficient funds or credit, none after a warrant complaint; certified-funds replacement for any failed payment; no fee for failed electronic payments)
- `rules-regulations` (19 states): Confirmed absent: for ordinary residential rentals; only factory-built home communities have a rules statute (§ 37-15-3a, out of scope); plain-language rule § 46A-6-109 applies; rows: `edu-rules-regulations-wv` (e-rules, e-rules-nc).
- `sale-or-management-change` (26 states): Present: §§ 37-6-1 to -3, 37-6A-2(e), 37-6A-1(5), 36B-4-112; trustee's sale points to `edu-foreclosure-tenants-wv` (slice C); no seller-release or manager-change rule (d-sale-notice, d-mgmt-change-r2, d-mgmt-ev); rows: `edu-sale-or-management-change-wv`
- `scope` (27 states): Present: rows: `edu-scope-wv` (c-urlta, c-urlta-ev)
- `security-deposit-cap` (30 states): Present: lead row; rows: `edu-no-security-deposit-cap-wv`
- `security-deposit-holding` (16 states): Present: lead row; rows: `edu-security-deposit-holding-wv`
- `security-deposit-interest` (30 states): Present: lead row; rows: `edu-no-deposit-interest-wv`
- `security-deposit-nonwaiver` (2 states): Answered elsewhere: § 37-6A-4; rows: `edu-security-deposit-penalty-wv`
- `security-deposit-on-sale` (21 states): Answered elsewhere: `edu-deposit-on-sale-wv` (§ 37-6A-2(e)-(f))
- `security-deposit-penalty` (20 states): Present: lead row; rows: `edu-security-deposit-penalty-wv`
- `security-deposit-return` (36 states): Present: lead clause; rows: `security-deposit-return-wv`
- `security-deposit-use` (35 states): Present: lead clause; rows: `security-deposit-use-wv`
- `security-devices` (13 states): Confirmed absent; rows: `edu-no-security-device-rule-wv` (security-devices, -nc, a-locks-ev, -nc).
- `self-help-eviction` (31 states): Present: no express ban for dwellings (`self-help`, `-nc`, `b-lockout-r2`, `-nc`; only § 37-15-6(d), lots); court process, sheriff, distress only by the sheriff or a deputy sheriff (§ 50-1-17), forcible-entry suit (§ 55-3-1), utilities duty (§ 37-6-30(a)(7)); rows: `edu-self-help-eviction-wv`
- `service-animal-denial-penalty` (14 states): Present: no crime for refusing an assistance animal in a tenant's home; Fair Housing Act remedies and civil penalties; White Cane law § 5-15-8 misdemeanor ($50) for denying admittance to lodging places and places open to the public (reach to rooming houses and leasing offices unsettled); § 5-15-9 false representation (d-service-denial, d-service-penalty); rows: `edu-service-animal-denial-wv`
- `service-animal-misrepresentation` (23 states): Present: § 5-15-9 (public accommodations under § 5-15-4); no housing penalty (f-misrep-animal, f-misrep-animal-housing, -nc); rows: `edu-service-animal-misrepresentation-wv`
- `servicemember-rights` (30 states): Present: § 15-1F-11 (Guard on state active duty 30+ days gets SCRA protections), § 50-4-10(a)(2)(B), § 37-6-6(d)(2)(B); no state termination statute (`b-servicemember-lease-r2`, `-nc`, `servicemember`); rows: `edu-servicemember-rights-wv`
- `services-utilities-provided` (36 states): Present: shared `services-utilities-provided-ks-oh` (tagged); § 37-6-30(a)(7) in `edu-heating-wv`.
- `severability` (36 states): Present: shared clause, lead tags; no conflict; rows: `severability` (lead)
- `sex-offender-disclosure` (5 states): Confirmed absent: rows: `edu-no-sex-offender-disclosure-wv` (sex-offender, c-sexoff-landlord)
- `sex-offender-occupancy` (12 states): Present: residence limits only for certain supervised-release offenders; no landlord duty; rows: `edu-sex-offender-occupancy-wv` (sex-offender, e-sex-offender-residence).
- `shutdown-rent-protection` (5 states): Confirmed absent (f-shutdown, -nc, f-shutdown-ev, -nc); rows: `edu-no-shutdown-protection-wv`
- `smoking-policy` (36 states): Present: shared clause plus a WV row on the absence of a smoking statute and the medical cannabis act; rows: `smoking-policy`, `edu-smoking-cannabis-wv` (smoking, smoking-nc, smoking-r2, cannabis, e-cannabis-housing).
- `snow-removal` (32 states): Present: shared clause; no statute (snow, snow-nc); rows: `snow-removal`.
- `source-of-income` (30 states): Confirmed absent: not a § 16B-18-5 class; no state mandate or preemption statute found; rows: `edu-no-source-of-income-wv` (source-income, c-soi, c-soi-nc)
- `statute-of-frauds-lease-term` (14 states): Present: §§ 36-1-3, 55-1-1(f), 36-1-1, 40-1-8, 37-6-9; rows: `edu-statute-of-frauds-wv`
- `statutory-early-termination` (9 states): Present: death (§ 37-6-11(b)), casualty surrender (§ 37-6-28), eminent domain (§ 37-6-29), Guard SCRA extension (§ 15-1F-11); no DV or infirmity right (`b-dv-terminate`, `-nc`, `dv`, `b-infirmity`, `-nc`, `medical-termination`); rows: `edu-statutory-early-termination-wv`
- `statutory-forms` (31 states): Present: § 36-3-8 deed-of-lease form, § 37-6-17 attachment forms, court eviction forms; no lease or notice-to-quit form (d-lease-form); rows: `edu-statutory-forms-wv`
- `stigmatized-property` (21 states): Confirmed absent: rows: `edu-no-stigmatized-property-rule-wv` (stigmatized, c-stigma-ev)
- `storage-space` (36 states): Present: shared `storage-space-ks-oh-ca` (tagged); rows: `edu-self-storage-act-scope-wv` (art. 38-14 scope vs § 33-12-38(a)(7); f-storage)
- `stove-refrigerator` (1 state): Answered elsewhere: no stove or refrigerator mandate; appliances the landlord supplies must be maintained (a-appliance, -nc); rows: `edu-landlord-repair-duties-wv`.
- `sublet-assign` (36 states): Present: shared clause; consistent with W. Va. Code § 36-4-11 (written consent) and § 37-6A-2(f); rows: `no-sublet-assign`.
- `substandard-property-receivership` (4 states): Present: municipal and county unsafe-building ordinances, liens, municipal-court receivership (§ 8-12-16(g)), uninhabitable-property registration fee (§ 8-12-16a); no tenant receivership; rows: `edu-receivership-wv` (a-receivership, a-repair-deduct-r2).
- `surrender-end-of-term` (36 states): Present: shared `surrender-end-of-term` (tagged); its disposal sentence is hedged 'to the extent permitted by applicable law', which fits § 37-6-6's limited reach; rows: `surrender-end-of-term`
- `telecom-access` (8 states): Present: cable access for premises of 3+ households (art. 24D-2) and broadband antenna preemption (§ 31G-6-1(b), reach unsettled); rows: `edu-telecom-access-wv` (satellite).
- `tenancy-at-will` (4 states): Confirmed absent: `b-at-will`, `-nc`, `b-at-will-ev`, `-nc`; rows: `edu-tenancy-at-will-wv`
- `tenant-caused-damage` (35 states): Present: clause; rows: `tenant-caused-damage-wv`
- `tenant-confidential-information` (1 state): Present: no disclosure statute (d-tenant-confid, tenant-privacy), but data-breach notice duty (art. 46A-2A) applies to landlords holding personal information; rows: `edu-tenant-data-breach-wv`
- `tenant-death` (32 states): Present: § 37-6-11(b) (heir etc. may terminate; last day of the calendar month two months after notice; estate liable; nonwaivable; longer lease notice void; leases entered or renewed on or after July 1, 2012, follow for every tenancy per rule 37); rows: `edu-tenant-death-wv`
- `tenant-display-rights` (15 states): Confirmed absent: rows: `edu-no-display-rights-rule-wv` (flag, e-display-r2, e-religious).
- `tenant-forward-proceedings` (26 states): Present: shared `tenant-forward-proceedings-ca` tagged by the lead; related W. Va. Code § 37-6-4 (attornment to a stranger void without landlord consent or court order); rows: `tenant-forward-proceedings-ca`.
- `tenant-maintenance` (36 states): Present: shared clause; rows: `tenant-maintenance`, `edu-tenant-statutory-duties-wv`.
- `tenant-records` (1 state): Answered elsewhere: only deposit-deduction records (§ 37-6A-3: one year; inspect or copy within 72 hours of written request) (d-tenant-records); rows: `edu-security-deposit-holding-wv` (lead)
- `tenant-repair-agreement` (21 states): Present (absence of a delegation rule, plus §§ 36-4-12, -13); rows: `edu-tenant-repair-agreement-wv`.
- `tenant-repair-remedies` (21 states): Present: no self-help remedy statute; § 55-3A-3(b), (d), (g), § 37-6-28; rows: `edu-tenant-repair-remedies-wv` (a-repair-deduct-r2, -nc).
- `tenant-right-to-organize` (6 states): Confirmed absent: no organizing protection for residential tenancies (d-organize, retaliation); factory-built home sites only (§ 37-15-7); rows: `edu-tenant-organizing-wv`
- `tenant-rights-statement` (6 states): Confirmed absent: only factory-built home sites must carry the statute's text (§ 37-15-3(b)(3), out of scope); rows: `edu-no-tenant-rights-statement-wv` (c-rights-statement-r2, c-rights-ev, c-rights-ev-nc)
- `tenant-screening` (19 states): Present: Fair Housing Act limits and exemptions; no screening, criminal-history, source-of-income or Social Security number statute (screening, d-screening-rn, source-income, d-ssn, d-ssn-ev); rows: `edu-tenant-screening-wv`
- `tenant-security-cameras` (29 states): Confirmed absent: rows: `edu-no-tenant-camera-rule-wv` (e-cameras, e-cameras-nc, e-cameras-ev, e-cameras-ev-nc).
- `tenant-statutory-duties` (13 states): Present: waste, smoke-detector maintenance, fault exceptions, covenant-to-repair construction, damage as an eviction ground; rows: `edu-tenant-statutory-duties-wv` (tenant-duties, tenant-duties-nc, waste, waste-nc, e-tenant-duties-ev, e-tenant-duties-ev-nc).
- `tenants-property-insurance` (36 states): Present: shared `tenants-property-insurance-ks-oh-ca` (tagged); no statute bars requiring renter's insurance (renters-insurance, d-ins-claim-ev-r2); rows: `tenants-property-insurance-ks-oh-ca` (lead)
- `term-change-notice` (8 states): Confirmed absent (f-term-change, -nc); § 37-6-5 used as the floor; rows: `edu-term-change-notice-wv`
- `termination-notice` (34 states): Present: § 37-6-5 (year-to-year three months in writing; shorter periodic like notice or one full period; none for a fixed term; special agreement, used by the library's optional `termination-notice-wv`; no-notice term declined); rows: `edu-termination-notice-wv`
- `towing` (33 states): Present: art. 17-24A (abandoned vehicles: five days on private property without consent; 30-day certified notice before agency custody); § 24A-2-2a (registered carriers, wrecked or disabled vehicles); no private-lot towing procedure (f-towing-private, f-towing-sign-r2, f-towing-campus, f-abandoned-vehicle; `towing`); rows: `edu-towing-wv`
- `translation-duty` (5 states): Confirmed absent: no translation duty (d-translation); rows: `edu-no-translation-rule-wv`
- `truth-in-renting` (2 states): Answered elsewhere: `edu-no-tenant-rights-statement-wv` (no state statement; c-rights-statement-r2)
- `unauthorized-occupant-removal` (27 states): Present: Stop Squatters Act (eff. July 10, 2025) and § 37-6-31; rows: `edu-unauthorized-occupants-wv`.
- `unconscionability` (12 states): Confirmed absent (for ordinary leases of homes): unconscionability statutes cover consumer credit sales (including a lease-purchase with rent applied to the price, § 46A-1-102(42)), goods, rent-to-own and common interest communities (unconscionable); case law not searched; rows: `edu-unconscionability-wv`
- `unpaid-damages-interest` (17 states): Present: § 37-6-9, § 56-6-31, § 47-6-5 (f-unpaid-interest); rows: `edu-unpaid-damages-interest-wv`
- `utilities-paid-by-landlord` (36 states): Present: shared `utilities-paid-by-landlord` (tagged).
- `utilities-responsibility` (36 states): Answered elsewhere: the `utilities-responsibility-wv` (see proposal E-6 and `edu-utility-liens-wv`).
- `utility-apportionment` (4 states): Present: § 37-6A-1(17) 'If the rental agreement so provides'; rows: `edu-utility-apportionment-wv` (utility-billing). [WV rows with this key: `utility-billing-wv`, `edu-utility-apportionment-wv`]
- `utility-disclosure-attachment` (1 state): Answered elsewhere: no disclosure form statute; rows: `edu-utility-apportionment-wv`.
- `utility-disconnection-notice-authorization` (1 state): Answered elsewhere: no statute on utility notice to owners (a-utility-owner-notice, -nc); PSC rules not read; rows: `edu-utility-landlord-account-wv`.
- `utility-landlord-account` (9 states): Present (no tenant notice or pay-and-deduct statute; § 37-6-30(a)(7); § 37-6A-2(b)(3)); rows: `edu-utility-landlord-account-wv` (utility-exit, a-utility-acct-ev, a-utility-owner-notice).
- `utility-payment-evidence` (36 states): Present: shared clause; rows: `utility-payment-evidence`.
- `utility-service-continuity` (36 states): Present: shared clause; rows: `utility-service-continuity`.
- `utility-shutoff-statute` (7 states): Confirmed absent: no tenant-protective disconnection statute (`utility-exit`, `b-utility-tenant-shutoff-r2`); PSC rules not read; municipal water shutoff ten days after delinquency (§ 8-19-12a(a)(2)); rows: `edu-utility-shutoff-wv`
- `utility-submetering-disclosure` (19 states): Answered elsewhere: `edu-utility-apportionment-wv`, `utility-billing-wv` (optional clause, topic utility-apportionment; § 37-6A-1(17) 'If the rental agreement so provides'; no disclosure-form statute; PSC question flagged) (utility-billing, c-utility-resale)
- `waiver-by-acceptance` (20 states): Confirmed absent (statute; f-waiver-accept, -nc, f-waiver-accept-ev, -nc; only the lot-rent rule § 55-3B-4(a)(3)(A)); case law not searched; rows: `edu-no-waiver-by-acceptance-rule-wv`
- `water-heater-temperature` (4 states): Confirmed absent: rows: `edu-no-water-heater-rule-wv` (water-heater, e-water-heater-ev).
- `waterbed` (4 states): Confirmed absent: rows: `edu-no-waterbed-rule-wv` (waterbed, e-waterbed-ev).
- `window-guards` (2 states): Confirmed absent: no window guard rule; rows: slice A's `edu-no-window-guard-rule-wv` (c-window 0 hits; c-window-ev 9 hits, none on point)
- `written-notice-required` (1 state): Answered elsewhere: no statute lets a lease replace a statutory written notice; § 37-6-5 requires writing; rows: `edu-notice-delivery-wv`

### 18.2 Topics with no WV row (73)

- `balcony-inspection` (1 state): Not applicable: California program; no WV balcony or deck inspection statute (a-balcony: 2 hits, both condominium unit-boundary and plat sections).
- `bed-bug-cooperation` (1 state): Not applicable: California program; substance checked, the only bedbug statute is for hotels (W. Va. Code § 16-6-16; battery bedbug).
- `certificate-of-occupancy-disclosure` (1 state): Not applicable: New York program; substance checked, no WV certificate-of-occupancy disclosure or rental certificate (c-cert-occupancy: 3 hits, county impact fees, charter schools, UCIOA unit completion; inspection-cert)
- `cold-weather-vacate-notice` (1 state): Not applicable: Minnesota rule; substance checked, no WV vacating-in-cold-weather duty (e-cold-weather: 3 hits, none on point).
- `confirmed-absences-habitability` (1 state): Not applicable: a Nebraska summary row; WV absences are stated in `edu-tenant-repair-agreement-wv` and `edu-tenant-repair-remedies-wv`.
- `confirmed-absences-misc` (1 state): Not applicable: Nebraska summary row; each subject answered in its own West Virginia row
- `confirmed-absences-outside-title` (1 state): Not applicable: Nebraska summary row; each subject answered in its own West Virginia row
- `defective-drywall-disclosure` (1 state): Not applicable: Virginia program; no WV drywall statute (c-drywall 0 hits; c-drywall-ev 2 hits, mine fire protection and UCIOA unit boundaries)
- `deposit-surrender-notice` (1 state): Not applicable: Texas's conspicuous surrender-notice condition. Substance checked (rule 20): art. 37-6A (read whole) has no surrender-notice condition; the tenant's only address duty is to give an accurate address (§ 37-6A-2(g)), and a lease term forfeiting a deposit for want of notice would run into § 37-6A-4 (Claude's reading). f-surrender-notice, -nc: 2 hits (§ 37-6A-2, § 13-2A-14), none a condition.
- `designated-repairer` (1 state): Not applicable: Nevada clause tied to its repair-and-deduct statute; WV has no repair-and-deduct statute (`edu-tenant-repair-remedies-wv`, a-repair-deduct-r2).
- `disaster-displaced-guests` (1 state): Not applicable: California hotel program; hotels and transient lodging out of scope; no West Virginia counterpart (d-disaster, d-disaster-ev)
- `dv-deposit-timing` (1 state): Not applicable: North Dakota's domestic-violence deposit timing; art. 37-6A has one notice period for every tenancy (§ 37-6A-1(7)); West Virginia has no domestic-violence lease termination (`edu-no-dv-lease-termination-wv`, another slice).
- `dv-protection-order-chapter-moved` (1 state): Not applicable: North Dakota recodification; the West Virginia analog (Fair Housing Act moved from art. 5-11A to art. 16B-18 in 2024) is proposed as a new key in proposals-D
- `emergency-contact` (2 states): Not applicable: Texas and New York statutes; WV has no emergency-number or emergency-contact-list statute (a-emergency-phone-r2: 0 hits, -nc: 2 hits, car sharing and signage); no row (only two states).
- `employee-screening` (1 state): Not applicable: Florida licensed-apartment program; no West Virginia rule (d-employee-screen, d-employee-ev)
- `environmental-event-termination` (2 states): Not applicable: Colorado's statute; WV substance checked (rule 20): § 37-6-28 gives the tenant, not the landlord, a casualty exit 'by fire or otherwise'; a landlord exit exists only by contract (`casualty-wv` limb 3) (`casualty`, `casualty-nc`, lead)
- `eviction-penalty-clause-ban` (1 state): Not applicable: Colorado statute; no West Virginia ban on eviction-penalty clauses (d-evict-penalty), but fees the law does not authorize are covered by the § 46A-2-128(d) reading in `edu-prohibited-lease-terms-wv`
- `eviction-service-party` (1 state): Not applicable: Tennessee's statute lets a lease name a person to accept service; WV's summary-relief notice goes by Rule 4 or certified mail (§ 55-3A-1(c)); the Rules of Civil Procedure (trial courts) were not saved, so no agent-for-service rule was read; not offered
- `expedited-deposit-disposition` (1 state): Not applicable: Virginia procedure; art. 37-6A (read whole) has no expedited disposition.
- `family-child-care` (1 state): Not applicable: Oregon rule; substance checked, no WV statute on child care in rented homes (e-child-care: 0 hits; e-child-care-ev: 11 hits, all child-care licensing).
- `fee-unprovided-service` (1 state): Not applicable: Colorado honest-pricing law. Substance checked: the only "not actually provided" fee bar is for mortgage loans (§ 46A-4-109); f-fee-unprovided, -nc found nothing on rentals. The debt-collection limits in `edu-collection-fee-wv` and `edu-required-fees-wv` cover what West Virginia has.
- `furnishings-included` (1 state): Not applicable: Kansas clause unlocks a furnished-unit deposit uplift; WV has no deposit cap (`edu-no-security-deposit-cap-wv`); furnished/unfurnished matters only to the court's vacate date (§ 55-3A-3(f)).
- `good-cause-notice` (1 state): Not applicable: New York program; substance checked: WV good-cause termination exists only for factory-built home sites (§§ 55-3B-2, 37-15-2(e), 37-15-3(c); out of scope); no good-cause rule for dwellings (c-good-cause: 31 hits, franchise, insurance, employment, guardianship and factory-built home sections)
- `governmental-fines` (1 state): Not applicable: Texas statute; no West Virginia rule on passing government fines to tenants (d-gov-fines-r2)
- `hazardous-contamination-disclosure` (2 states): Not applicable: Iowa and Missouri programs; substance checked: the only contamination-disclosure statute is the drug-lab rule (§ 60A-11-3(a)(6)), answered in `edu-meth-lab-wv` (c-contamination-r2: 2 hits, § 22-21-3 coalbed and § 60A-11-3)
- `inspection-condemnation-disclosure` (2 states): Not applicable: Minnesota and Wisconsin programs; substance checked: no landlord duty to disclose code orders; State Fire Marshal repair or demolition orders are recorded in the county lien book and posted if mailed (§§ 15A-10-9, 15A-10-10); municipal code officials must give tenants a copy of an administrative search warrant five days before entry (§ 8-12-16(e)(3)) (c-condemn: 10 hits, eminent domain and public works; c-demolition)
- `inspection-notice-penalty` (1 state): Not applicable: Minnesota entry-notice penalty; West Virginia has no entry statute (`edu-no-entry-statute-wv`, another slice).
- `key-control-policy` (1 state): Not applicable: Nevada rule; substance checked (e-key-control, e-key-control-nc: hits are voting and video-lottery keys).
- `landlord-liability-insurance` (1 state): Not applicable: New Jersey statute; no West Virginia owner liability-insurance mandate (d-landlord-ins, d-landlord-ins-ev)
- `law-enforcement-cooperation` (1 state): Not applicable: Tennessee child-abuse cooperation statute; no West Virginia landlord duty (d-child-coop)
- `lease-notice-initial-requirement` (1 state): Not applicable: North Dakota initialing rule; no West Virginia initial-next-to-term rule (d-initial, d-initial-ev)
- `lease-type-parity` (2 states): Not applicable: Oregon/Washington parity rules; f-parity 0 hits, -nc 2 hits (insurance, broadband), nothing on point.
- `liquidated-damages` (1 state): Not applicable: Oklahoma's penalty statute; WV substance checked: no statute (`liquidated`, `liquidated-nc`, lead: hits are public contracts and UCC); penalty doctrine is case law, not searched (resolved by the library-wide § 46A-2-128(d) reading)
- `meter-conservation-charge` (1 state): Not applicable: South Carolina program; no WV meter or conservation-charge rule for landlords (c-utility-resale)
- `notice-to-vacate-additional-terms` (1 state): Not applicable: Kansas statute; no West Virginia rule on notice-to-vacate documents (d-vacate-doc)
- `ordnance-demolition-meter-disclosures` (1 state): Not applicable: California program; no ordnance, demolition-notice or shared-meter disclosure for landlords (c-ordnance 7 hits, militia, firearms and tax sections; c-demolition 9 hits, code enforcement and fire marshal orders; c-utility-resale)
- `owner-move-in-reservation` (1 state): Not applicable: California's just-cause exception; WV has no just-cause rule (`edu-no-for-cause-eviction-wv`)
- `pest-control-notice` (1 state): Not applicable: California program; no pesticide-application notice to tenants (c-pesticide-notice-r2: 1 hit, § 19-16A-25 commissioner's entry, which excludes dwelling houses); pesticide rules not read
- `political-access` (1 state): Not applicable: Minnesota rule; substance checked (e-political-access: 0 hits; e-political-access-ev: 8 hits, election and office qualifications only).
- `portable-cooling-device` (2 states): Not applicable: Oregon and Washington rules; substance checked (e-cooling, e-cooling-nc: tax definitions and vehicle equipment only).
- `possession-bond` (1 state): Not applicable: Tennessee's bond with confessed judgment; confession of judgment is slice D's topic (§ 50-4-10(c) confession in court; § 46A-2-117 per the notes); not offered
- `private-well-testing` (2 states): Not applicable: New Jersey and Oregon programs; no well-test disclosure for landlords; § 22-6A-10 (gas well applicants notify owners of nearby water wells) is not a landlord duty (c-well, c-well-nc)
- `prop65-rental-warning` (1 state): Not applicable: California Proposition 65; no WV chemical-warning rule for rentals (c-chem-warning: 1 hit, smokeless tobacco billboards)
- `purpose-limitation` (1 state): Not applicable: North Dakota rule; substance checked (e-purpose, e-purpose-nc: letting for prostitution, § 61-8-5, and nuisance, § 61-9-2, are crimes, not a lease-purpose remedy); shared `residential-use-only` covers use.
- `recycling-notice` (1 state): Not applicable: Oregon program; municipal recycling programs must notify all occupants (§ 22-15A-18), a municipal duty, not a landlord's (c-recycling-tenant: 1 hit, § 16-1-9 backflow)
- `rent-installments` (1 state): Not applicable: Oregon's installment-rent rule; no West Virginia counterpart (nothing in art. 37-6 or 37-6A).
- `rent-receipt-anti-waiver` (1 state): Not applicable: Kansas URLTA § 58-2549; no West Virginia counterpart (d-rent-free, d-rent-free-ev); successor duties under §§ 37-6-1 to -3 and § 37-6A-2(e) are in `edu-sale-or-management-change-wv`
- `repair-cost-termination` (1 state): Not applicable: Wyoming's uneconomical-repair termination has no WV counterpart (a-repair-deduct-r2 and a-habitability-r2 found none); casualty is § 37-6-28.
- `repair-escrow-exemption-notice` (1 state): Not applicable: Ohio's escrow remedy and small-landlord notice have no WV counterpart (`edu-tenant-repair-remedies-wv`, `edu-portfolio-thresholds-wv`).
- `security-deposit-standards` (1 state): Not applicable: South Carolina's statement of deposit standards for landlords of more than four adjoining units; art. 37-6A (read whole) has nothing like it.
- `senior-housing-work-card` (1 state): Not applicable: Nevada program; no WV work-card or staff-screening statute for housing (grep 'work card' and staff background checks in dwellings: 0 sections).
- `sfr-occupancy-disclosure` (1 state): Not applicable: Nevada program; no occupancy-limit disclosure (c-occupancy-disc 0 hits; everyday lead battery occupancy-limit 10 hits, none on point)
- `single-family-zone-lease-limit` (1 state): Not applicable: Kentucky (Jefferson County) owner-occupancy statute; no West Virginia counterpart (d-owner-occ; local zoning not searched)
- `smart-access` (1 state): Not applicable: Washington rule; substance checked (e-smart-access: 32 hits, none on dwellings).
- `smoke-drift-waiver` (2 states): Not applicable: Utah and Wisconsin rules; substance checked, no WV smoking or tobacco-nuisance statute for dwellings (smoking, smoking-nc, smoking-r2); shared `smoking-policy` and `edu-smoking-cannabis-wv`.
- `social-security-defense` (1 state): Not applicable: California's temporary defense; no WV counterpart (nothing in the eviction articles read)
- `sprinkler-disclosure` (1 state): Not applicable: New York program; only sprinkler rule for dwellings is § 15A-10-12(d) (sprinkler system in lieu of smoke detectors; slice A's `edu-alarm-duties-wv`) and § 8-40-4 (no sprinklers for home businesses) (c-sprinkler, c-sprinkler-nc)
- `statutory-caps` (1 state): Not applicable: Ohio summary row; West Virginia's money terms are answered topic by topic (deposit cap, interest, late fee, returned check).
- `steam-radiator-covers` (1 state): Not applicable: New Jersey program (c-radiator 0 hits; c-radiator-ev 44 hits, all radiation and imaging)
- `subsidized-inspection-refusal` (1 state): Not applicable: Illinois's subsidized-housing statute; federal program rules not read
- `subsidy-habitability-proration` (1 state): Not applicable: Colorado statute; WV's only rent reduction is § 37-6-28 (casualty).
- `subsidy-late-fee` (1 state): Not applicable: Colorado rule; f-subsidy-late, -nc 0 hits (synthetic positives only; not cited as an absence).
- `tenant-insurance-claims` (1 state): Not applicable: Colorado statute; no West Virginia rule on claims against a tenant's renter's insurance (d-ins-claim, d-ins-claim-ev-r2, renters-insurance)
- `tenant-portal` (1 state): Not applicable: Oregon 2026 statute; no West Virginia portal rule (d-portal)
- `tpa-exemption-notice` (1 state): Not applicable: California Tenant Protection Act; WV has no rent cap, rent-control or just-cause statute and no state preemption of local rent control was found (c-rent-cap: 9 hits, none on point)
- `tpa-notice` (1 state): Not applicable: same as `tpa-exemption-notice` (c-rent-cap)
- `tpa-sunset` (1 state): Not applicable: California Tenant Protection Act sunset
- `unbundled-parking` (1 state): Not applicable: California rule; no West Virginia counterpart (f-parking-rules: 1 hit, not on point).
- `utility-allowance-cap` (2 states): Not offered: a utility allowance with tenant-paid overage is a utility-billing arrangement the lease must provide for (§ 37-6A-1(17)); folded into proposal A-1 and the open utility-billing candidate; education in `edu-utility-apportionment-wv`.
- `utility-deposit-return` (1 state): Not applicable: Wyoming utility-deposit rule; utility deposits here are the utility's (unclaimed after one year, § 36-8-2(a)(13)), not the landlord's.
- `utility-interruption-submeter` (1 state): Not applicable: Texas rule; substance checked: WV allows submetering, allocation or ratio billing only "If the rental agreement so provides" (§ 37-6A-1(17); slice A `edu-utility-apportionment-wv`) and has no statute letting a landlord interrupt service (utility-billing, self-help; self-help is slice B).
- `utility-transfer` (1 state): Not applicable: Tennessee rule; substance checked (e-utility-transfer: 4 hits, none; utilities ask applicants whether they are owner or tenant, §§ 8-19-12a(a)(1), 16-13A-9(a)(3), relevant to `edu-utility-liens-wv`).
- `veterans-incentive` (1 state): Not applicable: Florida pilot program.

### 18.3 New topic keys (3)
- `accessory-dwelling-unit`: `edu-accessory-dwelling-unit-wv` (art. 8-42).
- `eminent-domain`: `edu-eminent-domain-wv` (§ 37-6-29: rent apportioned on a taking unless the lease expressly provides otherwise).
- `home-business`: `edu-home-business-wv` (art. 8-40).

## 19. Step D screens (rules 40-54), one line each
- **40, formatting and placement:** run in Step C. § 46A-6-109 is the only general rule; nothing else (§4).
- **41, just cause:** confirmed absent for dwellings. Situational limits are fair housing, condominium conversion (§ 36B-4-112), the retaliation defense in the court's answer form, and art. 37-15 lot rentals (out of scope); `edu-no-for-cause-eviction-wv`. The end of the term ends possession (§ 37-6-5; `holdover-ca`).
- **42, required text inside a shared clause:** none. No statute forces a sentence into a fee or deposit clause; the § 37-6A-1(14) written agreement is supplied by `nonrefundable-fees-wv`.
- **43, cure promises:** West Virginia gives no pre-suit nonpayment notice or cure right, apart from tender before trial (§ 37-6-23) and relief within 12 months (§ 37-6-20). `default-by-tenant-wv` adds no contractual cure, keeps the tender right, and puts the no-cure carve-out in its own sentence. The base `early-termination` 10-day cure was not tagged (§2.2).
- **44, terms the statute turns into duties:** § 37-6-30(a)(5) ("supplied … by written or oral agreement") and (b) (greater duty controls) turn `appliances-included`, `utilities-paid-by-landlord` and `landlord-maintenance` into statutory duties. Each tag note says so, and `appliances-excluded-wv` is offered.
- **45, electronic notices:** art. 39A was read whole. Agreement is needed (§ 39A-1-5(b)), and the right to refuse later electronic dealing cannot be waived (-5(c)). A record the recipient cannot retain is unenforceable (-8). § 39A-2-11(2)(B) excludes default, eviction and cure notices for a primary residence, and § 39A-2-1 sets consumer consent rules. The shared `notices` and `electronic-signatures` are lawful; no e-mail opt-in clause is offered (§6.1).
- **46, the lease as the required notice:** no West Virginia statute lets a lease paragraph serve as a statutory notice, and no optional addendum must control over the lease. `addendum-precedence` is tagged.
- **47, knowing use of a prohibited term:** the debt-collection remedies (actual damages plus a $1,000 penalty per violation, inflation-adjusted, § 46A-5-101(1), -106) apply if the article reaches rent. That is the basis of the library-wide § 46A-2-128(d) reading (§6.3; `edu-knowing-use-penalty-wv`).
- **48, separate-document requirements:** none. West Virginia has no uniform residential landlord-tenant act and no separate-writing rule for tenant chores, so `landscaping-irrigation` and `snow-removal` are tagged without the single-family split.
- **49, collection-cost bans:** §§ 46A-2-127(g) and -128(c)-(d) were applied. No reciprocal-fee statute. `default-by-tenant-wv` drops collection costs and attorney fees (`edu-attorney-fees-wv`, `edu-collection-fee-wv`).
- **50, "the lease controls":** § 37-6-5 (special agreement), § 37-6-28 (unless the lease otherwise provides), § 37-6-29 (unless the lease expressly provides), § 37-6-30(b) (greater duty), § 37-6A-1(14) (express written nonrefundable agreement), § 37-6A-1(17) (if the rental agreement so provides), and § 37-6A-2(b)(1), (5) (charges specified in the rental agreement). Each was decided on purpose (§6.1).
- **51, plain-language and consumer statutes:** § 46A-6-109 reaches residential leases. The enumerated unfair practices of art. 46A-6 are written for goods and services, and whether its general standard reaches a lease is case law (`edu-consumer-protection-wv`). The unconscionability and confession statutes reach a lease-purchase that is a consumer credit sale (§ 46A-1-102(42)).
- **52, exculpation:** no statute voids "not liable" terms, but enforceability is case law and art. III, § 17 is engaged, so the variants without the disclaimer were tagged (§2.2).
- **53, figures that contradict a shared clause:** `returned-payments` and `holdover` (ceiling-only) were replaced or answered by a variant. `late-fee` has no cap and is conditioned only on being specified in the lease (§ 37-6A-2(b)(1)). No holdover multiplier or stacking issue arises (§ 55-3-2 damages only).
- **54, optional clauses and tenant-caused damage:** §6.1. The tenant-caused-damage screen found fault exceptions in § 37-6-30(a)(2), (4) and § 37-6-28. No domestic-violence or illness exit exists. No landlord-paid-utility exit statute exists: the § 37-6-30(a)(7) duty has no tenant exit.

## Proposed SOP changes
- **Open other pages on a crawl's site with `tabs_create` then `navigate`, never `preview_start`.** On West Virginia, `preview_start` on an origin already open in the crawl tab navigated the crawl tab and stopped the crawl.
- **When an official article payload's heading markup is irregular, prove the parser against the index by unique section number and keep heading-only blocks.** West Virginia's payload put empty headings between section headings and bodies and printed some headings with an en dash; the first parser silently dropped text and second versions until a replay.
- **Record any concurrent crawl and its throttling evidence in §1.3.** Three crawler tabs ran at once against an unthrottled site (0 non-OK responses); rule 19's sequential rule should say whether it applies only to sites that show throttling.
- **Treat a bill-status page's code-affected list and its date column as leads, never as the act.** H.B. 2434's page carried the introduced bill's section numbers, H.B. 2961's listed two of five sections, and the code-affected date column is the last action (chapter assignment), not approval.
- **Generate every hit count a note states from the battery log, including counts quoted in prose.** Agent-typed counts go stale after a corpus replay.
- **Check a bracketed figure against any statute that voids a longer notice or period** (West Virginia's § 37-6-11(b)(4)), not only against floors.
- **When an independent check proposes widening an absence claim ("no statute addresses X as such"), run a fresh search before applying it.** West Virginia's round 3 optional wording created two successive false absences (rounds 8 and 9).
- **Keep working-file pointers ("slice B", "proposals-D", "the lead's …") out of delivered notes from the start; agents should cite rows and log sections.** West Virginia needed a 67-row provenance clean-up at the end.

## Proposed topic questions
- `fair-housing` (or a general recodification key): "Has the state's fair housing act been moved or renumbered recently, and do its cross-references still point at the right sections?" West Virginia's moved from art. 5-11A to art. 16B-18 in 2024 and carries several dead pointers (§10).
- `municipal-utility-lien`: "Do the state's water, sewer and other utility lien statutes exempt an owner from a tenant's unpaid bill, and do all of them carry the same proviso?"
- `electronic-signatures`: "Does the state's UETA exclude eviction, default or cure notices for a primary residence?"

## Sync (Claude Code, 2026-10-08)

- **Merged** with `merge-delta.py --base 7a01a92` (the 3,704-row library the kickoff was staged from): 53 rows tagged, `security-deposit-return-wv` rewritten and activated, 184 new; nothing refused. Library 3,888 rows; WV 238 active (66 lease clauses, 172 education); no same-topic pairs; every other state's set unchanged.
- **Kickoff error owned:** lead 8 cited fair housing at W. Va. Code ch. 5, art. 11A. Claude Code confirmed that article's page existed but didn't read its sections, which all print "[Repealed.]"; the act is now art. 16B-18 (S.B. 300, 2024). The pass caught it, and the rows cite art. 16B-18.
- **Cross-state items:** `edu-cares-act-notice` tagged; `keys` and `hoa-compliance` screened and tagged (their WV notes record the § 46A-2-128(d) reading).
- **Rule 27:** all seven topics have WV rows; no rows added at sync.
- **Citations file:** `lease-clause-citations-WV.csv` built from each row's WV note segment (238 rows: 161 cited, 65 confirmed absent with their named batteries, 12 generic shared clauses whose WV notes record no West Virginia statute).
- **Legal watch:** WV config in `stateConfig.js` (code sections only, query paired with "Code of West Virginia"; 270 sections), federal lead checks, and two manual items (unread legislative rules; court rules that conflict with the statute). `legal-watch-wv.yml` committed held until after 2027-10-09; first run 2027-11-09, day 9 at 14:00 UTC.
- **Topic questions:** the three proposed above plus one for each new key (`accessory-dwelling-unit`, `eminent-domain`, `home-business`), with the citations their rows use.
- **Guards:** all pass. **Statute spot-check, 4 of 4, against the official section pages fetched from code.wvlegislature.gov on 2026-10-05:** W. Va. Code § 37-6A-2(c) (15 more days for a third-party contractor's itemization), § 37-6A-5(a) (deposit plus one and a half times the amount wrongfully withheld), § 55-3A-1(b) (hearing 5 to 10 judicial days after filing), § 37-6-5 (the special-agreement sentence behind `termination-notice-wv`).
- **SOP 1.62:** all eight proposals adopted (rules 16, 19, 53, 80); WV column added. The §10 flags are in the backlog.
