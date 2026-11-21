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

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for NM. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any NM row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach NM's law; to be confirmed at NM's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.

## Shared edit from ID: parking tag charge (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12, merged centrally (rule 62: it only narrows what Landlord may charge). `parking-vehicle-rules-id` no longer lets Landlord charge "the cost" of tags, decals and access cards; the Lease now states the prices (one "$[amount; enter $0 if there is no charge]" for each tag, decal or access device issued, including cards, fobs and garage or gate remotes, and a separate one for each lost, damaged or unreturned) and Landlord charges nothing else for them. The reason is Idaho Code § 55-305(2)(a) (no amount above the one agreed in the lease). In New Mexico this fits the 2025 rule that a fee not included in the lease may not be charged (`edu-fee-transparency-nm`); a landlord who charges should list the amount in `fees-and-charges-nm` too. The fixed amount leaves the 60-day fee-increase notice untouched (`edu-fee-increase-notice-nm`), and this row's NM note rests on the towing statutes, which the edit doesn't touch. It still applies as written in New Mexico.

## Federal row: HUD assistance-animal enforcement change (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: the assistance-animal clause stays as written (an animal a tenant needs for a disability, trained or not, is an accommodation, not a pet), and a new federal education row, `edu-assistance-animals-federal-enforcement`, is tagged here and in every jurisdiction but CO. It explains HUD's September 17, 2025 withdrawal of its assistance-animal guidance (91 Fed. Reg. 17291) and FHEO's May 22, 2026 memorandum limiting Fair Housing Act charges to trained animals, and what neither changes: the Act, 24 C.F.R. § 100.204, private suits, Section 504 and ADA complaints, and state law. No clause text changed.

## Federal rows: foreclosure tenants, screening-report notice, voucher leases (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12 (Ohio gaps product item P1): three federal education rows are tagged here and in every jurisdiction, each read from the official federal text: `edu-ptfa-foreclosure-tenants` (Protecting Tenants at Foreclosure Act, 12 U.S.C. § 5220 note), `edu-fcra-adverse-action-notice` (Fair Credit Reporting Act adverse-action notice, 15 U.S.C. § 1681m) and `edu-voucher-tenancy-addendum` (Housing Choice Voucher lease and termination rules, 24 C.F.R. §§ 982.308, 982.310). This state's existing rows on these laws stay; no clause text changed.

## NM topic gaps: end-of-run consistency pass (2026-11-14)

Pass run 2026-11-14 in NM's chat, on the files staged 2026-11-14 from a8e570d (214 missing topics). This log is appended to `lease-clause-decision-log-NM.md` at sync. Pointers in rows read "NM gaps log §N"; they refer to the sections below.


**Pass:** New Mexico topic gaps, end-of-run consistency pass (SOP 2.11). **Staged** 2026-11-14 01:06; **run** 2026-11-14. **Settings:** Opus, high effort; research mode not used (none of rule 9's triggers needed it: the whole NMSA, Constitution and session laws were searched locally). **Scope fence:** rows added only; no existing NM or shared row's text changed; existing shared rows tagged NM only where they state New Mexico law as written; defects in existing rows are reported in §6, not fixed. Canvass run in slices by helper agents (at most two at a time, each saving after every topic), assembled and validated by the main pass.

**Topics answered: 214 of 214 listed.** Rows: 225 new, 18 existing rows tagged NM.

### §1 Sources, channel and currency

**Inputs (Step A, passed 2026-11-14).** `lease-clauses.csv` decompressed from `lease-clauses.csv.xz`: 70,496,025 bytes, SHA-256 `309ca495892bd4ef388ed3efc1564c8863c15acfc405d3c0bf9874830c4aff3b`, 17,991 rows (17,879 active), 168 active rows carrying NM; `missing-topics-NM.md` lists 214 topics. The outputs folder held no earlier CSV, log or checklist copies, so nothing was deleted. This chat's earlier New Mexico history (the 2026-10-02 pass and the 2026-10-03 retro check) is background only; the attached files govern.

**Channel.** This session's shell could not reach nmonesource.com, nmlegis.gov, srca.nm.gov, uscode.house.gov or ecfr.gov (the egress proxy refused each connection; it was not a bot block). So the pass used the corpus `corpus-NM-20261114` for everything it holds (rule 24): both parts unpacked into one folder; every file re-hashed against its manifest (`verify_nm.py`: ok=322, mismatches 0, missing 0).
- **Cross-check against the October read (rule 24, in place of five browser re-fetches).** The 2026-10-02 pass loaded all 84 NMSA chapter PDFs from nmonesource.com in the built-in browser and saved the text (`nm-nmsa-2026-corpus.json`, SHA-256 `0874a066…`, unchanged since, staged from Taylor's Downloads folder). Comparing every section's text letter by letter (case and punctuation ignored): 31,062 of the corpus's 31,414 section entries match the October text exactly; 301 have no parsed October counterpart (repealed-range and reserved entries); 51 differ, all tables, rate schedules and forms where the two PDF converters lay out columns differently. Seven of the 51 are named in delivered rows, almost all as off-point hits in a battery's hit list: NMSA 1978, § 7-2-14, NMSA 1978, § 7-2-18, NMSA 1978, § 7-2-18.32, NMSA 1978, § 7-2A-28.1, NMSA 1978, § 11-13-2, NMSA 1978, § 55-9-102 and NMSA 1978, § 55-9-521. Each was diffed word by word against the October text: every difference is a table or form whose cells the two converters read in a different order, or the catchline, annotation or official comment that the October capture keeps in the section and the corpus files separately; no word of operative text differs. Article 47-8 matches section for section (57 of 57 live sections).
- **Court rules (not in the corpus).** The NMRA Rules 1-, 2-, 3- and Forms 4- were read from the October pass's browser capture of nmonesource.com (`nm-nmra-rules-1-2-3-4.json`, 4,655,415 bytes, SHA-256 `6b3fb9c9286ce7497377f39b983cbcfe3eaed45e8bb065eefa3090b9224c2eba`, saved 2026-10-02 and staged from Taylor's Downloads folder with his standing approval). nmonesource.com showed Claude Code a CAPTCHA on 2026-11-14 and this session's shell can't reach it, so a re-read was not possible; rows citing a court rule say "read 2026-10-02". No bot block was met in this session, so nothing was asked of Taylor.
- **Federal law.** uscode.house.gov and ecfr.gov were approved but not reachable from this session's tools; no row states federal law beyond the federal rows already tagged NM (class decision 12).
- **Corpus tools.** The pass's loader (`nmcorpus.py`) indexes the NMSA by entry, keeping both versions of the 32 two-version section numbers, and splits the Constitution by article and section, the session laws by act section (bill line numbers and page tags stripped), the 57 NMAC parts by section and the NMRA by rule. It prints the six file groups it loads and refuses to run if one is empty. It rejoins 5,447 catchlines that the corpus's own splitter leaves wrapping into the first body line (for example § 39-1-16 "[Contracts providing for confession of judgment before cause of action accrues prohibited.]"), so a heading-only match is not miscounted as a body hit.

**Currency (rule 16).** The 2026 NMSA compilation is current through the 2026 regular session (adjourned February 19, 2026); there has been no session since. The corpus README says 308 section versions print a 2026 history line and 61 of the session's 71 chapters appear in history lines; the other ten are appropriation, bond, capital and fund acts and three acts touching no landlord-tenant law. Every battery ran over the session laws of all four sessions as well as the compilation (default scope), so a 2025 or 2026 act touching a battery's subject shows up as a hit. Every section a delivered row cites was overlaid on the 2025 and 2026 acts by script (an "is amended to read" or "new material" line naming the section): see the overlay result below. Effective dates: an act without an effective-date clause took effect ninety days after adjournment (June 20, 2025 for the 2025 regular session; May 20, 2026 for the 2026 session); 2026 N.M. Laws ch. 62, § 6 sets July 1, 2026 for § 47-16-18.

**Earlier New Mexico log.** `lease-clause-decision-log-NM.md` (the log items cite as "NM log §N") arrived mid-pass on 2026-11-14 at 12:18 (SHA-256 `9049f243…`). Until then the canvass used the copy attached to this chat on 2026-10-03, which lacked the sections after the 2026-10-03 retro. The two copies' §6.1 and §18.2 (the October answers and leads this pass relied on) are identical by diff; the later copy adds the 2026-10-03 to 2026-11-12 sync sections (the `default-by-tenant` merge, the 2026-10-04 cross-state decisions, the parking-tag edit and the federal rows), which agree with what slices A and B and the main pass used. No delivered row conflicts with them (rows in later batches used the later copy).

**Currency overlay result (`overlay.py`, run 2026-11-14).** The rows and NM tag segments, as delivered, name 1,488 NMSA sections (counting sections that appear only in battery hit lists). All 1,488 are in the corpus. 91 carry a 2025 or 2026 history line or are named in an act section that says the section "is amended" or "is repealed". For every one of the 91, the amending act is reflected in the compiled history line, so the compiled text is the amended text. No cited section is amended in an act and not recompiled. Three cited numbers have two compiled versions: NMSA 1978, § 7-2F-2, NMSA 1978, § 66-6-23 and NMSA 1978, § 32A-11-1. None is relied on for a landlord rule; each appears in battery hit lists or as off-point context. The amended landlord-tenant sections are NMSA 1978, § 47-8-3, NMSA 1978, § 47-8-15 and NMSA 1978, § 47-8-48 (2025 N.M. Laws ch. 122, §§ 1, 6, 7), NMSA 1978, § 57-12-2 (2025 N.M. Laws ch. 122, § 8) and NMSA 1978, § 47-16-18 (2026 N.M. Laws ch. 62, § 4, effective July 1, 2026). The rows quote these sections as amended. The full table is in `overlay-report.txt`, kept with the pass's working files.

### §2 Topics answered

One line per topic: topic | row id(s) | verdict | citation. "Tagged" means an existing shared row now carries NM.

| Topic | Row(s) | Verdict | Citation |
|---|---|---|---|
| `accessory-dwelling-unit` | `edu-no-adu-statute-nm` | Confirmed absent | NMSA 1978, § 3-21-1(F) |
| `actual-notice-method` | `edu-actual-notice-method-nm` | Present | NMSA 1978, § 47-8-13(A) |
| `adverse-proceeding-notice` | `edu-no-adverse-proceeding-notice-nm` | Confirmed absent | NMSA 1978, § 47-10-5(D) |
| `alarm-tampering-fee` | `detector-care-la` (tagged); `edu-alarm-tampering-fee-nm` | Confirmed absent; Tagged | NMSA 1978, § 47-8-22(E); NMSA 1978, § 47-8-22(F) |
| `alt-housing` | `edu-no-alt-housing-duty-nm` | Confirmed absent | NMSA 1978, § 47-8-27.1(A) |
| `animal-care-access` | `edu-animal-care-access-nm`; `animal-care-access-vi` (tagged) | Confirmed absent; Tagged | NMSA 1978, § 47-8-24(A); NMSA 1978, § 69-36-7 |
| `appliances-excluded` | `edu-appliances-excluded-nm`; `appliances-excluded-nm` | Present | NMSA 1978, § 47-8-20(A)(4); NMSA 1978, § 30-8-9 |
| `asbestos-hazards` | `edu-no-asbestos-rule-nm` | Confirmed absent | NMSA 1978, § 52-3-10 |
| `association-obligations-disclosure` | `edu-no-association-disclosure-nm` | Confirmed absent | NMSA 1978, § 5-9-6 |
| `automatic-renewal` | `automatic-renewal-nm`; `edu-no-automatic-renewal-rule-nm` | Confirmed absent; Present | NMSA 1978, § 47-8-14 |
| `balcony-inspection` | `edu-no-balcony-inspection-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-20(A)(2) |
| `bed-bug-cooperation` | `edu-no-bed-bug-cooperation-rule-nm`; `pest-cooperation-nm` | Confirmed absent; Present | NMSA 1978, § 47-8-20(A)(1); NMSA 1978, § 77-15-4 |
| `binding-arbitration` | `edu-binding-arbitration-nm` | Present | NMSA 1978, § 44-7A-7(a) |
| `carpet-cleaning` | `carpet-cleaning-nm`; `edu-no-carpet-cleaning-rule-nm` | Confirmed absent; Present | NMSA 1978, § 47-8-22(B) |
| `casualty-and-mitigation-waivable` | `edu-casualty-and-mitigation-waivable-nm` | Present | NMSA 1978, § 47-8-31(A) |
| `certificate-of-occupancy-disclosure` | `edu-certificate-of-occupancy-nm` | Present | NMSA 1978, § 60-13-45(C) |
| `children-occupancy` | `edu-children-occupancy-nm` | Confirmed absent | NMSA 1978, § 28-1-7(G) |
| `cold-weather-vacate-notice` | `edu-no-cold-weather-vacate-notice-nm` | Confirmed absent | NMSA 1978, § 47-8-34(A) |
| `collection-fee` | `edu-collection-fee-nm` | Not located | NMSA 1978, § 61-18A-4(A) |
| `common-area-lighting` | `edu-common-area-lighting-nm`; `common-area-lighting-ks` (tagged) | Confirmed absent; Tagged | NMSA 1978, § 47-8-20(A)(3) |
| `communal-land-lease-approval` | `edu-communal-land-lease-approval-nm` | Present | NMSA 1978, § 49-1-3(C) |
| `condemned-premises-rent-bar` | `edu-no-condemned-rent-bar-nm` | Confirmed absent | NMSA 1978, § 47-8-27.2(A)(2) |
| `confession-of-judgment` | `edu-confession-of-judgment-nm` | Present | NMSA 1978, § 39-1-16 |
| `confirmed-absences-habitability` | `edu-confirmed-absences-habitability-nm` | Confirmed absent | NMSA 1978, § 72-14-28 |
| `confirmed-absences-misc` | `edu-confirmed-absences-misc-nm` | Confirmed absent | NMSA 1978, § 1-19-32 |
| `confirmed-absences-outside-title` | `edu-confirmed-absences-outside-title-nm` | Confirmed absent | NMSA 1978, § 53-19-53(A) |
| `construction-liens` | `edu-construction-liens-nm`; `no-liens-ar` (tagged) | Present; Tagged | NMSA 1978, § 48-2-2 |
| `defective-drywall-disclosure` | `edu-no-drywall-disclosure-nm` | Confirmed absent | NMSA 1978, § 47-8-20(A)(1) |
| `deposit-cost-schedule` | `edu-no-deposit-cost-schedule-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-18(C) |
| `deposit-installments` | `edu-no-deposit-installments-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-18(A) |
| `deposit-surrender-notice` | `edu-no-deposit-surrender-notice-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-18(C) |
| `designated-repairer` | `edu-no-designated-repairer-rule-nm`; `designated-repairer-nm` | Confirmed absent; Present | NMSA 1978, § 47-8-20(E); NMSA 1978, § 60-13-6 |
| `disability-accommodation` | `edu-disability-accommodation-nm` | Confirmed absent | NMSA 1978, § 28-1-7(G)(1) |
| `disaster-displaced-guests` | `edu-no-disaster-guest-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-15(E) |
| `disaster-duties` | `edu-disaster-duties-nm` | Confirmed absent | NMSA 1978, § 47-8-31(A)(1) |
| `double-letting` | `edu-no-double-letting-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-26(A) |
| `drug-free-housing-addendum` | `edu-no-drug-free-addendum-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-3(V)(1) |
| `dv-confidentiality` | `edu-no-dv-confidentiality-rule-nm` | Confirmed absent | NMSA 1978, § 40-13B-8(A) |
| `dv-deposit-timing` | `edu-no-dv-deposit-timing-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-18(C) |
| `dv-lockchange` | `edu-no-dv-lockchange-rule-nm` | Confirmed absent | NMSA 1978, § 40-13-5(B)(1) |
| `dv-protection-order-chapter-moved` | `edu-dv-law-citations-nm` | Present | NMSA 1978, § 40-13-1 |
| `dv-qualifying-documents` | `edu-dv-qualifying-documents-nm` | Present | NMSA 1978, § 47-8-33(J) |
| `electric-submetering-disclosure` | `edu-electric-submetering-nm` | Present | NMSA 1978, § 62-3-4(A)(1) |
| `emergency-contact` | `edu-emergency-contact-nm`; `emergency-contact-co` (tagged) | Confirmed absent; Tagged | NMSA 1978, § 47-8-19(A); NMSA 1978, § 6-21-23 |
| `eminent-domain` | `edu-eminent-domain-nm`; `eminent-domain-nm` | Present | N.M. Const. art. II, § 20; NMSA 1978, § 47-8-14 |
| `employee-screening` | `edu-no-employee-screening-rule-nm` | Confirmed absent | NMSA 1978, § 28-2-3.1(A) |
| `energy-data-release` | `edu-no-energy-data-release-nm`; `energy-data-release-wy` (tagged) | Confirmed absent; Tagged | 17.5.410.25 NMAC |
| `entity-landlord-court-representation` | `edu-entity-landlord-court-representation-nm` | Present | Rule 2-107 NMRA |
| `environmental-event-termination` | `edu-no-environmental-event-termination-nm` | Confirmed absent | NMSA 1978, § 47-8-31(A) |
| `ev-charging-end-of-tenancy` | `edu-no-ev-charging-end-of-tenancy-nm` | Confirmed absent | NMSA 1978, § 47-8-22(B) |
| `ev-charging-requirements` | `edu-ev-charging-requirements-nm` | Confirmed absent | 14.7.6.12 NMAC |
| `ev-charging-shared-area` | `edu-no-ev-charging-shared-area-nm` | Confirmed absent | NMSA 1978, § 47-8-20(A)(3) |
| `eviction-hardship-stay` | `edu-no-eviction-hardship-stay-nm` | Confirmed absent | NMSA 1978, § 47-8-43(B) |
| `eviction-penalty-clause-ban` | `edu-no-eviction-penalty-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-26 |
| `eviction-service-party` | `edu-eviction-service-party-nm` | Present | NMSA 1978, § 47-8-43(A) |
| `exculpatory-clauses` | `edu-exculpatory-clauses-nm` | Present | NMSA 1978, § 47-8-16 |
| `expedited-deposit-disposition` | `edu-no-expedited-deposit-disposition-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-18(C) |
| `family-child-care` | `edu-family-child-care-nm` | Confirmed absent | NMSA 1978, § 47-16-18 |
| `farmland-hunting-rights` | `edu-farmland-hunting-rights-nm` | Confirmed absent | NMSA 1978, § 17-1-5.1 |
| `fee-in-lieu-of-deposit` | `edu-no-fee-in-lieu-of-deposit-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-3(F) |
| `fee-unprovided-service` | `edu-fee-unprovided-service-nm` | Confirmed absent | NMSA 1978, § 57-12-2(D) |
| `fire-code-standard` | `edu-fire-code-standard-nm` | Present | NMSA 1978, § 47-8-20(A)(1) |
| `fire-sprinkler-duty` | `edu-fire-sprinkler-duty-nm` | Present | NMSA 1978, § 60-13-6(E) |
| `foreclosure-disclosure` | `edu-no-foreclosure-disclosure-nm` | Confirmed absent | NMSA 1978, § 58-21A-4 |
| `forfeiture-redemption` | `edu-forfeiture-redemption-nm` | Present | NMSA 1978, § 47-8-33(E) |
| `frozen-standard-incorporation` | `edu-code-editions-nm` | Present | NMSA 1978, § 47-8-3(E) |
| `furnishings-included` | `furnishings-included-la` (tagged) | Tagged | NMSA 1978, § 50-4-21 |
| `good-cause-notice` | `edu-no-good-cause-notice-nm` | Confirmed absent | NMSA 1978, § 47-8-43(B) |
| `government-fee-reimbursement` | `edu-government-fee-reimbursement-nm` | Confirmed absent | NMSA 1978, § 57-12-27(C) |
| `governmental-fines` | `tenant-caused-fines-as` (tagged); `edu-governmental-fines-nm` | Confirmed absent; Tagged | NMSA 1978, § 47-8-14 |
| `guarantor-renewal` | `guaranty-as` (tagged); `edu-guarantor-renewal-nm` | Confirmed absent; Tagged | NMSA 1978, § 47-8-3(D) |
| `habitability-materiality` | `edu-habitability-materiality-nm` | Present | NMSA 1978, § 47-8-20(A)(1) |
| `habitability-modifiable` | `edu-habitability-modifiable-nm` | Present | NMSA 1978, § 47-8-20(C) |
| `habitability-presumption` | `edu-no-habitability-presumption-nm` | Confirmed absent | NMSA 1978, § 50-17-10 |
| `habitability-statement` | `edu-no-habitability-statement-nm` | Confirmed absent | NMSA 1978, § 47-8-20(A)(1) |
| `habitability-waiver` | `edu-habitability-waiver-nm` | Present | NMSA 1978, § 47-8-16 |
| `hazardous-contamination-disclosure` | `edu-no-contamination-disclosure-nm` | Confirmed absent | NMSA 1978, § 11-9A-2 |
| `health-district-rental-rules` | `edu-no-health-district-rental-rules-nm` | Confirmed absent | NMSA 1978, § 24-1-4(A) |
| `heating` | `edu-heating-nm`; `heat-freeze-protection-nm` | Present | 14.9.2 NMAC; NMSA 1978, § 47-8-22(E) |
| `hoa` | `edu-hoa-nm` | Present | NMSA 1978, § 3-45-13 |
| `home-business` | `edu-home-business-nm`; `home-business-permission-nm` | Confirmed absent; Present | NMSA 1978, § 21-1-1; NMSA 1978, § 47-8-25 |
| `homestead-waiver` | `edu-homestead-waiver-nm` | Present | NMSA 1978, § 42-10-1(A) |
| `infirmity-termination` | `edu-no-infirmity-termination-nm` | Confirmed absent | NMSA 1978, § 47-8-36 |
| `informal-dispute-resolution` | `informal-dispute-resolution-or` (tagged); `edu-informal-dispute-resolution-nm` | Confirmed absent; Tagged | NMSA 1978, § 47-8-7 |
| `inspection-condemnation-disclosure` | `edu-condemnation-disclosure-nm` | Present | NMSA 1978, § 47-10-5(D) |
| `inspection-notice-penalty` | `edu-no-inspection-notice-penalty-nm` | Confirmed absent | NMSA 1978, § 47-8-18(C) |
| `jury-waiver` | `edu-jury-waiver-nm` | Present | NMSA 1978, § 47-8-16 |
| `key-control-policy` | `edu-no-key-control-rule-nm`; `lock-change-ak` (tagged) | Confirmed absent; Tagged | NMSA 1978, § 47-8-24(A)(1); NMSA 1978, § 30-14-2 |
| `knowing-use-penalty` | `edu-knowing-use-penalty-nm` | Present | NMSA 1978, § 47-8-17 |
| `landlord-breach-remedy` | `edu-landlord-breach-remedy-nm` | Present | NMSA 1978, § 47-8-27.1(A) |
| `landlord-liability-insurance` | `edu-no-landlord-insurance-mandate-nm` | Confirmed absent | NMSA 1978, § 47-8-20(B) |
| `landlord-registration` | `edu-no-landlord-registration-rule-nm` | Confirmed absent | NMSA 1978, § 3-38-3(A) |
| `landlord-remedies-termination` | `edu-landlord-remedies-termination-nm` | Present | NMSA 1978, § 47-8-35 |
| `late-fee-limit` | `edu-late-fee-limit-nm` | Present | NMSA 1978, § 47-8-15(D) |
| `law-enforcement-cooperation` | `edu-no-law-enforcement-cooperation-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-24(B) |
| `lead-safe-certification` | `edu-no-lead-safe-certification-nm` | Confirmed absent | 2025 N.M. Laws ch. 158, § 241 |
| `lead-state-notices` | `edu-no-lead-state-notices-nm` | Confirmed absent | 2025 N.M. Laws ch. 158, § 241 |
| `lease-notice-initial-requirement` | `edu-no-lease-initials-requirement-nm` | Confirmed absent | NMSA 1978, § 47-8-20(D)(1) |
| `lease-registration` | `edu-lease-registration-nm` | Present | NMSA 1978, § 14-9-1 |
| `lease-term-limitation` | `edu-lease-term-limits-nm` | Present | NMSA 1978, § 40-3-13(A) |
| `lease-type-parity` | `edu-no-lease-type-parity-nm` | Confirmed absent | NMSA 1978, § 47-8-15(C) |
| `lease-type-size` | `edu-no-lease-type-size-nm` | Confirmed absent | NMSA 1978, § 47-8-12(A) |
| `limitation-of-actions` | `edu-limitation-of-actions-nm` | Present | NMSA 1978, § 37-1-3(A) |
| `liquidated-damages` | `edu-no-liquidated-damages-rule-nm` | Confirmed absent | NMSA 1978, § 13-1-170 |
| `lockout-for-rent-delinquency` | `edu-no-lockout-for-rent-nm` | Present | NMSA 1978, § 47-8-36(A) |
| `maintenance-duty-shift` | `edu-maintenance-duty-shift-nm` | Present | NMSA 1978, § 47-8-20(C) |
| `meter-conservation-charge` | `edu-no-meter-conservation-charge-nm` | Confirmed absent | NMSA 1978, § 4-55D-2(F)(1) |
| `military-air-zone-disclosure` | `edu-no-military-zone-disclosure-nm` | Confirmed absent | NMSA 1978, § 17-3-4 |
| `minor-tenant-filing` | `edu-minor-tenant-filing-nm` | Present | NMSA 1978, § 28-6-1(A) |
| `nonrefundable-deposit-notice` | `edu-no-nonrefundable-deposits-nm` | Confirmed absent | NMSA 1978, § 47-8-3(F) |
| `nonrefundable-deposit-separate-notice` | `edu-no-nonrefundable-separate-notice-rule-nm` | Confirmed absent | NMSA 1978, § 57-12-27(C) |
| `notice-service-fee` | `edu-notice-service-fee-nm` | Confirmed absent | NMSA 1978, § 47-8-48(A) |
| `notice-to-quit-waiver` | `edu-notice-to-quit-waiver-nm` | Present | NMSA 1978, § 47-8-16 |
| `notice-to-vacate-additional-terms` | `edu-no-notice-to-vacate-terms-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-36(A) |
| `optional-lease-terms` | `edu-optional-lease-terms-nm` | Present | NMSA 1978, § 47-8-14 |
| `ordnance-demolition-meter-disclosures` | `edu-no-ordnance-demolition-meter-disclosure-nm` | Confirmed absent | 2026 N.M. Laws ch. 67 |
| `other-landlord-facilities` | `edu-other-landlord-facilities-nm` | Present | NMSA 1978, § 47-8-20(A)(3) |
| `owner-move-in-reservation` | `owner-occupancy-termination-ar` (tagged); `edu-owner-move-in-nm` | Confirmed absent; Tagged | NMSA 1978, § 47-8-14 |
| `parking-rules-notice` | `edu-parking-rules-notice-nm` | Present | NMSA 1978, § 47-8-23(A) |
| `part5-nonwaivable` | `edu-part5-nonwaivable-nm` | Present | NMSA 1978, § 47-8-16 |
| `periodic-services-entry` | `edu-periodic-services-entry-nm` | Present | NMSA 1978, § 47-8-24(A) |
| `pest-control-notice` | `edu-pest-control-notice-nm` | Not located | NMSA 1978, § 76-4-9 |
| `pet-eviction-fact-sheet` | `edu-no-pet-eviction-fact-sheet-nm` | Confirmed absent | NMSA 1978, § 47-8-34.1(A)(1) |
| `plain-language-consumer-statement` | `edu-no-plain-language-consumer-statement-nm` | Confirmed absent | NMSA 1978, § 47-8-19.1 |
| `political-access` | `edu-no-political-access-rule-nm` | Confirmed absent | N.M. Const. art. II, § 17 |
| `pool-safety` | `edu-pool-safety-nm` | Not located | 14.7.3.25 NMAC |
| `portable-cooling-device` | `edu-no-portable-cooling-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-20(A)(4) |
| `portable-solar` | `edu-no-portable-solar-right-nm` | Confirmed absent | NMSA 1978, § 3-18-32(B) |
| `portfolio-thresholds` | `edu-portfolio-thresholds-nm` | Present | NMSA 1978, § 47-8-9(A) |
| `possession-bond` | `edu-no-possession-bond-nm` | Confirmed absent | NMSA 1978, § 47-8-47(B) |
| `private-well-testing` | `edu-no-well-testing-rule-nm` | Confirmed absent | NMSA 1978, § 19-10-4.1 |
| `prohibited-acts-renter` | `edu-prohibited-acts-renter-nm`; `prohibited-acts-renter-wy` (tagged) | Present; Tagged | NMSA 1978, § 47-8-22; NMSA 1978, § 47-8-22(F) |
| `promises-to-repair` | `edu-promises-to-repair-nm` | Present | NMSA 1978, § 47-8-3(Q) |
| `prop65-rental-warning` | `edu-no-chemical-warning-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-20(A)(2) |
| `property-tax-rent-disclosure` | `edu-no-property-tax-rent-statement-nm` | Confirmed absent | NMSA 1978, § 3-63-13 |
| `protected-class-inquiry-ban` | `edu-protected-class-inquiry-nm` | Present | NMSA 1978, § 28-1-7(G)(3) |
| `purpose-limitation` | `edu-purpose-limitation-nm` | Present | NMSA 1978, § 47-8-25 |
| `recycling-notice` | `edu-no-recycling-notice-nm` | Confirmed absent | NMSA 1978, § 74-13-2(B) |
| `redemption` | `edu-redemption-nm` | Present | NMSA 1978, § 47-8-33(D) |
| `religious-cultural-display` | `edu-no-religious-display-rule-nm` | Confirmed absent | NMSA 1978, § 28-1-7(G)(1) |
| `rent-concession` | `rent-concession-nm`; `edu-rent-concession-nm` | Confirmed absent; Present | NMSA 1978, § 47-8-15(F); NMSA 1978, § 47-8-19.1 |
| `rent-demand-bar` | `edu-no-rent-demand-bar-nm` | Confirmed absent | NMSA 1978, § 47-8-15(A) |
| `rent-escalation` | `edu-rent-escalation-nm` | Present | NMSA 1978, § 47-8-15(A) |
| `rent-installments` | `rent-installments-or` (tagged); `edu-rent-installments-nm` | Present; Tagged | NMSA 1978, § 47-8-15(B) |
| `rent-into-court-counterclaim` | `edu-rent-into-court-counterclaim-nm` | Present | NMSA 1978, § 47-8-30(A) |
| `rent-receipt-anti-waiver` | `edu-no-rent-receipt-anti-waiver-nm`; `edu-full-payment-check-nm` | Confirmed absent; Present | NMSA 1978, § 47-8-3(M)(2); NMSA 1978, § 55-3-311(a) |
| `rent-reporting` | `edu-no-rent-reporting-rule-nm` | Confirmed absent | NMSA 1978, § 56-3-1(A) |
| `renters-insurance-rules` | `edu-no-renters-insurance-rules-nm` | Confirmed absent | NMSA 1978, § 59A-32-20 |
| `repair-cost-termination` | `edu-no-repair-cost-termination-nm` | Confirmed absent | NMSA 1978, § 47-8-40(A) |
| `repair-escrow-exemption-notice` | `edu-no-repair-escrow-exemption-nm` | Confirmed absent | NMSA 1978, § 47-8-9 |
| `repair-notice` | `edu-repair-notice-nm` | Present | NMSA 1978, § 47-8-27.1(A) |
| `required-disclosures` | `edu-required-disclosures-nm` | Present | NMSA 1978, § 6-24-20 |
| `required-fees` | `edu-required-fees-nm` | Present | NMSA 1978, § 57-12-27(C) |
| `rights-responsibilities-guide` | `edu-no-rights-guide-nm` | Confirmed absent | NMSA 1978, § 47-8-20(G) |
| `sanitary-code-variance` | `edu-no-code-variance-notice-nm` | Confirmed absent | 10.25.5.19 NMAC |
| `seasonal-tenancy` | `edu-no-seasonal-tenancy-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-9(D) |
| `security-deposit-nonwaiver` | `edu-security-deposit-nonwaiver-nm` | Present | NMSA 1978, § 47-8-16 |
| `security-deposit-standards` | `edu-no-security-deposit-standards-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-18(A) |
| `senior-housing-work-card` | `edu-no-senior-housing-work-card-nm` | Confirmed absent | NMSA 1978, § 29-17-5(C) |
| `service-animal-denial-penalty` | `edu-service-animal-denial-penalty-nm` | Present | NMSA 1978, § 28-11-3(A)(1) |
| `sex-offender-disclosure` | `edu-no-sex-offender-disclosure-rule-nm` | Confirmed absent | NMSA 1978, § 29-11A-5.1(B)(1) |
| `sfr-occupancy-disclosure` | `edu-no-sfr-occupancy-disclosure-nm` | Confirmed absent | NMSA 1978, § 64-5-3 |
| `shoreline-access-disclosure` | `edu-no-shoreline-disclosure-nm` | Confirmed absent | NMSA 1978, § 74-7A-3 |
| `showing-notice-waiver` | `edu-showing-notice-waiver-nm` | Present | NMSA 1978, § 47-8-24(A) |
| `shutdown-rent-protection` | `edu-no-shutdown-rent-protection-nm` | Confirmed absent | NMSA 1978, § 28-1-7 |
| `single-family-zone-lease-limit` | `edu-no-single-family-zone-lease-limit-nm` | Confirmed absent | NMSA 1978, § 3-21-1(A) |
| `smart-access` | `edu-no-smart-access-rule-nm`; `smart-access-nm` | Confirmed absent; Present | NMSA 1978, § 47-8-24(A); NMSA 1978, § 47-8-14 |
| `smoke-drift-waiver` | `edu-smoke-drift-waiver-nm` | Present | NMSA 1978, § 47-8-16 |
| `social-security-defense` | `edu-no-benefit-delay-defense-nm` | Confirmed absent | NMSA 1978, § 47-8-43(B) |
| `special-district-representation` | `edu-no-special-district-statement-nm` | Confirmed absent | NMSA 1978, § 4-55D-2 |
| `sprinkler-disclosure` | `edu-no-sprinkler-disclosure-nm` | Confirmed absent | NMSA 1978, § 62-14-2 |
| `statutory-caps` | `edu-statutory-caps-nm` | Present | NMSA 1978, § 47-8-18(A)(2) |
| `statutory-early-termination` | `edu-statutory-early-termination-nm` | Present | NMSA 1978, § 47-8-26(B) |
| `steam-radiator-covers` | `edu-no-steam-radiator-cover-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-20(A)(2) |
| `stove-refrigerator` | `edu-no-stove-refrigerator-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-20(A)(4) |
| `student-housing` | `edu-student-housing-nm` | Confirmed absent | NMSA 1978, § 21-28-5 |
| `subsidized-inspection-refusal` | `edu-no-subsidized-inspection-refusal-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-24(A) |
| `subsidy-habitability-proration` | `edu-subsidy-habitability-proration-nm` | Present | NMSA 1978, § 47-8-27.2(C) |
| `subsidy-late-fee` | `edu-subsidy-late-fee-nm` | Confirmed absent | NMSA 1978, § 47-8-15(D) |
| `substandard-property-receivership` | `edu-substandard-property-receivership-nm` | Present | NMSA 1978, § 3-46-43(A) |
| `tax-escalation` | `edu-tax-escalation-nm` | Confirmed absent | NMSA 1978, § 7-9-53 |
| `telecom-access` | `edu-no-telecom-access-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-24(A)(2) |
| `tenancy-at-will` | `edu-tenancy-at-will-nm` | Present | NMSA 1978, § 47-8-15(C) |
| `tenant-bankruptcy` | `edu-tenant-bankruptcy-nm` | Confirmed absent | NMSA 1978, § 47-8-4 |
| `tenant-confidential-information` | `edu-tenant-confidential-information-nm` | Confirmed absent | NMSA 1978, § 57-12C-4 |
| `tenant-display-rights` | `edu-no-tenant-display-rule-nm` | Confirmed absent | N.M. Const. art. II, § 17 |
| `tenant-employee-housing` | `edu-tenant-employee-housing-nm`; `employee-occupancy-conditional-nm` | Present | NMSA 1978, § 47-8-9; NMSA 1978, § 47-8-9(E) |
| `tenant-insurance-claims` | `edu-no-tenant-insurance-claims-rule-nm` | Confirmed absent | NMSA 1978, § 47-8-31(B) |
| `tenant-portal` | `edu-tenant-portal-nm` | Confirmed absent | NMSA 1978, § 47-8-15(B) |
| `tenant-records` | `edu-tenant-records-nm` | Confirmed absent | NMSA 1978, § 47-8-19.2(A)(3) |
| `tenant-right-to-organize` | `edu-tenant-organizing-nm` | Present | NMSA 1978, § 47-8-39(A) |
| `tenant-rights-statement` | `edu-no-tenant-rights-statement-nm` | Confirmed absent | NMSA 1978, § 47-10-14(A)(9) |
| `tpa-exemption-notice` | `edu-no-tpa-exemption-notice-nm` | Confirmed absent | NMSA 1978, § 47-8-9 |
| `tpa-notice` | `edu-no-tpa-notice-nm` | Confirmed absent | NMSA 1978, § 47-7D-12(A) |
| `tpa-sunset` | `edu-no-tpa-sunset-nm` | Confirmed absent | NMSA 1978, § 47-8A-1(A) |
| `translation-duty` | `edu-no-translation-duty-nm` | Confirmed absent | NMSA 1978, § 57-12-21 |
| `trespass-notice` | `edu-trespass-notice-nm` | Present | NMSA 1978, § 30-14-1(A) |
| `truth-in-renting` | `edu-no-truth-in-renting-nm` | Confirmed absent | NMSA 1978, § 47-8-20(G) |
| `unbundled-parking` | `edu-no-unbundled-parking-rule-nm` | Confirmed absent | NMSA 1978, § 57-12-27(C) |
| `usufructuary-lessor` | `edu-usufructuary-lessor-nm` | Confirmed absent | NMSA 1978, § 16-4-14 |
| `utility-allowance-cap` | `edu-no-utility-allowance-cap-nm`; `utility-allowance-cap-co` (tagged) | Confirmed absent; Tagged | NMSA 1978, § 57-12-27(C) |
| `utility-apportionment` | `edu-utility-apportionment-nm` | Present | NMSA 1978, § 47-8-20(F) |
| `utility-deposit-return` | `edu-utility-deposit-return-nm` | Present | NMSA 1978, § 47-8-18(C) |
| `utility-disclosure-attachment` | `edu-no-utility-disclosure-attachment-nm` | Confirmed absent | NMSA 1978, § 57-12-27(C) |
| `utility-disconnection-notice-authorization` | `edu-utility-disconnection-notice-authorization-nm`; `utility-shutoff-notice-authorization-co` (tagged) | Present; Tagged | 17.5.410.33 NMAC |
| `utility-interruption-submeter` | `edu-utility-interruption-submeter-nm` | Present | NMSA 1978, § 47-8-36(A) |
| `utility-landlord-account` | `edu-utility-landlord-account-nm` | Present | 17.5.410.7 NMAC |
| `utility-shutoff-statute` | `edu-utility-shutoff-nm` | Present | 17.5.410 NMAC |
| `utility-transfer` | `edu-no-utility-transfer-rule-nm`; `utility-transfer-nj` (tagged) | Confirmed absent; Tagged | NMSA 1978, § 47-8-36(A)(4) |
| `veterans-incentive` | `edu-no-veterans-incentive-nm` | Confirmed absent | NMSA 1978, § 28-1-7(G)(1) |
| `water-heater-temperature` | `edu-water-heater-temperature-nm` | Not located | 14.8.2 NMAC |
| `waterbed` | `edu-no-waterbed-rule-nm`; `waterbed-mn` (tagged) | Confirmed absent; Tagged | NMSA 1978, § 66-12-7.1 |
| `window-guards` | `edu-no-window-guard-rule-nm` | Confirmed absent | 14.7.3.11 NMAC |
| `written-notice-required` | `edu-written-notice-required-nm` | Present | NMSA 1978, § 47-8-20(G) |

### §3 Batteries

**Method (rule 19).** Batteries ran in `bat.py` over a whitespace-collapsed, quote-folded copy of the corpus, case-insensitive with `.` matching newlines. Default scope: the whole NMSA 1978 (2026 compilation, both versions of every two-version section), the whole Constitution and the whole 2025-2026 session laws; batteries on agency or court topics add the 57 NMAC parts held or the NMRA capture, and say so. A proximity term runs in both word orders at a window of at least 1,200 characters and, in the same run, as a start-anchored section-wide AND. Headings are screened separately and heading-only units listed. Every run carries the nonsense control and a sanity term; every term carries a positive (a real snippet that the tool checks is in the named unit's body, or a synthetic sentence), and the tool refuses to log a run whose positive fails, so no logged battery has a failed positive. The tool prints an INFLECTION line for any `\bword\b` whose inflected forms match units the term misses. Every row's battery citation was pasted from `bat.py cite` (generated from the saved log) and the validator refuses a row whose citation text differs. Before delivery every logged battery was replayed against the corpus (result below).

**Replay result (`bat.py replay`, run 2026-11-14 after the last battery was logged).** All 196 logged batteries were re-run against the corpus: 980 terms, every hit count and hit list identical to the log, 0 mismatches. Battery NMG-G-016 (heating and water-heater temperature), which the slice G helper had saved as a spec but not logged, was logged by the main pass on 2026-11-14 before the replay. Its hits match what the rows citing it had read, and the three rows now print its generated citation (check erratum CHK4-14, CHK4-16 and CHK4-17).

196 batteries logged (980 terms, each with its section-wide AND companion where a proximity term ran). Every battery ran with the nonsense control "zqxjvbwkq" at 0 hits and "\bshall\b" above 0 in every scope group; the tool refuses to log a run whose positive failed.

| Battery | Topic | Scope | Terms (hits) | Positives |
|---|---|---|---|---|
| NMG-A-001 | `habitability-waiver` | nmsa,const,laws | t1 1; t1+AND 3; t2 0; t2+AND 0; t3 2; t3+AND 3; t4 0 | 4 passed |
| NMG-A-002 | `habitability-statement` | nmsa,const,laws | t1 4; t1+AND 4; t2 5; t2+AND 6 | 2 passed |
| NMG-A-003 | `habitability-presumption` | nmsa,const,laws | t1 17; t1+AND 18; t2 1; t2+AND 1 | 2 passed |
| NMG-A-004 | `habitability-materiality` | nmsa,const,laws | t1 8; t1+AND 9; t2 15 | 2 passed |
| NMG-A-005 | `part5-nonwaivable` | nmsa,const,laws | t1 1; t1+AND 2; t2 1 | 2 passed |
| NMG-A-006 | `showing-notice-waiver` | nmsa,const,laws | t1 9; t1+AND 12; t2 6; t2+AND 8 | 2 passed |
| NMG-A-007 | `exculpatory-clauses` | nmsa,const,laws | t1 10; t1+AND 21; t2 1; t2+AND 7 | 3 passed |
| NMG-A-008 | `eviction-penalty-clause-ban` | nmsa,const,laws | t1 0; t2 7; t2+AND 10 | 2 passed |
| NMG-A-009 | `knowing-use-penalty` | nmsa,const,laws | t1 2; t1+AND 2; t2 5; t2+AND 6 | 2 passed |
| NMG-A-010 | `notice-to-quit-waiver` | nmsa,const,laws | t1 2; t1+AND 4; t2 2; t2+AND 2 | 2 passed |
| NMG-A-011 | `homestead-waiver` | nmsa,const,laws | t1 3; t1+AND 5; t2 2; t2+AND 2 | 2 passed |
| NMG-A-012 | `jury-waiver` | nmsa,const,laws,nmra | t1 20; t1+AND 32; t2 13; t2+AND 24 | 3 passed |
| NMG-A-013 | `casualty-and-mitigation-waivable` | nmsa,const,laws | t1 5; t1+AND 6; t2 3; t3 3; t3+AND 7 | 3 passed |
| NMG-A-014 | `liquidated-damages` | nmsa,const,laws | t1 11; t2 0; t2+AND 0; t3 10; t3+AND 12 | 3 passed |
| NMG-A-015 | `landlord-breach-remedy` | nmsa,const,laws | t1 1; t1+AND 2; t2 0; t2+AND 0 | 2 passed |
| NMG-A-016 | `promises-to-repair` | nmsa,const,laws | t1 1; t1+AND 1; t2 0; t2+AND 1 | 2 passed |
| NMG-A-017 | `rent-into-court-counterclaim` | nmsa,const,laws,nmra | t1 10; t1+AND 16; t2 6; t3 10; t3+AND 18 | 3 passed |
| NMG-A-018 | `maintenance-duty-shift` | nmsa,const,laws | t1 4; t1+AND 5; t2 1; t2+AND 1; t3 1; t3+AND 1 | 3 passed |
| NMG-A-019 | `security-deposit-nonwaiver` | nmsa,const,laws | t1 1; t1+AND 1; t2 3; t2+AND 3 | 2 passed |
| NMG-A-020 | `smoke-drift-waiver` | nmsa,const,laws,nmac | t1 2; t1+AND 4; t2 3; t2+AND 3 | 2 passed |
| NMG-B-001 | `deposit-cost-schedule` | nmsa,const,laws | t1 7; t1+AND 10; t2 8; t3 0; t3+AND 1 | 3 passed |
| NMG-B-002 | `deposit-installments` | nmsa,const,laws | t1 12; t1+AND 27; t2 0; t2+AND 0 | 2 passed |
| NMG-B-003 | `security-deposit-standards` | nmsa,const,laws | t1 1; t1+AND 2; t2 0; t2+AND 0; t3 1; t3+AND 1 | 3 passed |
| NMG-B-004 | `fee-in-lieu-of-deposit` | nmsa,const,laws | t1 1; t2 0; t3 5; t3+AND 5; t4 17 | 4 passed |
| NMG-B-005 | `nonrefundable-deposit-notice` | nmsa,const,laws | t1 7; t1+AND 9; t2 0; t2+AND 0; t3 1; t3+AND 1 | 3 passed |
| NMG-B-006 | `deposit-surrender-notice` | nmsa,const,laws | t1 0; t2 0; t2+AND 0; t3 13; t3+AND 14 | 3 passed |
| NMG-B-007 | `expedited-deposit-disposition` | nmsa,const,laws | t1 1; t1+AND 1; t2 0; t3 7; t3+AND 10 | 3 passed |
| NMG-B-008 | `expedited-deposit-disposition` | nmsa,const,laws | t1 1; t1+AND 1; t2 0; t3 7; t3+AND 10 | 3 passed (supersedes NMG-B-007: pattern apostrophes read as a quotation by the notes quote checker; same terms with \x27) |
| NMG-B-009 | `alarm-tampering-fee` | nmsa,const,laws,nmac | t1 1; t1+AND 3; t2 0; t2+AND 2; t3 0 | 3 passed |
| NMG-B-010 | `carpet-cleaning` | nmsa,const,laws | t1 0; t1+AND 0; t2 1; t3 1; t3+AND 3 | 3 passed |
| NMG-B-011 | `collection-fee` | nmsa,const,laws | t1 0; t1+AND 1; t2 1; t2+AND 2 | 2 passed |
| NMG-B-012 | `notice-service-fee` | nmsa,const,laws | t1 7; t1+AND 11; t2 21; t2+AND 27 | 2 passed |
| NMG-B-013 | `governmental-fines` | nmsa,const,laws | t1 18; t1+AND 18; t2 39; t2+AND 69 | 2 passed |
| NMG-B-014 | `government-fee-reimbursement` | nmsa,const,laws | t1 22; t1+AND 35; t2 13; t2+AND 18 | 2 passed |
| NMG-B-015 | `required-fees` | nmsa,const,laws | t1 0; t1+AND 0; t2 15; t2+AND 20; t3 4; t3+AND 4; t4 3; t4+AND 3 | 4 passed |
| NMG-B-016 | `late-fee-limit` | nmsa,const,laws | t1 55; t2 1; t2+AND 1 | 2 passed |
| NMG-B-017 | `subsidy-late-fee` | nmsa,const,laws | t1 1; t1+AND 1; t2 0; t2+AND 0 | 2 passed |
| NMG-B-018 | `tax-escalation` | nmsa,const,laws,nmac | t1 15; t1+AND 18; t2 42; t2+AND 48; t3 4; t3+AND 5 | 3 passed |
| NMG-B-019 | `fee-unprovided-service` | nmsa,const,laws | t1 7; t1+AND 7; t2 2; t3 5; t3+AND 8 | 3 passed |
| NMG-B-020 | `unbundled-parking` | nmsa,const,laws | t1 8; t1+AND 13; t2 2 | 2 passed |
| NMG-C-001 | `rent-receipt-anti-waiver` | nmsa,const,laws | t1 0; t2 11; t2+AND 11; t3 0; t3+AND 0; t4 24; t5 8; t5+AND 24 | 5 passed |
| NMG-C-002 | `rent-installments` | nmsa,const,laws | t1 10; t1+AND 13; t2 0; t2+AND 2; t3 2 | 3 passed |
| NMG-C-003 | `rent-escalation` | nmsa,const,laws | t1 3; t1+AND 4; t2 5; t2+AND 5; t3 9; t3+AND 10 | 3 passed |
| NMG-C-004 | `rent-reporting` | nmsa,const,laws | t1 8; t1+AND 8; t2 0; t3 15; t3+AND 15 | 3 passed |
| NMG-C-005 | `rent-concession` | nmsa,const,laws | t1 6; t1+AND 9; t2 1; t2+AND 1; t3 0; t3+AND 0 | 3 passed |
| NMG-C-006 | `rent-demand-bar` | nmsa,const,laws | t1 0; t1+AND 0; t2 16; t2+AND 20; t3 0 | 3 passed |
| NMG-C-007 | `lockout-for-rent-delinquency` | nmsa,const,laws | t1 2; t1+AND 2; t2 5; t2+AND 5 | 2 passed |
| NMG-C-008 | `truth-in-renting` | nmsa,const,laws | t1 8; t2 3; t2+AND 3; t3 31; t3+AND 39; t4 4; t4+AND 5; t5 18; t5+AND 22 | 5 passed |
| NMG-C-009 | `optional-lease-terms` | nmsa,const,laws | t1 11; t1+AND 12; t2 4; t2+AND 13; t3 5; t3+AND 7 | 3 passed |
| NMG-C-010 | `informal-dispute-resolution` | nmsa,const,laws | t1 13; t1+AND 30; t2 0; t3 1; t3+AND 1 | 3 passed |
| NMG-C-011 | `frozen-standard-incorporation` | nmsa,const,laws,nmac | t1 18; t2 10; t2+AND 10; t3 1; t3+AND 1 | 3 passed |
| NMG-C-012 | `automatic-renewal` | nmsa,const,laws | t1 3; t1+AND 3; t2 4; t2+AND 9; t3 0; t3+AND 0 | 3 passed |
| NMG-C-013 | `lease-term-limitation` | nmsa,const,laws | t1 43; t1+AND 43; t2 4; t3 3; t3+AND 4; t4 0; t4+AND 0; t5 17; t5+AND 28 | 5 passed |
| NMG-C-014 | `guarantor-renewal` | nmsa,const,laws | t1 9; t1+AND 16; t2 0; t3 2; t3+AND 5; t4 2; t4+AND 3 | 4 passed |
| NMG-C-015 | `owner-move-in-reservation` | nmsa,const,laws | t1 0; t1+AND 0; t2 0; t2+AND 0; t3 13; t3+AND 16 | 3 passed |
| NMG-C-016 | `tenancy-at-will` | nmsa,const,laws | t1 2; t2 7; t2+AND 8; t3 6 | 3 passed |
| NMG-C-017 | `seasonal-tenancy` | nmsa,const,laws | t1 6; t1+AND 12; t2 2; t2+AND 2; t3 4 | 3 passed |
| NMG-C-018 | `written-notice-required` | nmsa,const,laws | t1 22; t1+AND 42; t2 18; t3 2 | 3 passed |
| NMG-C-019 | `lease-notice-initial-requirement` | nmsa,const,laws | t1 1; t1+AND 1; t2 6; t2+AND 7 | 2 passed |
| NMG-C-020 | `actual-notice-method` | nmsa,const,laws | t1 9; t1+AND 13; t2 8; t2+AND 17; t3 1; t3+AND 1 | 3 passed |
| NMG-C-021 | `double-letting` | nmsa,const,laws | t1 0; t2 6; t2+AND 7; t3 2; t3+AND 2 | 3 passed |
| NMG-D-001 | `dv-lockchange` | nmsa,const,laws | t1 5; t1+AND 10; t2 1; t2+AND 1; t3 3; t3+AND 6; t4 2; t4+AND 7; t5 2; t5+AND 9; t6 0; t6+AND 0 | 6 passed |
| NMG-D-002 | `dv-confidentiality` | nmsa,const,laws | t1 25; t1+AND 33; t2 1; t2+AND 1; t3 4; t3+AND 7 | 3 passed |
| NMG-D-003 | `dv-protection-order-chapter-moved` | nmsa,const,laws | t1 1; t2 4; t3 2; t3+AND 2 | 3 passed |
| NMG-D-004 | `children-occupancy` | nmsa,const,laws,nmac | t1 1; t2 53; t2+AND 74; t3 7; t3+AND 8; t4 4 | 4 passed |
| NMG-D-005 | `protected-class-inquiry-ban` | nmsa,const,laws,nmac | t1 3; t1+AND 10; t2 14; t3 4; t3+AND 5 | 3 passed |
| NMG-D-006 | `disability-accommodation` | nmsa,const,laws,nmac | t1 1; t1+AND 5; t2 22; t2+AND 48; t3 0; t4 10; t4+AND 22 | 4 passed |
| NMG-D-007 | `service-animal-denial-penalty` | nmsa,const,laws,nmac | t1 1; t1+AND 1; t2 4; t2+AND 4; t3 1; t3+AND 1 | 3 passed |
| NMG-D-008 | `portfolio-thresholds` | nmsa,const,laws,nmac | t1 6; t1+AND 10; t2 2; t2+AND 8; t3 19 | 3 passed |
| NMG-D-009 | `tenant-right-to-organize` | nmsa,const,laws | t1 5; t2 9; t2+AND 25; t3 0; t3+AND 0; t4 1 | 4 passed |
| NMG-D-010 | `political-access` | nmsa,const,laws | t1 2; t1+AND 9; t2 31; t2+AND 38 | 2 passed |
| NMG-D-011 | `tenant-display-rights` | nmsa,const,laws | t1 2; t1+AND 3; t2 23; t2+AND 37; t3 11; t3+AND 16 | 3 passed |
| NMG-D-012 | `tenant-confidential-information` | nmsa,const,laws | t1 29; t1+AND 36; t2 3; t2+AND 4; t3 10; t4 1; t4+AND 3 | 4 passed |
| NMG-D-013 | `law-enforcement-cooperation` | nmsa,const,laws | t1 38; t1+AND 62; t2 2; t3 32; t3+AND 45 | 3 passed |
| NMG-D-014 | `drug-free-housing-addendum` | nmsa,const,laws | t1 26; t1+AND 42; t2 0 | 2 passed |
| NMG-D-015 | `veterans-incentive` | nmsa,const,laws | t1 8; t1+AND 16; t2 25; t2+AND 32 | 2 passed |
| NMG-D-016 | `employee-screening` | nmsa,const,laws,nmac | t1 8; t1+AND 16; t2 0; t3 6; t3+AND 10; t4 5; t4+AND 5; t5 2; t5+AND 2 | 5 passed |
| NMG-D-017 | `sex-offender-disclosure` | nmsa,const,laws | t1 0; t1+AND 2; t2 22; t2+AND 24 | 2 passed |
| NMG-E-001 | `landlord-registration` | nmsa,const,laws | t1 23; t1+AND 32; t2 39; t2+AND 49; t3 0; t4 2; t4+AND 2 | 4 passed |
| NMG-E-002 | `lease-registration` | nmsa,const,laws | t1 1; t2 0; t2+AND 1; t3 29; t3+AND 36 | 3 passed |
| NMG-E-003 | `tenant-rights-statement` | nmsa,const,laws,nmra | t1 20; t1+AND 25; t2 11; t2+AND 15; t3 1; t3+AND 6 | 3 passed |
| NMG-E-004 | `single-family-zone-lease-limit` | nmsa,const,laws | t1 12; t1+AND 15; t2 22; t3 4; t3+AND 11 | 3 passed |
| NMG-E-005 | `accessory-dwelling-unit` | nmsa,const,laws,nmac | t1 7; t2 6; t3 4; t3+AND 4 | 3 passed |
| NMG-E-006 | `health-district-rental-rules` | nmsa,const,laws,nmac | t1 0; t1+AND 0; t2 0; t2+AND 7 | 2 passed |
| NMG-E-007 | `lead-state-notices` | nmsa,const,laws,nmac | t1 1; t2 5; t2+AND 11; t3 3; t3+AND 8 | 3 passed |
| NMG-E-008 | `substandard-property-receivership` | nmsa,const,laws,nmac | t1 16; t1+AND 27; t2 10; t3 5; t3+AND 9; t4 0; t4+AND 0 | 4 passed |
| NMG-E-009 | `inspection-condemnation-disclosure` | nmsa,const,laws,nmac | t1 7; t1+AND 14; t2 8; t2+AND 9 | 2 passed |
| NMG-E-010 | `condemned-premises-rent-bar` | nmsa,const,laws,nmac | t1 5; t1+AND 5; t2 0; t3 1; t3+AND 1 | 3 passed |
| NMG-E-011 | `sanitary-code-variance` | nmsa,const,laws,nmac | t1 3; t1+AND 10; t2 3; t2+AND 4 | 2 passed |
| NMG-E-012 | `translation-duty` | nmsa,const,laws,nmra | t1 13; t1+AND 40; t2 2; t2+AND 5 | 2 passed |
| NMG-E-013 | `plain-language-consumer-statement` | nmsa,const,laws | t1 2; t1+AND 3; t2 1; t3 1; t3+AND 2 | 3 passed |
| NMG-E-014 | `recycling-notice` | nmsa,const,laws,nmac | t1 0; t1+AND 3; t2 7; t2+AND 13 | 2 passed |
| NMG-E-015 | `inspection-notice-penalty` | nmsa,const,laws | t1 5; t1+AND 8; t2 3; t2+AND 3 | 2 passed |
| NMG-E-016 | `subsidized-inspection-refusal` | nmsa,const,laws | t1 16; t1+AND 27; t2 14 | 2 passed |
| NMG-E-017 | `subsidy-habitability-proration` | nmsa,const,laws | t1 1; t1+AND 2; t2 2; t2+AND 3 | 2 passed |
| NMG-E-018 | `repair-escrow-exemption-notice` | nmsa,const,laws | t1 12; t1+AND 17; t2 2; t2+AND 2 | 2 passed |
| NMG-E-019 | `certificate-of-occupancy-disclosure` | nmsa,const,laws,nmac | t1 28; t2 0; t2+AND 0 | 2 passed |
| NMG-F-001 | `defective-drywall-disclosure` | nmsa,const,laws | t1 0; t2 0; t2+AND 0 | 2 passed |
| NMG-F-002 | `ordnance-demolition-meter-disclosures` | nmsa,const,laws,nmac | t1 0; t1+AND 1; t2 19; t2+AND 28; t3 12; t3+AND 15 | 3 passed |
| NMG-F-003 | `prop65-rental-warning` | nmsa,const,laws | t1 0; t1+AND 0; t2 0; t2+AND 0 | 2 passed |
| NMG-F-004 | `shoreline-access-disclosure` | nmsa,const,laws | t1 1; t1+AND 3; t2 2; t2+AND 10 | 2 passed |
| NMG-F-005 | `military-air-zone-disclosure` | nmsa,const,laws | t1 6; t1+AND 12; t2 3; t2+AND 3 | 2 passed |
| NMG-F-006 | `property-tax-rent-disclosure` | nmsa,const,laws | t1 4; t1+AND 6; t2 10; t2+AND 13 | 2 passed |
| NMG-F-007 | `foreclosure-disclosure` | nmsa,const,laws | t1 2; t1+AND 5; t2 7; t2+AND 9 | 2 passed |
| NMG-F-008 | `sfr-occupancy-disclosure` | nmsa,const,laws | t1 1; t1+AND 3; t2 3; t2+AND 6; t3 0; t3+AND 0 | 3 passed |
| NMG-F-009 | `association-obligations-disclosure` | nmsa,const,laws | t1 12; t1+AND 17; t2 23; t2+AND 23 | 2 passed |
| NMG-F-010 | `required-disclosures` | nmsa,const,laws | t1 23; t1+AND 26; t2 8; t2+AND 14; t3 19; t3+AND 21; t4 39; t4+AND 52 | 4 passed |
| NMG-F-011 | `hazardous-contamination-disclosure` | nmsa,const,laws | t1 7; t1+AND 14; t2 1; t2+AND 2; t3 0 | 3 passed |
| NMG-F-012 | `asbestos-hazards` | nmsa,const,laws,nmac | t1 8; t2 0; t2+AND 0 | 2 passed |
| NMG-F-013 | `private-well-testing` | nmsa,const,laws | t1 6; t1+AND 9; t2 0; t2+AND 0; t3 2; t3+AND 2 | 3 passed |
| NMG-F-014 | `adverse-proceeding-notice` | nmsa,const,laws | t1 20; t1+AND 24 | 1 passed |
| NMG-F-015 | `hoa` | nmsa,const,laws | t1 9; t1+AND 14; t2 0; t2+AND 0 | 2 passed |
| NMG-F-016 | `family-child-care` | nmsa,const,laws | t1 2; t1+AND 3; t2 4; t2+AND 4 | 2 passed |
| NMG-F-017 | `home-business` | nmsa,const,laws | t1 8; t2 5; t2+AND 7 | 2 passed |
| NMG-F-018 | `student-housing` | nmsa,const,laws | t1 1; t1+AND 4; t2 4; t2+AND 6 | 2 passed |
| NMG-F-019 | `tenant-employee-housing` | nmsa,const,laws | t1 22; t1+AND 24; t2 4 | 2 passed |
| NMG-F-020 | `farmland-hunting-rights` | nmsa,const,laws | t1 11; t1+AND 16; t2 0 | 2 passed |
| NMG-F-021 | `communal-land-lease-approval` | nmsa,const,laws | t1 20; t1+AND 22 | 1 passed |
| NMG-F-022 | `special-district-representation` | nmsa,const,laws | t1 12; t1+AND 17 | 1 passed |
| NMG-F-023 | `usufructuary-lessor` | nmsa,const,laws | t1 0; t2 3; t2+AND 4; t3 3; t3+AND 4 | 3 passed |
| NMG-G-001 | `electric-submetering-disclosure` | nmsa,const,laws,nmac | t1 1; t2 18; t2+AND 27; t3 4; t4 1; t4+AND 1 | 4 passed |
| NMG-G-002 | `utility-apportionment` | nmsa,const,laws,nmac | t1 5; t1+AND 8; t2 7; t2+AND 9; t3 3 | 3 passed |
| NMG-G-003 | `utility-interruption-submeter` | nmsa,const,laws,nmac | t1 1; t1+AND 4; t2 6; t2+AND 9; t3 1; t4 2 | 4 passed |
| NMG-G-004 | `utility-shutoff-statute` | nmsa,const,laws,nmac | t1 7; t2 7; t3 3; t3+AND 3; t4 6; t4+AND 7 | 4 passed |
| NMG-G-005 | `utility-disconnection-notice-authorization` | nmsa,const,laws,nmac | t1 2; t2 10; t2+AND 17; t3 1 | 3 passed |
| NMG-G-006 | `utility-landlord-account` | nmsa,const,laws,nmac | t1 1; t1+AND 2; t2 2; t2+AND 2; t3 1; t3+AND 1; t4 0; t4+AND 0 | 4 passed |
| NMG-G-007 | `utility-transfer` | nmsa,const,laws,nmac | t1 1; t1+AND 4; t2 1; t2+AND 2; t3 2; t4 5; t4+AND 7 | 4 passed |
| NMG-G-008 | `utility-allowance-cap` | nmsa,const,laws,nmac | t1 0; t2 8; t2+AND 16; t3 5; t3+AND 5 | 3 passed |
| NMG-G-009 | `meter-conservation-charge` | nmsa,const,laws,nmac | t1 0; t2 0; t2+AND 0; t3 0; t3+AND 0; t4 3; t4+AND 5; t5 11; t5+AND 11 | 5 passed |
| NMG-G-010 | `energy-data-release` | nmsa,const,laws,nmac | t1 7; t2 2; t2+AND 4; t3 2; t3+AND 6 | 3 passed |
| NMG-G-011 | `shutdown-rent-protection` | nmsa,const,laws | t1 4; t2 1; t2+AND 3; t3 0; t3+AND 0 | 3 passed |
| NMG-G-012 | `utility-deposit-return` | nmsa,const,laws,nmac | t1 1; t2 7; t2+AND 9; t3 0; t3+AND 0 | 3 passed |
| NMG-G-013 | `utility-disclosure-attachment` | nmsa,const,laws,nmac | t1 8; t1+AND 11; t2 15; t2+AND 17 | 2 passed |
| NMG-G-014 | `fire-sprinkler-duty` | nmsa,const,laws,nmac | t1 18; t2 1; t2+AND 2; t3 4; t3+AND 7; t4 4; t4+AND 4 | 4 passed |
| NMG-G-015 | `fire-code-standard` | nmsa,const,laws,nmac | t1 6; t2 10; t3 20; t4 7; t4+AND 8 | 4 passed |
| NMG-G-017 | `window-guards` | nmsa,const,laws,nmac | t1 2; t2 1; t2+AND 1; t3 2; t3+AND 3; t4 1; t5 17; t5+AND 21 | 5 passed |
| NMG-G-018 | `pool-safety` | nmsa,const,laws,nmac | t1 2; t1+AND 7; t2 4; t2+AND 12; t3 6 | 3 passed |
| NMG-G-019 | `fire-code-standard` | nmsa,const,laws,nmac | t1 5; t1+AND 5; t2 5 | 2 passed |
| NMG-G-020 | `fire-code-standard` | nmsa,const,laws,nmac | t1 5; t1+AND 5; t2 5 | 2 passed (supersedes NMG-G-019: INFLECTION line for smoke; rerun with smokes and smoked included) |
| NMG-G-016 | `heating` | nmsa,const,laws,nmac | t1 1; t2 13; t2+AND 13; t3 3; t3+AND 3; t4 4; t4+AND 5 | 4 passed |
| NMG-H-001 | `statutory-early-termination` | nmsa,const,laws | t1 26; t1+AND 44; t2 23; t2+AND 34; t3 57; t3+AND 81 | 3 passed |
| NMG-H-002 | `infirmity-termination` | nmsa,const,laws | t1 6; t1+AND 10; t2 26; t3 1; t3+AND 2 | 3 passed |
| NMG-H-003 | `environmental-event-termination` | nmsa,const,laws | t1 4; t1+AND 10; t2 9; t2+AND 11; t3 9; t3+AND 22 | 3 passed |
| NMG-H-004 | `landlord-remedies-termination` | nmsa,const,laws,nmra | t1 5; t1+AND 13; t2 7 | 2 passed |
| NMG-H-005 | `eviction-hardship-stay` | nmsa,const,laws,nmra | t1 10; t1+AND 11; t2 1; t2+AND 1 | 2 passed |
| NMG-H-006 | `eviction-service-party` | nmsa,const,laws,nmra | t1 35; t1+AND 52; t2 3; t2+AND 3 | 2 passed |
| NMG-H-007 | `possession-bond` | nmsa,const,laws,nmra | t1 7; t1+AND 7; t2 6; t2+AND 11 | 2 passed |
| NMG-H-008 | `redemption` | nmsa,const,laws,nmra | t1 44; t1+AND 68; t2 4; t2+AND 8; t3 7; t3+AND 8; t4 6; t4+AND 12 | 4 passed |
| NMG-H-009 | `forfeiture-redemption` | nmsa,const,laws,nmra | t1 0; t2 24; t2+AND 33 | 2 passed |
| NMG-H-010 | `social-security-defense` | nmsa,const,laws,nmra | t1 17; t1+AND 25; t2 2; t2+AND 3 | 2 passed |
| NMG-H-011 | `cold-weather-vacate-notice` | nmsa,const,laws,nmac | t1 2; t1+AND 3; t2 4; t2+AND 6; t3 9; t3+AND 11 | 3 passed |
| NMG-H-012 | `notice-to-vacate-additional-terms` | nmsa,const,laws,nmra | t1 0; t1+AND 0; t2 11; t2+AND 13 | 2 passed |
| NMG-H-013 | `minor-tenant-filing` | nmsa,const,laws,nmra | t1 24; t1+AND 47; t2 5; t2+AND 6 | 2 passed |
| NMG-H-014 | `trespass-notice` | nmsa,const,laws | t1 10; t1+AND 10; t2 5; t2+AND 5 | 2 passed |
| NMG-H-015 | `good-cause-notice` | nmsa,const,laws,nmra | t1 20; t1+AND 42; t2 0; t2+AND 0 | 2 passed |
| NMG-H-016 | `entity-landlord-court-representation` | nmsa,const,laws,nmra | t1 7; t2 9; t2+AND 16 | 2 passed |
| NMG-H-017 | `limitation-of-actions` | nmsa,const,laws | t1 5; t1+AND 11 | 1 passed |
| NMG-H-018 | `confirmed-absences-outside-title` | nmsa,const,laws,nmra | t1 28; t1+AND 34; t2 5; t2+AND 6; t3 10; t4 7 | 4 passed |
| NMG-H-019 | `repair-cost-termination` | nmsa,const,laws | t1 9; t1+AND 19; t2 23; t2+AND 32 | 2 passed |
| NMG-H-020 | `tenant-bankruptcy` | nmsa,const,laws,nmra | t1 12; t1+AND 22 | 1 passed |
| NMG-H-021 | `eminent-domain` | nmsa,const,laws | t1 38; t1+AND 52; t2 19; t2+AND 26 | 2 passed |
| NMG-H-022 | `construction-liens` | nmsa,const,laws | t1 1; t1+AND 1; t2 5; t2+AND 6; t3 12; t3+AND 12 | 3 passed |
| NMG-I-001 | `alt-housing` | nmsa,const,laws | t1 6; t1+AND 9; t2 13; t2+AND 25; t3 0; t3+AND 0; t4 38 | 4 passed |
| NMG-I-002 | `appliances-excluded` | nmsa,const,laws | t1 15; t1+AND 26; t2 6; t2+AND 12; t3 1; t3+AND 6; t4 19; t4+AND 20 | 4 passed |
| NMG-I-003 | `furnishings-included` | nmsa,const,laws | t1 1; t2 13; t2+AND 17; t3 9; t3+AND 11 | 3 passed |
| NMG-I-004 | `disaster-duties` | nmsa,const,laws | t1 30; t1+AND 46; t2 6; t2+AND 10; t3 3; t4 2; t4+AND 3 | 4 passed |
| NMG-I-005 | `disaster-displaced-guests` | nmsa,const,laws | t1 0; t1+AND 6; t2 6; t2+AND 10; t3 27; t3+AND 33 | 3 passed |
| NMG-I-006 | `emergency-contact` | nmsa,const,laws | t1 9; t1+AND 11; t2 0; t2+AND 0; t3 3; t3+AND 10 | 3 passed |
| NMG-I-007 | `key-control-policy` | nmsa,const,laws | t1 2; t2 2; t2+AND 3; t3 1; t3+AND 1 | 3 passed |
| NMG-I-008 | `landlord-liability-insurance` | nmsa,const,laws | t1 9; t1+AND 17; t2 2; t2+AND 3; t3 4; t3+AND 6 | 3 passed |
| NMG-I-009 | `lease-type-parity` | nmsa,const,laws | t1 2; t1+AND 2; t2 4; t2+AND 4; t3 0; t3+AND 0 | 3 passed |
| NMG-I-010 | `lease-type-size` | nmsa,const,laws,nmra | t1 17; t2 3; t2+AND 6; t3 0; t3+AND 0 | 3 passed |
| NMG-I-011 | `other-landlord-facilities` | nmsa,const,laws,nmac | t1 2; t2 6; t2+AND 8; t3 12; t3+AND 14 | 3 passed |
| NMG-I-012 | `parking-rules-notice` | nmsa,const,laws,nmac | t1 4; t1+AND 8; t2 2; t2+AND 4; t3 3; t4 3; t4+AND 3 | 4 passed |
| NMG-I-013 | `periodic-services-entry` | nmsa,const,laws | t1 2; t1+AND 4; t2 14; t2+AND 19; t3 16; t3+AND 20 | 3 passed |
| NMG-I-014 | `purpose-limitation` | nmsa,const,laws | t1 2; t1+AND 2; t2 10; t2+AND 16; t3 1 | 3 passed |
| NMG-I-015 | `renters-insurance-rules` | nmsa,const,laws | t1 3; t2 19; t2+AND 23; t3 0 | 3 passed |
| NMG-I-016 | `tenant-insurance-claims` | nmsa,const,laws | t1 3; t1+AND 7; t2 3; t2+AND 3; t3 0; t3+AND 1 | 3 passed |
| NMG-I-017 | `repair-notice` | nmsa,const,laws | t1 17; t1+AND 25; t2 11; t2+AND 17; t3 0; t3+AND 3 | 3 passed |
| NMG-I-018 | `designated-repairer` | nmsa,const,laws | t1 0; t2 1; t2+AND 1; t3 18; t3+AND 27 | 3 passed |
| NMG-I-019 | `pest-control-notice` | nmsa,const,laws,nmac | t1 17; t1+AND 17; t2 2; t2+AND 4; t3 17 | 3 passed |
| NMG-I-020 | `bed-bug-cooperation` | nmsa,const,laws,nmac | t1 1; t1+AND 2; t2 8; t2+AND 9; t3 6; t3+AND 6 | 3 passed |
| NMG-J-001 | `smart-access` | nmsa,const,laws | t1 7; t2 2; t2+AND 4; t3 8; t3+AND 12 | 3 passed |
| NMG-J-002 | `tenant-portal` | nmsa,const,laws | t1 23; t1+AND 41; t2 11; t2+AND 27; t3 18; t3+AND 31 | 3 passed |
| NMG-J-003 | `tpa-notice` | nmsa,const,laws | t1 13; t1+AND 16; t2 21; t2+AND 24; t3 1; t3+AND 2; t4 1; t4+AND 1 | 4 passed |
| NMG-J-004 | `tpa-sunset` | nmsa,const,laws | t1 25; t1+AND 36; t2 8; t2+AND 16; t3 6; t3+AND 6 | 3 passed |
| NMG-J-005 | `prohibited-acts-renter` | nmsa,const,laws | t1 11; t2 6 | 2 passed |
| NMG-J-006 | `telecom-access` | nmsa,const,laws | t1 34; t1+AND 47; t2 13; t2+AND 14; t3 1 | 3 passed |
| NMG-J-007 | `portable-solar` | nmsa,const,laws,nmac | t1 8; t1+AND 22; t2 1; t2+AND 1; t3 3; t3+AND 5 | 3 passed |
| NMG-J-008 | `portable-cooling-device` | nmsa,const,laws,nmac | t1 9; t1+AND 25; t2 9; t3 0; t3+AND 0 | 3 passed |
| NMG-J-009 | `ev-charging-requirements` | nmsa,const,laws,nmac | t1 4; t1+AND 12; t2 7; t2+AND 11; t3 8; t3+AND 10; t4 5; t4+AND 11 | 4 passed |
| NMG-J-010 | `animal-care-access` | nmsa,const,laws,nmra | t1 38; t1+AND 51; t2 0; t2+AND 2; t3 0; t3+AND 0 | 3 passed |
| NMG-J-011 | `waterbed` | nmsa,const,laws,nmac | t1 1; t2 1; t2+AND 1 | 2 passed |
| NMG-MAIN-001 | `confession-of-judgment` | nmsa,const,laws | t1 12; t2 1; t2+AND 2 | 3 passed |
| NMG-MAIN-002 | `binding-arbitration` | nmsa,const,laws | t1 2; t2 11; t2+AND 26; t3 6; t3+AND 14 | 3 passed |
| NMG-MAIN-003 | `portfolio-thresholds` | nmsa,const,laws,nmac | t1 6; t1+AND 10; t2 2; t2+AND 8; t3 19; t4 8; t4+AND 9 | 4 passed (supersedes NMG-D-008: independent check round 1: t1 did not search the "at least N units" or "no more than N" forms) |

Verdict per topic (from the canvass):

- `habitability-waiver`: Present (NMG-A-001). Barred by NMSA 1978, § 47-8-16; only the § 47-8-20(C)-(D) task shift is allowed; no rent-reduction or as-is acceptance statute
- `habitability-modifiable`: Present (NMG-A-001, NMG-A-018). Only the NMSA 1978, § 47-8-20(C)-(E) task shift; standard itself not modifiable
- `habitability-statement`: Confirmed absent (NMG-A-002). No lease-statement requirement; duties imposed by NMSA 1978, § 47-8-20 regardless
- `habitability-materiality`: Present (NMG-A-004). 'materially affecting health and safety' standard; amenity definition; no further definition of material
- `habitability-presumption`: Confirmed absent (NMG-A-003). No statutory habitability or retaliation presumption; heat burden on owner only by case as summarized in the annotation
- `confirmed-absences-habitability`: Confirmed absent (NMG-A-001, NMG-A-002, NMG-A-003, NMG-A-015). Summary of habitability absences; earlier absence rows pointed to, not re-run
- `part5-nonwaivable`: Present (NMG-A-005). Single non-waiver rule NMSA 1978, § 47-8-16; no sale-leaseback rule
- `showing-notice-waiver`: Present (NMG-A-006). NMSA 1978, § 47-8-24(A)(1) unless otherwise agreed; declined option recorded
- `exculpatory-clauses`: Present (NMG-A-007). Disclaimers barred by NMSA 1978, § 47-8-16; statutory liability limits listed
- `eviction-penalty-clause-ban`: Confirmed absent (NMG-A-008). No statute names an eviction fee or penalty clause; court-awarded fees and costs; NMSA 1978, § 47-8-33(M) penalty runs against owner
- `knowing-use-penalty`: Present (NMG-A-009). NMSA 1978, § 47-8-17 damages and fees; MHPA parallel; UPA fee rule
- `notice-to-quit-waiver`: Present (NMG-A-010). Barred by NMSA 1978, § 47-8-16; no statute permits shortening
- `homestead-waiver`: Present (NMG-A-011). Barred by NMSA 1978, § 47-8-16; homestead covers owned domicile; no exemption-waiver statute
- `jury-waiver`: Present (NMG-A-012). Statutory jury right on demand; lease waiver barred on the face of NMSA 1978, § 47-8-16; no contractual-waiver statute or rule
- `casualty-and-mitigation-waivable`: Present (NMG-A-013). NMSA 1978, § 47-8-31 rights and § 47-8-6(A) mitigation not waivable (NMSA 1978, § 47-8-16)
- `liquidated-damages`: Confirmed absent (NMG-A-014). No residential liquidated-damages statute; goods and health-care statutes only; penalty doctrine not searched
- `landlord-breach-remedy`: Present (NMG-A-015). Act remedies listed; no repair-and-deduct or health-hazard withholding statute
- `promises-to-repair`: Present (NMG-A-016). Repair promises enforceable as rental agreement terms; no writing or completion-date rule
- `rent-into-court-counterclaim`: Present (NMG-A-017). Counterclaim with rent owed to owner; no compulsory counterclaim in magistrate or metro court; no pre-trial rent deposit; appeal escrow; stale 47-8-27.2(C) reference
- `maintenance-duty-shift`: Present (NMG-A-018). NMSA 1978, § 47-8-20(C)-(E); rule 48 split stands
- `security-deposit-nonwaiver`: Present (NMG-A-019). Deposit rights unwaivable under NMSA 1978, § 47-8-16; lawful agreements listed
- `smoke-drift-waiver`: Present (NMG-A-020). Waiver barred by NMSA 1978, § 47-8-16; Clean Indoor Air Act read; no smoke-drift rule in statutes or held NMAC parts
- `deposit-cost-schedule`: Confirmed absent (NMG-B-001). no statute on pre-set deposit charges or a notice for them; deductions limited to rent and damages suffered, not normal wear and tear (NMSA 1978, § 47-8-18(C))
- `deposit-installments`: Confirmed absent (NMG-B-002). no statute gives or regulates deposit installments; written agreement needed to apply rent payments to a deposit (NMSA 1978, § 47-8-15(G))
- `security-deposit-standards`: Confirmed absent (NMG-B-003). no rule requiring posted or disclosed deposit standards; deposit must be reasonable (NMSA 1978, § 47-8-18(A)); Human Rights Act terms-and-conditions bar applies
- `fee-in-lieu-of-deposit`: Confirmed absent (NMG-B-004). no statute on deposit alternatives; refundable pledge is a deposit (NMSA 1978, § 47-8-3(F)); a fee must be in the agreement (NMSA 1978, § 57-12-27(C)); park entry fees barred (NMSA 1978, § 47-10-10)
- `nonrefundable-deposit-notice`: Confirmed absent (NMG-B-005). no nonrefundable-deposit route or notice; a deposit is a pledge returned or itemized (NMSA 1978, § 47-8-3(F), NMSA 1978, § 47-8-18(C)-(D))
- `nonrefundable-deposit-separate-notice`: Confirmed absent (NMG-B-005). no separate notice, document or initials for nonrefundable charges; fees must be in the rental agreement (NMSA 1978, § 57-12-27(C))
- `deposit-surrender-notice`: Confirmed absent (NMG-B-006). no surrender-notice or forwarding-address condition; 30 days from the later of termination or departure (NMSA 1978, § 47-8-18(C)); extra notice to an alternative address (NMSA 1978, § 47-8-13(F))
- `expedited-deposit-disposition`: Confirmed absent (NMG-B-008). no early or expedited disposition procedure or fee; ordinary 30-day rule (NMSA 1978, § 47-8-18(C))
- `alarm-tampering-fee`: Confirmed absent (NMG-B-009). no statute or held NMAC rule on an alarm-tampering fee; NMSA 1978, § 30-7-22 (misdemeanor) and NMSA 1978, § 47-8-48(D) (two times rent) apply
- `carpet-cleaning`: Confirmed absent (NMG-B-010). no carpet-cleaning or carpet/paint age statute; cleaning duty NMSA 1978, § 47-8-22(B), deposit rule NMSA 1978, § 47-8-18(C)
- `collection-fee`: Not located (NMG-B-011). collection-agency conduct rules (NMAC under NMSA 1978, § 61-18A-4) not held; no statute authorizes, caps or bars a landlord collection fee; agency may add GRT on its receipts (NMSA 1978, § 61-18A-28.1)
- `notice-service-fee`: Confirmed absent (NMG-B-012). no statute on a fee for serving a notice or filing an eviction; prevailing-party fees and costs (NMSA 1978, § 47-8-48(A))
- `governmental-fines`: Confirmed absent (NMG-B-013). no statute bars, limits or imposes a pass-through of government fines; optional clause tagged (NMSA 1978, § 47-8-14)
- `government-fee-reimbursement`: Confirmed absent (NMG-B-014). no statewide rental registration fee and no pass-through statute; a fee must be stated in the agreement and raised on 60 days' notice (NMSA 1978, § 57-12-27(C), NMSA 1978, § 47-8-19.4)
- `required-fees`: Present (NMG-B-015). every fee must be in the rental agreement (NMSA 1978, § 57-12-27(C)); no all-in total, markup cap, common-area fee bar or partial-payment charge rule; $5 bill-copy fee (NMSA 1978, § 47-8-20(F)); park utility admin fee (NMSA 1978, § 47-10-21)
- `late-fee-limit`: Present (NMG-B-016). 5% of rent per rental period, rent only, notice required (NMSA 1978, § 47-8-15(D)); no separate park or storage late-fee rule
- `subsidy-late-fee`: Confirmed absent (NMG-B-017). no subsidy-specific late-fee rule; general 5% rule on rent the resident pays (NMSA 1978, § 47-8-15(D), NMSA 1978, § 47-8-3(P)); federal rules not read
- `tax-escalation`: Confirmed absent (NMG-B-018). no property-tax pass-through rule; residential rent deductible from gross receipts (NMSA 1978, § 7-9-53); lodgers' tax excludes primary residences (NMSA 1978, § 3-38-14(G)); TRD rule on § 7-9-53 not held
- `fee-unprovided-service`: Confirmed absent (NMG-B-019). no specific bar; Unfair Practices Act item 17 (NMSA 1978, § 57-12-2(D)); fees must be in the agreement; no rent abatement for amenities (NMSA 1978, § 47-8-27.2(E))
- `unbundled-parking`: Confirmed absent (NMG-B-020). no rule requiring or barring separate parking prices; a parking charge is a fee stated in the agreement (NMSA 1978, § 57-12-27(C))
- `statutory-caps`: Present (). summary of caps in cited sections (NMSA 1978, § 47-8-18, NMSA 1978, § 47-8-15(D), NMSA 1978, § 47-8-19.2, NMSA 1978, § 47-8-20(F), NMSA 1978, § 47-10-8, NMSA 1978, § 56-8-3); no absence claim, so no battery
- `rent-receipt-anti-waiver`: Confirmed absent (NMG-C-001). No receipt-of-rent-free-of-duty rule; owner definition, NMSA 1978, § 47-8-19(C), § 47-8-21 and the Assignment of Rents Act (NMSA 1978, § 56-15-13) do the work; general accord rule NMSA 1978, § 55-3-311
- `rent-installments`: Present (NMG-C-002). NMSA 1978, § 47-8-15(B) lets the parties set the time of payment; no partial-payment statute; weekly-rent default in NMSA 1978, § 47-8-15(C)
- `rent-escalation`: Present (NMG-C-003). No escalation statute; NMSA 1978, § 47-8-15(F) notice rule and NMSA 1978, § 47-8-39(C) safe harbour; mid-term step unsettled, clause declined
- `rent-reporting`: Confirmed absent (NMG-C-004). No rent-reporting rule; the credit bureau act (NMSA 1978, §§ 56-3-1 to 56-3-8) binds bureaus and users
- `rent-concession`: Confirmed absent (NMG-C-005). No concession statute; clause written as a credit; clawback declined (penalty doctrine not searched; NMSA 1978, § 47-8-12)
- `rent-demand-bar`: Confirmed absent (NMG-C-006). No rent-demand bar; tenant remedies are abatement (NMSA 1978, § 47-8-26, NMSA 1978, § 47-8-27.2, NMSA 1978, § 47-8-31, NMSA 1978, § 47-8-36), counterclaim and retaliation
- `lockout-for-rent-delinquency`: Present (NMG-C-007). Barred by NMSA 1978, § 47-8-36(A); no opt-in exception; NMSA 1978, § 47-8-48(C) two times monthly rent
- `truth-in-renting`: Confirmed absent (NMG-C-008). No truth-in-renting statement or lease notice; nearest: NMSA 1978, § 47-8-20(G), § 47-8-19, § 47-8-19.1
- `optional-lease-terms`: Present (NMG-C-009). NMSA 1978, § 47-8-14; lease-invoked rights listed and mapped to NM clauses; no lease-option or seller-disclosure statute
- `informal-dispute-resolution`: Confirmed absent (NMG-C-010). No pre-suit resolution statute or court-access stipulation bar; NMSA 1978, § 47-8-7 settlement; park ADR NMSA 1978, § 47-10-17; clause tagged
- `frozen-standard-incorporation`: Present (NMG-C-011). CID rules fix 2021 editions (14.7.2.8, 14.7.3.8, 14.7.6.8, 14.7.7.8, 14.7.9.8 NMAC); fire code 2021 IFC; local codes by title and date (NMSA 1978, § 3-17-6); plumbing, mechanical and electrical parts not held
- `automatic-renewal`: Confirmed absent (NMG-C-012). No residential auto-renewal statute; service contracts only (NMSA 1978, § 59A-58-10.1); NM clause written with the increase-notice conditions
- `lease-term-limitation`: Present (NMG-C-013). No maximum term or lease statute of frauds; spouses must join in leases over five years or indefinite (NMSA 1978, § 40-3-13); recording over five years (NMSA 1978, § 14-9-1)
- `guarantor-renewal`: Confirmed absent (NMG-C-014). No guaranty or suretyship statute for leases; guarantors are applicants (NMSA 1978, § 47-8-3(D)); `guaranty-as` tagged
- `owner-move-in-reservation`: Confirmed absent (NMG-C-015). No owner-move-in statute; reserved right is a lease term (NMSA 1978, § 47-8-14); `owner-occupancy-termination-ar` tagged; park grounds NMSA 1978, § 47-10-5
- `tenancy-at-will`: Present (NMG-C-016). No tenancy at will under the act (NMSA 1978, § 47-8-15(C) default periodic); forcible entry tenant at will (NMSA 1978, § 35-10-1(A)(5)) excluded by NMSA 1978, § 35-10-2
- `seasonal-tenancy`: Confirmed absent (NMG-C-017). No seasonal category; only the hotel-motel transient exemption (NMSA 1978, § 47-8-9(D), § 47-8-3(X)); lodgers' tax 30-day exemption (NMSA 1978, § 3-38-16)
- `written-notice-required`: Present (NMG-C-018). Writing required notice by notice in the act; no oral-notice permission; NMSA 1978, § 12-2A-3(P) and the electronic transactions limits
- `lease-notice-initial-requirement`: Confirmed absent (NMG-C-019). No initialing rule; separate signed writings only for tenant work (NMSA 1978, § 47-8-20(C)-(D)) and the contact-person statement (NMSA 1978, § 47-8-34.2(B))
- `actual-notice-method`: Present (NMG-C-020). NMSA 1978, § 47-8-13(A)-(E) defines notice and receipt; no agreed text or e-mail method for written notices to the resident
- `double-letting`: Confirmed absent (NMG-C-021). No double-letting statute; NMSA 1978, § 47-8-26 delivery of possession and NMSA 1978, § 47-8-19.2 screening-fee availability rules; `possession-delay-ca` already tagged
- `dv-confidentiality`: Confirmed absent (NMG-D-002, NMG-D-001). Confidential Substitute Address Act binds the secretary of state, agencies and court-order recipients, not landlords; no landlord confidentiality duty
- `dv-deposit-timing`: Confirmed absent (NMG-D-001). No DV termination right, so no DV deposit-timing rule; NMSA 1978, § 47-8-18 applies; co-tenant split not addressed
- `dv-lockchange`: Confirmed absent (NMG-D-001). No victim lock-change statute; FVPA sole-possession orders (NMSA 1978, § 40-13-5(B)(1)) and the anti-lockout rule (NMSA 1978, § 47-8-36) frame the cautious course
- `dv-protection-order-chapter-moved`: Present (NMG-D-003). FVPA (ch. 40, art. 13) not moved; NMSA 1978, § 47-8-33(J) says "temporary domestic violence restraining order", a term the FVPA does not use
- `dv-qualifying-documents`: Present (NMG-D-001, NMG-D-003). Only NMSA 1978, § 47-8-33(J): filing for or securing a temporary DV restraining order, no time limit; no other qualifying-document list
- `children-occupancy`: Confirmed absent (NMG-D-004). Familial status not in NMSA 1978, § 28-1-7(G) (verified); pregnancy is; parks must treat all persons equally (NMSA 1978, § 47-10-11(E)); no lease-content or occupancy-standard rule
- `protected-class-inquiry-ban`: Present (NMG-D-005). NMSA 1978, § 28-1-7(G)(3) bars application forms, records and inquiries expressing a preference; no separate question list or record rule
- `disability-accommodation`: Confirmed absent (NMG-D-006). HRA bars disability discrimination in housing (NMSA 1978, § 28-1-7(G)); its accommodation duty and definition are employment-only; no restoration rule
- `service-animal-denial-penalty`: Present (NMG-D-007). Misdemeanors in NMSA 1978, § 28-11-4 (public buildings and accommodations) and NMSA 1978, § 28-7-5 (White Cane Law places, incl. hotels and lodging places); none written for rental units
- `portfolio-thresholds`: Present (NMG-D-008). No size threshold in the act; HRA exemptions (three single-family homes; owner-occupied four-family), MHPA twelve-home park, mechanics-lien notice exemption for four or fewer units
- `tenant-right-to-organize`: Present (NMG-D-009). Retaliation bar for organizing or joining a residents’ union (NMSA 1978, § 47-8-39(A)(2)); park meeting right (NMSA 1978, § 47-10-7); no general organizing right
- `political-access`: Confirmed absent (NMG-D-010). No candidate, canvasser or petition-circulator access rule for residential rentals
- `religious-cultural-display`: Confirmed absent (NMG-D-011). No tenant religious or cultural display statute; HRA equal treatment and constitutional religion clauses (private reach unread)
- `tenant-display-rights`: Confirmed absent (NMG-D-011). No tenant or occupant flag, sign or display statute; HRA bars discriminatory housing signs only
- `tenant-confidential-information`: Confirmed absent (NMG-D-012). No general bar on disclosing tenant information; Data Breach Notification Act and Privacy Protection Act limit handling of identifiers
- `tenant-records`: Confirmed absent (NMG-D-012). No rent-ledger or retention duty; Data Breach Notification Act security and disposal duties apply; Real Estate Commission rules not held
- `law-enforcement-cooperation`: Confirmed absent (NMG-D-013). No cooperation, reporting or crime-free statute; entry limits of NMSA 1978, § 47-8-24 bound any cooperation
- `drug-free-housing-addendum`: Confirmed absent (NMG-D-014). No addendum statute; drug conduct reaches the three-day route only as listed in NMSA 1978, § 47-8-3(V)(1); clause `criminal-activity-nm`
- `veterans-incentive`: Confirmed absent (NMG-D-015). No landlord incentive or veteran tenant rule; military status protected under NMSA 1978, § 28-1-7(G)
- `employee-screening`: Confirmed absent (NMG-D-016). No apartment-employee screening duty; private-employer application rule (NMSA 1978, § 28-2-3.1) and caregiver screening for care providers only
- `senior-housing-work-card`: Confirmed absent (NMG-D-016). No senior-housing work card; caregiver fingerprint screening only for care providers (NMSA 1978, § 29-17-5(C))
- `sex-offender-disclosure`: Confirmed absent (NMG-D-017). No landlord registry notice or disclosure duty; public access through NMSA 1978, § 29-11A-5.1; state preempts local sex offender rules (NMSA 1978, § 29-11A-9)
- `landlord-registration`: Confirmed absent (NMG-E-001). No state landlord or rental registration or licence; municipal business registration (NMSA 1978, § 3-38-3) and licensing (NMSA 1978, § 3-38-1) left to ordinance; managers for others need a broker licence (NMSA 1978, § 61-29-1); only rent control preempted
- `lease-registration`: Present (NMG-E-002). Leases over five years including options (or a memorandum) shall be recorded with the county clerk (NMSA 1978, § 14-9-1); unrecorded instruments yield to good-faith buyers and lenders (NMSA 1978, § 14-9-3); no lease registry
- `rights-responsibilities-guide`: Confirmed absent (NMG-E-003). No state-published guide or acknowledgment; lease copy and owner disclosure required instead (NMSA 1978, § 47-8-20(G), § 47-8-19(A))
- `tenant-rights-statement`: Confirmed absent (NMG-E-003). No agency rights statement in leases; mobile home park ADR statement (NMSA 1978, § 47-10-14(A)(9)); court Resource Information Sheet only in diversion-program forms
- `single-family-zone-lease-limit`: Confirmed absent (NMG-E-004). No state limit on renting in single-family zones or owner-occupancy rule; zoning delegated (NMSA 1978, § 3-21-1)
- `accessory-dwelling-unit`: Confirmed absent (NMG-E-005). No ADU statute or rule; multigenerational two-kitchen mechanism in single-family zones (NMSA 1978, § 3-21-1(F)) says nothing about renting
- `health-district-rental-rules`: Confirmed absent (NMG-E-006). No health districts with rental rules; DOH health regions (NMSA 1978, § 24-1-4) and EIB rule areas (NMSA 1978, § 74-1-8) name no rental housing; agency rules not held
- `lead-safe-certification`: Confirmed absent (NMG-E-007). No state lead-safe certificate or lead program for housing in statutes or held NMAC parts; federal disclosure in `lead-based-paint`
- `lead-state-notices`: Confirmed absent (NMG-E-007). No state lead notices beyond the federal disclosure; only hits are an appropriation and the verb "lead"
- `substandard-property-receivership`: Present (NMG-E-008). Municipal unfit-dwelling orders (NMSA 1978, § 3-46-43) and dangerous-building removal (NMSA 1978, § 3-18-5) with liens; no receivership or rent escrow
- `inspection-condemnation-disclosure`: Present (NMG-E-009). Mobile home park condemnation notice to tenants within 17 days (NMSA 1978, § 47-10-5(D)); no disclosure duty for other rentals; unfit-dwelling orders posted and filed (NMSA 1978, § 3-46-43(D))
- `condemned-premises-rent-bar`: Confirmed absent (NMG-E-010). No express rent bar for condemned premises; 100 percent abatement for uninhabitable units (NMSA 1978, § 47-8-27.2(A)(2)) and casualty rules (NMSA 1978, § 47-8-31)
- `sanitary-code-variance`: Confirmed absent (NMG-E-011). No state sanitary code for housing or tenant notice of a variance; fire marshal variance for existing buildings (10.25.5.19 NMAC) has no notice rule
- `translation-duty`: Confirmed absent (NMG-E-012). No lease translation or type-size rule; language rules only for rental-purchase of goods, door-to-door sales (rentals excluded), foreclosure consultant contracts and subdivision disclosures
- `plain-language-consumer-statement`: Confirmed absent (NMG-E-013). No plain-language lease statute or consumer restrictions statement; listing plain-language disclosure only (NMSA 1978, § 47-8-19.1)
- `recycling-notice`: Confirmed absent (NMG-E-014). No landlord recycling service or notice duty; Recycling, Circular Economy and Illegal Dumping Act (NMSA 1978, ch. 74, art. 13) has none
- `inspection-notice-penalty`: Confirmed absent (NMG-E-015). No move-in or move-out inspection notice duty or penalty; deposit forfeiture and $250 bad-faith penalty in NMSA 1978, § 47-8-18(D)-(E)
- `subsidized-inspection-refusal`: Confirmed absent (NMG-E-016). No subsidized-housing inspection rule; general access (NMSA 1978, § 47-8-24) and refusal remedy (NMSA 1978, § 47-8-38(A)) apply
- `subsidy-habitability-proration`: Present (NMG-E-017). Abatement measured on total rent for subsidized tenancies; third-party payor or resident may abate (NMSA 1978, § 47-8-27.2(C)); stale one-month cap reference
- `repair-escrow-exemption-notice`: Confirmed absent (NMG-E-018, NMG-E-008). No repair rent escrow or small-landlord opt-out; act exemptions (NMSA 1978, § 47-8-9) not size-based; only escrow is the appeal escrow (NMSA 1978, § 47-8-47(A))
- `certificate-of-occupancy-disclosure`: Present (NMG-E-019). New residential building built under a permit may not be occupied until a certificate of occupancy issues (NMSA 1978, § 60-13-45(C)); no lease disclosure rule; 14.5.3 NMAC procedure not held
- `defective-drywall-disclosure`: Confirmed absent (NMG-F-001). No drywall term anywhere in the corpus searched; general safe-premises duty and Unfair Practices Act noted
- `ordnance-demolition-meter-disclosures`: Confirmed absent (NMG-F-002). No ordnance, demolition or shared-meter disclosure; NMSA 1978, § 47-8-40(A)(5), NMSA 1978, § 47-8-20(F) and 14.7.9.12 NMAC noted
- `prop65-rental-warning`: Confirmed absent (NMG-F-003). No chemical-exposure warning duty at rental property in statutes, constitution or session laws
- `shoreline-access-disclosure`: Confirmed absent (NMG-F-004). No shoreline or public-access disclosure; written consent of owner or lessee for access via private land (NMSA 1978, § 17-4-6(C))
- `military-air-zone-disclosure`: Confirmed absent (NMG-F-005). No military installation, noise or accident zone disclosure; Military Base Planning and Impact Act (2025) imposes no landlord duty
- `property-tax-rent-disclosure`: Confirmed absent (NMG-F-006). No landlord property-tax or rent-paid statement; elderly renter rebate uses six percent of gross rent (NMSA 1978, § 7-2-18(B))
- `foreclosure-disclosure`: Confirmed absent (NMG-F-007). No pre-lease foreclosure disclosure; points to edu-foreclosure-nm and the federal PTFA row
- `sfr-occupancy-disclosure`: Confirmed absent (NMG-F-008). No occupancy notice, notarization, lawful-occupancy presumption or lease type-size rule; type-size rules found only for other contracts
- `association-obligations-disclosure`: Confirmed absent (NMG-F-009). No tenant disclosure of association obligations; seller and condominium resale certificates run to purchasers; condominium lease of twenty years or more makes the tenant a purchaser
- `required-disclosures`: Present (NMG-F-010). Catalog of landlord disclosures confirmed; no other landlord disclosure in statutes, constitution or session laws; licensee rules (16.61 NMAC) not held
- `hazardous-contamination-disclosure`: Confirmed absent (NMG-F-011). No contamination, drug-lab or cleanup-restriction disclosure in statutes; environmental cleanup rules (title 20 NMAC) not held, so that part is Not located
- `asbestos-hazards`: Confirmed absent (NMG-F-012). No asbestos notice or disclosure duty in statutes or held NMAC; environment department asbestos rules (title 20 NMAC) not held
- `private-well-testing`: Confirmed absent (NMG-F-013). No private well testing or results disclosure; a landlord system serving 15 connections or 25 year-round residents is a community water system (NMSA 1978, § 74-1-13.1), whose rules are not held
- `adverse-proceeding-notice`: Confirmed absent (NMG-F-014, NMG-F-007). No general landlord notice of proceedings; mobile home park condemnation notice within seventeen days (NMSA 1978, § 47-10-5(D)) and condominium conversion notice only
- `hoa`: Present (NMG-F-015, NMG-F-009). Tenants bound by HOA and condominium documents; HOA fines and tenant suspensions with notice and hearing; child care homes from July 1, 2026; no statute on rental restrictions, approval fees or rent collection by associations
- `family-child-care`: Present (NMG-F-016). No landlord duty to allow child care; from July 1, 2026 association, zoning and fire-rule protections for child care homes (2026 N.M. Laws ch. 62)
- `home-business`: Confirmed absent (NMG-F-017). No tenant home-business right; NMSA 1978, § 47-8-25 lets the lease set the use; optional permission clause written
- `student-housing`: Confirmed absent (NMG-F-018). No student-housing statute; institutional residence exemption in NMSA 1978, § 47-8-9(A); private student rentals covered by the act
- `tenant-employee-housing`: Present (NMG-F-019). Employee occupancy exempt only with a written employment condition (NMSA 1978, § 47-8-9(E)); agricultural housing wage deduction (NMSA 1978, § 50-4-22(B)); no disclosure or move-out rule
- `farmland-hunting-rights`: Confirmed absent (NMG-F-020). No statute allocating hunting rights between landlord and tenant; posting and permission run to owner or lessee alike
- `communal-land-lease-approval`: Present (NMG-F-021). Land grant-merced common lands leased only by the board of trustees; article 2 grants: two-thirds resolution, thirty-day protest period, twenty-year cap
- `special-district-representation`: Confirmed absent (NMG-F-022). No lease statement on special districts; the public improvement district notice is a seller duty and excludes leasehold transfers (NMSA 1978, § 5-11-18.1(C)(7))
- `usufructuary-lessor`: Confirmed absent (NMG-F-023). No usufruct; no statute on life-tenant leases; spousal joinder for leases over five years (NMSA 1978, § 40-3-13(A)); successor liability (NMSA 1978, § 47-8-21(A))
- `electric-submetering-disclosure`: Present (NMG-G-001). No submetering lease disclosure; NMSA 1978, § 62-3-4(A)(1) excludes a person furnishing service only to its tenants; gas master meters fall under the Pipeline Safety Act (NMSA 1978, § 70-3-12(K))
- `utility-apportionment`: Present (NMG-G-002). Apportionment allowed; NMSA 1978, § 47-8-20(F) gives copies and calculations on request and bars allocating an empty unit's common-area share; no bar or formula
- `utility-interruption-submeter`: Present (NMG-G-003). No submeter interruption regime; NMSA 1978, § 47-8-36(A)(4) bars utility interference, with abatement and two times rent (NMSA 1978, § 47-8-48(C))
- `utility-shutoff-statute`: Present (NMG-G-004). 17.5.410 NMAC notice, hours, medical and previous-occupant rules; LIHEAP winter moratorium (NMSA 1978, § 27-6-18.1); emergency-order bar only by commission order; no storm rule
- `utility-disconnection-notice-authorization`: Present (NMG-G-005, NMG-G-003). 17.5.410.33 NMAC third-party notification program for any residential customer's designee ready to help pay; no owner authorization statute
- `utility-landlord-account`: Present (NMG-G-006, NMG-G-003). Owner's supply duty and NMSA 1978, §§ 47-8-27.1 to 47-8-27.2 remedies; 17.5.410.32 NMAC protects the tenant's own account; no pay-and-deduct, receiver or building-notice rule
- `utility-transfer`: Confirmed absent (NMG-G-007). No transfer deadline or landlord cutoff; previous-occupant rules in 17.9.560.12 NMAC and 17.5.410.32 NMAC; deployment suspension NMSA 1978, § 20-1-8.1
- `utility-allowance-cap`: Confirmed absent (NMG-G-008). No rebilling cap, allowance rule or fixed-rent rule; fees must be in the lease and late fees only on rent
- `meter-conservation-charge`: Confirmed absent (NMG-G-009). No on-bill or meter-attached efficiency charge or water-submeter surcharge rule; property-assessment financing (NMSA 1978, § 4-55D-2, NMSA 1978, § 5-18-7) binds the owner only
- `energy-data-release`: Confirmed absent (NMG-G-010). No benchmarking or owner data-release statute; 17.5.410.25 NMAC releases records to a person the customer authorizes in writing
- `shutdown-rent-protection`: Confirmed absent (NMG-G-011). No shutdown or furlough rent or eviction protection in NMSA 1978, the Constitution or 2025-2026 session laws
- `utility-deposit-return`: Present (NMG-G-012). NMSA 1978, § 47-8-18(C) lets the owner retain deposit for nonpayment of utilities; utility customer deposits under 17.5.410.16 to .19 NMAC
- `utility-disclosure-attachment`: Confirmed absent (NMG-G-013). No utility attachment; charges go in the rental agreement (NMSA 1978, § 57-12-27(C)); mobile home park disclosures (NMSA 1978, § 47-10-14, NMSA 1978, § 47-10-21)
- `fire-code-standard`: Present (NMG-G-015). State fire code (10.25.5 NMAC, IFC 2021) for public occupancies incl. 4+ family units (NMSA 1978, § 59A-52-15); IBC/IRC 2021 building codes; Elevator Safety Act; model code text not held (Not located for specifics)
- `fire-sprinkler-duty`: Present (NMG-G-014). No retrofit duty; NMSA 1978, § 60-13-6(E) bars required house sprinklers; 14.7.3.11 NMAC; IBC 903.2 text not held
- `sprinkler-disclosure`: Confirmed absent (NMG-G-014). No sprinkler disclosure, grant, loan or tax credit; model code text not held
- `heating`: Present (NMG-G-016). Reasonable heat duty, NMSA 1978, § 47-8-20(A)(4), (6), with the exclusive-control exception; no statutory minimum temperature or boiler act; code text not held
- `water-heater-temperature`: Not located (NMG-G-016). No temperature rule in statutes or held NMAC; plumbing code 14.8.2 NMAC not held
- `window-guards`: Confirmed absent (NMG-G-017). No guard duty or lease notice; NMRBC adopts IRC R312 and R310 (text not held: Not located for code specifics)
- `common-area-lighting`: Confirmed absent (NMG-G-017). Safe common areas duty (NMSA 1978, § 47-8-20(A)(3)); no lighting standard or tenant-meter rule; code text not held
- `steam-radiator-covers`: Confirmed absent (NMG-G-017). No radiator cover rule; only hit is a motor-vehicle tampering statute
- `balcony-inspection`: Confirmed absent (NMG-G-017). No balcony or deck inspection duty; general safe-condition duty (NMSA 1978, § 47-8-20(A)(2)-(3))
- `pool-safety`: Not located (NMG-G-018). No landlord pool duty in statutes or held NMAC; 14.7.3.25 NMAC barrier rules for 1-2 family dwellings; public pool rules 7.18 NMAC not held
- `statutory-early-termination`: Present (NMG-H-001). The act's tenant termination routes (NMSA 1978, §§ 47-8-26, 47-8-27.1, 47-8-31, 47-8-36, 47-8-38); no fraud-termination or omitted-statement forfeiture statute
- `infirmity-termination`: Confirmed absent (NMG-H-002). No infirmity, care-facility or death-or-incapacity termination rule; capacity to contract left to general law (NMSA 1978, § 47-8-4)
- `environmental-event-termination`: Confirmed absent (NMG-H-003). No disaster, contamination or emergency termination rule; fire or casualty (NMSA 1978, § 47-8-31) is the only damage rule
- `landlord-remedies-termination`: Present (NMG-H-004). Possession plus rent and separate damages (NMSA 1978, § 47-8-35); damages without termination (NMSA 1978, § 47-8-33(F)); no acceleration rule; no small claims court
- `eviction-hardship-stay`: Confirmed absent (NMG-H-005). No hardship stay or moratorium; only the rent-conditioned appeal stay (NMSA 1978, § 47-8-47) and a 7-day good-cause continuance (NMSA 1978, § 47-8-43(B)); no local-moratorium preemption
- `eviction-service-party`: Present (NMG-H-006). Service under Rules 2-202, 3-202 and 1-004 NMRA; no lease-designated tenant agent; Secretary of State accepts service for confidential-address participants (NMSA 1978, § 40-13B-4)
- `possession-bond`: Confirmed absent (NMG-H-007). No end-of-term possession bond or confessed-judgment bond; appeal deposit or supersedeas bond only (NMSA 1978, § 47-8-47(B))
- `redemption`: Present (NMG-H-008). Tender before the 3-day notice expires bars the action (NMSA 1978, § 47-8-33(D)); 3-day post-judgment remedy only under NMSA 1978, § 47-8-33(E); no redemption, reservation-wording or third-party-payment rule
- `forfeiture-redemption`: Present (NMG-H-009, NMG-H-008). Court declares forfeiture (NMSA 1978, § 47-8-46(A)); three-day conditional writ only under NMSA 1978, § 47-8-33(E); equitable defenses (NMSA 1978, § 47-8-45); no relief-from-forfeiture statute
- `social-security-defense`: Confirmed absent (NMG-H-010). No benefit-delay defense, continuance or reinstatement; subsidized-resident rules only for abatement (NMSA 1978, § 47-8-27.2(C)) and appeal payments (NMSA 1978, § 47-8-47(A))
- `cold-weather-vacate-notice`: Confirmed absent (NMG-H-011). No cold-weather vacate notice; extended-absence notice by lease (NMSA 1978, § 47-8-34(A)); heating-season utility moratorium is off point
- `notice-to-vacate-additional-terms`: Confirmed absent (NMG-H-012). No pending-notice alteration or terms rule; self-help bar (NMSA 1978, § 47-8-36(A)(6)-(7)), retaliation and conversion-notice rules apply; notice coupled with option to stay is ineffective (annotation)
- `minor-tenant-filing`: Present (NMG-H-013). Majority at 18 (NMSA 1978, § 28-6-1); emancipated minors contract and sue (NMSA 1978, § 32A-21-5); service and guardian rules (Rule 2-202 NMRA, Rule 2-401 NMRA); no filing bar
- `trespass-notice`: Present (NMG-H-014). Criminal trespass (NMSA 1978, §§ 30-14-1, 30-14-1.1) and posting (NMSA 1978, § 30-14-6) reach non-tenants; no landlord-specific, common-area or guest-defense rule
- `good-cause-notice`: Confirmed absent (NMG-H-015). No good-cause eviction statute and no coverage notice; good-cause hits are continuances, royalties and licensing
- `entity-landlord-court-representation`: Present (NMG-H-016). Rule 2-107 NMRA and Rule 3-107 NMRA, Paragraph B(2)-(4): owner, manager, closely held entity or partnership; no fee; no district-court non-attorney rule; NMSA 1978, § 36-2-27
- `limitation-of-actions`: Present (NMG-H-017). Written contract 6 years (NMSA 1978, § 37-1-3(A)); unwritten and property 4 years (NMSA 1978, § 37-1-4); revival by partial payment (NMSA 1978, § 37-1-16); no tenancy-specific period
- `confirmed-absences-outside-title`: Confirmed absent (NMG-H-018). No squatter statute, no registration precondition to possession, no assumed-name filing or suit bar; foreign-entity suit bars and any-person reporting duties present
- `repair-cost-termination`: Confirmed absent (NMG-H-019). No repair-cost termination; NMSA 1978, § 47-8-40(A)(5) only lifts the retaliation bar for code-required remodeling or demolition; municipal unfit-dwelling orders (NMSA 1978, § 3-46-43)
- `tenant-bankruptcy`: Confirmed absent (NMG-H-020). No state rule on evictions or writs after a tenant's bankruptcy; federal law governs (not held); landlord preference (NMSA 1978, § 48-3-6) tied to distress, unavailable for dwelling units (NMSA 1978, § 48-3-5(A))
- `eminent-domain`: Present (NMG-H-021). Just compensation (N.M. Const. art. II, § 20); condemnees named and assessed separately (NMSA 1978, §§ 42A-1-17(D), 42A-1-19(A)); tenant relocation payments (NMSA 1978, § 42-3-7); no lease-termination or award-allocation statute
- `construction-liens`: Present (NMG-H-022). Liens for labor and materials (NMSA 1978, § 48-2-2); owner's interest subject for work with knowledge unless notice of nonresponsibility posted within 3 days (NMSA 1978, § 48-2-11); no lease-based exemption
- `alt-housing`: Confirmed absent (NMG-I-001). No rehousing duty; abatement (NMSA 1978, § 47-8-27.2), termination (NMSA 1978, § 47-8-27.1) and casualty rights (NMSA 1978, § 47-8-31) instead; Relocation Assistance Act is public displacement only
- `appliances-excluded`: Present (NMG-I-002). Duty reaches appliances 'supplied or required to be supplied' (NMSA 1978, § 47-8-20(A)(4)); no presumption or exclusion statute; optional clause for items not supplied
- `furnishings-included`: Confirmed absent (NMG-I-003). No furnished-rental statute; furniture GRT deduction NMSA 1978, § 7-9-53(C); generic clause tagged
- `stove-refrigerator`: Confirmed absent (NMG-I-002). No duty to supply a stove or refrigerator; supplied ones maintained under NMSA 1978, § 47-8-20(A)(4)
- `disaster-duties`: Confirmed absent (NMG-I-004). No disaster tenancy, rent, eviction-moratorium or price-gouging statute; casualty (NMSA 1978, § 47-8-31) and repair remedies apply; emergency orders not held
- `disaster-displaced-guests`: Confirmed absent (NMG-I-005). No displaced-guest right or emergency suspension of guest limits; guest-fee bar NMSA 1978, § 47-8-15(E); shelter immunity NMSA 1978, § 12-10-8
- `emergency-contact`: Confirmed absent (NMG-I-006). No emergency-contact, emergency-number or lease hotline rule; owner disclosure NMSA 1978, § 47-8-19; contact uses NMSA 1978, §§ 47-8-34.1(A)(3), 47-8-34.2(B)
- `key-control-policy`: Confirmed absent (NMG-I-007). No key-control, master-key, rekeying, tenant lock-change or staff-access statute; entry NMSA 1978, § 47-8-24; lockout bar NMSA 1978, § 47-8-36(A)(2)
- `landlord-liability-insurance`: Confirmed absent (NMG-I-008). No landlord liability insurance mandate, registration or disclosure; tort law unchanged (NMSA 1978, § 47-8-20(B))
- `lease-type-parity`: Confirmed absent (NMG-I-009). No parity rule or rent-differential cap between lease types; statutory differences in NMSA 1978, §§ 47-8-15(C), (F), 47-8-18(A), 47-8-37
- `lease-type-size`: Confirmed absent (NMG-I-010). No residential lease type-size rule or evidentiary sanction; type sizes only for listed consumer documents
- `other-landlord-facilities`: Present (NMG-I-011). Elevator Safety Act owner duties (NMSA 1978, §§ 60-13B-8, 60-13B-11); maintenance and amenity rules; no garage-door-opener duty
- `parking-rules-notice`: Present (NMG-I-012). Rules test and notice (NMSA 1978, § 47-8-23), fees in lease, DOT trespass-tow signage and authorization (18.3.12.14 NMAC); no parking-specific lease rule
- `periodic-services-entry`: Present (NMG-I-013). Entry for agreed services on 24-hour written notice unless otherwise agreed (NMSA 1978, § 47-8-24(A)(1)-(2)); no conspicuousness rule; option not offered
- `purpose-limitation`: Present (NMG-I-014). Dwelling-use default (NMSA 1978, § 47-8-25); lease voidable for prostitution or gambling use (NMSA 1978, §§ 30-9-9, 30-19-11); liquor nuisance closure
- `renters-insurance-rules`: Confirmed absent (NMG-I-015). No renter's insurance statute (carrier choice, force-placed coverage, advisory or flood notice); requirement allowed by lease; fees must be in the lease
- `tenant-insurance-claims`: Confirmed absent (NMG-I-016). No accidental-fire immunity, subrogation or mutual-waiver statute; tenant liable for negligent damage (NMSA 1978, §§ 47-8-22(F), 47-8-31(B))
- `repair-notice`: Present (NMG-I-017). Written notice conditions remedies (NMSA 1978, §§ 47-8-27.1(A), 47-8-27.2(A)); NMSA 1978, § 47-8-19(D) excuses notice; retaliation protects written requests; no prescribed form
- `designated-repairer`: Confirmed absent (NMG-I-018). No designated-repairer or repair-and-deduct statute; tenant work only under NMSA 1978, § 47-8-20(C)-(E); optional NM clause
- `pest-control-notice`: Not located (NMG-I-019). No statutory occupant pesticide notice; board rules under NMSA 1978, § 76-4-9(A)(5), (18) not held; local rules preempted (NMSA 1978, § 76-4-9.1)
- `bed-bug-cooperation`: Confirmed absent (NMG-I-020). No bed bug or pest cooperation statute or rule in the parts held; general repair and tenant duties apply; optional NM clause with the act's fault wording
- `smart-access`: Confirmed absent (NMG-J-001). No smart-lock, electronic-entry or connected-device statute; entry, lockout, maintenance and Data Breach Notification Act rules apply
- `tenant-portal`: Confirmed absent (NMG-J-002). No portal or payment-method statute; UETA consent and refusal right, paper notices, fee-in-lease and screening-fee rules apply
- `tpa-sunset`: Confirmed absent (NMG-J-004). No rent-cap or just-cause statute; no repeal or sunset date for the act, the Mobile Home Park Act or the rent-control bar
- `tpa-notice`: Confirmed absent (NMG-J-003, NMG-J-004). No tenant right of first refusal or sale notice and no rent-cap notice; condominium-conversion offer (NMSA 1978, § 47-7D-12) is the one purchase right
- `tpa-exemption-notice`: Confirmed absent (NMG-J-004). No rent-cap or just-cause rule, so no exemption notice; act exemptions (NMSA 1978, § 47-8-9) need no notice
- `prohibited-acts-renter`: Present (NMG-J-005). Tenant prohibitions are the resident's duties in NMSA 1978, § 47-8-22 (F and I); no other residential tenant prohibited-acts list
- `telecom-access`: Confirmed absent (NMG-J-006). No provider-access, tenant-choice, rent-differential or exclusive-provider statute; entry exception NMSA 1978, § 47-8-24(A)(2) and services lockout bar NMSA 1978, § 47-8-36(A)(4) apply
- `portable-solar`: Confirmed absent (NMG-J-007). No tenant solar installation right; NMSA 1978, § 3-18-32(B) voids instrument terms that effectively prohibit solar collectors (lease reach unsettled); interconnection rule 17.9.568 NMAC not held
- `portable-cooling-device`: Confirmed absent (NMG-J-008). No tenant cooling-device right or cooling duty; owner maintains cooling it supplies (NMSA 1978, § 47-8-20(A)(4))
- `ev-charging-requirements`: Confirmed absent (NMG-J-009). No tenant EV-charging right or landlord-condition rule; energy codes require EV readiness in new construction (14.7.6.12 NMAC, 14.7.9.12 NMAC); retail vehicle-fuel electricity excluded from public utility (NMSA 1978, § 62-3-4(A)(1))
- `ev-charging-shared-area`: Confirmed absent (NMG-J-009). No shared-area EV charging rule; common-area duty, rule conditions (NMSA 1978, § 47-8-23) and tenant-work writing rule (NMSA 1978, § 47-8-20(C)-(D)) apply
- `ev-charging-end-of-tenancy`: Confirmed absent (NMG-J-009). No rule on removal or ownership of a tenant-installed charger; move-out, deposit and property-left-behind rules apply; fixture law not read
- `animal-care-access`: Confirmed absent (NMG-J-010). No animal-care entry right or caretaker statute; entry (NMSA 1978, § 47-8-24, § 47-8-34(B)), cruelty (NMSA 1978, § 30-18-1) and property-left rules apply
- `pet-eviction-fact-sheet`: Confirmed absent (NMG-J-010). No pet eviction fact sheet or animal-eviction rule (statutes, session laws and court rules); park pet exemption NMSA 1978, § 47-10-15.1(B) only
- `waterbed`: Confirmed absent (NMG-J-011). No waterbed, liquid-filled furniture or floor-load rule in statutes, session laws or held NMAC parts
- `confirmed-absences-misc`: Confirmed absent (NMG-J-001, NMG-J-002, NMG-J-003, NMG-J-004, NMG-J-006, NMG-J-007, NMG-J-008, NMG-J-009, NMG-J-010, NMG-J-011). Summary of slice J access and property-use absences; each listed row carries its own battery
- `confession-of-judgment`: Present (NMG-MAIN-001). NMSA 1978, § 39-1-16 voids pre-claim confession provisions in a written contract to pay money; no lease-specific rule
- `binding-arbitration`: Present (NMG-MAIN-002). NMSA 1978, § 44-7A-5 disabling civil dispute clause in a standard form lease voidable by the tenant; no other lease arbitration statute
- `portfolio-thresholds`: Present (NMG-MAIN-003). rerun of NMG-D-008 after the independent check (adds 'at least N units' forms): business improvement district four-unit threshold and Stop Notice Act four-unit scope found

### §4 Decisions and questions asked of Taylor

**New Mexico items 8-10 (main pass).**
- `smoking-policy`, `no-alterations`, `addendum-precedence` (central edits merged 2026-10-04): each confirmed for New Mexico, one line each in "Decisions recorded during the canvass" below.
- `keys` and `hoa-compliance`: both fit as tagged; no override proposed (below).
- Item 9(a) early termination: revised `early-termination-nm` proposed in §6 (flat one-month fee, RECOMMENDED, NM's own sentences kept).
- Item 9(b) casualty fault persons: the two clauses don't name the same persons; a wording change to `casualty-termination-nm` only is proposed in §6.
- Item 9(c) CARES: no NM eviction row contradicts `edu-cares-act-notice` (below).
- Item 10 arbitration: the shared `arbitration-agreement` clause is not tagged NM; `edu-binding-arbitration-nm` says why (below).

#### Class decisions (numbered; rows cite them as "NM gaps log §4 class decision N")

Cite these in notes as "NM gaps log §4 class decision N". Every quotation below was copied from the corpus by the main pass; open the section yourself (`sec.py`) before quoting any further words of it.

1. **Waiver bar.** 'No rental agreement may provide that the resident or owner agrees to waive or to forego rights or remedies under the law.' (NMSA 1978, § 47-8-16). There is no separate "cannot be waived" sentence section by section in the act: this one section is the act's non-waiver rule. A waiver of a rule New Mexico does not have is empty, not lawful (rule 27 [WY-gaps]); say which.
2. **Deliberate-use remedy.** 'If an owner deliberately uses a rental agreement containing provisions known by him to be prohibited by law, the resident may recover damages sustained by him resulting from application of the illegal provision and reasonable attorney's fees.' (NMSA 1978, § 47-8-17). Point to `edu-prohibited-terms-nm` and `edu-attorney-fees-nm`; never call it a penalty or a fixed sum.
3. **Inequitable terms.** NMSA 1978, § 47-8-12(A): a court that finds a provision 'was inequitable when made' 'may limit the application of such inequitable provisions to avoid an inequitable result.' Terms allowed: 'The owner and resident may include in a rental agreement terms and conditions not prohibited by the Uniform Owner-Resident Relations Act or other rule of law' (NMSA 1978, § 47-8-14).
4. **Fees must be in the agreement.** 'It is an unfair or deceptive trade practice for an owner to charge fees that are not included in the rental agreement in violation of the Uniform Owner-Resident Relations Act.' (NMSA 1978, § 57-12-27(C)); for applicants, 'It is an unfair or deceptive trade practice for an owner to charge a fee to an applicant that is not a screening fee or deposit or that was not published in a listing for rental of a dwelling unit in violation of the Uniform Owner-Resident Relations Act.' (NMSA 1978, § 57-12-27(B)), effective June 20, 2025 (2025 N.M. Laws ch. 122, § 9; the act has no effective-date clause, so the default ninety days after adjournment applies). Any fee a new clause describes is a fee the Lease states, as a figure or a `{{variable}}`, never "as permitted by law". Point to `fees-and-charges-nm` and `edu-fee-transparency-nm`.
5. **Late fee.** NMSA 1978, § 47-8-15(D) as amended by 2025 N.M. Laws ch. 122, § 6: only 'If the rental agreement provides for the charging of a late fee'; 'not to exceed five percent of the rent for each rental period that the resident is in default'; 'Late fees shall be calculated only based on rent.'; notice 'no later than the last day of the next rental period immediately following the period in which the default occurred.' Point to `late-fee-nm`, `edu-late-fee-cap-nm`.
6. **Fault wording for any new charge clause** (rule 26 [MI-gaps 2]). Use the act's own words, from two sections, never merged: the resident shall 'not deliberately or negligently destroy, deface, damage, impair or remove any part of the premises or knowingly permit any person to do so' (NMSA 1978, § 47-8-22(F)); 'normal wear and tear' (NMSA 1978, § 47-8-3(K)) excludes deterioration from 'negligence, carelessness, accident, abuse or intentional damage of the premises, equipment or chattels of the owner by the residents or by any other person in the dwelling unit or on the premises with the resident's consent' (NMSA 1978, § 47-8-3(K)). Clause wording to reuse: "caused by the deliberate or negligent act of Tenant, a member of Tenant's household, or another person on the Premises with Tenant's consent". Recover actual, reasonable cost only; no fixed charge for breach (the penalty doctrine was not searched; cautious course).
7. **Separate writing for tenant work.** NMSA 1978, § 47-8-20(C) (single family residence: 'only if the transaction is in writing, for consideration, entered into in good faith and not for the purpose of evading the obligations of the owner'); NMSA 1978, § 47-8-20(D) (other units: 'set forth in a separate writing signed by the parties and supported by consideration'); NMSA 1978, § 47-8-20(E). The rule 48 chore split stands (Taylor): `landscaping-irrigation` and `snow-removal` bind only for a single family residence (NMSA 1978, § 47-8-3(U)); `maintenance-allocation-nm` is the separate agreement for other units.
8. **Scope of the act.** Exemptions: NMSA 1978, § 47-8-9 (read it: institutions, contract-of-sale occupants, fraternal or social organizations, 'transient occupancy in a hotel or motel', employees under a written agreement conditioning occupancy on employment, agricultural premises), 'Unless created to avoid the application of the Uniform Owner-Resident Relations Act'. Mobile home parks: the act applies to park owners and residents 'Unless a provision of the Mobile Home Park Act [Chapter 47, Article 10 NMSA 1978] directly conflicts' (NMSA 1978, § 47-8-52); a row on a park topic names that boundary. Point to `edu-scope-nm`.
9. **Notice service.** NMSA 1978, § 47-8-13 (read whole): (C)(3) resident receives written notice 'when it is delivered in hand to the resident or mailed to him at the place held out by him as the place for receipt of the communication, or in the absence of such designation, to his last known place of residence'; nonpayment notice 'effective only when hand delivered or mailed to the resident or posted on an exterior door of the dwelling unit' (NMSA 1978, § 47-8-13(D)), and other notices posted must also be mailed first class or hand delivered. E-mail notices: `electronic-notice-nm` (eviction-type notices excluded by NMSA 1978, § 14-16-3(B)(2)(b)).
10. **Cases.** No opinion is read in this pass. A case may be named only as summarized in the compilation's annotation, with the words "as summarized in the compilation's annotation; opinion not read" (that phrase is library text: write it in double quotes, "as summarized in the compilation's annotation; opinion not read"). Annotations are not statute text: never single-quote annotation words. Where only case law could settle a point, state the doubt and the cautious course in the row and keep it VERIFIED (Part 5 NEEDS_REVIEW policy).
11. **NEEDS_REVIEW** only where a primary source that the row needs cannot be reached (an NMAC part, model code or court rule not held). Interpretive doubt alone never makes a row NEEDS_REVIEW.
12. **Federal law** is not held in this pass. Don't state what a federal statute requires unless an existing federal row tagged NM states it; then point to that row (`edu-cares-act-notice`, `edu-assistance-animals-federal-enforcement`, `edu-ptfa-foreclosure-tenants`, `edu-fcra-adverse-action-notice`, `edu-voucher-tenancy-addendum`, `lead-based-paint`). Otherwise write "federal law (not read for this row) may also apply" and prefix any federal citation `FEDERAL:`.
13. **Local ordinances** (Albuquerque, Santa Fe, Las Cruces and others) are named, never researched (rule 3). State preemption found: rent control (NMSA 1978, § 47-8A-1, `edu-rent-control-nm`) and firearms (N.M. Const. art. II, § 6).
14. **Absence body wording.** A confirmed-absence body names its corpus in the body: "No New Mexico statute, constitutional provision or 2025-2026 session law searched for this library ..." and add "or rule in the New Mexico Administrative Code parts searched (list them)" or "or court rule" only where the battery's scope included them. Boundary in notes: what was searched (battery scope) and what wasn't (case law, local codes, federal law, NMAC parts not held).
15. **Not located vs Confirmed absent** (rule 36). Where the subject lives in a source the corpus doesn't hold (an NMAC part not held, a model code), the verdict is Not located: name the missing source and the section that would answer, say what was proved inside the corpus, and what applies in its place.
16. **Existing NM rows are never edited.** A topic answered by a row keyed to another topic still gets its own short row keyed to its own topic (rule 27 [LA 5]) that points to the other row by id in backticks.
17. **Effective dates.** 2025 regular-session acts without an effective-date clause took effect June 20, 2025; 2026 regular-session acts without one, May 20, 2026. Read the act's own effective-date section before stating a date. 2026 N.M. Laws ch. 62 (SB 96), § 6: 'The effective date of the provisions of this act is July 1, 2026.'
18. **Option rows (rule 54).** A lawful option the library declines gets an education row saying it exists, why it isn't offered, and that the landlord can add their own clause. An option that is lawful and serves the landlord is offered as a clause ("[Optional.]" first word of bodyText, rule_type CONDITIONAL or RECOMMENDED, lease_clause_basis SERVES_LANDLORD or CONSTRAINED_TERM). Declined or barred options in the NM log §6.1 stand; record them.

#### Decisions recorded during the canvass

- `rent-into-court-counterclaim`: Legal-watch item kept open: NMSA 1978, § 47-8-27.2(C) refers to an abatement limitation of one month's rent that the section does not contain; the 1995 and 1999 session laws are not in the corpus, so the origin could not be checked. The row tells landlords not to assume a cap. Recommend the main pass list it again in the NM log legal-watch items (NM log §10 item 5(e)).
- `jury-waiver`: Legal call (rule 76): a pre-dispute lease jury waiver is treated as barred on the face of NMSA 1978, § 47-8-16, because the jury right exists by statute in metropolitan and magistrate civil actions (NMSA 1978, § 34-8A-5(A), NMSA 1978, § 35-8-1) and by N.M. Const. art. II, § 12. No statute, court rule or case read addresses contractual jury waivers; the row states the doubt and the cautious course (rule 54, NM gaps log §4 class decision 18). NM log §6.1's 'not offered, no education row' becomes this PROHIBITED education row.
- `part5-nonwaivable`: Legal call: agreements the act itself authorizes ('unless otherwise agreed' in NMSA 1978, § 47-8-15(B), § 47-8-21, § 47-8-24(A)(1), § 47-8-25, § 47-8-34.1(C); NMSA 1978, § 47-8-34.2(E); NMSA 1978, § 47-8-20(C)-(D)) are read as not being NMSA 1978, § 47-8-16 waivers. Stated in the row as the library's reading.
- `casualty-and-mitigation-waivable`: Legal call: a lease term excusing the owner from mitigating (NMSA 1978, § 47-8-6(A)) is read as a resident's waiver of a remedy under the law, barred by NMSA 1978, § 47-8-16; mitigation case law not searched. Stated in the row as the library's reading.
- `habitability-presumption`: October lead 'Not located' corrected to 'Confirmed absent': the act and the whole code are held and searched (battery NMG-A-003); nothing lies outside the corpus for this subject except case law (T.W.I.W., Inc. v. Rhudy noted only as summarized in the annotation).
- `fee-in-lieu-of-deposit`: Rule 54 option declined with an education row (`edu-no-fee-in-lieu-of-deposit-rule-nm`): a fee in lieu of a deposit stated in the Lease is lawful (NMSA 1978, § 47-8-14; NMSA 1978, § 57-12-27(C)), but its terms come from a third-party product no statute regulates; the existing fee-in-lieu variables are not reused for New Mexico.
- `nonrefundable-deposit-notice`: Rule 26 tag screen: `nonrefundable-fees-wv` (shared, 14 states) not tagged NM. Its notes rest on W. Va. Code § 37-6A-1(14), and New Mexico's REQUIRED_DISCLOSURE fee list `fees-and-charges-nm` already lists every fee, so a second list would duplicate it; NM answer is `edu-no-nonrefundable-deposits-nm`.
- `carpet-cleaning`: Rule 26: `carpet-cleaning-ar` (shared, 15 states) not tagged NM. Charging professional-cleaning cost for carpets left as clean as at move-in apart from ordinary wear risks a deposit 'retained to cover normal wear and tear' (NMSA 1978, § 47-8-18(C)), and the covenant may need a separate writing outside a single family residence (NMSA 1978, § 47-8-20(D)(1)); New Mexico gets `carpet-cleaning-nm`, which charges actual cost only for carpets left substantially less clean (the `security-deposit-use` standard) or damaged (class decision 6 wording).
- `government-fee-reimbursement`: Rule 26: `government-fee-reimbursement-ky` (shared, 10 states) not tagged NM: it bills a government fee by later notice without the Lease stating it, contrary to NMSA 1978, § 57-12-27(C) and NMSA 1978, § 47-8-19.4 (class decision 4). The NM route is a stated fee in `fees-and-charges-nm`; education row `edu-government-fee-reimbursement-nm`.
- `required-fees`: Rule 26: `fees-and-charges-vi` (shared, 10 states) not tagged NM: a second fee list beside `fees-and-charges-nm`, and its no-new-fee sentence omits the NMSA 1978, § 47-8-19.4 sixty-day increase route.
- `tax-escalation`: Rule 26: `tax-insurance-escalation-la` (shared, 21 states) not tagged NM: a mid-term share of tax or premium increases is either a mid-term rent increase (NMSA 1978, § 47-8-15(F)) or a fee whose amount the Lease does not state (NMSA 1978, § 57-12-27(C), NMSA 1978, § 47-8-19.4). Declined option recorded in `edu-tax-escalation-nm` (rule 54). `edu-rent-tax-nm` checked against NMSA 1978, § 7-9-53 and the held 3.2 NMAC parts: no finding.
- `expedited-deposit-disposition`: Battery NMG-B-007 is superseded by NMG-B-008 (same terms, apostrophes written as \x27; identical counts). Only NMG-B-008 is cited.
- `deposit-cost-schedule`: Erratum B-E1 (history-line quotes without section numbers in `edu-no-deposit-cost-schedule-rule-nm`) was filed before the validator change that ignores section signs in double quotes; it is harmless and may be applied or dropped at assembly.
- `rent-receipt-anti-waiver`: Read the topic as the topic reference frames it (the URLTA receipt-of-rent analogue) and, per the main pass's item, also covered receipts and acceptance of part payment in general obligations law: two rows, `edu-no-rent-receipt-anti-waiver-nm` (absence; lender and successor position) and `edu-full-payment-check-nm` (NMSA 1978, § 55-3-311), both pointing to `edu-rent-receipts-nm` and `edu-no-waiver-by-acceptance-rule-nm`, which are left unchanged.
- `rent-escalation`: Kept the October decline of a mid-term escalation clause (NM log §6.1; class decision 18) and wrote `edu-rent-escalation-nm` as its option row. For the main pass at sync: NMSA 1978, § 47-8-39(C) lets an owner raise rent 'as provided under the terms of the rental agreement' (NMSA 1978, § 47-8-39(C)) as well as at the end of the term, which is textual support for a step fixed in the lease at signing; `edu-rent-increase-notice-nm` notes do not mention it. Not a finding (the row's statement is cautious, not wrong).
- `optional-lease-terms`: Builder item (rule 54 [NH 2]): no New Mexico clause states where rent is paid, and 'Unless otherwise agreed, rent is payable at the dwelling unit.' (NMSA 1978, § 47-8-15(B)). Proposed clause for sync (id `rent-payment-place-nm`, group Rent & Payment, LEASE_CLAUSE, SERVES_LANDLORD, reusing {{rent_payee_name}} and {{rent_payee_address}}): "Tenant will pay Rent to {{rent_payee_name}} at {{rent_payee_address}}, or by an accepted payment method under this Lease. Rent is not payable at the property unless Landlord agrees in writing." A later change of place should be by written agreement, since the place is the one 'agreed upon by the parties' (NMSA 1978, § 47-8-15(B)). Not written as a row here because the topic is answered by `edu-optional-lease-terms-nm`.
- `optional-lease-terms`: Lease-invoked rights not offered as clauses, recorded: shorter entry notice (NMSA 1978, § 47-8-24(A)(1); declined in October, `edu-landlord-entry-nm`); mid-term increase under the lease (NMSA 1978, § 47-8-39(C); declined, `edu-rent-escalation-nm`); a different deceased-resident procedure (NMSA 1978, § 47-8-34.2(E); the statutory procedure suffices); seller or manager staying liable, and storage after a writ (NMSA 1978, § 47-8-21, NMSA 1978, § 47-8-34.1(C); the defaults favour the owner). Each is lawful; none needs a new row.
- `automatic-renewal`: Builder item: in `automatic-renewal-nm`, {{renewal_notice_days}} (existing variable) must be at least 30 for New Mexico, because a fixed-term rent increase needs written notice 'at least thirty days prior to the end of the term' (NMSA 1978, § 47-8-15(F)); the fee sentence carries the fixed sixty-day minimum (NMSA 1978, § 47-8-19.4).
- `dv-deposit-timing`: Drafting call: where one co-tenant leaves and the rental agreement continues, the row's cautious course is a written all-tenant agreement, otherwise holding the deposit for the tenancy as a whole until the rental agreement ends, because NMSA 1978, § 47-8-18(C) runs the thirty days from 'termination of the rental agreement or resident departure, whichever is later' and is silent on co-tenants; no case read.
- `dv-lockchange`: Legal call (rule 76): a lock change that carries out a Family Violence Protection Act order granting the protected tenant sole possession (NMSA 1978, § 40-13-5(B)(1)) is read as not an exclusion 'without a court order' under NMSA 1978, § 47-8-36(A); orders that only enjoin abuse or contact (including emergency orders, NMSA 1978, § 40-13-3.2(C)) are read as not authorizing it. No case read; stated in the row as the library's reading with the cautious course.
- `dv-protection-order-chapter-moved`: Legal-watch item for the NM log: NMSA 1978, § 47-8-33(J) (1995) refers to a 'temporary domestic violence restraining order', while the Family Violence Protection Act (1987) issues emergency, temporary and final 'orders of protection' (NMSA 1978, § 40-13-2(I), NMSA 1978, § 40-13-3.2, NMSA 1978, § 40-13-4, NMSA 1978, § 40-13-5). The rows treat any FVPA order or petition, and valid foreign or tribal orders, as qualifying (cautious course); no case read.
- `portfolio-thresholds`: Legal call: NMSA 1978, § 28-1-9(A)(1) speaks of 'the seller'; the row applies the three-single-family-dwelling cap to rentals as the cautious course (the exemption's lead-in covers dwellings 'sold, leased, subleased or rented by an owner'). No case read.
- `sex-offender-disclosure`: Preemption found for NM gaps log §4 class decision 13's list: NMSA 1978, § 29-11A-9(A) preempts local sex offender registration, notification and other restrictions (library reading; no case read). Recommend the main pass add it beside rent control and firearms.
- `condemned-premises-rent-bar`: October lead 'Not located' corrected to 'Confirmed absent': a condemned-premises rent bar would live in the statutes (held whole and searched, battery NMG-E-010); only case law, not held, could add one. The row gives the cautious course (no rent while a vacate or closing order is in effect).
- `inspection-notice-penalty`: October lead ('Answered elsewhere: abusive or unlawful entry remedies in edu-landlord-entry-nm') read the topic as entry for inspections; the other states' rows on this topic (for example `edu-inspection-notice-penalty-mn`, `edu-no-inspection-notice-penalty-de`) concern the move-in or move-out inspection notice and deposit penalties. Answered on that reading with `edu-no-inspection-notice-penalty-nm`; entry remedies unchanged.
- Slice E focus answer (main pass item 6: state statute or rule, or only local codes). State law reaches: lease-registration (recording of leases over five years with options, NMSA 1978, § 14-9-1); substandard-property-receivership (municipal unfit-dwelling orders and liens, NMSA 1978, § 3-46-43; dangerous buildings, NMSA 1978, § 3-18-5; county powers via NMSA 1978, § 4-37-1; no receivership); inspection-condemnation-disclosure (mobile home parks only, NMSA 1978, § 47-10-5(D)); condemned-premises-rent-bar (no bar; abatement and casualty rules, NMSA 1978, § 47-8-27.2, NMSA 1978, § 47-8-31); accessory-dwelling-unit (only the multigenerational two-kitchen mandate, NMSA 1978, § 3-21-1(F)); landlord-registration (no landlord registration; general municipal business registration and licensing, NMSA 1978, § 3-38-1, NMSA 1978, § 3-38-3, left to ordinance; broker licence for managers for others, NMSA 1978, § 61-29-1); tenant-rights-statement (mobile home park ADR statement, NMSA 1978, § 47-10-14(A)(9)); plain-language-consumer-statement (listing disclosure only, NMSA 1978, § 47-8-19.1). Only local codes (or nothing found): rights-responsibilities-guide, single-family-zone-lease-limit (zoning delegated, NMSA 1978, § 3-21-1(A)), health-district-rental-rules, lead-safe-certification and lead-state-notices (no state lead law for housing; federal `lead-based-paint` only), sanitary-code-variance (fire marshal variances, 10.25.5.19 NMAC, no notice), translation-duty, recycling-notice. No state preemption of local landlord rules found beyond rent control (NMSA 1978, § 47-8A-1); battery NMG-E-001 t4. Local ordinances named, not researched: Albuquerque, Santa Fe, Las Cruces.
- Source note: the slice instructions called 14.12 NMAC the housing code parts held; 14.12.1 to 14.12.5 NMAC are Manufactured Housing Division rules (licensing, trust accounts, installation), not a minimum housing code. No state housing or property maintenance code is among the held NMAC parts; the act incorporates applicable minimum housing codes (NMSA 1978, § 47-8-3(E), NMSA 1978, § 47-8-20(A)(1)) and municipalities may adopt a housing code by reference (NMSA 1978, § 3-17-6(A)(7)). The certificate-of-occupancy procedure lives in 14.5.3 NMAC (not held); `edu-certificate-of-occupancy-nm` states only the statute and says so.
- `foreclosure-disclosure`: Not tagged: `foreclosure-disclosure-nv` (NV;SC;IL;OK;MI). Its notes rest on NRS 118A.275 and it puts in the lease a statement that the landlord disclosed foreclosure status, which New Mexico does not require (battery NMG-F-007); tagging would present a required-looking disclosure New Mexico lacks (rule 26, both ways). The landlord may add a voluntary statement of their own; `edu-no-foreclosure-disclosure-nm` gives the cautious course.
- `association-obligations-disclosure`: Not tagged: `association-documents-delivery-ks` (KS;NC;MO;ID;IN). Its last sentence, "Landlord is not responsible for any act or decision of the association", is an exculpatory term, which the NM log §6.1 treats as barred by NMSA 1978, § 47-8-16 (exculpation-free variants only). No new NM acknowledgment clause is offered: `hoa-compliance` (tagged NM) binds the tenant, and `edu-no-association-disclosure-nm` tells the landlord to hand over the documents and that an own acknowledgment may be added (rule 54, NM gaps log §4 class decision 18).
- `required-disclosures`: Drafting call: required-disclosures is answered by one catalog education row (`edu-required-disclosures-nm`, REQUIRED) that points to the row for each duty, rather than tagging a shared receipt-of-disclosures clause (`required-disclosures-me`, `required-disclosures-dc` and the licensee-status clauses are single-state and rest on their own statutes). The real estate licensee-landlord status question is Not located: 16.61 NMAC (Real Estate Commission rules) is not held; NMSA 1978, § 61-29-10.2 sets only the licensee's duty-list delivery.
- `hoa`: Not tagged: `association-approval-la` (shared, 18 jurisdictions). It has the tenant pay or the parties choose who pays "The association's application or approval fee" as a hand-filled choice, not a figure or variable, against NM gaps log §4 class decision 4, and a tenant-paid application fee risks NMSA 1978, § 47-8-19.2(A)(5) ('shall not charge any other fees to process an application') and NMSA 1978, § 57-12-27(B). No NM approval clause is offered (rule 54: lawful option declined, education row `edu-hoa-nm` says so and that the landlord may add their own).
- `home-business`: Not tagged: `home-business-permission-co` (CO;UT;MO;IN;OK): its repair term charges for damage "caused by the business" regardless of fault (NM gaps log §4 class decision 6 requires the act's deliberate-or-negligent standard), and its notes rest on Colorado's association statute. New NM optional clause `home-business-permission-nm` written instead, also serving family-child-care; it reuses {{tenant_insurance_minimum}} and adds no new variable.
- `tenant-employee-housing`: Builder item: `employee-occupancy-conditional-nm` should be offered only when the landlord states that the occupant is the landlord's own employee working in and about the premises; selecting it takes the occupancy outside the Uniform Owner-Resident Relations Act (NMSA 1978, § 47-8-9(E)), so the builder should warn that other NM rows (deposit, notice, repair rows) are written for tenancies the act covers.
- `communal-land-lease-approval`: The main pass expected a one-line confirmed absence for this territory topic; battery NMG-F-021 found land grant-merced common-land leasing rules (NMSA 1978, chapter 49), so the row states them briefly and confirms absence for any other communal-land approval rule.
- `heating`: New optional clause `heat-freeze-protection-nm` (SERVES_LANDLORD, CONDITIONAL): tenant keeps the heat on at a landlord-chosen minimum during landlord-chosen months and pays the actual, reasonable cost of freeze damage only on the class decision 6 fault wording; the season and temperature are hand-filled [bracketed prompts], so no new variable.
- `utility-transfer`: NMSA 1978, § 20-1-8.1 lets a deployed service member suspend regulated utilities in the member's own name only if the lease 'does not preclude suspension' (NMSA 1978, § 20-1-8.1(A)(3)); the NM-tagged `utility-service-continuity` clause precludes interrupting water, gas, electricity, sewer and trash, which the library treats as lawful (the statute expressly lets the lease preclude it). Recorded in `edu-no-utility-transfer-rule-nm`; no change to the shared clause.
- `pool-safety`: Rows whose answer turns on an unheld source (model codes, 14.8.2 and 14.9.2 NMAC, the department's water recreation facility rules, the water utility rule attachment to 17.12.760.10 NMAC) are kept VERIFIED with a Not located verdict and a cautious course, following the other slices' practice (B: `edu-collection-fee-nm`); the pool battery object's note names the department rule by a citation that the corpus does not hold, so read it as "the department's water recreation facility rules (not held)" (row notes corrected by erratum G-E10).
- `utility-shutoff-statute`: Public Regulation Commission rules read in full for this slice: 17.5.410, 17.9.560, 17.9.570, 17.9.572, 17.12.760 and 17.13.1 NMAC. 17.9.570 (cogeneration and net metering) and 17.9.572 (renewable portfolio) contain nothing on landlords or tenants beyond a qualifying-facility transfer clause (17.9.570.15 NMAC); 17.12.760.10 NMAC puts the water utilities' customer service rules in a PDF attachment the corpus does not hold, and 17.10.650 NMAC (gas) and 17.13.960 NMAC (sewer customer service) are not held.
- `environmental-event-termination`: Option row (rule 54, class decision 18): an opt-in landlord right to end the lease for an environmental event that leaves the unit usable is lawful in principle (NMSA 1978, § 47-8-14) but is not offered: NMSA 1978, § 47-8-12(A) lets a court limit a term inequitable when made, and physical-damage events are already covered by `casualty-termination-nm`. `edu-no-environmental-event-termination-nm` says it exists, why it is declined, and that the landlord can add their own clause. October lead 'Not located' corrected to 'Confirmed absent' (statute held whole).
- `eviction-service-party`: Option row (rule 54, class decision 18): no lease clause naming a person to accept eviction papers for the tenant (the shape of `eviction-service-party-mp`) is offered for New Mexico; Rule 2-202 NMRA, Paragraph F(1) has no individual-agent route in magistrate court and whether a lease appointment is 'authorized by appointment' under Rule 3-202 NMRA and Rule 1-004 NMRA is unsettled. Stated in `edu-eviction-service-party-nm`.
- `tenant-bankruptcy`: Federal candidate (topic block): a shared federal row on the automatic-stay exceptions for residential evictions and the lease assume-or-reject deadline (FEDERAL: 11 U.S.C. § 362(b)(22)-(23), (l), (m); FEDERAL: 11 U.S.C. § 365(d)) would serve New Mexico; not drafted here because federal law is not held in this pass (NM gaps log §4 class decision 12). Builder item: when such a federal row exists, tag NM and point `edu-tenant-bankruptcy-nm` to it.
- `eminent-domain`: Rule 26 tag screen: `eminent-domain-vi` is not tagged NM. Its award term gives the landlord "any award for the taking of the property, including any value of this Lease" (library clause text), which in New Mexico reads as the resident agreeing to forego a right under the law (NMSA 1978, § 47-8-16; N.M. Const. art. II, § 20; Chavez annotation). Written `eminent-domain-nm` without the award assignment (each party claims its own compensation). Not asked (legal and drafting call, rule 76).
- `entity-landlord-court-representation`: Legal-watch item: Rule 2-107 NMRA, Paragraph B(2) and Rule 3-107 NMRA, Paragraph B(2) cite the Mobile Home Park Act as "Sections 48-10-1 to -23 NMSA 1978" (rule text); the act is compiled at NMSA 1978, ch. 47, art. 10. Recorded only; no library row relies on the rule's citation. Also: NMSA 1978, § 36-2-27 excepts only the magistrate court from the bar on unadmitted practice, while Rule 3-107 NMRA lets owners and managers appear in metropolitan court; `edu-entity-landlord-court-representation-nm` states the doubt and the cautious course.
- `eviction-hardship-stay`: City of Albuquerque v. Brooks, 1992-NMSC-069 (annotations to NMSA 1978, § 47-8-45 and § 47-8-46: equitable principles may prevent the eviction of a qualified indigent public-housing tenant; a back-rent money judgment does not require a writ) was found while drafting `edu-forfeiture-redemption-nm`; errata H-E2 and H-E3 add it to `edu-no-eviction-hardship-stay-nm`, and `edu-redemption-nm` and `edu-no-benefit-delay-defense-nm` cite it. Recommend the main pass check whether `edu-eviction-process-nm` should mention equitable defenses (NMSA 1978, § 47-8-45) at its next edit; no finding filed because that row states no rule Brooks contradicts.
- October leads corrected by slice H: environmental-event-termination, social-security-defense, cold-weather-vacate-notice and repair-cost-termination move from 'Not located' to 'Confirmed absent' (the subject would live in statute or court rule, both held whole); possession-bond, redemption and forfeiture-redemption, previously 'Answered elsewhere' or 'Not applicable', get their own rows (class decision 16). CARES: none of slice H's rows states that New Mexico's notice periods are the only notice that can apply; `edu-cares-act-notice` is not contradicted.
- `periodic-services-entry`: Recorded the NM log §6.1 declined option (shorter or scheduled entry notice by agreement under NMSA 1978, § 47-8-24(A)(1)) as an option education row `edu-periodic-services-entry-nm` (NM gaps log §4 class decision 18) instead of tagging `scheduled-services-entry-la`, whose text/e-mail/posted notice is that declined option.
- `tenant-insurance-claims`: Mutual waiver of insured losses (release of each party's claims for losses covered by its insurance) not offered for New Mexico: it may be a waiver of the tenant's remedies barred by NMSA 1978, § 47-8-16; recorded as an education note in `edu-no-tenant-insurance-claims-rule-nm` (NM gaps log §4 class decision 18).
- `smart-access`: Smart access: wrote optional clause `smart-access-nm` (SERVES_LANDLORD) instead of tagging `smart-access-system-wy` (Wyoming law reference, no-biometric and privacy-policy duties New Mexico lacks) or `smart-access-system-mn` (prior-notice duty New Mexico lacks). The NM clause bars disabling a credential to exclude the tenant (NMSA 1978, § 47-8-36(A)(2), (7)) and ties deactivation to surrender, abandonment or recovery by court order. Existing variables only.
- `tenant-portal`: Tenant portal: `tenant-portal-mn` (tagged in nine states) not tagged NM. It promises an alternative payment method whenever the portal is down and no fee for it, duties New Mexico law does not impose (rule 26, limit New Mexico lacks), and the existing NM-tagged `acceptable-payment-methods`, `electronic-signatures` and `electronic-notice-nm` already cover portal payment, e-signing and e-mail communications. No new NM portal clause; `edu-tenant-portal-nm` explains the UETA refusal right and the paper-notice rules.
- `telecom-access`: Telecom access: `telecom-access-mn` (tagged in seven states) not tagged NM. Its end-of-term paragraph has the tenant remove the installation and repair the damage it caused. Unless the damage is the tenant's deliberate or negligent damage under NMSA 1978, § 47-8-22(F), a lease term making the resident perform specified repairs or alterations in a unit other than a single family residence may need the separate signed writing, for consideration and in good faith, that NMSA 1978, § 47-8-20(D) requires (NM gaps log §4 class decision 7). Whether removing the tenant's own consented installation is such a repair is not settled by any text or case read. The NM-tagged `no-alterations` and `common-area-use` already require the landlord's written consent before installations, so `edu-no-telecom-access-rule-nm` points to them instead.
- `portable-solar`: Portable solar: no NM solar clause offered and no shared solar clause tagged. NMSA 1978, § 3-18-32(B) voids an instrument term affecting the use of real property that effectively prohibits installing or using a solar collector, and a plug-in panel is very likely a collector under NMSA 1978, § 47-3-3(A)(4). How far landlord conditions may go before they effectively prohibit (2011 Op. Att'y Gen. No. 11-02, as summarized in the compilation's annotation; opinion not read) is unsettled, so `edu-no-portable-solar-right-nm` gives the cautious course and says the landlord may add a clause with advice (NM gaps log §4 class decision 18). The October lead (solar rights act concerns property owners only) is corrected by the NMSA 1978, § 3-18-32(B) instrument rule.
- Slice J working note: at the start of the slice a helper script appended the first topic's four objects to answers/J.jsonl twice (once with validator errors) before any check; the file was emptied and the corrected objects re-saved within the same minute, before any other topic was written. No other saved line was edited or removed.
- Correction to the slice J working note above: the corrected first-topic objects were re-saved a few minutes after the file was emptied (after two further wording fixes), not within the same minute; still before any other topic was written.
- `binding-arbitration`: Item 10 (arbitration): the shared `arbitration-agreement` clause is not tagged NM. NMSA 1978, § 44-7A-5 makes a disabling civil dispute clause in a standard form lease unenforceable against and voidable by the tenant; whether a pre-dispute arbitration clause is such a clause, and whether it is a § 47-8-16 waiver attracting § 47-8-17, turns only on case law not read, and the annotated cases (Dalton, Peavy) treat drafter-favouring carve-outs of the kind in clause (b)(1) as presumptively one-sided. Under Taylor's 2026-11-07 rule the library doesn't offer the clause; `edu-binding-arbitration-nm` says so. Not asked.
- Item 8, `smoking-policy` (central edit 2026-10-04): confirmed for New Mexico. The resident shall 'not deliberately or negligently destroy, deface, damage, impair or remove any part of the premises or knowingly permit any person to do so' (NMSA 1978, § 47-8-22(F)), and 'the owner may recover damages and obtain injunctive or other relief for any noncompliance by the resident with the rental agreement or this section or Section 47-8-22 NMSA 1978' (NMSA 1978, § 47-8-33(F)); a lease rule against smoking by Tenant, an occupant or a guest or invitee is a term of the rental agreement, so recovering the cost of remediating damage from its breach is damages for noncompliance, not a fee (NMSA 1978, § 57-12-27(C) is not engaged). The tenant's repair remedies 'do not arise if the condition was caused by the deliberate or negligent act or omission of the resident, a member of his family or other person on the premises with his consent' (NMSA 1978, § 47-8-27.1(B)), which is consistent with the clause.
- Item 8, `no-alterations` (central edit 2026-10-04): confirmed for New Mexico. The Human Rights Act's housing paragraphs bar refusing to rent and discriminating 'in the terms, conditions or privileges' of a rental because of physical or mental disability (NMSA 1978, § 28-1-7(G)(2)); its accommodation duties are written for employers ('any employer to refuse or fail to accommodate a person's physical or mental disability or serious medical condition, unless such accommodation is unreasonable or an undue hardship' (NMSA 1978, § 28-1-7(J))), and its 'reasonable accommodation' definition is the work environment (NMSA 1978, § 28-1-2(V)); 9.1.1 NMAC adds no housing modification rule. Disability modifications therefore come from federal law (not read), which the clause's last sentence preserves. The Solar Rights Act (NMSA 1978, §§ 47-3-1 to 47-3-12) declares a property right in solar energy and limits county and municipal restrictions (NMSA 1978, § 3-18-32), but gives a tenant no installation right; no telecom, EV-charging or portable-solar tenant right was found (slice J's batteries). Nothing in the clause conflicts.
- Item 8, `addendum-precedence` (central edit 2026-10-04): confirmed for New Mexico. The notices New Mexico requires still control under its exception for any disclosure, notice or addendum 'that applicable law requires' (library clause text: "that applicable law requires, or that applicable law says controls over this Lease"): the owner and manager disclosure 'in writing at or before the commencement of the residency' (NMSA 1978, § 47-8-19(A); `landlord-disclosure-nm`), the federal lead disclosure (`lead-based-paint`), and the fee rules. The listing disclosure (NMSA 1978, § 47-8-19.1), the screening-fee notice and receipt (NMSA 1978, § 47-8-19.2(A)(1), (3)) and the fee-increase notice (NMSA 1978, § 47-8-19.4) are separate notices outside the Lease, so the clause cannot subordinate them; `fees-and-charges-nm` is a term of the Lease itself, so the conflict rule never ranks it below an addendum.
- Item 8, `keys` and `hoa-compliance`: both fit as tagged; no -nm override proposed. `keys` charges "the cost" of rekeying when Tenant fails to return keys (damages for the resident's noncompliance, NMSA 1978, § 47-8-33(F)) or requires a replacement (a charge the Lease itself includes, by description). The fee statute bars charging fees 'that are not included in the rental agreement' (NMSA 1978, § 57-12-27(C)), and the listing must give 'a description of all fees or charges that will be assessed during the residency, which shall be itemized and readily identifiable in the listing' (NMSA 1978, § 47-8-19.1): both ask for the charge to be included and described, not priced, so the parking-tag stated-price model is not needed; the listing duty is the landlord's (`edu-fee-transparency-nm`). `hoa-compliance` passes on association fines that Tenant's own violation causes: the resident must 'abide by all bylaws, covenants, rules or regulations of any applicable condominium regime, cooperative housing agreement or neighborhood association not inconsistent with owner's rights or duties' (NMSA 1978, § 47-8-22(H)), so a fine is damages for noncompliance (NMSA 1978, § 47-8-33(F)), not an owner's fee.
- Item 9(c), CARES: no NM eviction row contradicts `edu-cares-act-notice`. `edu-nonpayment-notice-nm`, `edu-noncompliance-cure-nm`, `edu-substantial-violation-nm`, `edu-eviction-process-nm`, `edu-for-cause-eviction-nm`, `edu-end-of-term-nm`, `default-by-tenant` and `criminal-activity-nm` each state New Mexico's own notice periods (three days, seven days, thirty days, the writ three to seven days after judgment) without saying they are the only notice that can apply; the federal row says its 30-day notice applies 'on top of your state's notices' (library text, double-quoted: "on top of your state's notices"). `criminal-activity-nm` and `default-by-tenant` defer to 'applicable law' (library text). Observation, not a defect: the six federal rows tagged NM (`edu-cares-act-notice`, `edu-assistance-animals-federal-enforcement`, `edu-ptfa-foreclosure-tenants`, `edu-fcra-adverse-action-notice`, `edu-voucher-tenancy-addendum`; `lead-based-paint` excepted) carry no `NM:` notes segment (rule 79 third group); none states New Mexico law.

#### Questions asked of Taylor

None.

### §5 Independent check

**Method (rule 80, scaled to at most two rounds; one checker at a time).** Each checker was a separate agent that hadn't written the rows. It was given `CHECK-BRIEF.md` (statute accuracy, quotes, absence claims, the three-bucket test, tags, status, consistency) and the rows exactly as built (helpers' errata applied). It opened every controlling section whole and re-ran the batteries the rows cite from their logged specs. Each checker reported ERROR, FIX and NOTE findings, each with an exact erratum. The main pass reviewed every erratum against the section before applying it and changed three in review: it turned a double-quoted case label into the library's plain form (CHK4-05), completed a quotation the checker had cut before its limb (CHK5-26) and fixed a range citation (CHK3-19). It also added one erratum of its own, the source for the illegal-dumping rule (CHK3-50). Check errata apply after the helpers' errata, and an erratum that rewrites text an earlier erratum introduced names it (`replaces`): five round-1 check errata name a helper erratum, and five round-2 errata name a round-1 check erratum. Round 1 ran in five parts while the canvass was running, and each part's recurring shapes were added to the briefs for slices not yet written (`SHAPES.md`).

**Round 1 (every delivered row and tag; 243 objects).**
| Part | Rows | Objects | ERROR | FIX | NOTE | Errata applied |
|---|---|---|---|---|---|---|
| 1 | MAIN, A, B | 48 | 2 | 16 | 22 | 33 (CHK1) |
| 2 | C, D | 50 | 2 | 12 | 20 | 31 (CHK2) |
| 3 | E, F | 46 | 2 | 15 | 19 | 50 (CHK3; 49 proposed + 1 main pass) |
| 4 | G, H | 53 | 1 | 16 | 15 | 29 (CHK4) |
| 5 | I, J | 46 | 2 | 18 | 12 | 27 (CHK5) |
| **Total** | | **243** | **9** | **77** | **88** | **170** |

The ERRORs, all fixed by errata before delivery:
- `edu-part5-nonwaivable-nm`: the sale-leaseback absence was wrong. The Mortgage Foreclosure Consultant Fraud Prevention Act (NMSA 1978, § 47-15-2(C), NMSA 1978, § 47-15-6) reaches a lease-back to a homeowner in foreclosure.
- `edu-governmental-fines-nm`: said a tenant owes the landlord for a fine only if the lease says so. NMSA 1978, § 47-8-33(F) lets the owner recover damages for the tenant's breach of NMSA 1978, § 47-8-22.
- `edu-guarantor-renewal-nm` and `edu-required-disclosures-nm`: read the two limbs of NMSA 1978, § 57-12-27(B) as one permission.
- `edu-optional-lease-terms-nm`: said no statute regulates lease-options. NMSA 1978, § 47-15-2(C)(2) treats a lease or option back to a foreclosed homeowner as a foreclosure reconveyance.
- `edu-subsidy-habitability-proration-nm`: abatement under NMSA 1978, § 47-8-27.2(A) runs from the date of the notice, not from day 7.
- `edu-eviction-service-party-nm`: gave the magistrate and metropolitan court service order (ending in posting and mailing) as the rule for every court. Rule 1-004 NMRA, Paragraph F (court rule) has no posting method.
- `edu-periodic-services-entry-nm`: said the notice-delivery methods could be changed by agreement. NMSA 1978, § 47-8-13(D) applies "notwithstanding any other provisions".
- `edu-no-tpa-sunset-nm`: said flatly that New Mexico has no just-cause rule. NMSA 1978, § 47-10-5 limits why a mobile home park may end a lot tenancy. The same point is filed against the existing row `edu-for-cause-eviction-nm` in §6.

Reproducibility: every battery the rows cite was re-run by its checker, and every count and hit list reproduced. Three defects were found, and all are fixed:
- 19 slice F rows printed a short form of the battery citation. Their notes now carry the full `bat.py cite` string.
- One slice G battery (NMG-G-016) had been saved as a spec but never logged. The main pass logged it, and its hits match the rows (§3).
- Four rows used "§§" ranges. These were rewritten.

**Round 2 (final; only rows whose text changed after round 1).** The 121 rows and tags whose bodyText, notes or nm_note differed from the text round 1 saw went to a fresh checker. It got the round-1 text and the current text side by side, plus the round-1 reports. Result: **0 ERROR, 7 FIX, 12 NOTE; 22 errata, all applied (CHK6-R2)**; the other 103 changed rows held, including all six tags.
- Two round-1 errata had overcorrected, and both are now narrowed. In `edu-smoke-drift-waiver-nm`, the no-infiltration proviso of NMSA 1978, § 24-16-3(O) had been stated as settled against the "notwithstanding" listing in NMSA 1978, § 24-16-12. In `edu-no-ordnance-demolition-meter-disclosure-nm`, the separate-metering condition had been applied to every bill-copy right.
- One cut quotation was completed: NMSA 1978, § 3-63-13(A)(2) in `edu-portfolio-thresholds-nm`.
- One condition was restored: who may sue and the reasonable-time condition of NMSA 1978, § 28-7-3(D) in `edu-disability-accommodation-nm`.
- Notes were given sources for statements round-1 errata had added to bodies. One pinpoint was corrected: Rule 1-004 NMRA, Paragraph E(3), not F(3).
- One related row outside the 121 was brought into line with its tag: `edu-animal-care-access-nm`, to match `animal-care-access-vi`.

**Rows edited after the last check round (no third round; rule 80 scaled to two).** Round 2's 22 errata changed these 19 rows after round 2 had read them. Each change is round 2's own wording, reviewed by the main pass against the cited section: `edu-part5-nonwaivable-nm`, `edu-smoke-drift-waiver-nm`, `edu-disability-accommodation-nm`, `edu-no-ordnance-demolition-meter-disclosure-nm`, `edu-portfolio-thresholds-nm`, `edu-eviction-service-party-nm`, `edu-minor-tenant-filing-nm`, `edu-utility-interruption-submeter-nm`, `edu-electric-submetering-nm`, `edu-no-portable-solar-right-nm`, `edu-animal-care-access-nm`, `edu-no-eviction-penalty-rule-nm`, `edu-rent-escalation-nm`, `edu-owner-move-in-nm`, `edu-no-condemned-rent-bar-nm`, `edu-tax-escalation-nm`, `edu-no-adu-statute-nm`, `edu-governmental-fines-nm`, `edu-hoa-nm`. After round 2 the full validator (quotes, citation form, battery citations, bracket and variable rule) passes on every row with 0 errors and 0 warnings.

**What the checkers could not reach** (no row relies on these except where it says so):
- case law (annotation summaries only);
- federal law, local ordinances and the model codes;
- NMAC parts not in the corpus: 17.10.650 (gas disconnection), 17.9.568 (interconnection), the pesticide rules (the NEEDS_REVIEW row `edu-pest-control-notice-nm`), the elevator, building-permit and Real Estate Commission rules, and title 20;
- court rules newer than the 2026-10-02 capture, and the Supreme Court's eviction diversion orders.

The reports and errata files are kept with the pass's working files (`check/round1-part1-report.md` to `check/round1-part5-report.md`, `check/round2-report.md`).

### §6 Findings on existing rows

**Earlier New Mexico log (Taylor's instruction of 2026-11-14 12:18).** `lease-clause-decision-log-NM.md` arrived while slices A and B and the main pass were already written from the copy attached on 2026-10-03. Every row written before it arrived was compared with the earlier log's answers: its §6.1 decisions, its §18.2 leads, and the 2026-10-03 to 2026-11-12 sync sections (the `default-by-tenant` merge, the 2026-10-04 cross-state decisions, the parking-tag edit and the federal rows). No delivered row conflicts with an earlier answer, so no conflict note is needed here and no row was rewritten. Rows written after it arrived used it directly; for example, `edu-periodic-services-entry-nm` records the declined shorter-entry-notice option from NM log §6.1, and `edu-rent-escalation-nm` keeps that log's treatment of a mid-term step increase as unsettled.

The findings below report defects in rows already in the library. None of these rows was changed.

- `edu-prohibited-terms-nm`: The body says that "landlord is not liable" clauses, "waivers of notice and similar terms are void". Read against the act, "waivers of notice" is too broad: the entry notice applies only 'unless otherwise agreed upon by the owner and resident' (NMSA 1978, § 47-8-24(A)(1)), and the NM log §6.1 and `edu-landlord-entry-nm` record a shorter entry notice by agreement as lawful. Proposed wording: "... so clauses saying the landlord is not liable, waivers of the notices the act requires before ending a tenancy or filing for possession, and similar terms are not allowed (the parties may agree to different entry-notice terms; see `edu-landlord-entry-nm`)." Also "void" overstates the text: 'No rental agreement may provide that the resident or owner agrees to waive or to forego rights or remedies under the law.' (NMSA 1978, § 47-8-16) bars the term; "not allowed" or "prohibited" matches it. Shared with no other state; NM-only edit at sync. Found by slice A (showing-notice-waiver).
- `edu-no-waiver-by-acceptance-rule-nm`: Incomplete, not wrong: the row says the act "has no section on whether accepting rent with knowledge of a breach waives the right to terminate" and its notes record "no waiver-by-acceptance section", but it does not mention the general commercial-code rule that cashing a check tendered in good faith 'as full satisfaction of the claim' for an amount 'unliquidated or subject to a bona fide dispute' can discharge the claim (NMSA 1978, § 55-3-311(a)-(b)), with the 90-day repayment out (NMSA 1978, § 55-3-311(c)(2)). Proposed addition at sync: "Separately, cashing a check the tenant conspicuously marks as payment in full of a disputed amount can settle your claim under New Mexico's commercial code; see `edu-full-payment-check-nm`." Slice C, battery NMG-C-001.
- `edu-assistance-animals-nm`: The body says the Service Animal Act governs buildings open to the public, public accommodations and common carriers, "not private rental housing", and the notes say the White Cane Law places "include hotels and lodging places but not private rentals". The statutes draw no such line: a person using a qualified service animal 'shall be admitted to any building open to the public and to all other public accommodations' (NMSA 1978, § 28-11-3(A)(1)), which on its face reaches a rental's leasing office or other areas open to the public, and the White Cane Law places include 'hotels, lodging places, places of public accommodation, amusement or resort and any other places to which the general public is invited' (NMSA 1978, § 28-7-3(B)), with no definition of lodging places; denying admittance there is a misdemeanor (NMSA 1978, § 28-7-5), which the row does not mention. Proposed body wording: "New Mexico's Service Animal Act requires admitting a person using a qualified service animal to any building open to the public and other public accommodations, which may include your leasing office and other areas open to the public, but it does not speak to a tenant's own unit; the White Cane Law likewise protects guide dogs in hotels, lodging places and places open to the public. Denying entry under either law is a misdemeanor (see `edu-service-animal-denial-penalty-nm`)." The same "not private rental housing" sentence appears in the NM segment of `assistance-animal-accommodation`; the NM-only segment could be edited the same way at sync. Found by slice D (service-animal-denial-penalty).
- `edu-no-sex-offender-rule-nm`: The notes say "Local ordinances not read (rule 3)" and the body says only that "New Mexico has no statute restricting where a registered sex offender may rent". The statute preempts local rules: 'The state preempts the field of sex offender registration and notification.' (NMSA 1978, § 29-11A-9(A)), and political subdivisions are prohibited 'from imposing any other restrictions on sex offenders that are not included in the Sex Offender Registration and Notification Act' (NMSA 1978, § 29-11A-9(A)). Proposed added body sentence: "State law takes over the field of sex offender registration and notification and bars cities and counties from adding their own restrictions on sex offenders, which this library reads as displacing local residency rules (no case read)." Proposed notes addition: cite NMSA 1978, § 29-11A-9(A) and battery NMG-D-017. Found by slice D (sex-offender-disclosure).
- `edu-utility-billing-nm`: Three additions and one fix. (1) Condition dropped: the body says "In multi-unit housing, a tenant may ask for a copy of the utility bill for their unit", but the statute gives that copy only 'if there is separate utility metering for each unit' (NMSA 1978, § 47-8-20(F)); suggested opening: "In multi-unit housing where each unit is separately metered, a tenant may ask you or your agent for a copy of the utility bill for the unit; if the unit is submetered, also the building's bill; ...". (2) The notes' "Public Regulation Commission rules on submetering not read (NM log §7)" is now stale: the commission's residential, electric, cogeneration, renewable and water rules (17.5.410, 17.9.560, 17.9.570, 17.9.572 and 17.12.760 NMAC) were read in this pass and contain no submetering or landlord-billing rule; they bind utilities only ('This rule applies to electric, rural electric cooperative and gas utilities subject to the jurisdiction of the New Mexico public regulation commission.' (17.5.410.2 NMAC)); the water utility customer service rules are in a PDF attachment to 17.12.760.10 NMAC that the corpus does not hold (Battery NMG-G-001, NMG-G-002). Suggested notes wording: "Public Regulation Commission rules 17.5.410, 17.9.560, 17.9.570, 17.9.572 and 17.12.760 NMAC read 2026-11-14: no submetering or landlord-billing rule; water utility rule attachment not held." (3) Add the public-utility point with a pointer: a person 'not otherwise a public utility who furnishes the service or commodity only to that person or that person's employees or tenants, when such service or commodity is not resold to or used by others' (NMSA 1978, § 62-3-4(A)(1)) is not a public utility; gas master meters at apartment complexes fall under the Pipeline Safety Act (NMSA 1978, § 70-3-12(K)); see `edu-electric-submetering-nm`. (4) Mobile home parks (act boundary, NMSA 1978, § 47-8-52): 'A landlord may charge residents a reasonable fee to offset the cost of administration incurred by a landlord when he provides utility services to residents.' (NMSA 1978, § 47-10-21(A)), disclosed in writing in the rental agreement (NMSA 1978, § 47-10-21(B)) with an increase disclosed 'at least sixty days prior to implementation of an increase in the administrative fee' (NMSA 1978, § 47-10-21(C)); suggested body sentence: "In a mobile home park, a park that provides utility services may charge only a reasonable administrative fee for doing so, stated in the rental agreement, with 60 days of written notice before an increase." Related new rows: `edu-utility-apportionment-nm`, `edu-no-utility-allowance-cap-nm`.
- `edu-no-alarm-statute-nm`: The agency rules the row says were not read are now read; three updates. (1) The damper rules exist and are issued by the fire marshal's department, not the commission: 10.25.12 NMAC (issuing agency 'New Mexico Department of Homeland Security & Emergency Management' (10.25.12.1 NMAC); authority NMSA 1978, § 59A-52-15.1) requires 'The inspection and testing of fire and smoke dampers and smoke control systems shall be required in accordance with national fire protection association standards in places of assembly, educational occupancies, institutional occupancies, residential occupancies consisting of four or more family units' (10.25.12.9 NMAC), with findings of noncompliance sent 'to the owners of the public occupancy and to the state fire marshal' (10.25.12.9 NMAC). The notes' "which directs Public Regulation Commission rules ... those rules not read" should become "implemented by 10.25.12 NMAC (read 2026-11-14)", and the body's "may be subject to state rules on inspecting fire and smoke dampers" can become "are subject to state rules requiring inspection and testing of fire and smoke dampers and smoke control systems by certified inspectors". (2) No held NMAC part contains its own smoke or carbon monoxide alarm requirement: Battery NMG-G-020 (supersedes NMG-G-019 for inflected forms) found only the damper rule, the fire marshal's certificate-of-fitness rule for installers of 'automatic fire detection and alarm systems' (10.25.2.8 NMAC), a fireworks definition (NMSA 1978, § 60-2C-2), a motor carrier rule (18.3.4.12 NMAC), NMSA 1978, § 30-7-22 (interference with fire control) and capital outlay items. Alarm requirements live in the model codes the state adopts by reference, which the corpus does not hold: the 2021 International Fire Code for public occupancies, including 'residential occupancies consisting of four or more family units' (NMSA 1978, § 59A-52-15(A)), adopted in 10.25.5.8 NMAC; the 2021 International Residential Code (14.7.3.8 NMAC) for one- and two-family dwellings and townhouses, whose state amendments add no smoke or CO alarm text (the only alarm is a pool-door alarm, 14.7.3.25 NMAC); the 2021 IBC (14.7.2.8 NMAC) and IEBC (14.7.7.8 NMAC). So the row's statute absence stands, but its boundary should read "Not located for code alarm requirements (model code text not held; NM gaps log §4 class decision 15)" rather than "administrative rules (NMAC) ... not searched". (3) Add the existing-building rule: an owner 'is not required to renovate or adapt an existing building or structure to comply with the currently adopted NMFC but shall comply with the requirements in place when the existing building or structure was constructed' (10.25.5.19 NMAC); the fire code 'does not apply to detached one- and two-family dwellings and townhouses not more than three stories above grade plane in height with a separate means of egress and their accessory structures not more than three stories above grade in height built to the New Mexico Residential Building Code except for those being used as commercial properties' (10.25.5.2 NMAC). Suggested body addition: "For buildings with four or more units, the State Fire Marshal's fire code applies; an existing building generally must meet the alarm requirements in place when it was built. The model codes setting those requirements were not available to this library." See `edu-fire-code-standard-nm`.
- `edu-habitability-nm`: Found while answering `heating` (SHAPES 1 and 2). (a) The body says the owner must "keep supplied electrical, plumbing, sanitary, heating, ventilating, air-conditioning and other facilities and appliances in good and safe working order"; the statute reaches facilities and appliances 'supplied or required to be supplied by him' (NMSA 1978, § 47-8-20(A)(4)). Suggested: "keep the electrical, plumbing, sanitary, heating, ventilating, air-conditioning and other facilities and appliances, including elevators, that you supply or are required to supply in good and safe working order". (b) The body says for other units specified repairs may be shifted "only by a separate signed writing supported by consideration", dropping the requirement that 'the agreement of the parties is entered into in good faith and not for the purpose of evading the obligations of the owner' (NMSA 1978, § 47-8-20(D)(1)) and the limit that 'the agreement does not diminish or affect the obligation of the owner to other residents in the premises' (NMSA 1978, § 47-8-20(D)(2)). (c) "Only for a single family residence may the lease itself shift garbage, water and heat duties and specified repairs to the tenant" omits the conditions 'but only if the transaction is in writing, for consideration, entered into in good faith and not for the purpose of evading the obligations of the owner' (NMSA 1978, § 47-8-20(C)). Suggested: "For a single family residence, the tenant may agree to take over garbage, water, hot water and heat duties and specified repairs, but only in a writing made for consideration, in good faith and not to evade your duties; for other units, the tenant may agree only to specified repairs, maintenance tasks, alterations or remodeling, in a separate writing signed by both of you, supported by consideration, made in good faith and not to evade your duties, and not affecting your duties to other tenants." The heat exception wording in the row already carries both limbs of NMSA 1978, § 47-8-20(A)(6). New row `edu-heating-nm` states the corrected wording.
- `edu-nonresident-owner-agent-nm`: Wording, NM-only row. The body ends: "registering a trade name with the secretary of state under the Trademark Act is optional (NMSA 1978, § 57-3B-5)" (row text). The Trademark Act registers marks, not trade names: 'any person who uses a mark may file in the office of the secretary on a form prescribed by the secretary an application for registration of that mark' (NMSA 1978, § 57-3B-5(A)); a trade name is only defined ('any name used by a person to identify a business or vocation of the person' (NMSA 1978, § 57-3B-3(I))) and figures in registrability (NMSA 1978, § 57-3B-4). Proposed wording: "registering a name you use to identify your rental services as a service mark with the secretary of state under the Trademark Act is optional (NMSA 1978, § 57-3B-5)". Also consider adding: "A licensed real estate broker who manages rentals for others must conduct brokerage business under the trade name registered with the Real Estate Commission (NMSA 1978, § 61-29-11(E))." Found by slice H (confirmed-absences-outside-title; battery NMG-H-018).
- `edu-towing-nm`: `edu-towing-nm` should add the Department of Transportation's towing rule, now held (18.3.12 NMAC, effective July 1, 2024; its notes say "Department of Transportation and Public Regulation Commission towing rules (NMAC) not read (NM log §7)"). The row's body says only "Towing companies doing nonconsensual tows are regulated by the state". The rule sets conditions that turn on the landlord: 'No towing service shall attach hoisting or towing devices or move, tow or molest in any way, any motor vehicle illegally parked on property other than a public roadway without having first obtained written authorization from the owner or lessee of the property, or the owner’s or lessee’s agent.' (18.3.12.14 NMAC); the authorization includes 'the name and signature of the owner or lessee of the property' (18.3.12.14 NMAC), 'the location of the private property, the amount of time the motor vehicle has been on the property, a description of the vehicle, the date and time the towing service removed the vehicle from the property, and a statement by the owner, lessee or agent that the vehicle is illegally parked' (18.3.12.14 NMAC); no such tow 'at an apartment unless the property contains visible signs notifying the public that illegally parked motor vehicles may be towed' (18.3.12.14 NMAC), and 'The visible signs shall specify the exact time periods (starting and ending hours) when the vehicle is determined to be “illegally parked” on commercial property or at an apartment house.' (18.3.12.14 NMAC); photographs of the vehicle and the signage (18.3.12.14 NMAC); a towing service shall not 'pay or refund, directly or indirectly, any remuneration or anything of value to a private property owner or agent for the ability to perform nonconsensual tows on the private property' (18.3.12.14 NMAC). The rule 'applies to all towing services providing non-consensual tows' (18.3.12.2 NMAC); issuing agency the Department of Transportation (18.3.12.1 NMAC); effective July 1, 2024 (18.3.12.5 NMAC); statutory authority NMSA 1978, § 8-8-4 and NMSA 1978, § 65-2A-4 (18.3.12.3 NMAC). A 'nonconsensual tow' is one 'performed at the request of a law enforcement officer or without the prior consent or authorization of the owner or operator of the motor vehicle' (NMSA 1978, § 65-2A-3(JJ)). Proposed addition to the body: "Under the Department of Transportation's towing rules, a towing service may not tow a vehicle illegally parked at an apartment property unless the property has visible signs telling the public that illegally parked vehicles may be towed and stating the exact hours when a vehicle is considered illegally parked. For each tow from private property, the towing service must first get written authorization signed by the property owner, lessee or agent, giving the location, how long the vehicle has been there, a description of it, the date and time of removal and a statement that it is illegally parked; it must photograph the vehicle (and, at an apartment, the signs), and it may not pay the property owner or agent anything for the right to tow there." Notes: cite 18.3.12.2 NMAC, 18.3.12.7 NMAC and 18.3.12.14 NMAC, replacing "not read". Source: `edu-parking-rules-notice-nm` (Battery NMG-I-012).
- `parking-vehicle-rules-id`: `parking-vehicle-rules-id` NM note says "New Mexico's statutes reach private-property removal only of an 'abandoned vehicle' (left unattended at least thirty days, as determined by law enforcement, NMSA 1978, § 66-1-4.1(A); disposal, NMSA 1978, § 66-3-121) and of vehicles in disabled parking (NMSA 1978, § 66-7-352.5(D))". That understates the law: the Motor Carrier Act defines a 'nonconsensual tow' as one 'performed at the request of a law enforcement officer or without the prior consent or authorization of the owner or operator of the motor vehicle' (NMSA 1978, § 65-2A-3(JJ)), and the Department of Transportation's rule regulates trespass tows of vehicles illegally parked on private property, including apartments, on the property owner's or lessee's signed written authorization and, at an apartment, only with visible signs stating the exact hours when a vehicle is considered illegally parked (18.3.12.14 NMAC). The clause itself still applies as written (it tows only unauthorized or abandoned vehicles "in accordance with applicable law" and never for expired registration). Proposed replacement for the quoted sentence: "New Mexico's statutes and the Department of Transportation's towing rule let a property owner have a vehicle illegally parked on private property towed by a certificated towing service, on the owner's signed written authorization for each tow and, at an apartment, only with visible signs stating the hours when vehicles are considered illegally parked (NMSA 1978, § 65-2A-3(JJ); 18.3.12.14 NMAC); an 'abandoned vehicle' (NMSA 1978, § 66-1-4.1(A); NMSA 1978, § 66-3-121) and vehicles in accessible spaces (NMSA 1978, § 66-7-352.5(D)) have their own rules." Source: `edu-parking-rules-notice-nm` (Battery NMG-I-012).
- `edu-no-ev-charging-rule-nm`: The row says "New Mexico has no statute giving tenants a right to install electric vehicle charging at a rental or setting rules for it; tax credits for charging units exist but impose no landlord duty." and its notes give the boundary "administrative rules (NMAC), case law and local codes not searched". The construction rules are now held and do set EV rules for new rental construction: 'New residential automobile parking spaces for residential buildings shall be provided with electric vehicle power transfer infrastructure in accordance with Section R404.4.1 and Section R404.4.2.' (14.7.6.12 NMAC) and 'Parking facilities shall be provided with electric vehicle power transfer infrastructure in accordance with design requirements and Sections C405.13.1 through C405.13.6.' (14.7.9.12 NMAC) (Group R-2: 5% EVSE and 15% EV capable spaces), for work performed on or after January 30, 2024 (14.7.6.2 NMAC; 14.7.9.2 NMAC). Also, the term public utility does not include a person not otherwise a public utility 'who engages in the retail distribution of natural gas or electricity for vehicular fuel' (NMSA 1978, § 62-3-4(A)(1)). Proposed added sentence for the body: "New construction is different: since January 30, 2024, the state energy codes require new residential parking, including apartment parking facilities, to be built EV-ready or with charging equipment (see `edu-ev-charging-requirements-nm`)." Proposed notes addition: Battery NMG-J-009 and the NMAC boundary. The no-tenant-right verdict stands (NMG-J-009).
- `early-termination-nm`: Item 9(a). Proposed revision (keep the id; Claude Code edits it in place at sync; rule_type stays RECOMMENDED, Taylor 2026-11-12). The current fee is "one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater" (row text). Late in a long term the greater-of formula can exceed any reasonable forecast of loss; New Mexico requires mitigation ('The aggrieved party has a duty to mitigate damages.' (NMSA 1978, § 47-8-6(A))), lets a court limit a provision 'inequitable when made' (NMSA 1978, § 47-8-12(A)), and the penalty doctrine was not searched. Proposed bodyText: "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay Landlord, by the termination date, an early termination fee equal to one month's Rent ({{monthly_rent}}), and remains responsible for Rent and other obligations up to the termination date. If Tenant gives that notice, pays the fee and delivers possession of the property by the termination date, Tenant owes no Rent for any period after the termination date. If Tenant leaves before the end of the Term without using this option, Tenant's liability is governed by New Mexico law. This early-termination option and fee apply only if this Lease has a fixed Term; a month-to-month or week-to-week tenancy ends on the notice that applicable law and this Lease provide, without an early termination fee. Landlord may terminate this Lease early only in accordance with this Lease's Default by Tenant and notice provisions and applicable law. If Tenant abandons the property (an absence of more than seven continuous days without notice to Landlord, after Rent has become delinquent), Landlord may take possession of it and re-rent it as applicable law provides. Nothing in this Section limits any right either party has under applicable law, including a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act, due to the property becoming uninhabitable through no fault of Tenant, or any other termination right or limitation provided by applicable law." Checks: no waiver of rights or remedies (NMSA 1978, § 47-8-16); the fee is stated in the agreement (NMSA 1978, § 57-12-27(C)); abandonment is 'absence of the resident from the dwelling, without notice to the owner, in excess of seven continuous days; providing such absence occurs only after rent for the dwelling unit is delinquent' (NMSA 1978, § 47-8-3(A)) and on abandonment 'the owner shall be entitled to take immediate possession of the dwelling unit' (NMSA 1978, § 47-8-34(C)); New Mexico has no statutory domestic-violence or servicemember termination right of its own (`edu-no-dv-termination-nm`, `edu-servicemember-nm`), so no fee carve-out for a state exit is needed. Add to notes at sync: "Flat fee (one month's Rent) since the 2026-11-14 gaps pass, matching `early-termination-mo`, `early-termination-id` and `early-termination-in`."
- `casualty-termination-nm`: Item 9(b). `casualty-termination-nm` and `tenant-caused-damage-nm` do not name the same persons. `casualty-termination-nm` ends: "and it does not relieve Tenant of responsibility for damage caused by Tenant's negligence" (row text), tracking 'Notwithstanding the provisions of this section, the resident is responsible for damage caused by his negligence.' (NMSA 1978, § 47-8-31(B)). `tenant-caused-damage-nm` (shared with AK, AR, MS, DC, VI, AS, MP) names damage from "the deliberate or negligent act or omission of Tenant, a member of Tenant's household, or another person on the premises with Tenant's consent" (row text), tracking 'The rights provided under this section do not arise if the condition was caused by the deliberate or negligent act or omission of the resident, a member of his family or other person on the premises with his consent.' (NMSA 1978, § 47-8-27.1(B)) and the resident's duty to 'not deliberately or negligently destroy, deface, damage, impair or remove any part of the premises or knowingly permit any person to do so' (NMSA 1978, § 47-8-22(F)). The casualty clause's saving sentence should not read as narrowing the damage clause. Proposed edit to `casualty-termination-nm` only (no rule 62 shared edit): replace "and it does not relieve Tenant of responsibility for damage caused by Tenant's negligence." with "and it does not relieve Tenant of responsibility for damage caused by the deliberate or negligent act or omission of Tenant, a member of Tenant's household, or another person on the premises with Tenant's consent."
- `edu-for-cause-eviction-nm`: Found by the independent check (round 1, part 5) while checking slice J's rows that point to this row. The body says "New Mexico has no just-cause or good-cause eviction statute". That is true of tenancies under the Uniform Owner-Resident Relations Act, but the Mobile Home Park Act limits why a park may end a lot tenancy: 'A tenancy shall be terminated pursuant to the Mobile Home Park Act only for one or more of the following reasons:' (NMSA 1978, § 47-10-5), followed by a closed list (for example, failure to comply with mobile home laws, conduct that annoys other tenants or interferes with park management, breach of park rules, condemnation or change of use, nonpayment). The row's battery was searched for "just cause" and "good cause" and did not use that section's own words ("only for" with "terminated"). Proposed added sentence for the body, after the first sentence: "One exception: a mobile home park may end a tenancy for a mobile home lot only for the reasons the Mobile Home Park Act lists." The library has no New Mexico mobile home park row to point to. The new rows that state the absence (`edu-no-tpa-sunset-nm`, `edu-no-tpa-notice-nm`, `edu-no-tpa-exemption-notice-nm`, `edu-confirmed-absences-misc-nm`) carry the exception through check errata CHK5-17 to CHK5-19 and CHK5-27.

### §7 Findings for other states

None.

### Proposed SOP changes

- Battery patterns that contain an apostrophe (possessives such as residents' deposits) produce cite text the notes quote checker reads as a single-quoted statute passage; bat.py could escape apostrophes as \x27 in cite output, or the brief could tell helpers to write \x27 in patterns (Slice B had to rerun NMG-B-007 as NMG-B-008 for this).
- For community-property states, add a spousal-joinder check to the lease-term, automatic-renewal and periodic-tenancy topics: New Mexico voids a lease of community real property signed by one spouse alone if its term with options exceeds five years or it is 'for an indefinite term' (NMSA 1978, § 40-3-13(A)), found only because the lease-term-limitation battery searched 'join' near 'lease' outside the landlord-tenant act.
- **Independent-check errata apply after the helpers' own errata (rule 80 tooling).** The checker reads rows with the helpers' errata already applied, so its errata must be applied after them. This pass's assembler first sorted errata files by name, which put the check files between slice C's and slice E's, and three check errata then failed to match. The fix: check errata now always apply last, and an erratum that rewrites text an earlier erratum introduced names that erratum (`replaces`). Proposed SOP text: "Apply independent-check errata after every helper erratum, and record which earlier erratum each one supersedes."
- **A row may cite only a battery that is in the log (rule 19).** One helper cited a battery (NMG-G-016) whose spec it saved but never logged, so `bat.py cite` failed and the rows printed a gap. The validator now checks every battery id a row names, in any wording, against the log; proposed SOP text: "Before hand-back, every `Battery NMG-…` citation in the helper's rows must resolve with `bat.py cite`; the main pass rejects a hand-back that cites an unlogged battery."
- **Add "same rule, different court" to the recurring error shapes (rule 80).** Part 4 found an eviction-service row that gave the magistrate and metropolitan court service rules, which allow posting, as the rule for every court; the district court rule (Rule 1-004 NMRA, Paragraph F) has no posting method. A second row made the same mistake for serving a minor. Proposed SOP text, for the checklist: "A procedural row names the court whose rule it states; where the district court rules differ, the row gives both."
- **Run the check part by part while the canvass runs (rule 80, scaled).** Running one checker at a time, each on the slices finished so far, let the recurring shapes go back into the briefs for the slices not yet written. The later parts of the check still found some of the same shapes, so the briefs reduce them but don't replace the check. Proposed SOP text: "Start the independent check on finished slices while later slices are still being canvassed, and feed each part's recurring shapes into the remaining briefs."

### Proposed topic questions

- `smoke-drift-waiver`: Does a Department of Health rule under the Dee Johnson Clean Indoor Air Act (not held in the NM corpus) treat apartment-building common areas as indoor workplaces or indoor public places?
- `tax-escalation`: Are fees billed with residential rent (pet, amenity, parking, utility admin) deductible as receipts from leasing real property under NMSA 1978, § 7-9-53, or taxable leasing or service receipts? Needs the TRD 3.2 NMAC part on the real-property deduction, which the corpus does not hold.
- `collection-fee`: Do the Financial Institutions Division collection-agency rules (adopted under NMSA 1978, § 61-18A-4) bar an agency from adding a fee the debt agreement does not authorize? NMAC part not held.
- `rent-installments`: Where the tenancy has no fixed term, does paying a monthly rent in weekly installments make the tenancy week-to-week under the state's default-tenancy rule (New Mexico: NMSA 1978, § 47-8-15(C), 'a person who pays weekly rent')?
- `lease-term-limitation`: In a community-property state, is a month-to-month tenancy or a self-renewing lease a lease 'for an indefinite term' that both spouses must sign (New Mexico: NMSA 1978, § 40-3-13(A))?
- `dv-confidentiality`: May a landlord serve a NMSA 1978, § 47-8-13 notice on a Confidential Substitute Address Act participant through the secretary of state under NMSA 1978, § 40-13B-4(A)(2)(d), and when is it received (perfected three days after acceptance, NMSA 1978, § 40-13B-4(B), versus delivery under NMSA 1978, § 47-8-13)?
- `landlord-registration`: Does a general municipal business registration or licensing law (NM: NMSA 1978, § 3-38-3, a mandatory registration fee of up to $35 on each place of business not licensed) reach owners of residential rentals, and does the state define business for that purpose?
- `inspection-condemnation-disclosure`: Does the state's mobile home park law require the park owner to tell tenants about a condemnation proceeding within a set time (NM: 17 days, NMSA 1978, § 47-10-5(D))?
- `required-disclosures`: Is a person who leases an existing home on one lot in an unincorporated county subdivision a "subdivider" owing the NMSA 1978, § 47-6-17 disclosure statement, given that NMSA 1978, § 47-6-2(L) includes any person engaged in the lease of subdivided land?
- `fire-code-standard`: Does a state elevator safety act require the owner or lessee of an apartment building's elevator to register it, obtain annual inspection and a certificate of operation, and fix violations within a set time, with single-family dwellings exempt? (New Mexico: NMSA 1978, § 60-13B-8, NMSA 1978, § 60-13B-11(C), NMSA 1978, § 60-13B-3(P).)
- `utility-transfer`: Does a military deployment statute let a tenant suspend utilities in the tenant's name without penalty only if the lease does not preclude it? (New Mexico: NMSA 1978, § 20-1-8.1(A)(3).)
- `utility-allowance-cap`: Does the manufactured home park statute allow a park that provides utility services to add only a reasonable administrative fee, disclosed in the rental agreement, with advance notice of increases? (New Mexico: NMSA 1978, § 47-10-21.)
- `electric-submetering-disclosure`: Does a pipeline safety act treat an apartment complex's gas master meter, resold by meter or through rent, as a regulated master meter system with an annual fee? (New Mexico: NMSA 1978, § 70-3-12(K), NMSA 1978, § 70-3-21(D)(1)(d).)
- `eviction-service-party`: Does a lease term appointing a person to accept service for the tenant count as a 'person authorized by appointment' under Rule 3-202 NMRA, Paragraph F(1) and Rule 1-004 NMRA, Paragraph F(3), and is such a term a waiver barred by NMSA 1978, § 47-8-16?
- `confirmed-absences-outside-title`: Is leasing residential property, beyond 'owning, without more, real or personal property' (NMSA 1978, § 53-19-54(A)(9)), transacting business that bars an unregistered foreign LLC or corporation from filing an eviction (NMSA 1978, § 53-19-53(A); NMSA 1978, § 53-17-20(A))?
- `ev-charging-requirements`: Do the state building or energy codes require EV-ready or EV-capable parking in new residential or apartment construction, and from what date? (New Mexico: 14.7.6.12 NMAC, R404.4; 14.7.9.12 NMAC, C405.13, work performed on or after January 30, 2024.)
- `portable-solar`: Does a statute voiding instrument terms that effectively prohibit solar collectors reach a lease's consent or conditions clause, and does an attorney general opinion read effectively prohibit to include unreasonably difficult or costly conditions? (New Mexico: NMSA 1978, § 3-18-32(B); 2011 Op. Att'y Gen. No. 11-02, as summarized in the compilation's annotation; opinion not read.)

## Sync record (Claude Code, 2026-11-14)

- **Merge:** `merge-delta.py --base a8e570d`: 225 new rows and 18 shared rows tagged NM (243, matching the log's status line); library now 18,439 rows.
- **§6 applied (13 findings), each read against the corpus first (all 49 quotations in §6 matched):** `edu-prohibited-terms-nm` (notice waivers narrowed: the entry notice may be varied by agreement, NMSA 1978, § 47-8-24(A)(1); "not allowed" for "void"); `edu-no-waiver-by-acceptance-rule-nm` (full-payment checks, NMSA 1978, § 55-3-311); `edu-assistance-animals-nm` and the NM segment of `assistance-animal-accommodation` (the Service Animal Act and White Cane Law reach buildings and places open to the public, which may include a leasing office; denial is a misdemeanor, NMSA 1978, § 28-11-3(A)(1), NMSA 1978, § 28-7-5); `edu-no-sex-offender-rule-nm` (state preemption, NMSA 1978, § 29-11A-9(A)); `edu-utility-billing-nm` (copy right only with separate metering, the PRC rules read, the not-a-public-utility rule and the mobile home park administrative fee); `edu-no-alarm-statute-nm` (the fire marshal's damper rule, model codes not held, the existing-building rule); `edu-habitability-nm` (conditions of NMSA 1978, § 47-8-20(A)(4), (C) and (D) restored); `edu-nonresident-owner-agent-nm` (Trademark Act registers marks, not trade names); `edu-towing-nm` and the NM segment of `parking-vehicle-rules-id` (the Department of Transportation towing rule, 18.3.12.14 NMAC); `edu-no-ev-charging-rule-nm` (new-construction EV rules, 14.7.6.12 and 14.7.9.12 NMAC); `early-termination-nm` (flat one-month fee, RECOMMENDED, with the no-later-Rent sentence, matching MO, ID and IN); `casualty-termination-nm` (now names the same persons as `tenant-caused-damage-nm`, NMSA 1978, § 47-8-27.1(B)); `edu-for-cause-eviction-nm` (the Mobile Home Park Act's closed list of termination reasons, NMSA 1978, § 47-10-5). The broker trade-name sentence §6 offered for `edu-nonresident-owner-agent-nm` was not added (optional; brokers managing for others are outside the row).
- **§7:** none.
- **NEEDS_REVIEW closed:** `edu-pest-control-notice-nm`. The Pesticide Control Act rules were read on srca.nm.gov on 2026-11-14 (21.17.50 NMAC, Pesticides, sections 1 to 25; 21.17.51 NMAC, Control of Wood Destroying Pests): neither requires notice to occupants or posting of a treated site; applicators must follow the label (21.17.50.13 NMAC). The row is now a confirmed absence, VERIFIED, with the cautious course kept.
- **§4 items handled at sync:** the sex offender preemption joins class decision 13's list through `edu-no-sex-offender-rule-nm`; the stale references in § 47-8-27.2(C) and § 47-8-33(J) and the Mobile Home Park Act citation in Rules 2-107 and 3-107 NMRA are in the legal watch's manual items. Builder items went to the backlog: the rent payment-place clause (`rent-payment-place-nm`, proposed in §4, not added: the place of payment is a cross-state builder question, and `edu-optional-lease-terms-nm` already tells landlords to name it), `{{renewal_notice_days}}` at least 30 in `automatic-renewal-nm`, the warning for `employee-occupancy-conditional-nm`, and a federal bankruptcy row.
- **Checks:** guards (`check-gap-discovery.py --all`, checklist reconciliation, clause basis, section pointers, `checkConfigIds.js`) pass. No other state's row changed except the 18 tags (New Mexico segments only) and the NM segments of `assistance-animal-accommodation` and `parking-vehicle-rules-id`. New Mexico answers all 364 topic keys.
- **Rule 80 re-check (every delivered row, plus the 16 rows edited at sync):** in the delivered rows, 1,371 single-quoted passages matched the corpus (NMSA, NMAC, Constitution and session laws) by script; four more (three constitution quotes split across hyphenated lines, and the effective-date sections of 2026 N.M. Laws ch. 62, 2025 N.M. Laws ch. 30 and ch. 93) were checked by hand; the other misses were battery patterns, not quotations. The 24 court-rule quotations rest on the 2026-10-02 capture of nmonesource.com, which showed Claude Code a CAPTCHA on 2026-11-14; they are listed in the legal watch's court-rules item for a reread in Taylor's browser. The 16 rows edited at sync: 46 quotations matched; the other two are library clause text and the pesticide rule read live.
- **Statute spot-check:** nmonesource.com is behind a CAPTCHA for Claude Code, so the five rules were read in the corpus, which the pass compared letter by letter with the October browser capture (§1): the 5% late-fee cap calculated on rent only (NMSA 1978, § 47-8-15(D); `edu-late-fee-cap-nm`); deposit interest above one month's rent under an annual agreement and no wear-and-tear deductions (NMSA 1978, § 47-8-18(A), (C)); the thirty-day deposit statement (`security-deposit-return-nm`); twenty-four hours' written entry notice (NMSA 1978, § 47-8-24; `edu-landlord-entry-nm`); the three-day nonpayment notice and tender rule (NMSA 1978, § 47-8-33(D); `edu-nonpayment-notice-nm`). No errors.
- **Citations:** 243 new lines (106 cited, 137 confirmed absent) and 16 updated. The legal watch now monitors 182 NMSA sections (156 before; CITED and PARTIAL lines only); the court-rules item names the 23 gaps rows quoting NMRA rules, and the rules-not-held item names the 83 rows that depend on a source not held.
- **SOP 2.13:** five of six proposals adopted as [Fwd] rules (19, 80); the spousal-joinder proposal went to `topic-questions.csv`. **Topic questions:** 18 added. No new `{{variables}}`.

## Federal row: disposing of screening reports (Claude Code, 2026-11-20)

Taylor's decision 2026-11-20 (Washington gaps log §7, backlog item 9): one federal education row, `edu-fcra-disposal-rule`, is tagged here and in every jurisdiction, read from the official text (16 C.F.R. part 682 on eCFR; 15 U.S.C. § 1681w on govinfo.gov). It says that anyone who keeps a screening, credit or background report, or a record taken from one, for a business purpose must dispose of it with reasonable measures against unauthorized access (16 C.F.R. § 682.3), with the rule's examples, and that the rule sets no retention period (§ 682.4). This state's existing rows stay; no clause text changed.

## Shared edit: lead-based paint agent's statement (Claude Code, 2026-11-20)

From the West Virginia gaps sync (WV gaps log §6 item 21 and §7; backlog items from the Nevada and Puerto Rico syncs): the shared `lead-based-paint` clause gained a bracketed agent's statement and a sentence requiring each person who makes a statement to sign and date it, the two elements the federal rule requires in every lease of pre-1978 housing (40 C.F.R. § 745.113(b)(5)-(6); HUD's twin rule, 24 C.F.R. § 35.92(b)(5)-(6); both read on eCFR 2026-11-20). Uniform federal edit under rule 62: the same in every jurisdiction, no state term changed; it applies only where an agent acts for the landlord.

## Federal rows: the federal pass (Claude Code, 2026-11-20)

Taylor's decision 2026-11-20 (backlog item 13; scope: private rentals and voucher tenancies, not federally assisted or tax-credit properties): nine federal education rows are tagged here and in every jurisdiction, each read from the official text (eCFR, govinfo.gov, the Federal Register; 109 quotations matched): `edu-scra-eviction-protections` (50 U.S.C. §§ 3951, 3931, 3958; the 2026 rent limit of $10,542.60), `edu-bankruptcy-eviction-federal` (11 U.S.C. § 362(a), (b)(22)-(23), (k), (l), (m)), `edu-fair-housing-coverage-federal` (42 U.S.C. §§ 3602(k), 3603(b), 3604(c), 3607(b)(1), 1982), `edu-fair-housing-harassment-federal` (24 C.F.R. §§ 100.600, 100.7; 42 U.S.C. § 3617), `edu-accessible-design-federal` (42 U.S.C. § 3604(f)(3)(C), (f)(4), (f)(7)), `edu-debt-collectors-federal` (15 U.S.C. § 1692a(5)-(6)), `edu-asbestos-demolition-renovation-federal` (40 C.F.R. §§ 61.141, 61.145), `edu-antenna-rights-federal` (47 C.F.R. § 1.4000) and `edu-voucher-repairs-and-rent` (24 C.F.R. §§ 982.404, 982.451, 982.453, 982.507, 982.510). A tenth, `edu-credit-reporting-furnisher-duties` (15 U.S.C. §§ 1681s-2, 1681i(a)(1); 12 C.F.R. §§ 1022.40-1022.43), was added the same day at Taylor's request. This state's existing rows on the same subjects stay, since they carry state detail; no clause changed.
