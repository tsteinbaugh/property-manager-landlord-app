# Idaho — lease-clause decision log (state #24)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§1, §8, §12: Idaho Code Title 6, Chapter 3 (Forcible Entry and Unlawful Detainer; all 28 sections in the official chapter index) and Title 55, Chapters 2 and 3 (estates; rights of owners) read whole from legislature.idaho.gov section pages with every history line, each saved and hash-matched; section index diffed against the ID rows, §8) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: BYU-Idaho Student Landlord Housing Contract (Aug. 2023 standard form) as completed and used for Fall 2025 by Brighton Townhouses and Apartments, Rexburg, with its May 2025 addendum; the Blue Pine Property Management lease (Idaho Falls, 2023) as a partial second lead) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 73 scenarios, Claude-generated, AZ §18.1 / UT §16 model plus Idaho-specific) |
| Gap-discovery source 4 — outside-title search | Done (§17: regular-expression search of the whole Idaho Code (74 titles; 1,470 chapter PDFs plus 1,166 current 2026-affected sections overlaid from their section pages; 22,935 sections) loaded in the built-in browser; batteries 1-6, control term 0 hits; absence patterns checked against saved positives or synthetic statute-style positives (recorded per pattern for batteries 4-6); landlord-relevant hits read in context and relied-on sections read whole and saved) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state is closed. This pass changed no other state's row except by adding an `ID` tag and an `ID:` note.

**Date:** 2026-09-30 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** none of the three rule-9 triggers needed it, because the whole Idaho Code loaded into the browser and gave full-text proof of absence and cross-title search directly (rule 9).
**Kickoff vs SOP:** no conflict noticed. The rows use the kickoff's citation format (`Idaho Code § 6-320(a)(1)`, `2025 Idaho Sess. Laws ch. 65`); this log abbreviates session laws to '2025 ch. 65' and sections to '§ 6-320'.
**Scope:** Idaho state law only. City and county ordinances (Boise, Meridian, Nampa, Idaho Falls, Pocatello, Coeur d'Alene and others: rental registration, short-term rental and nuisance ordinances) flagged, not resolved (rule 3); state law bars local rent, fee and deposit regulation (Idaho Code § 55-306). Short-term rentals out of scope. Deprioritized and named: Manufactured Home Residency Act (Title 55, Chapter 20), floating home moorages (Title 55, Chapter 27), self-service storage (Title 55, Chapter 23), agricultural tenancies.
**Input CSV:** `lease-clauses.csv`, **1,792 rows, 17 columns, CRLF, 1,669 active (460 lease clauses, 1,209 education)**; active counts AL 113, AZ 107, CA 157, CO 117, FL 108, GA 104, IL 148, KS 129, MN 141, NC 111, ND 124, NE 120, NJ 89, NV 124, OH 98, PA 108, SC 111, SD 99, TN 132, TX 137, UT 122, VA 135, WY 107, matching the kickoff exactly (rule 23). No duplicate ids. One active row has a blank `states` field: the intentional parent `security-deposit-return`. No ID rows existed (rule 25). The outputs folder was empty at the start; nothing to delete (rule 8). The master round-trips byte-identically through Python's csv module (CRLF rows, LF inside quoted fields).
**Output CSV:** `lease-clauses-ID-delta.csv`, **121 rows, 17 columns, CRLF**: 53 existing rows with `ID` added to `states`, an `ID:` note appended and `last_checked` 2026-09-30, and 68 new ID rows. **ID 121 active: 64 lease clauses, 57 education; all VERIFIED.** Merged with the master: 1,860 rows, 1,737 active; every other state's active count unchanged. **No shared row's text changed.**

---

## 0. Completion status

| | Status |
|---|---|
| Primary text read | **Read whole, saved (87 sections, each hash-matched to the browser text, `hash-proof.tsv`):** Title 6, Chapter 3 (§§ 6-301 to 6-324 as indexed); Title 55, Chapters 2 and 3; §§ 6-201; 6-2602, 6-2603, 6-2605 to 6-2608; 9-505; 12-120, 12-121; 14-5-201; 18-5811A, 18-5812A; 26-2229A; 28-22-104, 28-22-105; 28-50-103; 48-602, 48-603, 48-603C, 48-603G; 49-1806; 52-414; 55-115; 55-2801 to 55-2803; 55-3211; 56-701A, 56-705; 67-5909, 67-5910. **Read in context only (labelled so in the rows):** §§ 45-1506, 55-3209, 55-3210, 56-704A, 28-9-109, 28-22-106, 18-3302(25), 18-8331, 28-52-105, 63-3612, 39-4116 and the other search hits named in §17. **Session laws:** 2026 ch. 82 (H0695) and 2025 ch. 65 (S1043) read in full; the effective-date clauses of six more acts read and compared with bill status; 2026 ch. 251 (H0893, codifier's corrections) screened by section list and citation search (§1.2). **Court rules:** I.C.A.R. 32(j) amendment order read; Idaho R. Civ. P. index screened (§1.1). |
| Step B — tag first | **Done.** 53 existing rows tagged ID (§2.1): the shared generic clauses lawful as written, the ks-oh-ca / ks-oh / ks-ne / ks variants, and two other states' rows whose text fits Idaho (`holdover-ca`, `tenant-forward-proceedings-ca`). 10 bases not tagged, with a variant or ID row instead (§2.2). Every single-state clause screened (§2.3). No shared text edited. |
| Step E — new ID rows | 11 lease clauses (4 optional under rule 54) and 57 education rows, including 15 confirmed-absence rows (the `edu-no-*` rows) (§3). |
| Instruction 24 family | `security-deposit-return-id` (REQUIRED; 30 days after surrender, the outer limit Idaho lets an agreement fix; signed itemized statement with a detailed list of expenditures; no retention for normal wear and tear). |
| Step D screens | All run (§19). Hits: rule 42 (the disability-modification restoration term 'shall be included in any lease or rental agreement', Idaho Code § 67-5909(8)(h)); rule 44 (lease terms materially affecting health and safety become enforceable duties, Idaho Code § 6-320(a)(5)); rule 50 (deposit refund time 'if no time is fixed by agreement', Idaho Code § 6-321(2)); rule 53 (`returned-payments` ceiling wording, base `holdover` 'maximum permitted' and base `parking-vehicle-rules` expired-registration towing replaced). |
| Optional clauses (rule 54) | 4 offered (casualty termination, notice-service fee, collection fee, interest on unpaid amounts); 10 not offered, with reasons (§6). |
| Questions to Taylor (rule 76) | None asked. One call (the § 55-212 right-of-reentry clause, not offered) is flagged to Taylor in the handoff message (§6.2). |
| Proof of absence | 15 confirmed-absence rows (`edu-no-*`), plus absences recorded inside other rows (source of income, meth disclosure, casualty, property left behind); every topic in the reference ends Present, Confirmed absent, Not located or Not applicable (§18). |
| Independent check | A separate agent checked the 121 ID rows against the saved texts: 2 wrong, 9 unsupported and a set of imprecise items, all fixed; absence claims without a saved battery were re-run as battery 4 (§13). |
| Currency | Current through the 2026 Regular Session; no extraordinary session since 2022. **The site's chapter PDFs lag the 2026 session**; every 2026-affected section was reloaded from its current page (§1.2). The 2025 reorganization of Title 55, Chapter 3 renumbered most sections (§1.2, §10). |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Statutes:** legislature.idaho.gov (Idaho Legislature), Idaho Statutes. Each section has its own page (`/statutesrules/idstat/Title6/T6CH3/SECT6-321/`) printing the section with its history line; each chapter index offers a 'Download Entire Chapter (PDF)'. The shell cannot reach the site (proxy CONNECT 403); the built-in browser could. Section text was taken from the page's `.pgbrk` element, normalized (curly quotes and dashes to ASCII, trimmed lines), hashed with SHA-256 in the browser, transcribed to `sources/sections/` and re-hashed there: 87 of 87 MATCH (rule 14).
- **Currency statement:** legislature.idaho.gov/statutesrules/howcurrentisthislaw/: 'Idaho Statutes and Constitutions are current through the 2026 Legislative Session' and 'are updated to the web July 1 following the legislative session' (saved, `currency-statement.txt`).
- **Session laws:** bill pages under `/sessioninfo/<year>/legislation/<bill>/` with status (votes, signature, 'Session Law Chapter N Effective: date'), the act PDF, and the official 'Code Sections Affected' index for each session (`/sessioninfo/<year>/codeindex/`). Cited as `2025 Idaho Sess. Laws ch. 65`.
- **Court rules:** Idaho Supreme Court (isc.idaho.gov): Idaho R. Civ. P. (index screened; no detainer-specific rule by title), Idaho Court Administrative Rules (I.C.A.R. 32(j) amendment read from the Court's order as posted by the Idaho State Bar; `court-rules.md`). Rule 21 flag: I.C.A.R. 32 is a court rule.
- **Administrative rules:** IDAPA (Human Rights Commission rules; Health and Welfare clandestine-lab cleanup rules) not read; no row relies on them (rule 21).
- **Government publication:** Idaho Attorney General, *Landlord and Tenant Manual*: not read (a lead only; §7).
- **Citation format:** `Idaho Code § 6-320(a)(1)`, every reference prefixed (programmatic check §8); log references written 'ID log sN'.

### 1.2 Currency (rule 16)
- **Compilation currency:** the section pages print amendments through the 2026 session (e.g. § 6-310A's history line ends '[am. 2026, ch. 82 ...]'). No extraordinary session has met since the 2022 First Extraordinary Session (session list on the code index page).
- **Bulk-data lag (rule 16):** the chapter PDFs are **not** current. The T6CH3 PDF copy of § 6-310A ends at the 2025 act and omits 2026 ch. 82, which the section page prints. The whole-code corpus therefore overlays every section in the official 2026 'Code Sections Affected' list (1,173 distinct numbers; 1,166 pages loaded; the 7 without pages are §§ 56-2503 to 56-2509, created by conflicting 2026 rural-health bills and not codified) with its current section page. Every section relied on was read from its section page, not a PDF.
- **Acts behind the sections relied on, with effective dates** (the act's own effective-date clause, extracted from the act PDF, compared with its bill status page; they agree for every act listed with a date; `session-laws.md`):
  - **2026 ch. 82 (H0695)**, effective 2026-07-01 (emergency clause): § 6-310A(5), 'writ of possession' to 'writ of restitution'. Only 2026 change in Title 6, Chapter 3.
  - **2025 ch. 65 (S1043)**, effective 2025-07-01 (emergency clause): reorganized Title 55, Chapter 3. Old → new: 55-307 → **55-304** (change of terms; 30-day rent-increase and nonrenewal notice), 55-314 → **55-305** (fee limits), new **55-306** (no local rent control, moved from old 55-307(2)), 55-308 → 55-307 (fixtures), 55-304 → 55-312, 55-305 → 55-313, 55-306 → 55-315, 55-309 → 55-308, 55-310 → 55-309, 55-311 → 55-314, 55-312 → 55-310, 55-313 → 55-311. Also deleted the coverture sentence in § 6-308 and fixed cross-references in §§ 39-3503 and 55-2006.
  - **2025 ch. 218 (H0174aaS)**, effective **2026-01-01** (no emergency clause): § 49-1806 (towing and booting; the expired-registration bar).
  - **2025 ch. 222 (H0321)**, 2025-07-01: § 6-310A created (unlawful occupant removal). **2025 ch. 326 (H0356aaS)**, 2025-07-01: § 55-115 (foreign adversaries). **2025 ch. 84 (H0198)**, 2025-07-01: Title 6, Chapter 26 (clandestine labs) amended.
  - **2024 ch. 269 (S1327)**, 2024-07-01: § 6-303A (record shielding, for cases filed on or after 2025-01-01). **2024 ch. 257 (H0545)**, 2024-07-01 (status page only; act text superseded by 2025 ch. 65, which is read): the local rent, fee and deposit ban (now § 55-306).
  - **2023 ch. 67 (S1039aa)**, 2023-07-01: the fee limits now in § 55-305, for agreements entered into or renewed on or after that date.
  - For the amended bills (H0174aaS, H0356aaS, S1039aa) the PDF read is the bill as introduced; the status page's effective date confirms the enacted version kept it.
- **Codifier's corrections:** 2026 ch. 251 (H0893), 133,942 characters extracted and screened by its section list and a citation search: it amends no section in Title 6, Chapters 3 and 26 or Title 55, Chapters 2 and 3. In Title 55 it touches only § 55-103 (cited as context in `edu-foreign-adversary-rental-id`, not relied on) and § 55-3203. Other titles were not screened section by section.
- **Dead bills (rule 18, not law):** 2026 H0701 and 2025 S1042a (application fees), 2024 H0641 (drug detainer), 2023 H0164, H0169 and S1089 (notice and disclosure bills). `session-laws.md`.
- **Real-lease probe:** the BYU-Idaho contract cites no Idaho Code section, so it gives no renumbering probe. The 2025 renumbering is flagged for older Idaho forms (§10).

### 1.3 Corpus and method (rule 19)
- **Loaded:** all 74 titles on the official title index; 1,751 chapter rows, of which 1,471 offer a chapter PDF (279 of the rest are marked repealed, reserved or redesignated; Title 15, Chapter 15 has no section links). 1,470 PDFs loaded and text-extracted with pdf.js; the one 404 (Title 44, Chapter 28) was loaded from its 4 section pages. Plus the 2026 overlay. **22,935 sections, 37.3 million characters.** Completeness is proved against the site's own title and chapter indexes.
- **Engine:** JavaScript regular expressions, case-insensitive, over each section in two normalizations (line-end hyphenation joined; hyphen kept). Control term 'zqxvbnmwt': 0 hits. Calibration: 'security deposits?' 14 sections including §§ 6-320, 6-321; '\btenants?\b' 126 sections.
- **Idaho writes numbers as 'one (1) year'.** The first statute-of-frauds pattern missed § 9-505 for that reason and was rewritten. Battery 1 records that its absence patterns were checked against synthetic positives before use, but not the result per pattern; batteries 4-6 record 'pos: true' per pattern. Two other patterns were rewritten after missing a known hit or failing a positive (locks v1 missed § 6-310A's 'changes the locks'; application of payments v1 failed its positive).
- **Boundary:** statutes only. Administrative rules (IDAPA), case law, local codes, the Idaho Constitution and the adopted building and fire codes were not searched or read, and nothing is claimed about them.
- **Saved:** batteries 1-6 (`batteries/`), the corpus description, every section relied on (`sections/`), session-law excerpts with hashes, court-rule notes and the real-lease sources.

### 1.4 Section-open vs recall (rule 15)
Every row was written with the saved primary text open; the recall subset is empty. Sections read only in context are labelled so in their rows. **Case law is not relied on anywhere:** waiver by accepting rent, the penalty doctrine for fees, exculpatory clauses, what counts as waste, whether 'actual cost' is an amount agreed under § 55-305(2)(a), and whether a stated fee is 'reasonable' are each flagged as case law, not read.

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged ID as written (53)
`acceptable-payment-methods`, `addendum-precedence`, `no-alterations`, `appliances-included`, `application-of-payments`, `assigned-parking-space`, `assistance-animal-accommodation`, `common-area-use`, `default-by-tenant`, `no-disturbance`, `due-at-signing`, `early-termination-ks`, `electronic-signatures`, `entire-agreement`, `existing-condition`, `fire-safety-grilling`, `governing-law`, `guest-policy`, `guest-policy-day-limit`, `hoa-compliance`, `holdover-ca`, `inspection-rights`, `joint-liability`, `keys`, `landlords-access`, `landlord-maintenance`, `landscaping-irrigation`, `late-fee`, `lead-based-paint`, `notices`, `parking-ks-oh-ca`, `pet-insurance-requirement`, `pet-policy`, `permitted-occupants`, `possession-delay`, `rent-payment`, `rental-application-accuracy`, `residential-use-only`, `security-deposit-use`, `services-utilities-provided-ks-oh`, `severability`, `smoking-policy`, `snow-removal`, `storage-space-ks-oh-ca`, `no-sublet-assign`, `surrender-end-of-term-ks-ne`, `tenant-forward-proceedings-ca`, `tenant-maintenance`, `tenants-property-insurance-ks-oh-ca`, `utilities-paid-by-landlord`, `utilities-responsibility`, `utility-payment-evidence`, `utility-service-continuity`.

Every tagged row carries an `ID:` note naming the controlling Idaho section and ending 's5a.1: states-only change, no propagation owed.' The ones that matter:
- **`late-fee` (base).** No cap or grace period; any fee must be reasonable (§ 55-305(1)) and, for agreements entered into or renewed on or after 2023-07-01, not more than the amount the agreement states (§ 55-305(2)(a)). No acceptance-waiver statute (battery 2), so the base non-waiver sentence stays.
- **`holdover-ca`** instead of the base: 'maximum amount permitted by applicable law' would point at treble damages (§ 6-317).
- **`landlord-maintenance`.** Rule 44 hit: § 6-320(a)(5) lets a tenant sue for breach of any lease term 'materially affecting the health and safety of the tenant', so the clause's maintenance promise is enforceable through § 6-320 with possible treble damages. The promise matches § 6-320(a)(1)-(3), so the base stays.
- **`entire-agreement`.** Rule 44/50 check: § 55-304(1) lets a landlord change month-to-month terms by written notice 15 days before month end, and § 55-305(2)(b)(ii) lets a written agreement's fee change on 30 days' notice. The clause's 'or as applicable law permits Landlord to change it by written notice' preserves both.
- **`keys`.** § 55-305(2)(a) bars a charge 'greater than that agreed upon'; whether 'the cost' of re-keying is an agreed amount is unsettled (§10, same question as UT).
- **`pet-policy`.** A pet deposit is a security deposit (§ 6-321(1)). Pet rent is either rent (unlimited, § 55-305(4)) or a fee (reasonable, stated); stating it in the lease satisfies either reading.
- **`no-alterations`.** Its last sentence preserves the § 67-5909(8)(h) modification right; the restoration term the statute requires in the lease is carried by the new `disability-modification-restoration-id`.
- **The ks-oh-ca / ks-oh variants.** No Idaho statute voids exculpatory terms in residential leases (battery 3: 0 hits). The variants are used so the Idaho lease carries no unsettled waiver (rule 52).
- **`possession-delay` (base).** No Idaho statute on failure to deliver possession, so the base's 30-day termination wait conflicts with nothing and is tagged; `possession-delay-ca` is not needed.

### 2.2 Not tagged — Idaho variant or ID row instead (10 bases)

| Base | Instead | Why the base fails in Idaho |
|---|---|---|
| `security-deposit-return` (blank parent) | `security-deposit-return-id` | Instruction 24; § 6-321(2) |
| `returned-payments` | `returned-payments-id` | Ceiling-only wording (rule 53); § 55-305(2) needs a stated amount; § 28-22-105 $20 set fee |
| `parking-vehicle-rules` | `parking-vehicle-rules-id` | Lets Landlord tow for expired registration; § 49-1806(3) (2025) forbids towing 'solely' on that basis |
| `holdover` | `holdover-ca` (tagged) | 'Maximum permitted' points at § 6-317 treble damages (rule 53) |
| `surrender-end-of-term` | `surrender-end-of-term-ks-ne` (tagged) + `abandoned-property-id` | 'Disposed of at Tenant's cost' rests on no Idaho statute; § 6-316(2) is post-judgment only |
| `early-termination` | `early-termination-ks` (tagged) | Separate 10-day cure would sit beside `default-by-tenant` and the § 6-303 notices |
| `tenants-property-insurance`, `parking`, `storage-space`, `services-utilities-provided` | the ks-oh-ca / ks-oh variants (tagged) | 'Not liable' sentences; rule 52 |

**Generic-coverage check (programmatic):** every generic lease clause is tagged ID or superseded by an ID-tagged row, except these, each deliberate: `ev-charging-shared-area-co` and `ev-charging-end-of-tenancy-co` (rest on Colorado's EV statute; Idaho has none), `extended-absence-notice-ks` (URLTA absence notice; Idaho has no such statute, and `abandoned-property-id` covers property left behind), `default-by-tenant-ks-ne`, `late-fee-ne`, `surrender-end-of-term-mn-nd`, `acceptable-payment-methods-nj` and `possession-delay-ca` (the base or another variant is tagged instead and fits Idaho).

### 2.3 Other states' specific rows screened, not tagged
All 389 active single-state lease clauses were listed by `topic_key`, and every plausible analogue was read in full. Beyond the two tagged (`holdover-ca`, `tenant-forward-proceedings-ca`), none applies to Idaho as written, because each names its own state's statute. What ID took instead:
- **Deposits.** The 16 `security-deposit-return-*` variants became `security-deposit-return-id`. The nonrefundable-deposit rows (`nonrefundable-deposit-notice-wy`, `-ut`, `nonrefundable-fees-az`) have no Idaho basis: Idaho has no nonrefundable-deposit rule, so `edu-nonrefundable-fees-id` instead.
- **Opt-in rows.** `casualty-termination-pa` / `-il` became `casualty-termination-id`; `notice-service-fee-ut` and `collection-fee-ut` became Idaho rows on Idaho's own statutes; `unpaid-damages-interest-wy` became `unpaid-amounts-interest-id`. `holdover-rate-*`, `notice-to-quit-waiver-pa`, `homestead-waiver-va`, `exemption-waiver-al`, `landlord-lien-tx`, `household-goods-lien-tn`, `criminal-activity-*`, `crime-free-addendum-az`, `drug-free-housing-addendum-il`, `smoke-drift-waiver-ut` and the `tenant-repair-agreement-*` / `maintenance-allocation-*` rows have no Idaho counterpart or were not offered (§6).
- **Disclosures.** The 18 owner-identity rows (`landlord-disclosure-*` and others) rest on statutes Idaho lacks: `edu-no-owner-disclosure-id`. `meth-disclosure-*` rows: Idaho has no tenant disclosure duty, only cleanup and vacancy (`edu-meth-cleanup-id`).
- **Other.** `periodic-tenancy-notice-*` became `periodic-tenancy-notice-id`; `abandoned-property-*` became `abandoned-property-id`; the 16 `alarm-duties` rows became `smoke-detectors-id` (Idaho has its own split of duties, § 6-320(a)(6)); `electronic-notice-*` rows not copied (no statutory email method; `edu-notice-service-id`); `move-in-inventory-*` not copied (no Idaho statute).

## 3. New ID rows

### 3.1 Shared-row edits: none
No shared row's `bodyText`, `rule_type`, `content_type`, `lease_clause_basis` or any field other than `states`, `notes` and `last_checked` changed (programmatic check).

### 3.2 New ID lease clauses (11)
| Row | topic_key | rule_type | Basis | Rests on (read whole unless marked) | Opt-in? |
|---|---|---|---|---|---|
| `security-deposit-return-id` | security-deposit-return | REQUIRED | SERVES_LANDLORD | § 6-321(2), § 6-320(a)(4), § 6-317, § 6-324 | — |
| `returned-payments-id` | returned-payments | RECOMMENDED | CONSTRAINED_TERM \| SERVES_LANDLORD | § 55-305(2)(a), § 28-22-105 | — |
| `parking-vehicle-rules-id` | parking-vehicle-rules | RECOMMENDED | SERVES_LANDLORD | § 49-1806(3) | — |
| `smoke-detectors-id` | alarm-duties | RECOMMENDED | SERVES_LANDLORD | § 6-320(a)(6) (CO: confirmed absent in the landlord-tenant chapters) | — |
| `disability-modification-restoration-id` | disability-accommodation | REQUIRED | REQUIRED_DISCLOSURE: Idaho Code § 67-5909(8)(h) | § 67-5909(8)(h), § 67-5910(7) | — |
| `abandoned-property-id` | abandoned-property | RECOMMENDED | SERVES_LANDLORD | CONFIRMED ABSENT outside eviction; § 6-316(2) (post-judgment only), § 49-1806 | — |
| `periodic-tenancy-notice-id` | termination-notice | RECOMMENDED | SERVES_LANDLORD | § 55-208, § 55-209, § 6-303(1), § 6-304 | — |
| `casualty-termination-id` | casualty-termination | CONDITIONAL | SERVES_LANDLORD | § 6-320(a) | Yes (rule 54) |
| `notice-service-fee-id` | notice-service-fee | CONDITIONAL | CONSTRAINED_TERM \| SERVES_LANDLORD | § 55-305, § 6-303(2), § 6-324 | Yes (rule 54) |
| `collection-fee-id` | collection-fee | CONDITIONAL | CONSTRAINED_TERM \| SERVES_LANDLORD | § 26-2229A(4), § 55-305(1), § 28-22-105 | Yes (rule 54) |
| `unpaid-amounts-interest-id` | unpaid-damages-interest | CONDITIONAL | CONSTRAINED_TERM \| SERVES_LANDLORD | § 28-22-104(1), § 55-305(2), § 6-303(2) | Yes (rule 54) |

### 3.3 New ID education rows (57)
| Row | topic_key | rule_type | Rests on (read whole unless marked) |
|---|---|---|---|
| `edu-security-deposit-rules-id` | security-deposit-penalty | RECOMMENDED | § 6-321(1), § 6-320(a)(4), § 6-323, § 6-317 |
| `edu-no-deposit-cap-id` | security-deposit-cap | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-no-deposit-interest-id` | security-deposit-interest | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-deposit-successor-id` | security-deposit-on-sale | RECOMMENDED | § 6-321(3), § 55-301, § 55-303 |
| `edu-deposit-manager-account-id` | security-deposit-holding | REQUIRED | § 6-321(4) |
| `edu-nonrefundable-fees-id` | nonrefundable-deposit-notice | RECOMMENDED | § 6-321(1), § 55-305(1) |
| `edu-pet-deposit-id` | pet-fees | RECOMMENDED | § 6-321(1), § 55-305(1), § 18-5812A(1) |
| `edu-deposit-refund-unclaimed-id` | deposit-escheat | RECOMMENDED | § 14-5-201(1)(n) |
| `edu-late-fee-reasonable-id` | late-fee | CONSTRAINED | § 55-305(1) |
| `edu-fees-in-lease-id` | required-fees | CONSTRAINED | § 55-305(1) |
| `edu-rent-increase-notice-id` | rent-increase-notice | REQUIRED | § 55-304(2)(b), § 55-306 |
| `edu-nonrenewal-notice-id` | termination-notice | REQUIRED | § 55-304(2)(a), § 55-208 |
| `edu-term-change-notice-id` | term-change-notice | RECOMMENDED | § 55-304(1), § 55-305(2)(b)(ii) |
| `edu-nonpayment-notice-id` | nonpayment-notice | REQUIRED | § 6-303(2), § 6-324, § 6-304, § 6-316(2) |
| `edu-cure-notice-id` | cure-and-eviction-grounds | RECOMMENDED | § 6-303(3), § 6-304, § 55-210, § 55-212 |
| `edu-expedited-drug-eviction-id` | expedited-criminal-eviction | RECOMMENDED | § 6-303(5), § 6-310(1), § 6-311, § 6-311A |
| `edu-eviction-process-id` | eviction-process | RECOMMENDED | § 6-305, § 6-310(1), § 6-311, § 6-311A |
| `edu-post-eviction-property-id` | post-eviction-property | RECOMMENDED | § 6-316(2), § 6-311C, § 49-1806 |
| `edu-eviction-record-shielding-id` | eviction-record-sealing | RECOMMENDED | § 6-303A |
| `edu-self-help-eviction-id` | self-help-eviction | PROHIBITED | § 6-301, § 6-302, § 6-317, § 52-414 |
| `edu-unauthorized-occupant-removal-id` | unauthorized-occupant-removal | RECOMMENDED | § 6-310A, § 6-302(2), § 6-310(3), § 6-311A |
| `edu-lewd-use-lease-void-id` | nuisance | RECOMMENDED | § 52-414, § 6-303(5) |
| `edu-holdover-damages-id` | holdover | RECOMMENDED | § 6-303(1), § 6-316(1), § 6-317 |
| `edu-attorney-fees-id` | attorney-fees | RECOMMENDED | § 6-324, § 12-120(1), § 12-121 |
| `edu-tenant-remedies-id` | tenant-repair-remedies | RECOMMENDED | § 6-320(a), § 6-323, § 6-317 |
| `edu-landlord-duties-id` | landlord-maintenance | REQUIRED | § 6-320(a)(1) |
| `edu-no-retaliation-statute-id` | retaliation | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-no-entry-statute-id` | landlord-entry | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-rent-control-preemption-id` | rent-control | RECOMMENDED | § 55-306 |
| `edu-source-of-income-id` | source-of-income | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-fair-housing-id` | fair-housing | RECOMMENDED | § 67-5909(8)(a), § 67-5910(7) |
| `edu-service-dog-housing-id` | service-animal-denial-penalty | PROHIBITED | § 18-5812A, § 56-705, § 56-701A(5) |
| `edu-service-animal-misrepresentation-id` | service-animal-misrepresentation | RECOMMENDED | § 18-5811A, § 56-705, § 56-701A |
| `edu-no-servicemember-statute-id` | servicemember-rights | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-no-dv-termination-id` | dv-lease-termination | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-no-owner-disclosure-id` | owner-identity-disclosure | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-no-radon-disclosure-id` | radon-disclosure | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-no-mold-disclosure-id` | mold-disclosure | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-no-bed-bug-rule-id` | bed-bug-disclosure | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-no-flood-disclosure-id` | flood-disclosure | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-meth-cleanup-id` | meth-disclosure | REQUIRED | CONFIRMED ABSENT (tenant disclosure); § 6-2606, § 6-2607 |
| `edu-psychologically-impacted-id` | stigmatized-property | RECOMMENDED | § 55-2801 |
| `edu-hoa-rental-restrictions-id` | hoa | RECOMMENDED | § 55-3211 |
| `edu-landlord-tenant-scope-id` | scope | RECOMMENDED | § 6-320(e) |
| `edu-lease-in-writing-id` | statute-of-frauds-lease-term | RECOMMENDED | § 9-505(4) |
| `edu-notice-service-id` | notice-delivery-methods | REQUIRED | § 6-304, § 6-323, § 55-208(1), § 28-50-103 |
| `edu-rent-sales-tax-id` | rent-tax | RECOMMENDED | § 63-3612(2)(g) (read in context) |
| `edu-legal-interest-id` | unpaid-damages-interest | RECOMMENDED | § 28-22-104(1), § 55-305(2) |
| `edu-foreign-adversary-rental-id` | foreign-ownership | RECOMMENDED | § 55-115 |
| `edu-tenant-waste-id` | tenant-statutory-duties | RECOMMENDED | § 6-201, § 6-303(4), § 6-320(a)(6) |
| `edu-consumer-protection-act-id` | consumer-protection-act | RECOMMENDED | § 48-602(2), § 48-603C, § 48-603, § 48-603G |
| `edu-foreclosure-tenants-id` | foreclosure | RECOMMENDED | § 45-1506(11) (read in context), § 6-310(1)(d), § 6-311A |
| `edu-no-application-fee-rule-id` | application-fees | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-no-tenant-death-rule-id` | tenant-death | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-towing-id` | towing | RECOMMENDED | § 49-1806 |
| `edu-no-just-cause-id` | for-cause-eviction | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |
| `edu-no-landlord-lien-id` | landlord-lien | RECOMMENDED | CONFIRMED ABSENT (search record in the row notes) |

## 4. Layout and placement (rule 40)

**Code-wide typography search (battery 5):** 'bold', 'underline', 'conspicuous', type size, capitals, 'separate document', 'substantially the following form' and initialing, each also filtered to sections containing tenant, landlord, lease, lessee, lessor, rental agreement or dwelling unit, every pattern tested against a synthetic positive. **No bold, underline, capitals, type-size, separate-document or initialing rule for any residential lease term.** The rental-context hits are other kinds of leases: liquefied-petroleum-gas container leases (§ 54-5318: the restriction in two-point larger type, underlined or bold), leases of goods (Title 28, Chapter 12), rent-to-own of goods (Title 28, Chapter 36), self-storage rental agreements (§ 55-2304: a conspicuous lien statement), structured settlements (§ 28-9-109) and the floating-home act; 'conspicuous' otherwise means posting a notice on the property (§§ 6-304, 45-1506). **Prescribed forms and wording a landlord meets:**

| Rule | Requirement | Where it lives |
|---|---|---|
| § 67-5909(8)(h) | Restoration condition for disability modifications 'shall be included in any lease or rental agreement' | `disability-modification-restoration-id` (REQUIRED) |
| § 6-303(2) | Three-day notice states the amount due and the 72-hour belongings statement | `edu-nonpayment-notice-id` (builder: notice generator) |
| § 6-324 | Nonpayment notice must say attorney fees will be awarded to the prevailing party, or no fees | `edu-nonpayment-notice-id`, `edu-attorney-fees-id` |
| § 6-310A(3) | Verified complaint to remove unlawful occupants, 'in substantially the following form' | `edu-unauthorized-occupant-removal-id` |
| § 6-311C | Writ of restitution form (the court's) | `edu-post-eviction-property-id` |
| § 28-22-106 | Notice of dishonor in the statutory form (only where no written set fee) | `returned-payments-id` (builder: generate the notice if no set fee) |
| § 6-321(2) | Signed itemized statement with a detailed list of expenditures | `security-deposit-return-id` |
| § 49-1806(1) | Towing sign: clearly conspicuous, large print, names the towing firm | `edu-towing-id`, `parking-vehicle-rules-id` |
| § 48-603(12)-(13) | No blank spaces filled in after signing; legible copy at signing (reach to leases unsettled) | `edu-consumer-protection-act-id` (builder: §14) |
| § 48-603G(2) | Internet automatic renewals: renewal terms and cancellation methods 'clearly and conspicuously' (reach to leases unsettled) | No ID row renews automatically; §10 |

**Omission sanctions that forfeit money:**
- Deposit not returned as § 6-321 requires: the tenant's § 6-320(a)(4) suit, with possible treble damages (§ 6-317), after a three-day written demand (§ 6-320(d)).
- A fee, fine, interest or other charge not stated in a written agreement entered into or renewed on or after 2023-07-01: not chargeable without 30 days' written notice (§ 55-305(2)(b)).
- A nonpayment notice without the fee advisory: no attorney fees for the landlord (§ 6-324).
- Denying a service-dog user housing or charging extra: a misdemeanor if intentional (§ 18-5812A(2)), and damages plus punitive damages equal to the other damages, at least $500 (§ 56-705).
- Smoke detectors not installed within 72 hours of the tenant's certified letter: tenant installs and deducts (§ 6-320(a)(6)).

## 5. Dormant rows resolved (rule 25)
None: no row in the library, active or dormant, was tagged ID.

## 6. Decisions

### 6.1 Optional clauses found (rule 54)

| Candidate | Law | Verdict |
|---|---|---|
| Landlord or tenant termination after a casualty | No Idaho statute (battery 2: 45 sections, none residential); § 6-320(a) preserved | **Offered** (`casualty-termination-id`, CONDITIONAL); standing GA decision |
| Notice-service fee | § 55-305(1)-(3); no ban (battery 3: 0 hits) | **Offered** (`notice-service-fee-id`, CONDITIONAL), same guardrails as `notice-service-fee-ut` (fee kept out of the rent demanded; not by itself an eviction ground). Decided by Claude on Taylor's UT reasoning (UT log s6.2) |
| Collection fee | § 26-2229A(4)(c): charges 'expressly authorized by the agreement creating the debt' | **Offered** (`collection-fee-id`, CONDITIONAL). Decided by Claude on Taylor's UT decision |
| Interest on unpaid amounts | § 28-22-104(1) (12% unless a written contract fixes another rate); § 55-305(2) (interest not in a post-2023 written agreement only after 30 days' written notice) | **Offered** (`unpaid-amounts-interest-id`, CONDITIONAL, rate capped at 12%). Differs from UT, where the legal rate applied without lease text: in Idaho § 55-305(2)(b) bars charging interest a written agreement does not include unless the owner first gives 30 days' written notice (oral agreements excepted). Decided by Claude |
| Deposit refund time fixed by the lease | § 6-321(2): 21 days 'if no time is fixed by agreement', never more than 30 | **Used** (rule 50): `security-deposit-return-id` fixes 30 days on purpose |
| Stipulated holdover rate | § 6-317 treble damages; § 6-316 damages assessed in the judgment | **Not offered.** The standing GA rule offers a rate only 'where no statutory measure exists'; a contract rate would also invite trebling. Decided by Claude |
| Criminal-activity / crime-free clause | § 6-303(5) drug ground (no notice stated); § 52-414 lewd use; § 6-303(3) proviso (breach that cannot be performed) | **Not offered:** the drug ground is statutory; a contract cannot add no-cure statutory grounds, and a clause promising immediate termination for 'any criminal activity' would overpromise under § 6-303(3). `residential-use-only` bars illegal use. Decided by Claude |
| Waiver or shortening of the § 6-303 notices | none | **Not offered:** no statute lets a lease waive or shorten them |
| Right of reentry (a lease right that changes the landlord's remedies) | § 55-210 (reentry 'upon three (3) days' notice'); § 55-212 (an ordinary district-court action for possession of property leased with a right of reentry, after the right accrues, 'without notice') | **Not offered as a separate clause.** `default-by-tenant` already lets the landlord terminate and regain possession, but only after the written notice and chance to cure the library keeps as its standard, so the right accrues only after that notice. A clause making reentry accrue without notice would give up that standard to gain only a slower ordinary action, and how § 55-212 fits with the § 6-303 summary-track notices is case law, not read. Recorded in `edu-cure-notice-id`. Decided by Claude |
| Waiver of exemptions | no statute authorizes one (battery 1: 17 sections, none residential) | **Not offered;** exemption statutes not read (§7) |
| Contractual lien on tenant property | no residential landlord lien statute (battery 2) | **Not offered;** self-help seizure risks § 6-301 and § 6-317 (`edu-no-landlord-lien-id`) |
| Smoke-drift waiver | no smoke-drift statute (battery 3) | **Not offered:** nothing to waive |
| Tenant-performed statutory duties | no Idaho framework; § 6-320 duties enforced by suit, silent on allocation | **Not offered** as a separate clause; `tenant-maintenance`, `landscaping-irrigation` and `snow-removal` cover tenant tasks. Decided by Claude |
| Jury waiver | § 6-313 ('unless such jury be waived as in other cases') | **Not offered:** waiver is a litigation step; no statute supports a pre-dispute lease waiver |
| Month-to-month surcharge, lease-initiation or guest fees (seen in the real leases) | § 55-305 (reasonable, stated) | **Not offered** as clauses: product fee schedule, not law (§14) |

### 6.2 Questions asked of Taylor (rule 76)
**None.** Each call above was either settled by the SOP or a standing decision (casualty: GA; notice-service and collection fees: Taylor's UT decisions, applied on the same reasoning to Idaho's own statutes), or one Claude was confident of and has recorded with its reasoning. No product decision outside the SOP arose: no new default, no new kind of clause, no dropped topic. A status message was sent in the chat mid-pass (bulk lag, renumbering, § 67-5909(8)(h), the towing variant, the BYU-Idaho lease), with no question. One late call is flagged to Taylor in the handoff message rather than asked, because this session was resumed with instructions to finish without further questions: the § 55-212 right-of-reentry clause was not offered (§6.1; recommendation: keep it that way). If he wants it offered, it would be a new optional clause and needs his decision.

## 7. Open items (none blocking)

| Item | Boundary / what would close it |
|---|---|
| Case law | Waiver by accepting rent; the penalty doctrine for fees (notice-service, collection, early termination); exculpatory clauses; what is 'reasonable' under § 55-305(1); whether 'actual cost' is an amount agreed under § 55-305(2)(a); waste by periodic tenants (§ 6-201); whether fees in a § 6-303(2) notice defeat it; whether § 55-2801 (psychologically impacted property) protects a landlord; the reach of § 48-603(12)-(13) and § 48-603G to residential leases. Not read. |
| Attorney General's manual | *Landlord and Tenant Manual*: not read (a lead only; it could confirm practice points but is not authority). |
| Administrative rules | IDAPA rules of the Human Rights Commission and the Department of Health and Welfare (clandestine lab cleanup standards) not read (rule 21). |
| Court rules | Idaho R. Civ. P. texts not read (index screened; no detainer-specific rule by title); I.C.A.R. 32 current text on isc.idaho.gov not compared with the order read; court self-help eviction forms not read. |
| Not read beyond context | §§ 45-1506 (trustee sale possession), 28-22-106 (notice of dishonor form), 55-3209 and 55-3210 (HOA signs and flags), 56-704A, 18-3302(25), 18-8331, 28-52-105, 63-3612, 39-4116; exemption statutes (Title 11, Chapter 6; Title 55, Chapter 10); unclaimed property holder duties beyond § 14-5-201; probate on a tenant's death. |
| Federal (rule 21) | SCRA (50 U.S.C. § 3955); PTFA (12 U.S.C. § 5220 note); FHA (42 U.S.C. § 3604, including familial status and assistance animals); VAWA (34 U.S.C. § 12491); lead (42 U.S.C. § 4852d, 40 CFR 745.113): cited, not read. |
| Local ordinances | Boise, Meridian, Nampa, Idaho Falls, Pocatello, Coeur d'Alene and others (rental registration, short-term rentals, nuisance, towing signage): flagged, not resolved (rule 3). |
| Mobile and floating homes | Title 55, Chapters 20 and 27 have their own retaliation, rent-increase and eviction rules; deprioritized, not relied on. |
| Building and fire codes | Adopted building, residential and fire codes (Title 39, Chapter 41) not read; smoke and CO alarm installation standards there (`smoke-detectors-id` rests on § 6-320(a)(6) only). |

## 8. Integrity checks on the delta
- **Format:** 121 rows plus header; 17 columns, same header as the master; CRLF row endings, LF only inside quoted fields. The master's own round trip through the csv module was byte-identical before building, so unchanged fields are byte-identical.
- **Ids and links:** no duplicate ids; no new id collides with a master id; no dangling `supersedes` (`security-deposit-return-id` → `security-deposit-return`, `returned-payments-id` → `returned-payments`, `parking-vehicle-rules-id` → `parking-vehicle-rules`, all existing). No display collision: no ID row supersedes another ID-tagged row.
- **Topics:** no two ID lease clauses share a `topic_key`. Every new row uses an existing `topic_key`; no new key was created.
- **Required fields:** every ID row has a `verification_status` (all VERIFIED) and `effective_from` / `last_checked` 2026-09-30. Every ID lease clause has a `lease_clause_basis`; no education row has one.
- **Tagged rows:** for each of the 53 tagged rows, only `states` (+ID), `notes` (the pre-existing notes are an exact prefix, then ' | ID: ...') and `last_checked` changed.
- **Counts:** ID 0 → 121 active (64 lease clauses, 57 education). Every other state's active count is unchanged: AL 113, AZ 107, CA 157, CO 117, FL 108, GA 104, IL 148, KS 129, MN 141, NC 111, ND 124, NE 120, NJ 89, NV 124, OH 98, PA 108, SC 111, SD 99, TN 132, TX 137, UT 122, VA 135, WY 107.
- **Variables (rule 60):** only names on the kickoff's builder list (appliance_list, late_fee_amount, late_fee_grace_days, monthly_rent, occupant_names, pet_deposit, pet_rent_amount, security_deposit, state, tenant_insurance_minimum, tenant_names); no bracket next to a variable. Hand-filled items use brackets. **No new `{{variable}}` created.**
- **Citation screen (rules 21-22):**
  - Every '§' in ID-authored text is prefixed 'Idaho Code' or is federal (0 bare); no doubled prefix.
  - All 124 section-like numbers cited in ID text were checked against the loaded current code. All exist except those cited deliberately as absent (§§ 6-306, 6-307, 6-311B, which the official chapter index does not list) and one false positive ('2-3' in 'Chapters 2-3').
  - No other state's citation prefix appears in any ID segment.
- **Statute walk diff (rule 29, programmatic):** every section of Title 6, Chapter 3 and of Title 55, Chapters 2 and 3 is cited by at least one ID row, except these, uncited by design:
  - §§ 6-308, 6-309 (parties), 6-314 (evidence; defenses), 6-315 (amending the complaint): court procedure;
  - §§ 55-201 to 55-207 (future estates, remainders, Rule in Shelley's case, powers of appointment) and § 55-211 (summary proceedings are in the civil procedure code): estates law or a pointer;
  - §§ 55-302 (lessor's remedies against an assignee), 55-308 to 55-311 (streets, lateral support, fences, access), 55-312, 55-313 (leases for life), 55-314 (duties of a tenant for life; mentioned in ID text only as the pre-2025 number of today's § 55-305) and 55-315 (reversioners): not residential-lease rules.
  - The diff script counts any mention of a number; § 55-314 was moved to this list by hand because its only mention is as a former number. § 55-212 (action on a right of reentry without notice) is cited in `edu-cure-notice-id` (§6.1).
  - One level down, § 6-303 (1)-(5), § 6-320 (a)(1)-(6), (d) and (e), § 6-321 (1)-(4), § 55-304 (1)-(2) and § 55-305 (1)-(4) (subsection (3) through the range '(2)-(3)') are each cited by subsection. § 6-320(b) (what the tenant's complaint must plead) and (c) (judgment for damages or specific performance) are uncited by design; `edu-tenant-remedies-id` states their effect.

## 9. Propagation notes (rule 62)
**None owed.** No shared row's text changed. Every change to an existing row is an added `ID` tag with an `ID:` note, a states-only change under §5a.1.

## 10. Findings for other states or the product (flagged, not fixed)
1. **Bulk-data lag on legislature.idaho.gov.** The chapter PDFs omit 2026 amendments that the section pages print (§ 6-310A). Any future Idaho work, and any legal-watch script, must read section pages or overlay the session's 'Code Sections Affected' list.
2. **2025 renumbering of Title 55, Chapter 3.** Rent-increase and nonrenewal notice moved from § 55-307 to § 55-304, fees from § 55-314 to § 55-305, and fixtures from § 55-308 to § 55-307. Idaho forms, landlord sites and leases printed before July 2025 cite the old numbers; a landlord who copies them cites a section that now means something else.
3. **Product flag — nonrenewal notice.** § 55-304(2) requires written notice of nonrenewal at least 30 days before nonrenewal, for any residential lease. The builder's reminders should prompt an Idaho landlord 30+ days before a fixed term ends (§14).
4. **'Actual cost' charges against § 55-305(2)(a).** `keys`, `parking-vehicle-rules-id` (tags, decals, cards) and `smoking-policy` charge actual cost rather than an agreed amount. Same open question as UT (UT log s10 item 5); a state-neutral fix would state an amount or a formula.
5. **Blank-state parent `security-deposit-return`.** Still intentional; `security-deposit-return-id` supersedes it for Idaho.
6. **Consolidation candidate.** `disability-modification-restoration-id` carries statutory text that tracks the federal Fair Housing Act's modification provision (42 U.S.C. § 3604(f)(3)(A), not read). Other states whose fair housing acts copy the federal wording may have the same 'shall be included in any lease' sentence; a state-neutral row could serve several. Not done, so no other state's row changed (rule 62).
7. **Generic-coverage check exceptions** for Claude Code's `check-*` scripts: `ev-charging-shared-area-co`, `ev-charging-end-of-tenancy-co`, `extended-absence-notice-ks`, and the variants whose base is tagged instead (`default-by-tenant-ks-ne`, `late-fee-ne`, `surrender-end-of-term-mn-nd`, `acceptable-payment-methods-nj`, `possession-delay-ca`) (§2.2).
8. **Stale cross-references (rule 77): none.** Every pointer to §§ 55-304 to 55-315 outside Title 55, Chapter 3 (§§ 39-3503, 55-2006) was updated by the 2025 act; the cross-references inside the sections relied on (§§ 6-303, 6-316, 6-320, 6-321, 6-324, 55-304, 55-305) point to sections that exist with the meaning cited.
9. **Consumer Protection Act blank-space and copy rules.** § 48-603(12)-(13) could reach any state's online lease flow that lets a tenant sign before bracketed blanks are filled. The library's `[bracketed prompt]` convention makes this a product question, not only an Idaho one (§14).
10. **New `{{variable}}` names: none.**

## 11. Deliverables

| File | State |
|---|---|
| `lease-clauses-ID-delta.csv` | 121 rows (53 tagged, 68 new); ID 121 active, all VERIFIED; integrity checks pass (§8) |
| `lease-clause-decision-log-ID.md` | This file |

## 12. Kickoff leads — what each turned out to be

| Lead | Result |
|---|---|
| 1. Where the law lives | **Confirmed and refined.** Title 6, Chapter 3 holds eviction (§§ 6-301 to 6-319), tenant repair suits (§ 6-320), deposits (§ 6-321), tenant notice rules (§ 6-323) and attorney fees (§ 6-324). Title 55, Chapter 2 holds tenancies at will and their one-month notice (§§ 55-208 to 55-210); Chapter 3 holds rent-increase, nonrenewal and term-change notice (§ 55-304), fee limits (§ 55-305) and the local rent-control ban (§ 55-306). Idaho has no comprehensive residential act (`edu-landlord-tenant-scope-id`). |
| 2. Deposits | **Confirmed:** any non-rent deposit is a security deposit; refund within 21 days, or the time the agreement fixes up to 30 days; signed itemized statement and detailed list of expenditures; no retention for normal wear and tear; tenant's suit after a three-day demand, possible treble damages, prevailing-party fees except where treble damages are awarded; successor liable on sale; third-party managers keep a separate account; no cap, no interest. **No pet-deposit or nonrefundable-fee rule:** a pet deposit is a security deposit, and a 'nonrefundable deposit' has no support. |
| 3. Eviction, by tenancy type | **Confirmed** (rule 37): nonpayment, 3-day written notice to pay or quit (with the 72-hour and fee advisories); other breach, 3-day notice to perform or quit (no notice if the breach cannot be performed); unlawful assignment, sublet or waste, 3-day notice to quit; drug activity, a ground with no notice stated; holdover after a fixed term, no notice; tenancy at will (weekly or monthly alike), one month's written notice. Expedited track (trial within 12 days) for possession-only nonpayment and drug cases on tracts of five acres or less. **Accepting rent:** no statute (battery 2); case law flagged. **Property left behind:** only post-judgment (§ 6-316(2), 72 hours). **Court rules:** no detainer-specific civil rule by title; eviction record shielding by statute and I.C.A.R. 32(j). |
| 4. Tenant remedies and landlord duties | **Confirmed:** § 6-320(a) duties (waterproofing, facilities supplied, no hazardous maintenance, deposit return, health-and-safety lease terms, smoke detectors), enforced by suit for damages or specific performance after 3 days' written notice; possible treble damages. **No repair-and-deduct** except smoke detectors; **no rent withholding; no retaliation statute** for ordinary tenancies (only mobile home and floating home acts). |
| 5. Rent and fees | **Confirmed:** 30 days' written notice of a rent increase for any residential lease (§ 55-304(2)); fees reasonable and stated (§ 55-305, 2023). **No application-fee rule** (the 2025 and 2026 bills died). **Preemption:** local regulation of rent, fees and deposits, and mandatory voucher participation, barred (§ 55-306); rental registration not preempted by that section. |
| 6. Fair housing and preemption | **Confirmed:** Idaho Human Rights Act classes for housing are race, color, religion, sex, national origin and disability (§ 67-5909(8)); exemptions for owner-occupied buildings of up to two families and rooms in the lessor's home (§ 67-5910(7)). No source-of-income class, and local mandates for optional federal programs are barred. **Found:** the lease must include the disability-modification restoration term. |
| 7. Disclosures and safety | **Owner or agent identity, meth, radon, mold: no disclosure duty** (each a confirmed absence; meth has cleanup and vacancy duties). **Smoke detectors confirmed:** landlord installs and verifies at the start; tenant maintains; tenant's install-and-deduct after a 72-hour certified-mail notice (§ 6-320(a)(6)). |
| 8. Local ordinances | Flagged, not resolved (rule 3). Statewide preemption: § 55-306. |
| Not in the leads | 2025 renumbering and bulk-data lag; the $20 dishonored-check set fee (§ 28-22-105); towing and the expired-registration bar (§ 49-1806, effective 2026-01-01); unlawful-occupant removal (§ 6-310A, 2025 and 2026); record shielding (§ 6-303A); lewd use lets the owner void the lease (§ 52-414); service-dog housing rights and misrepresentation crime; HOA rental limits (§ 55-3211); foreign-adversary rental ban (§ 55-115); collection-agency fees (§ 26-2229A); legal interest (§ 28-22-104); Consumer Protection Act reach to leasing, including the blank-space and copy-at-signing rules (§§ 48-602, 48-603); psychologically impacted property (§ 55-2801); unclaimed refunds (§ 14-5-201). |

## 13. Independent check
Before handoff, a separate agent that had not seen the drafting checked the 121 ID rows (the 68 new rows in full and the `ID:` notes on the 53 tagged rows) against the saved texts and battery files. Everything it flagged was fixed:
- **Wrong (2):** a note claimed the real lease cited § 55-307 (it cites no Idaho Code section; removed); the HOA exception in § 55-3211 was misstated (now: a transfer restriction that already applied when the owner acquired the property remains enforceable).
- **Unsupported (9):** 'read in context' labels added for §§ 45-1506, 55-3209, 55-3210, 56-704A, 28-9-109 and the sections found by the Colorado-style searches; a condominium sentence, a probate claim and a marijuana claim removed; the meth-act date now rests on the history lines; the court-rule records saved (`court-rules.md`); a § 48-608 reference removed.
- **Imprecise (fixed throughout):** § 55-305(2)(a) and (2)(b) stated precisely everywhere; pet rent 'rent or fee, unsettled'; the interest notes made consistent by adding `unpaid-amounts-interest-id`; conditions added to the drug-ground and eviction-process rows; 'recorded' dropped from post-eviction property; § 12-120 details added (the $35,000 threshold, 10-day demand, 95% tender); treble damages worded as discretionary ('may'); service methods described exactly; 'illegally parked' dropped as a towing ground; towing described as permissive ('is permitted to').
- **Absence claims with no saved battery:** re-run as battery 4 (nonrefundable, early-termination fee, grilling, email notices, application of payments (v1 failed its positive, v2 run), parking, marijuana); the rest reworded to 'chapter read whole'.
- **Own checks, separate from the agent:** the rent-increase row covered three subjects and was split into `edu-rent-increase-notice-id`, `edu-nonrenewal-notice-id` and `edu-term-change-notice-id` (rule 57); a prefix-fixing script doubled 'Idaho Code §' in about 12 rows, fixed and re-checked (0 remain).
- **After the check:** the rule-40 battery (battery 5) and topic follow-ups (battery 6) found § 48-603(12)-(13) and § 48-603G. Both sections were read whole and saved, and `edu-consumer-protection-act-id` was updated.
- **Second independent check (this log):** a fresh agent checked this log against the CSVs, saved sections and battery files. It recomputed every count (all matched) and confirmed the statute descriptions for 30 sections. It found 2 wrong items (a §3.3 citation naming an in-context HOA section instead of § 55-3211; a claim that the rows used the kickoff's session-law format when they used '2025, ch. 65'), several unsupported ones (battery labels for three searches that are in battery 1; 'found by' sources in three scenarios; a per-pattern synthetic-positive claim for batteries 1-3; effective dates for six acts not yet read; the H0893 screen described as a full read) and some imprecise ones (the § 55-305(2)(b) 30-day-notice exception in §6.1; § 55-314 missing from the statute-walk list; § 55-212 unanalysed). All were fixed. Fixes that touched the delta: every session-law citation in the rows now uses `Idaho Sess. Laws`; § 49-1806 rows now give its 2026-01-01 effective date (the six acts' effective-date clauses were read and saved, §1.2); the meth-act note (Title 6, Chapter 26) now gives the 2025 act's effective date; `edu-cure-notice-id` now records § 55-212. The delta was rebuilt and every §8 check re-run.

## 14. Product flags
- **Fees-in-lease check:** every fee, fine, assessment, interest or other charge the landlord will impose must appear in the lease with its amount (§ 55-305(2), agreements from 2023-07-01); a new charge mid-lease needs 30 days' written notice.
- **Late-fee and fee reasonableness:** no numeric validator possible (no cap); a soft warning for unusually large fees would fit § 55-305(1).
- **Notice generation:** three-day nonpayment notice with the amount due, the 72-hour belongings statement and the attorney-fee advisory (§§ 6-303(2), 6-324); three-day notice to perform or quit; one-month notice for tenancies at will (§ 55-208); 30-day rent-increase and nonrenewal notices and 15-day term-change notice (§ 55-304); service by the § 6-304 methods.
- **Nonrenewal reminder:** prompt the landlord at least 30 days before a fixed term ends (§ 55-304(2); §10 item 3).
- **Complete before signing:** make sure every `[bracketed prompt]` is filled before the tenant signs and give the tenant a legible copy at signing (§ 48-603(12)-(13), reach unsettled).
- **Dishonored checks:** if the lease states no set fee, generate the § 28-22-106 notice of dishonor.
- **Property attributes:** third-party manager (separate deposit account, § 6-321(4)); owner-occupied building of up to two families or rooms in the lessor's home (Idaho fair housing exemptions); HOA and when its rental restriction was adopted (§ 55-3211); tract of more than five acres (outside the expedited track, § 6-310(1)) and agricultural tracts of five acres or more (outside § 6-320, § 6-320(e)); signage posted for towing (§ 49-1806).

---

## 15. Real-lease comparison (gap-discovery source 2)

**Lease used:** 'Brigham Young University-Idaho Student Landlord Housing Contract', 19 numbered sections, footer 'Updated August 2023', completed by Brighton Townhouses and Apartments (Rexburg) for Fall 2025, with the landlord's own 'Addendum to the Contract' ('Updated May 2025'): 6 PDF pages.

**Where from:** posted by the landlord at `brightonhousing.net/wp-content/uploads/2025/05/Men-Apartment-Contract-Fall-2025.pdf`.

**Why it qualifies, and why it is weaker:** a real professional lease in use in Idaho. BYU-Idaho's 2026 Approved Housing Guidebook (read) requires every approved Rexburg property to use this contract, lets landlords change only sections 3, 4, 8, 14 and 15, and requires it to be posted on the property's website, so it is a university-published standard form, not a relabelled generic template. It is weaker than an association form: a semester student contract with an honor-code overlay, university mediation and university termination; it cites no Idaho Code sections; and it does not address month-to-month tenancies, eviction notices or disclosures. The Idaho Apartment Association and Idaho REALTORS forms are members-only and were not bought (rule 33). A second lead, the Blue Pine Property Management lease (Idaho Falls, 7/13/2023, posted by the City of Idaho Falls in a bid packet), has a text layer on only two pages; its terms seen are listed below.

**Method:** text extracted in the browser with pdf.js (hashes in `real-lease-sources.md`); read in full; mapped by topic; no text reproduced. The lease is a lead only; every point below rests on primary text read for this pass.

### 15.1 Provision map

| BYU-Idaho contract provision (by topic) | ID library coverage | Result |
|---|---|---|
| §1 Eligibility certification; misrepresentation ends the contract | `rental-application-accuracy`, `default-by-tenant` | Covered; the student-status and sex-offender certifications are university conditions, not Idaho law (`edu-fair-housing-id` screens inquiries) |
| §2 Apartment Living Standards incorporated; no pets; no firearms anywhere, including cars | `pet-policy`, `residential-use-only` | University policy. No Idaho statute limits a private landlord's firearm rule (§ 18-3302(25) read in context); not copied |
| §3 Parking acknowledgment: illegally parked cars risk booting or towing | `parking-vehicle-rules-id`, `edu-towing-id` | **Confirms** § 49-1806 practice; the ID row adds the expired-registration bar |
| §4 Fee schedule (processing, cancellation, cleaning, late, key, re-key, transfer, hourly cleaning and trash, furniture moved) | `edu-fees-in-lease-id`, `late-fee`, `keys` | **Confirms § 55-305(2):** fees listed with amounts in the agreement |
| §5 Late fee $25 after 5 days; interest 12.5% a year after 30 days; collection costs and attorney fees | `late-fee`, `unpaid-amounts-interest-id`, `collection-fee-id`, `edu-legal-interest-id` | Led to the interest clause (§ 28-22-104; the contract's 12.5% exceeds the 12% legal rate, which a written contract may vary; the ID clause caps at 12% as a reasonableness choice) |
| §6 Deposit: signed itemization and balance within 30 days or the landlord forfeits all claim; tenant's 30-day objection window | `security-deposit-return-id`, `edu-security-deposit-rules-id` | **Confirms** the 30-day outer limit (§ 6-321(2)). **Divergence:** the forfeiture sentence and the tenant's objection deadline are contract terms, not Idaho law; not copied |
| §7 Cancellation fee; replacement tenant; landlord must make 'reasonable and verifiable efforts' to relet | `early-termination-ks` | No Idaho statutory mitigation duty (battery 2); case law not read; not copied |
| §8 Tenant 48-hour condition report; mutual maintenance and nuisance duties | `existing-condition`, `tenant-maintenance`, `landlord-maintenance` | Covered; no statute on a condition report |
| §9 Breach: written notice and a reasonable opportunity to cure for any material breach | `default-by-tenant`, `edu-cure-notice-id` | **Divergence:** Idaho's § 6-303 gives three days and no cure for waste, unlawful sublet or drug activity; the library follows the statute |
| §10 Termination for catastrophe, serious illness, active military duty or death | `casualty-termination-id`, `edu-no-servicemember-statute-id`, `edu-no-tenant-death-rule-id` | Idaho has no statutory right for any of these; the casualty clause covers the first. Illness and death terms not offered (no Idaho basis) |
| §11 University decertification termination | — | University-specific; out of scope |
| §12 Unit transfers; §13 modification only in writing | `entire-agreement` | Covered |
| §14 Entry with 12 hours' notice by email, text or letter, or consent | `landlords-access`, `edu-no-entry-statute-id` | Confirms there is no statutory period (a contract term); the library keeps 24 hours |
| §15 Abandoned property: handling fee up to $100, contact efforts, disposal 'governed by applicable Idaho law' | `abandoned-property-id` | **Confirms** the gap: Idaho has no statute outside eviction; the ID clause sets a notice-and-wait procedure. The flat handling fee is not copied (a fee under § 55-305 if used) |
| §16 Waiver of claims except for landlord negligence; renter's insurance recommended | `tenants-property-insurance-ks-oh-ca` | Divergence: an exculpatory waiver; the library uses the variant without it (rule 52) |
| §17 Guests: no more than two consecutive nights; guest fee | `guest-policy`, `guest-policy-day-limit` | Covered (no statute); guest fee not offered |
| §18 University mediation first; §19 savings clause | `severability` | Mediation is university-specific |
| Addendum: holdover charge $50 a night; break contracts; utility overuse billed at actual cost after 20 days' notice; smoke-detector tampering banned; no grills; bed-bug furniture rule; no EV charging; ESA agreement | `holdover-ca`, `utilities-responsibility`, `smoke-detectors-id`, `fire-safety-grilling`, `assistance-animal-accommodation` | Holdover rate not offered (§6); utility overuse is a fee question (§ 55-305); the ESA agreement is federal-law territory (not read) |

**Blue Pine lease (partial):** fixed term converting to month-to-month unless 30 days' notice; $50 month-to-month surcharge; rent increase on 30 days' written notice; late fee 10% of the balance after the 5th; a monthly property-services fee; a lease-initiation fee 'not a deposit' taken from the deposit; deposit returned within 30 days; nonrefundable pet fee plus pet rent; uninhabitability termination; SCRA termination; Idaho governing law. It confirms the 30-day rent-increase notice (§ 55-304(2)) and fee-in-lease practice (§ 55-305). Taking a fee out of the deposit is what `edu-nonrefundable-fees-id` addresses: an amount deposited for a non-rent purpose is a security deposit (§ 6-321(1)).

### 15.2 What it produced
- **(a) Missing required clause:** none (neither lease carries the § 67-5909(8)(h) restoration term; the library now does).
- **(b) Corrections to ID rows:** none.
- **(c) New ID rows prompted:** `unpaid-amounts-interest-id` (the contract's interest term led to § 28-22-104 and § 55-305(2)); confirmed `abandoned-property-id` and `edu-nonrefundable-fees-id`.
- **(d) Divergences recorded:** deposit forfeiture and objection deadline; open-ended cure for any breach; 12-hour entry; exculpatory waiver; abandoned-property handling fee; nightly holdover charge; illness and death termination.
- **(e) Confirmed absences:** none new (mitigation duty remains case law).

## 16. Landlord-scenario screen (gap-discovery source 3)

**Method:** the AZ §18.1 and UT §16 maps, re-run against the ID library, plus Idaho-specific scenarios (squatter removal, lewd-use voiding, towing signage, HOA rental limits, foreign-adversary zone, record shielding, blanks at signing, unclaimed refunds). Where no row answered, the corpus was searched (§17) and hits were read with the section open. Claude generated the scenarios; Taylor's experience is Colorado-only (rule 2).

**Result:** 73 scenarios, counted by script: 48 covered by rows from the statute walk, 17 gaps that produced row content, 5 not located with no row, 3 out of scope. Every row named below is an active ID row (programmatic check).

| Phase | Scenario | ID coverage | Result |
|---|---|---|---|
| Before the lease | Applicant pays an application or screening fee | edu-no-application-fee-rule-id | Covered: Confirmed absent; 2025-2026 fee bills died (ID log s1.2) |
| Before the lease | Screening questions and criteria; criminal history | edu-fair-housing-id | Covered: Idaho Code § 67-5909(8)(f) inquiry ban; no screening statute |
| Before the lease | Voucher holder applies | edu-source-of-income-id, edu-rent-control-preemption-id | Covered: No source-of-income class; local mandates barred (Idaho Code § 55-306) |
| Before the lease | Applicant lied on the application | rental-application-accuracy, default-by-tenant | Covered |
| Before the lease | Required disclosures at signing | lead-based-paint, disability-modification-restoration-id | Gap → row content: Found outside the title: Idaho Code § 67-5909(8)(h) restoration term must be in the lease |
| Before the lease | Who the owner or manager is | edu-no-owner-disclosure-id | Covered: Confirmed absent |
| Before the lease | Unit was a meth lab | edu-meth-cleanup-id | Gap → row content: Found outside the title: Idaho Code Title 6, Chapter 26 (vacancy until certified) |
| Before the lease | Someone died or a crime happened in the unit; sex offender nearby | edu-psychologically-impacted-id | Gap → row content: Found by battery 1 (Idaho Code §§ 55-2801 to 55-2803); reach to leases unsettled |
| Before the lease | Radon, mold, flood, bed bugs | edu-no-radon-disclosure-id, edu-no-mold-disclosure-id, edu-no-flood-disclosure-id, edu-no-bed-bug-rule-id | Covered: Confirmed absent |
| Before the lease | How big a deposit may be | edu-no-deposit-cap-id | Covered: Confirmed absent |
| Before the lease | Landlord wants a nonrefundable deposit or move-in fee | edu-nonrefundable-fees-id, edu-fees-in-lease-id | Covered: Idaho Code § 6-321(1), § 55-305 |
| Before the lease | Pet deposit, pet rent | pet-policy, edu-pet-deposit-id | Covered |
| Before the lease | Third-party manager holds the deposits | edu-deposit-manager-account-id | Covered: Idaho Code § 6-321(4) |
| Before the lease | Lease longer than one year signed by an agent | edu-lease-in-writing-id | Gap → row content: Found outside the title: Idaho Code § 9-505(4) |
| Before the lease | Lease signed online, with blanks left for later | electronic-signatures, edu-consumer-protection-act-id | Gap → row content: Found by battery 6: Idaho Code § 48-603(12)-(13), reach unsettled |
| Before the lease | Move-in condition record | existing-condition | Covered: No statute |
| Before the lease | Unit not ready on move-in day | possession-delay | Covered: No statute |
| Before the lease | Property is in an HOA that restricts rentals | hoa-compliance, edu-hoa-rental-restrictions-id | Gap → row content: Found outside the landlord-tenant chapters (Idaho Code § 55-3211, Homeowner's Association Act) |
| Before the lease | City requires a rental license or registration | edu-rent-control-preemption-id | Not located: Local layer flagged, not resolved (rule 3); § 55-306 does not reach registration |
| Before the lease | Buyer or tenant is tied to a foreign adversary | edu-foreign-adversary-rental-id | Gap → row content: Found in the 2025 code index (Idaho Code § 55-115) |
| Before the lease | Short vacation stay rather than a lease | edu-rent-sales-tax-id | Out of scope: Short-term rentals; tax line only |
| Before the lease | Manufactured home lot or floating home moorage | edu-landlord-tenant-scope-id | Out of scope: Idaho Code Title 55, Chapters 20 and 27 not relied on |
| Rent and money | Rent is late; how big a late fee | late-fee, edu-late-fee-reasonable-id | Covered: Reasonable; stated in the lease (Idaho Code § 55-305) |
| Rent and money | Serving the 3-day pay-or-quit notice | edu-nonpayment-notice-id, edu-notice-service-id, notice-service-fee-id | Covered: 72-hour and fee advisories (Idaho Code §§ 6-303(2), 6-324) |
| Rent and money | Landlord accepts late rent after the notice | late-fee | Covered: Confirmed absent (battery 2); case law flagged |
| Rent and money | Check bounces | returned-payments-id | Gap → row content: Found by battery 1 dishonored-check search (Idaho Code §§ 28-22-105, 28-22-106) |
| Rent and money | Debt sent to a collection agency | collection-fee-id | Gap → row content: Found by the batteries 2-3 collection-fee follow-up (Idaho Code § 26-2229A) |
| Rent and money | Interest on unpaid amounts | unpaid-amounts-interest-id, edu-legal-interest-id | Gap → row content: Found from the real lease's interest term (Idaho Code § 28-22-104; Idaho Code § 55-305(2)) |
| Rent and money | Raising rent on a month-to-month or at renewal | edu-rent-increase-notice-id | Covered: 30 days (Idaho Code § 55-304(2)) |
| Rent and money | Adding a new fee mid-lease | edu-fees-in-lease-id, edu-term-change-notice-id | Covered: 30 days (Idaho Code § 55-305(2)(b)(ii)) |
| Rent and money | City water or sewer bill left unpaid by tenant | utilities-responsibility | Not located: Battery 1: no owner-liability statute; city ordinances and tariffs not read |
| Rent and money | Seizing belongings for unpaid rent | edu-no-landlord-lien-id, edu-self-help-eviction-id | Covered: Confirmed absent |
| Rent and money | Is rent subject to sales tax | edu-rent-sales-tax-id | Gap → row content: Found by battery 2 (Idaho Code § 63-3612) |
| Rent and money | Suing for unpaid rent after move-out; attorney fees | edu-attorney-fees-id | Gap → row content: Found outside the title (Idaho Code §§ 12-120, 12-121) |
| During the tenancy | Heat, plumbing or wiring fails | landlord-maintenance, edu-landlord-duties-id, edu-tenant-remedies-id | Covered: Idaho Code § 6-320 |
| During the tenancy | Tenant withholds rent or repairs and deducts | edu-tenant-remedies-id | Covered: No such right except smoke detectors |
| During the tenancy | Smoke detector dead or removed | smoke-detectors-id, edu-landlord-duties-id | Covered: Idaho Code § 6-320(a)(6) |
| During the tenancy | Carbon monoxide alarm | smoke-detectors-id | Not located: No landlord-tenant CO statute; building codes not read |
| During the tenancy | Routine entry; showing the unit | landlords-access, inspection-rights, edu-no-entry-statute-id | Covered: Confirmed absent |
| During the tenancy | Domestic violence victim wants new locks or out | edu-no-dv-termination-id | Covered: Confirmed absent |
| During the tenancy | Tenant calls police repeatedly | edu-no-dv-termination-id | Covered: Confirmed absent (battery 2) |
| During the tenancy | Guest will not leave | guest-policy-day-limit, edu-unauthorized-occupant-removal-id | Covered: A guest is not a squatter; court process unless § 6-310A fits |
| During the tenancy | Squatter moves into a vacant unit | edu-unauthorized-occupant-removal-id | Covered: Idaho Code § 6-310A (2025, amended 2026) |
| During the tenancy | Tenant lists the unit on Airbnb | no-sublet-assign, edu-cure-notice-id | Covered: Idaho Code § 6-303(4) |
| During the tenancy | Drug dealing in the unit | residential-use-only, edu-expedited-drug-eviction-id | Covered: Idaho Code § 6-303(5), § 6-311 |
| During the tenancy | Prostitution or lewd use of the unit | edu-lewd-use-lease-void-id | Gap → row content: Found by battery 1 (Idaho Code § 52-414: lease void at the owner's option) |
| During the tenancy | Unapproved pet | pet-policy | Covered |
| During the tenancy | Service dog or emotional support animal; fake documentation | assistance-animal-accommodation, edu-service-dog-housing-id, edu-service-animal-misrepresentation-id | Gap → row content: Found outside the title (Idaho Code Title 18, Chapter 58; Title 56, Chapter 7) |
| During the tenancy | Disability modification request | no-alterations, disability-modification-restoration-id | Covered: Idaho Code § 67-5909(8)(h) |
| During the tenancy | Tenant keeps a gun at home or in the car | edu-fair-housing-id | Not located: Battery 1: no lease rule; Idaho Code § 18-3302(25) read in context |
| During the tenancy | Car abandoned, unregistered or parked in the wrong spot | parking-vehicle-rules-id, edu-towing-id | Gap → row content: Found outside the title (Idaho Code § 49-1806, effective 2026-01-01) |
| During the tenancy | Fire or storm damage | casualty-termination-id | Covered: No statute; standing GA rule |
| During the tenancy | Tenant wants an EV charger | utilities-responsibility | Not located: Battery 1: no tenant right |
| During the tenancy | Tenant damages the unit (waste) | tenant-maintenance, edu-tenant-waste-id | Gap → row content: Found outside the chapter (Idaho Code § 6-201) |
| During the tenancy | Month-to-month rules change | edu-term-change-notice-id | Covered: 15 days before month end (Idaho Code § 55-304(1)) |
| Ending the tenancy | Tenant wants out early | early-termination-ks | Covered: No statute |
| Ending the tenancy | Soldier gets orders | edu-no-servicemember-statute-id | Covered: Confirmed absent; SCRA |
| Ending the tenancy | Month-to-month: how much notice | periodic-tenancy-notice-id | Covered: One month (Idaho Code § 55-208) |
| Ending the tenancy | Landlord will not renew a fixed-term lease | edu-nonrenewal-notice-id, surrender-end-of-term-ks-ne | Covered: 30 days (Idaho Code § 55-304(2)) |
| Ending the tenancy | Tenant stays after the lease | holdover-ca, edu-holdover-damages-id | Covered: Treble damages possible (Idaho Code § 6-317) |
| Ending the tenancy | Tenant disappears; belongings left | abandoned-property-id | Covered: Confirmed absent outside eviction; notice-and-wait clause |
| Ending the tenancy | Sole tenant dies | edu-no-tenant-death-rule-id | Covered: Confirmed absent |
| Ending the tenancy | Eviction for nonpayment; trial timing; jury | edu-eviction-process-id | Covered: Idaho Code §§ 6-310 to 6-316 |
| Ending the tenancy | Tenant property after the judgment | edu-post-eviction-property-id | Covered: Idaho Code § 6-316(2) |
| Ending the tenancy | Eviction record afterward | edu-eviction-record-shielding-id | Covered: Idaho Code § 6-303A; I.C.A.R. 32(j) |
| Ending the tenancy | Landlord changes the locks or cuts utilities | edu-self-help-eviction-id | Covered: Idaho Code §§ 6-301, 6-317 |
| Ending the tenancy | Deposit dispute; tenant sues | security-deposit-return-id, edu-security-deposit-rules-id | Covered: Idaho Code §§ 6-320(a)(4), 6-321 |
| Ending the tenancy | Deposit refund cannot be delivered | edu-deposit-refund-unclaimed-id | Gap → row content: Found outside the title (Idaho Code § 14-5-201) |
| Ending the tenancy | Landlord wants to end without a reason | edu-no-just-cause-id | Covered: Confirmed absent |
| Ending the tenancy | Tenant complains, then gets a nonrenewal | edu-no-retaliation-statute-id | Covered: Confirmed absent (battery 1) |
| Owner changes | Owner sells the property | edu-deposit-successor-id | Covered: Idaho Code §§ 6-321(3), 55-301, 55-303 |
| Owner changes | Lender forecloses; trustee sale | edu-foreclosure-tenants-id, tenant-forward-proceedings-ca | Covered: Idaho Code § 45-1506(11) read in context |
| Owner changes | Property on tribal trust land | — | Out of scope: Not researched |

## 17. Outside-title search and proof of absence (gap-discovery source 4)

**Engine:** the whole Idaho Code loaded in the legislature.idaho.gov page (§1.3).
- **Battery 1:** 55 searches (control and both statute-of-frauds versions included), plus the calibration set. **Batteries 2 and 3:** 49 searches (the locks v2 rerun and the collection-fee follow-up included), plus the rule-77 cross-reference screen and the citation existence check. **Battery 4:** 9 searches after the independent check. **Battery 5:** 8 formatting searches (rule 40). **Battery 6:** 9 topic follow-ups. All saved with regex, hit counts and sections (`batteries/`).
- **Control:** 0 hits. Absence patterns were checked against positives (§1.3 says how, and where the record is per pattern); the three that failed (statute of frauds v1, locks v1, application of payments v1) were rewritten and rerun.
- **Labels:** batteries 2 and 3 were run in one session and saved as one list; 'battery 2' and 'battery 3' in rows and in this log both refer to that list (`battery2-3.md`).
- A probe is a screen, never a verdict (rule 19): every landlord-relevant hit was read in context, and the sections rows rely on were read whole and saved.

**What the outside-title search found** (each now in a row):
- The disability-modification restoration term required in the lease, and the owner-occupied exemptions (Title 67, Chapter 59).
- Service-dog housing rights, extra-charge ban and penalties (Title 18, Chapter 58), and the misrepresentation crime and definitions (Title 56, Chapter 7).
- The dishonored-check set fee and notice (Title 28, Chapter 22) and the legal interest rate (§ 28-22-104).
- Collection-agency fees (§ 26-2229A).
- Towing and booting from private property, and the expired-registration bar (§ 49-1806, effective 2026-01-01).
- Lewd use makes the lease void at the owner's option (§ 52-414).
- Clandestine drug lab cleanup, vacancy and immunity (Title 6, Chapter 26).
- Waste and treble damages (§ 6-201).
- The statute of frauds for leases over a year (§ 9-505).
- Attorney fees outside the detainer chapter (§§ 12-120, 12-121).
- Unclaimed property (§ 14-5-201).
- The Consumer Protection Act's reach to leasing, its unconscionability factors and its blank-space and copy rules (§§ 48-602, 48-603, 48-603C).
- HOA rental limits (§ 55-3211), psychologically impacted property (§§ 55-2801 to 55-2803), the foreign-adversary ban (§ 55-115).
- Sales tax on lodging, not leases over 30 days (§ 63-3612, read in context).
- The electronic transactions act's scope (§ 28-50-103).

**Confirmed absent, each with its own row** (15, the `edu-no-*` rows):
- security-deposit cap; deposit interest (both from § 6-321 read whole);
- retaliation; landlord entry;
- servicemember termination; domestic-violence termination and protections;
- owner or manager disclosure;
- radon; mold; bed bugs; flood;
- application fees;
- tenant death;
- just cause;
- residential landlord lien.

Other rows record an absence inside a wider subject (a source-of-income class in `edu-source-of-income-id`, a meth disclosure duty in `edu-meth-cleanup-id`, a casualty statute in `casualty-termination-id`, a property-left-behind statute in `abandoned-property-id`); 19 rows in all carry 'CONFIRMED ABSENT' in their notes. The search terms and counts are in each row's notes.

## 18. Topic reference canvass (rules 27, 36)

All 303 topic keys in `lease-clause-topics.md`, including the 6 with no row in any state. **115 topics have an ID row. 188 are answered below**: 76 Not located, 61 Confirmed absent, 43 Present, 8 Not applicable. No new topic key was created.

### 18.1 Topics answered by an ID row
`abandoned-property`: abandoned-property-id; `acceptable-payment-methods`: acceptable-payment-methods; `addendum-precedence`: addendum-precedence; `alarm-duties`: smoke-detectors-id; `alterations`: no-alterations; `appliances-included`: appliances-included; `application-fees`: edu-no-application-fee-rule-id; `application-of-payments`: application-of-payments; `assigned-parking-space`: assigned-parking-space; `assistance-animal-accommodation`: assistance-animal-accommodation; `attorney-fees`: edu-attorney-fees-id; `bed-bug-disclosure`: edu-no-bed-bug-rule-id; `casualty-termination`: casualty-termination-id; `collection-fee`: collection-fee-id; `common-area-use`: common-area-use; `consumer-protection-act`: edu-consumer-protection-act-id; `cure-and-eviction-grounds`: edu-cure-notice-id; `default-by-tenant`: default-by-tenant; `deposit-escheat`: edu-deposit-refund-unclaimed-id; `disability-accommodation`: disability-modification-restoration-id; `disturbance`: no-disturbance; `due-at-signing`: due-at-signing; `dv-lease-termination`: edu-no-dv-termination-id; `early-termination`: early-termination-ks; `electronic-signatures`: electronic-signatures; `entire-agreement`: entire-agreement; `eviction-process`: edu-eviction-process-id; `eviction-record-sealing`: edu-eviction-record-shielding-id; `existing-condition`: existing-condition; `expedited-criminal-eviction`: edu-expedited-drug-eviction-id; `fair-housing`: edu-fair-housing-id; `fire-safety-grilling`: fire-safety-grilling; `flood-disclosure`: edu-no-flood-disclosure-id; `for-cause-eviction`: edu-no-just-cause-id; `foreclosure`: edu-foreclosure-tenants-id; `foreign-ownership`: edu-foreign-adversary-rental-id; `governing-law`: governing-law; `guest-policy`: guest-policy; `guest-policy-day-limit`: guest-policy-day-limit; `hoa`: edu-hoa-rental-restrictions-id; `hoa-compliance`: hoa-compliance; `holdover`: holdover-ca, edu-holdover-damages-id; `inspection-rights`: inspection-rights; `joint-liability`: joint-liability; `keys`: keys; `landlord-entry`: landlords-access, edu-no-entry-statute-id; `landlord-lien`: edu-no-landlord-lien-id; `landlord-maintenance`: landlord-maintenance, edu-landlord-duties-id; `landscaping-irrigation`: landscaping-irrigation; `late-fee`: late-fee, edu-late-fee-reasonable-id; `lead-based-paint`: lead-based-paint; `meth-disclosure`: edu-meth-cleanup-id; `mold-disclosure`: edu-no-mold-disclosure-id; `nonpayment-notice`: edu-nonpayment-notice-id; `nonrefundable-deposit-notice`: edu-nonrefundable-fees-id; `notice-delivery-methods`: edu-notice-service-id; `notice-service-fee`: notice-service-fee-id; `notices`: notices; `nuisance`: edu-lewd-use-lease-void-id; `owner-identity-disclosure`: edu-no-owner-disclosure-id; `parking`: parking-ks-oh-ca; `parking-vehicle-rules`: parking-vehicle-rules-id; `permitted-occupants`: permitted-occupants; `pet-fees`: edu-pet-deposit-id; `pet-insurance-requirement`: pet-insurance-requirement; `pet-policy`: pet-policy; `possession-delay`: possession-delay; `post-eviction-property`: edu-post-eviction-property-id; `radon-disclosure`: edu-no-radon-disclosure-id; `rent-control`: edu-rent-control-preemption-id; `rent-increase-notice`: edu-rent-increase-notice-id; `rent-payment`: rent-payment; `rent-tax`: edu-rent-sales-tax-id; `rental-application-accuracy`: rental-application-accuracy; `required-fees`: edu-fees-in-lease-id; `residential-use-only`: residential-use-only; `retaliation`: edu-no-retaliation-statute-id; `returned-payments`: returned-payments-id; `scope`: edu-landlord-tenant-scope-id; `security-deposit-cap`: edu-no-deposit-cap-id; `security-deposit-holding`: edu-deposit-manager-account-id; `security-deposit-interest`: edu-no-deposit-interest-id; `security-deposit-on-sale`: edu-deposit-successor-id; `security-deposit-penalty`: edu-security-deposit-rules-id; `security-deposit-return`: security-deposit-return-id; `security-deposit-use`: security-deposit-use; `self-help-eviction`: edu-self-help-eviction-id; `service-animal-denial-penalty`: edu-service-dog-housing-id; `service-animal-misrepresentation`: edu-service-animal-misrepresentation-id; `servicemember-rights`: edu-no-servicemember-statute-id; `services-utilities-provided`: services-utilities-provided-ks-oh; `severability`: severability; `smoking-policy`: smoking-policy; `snow-removal`: snow-removal; `source-of-income`: edu-source-of-income-id; `statute-of-frauds-lease-term`: edu-lease-in-writing-id; `stigmatized-property`: edu-psychologically-impacted-id; `storage-space`: storage-space-ks-oh-ca; `sublet-assign`: no-sublet-assign; `surrender-end-of-term`: surrender-end-of-term-ks-ne; `tenant-death`: edu-no-tenant-death-rule-id; `tenant-forward-proceedings`: tenant-forward-proceedings-ca; `tenant-maintenance`: tenant-maintenance; `tenant-repair-remedies`: edu-tenant-remedies-id; `tenant-statutory-duties`: edu-tenant-waste-id; `tenants-property-insurance`: tenants-property-insurance-ks-oh-ca; `term-change-notice`: edu-term-change-notice-id; `termination-notice`: periodic-tenancy-notice-id, edu-nonrenewal-notice-id; `towing`: edu-towing-id; `unauthorized-occupant-removal`: edu-unauthorized-occupant-removal-id; `unpaid-damages-interest`: unpaid-amounts-interest-id, edu-legal-interest-id; `utilities-paid-by-landlord`: utilities-paid-by-landlord; `utilities-responsibility`: utilities-responsibility; `utility-payment-evidence`: utility-payment-evidence; `utility-service-continuity`: utility-service-continuity.

### 18.2 Topics with no ID row (status and reason)
'Not located' with the default reason means: no Idaho counterpart surfaced in the landlord-tenant chapters (read whole) or batteries 1-6, and the topic was not separately searched (statutes only).

| Topic | Status | Reason |
|---|---|---|
| `fee-transparency` | Confirmed absent | No all-in pricing or first-page fee rule; Idaho Code § 55-305 requires only that fees be reasonable and in the agreement (edu-fees-in-lease-id). Basis: Title 6, Chapter 3 and Title 55, Chapters 2-3 read whole; not separately searched. |
| `fee-unprovided-service` | Not located | Default boundary (see above). |
| `nonresident-owner-agent` | Not located | Default boundary (see above). |
| `rent-concession` | Not located | Default boundary (see above). |
| `rent-escalation` | Present | No statute; rent changes need 30 days' written notice (edu-rent-increase-notice-id). |
| `rent-receipts` | Confirmed absent | Battery 2 'rent receipt' 4 sections, none a landlord duty. |
| `shutdown-rent-protection` | Not located | Default boundary (see above). |
| `statutory-caps` | Present | No statutory money caps other than the $20 dishonored-check set fee (returned-payments-id). |
| `subsidy-late-fee` | Not located | Default boundary (see above). |
| `veterans-incentive` | Not located | Default boundary (see above). |
| `waiver-by-acceptance` | Confirmed absent | Battery 2 acceptance-of-rent waiver pattern 0 hits. Case law on waiver not read; base late-fee non-waiver sentence kept. |
| `condition-inspection` | Confirmed absent | No move-in inspection statute (chapters read whole); existing-condition tagged. |
| `deposit-cost-schedule` | Not located | Default boundary (see above). |
| `deposit-installments` | Not located | Default boundary (see above). |
| `deposit-last-month-rent` | Present | No rule; prepaid rent is rent, and any other amount deposited is a security deposit (Idaho Code § 6-321(1); due-at-signing note). |
| `deposit-surrender-notice` | Confirmed absent | No statute; the refund clock runs from surrender (Idaho Code § 6-321(2); security-deposit-return-id). Basis: Title 6, Chapter 3 and Title 55, Chapters 2-3 read whole; not separately searched. |
| `dv-deposit-timing` | Confirmed absent | Covered by the DV absence row (edu-no-dv-termination-id). |
| `expedited-deposit-disposition` | Not located | Default boundary (see above). |
| `fee-in-lieu-of-deposit` | Confirmed absent | Battery 2 'in lieu of a security deposit' 0 hits. |
| `holding-deposit` | Confirmed absent | Battery 2 'holding deposit' 0 hits. Money deposited before a lease for a purpose other than rent would likely be a security deposit under Idaho Code § 6-321(1) (reading, not settled). |
| `inspection-notice-penalty` | Not located | Default boundary (see above). |
| `nonrefundable-deposit-separate-notice` | Confirmed absent | See edu-nonrefundable-fees-id (no Idaho nonrefundable-deposit rule). Basis: Title 6, Chapter 3 and Title 55, Chapters 2-3 read whole; not separately searched. |
| `security-deposit-nonwaiver` | Confirmed absent | No statute on waiving deposit rights (Idaho Code § 6-321 read whole). |
| `security-deposit-standards` | Not located | Default boundary (see above). |
| `utility-deposit-return` | Not applicable | Idaho Code § 14-5-201(1)(k) (utility deposits, 1-year presumption) binds utilities, not landlords. |
| `bed-bug-cooperation` | Confirmed absent | Covered by edu-no-bed-bug-rule-id. |
| `children-occupancy` | Not located | Default boundary (see above). |
| `cold-weather-vacate-notice` | Not located | Default boundary (see above). |
| `construction-liens` | Not located | Default boundary (see above). |
| `dv-qualifying-documents` | Confirmed absent | Covered by edu-no-dv-termination-id. |
| `extended-absence-notice` | Confirmed absent | No URLTA absence statute; extended-absence-notice-ks not tagged (same as UT, PA, AL). Basis: Title 6, Chapter 3 and Title 55, Chapters 2-3 read whole; not separately searched. |
| `guest-rights` | Confirmed absent | Battery 3 guest search: 2 sections, neither a rental rule. Guest clauses tagged. |
| `municipal-utility-lien` | Confirmed absent | Confirmed absent in statutes: battery 1 water/sewer-charge search 9 sections, none an owner-liability rule for a tenant's utility; city ordinances and utility tariffs not read. |
| `prohibited-acts-renter` | Not located | Default boundary (see above). |
| `purpose-limitation` | Present | residential-use-only tagged; Idaho Code § 52-414 (edu-lewd-use-lease-void-id). |
| `tenant-repair-agreement` | Confirmed absent (not offered) | No Idaho statute allocating or restricting allocation of repair duties; Idaho Code § 6-320 duties are enforced by suit. Not offered as a separate clause (tenant-maintenance covers tenant duties). Decided by Claude (ID log s6). Basis: Title 6, Chapter 3 and Title 55, Chapters 2-3 read whole; not separately searched. |
| `utility-interruption-submeter` | Confirmed absent | Battery 1 'submeter' 0 hits. |
| `utility-transfer` | Not located | Default boundary (see above). |
| `waterbed` | Confirmed absent | No flotation-bedding statute; common-area-use tagged. Basis: Title 6, Chapter 3 and Title 55, Chapters 2-3 read whole; not separately searched. |
| `alt-housing` | Not located | Default boundary (see above). |
| `appliances-excluded` | Present | No statute; Idaho Code § 6-320(a)(2) reaches facilities 'supplied by the landlord' (appliances-included note). |
| `balcony-inspection` | Not located | Default boundary (see above). |
| `confirmed-absences-habitability` | Present | Covered by edu-landlord-duties-id and edu-no-mold-disclosure-id. |
| `designated-repairer` | Not located | Default boundary (see above). |
| `disaster-duties` | Not located | Default boundary (see above). |
| `double-letting` | Not located | Default boundary (see above). |
| `emergency-contact` | Not located | Default boundary (see above). |
| `fire-code-standard` | Not located | Building and fire codes (Idaho Code Title 39, Chapter 41) not read as rental duties. |
| `frozen-standard-incorporation` | Not located | Default boundary (see above). |
| `habitability-materiality` | Present | Idaho Code § 6-320(a)(5) 'materially affecting the health and safety' (edu-landlord-duties-id). |
| `habitability-modifiable` | Not located | No statute on waiving Idaho Code § 6-320; not located. |
| `habitability-presumption` | Not located | Default boundary (see above). |
| `health-district-rental-rules` | Not located | Default boundary (see above). |
| `heating` | Present | Battery 2 heat near tenant/rental/dwelling unit: 0 hits; Idaho Code § 6-320(a)(2) covers heating facilities the landlord supplies. |
| `landlord-breach-remedy` | Present | Covered by edu-tenant-remedies-id. |
| `other-landlord-facilities` | Not located | Default boundary (see above). |
| `part5-nonwaivable` | Not located | Default boundary (see above). |
| `pool-safety` | Confirmed absent | Battery 1 pool-fence search: 2 sections (Idaho Code §§ 39-1109, 39-1211B, daycare and foster-home rules); no rental rule. |
| `portfolio-thresholds` | Present | Idaho Code § 6-321(4) (third-party manager accounts) and Idaho Code § 67-5910(7) (owner-occupied exemptions) are the only size or occupancy thresholds found. |
| `rent-demand-bar` | Not located | Default boundary (see above). |
| `rent-reporting` | Not located | Default boundary (see above). |
| `repair-cost-termination` | Not located | Default boundary (see above). |
| `repair-escrow-exemption-notice` | Not located | Default boundary (see above). |
| `repair-notice` | Present | Tenant's 3-day written notice before suit (Idaho Code § 6-320(d), § 6-323; edu-tenant-remedies-id). |
| `security-devices` | Confirmed absent | Battery 2 locks search 1 section (not a rental rule); battery 3 rekey v2 only Idaho Code § 6-310A (squatter lock change). |
| `senior-housing-work-card` | Not located | Default boundary (see above). |
| `stove-refrigerator` | Not located | Default boundary (see above). |
| `subsidy-habitability-proration` | Not located | Default boundary (see above). |
| `substandard-property-receivership` | Not located | Default boundary (see above). |
| `tenant-screening` | Confirmed absent | No screening regulation; Idaho Code § 28-52-105 (security-freeze exception for tenant screening, read in context) only. Fair housing inquiry limits: edu-fair-housing-id. Basis: Title 6, Chapter 3 and Title 55, Chapters 2-3 read whole; not separately searched. |
| `utility-allowance-cap` | Not located | Default boundary (see above). |
| `utility-apportionment` | Not located | Default boundary (see above). |
| `utility-disclosure-attachment` | Not located | Default boundary (see above). |
| `utility-landlord-account` | Confirmed absent | Battery 3 owner-liability-for-tenant-utility search: 0 hits. |
| `utility-shutoff-statute` | Confirmed absent | Battery 2 landlord utility shutoff: 2 sections, neither a landlord rule; utility tariffs (PUC) not read. |
| `utility-submetering-disclosure` | Confirmed absent | Battery 1 'submeter' 0 hits. |
| `key-control-policy` | Not located | Default boundary (see above). |
| `periodic-services-entry` | Confirmed absent | No entry statute (edu-no-entry-statute-id). |
| `abandonment-and-mitigation` | Confirmed absent | No statutory mitigation duty (battery 2 'mitigat': no landlord-tenant hit); case law not read. abandoned-property-id covers property left behind. |
| `casualty-and-mitigation-waivable` | Not located | Default boundary (see above). |
| `conversion-notice` | Not located | Default boundary (see above). |
| `criminal-activity` | Present | Drug activity is a statutory ground (edu-expedited-drug-eviction-id); lewd use voids the lease (edu-lewd-use-lease-void-id). Crime-free clause not offered (ID log s6). |
| `drug-free-housing-addendum` | Present (not offered) | Not offered (ID log s6); drug ground is statutory. |
| `dv-lockchange` | Confirmed absent | Covered by edu-no-dv-termination-id. |
| `environmental-event-termination` | Not located | Default boundary (see above). |
| `eviction-hardship-stay` | Not located | Default boundary (see above). |
| `eviction-service-party` | Present | No statute letting the lease name a person to accept eviction papers; Idaho Code § 6-304 sets service. |
| `forfeiture-redemption` | Present | Idaho Code § 6-316(1) post-judgment redemption only for tracts over five acres (edu-eviction-process-id). |
| `guarantor-renewal` | Confirmed absent | Battery 2 guarantor search: 1 section, not a lease rule. |
| `holdover-rate` | Present (not offered) | Not offered: statutory treble damages (Idaho Code § 6-317; edu-holdover-damages-id; ID log s6). |
| `homestead-waiver` | Not located (not offered) | Not offered: no statute authorizes a lease waiver of exemptions (battery 1 exemption-waiver search: none residential); exemption statutes (Idaho Code Title 11, Chapter 6; Title 55, Chapter 10) not read. |
| `infirmity-termination` | Not located | Default boundary (see above). |
| `landlord-remedies-termination` | Present | Covered by default-by-tenant and edu-eviction-process-id. |
| `lockout-for-rent-delinquency` | Present (not offered) | Not offered; self-help risk (edu-self-help-eviction-id). |
| `minor-tenant-filing` | Confirmed absent | Idaho Code § 6-308 (parties defendant) has no minor rule. Basis: Title 6, Chapter 3 and Title 55, Chapters 2-3 read whole; not separately searched. |
| `notice-to-quit-waiver` | Present (not offered) | Not offered: no statute lets a lease waive or shorten the Idaho Code § 6-303 notices. Idaho Code § 55-212 allows an ordinary action for possession without notice once a lease's right of reentry has accrued; the library's default clause makes that right accrue only after written notice (ID log s6.1). |
| `owner-move-in-reservation` | Not applicable | Not needed: no just-cause rule (edu-no-just-cause-id). |
| `possession-bond` | Present | Idaho Code § 6-311 (rent bond for continuances) and § 6-311D (appeal undertaking) are court-process bonds (edu-eviction-process-id). |
| `redemption` | Present | Idaho Code § 6-316(1) (tracts over five acres) and § 6-303(3) (performance within the notice period saves the lease). |
| `rent-into-court-counterclaim` | Present | Idaho Code § 6-311 continuance bond; no rent-into-court rule (edu-eviction-process-id). |
| `sale-or-management-change` | Present | edu-deposit-successor-id (Idaho Code § 6-321(3), § 55-301, § 55-303). |
| `social-security-defense` | Not located | Default boundary (see above). |
| `statutory-early-termination` | Confirmed absent | No statutory early-termination rights (edu-no-servicemember-statute-id, edu-no-dv-termination-id). |
| `subsidized-inspection-refusal` | Not located | Default boundary (see above). |
| `tenancy-at-will` | Present | periodic-tenancy-notice-id (Idaho Code § 55-208). |
| `adverse-proceeding-notice` | Present | tenant-forward-proceedings-ca tagged. |
| `automatic-renewal` | Not located (leases) | Battery 6: Idaho Code § 48-603G (internet automatic renewals; reach to leases unsettled, ID log s10) and rent-to-own of goods only. Nonrenewal notice: edu-nonrenewal-notice-id. |
| `confirmed-absences-misc` | Present | Absences have their own ID rows (ID log s3). |
| `confirmed-absences-outside-title` | Present | Absences have their own ID rows (ID log s3). |
| `disaster-displaced-guests` | Not located | Default boundary (see above). |
| `dv-confidentiality` | Confirmed absent | Covered by edu-no-dv-termination-id. |
| `dv-protection-order-chapter-moved` | Not applicable | Not applicable (Wyoming-specific note). |
| `emergency-assistance-right` | Confirmed absent | Battery 2 police/emergency-call search 0 hits. |
| `landlord-liability-insurance` | Not located | Default boundary (see above). |
| `law-enforcement-cooperation` | Not located | Default boundary (see above). |
| `lease-notice-initial-requirement` | Not located | Default boundary (see above). |
| `lease-term-limitation` | Present | Idaho Code § 9-505(4) (edu-lease-in-writing-id). |
| `notice-to-vacate-additional-terms` | Present | Idaho Code § 6-303(2) (72-hour statement) and § 6-324 (fee advisory) (edu-nonpayment-notice-id). |
| `plain-language-consumer-statement` | Confirmed absent | Battery 6: no plain-language statute; the Consumer Protection Act reaches leasing (edu-consumer-protection-act-id) but requires no statement of waivers. |
| `rent-receipt-anti-waiver` | Not located | Default boundary (see above). |
| `rental-inspection` | Not located (local) | No state rental inspection program; local programs flagged, not resolved (rule 3). |
| `renters-insurance-rules` | Confirmed absent | Battery 3 renter's-insurance search: 3 sections, none a rental rule. |
| `statutory-forms` | Present | Idaho Code § 6-310A(3) complaint form, § 6-311C writ form, § 28-22-106 notice of dishonor form (rows: edu-unauthorized-occupant-removal-id, edu-post-eviction-property-id, returned-payments-id). |
| `tenant-insurance-claims` | Not located | Default boundary (see above). |
| `tenant-records` | Not located | Default boundary (see above). |
| `tpa-sunset` | Not applicable | Not applicable (California-specific). |
| `ev-charging` | Confirmed absent | Battery 1 EV search: 2 sections (building code, vehicles), no tenant right. |
| `ev-charging-end-of-tenancy` | Confirmed absent | No Idaho EV statute (battery 1 EV search: 2 sections, no tenant right); CO rows not tagged. |
| `ev-charging-requirements` | Confirmed absent | No Idaho EV statute (battery 1 EV search: 2 sections, no tenant right). |
| `ev-charging-shared-area` | Confirmed absent | No Idaho EV statute (battery 1 EV search: 2 sections, no tenant right); CO row not tagged. |
| `parking-rules-notice` | Present | No statute; Idaho Code § 49-1806 signage duty (edu-towing-id). |
| `unbundled-parking` | Not located | Default boundary (see above). |
| `firearms` | Confirmed absent | No statute limits a lease firearm restriction; Idaho Code § 18-3302(25) (read in context) preserves the existing rights of a 'private property owner, private tenant'. Battery 1 firearm search: 9 sections, none a lease rule. |
| `portable-solar` | Confirmed absent | Battery 2 solar-tenant search: 3 sections (Title 48), not a tenant right. |
| `religious-cultural-display` | Confirmed absent | No statute; common-area-use tagged. Basis: Title 6, Chapter 3 and Title 55, Chapters 2-3 read whole; not separately searched. |
| `rules-regulations` | Present | No house-rule statute; Idaho Code § 55-304(1) month-to-month term changes (edu-term-change-notice-id). |
| `smoke-drift-waiver` | Confirmed absent (not offered) | Not offered: no smoke-drift statute (battery 3 smoking search: Idaho Code §§ 6-320, 54-1016, 67-6539 only). |
| `telecom-access` | Confirmed absent | Battery 2 cable/satellite search: 0 hits. |
| `tenant-display-rights` | Confirmed absent (landlords) | HOA-only rules (Idaho Code §§ 55-3209, 55-3210, read in context); no landlord rule. Basis: Title 6, Chapter 3 and Title 55, Chapters 2-3 read whole; not separately searched. |
| `defective-drywall-disclosure` | Not located | Default boundary (see above). |
| `dv-eviction-protection` | Confirmed absent | Covered by edu-no-dv-termination-id. |
| `electric-submetering-disclosure` | Confirmed absent | Battery 1 'submeter' 0 hits. |
| `foreclosure-disclosure` | Confirmed absent | No disclosure duty (battery 2 foreclosure-tenant search: 4 sections, none a disclosure rule); edu-foreclosure-tenants-id. |
| `inspection-condemnation-disclosure` | Not located | Default boundary (see above). |
| `lead-safe-certification` | Confirmed absent | No Idaho lead statute (battery 2 'lead paint' 0 hits). |
| `lease-copy` | Present (reach unsettled) | Idaho Code § 48-603(13): legible copy of the contract at signing (edu-consumer-protection-act-id); battery 2 lease-copy search found no landlord-tenant rule. |
| `meter-conservation-charge` | Not located | Default boundary (see above). |
| `military-air-zone-disclosure` | Not applicable | Idaho Code § 55-115 is an ownership/rental ban, not a disclosure (edu-foreign-adversary-rental-id). |
| `ordnance-demolition-meter-disclosures` | Not located | Default boundary (see above). |
| `pest-control-notice` | Not located | Default boundary (see above). |
| `private-well-testing` | Not located | Default boundary (see above). |
| `prop65-rental-warning` | Not applicable | Not applicable (California-specific). |
| `property-tax-rent-disclosure` | Not located | Default boundary (see above). |
| `protected-class-inquiry-ban` | Present | Idaho Code § 67-5909(8)(f) bars application forms, records or inquiries indicating discrimination (edu-fair-housing-id). |
| `required-disclosures` | Present | Only required lease text found: Idaho Code § 67-5909(8)(h) (disability-modification-restoration-id). |
| `sex-offender-disclosure` | Present | edu-psychologically-impacted-id (Idaho Code § 55-2801(3)). |
| `sex-offender-occupancy` | Present (not a landlord duty) | Idaho Code § 18-8331 (read in context) bars registrants from living in a dwelling unit with more than one other registrant; the duty is the registrant's, not the landlord's. |
| `sfr-occupancy-disclosure` | Not located | Default boundary (see above). |
| `steam-radiator-covers` | Not located | Default boundary (see above). |
| `tenant-rights-statement` | Not located | Default boundary (see above). |
| `tpa-exemption-notice` | Not applicable | Not applicable (California-specific). |
| `tpa-notice` | Not applicable | Not applicable (California-specific). |
| `truth-in-renting` | Not located | Default boundary (see above). |
| `window-guards` | Not located | Default boundary (see above). |
| `cannabis` | Confirmed absent | Battery 4 'marijuana': 12 sections, no legalization or tenant protection; smoking-policy tagged. |
| `condemned-premises-rent-bar` | Not located | Default boundary (see above). |
| `confession-of-judgment` | Confirmed absent | Battery 1: 2 sections, neither a lease rule. |
| `employee-screening` | Not located | Default boundary (see above). |
| `eviction-penalty-clause-ban` | Confirmed absent | Battery 3 eviction/notice-fee search: 0 hits; notice-service-fee-id offered. |
| `exculpatory-clauses` | Confirmed absent | No statute voids exculpatory lease terms (battery 3: 0 hits); case law not read; rule 52 variants used. |
| `fire-sprinkler-duty` | Confirmed absent | Battery 6 sprinkler search: Idaho Code § 39-4109C (building standards) and Idaho Code § 39-4116 (read in context: exempts one- and two-family dwellings from code sprinkler requirements); no landlord duty. |
| `governmental-fines` | Not located | Default boundary (see above). |
| `immigration-status` | Confirmed absent | Battery 1 immigration-housing search: 4 sections, none a housing rule. |
| `jury-waiver` | Present | Idaho Code § 6-313: jury trial 'unless such jury be waived as in other cases'; no lease jury-waiver clause offered (battery 1: 5 sections, none a lease rule). |
| `landlord-registration` | Not located (local) | No statewide registration; local ordinances flagged, not resolved (rule 3). |
| `lease-content-requirements` | Present | Only Idaho Code § 67-5909(8)(h) (disability-modification-restoration-id). |
| `plain-language` | Confirmed absent | Battery 6: 2 sections with rental context, neither a lease rule. |
| `prohibited-lease-terms` | Confirmed absent | No statutory list of prohibited lease terms; fee limits (Idaho Code § 55-305) and the Consumer Protection Act (edu-consumer-protection-act-id). Basis: Title 6, Chapter 3 and Title 55, Chapters 2-3 read whole; not separately searched. |
| `tenant-right-to-organize` | Present | Batteries 2-3: 2 sections, the floating homes act (Idaho Code § 55-2716) and Idaho Code § 22-2607; no residential-tenant right. |
| `translation-duty` | Not located | Default boundary (see above). |
| `unconscionability` | Present | Idaho Code § 48-603C (edu-consumer-protection-act-id). |
| `written-notice-required` | Present | Present across rows: Idaho Code §§ 6-303, 55-208, 55-304 require written notices. |

### 18.3 'Topics no state has a row for yet'
| Topic | Status | Reason |
|---|---|---|
| `algorithmic-rent-setting` | Confirmed absent | Battery 6: 6 sections, none with rental context; local regulation of rent is barred anyway (Idaho Code § 55-306). |
| `fees-as-rent` | Confirmed absent | Battery 6 'additional rent or deemed rent': 6 sections, none makes fees rent. Idaho Code § 55-305(4) keeps rent outside the fee rules, so the label matters (edu-fees-in-lease-id; pet-policy note). Case law not read. |
| `landlord-self-cure` | Confirmed absent | Battery 6: 0 hits. |
| `lease-completeness` | Present (reach unsettled) | Idaho Code § 48-603(12): obtaining a signature on a contract with blanks to be filled in later is an unlawful practice; reach to residential leases unsettled (edu-consumer-protection-act-id). |
| `quiet-possession` | Confirmed absent | Battery 6: 1 section (UCC collateral); no statutory covenant of quiet possession. Case law not read. |
| `tenant-security-cameras` | Confirmed absent | Battery 6: 0 hits. |

## 19. Step D screens (rules 40-53), one line each
- **40 Formatting and placement:** no bold, underline, capitals, type-size, separate-document or initialing rule for residential lease terms (battery 5). Prescribed wording lives in notices and forms outside the lease, except the § 67-5909(8)(h) restoration term (§4).
- **41 Just-cause:** none (`edu-no-just-cause-id`). A fixed term ends without a notice to quit (§ 6-303(1)), but § 55-304(2) requires 30 days' written notice of nonrenewal. `surrender-end-of-term-ks-ne` does not replace that notice, and its ID note says so.
- **42 Required text inside a shared clause:** § 67-5909(8)(h): the restoration provision 'shall be included in any lease or rental agreement'. Carried by `disability-modification-restoration-id` (REQUIRED), beside `no-alterations`.
- **43 Cure promises:** `default-by-tenant`'s carve-out preserves the § 6-303 notices, including the no-notice case for a breach that cannot be performed and the notice-to-quit grounds. The base `early-termination`'s 10-day cure was not tagged.
- **44 Terms turned into duties:** § 6-320(a)(5) makes any lease term 'materially affecting the health and safety of the tenant' enforceable by the tenant's suit, with possible treble damages. `landlord-maintenance` matches the statute's own duties, so nothing extra is promised. § 55-304(1) and § 55-305(2)(b)(ii) notice changes are preserved by `entire-agreement`.
- **45 Electronic notices:** the Idaho UETA excludes only wills and most of the UCC (§ 28-50-103), but no statute names email as a service method for § 6-303 or § 6-320(d) notices (battery 4: 0 hits). No electronic-notice clause offered (`edu-notice-service-id`).
- **46 Lease as the notice:** no Idaho provision lets the lease serve as, or waive, a § 6-303 notice. § 55-212 lets a lease's right of reentry support an ordinary action for possession without notice once the right accrues; the library's default clause makes the right accrue only after written notice, so no clause relies on it (§6.1).
- **47 Knowing-use penalties:** none for lease terms. § 18-5812A penalizes intentionally denying housing to a service-dog user or charging extra; `assistance-animal-accommodation` complies.
- **48 Separate documents:** none required for residential leases (battery 5).
- **49 Collection costs:** no ban. § 26-2229A(4)(c) conditionally permits agency fees 'expressly authorized by the agreement creating the debt', offered as `collection-fee-id`. `default-by-tenant`'s fee sentence is consistent with § 6-324.
- **50 'Lease controls' wording:**
  - § 6-321(2): refund time 'if no time is fixed by agreement'. Fixed at 30 days on purpose (`security-deposit-return-id`).
  - § 6-321(1): deductions for 'the contingencies specified in the deposit arrangement'. `security-deposit-use` is that specification.
  - § 28-22-104(1): the 12% legal rate unless a written contract fixes another. `unpaid-amounts-interest-id` (optional, capped at 12%).
  - § 28-22-105: a set dishonored-check fee 'under a written agreement'. `returned-payments-id`.
  - § 6-320(a)(2): facilities 'supplied by the landlord'. `appliances-included` fixes what is supplied.
  - § 55-305(2): charges only as the agreement states. Every ID fee row states its amount or a bracket.
- **51 Plain-language and consumer statutes:** no plain-language statute (battery 6). The Consumer Protection Act reaches leasing and renting of real property (§ 48-602(2), (6)); its unconscionability factors (§ 48-603C) and its blank-space and copy-at-signing rules (§ 48-603(12)-(13), reach unsettled) are in `edu-consumer-protection-act-id`. No statement of waivers is required.
- **52 Exculpation:** no voiding statute (battery 3: 0 hits). The ks-oh-ca and ks-oh variants are used (§2.1).
- **53 Figures against shared clauses:** `returned-payments` ceiling wording replaced (`returned-payments-id`, $20 set-fee bracket); base `holdover` 'maximum permitted' replaced (`holdover-ca`); base `parking-vehicle-rules` towing for expired registration replaced (`parking-vehicle-rules-id`, § 49-1806(3)); `late-fee` has no Idaho figure to conflict with. `guest-policy-day-limit`'s 14 days conflicts with nothing (no guest statute).

---

## Proposed SOP changes
1. **Check whether the state's bulk or chapter downloads lag its section pages, and if they do, overlay every section in the session's official 'code sections affected' list before searching.** Reason: Idaho's chapter PDFs omit 2026 amendments that the section pages print (§ 6-310A); a whole-code search built on the PDFs alone would have searched stale text for about 1,170 sections.
2. **Test every absence pattern against a positive written in the state's own number style (for example 'one (1) year', 'thirty (30) days').** Reason: Idaho writes numbers with a parenthetical numeral; the first statute-of-frauds pattern returned zero because of it and would have produced a false absence.
3. **Run the rule-40 formatting battery before drafting, not at the end, and include the state's consumer-protection list of unfair practices in it.** Reason: in Idaho the formatting battery, run last, surfaced § 48-603(12)-(13) (blank spaces; copy at signing), which bears on how every lease is signed and on the library's bracket convention.
4. **Before relying on a real lease's text again, save the extracted text itself (not only its hash) to the source folder.** Reason: the Idaho provision map had to re-extract the BYU-Idaho contract in a later session because only the hash and a summary were saved; the second extraction's character count differed because of the join method, which a saved copy would have avoided.

## Proposed topic questions
- `disability-accommodation`: Must the lease itself include the landlord's right to condition a disability modification on restoration (a state fair housing act copying 42 U.S.C. § 3604(f)(3)(A) plus a 'shall be included in any lease' sentence)?
- `towing`: Does state towing law bar towing or booting a vehicle solely for expired or improper registration, or require signage naming the towing firm?
- `required-fees`: Must every fee, fine, interest or other charge be stated in the written lease, with a notice period to add one later?
- `rent-increase-notice`: Does the notice period apply to fixed-term leases as well as periodic ones, and is there a separate nonrenewal-notice duty?
- `consumer-protection-act`: Does the state's consumer protection act list blank spaces at signing or failing to give a copy at signing as unlawful practices, and does it reach residential leases?
- `unpaid-damages-interest`: Does a fee statute require interest on late amounts to be stated in the lease before it can be charged, even where a legal rate applies without a contract?
- `unauthorized-occupant-removal`: Is there a sheriff-run removal for squatters with a statutory complaint form, and what liability attaches to misuse?
- `security-deposit-return`: Does the statute let the lease fix the refund time within a range ('if no time is fixed by agreement')?

**Propagation note, 2026-09-30 (rule 62):** `early-termination-ks`, which this state is tagged on, gained one sentence: the early-termination option and fee apply only if the lease has a fixed Term; a periodic tenancy ends on the notice that law and the lease provide, without a fee. Uniform edit by Claude Code, proposed by SC's retro (AL retro finding 4). Nothing the landlord has under law is removed.

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Circle-back checks (SOP 1.38), 2026-10-03

**Date:** 2026-10-03 · circle-back in ID's chat (rule 8) · Opus, high effort; research mode not used (no rule-9 trigger: the checks ran on the official Idaho Code and Constitution pages in the built-in browser). **Input:** `lease-clauses.csv`, 2,876 rows, as the prompt says; ID 121 active. Old output files deleted first (`lease-clauses-ID-delta.csv`, `lease-clause-decision-log-ID.md`, both from 2026-09-30). The attached files are the only source of truth; they agree with the earlier work in this chat and add the two later shared edits recorded at the end of ID's log (`appliances-included`, `snow-removal`). Scalpel, not a re-audit (rule 1): only the five items below were opened. Search records are saved in `sources/batteries/retro-2026-10-03.md`.

**Rule 79 basis for this pass:** the saved section files from 2026-09-30 for §§ 6-201, 6-301 to 6-304, 6-316, 6-317, 6-320, 6-324, 12-120, 26-2229A and 55-305 were compared with the live section pages before reuse. The content is identical after lowercasing and collapsing whitespace. A byte hash differs only because the pages now render headings in capitals and drop the blank line before 'History:'.

1. **Rule 54t (tenant-caused damage): fixed, with 1 optional clause and 1 education row added.**
   - **Not previously covered.** ID's log records no 54t screen; the SOP conformance note marked it due. The casualty row was checked first: `casualty-termination-id` already gives no termination or abatement for a casualty 'caused by Tenant, members of Tenant's household, or Tenant's guests'.
   - **What was read:**
     - § 6-201: waste; 'there may be judgment for treble damages'.
     - § 6-303(4): waste contrary to the lease terminates it on a three-day notice to quit.
     - § 6-320(a), (d): the tenant's action for damages and specific performance. Its text has no tenant-fault exception.
     - § 6-311: a rent bond for a detainer continuance, not a tenant remedy.
     - § 55-305(2), (4).
   - **What was searched:** every chapter of Titles 6, 9, 29, 41 and 55 (143 chapter PDFs) for accidental-fire, destruction or untenantability, rent-abatement, rebuild and tenant-fault wording. There was no residential-tenancy hit.
   - **Each abatement or exit provision, checked separately:**
     - Idaho has no casualty statute, no essential-services remedy, no statutory landlord-breach termination and no rent-into-court remedy.
     - So there is no fault exception to find. A no-abatement term waives no statutory right.
   - **What Idaho law gives the landlord:**
     - Repair cost: as damages (`tenant-maintenance`), and waste with possible treble damages.
     - Rent during repairs: it runs under the lease unless the lease abates it.
     - Lost rent if the lease ends: contract damages. There is no statutory mitigation rule, and the measure is case law, not read.
     - The tenant has no statutory walk-away right.
   - **Rows:**
     - New `tenant-caused-damage-id` (CONDITIONAL, SERVES_LANDLORD): the TN model, which is not tagged, plus a last sentence preserving the tenant's Idaho repair action.
     - New `edu-tenant-caused-damage-id`.
     - `casualty-termination-id`: ID note and `last_checked` only, adding a pointer to the two new rows.

2. **Rule 35c (Constitution screen): checked, no issue; no row changed.**
   - **Not previously covered.** ID's log §1.3 says the Constitution was not searched.
   - **Loaded:** all 21 articles from legislature.idaho.gov/statutesrules/idconst/ (234 sections, 155,803 characters, every section link loaded).
   - **Controls:** 'legislature' 102 sections and 'governor' 33; the nonsense term returned 0. Every pattern matched a synthetic positive first.
   - **Results:**
     - Cannabis or marijuana and controlled substances: **0**. Idaho's constitution has no cannabis provision, so the shared `smoking-policy` ban on smoking or vaping marijuana stands. This is the opposite of Missouri.
     - Arms: Art. I, § 11 restricts what 'law' may do (licensure, registration, confiscation), and no ID-tagged clause restricts firearms.
     - Speech: Art. I, § 9 ('Every person may freely speak, write and publish'). `common-area-use`'s consent rule for outside signs already yields to any display 'applicable law entitles Tenant to make'. Whether § 9 reaches a private landlord is case law, not read.
     - Search: Art. I, § 17 reaches unreasonable searches and seizures, which is state action.
     - Privacy: the only hit is crime victims' rights in the justice process (Art. I, § 22).
     - Hunting: Art. I, § 23 creates no right to trespass on private property.
     - Lease, tenant and residence: 24 hits, all on public lands, bonds, transportation, water or office residency. None reaches a residential lease.
   - **No initiated amendments to check.** Under Art. XX, § 1, amendments come only from the legislature with voter ratification; Art. III, § 1's initiative power is to propose laws.

3. **Targeted fix 3 (holdover rate, rule 54 as amended at the NE sync): checked; verdict unchanged, education row fixed.**
   - **The statutory measure is neither conditional nor a lump sum.**
     - § 6-317 lets the court treble 'the actual damages' whenever a landlord 'recovers damages for a ... detention'. It has no willful or bad-faith condition.
     - § 6-316(1) has the damages assessed for the whole unlawful detainer.
     - So the ordinary good-faith holdover still gets actual damages, normally the rental value, which `holdover-ca` claims. No gap is left.
   - **Verdict (log §6.1):** no holdover-rate clause, unchanged.
   - **Row fixed:** `edu-holdover-damages-id` now says a set rate is lawful as far as statute goes, why the library doesn't offer it, and that a landlord can add their own clause after taking advice. Whether a premium rate is a penalty is case law, not read. Before, the row stated the decision without saying the option was lawful (rule 54).

4. **Targeted fix 4 (rule 62 vetting, `default-by-tenant`, CO proposal to delete 'and reasonable costs and expenses'): checked; NOT vouched as a uniform edit for Idaho.**
   - **Idaho has no rule that needs the deletion.** No Idaho statute voids a one-way cost or fee provision in a residential lease.
     - § 6-324 makes attorney fees mandatory and mutual by statute in detainer actions, whatever the lease says. Treble-damages cases are excepted, and in nonpayment cases the fees depend on the three-day notice's advisory.
     - § 12-120 is mutual by its own terms.
     - Court-cost rules (Idaho R. Civ. P. 54) were not read.
   - **Deleting the phrase could give up two things.**
     - § 55-305(2)(b): for written agreements entered into or renewed from 2023-07-01, an owner may not charge a 'fee, fine, assessment, interest, or other cost ... not included in the rental agreement' without 30 days' written notice.
     - § 26-2229A(4)(c): a licensed collection agency may collect 'expenses incidental to the principal obligation' only if they are 'expressly authorized by the agreement creating the debt', or under one of the section's other grounds.
     - The clause's mutual closing sentence covers only court costs and fees 'incurred in connection with any legal proceedings'. Without the phrase, the Idaho lease would no longer mention pre-suit default costs in general (re-letting, cleaning, collection expenses).
     - Whether those count as an 'other cost' and whether the general wording is specific enough are both unsettled. The optional `collection-fee-id`, `keys` and `tenant-maintenance` cover parts of this.
   - **Recommendation:** Colorado's driver is Colorado-only, so make the change as a Colorado override, not a shared edit. If it is made shared, ID would need an override that keeps the phrase. Shared text not edited.

5. **Targeted fix 5 (rule 62 vetting, `default-by-tenant`, MN proposal to move the no-cure carve-out into its own sentence reaching both limbs): vouched, no change needed.**
   - § 6-303(2) always requires a three-day written notice requiring payment of the amount due, or possession, before nonpayment is an unlawful detainer. No Idaho law lets a landlord proceed on nonpayment without it.
   - So 'except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure' can't reach the rent limb in Idaho. It still covers the § 6-303(3) proviso (a breach that cannot afterward be performed), § 6-303(4) and § 6-303(5).
   - The drug-activity ground (§ 6-303(5)) and holdover (§ 6-303(1)) are separate grounds, not nonpayment.
   - Recorded here as the 'Vouches given' entry for ID's propagation section (rule 62). Shared text not edited.

**Rows changed** (`lease-clauses-ID-retro-delta.csv`, 4 rows, 17 columns, CRLF):
- **New:** `tenant-caused-damage-id` and `edu-tenant-caused-damage-id`.
- **Edited ID-only rows:** `edu-holdover-damages-id` (`bodyText`, notes) and `casualty-termination-id` (notes).
- **Integrity:** each row has `last_checked` 2026-10-03. No shared row changed, no ID lease clauses share a topic, every '§' is prefixed and no `{{variable}}` was added.
- **Counts:** ID goes from 121 to 123 active (65 lease clauses, 58 education). Every other state's count is unchanged.

### Proposed SOP changes
1. **Rule 79: compare saved section files with live pages by content, not by byte hash, when the site's rendering can change.** Lowercase both texts and collapse whitespace, or use `textContent`, before hashing. Reason: Idaho's section pages now render headings in capitals and drop a blank line, so every 2026-09-30 byte hash differed although the statute text was unchanged. A byte-only rule would have forced a needless re-read or a false 'changed' finding.

## Circle-back sync (Claude Code, 2026-10-03)

- **Merged** with `merge-delta.py --base 2b10851`: 2 new rows (`tenant-caused-damage-id`, `edu-tenant-caused-damage-id`) and 2 updated (`edu-holdover-damages-id`, `casualty-termination-id`); nothing refused. ID active 121 → 123.
- **Citations file:** rows added for the two new rows; `last_checked` on the two edited rows set to 2026-10-03.
- **Rule 62:**
  - ID vouched for MN's no-cure-sentence edit to `default-by-tenant`.
  - ID declined CO's deletion of "and reasonable costs and expenses" (Idaho Code § 55-305(2)(b), § 26-2229A(4)(c)). Because one tagged state can't vouch, the deletion went in at this sync as a Colorado override, `default-by-tenant-co`, as ID recommended. CO is untagged from the shared row, and the shared text keeps the phrase for Idaho and every other tagged state. The vetting question was removed from the circle-back folders that still carried it.
- **Guards:** all pass. **Statute spot-check, 3 of 3, on legislature.idaho.gov:** § 6-317 (treble damages, no willfulness condition); § 6-303(2) (three-day notice requiring payment or possession); § 55-305(2)(b) (no fee or other cost not in a written rental agreement without 30 days' written notice).
- **SOP 1.39:** ID's rule 79 proposal adopted (compare saved section files with live pages by normalised content, not raw bytes).
