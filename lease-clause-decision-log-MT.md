# Montana — lease-clause decision log (state #31)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§14: the Montana Residential Landlord and Tenant Act of 1977, Mont. Code Ann. Title 70, ch. 24 (62 section entries, 53 live sections) and the security deposit chapter, ch. 25 (9 sections), read whole from the whole Montana Code Annotated 2025 loaded from mca.legmt.gov; the general landlord-tenant chapter (ch. 26) read whole beside the act; both chapters' indexes diffed against every citation in the MT rows; every uncited section listed with its reason) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Montana State University, "2026-2027 Contract for University Student Apartments" (effective August 1, 2026) with its Community Standards, mapped provision by provision; weaker lead, reasons given) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 68 scenarios, Claude-generated on the AZ §18.1 / NM §16 model plus Montana-specific, run against the final rows; every scenario answered by a row; the screen added `tenant-death-contact-mt`) |
| Gap-discovery source 4 — outside-title search | Done (§17: the whole Montana Code Annotated 2025 (44,748 sections, completeness proved against the site's own indexes) and the Montana Constitution loaded before the first battery and searched with 206 batteries; control 0 hits in every battery; every absence pattern tested against known positives; 34 battery records with a failed positive, in 31 chains, all recorded and rerun; relied-on hits read whole) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state is closed. This pass changed no other state's row except by adding an `MT` tag and an `MT:` note.

**Date:** 2026-10-02 to 2026-10-03 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** none of the three rule-9 triggers needed it, because the whole Montana Code Annotated 2025 and the Constitution were loaded, saved and hash-matched, giving full-text proof of absence and cross-chapter search directly (rule 9). Claude can't switch research mode on or off; only Taylor can.
**Kickoff vs SOP:** no conflict found. Citation formats are the kickoff's (`Mont. Code Ann. § 70-24-303(1)(b)`, `Mont. Code Ann. §§ 70-24-422, 70-24-424`, `2025 Mont. Laws ch. 656, § 2`, `Mont. Const. art. II, § 10`), checked by script (§8): every short-form cite in the drafts was expanded to the 'Mont. Code Ann.' prefix by the build script and listed for review (`work/prefix-expansions.txt`, 87 expansions; Montana has one code, so every expansion has the same prefix). The kickoff gives no format for the courts' portal access rules; rows write 'Rules for Access to the Trial Court Public Record Portal, Section 4.30' (flagged §10). Justice and city court rules are cited by their own name ('Montana Justice and City Court Rules of Civil Procedure, Rule 4C(2)(b)'), as the kickoff asks. Short forms such as '§ 70-24-303' appear only in this log.
**Scope:** Montana state law only. Missoula, Bozeman and Billings ordinances (and any other local rule) are flagged, not resolved (rule 3); state law bars self-government local units from rent control and from licensing landlords or regulating them beyond the state acts (Mont. Code Ann. § 7-1-111(13), (26)). Out of scope and named: mobile home lot rentals (the Montana Residential Mobile Home Lot Rental Act, Title 70, ch. 33; ch. 25 applies to both, Mont. Code Ann. § 70-25-102), the act's excluded arrangements (Mont. Code Ann. § 70-24-104, including all Montana university system housing), commercial and agricultural leases.
**Input CSV:** `lease-clauses.csv`, **2,699 rows, 17 columns, 2,577 active (633 lease clauses, 1,944 education)**, sha256 696c8236…3f37; every per-state active count matches the kickoff exactly (rule 23; counted at the file's own path). No MT rows existed (rule 25). This is Montana's only Desktop chat and its first work, so there were no earlier output files to delete (rule 8).
**Output CSV:** `lease-clauses-MT-delta.csv`, **162 rows, 17 columns, CRLF** (sha256 d764266beede53b93f645124fecf4e44efd6cbf67d20449afac1b67bf3bf9bc6): 44 existing rows with `MT` added to `states`, an `MT:` note appended and `last_checked` 2026-10-03, and 118 new MT rows. **MT 162 active: 69 lease clauses (44 tagged + 25 new), 93 education; all VERIFIED.** Merged with the master: 2,817 rows, 2,695 active; every other state's active count unchanged. **No shared row's text changed.**
**Taylor's earlier answer:** "Yes (Recommended)" (2026-10-02) to saving `mt-*` working files to his Downloads folder and granting read access for staging; those files remain there (§11).

---

## 0. Completion status

| | Status |
|---|---|
| Primary text read | **Read whole and saved, browser SHA-256 equal to file SHA-256 (`sources/registry.tsv`):** the whole Montana Code Annotated 2025 as crawled from mca.legmt.gov (`mt-mca-2025-corpus.json`, 44,748 sections); the Montana Constitution (`mt-const.json`, 169 sections, 16 articles); past editions of § 70-24-303 (1997, 2001, 2007, 2013, 2015, 2017, 2019, 2023; `mt-70-24-303-editions.json`); the 2025 session laws as enrolled, chapters 1 to 777, and bill metadata for all 778 chapters (`mt-2025-session-laws.json`, `mt-2025-session-chapters.json`); the Rules for Access to the Trial Court Public Record Portal in two versions (`mt-court-access-rules.json`); the real lease (`mt-real-lease-msu-usa-2026-27.txt`). The justice and city court rules and the Rules of Civil Procedure are in the corpus (Title 25). **Cases:** none read (§1.4). **Read in battery context only (labelled so in the rows):** the hits named in §17. |
| Step B — tag first | **Done.** 44 existing rows tagged MT (§2.1), including the ks-oh-ca / ks-oh variants, `extended-absence-notice-ks`, `possession-delay-ca`, `tenant-forward-proceedings-ca`, `surrender-end-of-term-ks-ne` and `parking-ks-oh-ca`. 29 shared rows (28 multi-state plus the blank-states `security-deposit-return` parent) screened and not tagged (§2.2). All 560 single-state clauses screened as a triage, none tagged (§2.3). No shared text edited. |
| Step E — new MT rows | 25 lease clauses (13 of them options under rule 54, §6.1) and 93 education rows; 38 education rows carry a CONFIRMED ABSENT search record (§3). |
| Rule 25 family | `security-deposit-return-mt` (30 days after termination or surrender and acceptance, whichever first; 10 days if nothing is deducted; refund methods; § 70-25-202). |
| Step D screens | All run (§19). Hits: rule 42 (cleaning notice written into `security-deposit-use-mt`; the § 27-1-717 demand in `returned-payments-mt`), rule 43 (`default-by-tenant` carve-out covers the repeat, damage and dangerous-activity grounds), rule 45 (UETA has no eviction exclusion; e-mail by election only, § 70-24-202(4)), rule 47 (§ 70-24-403(2) knowing-use penalty), rule 48 (§ 70-24-303(4) separate writing; Oklahoma treatment; § 70-25-206 separate condition statement; § 75-10-1305 meth notice before agreement), rule 50 (choices made on purpose, §19), rule 52 (§ 70-24-202(3); exculpation-free variants), rule 53 (`security-deposit-use`, `returned-payments`, `holdover`, `early-termination-ks`, `landlords-access`, `pet-policy`, `smoking-policy`, `residential-use-only`, `existing-condition`, `landlord-maintenance`, `possession-delay` replaced). Constitution: art. II, §§ 4, 10, 12, 14 recorded. |
| Optional clauses (rule 54) | 13 new optional clauses plus statutory options carried by tagged rows; 4 lawful options declined, each with an education row; 10 barred or unsupported options (§6.1). |
| Questions to Taylor (rule 76) | None needed (§6.2). The tenant-chore question (kickoff lead 3) was a legal call, made and recorded (§6.3). |
| Proof of absence | 38 education rows carry a CONFIRMED ABSENT record (battery, hit count, known-positive result); every topic in the reference ends Present, Confirmed absent, Not located, Answered elsewhere, Not offered, Barred or Not applicable (§18). 34 battery records carry a failed known positive, in 31 chains; each is recorded and rerun (§1.3). |
| Independent check | A separate agent checked all rows against the saved sources in six rounds: round 1, 2 ERROR, 12 FIX, 16 NOTE, all applied or answered; round 2 re-checked the 33 rows edited (0 ERROR, 1 FIX, 2 NOTE); round 3 re-checked the 2 rows edited after round 2 (0 ERROR, 0 FIX, 1 NOTE closed); rounds 4 to 6 re-checked the rows edited after round 3 (5, then 2, then 1; final round 0 findings) (§13, rule 80). |
| Corpus completeness | 880 chapters, 4,089 parts and 44,748 section links counted on the site's own indexes and all fetched, 0 fetch errors; the first crawler missed five lettered chapters (25-30A, 30-2A, 30-4A, 30-9A, 30-12A) and two odd section URLs (Evidence Rule 100 '000a' and § 61-5-107, whose URL ends in '%20'), which the index check caught before the first battery (§1.3; Proposed SOP change 1). |
| Currency | Montana Code Annotated 2025, compiling the 2025 regular session (2,505 sections carry an 'L. 2025' history line). Every 2025 chapter screened; the acts touching a cited section were read as enrolled with their effective-date sections (§1.2). No special session in 2025 or 2026 (bills API). |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Statutes and Constitution:** mca.legmt.gov (Montana Legislative Services Division), one page per section with its history line, under `/bills/mca/title_XXXX/chapter_XXXX/part_XXXX/section_XXXX/…html`; the Constitution under `title_0000`. **Channels:** the cloud shell could not reach legmt.gov (proxy CONNECT 403), so the built-in browser crawled the site sequentially in one corpus tab, saved the JSON to Taylor's Downloads folder (approved), and the files were staged and hash-matched (browser SHA-256 = file SHA-256). Four saves (the corpus, the Constitution, the real lease and the § 70-24-303 editions) landed under temporary GUID `.tmp` names and were identified by hash (rule 14).
- **Past editions:** dated paths on mca.legmt.gov (`/bills/1997/mca/70/24/70-24-303.htm` through 2015; `/bills/2017/mca/title_0700/…` from 2017). The § 70-24-303 history question (kickoff lead 3) was first read through fetch summaries; at log time the editions were fetched in the browser, saved and hash-matched (`mt-70-24-303-editions.json`) before any row relied on them (rules 12, 14; Proposed SOP change 3).
- **Session laws:** archive.legmt.gov enrolled chapter PDFs (`/content/Sessions/69th/Contractor_index/CH####.pdf`), parsed in the browser with pdf.js 3.11.174 from cdnjs; bill metadata and status from the bills API (bearbeta.legmt.gov `/bills/v1/bills/filter`; offset is a page index; session id 2 is the 2025 regular session). Chapter 778 (SB 437, signed 2026-03-24) returned 404 as a PDF; its sections are compiled (e.g. § 1-1-209) and none is cited.
- **Court rules:** the Montana Rules of Civil Procedure and the Montana Justice and City Court Rules of Civil Procedure are in the MCA corpus (Title 25, chs. 20 and 23). **Public-access rules:** courts.mt.gov, Rules for Access to the Trial Court Public Record Portal, PDF and DOCX (two versions that differ in Section 4.30; §10).
- **Real lease:** montana.edu (§15).
- **Citation format:** the kickoff's; log references written 'MT log §N'.

### 1.2 Currency (rule 16)
- **Compiled text:** the Montana Code Annotated 2025. The site's help page still says its text includes 'enactments of the 2017 regular session' while every page is headed 2025 and 2,505 sections print 'L. 2025' history lines; currency rests on the history lines, not the help page (rule 16; Proposed SOP change 2). The compilation prints future-dated and temporary versions as separate versions of one section (122 sections have two); the only cited section with two versions is § 70-24-303 (temporary version 'Subject to 27-1-1603' until January 1, 2031; version effective January 2, 2031 drops that lead-in; subsections (1)-(5) otherwise identical). `edu-habitability-mt` states both; the changeover date goes to the legal watch (§10).
- **2025 acts:** every enrolled chapter was screened by keyword (landlord, tenant, lessee, lessor, rental agreement, residential, eviction, security deposit, 70-24, 70-25) and then overlaid on every section the MT rows cite (142 sections, `work/cited-sections.txt`; `work/overlay-2025.json`; rule 16). Acts touching a cited section, each read as enrolled with its effective-date or applicability section:
  - **2025 Mont. Laws ch. 768 (HB 810)**, §§ 1-2 (§§ 70-24-103(15), 70-24-201(4); also ch. 33): 'effective on passage and approval' (signed June 9, 2025).
  - **2025 Mont. Laws ch. 656 (HB 444)**, §§ 1-2 (§§ 70-25-201, 70-25-202): effective on passage and approval (signed May 12, 2025). The pdf.js text shows 'a pending claim for actual damages filed in court' in §§ 70-25-201(3)(b) and 70-25-202(2); the compiled 2025 code omits 'for actual damages'. pdf.js drops strike-through and the same extraction runs struck and new words together in § 70-25-202(1)(a)(ii), so the words were probably struck; this was not confirmed from the PDF's drawing marks (weaker method, rule 16). `security-deposit-return-mt` uses the narrower reading (flagged §10).
  - **2025 Mont. Laws ch. 254 (HB 311)**, § 1 (new § 37-56-109): no effective-date section, so October 1, 2025 (Mont. Code Ann. § 1-2-201); § 3: '[This act] applies to an application fee collected by a property manager from an applicant on or after [the effective date of this act].'
  - **2025 Mont. Laws ch. 179 (SB 101)**, §§ 1, 3 (new § 45-6-206; § 70-24-113): October 1, 2025.
  - **2025 Mont. Laws ch. 360 (SB 149)**, § 1 (§ 70-24-114; also § 70-33-110): October 1, 2025.
  - **2025 Mont. Laws ch. 367 (SB 201)**, §§ 7-8 (§§ 75-10-1305, 75-10-1306), and § 75-10-1303: October 1, 2025.
  - **2025 Mont. Laws ch. 568 (SB 300)**, § 7 (§ 49-4-214): October 1, 2025.
  - **2025 Mont. Laws ch. 403 (SB 442)**, § 1 (§ 37-56-104): effective on passage and approval (May 5, 2025).
  - **2025 Mont. Laws ch. 100 (HB 49)** (§§ 16-12-102, 16-12-108): effective on passage and approval; § 16-12-108(6) reads the same in the enrolled text. **ch. 550 (SB 74)** (§ 16-12-102): October 1, 2025. **ch. 155 (SB 132)** (§ 16-12-106): October 1, 2025.
  - **2025 Mont. Laws ch. 574 (SB 390)** (§ 50-40-103): effective on passage and approval. **ch. 87 (HB 164)** (§§ 70-9-802, 70-9-803): October 1, 2025. **ch. 452 (HB 416)** (new § 70-16-110): October 1, 2025. **ch. 537 (HB 809)** (§ 7-1-111): October 1, 2025. **ch. 397** (§ 3-6-103, municipal court money cap): October 1, 2025.
  - Sections touched only by acts that do not bear on the rows' use of them: §§ 15-68-101 (ch. 47), 15-70-801 (ch. 216), 28-2-903 (ch. 407, student-athlete contracts, effective June 1, 2025), 30-14-102 (chs. 231, 625), 50-60-203 (ch. 368), 61-12-401 (ch. 23), 76-3-504 (ch. 589); the compiled text prints each.
- **Special sessions:** none recorded for 2025 or 2026 in the bills API (the next session listed is the 2027 regular session).
- **Revisory act:** 2025 Mont. Laws ch. 53 (HB 112, the code commissioner bill) amends no cited section.
- **Stale cross-references in relied-on sections (rule 77):** listed in §10.

### 1.3 Corpus and method (rule 19)
- **Loaded:** the whole MCA 2025 crawled from mca.legmt.gov in one corpus tab, sequentially: 880 chapters, 4,089 parts and 44,748 section links counted on the site's own title, chapter and part indexes, all fetched, 0 fetch errors; 122 sections carry two versions and every version is indexed. The Constitution (169 sections, 16 articles) was loaded before the first battery. **Completeness:** the first crawler's link pattern missed five lettered chapters (25-30A, 30-2A, 30-4A, 30-9A, 30-12A) and two odd section links (Evidence Rule 100, numbered '000a', and § 61-5-107, whose URL ends in '%20'); the count against the indexes caught them and they were crawled before any battery was relied on.
- **Engine:** Python over the saved, hash-matched corpus (`work/engine.py`): normalized text (straight quotes and dashes, collapsed spaces), the catchline (heading) excluded from the body and reported separately as a heading-only hit (including when the body matched but failed the context filter), every version of a section indexed, first match per section number, an optional section-wide context filter (`req`) and scope recorded with each battery. Court rules are indexed as '25-23 Rule 4' and Constitution sections as 'Const. art. II, sec. 10'. Control term in every battery: 0 hits.
- **Batteries:** 206, saved as `batteries/mt-batteries-2.jsonl` (1-141), `-3.jsonl` (142-185), `-3b.jsonl` (186-194), `-4.jsonl` (195-205) and `-5.jsonl` (206). An earlier pass (`work/battery-pass1.json`) was a screen only and is superseded; no row cites it. Battery 2 is the calibration ('landlord', 124 hits).
- **Known positives:** every absence battery was run with real saved sections, synthetic statute-style sentences or both, in the same step. **Failures and reruns, all recorded:** 19 → 142 (tax on accommodations / lodging / short-term rentals); 24 → 143 (source of income / housing voucher / rental assistance); 30 → 144 (deposit on sale or transfer); 42 → 145 → 186 (sex offender and landlord / rental); 44 → 146 (military installation / air zone disclosure); 51 → 147 (immigration status and housing); 55 → 148 (domestic violence everyday rerun); 59 → 149 (flag / sign display); 60 → 150 (flag / sign everyday rerun); 61 → 151 (electric vehicle charging); 62 → 152 (solar and tenant / association); 63 → 153 (satellite / antenna / cable access); 76 → 154 (internet / broadband / telephone service access for tenants); 89 → 155 (jury trial / jury waiver); 92 → 156 (landlord lien on tenant goods); 93 → 157 (self-service storage); 94 → 158 (eviction record sealing); 95 → 159 (just / good cause to end a tenancy); 100 → 160 (pre-filing / mediation / rental assistance before eviction); 111 → 161 → 187 (nuisance / unlawful use and leases); 116 → 162 (service of notice); 122 → 163 (foreign adversary ownership or lease of land); 125 → 164 → 188 (association or condominium limits on leasing); 126 → 165 (municipal water or sewer charges as a tax or lien); 127 → 166 (utility disconnection and tenants); 171 → 189 (condemned or unfit dwelling and occupants); 177 → 190 (pest / vermin everyday rerun); 179 → 191 (deposit cap everyday rerun); 181 → 192 (rent control everyday rerun); 183 → 193 (lease copy everyday rerun); 195 → 205 (towing or removing vehicles from private property). Where a real positive failed only because of a proximity window, the rerun used a section-wide context filter (rule 19). Where a real positive failed because the section did not contain the term (46-23-504, 70-23-601, 70-24-303, 37-51-321), the positive was replaced and the failure recorded.
- **Zero-hit batteries with only synthetic positives (rule 19, MI 1):** each was followed by an everyday-word rerun: 12 → 178; 18 → 197 (0; chain ends); 23 → 198; 25 → 179 → 191; 27 → 196; 59 → 150, 194; 65 (its pattern is the everyday word: 'waterbed', 'water-filled furniture'); 67 → 199 (0; chain ends); 100 → 160; 105 → 106, 182; 118 → 200 (scoped to Title 30, ch. 18, the act whose exclusions are in question; cited as scoped); 127 → 166 → 201 (0; chain ends); 140 → 176 (0; chain ends); 169 → 202; 170 → 203 (0; chain ends); 173 → 204 (0; chain ends).
- **Boundary:** the batteries searched the MCA 2025 (including the court rules compiled in Title 25) and the Constitution. The Administrative Rules of Montana, federal law beyond the provisions named, case law and local codes were not searched, and nothing is claimed about them.
- **Saved:** batteries 1-206 with pattern, scope, context filter, positives and results, hits, heading-only hits and control count; the corpus; the acts; the editions; the court rules; the real lease; the registry. Every battery citation in the rows and in §18 was generated from the saved logs by `work/build.py`, which cites a failed battery only as 'recorded as failed, rerun as N' (157 batteries cited).

### 1.4 Section-open vs recall; case law (rule 15, rule 21)
Every row was drafted with the saved primary text open (each new row's notes say 'Rule 15: written section-open'); the recall subset is empty. Sections read only in battery context are labelled so in the rows.

**Case law:** no opinion was read. A web search for Montana cases reconciling § 70-24-303(3) and (4) and for cases on § 70-24-201(2)(f) found none; a Justia summary mentioned *Hines v. Topher Realty* (cleaning notice) and *Worledge v. Riverstone* (a class action over lease provisions) as leads only; neither was read or relied on.

**Case-law questions and outcomes (rule 21):**
- § 70-24-303(3) vs (4) (tenant chores); § 70-24-201(2)(f) (fee plus rent to re-letting): **searched (web), none found.**
- Whether § 28-2-721 reaches residential late fees or stipulated holdover rates; whether a 3-day notice may include late fees; whether 'last month's rent' is prepaid rent or a deposit; whether Montana implies a covenant of quiet enjoyment; how far Mont. Const. art. II, §§ 4 and 10 reach private landlords; whether a roomer can be a 'lodger' under § 71-3-1401's hotelkeepers' lien; a tenancy at will under § 71-1-319 and ch. 24 notices; whether § 70-24-430(9)'s notification can sit in the lease: **not searched.** Each row that depends on one says so.

**Federal law:** 42 U.S.C. § 4852d and 40 C.F.R. § 745.113 (lead, shared row) only; the Fair Housing Act, HUD assistance-animal guidance, the Servicemembers Civil Relief Act, the Protecting Tenants at Foreclosure Act, the CARES Act notice, VAWA and the Fair Credit Reporting Act were not read, and the rows say so.

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged MT as written (44)
| Row | Montana basis (from the MT note) |
|---|---|
| `rent-payment` | MT: Applies as written. 'Rent is payable without demand or notice at the time and place agreed upon by the parties' (Mont. Code Ann. § 70-24-201(3)). 'Except as permitted by applicable law' preserves the tenant's statutory deductions and abatements (Mont. … |
| `late-fee` | MT: Applies as written. Montana sets no late-fee cap, grace period or notice step (MT battery 9 (late fee cap / limit (amount or percent)): 2 hits, control 0; known positives passed (0 real sections, 2 synthetic)); late fees 'as agreed on in the rental … |
| `due-at-signing` | MT: Applies as written, with one point for the builder: Montana has no cap on deposits (MT battery 25 (security deposit cap): 0 hits, control 0; known positives passed (0 real sections, 2 synthetic)), but every deposit given to secure rent or payment for … |
| `application-of-payments` | MT: Applies as written. No Montana statute fixes the order in which a payment is applied (MT battery 15 (fees defined as rent): 2 hits, control 0; known positives passed (1 real section, 1 synthetic)); late fees and other charges agreed in the rental … |
| `permitted-occupants` | MT: Applies as written. Unauthorized persons residing in the unit support a 3-day notice (Mont. Code Ann. § 70-24-422(1)(c)). Occupancy limits may not discriminate on the grounds in Mont. Code Ann. § 49-2-305(1), including familial status ('having a child or … |
| `no-disturbance` | MT: Applies as written; it tracks the tenant's duty to conduct oneself and require others on the premises to conduct themselves 'in a manner, that will not disturb the tenant's neighbors' peaceful enjoyment of the premises' (Mont. Code Ann. § 70-24-321(1)(f)). |
| `utilities-responsibility` | MT: Applies as written. A tenant and landlord may agree in writing that the tenant perform the landlord's duties in Mont. Code Ann. § 70-24-303(1)(e) and (1)(f) (garbage receptacles and removal; water, hot water and heat) if done in good faith (Mont. Code … |
| `utility-service-continuity` | MT: Applies as written. |
| `utility-payment-evidence` | MT: Applies as written. The tenant must show no unpaid utilities to receive the 10-day refund of an undeducted deposit (Mont. Code Ann. § 70-25-202(1)(b)(i)). |
| `acceptable-payment-methods` | MT: Applies as written. Unless the rental agreement provides otherwise, rent is payable at the landlord's address or by electronic funds transfer to an account the landlord designates (Mont. Code Ann. § 70-24-201(2)(b)). Since 2025 Mont. Laws ch. 768, § 2 … |
| `tenant-maintenance` | MT: Applies as written. Mont. Code Ann. § 70-24-321(1)-(2): the tenant keeps the part of the premises the tenant occupies and uses 'as reasonably clean and safe as the condition of the premises permits', disposes of waste, keeps plumbing fixtures clean, uses … |
| `no-sublet-assign` | MT: Applies as written. 'A tenant who vacates a dwelling unit during the term of a tenancy may not allow the possession of the property to be transferred to a third person or sublet the property unless the landlord or the landlord's agent has consented in … |
| `no-alterations` | MT: Applies as written. Its last sentence preserves the reasonable modifications a tenant with a disability may make at the tenant's expense; the landlord may, when reasonable, condition permission on restoring the interior (Mont. Code Ann. § … |
| `joint-liability` | MT: Applies as written. |
| `utilities-paid-by-landlord` | MT: Applies as written. The landlord must 'supply running water and reasonable amounts of hot water at all times and reasonable heat between October 1 and May 1', except where the building is not required by law to be so equipped or heat or hot water is … |
| `appliances-included` | MT: Applies as written. The landlord must 'maintain in good and safe working order and condition all electrical, plumbing, sanitary, heating, ventilating, air-conditioning, and other facilities and appliances, including elevators, supplied or required to be … |
| `default-by-tenant` | MT: Applies as written. Rent: 3 days after written notice of nonpayment and of the landlord's intention to terminate (Mont. Code Ann. § 70-24-422(2)); other noncompliance: 14 days (3 days for an unauthorized pet, unauthorized persons residing in the unit, or … |
| `notices` | MT: Applies as written. Mont. Code Ann. § 70-24-108 controls what constitutes notice: actual knowledge; delivery at the landlord's place of business through which the rental agreement was made; transmission to an e-mail address provided in the rental … |
| `governing-law` | MT: Applies as written. Local governments may not add to or deviate from the exclusive application of Title 70, chapters 24 and 25, or license landlords or regulate their activities with regard to tenants beyond those chapters (Mont. Code Ann. § 7-1-111(13); … |
| `severability` | MT: Applies as written. It does not cure a prohibited term: a provision prohibited by Mont. Code Ann. § 70-24-202 is unenforceable, and a party who purposefully uses a rental agreement containing provisions known to be prohibited owes the other party actual … |
| `entire-agreement` | MT: Applies as written. Montana lets the landlord change some terms by written notice: in a month-to-month tenancy, terms, rent and conditions on written notice 'at least 15 days before the expiration of the month' (Mont. Code Ann. § 70-26-109; … |
| `addendum-precedence` | MT: Applies as written. Montana's required writings (the manager and owner disclosure, Mont. Code Ann. § 70-24-301(1), `landlord-disclosure-mt`; the separate condition statement, Mont. Code Ann. § 70-25-206(1); the federal lead disclosure) control under the … |
| `electronic-signatures` | MT: Applies as written. Montana's Uniform Electronic Transactions Act applies only to transactions between parties that have each agreed to conduct transactions by electronic means, and a party may refuse further electronic transactions, a right that 'may not … |
| `pet-insurance-requirement` | MT: Applies as written; no Montana statute bars a renter's insurance requirement. It excludes assistance animals; a tenant with an emotional support animal is liable for damage it does (Mont. Code Ann. § 70-24-114(6)). |
| `assigned-parking-space` | MT: Applies as written. A rule adopted after the tenant enters into the rental agreement that works a substantial modification of the tenant's bargain is not valid until 7 days after written notice (week-to-week) or 30 days' written notice (month-to-month) … |
| `parking-vehicle-rules` | MT: Applies as written. No Montana statute regulates towing a vehicle from private residential parking at the owner's or landlord's request (MT battery 195 recorded as failed, rerun as 205 (towing or removing vehicles from private property (rerun; … |
| `keys` | MT: Applies as written. A tenant may not remove, replace or add a lock without the landlord's written permission and must give the landlord a key to any lock the tenant adds (Mont. Code Ann. § 70-24-312(5)); refusing access by an unauthorized lock supports a … |
| `guest-policy` | MT: Applies as written. Montana defines a 'guest' as 'a person staying with a tenant for a temporary period of time as defined in the rental agreement or, if not defined in the rental agreement, for a period of time no more than 7 days unless the tenant has … |
| `guest-policy-day-limit` | MT: Applies as written. It is the rental agreement's definition of the guest period under Mont. Code Ann. § 70-24-103(8) (without it, the period is 7 days); no Montana statute bars a guest fee or limit (MT battery 71 (fee or charge for guests (tenancy)): 2 … |
| `common-area-use` | MT: Applies as written. No Montana statute gives a residential tenant a flag, sign or display right against a private landlord (MT battery 59 recorded as failed, rerun as 149 (flag / sign display (both orders, rerun)): 0 hits, control 0; known positives … |
| `fire-safety-grilling` | MT: Applies as written; no Montana statute gives tenants a grilling right. Local fire codes not read (rule 3). |
| `inspection-rights` | MT: Applies as written. Inspection is a purpose for which 'A tenant may not unreasonably withhold consent' (Mont. Code Ann. § 70-24-312(1)), on at least 24 hours' notice unless impracticable (Mont. Code Ann. § 70-24-312(3)(a)). Its 'Access & Entry terms' are … |
| `lead-based-paint` | MT: Applies as written (federal: 42 U.S.C. § 4852d; 40 C.F.R. § 745.113). Montana adds no lead disclosure for rentals: the only Montana lead reference in a real-property disclosure is the seller's disclosure on a transfer of residential real property (Mont. … |
| `hoa-compliance` | MT: Applies as written. No Montana statute governs a tenant's duty to follow association rules (MT battery 125 recorded as failed, rerun as 164 recorded as failed, rerun as 188 (association or condominium limits on leasing (rerun; 70-23-601 has no association … |
| `assistance-animal-accommodation` | MT: Applies as written. Mont. Code Ann. § 70-24-114 (as amended by 2025 Mont. Laws ch. 360, effective October 1, 2025) lets a landlord deny an emotional support animal that 'poses a direct threat to the safety or health of others or poses a direct threat of … |
| `extended-absence-notice-ks` | MT: Applies as written. Mont. Code Ann. § 70-24-322: 'Unless otherwise agreed, a tenant shall occupy the tenant's dwelling unit only as a dwelling unit. (2) The rental agreement may require that the tenant notify the landlord of an anticipated extended … |
| `tenant-forward-proceedings-ca` | MT: Applies as written; Montana's statute imposes the same duty: a tenant who receives notice of a proceeding to recover the property or its possession 'shall immediately inform the landlord of the notice and shall also deliver to the landlord the notice, if … |
| `possession-delay-ca` | MT: Applies as written in place of the base `possession-delay`, which makes the tenant wait 30 days to terminate. Mont. Code Ann. § 70-24-405(1): if the landlord fails to deliver possession, 'rent abates until possession is delivered and the tenant may: (a) … |
| `storage-space-ks-oh-ca` | MT: Applies as written in place of the base, whose 'not liable' sentence would exculpate the landlord's negligence (Mont. Code Ann. § 70-24-202(3); rule 52). |
| `parking-ks-oh-ca` | MT: Applies as written in place of the base `parking`, whose 'not liable' sentence would have the tenant agree to the exculpation of liability resulting from the landlord's negligence, which a rental agreement may not provide (Mont. Code Ann. § 70-24-202(3)); … |
| `tenants-property-insurance-ks-oh-ca` | MT: Applies as written in place of the base, whose 'not liable' sentence would exculpate the landlord's negligence (Mont. Code Ann. § 70-24-202(3); rule 52). |
| `services-utilities-provided-ks-oh` | MT: Applies as written in place of the base, whose 'Landlord is not liable' sentence the library replaces wherever a state bars exculpation (rule 52). Montana bars exculpation only for the other party's 'purposeful misconduct or negligence' (Mont. Code Ann. § … |
| `surrender-end-of-term-ks-ne` | MT: Applies as written; its 'Handling of Property Left Behind Section' is `abandoned-property-mt`. At the end of a written term the tenancy continues month to month unless the rental agreement sets a default extension period or a party gives 30 days' written … |
| `rental-application-accuracy` | MT: Applies as written; a materially false application is a noncompliance with the rental agreement handled under Mont. Code Ann. § 70-24-422(1). |

### 2.2 Screened and not tagged (29)
| Row | Why not tagged for Montana |
|---|---|
| `security-deposit-use` | Lets Landlord apply the deposit to cleaning costs with no written notice and 24-hour chance to clean (Mont. Code Ann. § 70-25-201(3); rule 53, NM 4); replaced by `security-deposit-use-mt` |
| `security-deposit-return` | Blank-states parent (rule 25 family); replaced by `security-deposit-return-mt` (RECOMMENDED: Montana requires no lease text, rule 56) |
| `existing-condition` | Its 'good order and repair' acknowledgment stands in for the separate landlord-signed condition statement § 70-25-206 requires (rule 48); replaced by `existing-condition-mt` |
| `returned-payments` | Ceiling-only fee and no written demand (Mont. Code Ann. § 27-1-717(2); rules 42, 53); replaced by `returned-payments-mt` |
| `residential-use-only` | Flat ban on 'any commercial purpose' conflicts with the § 70-24-321(1)(g) limited-business right; replaced by `residential-use-only-mt` |
| `smoking-policy` | Bans vaping of any kind, which may reach marijuana consumed 'by means other than smoking' (Mont. Code Ann. § 16-12-108(6)); replaced by `smoking-policy-mt` |
| `services-utilities-provided` | 'Landlord is not liable' (rule 52; Mont. Code Ann. § 70-24-202(3)); `services-utilities-provided-ks-oh` tagged |
| `tenants-property-insurance` | Same; `tenants-property-insurance-ks-oh-ca` tagged |
| `parking` | Same; `parking-ks-oh-ca` tagged |
| `storage-space` | Same; `storage-space-ks-oh-ca` tagged |
| `landlord-maintenance` | 'except where repair is necessary due to improper use' excuses § 70-24-303(1)(d) duties that have no fault exception; replaced by `landlord-maintenance-mt` |
| `landlords-access` | 'normal business hours' and purposes outside the exclusive § 70-24-312 list; replaced by `landlords-access-mt` |
| `landlords-access-mi` | Consent 'not unreasonably' refused tracks § 70-24-312(1), but its purposes and emergency definition differ and it omits door posting and the exclusive access list; replaced by `landlords-access-mt` |
| `possession-delay` | 30-day wait before terminating would waive the § 70-24-405(1)(a) 5-day right (Mont. Code Ann. § 70-24-202(1)); `possession-delay-ca` tagged |
| `surrender-end-of-term` | Generic 'treated as abandoned' disposal skips § 70-24-430's evidence, storage and notice steps; `surrender-end-of-term-ks-ne` tagged (its pointer names `abandoned-property-mt`'s title) |
| `surrender-end-of-term-mn-nd` | Points to a provision by description; one surrender clause per state, `surrender-end-of-term-ks-ne` tagged |
| `early-termination` | Fee 'one month's Rent ... or 30% of the remaining Rent ... whichever is greater' can exceed the § 70-24-201(2)(f) cap; 10-day cure promise for any breach (rule 43) |
| `early-termination-ks` | Same fee; landlord limb on vacating 'without notifying Landlord'; replaced by `early-termination-mt` |
| `holdover` | 'maximum amount permitted by applicable law' is ceiling-only (rule 53); replaced by `holdover-mt` |
| `holdover-ca` | One holdover clause per state; `holdover-mt` states Montana's two enhanced-damages cases and the § 70-24-429(5)/§ 70-24-201(2)(e) week-to-week rule for roomers, which -ca's 'month-to-month' misses |
| `pet-policy` | Entry and removal 'without liability to Tenant' (§§ 70-24-312(4), 70-24-202(3)) and an indemnity reaching Landlord's own negligence; replaced by `pet-policy-mt` |
| `landscaping-irrigation` | Oklahoma treatment (rule 48; §6.3): a specified maintenance task needs a separate signed writing with adequate consideration for every dwelling (§ 70-24-303(4)); `maintenance-allocation-mt` offered |
| `snow-removal` | Same |
| `default-by-tenant-ks-ne` | The base `default-by-tenant` is tagged: its prevailing-party fee sentence matches § 70-24-442; one default clause per state |
| `late-fee-ne` | Same text as the base `late-fee` (tagged) with a broader non-waiver sentence; one late-fee clause per state |
| `parking-vehicle-rules-id` | The base `parking-vehicle-rules` is tagged; -id adds booting, and Montana bars immobilization by private parking services (§ 61-12-102(2)) |
| `acceptable-payment-methods-nj` | New Jersey/Illinois non-EFT rule; Montana has none (battery 10); base tagged |
| `ev-charging-shared-area-co` | Colorado/Illinois EV statute; no Montana EV right (`edu-no-ev-charging-rule-mt`) |
| `ev-charging-end-of-tenancy-co` | Same |

### 2.3 Single-state clauses screened (560), none tagged
Triage (rule 26): **560** active clauses tagged to one state. **269** name another state or its statute in the clause text (not taggable as written; their topics are answered in §18). The other **291** were read: **163** sit on a topic an MT clause already answers with Montana's own wording (for example `late-fee-*`, `security-deposit-return-*`, `holdover-*`, `periodic-tenancy-notice-*`, `landlord-disclosure-*`, `rules-*`, `abandoned-property-*`, `casualty-termination-*`, `criminal-activity-*`, `maintenance-allocation-*`); **128** were read in full (`work/triage.json`): 0 tagged; they rest on their own state's statute (alarm duties, bed bug and flood disclosures, submetering, holdover rates, deposit schedules, nonrefundable fees, display rights), or fill a gap Montana's statute already fills (`landlord-self-cure-tn`/`-ia`/`-nm`, § 70-24-425; `partial-payment-nonwaiver-*`, § 70-24-423). Two shaped Montana rows: `deceased-resident-contact-nm` and `tenant-death-contact-ok` led to the narrower `tenant-death-contact-mt` (§6.1), and the `rent-escalation-*` clauses to the declined escalation option recorded in `edu-rent-increase-notice-mt`.

## 3. New MT rows
Every new row: `verification_status` VERIFIED, `effective_from` and `last_checked` 2026-10-03, notes ending with the source line and 'Rule 15: written section-open'. Battery citations were generated from the saved battery records by `work/build.py`.

### 3.1 New MT lease clauses (25)
| Row | Group | Topic | rule_type | Basis | Controlling text |
|---|---|---|---|---|---|
| `landlord-disclosure-mt` | Disclosures | `owner-identity-disclosure` | REQUIRED | REQUIRED_DISCLOSURE: Mont. Code Ann. § 70-24-301(1) | Mont. Code Ann. § 70-24-301(1) |
| `security-deposit-use-mt` | Security Deposit | `security-deposit-use` | CONSTRAINED | CONSTRAINED_TERM | Mont. Code Ann. § 70-25-201(3) |
| `security-deposit-return-mt` | Security Deposit | `security-deposit-return` | RECOMMENDED | SERVES_LANDLORD | Mont. Code Ann. § 70-25-202(1)(a)(i) |
| `existing-condition-mt` | Tenant Responsibilities | `existing-condition` | RECOMMENDED | SERVES_LANDLORD | Mont. Code Ann. § 70-25-206(1) |
| `landlords-access-mt` | Access & Entry | `landlord-entry` | RECOMMENDED | SERVES_LANDLORD | Mont. Code Ann. § 70-24-312(1) |
| `early-termination-mt` | Default & Termination | `early-termination` | CONSTRAINED | CONSTRAINED_TERM | Mont. Code Ann. § 70-24-201(2)(f) |
| `holdover-mt` | Default & Termination | `holdover` | RECOMMENDED | SERVES_LANDLORD | Mont. Code Ann. § 70-24-429(1) |
| `lease-end-continuation-mt` | Notices & General | `automatic-renewal` | CONDITIONAL | SERVES_LANDLORD | Mont. Code Ann. § 70-24-205 |
| `periodic-tenancy-notice-mt` | Default & Termination | `termination-notice` | CONSTRAINED | CONSTRAINED_TERM | Mont. Code Ann. § 70-24-441(1) |
| `abandoned-property-mt` | Default & Termination | `abandoned-property` | RECOMMENDED | SERVES_LANDLORD | Mont. Code Ann. § 70-24-430 |
| `maintenance-allocation-mt` | Landlord Responsibilities | `tenant-repair-agreement` | CONDITIONAL | SERVES_LANDLORD | Mont. Code Ann. § 70-24-303(4) |
| `returned-payments-mt` | Rent & Payment | `returned-payments` | CONSTRAINED | CONSTRAINED_TERM | Mont. Code Ann. § 27-1-717(1)(a) |
| `residential-use-only-mt` | Tenant Responsibilities | `residential-use-only` | RECOMMENDED | SERVES_LANDLORD | Mont. Code Ann. § 70-24-322(1) |
| `smoking-policy-mt` | Tenant Responsibilities | `smoking-policy` | RECOMMENDED | SERVES_LANDLORD | Mont. Code Ann. § 16-12-108(6) |
| `cannabis-cultivation-mt` | Rules & Regulations | `cannabis` | CONDITIONAL | SERVES_LANDLORD | Mont. Code Ann. § 16-12-108(6) |
| `pet-policy-mt` | Pets | `pet-policy` | RECOMMENDED | SERVES_LANDLORD | Mont. Code Ann. § 70-24-312(4) |
| `landlord-maintenance-mt` | Landlord Responsibilities | `landlord-maintenance` | RECOMMENDED | SERVES_LANDLORD | Mont. Code Ann. § 70-24-303(1)(d) |
| `electronic-notice-mt` | Notices & General | `notice-delivery-methods` | CONDITIONAL | SERVES_LANDLORD | Mont. Code Ann. § 70-24-202(4) |
| `rules-mt` | Rules & Regulations | `rules-regulations` | CONDITIONAL | SERVES_LANDLORD | Mont. Code Ann. § 70-24-311(1) |
| `mold-disclosure-mt` | Disclosures | `mold-disclosure` | CONDITIONAL | REQUIRED_DISCLOSURE: Mont. Code Ann. § 70-16-703(2) | Mont. Code Ann. § 70-16-703(2) |
| `tenant-caused-damage-mt` | Default & Termination | `tenant-caused-damage` | CONDITIONAL | SERVES_LANDLORD | Mont. Code Ann. § 70-24-409(2) |
| `casualty-termination-mt` | Default & Termination | `casualty-termination` | CONDITIONAL | SERVES_LANDLORD | Mont. Code Ann. § 70-24-409(1) |
| `criminal-activity-mt` | Tenant Responsibilities | `criminal-activity` | CONDITIONAL | SERVES_LANDLORD | Mont. Code Ann. § 70-24-321(3) |
| `tenant-death-contact-mt` | Default & Termination | `tenant-death` | CONDITIONAL | SERVES_LANDLORD | Mont. Code Ann. § 70-24-201(1) |
| `firearm-discharge-mt` | Rules & Regulations | `firearms` | CONDITIONAL | SERVES_LANDLORD | Mont. Code Ann. § 70-24-110 |

### 3.2 New MT education rows (93)
| Row | Group | Topic | rule_type | Basis | Controlling text |
|---|---|---|---|---|---|
| `edu-late-fee-mt` | Rent & Payment | `late-fee` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-24-103(14) |
| `edu-fees-as-rent-mt` | Rent & Payment | `fees-as-rent` | RECOMMENDED | — | Mont. Code Ann. § 70-24-103(14) |
| `edu-payment-method-fee-mt` | Rent & Payment | `acceptable-payment-methods` | PROHIBITED | — | Mont. Code Ann. § 70-24-201(4) |
| `edu-rent-increase-notice-mt` | Rent & Payment | `rent-increase-notice` | REQUIRED | — | Mont. Code Ann. § 70-26-109 |
| `edu-application-fee-mt` | Rent & Payment | `application-fees` | REQUIRED | — | Mont. Code Ann. § 37-56-109 |
| `edu-tenant-screening-mt` | Compliance & Prohibited Terms | `tenant-screening` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 49-2-305 |
| `edu-rent-control-mt` | Rent & Payment | `rent-control` | RECOMMENDED | — | Mont. Code Ann. § 7-1-111(26) |
| `edu-legal-interest-mt` | Rent & Payment | `unpaid-damages-interest` | RECOMMENDED | — | Mont. Code Ann. § 31-1-106(1) |
| `edu-rent-receipts-mt` | Rent & Payment | `rent-receipts` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-24-430(8) |
| `edu-rent-tax-mt` | Rent & Payment | `rent-tax` | RECOMMENDED | — | Mont. Code Ann. § 15-68-101(1)(a) |
| `edu-no-algorithmic-rent-rule-mt` | Rent & Payment | `algorithmic-rent-setting` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 30-14-103 |
| `edu-deposit-rules-mt` | Security Deposit | `security-deposit-cap` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-25-101(4) |
| `edu-no-deposit-interest-mt` | Security Deposit | `security-deposit-interest` | RECOMMENDED | — | CONFIRMED ABSENT;  |
| `edu-no-deposit-holding-rule-mt` | Security Deposit | `security-deposit-holding` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 37-56-101(4) |
| `edu-deposit-penalty-mt` | Security Deposit | `security-deposit-penalty` | PROHIBITED | — | Mont. Code Ann. § 70-25-203 |
| `edu-condition-statement-mt` | Security Deposit | `condition-inspection` | REQUIRED | — | Mont. Code Ann. § 70-25-206(1) |
| `edu-deposit-last-month-mt` | Security Deposit | `deposit-last-month-rent` | RECOMMENDED | — | Mont. Code Ann. § 70-25-101(4) |
| `edu-pet-deposit-mt` | Pets | `pet-fees` | CONSTRAINED | — | Mont. Code Ann. § 70-25-101(4) |
| `edu-deposit-on-sale-mt` | Security Deposit | `security-deposit-on-sale` | REQUIRED | — | Mont. Code Ann. § 70-24-304(1) |
| `edu-deposit-escheat-mt` | Security Deposit | `deposit-escheat` | RECOMMENDED | — | Mont. Code Ann. § 70-25-202(1)(c) |
| `edu-holding-deposit-mt` | Security Deposit | `holding-deposit` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-24-302(2) |
| `edu-habitability-mt` | Landlord Responsibilities | `landlord-maintenance` | REQUIRED | — | Mont. Code Ann. § 70-24-303(1)(a) |
| `edu-tenant-repair-remedies-mt` | Landlord Responsibilities | `tenant-repair-remedies` | RECOMMENDED | — | Mont. Code Ann. § 70-24-406(1)(a) |
| `edu-tenant-statutory-duties-mt` | Tenant Responsibilities | `tenant-statutory-duties` | RECOMMENDED | — | Mont. Code Ann. § 70-24-321(1)(a) |
| `edu-smoke-co-detectors-mt` | Building & Safety | `alarm-duties` | REQUIRED | — | Mont. Code Ann. § 70-24-303(1)(g) |
| `edu-no-security-device-rule-mt` | Building & Safety | `security-devices` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. §§ 70-24-312(5) |
| `edu-landlord-entry-mt` | Access & Entry | `landlord-entry` | REQUIRED | — | Mont. Code Ann. § 70-24-312(1) |
| `edu-municipal-utility-lien-mt` | Tenant Responsibilities | `municipal-utility-lien` | RECOMMENDED | — | Mont. Code Ann. § 7-13-4309(2) |
| `edu-no-utility-billing-rule-mt` | Landlord Responsibilities | `utility-submetering-disclosure` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. §§ 70-24-411 |
| `edu-lease-copy-mt` | Notices & General | `lease-copy` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-24-311(2) |
| `edu-nonpayment-notice-mt` | Default & Termination | `nonpayment-notice` | REQUIRED | — | Mont. Code Ann. § 70-24-422(2) |
| `edu-noncompliance-cure-mt` | Default & Termination | `cure-and-eviction-grounds` | REQUIRED | — | Mont. Code Ann. § 70-24-422(1)(a) |
| `edu-dangerous-activity-eviction-mt` | Default & Termination | `expedited-criminal-eviction` | REQUIRED | — | Mont. Code Ann. § 70-24-321(3) |
| `edu-no-dv-termination-mt` | Default & Termination | `dv-lease-termination` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-24-111(1) |
| `edu-for-cause-eviction-mt` | Default & Termination | `for-cause-eviction` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. §§ 70-24-201(2)(f) |
| `edu-end-of-term-mt` | Default & Termination | `termination-notice` | REQUIRED | — | Mont. Code Ann. § 70-24-205 |
| `edu-holdover-rate-mt` | Default & Termination | `holdover-rate` | RECOMMENDED | — | Mont. Code Ann. § 70-24-429(2) |
| `edu-abandonment-mitigation-mt` | Default & Termination | `abandonment-and-mitigation` | REQUIRED | — | Mont. Code Ann. § 70-24-426(1) |
| `edu-abandoned-property-notice-mt` | Default & Termination | `abandoned-property` | REQUIRED | — | Mont. Code Ann. § 70-24-430(9) |
| `edu-post-eviction-property-mt` | Default & Termination | `post-eviction-property` | RECOMMENDED | — | Mont. Code Ann. § 70-24-430(1)(a) |
| `edu-casualty-mt` | Default & Termination | `casualty-termination` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-24-409(1) |
| `edu-retaliation-mt` | Default & Termination | `retaliation` | PROHIBITED | — | Mont. Code Ann. § 70-24-431(1) |
| `edu-self-help-eviction-mt` | Default & Termination | `self-help-eviction` | PROHIBITED | — | Mont. Code Ann. § 70-24-428 |
| `edu-no-landlord-lien-mt` | Default & Termination | `landlord-lien` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 71-3-1401 |
| `edu-eviction-process-mt` | Default & Termination | `eviction-process` | RECOMMENDED | — | Mont. Code Ann. § 70-24-427(1) |
| `edu-eviction-record-sealing-mt` | Default & Termination | `eviction-record-sealing` | RECOMMENDED | — | CONFIRMED ABSENT;  |
| `edu-unauthorized-occupant-mt` | Default & Termination | `unauthorized-occupant-removal` | RECOMMENDED | — | Mont. Code Ann. § 70-24-113(1) |
| `edu-servicemember-mt` | Default & Termination | `servicemember-rights` | RECOMMENDED | — | Mont. Code Ann. § 10-1-905(1) |
| `edu-tenant-death-mt` | Default & Termination | `tenant-death` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-24-430 |
| `edu-landlord-self-cure-mt` | Default & Termination | `landlord-self-cure` | RECOMMENDED | — | Mont. Code Ann. § 70-24-425 |
| `edu-rent-into-court-mt` | Default & Termination | `rent-into-court-counterclaim` | RECOMMENDED | — | Mont. Code Ann. § 70-24-421(1) |
| `edu-sale-management-change-mt` | Notices & General | `sale-or-management-change` | REQUIRED | — | Mont. Code Ann. § 70-24-301(2) |
| `edu-foreclosure-mt` | Notices & General | `foreclosure` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 71-1-319 |
| `edu-no-conversion-notice-mt` | Notices & General | `conversion-notice` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-23-1101 |
| `edu-prohibited-terms-mt` | Compliance & Prohibited Terms | `prohibited-lease-terms` | PROHIBITED | — | Mont. Code Ann. § 70-24-202(1) |
| `edu-knowing-use-penalty-mt` | Compliance & Prohibited Terms | `knowing-use-penalty` | PROHIBITED | — | Mont. Code Ann. § 70-24-403(2) |
| `edu-attorney-fees-mt` | Compliance & Prohibited Terms | `attorney-fees` | RECOMMENDED | — | Mont. Code Ann. § 70-24-442(1) |
| `edu-unconscionability-mt` | Compliance & Prohibited Terms | `unconscionability` | RECOMMENDED | — | Mont. Code Ann. § 70-24-404(1) |
| `edu-consumer-protection-mt` | Compliance & Prohibited Terms | `consumer-protection-act` | RECOMMENDED | — | Mont. Code Ann. § 30-14-102(8)(a) |
| `edu-scope-mt` | Compliance & Prohibited Terms | `scope` | RECOMMENDED | — | Mont. Code Ann. § 70-24-104(1) |
| `edu-notice-service-mt` | Notices & General | `notice-delivery-methods` | REQUIRED | — | Mont. Code Ann. § 70-24-108(1)(a) |
| `edu-waiver-by-acceptance-mt` | Rent & Payment | `waiver-by-acceptance` | RECOMMENDED | — | Mont. Code Ann. § 70-24-423 |
| `edu-statute-of-frauds-mt` | Notices & General | `statute-of-frauds-lease-term` | RECOMMENDED | — | Mont. Code Ann. § 28-2-903(1)(d) |
| `edu-double-letting-mt` | Landlord Responsibilities | `double-letting` | PROHIBITED | — | Mont. Code Ann. § 70-26-101 |
| `edu-fair-housing-mt` | Compliance & Prohibited Terms | `fair-housing` | PROHIBITED | — | Mont. Code Ann. § 49-2-305(1)(a) |
| `edu-no-source-of-income-mt` | Compliance & Prohibited Terms | `source-of-income` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 49-2-305(1) |
| `edu-assistance-animals-mt` | Pets | `assistance-animal-accommodation` | REQUIRED | — | Mont. Code Ann. § 70-24-114(1) |
| `edu-service-animal-misrepresentation-mt` | Pets | `service-animal-misrepresentation` | RECOMMENDED | — | Mont. Code Ann. § 49-4-221(1) |
| `edu-cannabis-mt` | Rules & Regulations | `cannabis` | CONSTRAINED | — | Mont. Code Ann. § 16-12-108(6) |
| `edu-firearms-mt` | Rules & Regulations | `firearms` | PROHIBITED | — | Mont. Code Ann. § 70-24-110 |
| `edu-towing-mt` | Parking & Storage | `towing` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 61-12-401(1) |
| `edu-stigmatized-property-mt` | Disclosures | `stigmatized-property` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 37-51-102(1)(b) |
| `edu-meth-disclosure-mt` | Disclosures | `meth-disclosure` | REQUIRED | — | Mont. Code Ann. § 75-10-1305(1) |
| `edu-no-radon-disclosure-mt` | Disclosures | `radon-disclosure` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 75-3-606 |
| `edu-no-bed-bug-rule-mt` | Disclosures | `bed-bug-disclosure` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-20-502 |
| `edu-no-flood-disclosure-mt` | Disclosures | `flood-disclosure` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 76-3-504 |
| `edu-no-sex-offender-rule-mt` | Compliance & Prohibited Terms | `sex-offender-occupancy` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. §§ 46-23-503 |
| `edu-no-immigration-rule-mt` | Compliance & Prohibited Terms | `immigration-status` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 2-1-602 |
| `edu-foreign-adversary-mt` | Compliance & Prohibited Terms | `foreign-ownership` | PROHIBITED | — | Mont. Code Ann. § 35-30-103(1)(a) |
| `edu-no-emergency-assistance-rule-mt` | Compliance & Prohibited Terms | `emergency-assistance-right` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 69-4-523 |
| `edu-local-regulation-mt` | Other / Miscellaneous | `landlord-registration` | RECOMMENDED | — | Mont. Code Ann. § 7-1-111(13)(a) |
| `edu-no-rental-inspection-rule-mt` | Building & Safety | `rental-inspection` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 7-1-111(13) |
| `edu-guest-definition-mt` | Rules & Regulations | `guest-rights` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-24-103(8) |
| `edu-political-signs-mt` | Rules & Regulations | `tenant-display-rights` | RECOMMENDED | — | Mont. Code Ann. § 70-1-522(1) |
| `edu-plain-language-mt` | Compliance & Prohibited Terms | `plain-language` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-24-430(9) |
| `edu-no-lease-completeness-rule-mt` | Compliance & Prohibited Terms | `lease-completeness` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-24-301(1) |
| `edu-no-camera-rule-mt` | Building & Safety | `tenant-security-cameras` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-24-312(4) |
| `edu-no-ev-charging-rule-mt` | Parking & Storage | `ev-charging` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 7-1-111(30) |
| `edu-tenant-organizing-mt` | Other / Miscellaneous | `tenant-right-to-organize` | PROHIBITED | — | Mont. Code Ann. § 70-24-314 |
| `edu-quiet-possession-mt` | Notices & General | `quiet-possession` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-17-203 |
| `edu-nuisance-mt` | Compliance & Prohibited Terms | `nuisance` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. §§ 70-24-321(1)(f) |
| `edu-no-statutory-forms-mt` | Default & Termination | `statutory-forms` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 70-16-703(1) |
| `edu-occupancy-mt` | Tenant Responsibilities | `permitted-occupants` | RECOMMENDED | — | CONFIRMED ABSENT; Mont. Code Ann. § 49-2-305(1) |

## 4. Layout and placement (rule 40)
Batteries 3 (type size, bold, capitals, conspicuous; 56 hits), 4 (separate document, writing, instrument, statement, form, first page; 105 hits) and 5 (prescribed statements; 3 hits) ran over the whole code in Step C, before drafting. No type-size, boldface, capitals or first-page rule reaches a residential lease (the fmt-type hits are equine and amusement waivers, the Human Rights Commission's posting authority, service-animal-in-training labels, laundry notices, and the 'conspicuous' posting and location rules below). Nothing competes for the same place.

| Item | Rule | Where it goes |
|---|---|---|
| Manager and owner names and addresses | Mont. Code Ann. § 70-24-301(1): 'in writing at or before the commencement of the tenancy' | Lease clause `landlord-disclosure-mt` |
| Condition statement | Mont. Code Ann. § 70-25-206(1)-(2): 'a separate written statement', signed by the landlord or agent, 'in conjunction with execution of a lease or creation of a tenancy' | Separate document; `existing-condition-mt` records its delivery; `edu-condition-statement-mt` |
| Tenant repair/maintenance agreement | Mont. Code Ann. § 70-24-303(4)(a): 'a separate writing signed by the parties and supported by adequate consideration' | Separate signed writing; `maintenance-allocation-mt` (how the builder prints it: §10) |
| Meth or fentanyl contamination notice | Mont. Code Ann. § 75-10-1305(3): 'before agreement to a lease' | Separate written notice before signing; `edu-meth-disclosure-mt` |
| Mold disclosure statement | Mont. Code Ann. § 70-16-703(1): on 'at least one document, form, or application executed prior to or contemporaneously with' the lease; verbatim; tenant signs a copy | Lease clause `mold-disclosure-mt` (statement optional; known-mold disclosure required when the landlord knows) |
| Plain-language notification of property rules | Mont. Code Ann. § 70-24-430(9): 'as a notification upon termination' | Separate notification at termination; `edu-abandoned-property-notice-mt` |
| Application-fee cost allocation | Mont. Code Ann. § 37-56-109(2): written notice 'at the time the application fee is collected' | Application paperwork; `edu-application-fee-mt` |
| Notice of intent to enter | Mont. Code Ann. § 70-24-312(3)(b): conspicuously posted on the main entry door counts | Notice method; `landlords-access-mt` |
| Cleaning notice to a tenant who left without notice | Mont. Code Ann. § 70-25-201(3)(c): a copy 'in a conspicuous location in the rental unit' plus e-mail, phone or text | Notice method; `security-deposit-use-mt` |
| Federal lead disclosure | 42 U.S.C. § 4852d; 40 C.F.R. § 745.113 | Shared `lead-based-paint` (tagged) |

## 5. Dormant rows resolved (rule 25)
No MT rows existed. The blank-states parent `security-deposit-return` is resolved by `security-deposit-return-mt` (rule 25 family).

## 6. Decisions

### 6.1 Optional clauses found (rule 54)
**Offered as new MT clauses (13):**
1. `lease-end-continuation-mt`: the rental agreement may set a 'default extension period' (Mont. Code Ann. § 70-24-205); month-to-month first.
2. `electronic-notice-mt`: e-mail notice exists only if the agreement lets a party elect it (Mont. Code Ann. §§ 70-24-202(4), 70-24-108(1)(c)) — an identification trigger.
3. `rules-mt`: rules bind only if they meet § 70-24-311 and the tenant had notice.
4. `maintenance-allocation-mt`: § 70-24-303(3)-(4) tenant tasks by separate signed writing.
5. `cannabis-cultivation-mt`: cultivation may be banned (Mont. Code Ann. § 16-12-108(6)); growing needs the owner's written permission (§ 16-12-106(1)(c)(iii)).
6. `firearm-discharge-mt`: discharge may be prohibited except in self-defense (Mont. Code Ann. § 70-24-110).
7. `criminal-activity-mt`: § 70-24-321(3) dangerous activity, 3-day no-cure (§ 70-24-422(4)).
8. `casualty-termination-mt`: landlord's casualty termination, left to contract (§ 70-24-409 gives only tenant rights).
9. `tenant-caused-damage-mt` (54t): every abatement or exit right the clause touches has its own fault exception (§§ 70-24-406(1)(a)(iii), 70-24-408(3), 70-24-409(2)); repair-and-deduct and damages for the landlord's breach have none and are untouched.
10. `tenant-death-contact-mt`: an emergency and death contact, without authority to remove belongings.
11. `mold-disclosure-mt`: the § 70-16-703(1) statement is optional and is the condition of the § 70-16-703(3) immunity (the known-mold disclosure is required when it applies).
12. `residential-use-only-mt`: the landlord's reasonable home-business rules (§ 70-24-321(1)(g)).
13. `early-termination-mt`: an agreed termination amount, at most one month's rent (§ 70-24-201(2)(f)).

**Statutory options carried by tagged rows:** extended-absence notice (§ 70-24-322(2), `extended-absence-notice-ks`); the guest period (§ 70-24-103(8), `guest-policy-day-limit`); a late fee 'as agreed' (§ 70-24-103(14), `late-fee`); the time and place of rent (§ 70-24-201(2)-(3), `rent-payment`); garbage removal 'unless otherwise provided in a rental agreement' (§ 70-24-303(1)(e), `utilities-responsibility`).

**Lawful but not offered, each with an education row:**
- A contract interest rate on unpaid amounts (Mont. Code Ann. §§ 31-1-106, 31-1-107): `edu-legal-interest-mt`.
- A premium stipulated holdover rate (§ 28-2-721 makes it void unless actual damage is impracticable to fix): `edu-holdover-rate-mt`; `holdover-mt` uses daily rent.
- A rent-escalation clause in a fixed term (§ 70-24-201(1) allows agreed terms): `edu-rent-increase-notice-mt`.
- A death-contact authorization to remove belongings and receive the deposit (`deceased-resident-contact-nm` model): not offered because § 70-24-430 and estate law govern a decedent's belongings; `edu-tenant-death-mt`.

**Barred or unsupported (no clause):** a jury waiver (§ 28-2-708; § 70-24-202(1); Montana Justice and City Court Rules of Civil Procedure, Rule 15); a notice-to-quit or notice-period waiver (§ 70-24-202(1)); a homestead or exemption waiver (no statutory support); an agent to accept service of process (§ 28-2-709(1)); collection, eviction or notice-service fees (no statute; § 70-25-201(4) limits deposit deductions; § 70-24-442 governs fees in actions); nonrefundable deposits or fees (§ 70-25-101(4)); a fixed cleaning charge (§ 70-25-201(1), (3)); a shorter entry notice by agreement (§ 70-24-312(3) has no 'unless otherwise agreed'); a firearm-possession ban (§ 70-24-110); a ban on non-smoked marijuana consumption (§ 16-12-108(6)).

### 6.2 Questions asked of Taylor (rule 76)
None. Every call was legal or drafting and within Claude's remit (rule 76); the reasoning is in §6.3.

### 6.3 Drafting and legal decisions made by Claude (recorded, not asked)
1. **Tenant chores (kickoff lead 3; rule 48).** Every past edition read (1997, 2001, 2007, 2013, 2015, 2017, 2019) limited both § 70-24-303(3) and (4) to 'a landlord and tenant of a one-, two-, or three-family residence'; the 2023 edition, after 2021 Mont. Laws ch. 2, § 10 and ch. 536, § 4, has the phrase in neither. So Montana never had the uniform act's single-family split: both subsections always covered the same dwellings. (3) allows a good-faith written agreement for the (1)(e) and (1)(f) duties and 'specified repairs, maintenance tasks, alteration, and remodeling'; (4) allows an agreement for 'specified repairs, maintenance tasks, alterations, or remodeling only if' it is a separate signed writing with adequate consideration, the work does not cure a code violation and the landlord's duties to other tenants are not diminished. Giving effect to both (Mont. Code Ann. § 1-2-101), (4)'s 'only if' conditions govern specified repairs and tasks in every dwelling and (3) alone governs the (1)(e)-(f) duties. Outcome: **Oklahoma treatment** — `landscaping-irrigation` and `snow-removal` not tagged; `maintenance-allocation-mt` offered as the strictest-reading separate agreement; `utilities-responsibility` tagged with the (3) note. No case found (§1.4).
2. **Vaping (§ 16-12-108(6)).** Chapter 16-12 distinguishes smoking from vaping; a lease ban on vaping marijuana may ban consuming it 'by means other than smoking', so `smoking-policy-mt` bans vaping only of tobacco or nicotine (the `smoking-policy-mo` precedent).
3. **Mid-term rules (§ 70-24-311(3)).** The subsection times substantial changes only for week-to-week and month-to-month tenancies; `rules-mt` makes a substantial mid-term change during a fixed term bind only with the tenant's written agreement.
4. **Early termination (§ 70-24-201(2)(f)).** The option charges the agreed fee (at most one month's rent) plus rent to the notice date; rent until re-letting is reserved for a tenant who leaves without using the option (redrafted after independent check round 1).
5. **Change of terms (§ 70-26-109).** Chapter 26 sections that do not apply to ch. 24 tenancies say so (§§ 70-26-202, -203(2), -204, -205(2), -206(3)); § 70-26-109 does not, and ch. 24 has no rent-increase section, so the 15-day month-to-month rule is stated for ch. 24 tenancies (`edu-rent-increase-notice-mt`; Proposed SOP change 5).
6. **Property notification at termination (§ 70-24-430(9)).** Treated as a separate notification at termination, not satisfied by the lease clause.
7. **Deposit deadline exception (§ 70-25-202(2)).** The clause uses the narrower enrolled-text reading ('a pending claim for actual damages') so it never excuses a deadline the compiled text would not (§1.2).
8. **Dangerous activity (§ 70-24-321(3)(e)).** 'any activity that is otherwise prohibited by law' is read as an example of activity creating a reasonable potential of damage or injury, not as making every unlawful act a 3-day ground.
9. **Foreign adversaries (§ 35-30-103).** 'an entity provided for in this title' is read as reaching only Title 35 business entities.
10. **Political signs (§ 70-1-522).** The statute protects the owner's authorization; a landlord forbidding signs on its own property is not read as covered.
11. **Hotelkeepers' lien (§ 71-3-1401).** Not treated as reaching ch. 24 tenancies.

## 7. Open items (none blocking)
1. **How the builder prints a separate-writing row** (`maintenance-allocation-mt`, and the AZ, NM, IA and ND equivalents): an app question for Claude Code (rule 10; §10).
2. **2025 Mont. Laws ch. 656, 'for actual damages':** strike-through not confirmed from the PDF's drawing marks; the row takes the safer reading (§1.2). Boundary: enrolled text by pdf.js and the compiled 2025 code only.
3. **Portal access rules, Section 4.30:** two undated versions; the row holds under both. Boundary: the two courts.mt.gov files only.
4. **§ 70-24-303 changeover** (January 2, 2031): for the legal watch.
5. **Case-law questions** listed in §1.4 as not searched.
6. **Local ordinances** (Missoula, Bozeman, Billings): flagged, not read (rule 3).

## 8. Integrity checks on the delta
Run by `work/check.py` on the delivered file:
- PASS utf-8 without BOM
- PASS header identical to master
- PASS CRLF: the file round-trips byte-identical through a CRLF csv writer (163 CRLF, 0 bare LF)
- PASS 17 columns
- PASS ids unique
- PASS new rows are MT-only
- PASS tagged rows: only change is states+MT, notes appended, last_checked
- PASS tagged rows active in master
- PASS all active
- PASS all VERIFIED
- PASS rule_type valid
- PASS content_type valid
- PASS clause groups in app list
- PASS education groups in app list
- PASS supersedes resolve to master rows
- PASS topic keys exist in the topic reference
- PASS basis column (rule 55)
- PASS new notes start MT:
- PASS tag notes' MT addition starts 'MT:'
- PASS every MT note ends with the section-open line
- PASS dates
- PASS choice_group/is_default blank on new rows
- PASS no short-form code cites
- PASS no other-state prefixes
- PASS session-law cite format
- PASS constitution cite format
- PASS every cited code section exists in the saved corpus
- PASS no cited section is repealed
- PASS no bracket next to a variable (rule 60)
- PASS variables known to the builder
- PASS backtick references resolve to active rows
- PASS mold statement verbatim (rule 59)
- PASS quoted statute fragments found in corpus
- PASS other states unchanged after merge
- PASS no superseded parent is also tagged MT
- Counts: 162 rows (44 tagged, 118 new); merged with the master 2817 rows, 2695 active; MT active 69 lease clauses and 93 education rows; 142 cited code sections, all present in the saved corpus and none repealed; no same-topic clause pairs in MT; variables used: `{{end_date}}`, `{{nsf_fee}}`, `{{pet_deposit}}`, `{{pet_rent_amount}}`, `{{security_deposit}}` (all already in the builder or library).
- Backtick references to rows not tagged MT are provenance or model pointers (for example "Replaces the base `holdover`"), not coverage claims; every coverage pointer names an MT row (rule 63).
- Basis (rule 79): 0 of 118 new rows record no basis; every tagged row's MT note names its controlling text or absence battery.

## 9. Propagation notes (rule 62)
None. No shared row's text was edited; the 44 tagged rows changed only by adding `MT` to `states`, an appended `MT:` note and `last_checked`.

## 10. Findings for other states or the product (flagged, not fixed)
1. **Builder caps and inputs for Montana:** `{{nsf_fee}}` must not exceed $30 (Mont. Code Ann. § 27-1-717(2)); the `early-termination-mt` fee is hand-filled and must not exceed one month's rent (§ 70-24-201(2)(f)). **No new `{{variables}}`** were created.
2. **Separate-writing rows:** `maintenance-allocation-mt` (and `-az`, `-nm`, `-ia`, `-nd`) are LEASE_CLAUSE rows whose instruction says they are not a section of the lease; please confirm the builder prints them as a separately signed addendum (rule 10).
3. **Stale or odd cross-references (rule 77):** § 70-24-103(15)(d) says other payment forms 'must comply with 70-24-203', which concerns rent free of the § 70-24-303 obligations; the intended pointer is probably § 70-24-201(4) (payment-type fees). § 70-25-202(1)(a)(ii) says the list is noticed under '70-24-108 or 70-33-106' while (1)(b)(ii) says '70-24-108 and 70-33-106'.
4. **Legal watch:** § 70-24-303 temporary version ends January 1, 2031; 2025 Mont. Laws ch. 656's 'for actual damages' (§1.2); the two versions of portal rule Section 4.30; § 37-56-109 applies to fees collected on or after October 1, 2025.
5. **Citation format gap:** the kickoff has no format for the courts' portal access rules; rows use 'Rules for Access to the Trial Court Public Record Portal, Section 4.30'.
6. **Cross-state flag (shared `smoking-policy`):** it bans 'vaping' of any kind; in states whose law protects non-smoked cannabis consumption under a lease (Montana § 16-12-108(6); Missouri's constitution), that reaches protected conduct. MO and MT have their own rows; other states with similar cannabis lease limits may need the same check.
7. **Cross-state flag (shared `existing-condition`):** its 'good order and repair' acknowledgment may stand in for a landlord-signed separate condition statement where a state requires one, as Montana does.
8. **University housing:** Montana's act excludes all Montana university system housing (§ 70-24-104(1)); the real lease (§15) is therefore a weaker lead.

## 11. Deliverables
- `lease-clauses-MT-delta.csv` (162 rows, sha256 d764266beede53b93f645124fecf4e44efd6cbf67d20449afac1b67bf3bf9bc6) and this log, sent to Taylor in this chat.
- Saved in Taylor's Downloads folder (Taylor approved): `mt-mca-2025-corpus.json` (saved as `2b4b1617-…tmp`), `mt-const.json` (as `35fb7187-…tmp`), `mt-70-24-303-editions.json` (as `f560ed13-…tmp`), `mt-2025-session-laws.json`, `mt-2025-session-chapters.json`, `mt-court-access-rules.json`, `mt-real-lease-msu-usa-2026-27.txt` (as `45484e55-…tmp`); hashes in `sources/registry.tsv`.

## 12. Kickoff leads — what each turned out to be
1. **Chs. 24 and 25 whole:** read (§14). Ch. 33 is out of scope; where ch. 25 cross-refers to it (§§ 70-25-102, 70-25-201(3)(b), 70-25-202(1)(a)(ii)), the ch. 24 rule is the one stated.
2. **Temporary and future-dated versions:** only § 70-24-303 among cited sections; both versions stated (§1.2).
3. **Tenant chores:** Oklahoma treatment (§6.3 item 1).
4. **Banned terms (§ 70-24-202):** `edu-prohibited-terms-mt`, `edu-knowing-use-penalty-mt`; exculpation-free variants tagged; `notices` and `electronic-signatures` checked against the e-mail rule (their tag notes).
5. **Deposits:** no cap or interest; cleaning notice and 24 hours; 30/10-day list and refund; forfeiture; separate condition statement; pet deposits and fees presumed deposits; prepaid rent treated with care (`edu-deposit-last-month-mt`).
6. **Notices and termination:** 3/14/5/3-day grounds and cures, 3-day nonpayment, 30/7-day periodic, § 70-24-108 service (`edu-noncompliance-cure-mt`, `edu-nonpayment-notice-mt`, `edu-notice-service-mt`).
7. **Access:** `landlords-access-mt` (24 hours unless impracticable, door posting, exclusive list).
8. **Late fees and rules:** no cap; `rules-mt` with § 70-24-311.
9. **Eviction and court rules:** answer in 5 business days, hearing within 10 (5), writ within 5 business days; no pre-filing condition; no sealing (`edu-eviction-process-mt`, `edu-eviction-record-sealing-mt`).
10. **Local preemption:** § 7-1-111(13), (26) for self-government units (`edu-rent-control-mt`, `edu-local-regulation-mt`).
11. **Fair housing:** § 49-2-305 classes and exemptions, Mont. Const. art. II, § 4; ESA documentation (§ 70-24-114); no source-of-income class.
12. **Abandonment, property, death, retaliation:** §§ 70-24-426, 70-24-430 (and the (9) notification), no death statute, § 70-24-431.
13. **2025 acts:** §1.2.

## 13. Independent check
A separate general-purpose agent, which had not seen the drafting, checked the delta against the saved sources only (`work/check-round1.md`, `work/check-round2.md`).
- **Round 1 (all 162 rows):** 2 ERROR, 12 FIX, 16 NOTE. ERRORs: `edu-eviction-process-mt` named small claims court and omitted municipal courts (§ 25-35-502(1); § 3-6-103(3)); `edu-foreclosure-mt` claimed no post-sale tenant statute (§§ 71-1-319, 25-13-822 found; the battery required 'foreclos-'). FIXes included 'the greater of' for the 'not more than ... whichever is greater' measures (four rows and a tag note), overstatements in `edu-tenant-repair-remedies-mt` and `edu-habitability-mt`, the two portal-rule versions, the `notices`/`electronic-notice-mt` interplay and a specified-method carve-out, `maintenance-allocation-mt`'s wording, the `due-at-signing` prepaid-rent note and § 35-30-103's homestead definition. All applied; NOTEs applied except `maintenance-allocation-mt`'s basis (kept SERVES_LANDLORD, as the AZ and NM rows).
- **Round 2 (33 rows edited):** 0 ERROR, 1 FIX (how `maintenance-allocation-mt` prints, routed to Claude Code, §10), 2 NOTE (fee due date added to `early-termination-mt`; basis kept).
- **Round 3 (2 rows edited):** 0 ERROR, 0 FIX, 1 NOTE (closed).
- **Round 4 (5 rows edited after round 3 to add the Constitution screen: `edu-fair-housing-mt`, `edu-no-source-of-income-mt`, `edu-firearms-mt`, `edu-no-camera-rule-mt`, `edu-cannabis-mt`):** 0 ERROR, 0 FIX, 2 NOTE (the art. II, § 4 reach stated as unsettled in the body; the source-of-income absence limited to statutes), both applied. **Round 5** (those 2 rows): 0 ERROR, 0 FIX, 1 NOTE (note wording), applied. **Round 6** (1 row): 0 ERROR, 0 FIX, 0 NOTE; the checker confirmed by diff that the rows changed since round 1 are exactly the 37 it re-checked. Open only: the builder print question (§10 item 2).

## 14. Statute walk (gap-discovery source 1)
Chapter 24's index has 62 entries (53 live sections; the rest are reserved ranges or repealed); chapter 25 has 9 sections. Diffed against every citation in the MT rows (`work/cited-sections.txt`): **every ch. 25 section is cited; ch. 24 sections not cited:** § 70-24-101 (short title); § 70-24-106 (construction against implicit repeal); §§ 70-24-313, -315, -432, -436 (repealed by 2007 Mont. Laws ch. 267); the reserved ranges (§§ 70-24-306 to -310, -316 to -320, -412 to -420, -433 to -435, -437 to -440); § 70-24-402 (settlement of a disputed claim by agreement; no lease consequence). Found by the walk and now cited: § 70-24-314 (resident associations, `edu-tenant-organizing-mt`), § 70-24-105 (supplementary principles) and § 70-24-109 (good faith) (`edu-scope-mt`). **One level down:** each cited ch. 24 and ch. 25 section was read whole and its subsections checked against the rows; the subsections no row cites are definitions and procedural details with no lease or landlord-duty consequence. **General chapter (rule 30):** ch. 26 read whole; §§ 70-26-101 (double letting), 70-26-102 (transferee's remedies), 70-26-104 (forward proceedings) and 70-26-109 (change of terms) apply to ch. 24 tenancies and are cited; §§ 70-26-202 to -206 exclude ch. 24 arrangements by their own terms; § 70-26-103 (attornment) and § 70-26-110 (75-year city lots) do not bear on residential leases. Ch. 27 (forcible entry and detainer) applies to ch. 24 tenancies only for forcible entry and detainer (§ 70-27-101(1)).

## 15. Real-lease comparison (gap-discovery source 2)
**Lease:** Montana State University, University Student Housing, "2026-2027 Contract for University Student Apartments" (effective August 1, 2026) and the University Student Housing Community Standards, montana.edu/housing/apartments/contract_and_policies.html; saved text `mt-real-lease-msu-usa-2026-27.txt` (sha256 c9a933c6…0d76). **Why weaker:** no Montana Association of Realtors or apartment-association form is free; Montana's act excludes 'all housing provided by the Montana university system' (§ 70-24-104(1)), so the contract is drafted outside ch. 24 and is a lead about wording only. It is MSU's own contract, not a relabelled template. No copyrighted text is reproduced here.

### 15.1 Provision map
| MSU provision | Library answer for Montana | Lead? |
|---|---|---|
| Inability to deliver possession (no rent until possession) | `possession-delay-ca` tag (§ 70-24-405) | No change |
| Contract period: month-to-month until notice; 30-day notice to be released | `periodic-tenancy-notice-mt`, `lease-end-continuation-mt` | No change |
| $300 application fee retained as security deposit; partial refund on cancellation | `edu-holding-deposit-mt` (§ 70-24-302(2)), `edu-application-fee-mt`, `edu-deposit-rules-mt` | Confirms the deposit-presumption point |
| Rent due on the 1st; daily proration | `rent-payment` tag; § 70-24-201(2)(d) | No change |
| $50 late fee on the 6th if $100 or more is in default | `late-fee` tag, `edu-late-fee-mt` (no cap; § 28-2-721 caution) | No change |
| Rent increase during the term on 30 days' notice | `edu-rent-increase-notice-mt` (ch. 24 tenancies: § 70-26-109; fixed term only by agreement) | Not adopted (university housing is outside ch. 24) |
| Refunds after deductions for rent, utilities, cleaning, damage | `security-deposit-use-mt`, `security-deposit-return-mt` | Cleaning notice step added (§ 70-25-201(3)) |
| Collection fees up to 33% and attorney fees | Not offered (§6.1); `edu-attorney-fees-mt` (§ 70-24-442) | No |
| Occupancy limits by building and fire code | `permitted-occupants` tag, `edu-occupancy-mt` | No change |
| Move-in inspection form signed by the student within 5 business days | `existing-condition-mt`, `edu-condition-statement-mt` (Montana requires a landlord-signed statement at signing) | Difference noted |
| Check-out charges against the move-in record | `security-deposit-use-mt` | No change |
| No commercial use | `residential-use-only-mt` (limited business with consent, § 70-24-321(1)(g)) | Difference noted |
| Inspections on 24 hours' notice; relocation for administrative reasons | `landlords-access-mt` (exclusive access list) | No change |
| Notices by e-mail, text or door posting | `electronic-notice-mt` (election only; § 70-24-202(4)), `edu-notice-service-mt` | Difference noted (text messages are not a § 70-24-108 method) |
| Governing law; Gallatin County district court venue | `governing-law` tag | No change |
| Severability | `severability` tag | No change |
| Community Standards: no smoking or vaping devices | `smoking-policy-mt` | Difference noted (§ 16-12-108(6)) |
| No pets except service or approved assistance animals | `pet-policy-mt`, `edu-assistance-animals-mt` | No change |
| Guests registered and hosted; quiet hours | `guest-policy`, `guest-policy-day-limit`, `no-disturbance` tags | No change |
| No grills or open flames; hallway storage limits | `fire-safety-grilling`, `common-area-use` tags | No change |

### 15.2 What it produced
No new row; it confirmed the deposit-presumption, condition-statement, notice-method and home-business differences already handled. Two MSU terms would be unlawful in a ch. 24 lease (a ban on all vaping, notices by text message) and are not used.

## 16. Landlord-scenario screen (gap-discovery source 3)
68 scenarios (`work/scenarios.txt`), Claude-generated from application to move-out, sale and foreclosure (AZ §18.1 / NM §16 model) plus Montana-specific ones (ESA documentation, e-mail opt-in, university housing, squatting, National Guard orders, firearms, marijuana). Each was run against the final rows:
1. Applicant charged a $50 application fee; landlord manages 10 units; applicant not chosen → `edu-application-fee-mt`
2. Applicant charged an application fee by an owner who rents only 3 units → `edu-application-fee-mt` (owner-managers of four or more units: follow the refund rule)
3. Landlord takes a holding deposit to take the unit off the market → `edu-holding-deposit-mt`
4. Applicant with a housing voucher → `edu-no-source-of-income-mt`
5. Landlord asks about immigration status → `edu-no-immigration-rule-mt`, `edu-fair-housing-mt`
6. Applicant with a criminal record → `edu-tenant-screening-mt`, `edu-fair-housing-mt`
7. Request for an emotional support animal; landlord suspects online documentation → `edu-assistance-animals-mt`, `assistance-animal-accommodation` tag
8. Owner lives out of state → `landlord-disclosure-mt` (agent for service and notices)
9. Who must the lease name as manager and agent → `landlord-disclosure-mt`
10. Lease signed electronically → `electronic-signatures` tag (UETA)
11. Landlord requires every applicant to give an e-mail address → `edu-prohibited-terms-mt` (§ 70-24-202(4)), `electronic-notice-mt`
12. Tenant opts in to e-mail notices → `electronic-notice-mt`, `edu-notice-service-mt`
13. Tenant asks for a copy of the lease and rules → `edu-lease-copy-mt`, `rules-mt`
14. Deposit of two months' rent plus a pet deposit → `edu-deposit-rules-mt`, `edu-pet-deposit-mt`
15. Nonrefundable cleaning fee in the lease → `edu-deposit-rules-mt` (presumed a deposit)
16. Last month's rent collected at signing → `edu-deposit-last-month-mt`
17. Where to keep the deposit; interest → `edu-no-deposit-holding-rule-mt`, `edu-no-deposit-interest-mt`
18. Pre-1978 house → `lead-based-paint` tag
19. Unit not ready on the start date → `possession-delay-ca` tag
20. Move-in condition checklist → `existing-condition-mt`, `edu-condition-statement-mt`
21. Tenant pays rent by card and is charged a convenience fee → `edu-payment-method-fee-mt`
22. Tenant pays in cash and wants a receipt → `edu-rent-receipts-mt`
23. Rent five days late; late fee → `late-fee` tag, `edu-late-fee-mt`
24. Rent check bounces → `returned-payments-mt`
25. Partial payment applied to a damage bill first → `application-of-payments` tag, `edu-waiver-by-acceptance-mt`
26. Rent increase on a month-to-month tenancy → `edu-rent-increase-notice-mt`
27. Mid-term change to the house rules → `rules-mt`
28. City considering rent control → `edu-rent-control-mt`
29. Entry to fix a leak next week; tenant refuses → `landlords-access-mt`, `edu-landlord-entry-mt`
30. Burst pipe at night → `edu-landlord-entry-mt` (emergency), `edu-tenant-repair-remedies-mt`
31. Heat fails in January → `edu-habitability-mt`, `edu-tenant-repair-remedies-mt`
32. Tenant withholds rent or repairs and deducts → `edu-tenant-repair-remedies-mt`, `edu-rent-into-court-mt`
33. Tenant's guest breaks the dishwasher → `landlord-maintenance-mt`, `tenant-caused-damage-mt`
34. Duplex tenant to mow the shared lawn; single-family tenant to shovel snow → `maintenance-allocation-mt` (Oklahoma treatment, §6.3)
35. Mold found; bed bugs → `mold-disclosure-mt`, `edu-no-bed-bug-rule-mt`
36. Smoke and carbon monoxide detectors → `edu-smoke-co-detectors-mt`
37. Rekeying between tenants → `edu-no-security-device-rule-mt`
38. Landlord bills water by submeter → `edu-no-utility-billing-rule-mt`
39. Tenant leaves a city water or sewer bill unpaid → `edu-municipal-utility-lien-mt`
40. Tenant grows marijuana plants or smokes cannabis → `edu-cannabis-mt`, `smoking-policy-mt`, `cannabis-cultivation-mt`
41. Guest staying three weeks → `edu-guest-definition-mt`, `guest-policy-day-limit` tag
42. Tenant wants to sublet for the summer → `no-sublet-assign` tag
43. Inoperable car in the lot; towing → `edu-towing-mt`, `parking-vehicle-rules` tag
44. Tenant installs a satellite dish or a doorbell camera → `edu-no-camera-rule-mt`, `no-alterations` tag; satellite and telecom absent (§18.2)
45. Landlord wants to ban firearms → `edu-firearms-mt`, `firearm-discharge-mt`
46. Drug dealing or violent crime at the unit → `edu-dangerous-activity-eviction-mt`, `criminal-activity-mt`
47. Victim of partner or family member assault wants to leave early or change locks → `edu-no-dv-termination-mt`
48. Servicemember deployed → `edu-servicemember-mt`
49. Tenant wants to break the lease early → `early-termination-mt`
50. Unauthorized pet or unauthorized occupant found → `pet-policy-mt`, `edu-noncompliance-cure-mt`, `edu-unauthorized-occupant-mt`
51. Tenant breaches a lease rule (noise, damage) → `edu-noncompliance-cure-mt`, `default-by-tenant` tag
52. Rent unpaid; serving the notice → `edu-nonpayment-notice-mt`, `edu-notice-service-mt`
53. Tenant gone two weeks, rent unpaid; property left behind → `edu-abandonment-mitigation-mt`, `abandoned-property-mt`
54. Ending a month-to-month without a reason → `periodic-tenancy-notice-mt`, `edu-for-cause-eviction-mt`
55. Tenant stays after the lease ends → `holdover-mt`, `edu-holdover-rate-mt`
56. Tenant complained to the health department; landlord raises rent → `edu-retaliation-mt`
57. Landlord changes the locks to get the tenant out → `edu-self-help-eviction-mt`
58. Squatter or a guest who will not leave → `edu-unauthorized-occupant-mt`
59. Move-out cleaning charge from the deposit → `security-deposit-use-mt`
60. Deposit return deadline and delivery method → `security-deposit-return-mt`
61. Sole tenant dies → `edu-tenant-death-mt`, `tenant-death-contact-mt` (added by this screen)
62. Property sold during the tenancy; deposit transfer → `edu-sale-management-change-mt`, `edu-deposit-on-sale-mt`
63. Foreclosure of a rented home → `edu-foreclosure-mt`
64. Condominium conversion → `edu-no-conversion-notice-mt`
65. Death or crime in the unit; buyer or tenant asks → `edu-stigmatized-property-mt`, `edu-meth-disclosure-mt`
66. Fire makes the unit unlivable → `edu-casualty-mt`, `casualty-termination-mt`
67. Eviction filed; court and timing; records → `edu-eviction-process-mt`, `edu-eviction-record-sealing-mt`
68. Tenant wants to install EV charging or a solar panel → `edu-no-ev-charging-rule-mt`

The screen added `tenant-death-contact-mt` (scenario 61); every other scenario was already answered.

## 17. Outside-title search and proof of absence (gap-discovery source 4)
The whole MCA 2025 and the Constitution were loaded before the first battery (rule 35) and searched with 206 batteries (§1.3). Findings outside chs. 24-26 that reached rows:
- **Local preemption:** § 7-1-111(13), (26), (30); § 70-24-102(2)(c).
- **Contracts:** §§ 28-2-702, 28-2-708, 28-2-709, 28-2-721, 28-2-903; §§ 31-1-106, 31-1-107.
- **Consumer and electronic transactions:** §§ 30-14-102(8), 30-14-103; §§ 30-18-104, 30-18-107 (no eviction exclusion).
- **Returned checks:** § 27-1-717.
- **Fair housing and animals:** §§ 49-2-305, 49-4-214, 49-4-221; Mont. Const. art. II, § 4.
- **Cannabis and smoking:** §§ 16-12-102, 16-12-106, 16-12-108; § 50-40-103.
- **Health and property:** § 70-16-703 (mold); §§ 75-10-1305, 75-10-1306 (meth and fentanyl); § 75-3-604 and § 75-3-606 (radon, sales only); § 70-20-502 (seller disclosure, sales only); § 70-16-110 (HOA entry); § 70-1-522 (political signs).
- **Military:** §§ 10-1-902, 10-1-903, 10-1-905 (Montana National Guard only).
- **Property managers:** §§ 37-56-101, 37-56-104, 37-56-109; § 37-51-321(1)(o); § 37-51-102(1)(b).
- **Squatting and occupants:** § 45-6-206; § 45-5-513 (offender residence limits, no landlord duty).
- **Utilities and vehicles:** § 7-13-4309 (sewer and water levied as a tax); §§ 61-12-102, 61-12-401.
- **Foreclosure:** §§ 71-1-319, 25-13-822 (found by the independent check, §13).
- **Taxes, liens, unclaimed property:** § 15-68-101 (lodging tax under 30 days); § 71-3-1401 (hotelkeepers' lien); § 71-3-525 (construction liens, battery context); §§ 70-9-802, 70-9-803.
- **Foreign adversaries:** § 35-30-103.
- **Constitution (battery 206):** art. II, § 4 (individual dignity; reaches 'any person, firm, corporation'), § 10 (privacy), § 12 (bear arms), § 14 (adult age for marijuana); none addresses leases directly; their reach to private landlords is not analyzed (§1.4). No initiated amendment bearing on leases was found.
Absence records are carried by the rows and §18; every one cites its battery, hit count and positive result.

## 18. Topic reference canvass (rules 27, 36)

### 18.1 Topics answered by an MT row (149)
- `acceptable-payment-methods` (30 states): Present: `acceptable-payment-methods`, `edu-payment-method-fee-mt`
- `algorithmic-rent-setting` (19 states): Present: `edu-no-algorithmic-rent-rule-mt`
- `application-fees` (21 states): Present: `edu-application-fee-mt`
- `application-of-payments` (30 states): Present: `application-of-payments`
- `due-at-signing` (30 states): Present: `due-at-signing`
- `fees-as-rent` (22 states): Present: `edu-fees-as-rent-mt`
- `late-fee` (30 states): Present: `late-fee`, `edu-late-fee-mt`
- `rent-control` (25 states): Present: `edu-rent-control-mt`
- `rent-increase-notice` (23 states): Present: `edu-rent-increase-notice-mt`
- `rent-payment` (30 states): Present: `rent-payment`
- `rent-receipts` (16 states): Present: `edu-rent-receipts-mt`
- `rent-tax` (10 states): Present: `edu-rent-tax-mt`
- `returned-payments` (30 states): Present: `returned-payments-mt`
- `unpaid-damages-interest` (11 states): Present: `edu-legal-interest-mt`
- `waiver-by-acceptance` (14 states): Present: `edu-waiver-by-acceptance-mt`
- `condition-inspection` (22 states): Present: `edu-condition-statement-mt`
- `deposit-escheat` (16 states): Present: `edu-deposit-escheat-mt`
- `deposit-last-month-rent` (8 states): Present: `edu-deposit-last-month-mt`
- `holding-deposit` (7 states): Present: `edu-holding-deposit-mt`
- `security-deposit-cap` (24 states): Present: `edu-deposit-rules-mt`
- `security-deposit-holding` (10 states): Present: `edu-no-deposit-holding-rule-mt`
- `security-deposit-interest` (24 states): Present: `edu-no-deposit-interest-mt`
- `security-deposit-on-sale` (15 states): Present: `edu-deposit-on-sale-mt`
- `security-deposit-penalty` (14 states): Present: `edu-deposit-penalty-mt`
- `security-deposit-return` (30 states): Present: `security-deposit-return-mt`
- `security-deposit-use` (29 states): Present: `security-deposit-use-mt`
- `alterations` (30 states): Present: `no-alterations`
- `disturbance` (30 states): Present: `no-disturbance`
- `existing-condition` (30 states): Present: `existing-condition-mt`
- `extended-absence-notice` (7 states): Present: `extended-absence-notice-ks`
- `guest-rights` (2 states): Present: `edu-guest-definition-mt`
- `joint-liability` (30 states): Present: `joint-liability`
- `municipal-utility-lien` (6 states): Present: `edu-municipal-utility-lien-mt`
- `permitted-occupants` (30 states): Present: `permitted-occupants`, `edu-occupancy-mt`
- `residential-use-only` (30 states): Present: `residential-use-only-mt`
- `smoking-policy` (30 states): Present: `smoking-policy-mt`
- `sublet-assign` (30 states): Present: `no-sublet-assign`
- `tenant-forward-proceedings` (20 states): Present: `tenant-forward-proceedings-ca`
- `tenant-maintenance` (30 states): Present: `tenant-maintenance`
- `tenant-repair-agreement` (17 states): Present: `maintenance-allocation-mt`
- `tenant-statutory-duties` (7 states): Present: `edu-tenant-statutory-duties-mt`
- `utilities-responsibility` (30 states): Present: `utilities-responsibility`
- `utility-payment-evidence` (30 states): Present: `utility-payment-evidence`
- `utility-service-continuity` (30 states): Present: `utility-service-continuity`
- `alarm-duties` (29 states): Present: `edu-smoke-co-detectors-mt`
- `appliances-included` (30 states): Present: `appliances-included`
- `double-letting` (4 states): Present: `edu-double-letting-mt`
- `landlord-maintenance` (30 states): Present: `landlord-maintenance-mt`, `edu-habitability-mt`
- `quiet-possession` (18 states): Present: `edu-quiet-possession-mt`
- `security-devices` (7 states): Present: `edu-no-security-device-rule-mt`
- `services-utilities-provided` (30 states): Present: `services-utilities-provided-ks-oh`
- `tenant-repair-remedies` (15 states): Present: `edu-tenant-repair-remedies-mt`
- `tenant-screening` (13 states): Present: `edu-tenant-screening-mt`
- `utilities-paid-by-landlord` (30 states): Present: `utilities-paid-by-landlord`
- `landlord-entry` (30 states): Present: `landlords-access-mt`, `edu-landlord-entry-mt`
- `abandoned-property` (28 states): Present: `abandoned-property-mt`, `edu-abandoned-property-notice-mt`
- `abandonment-and-mitigation` (16 states): Present: `edu-abandonment-mitigation-mt`
- `attorney-fees` (17 states): Present: `edu-attorney-fees-mt`
- `casualty-termination` (29 states): Present: `casualty-termination-mt`, `edu-casualty-mt`
- `conversion-notice` (13 states): Present: `edu-no-conversion-notice-mt`
- `criminal-activity` (14 states): Present: `criminal-activity-mt`
- `cure-and-eviction-grounds` (11 states): Present: `edu-noncompliance-cure-mt`
- `default-by-tenant` (30 states): Present: `default-by-tenant`
- `dv-lease-termination` (28 states): Present: `edu-no-dv-termination-mt`
- `early-termination` (30 states): Present: `early-termination-mt`
- `eviction-process` (24 states): Present: `edu-eviction-process-mt`
- `eviction-record-sealing` (26 states): Present: `edu-eviction-record-sealing-mt`
- `expedited-criminal-eviction` (12 states): Present: `edu-dangerous-activity-eviction-mt`
- `for-cause-eviction` (26 states): Present: `edu-for-cause-eviction-mt`
- `foreclosure` (17 states): Present: `edu-foreclosure-mt`
- `holdover` (30 states): Present: `holdover-mt`
- `holdover-rate` (12 states): Present: `edu-holdover-rate-mt`
- `landlord-lien` (18 states): Present: `edu-no-landlord-lien-mt`
- `landlord-self-cure` (19 states): Present: `edu-landlord-self-cure-mt`
- `nonpayment-notice` (16 states): Present: `edu-nonpayment-notice-mt`
- `nuisance` (15 states): Present: `edu-nuisance-mt`
- `possession-delay` (30 states): Present: `possession-delay-ca`
- `post-eviction-property` (19 states): Present: `edu-post-eviction-property-mt`
- `rent-into-court-counterclaim` (2 states): Present: `edu-rent-into-court-mt`
- `rental-application-accuracy` (30 states): Present: `rental-application-accuracy`
- `retaliation` (30 states): Present: `edu-retaliation-mt`
- `self-help-eviction` (25 states): Present: `edu-self-help-eviction-mt`
- `servicemember-rights` (24 states): Present: `edu-servicemember-mt`
- `surrender-end-of-term` (30 states): Present: `surrender-end-of-term-ks-ne`
- `tenant-caused-damage` (20 states): Present: `tenant-caused-damage-mt`
- `tenant-death` (26 states): Present: `tenant-death-contact-mt`, `edu-tenant-death-mt`
- `termination-notice` (28 states): Present: `periodic-tenancy-notice-mt`, `edu-end-of-term-mt`
- `unauthorized-occupant-removal` (21 states): Present: `edu-unauthorized-occupant-mt`
- `addendum-precedence` (30 states): Present: `addendum-precedence`
- `automatic-renewal` (2 states): Present: `lease-end-continuation-mt`
- `electronic-signatures` (30 states): Present: `electronic-signatures`
- `emergency-assistance-right` (25 states): Present: `edu-no-emergency-assistance-rule-mt`
- `entire-agreement` (30 states): Present: `entire-agreement`
- `governing-law` (30 states): Present: `governing-law`
- `lease-completeness` (18 states): Present: `edu-no-lease-completeness-rule-mt`
- `lease-copy` (12 states): Present: `edu-lease-copy-mt`
- `notice-delivery-methods` (27 states): Present: `electronic-notice-mt`, `edu-notice-service-mt`
- `notices` (30 states): Present: `notices`
- `rental-inspection` (6 states): Present: `edu-no-rental-inspection-rule-mt`
- `sale-or-management-change` (20 states): Present: `edu-sale-management-change-mt`
- `scope` (21 states): Present: `edu-scope-mt`
- `severability` (30 states): Present: `severability`
- `statute-of-frauds-lease-term` (8 states): Present: `edu-statute-of-frauds-mt`
- `statutory-forms` (20 states): Present: `edu-no-statutory-forms-mt`
- `tenants-property-insurance` (30 states): Present: `tenants-property-insurance-ks-oh-ca`
- `assistance-animal-accommodation` (30 states): Present: `assistance-animal-accommodation`, `edu-assistance-animals-mt`
- `pet-fees` (10 states): Present: `edu-pet-deposit-mt`
- `pet-insurance-requirement` (30 states): Present: `pet-insurance-requirement`
- `pet-policy` (30 states): Present: `pet-policy-mt`
- `service-animal-misrepresentation` (17 states): Present: `edu-service-animal-misrepresentation-mt`
- `assigned-parking-space` (30 states): Present: `assigned-parking-space`
- `ev-charging` (27 states): Present: `edu-no-ev-charging-rule-mt`
- `parking` (30 states): Present: `parking-ks-oh-ca`
- `parking-vehicle-rules` (29 states): Present: `parking-vehicle-rules`
- `storage-space` (30 states): Present: `storage-space-ks-oh-ca`
- `towing` (27 states): Present: `edu-towing-mt`
- `cannabis` (13 states): Present: `cannabis-cultivation-mt`, `edu-cannabis-mt`
- `common-area-use` (30 states): Present: `common-area-use`
- `fire-safety-grilling` (30 states): Present: `fire-safety-grilling`
- `firearms` (11 states): Present: `firearm-discharge-mt`, `edu-firearms-mt`
- `guest-policy` (30 states): Present: `guest-policy`
- `guest-policy-day-limit` (30 states): Present: `guest-policy-day-limit`
- `inspection-rights` (29 states): Present: `inspection-rights`
- `keys` (30 states): Present: `keys`
- `rules-regulations` (13 states): Present: `rules-mt`
- `tenant-display-rights` (9 states): Present: `edu-political-signs-mt`
- `tenant-security-cameras` (18 states): Present: `edu-no-camera-rule-mt`
- `bed-bug-disclosure` (28 states): Present: `edu-no-bed-bug-rule-mt`
- `fair-housing` (27 states): Present: `edu-fair-housing-mt`
- `flood-disclosure` (20 states): Present: `edu-no-flood-disclosure-mt`
- `hoa-compliance` (30 states): Present: `hoa-compliance`
- `lead-based-paint` (30 states): Present: `lead-based-paint`
- `meth-disclosure` (24 states): Present: `edu-meth-disclosure-mt`
- `mold-disclosure` (27 states): Present: `mold-disclosure-mt`
- `owner-identity-disclosure` (29 states): Present: `landlord-disclosure-mt`
- `radon-disclosure` (29 states): Present: `edu-no-radon-disclosure-mt`
- `sex-offender-occupancy` (7 states): Present: `edu-no-sex-offender-rule-mt`
- `source-of-income` (24 states): Present: `edu-no-source-of-income-mt`
- `stigmatized-property` (15 states): Present: `edu-stigmatized-property-mt`
- `utility-submetering-disclosure` (13 states): Present: `edu-no-utility-billing-rule-mt`
- `consumer-protection-act` (16 states): Present: `edu-consumer-protection-mt`
- `foreign-ownership` (9 states): Present: `edu-foreign-adversary-mt`
- `immigration-status` (23 states): Present: `edu-no-immigration-rule-mt`
- `knowing-use-penalty` (2 states): Present: `edu-knowing-use-penalty-mt`
- `landlord-registration` (4 states): Present: `edu-local-regulation-mt`
- `plain-language` (9 states): Present: `edu-plain-language-mt`
- `prohibited-lease-terms` (25 states): Present: `edu-prohibited-terms-mt`
- `tenant-right-to-organize` (1 states): Present: `edu-tenant-organizing-mt`
- `unconscionability` (7 states): Present: `edu-unconscionability-mt`

### 18.2 Topics with no MT row (status and reason) (164)
- `collection-fee` (2 states): Not offered: no Montana statute authorizes a collection fee; Mont. Code Ann. § 70-24-442 governs fees in actions and Mont. Code Ann. § 70-25-201(4) bars any deposit deduction not listed (MT log §6.1)
- `fee-transparency` (11 states): Answered elsewhere: no all-in pricing or fee-disclosure statute (MT battery 84 (consumer protection act reaching leases of real property): 2 hits, control 0; known positives passed (2 real sections, 0 synthetic)); charges count as rent only 'as agreed on in the rental agreement' (Mont. Code Ann. § 70-24-103(14)) in `edu-fees-as-rent-mt`; payment-type fees barred (`edu-payment-method-fee-mt`)
- `fee-unprovided-service` (1 states): Not applicable: California-specific rule; no Montana statute found (Montana's consumer act has no enumerated landlord list, `edu-consumer-protection-mt`)
- `government-fee-reimbursement` (1 states): Not offered: no Montana statute; local landlord licensing is preempted for self-government units (Mont. Code Ann. § 7-1-111(13), `edu-local-regulation-mt`), so a registration-fee pass-through clause has little use
- `late-fee-limit` (1 states): Confirmed absent: no late-fee cap (MT battery 9 (late fee cap / limit (amount or percent)): 2 hits, control 0; known positives passed (0 real sections, 2 synthetic); MT battery 180 (late fee everyday rerun (charge for late rent, both orders)): 67 hits, control 0; known positives passed (1 real section, 0 synthetic)) in `edu-late-fee-mt`
- `nonresident-owner-agent` (4 states): Answered elsewhere: no nonresident-owner agent statute (MT battery 121 (nonresident owner agent for service (real property, landlord)): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic)); the Mont. Code Ann. § 70-24-301(1) disclosure of a person authorized to receive service and notices covers it (`landlord-disclosure-mt`)
- `notice-service-fee` (2 states): Not offered: no statute authorizes a fee for serving notices; Mont. Code Ann. § 70-25-201(4) limits deposit deductions (MT log §6.1)
- `rent-concession` (2 states): Not located: no Montana statute on rent concessions; a concession is a term the parties may agree (Mont. Code Ann. § 70-24-201(1))
- `rent-escalation` (3 states): Not offered: Mont. Code Ann. § 70-24-201(1) lets the parties agree rent terms, so an escalation clause written into the lease is lawful, but the library declines it (MT log §6.1); explained in `edu-rent-increase-notice-mt`
- `required-fees` (3 states): Answered elsewhere: no required-fee disclosure statute; agreed charges are rent (`edu-fees-as-rent-mt`) and a cleaning or damage fee is presumed a deposit (`edu-deposit-rules-mt`)
- `shutdown-rent-protection` (1 states): Not applicable: federal-shutdown statute in another state; no Montana counterpart found (MT battery 24 recorded as failed, rerun as 143 (source of income / housing voucher / rental assistance (rerun)): 23 hits, control 0; known positives passed (1 real section, 1 synthetic))
- `statutory-caps` (1 states): Answered elsewhere: Montana caps the returned-payment charge at $30 (`returned-payments-mt`, builder cap MT log §10) and early-termination damages at one month's rent (`early-termination-mt`); no deposit, late-fee or application-fee cap
- `subsidy-late-fee` (1 states): Not applicable: another state's subsidized-housing late-fee rule; Montana has no late-fee statute (MT battery 9 (late fee cap / limit (amount or percent)): 2 hits, control 0; known positives passed (0 real sections, 2 synthetic))
- `term-change-notice` (5 states): Answered elsewhere: Mont. Code Ann. § 70-26-109 (change of 'the terms, rent, and conditions' of a month-to-month lease on 15 days' written notice) in `edu-rent-increase-notice-mt`; rules: `rules-mt`
- `veterans-incentive` (1 states): Not applicable: another state's veterans rental incentive; none found in Montana (MT battery 56 (servicemember / military lease termination or stay): 5 hits, control 0; known positives passed (2 real sections, 0 synthetic))
- `deposit-cost-schedule` (2 states): Barred: a deposit deduction for cleaning must be 'actual cleaning expenses' after written notice and 24 hours (Mont. Code Ann. § 70-25-201(1), (3)), so a fixed agreed cleaning charge is not offered (`security-deposit-use-mt`)
- `deposit-installments` (5 states): Not located: no installment-payment rule for deposits in ch. 25 (read whole) or found by battery (MT battery 179 recorded as failed, rerun as 191 (deposit cap everyday rerun (synthetic positive given context words)): 3 hits, control 0; known positives passed (0 real sections, 1 synthetic))
- `deposit-surrender-notice` (1 states): Not applicable: another state's surrender-notice deposit rule; Montana's clock runs from termination or surrender and acceptance, whichever first (Mont. Code Ann. § 70-25-202(1)(a)(i), `security-deposit-return-mt`)
- `dv-deposit-timing` (1 states): Confirmed absent: no domestic-violence deposit rule (MT battery 54 (domestic violence / partner or family member assault / stalking and tenancy): 2 hits, control 0; known positives passed (1 real section, 1 synthetic); MT battery 55 recorded as failed, rerun as 148 (domestic violence everyday rerun (victim + lease / locks / terminate, both orders)): 20 hits, control 0; known positives passed (0 real sections, 2 synthetic)), recorded in `edu-no-dv-termination-mt`
- `expedited-deposit-disposition` (1 states): Answered elsewhere: Montana's 10-day refund when nothing is deducted (Mont. Code Ann. § 70-25-202(1)(b)) in `security-deposit-return-mt`
- `fee-in-lieu-of-deposit` (3 states): Not located: no statute; a fee or charge for cleaning and damages 'no matter how designated' is presumed a security deposit (Mont. Code Ann. § 70-25-101(4)), so a fee in lieu would likely be treated as a deposit (`edu-deposit-rules-mt`)
- `inspection-notice-penalty` (1 states): Not applicable: another state's inspection-notice penalty; Montana's pre-move-out inspection is on either party's request (Mont. Code Ann. § 70-25-201(2), `edu-condition-statement-mt`)
- `nonrefundable-deposit-notice` (4 states): Barred: Montana presumes any required deposit and any cleaning or damage fee to be a refundable security deposit (Mont. Code Ann. § 70-25-101(4)); `edu-deposit-rules-mt`, `edu-pet-deposit-mt`
- `nonrefundable-deposit-separate-notice` (1 states): Barred: as `nonrefundable-deposit-notice` (Mont. Code Ann. § 70-25-101(4))
- `security-deposit-nonwaiver` (2 states): Answered elsewhere: Mont. Code Ann. § 70-25-103 in `edu-deposit-rules-mt`
- `security-deposit-standards` (1 states): Not applicable: another state's rule for landlords using different deposit standards; Montana has none (MT battery 179 recorded as failed, rerun as 191 (deposit cap everyday rerun (synthetic positive given context words)): 3 hits, control 0; known positives passed (0 real sections, 1 synthetic))
- `utility-deposit-return` (1 states): Not applicable: another state's utility-deposit rule; a landlord-held utility deposit is a security deposit in Montana (Mont. Code Ann. § 70-25-101(4))
- `bed-bug-cooperation` (1 states): Confirmed absent: no bed bug statute (MT battery 37 (bed bugs / pests / vermin in dwellings): 6 hits, control 0; known positives passed (1 real section, 2 synthetic)) in `edu-no-bed-bug-rule-mt`
- `children-occupancy` (1 states): Answered elsewhere: familial status protected (Mont. Code Ann. § 49-2-305(1), (12)) in `edu-fair-housing-mt` and `edu-occupancy-mt`
- `cold-weather-vacate-notice` (1 states): Not applicable: another state's cold-weather rule; no Montana counterpart (MT battery 201 (utility shutoff everyday rerun (shut off / terminate service + tenant or customer, both orders)): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic))
- `construction-liens` (1 states): Not located: Mont. Code Ann. § 71-3-525 (extent of a construction lien; lessor's interest bound only if the lessor contracted for or agreed to the improvement) read in battery context only (MT battery 174 (construction lien and lessee improvements): 1 hit, control 0; known positives passed (0 real sections, 1 synthetic)); no lease clause offered
- `dv-qualifying-documents` (2 states): Confirmed absent (MT battery 54 (domestic violence / partner or family member assault / stalking and tenancy): 2 hits, control 0; known positives passed (1 real section, 1 synthetic); MT battery 55 recorded as failed, rerun as 148 (domestic violence everyday rerun (victim + lease / locks / terminate, both orders)): 20 hits, control 0; known positives passed (0 real sections, 2 synthetic)) in `edu-no-dv-termination-mt`
- `prohibited-acts-renter` (2 states): Answered elsewhere: Mont. Code Ann. § 70-24-321(2)-(3) in `edu-tenant-statutory-duties-mt`
- `purpose-limitation` (1 states): Answered elsewhere: Mont. Code Ann. §§ 70-24-322(1), 70-24-321(1)(g) in `residential-use-only-mt`
- `utility-interruption-submeter` (1 states): Confirmed absent (MT battery 48 (submetering / landlord-billed utilities / ratio billing): 11 hits, control 0; known positives passed (0 real sections, 2 synthetic)) in `edu-no-utility-billing-rule-mt`
- `utility-transfer` (1 states): Not located: no Montana statute on transferring utilities to the tenant's name; allocation by lease (`utilities-responsibility` tag)
- `waterbed` (2 states): Confirmed absent (MT battery 65 (waterbed / water-filled furniture): 0 hits, control 0; known positives passed (0 real sections, 2 synthetic)), recorded in the `common-area-use` tag note
- `alt-housing` (5 states): Not located: no statute requires alternative housing; the act gives substitute housing only as a tenant remedy for essential services (Mont. Code Ann. § 70-24-408(1)(c)), in `edu-tenant-repair-remedies-mt`
- `appliances-excluded` (1 states): Answered elsewhere: the landlord maintains appliances 'supplied or required to be supplied' (Mont. Code Ann. § 70-24-303(1)(d)), so appliances not supplied are outside the duty; `appliances-included` tag
- `balcony-inspection` (1 states): Not applicable: another state's balcony-inspection statute; Montana none found
- `confirmed-absences-habitability` (1 states): Answered elsewhere: Montana's absences are recorded in their own rows (`edu-no-security-device-rule-mt`, `edu-no-bed-bug-rule-mt`, `edu-no-radon-disclosure-mt`)
- `designated-repairer` (1 states): Not located: no statute; emergency repairs by the tenant only by a qualified person (Mont. Code Ann. § 70-24-406(1)(b)) in `edu-tenant-repair-remedies-mt`
- `disability-accommodation` (8 states): Answered elsewhere: Mont. Code Ann. § 49-2-305(5)(a)(i)-(ii) in `edu-fair-housing-mt`; `no-alterations` tag preserves modifications
- `disaster-duties` (1 states): Not located: no disaster-specific landlord duty; casualty: `edu-casualty-mt`
- `emergency-contact` (1 states): Answered elsewhere: optional `tenant-death-contact-mt`
- `fire-code-standard` (1 states): Answered elsewhere: codes in effect at original construction (Mont. Code Ann. § 70-24-303(1)(a), (2)) in `edu-habitability-mt`
- `frozen-standard-incorporation` (1 states): Answered elsewhere: Montana's code duty is frozen at the time of original construction (Mont. Code Ann. § 70-24-303(1)(a)) in `edu-habitability-mt`; the 28 CFR 35.136 reference in Mont. Code Ann. § 49-4-214(5)(a) is frozen 'as of October 1, 2019' (public accommodations only)
- `habitability-materiality` (1 states): Answered elsewhere: tenant remedies arise for noncompliance 'affecting health and safety' (Mont. Code Ann. § 70-24-406(1)) in `edu-tenant-repair-remedies-mt`
- `habitability-modifiable` (2 states): Answered elsewhere: specified repairs by separate signed writing only (Mont. Code Ann. § 70-24-303(3)-(4)) in `maintenance-allocation-mt`
- `habitability-presumption` (1 states): Not located: no statutory presumption of habitability; case law not searched
- `habitability-waiver` (1 states): Answered elsewhere: no waiver (Mont. Code Ann. §§ 70-24-202(1), 70-24-203) in `edu-habitability-mt`
- `health-district-rental-rules` (1 states): Not applicable: another state's health-district rules; Montana local health board rules not read (rule 3)
- `heating` (2 states): Answered elsewhere: reasonable heat October 1 to May 1 (Mont. Code Ann. § 70-24-303(1)(f)) in `edu-habitability-mt` and the `utilities-paid-by-landlord` tag; tenant supply of heat by written agreement (Mont. Code Ann. § 70-24-303(3), `utilities-responsibility` tag)
- `landlord-breach-remedy` (1 states): Answered elsewhere: `edu-tenant-repair-remedies-mt`
- `maintenance-duty-shift` (1 states): Answered elsewhere: Mont. Code Ann. § 70-24-303(3)-(4) in `maintenance-allocation-mt` (MT log §6.3)
- `other-landlord-facilities` (1 states): Answered elsewhere: Mont. Code Ann. § 70-24-303(1)(d) ('other facilities and appliances') in `landlord-maintenance-mt`
- `part5-nonwaivable` (1 states): Not applicable: another state's part numbering; Montana's non-waiver rule is Mont. Code Ann. § 70-24-202(1) (`edu-prohibited-terms-mt`)
- `pool-safety` (3 states): Confirmed absent for residential rentals (MT battery 66 (swimming pool barrier / safety (residential)): 4 hits, control 0; known positives passed (0 real sections, 1 synthetic))
- `portfolio-thresholds` (3 states): Answered elsewhere: Montana's only owner-size thresholds found are the application-fee refund (property manager of four or more units, Mont. Code Ann. § 37-56-109, `edu-application-fee-mt`) and the fair-housing owner-occupied exemption (Mont. Code Ann. § 49-2-305(2), `edu-fair-housing-mt`)
- `rent-demand-bar` (1 states): Answered elsewhere: rent is payable without demand or notice (Mont. Code Ann. § 70-24-201(3)) in `edu-nonpayment-notice-mt`
- `rent-reporting` (2 states): Confirmed absent: no rent-reporting (credit-bureau) statute (MT battery 185 (tenant screening everyday rerun (consumer report / credit report + tenant or rental)): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic))
- `repair-cost-termination` (1 states): Answered elsewhere: `edu-tenant-repair-remedies-mt` (repair-and-deduct up to one month's rent; termination on notice)
- `repair-escrow-exemption-notice` (1 states): Not applicable: another state's escrow rule; Montana's rent-into-court is court-ordered (`edu-rent-into-court-mt`)
- `repair-notice` (3 states): Answered elsewhere: written notice specifying the breach (Mont. Code Ann. § 70-24-406(1)(a)) in `edu-tenant-repair-remedies-mt`
- `senior-housing-work-card` (1 states): Not applicable: another state's senior-housing rule
- `stove-refrigerator` (1 states): Not located: no Montana statute requires a landlord to supply a stove or refrigerator; appliances supplied must be maintained (Mont. Code Ann. § 70-24-303(1)(d))
- `subsidy-habitability-proration` (1 states): Not applicable: another state's subsidized-housing rule
- `substandard-property-receivership` (2 states): Not located: Montana's hazardous-building procedure (Mont. Code Ann. Title 50, ch. 62, e.g. Mont. Code Ann. § 50-62-104, the owner's or occupant's answer to a condemnation order) read in battery context only (MT battery 171 recorded as failed, rerun as 189 (condemned or unfit dwelling and occupants (rerun; 70-24-303 has no condemnation words)): 3 hits, control 0; known positives passed (1 real section, 1 synthetic)); no tenant receivership statute found
- `telecom-access` (3 states): Confirmed absent (MT battery 76 recorded as failed, rerun as 154 (internet / broadband / telephone service access for tenants (both orders, rerun)): 3 hits, control 0; known positives passed (0 real sections, 1 synthetic); MT battery 63 recorded as failed, rerun as 153 (satellite / antenna / cable access (both orders, rerun)): 5 hits, control 0; known positives passed (0 real sections, 1 synthetic))
- `utility-allowance-cap` (1 states): Not located: no statute; a lease may allocate utilities (`utilities-paid-by-landlord`, `utilities-responsibility` tags)
- `utility-apportionment` (2 states): Confirmed absent (MT battery 48 (submetering / landlord-billed utilities / ratio billing): 11 hits, control 0; known positives passed (0 real sections, 2 synthetic)) in `edu-no-utility-billing-rule-mt`
- `utility-disclosure-attachment` (1 states): Confirmed absent (MT battery 48 (submetering / landlord-billed utilities / ratio billing): 11 hits, control 0; known positives passed (0 real sections, 2 synthetic))
- `utility-landlord-account` (5 states): Answered elsewhere: no statute on landlord-held utility accounts; interrupting essential services to recover possession is barred (Mont. Code Ann. § 70-24-428) in `edu-self-help-eviction-mt`
- `utility-shutoff-statute` (3 states): Confirmed absent (MT battery 127 recorded as failed, rerun as 166 (utility disconnection and tenants (both orders, rerun)): 0 hits, control 0; known positives passed (0 real sections, 2 synthetic); MT battery 201 (utility shutoff everyday rerun (shut off / terminate service + tenant or customer, both orders)): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic)) in `edu-no-utility-billing-rule-mt`
- `key-control-policy` (1 states): Answered elsewhere: locks and keys (Mont. Code Ann. § 70-24-312(5)) in `edu-no-security-device-rule-mt`; `keys` tag
- `periodic-services-entry` (1 states): Not offered: Montana's entry list is exclusive (Mont. Code Ann. § 70-24-312(4)); scheduled services fall under 'supply necessary or agreed services' with 24 hours' notice (`landlords-access-mt`)
- `casualty-and-mitigation-waivable` (1 states): Barred: a rental agreement may not waive the tenant's Mont. Code Ann. § 70-24-409 rights (Mont. Code Ann. § 70-24-202(1)); `edu-casualty-mt`
- `drug-free-housing-addendum` (1 states): Answered elsewhere: optional `criminal-activity-mt`
- `dv-eviction-protection` (5 states): Confirmed absent (MT battery 54 (domestic violence / partner or family member assault / stalking and tenancy): 2 hits, control 0; known positives passed (1 real section, 1 synthetic); MT battery 55 recorded as failed, rerun as 148 (domestic violence everyday rerun (victim + lease / locks / terminate, both orders)): 20 hits, control 0; known positives passed (0 real sections, 2 synthetic)) in `edu-no-dv-termination-mt`
- `dv-lockchange` (4 states): Confirmed absent (MT battery 55 recorded as failed, rerun as 148 (domestic violence everyday rerun (victim + lease / locks / terminate, both orders)): 20 hits, control 0; known positives passed (0 real sections, 2 synthetic)) in `edu-no-dv-termination-mt`
- `environmental-event-termination` (2 states): Not located: no statute beyond fire or casualty (`edu-casualty-mt`)
- `eviction-hardship-stay` (1 states): Answered elsewhere: no general hardship stay found (MT battery 101 (stay of execution / relief from forfeiture / hardship (tenancy)): 13 hits, control 0; known positives passed (2 real sections, 0 synthetic)); National Guard stay (Mont. Code Ann. § 10-1-903) in `edu-servicemember-mt`
- `eviction-service-party` (1 states): Barred: a written contract may not empower anyone as a party's agent to 'accept service of process' (Mont. Code Ann. § 28-2-709(1)) in `edu-prohibited-terms-mt`
- `forfeiture-redemption` (1 states): Not located: no statutory right to redeem a forfeited residential tenancy; a curable violation is cured before the notice date (`edu-noncompliance-cure-mt`)
- `guarantor-renewal` (1 states): Not located: guarantor sections found are general suretyship and other contracts (MT battery 175 (guarantor of a lease / renewal): 36 hits, control 0; known positives passed (0 real sections, 1 synthetic)); no lease-renewal rule
- `homestead-waiver` (4 states): Not offered: no statute supports a lease waiver of execution exemptions; a waiver of the act's rights is void (Mont. Code Ann. § 70-24-202(1)); homestead battery hits are exemption sections (MT battery 91 (waiver of exemptions / homestead): 9 hits, control 0; known positives passed (1 real section, 0 synthetic)) (MT log §6.1)
- `infirmity-termination` (4 states): Confirmed absent (MT battery 140 (tenant entering care facility / medical termination of lease): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); MT battery 176 (infirmity / death / care facility lease termination (everyday rerun)): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic))
- `landlord-remedies-termination` (1 states): Answered elsewhere: Mont. Code Ann. § 70-24-427(1) in `edu-eviction-process-mt`
- `liquidated-damages` (1 states): Answered elsewhere: Mont. Code Ann. § 28-2-721 in `edu-late-fee-mt` and `edu-holdover-rate-mt`
- `lockout-for-rent-delinquency` (1 states): Barred: Mont. Code Ann. § 70-24-428 in `edu-self-help-eviction-mt`
- `minor-tenant-filing` (4 states): Not located: capacity to contract is supplementary general law (Mont. Code Ann. § 70-24-105); not searched further
- `notice-to-quit-waiver` (1 states): Barred: a waiver of the act's notice rights is void (Mont. Code Ann. § 70-24-202(1)) (MT log §6.1)
- `owner-move-in-reservation` (1 states): Not applicable: Montana has no just-cause rule, so no owner-move-in exception is needed (`edu-for-cause-eviction-mt`)
- `possession-bond` (1 states): Not located: no possession-bond statute for ch. 24 actions found; the forcible entry and detainer chapter applies only to forcible entry and detainer (Mont. Code Ann. § 70-27-101(1))
- `redemption` (1 states): Not applicable: no post-judgment redemption right for residential tenants found; rent paid into court (`edu-rent-into-court-mt`)
- `social-security-defense` (1 states): Not applicable: another state's rule; none found
- `statutory-early-termination` (5 states): Answered elsewhere: National Guard termination (Mont. Code Ann. § 10-1-905) in `edu-servicemember-mt`; no domestic-violence termination (`edu-no-dv-termination-mt`); Montana requires no lease statement of these rights
- `subsidized-inspection-refusal` (1 states): Not applicable: federal program rule; not read
- `tenancy-at-will` (2 states): Answered elsewhere: unless agreed otherwise, a tenancy is week to week for a roomer paying weekly and otherwise month to month (Mont. Code Ann. § 70-24-201(2)(e)); `periodic-tenancy-notice-mt`
- `adverse-proceeding-notice` (1 states): Answered elsewhere: Mont. Code Ann. § 70-26-104 in the `tenant-forward-proceedings-ca` tag and `edu-foreclosure-mt`
- `confirmed-absences-misc` (1 states): Answered elsewhere: Montana absences carry their own rows (`edu-no-algorithmic-rent-rule-mt`, `edu-no-camera-rule-mt`, `edu-no-ev-charging-rule-mt`, `edu-no-emergency-assistance-rule-mt`)
- `confirmed-absences-outside-title` (1 states): Answered elsewhere: outside-title absences carry their own rows (`edu-no-sex-offender-rule-mt`, `edu-no-immigration-rule-mt`, `edu-no-flood-disclosure-mt`)
- `disaster-displaced-guests` (1 states): Not applicable: another state's rule; none found
- `dv-confidentiality` (7 states): Confirmed absent: no landlord duty under an address-confidentiality program found (MT battery 55 recorded as failed, rerun as 148 (domestic violence everyday rerun (victim + lease / locks / terminate, both orders)): 20 hits, control 0; known positives passed (0 real sections, 2 synthetic)); `edu-no-dv-termination-mt`
- `dv-protection-order-chapter-moved` (1 states): Not applicable: another state's renumbering note
- `landlord-liability-insurance` (1 states): Not located: no statute requires a landlord to carry liability insurance
- `law-enforcement-cooperation` (1 states): Answered elsewhere: removal of unauthorized persons by law enforcement (Mont. Code Ann. § 70-24-113) in `edu-unauthorized-occupant-mt`
- `lease-notice-initial-requirement` (1 states): Not applicable: another state's initialing rule; no Montana requirement (MT battery 3 (type size / boldface / capitals / conspicuous / underlined): 56 hits, control 0; known positives passed (1 real section, 3 synthetic))
- `lease-term-limitation` (1 states): Answered elsewhere: an unsigned lease given effect by acceptance runs at most one year (Mont. Code Ann. § 70-24-204(3)) in `edu-statute-of-frauds-mt`; the 75-year city-lot limit (Mont. Code Ann. § 70-26-110) does not bear on residential leases
- `notice-to-vacate-additional-terms` (1 states): Not applicable: another state's rule; Montana notice contents in `edu-noncompliance-cure-mt`
- `optional-lease-terms` (1 states): Answered elsewhere: Montana's optional clauses are listed in MT log §6.1
- `plain-language-consumer-statement` (1 states): Confirmed absent (MT battery 86 (plain language / readability (contracts, leases, notices)): 7 hits, control 0; known positives passed (1 real section, 0 synthetic)) in `edu-plain-language-mt`
- `rent-receipt-anti-waiver` (1 states): Answered elsewhere: Mont. Code Ann. § 70-24-423 in `edu-waiver-by-acceptance-mt`
- `renters-insurance-rules` (6 states): Confirmed absent: no statute on requiring renter's insurance (MT battery 168 (renter's insurance requirement (statute)): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic)); hits are insurance-program disclosures. `tenants-property-insurance-ks-oh-ca` tagged
- `tenant-insurance-claims` (1 states): Not applicable: another state's rule
- `tenant-records` (1 states): Confirmed absent (MT battery 169 (rent ledger / tenant payment records): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); MT battery 202 (tenant records everyday rerun (statement of account / ledger / accounting + tenant, both orders)): 3 hits, control 0; known positives passed (1 real section, 1 synthetic)) in `edu-rent-receipts-mt`
- `tpa-sunset` (1 states): Not applicable: California Tenant Protection Act
- `service-animal-denial-penalty` (10 states): Answered elsewhere: Montana's service-animal and misrepresentation sections reach public accommodations (Mont. Code Ann. §§ 49-4-214, 49-4-221); housing denial is fair-housing discrimination (Mont. Code Ann. § 49-2-305) in `edu-assistance-animals-mt` and `edu-service-animal-misrepresentation-mt`
- `ev-charging-end-of-tenancy` (2 states): Confirmed absent (MT battery 61 recorded as failed, rerun as 151 (electric vehicle charging (both orders, rerun)): 3 hits, control 0; known positives passed (2 real sections, 1 synthetic)) in `edu-no-ev-charging-rule-mt`
- `ev-charging-requirements` (2 states): Confirmed absent (MT battery 61 recorded as failed, rerun as 151 (electric vehicle charging (both orders, rerun)): 3 hits, control 0; known positives passed (2 real sections, 1 synthetic)) in `edu-no-ev-charging-rule-mt`
- `ev-charging-shared-area` (2 states): Confirmed absent (MT battery 61 recorded as failed, rerun as 151 (electric vehicle charging (both orders, rerun)): 3 hits, control 0; known positives passed (2 real sections, 1 synthetic)) in `edu-no-ev-charging-rule-mt`
- `parking-rules-notice` (1 states): Answered elsewhere: rules changing the bargain need 7 or 30 days' notice (Mont. Code Ann. § 70-24-311(3)) in the `assigned-parking-space` tag and `rules-mt`
- `unbundled-parking` (1 states): Not applicable: California rule; none in Montana
- `landscaping-irrigation` (30 states): Not tagged (Oklahoma treatment, rule 48): specified tenant maintenance tasks need a separate signed writing with adequate consideration for every dwelling (Mont. Code Ann. § 70-24-303(4)); offered in `maintenance-allocation-mt` (MT log §6.3)
- `political-access` (1 states): Not located: no statute on candidate access to rental housing (MT battery 194 (sign placement (political signs; HOA and private-entity limits)): 2 hits, control 0; known positives passed (1 real section, 1 synthetic))
- `portable-solar` (1 states): Confirmed absent (MT battery 62 recorded as failed, rerun as 152 (solar and tenant / association (both orders, rerun)): 6 hits, control 0; known positives passed (0 real sections, 2 synthetic)) in `edu-no-ev-charging-rule-mt`
- `religious-cultural-display` (1 states): Confirmed absent (MT battery 59 recorded as failed, rerun as 149 (flag / sign display (both orders, rerun)): 0 hits, control 0; known positives passed (0 real sections, 2 synthetic); MT battery 60 recorded as failed, rerun as 150 (flag / sign everyday rerun (any context)): 1 hit, control 0; known positives passed (1 real section, 1 synthetic)); creed and religion are protected (`edu-fair-housing-mt`)
- `smoke-drift-waiver` (1 states): Confirmed absent (MT battery 173 (secondhand smoke / smoke drift (residential)): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); MT battery 204 (smoke drift everyday rerun (smoke + neighbor / adjacent / multiunit, both orders)): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic))
- `snow-removal` (29 states): Not tagged (Oklahoma treatment, rule 48): as `landscaping-irrigation`; offered in `maintenance-allocation-mt`
- `defective-drywall-disclosure` (1 states): Not applicable: another state's rule; none found
- `electric-submetering-disclosure` (1 states): Confirmed absent (MT battery 48 (submetering / landlord-billed utilities / ratio billing): 11 hits, control 0; known positives passed (0 real sections, 2 synthetic))
- `foreclosure-disclosure` (4 states): Confirmed absent (MT battery 47 (foreclosure and tenants): 8 hits, control 0; known positives passed (0 real sections, 1 synthetic)) in `edu-foreclosure-mt`
- `hazardous-contamination-disclosure` (2 states): Answered elsewhere: meth and fentanyl contamination (Mont. Code Ann. § 75-10-1305) in `edu-meth-disclosure-mt`; known mold in `mold-disclosure-mt`; no other contamination disclosure for rentals found (MT battery 33 (radon (any context)): 8 hits, control 0; known positives passed (1 real section, 1 synthetic))
- `inspection-condemnation-disclosure` (1 states): Not located: no rental disclosure of condemnation or inspection orders (MT battery 171 recorded as failed, rerun as 189 (condemned or unfit dwelling and occupants (rerun; 70-24-303 has no condemnation words)): 3 hits, control 0; known positives passed (1 real section, 1 synthetic))
- `lead-safe-certification` (1 states): Answered elsewhere: federal lead disclosure only (`lead-based-paint` tag); no Montana lead-safe certification (MT battery 39 (lead-based paint / lead hazards): 2 hits, control 0; known positives passed (1 real section, 1 synthetic); MT battery 40 (lead everyday rerun (lead + paint / pipes / water / dust)): 2 hits, control 0; known positives passed (1 real section, 1 synthetic))
- `meter-conservation-charge` (1 states): Not applicable: another state's rule
- `military-air-zone-disclosure` (2 states): Confirmed absent for rentals (MT battery 44 recorded as failed, rerun as 146 (military installation / air zone disclosure (rerun)): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic)); Mont. Code Ann. § 35-30-103 (foreign adversaries) in `edu-foreign-adversary-mt`
- `ordnance-demolition-meter-disclosures` (1 states): Not applicable: California disclosures
- `pest-control-notice` (1 states): Confirmed absent (MT battery 177 recorded as failed, rerun as 190 (pest / vermin everyday rerun (adds pest infestation and residential)): 1 hit, control 0; known positives passed (1 real section, 1 synthetic)) in `edu-no-bed-bug-rule-mt`
- `private-well-testing` (1 states): Confirmed absent (MT battery 172 (private well / water testing and tenants or sale): 2 hits, control 0; known positives passed (0 real sections, 1 synthetic))
- `prop65-rental-warning` (1 states): Not applicable: California Proposition 65
- `property-tax-rent-disclosure` (1 states): Not applicable: another state's rule; none found
- `protected-class-inquiry-ban` (4 states): Answered elsewhere: Mont. Code Ann. § 49-2-305(1)(c) (inquiry for the purpose of discriminating) in `edu-fair-housing-mt`
- `required-disclosures` (1 states): Answered elsewhere: Montana's required disclosures are `landlord-disclosure-mt`, the condition statement (`edu-condition-statement-mt`), known mold (`mold-disclosure-mt`) and meth (`edu-meth-disclosure-mt`); layout table MT log §4
- `sex-offender-disclosure` (3 states): Confirmed absent (MT battery 42 recorded as failed, rerun as 145 recorded as failed, rerun as 186 (sex offender and landlord / rental (rerun; 46-23-504 had no tenancy words)): 7 hits, control 0; known positives passed (0 real sections, 2 synthetic)) in `edu-no-sex-offender-rule-mt`
- `sfr-occupancy-disclosure` (1 states): Not applicable: Nevada rule
- `steam-radiator-covers` (1 states): Not applicable: New Jersey rule
- `tenant-rights-statement` (3 states): Confirmed absent: no required statement of tenant rights (MT battery 88 (rental agreement must contain / state): 5 hits, control 0; known positives passed (0 real sections, 1 synthetic)); the plain-language property notice at termination is `edu-abandoned-property-notice-mt`
- `tpa-exemption-notice` (1 states): Not applicable: California Tenant Protection Act
- `tpa-notice` (1 states): Not applicable: California Tenant Protection Act
- `truth-in-renting` (2 states): Not applicable: New Jersey Truth in Renting Act; no Montana counterpart
- `window-guards` (1 states): Confirmed absent (MT battery 67 (window guards / window falls): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); MT battery 199 (window guard everyday rerun (window + child / fall / opening, both orders)): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic))
- `condemned-premises-rent-bar` (1 states): Not located: no rent bar for condemned premises (MT battery 171 recorded as failed, rerun as 189 (condemned or unfit dwelling and occupants (rerun; 70-24-303 has no condemnation words)): 3 hits, control 0; known positives passed (1 real section, 1 synthetic))
- `confession-of-judgment` (2 states): Answered elsewhere: Mont. Code Ann. §§ 70-24-202(2), 28-2-709(1) in `edu-prohibited-terms-mt`
- `employee-screening` (1 states): Not applicable: another state's rule
- `eviction-penalty-clause-ban` (1 states): Answered elsewhere: Mont. Code Ann. § 70-24-442 (fees notwithstanding agreement) and Mont. Code Ann. § 28-2-721 (liquidated damages) in `edu-attorney-fees-mt` and `edu-holdover-rate-mt`
- `exculpatory-clauses` (4 states): Answered elsewhere: Mont. Code Ann. § 70-24-202(3) in `edu-prohibited-terms-mt`; exculpation-free variants tagged (rule 52)
- `fire-sprinkler-duty` (1 states): Confirmed absent for residential rentals (MT battery 68 (fire sprinklers (residential buildings)): 1 hit, control 0; known positives passed (1 real section, 0 synthetic)); Mont. Code Ann. § 50-60-203 bars a state building-code sprinkler requirement for one- and two-unit residential buildings
- `governmental-fines` (1 states): Not located: no statute on passing government fines to tenants
- `hoa` (6 states): Answered elsewhere: Mont. Code Ann. § 70-16-110 in the `hoa-compliance` tag; no rental-approval or rental-ban statute (MT battery 125 recorded as failed, rerun as 164 recorded as failed, rerun as 188 (association or condominium limits on leasing (rerun; 70-23-601 has no association words)): 12 hits, control 0; known positives passed (2 real sections, 1 synthetic)); political signs `edu-political-signs-mt`
- `jury-waiver` (3 states): Not offered: either party may demand a jury (Montana Justice and City Court Rules of Civil Procedure, Rule 15); a contract term restricting enforcement 'by the usual proceedings in the ordinary tribunals' is void (Mont. Code Ann. § 28-2-708) and a waiver of the act's rights is void (Mont. Code Ann. § 70-24-202(1)) (MT battery 89 recorded as failed, rerun as 155 (jury trial / jury waiver (rerun, positive replaced)): 11 hits, control 0; known positives passed (1 real section, 1 synthetic)) (MT log §6.1)
- `lease-content-requirements` (1 states): Answered elsewhere: the Mont. Code Ann. § 70-24-301 disclosure is Montana's only required lease content (`landlord-disclosure-mt`, `edu-no-lease-completeness-rule-mt`)
- `translation-duty` (2 states): Confirmed absent (MT battery 170 (translation of lease / language other than English): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic); MT battery 203 (translation everyday rerun (spanish / language + contract or lease, both orders)): 0 hits, control 0; known positives passed (0 real sections, 1 synthetic))
- `written-notice-required` (1 states): Answered elsewhere: the act's notices are written (Mont. Code Ann. §§ 70-24-422, 70-24-441) in `edu-notice-service-mt`

### 18.3 'Topics no state has a row for yet'
The reference (2,577 active rows, 313 topics) carries no such list; every topic has rows in at least one state and is answered in §18.1 or §18.2.

## 19. Step D screens (rules 40-53), one line each
- **40 formatting and placement:** batteries 3, 4, 5 run in Step C over the whole code; no type-size, bold or first-page rule for leases; layout table §4.
- **41 just cause:** none (battery 95 recorded as failed, rerun as 159); `edu-for-cause-eviction-mt` keyed `for-cause-eviction` with the situational limits (retaliation § 70-24-431, early-termination cap § 70-24-201(2)(f), statutory breach notices); a fixed term ends at its end date only with 30 days' written notice (§ 70-24-205; `edu-end-of-term-mt`).
- **42 required text in a shared clause:** the cleaning notice and 24 hours are written into `security-deposit-use-mt`; the § 27-1-717(2) demand into `returned-payments-mt`; the § 70-24-301 disclosure is its own clause.
- **43 cure promises:** the base `default-by-tenant` carve-out covers Montana's no-cure grounds (repeat within 6 months, § 70-24-422(1)(e); damage, § 70-24-422(3); dangerous activity, § 70-24-422(4)); the rent limb ties its cure to 'the time period specified by applicable law' (3 days, § 70-24-422(2)), adding no pre-suit notice Montana lacks; `early-termination` (10-day cure for any breach) not tagged.
- **44 terms turned into duties:** supplied appliances become the landlord's to maintain (§ 70-24-303(1)(d)); the extended-absence notice exists only if the lease requires it (§ 70-24-322(2)); the guest period is the lease's if defined (§ 70-24-103(8)); late fees and charges become 'rent' only as agreed (§ 70-24-103(14)); listing cyclical maintenance in `security-deposit-use-mt` is what bars charging for it (§ 70-25-201(3)(a)).
- **45 electronic notices:** the UETA read itself (§§ 30-18-104, 30-18-107): agreement required, refusal unwaivable, retention required, specified-method rules kept; no eviction, default or cure exclusion (batteries 118, 200); e-mail notice only by the tenant's election (§ 70-24-202(4)); `electronic-notice-mt`, `edu-notice-service-mt`; `notices` and `electronic-signatures` tag notes.
- **46 lease as the notice:** the § 70-24-301 disclosure and the § 70-24-322(2) absence requirement are lease paragraphs; the § 70-24-430(9) notification, the § 70-25-206 statement and the § 75-10-1305 notice are separate; no statute lets the lease serve as a nonpayment or termination notice.
- **47 knowing-use penalties:** § 70-24-403(2) (actual damages plus up to 3 months' periodic rent); `severability` does not cure; no MT clause contains a § 70-24-202 term (independent check confirmed). No debt-collection statute reaching landlords collecting under void terms was found (battery 84).
- **48 separate documents:** § 70-24-303(4) (Oklahoma treatment, not re-asked: settled by rule 48 and decided under rule 76, §6.3); § 70-25-206; § 75-10-1305(3); builder print question §10.
- **49 collection costs:** no ban on 'reasonable costs and expenses'; prevailing-party fees 'notwithstanding an agreement to the contrary' (§ 70-24-442) match `default-by-tenant`; collection and notice fees not offered (§6.1).
- **50 'the lease controls':** each choice made on purpose: § 70-24-103(8) (guest period: `guest-policy-day-limit`); § 70-24-201(2) (rent terms 'unless the rental agreement provides otherwise': `rent-payment`, `acceptable-payment-methods`); § 70-24-201(2)(f) (agreed early-termination amount: `early-termination-mt`); § 70-24-205 (default extension period: `lease-end-continuation-mt`); § 70-24-303(1)(e) (garbage 'unless otherwise provided': `utilities-responsibility`); § 70-24-304 ('Unless otherwise agreed' on a sale: not displaced); § 70-24-322 ('Unless otherwise agreed', dwelling use: `residential-use-only-mt`; absence notice: `extended-absence-notice-ks`); § 70-24-441(3) (daily apportionment 'Unless otherwise agreed': kept); § 31-1-106 (written interest rate: declined).
- **51 plain language and consumer contracts:** no plain-language lease statute (`edu-plain-language-mt`); the consumer act's general standard reaches 'real' property (§ 30-14-102(8)) but lists no landlord practices (`edu-consumer-protection-mt`); no blank-space or copy-at-signing rule for landlords (`edu-no-lease-completeness-rule-mt`, `edu-lease-copy-mt`).
- **52 exculpation:** § 70-24-202(3); ks-oh-ca and ks-oh variants tagged; `pet-policy-mt` without 'without liability' or a negligence indemnity.
- **53 figures vs shared clauses:** `returned-payments` (ceiling-only, no demand), `holdover` (ceiling-only), `early-termination`/`-ks` (fee above one month), `security-deposit-use` (no cleaning notice step), `landlords-access` (hours and purposes), `pet-policy`, `possession-delay` (30-day wait), `landlord-maintenance` replaced; `late-fee`, `acceptable-payment-methods`, `due-at-signing`, `assigned-parking-space`, `keys`, `possession-delay-ca` checked with no Montana figure in conflict; the $30 NSF cap goes to the builder (§10).
- **35c constitution:** loaded before the first battery; battery 206; findings in §17.
- **37 tenancy type:** notice periods differ (week-to-week 7 days, month-to-month 30 days, § 70-24-441); rule changes take effect after 7 or 30 days by tenancy type and need agreement in a fixed term (`rules-mt`); the change-of-terms statute is month-to-month only (§ 70-26-109); holdover damages differ for month-to-month and longer terms (§ 70-24-429(2)-(3)); a consented holdover is week-to-week for a roomer paying weekly, otherwise month-to-month (§ 70-24-201(2)(e)); the early-termination cap and fee apply to a fixed term only; the deposit clock runs from termination or surrender for every type.
- **39 eviction duties:** post-judgment property (§ 70-24-430(1)(a)) and the lessor-confirmation rule for leased items; writ executed within 5 business days (§ 70-24-427(4)); lockout and service-interruption ban (§ 70-24-428); no record sealing in statute or the portal rules (two versions, §10); no pre-filing condition (batteries 100, 160); answer time 5 business days (§ 70-24-429(4)) in place of the 20-day rule (Rule 4C(2)(b)); no court-rule period conflicts with a statutory landlord duty.
- **54t tenant-caused damage:** answered provision by provision (§6.1 item 9).
- **79 summaries re-read:** every row written section-open; qualifiers attached to their own sentences (for example § 70-24-312(3)(a)'s 'unless it is impracticable', § 70-24-422(1)(a)'s cure sentence, § 70-24-303(1)(e)'s 'unless otherwise provided in a rental agreement', § 70-24-201(2)(f)'s two sentences); six independent-check rounds (§13). No row records no basis: every new row's notes name its controlling text or its absence battery.

## Proposed SOP changes
1. Rule 19: prove a crawler's link pattern against the site's own indexes before the first battery, including lettered chapters (Montana's 25-30A, 30-2A, 30-4A, 30-9A, 30-12A) and odd encodings (a section URL ending in '%20', a rule numbered '000a'); Montana's first crawl missed seven pages that only the index count caught.
2. Rule 16: a site's help-page currency statement can be stale (Montana's said 2017 while every page was 2025); record it and rely on history lines.
3. Rules 12 and 14: a past edition relied on for a legal call (Montana's § 70-24-303 history) must be fetched in the browser, saved and hash-matched like current text; a fetch summary of an old edition is a lead only.
4. Rule 16: where a pdf.js extraction of an enrolled act shows words the compiled code omits, assume possible strike-through, draft the row to the narrower reading until the PDF's marks are checked, and flag it (Montana 2025 ch. 656, 'for actual damages').
5. Rule 30: in the general landlord-tenant chapter, check section by section whether each excludes the act's arrangements; Montana's ch. 26 excludes ch. 24 tenancies in five sections but not in § 70-26-109 (change of terms) or § 70-26-101 (double letting).
6. Rule 19: a topic battery that requires the topic word ('foreclos-') misses statutes written in the procedure's own terms ('trustee's sale', 'purchaser'); add the procedure's vocabulary (Montana §§ 71-1-319, 25-13-822 were found only by the independent check).

## Proposed topic questions
1. `security-deposit-return`: Does the deadline exception for a pending court claim require the claim to be for actual damages, and does the enrolled act differ from the compiled code?
2. `rent-increase-notice`: Does a general-chapter change-of-terms statute apply to tenancies under the residential act when the act itself is silent?
3. `tenant-repair-agreement`: Does the act have two tenant-chore subsections with different formalities, and which governs specified repairs?
4. `smoking-policy`: Does the cannabis law treat vaping separately from smoking, so a lease vaping ban could reach protected non-smoked consumption?
5. `servicemember-rights`: Is the state's lease-termination right limited to its own National Guard?
6. `application-fees`: Does an application-fee refund rule apply only above a unit-count threshold, and is "property manager" broader than the licensing definition?
7. `abandoned-property`: Must the landlord give a separate plain-language notification of the property-disposition rules when the tenancy ends?
8. `foreclosure`: Does a trustee's-sale or execution-sale statute make tenants at will or redirect rent to the purchaser, even without the word "foreclosure"?
9. `fair-housing`: Does the state constitution's equal-dignity clause reach private persons, adding classes such as "social origin or condition"?

## Sync (Claude Code, 2026-10-03)

- **Merged** with `merge-delta.py --base 61410f3` (the 2,699-row library the kickoff was staged from) after the separator fix New Mexico's sync needed: all 44 tagged rows joined their `MT:` note with a space instead of " | ". Each base note was confirmed unchanged and the separator inserted in a copy. Then 44 rows tagged and 118 new, after the KS retro. Library 2,830 rows; MT 162 active (69 lease clauses, 93 education); no same-topic pairs; every other state's set unchanged. All seven rule 27 topics have MT rows; the only common topics without one are `landscaping-irrigation` and `snow-removal`, by design (§6.3 item 1).
- **Guards:** `check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py` and `checkConfigIds.js` all pass.
- **Tenant chores (§6.3 item 1) reviewed:** the reading gives effect to both subsections of Mont. Code Ann. § 70-24-303 and rests on saved past editions; the Oklahoma outcome follows. SOP rule 48 now names this shape.
- **Statute spot-check, 5 of 5, against mca.legmt.gov (Montana Code Annotated 2025, read by Claude Code at sync):** § 70-24-303(3)-(4) (the two chore subsections, neither limited to a single-family residence); § 70-24-202(4) (no e-mail address required as a condition of the lease) behind `electronic-notice-mt`; § 70-24-201(2)(f) (agreed early-termination amount, at most one month's rent) behind `early-termination-mt`; § 16-12-108(6) (a lease executed after January 1, 2021 may not bar lawful possession or non-smoked consumption) behind `smoking-policy-mt`'s vaping limit; § 70-24-110 (no firearm prohibition by contract).
- **Citations file** `lease-clause-citations-MT.csv`: 162 rows (138 cited, 20 confirmed-absent, 4 generic).
- **Legal watch:** MT config (bare quoted section numbers, since bills amend "Section 70-24-303, MCA"; lead CFR and 42 U.S.C. § 4852d) with manual recheck items for the § 70-24-303 changeover in 2031, 2025 Mont. Laws ch. 656's possible strike-through, and the court and portal rules. Montana is state #31, so it runs on day 3 at 14:00 UTC. `legal-watch-mt.yml` is held until after 2027-04-03; first run 2027-05-03.
- **PARTIAL review:** none; every MT row is VERIFIED. **Variables:** none new.
- **Topic questions:** all nine added; reference regenerated.
- **SOP 1.28:** all six proposals adopted (rules 14, 16, 19, 30) plus the rule 48 note; MT column added.
