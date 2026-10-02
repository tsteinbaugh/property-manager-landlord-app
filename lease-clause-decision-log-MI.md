# Michigan — lease-clause decision log (state #28)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§14: the Truth in Renting Act (Mich. Comp. Laws §§ 554.631-554.641, 11 sections), the security deposit act (Mich. Comp. Laws §§ 554.601-554.616, 20 sections), the RS 1846 ch. 66 tenancy sections (Mich. Comp. Laws §§ 554.131-554.139, 554.201), Mich. Comp. Laws § 600.2918 and RJA ch. 57 (Mich. Comp. Laws §§ 600.5701-600.5759, 24 sections) read whole from the full Michigan Compiled Laws loaded from legislature.mi.gov; each act's section index diffed against the MI rows, every uncited section listed with a reason; Housing Law of Michigan index screened, relied-on sections read whole) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Rental Property Owners Association (RPOA) Lease Agreement, © January 2024, Michigan landlord association form, mapped paragraph by paragraph) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 80 scenarios (79 in the first pass, 1 added in the closeout round), Claude-generated on the AZ §18.1 / IN §16 model plus Michigan-specific; one new row came from it) |
| Gap-discovery source 4 — outside-title search | Done (§17: the whole Michigan Compiled Laws (241 chapters, 43,930 entries including the 1963 Constitution) loaded in the built-in browser and searched with 135 batteries (132-135 in the closeout round); control term 0 hits; every absence pattern tested against known positives, failures rerun; relied-on hits read whole and saved) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state is closed. This pass changed no other state's row except by adding an `MI` tag and an `MI:` note.

**Date:** 2026-10-01; closeout round 2026-10-01 to 2026-10-02 (Taylor: 'close the open items') · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used:** none of the three rule-9 triggers needed it, because the whole code and Constitution loaded into the browser gave full-text proof of absence and cross-chapter search directly (rule 9).
**Kickoff vs SOP:** two points, both settled for the SOP. (1) `dv-release-notice-mi` quotes Mich. Comp. Laws § 554.601b(1)'s prescribed lease sentence verbatim, including its own "MCL 554.601b"; rule 59 (prescribed text verbatim) prevails over the kickoff's no-bare-"MCL" rule. (2) `edu-attorney-fees-mi` quotes MCR 4.201(L)(4), which itself says "MCL 600.5759", for the same reason. Otherwise every citation in `bodyText` and `notes` uses the kickoff's format (`Mich. Comp. Laws § 554.633(1)(a)`, `§§` for several, `2026 Mich. Pub. Acts 103`, `MCR 4.201`), checked by script (§8). The kickoff defines no format for the Constitution; rows write `Const 1963, art. X, § 3` (flagged §10). This log abbreviates to '§ 554.633'.
**Scope:** Michigan state law only. Detroit, Ann Arbor, Grand Rapids, Lansing and other local rental ordinances (registration, inspection, required lease clauses, fee rules, life-safety codes) are flagged, not resolved (rule 3). State law preempts local rent control (§ 123.411) and local condominium-conversion rules (§ 559.241(2)); no general preemption of other local landlord-tenant rules was found (batteries 126-127). Deprioritized and named: mobile home parks (§ 600.5775, § 125.2307, the Mobile Home Commission Act), land contract forfeiture (§§ 600.5726-600.5730), commercial leases, public housing commissions.
**Input CSV:** `lease-clauses.csv`, **2,263 rows, 17 columns, CRLF, 2,140 active (541 lease clauses, 1,599 education)**; active counts per state match the kickoff exactly (rule 23). No MI rows existed (rule 25). Nothing from an earlier Michigan pass was in the outputs folder; nothing to delete (rule 8). This is Michigan's only Desktop chat.
**Output CSV:** `lease-clauses-MI-delta.csv`, **159 rows, 17 columns, CRLF**: 45 existing rows with `MI` added to `states`, an `MI:` note appended and `last_checked` 2026-10-01, and 114 new MI rows. **MI 159 active: 75 lease clauses (45 tagged + 30 new), 84 education; all VERIFIED.** Merged with the master: 2,377 rows, 2,254 active; every other state's active count unchanged. **No shared row's text changed.**

---

## 0. Completion status

| | Status |
|---|---|
| Primary text read | **Read whole and saved, browser SHA-256 equal to file SHA-256 (`sources/registry.tsv`):** the whole Michigan Compiled Laws and 1963 Constitution as parsed (`mi-corpus.json`); within it, the core acts read whole (§14) and 153 relied-on sections saved separately (`mcl-relied-sections.txt`). **Court rules:** the Michigan Court Rules PDF (updated Sept. 2, 2026); MCR 4.201 read whole, MCR 8.119 read for record rules. **Session laws:** 2026 Mich. Pub. Acts 32, 102 and 103 read as enrolled, with their effect clauses; the 2025 and 2026 public act lists and tables screened. **Read in battery context only (labelled so in the rows):** the hits named in §17. **Closeout round:** the cases in §1.4, the federal law in §1.4, Michigan Public Service Commission rules, the residential construction code rules and the 2025 rule set, SCAO forms DC 100a, 100c, 102a and 102c, and MCR 3.106 (§1.1); the Housing Law and the other statutes listed in §7 read whole. |
| Step B — tag first | **Done.** 45 existing rows tagged MI (§2.1), including the ks-oh-ca / ks-oh / ks-ne / ks variants and `holdover-ca`, `tenant-forward-proceedings-ca`. 26 shared rows screened and not tagged (§2.2): 12 replaced by an MI variant, 7 by another variant already in the library, 7 with nothing needed. All 470 single-state clauses screened (§2.3); none tagged. No shared text edited. |
| Step E — new MI rows | 30 lease clauses (14 optional under rule 54) and 84 education rows (`edu-utility-landlord-account-mi` added in the closeout round); 30 rows carry a CONFIRMED ABSENT search record, 20 of them pure absence rows (`edu-no-*`) (§3). |
| Instruction 24 family | `security-deposit-return-mi` (REQUIRED; tenant's forwarding address within 4 days; itemized notice of damages within 30 days with the 12-point boldface statement; balance by check, money order or, from Sept. 21, 2026, electronic transfer within 10 days; §§ 554.609-554.611). |
| Step D screens | All run (§19). Hits: rule 40 (four 12-point or boldface form rules, §4); rule 42 (condominium compliance statement, acceleration statement, fee-free payment method); rule 43 (`default-by-tenant-mi` carve-out for the no-cure grounds); rule 48 (inventory checklist, notice of damages, DV verification form are separate documents); rule 49 (§ 554.633(1)(g) bars the base fee sentences); rule 50 (fifteen "the lease decides" choices, each made on purpose); rule 52 (§ 554.633(1)(e): variants used); rule 53 (`returned-payments`, `holdover`, `security-deposit-use`, `acceptable-payment-methods`, `assigned-parking-space`, `landlords-access` overridden). Constitution: art. I, § 6 (arms), art. X, §§ 3, 6 (exemptions, aliens' property) recorded (battery 76). |
| Optional clauses (rule 54) | 14 offered; 10 declined or barred, each with its reason and, where lawful, an education row (§6.1). |
| Questions to Taylor (rule 76) | Two (§6.2): snow removal (tag the shared clause; edit it library-wide, flagged for Claude Code) and landlord casualty termination (narrow clause, Term of one year or more, tenant's § 554.201 right preserved). Taylor: legal calls like the second are Claude's to make. |
| Proof of absence | 30 rows with a CONFIRMED ABSENT search record (battery, hit count, known-positive result); every topic in the reference ends Present, Confirmed absent, Not located, Answered elsewhere, Not offered, Barred or Not applicable (§18). Nine batteries failed a known positive; each is recorded, and every one a row relies on was rerun (§1.3). |
| Independent check | A separate agent checked all rows against the saved sources in three rounds: 27 first-round findings, all fixed; 9 residual points on re-verification, fixed; 9 points on six rows edited afterwards, fixed. Closeout round: round 4 checked the 42 rows changed (20 findings, all fixed) and round 5 the 18 rows edited for them (4 points, applied as suggested) (§13). |
| Corpus completeness | Every chapter compared with the site's XML section index; complete apart from three labelling differences (§1.3). |
| Currency | Current through 2026 Mich. Pub. Acts 103 (Sept. 21, 2026); every legislature.mi.gov page states 'Michigan Compiled Laws Complete Through PA 103 of 2026': the compiled text prints 2026 acts in its history lines; the two 2026 acts that amend the core acts are compiled and were read as enrolled (§1.2). |

## 1. Sources, currency and corpus (rules 16, 19, 24)

### 1.1 Source registry (rule 24)
- **Statutes and Constitution:** legislature.mi.gov (Michigan Legislative Service Bureau). Each chapter of the Michigan Compiled Laws is served whole at `/Home/RenderDoc?objectName=mcl-chapN`; every section prints its history line ('Am. 2026, Act 103, Imd. Eff. Sept. 21, 2026'). The 1963 Constitution was loaded as chapter 1. **Channels:** neither the cloud shell nor the device shell can reach legislature.mi.gov (proxy 403); the built-in browser could. Pages were parsed in the browser, saved by the browser to the Downloads folder (Taylor approved Downloads access), staged into the workspace and hash-matched (browser SHA-256 = file SHA-256) before use. Some downloads landed under temporary GUID names; those were staged and hash-checked the same way.
- **Session laws:** the 2025 and 2026 public act lists, the public act tables (2026 table PDF created Aug. 12, 2026), the public act effective-date documents, the enrolled acts for 2026 Mich. Pub. Acts 32, 102 and 103, and the Senate Fiscal Agency analyses of those bills, all from legislature.mi.gov (`mi-acts.json`, `pa-2025-2026-lists.json`).
- **Court rules:** the Michigan Court Rules PDF from courts.michigan.gov ('Updated September 2, 2026', Last-Modified Sept. 3, 2026), saved and hash-matched; MCR 4.201 and MCR 8.119 extracted to text.
- **Administrative rules (closeout round):** from the Administrative Rules System (ars.apps.lara.state.mi.us): Public Service Commission consumer standards and billing practices (R 460.101-460.169) and electric technical standards (R 460.3101-460.3908); construction code Part 5, residential (R 408.30500-408.30547g; Part 4 and the rehabilitation code saved, not relied on); the final rule language of rule set 2022-16 LR (2021 IRC; filed May 1, 2025; effective Aug. 29, 2025), which neither amends nor rescinds R 408.30546 or R 408.30520; the House Fiscal Agency analysis of that rule set (house.mi.gov). Read in the built-in browser, saved through Downloads and hash-matched. Not read: gas technical standards, drinking water supply rules, other agencies' rules.
- **Case law (closeout round):** courts.michigan.gov and CourtListener; list, holdings and searches in §1.4.
- **Federal (closeout round):** United States Code, 2024 edition (govinfo); eCFR titles 24 and 40 (up to date as of Sept. 30, 2026); the Federal Register; hud.gov. **Census:** U.S. Census Bureau QuickFacts (Detroit) and a citypopulation.de compilation, saved from WebFetch.
- **SCAO forms (closeout round):** DC 100a (Rev. 5/22), DC 100c (Rev. 10/24), DC 102a and DC 102c (Rev. 11/23), courts.michigan.gov, saved and hashed.
- **Real lease:** RPOA Lease Agreement, © January 2024 (§15), saved as PDF and text and hash-matched.
- **Citation format:** the kickoff's; log references written 'MI log §N'. The kickoff defines none for cases, federal law or administrative rules; rows write Michigan-style case cites (`Curran v Williams, 352 Mich 278, 282 (1958)`; 2026 Supreme Court cases `___ Mich ___ (2026) (Docket No. …)`), `42 U.S.C. § 3607(b)(1)`, `24 C.F.R. § 100.204` and `Mich. Admin. Code R 460.138(1)(e)` (§10).

### 1.2 Currency (rule 16)
- **Compiled text:** history lines print 2026 acts (for example 2026 Mich. Pub. Acts 102 on § 554.609, 103 on § 554.633, 87 on § 750.50, 32 on §§ 125.853-125.859). The update feed (RSS, 'Changes to Michigan Compiled Laws') had lastBuildDate Thu, 24 Sep 2026. **Currency statement (closeout round):** every legislature.mi.gov page carries the banner 'Michigan Compiled Laws Complete Through PA 103 of 2026', which matches the history lines and the act lists; the site also says it is not the official version and gives no warranties. The chapter 554 XML file is dated Sept. 23, 2026.
- **Acts behind the core acts, read as enrolled with their effect clauses and compared with the compiled sections:** 2026 Mich. Pub. Acts 102 (SB 22; § 554.609 electronic refund) and 103 (SB 373; § 554.633(1)(o) payment-method fees), both approved with immediate effect, effective Sept. 21, 2026; the compiled sections match. 2026 Mich. Pub. Acts 32 (HB 6074; large institutional investor purchase ban, effective July 21, 2026), compiled at §§ 125.853, 125.855, 125.857, 125.859.
- **Screen of every 2025 and 2026 act:** the 74 acts of 2025 and 103 of 2026 were screened by their MCL references and titles for every chapter relied on (554, 600 chs. 29, 57, 60, 125 Housing Law, 37 civil rights, 333 marihuana and lead, 123, 141, 559, 445, 438, 257.252, 566, 567, 450.8, 750.50, 771, 339.25) and for landlord, tenant, lease, rent or eviction. Only 2026 Mich. Pub. Acts 102 and 103 touch the landlord-tenant chapters; 2026 Mich. Pub. Acts 87 (§ 750.50, animal cruelty forfeiture) is compiled and no row turns on the change. The 2026 public act table is compiled through act 91 (Aug. 12); acts 92-103 were screened from the list.
- **Session and revisory acts:** Michigan's Legislature sits in a continuous two-year session; the 2025 and 2026 lists number every public act of those years, so a special session's acts would appear there. No general revisory (technical corrections) act appears in either list.
- **Bulk lag check:** § 554.633 as loaded in the chapter download and as printed on its section page are identical, and both include (1)(o) from 2026 Mich. Pub. Acts 103; no lag.
- **Real-lease probe:** the 2024 RPOA lease cites § 123.165, § 554.601b and the 2016 medical marihuana amendments by their current numbers; no renumbering signal.

### 1.3 Corpus and method (rule 19)
- **Loaded:** all 241 chapter pages, sequentially, in one corpus tab: **43,930 entries** (the Constitution counted as chapter 1). For each chapter, the count of section headings and of section wrappers in its own HTML matched the parsed count. **Index check:** the first pass against the site's chapter indexes flagged 53 chapters (45 index pages had returned no links because of throttling); 51 were rechecked (`mi-index-recheck.json`) and the corpus is a superset of the index in every one except chapter 259, where two aeronautics section numbers parse differently; chapter 1 (the Constitution) has no index in that format; one flagged chapter was not identified before the browser session closed. **Closeout round (2026-10-02), full comparison:** the site's machine-readable chapter files (`/documents/mcl/Chapter N.xml`, each section's number and repealed flag) were fetched for every chapter number in the corpus at 1.2-second spacing: 206 files (grouped chapters such as 61-75 come as one file under the first number; the other numbers return 404), 43,649 entries, saved and hash-matched (`sources/closeout/mcl-xml-index.json`). After removing the files' version markers for future-effective text ('.amended' 145, '.added' 53, '[1]' 24, '.new' 1), the XML lists 43,480 section numbers and the corpus 43,479 (Constitution excluded), and they agree on every number except three labelling differences: chapter 259's repealed ranges are keyed 259.10 and 259.14a in the XML and 259.10a and 259.15 in the corpus (all repealed), and § 752.863[a] is held in the corpus under § 752.863. **The corpus is complete; the unidentified flagged chapter needs no separate answer.**
- **Engine:** Python regular expressions over each section's normalized text (curly quotes straightened), headings excluded and reported separately as heading-only hits, first match per section; an optional context filter (`req`) and chapter scope are recorded with each battery. Control term (battery 1): 0 hits; every battery records its control count (always 0). Calibration: 'security deposit' 31 sections including the whole deposit act (battery 2).
- **Known positives:** every absence battery after the control was run with real saved sections, synthetic statute-style sentences or both, in the same step (rule 19). **Failures, all recorded and rerun where any row relies on them:** 3 (scope finder; its real positive § 554.139 says 'lessor or licensor'; not used for any absence); 5 → 6 (rent increase; § 554.633's wording); 24 → 126 → 127 (local preemption: a synthetic positive failed, then the preempt-before-subject order); 45 → 68 (statute of frauds; number style); 67 → 69 (price gouging); 80 → 83 (deposit interest; positive § 554.604 lacks 'interest'); 104 → 116 (sex offender residency, scope too narrow); 107 (condominium rental restriction; positive failed; not rerun and not relied on); 122 → 123 → 124 (occupancy: 122's synthetic positives passed but the statute measures air space, not floor area; 123 missed 'occupied for sleeping'), plus 131 for the whole code. Battery 24 was cited by `edu-rent-control-mi` before the failure was noticed; the row now cites 126-127 (independent check, §13).
- **Boundary:** the batteries searched statutes, the Constitution and the court rules named above. In the closeout round the administrative rules, cases, federal law and forms in §1.1 and §1.4 were read for the questions the rows raise, not searched as whole bodies. Local codes and the adopted building and fire codes were not searched or read, and nothing is claimed about them.
- **Saved:** batteries 1-135 (`batteries/batteries.jsonl`, each with pattern, scope, context filter, positives and results, hits, heading-only hits and control count; `batteries/run-log.txt` with the snippets), the corpus, the relied-on sections, the court rules, the acts, the real lease, the registry.

### 1.4 Section-open vs recall; case law (rule 15)
Every row was drafted with the saved primary text open (each new row's notes say 'Rule 15: written section-open'); the recall subset is empty. Sections read only in battery context are labelled so in the rows.

**Case law, closeout round (Taylor: 'close the open items').** Opinions read whole and saved with SHA-256 in `sources/closeout/`, from courts.michigan.gov (2026 Supreme Court opinions as released) and CourtListener:

| Case | What it decides, as used | Rows |
|---|---|---|
| Curran v Williams, 352 Mich 278, 282 (1958); UAW-GM Human Resource Ctr v KSL Recreation Corp, 228 Mich App 486, 508 (1998) | An agreed sum is enforced if 'reasonable with relation to the possible injury suffered' and not unconscionable or excessive; enforceability is a question of law | `late-fee`, `early-termination-ks` (tag notes); `returned-payments-mi`, `holdover-rate-mi`, `edu-holdover-mi`, `edu-dishonored-check-mi` |
| Gurunian v Grossman, 331 Mich 412, 418 (1951) | The notice and demand of possession asserts the intention to forfeit | `default-by-tenant-mi` |
| Park Forest of Blackman v Smith, 112 Mich App 421, 425-428 (1982); Detroit Webster Hall Co v Webster Corner Bar, Inc, 294 Mich 147 (1940) | Accepting rent for a period after the notice date, before the tenant has notice of the case, waives the notice; habitual acceptance of late rent requires notice that strict compliance will be required; rent collected during an appeal did not waive the judgment | `default-by-tenant-mi`, `edu-acceptance-of-payment-mi` |
| Birznieks v Cooper, 405 Mich 319 (1979) | No agreement can take away the statutory right to cure after judgment | `default-by-tenant-mi` |
| Allison v AEW Capital Mgt, LLP, 481 Mich 419 (2008); Benton v Dart Props, Inc, 270 Mich App 437 (2006); Hadden v McDermitt Apts, LLC, 287 Mich App 124 (2010); Bowerman v Red Oak Mgt Co, Inc, ___ Mich ___ (2026) (Docket No. 167718, decided July 20, 2026) | Common areas fall under the fitness covenant, § 554.139(1)(a); the repair covenant, (1)(b), does not apply to them; natural snow and ice make a lot unfit only in exigent circumstances; an iced interior sidewalk is unfit; the same for stairways; Allison not overruled, and fitness is judged for the tenants the property is held out to | `snow-removal` (tag note), `edu-habitability-mi`, `tenant-repair-agreement-mi`, `edu-habitability-modifiable-mi` |
| New Hampshire Ins Group v Labombard, 155 Mich App 369, 377 (1986); Laurel Woods Apts v Roumayah, 274 Mich App 631 (2007) | No tort liability for negligent fire damage without an express and unequivocal agreement; an express 'acts or omissions of Tenant or Tenant's guests' term is enforced in contract, fire included | `tenant-caused-damage-mi` (new liability sentence, §6.1), `edu-tenant-caused-damage-mi` |
| Attorney General v Eli Lilly & Co, ___ Mich ___ (2026) (Docket No. 165961, decided July 31, 2026) | § 445.904(1)(a) asks whether the specific transaction or conduct at issue is authorized by law; Smith v Globe Life Ins Co, 460 Mich 446 (1999) and Liss v Lewiston-Richards, Inc, 478 Mich 203 (2007) overruled | `edu-consumer-protection-mi` (the conclusion for leases is labelled Claude's reading) |
| M&D, Inc v McConkey, 231 Mich App 22 (1998); Hord v Environmental Research Institute of Michigan (After Remand), 463 Mich 399 (2000) | Silent fraud needs a duty to disclose, which arises on a direct inquiry or particularized concern (non-lease cases, applied by analogy) | `edu-meth-mi` |
| Woodland v Michigan Citizens Lobby, 423 Mich 188 (1985) | The Declaration of Rights has never been interpreted as reaching purely private conduct | `edu-firearms-mi` |

Also read, not relied on: Wilkinson v Lanterman, 314 Mich 568; Penokie v Colonial Townhouses Coop (1985; a cooperative membership fee); the 2024 Supreme Court Holder opinion (only the partial dissent was retrieved); Wade v Univ of Michigan (published Court of Appeals opinion, July 20, 2023; no art. I, § 6 analysis); a 2025 business court opinion quoting Curran.

**Searched, no published Michigan case found** (CourtListener and courts.michigan.gov searches; 'not found' records a search outcome, not proof that none exists): § 125.526(11) owner entry; whether vaping is 'smoking' under § 333.27954; §§ 554.201 and 554.633(1)(a) or a landlord casualty clause; whether a guest's act is the tenant's 'fault or neglect'; the reach of a § 554.139(2) modification; a broad tenant indemnity under § 554.633(1)(e); whether non-rent charges are 'rent due'; pre-lease holding deposits; art. I, § 6 against a private landlord; occupancy limits and familial status (Countryside Townhouses not found); past drug manufacturing sites and § 445.903(1)(s); the penalty test applied to a residential lease fee. **Not searched:** unconscionability of lease terms beyond the penalty test; a minimum cure period for breaches other than rent; whether a flat collection fee is a 'legal cost'. Unpublished opinions are not relied on.

**Reporter citations:** confirmed from CourtListener's citation record or a saved citing opinion for every case cited except Park Forest (112 Mich App), Gurunian (331 Mich) and Detroit Webster Hall (294 Mich); for those three the volume is not printed in the saved text, though the saved texts' star pages match the first pages cited (independent check round 4, §13).

**Federal law, closeout round:** 42 U.S.C. §§ 3604(f)(3), 3607(b)(1), 4852d; 50 U.S.C. §§ 3951, 3955; 15 U.S.C. § 1681m; the Protecting Tenants at Foreclosure Act (12 U.S.C. § 5220 note); 24 C.F.R. §§ 5.2005, 100.204, 966.4, 982.310 and 40 C.F.R. §§ 745.101, 745.103, 745.107, 745.113; the Keating memorandum (63 Fed. Reg. 70256); the 2026 withdrawal notice (91 Fed. Reg. 17291); the HUD FHEO memorandum of May 22, 2026. Read for the provisions the rows cite, not as whole bodies.

## 2. Tag-first results (rules 26-28)

### 2.1 Tagged MI as written (45)
| Row | Michigan note (abridged) |
|---|---|
| `addendum-precedence` | Applies as written. Michigan's required lease statements (§§ 554.634, 554.601a, 554.603, 559.212(3)), and the optional § 554.601b statement where used, control under its 'required by law' exception. |
| `no-alterations` | Applies as written; reasonable modifications for a person with a disability at the tenant's expense, with a reasonable restoration condition, are preserved by its last sentence (§ 37.1506a(1)(a)). |
| `appliances-included` | Applies as written; the landlord's repair covenant is § 554.139(1)(b). |
| `application-of-payments` | Applies as written; no Michigan statute sets an order of applying a tenant's payment (MI battery 125: 2 hits, both sales- and use-tax sourcing of lease payments; known positives passed; MI log §17). A nonpayment demand states … |
| `assistance-animal-accommodation` | Applies as written. Michigan's Persons with Disabilities Civil Rights Act requires reasonable accommodations in rules and policies (§ 37.1506a(1)(b)); the state service-animal misrepresentation crime is limited to a 'public … |
| `common-area-use` | Applies as written. No Michigan statute gives tenants a flag, sign or flotation-bedding right against a landlord (MI batteries 35, 42; § 559.156a binds condominium developers and associations, not landlords). |
| `no-disturbance` | Applies as written. |
| `due-at-signing` | Applies as written, with one point for the builder: in Michigan any required prepayment of rent other than the first full rental period is a security deposit (§ 554.601(d)), so last month's rent collected at signing counts … |
| `early-termination-ks` | Applies as written in place of the base. Its saving sentence keeps the tenant's statutory termination rights, including the senior-housing and infirmity right a Michigan rental agreement must state (§ 554.601a; … |
| `electronic-signatures` | Applies as written; Michigan's Uniform Electronic Transactions Act applies only between parties who agreed to transact electronically (§ 450.835(2)), and a party may refuse further electronic transactions (§ 450.835(3)). |
| `entire-agreement` | Applies as written; its 'or as applicable law permits Landlord to change it by written notice' matches the 30-day adjustments § 554.633(1)(l)(i)-(iii) lets a lease provide for; the clause does not itself authorize any mid-term … |
| `existing-condition` | Applies as written, read with the statutory inventory checklists (§ 554.608) and the rule that inspecting the premises does not defeat the covenants of fitness and repair (§ 554.139(3)); the clause is an acknowledgment, not a … |
| `fire-safety-grilling` | Applies as written; local fire codes may be stricter (rule 3). |
| `governing-law` | Applies as written. |
| `guest-policy` | Applies as written. |
| `guest-policy-day-limit` | Applies as written. |
| `holdover-ca` | Applies as written in place of the base. Michigan sets no statutory holdover multiplier (MI battery 63); a landlord who wins possession may recover damages from the notice to quit or demand for possession (§ 600.5750). Its … |
| `inspection-rights` | Applies as written; it points to this Lease's Access & Entry terms (landlords-access-mi). |
| `joint-liability` | Applies as written; a domestic violence release of one co-tenant leaves the others bound (§ 554.601b(5)). |
| `keys` | Applies as written; a landlord may not change locks without immediately giving the tenant keys (§ 600.2918(2)(c)), which the clause does not do. |
| `landlord-maintenance` | Applies as written; consistent with the covenants of fitness and reasonable repair (§ 554.139(1)), including the exception for the tenant's wilful or irresponsible conduct. Its 'subject to Tenant's own maintenance obligations' … |
| `landscaping-irrigation` | Applies as written, consistent with Taylor's snow-removal decision (MI log §6.2): a tenant chore, not a modification of the § 554.139 covenants. |
| `late-fee` | Applies as written; no Michigan statute caps or regulates residential late fees (MI battery 13: 12 hits, none residential). Penalty test: Michigan courts enforce an agreed sum that is reasonable with relation to the possible … |
| `lead-based-paint` | Applies as written (federal). Michigan adds a misdemeanor for an owner who rents or continues to rent to a family with a minor child found to have 10 micrograms or more of lead per deciliter of venous blood, where the owner … |
| `notices` | Applies as written; the lessor's notice name and address is a required statement (§ 554.634(1); lessor-notice-address-mi); demands for possession are served as § 600.5718 provides. |
| `parking-ks-oh-ca` | Applies as written in place of the base (§ 554.633(1)(e); rule 52). |
| `permitted-occupants` | Applies as written; occupancy limits may not discriminate on familial status (§ 37.2502(1)). |
| `pet-insurance-requirement` | Applies as written. |
| `possession-delay` | Applies as written; no Michigan statute sets a remedy for failure to deliver possession at the start of the term (MI battery 82). |
| `rent-payment` | Applies as written; 'without demand, deduction, or setoff, except as permitted by applicable law' preserves rent excused by the landlord's breach of the covenants (§ 600.5741) and Housing Law rent escrow (§ 125.530). |
| `rental-application-accuracy` | Applies as written. |
| `residential-use-only` | Applies as written. |
| `services-utilities-provided-ks-oh` | Applies as written in place of the base (§ 554.633(1)(e); rule 52). |
| `severability` | Applies as written; a provision violating § 554.633 is void (§ 554.633(3)). |
| `snow-removal` | Applies as written (Taylor, 2026-10-01, MI log §6.2). Michigan's covenants of fitness and repair cover the premises 'and all common areas' and may be modified only in a lease with a current term of at least 1 year (§ … |
| `storage-space-ks-oh-ca` | Applies as written in place of the base (§ 554.633(1)(e); rule 52). |
| `no-sublet-assign` | Applies as written; no Michigan statute governs residential subletting or assignment (MI battery 79). |
| `surrender-end-of-term-ks-ne` | Applies as written in place of the base; its 'Handling of Property Left Behind Section' is abandoned-property-mi. |
| `tenant-forward-proceedings-ca` | Applies as written. |
| `tenant-maintenance` | Applies as written; Michigan's Housing Law makes tenants responsible for the cleanliness of the parts of the premises they occupy and control (§ 125.474), and the clause's carve-out keeps the landlord's covenants (§ 554.139). |
| `tenants-property-insurance-ks-oh-ca` | Applies as written in place of the base (§ 554.633(1)(e); rule 52). No Michigan statute regulates renter's insurance requirements (MI battery 103). |
| `utilities-paid-by-landlord` | Applies as written. |
| `utilities-responsibility` | Applies as written; for municipal water and sewer liens see municipal-water-lien-mi. |
| `utility-payment-evidence` | Applies as written. |
| `utility-service-continuity` | Applies as written. |

### 2.2 Screened and not tagged (26)
| Row | Instead | Reason |
|---|---|---|
| `acceptable-payment-methods` | `acceptable-payment-methods-mi` | Its 'Landlord may change the accepted payment methods on reasonable written notice' is a unilateral mid-term change § 554.633(1)(l) voids (only law-required, health/safety rule and listed cost changes may be made on 30 days' notice), and it does not carry the fee-free method that § 554.633(1)(o) (2026 Mich. Pub. Acts 103) requires when more than one method is allowed. |
| `acceptable-payment-methods-nj` | nothing | NJ/IL variant (non-electronic method); the MI variant covers Michigan's rules. |
| `assigned-parking-space` | `assigned-parking-space-mi` | Its right to reassign the space on notice during the Term is a mid-term change without the tenant's written consent that § 554.633(1)(l) voids. |
| `default-by-tenant` | `default-by-tenant-mi` | Its prevailing-party attorney-fee sentence is barred by § 554.633(1)(g) ('to the extent permitted' hides the conflict, rule 53), and its general cure promise does not carve out Michigan's no-cure grounds (§§ 554.134(4), 600.5714(1)(b), (e)) (rule 43). |
| `default-by-tenant-ks-ne` | `default-by-tenant-mi` | Its 'reasonable costs and expenses' recovery reaches 'legal costs' that § 554.633(1)(g) limits to costs specifically permitted by statute, and it has no carve-out for Michigan's no-cure grounds (rule 43). |
| `early-termination` | `early-termination-ks` | Its separate 10-day cure promise for any material breach gives away Michigan's no-cure grounds (rule 43); early-termination-ks is tagged instead. |
| `ev-charging-end-of-tenancy-co` | nothing | No Michigan tenant EV-charging statute (MI battery 33). |
| `ev-charging-shared-area-co` | nothing | No Michigan tenant EV-charging statute (MI battery 33). |
| `extended-absence-notice-ks` | nothing | No Michigan extended-absence statute (MI battery 121: 4 hits, none a tenant duty; known positives passed; MI log §17). |
| `hoa-compliance` | `hoa-compliance-mi` | For a condominium unit Michigan requires every lease to state that the tenant will comply with all conditions of the condominium documents (§ 559.212(3)); the base names only the association's rules and regulations (rule 42). |
| `holdover` | `holdover-ca` | Michigan has no statutory holdover measure (MI battery 63), so 'the maximum amount permitted by applicable law for each day' points at nothing (rule 53); holdover-ca is tagged instead. |
| `landlords-access` | `landlords-access-mi` | In the cities, villages and townships the Housing Law of Michigan covers, the owner must request and obtain the tenant's permission before entering except in an emergency (§ 125.526(11)); the base gives a right of access on 24 hours' notice. |
| `late-fee-ne` | nothing | Base late-fee is tagged and fits. |
| `parking` | `parking-ks-oh-ca` | 'Landlord ... is not liable for damage to or theft of a vehicle' risks exculpating the lessor for failure to perform a duty imposed by law (§ 554.633(1)(e)) (rule 52). |
| `parking-vehicle-rules` | `parking-vehicle-rules-mi` | Its towing sentence covers 'illegally parked, abandoned, inoperable, or has expired registration' vehicles, wider than the private-property route for a vehicle left 'without the consent of the owner' (§ 257.252a(10)); towing a tenant's own vehicle risks unlawful interference (§ 600.2918(2)(b)). |
| `pet-policy` | `pet-policy-mi` | Its broad indemnity risks § 554.633(1)(e), and its entry-and-removal sentence conflicts with the permission-before-entry rule (§ 125.526(11)) and the ban on removing a tenant's property (§ 600.2918(2)(b)); a refundable pet deposit is a security deposit (§ 554.601(d)). |
| `possession-delay-ca` | nothing | Base possession-delay is tagged and fits. |
| `returned-payments` | `returned-payments-mi` | 'Not to exceed the maximum amount permitted by applicable law' points at no general cap: Michigan's dishonored-check statute fixes a $25 or $35 processing fee only for its own civil demand procedure (§ 600.2952) (rule 53). |
| `security-deposit-return` | `security-deposit-return-mi` | Blank-states parent; Michigan's return mechanics (§§ 554.609-554.613) need their own clause (instruction 24). |
| `security-deposit-use` | `security-deposit-use-mi` | 'Remedy a Tenant default under this Lease' and the cleaning sentence are broader than Michigan's closed list of uses (§ 554.607), and the parties may not waive the act (§ 554.606). |
| `services-utilities-provided` | `services-utilities-provided-ks-oh` | 'Landlord is not liable for any interruption' risks § 554.633(1)(e) (rule 52). |
| `smoking-policy` | `smoking-policy-mi` | Michigan's marihuana act lets a lease ban smoking but provides that 'a lease agreement may not prohibit a tenant from lawfully possessing and consuming marihuana by means other than smoking' (§ 333.27954(4)); the base bans vaping marijuana, and whether vaping is 'smoking' is undefined in the act (no Michigan appellate decision on the point was found, MI log §1.4). |
| `storage-space` | `storage-space-ks-oh-ca` | 'Landlord is not liable' risks § 554.633(1)(e) (rule 52). |
| `surrender-end-of-term` | `surrender-end-of-term-ks-ne` | Disposal 'at Tenant's cost' of property left behind is broader than Michigan's limits on removing a tenant's property (§ 600.2918(2)(b), (3)(c)); the ks-ne variant points to abandoned-property-mi. |
| `surrender-end-of-term-mn-nd` | nothing | Its pointer names a section the MI lease does not use; ks-ne variant tagged. |
| `tenants-property-insurance` | `tenants-property-insurance-ks-oh-ca` | 'Landlord is not liable for any such loss' risks § 554.633(1)(e) (rule 52). |

### 2.3 Single-state clauses screened (470), none tagged
Every active lease clause tagged to exactly one state was screened (rule 26). **214** name another state, its statute or its agency in the clause text, so none applies to Michigan as written. **136** sit on a topic Michigan already answers with its own or a tagged clause (one curated answer per topic, rule 6). The remaining **120** were read in full: each rests on another state's statute (alarm, flood, meth, bed-bug, submetering, fee-disclosure and occupancy-presumption clauses; CA, NV, NJ, VA and TX notices), conflicts with Michigan law (entry without permission, `periodic-services-entry-sc`, `landlord-self-cure-tn`; landlord utility cutoff, `utility-transfer-tn`; nuisance waiver, `smoke-drift-waiver-ut`; service on a named person, `eviction-service-party-tn`, against § 554.633(1)(f); 30-day periodic notice shorter than § 554.134's one month, `periodic-tenancy-notice-wy`; a concession clawback, `rent-concession-az`; restoration of the exterior, `disability-modification-restoration-id`, beyond § 37.1506a(1)(a)'s interior), or answers a topic Michigan has no rule on (lease-copy acknowledgment, rent concessions, adverse-proceeding notice already covered by `tenant-forward-proceedings-ca`). The triage list is saved (`work/log/single-triage.json`).

## 3. New MI rows
Every new row is VERIFIED, dated 2026-10-01, notes begin 'MI: ', and each lease clause carries `lease_clause_basis` (three-bucket test, rule 55). Citations below drop the 'Mich. Comp. Laws' prefix; the rows carry it.

### 3.1 New MI lease clauses (30)
| Row | rule_type | Basis | Topic | Main citation |
|---|---|---|---|---|
| `truth-in-renting-notice-mi` | REQUIRED | REQUIRED_DISCLOSURE: Mich. Comp. Laws § 554.634(2) | truth-in-renting | § 554.634(2); § 554.635(2); § 554.636(2) |
| `lessor-notice-address-mi` | REQUIRED | REQUIRED_DISCLOSURE: Mich. Comp. Laws § 554.634(1) | owner-identity-disclosure | § 554.634(1); § 554.603; §§ 554.635(2), 554.636(2) |
| `security-deposit-notice-mi` | CONDITIONAL | REQUIRED_DISCLOSURE: Mich. Comp. Laws § 554.603 | security-deposit-holding | § 554.603; § 554.604; § 554.611 |
| `early-termination-senior-infirmity-mi` | REQUIRED | REQUIRED_DISCLOSURE: Mich. Comp. Laws § 554.601a(1) | infirmity-termination | § 554.601a(1); § 554.601(e); § 554.601a(2) |
| `dv-release-notice-mi` | CONDITIONAL | REQUIRED_DISCLOSURE: Mich. Comp. Laws § 554.601b(1) | dv-lease-termination | § 554.601b(1); § 554.601b(6) |
| `hoa-compliance-mi` | CONDITIONAL | REQUIRED_DISCLOSURE: Mich. Comp. Laws § 559.212(3) | hoa-compliance | § 559.212(3); § 559.165 |
| `security-deposit-use-mi` | REQUIRED/PROHIBITED | CONSTRAINED_TERM | security-deposit-use | § 554.607; §§ 554.606, 554.633(1)(b); § 554.602 |
| `security-deposit-return-mi` | REQUIRED | SERVES_LANDLORD | security-deposit-return | § 554.611; § 554.609(1); 2026 Mich. Pub. Acts 102 |
| `default-by-tenant-mi` | REQUIRED | SERVES_LANDLORD | default-by-tenant | § 554.633(1)(g); § 600.5759; MCR 4.201(L)(4) |
| `landlords-access-mi` | RECOMMENDED | SERVES_LANDLORD | landlord-entry | § 125.526(11); § 125.401(2); § 600.2918(2) |
| `smoking-policy-mi` | RECOMMENDED | SERVES_LANDLORD | smoking-policy | § 333.27954(4); § 333.27954(1)(e); § 333.26427(c)(3) |
| `pet-policy-mi` | RECOMMENDED | SERVES_LANDLORD | pet-policy | § 554.601(d); § 554.602; §§ 554.607-554.613 |
| `acceptable-payment-methods-mi` | CONSTRAINED | CONSTRAINED_TERM | acceptable-payment-methods | § 554.633(1)(o); 2026 Mich. Pub. Acts 103; § 554.633(1)(l) |
| `assigned-parking-space-mi` | RECOMMENDED | SERVES_LANDLORD | assigned-parking-space | § 554.633(1)(l) |
| `parking-vehicle-rules-mi` | RECOMMENDED | SERVES_LANDLORD | parking-vehicle-rules | § 257.252a(10); § 600.2918(2)(b) |
| `returned-payments-mi` | RECOMMENDED | CONSTRAINED_TERM | returned-payments | § 600.2952; § 554.633(1)(l); § 554.633(1)(o) |
| `criminal-activity-mi` | CONDITIONAL | SERVES_LANDLORD | criminal-activity | § 554.134(4); § 600.5714(1)(b); §§ 333.7211-333.7216 |
| `cannabis-cultivation-mi` | CONDITIONAL | SERVES_LANDLORD | cannabis | § 333.27954(4); § 333.26427(c)(3) |
| `tenant-death-contact-mi` | CONDITIONAL | SERVES_LANDLORD | tenant-death | § 600.2918(3)(d) |
| `electronic-service-consent-mi` | CONDITIONAL | SERVES_LANDLORD | notice-delivery-methods | § 600.5718(1)(d); § 600.5718(2); § 600.5718(1)(a) |
| `municipal-water-lien-mi` | CONDITIONAL | SERVES_LANDLORD | municipal-utility-lien | §§ 123.162, 123.165; § 123.166; § 123.165 |
| `housing-inspection-entry-mi` | CONDITIONAL | SERVES_LANDLORD | rental-inspection | § 125.526(6); § 125.526(8)(a); § 125.530(3) |
| `rules-mi` | CONDITIONAL | SERVES_LANDLORD | rules-regulations | § 554.633(1)(l) |
| `rent-cost-adjustment-mi` | CONDITIONAL | SERVES_LANDLORD | rent-escalation | § 554.633(1)(l)(iii) |
| `rent-acceleration-mi` | CONDITIONAL | CONSTRAINED_TERM | abandonment-and-mitigation | § 554.633(1)(i); § 600.5714(1)(a); § 554.633(1)(k) |
| `holdover-rate-mi` | CONDITIONAL | CONSTRAINED_TERM | holdover-rate | § 600.5750 |
| `casualty-termination-mi` | CONDITIONAL | SERVES_LANDLORD | casualty-termination | § 554.201; § 554.139(1)(b); § 554.139(2) |
| `tenant-caused-damage-mi` | CONDITIONAL | SERVES_LANDLORD | tenant-caused-damage | § 554.201; § 554.139(1)(b); § 125.530(3) |
| `abandoned-property-mi` | RECOMMENDED | SERVES_LANDLORD | abandoned-property | § 600.2918(2); § 600.2918(3)(c); § 600.2918(7) |
| `tenant-repair-agreement-mi` | CONDITIONAL | SERVES_LANDLORD | tenant-repair-agreement | § 554.139(2); § 554.139(1)(b); § 554.139(1)(a) |

### 3.2 New MI education rows (84)
| Row | rule_type | Topic | Main citation or absence record |
|---|---|---|---|
| `edu-truth-in-renting-mi` | PROHIBITED | prohibited-lease-terms | § 554.633(1)(a); 2026 Mich. Pub. Acts 103; § 554.635 |
| `edu-truth-in-renting-statements-mi` | REQUIRED | truth-in-renting | § 554.634(1); § 554.635(2); § 554.636(2)(d) |
| `edu-exculpation-mi` | PROHIBITED | exculpatory-clauses | § 554.633(1)(e) |
| `edu-attorney-fees-mi` | PROHIBITED | attorney-fees | § 554.633(1)(g); § 600.5759(1); MCR 4.201(L)(4) |
| `edu-security-deposit-cap-mi` | CONSTRAINED | security-deposit-cap | § 554.602; § 554.601(d) |
| `edu-prepaid-rent-deposit-mi` | RECOMMENDED | deposit-last-month-rent | § 554.601(d); § 554.602; § 554.607(b) |
| `edu-deposit-holding-mi` | REQUIRED | security-deposit-holding | § 554.604(1); § 554.605; § 554.603 |
| `edu-no-deposit-interest-mi` | RECOMMENDED | security-deposit-interest | §§ 554.601-554.616; § 554.604; CONFIRMED ABSENT (MI battery 80) |
| `edu-condition-inspection-mi` | REQUIRED | condition-inspection | § 554.608(1); § 554.609(2) |
| `edu-security-deposit-penalty-mi` | REQUIRED | security-deposit-penalty | § 554.609(1); 2026 Mich. Pub. Acts 102; § 554.610 |
| `edu-deposit-on-sale-mi` | REQUIRED | security-deposit-on-sale | § 554.614(a) |
| `edu-deposit-unclaimed-mi` | RECOMMENDED | deposit-escheat | § 567.222(k)(ii); § 567.223(1); §§ 567.238(1) |
| `edu-pet-deposit-mi` | RECOMMENDED | pet-fees | § 554.601(d); § 554.602; § 37.1506a(1)(b) |
| `edu-habitability-mi` | REQUIRED | landlord-maintenance | § 554.139(1); § 554.633(1)(a); §§ 125.471, 125.474 |
| `edu-habitability-modifiable-mi` | RECOMMENDED | habitability-modifiable | § 554.139(2); § 554.633(1)(a); § 554.139(3) |
| `edu-tenant-repair-remedies-mi` | RECOMMENDED | tenant-repair-remedies | §§ 600.5741, 600.5720(1)(f); §§ 125.530(3); § 600.5739(3) |
| `edu-housing-law-mi` | RECOMMENDED | rental-inspection | § 125.401(2); § 125.525; § 125.526(1) |
| `edu-entry-mi` | REQUIRED | landlord-entry | § 125.526(11); § 125.401(2); § 600.2918(2); CONFIRMED ABSENT (MI batteries 11 and 12) |
| `edu-rent-control-mi` | RECOMMENDED | rent-control | § 123.411(1); § 125.526; § 123.411 |
| `edu-source-of-income-mi` | PROHIBITED | source-of-income | § 554.601c(1); § 37.2502(3); § 554.601(f) |
| `edu-occupancy-standard-mi` | RECOMMENDED | permitted-occupants | § 125.483; § 125.402; § 125.401(2); CONFIRMED ABSENT (MI battery 131) |
| `edu-fair-housing-mi` | PROHIBITED | fair-housing | §§ 37.2102(1), 37.2103(e); § 37.2103(e); § 37.2102(1) |
| `edu-assistance-animals-mi` | RECOMMENDED | service-animal-misrepresentation | § 37.1506a(1)(b); §§ 752.61-752.64 |
| `edu-nonpayment-notice-mi` | REQUIRED | nonpayment-notice | § 600.5714(1)(a); § 600.5716; § 600.5718(1) |
| `edu-termination-notice-mi` | REQUIRED | termination-notice | § 554.134(1); § 600.5714(1)(c)(ii); § 600.5714(1)(e) |
| `edu-for-cause-eviction-mi` | RECOMMENDED | for-cause-eviction | §§ 600.5701-600.5759; §§ 600.5714(2); § 559.204(2); CONFIRMED ABSENT |
| `edu-eviction-process-mi` | RECOMMENDED | eviction-process | §§ 600.5701-600.5759; § 600.5704; § 600.5735(2) |
| `edu-self-help-eviction-mi` | PROHIBITED | self-help-eviction | § 600.2918(1); § 600.5711(1); § 554.633(1)(j) |
| `edu-retaliation-mi` | PROHIBITED | retaliation | § 600.5720(1)(a); § 125.526(14) |
| `edu-expedited-criminal-eviction-mi` | RECOMMENDED | expedited-criminal-eviction | §§ 554.134(4), 600.5714(1)(b) |
| `edu-post-eviction-property-mi` | RECOMMENDED | post-eviction-property | § 600.5744(1); MCR 4.201(P); MCR 3.106 |
| `edu-holdover-mi` | RECOMMENDED | holdover | §§ 600.5714(1)(c), 600.5750, 554.134(1); CONFIRMED ABSENT (MI battery 63) |
| `edu-casualty-mi` | RECOMMENDED | casualty-termination | § 554.201; §§ 554.139(1), 554.633(1)(a) |
| `edu-casualty-short-term-mi` | RECOMMENDED | casualty-termination | §§ 554.139(1)(b); §§ 554.201 |
| `edu-tenant-caused-damage-mi` | RECOMMENDED | tenant-caused-damage | §§ 554.201, 554.139(1)(b), 125.530(3), 125.534(5), 600.5739(2), 600.5714(1)(d), 600.5744(3)(e), 554.607(a) |
| `edu-dv-release-mi` | REQUIRED | dv-lease-termination | § 554.601b(1); § 554.601b(6) |
| `edu-dv-confidentiality-mi` | PROHIBITED | dv-confidentiality | § 554.601b(4) |
| `edu-tenant-death-mi` | REQUIRED | tenant-death | § 600.2918(3)(d)(i) |
| `edu-unauthorized-occupant-mi` | RECOMMENDED | unauthorized-occupant-removal | §§ 600.5711(3) |
| `edu-mitigation-mi` | PROHIBITED | abandonment-and-mitigation | § 554.633(1)(i); § 600.5714(1)(a) |
| `edu-landlord-lien-mi` | PROHIBITED | landlord-lien | § 554.633(1)(h); § 600.2918(2)(b); Const 1963, art. X, § 3; CONFIRMED ABSENT (MI batteries 43 and 96) |
| `edu-municipal-water-lien-mi` | RECOMMENDED | municipal-utility-lien | §§ 123.161-123.167; § 141.121(3) |
| `edu-condominium-leasing-mi` | REQUIRED | hoa | § 559.212(1); § 559.165; §§ 559.301-559.315 |
| `edu-condo-conversion-mi` | REQUIRED | conversion-notice | § 559.204(1); § 559.241(2); § 8.3v |
| `edu-nuisance-mi` | RECOMMENDED | nuisance | §§ 600.3801(1); §§ 600.3801 |
| `edu-cannabis-mi` | RECOMMENDED | cannabis | § 333.27954(1)(e); § 333.26427(c)(3); § 333.27954(4) |
| `edu-smoke-alarms-mi` | REQUIRED | alarm-duties | § 125.482a(1); §§ 125.1504d, 125.1504f; § 125.1504c |
| `edu-lead-hazard-mi` | REQUIRED | lead-based-paint | § 333.5475a(1) |
| `edu-meth-mi` | REQUIRED | meth-disclosure | § 125.485a(1); § 445.903(1)(s); CONFIRMED ABSENT (MI battery 20) |
| `edu-stigmatized-property-mi` | RECOMMENDED | stigmatized-property | § 339.2518(a) |
| `edu-no-sex-offender-residency-mi` | RECOMMENDED | sex-offender-occupancy | § 771.2a; CONFIRMED ABSENT (MI batteries 37 and 116) |
| `edu-statute-of-frauds-mi` | RECOMMENDED | statute-of-frauds-lease-term | §§ 566.106, 566.108 |
| `edu-electronic-records-mi` | RECOMMENDED | electronic-signatures | §§ 450.833, 450.835(1); § 600.5718(1)(d); § 450.833(2) |
| `edu-consumer-protection-mi` | RECOMMENDED | consumer-protection-act | §§ 445.902(g), 445.903(1)(n); § 554.633(1)(m); § 445.904(1)(a) |
| `edu-tenant-screening-mi` | RECOMMENDED | tenant-screening | § 445.903(1)(hh)(iv); §§ 554.601c(1)(f), 37.2502(3)(f); § 37.2502(1)(f); CONFIRMED ABSENT (MI battery 90) |
| `edu-dishonored-check-mi` | RECOMMENDED | returned-payments | § 600.2952(1); § 750.131; § 554.633(1)(g) |
| `edu-legal-interest-mi` | RECOMMENDED | unpaid-damages-interest | § 438.31; § 600.6013(7); § 438.31c |
| `edu-foreign-ownership-mi` | RECOMMENDED | foreign-ownership | Const 1963, art. X, § 6; 2026 Mich. Pub. Acts 32; §§ 125.853, 125.855, 125.857, 125.859 |
| `edu-scope-mi` | RECOMMENDED | scope | § 554.632(a); § 554.601(a); § 554.640 |
| `edu-statutory-forms-mi` | RECOMMENDED | statutory-forms | §§ 554.634(2), 554.603, 554.609(4), 554.608(4), 554.601b(1); MCR 4.201(A) |
| `edu-sale-assignment-of-rents-mi` | RECOMMENDED | sale-or-management-change | §§ 554.1059(1); § 554.614; § 554.1059(3) |
| `edu-firearms-mi` | RECOMMENDED | firearms | Const 1963, art. I, § 6; CONFIRMED ABSENT (MI battery 34) |
| `edu-towing-mi` | RECOMMENDED | towing | § 257.252a(10); § 600.2918(2)(b) |
| `edu-rent-increases-mi` | RECOMMENDED | rent-increase-notice | § 554.633(1)(l)(iii); § 554.134(1); § 123.411(2); CONFIRMED ABSENT (MI battery 6) |
| `edu-no-eviction-sealing-mi` | RECOMMENDED | eviction-record-sealing | MCR 8.119; CONFIRMED ABSENT (MI batteries 38 and 94) |
| `edu-no-lease-copy-rule-mi` | RECOMMENDED | lease-copy | CONFIRMED ABSENT (MI battery 66) |
| `edu-no-application-fee-rule-mi` | RECOMMENDED | application-fees | CONFIRMED ABSENT (MI batteries 9 and 14) |
| `edu-no-rent-receipt-rule-mi` | RECOMMENDED | rent-receipts | CONFIRMED ABSENT (MI battery 65) |
| `edu-no-mold-disclosure-mi` | RECOMMENDED | mold-disclosure | CONFIRMED ABSENT (MI battery 18) |
| `edu-no-radon-disclosure-mi` | RECOMMENDED | radon-disclosure | § 565.957; CONFIRMED ABSENT (MI battery 17) |
| `edu-no-bed-bug-rule-mi` | RECOMMENDED | bed-bug-disclosure | § 125.474; CONFIRMED ABSENT (MI battery 19) |
| `edu-no-flood-disclosure-mi` | RECOMMENDED | flood-disclosure | CONFIRMED ABSENT (MI battery 21) |
| `edu-no-ev-charging-rule-mi` | RECOMMENDED | ev-charging | CONFIRMED ABSENT (MI battery 33) |
| `edu-no-servicemember-statute-mi` | RECOMMENDED | servicemember-rights | CONFIRMED ABSENT (MI batteries 28, 47, 71 and 98) |
| `edu-no-foreclosure-tenant-rule-mi` | RECOMMENDED | foreclosure | CONFIRMED ABSENT (MI batteries 39 and 95) |
| `edu-no-display-rights-rule-mi` | RECOMMENDED | tenant-display-rights | § 559.156a; CONFIRMED ABSENT (MI battery 35) |
| `edu-no-emergency-assistance-rule-mi` | RECOMMENDED | emergency-assistance-right | § 600.5714(1)(e)(i); CONFIRMED ABSENT (MI battery 99) |
| `edu-no-fee-transparency-rule-mi` | RECOMMENDED | fee-transparency | § 554.633(1)(o); 2026 Mich. Pub. Acts 103; CONFIRMED ABSENT (MI battery 85) |
| `edu-no-algorithmic-rent-rule-mi` | RECOMMENDED | algorithmic-rent-setting | CONFIRMED ABSENT (MI battery 84) |
| `edu-no-quiet-possession-statute-mi` | RECOMMENDED | quiet-possession | §§ 600.2918, 554.139; CONFIRMED ABSENT (MI battery 93) |
| `edu-no-submetering-rule-mi` | RECOMMENDED | utility-submetering-disclosure | CONFIRMED ABSENT (MI battery 32) |
| `edu-acceptance-of-payment-mi` | RECOMMENDED | waiver-by-acceptance | MCR 4.201(K)(4); CONFIRMED ABSENT (MI battery 120) |
| `edu-utility-landlord-account-mi` | RECOMMENDED | utility-landlord-account | § 600.2918(2) |
| `edu-no-immigration-rule-mi` | RECOMMENDED | immigration-status | § 37.2502(1); Const 1963, art. X, § 6; CONFIRMED ABSENT (MI battery 25) |

## 4. Layout and placement (rule 40)

**Code-wide typography search (batteries 128-130):** 'bold', 'boldface', 'underlined', capitals, point type, type size, 'letters not smaller than', font, 'conspicuous', 'prominent place', 'separate document/writing/form', 'substantially the following form', 'substantially as follows', 'in the following form' and initialing, each within a tenancy context filter; every pattern tested against a real section and synthetic positives (all passed). These batteries ran after the first drafting pass, not before it (rule 51); the drafted rows were re-screened against the hits and none changed (Proposed SOP change 3). **Residential form rules:** four in the deposit act and the Truth in Renting Act, below; the other hits are rental-purchase (goods), continuing care, construction lien, motor vehicle and licensing rules. **No competing-placement question for Taylor (rule 40):** only § 554.634(2) asks for a 'prominent place' in the lease; the other three set type size inside their own statement or form.

| Rule | Requirement | Where it lives |
|---|---|---|
| § 554.634(2) | Truth in Renting notice 'in a prominent place in type not smaller than the size of 12-point type, or in legible print with letters not smaller than 1/8 inch', substantially in the statutory form | `truth-in-renting-notice-mi` (REQUIRED; verbatim; builder: near the top, 12-point or larger) |
| § 554.634(1) | Name and address at which TIRA notices are given to the lessor | `lessor-notice-address-mi` (REQUIRED) |
| § 554.603 | Deposit notice within 14 days of possession; closing statement 'in 12 point boldface type which is at least 4 points larger than the body of the notice or lease agreement' | `security-deposit-notice-mi` (CONDITIONAL; in the lease; builder formats the statement) |
| § 554.608(4) | Inventory checklist with a prescribed notice 'in 12 point boldface type at the top of the first page' | Separate form (rule 48); `edu-condition-inspection-mi`; builder form generator (§10) |
| § 554.609(4) | Notice of damages statement 'in 12 point boldface type that is at least 4 points larger than the body of the notice' | Post-tenancy notice; `edu-security-deposit-penalty-mi`; builder template (§10) |
| § 554.601a(1) | Senior housing / infirmity termination right must be stated in the rental agreement | `early-termination-senior-infirmity-mi` (REQUIRED) |
| § 554.601b(1) | DV statement in the lease, or posted or delivered notice identical to it | `dv-release-notice-mi` (CONDITIONAL; builder default: in the lease) |
| § 559.212(3) | Condominium lease must state the tenant will comply with the condominium documents | `hoa-compliance-mi` (CONDITIONAL) |
| § 554.633(1)(i) | Acceleration only with the statutory statement in the same provision | `rent-acceleration-mi` (verbatim statement) |
| § 554.633(1)(o) | At least one fee-free payment method where more than one is allowed (from Sept. 21, 2026) | `acceptable-payment-methods-mi` |
| § 600.5718(1)(d), (2) | E-service of a demand only on specific written consent confirmed by e-mail reply | `electronic-service-consent-mi` (initials; builder confirmation step) |
| § 333.26427(c)(3) | Medical-marihuana smoking or cultivation ban must be in the written lease | `smoking-policy-mi`, `cannabis-cultivation-mi` |
| 40 CFR 745.113 | Federal lead warning statement | `lead-based-paint` (tagged) |

**Omission sanctions that forfeit money:**
- Truth in Renting Act: a void term or a missing required statement, uncured within 20 days after the tenant's written notice, exposes the lessor to voiding of the agreement, an injunction and $250 per action ($500 for an expressly prohibited term or a missing statement) or actual damages, plus costs and statutory fees; no prior notice where the lessor knew (§§ 554.635, 554.636).
- Deposit notice not given within 14 days: the landlord may not require a deposit, and the tenant is relieved of the forwarding-address duty (§§ 554.603, 554.611).
- Notice of damages not mailed in 30 days: agreement that no damages are due and immediate full refund (§ 554.610); failure to comply fully: waiver of all damages claimed and double the amount retained (§ 554.613).
- Lockout or other unlawful interference: actual damages or $200 per occurrence, trebled for forcible removal (§ 600.2918(1)-(2)).
- (Tenant side) dishonored check: $25 or $35 processing fee under the statutory demand, then 2 times the check or $100 and $250 costs (§ 600.2952).

## 5. Dormant rows resolved (rule 25)
None: no row in the library, active or dormant, was tagged MI.

## 6. Decisions

### 6.1 Optional clauses found (rule 54)

| Candidate | Law | Verdict |
|---|---|---|
| DV statement in the lease | § 554.601b(1) ('A rental agreement may contain a provision stating'; otherwise post or deliver an identical notice) | **Offered** (`dv-release-notice-mi`, CONDITIONAL; builder default on, since it saves the posting step). Decided by Claude |
| Controlled-substance termination clause | § 554.134(4), § 600.5714(1)(b) (24-hour notice only under 'a clause in the lease' and with a police report) | **Offered** (`criminal-activity-mi`, CONDITIONAL); identification trigger; no-cure carve-out in its own sentence; victim exception kept. Decided by Claude |
| Death contact option | § 600.2918(3)(d)(i) (reentry procedure only if the owner 'informed the tenant in writing of the tenant's option' to name a contact) | **Offered** (`tenant-death-contact-mi`, CONDITIONAL); identification trigger. Decided by Claude |
| Consent to e-service of a demand | § 600.5718(1)(d), (2) | **Offered** (`electronic-service-consent-mi`, CONDITIONAL); consent optional, no refusal to rent. Decided by Claude |
| Water and sewer lien shield | § 123.165 (lien law does not apply where the lease so provides and an affidavit is filed); § 141.121(3) cash deposit | **Offered** (`municipal-water-lien-mi`, CONDITIONAL); statutory sentence verbatim; identification trigger. Decided by Claude |
| Lease authority for inspector entry | § 125.526(8)(a), (9)(a) | **Offered** (`housing-inspection-entry-mi`, CONDITIONAL); identification trigger; Housing Law places only. Decided by Claude |
| Rule changes on 30 days' notice | § 554.633(1)(l)(i)-(ii) | **Offered** (`rules-mi`, CONDITIONAL). Decided by Claude |
| Rent adjustment for listed cost increases | § 554.633(1)(l)(iii) | **Offered** (`rent-cost-adjustment-mi`, CONDITIONAL); calculation statement; Taylor's IN stance that a lawful option is the landlord's call. Decided by Claude |
| Rent acceleration | § 554.633(1)(i) | **Offered** (`rent-acceleration-mi`, CONDITIONAL; fixed term only; statutory statement verbatim); adds little beyond actual damages. Decided by Claude |
| Stipulated holdover charge | No statutory measure (battery 63); § 600.5750 damages after possession | **Offered** (`holdover-rate-mi`, CONDITIONAL); standing GA rule; penalty test cited (Curran; UAW-GM, §1.4). Decided by Claude |
| Landlord casualty termination | § 554.201 (tenant's surrender right unless agreed otherwise in writing); § 554.139(2); § 554.633(1)(a), (e) | **Offered narrowly — Taylor, 2026-10-01** (`casualty-termination-mi`, CONDITIONAL; Term of one year or more; tenant's § 554.201 right preserved) with `edu-casualty-mi` and `edu-casualty-short-term-mi` |
| Tenant-caused damage (always asked) | § 554.201 ('without his fault or neglect'); § 554.139(1)(b) tenant-conduct exception; § 125.530(3), § 125.534(5); § 600.5714(1)(d) | **Offered** (`tenant-caused-damage-mi`, CONDITIONAL) with `edu-tenant-caused-damage-mi`; every abatement or exit provision has its own fault exception, so no statutory right is waived; scope of items (1)-(2) limited to Tenant and Occupants (§13). **Closeout round:** an express liability sentence added (fire damage named; deliberate, negligent or irresponsible acts or omissions of Tenant, Occupants, guests or invitees; ordinary wear and tear excepted) after Labombard and Laurel Woods (§1.4); the saving sentence now reaches items (1)-(2) only. Risk recorded: charging a tenant for a guest's negligent damage in a lease under 1 year rests on Laurel Woods, which did not consider § 554.139(2). Decided by Claude (rule 76) |
| Repair covenant modification | § 554.139(2) (lease with a current term of at least 1 year) | **Offered narrowly** (`tenant-repair-agreement-mi`, CONDITIONAL; named items only; fitness and health-and-safety duties kept) with `edu-habitability-modifiable-mi`. Decided by Claude |
| Marihuana cultivation ban | § 333.27954(4); § 333.26427(c)(3) | **Offered** (`cannabis-cultivation-mi`, CONDITIONAL); possession and non-smoking use cannot be barred (`smoking-policy-mi`, `edu-cannabis-mi`). Decided by Claude |
| Displacing the tenant's casualty surrender right | § 554.201 ('no express agreement to the contrary has been made in writing') | **Not offered:** a landlord-only waiver of the tenant's exit after a no-fault casualty risks § 554.633(1)(a) and was not Taylor's choice; lawful option recorded in `edu-casualty-mi` (rule 54) |
| Mutual insured-casualty waiver | § 554.633(1)(e) carve-out (release for insured fire or casualty with subrogation waived) | **Not offered:** needs both parties' policies to permit it; recorded in `edu-exculpation-mi` (rule 54). Decided by Claude |
| Contract interest on unpaid amounts | § 438.31 (5% legal, up to 7% by written agreement) | **Not offered:** adds little to late fees and judgment interest; recorded in `edu-legal-interest-mi` (rule 54). Decided by Claude |
| Waiver of execution exemptions or homestead | No statute authorizes one (battery 55); Const 1963, art. X, § 3; § 600.6023 | **Not offered** (`edu-landlord-lien-mi`) |
| Jury waiver | § 554.633(1)(f) | **Barred** (`edu-truth-in-renting-mi`) |
| Confession of judgment | § 554.633(1)(d) | **Barred** |
| Security interest or landlord's lien | § 554.633(1)(h); § 600.2918(2)(b) | **Barred** (`edu-landlord-lien-mi`) |
| Prevailing-party fees or collection costs | § 554.633(1)(g) | **Barred** beyond statutory costs (`edu-attorney-fees-mi`; `default-by-tenant-mi`) |
| Shortened or waived notices in court | § 554.633(1)(f), (j) | **Barred** (`edu-termination-notice-mi`) |
| Power of attorney; fee on every payment method | § 554.633(1)(n), (o) | **Barred** |

### 6.2 Questions asked of Taylor (rule 76)
Two questions in the chat on 2026-10-01, each opened with a plain sentence and an example, with a recommendation and unread case law labelled (as asked; the closeout round's case law on both is in §1.4 and changed neither decision):
1. **Snow removal.** Michigan's repair covenants cover the premises 'and all common areas' and may be modified only in a lease of a year or more (§ 554.139(1)-(2)); the shared `snow-removal` chore clause could be read as shifting part of that duty in a shorter lease (case law unread). Recommended: an MI variant limited to areas serving only the tenant's unit. **Taylor asked to see the clause, then what it adds, then the shared clause; then decided:** 'Have MI use the shared clause, not other action (no education row). However, I do think we edit the shared clause. I think it's too descriptive. Flag for Claude Code to discuss please.' Result: `snow-removal` tagged MI as written, no education row; the library-wide edit is flagged in §10 for Claude Code, not made here. `landscaping-irrigation` tagged on the same reasoning.
2. **Landlord casualty termination.** Michigan gives only the tenant a casualty exit (§ 554.201), and a lease may not alter the tenant's remedies for unfit premises (§ 554.633(1)(a)); a landlord termination clause is lawful-looking but untested (case law unread). Options: a narrow clause (recommended), the clause as drafted, or education only. **Taylor: option 1, optional and never a default, with changes:** apply only to a lease with a current term of at least one year, stated in the clause, with an education row for shorter tenancies; expressly preserve the tenant's § 554.201 right; rent stops from the date the home became unfit; termination does not release a tenant whose wilful or irresponsible conduct caused the damage; keep the trigger (destroyed, or not repairable within [number] days) and the tenant's claim for earlier failure to repair; record in the notes that § 554.633(1)(a) case law was not read and that the § 554.633(1)(e) casualty-insurance carve-out shows the Legislature expected leases to address casualty. Built as `casualty-termination-mi` and `edu-casualty-short-term-mi`; the § 554.633(1)(e) point is recorded as Taylor's reading of the text. **Taylor also said: 'This is a legal call under SOP rule 76, so make it yourself next time.'** Later legal and drafting calls in this pass (the independent-check fixes, the parking and occupancy rows) were made by Claude without asking (Proposed SOP change 6).

### 6.3 Other drafting decisions made by Claude (recorded, not asked)
- **Prescribed text is verbatim even where it says 'MCL':** `dv-release-notice-mi` keeps the statute's own 'MCL 554.601b' (rule 59 over the kickoff's citation rule); `municipal-water-lien-mi` quotes § 123.165's sentence verbatim except that 'this section' becomes its citation, with a separate sentence making Landlord the lessor.
- **The entry clause follows the stricter Housing Law rule everywhere** (request and obtain permission except in emergencies, § 125.526(11)), so one clause is lawful in every Michigan place (rule 32); no municipality list was built.
- **The deposit-return clause** runs both statutory clocks from the end of occupancy (4 days for the forwarding address, 30 days for the notice of damages) and offers the electronic refund 2026 Mich. Pub. Acts 102 added.
- **A refundable pet deposit is part of the security deposit and counts toward the 1 1/2-month cap** (§ 554.601(d), § 554.602); pet rent and nonrefundable fees are not deposits.
- **Mid-term change clauses are held to § 554.633(1)(l):** `acceptable-payment-methods-mi`, `assigned-parking-space-mi` and `rules-mi` allow change only with written consent or the statutory 30-day routes; `returned-payments-mi`'s certified-funds requirement is a contingency agreed at signing, and the payment-method clause defers to it expressly.
- **Towing is limited to vehicles there without consent** (`parking-vehicle-rules-mi`, after the independent check): § 257.252a(10) covers only those, and removing a tenant's vehicle without a court order is unlawful interference (§ 600.2918(2)(b)).
- **Occupancy:** a new education row on the Housing Law's air-space rule, found by the scenario screen (`edu-occupancy-standard-mi`); `permitted-occupants` tagged as written.
- **Variables:** `{{holdover_daily_rate}}` and `{{landlord_notice_address}}` reused (both already in the library, neither on the kickoff list); no new variable.
- **Constitution citations** are written `Const 1963, art. X, § 3`; the kickoff defines no format for them (§10).
- **Closeout round:** cases cited in Michigan style, federal law and administrative rules in the forms in §1.1 (§10); 'no published case was found' used only for questions actually searched (§1.4); the Eli Lilly conclusion for leases labelled as Claude's reading; `criminal-activity-mi`'s victim carve-out now covers threatened victims (24 C.F.R. § 5.2005(b)(2)); `edu-utility-landlord-account-mi` added for the Public Service Commission's landlord-account shutoff rules.

## 7. Open items (none blocking)
Closeout round (Taylor, 2026-10-01: 'close the open items'):

| Item | Status |
|---|---|
| Case law | **Closed** for the questions the rows raise: read and applied, or searched and recorded as not found (§1.4). Boundary: CourtListener and courts.michigan.gov searches; unpublished opinions not relied on; three questions not searched and three reporter volumes not printed in the saved texts (§1.4). |
| Corpus index check | **Closed (2026-10-02):** every chapter compared with the site's machine-readable section index; the corpus holds every section number apart from three labelling differences, all repealed or present under another key (§1.3). |
| Currency statement | **Closed:** the site banner 'Michigan Compiled Laws Complete Through PA 103 of 2026' (§1.2). |
| Statutes and court rules beyond context | **Closed:** Housing Law read whole (73 sections, including receivership, § 125.535, and dangerous buildings, §§ 125.538-125.541c); § 125.482; § 559.204b; §§ 554.1059-554.1060; § 600.6013; §§ 567.238, 567.240, 567.255; § 438.31c; MCR 3.106; § 570.1107 (battery 133); homeowner associations outside the Condominium Act (battery 132: no leasing statute); § 559.241(2)'s city of more than 1 million (§ 8.3v uses the latest decennial census; Detroit 639,111 in 2020, so none). § 600.5775 read (out of scope); the Mobile Home Commission Act not read (out of scope). |
| Regulated-conduct exemption | **Closed:** Attorney General v Eli Lilly & Co (2026) (§1.4; `edu-consumer-protection-mi`). |
| Administrative rules and forms | **Closed** for smoke and carbon monoxide alarms (R 408.30546, R 408.30520; current under the 2021 IRC rule set), utility shutoff and submetering (Public Service Commission rules; new row `edu-utility-landlord-account-mi`) and SCAO forms (§1.1). **Not read:** gas technical standards; drinking water supply rules on lead service lines (batteries 134-135 found no statute); other agencies' rules. |
| Federal | **Closed** for the provisions the rows cite (§1.4). **Not read:** the Fair Housing Act's exemptions (42 U.S.C. § 3603(b)); HUD criminal-records guidance. |
| Local ordinances | **Flagged, not resolved** (rule 3). Taylor was told on 2026-10-01 that they stay flagged unless he sets rule 3 aside for Michigan. |
| Place-based facts | Unchanged: data, not law (§6.3). |

## 8. Integrity checks on the delta
Run by script (`work/build.py`, `work/check.py`, `work/citescreen.py`) on the final delta; output summarised:
- header identical to the master: True | 17 columns | 159 records + header, every line CRLF, bare LF 0
- duplicate ids: none | new ids all end '-mi' and collide with nothing in the master
- tagged rows with any change other than `states`, `notes` (appended) and `last_checked`: none
- other states' active counts after merge: unchanged | merged 2,377 rows, 2,254 active | MI active 159 (LC 75, EDU 84)
- blank or non-VERIFIED status: none | rule types all valid | LC missing basis: none | EDU with basis: none | new notes start 'MI: ': all | dates 2026-10-01
- topic keys: all in the reference (no new key) | groups: all existing names
- supersedes: `hoa-compliance`, `security-deposit-use`, `security-deposit-return`, `default-by-tenant`, `landlords-access`, `smoking-policy`, `pet-policy`, `acceptable-payment-methods`, `assigned-parking-space`, `parking-vehicle-rules`, `returned-payments` (all exist)
- generic clauses neither tagged nor superseded: the eight deliberate ones in §2.2 (`ev-charging-*-co` ×2, `default-by-tenant-ks-ne`, `extended-absence-notice-ks`, `late-fee-ne`, `possession-delay-ca`, `surrender-end-of-term-mn-nd`, `acceptable-payment-methods-nj`)
- variables used: `security_deposit`, `pet_deposit`, `pet_rent_amount`, `landlord_name` (builder), `holdover_daily_rate`, `landlord_notice_address` (already in the library; not on the kickoff list) | new: none | brackets next to variables: none
- **Citation screen:** all 137 Michigan section numbers cited in `bodyText` and MI notes exist in the corpus; bare '§' without the prefix: 0 (the screen skips '§' after 'U.S.C.' or 'C.F.R.', added in the closeout round); 'MCL' only inside the two verbatim quotations (kickoff vs SOP, header); session laws written '2026 Mich. Pub. Acts 103'
- section-name pointers in MI clauses all resolve, to an MI row's title ('Returned Payments', 'Holdover', 'Handling of Property Left Behind') or to an MI group ('Access & Entry', 'Security Deposit')
- every 'MI log §N' pointer in the notes matches this log (§1, §1.2, §1.3, §4, §6.1, §6.2, §6.3, §7, §10, §13, §15, §16, §17, §18, §19)

## 9. Propagation notes (rule 62)
None. No shared row's text, rule type, content type or basis changed; every change to an existing row is the `MI` tag, an appended `MI:` note and `last_checked` (programmatic check, §8). Taylor's requested edit to the shared `snow-removal` clause was **not** made here; it is flagged for Claude Code (§10).

## 10. Findings for other states or the product (flagged, not fixed)
- **Taylor's request (2026-10-01): edit the shared `snow-removal` clause, which he finds 'too descriptive'.** Claude Code to discuss with Taylor; any edit is a shared edit under rule 62 across every tagged state.
- **New `{{variables}}`: none.** `holdover-rate-mi` reuses `{{holdover_daily_rate}}` and `lessor-notice-address-mi` and `security-deposit-notice-mi` reuse `{{landlord_notice_address}}` (from `landlord-address-disclosure-fl`); confirm the builder fills both, since neither is on the kickoff's list.
- **Builder formatting:** `truth-in-renting-notice-mi` in a prominent place near the top, 12-point or larger (§ 554.634(2)); the closing statement of `security-deposit-notice-mi` in 12-point boldface at least 4 points larger than the lease body (§ 554.603); a notice-of-damages template with its 12-point boldface statement (§ 554.609(4)); an inventory checklist generator with the § 554.608(4) heading (two blank copies at move-in).
- **Builder rules:** enforce the 1 1/2-month deposit cap across the security deposit, any refundable pet deposit and any required prepaid rent other than the first full period (§§ 554.601(d), 554.602); show `tenant-repair-agreement-mi` and `casualty-termination-mi` only for a fixed Term of at least one year and `rent-acceleration-mi` only for a fixed Term; `electronic-service-consent-mi` needs a post-signing e-mail confirmation and reply step (§ 600.5718(1)(d)); `acceptable-payment-methods-mi` needs a required 'fee-free method' field; `dv-release-notice-mi` default on (otherwise the landlord must post or deliver an identical notice); `security-deposit-notice-mi` whenever a deposit is taken.
- **Stale cross-reference (rule 77):** § 554.611 points the tenant to 'the address given under section 4', but the address is given under section 3 (§ 554.603); recorded in `security-deposit-notice-mi`.
- **Shared clauses other states may want to vet (rule 62, not edited):** the base `parking-vehicle-rules` tows tenants' own vehicles for 'expired registration' or being 'inoperable'; any state with a lockout or tenant-property statute like § 600.2918(2)(b) may need what MI did. `default-by-tenant-ks-ne`'s 'reasonable costs and expenses' meets § 554.633(1)(g) here, as OK flagged against URLTA.
- **Constitution citation format:** no kickoff format exists; MI rows use `Const 1963, art. I, § 6`. Claude Code may want a library-wide convention.
- **Case, federal and administrative-rule citation formats (closeout round):** no kickoff format exists; MI rows use Michigan style for cases (`Curran v Williams, 352 Mich 278, 282 (1958)`; `___ Mich ___ (2026) (Docket No. 165961)` until the official cite issues), `42 U.S.C. § 3607(b)(1)`, `24 C.F.R. § 100.204` and `Mich. Admin. Code R 460.138(1)(e)`. A library-wide convention would help; the 2026 cites will need their Mich reports page later.
- **Shared `assistance-animal-accommodation` (all tagged states):** HUD withdrew its 2013 and 2020 assistance-animal notices (effective Sept. 17, 2025) and, from May 22, 2026, FHEO brings Fair Housing Act charges only for animals trained to provide disability-related assistance. The shared clause, which accommodates any assistance animal a tenant needs, gives no less than the law requires and stays lawful; whether to narrow it is a product and rule 62 question, and state disability laws (Michigan's included) are unchanged.
- **Snow-removal discussion (for Claude Code with Taylor):** Allison, Benton, Hadden and Bowerman (§1.4) make the landlord's fitness covenant reach ice on common sidewalks and stairways; the shared clause does not say that the landlord's own common-area duty is unchanged, which bears on the edit Taylor asked for.
- **Local ordinances:** Ann Arbor's required lease clauses and a 2026 fee-transparency ordinance were seen only in secondary sources; the RPOA lease quotes Grand Rapids' life-safety ordinance (§§ 9.831-9.845); Detroit, Lansing and others run rental registration and inspection. None resolved (rule 3).
- **Real-lease drift (RPOA 2024, §15):** a 'deemed waived' checklist rule (¶ 21), a total marihuana ban including possession and non-smoking use (¶ 52, against § 333.27954(4)), taxable costs and attorney fees (¶ 57, against § 554.633(1)(g)), a broad indemnity (¶¶ 17, 26, § 554.633(1)(e) risk), rules that bind once 'published by Landlord' (¶ 41, beyond § 554.633(1)(l)), towing of 'unauthorized' vehicles without notice (¶ 25) and removal of stored items on 24 hours' notice (¶ 31) (§ 600.2918(2)(b) risk), disposal of abandoned property 'at their sole discretion' (¶ 51), a 7-day violence notice without the police-notice condition (¶ 56, § 600.5714(1)(e)), a 'one (1) day' drug notice (¶ 38; the statute says 24 hours), and payment application to the security deposit first (¶ 11). Leads about that form, not about the library.
- **`security-deposit-return`** still has a blank `states` field (the intentional parent); unchanged.

## 11. Deliverables
- `lease-clauses-MI-delta.csv`: 159 rows (45 tagged, 114 new), 17 columns, CRLF.
- `lease-clause-decision-log-MI.md`: this log.
- Working sources (not delivered; kept in the session): `sources/` (corpus, relied-on sections, court rules, acts and lists, the RPOA lease, registry), `batteries/` (135 batteries and run log), `sources/closeout/` (cases, federal law, administrative rules, forms, census notes), `work/` (row source, tag screen, build and check scripts, Taylor's decisions, the log generators).

## 12. Kickoff leads — what each turned out to be
1. **Truth in Renting Act (§§ 554.631-554.641).** Read whole. Fifteen void terms (§ 554.633(1)(a)-(o), (o) added by 2026 Mich. Pub. Acts 103), the statute-or-Supreme-Court bar (2), two required statements (§ 554.634), cure and remedies (§§ 554.635-554.636), printed-form sellers (§ 554.638), no waiver (§ 554.639). Every MI clause screened against every subdivision (§19). Rows: `edu-truth-in-renting-mi`, `edu-truth-in-renting-statements-mi`, `truth-in-renting-notice-mi`, `lessor-notice-address-mi`, `edu-exculpation-mi`, `edu-attorney-fees-mi`, `edu-mitigation-mi`, `edu-scope-mi`.
2. **Security deposits (§§ 554.601-554.616).** Read whole. Cap 1 1/2 months (§ 554.602); prepaid rent beyond the first period is a deposit; regulated institution or bond (§ 554.604); 14-day notice (§ 554.603); closed list of uses (§ 554.607); inventory checklists (§ 554.608); 30-day notice of damages and the 2026 electronic refund (§ 554.609); tenant's 7-day response, 45-day suit, double damages (§§ 554.610-554.613); sale (§ 554.614); no waiver (§ 554.606). Nine deposit education rows plus the clauses.
3. **§ 554.139.** Covenants of fitness and repair, modifiable only in a lease with a current term of at least 1 year; tenant-conduct exception; liberal construction (`edu-habitability-mi`, `edu-habitability-modifiable-mi`, `tenant-repair-agreement-mi`).
4. **§§ 554.601a and 554.601b.** The senior-housing/infirmity termination right must be in the lease (`early-termination-senior-infirmity-mi`, REQUIRED); the DV release may be stated in the lease or posted (`dv-release-notice-mi`, `edu-dv-release-mi`, `edu-dv-confidentiality-mi`).
5. **Summary proceedings (RJA ch. 57) and § 600.2918.** Read whole with MCR 4.201: 7-day nonpayment demand, 24-hour drug notice with a lease clause and police report, 7-day threatened-injury notice, writ timing, costs, escrow orders, rental-assistance stay; lockout remedies and the abandonment and death procedures (`edu-nonpayment-notice-mi`, `edu-eviction-process-mi`, `edu-self-help-eviction-mi`, `edu-expedited-criminal-eviction-mi`, `edu-tenant-death-mi`, `abandoned-property-mi`).
6. **§ 123.411.** Rent control preempted; local registration and inspection survive (`edu-rent-control-mi`). Batteries 126-127 found no wider preemption except condominium conversion (§ 559.241(2)).
7. **Fair housing.** Elliott-Larsen (religion, race, color, national origin, age, sex, sexual orientation, gender identity or expression, familial status, marital status) and the Persons with Disabilities Civil Rights Act; source of income for landlords of 5 or more units (§ 37.2502(3), § 554.601c-d) (`edu-fair-housing-mi`, `edu-source-of-income-mi`, `edu-assistance-animals-mi`).
8. **Fees.** No late-fee or application-fee cap; payment-method fee rule (§ 554.633(1)(o)); dishonored checks (§ 600.2952); no fee-shifting beyond statute (`late-fee`, `edu-no-application-fee-rule-mi`, `acceptable-payment-methods-mi`, `returned-payments-mi`, `edu-dishonored-check-mi`, `edu-attorney-fees-mi`).
9. **2025-2026 public acts.** 2026 Mich. Pub. Acts 102 and 103 (both effective Sept. 21, 2026) and 32 (effective July 21, 2026) are the only acts touching the rows; all compiled and read as enrolled (§1.2).

## 13. Independent check
A separate agent that had not seen the drafting checked every new MI row (bodyText and notes) and every appended MI note on the tagged rows against the saved sources only (the corpus, MCR 4.201, the batteries, the RPOA lease, Taylor's decisions), on 2026-10-01.
- **Round 1 (all fixed):** 9 errors (§ 600.5714(1)(e)'s police-notice condition and victim and federal-housing exceptions missing in `default-by-tenant-mi` and `edu-termination-notice-mi`; the § 141.121(3) municipal cash deposit is mandatory, not 'may'; the 10-day date in `edu-eviction-process-mi` is the first appearance, with trial adjourned 7-14 days (MCR 4.201(K)); § 554.1060's form is sufficient but not required; § 559.212(4) 'shall notify'; § 600.5714(1)(d)'s restore-or-repair alternative; 'excluding weekends and holidays' in the dishonored-check fee; 'venous blood' and the good-faith condition in the lead rows; the $1,000 household-goods exemption); 4 unsupported claims (an assistance-animal fee sentence; 'unless you agree in writing' on prepaid rent; fee recovery 'under the civil rights acts' now cited to §§ 37.2801(3), 37.2802, 37.1606(3); TIRA protects 'a remedy available to the parties'); 3 quotations not verbatim (`rent-acceleration-mi`'s statutory statement, § 123.165's sentence, the § 600.5714(1)(b) and § 554.134(4) quotes); 7 drafting risks (`tenant-caused-damage-mi` limited to Tenant and Occupants with a § 554.201 saving sentence; `assigned-parking-space-mi` consent or law-required change only; the payment-methods vs returned-payments conflict; the threatened-injury conditions in `default-by-tenant-mi`; the base `parking-vehicle-rules` towing sentence, replaced by `parking-vehicle-rules-mi`; the `entire-agreement` note; a cash-bond option in the deposit notice bracket); 4 format points (bare section numbers, a missing '§§', a prefix on § 554.1059 subsections, 'MI §17' pointers) and a note on Constitution citation style. Also applied: the `addendum-precedence` note now treats § 554.601b as optional.
- **Round 2 (re-verification of 30 changed rows; all fixed):** two quotations made verbatim (§ 257.252a(10) 'has remained on private property without the consent of the property owner', in `parking-vehicle-rules-mi` and `edu-towing-mi`) and § 600.2918(2)'s 'whichever is greater'; § 554.1060's sample-form statement attributed to the sample form; § 554.201's 'or neglect', written-agreement condition and 'after surrender' in `edu-casualty-short-term-mi` and `casualty-termination-mi`; Taylor's § 554.633(1)(e) reading labelled as his; the 'read whole' range in `default-by-tenant-mi` corrected to §§ 600.5701-600.5759; a 'Landlord is the lessor' sentence before the § 123.165 quotation; one 'MI log §17' pointer.
- **Round 3 (six rows edited after round 2; all fixed):** `edu-occupancy-standard-mi` (the Housing Law's 1-2 family threshold; the 500-cubic-foot rule belongs to class b dwellings; the statewide absence now rests on whole-code battery 131; battery history corrected; the familial-status sentence softened to what the statute supports); `edu-rent-control-mi` (battery 126's failed positive recorded; § 125.2307 named rather than called unrelated); `edu-eviction-process-mi` (escrow-order jury waiver and 14-day trial stated as MCR 4.201(I)(2)(a)(iii) says); `application-of-payments` (sales- and use-tax). `edu-condo-conversion-mi` and `lessor-notice-address-mi` clean.
- **Round 4 (closeout round, 2026-10-02; the 42 rows changed; all fixed):** 2 errors (the Homeowners' Energy Policy Act covers energy-saving improvements and solar, §§ 559.301-559.317; 'no statute or regulator authorizes lease terms' replaced by the § 445.904(1)(a) regulatory-board test); 5 unsupported points (the Eli Lilly conclusion in the body now labelled; the Detroit census figure saved; a DC 100d remark removed; the HUD memo's effect stated as Claude's reading; reporter volumes, see §1.4); 12 dropped qualifiers (the HUD memo covers Fair Housing Act complaints only; § 600.2918(2)(f)'s essential service and tenant-procured service; R 460.138(1)(e)'s 'proper notice'; only two commission rule sets read; the PTFA lease 'entered into before the notice of foreclosure'; 50 U.S.C. § 3951's court-order rule, primary residence and rent cap; § 559.204b's 1980-frozen senior definition; § 554.1059(3)(b)'s negative phrasing; Park Forest's 'has not received notice that summary proceedings have been commenced'; 24 C.F.R. § 5.2005(b)(2)'s threatened victims and persons under the tenant's control, now also in `criminal-activity-mi`'s clause; M&D and Hord applied by analogy; § 567.238(5)'s time-bar condition, § 125.529(1)'s exception and § 438.31c(8)); `tenant-caused-damage-mi`'s new sentence narrowed to deliberate, negligent or irresponsible conduct with wear and tear excepted, and 'invitees' distinguished from the enforced term.
- **Round 5 (the 18 rows edited for round 4):** 4 points, applied as suggested and not re-checked: the next-largest city now sourced (Grand Rapids, about 199,000) and § 559.204b(1)(a)-(c) cited; the fault-standard note in `tenant-caused-damage-mi` reworded; § 554.1059(3)(b) called an exception; `edu-tenant-caused-damage-mi` describes the narrower clause term.
After each round the delta was rebuilt and every §8 check re-run with the same results.


## 14. Statute walk (gap-discovery source 1)
The core acts were read whole from the saved corpus, and each act's full section index was diffed against every citation in the MI rows and notes (programmatic, ranges expanded; `work/cited_sections.txt`, 128 sections):
- **Truth in Renting Act, §§ 554.631-554.641:** 11 of 11 sections cited.
- **Security deposit act, §§ 554.601-554.616 (with §§ 554.601a-554.601d):** 20 of 20 cited.
- **RS 1846 ch. 66 tenancy sections, §§ 554.131-554.139 and § 554.201:** 4 of 10 cited. Not cited: § 554.132 (rent recoverable in debt or assumpsit, the lease usable as evidence) and § 554.133 (other rent remedies preserved), the landlord's ordinary rent action, needing no lease term; §§ 554.135-554.138 (aliens' title to land, prior deeds, remaindermen's suits, cotenant actions): title matters, no landlord duty or lease term. One level down, § 554.134 and § 554.139 were read subdivision by subdivision for the rows that rely on them.
- **RJA ch. 57, §§ 600.5701-600.5759:** 14 of 24 cited. Not cited: § 600.5706 (venue) and § 600.5708 (court rules govern procedure), procedure only; §§ 600.5726-600.5730 (land contract forfeiture), out of scope; § 600.5732 (court powers), § 600.5747 (defendant's costs), § 600.5753 (appeal), §§ 600.5756-600.5757 (fees): procedure, no landlord duty beyond `edu-eviction-process-mi`. § 600.2918 read whole (subsections (1)-(9)); the parts a landlord meets are in `edu-self-help-eviction-mi`, `abandoned-property-mi`, `edu-tenant-death-mi` and `edu-unauthorized-occupant-mi`.
- **Housing Law of Michigan, §§ 125.401-125.543 (73 sections, 8 repealed):** first pass: its section index was screened and the sections a row relies on were read whole (scope § 125.401, classes § 125.402, repair and cleanliness §§ 125.471, 125.474, occupancy § 125.483, registry § 125.525, inspection and entry § 125.526, certificates and escrow §§ 125.529-125.531, occupant-caused violations § 125.534). The uncited sections are construction and sanitation standards for multiple dwellings (§§ 125.402a-125.497), administration, receivership (§ 125.535) and dangerous buildings (§§ 125.538-125.543): local enforcement tools, not lease terms. **Closeout round: read whole;** added to rows: the certificate of compliance (§ 125.529(1)), the designated responsible person (§ 125.482) and garbage receptacles (§ 125.478) (`edu-housing-law-mi`); receivership (§ 125.535) recorded in §18.2.
- **Other chapters relied on** (civil rights, marihuana, condominium, municipal water liens, dishonored checks, execution exemptions, unclaimed property, consumer protection, electronic transactions, statute of frauds, towing, investor purchase ban) were read section by section as the rows required, each found through a battery or a cross-reference (§17).

## 15. Real-lease comparison (gap-discovery source 2)
**Lease:** Rental Property Owners Association (RPOA) of Kent County 'Lease Agreement', © January 2024, 8 pages, fillable PDF at https://cdn.ymaws.com/www.rpoaonline.org/resource/resmgr/forms/lease_agreement_2.28.24-fill.pdf (PDF modified Feb. 28, 2024), sha256 9b6fda2c…58c; text saved (`sources/rpoa-lease-2024-01.txt`). **Why it qualifies:** a Michigan landlord association's own form, published free, citing Michigan statutes throughout and carrying the Truth in Renting notice and the § 554.601a and § 554.601b paragraphs; not a relabelled multi-state template. **Why it is weaker:** it is a Grand Rapids-area form and quotes Grand Rapids' life-safety ordinance (¶ 40), so parts are local, and it predates 2026 Mich. Pub. Acts 102 and 103. A second lead, the Livonia Housing Commission public housing lease (2020), was not used. Not reproduced here; mapped as a lead (rule 33).

### 15.1 Provision map
| RPOA provision | Library answer for MI | Note |
|---|---|---|
| Truth in Renting notice at the top | `truth-in-renting-notice-mi` | Same statutory text |
| ¶¶ 1-4 parties, premises; ¶ 5 occupants | `permitted-occupants`, `edu-occupancy-standard-mi` | — |
| ¶ 6 term: periodic 'notice equivalent to the term' or fixed | `edu-termination-notice-mi` | Matches § 554.134(1) |
| ¶ 7 rent, proration | `rent-payment`, `due-at-signing` | — |
| ¶ 8 deposit; no use as last month's rent without consent | `security-deposit-use-mi`, `security-deposit-return-mi`, `edu-prepaid-rent-deposit-mi` | No deposit notice in the form itself |
| ¶ 9 late charge; ¶ 10 three late payments a breach | `late-fee`, `default-by-tenant-mi` | No statutory cap |
| ¶ 11 'additional rent'; payments applied to the deposit first | `application-of-payments`, `edu-mitigation-mi` | Applying payments to the deposit is odd; whether charges are 'rent' is case law (§18.2 fees-as-rent) |
| ¶ 12 returned check charge plus bank charges | `returned-payments-mi`, `edu-dishonored-check-mi` | — |
| ¶ 13 DV statement | `dv-release-notice-mi` | Same statutory text |
| ¶ 14 automatic monthly renewal; increase or modify 'for any extended term' on 30 days' notice | `holdover-ca`, `edu-rent-increases-mi` | No auto-renewal statute (§18.2 automatic-renewal); fine for a periodic term |
| ¶ 15 nonrefundable cleaning fee | `edu-security-deposit-cap-mi` | A nonrefundable fee is not a deposit |
| ¶ 16 cost table; water with § 123.165 affidavit language | `utilities-responsibility`, `municipal-water-lien-mi` | Led to the optional water-lien clause |
| ¶ 17 tenant pest duty and indemnity; no liability for pest losses | `tenant-maintenance`, `edu-no-bed-bug-rule-mi`, `edu-exculpation-mi` | Housing Law puts vermin on the owner (§ 125.474); indemnity is a § 554.633(1)(e) risk |
| ¶ 18 excess utility usage | `utilities-paid-by-landlord` | — |
| ¶ 19 lead service line disclosure | `edu-lead-hazard-mi` | No statute found requiring it (batteries 72, 134-135); drinking water supply rules not read (§7) |
| ¶ 20 certified notice before utility shut-off | `utility-service-continuity` | — |
| ¶ 21 checklist in 7 days, unreported defects 'deemed waived' | `edu-condition-inspection-mi`, `existing-condition` | 'Deemed waived' is not in § 554.608 |
| ¶ 22 tenant agrees unit habitable; 48-hour certified letter | `edu-habitability-mi`, `existing-condition` | Inspection does not defeat the covenants (§ 554.139(3)) |
| ¶ 23 locks and keys | `keys` | — |
| ¶ 24 no subletting | `no-sublet-assign` | — |
| ¶ 25 parking; 'remove unauthorized vehicles with or without notice' | `parking-vehicle-rules-mi`, `edu-towing-mi` | § 600.2918(2)(b) risk for tenants' own vehicles |
| ¶ 26 no liability except for duties imposed by law; broad indemnity | `tenants-property-insurance-ks-oh-ca`, `edu-exculpation-mi` | Carve-out tracks § 554.633(1)(e); no published case on such an indemnity found (§1.4) |
| ¶ 27 pets by written consent and animal agreement | `pet-policy-mi`, `assistance-animal-accommodation` | — |
| ¶ 28 tenant maintenance | `tenant-maintenance` | — |
| ¶ 29 municipal and voucher inspections; re-inspection fees | `housing-inspection-entry-mi`, `edu-housing-law-mi` | Led to the inspector-entry clause |
| ¶ 30 common areas; ¶ 31 storage, removal on 24 hours' notice | `common-area-use`, `storage-space-ks-oh-ca` | Removal of stored property: § 600.2918(2)(b) risk |
| ¶ 32 alterations; ¶ 33 items not allowed; ¶ 34 repairs | `no-alterations`, `tenant-maintenance` | — |
| ¶ 35 entry on 24 hours' notice | `landlords-access-mi`, `edu-entry-mi` | Housing Law places need permission, not just notice |
| ¶ 36 garbage, local fines | `tenant-maintenance` | Local ordinances flagged |
| ¶ 37 crime-free policy; ¶ 38 'one (1) day' drug notice | `criminal-activity-mi`, `edu-expedited-criminal-eviction-mi` | Statute: 24 hours, lease clause and police report |
| ¶ 39 parties and disturbances | `no-disturbance` | — |
| ¶ 40 Grand Rapids life-safety ordinance | `edu-smoke-alarms-mi` | Local (rule 3) |
| ¶ 41 rules 'published by Landlord' bind | `rules-mi` | Beyond § 554.633(1)(l) |
| ¶ 42 violations cause for eviction | `default-by-tenant-mi` | — |
| ¶ 43 electronic service consent | `electronic-service-consent-mi` | Led to the e-service clause |
| ¶ 44 lead-based paint | `lead-based-paint` | — |
| ¶¶ 45-49 covenants, binding effect, no waiver, severability, subordination | `severability`, `entire-agreement` | No-waiver and subordination not adopted |
| ¶ 50 senior housing / infirmity termination | `early-termination-senior-infirmity-mi` | Same statutory right |
| ¶ 51 abandoned property disposal 'at their sole discretion' | `abandoned-property-mi` | Broader than § 600.2918(3)(c) |
| ¶ 52 marihuana ban including consumption | `smoking-policy-mi`, `cannabis-cultivation-mi`, `edu-cannabis-mi` | Conflicts with § 333.27954(4) |
| ¶ 53 smoking allowed or not | `smoking-policy-mi` | — |
| ¶ 54 death contact option | `tenant-death-contact-mi` | Led to the clause |
| ¶ 55 emergency contact | §18.2 emergency-contact | No statute |
| ¶ 56 7-day termination for violence | `default-by-tenant-mi`, `edu-termination-notice-mi` | Omits the police-notice condition and victim exception |
| ¶ 57 taxable costs and attorney fees | `edu-attorney-fees-mi` | Beyond § 554.633(1)(g) |
| ¶ 59 entire agreement | `entire-agreement` | — |

### 15.2 What it produced
Four optional clauses (`municipal-water-lien-mi`, `housing-inspection-entry-mi`, `electronic-service-consent-mi`, `tenant-death-contact-mi`) and leads on the drug clause, § 554.601a and § 554.601b, the marihuana conflict, fee-shifting, indemnity, the checklist, the lead service line question and the Grand Rapids ordinance. No change to any shared row; drift recorded in §10.

## 16. Landlord-scenario screen (gap-discovery source 3)
80 everyday situations (79 in the first pass; 1 added in the closeout round from the Public Service Commission rules), application to move-out, sale and foreclosure, run against the MI rows; where no row answered, the statutes were searched and any hit read with the section open.

| # | Scenario | Michigan answer (row) |
|---|---|---|
| 1 | Advertising a unit; can I say 'no kids' or 'adults only'? | No: familial status is protected, ads and application questions included (housing for older persons excepted) (`edu-fair-housing-mi`) |
| 2 | Applicant pays with a housing choice voucher | Landlords of 5 or more units may not refuse or set different terms for lawful source of income; count the voucher toward any income test (`edu-source-of-income-mi`) |
| 3 | Screening on credit, eviction and criminal history | No Michigan screening statute; SSN may be required for a background check; civil rights limits apply (`edu-tenant-screening-mi`) |
| 4 | Charging an application fee | No limit (`edu-no-application-fee-rule-mi`) |
| 5 | Taking a holding deposit before the lease | No statute (battery 87); a returnable sum held for the term counts toward the cap, but whether a pre-lease holding deposit is one is not settled by statute or a published case (§18.2 holding-deposit) (`edu-security-deposit-cap-mi`) |
| 6 | Applicant asks for an emotional support animal | Reasonable accommodation under the disability act; the state misrepresentation crime covers public places only (`edu-assistance-animals-mi`, `assistance-animal-accommodation`) |
| 7 | Applicant lies on the application | Lease breach (`rental-application-accuracy`, `default-by-tenant-mi`) |
| 8 | Renting a room in my own home | Civil rights exemptions for rooms in an owner-occupied single-family home and owner-occupied two-family buildings (`edu-fair-housing-mi`) |
| 9 | How many people can live in a two-bedroom? | No persons-per-bedroom statute; Housing Law air-space minimums where it applies; a limit that excludes families can raise a familial-status claim (found by this screen: batteries 124, 131) (`edu-occupancy-standard-mi`, `permitted-occupants`) |
| 10 | How much deposit can I take? | 1 1/2 months' rent in total (`edu-security-deposit-cap-mi`) |
| 11 | Pet deposit on top of the security deposit | A refundable pet deposit counts toward the 1 1/2-month cap; pet rent and nonrefundable fees do not (`edu-pet-deposit-mi`, `pet-policy-mi`) |
| 12 | Collecting first and last month plus a deposit | Last month's rent is a security deposit and counts toward the cap (`edu-prepaid-rent-deposit-mi`) |
| 13 | Where do I keep the deposit? | Regulated financial institution, or anywhere if a bond is filed with the Secretary of State (`edu-deposit-holding-mi`, `security-deposit-notice-mi`) |
| 14 | Interest on the deposit? | Not required (`edu-no-deposit-interest-mi`) |
| 15 | What notices must the lease contain? | Truth in Renting notice and notice address; deposit notice (or a separate notice within 14 days); senior/infirmity termination right; condominium compliance where applicable; optional DV statement; federal lead (`edu-truth-in-renting-statements-mi`, `truth-in-renting-notice-mi`, `lessor-notice-address-mi`, `security-deposit-notice-mi`, `early-termination-senior-infirmity-mi`, `hoa-compliance-mi`, `dv-release-notice-mi`, `lead-based-paint`) |
| 16 | Move-in checklist | Two blank inventory checklists at the start of every tenancy if a deposit is taken; tenant returns within 7 days; statutory bold heading (`edu-condition-inspection-mi`, `existing-condition`) |
| 17 | Former meth lab in the unit | Vacate order until decontaminated; no disclosure statute; consumer-protection risk for known material facts (`edu-meth-mi`) |
| 18 | Radon, mold or bed bugs | No disclosure statute; Housing Law vermin duty (`edu-no-radon-disclosure-mi`, `edu-no-mold-disclosure-mi`, `edu-no-bed-bug-rule-mi`) |
| 19 | Someone died in the unit | No landlord disclosure statute; licensee immunity only (`edu-stigmatized-property-mi`) |
| 20 | Lead paint in a pre-1978 home | Federal disclosure; Michigan crime for renting to a family with a lead-poisoned child after 90 days' actual knowledge (`lead-based-paint`, `edu-lead-hazard-mi`) |
| 21 | Lease signed electronically | Valid between parties who agreed to transact electronically (`electronic-signatures`, `edu-electronic-records-mi`) |
| 22 | Oral lease for two years | Void unless in writing (more than 1 year) (`edu-statute-of-frauds-mi`) |
| 23 | Unit not ready on the start date | No statute (battery 82); lease clause (`possession-delay`) |
| 24 | Rent is late; how much can I charge? | No cap; an agreed fee must be reasonable in relation to the possible loss (penalty test, §1.4) (`late-fee`) |
| 25 | Rent check bounces | Lease fee; or the statutory $25/$35 demand procedure (`returned-payments-mi`, `edu-dishonored-check-mi`) |
| 26 | Charging a card or portal fee | From Sept 21, 2026 at least one allowed method must be fee-free (`acceptable-payment-methods-mi`, `edu-truth-in-renting-mi`) |
| 27 | Cash rent receipt? | No duty (`edu-no-rent-receipt-rule-mi`) |
| 28 | Partial rent during an eviction | Acceptance does not necessarily stop the case; partial payment of a judgment blocks the order without a hearing (`edu-acceptance-of-payment-mi`) |
| 29 | Raising rent mid-lease | Only with written consent, or on 30 days' notice for listed cost increases if the lease provides (`rent-cost-adjustment-mi`, `edu-rent-increases-mi`) |
| 30 | Raising rent on a month-to-month | No notice statute; end the tenancy with notice or agree a new rent (`edu-rent-increases-mi`, `edu-termination-notice-mi`) |
| 31 | City wants to cap rent | Preempted (`edu-rent-control-mi`) |
| 32 | City requires registration and inspection | Housing Law registry and inspections; local ordinances flagged (`edu-housing-law-mi`, `housing-inspection-entry-mi`) |
| 33 | Changing house rules mid-lease | Consent, or 30 days' notice for law-required or health/safety/peaceful-enjoyment changes (`rules-mi`) |
| 34 | Interest on unpaid damages | 5% legal rate; contract rate up to 7% (`edu-legal-interest-mi`) |
| 35 | Sales tax on rent | None for residential leases (battery 114: lodging taxes only; §18.2 rent-tax) |
| 36 | Entering to make repairs | Housing Law places: request and obtain permission except emergencies; clause gives 24 hours' notice (`landlords-access-mi`, `edu-entry-mi`) |
| 37 | Tenant refuses entry | Tenant may not unreasonably refuse under the clause; no self-help (`landlords-access-mi`, `edu-self-help-eviction-mi`) |
| 38 | Tenant demands repairs | Covenants of fitness and repair (`edu-habitability-mi`, `landlord-maintenance`) |
| 39 | Tenant withholds rent for repairs | Rent excused by the landlord's breach is deducted in a nonpayment case; Housing Law escrow (`edu-tenant-repair-remedies-mi`) |
| 40 | Shifting repairs to the tenant | Only in a lease of a current term of 1 year or more (`tenant-repair-agreement-mi`, `edu-habitability-modifiable-mi`) |
| 41 | Tenant's unpaid city water bill | Lien on the property unless the lease clause and affidavit are used (`municipal-water-lien-mi`, `edu-municipal-water-lien-mi`) |
| 42 | Smoke and CO alarms | Class A multiple dwellings need smoke alarms; pre-1974 dwellings: owner maintains, rental occupant tests and cleans, 30-day repair; construction-code CO rules (`edu-smoke-alarms-mi`) |
| 43 | Tenant wants a ramp or grab bars | Reasonable modification at the tenant's expense (`edu-fair-housing-mi`, `no-alterations`) |
| 44 | Tenant smokes or vapes marijuana | Smoking may be banned; possession and non-smoking use may not; cultivation may be banned (`smoking-policy-mi`, `cannabis-cultivation-mi`, `edu-cannabis-mi`) |
| 45 | Tenant keeps a gun | No statute on lease restrictions (`edu-firearms-mi`) |
| 46 | Guest moves in | Guest limits (`guest-policy`, `guest-policy-day-limit`, `permitted-occupants`) |
| 47 | Tenant lists the unit on Airbnb | Lease bar; no subletting statute (battery 79) (`no-sublet-assign`) |
| 48 | Towing a car from the lot | Only vehicles there without consent; not a tenant's own vehicle without a court order (`parking-vehicle-rules-mi`, `edu-towing-mi`) |
| 49 | Renting a condominium unit | Association notice and lease copy; compliance statement in the lease (`hoa-compliance-mi`, `edu-condominium-leasing-mi`) |
| 50 | Noise complaints | Lease breach (`no-disturbance`) |
| 51 | Drug dealing in the unit | 24-hour notice with a lease clause and police report; nuisance law (`criminal-activity-mi`, `edu-expedited-criminal-eviction-mi`, `edu-nuisance-mi`) |
| 52 | Tenant threatens a neighbor | 7-day notice to quit if the police were notified (`default-by-tenant-mi`, `edu-expedited-criminal-eviction-mi`) |
| 53 | Protected tenant asks for new locks | No Michigan lock-change statute (battery 58); §18.2 dv-lockchange |
| 54 | Protected tenant wants out | Release from rent after certified notice with documentation; optional lease statement or posted notice (`edu-dv-release-mi`, `dv-release-notice-mi`, `edu-dv-confidentiality-mi`) |
| 55 | Tenant deployed | Federal SCRA only (`edu-no-servicemember-statute-mi`) |
| 56 | Tenant moves to senior housing or can't live independently | Statutory 60-day termination after 13 months (`early-termination-senior-infirmity-mi`) |
| 57 | Tenant wants out early for another reason | Early-termination fee option (`early-termination-ks`) |
| 58 | Tenant stops paying | 7-day demand; district court summary proceedings (`edu-nonpayment-notice-mi`, `edu-eviction-process-mi`, `default-by-tenant-mi`) |
| 59 | I hold the utility account and fell behind | Gas and electric utilities may not shut off a tenant for your unpaid bill except in listed cases; 30 days' notice to each unit of a single-metered building of 3 or more households (`edu-utility-landlord-account-mi`) |
| 60 | Can I change the locks or cut utilities? | No: unlawful interference, actual damages or $200 per occurrence (3 times actual damages if the tenant is forcibly put out) (`edu-self-help-eviction-mi`) |
| 61 | Tenant complains to the city, then I end the tenancy | Retaliation defense; presumed if the tenant sought official action within 90 days before filing (`edu-retaliation-mi`) |
| 62 | Ending a month-to-month | 1 month or the rent interval if shorter (`edu-termination-notice-mi`) |
| 63 | Not renewing a fixed lease | No notice; no just cause (`edu-for-cause-eviction-mi`) |
| 64 | Tenant stays after the lease ends | Summary proceedings; damages from the notice; optional daily charge (`holdover-ca`, `holdover-rate-mi`, `edu-holdover-mi`) |
| 65 | Tenant vanished owing rent | Good-faith abandonment after diligent inquiry; mitigation; acceleration only with the statement (`abandoned-property-mi`, `edu-mitigation-mi`, `rent-acceleration-mi`) |
| 66 | Belongings left after moving out | Lockout statute limits; abandonment clause (`abandoned-property-mi`, `surrender-end-of-term-ks-ne`) |
| 67 | Belongings left after judgment | Officer removes them to a public area or the sheriff (`edu-post-eviction-property-mi`) |
| 68 | Squatters in a vacant rental | Reentry without force or summary proceedings (`edu-unauthorized-occupant-mi`) |
| 69 | Sole tenant dies | Statutory reentry procedure if the lease offered a contact option (`tenant-death-contact-mi`, `edu-tenant-death-mi`) |
| 70 | Fire destroys the unit | Tenant may surrender; landlord clause only for terms of 1 year or more (`edu-casualty-mi`, `casualty-termination-mi`, `edu-casualty-short-term-mi`) |
| 71 | Tenant's candle causes the fire | No escape from rent; lost-rent clause with an express fire-damage liability sentence (no tort liability for negligent fire without one) (`tenant-caused-damage-mi`, `edu-tenant-caused-damage-mi`) |
| 72 | Deposit return | 30 days; itemized notice with the statutory statement; tenant's 7-day response; sue within 45 days; full noncompliance waives damages and costs double the amount retained (`security-deposit-return-mi`, `edu-security-deposit-penalty-mi`) |
| 73 | Tenant never cashes the refund | Unclaimed property after 3 years (`edu-deposit-unclaimed-mi`) |
| 74 | Attorney fees after a dispute | Only statutory costs; no prevailing-party clause (`edu-attorney-fees-mi`) |
| 75 | Eviction record sealing | None (`edu-no-eviction-sealing-mi`) |
| 76 | Selling the property with tenants | Deposit stays the seller's liability until transferred and the tenant notified (`edu-deposit-on-sale-mi`) |
| 77 | Lender takes the rents | Assignment-of-rents notice to the tenant (`edu-sale-assignment-of-rents-mi`) |
| 78 | Bank forecloses | No state tenant rule; federal PTFA: lease honored to term end (except a sale to an owner-occupant) and 90 days' notice to a bona fide tenant (`edu-no-foreclosure-tenant-rule-mi`) |
| 79 | Converting to condominiums | 120 days or the lease end; tenant may leave on 60 days' notice (`edu-condo-conversion-mi`) |
| 80 | Investor fund buying single-family homes | 2026 Mich. Pub. Acts 32 purchase ban for large institutional investors (`edu-foreign-ownership-mi`) |

Every scenario has an MI row or a recorded §18.2 status. Scenario 9 produced batteries 122-124 and 131 and the new row `edu-occupancy-standard-mi`; scenarios 35 and 53 rest on recorded absences (batteries 114 and 58).

## 17. Outside-title search and proof of absence (gap-discovery source 4)
The whole Michigan Compiled Laws (241 chapters, 43,930 entries) and the 1963 Constitution were loaded in the built-in browser before the first battery and searched with 135 batteries (`batteries/batteries.jsonl`). **Real findings outside the landlord-tenant chapters (the sections relied on read whole and saved; § 600.6013 in part):** the Elliott-Larsen and Persons with Disabilities civil rights acts (§§ 37.2502-37.2503, 37.1506a, remedies §§ 37.2801-37.2802, 37.1606) and source of income (§ 37.2502(3)); the adult-use and medical marihuana acts (§ 333.27954(4), § 333.26427(c)(3)); lead hazards (§ 333.5475a); the Condominium Act (§§ 559.165, 559.204, 559.212, 559.241); municipal water liens (§§ 123.161-123.167, § 141.121(3)); dishonored checks (§ 600.2952); execution exemptions (§ 600.6023, Const 1963, art. X, § 3); unclaimed property (§§ 567.222-567.223); the Consumer Protection Act (§§ 445.902-445.904); electronic transactions (§ 450.835); the statute of frauds (§§ 566.106, 566.108); private-property towing (§ 257.252a); the 2026 investor purchase ban (§§ 125.853-125.859); legal and judgment interest (§ 438.31, § 600.6013(7)-(8)); licensee immunity for stigmatized property (§ 339.2518); the service-animal misrepresentation crime (§§ 752.61-752.64, public places only); drug nuisances (§§ 600.3801-600.3805); the Housing Law's air-space rule (§ 125.483); and the condominium conversion preemption (§ 559.241(2)). **Constitution:** art. I, § 2 (equal protection, government action), art. I, § 6 (arms; `edu-firearms-mi`), art. X, § 3 (exemptions) and art. X, § 6 (aliens' property; `edu-foreign-ownership-mi`); nothing reaches a private lease term directly (battery 76). **Closeout round (batteries 132-135):** no homeowners' association leasing statute outside the Condominium Act (the Homeowners' Energy Policy Act covers energy-saving improvements and solar); § 570.1107 (a construction lien reaches the interest of a lessee who contracts for an improvement and of an owner who required it); no lead service line statute (134, with the ordinary-word follow-up 135).

**Method:** §1.3. **Batteries** (heading-only = sections whose heading alone matched, excluded from hits; control hits were 0 in every battery):

| # | Battery | Hits | Known positives | Heading-only | Note / rows citing it |
|---|---|---|---|---|---|
| 1 | control nonsense term | 0 | none | 0 |  |
| 2 | calibration: security deposit | 31 | all passed | 0 |  |
| 3 | landlord/lessor + tenant/lessee co-occurrence (scope finder) | 145 | FAILED: 554.139 | 0 | scope finder only (real positive § 554.139 says "lessor or licensor"); not used for any absence |
| 4 | deposit related outside 554 | 9 | all passed | 0 |  |
| 5 | rent increase notice | 4 | FAILED: 554.633 | 0 | rerun as 6 (positive § 554.633 wording missed) |
| 6 | rent increase / rental amount change (rerun of B5) | 9 | all passed | 0 | edu-rent-increases-mi |
| 7 | landlord entry / access notice | 1 | all passed | 0 |  |
| 8 | late fee / late charge | 56 | all passed | 1 |  |
| 9 | application fee / screening fee | 116 | all passed | 3 | edu-no-application-fee-rule-mi |
| 10 | dishonored check / NSF | 103 | all passed | 5 |  |
| 11 | entry by landlord (context: tenant/landlord) | 28 | all passed | 0 | edu-entry-mi, landlords-access-mi |
| 12 | entry by landlord whole code (absence check) | 5 | all passed | 0 | edu-entry-mi, landlords-access-mi |
| 13 | late fee near tenancy | 12 | all passed | 0 | late-fee |
| 14 | application/screening fee near tenancy | 6 | all passed | 0 | edu-no-application-fee-rule-mi |
| 15 | smoke alarm/detector | 17 | all passed | 0 | edu-smoke-alarms-mi |
| 16 | carbon monoxide | 7 | all passed | 0 |  |
| 17 | radon | 4 | all passed | 0 | edu-no-radon-disclosure-mi |
| 18 | mold | 4 | all passed | 0 | edu-no-mold-disclosure-mi |
| 19 | bed bugs | 0 | all passed | 0 | edu-no-bed-bug-rule-mi |
| 20 | meth / drug lab disclosure | 35 | all passed | 0 | edu-meth-mi |
| 21 | flood disclosure | 7 | all passed | 0 | edu-no-flood-disclosure-mi |
| 22 | lead in rental housing | 12 | all passed | 0 |  |
| 23 | rent control / regulation of rent | 0 | all passed | 1 |  |
| 24 | local preemption of landlord-tenant regulation | 4 | FAILED: synthetic:"a local governmental unit sha | 0 | rerun as 126 and 127 (positive failed); edu-rent-control-mi |
| 25 | immigration / citizenship status near tenancy | 9 | all passed | 0 | edu-foreign-ownership-mi, edu-no-immigration-rule-mi |
| 26 | source of income | 28 | all passed | 0 |  |
| 27 | towing from private property | 33 | all passed | 0 |  |
| 28 | servicemember lease termination | 40 | all passed | 0 | edu-no-servicemember-statute-mi |
| 29 | tenant death | 36 | all passed | 0 |  |
| 30 | abandoned property of tenant | 15 | all passed | 0 | abandoned-property-mi |
| 31 | utility shutoff / landlord utility account | 6 | all passed | 0 |  |
| 32 | submetering / utility billing by landlord | 1 | all passed | 0 | edu-no-submetering-rule-mi |
| 33 | EV charging | 3 | all passed | 0 | edu-no-ev-charging-rule-mi |
| 34 | firearms near lease | 10 | all passed | 0 | edu-firearms-mi |
| 35 | flag / sign display | 12 | all passed | 0 | common-area-use, edu-no-display-rights-rule-mi |
| 36 | cannabis / marihuana near lease | 7 | all passed | 0 |  |
| 37 | sex offender residency | 1 | all passed | 0 | edu-no-sex-offender-residency-mi |
| 38 | eviction record sealing / suppression | 0 | all passed | 0 | edu-no-eviction-sealing-mi |
| 39 | foreclosure and tenants | 41 | all passed | 1 | edu-no-foreclosure-tenant-rule-mi |
| 40 | smoke/smoking/vape definitions in marihuana acts | 7 | all passed | 0 | smoking-policy-mi |
| 41 | vaping in whole code definitions | 7 | all passed | 0 |  |
| 42 | waterbed / water-filled furniture | 0 | all passed | 0 | common-area-use |
| 43 | landlord lien / security interest in tenant property | 26 | all passed | 0 | edu-landlord-lien-mi |
| 44 | jury waiver | 14 | all passed | 0 |  |
| 45 | statute of frauds lease term | 0 | FAILED: synthetic:"a lease for a longer period t | 0 | rerun as 68 (number style); edu-statute-of-frauds-mi |
| 46 | interest rate legal/contract | 2 | all passed | 0 |  |
| 47 | servicemember lease / rental agreement termination | 0 | all passed | 0 | edu-no-servicemember-statute-mi |
| 48 | consumer protection lease/real property definition | 7 | all passed | 0 |  |
| 49 | UETA exclusions eviction/notice | 0 | all passed | 0 |  |
| 50 | stigmatized property / psychologically impacted | 2 | all passed | 0 |  |
| 51 | condominium conversion tenant notice | 3 | all passed | 0 |  |
| 52 | squatter / trespass removal | 13 | all passed | 1 |  |
| 53 | tenant organization / organize | 2 | all passed | 0 |  |
| 54 | owner identity / agent disclosure for leases | 26 | all passed | 0 | lessor-notice-address-mi |
| 55 | exempt property / execution exemptions household | 10 | all passed | 0 |  |
| 56 | housing assistance / voucher acceptance (beyond SOI) | 446 | all passed | 0 |  |
| 57 | domestic violence and lease/landlord (outside 554.601b) | 3 | all passed | 0 |  |
| 58 | lock change / rekey | 1 | all passed | 0 |  |
| 59 | heat / temperature standard for dwellings | 0 | all passed | 0 |  |
| 60 | pool / swimming barrier | 4 | all passed | 0 |  |
| 61 | window guard / fall protection | 0 | all passed | 0 |  |
| 62 | notice to quit / vacate periods (outside 554.134) | 5 | all passed | 0 |  |
| 63 | holdover double rent | 1 | all passed | 0 | edu-holdover-mi, holdover-ca, holdover-rate-mi |
| 64 | acceleration of rent | 3 | all passed | 0 |  |
| 65 | rent receipt | 3 | all passed | 0 | edu-no-rent-receipt-rule-mi |
| 66 | lease copy delivery | 5 | all passed | 0 | edu-no-lease-copy-rule-mi |
| 67 | price gouging / emergency rent | 0 | FAILED: synthetic:"grossly in excess of the pric | 0 | rerun as 69 |
| 68 | statute of frauds leases (rerun of B45) | 2 | all passed | 0 |  |
| 69 | price gouging (rerun of B67) | 1 | all passed | 0 |  |
| 70 | section 8 voucher (rerun of B56, bounded) | 7 | all passed | 0 |  |
| 71 | servicemember lease (chapter 32,35 and SCRA references) | 5 | all passed | 0 | edu-no-servicemember-statute-mi |
| 72 | lead service line disclosure | 0 | all passed | 0 | edu-lead-hazard-mi |
| 73 | tenant death / contact option | 6 | all passed | 0 |  |
| 74 | electronic service consent (lease context) | 5 | all passed | 0 |  |
| 75 | UETA scope and exclusions | 1 | all passed | 0 |  |
| 76 | constitution: property, privacy, speech, marihuana, arms | 39 | all passed | 0 |  |
| 77 | PA 32 of 2026 compiled? large institutional investor | 3 | all passed | 0 |  |
| 78 | towing private property statute 257.252k | 6 | all passed | 0 | edu-towing-mi |
| 79 | sublet / assignment statute | 9 | all passed | 0 | no-sublet-assign |
| 80 | deposit interest / escrow interest | 0 | FAILED: 554.604 | 0 | rerun as 83 (positive § 554.604 lacks "interest"); edu-no-deposit-interest-mi |
| 81 | assistance/service animal housing | 15 | all passed | 0 | edu-assistance-animals-mi |
| 82 | delivery of possession at start | 0 | all passed | 0 | possession-delay |
| 83 | deposit interest (rerun of B80; B80 positive failed) | 6 | all passed | 0 |  |
| 84 | algorithmic rent setting | 0 | all passed | 0 | edu-no-algorithmic-rent-rule-mi |
| 85 | fee transparency / total rent disclosure | 7 | all passed | 0 | edu-no-fee-transparency-rule-mi |
| 86 | unclaimed property security deposits | 1 | all passed | 0 |  |
| 87 | deposit installments / holding deposit / fee in lieu | 3 | all passed | 0 |  |
| 88 | nonrefundable fees (deposit context) | 6 | all passed | 0 |  |
| 89 | security devices / deadbolts / rekey at turnover | 25 | all passed | 0 |  |
| 90 | tenant screening / criminal history in housing | 15 | all passed | 0 | edu-tenant-screening-mi |
| 91 | cable / telecom access in rental | 4 | all passed | 0 |  |
| 92 | landlord-held utility account / tenant pays | 57 | all passed | 0 |  |
| 93 | quiet enjoyment / quiet possession | 3 | all passed | 0 | edu-no-quiet-possession-statute-mi |
| 94 | eviction record suppression in court rules context (statute) | 0 | all passed | 0 | edu-no-eviction-sealing-mi |
| 95 | foreclosure + tenant protections | 1 | all passed | 0 | edu-no-foreclosure-tenant-rule-mi |
| 96 | rent / landlord lien on goods | 4 | all passed | 0 | edu-landlord-lien-mi |
| 97 | nuisance abatement and leases | 2 | all passed | 0 |  |
| 98 | servicemember lease termination (whole code, lease context) | 20 | all passed | 0 | edu-no-servicemember-statute-mi |
| 99 | emergency assistance / police call right | 1 | all passed | 0 | edu-no-emergency-assistance-rule-mi |
| 100 | lease completeness / blanks | 34 | all passed | 0 | edu-consumer-protection-mi, edu-no-lease-copy-rule-mi |
| 101 | plain language consumer contracts | 36 | all passed | 0 |  |
| 102 | translation of lease / language | 6 | all passed | 0 |  |
| 103 | renters insurance requirement | 13 | all passed | 0 | tenants-property-insurance-ks-oh-ca |
| 104 | sex offender residency (student safety zone) | 0 | all passed | 0 | rerun as 116 (scope too narrow for its positive); edu-no-sex-offender-residency-mi |
| 105 | stigmatized property disclosure | 12 | all passed | 0 |  |
| 106 | association notice to quit to tenants (condo) | 9 | all passed | 0 |  |
| 107 | hoa rental restrictions (condo/hoa) | 2 | FAILED: synthetic:"restrict the rental of units" | 1 | positive failed; not rerun, not relied on |
| 108 | unconscionab | 21 | all passed | 0 |  |
| 109 | penalty / liquidated damages statute | 8 | all passed | 0 |  |
| 110 | fire sprinklers / fire safety in rentals | 1 | all passed | 0 |  |
| 111 | pest / extermination duty | 6 | all passed | 0 | edu-no-bed-bug-rule-mi |
| 112 | heat requirement in dwellings | 4 | all passed | 0 |  |
| 113 | sex discrimination / harassment housing (criminal) | 0 | all passed | 0 |  |
| 114 | sales/use tax on residential rent | 2 | all passed | 0 |  |
| 115 | tenant security cameras / video doorbells | 5 | all passed | 0 |  |
| 116 | SORA residency restrictions | 0 | all passed | 0 | edu-no-sex-offender-residency-mi |
| 117 | marihuana schedule 1 listing | 2 | all passed | 0 |  |
| 118 | large institutional investor sections | 3 | all passed | 0 |  |
| 119 | landlord self-cure (repair tenant breach and charge) | 0 | all passed | 0 |  |
| 120 | waiver by acceptance of rent | 0 | all passed | 0 | edu-acceptance-of-payment-mi |
| 121 | extended absence notice (tenant duty) | 4 | all passed | 0 |  |
| 122 | occupancy standard (persons per room / floor area) | 0 | all passed | 0 | positives passed, 0 hits (synthetic positives used floor area; the statute uses air space); rerun as 123 and 124, which found § 125.483; edu-occupancy-standard-mi |
| 123 | occupancy standard rerun of B122 (floor area / sleeping room, Housing Law) | 2 | FAILED: synthetic:"every room occupied for sleep | 0 | one positive failed; rerun as 124 |
| 124 | occupancy standard rerun of B123 (adds "occupied for sleeping", overcrowding; whole Housing Law and whole code with tenancy context) | 3 | all passed | 0 |  |
| 125 | application of payments / order of applying partial payments (tenancy context) | 2 | all passed | 0 | application-of-payments |
| 126 | local preemption of landlord-tenant regulation (rerun of B24; B24 positive failed) | 8 | FAILED: synthetic:"this act preempts any local o | 0 | one positive (preempt-before-subject order) failed; rerun as 127; edu-rent-control-mi |
| 127 | local preemption (rerun of B126, adds preempt-before-subject order) | 10 | all passed | 0 | edu-condo-conversion-mi |
| 128 | formatting: boldface / bold / underlined / capital letters (tenancy context) | 6 | all passed | 0 |  |
| 129 | formatting: point type / type size / letters inch (tenancy context) | 11 | all passed | 0 |  |
| 130 | formatting: conspicuous / prominent / separate document / substantially (the )?following form (tenancy context) | 79 | all passed | 0 |  |
| 131 | occupancy standard, whole code (persons per bedroom / occupancy limit, tenancy context) | 2 | all passed | 0 | edu-occupancy-standard-mi |
| 132 | homeowners association statutes outside the Condominium Act (lease/tenant context) | 23 | all passed | 0 | edu-condominium-leasing-mi |
| 133 | construction lien: improvements contracted by a lessee (lessor interest) | 17 | all passed | 1 |  |
| 134 | lead service lines and lead plumbing (whole code) | 1 | all passed | 0 | edu-lead-hazard-mi |
| 135 | lead in drinking water (ordinary-word follow-up to 134) | 2 | all passed | 0 | edu-lead-hazard-mi |

## 18. Topic reference canvass (rules 27, 36)
Every one of the 308 topics in `lease-clause-topics.md` ends Present (an MI row), or with a recorded status: CONFIRMED ABSENT (battery and known-positive result), NOT LOCATED (with the search boundary), ANSWERED ELSEWHERE, NOT OFFERED, BARRED or NOT APPLICABLE. "States with rows" excludes MI. Citations drop the prefix.

### 18.1 Topics answered by an MI row (141)
| Topic | MI rows |
|---|---|
| acceptable-payment-methods | `acceptable-payment-methods-mi` |
| algorithmic-rent-setting | `edu-no-algorithmic-rent-rule-mi` |
| application-fees | `edu-no-application-fee-rule-mi` |
| application-of-payments | `application-of-payments` |
| due-at-signing | `due-at-signing` |
| fee-transparency | `edu-no-fee-transparency-rule-mi` |
| late-fee | `late-fee` |
| rent-control | `edu-rent-control-mi` |
| rent-escalation | `rent-cost-adjustment-mi` |
| rent-increase-notice | `edu-rent-increases-mi` |
| rent-payment | `rent-payment` |
| rent-receipts | `edu-no-rent-receipt-rule-mi` |
| returned-payments | `returned-payments-mi`, `edu-dishonored-check-mi` |
| unpaid-damages-interest | `edu-legal-interest-mi` |
| waiver-by-acceptance | `edu-acceptance-of-payment-mi` |
| condition-inspection | `edu-condition-inspection-mi` |
| deposit-escheat | `edu-deposit-unclaimed-mi` |
| deposit-last-month-rent | `edu-prepaid-rent-deposit-mi` |
| security-deposit-cap | `edu-security-deposit-cap-mi` |
| security-deposit-holding | `security-deposit-notice-mi`, `edu-deposit-holding-mi` |
| security-deposit-interest | `edu-no-deposit-interest-mi` |
| security-deposit-on-sale | `edu-deposit-on-sale-mi` |
| security-deposit-penalty | `edu-security-deposit-penalty-mi` |
| security-deposit-return | `security-deposit-return-mi` |
| security-deposit-use | `security-deposit-use-mi` |
| alterations | `no-alterations` |
| disturbance | `no-disturbance` |
| existing-condition | `existing-condition` |
| joint-liability | `joint-liability` |
| municipal-utility-lien | `municipal-water-lien-mi`, `edu-municipal-water-lien-mi` |
| permitted-occupants | `permitted-occupants`, `edu-occupancy-standard-mi` |
| residential-use-only | `residential-use-only` |
| smoking-policy | `smoking-policy-mi` |
| sublet-assign | `no-sublet-assign` |
| tenant-forward-proceedings | `tenant-forward-proceedings-ca` |
| tenant-maintenance | `tenant-maintenance` |
| tenant-repair-agreement | `tenant-repair-agreement-mi` |
| utilities-responsibility | `utilities-responsibility` |
| utility-payment-evidence | `utility-payment-evidence` |
| utility-service-continuity | `utility-service-continuity` |
| alarm-duties | `edu-smoke-alarms-mi` |
| appliances-included | `appliances-included` |
| habitability-modifiable | `edu-habitability-modifiable-mi` |
| landlord-maintenance | `landlord-maintenance`, `edu-habitability-mi` |
| quiet-possession | `edu-no-quiet-possession-statute-mi` |
| services-utilities-provided | `services-utilities-provided-ks-oh` |
| tenant-repair-remedies | `edu-tenant-repair-remedies-mi` |
| tenant-screening | `edu-tenant-screening-mi` |
| utilities-paid-by-landlord | `utilities-paid-by-landlord` |
| utility-landlord-account | `edu-utility-landlord-account-mi` |
| landlord-entry | `landlords-access-mi`, `edu-entry-mi` |
| abandoned-property | `abandoned-property-mi` |
| abandonment-and-mitigation | `rent-acceleration-mi`, `edu-mitigation-mi` |
| attorney-fees | `edu-attorney-fees-mi` |
| casualty-termination | `casualty-termination-mi`, `edu-casualty-mi`, `edu-casualty-short-term-mi` |
| conversion-notice | `edu-condo-conversion-mi` |
| criminal-activity | `criminal-activity-mi` |
| default-by-tenant | `default-by-tenant-mi` |
| dv-lease-termination | `dv-release-notice-mi`, `edu-dv-release-mi` |
| early-termination | `early-termination-ks` |
| eviction-process | `edu-eviction-process-mi` |
| eviction-record-sealing | `edu-no-eviction-sealing-mi` |
| expedited-criminal-eviction | `edu-expedited-criminal-eviction-mi` |
| for-cause-eviction | `edu-for-cause-eviction-mi` |
| foreclosure | `edu-no-foreclosure-tenant-rule-mi` |
| holdover | `holdover-ca`, `edu-holdover-mi` |
| holdover-rate | `holdover-rate-mi` |
| infirmity-termination | `early-termination-senior-infirmity-mi` |
| landlord-lien | `edu-landlord-lien-mi` |
| nonpayment-notice | `edu-nonpayment-notice-mi` |
| nuisance | `edu-nuisance-mi` |
| possession-delay | `possession-delay` |
| post-eviction-property | `edu-post-eviction-property-mi` |
| rental-application-accuracy | `rental-application-accuracy` |
| retaliation | `edu-retaliation-mi` |
| sale-or-management-change | `edu-sale-assignment-of-rents-mi` |
| self-help-eviction | `edu-self-help-eviction-mi` |
| servicemember-rights | `edu-no-servicemember-statute-mi` |
| surrender-end-of-term | `surrender-end-of-term-ks-ne` |
| tenant-caused-damage | `tenant-caused-damage-mi`, `edu-tenant-caused-damage-mi` |
| tenant-death | `tenant-death-contact-mi`, `edu-tenant-death-mi` |
| termination-notice | `edu-termination-notice-mi` |
| unauthorized-occupant-removal | `edu-unauthorized-occupant-mi` |
| addendum-precedence | `addendum-precedence` |
| dv-confidentiality | `edu-dv-confidentiality-mi` |
| electronic-signatures | `electronic-signatures`, `edu-electronic-records-mi` |
| emergency-assistance-right | `edu-no-emergency-assistance-rule-mi` |
| entire-agreement | `entire-agreement` |
| governing-law | `governing-law` |
| lease-copy | `edu-no-lease-copy-rule-mi` |
| notice-delivery-methods | `electronic-service-consent-mi` |
| notices | `notices` |
| rental-inspection | `housing-inspection-entry-mi`, `edu-housing-law-mi` |
| scope | `edu-scope-mi` |
| severability | `severability` |
| statute-of-frauds-lease-term | `edu-statute-of-frauds-mi` |
| statutory-forms | `edu-statutory-forms-mi` |
| tenants-property-insurance | `tenants-property-insurance-ks-oh-ca` |
| assistance-animal-accommodation | `assistance-animal-accommodation` |
| pet-fees | `edu-pet-deposit-mi` |
| pet-insurance-requirement | `pet-insurance-requirement` |
| pet-policy | `pet-policy-mi` |
| service-animal-misrepresentation | `edu-assistance-animals-mi` |
| assigned-parking-space | `assigned-parking-space-mi` |
| ev-charging | `edu-no-ev-charging-rule-mi` |
| parking | `parking-ks-oh-ca` |
| parking-vehicle-rules | `parking-vehicle-rules-mi` |
| storage-space | `storage-space-ks-oh-ca` |
| towing | `edu-towing-mi` |
| cannabis | `cannabis-cultivation-mi`, `edu-cannabis-mi` |
| common-area-use | `common-area-use` |
| fire-safety-grilling | `fire-safety-grilling` |
| firearms | `edu-firearms-mi` |
| guest-policy | `guest-policy` |
| guest-policy-day-limit | `guest-policy-day-limit` |
| inspection-rights | `inspection-rights` |
| keys | `keys` |
| landscaping-irrigation | `landscaping-irrigation` |
| rules-regulations | `rules-mi` |
| snow-removal | `snow-removal` |
| tenant-display-rights | `edu-no-display-rights-rule-mi` |
| bed-bug-disclosure | `edu-no-bed-bug-rule-mi` |
| fair-housing | `edu-fair-housing-mi` |
| flood-disclosure | `edu-no-flood-disclosure-mi` |
| hoa-compliance | `hoa-compliance-mi` |
| lead-based-paint | `lead-based-paint`, `edu-lead-hazard-mi` |
| meth-disclosure | `edu-meth-mi` |
| mold-disclosure | `edu-no-mold-disclosure-mi` |
| owner-identity-disclosure | `lessor-notice-address-mi` |
| radon-disclosure | `edu-no-radon-disclosure-mi` |
| sex-offender-occupancy | `edu-no-sex-offender-residency-mi` |
| source-of-income | `edu-source-of-income-mi` |
| stigmatized-property | `edu-stigmatized-property-mi` |
| truth-in-renting | `truth-in-renting-notice-mi`, `edu-truth-in-renting-statements-mi` |
| utility-submetering-disclosure | `edu-no-submetering-rule-mi` |
| consumer-protection-act | `edu-consumer-protection-mi` |
| exculpatory-clauses | `edu-exculpation-mi` |
| foreign-ownership | `edu-foreign-ownership-mi` |
| hoa | `edu-condominium-leasing-mi` |
| immigration-status | `edu-no-immigration-rule-mi` |
| prohibited-lease-terms | `edu-truth-in-renting-mi` |

### 18.2 Topics with no MI row (status and reason) (167)
| Topic | States with rows | Michigan status |
|---|---|---|
| adverse-proceeding-notice | ND | ANSWERED ELSEWHERE: tenant-forward-proceedings-ca tagged. |
| alt-housing | CA,CO,KS,NE,WY | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; the only displacement remedy read is Housing Law rent escrow (§ 125.530; edu-tenant-repair-remedies-mi). |
| appliances-excluded | SC | ANSWERED ELSEWHERE: appliances-included tagged; repair covenant § 554.139(1)(b). |
| automatic-renewal | CA,ND | NOT LOCATED as a statute (core acts read whole); holdover-ca continues month to month only on acceptance of rent; the RPOA lease renews automatically (§15). |
| balcony-inspection | CA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (CA). |
| bed-bug-cooperation | CA | CONFIRMED ABSENT: battery 19 (0 hits; known positives passed); edu-no-bed-bug-rule-mi. |
| casualty-and-mitigation-waivable | OH | ANSWERED ELSEWHERE: the casualty surrender right yields to a written agreement (§ 554.201; edu-casualty-mi); mitigation cannot be waived (§ 554.633(1)(k); edu-mitigation-mi). |
| children-occupancy | NV | ANSWERED ELSEWHERE: edu-occupancy-standard-mi (Housing Law air space; familial status). |
| cold-weather-vacate-notice | MN | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (MN). |
| collection-fee | ID,UT | NOT OFFERED: a lease may not make a party pay legal costs beyond those a statute allows (§ 554.633(1)(g); edu-attorney-fees-mi); case law on whether a flat collection fee is a 'legal cost' was not searched; an agreed fee is enforced only if reasonable in relation to the possible injury (Curran v Williams, 352 Mich 278, 282 (1958); UAW-GM Human Resource Ctr v KSL Recreation Corp, 228 Mich App 486, 508 (1998); MI log §1.4). |
| condemned-premises-rent-bar | MN | ANSWERED ELSEWHERE: Housing Law rent escrow when a certificate is withheld (§ 125.530; edu-tenant-repair-remedies-mi); drug-lab vacate orders (edu-meth-mi). |
| confession-of-judgment | MN,PA | ANSWERED ELSEWHERE: barred (§ 554.633(1)(d); edu-truth-in-renting-mi). |
| confirmed-absences-habitability | NE | NOT APPLICABLE: NE roll-up key; Michigan absences are recorded topic by topic. |
| confirmed-absences-misc | NE | NOT APPLICABLE: NE roll-up key; see the edu-no-*-mi rows. |
| confirmed-absences-outside-title | NE | NOT APPLICABLE: NE roll-up key; Michigan answers in edu-unauthorized-occupant-mi, edu-no-rent-receipt-rule-mi, edu-housing-law-mi. |
| construction-liens | FL | NOT COVERED BY A ROW: a construction lien attaches to the interest of the owner or lessee who contracted for the improvement and to the interest of an owner who required it (§ 570.1107(1)-(3); battery 133); the library's clauses do not require the tenant to improve the property (no-alterations tagged), so no Michigan clause or note is needed. |
| cure-and-eviction-grounds | ID,KS,MO,ND,NE,NV,OH,OK,SD | ANSWERED ELSEWHERE: default-by-tenant-mi, edu-nonpayment-notice-mi, edu-termination-notice-mi, edu-expedited-criminal-eviction-mi. |
| defective-drywall-disclosure | VA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (VA). |
| deposit-cost-schedule | IL,MO | NOT LOCATED: the deposit act (read whole) has no pre-set charge rule; uses are a closed list (§ 554.607; security-deposit-use-mi). |
| deposit-installments | CA,KS,MO,NE,WY | CONFIRMED ABSENT: whole read of the deposit act; battery 87 (3 hits, none a deposit installment rule; known positives passed). |
| deposit-surrender-notice | TX | ANSWERED ELSEWHERE: tenant's forwarding address within 4 days of termination of occupancy (§ 554.611; security-deposit-return-mi). |
| designated-repairer | NV | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (NV). |
| disability-accommodation | CA,ID,IL,IN,KS,MO,ND,SD | ANSWERED ELSEWHERE: § 37.1506a (edu-fair-housing-mi, edu-assistance-animals-mi, no-alterations note). |
| disaster-displaced-guests | CA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (CA). |
| disaster-duties | CA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; edu-casualty-mi. |
| double-letting | CA,KS,MN,ND | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run. |
| drug-free-housing-addendum | IL | ANSWERED ELSEWHERE: criminal-activity-mi. |
| dv-deposit-timing | ND | NOT LOCATED: § 554.601b (read whole) and the deposit act set no DV-specific deposit timing (edu-dv-release-mi). |
| dv-eviction-protection | ND,WY | ANSWERED ELSEWHERE: the threatened-injury ground excludes a tenant or household victim (§ 600.5714(1)(e); edu-termination-notice-mi, edu-no-emergency-assistance-rule-mi). |
| dv-lockchange | IL,IN,ND,UT | CONFIRMED ABSENT: battery 58 (1 hit, § 600.2918, the lockout rule; known positives passed); keys tagged. |
| dv-protection-order-chapter-moved | ND | NOT APPLICABLE: ND renumbering; § 554.601b's order references exist in the corpus (citation screen, §8). |
| dv-qualifying-documents | MN,NE | ANSWERED ELSEWHERE: documentation list in § 554.601b(1) (edu-dv-release-mi). |
| electric-submetering-disclosure | TX | CONFIRMED ABSENT: battery 32 (edu-no-submetering-rule-mi). |
| emergency-contact | TX | NOT LOCATED as a landlord duty; the lease gives the landlord's notice address (lessor-notice-address-mi) and an optional tenant death contact (tenant-death-contact-mi). |
| employee-screening | FL | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (FL). |
| environmental-event-termination | CO,KS | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; casualty-termination-mi. |
| ev-charging-end-of-tenancy | CO,IL | CONFIRMED ABSENT: battery 33; edu-no-ev-charging-rule-mi; CO clause not tagged. |
| ev-charging-requirements | CO,IL | CONFIRMED ABSENT: battery 33; edu-no-ev-charging-rule-mi. |
| ev-charging-shared-area | CO,IL | CONFIRMED ABSENT: battery 33; edu-no-ev-charging-rule-mi; CO clause not tagged. |
| eviction-hardship-stay | ND | NOT LOCATED as a hardship stay; writ timing (§ 600.5744) and the rental-assistance stay (MCR 4.201(I)(3)) in edu-eviction-process-mi. |
| eviction-penalty-clause-ban | CO | ANSWERED ELSEWHERE: § 554.633(1)(g) (edu-attorney-fees-mi). |
| eviction-service-party | TN | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; e-service consent for demands (electronic-service-consent-mi). |
| expedited-deposit-disposition | VA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (VA). |
| extended-absence-notice | AL,KS,NE,TN,VA | CONFIRMED ABSENT: battery 121 (4 hits, none a tenant duty; known positives passed); extended-absence-notice-ks not tagged. |
| fee-in-lieu-of-deposit | FL,TX,VA | CONFIRMED ABSENT: battery 87 ('in lieu of a security deposit': 3 hits, none landlord-tenant; known positive passed). |
| fee-unprovided-service | CO | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (CO). |
| fees-as-rent | AL,AZ,IN,MO,NE,NJ,OK,PA,SC,TN,VA,WY | NOT LOCATED as a statute: the nonpayment track runs on 'rent due under the lease' and excludes accelerated amounts (§ 600.5714(1)(a)); no published case deciding whether other lease charges are 'rent due' was found (MI log §1.4); RPOA ¶ 11 calls them 'additional rent' (§15). |
| fire-code-standard | ND | NOT LOCATED as a lease rule; Housing Law fire provisions (§ 125.482) read only in battery context (battery 110); local codes flagged (rule 3). |
| fire-sprinkler-duty | MN | CONFIRMED ABSENT as a retrofit duty: battery 110 (1 hit, § 125.482, read whole: an approved sprinkler system is an alternative in its fire-safety rules for class b multiple dwellings, and it requires a designated responsible person in a multiple dwelling of more than 8 families whose owner does not live there, edu-housing-law-mi). |
| foreclosure-disclosure | AZ,CA,MN,NV | CONFIRMED ABSENT: batteries 39 and 95 (edu-no-foreclosure-tenant-rule-mi). |
| forfeiture-redemption | CA | ANSWERED ELSEWHERE: paying within 7 days of the demand ends the nonpayment case (edu-nonpayment-notice-mi); payment after judgment (edu-acceptance-of-payment-mi). |
| frozen-standard-incorporation | ND | NOT APPLICABLE: no relied-on section incorporates a dated code edition as read; the Housing Law's population test is frozen to the last federal census (§ 125.401(2); edu-housing-law-mi). |
| government-fee-reimbursement | IN | ANSWERED ELSEWHERE: mid-term pass-through only for the cost increases § 554.633(1)(l)(iii) lists (rent-cost-adjustment-mi); no fee-reimbursement statute located. |
| governmental-fines | TX | NOT LOCATED; association fines the tenant causes are passed through by hoa-compliance-mi. |
| guarantor-renewal | TX | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (TX). |
| guest-rights | PA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (PA). |
| habitability-materiality | WY | ANSWERED ELSEWHERE: edu-habitability-mi, edu-tenant-repair-remedies-mi. |
| habitability-presumption | CA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; rent excused by the landlord's breach is deducted in a possession case (§ 600.5741; edu-tenant-repair-remedies-mi). |
| habitability-waiver | WY | ANSWERED ELSEWHERE: modification only in a lease with a current term of at least 1 year, remedies never waivable (§§ 554.139(2), 554.633(1)(a); edu-habitability-modifiable-mi). |
| hazardous-contamination-disclosure | MO | ANSWERED ELSEWHERE: drug-lab sites (edu-meth-mi); no general contamination disclosure located (battery 20 screen). |
| health-district-rental-rules | NV | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (NV). |
| heating | IL,NJ | ANSWERED ELSEWHERE: Housing Law keeps heating in good repair (§ 125.471; edu-habitability-mi); no temperature standard (batteries 59 and 112). |
| holding-deposit | AZ,CA,KS,MN,MO | CONFIRMED ABSENT as a statute: battery 87; a sum 'to be held for the term of the rental agreement, or any part of the term' is a security deposit (§ 554.601(d)), and no published case on a pre-lease holding deposit was found (MI log §1.4). |
| homestead-waiver | AL,UT,VA | NOT OFFERED: no statute authorizes a lease waiver of execution exemptions (battery 55; Const 1963, art. X, § 3; § 600.6023); edu-landlord-lien-mi; MI log §6.1. |
| inspection-condemnation-disclosure | MN | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; Housing Law certificates (edu-housing-law-mi). |
| inspection-notice-penalty | MN | ANSWERED ELSEWHERE: inventory checklists (§ 554.608; edu-condition-inspection-mi) and the deposit penalties (§ 554.613; edu-security-deposit-penalty-mi). |
| jury-waiver | CA | ANSWERED ELSEWHERE: barred (§ 554.633(1)(f); edu-truth-in-renting-mi). |
| key-control-policy | NV | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (NV). |
| landlord-breach-remedy | TX | ANSWERED ELSEWHERE: edu-tenant-repair-remedies-mi. |
| landlord-liability-insurance | NJ | CONFIRMED ABSENT: battery 103 (13 hits, none requires landlord liability insurance; known positive passed). |
| landlord-registration | AZ,GA,TN,UT | ANSWERED ELSEWHERE: Housing Law owner registry (§ 125.525; edu-housing-law-mi); local ordinances flagged. |
| landlord-remedies-termination | KS | ANSWERED ELSEWHERE: damages after possession (§ 600.5750; edu-holdover-mi), edu-mitigation-mi. |
| landlord-self-cure | AL,AZ,NE,OK,PA,SC,TN,VA,WY | CONFIRMED ABSENT: battery 119 (0 hits; known positive passed). |
| law-enforcement-cooperation | TN | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (TN). |
| lead-safe-certification | NJ | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; edu-lead-hazard-mi. |
| lease-completeness | AL,AZ,NE,PA,SC,TN,VA,WY | CONFIRMED ABSENT: battery 100 (34 hits, none a lease rule; known positive passed); no blank-space item in § 445.903 (edu-consumer-protection-mi). |
| lease-content-requirements | NV | ANSWERED ELSEWHERE: §4; edu-truth-in-renting-statements-mi. |
| lease-notice-initial-requirement | ND | ANSWERED ELSEWHERE: e-service of a demand needs specific written consent (§ 600.5718; electronic-service-consent-mi, initialed). |
| lease-term-limitation | KS | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; statute of frauds (edu-statute-of-frauds-mi). |
| liquidated-damages | OK | NOT LOCATED for residential leases: battery 109 (8 hits, none a residential lease rule); the penalty test (Curran v Williams, 352 Mich 278, 282 (1958); UAW-GM Human Resource Ctr v KSL Recreation Corp, 228 Mich App 486, 508 (1998)) is cited in holdover-rate-mi, returned-payments-mi and the late-fee and early-termination-ks tag notes; no published case applying it to a residential lease fee was found (MI log §1.4). |
| lockout-for-rent-delinquency | TX | BARRED: lockouts are unlawful interference (§ 600.2918(2); edu-self-help-eviction-mi). |
| meter-conservation-charge | SC | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (SC). |
| military-air-zone-disclosure | IN,VA | NOT LOCATED: batteries 28 and 98 (military terms near lease wording) found no lease disclosure. |
| minor-tenant-filing | IL,MN,OH,OK | NOT LOCATED: RJA ch. 57 and MCR 4.201 read whole; no minor-defendant rule. |
| nonrefundable-deposit-notice | AZ,ID,UT,WY | ANSWERED ELSEWHERE: a nonrefundable fee is not a security deposit (edu-security-deposit-cap-mi); no notice rule (battery 88: 6 hits, none landlord-tenant). |
| nonrefundable-deposit-separate-notice | WY | ANSWERED ELSEWHERE: as nonrefundable-deposit-notice (battery 88; edu-security-deposit-cap-mi). |
| nonresident-owner-agent | MO,SC,VA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; battery 54 (owner name and address) found no nonresident-landlord rule. |
| notice-service-fee | ID,UT | NOT OFFERED: § 554.633(1)(g) limits lease fee-shifting to costs a statute allows (edu-attorney-fees-mi). |
| notice-to-quit-waiver | PA | BARRED: a lease may not waive notice or procedure required in court or the ch. 57 rights (§ 554.633(1)(f), (j); edu-truth-in-renting-mi). |
| notice-to-vacate-additional-terms | KS | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; § 554.134 (edu-termination-notice-mi). |
| ordnance-demolition-meter-disclosures | CA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (CA). |
| other-landlord-facilities | CA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (CA). |
| owner-move-in-reservation | CA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (CA). |
| parking-rules-notice | TX | ANSWERED ELSEWHERE: parking-vehicle-rules-mi; mid-term changes limited by § 554.633(1)(l) (rules-mi, assigned-parking-space-mi). |
| part5-nonwaivable | CO | NOT APPLICABLE: CO key; Michigan's non-waiver rules are §§ 554.606, 554.639 (edu-truth-in-renting-mi). |
| periodic-services-entry | SC | ANSWERED ELSEWHERE: Housing Law permission-before-entry rule (landlords-access-mi, edu-entry-mi). |
| pest-control-notice | CA | NOT LOCATED: battery 111 (6 hits; § 125.474 vermin duty; no notice rule). |
| plain-language | AL,MN,NJ,PA,TN,VA | CONFIRMED ABSENT: battery 101. |
| plain-language-consumer-statement | PA | CONFIRMED ABSENT: battery 101 (36 hits, none reaches residential leases; known positive passed). |
| pool-safety | AZ,KS,TX | CONFIRMED ABSENT as a landlord duty: battery 60 (4 hits: public swimming pool and recreational authority sections; known positive passed). |
| portable-solar | VA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (VA). |
| portfolio-thresholds | IL,OH,VA | ANSWERED ELSEWHERE: 5-unit source-of-income threshold (edu-source-of-income-mi); Housing Law population thresholds (edu-housing-law-mi). |
| possession-bond | TN | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (TN). |
| private-well-testing | NJ | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (NJ). |
| prohibited-acts-renter | NC,WY | ANSWERED ELSEWHERE: no statutory list of prohibited tenant acts in the core acts; the statutory grounds are in edu-expedited-criminal-eviction-mi and edu-tenant-caused-damage-mi (§ 600.5714(1)(b), (d), (e)). |
| prop65-rental-warning | CA | NOT APPLICABLE: California act. |
| property-tax-rent-disclosure | NV | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (NV). |
| protected-class-inquiry-ban | IL,MN,ND,NE | ANSWERED ELSEWHERE: applications, records and inquiries indicating a preference are barred (§ 37.2502(1)(f); edu-fair-housing-mi). |
| purpose-limitation | ND | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (ND). |
| redemption | VA | ANSWERED ELSEWHERE: edu-nonpayment-notice-mi, edu-acceptance-of-payment-mi. |
| religious-cultural-display | NV | CONFIRMED ABSENT: battery 35 (edu-no-display-rights-rule-mi). |
| rent-concession | AZ,IL | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run. |
| rent-demand-bar | CA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (CA). |
| rent-into-court-counterclaim | AL,KS | ANSWERED ELSEWHERE: court escrow orders (MCR 4.201(I)(2)) added to edu-eviction-process-mi; rent excused by the landlord's breach (§ 600.5741; edu-tenant-repair-remedies-mi). |
| rent-receipt-anti-waiver | KS | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (KS). |
| rent-reporting | CA,NV | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run. |
| rent-tax | AZ,FL,ID,IL,IN,MO,OK,SD,UT | CONFIRMED ABSENT for residential leases: battery 114 (2 hits, both in the Community Convention or Tourism Marketing Act, §§ 141.872, 141.892, a lodging assessment); known positive passed. |
| renters-insurance-rules | IL,KS,MN,NC,TN,VA | CONFIRMED ABSENT: battery 103 (tenants-property-insurance-ks-oh-ca note). |
| repair-cost-termination | WY | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; edu-casualty-mi. |
| repair-escrow-exemption-notice | OH | ANSWERED ELSEWHERE: Housing Law rent escrow (§ 125.530; edu-tenant-repair-remedies-mi); no exemption notice. |
| repair-notice | CO,KS,WY | NOT LOCATED: no statute requires a repair request in writing (core acts read whole; § 554.139 has no notice condition); the RPOA lease's 48-hour certified letter is the form's own term (§15). |
| required-disclosures | VA | ANSWERED ELSEWHERE: §4 layout table; edu-truth-in-renting-statements-mi, edu-statutory-forms-mi. |
| required-fees | ID,NV,UT | ANSWERED ELSEWHERE: no statute requires every fee to be listed; a fee on every payment method is barred (§ 554.633(1)(o); acceptable-payment-methods-mi, edu-no-fee-transparency-rule-mi). |
| security-deposit-nonwaiver | CO,WY | ANSWERED ELSEWHERE: the deposit act cannot be waived (§§ 554.606, 554.633(1)(b); security-deposit-use-mi note, edu-truth-in-renting-mi). |
| security-deposit-standards | SC | NOT LOCATED: the deposit act (read whole) has no posted-standards rule. |
| security-devices | CA,IL,MN,MO,TX | CONFIRMED ABSENT as a landlord duty: battery 89 (25 hits, none a residential landlord duty; § 600.2918 is the lockout rule; known positives passed). |
| senior-housing-work-card | NV | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (NV). |
| service-animal-denial-penalty | GA,ID,IN,KS,MN,NC,NE,SD,UT | NOT LOCATED as a housing crime: battery 81 (15 hits; §§ 752.61-752.64 reach public places only); the disability act's remedies are civil (edu-assistance-animals-mi). |
| sex-offender-disclosure | CA,TN,VA | NOT LOCATED as a landlord duty; licensee immunity only (§ 339.2518; edu-stigmatized-property-mi). |
| sfr-occupancy-disclosure | NV | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (NV). |
| shutdown-rent-protection | NV | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (NV). |
| smoke-drift-waiver | UT | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; smoking-policy-mi. |
| social-security-defense | CA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (CA). |
| statutory-caps | OH | ANSWERED ELSEWHERE: the only statutory money cap is the deposit (edu-security-deposit-cap-mi); no late-fee or application-fee cap (late-fee note, battery 13; edu-no-application-fee-rule-mi). |
| statutory-early-termination | KS,ND,NJ,SD,TX | ANSWERED ELSEWHERE: § 554.601a (early-termination-senior-infirmity-mi), § 554.601b (edu-dv-release-mi), Truth in Renting voiding (edu-truth-in-renting-mi), condominium conversion (edu-condo-conversion-mi). |
| steam-radiator-covers | NJ | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (NJ). |
| stove-refrigerator | CA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; appliances-included tagged. |
| subsidized-inspection-refusal | IL | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; housing-inspection-entry-mi. |
| subsidy-habitability-proration | CO | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (CO). |
| subsidy-late-fee | CO | NOT LOCATED as a late-fee rule; landlords of 5 or more units may not set different fees based on source of income (§ 37.2502(3)(b); edu-source-of-income-mi). |
| substandard-property-receivership | MO,NV | NOT COVERED BY A ROW: Housing Law receivership (§ 125.535) read whole: in a suit to enforce the act the court may appoint a receiver who collects rents and repairs the building; a court enforcement tool, not a lease term. |
| telecom-access | CA,IN,VA | NOT LOCATED: battery 91 (4 hits, none a tenant access right; known positive passed). |
| tenancy-at-will | MN,SD | ANSWERED ELSEWHERE: § 554.134(1) (edu-termination-notice-mi). |
| tenant-insurance-claims | CO | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (CO). |
| tenant-records | VA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (VA). |
| tenant-right-to-organize | MN | ANSWERED ELSEWHERE: retaliation for tenant organization activity (§ 600.5720; edu-retaliation-mi). |
| tenant-rights-statement | IL,VA | ANSWERED ELSEWHERE: the Truth in Renting notice (truth-in-renting-notice-mi); no agency statement located. |
| tenant-security-cameras | AL,AZ,NE,PA,SC,TN,VA,WY | CONFIRMED ABSENT: battery 115 (5 hits, none residential; known positive passed). |
| tenant-statutory-duties | ID,IN,MO,OK,VA,WY | ANSWERED ELSEWHERE: no general tenant-duty statute; Housing Law cleanliness duty (§ 125.474; tenant-maintenance note, edu-habitability-mi) the tenant-conduct exception (§ 554.139(1)(b)); occupants of single-family and 2-family dwellings provide garbage receptacles (§ 125.478; edu-housing-law-mi); occupants of rental units test and clean smoke alarms in pre-1974 dwellings (R 408.30546; edu-smoke-alarms-mi). |
| term-change-notice | ID,IN,ND,SD | ANSWERED ELSEWHERE: mid-term changes only with written consent or the three 30-day adjustments (§ 554.633(1)(l); rules-mi, rent-cost-adjustment-mi, edu-rent-increases-mi); periodic tenancies end by § 554.134 notice (edu-termination-notice-mi). |
| tpa-exemption-notice | CA | NOT APPLICABLE: California act; rent control preempted (edu-rent-control-mi). |
| tpa-notice | CA | NOT APPLICABLE: California act; rent control preempted (edu-rent-control-mi). |
| tpa-sunset | CA | NOT APPLICABLE: California act. |
| translation-duty | CA,NV | CONFIRMED ABSENT: battery 102 (6 hits, none a landlord duty; known positive passed). |
| unbundled-parking | CA | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (CA). |
| unconscionability | CA,KS,MN,NE,SD | NOT LOCATED as a lease statute: battery 108 (21 hits: commercial code and consumer statutes; § 445.903 read for its listed practices, edu-consumer-protection-mi); unconscionability case law was not searched beyond the penalty test (MI log §1.4). |
| utility-allowance-cap | CO | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (CO). |
| utility-apportionment | IL,MN | CONFIRMED ABSENT: battery 32 (edu-no-submetering-rule-mi). |
| utility-deposit-return | WY | NOT LOCATED as a landlord rule; the municipal cash deposit under § 141.121(3) is the utility's (edu-municipal-water-lien-mi). |
| utility-disclosure-attachment | MN | CONFIRMED ABSENT: battery 32 (edu-no-submetering-rule-mi). |
| utility-interruption-submeter | TX | CONFIRMED ABSENT: battery 32 (edu-no-submetering-rule-mi). |
| utility-shutoff-statute | ND,SD,TX | ANSWERED ELSEWHERE: no statute (battery 31: 6 hits; § 460.9d is unauthorized use); Public Service Commission rules bar shutting off service for a landlord's unpaid bill for service a tenant used except in listed cases, and require 30 days' notice to each unit of a single-metered building of 3 or more households (R 460.138(1)(e), R 460.139(4); edu-utility-landlord-account-mi). |
| utility-transfer | TN | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run; interrupting a service the tenant procured is unlawful interference (§ 600.2918(2); edu-self-help-eviction-mi), so no landlord cutoff clause is offered. |
| veterans-incentive | FL | NOT LOCATED: no Michigan counterpart in the whole read of the core acts (Truth in Renting Act, security deposit act, RS 1846 ch. 66 tenancy sections, Mich. Comp. Laws § 600.2918, RJA ch. 57); no targeted whole-code search run (FL). |
| waterbed | CA,FL | CONFIRMED ABSENT: battery 42 (0 hits; known positive passed); common-area-use note. |
| window-guards | NJ | CONFIRMED ABSENT: battery 61 (0 hits; known positive passed). |
| written-notice-required | MN | ANSWERED ELSEWHERE: demands and notices to quit are written (§§ 554.134, 600.5716; edu-nonpayment-notice-mi, edu-termination-notice-mi). |

### 18.3 'Topics no state has a row for yet'
The reference (2,140 active rows, 308 topics) no longer carries that list; every one of its 308 topics has rows in at least one state, and each is answered in §18.1 or §18.2.

## 19. Step D screens (rules 40-53), one line each
- **40 formatting and placement:** batteries 128-130: four residential form rules (§§ 554.634(2), 554.603, 554.608(4), 554.609(4)), handled in §4; no first-page or competing-placement rule.
- **41 just cause:** none for private rentals; a fixed term ends without notice; `edu-for-cause-eviction-mi` keyed `for-cause-eviction` with the situational limits (local-government housing and mobile home parks, § 600.5714(2)-(3); condominium conversion, § 559.204; retaliation, § 600.5720).
- **42 required text in a shared clause:** the condominium compliance statement (§ 559.212(3), `hoa-compliance-mi`), the acceleration statement (§ 554.633(1)(i), `rent-acceleration-mi`), a fee-free payment method (§ 554.633(1)(o), `acceptable-payment-methods-mi`) and the medical-marihuana written-lease rule (`smoking-policy-mi`).
- **43 cure promises:** `default-by-tenant-mi` puts its carve-out for the no-cure grounds (24-hour drug, 7-day threatened injury, health hazard) in its own sentence reaching every limb; the 7-day nonpayment cure is statutory; `early-termination-ks` replaces the base with its 10-day cure; `criminal-activity-mi` carries its own no-cure sentence.
- **44 terms turned into duties:** the § 554.139 covenants make whatever the lease supplies part of 'the premises' to repair (`appliances-included` note); services the landlord must furnish cannot be cut (§ 600.2918(2); `utilities-paid-by-landlord`); a lease authorizing inspector entry makes the tenant's access a duty (§ 125.526(9)(a); optional `housing-inspection-entry-mi`).
- **45 electronic notices:** UETA applies only between parties who agreed, and either may refuse later electronic transactions (§ 450.835(2)-(3)); its scope section excludes only wills and most of the commercial code (§ 450.833; battery 75); e-service of a demand needs § 600.5718(1)(d)'s specific consent (`electronic-service-consent-mi`).
- **46 lease as the notice:** the deposit notice (§ 554.603, delivered in the lease), the DV statement (§ 554.601b(1), in the lease instead of posting), the death-contact option (§ 600.2918(3)(d)(i)) and the condominium statement are carried in the lease; no shared clause promises a separate notice the statute would then require.
- **47 knowing-use penalties:** knowing use of a void term removes the tenant's notice step and the cure defense (§ 554.636(3)); no criminal penalty; no library clause contains a § 554.633 term.
- **48 separate documents:** the inventory checklist (§ 554.608), the notice of damages (§ 554.609) and the DV third-party verification form (§ 554.601b(3)(e)) are separate; no lease clause stands in for them.
- **49 collection costs:** § 554.633(1)(g) bars fees and legal costs beyond those a statute allows; `default-by-tenant` and `default-by-tenant-ks-ne` not tagged; `default-by-tenant-mi` limits recovery to statutory costs.
- **50 'the lease controls':** fifteen choices, each made on purpose: § 554.139(2) (`tenant-repair-agreement-mi`); § 554.201 (not displaced; `casualty-termination-mi` preserves it); § 554.633(1)(i) (`rent-acceleration-mi`); § 554.633(1)(l)(i), (ii) (`rules-mi`, `assigned-parking-space-mi`); § 554.633(1)(l)(iii) (`rent-cost-adjustment-mi`); § 554.633(1)(e) carve-out (not offered); § 554.601b(1) (`dv-release-notice-mi`); §§ 554.134(4), 600.5714(1)(b) (`criminal-activity-mi`); § 600.2918(3)(d) (`tenant-death-contact-mi`); § 600.5718(1)(d) (`electronic-service-consent-mi`); § 123.165 (`municipal-water-lien-mi`); § 125.526(8)(a) (`housing-inspection-entry-mi`); § 333.26427(c)(3) (`cannabis-cultivation-mi`, `smoking-policy-mi`); § 438.31 written interest rate (not offered).
- **51 plain language and consumer contracts:** no plain-language statute for leases (battery 101); the Consumer Protection Act reaches residential leases (§ 445.902(g)) and a violating term is void (§ 554.633(1)(m)); its list has no blank-space or copy-at-signing item (battery 100; `edu-consumer-protection-mi`); no lease-copy statute (battery 66); formatting batteries run after the first draft (§4).
- **52 exculpation:** voided by § 554.633(1)(e) except the insured-casualty mutual release; the ks-oh-ca and ks-oh variants tagged; `pet-policy-mi` without the indemnity.
- **53 figures vs shared clauses:** `returned-payments` (ceiling-only wording pointing at no general cap), `holdover` ('maximum amount permitted by law' with no statutory measure), `security-deposit-use` (broader than the closed list), `acceptable-payment-methods` and `assigned-parking-space` (changes on 'reasonable notice' against § 554.633(1)(l)) and `landlords-access` (24 hours' notice against permission) overridden; `late-fee`, `keys`, `early-termination-ks` and `holdover-ca` checked with no Michigan figure in conflict; the deposit cap goes to the builder (§10).
- **35c constitution:** loaded before the first battery; findings in §17.
- **37 tenancy type:** the deposit cap is per tenancy, not per term; acceleration, the repair modification and the casualty clause are fixed-term (one year or more) only; § 554.601a needs 13 months' occupancy; notice periods differ for periodic, year-to-year and fixed terms (`edu-termination-notice-mi`).
- **39 eviction duties:** post-judgment property handled by the officer (`edu-post-eviction-property-mi`); lockout ban (`edu-self-help-eviction-mi`); no record-sealing rule in statutes or MCR 8.119 (`edu-no-eviction-sealing-mi`); no court-rule period conflicts with a statutory landlord duty.
- **54t tenant-caused damage:** answered provision by provision (§6.1).
- **79 summaries re-read:** every row written section-open; qualifiers attached to their own sentences (for example § 554.139(1)(b)'s tenant-conduct exception, § 554.201's written-agreement clause); three independent-check rounds (§13).

## Proposed SOP changes
1. When a battery's positives are all synthetic and it returns 0 hits, run a second battery on the topic's ordinary word for the problem ('overcrowding', not only 'persons per bedroom') before recording an absence; in Michigan, battery 122's synthetic floor-area positives passed while the statute measures cubic feet of air space, and only the 'overcrowd' term found § 125.483.
2. Generate each row's battery citation (number, hits, whether every positive passed) from the battery log rather than typing it, and cite a battery whose positive failed only as 'recorded as failed, rerun as N'; in Michigan a row cited battery 24 after its positive had failed, and a later note called battery 126 'known positives passed' when one had failed.
3. Run the rule 40 formatting batteries in Step C with the outside-title batteries, not in Step D; in Michigan they ran after drafting (batteries 128-130) and changed nothing, but rule 51 asks for them before drafting and Step D's position invites running them last.
4. For rule 26, record the single-state screen as a triage (clause text names another state or its statute; topic already answered by the new state's clause; the rest read in full) with the counts, so the screen of several hundred clauses is checkable.
5. Re-check by the independent agent any row edited after its last independent-check round, scoped to those rows; in Michigan six rows edited after the second round produced nine findings.
6. Rule 76: state that legal and drafting judgments (narrowing an optional clause, adding a savings sentence, choosing which tenancies a clause covers) are Claude's to make and record, and that Taylor is asked only for product decisions; Taylor, 2026-10-01: 'This is a legal call under SOP rule 76, so make it yourself next time.'
7. Record case law as questions with outcomes (read and applied; searched, none found; not searched) in the log, and write row notes as search outcomes ('no published case … was found'), so a reader can tell an absence of law from an absence of search; in Michigan the first pass labelled every case question 'unread', and the closeout round had to sort them.

## Proposed topic questions
1. `permitted-occupants`: Does a housing code set occupancy by air space or floor area per occupant, rather than persons per bedroom, and in which places does it apply?
2. `eviction-process`: Can the court order the tenant to pay rent into escrow while the trial is adjourned, and what does the tenant lose by not paying?
3. `conversion-notice`: Does the condominium act preempt local conversion moratoria and tenant rights beyond the act?
4. `casualty-termination`: Does a rule letting the parties modify the repair covenant only in leases of a year or more limit a landlord casualty-termination clause in shorter leases?
5. `security-deposit-return`: May the landlord refund the deposit balance by electronic transfer, and does that change the deadline?
6. `rental-inspection`: Can the lease itself authorize a housing inspector to enter, so the tenant must provide access without separate consent?
7. `municipal-utility-lien`: Does a lease clause plus an affidavit filed with the utility keep a tenant's unpaid water and sewer bills from becoming a lien on the property?
8. `tenant-death`: Must the landlord offer the tenant in writing the option to name a contact person before it can use a statutory reentry procedure after a sole tenant dies?
9. `notice-delivery-methods`: Is electronic service of a demand for possession allowed only with the tenant's specific written consent confirmed by e-mail reply, and may the landlord refuse to rent to someone who declines?
10. `cannabis`: Does the adult-use law let a lease ban smoking and cultivation but not possession or non-smoking consumption?
11. `utility-landlord-account`: Do the utility regulator's rules bar shutting off a tenant's service for the landlord's unpaid bill, and must each unit be notified before a building-wide shutoff?

## Sync (Claude Code, 2026-10-02)

- **Merged** with `merge-delta.py --base ce945c2` (the 2,263-row library the kickoff was staged from): 45 shared rows tagged MI (note-only changes; three of them, `due-at-signing`, `early-termination-ks` and `electronic-signatures`, had GA retro notes added since the base and were merged onto the current rows), 114 new rows, no refusals. The GA retro merged first. Library 2,414 rows; MI 163 active (75 lease clauses, 88 education). Michigan shows 75 clauses with no same-topic pairs; every other state's set unchanged.
- **Guards:** `check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py` and `checkConfigIds.js` all pass.
- **Statute spot-check, 6 of 6, against the official Michigan Compiled Laws (legislature.mi.gov chapter 554 and section pages, compiled through 2026 Mich. Pub. Acts 103, read by Claude Code at sync):** § 554.602 (1 1/2 months' cap) matches `edu-security-deposit-cap-mi`; § 554.603's boldface statement is verbatim in `security-deposit-notice-mi`; § 554.634(2)'s notice is verbatim in `truth-in-renting-notice-mi`; § 554.601b(1)'s sentence is verbatim in `dv-release-notice-mi`; §§ 554.139(1)-(2) and 554.201 support `casualty-termination-mi` and `tenant-repair-agreement-mi` as drafted; § 554.633(1)(o) (fee-free payment method, 2026 Mich. Pub. Acts 103) matches `acceptable-payment-methods-mi`. § 600.5714(1)(a) and §§ 600.2918(2)-(3) and 554.607 were also read for the rows below.
- **Casualty clause (backlog, 2026-10-01):** `casualty-termination-mi` carries all three required changes (one-year Term limit stated in the clause, the § 554.201 right preserved, rent stops from the date the home became unfit, and no release for wilful or irresponsible conduct), and its notes record the case-law boundary (searched, none found).
- **Rule 27, four rows added at sync.** §18.2 answered fees-as-rent (NOT LOCATED), landlord self-cure (battery 119), lease completeness (battery 100) and tenant security cameras (battery 115) without rows, while every state that has run rule 27 carries rows for the seven topics. Added, each RECOMMENDED education, drafted from this log's battery records with the controlling sections read at sync: `edu-fees-as-rent-mi` (§ 600.5714(1)(a); the deposit can be applied only to the § 554.607 uses), `edu-no-landlord-self-cure-mi` (§§ 554.607(a), 600.2918(2)-(3)), `edu-no-lease-completeness-rule-mi`, `edu-no-tenant-camera-rule-mi`.
- **Citations file** `lease-clause-citations-MI.csv`: 163 rows (124 cited, 21 confirmed-absent education rows, 18 generic clauses).
- **Legal watch:** MI config (116 sections; `"MCL 554.633"`-style queries, since Michigan bills amend "(MCL 554.633)"; ranges skipped; lead and HUD CFR checks; 42 U.S.C. §§ 4852d and 3604) with manual recheck items for the court rules and SCAO forms, the Constitution and administrative rules, the case law the rows rely on (the 2026 Supreme Court cites need their Michigan Reports page) and HUD's assistance-animal position. `legal-watch-mi.yml` is committed with its schedule commented out until after 2027-01-28, so the first (self-seeding) run is 2027-02-28. No live run: a first run fetches every historical bill.
- **PARTIAL review:** none; every MI row is VERIFIED.
- **Variables:** no new ones. `{{holdover_daily_rate}}` and `{{landlord_notice_address}}` still have no resolver; MI added to their M.14 rows.
- **Topic questions:** all 11 added to `topic-questions.csv`; reference regenerated.
- **SOP 1.19:** all seven proposals adopted (rules 19, 21, 26, 40, 76, new 80); MI column added to the conformance table.
- **For Taylor:** the shared `snow-removal` edit he asked for (§6.2, §10) and the HUD assistance-animal flag (§10) are raised with him after this sync; the builder items in §10 are in the backlog (M.12 formatting, M.13 deposit cap and term-length gates).

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.
