# New Mexico — lease-clause decision log (state #30)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§14: the Uniform Owner-Resident Relations Act, NMSA 1978, ch. 47, art. 8 (61 section entries) and art. 8A read whole from the whole NMSA 1978 (2026 compilation) loaded from nmonesource.com; the article's section index diffed against every citation in the NM rows; uncited sections listed with reasons; the forcible-entry article (ch. 35, art. 10) and the landlord-lien statutes (ch. 48, arts. 3 and 6) read as the nearest general landlord-tenant law) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: New Mexico Tech, Mountain Springs Apartment License Agreement 2026-2027 (updated February 27, 2026), mapped provision by provision; weaker lead, reasons given) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 64 scenarios, Claude-generated on the AZ §18.1 / IA §16 model plus New Mexico-specific, run against the final rows; every scenario answered by a row or a canvass line; no row added) |
| Gap-discovery source 4 — outside-title search | Done (§17: the whole NMSA 1978 (84 chapter PDFs, 31,114 section versions) and the New Mexico Constitution loaded before the first battery and searched with 133 batteries; control 0 hits in every battery; every absence pattern tested against known positives, failures rerun; relied-on hits read whole) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state is closed. This pass changed no other state's row except by adding an `NM` tag and an `NM:` note.

**Date:** 2026-10-02 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** none of the three rule-9 triggers needed it, because the whole NMSA 1978 and the Constitution were loaded, saved and hash-matched, giving full-text proof of absence and cross-chapter search directly (rule 9). (Claude cannot switch research mode on or off itself; only Taylor can.)
**Kickoff vs SOP:** no conflict found. Citation formats are the kickoff's (`NMSA 1978, § 47-8-18(A)`, `NMSA 1978, §§ 47-8-33, 47-8-34`, `2025 N.M. Laws ch. 122, § 6`, `Rule 2-107 NMRA`, `N.M. Const. art. II, § 6`, `Cheng v. Rabey, 2023-NMCA-013`), checked by script (§8). The kickoff defines no format for the Supreme Court's civil forms; rows write `Form 4-901 NMRA` (flagged §10). Short forms such as '§ 47-8-18' appear only in this log.
**Scope:** New Mexico state law only. Albuquerque, Santa Fe and Las Cruces ordinances (and any other local rule) are flagged, not resolved (rule 3); state law preempts local rent control (NMSA 1978, § 47-8A-1) and municipal and county regulation of firearms (N.M. Const. art. II, § 6). Out of scope and named: mobile home parks (out of scope by the kickoff; the act applies to park owners and residents except where the Mobile Home Park Act, ch. 47, art. 10, directly conflicts, NMSA 1978, § 47-8-52), the act's exempt arrangements (NMSA 1978, § 47-8-9), commercial leases, agricultural tenancies (ch. 48, art. 6).
**Input CSV:** `lease-clauses.csv`, **2,563 rows, 17 columns, 2,441 active (609 lease clauses, 1,832 education)**; active counts per state match the kickoff exactly (rule 23; counted at the file's own path). No NM rows existed (rule 25). This is New Mexico's only Desktop chat and its first work, so there were no earlier output files to delete (rule 8).
**Output CSV:** `lease-clauses-NM-delta.csv`, **163 rows, 17 columns, CRLF** (sha256 d12b3f36b0e7…23811d6): 49 existing rows with `NM` added to `states`, an `NM:` note appended and `last_checked` 2026-10-02, and 114 new NM rows. **NM 163 active: 71 lease clauses (49 tagged + 22 new), 92 education; all VERIFIED.** Merged with the master: 2,677 rows, 2,555 active; every other state's active count unchanged. **No shared row's text changed.**
**Taylor's earlier answer:** "Yes" (2026-10-02) to saving `nm-*` working files to his Downloads folder; those files remain there (§11).

---

## 0. Completion status

| | Status |
|---|---|
| Primary text read | **Read whole and saved, browser SHA-256 equal to file SHA-256 (`sources/registry.tsv`):** the whole NMSA 1978 2026 compilation as parsed from the 84 annotated chapter PDFs on nmonesource.com (`nm-nmsa-2026-corpus.json`); ch. 47, art. 8 also saved separately (`nm-47-8-uorra.txt`); the New Mexico Constitution (`nm-const.json`); the Rules of Civil Procedure for the district, magistrate and metropolitan courts and the civil forms (Rules 1-, 2-, 3-, 4- NMRA, `nm-nmra-rules-1-2-3-4.json`); the 2025 regular, 2025 first and second special, and 2026 regular session laws (`nm-session-laws-2025-2026.json`); Supreme Court Orders 22-8500-001, 22-8500-012 and 23-8500-001 (`nm-sc-orders-epdp.json`); the real lease (`nm-real-lease-nmt-msa-fy27.txt`). **Cases:** not read; only the compilation's annotations (§1.4). **Read in battery context only (labelled so in the rows):** the hits named in §17. |
| Step B — tag first | **Done.** 49 existing rows tagged NM (§2.1), including the ks-oh-ca / ks-oh / ks-ne variants, `extended-absence-notice-ks`, `possession-delay-ca`, `tenant-forward-proceedings-ca` and `parking-vehicle-rules-id` (ID and IA). 24 shared rows (23 multi-state plus the blank-states `security-deposit-return` parent) screened and not tagged (§2.2). All 536 single-state clauses screened as a triage, none tagged (§2.3). No shared text edited. |
| Step E — new NM rows | 22 lease clauses (12 of them options under rule 54, §6.1) and 92 education rows; 31 education rows carry a CONFIRMED ABSENT search record (§3). |
| Rule 25 family | `security-deposit-return-nm` (30 days after the later of termination or departure; itemized list; mailing to last known address; § 47-8-18(C)-(E)). |
| Step D screens | All run (§19). Hits: rule 42 (`fees-and-charges-nm`; the late-fee notice in `late-fee-nm`), rule 43 (`default-by-tenant` carve-out covers the second-noncompliance and substantial-violation grounds), rule 45 (§ 14-16-3(B)(2)(b): no e-mail default or eviction notices), rule 47 (§ 47-8-17 knowing-use liability), rule 48 (§ 47-8-20(D) separate writing; settled, not re-asked), rule 50 (choices made on purpose, §19), rule 52 (§ 47-8-16; exculpation-free variants), rule 53 (`late-fee`, `returned-payments`, `holdover-ca`, `landlords-access`, `pet-policy`, `parking-vehicle-rules`, `early-termination-ks`, `landlord-maintenance` replaced). Constitution: art. II, §§ 6, 17 and 22 (repealed) recorded. |
| Optional clauses (rule 54) | 13 offered; 11 lawful or unsupported options not offered and 6 barred, each with its reason and, where lawful, an education row (§6.1). |
| Questions to Taylor (rule 76) | None needed (§6.2). The tenant-chore split was settled by rule 48 and not re-asked (kickoff lead 7). |
| Proof of absence | 31 education rows carry a CONFIRMED ABSENT record (battery, hit count, known-positive result); every topic in the reference ends Present, Confirmed absent, Not located, Answered elsewhere, Not offered, Barred or Not applicable (§18). Nine batteries recorded a failed known positive; each is recorded and rerun (§1.3). |
| Independent check | A separate agent checked all 163 rows against the saved sources in three rounds: round 1, 1 ERROR, 13 FIX and NOTEs, all applied or answered; round 2 re-checked the 54 rows edited and re-ran every battery (0 ERROR, 3 FIX, 4 NOTE, applied); round 3 re-checked the 7 rows edited after round 2 (none) (§13, rule 80). |
| Corpus completeness | 84 chapter PDFs loaded sequentially with no fetch errors: chapters 1 to 77 and the lettered chapters 22A, 24A, 32A, 42A, 46A, 46B and 59A; the two near-empty PDFs are chapter 59 (repealed in 1984, replaced by 59A) and chapter 22A (recompiled into ch. 22) (§1.3). |
| Currency | 2026 compilation, including the 2026 regular session (about 310 section versions print a 2026 history line). Every 2025 and 2026 act screened; the only acts touching a relied-on section are 2025 N.M. Laws ch. 122 (SB 267, effective June 20, 2025) and 2026 N.M. Laws ch. 62, § 4 (SB 96, effective July 1, 2026), both read as enrolled (§1.2). |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Statutes and Constitution:** nmonesource.com (New Mexico Compilation Commission). Each NMSA chapter is one annotated PDF at `/nmos/nmsa/en/{id}/1/document.do` (history lines printed, compiler's notes and annotations included); the Constitution at `/nmos/c/en/5916/1/document.do`. **Channels:** the cloud shell could not reach the New Mexico sites through its proxy; the built-in browser could. Chapters were loaded sequentially in one corpus tab, parsed with pdf.js in the browser, saved by the browser to Taylor's Downloads folder (Taylor approved saving `nm-*` files), staged into the workspace and hash-matched (browser SHA-256 = file SHA-256). One file landed under a temporary GUID `.tmp` name and was identified by hash (rule 14).
- **Session laws:** the annual Laws of New Mexico volumes on nmonesource.com (`/nmos/nmsl/en/...`), 2025 regular and first and second special sessions and 2026 regular session; bill status on nmlegis.gov.
- **Court rules and forms:** NMRA sets 1 (district civil), 2 (magistrate civil), 3 (metropolitan civil) and 4 (civil forms) on nmonesource.com. **Supreme Court orders:** supremecourt.nmcourts.gov (Orders 22-8500-001, 22-8500-012, 23-8500-001).
- **Real lease:** nmt.edu (§15).
- **Citation format:** the kickoff's; log references written 'NM log §N'.

### 1.2 Currency (rule 16)
- **Compiled text:** the 2026 NMSA compilation; about 310 section versions print a 2026 history line, so the 2026 regular session is compiled. The compilation prints future-dated versions as separate entries (33 section numbers have two versions, e.g. § 66-6-23 'Effective January 1, 2027'); no section a row relies on has a future-dated version.
- **2025 and 2026 acts:** every chapter of the four sessions was screened by keyword (landlord, tenant, lessor, lessee, rental agreement, residential lease, eviction, owner-resident, 47-8) and then overlaid on every section the NM rows cite (221 sections in the final delta, `work/cited-sections.txt`; the overlay was re-run on the final list, rule 16). Acts amending a cited section: **2025 N.M. Laws ch. 122 (SB 267)**, §§ 1 (§ 47-8-3), 2-5 (new §§ 47-8-19.1 to 47-8-19.4), 6 (§ 47-8-15), 7 (§ 47-8-48), 8 (§ 57-12-2), 9 (new § 57-12-27); no effective-date clause, so effective June 20, 2025 (ninety days after adjournment); enrolled text compared word by word with the compiled sections and identical. **2026 N.M. Laws ch. 62 (SB 96, approved March 10, 2026)**, § 4 (§ 47-16-18, adding child care home provisions); § 6: 'The effective date of the provisions of this act is July 1, 2026.' The other overlay hits amend sections that appear only in battery hit lists, not sections any row relies on: 2025 N.M. Laws chs. 85 (§ 26-2C-43), 93 (§ 62-17-12), 98 (§ 74-4-3), 112 (§§ 74-6-2, 74-6C-2) and 130 (§ 7-1-13.1); 2026 N.M. Laws chs. 5 (§ 13-9-3), 6 (§ 11-22-10), 20 (§ 29-22-4) and 31 (§ 7-2F-2); the compiled text already prints each. Sections named in an act only as a cross-reference (§§ 1-6-9, 7-1-2, 30-8-8, 47-8-23, 66-3-121) are not amended. pdf.js drops underline and strike-through; the effects stated come from the compiler's amendment notes and the compiled text (rule 16).
- **Special sessions:** 2025 first and second special sessions loaded and screened; neither touches a cited section.
- **Revisory act:** no 2025 or 2026 act corrects a cited section.
- **Stale cross-references in relied-on sections (rule 77):** listed in §10.

### 1.3 Corpus and method (rule 19)
- **Loaded:** every NMSA chapter PDF (84 chapter PDFs, one corpus tab, sequential, 0 fetch errors), parsed into 31,114 section versions (31,081 section numbers; 33 numbers carry a current and a future-dated version); the Constitution (24 articles) loaded before the first battery and searched as article sections. Completeness: chapters 1 to 77 are all present, plus the lettered chapters 22A, 24A, 32A, 42A, 46A, 46B and 59A.
- **Engine:** JavaScript regular expressions in the browser for batteries 1-114 (saved as `batteries/nm-batteries-2.jsonl`, which holds 1-114 and supersedes the earlier save `nm-batteries-1.jsonl`, 1-108), then the same semantics in Python over the saved, hash-matched corpus for batteries 115-133 (`nm-batteries-3.jsonl`); the Python engine reproduces every browser battery's hit count and positive results exactly. Normalized text (straight quotes and dashes), headings excluded and reported separately as heading-only hits, first match per section; an optional context filter (`req`) and scope are recorded with each battery. Control term (battery 1): 0 hits; every battery records its control count (always 0). Calibration: battery 2.
- **Tool fixes found by the independent check:** (1) the Python index kept one version of each of 33 dual-version sections, so batteries 39 and 72 re-ran one hit short; the engine now parses every version from the corpus JSON and all batteries reproduce their records exactly; (2) the heading-only screen dropped a heading when the body matched but failed the context filter (the browser engine had the same branch); fixed and rerun for every battery (`batteries/nm-batteries-heading-screen-rerun.jsonl`); hit counts unchanged; the newly surfaced headings that bear on a row (§ 48-6-14, § 47-10-15.1) are handled in the rows.
- **Known positives:** every absence battery was run with real saved sections, synthetic statute-style sentences or both, in the same step. **Failures and reruns, all recorded:** 6 → 18 (rent control: synthetic 'limits the amount of rent'); 28 → 109 (towing; section-wide); 51 → 60 → 125 (rent receipts; 60 was scoped, 125 is whole-code); 52 → 61 (lease copy); 86 → 93 (telecom access); 87 → 94 (utility lien); 95 → 105 → 126 (just cause); 99 → 106 → 127 (application of payments and acceptance of rent); 116 → 122 (towing, § 66-7-352.5 positive). Scoped reruns were made whole-code after the independent check (110 → 128, 121 → 129). Where every positive was synthetic and the battery returned 0, an everyday-word or wider battery followed (11 → 19, 13 → 69, 21 → 70, 30 → 31, 54 → 71, 56 → 72, 57 → 73, 65 → 74, 90 → 133, 102 → 130, 120 → 123); battery 133 was run while assembling this log, when the check of the canvass found battery 90 cited alone. Reruns 69 (radon) and 71 (window guards) also returned 0 with synthetic positives; they are the everyday-word reruns, and the chain ends there (`edu-no-radon-disclosure-nm` and the canvass line `window-guards` cite each pair).
- **Boundary:** the batteries searched the NMSA 1978 and the Constitution. Court rules and orders named in §1.1 were read for the questions the rows raise, not searched as whole bodies with batteries. The New Mexico Administrative Code (fire, building, towing, utility rules), federal law beyond the provisions named, case law and local codes were not searched, and nothing is claimed about them.
- **Saved:** batteries 1-133 with pattern, scope, context filter, positives and results, hits, heading-only hits and control count; the corpus; the acts; the court rules and orders; the real lease; the registry. Every battery citation in the rows was generated from the saved log by the build script, which cites a failed battery only as 'recorded as failed, rerun as N' (rule 19).

### 1.4 Section-open vs recall; case law (rule 15, rule 21)
Every row was drafted with the saved primary text open (each new row's notes say 'Rule 15: written section-open'); the recall subset is empty. Sections read only in battery context are labelled so in the rows.

**Case law:** no opinion was read. Cases appear only as summarized in the compilation's annotations and every row says so ('as summarized in the compilation's annotation; opinion not read'). Used: Cheng v. Rabey, 2023-NMCA-013 (petition filed only on the day after the third day; a written agreement can be modified by words or conduct; no abatement without written notice); Hedicke v. Gunville, 2003-NMCA-032 (no late fees without notice; a $50,000 payment too large to be a deposit; meaning of prevailing party); Garcia v. Thong, 1995-NMSC-030; Stodgell v. Weissman, 2025-NMCA-003; Bruce v. Attaway, 1996-NMSC-030; T.W.I.W., Inc. v. Rhudy, 1981-NMSC-062; Serna v. Gutierrez, 2013-NMCA-026; White v. Farris, 2021-NMCA-014; Roser v. Hufstedler, 2023-NMCA-040; Baker v. Storie, 1960-NMSC-037; Casa Blanca Mobile Home Park v. Hill, 1998-NMCA-094; Carol Rickert & Assocs. v. Law, 2002-NMCA-096; Behrens v. Gateway Court, L.L.C., 2013-NMCA-097; Ramirez-Eames v. Hover, 1989-NMSC-038; Fallen v. GREP Southwest, LLC, 247 F. Supp. 3d 1165 (D.N.M. 2017). Four body statements rest on these summaries: two say so in plain words (`edu-nonpayment-notice-nm`, Cheng's filing day; `edu-deposit-return-penalty-nm`, Stodgell's later claim); two state the holding without naming a court, and their notes carry the case with the annotation label (`edu-self-help-eviction-nm`: a judgment for possession is not a court order permitting a utility shutoff before the writ is executed, Roser; `edu-post-eviction-property-nm` and `abandoned-property-nm` (3): a reasonable opportunity to retrieve property within three days after a writ is executed, White).

**Case-law questions and outcomes (rule 21):**
- Annotated holdings above: **read in annotation only, applied with that label.**
- Whether a three-day notice may include late fees or other charges; penalty doctrine for early-termination fees, stipulated holdover rates and contract interest on rent; enforceability of a landlord casualty termination; lost-rent damages alongside the § 47-8-31 exit; common-law waiver by acceptance of rent; whether art. II, § 6 reaches a private lease term; reading leased premises as 'privately owned property' under § 26-2C-26(A)(2); whether New Mexico applies a common-law statute of frauds to leases; the deposit interest rate after the Federal Home Loan Bank Board's abolition; whether an agreement can replace § 47-8-13(D) mailing with e-mail: **not searched.** Each row that depends on one says so.

**Federal law:** 42 U.S.C. § 4852d and 40 C.F.R. § 745.113 (lead, shared row) only; the Fair Housing Act, HUD assistance-animal guidance, the Servicemembers Civil Relief Act, the Protecting Tenants at Foreclosure Act, the CARES Act notice, VAWA and the Fair Credit Reporting Act were not read, and the rows say so.

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged NM as written (49)
Each tagged row changes only `states` (adds `NM`), `notes` (an `NM:` note appended) and `last_checked` (2026-10-02); the integrity script checks this (§8). Two rows carry a builder condition: `landscaping-irrigation` and `snow-removal` bind only for a single family residence (NMSA 1978, § 47-8-20(C); rule 48, settled, not re-asked; §6.2, §10).

| Row | New Mexico note (abridged) |
|---|---|
| `acceptable-payment-methods` | NM: Applies as written. NMSA 1978, § 47-8-15(B): rent is payable without demand or notice at the time and place agreed. No New Mexico statute fixes accepted payment methods or bars a payment-method fee (NM battery 115 (rent payment methods / cash or electronic payment / convenience fee (tenancy context)): 6 hits, control 0; … |
| `addendum-precedence` | NM: Applies as written. New Mexico's required written disclosure (NMSA 1978, § 47-8-19(A); `landlord-disclosure-nm`) and the federal lead disclosure control under its 'required by law' exception. |
| `appliances-included` | NM: Applies as written. The owner maintains appliances 'supplied or required to be supplied by him' in good and safe working order (NMSA 1978, § 47-8-20(A)(4)). |
| `application-of-payments` | NM: Applies as written. NMSA 1978, § 47-8-15(G): 'Unless agreed upon in writing by the owner and the resident, a resident's payment of rent may not be allocated to any deposits or damages.' The clause applies payments to Rent first, which that rule requires; any later application to other charges is the written agreement the … |
| `assigned-parking-space` | NM: Applies as written. A rule adopted after the tenant signs binds only with reasonable notice and if it 'does not work a substantial modification of his bargain' (NMSA 1978, § 47-8-23(F)); the clause's 'subject to any limits applicable law places on changing parking rules' preserves that. |
| `assistance-animal-accommodation` | NM: Applies as written. The Human Rights Act bars housing discrimination 'because of ... physical or mental disability' (NMSA 1978, § 28-1-7(G)); the reasonable-accommodation duty for housing comes from federal fair housing law (not read; NM log §1.4). The Service Animal Act covers buildings open to the public, public … |
| `common-area-use` | NM: Applies as written. No New Mexico statute gives a residential tenant a flag, sign or display right against a private landlord (NM battery 43 (flag / sign / political display in housing): 20 hits, control 0; known positives passed; the battery did not search water beds); the Constitution's speech clause restrains 'law', not … |
| `due-at-signing` | NM: Applies as written, with one point for the builder: a refundable pet deposit is a 'deposit' (a pledge 'to abide by terms and conditions of the rental agreement', NMSA 1978, § 47-8-3(F)) and counts toward the deposit limit in NMSA 1978, § 47-8-18(A) (`edu-deposit-cap-nm`); last month's prepaid rent required by the rental … |
| `electronic-signatures` | NM: Applies as written. The Uniform Electronic Transactions Act applies only to transactions between parties that have each agreed to conduct transactions electronically, and a party may refuse further electronic transactions, which cannot be waived (NMSA 1978, § 14-16-5(b)-(c)). This consent covers signing; it does not make … |
| `entire-agreement` | NM: Applies as written. New Mexico lets the owner change some terms by written notice: rent in a month-to-month residency or at the end of a fixed term (NMSA 1978, § 47-8-15(F)), fees on 60 days' notice (NMSA 1978, § 47-8-19.4), and new rules on reasonable notice if they do not substantially modify the bargain (NMSA 1978, § … |
| `existing-condition` | NM: Applies as written. The acknowledgment does not waive the owner's duties under NMSA 1978, § 47-8-20, which a rental agreement may not waive (NMSA 1978, § 47-8-16). New Mexico has no move-in inspection statute (`edu-no-move-in-inspection-rule-nm`). |
| `extended-absence-notice-ks` | NM: Applies as written. NMSA 1978, § 47-8-25: 'Unless otherwise agreed, the resident shall occupy his dwelling unit only as a dwelling unit ... The rental agreement may require that the resident notify the owner of any anticipated extended absence from the premises in excess of seven days no later than the first day of the … |
| `fire-safety-grilling` | NM: Applies as written; no New Mexico statute gives tenants a grilling right. Local fire codes not read (rule 3). |
| `governing-law` | NM: Applies as written. |
| `guest-policy` | NM: Applies as written. An owner may not charge a fee for occupancy by 'a reasonable number of guests for a reasonable length of time' (NMSA 1978, § 47-8-15(E)); the clause charges none. Guest rules may not discriminate on the grounds in NMSA 1978, § 28-1-7(G). |
| `guest-policy-day-limit` | NM: Applies as written; no fee is charged for guests (NMSA 1978, § 47-8-15(E)). |
| `hoa-compliance` | NM: Applies as written. The resident must 'abide by all bylaws, covenants, rules or regulations of any applicable condominium regime, cooperative housing agreement or neighborhood association not inconsistent with owner's rights or duties' (NMSA 1978, § 47-8-22(H)). Under the Homeowner Association Act, each lot owner 'and the … |
| `inspection-rights` | NM: Applies as written; inspection is a purpose for which the resident 'shall ... consent' on 24 hours' written notice stating the purpose, date and estimated time frame (NMSA 1978, § 47-8-24(A)(1)). Its 'Access & Entry terms' are `landlords-access-nm`. |
| `joint-liability` | NM: Applies as written. |
| `keys` | NM: Applies as written. Rekeying on the tenant's failure to return keys is a cost of the tenant's breach. A lock change used to exclude a resident without a court order is barred (NMSA 1978, § 47-8-36(A)(2)); this clause does not do that. |
| `landscaping-irrigation` | NM: Settled by SOP rule 48 (Taylor, 2026-09-30 and 2026-10-02, not re-asked): tagged, binding only for a single family residence. NMSA 1978, § 47-8-20(C): 'The owner and resident of a single family residence may agree that the resident perform the owner's duties specified in Paragraphs (5) and (6) of Subsection A of this … |
| `lead-based-paint` | NM: Applies as written (federal: 42 U.S.C. § 4852d; 40 C.F.R. § 745.113). New Mexico adds no lead disclosure for rentals (NM battery 21 (lead-based paint / lead hazards in housing): 0 hits, control 0; known positives passed; NM battery 70 (lead everyday rerun of B21 (lead + paint / pipes / housing)): 2 hits, control 0; known … |
| `no-alterations` | NM: Applies as written. Its last sentence preserves any modification the law entitles a tenant to make; federal fair housing law governs disability modifications (not read). |
| `no-disturbance` | NM: Applies as written; it tracks the resident's duty in NMSA 1978, § 47-8-22(G). |
| `no-sublet-assign` | NM: Applies as written; no New Mexico statute regulates consent to subletting or assignment of a residential rental agreement (NM battery 128 (subletting / assignment: whole-code rerun of B110): 128 hits, control 0; known positives passed, whole-code rerun of battery 110: hits are public-land, mineral, commercial-code, lien and … |
| `notices` | NM: Applies as written. NMSA 1978, § 47-8-13 controls: a nonpayment notice is effective only when hand-delivered, mailed, or posted on an exterior door of the dwelling unit; any other written notice to the resident that is posted must also be mailed by first-class mail or hand-delivered; the posting date goes on the notice and … |
| `parking-ks-oh-ca` | NM: Applies as written in place of the base `parking`, whose 'not liable' sentence would have the resident forgo remedies under the law, which no rental agreement may provide (NMSA 1978, § 47-8-16; rule 52). |
| `parking-vehicle-rules-id` | NM: Applies as written in place of the base `parking-vehicle-rules`, which tows a tenant's own vehicle for expired registration or inoperability. New Mexico's statutes reach private-property removal only of an 'abandoned vehicle' (left unattended at least thirty days, as determined by law enforcement, NMSA 1978, § 66-1-4.1(A); … |
| `permitted-occupants` | NM: Applies as written. Occupancy limits may not discriminate on the grounds in NMSA 1978, § 28-1-7(G); familial status is protected by federal law (not read). No New Mexico statute sets a persons-per-bedroom standard (NM battery 89 (occupancy standards / overcrowding / persons per bedroom): 15 hits, control 0; known positives passed). |
| `pet-insurance-requirement` | NM: Applies as written; no New Mexico statute bars a renter's insurance requirement (NM battery 50 (renter's / tenant insurance requirement): 17 hits, control 0; known positives passed). It excludes assistance animals. |
| `possession-delay-ca` | NM: Applies as written in place of the base `possession-delay`, which makes the tenant wait 30 days to terminate. NMSA 1978, § 47-8-26(B): if the owner fails to deliver possession, 'one hundred percent of the rent abates until possession is delivered' and the prospective resident may terminate on written notice, effective … |
| `rent-payment` | NM: Applies as written. NMSA 1978, § 47-8-15(A)-(B): the resident pays rent per the rental agreement, without demand or notice, at the agreed time and place. 'Except as permitted by applicable law' preserves the resident's abatement rights (NMSA 1978, §§ 47-8-26(B), 47-8-27.2, 47-8-36(C)(1)). |
| `rental-application-accuracy` | NM: Applies as written; a materially false application is a material noncompliance handled under NMSA 1978, § 47-8-33(A)-(C). |
| `residential-use-only` | NM: Applies as written; NMSA 1978, § 47-8-25 ('Unless otherwise agreed, the resident shall occupy his dwelling unit only as a dwelling unit'). |
| `services-utilities-provided-ks-oh` | NM: Applies as written in place of the base, whose 'Landlord is not liable' sentence would have the resident forgo remedies (NMSA 1978, § 47-8-16; rule 52). Where a failure results solely from circumstances beyond the owner's control, the statute already limits the resident's remedies (NMSA 1978, § 47-8-27.1(B)). |
| `severability` | NM: Applies as written. It does not cure a prohibited term: an owner who deliberately uses a rental agreement containing provisions known to be prohibited owes the resident the damages resulting from the illegal provision and reasonable attorney's fees (NMSA 1978, § 47-8-17). |
| `smoking-policy` | NM: Applies as written. The Cannabis Regulation Act does not 'restrict the ability of a person to prohibit conduct otherwise allowed in the Cannabis Regulation Act on the person's privately owned property' (NMSA 1978, § 26-2C-26(A)(2)); no New Mexico statute protects smoking or vaping in a rental (NM battery 40 (cannabis / … |
| `snow-removal` | NM: Settled by SOP rule 48: tagged, binding only for a single family residence under NMSA 1978, § 47-8-20(C) (see `landscaping-irrigation` note); for any other dwelling unit use the separate `maintenance-allocation-nm` (NMSA 1978, § 47-8-20(D)). Keeping common areas safe is the owner's duty (NMSA 1978, § 47-8-20(A)(3)); the … |
| `storage-space-ks-oh-ca` | NM: Applies as written in place of the base, whose 'not liable' sentence would waive remedies (NMSA 1978, § 47-8-16; rule 52). |
| `surrender-end-of-term-ks-ne` | NM: Applies as written; its 'Handling of Property Left Behind Section' is `abandoned-property-nm`. The resident must leave the unit 'in as clean condition, excepting ordinary wear and tear, as when residency commenced' (NMSA 1978, § 47-8-22(B)). |
| `tenant-forward-proceedings-ca` | NM: Applies as written; no New Mexico statute governs it. A receiver or assignee who enforces an assignment of rents notifies the tenant directly (NMSA 1978, §§ 56-15-9, 56-15-10). |
| `tenant-maintenance` | NM: Applies as written. NMSA 1978, § 47-8-22(B) qualifies the resident's cleanliness and safety duty 'as the condition of the premises permit'; the clause's carve-out for conditions the law requires Landlord to repair keeps it within NMSA 1978, § 47-8-20. |
| `tenants-property-insurance-ks-oh-ca` | NM: Applies as written in place of the base, whose 'not liable' sentence would waive remedies (NMSA 1978, § 47-8-16; rule 52). No New Mexico statute bars a renter's insurance requirement (NM battery 50 (renter's / tenant insurance requirement): 17 hits, control 0; known positives passed). |
| `utilities-paid-by-landlord` | NM: Applies as written. The owner must supply running water, a reasonable amount of hot water and reasonable heat unless heat or hot water comes from an installation within the resident's exclusive control and a direct public utility connection (NMSA 1978, § 47-8-20(A)(6)). |
| `utilities-responsibility` | NM: Applies as written. A municipal utility charge is a lien on the property served unless the owner gives the municipality written notice, before the debt arises, that a renter's charges will not be the owner's responsibility (NMSA 1978, § 3-23-6(A), (C); `edu-municipal-utility-lien-nm`). Interrupting utilities to exclude a … |
| `utility-payment-evidence` | NM: Applies as written. |
| `utility-service-continuity` | NM: Applies as written. |
| `default-by-tenant` | NM: Applies as written. Rent: three days after written notice of nonpayment and intention to terminate; tender of the full amount, in the manner the notice states, before the three days run bars an action for nonpayment (NMSA 1978, § 47-8-33(D)); the action may not be filed until the day after the third day (Cheng v. Rabey, … |
| `security-deposit-use` | NM: Applies as written. NMSA 1978, § 47-8-18(A): a 'reasonable deposit to be applied by the owner to recover damages, if any, caused to the premises by the resident'; NMSA 1978, § 47-8-18(C): on termination, deposits may be applied 'to the payment of rent and the amount of damages which the owner has suffered by reason of the … |

### 2.2 Screened and not tagged (24)
| Row | Why not tagged for New Mexico |
|---|---|
| `late-fee` | 'a late fee ... will be assessed' reads as automatic; New Mexico allows a late fee only if the agreement provides for it and only after notice given by the last day of the next rental period (NMSA 1978, § 47-8-15(D); Hedicke, annotation only); independent check round 1 (rule 78: a notice rule a number check cannot catch); replaced by `late-fee-nm` |
| `late-fee-ne` | Same automatic 'will be assessed' and no notice step; replaced by `late-fee-nm` |
| `returned-payments` | Ceiling-only 'not to exceed the maximum amount permitted by applicable law', and New Mexico has no maximum, so the fee would be neither stated nor capped (rules 42, 53); a fee must be in the agreement (NMSA 1978, § 57-12-27(C)); replaced by `returned-payments-nm` |
| `security-deposit-return` | Blank-states parent (rule 25 family); replaced by `security-deposit-return-nm` |
| `services-utilities-provided` | 'Landlord is not liable' would have the resident forgo remedies (NMSA 1978, § 47-8-16; rule 52); `services-utilities-provided-ks-oh` tagged |
| `landlord-maintenance` | 'except where repair is necessary due to improper use by Tenant' excuses repairs that NMSA 1978, § 47-8-20(A)(4) requires without a fault exception (independent check round 1); replaced by `landlord-maintenance-nm` (Landlord repairs, Tenant reimburses) |
| `landlords-access` | 'right of reasonable access' on '24 hours' notice' omits the written form and contents of NMSA 1978, § 47-8-24(A)(1) and could be read as an agreement 'otherwise'; replaced by `landlords-access-nm` |
| `landlords-access-mi` | Consent 'not unreasonably' refused and oral notice; New Mexico requires the resident's consent but also 24 hours' written notice stating purpose, date and time frame (NMSA 1978, § 47-8-24(A)); replaced by `landlords-access-nm` |
| `possession-delay` | Tenant must wait 30 days to terminate; NMSA 1978, § 47-8-26(B) allows immediate termination by written notice; `possession-delay-ca` tagged |
| `surrender-end-of-term` | Generic 'to the extent permitted ... treated as abandoned' disposal skips New Mexico's storage and notice steps (NMSA 1978, § 47-8-34.1); `surrender-end-of-term-ks-ne` tagged (its pointer names `abandoned-property-nm`'s title, 'Handling of Property Left Behind') |
| `surrender-end-of-term-mn-nd` | Points to 'this Lease's provision governing property abandoned after termination', a description `abandoned-property-nm` matches less exactly than the ks-ne title pointer; one surrender clause per state, `surrender-end-of-term-ks-ne` tagged |
| `early-termination` | 10-day cure promise for any breach and a landlord termination on vacating without notice (rule 43; NMSA 1978, §§ 47-8-33, 47-8-3(A), 47-8-34(C)) |
| `early-termination-ks` | Its landlord limb ends the lease 'if Tenant vacates or abandons the property without notifying Landlord'; New Mexico 'abandonment' needs more than seven days' absence after rent is delinquent (NMSA 1978, § 47-8-3(A)); replaced by `early-termination-nm` |
| `holdover` | 'maximum amount permitted by applicable law' states only a ceiling (rule 53); replaced by `holdover-nm` |
| `holdover-ca` | Actual damages for any holdover; New Mexico gives damages and fees only for a willful, bad-faith holdover (NMSA 1978, § 47-8-37(C)) (rule 53 trigger, IA log §10.6 flag); replaced by `holdover-nm` |
| `tenants-property-insurance` | 'not liable' disclaimer would waive remedies (NMSA 1978, § 47-8-16); `tenants-property-insurance-ks-oh-ca` tagged |
| `parking` | Same; `parking-ks-oh-ca` tagged |
| `storage-space` | Same; `storage-space-ks-oh-ca` tagged |
| `pet-policy` | Entry to remove a pet beyond NMSA 1978, §§ 47-8-24, 47-8-34 and 'without liability to Tenant' (§ 47-8-24(D), § 47-8-16); replaced by `pet-policy-nm` |
| `parking-vehicle-rules` | Tows a tenant's own car for expired registration or inoperability; New Mexico's express owner towing power is for accessible spaces (NMSA 1978, § 66-7-352.5(D)) and a vehicle is 'abandoned' only after law enforcement so determines (§ 66-1-4.1(A)); `parking-vehicle-rules-id` tagged |
| `default-by-tenant-ks-ne` | The base `default-by-tenant` is tagged instead: its prevailing-party fee sentence matches NMSA 1978, § 47-8-48(A), so the ks-ne variant (which drops it) adds nothing for New Mexico; one default clause per state |
| `ev-charging-shared-area-co` | Colorado/Illinois EV statute; no New Mexico EV right (`edu-no-ev-charging-rule-nm`) |
| `ev-charging-end-of-tenancy-co` | Same |
| `acceptable-payment-methods-nj` | New Jersey/Illinois non-EFT method requirement; New Mexico has none (battery 115); base `acceptable-payment-methods` tagged |

### 2.3 Single-state clauses screened (536), none tagged
Triage (rule 26): **536** active clauses tagged to one state (the blank-states `security-deposit-return` parent is in §2.2). **265** name another state or its statute in the clause text (not taggable as written; their topics are answered in §18). The other **271** were read in full: **0 tagged**; **218** sit on a topic an NM row already answers with New Mexico's own wording (for example `late-fee-*`, `security-deposit-return-*`, `holdover-*`, `tenant-caused-damage-*`, `periodic-tenancy-notice-*`, `landlord-disclosure-*`, `rules-*`, `abandoned-property-*`, `deceased-tenant-contact-tx`, `tenant-death-contact-ok`, `cannabis-cultivation-mi`); **53** rest on a feature of their own state's law with no New Mexico counterpart (for example `late-fee-limit-mn`, `foreclosure-disclosure-nv`); their topics are answered in §18.2. Closest candidates considered and not tagged: `landlords-access-mi` (§2.2), `landlord-self-cure-ia` (bills the cost as rent; New Mexico's three-day notice is for rent only, NMSA 1978, §§ 47-8-3(P), 47-8-33(D); `landlord-self-cure-nm` written), `casualty-termination-ia` and `tenant-caused-damage-ia` (their bases name Iowa's statute; New Mexico versions written, rule 26), `deceased-tenant-contact-tx` and `tenant-death-contact-ok` (bases are Texas and Oklahoma; § 47-8-34.2(B) has its own three authorizations; `deceased-resident-contact-nm` written). Lists: `work/triage-step1.json`, `work/triage-final.json`.

## 3. New NM rows
Every new row: `verification_status` VERIFIED, `effective_from` and `last_checked` 2026-10-02, notes ending with the source line and 'Rule 15: written section-open'. Battery citations were generated from the saved battery records by `work/build.py`.

### 3.1 New NM lease clauses (22)
| Row | rule_type | Basis | Topic | Main citation |
|---|---|---|---|---|
| `landlord-disclosure-nm` | REQUIRED | REQUIRED_DISCLOSURE: NMSA 1978, § 47-8-19(A) | owner-identity-disclosure | NMSA 1978, § 47-8-19(A); NMSA 1978, § 47-8-19(B); NMSA 1978, § 47-8-10(B) |
| `returned-payments-nm` | CONSTRAINED | CONSTRAINED_TERM | returned-payments | NMSA 1978, § 57-12-27(C); NMSA 1978, § 47-8-19.1; NMSA 1978, § 47-8-19.4 |
| `security-deposit-return-nm` | RECOMMENDED | SERVES_LANDLORD | security-deposit-return | NMSA 1978, § 47-8-18(C); NMSA 1978, § 47-8-18(D); NMSA 1978, § 47-8-13(F) |
| `pet-policy-nm` | RECOMMENDED | SERVES_LANDLORD | pet-policy | NMSA 1978, § 47-8-24; NMSA 1978, § 47-8-34; NMSA 1978, § 47-8-24(D) |
| `landlords-access-nm` | RECOMMENDED | SERVES_LANDLORD | landlord-entry | NMSA 1978, § 47-8-24(A); NMSA 1978, § 47-8-34(B); NMSA 1978, § 47-8-13(D) |
| `periodic-tenancy-notice-nm` | CONSTRAINED | CONSTRAINED_TERM | termination-notice | NMSA 1978, § 47-8-37(A); NMSA 1978, § 47-8-15(C); NMSA 1978, § 47-8-16 |
| `holdover-nm` | RECOMMENDED | SERVES_LANDLORD | holdover | NMSA 1978, § 47-8-37(C); NMSA 1978, § 47-8-15(C); NMSA 1978, § 35-10-5 |
| `abandoned-property-nm` | RECOMMENDED | SERVES_LANDLORD | abandoned-property | NMSA 1978, § 47-8-34.1; NMSA 1978, § 47-8-3(A); NMSA 1978, § 47-8-36.1(A) |
| `maintenance-allocation-nm` | CONDITIONAL | SERVES_LANDLORD | tenant-repair-agreement | NMSA 1978, § 47-8-20(D); NMSA 1978, § 47-8-20(E); NMSA 1978, § 47-8-20(C) |
| `electronic-notice-nm` | CONDITIONAL | SERVES_LANDLORD | notice-delivery-methods | NMSA 1978, § 14-16-5(b); NMSA 1978, § 14-16-3(B)(2)(b); NMSA 1978, § 14-16-8(b)(2) |
| `rules-nm` | CONDITIONAL | SERVES_LANDLORD | rules-regulations | NMSA 1978, § 47-8-23; NMSA 1978, § 47-8-33; NMSA 1978, § 47-8-3(Q) |
| `deceased-resident-contact-nm` | CONDITIONAL | SERVES_LANDLORD | tenant-death | NMSA 1978, § 47-8-34.2(B); NMSA 1978, § 47-8-34.2(F); NMSA 1978, § 47-8-34.2(D) |
| `casualty-termination-nm` | CONDITIONAL | SERVES_LANDLORD | casualty-termination | NMSA 1978, § 47-8-31(A); NMSA 1978, § 47-8-18; NMSA 1978, § 47-8-14 |
| `tenant-caused-damage-nm` | CONDITIONAL | SERVES_LANDLORD | tenant-caused-damage | NMSA 1978, § 47-8-27.1(B); NMSA 1978, §§ 47-8-27.1(A)(2); NMSA 1978, § 47-8-31 |
| `criminal-activity-nm` | CONDITIONAL | SERVES_LANDLORD | criminal-activity | NMSA 1978, § 47-8-3(V)(1); NMSA 1978, §§ 47-8-22(I); NMSA 1978, § 47-8-33(A) |
| `cannabis-cultivation-nm` | CONDITIONAL | SERVES_LANDLORD | cannabis | NMSA 1978, § 26-2C-25(A)(9); NMSA 1978, § 26-2C-26(A)(2); NMSA 1978, §§ 26-2C-2 |
| `landlord-self-cure-nm` | CONDITIONAL | SERVES_LANDLORD | landlord-self-cure | NMSA 1978, §§ 47-8-6; NMSA 1978, § 47-8-6; NMSA 1978, § 47-8-22 |
| `early-termination-nm` | RECOMMENDED | SERVES_LANDLORD | early-termination | NMSA 1978, § 47-8-33; NMSA 1978, § 47-8-16; NMSA 1978, §§ 47-8-3(A) |
| `fees-and-charges-nm` | REQUIRED | REQUIRED_DISCLOSURE: NMSA 1978, § 57-12-27(C) | fee-transparency | NMSA 1978, § 57-12-27(C); NMSA 1978, § 47-8-19.4; NMSA 1978, § 47-8-19.1 |
| `utility-bill-copies-nm` | CONDITIONAL | CONSTRAINED_TERM | utility-submetering-disclosure | NMSA 1978, § 47-8-20(F); NMSA 1978, § 57-12-27(C); NMSA 1978, § 47-8-20 |
| `late-fee-nm` | CONSTRAINED | CONSTRAINED_TERM | late-fee | NMSA 1978, § 47-8-15(D); NMSA 1978, § 47-8-15; NMSA 1978, § 47-8-3(P) |
| `landlord-maintenance-nm` | RECOMMENDED | SERVES_LANDLORD | landlord-maintenance | NMSA 1978, § 47-8-20(A)(4); NMSA 1978, § 47-8-16; NMSA 1978, § 47-8-22(F) |

### 3.2 New NM education rows (92)
| Row | rule_type | Topic | Main citation or absence record |
|---|---|---|---|
| `edu-late-fee-cap-nm` | CONSTRAINED | late-fee | NMSA 1978, § 47-8-15(D); NMSA 1978, § 47-8-15; NMSA 1978, § 47-8-51 |
| `edu-fees-as-rent-nm` | RECOMMENDED | fees-as-rent | NMSA 1978, § 47-8-3(P); NMSA 1978, § 47-8-33(D); NMSA 1978, § 47-8-15(D) |
| `edu-rent-increase-notice-nm` | REQUIRED | rent-increase-notice | NMSA 1978, § 47-8-15(F); NMSA 1978, § 47-8-39(A); NMSA 1978, § 47-8-19.4 |
| `edu-fee-increase-notice-nm` | REQUIRED | term-change-notice | NMSA 1978, § 47-8-19.4; NMSA 1978, § 57-12-27(C); NMSA 1978, § 47-8-15(F) |
| `edu-fee-transparency-nm` | REQUIRED | fee-transparency | NMSA 1978, § 47-8-19.1; NMSA 1978, § 57-12-27(B); NMSA 1978, § 57-12-2(D)(20) |
| `edu-screening-fee-nm` | CONSTRAINED | application-fees | NMSA 1978, § 47-8-19.2(A); NMSA 1978, § 47-8-19.3(A); NMSA 1978, § 47-8-3(D) |
| `edu-tenant-screening-nm` | REQUIRED | tenant-screening | NMSA 1978, § 47-8-19.3; NMSA 1978, § 28-1-7(G) |
| `edu-rent-control-nm` | RECOMMENDED | rent-control | NMSA 1978, § 47-8A-1(A); NMSA 1978, §§ 47-8-52 |
| `edu-dishonored-check-nm` | RECOMMENDED | returned-payments | NMSA 1978, § 56-14-1(A); NMSA 1978, § 57-12-27(C); NMSA 1978, § 47-8-19.1 |
| `edu-payment-allocation-nm` | RECOMMENDED | application-of-payments | NMSA 1978, § 47-8-15(G); NMSA 1978, § 47-8-33(E)(2) |
| `edu-legal-interest-nm` | RECOMMENDED | unpaid-damages-interest | NMSA 1978, § 56-8-3; NMSA 1978, § 56-8-4(A); NMSA 1978, §§ 56-8-3 |
| `edu-rent-receipts-nm` | RECOMMENDED | rent-receipts | CONFIRMED ABSENT (NM batteries 125); NMSA 1978, § 47-8-19.2(A)(3); NMSA 1978, § 47-8-47(A); NMSA 1978, §§ 47-8-13 |
| `edu-rent-tax-nm` | RECOMMENDED | rent-tax | NMSA 1978, § 7-9-53(A); NMSA 1978, § 7-9-53 |
| `edu-no-algorithmic-rent-rule-nm` | RECOMMENDED | algorithmic-rent-setting | CONFIRMED ABSENT (NM batteries 75); CONFIRMED ABSENT |
| `edu-deposit-cap-nm` | CONSTRAINED | security-deposit-cap | NMSA 1978, § 47-8-18(A); NMSA 1978, § 47-8-18(B); NMSA 1978, § 47-8-3(F) |
| `edu-deposit-interest-nm` | REQUIRED | security-deposit-interest | NMSA 1978, § 47-8-18(A)(1); NMSA 1978, § 47-8-18 |
| `edu-deposit-return-penalty-nm` | PROHIBITED | security-deposit-penalty | NMSA 1978, § 47-8-18(D)(1); NMSA 1978, § 47-8-37 |
| `edu-deposit-last-month-nm` | RECOMMENDED | deposit-last-month-rent | NMSA 1978, § 47-8-18(B); NMSA 1978, §§ 47-8-7; NMSA 1978, § 47-8-3(F) |
| `edu-pet-deposit-nm` | CONSTRAINED | pet-fees | NMSA 1978, § 47-8-3(F); NMSA 1978, § 47-8-18(A); NMSA 1978, §§ 57-12-27(C) |
| `edu-deposit-on-sale-nm` | REQUIRED | security-deposit-on-sale | NMSA 1978, § 47-8-21(A); NMSA 1978, § 47-8-19(B) |
| `edu-no-deposit-holding-rule-nm` | RECOMMENDED | security-deposit-holding | CONFIRMED ABSENT (NM batteries 98); NMSA 1978, § 47-8-47; NMSA 1978, § 47-10-10; NMSA 1978, § 47-8-18(C) |
| `edu-deposit-escheat-nm` | RECOMMENDED | deposit-escheat | NMSA 1978, § 7-8A-2(A)(15); NMSA 1978, § 7-8A-2(A); NMSA 1978, §§ 7-8A-1 |
| `edu-no-holding-deposit-rule-nm` | RECOMMENDED | holding-deposit | CONFIRMED ABSENT (NM batteries 120, 123); NMSA 1978, § 57-12-27(B); NMSA 1978, § 47-8-19.2(A)(5); NMSA 1978, §§ 47-8-3(F) |
| `edu-no-move-in-inspection-rule-nm` | RECOMMENDED | condition-inspection | CONFIRMED ABSENT (NM batteries 78); NMSA 1978, §§ 11-13-2; NMSA 1978, § 47-8-22(B); NMSA 1978, § 47-8-3(K) |
| `edu-habitability-nm` | REQUIRED | landlord-maintenance | NMSA 1978, § 47-8-20(A)(1); NMSA 1978, § 47-8-16.; NMSA 1978, § 47-8-20 |
| `edu-tenant-repair-remedies-nm` | RECOMMENDED | tenant-repair-remedies | NMSA 1978, § 47-8-27.1(A); NMSA 1978, § 47-8-27.2(A); NMSA 1978, § 47-8-3(C) |
| `edu-tenant-statutory-duties-nm` | RECOMMENDED | tenant-statutory-duties | NMSA 1978, § 47-8-22(A); NMSA 1978, § 47-8-48(D) |
| `edu-utility-billing-nm` | REQUIRED | utility-submetering-disclosure | NMSA 1978, § 47-8-20(F); NMSA 1978, § 47-8-20; NMSA 1978, § 57-12-27(C) |
| `edu-municipal-utility-lien-nm` | RECOMMENDED | municipal-utility-lien | NMSA 1978, § 3-23-6(A) |
| `edu-lease-copy-nm` | REQUIRED | lease-copy | NMSA 1978, § 47-8-20(G); NMSA 1978, § 47-8-23(F) |
| `edu-no-alarm-statute-nm` | RECOMMENDED | alarm-duties | CONFIRMED ABSENT (NM batteries 11, 19, 12); NMSA 1978, §§ 24-16-12; NMSA 1978, § 59A-52-15.1; NMSA 1978, §§ 65-3-8 |
| `edu-no-security-device-rule-nm` | RECOMMENDED | security-devices | CONFIRMED ABSENT (NM batteries 76); NMSA 1978, §§ 30-8-9; NMSA 1978, § 47-8-36(A)(2); NMSA 1978, § 47-8-20(A)(2) |
| `edu-landlord-entry-nm` | REQUIRED | landlord-entry | NMSA 1978, § 47-8-24(A); NMSA 1978, § 47-8-34(B); NMSA 1978, § 47-8-38(A) |
| `edu-nonpayment-notice-nm` | REQUIRED | nonpayment-notice | NMSA 1978, § 47-8-33(D); NMSA 1978, § 47-8-33(H); NMSA 1978, § 47-8-13(D) |
| `edu-noncompliance-cure-nm` | REQUIRED | cure-and-eviction-grounds | NMSA 1978, § 47-8-33(A); NMSA 1978, § 47-8-22 |
| `edu-substantial-violation-nm` | REQUIRED | expedited-criminal-eviction | NMSA 1978, § 47-8-3(V); NMSA 1978, § 47-8-22(I); NMSA 1978, § 47-8-33(I) |
| `edu-dv-eviction-protection-nm` | PROHIBITED | dv-eviction-protection | NMSA 1978, § 47-8-33(J); NMSA 1978, § 47-8-33(I); NMSA 1978, § 40-13B-3 |
| `edu-no-dv-termination-nm` | RECOMMENDED | dv-lease-termination | CONFIRMED ABSENT (NM batteries 24); NMSA 1978, § 47-8-33(J); NMSA 1978, § 40-13B-3 |
| `edu-for-cause-eviction-nm` | RECOMMENDED | for-cause-eviction | CONFIRMED ABSENT (NM batteries 126); NMSA 1978, § 47-8-43; NMSA 1978, § 47-8-39; NMSA 1978, § 47-7D-12 |
| `edu-end-of-term-nm` | RECOMMENDED | termination-notice | CONFIRMED ABSENT (NM batteries 30, 31); NMSA 1978, § 47-8-3(W); NMSA 1978, § 47-8-37(C); NMSA 1978, § 47-8-15(C) |
| `edu-holdover-nm` | RECOMMENDED | holdover | NMSA 1978, § 47-8-37(C); NMSA 1978, § 47-8-15(C); NMSA 1978, § 47-8-47(A) |
| `edu-holdover-rate-nm` | RECOMMENDED | holdover-rate | NMSA 1978, § 47-8-37(C); NMSA 1978, § 47-8-12 |
| `edu-abandonment-mitigation-nm` | RECOMMENDED | abandonment-and-mitigation | NMSA 1978, § 47-8-3(A); NMSA 1978, § 47-8-34(C); NMSA 1978, § 47-8-6(A) |
| `edu-post-eviction-property-nm` | RECOMMENDED | post-eviction-property | NMSA 1978, § 47-8-34.1(C); NMSA 1978, § 47-8-36.1(A); NMSA 1978, § 48-3-5(A) |
| `edu-casualty-nm` | RECOMMENDED | casualty-termination | NMSA 1978, § 47-8-31(A) |
| `edu-tenant-caused-damage-nm` | RECOMMENDED | tenant-caused-damage | NMSA 1978, §§ 47-8-22(F) |
| `edu-retaliation-nm` | PROHIBITED | retaliation | NMSA 1978, § 47-8-39(A); NMSA 1978, § 47-8-48(C); NMSA 1978, § 47-8-40(A) |
| `edu-self-help-eviction-nm` | PROHIBITED | self-help-eviction | NMSA 1978, § 47-8-36(A); NMSA 1978, § 47-8-48(C); NMSA 1978, § 47-8-36 |
| `edu-landlord-lien-nm` | PROHIBITED | landlord-lien | NMSA 1978, § 47-8-36.1(A); NMSA 1978, § 48-3-5(A); NMSA 1978, §§ 48-6-1 |
| `edu-eviction-process-nm` | RECOMMENDED | eviction-process | NMSA 1978, §§ 47-8-10(A); NMSA 1978, § 47-8-30(A); NMSA 1978, § 35-10-2 |
| `edu-eviction-record-sealing-nm` | RECOMMENDED | eviction-record-sealing | CONFIRMED ABSENT (NM batteries 45); NMSA 1978, §§ 29-3A-5 |
| `edu-statutory-forms-nm` | RECOMMENDED | statutory-forms | NMSA 1978, §§ 47-8-13(D); NMSA 1978, § 56-15-10 |
| `edu-unauthorized-occupant-nm` | RECOMMENDED | unauthorized-occupant-removal | CONFIRMED ABSENT (NM batteries 63, 64); NMSA 1978, § 69-3-24; NMSA 1978, § 35-10-1(A)(1); NMSA 1978, § 35-10-2 |
| `edu-servicemember-nm` | RECOMMENDED | servicemember-rights | CONFIRMED ABSENT (NM batteries 23); NMSA 1978, § 28-1-7(G) |
| `edu-tenant-death-nm` | RECOMMENDED | tenant-death | NMSA 1978, § 47-8-34.2(A); NMSA 1978, §§ 47-8-21 |
| `edu-sale-management-change-nm` | REQUIRED | sale-or-management-change | NMSA 1978, § 47-8-21(A); NMSA 1978, § 47-8-19(B) |
| `edu-foreclosure-nm` | RECOMMENDED | foreclosure | CONFIRMED ABSENT (NM batteries 46); NMSA 1978, § 35-10-1(A)(4); NMSA 1978, § 35-10-2; NMSA 1978, § 56-15-9(A) |
| `edu-conversion-notice-nm` | REQUIRED | conversion-notice | NMSA 1978, § 47-7D-12(A) |
| `edu-prohibited-terms-nm` | PROHIBITED | prohibited-lease-terms | NMSA 1978, § 47-8-16; NMSA 1978, § 47-8-17; NMSA 1978, § 39-1-16 |
| `edu-attorney-fees-nm` | RECOMMENDED | attorney-fees | NMSA 1978, § 47-8-48(A); NMSA 1978, §§ 47-8-18(D)(3); NMSA 1978, § 57-12-10(C) |
| `edu-unconscionability-nm` | RECOMMENDED | unconscionability | NMSA 1978, § 47-8-12(A); NMSA 1978, § 57-12-2(E); NMSA 1978, § 57-12-3. |
| `edu-consumer-protection-nm` | RECOMMENDED | consumer-protection-act | NMSA 1978, § 57-12-2(D); NMSA 1978, § 57-12-27(B); NMSA 1978, § 57-12-2(E) |
| `edu-scope-nm` | RECOMMENDED | scope | NMSA 1978, §§ 47-8-8 |
| `edu-notice-service-nm` | REQUIRED | notice-delivery-methods | NMSA 1978, § 47-8-13(A); NMSA 1978, § 14-16-3(B)(2)(b); NMSA 1978, §§ 14-16-5(b) |
| `edu-quiet-possession-nm` | RECOMMENDED | quiet-possession | NMSA 1978, § 47-8-24(F); NMSA 1978, § 47-8-38(B); NMSA 1978, § 47-8-36. |
| `edu-no-waiver-by-acceptance-rule-nm` | RECOMMENDED | waiver-by-acceptance | CONFIRMED ABSENT (NM batteries 127); NMSA 1978, §§ 28-1-7; NMSA 1978, §§ 48-6-1; NMSA 1978, § 47-8-33(D) |
| `edu-nuisance-nm` | RECOMMENDED | nuisance | NMSA 1978, § 30-9-9; NMSA 1978, § 30-19-11; NMSA 1978, § 30-8-8.1 |
| `edu-fair-housing-nm` | PROHIBITED | fair-housing | NMSA 1978, § 28-1-7(G)(1); NMSA 1978, § 28-1-2(K); NMSA 1978, § 28-1-9(A) |
| `edu-source-of-income-nm` | RECOMMENDED | source-of-income | CONFIRMED ABSENT (NM batteries 25, 38); NMSA 1978, § 28-1-7(G) |
| `edu-assistance-animals-nm` | REQUIRED | assistance-animal-accommodation | NMSA 1978, § 28-1-7(G)(2); NMSA 1978, § 28-11-2; NMSA 1978, § 28-11-3(A) |
| `edu-service-animal-misrepresentation-nm` | RECOMMENDED | service-animal-misrepresentation | NMSA 1978, § 28-11-6(A); NMSA 1978, § 28-11-2(A) |
| `edu-cannabis-nm` | RECOMMENDED | cannabis | NMSA 1978, § 26-2C-25(A)(1); NMSA 1978, § 26-2C-26(A)(2); NMSA 1978, § 26-2C-24 |
| `edu-firearms-nm` | RECOMMENDED | firearms | NMSA 1978, § 47-8-3(V)(2) |
| `edu-towing-nm` | RECOMMENDED | towing | NMSA 1978, § 66-7-352.5(D); NMSA 1978, § 66-1-4.1(A); NMSA 1978, § 66-3-121 |
| `edu-stigmatized-property-nm` | RECOMMENDED | stigmatized-property | NMSA 1978, § 47-13-2(A); NMSA 1978, § 47-13-3(A); NMSA 1978, §§ 22-2D-4 |
| `edu-nonresident-owner-agent-nm` | RECOMMENDED | nonresident-owner-agent | NMSA 1978, § 47-8-10(B); NMSA 1978, §§ 3-29-16 |
| `edu-plain-language-nm` | RECOMMENDED | plain-language | CONFIRMED ABSENT (NM batteries 80); NMSA 1978, § 47-8-19.1 |
| `edu-no-lease-completeness-rule-nm` | RECOMMENDED | lease-completeness | CONFIRMED ABSENT (NM batteries 79); NMSA 1978, § 47-8-20(G) |
| `edu-no-camera-rule-nm` | RECOMMENDED | tenant-security-cameras | CONFIRMED ABSENT (NM batteries 56, 72); NMSA 1978, §§ 1-6-9 |
| `edu-no-ev-charging-rule-nm` | RECOMMENDED | ev-charging | CONFIRMED ABSENT (NM batteries 44); CONFIRMED ABSENT |
| `edu-no-mold-disclosure-nm` | RECOMMENDED | mold-disclosure | CONFIRMED ABSENT (NM batteries 14, 20); NMSA 1978, §§ 25-6-2; NMSA 1978, §§ 26-2C-2; NMSA 1978, § 47-8-20(A)(1) |
| `edu-no-bed-bug-rule-nm` | RECOMMENDED | bed-bug-disclosure | CONFIRMED ABSENT (NM batteries 15); NMSA 1978, §§ 61-24D-5; NMSA 1978, § 47-8-20(A)(1) |
| `edu-no-radon-disclosure-nm` | RECOMMENDED | radon-disclosure | CONFIRMED ABSENT (NM batteries 13, 69); CONFIRMED ABSENT |
| `edu-no-meth-disclosure-nm` | RECOMMENDED | meth-disclosure | CONFIRMED ABSENT (NM batteries 16); NMSA 1978, § 47-8-20(A)(1) |
| `edu-no-flood-disclosure-nm` | RECOMMENDED | flood-disclosure | CONFIRMED ABSENT (NM batteries 17); NMSA 1978, §§ 16-3-5 |
| `edu-no-sex-offender-rule-nm` | RECOMMENDED | sex-offender-occupancy | CONFIRMED ABSENT (NM batteries 22); NMSA 1978, § 29-11A-5.1 |
| `edu-no-immigration-rule-nm` | RECOMMENDED | immigration-status | CONFIRMED ABSENT (NM batteries 92); NMSA 1978, §§ 9-25-14; NMSA 1978, § 28-1-7(G) |
| `edu-no-foreign-ownership-rule-nm` | RECOMMENDED | foreign-ownership | CONFIRMED ABSENT (NM batteries 91, 108); NMSA 1978, §§ 11-13-2; NMSA 1978, § 45-2-111 |
| `edu-no-emergency-assistance-rule-nm` | RECOMMENDED | emergency-assistance-right | CONFIRMED ABSENT (NM batteries 96); NMSA 1978, §§ 5-20-5; NMSA 1978, §§ 47-8-33(J) |
| `edu-statute-of-frauds-nm` | RECOMMENDED | statute-of-frauds-lease-term | CONFIRMED ABSENT (NM batteries 48, 62); NMSA 1978, § 47-8-20(G) |
| `edu-no-rental-inspection-rule-nm` | RECOMMENDED | rental-inspection | CONFIRMED ABSENT (NM batteries 58, 74); NMSA 1978, §§ 3-63-5; NMSA 1978, § 3-46-43 |
| `edu-guest-fees-nm` | PROHIBITED | guest-rights | NMSA 1978, § 47-8-15(E); NMSA 1978, § 57-12-27(C) |

## 4. Layout and placement (rule 40)
Formatting batteries ran in Step C before drafting (3, 4, 5), across the whole NMSA with a tenancy context filter. **No New Mexico statute sets a type size, boldface, capital-letter or first-page rule for a residential lease or for any text every rental agreement must contain**; the hits are door-to-door sales (§ 57-12-21), unsolicited faxes and e-mail (§ 57-12-23), rental-purchase agreements (§§ 57-26-4, 57-26-5), energy-system disclosures (§ 57-31-3), retail installment contracts (§ 58-19-7), Uniform Commercial Code definitions (§ 55-1-201) and, in battery 5, state-land leases, compacts and notice-form sections; the tenancy hits in battery 5 are § 47-8-20 (its separate-writing rule, below), § 56-15-10 (the assignee's form of notification to a tenant, `edu-foreclosure-nm`) and § 47-10-4 (Mobile Home Park Act termination, out of scope). No two placement rules compete, so nothing went to Taylor (rule 40).

| Rule | Text | Where it lives | Library handling |
|---|---|---|---|
| NMSA 1978, § 47-8-19(A)-(B) | Manager, and owner or agent for service and notices: name, address and telephone number 'in writing at or before the commencement of the residency', kept current | Lease is the vehicle; no format | `landlord-disclosure-nm` (REQUIRED) |
| NMSA 1978, § 57-12-27(C) | Charging fees 'not included in the rental agreement' is an unfair or deceptive trade practice | In the rental agreement | `fees-and-charges-nm` (REQUIRED) |
| NMSA 1978, § 47-8-19.1 | Listing must disclose base rent and every fee, itemized, in plain language | The listing, not the lease | `edu-fee-transparency-nm` |
| NMSA 1978, § 47-8-19.2(A)(1), (3) | Written or digital notice of the screening fee, applicant's written agreement, receipt | Application stage | `edu-screening-fee-nm` |
| NMSA 1978, § 47-8-20(C)-(D) | Single family residence: tenant may take on garbage, water, heat and specified repairs by agreement; other units: specified tasks only by a 'separate writing signed by the parties and supported by consideration', not a condition of the agreement | Separate document (rule 48) | `maintenance-allocation-nm`; chores tags with the single-family note |
| NMSA 1978, § 47-8-20(F) | Utility bill copies on request; administrative fee not over $5 per monthly request | Lease must include the fee to charge it | `utility-bill-copies-nm` (CONDITIONAL) |
| NMSA 1978, § 47-8-20(G) | Written rental agreement to each resident before occupancy | Lease | `edu-lease-copy-nm` |
| NMSA 1978, § 47-8-23(F) | Copies of existing rules at signing; notice of later rules | Lease attachment or later notice | `rules-nm` |
| NMSA 1978, § 47-8-25 | 'The rental agreement may require' notice of an absence over seven days | Lease | `extended-absence-notice-ks` tagged |
| NMSA 1978, § 47-8-34.2(B) | Owner 'may request in writing, including by a requirement in the rental agreement', a contact person and a signed authorization | Lease or separate writing | `deceased-resident-contact-nm` |
| NMSA 1978, § 47-8-15(D) | Late-fee notice by the last day of the next rental period | Separate notice | `late-fee-nm` commits to it |
| NMSA 1978, §§ 47-8-15(F), 47-8-19.4 | Rent increase 30 days, fee increase 60 days, written notice | Separate notice | `edu-rent-increase-notice-nm`, `edu-fee-increase-notice-nm` |
| NMSA 1978, § 47-8-13(D) | Nonpayment notice: hand delivery, mail or posting; other written notices, if posted, also mailed or hand-delivered | Notice, not the lease | `edu-notice-service-nm`; `electronic-notice-nm` keeps them on paper |
| NMSA 1978, § 47-8-24(A)(1) | 24 hours' written notice of entry stating purpose, date and time frame | Notice | `landlords-access-nm`, `edu-landlord-entry-nm` |
| Forms 4-901, 4-901A, 4-902, 4-903 NMRA | Supreme Court's standard notices (three-day nonpayment, three-day substantial violation, seven-day noncompliance, thirty-day termination) | Notice forms | `edu-statutory-forms-nm`, `periodic-tenancy-notice-nm` |
| NMSA 1978, § 56-15-10 | Assignee's notification to tenant; no particular phrasing required, a safe-harbor form given | Assignee's notice | `edu-foreclosure-nm` |

**Omission sanctions:** § 47-8-18(D) (no itemized list and balance within thirty days forfeits the right to withhold any part, to counterclaim and to sue separately for damage, plus costs and fees); § 47-8-15(D) (no notice, no late fee; Hedicke, annotation only); § 47-8-19(D) (failure to disclose relieves the resident of the act's notice duties; no money forfeited); § 47-8-48(B) (screening-fee violations); § 57-12-27(B)-(C) (unlisted or unagreed fees are unfair practices). None requires a lease statement in a set form.

## 5. Dormant rows resolved (rule 25)
None: the kickoff lists no New Mexico rows, dormant or active, and the CSV has none. The blank-states `security-deposit-return` parent is replaced by `security-deposit-return-nm` (rule 25 family; §0).

## 6. Decisions

### 6.1 Optional clauses found (rule 54)
| Option | New Mexico law | Verdict |
|---|---|---|
| Late fee | Only 'If the rental agreement provides for the charging of a late fee' (NMSA 1978, § 47-8-15(D)) | Offered: `late-fee-nm` |
| Utility bill copy fee | Up to $5 per monthly request (NMSA 1978, § 47-8-20(F)); must be in the agreement (§ 57-12-27(C)) | Offered: `utility-bill-copies-nm` |
| Deceased-resident contact | NMSA 1978, § 47-8-34.2(B) ('including by a requirement in the rental agreement') | Offered: `deceased-resident-contact-nm` |
| Extended-absence notice | NMSA 1978, § 47-8-25 ('The rental agreement may require') | Offered: `extended-absence-notice-ks` tagged |
| Rules adopted by the owner | NMSA 1978, § 47-8-23 | Offered: `rules-nm` |
| Tenant maintenance agreement | NMSA 1978, § 47-8-20(C)-(D) | Offered: `maintenance-allocation-nm`; chores tags for a single family residence (rule 48) |
| E-mail notices | NMSA 1978, §§ 14-16-5(b)-(c), 14-16-3(B)(2)(b), 14-16-8; § 47-8-13 | Offered, limited to routine communications and notices from Tenant: `electronic-notice-nm` |
| Early termination by tenant for a fee | No statute (battery 124); terms not prohibited allowed (§ 47-8-14); inequitable terms limitable (§ 47-8-12) | Offered: `early-termination-nm` (fee stated in the agreement, § 57-12-27(C)) |
| Landlord casualty termination | No statute gives or bars it (§ 47-8-31 is the resident's right; § 47-8-14) | Offered, narrow: `casualty-termination-nm` (only where no part can lawfully be occupied) |
| Tenant-caused damage (54t) | § 47-8-27.1(B): repair-based remedies 'do not arise' for resident-caused conditions; § 47-8-31 (casualty) has no fault exception but makes the resident 'responsible for damage caused by his negligence'; § 47-8-22(F); § 47-8-48(D) (two times monthly rent for intentional damage); § 47-8-33(F); § 47-8-6(A) | Offered without a no-abatement term (it would waive § 47-8-31, § 47-8-16): `tenant-caused-damage-nm`; education `edu-tenant-caused-damage-nm` |
| Crime-free / criminal activity clause | Substantial violations are a closed statutory list (§ 47-8-3(V)); other crimes become breaches only by lease term, then follow § 47-8-33(A)-(C) | Offered: `criminal-activity-nm` |
| Landlord self-cure | The act has none (battery 111, scoped to arts. 8 and 10 of ch. 47); damages for noncompliance (§ 47-8-33(F)); § 47-8-14 | Offered, cost not billed as rent: `landlord-self-cure-nm` |
| Cannabis cultivation ban | § 26-2C-26(A)(2): nothing restricts a person's ability to prohibit conduct on the person's privately owned property (whether leased premises are the owner's 'privately owned property' is Claude's reading; not decided by any case searched) | Offered: `cannabis-cultivation-nm`; smoking via tagged `smoking-policy` |
| Shorter entry notice by agreement | § 47-8-24(A)(1) ('unless otherwise agreed upon') | Lawful, not offered: a shorter notice is a choice the landlord should make with advice (`landlords-access-nm` note) |
| Written allocation of rent to deposits or damages | § 47-8-15(G) ('Unless agreed upon in writing') | Lawful, not offered: `edu-payment-allocation-nm` |
| Stipulated holdover rate above rent | § 47-8-37(C) sets damages only for a willful, bad-faith holdover; § 47-8-12 | Lawful, not offered: `edu-holdover-rate-nm`; `holdover-nm` sets the daily rental value at the rent |
| Contract interest rate | NMSA 1978, § 56-8-3 (15% without a written rate), § 56-8-4 (judgments) | Lawful, not offered (risk of a second late charge beyond § 47-8-15(D)): `edu-legal-interest-nm` |
| Different procedure for a deceased resident's property | § 47-8-34.2(E) | Lawful, not offered: `edu-tenant-death-nm` |
| Post-writ storage agreement | § 47-8-34.1 ('unless otherwise agreed') | Lawful, not offered: `edu-post-eviction-property-nm` |
| Firearms rule | N.M. Const. art. II, § 6 restrains laws, not private landlords (Claude's reading; not searched, §1.4); no statute (battery 42) | Lawful, not offered: `edu-firearms-nm` |
| Rent escalation within the term | § 47-8-15(F) times increases to the end of a fixed term; whether a step in the original lease is an 'increase' is unsettled | Not offered: explained in `edu-rent-increase-notice-nm` |
| Jury waiver | No statute supports it; metropolitan court jury by statute (§ 34-8A-5; battery 68) | Not offered (no education row: not shown lawful) |
| Exemption or homestead waiver | No statute supports a lease waiver; a tenant has no homestead in the rental (§§ 42-10-9, 42-10-10, 42-10-13; battery 67, scoped to ch. 42, art. 10) | Not offered (no education row) |
| Collection fee or notice-service fee | No statutory basis; on late rent it risks operating as a second late fee beyond § 47-8-15(D) | Not offered (no education row) |
| Waiver of the act's notices | § 47-8-16 | Barred: `edu-prohibited-terms-nm` |
| Exculpation ('Landlord is not liable') | § 47-8-16 | Barred: exculpation-free variants tagged (§2.2) |
| Confession of judgment | Void if signed before the claim (`edu-prohibited-terms-nm`; battery 68) | Barred |
| Guest fee for reasonable guests | § 47-8-15(E) | Barred: `edu-guest-fees-nm` |
| Landlord's lien or distraint | § 47-8-36.1; § 48-3-5(A) (no lien on a dwelling unit) | Barred: `edu-landlord-lien-nm` |
| Self-help lockout or utility cutoff | § 47-8-36 | Barred: `edu-self-help-eviction-nm` |

### 6.2 Questions asked of Taylor (rule 76)
No rule 76 question was asked. One operational question was: whether Claude could save `nm-*` working files to his Downloads folder and read them from there (the only channel from the browser to the workspace); **Taylor (2026-10-02):** "Yes". No question met rule 76: every point was a legal or drafting judgment Claude could make and record (§6.3), and no product decision outside the SOP came up. The tenant-chore split is settled by rule 48 (kickoff lead 7: 'follow rule 48 as settled; don't ask Taylor'): `landscaping-irrigation` and `snow-removal` tagged with the single-family note, `maintenance-allocation-nm` for any other unit, and the builder gap recorded (§10).

### 6.3 Other drafting decisions made by Claude (recorded, not asked)
- **Late fee:** `late-fee-nm` charges a fee 'for that rental period' and commits Landlord to the § 47-8-15(D) notice by the last day of the next rental period, and not to collect an un-noticed fee (independent check round 1); its non-waiver sentence preserves only Landlord's own rights (full payment on the due date, other remedies) and waives no tenant right; the fee 'is not Rent', so it never supports a three-day nonpayment notice. The builder cap is 5% of the period's rent (§10).
- **Periodic notice:** `periodic-tenancy-notice-nm` lets the landlord choose a period of at least 30 days (monthly) or 7 days (weekly) and fixes the tenant's period at the statutory minimum, so a longer landlord figure never lengthens the tenant's notice (§ 47-8-37(A)-(B), § 47-8-16; independent check round 1).
- **Access:** `landlords-access-nm` written for New Mexico: consent, 24 hours' written notice stating purpose, date and time frame, Landlord trying to accommodate the resident's alternate time 'where that is practicable or will not cause Landlord economic detriment' (the round-1 ERROR corrected 'and' to 'or'), the statute's exceptions (repairs within seven days of the resident's request, a public official, a utility representative), and entry without consent in an emergency, after abandonment or surrender, and during an absence over seven days (§§ 47-8-24(A)-(B), 47-8-34(B)).
- **Maintenance:** `landlord-maintenance-nm` makes Landlord repair supplied appliances and fixtures and Tenant reimburse the reasonable cost where Tenant's deliberate or negligent act caused the need (§§ 47-8-20(A)(4), 47-8-22(F), 47-8-33(F)), instead of the base clause's repair exception.
- **Holdover:** `holdover-nm` fixes only the daily rental value (Monthly Rent apportioned daily) for every holdover and leaves willful-holdover damages and fees to § 47-8-37(C); a consented holdover becomes week-to-week or month-to-month (§ 47-8-15(C)).
- **Early termination:** `early-termination-nm` keeps the base fee structure, drops the landlord's 'vacates without notice' limb (New Mexico abandonment needs more than seven days' absence after rent is delinquent, § 47-8-3(A)) and the death carve-out (no statutory death right).
- **Deposit return:** 30 days from the later of termination or departure; mailing to the last known address is compliance; a forwarding-address request is the landlord-serving reason for the clause, so it is RECOMMENDED, not the parent's REQUIRED (rule 56; §10).
- **Abandoned property:** `abandoned-property-nm` mirrors § 47-8-34.1 (abandonment: 30 days' storage and notice, with a second notice to an alternative address; surrender: 14 days; after a writ: three days; sale or credit and an itemized statement within 15 days for property worth $100 or more, the stricter procedure also used for exactly $100, which the statute leaves open), and holds the property for no other debt (no landlord lien, § 47-8-36.1).
- **Fees:** `fees-and-charges-nm` lists every fee in the agreement (REQUIRED_DISCLOSURE, § 57-12-27(C)) because charging a fee 'not included in the rental agreement' is an unfair practice; `returned-payments-nm` states `{{nsf_fee}}` as a fixed amount instead of a ceiling.
- **Electronic notice:** e-mail limited to routine communications and notices from Tenant; every written notice the act requires to the resident stays on paper (§ 47-8-13(D), § 14-16-8; Claude's reading, no case law searched).
- **Cannabis:** offered as an option on the strength of § 26-2C-26(A)(2), labelled Claude's reading in the row; medical-cannabis accommodation under fair housing law not researched (§1.4).

## 7. Open items (none blocking)
Each with its search boundary; none changes a row's legal claim, and each affected row says so.
- **Deposit interest rate:** § 47-8-18(A)(1) sets the rate by reference to the passbook rate permitted to savings and loan associations by the Federal Home Loan Bank Board, abolished in 1989 (federal fact not researched further); no successor rate named; no case searched (`edu-deposit-interest-nm`; legal watch §10).
- **Administrative rules not read (NMAC):** fire and building codes for smoke and carbon monoxide alarms (`edu-no-alarm-statute-nm`); Public Regulation Commission utility shutoff and submetering rules (`edu-utility-billing-nm`, canvass `utility-shutoff-statute`); Department of Transportation and PRC towing rules (`edu-towing-nm`); Taxation and Revenue Department gross receipts regulations and the Lodgers' Tax Act (`edu-rent-tax-nm`).
- **Statutes not read beyond battery hits:** the Antitrust Act (ch. 57, art. 1; `edu-no-algorithmic-rent-rule-nm`); the general public nuisance statute § 30-8-8 and municipal abatement § 3-46-43 (`edu-nuisance-nm`); unclaimed-property holder reporting, §§ 7-8A-7 and following (`edu-deposit-escheat-nm`); utility-district lien statutes other than the municipal one (`edu-municipal-utility-lien-nm`); voyeurism in ch. 30 (`edu-no-camera-rule-nm`).
- **Case law not searched** (§1.4 list): each affected row labels its risk.
- **Federal law not read** (FHA, HUD assistance-animal guidance, SCRA, PTFA, CARES Act, VAWA, FCRA, OTARD): rows point to federal law without stating it.
- **Local ordinances** (Albuquerque, Santa Fe, Las Cruces and others): flagged, not read (rule 3); state law preempts local rent control (§ 47-8A-1) and municipal and county firearms regulation (N.M. Const. art. II, § 6); no other state preemption of local landlord rules found (battery 7).

## 8. Integrity checks on the delta
Run by script (`work/integrity.py`, output `work/integrity-output.txt`) on the final delta, after the independent-check fixes and the final rebuild (sha256 d12b3f36b0e7c9bc6323a6b6699d9f7435e58049ee418a2cc3c6a1cac23811d6):
```
NM active 163 clauses 71 edu 92
merged rows 2677 active 2555
NM clause topics with >1 clause: {}
PASS header identical to master (17 columns) 
PASS CRLF record ends 164
PASS no duplicate ids 163
PASS tagged rows exist and active in master 49 tagged, 114 new
PASS tagged rows change only states/notes/last_checked []
PASS tagged notes keep master prefix 
PASS every row has NM in states 
PASS verification_status VERIFIED on all 
PASS new rows active, effective_from/last_checked 2026-10-02 
PASS tagged last_checked 2026-10-02 
PASS basis on every new clause, blank on education 
PASS basis values valid 
PASS groups valid []
PASS topic keys all existing []
PASS supersedes resolve to master rows 
PASS rule_type values valid 
PASS no unexpanded battery placeholders 
PASS no N.M. Stat. Ann. 
PASS no bracket beside a variable in new rows []
PASS every backtick row reference resolves to an active row []
PASS every cited NMSA section exists in the corpus []
PASS no bare § cites outside NMSA prefix (heuristic) []
PASS other states active counts unchanged 
PASS no NM row and the row it supersedes both tagged NM []
```
Also checked by script: the four completion-table labels in §0; every backtick row reference in this log resolves to a row in the merged library or names a battery or file; the log's section order follows rule 71.

## 9. Propagation notes (rule 62)
No shared row's `bodyText` was edited, so there is no shared edit to vet. Tag-only changes: 49 rows gained `NM` and an `NM:` note. Shared rows deliberately **not** tagged for New Mexico are listed in §2.2 with the New Mexico reason; where the reason may apply to another state, it is flagged in §10 rather than changed here.

### Vouches given
- **2026-10-03:** `default-by-tenant` (MN's proposal), vouched for NM; reasoning in "Circle-back checks (SOP 1.47)" at the end of this log.

## 10. Findings for other states or the product (flagged, not fixed)
1. **Builder variables (rule 60).** New: `{{utility_bill_copy_fee}}` (`utility-bill-copies-nm`; cap $5.00 per monthly request, § 47-8-20(F)). Existing in the library but not in the kickoff's builder-filled list, used by NM rows: `{{nsf_fee}}` (`returned-payments-nm`; also CA, TX, IA, VA). New rows reuse `{{monthly_rent}}`, `{{security_deposit}}`, `{{pet_deposit}}`, `{{pet_rent_amount}}`, `{{late_fee_amount}}` and `{{late_fee_grace_days}}`; tagged rows keep the variables they already carry. No `[bracket]` sits beside a filled variable (rule 60; integrity check).
2. **Builder caps (backlog M.13).** Late fee: at most 5% of the rent for each rental period in default, calculated only on rent (5% of `{{monthly_rent}}` for a monthly period; § 47-8-15(D)). Deposit: `{{security_deposit}}` plus `{{pet_deposit}}` at most `{{monthly_rent}}` when the term is under one year or periodic; above `{{monthly_rent}}` under an annual term, warn that annual interest is owed (§ 47-8-18(A)). Screening fee at most $50 (§ 47-8-19.2(A)). `{{utility_bill_copy_fee}}` at most $5. `{{nsf_fee}}`: no statutory cap for a residential lease; the civil worthless-check remedy (§ 56-14-1) is separate and needs intent to defraud.
3. **Property-type gate (rule 48).** The builder cannot show `landscaping-irrigation` and `snow-removal` only for a single family residence (as defined in § 47-8-3(U)) or `maintenance-allocation-nm` only for other units; same gap as AZ, NE, IA.
4. **Citation format not defined by the kickoff:** the Supreme Court's civil forms are written `Form 4-901 NMRA` (on the model of `Rule 2-107 NMRA`).
5. **Stale cross-references in relied-on sections (rule 77), for the legal watch:** (a) § 47-8-36(A)(4) cites § 47-8-32, repealed in 1995 (compiler's note); (b) § 47-8-36(C)(2) cites 'Subsection B of Section 47-8-48', which since 2025 N.M. Laws ch. 122, § 7 is the screening-fee penalty; the two-times-rent liability is now § 47-8-48(C); (c) § 47-8-35 refers to fees 'as provided in Subsection C of Section 33', which the compiler notes should now be Subsection F and no longer authorizes fees; (d) § 47-8-34(A) points to 'Subsection A of Section 3' for the absence notice, which the act places in § 47-8-25; (e) § 47-8-27.2(C) refers to an 'abatement limitation of one month's rent' the section does not contain; (f) the compiler's bracket in § 47-8-18(B) reads 'Subsection D [E] of Section 47-8-3', but since 2025 N.M. Laws ch. 122, § 1 the 'deposit' definition is § 47-8-3(F); (g) in § 57-12-27(A)(3)(a) the compiler's bracket gives the Uniform Owner-Resident Relations Act's range ('[47-8-1 to 47-8-52 NMSA 1978]') for the 'Uniform Revised Limited Partnership Act'. The rows state the provisions as they now work and name the stale pointer where they rely on it.
6. **`early-termination-ks` landlord limb (cross-state).** It lets the landlord terminate 'if Tenant vacates or abandons the property without notifying Landlord'. In states whose act defines abandonment narrowly (New Mexico: more than seven days' absence without notice after rent is delinquent, § 47-8-3(A)), that limb gives the landlord a termination ground the statute does not. Worth a targeted check in the 18 states tagged on it.
7. **`holdover-ca` trigger (cross-state, confirms the IA log §10.6 flag).** New Mexico, like Iowa, gives damages only for a willful, bad-faith holdover (§ 47-8-37(C)).
8. **REQUIRED vs SERVES_LANDLORD for deposit-return clauses (library-wide).** The blank-states `security-deposit-return` parent is REQUIRED; New Mexico requires no lease text on deposit return, so `security-deposit-return-nm` is RECOMMENDED (rule 56). Other states' `security-deposit-return-*` rows may carry REQUIRED from the parent without a statute requiring the text.
9. **Legal watch:** 2025 N.M. Laws ch. 122 (listing disclosure, screening fees, fee notice, late-fee rules, unfair practices; effective June 20, 2025) and 2026 N.M. Laws ch. 62, § 4 (§ 47-16-18, effective July 1, 2026); the deposit-interest rate (§7); the stale cross-references (item 5). The 2027 compilation should be checked against these rows when published.
10. **Process lessons** (also in Proposed SOP changes): the battery tool must keep every version of a section and report heading-only matches even when the body matched but failed the context filter; a scoped rerun must not be labelled whole-code.

## 11. Deliverables
- `lease-clauses-NM-delta.csv` (163 rows, 17 columns, CRLF; sha256 d12b3f36b0e7c9bc6323a6b6699d9f7435e58049ee418a2cc3c6a1cac23811d6).
- `lease-clause-decision-log-NM.md` (this log).
- Working files saved in the workspace (`sources/`, `batteries/`, `work/`); the `nm-*` source and battery files Taylor approved saving also remain in his Downloads folder.

## 12. Kickoff leads — what each turned out to be
| # | Lead | Outcome |
|---|---|---|
| 1 | Art. 8 whole; owner/resident vocabulary | Read whole (§14). Where a battery turned on the parties, its pattern or context filter used the act's own words ('owner', 'resident', 'dwelling', 'rental agreement', 'rent') alongside 'landlord', 'tenant' and 'lease'; batteries on a thing (towing, smoke, mold, wells) used subject words with a neutral context. Only four use 'lease' or 'landlord/tenant' words without one of the act's terms: 30 (fixed term; followed by 31, and art. 8 was read whole), 48 and 62 (statute of frauds for leases of land) and 91 (foreign ownership). Mobile home parks out of scope (§ 47-8-52; ch. 47, art. 10), named where a battery surfaced them (§ 47-10-15.1). |
| 2 | Deposits § 47-8-18 | Cap tied to term: one month's rent under a year; larger under an annual lease only with annual interest at the passbook rate (rate open, §7); 30 days from the later of termination or departure; itemized list; mailing to last known address is compliance; forfeiture plus costs and fees for no list; $250 civil penalty for bad faith; pet deposits count; last month's prepaid rent does not (§ 47-8-18(B)). |
| 3 | Late fees § 47-8-15 | Allowed only if the agreement provides; 5% of rent per rental period, on rent only; notice by the last day of the next rental period (2025 ch. 122, § 6). `late-fee` untagged; `late-fee-nm`; builder M.13 (§10). |
| 4 | Banned terms | § 47-8-16 (no waiver of rights or remedies, either side); § 47-8-17 (an owner who deliberately uses a rental agreement with provisions known to be prohibited is liable for the resident's damages and reasonable attorney's fees); confession of judgment void; no landlord lien (§ 47-8-36.1). Attorney fees go to the prevailing party by statute (§ 47-8-48(A)), so the base `default-by-tenant` fee sentence matches; no ban on 'reasonable costs and expenses' (rule 49). Exculpation-free variants tagged. |
| 5 | Notices and termination | Rent: 3 days (§ 47-8-33(D)); breach: 7 days to cure, second noncompliance within six months ends without cure (§ 47-8-33(A)-(B)); substantial violation: 3 days, closed list (§§ 47-8-3(V), 47-8-33(I)); month-to-month 30 days, week-to-week 7 days (§ 47-8-37); a fixed term ends at its end date (no notice statute; `edu-end-of-term-nm`). Service under § 47-8-13; UETA excludes eviction and cure notices for a primary residence (§ 14-16-3(B)(2)(b)), so no e-mail notice (rule 45). |
| 6 | Access § 47-8-24 | Consent, 24 hours' written notice stating purpose, date and time frame, entry at reasonable times; emergency and utility-company exceptions; alternate-time request; owner has 'no other right of access except by court order' or as §§ 47-8-24 and 47-8-34 permit. The Iowa flag applies: the base `landlords-access` and `landlords-access-mi` both untagged; `landlords-access-nm`. |
| 7 | Tenant-chore split | § 47-8-20(C)-(D): single family residence by agreement; other units only by a separate signed writing with consideration. Followed rule 48 as settled (§6.2). |
| 8 | Eviction procedure, court rules, diversion, records | Rules 2- and 3- NMRA (magistrate and metropolitan civil) and the civil forms (set 4) loaded whole; Rule 1- (district) loaded; eviction-relevant rules read (2-107, 3-107 appearance; 2-112, 3-112, 1-079 public access and sealing). EPDP: Orders 22-8500-001, 22-8500-012, 23-8500-001 read; withdrawn for new cases January 9, 2023; its forms remain published. No statutory pre-filing or rental-assistance condition (batteries 102, 130). No record sealing in statute or rule (`edu-eviction-record-sealing-nm`). |
| 9 | Local preemption | Rent control preempted (§ 47-8A-1), with a carve-out for subsidized reduced-rent housing; firearms (art. II, § 6); nothing else found (battery 7). Ordinances flagged, not resolved. |
| 10 | Fair housing and source of income | Human Rights Act § 28-1-7(G) (classes listed in `edu-fair-housing-nm`; military status included; familial status not in the housing list, federal law protects families); no source-of-income protection (batteries 25, 38); Service Animal Act reaches public accommodations, not private rentals (§ 28-11-3); misrepresentation is a misdemeanor (`edu-service-animal-misrepresentation-nm`). |
| 11 | Abandonment, property, retaliation | Abandonment § 47-8-3(A), § 47-8-34(C) (immediate possession, re-renting), § 47-8-34.1 (storage, notice, surrender, after a writ), § 47-8-34.2 (death); retaliation § 47-8-39 (six months; two times monthly rent, § 47-8-48(C)). |
| 12 | 2025 and 2026 acts | 2025 ch. 122 (SB 267) read as enrolled and compared with the compiled text; 2026 ch. 62, § 4 (SB 96; § 47-16-18 HOA child-care homes, July 1, 2026); overlay on all 221 cited sections (§1.2). |

## 13. Independent check
A separate agent that did not write the rows checked them against the saved sources (statutes opened section by section; quotes compared verbatim; batteries re-run with `save=False`; court rules and orders; session laws; integrity against the master). Reports: `work/independent-check-round1.md`, `work/independent-check-round2.md` (round 3 appended).
- **Round 1** (162 rows at the time: 51 shared rows with NM added, 111 new): 1 ERROR (`landlords-access-nm` turned § 47-8-24(A)(3)'s 'or' into 'and'), 13 FIX (periodic notice binding the tenant to the landlord's longer period; `late-fee` and `landlord-maintenance` 'applies as written' notes; scoped or failed batteries cited as whole-code absences for early termination, rent receipts, just cause, waiver by acceptance and e-mail notice; § 59A-52-15.1 mischaracterized; four education wording fixes) and NOTEs (including the battery tool dropping 33 dual-version sections, withdrawn forms in the forms list, and claims broader than their battery). All applied: `late-fee-nm`, `landlord-maintenance-nm` and `edu-guest-fees-nm` added, `late-fee` and `landlord-maintenance` untagged, batteries 124-130 run, the tool fixed.
- **Round 2** (54 rows re-checked; all 132 batteries then on file re-run and reproduced): 0 ERROR, 3 FIX (`edu-deposit-return-penalty-nm` garbled sentence on Stodgell; EPDP-only forms 4-904B and 4-905B listed as current; the heading-only screen dropping headings when a context filter was set, which hid § 48-6-14), 4 NOTE (including § 47-10-15.1). Applied; the heading screen was fixed and rerun for every battery.
- **Round 3** (the 7 rows edited after round 2, the four tag notes and the corrected heading screens): ERROR none, FIX none (rule 80).
- **After round 3:** battery 133 (an everyday-word rerun of battery 90 for the canvass line `private-well-testing`, no row) was added while assembling this log; no row changed and the delta's hash is unchanged.

## 14. Statute walk (gap-discovery source 1)
The core articles were read whole from the saved corpus, and each article's full section index was diffed by script against every citation in the NM rows and notes (221 cited sections, `work/cited-sections.txt`):
- **Ch. 47, art. 8 (Uniform Owner-Resident Relations Act), 61 section entries:** 52 cited (including § 47-8-32, cited only as the repealed target of a stale cross-reference). Not cited: § 47-8-1 (short title; the name is used in `edu-scope-nm`), § 47-8-2 (purposes: background), § 47-8-4 (principles of law and equity supplement the act: cited in the canvass for capacity to contract, no lease term), § 47-8-5 (general act; no implied repeal: construction rule), § 47-8-11 (obligation of good faith in every duty and remedy: background to every row, no separate term), §§ 47-8-27, 47-8-28, 47-8-29 (repealed), § 47-8-50 (transactions before the act: none current). One level down, §§ 47-8-3, 47-8-13, 47-8-15, 47-8-18, 47-8-19.2, 47-8-20, 47-8-22, 47-8-24, 47-8-27.1, 47-8-33, 47-8-34.1, 47-8-34.2, 47-8-36, 47-8-37 and 47-8-48 were read subsection by subsection for the rows that rely on them, and every cross-reference inside them was followed (rule 77; stale pointers in §10).
- **Ch. 47, art. 8A (rent control preemption), 1 section:** cited (`edu-rent-control-nm`).
- **Ch. 35, art. 10 (forcible entry and unlawful detainer), 6 sections:** 4 cited. § 35-10-2 makes §§ 35-10-1 to 35-10-6 inapplicable to a landlord's actions arising out of a residential tenancy under the act, so §§ 35-10-3 (three days' written notice to quit) and 35-10-4 (judgment for damages and removal) give no landlord duty in scope; the article is used only for removing a person who is not a resident (`edu-unauthorized-occupant-nm`). New Mexico has no other general landlord-tenant chapter (rule 30): batteries 29 and 31 (general tenancy rules and term expiration outside art. 8) found none.
- **Ch. 48, arts. 3 and 6 (liens; agricultural landlord's lien), 29 and 16 sections:** §§ 48-3-5 and 48-3-6 cited (no landlord's lien on a dwelling unit; `edu-landlord-lien-nm`); §§ 48-6-1, 48-6-5, 48-6-14, 48-6-16 cited (agricultural lands only; § 48-6-14's consent-to-sublet rule named in the `no-sublet-assign` note as not reaching residential tenancies, Claude's reading).
- **Related chapters read for rows:** ch. 57, art. 12 (§§ 57-12-2, 57-12-10, 57-12-27, Unfair Practices Act); ch. 14, art. 16 (§§ 14-16-3, 14-16-5, 14-16-8, Uniform Electronic Transactions Act); ch. 28, arts. 1 and 11 (Human Rights Act, Service Animal Act); ch. 26, art. 2C (Cannabis Regulation Act); ch. 56, arts. 8, 14, 15 (interest, worthless checks, assignment of rents); ch. 7, art. 8A (unclaimed property); ch. 3 (§ 3-23-6 municipal utility lien; § 3-46-43 unfit dwellings); ch. 66 (§§ 66-1-4.1, 66-3-121, 66-7-352.5 vehicles); ch. 47, art. 7D (§ 47-7D-12, condominium conversion) and art. 16 (§ 47-16-18, homeowner associations); ch. 34, art. 8A (metropolitan court); ch. 30 (§§ 30-9-9, 30-19-11 nuisance leases; § 30-14-1 trespass); § 47-13-2 (stigmatized property); § 59A-52-15.1 (smoke dampers); N.M. Const. art. II, §§ 6, 17 and 22 (repealed).

## 15. Real-lease comparison (gap-discovery source 2)
**Lease:** New Mexico Institute of Mining and Technology (New Mexico Tech), 'Mountain Springs Apartment License Agreement 2026-2027', updated February 27, 2026, nine pages, from https://www.nmt.edu/studentlife/License%20Agreement%20FY27.pdf (Last-Modified Fri, 27 Feb 2026); text saved (`sources/nm-real-lease-nmt-msa-fy27.txt`, sha256 aa5b9a45…4958). **Why it qualifies:** a New Mexico public institution's own current agreement for apartment and family housing with monthly rent, deposits, late fees, entry, damage, abandoned property and termination terms; not a multi-state template. **Why it is weaker:** it is a license to registered students, and residence at an educational institution incidental to its services is excluded from the act unless the arrangement was created to avoid it (NMSA 1978, § 47-8-9(A); `edu-scope-nm` says so); several of its terms (lockout and property removal on termination, a $3-a-day late-fee accrual, capped at 10% of the monthly rate, on top of a $50 fee, 'all reasonable costs, attorney's fees, and expenses', a hold-harmless clause, 'assume no responsibility' for property, amendment by continued occupancy) would be prohibited or risky in an ordinary New Mexico residential lease. No New Mexico apartment-association or Realtors form is freely published as a full text (rule 33: no purchase suggested). Not reproduced here; mapped as a lead (rule 33).

### 15.1 Provision map
| Agreement provision | Library answer for NM | Note |
|---|---|---|
| Parties: student and all adults in the unit | `joint-liability`, `permitted-occupants` | Same shape |
| Occupancy on key issuance; term as agreed | `possession-delay-ca`, basic terms | Possession delay under § 47-8-26 |
| Cancellation before occupancy, $400 fee | `fees-and-charges-nm`, `edu-fee-transparency-nm` | A fee must be in the agreement and the listing (§§ 57-12-27(C), 47-8-19.1) |
| Termination on 30 days' notice with written authorization; buy-out of the remainder | `early-termination-nm` | Library states the fee in the lease; no approval step |
| Eviction: lock change, removal of property, 'any action it deems appropriate' | `edu-self-help-eviction-nm` | A lockout or removal without a court order would violate § 47-8-36 under the act |
| Improper check-out penalty; lock change charge | `keys`, `surrender-end-of-term-ks-ne` | Penalty not used; actual cost only |
| Policies amended from time to time; amendment by continued occupancy | `rules-nm`, `entire-agreement` | Later rules bind only with reasonable notice and no substantial modification of the bargain (§ 47-8-23(F)) |
| Application deposit $200 plus $50 per family member | `edu-screening-fee-nm`, `edu-no-holding-deposit-rule-nm` | Under the act, only a screening fee (max $50) or a deposit may be charged to an applicant (§§ 47-8-19.2(A)(5), 57-12-27(B)) |
| Eligibility tied to enrollment; family relationship documents | Not used | Student-housing eligibility; family-status questions raise fair housing issues (`edu-fair-housing-nm`) |
| Furniture, $100 a month; damage at full retail value | `appliances-included`, `tenant-caused-damage-nm` | Library recovers actual damages |
| Utilities included | `utilities-paid-by-landlord` | Same |
| Rent due on the 1st; payment channels | `rent-payment`, `acceptable-payment-methods` | Same |
| Late fee $50 on the 15th, then $3 a day to 10% of the monthly rate; $35 dishonored check | `late-fee-nm`, `returned-payments-nm` | Under the act the late fee may not exceed 5% of the period's rent and needs notice (§ 47-8-15(D)) |
| 'Notice to Vacate' after 30 days unpaid; proceedings within three days | `default-by-tenant`, `edu-nonpayment-notice-nm` | The act's three-day notice under § 47-8-33(D) |
| Damage and restoration charges, 'save reasonable wear and tear' | `security-deposit-use`, `surrender-end-of-term-ks-ne` | Same standard (§ 47-8-18(C)) |
| Transcript and registration holds | Not used | Institutional remedy |
| Retain all payments on default; 'all reasonable costs, attorney's fees, and expenses' | `default-by-tenant`, `edu-attorney-fees-nm` | Prevailing-party fees by statute (§ 47-8-48(A)); forfeiture of all payments not used |
| Move-in condition report within two weeks | `existing-condition`, `edu-no-move-in-inspection-rule-nm` | No statutory inspection; library recommends documenting |
| Occupancy by listed household; preapproval of others; no commercial activity | `permitted-occupants`, `guest-policy-day-limit`, `residential-use-only` | Same |
| Cooperate in care; report repairs through work requests | `tenant-maintenance`, `landlord-maintenance-nm` | Same |
| Entry for work requests with knock and announce, weekday hours; entry without notice for 'excessive noise, or resident complaints'; periodic inspections without specific dates or times | `landlords-access-nm`, `inspection-rights` | Under the act, 24 hours' written notice except in an emergency and the (A)(2) exceptions (§ 47-8-24) |
| Relocation for repairs; family units relocate every 24 months | Not used | Institutional |
| Alterations need written consent | `no-alterations` | Same |
| No pets; service animals and ESAs with documentation | `pet-policy-nm`, `assistance-animal-accommodation`, `edu-assistance-animals-nm` | Same structure |
| No smoking within 50 feet; no cannabis; no space heaters; no EV charging from outlets | `smoking-policy`, `cannabis-cultivation-nm`, `fire-safety-grilling`, `edu-no-ev-charging-rule-nm` | Possession ban broader than the library's cultivation option |
| Refusal of assignment for criminal history | `edu-tenant-screening-nm`, `edu-fair-housing-nm` | Screening criteria must not discriminate |
| Move or consolidate within 48 hours | Not used | Institutional |
| Liability for damage beyond wear and tear; group billing for common-area damage | `tenant-caused-damage-nm` | Group billing not used |
| 'assume no responsibility' for personal property; hold harmless 'for all injuries' | `tenants-property-insurance-ks-oh-ca` | Would waive remedies under § 47-8-16; variant without disclaimer used |
| Property left 30 days deemed abandoned, disposed of 'in any manner' | `abandoned-property-nm` | Act requires storage, notice and sale or credit (§ 47-8-34.1) |
| Non-waiver | `default-by-tenant`, `edu-no-waiver-by-acceptance-rule-nm` | Same |
| No automatic renewal | `edu-end-of-term-nm` | Fixed term ends at its end date |
| Vacate within 48 hours on loss of eligibility; immediate suspension for danger | `edu-substantial-violation-nm` | The act's three-day notice for a substantial violation; no 48-hour route |
| Final rent at least 30 days past the notice | `periodic-tenancy-notice-nm` | Similar to § 47-8-37(B) for month-to-month (30 days before the periodic rental date) |

### 15.2 What it produced
No new row; it confirmed rows written from the statute. It is the clearest example of why `edu-scope-nm` names the educational-institution exemption (§ 47-8-9(A)), and of terms the library does not use in New Mexico: lockout and removal on termination (§ 47-8-36), a late fee above 5% (§ 47-8-15(D)), a non-screening application charge (§§ 47-8-19.2(A)(5), 57-12-27(B)), disposal of property 'in any manner' after 30 days (§ 47-8-34.1), unannounced entry for complaints (§ 47-8-24), and exculpation and hold-harmless terms (§ 47-8-16).

## 16. Landlord-scenario screen (gap-discovery source 3)
64 everyday situations from listing to move-out, sale and death, Claude-generated on the AZ §18.1 / IA §16 model plus New Mexico-specific ones (2025 listing and fee rules, three-day filing day, abandonment definition, deceased-resident contact), run against the final NM rows; where no row answered, the canvass line and its battery are named. The screen was run against the finished delta while assembling this log (not during drafting), so no row was added because of it; every scenario is answered by a row or a canvass line.

| # | Scenario | New Mexico answer (row) |
|---|---|---|
| 1 | Listing shows rent but not the pet fee and admin fee | `edu-fee-transparency-nm` (itemized fees in the listing, § 47-8-19.1) |
| 2 | Applicant charged $75 to apply | `edu-screening-fee-nm` ($50 cap, written notice and agreement, receipt) |
| 3 | Fee charged when the unit is already promised to another applicant | `edu-screening-fee-nm` (§ 47-8-19.2(A)(4), (B)(1)) |
| 4 | Guarantor asked to pay a screening fee | `edu-screening-fee-nm` (guarantor is an applicant, § 47-8-3(D)) |
| 5 | Landlord takes a holding deposit to take the unit off the market | `edu-no-holding-deposit-rule-nm` |
| 6 | Applicant asks for the screening report | `edu-tenant-screening-nm` |
| 7 | Applicant has a housing voucher | `edu-source-of-income-nm` |
| 8 | Landlord wants to ask about immigration status | `edu-no-immigration-rule-nm` |
| 9 | Applicant with a criminal record | `edu-tenant-screening-nm`, `edu-fair-housing-nm` |
| 10 | Request for an emotional support animal | `assistance-animal-accommodation`, `edu-assistance-animals-nm` |
| 11 | Landlord suspects a fake service dog | `edu-service-animal-misrepresentation-nm` |
| 12 | Owner lives in Texas | `edu-nonresident-owner-agent-nm`, `landlord-disclosure-nm` |
| 13 | Who must the lease name as manager and agent | `landlord-disclosure-nm` (REQUIRED) |
| 14 | Lease signed electronically | `electronic-signatures` |
| 15 | Tenant asks for a copy of the lease and rules | `edu-lease-copy-nm`, `rules-nm` |
| 16 | Six-month lease with a deposit of 1.5 months' rent | `edu-deposit-cap-nm` (one month under a year) |
| 17 | Annual lease with a deposit above one month's rent | `edu-deposit-interest-nm` (annual interest; rate open, §7) |
| 18 | Pet deposit on top of a full deposit | `edu-pet-deposit-nm` |
| 19 | Last month's rent collected at signing | `edu-deposit-last-month-nm`, `due-at-signing` |
| 20 | Where to keep the deposit | `edu-no-deposit-holding-rule-nm` |
| 21 | Pre-1978 house | `lead-based-paint` |
| 22 | Unit not ready on the start date | `possession-delay-ca` (§ 47-8-26) |
| 23 | Move-in condition checklist | `existing-condition`, `edu-no-move-in-inspection-rule-nm` |
| 24 | Tenant pays by app and is charged a convenience fee | `acceptable-payment-methods`, `fees-and-charges-nm` |
| 25 | Rent five days late | `late-fee-nm`, `edu-late-fee-cap-nm` (5%, notice by end of next period) |
| 26 | Late fee charged but no notice given that month or the next | `late-fee-nm` (not collectible; Hedicke, annotation only) |
| 27 | Rent check bounces | `returned-payments-nm`, `edu-dishonored-check-nm` |
| 28 | Partial payment applied to a damage bill first | `application-of-payments`, `edu-payment-allocation-nm` |
| 29 | Tenant wants a cash receipt | `edu-rent-receipts-nm` |
| 30 | Rent increase at renewal or month-to-month | `edu-rent-increase-notice-nm` (30 days) |
| 31 | Raising the monthly pet fee | `edu-fee-increase-notice-nm` (60 days) |
| 32 | City considering rent control | `edu-rent-control-nm` |
| 33 | Gross receipts tax on rent | `edu-rent-tax-nm` |
| 34 | Landlord uses rent-pricing software | `edu-no-algorithmic-rent-rule-nm` |
| 35 | Entry to fix a leak next week | `landlords-access-nm`, `edu-landlord-entry-nm` |
| 36 | Burst pipe at night | `landlords-access-nm` (emergency) |
| 37 | Heater fails in January | `landlord-maintenance-nm`, `edu-habitability-nm` |
| 38 | Tenant withholds rent until repairs are made | `edu-tenant-repair-remedies-nm` |
| 39 | Tenant's guest breaks the dishwasher | `landlord-maintenance-nm`, `tenant-caused-damage-nm` |
| 40 | Duplex tenant to mow the shared lawn | `maintenance-allocation-nm` (separate signed writing) |
| 41 | Single-family tenant to shovel snow | `snow-removal` (single-family note) |
| 42 | Mold or bed bugs | `edu-no-mold-disclosure-nm`, `edu-no-bed-bug-rule-nm` |
| 43 | Smoke alarm batteries | `edu-no-alarm-statute-nm` |
| 44 | Rekeying between tenants | `edu-no-security-device-rule-nm`, `keys` |
| 45 | Submetered water bill disputed | `utility-bill-copies-nm`, `edu-utility-billing-nm` |
| 46 | Tenant leaves a city water bill unpaid | `edu-municipal-utility-lien-nm` |
| 47 | Tenant grows cannabis plants | `cannabis-cultivation-nm`, `edu-cannabis-nm` |
| 48 | Guest staying a month; landlord wants a guest fee | `guest-policy-day-limit`, `edu-guest-fees-nm` |
| 49 | Tenant wants to sublet for the summer | `no-sublet-assign` |
| 50 | Inoperable car in the lot; car in an accessible space | `parking-vehicle-rules-id`, `edu-towing-nm` |
| 51 | Tenant installs a satellite dish or a doorbell camera | canvass `telecom-access` (no tenant right in state law; federal rule not read); `edu-no-camera-rule-nm` |
| 52 | Landlord wants to ban firearms | `edu-firearms-nm` |
| 53 | Drug dealing from the unit | `criminal-activity-nm`, `edu-substantial-violation-nm` |
| 54 | Victim of domestic violence wants to leave early | `edu-no-dv-termination-nm`; eviction defense `edu-dv-eviction-protection-nm` |
| 55 | Servicemember deployed | `edu-servicemember-nm` |
| 56 | Tenant wants to break the lease | `early-termination-nm` |
| 57 | Tenant gone ten days with rent unpaid | `edu-abandonment-mitigation-nm`, `abandoned-property-nm` |
| 58 | Tenant gone two weeks, rent paid | `extended-absence-notice-ks` (not abandonment, § 47-8-3(A)) |
| 59 | Rent unpaid; serving and filing | `edu-nonpayment-notice-nm`, `edu-notice-service-nm`, `edu-statutory-forms-nm` (file the day after the third day) |
| 60 | Second lease violation within six months | `edu-noncompliance-cure-nm` |
| 61 | Ending a month-to-month without a reason | `periodic-tenancy-notice-nm`, `edu-for-cause-eviction-nm` |
| 62 | Tenant stays after the lease ends | `holdover-nm`, `edu-holdover-nm` |
| 63 | Tenant complained to the city; landlord raises rent | `edu-retaliation-nm` |
| 64 | Sole tenant dies; property sale; foreclosure; condo conversion; prior homicide in the unit | `deceased-resident-contact-nm`, `edu-tenant-death-nm`; `edu-deposit-on-sale-nm`, `edu-sale-management-change-nm`; `edu-foreclosure-nm`; `edu-conversion-notice-nm`; `edu-stigmatized-property-nm` |

## 17. Outside-title search and proof of absence (gap-discovery source 4)
The whole NMSA 1978 (84 chapter PDFs, 31,114 section versions) and the New Mexico Constitution were loaded in the built-in browser before the first battery and searched with 133 batteries (`batteries/nm-batteries-1.jsonl`, `-2.jsonl`, `-3.jsonl`; corrected heading screens in `nm-batteries-heading-screen-rerun.jsonl`). **Real findings outside art. 8 (the sections relied on read whole):** § 47-8A-1 (rent control preemption); § 57-12-27 and § 57-12-2 (2025 fee rules in the Unfair Practices Act); ch. 14, art. 16 (UETA, eviction-notice exclusion); § 28-1-7 (Human Rights Act housing), §§ 28-11-2 to 28-11-4 and 28-11-6 (Service Animal Act, misrepresentation); §§ 26-2C-25, 26-2C-26 (cannabis; property owner may prohibit conduct); § 56-8-3, § 56-8-4 (interest); § 56-14-1 (worthless checks); § 56-15-10 and nearby (assignment of rents); § 7-8A-2 and nearby (unclaimed property); § 3-23-6 (municipal utility lien); § 3-46-43 (unfit dwellings); §§ 66-1-4.1, 66-3-121, 66-7-352.5 (vehicles); § 47-13-2 (stigmatized property); § 47-7D-12 (condominium conversion); § 47-16-18 with 2026 N.M. Laws ch. 62, § 4 (homeowner associations); § 48-3-5 (no lien on a dwelling unit); § 59A-52-15.1 (smoke dampers); §§ 30-9-9, 30-19-11 (leases voidable for prostitution or gambling); § 34-8A-3 (metropolitan court). **Constitution:** art. II, § 6 (arms; local regulation barred), art. II, § 17 (speech), former art. II, § 22 (aliens' land rights, repealed); nothing reaches a private lease term directly (battery 108).

**Method:** §1.3. **Batteries** (heading-only = sections whose heading alone matched, from the corrected screen; control hits were 0 in every battery):

| # | Battery | Scope | Hits | Known positives | Heading-only (corrected screen) | Rows citing it |
|---|---|---|---|---|---|---|
| 1 | control nonsense term | whole code | 0 | none (control/calibration) | 0 | — |
| 2 | calibration: deposit / owner-resident | `^47-8-` | 9 | passed | 0 | — |
| 3 | formatting: bold / boldface / capital letters / underlined (tenancy context) | whole code | 5 | passed | 0 | — |
| 4 | formatting: point type / type size / font (tenancy context) | whole code | 7 | passed | 0 | — |
| 5 | formatting: conspicuous / prominent / separate writing / prescribed form (tenancy context) | whole code | 50 | passed | 1 | — |
| 6 | rent control / regulating rental rates; local preemption | whole code | 2 | **failed** (rerun as 18) | 0 | — |
| 7 | local preemption of landlord-tenant / rental regulation | whole code | 15 | passed | 0 | `edu-rent-control-nm` |
| 8 | late fee / late charge (tenancy context) | `^(?!47-8-)` | 2 | passed | 1 | — |
| 9 | application / screening fee (tenancy context), outside art. 8 | `^(?!47-8-)` | 3 | passed | 3 | `edu-screening-fee-nm` |
| 10 | dishonored check / insufficient funds service charge | whole code | 86 | passed | 9 | `edu-dishonored-check-nm`, `returned-payments-nm` |
| 11 | smoke detectors / alarms | whole code | 0 | passed | 0 | `edu-no-alarm-statute-nm` |
| 12 | carbon monoxide | whole code | 2 | passed | 0 | `edu-no-alarm-statute-nm` |
| 13 | radon | whole code | 0 | passed | 0 | `edu-no-radon-disclosure-nm` |
| 14 | mold | whole code | 3 | passed | 0 | `edu-no-mold-disclosure-nm` |
| 15 | bed bugs / vermin / pests in dwellings | whole code | 3 | passed | 2 | `edu-no-bed-bug-rule-nm` |
| 16 | methamphetamine / clandestine drug lab contamination | whole code | 7 | passed | 0 | `edu-no-meth-disclosure-nm` |
| 17 | flood disclosure (tenancy context) | whole code | 2 | passed | 0 | `edu-no-flood-disclosure-nm` |
| 18 | rent control rerun of B6 (adds "limits the amount of rent") | whole code | 2 | passed | 0 | `edu-rent-control-nm` |
| 19 | smoke alarms everyday words (smoke / fire alarm + dwelling) | whole code | 6 | passed | 0 | `edu-no-alarm-statute-nm` |
| 20 | mold everyday words (fungus / fungal / moisture + dwelling) | whole code | 6 | passed | 1 | `edu-no-mold-disclosure-nm` |
| 21 | lead-based paint / lead hazards in housing | whole code | 0 | passed | 0 | `lead-based-paint` |
| 22 | sex offender residency / occupancy restrictions | whole code | 9 | passed | 0 | `edu-no-sex-offender-rule-nm` |
| 23 | servicemember / military lease termination | whole code | 20 | passed | 0 | `edu-servicemember-nm` |
| 24 | domestic violence / abuse and lease or tenancy | whole code | 9 | passed | 0 | `edu-dv-eviction-protection-nm`, `edu-no-dv-termination-nm` |
| 25 | source of income / housing voucher / section 8 | whole code | 163 | passed | 0 | `edu-source-of-income-nm` |
| 26 | tenant death / deceased resident or lessee | whole code | 53 | passed | 75 | `edu-tenant-death-nm` |
| 27 | abandoned property of tenant outside art. 8 | `^(?!47-8-)` | 3 | passed | 0 | — |
| 28 | towing / removal of vehicles from private property | whole code | 1 | **failed** (rerun as 109) | 0 | — |
| 29 | general tenancy rules outside art. 8: tenant at will / year-to-year / notice to quit / holding over | `^(?!47-8-)` | 45 | passed | 0 | — |
| 30 | fixed term ends without notice (term expiration) | whole code | 0 | passed | 0 | `edu-end-of-term-nm` |
| 31 | everyday-word rerun of B30: term ends / expires / termination of lease (tenancy context, outside art. 8) | `^(?!47-8-)` | 13 | passed | 0 | `edu-end-of-term-nm` |
| 32 | utility shutoff / disconnection where landlord holds the account; master meter | whole code | 4 | passed | 0 | — |
| 33 | submetering / landlord billing tenants for utilities | whole code | 1 | passed | 0 | `edu-utility-billing-nm`, `utility-bill-copies-nm` |
| 34 | unclaimed property: deposits, rent refunds | `^7-8A-\|^7-8B-` | 3 | passed | 0 | `edu-deposit-escheat-nm` |
| 35 | Unfair Practices Act reach: real property, lease, rent | `^57-12-` | 6 | passed | 0 | `edu-consumer-protection-nm` |
| 36 | Uniform Electronic Transactions Act scope and exclusions | `^14-16-` | 6 | passed | 0 | — |
| 37 | Human Rights Act housing discrimination (ch. 28, art. 1) | `^28-1-` | 3 | passed | 0 | `edu-fair-housing-nm` |
| 38 | source of income rerun of B25, housing context | whole code | 17 | passed | 0 | `edu-source-of-income-nm` |
| 39 | assistance / service animals in housing | whole code | 13 | passed | 0 | `edu-assistance-animals-nm`, `edu-service-animal-misrepresentation-nm` |
| 40 | cannabis / marijuana and landlords, leases, tenants | whole code | 5 | passed | 24 | `edu-cannabis-nm`, `smoking-policy` |
| 41 | smoking in dwellings / multi-unit housing (tenancy context) | whole code | 4 | passed | 8 | `smoking-policy` |
| 42 | firearms and leases / rentals / tenants | whole code | 25 | passed | 34 | `edu-firearms-nm` |
| 43 | flag / sign / political display in housing | whole code | 20 | passed | 0 | `common-area-use` |
| 44 | electric vehicle charging | whole code | 12 | passed | 0 | `edu-no-ev-charging-rule-nm` |
| 45 | eviction record sealing / confidentiality of tenancy court records | whole code | 3 | passed | 0 | `edu-eviction-record-sealing-nm` |
| 46 | foreclosure and tenants | whole code | 37 | passed | 26 | `edu-foreclosure-nm` |
| 47 | cannabis acts read for any housing / property-owner provision (everyday words; ch. 26-2B, 26-2C) | `^26-2[BC]-` | 21 | passed | 0 | `cannabis-cultivation-nm`, `edu-cannabis-nm`, `smoking-policy` |
| 48 | statute of frauds / leases required in writing | whole code | 26 | passed | 1 | `edu-statute-of-frauds-nm` |
| 49 | legal / judgment interest rate | `^56-8-\|^39-1-` | 3 | passed | 0 | `edu-legal-interest-nm` |
| 50 | renter's / tenant insurance requirement | whole code | 17 | passed | 3 | `pet-insurance-requirement`, `tenants-property-insurance-ks-oh-ca` |
| 51 | rent receipt | whole code | 23 | **failed** (rerun as 60) | 2 | — |
| 52 | lease copy delivery / written rental agreement to each resident | whole code | 5 | **failed** (rerun as 61) | 0 | — |
| 53 | swimming pool barriers / safety (residential) | whole code | 12 | passed | 0 | — |
| 54 | window guards / fall protection | whole code | 0 | passed | 0 | — |
| 55 | stigmatized / psychologically impacted property | whole code | 3 | passed | 0 | `edu-stigmatized-property-nm` |
| 56 | security cameras / video surveillance by tenants or in rentals | whole code | 0 | passed | 0 | `edu-no-camera-rule-nm` |
| 57 | price gouging / excessive rent in emergency | whole code | 0 | passed | 0 | — |
| 58 | rental registration / licensing / inspection by local government | whole code | 2 | passed | 0 | `edu-no-rental-inspection-rule-nm` |
| 59 | heat / temperature standard for dwellings | whole code | 4 | passed | 0 | `edu-habitability-nm` |
| 60 | rent receipt rerun of B51 (section-wide context filter) | `^(47-\|35-\|57-\|56-)` | 9 | passed | 10 | — |
| 61 | lease copy rerun of B52 (flexible wording) | whole code | 9 | passed | 0 | `edu-lease-copy-nm` |
| 62 | statute of frauds everyday words: lease of land / real property in writing (outside UCC) | `^(?!55-)` | 34 | passed | 0 | `edu-statute-of-frauds-nm` |
| 63 | unauthorized occupant / squatter removal outside eviction | whole code | 1 | passed | 0 | `edu-unauthorized-occupant-nm` |
| 64 | criminal trespass after notice / remaining on premises | `^30-` | 2 | passed | 0 | `edu-unauthorized-occupant-nm` |
| 65 | nuisance abatement reaching leased premises / drug houses | `^30-8-\|^3-18-\|^31-\|^30-31-` | 0 | passed | 0 | `edu-nuisance-nm` |
| 66 | landlord lien / distress / security interest in tenant goods | whole code | 47 | passed | 0 | `edu-landlord-lien-nm` |
| 67 | execution exemptions / homestead; waiver | `^42-10-` | 4 | passed | 1 | — |
| 68 | confession of judgment / jury waiver / waiver of rights in leases | whole code | 17 | passed | 3 | `edu-prohibited-terms-nm` |
| 69 | radon everyday rerun of B13 (radioactive gas / radiation in buildings) | whole code | 0 | passed | 0 | `edu-no-radon-disclosure-nm` |
| 70 | lead everyday rerun of B21 (lead + paint / pipes / housing) | whole code | 2 | passed | 0 | `lead-based-paint` |
| 71 | window guards everyday rerun of B54 (window + child / fall) | whole code | 0 | passed | 0 | — |
| 72 | security cameras everyday rerun of B56 (camera) | whole code | 6 | passed | 1 | `edu-no-camera-rule-nm` |
| 73 | price gouging everyday rerun of B57 (price + emergency) | `^(57-\|12-10-\|47-)` | 1 | passed | 0 | — |
| 74 | nuisance broad (nuisance + building / premises / owner / lease), whole code | whole code | 7 | passed | 11 | `edu-no-rental-inspection-rule-nm`, `edu-nuisance-nm` |
| 75 | algorithmic rent setting / rent pricing software / coordination | whole code | 14 | passed | 0 | `edu-no-algorithmic-rent-rule-nm` |
| 76 | security devices: locks / deadbolts / rekey (tenancy context) | whole code | 4 | passed | 0 | `edu-no-security-device-rule-nm`, `edu-self-help-eviction-nm` |
| 77 | tenant screening / criminal history / credit in housing | whole code | 110 | passed | 26 | `edu-tenant-screening-nm` |
| 78 | move-in inspection / condition checklist / inventory | whole code | 5 | passed | 7 | `edu-no-move-in-inspection-rule-nm` |
| 79 | lease blanks / copy at signing / unfair practices list items | whole code | 13 | passed | 0 | `edu-consumer-protection-nm`, `edu-no-lease-completeness-rule-nm` |
| 80 | plain language consumer contracts | whole code | 26 | passed | 0 | `edu-plain-language-nm` |
| 81 | translation / language of lease or notice | whole code | 21 | passed | 14 | — |
| 82 | tenant organizing / residents union | whole code | 1 | passed | 0 | `edu-retaliation-nm` |
| 83 | rent escrow / receivership for substandard housing / code enforcement | whole code | 1 | passed | 0 | — |
| 84 | gross receipts / sales tax on residential rent | `^7-9-` | 1 | passed | 0 | `edu-rent-tax-nm` |
| 85 | landlord registration / nonresident owner agent | whole code | 4 | passed | 16 | `edu-nonresident-owner-agent-nm` |
| 86 | cable / telecommunications / satellite access for tenants | whole code | 12 | **failed** (rerun as 93) | 0 | — |
| 87 | municipal / county utility lien on property for tenant charges | whole code | 35 | **failed** (rerun as 94) | 0 | — |
| 88 | homeowner association / condominium rental restrictions and tenants | `^47-16-\|^47-7[A-D]-` | 21 | passed | 0 | — |
| 89 | occupancy standards / overcrowding / persons per bedroom | whole code | 15 | passed | 1 | `permitted-occupants` |
| 90 | private well testing disclosure | whole code | 0 | passed | 0 | — |
| 91 | foreign ownership / alien land / foreign adversary | whole code | 3 | passed | 1 | `edu-no-foreign-ownership-rule-nm` |
| 92 | immigration / citizenship status in housing | whole code | 5 | passed | 1 | `edu-no-immigration-rule-nm` |
| 93 | cable / satellite access rerun of B86 (both word orders, section-wide context) | whole code | 29 | passed | 7 | — |
| 94 | municipal utility lien rerun of B87 (section-wide context) | `^(3-\|4-\|5-\|72-\|73-\|74-)` | 28 | passed | 28 | `edu-municipal-utility-lien-nm` |
| 95 | just cause / good cause eviction or nonrenewal | whole code | 21 | **failed** (rerun as 105) | 0 | — |
| 96 | right to call police / emergency assistance; penalties for calls | whole code | 2 | passed | 2 | `edu-no-emergency-assistance-rule-nm` |
| 97 | deposit transfer on sale of the property / successor liability for deposits | whole code | 24 | passed | 0 | `edu-deposit-on-sale-nm` |
| 98 | deposit holding / separate account / escrow / bond (tenancy context) | whole code | 22 | passed | 3 | `edu-no-deposit-holding-rule-nm` |
| 99 | application of payments / partial payments / acceptance of rent waiver | whole code | 13 | **failed** (rerun as 106) | 4 | — |
| 100 | fire sprinklers / fire safety duties in residential rentals | whole code | 1 | passed | 0 | — |
| 101 | quiet enjoyment / quiet possession | whole code | 7 | passed | 0 | `edu-quiet-possession-nm` |
| 102 | rental assistance / eviction prevention / diversion (statute) | whole code | 0 | passed | 0 | `edu-eviction-process-nm` |
| 103 | pet deposit / pets in rental housing | whole code | 2 | passed | 3 | `edu-pet-deposit-nm`, `pet-policy-nm` |
| 104 | tenant duties to forward notices / attornment / pay rent to other than lessor | whole code | 1589 | passed | 0 | — |
| 105 | just cause rerun of B95 (both word orders, section-wide tenancy context) | `^(47-\|35-\|3-\|4-\|5-\|28-\|57-)` | 15 | passed | 0 | — |
| 106 | application of payments / acceptance of rent rerun of B99 | `^(47-8-\|47-10-\|35-10-)` | 5 | passed | 0 | — |
| 107 | attornment rerun of B104 (word-bounded) | whole code | 2 | passed | 0 | — |
| 108 | constitution: arms, property, privacy, speech, housing, leases, aliens, equal rights | `^art\.` | 47 | passed | 0 | `common-area-use`, `edu-firearms-nm`, `edu-no-foreign-ownership-rule-nm` |
| 109 | towing rerun of B28 (section-wide: tow/abandoned vehicle + private property) | whole code | 31 | passed | 33 | `edu-towing-nm`, `parking-vehicle-rules-id` |
| 110 | subletting / assignment of residential leases | `^(47-\|35-\|57-\|28-)` | 6 | passed | 2 | — |
| 111 | landlord self-cure: owner remedies resident's breach and charges cost | `^(47-8-\|47-10-)` | 2 | passed | 0 | `landlord-self-cure-nm` |
| 112 | tenant right to repair and deduct / withhold rent for repairs | `^(47-\|35-)` | 7 | passed | 0 | `edu-tenant-repair-remedies-nm` |
| 113 | deposit cap / deposit amount limits outside art. 8 (tenancy context) | `^(?!47-8-)` | 19 | passed | 1 | `edu-deposit-cap-nm` |
| 114 | utility service shutoff to tenants / master-metered residential (everyday words, ch. 62 and 70) | `^(62-\|70-\|3-23-\|3-27-\|3-26-)` | 1 | passed | 0 | `edu-self-help-eviction-nm` |
| 115 | rent payment methods / cash or electronic payment / convenience fee (tenancy context) | whole code | 6 | passed | 28 | `acceptable-payment-methods` |
| 116 | nonconsensual towing from private property / tow operators (whole code) | whole code | 6 | **failed** (rerun as 122) | 0 | — |
| 117 | cannabis: person may prohibit conduct on privately owned property (Cannabis Regulation Act and Lynn and Erin Compassionate Use Act) | `^26-2[BC]-` | 4 | passed | 0 | `cannabis-cultivation-nm`, `edu-cannabis-nm`, `smoking-policy` |
| 118 | guarantor / cosigner of a rental agreement (tenancy context) | whole code | 13 | passed | 2 | `edu-screening-fee-nm` |
| 119 | deposit interest / passbook rate (tenancy context, whole code) | whole code | 1 | passed | 0 | `edu-deposit-interest-nm` |
| 120 | holding / reservation / application deposit before a rental agreement | whole code | 0 | passed | 0 | `edu-no-holding-deposit-rule-nm` |
| 121 | electronic notice / email / text in tenancy or notice context (whole code) | `^(47-\|14-16-\|35-\|57-12)` | 6 | passed | 7 | — |
| 122 | towing rerun of B116 (section-wide: tow* + private property / parking lot / property owner) | whole code | 9 | passed | 2 | `edu-towing-nm`, `parking-vehicle-rules-id` |
| 123 | holding deposit everyday-word rerun of B120 (deposit + applicant / application / reserve) | whole code | 46 | passed | 110 | `edu-no-holding-deposit-rule-nm` |
| 124 | early termination fee / liquidated damages / lease break (tenancy context, whole code) | whole code | 4 | passed | 1 | `early-termination-nm` |
| 125 | rent receipt: whole-code rerun of B60 (B51 failed) | whole code | 36 | passed | 226 | `edu-rent-receipts-nm` |
| 126 | just cause: whole-code rerun of B105 (B95 failed) | whole code | 61 | passed | 8 | `edu-for-cause-eviction-nm` |
| 127 | application of payments / acceptance of rent: whole-code rerun of B106 (B99 failed) | whole code | 175 | passed | 4 | `application-of-payments`, `edu-no-waiver-by-acceptance-rule-nm`, `edu-payment-allocation-nm` |
| 128 | subletting / assignment: whole-code rerun of B110 | whole code | 128 | passed | 99 | `no-sublet-assign` |
| 129 | electronic notice / e-mail: whole-code rerun of B121 | whole code | 34 | passed | 12 | `electronic-notice-nm` |
| 130 | eviction prevention / rental assistance everyday-word rerun of B102 | whole code | 11 | passed | 0 | `edu-eviction-process-nm` |
| 131 | tenant lease termination for age, infirmity, assisted living or nursing care (tenancy context) | whole code | 1 | passed | 1 | — |
| 132 | automatic renewal of a lease / renewal notice (tenancy context) | whole code | 2 | passed | 1 | — |
| 133 | private well everyday-word rerun of B90 (well + water / domestic / private / test) | whole code | 13 | passed | 2 | — (canvass `private-well-testing`) |

## 18. Topic reference canvass (rules 27, 36)
Every one of the reference's 313 topics ends in a status. 'Present' means an NM row answers it; the 165 others carry a status and reason (Confirmed absent with its battery, Answered elsewhere with the row, Not located with its boundary, Not offered or Barred with §6.1, Not applicable).

### 18.1 Topics answered by an NM row (148)
- `abandoned-property`: Present — `abandoned-property-nm`
- `abandonment-and-mitigation`: Present — `edu-abandonment-mitigation-nm`
- `acceptable-payment-methods`: Present — `acceptable-payment-methods`
- `addendum-precedence`: Present — `addendum-precedence`
- `alarm-duties`: Present — `edu-no-alarm-statute-nm`
- `algorithmic-rent-setting`: Present — `edu-no-algorithmic-rent-rule-nm`
- `alterations`: Present — `no-alterations`
- `appliances-included`: Present — `appliances-included`
- `application-fees`: Present — `edu-screening-fee-nm`
- `application-of-payments`: Present — `application-of-payments`, `edu-payment-allocation-nm`
- `assigned-parking-space`: Present — `assigned-parking-space`
- `assistance-animal-accommodation`: Present — `assistance-animal-accommodation`, `edu-assistance-animals-nm`
- `attorney-fees`: Present — `edu-attorney-fees-nm`
- `bed-bug-disclosure`: Present — `edu-no-bed-bug-rule-nm`
- `cannabis`: Present — `cannabis-cultivation-nm`, `edu-cannabis-nm`
- `casualty-termination`: Present — `casualty-termination-nm`, `edu-casualty-nm`
- `common-area-use`: Present — `common-area-use`
- `condition-inspection`: Present — `edu-no-move-in-inspection-rule-nm`
- `consumer-protection-act`: Present — `edu-consumer-protection-nm`
- `conversion-notice`: Present — `edu-conversion-notice-nm`
- `criminal-activity`: Present — `criminal-activity-nm`
- `cure-and-eviction-grounds`: Present — `edu-noncompliance-cure-nm`
- `default-by-tenant`: Present — `default-by-tenant`
- `deposit-escheat`: Present — `edu-deposit-escheat-nm`
- `deposit-last-month-rent`: Present — `edu-deposit-last-month-nm`
- `disturbance`: Present — `no-disturbance`
- `due-at-signing`: Present — `due-at-signing`
- `dv-eviction-protection`: Present — `edu-dv-eviction-protection-nm`
- `dv-lease-termination`: Present — `edu-no-dv-termination-nm`
- `early-termination`: Present — `early-termination-nm`
- `electronic-signatures`: Present — `electronic-signatures`
- `emergency-assistance-right`: Present — `edu-no-emergency-assistance-rule-nm`
- `entire-agreement`: Present — `entire-agreement`
- `ev-charging`: Present — `edu-no-ev-charging-rule-nm`
- `eviction-process`: Present — `edu-eviction-process-nm`
- `eviction-record-sealing`: Present — `edu-eviction-record-sealing-nm`
- `existing-condition`: Present — `existing-condition`
- `expedited-criminal-eviction`: Present — `edu-substantial-violation-nm`
- `extended-absence-notice`: Present — `extended-absence-notice-ks`
- `fair-housing`: Present — `edu-fair-housing-nm`
- `fee-transparency`: Present — `fees-and-charges-nm`, `edu-fee-transparency-nm`
- `fees-as-rent`: Present — `edu-fees-as-rent-nm`
- `fire-safety-grilling`: Present — `fire-safety-grilling`
- `firearms`: Present — `edu-firearms-nm`
- `flood-disclosure`: Present — `edu-no-flood-disclosure-nm`
- `for-cause-eviction`: Present — `edu-for-cause-eviction-nm`
- `foreclosure`: Present — `edu-foreclosure-nm`
- `foreign-ownership`: Present — `edu-no-foreign-ownership-rule-nm`
- `governing-law`: Present — `governing-law`
- `guest-policy`: Present — `guest-policy`
- `guest-policy-day-limit`: Present — `guest-policy-day-limit`
- `guest-rights`: Present — `edu-guest-fees-nm`
- `hoa-compliance`: Present — `hoa-compliance`
- `holding-deposit`: Present — `edu-no-holding-deposit-rule-nm`
- `holdover`: Present — `holdover-nm`, `edu-holdover-nm`
- `holdover-rate`: Present — `edu-holdover-rate-nm`
- `immigration-status`: Present — `edu-no-immigration-rule-nm`
- `inspection-rights`: Present — `inspection-rights`
- `joint-liability`: Present — `joint-liability`
- `keys`: Present — `keys`
- `landlord-entry`: Present — `landlords-access-nm`, `edu-landlord-entry-nm`
- `landlord-lien`: Present — `edu-landlord-lien-nm`
- `landlord-maintenance`: Present — `landlord-maintenance-nm`, `edu-habitability-nm`
- `landlord-self-cure`: Present — `landlord-self-cure-nm`
- `landscaping-irrigation`: Present — `landscaping-irrigation`
- `late-fee`: Present — `late-fee-nm`, `edu-late-fee-cap-nm`
- `lead-based-paint`: Present — `lead-based-paint`
- `lease-completeness`: Present — `edu-no-lease-completeness-rule-nm`
- `lease-copy`: Present — `edu-lease-copy-nm`
- `meth-disclosure`: Present — `edu-no-meth-disclosure-nm`
- `mold-disclosure`: Present — `edu-no-mold-disclosure-nm`
- `municipal-utility-lien`: Present — `edu-municipal-utility-lien-nm`
- `nonpayment-notice`: Present — `edu-nonpayment-notice-nm`
- `nonresident-owner-agent`: Present — `edu-nonresident-owner-agent-nm`
- `notice-delivery-methods`: Present — `electronic-notice-nm`, `edu-notice-service-nm`
- `notices`: Present — `notices`
- `nuisance`: Present — `edu-nuisance-nm`
- `owner-identity-disclosure`: Present — `landlord-disclosure-nm`
- `parking`: Present — `parking-ks-oh-ca`
- `parking-vehicle-rules`: Present — `parking-vehicle-rules-id`
- `permitted-occupants`: Present — `permitted-occupants`
- `pet-fees`: Present — `edu-pet-deposit-nm`
- `pet-insurance-requirement`: Present — `pet-insurance-requirement`
- `pet-policy`: Present — `pet-policy-nm`
- `plain-language`: Present — `edu-plain-language-nm`
- `possession-delay`: Present — `possession-delay-ca`
- `post-eviction-property`: Present — `edu-post-eviction-property-nm`
- `prohibited-lease-terms`: Present — `edu-prohibited-terms-nm`
- `quiet-possession`: Present — `edu-quiet-possession-nm`
- `radon-disclosure`: Present — `edu-no-radon-disclosure-nm`
- `rent-control`: Present — `edu-rent-control-nm`
- `rent-increase-notice`: Present — `edu-rent-increase-notice-nm`
- `rent-payment`: Present — `rent-payment`
- `rent-receipts`: Present — `edu-rent-receipts-nm`
- `rent-tax`: Present — `edu-rent-tax-nm`
- `rental-application-accuracy`: Present — `rental-application-accuracy`
- `rental-inspection`: Present — `edu-no-rental-inspection-rule-nm`
- `residential-use-only`: Present — `residential-use-only`
- `retaliation`: Present — `edu-retaliation-nm`
- `returned-payments`: Present — `returned-payments-nm`, `edu-dishonored-check-nm`
- `rules-regulations`: Present — `rules-nm`
- `sale-or-management-change`: Present — `edu-sale-management-change-nm`
- `scope`: Present — `edu-scope-nm`
- `security-deposit-cap`: Present — `edu-deposit-cap-nm`
- `security-deposit-holding`: Present — `edu-no-deposit-holding-rule-nm`
- `security-deposit-interest`: Present — `edu-deposit-interest-nm`
- `security-deposit-on-sale`: Present — `edu-deposit-on-sale-nm`
- `security-deposit-penalty`: Present — `edu-deposit-return-penalty-nm`
- `security-deposit-return`: Present — `security-deposit-return-nm`
- `security-deposit-use`: Present — `security-deposit-use`
- `security-devices`: Present — `edu-no-security-device-rule-nm`
- `self-help-eviction`: Present — `edu-self-help-eviction-nm`
- `service-animal-misrepresentation`: Present — `edu-service-animal-misrepresentation-nm`
- `servicemember-rights`: Present — `edu-servicemember-nm`
- `services-utilities-provided`: Present — `services-utilities-provided-ks-oh`
- `severability`: Present — `severability`
- `sex-offender-occupancy`: Present — `edu-no-sex-offender-rule-nm`
- `smoking-policy`: Present — `smoking-policy`
- `snow-removal`: Present — `snow-removal`
- `source-of-income`: Present — `edu-source-of-income-nm`
- `statute-of-frauds-lease-term`: Present — `edu-statute-of-frauds-nm`
- `statutory-forms`: Present — `edu-statutory-forms-nm`
- `stigmatized-property`: Present — `edu-stigmatized-property-nm`
- `storage-space`: Present — `storage-space-ks-oh-ca`
- `sublet-assign`: Present — `no-sublet-assign`
- `surrender-end-of-term`: Present — `surrender-end-of-term-ks-ne`
- `tenant-caused-damage`: Present — `tenant-caused-damage-nm`, `edu-tenant-caused-damage-nm`
- `tenant-death`: Present — `deceased-resident-contact-nm`, `edu-tenant-death-nm`
- `tenant-forward-proceedings`: Present — `tenant-forward-proceedings-ca`
- `tenant-maintenance`: Present — `tenant-maintenance`
- `tenant-repair-agreement`: Present — `maintenance-allocation-nm`
- `tenant-repair-remedies`: Present — `edu-tenant-repair-remedies-nm`
- `tenant-screening`: Present — `edu-tenant-screening-nm`
- `tenant-security-cameras`: Present — `edu-no-camera-rule-nm`
- `tenant-statutory-duties`: Present — `edu-tenant-statutory-duties-nm`
- `tenants-property-insurance`: Present — `tenants-property-insurance-ks-oh-ca`
- `term-change-notice`: Present — `edu-fee-increase-notice-nm`
- `termination-notice`: Present — `periodic-tenancy-notice-nm`, `edu-end-of-term-nm`
- `towing`: Present — `edu-towing-nm`
- `unauthorized-occupant-removal`: Present — `edu-unauthorized-occupant-nm`
- `unconscionability`: Present — `edu-unconscionability-nm`
- `unpaid-damages-interest`: Present — `edu-legal-interest-nm`
- `utilities-paid-by-landlord`: Present — `utilities-paid-by-landlord`
- `utilities-responsibility`: Present — `utilities-responsibility`
- `utility-payment-evidence`: Present — `utility-payment-evidence`
- `utility-service-continuity`: Present — `utility-service-continuity`
- `utility-submetering-disclosure`: Present — `utility-bill-copies-nm`, `edu-utility-billing-nm`
- `waiver-by-acceptance`: Present — `edu-no-waiver-by-acceptance-rule-nm`

### 18.2 Topics with no NM row (status and reason) (165)
- `service-animal-denial-penalty` (10 states): Answered elsewhere: NMSA 1978, § 28-11-4 makes violating the Service Animal Act a misdemeanor, but § 28-11-3 reaches buildings open to the public, public accommodations and common carriers, not private rentals (`edu-assistance-animals-nm`); battery 39
- `tenant-display-rights` (9 states): Confirmed absent for flags, signs and displays (battery 43; constitution battery 108), recorded in the `common-area-use` tag note
- `disability-accommodation` (8 states): Answered elsewhere: disability discrimination in rental terms barred (NMSA 1978, § 28-1-7(G)(2)) in `edu-fair-housing-nm` and `edu-assistance-animals-nm`; the HRA's 'reasonable accommodation' definition (§ 28-1-2(V)) is employment-only; modification and accommodation duties come from federal law, not read (NM log §1.4); `no-alterations` tag preserves lawful modifications
- `dv-confidentiality` (7 states): Not applicable: the confidential substitute address program (NMSA 1978, § 40-13B-3) imposes no landlord duty (battery 24); recorded in `edu-dv-eviction-protection-nm`
- `hoa` (6 states): Answered elsewhere: NMSA 1978, §§ 47-8-22(H), 47-16-18 in the `hoa-compliance` tag note; no rental-approval statute for tenants found (battery 88)
- `renters-insurance-rules` (6 states): Confirmed absent (battery 50), recorded in the `tenants-property-insurance-ks-oh-ca` and `pet-insurance-requirement` tag notes
- `alt-housing` (5 states): Not located: no New Mexico statute requires alternative housing during repairs; the act (read whole) gives abatement and termination instead (`edu-tenant-repair-remedies-nm`, `edu-casualty-nm`)
- `deposit-installments` (5 states): Not located: no installment-payment right for deposits in the act (read whole) or found by battery 113
- `statutory-early-termination` (5 states): Answered elsewhere: no state early-termination right for domestic violence or military service (`edu-no-dv-termination-nm`, `edu-servicemember-nm`); New Mexico requires no lease statement about such rights
- `utility-landlord-account` (5 states): Answered elsewhere: NMSA 1978, § 47-8-36(A)(4) (owner need not pay resident's utility charges but may not cause a shutoff) in `edu-self-help-eviction-nm`; batteries 32, 114
- `double-letting` (4 states): Not located: no statute on renting the same unit to two tenants; delivery of possession and the resident's remedies are NMSA 1978, § 47-8-26 (`possession-delay-ca` tag)
- `dv-lockchange` (4 states): Confirmed absent (battery 24), recorded in `edu-no-dv-termination-nm`
- `exculpatory-clauses` (4 states): Answered elsewhere: NMSA 1978, § 47-8-16 in `edu-prohibited-terms-nm`; exculpation-free variants tagged (rule 52)
- `foreclosure-disclosure` (4 states): Confirmed absent: no pre-lease foreclosure disclosure (battery 46), recorded in `edu-foreclosure-nm`
- `homestead-waiver` (4 states): Not offered: no statute supports a lease waiver of execution exemptions; a tenant has no homestead in the rental (NMSA 1978, §§ 42-10-9, 42-10-10, 42-10-13; battery 67); NM log §6.1
- `infirmity-termination` (4 states): Confirmed absent (battery 131: one hit, a children's-code treatment-guardian section)
- `landlord-registration` (4 states): Confirmed absent (battery 85); optional agent designation for nonresident owners in `edu-nonresident-owner-agent-nm`
- `minor-tenant-filing` (4 states): Not located: not searched (capacity to contract is general law preserved by NMSA 1978, § 47-8-4)
- `nonrefundable-deposit-notice` (4 states): Answered elsewhere: a 'deposit' is a pledge for performance (NMSA 1978, § 47-8-3(F)) and must be returned or itemized (§ 47-8-18); a nonrefundable charge is a fee that must be in the rental agreement (§ 57-12-27(C), `fees-and-charges-nm`)
- `protected-class-inquiry-ban` (4 states): Answered elsewhere: NMSA 1978, § 28-1-7(G)(3) bars any 'record or inquiry' expressing a preference (`edu-fair-housing-nm`)
- `fee-in-lieu-of-deposit` (3 states): Not located: no statute; a fee in place of a deposit would be a fee that must be in the rental agreement and listing (NMSA 1978, §§ 57-12-27(C), 47-8-19.1)
- `jury-waiver` (3 states): Not offered: no statute supports a lease jury waiver; metropolitan court jury trial is by statute (NMSA 1978, § 34-8A-5; battery 68); NM log §6.1
- `pool-safety` (3 states): Confirmed absent for residential rentals (battery 53)
- `portfolio-thresholds` (3 states): Not applicable: New Mexico's act has no owner-size thresholds; the Human Rights Act exemptions (NMSA 1978, § 28-1-9(A), (D)) are in `edu-fair-housing-nm`
- `rent-escalation` (3 states): Not offered: NMSA 1978, § 47-8-15(F) times increases to the end of a fixed term; explained in `edu-rent-increase-notice-nm`; NM log §6.1
- `repair-notice` (3 states): Answered elsewhere: the resident's repair remedies require written notice (NMSA 1978, §§ 47-8-27.1(A), 47-8-27.2(A)) in `edu-tenant-repair-remedies-nm`; no prescribed lease statement
- `required-fees` (3 states): Answered elsewhere: `fees-and-charges-nm` (NMSA 1978, § 57-12-27(C))
- `sex-offender-disclosure` (3 states): Confirmed absent (battery 22), recorded in `edu-no-sex-offender-rule-nm`
- `telecom-access` (3 states): Answered elsewhere: entry with a cable television, electric, gas or telephone company representative is exempt from the notice rule (NMSA 1978, § 47-8-24(A)(2); `landlords-access-nm`); no tenant telecom-access statute (batteries 86, 93)
- `tenant-rights-statement` (3 states): Confirmed absent: no prescribed statement of tenant rights in a lease; the Supreme Court's three-day notice form carries rights language (Form 4-901 NMRA; `edu-statutory-forms-nm`); formatting batteries 3-5
- `utility-shutoff-statute` (3 states): Answered elsewhere: NMSA 1978, § 47-8-36(A)(4) in `edu-self-help-eviction-nm`; Public Regulation Commission shutoff rules not read (NM log §7)
- `automatic-renewal` (2 states): Confirmed absent (battery 132: two hits, rental-purchase and service-contract definitions)
- `collection-fee` (2 states): Not offered: no statutory basis; a collection fee charged on late rent risks operating as a second late fee beyond NMSA 1978, § 47-8-15(D); NM log §6.1
- `confession-of-judgment` (2 states): Answered elsewhere: NMSA 1978, § 39-1-16 in `edu-prohibited-terms-nm`
- `deposit-cost-schedule` (2 states): Not located: no statute on agreed cleaning-cost schedules; deductions follow NMSA 1978, § 47-8-18(C)
- `dv-qualifying-documents` (2 states): Not applicable: no New Mexico domestic violence termination right (`edu-no-dv-termination-nm`)
- `environmental-event-termination` (2 states): Not located: no statute; casualty rules NMSA 1978, § 47-8-31 (`edu-casualty-nm`)
- `ev-charging-end-of-tenancy` (2 states): Confirmed absent (battery 44), `edu-no-ev-charging-rule-nm`
- `ev-charging-requirements` (2 states): Confirmed absent (battery 44), `edu-no-ev-charging-rule-nm`
- `ev-charging-shared-area` (2 states): Confirmed absent (battery 44), `edu-no-ev-charging-rule-nm`
- `habitability-modifiable` (2 states): Answered elsewhere: only NMSA 1978, § 47-8-20(C)-(E) allows shifting duties (`edu-habitability-nm`, `maintenance-allocation-nm`)
- `hazardous-contamination-disclosure` (2 states): Not located: no rental contamination disclosure found (batteries 16, 70, 13); not searched for other hazards
- `heating` (2 states): Answered elsewhere: NMSA 1978, § 47-8-20(A)(6) in `edu-habitability-nm`
- `military-air-zone-disclosure` (2 states): Not located: not searched (Virginia statute)
- `notice-service-fee` (2 states): Not offered: same reason as collection-fee; NM log §6.1
- `prohibited-acts-renter` (2 states): Answered elsewhere: NMSA 1978, § 47-8-22 in `edu-tenant-statutory-duties-nm`
- `rent-concession` (2 states): Not located: no statute on rent concessions; a concession clawback would need the § 57-12-27(C) fee analysis; not offered
- `rent-into-court-counterclaim` (2 states): Answered elsewhere: NMSA 1978, §§ 47-8-30, 47-8-47 in `edu-eviction-process-nm` and `edu-holdover-nm`
- `rent-reporting` (2 states): Not located: not searched
- `security-deposit-nonwaiver` (2 states): Answered elsewhere: NMSA 1978, § 47-8-16 (`edu-prohibited-terms-nm`)
- `substandard-property-receivership` (2 states): Confirmed absent for rentals (battery 83: one hit, a condominium disclosure section); municipal unfit-dwelling ordinances (NMSA 1978, § 3-46-43) flagged in `edu-no-rental-inspection-rule-nm`
- `tenancy-at-will` (2 states): Answered elsewhere: absent a definite term the residency is week-to-week or month-to-month (NMSA 1978, § 47-8-15(C)); no tenancy-at-will rule under the act (battery 29); `periodic-tenancy-notice-nm`
- `translation-duty` (2 states): Confirmed absent (battery 81)
- `truth-in-renting` (2 states): Answered elsewhere: listing disclosure and fee rules (`edu-fee-transparency-nm`); no truth-in-renting statement statute found (batteries 79, 80)
- `utility-apportionment` (2 states): Answered elsewhere: NMSA 1978, § 47-8-20(F) in `edu-utility-billing-nm` and `utility-bill-copies-nm`
- `waterbed` (2 states): Not located: not searched separately (battery 43 did not cover water beds); `common-area-use` restricts water-filled furniture
- `adverse-proceeding-notice` (1 states): Answered elsewhere: `tenant-forward-proceedings-ca` tag
- `appliances-excluded` (1 states): Answered elsewhere: owner maintains appliances 'supplied or required to be supplied by him' (NMSA 1978, § 47-8-20(A)(4)); `appliances-included` tag
- `balcony-inspection` (1 states): Not located: not searched (California)
- `bed-bug-cooperation` (1 states): Confirmed absent (battery 15), `edu-no-bed-bug-rule-nm`
- `casualty-and-mitigation-waivable` (1 states): Answered elsewhere: casualty rights unwaivable (NMSA 1978, §§ 47-8-31, 47-8-16) in `edu-casualty-nm`
- `children-occupancy` (1 states): Answered elsewhere: familial status is not in the Human Rights Act's housing list; federal law protects families with children (`edu-fair-housing-nm`)
- `cold-weather-vacate-notice` (1 states): Not located: not searched
- `condemned-premises-rent-bar` (1 states): Not located: abatement covers uninhabitable units (NMSA 1978, § 47-8-27.2(A)(2)); no separate bar
- `confirmed-absences-habitability` (1 states): Answered by the individual absence rows (`edu-no-mold-disclosure-nm`, `edu-no-bed-bug-rule-nm`, `edu-no-radon-disclosure-nm`, `edu-no-alarm-statute-nm`)
- `confirmed-absences-misc` (1 states): Answered by the individual absence rows (§17)
- `confirmed-absences-outside-title` (1 states): Answered by the individual absence rows (§17)
- `construction-liens` (1 states): Not located: not searched for tenant improvements (mechanics' lien act ch. 48, art. 2 not read)
- `defective-drywall-disclosure` (1 states): Not applicable (Florida)
- `deposit-surrender-notice` (1 states): Not applicable (Texas)
- `designated-repairer` (1 states): Not located: not searched
- `disaster-displaced-guests` (1 states): Not located: not searched
- `disaster-duties` (1 states): Not located: not searched
- `drug-free-housing-addendum` (1 states): Answered elsewhere: `criminal-activity-nm`
- `dv-deposit-timing` (1 states): Not applicable (no domestic violence termination right)
- `dv-protection-order-chapter-moved` (1 states): Not applicable (Minnesota renumbering)
- `electric-submetering-disclosure` (1 states): Answered elsewhere: NMSA 1978, § 47-8-20(F)
- `emergency-contact` (1 states): Answered elsewhere: contact person for a deceased resident (`deceased-resident-contact-nm`)
- `employee-screening` (1 states): Not applicable (state-specific)
- `eviction-hardship-stay` (1 states): Confirmed absent: no hardship stay; appeal stay requires rent payment (NMSA 1978, § 47-8-47); batteries 102, 130
- `eviction-penalty-clause-ban` (1 states): Answered elsewhere: NMSA 1978, §§ 47-8-16, 47-8-17 (`edu-prohibited-terms-nm`)
- `eviction-service-party` (1 states): Not applicable (Tennessee)
- `expedited-deposit-disposition` (1 states): Not applicable (state-specific)
- `fee-unprovided-service` (1 states): Answered elsewhere: fees must be in the rental agreement and listing (`edu-fee-transparency-nm`)
- `fire-code-standard` (1 states): Not located: state fire code (NMAC) not read; NMSA 1978, § 59A-52-15.1 noted in `edu-no-alarm-statute-nm`
- `fire-sprinkler-duty` (1 states): Confirmed absent (battery 100)
- `forfeiture-redemption` (1 states): Not applicable: the act has no redemption after judgment except the three-day remedy where rent was abated or allocated to damages (NMSA 1978, § 47-8-33(E)), in `edu-payment-allocation-nm`
- `frozen-standard-incorporation` (1 states): Not applicable: the act incorporates 'applicable minimum housing codes' without a frozen edition (NMSA 1978, §§ 47-8-3(E), 47-8-20(A)(1))
- `government-fee-reimbursement` (1 states): Not offered: a pass-through fee must be stated in the rental agreement and listing and increased only on 60 days' notice (NMSA 1978, §§ 57-12-27(C), 47-8-19.1, 47-8-19.4); landlords can list it in `fees-and-charges-nm`
- `governmental-fines` (1 states): Not located: not searched
- `guarantor-renewal` (1 states): Not located: guarantors are 'applicants' for screening (NMSA 1978, § 47-8-3(D)); no renewal rule (battery 118)
- `habitability-materiality` (1 states): Answered elsewhere: 'materially affecting health and safety' standard (NMSA 1978, §§ 47-8-20(A)(1), 47-8-27.1(A)(1)) in `edu-habitability-nm`
- `habitability-presumption` (1 states): Not located: no statutory presumption in the act (read whole)
- `habitability-waiver` (1 states): Barred: NMSA 1978, § 47-8-16
- `health-district-rental-rules` (1 states): Not applicable (state-specific)
- `inspection-condemnation-disclosure` (1 states): Not located: not searched
- `inspection-notice-penalty` (1 states): Answered elsewhere: abusive or unlawful entry remedies (NMSA 1978, §§ 47-8-24(F), 47-8-38) in `edu-landlord-entry-nm`
- `key-control-policy` (1 states): Not located: not searched (state-specific)
- `knowing-use-penalty` (1 states): Answered elsewhere: NMSA 1978, § 47-8-17 in `edu-prohibited-terms-nm`
- `landlord-breach-remedy` (1 states): Answered elsewhere: `edu-tenant-repair-remedies-nm`
- `landlord-liability-insurance` (1 states): Not located: not searched
- `landlord-remedies-termination` (1 states): Answered elsewhere: NMSA 1978, §§ 47-8-33, 47-8-35 in `edu-noncompliance-cure-nm`, `edu-nonpayment-notice-nm`
- `late-fee-limit` (1 states): Answered elsewhere: `edu-late-fee-cap-nm`, `late-fee-nm`
- `law-enforcement-cooperation` (1 states): Not located: not searched
- `lead-safe-certification` (1 states): Confirmed absent for state law (batteries 21, 70); federal disclosure in the `lead-based-paint` tag
- `lease-content-requirements` (1 states): Answered elsewhere: written agreement before occupancy (NMSA 1978, § 47-8-20(G)), disclosures (§ 47-8-19), fees (§ 57-12-27(C)) in `edu-lease-copy-nm`, `landlord-disclosure-nm`, `fees-and-charges-nm`
- `lease-notice-initial-requirement` (1 states): Not applicable: North Dakota initialing rule; New Mexico has none (formatting batteries 3-5)
- `lease-term-limitation` (1 states): Confirmed absent: no maximum residential lease term found (batteries 48, 62)
- `liquidated-damages` (1 states): Confirmed absent: no residential statute (battery 124); penalty doctrine not searched
- `lockout-for-rent-delinquency` (1 states): Answered elsewhere: lockouts barred (NMSA 1978, § 47-8-36; `edu-self-help-eviction-nm`)
- `maintenance-duty-shift` (1 states): Answered elsewhere: NMSA 1978, § 47-8-20(C)-(E)
- `meter-conservation-charge` (1 states): Not applicable (state-specific)
- `nonrefundable-deposit-separate-notice` (1 states): Not applicable (see nonrefundable-deposit-notice)
- `notice-to-quit-waiver` (1 states): Barred: waiving the act's notices would waive resident rights (NMSA 1978, § 47-8-16); NM log §6.1
- `notice-to-vacate-additional-terms` (1 states): Answered elsewhere: a notice to quit coupled with an option to stay at higher rent does not terminate (annotation to NMSA 1978, § 47-8-37) in `periodic-tenancy-notice-nm`
- `optional-lease-terms` (1 states): Answered elsewhere: NMSA 1978, § 47-8-14 (terms not prohibited by the act); NM log §6.1
- `ordnance-demolition-meter-disclosures` (1 states): Not located: not searched (California)
- `other-landlord-facilities` (1 states): Answered elsewhere: guest fees for facilities other than the unit allowed (NMSA 1978, § 47-8-15(E)) in `edu-guest-fees-nm`
- `owner-move-in-reservation` (1 states): Not applicable (California)
- `parking-rules-notice` (1 states): Answered elsewhere: rules need reasonable notice (NMSA 1978, § 47-8-23(F); `rules-nm`)
- `part5-nonwaivable` (1 states): Answered elsewhere: NMSA 1978, § 47-8-16
- `periodic-services-entry` (1 states): Answered elsewhere: entry for agreed services on 24-hour written notice (NMSA 1978, § 47-8-24(A); `landlords-access-nm`)
- `pest-control-notice` (1 states): Not located: not searched (pest-control licensing hits only, battery 15)
- `plain-language-consumer-statement` (1 states): Answered elsewhere: `edu-plain-language-nm`
- `political-access` (1 states): Not located: not searched
- `portable-solar` (1 states): Not located: solar rights act (NMSA 1978, § 47-3-4) concerns property owners; not researched for tenants
- `possession-bond` (1 states): Answered elsewhere: appeal escrow (NMSA 1978, § 47-8-47) in `edu-holdover-nm`
- `private-well-testing` (1 states): Confirmed absent (battery 90; everyday-word rerun battery 133: 13 hits, none a rental or sale disclosure or testing duty)
- `prop65-rental-warning` (1 states): Not applicable (California)
- `property-tax-rent-disclosure` (1 states): Not located: not searched
- `purpose-limitation` (1 states): Answered elsewhere: rules' permitted purposes (NMSA 1978, § 47-8-23(A); `rules-nm`)
- `redemption` (1 states): Answered elsewhere: see forfeiture-redemption
- `religious-cultural-display` (1 states): Confirmed absent (battery 43; constitution battery 108)
- `rent-demand-bar` (1 states): Not applicable (state-specific)
- `rent-receipt-anti-waiver` (1 states): Answered elsewhere: `edu-no-waiver-by-acceptance-rule-nm`
- `repair-cost-termination` (1 states): Not located: no statute lets an owner end a lease because repairs cost too much; casualty termination is offered narrowly (`casualty-termination-nm`)
- `repair-escrow-exemption-notice` (1 states): Not applicable (Ohio statute)
- `required-disclosures` (1 states): Answered elsewhere: `landlord-disclosure-nm`, `fees-and-charges-nm`, `lead-based-paint`
- `security-deposit-standards` (1 states): Not located: no deposit-standards disclosure; deposits must be 'reasonable' (NMSA 1978, § 47-8-18(A))
- `senior-housing-work-card` (1 states): Not applicable (state-specific)
- `sfr-occupancy-disclosure` (1 states): Not applicable (Nevada)
- `shutdown-rent-protection` (1 states): Not located: not searched
- `smoke-drift-waiver` (1 states): Not offered: a waiver of a nuisance cause of action would waive resident remedies (NMSA 1978, § 47-8-16)
- `social-security-defense` (1 states): Not located: not searched
- `statutory-caps` (1 states): Answered elsewhere: builder caps listed in NM log §10
- `steam-radiator-covers` (1 states): Not applicable (New Jersey)
- `stove-refrigerator` (1 states): Answered elsewhere: supplied appliances maintained (NMSA 1978, § 47-8-20(A)(4)) in `appliances-included` tag
- `subsidized-inspection-refusal` (1 states): Not located: not searched
- `subsidy-habitability-proration` (1 states): Answered elsewhere: abatement uses the total rent for subsidized units (NMSA 1978, § 47-8-27.2(C)) in `edu-tenant-repair-remedies-nm`
- `subsidy-late-fee` (1 states): Not located: no state rule; late fee on rent only (NMSA 1978, § 47-8-15(D))
- `tenant-insurance-claims` (1 states): Not located: not searched
- `tenant-records` (1 states): Not located: not searched
- `tenant-right-to-organize` (1 states): Answered elsewhere: NMSA 1978, § 47-8-39(A)(2) in `edu-retaliation-nm`; battery 82
- `tpa-exemption-notice` (1 states): Not applicable (California)
- `tpa-notice` (1 states): Not applicable (California Tenant Protection Act)
- `tpa-sunset` (1 states): Not applicable (California)
- `unbundled-parking` (1 states): Not located: not searched (California)
- `utility-allowance-cap` (1 states): Not located: no statute; utility charges billed by the owner are fees that must be in the rental agreement (`fees-and-charges-nm`)
- `utility-deposit-return` (1 states): Not located: not searched
- `utility-disclosure-attachment` (1 states): Not located: no attachment requirement; § 47-8-20(F) copies on request
- `utility-interruption-submeter` (1 states): Answered elsewhere: NMSA 1978, § 47-8-36(A)(4)
- `utility-transfer` (1 states): Not located: no statute; `utilities-responsibility` tag
- `veterans-incentive` (1 states): Not located: not searched
- `window-guards` (1 states): Confirmed absent (batteries 54, 71)
- `written-notice-required` (1 states): Answered elsewhere: NMSA 1978, § 47-8-13 in `edu-notice-service-nm`

### 18.3 'Topics no state has a row for yet'
The reference (2,441 active rows, 313 topics) carries no such list; every topic has rows in at least one state and is answered in §18.1 or §18.2.

## 19. Step D screens (rules 40-53), one line each
- **40 formatting and placement:** batteries 3, 4, 5 run before drafting; no type-size, boldface or first-page rule for residential leases; layout table §4.
- **41 just cause:** none (batteries 95 (failed), 105, 126); `edu-for-cause-eviction-nm` keyed `for-cause-eviction` with the situational limits (retaliation § 47-8-39, domestic violence defense § 47-8-33(J), lockout ban, servicemember federal law); a fixed term ends at its end date (`edu-end-of-term-nm`).
- **42 required text in a shared clause:** fees must be in the rental agreement (§ 57-12-27(C)), so `fees-and-charges-nm` lists them and `returned-payments-nm` states a fixed fee; the late-fee notice duty (§ 47-8-15(D)) is written into `late-fee-nm`; the § 47-8-19 disclosure is its own clause.
- **43 cure promises:** the base `default-by-tenant` carve-out ('except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure') covers New Mexico's two no-cure grounds (second noncompliance within six months, § 47-8-33(B); substantial violation, § 47-8-33(I)); the rent limb has no no-cure ground; `early-termination` with its 10-day cure promise and `early-termination-ks` not tagged.
- **44 terms turned into duties:** supplied appliances become the owner's to maintain (§ 47-8-20(A)(4); `appliances-included` note, `landlord-maintenance-nm`); the extended-absence notice exists only if the lease requires it (§ 47-8-25; `extended-absence-notice-ks`); the late fee exists only if the agreement provides (§ 47-8-15(D)); the utility-copy fee only if included (§ 47-8-20(F)).
- **45 electronic notices:** ch. 14, art. 16 read itself: agreement needed and refusal unwaivable (§ 14-16-5(b)-(c)); eviction, default and cure notices under a rental agreement for a primary residence excluded (§ 14-16-3(B)(2)(b)); specified-method rules kept (§ 14-16-8); so no e-mail notice the act requires (`electronic-notice-nm`, `edu-notice-service-nm`); batteries 121 (scoped) and 129 (whole code).
- **46 lease as the notice:** the § 47-8-19 disclosure, the § 47-8-25 absence requirement and the § 47-8-34.2(B) contact request are lease paragraphs; no statute lets the lease serve as a nonpayment, late-fee or termination notice; `late-fee-nm` promises the separate § 47-8-15(D) notice.
- **47 knowing-use penalties:** § 47-8-17 (damages and reasonable attorney's fees for deliberate use of provisions known to be prohibited); `severability` does not cure; no NM clause contains a § 47-8-16 waiver (independent check confirmed).
- **48 separate documents:** the § 47-8-20(D) maintenance agreement (`maintenance-allocation-nm`); settled by rule 48 and not re-asked (§6.2); builder gate gap (§10).
- **49 collection costs:** no New Mexico ban on 'reasonable costs and expenses'; the base `default-by-tenant` fee sentence matches the statute's prevailing-party fees (§ 47-8-48(A)); collection and notice-service fees not offered (§6.1).
- **50 'the lease controls':** each choice made on purpose: § 47-8-15(B) (time and place of rent: `rent-payment`); § 47-8-15(C) (definite term or periodic); § 47-8-15(D) (late fee: `late-fee-nm`); § 47-8-15(G) (written allocation: not offered); § 47-8-20(C)-(D) (`maintenance-allocation-nm`, chores tags); § 47-8-21(A)-(B) ('unless otherwise agreed': not displaced); § 47-8-23 (`rules-nm`); § 47-8-24(A)(1) (shorter entry notice: not offered); § 47-8-25 (use 'unless otherwise agreed': `residential-use-only`; absence notice: `extended-absence-notice-ks`); § 47-8-34.1(C) and § 47-8-34.2(E) (other procedures: not offered); § 47-8-39(C) (rent change 'as provided under the terms of the rental agreement': no escalation clause); § 56-8-3 (written interest rate: not offered).
- **51 plain language and consumer contracts:** no plain-language statute reaches leases (`edu-plain-language-nm`); the Unfair Practices Act reaches the lease or rental of property and, since 2025, lists the fee practices (§§ 57-12-2, 57-12-27; `edu-consumer-protection-nm`); no blank-space rule (`edu-no-lease-completeness-rule-nm`); written agreement before occupancy (§ 47-8-20(G); `edu-lease-copy-nm`).
- **52 exculpation:** § 47-8-16 bars waiving rights or remedies; ks-oh-ca and ks-oh variants tagged; `pet-policy-nm` without 'without liability'; hold-harmless terms not used.
- **53 figures vs shared clauses:** `late-fee`, `late-fee-ne` (no notice step), `returned-payments` (ceiling-only), `holdover` (ceiling-only) and `holdover-ca` (trigger), `landlords-access` and `landlords-access-mi` (notice form, consent), `pet-policy` (entry), `parking-vehicle-rules` (towing triggers), `early-termination-ks` (abandonment), `landlord-maintenance` (repair exception) replaced; `security-deposit-use`, `acceptable-payment-methods`, `assigned-parking-space`, `keys`, `possession-delay-ca`, `due-at-signing` checked with no New Mexico figure in conflict; deposit, late-fee, screening-fee and utility-copy caps to the builder (§10).
- **35c constitution:** loaded before the first battery; findings in §17.
- **37 tenancy type:** the deposit cap turns on term length (under one year, including periodic: one month; annual: interest above one month); the late-fee cap is per rental period for every type; notice periods differ (week-to-week 7 days, month-to-month 30 days before the periodic rental date; fixed term: none to end it); rent and fee increase notices differ for periods under a month (one rental period); a consented holdover becomes week-to-week or month-to-month by payment period (§ 47-8-15(C)); the deposit-return clock runs from the later of termination or departure for every type.
- **39 eviction duties:** post-writ property (three days, then no storage duty unless agreed, § 47-8-34.1(C); White v. Farris, annotation only); lockout and utility-cutoff ban (§ 47-8-36); no record sealing in statute or court rule (Rules 2-112, 3-112, 1-079 NMRA); no statutory or court-rule pre-filing or diversion condition after the EPDP's withdrawal for new cases (Order No. 23-8500-001); appearance by the owner or manager (Rules 2-107(B)(2), 3-107(B)(2) NMRA); no court-rule period conflicts with a statutory landlord duty.
- **54t tenant-caused damage:** answered provision by provision (§6.1).
- **79 summaries re-read:** every row written section-open; qualifiers attached to their own sentences (for example § 47-8-24(A)(3)'s 'practicable or will not result in economic detriment', § 47-8-27.1(A)(1)'s two triggers, § 47-8-33(J)'s court discretion, § 47-8-30(B)'s 'without merit and is not raised in good faith'); three independent-check rounds (§13). No row records no basis: every new row's notes name its controlling text or its absence battery.

## Proposed SOP changes
1. Rule 19: a battery tool that indexes sections by number must keep every version of a section (current and future-dated), or its reruns will silently drop hits; in New Mexico the index kept one of each of 33 dual-version sections and two batteries re-ran one hit short until the independent check found it.
2. Rule 19: the heading-only screen must report a heading match whenever the section is not counted as a hit, including when the body matched but failed the context filter; in New Mexico the screen hid § 48-6-14 (consent to sublet) and § 47-10-15.1 (mobile home park pets).
3. Rule 19: a battery scoped to some chapters must not be cited as 'whole-code' in a CONFIRMED ABSENT row, even when its name says so; rerun it over the whole code first (New Mexico batteries 60, 105, 106, 110, 121 were rerun as 125-129 after the independent check).
4. Rule 53: a shared late-fee clause that says a fee 'will be assessed' is not 'as written' in a state that conditions the fee on a notice (New Mexico § 47-8-15(D)); check every fee clause for a statutory notice or agreement step as well as its figure.
5. Rule 56: when replacing a blank-states parent, set `rule_type` from the state's own statute, not from the parent (New Mexico requires no deposit-return text in the lease, so `security-deposit-return-nm` is RECOMMENDED, not the parent's REQUIRED).

## Proposed topic questions
1. `late-fee`: Must the landlord give notice of a late fee within a set time before it can be collected, and does the lease have to provide for the fee at all?
2. `fee-transparency`: Is charging a fee that is not stated in the rental agreement itself an unfair or deceptive trade practice?
3. `application-fees`: Must the landlord hold an applicant's screening-fee payment until earlier applicants are screened, and refund it if a prior applicant takes the unit?
4. `term-change-notice`: Does raising a fee the lease already provides need a longer notice than a rent increase?
5. `security-deposit-interest`: Is the interest rate set by reference to a federal body that no longer exists, leaving the rate uncertain?
6. `tenant-death`: May the lease require the tenant to name a contact person and authorize that person to remove property and receive the deposit if the tenant dies?
7. `early-termination`: Does a shared landlord termination limb for 'vacating without notice' conflict with a statutory definition of abandonment that requires an absence after rent is delinquent?

## Sync (Claude Code, 2026-10-02)

- **Merged** with `merge-delta.py --base ae12aa8` (the 2,563-row library the kickoff was staged from) after one fix in a copy: every one of the 49 tagged rows appended its `NM:` note with a space instead of the " | " separator, so the tool read it as an edit to the previous state's note. Each base note was confirmed unchanged and the separator inserted; the same fix as Oklahoma's sync. Then 49 rows tagged (two, `rent-payment` and `smoking-policy`, had SD and OH notes added since the base and were merged onto the current rows) and 114 new. Merged after the SD retro. Library 2,699 rows; NM 163 active (71 lease clauses, 92 education); no same-topic pairs; every other state's set unchanged. All seven rule 27 topics and every topic most states carry have NM rows.
- **Guards:** `check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py` and `checkConfigIds.js` all pass.
- **Statute spot-check, 5 of 5, against the enrolled 2025 N.M. Laws ch. 122 (SB 267) on nmlegis.gov,** since nmonesource.com refuses Claude Code's tools (403): NMSA 1978, § 47-8-15(D) (late fee only if the agreement provides for it, at most 5% of the rent for each period in default, calculated only on rent, notice by the last day of the next rental period) matches `late-fee-nm`; § 47-8-15(E) matches `edu-guest-fees-nm`; § 47-8-15(F) matches `edu-rent-increase-notice-nm`; § 47-8-15(G) matches `edu-payment-allocation-nm`; the new screening-fee section ($50, written or digital notice and written agreement, the hold-or-wait rule, no other application fee) matches `edu-screening-fee-nm`.
- **Citations file** `lease-clause-citations-NM.csv`: 163 rows (135 cited, 21 confirmed-absent, 7 generic clauses).
- **Legal watch:** NM config (bare quoted section numbers, since bills amend "Section 47-8-18 NMSA 1978"; ranges skipped; lead CFR and 42 U.S.C. § 4852d) with manual recheck items for the court rules and forms, the deposit-interest rate, the stale cross-references (§10 item 5) and the administrative rules. New Mexico is state #30, so it runs on day 2 at 14:00 UTC. `legal-watch-nm.yml` is held until after 2027-03-02; first run 2027-04-02.
- **PARTIAL review:** none; every NM row is VERIFIED.
- **Variables:** new `{{utility_bill_copy_fee}}` added to backlog M.14; NM added to `{{nsf_fee}}`'s row.
- **Topic questions:** all seven added; reference regenerated.
- **SOP 1.26:** all five proposals adopted (rules 19, 53, 56); NM column added.

## Circle-back checks (SOP 1.47), 2026-10-03

**Date:** 2026-10-03 · **Inputs:** the files attached for this task are the only source of truth (rule 8): `lease-clauses.csv` (2,876 rows, matching the staging note), `lease-clause-sop.md` 1.47, `lease-clause-topics.md`, `lease-clause-decision-log-NM.md` (now including Claude Code's sync section) and `lease-clause-citations-NM.csv`. Where they differ from what was said earlier in this chat (for example `default-by-tenant` now also tags MT and carries `last_checked` 2026-10-03), the attached files govern. The old output files from the first pass (`lease-clauses-NM-delta.csv`, `lease-clause-decision-log-NM.md`) were deleted from the workspace before starting. NM has 163 active rows in the attached library, as delivered. Statutes were read section-open from the saved, hash-matched NMSA 1978 2026 compilation (NM log §1; corpus sha256 0874a066…). Research mode was not used: none of the rule 9 triggers applied.

**[Retro] rules:** the staging prompt lists none for NM in this pass, so none were run (rule 1: no re-audit).

**Targeted fix 1 — rule 62 vetting, `default-by-tenant` (MN's proposal; ND and CA support): move the no-cure carve-out ('except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure') out of the non-rent limb into its own sentence reaching both limbs.** Verdict: **vouched, no change needed** for New Mexico. Read: NMSA 1978, § 47-8-33(A)-(I), § 47-8-34(C), § 47-8-3(A), § 47-8-16; NM's own note segment on the row. Rows changed: none.
- *Can it be read to drop a cure or pre-suit notice New Mexico requires for nonpayment?* No. For unpaid rent the owner must give written notice of nonpayment and of the intention to terminate, and tender of the full amount, in the manner the notice states, before the three days run bars any action for nonpayment (§ 47-8-33(D)). No New Mexico provision lets an owner terminate for nonpayment without that notice and tender, so the self-limiting carve-out never reaches it. The post-judgment three-day remedy in a disputed-amount case (§ 47-8-33(E), where rent was abated or allocated to damages) is a condition the court puts on the writ; the carve-out cannot displace it, and no rental agreement may waive it (§ 47-8-16). The weekend extension of a cure period (§ 47-8-33(H)) is untouched.
- *Does it change what the clause promises in New Mexico?* No, in substance. NM's note segment records that 'the rent limb has no no-cure ground in New Mexico, so the carve-out need not reach it'; it says nothing was given up or kept on purpose. The only New Mexico route by which an owner regains possession for a rent default without the § 47-8-33(D) notice is statutory abandonment (absence without notice for more than seven continuous days after rent is delinquent, § 47-8-3(A); immediate possession, § 47-8-34(C)). If the moved carve-out is read to reach that case, it only aligns the clause with the statute (Claude's reading; no case searched). The non-rent limb is unchanged: the carve-out still covers New Mexico's two no-cure grounds, a second material noncompliance within six months (§ 47-8-33(B)) and a substantial violation (§ 47-8-33(I)), and each still needs the written notice the statute prescribes.
- *If the edit is adopted at sync:* one sentence of NM's note segment would read better as 'The carve-out reaches both limbs; in New Mexico it can touch the rent limb only on statutory abandonment (NMSA 1978, §§ 47-8-3(A), 47-8-34(C)), and never the three-day notice and tender right (NMSA 1978, § 47-8-33(D)).' in place of 'The rent limb has no no-cure ground in New Mexico, so the carve-out need not reach it (rule 43).' This is optional; the current sentence stays accurate either way.

### Vouches given
(Rule 62: for NM log §9, Propagation notes.)
- `default-by-tenant`, carve-out moved into its own sentence reaching both limbs (MN proposal, 2026-10-02): vouched for New Mexico, no change needed (NMSA 1978, § 47-8-33(B), (D), (E), (I); § 47-8-34(C)).

**Retro delta:** none. No NM row or NM note segment changed, so `lease-clauses-NM-retro-delta.csv` was not produced.

### Proposed SOP changes
None.

## Circle-back sync (Claude Code, 2026-10-03)

- **No delta:** the pass changed no rows, as it reported. NM active 163, unchanged.
- **Rule 62:** NM vouched for MN's no-cure-sentence edit to `default-by-tenant`; recorded in the backlog tally and under §9 "Vouches given". NM's optional rewording of its own note sentence is held in the backlog item for that merge, beside IN's pre-written changes.
- **Guards:** all pass. **Statute spot-check:** not possible from here (nmonesource.com blocks command-line tools, as at NM's first sync); the pass read §§ 47-8-3, 47-8-16, 47-8-33 and 47-8-34 from its saved, hash-matched NMSA 1978 compilation.
- **SOP:** no proposals.

## Propagated shared-row edit, 2026-10-04 (at the NY circle-back sync)

- `default-by-tenant`: MN's proposal merged once every state tagged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY) had vetted it, NY last. The no-cure carve-out moved out of the non-rent limb into its own sentence reaching both limbs, in the wording already merged on `default-by-tenant-ks-ne`: "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." It is self-limiting, so it reaches a breach only where NM law lets Landlord proceed without a cure opportunity. Uniform; no NM override. NM's optional rewording of its own note segment on the row was applied.
